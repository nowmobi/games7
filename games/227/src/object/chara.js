chara = function(game){

}

chara.create = function(x, y, width, height){
	chara.hero = new CSpine('chara', x, y);
	chara.hero._animSpeed = 0.5;
	chara.hero.scale.setTo(0.25);
	chara.hero.changeCostume(plRef.idCostume);
	// chara.hero.changeCostume(10);
	chara.hero.play('run', true);

	chara.hero.onComplete.add(function(){
		if(this.currentAnim == 'fly'){
			this.play('fly_on_the_air', true);
		} else if(this.currentAnim == 'land'){
			this.play('run', true);
		} else if(this.currentAnim == 'die'){
			chara.hero.isPaused = true;
		} else if(this.currentAnim == 'attack'){
			chara.hero.play('run', true);
		}
	}, chara.hero);

	chara.now = 'right';
	chara.speed = 20;
	chara.rocketJump = 20;
	chara.isJumping = false;
	chara.isBouncing = false;	
	chara.orScaleX = chara.hero.scale.x;
	chara.maxY = chara.hero.y - 100;
	chara.orY = chara.hero.y;
	chara.rocketMode = false;
	chara.gameOver = false;
	chara.gw = width;
	chara.gh = height;
	chara.gBomb = game.add.group();
	chara.gButton = game.add.group();
	chara.endureOnScreen = false;
	chara.coins = [];
	chara.coinCheck = false;
	chara.multiplyScore = 1;
	chara.shieldMode = false;
	chara.isInvincible = false;
	chara.questId = 0;
	chara.questPt = 0;
	chara.questGoal = 0;
	chara.startCountH = 0;
	// chara.orY = chara.gh * 0.7;

	chara.enemies = [];
	chara.buttonStack = [];
}

chara.staticEnemy = function(x, y, name, scale){
	var enemy;
	if(name == 'shooting'){
		enemy = new shooting(game);
		var xPos = 0;
		if(scale > 0){
			xPos = x + (enemy.width * 0.5);
		} else {
			xPos = x - (enemy.width * 0.5);
		}
		enemy.position.setTo(xPos, y);
		enemy.scale.setTo(scale, 1);
	} else {
		enemy = new CSpine(name, x, y);
		enemy._animSpeed = 1;
		enemy.scale.setTo((scale * 0.5), 0.5);
		enemy.play('idle', true);
	}
	enemy.id = 'staticenemy';	
	enemy.name = name;	
	enemy.playerIn = false;
	return enemy;
}

chara.dynamicEnemy = function(x, y, name, scale){
	var enemy = new CSpine(name, x, y);
	// enemy.bonus = null;

	if(name == 'horizontal'){
		enemy.speed = gameData.enemySpeed[0];
		enemy.bonus = 2;
	} else if(name == 'slidedown'){
		enemy.speed = gameData.enemySpeed[1];
		enemy.bonus = 1;
	} else if(name == 'zigzag'){
		enemy.speed = gameData.enemySpeed[3];
		enemy.bonus = 4;
		enemy.isRotate = false;
	} else if(name == 'squidink'){
		enemy.speed = gameData.enemySpeed[4];
	} else if(name == 'rocketfrombottom'){
		enemy.speed = gameData.enemySpeed[5];
	} else if(name == 'endureenemy'){
		enemy.speed = gameData.enemySpeed[2];
		enemy.life = 3;
		enemy.isHit = false;
		enemy.moveTo = game.rnd.pick(['right', 'left']);
	} else if(name == 'powerup'){
		enemy.speed = gameData.enemySpeed[0];
		enemy.moveTo = game.rnd.pick(['right', 'left']);
		var pickPower = game.rnd.pick([1,2]);
		enemy.changeBox(pickPower);
		enemy.type = pickPower;
	}

	enemy._animSpeed = 1;
	enemy.scale.setTo((scale * 0.5), 0.5);
	enemy.play('walk', true);		
	enemy.id = 'dynamic';
	enemy.name = name;
	enemy.playerIn = false;
	return enemy;
}

