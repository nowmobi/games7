function CAreYouSurePanel() {
    var _0x88e5a9, _0xfea4b3, _0x55a2c9, _0x474ec4, _0x33aaa7, _0x57160f;
    this['_init'] = function () {
        _0x55a2c9 = new createjs['Shape'](), _0x55a2c9['graphics']['beginFill']('black')['drawRect'](0x0, 0x0, CANVAS_WIDTH, CANVAS_HEIGHT), _0x55a2c9['alpha'] = 0.5, _0x55a2c9['on']('mousedown', function () {
        }), s_oStage['addChild'](_0x55a2c9), new createjs['Tween']['get'](_0x55a2c9)['to']({ 'alpha': 0.7 }, 0x1f4), _0x474ec4 = new createjs['Container'](), s_oStage['addChild'](_0x474ec4);
        var _0x13d1da = s_oSpriteLibrary['getSprite']('bg_help'), _0xdad006 = createBitmap(_0x13d1da);
        _0xdad006['regX'] = _0x13d1da['width'] * 0.5, _0xdad006['regY'] = _0x13d1da['height'] * 0.5, _0xdad006['x'] = CANVAS_WIDTH_HALF, _0xdad006['y'] = CANVAS_HEIGHT_HALF, _0x474ec4['addChild'](_0xdad006), _0x474ec4['y'] = CANVAS_HEIGHT + _0x13d1da['height'] * 0.5, _0x57160f = {
            'x': _0x474ec4['x'],
            'y': _0x474ec4['y']
        }, new createjs['Tween']['get'](_0x474ec4)['to']({ 'y': 0x0 }, 0x3e8, createjs['Ease']['backOut']);
        var _0x45b751 = new createjs['Text'](TEXT_ARE_SURE, FONT_SIZE_ARE_YOU_SURE + PRIMARY_FONT, PRIMARY_FONT_COLOR);
        _0x45b751['x'] = CANVAS_WIDTH_HALF, _0x45b751['y'] = CANVAS_HEIGHT_HALF - 0x64, _0x45b751['textAlign'] = 'center', _0x45b751['textBaseli' + 'ne'] = 'middle', _0x45b751['lineWidth'] = 0x1f4, _0x45b751['lineHeight'] = 0x2d, _0x474ec4['addChild'](_0x45b751);
        var _0x564468 = 0xb4, _0x17ea5b = CANVAS_HEIGHT_HALF + 0x5a;
        _0x88e5a9 = new CGfxButton(CANVAS_WIDTH_HALF + _0x564468, _0x17ea5b, s_oSpriteLibrary['getSprite']('but_yes'), _0x474ec4), _0x88e5a9['addEventLi' + 'stener'](ON_MOUSE_UP, this['_onButYes'], this), _0xfea4b3 = new CGfxButton(CANVAS_WIDTH_HALF - _0x564468, _0x17ea5b, s_oSpriteLibrary['getSprite']('but_no'), _0x474ec4), _0xfea4b3['addEventLi' + 'stener'](ON_MOUSE_UP, this['_onButNo'], this), s_oGame['pause'](!![]);
    }, this['_onButYes'] = function () {
        new createjs['Tween']['get'](_0x55a2c9)['to']({ 'alpha': 0x0 }, 0x1f4), new createjs['Tween']['get'](_0x474ec4)['to']({ 'y': _0x57160f['y'] }, 0x190, createjs['Ease']['backIn'])['call'](function () {
            _0x33aaa7['unload'](), s_oGame['onExit']();
        });
    }, this['_onButNo'] = function () {
        s_oInterface['closePanel'](), new createjs['Tween']['get'](_0x55a2c9)['to']({ 'alpha': 0x0 }, 0x1f4), new createjs['Tween']['get'](_0x474ec4)['to']({ 'y': _0x57160f['y'] }, 0x190, createjs['Ease']['backIn'])['call'](function () {
            _0x33aaa7['unload']();
        }), s_oGame['pause'](![]);
    }, this['unload'] = function () {
        _0xfea4b3['unload'](), _0x88e5a9['unload'](), s_oStage['removeChil' + 'd'](_0x55a2c9), s_oStage['removeChil' + 'd'](_0x474ec4), _0x55a2c9['off']('mousedown', function () {
        });
    }, _0x33aaa7 = this, this['_init']();
}