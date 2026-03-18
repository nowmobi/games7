Data.save = function() {
	// return;
	// bake_cookie("Player", plRef);
	cstorage.set('Player', plRef);
}

Data.load = function() {
	// var test = read_cookie("Player");
	// if (test == null) {
	// 	Data.save();
	// 	return;
	// }

	// plRef = read_cookie("Player");
	var test = cstorage.get('Player');
	if(test == null){
		Data.save();
		return;
	}
	
	plRef = cstorage.get('Player');
}