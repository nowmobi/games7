BasicGame.Preloader = function (game) {
	this.background = null;
	this.preloadBar = null;
	this.ready = false;
};



BasicGame.Preloader.prototype = {

	preload: function () {
		Asset.atlaspng('global');
		// Asset.atlaspng('pageDecor');
		Asset.atlaspng('inGame');			
		Asset.atlaspng('objects');	
		game.load.onFileComplete.add(this.fileComplete, this);
	},

	fileComplete: function(progress, cacheKey, success, totalLoaded, totalFiles) {
		trace("CPRELOADER FILE COMPLETE");
		this.createPreloader();

	    if (this.loading_hati)
	  		this.loading_hati.width = this.loading_hati.temp_width * (progress/100)

			var percent = progress/100;
			ctransition.loadingBar.height = ctransition.loadingBar.temp_height - (ctransition.loadingBar.temp_height * percent);
	  	if (this.text_loading)
	    	this.text_loading.setText(progress+"%")
	    if (progress == 100){
	    	ctransition.open();
			game.load.onFileComplete.remove(this.fileComplete, this);
	    }
	},

	createPreloader: function() {
		if (this.preloaderCreated) return;
		this.preloaderCreated = true;

        this.loading_hati = game.add.sprite(0,0,'loading_bar');
        this.loading_hati.x = BasicGame.viewWidth/2-this.loading_hati.width/2;       
        this.loading_hati.y = BasicGame.viewY + BasicGame.viewHeight/2;

        this.text_wait = game.add.text( this.loading_hati.x+this.loading_hati.width/2,this.loading_hati.y-25, "loading..", {
            font:"31px Times New Roman", fill:"#FFFFFF",fontWeight:"bold", align:"center"});  
        this.text_wait.anchor.set(0.5);

        this.text_loading = game.add.text( this.loading_hati.x+this.loading_hati.width/2,this.loading_hati.y+this.loading_hati.height+25, "0%", {
            font:"31px Times New Roman", fill:"#FFFFFF",fontWeight:"bold", align:"center"});  
        this.text_loading.anchor.set(0.5);

        this.loading_hati.temp_width = this.loading_hati.width;
        this.loading_hati.width = 0;
	},

	create: function () {
		// trace("CREATE CPRELOADER");
		cnotification.create();
		clink.create("http://www.funnyhousegames.com");
		// if (csound.musicObj[csound.idx])
  //               csound.musicObj[csound.idx].stop();
		this.ready = true;
	    // csound.play(0);
	},

	update: function () {
		// this.loadingCircle.angle+=2;
		if (global.webFontReady && this.ready == true)
		// if(this.ready)
		{
			this.ready = false;
			// this.loadingCircle.destroy();
			// this.state.start('cstory');
			ctransition.close('cmainmenu');	
		}
	}

};
