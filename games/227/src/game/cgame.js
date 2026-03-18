cgame = function (game) {

};

cgame.inherit({

	preload: function() {
		Asset.png('bgGame-01');
		Asset.png('resultBg-01');
		Asset.atlaspng('chara');

		BaseState.prototype.preload.call(this);
	},
	init: function() {
		BaseState.prototype.init.call(this);
		// trace("INIT", this.bg_loader);
	},

	create: function () {
		BaseState.prototype.create.call(this);
		csound.play(1);
		this.gInGame = game.add.group();
		this.gCust = game.add.group();
		this.gButton = game.add.group();
		this.gPesanan = game.add.group();
		this.gBurger = game.add.group();

		this.custToServe = plRef.recipeUnlock + 5;
		this.moneyInGame = 0;
		this.bonus = 0;
		
		this.bg = game.add.sprite(this.gw * 0.5, this.gh * 0.5, 'bgGame-01', null);
		this.bg.anchor.setTo(0.5);
		this.gBG.add(this.bg);

		this.playBox = global.addSprite(this.gw * 0.5, this.gh, 'inGame/gameBox');
		this.playBox.anchor.setTo(0.5, 1);
		this.playBox.width = this.bg.width;
		this.gInGame.add(this.playBox);

		this.pauseBtn = new cpause(game, this.gw * 0.1, this.gh * 0.05);
		this.soundBtn = new csound(game, this.gw * 0.9, this.pauseBtn.y);

		this.custTag = global.addSprite(this.gw * 0.85, this.gh * 0.96, 'global/goalTag');
		this.custTag.anchor.setTo(0.5);
		this.gButton.add(this.custTag);

		this.custIcon = global.addSprite(-1 * (this.custTag.width * 0.2), -2, 'inGame/custGoal');
		this.custIcon.anchor.setTo(0.5);
		this.custTag.addChild(this.custIcon);
		
		this.countCust = global.addText(this.custIcon.x + (this.custIcon.width * 0.7), 5, this.custToServe + '', 30, game_config.font1);
		this.countCust.anchor.setTo(0, 0.5);
		this.countCust.fill = '#FFDD00';
		this.custTag.addChild(this.countCust);

		this.incomeTag = global.addSprite(this.gw * 0.15, this.custTag.y, 'global/goalTag');
		this.incomeTag.anchor.setTo(0.5);
		this.gButton.add(this.incomeTag);

		this.showIncome = global.addText(0, 5, _t("dollar", this.moneyInGame), 30, game_config.font1);
		this.showIncome.anchor.setTo(0.5);
		this.showIncome.fill = '#FFDD00';
		this.incomeTag.addChild(this.showIncome);

		this.blackBoard = global.addSprite(this.gw * 0.65, this.gh * 0.15, 'inGame/ingredientsBox');
		this.blackBoard.anchor.setTo(0.5);
		this.gInGame.add(this.blackBoard);

		this.trayClicked = false;
		this.saveCoordinate = 0;
		this.gameOver = false;
		this.generateResult = false;

		this.ingredients = [];
		this.recipeNow = [];

		this.tray = new ctray(game);
		this.burger = new cburger(game, this.tray.x, this.tray.y);
		this.custNow = new ccustomer(game);
		// this.custNow.generateMoney();

		this.result = new cresult(game);

		this.gCont.add(this.gCust);
		this.gCont.add(this.gInGame);
		this.gCont.add(this.gBurger);
		this.gCont.add(this.gPesanan);
		this.gCont.add(this.gButton);

		this.checkTutor();
		_A.startLevel(plRef.days);
		this.onResize();
	},

	checkTutor:function(){
		this.tutorNow = 0;

		if(plRef.attempPlay == 1){
			ctutorial.tutorial1();
		}

		if(plRef.tutorText.length > 0){
			this.createTutor();
		}
	},

	createTutor:function(){
		this.pauseBtn.inputEnabled = false;
		this.pauseBtn.isPaused = true;

		this.tutor = new ctutorial(game, this.gw * 0.5, this.gh * 0.5, plRef.tutorText[this.tutorNow]);
		this.gCont.add(this.tutor.gTutor);

		this.tutorNow++;
	},

	checkAfterTutor:function(){
		if(this.tutorNow < plRef.tutorText.length){
			this.createTutor();
		} else {
			plRef.tutorText.length = [];
			this.pauseBtn.inputEnabled = true;
			this.pauseBtn.isPaused = false;
			plRef.attempPlay++;
			Data.save();
		}
	},

	generateItem:function(){
		var timer = game.rnd.realInRange(1.5, 3);
		this.outTime = game.time.events.add(Phaser.Timer.SECOND * timer, function(){
			if(!this.custNow) return;
			var poss = game.rnd.realInRange(0, 100);
			var id = 0;
			if(poss <= 45){
				id = this.custNow._ingShow[0].id;
			} else if(poss > 45 && poss < 70){
				id = game.rnd.pick(this.recipeNow);
			} else {
				id = game.rnd.integerInRange(0, gameData.ingSpriteName.length - 1);
			}

			var bahan = new cbahan(game, id);

			if(this.custNow){
				this.generateItem();
			}
		}, this);
	},

	checkIngredients:function(){
		for(var a = 0; this.ingredients.length; a++){
			if(!this.ingredients[a]) continue;
			// if(this.ingredients[a].y)
		}
	},

	moveTray:function(){
		if(!this.trayClicked) return;
		this.tray.x = game.input.x;	
	},

	update:function(){
		BaseState.prototype.update.call(this);
		this.countCust.setText(this.custToServe + '');
		this.showIncome.setText(_t("dollar", this.moneyInGame));
		if(this.gameOver){
			if(!this.generateResult){
				this.result.create();
				var tween = game.add.tween(this.result.gFrame);
				tween.from({y:-500}, 200, Phaser.Easing.Elastic.InOut, true);
				this.generateResult = true;
				plRef.days++;
				Data.save();
			}
			return;
		}

		if(this.pauseBtn.isPaused){
			game.time.events.pause();
			return;
		} else {
			game.time.events.resume();			
		}

		this.moveTray();
	},

	render:function(){		
		
	},

}, BaseState);
