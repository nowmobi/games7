function CHelpPanel() {
    var _0xb9f372, _0x5bec6c, _0x152844, _0x271bc9, _0x4eef7b, _0x28443b, _0x3b66ff, _0x441d77, _0x51ea5a;
    this['_init'] = function () {
        var _0x2cbf70 = CANVAS_HEIGHT_HALF - 0x64, _0x583c2d = CANVAS_HEIGHT_HALF - 0x19, _0xeda8bb = CANVAS_HEIGHT_HALF + 0x32, _0x284754 = s_oSpriteLibrary['getSprite']('bg_help');
        _0x28443b = createBitmap(_0x284754), _0x28443b['x'] = CANVAS_WIDTH_HALF, _0x28443b['y'] = CANVAS_HEIGHT_HALF, _0x28443b['regX'] = _0x284754['width'] * 0.5, _0x28443b['regY'] = _0x284754['height'] * 0.5, _0x271bc9 = new createjs['Shape'](), _0x271bc9['graphics']['beginFill']('black')['drawRect'](0x0, 0x0, CANVAS_WIDTH, CANVAS_HEIGHT), _0x271bc9['alpha'] = 0.8, _0x271bc9['on']('mousedown', function () {
        }), s_oStage['addChild'](_0x271bc9), _0x3b66ff = new createjs['Container'](), _0x3b66ff['addChild'](_0x28443b), _0x3b66ff['y'] = CANVAS_HEIGHT, s_oStage['addChild'](_0x3b66ff), _0xb9f372 = new createjs['Text'](TEXT_HELP1, FONT_SIZE_HELP_TEXT + PRIMARY_FONT, PRIMARY_FONT_COLOR), _0xb9f372['y'] = _0x2cbf70, _0x5bec6c = new createjs['Text'](TEXT_HELP2, FONT_SIZE_HELP_TEXT + PRIMARY_FONT, PRIMARY_FONT_COLOR), _0x5bec6c['y'] = _0x583c2d, _0x152844 = new createjs['Text'](TEXT_HELP3, FONT_SIZE_HELP_TEXT + PRIMARY_FONT, PRIMARY_FONT_COLOR), _0x152844['y'] = _0xeda8bb, _0xb9f372['x'] = _0x5bec6c['x'] = _0x152844['x'] = CANVAS_WIDTH_HALF, _0xb9f372['textAlign'] = _0x5bec6c['textAlign'] = _0x152844['textAlign'] = 'center', _0xb9f372['textBaseli' + 'ne'] = _0x5bec6c['textBaseli' + 'ne'] = _0x152844['textBaseli' + 'ne'] = 'alphabetic', _0xb9f372['lineHeight'] = _0x5bec6c['lineHeight'] = _0x152844['lineHeight'] = 0x1e, _0xb9f372['lineWidth'] = _0x5bec6c['lineWidth'] = _0x152844['lineWidth'] = 0x208, _0x3b66ff['addChild'](_0xb9f372, _0x5bec6c, _0x152844);
        var _0x5188d9 = s_oSpriteLibrary['getSprite']('but_contin' + 'ue');
        _0x51ea5a = {
            'x': CANVAS_WIDTH_HALF,
            'y': CANVAS_HEIGHT_HALF + 0xb4
        }, _0x441d77 = new CGfxButton(_0x51ea5a['x'], _0x51ea5a['y'], _0x5188d9, _0x3b66ff), _0x441d77['addEventLi' + 'stener'](ON_MOUSE_UP, this['_onExitHel' + 'p'], this), _0x4eef7b = new createjs['Shape'](), _0x4eef7b['graphics']['beginFill']('black')['drawRect'](0x0, 0x0, CANVAS_WIDTH, CANVAS_HEIGHT), s_oStage['addChild'](_0x4eef7b), new createjs['Tween']['get'](_0x3b66ff)['to']({ 'y': 0x0 }, 0x3e8, createjs['Ease']['backOut']), createjs['Tween']['get'](_0x4eef7b)['to']({ 'alpha': 0x0 }, 0x3e8)['call'](function () {
            _0x4eef7b['visible'] = ![];
        });
    }, this['unload'] = function () {
        createjs['Tween']['get'](_0x271bc9)['to']({ 'alpha': 0x0 }, 0x1f4)['call'](function () {
            s_oStage['removeChil' + 'd'](_0x271bc9);
        }), createjs['Tween']['get'](_0x3b66ff)['to']({ 'y': CANVAS_HEIGHT }, 0x190, createjs['Ease']['backIn'])['call'](function () {
            s_oStage['removeChil' + 'd'](_0x3b66ff), _0x441d77['unload']();
            var _0x30e36c = this;
            _0x3b66ff['off']('pressup', function () {
                _0x30e36c['_onExitHel' + 'p']();
            });
        });
    }, this['_onExitHel' + 'p'] = function () {
        this['unload'](), setTimeout(s_oGame['_onExitHel' + 'p'], 0xc8);
    }, this['_init']();
}