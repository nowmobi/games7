 // ----------------------------------------------------------------------------------------------
 // DYNAMICALLY CHANGE VIEWPORT FOR SPECIFIC PLATFORM FIX
 // ----------------------------------------------------------------------------------------------
var mvp = document.getElementById('vpr');

if (mvp == null || mvp == undefined) {
    mvp = document.querySelector("meta[name=viewport]");
}

if (mvp == null || mvp == undefined) {
}

mvp.parentNode.removeChild(mvp);

viewport = document.createElement('meta');
viewport.name = 'viewport';

var content = "initial-scale=1.0, maximum-scale=1.01, minimum-scale=1.0, user-scalable=no,width=device-width, minimal-ui";

if (platform.name == "IE Mobile") {
   content = 'initial-scale=0.9, maximum-scale=0.9, minimum-scale=0.9, user-scalable=no,width=device-width,minimal-ui';
} 
// fix for android 4 stock browser
else if (platform.os.family == "Android" && platform.name == "Android Browser" && parseInt(platform.os.version,10) < 5){
    content = 'width=device-width';
}

viewport.content = content;
document.head.appendChild(viewport);

// ----------------------------------------------------------------------------------------------

if (
    (platform.os.family == 'iOS' && parseInt(platform.os.version, 10) >= 8)
    && (platform.name == "Safari")
    && ("standalone" in window.navigator) && !window.navigator.standalone
 ) {
    Phaser.DOM.getOffset = function (element, point) {

            point = point || new Phaser.Point();

            var box = element.getBoundingClientRect();

            var scrollTop = Phaser.DOM.scrollY;
            var scrollLeft = Phaser.DOM.scrollX;
            var clientTop = document.documentElement.clientTop;
            var clientLeft = document.documentElement.clientLeft;

            point.x = box.left + scrollLeft - clientLeft;
            point.y = box.top + scrollTop - clientTop;

            point.x = Math.floor(point.x / 2);
            point.y = Math.floor(point.y / 2);
            return point;
    }
}
Phaser.ScaleManager.prototype.NO_BORDER = 3;

var phaser_update_layout = Phaser.ScaleManager.prototype.updateLayout;
Phaser.ScaleManager.prototype.updateLayout = function (force) {

        if (this.scaleMode == Phaser.ScaleManager.SHOW_ALL) {
            phaser_update_layout.call(this);
            return;
        }

        if (typeof force == 'undefined')
        {
            force = false;
        }
        //window.scrollTo(0, 1);
        if (this.game.device.iPad === false && this.game.device.webApp === false && this.game.device.desktop === false)
        {
            if (this.game.device.android && this.game.device.chrome === false)
            {
                window.scrollTo(0, 1);
            }
            else
            {
                window.scrollTo(0, 0);
            }
        }

        if (global.forceWidth == true || (global.isDesktop == true && global.astrid == true && global.landscape == false)){
            this._iterations--;
        }

        if (    force 
           // || (global.landscape && global.deviceHeight > this._startHeight) 
            //|| (!global.landscape && global.deviceWidth > this._startWidth) 
            || this._iterations < 0)
        {

            if (this.incorrectOrientation === true)
            {
                //this.setMaximum();
            }
            else if (!this.isFullScreen)
            {
                if (this.scaleMode == Phaser.ScaleManager.EXACT_FIT)
                {
                    this.setExactFit();
                }
                else if (this.scaleMode == Phaser.ScaleManager.SHOW_ALL)
                {
                    this.setShowAll();
                    // trace("Scalemode SHOW_ALL");
                    this.game.canvas.style.width = 500 + "px";
                    this.game.canvas.style.height = 500 + "px";
                }
                else if(this.scaleMode == Phaser.ScaleManager.NO_BORDER)
                {
                    this.setNoBorder();//Don't call setSize
                    clearInterval(this._check);
                    this._check = null;
                    return;
                }
            }
            else
            {
                if (this.fullScreenScaleMode == Phaser.ScaleManager.EXACT_FIT)
                {
                    this.setExactFit();
                }
                else if (this.fullScreenScaleMode == Phaser.ScaleManager.SHOW_ALL)
                {
                    this.setShowAll();
                }
                else if(this.scaleMode == Phaser.ScaleManager.NO_BORDER)
                {
                    this.setNoBorder();//Don't call setSize
                    clearInterval(this._check);
                    this._check = null;
                    return;
                }
            }
            this.setSize();
            clearInterval(this._check);
            this._check = null;
        }

    }

