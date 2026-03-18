cpause = function(x, y){
	Phaser.Group.call(this, game);
	this.pauseBtn = new clickBtn(x, y, 'pause');
	this.pauseBtn.onClick.add(this.onClickEvent, this);
	this.add(this.pauseBtn);

	this.isPaused = false;
	this.isClicked = false;

	this.gw = curState().gw;
	this.gh = curState().gh;
	this.gPause = game.add.group();
	this.add(this.gPause);

	this.gPause.x = this.gw * 0.5;
	this.gPause.y = this.gh * 0.5;

	this.pauseBg();

	this.gPause.visible = false;

	game.input.onDown.add(this.onClick, this);
};

cpause.inherit({

	onClickEvent:function(obj,pointer){
		if(this.isClicked) return;
		// csound.click();
		this.isClicked = true;

		if(!this.isPaused){
			this.pausing();
		}
	},

	pausing:function(){
		game.paused = true;
		this.isPaused = true;
		this.gPause.visible = true;
		this.pauseBtn.inputEnabled = false;
	},

	unpausing:function(){		
		this.isClicked = false;
		// if(curState().tutor) return;
		// game.time.events.resume();
		// game.paused = false;
		this.isPaused = false;
		this.pauseBtn.inputEnabled = true;
		this.gPause.visible = false;
	},

	pauseBg:function(){
		this.pauseBg = game.add.sprite(0, 0, 'black_screen', null);
		this.pauseBg.anchor.setTo(0.5);
		this.gPause.add(this.pauseBg);

		this.pauseBox = global.addSprite(0, (this.pauseBg.height * 0.01), 'inGame/box_pause');
		this.pauseBox.anchor.setTo(0.5);
		this.gPause.add(this.pauseBox);

		this.titleBox = global.addSprite(0, this.pauseBox.y - (this.pauseBox.height * 0.25), 'inGame/woodRoped');
		this.titleBox.anchor.setTo(0.5, 1);
		this.gPause.add(this.titleBox);

		this.title = global.addText(0, this.titleBox.y - (this.titleBox.height * 0.09), _t('paused'), 60, game_config.font1);
		this.title.anchor.setTo(0.5);
		this.title.fill = 'white';
		this.title.setShadow(5, 5, 'rgba(150, 67, 37, 0.5)');
		this.gPause.add(this.title);

		this.playBtn = new clickBtn(0, this.pauseBox.y + 15, 'btn_play');
		this.playBtn.onClick.add(this.unpausing, this);
		this.gPause.add(this.playBtn);

		this.replayBtn = new clickBtn(this.playBtn.x + (this.playBtn.width * 1.1), this.playBtn.y, 'btn_retry');
		this.replayBtn.onClick.add(function(){			
			this.changePage(curState().key);
		}, this.replayBtn);
		this.gPause.add(this.replayBtn);

		this.homeBtn = new clickBtn(this.playBtn.x - (this.playBtn.width * 1.1), this.playBtn.y, 'btn_stageselect');
		this.homeBtn.onClick.add(function(){
			// cstage.stageMode();
			this.changePage('cstage');
		}, this.homeBtn);
		this.gPause.add(this.homeBtn);
	},

	onClick:function(event){
		if(!game.paused) return;
		// trace(event.x, event.y, event.worldX, event.worldY);

		var pos = new Phaser.Point(event.x, event.y);
		// pos = this.toLocal(pos);


		if (Phaser.Rectangle.contains(this.homeBtn.getBounds(), event.x, event.y)) {
			game.paused = false;
			this.homeBtn.onClickEvents();
		}

		if (Phaser.Rectangle.contains(this.playBtn.getBounds(), event.x, event.y)) {
			// trace(this.playBtn.isClicked);
			game.paused = false;
			this.playBtn.onClickEvents();
		}

		if(Phaser.Rectangle.contains(this.replayBtn.getBounds(), event.x, event.y)){
			game.paused = false;
			this.replayBtn.onClickEvents();
		}
	},

	update:function(){

	},
}, Phaser.Group);