chara.checkEnemies = function(){
	for(var a = 0; a < chara.enemies.length; a++){
		if(!chara.enemies[a] || !chara.enemies[a].alive) continue;
		if(chara.enemies[a].id == 'staticenemy'){
			// var charBound = chara.hero.getBounds();
			chara.enemies[a].playerIn = false;
			var x = chara.hero.x - (chara.hero.width * 0.6);
			var y = chara.hero.y - (chara.hero.height * 0.6);
			var width = chara.hero.width * 0.6;
			var height = chara.hero.height * 0.7;
			var charBound = new Phaser.Rectangle(x, y, width, height);
			var enemyBound = chara.enemies[a].getBounds();
			// var intersecting = Phaser.Rectangle. intersects(charBound, enemyBound);

			var left = enemyBound.x + (enemyBound.width * 0.1);
			var right = left + (enemyBound.width * 0.8);
			var top = enemyBound.y + (enemyBound.height * 0.2);
			var bottom = top + (enemyBound.height * 0.6);
			var intersecting = charBound.intersectsRaw(left, right, top, bottom);

			// trace('is it crossing ', intersecting, chara.enemies[a].name);
			if(intersecting){
				chara.enemies[a].playerIn = true;
			}		
		}
	}
}

chara.checkDynamicEnemies = function(){
	for(var a = 0; a < chara.enemies.length; a++){
		if(!chara.enemies[a] || !chara.enemies[a].alive) continue;
		if(chara.enemies[a].id == 'dynamic'){
			// var charBound = chara.hero.getBounds();
			chara.enemies[a].playerIn = false;
			var x = chara.hero.x - (chara.hero.width * 0.6);
			var y = chara.hero.y - (chara.hero.height * 0.6);
			var width = chara.hero.width * 0.6;
			var height = chara.hero.height * 0.7;
			var charBound = new Phaser.Rectangle(x, y, width, height);
			var enemyBound = chara.enemies[a].getBounds();
			// var intersecting = Phaser.Rectangle.containsRect(charBound, enemyBound);
			var intersecting = false;

			if(chara.enemies[a].name != 'bomb'){			
				if(charBound.y + (charBound.height * 0.3) < enemyBound.y + enemyBound.height && charBound.y + (charBound.height * 0.3) > enemyBound.y){
					if(charBound.x + (charBound.width * 0.5) > enemyBound.x && charBound.x + (charBound.width * 0.5) < enemyBound.x + enemyBound.width){
						intersecting = true;
					}
				}
			} else {
				var x2 = enemyBound.x - (enemyBound.width * 0.2);
				var y2 = enemyBound.y - (enemyBound.height * 0.2);
				var width2 = enemyBound.width * 1.4;
				var height2 = enemyBound.height * 1.4;
				var enemyBound2 = new Phaser.Rectangle(x2, y2, width2, height2);
				if(charBound.y + (charBound.height * 0.3) < enemyBound2.y + enemyBound2.height && charBound.y + (charBound.height * 0.3) > enemyBound2.y){
					if(charBound.x + (charBound.width * 0.5) > enemyBound2.x && charBound.x + (charBound.width * 0.5) < enemyBound2.x + enemyBound2.width){
						intersecting = true;
					}
				}
			}

			if(intersecting){
				chara.enemies[a].playerIn = true;
			}
		} 
	}
}

chara.checkCoins = function(){
	if(chara.coins.length == 0) return;
	// trace('CHECK COINS');
	chara.coinCheck = false;
	for(var a = 0; a < chara.coins.length; a++){
		if(!chara.coins[a] || !chara.coins[a].alive) continue;
		var delay = chara.coins[a].delay;
		// var delay = 0;
		var tween = game.add.tween(chara.coins[a]);
		tween.to({x : chara.hero.x - (chara.hero.width * 0.5), y : chara.hero.y - (chara.hero.height * 0.5)}, 200, Phaser.Easing.Linear.None, true, delay);
		tween.onComplete.add(function(obj){
			obj.destroy();
		}, this);	
	}
}

