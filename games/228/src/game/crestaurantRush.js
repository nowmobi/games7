crestaurantRush = function (game) {

};

crestaurantRush.inherit({
	preload: function() {
		basicGamePlay.prototype.preload.call(this);
	},
	init: function() {
		basicGamePlay.prototype.init.call(this);
		// trace("INIT", this.bg_loader);
	},

	create: function () {
		basicGamePlay.prototype.create.call(this);
		this.limitMove = gameData.limitMove;

		this.showLimit = global.addText(this.header.x, this.header.y + (this.header.height * 0.47), this.limitMove + '', 40, game_config.font1);
		this.showLimit.anchor.setTo(0.5);
		this.showLimit.fill = '#ffdd00';
		this.gInGame.add(this.showLimit);

		this.turnTxt = global.addText(this.showLimit.x, this.showLimit.y + (this.showLimit.height * 0.5), _t('turn'), 20, game_config.font1);
		this.turnTxt.anchor.setTo(0.5);
		this.turnTxt.fill = 'white';
		this.turnTxt.fontWeight = 'normal';
		this.gInGame.add(this.turnTxt);

		_A.startLevel(gameData.stage);
	},

	checkingAct:function(){		
		if(!this.checkingEmpty) return;
		var objMoving = this.checkMovingObject();

		if(!objMoving){
			this.idleTime = 3;
			this.checkingEmpty = false;
			this.checkEmptySpace();

			if(this.gameOver){
				if(!this.generateResult){
					this.actWin();	
					this.generateResult = true;
					return;
				}
			}

			// this.checkCustomer();

			this.limitMove--;
			if(this.limitMove <= 0 && !this.gameOver){
				this.limitMove = 0;
				this.gameOver = true;
				this.gResult.create(false);
			}
		}
	},

	checkCustomer:function(){
		if(this.targets.length < gameData.stageGoals.length) return;
		var objMoving = this.checkMovingObject();

		if(!objMoving){
			var finish = 0;
			if(this.targets.length == gameData.stageGoals.length){
				for(var a = 0; a < this.targets.length; a++){
					if(!this.targets[a]){
						finish++;
					}
				}
			}

			if(finish >= this.targets.length){
				if(!this.gameOver){
					this.gameOver = true;
					this.searchSpSkill();
					// this.actWin();

				}
			}			
		}
	},	

	actWin:function(){
		this.isWin = true;
		if(this.limitMove > 0){
			this.countMoveLeft();			
		} else {			
			this.gResult.create(this.isWin);
		}
	},

	countMoveLeft:function(){
		if(this.limitMove <= 0) return;
		this.limitMove--;
		var delay = 50;
		game.time.events.add(delay, function(){
			var bonus = gameData.bonusRush();
			this.plScore += bonus;
			if(this.limitMove > 0){
				csound.typing();
				this.countMoveLeft();
			} else {
				this.gResult.create(this.isWin);
			}
		}, this);
	},

	update:function(){
		basicGamePlay.prototype.update.call(this);
		if(!this.gameStart) return;
		this.checkingAct();
		this.checkCustomer();
		this.showLimit.setText(this.limitMove + '');
	},
}, basicGamePlay);
