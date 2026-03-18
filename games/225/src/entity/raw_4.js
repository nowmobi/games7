Raw_4 = function(game)
{
	Phaser.Sprite.call(this, game, 0, 0, 'anim_4');
	this.init();
	this.posXGaris = [this.x + 300, this.x + 250, this.x + 200, this.x + 175, this.x + 125];
	this.posYGaris = [];
	for(var i=0;i<5;i++) {
		this.posYGaris.push(this.y + this.height*0.5);
	}
	this.posXSlice = [];
	var posX = 250;
	for(var i=0;i<=5;i++) {
		this.posXSlice.push(this.x + posX);
		posX -= 30;
	}
	this.posYSlice = this.y - this.height*0.5;
}

Raw_4.inherit({
	tipe: 4,
	step: 5,
	slicePos: ["v", "v", "v", "v", "v"],
	jmlSlice: 0,
}, Raw);