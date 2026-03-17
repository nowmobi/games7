function CAlertBox (oParentContainer) {
    
    var _oContainer;
    var _oParentContainer;
    var _oAlertBox;
    var _oText;
    var _iYStartContainer;
    var _oParent = this;
    var _bIsHide;
    
    this.init = function(oParentContainer){
        _bIsHide = true;
        _oParentContainer = oParentContainer;
        _oContainer = new createjs.Container();
        _oParentContainer.addChild(_oContainer);
        var oSprite = s_oSpriteLibrary.getSprite("alert_box");
        _oAlertBox = createBitmap(oSprite,oSprite.width,oSprite.height);
        _oAlertBox.regX = (oSprite.width/2)-3;
        _oAlertBox.regY = (oSprite.height/2)-8;
        _oText = new createjs.Text(" ","38px "+PRIMARY_FONT,"#ffffff", );
        var oTitleStroke = new createjs.Text 	
        _oText.lineHeight = 50;
        _oText.textAlign = "center";
        _oText.lineWidth = 450;
        _oText.textBaseline = "alphabetic";
        _oContainer.addChild(_oAlertBox,_oText);
        _oContainer.on("mousedown",this.onMouseDown);
        _oContainer.x = CANVAS_WIDTH/2;
        _iYStartContainer = -oSprite.height/2-10;
        _oContainer.y = _iYStartContainer;
    };
    
    this.show = function(szText){
        _bIsHide = false;
       _oText.text = szText;
       new createjs.Tween.get(_oContainer).to({y: CANVAS_HEIGHT/2},500,createjs.Ease.cubicOut).wait(1600).call(function(){if (!_bIsHide){_oParent.hide();}});
    };
    
    this.hide = function(){
        _bIsHide = true;
        createjs.Tween.removeTweens(_oContainer);
        new createjs.Tween.get(_oContainer).to({y: _iYStartContainer},500,createjs.Ease.cubicIn);
    };
    
    this.onMouseDown = function(){
       if (!_bIsHide){
           _oParent.hide();
       } 
    };
    
    this.init(oParentContainer);
    
}