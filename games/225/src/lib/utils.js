trace = function() {
	if (!game_config.debug) return;
	var s = "";
	for (var i = 0; i < arguments.length; i++) {
    	s+= "|"+ arguments[i];
  	}

  	window.lastTrace = s;
  	console.log(s);
}
utils = {};

utils.floor = function(obj) {
	if (!obj) return;
	obj.x = Math.floor(obj.x);
	obj.y = Math.floor(obj.y);
	obj.width = Math.floor(obj.width);
	obj.height = Math.floor(obj.height);
}

utils.bannerStatus = '';
utils.isBannerHidden = false;
utils.openUrl = function (url) {
	if (global.isCocoonJS) {
		Cocoon.App.openURL(url);
	}
	else {
		window.open(url,'_blank');
	}
}
utils.initBanner = function() {
	if (!global.isCocoonJS) return;
	Cocoon.Ad.banner.on("ready", function(width,height){
        utils.layoutBanner();
    });

    Cocoon.Ad.banner.on("shown", function(){
        utils.bannerStatus = "onBannerShown";
        utils.isBannerHidden = false;
    });

    Cocoon.Ad.banner.on("hidden", function(){
        utils.bannerStatus = "onBannerHidden";
        utils.isBannerHidden = true;
    });
};

utils.layoutBanner = function() {
	if (!global.isCocoonJS) return;
    var rect = Cocoon.Ad.getRectangle();
    var dpr = window.devicePixelRatio;
    rect.x = window.innerWidth * dpr/2 - rect.width/2;
    rect.y = 0;

    Cocoon.Ad.setRectangle(rect);

    if (!utils.isBannerHidden)
        Cocoon.Ad.showBanner();
};

utils.loadBanner = function() {
	if (!global.isCocoonJS) return;
    Cocoon.Ad.loadBanner();
};

utils.stretch = function(sourceW, sourceH, targetW, targetH) {
	return {x:targetW/sourceW, y:targetH/sourceH};
};
utils.fitToWidth = function(sourceW, sourceH, targetW, targetH) {
	var sx = targetW / sourceW;
	return {x:sx, y:sx};
};
utils.fitToHeight = function(sourceW, sourceH, targetW, targetH) {
	var sy = targetH / sourceH;
	return {x:sy, y:sy};
};
utils.fitToAll = function(sourceW, sourceH, targetW, targetH) {
	var s = {x:0,y:0};
	s.x = targetW/sourceW;
	s.y = targetH/sourceH;
	if (s.x > s.y) s.x = s.y;
	else if (s.y > s.x) s.y = s.x;
	return s;
};
utils.fitToCenter = function(sourceW, sourceH, targetW, targetH) {
	var s = utils.fitToAll(sourceW,sourceH, targetW, targetH);
	var o = {x:0,y:0};
	sourceW *= s.x;
	sourceH *= s.y;
	o.x = (targetW - sourceW)/2;
	o.y = (targetH - sourceH)/2;
};
PIXI.DisplayObjectContainer.prototype.fitToCenter = function(sourceW, sourceH, targetW, targetH) {
	var s = utils.fitToAll(sourceW,sourceH, targetW, targetH);
	this.scale.x = s.x;
	this.scale.y = s.y;
	this.y = (global.height-sourceH*s.y) * 0.5 + global.top;
	this.x = (global.width-sourceW*s.x) * 0.5 + global.left;
}
PIXI.DisplayObjectContainer.prototype.fitToTop = function(sourceW, sourceH, targetW, targetH) {
	var s = utils.fitToAll(sourceW,sourceH, targetW, targetH);
	this.scale.x = s.x;
	this.scale.y = s.y;
	this.y = (global.height-sourceH*s.y) * 0 + global.top;
	this.x = (global.width-sourceW*s.x) * 0.5 + global.left;
}
PIXI.DisplayObjectContainer.prototype.fitToBottom = function(sourceW, sourceH, targetW, targetH) {
	var s = utils.fitToAll(sourceW,sourceH, targetW, targetH);
	this.scale.x = s.x;
	this.scale.y = s.y;
	this.y = (global.height-sourceH*s.y) + global.top;
	this.x = (global.width-sourceW*s.x) * 0.5 + global.left;
}
PIXI.DisplayObjectContainer.prototype.fitToAll = function(sourceW, sourceH, targetW, targetH) {
	var s = utils.fitToAll(sourceW,sourceH, targetW, targetH);
	this.scale.x = s.x;
	this.scale.y = s.y;
	// this.y = global.top;
	// this.x = global.left;
}

