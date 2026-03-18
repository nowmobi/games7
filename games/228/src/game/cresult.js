cresult = function(){
	Phaser.Group.call(this, game);
	this.gh = curState().gh;
	this.gw = curState().gw;

	this.x = this.gw * 0.5;
	this.y = this.gh * 0.5;

	this.gContent = game.add.group();
	this.gBack = game.add.group();
	this.gFront = game.add.group();

	this.add(this.gBack);
	this.add(this.gContent);
	this.add(this.gFront);

    this.init();

    game.add.existing(this);
};

cresult.inherit({
	init:function(){
		
	},

	create:function(isWin){
		csound.shop_close();
		this.isWin = isWin;
		this.stars = [];

		this.resultBg = game.add.sprite(0, 0, 'black_screen', null);
		this.resultBg.anchor.setTo(0.5);
		this.gBack.add(this.resultBg);

		this.header = global.addSprite(0, -curState().centerY, 'inGame/header_single');
		this.header.anchor.setTo(0.5, 0);
		this.gFront.add(this.header);

		this.coinIcon = curState().coinIcon;
		var pos = curState().gInGame.toGlobal(new Phaser.Point(this.coinIcon.x, this.coinIcon.y));
		pos = this.toLocal(pos);
		this.coinIcon.position.setTo(pos.x, pos.y);
		this.gFront.add(this.coinIcon);

		this.coinBox = curState().coinBox;
		pos = curState().gInGame.toGlobal(new Phaser.Point(this.coinBox.x, this.coinBox.y));
		pos = this.toLocal(pos);
		this.coinBox.position.setTo(pos.x, pos.y);
		this.gFront.add(this.coinBox);

		this.showCoin = curState().showCoin;
		pos = curState().gInGame.toGlobal(new Phaser.Point(this.showCoin.x, this.showCoin.y));
		pos = this.toLocal(pos);
		this.showCoin.position.setTo(pos.x, pos.y);
		this.gFront.add(this.showCoin);

		this.soundBtn = curState().soundBtn;
		this.sfxBtn = curState().sfxBtn;
		pos = curState().gInGame.toGlobal(new Phaser.Point(this.soundBtn.x, this.soundBtn.y));
		pos = this.toLocal(pos);
		this.sfxBtn.position.setTo(pos.x, pos.y);
		this.gFront.add(this.sfxBtn);
		
		pos = curState().gButton.toGlobal(new Phaser.Point(curState().pauseBtn.pauseBtn.x, curState().pauseBtn.pauseBtn.y));
		pos = this.toLocal(pos);
		this.soundBtn.position.setTo(pos.x, pos.y);
		this.gFront.add(this.soundBtn);

		this.title = global.addSprite(0, this.header.y + (this.header.height * 2.3), 'inGame/success');
		this.title.anchor.setTo(0.5);
		this.gContent.add(this.title);

		this.mascot = global.addSprite(0, this.title.y + (this.title.height * 1.25), 'inGame/avatar_success');
		this.mascot.anchor.setTo(0.5);

		this.plate = global.addSprite(0, 0, 'inGame/big_box');
		this.plate.y = this.mascot.y + (this.plate.height * 0.37);
		this.plate.anchor.setTo(0.5);

		this.gContent.add(this.plate);
		this.gContent.add(this.mascot);	

		this.mascotGlitter = global.addSprite(this.mascot.x + (this.mascot.width * 0.3), this.mascot.y - (this.mascot.height * 0.15), 'shinee/0000');
		this.mascotGlitter.anchor.setTo(0.5);
		this.gContent.add(this.mascotGlitter);

		var anim = this.mascotGlitter.animations.add('glow', Phaser.Animation.generateFrameNames('shinee/00', 0, 21, '', 2), 30, true);
		this.mascotGlitter.animations.play('glow');

		this.plateGlitter = global.addSprite(this.plate.x - (this.plate.width * 0.35), this.plate.y + (this.plate.height * 0.35), 'shine/0000');
		this.plateGlitter.anchor.setTo(0.5);
		this.plateGlitter.scale.setTo(1.5);
		this.gContent.add(this.plateGlitter);

		anim = this.plateGlitter.animations.add('glow', Phaser.Animation.generateFrameNames('shine/00', 0, 14, '', 2), 20, true);
		this.plateGlitter.animations.play('glow');

		this.fork = global.addSprite(-this.plate.width * 0.6, this.plate.y, 'inGame/garpu');
		this.fork.anchor.setTo(0.5);
		this.gContent.add(this.fork);

		this.knife = global.addSprite(this.plate.width * 0.6, this.plate.y, 'inGame/pisau');
		this.knife.anchor.setTo(0.5);
		this.gContent.add(this.knife);

		this.playBtn = new clickBtn(0, this.plate.y + (this.plate.height * 0.8), 'btn_play');
		this.playBtn.onClick.add(function(obj){
			var nextStage = gameData.stage + 1;
			if(nextStage < gameData.totalStage){
				stageSelector.assignStage(nextStage)				
			} else if(nextStage == gameData.totalStage){
				obj.changePage('cstory');
			}
			// obj.changePage('cstage');
		}, this);
		this.gFront.add(this.playBtn);

		this.replayBtn = new clickBtn(-this.playBtn.width * 1.2, this.playBtn.y, 'btn_retry');
		this.replayBtn.onClick.add(function(obj){
			// obj.changePage(curState().key);
			stageSelector.assignStage(gameData.stage);
		}, this);
		this.gFront.add(this.replayBtn);

		this.stageBtn = new clickBtn(this.playBtn.width * 1.2, this.playBtn.y, 'btn_stageselect');
		this.stageBtn.onClick.add(function(obj){
			if(gameData.stage == (gameData.totalStage - 1)){
				obj.changePage('cstory');
			} else {
				obj.changePage('cstage');				
			}
		}, this);
		this.gFront.add(this.stageBtn);

		this.gReward = game.add.group();
		this.gReward.position.setTo(this.plate.x, this.plate.y + (this.plate.height * 0.1));
		this.gContent.add(this.gReward);

		this.rewardTxt = global.addText(0, -20, _t('reward'), 30, game_config.font1);
		this.rewardTxt.anchor.setTo(0.5);
		this.rewardTxt.fill = '#0c6e5c';
		this.gReward.add(this.rewardTxt);

		this.gCoins = game.add.group();
		this.gReward.add(this.gCoins);

		this.rewardCoin = global.addSprite(0, 0, 'inGame/coins');
		this.rewardCoin.anchor.setTo(0, 0.5);
		this.gCoins.add(this.rewardCoin);

		var failTxt = _t('fail' + game.rnd.integerInRange(1, 3));
		this.failTxt = global.addText(this.gReward.x, this.gReward.y - 10, failTxt, 28, game_config.font1);
		this.failTxt.anchor.setTo(0.5);
		this.failTxt.fill = '#0c6e5c';
		this.failTxt.wordWrap = true;
		this.failTxt.wordWrapWidth = this.plate.width * 0.8;
		this.failTxt.align = 'center';
		this.failTxt.lineSpacing = '7;'
		this.gContent.add(this.failTxt);

		this.plReward = curState().plScore;

		var writeReward = gameData.writeScore(this.plReward);
		this.showReward = global.addText(this.rewardCoin.x + (this.rewardCoin.width * 1.2), 5, writeReward, 25, game_config.font1);
		this.showReward.anchor.setTo(0, 0.5);
		this.showReward.fill = '#ff8833';
		this.gCoins.add(this.showReward);

		this.gCoins.position.setTo(-this.gCoins.width * 0.5, this.rewardTxt.y + (this.rewardTxt.height * 0.8));
		this.gReward.scale.setTo(1.2);

		if(isWin){
			_A.win(gameData.stage, this.plReward);
			this.failTxt.visible = false;
			this.win();
		} else {
			_A.lose(gameData.stage, this.plReward);
			this.gReward.alpha = 0;
			this.failed();
		}

		this.comeIn();
	},

	win:function(){
		var scoreGoal = curState().scoreGoal;
		var countStar = 0;
		for(var a = 0; a < curState().stepStones.length; a++){
			if(curState().stepStones[a].frameName == 'inGame/stars'){
				countStar++;
			}
		}

		if(countStar > 0){
			this.gReward.y = this.plate.y + (this.plate.height * 0.28);
		}		
			
		for(var a = 0; a < countStar; a++){
			var x = (this.plate.x - (this.plate.width * 0.22)) + (a * 90);
			var y = 0;
			var angle = 0;
			if(a == 0 || a == 2){
				if(a == 0) angle = 10;
				else angle = -10;

				y = (this.plate.y - (this.plate.height * 0.05));
			} else {
				y = this.plate.y + 15;
			}

			var star = global.addSprite(x, y, 'inGame/star_shadow');
			star.anchor.setTo(0.5);
			star.angle = angle;
			star.visible = false;
			this.gContent.add(star);

			if(a == 0) x = -5;
		 	else if(a == 1) x = 0;
			else x = 5;
			y = -8;

			star.topper = global.addSprite(x, y, 'inGame/star');
			star.topper.anchor.setTo(0.5);
			star.addChild(star.topper);

			this.stars.push(star);

			var timing = 200;
			this.stars[a].tween = this.tweenScale(this.stars[a], timing, Phaser.Easing.Elastic.InOut, false);
			this.stars[a].tween.onStart.add(function(){
				csound.match1();
			}, this);
			this.stars[a].tween.delay(a * timing);
		}

		if(gameData.stage == plRef.stageOpened.length){
			plRef.stageOpened.push(countStar);
			if(gameData.stage == gameData.totalStage - 1){
				plRef.achievProgress[10] = 1;
			}
		} else {
			if(countStar > plRef.stageOpened[gameData.stage]){
				plRef.stageOpened[gameData.stage] = countStar;
			}
		}

		var counting = 0;
		for(var a = 0; a < plRef.stageOpened.length; a++){
			counting += plRef.stageOpened[a]; 
		}

		plRef.achievProgress[6] = counting;
		plRef.achievProgress[7] = this.plReward;
		plRef.achievProgress[8] += this.plReward;

		Data.save();
	},

	failed:function(){
		this.title.frameName = 'inGame/failure';
		this.mascot.frameName = 'inGame/avatar_failure';
		this.mascotGlitter.visible = false;
		this.playBtn.alpha = 0;
		this.playBtn.inputEnabled = false;
		this.replayBtn.x += this.replayBtn.width * 0.5;
		this.stageBtn.x -= this.stageBtn.width * 0.5;
	},

	comeIn:function(){
		this.playBtn.visible = false;
		this.replayBtn.visible = false;
		this.stageBtn.visible = false;
		this.title.visible = false;
		this.fork.visible = false;
		this.knife.visible = false;
		this.gReward.visible = false;

		var timing = 400;
		var easing = Phaser.Easing.Circular.Out;
		var easing2 = Phaser.Easing.Elastic.Out;

		var fromY = this.header.y - (this.gContent.height * 0.52);
		var tween = game.add.tween(this.gContent);
		tween.from({y:fromY}, timing, easing, true);
		tween.onComplete.add(function(){
			tweenTitle.start();
			tweenFork.start();
			tweenKnife.start();
		}, this);

		var tweenTitle = this.tweenScale(this.title, timing, easing2);

		var fromX = -this.resultBg.width * 0.52;
		var tweenFork = this.tweenFrom(this.fork, timing, easing, fromX);

		fromX = this.resultBg.width * 0.52;
		var tweenKnife = this.tweenFrom(this.knife, timing, easing, fromX, null, function(obj){
			if(obj.stars.length > 0){
				obj.tweenStars();
			}

			tweenPlay.start();
			tweenReward.start();
		});

		timing = 100;
		var tweenPlay = this.tweenScale(this.playBtn, timing, easing2, function(obj){
			tweenReplay.start();
		});

		var tweenReplay = this.tweenScale(this.replayBtn, timing, easing2, function(obj){
			tweenStage.start();
		});

		var tweenStage = this.tweenScale(this.stageBtn, timing, easing2, function(obj){
		});

		var tweenReward = this.tweenScale(this.gReward, timing, easing2);
	},

	tweenStars:function(){
		for(var a = 0; a < this.stars.length; a++){
			this.stars[a].tween.start();
		}
	},

	tweenScale:function(obj, timing, easing, onSuccess){
		var tweenObj = game.add.tween(obj.scale);
		tweenObj.onStart.add(function(){
			obj.visible = true;
		}, this);
		tweenObj.from({x:0, y:0}, timing, easing, false);
		tweenObj.onComplete.add(function(){
			if(onSuccess) onSuccess(this);
		}, this);

		return tweenObj;
	},

	tweenFrom:function(obj, timing, easing, fromX, fromY, onSuccess){
		fromX = fromX || obj.x;
		fromY = fromY || obj.y;
		
		var tweenObj = game.add.tween(obj);
		tweenObj.onStart.add(function(){
			obj.visible = true;
		}, this);
		tweenObj.from({x:fromX, y:fromY}, timing, easing, false);
		tweenObj.onComplete.add(function(){
			if(onSuccess) onSuccess(this);
		}, this);		

		return tweenObj;
	},
}, Phaser.Group);