stageSelector = {

};

stageSelector.defStage = function(){	
	gameData.gameMode = 'rush';
	gameData.stage = 0;
	// scoreGoal = 501,
	gameData.mapping = [[1, 1, 1, 1, 1, 1],
			   [1, 1, 1, 1, 1, 1, 1],
			   [1, 1, 1, 1, 1, 1, 1, 1], 
			   [1, 1, 1, 1, 1, 1, 1, 1, 1],
			   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			   [1, 1, 1, 1, 1, 1, 1, 1, 1],
			   [1, 1, 1, 1, 1, 1, 1, 1],
			   [1, 1, 1, 1, 1, 1, 1],
			   [1, 1, 1, 1, 1, 1],
			  ]; //col, row
	gameData.limitMove = 20;

	//if game mode = rush
	gameData.stageGoals = [];

	//if game mode = time
	gameData.stageObjects = [];
	gameData.minGoal = 10;
	gameData.maxGoal = 20; 
}

stageSelector.assignStage = function(stage){
	stageSelector.defStage();

	var gameMode = 'rush';
	var scoreGoal = 500;
	var percentages = [0.6, 0.8, 0.9];
	var mapping = [[1, 1, 1, 1, 1, 1],
			   	   [1, 1, 1, 1, 1, 1, 1],
			   	   [1, 1, 1, 1, 1, 1, 1, 1], 
			   	   [1, 1, 1, 1, 1, 1, 1, 1, 1],
			   	   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			   	   [1, 1, 1, 1, 1, 1, 1, 1, 1],
			   	   [1, 1, 1, 1, 1, 1, 1, 1],
			   	   [1, 1, 1, 1, 1, 1, 1],
			   	   [1, 1, 1, 1, 1, 1],
			   	  ]; //col, row
	var limitMove = 20;

	//if game mode = rush
	var stageGoals = [['burger', 15], ['ramen', 15], ['salad', 15]];

	//if game mode = time
	var stageObjects = ['sushi', 'ramen', 'salad'];
	var minGoal = 10;
	var maxGoal = 20; 

	switch(stage){
		case 0 :
			gameMode = 'rush';
			limitMove = 20;
			percentages = [0.6, 0.8, 0.9];
			scoreGoal = gameData.listGoals[stage];
			stageGoals = [['burger', 15], ['ramen', 15], ['salad', 15]];
			break;

		case 1 :
			gameMode = 'rush';
			limitMove = 15;
			percentages = [0.7, 0.8, 0.95];
			scoreGoal = gameData.listGoals[stage];
			stageGoals = [['sushi', 20], ['sausage', 25], ['burger', 20], ['ramen', 25]];
			break;

		case 2 :
			gameMode = 'rush';
			limitMove = 18;
			mapping = [[1, 1, 1, 1, 1, 1],
			   	   	   [1, 1, 0, 0, 0, 1, 1],
			   	   	   [1, 1, 0, 0, 0, 0, 1, 1], 
			   	   	   [1, 1, 1, 1, 1, 1, 1, 1, 1],
			   	   	   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			   	   	   [1, 1, 1, 1, 1, 1, 1, 1, 1],
			   	   	   [1, 1, 0, 0, 0, 0, 1, 1],
			   	   	   [1, 1, 0, 0, 0, 1, 1],
			   	   	   [1, 1, 1, 1, 1, 1],
			   	   	  ];
			percentages = [0.7, 0.8, 0.95];
			scoreGoal = gameData.listGoals[stage];
			stageGoals = [['sushi', 15], ['sausage', 15], ['salad', 15], ['ramen', 15]];
			break;

		case 3 :
			gameMode = 'rush';
			limitMove = 18;
			mapping = [[1, 1, 1, 1, 1, 1],
			   	   	   [1, 0, 0, 0, 0, 0, 1],
			   	   	   [1, 0, 0, 0, 0, 0, 0, 1], 
			   	   	   [1, 1, 1, 1, 1, 1, 1, 1, 1],
			   	   	   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			   	   	   [1, 1, 1, 1, 1, 1, 1, 1, 1],
			   	   	   [1, 0, 0, 0, 0, 0, 0, 1],
			   	   	   [1, 0, 0, 0, 0, 0, 1],
			   	   	   [1, 1, 1, 1, 1, 1],
			   	   	  ];
			percentages = [0.5, 0.7, 0.95];
			scoreGoal = gameData.listGoals[stage];
			stageGoals = [['burger', 15], ['sushi', 15], ['sausage', 15]];
			break;

		case 4 :			
			gameMode = 'rush';
			limitMove = 25;
			mapping = [[1, 1, 1, 1, 1, 1],
			   	   	   [1, 1, 1, 1, 1, 1, 1],
			   	   	   [1, 0, 0, 0, 0, 0, 1, 1], 
			   	   	   [1, 0, 0, 0, 0, 0, 1, 1, 1],
			   	   	   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			   	   	   [1, 0, 0, 0, 0, 0, 1, 1, 1],
			   	   	   [1, 0, 0, 0, 0, 0, 1, 1],
			   	   	   [1, 1, 1, 1, 1, 1, 1],
			   	   	   [1, 1, 1, 1, 1, 1],
			   	   	  ];
			percentages = [0.5, 0.7, 0.95];
			scoreGoal = gameData.listGoals[stage];
			stageGoals = [['sushi', 15], ['ramen', 15], ['salad', 15]];
			break;		

		case 5 :						
			gameMode = 'time';
			limitMove = 40;
			mapping = [[1, 0, 0, 0, 0, 1],
			   	   	   [1, 0, 0, 0, 0, 0, 1],
			   	   	   [1, 0, 0, 0, 0, 0, 1, 1], 
			   	   	   [1, 0, 0, 0, 0, 0, 1, 1, 1],
			   	   	   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			   	   	   [1, 0, 0, 0, 0, 0, 1, 1, 1],
			   	   	   [1, 0, 0, 0, 0, 0, 1, 1],
			   	   	   [1, 0, 0, 0, 0, 0, 1],
			   	   	   [1, 0, 0, 0, 0, 1],
			   	   	  ];
			percentages = [0.5, 0.7, 0.95];
			scoreGoal = gameData.listGoals[stage];
			stageObjects = ['sushi', 'ramen', 'salad'];
			minGoal = 10;
			maxGoal = 20;
			break;		

		case 6 :
			gameMode = 'rush';
			limitMove = 30;
			mapping = [[1, 1, 1, 1, 1, 1],
			   	   	   [1, 1, 0, 0, 0, 0, 1],
			   	   	   [1, 1, 0, 0, 0, 0, 1, 1], 
			   	   	   [1, 1, 0, 0, 0, 0, 1, 1, 1],
			   	   	   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			   	   	   [1, 1, 0, 0, 0, 0, 1, 1, 1],
			   	   	   [1, 1, 0, 0, 0, 0, 1, 1],
			   	   	   [1, 1, 0, 0, 0, 0, 1],
			   	   	   [1, 1, 1, 1, 1, 1],
			   	   	  ];
			percentages = [0.5, 0.7, 0.95];
			scoreGoal = gameData.listGoals[stage];
			stageGoals = [['sausage', 15], ['ramen', 15], ['salad', 15], ['sushi', 15]];
			break;	

		case 7 :
			gameMode = 'rush';
			limitMove = 30;
			mapping = [[1, 1, 1, 1, 1, 1],
			   	   	   [1, 1, 1, 1, 1, 1, 1],
			   	   	   [1, 0, 0, 0, 0, 0, 1, 1], 
			   	   	   [1, 0, 0, 0, 0, 0, 1, 1, 1],
			   	   	   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			   	   	   [1, 0, 0, 0, 0, 0, 1, 1, 1],
			   	   	   [1, 0, 0, 0, 0, 0, 1, 1],
			   	   	   [1, 1, 1, 1, 1, 1, 1],
			   	   	   [1, 1, 1, 1, 1, 1],
			   	   	  ];
			percentages = [0.5, 0.7, 0.95];
			scoreGoal = gameData.listGoals[stage];
			stageGoals = [['sausage', 15], ['ramen', 15], ['salad', 15], ['sushi', 15], ['burger', 15]];
			break;	

		case 8 :
			gameMode = 'rush';
			limitMove = 30;
			mapping = [[1, 1, 1, 1, 1, 1],
			   	   	   [1, 1, 1, 1, 1, 1, 1],
			   	   	   [1, 1, 0, 0, 0, 0, 1, 1], 
			   	   	   [1, 1, 0, 0, 0, 0, 0, 1, 1],
			   	   	   [1, 1, 0, 0, 0, 0, 0, 0, 1, 1],
			   	   	   [1, 1, 0, 0, 0, 0, 0, 1, 1],
			   	   	   [1, 1, 0, 0, 0, 0, 1, 1],
			   	   	   [1, 1, 1, 1, 1, 1, 1],
			   	   	   [1, 1, 1, 1, 1, 1],
			   	   	  ];
			percentages = [0.5, 0.7, 0.95];
			scoreGoal = gameData.listGoals[stage];
			stageGoals = [['sausage', 15], ['ramen', 15], ['salad', 15], ['sushi', 15], ['burger', 15]];
			break;	

		case 9 :
			gameMode = 'rush';
			limitMove = 35;
			mapping = [[1, 1, 1, 1, 1, 1],
			   	   	   [1, 1, 1, 1, 1, 1, 1],
			   	   	   [1, 1, 1, 1, 1, 1, 1, 1], 
			   	   	   [1, 1, 0, 0, 0, 0, 0, 1, 1],
			   	   	   [1, 1, 0, 0, 0, 0, 0, 0, 1, 1],
			   	   	   [1, 1, 0, 0, 0, 0, 0, 1, 1],
			   	   	   [1, 1, 1, 1, 1, 1, 1, 1],
			   	   	   [1, 1, 1, 1, 1, 1, 1],
			   	   	   [1, 1, 1, 1, 1, 1],
			   	   	  ];
			percentages = [0.5, 0.7, 0.95];
			scoreGoal = gameData.listGoals[stage];
			stageGoals = [['sausage', 15], ['ramen', 15], ['salad', 15], ['sushi', 15], ['burger', 15]];
			break;	

		case 10 :
			gameMode = 'rush';
			limitMove = 35;
			mapping = [[1, 1, 1, 1, 1, 1],
			   	   	   [1, 1, 1, 1, 1, 1, 1],
			   	   	   [1, 1, 1, 1, 1, 1, 1, 1], 
			   	   	   [1, 1, 0, 0, 0, 0, 0, 1, 1],
			   	   	   [1, 1, 0, 0, 0, 0, 0, 0, 1, 1],
			   	   	   [1, 1, 0, 0, 0, 0, 0, 1, 1],
			   	   	   [1, 1, 1, 1, 1, 1, 1, 1],
			   	   	   [1, 1, 1, 1, 1, 1, 1],
			   	   	   [1, 1, 1, 1, 1, 1],
			   	   	  ];
			percentages = [0.5, 0.7, 0.95];
			scoreGoal = gameData.listGoals[stage];
			stageGoals = [['sausage', 20], ['ramen', 20], ['salad', 20], ['sushi', 20], ['burger', 20]];
			break;	

		case 11 :
			gameMode = 'time';
			limitMove = 70;
			mapping = [[1, 1, 0, 0, 0, 1],
			   	   	   [1, 1, 0, 0, 0, 0, 1],
			   	   	   [1, 1, 1, 1, 1, 1, 1, 1], 
			   	   	   [1, 1, 0, 0, 0, 0, 1, 1, 1],
			   	   	   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			   	   	   [1, 1, 0, 0, 0, 0, 1, 1, 1],
			   	   	   [1, 1, 1, 1, 1, 1, 1, 1],
			   	   	   [1, 1, 0, 0, 0, 0, 1],
			   	   	   [1, 1, 0, 0, 0, 1],
			   	   	  ];
			percentages = [0.5, 0.7, 0.95];
			scoreGoal = gameData.listGoals[stage];
			stageObjects = ['sushi', 'ramen', 'salad', 'sausage', 'burger'];
			minGoal = 15;
			maxGoal = 25;
			break;

		case 12 :			
			gameMode = 'rush';
			limitMove = 40;
			mapping = [[1, 1, 1, 1, 1, 1],
			   	   	   [1, 1, 0, 0, 0, 1, 1],
			   	   	   [1, 1, 1, 1, 1, 1, 1, 1], 
			   	   	   [1, 1, 1, 0, 0, 0, 1, 1, 1],
			   	   	   [1, 1, 1, 0, 0, 0, 0, 1, 1, 1],
			   	   	   [1, 1, 1, 0, 0, 0, 1, 1, 1],
			   	   	   [1, 1, 1, 1, 1, 1, 1, 1],
			   	   	   [1, 1, 0, 0, 0, 1, 1],
			   	   	   [1, 1, 1, 1, 1, 1],
			   	   	  ];
			percentages = [0.5, 0.7, 0.95];
			scoreGoal = gameData.listGoals[stage];
			stageGoals = [['sausage', 30], ['ramen', 30], ['salad', 30], ['sushi', 30], ['burger', 30]];
			break;	

		case 13 :			
			gameMode = 'rush';
			limitMove = 40;
			mapping = [[1, 1, 1, 1, 1, 1],
			   	   	   [1, 1, 0, 0, 0, 1, 1],
			   	   	   [1, 1, 1, 1, 1, 1, 1, 1], 
			   	   	   [1, 1, 1, 0, 0, 0, 1, 1, 1],
			   	   	   [1, 1, 1, 0, 0, 0, 0, 1, 1, 1],
			   	   	   [1, 1, 1, 0, 0, 0, 1, 1, 1],
			   	   	   [1, 1, 1, 1, 1, 1, 1, 1],
			   	   	   [1, 1, 0, 0, 0, 1, 1],
			   	   	   [1, 1, 1, 1, 1, 1],
			   	   	  ];
			percentages = [0.5, 0.7, 0.95];
			scoreGoal = gameData.listGoals[stage];
			stageGoals = [['sausage', 30], ['ramen', 30], ['salad', 30], ['sushi', 30], ['burger', 30]];
			break;	

		case 14 :
			gameMode = 'rush';
			limitMove = 50;
			mapping = [[1, 1, 1, 1, 1, 1],
			   	   	   [1, 1, 1, 1, 1, 1, 1],
			   	   	   [1, 1, 1, 0, 0, 0, 1, 1], 
			   	   	   [1, 1, 1, 0, 0, 0, 0, 1, 1],
			   	   	   [1, 1, 1, 0, 0, 0, 0, 0, 1, 1],
			   	   	   [1, 1, 1, 0, 0, 0, 0, 1, 1],
			   	   	   [1, 1, 1, 0, 0, 0, 1, 1],
			   	   	   [1, 1, 1, 1, 1, 1, 1],
			   	   	   [1, 1, 1, 1, 1, 1],
			   	   	  ];
			percentages = [0.5, 0.7, 0.95];
			scoreGoal = gameData.listGoals[stage];
			stageGoals = [['sausage', 40], ['ramen', 40], ['salad', 40], ['sushi', 40], ['burger', 40]];
			break;	

		case 15 :
			gameMode = 'rush';
			limitMove = 60;
			mapping = [[1, 1, 1, 1, 1, 1],
			   	   	   [1, 1, 0, 0, 0, 1, 1],
			   	   	   [1, 1, 1, 1, 1, 1, 1, 1], 
			   	   	   [1, 1, 1, 0, 0, 0, 1, 1, 1],
			   	   	   [1, 1, 1, 0, 0, 0, 0, 1, 1, 1],
			   	   	   [1, 1, 1, 0, 0, 0, 1, 1, 1],
			   	   	   [1, 1, 1, 1, 1, 1, 1, 1],
			   	   	   [1, 1, 0, 0, 0, 1, 1],
			   	   	   [1, 1, 1, 1, 1, 1],
			   	   	  ];
			percentages = [0.5, 0.7, 0.95];
			scoreGoal = gameData.listGoals[stage];
			stageGoals = [['sausage', 40], ['ramen', 40], ['salad', 40], ['sushi', 40], ['burger', 40]];
			break;

		case 16 :
			gameMode = 'rush';
			limitMove = 70;
			mapping = [[1, 1, 0, 0, 0, 1],
			   	   	   [1, 1, 0, 0, 0, 0, 1],
			   	   	   [1, 1, 1, 1, 1, 1, 1, 1], 
			   	   	   [1, 1, 0, 0, 0, 0, 1, 1, 1],
			   	   	   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			   	   	   [1, 1, 0, 0, 0, 0, 1, 1, 1],
			   	   	   [1, 1, 1, 1, 1, 1, 1, 1],
			   	   	   [1, 1, 0, 0, 0, 0, 1],
			   	   	   [1, 1, 0, 0, 0, 1],
			   	   	  ];
			percentages = [0.5, 0.7, 0.95];
			scoreGoal = gameData.listGoals[stage];
			stageGoals = [['sausage', 40], ['ramen', 40], ['salad', 40], ['sushi', 40], ['burger', 40]];
			break;

		case 17 :
			gameMode = 'time';
			limitMove = 70;
			mapping = [[1, 1, 1, 1, 1, 1],
			   	   	   [1, 1, 1, 1, 1, 1, 1],
			   	   	   [1, 1, 1, 0, 0, 0, 1, 1], 
			   	   	   [1, 1, 1, 0, 0, 0, 0, 1, 1],
			   	   	   [1, 1, 1, 0, 0, 0, 0, 0, 1, 1],
			   	   	   [1, 1, 1, 0, 0, 0, 0, 1, 1],
			   	   	   [1, 1, 1, 0, 0, 0, 1, 1],
			   	   	   [1, 1, 1, 1, 1, 1, 1],
			   	   	   [1, 1, 1, 1, 1, 1],
			   	   	  ];
			percentages = [0.5, 0.7, 0.95];
			scoreGoal = gameData.listGoals[stage];
			stageObjects = ['sushi', 'ramen', 'salad', 'sausage', 'burger'];
			minGoal = 30;
			maxGoal = 40;
			break;

		case 18 :
			gameMode = 'rush';
			limitMove = 70;
			mapping = [[1, 1, 0, 0, 0, 1],
			   	   	   [1, 1, 0, 0, 0, 0, 1],
			   	   	   [1, 1, 1, 1, 1, 1, 1, 1], 
			   	   	   [1, 1, 0, 0, 0, 0, 1, 1, 1],
			   	   	   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			   	   	   [1, 1, 0, 0, 0, 0, 1, 1, 1],
			   	   	   [1, 1, 1, 1, 1, 1, 1, 1],
			   	   	   [1, 1, 0, 0, 0, 0, 1],
			   	   	   [1, 1, 0, 0, 0, 1],
			   	   	  ];
			percentages = [0.5, 0.7, 0.95];
			scoreGoal = gameData.listGoals[stage];
			stageGoals = [['sausage', 50], ['ramen', 50], ['salad', 50], ['sushi', 50], ['burger', 50]];
			break;

		case 19 :
			gameMode = 'rush';
			limitMove = 70;
			mapping = [[1, 1, 0, 0, 0, 1],
			   	   	   [1, 1, 0, 0, 0, 0, 1],
			   	   	   [1, 1, 0, 0, 0, 0, 1, 1], 
			   	   	   [1, 1, 0, 0, 0, 0, 1, 1, 1],
			   	   	   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			   	   	   [1, 1, 0, 0, 0, 0, 1, 1, 1],
			   	   	   [1, 1, 0, 0, 0, 0, 1, 1],
			   	   	   [1, 1, 0, 0, 0, 0, 1],
			   	   	   [1, 1, 0, 0, 0, 1],
			   	   	  ];
			percentages = [0.5, 0.7, 0.95];
			scoreGoal = gameData.listGoals[stage];
			stageGoals = [['sausage', 50], ['ramen', 50], ['salad', 50], ['sushi', 50], ['burger', 50]];
			break;

		case 20 :
			gameMode = 'rush';
			limitMove = 70;
			mapping = [[1, 1, 1, 1, 1, 1],
			   	   	   [1, 0, 0, 0, 0, 0, 1],
			   	   	   [1, 0, 0, 0, 0, 0, 0, 1], 
			   	   	   [1, 1, 1, 1, 1, 1, 1, 1, 1],
			   	   	   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			   	   	   [1, 1, 1, 1, 1, 1, 1, 1, 1],
			   	   	   [1, 0, 0, 0, 0, 0, 0, 1],
			   	   	   [1, 0, 0, 0, 0, 0, 1],
			   	   	   [1, 1, 1, 1, 1, 1],
			   	   	  ];
			percentages = [0.5, 0.7, 0.98];
			scoreGoal = gameData.listGoals[stage];
			stageGoals = [['sausage', 50], ['ramen', 50], ['salad', 50], ['sushi', 50], ['burger', 50]];
			break;

		case 21 :
			gameMode = 'rush';
			limitMove = 80;
			mapping = [[1, 1, 1, 1, 1, 1],
			   	   	   [1, 0, 0, 0, 0, 0, 1],
			   	   	   [1, 0, 0, 0, 0, 0, 0, 1], 
			   	   	   [1, 1, 1, 1, 1, 1, 1, 1, 1],
			   	   	   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			   	   	   [1, 1, 1, 1, 1, 1, 1, 1, 1],
			   	   	   [1, 0, 0, 0, 0, 0, 0, 1],
			   	   	   [1, 0, 0, 0, 0, 0, 1],
			   	   	   [1, 1, 1, 1, 1, 1],
			   	   	  ];
			percentages = [0.5, 0.7, 0.98];
			scoreGoal = gameData.listGoals[stage];
			stageGoals = [['sausage', 60], ['ramen', 60], ['salad', 60], ['sushi', 60], ['burger', 60]];
			break;

		case 22 :
			gameMode = 'rush';
			limitMove = 90;
			mapping = [[1, 1, 1, 1, 1, 1],
			   	   	   [1, 1, 1, 1, 1, 1, 1],
			   	   	   [1, 0, 0, 0, 0, 0, 1, 1], 
			   	   	   [1, 0, 0, 0, 0, 0, 1, 1, 1],
			   	   	   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			   	   	   [1, 0, 0, 0, 0, 0, 1, 1, 1],
			   	   	   [1, 0, 0, 0, 0, 0, 1, 1],
			   	   	   [1, 1, 1, 1, 1, 1, 1],
			   	   	   [1, 1, 1, 1, 1, 1],
			   	   	  ];
			percentages = [0.5, 0.7, 0.98];
			scoreGoal = gameData.listGoals[stage];
			stageGoals = [['sausage', 50], ['ramen', 50], ['salad', 50], ['sushi', 50], ['burger', 50]];
			break;

		case 23 :
			gameMode = 'time';
			limitMove = 90;
			mapping = [[1, 1, 1, 1, 1, 1],
			   	   	   [1, 1, 1, 1, 1, 1, 1],
			   	   	   [1, 0, 0, 0, 0, 0, 1, 1], 
			   	   	   [1, 1, 1, 1, 1, 1, 1, 1, 1],
			   	   	   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			   	   	   [1, 1, 1, 1, 1, 1, 1, 1, 1],
			   	   	   [1, 0, 0, 0, 0, 0, 1, 1],
			   	   	   [1, 1, 1, 1, 1, 1, 1],
			   	   	   [1, 1, 1, 1, 1, 1],
			   	   	  ];
			percentages = [0.5, 0.7, 0.95];
			scoreGoal = gameData.listGoals[stage];
			stageObjects = ['sushi', 'ramen', 'salad', 'sausage', 'burger'];
			minGoal = 40;
			maxGoal = 50;
			break;

		case 24 :
			gameMode = 'rush';
			limitMove = 90;
			mapping = [[1, 1, 1, 1, 1, 1],
			   	   	   [1, 1, 0, 0, 0, 1, 1],
			   	   	   [1, 1, 0, 0, 0, 0, 1, 1], 
			   	   	   [1, 1, 1, 1, 1, 1, 1, 1, 1],
			   	   	   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			   	   	   [1, 1, 1, 1, 1, 1, 1, 1, 1],
			   	   	   [1, 1, 0, 0, 0, 0, 1, 1],
			   	   	   [1, 1, 0, 0, 0, 1, 1],
			   	   	   [1, 1, 1, 1, 1, 1],
			   	   	  ];
			percentages = [0.5, 0.7, 0.98];
			scoreGoal = gameData.listGoals[stage];
			stageGoals = [['sausage', 50], ['ramen', 50], ['salad', 50], ['sushi', 50], ['burger', 50]];
			break;

		case 25 :
			gameMode = 'rush';
			limitMove = 90;
			mapping = [[1, 1, 1, 1, 1, 1],
			   	   	   [1, 1, 1, 1, 1, 1, 1],
			   	   	   [1, 1, 1, 0, 0, 1, 1, 1], 
			   	   	   [1, 1, 1, 0, 0, 0, 1, 1, 1],
			   	   	   [1, 1, 1, 0, 0, 0, 0, 1, 1, 1],
			   	   	   [1, 1, 1, 0, 0, 0, 1, 1, 1],
			   	   	   [1, 1, 1, 0, 0, 1, 1, 1],
			   	   	   [1, 1, 1, 1, 1, 1, 1],
			   	   	   [1, 1, 1, 1, 1, 1],
			   	   	  ];
			percentages = [0.5, 0.7, 0.98];
			scoreGoal = gameData.listGoals[stage];
			stageGoals = [['sausage', 60], ['ramen', 60], ['salad', 60], ['sushi', 60], ['burger', 60]];
			break;

		case 26 : 
			gameMode = 'rush';
			limitMove = 90;
			mapping = [[1, 1, 1, 1, 1, 1],
			   	   	   [1, 1, 0, 0, 0, 1, 1],
			   	   	   [1, 1, 0, 0, 0, 0, 1, 1], 
			   	   	   [1, 1, 1, 1, 1, 1, 1, 1, 1],
			   	   	   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			   	   	   [1, 1, 1, 1, 1, 1, 1, 1, 1],
			   	   	   [1, 1, 0, 0, 0, 0, 1, 1],
			   	   	   [1, 1, 0, 0, 0, 1, 1],
			   	   	   [1, 1, 1, 1, 1, 1],
			   	   	  ];
			percentages = [0.5, 0.7, 0.98];
			scoreGoal = gameData.listGoals[stage];
			stageGoals = [['sausage', 70], ['ramen', 70], ['salad', 70], ['sushi', 70], ['burger', 70]];
			break;

		case 27 :
			gameMode = 'rush';
			limitMove = 90;
			mapping = [[1, 1, 1, 1, 1, 1],
			   	   	   [1, 0, 1, 1, 1, 0, 1],
			   	   	   [1, 0, 0, 1, 1, 1, 0, 1], 
			   	   	   [1, 0, 0, 0, 1, 1, 1, 0, 1],
			   	   	   [1, 0, 0, 0, 0, 1, 1, 1, 0, 1],
			   	   	   [1, 0, 0, 0, 1, 1, 1, 0, 1],
			   	   	   [1, 0, 0, 1, 1, 1, 0, 1],
			   	   	   [1, 0, 1, 1, 1, 0, 1],
			   	   	   [1, 1, 1, 1, 1, 1],
			   	   	  ];
			percentages = [0.5, 0.7, 0.98];
			scoreGoal = gameData.listGoals[stage];
			stageGoals = [['sausage', 80], ['ramen', 80], ['salad', 80], ['sushi', 80], ['burger', 80]];
			break;

		case 28 :
			gameMode = 'rush';
			limitMove = 90;
			mapping = [[1, 1, 1, 1, 1, 1],
			   	   	   [1, 1, 1, 1, 1, 1, 1],
			   	   	   [1, 1, 0, 0, 0, 0, 1, 1], 
			   	   	   [1, 1, 1, 1, 1, 1, 1, 1, 1],
			   	   	   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			   	   	   [1, 1, 1, 1, 1, 1, 1, 1, 1],
			   	   	   [1, 1, 0, 0, 0, 0, 1, 1],
			   	   	   [1, 1, 1, 1, 1, 1, 1],
			   	   	   [1, 1, 1, 1, 1, 1],
			   	   	  ];
			percentages = [0.5, 0.7, 0.98];
			scoreGoal = gameData.listGoals[stage];
			stageGoals = [['sausage', 60], ['ramen', 60], ['salad', 60], ['sushi', 60], ['burger', 60]];
			break;

		case 29 :
			gameMode = 'time';
			limitMove = 120;
			mapping = [[1, 1, 1, 1, 1, 1],
			   	   	   [1, 1, 0, 0, 0, 1, 1],
			   	   	   [1, 1, 0, 0, 0, 0, 1, 1], 
			   	   	   [1, 1, 1, 1, 1, 1, 1, 1, 1],
			   	   	   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			   	   	   [1, 1, 1, 1, 1, 1, 1, 1, 1],
			   	   	   [1, 1, 0, 0, 0, 0, 1, 1],
			   	   	   [1, 1, 0, 0, 0, 1, 1],
			   	   	   [1, 1, 1, 1, 1, 1],
			   	   	  ];
			percentages = [0.5, 0.7, 0.98];
			scoreGoal = gameData.listGoals[stage];
			stageObjects = ['sushi', 'ramen', 'salad', 'sausage', 'burger'];
			minGoal = 60;
			maxGoal = 80;
			break;

		case 30 :
			gameMode = 'rush';
			limitMove = 90;
			mapping = [[1, 1, 1, 1, 1, 1],
			   	   	   [1, 1, 1, 1, 1, 1, 1],
			   	   	   [1, 1, 0, 0, 0, 0, 1, 1], 
			   	   	   [1, 1, 1, 1, 1, 1, 1, 1, 1],
			   	   	   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			   	   	   [1, 1, 1, 1, 1, 1, 1, 1, 1],
			   	   	   [1, 1, 0, 0, 0, 0, 1, 1],
			   	   	   [1, 1, 1, 1, 1, 1, 1],
			   	   	   [1, 1, 1, 1, 1, 1],
			   	   	  ];
			percentages = [0.5, 0.7, 0.98];
			scoreGoal = gameData.listGoals[stage];
			stageGoals = [['sausage', 50], ['ramen', 50], ['salad', 50], ['sushi', 50], ['burger', 50]];
			break;

		case 31 :
			gameMode = 'rush';
			limitMove = 90;
			mapping = [[1, 1, 1, 1, 1, 1],
			   	   	   [1, 1, 1, 1, 1, 1, 1],
			   	   	   [1, 1, 1, 0, 0, 1, 1, 1], 
			   	   	   [1, 1, 1, 1, 1, 1, 1, 1, 1],
			   	   	   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			   	   	   [1, 1, 1, 1, 1, 1, 1, 1, 1],
			   	   	   [1, 1, 1, 0, 0, 1, 1, 1],
			   	   	   [1, 1, 1, 1, 1, 1, 1],
			   	   	   [1, 1, 1, 1, 1, 1],
			   	   	  ];
			percentages = [0.5, 0.7, 0.98];
			scoreGoal = gameData.listGoals[stage];
			stageGoals = [['sausage', 75], ['ramen', 75], ['salad', 75], ['sushi', 75], ['burger', 75]];
			break;

		case 32 :
			gameMode = 'rush';
			limitMove = 90;
			mapping = [[1, 1, 1, 1, 1, 1],
			   	   	   [1, 1, 1, 1, 1, 1, 1],
			   	   	   [1, 1, 1, 0, 0, 1, 1, 1], 
			   	   	   [1, 1, 1, 0, 0, 0, 1, 1, 1],
			   	   	   [1, 1, 1, 0, 0, 0, 0, 1, 1, 1],
			   	   	   [1, 1, 1, 0, 0, 0, 1, 1, 1],
			   	   	   [1, 1, 1, 0, 0, 1, 1, 1],
			   	   	   [1, 1, 1, 1, 1, 1, 1],
			   	   	   [1, 1, 1, 1, 1, 1],
			   	   	  ];
			percentages = [0.5, 0.7, 0.98];
			scoreGoal = gameData.listGoals[stage];
			stageGoals = [['sausage', 80], ['ramen', 80], ['salad', 80], ['sushi', 80], ['burger', 80]];
			break;

		case 33 :
			gameMode = 'rush';
			limitMove = 70;
			mapping = [[1, 1, 1, 1, 1, 1],
				   	   [1, 1, 1, 1, 1, 1, 1],
				   	   [1, 1, 1, 1, 1, 1, 1, 1], 
				   	   [1, 1, 1, 1, 1, 1, 1, 1, 1],
				   	   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
				   	   [1, 1, 1, 1, 1, 1, 1, 1, 1],
				   	   [1, 1, 1, 1, 1, 1, 1, 1],
				   	   [1, 1, 1, 1, 1, 1, 1],
				   	   [1, 1, 1, 1, 1, 1],
				   	  ];
			percentages = [0.5, 0.7, 0.98];
			scoreGoal = gameData.listGoals[stage];
			stageGoals = [['sausage', 60], ['ramen', 60], ['salad', 70], ['sushi', 70], ['burger', 80]];
			break;

		case 34 :
			gameMode = 'rush';
			limitMove = 90;
			mapping = [[1, 1, 1, 1, 1, 1],
				   	   [1, 1, 1, 1, 1, 1, 1],
				   	   [1, 1, 1, 1, 1, 1, 1, 1], 
				   	   [1, 1, 1, 1, 1, 1, 1, 1, 1],
				   	   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
				   	   [1, 1, 1, 1, 1, 1, 1, 1, 1],
				   	   [1, 1, 1, 1, 1, 1, 1, 1],
				   	   [1, 1, 1, 1, 1, 1, 1],
				   	   [1, 1, 1, 1, 1, 1],
				   	  ];
			percentages = [0.5, 0.7, 0.98];
			scoreGoal = gameData.listGoals[stage];
			stageGoals = [['sausage', 80], ['ramen', 80], ['salad', 80], ['sushi', 80], ['burger', 80]];
			break;

		case 35 :
			gameMode = 'time';
			limitMove = 120;
			mapping = [[1, 1, 1, 1, 1, 1],
				   	   [1, 1, 1, 1, 1, 1, 1],
				   	   [1, 1, 1, 1, 1, 1, 1, 1], 
				   	   [1, 1, 1, 1, 1, 1, 1, 1, 1],
				   	   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
				   	   [1, 1, 1, 1, 1, 1, 1, 1, 1],
				   	   [1, 1, 1, 1, 1, 1, 1, 1],
				   	   [1, 1, 1, 1, 1, 1, 1],
				   	   [1, 1, 1, 1, 1, 1],
				   	  ];
			percentages = [0.5, 0.7, 0.98];
			scoreGoal = gameData.listGoals[stage];
			stageObjects = ['sushi', 'ramen', 'salad', 'sausage', 'burger'];
			minGoal = 60;
			maxGoal = 80;
			break;
	}

	gameData.gameMode = gameMode;
	gameData.stage = stage;
	gameData.percentages = percentages;
	gameData.mapping = mapping;
	gameData.scoreGoal = scoreGoal;
	gameData.limitMove = limitMove;
	gameData.stageGoals = stageGoals;
	gameData.stageObjects = stageObjects;
	gameData.minGoal = minGoal;
	gameData.maxGoal = maxGoal;

	stageSelector.checkTutor(stage);

	if(cnotification.onGoing) cnotification.removeNotif();

	if(gameMode == 'rush'){
		ctransition.close('crestaurantRush');
	} else {
		ctransition.close('cbazaarTime');
	}
}

