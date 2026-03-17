function CPause(_0x2e3d43) {
    var _0xb9d5b2, _0x135594, _0x4bafe5, _0x3ba903;
    this['init'] = function (_0x59f79a) {
        s_oGame['pause'](!![]), _0x4bafe5 = new createjs['Container'](), _0x3ba903 = _0x59f79a, _0x3ba903['addChild'](_0x4bafe5), _0xb9d5b2 = new createjs['Shape'](), _0xb9d5b2['graphics']['beginFill']('#black')['drawRect'](0x0, 0x0, CANVAS_WIDTH, CANVAS_HEIGHT), _0xb9d5b2['alpha'] = 0.7, _0xb9d5b2['on']('mousedown', this['exitPause']), _0x135594 = new createjs['Text'](TEXT_PAUSE, FONT_SIZE_PAUSE + PRIMARY_FONT, PRIMARY_FONT_COLOR), _0x135594['textBaseli' + 'ne'] = 'alphabetic', _0x135594['textAlign'] = 'center', _0x135594['x'] = CANVAS_WIDTH_HALF, _0x135594['y'] = CANVAS_HEIGHT_HALF + 0xa, _0x4bafe5['addChild'](_0xb9d5b2, _0x135594), _0x135594['alpha'] = 0x1;
    }, this['exitPause'] = function () {
        s_oInterface['closePanel'](), s_oStage['removeChil' + 'd'](_0x4bafe5), s_oGame['pause'](![]);
    }, this['onExit'] = function () {
        _0xb9d5b2['alpha'] = 0x0, _0x135594['alpha'] = 0x0, s_oStage['removeChil' + 'd'](_0x4bafe5), s_oGame['pause'](![]);
    }, this['init'](_0x2e3d43);
}