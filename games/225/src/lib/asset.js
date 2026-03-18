Asset = {};

Asset.baseUrl = 'assets/'

Asset.image = function (name, filename) {
	game.load.image(name,this.baseUrl+BasicGame.screen+"/"+filename);
};

Asset.jpg = function (name, filename) {
	if (!filename) filename = name;
	game.load.image(name,this.baseUrl+BasicGame.screen+"/"+filename+'.jpg');
}

Asset.png = function (name, filename) {
	if (!filename) filename = name;
	game.load.image(name,this.baseUrl+BasicGame.screen+"/"+filename+'.png');
}

Asset.bitmapFont = function (name, filename) {
	if (!filename) filename = name;
	game.load.bitmapFont(name, this.baseUrl+filename+'.png', this.baseUrl+filename+'.xml');
};

Asset.atlaspng = function (name, filename) {
	if (!filename) filename = name;
	game.load.atlas(name, this.baseUrl+BasicGame.screen+"/"+filename+'.png', this.baseUrl+BasicGame.screen+"/"+filename+'.js');
	game.load.json(name, this.baseUrl+BasicGame.screen+"/"+filename+'.js')
}

Asset.audio = function(name, filename) {
	if (!filename) filename = name;
	game.load.audio(name, [this.baseUrl+'audio/'+filename+'.mp3', this.baseUrl+'audio/'+filename+'.ogg']);

}