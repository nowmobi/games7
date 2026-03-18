Raw_17 = function(game)
{
	Phaser.Sprite.call(this, game, 0, 0, 'anim_17');
	this.init();
	this.posXGaris = [this.x - 50, this.x + 40, this.x - 20, this.x - 20, this.x + 60, this.x + 35, this.x + 20, this.x - 20];
	// this.posYGaris = [this.y + this.height*0.5, this.y + this.height*0.5, this.y + this.height*0.5];
	this.posYGaris = [];
	this.posYGaris.push(this.y);
	for(var i=0;i<8;i++) {
		this.posYGaris.push(this.y);
	}

	this.posXSlice = [];
	var posX = 200;
	for(var i=0;i<=8;i++) {
		this.posXSlice.push(this.x + posX);
		posX -= 30;
	}
	this.posYSlice = this.y - this.height*1.2;
}

Raw_17.inherit({
	tipe: 17,
	step: 8,
	slicePos: ["v", "v", "v", "v", "v", "v", "v", "v"],
	jmlSlice: 0,
	sliceInit: 5,
}, Raw);