cquest = function(game, x, y){
	this.gQuest = game.add.group();

	Phaser.Sprite.call(this, game, x, y, 'inGame');
	this.anchor.setTo(0.5);
	this.scale.setTo(1.2, 1);
	this.frameName = 'inGame/miniquest_box';
	this.gQuest.add(this);

	this.mission = global.addText(this.x - (this.width * 0.38), this.y - (this.height * 0.25), _t('mission'), 25, game_config.font1);
	this.mission.anchor.setTo(0, 0.5);
	this.mission.fill = 'red';
	this.mission.fontWeight = 'normal';
	this.gQuest.add(this.mission);

	this.missionDesc = global.addText(this.mission.x, this.mission.y + (this.mission.height * 0.3), "Don't use power up in : ", 25, game_config.font1);
	// this.missionDesc.anchor.setTo(0, 0.5);
	this.missionDesc.fill = '#ea7e14';
	this.missionDesc.fontWeight = 'normal';
	this.missionDesc.wordWrap = true;
	this.missionDesc.wordWrapWidth = this.width * 0.6;
	this.missionDesc.lineSpacing = -10;
	this.gQuest.add(this.missionDesc);

	this.goal = global.addText(this.missionDesc.x + this.missionDesc.width + 8, this.mission.y + (this.mission.height * 0.8), "100/100", 25, game_config.font1);
	this.goal.anchor.setTo(0, 0.5);
	this.goal.fill = 'red';
	this.goal.fontWeight = 'normal';
	this.gQuest.add(this.goal);	

	this.starter = 10;

	this.quest1 = 0;
	this.quest2 = 0;
	this.quest3 = 0;
	this.quest4 = 0;
};

cquest.inherit({
	generateQuest:function(){
		var rndm = game.rnd.integerInRange(1,4);
		// rndm = 1;
		chara.questId = rndm;

		var text = _t('quest' + rndm);
		var goal = '';
		chara.questGoal = 0;
		chara.questPt = 0;
		chara.startCountH = plRef.distanceNow;

		if(rndm == 1){
			chara.questGoal = this.starter + (this.quest1 * 2);
			goal = _t('goal1', chara.questPt, chara.questGoal);
		} else if(rndm == 2){
			chara.questGoal = this.starter + (this.quest2 * 2);
			// goal = chara.questPt + "/" + chara.questGoal + 'm';
			goal = _t('goal2', chara.questPt, chara.questGoal); 
		} else if(rndm == 3){
			chara.questGoal = this.starter + (this.quest3 * 2);
			goal = _t('goal2', chara.questPt, chara.questGoal); 
		} else if(rndm == 4){
			chara.questGoal = this.starter + (this.quest4 * 2);
			goal = _t('goal2', chara.questPt, chara.questGoal); 			
		}

		this.missionDesc.setText(text);
		this.goal.setText(goal);
		this.goal.x = this.missionDesc.x + this.missionDesc.width + 5;
	},

	effect:function(){
		csound.success();

		var effect = global.addSprite(this.x, this.y - (this.height * 0.5), 'inGame/hit1');
		effect.anchor.setTo(0.5);

		var effAnim = effect.animations.add('hit', Phaser.Animation.generateFrameNames('inGame/hit', 1, 4, '', 1), 20);
		effAnim.onComplete.add(function(){
			effect.destroy();		
		}, this);
		
		effect.play('hit');

		var centang = global.addSprite(this.x - (this.width * 0.4), this.y - (this.height * 0.9), 'pageDecor/centang_ok');
		centang.anchor.setTo(0.5);
		this.gQuest.add(centang);

		var success = global.addText(centang.width * 0.5, 5, _t('missionsuccess'), 28, game_config.font1);
		success.anchor.setTo(0, 0.5);
		success.fill = '#ea7e14';
		centang.addChild(success);

		var tweenCentang = game.add.tween(centang.scale);
		tweenCentang.from({y:0}, 100, Phaser.Easing.Circular.InOut, true);
		tweenCentang.onComplete.add(function(){
			var tweenOut = game.add.tween(centang.scale);
			tweenOut.to({y:0}, 100, Phaser.Easing.Circular.InOut, true, 2000);
			tweenOut.onComplete.add(function(){
				centang.destroy();
			}, this);
		}, this);
	},

	checkPt:function(){
		var goal = '';
		if(chara.questId > 1){
			goal = chara.questPt + "/" + chara.questGoal + 'm'; 			 			
		} else {			
			goal = chara.questPt + "/" + chara.questGoal;
		}

		this.goal.setText(goal);

		if(chara.questPt == chara.questGoal){
			if(chara.questId == 1){
				this.quest1++;
			} else if(chara.questId == 2){
				this.quest2++;
			} else if(chara.questId == 3){
				this.quest3++;
			} else if(chara.questId == 4){
				this.quest4++;
			}

			this.effect();
			chara.scrambleDiamond(this);
			this.generateQuest();
		}
	},
}, Phaser.Sprite);