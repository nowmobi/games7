sfxBtn = function(x, y){
	Phaser.Sprite.call(this, game, x, y, 'global');
	this.frameName = 'global/sfx_on';
	this.anchor.setTo(0.5);

	this.inputEnabled = true;
	this.events.onInputDown.add(this.onClick, this);
	this.events.onInputUp.add(this.onUp, this);

	this.isClicked = false;
};

sfxBtn.inherit({
	onClick:function(){		
		if(this.isClicked) return;
		this.isClicked = true;
		
		var timing = 80;
		var tween = game.add.tween(this.scale);
		tween.to({x:this.scale.x - 0.1, y:this.scale.y - 0.1}, timing, Phaser.Easing.Elastic.Out, true, 0, 0, true);
		tween.onComplete.add(function(){
			if(csound.sfxOn){
				csound.sfxOn = false;
			} else {
				csound.sfxOn = true;
			}

			this.isClicked = false;
		}, this);
	},

	onUp:function(){
		if(!this.isClicked) return;
		this.isClicked = false;		
	},

	update:function(){
		if(!this.isClicked){
			if(csound.sfxOn){
				this.frameName = 'global/sfx_on';
			} else {
				this.frameName = 'global/sfx_off';
			}
		}
	},
}, Phaser.Sprite);