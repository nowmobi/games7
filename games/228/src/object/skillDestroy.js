skillDestroy = function(object){
	var x = object.x;
	var y = object.y;
	var name = object.name;
	Phaser.Sprite.call(this, game, x, y, 'objects');
	this.frameName = 'objects/skill1_' + name;
	this.anchor.setTo(0.5);
	this.name = 'destroyRound';

	this.parentObject = object;

	this.events.onDestroy.add(function(){		
		if(ctransition.isClosed) return;
		plRef.achievProgress[9]++;
		if(this.parentObject && this.parentObject.exists) {
			// this.parentObject.frameName = 'objects/' + this.parentObject.name;
			this.parentObject.alpha = 1;
		}
	}, this);
};

skillDestroy.inherit({
	activatedSkill:function(){
		this.destroy();
		// return;
		//check one line
		var counting = 0;
		for(var a = this.parentObject.row - 1; a <= this.parentObject.row + 1; a++){
			if(a < 0 || a >= curState().objects[this.parentObject.col].length || a == this.parentObject.row) continue;
			if(gameData.mapping[this.parentObject.col][a] == 0) continue;
			var obj = curState().objects[this.parentObject.col][a];
			if(!obj) continue;
			if(!obj.isTweening && !obj._isMoving && !obj.isFreezed && !obj.isBlocked){
				counting++;
				obj.destroyed();												
				// trace('check one line', obj.name, obj.col, obj.row);
			}
		}

		//check left one
		var col = this.parentObject.col - 1;
		if(col >= 0 && col < curState().objects.length){
			var totRowTarget = curState().objects[col].length;
			var totRowNow = curState().objects[this.parentObject.col].length;
			var selisih = totRowTarget - totRowNow;
			var row = this.parentObject.row;
			var obj;
			if(row >= 0 && row < curState().objects[col].length){
				if(gameData.mapping[col][row] > 0){
					obj = curState().objects[col][row];
					if(obj && obj.exists){
						if(!obj.isTweening && !obj._isMoving && !obj.isFreezed && !obj.isBlocked){
							counting++;
							obj.destroyed();												
							// trace('check left line', obj.name, obj.col, obj.row);
						}
					}
				}
			}

			row = this.parentObject.row + selisih;
			if(row >= 0 && row < curState().objects[col].length){
				if(gameData.mapping[col][row] > 0){
					obj = curState().objects[col][row];
					if(obj && obj.exists){
						if(!obj.isTweening && !obj._isMoving && !obj.isFreezed && !obj.isBlocked){
							counting++;
							obj.destroyed();																				
							// trace('check left line', obj.name, obj.col, obj.row);
						}
					}
				}
			}			
		}

		//check right one
		col = this.parentObject.col + 1;
		if(col >= 0 && col < curState().objects.length){
			totRowTarget = curState().objects[col].length;
			totRowNow = curState().objects[this.parentObject.col].length;
			selisih = totRowTarget - totRowNow;
			row = this.parentObject.row;
			if(row >= 0 && row < curState().objects[col].length){
				if(gameData.mapping[col][row] > 0){
					obj = curState().objects[col][row];
					if(obj && obj.exists){
						if(!obj.isTweening && !obj._isMoving && !obj.isFreezed && !obj.isBlocked){
							counting++;
							obj.destroyed();										
							// trace('check right line', obj.name, obj.col, obj.row);										
						}
					}
				}
			}

			row = this.parentObject.row + selisih;
			if(row >= 0 && row < curState().objects[col].length){
				if(gameData.mapping[col][row] > 0){
					obj = curState().objects[col][row];
					if(obj && obj.exists){
						if(!obj.isTweening && !obj._isMoving && !obj.isFreezed && !obj.isBlocked){
							counting++;
							obj.destroyed();									
							// trace('check right line', obj.name, obj.col, obj.row);											
						}
					}
				}
			}	
		}

		var totScore = gameData.countScore(counting);
		totScore = game.math.roundTo(totScore, 0);
		curState().plScore += totScore;
		// trace('count Score', counting, totScore);
	},

	update:function(){
		if(this.parentObject && this.parentObject.exists){
			this.col = this.parentObject.col;
			this.row = this.parentObject.row;
			this.position.setTo(this.parentObject.x, this.parentObject.y);
			// this.parentObject.frameName = this.frameName;			
			this.parentObject.alpha = 0;
		}
	},
}, Phaser.Sprite);