cgame = function(game){};

cgame.prototype = {
	init:function(tipe)
	{
		// trace("INIIITT");
		if(tipe != null)
			this.tipe = tipe
		else
			this.tipe = 0
	},

	preload:function()
	{
		/*
			waktunya masak
		*/
		// trace("PRELOAAAADDD");
		Asset.bitmapFont("merkin_orange");
		Asset.png('masak_bg');
		Asset.png('masak_bg2');
		Asset.png('masak_meja');
		Asset.atlaspng('adonan_sprite');
		Asset.atlaspng('clear_sprite');
		Asset.atlaspng('pause_sprite');
		Asset.atlaspng('global_sprite');
		// Asset.atlaspng('tutor_sprite');
		
		Asset.atlaspng('anim_mbak');
		Asset.atlaspng('tapok_sprite');
		Asset.atlaspng('tools_sprite');
		Asset.atlaspng('tangan_sprite');
		// game.load.audio('ascend', 'assets/audio/ascend.mp3', 'assets/audio/ascend.ogg');
		// game.load.audio('star', 'assets/audio/star-beep.mp3', 'assets/audio/star-beep.ogg');
		// game.load.audio('success', 'assets/audio/success.mp3', 'assets/audio/success.ogg');
		Asset.audio('ascend');
		Asset.audio('star', 'star-beep');
		Asset.audio('success');

		if(datagames.jnsMasak == 0) {
			Asset.atlaspng('anim_ceret');
			Asset.atlaspng('anim_garam');
			Asset.atlaspng('anim_minyak');
			Asset.atlaspng('anim_pisau');
			Asset.atlaspng('anim_tepung');
			Asset.atlaspng('anim_yeast');
			// game.load.audio('tetes', 'assets/audio/water-drip.mp3', 'assets/audio/water-drip.ogg');
			// game.load.audio('air', 'assets/audio/water-pour.mp3', 'assets/audio/water-pour.ogg');
			// game.load.audio('kocok', 'assets/audio/shake.mp3', 'assets/audio/shake.ogg');
			// game.load.audio('tuang', 'assets/audio/pour.mp3', 'assets/audio/pour.ogg');
			Asset.audio('tetes','water-drip');
			Asset.audio('air','water-pour');
			Asset.audio('kocok','shake');
			Asset.audio('tuang','pour');
			return;
		}
		else {
			// trace("LOAD AUDIO");
			// game.load.audio('iris', 'assets/audio/knife.mp3', 'asssets/audio/knife.ogg');
			// game.load.audio('microwave', 'assets/audio/microwave.mp3', 'assets/audio/microwave.mp3');
			Asset.audio('iris','knife');
			Asset.audio('microwave','microwave');
		}
		// trace("TEMBUSSS", datagames.jnsMasak);
		Asset.atlaspng('pizza_adon_sprite');
		Asset.atlaspng('pizza_baked_sprite');
		Asset.atlaspng('pizza_kosong_sprite');
		Asset.atlaspng('saos_bawah_sprite');
		Asset.atlaspng('saos_atas_sprite');
		Asset.atlaspng('saos_botol_sprite');
		var jns = datagames.jnsPizza-1;
		// console.trace(jns);
		for(var i=0;i<datagames.resep[jns].length;i++) {
			if(datagames.resep[jns][i] != 19) {
				Asset.atlaspng('anim_'+datagames.resep[jns][i]);
			}
		}
		for(var i=1;i<=4;i++) {
			Asset.atlaspng('anim_saos_'+i);
		}
		Asset.atlaspng('slice_sprite');
		Asset.atlaspng('topping_sprite');
		Asset.atlaspng('drag_topping_sprite');
		Asset.atlaspng('oven_sprite');
	},

	create:function()
	{	
		game.curstate = this;

		this.ctrMove = 0;
		this.oldPos = {x: null, y: null};

		this.clueStat = [0, 0, 0, 0, 0];	// status clue pada bikin adonan
		this.flagAwalClue = true;
		this.idxOpenClue = null;
		this.stepAdon = 0;
		this.flagMoveAduk = false;
		this.posAwal = null;
		// this.posSelisihInput = null;
		this.posSelisihInput = {};
		this.stepAduk = 1;
		this.flagAdukKanan = false;
		this.salahAdon = 0;

		this.stepTutor = 0;

		this.flagFinish = false;
		this.flagAnim = false;
		this.flagTutor = false;

		this.flagTapok = false;
		this.nilaiMasak = 0;
		this.flagCekSalah = false;

		this.posAwalPotongX = null;
		this.posAwalPotongY = null;
		this.flagVertPotong = false;

		this.flagPotong = false;
		this.flagCrPotong = false;
		this.posPisau = [];
		this.ctrRaw = 0;	// idx bahan raw yg ada pada datagames
		this.ctrTgnBentuk = 5;
		this.flagBentuk = false;
		flagCekSalahBentuk = false;
		this.flagMulaiNgiris = false;

		this.flagMoveSolet = false;
		this.flagSoletKiri = false;
		this.posAwalSolet = null;

		this.maskTopW = null;
		// this.flagMoveTop = true;
		this.flagMoveTop = false;
		this.flagDragTop = false;
		this.flagTopIn = [];	// untuk menentukan apakah ingedients topping sudah dimasukkan semua;
		this.posAwalPizza = 0;
		this.flagAnimPotong = false;

		this.flagOven = false;
		this.btnDoneTop = null;

		this.gw = 640;
		this.gh = 1020;

		var bg = this.add.sprite(0, 0, 'masak_bg'); this.bg = bg;

		var bg2 = this.add.sprite(this.gw*0.5, -this.gh*0.15, 'masak_bg2');
		bg2.anchor.setTo(0.5, 0);

		var meja = this.add.sprite(this.gw*0.45, this.gh, 'masak_meja');
		meja.y += meja.height*0.15;
		meja.anchor.setTo(0.5, 1);
		meja.scale.setTo(0.8, 0.8);

		var gCont = game.add.group(); this.gCont = gCont;

		this.gTengah = game.add.group();
		this.gDepan = game.add.group();
		this.gDepan.add(meja)
		this.gAnim = game.add.group();
		this.gUI = game.add.group();
		this.gLayer = game.add.group();
		this.gMsg = game.add.group();

		this.btnPause = global.addSprite(this.gw*0.85, this.gh*0.05, 'global_btn_pause');
		this.btnPause.scale.setTo(0.8, 0.8);
		this.gUI.add(this.btnPause);

		if(datagames.bgm)
			this.btnSound = global.addSprite(this.gw*0.73, this.gh*0.05, 'global_btn_music_on');
		else
			this.btnSound = global.addSprite(this.gw*0.73, this.gh*0.05, 'global_btn_music_off');
		this.btnSound.scale.setTo(0.8, 0.8);
		this.btnSound.animations.add('bgmOff', [0]);
		this.btnSound.animations.add('bgmOn', [1]);

		this.gUI.add(this.btnSound);

		this.btnPause.inputEnabled = true;
		this.btnPause.events.onInputDown.add(this.onUiDown, this);
		this.btnSound.inputEnabled = true;
		this.btnSound.events.onInputDown.add(this.onUiDown, this);

		this.genPause();

		this.mbak = global.addSprite(0, this.gh*0.55, 'anim_mbak_000');
		this.mbak.scale.setTo(0.5, 0.5);
		this.mbak.anchor.setTo(0, 1);
		this.gTengah.add(this.mbak);
		this.mbak.animations.add('animMbakIdle', Phaser.Animation.generateFrameNames('anim_mbak_', 0, 10, '', 3), 12, true);
		this.mbak.animations.play('animMbakIdle');

		gCont.add(this.gTengah);
		gCont.add(this.gDepan);
		gCont.add(this.gAnim);
		gCont.add(this.gUI);
		gCont.add(this.gLayer);
		gCont.add(this.gMsg);

		// this.gFull = game.add.group();
		// console.trace(this.gFull);

		if(this.tipe == 0) {
			this.genSpriteAdonan();
			// if(datagames.tutor[0] == 0) {
			// 	// this.genTutor(this.genSpriteAdonan());
			// 	this.genTutor();
			// }
			// else {
				// this.genSpriteAdonan();
				// this.genTapok();	// hack
				// this.mbak.animations.play('animMbakIdle');
			// }
		}
		else {
			// if(datagames.tutor[1] == 0) {
			// 	this.genTutor();
			// }
			// else {
				this.genPotong();	// default
				// this.genBentuk();
				// this.genSaosinPizza();	// hack
				// this.genTopping();
				// this.genPanggang();
				// this.mbak.animations.play('animMbakIdle');
			// }
		}

		
		// utils.floor(gCont);
		// var _sc = utils.fitToWidth(this.gw,this.gh, this.world.width, this.world.height);
		// this.gFull.scale.x = _sc.x;
		// this.gFull.scale.y = _sc.y;
		// this.gFull.x = (this.world.width-this.gw*_sc.x) * 0.5;

		if(datagames.jnsMasak == 0) {
			this.audioTetes = game.add.audio('tetes');
			this.audioAir = game.add.audio('air');
			this.audioKocok = game.add.audio('kocok');
			this.audioTuang = game.add.audio('tuang');
		}
		else {
			this.audioIris = game.add.audio('iris');
			this.audioMicrowave = game.add.audio('microwave');
		}

		this.audioAscend = game.add.audio('ascend');
		this.audioSuccess = game.add.audio('success');
		this.audioStar = game.add.audio('star');

		_A.startLevel(datagames.jnsPizza);

		// this.genClear(1, "ccookbook");	// hack
		// this.genBtnDoneAdon(); //hack
		this.onResize();
	},

	update:function()
	{
		if(this.gPause.visible || this.flagTutor)
			return;

		if(this.flagOven) {
			this.maskOven.x += 2;
			// trace("OVEEENN");
			if(this.maskOven.x >= this.barOven.x - this.barOven.width*0.5) {
				this.flagOven = false;
				this.maskOven.x = this.barOven.x - this.barOven.width*0.5;
				this.endPanggang();
			}
		}

		if(this.puterSolet) {
			this.puterSolet.angle += 3;
		}

		if(this.flagMoveSolet) {
			// action saart solet dioles2kan ke pizza

			this.solet.x = game.input.x + this.posSelisihInput.x;
			this.solet.y = game.input.y + this.posSelisihInput.y;

			if(this.oldPos.x != game.input.x || this.oldPos.y != game.input.y) {
				this.ctrMove++;
				this.oldPos.x = game.input.x;
				this.oldPos.y = game.input.y;
			}
			if(this.ctrMove >= 60) {
				this.ctrMove = 0;
				this.saosAtas.alpha += 0.2;
				this.animSaos.alpha -= 0.2;
			}

			// if(this.flagSoletKiri) {
			// 	if(this.solet.x <= this.posAwalSolet - 80) {
			// 		this.flagSoletKiri = false;
			// 		this.posAwalSolet = this.solet.x;
			// 		// this.saosAtas.alpha += 0.1;
			// 	}
			// }
			// else {
			// 	if(this.solet.x >= this.posAwalSolet + 80) {
			// 		this.flagSoletKiri = true;
			// 		this.posAwalSolet = this.solet.x;
			// 		this.audioAscend.play();
			// 		this.saosAtas.alpha += 0.2;
			// 		this.animSaos.alpha -= 0.2;
			// 	}
			// }

			if(this.saosAtas.alpha >= 1) {
				this.saosAtas.alpha = 1;
				this.animSaos.alpha = 0;
				this.endSolet();
			}

		}

		if(this.flagPotong) {
			if(this.garis == null || this.pisauPotong == null || this.flagAnimPotong)
				return;
			
			if(!this.flagMulaiNgiris) {
				if(this.checkOverlap(this.garis, this.pisauPotong)) {
					// trace("overlap true");
					if(this.posAwalPotongX == null) {
						// trace("pos awal potong x");
						this.flagMulaiNgiris = true;
						this.posAwalPotongX = game.input.x;
						// this.posAwalPotongY = game.input.y;
						this.posAwalPotongY = this.garis.y - this.garis.height*0.3;
					}
					// else {
					// 	// if(Math.abs(this.posAwalPotongX - game.input.x) > 50 || Math.abs(this.posAwalPotongY - game.input.y) > 100)
					// 	// if(game.input.x - this.posAwalPotongX > 25 || this.posAwalPotongY - game.input.y > 50)
					// 		// this.checkPotong();
					// 	if(this.flagVertPotong) {
					// 		if(game.input.y - this.posAwalPotongY > 20) {
					// 			this.checkPotong();
					// 			this.flagMulaiNgiris = false;
					// 		}
					// 	}
					// 	else {
					// 		if(this.posAwalPotongX - game.input.x > 10) {
					// 			this.checkPotong();
					// 			this.flagMulaiNgiris = false;
					// 		}
					// 	}
					// }
				}
			}
			else {
				if(this.flagVertPotong) {
					// trace("vertical potong", game.input.y, this.posAwalPotongY);
					if(game.input.y - this.posAwalPotongY > 20) {
						// trace("DIPOTONG");
						this.checkPotong();
						this.flagMulaiNgiris = false;
						this.flagPotong = false;
						game.time.events.add(Phaser.Timer.SECOND*0.25, function() {
							this.flagPotong = true;
						}, this);
					}
				}
				else {
					if(this.posAwalPotongX - game.input.x > 10) {
						this.checkPotong();
						this.flagMulaiNgiris = false;
						this.flagPotong = false;
						game.time.events.add(Phaser.Timer.SECOND*0.25, function() {
							this.flagPotong = true;
						}, this);
					}
				}
			}
			// if(this.checkOverlap(this.garis, this.pisauPotong)) {
			// 	if(this.posAwalPotongX == null) {
			// 		this.posAwalPotongX = game.input.x;
			// 		this.posAwalPotongY = game.input.y;
			// 	}
			// 	else {
			// 		// if(Math.abs(this.posAwalPotongX - game.input.x) > 50 || Math.abs(this.posAwalPotongY - game.input.y) > 100)
			// 		// if(game.input.x - this.posAwalPotongX > 25 || this.posAwalPotongY - game.input.y > 50)
			// 			// this.checkPotong();
			// 		if(this.flagVertPotong) {
			// 			if(game.input.y - this.posAwalPotongY > 20)
			// 				this.checkPotong();
			// 		}
			// 		else {
			// 			if(this.posAwalPotongX - game.input.x > 10)
			// 				this.checkPotong();
			// 		}
			// 	}
			// }
		}

		if(this.puterMark != null) {
			this.puterMark.angle += 3;
		}
		if(this.flagMoveAduk) {
			// if(!this.checkOverlap(this.pengaduk, this.baskom))
			// 	return;
			if(this.posAwal != null) {
				// trace("HARUSNYA JALAN");
				// if(this.pengaduk.y < this.baskom.y - this.baskom.height*1.1 || this.pengaduk.y > this.baskom.y + this.baskom.height*0.1)
				// 	return;

				// trace("BISA JALAN"); 

				// if(game.input.x + this.posSelisihInput.x < this.baskom.x - this.baskom.width*0.15 || game.input.x + this.posSelisihInput.x > this.baskom.x + this.baskom.width*0.35)
				// 	return;

				// if(game.input.y + this.posSelisihInput.y < this.baskom.y - this.baskom.height*0.7 || game.input.y + this.posSelisihInput.y > this.baskom.y - this.baskom.height*0.35)
				// 	return;

				this.pengaduk.x = game.input.x + this.posSelisihInput.x;
				this.pengaduk.y = game.input.y + this.posSelisihInput.y;

				// if(!this.flagAdukKanan) {
				// 	if(this.pengaduk.x <= this.baskom.x - this.baskom.width*0.06) {
				// 		this.flagAdukKanan = true;
				// 		this.posAwal = this.pengaduk.x;
				// 		this.stepAduk++;
				// 	}
				// }
				// else {
				// 	if(this.pengaduk.x >= this.baskom.x + this.baskom.width*0.2) {
				// 		this.flagAdukKanan = false;
				// 		this.posAwal = this.pengaduk.x;
				// 		this.stepAduk++;
				// 	}
				// }
				// trace("ADUK");

				if(this.oldPos.x != game.input.x || this.oldPos.y != game.input.y) {
					this.ctrMove++;
					this.oldPos.x = game.input.x;
					this.oldPos.y = game.input.y;
				}

				if(this.ctrMove >= 30) {
					this.ctrMove = 0;
					this.stepAduk++;
				}

				if(this.stepAduk%4==0) {
					this.stepAduk = 1;
					this.stepAdon++;
					for(var i=1;i<=4;i++) {
						this['item_baskom_'+i].kill();
					}
					if(this.stepAdon <= 5) {
						this.genAdon();
					}
					if(this.stepAdon >= 5) {
						this.pengaduk.kill();
						this.puterMark.destroy();
						this.flagMoveAduk = false;
						// this.endAdon();
						for(var i=1;i<=5;i++) {
							// game.add.tween(this['adon_item_'+i]).to({x:})
							this['adon_item_'+i].kill();
						}
						this.genBtnDoneAdon();
					}
				}
			}
		}

		if(this.detikTapok != null) {
			this.detikTapok.angle += 0.5;
			if(this.detikTapok.angle < 0) {
				if(this.flagCekSalah)
					return;
				if(this.detikTapok.angle > -2) {
					this.salahAdon++;
					this.flagCekSalah = true;
				}
			}
		}

		if(this.detikBentuk != null) {
			// trace("bentuk");
			this.detikBentuk.angle += 0.5;
			if(this.detikBentuk.angle < 0) {
				if(this.flagCekSalahBentuk)
					return;
				if(this.detikBentuk.angle > -2) {
					// trace("salah masak 1");
					// this.nilaiMasak++;
					// trace("Nilai bentuk ++");
					this.flagCekSalahBentuk = true;
				}
			}
		}
	},

	genBtnDoneAdon: function() {
		this.btnDoneAdon = global.addSprite(this.gw, this.gh*0.15, 'tools_btn_done');
		this.btnDoneAdon.scale.setTo(0.7, 0.7);
		this.btnDoneAdon.anchor.setTo(1, 0);
		this.gDepan.add(this.btnDoneAdon);
		this.btnDoneAdon.inputEnabled = true;
		this.btnDoneAdon.events.onInputDown.add(function() {
			game.add.tween(this.gbBack).to({x: this.gw}, 500, Phaser.Easing.Linear.None, true);
			game.add.tween(this.gbMid).to({x: this.gw}, 500, Phaser.Easing.Linear.None, true);
			var tween = game.add.tween(this.gbFront).to({x: this.gw}, 500, Phaser.Easing.Linear.None, true);
			tween.onComplete.add(function() {
				this.gbBack.destroy();
				this.gbMid.destroy();
				this.gbFront.destroy();
				this.genTapok();
			}, this);
			this.btnDoneAdon.destroy();
		}, this);
	},

	render:function(){
		// if (window.lastTrace) {
			// game.debug.text(window.lastTrace, 100,100);
		// }

	},

	genTutor:function() {
		this.flagTutor = true;
		// var bgTutor;
		// if(this.tipe == 0) {
		var bgTutor = global.addSprite(this.gw*0.5, this.gh*0.2, 'tutor_'+this.tipe+"_"+this.stepTutor);
			// bgTutor = global.addSprite(this.gw*0.5, this.gh*0.2, 'tutor_0_1');
			// console.trace(tipe, this.stepTutor);
			bgTutor.anchor.setTo(0.5, 0);
			// bgTutor.scale.setTo(0.8, 0.8);
		// }
		this.gMsg.add(bgTutor);

		var btnStart = global.addSprite(bgTutor.x-25, bgTutor.y + bgTutor.height*0.85, 'tutor_btn_play');
		btnStart.anchor.setTo(0.5, 0);
		btnStart.inputEnabled = true;
		this.gMsg.add(btnStart);
		btnStart.events.onInputDown.add(function() {
			global.clickbtn();
			bgTutor.kill();
			this.flagTutor = false;
			// next;
			if(this.tipe == 0) {
				if(this.stepTutor == 0)
					this.genSpriteAdonan();
				else {
					this.genTapok();
					datagames.tutor[0] = 1;
				}
			}
			else {
				if(this.stepTutor == 0)
					this.genPotong();
				else if(this.stepTutor == 1)
					this.genBentuk();
				else if(this.stepTutor == 2)
					this.genSaosinPizza();
				else if(this.stepTutor == 3)
					this.genTopping();
				else if(this.stepTutor == 4) {
					this.genPanggang();
					datagames.tutor[1] = 1;
				}
			}
			btnStart.kill();
			this.mbak.animations.play('animMbakIdle');
			this.stepTutor++;
		}, this);

	},

	genSpriteAdonan:function()
	{
		//	jika this.tipe == 0
		posXItem = [this.gw*0.75, this.gw*0.25, this.gw*0.5, this.gw*0.4, this.gw*0.6];
		posYItem = [this.gh*0.52, this.gh*0.52, this.gh*0.45, this.gh*0.5, this.gh*0.5];
		for(var i=1;i<=5;i++) {
			this['adon_item_'+i] = global.addSprite(posXItem[i-1], posYItem[i-1], 'adon_item_'+i);
			this['adon_item_'+i].anchor.setTo(0.5, 1);
			this['adon_item_'+i].scale.setTo(0.8, 0.8);
			this['adon_item_'+i].idx = i;
			this['adon_item_'+i].inputEnabled = true;
			this['adon_item_'+i].events.onInputDown.add(this.onAdonItemDown, this);
			this.gDepan.add(this['adon_item_'+i])
		}

		this.baskom = global.addSprite(this.gw*0.5, this.gh*0.9, 'adon_baskom_back');
		this.baskom.anchor.setTo(0.5, 1);
		this.baskom.scale.setTo(0.8, 0.8);

		this.gbBack = game.add.group();
		this.gbMid = game.add.group();
		this.gbFront = game.add.group();
		this.gDepan.add(this.gbBack);
		this.gDepan.add(this.gbMid);
		this.gDepan.add(this.gbFront);

		this.gbBack.add(this.baskom);
		for(var i=1;i<=4;i++) {
			this['item_baskom_'+i] = global.addSprite(this.baskom.x, this.baskom.y - this.baskom.height*0.33, 'adon_item_baskom_'+i);
			this['item_baskom_'+i].scale.setTo(0.8, 0.8);
			this['item_baskom_'+i].anchor.setTo(0.5, 1);
			// this['item_baskom_'+i].visible = false;
			this['item_baskom_'+i].alpha = 0;
			this.gbBack.add(this['item_baskom_'+i]);
		}

		var baskFr = global.addSprite(this.baskom.x+3, this.baskom.y-37, 'adon_baskom_front');
		baskFr.scale.setTo(0.8, 0.8);
		baskFr.anchor.setTo(0.5, 1);
		this.gbFront.add(baskFr);

		this.pengaduk = global.addSprite(this.baskom.x+this.gw*0.2, this.baskom.y-this.gh*0.17, 'adon_pengaduk');
		this.pengaduk.scale.setTo(0.8, 0.8);
		this.pengaduk.anchor.setTo(0.5, 1);
		this.gbFront.add(this.pengaduk);

		// hack
		// this.pengaduk.inputEnabled = true;
		// // this.pengaduk.input.enableDrag();
		// this.pengaduk.events.onInputDown.add(this.onPengadukDown, this);
		// this.pengaduk.events.onInputUp.add(function() {
		// 	this.flagMoveAduk = false;
		// }, this);
		// hack

		this.clue = global.addSprite(this.gw*0.55, this.gh*0.18, 'adon_clue');
		this.clue.scale.setTo(0.8, 0.8)
		this.clue.anchor.setTo(0.5, 0.5)
		this.gTengah.add(this.clue);

		for(var i=1;i<=5;i++) {
			this['clue_item_'+i] = global.addSprite(this.clue.x+10, this.clue.y, 'adon_clue_item_'+i);
			// this['clue_item_'+i].scale.setTo(0.8, 0.8);
			this['clue_item_'+i].scale.setTo(0, 0);
			this['clue_item_'+i].anchor.setTo(0.5, 0.5);
			this['clue_item_'+i].visible = false;
			
			this.gTengah.add(this['clue_item_'+i]);
		}
		this.genClue();
	},

	genClue:function()
	{
		if(this.flagAwalClue) {
			// var ran = game.rnd.integerInRange(1, 4);
			var ran = 1;
			this['clue_item_'+ran].visible = true;
			this.clueStat[ran-1] = 1;
			this.idxOpenClue = ran;
			game.add.tween(this['clue_item_'+ran].scale).to({x:0.8, y:0.8}, 500, Phaser.Easing.Sinusoidal.Out, true);
			this.flagAwalClue = false;
		}
		else {
			if(this.clueStat[0] == 1 && this.clueStat[1] == 1 && this.clueStat[2] == 1 && this.clueStat[3] == 1 && this.clueStat[4] == 1 && this.clueStat[5] == 1) {
				return;
			}

			if(this.stepAdon >= 5)
				return;

			var st;
			var _stop = false;
			while(!_stop) {
				// trace("LOOP")
				if(this.idxOpenClue < 5)
					st = this.idxOpenClue + 1;
				else
					st = 1;

				if(this.clueStat[st-1] == 0) {
					this['clue_item_'+st].visible = true;
					this.idxOpenClue = st;
					this.clueStat[st-1] = 1;
					game.add.tween(this['clue_item_'+st].scale).to({x:0.8, y:0.8}, 500, Phaser.Easing.Sinusoidal.Out, true);
					_stop = true;
				}
			}
		}
	},

	genAdon:function()
	{
		if(this.adonDough)
			this.adonDough.kill();
		if(this.stepAdon <= 5) {
			if(datagames.bgm) {
				this.audioAscend.play();
			}
			this.adonDough = global.addSprite(this.baskom.x, this.baskom.y - this.baskom.height*0.5, 'adon_dough_'+this.stepAdon);
			this.adonDough.scale.setTo(0.8, 0.8);
			this.adonDough.anchor.setTo(0.5, 0.5);
			this.gbBack.add(this.adonDough);
		}
	},

	onAdonItemDown:function(obj)
	{
		if(this.gPause.visible || this.flagAnim || this.flagTutor)
			return;

		if(this.idxOpenClue == null || this.stepAdon >= 5)
			return;

		global.clickbtn();

		if(obj.idx != this.idxOpenClue) {
			this.salahAdon++;
			return;
		}

		this['clue_item_'+obj.idx].visible = false;
		if(this.stepAdon < 5) {
			this.flagAnim = true;
			// if(obj.idx != 4) {
				this.clue.visible = false;
				this.genAnimAdon(obj.idx);
			// }
			// else {
			// 	this.stepAdon++;
			// 	this.flagAnim = false;
			// 	// if(obj.idx != 5) {
			// 	// 	this['item_baskom_'+obj.idx].visible = true;
			// 	// }
			// 	// if(obj.idx == 4) {
			// 	// 	game.add.tween(this['item_baskom_'+obj.idx]).to({alpha: 1}, 500, Phaser.Easing.Linear.None, true);
			// 	// }
			// 	this.genClue();
			// }
		}
		else {
			this.stopAdonAduk();
		}
	},

	genAnimAdon:function(item)
	{
		var max, posX;
		var posY = this.baskom.y - 150;
		// item = 5;
		var audio = null;
		var timeAnim = 5;
		if(item==1) {
			max = 6;
			posX = 50;
			audio = this.audioTuang;
		}
		else if(item==2) {
			max = 5;
			posX = 120;
			audio = this.audioTetes;
			posY = this.baskom.y - 225;
		}
		else if(item==3) {
			max = 5;
			posX = 50;
			audio = this.audioAir;
		}
		else if(item == 4) {
			max = 14;
			posX = 75;
			posY = this.baskom.y - 200;
			timeAnim = 15;
			audio = this.audioAscend;
		}
		else if(item==5) {
			max = 5;
			posX = 70;
			audio = this.audioKocok;
		}

		// trace("genAnimAdon", item);
		var anim = global.addSprite(posX, posY, 'anim_item'+item+'_000');
		anim.anchor.setTo(0, 1);
		anim.scale.setTo(0.8, 0.8);
		anim.animations.add('animPlay', Phaser.Animation.generateFrameNames('anim_item'+item+'_', 0, max, '', 3), timeAnim);
		anim.animations.play('animPlay');
		anim.animations.currentAnim.enableUpdate = true;

		// trace("ANIMA",Phaser.Animation.generateFrameNames('anim_item'+item+'_', 0, max, '', 3));
		if(item == 1) {
			this['item_baskom_'+item].alpha = 1;
			this['item_baskom_'+item].visible = true;
			this['item_baskom_'+item].scale.setTo(0, 0);
			game.add.tween(this['item_baskom_'+item].scale).to({x:0.5, y:0.5}, 250, Phaser.Easing.Linear.None, true, 500);
		}
		else if(item == 4) {
			game.add.tween(this['item_baskom_'+item]).to({alpha: 1}, 750, Phaser.Easing.Linear.None, true, 250);
			// this['item_baskom_'+item].alpha = 1;
		}
		anim.animations.currentAnim.onUpdate.add(function() {
			if(audio != null) {
				if(anim.animations.currentFrame.index == 3) {
					if(datagames.bgm) {
						audio.play();
					}
					/*if(item == 1) {
						this['item_baskom_'+item].alpha = 1;
						this['item_baskom_'+item].visible = true;
						this['item_baskom_'+item].scale.setTo(0, 0);
						game.add.tween(this['item_baskom_'+item].scale).to({x:0.5, y:0.5}, 250, Phaser.Easing.Linear.None, true);
					}
					else*/ if (item == 2 || item == 3) {
						game.add.tween(this['item_baskom_'+item]).to({alpha: 0.2}, 250, Phaser.Easing.Linear.None, true);
					}
				}
			}
			
		}, this);

		anim.animations.currentAnim.onComplete.add(function() {
			// trace("ONCOMPLETE", item,anim.animations.currentFrame.index, max-2);
			if(anim.animations.currentFrame.index >= max-2) {
				anim.animations.add('animReplay', Phaser.Animation.generateFrameNames('anim_item'+item+'_', max - 4, max, '', 3), timeAnim);
				anim.animations.play('animReplay');
				// this['item_baskom_'+item].visible = true;
				// this['item_baskom_'+item].scale.setTo(0.5, 0.5);
				if(item == 1) {
					game.add.tween(this['item_baskom_'+item].scale).to({x:0.8, y:0.8}, 250, Phaser.Easing.Linear.None, true, 100);
				}
				else if(item == 2 || item == 3) {
					game.add.tween(this['item_baskom_'+item]).to({alpha: 1}, 250, Phaser.Easing.Linear.None, true, 100);
				}
				else if(item == 4) {
					// trace("finish 4");
					// game.add.tween(this['item_baskom_'+item]).to({alpha: 1}, 250, Phaser.Easing.Linear.None, true, 100);
					this['item_baskom_'+item].alpha = 1;
				}
				if(audio != null) {
					if(item == 2 || item == 5) {
						game.time.events.add(Phaser.Timer.SECOND*0.5, function() {
							if(datagames.bgm) {
								audio.play();
							}
						}, this);
					}
				}
				anim.animations.currentAnim.onComplete.add(function() {
					anim.kill();
					this.stepAdon++;
					if(item != 5) {
						// this['item_baskom_'+item].visible = true;
						// this['item_baskom_'+item].scale.setTo(0.8, 0.8);
						// game.add.tween(this['item_baskom_'+item].scale).to({x:0.8, y:0.8}, 250, Phaser.Easing.Linear.None, true);
					}
					if(this.stepAdon < 5) {
						this.clue.visible = true;
						this.flagAnim = false;
						this.genClue();
					}
					else {
						this.stopAdonAduk();
					}
					
				}, this);
			}
		}, this);

		this.gAnim.add(anim)
	},

	stopAdonAduk:function() {
		this.flagAnim = false;
		this.clue.kill();
		for(var i=1;i<=5;i++) {
			this['clue_item_'+i].kill();
		}

		this.pengaduk.inputEnabled = true;
		// this.pengaduk.input.enableDrag();
		this.pengaduk.events.onInputDown.add(this.onPengadukDown, this);
		this.pengaduk.events.onInputUp.add(function() {
			if(this.puterMark)
				this.puterMark.visible = true;
			this.flagMoveAduk = false;
		}, this);
		this.puterMark = global.addSprite(this.baskom.x, this.baskom.y - this.baskom.height*0.6, 'adon_puter');
		this.puterMark.scale.setTo(0.6, 0.6);
		this.puterMark.anchor.setTo(0.5, 0.5);
		this.gDepan.add(this.puterMark)
		this.idxOpenClue = null;
		this.stepAdon = 0;
	},

	onPengadukDown:function()
	{
		if(this.gPause.visible || this.flagAnim || this.flagTutor)
			return;

		// trace(this.stepAdon);
		// hack
		if(this.idxOpenClue != null)
			return;

		// console.trace(game.input.x, this.pengaduk.x);

		// if(this.checkOverlap(this.pengaduk, this.baskom)) {
			if(this.puterMark)
				this.puterMark.visible = false;
			this.flagMoveAduk = true;
			this.posAwal = this.pengaduk.x;
			this.posSelisihInput.x = this.pengaduk.x - game.input.x;
			this.posSelisihInput.y = this.pengaduk.y - game.input.y;
			this.posAwal = game.input.x;
			if(this.pengaduk.x <= this.baskom.x) {
				this.flagAdukKanan = true;
				// this.flagAdukKanan = false;
			}
			else {
				this.flagAdukKanan = false;
				// this.flagAdukKanan = true;
			}
		// }
	},

	checkOverlap:function(spA, spB)
	{
		// trace("check overlap");
		var boundsA = spA.getBounds();
		var boundsB
		if(spB == this.pisauPotong) {
			boundsB = spB.getBounds();
			boundsB.width *= 0.7;
			boundsB.height *= 0.7;
			// console.trace(boundsB);
		}
		else {
    		boundsB = spB.getBounds();
    	}

    	return Phaser.Rectangle.intersects(boundsA, boundsB);
	},

	endAdon:function()
	{
		this.flagFinish = true;

		// for(var i=1;i<=5;i++) {
		// 	this['adon_item_'+i].kill();
		// }
		// this.flagMoveAduk = false;
		var params;
		if(this.salahAdon == 0)
			params = 3;
		else if(this.salahAdon <= 2)
			params = 2;
		else
			params = 1;
		this.genClear(params, "ccookbook");
		// datagames.doughScore = params;
		// datagames.score[0] = params;
		if(datagames.score[0] < params)
			datagames.score[0] = params;
		datagames.awal[0] = 1;
		datagames.flagDough = true;
	},

	genClear:function(score, nextState)
	{
		if(datagames.bgm) {
			this.audioSuccess.play();
		}
		var clearBg = global.addSprite(this.gw*0.5, this.gh*0.1, 'clear_bg');
		clearBg.anchor.setTo(0.5, 0);
		this.gMsg.add(clearBg);

		var bmpClear = game.add.bitmapText(clearBg.x, clearBg.y + clearBg.height*0.6, 'merkin_orange', global._t("clear"), 60);
		bmpClear.x -= bmpClear.textWidth*0.5;
		this.gMsg.add(bmpClear);

		var posItem = [
			clearBg.x-this.gw*0.26, clearBg.x-this.gw*0.13, clearBg.x, clearBg.x+this.gw*0.13, clearBg.x+this.gw*0.26
		];
		var delay = 0;
		for(var i=1;i<=5;i++) {
			var item = global.addSprite(posItem[i-1], clearBg.y + clearBg.height*0.6, 'global_item_'+i);
			item.anchor.setTo(0.5, 1);
			item.scale.setTo(0.7, 0.7);
			this.gMsg.add(item);
			game.add.tween(item).to({y:item.y-10}, 250, Phaser.Easing.Default, true, delay, -1, true);
			delay += 200;
		}
		var posBin = [
			clearBg.x-this.gw*0.13, clearBg.x, clearBg.x+this.gw*0.13
		];
		for(var i=1;i<=3;i++) {
			if(i <= score) {
				this['bintang_'+i] = global.addSprite(posBin[i-1], clearBg.y + clearBg.height*0.8, "clear_bintang_on");
			}
			else {
				this['bintang_'+i] = global.addSprite(posBin[i-1], clearBg.y + clearBg.height*0.8, "clear_bintang_off");
			}
			this['bintang_'+i].anchor.setTo(0.5, 0.5);
			this['bintang_'+i].scale.setTo(0, 0);
			this.gMsg.add(this['bintang_'+i]);
		}
		game.add.tween(this.bintang_1.scale).to({x:0.7, y:0.7}, 250, Phaser.Easing.Bounce.Out, true);
		game.add.tween(this.bintang_2.scale).to({x:0.7, y:0.7}, 250, Phaser.Easing.Bounce.Out, true, 250);
		var tween = game.add.tween(this.bintang_3.scale).to({x:0.7, y:0.7}, 250, Phaser.Easing.Bounce.Out, true, 500);
		// return;	// hack
		tween.onComplete.add(function() {
			game.time.events.add(Phaser.Timer.SECOND*2, function() {
				_A.win(1, 100);
				
				this.gCont.destroy();
				this.gCont = null;
				global.setCookie();
				game.state.start('Preloader', true, false, nextState);
			}, this)
		}, this);
	},

	genPause:function()
	{
		this.gPause = game.add.group();
		this.gMsg.add(this.gPause);

		var pauseBg = global.addSprite(this.gw*0.5, this.gh*0.1, 'pause_bg');
		pauseBg.scale.setTo(0.8, 0.8);
		pauseBg.anchor.setTo(0.5, 0);
		this.gPause.add(pauseBg);

		var bmpPause = game.add.bitmapText(pauseBg.x, pauseBg.y + pauseBg.height*0.78, 'merkin_orange', global._t("pause"), 60);
		bmpPause.x -= bmpPause.textWidth*0.5;
		this.gPause.add(bmpPause);

		var posItem = [
			pauseBg.x-this.gw*0.26, pauseBg.x-this.gw*0.13, pauseBg.x, pauseBg.x+this.gw*0.13, pauseBg.x+this.gw*0.26
		];
		var delay = 0;
		for(var i=1;i<=5;i++) {
			var item = global.addSprite(posItem[i-1], pauseBg.y + pauseBg.height*0.8, 'global_item_'+i);
			item.anchor.setTo(0.5, 1);
			item.scale.setTo(0.7, 0.7);
			this.gPause.add(item);
			game.add.tween(item).to({y:item.y-10}, 250, Phaser.Easing.Default, true, delay, -1, true);
			delay += 200;
		}

		this.btnHome = global.addSprite(this.gw*0.3, pauseBg.y+pauseBg.height*0.95, 'pause_btn_home');
		this.btnHome.scale.setTo(0.8, 0.8);
		this.btnHome.anchor.setTo(0.5, 0);
		this.gPause.add(this.btnHome);

		this.btnResume = global.addSprite(this.gw*0.6, this.btnHome.y, 'pause_btn_resume');
		this.btnResume.scale.setTo(0.8, 0.8);
		this.btnResume.anchor.setTo(0.5, 0);
		this.gPause.add(this.btnResume);

		this.btnHome.inputEnabled = true;
		this.btnHome.events.onInputDown.add(this.onPauseDown, this);
		this.btnResume.inputEnabled = true;
		this.btnResume.events.onInputDown.add(this.onPauseDown, this);

		this.gPause.visible = false;
	},

	onUiDown:function(obj)
	{	
		if(this.gPause.visible || this.flagFinish || this.flagTutor)
			return;

		global.clickbtn();
		if(obj == this.btnPause) {
			this.gPause.visible = true;
			if(this.pisauPotong != null)
				this.pisauPotong.input.disableDrag();
		}

		if (obj == this.btnSound) {
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
		}
	},

	onPauseDown:function(obj)
	{
		global.clickbtn();
		if(obj == this.btnResume) {
			this.gPause.visible = false;
			if(this.pisauPotong != null)
				this.pisauPotong.input.enableDrag();
		}
		if(obj == this.btnHome) {
			this.gCont.destroy();
			this.gCont = null;
			game.state.start('Preloader', true, false, 'ccookbook');
		}
	},

	genTapok:function()
	{
		this.gTapok = game.add.group();
		this.gBarTapok = game.add.group();
		this.gCont.add(this.gBarTapok);

		this.gDepan.add(this.gTapok);

		// this.gFull = game.add.group();
		// console.trace(this.gFull);
		// this.gFull.add(this.gBarTapok);

		this.telenan = global.addSprite(this.gw*0.5, this.gh*0.8, 'tapok_telenan');
		this.telenan.anchor.setTo(0.5, 1);
		this.telenan.scale.setTo(0.8, 0.8);
		this.gTapok.add(this.telenan);

		this.adonTapok = global.addSprite(this.telenan.x, this.telenan.y - 40, 'tapok_adon_1');
		this.adonTapok.anchor.setTo(0.5, 1);
		this.adonTapok.scale.setTo(0.8, 0.8);
		this.gTapok.add(this.adonTapok);

		this.memarTapok = global.addSprite(this.telenan.x - 80, this.telenan.y - 285, 'tapok_memar');
		// this.memarTapok.scale.setTo(0.8, 0.8);
		this.gTapok.add(this.memarTapok);
		this.memarTapok.visible = false;

		this.tanganTapok = global.addSprite(this.telenan.x, this.telenan.y + 200, 'tapok_tangan');
		this.tanganTapok.anchor.setTo(0.5, 1);
		this.tanganTapok.scale.setTo(0.8, 0.8);
		this.gTapok.add(this.tanganTapok);
		this.tanganTapok.inputEnabled = true;
		this.tanganTapok.events.onInputDown.add(this.onTapokAdonan, this);

		var pnlBar = global.addSprite(this.gw*0.48, this.gh, 'tapok_pnl_bar');
		// var pnlBar = global.addSprite(global.deviceWidth*0.48, global.deviceHeight, 'tapok_pnl_bar');
		pnlBar.anchor.setTo(0.5, 1);
		// pnlBar.scale.setTo(0.5, 1);
		// this.barWSc = Math.floor(global.deviceWidth / pnlBar.width);
		// this.barWSc = global.deviceWidth / pnlBar.width;
		// this.barHSc = pnlBar.height;
		// pnlBar.width = global.deviceWidth;
		// pnlBar.height *= this.barWSc;
		utils.floor(pnlBar);
		
		// pnlBar.scale.setTo(0.5, 0.5);
		// if(global.deviceWidth > this.gw)
		// 	pnlBar.width = global.deviceWidth;
		// this.gTapok.add(pnlBar);
		this.gBarTapok.add(pnlBar);

		// var barTapok = global.addSprite(pnlBar.x+8*this.barWSc, pnlBar.y - pnlBar.height*0.46, 'tapok_bar');
		var barTapok = global.addSprite(pnlBar.x+8, pnlBar.y - pnlBar.height*0.46, 'tapok_bar');
		barTapok.anchor.setTo(0.5, 0.5);
		// barTapok.width *= this.barWSc;
		// barTapok.height *= this.barWSc;
		utils.floor(barTapok);
		// console.trace(barTapok.x, barTapok.y, barTapok.width, barTapok.height);
		// barTapok.scale.setTo(0.8, 0.8);
		// this.gTapok.add(barTapok);
		this.gBarTapok.add(barTapok);

		this.maskTapok = game.add.graphics();
		this.maskTapok.beginFill(0x000000);
		this.maskTapok.drawRect(0, 0, barTapok.width, barTapok.height);
		this.maskTapok.x = barTapok.x - barTapok.width*0.5;
		this.maxPosTapok = this.maskTapok.x;
		this.maskTapok.y = barTapok.y - barTapok.height*0.5;
		this.maskTapok.x -= barTapok.width;
		// this.gTapok.add(this.maskTapok);
		this.gBarTapok.add(this.maskTapok);

		barTapok.mask = this.maskTapok;

		this.bgJam = global.addSprite(this.gw*0.7, this.gh*0.3, 'tapok_jam');
		this.bgJam.scale.setTo(0.8, 0.8);
		this.bgJam.anchor.setTo(0.5, 0.5);
		this.gTapok.add(this.bgJam);

		this.detikTapok = global.addSprite(this.bgJam.x + this.bgJam.width*0.45, this.bgJam.y, 'tapok_jam_detik');
		this.detikTapok.scale.setTo(0.8, 0.8);
		this.detikTapok.anchor.setTo(0.5, 0.8);
		this.gTapok.add(this.detikTapok);
	},

	onTapokAdonan:function() {
		// console.trace("TAPOK", this.maskTapok.x, 20*this.barWSc);
		if(this.flagTapok || this.gPause.visible)
			return;

		// if(this.maskTapok.x >= 20*this.barWSc)
		// 	return;

		global.clickbtn();
		this.flagTapok = true;
		this.memarTapok.visible = false;
		var tween = game.add.tween(this.tanganTapok.scale).to({x:1, y:1}, 200, Phaser.Easing.Linear.None, true);
		tween.onComplete.add(function() {
			this.tanganTapok.scale.setTo(0.8, 0.8);
			this.memarTapok.visible = true;
			// this.maskTapok.x += 25*this.barWSc;
			this.maskTapok.x += 25;
			if(this.maskTapok.x >= this.maxPosTapok) {
				this.maskTapok.x = this.maxPosTapok;
				this.detikTapok.destroy();
				this.detikTapok = null;
				this.bgJam.kill();
				this.memarTapok.kill();
				this.adonTapok.animations.add('chAdon', [1]);
				this.adonTapok.play('chAdon');
				this.gTapok.destroy();
				this.gBarTapok.destroy();
				this.endAdon();
			}
			this.flagTapok = false;
		}, this);
	},

	genPotong:function()
	{
		this.gBack = game.add.group();
		this.gRaw = game.add.group();
		this.gSlice = game.add.group();
		this.gGaris = game.add.group();
		this.gFront = game.add.group();
		this.gDepan.add(this.gBack);
		this.gDepan.add(this.gRaw);
		this.gDepan.add(this.gSlice);
		this.gDepan.add(this.gGaris);
		this.gDepan.add(this.gFront);

		this.telenan = global.addSprite(this.gw*0.5, this.gh*0.8, 'tools_telenan');
		this.telenan.anchor.setTo(0.5, 1);
		this.telenan.scale.setTo(0.8, 0.8);
		this.gBack.add(this.telenan);

		var idxPizza = datagames.jnsPizza - 1;
		// var resep = datagames.resep[idxPizza][this.ctrRaw];
		var resep = datagames.potong[idxPizza][this.ctrRaw];
		// console.trace(resep, idxPizza, this.ctrRaw);
		// console.trace(window['Raw_'+resep]);
		this.genRaw(window['Raw_'+resep]);
		// this.genRaw(window['Raw_3']);
		// trace(telenan.x-telenan.width*0.5, telenan.y-telenan.height*0.9);

		// var raw = new Raw_1(game, telenan.x-telenan.width*0.5, telenan.y-telenan.height*0.9);
		// this.gRaw.add(raw);

		// this.initGarisPotong(raw);
		this.posPisau.push(this.telenan.x + this.telenan.width*0.2);
		this.posPisau.push(this.telenan.y - this.telenan.height*0.6);
		this.pisauPotong = global.addSprite(this.posPisau[0], this.posPisau[1], 'tools_lading');
		this.pisauPotong.scale.setTo(0.8, 0.8);
		this.pisauPotong.anchor.setTo(0.5, 0.5);
		this.gFront.add(this.pisauPotong);

		this.pisauPotong.inputEnabled = true;
		this.pisauPotong.input.enableDrag();
		this.pisauPotong.events.onInputDown.add(function() {
			this.flagPotong = true;
		}, this);
		this.pisauPotong.events.onInputUp.add(function() {
			this.flagPotong = false;
		}, this);

		// console.trace(gRaw)
	},

	genRaw:function(cls)
	{
		// console.trace(cls);
		var raw = new cls(game);
		// var raw = new Raw_3(game);
		this.gRaw.add(raw);
		this.initGarisPotong(raw);
		this.flagCrPotong = true;
	},

	genSlice:function(raw)
	{
		var posX = raw.posXSlice[raw.jmlSlice];
		var posY = raw.posYSlice;
		raw.jmlSlice++;
		// trace("RAAAWW", raw.jmlSlice);
		var slice = global.addSprite(posX, posY, 'potong_slice_'+raw.tipe);
		this.gSlice.add(slice);
	},

	checkPotong:function()
	{
		this.posAwalPotongX = null;
		this.posAwalPotongY = null;
		if(datagames.bgm) {
			this.audioIris.play();
		}
		this.gRaw.forEachAlive(function(item) {
			if(item instanceof Raw_8) {
				this.garis.kill();
				this.garis = null;
				this.panahPotong.kill();
				this.panahPotong = null;
				item.potong();
				this.flagPotong = false;
				this.initPanahPotong(item);
				if(!item.inputEnabled) {
					item.inputEnabled = true;
					item.input.pixelPerfectClick = true;
					item.events.onInputUp.add(function() {
						global.clickbtn();
						if(item.potong()) {
							this.genSlice(item);
							this.initPanahPotong(item);
						}
						else {
							for(var i=0;i<2;i++) {
								this.genSlice(item);
							}
							this.panah.kill();
							this.resetPotong();
						}
					}, this);
				}
				return;
			}

			if(item.potong()) {
				// console.trace(item.stepPos, item.sliceInit);
				if(item.stepPos > item.sliceInit)
					this.genSlice(item);
				this.initGarisPotong(item);
			}
			else {
				for(var i=0;i<2;i++) {
					this.genSlice(item);
				}
				if(this.garis != null) {
					this.garis.kill();
					this.panahPotong.kill();
				}

				this.resetPotong();
			}
		}, this);
	},

	endPotong:function()
	{
		// this.gBack.destroy();
		this.gRaw.destroy();
		this.gSlice.destroy();
		this.gGaris.destroy();
		this.gFront.destroy();
	},

	resetPotong:function()
	{
		this.flagCrPotong = false;
		this.ctrRaw++;
		this.pisauPotong.input.disableDrag();
		var tw2 = game.add.tween(this.pisauPotong).to({x:this.posPisau[0], y:this.posPisau[1]}, 250, Phaser.Easing.Linear.None, true);
		tw2.onComplete.add(function() {
			this.pisauPotong.input.enableDrag();
		}, this);
		this.gSlice.forEachAlive(function(slice) {
			var tween = game.add.tween(slice).to({x:this.world.width}, 500, Phaser.Easing.Linear.None, true, 250);
			tween.onComplete.add(function() {
				slice.kill();
				if(!this.flagCrPotong) {
					var idxPizza = datagames.jnsPizza - 1;
					// var resep = datagames.resep[idxPizza][this.ctrRaw];
					var resep = datagames.potong[idxPizza][this.ctrRaw];
					if(resep == null) {
						this.endPotong();
						if(datagames.bgm) {
							this.audioAscend.play();
						}
						if(!this.flagBentuk) {
							// if(datagames.tutor[1] == 0) {
							// 	this.genTutor();
							// }
							// else {
								this.genBentuk();
							// }
							this.flagBentuk = true;
						}
						return;
					}
					
					
					this.genRaw(window['Raw_'+resep]);
				}
			}, this);
		}, this);
	},

	initGarisPotong:function(raw)
	{
		var jnsG = raw.slicePos[raw.stepPos];
		var posXG = raw.posXGaris[raw.stepPos];
		var posYG = raw.posYGaris[raw.stepPos];
		if(posXG != 'undefined') {
			// console.trace(raw.step);
			if(raw instanceof Raw_17) {
				// if(raw.step != 1 || raw.step != 4) {
					// game.time.events.add(Phaser.Timer.SECOND*0.5, function() {
						// this.genGarisPotong(posXG, posYG, jnsG);
					// }, this);
					// return;
				// }
				// else {
				if(raw.step != 1 && raw.step != 4) {
					this.genGarisPotong(posXG, posYG, jnsG);
				}
			}
			else if(raw instanceof Raw_11) {
				if(raw.step != 1 && raw.step != 5) {
					this.genGarisPotong(posXG, posYG, jnsG);
				}
			}
			else {
				this.genGarisPotong(posXG, posYG, jnsG);
			}
		}
	},

	genGarisPotong:function(x, y, jns)
	{
		// trace(x, y);
		if(this.garis != null)
			this.garis.kill();
		if(this.panahPotong != null)
			this.panahPotong.kill();


		this.garis = global.addSprite(x, y, "tools_garis_"+jns);
		var xPnh, yPnh;
		if(jns == "v") {
			xPnh = x;
			yPnh = y - this.garis.height * 0.45;
		}
		this.panahPotong = global.addSprite(xPnh, yPnh, "tools_panah_"+jns);

		if(jns == "v") {
			this.flagVertPotong = true;
		}
		else {
			this.flagVertPotong = false;
		}
		this.garis.scale.setTo(0.5, 0.5);
		this.garis.anchor.setTo(0.5, 0.5);
		this.gGaris.add(this.garis);

		this.panahPotong.anchor.setTo(0.5, 0.5);
		this.panahPotong.scale.setTo(0.4, 0.4);
		// this.panahPotong.alpha = 0;
		this.gGaris.add(this.panahPotong);
		if(jns == "v")
			game.add.tween(this.panahPotong).to({y: this.panahPotong.y + 20}, 350, Phaser.Easing.Linear.None, true, 0, -1, true);
	},

	initPanahPotong:function(raw)
	{
		var jnsP = raw.panahPos[raw.stepPos-1];
		var posXP = raw.posXPanah[raw.stepPos-1];
		var posYP = raw.posYPanah[raw.stepPos-1];
		if(posXP != 'undefined')
			this.genPanahPotong(posXP, posYP, jnsP);
	},

	genPanahPotong:function(x, y, jns)
	{
		if(this.panah != null)
			this.panah.kill();

		this.panah = global.addSprite(x, y, "tools_panah_"+jns);
		// console.trace(this.panah);
		if(this.panah != null) {
			this.panah.scale.setTo(0.5, 0.5);
			this.panah.anchor.setTo(0.5, 0.5);
			this.gGaris.add(this.panah);
			game.add.tween(this.panah).to({x:this.panah.x + 20}, 250, Phaser.Easing.Linear.None, true, 0, -1, true);
		}
	},

	genBentuk:function()
	{
		// hack
		// this.telenan = global.addSprite(this.gw*0.5, this.gh*0.5, 'tools_telenan');
		// this.telenan.anchor.setTo(0.5, 1);
		// this.telenan.scale.setTo(0.8, 0.8);
		// this.gBack.add(this.telenan);
		// hack

		this.gPizzaBentuk = game.add.group();
		this.gMidBentuk = game.add.group();
		this.gFrontBentuk = game.add.group();
		this.gBarBentuk = game.add.group();
		this.gCont.add(this.gBarBentuk);
		this.gDepan.add(this.gPizzaBentuk);
		this.gDepan.add(this.gMidBentuk);
		this.gDepan.add(this.gFrontBentuk);
		// this.gDepan.add(this.gBarBentuk);

		this.adonTapok2 = global.addSprite(this.telenan.x - 25, this.telenan.y - this.telenan.height*0.55, "tapok_adon_2");
		this.adonTapok2.scale.setTo(0.8, 0.8);
		this.adonTapok2.anchor.setTo(0.5, 0.5);
		this.gPizzaBentuk.add(this.adonTapok2);

		this.memarTapok2 = global.addSprite(this.telenan.x - 80, this.telenan.y - 285, 'tapok_memar');
		// this.memarTapok.scale.setTo(0.8, 0.8);
		this.gMidBentuk.add(this.memarTapok2);
		// this.memarTapok.visible = false;

		this.tanganTapok2 = global.addSprite(this.telenan.x - 25, this.telenan.y + 200, 'tangan_1');
		this.tanganTapok2.anchor.setTo(0.5, 1);
		this.tanganTapok2.scale.setTo(0.8, 0.8);
		this.gFrontBentuk.add(this.tanganTapok2);
		this.tanganTapok2.inputEnabled = true;
		this.tanganTapok2.events.onInputDown.add(this.onBentukAdonan, this);

		// var pnlBar = global.addSprite(global.deviceWidth*0.48, global.deviceHeight, 'tapok_pnl_bar');
		var pnlBar = global.addSprite(this.gw*0.48, this.gh, 'tapok_pnl_bar');
		pnlBar.anchor.setTo(0.5, 1);
		// pnlBar.scale.setTo(0.5, 1);
		// this.barWSc = Math.floor(global.deviceWidth / pnlBar.width);
		// this.barWSc = global.deviceWidth / pnlBar.width;
		// this.barHSc = pnlBar.height;
		// pnlBar.width = global.deviceWidth;
		// pnlBar.height *= this.barWSc;
		utils.floor(pnlBar);
		
		this.gBarBentuk.add(pnlBar);

		// this.barTapok = global.addSprite(pnlBar.x+8*this.barWSc, pnlBar.y - pnlBar.height*0.46, 'tapok_bar');
		this.barTapok = global.addSprite(pnlBar.x+8, pnlBar.y - pnlBar.height*0.46, 'tapok_bar');
		this.barTapok.anchor.setTo(0.5, 0.5);
		// this.barTapok.width *= this.barWSc;
		// this.barTapok.height *= this.barWSc;
		utils.floor(this.barTapok);
		this.gBarBentuk.add(this.barTapok);

		this.maskTapok = game.add.graphics();
		this.maskTapok.beginFill(0x000000);
		this.maskTapok.drawRect(0, 0, this.barTapok.width, this.barTapok.height);
		this.maskTapok.x = this.barTapok.x - this.barTapok.width*0.5;
		this.maxPosTapok = this.maskTapok.x;
		this.maskTapok.y = this.barTapok.y - this.barTapok.height*0.5;
		this.maskTapok.x -= this.barTapok.width;
		this.gBarBentuk.add(this.maskTapok);

		this.barTapok.mask = this.maskTapok;

		this.bgJam = global.addSprite(this.gw*0.7, this.gh*0.3, 'tapok_jam');
		this.bgJam.scale.setTo(0.8, 0.8);
		this.bgJam.anchor.setTo(0.5, 0.5);
		this.gFrontBentuk.add(this.bgJam);

		this.detikBentuk = global.addSprite(this.bgJam.x + this.bgJam.width*0.45, this.bgJam.y, 'tapok_jam_detik');
		this.detikBentuk.scale.setTo(0.8, 0.8);
		this.detikBentuk.anchor.setTo(0.5, 0.8);
		this.gFrontBentuk.add(this.detikBentuk);
	},

	onBentukAdonan:function()
	{
		if(this.flagTapok || this.gPause.visible)
			return;

		// if(this.maskTapok.x >= 96.8)
		// 	return;

		global.clickbtn();
		this.flagTapok = true;
		this.memarTapok2.visible = false;
		var tween = game.add.tween(this.tanganTapok2.scale).to({x:1, y:1}, 200, Phaser.Easing.Linear.None, true);
		tween.onComplete.add(function() {
			this.tanganTapok2.scale.setTo(0.8, 0.8);
			this.memarTapok2.visible = true;
			this.maskTapok.x += 22;
			if(this.ctrTgnBentuk > 0) {
				this.ctrTgnBentuk--;
				if(this.ctrTgnBentuk <= 0) {
					// console.trace(this.detikBentuk.angle);
					this.tanganTapok2.destroy();
					this.memarTapok2.destroy();
					this.tanganBentuk = global.addSprite(this.telenan.x - 25, this.telenan.y + 350, 'tangan_3');
					this.tanganBentuk.scale.setTo(0.8, 0.8);
					this.tanganBentuk.anchor.setTo(0.5, 1);
					this.gFrontBentuk.add(this.tanganBentuk);
					// this.detikBentuk = null;
					this.tanganBentuk.inputEnabled = true;
					this.tanganBentuk.events.onInputDown.add(this.onBentukAdonan2, this);
					this.pizza = global.addSprite(this.adonTapok2.x, this.adonTapok2.y, 'pizza_adon_'+datagames.jnsPizza);
					this.pizza.scale.setTo(0.8, 0.8);
					this.pizza.anchor.setTo(0.5, 0.5);
					this.gPizzaBentuk.add(this.pizza);
					this.pizza.alpha = 0;
				}
			}
			this.flagTapok = false;
		}, this);
	},

	onBentukAdonan2:function()
	{
		if(this.flagTapok || this.gPause.visible)
			return;

		if(this.maskTapok.x >= this.barTapok.x - this.barTapok.width*0.5)
			return;

		// var test = (this.barTapok.x - this.barTapok.width*0.5) / this.maskTapok.x
		global.clickbtn();
		this.flagTapok = true;
		var tween = game.add.tween(this.tanganBentuk).to({y:this.tanganBentuk.y - 50}, 200, Phaser.Easing.Linear.None, true);
		tween.onComplete.add(function() {
			this.tanganBentuk.y = this.telenan.y + 350;
			this.maskTapok.x += 25;
			if(this.pizza.alpha < 1) {
				this.pizza.alpha += 0.06;
				if(this.pizza.alpha > 1)
					this.pizza.alpha = 1;
			}
			else {
				this.pizza.alpha = 1;
			}
			if(this.adonTapok2.alpha > 0) {
				this.adonTapok2.alpha -= 0.06;
			}

			// if(this.maskTapok.x >= 96.8) {
			if(this.maskTapok.x >= this.barTapok.x - this.barTapok.width*0.5) {
				// console.trace(this.flagCekSalahBentuk, this.detikBentuk.angle);
				if(!this.flagCekSalahBentuk) {
					if(this.detikBentuk.angle < 0)
						this.nilaiMasak++;
						// trace("bentuk nilai ++");
				}
				// trace("BENTUK BUYAARR");
				this.maskTapok.x = this.barTapok.x - this.barTapok.width*0.5;
				this.detikBentuk.destroy();
				this.bgJam.destroy();
				this.detikBentuk = null;
				this.tanganBentuk.kill();
				this.pizza.alpha = 1;
				// this.pizza = global.addSprite(this.adonTapok2.x, this.adonTapok2.y, 'pizza_adon_'+datagames.jnsPizza);
				// this.pizza.scale.setTo(0.8, 0.8);
				// this.pizza.anchor.setTo(0.5, 0.5);
				// this.gPizzaBentuk.add(this.pizza);
				this.adonTapok2.kill();
				this.gBarBentuk.destroy();
				this.memarTapok2.destroy();
				game.add.tween(this.gPizzaBentuk).to({x:this.world.width}, 500, Phaser.Easing.Linear.None, true, 250);
				var tween = game.add.tween(this.gBack).to({x:this.world.width}, 500, Phaser.Easing.Linear.None, true, 250);
				if(datagames.bgm) {
					this.audioAscend.play();
				}
				tween.onComplete.add(function() {
					// if(datagames.tutor[1] == 0) {
					// 	this.genTutor();
					// }
					// else {
						this.genSaosinPizza();
					// }
				}, this);
			}
			this.flagTapok = false;
		}, this);
	},

	genSaosinPizza: function()
	{
		this.gBackSaos = game.add.group();
		// this.gMidSaos = game.add.group();
		this.gPizzaFull = game.add.group();
		this.gFrontSaos = game.add.group();
		// this.gAccSaos = game.add.group();

		this.gDepan.add(this.gBackSaos);
		// this.gDepan.add(this.gMidSaos);
		this.gDepan.add(this.gPizzaFull);
		this.gDepan.add(this.gFrontSaos);
		// this.gDepan.add(this.gAccSaos);

		this.nampan = global.addSprite(this.gw*0.5, this.gh*0.7, 'tools_nampan');
		// this.nampan.scale.setTo(0.9, 0.9);
		this.nampan.anchor.setTo(0.5, 1);
		this.gBackSaos.add(this.nampan);

		this.pizza = global.addSprite(this.nampan.x, this.nampan.y - this.nampan.height*0.1, 'pizza_kosong_'+datagames.jnsPizza);
		// this.pizza = global.addSprite(this.nampan.x, this.nampan.y - this.nampan.height*0.1, 'pizza_baked_'+datagames.jnsPizza);
		// this.pizza.scale.setTo(0.8, 0.8);
		this.pizza.anchor.setTo(0.5, 1);
		this.gPizzaFull.add(this.pizza);
		this.gPizzaFull.pivot.setTo(this.pizza.x, this.pizza.y - this.pizza.height*0.5);
		this.gPizzaFull.x = this.pizza.x;
		this.gPizzaFull.y = this.pizza.y - this.pizza.height*0.5;

		this.pizzaBaked = global.addSprite(this.pizza.x, this.pizza.y, 'pizza_baked_'+datagames.jnsPizza);
		// this.pizzaBaked = global.addSprite(this.nampan.x, this.nampan.y - this.nampan.height*0.1, 'pizza_baked_'+datagames.jnsPizza);
		// this.pizzaBaked = global.addSprite(this.pizza.x, this.pizza.y, 'pizza_baked_'+1);
		this.pizzaBaked.anchor.setTo(0.5, 1);
		this.pizzaBaked.visible = false;
		this.gPizzaFull.add(this.pizzaBaked);

		this.saosBawah = global.addSprite(this.pizza.x, this.pizza.y, 'saos_bawah_'+datagames.jnsPizza);
		// this.saosBawah.scale.setTo(0.8, 0.8);
		this.saosBawah.anchor.setTo(0.5, 1);
		this.gPizzaFull.add(this.saosBawah);
		this.saosBawah.alpha = 0;	// hack

		this.saosAtas = global.addSprite(this.pizza.x, this.pizza.y, 'saos_atas_'+datagames.jnsPizza);
		// this.saosAtas.scale.setTo(0.8, 0.8);
		this.saosAtas.anchor.setTo(0.5, 1);
		this.gPizzaFull.add(this.saosAtas);
		this.saosAtas.alpha = 0;		// hack

		// hack
		// this.genTopping();
		// return;
		//hack

		this.saos = global.addSprite(this.pizza.x - this.pizza.width*0.4, this.gh*0.8, 'saos_botol_'+datagames.saos[datagames.jnsPizza-1]);
		this.saos.scale.setTo(0.8, 0.8);
		this.saos.anchor.setTo(0.5, 1);
		this.gFrontSaos.add(this.saos);
		this.saos.inputEnabled = true;
		this.saos.events.onInputDown.add(this.onSaosDown, this);

		// this.saos = global.addSprite(this.pizza.x - this.pizza.width*0.4, this.gh*0.8, 'anim_saos_'+datagames.saos[datagames.jnsPizza-1]+'/0000');
		// this.saos = global.addSprite(this.gw*0.57, this.gh*0.35, 'anim_saos_'+datagames.saos[datagames.jnsPizza-1]+'/0000');
		// this.saos.anchor.setTo(0.5, 0.5);
		// this.saos.scale.setTo(0.8, 0.8);
		// this.saos.animations.add('saosPlay', Phaser.Animation.generateFrameNames('anim_saos_'+datagames.saos[datagames.jnsPizza-1]+'/', 0, 81, '', 4), 30);
		// this.saos.animations.play('saosPlay');
		// this.gFrontSaos.add(this.saos);

		// this.solet = global.addSprite(this.pizza.x + this.pizza.width*0.35, this.gh*0.75, 'tools_solet');
		// this.solet.scale.setTo(0.8, 0.8);
		// this.solet.anchor.setTo(0.5, 1);
		// this.solet.angle = 20;
		// this.gFrontSaos.add(this.solet);

		this.panahSaos = global.addSprite(this.saos.x + 165, this.saos.y - this.saos.height*0.3, 'tools_panah_h');
		this.panahSaos.scale.setTo(-0.5, 0.5);
		this.panahSaos.anchor.setTo(0, 0.5);
		game.add.tween(this.panahSaos).to({x: this.panahSaos.x-20}, 250, Phaser.Easing.Linear.None, true, 0, -1, true);
		this.gFrontSaos.add(this.panahSaos);
	},

	onSaosDown: function(obj)
	{
		// if(this.saosBawah.alpha >= 1)
		// 	return;
		global.clickbtn();
		game.add.tween(this.saosBawah).to({alpha: 1}, 1000, Phaser.Easing.Linear.None, true);
		this.panahSaos.destroy();
		this.saos.destroy();
		this.animSaos = global.addSprite(this.gw*0.57, this.gh*0.35, 'anim_saos_'+datagames.saos[datagames.jnsPizza-1]+'/0000');
		this.animSaos.anchor.setTo(0.5, 0.5);
		this.animSaos.scale.setTo(0.8, 0.8);
		this.gFrontSaos.add(this.animSaos);
		this.animSaos.animations.add('saosPlay', Phaser.Animation.generateFrameNames('anim_saos_'+datagames.saos[datagames.jnsPizza-1]+'/', 0, 81, '', 4), 30);
		this.animSaos.animations.play('saosPlay');
		this.animSaos.animations.currentAnim.onComplete.add(this.onAnimSaosComplete, this);
		// this.saosBawah.alpha += 0.2;
		// if(this.saosBawah.alpha >= 1) {
		// 	this.panahSaos.kill();
		// 	this.saos.kill();
		// 	this.solet.angle = 0;
		// 	this.solet.inputEnabled = true;
		// 	this.solet.events.onInputDown.add(this.onSoletDown, this);
		// 	this.solet.events.onInputUp.add(function() {
		// 		this.flagMoveSolet = false;
		// 	}, this)
		// 	this.solet.input.enableDrag();
		// }
	},

	onAnimSaosComplete: function()
	{
		this.puterSolet = global.addSprite(this.pizza.x, this.pizza.y - this.pizza.height*0.5, 'adon_puter');
		this.puterSolet.anchor.setTo(0.5, 0.5);
		this.puterSolet.scale.setTo(0.5, 0.5);
		this.gFrontSaos.add(this.puterSolet);
		this.solet = global.addSprite(this.pizza.x + this.pizza.width*0.35, this.gh*0.75, 'tools_solet');
		this.solet.scale.setTo(0.8, 0.8);
		this.solet.anchor.setTo(0.5, 1);
		this.solet.angle = 20;
		this.gFrontSaos.add(this.solet);
		this.solet.angle = 0;
		this.solet.inputEnabled = true;
		this.solet.events.onInputDown.add(this.onSoletDown, this);
		this.solet.events.onInputUp.add(function() {
			if(this.puterSolet)
				this.puterSolet.visible = true;
			this.flagMoveSolet = false;
		}, this)
		// this.solet.input.enableDrag();
	},

	onSoletDown: function()
	{
		if(this.puterSolet)
			this.puterSolet.visible = false;
		this.flagMoveSolet = true;
		this.flagSoletKiri = true;
		this.posAwalSolet = this.solet.x;
		this.posSelisihInput.x = this.solet.x - game.input.x;
		this.posSelisihInput.y = this.solet.y - game.input.y;
	},

	endSolet: function()
	{
		this.saosAtas.alpha = 1;
		this.animSaos.destroy();
		this.puterSolet.destroy();
		this.flagMoveSolet = false;
		// if(datagames.tutor[1] == 0) {
		// 	this.genTutor();
		// }
		// else {
			this.genTopping();
		// }
		this.solet.destroy();
		// game.add.tween(this.gBackSaos).to({y: this.gBackSaos.y - 100}, 250, Phaser.Easing.Linear.None, true);
		// game.add.tween(this.gFrontSaos).to({y: this.gBackSaos.y - 100}, 250, Phaser.Easing.Linear.None, true);
	},

	genTopping: function()
	{
		this.gMaskTop = game.add.group();
		this.gBackTop = game.add.group();
		this.gMidTop = game.add.group();
		this.gDragTop = game.add.group();
		this.gFrontTop = game.add.group();
		// this.gTataTop = game.add.group();
		this.gListTop = game.add.group();
		this.gListTop.add(this.gBackTop);
		this.gListTop.add(this.gMidTop);
		this.gListTop.add(this.gFrontTop);
		this.gListTop.add(this.gDragTop);
		// this.gListTop.add(this.gTataTop);
		this.gNavTop = game.add.group();
		this.gDepan.add(this.gMaskTop);
		this.gDepan.add(this.gListTop);
		this.gDepan.add(this.gNavTop);
		this.gDepan.add(this.gDragTop);
		// this.gDepan.add(this.gTataTop);

		var jns = datagames.jnsPizza-1;
		var posX = [];
		var posY = [];

		// console.trace(jns);

		if(datagames.resep[jns].length == 2) {
			posX = [this.gw*0.33, this.gw*0.67];
			for(var i=0;i<2;i++) {
				posY.push(this.gh*0.85);
			}
		}
		else if(datagames.resep[jns].length == 4) {
			posX = [this.gw*0.17, this.gw*0.35, this.gw*0.65, this.gw*0.83];
			posY = [this.gh*0.82, this.gh*0.93, this.gh*0.93, this.gh*0.82];
		}
		else {
			var _a = 0.28;
			for(var i=0;i<6;i++) {
				posX.push(this.gw*_a);
				if(i==2)
					_a += 0.29;
				else
					_a += 0.22;
				var y;
				if(i==1 || i==4)
					y = this.gh*0.92;
				else
					y = this.gh*0.82;

				posY.push(y);
			}
		}

		// console.trace(jns, datagames.resep[jns].length, datagames.resep[jns]);
		trace("JNSSS", jns);
		for(var i=1;i<=datagames.resep[jns].length;i++) {
			var mangkokBack = global.addSprite(posX[i-1], posY[i-1], 'mangkok_back');
			mangkokBack.anchor.setTo(0.5, 1);
			mangkokBack.scale.setTo(0.9, 0.9);
			this.gBackTop.add(mangkokBack);

			this['topping_'+i] = global.addSprite(mangkokBack.x, mangkokBack.y, 'topping_'+datagames.resep[jns][i-1]);
			this['topping_'+i].anchor.setTo(0.5, 1);
			this['topping_'+i].scale.setTo(0.9, 0.9);
			// this['topping_'+i].idx = datagames.resep[jns][i-1];
			this['topping_'+i].idx = i;
			this.gMidTop.add(this['topping_'+i]);
			this.flagTopIn[i-1] = false;
			// this['topping_'+i].inputEnabled = true;
			// this['topping_'+i].events.onInputDown.add(this.onToppingDown, this);

			this['dragItem_'+i] = global.addSprite(this['topping_'+i].x, this['topping_'+i].y, 'drag_topping_'+datagames.resep[jns][i-1]);
			this['dragItem_'+i].scale.setTo(0.9, 0.9);
			this['dragItem_'+i].anchor.setTo(0.5, 1);
			this['dragItem_'+i].inputEnabled = true;
			this['dragItem_'+i].posX = this['dragItem_'+i].x;
			this['dragItem_'+i].posY = this['dragItem_'+i].y;
			this['dragItem_'+i].idx = i;
			this['dragItem_'+i].idxDrag = datagames.resep[jns][i-1];
			this['dragItem_'+i].input.enableDrag();
			this['dragItem_'+i].events.onInputUp.add(this.onDragUp, this);
			if(jns == 1 || jns == 4) {
				if(i > 3)
					this['dragItem_'+i].visible = false;
			}
			// this['dragItem_'+i].visible = false;
			this.gDragTop.add(this['dragItem_'+i]);

			var mangkokFront = global.addSprite(mangkokBack.x, mangkokBack.y, 'mangkok_front');
			mangkokFront.anchor.setTo(0.5, 1);
			mangkokFront.scale.setTo(0.9, 0.9);
			this.gFrontTop.add(mangkokFront);
		}

		// console.trace(this.flagTopIn);

		if(datagames.resep[jns].length <= 4)
			return;

		this.maskTop = game.add.graphics(0, 0);
		this.maskTop.beginFill(0x000000);
		this.maskTopW = 470;
		this.maskTop.drawRect(0, 0, this.maskTopW, 250);
		this.maskTop.x = this.topping_1.x - this.topping_1.width*0.5;
		this.maskTop.y = this.topping_1.y - this.topping_1.height;
		this.gMaskTop.add(this.maskTop);

		this.gListTop.mask = this.maskTop;

		this.prevTop = global.addSprite(this.gw*0.15, this.gh*0.87, 'tools_btn_next');
		// this.prevTop.scale.setTo(-0.6, 0.6);
		this.prevTop.scale.setTo(-0.8, 0.8);
		this.prevTop.anchor.setTo(0.5, 0.5);
		this.prevTop.visible = false;
		// game.add.tween(this.prevTop).to({x:this.prevTop.x - 20}, 250, Phaser.Easing.Linear.None, true, 0, -1, true);
		this.gNavTop.add(this.prevTop);

		this.nextTop = global.addSprite(this.gw*0.85, this.gh*0.87, 'tools_btn_next');
		// this.nextTop.scale.setTo(0.6, 0.6);
		this.nextTop.scale.setTo(0.8, 0.8);
		this.nextTop.anchor.setTo(0.5, 0.5);
		// game.add.tween(this.nextTop).to({x:this.nextTop.x + 20}, 250, Phaser.Easing.Linear.None, true, 0, -1, true);
		this.gNavTop.add(this.nextTop);

		this.prevTop.inputEnabled = true;
		this.prevTop.events.onInputDown.add(this.onNavTopDown, this);
		this.nextTop.inputEnabled = true;
		this.nextTop.events.onInputDown.add(this.onNavTopDown, this);
	},

	onNavTopDown: function(obj)
	{
		if(this.gPause.visible || this.flagMoveTop)
			return;

		this.prevTop.visible = false;
		this.nextTop.visible = false;
		global.clickbtn();
		this.gDragTop.forEachAlive(function(item) {
			item.visible = false;
		}, this);
		this.flagMoveTop = true;
		if(obj == this.prevTop) {
			var tween = game.add.tween(this.gListTop).to({x:this.gListTop.x + this.maskTopW}, 350, Phaser.Easing.Sinusoidal.Out, true);
			game.add.tween(this.gDragTop).to({x:this.gListTop.x + this.maskTopW}, 350, Phaser.Easing.Sinusoidal.Out, true);
			tween.onComplete.add(function() {
				this.nextTop.visible = true;
				this.flagMoveTop = false;
				for(var i=1;i<=3;i++) {
					this['dragItem_'+i].visible = true;
				}
			}, this);
		}
		else {
			var tween = game.add.tween(this.gListTop).to({x:this.gListTop.x - this.maskTopW}, 350, Phaser.Easing.Sinusoidal.Out, true);
			game.add.tween(this.gDragTop).to({x:this.gListTop.x - this.maskTopW}, 350, Phaser.Easing.Sinusoidal.Out, true);
			tween.onComplete.add(function() {
				this.prevTop.visible = true;
				this.flagMoveTop = false;
				for(var i=4;i<=datagames.resep[datagames.jnsPizza-1].length;i++) {
					this['dragItem_'+i].visible = true;
				}
			}, this);
		}
	},

	onToppingDown: function(obj)
	{
		if(this.flagMoveTop || this.flagDragTop || this.gPause.visible)
			return;

		obj.input.enableDrag();
	},

	onDragUp: function(obj)
	{
		var _x = obj.x;
		var _y = obj.y;
		var _h = obj.height;
		if(datagames.jnsPizza == 2 || datagames.jnsPizza == 5) {
			if(obj.idx > 3)
				_x = obj.x - this.maskTopW;
		}

		// if(game.input.x < this.pizza.x - this.pizza.width*0.4 || game.input.x > this.pizza.x + this.pizza.width*0.4) {
		if(_x < this.pizza.x - this.pizza.width*0.45 || _x > this.pizza.x + this.pizza.width*0.45) {
			// trace("x tidak bisa");
			obj.x = obj.posX;
			obj.y = obj.posY;
			return;
		}

		// if(game.input.y > this.pizza.y - this.pizza.height*0.1 || game.input.y < this.pizza.y - this.pizza.height*0.9) {
		if(_y - _h*0.5 > this.pizza.y || _y - _h*0.5 < this.pizza.y - this.pizza.height*0.9) {
			// trace("y tidak bisa", _y, this.pizza.y, this.pizza.height);
			obj.x = obj.posX;
			obj.y = obj.posY;
			return;
		}

		global.clickbtn();
		var itemTop = global.addSprite(_x, _y, 'drag_topping_'+obj.idxDrag);
		itemTop.scale.setTo(0.9, 0.9);
		itemTop.anchor.setTo(0.5, 1);
		itemTop.inputEnabled = true;
		this.gPizzaFull.add(itemTop);
		this.flagTopIn[obj.idx-1] = true;
		itemTop.input.enableDrag(false, true, true);
		// this.gTataTop.add(itemTop);
		obj.x = obj.posX;
		obj.y = obj.posY;

		// var stat = true;
		// for(var i=0;i<this.flagTopIn.length;i++) {
		// 	if(!this.flagTopIn[i])
		// 		stat = false;
		// }

		// if(stat) {
		if(this.btnDoneTop == null) {
			// console.trace("HARUSNYA KELUAR DONE");
			this.btnDoneTop = global.addSprite(this.gw, this.gh*0.15, 'tools_btn_done');
			this.btnDoneTop.scale.setTo(0.7, 0.7);
			this.btnDoneTop.anchor.setTo(1, 0);
			this.gDepan.add(this.btnDoneTop);
			// this.gFrontTop.add(this.btnDoneTop);
			this.btnDoneTop.inputEnabled = true;
			this.btnDoneTop.events.onInputDown.add(this.endTopping, this);
		}		
		// }
	},

	endTopping: function()
	{
		// trace("END TOPPING");
		var nm = 0;
		for(var i=0;i<this.flagTopIn.length;i++) {
			if(this.flagTopIn[i]) {
				// trace("salah masak 2");
				// this.nilaiMasak++;
				nm++;
			}
		}
		// console.trace(nm);
		nm = Math.round(nm/this.flagTopIn.length);
		this.nilaiMasak += nm;
		// console.trace(nm);
		// trace("nilai", this.nilaiMasak);

		// game.add.tween(this.gBackTop).to({x: this.gw}, 500, Phaser.Easing.Linear.None, true);
		// game.add.tween(this.gMidTop).to({x: this.gw}, 500, Phaser.Easing.Linear.None, true);
		// game.add.tween(this.gFrontTop).to({x: this.gw}, 500, Phaser.Easing.Linear.None, true);
		global.clickbtn();
		game.add.tween(this.gListTop).to({x: this.gw}, 500, Phaser.Easing.Linear.None, true);
		game.add.tween(this.gDragTop).to({x: this.gw}, 500, Phaser.Easing.Linear.None, true);
		// game.add.tween(this.gTataTop).to({x: this.gw}, 500, Phaser.Easing.Linear.None, true);
		game.add.tween(this.gBackSaos).to({x: this.gw}, 500, Phaser.Easing.Linear.None, true);
		this.posAwalPizza = this.gPizzaFull.x;
		game.add.tween(this.gPizzaFull).to({x: this.gw + this.pizza.width*0.5}, 500, Phaser.Easing.Linear.None, true);
		var tween = game.add.tween(this.gFrontSaos).to({x: this.gw}, 500, Phaser.Easing.Linear.None, true);
		tween.onComplete.add(function() {
			this.gListTop.destroy();
			this.gDragTop.destroy();
			// this.gTataTop.destroy();
			this.gBackSaos.destroy();
			this.gFrontSaos.destroy();
			if(datagames.bgm) {
				this.audioAscend.play();
			}
			// if(datagames.tutor[1] == 0) {
			// 	this.genTutor();
			// }
			// else {
				this.genPanggang();
			// }
		}, this);
		this.btnDoneTop.destroy();
		this.gNavTop.destroy();
	},

	genPanggang: function()
	{
		this.gBackOven = game.add.group();
		this.gFrontOven = game.add.group();
		this.gBarOven = game.add.group();
		this.gCont.add(this.gBarOven);
		this.gDepan.add(this.gBackOven);
		this.gDepan.bringToTop(this.gPizzaFull);
		// this.gDepan.add(this.gPizzaFull);
		this.gDepan.add(this.gFrontOven);

		// this.gPizzaFull.forEachAlive(function(item) {
		// 	item.scale.setTo(0.8, 0.8);
		// }, this);
		this.gPizzaFull.scale.setTo(0.8, 0.8);

		this.oven = global.addSprite(this.gw*0.5, this.gh*0.8, 'oven_back');
		// this.oven.scale.setTo(0.8, 0.8);
		this.oven.anchor.setTo(0.5, 1);
		this.gBackOven.add(this.oven);

		this.gPizzaFull.x = this.posAwalPizza;
		this.gPizzaFull.y = this.gh - this.pizza.y + this.pizza.height;
		// this.gPizzaFull.y = this.gh - this.pizza.y ;
		var tween = game.add.tween(this.gPizzaFull).to({y: this.gh*0.58}, 500, Phaser.Easing.Linear.None, true);
		tween.onComplete.add(function() {
			this.ovenFr = global.addSprite(this.oven.x, this.oven.y, 'oven_front');
			this.ovenFr.anchor.setTo(0.5, 1);
			this.gFrontOven.add(this.ovenFr);

			// this.pnlBarOven = global.addSprite(global.deviceWidth*0.485, global.deviceHeight, 'tools_pb_oven');
			this.pnlBarOven = global.addSprite(this.gw*0.485, this.gh, 'tools_pb_oven');
			this.pnlBarOven.anchor.setTo(0.5, 1);
			// this.barWSc = global.deviceWidth / this.pnlBarOven.width;
			// this.pnlBarOven.width = global.deviceWidth;
			// this.pnlBarOven.height *= this.barWSc;
			utils.floor(this.pnlBarOven);

			// this.gFrontOven.add(this.pnlBarOven);
			this.gBarOven.add(this.pnlBarOven);
			this.pnlBarOven.inputEnabled = true;
			this.pnlBarOven.events.onInputDown.add(this.onPnlOvenDown, this);

			this.panahOven = global.addSprite(this.pnlBarOven.x + this.pnlBarOven.width*0.2, this.pnlBarOven.y - this.pnlBarOven.height*1.1, 'tools_panah_v');
			this.panahOven.anchor.setTo(0.5, 1);
			this.panahOven.scale.setTo(0.6, 0.6);
			// this.gFrontOven.add(this.panahOven);
			this.gBarOven.add(this.panahOven);
			utils.floor(this.panahOven);
			game.add.tween(this.panahOven).to({y: this.panahOven.y + 20}, 250, Phaser.Easing.Linear.None, true, 0, -1, true);

			// this.barOven = global.addSprite(this.gw*0.5, this.pnlBarOven.y - this.pnlBarOven.height*0.47, 'tools_bar_oven');
			this.barOven = global.addSprite(this.pnlBarOven.x + 8, this.pnlBarOven.y - this.pnlBarOven.height*0.47, 'tools_bar_oven');
			this.barOven.anchor.setTo(0.5, 0.5);
			// this.barOven.width *= this.barWSc;
			// this.barOven.height *= this.barWSc;
			utils.floor(this.barOven);
			// this.gFrontOven.add(this.barOven);
			this.gBarOven.add(this.barOven);

			this.maskOven = game.add.graphics(0, 0);
			this.maskOven.beginFill(0x000000);
			this.maskOven.drawRect(0, 0, this.barOven.width, this.barOven.height);
			this.maskOven.x = this.barOven.x - this.barOven.width*1.5;
			// this.maskOven.x = this.barOven.x - this.barOven.width*0.83;	// maks
			// this.maskOven.x = this.barOven.x - this.barOven.width*0.62;	// min
			this.maskOven.y = this.barOven.y - this.barOven.height*0.5;
			// this.gFrontOven.add(this.maskOven);
			this.gBarOven.add(this.maskOven);

			// hack
			// this.barOven.visible = false;
			// this.maskOven.alpha = 0.6;
			// hack

			this.barOven.mask = this.maskOven;
			this.flagOven = true;
			if(datagames.bgm) {
				this.audioMicrowave.play();
			}
		}, this);
	},

	onPnlOvenDown: function()
	{
		if(!this.flagOven)
			return;

		this.flagOven = false;
		global.clickbtn();
		this.panahOven.kill();
		// console.trace(this.maskOven.x, this.barOven.x, this.barOven.width);
		if(this.maskOven.x < this.barOven.x - this.barOven.width*0.62 && this.maskOven.x > this.barOven.x - this.barOven.width*0.83) {
			// trace("nilai oven ++");
			this.nilaiMasak++;
		}

		this.endPanggang();
	},

	endPanggang: function()
	{
		this.audioMicrowave.pause();
		// this.audioMicrowave.stop();
		this.pizzaBaked.visible = true;
		this.pizza.visible = false;
		this.gFrontOven.destroy();
		// datagames.doughScore = params;
		// console.trace(datagames.jnsPizza, datagames.score[datagames.jnsPizza]);
		if(datagames.score[datagames.jnsPizza] < this.nilaiMasak) {
			datagames.score[datagames.jnsPizza] = this.nilaiMasak;
		}
		datagames.awal[datagames.jnsPizza] = 1;
		// return;
		// trace("nilai masak total", this.nilaiMasak);

		var tween = game.add.tween(this.gPizzaFull).to({y: this.gPizzaFull.y + 150}, 500, Phaser.Easing.Linear.None, true);
		tween.onComplete.add(function() {
			game.time.events.add(Phaser.Timer.SECOND*1, function() {
				this.genClear(this.nilaiMasak, "ccookbook");
			}, this);
		}, this);
		// datagames.flagDough = true;
	},

	onResize: function() {
		// var s = utils.fitToAll(this.gw,this.gh, this.world.width, this.world.height);
		// gCont.scale.x = s.x;
		// gCont.scale.y = s.y;
		// gCont.y = (this.world.height-this.gh*s.y) * 0.5;
		// gCont.x = (this.world.width-this.gw*s.x) * 0.5;
		global.init();
		this.gCont.fitToCenter(BasicGame.gameWidth, BasicGame.gameHeight, global.width, global.height);
		// if (this.gBarTapok){
		// 	this.gBarTapok.fitToBottom(BasicGame.gameWidth, BasicGame.gameHeight, global.width, global.height);
		// }

		this.bg.stretch(this.world.width, this.world.height);
	}
};