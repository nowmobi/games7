function CMascotteSelection() {
    var _0x37e142, _0x1fa7a5, _0x5f3419, _0x431ddb, _0x4a9242, _0x1825bc, _0x6aa455, _0x5669b2, _0x5d7c43, _0x1741e0, _0x2c9225, _0x4722d3, _0x556bd5 = null, _0x58fc3e = null;
    this['_init'] = function () {
        var _0x5d3e7a = new createjs['Shape']();
        _0x5d3e7a['graphics']['beginFill']('#000000')['drawRect'](0x0, 0x0, CANVAS_WIDTH, CANVAS_HEIGHT), _0x5d3e7a['alpha'] = 0.7, _0x4a9242 = new createjs['Container'](), s_oStage['addChild'](_0x4a9242);
        var _0x480d82 = createBitmap(s_oSpriteLibrary['getSprite']('bg_level_s' + 'elect'));
        _0x4a9242['addChild'](_0x480d82), _0x4a9242['addChild'](_0x5d3e7a);
        var _0x2017d7 = s_oSpriteLibrary['getSprite']('msg_box'), _0x30cccb = createBitmap(_0x2017d7);
        _0x30cccb['regX'] = _0x2017d7['width'] * 0.5, _0x30cccb['regY'] = _0x2017d7['height'] * 0.5, _0x30cccb['x'] = CANVAS_WIDTH_HALF, _0x30cccb['y'] = CANVAS_HEIGHT_HALF, _0x4a9242['addChild'](_0x30cccb), _0x431ddb = {
            'x': CANVAS_WIDTH_HALF,
            'y': 0xb4
        }, _0x4722d3 = new createjs['Text'](TEXT_SELECT_MASCOTTE, FONT_SIZE_TITLES + PRIMARY_FONT, PRIMARY_FONT_COLOR), _0x4722d3['x'] = _0x431ddb['x'], _0x4722d3['y'] = _0x431ddb['y'], _0x4722d3['textAlign'] = 'center', s_oStage['addChild'](_0x4722d3);
        var _0x170f17 = 0x78, _0x1cecda = CANVAS_HEIGHT_HALF + 0x14, _0x2017d7 = s_oSpriteLibrary['getSprite']('but_charac' + 'ter0');
        _0x1741e0 = new CGfxButton(CANVAS_WIDTH_HALF - _0x170f17, _0x1cecda, _0x2017d7, s_oStage), _0x1741e0['addEventLi' + 'stenerWith' + 'Params'](ON_MOUSE_UP, this['_onButMode' + 'Release'], this, MASCOTTE_TYPE_FEMALE);
        var _0x2017d7 = s_oSpriteLibrary['getSprite']('but_charac' + 'ter1');
        _0x5d7c43 = new CGfxButton(CANVAS_WIDTH_HALF + _0x170f17 - 0xa, _0x1cecda, _0x2017d7, s_oStage), _0x5d7c43['addEventLi' + 'stenerWith' + 'Params'](ON_MOUSE_UP, this['_onButMode' + 'Release'], this, MASCOTTE_TYPE_MALE);
        var _0x2017d7 = s_oSpriteLibrary['getSprite']('but_exit');
        _0x1fa7a5 = {
            'x': CANVAS_WIDTH - _0x2017d7['width'] / 0x2 - 0xa,
            'y': _0x2017d7['height'] / 0x2 + 0xa
        }, _0x5669b2 = new CGfxButton(_0x1fa7a5['x'], _0x1fa7a5['y'], _0x2017d7, s_oStage), _0x5669b2['addEventLi' + 'stener'](ON_MOUSE_UP, this['_onExit'], this);
        if (DISABLE_SOUND_MOBILE === ![] || s_bMobile === ![]) {
        }
        var _0x543a8f = window['document'], _0x1fed7d = _0x543a8f['documentEl' + 'ement'];
        _0x556bd5 = _0x1fed7d['requestFul' + 'lscreen'] || _0x1fed7d['mozRequest' + 'FullScreen'] || _0x1fed7d['webkitRequ' + 'estFullScr' + 'een'] || _0x1fed7d['msRequestF' + 'ullscreen'], _0x58fc3e = _0x543a8f['exitFullsc' + 'reen'] || _0x543a8f['mozCancelF' + 'ullScreen'] || _0x543a8f['webkitExit' + 'Fullscreen'] || _0x543a8f['msExitFull' + 'screen'], ENABLE_FULLSCREEN === ![] && (_0x556bd5 = ![]), _0x556bd5 && screenfull['enabled'] && (_0x2017d7 = s_oSpriteLibrary['getSprite']('but_fullsc' + 'reen'), _0x5f3419 = {
            'x': _0x2017d7['width'] / 0x4 + 0xa,
            'y': _0x2017d7['height'] / 0x2 + 0xa
        }, _0x2c9225 = new CToggle(_0x5f3419['x'], _0x5f3419['y'], _0x2017d7, s_bFullscreen, s_oStage), _0x2c9225['addEventLi' + 'stener'](ON_MOUSE_UP, this['_onFullscr' + 'eenRelease'], this)), _0x1825bc = new createjs['Shape'](), _0x1825bc['graphics']['beginFill']('black')['drawRect'](0x0, 0x0, CANVAS_WIDTH, CANVAS_HEIGHT), s_oStage['addChild'](_0x1825bc), createjs['Tween']['get'](_0x1825bc)['to']({ 'alpha': 0x0 }, 0x3e8)['call'](function () {
            _0x1825bc['visible'] = ![];
        }), this['refreshBut' + 'tonPos'](s_iOffsetX, s_iOffsetY);
    }, this['refreshBut' + 'tonPos'] = function () {
        _0x5669b2['setPositio' + 'n'](_0x1fa7a5['x'] - s_iOffsetX, _0x1fa7a5['y']);
        if (DISABLE_SOUND_MOBILE === ![] || s_bMobile === ![]) {
        }
        _0x556bd5 && screenfull['enabled'] && _0x2c9225['setPositio' + 'n'](_0x5f3419['x'] + s_iOffsetX, _0x5f3419['y'] + s_iOffsetY);
    }, this['unload'] = function () {
        _0x5669b2['unload'](), _0x5669b2 = null;
        if (DISABLE_SOUND_MOBILE === ![] || s_bMobile === ![]) {
        }
        _0x556bd5 && screenfull['enabled'] && _0x2c9225['unload'](), s_oStage['removeAllC' + 'hildren'](), createjs['Tween']['removeAllT' + 'weens'](), s_oModeSelection = null;
    }, this['_onExit'] = function () {
        this['unload'](), s_oMain['gotoMenu']();
    }, this['_onAudioTo' + 'ggle'] = function () {
        Howler['mute'](s_bAudioActive), s_bAudioActive = !s_bAudioActive;
    }, this['_onButMode' + 'Release'] = function (_0xde422e) {
        this['unload'](), s_iMascotteType = _0xde422e, s_oMain['gotoLevelM' + 'enu']();
    }, this['_onFullscr' + 'eenRelease'] = function () {
        s_bFullscreen ? _0x58fc3e['call'](window['document']) : _0x556bd5['call'](window['document']['documentEl' + 'ement']), sizeHandler();
    }, this['resetFulls' + 'creenBut'] = function () {
        _0x556bd5 && screenfull['enabled'] && _0x2c9225['setActive'](s_bFullscreen);
        ;
    }, s_oMascotteSelection = this, this['_init']();
}
var s_oMascotteSelection = null;