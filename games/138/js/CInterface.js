function CInterface(_0x714367, _0x1da31a) {
    var _0x5c5a5a, _0x3b920d, _0x4de993, _0x247be7 = null, _0xbf609b, _0x492bfe, _0x3c4e1f, _0x2337ed, _0x4a8ebf, _0x3e2669, _0x2f0e6d, _0x13b794 = {
            'x': CANVAS_WIDTH_HALF + 0xd7,
            'y': 0x28
        }, _0x29545c = {
            'x': CANVAS_WIDTH_HALF + 0x10e,
            'y': 0x37
        }, _0x39e51b, _0x49269b, _0x1cb8f5, _0x4fa564 = {
            'x': CANVAS_WIDTH_HALF,
            'y': CANVAS_HEIGHT - 0x2d
        }, _0x3a1e31, _0x689ccf = {
            'x': CANVAS_WIDTH_HALF - 0xff,
            'y': 0x37
        }, _0x1ba846, _0x15e765, _0x2c1250 = null, _0x54b2ea = null, _0xbb1a1a, _0x4a90ae, _0x480bbf, _0x46c548, _0x2f55d2, _0x3e6da1 = _0x714367;
    return this['_init'] = function () {
        _0x1ba846 = ![], _0x3b920d = new createjs['Container'](), _0x5c5a5a['addChild'](_0x3b920d);
        var _0x16e3b7 = s_oSpriteLibrary['getSprite']('goal_icon');
        _0x2f0e6d = createBitmap(_0x16e3b7), _0x2f0e6d['regX'] = _0x16e3b7['width'] * 0.5, _0x2f0e6d['regY'] = _0x16e3b7['height'] * 0.5, _0x2f0e6d['x'] = _0x13b794['x'], _0x2f0e6d['y'] = _0x13b794['y'], _0x3b920d['addChild'](_0x2f0e6d), _0x39e51b = new createjs['Text'](MOVES_INFO, FONT_SIZE_INTERFACE + PRIMARY_FONT, PRIMARY_FONT_COLOR), _0x39e51b['x'] = _0x29545c['x'], _0x39e51b['y'] = _0x29545c['y'], _0x39e51b['textAlign'] = 'center', _0x39e51b['textBaseli' + 'ne'] = 'alphabetic', _0x3b920d['addChild'](_0x39e51b);
        var _0x16e3b7 = s_oSpriteLibrary['getSprite']('score_pane' + 'l');
        _0x49269b = createBitmap(_0x16e3b7), _0x49269b['regX'] = _0x16e3b7['width'] * 0.5, _0x49269b['regY'] = _0x16e3b7['height'] * 0.5, _0x49269b['x'] = _0x4fa564['x'], _0x49269b['y'] = _0x4fa564['y'] - 0x5, _0x3b920d['addChild'](_0x49269b), _0x1cb8f5 = new createjs['Text'](TEXT_SCORE + '\x200', FONT_SIZE_INTERFACE + PRIMARY_FONT, PRIMARY_FONT_COLOR), _0x1cb8f5['x'] = _0x4fa564['x'], _0x1cb8f5['y'] = _0x4fa564['y'], _0x1cb8f5['textAlign'] = 'center', _0x1cb8f5['textBaseli' + 'ne'] = 'alphabetic', _0x3b920d['addChild'](_0x1cb8f5), _0x3a1e31 = new createjs['Text'](TEXT_LEVEL + '\x20' + (_0x3e6da1 + 0x1), FONT_SIZE_INTERFACE + PRIMARY_FONT, PRIMARY_FONT_COLOR), _0x3a1e31['x'] = _0x689ccf['x'], _0x3a1e31['y'] = _0x689ccf['y'], _0x3a1e31['textAlign'] = 'center', _0x3a1e31['textBaseli' + 'ne'] = 'alphabetic', _0x3b920d['addChild'](_0x3a1e31), _0x4de993 = new createjs['Container'](), _0x3b920d['addChild'](_0x4de993);
        var _0x16e3b7 = s_oSpriteLibrary['getSprite']('but_settin' + 'gs');
        _0x2f55d2 = {
            'x': CANVAS_WIDTH - _0x16e3b7['width'] * 0.5 - 0xa,
            'y': _0x16e3b7['height'] * 0.5 + 0xa
        };
        var _0x16e3b7 = s_oSpriteLibrary['getSprite']('but_exit');
        _0xbb1a1a = {
            'x': _0x2f55d2['x'],
            'y': _0x2f55d2['y'] + _0x16e3b7['height'] + 0xa
        }, _0x2337ed = new CGfxButton(_0xbb1a1a['x'], _0xbb1a1a['y'], _0x16e3b7, _0x3b920d), _0x2337ed['addEventLi' + 'stener'](ON_MOUSE_UP, this['_onExit'], this), _0x2337ed['setVisible'](![]), _0x16e3b7 = s_oSpriteLibrary['getSprite']('but_help'), _0x46c548 = {
            'x': _0x2f55d2['x'],
            'y': _0xbb1a1a['y'] + _0x16e3b7['height'] + 0xa
        }, _0x3e2669 = new CGfxButton(_0x46c548['x'], _0x46c548['y'], _0x16e3b7, _0x3b920d), _0x3e2669['addEventLi' + 'stener'](ON_MOUSE_UP, function () {
            new CHelpPanel();
        }, this), _0x3e2669['setVisible'](![]), _0x4a90ae = {
            'x': _0x46c548['x'],
            'y': _0x46c548['y'] + _0x16e3b7['height'] + 0xa
        };
        if (DISABLE_SOUND_MOBILE === ![] || s_bMobile === ![]) {
        }
        var _0x4db92a = window['document'], _0x1a3d4b = _0x4db92a['documentEl' + 'ement'];
        _0x2c1250 = _0x1a3d4b['requestFul' + 'lscreen'] || _0x1a3d4b['mozRequest' + 'FullScreen'] || _0x1a3d4b['webkitRequ' + 'estFullScr' + 'een'] || _0x1a3d4b['msRequestF' + 'ullscreen'], _0x54b2ea = _0x4db92a['exitFullsc' + 'reen'] || _0x4db92a['mozCancelF' + 'ullScreen'] || _0x4db92a['webkitExit' + 'Fullscreen'] || _0x4db92a['msExitFull' + 'screen'];
        ENABLE_FULLSCREEN === ![] && (_0x2c1250 = ![]);
        _0x2c1250 && screenfull['enabled'] && (_0x16e3b7 = s_oSpriteLibrary['getSprite']('but_fullsc' + 'reen'), _0x492bfe ? _0x480bbf = {
            'x': _0x4a90ae['x'],
            'y': _0x4a90ae['y'] + _0x16e3b7['height'] + 0xa
        } : _0x480bbf = {
            'x': _0x4a90ae['x'],
            'y': _0x4a90ae['y']
        }, _0x4a8ebf = new CToggle(_0x480bbf['x'], _0x480bbf['y'], _0x16e3b7, s_bFullscreen, _0x3b920d), _0x4a8ebf['addEventLi' + 'stener'](ON_MOUSE_UP, this['_onFullscr' + 'eenRelease'], this), _0x4a8ebf['setVisible'](![]));
        ;
        _0x16e3b7 = s_oSpriteLibrary['getSprite']('but_settin' + 'gs'), _0x3c4e1f = new CGfxButton(_0x2f55d2['x'], _0x2f55d2['y'], _0x16e3b7, _0x3b920d), _0x3c4e1f['addEventLi' + 'stener'](ON_MOUSE_UP, this['onSettings']), _0x15e765 = ![], this['refreshBut' + 'tonPos'](s_iOffsetX, s_iOffsetY);
    }, this['onSettings'] = function () {
        if (!_0x15e765) {
            _0xbf609b = new CPause(_0x4de993), _0x15e765 = !![], _0x2337ed['setX'](_0x3c4e1f['getX']()), _0x2337ed['setY'](_0x3c4e1f['getY']()), _0x2337ed['setVisible'](!![]), _0x3e2669['setX'](_0x3c4e1f['getX']()), _0x3e2669['setY'](_0x3c4e1f['getY']()), _0x3e2669['setVisible'](!![]);
            if (_0x492bfe) {
            }
            _0x4a8ebf && (_0x4a8ebf['setPositio' + 'n'](_0x3c4e1f['getX'](), _0x3c4e1f['getY']()), _0x4a8ebf['setVisible'](!![]), new createjs['Tween']['get'](_0x4a8ebf['getButtonI' + 'mage']())['to']({
                'x': _0x480bbf['x'] - s_iOffsetX,
                'y': _0x480bbf['y']
            }, 0x12c, createjs['Ease']['cubicOut'])), new createjs['Tween']['get'](_0x2337ed['getButtonI' + 'mage']())['to']({
                'x': _0xbb1a1a['x'] - s_iOffsetX,
                'y': _0xbb1a1a['y']
            }, 0x12c, createjs['Ease']['cubicOut']), new createjs['Tween']['get'](_0x3e2669['getButtonI' + 'mage']())['to']({
                'x': _0x46c548['x'] - s_iOffsetX,
                'y': _0x46c548['y']
            }, 0x12c, createjs['Ease']['cubicOut']);
        } else
            s_oInterface['closePanel']();
    }, this['updateLeve' + 'lMoves'] = function (_0x6d3f9a) {
        _0x39e51b['text'] = _0x6d3f9a;
    }, this['refreshSco' + 're'] = function (_0x212142) {
        _0x1cb8f5['text'] = TEXT_SCORE + '\x20' + _0x212142;
    }, this['closePanel'] = function () {
        _0xbf609b['onExit'](), _0x15e765 = ![], new createjs['Tween']['get'](_0x2337ed['getButtonI' + 'mage']())['to']({
            'x': _0x3c4e1f['getX'](),
            'y': _0x3c4e1f['getY']()
        }, 0x12c, createjs['Ease']['cubicIn'])['call'](function () {
            _0x2337ed['setVisible'](![]), _0x3e2669['setVisible'](![]), _0x4a8ebf && _0x4a8ebf['setVisible'](![]);
        }), new createjs['Tween']['get'](_0x3e2669['getButtonI' + 'mage']())['to']({
            'x': _0x3c4e1f['getX'](),
            'y': _0x3c4e1f['getY']()
        }, 0x12c, createjs['Ease']['cubicIn']), _0x4a8ebf && new createjs['Tween']['get'](_0x4a8ebf['getButtonI' + 'mage']())['to']({
            'x': _0x3c4e1f['getX'](),
            'y': _0x3c4e1f['getY']()
        }, 0x12c, createjs['Ease']['cubicIn']);
    }, this['unloadPaus' + 'e'] = function () {
    }, this['unload'] = function () {
        if (DISABLE_SOUND_MOBILE === ![] || s_bMobile === ![]) {
        }
        _0x2337ed['unload'](), _0x5c5a5a['removeChil' + 'd'](_0x3b920d), _0x2c1250 && screenfull['enabled'] && _0x4a8ebf['unload'](), s_oInterface = null;
    }, this['refreshBut' + 'tonPos'] = function (_0x55c221, _0x232160) {
        _0x3c4e1f['setPositio' + 'n'](_0x2f55d2['x'] - _0x55c221, _0x232160 + _0x2f55d2['y']), _0x2337ed['setPositio' + 'n'](_0xbb1a1a['x'] - _0x55c221, _0x232160 + _0xbb1a1a['y']), _0x3e2669['setPositio' + 'n'](_0x46c548['x'] - _0x55c221, _0x232160 + _0x46c548['y']);
        if (DISABLE_SOUND_MOBILE === ![] || s_bMobile === ![]) {
        }
        _0x2c1250 && screenfull['enabled'] && _0x4a8ebf['setPositio' + 'n'](_0x480bbf['x'] - _0x55c221, _0x480bbf['y']);
    }, this['_onButHelp' + 'Release'] = function () {
        _0x247be7 = new CHelpPanel();
    }, this['_onButRest' + 'artRelease'] = function () {
        FKGames['showInters' + 'titial']({
            'beforeShowAd': () => {
            },
            'afterShowAd': () => {
                s_oGame['restartGam' + 'e'](), $(s_oMain)['trigger']('restart_le' + 'vel', 0x1), console['log']('----------' + '开始游戏按钮插屏广告' + '----显示成功!!' + '!---------' + '-');
            }
        });
    }, this['onExitFrom' + 'Help'] = function () {
        _0x247be7['unload']();
    }, this['_onExit'] = function () {
        new CAreYouSurePanel(s_oGame['onExit']);
    }, this['_onAudioTo' + 'ggle'] = function () {
        Howler['mute'](s_bAudioActive), s_bAudioActive = !s_bAudioActive;
    }, this['_onFullscr' + 'eenRelease'] = function () {
        s_bFullscreen ? _0x54b2ea['call'](window['document']) : _0x2c1250['call'](window['document']['documentEl' + 'ement']), sizeHandler();
    }, this['resetFulls' + 'creenBut'] = function () {
        _0x2c1250 && screenfull['enabled'] && _0x4a8ebf['setActive'](s_bFullscreen);
        ;
    }, this['_onRestart'] = function () {
        s_oGame['onRestart']();
    }, s_oInterface = this, _0x5c5a5a = _0x1da31a, this['_init'](), this;
}
var s_oInterface = null;