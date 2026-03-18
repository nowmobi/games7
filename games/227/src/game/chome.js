chome = function(game){

};

chome.inherit({
	preload:function(){
		BaseState.prototype.preload.call(this);
		Asset.png('menuBg-01');
	},

	init:function(){
		BaseState.prototype.init.call(this);
	},

	create:function(){
		BaseState.prototype.create.call(this);
		csound.play(0);
		this.gInGame = game.add.group();
		this.gButton = game.add.group();

		if(plRef.recipeUnlock < 20){
			plRef.nextGoal = gameData.goal[plRef.recipeUnlock];
		} else {
			plRef.nextGoal = (gameData.goal[19] * 0.2) + plRef.nextGoal; 
		}

		this.bg = game.add.sprite(this.gw*0.5, this.gh * 0.5, 'menuBg-01', null);
		this.bg.anchor.setTo(0.5);
		// this.bg.isStretch = true;
		this.gBG.add(this.bg);

		this.book = global.addSprite(this.gw * 0.5, this.gh * 0.5, 'pageDecor/homebox');
		this.book.anchor.setTo(0.5);
		this.gInGame.add(this.book);

		this.titlePage = global.addText(this.gw * 0.5, this.book.y - (this.book.height * 0.3), _t("journal"), 80, game_config.font2);
		this.titlePage.anchor.setTo(0.5);
		this.titlePage.fill = 'black';
		this.gInGame.add(this.titlePage);

		for(var a = 0; a < 2; a++){
			var y = (this.book.y - (this.book.height * 0.1)) + (a * 150);
			var tag = global.addSprite(this.gw * 0.5, y, 'inGame/resulttag');
			tag.anchor.setTo(0.5);
			tag.scale.setTo(1.2);
			this.gInGame.add(tag);

			var text = global.addText(tag.x, tag.y - (tag.height * 0.9), _t("journal" + a), 40, game_config.font2);
			text.anchor.setTo(0.5);
			text.fill = 'black';
			this.gInGame.add(text);

			this["money_" + a] = global.addText(tag.x, tag.y + 5, '', 40, game_config.font2);
			this["money_" + a].anchor.setTo(0.5);
			this["money_" + a].fill = 'white';
			this.gInGame.add(this["money_" + a]);

			if(a == 0){
				this["money_" + a].setText(plRef.moneyInPocket + '');				
			} else if(a == 1){
				this["money_" + a].setText(plRef.nextGoal + '');
			}
		}

		this.menuBtn = global.addSprite(this.gw * 0.5, this.book.y + (this.book.height * 0.25), 'global/menuBook');
		this.menuBtn.anchor.setTo(0.5);
		this.menuBtn.inputEnabled = true;
		this.menuBtn.events.onInputDown.add(function(obj){		
			csound.click();	
			var tween = game.add.tween(obj.scale);
			tween.to({x:obj.scale.x - 0.1, y:obj.scale.y - 0.1}, 100, Phaser.Easing.Elastic.InOut, true);
			tween.yoyo(true);			
			tween.onComplete.add(function(){
				ctransition.close('cmenuBook');
			}, this);
		}, this);
		this.gButton.add(this.menuBtn);

		this.menuTxt = global.addText(0, this.menuBtn.height * 0.8, _t("menubook"), 40, game_config.font2);
		this.menuTxt.anchor.setTo(0.5);
		this.menuTxt.fill = 'black';
		this.menuBtn.addChild(this.menuTxt);

		this.soundBtn = new csound(game, this.gw * 0.9, this.gh * 0.05);
		this.soundBtn.anchor.setTo(0.5);
		this.gButton.add(this.soundBtn);

		this.homeBtn = global.addSprite(this.gw * 0.1, this.soundBtn.y, 'global/home');
		this.homeBtn.anchor.setTo(0.5);
		this.homeBtn.scale.setTo(0.7);
		this.homeBtn.inputEnabled = true;
		this.homeBtn.events.onInputDown.add(function(obj){
			csound.click();
			var tween = game.add.tween(obj.scale);
			tween.to({x:obj.scale.x - 0.1, y:obj.scale.y - 0.1}, 100, Phaser.Easing.Elastic.InOut, true);
			tween.yoyo(true);			
			tween.onComplete.add(function(){
				ctransition.close('cmainmenu');
			}, this);
		}, this);
		this.gButton.add(this.homeBtn);

		this.playBtn = global.addSprite(this.gw * 0.5, this.book.y + (this.book.height * 0.5), 'global/play');
		this.playBtn.anchor.setTo(0.5);
		this.playBtn.inputEnabled = true;
		this.playBtn.events.onInputDown.add(function(obj){			
			csound.click();		
			var tween = game.add.tween(obj.scale);
			tween.to({x:obj.scale.x - 0.1, y:obj.scale.y - 0.1}, 100, Phaser.Easing.Elastic.InOut, true);
			tween.yoyo(true);			
			tween.onComplete.add(function(){
				ctransition.close('cgame');
			}, this);
		},this);
		this.gButton.add(this.playBtn);

		this.gCont.add(this.gInGame);
		this.gCont.add(this.gButton);
		// this.generateNotif();
		this.checkGoal();

		this.onResize();
	},

	checkGoal:function(){
		if(plRef.moneyInPocket >= plRef.nextGoal){
			trace('masuk goal');
			csound.missionsuccess();
			plRef.goalIndex++;
			plRef.nextGoal = gameData.goal[plRef.goalIndex];
			this.money_1.setText(plRef.nextGoal + '');
			this.notif = new cnotification(game, this.gw * 0.5, this.gh * 0.5);
			if(plRef.recipeUnlock < 20){
				plRef.recipeUnlock++;
				this.notif.congrat.setText(_t("goalunlock", _t("openrecipe", _t("burger" +  plRef.recipeUnlock))));
			} else {
				this.notif.congrat.setText(_t("goalunlock", ''));
			}

			var tween = game.add.tween(this.menuBtn.scale);
			tween.to({x : this.menuBtn.scale.x + 0.1, y : this.menuBtn.scale.y + 0.1}, 500, Phaser.Easing.Circular.InOut, true, 0, -1, true);
			
			Data.save();
		}
	},

	update:function(){
		BaseState.prototype.update.call(this);
		if(this.notif){
			this.gButton.forEach(function(obj){
				obj.inputEnabled = false;
			}, this);
			return;
		} else {
			this.gButton.forEach(function(obj){
				obj.inputEnabled = true;
			}, this);			
		}
	},

}, BaseState);