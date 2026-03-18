achievementBox = function(x, y, id){
	Phaser.Group.call(this, game);
	this.x = x;
	this.y = y;

	this.id = id;

	this.init();
};

achievementBox.inherit({
	init:function(){
		this.gProgress = game.add.group();
		this.add(this.gProgress);

		this.boxBg = global.addSprite(0, 0, 'inGame/inactive_board');
		this.boxBg.anchor.setTo(0.5);
		this.add(this.boxBg);

		this.descTxt = global.addText(-this.boxBg.width * 0.34, 3, '', 20, game_config.font1);
		this.descTxt.anchor.setTo(0, 0.5);
		this.descTxt.fill = '#0d5e4f';
		this.descTxt.fontWeight = 'normal';
		this.add(this.descTxt);

		this.gProgress.position.setTo(this.descTxt.x - 1, this.boxBg.height * 0.22);

		this.progressBar = global.addSprite(0, 0, 'inGame/bar');
		this.progressBar.anchor.setTo(0, 0.5);
		this.gProgress.add(this.progressBar);

		// this.descProgress = global.addText(this.progressBar.width * 1.1, 3, '', 20, game_config.font1);
		// this.descProgress.anchor.setTo(0, 0.5);
		// this.descProgress.fill = '#e13310';
		// this.descProgress.fontWeight = 'normal';
		// this.gProgress.add(this.descProgress);

		this.claimBtn = new clickBtn(this.boxBg.width * 0.39, 0, 'inactive_button', 'inGame');
		this.claimBtn.onClick.add(this.claimPrize, this);
		this.add(this.claimBtn);

		this.gCoin = game.add.group();
		this.claimBtn.addChild(this.gCoin);

		this.coinIcon = global.addSprite(0, 0, 'inGame/coins');
		this.coinIcon.anchor.setTo(0, 0.5);
		this.coinIcon.scale.setTo(0.8);
		this.gCoin.add(this.coinIcon);

		this.coinTxt = global.addText(this.coinIcon.width * 1.2, 3, '', 20, game_config.font1);
		this.coinTxt.anchor.setTo(0, 0.5);
		this.coinTxt.fill = 'white';
		this.coinTxt.fontWeight = 'normal';
		this.gCoin.add(this.coinTxt);

		this.checkIcon = global.addSprite(0, 0, 'inGame/achievement_completed');
		this.checkIcon.anchor.setTo(0.5);
		this.claimBtn.addChild(this.checkIcon)

		this.checkStars();
	},

	checkStars:function(){
		this.prize = 0;

		this.gIcon = game.add.group();
		this.gIcon.x = -this.boxBg.width * 0.42;
		this.add(this.gIcon);

		this.gCoin.visible = true;
		this.checkIcon.visible = false;
		this.claimBtn.inputEnabled = true;

		if(this.id == 0 || this.id == 10){
			this.gProgress.visible = false;
			this.descTxt.y = 3;
			this.noStar();
		} else {
			this.gProgress.visible = true;
			
			this.countStar = 1;			
			var goal = '';
			if(this.id >= 1 && this.id < 6){
				goal = 'goalLink';
			} else if(this.id == 6){
				goal = 'goalStar';
			} else if(this.id == 7){
				goal = 'goalScore';
			} else if(this.id == 8){
				goal = 'goalGold';
			} else if(this.id == 9){
				goal = 'goalPowerUp';
			}

			this.goalEdge = goal;

			var score = plRef.achievProgress[this.id];
			for(var a = 0; a < plRef.notifOpened[this.id].length; a++){
				if(plRef.notifOpened[this.id][a] == true){
					if(plRef.achievOpened[this.id][a] == true){
						this.countStar++;
					}
				}
			}

			var goalScore;
			if(this.countStar < 3){
				this['star' + this.countStar]();
				goalScore = gameData[goal][this.countStar - 1];
			} else {
				this.star3();
				goalScore = gameData[goal][2];
			}

			this.descTxt.y = 3 - this.descTxt.height * 0.5;
		}

		this.setPage();
	},

	setPage:function(){
		if(this.id == 0 || this.id == 10){
			if(!plRef.achievOpened[this.id]){
				if(plRef.notifOpened[this.id]){
					this.boxBg.frameName = 'inGame/active_board_polos'
					this.claimBtn.frameName = 'inGame/active_button';
					this.claimBtn.inputEnabled = true;
				} else {
					this.boxBg.frameName = 'inGame/inactive_board_polos';
					this.claimBtn.frameName = 'inGame/inactive_button';
					this.claimBtn.inputEnabled = false;
				}				
			} else {
				this.boxBg.frameName = 'inGame/active_board_polos';
				this.claimBtn.frameName = 'inGame/active_button';
				this.claimBtn.inputEnabled = false;
			}
		} else {
			if(this.countStar < 3){
				if(!plRef.achievOpened[this.id][this.countStar - 1]){
					if(plRef.notifOpened[this.id][this.countStar - 1]){
						this.boxBg.frameName = 'inGame/active_board';
						this.claimBtn.frameName = 'inGame/active_button';
						this.claimBtn.inputEnabled = true;
					} else {
						this.boxBg.frameName = 'inGame/inactive_board';
						this.claimBtn.frameName = 'inGame/inactive_button';
						this.claimBtn.inputEnabled = false;
					}					
				} else {					
					this.boxBg.frameName = 'inGame/active_board';
					this.claimBtn.frameName = 'inGame/active_button';
					this.claimBtn.inputEnabled = false;
				}
			} else {
				if(!plRef.achievOpened[this.id][2]){
					if(plRef.notifOpened[this.id][2]){
						this.boxBg.frameName = 'inGame/active_board';
						this.claimBtn.frameName = 'inGame/active_button';
						this.claimBtn.inputEnabled = true;
					} else {				
						this.boxBg.frameName = 'inGame/inactive_board';
						this.claimBtn.frameName = 'inGame/inactive_button';	
						this.claimBtn.inputEnabled = false;
					}					
				} else {				
					this.boxBg.frameName = 'inGame/active_board';
					this.claimBtn.frameName = 'inGame/active_button';
					this.claimBtn.inputEnabled = false;	
				}
			}
		}
	},

	noStar:function(){
		this.descTxt.setText(_t('achiev' + (this.id + 1)));

		if(!plRef.achievOpened[this.id]){
			var prize = gameData.priceClaim[2];
			this.prize = prize;		
			prize = gameData.writeScore(prize);
			this.coinTxt.setText(prize);
			this.gCoin.x = -(this.gCoin.width * 0.5);	
		} else {			
			this.gCoin.visible = false;
			this.checkIcon.visible = true;
			this.claimBtn.inputEnabled = false;
		}
		
		var spriteName = 'inGame/achiev/achiev' + (this.id + 1);
		var icon = global.addSprite(0, 0, spriteName);
		icon.anchor.setTo(0.5);
		this.gIcon.add(icon);
		this.gIcon.y = 0;
	},

	star1:function(){
		var goal = gameData[this.goalEdge][0];
		this.descTxt.setText(_t('achiev' + (this.id + 1), gameData.writeScore(goal)));

		var plScore = plRef.achievProgress[this.id];
		var progress = plScore + '/' + goal;
		if(plRef.achievProgress[this.id] > goal) progress = gameData.writeScore(goal) + '/' + gameData.writeScore(goal);
		//this.descProgress.setText(progress);

		this.progressBar.scale.x = plScore / goal;
		if(plScore > goal) this.progressBar.scale.x = 1;
		//trace('scale', plScore/goal);

		var prize = gameData.priceClaim[0];
		this.prize = prize;
		prize = gameData.writeScore(prize);
		this.coinTxt.setText(prize);
		this.gCoin.x = -(this.gCoin.width * 0.5);	

		var star = global.addSprite(0, 0, 'inGame/star');
		star.anchor.setTo(0.5, 0);
		star.scale.setTo(0.2);
		this.gIcon.add(star);

		var spriteName = 'inGame/achiev/achiev' + (this.id + 1);
		var icon = global.addSprite(0, star.y + (star.height * 1.2), spriteName);
		icon.anchor.setTo(0.5, 0);

		if(this.id >= 1 && this.id < 6){
			icon.scale.setTo(0.9);
		} else if(this.id == 9){
			icon.scale.setTo(0.8);
		}

		this.gIcon.add(icon);
		this.gIcon.y = -(this.gIcon.height * 0.5);
	},

	star2:function(){
		var goal = gameData[this.goalEdge][1];
		this.descTxt.setText(_t('achiev' + (this.id + 1), gameData.writeScore(goal)));

		var plScore = plRef.achievProgress[this.id];
		var progress = plScore + '/' + goal;
		if(plRef.achievProgress[this.id] > goal) progress = gameData.writeScore(goal) + '/' + gameData.writeScore(goal);
		//this.descProgress.setText(progress);

		this.progressBar.scale.x = plScore / goal;
		if(plScore > goal) this.progressBar.scale.x = 1;

		var prize = gameData.priceClaim[1];
		this.prize = prize;
		this.coinTxt.setText(prize);
		prize = gameData.writeScore(prize);
		this.gCoin.x = -(this.gCoin.width * 0.5);	
		
		for(var a = 0; a < 2; a++){
			var star = global.addSprite(0, 0, 'inGame/star');
			star.anchor.setTo(0.5, 0);
			star.scale.setTo(0.2);

			var x = (-(star.width * 0.7)) + (a * star.width * 1.4);
			star.x = x;
			
			this.gIcon.add(star);
		}


		var spriteName = 'inGame/achiev/achiev' + (this.id + 1);
		var icon = global.addSprite(0, star.y + (star.height * 1.2), spriteName);
		icon.anchor.setTo(0.5, 0);

		if(this.id >= 1 && this.id < 6){
			icon.scale.setTo(0.9);
		} else if(this.id == 9){
			icon.scale.setTo(0.8);
		}

		this.gIcon.add(icon);
		this.gIcon.y = -(this.gIcon.height * 0.5);
	},

	star3:function(){
		var goal = gameData[this.goalEdge][2];
		this.descTxt.setText(_t('achiev' + (this.id + 1), gameData.writeScore(goal)));

		var plScore = plRef.achievProgress[this.id];
		var progress = plScore + '/' + goal;
		if(plRef.achievProgress[this.id] > goal) progress = gameData.writeScore(goal) + '/' + gameData.writeScore(goal);
		//this.descProgress.setText(progress);

		this.progressBar.scale.x = plScore / goal;
		if(plScore > goal) this.progressBar.scale.x = 1;

		if(!plRef.achievOpened[this.id][2]){
			var prize = gameData.priceClaim[2];
			this.prize = prize;			
			prize = gameData.writeScore(prize);
			this.coinTxt.setText(prize);
			this.gCoin.x = -(this.gCoin.width * 0.5);	
		} else {
			this.gCoin.visible = false;
			this.checkIcon.visible = true;
			this.claimBtn.inputEnabled = false;
		}
		
		for(var a = 0; a < 3; a++){
			var star = global.addSprite(0, 0, 'inGame/star');
			star.anchor.setTo(0.5, 0);
			star.scale.setTo(0.2);

			var x = (-(star.width * 1.2)) + (a * star.width * 1.2);
			star.x = x;
			
			this.gIcon.add(star);
		}


		var spriteName = 'inGame/achiev/achiev' + (this.id + 1);
		var icon = global.addSprite(0, star.y + (star.height * 1.2), spriteName);
		icon.anchor.setTo(0.5, 0);

		if(this.id >= 1 && this.id < 6){
			icon.scale.setTo(0.9);
		} else if(this.id == 9){
			icon.scale.setTo(0.8);
		}

		this.gIcon.add(icon);
		this.gIcon.y = -(this.gIcon.height * 0.5);
	},

	showAchievement:function(){
		this.gIcon.destroy();
		this.checkStars();
	},

	claimPrize:function(){
		csound.pick_prize();
		plRef.achievProgress[8] += this.prize;
		if(this.id == 0 || this.id == 10){
			plRef.achievOpened[this.id] = true;
			plRef.notifOpened[this.id] = true;
		} else {
			plRef.achievOpened[this.id][this.countStar - 1] = true;
			plRef.notifOpened[this.id][this.countStar - 1] = true;
		}

		var tweenThis = game.add.tween(this.scale);
		tweenThis.to({y:0}, 300, Phaser.Easing.Linear.None, true, 0, 0, true);
		tweenThis.onLoop.add(function(){
			curState().setPage();
		}, this);
	},

	update:function(){
		// this.progressBar.scale.x = 0.2;
	},
}, Phaser.Group);