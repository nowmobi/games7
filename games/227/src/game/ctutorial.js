ctutorial = function(game, x, y, tutorText){
	this.gTutor = game.add.group();
	Phaser.Sprite.call(this, game, x, y, 'inGame');
	this.frameName = 'inGame/pausebox';
	this.anchor.setTo(0.5);
	this.scale.setTo(0.8);
	this.inputEnabled = true;
	this.events.onInputDown.add(this.onClick, this);
	this.gTutor.add(this);

	this.tutorialText = global.addText(this.x, this.y, tutorText, 30, game_config.font1);
	this.tutorialText.anchor.setTo(0.5);
	this.tutorialText.fill = 'white';
	this.tutorialText.fontWeight = 'normal';
	this.tutorialText.lineSpacing = -10;
	this.tutorialText.wordWrap = true;
	this.tutorialText.wordWrapWidth = this.width - 50;
	this.tutorialText.align = 'center';
	this.gTutor.add(this.tutorialText);
	// this.addChild(this.tutorialText);

	var tween = game.add.tween(this.scale);
	tween.from({x:0, y:0}, 200, Phaser.Easing.Elastic.InOut, true);

	var tween2 = game.add.tween(this.tutorialText.scale);
	tween2.from({x:0, y:0}, 200, Phaser.Easing.Elastic.InOut, true);
};

ctutorial.tutorial1 = function(){
	for(var a = 1; a < 5; a++){
		plRef.tutorText.push(_t("tutorial" + a));
	}
}

ctutorial.inherit({
	onClick:function(){
		this.gTutor.destroy();
		curState().checkAfterTutor();
	},
}, Phaser.Sprite);