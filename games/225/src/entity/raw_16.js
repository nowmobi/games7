Raw_16 = function(game)
{
	Phaser.Sprite.call(this, game, 0, 0, 'anim_16');
	this.init();
	this.posXGaris = [this.x + 100, this.x + 250, this.x + 225, this.x + 190, this.x + 160, this.x + 135];
	this.posYGaris = [];
	for(var i=0;i<6;i++) {
		this.posYGaris.push(this.y + this.height*0.45);
	}

	this.posXSlice = [];
	var posX = 250;
	for(var i=0;i<=6;i++) {
		this.posXSlice.push(this.x + posX);
		posX -= 30;
	}
	this.posYSlice = this.y - this.height*0.5;
}

Raw_16.inherit({
	tipe: 16,
	step: 6,
	slicePos: ["v", "v", "v", "v", "v", "v"],
	jmlSlice: 0,
	sliceInit: 1,
}, Raw);