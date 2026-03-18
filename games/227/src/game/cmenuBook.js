cmenuBook = function (game) {

};

cmenuBook.inherit({

	preload: function() {
		Asset.png('menuBg-01');

		BaseState.prototype.preload.call(this);
	},
	init: function() {
		BaseState.prototype.init.call(this);
		// trace("INIT", this.bg_loader);		
	},

	create: function () {
		BaseState.prototype.create.call(this);
		csound.play(0);
		this.gInGame = game.add.group();
		this.gButton = game.add.group();

		this.burgerNow = plRef.recipeUnlock;
		this.onClicked = false;

		this.bg = game.add.sprite(this.gw*0.5, this.gh * 0.5, 'menuBg-01', null);
		this.bg.anchor.setTo(0.5);
		// this.bg.isStretch = true;
		this.gBG.add(this.bg);

		this.book = global.addSprite(this.gw * 0.34, this.gh * 0.5, 'pageDecor/menubook');
		this.book.anchor.setTo(1, 0.5);
		this.gInGame.add(this.book);

		this.titlePage = global.addText(this.gw * 0.5, this.book.y - (this.book.height * 0.35), _t("menubook"), 60, game_config.font2);
		this.titlePage.anchor.setTo(0.5);
		this.titlePage.fill = 'black';
		this.gInGame.add(this.titlePage);

		this.burger = global.addSprite(this.titlePage.x, this.book.y - (this.book.height * 0.025), 'pageDecor/burger' + plRef.recipeUnlock);
		this.burger.anchor.setTo(0.5);
		this.gInGame.add(this.burger);

		this.burgerName = global.addText(this.titlePage.x, this.book.y + (this.book.height * 0.3), _t("burger" + plRef.recipeUnlock), 50, game_config.font2);
		this.burgerName.anchor.setTo(0.5);
		this.burgerName.fill = 'black';
		this.gInGame.add(this.burgerName);

		this.soundBtn = new csound(game, this.gw * 0.9, this.gh * 0.05);
		this.soundBtn.anchor.setTo(0.5);
		this.gButton.add(this.soundBtn);

		this.prevBtn = global.addSprite(this.gw * 0.1, this.book.y, 'global/left');
		this.prevBtn.anchor.setTo(0.5);
		this.prevBtn.inputEnabled = true;
		this.prevBtn.events.onInputDown.add(this.movePrev, this);
		this.gButton.add(this.prevBtn);

		this.nextBtn = global.addSprite(this.gw * 0.9, this.prevBtn.y, 'global/right');
		this.nextBtn.anchor.setTo(0.5);
		this.nextBtn.inputEnabled = true;
		this.nextBtn.events.onInputDown.add(this.moveNext, this);
		this.gButton.add(this.nextBtn);

		this.homeBtn = global.addSprite(this.gw * 0.5, this.book.y + (this.book.height * 0.5), 'global/home');
		this.homeBtn.anchor.setTo(0.5);
		this.homeBtn.inputEnabled = true;
		this.homeBtn.events.onInputDown.add(function(obj){				
			csound.click();	
			var tween = game.add.tween(obj.scale);
			tween.to({x:obj.scale.x - 0.1, y:obj.scale.y - 0.1}, 100, Phaser.Easing.Elastic.InOut, true);
			tween.yoyo(true);			
			tween.onComplete.add(function(){
				ctransition.close('chome');
			}, this);
		},this);
		this.gButton.add(this.homeBtn);

		this.priceTag = global.addSprite(this.nextBtn.x - (this.nextBtn.width * 0.7), this.book.y + (this.book.height * 0.2), 'pageDecor/pricetag');
		this.priceTag.anchor.setTo(0.5);
		this.gInGame.add(this.priceTag);

		this.price = global.addText(0, 5, _t("dollar", gameData.burgerPrice[this.burgerNow - 1]), 35, game_config.font2);
		this.price.anchor.setTo(0.5);
		this.price.fill = 'white';
		this.priceTag.addChild(this.price);

		this.burger.visible = false;
		this.priceTag.visible = false;
		this.onClicked = true;

		game.time.events.add(Phaser.Timer.SECOND * 1.5, function(){
			this.burger.visible = true;
			this.priceTag.visible = true;
			this.tweenBurger();
		}, this);

		this.gCont.add(this.gInGame);
		this.gCont.add(this.gButton);

		this.onResize();
	},

	moveNext:function(obj){
		if(this.onClicked) return;
		this.onClicked = true;
		var tween = game.add.tween(obj.scale);
		tween.to({x:obj.scale.x - 0.1, y:obj.scale.y - 0.1}, 100, Phaser.Easing.Elastic.InOut, true);
		tween.yoyo(true);
		tween.onComplete.add(function(){
			if(this.burgerNow < plRef.recipeUnlock){
				this.burgerNow++;
				var name = "burger" + this.burgerNow;
				this.burger.frameName = "pageDecor/" + name;
				this.burgerName.setText(_t(name));
				this.price.setText(_t("dollar", gameData.burgerPrice[this.burgerNow - 1]));
				this.onClicked = false;
				this.tweenBurger();
			}			
		}, this);
	},

	movePrev:function(obj){
		if(this.onClicked) return;
		this.onClicked = true;
		var tween = game.add.tween(obj.scale);
		tween.to({x:obj.scale.x - 0.1, y:obj.scale.y - 0.1}, 100, Phaser.Easing.Elastic.InOut, true);
		tween.yoyo(true);
		tween.onComplete.add(function(){
			if(this.burgerNow > 1){
				this.burgerNow--;
				var name = 'burger' + this.burgerNow;
				this.burger.frameName = "pageDecor/" + name;
				this.burgerName.setText(_t(name));
				this.price.setText(_t("dollar", gameData.burgerPrice[this.burgerNow - 1]));
				this.tweenBurger();
			}			
		}, this);
	},

	tweenBurger:function(){
		var tween = game.add.tween(this.burger.scale);
		tween.from({x:0, y:0}, 500, Phaser.Easing.Elastic.InOut, true);
		// tween.yoyo(true);
		tween.onComplete.add(function(){			
			this.onClicked = false;
		}, this);

		var tween2 = game.add.tween(this.priceTag.scale);
		tween2.from({x:0, y:0}, 200, Phaser.Easing.Elastic.InOut, true, 300);
		// tween2.yoyo(true);
	},

	update:function(){
		BaseState.prototype.update.call(this);
		if(this.burgerNow == plRef.recipeUnlock){
			this.nextBtn.visible = false;
		} else {
			this.nextBtn.visible = true;
		}

		if(this.burgerNow == 1){
			this.prevBtn.visible = false;
		} else {
			this.prevBtn.visible = true;
		}
	},

	render:function(){		
		
	},

}, BaseState);
