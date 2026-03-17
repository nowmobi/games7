egret_h5.startGame = function() {
    var context = egret.MainContext.instance;
    context.touchContext = new egret.HTML5TouchContext();
    context.deviceContext = new egret.HTML5DeviceContext();
    context.netContext = new egret.HTML5NetContext();
    egret.StageDelegate.getInstance().setDesignSize(960, 1600);
    var stage = new egret.Stage();
    var scaleMode = egret.MainContext.deviceType == egret.MainContext.DEVICE_MOBILE ? egret.StageScaleMode.SHOW_ALL : egret.StageScaleMode.NO_SCALE;
    stage.scaleMode = egret.StageScaleMode.SHOW_ALL;
    stage.frameRate = 30;
    context.stage = stage;
    var rendererType = 0;
    if (rendererType == 1) {
        console.log("Use WebGL mode");
        context.rendererContext = new egret.WebGLRenderer();
    } else {
        context.rendererContext = new egret.HTML5CanvasRenderer();
    }
    egret.MainContext.instance.rendererContext.texture_scale_factor = 1;
    context.run();
    var rootClass;
    if (document_class) {
        rootClass = egret.getDefinitionByName(document_class);
    }
    if (rootClass) {
        var rootContainer = new rootClass();
        if (rootContainer instanceof egret.DisplayObjectContainer) {
            context.stage.addChild(rootContainer);
        } else {
            throw new Error("Document Class must be the subclass to egret.DisplayObjectContainer!");
        }
    } else {
        throw new Error("Document Class is not found！");
    }
    var resizeTimer = null;
    var doResize = function() {
        context.stage.changeSize();
        resizeTimer = null;
    };
    window.onresize = function() {
        if (resizeTimer == null) {
            resizeTimer = setTimeout(doResize, 300);
        }
    };
};