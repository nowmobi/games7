skillLineDestroyer = function(obj){
	Phaser.Group.call(this, game);
	this.x = obj.x;
	this.y = obj.y;
	this.parentObject = obj;
	this.name = 'destroyLine';

	this.init();

	this.onDestroy.add(function(){		
		if(ctransition.isClosed) return;
		plRef.achievProgress[9]++;
	}, this);
};

skillLineDestroyer.inherit({
	init:function(){
		this.skill = game.rnd.pick(['vertical', 'diagonal1', 'diagonal2']);
		// this.skill = 'diagonal2';

		this.bubble = global.addSprite(0, 0, 'objects/skill2_glow');
		this.bubble.anchor.setTo(0.5);
		this.bubble.scale.setTo(0.5);
		this.add(this.bubble);

		this.arrow1 = global.addSprite(0, 0, 'objects/skill2_atas');
		this.arrow1.anchor.setTo(0.5);
		this.arrow1.y = -this.parentObject.height * 0.5;
		this.add(this.arrow1);

		this.arrow2 = global.addSprite(0, 0, 'objects/skill2_bawah');
		this.arrow2.anchor.setTo(0.5);
		this.arrow2.y = this.parentObject.height * 0.5;
		this.add(this.arrow2);

		if(this.skill == 'diagonal1'){
			this.angle = 60;
		} else if(this.skill == 'diagonal2'){
			this.angle = -60;
		}

		var timing = 500;
		var easing = Phaser.Easing.Linear.None;
		var tweenArrow1 = game.add.tween(this.arrow1);
		tweenArrow1.to({y:this.arrow1.y - (this.arrow1.height * 0.5)}, timing, easing, true, 0, -1, true);

		var tweenArrow2 = game.add.tween(this.arrow2);
		tweenArrow2.to({y:this.arrow2.y + (this.arrow2.height * 0.5)}, timing, easing, true, 0, -1, true);

		timing = 200;
		var tweenBubble = game.add.tween(this.bubble.scale);
		tweenBubble.to({x:1, y: 1}, timing, easing, true, 0, -1, true);
	},

	verticalActivated:function(){
		this.lineUp = new lineFlush(this, this.skill, 'up');
		curState().gPlay.add(this.lineUp);

		this.lineDown = new lineFlush(this, this.skill, 'down');
		curState().gPlay.add(this.lineDown);

		//check one line
		var a = this.parentObject.col;
		for(var b = 0; b < curState().objects[a].length; b++){
			if(gameData.mapping[a][b] == 0 || b == this.parentObject.row) continue;
			var obj = curState().objects[a][b];
			if(!obj || !obj.exists) continue;
			if(obj.isTweening || obj.isBlocked || obj.isFreezed || obj._isMoving) continue;
			var selisih = this.parentObject.row - b;
			var delay = Math.abs(selisih) * 80;
			obj.destroyed(delay);
			this.counting++;
		}
	},

	diagonal1Activated:function(){
		this.lineUp = new lineFlush(this, this.skill, 'up');
		curState().gPlay.add(this.lineUp);

		this.lineDown = new lineFlush(this, this.skill, 'down');
		curState().gPlay.add(this.lineDown);

		//cek kanan
		var row;
		var obj = this.parentObject;
		for(var col = obj.col + 1; col < curState().boxes.length; col++){
			var object = null;
			var totRowTarget = curState().boxes[col].length;
			var totRowNow = curState().boxes[obj.col].length;
			var selisih = totRowTarget - totRowNow;
			if(selisih > 0) row = obj.row;
			else row = obj.row + selisih;
			if(row >= 0){
				obj = curState().boxes[col][row];
				if(gameData.mapping[col][row] > 0){
					object = curState().objects[col][row];
					if(object && object.exists){
						if(!object.isTweening && !object._isMoving && !object.isFreezed && !object.isBlocked){
							var selisih = this.parentObject.col - col;
							var delay = Math.abs(selisih) * 80;
							object.destroyed(delay);
							this.counting++;
						}
					}
				}
			} else {
				break;
			}
		}

		//cek kiri
		var row;
		var obj = this.parentObject;
		for(var col = obj.col - 1; col >= 0; col--){
			var object = null;
			var totRowTarget = curState().boxes[col].length;
			var totRowNow = curState().boxes[obj.col].length;
			var selisih = totRowTarget - totRowNow;
			if(selisih < 0) row = obj.row;
			else row = obj.row + selisih;
			if(row < curState().boxes[col].length){
				obj = curState().boxes[col][row];
				if(gameData.mapping[col][row] > 0){
					object = curState().objects[col][row];
					if(object && object.exists){
						if(!object.isTweening && !object._isMoving && !object.isFreezed && !object.isBlocked){
							var selisih = this.parentObject.col - col;
							var delay = Math.abs(selisih) * 80;
							object.destroyed(delay);
							this.counting++;
						}
					}
				}
			} else {
				break;
			}
		}
	},

	diagonal2Activated:function(){
		this.lineUp = new lineFlush(this, this.skill, 'up');
		curState().gPlay.add(this.lineUp);

		this.lineDown = new lineFlush(this, this.skill, 'down');
		curState().gPlay.add(this.lineDown);

		//cek kanan
		var row;
		var obj = this.parentObject;
		for(var col = obj.col + 1; col < curState().boxes.length; col++){		
			var object = null;		
			var totRowTarget = curState().boxes[col].length;
			var totRowNow = curState().boxes[obj.col].length;
			var selisih = totRowTarget - totRowNow;
			if(selisih < 0) row = obj.row;
			else row = obj.row + selisih;
			if(row >= 0 && row < curState().objects[col].length){
				obj = curState().boxes[col][row];
				if(gameData.mapping[col][row] > 0){
					object = curState().objects[col][row];
					if(object && object.exists){
						if(!object.isTweening && !object._isMoving && !object.isFreezed && !object.isBlocked){
							var selisih = this.parentObject.col - col;
							var delay = Math.abs(selisih) * 80;
							object.destroyed(delay);
							this.counting++;
						}
					}
				}
			} else {
				break;
			}
		}

		//cek kiri
		var row;
		var obj = this.parentObject;
		for(var col = obj.col - 1; col >= 0; col--){
			var object = null;
			var totRowTarget = curState().objects[col].length;
			var totRowNow = curState().objects[obj.col].length;
			var selisih = totRowTarget - totRowNow;
			if(selisih > 0) row = obj.row;
			else row = obj.row + selisih;
			if(row >= 0 && row < curState().objects[col].length){
				obj = curState().boxes[col][row];
				if(gameData.mapping[col][row] > 0){
					object = curState().objects[col][row];
					if(object && object.exists){
						if(!object.isTweening && !object._isMoving && !object.isFreezed && !object.isBlocked){
							var selisih = this.parentObject.col - col;
							var delay = Math.abs(selisih) * 80;
							object.destroyed(delay);
							this.counting++;
						}
					}
				}
			} else {
				break;
			}
		}
	},

	activatedSkill:function(){
		this.counting = 0;
		this[this.skill + 'Activated']();
		var totScore = gameData.countScore(this.counting);		
		totScore = game.math.roundTo(totScore, 0);
		curState().plScore += totScore;
		// trace('count Score', this.counting, totScore);
		this.destroy();
	},

	update:function(){
		if(this.parentObject && this.parentObject.exists){
			this.col = this.parentObject.col;
			this.row = this.parentObject.row;
			this.position.setTo(this.parentObject.x, this.parentObject.y);			
		}
	},
}, Phaser.Group);