chara.charaVsEnemy = function(){
	chara.checkEnemies();
	chara.checkDynamicEnemies();
	if(chara.coinCheck && !chara.isJumping) chara.checkCoins();

	for(var a = 0; a < chara.enemies.length; a++){
		if(!chara.enemies[a] || !chara.enemies[a].alive) continue;
		if(chara.enemies[a].id == 'staticenemy'){
			if(chara.enemies[a].name == 'shooting'){
				if(chara.enemies[a].y > chara.gh * 0.35 && !chara.enemies[a].timer){
					// chara.bombInterval(chara.enemies[a]);
					chara.createBomb(chara.enemies[a]);
				}
			} else if(chara.enemies[a].name == 'sticksquid'){
				if(chara.enemies[a].y > chara.gh * 0.3 && !chara.enemies[a].timer){
					// chara.bombInterval(chara.enemies[a]);
					chara.createZigZag(chara.enemies[a]);
					chara.enemies[a].destroy();
					chara.enemies[a] = null;
					continue;
				}
			}

			if(chara.enemies[a].playerIn){
				if(chara.isBouncing || chara.rocketMode || chara.isInvincible){
					chara.enemyHit(chara.enemies[a]);								
					chara.checkPickUp(chara.enemies[a]);
					chara.enemies[a].destroy();
					chara.enemies[a] = null;
					continue;
				}

				if(chara.shieldMode) continue;				

			   	if(!chara.gameOver){
				   	csound.hit();
					chara.gameOver = true;					
					chara.hero.play('die', false);
				}
			}
		} else if(chara.enemies[a].id == 'dynamic'){
			if(chara.enemies[a].name == 'horizontal'){
				if(chara.enemies[a].scale.x < 0){
					chara.enemies[a].x += chara.enemies[a].speed;
				} else {
					chara.enemies[a].x -= chara.enemies[a].speed;
				}
				// trace(chara.enemies[a].x);
				if(chara.enemies[a].x < chara.gw * 0.2){
					chara.enemies[a].scale.x *= -1;
				} else if(chara.enemies[a].x > chara.gw * 0.8) {
					chara.enemies[a].scale.x *= -1;
				}
			} else if(chara.enemies[a].name == 'slidedown'){
				chara.enemies[a].y += chara.enemies[a].speed;
			} else if(chara.enemies[a].name == 'zigzag'){
				if(chara.enemies[a].angle > 0){
					chara.enemies[a].x -= chara.enemies[a].speed;
				} else if(chara.enemies[a].angle < 0){
					chara.enemies[a].x += chara.enemies[a].speed;
				}
				// chara.enemies[a].y += chara.enemies[a].speed;
			} else if(chara.enemies[a].name == 'squidink'){
				chara.enemies[a].y += chara.enemies[a].speed;
			} else if(chara.enemies[a].name == 'rocketfrombottom'){
				chara.enemies[a].y -= chara.enemies[a].speed;
				if(chara.enemies[a].y < -200){
					chara.enemies[a].destroy();
					chara.enemies[a] = null;
					continue;
				}
			} else if(chara.enemies[a].name == 'bomb'){
				if(chara.enemies[a].shootFrom == 'right'){
					chara.enemies[a].x -= chara.enemies[a].speed;
					if(chara.enemies[a].x > chara.gw * 0.5){						
						chara.enemies[a].y -= (chara.enemies[a].speed/1.5);
					} else {
						// chara.enemies[a].y += (chara.enemies[a].speed/1.5) ;
					}
				} else {
					chara.enemies[a].x += chara.enemies[a].speed;
					if(chara.enemies[a].x < chara.gw * 0.5){						
						chara.enemies[a].y -= (chara.enemies[a].speed/1.5);
					} else {
						// chara.enemies[a].y += (chara.enemies[a].speed/1.5);
					}
				}
			} else if(chara.enemies[a].name == 'endureenemy'){
				if(chara.enemies[a].moveTo == 'right'){
					chara.enemies[a].x += chara.enemies[a].speed;
				} else {
					chara.enemies[a].x -= chara.enemies[a].speed;
				}

				if(chara.enemies[a].y < chara.gh * 0.6){
					chara.enemies[a].y += (chara.enemies[a].speed * 1.5);
				}
				// trace(chara.enemies[a].x);
				if(chara.enemies[a].x < chara.gw * 0.4){
					chara.enemies[a].moveTo = 'right';
				} else if(chara.enemies[a].x > chara.gw * 0.6) {
					chara.enemies[a].moveTo = 'left';
				}
			} else if(chara.enemies[a].name == 'powerup'){
				if(chara.enemies[a].moveTo == 'right'){
					chara.enemies[a].x += chara.enemies[a].speed;
				} else {
					chara.enemies[a].x -= chara.enemies[a].speed;
				}

				chara.enemies[a].y += (chara.enemies[a].speed * 2);
				// trace(chara.enemies[a].x);
				if(chara.enemies[a].x < chara.gw * 0.2){
					chara.enemies[a].moveTo = 'right';
				} else if(chara.enemies[a].x > chara.gw * 0.8) {
					chara.enemies[a].moveTo = 'left';
				}
			}


			if(chara.enemies[a].playerIn){
				if(chara.isBouncing || chara.rocketMode || chara.isInvincible){
					chara.enemyHit(chara.enemies[a]);								
					chara.checkPickUp(chara.enemies[a]);
					chara.enemies[a].destroy();
					chara.enemies[a] = null;
					continue;
				}

				if(chara.hero.currentAnim == 'run' || chara.enemies[a].name == 'squidink'){
					if(chara.enemies[a].name == 'powerup' || chara.shieldMode) continue;
					if(!chara.gameOver){
						csound.hit();
						chara.gameOver = true;					
						chara.hero.play('die', false);
					}
				} else {
					if(chara.enemies[a]){
						if(chara.enemies[a].name == 'endureenemy'){
							if(chara.enemies[a].life > 1 && !chara.enemies[a].isHit){
								chara.enemies[a].life--;
								chara.enemies[a].isHit = true;
								chara.enambleToHit(chara.enemies[a]);
								chara.enemyHit(chara.enemies[a]);
							} else if(chara.enemies[a].life <= 1 && !chara.enemies[a].isHit) {								
								chara.enemyHit(chara.enemies[a]);
								chara.checkPickUp(chara.enemies[a]);
								chara.checkQuest(chara.enemies[a].name);
								chara.enemies[a].destroy();
								chara.enemies[a] = null;	
								chara.endureOnScreen = false;	
							}
						} else {
							chara.checkQuest(chara.enemies[a].name);

							if(chara.enemies[a].name != 'powerup'){								
								chara.checkBonus(chara.enemies[a]);
								chara.enemyHit(chara.enemies[a]);
								chara.checkPickUp(chara.enemies[a]);
								chara.enemies[a].destroy();
								chara.enemies[a] = null;
							} else {
								if(chara.enemies[a].type == 1){
									if(chara.multiplyScore == 1){
										chara.activateDoubleScore();
									}
								} else if(chara.enemies[a].type == 2){
									if(!chara.shieldMode){
										chara.activateShield();
									}
								}
								chara.powerupHit(chara.enemies[a]);								
							}

							chara.enemies[a] = null;							
						}
					}
				}
			}
		}
	}
}

