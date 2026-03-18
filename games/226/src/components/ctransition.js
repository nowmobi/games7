ctransition = {
	time:800,
	delay:100,
	easing:Phaser.Easing.Linear.None,
	isAnimating: false,
};

ctransition.loadAsset = function() {
	Asset.png('loadingBg');
	Asset.atlaspng('preloader');
}

ctransition.create = function() {
	var group = game.add.group(null, 'grouptransition', true);
	var gCake = game.add.group();

	var bg = game.add.sprite(BasicGame.gameWidth*0.5,BasicGame.gameHeight*0.5,'loadingBg', null);
	bg.anchor.setTo(0.5);

	var title = global.addSprite(BasicGame.gameWidth * 0.46, BasicGame.gameHeight*0.4,'preloader/titleGame');
	title.anchor.setTo(0.5);

	var cakes = [];

	for(var a = 1; a < 6; a++)	{
		var xPos = (game.world.width * 0.11) + ((a - 1) * 125);
		var yPos = game.world.height * 0.72;
		var cake = global.addSprite(xPos, yPos, 'preloader/cc' + a);
		cake.anchor.setTo(0.5, 1);
		gCake.add(cake);
		cakes.push(cake);			
	}

	ctransition.group = group;
	ctransition.gCake = gCake;
	ctransition.bg = bg;
	ctransition.title = title;
	ctransition.cakes = cakes;
	ctransition.isClosed = false;
	ctransition.tweenIndex = 0;

	// console.log(ctransition.cakes);

	group.add(bg);
	group.add(title);
	group.add(gCake);

	// ctransition.createTween();

	game.stage.removeChild(group);
}

ctransition.close = function(nextState, callback) {
	if (ctransition.isAnimating) return;

	// if (!ctransition.isClosed) {
		ctransition.isAnimating = true;
		ctransition.bg.visible = false;
		ctransition.title.visible = false;
		ctransition.gCake.visible = false;

		game.stage.addChild(ctransition.group);

		ctransition.bg.visible = true;
		ctransition.title.visible = true;
		ctransition.gCake.visible = true;
		ctransition.createTween(nextState, callback);		
	// }
	
}

ctransition.open = function(callback) {
	if (ctransition.isAnimating) return;
	ctransition.isAnimating = true;
	ctransition.bg.visible = false;
	ctransition.title.visible = false;
	ctransition.gCake.visible = false;

	game.stage.removeChild(ctransition.group);
	ctransition.isAnimating = false;
	if (callback) callback();
}

ctransition.createTween = function(nextState, callback){
	// trace("MASUK TWEEN >>>");
	ctransition.cakeTween = [];
	for(var a = 0; a < ctransition.cakes.length; a++){
		var gerak = game.add.tween(ctransition.cakes[a]);

		var oriY = ctransition.cakes[a].y;
		gerak.to({y:[oriY - 70, oriY]}, 500, ctransition.easing, true, (a * 200));

		if(a == ctransition.cakes.length - 1){
			gerak.onComplete.add(function(){
				ctransition.createTween();
				if (nextState) {
					game.state.start(nextState);
					ctransition.isAnimating = false;
					if (callback) callback();
				}
			}, this);
		}

		ctransition.cakeTween.push(gerak);
	}

	ctransition.cakeTween[0].start();
}