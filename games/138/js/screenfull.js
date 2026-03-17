(function () {
    'use strict';
    var _0x1beaf4 = typeof window !== 'undefined' && typeof window['document'] !== 'undefined' ? window['document'] : {}, _0xa8d1b1 = typeof module !== 'undefined' && module['exports'], _0x5d79d9 = typeof Element !== 'undefined' && 'ALLOW_KEYB' + 'OARD_INPUT' in Element, _0x23d7dd = function () {
            var _0x1acd5b, _0x73decb = [
                    [
                        'requestFul' + 'lscreen',
                        'exitFullsc' + 'reen',
                        'fullscreen' + 'Element',
                        'fullscreen' + 'Enabled',
                        'fullscreen' + 'change',
                        'fullscreen' + 'error'
                    ],
                    [
                        'webkitRequ' + 'estFullscr' + 'een',
                        'webkitExit' + 'Fullscreen',
                        'webkitFull' + 'screenElem' + 'ent',
                        'webkitFull' + 'screenEnab' + 'led',
                        'webkitfull' + 'screenchan' + 'ge',
                        'webkitfull' + 'screenerro' + 'r'
                    ],
                    [
                        'webkitRequ' + 'estFullScr' + 'een',
                        'webkitCanc' + 'elFullScre' + 'en',
                        'webkitCurr' + 'entFullScr' + 'eenElement',
                        'webkitCanc' + 'elFullScre' + 'en',
                        'webkitfull' + 'screenchan' + 'ge',
                        'webkitfull' + 'screenerro' + 'r'
                    ],
                    [
                        'mozRequest' + 'FullScreen',
                        'mozCancelF' + 'ullScreen',
                        'mozFullScr' + 'eenElement',
                        'mozFullScr' + 'eenEnabled',
                        'mozfullscr' + 'eenchange',
                        'mozfullscr' + 'eenerror'
                    ],
                    [
                        'msRequestF' + 'ullscreen',
                        'msExitFull' + 'screen',
                        'msFullscre' + 'enElement',
                        'msFullscre' + 'enEnabled',
                        'MSFullscre' + 'enChange',
                        'MSFullscre' + 'enError'
                    ]
                ], _0x4a1241 = 0x0, _0x14e0d4 = _0x73decb['length'], _0x37d89b = {};
            for (; _0x4a1241 < _0x14e0d4; _0x4a1241++) {
                _0x1acd5b = _0x73decb[_0x4a1241];
                if (_0x1acd5b && _0x1acd5b[0x1] in _0x1beaf4) {
                    for (_0x4a1241 = 0x0; _0x4a1241 < _0x1acd5b['length']; _0x4a1241++) {
                        _0x37d89b[_0x73decb[0x0][_0x4a1241]] = _0x1acd5b[_0x4a1241];
                    }
                    return _0x37d89b;
                }
            }
            return ![];
        }(), _0x336897 = {
            'change': _0x23d7dd['fullscreen' + 'change'],
            'error': _0x23d7dd['fullscreen' + 'error']
        }, _0x4e1ac1 = {
            'request': function (_0x4f16d5) {
                var _0x2c6918 = _0x23d7dd['requestFul' + 'lscreen'];
                _0x4f16d5 = _0x4f16d5 || _0x1beaf4['documentEl' + 'ement'], /5\.1[.\d]* Safari/['test'](navigator['userAgent']) ? _0x4f16d5[_0x2c6918]() : _0x4f16d5[_0x2c6918](_0x5d79d9 && Element['ALLOW_KEYB' + 'OARD_INPUT']);
            },
            'exit': function () {
                _0x1beaf4[_0x23d7dd['exitFullsc' + 'reen']]();
            },
            'toggle': function (_0x1abf9a) {
                this['isFullscre' + 'en'] ? this['exit']() : this['request'](_0x1abf9a);
            },
            'onchange': function (_0x187914) {
                this['on']('change', _0x187914);
            },
            'onerror': function (_0x4f864e) {
                this['on']('error', _0x4f864e);
            },
            'on': function (_0x3d04d4, _0x5b59c3) {
                var _0x1a04b7 = _0x336897[_0x3d04d4];
                _0x1a04b7 && _0x1beaf4['addEventLi' + 'stener'](_0x1a04b7, _0x5b59c3, ![]);
            },
            'off': function (_0x1d99df, _0x107fc4) {
                var _0x129798 = _0x336897[_0x1d99df];
                _0x129798 && _0x1beaf4['removeEven' + 'tListener'](_0x129798, _0x107fc4, ![]);
            },
            'raw': _0x23d7dd
        };
    if (!_0x23d7dd) {
        _0xa8d1b1 ? module['exports'] = ![] : window['screenfull'] = ![];
        return;
    }
    Object['defineProp' + 'erties'](_0x4e1ac1, {
        'isFullscreen': {
            'get': function () {
                return Boolean(_0x1beaf4[_0x23d7dd['fullscreen' + 'Element']]);
            }
        },
        'element': {
            'enumerable': !![],
            'get': function () {
                return _0x1beaf4[_0x23d7dd['fullscreen' + 'Element']];
            }
        },
        'enabled': {
            'enumerable': !![],
            'get': function () {
                return Boolean(_0x1beaf4[_0x23d7dd['fullscreen' + 'Enabled']]);
            }
        }
    }), _0xa8d1b1 ? module['exports'] = _0x4e1ac1 : window['screenfull'] = _0x4e1ac1;
}());