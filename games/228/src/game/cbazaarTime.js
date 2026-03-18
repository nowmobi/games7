cbazaarTime = function(game){
	
};

cbazaarTime.inherit({
	preload: function() {
		basicGamePlay.prototype.preload.call(this);
	},
	init: function() {
		basicGamePlay.prototype.init.call(this);
		// trace("INIT", this.bg_loader);
	},

	create: function () {
		basicGamePlay.prototype.create.call(this);
		this.limitTime = gameData.limitMove;

		this.showLimit = global.addText(this.header.x, this.header.y + (this.header.height * 0.47), this.limitTime + '', 40, game_config.font1);
		this.showLimit.anchor.setTo(0.5);
		this.showLimit.fill = '#ffdd00';
		this.gInGame.add(this.showLimit);

		this.timeTxt = global.addText(this.showLimit.x, this.showLimit.y + (this.showLimit.height * 0.5), _t('time'), 20, game_config.font1);
		this.timeTxt.anchor.setTo(0.5);
		this.timeTxt.fill = 'white';
		this.timeTxt.fontWeight = 'normal';
		this.gInGame.add(this.timeTxt);
	},

	checkingAct:function(){		
		if(!this.checkingEmpty) return;
		var objMoving = this.checkMovingObject();

		if(!objMoving){
			this.idleTime = 3;
			this.checkingEmpty = false;
			this.checkEmptySpace();

			if(this.gameOver){				
				this.checkWin();
			}
		}
	},

	checkTime:function(){
		this.showLimit.setText(parseInt(this.limitTime) + '');

		if(!this.gameStart) return;
		var countMs = game.time.physicsElapsedMS * 0.001;
		if(this.limitTime > 0){
			if(!this.isMatching){
				this.limitTime -= countMs;
				if(this.limitTime <= 0){
					this.limitTime = 0;
					this.gameOver = true;
					this.searchSpSkill();
				}				
			}
		}
	},

	checkWin:function(){
		if(this.plScore >= (this.percentages[0] * this.scoreGoal)){
			this.isWin = true;
		}

		this.gResult.create(this.isWin);
	},

	update:function(){
		basicGamePlay.prototype.update.call(this);
		if(!this.gameStart) return;
		this.checkingAct();
		this.checkTime();
	},
}, basicGamePlay);