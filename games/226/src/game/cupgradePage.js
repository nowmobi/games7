cupgradePage = function(game){

};

cupgradePage.inherit({
	preload:function(){
		BaseState.prototype.preload.call(this);
		Asset.png('stageBg-01');
		Asset.atlaspng('inGame');
	},

	init:function(){
		BaseState.prototype.init.call(this);
	},

	create:function(){
		BaseState.prototype.create.call(this);
		// csound.play(0);
		this.gButton = game.add.group();
		this.gInGame = game.add.group();

		this.bg = game.add.sprite(this.gw*0.5, this.gh*0.5, 'stageBg-01', null);
		this.bg.anchor.setTo(0.5);
		this.gBG.add(this.bg);

		this.soundBtn = new csound(game, this.gw * 0.9, this.gh * 0.05);
		this.soundBtn.anchor.setTo(0.5);
		this.gButton.add(this.soundBtn);

		this.moneyBg = global.addSprite(this.gw * 0.16, this.soundBtn.y, 'inGame/moneyBg');
		this.moneyBg.anchor.setTo(0.5);
		this.gButton.add(this.moneyBg);

		this.plMoney = global.addText(this.moneyBg.x - (this.moneyBg.width * 0.05), this.moneyBg.y + 8, '' + plRef.moneyInPocket, 50, game_config.font1);
		this.plMoney.anchor.setTo(0, 0.5);
		this.plMoney.fill = 'white';
		this.gButton.add(this.plMoney);

		this.upgBoxes = [];
		for(var a = 0; a < 3; a++){
			var x = this.gw * 0.5;
			var y = (this.gh * 0.25) + (a * 250);
			var box = global.addSprite(x, y, 'inGame/upgradeBox');
			box.anchor.setTo(0.5);
			box.id = a;
			this.gInGame.add(box);

			x = box.x + (box.width * 0.08);
			y = box.y - (box.height * 0.4);
			box.titleBox = global.addSprite(x, y, 'inGame/boostTitle');
			box.titleBox.anchor.setTo(0.5);
			this.gInGame.add(box.titleBox);

			x = box.x - (box.width * 0.38);
			y = box.y;
			box.icon = global.addSprite(x, y, 'inGame/boost' + a);
			box.icon.anchor.setTo(0.5);
			this.gInGame.add(box.icon);

			x = box.x + (box.width * 0.35);
			y = box.y + (box.height * 0.5);
			box.btnOff = global.addSprite(x, y, 'global/buyBtn-Off')
			box.btnOff.anchor.setTo(0.5);
			this.gInGame.add(box.btnOff);

			x = box.btnOff.x;
			y = box.btnOff.y;
			box.btnOn = global.addSprite(x, y, 'global/buyBtn');
			box.btnOn.anchor.setTo(0.5);
			box.btnOn.id = a;
			box.btnOn.inputEnabled = true;
			box.btnOn.events.onInputDown.add(this.buySkill, this);
			this.gInGame.add(box.btnOn);

			x = box.btnOff.x - (box.btnOff.width * 0.32);
			box.dollar = global.addSprite(x, y, 'inGame/dolarIcon');
			box.dollar.anchor.setTo(0.5);
			this.gInGame.add(box.dollar);

			x = box.dollar.x + (box.dollar.width * 0.6);
			box.price = global.addText(x, y + 3, '2345', 30, game_config.font1);
			box.price.anchor.setTo(0, 0.5);
			box.price.fill = 'white';
			this.gInGame.add(box.price);

			x = box.btnOff.x;
			box.btnMax = global.addSprite(x, y, 'inGame/maxUpgrade');
			box.btnMax.anchor.setTo(0.5);
			box.btnMax.visible = false;
			this.gInGame.add(box.btnMax);			

			x = box.titleBox.x - (box.titleBox.width * 0.5);
			y = box.y + (box.height * 0.22);
			box.barBg = global.addSprite(x, y, 'inGame/upgradeBar-bg');
			box.barBg.anchor.setTo(0, 0.5);
			this.gInGame.add(box.barBg);

			box.barFront = [];
			for(var b = 0; b < 5; b++){
				var xPos = (box.barBg.x + (box.barBg.width * 0.115)) + (b * 52);
				var yPos = box.barBg.y;
				var bar = global.addSprite(xPos, yPos, 'inGame/upgradeBar-front');
				bar.anchor.setTo(0.5);
				this.gInGame.add(bar);
				box.barFront.push(bar);
			}

			x = box.titleBox.x + 5;
			y = box.titleBox.y - 10;
			box.titleTxt = global.addText(x, y, _t("upgradetitle" + a), 40, game_config.font1);
			box.titleTxt.anchor.setTo(0.5);
			box.titleTxt.fill = '#FFAE17';
			box.titleTxt.fontWeight = 'normal';
			this.gInGame.add(box.titleTxt);

			x = box.titleBox.x;
			y = box.y - 10;
			box.desc = global.addText(x, y, _t("boost" + a), 30, game_config.font1);
			box.desc.anchor.setTo(0.5);
			box.desc.fill = 'white';
			box.desc.fontWeight = 'normal';
			this.gInGame.add(box.desc);			

			this.upgBoxes.push(box);
		}

		this.homeBtn = global.addSprite(this.gw * 0.5, this.gh * 0.92, 'global/home');
		this.homeBtn.anchor.setTo(0.5);
		this.homeBtn.inputEnabled = true;
		this.homeBtn.events.onInputDown.add(function(){
			ctransition.close('cstage');
		}, this);
		this.gButton.add(this.homeBtn);

		this.showLvl();

		this.gCont.add(this.gInGame);
		this.gCont.add(this.gButton);

		this.onResize();
	},

	showLvl:function(){
		for(var a = 0; a < this.upgBoxes.length; a++){
			this.upgBoxes[a].price.setText(plRef.upgPrice[a] + '');

			for(var b = 0; b < this.upgBoxes[a].barFront.length; b++){
				if(b < plRef.boostLvl[a]){
					this.upgBoxes[a].barFront[b].visible = true;
				} else {
					this.upgBoxes[a].barFront[b].visible = false;
				}
			}

			if(plRef.moneyInPocket >= plRef.upgPrice[a]){
				this.upgBoxes[a].btnOn.visible = true;
				this.upgBoxes[a].btnOff.visible = false;
			} else {
				this.upgBoxes[a].btnOn.visible = false;
				this.upgBoxes[a].btnOff.visible = true;
			}

			if(plRef.boostLvl[a] >= this.upgBoxes[a].barFront.length){
				this.upgBoxes[a].btnOn.visible = false;
				this.upgBoxes[a].btnOff.visible = false;
				this.upgBoxes[a].price.visible = false;
				this.upgBoxes[a].dollar.visible = false;
				this.upgBoxes[a].btnMax.visible = true;
			} 
		}
	},

	buySkill:function(obj){
		trace("OBJECT ID >>> ", obj.id);
		csound.cash();

		if(obj.id == 0){
			plRef.runSpeed += 0.5;
		} else if(obj.id == 1){
			plRef.cookTime -= 8;
		} else if(obj.id == 2){
			plRef.variant++;
		}

		plRef.moneyInPocket -= plRef.upgPrice[obj.id];
		plRef.upgPrice[obj.id] += 1000;
		plRef.boostLvl[obj.id]++;
		this.showLvl();
	},

	update:function(){
		BaseState.prototype.update.call(this);
		Data.save();

		this.plMoney.setText(plRef.moneyInPocket + '');
	},
}, BaseState);