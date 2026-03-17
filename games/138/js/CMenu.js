function CMenu() {
    var _0x59e56e, _0x1bc613, _0x1f3319, _0x1e49b5, _0x20ffa3, _0x4e49ed, _0x4e49ed, _0x1cbf78, _0x579cc4, _0x32de3e, _0x4e3fcc, _0x1531e6 = null, _0x5420c4 = null;
    this['_init'] = function () {
        _0x20ffa3 = createBitmap(s_oSpriteLibrary['getSprite']('bg_menu')), _0x20ffa3['cache'](0x0, 0x0, CANVAS_WIDTH, CANVAS_HEIGHT), s_oStage['addChild'](_0x20ffa3);
        var _0x2f1fe1 = s_oSpriteLibrary['getSprite']('but_play');
        _0x1bc613 = {
            'x': CANVAS_WIDTH_HALF,
            'y': CANVAS_HEIGHT - 0x78
        }, _0x4e49ed = new CGfxButton(_0x1bc613['x'], _0x1bc613['y'], _0x2f1fe1, s_oStage), _0x4e49ed['addEventLi' + 'stener'](ON_MOUSE_UP, this['_onButPlay' + 'Release'], this), _0x4e49ed['pulseAnima' + 'tion']();
        if (DISABLE_SOUND_MOBILE === ![] || s_bMobile === ![]) {
        }
        var _0x35442b = window['document'], _0x11d8b1 = _0x35442b['documentEl' + 'ement'];
        _0x1531e6 = _0x11d8b1['requestFul' + 'lscreen'] || _0x11d8b1['mozRequest' + 'FullScreen'] || _0x11d8b1['webkitRequ' + 'estFullScr' + 'een'] || _0x11d8b1['msRequestF' + 'ullscreen'], _0x5420c4 = _0x35442b['exitFullsc' + 'reen'] || _0x35442b['mozCancelF' + 'ullScreen'] || _0x35442b['webkitExit' + 'Fullscreen'] || _0x35442b['msExitFull' + 'screen'];
        ENABLE_FULLSCREEN === ![] && (_0x1531e6 = ![]);
        _0x1531e6 && screenfull['enabled'] && (_0x2f1fe1 = s_oSpriteLibrary['getSprite']('but_fullsc' + 'reen'), _0x1e49b5 = {
            'x': _0x1f3319['x'] + _0x2f1fe1['width'] * 0.5 + 0xa,
            'y': _0x1f3319['y']
        }, _0x4e3fcc = new CToggle(_0x1e49b5['x'], _0x1e49b5['y'], _0x2f1fe1, s_bFullscreen, s_oStage), _0x4e3fcc['addEventLi' + 'stener'](ON_MOUSE_UP, this['_onFullscr' + 'eenRelease'], this));
        _0x579cc4 = new createjs['Shape'](), _0x579cc4['graphics']['beginFill']('black')['drawRect'](0x0, 0x0, CANVAS_WIDTH, CANVAS_HEIGHT), s_oStage['addChild'](_0x579cc4), createjs['Tween']['get'](_0x579cc4)['to']({ 'alpha': 0x0 }, 0x3e8)['call'](function () {
            _0x579cc4['visible'] = ![];
        }), s_oLevelSettings = new CLevelSettings(s_aLevels);
        if (!s_bStorageAvailable)
            new CMsgBox(TEXT_ERR_LS, s_oStage);
        else {
            var _0x43f26c = getItemJson('plumber_so' + 'da_scores');
            if (_0x43f26c !== null && _0x43f26c !== undefined)
                s_aScores = _0x43f26c;
            else {
                LS_SCORES = [], s_aScores = new Array();
                for (var _0x4b0a5c = 0x0; _0x4b0a5c < NUM_LEVELS; _0x4b0a5c++) {
                    s_aScores[_0x4b0a5c] = 0x0;
                }
            }
            LS_SCORES = s_aScores;
            if (s_aStars === undefined || s_aStars === null) {
                s_aStars = new Array();
                for (var _0x4b0a5c = 0x0; _0x4b0a5c < NUM_LEVELS; _0x4b0a5c++) {
                    s_aStars['push'](0x0);
                }
                ;
            }
            ;
            var _0x182319 = getItemJson('plumber_so' + 'da_stars');
            _0x182319 !== null && s_aStars !== undefined && (s_aStars = _0x182319);
            ;
            LS_STARS = s_aStars, s_iLastLevel = getItem('plumber_so' + 'da_last_le' + 'vel'), s_iLastLevel === null && (s_iLastLevel = 0x1), LS_LAST_LEVEL = s_iLastLevel, s_iLastLevel > 0x1 ? s_bFirstTime = ![] : s_bFirstTime = !![];
        }
        this['refreshBut' + 'tonPos'](s_iOffsetX, s_iOffsetY);
    }, this['refreshBut' + 'tonPos'] = function (_0x49f41f, _0x1cec25) {
        _0x4e49ed['setPositio' + 'n'](_0x1bc613['x'], _0x1bc613['y'] - _0x1cec25);
        if (DISABLE_SOUND_MOBILE === ![] || s_bMobile === ![]) {
        }
        _0x1531e6 && screenfull['enabled'] && _0x4e3fcc['setPositio' + 'n'](_0x1e49b5['x'] + _0x49f41f, _0x1e49b5['y'] + _0x1cec25);
    }, this['unload'] = function () {
        _0x4e49ed['unload'](), _0x4e49ed = null;
        if (DISABLE_SOUND_MOBILE === ![] || s_bMobile === ![]) {
        }
        _0x1531e6 && screenfull['enabled'] && _0x4e3fcc['unload'](), s_oStage['removeAllC' + 'hildren'](), createjs['Tween']['removeAllT' + 'weens'](), s_oMenu = null;
    }, this['_onAudioTo' + 'ggle'] = function () {
        Howler['mute'](s_bAudioActive), s_bAudioActive = !s_bAudioActive;
    }, this['_onButInfo' + 'Release'] = function () {
        var _0x1e2f0c = new CCreditsPanel();
    }, this['_onButPlay' + 'Release'] = function () {
        FKGames['showInters' + 'titial']({
            'beforeShowAd': () => {
            },
            'afterShowAd': () => {
                this['unload'](), s_oMain['gotoMascot' + 'teSelectio' + 'n'](), console['log']('----------' + '开始游戏按钮插屏广告' + '----显示成功!!' + '!---------' + '-');
            }
        });
    }, this['_onFullscr' + 'eenRelease'] = function () {
        s_bFullscreen ? _0x5420c4['call'](window['document']) : _0x1531e6['call'](window['document']['documentEl' + 'ement']), sizeHandler();
    }, this['resetFulls' + 'creenBut'] = function () {
        _0x1531e6 && screenfull['enabled'] && _0x4e3fcc['setActive'](s_bFullscreen);
        ;
    }, s_oMenu = this, this['_init']();
}
var s_oMenu = null;