function CGame() {
    var _0x1e4a5b, _0x40e7ac, _0xf42d87, _0x576d34, _0x3b7ddd, _0x2834b0, _0x8ebcb9, _0x7601c, _0x49fb3b, _0x3ef2d0, _0x1357c6, _0x31d4ec, _0x5c17c4, _0x28f2c1, _0x1cf58b, _0x249c78, _0x337d56, _0x459084, _0x2c0e2a, _0x5c589c, _0x56b041, _0x2b6804, _0x24a8e1, _0x195323, _0x4bcbf0, _0x122f94, _0x403aae, _0x33a4f1, _0x330267, _0x5eed12, _0x5e777c, _0x26a270, _0x331d09, _0x4403fe, _0x25ec85, _0x3c9b1e, _0x5069b6, _0x441626;
    this['_init'] = function () {
        s_oTweenController = new CTweenController(), this['_resetVari' + 'ables'](), $(s_oMain)['trigger']('start_leve' + 'l', _0x40e7ac + 0x1), _0x5c17c4 = new createjs['Container'](), s_oStage['addChild'](_0x5c17c4), this['_initBackg' + 'round'](), _0x28f2c1 = new CBoard(_0x5c17c4, _0x40e7ac), this['_initDispe' + 'nser'](), _0x56b041 = new CMascotte(_0x5c17c4), this['_initEndPi' + 'pe'](), this['_addFrameL' + 'ogo'](), _0x2b6804 = new CInterface(_0x40e7ac, _0x5c17c4), this['_resetLeve' + 'lInformati' + 'on'](), _0x2b6804['refreshSco' + 're'](_0x1e4a5b), _0x459084 = new createjs['Container'](), _0x5c17c4['addChild'](_0x459084), _0x40e7ac === 0x0 ? _0x2c0e2a = CHelpPanel() : this['_onExitHel' + 'p'](), setVolume('soundtrack', 0.5);
    }, this['_initBackg' + 'round'] = function () {
        var _0xe51ac3 = s_oSpriteLibrary['getSprite']('sky');
        _0x4bcbf0 = createBitmap(_0xe51ac3), _0x4bcbf0['cache'](0x0, 0x0, CANVAS_WIDTH, CANVAS_HEIGHT), _0x5c17c4['addChild'](_0x4bcbf0), this['_initCloud' + 's'](), this['_resetMove' + 'mentCloud0'](), this['_resetMove' + 'mentCloud1'](), this['_resetMove' + 'mentCloud2']();
        var _0xe51ac3 = s_oSpriteLibrary['getSprite']('buildings'), _0x4afa40 = createBitmap(_0xe51ac3);
        _0x4afa40['y'] = 0x91;
        var _0xe51ac3 = s_oSpriteLibrary['getSprite']('floor'), _0x44e2e3 = createBitmap(_0xe51ac3);
        _0x44e2e3['y'] = 0x178;
        var _0xe51ac3 = s_oSpriteLibrary['getSprite']('glass'), _0x1b2bc1 = createBitmap(_0xe51ac3);
        _0x1b2bc1['regX'] = _0xe51ac3['width'] * 0.5, _0x1b2bc1['regY'] = _0xe51ac3['height'] * 0.5, _0x1b2bc1['x'] = CANVAS_WIDTH_HALF, _0x1b2bc1['y'] = CANVAS_HEIGHT_HALF + 0xe;
        var _0xe51ac3 = s_oSpriteLibrary['getSprite']('frame'), _0x307d83 = createBitmap(_0xe51ac3);
        _0x307d83['regX'] = _0xe51ac3['width'] * 0.5, _0x307d83['regY'] = _0xe51ac3['height'] * 0.5, _0x307d83['x'] = CANVAS_WIDTH_HALF, _0x307d83['y'] = CANVAS_HEIGHT_HALF - 0xc, _0x5c17c4['addChild'](_0x4afa40, _0x44e2e3, _0x1b2bc1, _0x307d83);
    }, this['_addFrameL' + 'ogo'] = function () {
        var _0x4e269f = s_oSpriteLibrary['getSprite']('frame_logo'), _0x4e7833 = createBitmap(_0x4e269f);
        _0x4e7833['regX'] = _0x4e269f['width'] * 0.5, _0x4e7833['regY'] = _0x4e269f['height'] * 0.5, _0x4e7833['x'] = CANVAS_WIDTH_HALF - 0xf, _0x4e7833['y'] = 0x3a, _0x5c17c4['addChild'](_0x4e7833), new createjs['Tween']['get'](_0x4e7833, { 'loop': !![] })['wait'](FRAME_LOGO_PULSE_WAIT)['to']({
            'scaleX': FRAME_LOGO_PULSE_VAR,
            'scaleY': FRAME_LOGO_PULSE_VAR
        }, FRAME_LOGO_PULSE_SPEED, createjs['Ease']['backIn'])['to']({
            'scaleX': 0x1,
            'scaleY': 0x1
        }, FRAME_LOGO_PULSE_SPEED, createjs['Ease']['backIn'])['to']({
            'scaleX': FRAME_LOGO_PULSE_VAR,
            'scaleY': FRAME_LOGO_PULSE_VAR
        }, FRAME_LOGO_PULSE_SPEED, createjs['Ease']['backIn'])['to']({
            'scaleX': 0x1,
            'scaleY': 0x1
        }, FRAME_LOGO_PULSE_SPEED, createjs['Ease']['backIn']);
    }, this['_updateTot' + 'alScore'] = function () {
        _0x1e4a5b = 0x0;
        for (var _0x4ef236 = 0x0; _0x4ef236 < s_aScores['length']; _0x4ef236++) {
            _0x1e4a5b += s_aScores[_0x4ef236];
        }
        ;
    }, this['_initDispe' + 'nser'] = function () {
        var _0x5111e1 = 0x84, _0x114f6a = 0x1c4, _0x4180b3 = {
                'images': [s_oSpriteLibrary['getSprite']('dispenser_' + 'container')],
                'frames': {
                    'width': _0x5111e1,
                    'height': _0x114f6a,
                    'regX': _0x5111e1 * 0.5,
                    'regY': _0x114f6a * 0.5
                },
                'animations': {
                    'idle': [
                        0x0,
                        0x27,
                        'idle'
                    ]
                },
                'framerate': FPS_DISPENSER
            }, _0x3ff3ee = new createjs['SpriteShee' + 't'](_0x4180b3);
        _0x5c589c = createSprite(_0x3ff3ee, 'idle', 0x0, 0x0, _0x5111e1, _0x114f6a), _0x5c589c['x'] = 0x113, _0x5c589c['y'] = 0x18b, _0x5c17c4['addChild'](_0x5c589c);
    }, this['_initCloud' + 's'] = function () {
        var _0x2b1731 = s_oSpriteLibrary['getSprite']('cloud_0');
        _0x1cf58b = createBitmap(_0x2b1731), _0x1cf58b['x'] = -0x64, _0x1cf58b['y'] = 0x32;
        var _0x2b1731 = s_oSpriteLibrary['getSprite']('cloud_1');
        _0x249c78 = createBitmap(_0x2b1731), _0x249c78['x'] = -0xc8, _0x249c78['y'] = 0xb4;
        var _0x2b1731 = s_oSpriteLibrary['getSprite']('cloud_1');
        _0x337d56 = createBitmap(_0x2b1731), _0x337d56['scaleX'] = -0x1, _0x337d56['x'] = 0x320, _0x337d56['y'] = 0x96, _0x5c17c4['addChild'](_0x1cf58b, _0x249c78, _0x337d56), _0x403aae = ![], _0x33a4f1 = ![], _0x330267 = ![];
    }, this['_resetVari' + 'ables'] = function () {
        _0x40e7ac = s_oLevelSettings['getCurrent' + 'Level'](), this['_updateTot' + 'alScore'](), _0x576d34 = 0x0, _0x3b7ddd = 0x0, _0x24a8e1 = null, _0x195323 = null, _0x7601c = ![], _0x49fb3b = ![], _0x3ef2d0 = ![], _0x1357c6 = ![], _0x31d4ec = ![];
    }, this['_resetLeve' + 'lInformati' + 'on'] = function () {
        _0xf42d87 = MOVES_INFO, _0x2b6804['updateLeve' + 'lMoves'](_0xf42d87), _0x2b6804['refreshSco' + 're'](_0x1e4a5b);
    }, this['_initEndPi' + 'pe'] = function () {
        var _0x4f1c37 = 0xc0, _0x31fb8d = 0x1c8, _0x4cd4ed = [];
        for (var _0x4b8028 = 0x0; _0x4b8028 < 0xcd; _0x4b8028++) {
            _0x4cd4ed['push'](s_oSpriteLibrary['getSprite']('soda_bottl' + 'e_' + _0x4b8028));
        }
        ;
        var _0xbd07a1 = {
                'images': _0x4cd4ed,
                'frames': {
                    'width': _0x4f1c37,
                    'height': _0x31fb8d
                },
                'animations': {
                    'IDLE': [
                        0x0,
                        0x0,
                        'IDLE'
                    ],
                    'ANIMATION': [
                        0x1,
                        0x9,
                        ![]
                    ],
                    'END_ANIMATION': [
                        0xa,
                        0xcc,
                        ![]
                    ]
                },
                'framerate': FPS_PIPE_END_FLOW
            }, _0x417815 = new createjs['SpriteShee' + 't'](_0xbd07a1);
        _0x122f94 = createSprite(_0x417815, 'IDLE', _0x4f1c37 * 0.5, _0x31fb8d * 0.5, _0x4f1c37, _0x31fb8d), _0x122f94['x'] = 0x3f2, _0x122f94['y'] = 0xad, _0x5c17c4['addChild'](_0x122f94), _0x8ebcb9 = _0x28f2c1['findSquare' + 'Position'](END_POSITION_COLUMN, END_POSITION_ROW);
    }, this['_unload'] = function () {
        _0x7601c = ![], _0x28f2c1['unload'](), _0x24a8e1 !== null && _0x24a8e1['unload'](), _0x195323 !== null && _0x195323['unload'](), _0x2b6804['unload'](), _0x5c17c4['removeAllC' + 'hildren'](), createjs['Tween']['removeAllT' + 'weens'](), s_bMobile === ![] && (document['onkeydown'] = null, document['onkeyup'] = null);
    }, this['onExit'] = function () {
        FKGames['showInters' + 'titial']({
            'beforeShowAd': () => {
            },
            'afterShowAd': () => {
                this['_unload'](), $(s_oMain)['trigger']('show_inter' + 'level_ad'), $(s_oMain)['trigger']('end_sessio' + 'n'), setVolume('soundtrack', 0x1), s_oMain['gotoMenu'](), console['log']('----------' + '开始游戏按钮插屏广告' + '----显示成功!!' + '!---------' + '-');
            }
        });
    }, this['_onExitHel' + 'p'] = function () {
        _0x7601c = !![], _0x403aae = !![], _0x33a4f1 = !![], _0x330267 = !![];
    }, this['pause'] = function (_0x2eb1ad) {
        _0x7601c = !_0x2eb1ad, _0x1357c6 = _0x2eb1ad;
        var _0x2f3aea = _0x28f2c1['getArray']();
        for (var _0xe9bb99 = 0x0; _0xe9bb99 < _0x2f3aea['length']; _0xe9bb99++) {
            _0x2f3aea[_0xe9bb99]['setPaused'](_0x2eb1ad);
        }
    }, this['_calculate' + 'LevelStars'] = function () {
        if (_0xf42d87 > MOVES_INFO / STARS_VARIABLE_MAX)
            _0x3b7ddd = 0x3;
        else
            _0xf42d87 > MOVES_INFO / STARS_VARIABLE_MIN && _0xf42d87 <= MOVES_INFO / STARS_VARIABLE_MAX ? _0x3b7ddd = 0x2 : _0x3b7ddd = 0x1;
    }, this['updateAndS' + 'aveScores'] = function () {
        this['_calculate' + 'LevelStars'](), s_aStars[_0x40e7ac] < _0x3b7ddd && (s_aStars[_0x40e7ac] = _0x3b7ddd, setItemJson('plumber_so' + 'da_stars', s_aStars)), _0x576d34 = _0x3b7ddd * STAR_SCORE, s_aScores[_0x40e7ac] < _0x576d34 && (s_aScores[_0x40e7ac] = _0x576d34), this['_updateTot' + 'alScore'](), s_iLastLevel < _0x40e7ac + 0x1 && (s_iLastLevel = _0x40e7ac + 0x1), s_aScores[s_oLevelSettings['getCurrent' + 'Level']()] < _0x576d34 && (s_aScores[s_oLevelSettings['getCurrent' + 'Level']()] = _0x576d34, setItemJson('plumber_so' + 'da_scores', s_aScores)), s_iLastLevel < s_oLevelSettings['getNextLev' + 'el']() && (s_iLastLevel = s_oLevelSettings['getNextLev' + 'el'](), saveItem('plumber_so' + 'da_last_le' + 'vel', s_iLastLevel)), LS_SCORES = s_aScores, LS_STARS = s_aStars, LS_LAST_LEVEL = s_iLastLevel;
    }, this['gameWin'] = function () {
        this['_stopSound' + 'trackAndRe' + 'start'](0x9c4), _0x7601c = ![], _0x24a8e1 === null && (playSound('character_' + 'laugh', 0x1, ![]), playSound('game_win', 0x1, ![]), this['updateAndS' + 'aveScores'](), _0x24a8e1 = CWinPanel(_0x459084, _0x40e7ac, _0x1e4a5b, _0x576d34, _0x3b7ddd), _0x24a8e1['show'](_0x56b041), _0x56b041['changeCont' + 'ainer'](_0x24a8e1['getContain' + 'er']()));
    }, this['_gameOver'] = function () {
        this['_stopSound' + 'trackAndRe' + 'start'](0xdac), _0x195323 === null && (playSound('cry', 0x1, ![]), playSound('game_over', 0x1, ![]), _0x195323 = CLosePanel(_0x459084, _0x1e4a5b), _0x195323['show'](_0x56b041), _0x56b041['playAnimat' + 'ion']('lose'), _0x56b041['changeCont' + 'ainer'](_0x195323['getContain' + 'er']()));
    }, this['_stopSound' + 'trackAndRe' + 'start'] = function (_0x26bdd3) {
        stopSound('soundtrack');
        soundPlaying('soundtrack') === ![] && setTimeout(function () {
            playSound('soundtrack', 0.5, !![]);
        }, _0x26bdd3);
        ;
    }, this['restartGam' + 'e'] = function () {
        FKGames['showInters' + 'titial']({
            'beforeShowAd': () => {
            },
            'afterShowAd': () => {
                this['_unload'](), $(s_oMain)['trigger']('restart_le' + 'vel', _0x40e7ac), s_oLevelSettings['loadLevel'](_0x40e7ac), s_oMain['gotoGame'](), console['log']('----------' + '开始游戏按钮插屏广告' + '----显示成功!!' + '!---------' + '-');
            }
        });
    }, this['onNextLeve' + 'l'] = function () {
        $(s_oMain)['trigger']('show_inter' + 'level_ad'), this['_unload'](), $(s_oMain)['trigger']('end_level', _0x40e7ac), s_oLevelSettings['loadLevel'](_0x40e7ac + 0x1), s_oMain['gotoGame']();
    }, this['endLevel'] = function () {
        FKGames['showInters' + 'titial']({
            'beforeShowAd': () => {
            },
            'afterShowAd': () => {
                _0x2b6804['refreshSco' + 're'](_0x1e4a5b), $(s_oMain)['trigger']('end_level', _0x40e7ac), console['log']('----------' + '开始游戏按钮插屏广告' + '----显示成功!!' + '!---------' + '-');
            }
        });
    }, this['_openWater' + 'OnStartPip' + 'e'] = function () {
        var _0x3e7e3b = _0x28f2c1['getArray']();
        for (var _0x30aae1 = 0x0; _0x30aae1 < _0x3e7e3b['length']; _0x30aae1++) {
            var _0x279dd9 = _0x3e7e3b[_0x30aae1]['getPipeInf' + 'os']();
            _0x279dd9['img'] === PIPE_IMG_START && (_0x7601c = ![], this['_startWate' + 'r'](_0x3e7e3b[_0x30aae1]['getColumn'](), _0x3e7e3b[_0x30aae1]['getRow'](), PROVENIENCE_TOP));
        }
    }, this['_checkLeve' + 'l'] = function () {
        if (this['_checkIfSo' + 'lutionIsFo' + 'und']() === !![])
            this['_openWater' + 'OnStartPip' + 'e']();
        else {
            if (_0xf42d87 === 0x0)
                _0x7601c = ![], this['_gameOver']();
            else
                return ![];
        }
    }, this['_checkIfSo' + 'lutionIsFo' + 'und'] = function () {
        var _0x477472 = new Array();
        for (var _0x93664 = 0x0; _0x93664 < PIECES_SOLUTION['length']; _0x93664++) {
            var _0x16c53e = _0x28f2c1['findSquare' + 'WithItsPos' + 'ition'](PIECES_SOLUTION[_0x93664]['column'], PIECES_SOLUTION[_0x93664]['row']);
            _0x16c53e['isCorrectl' + 'yRotated']() === !![] && _0x477472['push'](_0x16c53e);
        }
        ;
        return _0x477472['length'] === PIECES_SOLUTION['length'] ? !![] : ![];
    }, this['onClickedP' + 'ipe'] = function () {
        playSound('place_pipe', 0x1, ![]), this['_subtractM' + 'oves'](), this['_checkLeve' + 'l']();
    }, this['_subtractM' + 'oves'] = function () {
        if (_0xf42d87 < 0x1)
            return;
        _0xf42d87--, _0x2b6804['updateLeve' + 'lMoves'](_0xf42d87);
    }, this['removeLast' + 'Score'] = function () {
        s_aScores[_0x40e7ac] = 0x0;
    }, this['_startWate' + 'r'] = function (_0x4074ba, _0x48e650, _0x5bf220) {
        !_0x49fb3b && (_0x49fb3b = !![]);
        _0x2834b0 = _0x28f2c1['findSquare' + 'Position'](_0x4074ba, _0x48e650);
        var _0x4f86ca = _0x28f2c1['getArray']();
        for (var _0x416fdf = 0x0; _0x416fdf < _0x4f86ca['length']; _0x416fdf++) {
            if (_0x4f86ca[_0x416fdf]['getColumn']() === _0x4074ba && _0x4f86ca[_0x416fdf]['getRow']() === _0x48e650) {
                _0x4f86ca[_0x416fdf]['setWatered'](_0x5bf220);
                soundPlaying('water_move' + 'ment') === ![] && playSound('water_move' + 'ment', 0x1, ![]);
                ;
            }
        }
        ;
    }, this['checkNextS' + 'quare'] = function (_0x29e799, _0x58d403, _0x5f648c, _0x5e28fd) {
        var _0x1f6441, _0x4d20f3 = [
                _0x5f648c,
                _0x5f648c + 0x1,
                _0x5f648c,
                _0x5f648c - 0x1
            ], _0x508c9a = [
                _0x5e28fd - 0x1,
                _0x5e28fd,
                _0x5e28fd + 0x1,
                _0x5e28fd
            ], _0x305dc1 = [
                PROVENIENCE_BOTTOM,
                PROVENIENCE_LEFT,
                PROVENIENCE_TOP,
                PROVENIENCE_RIGHT
            ], _0x5872b6 = [
                PROVENIENCE_TOP,
                PROVENIENCE_RIGHT,
                PROVENIENCE_BOTTOM,
                PROVENIENCE_LEFT
            ];
        if (_0x29e799['img'] === PIPE_IMG_ANGLE) {
            if (_0x58d403 === PROVENIENCE_TOP || _0x58d403 === PROVENIENCE_BOTTOM) {
                if (_0x29e799['open_right'] === !![])
                    _0x1f6441 = PROVENIENCE_RIGHT;
                else
                    _0x29e799['open_left'] === !![] && (_0x1f6441 = PROVENIENCE_LEFT);
                ;
            } else {
                if (_0x29e799['open_top'] === !![])
                    _0x1f6441 = PROVENIENCE_TOP;
                else
                    _0x29e799['open_botto' + 'm'] === !![] && (_0x1f6441 = PROVENIENCE_BOTTOM);
                ;
            }
        } else {
            switch (_0x58d403) {
            case PROVENIENCE_TOP: {
                    _0x1f6441 = PROVENIENCE_BOTTOM;
                    break;
                }
                ;
            case PROVENIENCE_BOTTOM: {
                    _0x1f6441 = PROVENIENCE_TOP;
                    break;
                }
                ;
            case PROVENIENCE_LEFT: {
                    _0x1f6441 = PROVENIENCE_RIGHT;
                    break;
                }
                ;
            case PROVENIENCE_RIGHT: {
                    _0x1f6441 = PROVENIENCE_LEFT;
                    break;
                }
                ;
            }
            ;
        }
        this['_calculate' + 'NextPositi' + 'onAndMove'](_0x4d20f3[_0x1f6441], _0x508c9a[_0x1f6441], _0x305dc1[_0x1f6441], _0x5872b6[_0x1f6441], _0x305dc1[_0x1f6441]);
    }, this['_calculate' + 'NextPositi' + 'onAndMove'] = function (_0x29ab33, _0xc87b8e, _0x48c53d, _0x653899, _0x446059) {
        var _0x41cfe8 = _0x28f2c1['findSquare' + 'Position'](_0x29ab33, _0xc87b8e);
        this['_checkForF' + 'inishedCir' + 'cuit'](_0x41cfe8);
        if (_0x41cfe8 === undefined)
            return;
        var _0x3482d4 = _0x28f2c1['findSquare' + 'WithItsPos' + 'ition'](_0x29ab33, _0xc87b8e);
        this['_moveToNex' + 'tSquare'](_0x29ab33, _0xc87b8e, _0x3482d4, _0x48c53d, _0x653899, _0x446059);
    }, this['onPipeAnim' + 'ationEnd'] = function (_0x183572, _0xa6a469, _0x34c4bc, _0x5cee2c) {
        _0x31d4ec === !![] ? (_0x56b041['playAnimat' + 'ion']('win'), this['_startEndP' + 'ipeAnimati' + 'on']()) : this['checkNextS' + 'quare'](_0x183572, _0xa6a469, _0x34c4bc, _0x5cee2c);
    }, this['_checkForF' + 'inishedCir' + 'cuit'] = function (_0x3ab6cf) {
        if (_0x3ab6cf === _0x8ebcb9) {
            _0x31d4ec = !![];
            return;
        }
        ;
    }, this['_startEndP' + 'ipeAnimati' + 'on'] = function () {
        soundPlaying('water_move' + 'ment') === ![] && playSound('water_move' + 'ment', 0x1, ![]);
        ;
        var _0x23c280 = this;
        _0x122f94['gotoAndPla' + 'y']('ANIMATION'), _0x122f94['on']('animatione' + 'nd', function () {
            _0x24a8e1 === null && (_0x122f94['gotoAndPla' + 'y']('END_ANIMAT' + 'ION'), _0x23c280['gameWin']());
        });
    }, this['_moveToNex' + 'tSquare'] = function (_0xdfa4e3, _0x404595, _0x1d9eb6, _0xceb843, _0x981c6e, _0x544163) {
        if (_0x1d9eb6 === undefined)
            return;
        var _0x585575, _0x5d1857, _0x122038 = _0x1d9eb6['getPipeInf' + 'os']();
        if (_0x122038['img'] === PIPE_IMG_HORIZONTAL)
            _0x5d1857 = _0x981c6e;
        else
            _0x122038['img'] === PIPE_IMG_ANGLE && (_0x5d1857 = _0x544163);
        ;
        switch (_0x5d1857) {
        case PROVENIENCE_TOP: {
                _0x585575 = _0x122038['open_top'];
                break;
            }
            ;
        case PROVENIENCE_RIGHT: {
                _0x585575 = _0x122038['open_right'];
                break;
            }
            ;
        case PROVENIENCE_BOTTOM: {
                _0x585575 = _0x122038['open_botto' + 'm'];
                break;
            }
            ;
        case PROVENIENCE_LEFT: {
                _0x585575 = _0x122038['open_left'];
                break;
            }
            ;
        }
        _0x585575 === !![] && this['_startWate' + 'r'](_0xdfa4e3, _0x404595, _0xceb843);
        ;
    }, this['isStartGam' + 'e'] = function () {
        return _0x7601c;
    }, this['_resetMove' + 'mentCloud0'] = function () {
        _0x5eed12 = 0x0, _0x331d09 = _0x1cf58b['x'], _0x3c9b1e = CLOUDS_MOVEMENT_DESTINATION;
    }, this['_resetMove' + 'mentCloud1'] = function () {
        _0x5e777c = 0x0, _0x4403fe = _0x249c78['x'], _0x5069b6 = CLOUDS_MOVEMENT_DESTINATION;
    }, this['_resetMove' + 'mentCloud2'] = function () {
        _0x26a270 = 0x0, _0x25ec85 = _0x337d56['x'], _0x441626 = CLOUDS_MOVEMENT_DESTINATION;
    }, this['_updateClo' + 'ud0Movemen' + 't'] = function () {
        if (!_0x403aae)
            return;
        ;
        _0x5eed12 += s_iTimeElaps;
        if (_0x5eed12 >= CLOUD_0_MOVEMENT_SPEED)
            _0x1cf58b['x'] = CLOUDS_MOVEMENT_RESET_START, this['_resetMove' + 'mentCloud0']();
        else {
            var _0x51930d = s_oTweenController['easeLinear'](_0x5eed12, 0x0, 0x1, CLOUD_0_MOVEMENT_SPEED), _0x51213e = s_oTweenController['tweenValue'](_0x331d09, _0x3c9b1e, _0x51930d);
            _0x1cf58b['x'] = _0x51213e;
        }
    }, this['_updateClo' + 'ud1Movemen' + 't'] = function () {
        if (!_0x33a4f1)
            return;
        ;
        _0x5e777c += s_iTimeElaps;
        if (_0x5e777c >= CLOUD_1_MOVEMENT_SPEED)
            _0x249c78['x'] = CLOUDS_MOVEMENT_RESET_START, this['_resetMove' + 'mentCloud1']();
        else {
            var _0x41784c = s_oTweenController['easeLinear'](_0x5e777c, 0x0, 0x1, CLOUD_1_MOVEMENT_SPEED), _0x5e05b3 = s_oTweenController['tweenValue'](_0x4403fe, _0x5069b6, _0x41784c);
            _0x249c78['x'] = _0x5e05b3;
        }
    }, this['_updateClo' + 'ud2Movemen' + 't'] = function () {
        if (!_0x330267)
            return;
        ;
        _0x26a270 += s_iTimeElaps;
        if (_0x26a270 >= CLOUD_2_MOVEMENT_SPEED)
            _0x337d56['x'] = CLOUDS_MOVEMENT_RESET_START, this['_resetMove' + 'mentCloud2']();
        else {
            var _0x1b27dc = s_oTweenController['easeLinear'](_0x26a270, 0x0, 0x1, CLOUD_2_MOVEMENT_SPEED), _0x343752 = s_oTweenController['tweenValue'](_0x25ec85, _0x441626, _0x1b27dc);
            _0x337d56['x'] = _0x343752;
        }
    }, this['update'] = function () {
        this['_updateClo' + 'ud0Movemen' + 't'](), this['_updateClo' + 'ud1Movemen' + 't'](), this['_updateClo' + 'ud2Movemen' + 't']();
    }, s_oGame = this, this['_init']();
}
var s_oGame, s_oTweenController;