stageSelector.checkTutor = function(stage){
	ctutorial.arrTutor = [];
	ctutorial.arrExpression = [];
	if(stage == plRef.stageOpened.length){
		switch(stage){
			case 0 :
				for(var a = 1; a <= 5; a++){
					var t = _t('tutor1-' + a);
					ctutorial.arrTutor.push(t);
				}

				ctutorial.arrExpression = ['normal', 'happy', 'normal', 'normal', 'happy'];
				break;

			case 5 :
				for(var a = 1; a <= 3; a++){
					var t = _t('tutor2-' + a);
					ctutorial.arrTutor.push(t);
				}

				ctutorial.arrExpression = ['happy', 'normal', 'happy'];
				break;

			case 10 :
				for(var a = 1; a <= 3; a++){
					var t = _t('tutor3-' + a);
					ctutorial.arrTutor.push(t);
				}

				ctutorial.arrExpression = ['happy', 'normal', 'happy'];
				break;

			case 12 :
				for(var a = 1; a <= 4; a++){
					var t = _t('tutor4-' + a);
					ctutorial.arrTutor.push(t);
				}

				ctutorial.arrExpression = ['happy', 'normal', 'happy', 'happy'];
				break;
		}
	}

	if(stage % 6 == 5){
		ctutorial.arrTutor.push(_t('bazaar1'));
		ctutorial.arrExpression.push('happy');
	}
}