function CEndPanel(oSpriteBg,iWinner){
    
    var _oBg;
    var _oGroup;
    
    var _oMsgTextBack;
    var _oMsgText;
    var _oScoreTextBack;
    var _oScoreText;
    var _iScore;
    var _oButRestart;
    var _oButHome;
    var _oRestartList;
    var _oHomeList;
    var _iWinner;
    var _oEndSound;
    
    this._init = function(oSpriteBg,iWinner){
        _iWinner = iWinner;
        var oShape = new createjs.Shape();
        oShape.graphics.beginFill("#000").drawRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
        oShape.alpha = 0.5;
        oShape.on("mousedown",this.onMouseDown,this);
        
        _oBg = createBitmap(oSpriteBg);
        var oBgInfo = _oBg.getBounds();
        _oBg.regX = oBgInfo.width/2;
        _oBg.regY = oBgInfo.height/2;
        _oBg.x = CANVAS_WIDTH/2;
        _oBg.y = CANVAS_HEIGHT/2;

        _oMsgText = new createjs.Text(""," 35px "+PRIMARY_FONT, "#ffffff");
        _oMsgText.x = CANVAS_WIDTH/2;
        _oMsgText.y = (CANVAS_HEIGHT/2)-80;
        _oMsgText.lineHeight = 50;
        //_oMsgText.y = (CANVAS_HEIGHT/2)-138;
        
        _oMsgText.textAlign = "center";
        _oMsgText.textBaseline = "alphabetic";
        _oMsgText.lineWidth = 530;
        
        _oScoreText = new createjs.Text(""," 30px "+PRIMARY_FONT, "#ffffff");
        _oScoreText.x = CANVAS_WIDTH/2;
        _oScoreText.y = (CANVAS_HEIGHT/2+15);
        _oScoreText.textAlign = "center";
        _oScoreText.textBaseline = "alphabetic";
        _oScoreText.lineWidth = 530;
        _oScoreText.lineHeight = 50;
        

        _oGroup = new createjs.Container();
        _oGroup.alpha = 0;
        _oGroup.visible=false;
        
        
        _oGroup.addChild(oShape,_oBg,_oScoreText,_oMsgText);

        s_oStage.addChild(_oGroup);
        var oSprite = s_oSpriteLibrary.getSprite("but_restart");
        _oButRestart = new CGfxButton(CANVAS_WIDTH/2+100,CANVAS_HEIGHT/2+110,oSprite,_oGroup);
        
        oSprite = s_oSpriteLibrary.getSprite("but_home");
        _oButHome = new CGfxButton(CANVAS_WIDTH/2-100,CANVAS_HEIGHT/2+110,oSprite,_oGroup);
    };
   
    
    this.unload = function(){
        
    };
    
    this.onMouseDown = function(){
        
    };
    
    this._initListener = function(){
        _oButHome.addEventListener(ON_MOUSE_DOWN,this._onExit,this);
        _oButRestart.addEventListener(ON_MOUSE_DOWN,this._onRestart, this);
    };
    
    this.show = function(iScore,iWinner){
        if (iWinner===0||s_b2Players){
	_oEndSound = playSound("win",1,false);
        }else{
              _oEndSound =  playSound("game_over",1,false);
        }
        _iScore = iScore;
        var iPlayerWin = iWinner + 1;
        
        if (iWinner===0){
            _oMsgText.text = TEXT_GAMEOVER;
            
            //_oMsgText.y = (CANVAS_HEIGHT/2)-30;
            //_oMsgTextBack.y = (CANVAS_HEIGHT/2)-28;
        }else{
            _iScore = 0;
            _oMsgText.text = TEXT_LOSE+iPlayerWin+TEXT_LOSE2;
        }
        
        if (s_b2Players===true){
            _oMsgText.text = TEXT_WIN_2PLAYERS+iPlayerWin+TEXT_WIN_2PLAYERS_2;
        }else{
            _oScoreText.text = TEXT_SCORE +": "+iScore;
        }
        
        _oGroup.visible = true;
        
        var oParent = this;
        createjs.Tween.get(_oGroup).to({alpha:1 }, 500).call(function() {oParent._initListener();});
        ;
        $(s_oMain).trigger("save_score",_iScore);
        $(s_oMain).trigger("show_interlevel_ad");
        $(s_oMain).trigger("end_session");
    };
    
    this._onExit = function(){
        _oEndSound.stop();
        var szImg = "200x200.jpg";
        var szTitle = "Congratulations!";
        var szMsg = "You collected <strong>" + _iScore + " points</strong>!<br><br>Share your score with your friends!";
        var szMsgShare = "My score is " + _iScore + " points! Can you do better?";        
        $(s_oMain).trigger("share_event",_iScore, szImg, szTitle, szMsg, szMsgShare);
        
        _oGroup.off("mousedown",this._onExit);
        s_oStage.removeChild(_oGroup);
        
        
        
        s_oGame.unload();
        s_oMain.gotoMenu();
    };
    
    this._onRestart = function(){
         $(s_oMain).trigger("show_interlevel_ad");
        _oEndSound.stop();
       s_oGame.unload();
       s_oMain.gotoGame();
       s_oStage.removeChild(_oGroup);
       
    };
    
    this._init(oSpriteBg,iWinner);
    
    return this;
}