Phaser.Sprite.prototype.fitToWidth = function(targetW, targetH) {
	var s = utils.fitToWidth(this.width, this.height, targetW, targetH);
	this.scale.x = s.x;
	this.scale.y = s.y;
};
Phaser.Sprite.prototype.fitToHeight = function(targetW, targetH) {
	var s = utils.fitToHeight(this.width, this.height, targetW, targetH);
	this.scale.x = s.x;
	this.scale.y = s.y;
};
Phaser.Sprite.prototype.stretch = function(targetW, targetH) {
	this.width = targetW;
	this.height = targetH;
	// var s = utils.stretch(this.width, this.height, targetW, targetH);
	// this.scale.x = s.x;
	// this.scale.y = s.y;
};

Function.prototype.inherit = function(proto, parentClass) {
	if (parentClass)
		this.prototype = Object.create(parentClass.prototype);
	this.prototype.constructor = this;
	extend(this.prototype, proto);
};

extend = function(obj, extObj) {
    if (arguments.length > 2) {
        for (var a = 1; a < arguments.length; a++) {
            extend(obj, arguments[a]);
        }
    } else {
        for (var i in extObj) {
            obj[i] = extObj[i];
        }
    }
    return obj;
};


Phaser.Group.prototype.getFirstInstanceOf =  function(obj, alive) {
	trace("getFirstInstanceOf");
	result = null;
	if (alive == true) {
		this.forEachAlive(function(item) {
			if (item instanceof obj) {
				result = item;
				return;
			}
		});
	}
	else if (alive == false) {
		this.forEachDead(function(item) {
			trace((item instanceof obj), item);
			if (item instanceof obj) {
				result = item;
				return;
			}
		});
	}
	else {
		this.forEach(function(item) {
			if (item instanceof obj) {
				result = item;
				return;
			}
		});
	}
	return result;
};





window.mobilecheck = function() {
  var check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
}

window.mobileAndTabletcheck = function() {
  var check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
}



global = {}
global.music;

global.bgmstart = function()
{
	trace("bgmstart");
	Asset.audio('bgm', 'bgm');
	// game.load.audio('bgm', ['assets/audio/bgm.mp3', 'assets/audio/bgm.ogg']);
	// global.music = game.add.audio("bgm",0.3,true);
}

global.onTap = function() {
	if (game.input.onTap.has(global.onTap)) {
		game.input.onTap.remove(global.onTap);
		global.bgmplay();
	}
}

global.bgmplay = function()
{
	trace("bgmplay");
	if (!global.music)
		global.music = game.add.audio('bgm', 1, true);
	global.music.play();
}

global.bgmstop = function()
{
	trace("bgmstop");
	global.music.stop();
}

global.bgmpause = function()
{
	trace("bgmpause");
	global.music.pause();
}

global.bgmresume = function()
{
	trace("bgmresume");
	global.music.resume();
}

global.clickstart = function()
{
	Asset.audio('klik', 'button-click');
	global.click = game.add.audio('klik');
}

global.clickbtn = function()
{
	if(datagames.bgm) {
		global.click.play();
	}
}

// ------------ cookieeeee
global.setCookie = function() {
	// return;		// hack
	var expTime = 30*24*3600;

	var cname = [
		"tbp_fp",
		"tbp_da",
		"tbp_fd",
		"tbp_sc",
	];

	/*
		fp = datagames.firstPlay
		fd = datagames.flagDough
		da = datagames.awal
		sc = datagames.score
	*/
	var cvalue = [
		datagames.firstPlay,
		JSON.stringify(datagames.awal),
		datagames.flagDough,
		JSON.stringify(datagames.score)
	];

	for(var i=0;i<cname.length;i++) {
	// 	// console.trace(cname[i]);
	// 	console.trace(cvalue[i]);
		document.cookie = cname[i] + "=" + cvalue[i] + ";" + expTime;
		// document.cookie = cname[0] + "=" + "test" + ";" + expTime;
	}

	var cok = document.cookie;
 	// var val = new Array();
	console.trace(cok);
}

