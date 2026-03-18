BasicGame = {

    /* Here we've just got some global level vars that persist regardless of State swaps */
    score: 0,

    /* If the music in your game needs to play through-out a few State swaps, then you could reference it here */
    music: null,

    /* Your game can check BasicGame.orientated in internal loops to know if it should pause or not */
    orientated: false




};


BasicGame.Boot = function (game) {
};


BasicGame.Boot.prototype = {

    preload: function () {

        //  Here we load the assets required for our preloader (in this case a background and a loading bar)
        //this.load.image('preloaderBackground', 'images/preloader_background.jpg');
        //this.load.image('preloaderBar', 'images/preloadr_bar.png');
        
        //  Firefox doesn't support mp3 files, so use ogg
        //game.load.audio('bgm', ['assets/audio/bgm.mp3', 'assets/audio/bgm.ogg']);
        Asset.png("preload_bg")
        Asset.png("loader")
        Asset.atlaspng("preload_sprite")
        Asset.atlaspng('preload_sprite');
        // Asset.bitmapFont("chubby_72");
        // game.load.text('localizationJson', 'src/localization.json');
        game.time.advancedTiming = true;
        
        global.bgmstart();
        global.clickstart();

        game.load.start();
        game.load.onFileComplete.add(this.fileLoaded, this);
    },

    create: function () {
        // global.bgmplay();
        // datagames.bgm = true;
        // global.getCookie();
        // if (global.statusSound){
        //     //global.music.play();
        // }

        this.input.maxPointers = 1;
        this.stage.disableVisibilityChange = false;
        this.scaleStage();

        // this.state.start('Preloader');
        // this.state.start('Preloader', true, false, 'cmainmenu');

        global.scaleStage = this.scaleStage;
        
        global.localization.language = "en";
        global.localization.language = game_config.lang;
        global.localization.oldLanguage = "en";
        // global.localization.json = JSON.parse(game.cache.getText('localizationJson') );
        global.localization.json = game_language;
        this.stage.backgroundColor = 0xffffff;  

    },

    fileLoaded: function (progress) {
        document.getElementById('loader-text').innerHTML = "loading assets ("+progress+"%)";
        // trace("bootloader","Loading ("+progress+"%)");
        if (progress==100){
            this.load.onFileComplete.dispose();
            document.getElementById('loader-text').innerHTML = "preparing...";
            document.getElementById('loader-text').innerHTML = "done..";
            document.getElementById('main-game').removeChild(document.getElementById('loader-text'));
            // document.getElementById('keple').removeChild(document.getElementById('loader-text'));
            global.getCookie();
            game.state.start('Preloader', true, false, 'cmainmenu');
            // game.state.start('Preloader', true, false, 'ccookbook');
            // game.state.start('Preloader', true, false, 'cgame');
        }
    },
    
    scaleStage:function(){
        // hack debug
        if (global.isDesktop == true && global.landscape==false && global.simulatedMobile == false) {
            game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL; 
            //game.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT; 
            game.scale.maxWidth = BasicGame.gameWidth * 10;
            game.scale.maxHeight = BasicGame.gameHeight * 10;
            game.scale.setShowAll();
            game.scale.pageAlignHorizontally = true;
            game.scale.pageAlignVeritcally = true;
            game.scale.refresh();
        }
        else
        {
            game.scale.scaleMode = Phaser.ScaleManager.NO_BORDER;
            
            
            if (global.landscape == true)
                game.scale.forceOrientation(true, false);
            else 
                game.scale.forceOrientation(false, true);
            

            
            game.scale.setScreenSize(true);
        }



        
        game.scale.minWidth = BasicGame.gameWidth/30;
        game.scale.minHeight = BasicGame.gameHeight/30;
        game.scale.maxWidth = BasicGame.gameWidth*2;
        game.scale.maxHeight = BasicGame.gameHeight*2;
        game.scale.pageAlignHorizontally = true;
        game.scale.pageAlignVertically = true;
        game.scale.setScreenSize(true);

        
        if(game.scale.scaleMode==Phaser.ScaleManager.NO_BORDER){
            BasicGame.viewX = (game.scale.width/2 - global.deviceWidth/2)*game.scale.scaleFactor.x;
            BasicGame.viewY = (game.scale.height/2 - global.deviceHeight/2 - 1)*game.scale.scaleFactor.y;
            BasicGame.viewRight = BasicGame.gameWidth-BasicGame.viewX;
            BasicGame.viewBottom = BasicGame.gameHeight-BasicGame.viewY;
            BasicGame.viewWidth = BasicGame.viewRight - BasicGame.viewX; 
            BasicGame.viewHeight = BasicGame.viewBottom - BasicGame.viewY; 
        }else{
            BasicGame.viewX = 0;
            BasicGame.viewY = 0;
            BasicGame.viewRight = BasicGame.gameWidth;
            BasicGame.viewBottom = BasicGame.gameHeight;
            BasicGame.viewWidth = BasicGame.gameWidth;
            BasicGame.viewHeight = BasicGame.gameHeight;
        }
    
        document.getElementById("game").style.width = global.deviceWidth+"px";
        document.getElementById("game").style.height = global.deviceHeight-1+"px";//The css for body includes 1px top margin, I believe this is the cause for this -1
        document.getElementById("game").style.overflow = "hidden";
        // trace("BOOT", document.getElementById("game").style.width, document.getElementById("game").style.height);

    },

    gameResized: function (width, height) {

        //  This could be handy if you need to do any extra processing if the game resizes.
        //  A resize could happen if for example swapping orientation on a device.
    },

    enterIncorrectOrientation: function () {
        alert("incorrect");
        BasicGame.orientated = false;
        if (global.isDesktop == false)
            document.getElementById('orientation').style.display = 'block';

    },

    leaveIncorrectOrientation: function () {
        BasicGame.orientated = true;
        document.getElementById('orientation').style.display = 'none';
        //this.scaleStage();
        alert("correct");
    }

};









window.onDeviceReady = function() {
    helper.init();

    (function () {
        global.logicWidth = 640;
        global.logicHeight = 1020;
        global.landscape = false;
        global.simulatedMobile = false;
        global.forceWidth =  false;
        global.astrid = true;

        window.createPhaser = function() {

            //By default we set 
            // device canvas size 
            //  Add the States your game has.
            //  You don't have to do this in the html, it could be done in your Boot state too, but for simplicity I'll keep it here.
            game.state.add('Boot', BasicGame.Boot);
            game.state.add('Preloader', BasicGame.Preloader);
            game.state.add('cmainmenu', cmainmenu);
            game.state.add('ccookbook', ccookbook);
            game.state.add('cgame', cgame);

            //  Now start the Boot state.
            global.firstTime = true;
            game.state.start('Boot');
        }

        helper.initOnLoad();
    })();
}