cupgradePage = function(game){

};

cupgradePage.inherit({
	preload:function(){
		BaseState.prototype.preload.call(this);
		Asset.png('bgUpgrade');
	},

	init:function(){
		BaseState.prototype.init.call(this);
	},

	create:function(){
		BaseState.prototype.create.call(this);
		// csound.play(2);
		this.gButton = game.add.group();
		this.gInGame = game.add.group();

		this.bg = game.add.sprite(this.gw*0.5, this.gh*0.5, 'bgUpgrade', null);
		this.bg.anchor.setTo(0.5);
		this.bg.isStretch = true;
		this.gBG.add(this.bg);

		this.soundBtn = new csound(game, this.gw * 0.07, this.gh * 0.03);

		this.woodBox = global.addSprite(this.gw * 0.5, this.gh * 0.5, 'pageDecor/woodBg');
		this.woodBox.anchor.setTo(0.5);
		this.gInGame.add(this.woodBox);

		this.titlePage = global.addText(this.woodBox.x, this.woodBox.y - (this.woodBox.height * 0.405), _t('upgrade'), 60, game_config.font1);
		this.titlePage.anchor.setTo(0.5);
		this.titlePage.fill = 'white';
		this.titlePage.fontWeight = 'normal';
		this.titlePage.setShadow(9, 7, 'rgba(0, 0, 0, 0.5)', 5);
		this.gInGame.add(this.titlePage);

		this.coinBox = global.addSprite(this.gw * 0.5, this.gh * 0.05, 'inGame/pinkBar');
		this.coinBox.anchor.setTo(0.5);
		this.gInGame.add(this.coinBox);

		var scoreCoin = global.addSprite(this.coinBox.width * -0.3, 0, 'inGame/coin');
		scoreCoin.anchor.setTo(0.5);
		scoreCoin.scale.setTo(0.7);
		this.coinBox.addChild(scoreCoin);

		this.plCoin = global.addText(this.coinBox.x - (this.coinBox.width * 0.15), this.coinBox.y + 3, '', 40, game_config.font1);
		this.plCoin.anchor.setTo(0, 0.5);
		this.plCoin.fill = gameData.fillPink;
		this.gInGame.add(this.plCoin);

		this.homeBtn = global.addSprite(this.gw * 0.5, this.gh * 0.92, 'global/home');
		this.homeBtn.anchor.setTo(0.5);
		this.homeBtn.inputEnabled = true;
		this.homeBtn.events.onInputDown.add(this.onHomeClick, this);
		this.gButton.add(this.homeBtn);

		this.generateBoxes();

		this.gCont.add(this.gInGame);
		this.gCont.add(this.gButton);

		this.onResize();
	},

	onHomeClick:function(obj){
		var tween = game.add.tween(obj.scale);
		tween.to({x:obj.scale.x - 0.1, y:obj.scale.y - 0.1}, 100, Phaser.Easing.Elastic.InOut, true, 0, 0, true);
		tween.onComplete.add(function(){
			game.state.start('chome');
		}, this);
	},

	generateBoxes:function(){
		this.boxes = [];
		for(var a = 0; a < 2; a++){ //baris
			for(var b = 0; b < 2; b++){ //kolom
				var x = (this.gw * 0.265) + (b * 300);
				var y = (this.gh * 0.35) + (a * 320);
				var box = new upgradeBox(x, y);
				this.boxes.push(box);
			}
		}
	},

	update:function(){
		BaseState.prototype.update.call(this);
		Data.save();
		this.plCoin.setText('' + plRef.coinInPocket);
	},
}, BaseState);