BasicGame.Preloader = function (game) {

	this.background = null;
	this.preloadBar = null;
	this.ready = false;

};

BasicGame.Preloader.prototype = {
	nextState: '',
	_state: {},

	preload: function () {

		this.gw = 640;
		this.gh = 1020;
		
		var preload = this._state[this.nextState];
		if (preload) {
			// trace("nopreloader");
			// trace(preload);
			preload();
		}
		else {
			preload = window[this.nextState].prototype.preload;
			this._state[this.nextState] = preload;
			window[this.nextState].prototype.preload = null;
			preload();
			// trace(preload);
		}
		game.load.start();
		game.load.onFileComplete.add(this.fileLoaded, this);

		var bg = this.add.sprite(0, 0, "preload_bg"); this.bg = bg;
		var img = global.addSprite(this.gw*0.5, this.gh*0.5, "preload");
		img.anchor.setTo(0.5, 0.5);

		this.gCont = game.add.group();
		this.gCont.add(img);

		// this.loader = global.addSprite(this.gw*0.5, this.gh*0.8, 'loader');
		// this.loader.anchor.setTo(0.5,0.5);

		this.loader = game.add.sprite(this.gw*0.5, this.gh*0.9, 'loader');
		this.loader.anchor.setTo(0.5,0.5);
		this.loader.y -= this.loader.height * 0.5;

		// this.gCont.add(this.loader);

		this.onResize();
	},

	fileLoaded: function (progress) {
		// this.loader.angle+=5;
        trace("loading..."+progress);
        this.loader.angle+=5;
        if (progress == 100 ) {
        	if (global.firstTime) {
				if (Phaser.Device.desktop) global.bgmplay();
				global.firstTime = false;
			}
			this.onNextState();
        	game.load.onFileComplete.dispose();
        }
    },

    onBgmPlay: function() {
        trace("bgmplay",game.nextState);
        // game.stage.backgroundColor = 0xffffff;  
		game.state.start("cmainmenu", false);
        global.music.onPlay.dispose();
        global.firstTime = false;
        // global.init();
    },


	init: function(nextState, params1) {
		this.nextState = nextState;
		
		if(typeof params1 != 'undefined') {
			this.params1 = params1;
		}
	},

	create: function () {
		// if(datagames.jnsPreload == 2)
		// {
		// 	var btnOk = global.addSprite(this.world.width*0.7, this.world.height*0.7, 'preload_roulette_btn_ok');
		// 	btnOk.anchor.setTo(0.5, 0.5);
		// 	btnOk.inputEnabled = true;
		// 	btnOk.events.onInputDown.add(this.btnOkDown, this);
		// 	this.gCont.add(btnOk);
		// }
		// else
		// {
		// 	this.state.start(this.nextState, false);
		// 	global.init();
		// }
	},

	onNextState: function() {
		global.init();
		trace("========== NEXT STATE ==========")
		// global.music.onPlay.add(this.onBgmPlay);
		if(this.params1 != null) {
			console.trace(this.params1);
			this.state.start(this.nextState, false, false, this.params1);
		}
		else {
			this.state.start(this.nextState, false, false);
		}
		global.init();
	},

	loadUpdate: function() {
		this.loader.angle+=5;
		trace("loadupdate");		
	},

	update: function () {
		this.loader.angle+=5;
	},

	btnOkDown:function(obj)
	{
		global.clickbtn();
		this.state.start(this.nextState, false);
		global.init();
	},


	onResize: function() {
		// var s = utils.fitToAll(this.gw,this.gh, this.world.width, this.world.height);
		// this.gCont.scale.x = s.x;
		// this.gCont.scale.y = s.y;
		// this.gCont.y = (this.world.height-this.gh*s.y) * 0.5;
		// this.gCont.x = (this.world.width-this.gw*s.x) * 0.5;
		global.init();
		this.gCont.fitToCenter(BasicGame.gameWidth, BasicGame.gameHeight, global.width, global.height);
		this.bg.stretch(this.world.width, this.world.height);
	}
};
