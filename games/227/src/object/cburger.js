cburger = function(game, x, y){
    Phaser.Group.call(this, game);
    this.x = x;
    this.y = y;

    this.init();

    game.add.existing(this);
    curState().gBurger.add(this);
};

cburger.inherit({
	_height: 0,
	_perfect:0,
	_good:0,
	_earn:0,
	_bonusTip:0,

	init: function() {
		var s = global.addSprite(0, 0, 'inGame/bread2');
		s.anchor.setTo(0.5);
		var _h = gameData.ingHeight[9];
		this._height += _h;
		s.x = 0;
		s.y = -1 * this._height;
		this.add(s);

		this._id = 0;
	},

	effect:function(type){
		if(type == 'perfect'){
			this._perfect++;
		} else if(type == 'great') {
			this._good++;
		}
		trace(type);
	},

	countPrice:function(){
		this._earn = gameData.burgerPrice[this._id];
		var maxPerfect = curState().recipeNow.length;

		if(this._perfect == maxPerfect){
			this._bonusTip = game.math.roundTo(0.25 * this._earn, 0);			
		} else if(this._perfect == maxPerfect - 1){
			this._bonusTip = game.math.roundTo(0.2 * this._earn, 0);
		} else if(this._perfect == maxPerfect - 2){
			this._bonusTip = game.math.roundTo(0.1 * this._earn, 0);
		}  else if(this._perfect == maxPerfect - 3){
			this._bonusTip = game.math.roundTo(0.05 * this._earn, 0);
		}

		curState().bonus += this._bonusTip;
		curState().moneyInGame += this._earn + this._bonusTip;
	},

	addIngredient: function(obj) {
		var type = obj.id;

		if(obj.x > this.x + (this.width * 0.4) || obj.x > curState().tray.x + (curState().width * 0.3)){
			obj.muter(1);
			return;
		} else if(obj.x < this.x - (this.width * 0.4) || obj.x < curState().tray.x - (curState().width * 0.3)){
			obj.muter(-1);
			return;
		} else {
			obj.checkRecipe();
			obj._isReady = false;
			curState().ingredients[obj.indexNo] = null;
		}				

		var _h = gameData.ingHeight[type];
		var ingName = gameData.ingSpriteName[type];
		var s = obj;
		// var s = global.addSprite(0, 0, 'inGame/' + ingName);
		// s.anchor.setTo(0.5);
		
		this._height += _h;
		// s.x = 0;
		s.x = obj.x - this.x;
		s.y = -1 * this._height;
		this.add(s);
		// this.bringToTop(this);
	},

	update: function() {
		if (curState().tray) {
			this.x = curState().tray.x;
			this.y = curState().tray.y;
		}
	}
}, Phaser.Group);