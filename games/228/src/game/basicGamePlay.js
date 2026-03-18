basicGamePlay = function(game){

};

basicGamePlay.inherit({
	preload: function() {
		BaseState.prototype.preload.call(this);		
		Asset.png('bg_playscreen');
		Asset.png('black_screen');
		Asset.atlaspng('lineFlush');
		Asset.atlaspng('shines');
		// Asset.atlaspng('shinee');
	},
	init: function() {
		BaseState.prototype.init.call(this);
		// trace("INIT", this.bg_loader);
	},

	create: function () {
		BaseState.prototype.create.call(this);
		csound.play(1);
		// cstage.stageMode(1);

		this.gInGame = game.add.group();
		this.gButton = game.add.group();
		this.gSkill = game.add.group();
		this.gPlay = game.add.group();
		this.gCust = game.add.group();
		this.gLines = game.add.group();
		this.gBoxes = game.add.group();
		this.gObjects = game.add.group();
		this.gameOver = false;
		this.gameStart = false;
		this.generateResult = false;
		this.countEmpty = 0;
		this.isMatching = false;
		this.movingObj = null;

		this.isClicked = false;
		this.nowSelect = '';
		this.colNow = -1;
		this.rowNow = -1;
		this.countNow = 0;
		this.isMoving = false;
		this.isChecking = false;
		this.objCanMove = null;
		this.cantMove = false;
		this.checkingEmpty = false;
		this.idleTime = 3;

		this.plScore = 0;
		this.isWin = false;
		this.noMorePair = false;
		this.lines = [];
		this.scoreGoal = gameData.scoreGoal;
		this.percentages = gameData.percentages;

		this.bg = game.add.sprite(this.gw * 0.5, this.gh * 0.5, 'bg_playscreen', null);
		this.bg.anchor.setTo(0.5);
		this.bg.isStretch = true;
		this.gBG.add(this.bg);

		this.header = global.addSprite(this.centerX, 0, 'inGame/header');
		this.header.anchor.setTo(0.5, 0);
		this.gInGame.add(this.header);

		this.sfxBtn = new sfxBtn(this.header.x + (this.header.width * 0.22), this.header.y + (this.header.height * 0.45));
		this.gInGame.add(this.sfxBtn);

		this.soundBtn = new soundBtn(this.sfxBtn.x + (this.sfxBtn.width * 1.2), this.sfxBtn.y);
		this.gInGame.add(this.soundBtn);

		this.pauseBtn = new cpause(this.soundBtn.x + (this.soundBtn.width * 1.2), this.soundBtn.y);
		this.gButton.add(this.pauseBtn);

		this.coinIcon = global.addSprite(this.header.x - (this.header.width * 0.36), this.sfxBtn.y, 'inGame/coins');
		this.coinIcon.anchor.setTo(0.5);
		this.gInGame.add(this.coinIcon);

		this.coinBox = global.addSprite(this.coinIcon.x + (this.coinIcon.width * 0.7), this.coinIcon.y, 'inGame/coins_box');
		this.coinBox.anchor.setTo(0, 0.5);
		this.gInGame.add(this.coinBox);

		this.showCoin = global.addText(this.coinIcon.x + (this.coinIcon.width * 1.1), this.coinBox.y + 3, this.plScore, 20, game_config.font1);
		this.showCoin.anchor.setTo(0, 0.5);
		this.showCoin.fill = 'white';
		this.gInGame.add(this.showCoin);

		this.progressBg = global.addSprite(this.centerX, this.gh, 'inGame/bg_progress_bar');
		this.progressBg.anchor.setTo(0.5, 1);
		this.gInGame.add(this.progressBg);

		this.progressBar = global.addSprite(this.progressBg.x - (this.progressBg.width * 0.38), this.progressBg.y - (this.progressBg.height * 0.4), 'inGame/fill_bar');
		this.progressBar.anchor.setTo(0, 0.5);
		this.gInGame.add(this.progressBar);

		this.progressBar2 = global.addSprite(this.progressBar.x + this.progressBar.width, this.progressBar.y, 'inGame/fill_bar_2');
		this.progressBar2.anchor.setTo(1, 0.5);
		this.gInGame.add(this.progressBar2);

		this.progressFront = global.addSprite(this.progressBg.x, this.progressBar.y, 'inGame/progress_bar');
		this.progressFront.anchor.setTo(0.5);
		this.gInGame.add(this.progressFront);

		this.stepStones = [];
		for(var a = 0; a < 3; a++){
			var x = this.progressBar.x + (this.progressBar.width * this.percentages[a]);
			var y = this.progressBar.y + (this.progressBar.height * 0.2);
			var star = global.addSprite(x, y, 'inGame/stars_off');
			star.anchor.setTo(0.5, 1);
			this.gInGame.add(star);
			this.stepStones.push(star);
		}

		this.showStage = global.addText(this.progressBg.x, this.progressBg.y - (this.progressBg.height * 0.9), _t("stage", gameData.stage + 1), 35, game_config.font1);
		this.showStage.anchor.setTo(0.5);
		this.showStage.fill = '#3399ff';
		this.showStage.stroke = 'white';
		this.showStage.strokeThickness = 5;
		this.gInGame.add(this.showStage);

		this.gResult = new cresult();		

		this.gInGame.add(this.gCust);
		this.gInGame.add(this.gPlay);

		this.gCont.add(this.gInGame);
		this.gCont.add(this.gSkill);
		this.gCont.add(this.gButton);
		this.gCont.add(this.gResult);

		this.onResize();

		this.sortingGoals();
		this.generateBox(); //dari basicgameplay
		// this.gResult.create(true);

		var tweenBox = game.add.tween(this.gPlay);
		tweenBox.from({y:this.gh + (this.gPlay.height * 0.51)}, 1000, Phaser.Easing.Circular.Out, true);
		tweenBox.onComplete.add(function(){
			this.generateTargets(); //dari basicgameplay
			this.generateObjects(); //dari basicgameplay
			this.checkTutor();
		}, this);
		// this.checkTutor();
	},

	checkTutor:function(){
		if(ctutorial.arrTutor.length > 0){
			this.tutorial = new ctutorial(this.centerX, this.gh, 0);
			this.tutorial.onComplete.add(function(){
				if(gameData.stage == 12){
					plRef.achievProgress[0] = 1;
					Data.save();
				}

				this.tweenCDText();
			}, this);
			this.gButton.add(this.tutorial);
		} else {
			this.tweenCDText();
		}
	},

	tweenCDText:function(){
		this.showCountdown = global.addText(this.centerX, this.centerY, _t('start'), 90, game_config.font1);
		this.showCountdown.anchor.setTo(0.5);
		this.showCountdown.fill = 'red';
		this.showCountdown.stroke = 'white';
		this.showCountdown.strokeThickness = 10;
		this.gButton.add(this.showCountdown);

		var tween = game.add.tween(this.showCountdown.scale);
		tween.from({x:this.showCountdown.scale.x + 0.2, y:this.showCountdown.scale.y + 0.2}, 300, Phaser.Easing.Linear.None, true);
		tween.onComplete.add(function(){
			csound.shop_open();
			game.time.events.add(1000, function(){
				this.showCountdown.destroy();
				this.gameStart = true;				
			}, this);
		}, this);
	},

	sortingGoals:function(){
		this.targetGoals = [];
		if(gameData.gameMode == 'rush'){
			for(var a = 0; a < gameData.stageGoals.length; a++){
				var target = null;
				if(a == 0){
					target = gameData.stageGoals[a][0];
				} else {
					var isExist = false;
					var testing = this.targetGoals.indexOf(gameData.stageGoals[a][0]);
					if(testing < 0){
						target = gameData.stageGoals[a][0];
					}				
				}

				if(target){
					this.targetGoals.push(target);
				}
			}			
		} else {
			this.targetGoals = gameData.stageObjects;
		}

		trace(JSON.stringify(this.targetGoals));
	},

	generateBox:function(){		
		this.gPlay.x = this.centerX;
		this.gPlay.y = this.gh * 0.52;
		this.gPlay.add(this.gBoxes);
		this.gPlay.add(this.gLines);
		this.gPlay.add(this.gObjects);

		this.boxes = [];
		var mapping = gameData.mapping;
		for(var a = 0; a < mapping.length; a++){ //col
			this.boxes[a] = [];
			for(var b = 0; b < mapping[a].length; b++){ //row
				var box = new objectBox(a, b);
				this.gBoxes.add(box);					
				this.boxes[a][b] = box;
			}
		}		
	},

	generateObjects:function(){
		this.objects = [];
		for(var a = 0; a < this.boxes.length; a++){ //kolom
			this.objects[a] = [];
			for(var b = 0; b < this.boxes[a].length; b++){ //baris
				var obj;
				if(gameData.mapping[a][b] == 0){
					obj = null;
					// console.log(obj);
				} else {
					var obj = this.generateObject(a, b);
					this.gObjects.add(obj);					
				}
				// console.log(obj);
				this.objects[a][b] = obj;
			}
		}

		this.checkAvailableMove();
	},

	generateObject:function(col, row){
		var obj = null;
		var name = '';
		var posible = game.rnd.realInRange(1, 10);
		// posible = 2;
		if(posible <= 4){
			name = game.rnd.pick(this.targetGoals);
		} else {
			name = this.generateObjectName();
		}

		// trace('name', name);
		obj = new object(col, row, name);

		return obj;
	},

	generateObjectName:function(){
		var name = '';
		var rndmCust = null;
		var count = 10;

		while(rndmCust == null && count > 0){
			var test = game.rnd.pick(this.targets);
			if(test && test.goal > 0){
				rndmCust = test;
			}

			count--;
		}

		if(rndmCust){
			name = rndmCust.order;
		} else {
			name = game.rnd.pick(this.targetGoals);
		}

		return name;
	},

	generateTargets:function(){
		this.targets = [];
		for(var a = 0; a < 2; a++){
			this.createTarget(a);
		}
	},	

	createTarget:function(a){
		if(gameData.gameMode == 'rush'){
			if(this.targets.length >= gameData.stageGoals.length) return;			
		} 

		var x = (this.gPlay.x - (this.gPlay.width * 0.37)) + (a * this.gPlay.width * 0.75);
		var y = this.gPlay.y - (this.gPlay.height * 0.28);
		var id = this.targets.length;
		var cust = new customer(x, y, a, id);
		this.gCust.add(cust);
		this.targets.push(cust);
	},	

	checkEmptySpace:function(){
		this.countEmpty++;
		this.isChecking = true;
		var totScore = 0;
		if(this.countNow > 0){
			if(gameData.gameMode == 'rush'){
				totScore = gameData.countScore(this.countNow);
			} else {
				if(!this.gameOver){
					totScore = gameData.countScoreTime(this.countNow);					
				}
			}

			totScore = game.math.roundTo(totScore, 0);
			this.plScore += totScore;
			// trace('totScore', totScore);				
			this.countNow = 0;			
		}

		var isNull = false;
		var boxNull = null;

		checking:
		for(var a = 0; a < this.objects.length; a++){
			for(var b = 0; b < this.objects[a].length; b++){
				if(gameData.mapping[a][b] == 0) continue;
				if(!this.objects[a][b] || !this.objects[a][b].exists){
					isNull = true;
					boxNull = this.boxes[a][b];
					break checking;
				} else {
					if(this.objects[a][b].seqId > 0) this.objects[a][b].seqId = 0;					
				}
			}
		}

		if(this.countEmpty <= 1000){
			if(isNull){
				this.moveObjects();
			} else {
				this.checkAvailableMove();
				this.isChecking = false;
				this.countEmpty = 0;
				this.isMatching = false;
			}			
		}
	},

	moveObjects:function(){
		for(var a = 0; a < this.objects.length; a++){
			for(var b = 0; b < this.objects[a].length; b++){
				if(gameData.mapping[a][b] == 0) continue;
				if(!this.objects[a][b] || !this.objects[a][b].exists){					
					// trace('boxNull', a, b);
					if(b == 0){
						obj = this.generateObject(a, b);
						this.gObjects.add(obj);	
						this.objects[a][b] = obj;
					} else {
						this.checkBlockToMove(a, b);
					}
				} 
			}
		}

		this.checkEmptySpace();
	},

	checkBlockToMove:function(a, b){
		this.isMoving = false;
		this.boxes[a][b].isEmpty = true;
		var boxNull = this.boxes[a][b];
		var col = a;
		var row = b-1;	
		//check satu baris
		this.checkOneLine(a, b, col, row);

		if(a <= 4){
			this.checkColRightUp(a, b);
			this.checkColLeftUp(a, b);			
			this.checkColRightDown(a, b);
			this.checkColLeftDown(a, b);
		} else {
			this.checkColLeftUp(a, b);
			this.checkColRightUp(a, b);
			this.checkColLeftDown(a, b);
			this.checkColRightDown(a, b);			
		}
		// trace('isMoving', this.isMoving);
	},

	checkOneLine:function(a, b, col, row){
		if(row >= 0 && row < this.objects[col].length){
			// if(a == 1) trace('check one line');
			if(gameData.mapping[col][row] > 0){
				var obj = this.objects[col][row];
				if(obj && obj.exists){
					if(!obj.isFreezed && !obj.isBlocked){
						if(!this.isMoving){
							this.moveObject(obj, a, b, col, row);
							this.isMoving = true;
						}
					}
				}
			}
		}
	},

	checkColLeftUp:function(a, b){
		var col = a - 1;
		if(col >= 0 && col < this.objects.length){
			// if(a == 1) trace('check left line');
			var totRowTarget = this.objects[col].length;
			var totRowNow = this.objects[a].length;
			var selisih = totRowTarget - totRowNow;
			var row;
			if(selisih < 0) row = b + selisih;
			else row = b;
			if(row >= 0 && row < this.objects[col].length){
				if(gameData.mapping[col][row] > 0){
					var obj = this.objects[col][row];
					if(obj && obj.exists){
						if(!obj.isFreezed && !obj.isBlocked){
							if(!this.isMoving){
								this.moveObject(obj, a, b, col, row);
								this.isMoving = true;
							}
						}
					}
				}
			}
		}
	},

	checkColRightUp:function(a, b){
		var col = a + 1;
		if(col >= 0 && col < this.objects.length){
			// if(a == 1) trace('check right line');
			var totRowTarget = this.objects[col].length;
			var totRowNow = this.objects[a].length;
			var selisih = totRowTarget - totRowNow;
			var row;
			if(selisih < 0) row = b + selisih;
			else row = b;
			if(row >= 0 && row < this.objects[col].length){
				if(gameData.mapping[col][row] > 0){
					var obj = this.objects[col][row];
					if(obj && obj.exists){
						if(!obj.isFreezed && !obj.isBlocked){
							if(!this.isMoving){
								this.moveObject(obj, a, b, col, row);
								this.isMoving = true;
							}
						}
					}
				}
			}
		}
	},

	checkColLeftDown:function(a, b){
		var col = a - 1;
		if(col >= 0 && col < this.objects.length){
			// if(a == 1) trace('check left line');
			var totRowTarget = this.objects[col].length;
			var totRowNow = this.objects[a].length;
			var selisih = totRowTarget - totRowNow;
			var row;
			if(selisih > 0) row = b + selisih;
			else row = b;
			if(row >= 0 && row < this.objects[col].length){
				if(gameData.mapping[col][row] > 0){
					var obj = this.objects[col][row];
					if(obj && obj.exists){
						if(!obj.isFreezed && !obj.isBlocked){
							if(!this.isMoving){
								this.moveObject(obj, a, b, col, row);
								this.isMoving = true;
							}
						}
					}
				}
			}
		}
	},

	checkColRightDown:function(a, b){
		var col = a + 1;
		if(col >= 0 && col < this.objects.length){
			// if(a == 1) trace('check right line');
			var totRowTarget = this.objects[col].length;
			var totRowNow = this.objects[a].length;
			var selisih = totRowTarget - totRowNow;
			var row;
			if(selisih > 0) row = b + selisih;
			else row = b;
			if(row >= 0 && row < this.objects[col].length){
				if(gameData.mapping[col][row] > 0){
					var obj = this.objects[col][row];
					if(obj && obj.exists){
						if(!obj.isFreezed && !obj.isBlocked){
							if(!this.isMoving){
								this.moveObject(obj, a, b, col, row);
								this.isMoving = true;
							}
						}
					}
				}
			}
		}
	},

	moveObject:function(obj, a, b, col, row){
		// if(obj.col == col && obj.row == row) return;
		// trace(obj.name, obj.col, obj.row, a, b);									
		obj.col = a;
		obj.row = b;
		this.objects[a][b] = obj;
		this.objects[col][row] = null;
		obj.onMove();
	},

	checkAvailableMove:function(){
		var counting = 0;
		for(var a = 0; a < this.objects.length; a++){
			for(var b = 0; b < this.objects[a].length; b++){
				if(gameData.mapping[a][b] == 0) continue;
				var obj = this.objects[a][b];
				if(!obj || !obj.exists) continue;
				if(obj._spSkill){
					if(obj._spSkill.name == 'destroy6Line'){
						this.objCanMove = obj;
						counting = 3;
					}
				}
			}
		}

		if(counting >= 3) return;

		// trace('masuk sini');
		checking:
		for(var a = 0; a < this.objects.length; a++){ //col
			for(var b = 0; b < this.objects[a].length; b++){ //row
				if(gameData.mapping[a][b] == 0) continue;
				var obj = this.objects[a][b];
				if(!obj || !obj.exists) continue;

				counting = 0;
				//sama kolom
				for(var row = obj.row - 1; row <= obj.row + 1; row++){
					if(row < 0 || row >= this.objects[a].length) continue;
					if(gameData.mapping[a][row] == 0) continue;
					var o = this.objects[a][row];
					if(o.name == obj.name){
						counting++;
					}
				}

				//kolom kiri
				var col = a - 1;
				if(col >= 0){
					var totLineTarget = this.objects[col].length;
					var totLineThis = this.objects[a].length;
					var selisihLine = totLineTarget - totLineThis;
					var row = b;
					if(row >= 0 && row < this.objects[col].length){
						if(gameData.mapping[col][row] > 0){
							if(this.objects[col][b].name == obj.name) counting++;													
						}
					}

					row = b + selisihLine;
					if(row >= 0 && row < this.objects[col].length){
						if(gameData.mapping[col][row] != 0){
							if(this.objects[col][row].name == obj.name) counting++;							
						}
					}					
				}

				//kolom kanan
				col = a + 1;
				if(col < this.objects.length){				
					var totLineTarget = this.objects[col].length;
					var totLineThis = this.objects[a].length;
					var selisihLine = totLineTarget - totLineThis;
					var row = b;
					if(row >= 0 && row < this.objects[col].length){
						if(gameData.mapping[col][row] > 0){
							if(this.objects[col][b].name == obj.name) counting++;							
						}
					}

					row = b + selisihLine;
					if(row >= 0 && row < this.objects[col].length){
						if(gameData.mapping[col][row] != 0){							
							if(this.objects[col][row].name == obj.name) counting++;
						}
					}						
				} 

				if(counting >= 3){
					this.objCanMove = obj;
					break checking;
				}
			}
		}

		if(counting < 3){
			this.cantMove = true;
		}

		// console.log('objCanMove', this.objCanMove, this.cantMove);
	},

	shuffleObjects:function(){
		csound.shuffle();
		this.oldObjects = [];
		for(var a = 0; a < this.objects.length; a++){
			this.oldObjects[a] = [];
			for(var b = 0; b < this.objects[a].length; b++){
				var obj = this.objects[a][b];
				this.oldObjects[a][b] = obj;
			}
		}

		this.objects = [];
		for(var a = 0; a < this.oldObjects.length; a++){
			this.objects[a] = [];
			for(var b = 0; b < this.oldObjects[a].length; b++){
				if(gameData.mapping[a][b] == 0){
					this.objects[a][b] = null;
					continue;
				}

				var obj = null;
				while(obj == null){
					var rndmCol = game.rnd.integerInRange(0, this.oldObjects.length - 1);
					var rndmRow = game.rnd.integerInRange(0, this.oldObjects[rndmCol].length - 1);
					obj = this.oldObjects[rndmCol][rndmRow];
				}

				this.oldObjects[obj.col][obj.row] = null;
				obj.row = b;
				obj.col = a;

				this.objects[a][b] = obj;

				var x = this.boxes[a][b].x;
				var y = this.boxes[a][b].y;
				this.objects[a][b].position.setTo(x, y);
			}
		}

		this.checkAvailableMove();
	},

	checkScore:function(){
		this.progressBar2.scale.x = 1 - (this.plScore / this.scoreGoal);
		if(this.plScore > this.scoreGoal){
			this.progressBar2.scale.x = 0;
		}

		for(var a = 0; a < this.percentages.length; a++){
			var batas = this.scoreGoal * this.percentages[a];			
			if(this.plScore >= batas){
				if(this.stepStones[a].frameName == 'inGame/stars_off'){
					this.stepStones[a].frameName = 'inGame/stars';
					this.tweenScale(this.stepStones[a]);
				}
			}
		}
	},

	tweenScale:function(obj){
		var tweenObj = game.add.tween(obj.scale);
		tweenObj.to({x:obj.scale.x + 0.1, y:obj.scale.y + 0.1}, 100, Phaser.Easing.Linear.None, true, 0, 0, true);
	},

	tweenAvailableObj:function(){
		var tweenObj = game.add.tween(this.objCanMove);
		tweenObj.to({angle:-10}, 100, Phaser.Easing.Linear.None, true, 0, 0, true);
		tweenObj.onComplete.add(function(){
			game.time.events.add(500, function(){
				if(this.idleTime <= 0){
					this.tweenAvailableObj();
				}				
			}, this);
		}, this);
	},

	checkMovingObject:function(){
		var objMoving = false;
		for(var a = 0; a < this.objects.length; a++){
			for(var b = 0; b < this.objects[a].length; b++){
				if(gameData.mapping[a][b] == 0) continue;
				var obj = this.objects[a][b];
				if(!obj) continue;
				if(obj.isTweening || obj._isMoving){
					objMoving = true;
					this.movingObj = obj;
					// trace('obj moving', a, b);
				}
			}
		}

		return objMoving;
	},

	searchSpSkill:function(){
		for(var a = 0; a < this.objects.length; a++){
			for(var b = 0; b < this.objects[a].length; b++){
				if(gameData.mapping[a][b] == 0) continue;
				var obj = this.objects[a][b];
				if(!obj) continue;
				if(obj._spSkill){
					obj.destroyed();
				}
			}
		}

		this.checkingEmpty = true;
	},

	update:function(){
		BaseState.prototype.update.call(this);
		cnotification.checkNotif();
		this.checkScore();

		this.gButton.bringToTop(this.pauseBtn);

		if(this.generateResult){
			this.pauseBtn.pauseBtn.visible = false;
		}

		if(this.cantMove){
			var objMoving = this.checkMovingObject();
			if(!objMoving){
				this.shuffleObjects();
				this.cantMove = false;
			}
		}

		if(this.isChecking){
			if(this.countEmpty > 1000){
				var objMoving = this.checkMovingObject();
				if(!objMoving){
					this.countEmpty = 0;
					this.checkEmptySpace();
				} 
			}
		}

		this.showCoin.setText(gameData.writeScore(this.plScore));

		if(!this.gameStart) return;
		var countMs = game.time.physicsElapsedMS * 0.001;
		if(this.idleTime > 0){
			this.idleTime -= countMs;
			// trace(this.idleTime);
			if(this.idleTime <= 0){
				this.tweenAvailableObj();
			}
		}
	},
}, BaseState);