skill6Liner = function(obj){
	this.parentObject = obj;
	var x = obj.x;
	var y = obj.y;
	Phaser.Sprite.call(this, game, x, y, 'objects');
	this.frameName = 'objects/skill3_piring';
	this.anchor.setTo(0.5);

	this.burn = global.addSprite(x, y, 'objects/skill3_1');
	this.burn.anchor.setTo(0.65, 0.75);
	this.parentObject.parent.add(this.burn);

	var anim = this.burn.animations.add('burn', Phaser.Animation.generateFrameNames('objects/skill3_', 1, 6, '', 1), 15, true);
	this.burn.animations.play('burn');

	this.name = 'destroy6Line';

	this.events.onDestroy.add(function(){		
		if(ctransition.isClosed) return;
		this.burn.destroy();
		plRef.achievProgress[9]++;
		if(this.parentObject && this.parentObject.exists){
			this.parentObject.alpha = 1;
		}
	}, this);
};

skill6Liner.inherit({
	activatedSkill:function(){
		this.destroy();
		this.counting = 0;
		this.verticalActivated();
		this.diagonal1Activated();
		this.diagonal2Activated();

		var totScore = gameData.countScore(this.counting);
		totScore = game.math.roundTo(totScore, 0);
		curState().plScore += totScore;
		// trace('count Score', this.counting, totScore);
	},

	verticalActivated:function(){
		this.skill = 'vertical';
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
		this.skill = 'diagonal1';
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
		this.skill = 'diagonal2';
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

	update:function(){
		this.burn.position.setTo(this.x, this.y);
		if(this.parentObject && this.parentObject.exists){
			this.col = this.parentObject.col;
			this.row = this.parentObject.row;
			this.position.setTo(this.parentObject.x, this.parentObject.y);
			// this.parentObject.frameName = this.frameName;			
			this.parentObject.alpha = 0;
		}
	},
}, Phaser.Sprite);