cnotification = function(){

};

cnotification.create = function(){
	cnotification.arrNotif = [];
	cnotification.icons = [];
	cnotification.onGoing = false;

	var group = game.add.group(null, 'notif', true);
	group.x = BasicGame.gameWidth * 0.5;
	group.y = BasicGame.gameHeight * 0.05;

	cnotification.bg = global.addSprite(0, 0, 'inGame/active_board_polos');
	cnotification.bg.anchor.setTo(0.5);
	group.add(cnotification.bg);
	// curState().gFront.add(this);

	cnotification.icon = global.addSprite(-(cnotification.bg.width * 0.42), 0, 'inGame/achiev/achiev3');
	cnotification.icon.anchor.setTo(0.5);
	group.add(cnotification.icon);
	// console.log(this);

	// var achievement = cnotification.arrNotif[idx];
	cnotification.congrat = global.addText(-(cnotification.bg.width*0.34), 3, _t('achiev1'), 25, game_config.font1);
	cnotification.congrat.anchor.setTo(0, 0.5);
	cnotification.congrat.fill = '#0d5e4f';
	group.add(cnotification.congrat);

	cnotification.checkBox = global.addSprite(cnotification.bg.width * 0.39, 0, 'inGame/active_button');
	cnotification.checkBox.anchor.setTo(0.5);
	group.add(cnotification.checkBox);

	cnotification.checker = global.addSprite(cnotification.checkBox.x, 0, 'inGame/achievement_completed');
	cnotification.checker.anchor.setTo(0.5);
	group.add(cnotification.checker);

	// this.notifAppear();

	cnotification.notif = group;
	game.stage.removeChild(group);
}

cnotification.checkNotif = function(){
	var achievement = '';
	
	for(var a = 0; a < plRef.achievProgress.length; a++){
		var goal = '';
		if(a >= 1 && a < 6){
			goal = 'goalLink';
		} else if(a == 6){
			goal = 'goalStar';
		} else if(a == 7){
			goal = 'goalScore';
		} else if(a == 8){
			goal = 'goalGold';
		} else if(a == 9){
			goal = 'goalPowerUp';
		}

		if(a == 0 || a == 10){
			if(plRef.achievProgress[a] > 0){
				if(!plRef.notifOpened[a]){
					plRef.notifOpened[a] = true;
					achievement = _t('achiev' + (a + 1));
					cnotification.arrNotif.push(achievement);
					cnotification.icons.push(a + 1);
					Data.save();
				}
			}
		} else {
			for(var b = 0; b < gameData[goal].length; b++){
				if(plRef.achievProgress[a] >= gameData[goal][b]){
					if(!plRef.notifOpened[a][b]){
						plRef.notifOpened[a][b] = true;
						achievement = _t('achiev' + (a + 1), gameData.writeScore(gameData[goal][b]));
						cnotification.arrNotif.push(achievement);
						cnotification.icons.push(a + 1);
						Data.save();
					}
				}
			}
		}
	}

	if(!cnotification.onGoing && cnotification.arrNotif.length > 0){
		cnotification.createNotif(0);
	}
}

cnotification.createNotif = function(idx){
	csound.alert();
	cnotification.onGoing = true;
	game.stage.addChild(cnotification.notif);
	cnotification.idx = idx;

	var achievement = cnotification.arrNotif[idx];	
	cnotification.congrat.setText(achievement);
	cnotification.icon.frameName = 'inGame/achiev/achiev' + cnotification.icons[idx];

	cnotification.notif.alpha = 1;
	cnotification.notifAppear();
}

cnotification.removeNotif = function(){	
	cnotification.notif.alpha = 1;
	cnotification.arrNotif = [];
	cnotification.icons = [];
	cnotification.onGoing = false;
	game.stage.removeChild(cnotification.notif);	
}

cnotification.notifAppear = function(){
	// trace('create tween');
	// csound.alert();
	var tween = game.add.tween(cnotification.notif);
	tween.from({y: -(cnotification.notif.height * 0.7)}, 500, Phaser.Easing.Elastic.InOut, true);
	tween.onComplete.add(function(){
		var tween = game.add.tween(this);
		tween.to({alpha:0}, 500, Phaser.Easing.Linear.None, true, 1000);
		tween.onComplete.add(function(){
			var stop = false;
			if(cnotification.idx + 1 < cnotification.arrNotif.length){
				if(cnotification.arrNotif[cnotification.idx + 1]){
					// trace(cnotification.idx, cnotification.arrNotif[cnotification.idx + 1]);
					cnotification.createNotif(cnotification.idx + 1);
				} else {
					stop = true;
				}						
			} else {
				stop = true;
			}

			if(stop){					
				cnotification.removeNotif();
			}
		}, this);
	}, cnotification.notif);
}