function CLevelMenu() {
    var _0x591728, _0xfed7d4, _0x11d6cd, _0x4e513e, _0x2b3c5c, _0x4c98d6, _0x1e4a96, _0x1b60a0, _0x389ccb, _0x19065b, _0x2bbd9c, _0xb16ff3 = null, _0x20f459 = null, _0x302750, _0x379753, _0x1ab4b3, _0x3d923e = null, _0x14bd89 = null;
    this['_init'] = function () {
        var _0x569b09 = new createjs['Shape']();
        _0x569b09['graphics']['beginFill']('#000000')['drawRect'](0x0, 0x0, CANVAS_WIDTH, CANVAS_HEIGHT), _0x569b09['alpha'] = 0.7, _0x591728 = 0x0, _0x379753 = new createjs['Container'](), s_oStage['addChild'](_0x379753);
        var _0x23839c = createBitmap(s_oSpriteLibrary['getSprite']('bg_level_s' + 'elect'));
        _0x379753['addChild'](_0x23839c), _0x379753['addChild'](_0x569b09), _0x4c98d6 = {
            'x': CANVAS_WIDTH_HALF,
            'y': 0xc
        }, _0x302750 = new createjs['Text'](TEXT_SELECT_LEVEL, FONT_SIZE_TITLES + PRIMARY_FONT, PRIMARY_FONT_COLOR), _0x302750['x'] = _0x4c98d6['x'], _0x302750['textAlign'] = 'center', s_oStage['addChild'](_0x302750);
        var _0x1c1799 = s_oSpriteLibrary['getSprite']('but_exit');
        _0x1e4a96 = {
            'x': CANVAS_WIDTH - _0x1c1799['width'] / 0x2 - 0xa,
            'y': _0x1c1799['height'] / 0x2 + 0xa
        }, _0x19065b = new CGfxButton(_0x1e4a96['x'], _0x1e4a96['y'], _0x1c1799, s_oStage), _0x19065b['addEventLi' + 'stener'](ON_MOUSE_UP, this['_onExit'], this), _0xfed7d4 = _0x1c1799['height'];
        if (DISABLE_SOUND_MOBILE === ![] || s_bMobile === ![]) {
        }
        var _0x5c2cc1 = window['document'], _0x23cebe = _0x5c2cc1['documentEl' + 'ement'];
        _0x3d923e = _0x23cebe['requestFul' + 'lscreen'] || _0x23cebe['mozRequest' + 'FullScreen'] || _0x23cebe['webkitRequ' + 'estFullScr' + 'een'] || _0x23cebe['msRequestF' + 'ullscreen'], _0x14bd89 = _0x5c2cc1['exitFullsc' + 'reen'] || _0x5c2cc1['mozCancelF' + 'ullScreen'] || _0x5c2cc1['webkitExit' + 'Fullscreen'] || _0x5c2cc1['msExitFull' + 'screen'];
        ENABLE_FULLSCREEN === ![] && (_0x3d923e = ![]);
        _0x3d923e && screenfull['enabled'] && (_0x1c1799 = s_oSpriteLibrary['getSprite']('but_fullsc' + 'reen'), _0x389ccb = {
            'x': _0x1c1799['width'] / 0x4 + 0xa,
            'y': _0x1c1799['height'] / 0x2 + 0xa
        }, _0x1ab4b3 = new CToggle(_0x389ccb['x'], _0x389ccb['y'], _0x1c1799, s_bFullscreen, s_oStage), _0x1ab4b3['addEventLi' + 'stener'](ON_MOUSE_UP, this['_onFullscr' + 'eenRelease'], this));
        this['_checkBoun' + 'dLimits'](), _0x4e513e = new Array();
        var _0x454e3e = CANVAS_WIDTH - EDGEBOARD_X * 0x2, _0x46fb31 = Math['floor'](_0x454e3e / NUM_COLS_PAGE_LEVEL) / 0x2 - 0x1e, _0x435d15 = 0x0;
        for (var _0x649f98 = 0x0; _0x649f98 < NUM_COLS_PAGE_LEVEL; _0x649f98++) {
            _0x4e513e['push'](_0x435d15), _0x435d15 += _0x46fb31 * 0x2;
        }
        _0x2b3c5c = new Array(), this['_createNew' + 'LevelPage'](0x0, s_oLevelSettings['getNumLeve' + 'l']());
        if (_0x2b3c5c['length'] > 0x1) {
            for (var _0x4d371a = 0x1; _0x4d371a < _0x2b3c5c['length']; _0x4d371a++) {
                _0x2b3c5c[_0x4d371a]['visible'] = ![];
            }
            _0xb16ff3 = new CGfxButton(CANVAS_WIDTH_HALF + 0x1c2, CANVAS_HEIGHT_HALF, s_oSpriteLibrary['getSprite']('arrow_sele' + 'ct_level'), s_oStage), _0xb16ff3['getButtonI' + 'mage']()['rotation'] = 0x5a, _0xb16ff3['addEventLi' + 'stener'](ON_MOUSE_UP, this['_onRight'], this), _0x20f459 = new CGfxButton(CANVAS_WIDTH_HALF - 0x1c2, CANVAS_HEIGHT_HALF, s_oSpriteLibrary['getSprite']('arrow_sele' + 'ct_level'), s_oStage), _0x20f459['getButtonI' + 'mage']()['rotation'] = -0x5a, _0x20f459['addEventLi' + 'stener'](ON_MOUSE_UP, this['_onLeft'], this);
        }
        this['refreshBut' + 'tonPos'](), _oFade = new createjs['Shape'](), _oFade['graphics']['beginFill']('black')['drawRect'](0x0, 0x0, CANVAS_WIDTH, CANVAS_HEIGHT), s_oStage['addChild'](_oFade), createjs['Tween']['get'](_oFade)['to']({ 'alpha': 0x0 }, 0x3e8)['call'](function () {
            _oFade['visible'] = ![];
        });
    }, this['unload'] = function () {
        for (var _0x26443d = 0x0; _0x26443d < _0x11d6cd['length']; _0x26443d++) {
            _0x11d6cd[_0x26443d]['unload']();
        }
        if (DISABLE_SOUND_MOBILE === ![] || s_bMobile === ![]) {
        }
        _0x3d923e && screenfull['enabled'] && _0x1ab4b3['unload'](), _0x19065b['unload'](), _0x20f459 !== null && (_0x20f459['unload'](), _0xb16ff3['unload']()), s_oStage['removeAllC' + 'hildren'](), s_oLevelMenu = null;
    }, this['refreshBut' + 'tonPos'] = function () {
        _0x302750['y'] = _0x4c98d6['y'] + s_iOffsetY, _0x19065b['setPositio' + 'n'](_0x1e4a96['x'] - s_iOffsetX, _0x1e4a96['y'] + s_iOffsetY);
        if (DISABLE_SOUND_MOBILE === ![] || s_bMobile === ![]) {
        }
        _0x3d923e && screenfull['enabled'] && _0x1ab4b3['setPositio' + 'n'](_0x389ccb['x'] + s_iOffsetX, _0x389ccb['y'] + s_iOffsetY);
    }, this['_checkBoun' + 'dLimits'] = function () {
        var _0x431103 = s_oSpriteLibrary['getSprite']('but_level_' + s_iMascotteType), _0x272693 = 0x0, _0x5921ff = CANVAS_HEIGHT - EDGEBOARD_Y * 0x2 - _0xfed7d4 * 0x2, _0x5e5355 = 0x0;
        while (_0x272693 < _0x5921ff) {
            _0x272693 += _0x431103['height'] + 0x14, _0x5e5355++;
        }
        NUM_ROWS_PAGE_LEVEL > _0x5e5355 && (NUM_ROWS_PAGE_LEVEL = _0x5e5355);
        var _0x141b84 = 0x0, _0x1e90d3 = 0x0, _0x5825db = CANVAS_WIDTH - EDGEBOARD_X * 0x2, _0x431103 = s_oSpriteLibrary['getSprite']('but_level_' + s_iMascotteType);
        while (_0x1e90d3 < _0x5825db) {
            _0x1e90d3 += _0x431103['width'] / 0x2 + 0x5, _0x141b84++;
        }
        NUM_COLS_PAGE_LEVEL > _0x141b84 && (NUM_COLS_PAGE_LEVEL = _0x141b84);
    }, this['_createNew' + 'LevelPage'] = function (_0x283c3c, _0xe50e2) {
        var _0x55f67d = new createjs['Container']();
        _0x379753['addChild'](_0x55f67d), _0x2b3c5c['push'](_0x55f67d), _0x11d6cd = new Array();
        var _0x227602 = 0x0, _0x25a2d3 = 0x0, _0x493fe5 = 0x1, _0x2bc2c8 = ![], _0x499bf2 = s_oSpriteLibrary['getSprite']('but_level_' + s_iMascotteType);
        for (var _0x4603c8 = _0x283c3c; _0x4603c8 < _0xe50e2; _0x4603c8++) {
            var _0x14b8c7;
            ALL_LEVELS_UNLOCKED === !![] ? _0x14b8c7 = !![] : _0x14b8c7 = _0x4603c8 + 0x1 > s_iLastLevel ? ![] : !![];
            ;
            var _0x351bd8 = new CLevelBut(_0x4e513e[_0x227602] + _0x499bf2['width'] / 0x4, _0x25a2d3 + _0x499bf2['height'] / 0x2 + 0x1e, _0x4603c8 + 0x1, _0x499bf2, s_aStars[_0x4603c8], _0x14b8c7, _0x55f67d);
            _0x351bd8['addEventLi' + 'stenerWith' + 'Params'](ON_MOUSE_UP, this['_onButLeve' + 'lRelease'], this, _0x4603c8), _0x11d6cd['push'](_0x351bd8), _0x227602++;
            if (_0x227602 === _0x4e513e['length'] && _0x4603c8 < _0xe50e2 - 0x1) {
                _0x227602 = 0x0, _0x25a2d3 += _0x499bf2['height'] + 0x32, _0x493fe5++;
                if (_0x493fe5 > NUM_ROWS_PAGE_LEVEL) {
                    _0x2bc2c8 = !![];
                    break;
                }
            }
        }
        _0x55f67d['x'] = CANVAS_WIDTH_HALF, _0x55f67d['y'] = CANVAS_HEIGHT_HALF, _0x55f67d['regX'] = _0x55f67d['getBounds']()['width'] / 0x2, _0x55f67d['regY'] = _0x55f67d['getBounds']()['height'] / 0x2, _0x2bc2c8 && this['_createNew' + 'LevelPage'](_0x4603c8 + 0x1, _0xe50e2);
    }, this['_onRight'] = function () {
        _0x2b3c5c[_0x591728]['visible'] = ![], _0x591728++, _0x591728 >= _0x2b3c5c['length'] && (_0x591728 = 0x0), _0x2b3c5c[_0x591728]['visible'] = !![];
    }, this['_onLeft'] = function () {
        _0x2b3c5c[_0x591728]['visible'] = ![], _0x591728--, _0x591728 < 0x0 && (_0x591728 = _0x2b3c5c['length'] - 0x1), _0x2b3c5c[_0x591728]['visible'] = !![];
    }, this['_onButLeve' + 'lRelease'] = function (_0x1fcc3f) {
        s_oLevelSettings['loadLevel'](_0x1fcc3f), this['unload'](), s_oMain['gotoGame']();
    }, this['_onAudioTo' + 'ggle'] = function () {
        Howler['mute'](s_bAudioActive), s_bAudioActive = !s_bAudioActive;
    }, this['_onFullscr' + 'eenRelease'] = function () {
        s_bFullscreen ? _0x14bd89['call'](window['document']) : _0x3d923e['call'](window['document']['documentEl' + 'ement']), sizeHandler();
    }, this['resetFulls' + 'creenBut'] = function () {
        _0x3d923e && screenfull['enabled'] && _0x1ab4b3['setActive'](s_bFullscreen);
        ;
    }, this['_onExit'] = function () {
        this['unload'](), s_oMain['gotoMascot' + 'teSelectio' + 'n']();
    }, s_oLevelMenu = this, this['_init']();
}
var s_oLevelMenu = null;