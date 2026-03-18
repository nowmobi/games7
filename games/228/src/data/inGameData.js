gameData = {
	objectName : ['burger', 'sushi', 'salad', 'ramen', 'sausage'],
	custList : ['black', 'blue', 'green', 'yellow', 'red'],
	totalStage : 36,
	goalLink : [500, 1000, 1500],
	goalStar : [30, 60, 90],
	goalScore : [1000000, 2000000, 3000000],
	goalPowerUp : [100, 200, 300],
	goalGold : [5000000, 10000000, 15000000],
	priceClaim : [5000, 10000, 20000],
	defScore : 300,
	defGoal : 5000, 
	listGoals : [50000, 70000, 80000, 100000, 110000, 130000, 150000, 160000, 170000, 180000, 230000, 280000, 
				 330000, 420000, 510000, 600000, 660000, 720000, 800000, 900000, 1000000, 1100000, 1200000, 1600000,
				 1700000, 1800000, 2000000, 2150000, 2300000, 2400000, 2500000, 2600000, 2700000, 2800000, 3000000, 5000000],
	bonusScore : 0,

	gameMode : 'rush',
	stage : 0,
	percentages : [0.6, 0.8, 0.9],
	scoreGoal : 500,
	mapping : [[1, 1, 1, 1, 1, 1],
			   [1, 1, 1, 1, 1, 1, 1],
			   [1, 1, 1, 1, 1, 1, 1, 1], 
			   [1, 1, 1, 0, 0, 0, 1, 1, 1],
			   [1, 1, 1, 0, 0, 0, 1, 1, 1, 1],
			   [1, 1, 1, 0, 0, 0, 1, 1, 1],
			   [1, 1, 1, 1, 1, 1, 1, 1],
			   [1, 1, 1, 1, 1, 1, 1],
			   [1, 1, 1, 1, 1, 1],
			  ], //col, row
	limitMove : 20,

	//if game mode = rush
	stageGoals : [['burger', 15], ['ramen', 15], ['salad', 15]],

	//if game mode = time
	stageObjects : ['burger', 'ramen', 'salad'],
	minGoal : 10,
	maxGoal : 20, 
};	

gameData.writeScore = function(score){
	var showScore = score + '';

	if(score >= 1000){
		var count = 0;
		var countScore = showScore;
		showScore = '';
		for(var a = countScore.length - 1; a >= 0; a--){
			var toShow = countScore[a];
			if(count % 3 == 0 && a < countScore.length - 1){
				toShow += ',';
				count = 0;
			}

			var tempShow = toShow + showScore;
			showScore = tempShow;

			count++;
		}
	}

	return showScore;
}

gameData.upperCase = function(text){
	var word = text[0].toUpperCase() + text.slice(1);
	return word;
}

gameData.countStageGoal = function(){
	var defGoal = 100;
	var goal = defGoal + (gameData.stage * (defGoal * 0.25));
	return goal;
}

gameData.countScore = function(chains){
	var defScore = ((gameData.stage + 1) * gameData.defScore * 0.25) + gameData.defScore;
	var multiplyer = 1;
	if(chains >= 12){
		multiplyer = 1.75;
	} else if(chains >= 10){
		multiplyer = 1.5;
	} else if(chains >= 7){
		multiplyer = 1.25;
	}

	var totalScore = defScore * chains * multiplyer;
	return totalScore;
}

gameData.countScoreTime = function(chains){	
	var defScore = ((gameData.stage + 1) * gameData.defScore * 0.35) + gameData.defScore;
	var multiplyer = 1;
	if(chains >= 12){
		multiplyer = 1.75;
	} else if(chains >= 10){
		multiplyer = 1.5;
	} else if(chains >= 7){
		multiplyer = 1.25;
	}

	var totalScore = defScore * chains * multiplyer;
	return totalScore;	
}

gameData.countCustTips = function(orders){
	var defScore = ((gameData.stage + 1) * gameData.defScore * 0.2) + gameData.defScore;
	var multiplyer = 1;
	if(orders >= 12){
		multiplyer = 1.3;
	} else if(orders >= 10){
		multiplyer = 1.2;
	} else if(orders >= 7){
		multiplyer = 1.1;
	}

	var totalScore = defScore * orders * multiplyer;
	return totalScore;	
}

gameData.bonusRush = function(){
	var bonusScore = ((gameData.stage + 1) * gameData.defScore * 2) + gameData.defScore;
	return bonusScore;
}