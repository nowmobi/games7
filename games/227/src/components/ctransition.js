ctransition = {
	time:200,
	delay:100,
	easing:Phaser.Easing.Circular.InOut,
	isAnimating: false,
};

ctransition.loadAsset = function() {
	Asset.png('loadingbg-01');
	Asset.atlaspng('preloader');
}

ctransition.create = function() {
	var group = game.add.group(null, 'grouptransition', true);
	var burger = game.add.group();

	var bg = game.add.sprite(BasicGame.gameWidth*0.5,BasicGame.gameHeight*0.5,'loadingbg-01', null);
	bg.anchor.setTo(0.5);

	// var ingredients = [];
	var recipe = [9, 1, 4, 0, 5, 2, 10, 3, 7, 6, 8];
	var _height = 0;
	for(var a = 0; a < 11; a++){
		var i = recipe[a];
		_height += gameData.ingHeight[i];
		var y = -1 * _height;
		var s = global.addSprite(0, y, 'preloader/ing' + i);
		s.anchor.setTo(0.5);
		// ingredients.push(s);
		burger.add(s);
	}

	burger.x = BasicGame.gameWidth * 0.5;
	burger.y = (BasicGame.gameHeight * 0.5) + (burger.height * 0.5);
	burger.scale.setTo(1.5);

	var title = global.addSprite(bg.x, burger.y - (burger.height * 0.3), 'preloader/title');
	title.anchor.setTo(0.5);
	title.scale.setTo(0.7);

	ctransition.group = group;
	ctransition.bg = bg;
	ctransition.title = title;
	ctransition.burger = burger;
	// ctransition.ingredients = ingredients;
	ctransition.isClosed = false;
	ctransition.isAnimating = false;

	// // console.log(ctransition.cakes);

	group.add(bg);
	group.add(burger);
	group.add(title);

	burger.forEach(function(obj){
		trace(obj.y);
	}, this);

	// // ctransition.createTween();

	game.stage.removeChild(group);
}

ctransition.close = function(nextState, callback) {
	if (ctransition.isAnimating) return;

	if (!ctransition.isClosed) {
		ctransition.isAnimating = true;
		ctransition.bg.visible = false;
		ctransition.burger.visible = false;
		ctransition.title.visible = false;

		game.stage.addChild(ctransition.group);

		ctransition.burger.x = BasicGame.gameWidth * 0.5;
		ctransition.burger.y = (BasicGame.gameHeight * 0.5) + (ctransition.burger.height * 0.5);
		ctransition.title.y = ctransition.burger.y - (ctransition.burger.height * 0.3);

		ctransition.bg.visible = true;
		ctransition.burger.visible = true;
		// ctransition.title.visible = true;
		// ctransition.createTween(nextState, callback);
		var tween3 = game.add.tween(ctransition.bg);
		tween3.from({alpha:0}, ctransition.time, ctransition.easing, true);

		var tween = null;
		var d = 0; 
		var fromY = -200 - ctransition.burger.y;
		ctransition.burger.forEach(function(obj){
			var delay = d * 70;
			tween = game.add.tween(obj);
			tween.from({y:fromY}, ctransition.time, ctransition.easing, true, delay);
			d++;
		}, this);		

		tween.onComplete.add(function(){
			ctransition.title.visible = true;
			var tween2 = game.add.tween(ctransition.title);
			tween2.from({y:-200}, 500, Phaser.Easing.Elastic.InOut, true);
			tween2.onComplete.add(function(){
				ctransition.isAnimating = false;
				ctransition.isClosed = true;
				if (nextState) {
					game.state.start(nextState);
					ctransition.isAnimating = false;
					if (callback) callback();
				}
			}, this);
		}, this);
	}
	
}

ctransition.open = function(callback) {
	if (ctransition.isAnimating) return;
	ctransition.isAnimating = true;

	var tween2 = game.add.tween(ctransition.title);
	tween2.to({y:-200}, 1000, Phaser.Easing.Elastic.InOut, true);
	tween2.onComplete.add(function(){
		var tween3 = game.add.tween(ctransition.bg);
		tween3.to({alpha:0}, ctransition.time, ctransition.easing, true);

		var tween = game.add.tween(ctransition.burger);
		tween.to({x:-200}, ctransition.time, Phaser.Easing.Elastic.InOut, true);
		tween.onComplete.add(function(){
			ctransition.title.visible = true;
			var tween2 = game.add.tween(ctransition.title);
			tween2.from({y:-200}, 1000, Phaser.Easing.Elastic.InOut, true);
			tween2.onComplete.add(function(){
				game.stage.removeChild(ctransition.group);
				ctransition.isAnimating = false;
				ctransition.isClosed = false;
				ctransition.bg.alpha = 1;
				ctransition.bg.visible = false;
				if (callback) callback();
			}, this);
		}, this);
	}, this);
}