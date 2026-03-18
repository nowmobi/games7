ctutorial = function(x, y, id){
	Phaser.Group.call(this, game);
	this.x = x;
	this.y = y;
	this.id = id;
	this.onComplete = new Phaser.Signal;

	var tutorText = ctutorial.arrTutor[this.id];
	var spriteName = 'inGame/player_' + ctutorial.arrExpression[this.id];

	this.player = global.addSprite(0, 0, spriteName);
	this.player.anchor.setTo(0.5, 1);
	this.add(this.player);

	this.gDialog = game.add.group();
	this.add(this.gDialog);

	this.dialogBox = global.addSprite(0, 0, 'inGame/story_dialog_box');
	this.dialogBox.anchor.setTo(0.5);
	this.gDialog.add(this.dialogBox);

	this.dialogTxt = global.addText(-this.dialogBox.width * 0.45, -this.dialogBox.height * 0.37, tutorText, 25, game_config.font1);
	this.dialogTxt.fill = 'white';
	this.dialogTxt.fontWeight = 'normal';
	this.dialogTxt.wordWrap = true;
	this.dialogTxt.wordWrapWidth = this.dialogBox.width * 0.8;
	this.dialogTxt.lineSpacing = -7;
	this.gDialog.add(this.dialogTxt);

	this.gDialog.y = this.player.y - (this.player.height * 1.2);	

	if(this.id == 0){
		this.tweenIn();
	}

	game.input.onDown.add(this.onClick, this);
	this.onDestroy.add(function(){
	}, this);
};

ctutorial.inherit({
	tweenIn:function(){
		this.gDialog.visible = false;

		var tweenThis = game.add.tween(this);
		tweenThis.from({y:this.y + (this.player.height * 0.55)}, 300, Phaser.Easing.Linear.None, true);
		tweenThis.onComplete.add(function(){
			this.gDialog.visible = true;
			tweenDialog.start();
		}, this);

		var tweenDialog = game.add.tween(this.gDialog.scale);
		tweenDialog.from({x:0, y:0}, 200, Phaser.Easing.Elastic.Out, false);
	},

	tweenOut:function(){
		game.input.onDown.remove(this.onClick, this);
		var tweenDialog = game.add.tween(this.gDialog.scale);
		tweenDialog.to({x:0, y:0}, 200, Phaser.Easing.Elastic.In, true);
		tweenDialog.onComplete.add(function(){
			tweenThis.start();
		}, this);

		var tweenThis = game.add.tween(this);
		tweenThis.to({y:this.y + (this.player.height * 1.2)}, 200, Phaser.Easing.Linear.None, false);
		tweenThis.onComplete.add(function(){
			this.destroy();			
			ctutorial.arrTutor = [];
			ctutorial.arrExpression = [];
			this.onComplete.dispatch(this);			
		}, this);
	},

	onClick:function(){
		this.id++;
		if(this.id < ctutorial.arrTutor.length){
			var tutorText = ctutorial.arrTutor[this.id];
			var spriteName = 'inGame/player_' + ctutorial.arrExpression[this.id];
			this.dialogTxt.setText(tutorText);
			this.player.frameName = spriteName;
		} else {
			this.tweenOut();
		}
	},
}, Phaser.Group);

ctutorial.arrTutor = [];
ctutorial.arrExpression = [];