chara = function(game){

}

chara.create = function(x, y){
	chara.hoho = new CSpine('chara', x, y);
	chara.hoho._animSpeed = 1;
	chara.hoho.scale.setTo(0.45);
	chara.hoho.play('idle', true);

	chara.kids = [];
	chara.maxY = 0;
	chara.gameOver = false;
	chara.isWaiting = false;
	chara.whoWaiting = 0;
	chara.endWaitingList = false;
	chara.gKids = game.add.group();
}

chara.generateKids = function(x, y, colGroup, cakeGroup, idTable){
	var index = chara.kids.length;
	var id = game.rnd.integerInRange(1,6);
	var kid = new CSpine('kids' + id, x, y, '', 'kids1_anim');
	// kid.changeKids(id);
	kid.indexNo = index;
	kid.cakeNo = 0;
	kid.idTable = idTable;
	kid._animSpeed = 1;
	kid.scale.setTo(0.5);
	kid.speed = game.rnd.realInRange(plRef.kidMinSpeed, plRef.kidMaxSpeed);
	if(plRef.attempPlay == 1) kid.speed = plRef.kidMinSpeed;
	kid.eatCount = 0;
	kid.isEating = false;
	kid.isFinished = false;
	kid.play('walk', true);

	kid.sensor = global.addSprite(kid.x + (kid.width * 0.6), kid.y - (kid.height * 0.8), 'inGame/dummy');
	kid.sensor.anchor.setTo(0.5);
	kid.sensor.alpha = 0;
	kid.sensor.id = kid.indexNo;
	game.physics.p2.enable(kid.sensor, false);
	kid.sensor.body.setRectangle(kid.sensor.width * 1.5, kid.sensor.height * 1.5, 0, 0, 0);
	kid.sensor.body.kinematic = true;
	kid.sensor.body.setCollisionGroup(colGroup);
	kid.sensor.body.collides(cakeGroup);
	kid.sensor.body.data.shapes[0].sensor = true;

	chara.gKids.add(kid);
	chara.gKids.add(kid.sensor);
	chara.gKids.sendToBack(kid);
	chara.kids.push(kid);
	chara.kidSetting(index);
}

chara.kidSetting = function(a){
	chara.kids[a].onComplete.add(function(){
		if(this.currentAnim == 'eat'){
			this.isFinished = true;
			chara.addMoney(this);
		}
	}, chara.kids[a]);

	chara.kids[a].sensor.body.onBeginContact.add(chara.stopCake, chara.kids[a]);
}

chara.addMoney = function(obj){
	var tips = plRef.variant * 15;
	plRef.moneyInGame += tips;
	plRef.moneyInPocket += tips;

	var text = global.addText(obj.x, obj.y - (obj.height * 0.75), '+$' + tips, 45, game_config.font1);
	text.anchor.setTo(0.5);
	text.fill = 'green';
	text.strokeThickness = 5;
	text.stroke = 'white';

	var tween = game.add.tween(text);
	tween.to({x:text.x - 20, y:text.y - 20, alpha:0}, 300, Phaser.Easing.Linear.None, true);
	tween.onComplete.add(function(obj){
		obj.destroy();
	}, this);
}

chara.kidUpdate = function(){
	if(chara.gameOver) {
		return;
	}

	for(var a = 0; a < chara.kids.length; a++){
		if(!chara.kids[a] || !chara.kids[a].alive) {
			continue;
		}
		
		if(chara.kids[a].isFinished){
			chara.kids[a].sensor.destroy();
			chara.kids[a].destroy();
			chara.kids[a] = null;			
			continue;
		}

		if(chara.kids[a].sensor.body) chara.kids[a].sensor.body.y = chara.kids[a].y - (chara.kids[a].height * 0.5);
		if(chara.kids[a].y >= chara.maxY){
			chara.gKids.bringToTop(chara.kids[a]);
			chara.kids[a].y = chara.maxY;
			if(!chara.kids[a].waitTime) chara.countDown(a);
			if(chara.kids[a].isEating){
				if(chara.kids[a].currentAnim != 'eat'){
					chara.kids[a].play('eat', false);
				}
			} else {				
				chara.kids[a].play('idle', true);
			}
		} else {
			if(!chara.kids[a].isEating){
				chara.kids[a].y += chara.kids[a].speed;				
			} else {
				if(chara.kids[a].currentAnim != 'eat'){
					// trace('yg lagi makan', a);
					chara.gKids.bringToTop(chara.kids[a]);
					chara.kids[a].play('eat', false);
				}
			}
		}

		if(plRef.attempPlay == 2 && a == 0){
			if(chara.kids[a].y >= 150){
				if(plRef.tutorText.length == 0){
					ctutorial.attemp2();
				}
			}
		}
	}

	var kidCount = 0;
	for(var a = 0; a < chara.kids.length; a++){
		if(!chara.kids[a] || !chara.kids[a].alive) continue;
		kidCount++;
	}

	if(kidCount == 0){
		// trace('chara entek');
		if(chara.gameOver) return;
		game.time.events.add(Phaser.Timer.SECOND * 2, function(){
			chara.gameOver = true;
			// trace('chara game over');
		}, this);
	}
}

chara.stopCake = function(obj){
	if(obj.sprite.occupied) return;
	obj.sprite.kidNo = this.indexNo;
	obj.sprite.occupied = true;
	obj.sprite.stop = true;
	this.isEating = true;
	this.cakeNo = obj.sprite.indexNo;
}

chara.countDown = function(a){
	chara.kids[a].waitTime = game.time.events.add(Phaser.Timer.SECOND * 2, function(){
		if(!this.isEating){
			chara.gameOver = true;
			// this.destroy();
		}
	}, chara.kids[a]);
}