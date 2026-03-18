Raw_8 = function(game)
{
	Phaser.Sprite.call(this, game, 0, 0, 'anim_8');
	this.init();
	this.posXGaris = [this.x + 225];
	this.posYGaris = [this.y + this.height*0.45];

	this.posXSlice = [];
	var posX = 250;
	for(var i=0;i<=3;i++) {
		this.posXSlice.push(this.x + posX);
		posX -= 30;
	}
	this.posYSlice = this.y - this.height*0.5;

	this.panahPos = ["h", "h", "h"];
	this.posXPanah = [this.x, this.x, this.x];
	this.posYPanah = [this.y + this.height*0.4, this.y + this.height*0.45, this.y + this.height*0.5];
	
	// this.inputEnabled = true;
	// this.events.onInputDown.add(function() {
	// 	// trace("KIIILLLLL");
	// 	this.potong();
	// }, this);

	// console.trace(this);
}

Raw_8.inherit({
	tipe: 8,
	step: 4,
	slicePos: ["v"],
	jmlSlice: 0,
}, Raw);