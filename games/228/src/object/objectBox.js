objectBox = function(col, row){
	Phaser.Sprite.call(this, game, 0, 0, 'inGame');
	this.frameName = 'inGame/panel_outline';
	this.anchor.setTo(0.5);

	var totalCol = gameData.mapping.length;
	var width = ((totalCol * this.width) / 2) - (this.width * 1.5); 
	this.x = -width + (col * (this.width * 0.75));

	var totalRow = gameData.mapping[col].length;
	var height = ((totalRow * this.height) / 2) - (this.height * 0.7);
	this.y = -height + (row * (this.height * 0.95));

	this.col = col;
	this.row = row;
	this.isEmpty = false;

	if(gameData.mapping[col][row] == 0) {
		this.alpha = 0;
		return;
	}

	this.boxInside = global.addSprite(0, 0, 'inGame/panel');
	this.boxInside.anchor.setTo(0.5);
	this.addChild(this.boxInside);

	this.inputEnabled = true;
	this.events.onInputDown.add(this.onBoxClicked, this);
	this.events.onInputOver.add(this.onBoxOver, this);
	this.events.onInputUp.add(this.onBoxUp, this);

	this.isClicked = false;
};

objectBox.inherit({
	onBoxClicked:function(){
		trace('box col row', this.col, this.row);
		if(!curState().objects[this.col][this.row]) return;
		curState().objects[this.col][this.row].onClick();
	},

	onBoxOver:function(){
		if(!curState().isClicked) return;
		curState().objects[this.col][this.row].onOver();
	},

	onBoxUp:function(){
		if(!curState().isClicked) return;
		curState().objects[this.col][this.row].onUp();
	},
}, Phaser.Sprite);