global.getCookie = function() {
	// return;	// hack
	var testCok = document.cookie.indexOf("tbp_fp");
	if(testCok < 0) {
		global.setCookie();
		return;
	}

	var cok = document.cookie.split('; ');
 	var val = new Array();
	console.trace(cok);
	for(var i=0;i<cok.length;i++) {
		var spVal = cok[i].split("=");
		val.push(spVal[1]);
	}

	datagames.gameFinish = JSON.parse(val[0]);
	datagames.photoLocation = JSON.parse(val[1]);
	datagames.photo = val[2];

	datagames.firstPlay = val[0];
	datagames.awal = JSON.parse(val[1]);
	datagames.flagDough = val[2];
	datagames.score = JSON.parse(val[3]);
}

// ------------ end cookie

// ****************************************************
// bagian atlas/texture handling
// ****************************************************
//global.add = {};
//global.load = {};

global.addAtlas = function(key, subfolder, png, json) {
	if (png == undefined) 
		png = key;

	if (json == undefined)
		json = png;

	if (subfolder != undefined && subfolder != "")
		subfolder = subfolder + "/"
	else if (subfolder == undefined)
		subfolder =""

	game.load.atlas(key, 'assets/'+BasicGame.screen+'/'+subfolder+png+'.png', 'assets/'+BasicGame.screen+'/'+subfolder+json+'.json');
	game.load.json(json, 'assets/'+BasicGame.screen+'/'+subfolder+json+'.json')
}

global.findAtlasBySpriteKey = function(key) {
	var found =false;
	var val = {};
	var jsons = game.cache.getKeys(Phaser.Cache.JSON);
	for (var sKey in jsons) {
   		var arr = game.cache.getJSON(jsons[sKey]).frames;
   		for (var i = 0; i < arr.length; i++) {
   			var p = arr[i];
   			
   			if (p.filename == key) {
   				val.atlasKey = jsons[sKey]
   				val.p = p;
   				return val;



   			}
   		};
   	}

   	return null;
}

global.loadTexture = function(sprite, newKey) {
	var temp = global.findAtlasBySpriteKey(newKey);
	

	sprite.loadTexture(temp.atlasKey, newKey)

	var ssc = temp.p.spriteSourceSize;
	var dw = ssc.w - ssc.x;
	var dh = ssc.h - ssc.y;

	sprite.atlasName = temp.atlasKey;
	
	sprite.pivot.x = sprite.tempPivotX - ssc.x;
	sprite.pivot.y =  sprite.tempPivotY - ssc.y;	

	sprite.tempPivotX = sprite.pivot.x;
	sprite.tempPivotY = sprite.pivot.y;
}

global.createSprite = function(x,y,key) {
	var temp = global.findAtlasBySpriteKey(key);
	if (temp == null) {
		return null;
	}

	var t = new Phaser.Sprite(game, x, y, temp.atlasKey);
	t.frameName = key;

	var ssc = temp.p.spriteSourceSize;
	var dw = ssc.w - ssc.x;
	var dh = ssc.h - ssc.y;

	t.atlasName = temp.atlasKey;
	t.tempPivotX = t.pivot.x;
	t.tempPivotY = t.pivot.y;
	t.pivot.x -= ssc.x;
	t.pivot.y -= ssc.y;	
	t.dw = dw;
	t.dh = dh;

	return t;
}

global.addSprite = function(x, y, key) {
	var t = global.createSprite(x, y, key);
	if (t) {
		game.world.add(t);
	}
	return t;
}

global.addButton = function(x, y, key, actionOnClick, context) {
	var temp = global.findAtlasBySpriteKey(key);
	if (temp == null) {
	}

	var t = game.add.button(x, y, temp.atlasKey, actionOnClick, context, key, key, key, key);

	var ssc = temp.p.spriteSourceSize;
	var dw = ssc.w - ssc.x;
	var dh = ssc.h - ssc.y;

	t.atlasName = temp.atlasKey;
	t.tempPivotX = t.pivot.x;
	t.tempPivotY = t.pivot.y;
	t.pivot.x -= ssc.x;
	t.pivot.y -= ssc.y;	
    t.dw = dw;
	t.dh = dh;



	return t;
}


