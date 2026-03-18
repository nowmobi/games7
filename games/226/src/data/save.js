Data.save = function() {
	// return;
	bake_cookie("Player", plRef);
}

Data.load = function() {
	// return;
	var test = read_cookie("Player");
	if (test == null) {
		Data.save();
		return;
	}

	plRef = read_cookie("Player");
}