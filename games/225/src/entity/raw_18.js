Raw_18 = function(game)
{
	Phaser.Sprite.call(this, game, 0, 0, 'anim_18');
	this.init();
	this.posXGaris = [this.x + 175, this.x + 150, this.x + 125, this.x + 100, this.x + 75];
	this.posYGaris = [];
	for(var i=0;i<5;i++) {
		this.posYGaris.push(this.y + this.height*0.45);
	}
	this.posXSlice = [];
	var posX = 250;
	for(var i=0;i<=5;i++) {
		this.posXSlice.push(this.x + posX);
		posX -= 30;
	}
	this.posYSlice = this.y - this.height*0.4;
}

Raw_18.inherit({
	tipe: 18,
	step: 5,
	slicePos: ["v", "v", "v", "v", "v"],
	jmlSlice: 0,
}, Raw);