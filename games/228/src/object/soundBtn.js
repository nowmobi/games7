soundBtn = function (x, y) {
	csound.call(this, game, x, y);

	this.isClicked = false;
};

soundBtn.inherit({
	downSound:function(something){
		if(this.isClicked) return;
		this.isClicked = true;
		
		var timing = 80;
		var tween = game.add.tween(this.scale);
		tween.to({x:this.scale.x - 0.1, y:this.scale.y - 0.1}, timing, Phaser.Easing.Elastic.Out, true, 0, 0, true);
		tween.onComplete.add(function(){
			csound.prototype.downSound.call(this);
			this.isClicked = false;
		}, this);
	},

	update:function(){
		csound.prototype.update.call(this);
	},
}, csound);