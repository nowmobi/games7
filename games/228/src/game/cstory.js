cstory = function(game){

};

cstory.inherit({
	preload:function(){
		BaseState.prototype.preload.call(this);
		Asset.png('bg_story');
	},

	init:function(){
		BaseState.prototype.init.call(this);
	},

	create:function(){
		BaseState.prototype.create.call(this);
		csound.play(0);
		if(plRef.stageOpened.length == 0){
			for(var a = 0; a < 4; a++){
				var story = _t('story' + (a + 1));
				cstory.arrStory.push(story);
			}	

			cstory.arrSprite = ['normal', 'happy', 'sad', 'happy'];
		} else if(plRef.stageOpened.length == gameData.totalStage){
			for(var a = 5; a <= 8; a++){
				var story = _t('story' + a);
				cstory.arrStory.push(story);
			}	
					
			cstory.arrSprite = ['happy', 'normal', 'normal', 'happy'];			
		}


		this.gInGame = game.add.group();
		this.gButton = game.add.group();

		this.idx = 0;
		this.isCiting = false;

		this.bg = game.add.sprite(this.centerX, this.centerY, 'bg_story', null);
		this.bg.anchor.setTo(0.5);
		this.gBG.add(this.bg);

		this.soundBtn = new soundBtn(this.gw * 0.95, this.gh * 0.03);
		this.gButton.add(this.soundBtn);

		this.sfxBtn = new sfxBtn(this.soundBtn.x - (this.soundBtn.width * 1.2), this.soundBtn.y);
		this.gButton.add(this.sfxBtn);

		this.closeBtn = new clickBtn(this.gw * 0.08, this.gh * 0.035, 'exit');
		this.closeBtn.onClick.add(function(obj){
			obj.changePage('cstage');
		}, this);
		this.gButton.add(this.closeBtn);

		this.judy = global.addSprite(this.centerX, this.gh * 0.9, 'inGame/player_normal');
		this.judy.anchor.setTo(0.5, 1);
		this.gInGame.add(this.judy);

		this.dialogBox = global.addSprite(this.centerX, this.gh * 0.18, 'inGame/story_dialog_box');
		this.dialogBox.anchor.setTo(0.5);
		this.gInGame.add(this.dialogBox);

		this.nextIcon = global.addSprite(this.dialogBox.width * 0.42, this.dialogBox.height * 0.25, 'inGame/next_dialog');
		this.nextIcon.anchor.setTo(0.5);
		this.nextIcon.visible = false;
		this.dialogBox.addChild(this.nextIcon);

		var tweenIcon = game.add.tween(this.nextIcon);
		tweenIcon.to({x:this.nextIcon.x + 10}, 300, Phaser.Easing.Linear.None, true, 0, -1, true);

		this.text = cstory.arrStory[0];
		this.splitText = this.text.split(' ');
		this.tempText = [];
		this.isCiting = true;

		this.dialogTxt = global.addText(-this.dialogBox.width * 0.45, -this.dialogBox.height * 0.37, '', 25, game_config.font1);
		this.dialogTxt.fill = 'white';
		this.dialogTxt.fontWeight = 'normal';
		this.dialogTxt.wordWrap = true;
		this.dialogTxt.wordWrapWidth = this.dialogBox.width * 0.8;
		this.dialogTxt.lineSpacing = -7;
		this.dialogBox.addChild(this.dialogTxt);

		this.gCont.add(this.gInGame);
		this.gCont.add(this.gButton);
		this.onResize();

		this.tweenIn();

		game.input.onDown.add(this.onClick, this);
	},

	tweenIn:function(){
		this.dialogBox.visible = false;
		this.isComingIn = true;
		var tweenPlayer = game.add.tween(this.judy);
		tweenPlayer.from({x:-this.judy.width * 0.55}, 2000, Phaser.Easing.Linear.None, true);
		tweenPlayer.onComplete.add(function(){
			this.isComingIn = false;
		}, this);

		this.walking();
	},

	walking:function(){
		csound.cartoon_walk();
		var tweenPlayer = game.add.tween(this.judy);
		tweenPlayer.to({angle:[-10, 10]}, 500, Phaser.Easing.Linear.None, true);
		tweenPlayer.onComplete.add(function(){
			csound.cartoon_walk();
			if(this.isComingIn){
				this.walking();
			} else {
				var tweenThis = game.add.tween(this.judy);
				tweenThis.to({angle:0}, 300, Phaser.Easing.Linear.None, true);
				tweenThis.onComplete.add(function(){
					this.dialogAppear();
					var spriteName = 'inGame/player_' + cstory.arrSprite[this.idx];
					this.judy.frameName = spriteName;
				}, this);
			}
		}, this);
	},

	dialogAppear:function(){
		this.dialogBox.visible = true;
		var tweenDialog = game.add.tween(this.dialogBox.scale);
		tweenDialog.from({x:0, y:0}, 500, Phaser.Easing.Elastic.Out, true);
		tweenDialog.onComplete.add(this.citingDialog, this);
	},

	citingDialog:function(){
		var delay = 50;
		this.nextIcon.visible = false;
		game.time.events.add(delay, function(){
			if(this.isCiting){
				csound.typing();
				var id = this.tempText.length;
				this.tempText.push(this.splitText[id]);

				var text = '';
				for(var a = 0; a < this.tempText.length; a++){
					text += this.tempText[a] + ' ';
				}

				this.dialogTxt.setText(text);
				if(this.tempText.length < this.splitText.length){
					this.citingDialog();					
				} else {
					this.isCiting = false;
					this.nextIcon.visible = true;
				}
			}
		}, this);
	},

	onClick:function(event){
		if(!this.dialogBox.visible) return;
		if(Phaser.Rectangle.contains(this.closeBtn.getBounds(), event.x, event.y)){
			// this.closeBtn.onClickEvents();
			return;
		} else {
			this.idx++;
			if(this.isCiting){
				this.isCiting = false
				this.dialogTxt.setText(this.text);
				this.nextIcon.visible = true;
			} else {
				if(this.idx < cstory.arrStory.length){
					this.text = cstory.arrStory[this.idx];
					this.splitText = this.text.split(' ');
					this.tempText = [];
					this.dialogTxt.setText('');
					this.isCiting = true;
					this.citingDialog();

					var spriteName = 'inGame/player_' + cstory.arrSprite[this.idx];
					this.judy.frameName = spriteName;
				} else {
					this.closeBtn.changePage('cstage');
				}			
			}
		}
	},

	update:function(){
		BaseState.prototype.update.call(this);
	},
}, BaseState);

cstory.arrStory = [];
cstory.arrSprite = [];