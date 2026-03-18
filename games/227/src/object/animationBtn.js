animationBtn = function(game){

};

animationBtn.clicked = function(obj){	
	animationBtn.scaleSmall = game.add.tween(obj.scale);
	animationBtn.scaleSmall.to({x : obj.scale.x - 0.2, y : obj.scale.y - 0.2}, 50, Phaser.Easing.Elastic.In, false, 0, 1, true);	
}

animationBtn.inherit({

}, Phaser.Sprite);