function CMain(oData){
    var _bUpdate;
    var _iCurResource = 0;
    var RESOURCE_TO_LOAD = 0;
    var _iState = STATE_LOADING;
    var _oData;
    
    var _oPreloader;
    var _oMenu;
    var _oHelp;
    var _oGame;

    this.initContainer = function(){
        s_oCanvas = document.getElementById("canvas");
        s_oStage = new createjs.Stage(s_oCanvas);
		s_oStage.preventSelection = true;
        createjs.Touch.enable(s_oStage);
		
	s_bMobile = jQuery.browser.mobile;
        if(s_bMobile === false){
            s_oStage.enableMouseOver(FPS);  
            $('body').on('contextmenu', '#canvas', function(e){ return false; });
        }
		
        s_iPrevTime = new Date().getTime();

	createjs.Ticker.addEventListener("tick", this._update);
        createjs.Ticker.setFPS(FPS);
        
        if(navigator.userAgent.match(/Windows Phone/i)){
                DISABLE_SOUND_MOBILE = true;
        }
        
        s_oSpriteLibrary  = new CSpriteLibrary();

        //ADD PRELOADER
        _oPreloader = new CPreloader();
		
	
    };
    
    this.preloaderReady = function(){
        _bUpdate = true;
		
		if (typeof sdk !== 'undefined' && sdk.showBanner !== 'undefined') {
sdk.showBanner();
}
        
        s_oMain._loadImages();
        if(DISABLE_SOUND_MOBILE === false || s_bMobile === false){
            s_oMain._initSounds();
        }
        
        
    };
    
    
    this.soundLoaded = function(){
        _iCurResource++;
        var iPerc = Math.floor(_iCurResource/RESOURCE_TO_LOAD *100);
        _oPreloader.refreshLoader(iPerc);

         if(_iCurResource === RESOURCE_TO_LOAD){
            this._onPreloaderComplete();
         }
    };
    
    this._initSounds = function(){
    
        var aSoundsInfo = new Array();
        aSoundsInfo.push({path: './sounds/',filename:'press_button',loop:false,volume:1, ingamename: 'press_button'});
        aSoundsInfo.push({path: './sounds/',filename:'game_over',loop:false,volume:1, ingamename: 'game_over'});
        aSoundsInfo.push({path: './sounds/',filename:'win',loop:false,volume:1, ingamename: 'win'});
        aSoundsInfo.push({path: './sounds/',filename:'click_cell',loop:false,volume:1, ingamename: 'click_cell'});
        aSoundsInfo.push({path: './sounds/',filename:'dices',loop:false,volume:1, ingamename: 'dices'});
        aSoundsInfo.push({path: './sounds/',filename:'positive_beep',loop:false,volume:1, ingamename: 'positive_beep'});
        aSoundsInfo.push({path: './sounds/',filename:'negative_beep',loop:false,volume:1, ingamename: 'negative_beep'});
        
        RESOURCE_TO_LOAD += aSoundsInfo.length;

        s_aSounds = new Array();
        for(var i=0; i<aSoundsInfo.length; i++){
            s_aSounds[aSoundsInfo[i].ingamename] = new Howl({ 
                                                            src: [aSoundsInfo[i].path+aSoundsInfo[i].filename+'.mp3', aSoundsInfo[i].path+aSoundsInfo[i].filename+'.ogg'],
                                                            autoplay: false,
                                                            preload: true,
                                                            loop: aSoundsInfo[i].loop, 
                                                            volume: aSoundsInfo[i].volume,
                                                            onload: s_oMain.soundLoaded()
                                                        });
        }
        
    };  
    
    this._loadImages = function(){
        s_oSpriteLibrary.init( this._onImagesLoaded,this._onAllImagesLoaded, this );
        s_oSpriteLibrary.addSprite("msg_box","./sprites/msg_box.png");
        s_oSpriteLibrary.addSprite("alert_box","./sprites/alert_box.png");
        s_oSpriteLibrary.addSprite("but_info","./sprites/but_info.png");
        s_oSpriteLibrary.addSprite("but_yes_big","./sprites/but_yes_big.png");
        s_oSpriteLibrary.addSprite("bg_menu","./sprites/bg_menu.jpg"); 
        s_oSpriteLibrary.addSprite("bg_game","./sprites/bg_game.jpg");
        s_oSpriteLibrary.addSprite("but_exit","./sprites/but_exit.png");
        s_oSpriteLibrary.addSprite("audio_icon","./sprites/audio_icon.png");
        s_oSpriteLibrary.addSprite("but_fullscreen","./sprites/but_fullscreen.png");
        s_oSpriteLibrary.addSprite("but_p1","./sprites/but_p1.png");
        s_oSpriteLibrary.addSprite("but_p2","./sprites/but_p2.png");
        s_oSpriteLibrary.addSprite("but_play","./sprites/but_play.png");
        s_oSpriteLibrary.addSprite("but_restart","./sprites/but_restart.png");
        s_oSpriteLibrary.addSprite("but_home","./sprites/but_home.png");
        s_oSpriteLibrary.addSprite("but_speed","./sprites/but_speed.png");
        s_oSpriteLibrary.addSprite("white_piece","./sprites/white_piece.png");
        s_oSpriteLibrary.addSprite("red_piece","./sprites/red_piece.png");
        s_oSpriteLibrary.addSprite("highlight","./sprites/highlight.png");
        s_oSpriteLibrary.addSprite("triangle_white","./sprites/triangle_white.png");
        s_oSpriteLibrary.addSprite("triangle_red","./sprites/triangle_red.png");
        s_oSpriteLibrary.addSprite("but_dice","./sprites/but_dice.png");
        s_oSpriteLibrary.addSprite("launch_dices_white","./sprites/launch_dices_white.png");
        s_oSpriteLibrary.addSprite("launch_dices_red","./sprites/launch_dices_red.png");
        s_oSpriteLibrary.addSprite("but_no","./sprites/but_no.png");
        s_oSpriteLibrary.addSprite("turn_p1","./sprites/turn_p1.png");
        s_oSpriteLibrary.addSprite("turn_p2","./sprites/turn_p2.png");
        s_oSpriteLibrary.addSprite("turn_cpu","./sprites/turn_cpu.png");
        s_oSpriteLibrary.addSprite("light_turn","./sprites/turn_selection.png");
        s_oSpriteLibrary.addSprite("bg_select_mode","./sprites/bg_select_mode.jpg");
        s_oSpriteLibrary.addSprite("dice_white_a_1","./sprites/dice_white_a_1.png");
        s_oSpriteLibrary.addSprite("dice_white_a_2","./sprites/dice_white_a_2.png");
        s_oSpriteLibrary.addSprite("dice_white_a_3","./sprites/dice_white_a_3.png");
        s_oSpriteLibrary.addSprite("dice_white_a_4","./sprites/dice_white_a_4.png");
        s_oSpriteLibrary.addSprite("dice_white_a_5","./sprites/dice_white_a_5.png");
        s_oSpriteLibrary.addSprite("dice_white_a_6","./sprites/dice_white_a_6.png");
        s_oSpriteLibrary.addSprite("dice_white_b_1","./sprites/dice_white_b_1.png");
        s_oSpriteLibrary.addSprite("dice_white_b_2","./sprites/dice_white_b_2.png");
        s_oSpriteLibrary.addSprite("dice_white_b_3","./sprites/dice_white_b_3.png");
        s_oSpriteLibrary.addSprite("dice_white_b_4","./sprites/dice_white_b_4.png");
        s_oSpriteLibrary.addSprite("dice_white_b_5","./sprites/dice_white_b_5.png");
        s_oSpriteLibrary.addSprite("dice_white_b_6","./sprites/dice_white_b_6.png");
        s_oSpriteLibrary.addSprite("dice_red_a_1","./sprites/dice_red_a_1.png");
        s_oSpriteLibrary.addSprite("dice_red_a_2","./sprites/dice_red_a_2.png");
        s_oSpriteLibrary.addSprite("dice_red_a_3","./sprites/dice_red_a_3.png");
        s_oSpriteLibrary.addSprite("dice_red_a_4","./sprites/dice_red_a_4.png");
        s_oSpriteLibrary.addSprite("dice_red_a_5","./sprites/dice_red_a_5.png");
        s_oSpriteLibrary.addSprite("dice_red_a_6","./sprites/dice_red_a_6.png");
        s_oSpriteLibrary.addSprite("dice_red_b_1","./sprites/dice_red_b_1.png");
        s_oSpriteLibrary.addSprite("dice_red_b_2","./sprites/dice_red_b_2.png");
        s_oSpriteLibrary.addSprite("dice_red_b_3","./sprites/dice_red_b_3.png");
        s_oSpriteLibrary.addSprite("dice_red_b_4","./sprites/dice_red_b_4.png");
        s_oSpriteLibrary.addSprite("dice_red_b_5","./sprites/dice_red_b_5.png");
        s_oSpriteLibrary.addSprite("dice_red_b_6","./sprites/dice_red_b_6.png");

        
        RESOURCE_TO_LOAD += s_oSpriteLibrary.getNumSprites();
        s_oSpriteLibrary.loadSprites();
    };
    
    this._onImagesLoaded = function(){
        _iCurResource++;
        var iPerc = Math.floor(_iCurResource/RESOURCE_TO_LOAD *100);
        _oPreloader.refreshLoader(iPerc);
        
        if(_iCurResource === RESOURCE_TO_LOAD){
            this._onPreloaderComplete();
        }
    };
    
    this._onAllImagesLoaded = function(){
        
    };
    
    this._onPreloaderComplete = function(){
        _oPreloader.unload();
        
		
        this.gotoMenu();
    };
    
    this.onAllPreloaderImagesLoaded = function(){
        this._loadImages();
    };
    
    this.gotoMenu = function(){
        _oMenu = new CMenu();
        _iState = STATE_MENU;
    }; 

    this.gotoGame = function(){
        _oGame = new CGame(_oData);   						
        _iState = STATE_GAME;
    };
    
    this.gotoSelectPlayers = function(){
       new CSelectPlayers(); 
    };
    
    this.gotoLevelMenu = function(){
       new CLevelMenu();
       _iState = STATE_LEVEL_SELECTION;
    };
    
    this.gotoSelectMode = function(){
       new CSelectMode(); 
    };
    
    this.gotoHelp = function(){
        _oHelp = new CHelp();
        _iState = STATE_HELP;
    };
	
    this.stopUpdate = function(){
        _bUpdate = false;
        createjs.Ticker.paused = true;
        $("#block_game").css("display","block");
        
        if(DISABLE_SOUND_MOBILE === false || s_bMobile === false){
            Howler.mute(true);
        }
        
    };

    this.startUpdate = function(){
        s_iPrevTime = new Date().getTime();
        _bUpdate = true;
        createjs.Ticker.paused = false;
        $("#block_game").css("display","none");
        
        if(DISABLE_SOUND_MOBILE === false || s_bMobile === false){
            if(s_bAudioActive){
                Howler.mute(false);
            }
        }
		
		if (typeof sdk !== 'undefined' && sdk.showBanner !== 'undefined') {
sdk.showBanner();
}
        
    };
    
    this._update = function(event){
        if(_bUpdate === false){
                return;
        }
        var iCurTime = new Date().getTime();
        s_iTimeElaps = iCurTime - s_iPrevTime;
        s_iCntTime += s_iTimeElaps;
        s_iCntFps++;
        s_iPrevTime = iCurTime;
        
        if ( s_iCntTime >= 1000 ){
            s_iCurFps = s_iCntFps;
            s_iCntTime-=1000;
            s_iCntFps = 0;
        }
                
        if(_iState === STATE_GAME){
            _oGame.update();
        }
        
        s_oStage.update(event);

    };
    
    s_oMain = this;
    
    ENABLE_CHECK_ORIENTATION = oData.check_orientation;
    ENABLE_FULLSCREEN = oData.fullscreen;
    MULTIPLIER_SCORE = oData.multiplier_score;
    _oData = oData;
    
    this.initContainer();
}
var s_bMobile;
var s_bAudioActive = true;
var s_iCntTime = 0;
var s_iTimeElaps = 0;
var s_iPrevTime = 0;
var s_iCntFps = 0;
var s_iCurFps = 0;
var s_iLastLevel = 1;
var s_bFullscreen = false;
var s_bStorageAvailable = true;
var s_oDrawLayer;
var s_oStage;
var s_oMain;
var s_oSpriteLibrary;
var s_oCanvas;
var s_aSounds;