chara.checkQuest = function(name){
	if(chara.questId == 1){
		if(name != 'powerup') chara.questPt++;
	} else if(chara.questId == 2){
		if(chara.questPt <= chara.questGoal){
			if(name != 'powerup') {
				chara.questPt = 0;
				chara.startCountH = plRef.distanceNow;
				trace('gagal quest');
			}
		}
	} else if(chara.questId == 4){
		if(chara.questPt <= chara.questGoal){
			if(name == 'powerup') {
				chara.questPt = 0;
				chara.startCountH = plRef.distanceNow;
			}
		}
	}
}

chara.enemyHit = function(obj){
	if(obj != chara.spButton) csound.destroyEnemy();
	else if(obj == chara.spButton) csound.match();
	var effect = global.addSprite(obj.x, obj.y - (obj.height * 0.5), 'inGame/hit1');
	effect.anchor.setTo(0.5);

	var effAnim = effect.animations.add('hit', Phaser.Animation.generateFrameNames('inGame/hit', 1, 4, '', 1), 20);
	effAnim.onComplete.add(function(){
		effect.destroy();		
	}, this);

	effect.animations.play('hit');
	// obj.destroy();
}

chara.powerupHit = function(obj){	
	var effect = global.addSprite(obj.x, obj.y - (obj.height * 0.5), 'inGame/powerup1');
	effect.anchor.setTo(0.5);

	var effAnim = effect.animations.add('hit', Phaser.Animation.generateFrameNames('inGame/powerup', 1, 7, '', 1), 20);
	effAnim.onComplete.add(function(){
		effect.destroy();		
	}, this);

	effect.animations.play('hit');
	obj.destroy();	
}

