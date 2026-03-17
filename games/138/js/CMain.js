function CMain(_0x5e24d3) {
    var _0x24e700, _0x5ade17 = 0x0, _0x139445 = 0x0, _0x1e2586 = STATE_LOADING, _0x5a68e6, _0x3f01b6, _0x4ac092, _0x2fdfe5, _0x1ae1ef, _0x3c3a69;
    this['initContai' + 'ner'] = function () {
        s_oCanvas = document['getElement' + 'ById']('canvas'), s_oStage = new createjs['Stage'](s_oCanvas), s_oStage['preventSel' + 'ection'] = ![], createjs['Touch']['enable'](s_oStage), s_bMobile = jQuery['browser']['mobile'], s_bMobile === ![] && (s_oStage['enableMous' + 'eOver'](FPS), $('body')['on']('contextmen' + 'u', '#canvas', function (_0x5c1440) {
            return ![];
        })), s_iPrevTime = new Date()['getTime'](), createjs['Ticker']['addEventLi' + 'stener']('tick', this['_update']), createjs['Ticker']['setFPS'](FPS), navigator['userAgent']['match'](/Windows Phone/i) && (DISABLE_SOUND_MOBILE = !![]), s_oSpriteLibrary = new CSpriteLibrary(), _0x3f01b6 = new CPreloader();
    }, this['preloaderR' + 'eady'] = function () {
        this['_loadImage' + 's'](), (DISABLE_SOUND_MOBILE === ![] || s_bMobile === ![]) && this['_initSound' + 's'](), _0x24e700 = !![];
    }, this['soundLoade' + 'd'] = function () {
        _0x5ade17++;
        var _0x2ba906 = Math['floor'](_0x5ade17 / _0x139445 * 0x64);
        _0x3f01b6['refreshLoa' + 'der'](_0x2ba906), _0x5ade17 === _0x139445 && this['_onPreload' + 'erComplete']();
    }, this['_initSound' + 's'] = function () {
        var _0x3b192e = new Array();
        _0x3b192e['push']({
            'path': './sounds/',
            'filename': 'soundtrack',
            'loop': !![],
            'volume': 0x1,
            'ingamename': 'soundtrack'
        }), _0x3b192e['push']({
            'path': './sounds/',
            'filename': 'character_' + 'laugh',
            'loop': ![],
            'volume': 0x1,
            'ingamename': 'character_' + 'laugh'
        }), _0x3b192e['push']({
            'path': './sounds/',
            'filename': 'click',
            'loop': ![],
            'volume': 0x1,
            'ingamename': 'click'
        }), _0x3b192e['push']({
            'path': './sounds/',
            'filename': 'game_win',
            'loop': ![],
            'volume': 0x1,
            'ingamename': 'game_win'
        }), _0x3b192e['push']({
            'path': './sounds/',
            'filename': 'game_over',
            'loop': ![],
            'volume': 0x1,
            'ingamename': 'game_over'
        }), _0x3b192e['push']({
            'path': './sounds/',
            'filename': 'gulp',
            'loop': ![],
            'volume': 0x1,
            'ingamename': 'gulp'
        }), _0x3b192e['push']({
            'path': './sounds/',
            'filename': 'cry',
            'loop': ![],
            'volume': 0x1,
            'ingamename': 'cry'
        }), _0x3b192e['push']({
            'path': './sounds/',
            'filename': 'place_pipe',
            'loop': ![],
            'volume': 0x1,
            'ingamename': 'place_pipe'
        }), _0x3b192e['push']({
            'path': './sounds/',
            'filename': 'water_move' + 'ment',
            'loop': ![],
            'volume': 0x1,
            'ingamename': 'water_move' + 'ment'
        }), _0x139445 += _0x3b192e['length'], s_aSounds = new Array();
        for (var _0x5962f3 = 0x0; _0x5962f3 < _0x3b192e['length']; _0x5962f3++) {
            s_aSounds[_0x3b192e[_0x5962f3]['ingamename']] = new Howl({
                'src': [
                    _0x3b192e[_0x5962f3]['path'] + _0x3b192e[_0x5962f3]['filename'] + '.mp3',
                    _0x3b192e[_0x5962f3]['path'] + _0x3b192e[_0x5962f3]['filename'] + '.ogg'
                ],
                'autoplay': ![],
                'preload': !![],
                'loop': _0x3b192e[_0x5962f3]['loop'],
                'volume': _0x3b192e[_0x5962f3]['volume'],
                'onload': s_oMain['soundLoade' + 'd']()
            });
        }
    }, this['_loadImage' + 's'] = function () {
        s_oSpriteLibrary['init'](this['_onImagesL' + 'oaded'], this['_onAllImag' + 'esLoaded'], this);
        for (var _0x306b7a = 0x0; _0x306b7a < 0x2; _0x306b7a++) {
            for (var _0x3bdaec = 0x0; _0x3bdaec < 0x7c; _0x3bdaec++) {
                s_oSpriteLibrary['addSprite']('character' + _0x306b7a + '_' + _0x3bdaec, './sprites/' + 'character' + _0x306b7a + ('/character' + '_') + _0x3bdaec + '.png');
            }
            ;
            s_oSpriteLibrary['addSprite']('cloud_' + _0x306b7a, './sprites/' + 'cloud_' + _0x306b7a + '.png'), s_oSpriteLibrary['addSprite']('but_charac' + 'ter' + _0x306b7a, './sprites/' + 'but_charac' + 'ter' + _0x306b7a + '.png'), s_oSpriteLibrary['addSprite']('but_level_' + _0x306b7a, './sprites/' + 'but_level_' + _0x306b7a + '.png');
        }
        ;
        for (var _0x306b7a = 0x0; _0x306b7a < 0xce; _0x306b7a++) {
            s_oSpriteLibrary['addSprite']('soda_bottl' + 'e_' + _0x306b7a, './sprites/' + 'soda_bottl' + 'e/soda_bot' + 'tle_' + _0x306b7a + '.png');
        }
        ;
        s_oSpriteLibrary['addSprite']('but_play', './sprites/' + 'but_play.p' + 'ng'), s_oSpriteLibrary['addSprite']('but_exit', './sprites/' + 'but_exit.p' + 'ng'), s_oSpriteLibrary['addSprite']('but_settin' + 'gs', './sprites/' + 'but_settin' + 'gs.png'), s_oSpriteLibrary['addSprite']('but_help', './sprites/' + 'but_help.p' + 'ng'), s_oSpriteLibrary['addSprite']('but_info', './sprites/' + 'but_info.p' + 'ng'), s_oSpriteLibrary['addSprite']('but_contin' + 'ue', './sprites/' + 'but_contin' + 'ue.png'), s_oSpriteLibrary['addSprite']('but_fullsc' + 'reen', './sprites/' + 'but_fullsc' + 'reen.png'), s_oSpriteLibrary['addSprite']('but_yes', './sprites/' + 'but_yes.pn' + 'g'), s_oSpriteLibrary['addSprite']('but_no', './sprites/' + 'but_no.png'), s_oSpriteLibrary['addSprite']('bg_menu', './sprites/' + 'bg_menu.jp' + 'g'), s_oSpriteLibrary['addSprite']('bg_level_s' + 'elect', './sprites/' + 'bg_level_s' + 'elect.jpg'), s_oSpriteLibrary['addSprite']('sky', './sprites/' + 'sky.png'), s_oSpriteLibrary['addSprite']('buildings', './sprites/' + 'buildings.' + 'png'), s_oSpriteLibrary['addSprite']('dispenser_' + 'container', './sprites/' + 'dispenser_' + 'container.' + 'png'), s_oSpriteLibrary['addSprite']('dispenser_' + 'tube', './sprites/' + 'dispenser_' + 'tube.png'), s_oSpriteLibrary['addSprite']('floor', './sprites/' + 'floor.png'), s_oSpriteLibrary['addSprite']('frame', './sprites/' + 'frame.png'), s_oSpriteLibrary['addSprite']('frame_logo', './sprites/' + 'frame_logo' + '.png'), s_oSpriteLibrary['addSprite']('glass', './sprites/' + 'glass.png'), s_oSpriteLibrary['addSprite']('score_pane' + 'l', './sprites/' + 'score_pane' + 'l.png'), s_oSpriteLibrary['addSprite']('msg_box', './sprites/' + 'msg_box.pn' + 'g'), s_oSpriteLibrary['addSprite']('bg_help', './sprites/' + 'bg_help.pn' + 'g'), s_oSpriteLibrary['addSprite']('audio_icon', './sprites/' + 'audio_icon' + '.png'), s_oSpriteLibrary['addSprite']('but_home', './sprites/' + 'but_home.p' + 'ng'), s_oSpriteLibrary['addSprite']('but_restar' + 't', './sprites/' + 'but_restar' + 't.png'), s_oSpriteLibrary['addSprite']('logo_ctl', './sprites/' + 'logo_ctl.p' + 'ng'), s_oSpriteLibrary['addSprite']('pipe1a', './sprites/' + 'pipe1a.png'), s_oSpriteLibrary['addSprite']('pipe1b', './sprites/' + 'pipe1b.png'), s_oSpriteLibrary['addSprite']('pipe2a', './sprites/' + 'pipe2a.png'), s_oSpriteLibrary['addSprite']('pipe2b', './sprites/' + 'pipe2b.png'), s_oSpriteLibrary['addSprite']('goal_icon', './sprites/' + 'goal_icon.' + 'png'), s_oSpriteLibrary['addSprite']('star', './sprites/' + 'star.png'), s_oSpriteLibrary['addSprite']('starbox', './sprites/' + 'starbox.pn' + 'g'), s_oSpriteLibrary['addSprite']('arrow_sele' + 'ct_level', './sprites/' + 'arrow_sele' + 'ct_level.p' + 'ng'), _0x139445 += s_oSpriteLibrary['getNumSpri' + 'tes'](), s_oSpriteLibrary['loadSprite' + 's']();
    }, this['_onImagesL' + 'oaded'] = function () {
        _0x5ade17++;
        var _0xb5d236 = Math['floor'](_0x5ade17 / _0x139445 * 0x64);
        _0x3f01b6['refreshLoa' + 'der'](_0xb5d236), _0x5ade17 === _0x139445 && this['_onPreload' + 'erComplete']();
    }, this['_onAllImag' + 'esLoaded'] = function () {
    }, this['_onPreload' + 'erComplete'] = function () {
        try {
            saveItem('ls_availab' + 'le', 'ok');
        } catch (_0x33ef87) {
            s_bStorageAvailable = ![];
        }
        _0x3f01b6['unload'](), !isIOS() && (s_oSoundtrack = playSound('soundtrack', 0x1, !![])), FKGames['init']({
            'debug': !![],
            'appName': '',
            'gamemonetizeId': 'ptrno2lf5v74droy0l5k7yykt4wl19fw',
            'gamedistributionId': '',
            'complete': () => {
                this['gotoMenu'](), console['log']('----------' + '初始化成功!!!--' + '--------');
            }
        });
    }, this['onAllPrelo' + 'aderImages' + 'Loaded'] = function () {
        this['_loadImage' + 's']();
    }, this['gotoMenu'] = function () {
        _0x2fdfe5 = new CMenu(), _0x1e2586 = STATE_MENU;
    }, this['gotoGame'] = function () {
        FKGames['showInters' + 'titial']({
            'beforeShowAd': () => {
            },
            'afterShowAd': () => {
                _0x3c3a69 = new CGame(_0x5a68e6), _0x1e2586 = STATE_GAME, console['log']('----------' + '开始游戏按钮插屏广告' + '----显示成功!!' + '!---------' + '-');
            }
        });
    }, this['gotoMascot' + 'teSelectio' + 'n'] = function () {
        _0x4ac092 = new CMascotteSelection(), _0x1e2586 = STATE_MASCOTTE_SELECTION;
    }, this['gotoLevelM' + 'enu'] = function () {
        new CLevelMenu(), _0x1e2586 = STATE_LEVEL_SELECTION;
    }, this['gotoSelect' + 'Mode'] = function () {
        new CSelectMode();
    }, this['gotoHelp'] = function () {
        _0x1ae1ef = new CHelp(), _0x1e2586 = STATE_HELP;
    }, this['stopUpdate'] = function () {
        _0x24e700 = ![], createjs['Ticker']['paused'] = !![], $('#block_gam' + 'e')['css']('display', 'block'), (DISABLE_SOUND_MOBILE === ![] || s_bMobile === ![]) && Howler['mute'](!![]);
    }, this['startUpdat' + 'e'] = function () {
        s_iPrevTime = new Date()['getTime'](), _0x24e700 = !![], createjs['Ticker']['paused'] = ![], $('#block_gam' + 'e')['css']('display', 'none'), (DISABLE_SOUND_MOBILE === ![] || s_bMobile === ![]) && (s_bAudioActive && Howler['mute'](![]));
    }, this['_update'] = function (_0x393ef2) {
        if (_0x24e700 === ![])
            return;
        var _0xc1fa75 = new Date()['getTime']();
        s_iTimeElaps = _0xc1fa75 - s_iPrevTime, s_iCntTime += s_iTimeElaps, s_iCntFps++, s_iPrevTime = _0xc1fa75, s_iCntTime >= 0x3e8 && (s_iCurFps = s_iCntFps, s_iCntTime -= 0x3e8, s_iCntFps = 0x0), _0x1e2586 === STATE_GAME && _0x3c3a69['update'](), s_oStage['update'](_0x393ef2);
    }, ENABLE_CHECK_ORIENTATION = _0x5e24d3['check_orie' + 'ntation'], ENABLE_FULLSCREEN = ![], STAR_SCORE = _0x5e24d3['star_score'], ALL_LEVELS_UNLOCKED = _0x5e24d3['all_levels' + '_unlocked'], _0x5a68e6 = _0x5e24d3, s_oMain = this, this['initContai' + 'ner']();
}
;
var s_bMobile, s_bAudioActive = !![], s_iCntTime = 0x0, s_iTimeElaps = 0x0, s_iPrevTime = 0x0, s_iCntFps = 0x0, s_iCurFps = 0x0, s_aScores, s_aStars, s_iLastLevel = 0x1, s_bFullscreen = ![], s_bStorageAvailable = !![], s_oDrawLayer, s_oStage, s_oMain, s_oSpriteLibrary, s_oSoundtrack = null, s_oCanvas, s_iIndexPlayer, s_iMascotteType;