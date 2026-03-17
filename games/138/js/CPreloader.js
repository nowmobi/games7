function CPreloader() {
    var _0x3fc2aa, _0x3b108d, _0x8e643d, _0x2d8e01, _0x4459aa, _0x1119ec, _0x171e62;
    this['_init'] = function () {
        s_oSpriteLibrary['init'](this['_onImagesL' + 'oaded'], this['_onAllImag' + 'esLoaded'], this), s_oSpriteLibrary['addSprite']('bg_preload' + 'er', './sprites/' + 'bg_preload' + 'er.jpg'), s_oSpriteLibrary['addSprite']('progress_b' + 'ar', './sprites/' + 'progress_b' + 'ar.png'), s_oSpriteLibrary['loadSprite' + 's'](), _0x171e62 = new createjs['Container'](), s_oStage['addChild'](_0x171e62);
    }, this['unload'] = function () {
        _0x171e62['removeAllC' + 'hildren']();
    }, this['hide'] = function () {
        var _0x12ede0 = this;
        setTimeout(function () {
            createjs['Tween']['get'](_0x1119ec)['to']({ 'alpha': 0x1 }, 0x1f4)['call'](function () {
                _0x12ede0['unload'](), s_oMain['gotoMenu']();
            });
        }, 0x3e8);
    }, this['_onImagesL' + 'oaded'] = function () {
    }, this['_onAllImag' + 'esLoaded'] = function () {
        this['attachSpri' + 'tes'](), s_oMain['preloaderR' + 'eady']();
    }, this['attachSpri' + 'tes'] = function () {
        var _0x8c4c58 = createBitmap(s_oSpriteLibrary['getSprite']('bg_preload' + 'er'));
        _0x171e62['addChild'](_0x8c4c58);
        var _0x504253 = s_oSpriteLibrary['getSprite']('progress_b' + 'ar');
        _0x2d8e01 = createBitmap(_0x504253), _0x2d8e01['x'] = CANVAS_WIDTH_HALF - _0x504253['width'] * 0.5, _0x2d8e01['y'] = CANVAS_HEIGHT - 0x6e, _0x171e62['addChild'](_0x2d8e01), _0x3fc2aa = _0x504253['width'], _0x3b108d = _0x504253['height'], _0x4459aa = new createjs['Shape'](), _0x4459aa['graphics']['beginFill']('rgba(255,2' + '55,255,1)')['drawRect'](_0x2d8e01['x'], _0x2d8e01['y'], 0x1, _0x3b108d), _0x171e62['addChild'](_0x4459aa), _0x2d8e01['mask'] = _0x4459aa, _0x8e643d = new createjs['Text']('', '30px\x20' + PRIMARY_FONT, THIRD_FONT_COLOR), _0x8e643d['x'] = CANVAS_WIDTH_HALF, _0x8e643d['y'] = CANVAS_HEIGHT - 0x6e, _0x8e643d['textBaseli' + 'ne'] = 'alphabetic', _0x8e643d['textAlign'] = 'center', _0x171e62['addChild'](_0x8e643d), _0x1119ec = new createjs['Shape'](), _0x1119ec['graphics']['beginFill']('black')['drawRect'](0x0, 0x0, CANVAS_WIDTH, CANVAS_HEIGHT), _0x1119ec['alpha'] = 0x0, _0x171e62['addChild'](_0x1119ec);
    }, this['refreshLoa' + 'der'] = function (_0xb036c5) {
        _0x8e643d['text'] = _0xb036c5 + '%', _0x4459aa['graphics']['clear']();
        var _0xf7ddd6 = Math['floor'](_0xb036c5 * _0x3fc2aa / 0x64);
        _0x4459aa['graphics']['beginFill']('rgba(255,2' + '55,255,0.0' + '1)')['drawRect'](_0x2d8e01['x'], _0x2d8e01['y'], _0xf7ddd6, _0x3b108d);
    }, this['_init']();
}