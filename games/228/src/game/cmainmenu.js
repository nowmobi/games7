cmainmenu = function (game) {

};

cmainmenu.inherit({
	preload: function() {
		BaseState.prototype.preload.call(this);
		Asset.png("bg_cover");
		Asset.atlaspng('shines');
	},

	init:function(){
		BaseState.prototype.init.call(this);
	},

	create: function () {
		BaseState.prototype.create.call(this);		
		csound.play(0);
		Data.load();
		this.gInGame = game.add.group();
		this.gButton = game.add.group();

		this.bg = game.add.sprite(this.gw * 0.5, this.gh * 0.5, 'bg_cover', null);
		this.bg.anchor.setTo(0.5);
		this.gBG.add(this.bg);

		this.soundBtn = new soundBtn(this.gw * 0.95, this.gh * 0.03);
		this.gButton.add(this.soundBtn);

		this.sfxBtn = new sfxBtn(this.soundBtn.x - (this.soundBtn.width * 1.2), this.soundBtn.y);
		this.gButton.add(this.sfxBtn);

		this.creditBtn = new creditBtn(this.gw * 0.08, this.gh * 0.05, 'credits');
		this.gButton.add(this.creditBtn);

		this.player = global.addSprite(this.centerX, this.gh * 0.92, 'inGame/player');
		this.player.anchor.setTo(0.5, 1);
		this.gInGame.add(this.player);

		this.title = global.addSprite(this.centerX, this.gh * 0.2, 'inGame/title');
		this.title.anchor.setTo(0.5);
		this.gInGame.add(this.title);

		this.salad = global.addSprite(this.title.x - (this.title.width * 0.15), this.title.y + (this.title.height * 0.38), 'inGame/salad');
		this.salad.anchor.setTo(0.5);
		this.gInGame.add(this.salad);

		this.sushi = global.addSprite(this.title.x + (this.title.width * 0.18), this.salad.y, 'inGame/sushi');
		this.sushi.anchor.setTo(0.5);
		this.gInGame.add(this.sushi);

		this.ramen = global.addSprite(this.title.x + 20, this.title.y + (this.title.height * 0.4), 'inGame/ramen');
		this.ramen.anchor.setTo(0.5);
		this.gInGame.add(this.ramen);

		this.gBtn = game.add.group();
		this.gBtn.position.setTo(this.centerX, this.player.y - (this.player.height * 0.1));
		this.gButton.add(this.gBtn);

		this.playBtn = new clickBtn(0, 0, 'play');
		this.playBtn.onClick.add(function(obj){
			if(plRef.stageOpened.length == 0){
				obj.changePage('cstory');
			} else {
				obj.changePage('cstage');				
			}
		}, this);
		this.gBtn.add(this.playBtn);

		// this.moreBtn = new clickBtn(this.playBtn.x - (this.playBtn.width * 0.9), this.playBtn.y + (this.playBtn.width * 0.3), 'more games');
		// this.moreBtn.onClick.add(function(obj){
		// 	obj.moreGame();
		// }, this);
		// this.gBtn.add(this.moreBtn);

		this.achievBtn = new clickBtn(this.playBtn.x + (this.playBtn.width * 0.9), this.playBtn.y + (this.playBtn.width * 0.3), 'achievement');
		this.achievBtn.onClick.add(function(obj){
			obj.changePage('cachievementPage');
		}, this);
		this.gBtn.add(this.achievBtn);

		this.glitters = [];
		for(var a = 0; a < 3; a++){
			var x;
			var y;
			var dur;
			if(a == 0){
				x = -this.playBtn.width * 0.25;
				y = this.playBtn.height * 0.35;
				dur = 10;
			} else if(a == 1){
				x = this.playBtn.width * 0.41;
				y = this.playBtn.height * 0.13;
				dur = 15;
			} else {
				x = -this.playBtn.width * 0.15;
				y = -this.playBtn.height * 0.38;
				dur = 20;
			}

			var glitter = global.addSprite(x, y, 'shine/0000');
			glitter.anchor.setTo(0.5);
			glitter.scale.setTo(1.2);
			this.playBtn.addChild(glitter);

			var anim = glitter.animations.add('glow', Phaser.Animation.generateFrameNames('shine/00', 0, 14, '', 2), dur, true);
			glitter.animations.play('glow');

			this.glitters.push(glitter);
		}

		this.gCont.add(this.gInGame);
		this.gCont.add(this.gButton);	

		this.onResize();

		this.tweenObjects();
	},

	tweenObjects:function(){
		this.gBtn.visible = false;
		this.title.visible = false;
		this.sushi.visible = false;
		this.ramen.visible = false;
		this.salad.visible = false;

		var defScaleX = this.player.scale.x;
		var defScaleY = this.player.scale.y;
		var property = {x:[defScaleX, defScaleX - 0.1, defScaleX + 0.2, defScaleX], y:[defScaleY, defScaleY + 0.1, defScaleY - 0.2, defScaleY]}
		var timing = 700;
		var easing = Phaser.Easing.Linear.None;

		this.player.scale.y = 0;
		var tweenPlayer = game.add.tween(this.player.scale);
		tweenPlayer.to(property, timing, easing, true);
		tweenPlayer.onComplete.add(function(){
			tweenTitle.start();
		}, this);

		easing = Phaser.Easing.Elastic.Out;
		timing = 500;
		var tweenTitle = game.add.tween(this.title.scale);
		tweenTitle.onStart.add(function(){
			this.title.visible = true;
		}, this);
		tweenTitle.from({y:0}, timing, easing, false);
		tweenTitle.onComplete.add(function(){
			tweenSalad.start();
		}, this);

		timing = 200;
		var tweenSalad = game.add.tween(this.salad.scale);
		tweenSalad.onStart.add(function(){
			csound.popup();
			this.salad.visible = true;
		}, this);
		tweenSalad.from({x:0, y:0}, timing, easing, false);
		tweenSalad.onComplete.add(function(){
			tweenSushi.start();
		}, this);

		var tweenSushi = game.add.tween(this.sushi.scale);
		tweenSushi.onStart.add(function(){
			csound.popup();
			this.sushi.visible = true;
		}, this);
		tweenSushi.from({x:0, y:0}, timing, easing, false);
		tweenSushi.onComplete.add(function(){
			tweenRamen.start();
		}, this);

		var tweenRamen = game.add.tween(this.ramen.scale);
		tweenRamen.onStart.add(function(){
			csound.popup();
			this.ramen.visible = true;
		}, this);
		tweenRamen.from({x:0, y:0}, timing, easing, false);	
		tweenRamen.onComplete.add(function(){
			tweenGBtn.start();
		}, this);

		timing = 500;
		easing = Phaser.Easing.Circular.In;
		var tweenGBtn = game.add.tween(this.gBtn.scale);
		tweenGBtn.onStart.add(function(){
			this.gBtn.visible = true;
		}, this);
		tweenGBtn.from({x:0, y:0}, timing, easing, false);		
		tweenGBtn.onComplete.add(function(){
			csound.shop_open();
		}, this);			
	},

	update: function () {
		BaseState.prototype.update.call(this);		
		// this.gInGame.sort('y', Phaser.Group.SORT_ASCENDING);
	},

}, BaseState);
