
cmainmenu = function (game) {

};

cmainmenu.inherit({
	preload: function() {
		Asset.png("mainmenubg-01");
		Asset.png("mainmenufront-01");
		Asset.png("credits");

		BaseState.prototype.preload.call(this);
	},

	create: function () {
		BaseState.prototype.create.call(this);
		csound.play(0);
		Data.load();
		this.gInGame = game.add.group();
		this.gButton = game.add.group();
		this.burger = game.add.group();

		this.bg = game.add.sprite(this.gw * 0.5, this.gh * 0.5, 'mainmenubg-01', null);
		this.bg.anchor.setTo(0.5);
		this.bg.isStretch = true;
		this.gBG.add(this.bg);

		this.chara = global.addSprite(this.gw * 0.3, this.gh * 0.5, 'pageDecor/cust');
		this.chara.anchor.setTo(0.5);
		this.gInGame.add(this.chara);

		this.desk = game.add.sprite(this.gw * 0.5, this.gh * 0.5, 'mainmenufront-01', null);
		this.desk.anchor.setTo(0.5);
		this.desk.isStretch = true;
		this.gInGame.add(this.desk);

		this.tray = global.addSprite(this.gw * 0.5, this.gh * 0.87, 'inGame/nampan');
		this.tray.anchor.setTo(0.5);
		this.gInGame.add(this.tray);

		var recipe = [9, 1, 4, 0, 5, 2, 10, 3, 7, 6, 8];
		var _height = 0;
		for(var a = 0; a < 11; a++){
			var i = recipe[a];
			_height += gameData.ingHeight[i];
			var y = -1 * _height;
			var s = global.addSprite(0, y, 'preloader/ing' + i);
			s.anchor.setTo(0.5);
			this.burger.add(s);
		}

		this.burger.x = this.tray.x;
		this.burger.y = this.tray.y;
		this.burger.visible = false;

		this.soundBtn = new csound(game, this.gw * 0.9, this.gh * 0.05);
		this.soundBtn.anchor.setTo(0.5);
		this.gButton.add(this.soundBtn);		

		var tween = game.add.tween(this.chara);
		tween.from({x:-200}, 500, Phaser.Easing.Exponential.Out, true, 1500);
		tween.onComplete.add(this.tweenBurger, this);

		this.gCont.add(this.gInGame);
		this.gCont.add(this.burger);
		this.gCont.add(this.gButton);
		// csound.play(0);

		// Data.load();
		// this.tweenBurger();
		
		this.onResize();
	},

	tweenBurger:function(){
		this.burger.visible = true;
		var tween = null;
		var d = 0; 
		var fromY = -50 - this.burger.y;
		this.burger.forEach(function(obj){
			var delay = d * 10;
			tween = game.add.tween(obj);
			tween.from({y:fromY-(d*50)}, 1000, Phaser.Easing.Exponential.In, true, delay);
			d++;
		}, this);

		tween.onComplete.add(function(){
			var tween2 = null;
			var tween3 = null;
			var timing = 800;
			var d = 1;
			var toAngle = 0;
			var toX = 0;
			var toY = 0;			
			var toScale = 0;
			this.burger.forEach(function(obj){
				toAngle = obj.angle + (d * 2);
				toX = obj.x + (d * 15);
				toY = obj.y - (toX * 2);
				toScale = obj.scale.x + (d * 0.05);
				// obj.scale.setTo(obj.scale.x + (d * 0.02));
				tween3 = game.add.tween(obj.scale);
				tween3.to({x:toScale, y:toScale}, timing, Phaser.Easing.Exponential.Out, true);

				tween2 = game.add.tween(obj);
				tween2.to({x : toX, y : toY, angle : toAngle}, timing, Phaser.Easing.Exponential.Out, true);
				d++;
			}, this);

			this.tweenTitleButton();
		}, this);
	},

	tweenTitleButton:function(){
		this.btnGroup = game.add.group();
		this.gButton.add(this.btnGroup);

		this.titlePage = global.addSprite(this.gw * 0.5, this.gh * 0.16, 'preloader/title');
		this.titlePage.anchor.setTo(0.5);
		this.gButton.add(this.titlePage);

		var tween = game.add.tween(this.titlePage);
		tween.from({y: 0 - (this.titlePage.height * 0.5)}, 1000, Phaser.Easing.Elastic.Out, true, 300);

		this.btnPlay = global.addSprite(0, 0, 'global/playBig');
		this.btnPlay.anchor.setTo(0.5);
		this.btnPlay.inputEnabled = true;
		this.btnPlay.events.onInputDown.add(this.onClickDown, this);
		this.btnGroup.add(this.btnPlay);

		// this.btnMore = global.addSprite(this.btnPlay.x + (this.btnPlay.width * 1), this.btnPlay.y + (this.btnPlay.height * 0.6), 'global/moregames');
		// this.btnMore.anchor.setTo(0.5);
		// this.btnMore.inputEnabled = true;
		// this.btnMore.events.onInputDown.add(this.onMoreClick, this);
		// this.btnGroup.add(this.btnMore);

		this.btnCredit = global.addSprite(this.btnPlay.x - (this.btnPlay.width * 1), this.btnPlay.y + (this.btnPlay.height * 0.6), 'global/credit');
		this.btnCredit.anchor.setTo(0.5);
		this.btnCredit.canClick = true;
		this.btnCredit.inputEnabled = true;
		this.btnCredit.events.onInputDown.add(this.onCreditClick, this);
		this.btnGroup.add(this.btnCredit);

		this.btnGroup.x = this.gw * 0.5;
		this.btnGroup.y = this.gh * 0.78;
		
		var tween3 = game.add.tween(this.btnGroup);
		tween3.from({y:this.gh * 1.2}, 1000, Phaser.Easing.Elastic.Out, true, 800);

		var tween2 = game.add.tween(this.btnPlay.scale);
		tween2.to({x:this.btnPlay.scale.x + 0.1, y : this.btnPlay.scale.y + 0.1}, 500, Phaser.Easing.Linear.None, true, 0, -1, true);
	},

	onClickDown:function(obj, pointer){		
		csound.click();
		var scaleBig = game.add.tween(this.btnPlay.scale);
		scaleBig.to({x : 1.1, y : 1.1}, 50, Phaser.Easing.Elastic.In)
				.to({y : 0.3}, 50, Phaser.Easing.Elastic.In)
				.to({x : 0.8, y : 0.8}, 50, Phaser.Easing.Elastic.In)
				.to({x : 0.8, y : 0.8}, 50, Phaser.Easing.Elastic.In);

		scaleBig.onComplete.add(function(){
			if(plRef.attempPlay < 2) {
				ctransition.close('cgame');
			} else {
				ctransition.close('chome');
			}
		}, this);

		scaleBig.start();
	},

	onMoreClick:function(obj, pointer){
		csound.click();
		var scaleBig = game.add.tween(this.btnMore.scale);
		scaleBig.to({x : 1.1, y : 1.1}, 50, Phaser.Easing.Elastic.In)
				.to({y : 0.3}, 50, Phaser.Easing.Elastic.In)
				.to({x : 1, y : 1}, 50, Phaser.Easing.Elastic.In)
				.to({x : 1, y : 1}, 50, Phaser.Easing.Elastic.In);

		scaleBig.onComplete.add(function(){
			
		}, this);

		scaleBig.start();
	},

	onCreditClick:function(obj, pointer){
		if (!this.btnCredit.canClick)
			return;

		this.btnCredit.canClick = false;
		csound.click();
		var scaleBig = game.add.tween(this.btnCredit.scale);
		scaleBig.to({x : 1.1, y : 1.1}, 50, Phaser.Easing.Elastic.In)
				.to({y : 0.3}, 50, Phaser.Easing.Elastic.In)
				.to({x : 1, y : 1}, 50, Phaser.Easing.Elastic.In)
				.to({x : 1, y : 1}, 50, Phaser.Easing.Elastic.In);

		scaleBig.onComplete.add(function(){
			var creditImg = game.add.sprite(this.gw / 2, this.gh / 2, "credits");
			creditImg.anchor.setTo(0.5);
			creditImg.scale.setTo(1.2);
			this.gCont.add(creditImg);

			var creditTween = game.add.tween(creditImg.scale);
			creditTween.from({x: 0, y: 0}, 300, Phaser.Easing.Sinusoidal.Out, true, 0);
			creditTween.onComplete.add(function() {
				var creditTween2 = game.add.tween(creditImg.scale);
				creditTween2.to({x: 1, y: 1}, 300, Phaser.Easing.Sinusoidal.In, true, 0);

				creditTween2.onComplete.add(function() {
					creditImg.inputEnabled = true;
					creditImg.events.onInputDown.add(this.closeCredit, this);

				}, this);
			}, this);
		}, this);

		scaleBig.start();
	},

	closeCredit:function(obj, pointer)
	{
		var closeTween = game.add.tween(obj.scale);
		closeTween.to({x: 1.2, y: 1.2}, 300, Phaser.Easing.Sinusoidal.Out, true, 0);
		closeTween.onComplete.add(function() {
			var closeTween2 = game.add.tween(obj.scale);
			closeTween2.to({x: 0, y: 0}, 300, Phaser.Easing.Sinusoidal.In, true, true, 0);

			closeTween2.onComplete.add(function() {
				this.btnCredit.canClick = true;
				obj.destroy();
			}, this);
		}, this);
	},

	update: function () {
		BaseState.prototype.update.call(this);
		this.burger.x = this.tray.x;
		this.burger.y = this.tray.y;
	},

}, BaseState);