// ****************************************************
// bagian localization
// ****************************************************
global.localization = {}

global.addBitmapText = function (x, y, font, keyString, size) {
	//game.
	game.add.bitmapText(x, y, font, "play", 32);
}

global.switchLanguage= function(newL) {
	global.localization.oldLanguage = global.localization.language;
	global.localization.language = newL;
	global.updateLocalization();
}

global.updateLocalization = function () {
	if (global.localization.language != global.localization.oldLanguage) {
		game.world.forEach(global.localization.updateAllBitmapTexts, game)
	}
}

global.localization.findNewString = function(t) {
	for (var key in global.localization.json[global.localization.oldLanguage]) {
 		 if (global.localization.json[global.localization.oldLanguage][key] == t) {
 		 	if (global.localization.json[global.localization.language][key] == undefined) {
 		 		alert("keyString '" + key + "'' on "+global.localization.language+" is not exist on global.localization.json !")
 		 		return "ERROR";
 		 	}
 		 	return global.localization.json[global.localization.language][key];
 		 } 
	}
	alert("keyString '" + t + "'' on "+global.localization.language+" is not exist on global.localization.json !")
	return "NULL";
}

global.localization.updateAllBitmapTexts = function (t) {
	if (t instanceof Phaser.BitmapText) {
		t.text = global.localization.findNewString(t.text);
	}
}

global.getLocalText = function (keyString) {
	// body...
	keyString = keyString.toLowerCase();
	if (global.localization.json[global.localization.language] == undefined) {
		alert("global.localization.language |"+global.localization.language+"| is not exist on global.localization.json !")
	} else if (global.localization.json[global.localization.language][keyString] == undefined) {
		alert("keyString '" + keyString + "'' on "+global.localization.language+" is not exist on global.localization.json !")
	} else {
		return global.localization.json[global.localization.language][keyString];
	}
	return null;
}

global._t = function(keystring)  {
	var t = global.getLocalText(keystring);
	if (!t) return keystring;
	else return t;
}


