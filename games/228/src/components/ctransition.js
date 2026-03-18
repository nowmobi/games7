ctransition = {
	time:200,
	delay:100,
	easing:Phaser.Easing.Circular.Out,
	isAnimating: false,
};

ctransition.loadAsset = function() {
	// Asset.png('loadingBg');
	Asset.atlaspng('preloader');
}

ctransition.create = function() {
	var group = game.add.group(null, 'grouptransition', true);
	ctransition.gw = BasicGame.gameWidth;
	ctransition.gh = BasicGame.gameHeight;
	ctransition.centerX = ctransition.gw * 0.5;
	ctransition.centerY = ctransition.gh * 0.5;

	group.x = ctransition.centerX;
	group.y = ctransition.centerY;

	ctransition.bg = global.addSprite(0, 0, 'preloader/bg_base');
	ctransition.bg.anchor.setTo(0.5);

	ctransition.loadingBar = global.addSprite(0, 0, 'preloader/masking');
	ctransition.loadingBar.anchor.setTo(0.5, 0);
	ctransition.loadingBar.y -= ctransition.loadingBar.height * 0.5;

	ctransition.frontBg = global.addSprite(0, 0, 'preloader/bg');
	ctransition.frontBg.anchor.setTo(0.5);

    ctransition.loadingBar.temp_height = ctransition.loadingBar.height;

    ctransition.group = group;

    ctransition.isAnimating = false;
    ctransition.isClosed = false;

    group.add(ctransition.bg);
    group.add(ctransition.loadingBar);
    group.add(ctransition.frontBg);

    group.x -= (group.width * 0.55);

	game.stage.removeChild(group);
}

ctransition.close = function(nextState, callback) {
	if (ctransition.isAnimating) return;

	if (!ctransition.isClosed) {	
		csound.slide_close();	
		ctransition.isAnimating = true;
		// ctransition.group.x = ctransition.group.x - (ctransition.group.width * 0.55);
		// ctransition.bg.visible = false;

		game.stage.addChild(ctransition.group);

		// ctransition.bg.visible = true;	

		ctransition.isAnimating = true;

		var tween = game.add.tween(ctransition.group);
		tween.to({x:ctransition.centerX}, 500, ctransition.easing, true);
		tween.onComplete.add(function(){
			ctransition.isAnimating = false;
			ctransition.isClosed = true;
			if (nextState) {		
				game.state.start(nextState);
				if (callback) callback();
			}			
		}, this);

	}
	
}

ctransition.open = function(callback) {
	if (ctransition.isAnimating || !ctransition.isClosed) return;
	// ctransition.isOpened = true;
	csound.slide_open();
	ctransition.isAnimating = true;
	// ctransition.isClosed = false;
	trace(curState().key);

	if(curState().key == 'Preloader'){
		ctransition.isAnimating = false;
		ctransition.isClosed = false;
		ctransition.loadingBar.height = ctransition.loadingBar.temp_height;
	} else {
		ctransition.loadingBar.height = 0;
		
		var tweenThis = game.add.tween(ctransition.group);
		tweenThis.to({x:ctransition.gw + (ctransition.group.width * 0.55)}, 500, ctransition.easing, true);
		tweenThis.onComplete.add(function(){
			ctransition.group.x = -(ctransition.group.width * 0.55);
			ctransition.isAnimating = false;
			ctransition.isClosed = false;
			ctransition.loadingBar.height = ctransition.loadingBar.temp_height;
			game.stage.removeChild(ctransition.group);
			if (callback) callback();
		}, this);
	}

}