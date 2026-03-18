cgame = function (game) {

};

cgame.inherit({

	preload: function() {
		this.bgVar = 'bg' + game.rnd.integerInRange(1, 3);
		Asset.png(this.bgVar);
		Asset.png('resultBg');
		Asset.atlaspng('inGame');
		Asset.spine('chara');
		Asset.spine('kids1');
		for(var a = 2; a <= 6; a++){
			Asset.atlaspng('kids' + a);
		}
		BaseState.prototype.preload.call(this);
	},
	init: function() {
		BaseState.prototype.init.call(this);
		// trace("INIT", this.bg_loader);
	},

	create: function () {
		BaseState.prototype.create.call(this);
		csound.play(0);
		game.physics.startSystem(Phaser.Physics.P2JS);
		game.physics.p2.setImpactEvents(true);
		game.physics.p2.world.defaultContactMaterial.friction = 0;
	    game.physics.p2.world.setGlobalStiffness(1e7);
	    game.physics.p2.gravity.y = 400;

	    this.cakeCollision = game.physics.p2.createCollisionGroup();
	    this.kidsCollision = game.physics.p2.createCollisionGroup();
	    game.physics.p2.updateBoundsCollisionGroup();

		this.input.maxPointers = 2;
		this.gTables = game.add.group();
		this.gStoves = game.add.group();
		this.gButton = game.add.group();
		this.gCakes = game.add.group();

		this.bg = game.add.sprite(this.gw * 0.5, this.gh * 0.5, this.bgVar, null);
		this.bg.anchor.setTo(0.5);
		// this.bg.isStretch = true;
		this.gBG.add(this.bg);

		this.pauseBtn = new cpause(game, this.gw * 0.1, this.gh * 0.05, this.gw, this.gh);
		this.pauseBtn.anchor.setTo(0.5);
		this.gButton.add(this.pauseBtn);

		this.soundBtn = new csound(game, this.gw * 0.9, this.pauseBtn.y);
		this.soundBtn.anchor.setTo(0.5);
		this.gButton.add(this.soundBtn);

		this.showCust = global.addSprite(this.gw * 0.18, this.gh * 0.95, 'inGame/showCust');
		this.showCust.anchor.setTo(0.5);
		this.gButton.add(this.showCust);

		this.custCount = global.addText(this.showCust.x - (this.showCust.height * 0.05), this.showCust.y + 5, '100', 40, game_config.font1);
		this.custCount.anchor.setTo(0, 0.5);
		this.custCount.fill = 'white';
		this.custCount.fontWeight = 'normal';
		this.gButton.add(this.custCount);

		this.tables = [];

		for(var a = 0; a < 3; a++){
			var posX = (this.gw * 0.22) + (a * 200) ;
			var posY = this.gh * 0.4;
			var table = global.addSprite(posX, posY, 'inGame/table');
			table.anchor.setTo(0.5);
			table.id = a;
			this.gTables.add(table);
			this.tables.push(table);
		}

		this.stoves = [];

		for(var a = 0; a < 3; a++){
			var posX = this.tables[a].x;
			var posY = this.gh * 0.85;
			var stove = global.addSprite(posX, posY, 'inGame/stove');
			stove.anchor.setTo(0.5);
			stove.id = a;
			stove.inputEnabled = true;
			stove.events.onInputDown.add(this.charaGoHere, this);
			this.gStoves.add(stove);
			this.stoves.push(stove);
		}

		this.timeBg = global.addSprite(this.stoves[0].x - (this.stoves[0].width * 0.6), this.stoves[0].y, 'inGame/cookprocess-bg');
		this.timeBg.anchor.setTo(0.5);
		this.gStoves.add(this.timeBg);

		this.timeBar = global.addSprite(0, this.timeBg.height * 0.46, 'inGame/cookprocess-bar');
		this.timeBar.anchor.setTo(0.5, 1);
		this.timeBar.scale.y = 0;
		this.timeBg.addChild(this.timeBar);

		this.timeFront = global.addSprite(0, 0, 'inGame/cookprocess-front');
		this.timeFront.anchor.setTo(0.5);
		this.timeBg.addChild(this.timeFront);

		this.timeBg.visible = false;

		chara.create(this.gw * 0.1, this.gh * 0.97);
		chara.hoho.scale.x = -0.45;
		chara.hoho.onClick.add(function(){
			if(!this.isCooking && !this.isMoving && this.hohoNow < 3){
				if(this.pauseBtn.isPaused) return;
				this.charaCooking();
			}
		}, this);

		chara.maxY = this.tables[0].y + (this.tables[0].height * 0.5);

		plRef.moneyInGame = 0;

		this.cookTime = plRef.cookTime;
		this.runSpeed = plRef.runSpeed;
		this.orScale = chara.hoho.scale.y;

		this.isMoving = false;
		this.isCooking = false;
		this.goX = 0;
		this.guestCount = (plRef.stageNow * 5);
		this.hohoFrom = '';
		this.hohoNow = 4;
		this.gameEnd = false;
		this.generateResult = false;
		this.nowTutor = 0;

		this.cakes = [];
		this.plates = [];

		this.result = new cresult(game, this.gw, this.gh, this.guestCount);

		this.gCont.add(this.gTables);
		this.gCont.add(this.gCakes);
		this.gCont.add(chara.gKids);
		this.gCont.add(this.gStoves);
		this.gCont.add(chara.hoho);
		this.gCont.add(this.gButton);

		if(plRef.attempPlay > 1){
			var idx = game.rnd.integerInRange(0,2);
			var x = this.tables[idx].x - (this.tables[idx].width * 0.7);
			var y = -50;
			chara.generateKids(x, y, this.kidsCollision, this.cakeCollision, idx);
			this.generateKids();			
		} else {
			this.checkTutor();
		}
		
		_A.startLevel(plRef.stageNow);
		this.onResize();
	},

	checkTutor:function(){
		// trace('attempPlay', plRef.attempPlay);
		if(plRef.attempPlay == 1){
			ctutorial.attemp1();
		}

		if(plRef.tutorText.length > 0){
			this.createTutor(plRef.tutorText[0]);
			this.pauseBtn.isPaused = true;
			this.pauseBtn.inputEnabled = false;

			for(var a = 0; a < this.stoves.length; a++){
				this.stoves[a].inputEnabled = false;
			}
		}
	},

	createTutor:function(thisText){
		this.pauseBtn.isPaused = true;
		this.pauseBtn.inputEnabled = false;
		this.tutor = new ctutorial(game, chara.hoho.x - (chara.hoho.width * 0.4), chara.hoho.y - chara.hoho.height, thisText);		

		if(plRef.attempPlay == 2){
			// this.tutor.gTutor.x = (this.gw * 0.5) - (this.tutor.gTutor.width * 1.4);
			var idTable = chara.kids[0].idTable;
			var x = this.stoves[idTable].x - 10;
			var y = this.stoves[idTable].y + (this.stoves[idTable].height * 0.45);
			this.arrow = global.addSprite(x, y, 'inGame/arrow_sign');
			this.arrow.anchor.setTo(0.5, 0);
			this.tutor.gTutor.add(this.arrow);
			game.add.tween(this.arrow).to({y:this.arrow.y + 10}, 500, Phaser.Easing.Linear.None, true, 0, -1, true);
		} else if(plRef.attempPlay == 3){
			trace('tutorial ke', plRef.attempPlay);

			if(this.stoveTween){
				game.tweens.remove(this.stoveTween);
				this.stoves[1].scale.setTo(1);
			}
			
			for(var a = 0; a < this.stoves.length; a++){
				this.stoves[a].inputEnabled = false;
			}

			// this.tutor.x = (this.gw * 0.5) - (this.tutor.width * 0.5);
			this.tutor.gTutor.x = (this.gw * 0.5) - (this.tutor.gTutor.width * 1.4);
			this.tutor.frameName = 'inGame/tutorialBox';
			this.tutor.scale.y = 1;
			this.tutor.tutorialText.y = this.tutor.y;
		} else if(plRef.attempPlay == 4){

			game.add.tween(this.plates[0].scale).to({y:this.plates[0].scale.y + 0.2, x:this.plates[0].scale.x + 0.2}, 500, Phaser.Easing.Linear.None, true, 0, -1, true);

			this.tutor.x = (this.gw * 0.5) - (this.tutor.width * 0.5);
			this.tutor.frameName = 'inGame/tutorialBox';
			this.tutor.scale.y = 1;
			this.tutor.tutorialText.x = this.tutor.x + (this.tutor.width * 0.52);
			this.tutor.tutorialText.y = this.tutor.y;
		}

		this.gCont.add(this.tutor.gTutor);
	},

	checkAfterTutor:function(){
		// trace('checkAfterTutor', plRef.tutorText.length);
		plRef.tutorText = [];

		if(plRef.attempPlay == 1){
			var idx = 1;
			var x = this.tables[idx].x - (this.tables[idx].width * 0.7);
			var y = -50;
			chara.generateKids(x, y, this.kidsCollision, this.cakeCollision, idx);
		} else if(plRef.attempPlay == 2){
			// for(var a = 0; a < this.stoves.length; a++){
			// 	this.stoves[a].inputEnabled = true;
			// }			
			this.stoves[1].inputEnabled = true;
			this.stoveTween = game.add.tween(this.stoves[1].scale);
			this.stoveTween.to({x:this.stoves[1].scale.x + 0.1, y:this.stoves[1].scale.y + 0.1}, 300, Phaser.Easing.Linear.None, true, 0, -1, true);
			this.generateKids();			
		} else if(plRef.attempPlay == 3){
			for(var a = 0; a < this.stoves.length; a++){
				this.stoves[a].inputEnabled = true;
			}
		}

		this.nowTutor = 0;
		plRef.attempPlay++;		
		Data.save();
		this.pauseBtn.isPaused = false;
		this.pauseBtn.inputEnabled = true;
	},

	cookingTime:function(){
		if(this.gameEnd || chara.gameOver) return;
		this.cooking = game.time.events.add(this.cookTime, function(){
			if(this.timeBar.scale.y < 1){				
				this.timeBar.scale.y += 0.01;
				this.cookingTime();
			} else {
				csound.cookfinish();
				this.timeBar.scale.y = 0;
				this.timeBg.visible = false;
				this.generateCakes(this.stoves[this.hohoNow]);
				this.isCooking = false;
				if(!this.isMoving) chara.hoho.play('idle', true);
			}
		}, this);
	},

	generateKids:function(){
		if(chara.gameOver) return;
		var time = game.rnd.realInRange(plRef.kidMinAppear, plRef.kidMaxAppear);
		game.time.events.add(Phaser.Timer.SECOND * time, function(){
			this.guestCount--;
			if(this.guestCount > 0){
				var idx = game.rnd.integerInRange(0,2);
				var x = this.tables[idx].x - (this.tables[idx].width * 0.7);
				var y = -50;
				chara.generateKids(x, y, this.kidsCollision, this.cakeCollision, idx);
				this.generateKids();
			} 
		}, this);
	},

	charaGoHere:function(obj){
		if(this.isMoving || this.pauseBtn.isPaused) return;
		if(this.hohoNow == obj.id){
			if(!this.isCooking){
				this.charaCooking();
			}
			return;				
		} else {
			this.timeBar.scale.y = 0;
			this.timeBg.visible = false;			
		}

		game.time.events.remove(this.cooking);
		this.goX = obj.x;
		this.isCooking = false;
		this.isMoving = true;
		this.hohoNow = obj.id;
		if(chara.hoho.x > this.goX){
			this.hohoFrom = 'right';
			chara.hoho.scale.x = this.orScale;
		} else {
			this.hohoFrom = 'left';
			chara.hoho.scale.x = -1 * this.orScale;
		}

		chara.hoho.play('walk', true);
	},

	charaCooking:function(){
		// trace("MASUK MASAK >>>");		
		csound.cookstart();
		this.isCooking = true;
		this.isMoving = false;
		this.timeBg.x = this.stoves[this.hohoNow].x - (this.stoves[this.hohoNow].width * 0.6);
		this.timeBg.visible = true;
		this.cookingTime();
		chara.hoho.play('masaj', true);
		if(plRef.attempPlay == 3 && plRef.tutorText.length == 0){
			ctutorial.attemp3();
		}
	},

	charaMoving:function(){
		if(this.hohoFrom == 'right'){
			chara.hoho.x -= this.runSpeed;
			if(chara.hoho.x <= this.goX){
				chara.hoho.x = this.goX;
				this.isMoving = false;
				if(!this.isCooking) this.charaCooking();
			}
		} else {
			chara.hoho.x += this.runSpeed;
			if(chara.hoho.x >= this.goX){
				chara.hoho.x = this.goX;
				this.isMoving = false;
				if(!this.isCooking) this.charaCooking();
			}
		}
	},

	generateCakes:function(obj){
		var x = obj.x;
		var y = obj.y;		
		var id = game.rnd.integerInRange(1, plRef.variant);
		// var id = 6;
		// trace("BERAPA VARIANT >>>", id, plRef.variant);
		var index = this.cakes.length;
		var cake = global.addSprite(x, y, 'inGame/cc' + id);
		cake.anchor.setTo(0.5);
		if(id == 6) cake.x += 17;
		cake.indexNo = index;
		cake.kidNo = 0;
		cake.tableNo = obj.id;
		cake.stop = false;
		cake.occupied = false;
		game.physics.p2.enable(cake, false);
		cake.body.setCollisionGroup(this.cakeCollision);
		cake.body.collides(this.kidsCollision);
		cake.body.moveUp(400);

		var plate = global.addSprite(x, y + (cake.height * 0.5), 'inGame/plate');
		plate.anchor.setTo(0.5);
		plate.id = obj.id;
		plate.inputEnabled = false;
		plate.events.onInputDown.add(this.addTips, this);

		this.gCakes.add(plate);
		this.gCakes.add(cake);
		this.plates.push(plate);
		this.cakes.push(cake);
	},

	addTips:function(obj){
		if(this.pauseBtn.isPaused) return;
		csound.cash();
		obj.destroy();
		var tips = plRef.variant * 5;
		plRef.moneyInGame += tips;
		plRef.moneyInPocket += tips;

		var text = global.addText(obj.x, obj.y, '+$' + tips, 40, game_config.font1);
		text.anchor.setTo(0.5);
		text.fill = 'green';
		text.strokeThickness = 5;
		text.stroke = 'white';

		var tween = game.add.tween(text);
		tween.to({x:text.x + 20, y:text.y - 20, alpha:0}, 300, Phaser.Easing.Linear.None, true);
		tween.onComplete.add(function(obj){
			obj.destroy();
		}, this);
	},

	plateCountdown:function(obj){
		obj.waitTime = game.time.events.add(Phaser.Timer.SECOND * 3, function(){
			obj.destroy();
		}, this);
	},

	cakeUpdate:function(){	
		for(var a = 0; a < this.cakes.length; a++){
			if(!this.cakes[a] || !this.cakes[a].alive) continue;
			if(this.cakes[a].stop){
				var kidIndex = this.cakes[a].kidNo;	

				if(!chara.kids[kidIndex] || !chara.kids[kidIndex].alive){
					this.cakes[a].destroy();
					this.cakes[a] = null;
					this.plates[a].inputEnabled = true;
					if(!this.plates[a].waitTime) this.plateCountdown(this.plates[a]);
					if(plRef.attempPlay == 4){
						ctutorial.attemp4();
					}
					continue;
				}

				if(!this.cakes[a].body) continue;
				if(this.cakes[a].body.y > chara.kids[kidIndex].sensor.body.y){			
					// this.cakes[a].body.y = chara.kids[kidIndex].sensor.body.y;
					this.cakes[a].body.moveUp(400);
					this.plates[a].y = this.cakes[a].body.y + (this.cakes[a].height * 0.38);
				} else {
					// this.cakes[a].body.velocity.y = 0;					
					this.cakes[a].body.destroy();
					chara.kids[kidIndex].sensor.body.destroy();
				}
			} else {
				this.cakes[a].body.moveUp(400);
				this.plates[a].y = this.cakes[a].body.y + (this.cakes[a].height * 0.38);
				var idTable = this.cakes[a].tableNo;
				if(this.cakes[a].body.y - (this.cakes[a].height * 0.5) < this.tables[idTable].y - (this.tables[idTable].height * 0.5)){
					this.cakes[a].destroy();
					this.cakes[a] = null;
					this.plates[a].destroy();
					this.plates[a] = null;
				}
			}
		}
	},	

	countKid:function(){
		var kidCount = 0;
		for(var a = 0; a < chara.kids.length; a++){
			if(!chara.kids[a] || !chara.kids[a].alive) continue;
			kidCount++;
		}

		if(kidCount > 0){
			return false;
		} else {
			return true;
		}
	},

	update:function(){
		BaseState.prototype.update.call(this);
		Data.save();		
		this.custCount.setText(this.guestCount + '');
		chara.gKids.sort('y', Phaser.Group.SORT_ASCENDING);
		if(this.gameEnd){
			game.physics.p2.paused = true;
			if(!this.generateResult){				
				this.generateResult = true;
				this.result.create();
				if(!this.countKid()){
					this.result.failed();
				} else {
					this.result.win();
				}
			}
		}

		if(plRef.tutorText.length > 0){
			if(game.input.activePointer.isDown){
				if(this.tutor){
					this.nowTutor++;
					this.tutor.gTutor.destroy();					
					this.tutor = null;
				}
			} else {
				if(this.nowTutor < plRef.tutorText.length){
					if(!this.tutor){
						this.createTutor(plRef.tutorText[this.nowTutor]);
					}
				} else {
					if(plRef.tutorText.length > 0){
						this.checkAfterTutor();
					}									
				}
			}
		}

		if(this.pauseBtn.isPaused){
			game.time.events.pause();
			game.physics.p2.paused = true;
			for(var a = 0; a < chara.kids.length; a++){
				if(!chara.kids[a] || !chara.kids[a].alive) continue;
				chara.kids[a].isPaused = true;
			}
			chara.hoho.isPaused = true;
			return;
		} else {
			game.time.events.resume();
			game.physics.p2.paused = false;
			for(var a = 0; a < chara.kids.length; a++){
				if(!chara.kids[a] || !chara.kids[a].alive) continue;
				chara.kids[a].isPaused = false;
			}
			chara.hoho.isPaused = false;
		}

		if(chara.gameOver){
			this.gameEnd = true;
			return;
		}

		chara.kidUpdate();
		this.cakeUpdate();
		if(this.isMoving){
			this.charaMoving();
		}
	},

}, BaseState);