// ****************************************************
// bagian responsive
// ****************************************************
global.processScaling = function (argument) {
	// body...
	var device = Phaser.Device;
	// BasicGame.screen = "1020";
	// BasicGame.gameWidth = 1020;
	// BasicGame.gameHeight = 1020;
	// return;

	global.isDesktop = !mobileAndTabletcheck();
	trace("global.isDesktop", global.isDesktop);
	// global.isDesktop = Phaser.Device.desktop;
	// alert(Phaser.Device.desktop);
	// global.isDesktop = false;

	var wx;
	if (global.landscape == true && device.desktop == false) {
		if (global.deviceHeight > global.deviceWidth ) {
			global.forceReloadFlag = true;
			document.getElementById('orientation').style.display = 'block';
			var t = global.deviceWidth;
			global.deviceWidth = global.deviceHeight;
			global.deviceHeight = t;
		}

		BasicGame.srx = Math.max(global.deviceWidth,global.deviceHeight);
		BasicGame.sry = Math.min(global.deviceWidth,global.deviceHeight);
		wx = BasicGame.srx;
	} else if (global.landscape == false && device.desktop == false) {

		if (global.deviceWidth > global.deviceHeight) {
			global.forceReloadFlag = true;
			document.getElementById('orientation').style.display = 'block';
			var t = global.deviceHeight;
			global.deviceHeight = global.deviceWidth;
			global.deviceWidth = t;
		} 

		BasicGame.srx = Math.min(global.deviceWidth,global.deviceHeight);
		BasicGame.sry = Math.max(global.deviceWidth,global.deviceHeight);
		wx = BasicGame.sry;
	}
	// alert(global.forceReloadFlag);
	
	var r = BasicGame.logicWidth/BasicGame.logicHeight;

	//if(wx >= 408){
	// if(wx <= 1019){
	// 	// BasicGame.screen = "714";
	// 	BasicGame.screen = "1020";
	// 	if (global.landscape){
	// 		BasicGame.gameWidth = 714;
	// 	} else {
	// 		BasicGame.gameHeight = 714;
	// 	}
	// } else {
		BasicGame.screen = "1020";
		if (global.landscape){
			BasicGame.gameWidth = 1020;
		} else {
			BasicGame.gameHeight = 1020;
		}
	// }

	/*
	if(wx >= 714){
		BasicGame.screen = "714";
		if (global.landscape){
			BasicGame.gameWidth = 714;
		} else {
			BasicGame.gameHeight = 714;
		}
	}
	if(wx >= 1020){
		BasicGame.screen = "1020";
		if (global.landscape){
			BasicGame.gameWidth = 1020;
		} else {
			BasicGame.gameHeight = 1020;
		}
	}
	if(wx >= 1530){
		BasicGame.screen = "1530";
		if (global.landscape){
			BasicGame.gameWidth = 1530;
		} else {
			BasicGame.gameHeight = 1530;
		}
	}
	if(wx >= 1900){
		BasicGame.screen = "2040";
		if (global.landscape){
			BasicGame.gameWidth = 2040;
		} else {
			BasicGame.gameHeight = 2040;
		}
	}

	// hack debug only
	BasicGame.screen = "408";
	if (global.landscape){
			BasicGame.gameWidth = 408;
	} else {
		BasicGame.gameHeight = 408;
	}
	*/

	if (global.forceWidth) {
		BasicGame.screen = "1020";
		BasicGame.gameWidth = global.logicWidth;
		BasicGame.gameHeight = global.logicHeight
	}
	
	//If on deskop, we may need to fix the maximum resolution instead of scaling the game to the full monitor resolution
	
    global.simulatedMobileOnDesktop = false;
    
    if(device.desktop && global.simulatedMobile == true){
    	global.simulatedMobileOnDesktop = true;
    } else if(device.desktop && global.simulatedMobile == false && global.forceWidth == false){
    	/*
		BasicGame.screen = "1020";
		if (global.landscape){
			BasicGame.gameWidth = 1020;
		} else {
			BasicGame.gameHeight = 1020;
		}*/
	} 

	device = null;
	
	if (global.landscape)
		BasicGame.gameHeight = BasicGame.gameWidth/r;
	else
		BasicGame.gameWidth = BasicGame.gameHeight*r;

};

global.cw = function(value){
		return Math.floor(value/BasicGame.logicWidth * BasicGame.gameWidth); 
	};

global.ch = function(value){
	return Math.floor(value/BasicGame.logicHeight * BasicGame.gameHeight);
};

global.init = function() {
	global.left = BasicGame.viewX;
	global.top = BasicGame.viewY;
	global.right = BasicGame.viewRight;
	global.bottom = BasicGame.viewBottom;
	global.centerX = BasicGame.viewX + BasicGame.viewWidth/2;
	global.centerY = BasicGame.viewY + BasicGame.viewHeight/2;
	global.viewWidth = BasicGame.viewWidth;
	global.viewHeight = BasicGame.viewHeight;
	global.width = global.viewWidth;
	global.height = global.viewHeight;
}

global.alignLeftPercent = function(obj, percent) {
	// percent = 0% = plg kiri, 100% = plg kanan
	var temp = percent;
	obj.position.x = global.left + Math.floor((global.viewWidth) * (temp / 100));
}

global.alignTopPercent = function(obj, percent) {
	// percent = 0% = plg kiri, 100% = plg kanan
	var temp = percent;
	obj.position.y = global.top + Math.floor((global.viewHeight) * (temp / 100));
}


global.alignLeft = function(obj){
	obj.position.x = BasicGame.viewX;
};

global.alignTop = function(obj){
	obj.position.y = BasicGame.viewY;
};

global.alignTopLeft = function(obj){
	global.alignTop(obj);
	global.alignLeft(obj)
};

global.alignCenterX = function(obj){
	obj.position.x = BasicGame.viewX + BasicGame.viewWidth / 2 - obj.width / 2;
};

global.alignCenterY = function(obj){
	obj.position.y = BasicGame.viewY + BasicGame.viewHeight / 2 - obj.height / 2;
};

