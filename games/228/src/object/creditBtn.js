creditBtn = function(x, y, spriteName){
	Phaser.Group.call(this, game);

	this.creditBtn = new clickBtn(x, y, spriteName);
	this.add(this.creditBtn);

	this.gCredit = game.add.group();
	this.add(this.gCredit);

	// this.events.onInputDown.add(this.onClick, this);	
};

creditBtn.inherit({
	init:function(){
		this.bg = game.add.sprite(curState().centerX, curState().centerY, 'darkBg', null);
		this.bg.anchor.setTo(0.5);
		this.bg.inputEnabled = true;
		this.bg.events.onInputDown.add(this.closeCredit, this);
		this.gCredit.add(this.bg);

		this.credit = game.add.sprite(this.bg.x, this.bg.y, 'credit', null);
		this.credit.anchor.setTo(0.5);
		this.credit.inputEnabled = true;
		this.credit.events.onInputDown.add(this.closeCredit, this);
		this.gCredit.add(this.credit);
	},

	onClick:function(obj){
		if(!this.gCredit.visible){
			csound.click();
			this.gCredit.visible = true;
		}
	},

	closeCredit:function(){
		this.gCredit.visible = false;
	},
}, Phaser.Group);