Raw_5 = function(game)
{
	Phaser.Sprite.call(this, game, 0, 0, 'anim_5');
	this.init();
	this.posXGaris = [this.x + 350, this.x + 325, this.x + 275, this.x + 225, this.x + 175, this.x + 125, this.x + 75];
	this.posYGaris = [];
	for(var i=0;i<7;i++) {
		this.posYGaris.push(this.y + this.height*0.5);
	}
	this.posXSlice = [];
	var posX = 250;
	for(var i=0;i<=7;i++) {
		this.posXSlice.push(this.x + posX);
		posX -= 30;
	}
	this.posYSlice = this.y - this.height*0.5;
}

Raw_5.inherit({
	tipe: 5,
	step: 7,
	slicePos: ["v", "v", "v", "v", "v", "v", "v"],
	jmlSlice: 0,
}, Raw);