Phaser.ScaleManager.prototype.setScreenSize = function (force) {
    game.scale.updateLayout(force);   
}


Phaser.ScaleManager.prototype.setNoBorder = function(){
        this.setShowAll();
        var ow = parseInt(this.width,10);
        var oh = parseInt(this.height,10);
        var r = Math.max(global.deviceWidth/ow,global.deviceHeight/oh);
        this.width = ow*r;
        this.height = oh*r;
        this.setSize2();
}
Phaser.ScaleManager.prototype.setSize2 = function(){
        this.game.canvas.style.width = this.width + 'px';
        this.game.canvas.style.height = this.height + 'px';
        // trace("setsize2", this.game.canvas.style.width, this.game.canvas.style.height);
        //this.game.canvas.style.width = 2666 + 'px';
        // this.game.canvas.style.height = 777 + 'px';

        this.game.input.scale.setTo(this.game.width / this.width, this.game.height / this.height);

        if (this.pageAlignHorizontally)
        {
            if (this.incorrectOrientation === false)
            {
                this.margin.x = Math.round((global.deviceWidth - this.width) / 2);

                if (global.astrid) {
                     if (
                        (platform.os.family == 'iOS' && parseInt(platform.os.version, 10) >= 8)
                        && (platform.name == "Safari")
                        && ("standalone" in window.navigator) && !window.navigator.standalone
                     ) {
                        this.margin.x = Math.round(this.margin.x * 2);
                    }
                    this.game.canvas.style.marginLeft = this.margin.x + 'px';


               }

            }
            else
            {
                this.margin.x = 0;
                if (global.isDesktop && global.astrid) {
                    this.game.canvas.style.marginLeft = '0px';
                }

            }
        }
 
        if (this.pageAlignVertically)
        {
            if (this.incorrectOrientation === false)
            {

                this.margin.y = Math.round((global.deviceHeight - this.height) / 2);

                 if (
                        (platform.os.family == 'iOS' && parseInt(platform.os.version, 10) >= 8)
                        && (platform.name == "Safari")
                        && ("standalone" in window.navigator) && !window.navigator.standalone
                 ) {
                    this.margin.y = Math.round(this.margin.y * 2);
                }
                this.game.canvas.style.marginTop = this.margin.y + 'px';
                
            }
            else
            {
                this.margin.y = 0;
                this.game.canvas.style.marginTop = '0px';
            }
             // this.game.canvas.style.marginTop = '0px';
        }


        if (global.forceWidth) {
            this.margin.x = 0;
                this.game.canvas.style.marginLeft = '0px';
                 this.margin.y = 0;
                this.game.canvas.style.marginTop = '0px';

        }

        Phaser.Canvas.getOffset(this.game.canvas, this.game.stage.offset);
        this.aspectRatio = this.width / this.height;
        this.scaleFactor.x = this.game.width / this.width;
        this.scaleFactor.y = this.game.height / this.height;
        this.scaleFactorInversed.x = this.width / this.game.width;
        this.scaleFactorInversed.y = this.height / this.game.height;
        //this.hasResized.dispatch(this.width, this.height);


        var device =  global.phaserDevice;
        if(!(global.isDesktop && global.simulatedMobile) == true){
            this.checkOrientationState();
        }


        device = null;

        global.tempCanvasMarginLeft = this.game.canvas.style.marginLeft;
        global.tempCanvasMarginTop = this.game.canvas.style.marginTop;
}


window.addEventListener("load", function() {
    function onTouchPreventDefault(event) { event.preventDefault(); };
        document.addEventListener("touchmove", onTouchPreventDefault, false);
        document.addEventListener("touchstart", onTouchPreventDefault, false);
        
    var mvp = document.getElementById('vpr');
    
    if (mvp == null || mvp == undefined) {
        mvp = document.querySelector("meta[name=viewport]");
    }
    
    if (mvp == null || mvp == undefined) {
        return;
    }
    
    if (platform.name == "IE Mobile" || (platform.name == "Chrome" && platform.os == "Android")) {
        mvp.setAttribute('content','initial-scale=0.9, maximum-scale=0.9, minimum-scale=0.9, user-scalable=no,width=device-width,minimal-ui');
    } else {
        //mvp.setAttribute('content','initial-scale=1.0, maximum-scale=1.01, minimum-scale=1.0, user-scalable=no,width=device-width,minimal-ui');
    }
    
}, false);
BasicGame = {
    score: 0,
    music: null,
    orientated: false
};

