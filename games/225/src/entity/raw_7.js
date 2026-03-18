Raw_7 = function(game)
{
	Phaser.Sprite.call(this, game, 0, 0, 'anim_7');
	this.init();
	this.posXGaris = [this.x + 250, this.x + 215, this.x + 165, this.x + 115];
	this.posYGaris = [];
	for(var i=0;i<4;i++) {
		this.posYGaris.push(this.y + this.height*0.45);
	}
	this.posXSlice = [];
	var posX = 250;
	for(var i=0;i<=4;i++) {
		this.posXSlice.push(this.x + posX);
		posX -= 30;
	}
	this.posYSlice = this.y - this.height*0.5;
}

Raw_7.inherit({
	tipe: 7,
	step: 4,
	slicePos: ["v", "v", "v", "v"],
	jmlSlice: 0,
}, Raw);