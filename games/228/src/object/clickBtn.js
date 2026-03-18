clickBtn = function(x, y, name, atlaskey){
	atlaskey = atlaskey || 'global';
	Phaser.Sprite.call(this, game, x, y, atlaskey);
	this.frameName = atlaskey + '/' + name;
	this.anchor.setTo(0.5);

	this.isClicked = false;
	this.onClick = new Phaser.Signal();

	this.inputEnabled = true;
	this.events.onInputDown.add(this.onClickEvents, this);
};

clickBtn.inherit({
	init:function(){
		// this.icon = global.addSprite(0, 0, 'inGame/')
	},

	onClickEvents:function(){
		if(this.isClicked) return;
		csound.click();
		this.isClicked = true;
		var tween = game.add.tween(this.scale);
		tween.to({x:this.scale.x - 0.1, y:this.scale.y - 0.1}, 100, Phaser.Easing.Elastic.InOut, true, 0, 0, true);
		tween.onComplete.add(function(){
			this.isClicked = false;
			this.onClick.dispatch(this);			
		}, this);
	},

	changePage:function(stateName){
		if(cnotification.onGoing) cnotification.removeNotif();
		ctransition.close(stateName);
		// game.state.start(stateName);
	},

	clearData:function(){
		for(var a = 1; a <= 11; a++){
			var type = gameData['category' + a];
			gameData[type + 'Id'] = 0;
		}
	},

	moreGame:function(){		
		window.open('http://funnyhousegames.com/', '_blank');
	},
}, Phaser.Sprite);