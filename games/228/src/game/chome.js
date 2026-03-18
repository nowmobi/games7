chome = function(game){

};

chome.inherit({
	preload:function(){
		BaseState.prototype.preload.call(this);
		Asset.png('homeBg');
	},

	init:function(){
		BaseState.prototype.init.call(this);
	},

	create:function(){
		BaseState.prototype.create.call(this);
		csound.play(0);
		gameData.stage = 0;
		this.gInGame = game.add.group();
		this.gButton = game.add.group();

		this.bg = game.add.sprite(this.centerX, this.centerY, 'homeBg', null);
		this.bg.anchor.setTo(0.5);
		this.gBG.add(this.bg);

		this.scoreBoard = global.addSprite(this.gw * 0.3, this.gh * 0.23, 'inGame/board2');
		this.scoreBoard.scale.setTo(1.5);
		this.scoreBoard.anchor.setTo(0.5);
		this.gInGame.add(this.scoreBoard);

		this.hsTxt = global.addText(this.scoreBoard.x - (this.scoreBoard.width * 0.05), this.scoreBoard.y - (this.scoreBoard.height * 0.15), _t('highscore'), 25, game_config.font1);
		this.hsTxt.anchor.setTo(0.5);
		this.hsTxt.fill = '#6B5929';
		this.gInGame.add(this.hsTxt);

		this.showHs = global.addText(this.hsTxt.x, this.hsTxt.y + (this.hsTxt.height * 0.7), plRef.highScore + '', 25, game_config.font1);
		this.showHs.anchor.setTo(0.5);
		this.showHs.fill = '#E3D4A6';
		this.gInGame.add(this.showHs);

		this.board = global.addSprite(this.gw * 0.38, this.gh * 0, 'inGame/board-home');
		this.board.anchor.setTo(0.5);
		this.gInGame.add(this.board);

		this.stageTxt = global.addText(this.board.x, this.board.y + (this.board.height * 0.32), _t('stageselect'), 52, game_config.font2);
		this.stageTxt.anchor.setTo(0.5);
		this.stageTxt.fill = '#E3D4A6';
		this.stageTxt.stroke = '#564925';
		this.stageTxt.strokeThickness = 5;
		this.gInGame.add(this.stageTxt);

		this.soundBtn = new csound(game, this.gw * 0.8, this.gh * 0.1);
		this.gButton.add(this.soundBtn);

		this.homeBtn = new clickBtn(this.soundBtn.x + (this.soundBtn.width * 1.2), this.soundBtn.y, 'home');
		this.homeBtn.scale.setTo(0.58);
		this.gButton.add(this.homeBtn);

		this.achievBtn = new clickBtn(this.centerX, this.gh * 0.9, 'achiev');
		this.achievBtn.scale.setTo(1.3);
		this.achievBtn.onClick.add(function(){
			this.changePage('cachievementPage');
		}, this.achievBtn);
		this.gButton.add(this.achievBtn);

		this.playBtn = new clickBtn(this.centerX, this.gh * 0.9, 'play-home');
		this.playBtn.onClick.add(function(){
			if(gameData.stage <= 0) return;
			cstage.stageMode();
			this.changePage('cgame');
		}, this.playBtn);
		this.gButton.add(this.playBtn);

		this.prevBtn = new clickBtn(this.playBtn.x - (this.playBtn.width * 1.2), this.playBtn.y, 'prev');
		this.gButton.add(this.prevBtn);

		this.nextBtn = new clickBtn(this.playBtn.x + (this.playBtn.width * 1.2), this.playBtn.y, 'next');
		this.gButton.add(this.nextBtn);

		this.prevBtn.visible = false;
		this.nextBtn.visible = false;
		this.playBtn.visible = false;

		this.pageNow = 0;

		this.gCont.add(this.gInGame);
		this.gCont.add(this.gButton);

		this.generateStage();

		this.onResize();
	},

	generateStage:function(){
		this.stages = [];
		for(var a = 0; a < 4; a++){ //baris
			for(var b = 0; b < 4; b++){ //kolom
				var x = (this.gw * 0.2) + (b * 130);
				var y = (this.gh * 0.35) + (a * 130);
				var id = this.stages.length + 1;
				var stage = new clickBtn(x, y, 'stage-locked', 'inGame');
				stage.id = id;
				stage.onClick.add(this.selectStage, this);
				this.gInGame.add(stage);

				stage.text = global.addText(-5, 5, id + '', 55, game_config.font2);
				stage.text.anchor.setTo(0.5, 1);
				stage.text.fill = this.stageTxt.fill;
				stage.text.stroke = this.stageTxt.stroke;
				stage.text.strokeThickness = 5;
				stage.addChild(stage.text);

				this.stages.push(stage);
			}
		}

		this.seePage();
	},

	seePage:function(){
		for(var a = 0; a < this.stages.length; a++){
			var id = (a + (this.pageNow * this.stages.length)) + 1;
			this.stages[a].id = id;
			if(id <= plRef.stageUnlock){
				this.stages[a].frameName = 'inGame/stage-on';
				this.stages[a].text.visible = true;
				this.stages[a].inputEnabled = true;
			} else {
				this.stages[a].frameName = 'inGame/stage-locked';
				this.stages[a].text.visible = false;
				this.stages[a].inputEnabled = false;
			}
		}
	},

	selectStage:function(obj){
		this.seePage();
		obj.frameName = 'inGame/stage-select';
		gameData.stage = obj.id;
		cstage.stageMode();
		obj.changePage('cgame');
	},

	update:function(){
		BaseState.prototype.update.call(this);		
		cnotification.checkNotif();
	},

}, BaseState);