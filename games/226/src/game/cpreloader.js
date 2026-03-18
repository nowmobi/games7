BasicGame.Preloader = function (game) {
	this.background = null;
	this.preloadBar = null;
	this.ready = false;
};



BasicGame.Preloader.prototype = {

	preload: function () {
		// Asset.png('bg-ingame');
		Asset.atlaspng('global');
		game.load.onFileComplete.add(this.fileComplete, this);
        csound.start();
	},

	fileComplete: function(progress, cacheKey, success, totalLoaded, totalFiles) {
		// trace("CPRELOADER FILE COMPLETE");
	  //   if (this.loading_hati == null){
	  //       this.loading_hati = game.add.sprite(0,0,'loading_progress');
	  //       this.loading_hati.x = BasicGame.viewWidth/2-this.loading_hati.width/2;       
	  //       this.loading_hati.y = BasicGame.viewY + BasicGame.viewHeight/2;

	  //       this.text_wait = game.add.text( this.loading_hati.x+this.loading_hati.width/2,this.loading_hati.y-25, "loading..", {
	  //           font:"31px Times New Roman", fill:"#FFFFFF",fontWeight:"bold", align:"center"});  
	  //       this.text_wait.anchor.set(0.5);

	  //       this.text_loading = game.add.text( this.loading_hati.x+this.loading_hati.width/2,this.loading_hati.y+this.loading_hati.height+25, progress+"%", {
	  //           font:"31px Times New Roman", fill:"#FFFFFF",fontWeight:"bold", align:"center"});  
	  //       this.text_loading.anchor.set(0.5);

	  //       this.loading_hati.temp_width = this.loading_hati.width;
	  //       this.loading_hati.width = 0;
	  //   }

	  //   this.loading_hati.width = this.loading_hati.temp_width * (progress/100)
	  //   this.text_loading.setText(progress+"%")
	  //   if (progress == 100){
	  //   	this.text_loading.destroy();
	  //   	this.text_wait.destroy();
	  //   	this.text_wait = null;
	  //   	this.loading_hati.destroy();
	  //   	this.loading_hati = null;
			// game.load.onFileComplete.remove(this.fileComplete, this);
	  //   }
	},

	create: function () {
		// trace("CREATE CPRELOADER");
		clink.create("http://www.funnyhousegames.com");
		csound.init();
		this.ready = true;
		// this.bgBack = game.add.sprite(game.world.width * 0.5, game.world.height * 0.5, 'bg-ingame', null);
		// this.bgBack.anchor.setTo(0.5);

		// this.bg = game.add.sprite(game.world.width * 0.5, game.world.height * 0.5, 'title', null);
		// this.bg.anchor.setTo(0.5);

		// this.loadingCircle = game.add.sprite(game.world.width * 0.5, game.world.height * 0.5, 'loading_progress', null);
		// this.loadingCircle.anchor.setTo(0.5);
		// this.bg.stretch(game.world.width, game.world.height);
	    // csound.play(0);
	},

	update: function () {
		// this.loadingCircle.angle+=2;
		if (global.webFontReady && this.ready == true && !ctransition.isAnimating)
		// if(this.ready)
		{
			this.ready = false;
			// this.loadingCircle.destroy();
			// this.state.start('cgame');
			ctransition.close('cmainmenu');
		}
	}

};
