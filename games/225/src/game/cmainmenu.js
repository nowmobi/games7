
cmainmenu = function (game) {
};

cmainmenu.prototype = {
	preload: function() {
		Asset.png("cover_bg");
		Asset.atlaspng("cover_sprite");
		Asset.atlaspng("credits_sprite");
		Asset.atlaspng('global_sprite');
		Asset.bitmapFont('paneuropa_bold_white');
	},

	create: function()
	{
		// global.bgmplay();

		var gw = 640;
		var gh = 1020;

		var bg = this.add.sprite(0, 0, "cover_bg"); this.bg = bg;
		
		var kompor = global.addSprite(gw*0.4, gh*0.3, "cover_bg2");
		kompor.anchor.setTo(0.5, 0);

		var cewek = global.addSprite(gw*0.1, gh*0.05, "cover_cewek");
		cewek.anchor.setTo(0.5, 0);

		var title = global.addSprite(gw*0.5, gh*0.05, "cover_title");
		title.anchor.setTo(0.5, 0);

		this.btnPlay = global.addSprite(gw*0.75, gh*0.4, "cover_btn_play");
		this.btnPlay.anchor.setTo(0.5, 0);
		this.btnPlay.scale.setTo(0, 0);

		this.btnCredits = global.addSprite(gw*0.1, gh*0.85, "cover_btn_credits");
		this.btnCredits.anchor.setTo(0.5, 0);
		this.btnCredits.scale.setTo(0, 0);

		// this.btnMore = global.addSprite(gw*0.7, gh*0.85, "cover_btn_more");
		// this.btnMore.anchor.setTo(0.5, 0);
		// this.btnMore.scale.setTo(0, 0);

		// this.gBtnMore = game.add.group();
		// this.gBtnMore.pivot.setTo(this.btnMore.x, this.btnMore.y);
		// this.gBtnMore.x = this.btnMore.x;
		// this.gBtnMore.y = this.btnMore.y;
		// this.gBtnMore.add(this.btnMore);

		// this.gBtnMore.scale.setTo(0, 0);

		// var bmpMore = game.add.bitmapText(this.btnMore.x, this.btnMore.y + this.btnMore.height*0.55, 'paneuropa_bold_white', global._t("more"), 54);
		// bmpMore.x -= bmpMore.textWidth*0.4;
		// bmpMore.y -= bmpMore.textHeight*0.5; 
		// this.gBtnMore.add(bmpMore);

		this.btnPlay.inputEnabled = true;
		this.btnPlay.events.onInputDown.add(this.onBtnDown, this);
		this.btnCredits.inputEnabled = true;
		this.btnCredits.events.onInputDown.add(this.onBtnDown, this);
		// this.btnMore.inputEnabled = true;
		// this.btnMore.events.onInputDown.add(this.onBtnDown, this);

		var gCont = game.add.group();
		gCont.add(kompor);
		gCont.add(cewek);
		gCont.add(title);
		gCont.add(this.btnPlay);
		gCont.add(this.btnCredits);
		// gCont.add(this.gBtnMore);
		// gCont.add(this.btnMore);

		// gCont.add(bmpMore);

		if(datagames.bgm)
			this.btnSound = global.addSprite(gw*0.85, gh*0.1, 'global_btn_music_on');
		else
			this.btnSound = global.addSprite(gw*0.85, gh*0.1, 'global_btn_music_off');
		this.btnSound.scale.setTo(0.8, 0.8);
		this.btnSound.animations.add('bgmOff', [0]);
		this.btnSound.animations.add('bgmOn', [1]);
		this.btnSound.inputEnabled = true;
		this.btnSound.events.onInputDown.add(this.onBtnDown, this);

		// var gTop = game.add.group();
		// gTop.add(this.btnSound);
		gCont.add(this.btnSound);

		this.gBg = game.add.group();
		this.bgCred = game.add.graphics(0, 0);
		this.bgCred.beginFill(0x000000);
		this.bgCred.drawRect(0, 0, this.world.width, this.world.height);
		this.bgCred.alpha = 0.7;
		this.gBg.add(this.bgCred);
		this.gBg.visible = false;

		this.gCredits = game.add.group();
		this.panelCred = global.addSprite(gw*0.4, gh*0.5, 'credits_panel');
		this.panelCred.scale.setTo(0.8, 0.8);
		this.panelCred.anchor.setTo(0.5, 0.5);
		this.btnCloseCredits = global.addSprite(this.panelCred.x + this.panelCred.width*0.6, this.panelCred.y - this.panelCred.height*0.5, 'credits_btn_close');
		this.btnCloseCredits.anchor.setTo(0.5, 0.5);
		this.btnCloseCredits.scale.setTo(0.8, 0.8);
		this.btnCloseCredits.inputEnabled = true;
		this.btnCloseCredits.events.onInputDown.add(this.onBtnCloseDown, this);

		// this.gCredits.add(this.bgCred);
		this.gCredits.add(this.panelCred);
		this.gCredits.add(this.btnCloseCredits);
		this.gCredits.visible = false;

		// gCont.add(this.gCredits);

		this.gCont = gCont;
		
		game.add.tween(this.btnPlay.scale).to({x: 1, y:1}, 500, Phaser.Easing.Bounce.Out, true)
		game.add.tween(this.btnCredits.scale).to({x: 1, y:1}, 500, Phaser.Easing.Bounce.Out, true, 250)
		// game.add.tween(this.btnMore.scale).to({x: 1, y:1}, 500, Phaser.Easing.Bounce.Out, true, 500)
		// game.add.tween(this.gBtnMore.scale).to({x: 1, y:1}, 500, Phaser.Easing.Bounce.Out, true, 500)

		if (!Phaser.Device.desktop) game.input.onTap.add(global.onTap);
		this.onResize();

		console.trace(datagames.score);
	},

	update: function()
	{
	},

	render:function()
	{
	},

	onBtnDown:function(obj)
	{
		if(this.gCredits.visible)
			return;

		global.onTap();
		global.clickbtn();
		if (obj == this.btnSound) {
			if(datagames.bgm)
			{
				datagames.bgm = false;
				this.btnSound.animations.play('bgmOff');
				global.bgmpause();
			}
			else
			{
				datagames.bgm = true;
				this.btnSound.animations.play('bgmOn');
				global.bgmresume();
			}
		}
		else if(obj == this.btnPlay) {
			// cookbook
			this.gCont.destroy();
			this.gCont = null;
			this.state.start('Preloader', true, false, 'ccookbook');
		}
		else if(obj == this.btnCredits) {
			this.gCredits.visible = true;
			this.gBg.visible = true;
		}
		else {
			// trace("MOREEE");
			window.open('http://funnyhousegames.com', '_blank');
		}
	},

	onBtnCloseDown:function()
	{	
		this.gCredits.visible = false;
		this.gBg.visible = false;
	},

	onResize: function() {

		// var s = utils.fitToAll(gw,gh, this.world.width, this.world.height);
		// gCont.scale.x = s.x;
		// gCont.scale.y = s.y;
		// gCont.y = (this.world.height-gh*s.y) * 0.5;
		// gCont.x = (this.world.width-gw*s.x) * 0.5;

		// utils.floor(gCont);
		// // this.gCredits.scale.x = s.x;
		// // this.gCredits.scale.y = s.y;
		// // this.gCredits.y = (this.world.height-gh*s.y) * 0.5;
		// // this.gCredits.x = (this.world.width-gw*s.x) * 0.5;

		// // gTop.scale.x = s.x;
		// // gTop.scale.y = s.y;
		// // gTop.y = 0;
		// // gTop.x = (this.world.width-gw*s.x) * 0.5;

		global.init();
		this.gCont.fitToCenter(BasicGame.gameWidth, BasicGame.gameHeight, global.width, global.height);
		this.gCredits.fitToCenter(BasicGame.gameWidth, BasicGame.gameHeight, global.width, global.height);

		this.gBg.width = this.world.width;
		this.gBg.height = this.world.height;
		this.bg.stretch(this.world.width, this.world.height);

	}
};
