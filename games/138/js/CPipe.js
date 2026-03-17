function CPipe(_0x29b885, _0x3c9b1c, _0x47d5d2, _0x47a14c, _0x2e1270, _0x18f355, _0x4c216a) {
    var _0x551424, _0x3d32b7, _0x4b5bc9, _0x37fde9, _0x488c72, _0x23c5cb, _0x97ed03, _0x4c5b98, _0x33fb1d;
    this['_init'] = function () {
        _0x488c72 = _0x3c9b1c, _0x23c5cb = _0x47d5d2, _0x37fde9 = _0x2e1270, _0x551424 = new Array(), _0x551424 = SQUARE_TYPES[_0x29b885], _0x97ed03 = ![], _0x4c5b98 = ![], _0x33fb1d = ![];
        if (_0x551424['img'] === PIPE_IMG_START) {
            var _0x46680d = {
                    'images': [s_oSpriteLibrary['getSprite']('dispenser_' + 'tube')],
                    'frames': {
                        'width': 0xaa,
                        'height': 0x82
                    },
                    'animations': {
                        'PIPE_START': [
                            0x0,
                            0x0
                        ],
                        'PIPE_START_WATER': [
                            0x1,
                            0x1a,
                            ![]
                        ]
                    },
                    'framerate': FPS_LIQUID_FLOW
                }, _0x543a6f = new createjs['SpriteShee' + 't'](_0x46680d);
            _0x4b5bc9 = createSprite(_0x543a6f, 'PIPE_START', 0x0, 0x0, 0xaa, 0x82), _0x4b5bc9['regX'] = 0xaa * 0.5 + 0x36, _0x4b5bc9['regY'] = 0x82 * 0.5 + 0x16, _0x4b5bc9['x'] = _0x18f355[_0x488c72], _0x4b5bc9['y'] = _0x4c216a[_0x23c5cb], _0x4b5bc9['rotation'] = _0x551424['solution_r' + 'ot'][0x0], _0x4b5bc9['gotoAndPla' + 'y'](_0x5e527d), _0x3d32b7['addChild'](_0x4b5bc9), _0x97ed03 = !![];
            return;
        }
        var _0x46680d = {
                'images': [
                    s_oSpriteLibrary['getSprite']('pipe1a'),
                    s_oSpriteLibrary['getSprite']('pipe1b'),
                    s_oSpriteLibrary['getSprite']('pipe2a'),
                    s_oSpriteLibrary['getSprite']('pipe2b')
                ],
                'frames': {
                    'width': PIPE_FRAME_SIZE,
                    'height': PIPE_FRAME_SIZE
                },
                'animations': {
                    'PIPE_HORIZONTAL': [
                        0x0,
                        0x0
                    ],
                    'PIPE_HORIZONTAL_WATER_1': [
                        0x1,
                        0x13,
                        ![]
                    ],
                    'PIPE_HORIZONTAL_WATER_2': [
                        0x15,
                        0x27,
                        ![]
                    ],
                    'PIPE_ANGLE': [
                        0x28,
                        0x28
                    ],
                    'PIPE_ANGLE_WATER_1': [
                        0x29,
                        0x3b,
                        ![]
                    ],
                    'PIPE_ANGLE_WATER_2': [
                        0x3d,
                        0x4f,
                        ![]
                    ]
                },
                'framerate': FPS_LIQUID_FLOW
            }, _0x543a6f = new createjs['SpriteShee' + 't'](_0x46680d), _0x5e527d;
        switch (_0x551424['img']) {
        case PIPE_IMG_EMPTY:
            return;
        case PIPE_IMG_HORIZONTAL:
            _0x5e527d = 'PIPE_HORIZ' + 'ONTAL';
            break;
        case PIPE_IMG_ANGLE:
            _0x5e527d = 'PIPE_ANGLE';
            break;
        }
        ;
        _0x4b5bc9 = createSprite(_0x543a6f, _0x5e527d, 0x0, 0x0, PIPE_FRAME_SIZE, PIPE_FRAME_SIZE), _0x4b5bc9['regX'] = _0x4b5bc9['regY'] = PIPE_FRAME_SIZE * 0.5, _0x4b5bc9['x'] = _0x18f355[_0x488c72], _0x4b5bc9['y'] = _0x4c216a[_0x23c5cb], _0x4b5bc9['rotation'] = _0x551424['solution_r' + 'ot'][0x0], _0x4b5bc9['gotoAndPla' + 'y'](_0x5e527d), _0x3d32b7['addChild'](_0x4b5bc9), _0x4b5bc9['on']('pressup', this['onClickedS' + 'quare']);
        !s_bMobile && (_0x4b5bc9['cursor'] = 'pointer');
        ;
    }, this['setPaused'] = function (_0x3bac4b) {
        if (_0x33fb1d)
            return;
        ;
        _0x3bac4b ? _0x4b5bc9['stop']() : _0x4b5bc9['play']();
        ;
    }, this['getPipeInf' + 'os'] = function () {
        return _0x551424;
    }, this['rotatePipe'] = function (_0x2d4e95) {
        if (_0x97ed03)
            return;
        ;
        _0x551424['img'] === PIPE_IMG_HORIZONTAL ? _0x2d4e95 === 0x0 || _0x2d4e95 === 0xb4 ? _0x4b5bc9['rotation'] = 0x0 : _0x4b5bc9['rotation'] = 0x5a : _0x4b5bc9['rotation'] = _0x2d4e95;
        ;
    }, this['onClickedS' + 'quare'] = function () {
        if (_0x97ed03 || _0x4c5b98 || s_oGame['isStartGam' + 'e']() === ![])
            return;
        ;
        _0x4c5b98 = !![];
        var _0x38bb13 = _0x4b5bc9['rotation'] + 0x5a;
        createjs['Tween']['get'](_0x4b5bc9)['to']({ 'rotation': _0x38bb13 }, 0xc8, createjs['Ease']['cubicOut'])['call'](function () {
            _0x551424['img'] === PIPE_IMG_HORIZONTAL && (_0x38bb13 === 0x0 || _0x38bb13 === 0xb4 ? _0x4b5bc9['rotation'] = 0x0 : _0x4b5bc9['rotation'] = 0x5a);
            _0x4b5bc9['rotation'] === 0x168 && (_0x4b5bc9['rotation'] = 0x0);
            ;
            s_oGame['onClickedP' + 'ipe'](), _0x4c5b98 = ![];
        });
    }, this['updateImag' + 'eHorizonta' + 'l'] = function (_0x3aeaa8) {
        var _0x5dfda0 = 'PIPE_HORIZ' + 'ONTAL_WATE' + 'R_1';
        (_0x551424['solution_r' + 'ot']['indexOf'](0x0) !== -0x1 && _0x3aeaa8 === PROVENIENCE_RIGHT || _0x551424['solution_r' + 'ot']['indexOf'](0x0) === -0x1 && _0x3aeaa8 === PROVENIENCE_BOTTOM) && (_0x5dfda0 = 'PIPE_HORIZ' + 'ONTAL_WATE' + 'R_2');
        ;
        this['setAnimati' + 'on'](_0x5dfda0, _0x3aeaa8);
    }, this['updateImag' + 'eAngle'] = function (_0x40cec2) {
        var _0x162c53 = _0x551424['solution_r' + 'ot'], _0x289889 = 'PIPE_ANGLE' + '_WATER_1';
        (_0x162c53[0x0] === 0x0 && _0x40cec2 === PROVENIENCE_TOP || _0x162c53[0x0] === 0x5a && _0x40cec2 === PROVENIENCE_RIGHT || _0x162c53[0x0] === 0xb4 && _0x40cec2 === PROVENIENCE_BOTTOM || _0x162c53[0x0] === 0x10e && _0x40cec2 === PROVENIENCE_LEFT) && (_0x289889 = 'PIPE_ANGLE' + '_WATER_2');
        ;
        this['setAnimati' + 'on'](_0x289889, _0x40cec2);
    }, this['updateImag' + 'eStart'] = function (_0x12d398) {
        this['setAnimati' + 'on']('PIPE_START' + '_WATER', _0x12d398);
    }, this['setAnimati' + 'on'] = function (_0x103c08, _0x48da0e) {
        _0x4b5bc9['gotoAndPla' + 'y'](_0x103c08), _0x4b5bc9['removeAllE' + 'ventListen' + 'ers']();
        _0x4b5bc9['currentAni' + 'mation'] === _0x103c08 && _0x4b5bc9['on']('animatione' + 'nd', function () {
            _0x33fb1d = !![], s_oGame['onPipeAnim' + 'ationEnd'](_0x551424, _0x48da0e, _0x488c72, _0x23c5cb);
        });
        ;
    }, this['setWatered'] = function (_0xa4f8d9) {
        if (_0x551424['img'] === PIPE_IMG_EMPTY)
            return;
        ;
        _0x551424['img'] !== PIPE_IMG_START && new createjs['Tween']['get'](_0x4b5bc9)['to']({
            'scaleX': 1.1,
            'scaleY': 1.1
        }, 0xfa, createjs['Ease']['cubicIn'])['to']({
            'scaleX': 0x1,
            'scaleY': 0x1
        }, 0xfa, createjs['Ease']['cubicOut']);
        ;
        switch (_0x551424['img']) {
        case PIPE_IMG_HORIZONTAL:
            this['updateImag' + 'eHorizonta' + 'l'](_0xa4f8d9);
            break;
        case PIPE_IMG_ANGLE:
            this['updateImag' + 'eAngle'](_0xa4f8d9);
            break;
        case PIPE_IMG_START:
            this['updateImag' + 'eStart'](_0xa4f8d9);
            break;
        }
        ;
    }, this['getColumn'] = function () {
        return _0x488c72;
    }, this['getRow'] = function () {
        return _0x23c5cb;
    }, this['isCorrectl' + 'yRotated'] = function () {
        var _0x145d4e = _0x551424['solution_r' + 'ot'];
        if (_0x145d4e['indexOf'](_0x4b5bc9['rotation']) !== -0x1)
            return !![];
        ;
        return ![];
    }, this['unload'] = function () {
        _0x4b5bc9 = null;
    }, _0x3d32b7 = _0x47a14c, this['_init']();
}