cachievementPage = function(game){

};

cachievementPage.inherit({
	preload:function(){
		BaseState.prototype.preload.call(this);
		Asset.png('bg_playscreen');
	},

	init:function(){
		BaseState.prototype.init.call(this);
	},

	create:function(){
		BaseState.prototype.create.call(this);
		// csound.play(0);
		this.gInGame = game.add.group();
		this.gButton = game.add.group();

		this.pageNow = 0;

		this.bg = game.add.sprite(this.gw * 0.5, this.gh * 0.5, 'bg_playscreen', null);
		this.bg.anchor.setTo(0.5);
		this.gBG.add(this.bg);

		this.header = global.addSprite(this.centerX, 0, 'inGame/header_single');
		this.header.anchor.setTo(0.5, 0);
		this.gButton.add(this.header);

		this.soundBtn = new soundBtn(this.gw * 0.95, this.gh * 0.049);
		this.gButton.add(this.soundBtn);

		this.sfxBtn = new sfxBtn(this.soundBtn.x - (this.soundBtn.width * 1.2), this.soundBtn.y);
		this.gButton.add(this.sfxBtn);

		this.coinIcon = global.addSprite(this.header.x - (this.header.width * 0.36), this.sfxBtn.y, 'inGame/coins');
		this.coinIcon.anchor.setTo(0.5);
		this.gButton.add(this.coinIcon);

		this.coinBox = global.addSprite(this.coinIcon.x + (this.coinIcon.width * 0.7), this.coinIcon.y, 'inGame/coins_box');
		this.coinBox.anchor.setTo(0, 0.5);
		this.gButton.add(this.coinBox);

		this.showCoin = global.addText(this.coinIcon.x + (this.coinIcon.width * 1.1), this.coinBox.y + 3, gameData.writeScore(plRef.achievProgress[8]), 20, game_config.font1);
		this.showCoin.anchor.setTo(0, 0.5);
		this.showCoin.fill = 'white';
		this.gButton.add(this.showCoin);

		this.titleBox = global.addSprite(this.centerX, this.gh * 0.23, 'inGame/woodRoped');
		this.titleBox.anchor.setTo(0.5, 1);
		this.gInGame.add(this.titleBox);

		this.title = global.addText(0, -(this.titleBox.height * 0.09), _t('achievement'), 50, game_config.font1);
		this.title.anchor.setTo(0.5);
		this.title.fill = 'white';
		this.title.setShadow(5, 5, 'rgba(150, 67, 37, 0.5)');
		this.titleBox.addChild(this.title);

		this.gContent = game.add.group();
		this.gContent.position.setTo(this.centerX, this.gh * 0.6);
		this.gInGame.add(this.gContent);

		this.stageBox = global.addSprite(0, 0, 'inGame/big_box_stage');
		this.stageBox.anchor.setTo(0.5);
		this.gContent.add(this.stageBox);

		this.generateBoxes();

		this.pages = [];
		for(var a = 0; a < 2; a++){
			var page = global.addSprite(0, 0, 'inGame/tab_inactive');
			page.anchor.setTo(0.5);

			var x =(-(page.width * 0.65)) + (a * page.width * 1.3);
			var y = this.stageBox.height * 0.438;
			page.position.setTo(x, y);

			this.gContent.add(page);
			this.pages.push(page);
		}

		this.prevBtn = new clickBtn(this.pages[0].x - (this.pages[0].width * 1.8), this.pages[0].y, 'nav_left');
		this.prevBtn.onClick.add(function(){
			this.pageNow--;
			this.setPage();
		}, this);
		this.gContent.add(this.prevBtn);

		var lastPage = this.pages.length - 1;
		this.nextBtn = new clickBtn(this.pages[lastPage].x + (this.pages[lastPage].width * 1.8), this.prevBtn.y, 'nav_right');
		this.nextBtn.onClick.add(function(){
			this.pageNow++;
			this.setPage();
		}, this);
		this.gContent.add(this.nextBtn);

		this.closeBtn = new clickBtn(this.titleBox.x + (this.titleBox.width * 0.65), this.titleBox.y + this.title.y, 'exit');
		this.closeBtn.onClick.add(function(obj){
			obj.changePage('cstage');
		}, this);
		this.gButton.add(this.closeBtn);

		this.pageNow = 0;

		this.gCont.add(this.gInGame);
		this.gCont.add(this.gButton);

		this.onResize();

		this.tweenIn();
		this.setPage();
	},
	
	generateBoxes:function(){
		this.boxes = [];
		for(var a = 0; a < 7; a++){
			var id = this.boxes.length;
			var box = new achievementBox(0, 0, id);
			this.gContent.add(box);

			var x = 0;
			var y = (-(this.stageBox.height * 0.5) + (box.height * 0.85)) + (a * box.height * 1.1);
			box.position.setTo(x, y);
			this.boxes.push(box);
		}
	},

	setPage:function(){
		for(var a = 0; a < this.pages.length; a++){
			this.pages[a].frameName = 'inGame/tab_inactive';
			if(a == this.pageNow) this.pages[a].frameName = 'inGame/tab_active';
		}

		for(var a = 0; a < this.boxes.length; a++){
			this.boxes[a].visible = false;
			var id = a + (this.pageNow * this.boxes.length);
			if(id < plRef.achievProgress.length){
				this.boxes[a].visible = true;
				this.boxes[a].id = id;
				this.boxes[a].showAchievement();
			}
		}
	},

	tweenIn:function(){
		this.closeBtn.visible = false;

		var defX = this.titleBox.x;
		var defY = this.titleBox.y;
		this.titleBox.y = -10;

		var property = {x:[defX - 100, defX + 50, defX - 25, defX], y:[defY+30, defY+25, defY+10, defY], angle:[30, -10, 5, 0]}
		var tweenTitle = game.add.tween(this.titleBox);
		tweenTitle.to(property, 1000, Phaser.Easing.Linear.None, true);
		tweenTitle.onComplete.add(function(){
			this.closeBtn.visible = true;
			tweenClose.start();
		}, this);

		var tweenBox = game.add.tween(this.gContent);
		tweenBox.from({y:this.gh + (this.gContent.height * 0.51)}, 1000, Phaser.Easing.Circular.Out, true);

		var tweenClose = game.add.tween(this.closeBtn.scale);
		tweenClose.from({x:0, y:0}, 300, Phaser.Easing.Elastic.Out, false);
	},

	update:function(){
		BaseState.prototype.update.call(this);
		cnotification.checkNotif();
		if(this.pageNow <= 0){
			this.prevBtn.visible = false;
		} else {
			this.prevBtn.visible = true;
		}

		var tempTotal = this.boxes.length + (this.pageNow * this.boxes.length);
		if(tempTotal < plRef.achievProgress.length){
			this.nextBtn.visible = true;
		} else {
			this.nextBtn.visible = false;
		}

		this.showCoin.setText(gameData.writeScore(plRef.achievProgress[8]));
	},
}, BaseState);