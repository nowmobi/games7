function CWinPanel(_0x47c46b, _0x388977, _0x12e8ba, _0xdd0870, _0x52c7eb) {
    var _0x109954, _0xf5a2cf, _0xb2fb21, _0x4667cd, _0x12104d, _0x3dd0ea, _0x25eef4, _0x29ab34, _0x31acfd, _0x32f115, _0x5bbf77, _0x3ae404, _0x3bcf8b, _0x22ff0f, _0x13783a, _0x5dd149, _0x33c938 = _0x47c46b;
    return this['_init'] = function () {
        _0x109954 = _0x388977, _0xf5a2cf = _0xdd0870, _0xb2fb21 = _0x52c7eb, _0x4667cd = _0x12e8ba;
        var _0x543d95 = s_oSpriteLibrary['getSprite']('bg_help');
        $(s_oMain)['trigger']('share_even' + 't', _0x4667cd), $(s_oMain)['trigger']('save_score', _0x4667cd), _0x13783a = new createjs['Shape'](), _0x13783a['graphics']['beginFill']('black')['drawRect'](0x0, 0x0, CANVAS_WIDTH, CANVAS_HEIGHT), _0x13783a['alpha'] = 0.01, _0x5bbf77 = new createjs['Container'](), _0x5bbf77['alpha'] = 0x1, _0x5bbf77['visible'] = ![], _0x3dd0ea = new createjs['Container'](), _0x3dd0ea['y'] = CANVAS_HEIGHT, _0x5bbf77['addChild'](_0x3dd0ea), _0x25eef4 = createBitmap(_0x543d95), _0x25eef4['x'] = CANVAS_WIDTH_HALF, _0x25eef4['y'] = CANVAS_HEIGHT_HALF, _0x25eef4['regX'] = _0x543d95['width'] * 0.5, _0x25eef4['regY'] = _0x543d95['height'] * 0.5, _0x3dd0ea['addChild'](_0x25eef4), _0x29ab34 = new createjs['Text'](TEXT_WIN, FONT_SIZE_WIN_PANEL_TITLE + PRIMARY_FONT, PRIMARY_FONT_COLOR), _0x29ab34['x'] = CANVAS_WIDTH_HALF, _0x29ab34['y'] = 0xbe, _0x29ab34['textAlign'] = 'center', _0x29ab34['textBaseli' + 'ne'] = 'middle', _0x3dd0ea['addChild'](_0x29ab34), _0x31acfd = new createjs['Text'](TEXT_LEVEL_SCORE + _0xf5a2cf, FONT_SIZE_MESSAGE_BOX + PRIMARY_FONT, PRIMARY_FONT_COLOR), _0x31acfd['x'] = CANVAS_WIDTH_HALF, _0x31acfd['y'] = CANVAS_HEIGHT_HALF - 0x1e, _0x31acfd['textAlign'] = 'center', _0x31acfd['textBaseli' + 'ne'] = 'middle', _0x3dd0ea['addChild'](_0x31acfd), _0x32f115 = new createjs['Text'](TEXT_TOTAL_SCORE + _0x4667cd, FONT_SIZE_MESSAGE_BOX + PRIMARY_FONT, PRIMARY_FONT_COLOR), _0x32f115['x'] = CANVAS_WIDTH_HALF, _0x32f115['y'] = CANVAS_HEIGHT_HALF + 0x5, _0x32f115['textAlign'] = 'center', _0x32f115['textBaseli' + 'ne'] = 'middle', _0x3dd0ea['addChild'](_0x32f115), _0x33c938['addChild'](_0x13783a, _0x5bbf77, _0x3dd0ea), this['initStars']();
        var _0x4a47b7 = 0xb4, _0x18ea12 = CANVAS_HEIGHT_HALF + 0x5a, _0x20172 = s_oSpriteLibrary['getSprite']('but_home');
        _0x3ae404 = new CGfxButton(CANVAS_WIDTH_HALF - _0x4a47b7, _0x18ea12, _0x20172, _0x3dd0ea), _0x3ae404['addEventLi' + 'stener'](ON_MOUSE_DOWN, this['_onExit'], this);
        var _0x1f19aa = s_oSpriteLibrary['getSprite']('but_restar' + 't');
        _0x3bcf8b = new CGfxButton(CANVAS_WIDTH_HALF, _0x18ea12, _0x1f19aa, _0x3dd0ea), _0x3bcf8b['addEventLi' + 'stener'](ON_MOUSE_DOWN, this['_onTryAgai' + 'n'], this);
        var _0x550e1b = s_oSpriteLibrary['getSprite']('but_contin' + 'ue');
        _0x22ff0f = new CGfxButton(CANVAS_WIDTH_HALF + _0x4a47b7, _0x18ea12, _0x550e1b, _0x3dd0ea), _0x22ff0f['addEventLi' + 'stener'](ON_MOUSE_DOWN, this['_onContinu' + 'e'], this), _0x22ff0f['pulseAnima' + 'tion']();
    }, this['initStars'] = function () {
        _0x12104d = [];
        var _0xb9697a = s_oSpriteLibrary['getSprite']('starbox'), _0x32378b = createBitmap(_0xb9697a), _0x4eedb0 = createBitmap(_0xb9697a), _0x367d5a = createBitmap(_0xb9697a);
        _0x32378b['regX'] = _0x4eedb0['regX'] = _0x367d5a['regX'] = _0xb9697a['width'] * 0.5, _0x32378b['regY'] = _0x4eedb0['regY'] = _0x367d5a['regY'] = _0xb9697a['height'] * 0.5;
        var _0xb9697a = s_oSpriteLibrary['getSprite']('star'), _0x7e9ed2 = createBitmap(_0xb9697a);
        _0x12104d['push'](_0x7e9ed2);
        var _0x2d0600 = createBitmap(_0xb9697a);
        _0x12104d['push'](_0x2d0600);
        var _0x48509e = createBitmap(_0xb9697a);
        _0x12104d['push'](_0x48509e), _0x7e9ed2['regX'] = _0x2d0600['regX'] = _0x48509e['regX'] = _0xb9697a['width'] * 0.5, _0x7e9ed2['regY'] = _0x2d0600['regY'] = _0x48509e['regY'] = _0xb9697a['height'] * 0.5, _0x7e9ed2['scaleX'] = _0x7e9ed2['scaleY'] = _0x2d0600['scaleX'] = _0x2d0600['scaleY'] = _0x48509e['scaleX'] = _0x48509e['scaleY'] = 0x0, _0x32378b['x'] = _0x7e9ed2['x'] = CANVAS_WIDTH_HALF - 0x46, _0x4eedb0['x'] = _0x2d0600['x'] = CANVAS_WIDTH_HALF, _0x367d5a['x'] = _0x48509e['x'] = CANVAS_WIDTH_HALF + 0x46, _0x32378b['y'] = _0x4eedb0['y'] = _0x367d5a['y'] = _0x7e9ed2['y'] = _0x2d0600['y'] = _0x48509e['y'] = 0xf0, _0x3dd0ea['addChild'](_0x32378b, _0x4eedb0, _0x367d5a), _0x3dd0ea['addChild'](_0x7e9ed2, _0x2d0600, _0x48509e);
    }, this['unload'] = function () {
        _0x5dd149['changeCont' + 'ainer'](_0x33c938), createjs['Tween']['get'](_0x3dd0ea)['to']({ 'alpha': 0x0 }, 0x1f4, createjs['Ease']['cubicOut'])['call'](function () {
            _0x33c938['removeChil' + 'd'](_0x3dd0ea), _0x33c938['removeChil' + 'd'](_0x13783a);
        }), createjs['Tween']['get'](_0x5bbf77)['to']({ 'alpha': 0x0 }, 0x1f4, createjs['Ease']['cubicOut'])['call'](function () {
            _0x33c938['removeChil' + 'd'](_0x5bbf77), _0x3ae404['unload'](), _0x3ae404 = null, _0x13783a['removeAllE' + 'ventListen' + 'ers'](), _0x22ff0f['unload'](), _0x22ff0f = null;
        });
    }, this['showStars'] = function () {
        for (var _0x286da9 = 0x0; _0x286da9 < _0xb2fb21; _0x286da9++) {
            createjs['Tween']['get'](_0x12104d[_0x286da9])['wait'](0x12c * _0x286da9)['to']({
                'scaleX': 0x1,
                'scaleY': 0x1
            }, 0x5dc, createjs['Ease']['elasticOut']);
        }
        ;
    }, this['show'] = function (_0x3c50ee) {
        _0x5dd149 = _0x3c50ee, _0x5bbf77['visible'] = !![], createjs['Tween']['get'](_0x3dd0ea)['wait'](CHECK_LEVEL_DELAY)['to']({ 'y': 0x0 }, 0x3e8, createjs['Ease']['elasticOut'])['wait'](0x64)['call'](this['showStars']), createjs['Tween']['get'](_0x13783a)['wait'](CHECK_LEVEL_DELAY)['to']({ 'alpha': 0.8 }, 0x1f4, createjs['Ease']['cubicOut'])['call'](function () {
            $(s_oMain)['trigger']('show_inter' + 'level_ad');
        }), _0x13783a['on']('click', function () {
        });
    }, this['bounceCont' + 'ainerOffSc' + 'reen'] = function () {
        var _0x153e55 = this;
        createjs['Tween']['get'](_0x3dd0ea)['to']({ 'y': CANVAS_HEIGHT }, 0x190, createjs['Ease']['backIn'])['call'](function () {
            _0x153e55['unload']();
        });
    }, this['getContain' + 'er'] = function () {
        return _0x5bbf77;
    }, this['_onTryAgai' + 'n'] = function () {
        this['bounceCont' + 'ainerOffSc' + 'reen'](), s_oGame['removeLast' + 'Score'](), s_oGame['restartGam' + 'e'](), createjs['Tween']['get'](_0x13783a)['to']({ 'alpha': 0x0 }, 0x1f4)['call'](function () {
            _0x33c938['removeChil' + 'd'](_0x13783a);
        });
    }, this['_onContinu' + 'e'] = function () {
        _0x109954 + 0x1 < NUM_LEVELS ? s_oGame['onNextLeve' + 'l']() : s_oMain['gotoLevelM' + 'enu'](), this['bounceCont' + 'ainerOffSc' + 'reen'](), createjs['Tween']['get'](_0x13783a)['to']({ 'alpha': 0x0 }, 0x1f4)['call'](function () {
            _0x33c938['removeChil' + 'd'](_0x13783a);
        });
    }, this['_onExit'] = function () {
        this['unload'](), s_oGame['onExit']();
    }, this['_init'](), this;
}