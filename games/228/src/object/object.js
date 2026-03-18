object = function(col, row, name){
	var x = curState().boxes[col][row].x;
	var y = curState().boxes[col][row].y;

	Phaser.Sprite.call(this, game, x, y, 'objects');
	this.frameName = 'objects/' + name;
	this.anchor.setTo(0.5);
	// this.scale.setTo(0.8);
	// this.addChild(shadow);

	this.col = col;
	this.row = row;
	this.isClicked = false;
	this.name = name;
	this.seqId = 0;
	this.spExists = false;
	this.isTweening = false;
	this.line = null;
	this.glow = null;

	this.inputEnabled = true;
	this.events.onInputDown.add(this.onClick, this);
	this.events.onInputOver.add(this.onOver, this);
	this.events.onInputUp.add(this.onUp, this);

	this.events.onDestroy.add(function(){
		if(ctransition.isClosed) return;
		if(this._spSkill){
			this._spSkill.activatedSkill();
		}

		if(this.seqId < 3 && this.seqId > 0) csound['match' + this.seqId]();
		else if(this.seqId >= 3) csound.match3();
		else if(this.seqId == 0){
			csound.destroyPiece();	
		} 
	}, this);

	this.init();
};

object.inherit({
	_spSkill : null,
	_isMoving : false,
	isFreezed : false,
	isBlocked : false,
	init:function(){
		var tween = game.add.tween(this.scale);
		tween.from({x:0, y:0}, 300, Phaser.Easing.Elastic.Out, true);
	},

	onClick:function(){
		var objMoving = curState().checkMovingObject();
		if(objMoving) return;
		if(curState().isMatching) return;
		if(curState().gameOver || this.isFreezed || this.isBlocked || !curState().gameStart || curState().checkingEmpty || curState().isChecking) return;
		var checking = this.checkMovement();
		if(checking) return;

		// trace(this.name, this.col, this.row);
		this.clickEffect();
		curState().nowSelect = this.name;
		curState().colNow = this.col;
		curState().rowNow = this.row;
		curState().countNow = 1;
		this.isClicked = true;
		this.seqId = 1;

		if(this._spSkill){
			if(this._spSkill.name == 'destroy6Line'){
				// this._spSkill.activatedSkill();
				// this.frameName = 'objects/' + this.name;
				this.alpha = 1;

				if(this.glow){
					this.glow.destroy();
					this.glow = null;						
				}

				this.goToTarget();
				return;
			}
		}

		curState().isClicked = true;
	},

	onOver:function(){
		if(!curState().isClicked || this.name != curState().nowSelect) return;
		if(this.isFreezed || this.isBlocked) return;
		if(this._spSkill){
			if(this._spSkill.name == 'destroy6Line'){
				return;
			}
		}

		var lineNow = curState().boxes[this.col].length;
		var lineBefore = curState().boxes[curState().colNow].length;
		var selisihTotalLine = lineNow - lineBefore;
		var selisihKolom = this.col - curState().colNow;
		var selisihBaris = this.row - curState().rowNow;
		if(Math.abs(selisihKolom) == 1){
			if(selisihBaris == selisihTotalLine || selisihBaris == 0){
				if(this.isClicked){
					// trace('over', this.isClicked);
					this.overOld();
				} else {
					this.clickEffect();
					this.overNew();
				}
			}
		} else if(selisihKolom == 0){
			if(Math.abs(selisihBaris) == 1 || selisihBaris == 0){
				if(this.isClicked){
					// trace('over', this.isClicked);
					this.overOld();
				} else {
					this.clickEffect();
					this.overNew();
				}	
			}
		}
	},

	overOld:function(){
		if(this.seqId != curState().countNow - 1) return;
		var obj = curState().objects[curState().colNow][curState().rowNow];
		obj.isClicked = false;
		obj.seqId = 0;
		obj.line.destroy();
		obj.line = null;
		obj.glow.destroy();
		obj.glow = null;

		curState().colNow = this.col;
		curState().rowNow = this.row;
		curState().countNow = this.seqId;
	},

	overNew:function(){
		// csound.fruitClick();	
		// csound.slide();
		this.isClicked = true;

		var aBefore = curState().boxes[curState().colNow][curState().rowNow];
		var oBefore = curState().objects[curState().colNow][curState().rowNow];
		// var bThis = curState().boxes[this.col]
		var x = aBefore.x;
		var y = aBefore.y;
		var width = game.math.distance(x, y, this.x, this.y);
		var angle = game.math.angleBetween(x, y, this.x, this.y);

		this.line = global.addSprite(x, y, 'inGame/link_line');
		this.line.anchor.setTo(0, 0.5);
		this.line.width = width;
		this.line.rotation = angle;
		curState().gLines.add(this.line);

		curState().colNow = this.col;
		curState().rowNow = this.row;
		curState().countNow++;
		this.seqId = curState().countNow;
	},

	onUp:function(){
		if(!curState().isClicked || !this.isClicked) return;
		curState().isClicked = false;
		for(var a = 0; a < curState().objects.length; a++){
			for(var b = 0; b < curState().objects[a].length; b++){
				var obj = curState().objects[a][b];
				var box = curState().boxes[a][b];
				if(!obj || !obj.exists) continue;
				if(obj.isClicked){
					obj.isClicked = false;
					if(obj.line){
						obj.line.destroy();
						obj.line = null;
					}

					if(obj.glow){
						obj.glow.destroy();
						obj.glow = null;						
					}

					var minCount = 3;

					if(curState().countNow >= minCount){
						// curState().plScore += gameData.pieceScore;						
						var idx = gameData.objectName.indexOf(obj.name);
						idx += 1;
						plRef.achievProgress[idx]++;

						obj.goToTarget();
					} else {
						obj.seqId = 0;						
					}
				}
			}
		}
	},	

	clickEffect:function(){
		if(this.isTweening) return;
		csound.click2();
		this.isTweening = true;
		this.tweening = game.add.tween(this.scale);
		this.tweening.to({x:this.scale.x + 0.1, y:this.scale.y + 0.1}, 200, Phaser.Easing.Elastic.Out, true, 0, 0, true);
		this.tweening.onComplete.add(function(){
			this.isTweening = false;
		}, this);

		this.glow = global.addSprite(this.x, this.y, 'objects/' + this.name + '_glow');
		this.glow.anchor.setTo(0.5);
		curState().gLines.add(this.glow);
	},

	onMove:function(){
		this._isMoving = true;
		var toX = curState().boxes[this.col][this.row].x;
		var toY = curState().boxes[this.col][this.row].y;

		var tween = game.add.tween(this);
		tween.to({x:toX, y:toY}, 100, Phaser.Easing.Linear.None, true);
		tween.onComplete.add(function(){
			this._isMoving = false;
		}, this);
	},

	disappear:function(target){
		this.isTweening = true;		
		// this.frameName = 'objects/' + this.name;
		this.alpha = 1;
		var delay = (this.seqId - 1) * 100;
		var tween = game.add.tween(this.scale);
		tween.to({x:this.scale.x + 0.1, y:this.scale.y + 0.1}, 50, Phaser.Easing.Elastic.Out, true, delay, 0, true);
		tween.onLoop.add(function(){
			var match = global.addSprite(this.x, this.y, 'objects/match1');
			match.anchor.setTo(0.5);
			this.parent.add(match);

			var anim = match.animations.add('match', Phaser.Animation.generateFrameNames('objects/match', 1, 6, '', 1), 15, false);
			anim.killOnComplete = true;
			anim.onComplete.add(function(){
				if(target) target.countDown();
				this.checkThisPiece();
				// if(!this.visible) this.destroy();
				// match.destroy();
			}, this);

			match.animations.play('match');

			if(gameData.stage < 5){
				this.destroy();
			} else {
				if(curState().countNow >= 7){
					if(this.seqId < curState().countNow) this.destroy();;
				} else {
					this.destroy();
				}				
			}
		}, this);
	},

	goToTarget:function(){
		// if(this.seqId == curState().countNow) curState().checkingEmpty = true;
		curState().isMatching = true;
		var dest = this.checkTarget();
		this.disappear(dest);
	},

	checkThisPiece:function(){
		if(gameData.stage < 5){			
			curState().objects[this.col][this.row] = null;
			if(this.seqId == curState().countNow) curState().checkingEmpty = true;
		} else {
			if(curState().countNow >= 7){
				if(this.seqId == curState().countNow){
					if(this._spSkill){						
						this._spSkill.activatedSkill();
					}

					this.isTweening = false;
					this.checkSkill();							
					curState().checkingEmpty = true;
				} else {						
					curState().objects[this.col][this.row] = null;	
				}
			} else {
				curState().objects[this.col][this.row] = null;
				if(this.seqId == curState().countNow) curState().checkingEmpty = true;
			}			
		}
	},

	checkMovement:function(){
		var isMoving = false;
		checking :
		for(var a = 0; a < curState().objects.length; a++){
			for(var b = 0; b < curState().objects[a].length; b++){
				var obj = curState().objects[a][b];
				if(!obj) continue;
				if(obj.isTweening || obj._isMoving){
					isMoving = true;
					break checking;
				}
			}
		}

		return isMoving;
	},

	checkSkill:function(){
		if(!this || !this.exists) return;
		if(curState().countNow >= 12){
			if(gameData.stage >= 12){
				this._spSkill = new skill6Liner(this);				
			} else if(gameData.stage >= 10){				
				this._spSkill = new skillLineDestroyer(this);				
			} else if(gameData.stage >= 5){				
				this._spSkill = new skillDestroy(this);
			}
		} else if(curState().countNow >= 10){
			if(gameData.stage >= 10) {
				this._spSkill = new skillLineDestroyer(this);				
			} else if(gameData.stage >= 5){				
				this._spSkill = new skillDestroy(this);
			}
		} else if(curState().countNow >= 7){
			if(gameData.stage >= 5) {
				this._spSkill = new skillDestroy(this);
			}
		}

		if(this._spSkill){
			this.parent.add(this._spSkill);			
		} else {
			curState().objects[this.col][this.row] = null;	
			this.destroy();
		}
	},

	checkTarget:function(){
		var dest = null;

		checking :
		for(var a = 0; a < curState().targets.length; a++){
			var target = curState().targets[a];
			if(!target) continue;
			if(target.order == this.name){
				if(target.goal > 0){
					target.goal--;
					dest = target;
					break checking;
				}				
			}
		}

		return dest;
	},

	destroyed:function(delay){
		if(!this || !this.exists) return;
		if(this.seqId > 0) return;		
		delay = delay || 0;
		// trace('this is destroyed', this.name, this.col, this.row);
		this.isTweening = true;
		game.time.events.add(delay, function(){
			var dest = this.checkTarget();
			if(dest) dest.countDown();

			var shining = global.addSprite(this.x, this.y, 'objects/destroy1');
			shining.anchor.setTo(0.5);
			curState().gObjects.add(shining);

			var anim = shining.animations.add('shine', Phaser.Animation.generateFrameNames('objects/destroy', 1, 4, '', 1), 15, false);
			anim.killOnComplete = true;

			shining.animations.play('shine');			

			var idx = gameData.objectName.indexOf(this.name);
			idx += 1;
			plRef.achievProgress[idx]++;
			
			curState().objects[this.col][this.row] = null;
			this.destroy();			
		}, this);
	},

	flushed:function(){

	},

	update:function(){
		
	},
}, Phaser.Sprite);