chara.tweenZigZag = function(obj){
	obj.isRotate = true;
	var tween = game.add.tween(obj);
	tween.to({angle:obj.angle * -1}, 50, Phaser.Easing.Linear.None, true);
	tween.onComplete.add(function(object){
		object.isRotate = false;
	}, this);
}

chara.createBomb = function(obj){
	obj.timer = true;	
	var tween = game.add.tween(obj.scale);
	tween.to({x:obj.scale.x - 0.2}, 200, Phaser.Easing.Elastic.InOut, true);
	tween.yoyo(true);

	var bomb = global.addSprite(obj.x, obj.y, 'inGame/shooting_bomb');
	bomb.anchor.setTo(0.5, 1);

	bomb.id = 'dynamic';
	bomb.name = 'bomb';
	bomb.bonus = 3;
	if(obj.scale.x < 0){
		bomb.shootFrom = 'right';
	} else {
		bomb.shootFrom = 'left';
	}
	bomb.speed = 10;
	chara.gBomb.add(bomb);
	chara.enemies.push(bomb);	
	// trace('BOMB CREATE', bomb.name);
}

chara.createZigZag = function(obj){
	obj.timer = true;	
	var x = obj.x;
	var y = obj.y;
	var name = 'zigzag';
	var scale = 1;

	var enemy = chara.dynamicEnemy(x, y, name, scale);
	if(obj.scale.x < 0){
		enemy.angle = 60;
	} else {
		enemy.angle = -60;
	}
	enemy.speed = 15;		
	enemy.bonus = 4;
	enemy.id = 'dynamic';
	enemy.name = name;
	enemy.playerIn = false;
	chara.gBomb.add(enemy);
	chara.enemies.push(enemy);
}

chara.enambleToHit = function(obj){
	game.time.events.add(Phaser.Timer.SECOND * 0.5, function(){
		obj.isHit = false;
	}, this);
}

chara.checkPickUp = function(obj){
	if(plRef.attempPlay == 1) return;
	var random = game.rnd.realInRange(1, 100);
	// random = 2;

	var prob = 5;
	if(obj.name == 'endureenemy'){
		prob = 10;
	} 

	if(random < prob){
		chara.scrambleDiamond(obj);
	} else {
		chara.scrambleCoin(obj);
	}
}

chara.scrambleCoin = function(obj){
	var coinCount = 0;
	if(obj.name == 'endureenemy'){
		coinCount = game.rnd.integerInRange(10, 15);		
	} else {
		coinCount = game.rnd.integerInRange(5, 8);
	}

	coinCount *= chara.multiplyScore;

	for(var a = 0; a < coinCount; a++){
		var x = game.rnd.realInRange(obj.x - 100, obj.x + 100);
		var y = game.rnd.realInRange(obj.y - 100, obj.y + 100);
		var coin = global.addSprite(x, y, 'inGame/gold');
		coin.anchor.setTo(0.5);
		coin.delay = a * 10;
		chara.gBomb.add(coin);		
		chara.coins.push(coin);

		plRef.moneyInPocket++;

		var tween = game.add.tween(coin);
		tween.from({x : obj.x, y : obj.y}, 200, Phaser.Easing.Linear.None, true);
	}

	chara.coinCheck = true;
}

