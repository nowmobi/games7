function CLosePanel(_0x4a0f1d, _0x1ffe7d) {
    var _0x2cef38, _0xe202ba, _0x32ed89, _0x5a86a3, _0x191043, _0x51fba6, _0x52ab1f, _0x3553f8, _0x5974a1, _0x2a423a = _0x4a0f1d, _0xc16a10;
    return this['_init'] = function () {
        var _0x40595d = s_oSpriteLibrary['getSprite']('bg_help');
        _0xc16a10 = _0x1ffe7d, $(s_oMain)['trigger']('save_score', _0xc16a10), _0x3553f8 = new createjs['Shape'](), _0x3553f8['graphics']['beginFill']('black')['drawRect'](0x0, 0x0, CANVAS_WIDTH, CANVAS_HEIGHT), _0x3553f8['alpha'] = 0.01, _0x191043 = new createjs['Container'](), _0x191043['alpha'] = 0x1, _0x191043['visible'] = ![], _0x2cef38 = new createjs['Container'](), _0x2cef38['y'] = CANVAS_HEIGHT, _0x191043['addChild'](_0x2cef38), _0xe202ba = createBitmap(_0x40595d), _0xe202ba['x'] = CANVAS_WIDTH_HALF, _0xe202ba['y'] = CANVAS_HEIGHT_HALF, _0xe202ba['regX'] = _0x40595d['width'] * 0.5, _0xe202ba['regY'] = _0x40595d['height'] * 0.5, _0x2cef38['addChild'](_0xe202ba), _0x32ed89 = new createjs['Text'](TEXT_LOSE, FONT_SIZE_LOSE_PANEL_TITLE + PRIMARY_FONT, PRIMARY_FONT_COLOR), _0x32ed89['x'] = CANVAS_WIDTH_HALF, _0x32ed89['y'] = 0xd2, _0x32ed89['textAlign'] = 'center', _0x32ed89['textBaseli' + 'ne'] = 'middle', _0x32ed89['lineHeight'] = 0x2d, _0x2cef38['addChild'](_0x32ed89), _0x5a86a3 = new createjs['Text'](TEXT_TOTAL_SCORE + _0xc16a10, FONT_SIZE_MESSAGE_BOX + PRIMARY_FONT, PRIMARY_FONT_COLOR), _0x5a86a3['x'] = CANVAS_WIDTH_HALF, _0x5a86a3['y'] = 0x140, _0x5a86a3['textAlign'] = 'center', _0x5a86a3['textBaseli' + 'ne'] = 'middle', _0x2cef38['addChild'](_0x5a86a3), _0x2a423a['addChild'](_0x3553f8, _0x191043, _0x2cef38);
        var _0xd3acc0 = 0xc8, _0x27ff06 = CANVAS_HEIGHT_HALF + 0x5a, _0x3b8179 = s_oSpriteLibrary['getSprite']('but_home');
        _0x51fba6 = new CGfxButton(CANVAS_WIDTH_HALF - _0xd3acc0, _0x27ff06, _0x3b8179, _0x2cef38), _0x51fba6['addEventLi' + 'stener'](ON_MOUSE_DOWN, this['_onExit'], this);
        var _0x4e9654 = s_oSpriteLibrary['getSprite']('but_restar' + 't');
        _0x52ab1f = new CGfxButton(CANVAS_WIDTH_HALF + _0xd3acc0, _0x27ff06, _0x4e9654, _0x2cef38), _0x52ab1f['addEventLi' + 'stener'](ON_MOUSE_DOWN, this['_onRestart'], this), _0x52ab1f['pulseAnima' + 'tion']();
    }, this['unload'] = function () {
        _0x5974a1['changeCont' + 'ainer'](_0x2a423a), createjs['Tween']['get'](_0x2cef38)['to']({ 'alpha': 0x0 }, 0x1f4, createjs['Ease']['cubicOut'])['call'](function () {
            _0x2a423a['removeChil' + 'd'](_0x3553f8), _0x2a423a['removeChil' + 'd'](_0x2cef38);
        }), createjs['Tween']['get'](_0x191043)['to']({ 'alpha': 0x0 }, 0x1f4, createjs['Ease']['cubicOut'])['call'](function () {
            _0x2a423a['removeChil' + 'd'](_0x191043), _0x51fba6['unload'](), _0x51fba6 = null, _0x3553f8['removeAllE' + 'ventListen' + 'ers'](), _0x52ab1f['unload'](), _0x52ab1f = null;
        });
    }, this['show'] = function (_0x438a6e) {
        _0x5974a1 = _0x438a6e, _0x191043['visible'] = !![], createjs['Tween']['get'](_0x2cef38)['wait'](CHECK_LEVEL_DELAY)['to']({ 'y': 0x0 }, 0x3e8, createjs['Ease']['elasticOut']), createjs['Tween']['get'](_0x3553f8)['wait'](CHECK_LEVEL_DELAY)['to']({ 'alpha': 0.8 }, 0x1f4, createjs['Ease']['cubicOut'])['call'](function () {
            $(s_oMain)['trigger']('show_inter' + 'level_ad');
        }), _0x3553f8['on']('click', function () {
        });
    }, this['getContain' + 'er'] = function () {
        return _0x191043;
    }, this['bounceCont' + 'ainerOffSc' + 'reen'] = function () {
        var _0x200706 = this;
        createjs['Tween']['get'](_0x2cef38)['to']({ 'y': CANVAS_HEIGHT }, 0x190, createjs['Ease']['backIn'])['call'](function () {
            _0x200706['unload']();
        });
    }, this['_onRestart'] = function () {
        this['bounceCont' + 'ainerOffSc' + 'reen'](), createjs['Tween']['get'](_0x3553f8)['to']({ 'alpha': 0x0 }, 0x1f4)['call'](function () {
            _0x2a423a['removeChil' + 'd'](_0x3553f8), s_oGame['restartGam' + 'e']();
        });
    }, this['_onExit'] = function () {
        this['bounceCont' + 'ainerOffSc' + 'reen'](), createjs['Tween']['get'](_0x3553f8)['to']({ 'alpha': 0x0 }, 0x1f4)['call'](function () {
            _0x2a423a['removeChil' + 'd'](_0x3553f8), s_oGame['onExit']();
        });
    }, this['_init'](), this;
}