ccustomer = function(game){
	var x = curState().gw * 0.22;
	var y = curState().gh * 0.17;
	var custId = game.rnd.integerInRange(1, 5);
	Phaser.Sprite.call(this, game, x, y, 'chara');
	this.frameName = 'chara/cust' + custId;
	this.anchor.setTo(0.5);
	game.add.existing(this);
	curState().gCust.add(this);
	this.init();
};

ccustomer.inherit({
	_ingShow : [],
	_showNow : 0,
	_isFinished : false,
	_money : null,

	init:function(){
		curState().recipeNow = [];
		// curState().recipeNow.push(9);				

		var pickRecipe = game.rnd.integerInRange(1, plRef.recipeUnlock);
		var idRecipe = pickRecipe - 1;

		curState().burger._id = idRecipe;

		for(var a = 0; a < gameData.recipes[idRecipe].length; a++){
			var idBahan = gameData.recipes[idRecipe][a];
			curState().recipeNow.push(idBahan);			
		}

		curState().recipeNow.push(8);
		console.log(curState().recipeNow);

		var tween = game.add.tween(this);
		tween.from({y : -200}, 500, Phaser.Easing.Circular.InOut, true);
		tween.onComplete.add(function(){
			curState().custNow = this;
			curState().generateItem();
		}, this);

		this.showRecipe();
	},

	showRecipe:function(){
		this._ingShow = [];
		for(var a = 0; a < 3; a++){
			var bahan = this.generateBahan(a);			
			this._ingShow.push(bahan);
			this._showNow++;
		}
	},

	generateBahan:function(a){
		var x = (curState().blackBoard.x - (curState().blackBoard.width * 0.3)) + (a * 120);
		var y = curState().blackBoard.y;
		var id = curState().recipeNow[this._showNow];
		var bahan = new cpesan(game, x, y, id);
		return bahan;
	},

	completeOne:function(){
		this._ingShow[0].disappear();
		this._ingShow[0] = null;
		for(var a = 0; a < this._ingShow.length; a++){
			if(!this._ingShow[a]){
				if(this._ingShow[a+1]){
					var toX = (curState().blackBoard.x - (curState().blackBoard.width * 0.3)) + (a * 120);
					this._ingShow[a+1].moveLeft(toX);
					this._ingShow[a] = this._ingShow[a+1];
					this._ingShow[a+1] = null;
				} else {
					if(this._showNow < curState().recipeNow.length){
						var bahan = this.generateBahan(a);
						this._ingShow[a] = bahan;
						this._showNow++;
					}
				}
			}
		}

		this.checkRecipe();
	},

	checkRecipe:function(){
		var exist = 0;
		for(var a = 0; a < this._ingShow.length; a++){
			if(this._ingShow[a]){
				exist++;
			}
		}

		if(exist == 0){
			this._isFinished = true;
			game.time.events.remove(curState().outTime);
			game.time.events.add(Phaser.Timer.SECOND * 0.5, this.checkBurger, this);
		}
	},

	generateMoney:function(){
		csound.cash();
		this._money = global.addSprite(0, 0, 'inGame/money');
		this._money.anchor.setTo(0.5);
		curState().gPesanan.add(this._money);

		var price = curState().burger._earn;
		var jumlah = global.addText(this._money.width * -0.55, this._money.height * -0.85, _t("earn", price), 38, game_config.font1);
		jumlah.anchor.setTo(0, 0.5);
		jumlah.fill = '#21942A';
		jumlah.stroke = '#ABFF9F';
		jumlah.strokeThickness = 8;
		this._money.addChild(jumlah);

		var tips = curState().burger._bonusTip;
		var bonus = global.addText(jumlah.x + (jumlah.width * 1.2), jumlah.y, _t("bonus", tips), 38, game_config.font1);
		bonus.anchor.setTo(0, 0.5);
		bonus.fill = '#21942A';
		bonus.stroke = '#ABFF9F';
		bonus.strokeThickness = 8;
		this._money.addChild(bonus);

		this._money.x = curState().tray.x;
		this._money.y = curState().tray.y - (curState().burger.height * 1.3);
		this._money.scale.setTo(0.8);
		// this._money.angle = 30;

		var tween = game.add.tween(this._money);
		tween.from({x:this._money.x - 10, y:this._money.y + 10, alpha : 0}, 500, Phaser.Easing.Circular.InOut, true);

		game.time.events.add(Phaser.Timer.SECOND * 0.75, this.stepOut, this);
	},

	checkPerfect:function(){
		curState().burger.countPrice();

		if(curState().burger._perfect == curState().recipeNow.length){
			// trace("count perfect", curState().burger._perfect, curState().recipeNow.length);
			// csound.allperfect();
			var x = 0;
			var y = 0;
			curState().burger.forEach(function(obj){
				if(obj.id == 8){
					x = (curState().burger.x + obj.x) + 10;
					y = (curState().burger.y + obj.y) - 20;
				}
			}, this);
			trace(x, y);

			var flag = global.addSprite(x, y, 'inGame/perfectFlag');
			flag.anchor.setTo(0.5, 1);
			curState().gPesanan.add(flag);
			
			// console.log(flag);

			var tween = game.add.tween(flag);
			tween.from({y:curState().gh * 0.3}, 500, Phaser.Easing.Circular.InOut, true);
			tween.onComplete.add(function(){
				flag.x -= curState().burger.x;
				flag.y -= curState().burger.y;
				curState().burger.add(flag);
				this.generateMoney();
			}, this);
		} else {
			this.generateMoney();
		}
	},

	checkBurger:function(){
		curState().tray.inputEnabled = false;
		curState().trayClicked = false;
		game.time.events.remove(curState().outTime);

		for(var a = 0; a < curState().ingredients.length; a++){
			if(!curState().ingredients[a] || !curState().ingredients[a]._isReady) continue;
			curState().ingredients[a].destroy();
		}

		curState().ingredients = [];

		if(this._isFinished){
			this.checkPerfect();
		} else {
			for(var a = 0; a < this._ingShow.length; a++){
				if(this._ingShow[a]){
					this._ingShow[a].disappear();
				}
			}

			csound.wrong();
			game.time.events.add(Phaser.Timer.SECOND * 0.8, this.stepOut, this);
		}
	},

	stepOut:function(){
		if(this._money) this._money.destroy();
		curState().custNow = null;
		curState().tray.moveLeft();
		var tween = game.add.tween(this);
		tween.to({x : -200}, 500, Phaser.Easing.Circular.InOut, true);
		tween.onComplete.add(function(){
			this.destroy();			
			if(curState().custToServe > 1){
				curState().tray = new ctray(game);
				curState().burger = new cburger(game, curState().tray.x, curState().tray.y);
				curState().custNow = new ccustomer(game);
				curState().custToServe--;
			} else {
				curState().custToServe--;
				plRef.moneyInPocket += curState().moneyInGame;
				curState().gameOver = true;
			}
		}, this);
	},
}, Phaser.Sprite);