cpesan = function(game, x, y, id){
	Phaser.Sprite.call(this, game, x, y, 'inGame');
	var name = gameData.ingSpriteName[id];
	this.frameName = 'inGame/' + name;
	this.anchor.setTo(0.5);
	this.scale.setTo(0.5);
	this.id = id;
	this.index = 0;
	game.add.existing(this);
	curState().gInGame.add(this);
	this.init();
};

cpesan.inherit({

	init:function(){
		var delay = 700;
		var tweenIn = game.add.tween(this.scale);
		tweenIn.from({x:0, y:0}, 500, Phaser.Easing.Circular.InOut, true, delay);
	},

	moveLeft:function(toX){
		var delay = 500;
		var tween = game.add.tween(this);
		tween.to({x:toX}, 200, Phaser.Easing.Linear.None, true, delay);
	},

	disappear:function(){
		var tween = game.add.tween(this.scale);
		tween.to({x:0, y:0}, 500, Phaser.Easing.Circular.InOut, true);
		tween.onComplete.add(function(){
			this.destroy();
		}, this);
	},
	
}, Phaser.Sprite);