window.helper = {}
helper.init = function() {
    //global.printObj(platform)
    if (platform.os.family == "Windows Phone" && platform.name == "IE Mobile") {
        helper.phaserMode = Phaser.CANVAS;
    } else {
        helper.phaserMode = Phaser.AUTO;
    }

    var ua = navigator.userAgent;
    var bAndroid = boolean = (/Android/.test(ua));
    var bChrome= boolean = (/Chrome/.test(ua));
    var bXiaomi = boolean = (/XiaoMi/.test(ua));
    // alert(ua + bAndroid + bXiaomi);
    if ((bAndroid && !bChrome) || (bXiaomi && bAndroid) ) {
        helper.phaserMode = Phaser.CANVAS;
    } else {
        helper.phaserMode = Phaser.AUTO;
    }
}

helper.preCreatePhaser = function() {
        global.deviceWidth = window.innerWidth;
        global.deviceHeight = window.innerHeight;
        deviceSizeCheckIntervalID = setInterval(deviceSizeCheck, 1);

        BasicGame.logicWidth = global.logicWidth;
        BasicGame.logicHeight = global.logicHeight;

        global.processScaling();
        
        window.game = null;
        window.game = new Phaser.Game(BasicGame.gameWidth,BasicGame.gameHeight, helper.phaserMode, window.brimCanvasElement);

        if (global.forceWidth || (global.astrid && global.landscape == false && global.isDesktop)) {
            window.addEventListener("resize", auto_resize_area, false);
            auto_resize_area();
            auto_resize_area_id = setInterval(initOnce, 3000);
            setInterval(auto_resize_area, 1000);
        } else if (global.simulatedMobile == true) {
            window.addEventListener("resize", init_refresh_page, false);
        } 

        if (global.astrid == true) {
            // if responsive mode
            if (global.isDesktop && global.landscape == true){
                window.addEventListener("resize", resizeResponsive, false); 
            } else if (global.isDesktop == false) {
                window.addEventListener("resize", init_refresh_page, false);
            }
            document.getElementById('game').style.width =   (window.innerWidth-2) + 'px';
            document.getElementById('game').style.height =  (window.innerHeight-2) + 'px';
            // trace("preCreatePhaser, astrid true", document.getElementById("game").style.width, document.getElementById("game").style.height);
            auto_refresh_page_id = setInterval(auto_refresh_page, 1000);
            if (global.isDesktop == true)
                document.getElementById('game').style.overflow = "hidden";
        }
        
        //setInterval(auto_resize_area, 1000);

        //window.addEventListener("resize", auto_resize_area, false);
        
        global.orientationKampret = window.orientation;

        //setInterval(auto_resize_area, 1000);
        //setInterval(orientationCheck, 1000);
        //window.addEventListener('orientationchange', orientationchange);
        
        window.addEventListener('orientationchange', orientationchange);
        window.addEventListener("resize", orientationchange, false);
        // (optional) Android doesn't always fire orientationChange on 180 degree turns
        setInterval(orientationchange, 1000);
        setInterval(forceScroll, 20);

        window.createPhaser();
}

// ====================================================================================================
// init var and functions right after window.onLoad event
helper.initOnLoad = function() {
    var scream;
    var brim;
    
    //IS ALREAD LOADED
    var firstTime = true;
    
    //APPEND CANVAS TO THIS ELEMENT
    var brimCanvasElement = 'game';
    
    //SET BASE SIZE
    var width = 640;
    var height = 960;

    
        if(firstTime)
        {
            //alert("flag b")
            //DO ONLY ONCE AT STARTUP
            firstTime = false;
            //SET THE RIGHT DOM ELEMENT
            document.querySelector('#game').style.display = 'block';
            window.brimCanvasElement = 'game';
            //CREATE PHASER CANVAS
            helper.preCreatePhaser();
        }
}

// ====================================================================================================
// Generic vars and functions definitions

