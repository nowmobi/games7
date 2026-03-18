Raw_14 = function(game)
{
	Phaser.Sprite.call(this, game, 0, 0, 'anim_14');
	this.init();
	this.posXGaris = [this.x + 200, this.x + 165, this.x + 140, this.x + 115];
	this.posYGaris = [];
	for(var i=0;i<4;i++) {
		this.posYGaris.push(this.y + this.height*0.5);
	}

	this.posXSlice = [];
	var posX = 250;
	for(var i=0;i<=4;i++) {
		this.posXSlice.push(this.x + posX);
		posX -= 30;
	}
	this.posYSlice = this.y - this.height*0.4;
}

Raw_14.inherit({
	tipe: 14,
	step: 4,
	slicePos: ["v", "v", "v", "v"],
	jmlSlice: 0,
}, Raw);