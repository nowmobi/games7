BaseState = function(game)	{
}

BaseState.prototype = {
	ctr:0,
	isActive: true,
	init: function() {
		this.gw = BasicGame.gameWidth;
		this.gh = BasicGame.gameHeight;
		this.centerX = this.gw*0.5;
		this.centerY = this.gh*0.5;
		this.nm = "BaseState";
	},
	preload: function () {
		game.load.onFileComplete.add(this.fileComplete, this);
	},

	fileComplete: function(progress, cacheKey, success, totalLoaded, totalFiles) {
		// trace("FILE COMPLETE:",progress,cacheKey,success,totalLoaded,totalFiles);
	    if (!this.bg_loader){
	    	// trace("masuk bg loader create");
	    	this.gw = BasicGame.gameWidth;
			this.gh = BasicGame.gameHeight;
			this.centerX = this.gw*0.5;
			this.centerY = this.gh*0.5;
	    	
	    	// this.bg_loader = game.add.sprite(0,0,"bg-ingame");
	    	// this.bg_loader.stretch(game.world.width, game.world.height);

	    	this.gPreloader = game.add.group();

	    	// this.loading_anim = global.addSprite(this.gw*0.5, this.gh*0.7, 'global/loading_progress');
	    	// this.loading_anim.scale.setTo(2.3, 2.3);
	    	// this.loading_anim.anchor.setTo(0.5, 0.5);

	    	// this.gPreloader.add(this.loading_anim);

	  //       this.loading_text = game.add.text(this.loading_anim.x, this.loading_anim.y, progress+"%", {
			// 	font:"30px Times New Roman", fill:"#000000",fontWeight:"bold", align:"center"});
			// this.loading_text.anchor.set(0.5, 0.5);
			// this.gPreloader.add(this.loading_text);

	    } 

	    if (progress == 100){
	    	ctransition.open();
	    	
	    	// this.loading_text.destroy();
	    	// this.bg_loader.destroy();
	    	this.gPreloader.destroy();
			game.load.onFileComplete.remove(this.fileComplete, this);
	    }
	},

	create: function() {
		this.gBG = game.add.group();
		this.gCont = game.add.group();
		// this.black80 = global.addSprite(0,0,"global/black80");
		// this.black80.inputEnabled = true;
		// this.black80.visible = false;
		this.gFG = game.add.group();
		this.g0 = game.add.group();
	},

	loadingAnim: function() {
		if (!this.loading_0) return;
		this.ctr--;
		if (this.ctr>0) return;
		this.ctr = 3;

		var tx = this.loading_0.x;
		for (i = 0; i<7; i++) {
			this["loading_"+i].x = this["loading_"+(i+1)].x;
		}
		this.loading_7.x = tx;
	},
	loadUpdate: function() {
		// trace("loadUpdate");
		// this.loadingAnim();
	},
	update: function() {
		// trace("update");
		// this.loadingAnim();
	},
	shutdown: function() {

	},
	onResize: function() {
		global.init();
		var isLandscape = (global.viewHeight < global.viewWidth);
		if  (isLandscape != global.landscape) {
			// incorrect orientation
			document.getElementById('orientation').style.display = 'block';
		}
		else {
			// correct orientation
			document.getElementById('orientation').style.display = 'none';
		}

		if (this.gPreloader){
			this.gPreloader.fitToCenter(BasicGame.gameWidth, BasicGame.gameHeight, global.viewWidth, global.viewHeight);
		}
		if (this.gCont){
			this.gCont.fitToCenter(BasicGame.gameWidth, BasicGame.gameHeight, global.viewWidth, global.viewHeight);
			// trace("SCALE GCONT",this.gCont.scale.x, this.gCont.scale.y);
		}
		if (this.bg){
			if (this.bg.isStretch)
				this.bg.stretch(this.world.width, this.world.height);
		}
		if (this.gFG){
			this.gFG.fitToCenter(BasicGame.gameWidth, BasicGame.gameHeight, global.viewWidth, global.viewHeight);
		}
		if (this.g0){
			this.g0.fitToCenter(BasicGame.gameWidth, BasicGame.gameHeight, global.viewWidth, global.viewHeight);
		}
		if (this.black80) {
			this.black80.stretch(this.world.width*1.1, this.world.height*1.1);
			this.black80.x = this.world.width*-0.05;
			this.black80.y = this.world.height*-0.05;
		}
	},
};