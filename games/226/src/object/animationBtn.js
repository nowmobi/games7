animationBtn = function(game, x, y, name){
	Phaser.Sprite.call(this,game,x,y,'global');
	this.frameName = 'global/' + name;
	this.inputEnabled = true;
	this.events.onInputDown.add(this.onClickAnimation,this);
	this.events.onInputUp.add(this.onUpAnimation, this);

	this.scaleBig = game.add.tween(this.scale);
	this.scaleBig.to({x : 0.9, y : 0.9}, 50, Phaser.Easing.Elastic.In);

	this.scaleSmall = game.add.tween(this.scale);
	this.scaleSmall.to({x : 1, y : 1}, 50, Phaser.Easing.Elastic.In);
};

animationBtn.inherit({
	onClickAnimation:function(){
		csound.click();
		this.scaleBig.start();
	},

	onUpAnimation:function(){
		this.scaleSmall.start();
	},
}, Phaser.Sprite);