chara.scrambleDiamond = function(obj){
	var diaCount = 1;
	// if(obj.name == 'endureenemy'){
	// 	diaCount = game.rnd.integerInRange(2, 3);		
	// } else {
	// 	diaCount = game.rnd.integerInRange(1, 2);
	// }

	diaCount *= chara.multiplyScore;

	for(var a = 0; a < diaCount; a++){
		var x = game.rnd.realInRange(obj.x - 100, obj.x + 100);
		var y = game.rnd.realInRange(obj.y - 100, obj.y + 100);
		var crystal = global.addSprite(x, y, 'inGame/crystal');
		crystal.anchor.setTo(0.5);
		crystal.delay = a * 10;
		chara.gBomb.add(crystal);		
		chara.coins.push(crystal);

		plRef.diamondInPocket++;

		var tween = game.add.tween(crystal);
		tween.from({x : obj.x, y : obj.y}, 200, Phaser.Easing.Linear.None, true);
	}

	chara.coinCheck = true;
}

chara.activateDoubleScore = function(){
	chara.multiplyScore = 2;
	game.time.events.add(Phaser.Timer.SECOND * 5, function(){
		chara.multiplyScore = 1;
	}, this);
}

chara.activateShield = function(){
	chara.shieldMode = true;
	chara.shield = new spButton(game, chara.hero.x - (chara.hero.width * 0.5), chara.hero.y - (chara.hero.height * 0.3), 'shield');
	chara.shield.anchor.setTo(0.5);
	chara.gBomb.add(chara.shield);

	game.time.events.add(Phaser.Timer.SECOND * 10, function(){
		chara.shield.destroy();
		chara.shieldMode = false;		
	}, this);
}

chara.checkBonus = function(obj){
	if(chara.buttonStack.length == 3 || !obj.bonus) return;

	var index = chara.buttonStack.length;
	var	bonus = new spButton(game, obj.x, obj.y, 'special_' + obj.bonus);
	bonus.anchor.setTo(0.5);
	bonus.scale.setTo(0.9);
	bonus.type = obj.bonus;
	chara.gButton.add(bonus);
	chara.buttonStack[index] = bonus;

	if(chara.buttonStack.length > 1){
		var isSame = true;
		for(var a = 1; a < chara.buttonStack.length; a++){
			if(chara.buttonStack[a].type != chara.buttonStack[0].type){
				isSame = false;
			}
		}

		if(!isSame){
			var id = chara.buttonStack.length - 1;
			for(var a = 0; a < chara.buttonStack.length - 1; a++){
				chara.buttonStack[a].destroy();
				chara.buttonStack[a] = null;
			}

			chara.buttonStack[0] = chara.buttonStack[id];
			chara.buttonStack.length = 1;								
		}
	}


	var xPos;
	var yPos;
	if(chara.buttonStack.length == 1){
		xPos = chara.spButton.x;
		yPos = this.spButton.y - (this.spButton.height * 0.22);
	} else if(chara.buttonStack.length == 2){		
		xPos = chara.spButton.x - (chara.spButton.width * 0.18);
		yPos = chara.spButton.y + (chara.spButton.height * 0.15);
	} else if(chara.buttonStack.length == 3){
		xPos = chara.spButton.x + (chara.spButton.width * 0.22);
		yPos = chara.spButton.y + (chara.spButton.height * 0.15);
	}

	var tween = game.add.tween(bonus);
	tween.to({x : xPos, y : yPos}, 500, Phaser.Easing.Circular.InOut, true, 500);
	tween.onComplete.add(function(){
		if(chara.buttonStack.length == 3){
			chara.enemyHit(chara.spButton);
			chara.spButton.frameName = 'inGame/special_button_' + chara.buttonStack[0].type;
			chara.spButton.inputEnabled = true;
			chara.spButton.bonusType = chara.buttonStack[0].type;

			for(var a = 0; a < chara.buttonStack.length; a++){
				chara.buttonStack[a].destroy();
				chara.buttonStack[a] = null;
			}
		}
	}, this);
}