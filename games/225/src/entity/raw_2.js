Raw_2 = function(game)
{
	Phaser.Sprite.call(this, game, 0, 0, 'anim_2');
	this.init();
	this.posXGaris = [this.x + 200];
	this.posYGaris = [this.y + this.height*0.5];

	this.posXSlice = [];
	var posX = 250;
	for(var i=0;i<=1;i++) {
		this.posXSlice.push(this.x + posX);
		posX -= 30;
	}
	this.posYSlice = this.y - this.height*0.7;
}

Raw_2.inherit({
	tipe: 2,
	step: 1,
	slicePos: ["h"],
	jmlSlice: 0,
}, Raw);