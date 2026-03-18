ctray = function(game){
	Phaser.Sprite.call(this, game, 0, 0, 'inGame');
	this.frameName = 'inGame/nampan';
	this.x = curState().gw * 0.5;
	this.y = curState().playBox.y - (curState().playBox.height * 0.15);
	this.anchor.setTo(0.5);

	this.inputEnabled = true;
	this.events.onInputDown.add(function(obj){
		curState().trayClicked = true;
		game.input.x = obj.x;		
	}, this);
	this.events.onInputUp.add(function(obj){
		curState().trayClicked = false;
	}, this);

	curState().gInGame.add(this);
	this.init();
};

ctray.inherit({

	init:function(){
		var delay = 700;
		var tweenIn = game.add.tween(this);
		tweenIn.from({x:curState().gw * 1.7}, 500, Phaser.Easing.Circular.InOut, true, delay);
	},

	moveLeft:function(){
		var tweenBurger = game.add.tween(curState().burger);
		tweenBurger.to({x : -300}, 200, Phaser.Easing.Linear.None, true);

		var tween = game.add.tween(this);
		tween.to({x:-300}, 200, Phaser.Easing.Linear.None, true);
		tween.onComplete.add(function(){
			curState().burger.destroy();
			this.destroy();
		}, this);
	},
	
}, Phaser.Sprite);