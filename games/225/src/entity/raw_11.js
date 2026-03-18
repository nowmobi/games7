Raw_11 = function(game)
{
	Phaser.Sprite.call(this, game, 0, 0, 'anim_11');
	this.init();
	this.posXGaris = [this.x - 25, this.x + 50, this.x + 50 , this.x, this.x - 50, this.x + 125, this.x + 125, this.x + 100, this.x + 50, this.x];
	this.posYGaris = [this.y];
	for(var i=0;i<4;i++) {
		this.posYGaris.push(this.y + this.height*0.2);
	}
	for(var i=0;i<5;i++) {
		this.posYGaris.push(this.y);
	}
	// this.posYGaris = [this.y + this.height*0.5, this.y + this.height*0.5, this.y + this.height*0.5, this.y + this.height*0.5, this.y + this.height*0.5];

	this.posXSlice = [];
	var posX = 200;
	for(var i=0;i<=10;i++) {
		this.posXSlice.push(this.x + posX);
		posX -= 30;
	}
	this.posYSlice = this.y;
}

Raw_11.inherit({
	tipe: 11,
	step: 10,
	slicePos: ["v", "v", "v", "v", "v", "v", "v", "v", "v", "v"],
	jmlSlice: 0,
	sliceInit: 6,
}, Raw);