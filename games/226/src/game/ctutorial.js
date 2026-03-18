ctutorial = function(game, x, y, tutorText){
	this.gTutor = game.add.group();
	Phaser.Sprite.call(this, game, x, y, 'inGame');
	this.frameName = 'inGame/boostTitle';
	this.anchor.setTo(0, 0.5);
	this.scale.setTo(1.2, 1.8);
	this.gTutor.add(this);

	this.tutorialText = global.addText(x + (this.width * 0.52), y - 23, tutorText, 22, game_config.font2);
	this.tutorialText.anchor.setTo(0.5);
	this.tutorialText.fill = 'black';
	this.tutorialText.fontWeight = 'normal';
	this.tutorialText.lineSpacing = -10;
	this.tutorialText.wordWrap = true;
	this.tutorialText.wordWrapWidth = this.width - 50;
	this.tutorialText.align = 'center';
	this.gTutor.add(this.tutorialText);
};

ctutorial.attemp1 = function(){
	plRef.tutorText = [];
	for(var a = 1; a < 3; a++){
		plRef.tutorText.push(_t("tutorial" + a));
	}
}

ctutorial.attemp2 = function(){
	plRef.tutorText = [];
	plRef.tutorText.push(_t("tutorial3"));
}

ctutorial.attemp3 = function(){	
	plRef.tutorText = [];
	for(var a = 4; a < 6; a++){
		plRef.tutorText.push(_t("tutorial" + a));
	}	
}

ctutorial.attemp4 = function(){
	plRef.tutorText = [];
	for(var a = 6; a < 8; a++){
		plRef.tutorText.push(_t("tutorial" + a));
	}
}

ctutorial.inherit({

}, Phaser.Sprite);