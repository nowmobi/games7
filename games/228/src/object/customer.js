customer = function(x, y, pos, id){
	Phaser.Group.call(this, game);
	this.x = x;
	this.y = y;
	this.id = id;
	this.pos = pos;

	this.gCust = game.add.group();
	this.gPanel = game.add.group();
	this.gOrder = game.add.group();
	this.add(this.gCust);
	this.add(this.gOrder);

	this.isStaggering = false;

	this.init();
};

customer.inherit({
	init:function(){
		var type = game.rnd.pick(gameData.custList);
		this.type = type;
		this.customer = global.addSprite(0, 0, 'inGame/' + type + '_normal');
		this.customer.anchor.setTo(0.5, 1);
		this.customer.scale.setTo(0.68);
		this.gCust.add(this.customer);

		this.gCust.add(this.gPanel);

		this.panel = global.addSprite(0, 0, 'inGame/balon_kata');
		this.panel.anchor.setTo(0, 1);
		this.gPanel.add(this.panel);

		this.panelBox = global.addSprite(this.panel.x, this.panel.y - this.panel.height, 'inGame/order_box');
		this.panelBox.anchor.setTo(0, 1);
		this.gPanel.add(this.panelBox);

		this.gPanel.x = this.customer.x + (this.customer.width * 0.52);
		this.gPanel.y = this.customer.y - 106;

		// trace('this.id', this.pos);
		if(this.pos % 2 == 1){
			this.gCust.scale.x = -1;
		}

		this.gOrder.x = (this.gCust.x + this.gPanel.x + (this.gPanel.width * 0.5)) * this.gCust.scale.x;
		this.gOrder.y = this.gPanel.y + (this.panelBox.y - (this.panelBox.height * 0.5));

		if(gameData.gameMode == 'rush'){
			this.order = gameData.stageGoals[this.id][0];
			this.goal = gameData.stageGoals[this.id][1];			
		} else {
			this.order = game.rnd.pick(gameData.stageObjects);
			this.goal = game.rnd.integerInRange(gameData.minGoal, gameData.maxGoal);
		}

		this.countOrder = this.goal;

		this.orderPict = global.addSprite(-this.panelBox.width * 0.2, 0, 'objects/' + this.order);
		this.orderPict.anchor.setTo(0.5);
		this.orderPict.scale.setTo(0.8);
		this.gOrder.add(this.orderPict);

		this.orderTxt = global.addText(5, 3, _t('goal', this.goal), 25, game_config.font1);
		this.orderTxt.anchor.setTo(0, 0.5);
		this.orderTxt.fill = 'white';
		this.orderTxt.fontWeight = 'normal';
		this.gOrder.add(this.orderTxt);

		this.tweenIn();
	},

	tweenIn:function(){
		var timing = 300;
		var easing = Phaser.Easing.Linear.None;
		this.gOrder.visible = false;

		var toAngle = 75 * this.gCust.scale.x;
		var tweenCust = game.add.tween(this.gCust);
		tweenCust.from({angle:toAngle}, timing, easing, true);

		toAngle = 180 * this.gCust.scale.x;
		var tweenBalloon = game.add.tween(this.gPanel);
		tweenBalloon.from({angle:toAngle}, timing, easing, true);
		tweenBalloon.onComplete.add(function(){
			this.gOrder.visible = true;
			var tweenOrder = game.add.tween(this.gOrder.scale);
			tweenOrder.from({x:0, y:0}, 300, Phaser.Easing.Elastic.Out, true);
		}, this);
	},

	checkOut:function(){
		this.customer.frameName = 'inGame/' + this.type + "_happy";
		game.time.events.add(500, this.tweenOut, this);
	},

	tweenOut:function(){
		curState().targets[this.id] = null;
		var timing = 300;
		var easing = Phaser.Easing.Linear.None;
		this.gOrder.visible = false;

		var toAngle = 75 * this.gCust.scale.x;
		var tweenCust = game.add.tween(this.gCust);
		tweenCust.to({angle:toAngle}, timing, easing, true);

		toAngle = 180 * this.gCust.scale.x;
		var tweenBalloon = game.add.tween(this.gPanel);
		tweenBalloon.to({angle:toAngle}, timing, easing, true);
		tweenBalloon.onComplete.add(function(){
			// trace('new cust', this.id % 2);
			curState().createTarget(this.pos);
			this.destroy();
		}, this);
	},

	countDown:function(){
		if(this.countOrder <= 0) return;
		this.countOrder--;
		if(this.isStaggering) return;
		this.isStaggering = true;
		var tweenPic = game.add.tween(this.orderPict);
		tweenPic.to({x:this.orderPict.x + 5}, 20, Phaser.Easing.Linear.None, true, 0, 0, true);
		tweenPic.onComplete.add(function(){
			this.isStaggering = false;
			if(this.countOrder == 0){
				this.checkOut();
				var totScore = gameData.countCustTips(this.goal);
				totScore = game.math.roundTo(totScore, 0);
				curState().plScore += totScore;
			}
		}, this);
	},

	update:function(){
		this.gOrder.x = (this.gCust.x + this.gPanel.x + (this.gPanel.width * 0.5)) * this.gCust.scale.x;
		this.gOrder.y = this.gPanel.y + (this.panelBox.y - (this.panelBox.height * 0.5));
		this.orderTxt.setText(_t('goal', this.countOrder));
	},
}, Phaser.Group);