var temp_scroll_x = 1;
function forceScroll() {
    if (global.isDesktop || game.canvas == null || game.canvas == undefined || document.getElementById('game') == undefined || document.getElementById('game') == null) {
        return;
    }
    
    //window.scrollTo(8 , 8);
    //window.scrollTo(temp_scroll_x, temp_scroll_x);
    //document.getElementById('game').style.marginTop = (parseInt(document.getElementById('game').style.marginTop, 10)+temp_scroll_x) + 'px';
    //document.getElementById('orientation').style.display = 'block';
    if (temp_scroll_x == 1) {
        temp_scroll_x = -1;
        document.getElementById('orientation').innerHTML = '.';
        //document.getElementById('game').style.fontSize = "xx-small";
        //game.scale.setupScale(0.99, 0.99)
        //document.getElementById('game').style.width =   (window.innerWidth+10) + 'px';
        //document.getElementById('game').style.height =  (window.innerHeight+10) + 'px';
    } else {
        temp_scroll_x = 1;
        document.getElementById('orientation').innerHTML = '..';
        //document.getElementById('game').style.fontSize = "xx-large";
        //game.scale.setupScale(0.98, 0.98)
        //document.getElementById('game').style.width =   (window.innerWidth-10) + 'px';
    //document.getElementById('game').style.height =  (window.innerHeight-10) + 'px';
    }
    //window.scrollTo(temp_scroll_x, temp_scroll_x);
    //game.canvas.style.marginTop = (parseInt(game.canvas.style.marginTop, 10)+temp_scroll_x) + "px"
    //var gl = game.canvas.getContext("experimental-webgl");
    //gl.clearColor(1.0, 0.0, 0.0, 1.0);
    
    //orientation
    
    //game.scale.setShowAll();
    //game.scale.refresh();
}

helper.constraintResponsive = function() {
    if (window.deviceSizeCheckIntervalID)
        clearInterval(window.deviceSizeCheckIntervalID);

    if (window.innerWidth < 52) {
        global.deviceWidth = 52
    }
    if (window.innerHeight < 35) {
        global.deviceHeight = 35
    }

    global.scaleStage();
    window.deviceSizeCheckIntervalID = setInterval(window.deviceSizeCheck, 1);
}
function resizeResponsive() {
    if (!game)
        return;

    if (!game.scale)
        return;

    if (!global.scaleStage)
        return;

    // alert("resizeResponsive");
    helper.constraintResponsive();

    document.getElementById('game').style.width =   (window.innerWidth-1) + 'px';
    document.getElementById('game').style.height =  (window.innerHeight-1) + 'px';
    // trace("resizeResponsive", document.getElementById("game").style.width, document.getElementById("game").style.height);

    var curState = game.state.getCurrentState()
    if (curState.onResize){
        curState.onResize();
    }
    deviceSizeCheckIntervalID = setInterval(deviceSizeCheck, 1);
}

function auto_resize_area() {
    var default_aspect_ratio = true;
            
    // PLEASE ENTER YOUR DEFAULT GAME'S SIZE
    //var original_width = window.innerWidth; var original_height = window.innerHeight;
    var original_width = game.width; var original_height = game.height;

    //var original_width = window.innerWidth; var original_height = window.innerHeight;
    

    var optimal_aspect_ratio = original_width / original_height; 
    var device_aspect_ratio = window.innerWidth  / window.innerHeight;
    var optimal_width = window.innerWidth; var optimal_height = window.innerHeight;
    
    if (default_aspect_ratio == true) {
        if (device_aspect_ratio > optimal_aspect_ratio) 
            optimal_width = window.innerHeight * optimal_aspect_ratio;
         else 
            optimal_height = window.innerWidth / optimal_aspect_ratio;
    } else {
        optimal_width = window.innerHeight / optimal_aspect_ratio;
        optimal_height = window.innerWidth * optimal_aspect_ratio;
    }

    if (global.isDesktop) {
        document.getElementById('game').style.width =   (window.innerWidth-1) + 'px';
        document.getElementById('game').style.height =  (window.innerHeight-1) + 'px';
        // trace("auto_resize_area 1", document.getElementById("game").style.width, document.getElementById("game").style.height);
    } else {
        document.getElementById('game').style.width =   (window.innerWidth-2) + 'px';
        document.getElementById('game').style.height =  (window.innerHeight+2) + 'px';
        // trace("auto_resize_area 2", document.getElementById("game").style.width, document.getElementById("game").style.height);
    }

    //document.documentElement.requestFullscreen();
    //document.getElementById('main-game').style.width =   optimal_width + 'px';
    //document.getElementById('main-game').style.height =  optimal_height + 'px';
    //window.scrollTo(0, 0);
    //alert("a")
    if (game.canvas) {
        // trace("auto_resize_area change canvas", optimal_width,optimal_height);
        game.canvas.style.width =   optimal_width + 'px';
        game.canvas.style.height =  optimal_height + 'px';
        document.getElementById('orientation').style.width = window.innerWidth + 'px';
        document.getElementById('orientation').style.height = window.innerHeight + 'px';
        game.canvas.style.marginLeft =    'auto';
        game.canvas.style.marginRight =    'auto';
    }

     //game.width = optimal_width;
     //game.height = optimal_height;
    // game.stage.bounds.width = width;
    // game.stage.bounds.height = height;
        
     if (game.renderType === Phaser.WEBGL)
     {
        //game.renderer.resize(optimal_width, optimal_height);
     }

    init_refresh_page();
    
}
window.isReloading = false;

