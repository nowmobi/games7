cupgradePage = function(game){

};

cupgradePage.inherit({
	preload:function(){
		BaseState.prototype.preload.call(this);
		Asset.png('upgradeBg');
	},

	init:function(){
		BaseState.prototype.init.call(this);
	},

	create:function(){
		BaseState.prototype.create.call(this);
		csound.play(2);
		this.gButton = game.add.group();
		this.gInGame = game.add.group();
		this.gDrawer = game.add.group();

		this.bg = game.add.sprite(this.gw*0.5, this.gh*0.5, 'upgradeBg', null);
		this.bg.anchor.setTo(0.5);
		this.gBG.add(this.bg);

		this.closeBtn = global.addSprite(this.gw * 0.9, this.gh * 0.05, 'global/close');
		this.closeBtn.anchor.setTo(0.5);
		this.closeBtn.inputEnabled = true;
		this.closeBtn.events.onInputDown.add(function(obj){
			var tween = game.add.tween(obj.scale);
			tween.to({x:obj.scale.x - 0.1, y:obj.scale.y-0.1}, 100, Phaser.Easing.Elastic.InOut, true);
			tween.yoyo(true);
			tween.onComplete.add(function(){
				ctransition.close("chome");
			}, this);
		}, this);
		this.gButton.add(this.closeBtn);

		this.soundBtn = new csound(game, this.closeBtn.x - (this.closeBtn.width * 1.2), this.closeBtn.y);
		this.soundBtn.anchor.setTo(0.5);
		this.soundBtn.scale.setTo(0.9);
		this.gButton.add(this.soundBtn);

		this.goldIcon = global.addSprite(this.gw * 0.1, this.closeBtn.y, 'inGame/gold');
		this.goldIcon.anchor.setTo(0.5);
		this.goldIcon.scale.setTo(1.5);
		this.gInGame.add(this.goldIcon);

		this.plGold = global.addText(this.goldIcon.x + (this.goldIcon.width * 0.7), this.goldIcon.y + 3, plRef.moneyInPocket + '', 45, game_config.font1);
		this.plGold.anchor.setTo(0, 0.5);
		this.plGold.fill = 'white';
		this.gInGame.add(this.plGold);

		this.titlePage = global.addText(this.gw * 0.5, this.gh * 0.12, _t("upgrade"), 60, game_config.font1);
		this.titlePage.anchor.setTo(0.5);
		this.titlePage.fill = "#ffd500";
		this.gInGame.add(this.titlePage);

		this.selectBoxes = [];

		for(var a = 0; a < 5; a++){
			var box = global.addSprite(this.gw * 0.5, (this.gh * 0.22) + (a * 140), 'pageDecor/not_selected_upgrade');
			box.anchor.setTo(0.5);
			box.id = a;
			box.isSelected = false;
			box.inputEnabled = true;
			box.events.onInputDown.add(this.checkSelected, this);
			this.gInGame.add(box);

			var icon = global.addSprite(-1 * (box.width * 0.3), 0, 'pageDecor/upg' + a);
			icon.anchor.setTo(0.5);
			box.addChild(icon);

			var upgTitle = global.addText(-1 * (box.width * 0.2), -1 * (box.height * 0.2), _t("upgrade" + a), 40, game_config.font1);
			upgTitle.anchor.setTo(0, 0.5);
			upgTitle.fill = "#a60000";
			box.addChild(upgTitle);

			this.selectBoxes.push(box);
		}

		this.upgLevels = [];

		for(var a = 0; a < this.selectBoxes.length; a++){
			this.upgLevels[a] = [];
			for(var b = 0; b < 7; b++){
				var xPos = (-1 * (this.selectBoxes[a].width * 0.18)) + (b * 60);
				var yPos = this.selectBoxes[a].height * 0.2;
				var box = global.addSprite(xPos, yPos, 'pageDecor/upgrade_kosong');
				box.anchor.setTo(0.5);
				box.id = b;
				this.selectBoxes[a].addChild(box);
				this.upgLevels[a][b] = box;
			}
		}

		this.descBox = global.addSprite(this.gw * 0.5, this.selectBoxes[0].y, 'pageDecor/description_upgrade');
		this.descBox.anchor.setTo(0.5);
		this.gDrawer.add(this.descBox);

		this.descText = global.addText(-1 * (this.descBox.width * 0.35), 3, _t('desc0'), 26, game_config.font1);
		this.descText.anchor.setTo(0, 0.5);
		this.descText.fill = 'white';
		this.descText.fontWeight = 'normal';
		this.descBox.addChild(this.descText);

		this.addPoint = global.addText(this.descText.x + (this.descText.width * 1.02), this.descText.y, "+ " + 10, 26, game_config.font1);
		this.addPoint.anchor.setTo(0, 0.5);
		this.addPoint.fill = '#76c400';
		this.descBox.addChild(this.addPoint);

		this.upgBtn = global.addSprite(this.descBox.width * 0.28, 0, 'global/button_upgrade_on');
		this.upgBtn.anchor.setTo(0.5);
		this.upgBtn.id = 0;
		this.upgBtn.events.onInputDown.add(this.buySkill, this);
		this.descBox.addChild(this.upgBtn);

		this.coinIcon = global.addSprite(-1 * (this.upgBtn.width * 0.18), -1 * (this.upgBtn.height * 0.2), 'inGame/gold');
		this.coinIcon.anchor.setTo(0.5);
		this.coinIcon.scale.setTo(0.8);
		this.upgBtn.addChild(this.coinIcon);

		this.showPrice = global.addText(this.coinIcon.x + (this.coinIcon.width * 0.7), this.coinIcon.y + 3, '100', 25, game_config.font1);
		this.showPrice.anchor.setTo(0, 0.5);
		this.showPrice.fill  = 'white';
		this.upgBtn.addChild(this.showPrice);

		this.upgradeTxt = global.addText(0, this.upgBtn.height * 0.2, _t("upgrade"), 28, game_config.font1);
		this.upgradeTxt.anchor.setTo(0.5);
		this.upgradeTxt.fill = 'white';
		this.upgBtn.addChild(this.upgradeTxt);

		this.maxBtn = global.addSprite(0,0,'global/upgMax');
		this.maxBtn.anchor.setTo(0.5);
		this.upgBtn.addChild(this.maxBtn);

		this.onGoing = false;

		this.gCont.add(this.gDrawer);
		this.gCont.add(this.gInGame);
		this.gCont.add(this.gButton);

		this.showLevel();
		this.onResize();
	},

	showLevel:function(){
		for(var a = 0; a < this.upgLevels.length; a++){
			for(var b = 0; b < this.upgLevels[a].length; b++){
				if(b < plRef.skillLvl[a]){
					this.upgLevels[a][b].frameName = 'pageDecor/upgrade_full';
				}
			}
		}
	},

	buySkill:function(obj){
		if(this.onGoing) return;

		csound.cash();
		if(obj.id == 0){
			plRef.bounceCount++;
		} else if(obj.id == 1){
			plRef.flyDuration += 0.5;
		} else if(obj.id == 2){
			plRef.invinDuration += 0.5;
		} else if(obj.id == 3){
			plRef.powerUpChance++;
		} else if(obj.id == 4){
			plRef.emptyRoad += 5;
		}

		plRef.moneyInPocket -= plRef.skillPrice[obj.id];
		plRef.skillLvl[obj.id]++;
		plRef.skillPrice[obj.id] += 100;
		this.showPrice.setText(plRef.skillPrice[obj.id] + '');

		if(plRef.moneyInPocket < plRef.skillPrice[obj.id]){
			this.upgBtn.frameName = 'global/button_upgrade_off';
			this.upgBtn.inputEnabled = false;
		}

		if(plRef.skillLvl[obj.id] >= 7){
			this.maxBtn.visible = true;
			this.upgBtn.inputEnabled = false;
		}

		var tween = game.add.tween(obj.scale);
		tween.to({x:obj.scale.x - 0.1, y:obj.scale.y - 0.1}, 100, Phaser.Easing.Elastic.InOut, true);
		tween.yoyo(true);
		tween.onComplete.add(function(){
			this.showLevel();			
		}, this);
	},

	checkSelected:function(obj){
		if(this.onGoing) return;
		csound.click();
		this.onGoing = true;
		if(obj.isSelected){
			this.slideUp();
		} else {
			this.slideDown(obj);
		}
	},

	slideDown:function(obj){
		var boxActExist = false;
		var boxId;
		for(var a = 0; a < this.selectBoxes.length; a++){
			if(this.selectBoxes[a].isSelected){
				this.selectBoxes[a].frameName = 'pageDecor/not_selected_upgrade';
				this.selectBoxes[a].isSelected = false;
				boxActExist = true;
				boxId = a;
				break;
			}
		}

		obj.frameName = 'pageDecor/selected_upgrade';
		obj.isSelected = true;
		var xPos = obj.x;
		var yPos = obj.y;

		if(boxActExist){
			if(obj.id > boxId){
				yPos -= 140;
				for(var a = 0; a < this.selectBoxes.length; a++){
					if(a > boxId && a <= obj.id){
						var tweenUp = game.add.tween(this.selectBoxes[a]);
						tweenUp.to({y:this.selectBoxes[a].y - 140}, 200, Phaser.Easing.Circular.InOut, true);
						tweenUp.onComplete.add(function(){
							this.onGoing = false;
						}, this);
					}
				}
			} else if(obj.id < boxId){
				for(var a = 0; a < this.selectBoxes.length; a++){
					if(a > obj.id && a <= boxId){
						var tweenDown = game.add.tween(this.selectBoxes[a]);
						tweenDown.to({y:this.selectBoxes[a].y + 140}, 200, Phaser.Easing.Circular.InOut, true);	
						tweenDown.onComplete.add(function(){
							this.onGoing = false;
						}, this);
					} 
				}
			}
		} else {
			for(var a = 0; a < this.selectBoxes.length; a++){
				if(a > obj.id){
					var tweenDown = game.add.tween(this.selectBoxes[a]);
					tweenDown.to({y:this.selectBoxes[a].y + 140}, 200, Phaser.Easing.Circular.InOut, true);				
					tweenDown.onComplete.add(function(){
						this.onGoing = false;
					}, this);
				} 
			}
		}


		this.descBox.position.setTo(xPos, yPos);
		var tweenDown = game.add.tween(this.descBox);
		tweenDown.to({y:this.descBox.y + 140}, 200, Phaser.Easing.Circular.InOut, true);
		tweenDown.onComplete.add(function(){
			this.onGoing = false;
		}, this);

		this.descText.setText(_t("upgrade" + obj.id));
		this.addPoint.setText(_t("add" + obj.id));
		this.addPoint.x = this.descText.x + (this.descText.width * 1.04);
		this.upgBtn.id = obj.id;
		this.showPrice.setText(plRef.skillPrice[obj.id] + '');

		if(plRef.moneyInPocket >= plRef.skillPrice[obj.id]){
			this.upgBtn.frameName = 'global/button_upgrade_on';
			this.upgBtn.inputEnabled = true;
		} else {
			this.upgBtn.frameName = 'global/button_upgrade_off';
			this.upgBtn.inputEnabled = false;
		}

		if(plRef.skillLvl[obj.id] >= 7){
			this.maxBtn.visible = true;
			this.upgBtn.inputEnabled = false;
		} else {
			this.maxBtn.visible = false;
		}
	},

	slideUp:function(){		
		var shouldslide = false;
		var selectedId = 0;
		for(var a = 0; a < this.selectBoxes.length; a++){
			if(this.selectBoxes[a].isSelected){
				if(!shouldslide){
					shouldslide = true;
					selectedId = a;
					this.selectBoxes[a].frameName = 'pageDecor/not_selected_upgrade';
					this.selectBoxes[a].isSelected = false;
				}
			}

			if(shouldslide && a > selectedId){
				var tweenUp = game.add.tween(this.selectBoxes[a]);
				tweenUp.to({y:this.selectBoxes[a].y - 140}, 200, Phaser.Easing.Circular.InOut, true);
				tweenUp.onComplete.add(function(){
					this.onGoing = false;
				}, this);
			}
		}	

		var tweenDown = game.add.tween(this.descBox);
		tweenDown.to({y:this.descBox.y - 140}, 200, Phaser.Easing.Circular.InOut, true);
		tweenDown.onComplete.add(function(){
			this.onGoing = false;
		}, this);
	},

	update:function(){
		BaseState.prototype.update.call(this);
		Data.save();
		this.plGold.setText(plRef.moneyInPocket + '');
	},
}, BaseState);