Raw_3 = function(game)
{
	Phaser.Sprite.call(this, game, 0, 0, 'anim_3');
	this.init();
	this.posXGaris = [this.x + 250, this.x + 215, this.x + 180];
	// this.posYGaris = [this.y + this.height*0.5, this.y + this.height*0.5, this.y + this.height*0.5];
	this.posYGaris = [];
	for(var i=0;i<=3;i++) {
		this.posYGaris.push(this.y + this.height*0.5);
	}
	this.posXSlice = [];
	var posX = 250;
	for(var i=0;i<=3;i++) {
		this.posXSlice.push(this.x + posX);
		posX -= 30;
	}
	this.posYSlice = this.y - this.height*0.5;
}

Raw_3.inherit({
	tipe: 3,
	step: 3,
	slicePos: ["v", "v", "v"],
	jmlSlice: 0,
}, Raw);