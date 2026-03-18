
cmainmenu = function (game) {

};

cmainmenu.inherit({
	preload: function() {
		Asset.png("cover");
		Asset.png("credits");

		// Asset.png('credits');
		Asset.atlaspng("inGame");
		Asset.spine('chara');
		BaseState.prototype.preload.call(this);
	},

	create: function () {
		BaseState.prototype.create.call(this);		
        Data.load();
		// trace("mainmenu create");
		// clink.show();

		this.gInGame = game.add.group();
		this.gButton = game.add.group();

		this.bg = game.add.sprite(this.gw*0.5,this.gh*0.5,'cover', null);
		this.bg.isStretch = false;
		this.bg.anchor.setTo(0.5);
		this.gBG.add(this.bg);

		chara.create(this.gw * 0.23, this.gh * 0.95);
		chara.hoho.scale.setTo(-1.2, 1.2);
		chara.hoho._animSpeed = 1.5;
		chara.hoho.play('happy', true);
		this.gInGame.add(chara.hoho);


		this.table = global.addSprite(this.gw*0.5, this.gh, 'inGame/tableMm');
		this.table.anchor.setTo(0.5);
		// this.table.scale.setTo(0.8);
		this.gInGame.add(this.table);

		this.cupCake = global.addSprite(this.table.x + (this.table.width * 0.1), this.table.y - (this.table.height * 0.67), 'inGame/bigCake');
		this.cupCake.anchor.setTo(0.5);
		this.gInGame.add(this.cupCake);

		// this.credit = game.add.sprite(this.gw*0.5, this.gh*0.5, 'credits', null);
		// this.credit.isStretch = false;
		// this.credit.visible = false;
		// this.credit.anchor.setTo(0.5);	

		this.btnSound = new csound(game, this.gw * 0.9, this.gh * 0.05);
		this.btnSound.anchor.setTo(0.5);
		this.btnSound.scale.setTo(1.2);
		this.gButton.add(this.btnSound);

		this.judul = global.addSprite(this.centerX, this.gh*0.3,'global/titleGame');
		this.judul.anchor.setTo(0.5);
		this.judul.scale.setTo(1.2);
		this.gInGame.add(this.judul);

		this.btnCredit = global.addButton(this.gw * 0.18, this.gh * 0.83, 'global/credit', this.onClick, this);
		this.btnCredit.anchor.setTo(0.5);
		this.btnCredit.inputEnabled = true;
		this.btnCredit.events.onInputDown.add(this.onCreditClick, this);
		this.gButton.add(this.btnCredit);

		this.btnPlay = global.addButton(this.centerX, this.gh * 0.75, 'global/play-mm', this.onClick, this);
		this.btnPlay.anchor.setTo(0.5);
		this.btnPlay.inputEnabled = true;
		this.btnPlay.events.onInputDown.add(this.onClickDown, this);
		this.gButton.add(this.btnPlay);

		var animated = game.add.tween(this.btnPlay.scale);
		animated.to({x: 0.9, y:0.9}, 500, Phaser.Easing.Linear.None);
		animated.onComplete.add(function(){
			var animateBack = game.add.tween(this.btnPlay.scale);
			animateBack.to({x: 0.8, y:0.8}, 500, Phaser.Easing.Linear.None);
			animateBack.onComplete.add(function(){
				animated.start();
			}, this);
			animateBack.start();
		}, this);
		animated.start();

		// this.btnMore = global.addButton(this.gw * 0.81, this.gh * 0.83, 'global/more', this.onClick, this);
		// this.btnMore.anchor.setTo(0.5);
		// this.btnMore.inputEnabled = true;
		// this.btnMore.events.onInputDown.add(this.onMoreClick, this);
		// this.gButton.add(this.btnMore);

		this.gCont.add(this.gInGame);
		this.gCont.add(this.gButton);
		// this.gCont.add(this.credit);

		var titleAppear = game.add.tween(this.judul);
		titleAppear.from({y: -1 * (this.gh * 0.3)}, 500, Phaser.Easing.Elastic.InOut);
		titleAppear.start();

		var btnPlayAppear = game.add.tween(this.btnPlay);
		btnPlayAppear.from({y: this.gh +(this.gh * 0.3)}, 500, Phaser.Easing.Elastic.InOut);
		btnPlayAppear.start();

		var btnCreditAppear = game.add.tween(this.btnCredit);
		btnCreditAppear.from({y:this.gh +(this.gh * 0.3)}, 500, Phaser.Easing.Elastic.InOut);
		btnCreditAppear.start();

		// var btnMoreAppear = game.add.tween(this.btnMore);
		// btnMoreAppear.from({y:this.gh +(this.gh * 0.3)}, 500, Phaser.Easing.Elastic.InOut);
		// btnMoreAppear.start();

		this.onResize();
	},

	onClickDown:function(obj, pointer){		
		var scaleBig = game.add.tween(this.btnPlay.scale);
		scaleBig.to({x : 1.1, y : 1.1}, 50, Phaser.Easing.Elastic.In)
				.to({y : 0.3}, 50, Phaser.Easing.Elastic.In)
				.to({x : 0.8, y : 0.8}, 50, Phaser.Easing.Elastic.In)
				.to({x : 0.8, y : 0.8}, 50, Phaser.Easing.Elastic.In);

		scaleBig.onComplete.add(function(){
			if(plRef.attempPlay <= 4) {
				plRef.attempPlay = 1;
				ctransition.close('cgame');
			} else {
				ctransition.close('cstage');
			}
		}, this);

		scaleBig.start();
	},

	onMoreClick:function(obj, pointer){
		// var scaleBig = game.add.tween(this.btnMore.scale);
		// scaleBig.to({x : 1.1, y : 1.1}, 50, Phaser.Easing.Elastic.In)
		// 		.to({y : 0.3}, 50, Phaser.Easing.Elastic.In)
		// 		.to({x : 1, y : 1}, 50, Phaser.Easing.Elastic.In)
		// 		.to({x : 1, y : 1}, 50, Phaser.Easing.Elastic.In);

		// scaleBig.onComplete.add(function(){
			
		// }, this);

		// scaleBig.start();
	},

	onCreditClick:function(obj, pointer){
		var scaleBig = game.add.tween(this.btnCredit.scale);
		scaleBig.to({x : 1.1, y : 1.1}, 50, Phaser.Easing.Elastic.In)
				.to({y : 0.3}, 50, Phaser.Easing.Elastic.In)
				.to({x : 1, y : 1}, 50, Phaser.Easing.Elastic.In)
				.to({x : 1, y : 1}, 50, Phaser.Easing.Elastic.In);

		scaleBig.onComplete.add(function(){
			// this.credit.visible = true;
			this.btnPlay.inputEnabled = false;
			// this.btnMore.inputEnabled = false;
			this.btnCredit.inputEnabled = false;

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
					creditImg.events.onInputDown.add(this.closeCredit, true);
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
			closeTween2.to({x: 0, y: 0}, 300, Phaser.Easing.Sinusoidal.In, true, 0);

			closeTween2.onComplete.add(function() {
				curState().btnPlay.inputEnabled = true;
				curState().btnCredit.inputEnabled = true;
				obj.destroy();

			}, this);
		}, this);
	},

	update: function () {
		BaseState.prototype.update.call(this);
		plRef.totalTimePlay += new Date().getTime();
		// clink.follow(this.btnMore);
		// if(this.credit.visible){
		// 	if(game.input.activePointer.isDown){
		// 		this.credit.visible = false;
		// 		this.btnPlay.inputEnabled = true;
		// 		this.btnCredit.inputEnabled = true;
		// 		this.btnMore.inputEnabled = true;
		// 	}
		// }
	},

	shutdown: function(){
		clink.hide();
	},

}, BaseState);