var oldInnerWidth = window.innerWidth;
var oldInnerHeight = window.innerHeight;
global.hasOrientationChanged = false;

var auto_refresh_page_id = -1;
global.forceReloadFlag = false;
function init_refresh_page () {
    // body...
    auto_refresh_page_id = setTimeout(auto_refresh_page, 1500);
}

function get_current_ori () {
    var currentOrientation = ""

    if (window.innerWidth > window.innerHeight) {
        return "landscape"
    } else {
        return "portrait"
    }
}

function auto_refresh_page() {
    if (global.isDesktop == true)
        return;
    
    var newInnerWidth = window.innerWidth;
    var newInnerHeight = window.innerHeight;
    var dw = Math.abs(oldInnerWidth - newInnerWidth);
    var dh = Math.abs(oldInnerHeight - newInnerHeight);

    global.dw = dw;
    global.dh = dh;
    //if (window.orientation == global.orientationKampret)
    //if ((window.orientation == 0 && global.landscape == true) || (window.orientation == Math.abs(90) && global.landscape == false))
    //if (global.hasOrientationChanged == false) 

    var currentOrientation = get_current_ori();

    // alert("cur " + currentOrientation + "; landscape " + global.landscape +"; isDesktop " + global.isDesktop 
    //      + "; force " + global.forceReloadFlag + "; dw/dh " + dw + "|" + dh
    //  )
    if ((
        (((currentOrientation == "portrait" && global.landscape == false) || (currentOrientation == "landscape" && global.landscape == true))
            )
        && (global.hasOrientationChanged)
    ) || (

        (((currentOrientation == "portrait" && global.landscape == false) || (currentOrientation == "landscape" && global.landscape == true))
            ) &&
        (global.forceReloadFlag == true)
      )
    )
    {
        if (global.forceWidth == false && global.forceReloadFlag == true && !window.isReloading) {
            // setTimeout(function() {location.reload();}, 1000);
            window.isReloading = true;
            location.reload();
        } else {
            document.getElementById('orientation').style.display = 'none';
        }
    }


    if ((global.hasOrientationChanged && currentOrientation == "landscape" && global.landscape == true) 
        || (global.hasOrientationChanged && currentOrientation == "portrait" && global.landscape == false)
    ) {
        global.hasOrientationChanged = false;
    }

    if ((currentOrientation == "portrait" && global.landscape == false) || (currentOrientation == "landscape" && global.landscape == true)) {
        oldInnerWidth = newInnerWidth;
        oldInnerHeight = newInnerHeight

    }
    
    if ((currentOrientation == "portrait" && global.landscape == true) || (currentOrientation == "landscape" && global.landscape == false)) {
        document.getElementById('orientation').style.display = 'block';

    }
}

function initOnce() {
    document.body.style.backgroundImage="url('assets/tile.jpg')";

    auto_resize_area();
    clearInterval(auto_resize_area_id)
}

var previousOrientation = get_current_ori();
function orientationchange() {
    var curOri = get_current_ori();
    if(curOri !== previousOrientation){
        previousOrientation = curOri;
        global.hasOrientationChanged = true;
        // alert("1:"+game.canvas.width + "," +game.canvas.height);
    }
}


function deviceSizeCheck() {
 //var t = get_current_ori();
 //if ( (t == "portrait" && global.landscape == false) || (t == "landscape" && global.landscape == true)) {
  global.deviceWidth = window.innerWidth;
     global.deviceHeight = window.innerHeight;

        // alert(game.canvas.width + "," +game.canvas.height);
    if (global.landscape == true && game){
      if (game.canvas) {
         //game.canvas.style.marginLeft =  global.tempCanvasMarginLeft;
         //game.canvas.style.marginTop =  global.tempCanvasMarginTop;
    }
  }
}