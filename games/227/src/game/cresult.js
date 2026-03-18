cresult = function(game){
	Phaser.Group.call(this, game);
	this.gh = curState().gh;
	this.gw = curState().gw;

	this.x = this.gw * 0.5;
	this.y = this.gh * 0.5;

    this.init();

    game.add.existing(this);
};

cresult.inherit({
	init:function(){
		this.gBg = game.add.group();
		this.gFrame = game.add.group();
		this.add(this.gBg);
		this.add(this.gFrame);
	},

	create:function(custCount){			
		this.resultBg = game.add.sprite(0,0,'resultBg-01', null);
		this.resultBg.anchor.setTo(0.5);
		this.gBg.add(this.resultBg);

		this.resultBg2 = global.addSprite(this.resultBg.x, this.resultBg.y, 'inGame/resultbox');
		this.resultBg2.anchor.setTo(0.5);
		this.gFrame.add(this.resultBg2);

		this.playBtn = global.addSprite(0, this.resultBg2.height * 0.38, 'global/play');
		this.playBtn.anchor.setTo(0.5);
		this.playBtn.inputEnabled = true;
		this.playBtn.events.onInputDown.add(function(obj){
			var tween = game.add.tween(obj.scale);
			tween.to({x:obj.scale.x - 0.1, y:obj.scale.y - 0.1}, 100, Phaser.Easing.Elastic.InOut, true);
			tween.yoyo(true);
			tween.onComplete.add(function(){
				ctransition.close('chome');				
			}, this);
		}, this);
		this.gFrame.add(this.playBtn);

		this.title = global.addText(0, this.resultBg2.height * -0.4, _t("result"), 60, game_config.font1);
		this.title.anchor.setTo(0.5);
		this.title.fill = 'black';
		this.gFrame.add(this.title);

		for(var a = 0; a < 3; a++){
			var x = 0;
			var y = (this.resultBg2.height * -0.2) + (a * 100);
			var tag = global.addSprite(x, y, 'inGame/resulttag');
			tag.anchor.setTo(0.5);
			this.gFrame.add(tag);

			var resText = global.addText(x, y + 7, '25555', 30, game_config.font1);
			resText.anchor.setTo(0.5);
			resText.fontWeight = 'normal';
			resText.fill = 'white';
			this.gFrame.add(resText);

			if(a == 0){
				resText.setText(curState().moneyInGame + '');
			} else if(a == 1){
				resText.setText(curState().bonus + '');
			} else {
				resText.setText(plRef.moneyInPocket + '');
			}

			var y2 = y - (tag.height * 0.9);
			var text = global.addText(x, y2, _t("total" + a), 30, game_config.font1);
			text.anchor.setTo(0.5);
			text.fill = 'black';
			text.fontWeight = "normal";
			this.gFrame.add(text);

			// this.comeIn();
		}		

		_A.win(plRef.days, plRef.moneyInPocket);
	},

	comeIn:function(){
		var comein = game.add.tween(curState().result.gFrame);
		comein.from({y : -500}, 500, Phaser.Easing.Linear.None, true);
		console.log(comein);
	},
}, Phaser.Group);