Raw_1 = function(game)
{
	Phaser.Sprite.call(this, game, 0, 0, 'anim_1');
	this.init();
	this.posXGaris = [this.x + 200, this.x + 140, this.x + 75];
	this.posYGaris = [this.y + this.height*0.5, this.y + this.height*0.4, this.y + this.height*0.4];

	this.posXSlice = [];
	var posX = 250;
	for(var i=0;i<=3;i++) {
		this.posXSlice.push(this.x + posX);
		posX -= 30;
	}
	this.posYSlice = this.y - this.height*0.8;
}

Raw_1.inherit({
	tipe: 1,
	step: 3,
	slicePos: ["v", "v", "v"],
	jmlSlice: 0,
}, Raw);