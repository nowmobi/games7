function CMascotte(_0x1f5397) {
    var _0x348ab9, _0x495ab0, _0x313784, _0x58b3d2;
    this['_init'] = function () {
        _0x348ab9 = 0x0, _0x495ab0 = Math['floor'](Math['random']() * 0xa + 0x5);
        var _0x1465cf = [
                0x11c,
                0xea
            ], _0x15a4e0 = [
                0x126,
                0x160
            ], _0x1b1f48 = [
                0xf0,
                0xfa
            ], _0x1f13c0 = [
                0x276,
                0x280
            ], _0x22ebc7 = [];
        for (var _0x241c7c = 0x0; _0x241c7c < 0x7b; _0x241c7c++) {
            _0x22ebc7['push'](s_oSpriteLibrary['getSprite']('character' + s_iMascotteType + '_' + _0x241c7c));
        }
        ;
        var _0x56820f = {
                'images': _0x22ebc7,
                'frames': {
                    'width': _0x1465cf[s_iMascotteType],
                    'height': _0x15a4e0[s_iMascotteType],
                    'regX': _0x1465cf[s_iMascotteType] * 0.5,
                    'regY': _0x15a4e0[s_iMascotteType]
                },
                'animations': {
                    'idle': [
                        0x0,
                        0x1d,
                        ![]
                    ],
                    'drink': [
                        0x1f,
                        0x4b,
                        'idle'
                    ],
                    'win': [
                        0x4d,
                        0x5c,
                        'win'
                    ],
                    'lose': [
                        0x5e,
                        0x79,
                        'lose'
                    ]
                },
                'framerate': FPS_MASCOTTE
            }, _0x4741ec = new createjs['SpriteShee' + 't'](_0x56820f);
        _0x58b3d2 = createSprite(_0x4741ec, 'idle', 0x0, 0x0, _0x1465cf[s_iMascotteType], _0x15a4e0[s_iMascotteType]), _0x58b3d2['x'] = _0x1b1f48[s_iMascotteType], _0x58b3d2['y'] = _0x1f13c0[s_iMascotteType], _0x58b3d2['addEventLi' + 'stener']('animatione' + 'nd', this['changeAnim' + 'ation']), _0x313784['addChild'](_0x58b3d2);
    }, this['changeAnim' + 'ation'] = function () {
        if (_0x58b3d2['currentAni' + 'mation'] === 'win')
            _0x58b3d2['gotoAndPla' + 'y']('win');
        else {
            if (_0x58b3d2['currentAni' + 'mation'] === 'lose')
                _0x58b3d2['gotoAndPla' + 'y']('lose');
            else {
                _0x348ab9++;
                _0x348ab9 > _0x495ab0 ? (_0x348ab9 = 0x0, playSound('gulp', 0x1, ![]), _0x58b3d2['gotoAndPla' + 'y']('drink')) : _0x58b3d2['gotoAndPla' + 'y']('idle');
                ;
            }
        }
        ;
    }, this['playAnimat' + 'ion'] = function (_0x4bb6f6) {
        _0x58b3d2['gotoAndPla' + 'y'](_0x4bb6f6);
    }, this['changeCont' + 'ainer'] = function (_0x3248ca) {
        _0x3248ca['addChild'](_0x58b3d2);
    }, _0x313784 = _0x1f5397, this['_init']();
}