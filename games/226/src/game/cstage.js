cstage = function (game) {

};

cstage.inherit({
	preload: function() {
		Asset.png('stageBg-01');
		Asset.atlaspng('inGame');
		BaseState.prototype.preload.call(this);
	},
	init: function() {
		BaseState.prototype.init.call(this);
		// trace("INIT", this.bg_loader);
	},

	create: function () {
		BaseState.prototype.create.call(this);
		// csound.play(1);

		this.input.maxPointers = 2;
		this.gButton = game.add.group();
		this.gStages = game.add.group();

		this.bg = game.add.sprite(this.gw * 0.5, this.gh * 0.5, 'stageBg-01', null);
		this.bg.anchor.setTo(0.5);
		// this.bg.isStretch = true;
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

		this.upgBtn = global.addSprite(this.gw * 0.5, this.gh * 0.9, 'global/upgrade');
		this.upgBtn.anchor.setTo(0.5);
		this.upgBtn.inputEnabled = true;
		this.upgBtn.events.onInputDown.add(function(){
			ctransition.close('cupgradePage');
		}, this);

		this.gCont.add(this.gStages);
		this.gCont.add(this.gButton);

		this.generateStages();

		this.onResize();
	},

	generateStages:function(){
		this.stages = [];
		this.stagesoff = [];
		var no = 1;
		for(var a = 0; a < 5; a++){
			for(var b = 0; b < 3; b++){
				var x = (this.gw * 0.2) + (b * 200);
				var y;
				if(b % 2 == 1){
					y = (this.gh * 0.15) + (a * 150);
				} else {					
					y = (this.gh * 0.2) + (a * 150);
				}

				var box = global.addSprite(x, y, 'inGame/stageOn');
				box.anchor.setTo(0.5);
				box.id = this.stages.length + 1;
				box.inputEnabled = true;
				box.events.onInputDown.add(this.goTo, this);
				this.gStages.add(box);
				this.stages.push(box);

				var boxOff = global.addSprite(x, y, 'inGame/stageOff');
				boxOff.anchor.setTo(0.5);
				boxOff.id = this.stagesoff.length;
				this.gStages.add(boxOff);
				this.stagesoff.push(boxOff);

				var text = global.addText(x, y, no + '', 40, game_config.font1);
				text.anchor.setTo(0.5);
				text.fill = '#FFEC9E';
				this.gStages.add(text);

				no++;
			}
		}

		this.checkStages();
	},

	checkStages:function(){
		for(var a = 0; a < this.stagesoff.length; a++){
			if(a < plRef.stageUnlock){
				this.stages[a].visible = true;
				this.stagesoff[a].visible = false;
			} else {
				this.stages[a].visible = false;
				this.stagesoff[a].visible = true;				
			}
		}
	},

	goTo:function(obj){
		trace("STAGE KE >>>", obj.id);
		plRef.stageNow = obj.id;
		plRef.kidMaxAppear = 8 - (plRef.stageNow * 0.2);
		plRef.kidMinAppear = 5 - (plRef.stageNow * 0.2);
		plRef.kidMinSpeed = 0.5;
		plRef.kidMaxSpeed = 1.2;
		ctransition.close('cgame');
	},

	update:function(){
		BaseState.prototype.update.call(this);
		// Data.save();
	},

}, BaseState);
