cpause = function(game, x, y){
	Phaser.Sprite.call(this, game, x, y, 'global');	

	this.inputEnabled = true;
	this.events.onInputDown.add(this.onClickEvent, this);
	game.add.existing(this);

	this.frameName = 'global/pause';
	this.anchor.setTo(0.5);

	this.isPaused = false;
	this.isClicked = false;

	this.gw = curState().gw;
	this.gh = curState().gh;
	this.gPause = game.add.group();

	curState().gButton.add(this);

	this.pauseBg();

	this.gPause.visible = false;
};

cpause.inherit({

	onClickEvent:function(obj,pointer){
		this.isClicked = true;
		if(!game.time.events.paused){
			game.time.events.pause();
			this.isPaused = true;
			this.gPause.visible = true;
		} else {
			game.time.events.resume();
			this.isPaused = false;
			this.gPause.visible = false;
		}

		var scaleBig = game.add.tween(this.scale);
		scaleBig.to({x : 1.1, y : 1.1}, 50, Phaser.Easing.Elastic.In)
				.to({y : 0.3}, 50, Phaser.Easing.Elastic.In)
				.to({x : 1, y : 1}, 50, Phaser.Easing.Elastic.In)
				.to({x : 1, y : 1}, 50, Phaser.Easing.Elastic.In);

		scaleBig.onComplete.add(function(){
			this.isClicked = false;
		}, this);
		
		scaleBig.start();
	},

	pauseBg:function(){
		trace('masuk sini');
		this.pauseBg = game.add.sprite(this.gw*0.5,this.gh*0.5,'resultBg-01');
		this.pauseBg.anchor.setTo(0.5);
		this.gPause.add(this.pauseBg);

		this.pauseBg2 = global.addSprite(this.pauseBg.x, this.pauseBg.y, 'inGame/pausebox');
		this.pauseBg2.anchor.setTo(0.5);
		// this.pauseBg2.scale.setTo(0.8);
		this.gPause.add(this.pauseBg2);

		this.titlePage = global.addText(this.pauseBg2.x, this.pauseBg2.y - (this.pauseBg2.height * 0.15), _t("pause"), 80, game_config.font1);
		this.titlePage.anchor.setTo(0.5);
		this.titlePage.fill = 'white';
		this.gPause.add(this.titlePage);

		this.playBtn = global.addSprite(this.pauseBg2.x, this.pauseBg2.y + (this.pauseBg2.height * 0.1), 'global/play');
		this.playBtn.anchor.setTo(0.5);
		this.playBtn.inputEnabled = true;
		this.playBtn.events.onInputDown.add(function(obj){
			this.isClicked = true;
			var tween = game.add.tween(obj.scale);
			tween.to({x:obj.scale.x - 0.1, y:obj.scale.y - 0.1}, 100, Phaser.Easing.Elastic.InOut, true);
			tween.yoyo(true);
			tween.onComplete.add(function(){
				game.time.events.resume();
				this.isPaused = false;
				this.gPause.visible = false;

				game.time.events.add(Phaser.Timer.SECOND * 0.5, function(){
					this.isClicked = false;
				}, this);				
			}, this);
		}, this);
		this.gPause.add(this.playBtn);

		this.homeBtn = global.addSprite(this.pauseBg2.x - (this.pauseBg2.width * 0.3), this.pauseBg2.y + (this.pauseBg2.height * 0.3), 'global/home');
		this.homeBtn.anchor.setTo(0.5);
		this.homeBtn.inputEnabled = true;
		this.homeBtn.events.onInputDown.add(function(obj){
			var tween = game.add.tween(obj.scale);
			tween.to({x:obj.scale.x - 0.1, y:obj.scale.y - 0.1}, 100, Phaser.Easing.Elastic.InOut, true);
			tween.yoyo(true);
			tween.onComplete.add(function(){
				ctransition.close('chome');
			}, this);
		}, this);
		this.gPause.add(this.homeBtn);

		this.replayBtn = global.addSprite(this.pauseBg2.x + (this.pauseBg2.width * 0.3), this.homeBtn.y, 'global/replay');
		this.replayBtn.anchor.setTo(0.5);
		this.replayBtn.inputEnabled = true;
		this.replayBtn.events.onInputDown.add(function(obj){
			var tween = game.add.tween(obj.scale);
			tween.to({x:obj.scale.x - 0.1, y:obj.scale.y - 0.1}, 100, Phaser.Easing.Elastic.InOut, true);
			tween.yoyo(true);
			tween.onComplete.add(function(){
				ctransition.close('cgame');				
			}, this);
		}, this);
		this.gPause.add(this.replayBtn);
	},

}, Phaser.Sprite);