cbahan = function(game, id){
	Phaser.Sprite.call(this, game, 0, 0, 'inGame');
	var name = gameData.ingSpriteName[id];
	// trace("nama", name);
	this.frameName = 'inGame/' + name;
	this.anchor.setTo(0.5);
	this.id = id;
	this.indexNo = curState().ingredients.length;
	this.name = name;
	game.add.existing(this);
	curState().ingredients.push(this);
	curState().gPesanan.add(this);
	this.init();
};

cbahan.inherit({
	_speed: 0.0,
	_tween: null,
	_isReady: false,
	_da:0,
	_mx:0,

	init: function() {
		this._speed = game.rnd.realInRange(4,7);

		this.y = curState().gh * 0.3;
		this.x = game.rnd.integerInRange(this.width*0.5, curState().gw-this.width*0.5);

		this._tween = game.add.tween(this.scale).from({x:0,y:0},200, Phaser.Easing.Elastic.InOut, true);
		this._tween.onComplete.addOnce(function() {
			csound.fall();
			this._isReady = true;
		}, this);
	},

	checkRecipe:function(){
		if(!curState().custNow._ingShow[0]){
			this._isReady = true;
			curState().burger.removeChild(this);
			curState().ingredients.push(this);
			return;
		}

		if(this.id == curState().custNow._ingShow[0].id){
			curState().custNow.completeOne();
			var result = 'good';
			if(this.x >= curState().burger.x - (curState().burger.width * 0.3) && this.x <= curState().burger.x + (curState().burger.width * 0.3)){
				result = 'great';
				if(this.x > curState().burger.x - (curState().burger.width * 0.05) && this.x < curState().burger.x + (curState().burger.width * 0.05)){
					result = 'perfect';					
				}
			}
			curState().burger.effect(result);

			var maxPerfect = curState().recipeNow.length;
			if(curState().burger._perfect == maxPerfect){
				result = 'allperfect';
			}

			this.createText(result);
		} else {
			this._isReady = false;
			this.createText("wrong");
			curState().custNow.checkBurger();
		}
	},

	createText:function(result){
		var x = curState().burger.x;
		var y = curState().burger.y - (curState().burger.height + (this.height * 1));
		var text = global.addText(x, y, _t(result), 50, game_config.font1);
		text.anchor.setTo(0.5);

		if(result == 'perfect'){
			csound.perfect();
			text.fill = '#009245';
			text.stroke = '#ABFF9F';
		} else if(result == 'great'){
			csound.great();
			text.fill = '#297AEF';
			text.stroke = '#A1CCFF';
		} else if(result == 'good'){
			csound.good();
			text.fill = '#F97306';
			text.stroke = '#FFD8BB';
		} else if(result == 'allperfect'){
			csound.perfect();			
			text.fill = '#009245';
			text.stroke = '#ABFF9F';
		} else {
			text.fill = 'red';
			text.stroke = '#FFC7C7';
		}

		text.strokeThickness = 10;
		curState().gPesanan.add(text);
		curState().gPesanan.bringToTop(text);

		var tween = game.add.tween(text.scale);
		tween.from({x:0, y:0}, 500, Phaser.Easing.Elastic.InOut, true);
		tween.onComplete.add(function(){
			var tween2 = game.add.tween(text.scale);
			tween2.to({x:0, y:0}, 500, Phaser.Easing.Elastic.InOut, true);
			tween2.onComplete.add(function(){
				text.destroy();
			}, this);
		}, this);
	},

	muter: function(arah) {
		this._da = game.rnd.integerInRange(3,5) * arah;
		this._mx = this._speed * arah;
	},

	update: function() {
		if(curState().pauseBtn.isPaused){
			return;
		}

		if (this._isReady) {
			this.y += this._speed;	
			if(this.y > curState().gh * 1.1){
				this.destroy();
			} else if(this.y > curState().tray.y - curState().burger.height && this.y < curState().tray.y - (curState().burger.height - (this.height * 0.5))){
				if(this.x > curState().tray.x - (curState().tray.width * 0.5) && this.x < curState().tray.x + (curState().tray.width * 0.5)){
					if(this._da > 0) return;
					curState().burger.addIngredient(this);
				}
			}

			this.angle += this._da;
			this.x += this._mx;
		}
	}
}, Phaser.Sprite);