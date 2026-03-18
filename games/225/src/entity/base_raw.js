Raw = function(game)
{
	
}

Raw.inherit({
	tipe: 1,
	step: 0,
	scRatio: 0.8,
	stepPos: 0,
	slicePos: ["v", "v", "v"],
	jmlSlice: 0,
	sliceInit : 0,
	isAnim: false,

	init:function()
	{
		this.x = 53.6;
		this.y = 500;
		if(this instanceof Raw_10)
			this.y = 425;
		else if(this instanceof Raw_11)
			this.y = 475;
		this.scale.setTo(this.scRatio, this.scRatio);

		if(this instanceof Raw_17) {
			this.anchor.setTo(0.5, 0.5);
			// this.x += this.width*0.5;
			// this.y += this.height*0.5;
			this.x = 200;
			this.y = 650;
			// game.add.tween(this).to({angle: 90}, 500, Phaser.Easing.Linear.None, true, 500);
		}
		else if(this instanceof Raw_11) {
			this.anchor.setTo(0.5, 0.5);
			this.x = 200;
			this.y = 600;
		}
	},

	potong:function()
	{
		if(!this.isOver()) {
			// if(this instanceof Raw_17) {
			// 	game.add.tween(this).to({})
			// 	if(step == 0) {
			// 		// ngadek
			// 	}
			// }
			this.stepPos++;
			if(this instanceof Raw_17) {
				var tween;
				if(this.stepPos == 1) {
					this.isAnim = true;
					game.curstate.flagAnimPotong = true;
					tween = game.add.tween(this).to({angle: 90}, 250, Phaser.Easing.Linear.None, true, 250);
					if(game.curstate.garis)
						game.curstate.gGaris.visible = false;
					tween.onComplete.add(function() {
						// this.angle = 0;
						if(game.curstate.garis)
							game.curstate.gGaris.visible = true;
						game.curstate.flagAnimPotong = false;
						this.isAnim = false;
						this.stepPos++;
						this.animations.add('rawSlice', [this.stepPos]);
						this.animations.play('rawSlice');
						this.angle = 0;
						if(this.stepPos >= this.step) {
							this.destroy();
							return false;
						}
						else
							return true;
					}, this);
				}
				else if(this.stepPos == 4) {
					this.isAnim = true;
					game.curstate.flagAnimPotong = true;
					tween = game.add.tween(this).to({angle: -90}, 250, Phaser.Easing.Linear.None, true, 250);
					if(game.curstate.garis)
						game.curstate.gGaris.visible = false;
					tween.onComplete.add(function() {
						// this.angle = 0;
						if(game.curstate.garis)
							game.curstate.gGaris.visible = true;
						game.curstate.flagAnimPotong = false;
						this.isAnim = false;
						this.stepPos++;
						this.animations.add('rawSlice', [this.stepPos]);
						this.animations.play('rawSlice');
						this.angle = 0;
						if(this.stepPos >= this.step) {
							this.destroy();
							return false;
						}
						else
							return true;
					}, this);
				}
			}
			else if(this instanceof Raw_11) {
				var tween;
				if(this.stepPos == 1) {
					this.isAnim = true;
					game.curstate.flagAnimPotong = true;
					tween = game.add.tween(this).to({angle: 90}, 250, Phaser.Easing.Linear.None, true, 250);
					trace("NANAAASS");
					if(game.curstate.garis) {
						game.curstate.gGaris.visible = false;
					}
					console.trace(game.curstate.garis, game.curstate.garis.visible);
					tween.onComplete.add(function() {
						// this.angle = 0;
						if(game.curstate.garis)
							game.curstate.gGaris.visible = true;
						game.curstate.flagAnimPotong = false;
						this.isAnim = false;
						this.stepPos++;
						this.animations.add('rawSlice', [this.stepPos]);
						this.animations.play('rawSlice');
						this.angle = 0;
						if(this.stepPos >= this.step) {
							this.destroy();
							return false;
						}
						else
							return true;
					}, this);
				}
				else if(this.stepPos == 5) {
					this.isAnim = true;
					game.curstate.flagAnimPotong = true;
					tween = game.add.tween(this).to({angle: -90}, 250, Phaser.Easing.Linear.None, true, 250);
					if(game.curstate.garis)
						game.curstate.gGaris.visible = false;
					tween.onComplete.add(function() {
						// this.angle = 0;
						if(game.curstate.garis)
							game.curstate.gGaris.visible = true;
						game.curstate.flagAnimPotong = false;
						this.isAnim = false;
						this.stepPos++;
						this.animations.add('rawSlice', [this.stepPos]);
						this.animations.play('rawSlice');
						this.angle = 0;
						if(this.stepPos >= this.step) {
							this.destroy();
							return false;
						}
						else
							return true;
					}, this);
				}
			}
			// if(this instanceof Raw_10)
			// 	this.y = 475;
			// console.trace(this.stepPos);
			this.animations.add('rawSlice', [this.stepPos]);
			// this.animations.add('rawSlice', [0]);
			this.animations.play('rawSlice');
			if(this.stepPos >= this.step) {
				this.destroy();
				return false;
			}
			else
				return true;
		}
		else
			return false;
	},

	isOver:function()
	{
		if(this.stepPos >= this.step)
			return true;
		else
			return false;
	},

	// getPosGaris:function()
	// {
	// 	var pos;
	// 	pos.x = posXGaris;
	// 	pos.y = posYGaris;
	// 	return pos;
	// },
}, Phaser.Sprite)