cnotification = function(game){
	// csound.alert();
	Phaser.Sprite.call(this, game, 0, 0, 'inGame');
	this.frameName = 'inGame/pausebox';
	this.anchor.setTo(0.5);
	this.x = curState().gw * 0.5;
	this.y = curState().gh * 0.5;
	curState().gCont.add(this);
	this.inputEnabled = true;
	this.events.onInputDown.add(this.onClick, this);
	// console.log(this);

	this.congrat = global.addText(0, 0, _t("goalunlock"), 30, game_config.font1);
	this.congrat.anchor.setTo(0.5);
	this.congrat.fill = 'white';
	this.congrat.fontWeight = 'normal';
	this.congrat.align = 'center';
	this.congrat.lineSpacing = -10;
	this.congrat.wordWrap = true;
	this.congrat.wordWrapWidth = this.width * 0.8;
	this.addChild(this.congrat);

	this.scale.setTo(0.8);

	var notifAppear = game.add.tween(this.scale);
	notifAppear.from({x : 0, y:0}, 200, Phaser.Easing.Elastic.InOut, true);
};

cnotification.inherit({
	onClick:function(){
		var tween = game.add.tween(this.scale);
		tween.to({x:0, y:0}, 200, Phaser.Easing.Elastic.InOut, true);
		tween.onComplete.add(function(){
			this.destroy();
			curState().notif = null;
			curState().checkGoal();
		}, this);
	}
}, Phaser.Sprite);