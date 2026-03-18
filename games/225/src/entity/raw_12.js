Raw_12 = function(game)
{
	Phaser.Sprite.call(this, game, 0, 0, 'anim_12');
	this.init();
	this.posXGaris = [this.x + 225, this.x + 200];
	// this.posYGaris = [this.y + this.height*0.5, this.y + this.height*0.5];
	this.posYGaris = [];
	for(var i=0;i<2;i++) {
		this.posYGaris.push(this.y + this.height*0.45);
	}

	this.posXSlice = [];
	var posX = 250;
	for(var i=0;i<=2;i++) {
		this.posXSlice.push(this.x + posX);
		posX -= 30;
	}
	this.posYSlice = this.y - this.height*0.5;
}

Raw_12.inherit({
	tipe: 12,
	step: 2,
	slicePos: ["v", "v"],
	jmlSlice: 0,
}, Raw);