Raw_10 = function(game)
{
	Phaser.Sprite.call(this, game, 0, 0, 'anim_10');
	this.init();
	this.posXGaris = [this.x + 225, this.x + 300, this.x + 250, this.x + 150];
	this.posYGaris = [this.y + this.height*0.75];
	for(var i=0;i<3;i++) {
		this.posYGaris.push(this.y + this.height*0.6);
	}
	this.posXSlice = [];
	var posX = 250;
	for(var i=0;i<=4;i++) {
		this.posXSlice.push(this.x + posX);
		posX -= 30;
	}
	this.posYSlice = this.y - this.height*0.3;
}

Raw_10.inherit({
	tipe: 10,
	step: 4,
	slicePos: ["v", "v", "v", "v"],
	jmlSlice: 0,
	sliceInit: 1,
}, Raw);