global.alignCenter = function (obj) {
	global.alignCenterY(obj)
	global.alignCenterX(obj)
}

global.alignBottomRight = function(obj){
	global.alignBottom(obj);
	global.alignRight(obj)
};

global.alignBottom = function(obj){
	obj.position.y = BasicGame.viewBottom - obj.height;
};

global.alignRight = function(obj){
	obj.position.x = BasicGame.viewRight - obj.width;
};

global.setPosX = function(percent) {
	var temp = percent;	
	return Math.floor((BasicGame.gameWidth) * (temp / 100));
}

global.setPosY = function(percent) {
	var temp = percent;
	return Math.floor((BasicGame.gameHeight) * (temp / 100));
}

global.setWordWrap = function(size) {
	return (size*BasicGame.gameWidth/1020);
}

global.setFont = function(size) {
	return (size*BasicGame.gameWidth/1020);
}

global.setSound = function() {
	
}

global.AngleOfTwoDots = function(x1, y1, x2, y2) {
	var dx = x1 - x2;
	var dy = y1 - y2;
	return Math.atan2(dy, dx);
}

global.RadToDeg = function(rad) {
	return rad * 180 / Math.PI;
}

//======Fungsi Buatan Sendiri======
//======Fungsi Buatan Sendiri======
//======Fungsi Buatan Sendiri======
global.useMobile= true;
global.setX = function(obj, percent){
	if (global.useMobile){
		obj.position.x = Math.floor(BasicGame.gameWidth * (percent / 100));
	}else{
		obj.position.x = Math.floor(global.logicWidth * (percent / 100));	
	}	
};

global.setY = function(obj, percent){
	if (global.useMobile){
		obj.position.y = Math.floor(BasicGame.viewBottom * (percent / 100));
	}else{
		obj.position.y = Math.floor(global.logicHeight * (percent / 100));
	}
};

global.cw2 = function(value){
	if (global.useMobile){
		//return Math.floor(value/BasicGame.logicWidth * BasicGame.gameWidth); 
		return Math.floor(value * (BasicGame.screen / 2040));
	}else{
		
	}
};

global.ch2 = function(value){
	if (global.useMobile){
		//return Math.floor(value/BasicGame.logicHeight * BasicGame.gameHeight);
		return Math.floor(value * (BasicGame.screen / 2040));
	}else{
		
	}
};

global.maxWidthScreen = function(){
	if (global.useMobile){
		return BasicGame.gameWidth;
	}else{
		return global.logicWidth;
	}
};

global.maxHeightScreen = function(){
	if (global.useMobile){
		return BasicGame.gameHeight;
	}else{
		return global.logicHeight;
	}
};

global.setLengthScore = function(value, length){
	var temp= "";
	for (i=0; i<length-value.toString().length; i++){
		temp+= "0";
	}
	temp+= value.toString();
	return temp;

},

global.createSound = function(x, y){
	if (global.statusSound){
		var temp= "btn_sound_on";
	}else{
		var temp= "btn_sound_off";
	}
	this.btnSound= game.add.button(0,0,temp, function(){
		global.statusSound= !(global.statusSound);
		if (global.statusSound){
			this.btnSound.loadTexture("btn_sound_on");
			global.music.play();
		}else{
			this.btnSound.loadTexture("btn_sound_off");
			global.music.pause();
		}
	},this,0,0,0,0);
	global.setX(this.btnSound, x);
	global.setY(this.btnSound, y);
};

global.tapMore = function(){
};

global.fileComplete = function(progress, cacheKey, success, totalLoaded, totalFiles) {

    //this.text.setText("File Complete: " + progress + "% - " + totalLoaded + " out of " + totalFiles);
    if (this.loading_hati == null){
        this.loading_hati = game.add.sprite(0,0,'loading_hati'); 
        this.loading_hati.x = 768/2;            
        this.loading_hati.y = 1024/2;
        this.loading_hati.anchor.set(0.5);
        game.add.tween(this.loading_hati).to({angle: 360},700, Phaser.Easing.Linear.None, true, 0,100000, false);
    }
};
//======Fungsi Buatan Sendiri======
//======Fungsi Buatan Sendiri======
//======Fungsi Buatan Sendiri======
