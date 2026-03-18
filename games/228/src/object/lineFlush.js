lineFlush = function(obj, mode, direction){
	var x = obj.x;
	var y = obj.y;
	Phaser.Sprite.call(this, game, x, y, 'lineFlush');
	this.frameName = 'lineFlush/0000';
	this.anchor.setTo(0.5, 0);

	var anim = this.animations.add('stretchIn', Phaser.Animation.generateFrameNames('lineFlush/000', 0, 9, '', 1), 15, false);
	anim = this.animations.add('stretchOut', Phaser.Animation.generateFrameNames('lineFlush/000', 9, 0, '', 1), 15, false);
	anim.killOnComplete = true;

	this.animations.play('stretchIn');

	this.parentObj = curState().boxes[obj.col][obj.row];
	this.mode = mode;
	this.direction = direction;

	this.speed = 15;
	this.speedX = 0;
	this.speedY = 0;
	this.toX = null;
	this.toY = null;

	// this.inputEnabled = true;
	// this.events.onInputDown.add(this.onClick, this);

	this.init();
};

lineFlush.inherit({
	init:function(){
		if(this.direction == 'down'){
			this.scale.y = -1;			
		}

		this.tweenIn();
		this[this.mode + 'Move']();
	},

	verticalMove:function(){
		if(this.direction == 'up'){
			this.y -= this.parentObj.height;
			var dest = curState().boxes[this.parentObj.col][0];
			// this.tweenMove(dest.x, dest.y);
		} else {
			this.y += this.parentObj.height;
			var lastLine = curState().boxes[this.parentObj.col].length - 1;
			var dest = curState().boxes[this.parentObj.col][lastLine];			
			// this.tweenMove(dest.x, dest.y);
		}

		this.toX = dest.x;
		this.toY = dest.y;
	},

	diagonal1Move:function(){
		this.angle = 60;
		if(this.direction == 'up'){
			this.x += this.parentObj.width * 0.5;
			this.y -= this.parentObj.height * 0.25;
			var dest = null;
			var row;
			var obj = this.parentObj;
			for(var col = obj.col + 1; col < curState().boxes.length; col++){				
				var object;
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
								dest = object;
							}
						}
					}
				} else {
					break;
				}
			}

			if(dest){
				var box = curState().boxes[dest.col][dest.row];
				var toX = box.x + 10;
				var toY = box.y - 10;
				// this.tweenMove(toX, toY);
				// trace('tujuan diagonal atas', box.col, box.row, toX, toY);
			} else {
				this.destroy();
			}
		} else {
			this.x -= this.parentObj.width * 0.5;
			this.y += this.parentObj.height * 0.25;
			var dest = null;
			var obj = this.parentObj;
			var row = this.parentObj.row;
			for(var col = obj.col - 1; col >= 0; col--){	
				var object;
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
								dest = object;
							}
						}
					}
				} else {
					break;
				}
			}

			if(dest){
				var box = curState().boxes[dest.col][dest.row];
				var toX = box.x - 10;
				var toY = box.y + 10;
				// this.tweenMove(toX, toY);
				// trace('tujuan diagonal bawah', box.col, box.row, toX, toY);
			} else {
				this.destroy();
			}
		}

		this.toX = toX;
		this.toY = toY;
	},

	diagonal2Move:function(){
		this.angle = -60;
		if(this.direction == 'down'){
			this.x += this.parentObj.width * 0.5;
			this.y += this.parentObj.height * 0.25;
			var dest = null;
			var row;
			var obj = this.parentObj;
			for(var col = obj.col + 1; col < curState().boxes.length; col++){				
				var object;
				var totRowTarget = curState().boxes[col].length;
				var totRowNow = curState().boxes[obj.col].length;
				var selisih = totRowTarget - totRowNow;
				if(selisih < 0) row = obj.row;
				else row = obj.row + selisih;
				if(row >= 0 && row < curState().boxes[col].length){
					obj = curState().boxes[col][row];
					if(gameData.mapping[col][row] > 0){
						object = curState().objects[col][row];
						if(object && object.exists){
							if(!object.isTweening && !object._isMoving && !object.isFreezed && !object.isBlocked){
								dest = object;
							}
						}
					}
				} else {
					break;
				}
			}

			if(dest){
				var box = curState().boxes[dest.col][dest.row];
				var toX = box.x + 10;
				var toY = box.y + 10;
				// this.tweenMove(toX, toY);
				// trace('tujuan diagonal atas', box.col, box.row, toX, toY);
			} else {
				this.destroy();
			}
		} else {
			this.x -= this.parentObj.width * 0.5;
			this.y -= this.parentObj.height * 0.25;
			var dest = null;
			var obj = this.parentObj;
			var row = this.parentObj.row;
			for(var col = obj.col - 1; col >= 0; col--){	
				var object;
				var totRowTarget = curState().boxes[col].length;
				var totRowNow = curState().boxes[obj.col].length;
				var selisih = totRowTarget - totRowNow;
				if(selisih > 0) row = obj.row;
				else row = obj.row + selisih;
				if(row >= 0 && row < curState().boxes[col].length){
					obj = curState().boxes[col][row];
					if(gameData.mapping[col][row] > 0){
						object = curState().objects[col][row];
						if(object && object.exists){
							if(!object.isTweening && !object._isMoving && !object.isFreezed && !object.isBlocked){
								dest = object;
							}
						}
					}
				} else {
					break;
				}
			}

			if(dest){
				var box = curState().boxes[dest.col][dest.row];
				var toX = box.x - 10;
				var toY = box.y - 10;
				// this.tweenMove(toX, toY);
				// trace('tujuan diagonal atas', box.col, box.row, toX, toY);
			} else {
				this.destroy();
			}
		}

		this.toX = toX;
		this.toY = toY;
	},

	tweenOut:function(){
		// this.animations.play('stretchOut');
		this.tweenThisOut = game.add.tween(this.scale);
		this.tweenThisOut.to({y:0}, 100, Phaser.Easing.Linear.None, true);
		this.tweenThisOut.onComplete.add(function(){
			this.destroy();
		}, this);
	},

	tweenIn:function(){
		this.tweenThisIn = game.add.tween(this.scale);
		this.tweenThisIn.from({y:0}, 100, Phaser.Easing.Linear.None, true);
		this.tweenThisIn.onComplete.add(function(){
			if(this.speed <= 0){
				this.destroy();
			}
		}, this);
	},

	moveVertical:function(){
		// if(!this.toX || !this.toY) return;
		if(this.direction == 'up'){
			if(this.y > this.toY){
				var a = game.math.angleBetween(this.x, this.y, this.toX, this.toY);
				this.speedX = this.speed * Math.cos(a);
				this.speedY = this.speed * Math.sin(a);
			} else {
				if(this.speed > 0){
					this.speed = 0;
					this.tweenOut();
				}
			}
		} else {
			if(this.y < this.toY){
				var a = game.math.angleBetween(this.x, this.y, this.toX, this.toY);
				this.speedX = this.speed * Math.cos(a);
				this.speedY = this.speed * Math.sin(a);
			} else {
				if(this.speed > 0){
					this.speed = 0;
					this.tweenOut();
				}
			}
		}

		if(this.speed > 0){
			this.x += this.speedX;
			this.y += this.speedY;
		}
	},

	moveDiagonal1:function(){
		// if(!this.toX || !this.toY) return;
		var dist = game.math.distance(this.x, this.y, this.toX, this.toY);
		if(this.direction == 'up'){
			if(this.x < this.toX || this.y > this.toY){
				var a = game.math.angleBetween(this.x, this.y, this.toX, this.toY);
				this.speedX = this.speed * Math.cos(a);
				this.speedY = this.speed * Math.sin(a);
			} else {
				if(this.speed > 0){
					this.speed = 0;
					this.tweenOut();
				}
			}
		} else {
			if(this.x > this.toX || this.y < this.toY){
				var a = game.math.angleBetween(this.x, this.y, this.toX, this.toY);
				this.speedX = this.speed * Math.cos(a);
				this.speedY = this.speed * Math.sin(a);
			} else {
				if(this.speed > 0){
					this.speed = 0;
					this.tweenOut();
				}
			}
		}

		if(this.speed > 0){
			this.x += this.speedX;
			this.y += this.speedY;
		}
	},

	moveDiagonal2:function(){
		// if(!this.toX || !this.toY) return;
		var dist = game.math.distance(this.x, this.y, this.toX, this.toY);
		if(this.direction == 'up'){
			if(this.x > this.toX || this.y > this.toY){
				var a = game.math.angleBetween(this.x, this.y, this.toX, this.toY);
				this.speedX = this.speed * Math.cos(a);
				this.speedY = this.speed * Math.sin(a);
			} else {
				if(this.speed > 0){
					this.speed = 0;
					this.tweenOut();
				}
			}
		} else {
			if(this.x < this.toX || this.y < this.toY){
				var a = game.math.angleBetween(this.x, this.y, this.toX, this.toY);
				this.speedX = this.speed * Math.cos(a);
				this.speedY = this.speed * Math.sin(a);
			} else {
				if(this.speed > 0){
					this.speed = 0;
					this.tweenOut();
				}
			}
		}

		if(this.speed > 0){
			this.x += this.speedX;
			this.y += this.speedY;
		}
	},

	onClick:function(){
		// trace('stop', this.speed, this.direction, this.toX, this.toY, this.x, this.y);
	},

	update:function(){
		// this[this.mode + 'Move']();
		this['move' + gameData.upperCase(this.mode)]();
	},
}, Phaser.Sprite);