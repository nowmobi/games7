cpause = function(game, x, y, width, height){
	Phaser.Sprite.call(this, game, x, y, 'global');	

	this.inputEnabled = true;
	this.events.onInputDown.add(this.onClickEvent, this);
	game.add.existing(this);

	this.frameName = 'global/pause';

	this.isPaused = false;

	this.gw = width;
	this.gh = height;
	this.gPause = game.add.group();

	this.pauseBg();

	this.gPause.visible = false;
};

cpause.inherit({

	onClickEvent:function(obj,pointer){
		var scaleBig = game.add.tween(this.scale);
		scaleBig.to({x : 1.1, y : 1.1}, 50, Phaser.Easing.Elastic.In)
				.to({y : 0.3}, 50, Phaser.Easing.Elastic.In)
				.to({x : 1, y : 1}, 50, Phaser.Easing.Elastic.In)
				.to({x : 1, y : 1}, 50, Phaser.Easing.Elastic.In);

		scaleBig.onComplete.add(function(){
			if(!game.time.events.paused){
				game.time.events.pause();
				this.isPaused = true;
				this.gPause.visible = true;
			} else {
				game.time.events.resume();
				this.isPaused = false;
				this.gPause.visible = false;
			}
		}, this);
		
		scaleBig.start();
	},

	pauseBg:function(){
		trace('masuk sini');
		this.pauseBg = game.add.sprite(this.gw*0.5,this.gh*0.5,'resultBg');
		this.pauseBg.anchor.setTo(0.5);
		this.gPause.add(this.pauseBg);

		this.pauseBg2 = global.addSprite(this.pauseBg.x, this.pauseBg.y, 'inGame/resultBox');
		this.pauseBg2.anchor.setTo(0.5);
		this.pauseBg2.scale.setTo(0.9, 0.8);
		this.gPause.add(this.pauseBg2);

		this.hoho = new CSpine('chara', this.pauseBg2.x + (this.pauseBg2.width * 0.32), this.pauseBg2.y + (this.pauseBg2.height * 0.5));
		this.hoho.scale.setTo(0.5);
		this.hoho._animSpeed = 1;
		this.hoho.play('idle', true);
		this.gPause.add(this.hoho);

		this.playBtn = global.addSprite(this.pauseBg2.x - (this.pauseBg2.width * 0.15), this.pauseBg2.y, 'global/play');
		this.playBtn.anchor.setTo(0.5);
		this.playBtn.scale.setTo(0.7);
		this.playBtn.inputEnabled = true;
		this.playBtn.events.onInputDown.add(function(){
			game.time.events.resume();
			this.isPaused = false;
			this.gPause.visible = false;
		}, this);
		this.gPause.add(this.playBtn);

		this.homeBtn = global.addSprite(this.playBtn.x - (this.playBtn.width * 1.2), this.playBtn.y + (this.playBtn.height * 0.2), 'global/home');
		this.homeBtn.anchor.setTo(0.5);
		this.homeBtn.scale.setTo(0.7);
		this.homeBtn.inputEnabled = true;
		this.homeBtn.events.onInputDown.add(function(){
			ctransition.close('cstage');
		}, this);
		this.gPause.add(this.homeBtn);

		this.replayBtn = global.addSprite(this.playBtn.x + (this.playBtn.width * 1.2), this.homeBtn.y, 'global/replay');
		this.replayBtn.anchor.setTo(0.5);
		this.replayBtn.scale.setTo(0.7);
		this.replayBtn.inputEnabled = true;
		this.replayBtn.events.onInputDown.add(function(){
			ctransition.close('cgame');
		}, this);
		this.gPause.add(this.replayBtn);

		this.winBox = global.addSprite(this.pauseBg2.x - (this.pauseBg2.width * 0.15), this.pauseBg2.y - (this.pauseBg2.height * 0.5), 'inGame/winBox');
		this.winBox.anchor.setTo(0.5);
		this.winBox.scale.setTo(-0.8);
		this.gPause.add(this.winBox);

		this.stageClear = global.addText(this.winBox.x, this.winBox.y + (this.winBox.height * 0.05), _t("pause"), 80, game_config.font1);
		this.stageClear.anchor.setTo(0.5);
		this.stageClear.fill = 'white';
		this.stageClear.setShadow(6, 6, '#E37507', 0);
		this.gPause.add(this.stageClear);
	},

}, Phaser.Sprite);