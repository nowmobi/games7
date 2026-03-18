
ccookbook = function (game) {
};

ccookbook.prototype = {
	preload: function() {
		Asset.png("cookbook_bg");
		Asset.png("cookbook_buku_2");
		Asset.atlaspng("cookbook_sprite");
		Asset.atlaspng("global_sprite");
		Asset.atlaspng('cookbook_pizza_sprite');
		// game.load.audio('star', 'assets/audio/star-beep.mp3', 'assets/audio/star-beep.ogg');
		Asset.audio('star', 'star-beep');

		Asset.bitmapFont('merkin_orange');
		Asset.bitmapFont('paneuropa_bold_green');
	},

	create: function()
	{
		this.audioStar = game.add.audio('star');
		this.maxList = 0;
		this.wGeser = null;	// untuk lebar geser grup
		this.idxGeser = 1;
		this.flagGeser = false;

		this.gw = 640;
		this.gh = 1020;

		var bg = this.add.sprite(0, 0, "cookbook_bg"); this.bg = bg;

		var title = global.addSprite(this.gw*0.5, this.gh*0.07, "cookbook_title");
		title.scale.setTo(0.9, 0.9);
		title.anchor.setTo(0.5, 0);

		var gTitle = game.add.group();
		gTitle.pivot.setTo(title.x, title.y);
		gTitle.x = title.x;
		gTitle.y = title.y;
		gTitle.add(title); 

		var bmpTitle = game.add.bitmapText(title.x, title.y + title.height*0.5, 'merkin_orange', global._t('cookbook_title'), 56);
		bmpTitle.x -= bmpTitle.textWidth*0.5;
		bmpTitle.y -= bmpTitle.textHeight*0.5;
		gTitle.add(bmpTitle);

		if(datagames.bgm)
			this.btnSound = global.addSprite(this.gw*0.85, this.gh*0.15, 'global_btn_music_on');
		else
			this.btnSound = global.addSprite(this.gw*0.85, this.gh*0.15, 'global_btn_music_off');
		this.btnSound.scale.setTo(0.8, 0.8);
		this.btnSound.inputEnabled = true;
		this.btnSound.animations.add('bgmOff', [0]);
		this.btnSound.animations.add('bgmOn', [1]);
		this.btnSound.events.onInputDown.add(function() {
			global.clickbtn();
			if(datagames.bgm)
			{
				datagames.bgm = false;
				this.btnSound.animations.play('bgmOff');
				global.bgmpause();
			}
			else
			{
				datagames.bgm = true;
				this.btnSound.animations.play('bgmOn');
				global.bgmresume();
			}
		}, this);

		// var book = global.addSprite(0, this.gh*0.2, "cookbook_buku");
		var book = this.add.sprite(0, this.gh*0.2, "cookbook_buku_2");
		book.scale.setTo(0.85, 0.9);
		book.x = -book.width;

		var gKiriBg = game.add.group();
		gKiriBg.add(book);

		var gKiri = game.add.group();

		this.gPizza = game.add.group();
		gKiri.add(this.gPizza)
		this.gNav = game.add.group();
		gKiri.add(this.gNav)

		// this.gTutor = game.add.group();

		var gCont = game.add.group();
		// gCont.add(title);
		gCont.add(gTitle);
		// gCont.add(this.btnSound);
		// gCont.add(this.gTutor);
		
		this.adonan = global.addSprite(this.gw*0.52, book.y + 200, "cookbook_btn_adonan");
		this.adonan.scale.setTo(0.9, 0.9);
		this.adonan.anchor.setTo(0.5, 0);

		var bmpAdonan = game.add.bitmapText(this.adonan.x, this.adonan.y + this.adonan.height*0.95, 'paneuropa_bold_green', global._t("name_0"), 48);
		bmpAdonan.x -= bmpAdonan.textWidth*0.5;
		bmpAdonan.height *= 1.5;
		this.gPizza.add(this.adonan);
		this.gPizza.add(bmpAdonan);
		this.adonan.inputEnabled = true;
		this.adonan.events.onInputDown.add(function(obj) {
			if(this.idxGeser > 1)
				return;
			// global.clickbtn()
			// datagames.jnsMasak = 0;
			// this.gCont.destroy();
			// this.gCont = null;
			// this.state.start('Preloader', true, false, 'cgame', 0);
			// datagames.jnsMasak = 0;
			this.toMasak();
		}, this);

		if(datagames.flagDough) {
			
			var posX = this.adonan.x + this.adonan.width;
			
			var masking = this.add.graphics();
			masking.beginFill(0x000000);
			masking.drawRect(0, 0, this.adonan.width, this.adonan.height + 200);
			masking.x = this.adonan.x - this.adonan.width*0.5
			masking.y = this.adonan.y
			gKiri.add(masking)

			
			for(var i=0;i<datagames.awal.length;i++) {
				if(datagames.awal[i] == 1) {
					// this.maxList++;
					// i = datagames.awal.length;
					if(i==datagames.awal.length-1)
						this.maxList = i;
					else
						this.maxList = i+1;
				}
			}

			// if(this.maxList < 5)
			// 	this.maxList++;

			// this.maxList = 5;	// hack
			// for(var i=1;i<=5;i++) {
			var sizeBmp = 48;
			
			for(var i=1;i<=this.maxList;i++) {
				// console.trace(i);
				this['pizza_'+i] = global.addSprite(posX, this.adonan.y, "cookbook_pizza_"+i);
				this['pizza_'+i].scale.setTo(0.9, 0.9);
				this['pizza_'+i].anchor.setTo(0.5, 0);
				this['pizza_'+i].idx = i;
				posX = this['pizza_'+i].x + this['pizza_'+i].width;
				this.gPizza.add(this['pizza_'+i]);

				if(i==5)
					sizeBmp = 36;

				var bmpPizza = game.add.bitmapText(this['pizza_'+i].x, this['pizza_'+i].y + this['pizza_'+i].height*0.95, 'paneuropa_bold_green', global._t("name_"+i), sizeBmp);
				bmpPizza.x -= bmpPizza.textWidth*0.5;
				bmpPizza.height *= 1.5;
				this.gPizza.add(bmpPizza);

				if(datagames.awal[i] == 1) {
					var posBin = [
						this['pizza_'+i].x-this.gw*0.13, this['pizza_'+i].x, this['pizza_'+i].x+this.gw*0.13
					];
					for(var j=1;j<=3;j++) {
						if(j <= datagames.score[i]) {
							this['bintang_'+i+'_'+j] = global.addSprite(posBin[j-1], this['pizza_'+i].y+this['pizza_'+i].height*1.32, "cookbook_bintang_on");
							// this['bintang_'+i+'_'+j] = global.addSprite(100, 100, "cookbook_bintang_on");
						}
						else {
							this['bintang_'+i+'_'+j] = global.addSprite(posBin[j-1], this['pizza_'+i].y+this['pizza_'+i].height*1.32, "cookbook_bintang_off");
							// this['bintang_'+i+'_'+j] = global.addSprite(100, 100, "cookbook_bintang_off");
						}
						// // this['bintang_'+i].scale.setTo(0.6, 0.6);
						this['bintang_'+i+'_'+j].anchor.setTo(0.5, 0.5);
						if(i==datagames.lastPlay)
							this['bintang_'+i+'_'+j].scale.setTo(0, 0);
						else
							this['bintang_'+i+'_'+j].scale.setTo(0.7, 0.7);
						this.gPizza.add(this['bintang_'+i+'_'+j]);
					}
				}

				this['pizza_'+i].inputEnabled = true;
				// this['pizza_'+i].events.onInputDown.add(function(obj) {
				// 	if(this.idxGeser-1 != obj.idx)
				// 		return;
				// 	global.clickbtn();
				// 	datagames.jnsPizza = this.idxGeser - 1;
				// 	datagames.jnsMasak = 1;
				// 	this.state.start('Preloader', true, false, 'cgame', 1);
				// }, this);
				this['pizza_'+i].events.onInputDown.add(this.toMasak, this)
			}
			this.gPizza.mask = masking;

			this.btnLeft = global.addSprite(this.adonan.x - this.gw*0.35, this.gh*0.55, "cookbook_btn_next");
			this.btnLeft.scale.setTo(-0.9, 0.9);
			this.btnLeft.anchor.setTo(0.5, 0.5);
			if(datagames.lastPlay == 0)
				this.btnLeft.visible = false
			this.gNav.add(this.btnLeft)

			this.btnRight = global.addSprite(this.adonan.x + this.gw*0.35, this.btnLeft.y, "cookbook_btn_next");
			this.btnRight.scale.setTo(0.9, 0.9);
			this.btnRight.anchor.setTo(0.5, 0.5);
			this.gNav.add(this.btnRight)

			this.btnLeft.inputEnabled = true;
			this.btnLeft.events.onInputDown.add(this.onNavListDown, this);
			this.btnRight.inputEnabled = true;
			this.btnRight.events.onInputDown.add(this.onNavListDown, this);

			var posBin = [
				this.adonan.x-this.gw*0.13, this.adonan.x, this.adonan.x+this.gw*0.13
			];

			for(var i=1;i<=3;i++) {
				// if(i <= datagames.doughScore) {
				if(i <= datagames.score[0]) {
					this['bintang_'+i] = global.addSprite(posBin[i-1], this.adonan.y+this.adonan.height*1.32, "cookbook_bintang_on");
				}
				else {
					this['bintang_'+i] = global.addSprite(posBin[i-1], this.adonan.y+this.adonan.height*1.32, "cookbook_bintang_off");
				}
				// this['bintang_'+i].scale.setTo(0.6, 0.6);
				this['bintang_'+i].anchor.setTo(0.5, 0.5);
				if(datagames.lastPlay == 0) {
					this['bintang_'+i].scale.setTo(0, 0);
				}
				else {
					this['bintang_'+i].scale.setTo(0.7, 0.7);
				}
				this.gPizza.add(this['bintang_'+i]);
			}
		}

		this.btnHome = global.addSprite(75, 825, 'cookbook_btn_home');
		this.btnHome.scale.setTo(0.9, 0.9);
		gKiri.add(this.btnHome)

		this.btnMasak = global.addSprite(416, this.btnHome.y, 'cookbook_btn_masak');
		this.btnMasak.scale.setTo(0.9, 0.9);
		gKiri.add(this.btnMasak);
		this.checkBtnMasak();

		this.btnHome.inputEnabled = true;
		this.btnHome.events.onInputDown.add(this.onBtnDown, this);
		this.btnMasak.inputEnabled = true;
		this.btnMasak.events.onInputDown.add(this.onBtnDown, this);

		gCont.add(gKiriBg);
		gCont.add(gKiri);
		gCont.add(this.btnSound);

		this.gCont = gCont;

		this.wGeser = this.adonan.width;
		gKiri.visible = false;

		this.gPizza.x -= this.wGeser*datagames.lastPlay;
		this.idxGeser = datagames.lastPlay + 1;
		
		if(this.btnRight) {
			if(this.idxGeser > this.maxList)
				this.btnRight.visible = false;
		}

		var tween = game.add.tween(book).to({x: 0 - book.width*0.37}, 500, Phaser.Easing.Linear.None, true);
		// console.trace(datagames.lastPlay);
		tween.onComplete.add(function() {
			gKiri.visible = true
			if(datagames.flagDough) {
				if(datagames.bgm) {
					this.audioStar.play();
				}
				if(datagames.lastPlay == 0) {
					var tween1 = game.add.tween(this.bintang_1.scale).to({x:0.7, y:0.7}, 250, Phaser.Easing.Bounce.Out, true);
					var tween2 = game.add.tween(this.bintang_2.scale).to({x:0.7, y:0.7}, 250, Phaser.Easing.Bounce.Out, true, 250);
					var tween3 = game.add.tween(this.bintang_3.scale).to({x:0.7, y:0.7}, 250, Phaser.Easing.Bounce.Out, true, 500);
				}
				else {
					if(this['bintang_'+datagames.lastPlay+'_1']) {
						game.add.tween(this['bintang_'+datagames.lastPlay+'_1'].scale).to({x:0.7, y:0.7}, 250, Phaser.Easing.Bounce.Out, true);
						game.add.tween(this['bintang_'+datagames.lastPlay+'_2'].scale).to({x:0.7, y:0.7}, 250, Phaser.Easing.Bounce.Out, true, 250);
						game.add.tween(this['bintang_'+datagames.lastPlay+'_3'].scale).to({x:0.7, y:0.7}, 250, Phaser.Easing.Bounce.Out, true, 500);
					}
				}
			}
			// if(datagames.firstPlay) {
			// 	this.flagTutor = true;
			// 	this.genTutor();
			// }
		}, this)


		this.onResize();
	},

	update: function()
	{
	},

	render:function()
	{
	},

	genTutor: function()
	{
		return;
		// this.tutor = global.addSprite(this.gw*0.5, this.gh*0.2, 'cookbook_tutor');
		// this.tutor.anchor.setTo(0.5, 0);
		// this.gTutor.add(this.tutor);

		// var btnTutor = global.addSprite(this.tutor.x - this.tutor.width*0.05, this.tutor.y + this.tutor.height*0.8, 'cookbook_btn_play');
		// btnTutor.anchor.setTo(0.5, 0);
		// this.gTutor.add(btnTutor);

		// btnTutor.inputEnabled = true;
		// btnTutor.events.onInputDown.add(function() {
		// 	global.clickbtn();
		// 	datagames.firstPlay = false;
		// 	this.flagTutor = false;
		// 	this.gTutor.destroy();
		// }, this);
	},

	checkBtnMasak:function()
	{
		this.btnMasak.visible = true;
	},

	onNavListDown:function(obj)
	{
		// if(this.flagTutor)
		// 	return;
		
		global.clickbtn();

		this.gNav.visible = false
		// this.btnMasak.visible = false;
		this.flagGeser = true;
		if(obj == this.btnLeft) {
			this.gNav.visible = false
			this.idxGeser--;
			if(!this.btnRight.visible)
				this.btnRight.visible = true
			if(this.idxGeser <= 1)
				this.btnLeft.visible = false
			var tween = game.add.tween(this.gPizza).to({x: this.gPizza.x+this.wGeser}, 350, Phaser.Easing.Sinusoidal.In, true);
			tween.onComplete.add(function() {
				this.gNav.visible = true;
				this.flagGeser = false;
				// this.checkBtnMasak();
			}, this)
		}
		else {
			this.gNav.visible = false
			this.idxGeser++;
			if(!this.btnLeft.visible)
				this.btnLeft.visible = true
			if(this.idxGeser > this.maxList)
				this.btnRight.visible = false
			var tween = game.add.tween(this.gPizza).to({x: this.gPizza.x-this.wGeser}, 350, Phaser.Easing.Sinusoidal.In, true);
			tween.onComplete.add(function() {
				this.gNav.visible = true;
				this.flagGeser = false;
				// this.checkBtnMasak();
			}, this)
		}
	},

	onBtnDown:function(obj)
	{
		if(this.flagGeser)
			return;
		
		global.clickbtn();
		if(obj == this.btnHome) {
			this.gCont.destroy();
			this.gCont = null;
			this.state.start('Preloader', true, false, 'cmainmenu');
		}
		else {
			// if(datagames.flagDough) {
			// if(this.idxGeser > 1) {
			// 	datagames.jnsPizza = this.idxGeser - 1;
			// 	// trace("AAAA", datagames.jnsPizza);
			// 	datagames.jnsMasak = 1;
			// 	datagames.lastPlay = this.idxGeser;
			// 	this.state.start('Preloader', true, false, 'cgame', 1);
			// }
			// else {
			// 	datagames.jnsMasak = 0;
			// 	datagames.lastPlay = this.idxGeser;
			// 	this.state.start('Preloader', true, false, 'cgame', 0);
			// }
			this.toMasak();
		}
	},

	toMasak: function()
	{
		// console.trace()
		if(this.idxGeser > 1) {
			datagames.jnsPizza = this.idxGeser - 1;
			// trace("AAAA", datagames.jnsPizza);
			datagames.jnsMasak = 1;
			datagames.lastPlay = this.idxGeser - 1;
			// console.trace(datagames.lastPlay);
			this.gCont.destroy();
			this.gCont = null;
			this.state.start('Preloader', true, false, 'cgame', 1);
		}
		else {
			datagames.jnsMasak = 0;
			datagames.lastPlay = this.idxGeser - 1;
			this.gCont.destroy();
			this.gCont = null;
			// console.trace(datagames.lastPlay);
			this.state.start('Preloader', true, false, 'cgame', 0);
		}
	},

	onResize: function() {
		global.init();
		this.gCont.fitToCenter(BasicGame.gameWidth, BasicGame.gameHeight, global.width, global.height);
		// 		var s = utils.fitToAll(this.gw, this.gh, this.world.width, this.world.height);
		// gCont.scale.x = s.x;
		// gCont.scale.y = s.y;
		// gCont.y = (this.world.height-this.gh*s.y) * 0.5;
		// gCont.x = (this.world.width-this.gw*s.x) * 0.5;
		// utils.floor(gCont);
		this.bg.stretch(this.world.width, this.world.height);
	}

};
