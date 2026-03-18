cresult = function(game, width, height, custCount){
	this.gResult = game.add.group();
	this.gFrame = game.add.group();
	this.gButton = game.add.group();
	this.gBg = game.add.group();
	this.gh = height;
	this.gw = width;

	this.custCount = custCount;

	this.gResult.add(this.gBg);
	this.gResult.add(this.gFrame);
	this.gResult.add(this.gButton);
};

cresult.inherit({
	create:function(custCount){			
		this.resultBg = game.add.sprite(this.gw*0.5,this.gh*0.5,'resultBg', null);
		this.resultBg.anchor.setTo(0.5);
		this.gBg.add(this.resultBg);

		this.resultBg2 = global.addSprite(this.resultBg.x, this.resultBg.y, 'inGame/resultBox');
		this.resultBg2.anchor.setTo(0.5);
		this.resultBg2.scale.setTo(0.8);
		this.gFrame.add(this.resultBg2);

		this.hoho = new CSpine('chara', this.gw * 0.5, this.gh * 0.5);
		this.hoho.scale.setTo(0.3);
		this.hoho._animSpeed = 1;
		this.hoho.play('idle', true);
		this.gFrame.add(this.hoho);

		this.playBtn = global.addSprite(0, 0, 'global/play');
		this.playBtn.anchor.setTo(0.5);
		this.playBtn.scale.setTo(0.8);
		this.playBtn.inputEnabled = true;
		this.playBtn.events.onInputDown.add(function(){
			ctransition.close('cstage');
		}, this);
		this.gButton.add(this.playBtn);

		this.replayBtn = global.addSprite(0, 0, 'global/replay');
		this.replayBtn.anchor.setTo(0.5);
		this.replayBtn.scale.setTo(0.8);
		this.replayBtn.inputEnabled = true;
		this.replayBtn.events.onInputDown.add(function(){
			ctransition.close('cgame');
		}, this);
		this.gButton.add(this.replayBtn);

		this.homeBtn = global.addSprite(0,0, 'global/home');
		this.homeBtn.anchor.setTo(0.5);
		this.homeBtn.scale.setTo(0.8);
		this.homeBtn.inputEnabled = true;
		this.homeBtn.events.onInputDown.add(function(){
			ctransition.close('cstage');
		}, this);
		this.gButton.add(this.homeBtn);

		this.upgradeBtn = global.addSprite(0,0, 'global/upgrade');
		this.upgradeBtn.anchor.setTo(0.5);
		this.upgradeBtn.scale.setTo(0.8);
		this.upgradeBtn.inputEnabled = true;
		this.upgradeBtn.events.onInputDown.add(function(){
			ctransition.close('cupgradePage');
		}, this);
		this.gButton.add(this.upgradeBtn);
	},

	win:function(){
		// csound.win();
		if(plRef.stageNow == plRef.stageUnlock) plRef.stageUnlock++;

		if(plRef.stageUnlock >= 15 && plRef.boostLvl[0] >= 5 && plRef.boostLvl[1] >= 5 && plRef.boostLvl[2] >= 5){
			this.finishGame();
			return;
		}

		this.winBox = global.addSprite(this.resultBg2.x + (this.resultBg2.width * 0.2), this.resultBg2.y - (this.resultBg2.height * 0.5), 'inGame/winBox');
		this.winBox.anchor.setTo(0.5);
		this.winBox.scale.setTo(0.8);
		this.gFrame.add(this.winBox);

		this.hoho.position.setTo(this.resultBg2.x - (this.resultBg2.width * 0.32), this.winBox.y + (this.winBox.height * 0.5));
		this.hoho.scale.setTo(0.4);

		this.stageClear = global.addText(this.winBox.x, this.winBox.y + (this.winBox.height * 0.05), _t("stageclear"), 60, game_config.font1);
		this.stageClear.anchor.setTo(0.5);
		this.stageClear.fill = 'white';
		this.stageClear.setShadow(6, 6, '#E37507', 0);
		this.gFrame.add(this.stageClear);

		this.customerServed = global.addText(this.resultBg2.x - (this.resultBg2.width * 0.43), this.resultBg2.y - (this.resultBg2.height * 0.15), _t('customerserved') + this.custCount, 30, game_config.font1);
		this.customerServed.anchor.setTo(0, 0.5);
		this.customerServed.fill = 'black';
		this.gFrame.add(this.customerServed);

		this.earning = global.addText(this.customerServed.x, this.customerServed.y + (this.customerServed.height * 1.2), _t("earning") + plRef.moneyInGame, 30, game_config.font1);
		this.earning.anchor.setTo(0, 0.5);
		this.earning.fill = 'black';
		this.gFrame.add(this.earning);

		this.playBtn.position.setTo(this.resultBg2.x - (this.resultBg2.width * 0.1), (this.resultBg2.y + (this.resultBg2.height * 0.5)) - (this.playBtn.height * 0.5));
		this.homeBtn.position.setTo(this.playBtn.x - (this.playBtn.width * 1.2), this.resultBg2.y + (this.resultBg2.height * 0.4));
		this.replayBtn.position.setTo(this.playBtn.x + (this.playBtn.width * 1.2), this.homeBtn.y);
		this.upgradeBtn.position.setTo(this.resultBg2.x + (this.resultBg2.width * 0.5), this.homeBtn.y);
		Data.save();

		this.comeIn();
		_A.win(plRef.stageNow, plRef.moneyInGame);
	},

	failed:function(){		
		// csound.failed()	;	
		this.winBox = global.addSprite(this.resultBg2.x + (this.resultBg2.width * 0.2), this.resultBg2.y - (this.resultBg2.height * 0.5), 'inGame/winBox');
		this.winBox.anchor.setTo(0.5);
		this.winBox.scale.setTo(0.8, -0.8);
		this.gFrame.add(this.winBox);

		this.hoho.position.setTo(this.resultBg2.x - (this.resultBg2.width * 0.32), this.resultBg2.y + (this.resultBg2.height * 0.5));
		this.hoho.scale.setTo(0.5);

		this.stageClear = global.addText(this.winBox.x, this.winBox.y + (this.winBox.height * 0.05), _t("stagefailed"), 60, game_config.font1);
		this.stageClear.anchor.setTo(0.5);
		this.stageClear.fill = 'white';
		this.stageClear.setShadow(6, 6, '#E37507', 0);
		this.gFrame.add(this.stageClear);

		var idfailed = game.rnd.integerInRange(1,2);
		this.msg = global.addText(this.resultBg2.x - (this.resultBg2.width * 0.1), this.resultBg2.y, _t("failed" + idfailed), 35, game_config.font1);
		this.msg.anchor.setTo(0,0.5);
		this.msg.fill = 'black';
		this.msg.wordWrap = true;
		this.msg.wordWrapWidth = this.resultBg2.width * 0.75;
		this.msg.fontWeight = 'normal';
		this.gFrame.add(this.msg);

		this.replayBtn.position.setTo(this.resultBg2.x + (this.resultBg2.width * 0.2), (this.resultBg2.y + (this.resultBg2.height * 0.5)) - (this.playBtn.height * 0.5));
		this.homeBtn.position.setTo(this.replayBtn.x - (this.replayBtn.width * 1.2), this.resultBg2.y + (this.resultBg2.height * 0.4));
		this.upgradeBtn.position.setTo(this.replayBtn.x + (this.replayBtn.width * 1.2), this.homeBtn.y);
		this.upgradeBtn.scale.setTo(0.9);
		this.playBtn.visible = false;

		this.comeIn();
		_A.lose(plRef.stageNow, plRef.moneyInGame);
	},

	finishGame:function(){
		this.gFrame.forEach(function(obj){
			obj.destroy();
		}, this);

		this.gButton.forEach(function(obj){
			if(obj != this.homeBtn){
				obj.destroy();				
			}
		}, this);

		this.finishImg = global.addSprite(this.gw * 0.5, this.gh * 0.5, 'inGame/finishGame');
		this.finishImg.anchor.setTo(0.5);
		this.gFrame.add(this.finishImg);

		this.hoho = new CSpine('chara', this.finishImg.x, this.finishImg.y - (this.finishImg.height * 0));
		this.hoho.scale.setTo(0.5);
		this.hoho._animSpeed = 1;
		this.hoho.play('happy', true);
		this.gFrame.add(this.hoho);

		this.gameFinish = global.addSprite(this.finishImg.x, this.finishImg.y - (this.finishImg.height*0.1), 'inGame/gameClear');
		this.gameFinish.anchor.setTo(0.5);
		this.gFrame.add(this.gameFinish);

		this.finishText = global.addText(this.finishImg.x, this.finishImg.y + (this.finishImg.height * 0.22), _t("finishgame"), 40, game_config.font1);
		this.finishText.anchor.setTo(0.5);
		this.finishText.fill = 'white';
		this.finishText.lineSpacing = -10;
		this.finishText.wordWrap = true;
		this.finishText.wordWrapWidth = this.finishImg.width * 0.8;
		this.finishText.align = 'center';
		this.gFrame.add(this.finishText);

		this.homeBtn.position.setTo(this.finishImg.x, this.finishImg.y + (this.finishImg.height * 0.5));

		this.comeIn2();
	},

	comeIn:function(){
		var comein = game.add.tween(this.gResult);
		comein.from({alpha : 0}, 500, Phaser.Easing.Linear.None);
		comein.delay(500);
		comein.start();
	},

	comeIn2:function(){		
		this.gFrame.forEach(function(obj){
			var scalling = game.add.tween(obj.scale);
			scalling.from({x:0, y:0}, 500, Phaser.Easing.Circular.InOut, true, 50);			
		}, this);

		this.gButton.forEach(function(obj){
			var scalling = game.add.tween(obj.scale);
			scalling.from({x:0, y:0}, 500, Phaser.Easing.Circular.InOut, true, 50);			
		}, this);
	},
}, Phaser.Sprite);