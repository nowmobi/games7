stageBtn = function(x, y, id){
	Phaser.Group.call(this, game);
	this.x = x;
	this.y = y;
	this.id = id;

	this.init();
};

stageBtn.inherit({
	init:function(){
		this.stageBtn = global.addSprite(0, 0, 'inGame/stage_active');
		this.stageBtn.anchor.setTo(0.5);
		this.stageBtn.inputEnabled = true;
		this.stageBtn.events.onInputDown.add(this.onClick, this);
		this.add(this.stageBtn);

		this.stars = [];
		this.numbers = [];

		this.setStage();
	},

	onClick:function(){
		var tweenThis = game.add.tween(this.scale);
		tweenThis.to({x:this.scale.x - 0.1, y:this.scale.y - 0.1}, 100, Phaser.Easing.Elastic.Out, true, 0, 0, true);
		tweenThis.onComplete.add(function(){
			// trace()
			stageSelector.assignStage(this.id);
		}, this);
	},

	setStageNo:function(mode){
		this.numbers = [];
		var spriteName = (this.id + 1) + '';
		if(spriteName.length == 1){
			var no = global.addSprite(0, -3, 'inGame/stage_numbers_' + mode + '/' + spriteName);
			no.anchor.setTo(0.5);
			this.add(no);
			this.numbers.push(no);
		} else {
			var no = game.add.group();
			this.add(no);
			this.numbers.push(no);

			for(var a = 0; a < spriteName.length; a++){				
				var n = global.addSprite(0, 0, 'inGame/stage_numbers_' + mode + '/' + spriteName[a]);
				n.anchor.setTo(0, 0.5);
				n.scale.setTo(0.8);

				var x = (a * n.width * 1.05);
				n.x = x;
				no.add(n);
			}			

			no.position.setTo(-(no.width * 0.5), -3);
		}
	},

	star1:function(){
		this.stars = [];
		var star = global.addSprite(0, this.stageBtn.height * 0.65, 'inGame/star');
		star.anchor.setTo(0.5);
		star.scale.setTo(0.5);
		this.add(star);
		this.stars.push(this.stars);
	},

	star2:function(){
		this.stars = [];
		for(var a = 0; a < 2; a++){
			var star = global.addSprite(0, 0, 'inGame/star');
			star.anchor.setTo(0.5);
			star.scale.setTo(0.5);
			star.angle = 10;

			var x = (this.stageBtn.x - (star.width * 0.6)) + (a * (star.width * 1.2));
			var y = this.stageBtn.height * 0.6;
			star.position.setTo(x, y);
			star.angle -= (a * 20);
			this.add(star);
			this.stars.push(star);
		}
	},

	star3:function(){
		this.stars = [];
		for(var a = 0; a < 3; a++){			
			var star = global.addSprite(0, 0, 'inGame/star');
			star.anchor.setTo(0.5);
			star.scale.setTo(0.5);
			star.angle = 30;

			var x = (this.stageBtn.x - (star.width * 1.1)) + (a * (star.width * 1.1));
			var y = this.stageBtn.height * 0.65;
			if(a == 0 || a == 2) y = this.stageBtn.height * 0.45;			
			star.position.setTo(x, y);
			star.angle -= (a * 30);

			this.add(star);
			this.stars.push(star);
		}
	},

	setStage:function(){
		if(plRef.stageOpened.length > 0){
			if(this.id < plRef.stageOpened.length){
				var star = plRef.stageOpened[this.id];
				this.stageActive(star);
			} else {
				this.stageInactive();
			}
		} else {
			this.stageInactive();
		}

		if(this.id == plRef.stageOpened.length){
			this.stageActive(0);
		}
	},

	stageActive:function(star){
		this.stageBtn.frameName = 'inGame/stage_active';
		if(this.stars.length > 0){
			for(var a = 0; a < this.stars.length; a++){
				if(!this.stars[a] || !this.stars[a].exists) continue;
				this.stars[a].destroy();
			}
		}

		for(var a = 0; a < this.numbers.length; a++){
			this.numbers[a].destroy();
		}

		this.setStageNo('on');
		if(star > 0) this['star' + star]();
		this.stageBtn.inputEnabled = true;
	},

	stageInactive:function(){		
		this.stageBtn.frameName = 'inGame/stage_nonactive';
		if(this.stars.length > 0){
			for(var a = 0; a < this.stars.length; a++){
				this.stars[a].destroy();
			}
		}	

		for(var a = 0; a < this.numbers.length; a++){
			this.numbers[a].destroy();
		}

		this.setStageNo('off');
		this.stageBtn.inputEnabled = false;
	},
}, Phaser.Group);