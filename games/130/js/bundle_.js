var __extends = this && this['__extends'] || function () {
    var _0x531a50 = Object['setPrototy' + 'peOf'] || { '__proto__': [] } instanceof Array && function (_0x4b61f8, _0x47eeef) {
        _0x4b61f8['__proto__'] = _0x47eeef;
    } || function (_0x4c95b0, _0x210c2a) {
        for (var _0x152874 in _0x210c2a)
            _0x210c2a['hasOwnProp' + 'erty'](_0x152874) && (_0x4c95b0[_0x152874] = _0x210c2a[_0x152874]);
    };
    return function (_0x1b7b7e, _0x4c533d) {
        function _0x49ba5a() {
            this['constructo' + 'r'] = _0x1b7b7e;
        }
        _0x531a50(_0x1b7b7e, _0x4c533d), _0x1b7b7e['prototype'] = null === _0x4c533d ? Object['create'](_0x4c533d) : (_0x49ba5a['prototype'] = _0x4c533d['prototype'], new _0x49ba5a());
    };
}();
!function () {
    function _0x4c7b35(_0x14a15f, _0x4bc9c7, _0x460769) {
        function _0x546a1e(_0x26c029, _0x4be1b7) {
            if (!_0x4bc9c7[_0x26c029]) {
                if (!_0x14a15f[_0x26c029]) {
                    var _0x310d75 = 'function' == typeof require && require;
                    if (!_0x4be1b7 && _0x310d75)
                        return _0x310d75(_0x26c029, !0x0);
                    if (_0x30ee37)
                        return _0x30ee37(_0x26c029, !0x0);
                    var _0x526af5 = new Error('Cannot\x20fin' + 'd\x20module\x20\x27' + _0x26c029 + '\x27');
                    throw _0x526af5['code'] = 'MODULE_NOT' + '_FOUND', _0x526af5;
                }
                var _0x70abb9 = _0x4bc9c7[_0x26c029] = { 'exports': {} };
                _0x14a15f[_0x26c029][0x0]['call'](_0x70abb9['exports'], function (_0x400a52) {
                    return _0x546a1e(_0x14a15f[_0x26c029][0x1][_0x400a52] || _0x400a52);
                }, _0x70abb9, _0x70abb9['exports'], _0x4c7b35, _0x14a15f, _0x4bc9c7, _0x460769);
            }
            return _0x4bc9c7[_0x26c029]['exports'];
        }
        for (var _0x30ee37 = 'function' == typeof require && require, _0x10a182 = 0x0; _0x10a182 < _0x460769['length']; _0x10a182++)
            _0x546a1e(_0x460769[_0x10a182]);
        return _0x546a1e;
    }
    return _0x4c7b35;
}()({
    0x1: [
        function (_0x3c4fd3, _0x47b320, _0x44c9b4) {
            'use strict';
            Object['defineProp' + 'erty'](_0x44c9b4, '__esModule', { 'value': !0x0 });
            var _0x2f6abc = function () {
                function _0x5f4593() {
                    _0x5f4593['_b64tab'] = function () {
                        for (var _0x5ee3bf = {}, _0x10ca06 = 0x0, _0x59b66c = _0x5f4593['_b64chars']['length']; _0x10ca06 < _0x59b66c; _0x10ca06++)
                            _0x5ee3bf[_0x5f4593['_b64chars']['charAt'](_0x10ca06)] = _0x10ca06;
                        return _0x5ee3bf;
                    };
                }
                return _0x5f4593['_cb_btou'] = function (_0x568189) {
                    switch (_0x568189['length']) {
                    case 0x4:
                        var _0x557ee7 = ((0x7 & _0x568189['charCodeAt'](0x0)) << 0x12 | (0x3f & _0x568189['charCodeAt'](0x1)) << 0xc | (0x3f & _0x568189['charCodeAt'](0x2)) << 0x6 | 0x3f & _0x568189['charCodeAt'](0x3)) - 0x10000;
                        return String['fromCharCo' + 'de'](0xd800 + (_0x557ee7 >>> 0xa)) + String['fromCharCo' + 'de'](0xdc00 + (0x3ff & _0x557ee7));
                    case 0x3:
                        return String['fromCharCo' + 'de']((0xf & _0x568189['charCodeAt'](0x0)) << 0xc | (0x3f & _0x568189['charCodeAt'](0x1)) << 0x6 | 0x3f & _0x568189['charCodeAt'](0x2));
                    default:
                        return String['fromCharCo' + 'de']((0x1f & _0x568189['charCodeAt'](0x0)) << 0x6 | 0x3f & _0x568189['charCodeAt'](0x1));
                    }
                }, _0x5f4593['_cb_decode'] = function (_0xe45a19) {
                    var _0x67e26 = _0xe45a19['length'], _0xee9051 = _0x67e26 % 0x4, _0xa34ef4 = (_0x67e26 > 0x0 ? this['_b64tab'][_0xe45a19['charAt'](0x0)] << 0x12 : 0x0) | (_0x67e26 > 0x1 ? this['_b64tab'][_0xe45a19['charAt'](0x1)] << 0xc : 0x0) | (_0x67e26 > 0x2 ? this['_b64tab'][_0xe45a19['charAt'](0x2)] << 0x6 : 0x0) | (_0x67e26 > 0x3 ? this['_b64tab'][_0xe45a19['charAt'](0x3)] : 0x0), _0x12146b = [
                            String['fromCharCo' + 'de'](_0xa34ef4 >>> 0x10),
                            String['fromCharCo' + 'de'](_0xa34ef4 >>> 0x8 & 0xff),
                            String['fromCharCo' + 'de'](0xff & _0xa34ef4)
                        ];
                    return _0x12146b['length'] -= [
                        0x0,
                        0x0,
                        0x2,
                        0x1
                    ][_0xee9051], _0x12146b['join']('');
                }, _0x5f4593['_cb_encode'] = function (_0x466f6) {
                    var _0x5b3ea0 = [
                            0x0,
                            0x2,
                            0x1
                        ][_0x466f6['length'] % 0x3], _0x31c583 = _0x466f6['charCodeAt'](0x0) << 0x10 | (_0x466f6['length'] > 0x1 ? _0x466f6['charCodeAt'](0x1) : 0x0) << 0x8 | (_0x466f6['length'] > 0x2 ? _0x466f6['charCodeAt'](0x2) : 0x0);
                    return [
                        _0x5f4593['_b64chars']['charAt'](_0x31c583 >>> 0x12),
                        _0x5f4593['_b64chars']['charAt'](_0x31c583 >>> 0xc & 0x3f),
                        _0x5b3ea0 >= 0x2 ? '=' : _0x5f4593['_b64chars']['charAt'](_0x31c583 >>> 0x6 & 0x3f),
                        _0x5b3ea0 >= 0x1 ? '=' : _0x5f4593['_b64chars']['charAt'](0x3f & _0x31c583)
                    ]['join']('');
                }, _0x5f4593['_cb_utob'] = function (_0x1edf4e) {
                    if (_0x1edf4e['length'] < 0x2)
                        return (_0x34a8c0 = _0x1edf4e['charCodeAt'](0x0)) < 0x80 ? _0x1edf4e : _0x34a8c0 < 0x800 ? String['fromCharCo' + 'de'](0xc0 | _0x34a8c0 >>> 0x6) + String['fromCharCo' + 'de'](0x80 | 0x3f & _0x34a8c0) : String['fromCharCo' + 'de'](0xe0 | _0x34a8c0 >>> 0xc & 0xf) + String['fromCharCo' + 'de'](0x80 | _0x34a8c0 >>> 0x6 & 0x3f) + String['fromCharCo' + 'de'](0x80 | 0x3f & _0x34a8c0);
                    var _0x34a8c0 = 0x10000 + 0x400 * (_0x1edf4e['charCodeAt'](0x0) - 0xd800) + (_0x1edf4e['charCodeAt'](0x1) - 0xdc00);
                    return String['fromCharCo' + 'de'](0xf0 | _0x34a8c0 >>> 0x12 & 0x7) + String['fromCharCo' + 'de'](0x80 | _0x34a8c0 >>> 0xc & 0x3f) + String['fromCharCo' + 'de'](0x80 | _0x34a8c0 >>> 0x6 & 0x3f) + String['fromCharCo' + 'de'](0x80 | 0x3f & _0x34a8c0);
                }, _0x5f4593['_re_btou'] = function () {
                    return new RegExp([
                        '[À-ß][\u0080-¿]',
                        '[à-ï][\u0080-¿]' + '{2}',
                        '[ð-÷][\u0080-¿]' + '{3}'
                    ]['join']('|'), 'g');
                }, _0x5f4593['_atob'] = function (_0xde4cbe) {
                    return _0xde4cbe['replace'](/[\s\S]{1,4}/g, this['_cb_decode']);
                }, _0x5f4593['_btoa'] = function (_0x44573a) {
                    return _0x44573a['replace'](/[\s\S]{1,3}/g, this['_cb_encode']);
                }, _0x5f4593['_btou'] = function (_0x24ebb1) {
                    return _0x24ebb1['replace'](this['_re_btou'], this['_cb_btou']);
                }, _0x5f4593['_decode'] = function (_0x5b2e6f) {
                    var _0x1b8729 = this, _0x5d6f5a = String(_0x5b2e6f)['replace'](/[-_]/g, function (_0x375f2b) {
                            return '-' == _0x375f2b ? '+' : '/';
                        });
                    return console['log']('1\x20=\x20', _0x5d6f5a), _0x5d6f5a = _0x5d6f5a['replace'](/[^A-Za-z0-9\+\/]/g, ''), console['log']('2\x20=\x20', _0x5d6f5a), function (_0x38aeaf) {
                        return _0x1b8729['_btou'](atob(_0x38aeaf));
                    }(_0x5d6f5a);
                }, _0x5f4593['_encode'] = function (_0x3cb23c, _0x2b7cb7) {
                    var _0x5998c6 = this;
                    void 0x0 === _0x2b7cb7 && (_0x2b7cb7 = !0x1);
                    var _0x53b756 = function (_0xf6147) {
                        return _0x5998c6['_btoa'](_0x5998c6['_utob'](_0xf6147));
                    };
                    return _0x2b7cb7 ? _0x53b756(String(_0x3cb23c))['replace'](/[+\/]/g, function (_0x523779) {
                        return '+' == _0x523779 ? '-' : '_';
                    })['replace'](/=/g, '') : _0x53b756(String(_0x3cb23c));
                }, _0x5f4593['EncodeURI'] = function (_0x5abd7e) {
                    return this['_encode'](_0x5abd7e, !0x0);
                }, _0x5f4593['FromBase64'] = function (_0x2d4e55) {
                    return this['_decode'](_0x2d4e55);
                }, _0x5f4593['ToBase64'] = function (_0x3881bc) {
                    return this['_encode'](_0x3881bc);
                }, _0x5f4593['stringToBy' + 'tes'] = function (_0x27ff36) {
                    var _0x13fd44, _0x265c97, _0x54bdfa = new Array();
                    _0x13fd44 = _0x27ff36['length'];
                    for (var _0x3722ae = 0x0; _0x3722ae < _0x13fd44; _0x3722ae++)
                        (_0x265c97 = _0x27ff36['charCodeAt'](_0x3722ae)) >= 0x10000 && _0x265c97 <= 0x10ffff ? (_0x54bdfa['push'](_0x265c97 >> 0x12 & 0x7 | 0xf0), _0x54bdfa['push'](_0x265c97 >> 0xc & 0x3f | 0x80), _0x54bdfa['push'](_0x265c97 >> 0x6 & 0x3f | 0x80), _0x54bdfa['push'](0x3f & _0x265c97 | 0x80)) : _0x265c97 >= 0x800 && _0x265c97 <= 0xffff ? (_0x54bdfa['push'](_0x265c97 >> 0xc & 0xf | 0xe0), _0x54bdfa['push'](_0x265c97 >> 0x6 & 0x3f | 0x80), _0x54bdfa['push'](0x3f & _0x265c97 | 0x80)) : _0x265c97 >= 0x80 && _0x265c97 <= 0x7ff ? (_0x54bdfa['push'](_0x265c97 >> 0x6 & 0x1f | 0xc0), _0x54bdfa['push'](0x3f & _0x265c97 | 0x80)) : _0x54bdfa['push'](0xff & _0x265c97);
                    return _0x54bdfa;
                }, _0x5f4593['byteToStri' + 'ng'] = function (_0x316244) {
                    if ('string' == typeof _0x316244)
                        return _0x316244;
                    for (var _0x1dd9d5 = '', _0x33d154 = _0x316244, _0x4bab45 = 0x0; _0x4bab45 < _0x33d154['length']; _0x4bab45++) {
                        var _0x5c7a0f = _0x33d154[_0x4bab45]['toString'](0x2), _0x63440 = _0x5c7a0f['match'](/^1+?(?=0)/);
                        if (_0x63440 && 0x8 == _0x5c7a0f['length']) {
                            for (var _0x24f11b = _0x63440[0x0]['length'], _0x2c85a3 = _0x33d154[_0x4bab45]['toString'](0x2)['slice'](0x7 - _0x24f11b), _0x4b0d88 = 0x1; _0x4b0d88 < _0x24f11b; _0x4b0d88++)
                                _0x2c85a3 += _0x33d154[_0x4b0d88 + _0x4bab45]['toString'](0x2)['slice'](0x2);
                            _0x1dd9d5 += String['fromCharCo' + 'de'](parseInt(_0x2c85a3, 0x2)), _0x4bab45 += _0x24f11b - 0x1;
                        } else
                            _0x1dd9d5 += String['fromCharCo' + 'de'](_0x33d154[_0x4bab45]);
                    }
                    return _0x1dd9d5;
                }, _0x5f4593['_utob'] = function (_0x215968) {
                    return _0x215968['replace'](this['_re_utob'], this['_cb_utob']);
                }, _0x5f4593['_b64chars'] = 'ABCDEFGHIJ' + 'KLMNOPQRST' + 'UVWXYZabcd' + 'efghijklmn' + 'opqrstuvwx' + 'yz01234567' + '89+/', _0x5f4593['_fromCharC' + 'ode'] = String['fromCharCo' + 'de'], _0x5f4593['_re_utob'] = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g, _0x5f4593;
            }();
            _0x44c9b4['TsBase64'] = _0x2f6abc;
            var _0x3f86e8 = _0x2f6abc['ToBase64']('Typescript'), _0x4c9867 = _0x2f6abc['EncodeURI']('Typescript' + '\x22');
            console['log'](_0x3f86e8), console['log'](_0x4c9867);
        },
        {}
    ],
    0x2: [
        function (_0x3552a7, _0x1421ae, _0x4a109e) {
            'use strict';
            Object['defineProp' + 'erty'](_0x4a109e, '__esModule', { 'value': !0x0 });
            var _0x467a18 = _0x3552a7('../Main'), _0x5e3b0f = function (_0x3817d9) {
                    function _0x4a94bb(_0x2fc9a2, _0x30c406, _0x4e0eb5, _0x4d5e62, _0x5e8bbc) {
                        var _0x5b0ac4 = _0x3817d9['call'](this) || this;
                        return _0x5b0ac4['frames'] = [], _0x5b0ac4['timer'] = 0x0, _0x5b0ac4['index'] = 0x0, _0x5b0ac4['frame_numb' + 'er'] = 0x1, _0x5b0ac4['interval'] = [0x64], _0x5b0ac4['showAniNum'] = 0x0, _0x5b0ac4['showAniArr'] = [], _0x5b0ac4['startFrame'] = 0x0, _0x5b0ac4['endFrame'] = 0x0, _0x5b0ac4['framesArr'] = [], _0x5b0ac4['isChange'] = !0x1, _0x5b0ac4['playAniNum'] = 0x0, _0x5b0ac4['aniPlayTim' + 'e'] = 0x0, _0x5b0ac4['changeAnit' + 'ime'] = [0xbb8], _0x5b0ac4['target'] = _0x2fc9a2, _0x5b0ac4['target']['skin'] = '', _0x5b0ac4['frames'] = _0x30c406, _0x5b0ac4['frame_numb' + 'er'] = _0x30c406['length'], _0x5b0ac4['interval'] = _0x4e0eb5, _0x5b0ac4['framesArr'] = _0x4d5e62, _0x5b0ac4['showAniArr'] = _0x5b0ac4['createAniA' + 'rr'](_0x4d5e62), _0x5b0ac4['changeAnit' + 'ime'] = _0x5e8bbc, _0x5b0ac4['getStartEn' + 'd'](_0x5b0ac4['playAniNum']), _0x5b0ac4['set_index'](_0x5b0ac4['startFrame']), _0x5b0ac4;
                    }
                    return __extends(_0x4a94bb, _0x3817d9), _0x4a94bb['prototype']['getStartEn' + 'd'] = function (_0x36c555) {
                        0x0 == this['showAniArr'][_0x36c555] ? (this['startFrame'] = 0x0, this['endFrame'] = Number(this['framesArr'][this['showAniArr'][_0x36c555]])) : (this['startFrame'] = Number(this['framesArr'][this['showAniArr'][_0x36c555] - 0x1]), this['endFrame'] = Number(this['framesArr'][this['showAniArr'][_0x36c555]]));
                    }, _0x4a94bb['prototype']['createAniA' + 'rr'] = function (_0x255587) {
                        var _0xf539ff = [];
                        return _0x255587['forEach'](function (_0x3e9ae3, _0x54a97d) {
                            _0xf539ff['push'](_0x54a97d);
                        }), this['shuffleArr' + 'ay'](_0xf539ff);
                    }, _0x4a94bb['prototype']['shuffleArr' + 'ay'] = function (_0x21cedf) {
                        for (var _0x4a7894 = -0x1, _0x2c52dc = _0x21cedf['length'], _0x38ff7c = _0x2c52dc - 0x1, _0x5b2824 = _0x2c52dc; ++_0x4a7894 < _0x5b2824;) {
                            var _0x481259 = _0x4a7894 + Math['floor'](Math['random']() * (_0x38ff7c - _0x4a7894 + 0x1)), _0x3bd5dc = _0x21cedf[_0x481259];
                            _0x21cedf[_0x481259] = _0x21cedf[_0x4a7894], _0x21cedf[_0x4a7894] = _0x3bd5dc;
                        }
                        return _0x21cedf['length'] = _0x5b2824, _0x21cedf;
                    }, _0x4a94bb['prototype']['add_index'] = function () {
                        _0x467a18['default']['app']['playAni'] && (this['index'] + 0x1 >= this['endFrame'] ? this['isChange'] ? (++this['playAniNum'] >= this['showAniArr']['length'] && (this['playAniNum'] = 0x0), this['getStartEn' + 'd'](this['playAniNum']), this['set_index'](this['startFrame']), this['isChange'] = !0x1) : this['set_index'](this['startFrame']) : this['set_index'](this['index'] + 0x1));
                    }, _0x4a94bb['prototype']['set_index'] = function (_0x1d9699) {
                        if (this['index'] = _0x1d9699, this['target']) {
                            if (this['target']['skin']) {
                                if (this['startFrame'] + 0x1 == this['endFrame'] && !this['isChange'])
                                    return;
                                this['index'] < this['endFrame'] && (this['target']['skin'] = this['frames'][_0x1d9699]);
                            } else
                                this['target']['skin'] = this['frames'][_0x1d9699];
                        }
                    }, _0x4a94bb['prototype']['update'] = function () {
                        return _0x467a18['default']['app']['mWX']['likeLoop'] ? (this['timer'] += 0x32, (0x0 == _0x467a18['default']['app']['mWX']['oddEvenTes' + 'tModel']['isAniTest'] || 0x1 == _0x467a18['default']['app']['mWX']['oddEvenTes' + 'tModel']['isAniTest']) && (this['aniPlayTim' + 'e'] += 0x32, this['aniPlayTim' + 'e'] >= this['changeAnit' + 'ime'][0x0]) ? (this['aniPlayTim' + 'e'] = 0x0, this['isChange'] = !0x0, this['add_index'](), void (this['timer'] = 0x0)) : void (this['timer'] >= this['interval'][this['showAniArr'][this['playAniNum']]] && (this['add_index'](), this['timer'] = 0x0))) : (console['log']('销毁jumpAni'), void this['event']('die'));
                    }, _0x4a94bb;
                }(Laya['EventDispa' + 'tcher']);
            _0x4a109e['JumpAni'] = _0x5e3b0f;
        },
        { '../Main': 0xe }
    ],
    0x3: [
        function (_0x1d7946, _0x3a8fa2, _0x42901f) {
            'use strict';
            Object['defineProp' + 'erty'](_0x42901f, '__esModule', { 'value': !0x0 });
            var _0x1edc13 = _0x1d7946('./JumpAni'), _0x26a04d = _0x1d7946('../Main'), _0x3972d7 = function () {
                    function _0xb66add() {
                        this['hasFrameAr' + 'r'] = [], this['aniList'] = [], Laya['timer']['loop'](0x32, this, this['loop50']);
                    }
                    return Object['defineProp' + 'erty'](_0xb66add, 'instance', {
                        'get': function () {
                            return _0xb66add['_instance'] || (_0xb66add['_instance'] = new _0xb66add()), _0xb66add['_instance'];
                        },
                        'enumerable': !0x0,
                        'configurable': !0x0
                    }), _0xb66add['prototype']['loop50'] = function () {
                        for (var _0x64429a = this['aniList']['concat'](), _0x362320 = 0x0; _0x362320 < _0x64429a['length']; _0x362320++)
                            _0x64429a[_0x362320]['update']();
                    }, _0xb66add['prototype']['ani'] = function (_0x5cc817, _0x33aa3f, _0x3e6bd4, _0x2556ec, _0x1ab59a, _0x3d7ceb) {
                        var _0x54ccf0 = this, _0x3d7aff = 0x0, _0x44b768 = [];
                        try {
                            _0x3e6bd4['forEach'](function (_0x5d5460) {
                                _0x3d7aff += Number(_0x5d5460), _0x44b768['push'](_0x3d7aff);
                            });
                        } catch (_0x55b0c7) {
                            console['log'](_0x3e6bd4);
                        }
                        var _0x335c90 = [];
                        _0x335c90['push'](_0x33aa3f);
                        var _0x4c4774 = 0x2;
                        if (_0x26a04d['default']['app']['mWX']['moreFenFaN' + 'um'] >= 0x2 && 0x0 != _0x3d7ceb) {
                            _0x4c4774 = _0x3d7ceb, console['log']('ii1:', _0x4c4774, _0x3d7aff);
                            for (_0x4b321a = _0x4c4774; _0x4b321a < _0x3d7aff + _0x4c4774; _0x4b321a++) {
                                _0x1636b5 = _0x33aa3f['replace']('_' + _0x4c4774 + '.', '_' + _0x4b321a + '.'), (console['log']('path2:', _0x1636b5, _0x4b321a), _0x335c90['push'](_0x1636b5));
                            }
                        } else {
                            console['log']('ii2:', _0x4c4774, _0x3d7aff);
                            for (var _0x4b321a = _0x4c4774; _0x4b321a <= _0x3d7aff; _0x4b321a++) {
                                var _0x1636b5 = _0x33aa3f['replace']('_1.', '_' + _0x4b321a + '.');
                                console['log']('path1:', _0x1636b5, _0x4b321a), _0x335c90['push'](_0x1636b5);
                            }
                        }
                        this['hasFrameAr' + 'r']['indexOf'](_0x33aa3f) < 0x0 && Laya['loader']['load'](_0x335c90, Laya['Handler']['create'](this, function () {
                            console['log']('分发加载完成'), _0x54ccf0['hasFrameAr' + 'r']['push'](_0x33aa3f), _0x26a04d['default']['app']['playAni'] = !0x0;
                        }), null, Laya['Loader']['IMAGE'], 0x4), _0x5cc817['skin'] = '';
                        var _0x455f63 = new _0x1edc13['JumpAni'](_0x5cc817, _0x335c90, _0x2556ec, _0x44b768, _0x1ab59a);
                        this['aniList']['push'](_0x455f63), _0x455f63['on']('die', this, this['onJumpAniD' + 'ie'], [_0x455f63]), console['log']('问题所在\x20===\x20分' + '发', _0x3e6bd4, _0x33aa3f);
                    }, _0xb66add['prototype']['onJumpAniD' + 'ie'] = function (_0xe853ba) {
                        var _0x542093 = this['aniList']['indexOf'](_0xe853ba);
                        _0x542093 >= 0x0 && this['aniList']['splice'](_0x542093, 0x1);
                    }, _0xb66add;
                }();
            _0x42901f['JumpAniCtl'] = _0x3972d7;
        },
        {
            '../Main': 0xe,
            './JumpAni': 0x2
        }
    ],
    0x4: [
        function (_0xe34fe9, _0x5cc3e4, _0x5d9140) {
            'use strict';
            Object['defineProp' + 'erty'](_0x5d9140, '__esModule', { 'value': !0x0 });
            var _0x43b6b5 = _0xe34fe9('../Main'), _0x2cc278 = function () {
                    function _0x15dd27() {
                    }
                    return Object['defineProp' + 'erty'](_0x15dd27, 'instance', {
                        'get': function () {
                            return _0x15dd27['_instance'] || (_0x15dd27['_instance'] = new _0x15dd27()), _0x15dd27['_instance'];
                        },
                        'enumerable': !0x0,
                        'configurable': !0x0
                    }), _0x15dd27['prototype']['convert'] = function (_0x133a3d) {
                        var _0x91d763 = 0x0, _0x3c6e08 = [], _0xb0e018 = [], _0x37a2d5 = '', _0x550c81 = 0x0, _0x1245c5 = [], _0x446651 = [], _0x5ad465 = '', _0xf97ddc = [], _0x57a9ae = [];
                        if (_0x133a3d['anim_confi' + 'g'] && '' != _0x133a3d['anim_confi' + 'g']) {
                            var _0x53e146 = {};
                            try {
                                if (_0x53e146 = JSON['parse'](_0x133a3d['anim_confi' + 'g']), _0x53e146['framelist'] = _0x53e146['group_stat' + 'ic']['toString']()['split'](','), _0x53e146['framebigli' + 'st'] = _0x53e146['group_stat' + 'ic_big']['toString']()['split'](','), _0x53e146['frameone'] = _0x53e146['frame_stat' + 'ic']['toString']()['split'](','), _0x53e146['framebigon' + 'e'] = _0x53e146['frame_stat' + 'ic_big']['toString']()['split'](','), _0x53e146['millisecon' + 'd'] = _0x53e146['millisecon' + 'd_static']['toString']()['split'](','), _0x53e146['millisecon' + 'd_big'] = _0x53e146['millisecon' + 'd_static_b' + 'ig']['toString']()['split'](','), _0x53e146['millisecon' + 'd2'] = _0x53e146['millisecon' + 'd2']['toString']()['split'](','), _0x53e146['millisecon' + 'd_big2'] = _0x53e146['millisecon' + 'd_big2']['toString']()['split'](','), _0x53e146['millisecon' + 'd3'] = _0x53e146['millisecon' + 'd3']['toString']()['split'](','), _0x53e146['millisecon' + 'd_big3'] = _0x53e146['millisecon' + 'd_big3']['toString']()['split'](','), 0x1 == _0x43b6b5['default']['app']['mWX']['moreFenFaN' + 'um'])
                                    _0x53e146['framelist']['splice'](0x1, _0x53e146['framelist']['length'] - 0x1), _0x53e146['framebigli' + 'st']['splice'](0x1, _0x53e146['framebigli' + 'st']['length'] - 0x1), _0x53e146['millisecon' + 'd']['splice'](0x1, _0x53e146['millisecon' + 'd']['length'] - 0x1), _0x53e146['millisecon' + 'd_big']['splice'](0x1, _0x53e146['millisecon' + 'd_big']['length'] - 0x1);
                                else {
                                    if (_0x43b6b5['default']['app']['mWX']['moreFenFaN' + 'um'] >= 0x2)
                                        _0x53e146['framelist']['length'] > 0x1 && _0x53e146['framelist']['splice'](0x0, _0x53e146['framelist']['length'] - 0x1), _0x53e146['framebigli' + 'st']['length'] > 0x1 && _0x53e146['framebigli' + 'st']['splice'](0x0, _0x53e146['framebigli' + 'st']['length'] - 0x1), _0x53e146['millisecon' + 'd']['length'] > 0x1 && _0x53e146['millisecon' + 'd']['splice'](0x0, _0x53e146['framelist']['length'] - 0x1), _0x53e146['millisecon' + 'd_big']['length'] > 0x1 && _0x53e146['millisecon' + 'd_big']['splice'](0x0, _0x53e146['framelist']['length'] - 0x1);
                                    else {
                                        if (0x0 == _0x43b6b5['default']['app']['mWX']['moreFenFaN' + 'um']) {
                                            for (var _0x8d60ea = 0x0, _0x12a22d = 0x0, _0x5ee969 = 0x0; _0x5ee969 < _0x53e146['framelist']['length']; _0x5ee969++)
                                                _0x8d60ea += Number(_0x53e146['framelist'][_0x5ee969]);
                                            for (_0x5ee969 = 0x0; _0x5ee969 < _0x53e146['framebigli' + 'st']['length']; _0x5ee969++)
                                                _0x12a22d += Number(_0x53e146['framebigli' + 'st'][_0x5ee969]);
                                            _0x53e146['framelist'] = [_0x8d60ea], _0x53e146['framebigli' + 'st'] = [_0x12a22d];
                                        }
                                    }
                                }
                                console['log']('moreFenFaN' + 'um2:', _0x43b6b5['default']['app']['mWX']['moreFenFaN' + 'um'], _0x53e146['framelist'], _0x53e146['framebigli' + 'st'], _0x53e146['millisecon' + 'd'], _0x53e146['millisecon' + 'd_big']);
                            } catch (_0x45c8a3) {
                                return console['log'](_0x45c8a3), null;
                            }
                            var _0x3e99fb = _0x43b6b5['default']['app']['mWX']['oddEvenTes' + 'tModel'];
                            if (0x0 == _0x3e99fb['isAniTest'] || 0x2 == _0x3e99fb['isAniTest'])
                                _0x91d763 = 0x2, _0x3c6e08 = _0x53e146['framelist'], _0xb0e018 = _0x53e146['millisecon' + 'd'], _0x37a2d5 = _0x133a3d['static_ico' + 'n'], _0xf97ddc = _0x53e146['millisecon' + 'd3'];
                            else {
                                _0xb0e018 = _0x53e146['millisecon' + 'd2'], _0xf97ddc = _0x53e146['millisecon' + 'd2'], _0x91d763 = 0x1;
                                for (var _0x393360 = [], _0x522505 = 0x0; _0x522505 < Number(_0x53e146['frameone'][0x0]); _0x522505++)
                                    _0x393360['push'](0x1);
                                _0x3c6e08 = _0x393360, _0x37a2d5 = _0x133a3d['url_icon'];
                            }
                            if (0x0 == _0x3e99fb['isAniTest'] || 0x2 == _0x3e99fb['isAniTest'])
                                _0x550c81 = 0x2, _0x1245c5 = _0x53e146['framebigli' + 'st'], _0x446651 = _0x53e146['millisecon' + 'd_big'], _0x5ad465 = _0x133a3d['static_big' + '_btn_icon'], _0x57a9ae = _0x53e146['millisecon' + 'd_big3'];
                            else {
                                _0x57a9ae = _0x53e146['millisecon' + 'd_big2'], _0x446651 = _0x53e146['millisecon' + 'd_big2'], _0x550c81 = 0x1;
                                for (var _0x393360 = [], _0x522505 = 0x0; _0x522505 < Number(_0x53e146['framebigon' + 'e'][0x0]); _0x522505++)
                                    _0x393360['push'](0x1);
                                _0x1245c5 = _0x393360, _0x5ad465 = _0x133a3d['big_btn_ur' + 'l'];
                            }
                        } else
                            _0x91d763 = 0x0, _0x550c81 = 0x0;
                        return {
                            'small_type': _0x91d763,
                            'small_frame': _0x3c6e08,
                            'small_interval': _0xb0e018,
                            'small_image': _0x37a2d5,
                            'millisecond': _0xf97ddc,
                            'big_type': _0x550c81,
                            'big_frame': _0x1245c5,
                            'big_interval': _0x446651,
                            'big_image': _0x5ad465,
                            'millisecond_big': _0x57a9ae
                        };
                    }, _0x15dd27;
                }();
            _0x5d9140['JumpObjCon' + 'verter'] = _0x2cc278;
        },
        { '../Main': 0xe }
    ],
    0x5: [
        function (_0x2f9ed4, _0x4b487c, _0x4c2fc4) {
            'use strict';
            Object['defineProp' + 'erty'](_0x4c2fc4, '__esModule', { 'value': !0x0 });
            var _0xaffabf = function () {
                function _0x94e3a6() {
                    this['hexcase'] = 0x0, this['b64pad'] = '';
                }
                return _0x94e3a6['prototype']['hex_md5'] = function (_0x333fac) {
                    return this['rstr2hex'](this['rstr_md5'](this['str2rstr_u' + 'tf8'](_0x333fac)));
                }, _0x94e3a6['prototype']['b64_md5'] = function (_0x4e7619) {
                    return this['rstr2b64'](this['rstr_md5'](this['str2rstr_u' + 'tf8'](_0x4e7619)));
                }, _0x94e3a6['prototype']['any_md5'] = function (_0x1518a4, _0x26e981) {
                    return this['rstr2any'](this['rstr_md5'](this['str2rstr_u' + 'tf8'](_0x1518a4)), _0x26e981);
                }, _0x94e3a6['prototype']['hex_hmac_m' + 'd5'] = function (_0x4c5b3a, _0x5e76a7) {
                    return this['rstr2hex'](this['rstr_hmac_' + 'md5'](this['str2rstr_u' + 'tf8'](_0x4c5b3a), this['str2rstr_u' + 'tf8'](_0x5e76a7)));
                }, _0x94e3a6['prototype']['b64_hmac_m' + 'd5'] = function (_0x1f891c, _0x1834c4) {
                    return this['rstr2b64'](this['rstr_hmac_' + 'md5'](this['str2rstr_u' + 'tf8'](_0x1f891c), this['str2rstr_u' + 'tf8'](_0x1834c4)));
                }, _0x94e3a6['prototype']['any_hmac_m' + 'd5'] = function (_0x16ccb4, _0x5c9ff5, _0x1e289e) {
                    return this['rstr2any'](this['rstr_hmac_' + 'md5'](this['str2rstr_u' + 'tf8'](_0x16ccb4), this['str2rstr_u' + 'tf8'](_0x5c9ff5)), _0x1e289e);
                }, _0x94e3a6['prototype']['md5_vm_tes' + 't'] = function () {
                    return '900150983c' + 'd24fb0d696' + '3f7d28e17f' + '72' == this['hex_md5']('abc')['toLowerCas' + 'e']();
                }, _0x94e3a6['prototype']['rstr_md5'] = function (_0x194989) {
                    return this['binl2rstr'](this['binl_md5'](this['rstr2binl'](_0x194989), 0x8 * _0x194989['length']));
                }, _0x94e3a6['prototype']['rstr_hmac_' + 'md5'] = function (_0x46bba1, _0x550591) {
                    var _0x33fc08 = this['rstr2binl'](_0x46bba1);
                    _0x33fc08['length'] > 0x10 && (_0x33fc08 = this['binl_md5'](_0x33fc08, 0x8 * _0x46bba1['length']));
                    for (var _0x515e0e = Array(0x10), _0x17d20d = Array(0x10), _0x4fa0d2 = 0x0; _0x4fa0d2 < 0x10; _0x4fa0d2++)
                        _0x515e0e[_0x4fa0d2] = 0x36363636 ^ _0x33fc08[_0x4fa0d2], _0x17d20d[_0x4fa0d2] = 0x5c5c5c5c ^ _0x33fc08[_0x4fa0d2];
                    var _0x251167 = this['binl_md5'](_0x515e0e['concat'](this['rstr2binl'](_0x550591)), 0x200 + 0x8 * _0x550591['length']);
                    return this['binl2rstr'](this['binl_md5'](_0x17d20d['concat'](_0x251167), 0x280));
                }, _0x94e3a6['prototype']['rstr2hex'] = function (_0x38fc40) {
                    try {
                        this['hexcase'];
                    } catch (_0x110c3b) {
                        this['hexcase'] = 0x0;
                    }
                    for (var _0x201cf4, _0x1d62ad = this['hexcase'] ? '0123456789' + 'ABCDEF' : '0123456789' + 'abcdef', _0x76581e = '', _0x52d48b = 0x0; _0x52d48b < _0x38fc40['length']; _0x52d48b++)
                        _0x201cf4 = _0x38fc40['charCodeAt'](_0x52d48b), _0x76581e += _0x1d62ad['charAt'](_0x201cf4 >>> 0x4 & 0xf) + _0x1d62ad['charAt'](0xf & _0x201cf4);
                    return _0x76581e;
                }, _0x94e3a6['prototype']['rstr2b64'] = function (_0x1e27b1) {
                    try {
                        this['b64pad'];
                    } catch (_0x2eb8a5) {
                        this['b64pad'] = '';
                    }
                    for (var _0x2934d8 = '', _0x55101d = _0x1e27b1['length'], _0x552d9b = 0x0; _0x552d9b < _0x55101d; _0x552d9b += 0x3)
                        for (var _0x243712 = _0x1e27b1['charCodeAt'](_0x552d9b) << 0x10 | (_0x552d9b + 0x1 < _0x55101d ? _0x1e27b1['charCodeAt'](_0x552d9b + 0x1) << 0x8 : 0x0) | (_0x552d9b + 0x2 < _0x55101d ? _0x1e27b1['charCodeAt'](_0x552d9b + 0x2) : 0x0), _0x467955 = 0x0; _0x467955 < 0x4; _0x467955++)
                            0x8 * _0x552d9b + 0x6 * _0x467955 > 0x8 * _0x1e27b1['length'] ? _0x2934d8 += this['b64pad'] : _0x2934d8 += ('ABCDEFGHIJ' + 'KLMNOPQRST' + 'UVWXYZabcd' + 'efghijklmn' + 'opqrstuvwx' + 'yz01234567' + '89+/')['charAt'](_0x243712 >>> 0x6 * (0x3 - _0x467955) & 0x3f);
                    return _0x2934d8;
                }, _0x94e3a6['prototype']['rstr2any'] = function (_0x88839e, _0x1fff33) {
                    var _0xd6de5f, _0x3ef7d1, _0x826c7d, _0x19ee5c, _0x4353a7, _0xc5c120 = _0x1fff33['length'], _0x4379fa = Array(Math['ceil'](_0x88839e['length'] / 0x2));
                    for (_0xd6de5f = 0x0; _0xd6de5f < _0x4379fa['length']; _0xd6de5f++)
                        _0x4379fa[_0xd6de5f] = _0x88839e['charCodeAt'](0x2 * _0xd6de5f) << 0x8 | _0x88839e['charCodeAt'](0x2 * _0xd6de5f + 0x1);
                    var _0x1570d2 = Math['ceil'](0x8 * _0x88839e['length'] / (Math['log'](_0x1fff33['length']) / Math['log'](0x2))), _0x2f72de = Array(_0x1570d2);
                    for (_0x3ef7d1 = 0x0; _0x3ef7d1 < _0x1570d2; _0x3ef7d1++) {
                        for (_0x4353a7 = Array(), _0x19ee5c = 0x0, _0xd6de5f = 0x0; _0xd6de5f < _0x4379fa['length']; _0xd6de5f++)
                            _0x19ee5c = (_0x19ee5c << 0x10) + _0x4379fa[_0xd6de5f], _0x19ee5c -= (_0x826c7d = Math['floor'](_0x19ee5c / _0xc5c120)) * _0xc5c120, (_0x4353a7['length'] > 0x0 || _0x826c7d > 0x0) && (_0x4353a7[_0x4353a7['length']] = _0x826c7d);
                        _0x2f72de[_0x3ef7d1] = _0x19ee5c, _0x4379fa = _0x4353a7;
                    }
                    var _0x42c375 = '';
                    for (_0xd6de5f = _0x2f72de['length'] - 0x1; _0xd6de5f >= 0x0; _0xd6de5f--)
                        _0x42c375 += _0x1fff33['charAt'](_0x2f72de[_0xd6de5f]);
                    return _0x42c375;
                }, _0x94e3a6['prototype']['str2rstr_u' + 'tf8'] = function (_0x1f1d51) {
                    for (var _0x258630, _0x206942, _0x372a67 = '', _0x4075a1 = -0x1; ++_0x4075a1 < _0x1f1d51['length'];)
                        _0x258630 = _0x1f1d51['charCodeAt'](_0x4075a1), _0x206942 = _0x4075a1 + 0x1 < _0x1f1d51['length'] ? _0x1f1d51['charCodeAt'](_0x4075a1 + 0x1) : 0x0, 0xd800 <= _0x258630 && _0x258630 <= 0xdbff && 0xdc00 <= _0x206942 && _0x206942 <= 0xdfff && (_0x258630 = 0x10000 + ((0x3ff & _0x258630) << 0xa) + (0x3ff & _0x206942), _0x4075a1++), _0x258630 <= 0x7f ? _0x372a67 += String['fromCharCo' + 'de'](_0x258630) : _0x258630 <= 0x7ff ? _0x372a67 += String['fromCharCo' + 'de'](0xc0 | _0x258630 >>> 0x6 & 0x1f, 0x80 | 0x3f & _0x258630) : _0x258630 <= 0xffff ? _0x372a67 += String['fromCharCo' + 'de'](0xe0 | _0x258630 >>> 0xc & 0xf, 0x80 | _0x258630 >>> 0x6 & 0x3f, 0x80 | 0x3f & _0x258630) : _0x258630 <= 0x1fffff && (_0x372a67 += String['fromCharCo' + 'de'](0xf0 | _0x258630 >>> 0x12 & 0x7, 0x80 | _0x258630 >>> 0xc & 0x3f, 0x80 | _0x258630 >>> 0x6 & 0x3f, 0x80 | 0x3f & _0x258630));
                    return _0x372a67;
                }, _0x94e3a6['prototype']['str2rstr_u' + 'tf16le'] = function (_0x2d6c83) {
                    for (var _0x46722e = '', _0x2928f5 = 0x0; _0x2928f5 < _0x2d6c83['length']; _0x2928f5++)
                        _0x46722e += String['fromCharCo' + 'de'](0xff & _0x2d6c83['charCodeAt'](_0x2928f5), _0x2d6c83['charCodeAt'](_0x2928f5) >>> 0x8 & 0xff);
                    return _0x46722e;
                }, _0x94e3a6['prototype']['str2rstr_u' + 'tf16be'] = function (_0x50be12) {
                    for (var _0x253ce4 = '', _0xbc391a = 0x0; _0xbc391a < _0x50be12['length']; _0xbc391a++)
                        _0x253ce4 += String['fromCharCo' + 'de'](_0x50be12['charCodeAt'](_0xbc391a) >>> 0x8 & 0xff, 0xff & _0x50be12['charCodeAt'](_0xbc391a));
                    return _0x253ce4;
                }, _0x94e3a6['prototype']['rstr2binl'] = function (_0x1c5739) {
                    for (var _0x20ff9b = Array(_0x1c5739['length'] >> 0x2), _0x3dfad0 = 0x0; _0x3dfad0 < _0x20ff9b['length']; _0x3dfad0++)
                        _0x20ff9b[_0x3dfad0] = 0x0;
                    for (_0x3dfad0 = 0x0; _0x3dfad0 < 0x8 * _0x1c5739['length']; _0x3dfad0 += 0x8)
                        _0x20ff9b[_0x3dfad0 >> 0x5] |= (0xff & _0x1c5739['charCodeAt'](_0x3dfad0 / 0x8)) << _0x3dfad0 % 0x20;
                    return _0x20ff9b;
                }, _0x94e3a6['prototype']['binl2rstr'] = function (_0x41e0d6) {
                    for (var _0x50a4f2 = '', _0x186846 = 0x0; _0x186846 < 0x20 * _0x41e0d6['length']; _0x186846 += 0x8)
                        _0x50a4f2 += String['fromCharCo' + 'de'](_0x41e0d6[_0x186846 >> 0x5] >>> _0x186846 % 0x20 & 0xff);
                    return _0x50a4f2;
                }, _0x94e3a6['prototype']['binl_md5'] = function (_0x31f69c, _0x8a326b) {
                    _0x31f69c[_0x8a326b >> 0x5] |= 0x80 << _0x8a326b % 0x20, _0x31f69c[0xe + (_0x8a326b + 0x40 >>> 0x9 << 0x4)] = _0x8a326b;
                    for (var _0x5bf1d5 = 0x67452301, _0x4da511 = -0x10325477, _0xe6680b = -0x67452302, _0xe80a0d = 0x10325476, _0x27b8d2 = 0x0; _0x27b8d2 < _0x31f69c['length']; _0x27b8d2 += 0x10) {
                        var _0x90a48a = _0x5bf1d5, _0x4cd232 = _0x4da511, _0x4f85aa = _0xe6680b, _0x6facef = _0xe80a0d;
                        _0x5bf1d5 = this['md5_ff'](_0x5bf1d5, _0x4da511, _0xe6680b, _0xe80a0d, _0x31f69c[_0x27b8d2 + 0x0], 0x7, -0x28955b88), _0xe80a0d = this['md5_ff'](_0xe80a0d, _0x5bf1d5, _0x4da511, _0xe6680b, _0x31f69c[_0x27b8d2 + 0x1], 0xc, -0x173848aa), _0xe6680b = this['md5_ff'](_0xe6680b, _0xe80a0d, _0x5bf1d5, _0x4da511, _0x31f69c[_0x27b8d2 + 0x2], 0x11, 0x242070db), _0x4da511 = this['md5_ff'](_0x4da511, _0xe6680b, _0xe80a0d, _0x5bf1d5, _0x31f69c[_0x27b8d2 + 0x3], 0x16, -0x3e423112), _0x5bf1d5 = this['md5_ff'](_0x5bf1d5, _0x4da511, _0xe6680b, _0xe80a0d, _0x31f69c[_0x27b8d2 + 0x4], 0x7, -0xa83f051), _0xe80a0d = this['md5_ff'](_0xe80a0d, _0x5bf1d5, _0x4da511, _0xe6680b, _0x31f69c[_0x27b8d2 + 0x5], 0xc, 0x4787c62a), _0xe6680b = this['md5_ff'](_0xe6680b, _0xe80a0d, _0x5bf1d5, _0x4da511, _0x31f69c[_0x27b8d2 + 0x6], 0x11, -0x57cfb9ed), _0x4da511 = this['md5_ff'](_0x4da511, _0xe6680b, _0xe80a0d, _0x5bf1d5, _0x31f69c[_0x27b8d2 + 0x7], 0x16, -0x2b96aff), _0x5bf1d5 = this['md5_ff'](_0x5bf1d5, _0x4da511, _0xe6680b, _0xe80a0d, _0x31f69c[_0x27b8d2 + 0x8], 0x7, 0x698098d8), _0xe80a0d = this['md5_ff'](_0xe80a0d, _0x5bf1d5, _0x4da511, _0xe6680b, _0x31f69c[_0x27b8d2 + 0x9], 0xc, -0x74bb0851), _0xe6680b = this['md5_ff'](_0xe6680b, _0xe80a0d, _0x5bf1d5, _0x4da511, _0x31f69c[_0x27b8d2 + 0xa], 0x11, -0xa44f), _0x4da511 = this['md5_ff'](_0x4da511, _0xe6680b, _0xe80a0d, _0x5bf1d5, _0x31f69c[_0x27b8d2 + 0xb], 0x16, -0x76a32842), _0x5bf1d5 = this['md5_ff'](_0x5bf1d5, _0x4da511, _0xe6680b, _0xe80a0d, _0x31f69c[_0x27b8d2 + 0xc], 0x7, 0x6b901122), _0xe80a0d = this['md5_ff'](_0xe80a0d, _0x5bf1d5, _0x4da511, _0xe6680b, _0x31f69c[_0x27b8d2 + 0xd], 0xc, -0x2678e6d), _0xe6680b = this['md5_ff'](_0xe6680b, _0xe80a0d, _0x5bf1d5, _0x4da511, _0x31f69c[_0x27b8d2 + 0xe], 0x11, -0x5986bc72), _0x4da511 = this['md5_ff'](_0x4da511, _0xe6680b, _0xe80a0d, _0x5bf1d5, _0x31f69c[_0x27b8d2 + 0xf], 0x16, 0x49b40821), _0x5bf1d5 = this['md5_gg'](_0x5bf1d5, _0x4da511, _0xe6680b, _0xe80a0d, _0x31f69c[_0x27b8d2 + 0x1], 0x5, -0x9e1da9e), _0xe80a0d = this['md5_gg'](_0xe80a0d, _0x5bf1d5, _0x4da511, _0xe6680b, _0x31f69c[_0x27b8d2 + 0x6], 0x9, -0x3fbf4cc0), _0xe6680b = this['md5_gg'](_0xe6680b, _0xe80a0d, _0x5bf1d5, _0x4da511, _0x31f69c[_0x27b8d2 + 0xb], 0xe, 0x265e5a51), _0x4da511 = this['md5_gg'](_0x4da511, _0xe6680b, _0xe80a0d, _0x5bf1d5, _0x31f69c[_0x27b8d2 + 0x0], 0x14, -0x16493856), _0x5bf1d5 = this['md5_gg'](_0x5bf1d5, _0x4da511, _0xe6680b, _0xe80a0d, _0x31f69c[_0x27b8d2 + 0x5], 0x5, -0x29d0efa3), _0xe80a0d = this['md5_gg'](_0xe80a0d, _0x5bf1d5, _0x4da511, _0xe6680b, _0x31f69c[_0x27b8d2 + 0xa], 0x9, 0x2441453), _0xe6680b = this['md5_gg'](_0xe6680b, _0xe80a0d, _0x5bf1d5, _0x4da511, _0x31f69c[_0x27b8d2 + 0xf], 0xe, -0x275e197f), _0x4da511 = this['md5_gg'](_0x4da511, _0xe6680b, _0xe80a0d, _0x5bf1d5, _0x31f69c[_0x27b8d2 + 0x4], 0x14, -0x182c0438), _0x5bf1d5 = this['md5_gg'](_0x5bf1d5, _0x4da511, _0xe6680b, _0xe80a0d, _0x31f69c[_0x27b8d2 + 0x9], 0x5, 0x21e1cde6), _0xe80a0d = this['md5_gg'](_0xe80a0d, _0x5bf1d5, _0x4da511, _0xe6680b, _0x31f69c[_0x27b8d2 + 0xe], 0x9, -0x3cc8f82a), _0xe6680b = this['md5_gg'](_0xe6680b, _0xe80a0d, _0x5bf1d5, _0x4da511, _0x31f69c[_0x27b8d2 + 0x3], 0xe, -0xb2af279), _0x4da511 = this['md5_gg'](_0x4da511, _0xe6680b, _0xe80a0d, _0x5bf1d5, _0x31f69c[_0x27b8d2 + 0x8], 0x14, 0x455a14ed), _0x5bf1d5 = this['md5_gg'](_0x5bf1d5, _0x4da511, _0xe6680b, _0xe80a0d, _0x31f69c[_0x27b8d2 + 0xd], 0x5, -0x561c16fb), _0xe80a0d = this['md5_gg'](_0xe80a0d, _0x5bf1d5, _0x4da511, _0xe6680b, _0x31f69c[_0x27b8d2 + 0x2], 0x9, -0x3105c08), _0xe6680b = this['md5_gg'](_0xe6680b, _0xe80a0d, _0x5bf1d5, _0x4da511, _0x31f69c[_0x27b8d2 + 0x7], 0xe, 0x676f02d9), _0x4da511 = this['md5_gg'](_0x4da511, _0xe6680b, _0xe80a0d, _0x5bf1d5, _0x31f69c[_0x27b8d2 + 0xc], 0x14, -0x72d5b376), _0x5bf1d5 = this['md5_hh'](_0x5bf1d5, _0x4da511, _0xe6680b, _0xe80a0d, _0x31f69c[_0x27b8d2 + 0x5], 0x4, -0x5c6be), _0xe80a0d = this['md5_hh'](_0xe80a0d, _0x5bf1d5, _0x4da511, _0xe6680b, _0x31f69c[_0x27b8d2 + 0x8], 0xb, -0x788e097f), _0xe6680b = this['md5_hh'](_0xe6680b, _0xe80a0d, _0x5bf1d5, _0x4da511, _0x31f69c[_0x27b8d2 + 0xb], 0x10, 0x6d9d6122), _0x4da511 = this['md5_hh'](_0x4da511, _0xe6680b, _0xe80a0d, _0x5bf1d5, _0x31f69c[_0x27b8d2 + 0xe], 0x17, -0x21ac7f4), _0x5bf1d5 = this['md5_hh'](_0x5bf1d5, _0x4da511, _0xe6680b, _0xe80a0d, _0x31f69c[_0x27b8d2 + 0x1], 0x4, -0x5b4115bc), _0xe80a0d = this['md5_hh'](_0xe80a0d, _0x5bf1d5, _0x4da511, _0xe6680b, _0x31f69c[_0x27b8d2 + 0x4], 0xb, 0x4bdecfa9), _0xe6680b = this['md5_hh'](_0xe6680b, _0xe80a0d, _0x5bf1d5, _0x4da511, _0x31f69c[_0x27b8d2 + 0x7], 0x10, -0x944b4a0), _0x4da511 = this['md5_hh'](_0x4da511, _0xe6680b, _0xe80a0d, _0x5bf1d5, _0x31f69c[_0x27b8d2 + 0xa], 0x17, -0x41404390), _0x5bf1d5 = this['md5_hh'](_0x5bf1d5, _0x4da511, _0xe6680b, _0xe80a0d, _0x31f69c[_0x27b8d2 + 0xd], 0x4, 0x289b7ec6), _0xe80a0d = this['md5_hh'](_0xe80a0d, _0x5bf1d5, _0x4da511, _0xe6680b, _0x31f69c[_0x27b8d2 + 0x0], 0xb, -0x155ed806), _0xe6680b = this['md5_hh'](_0xe6680b, _0xe80a0d, _0x5bf1d5, _0x4da511, _0x31f69c[_0x27b8d2 + 0x3], 0x10, -0x2b10cf7b), _0x4da511 = this['md5_hh'](_0x4da511, _0xe6680b, _0xe80a0d, _0x5bf1d5, _0x31f69c[_0x27b8d2 + 0x6], 0x17, 0x4881d05), _0x5bf1d5 = this['md5_hh'](_0x5bf1d5, _0x4da511, _0xe6680b, _0xe80a0d, _0x31f69c[_0x27b8d2 + 0x9], 0x4, -0x262b2fc7), _0xe80a0d = this['md5_hh'](_0xe80a0d, _0x5bf1d5, _0x4da511, _0xe6680b, _0x31f69c[_0x27b8d2 + 0xc], 0xb, -0x1924661b), _0xe6680b = this['md5_hh'](_0xe6680b, _0xe80a0d, _0x5bf1d5, _0x4da511, _0x31f69c[_0x27b8d2 + 0xf], 0x10, 0x1fa27cf8), _0x4da511 = this['md5_hh'](_0x4da511, _0xe6680b, _0xe80a0d, _0x5bf1d5, _0x31f69c[_0x27b8d2 + 0x2], 0x17, -0x3b53a99b), _0x5bf1d5 = this['md5_ii'](_0x5bf1d5, _0x4da511, _0xe6680b, _0xe80a0d, _0x31f69c[_0x27b8d2 + 0x0], 0x6, -0xbd6ddbc), _0xe80a0d = this['md5_ii'](_0xe80a0d, _0x5bf1d5, _0x4da511, _0xe6680b, _0x31f69c[_0x27b8d2 + 0x7], 0xa, 0x432aff97), _0xe6680b = this['md5_ii'](_0xe6680b, _0xe80a0d, _0x5bf1d5, _0x4da511, _0x31f69c[_0x27b8d2 + 0xe], 0xf, -0x546bdc59), _0x4da511 = this['md5_ii'](_0x4da511, _0xe6680b, _0xe80a0d, _0x5bf1d5, _0x31f69c[_0x27b8d2 + 0x5], 0x15, -0x36c5fc7), _0x5bf1d5 = this['md5_ii'](_0x5bf1d5, _0x4da511, _0xe6680b, _0xe80a0d, _0x31f69c[_0x27b8d2 + 0xc], 0x6, 0x655b59c3), _0xe80a0d = this['md5_ii'](_0xe80a0d, _0x5bf1d5, _0x4da511, _0xe6680b, _0x31f69c[_0x27b8d2 + 0x3], 0xa, -0x70f3336e), _0xe6680b = this['md5_ii'](_0xe6680b, _0xe80a0d, _0x5bf1d5, _0x4da511, _0x31f69c[_0x27b8d2 + 0xa], 0xf, -0x100b83), _0x4da511 = this['md5_ii'](_0x4da511, _0xe6680b, _0xe80a0d, _0x5bf1d5, _0x31f69c[_0x27b8d2 + 0x1], 0x15, -0x7a7ba22f), _0x5bf1d5 = this['md5_ii'](_0x5bf1d5, _0x4da511, _0xe6680b, _0xe80a0d, _0x31f69c[_0x27b8d2 + 0x8], 0x6, 0x6fa87e4f), _0xe80a0d = this['md5_ii'](_0xe80a0d, _0x5bf1d5, _0x4da511, _0xe6680b, _0x31f69c[_0x27b8d2 + 0xf], 0xa, -0x1d31920), _0xe6680b = this['md5_ii'](_0xe6680b, _0xe80a0d, _0x5bf1d5, _0x4da511, _0x31f69c[_0x27b8d2 + 0x6], 0xf, -0x5cfebcec), _0x4da511 = this['md5_ii'](_0x4da511, _0xe6680b, _0xe80a0d, _0x5bf1d5, _0x31f69c[_0x27b8d2 + 0xd], 0x15, 0x4e0811a1), _0x5bf1d5 = this['md5_ii'](_0x5bf1d5, _0x4da511, _0xe6680b, _0xe80a0d, _0x31f69c[_0x27b8d2 + 0x4], 0x6, -0x8ac817e), _0xe80a0d = this['md5_ii'](_0xe80a0d, _0x5bf1d5, _0x4da511, _0xe6680b, _0x31f69c[_0x27b8d2 + 0xb], 0xa, -0x42c50dcb), _0xe6680b = this['md5_ii'](_0xe6680b, _0xe80a0d, _0x5bf1d5, _0x4da511, _0x31f69c[_0x27b8d2 + 0x2], 0xf, 0x2ad7d2bb), _0x4da511 = this['md5_ii'](_0x4da511, _0xe6680b, _0xe80a0d, _0x5bf1d5, _0x31f69c[_0x27b8d2 + 0x9], 0x15, -0x14792c6f), _0x5bf1d5 = this['safe_add'](_0x5bf1d5, _0x90a48a), _0x4da511 = this['safe_add'](_0x4da511, _0x4cd232), _0xe6680b = this['safe_add'](_0xe6680b, _0x4f85aa), _0xe80a0d = this['safe_add'](_0xe80a0d, _0x6facef);
                    }
                    return [
                        _0x5bf1d5,
                        _0x4da511,
                        _0xe6680b,
                        _0xe80a0d
                    ];
                }, _0x94e3a6['prototype']['md5_cmn'] = function (_0x2b4e55, _0x76da68, _0x419b5d, _0x316e26, _0x15d0a8, _0x17f48f) {
                    return this['safe_add'](this['bit_rol'](this['safe_add'](this['safe_add'](_0x76da68, _0x2b4e55), this['safe_add'](_0x316e26, _0x17f48f)), _0x15d0a8), _0x419b5d);
                }, _0x94e3a6['prototype']['md5_ff'] = function (_0x406f7d, _0x307bce, _0x5700ee, _0x118397, _0x3afe25, _0x2bf03f, _0xe7b314) {
                    return this['md5_cmn'](_0x307bce & _0x5700ee | ~_0x307bce & _0x118397, _0x406f7d, _0x307bce, _0x3afe25, _0x2bf03f, _0xe7b314);
                }, _0x94e3a6['prototype']['md5_gg'] = function (_0x31915e, _0x3ae5d3, _0x344aaf, _0xef1561, _0x411639, _0xc9ba32, _0x194f5f) {
                    return this['md5_cmn'](_0x3ae5d3 & _0xef1561 | _0x344aaf & ~_0xef1561, _0x31915e, _0x3ae5d3, _0x411639, _0xc9ba32, _0x194f5f);
                }, _0x94e3a6['prototype']['md5_hh'] = function (_0x56bbab, _0x5b97aa, _0x59cb28, _0x25ef80, _0x5417e0, _0x291314, _0x355dd8) {
                    return this['md5_cmn'](_0x5b97aa ^ _0x59cb28 ^ _0x25ef80, _0x56bbab, _0x5b97aa, _0x5417e0, _0x291314, _0x355dd8);
                }, _0x94e3a6['prototype']['md5_ii'] = function (_0x7340ea, _0x2f88e2, _0x1cda51, _0x592255, _0x5603ef, _0x31332e, _0x17f731) {
                    return this['md5_cmn'](_0x1cda51 ^ (_0x2f88e2 | ~_0x592255), _0x7340ea, _0x2f88e2, _0x5603ef, _0x31332e, _0x17f731);
                }, _0x94e3a6['prototype']['safe_add'] = function (_0x185529, _0x542b24) {
                    var _0x2d64bb = (0xffff & _0x185529) + (0xffff & _0x542b24);
                    return (_0x185529 >> 0x10) + (_0x542b24 >> 0x10) + (_0x2d64bb >> 0x10) << 0x10 | 0xffff & _0x2d64bb;
                }, _0x94e3a6['prototype']['bit_rol'] = function (_0x3f24c2, _0x2d0732) {
                    return _0x3f24c2 << _0x2d0732 | _0x3f24c2 >>> 0x20 - _0x2d0732;
                }, _0x94e3a6;
            }();
            _0x4c2fc4['MD5'] = _0xaffabf;
        },
        {}
    ],
    0x6: [
        function (_0x627f64, _0x3b5c4d, _0x2aeba5) {
            'use strict';
            Object['defineProp' + 'erty'](_0x2aeba5, '__esModule', { 'value': !0x0 });
            var _0x4ef590 = function () {
                function _0x2aa44e() {
                }
                return _0x2aa44e['mWriteBox'] = [
                    'wxf77fb880' + 'cddf362c',
                    'wx4e24f1db' + 'ac6b54bb',
                    'wxdd8d2e22' + 'b81eb6e7',
                    'wx368efd3d' + '253d9f9c',
                    'wxd5c1f9da' + '7d66191e',
                    'wxd2c09111' + '29978e05',
                    'wx34755345' + '9e2b6490',
                    'wx642d9c05' + 'ee59170a',
                    'wx214d9b69' + '1e5b328b',
                    'wxaa46e779' + '19aec8d9'
                ], _0x2aa44e;
            }();
            _0x2aeba5['WriteBoxLi' + 'st'] = _0x4ef590;
            var _0x541c29 = function (_0x1b6a45) {
                    function _0x1218e6() {
                        var _0x4a5b23 = _0x1b6a45['call'](this) || this;
                        _0x4a5b23['pos'](0x0, 0x0), _0x4a5b23['size'](0xb6, 0xfa);
                        var _0x35f89a = new Laya['Image']();
                        _0x35f89a['name'] = 'mBack', _0x35f89a['anchorX'] = 0.5, _0x35f89a['anchorY'] = 0.5, _0x35f89a['pos'](0x5b, 0x4b), _0x35f89a['size'](0x96, 0x96), _0x4a5b23['addChild'](_0x35f89a), _0x35f89a['skin'] = _0x24c22b['cdnface'] + ('main/bk1.p' + 'ng');
                        var _0x72b272 = new Laya['Image']();
                        _0x72b272['name'] = 'mBack2', _0x72b272['anchorX'] = 0.5, _0x72b272['anchorY'] = 0.5, _0x72b272['pos'](0x5b, 0x4b), _0x72b272['size'](0x96, 0x96), _0x4a5b23['addChild'](_0x72b272);
                        var _0x17f1c = new Laya['Label']();
                        _0x17f1c['name'] = 'GameName', _0x17f1c['color'] = '#000000', _0x17f1c['fontSize'] = 0x19, _0x17f1c['centerX'] = 0x0, _0x17f1c['y'] = 0xa5, _0x4a5b23['addChild'](_0x17f1c);
                        var _0x500044 = new Laya['Label']();
                        return _0x500044['name'] = 'PlayNum', _0x500044['color'] = '#000000', _0x500044['fontSize'] = 0x12, _0x500044['centerX'] = 0x0, _0x500044['y'] = 0xce, _0x4a5b23['addChild'](_0x500044), _0x4a5b23;
                    }
                    return __extends(_0x1218e6, _0x1b6a45), _0x1218e6;
                }(Laya['Box']), _0x19839c = function (_0x5cd33e) {
                    function _0x10825f() {
                        return _0x5cd33e['call'](this) || this;
                    }
                    return __extends(_0x10825f, _0x5cd33e), _0x10825f['prototype']['initCode'] = function () {
                        this['mNoIcon'] = new Laya['Label'](), this['mNoIcon']['pos'](0xa, 0x12), this['mNoIcon']['size'](0x5, 0x19), this['mNoIcon']['bgColor'] = '#FFA650', this['addChild'](this['mNoIcon']), this['mIcon'] = new Laya['Image'](), this['mIcon']['pos'](0x19, 0xc), this['mIcon']['size'](0x28, 0x28), this['addChild'](this['mIcon']), this['mName'] = new Laya['Label'](), this['mName']['pos'](0x1e, 0x12), this['mName']['size'](0xb4, 0x19), this['mName']['color'] = '#000000', this['mName']['bold'] = !0x0, this['mName']['fontSize'] = 0x19, this['addChild'](this['mName']), this['mList'] = new Laya['List'](), this['mList']['pos'](0xa, 0x46), this['mList']['size'](0x2da, 0xe6), this['mList']['spaceX'] = 0x0, this['mList']['itemRender'] = _0x541c29, this['addChild'](this['mList']);
                    }, _0x10825f;
                }(Laya['Image']), _0x24c22b = function (_0x590424) {
                    function _0x5590ef() {
                        var _0x50448c = _0x590424['call'](this) || this;
                        return _0x50448c['mIconJumpD' + 'ata'] = null, _0x50448c['mNextShowG' + 'roup'] = 0x0, _0x50448c['mStartGrou' + 'pY'] = 0x0, _0x50448c['mShowGameA' + 'ppid'] = '', _0x50448c['mGoGame'] = null, _0x50448c['mWxMenuBut' + 'tonRect'] = null, _0x50448c['width'] = Laya['stage']['width'], _0x50448c['height'] = Laya['stage']['height'], _0x50448c['x'] = Laya['stage']['width'], _0x50448c;
                    }
                    return __extends(_0x5590ef, _0x590424), _0x5590ef['prototype']['createChil' + 'dren'] = function () {
                        _0x590424['prototype']['createChil' + 'dren']['call'](this), this['createView'](_0x5590ef['uiView']);
                    }, _0x5590ef['prototype']['getMenuBut' + 'tonTop_Cen' + 'terPoint'] = function () {
                        var _0x3bbfd1 = new Laya['Point'](0x0, 0x0);
                        if (Laya['Browser']['onMiniGame']) {
                            if (_0x5590ef['mWxVer'] >= '2.1.0' && null == this['mWxMenuBut' + 'tonRect'] && null != wx['getMenuBut' + 'tonBoundin' + 'gClientRec' + 't']()) {
                                var _0x1ae517 = wx['getMenuBut' + 'tonBoundin' + 'gClientRec' + 't']();
                                null != _0x1ae517 && NaN != _0x1ae517['height'] && void 0x0 != _0x1ae517['height'] && null != _0x1ae517['height'] && (this['mWxMenuBut' + 'tonRect'] = _0x1ae517);
                            }
                            if (null != this['mWxMenuBut' + 'tonRect']) {
                                var _0x3b9695 = this['mWxMenuBut' + 'tonRect']['height'], _0x1b8054 = this['mWxMenuBut' + 'tonRect']['top'];
                                return _0x3bbfd1['x'] = _0x1b8054 * Laya['stage']['height'] / _0x5590ef['mPhone']['screenHeig' + 'ht'], _0x3bbfd1['y'] = _0x3b9695 * Laya['stage']['height'] / _0x5590ef['mPhone']['screenHeig' + 'ht'], _0x3bbfd1;
                            }
                        }
                        return _0x3bbfd1;
                    }, _0x5590ef['getJSON'] = function (_0x222f6b) {
                        if ('' == _0x222f6b || null == _0x222f6b)
                            return { 'code': -0x3e7 };
                        var _0x1dd523 = _0x222f6b['indexOf']('{', 0x0);
                        return _0x222f6b = _0x222f6b['substr'](_0x1dd523, _0x222f6b['length'] - _0x1dd523), JSON['parse'](_0x222f6b);
                    }, _0x5590ef['onBtnMouse' + 'Down'] = function (_0x4d442e) {
                        _0x4d442e['scale'](1.05, 1.05);
                    }, _0x5590ef['onBtnMouse' + 'Out'] = function (_0x316817) {
                        _0x316817['scale'](0x1, 0x1);
                    }, _0x5590ef['registImgB' + 'tnClick'] = function (_0x4d8d5, _0xd3bb97, _0x88caad, _0x12b37f) {
                        void 0x0 === _0x88caad && (_0x88caad = null), void 0x0 === _0x12b37f && (_0x12b37f = !0x0), null == _0x88caad && (_0x88caad = this), _0x12b37f && (_0x4d8d5['on'](Laya['Event']['MOUSE_DOWN'], this, this['onBtnMouse' + 'Down'], [_0x4d8d5]), _0x4d8d5['on'](Laya['Event']['MOUSE_UP'], this, this['onBtnMouse' + 'Out'], [_0x4d8d5]), _0x4d8d5['on'](Laya['Event']['MOUSE_OUT'], this, this['onBtnMouse' + 'Out'], [_0x4d8d5])), _0x4d8d5['on'](Laya['Event']['CLICK'], _0x88caad, function (_0x37ea5d) {
                            null != _0xd3bb97 && (null == _0xd3bb97['args'] ? _0xd3bb97['args'] = [_0x37ea5d] : _0xd3bb97['args']['push'](_0x37ea5d), _0xd3bb97['run']());
                        });
                    }, _0x5590ef['InitServer' + 'ListEx'] = function (_0x3419b0, _0x28599a) {
                        (_0x5590ef['mType'] = 0x2, _0x5590ef['mGameName'] = _0x28599a, null == _0x5590ef['mSelf']) && ((Laya['Browser']['onMiniGame'] && (_0x5590ef['mPhone'] = wx['getSystemI' + 'nfoSync']()), Laya['Browser']['onMiniGame']) && ((_0x5590ef['mPhone']['model']['indexOf']('iPhone\x20X') >= 0x0 || Number(_0x5590ef['mPhone']['screenHeig' + 'ht']) >= 0x32c) && (_0x5590ef['iphoneX'] = !0x0), _0x5590ef['mWxVer'] = _0x5590ef['mPhone']['SDKVersion']), (_0x5590ef['mSelf'] = new _0x5590ef())['x'] = 0x2 == _0x5590ef['mType'] ? Laya['stage']['width'] + 0xa : -Laya['stage']['width'] - 0xa, _0x5590ef['mSelf']['zOrder'] = 0x9, _0x5590ef['mSelf']['visible'] = !0x1, _0x5590ef['mSelf']['onInit_GoG' + 'ame'](), Laya['stage']['addChild'](_0x5590ef['mSelf']), _0x5590ef['mMoreList'] = _0x3419b0, _0x5590ef['InitData'](), _0x5590ef['mSelf']['onInit'](), console['log']('InitServer' + 'ListEx....' + '..........' + '.'));
                    }, _0x5590ef['InitData'] = function () {
                        _0x5590ef['mGroupList'] = [];
                        for (var _0x40291a = null, _0x5ed6c4 = 0x0; _0x5ed6c4 < _0x5590ef['mMoreList']['length']; ++_0x5ed6c4) {
                            if (void 0x0 == _0x5590ef['mMoreList'][_0x5ed6c4]['groupid'])
                                return;
                            _0x40291a != _0x5590ef['mMoreList'][_0x5ed6c4]['groupid'] && (_0x5590ef['mGroupList']['push']([]), _0x40291a = _0x5590ef['mMoreList'][_0x5ed6c4]['groupid']), _0x5590ef['mGroupList'][_0x5590ef['mGroupList']['length'] - 0x1]['push'](_0x5590ef['mMoreList'][_0x5ed6c4]);
                        }
                        console['log']('InitGroup\x20' + ':\x20', _0x5590ef['mGroupList']);
                    }, _0x5590ef['ShowList'] = function (_0x2da0d0, _0xf8fd29, _0x26d540, _0x1a1f15, _0x22c1b6, _0x2f5ec5, _0x3ed866) {
                        if (_0x5590ef['mCloseHand' + 'ler'] = _0x22c1b6, _0x5590ef['mJumpHandl' + 'e'] = _0x3ed866, _0x26d540['length'] > 0x0 && (_0x5590ef['mJumpWrite'] = _0x26d540), console['log']('MG\x20:\x20', _0x1a1f15, _0x26d540, _0xf8fd29), _0x1a1f15['length'] > 0x0) {
                            for (var _0x31449a = !0x1, _0xf1b8f0 = 0x0; _0xf1b8f0 < _0x2da0d0['length']; ++_0xf1b8f0) {
                                if ((_0x48265f = (_0x2d479c = _0x2da0d0[_0xf1b8f0])['appid']['toUpperCas' + 'e']()) == (_0x5015ef = _0x1a1f15['trim']()['toUpperCas' + 'e']())) {
                                    if (0x3 == _0x2d479c['jump_type'])
                                        return console['log']('MG\x20:\x20GoToJ' + 'ump_3', _0x1a1f15), _0x31449a = !0x0, void _0x5590ef['jumpToGame' + '_3'](_0x2d479c, function () {
                                            _0x5590ef['ShowList3'](_0x2da0d0, _0xf8fd29, _0x1a1f15, _0x22c1b6, _0x2f5ec5);
                                        }, function () {
                                            null != _0x5590ef['mCloseHand' + 'ler'] && _0x5590ef['mCloseHand' + 'ler']['run']();
                                        });
                                    break;
                                }
                            }
                            if (console['log']('MG\x20:\x20', _0x1a1f15, _0x31449a), 0x0 == _0x31449a) {
                                if (!Laya['Browser']['onIOS'])
                                    for (_0xf1b8f0 = 0x0; _0xf1b8f0 < _0x26d540['length']; ++_0xf1b8f0) {
                                        var _0x48265f = _0x26d540[_0xf1b8f0]['toUpperCas' + 'e'](), _0x5015ef = _0x1a1f15['trim']()['toUpperCas' + 'e']();
                                        if (_0x48265f == _0x5015ef) {
                                            for (var _0x15b5dd = {}, _0x12fc22 = 0x0; _0x12fc22 < _0x2da0d0['length']; ++_0x12fc22) {
                                                var _0x1e775f = _0x2da0d0[_0x12fc22];
                                                if (_0x1e775f['appid']['toUpperCas' + 'e']() == _0x1a1f15['trim']()['toUpperCas' + 'e']()) {
                                                    _0x15b5dd = _0x1e775f;
                                                    break;
                                                }
                                            }
                                            _0x31449a = !0x0;
                                            var _0x2d479c = {};
                                            _0x2d479c['id'] = _0x15b5dd['id'], _0x2d479c['path'] = '', _0x2d479c['param'] = _0x15b5dd['param'], _0x2d479c['appid'] = '', _0x2d479c['name'] = '', _0x2d479c['box_appid'] = _0x1a1f15, _0x2d479c['box_path'] = 'pages/inde' + 'x/index?', console['log']('MG\x20:\x20ToJum' + 'p3\x20:\x20', _0x2d479c), _0x5590ef['jumpToGame' + '_3'](_0x2d479c, function () {
                                                _0x5590ef['ShowList3'](_0x2da0d0, _0xf8fd29, _0x1a1f15, _0x22c1b6, _0x2f5ec5);
                                            }, function () {
                                                null != _0x5590ef['mCloseHand' + 'ler'] && _0x5590ef['mCloseHand' + 'ler']['run']();
                                            });
                                        }
                                    }
                                0x0 == _0x31449a && _0x5590ef['ShowList3'](_0x2da0d0, _0xf8fd29, _0x1a1f15, _0x22c1b6, _0x2f5ec5);
                            }
                        } else
                            _0x5590ef['ShowList3'](_0x2da0d0, _0xf8fd29, _0x1a1f15, _0x22c1b6, _0x2f5ec5);
                    }, _0x5590ef['ShowList3'] = function (_0x405f93, _0x271287, _0x324f1e, _0x800841, _0x50e8bb) {
                        if (void 0x0 === _0x50e8bb && (_0x50e8bb = 0x9), Laya['Browser']['onMiniGame'] && wx['showLoadin' + 'g']({
                                'title': '资源加载中',
                                'mask': !0x0
                            }), null == _0x5590ef['mSelf'] ? _0x405f93['length'] > 0x0 && _0x5590ef['InitServer' + 'ListEx'](_0x405f93, _0x271287) : Laya['timer']['once'](0x12c, _0x5590ef['mSelf'], _0x5590ef['mSelf']['latterLoad' + 'icon2'], [], !0x0), null != _0x5590ef['mSelf']) {
                            _0x5590ef['iphoneX'] && (_0x5590ef['mSelf']['mTitle']['top'] = 0x3c, _0x5590ef['mSelf']['mPanel']['top'] = _0x5590ef['mSelf']['mTitle']['top'] + 0x64);
                            var _0x486896 = _0x5590ef['mSelf']['getMenuBut' + 'tonTop_Cen' + 'terPoint']();
                            _0x486896['x'] > 0x0 ? (_0x5590ef['mSelf']['mTitle']['top'] = _0x486896['x'] + _0x486896['y'] / 0x2 - _0x5590ef['mSelf']['mTitle']['height'] / 0x2, _0x5590ef['mSelf']['mPanel']['top'] = _0x5590ef['mSelf']['mTitle']['top'] + 0x64, console['log']('use\x20getMen' + 'uButtonTop' + '_CanterPoi' + 'nt\x20.\x20', _0x486896)) : console['log']('no\x20use\x20get' + 'MenuButton' + 'Top_Canter' + 'Point\x20.\x20', _0x486896), _0x5590ef['mSelf']['mShowGameA' + 'ppid'] = _0x324f1e, _0x5590ef['mSelf']['zOrder'] = _0x50e8bb, _0x5590ef['mSelf']['visible'] = !0x0, _0x5590ef['mSelf']['ShowAllGam' + 'es2'](), _0x5590ef['checkLoadI' + 'conCount']();
                        }
                    }, _0x5590ef['checkLoadI' + 'conCount'] = function () {
                        _0x5590ef['latterRunS' + 'howTween']();
                    }, _0x5590ef['latterRunS' + 'howTween'] = function () {
                        Laya['Browser']['onMiniGame'] && wx['hideLoadin' + 'g'](), Laya['timer']['callLater'](_0x5590ef['mSelf'], function () {
                            0x2 == _0x5590ef['mType'] ? (_0x5590ef['mSelf']['x'] = Laya['stage']['width'] + 0xa, Laya['Tween']['to'](_0x5590ef['mSelf'], { 'x': 0x0 }, 0x15e, null, new Laya['Handler'](this, function () {
                                _0x5590ef['mSelf']['ShowGameAp' + 'p']();
                            }))) : (_0x5590ef['mSelf']['x'] = -Laya['stage']['width'] - 0xa, Laya['Tween']['to'](_0x5590ef['mSelf'], { 'x': 0x0 }, 0x15e, null, new Laya['Handler'](this, function () {
                                _0x5590ef['mSelf']['ShowGameAp' + 'p']();
                            })));
                        });
                    }, _0x5590ef['GetIndexLi' + 'st'] = function (_0x476438) {
                        for (var _0x17de6f = [], _0xc7d3af = 0x0; _0xc7d3af < _0x476438['length']; ++_0xc7d3af)
                            0x1 == Number(_0x476438[_0xc7d3af]['show_index']) && String(_0x476438[_0xc7d3af]['url_btn'])['toString']()['length'] > 0xa && String(_0x476438[_0xc7d3af]['url_result'])['toString']()['length'] > 0xa && _0x17de6f['push'](_0x476438[_0xc7d3af]);
                        return _0x17de6f;
                    }, _0x5590ef['GetIndexRa' + 'ndom'] = function (_0x2f268e) {
                        var _0x4138c = _0x5590ef['GetIndexLi' + 'st'](_0x2f268e);
                        if (_0x4138c['length'] > 0x0) {
                            var _0x31fe42 = _0x4138c[_0x5590ef['getRandom'](0x0, _0x4138c['length'] - 0x1)];
                            if (void 0x0 != _0x31fe42)
                                return _0x31fe42;
                        }
                        return null;
                    }, _0x5590ef['GetIndexRa' + 'ndomList'] = function (_0x3601b9, _0x227204) {
                        var _0x19b4b2 = [], _0x366d27 = _0x5590ef['GetIndexLi' + 'st'](_0x3601b9);
                        if (_0x366d27['length'] > 0x0)
                            for (; _0x227204 > 0x0 && _0x366d27['length'] > 0x0;) {
                                var _0x348cad = _0x366d27['splice'](_0x5590ef['getRandom'](0x0, _0x366d27['length'] - 0x1), 0x1);
                                _0x19b4b2['push'](_0x348cad[0x0]), _0x227204--;
                            }
                        return _0x19b4b2;
                    }, _0x5590ef['CloseList'] = function () {
                        null != _0x5590ef['mSelf'] && (0x2 == _0x5590ef['mType'] ? Laya['Tween']['to'](_0x5590ef['mSelf'], { 'x': Laya['stage']['width'] + 0xa }, 0x1a4, null, new Laya['Handler'](this, function () {
                            _0x5590ef['mSelf']['visible'] = !0x1, null != _0x5590ef['mCloseHand' + 'ler'] && (_0x5590ef['mCloseHand' + 'ler']['once'] = !0x0, _0x5590ef['mCloseHand' + 'ler']['run'](), _0x5590ef['mCloseHand' + 'ler'] = null);
                        })) : Laya['Tween']['to'](_0x5590ef['mSelf'], { 'x': -Laya['stage']['width'] - 0xa }, 0x1a4, null, new Laya['Handler'](this, function () {
                            _0x5590ef['mSelf']['visible'] = !0x1, null != _0x5590ef['mCloseHand' + 'ler'] && (_0x5590ef['mCloseHand' + 'ler']['once'] = !0x0, _0x5590ef['mCloseHand' + 'ler']['run'](), _0x5590ef['mCloseHand' + 'ler'] = null);
                        })));
                    }, _0x5590ef['prototype']['onInit_GoG' + 'ame'] = function () {
                        var _0x2efbfb = this;
                        if (null == this['mGoGame']) {
                            this['mGoGame'] = new Laya['Image'](), this['mGoGame']['size'](this['width'], this['height']), this['mGoGame']['pos'](0x0, 0x0);
                            var _0x40a221 = new Laya['Label']();
                            _0x40a221['left'] = 0x0, _0x40a221['right'] = 0x0, _0x40a221['top'] = 0x0, _0x40a221['bottom'] = 0x0, _0x40a221['bgColor'] = '#000000', _0x40a221['alpha'] = 0.5, this['mGoGame']['addChild'](_0x40a221), _0x40a221['on'](Laya['Event']['CLICK'], _0x40a221, function () {
                                _0x2efbfb['mGoGame']['visible'] = !0x1;
                            });
                            var _0x3c333a = new Laya['Image']();
                            _0x3c333a['name'] = 'GameNameBa' + 'ck', _0x3c333a['size'](0x226, 0x2a8), _0x3c333a['mouseEnabl' + 'ed'] = !0x0, _0x3c333a['mouseThrou' + 'gh'] = !0x1, _0x3c333a['pos']((this['width'] - _0x3c333a['width']) / 0x2, (this['height'] - _0x3c333a['height']) / 0x2), _0x3c333a['skin'] = _0x5590ef['cdnface'] + ('main/bg.pn' + 'g'), this['mGoGame']['addChild'](_0x3c333a), _0x40a221['on'](Laya['Event']['CLICK'], _0x40a221, function () {
                            });
                            var _0x514eb8 = new Laya['Image']();
                            _0x514eb8['name'] = 'StarBack', _0x514eb8['skin'] = _0x5590ef['cdnface'] + ('main/popup' + '_share_sta' + 'r.png'), _0x514eb8['size'](0x1ea, 0x10f), _0x514eb8['centerX'] = 0x0, _0x514eb8['y'] = 0x1e, _0x3c333a['addChild'](_0x514eb8), this['mIconMax'] = new Laya['Image'](), this['mIconMax']['name'] = 'IconBack', this['mIconMax']['skin'] = _0x5590ef['cdnface'] + ('main/bk2.p' + 'ng'), this['mIconMax']['size'](0xb4, 0xb4), this['mIconMax']['centerX'] = 0x0, this['mIconMax']['centerY'] = 0xf, _0x514eb8['addChild'](this['mIconMax']);
                            var _0x34e604 = new Laya['Image']();
                            _0x34e604['pos'](0x0, 0x0), _0x34e604['size'](0xb4, 0xb4), _0x34e604['skin'] = _0x5590ef['cdnface'] + ('main/180s.' + 'png'), this['mIconMax']['addChild'](_0x34e604), this['mIconName'] = new Laya['Label'](), this['mIconName']['size'](0x1ea, 0x28), this['mIconName']['centerX'] = 0x0, this['mIconName']['y'] = _0x514eb8['y'] + _0x514eb8['height'] + 0xa, this['mIconName']['align'] = 'center', this['mIconName']['fontSize'] = 0x24, this['mIconName']['color'] = '#332E4D', this['mIconName']['bold'] = !0x0, _0x3c333a['addChild'](this['mIconName']), this['mIconTips'] = new Laya['Label'](), this['mIconTips']['size'](0x1d6, 0x50), this['mIconTips']['centerX'] = 0x0, this['mIconTips']['y'] = _0x514eb8['y'] + _0x514eb8['height'] + 0x46, this['mIconTips']['align'] = 'center', this['mIconTips']['fontSize'] = 0x1a, this['mIconTips']['color'] = '#A1A1B3', this['mIconTips']['bold'] = !0x1, this['mIconTips']['wordWrap'] = !0x0, this['mIconTips']['leading'] = 0x5, _0x3c333a['addChild'](this['mIconTips']), this['mIconGoGam' + 'e'] = new Laya['Image'](), this['mIconGoGam' + 'e']['skin'] = _0x5590ef['cdnface'] + ('main/popup' + '_btn_begin' + '.png'), this['mIconGoGam' + 'e']['size'](0x168, 0x50), this['mIconGoGam' + 'e']['centerX'] = 0x0, this['mIconGoGam' + 'e']['y'] = this['mIconTips']['y'] + this['mIconTips']['height'] + 0x2d, _0x3c333a['addChild'](this['mIconGoGam' + 'e']), this['mIconBotto' + 'm'] = new Laya['Label'](), this['mIconBotto' + 'm']['size'](0x1d6, 0x50), this['mIconBotto' + 'm']['centerX'] = 0x0, this['mIconBotto' + 'm']['y'] = this['mIconGoGam' + 'e']['y'] + this['mIconGoGam' + 'e']['height'] + 0x14, this['mIconBotto' + 'm']['align'] = 'center', this['mIconBotto' + 'm']['fontSize'] = 0x18, this['mIconBotto' + 'm']['color'] = '#8A91E6', this['mIconBotto' + 'm']['text'] = '和好友一起玩吧', _0x3c333a['addChild'](this['mIconBotto' + 'm']);
                            var _0x4f0645 = new Laya['Image']();
                            _0x4f0645['size'](0x64, 0x64), _0x4f0645['right'] = 0x0, _0x4f0645['top'] = 0x0, _0x5590ef['registImgB' + 'tnClick'](_0x4f0645, new Laya['Handler'](this, function (_0x422821) {
                                _0x422821['stopPropag' + 'ation'](), _0x2efbfb['mGoGame']['visible'] = !0x1;
                            }));
                            var _0x6840d3 = new Laya['Image']();
                            _0x6840d3['name'] = 'IconBack', _0x6840d3['skin'] = _0x5590ef['cdnface'] + ('main/close' + '.png'), _0x6840d3['size'](0x1e, 0x1e), _0x6840d3['right'] = 0x14, _0x6840d3['top'] = 0x14, _0x3c333a['addChild'](_0x6840d3), _0x3c333a['addChild'](_0x4f0645), _0x5590ef['registImgB' + 'tnClick'](this['mIconGoGam' + 'e'], new Laya['Handler'](this, function (_0x69c5e7) {
                                _0x69c5e7['stopPropag' + 'ation'](), _0x2efbfb['jumpToGame' + 'FromData'](_0x2efbfb['mIconJumpD' + 'ata']), _0x2efbfb['mGoGame']['visible'] = !0x1;
                            })), this['mGoGame']['visible'] = !0x1, this['addChild'](this['mGoGame']);
                        }
                    }, _0x5590ef['prototype']['onInit'] = function () {
                        if (0x0 == _0x5590ef['mMoreList']['length'])
                            return _0x5590ef['mSelf']['visible'] = !0x1, void console['log']('No\x20More\x20Ga' + 'meList\x20...' + '\x20');
                        this['mPanel']['vScrollBar' + 'Skin'] = '', this['mPanel']['hScrollBar' + 'Skin'] = void 0x0, this['mBack']['skin'] = _0x5590ef['cdnface'] + ('main/head_' + 'btn_back1.' + 'png'), this['mGameName']['text'] = _0x5590ef['mGameName'], _0x5590ef['registImgB' + 'tnClick'](this['mBack'], new Laya['Handler'](this, function (_0x47bee3) {
                            _0x47bee3['stopPropag' + 'ation'](), _0x5590ef['CloseList']();
                        })), _0x5590ef['registImgB' + 'tnClick'](this['mBack2'], new Laya['Handler'](this, function (_0x19fa1c) {
                            _0x19fa1c['stopPropag' + 'ation'](), _0x5590ef['CloseList']();
                        }));
                    }, _0x5590ef['prototype']['AddOneGrou' + 'pPage'] = function () {
                        if (this['mNextShowG' + 'roup'] < _0x5590ef['mGroupList']['length']) {
                            var _0x19bcd0 = new _0x19839c();
                            _0x19bcd0['initCode'](), this['mPanel']['addChild'](_0x19bcd0);
                            var _0x32e78b = _0x5590ef['mGroupList'][this['mNextShowG' + 'roup']];
                            if (_0x19bcd0['y'] = this['mStartGrou' + 'pY'], _0x19bcd0['x'] = 0x0, _0x19bcd0['height'] = this['mPanel']['height'], this['init_page_' + 'game'](_0x19bcd0, _0x32e78b), this['mStartGrou' + 'pY'] += _0x19bcd0['height'], console['log']('changeHand' + 'ler\x20:\x20', this['mPanel']['vScrollBar']['max'], this['mNextShowG' + 'roup'], _0x5590ef['mGroupList']['length']), this['mNextShowG' + 'roup'] == _0x5590ef['mGroupList']['length'] - 0x1) {
                                var _0x29ce15 = new Laya['Label']();
                                _0x29ce15['text'] = '别扯了，已经到底了.' + '..', _0x29ce15['size'](0x1d6, 0x12c), _0x29ce15['centerX'] = 0x0, _0x29ce15['y'] = _0x19bcd0['y'] + _0x19bcd0['height'] + 0xa, _0x29ce15['align'] = 'center', _0x29ce15['fontSize'] = 0x18, _0x29ce15['color'] = '#8A91E6', this['mPanel']['addChild'](_0x29ce15);
                            }
                            if (++this['mNextShowG' + 'roup'], _0x19bcd0['y'] + _0x19bcd0['height'] > 0x5dc)
                                return !0x1;
                        }
                        return !0x0;
                    }, _0x5590ef['prototype']['ShowAllGam' + 'es'] = function () {
                        if (0x0 == this['mNextShowG' + 'roup']) {
                            for (this['mPanel']['removeChil' + 'dren'](), this['mStartGrou' + 'pY'] = 0x0, console['log']('start\x20:\x20', this['mNextShowG' + 'roup'], _0x5590ef['mGroupList']['length']), this['mNextShowG' + 'roup'] = 0x0; this['mNextShowG' + 'roup'] < _0x5590ef['mGroupList']['length'];)
                                this['AddOneGrou' + 'pPage']();
                            this['mPanel']['refresh']();
                        }
                    }, _0x5590ef['prototype']['ShowAllGam' + 'es2'] = function () {
                        0x0 == this['mNextShowG' + 'roup'] && (this['mPanel']['removeChil' + 'dren'](), this['mStartGrou' + 'pY'] = 0x0, Laya['timer']['once'](0xc8, this, this['ShowNextGr' + 'oup']));
                    }, _0x5590ef['prototype']['ShowNextGr' + 'oup'] = function () {
                        this['mNextShowG' + 'roup'] < _0x5590ef['mGroupList']['length'] ? (this['AddOneGrou' + 'pPage'](), this['mPanel']['refresh'](), Laya['timer']['once'](0x12c, this, this['ShowNextGr' + 'oup']), console['log']('show\x20group' + '\x20:\x20', this['mNextShowG' + 'roup'], _0x5590ef['mGroupList']['length'])) : console['log']('group\x20show' + '\x20over\x20.');
                    }, _0x5590ef['prototype']['ShowGameAp' + 'p'] = function () {
                        this['mIconJumpD' + 'ata'] = null;
                        for (var _0x1dce15 = 0x0; _0x1dce15 < _0x5590ef['mMoreList']['length']; ++_0x1dce15) {
                            if (_0x5590ef['mMoreList'][_0x1dce15]['appid']['trim']()['toUpperCas' + 'e']() == _0x5590ef['mSelf']['mShowGameA' + 'ppid']['trim']()['toUpperCas' + 'e']()) {
                                this['mIconJumpD' + 'ata'] = _0x5590ef['mMoreList'][_0x1dce15];
                                break;
                            }
                        }
                        null != this['mIconJumpD' + 'ata'] ? (this['mIconMax']['skin'] = this['mIconJumpD' + 'ata']['url_icon'], this['mIconName']['text'] = this['mIconJumpD' + 'ata']['name'], this['mIconTips']['text'] = this['mIconJumpD' + 'ata']['msg'], this['mGoGame']['visible'] = !0x0) : null != this['mGoGame'] && (this['mGoGame']['visible'] = !0x1);
                    }, _0x5590ef['prototype']['drawCircle' + 'Rect'] = function (_0x427efc, _0x4d1489, _0x48eb4b, _0x315bcb, _0x482444, _0x49f99b, _0x5c3832, _0x2cbb8f, _0x17e6f4) {
                        void 0x0 === _0x2cbb8f && (_0x2cbb8f = 0x0), void 0x0 === _0x17e6f4 && (_0x17e6f4 = '');
                        var _0x814cfc = [
                            [
                                'moveTo',
                                _0x49f99b,
                                0x0
                            ],
                            [
                                'arcTo',
                                _0x315bcb,
                                0x0,
                                _0x315bcb,
                                _0x49f99b,
                                _0x49f99b
                            ],
                            [
                                'arcTo',
                                _0x315bcb,
                                _0x482444,
                                _0x315bcb - _0x49f99b,
                                _0x482444,
                                _0x49f99b
                            ],
                            [
                                'arcTo',
                                0x0,
                                _0x482444,
                                0x0,
                                _0x482444 - _0x49f99b,
                                _0x49f99b
                            ],
                            [
                                'arcTo',
                                0x0,
                                0x0,
                                _0x49f99b,
                                0x0,
                                _0x49f99b
                            ]
                        ];
                        _0x2cbb8f > 0x0 ? _0x427efc['drawPath'](_0x4d1489, _0x48eb4b, _0x814cfc, { 'fillStyle': _0x5c3832 }, {
                            'strokeStyle': _0x17e6f4,
                            'lineWidth': _0x2cbb8f['toString']()
                        }) : _0x427efc['drawPath'](_0x4d1489, _0x48eb4b, _0x814cfc, { 'fillStyle': _0x5c3832 });
                    }, _0x5590ef['prototype']['init_page_' + 'game'] = function (_0xf45abc, _0x2c926f) {
                        _0xf45abc['mName']['text'] = _0x2c926f[0x0]['groupname'];
                        var _0xb7c08a = _0x2c926f[0x0]['groupicon'];
                        if (_0xb7c08a['length'] > 0xa ? (_0xf45abc['mNoIcon']['visible'] = !0x1, _0xf45abc['mIcon']['visible'] = !0x0, _0xf45abc['mIcon']['skin'] = _0xb7c08a, _0xf45abc['mName']['x'] = _0xf45abc['mIcon']['x'] + _0xf45abc['mIcon']['width'] + 0xa) : (_0xf45abc['mNoIcon']['visible'] = !0x0, _0xf45abc['mIcon']['visible'] = !0x1, _0xf45abc['mName']['x'] = _0xf45abc['mIcon']['x']), Laya['stage']['width'] > Laya['stage']['height']) {
                            var _0x50b184 = Laya['stage']['width'];
                            0x1 == _0x5590ef['iphoneX'] && (_0x50b184 = Laya['stage']['width'] - 0x3c);
                            var _0x117917 = Math['floor'](_0x50b184 / 0xb6);
                            _0xf45abc['width'] = Laya['stage']['width'], _0xf45abc['mList']['width'] = 0xb6 * _0x117917, _0xf45abc['mList']['x'] = (Laya['stage']['width'] - _0xf45abc['mList']['width']) / 0x2, _0x5b81a7 = _0xf45abc['mList']['x'] - _0xf45abc['mNoIcon']['x'], (_0xf45abc['mNoIcon']['x'] += _0x5b81a7, _0xf45abc['mIcon']['x'] += _0x5b81a7, _0xf45abc['mName']['x'] += _0x5b81a7, _0xf45abc['mList']['repeatX'] = _0x117917, _0xf45abc['mList']['repeatY'] = Math['ceil'](_0x2c926f['length'] / _0x117917));
                        } else {
                            if (Laya['stage']['width'] <= 0x2d8) {
                                _0xf45abc['mList']['repeatX'] = 0x3, _0xf45abc['mList']['repeatY'] = Math['ceil'](_0x2c926f['length'] / 0x3), _0xf45abc['width'] = Laya['stage']['width'], _0xf45abc['mList']['width'] = 0x222, _0xf45abc['mList']['x'] = (Laya['stage']['width'] - _0xf45abc['mList']['width']) / 0x2;
                                var _0x5b81a7 = _0xf45abc['mList']['x'] - _0xf45abc['mNoIcon']['x'];
                                _0xf45abc['mNoIcon']['x'] += _0x5b81a7, _0xf45abc['mIcon']['x'] += _0x5b81a7, _0xf45abc['mName']['x'] += _0x5b81a7;
                            } else
                                _0xf45abc['mList']['repeatX'] = 0x4, _0xf45abc['mList']['repeatY'] = Math['ceil'](_0x2c926f['length'] / 0x4);
                        }
                        _0xf45abc['height'] = 0x46 + 0xfa * _0xf45abc['mList']['repeatY'], _0xf45abc['mList']['selectEnab' + 'le'] = !0x0, _0xf45abc['mList']['renderHand' + 'ler'] = new Laya['Handler'](this, this['onListRend' + 'er']), _0xf45abc['mList']['mouseHandl' + 'er'] = new Laya['Handler'](this, this['listmouse']), _0xf45abc['mList']['array'] = _0x2c926f;
                    }, _0x5590ef['getRandom'] = function (_0x4459ea, _0x4dce5e) {
                        return Math['round'](Math['random']() * (_0x4dce5e - _0x4459ea)) + _0x4459ea;
                    }, _0x5590ef['prototype']['onListRend' + 'er'] = function (_0x13ba36, _0x4ae3e2) {
                        var _0x3f7c5c = _0x13ba36['dataSource'], _0x2a529a = _0x13ba36['getChildBy' + 'Name']('GameName'), _0x55fffc = _0x13ba36['getChildBy' + 'Name']('PlayNum'), _0x2adb3f = _0x13ba36['getChildBy' + 'Name']('mBack2');
                        _0x2a529a['text'] = _0x3f7c5c['name'];
                        var _0x50a707 = Number(_0x3f7c5c['base']);
                        if (void 0x0 == _0x3f7c5c['basenum'] || 0x0 == Number(_0x3f7c5c['basenum'])) {
                            var _0x4cf923 = _0x50a707 - _0x50a707 / 0xa, _0x3b4436 = _0x50a707 + _0x50a707 / 0xa;
                            _0x3f7c5c['basenum'] = Math['floor'](_0x5590ef['getRandom'](_0x4cf923, _0x3b4436) / 0x2710);
                        }
                        _0x55fffc['text'] = _0x3f7c5c['basenum'] + '万人在玩', _0x5590ef['mListSrcs']['push']([
                            _0x2adb3f,
                            _0x3f7c5c['url_icon'] + '?t=' + _0x3f7c5c['updated_ti' + 'me']
                        ]), 0x1 == _0x5590ef['mListSrcs']['length'] && Laya['timer']['once'](0x12c, this, this['latterLoad' + 'icon2'], [], !0x0), _0x5590ef['registImgB' + 'tnClick'](_0x2adb3f, null, this);
                    }, _0x5590ef['prototype']['latterLoad' + 'icon2'] = function () {
                        if (Laya['loader']['retryNum'] = 0xa, (0x0 != _0x5590ef['mListSrcs']['length'] || 0x0 != _0x5590ef['mListSrcs2']['length']) && 0x0 != _0x5590ef['mSelf']['visible']) {
                            var _0x556102 = null, _0xa244dc = '';
                            if (_0x5590ef['mListSrcs']['length'] > 0x0)
                                _0x556102 = (_0xbfa791 = _0x5590ef['mListSrcs']['shift']())[0x0], _0xa244dc = _0xbfa791[0x1], _0x5590ef['mListSrcs2']['push']([
                                    _0x556102,
                                    _0xa244dc
                                ]);
                            else {
                                if (!(_0x5590ef['mReloadCou' + 'nt'] <= 0x1 && _0x5590ef['mListSrcs2']['length'] > 0x0))
                                    return;
                                _0x5590ef['mListSrcs'] = _0x5590ef['mListSrcs2'], _0x5590ef['mListSrcs2'] = [], _0x5590ef['mReloadCou' + 'nt']++;
                                var _0x3e9e6a = _0x5590ef['mListSrcs']['length'];
                                console['log']('reload\x20cou' + 'nt\x20=\x20', _0x3e9e6a);
                                var _0xbfa791 = _0x5590ef['mListSrcs']['shift']();
                                _0x556102 = _0xbfa791[0x0], _0xa244dc = _0xbfa791[0x1], _0x5590ef['mListSrcs2']['push']([
                                    _0x556102,
                                    _0xa244dc
                                ]);
                            }
                            if (0x0 == _0x556102['numChildre' + 'n']) {
                                var _0x5d0865 = new Laya['Image']();
                                _0x5d0865['pos'](0x0, 0x0), _0x5d0865['size'](0x96, 0x96), _0x5d0865['skin'] = _0x5590ef['cdnface'] + ('main/150s.' + 'png'), _0x556102['addChild'](_0x5d0865);
                            }
                            _0x556102['loadImage'](_0xa244dc, new Laya['Handler'](this, function () {
                                for (var _0x510f28 = [], _0x493725 = 0x0; _0x493725 < _0x5590ef['mListSrcs2']['length']; ++_0x493725)
                                    _0x5590ef['mListSrcs2'][_0x493725][0x1] != _0xa244dc && _0x510f28['push'](_0x5590ef['mListSrcs2'][_0x493725]);
                                _0x5590ef['mListSrcs2'] = _0x510f28, _0x5590ef['mLoadCount']++, _0x5590ef['mSelf']['latterLoad' + 'icon2'](), Laya['timer']['once'](0x7d0, this, this['latterLoad' + 'icon2'], [], !0x0);
                            })), Laya['timer']['once'](0x7d0, this, this['latterLoad' + 'icon2'], [], !0x0);
                        }
                    }, _0x5590ef['prototype']['latterLoad' + 'icon'] = function (_0x34800c, _0x395972) {
                        if (Laya['loader']['retryNum'] = 0xa, _0x34800c['skin'] = _0x395972, _0x34800c['size'](0x96, 0x96), 0x0 == _0x34800c['numChildre' + 'n']) {
                            var _0x2bd7a5 = new Laya['Image']();
                            _0x2bd7a5['pos'](0x0, 0x0), _0x2bd7a5['size'](0x96, 0x96), _0x2bd7a5['skin'] = _0x5590ef['cdnface'] + ('main/150s.' + 'png'), _0x34800c['addChild'](_0x2bd7a5);
                        }
                    }, _0x5590ef['prototype']['listmouse'] = function (_0x442d8f, _0x587122) {
                        if (_0x442d8f['type'] == Laya['Event']['CLICK']) {
                            var _0x481aab = _0x442d8f['currentTar' + 'get']['dataSource'];
                            'mBack2' == _0x442d8f['target']['name'] && (_0x442d8f['stopPropag' + 'ation'](), this['jumpToGame' + 'FromData'](_0x481aab));
                        }
                    }, _0x5590ef['prototype']['isJumpWrit' + 'eList'] = function (_0x3526b2) {
                        for (var _0x52dec9 = !0x1, _0x31e89a = 0x0; _0x31e89a < _0x5590ef['mJumpWrite']['length']; ++_0x31e89a) {
                            _0x5590ef['mJumpWrite'][_0x31e89a]['trim']()['toUpperCas' + 'e']() == _0x3526b2['trim']()['toUpperCas' + 'e']() && (_0x52dec9 = !0x0);
                        }
                        return _0x52dec9;
                    }, _0x5590ef['prototype']['jumpToGame' + 'FromData'] = function (_0x4a6dcf) {
                        if (null != _0x4a6dcf && Laya['Browser']['onMiniGame']) {
                            var _0x46c541 = _0x4a6dcf['path'], _0x2a8714 = _0x4a6dcf['param'], _0x21de5e = _0x4a6dcf['appid'], _0x28cba0 = _0x21de5e, _0x5ed048 = _0x21de5e['split']('?');
                            0x2 == _0x5ed048['length'] && (_0x28cba0 = _0x5ed048[0x0]);
                            var _0x33d3f4 = _0x21de5e['split']('&');
                            0x2 == _0x33d3f4['length'] && (_0x28cba0 = _0x33d3f4[0x0]);
                            var _0x314f95 = Number(_0x4a6dcf['jump_type']), _0x36585c = 'https://tc' + 'dn.wanzhus' + 'hipin.cn/x' + 'cx/set/qrc' + 'ode/' + _0x28cba0 + '.jpg?t=' + _0x4a6dcf['updated_ti' + 'me'];
                            if (void 0x0 != _0x4a6dcf['big_url'] && (_0x36585c = _0x4a6dcf['big_url']), console['log']('list\x20click' + '\x20:\x20', _0x4a6dcf, _0x36585c), _0x46c541['length'] < 0x5 && (_0x46c541 = 'pages/inde' + 'x/index'), Laya['Browser']['onMiniGame']) {
                                if (_0x5590ef['mWxVer'] >= '2.2.0') {
                                    var _0x3943c0 = function (_0x38258e) {
                                            String(_0x38258e['errMsg'])['indexOf'](':fail\x20canc' + 'el') <= 0x0 ? (wx['previewIma' + 'ge']({ 'urls': [_0x36585c] }), console['log']('跳转错误：显示二维码' + '：', _0x21de5e, _0x4a6dcf['name'], _0x38258e['errMsg']), _0x5590ef['mJumpHandl' + 'e'] && (_0x5590ef['mJumpHandl' + 'e']['args'] = [
                                                0x3,
                                                Number(_0x4a6dcf['id']),
                                                _0x314f95 >= 0x2,
                                                !0x0
                                            ], _0x5590ef['mJumpHandl' + 'e']['run']())) : (console['log']('用户取消：', _0x21de5e, _0x4a6dcf['name'], _0x38258e['errMsg']), _0x5590ef['mJumpHandl' + 'e'] && (_0x5590ef['mJumpHandl' + 'e']['args'] = [
                                                0x2,
                                                Number(_0x4a6dcf['id']),
                                                _0x314f95 >= 0x2,
                                                !0x0
                                            ], _0x5590ef['mJumpHandl' + 'e']['run']()));
                                        }, _0x40f166 = function (_0xdc29cb) {
                                            console['log']('跳转成功', _0x21de5e, _0x4a6dcf['name'], _0xdc29cb), _0x5590ef['mJumpHandl' + 'e'] && (_0x5590ef['mJumpHandl' + 'e']['args'] = [
                                                0x1,
                                                Number(_0x4a6dcf['id']),
                                                _0x314f95 >= 0x2,
                                                !0x0
                                            ], _0x5590ef['mJumpHandl' + 'e']['run']());
                                        };
                                    if (this['isJumpWrit' + 'eList'](_0x21de5e))
                                        return wx['navigateTo' + 'MiniProgra' + 'm']({
                                            'appId': _0x21de5e,
                                            'path': _0x46c541 + '?' + _0x2a8714,
                                            'fail': _0x3943c0,
                                            'success': _0x40f166
                                        }), void console['log']('在列表中直接跳转：', _0x21de5e, _0x4a6dcf['name'], _0x46c541);
                                    if (0x0 == _0x314f95)
                                        wx['previewIma' + 'ge']({
                                            'urls': [_0x36585c],
                                            'success': function (_0x137f14) {
                                                console['log']('预览图片成功');
                                            }
                                        }), console['log']('二维码显示：', _0x21de5e, _0x4a6dcf['name'], _0x314f95), _0x5590ef['mJumpHandl' + 'e'] && (_0x5590ef['mJumpHandl' + 'e']['args'] = [
                                            0x3,
                                            Number(_0x4a6dcf['id']),
                                            !0x1,
                                            !0x0
                                        ], _0x5590ef['mJumpHandl' + 'e']['run']());
                                    else {
                                        if (0x1 == _0x314f95)
                                            wx['navigateTo' + 'MiniProgra' + 'm']({
                                                'appId': _0x21de5e,
                                                'path': _0x46c541 + '?' + _0x2a8714,
                                                'fail': _0x3943c0,
                                                'success': _0x40f166
                                            }), console['log']('直接跳转：', _0x21de5e, _0x4a6dcf['name'], _0x46c541 + '?' + _0x2a8714);
                                        else {
                                            if (_0x314f95 >= 0x2) {
                                                var _0x1b75b3 = String(_0x4a6dcf['box_appid']);
                                                if (_0x1b75b3['length'] < 0xc)
                                                    wx['navigateTo' + 'MiniProgra' + 'm']({
                                                        'appId': _0x21de5e,
                                                        'path': _0x46c541 + '?' + _0x2a8714,
                                                        'fail': _0x3943c0,
                                                        'success': _0x40f166
                                                    }), console['log']('直接跳转：盒子app' + 'id错误', _0x21de5e, _0x4a6dcf['name'], _0x46c541 + '?' + _0x2a8714, _0x1b75b3);
                                                else {
                                                    var _0x285f29 = String(_0x4a6dcf['box_path']);
                                                    _0x285f29['length'] < 0x5 ? _0x285f29 = _0x46c541['indexOf']('?') < 0x0 ? _0x46c541 + '?' + _0x4a6dcf['param'] : _0x46c541 + _0x4a6dcf['param'] : _0x285f29['indexOf']('?') < 0x0 ? _0x285f29 += '?' + _0x4a6dcf['param'] : _0x285f29 += _0x4a6dcf['param'], _0x285f29['indexOf']('target=') < 0x0 && (_0x285f29 += '&target=' + _0x21de5e), wx['navigateTo' + 'MiniProgra' + 'm']({
                                                        'appId': _0x1b75b3,
                                                        'path': _0x285f29,
                                                        'fail': _0x3943c0,
                                                        'success': _0x40f166
                                                    }), console['log']('盒子跳转：', _0x21de5e, _0x4a6dcf['name'], _0x285f29, _0x1b75b3);
                                                }
                                            }
                                        }
                                    }
                                } else
                                    wx['previewIma' + 'ge']({
                                        'urls': [_0x36585c],
                                        'success': function (_0x4a14ef) {
                                            console['log']('预览图片成功');
                                        }
                                    }), _0x5590ef['mJumpHandl' + 'e'] && (_0x5590ef['mJumpHandl' + 'e']['args'] = [
                                        0x3,
                                        Number(_0x4a6dcf['id']),
                                        !0x1,
                                        !0x0
                                    ], _0x5590ef['mJumpHandl' + 'e']['run']()), console['log']('版本不支持。显示二维' + '码', _0x21de5e, _0x4a6dcf['name']);
                            } else
                                console['log']('请在微信中测试跳转：', _0x21de5e, _0x4a6dcf['name'], _0x46c541);
                        }
                    }, _0x5590ef['jumpToGame' + '_3'] = function (_0x34a895, _0x2215a9, _0x537285) {
                        var _0x11c316 = _0x34a895['path'], _0x8b09e0 = _0x34a895['param'], _0x4039e2 = _0x34a895['appid'], _0x4aedb6 = String(_0x34a895['box_appid']);
                        _0x11c316['length'] < 0x5 && (_0x11c316 = 'pages/inde' + 'x/index'), 0x0 == _0x8b09e0['indexOf']('?') && _0x8b09e0['substr'](0x1);
                        var _0x4a6c1a = String(_0x34a895['box_path']);
                        _0x4a6c1a['length'] < 0x5 ? _0x4a6c1a = _0x11c316['indexOf']('?') < 0x0 ? _0x11c316 + '?' + _0x8b09e0 : _0x11c316 + _0x8b09e0 : _0x4a6c1a['indexOf']('?') < 0x0 ? _0x4a6c1a += '?' + _0x8b09e0 : _0x4a6c1a += _0x8b09e0, _0x4a6c1a['indexOf']('target=') < 0x0 && (_0x4a6c1a += '&target=' + _0x4039e2), (Laya['Browser']['onMiniGame'] && wx['navigateTo' + 'MiniProgra' + 'm']({
                            'appId': _0x4aedb6,
                            'path': _0x4a6c1a,
                            'success': function (_0x4da49b) {
                                console['log']('跳转成功', _0x4039e2, _0x34a895['name'], _0x4da49b), null != _0x537285 && _0x537285(), _0x5590ef['mJumpHandl' + 'e'] && (_0x5590ef['mJumpHandl' + 'e']['args'] = [
                                    0x1,
                                    Number(_0x34a895['id']),
                                    !0x1,
                                    !0x1
                                ], _0x5590ef['mJumpHandl' + 'e']['run']());
                            },
                            'fail': function (_0x503ed1) {
                                String(_0x503ed1['errMsg'])['indexOf'](':fail\x20canc' + 'el') <= 0x0 ? (null != _0x2215a9 && _0x2215a9(), _0x5590ef['mJumpHandl' + 'e'] && (_0x5590ef['mJumpHandl' + 'e']['args'] = [
                                    0x0,
                                    Number(_0x34a895['id']),
                                    !0x1,
                                    !0x1
                                ], _0x5590ef['mJumpHandl' + 'e']['run']())) : (console['log']('用户取消', _0x4039e2, _0x34a895['name'], _0x503ed1['errMsg']), null != _0x537285 && _0x537285(), _0x5590ef['mJumpHandl' + 'e'] && (_0x5590ef['mJumpHandl' + 'e']['args'] = [
                                    0x2,
                                    Number(_0x34a895['id']),
                                    !0x1,
                                    !0x1
                                ], _0x5590ef['mJumpHandl' + 'e']['run']()));
                            }
                        }), console['log']('直接盒子跳转：', _0x4039e2, _0x34a895['name'], _0x4a6c1a, _0x4aedb6));
                    }, _0x5590ef['mSelf'] = null, _0x5590ef['mVer'] = '', _0x5590ef['mGameName'] = '', _0x5590ef['mJumpWrite'] = [], _0x5590ef['mWxVer'] = '', _0x5590ef['mMoreList'] = [], _0x5590ef['mGroupList'] = [], _0x5590ef['mServerUrl'] = '', _0x5590ef['mType'] = 0x0, _0x5590ef['mPhone'] = {}, _0x5590ef['iphoneX'] = !0x1, _0x5590ef['cdnface'] = 'https://tc' + 'dn.wanzhus' + 'hipin.cn/x' + 'cx/more/', _0x5590ef['mListSrcs'] = [], _0x5590ef['mListSrcs2'] = [], _0x5590ef['mReloadCou' + 'nt'] = 0x0, _0x5590ef['mLoadCount'] = 0x0, _0x5590ef['uiView'] = {
                        'type': 'View',
                        'props': {
                            'y': 0x0,
                            'x': 0x0,
                            'width': 0x2ee,
                            'height': 0x536
                        },
                        'child': [
                            {
                                'type': 'Label',
                                'props': {
                                    'top': 0x0,
                                    'right': 0x0,
                                    'left': 0x0,
                                    'bottom': 0x0,
                                    'bgColor': '#ffffff'
                                }
                            },
                            {
                                'type': 'Image',
                                'props': {
                                    'var': 'mTitle',
                                    'right': 0x0,
                                    'left': 0x0,
                                    'height': 0x64
                                },
                                'child': [
                                    {
                                        'type': 'Image',
                                        'props': {
                                            'y': -0x3d,
                                            'x': 0x0,
                                            'width': 0xa6,
                                            'var': 'mBack2',
                                            'height': 0xa1
                                        }
                                    },
                                    {
                                        'type': 'Image',
                                        'props': {
                                            'x': 0x14,
                                            'width': 0x2c,
                                            'var': 'mBack',
                                            'height': 0x2c,
                                            'centerY': 0x0
                                        }
                                    },
                                    {
                                        'type': 'Label',
                                        'props': {
                                            'y': 0x1e,
                                            'var': 'mGameName',
                                            'text': '神手游戏',
                                            'fontSize': 0x28,
                                            'color': '#332E4D',
                                            'centerX': 0x0,
                                            'bold': !0x0
                                        }
                                    }
                                ]
                            },
                            {
                                'type': 'Panel',
                                'props': {
                                    'var': 'mPanel',
                                    'top': 0x64,
                                    'right': 0x0,
                                    'left': 0x0,
                                    'bottom': 0x0
                                }
                            }
                        ]
                    }, _0x5590ef;
                }(Laya['View']);
            _0x2aeba5['MoreGame'] = _0x24c22b;
        },
        {}
    ],
    0x7: [
        function (_0x56fb71, _0x32efd8, _0x566fb0) {
            'use strict';
            Object['defineProp' + 'erty'](_0x566fb0, '__esModule', { 'value': !0x0 });
            var _0x56e440 = _0x56fb71('../Main'), _0x72541f = function () {
                    function _0x506d8e(_0x4088fb) {
                        this['IS_OPEN'] = !0x1, this['BOX_TEST'] = !0x1, this['GAME_NUM_T' + 'EST'] = !0x1, this['MULTI_ICON' + '_TEST'] = !0x1, this['isEven'] = !0x1, this['isAniTest'] = 0x0;
                        var _0x526416 = Number(_0x4088fb['uid']);
                        this['isEven'] = _0x526416 % 0x2 == 0x0;
                        var _0x39fd0d, _0x4ce5ae = 0x0;
                        _0x56e440['default']['app']['mWX']['mOnOff']['forEach'](function (_0x5f50ad) {
                            'of_icon_ty' + 'pe' == _0x5f50ad['key'] && (_0x4ce5ae = Number(_0x5f50ad['value']), _0x39fd0d = Number(JSON['parse'](_0x5f50ad['param'])['item']));
                        }), 0x0 == _0x4ce5ae ? this['isAniTest'] = _0x526416 % 0x3 : 0x1 == _0x4ce5ae && (this['isAniTest'] = _0x39fd0d);
                    }
                    return Object['defineProp' + 'erty'](_0x506d8e['prototype'], 'isOpen', {
                        'get': function () {
                            return 0x1 == _0x56e440['default']['app']['mWX']['fhOnoff'] && this['IS_OPEN'];
                        },
                        'enumerable': !0x0,
                        'configurable': !0x0
                    }), Object['defineProp' + 'erty'](_0x506d8e['prototype'], 'isBoxTest', {
                        'get': function () {
                            return 0x1 == _0x56e440['default']['app']['mWX']['fhOnoff'] && this['BOX_TEST'];
                        },
                        'enumerable': !0x0,
                        'configurable': !0x0
                    }), Object['defineProp' + 'erty'](_0x506d8e['prototype'], 'isGameNumT' + 'est', {
                        'get': function () {
                            return 0x1 == _0x56e440['default']['app']['mWX']['fhOnoff'] && this['GAME_NUM_T' + 'EST'];
                        },
                        'enumerable': !0x0,
                        'configurable': !0x0
                    }), Object['defineProp' + 'erty'](_0x506d8e['prototype'], 'isMultiIco' + 'nTest', {
                        'get': function () {
                            return 0x1 == _0x56e440['default']['app']['mWX']['fhOnoff'] && this['MULTI_ICON' + '_TEST'];
                        },
                        'enumerable': !0x0,
                        'configurable': !0x0
                    }), _0x506d8e;
                }();
            _0x566fb0['OddEvenTes' + 'tModel'] = _0x72541f;
        },
        { '../Main': 0xe }
    ],
    0x8: [
        function (_0x17e8be, _0xd42149, _0x15a23a) {
            'use strict';
            Object['defineProp' + 'erty'](_0x15a23a, '__esModule', { 'value': !0x0 });
            var _0x265817 = _0x17e8be('./MoreGame'), _0x2ad9b2 = _0x17e8be('../Main'), _0x7dfeda = _0x17e8be('../script/' + 'MyLikeView' + '2'), _0x27582f = function () {
                    function _0x204fdb() {
                    }
                    return _0x204fdb['showBoxPag' + 'e'] = function (_0x47ab75, _0x33f2ab, _0x2a92c9, _0x34e3cb) {
                        void 0x0 === _0x34e3cb && (_0x34e3cb = 0x0), _0x204fdb['showBefore']() && _0x265817['MoreGame']['ShowList'](_0x33f2ab, _0x2a92c9, _0x265817['WriteBoxLi' + 'st']['mWriteBox'], _0x47ab75, new Laya['Handler'](this, _0x204fdb['CloseBox']), _0x34e3cb, new Laya['Handler'](this, _0x204fdb['JumpInfo']));
                    }, _0x204fdb['showBefore'] = function () {
                        return !0x0;
                    }, _0x204fdb['CloseBox'] = function () {
                    }, _0x204fdb['JumpInfo'] = function (_0x5a0f69, _0x117eac, _0x174993, _0xb754c3) {
                        if (console['log']('跳转结果：', _0x5a0f69, _0x117eac, _0x174993, _0xb754c3), _0x204fdb['isClickJum' + 'p'] = !0x0, 0x1 == _0x5a0f69) {
                            console['log']('--\x20允许直跳后\x20-' + '-', _0x2ad9b2['default']['app']['clickAppId'], _0x2ad9b2['default']['app']['clickGameI' + 'd'], _0x2ad9b2['default']['app']['clickFromP' + 'age']);
                            for (_0x1041e4 = 0x0; _0x1041e4 < _0x265817['WriteBoxLi' + 'st']['mWriteBox']['length']; ++_0x1041e4) {
                                if (_0x2ad9b2['default']['app']['clickAppId']['toUpperCas' + 'e']() == _0x265817['WriteBoxLi' + 'st']['mWriteBox'][_0x1041e4]['toUpperCas' + 'e']()) {
                                    -0x1 == _0x2ad9b2['default']['app']['clickLikeA' + 'rr']['indexOf'](_0x2ad9b2['default']['app']['clickGameI' + 'd']) && _0x2ad9b2['default']['app']['clickLikeA' + 'rr']['push'](String(_0x2ad9b2['default']['app']['clickGameI' + 'd']));
                                    var _0x11d9a1 = JSON['stringify'](_0x2ad9b2['default']['app']['clickLikeA' + 'rr']);
                                    _0x2ad9b2['default']['app']['mWX']['setUserVal' + 'ue']('clickLikeA' + 'rr', _0x11d9a1), console['log']('--\x20允许直跳后\x20本' + '地保存\x20--', _0x2ad9b2['default']['app']['clickLikeA' + 'rr']);
                                    break;
                                }
                            }
                        }
                        for (var _0x217453 = 0x0, _0x4b52fc = '', _0x43ef85 = 0x0, _0x35a312 = 0x0, _0x57458c = 0x1, _0x1041e4 = 0x0; _0x1041e4 < _0x2ad9b2['default']['app']['mWX']['mGamesBox']['length']; ++_0x1041e4)
                            Number(_0x2ad9b2['default']['app']['mWX']['mGamesBox'][_0x1041e4]['id']) == _0x117eac && (_0x217453 = Number(_0x2ad9b2['default']['app']['mWX']['mGamesBox'][_0x1041e4]['gameid']), _0x4b52fc = _0x2ad9b2['default']['app']['mWX']['mGamesBox'][_0x1041e4]['name'], _0x43ef85 = Number(_0x2ad9b2['default']['app']['mWX']['mGamesBox'][_0x1041e4]['jump_type']), _0x35a312 = Number(_0x2ad9b2['default']['app']['mWX']['mGamesBox'][_0x1041e4]['appid']), 0x1 == _0x2ad9b2['default']['app']['mWX']['moreFenFaN' + 'um'] ? _0x57458c = 0x1 : _0x2ad9b2['default']['app']['mWX']['moreFenFaN' + 'um'] >= 0x1 ? _0x57458c = JSON['parse'](_0x2ad9b2['default']['app']['mWX']['mGamesBox'][_0x1041e4]['anim_confi' + 'g'])['millisecon' + 'd_static']['split'](',')['length'] > 0x1 ? JSON['parse'](_0x2ad9b2['default']['app']['mWX']['mGamesBox'][_0x1041e4]['anim_confi' + 'g'])['millisecon' + 'd_static']['split'](',')['length'] : 0x1 : 0x0 == _0x2ad9b2['default']['app']['mWX']['moreFenFaN' + 'um'] && (_0x57458c = 0x0));
                        Laya['Browser']['onIOS'] && (_0x43ef85 = 0x1), 0x1 == _0x204fdb['isCallNavi' + 'gation'] || 0x3 == _0x204fdb['isCallNavi' + 'gation'] ? ('recom_icon' + '_click', _0x2ad9b2['default']['app']['mWX']['indexBpTot' + 'le']('recom_clic' + 'k', {
                            'game_show_list': [_0x35a312],
                            'position_type': 'icon',
                            'game_id': _0x217453,
                            'jump_type': 0x1 == _0x43ef85 ? 'game' : 0x3 == _0x43ef85 ? 'box' : _0x43ef85,
                            'is_success_direct': _0x5a0f69,
                            'gif_show': [
                                _0x4b52fc,
                                _0x57458c
                            ],
                            'level': _0x2ad9b2['default']['app']['Level_num']
                        })) : 0x2 == _0x204fdb['isCallNavi' + 'gation'] || 0x4 == _0x204fdb['isCallNavi' + 'gation'] || 0x5 == _0x204fdb['isCallNavi' + 'gation'] || 0x6 == _0x204fdb['isCallNavi' + 'gation'] || 0x7 == _0x204fdb['isCallNavi' + 'gation'] || 0x9 == _0x204fdb['isCallNavi' + 'gation'] ? ('recom_bann' + 'er_click', _0x2ad9b2['default']['app']['mWX']['indexBpTot' + 'le']('recom_clic' + 'k', {
                            'game_show_list': _0x7dfeda['default']['showList'],
                            'position_type': 'banner',
                            'game_id': _0x217453,
                            'jump_type': 0x1 == _0x43ef85 ? 'game' : 0x3 == _0x43ef85 ? 'box' : _0x43ef85,
                            'is_success_direct': _0x5a0f69,
                            'gif_show': [
                                _0x4b52fc,
                                _0x57458c
                            ],
                            'level': _0x2ad9b2['default']['app']['Level_num']
                        })) : 0x8 == _0x204fdb['isCallNavi' + 'gation'] ? _0x2ad9b2['default']['app']['mWX']['indexBpTot' + 'le']('recom_clic' + 'k', {
                            'game_show_list': _0x2ad9b2['default']['app']['resultView'] ? _0x2ad9b2['default']['app']['resultView']['result_sho' + 'wList'] : [],
                            'position_type': 'result_pag' + 'e',
                            'game_id': _0x217453,
                            'jump_type': 0x1 == _0x43ef85 ? 'game' : 0x3 == _0x43ef85 ? 'box' : _0x43ef85,
                            'is_success_direct': _0x5a0f69,
                            'gif_show': [
                                _0x4b52fc,
                                _0x57458c
                            ],
                            'level': _0x2ad9b2['default']['app']['Level_num']
                        }) : 0xa == _0x204fdb['isCallNavi' + 'gation'] ? _0x2ad9b2['default']['app']['mWX']['indexBpTot' + 'le']('recom_clic' + 'k', {
                            'game_show_list': _0x2ad9b2['default']['app']['baokuanlis' + 't'],
                            'position_type': 'recommend_' + 'page',
                            'game_id': _0x217453,
                            'jump_type': 0x1 == _0x43ef85 ? 'game' : 0x3 == _0x43ef85 ? 'box' : _0x43ef85,
                            'is_success_direct': _0x5a0f69,
                            'gif_show': [
                                _0x4b52fc,
                                _0x57458c
                            ],
                            'level': _0x2ad9b2['default']['app']['Level_num']
                        }) : 0xb == _0x204fdb['isCallNavi' + 'gation'] && _0x2ad9b2['default']['app']['mWX']['indexBpTot' + 'le']('recom_clic' + 'k', {
                            'game_show_list': _0x2ad9b2['default']['app']['fakerxcxli' + 'st'],
                            'position_type': 'app_list',
                            'game_id': _0x217453,
                            'jump_type': 0x1 == _0x43ef85 ? 'game' : 0x3 == _0x43ef85 ? 'box' : _0x43ef85,
                            'is_success_direct': _0x5a0f69,
                            'gif_show': [
                                _0x4b52fc,
                                _0x57458c
                            ],
                            'level': _0x2ad9b2['default']['app']['Level_num']
                        });
                    }, _0x204fdb['isCallNavi' + 'gation'] = 0x0, _0x204fdb['isClickJum' + 'p'] = !0x0, _0x204fdb;
                }();
            _0x15a23a['gameBox'] = _0x27582f;
        },
        {
            '../Main': 0xe,
            '../script/MyLikeView2': 0x22,
            './MoreGame': 0x6
        }
    ],
    0x9: [
        function (_0x5a1e67, _0x32f6ea, _0x207516) {
            'use strict';
            Object['defineProp' + 'erty'](_0x207516, '__esModule', { 'value': !0x0 });
            var _0x1fba89 = _0x5a1e67('./wxCore'), _0x4e688a = _0x5a1e67('../util/Co' + 'nfigUtil'), _0x13c119 = function () {
                    function _0x2f710a() {
                    }
                    return _0x2f710a['getArrayVa' + 'lueParam'] = function (_0x161482, _0x53f6fe) {
                        if (null == _0x161482 || typeof _0x161482 != typeof [])
                            return '';
                        for (var _0x2f7c68 = 0x0; _0x2f7c68 < _0x161482['length']; ++_0x2f7c68)
                            if (_0x161482[_0x2f7c68]['key'] == _0x53f6fe)
                                return _0x161482[_0x2f7c68]['param'];
                        return '';
                    }, _0x2f710a['getUrlPara' + 'ms'] = function (_0x13591b, _0x44f587) {
                        void 0x0 === _0x44f587 && (_0x44f587 = '1.0.1');
                        var _0x24e195 = !0x1, _0x17a41a = new Array();
                        for (var _0x415ff8 in _0x13591b)
                            if ('string' == typeof _0x13591b[_0x415ff8] || 'number' == typeof _0x13591b[_0x415ff8]) {
                                'tick' == _0x415ff8 && (_0x24e195 = !0x0);
                                var _0x356535 = _0x415ff8['toLocaleLo' + 'werCase']();
                                _0x13591b[_0x356535] = _0x13591b[_0x415ff8], _0x17a41a['push'](_0x356535);
                            }
                        if (0x0 == _0x24e195) {
                            var _0xb5fb31 = new Date();
                            _0x13591b['tick'] = Math['floor'](_0xb5fb31['getTime']() / 0x3e8), _0x17a41a['push']('tick');
                        }
                        _0x17a41a['sort'](function (_0x595829, _0x1ecf11) {
                            return _0x595829 > _0x1ecf11 ? 0x1 : -0x1;
                        });
                        for (var _0x3b88d1 = '', _0x33ee4b = 0x0; _0x33ee4b < _0x17a41a['length']; _0x33ee4b++)
                            _0x3b88d1 = _0x3b88d1 + _0x17a41a[_0x33ee4b] + '=' + _0x13591b[_0x17a41a[_0x33ee4b]] + '&';
                        var _0x25e4d9 = '';
                        return _0x25e4d9 = null != _0x4e688a['ConfigUtil']['mKeys'][_0x44f587] ? _0x1fba89['md5_hex']['MD5'](_0x3b88d1 + 'key=' + _0x4e688a['ConfigUtil']['mKeys'][_0x44f587]) : _0x1fba89['md5_hex']['MD5'](_0x3b88d1 + ('key=wvkbfu' + 'hl')), _0x3b88d1 + 'key=' + _0x25e4d9;
                    }, _0x2f710a['getCDN'] = function () {
                        return 'https://tc' + 'dn.wanzhus' + 'hipin.cn/x' + 'cx/sf/';
                    }, _0x2f710a['getJSON'] = function (_0x36059d) {
                        if ('' == _0x36059d || null == _0x36059d)
                            return { 'code': -0x3e7 };
                        var _0x1f0df2 = _0x36059d['indexOf']('{', 0x0);
                        return _0x36059d = _0x36059d['substr'](_0x1f0df2, _0x36059d['length'] - _0x1f0df2), JSON['parse'](_0x36059d);
                    }, _0x2f710a['getServer'] = function () {
                        return _0x4e688a['ConfigUtil']['mURL'];
                    }, _0x2f710a;
                }();
            _0x207516['util'] = _0x13c119;
        },
        {
            '../util/ConfigUtil': 0x31,
            './wxCore': 0xb
        }
    ],
    0xa: [
        function (_0x3ce358, _0x2d0c7b, _0x20d894) {
            'use strict';
            Object['defineProp' + 'erty'](_0x20d894, '__esModule', { 'value': !0x0 });
            var _0x4663d0 = _0x3ce358('../util/AD' + 'Util'), _0x4707bb = _0x3ce358('./wxMinPro'), _0x2f28c7 = _0x3ce358('./wxCore'), _0x496eb7 = _0x3ce358('../Main'), _0x21a105 = _0x3ce358('../util/Ti' + 'meUtil'), _0x385247 = _0x3ce358('../util/Sh' + 'areUtil'), _0x479644 = function () {
                    function _0x18ff89() {
                        this['tip'] = null;
                    }
                    return _0x18ff89['prototype']['version'] = function () {
                        return '1.0.1';
                    }, _0x18ff89['prototype']['loginBtnPo' + 's'] = function () {
                        return 0xa0;
                    }, _0x18ff89['prototype']['onBefore'] = function () {
                        return !0x1;
                    }, _0x18ff89['prototype']['onShow'] = function () {
                    }, _0x18ff89['prototype']['onReShow'] = function () {
                    }, _0x18ff89['prototype']['onLogin'] = function (_0x1b8b05, _0x4cedb0) {
                        return _0x496eb7['default']['app']['adUtil'] = new _0x4663d0['ADUtil'](), _0x496eb7['default']['app']['mWX'] = new _0x4707bb['default'](), _0x496eb7['default']['app']['mWX']['mUID'] = _0x4cedb0['uid'], _0x496eb7['default']['app']['mWX']['mLaunch'] = _0x2f28c7['default']['uo']['launch'](), _0x496eb7['default']['app']['mWX']['onLaunch'](_0x2f28c7['default']['uo']['launch']()), _0x2f28c7['default']['uo']['initVideoA' + 'D'](_0x4663d0['ADUtil']['sDefaultVi' + 'deoId']), _0x496eb7['default']['app']['mWX']['initReturn'](), !0x0;
                    }, _0x18ff89['prototype']['onEnterGam' + 'e'] = function (_0x8e1479, _0x16fef0, _0x373395) {
                        console['log']('123', _0x8e1479), console['log']('234', _0x16fef0), console['log']('345', _0x373395), null != _0x496eb7['default']['app']['mWX']['mShareCall' + 'back'] && (_0x385247['ShareUtil']['is_exit'] = !0x0, '0' == _0x496eb7['default']['app']['mWX']['getOnOffVa' + 'lueByKey']('of_share_t' + 'ime') ? (_0x496eb7['default']['app']['mWX']['mShareCall' + 'back'](), _0x496eb7['default']['app']['mWX']['mShareCall' + 'back'] = null) : _0x21a105['TimeUtil']['getCurrTim' + 'e']() - _0x496eb7['default']['app']['mWX']['mCallShare' + 'Time'] > _0x496eb7['default']['app']['mWX']['getShareTi' + 'meByCount']() ? (_0x496eb7['default']['app']['mWX']['mShareCall' + 'back'](), _0x496eb7['default']['app']['mWX']['mShareCall' + 'back'] = null, _0x496eb7['default']['app']['mWX']['mShareCoun' + 't']++, _0x496eb7['default']['app']['mWX']['mCallShare' + 'Time'] = 0x0) : _0x496eb7['default']['app']['is_share'] && Laya['timer']['once'](0xc8, this, function () {
                        }));
                    }, _0x18ff89['prototype']['onHideGame'] = function () {
                    }, _0x18ff89['mIF'] = {
                        'wxinfo': {
                            'url': '1.0.1/qc/w' + 'xinfo?',
                            'key': '1.0.1',
                            'tips': '报告微信信息接口'
                        },
                        'login': {
                            'url': '1.0.1/qc/l' + 'ogin?',
                            'key': '1.0.1',
                            'tips': '登录服务'
                        },
                        'lauch': {
                            'url': '1.0.1/qc/l' + 'auch?',
                            'key': '1.0.1',
                            'tips': '登录服务'
                        },
                        'userinfo': {
                            'url': '1.0.1/qc/u' + 'serinfo?',
                            'key': '1.0.1',
                            'tips': '更新用户信息'
                        }
                    }, _0x18ff89;
                }();
            _0x20d894['wxCallBack'] = _0x479644;
        },
        {
            '../Main': 0xe,
            '../util/ADUtil': 0x30,
            '../util/ShareUtil': 0x34,
            '../util/TimeUtil': 0x35,
            './wxCore': 0xb,
            './wxMinPro': 0xc
        }
    ],
    0xb: [
        function (_0x56015f, _0x4d9a31, _0x1a4eba) {
            'use strict';
            Object['defineProp' + 'erty'](_0x1a4eba, '__esModule', { 'value': !0x0 });
            var _0x11b471 = _0x56015f('./wxCallBa' + 'ck'), _0x29be20 = _0x56015f('./util'), _0x39eb65 = _0x56015f('./MD5'), _0x5872f7 = _0x56015f('./Base64'), _0x7fb256 = _0x56015f('../Main'), _0x31b552 = _0x56015f('../util/Ti' + 'meUtil'), _0x135df0 = function () {
                    function _0x56f9e3() {
                    }
                    return _0x56f9e3['MD5'] = function (_0x2bf2d4) {
                        return new _0x39eb65['MD5']()['hex_md5'](_0x2bf2d4);
                    }, _0x56f9e3;
                }();
            _0x1a4eba['md5_hex'] = _0x135df0;
            var _0xb2716a = function () {
                function _0x55f971() {
                    this['version'] = '1.0.1', this['mLaunch'] = null, this['mWeUser'] = {}, this['mPhone'] = {}, this['mSDKVersio' + 'n'] = '', this['iphoneX'] = !0x1, this['mCallBack'] = null, this['mHttpCall'] = null, this['mLoginType'] = 0x1, this['mShowLogo'] = !0x0, this['btnLogin'] = null, this['zOrder'] = 0x7b, this['mFrist'] = !0x0, this['mInit'] = !0x1, this['mVideoAD'] = null, this['mNoVideo'] = !0x1, this['mIsNewUser'] = 0x0, this['option123'] = null, this['loginSessi' + 'on'] = null, this['first_shar' + 'e_from'] = null, this['sigh_id'] = null, _0x55f971['uo'] = this, console['log']('wxcore.uo\x20' + '=\x20' + _0x55f971['uo']), this['mCallBack'] = new _0x11b471['wxCallBack']();
                }
                return _0x55f971['prototype']['screenHeig' + 'ht'] = function () {
                    return this['mPhone']['screenHeig' + 'ht'];
                }, _0x55f971['prototype']['IsXP'] = function () {
                    return !!(Laya['Browser']['onIOS'] && this['mPhone']['screenWidt' + 'h'] > 0x320);
                }, _0x55f971['prototype']['wxVersion'] = function () {
                    return this['mSDKVersio' + 'n'];
                }, _0x55f971['prototype']['getUser'] = function () {
                    return this['mWeUser'];
                }, _0x55f971['prototype']['getUserID'] = function () {
                    return Number(this['mWeUser']['uid']);
                }, _0x55f971['prototype']['phone'] = function () {
                    return this['mPhone'];
                }, _0x55f971['prototype']['launch'] = function () {
                    return this['mLaunch'];
                }, _0x55f971['prototype']['initWX'] = function (_0x49f8c6, _0x111eba, _0x4f5516) {
                    void 0x0 === _0x49f8c6 && (_0x49f8c6 = 0x1), void 0x0 === _0x111eba && (_0x111eba = !0x0), void 0x0 === _0x4f5516 && (_0x4f5516 = 0x0), console['log']('进入core'), this['mPhone'] = wx['getSystemI' + 'nfoSync'](), (this['mPhone']['model']['indexOf']('iPhone\x20X') >= 0x0 && (this['iphoneX'] = !0x0), this['mSDKVersio' + 'n'] = this['mPhone']['SDKVersion']);
                    var _0x551101 = wx['getLaunchO' + 'ptionsSync']();
                    this['option123'] = _0x551101['query'];
                    var _0x1f61ad = {};
                    if (_0x1f61ad['query'] = _0x551101['query'], _0x1f61ad['scene'] = _0x551101['scene'], _0x1f61ad['shareTicke' + 't'] = _0x551101['shareTicke' + 't'], _0x1f61ad['isSticky'] = _0x551101['isSticky'], null != _0x1f61ad['query']['scene'])
                        for (var _0x5f2eaf = decodeURIComponent(_0x1f61ad['query']['scene'])['split']('&'), _0x1229f0 = 0x0; _0x1229f0 < _0x5f2eaf['length']; _0x1229f0++) {
                            var _0x50ac6e = _0x5f2eaf[_0x1229f0]['split']('=');
                            0x2 == _0x50ac6e['length'] && (_0x1f61ad['query'][_0x50ac6e[0x0]] = _0x50ac6e[0x1]);
                        }
                    this['mLaunch'] = _0x1f61ad, this['mLoginType'] = _0x49f8c6, this['mShowLogo'] = _0x111eba, 0x1 == this['mCallBack']['onBefore']() && this['showLoadin' + 'g'](), Laya['timer']['callLater'](this, this['check']);
                }, _0x55f971['prototype']['initWeb'] = function (_0x41aa63) {
                    void 0x0 === _0x41aa63 && (_0x41aa63 = 0x0), 0x1 == this['mCallBack']['onBefore']() && this['showLoadin' + 'g']();
                }, _0x55f971['prototype']['showLoadin' + 'g'] = function () {
                    Laya['timer']['callLater'](this['mCallBack'], this['mCallBack']['onShow']);
                }, _0x55f971['prototype']['clear'] = function () {
                }, _0x55f971['prototype']['showLoginB' + 'tn'] = function () {
                }, _0x55f971['prototype']['check'] = function () {
                    wx['checkSessi' + 'on']({
                        'success': function (_0x1b923c) {
                            console['log']('checkSessi' + 'on\x20ok'), _0x55f971['uo']['login']();
                        },
                        'fail': function (_0x2436e0) {
                            console['log']('checkSessi' + 'on\x20fail'), wx['removeStor' + 'ageSync']('user'), _0x55f971['uo']['login']();
                        }
                    });
                }, _0x55f971['prototype']['reLogin'] = function () {
                    wx['removeStor' + 'ageSync']('user'), this['login']();
                }, _0x55f971['prototype']['login'] = function () {
                    var _0x140753 = !0x0, _0x2f1e10 = wx['getStorage' + 'Sync']('user');
                    if ('object' == typeof _0x2f1e10) {
                        var _0x4ff61c = _0x2f1e10['openid'];
                        '' != _0x4ff61c && null != _0x4ff61c || (_0x140753 = !0x1), ('' == _0x2f1e10['uid'] || null == _0x2f1e10['uid'] || Number(_0x2f1e10['uid']) < 0x2710) && (_0x140753 = !0x1);
                    } else
                        _0x140753 = !0x1;
                    _0x140753 ? (_0x55f971['uo']['mWeUser'] = _0x2f1e10, _0x55f971['uo']['checkCode']('')) : wx['login']({
                        'success': function (_0x1d82e5) {
                            _0x55f971['uo']['checkCode'](_0x1d82e5['code']);
                        },
                        'fail': function (_0x2171d9) {
                            console['log']('login\x20fail' + ',try\x20again'), Laya['timer']['once'](0x3e8, _0x55f971['uo'], _0x55f971['uo']['login']);
                        }
                    });
                }, _0x55f971['prototype']['checkCode'] = function (_0x1dfc1e) {
                    var _0x1e2605 = [];
                    _0x1e2605['code'] = _0x1dfc1e, '' == _0x1dfc1e && (_0x1e2605['uid'] = _0x55f971['uo']['mWeUser']['uid']), void 0x0 !== this['mLaunch']['query']['uid'] && (_0x1e2605['master'] = this['mLaunch']['query']['uid']), void 0x0 !== this['mLaunch']['query']['agentid'] && (_0x1e2605['agentid'] = this['mLaunch']['query']['agentid']), void 0x0 !== this['mLaunch']['query']['adid'] && (_0x1e2605['adid'] = this['mLaunch']['query']['adid']), _0x1e2605['ver'] = this['mCallBack']['version'](), this['server'](_0x11b471['wxCallBack']['mIF']['login'], _0x1e2605, function (_0x350c2a) {
                        if (console['log']('用户登录返回数据', _0x350c2a), 0x0 == _0x350c2a['code']) {
                            if (_0x55f971['uo']['loginSessi' + 'on'] = _0x31b552['TimeUtil']['getCurrTim' + 'e'](), null != _0x55f971['uo']['mWeUser'] && _0x55f971['uo']['mWeUser']['uid'] == _0x350c2a['uid']) {
                                if (_0x55f971['uo']['mWeUser']['openid'] != _0x350c2a['openid'])
                                    return void Laya['timer']['once'](0x64, _0x55f971['uo'], _0x55f971['uo']['reLogin']);
                            } else
                                _0x55f971['uo']['mWeUser'] = {}, _0x55f971['uo']['mWeUser']['openid'] = _0x350c2a['openid'], _0x55f971['uo']['mWeUser']['uid'] = Number(_0x350c2a['uid']);
                            0x1 == _0x55f971['uo']['mCallBack']['onLogin'](_0x55f971['uo']['mWeUser'], _0x350c2a) ? _0x55f971['uo']['getUserInf' + 'o']() : _0x55f971['uo']['init'](), console['log']('openid', _0x55f971['uo']['mWeUser']['openid'], _0x55f971['uo']['mWeUser']['uid']);
                        } else
                            Laya['timer']['once'](0x3e8, _0x55f971['uo'], _0x55f971['uo']['reLogin']);
                    });
                }, _0x55f971['prototype']['getUserInf' + 'o'] = function () {
                    if (0x2 == this['mLoginType'])
                        return _0x55f971['uo']['onEnter'](null, this['mLaunch']), void _0x55f971['uo']['init']();
                    wx['getUserInf' + 'o']({
                        'withCredentials': !0x1,
                        'lang': 'zh_CN',
                        'success': function (_0x5c754f) {
                            console['log'](_0x5c754f), _0x55f971['uo']['initUser'](_0x5c754f);
                        },
                        'fail': function (_0xd64b79) {
                            console['log'](_0xd64b79), _0x55f971['uo']['mSDKVersio' + 'n'] >= '2.0.1' ? (_0x55f971['uo']['showLoginB' + 'tn'](), _0x55f971['uo']['mCallBack']['onReShow']()) : _0x55f971['uo']['wxAuthoriz' + 'e']();
                        }
                    });
                }, _0x55f971['prototype']['wxAuthoriz' + 'e'] = function () {
                    wx['authorize']({
                        'scope': 'scope.user' + 'Info',
                        'success': function (_0x5a6fab) {
                            _0x55f971['uo']['getUserInf' + 'o']();
                        },
                        'fail': function (_0x332504) {
                            _0x55f971['uo']['openSeting']();
                        }
                    });
                }, _0x55f971['prototype']['openSeting'] = function () {
                    var _0x7de925 = this;
                    wx['showModal']({
                        'title': '提示',
                        'content': '游戏需要您授权头像和' + '用户名信息',
                        'showCancel': !0x1,
                        'cancelText': '取消',
                        'confirmText': '确认',
                        'success': function (_0x25efe5) {
                            wx['openSettin' + 'g']({
                                'success': function (_0x4b4499) {
                                    0x0 == _0x4b4499['authSettin' + 'g']['scope.user' + 'Info'] ? _0x55f971['uo']['openSeting']() : _0x55f971['uo']['getUserInf' + 'o']();
                                },
                                'fail': function (_0x14912e) {
                                    _0x7de925['openSeting']();
                                }
                            });
                        }
                    });
                }, _0x55f971['prototype']['initUser'] = function (_0x549f1b) {
                    var _0x478823 = 0x0, _0x5915ce = _0x549f1b['userInfo'];
                    console['log'](_0x5915ce['avatarUrl'], _0x55f971['uo']['mWeUser']['avatarUrl'], _0x55f971['uo']['mWeUser']['nickName'], _0x5915ce['nickName']), _0x55f971['uo']['mWeUser']['nickName'] != _0x5915ce['nickName'] && (_0x55f971['uo']['mWeUser']['nickName'] = _0x5915ce['nickName'], _0x478823 = 0x1);
                    var _0x1acdfd = _0x5915ce['avatarUrl'];
                    '0' == _0x1acdfd['charAt'](_0x1acdfd['length'] - 0x1) && '/' == _0x1acdfd['charAt'](_0x1acdfd['length'] - 0x2) && (_0x1acdfd = _0x1acdfd['substr'](0x0, _0x1acdfd['length'] - 0x2), _0x1acdfd += '/132'), _0x55f971['uo']['mWeUser']['avatarUrl'] != _0x1acdfd && (_0x55f971['uo']['mWeUser']['avatarUrl'] = _0x1acdfd, _0x478823 = 0x1), _0x55f971['uo']['mWeUser']['gender'] = _0x5915ce['gender'], _0x55f971['uo']['mWeUser']['province'] = _0x5915ce['province'], _0x55f971['uo']['mWeUser']['city'] = _0x5915ce['city'], _0x55f971['uo']['mWeUser']['country'] = _0x5915ce['country'], 0x1 == _0x478823 && _0x55f971['uo']['updateUser' + 'Info'](), wx['setStorage' + 'Sync']('user', _0x55f971['uo']['mWeUser']), _0x55f971['uo']['onEnter'](null, this['mLaunch']), _0x55f971['uo']['init']();
                }, _0x55f971['prototype']['onEnter'] = function (_0x31b763, _0x521a2f) {
                    this['mCallBack']['onEnterGam' + 'e'](this['mFrist'], _0x31b763, _0x521a2f), this['mFrist'] = !0x1;
                }, _0x55f971['prototype']['init'] = function () {
                    0x0 == this['mInit'] && (_0x7fb256['default']['app']['mWX']['displayGam' + 'eClub'](!0x0), wx['onShow'](this['wxShow']), wx['onHide'](this['wxHide']), this['mInit'] = !0x0);
                }, _0x55f971['prototype']['wxShow'] = function (_0x492d82) {
                    console['log']('默认隐藏'), console['log']('达到'), console['log']('进入:' + new Date()['getTime']()), console['log'](_0x492d82);
                    var _0x284ba0 = {};
                    if (_0x284ba0['query'] = _0x492d82['query'], _0x284ba0['scene'] = _0x492d82['scene'], _0x284ba0['shareTicke' + 't'] = _0x492d82['shareTicke' + 't'], _0x284ba0['isSticky'] = _0x492d82['isSticky'], null != _0x284ba0['query']['scene'])
                        for (var _0x326ae3 = decodeURIComponent(_0x284ba0['query']['scene'])['split']('&'), _0x3ae6cb = 0x0; _0x3ae6cb < _0x326ae3['length']; _0x3ae6cb++) {
                            var _0x12501e = _0x326ae3[_0x3ae6cb]['split']('=');
                            0x2 == _0x12501e['length'] && (_0x284ba0['query'][_0x12501e[0x0]] = _0x12501e[0x1]);
                        }
                    if (0x1 == _0x55f971['uo']['mFrist'])
                        return _0x55f971['uo']['mLaunch'] = _0x284ba0, void _0x55f971['uo']['getUserInf' + 'o']();
                    var _0x564286 = _0x55f971['uo']['mLaunch'];
                    _0x55f971['uo']['mLaunch'] = _0x284ba0, _0x55f971['uo']['onEnter'](_0x564286, _0x284ba0);
                }, _0x55f971['prototype']['wxHide'] = function () {
                    _0x55f971['uo']['mCallBack']['onHideGame'](), console['log']('退出:' + new Date()['getTime']());
                }, _0x55f971['prototype']['updateUser' + 'Info'] = function () {
                    var _0xa0b15b = {};
                    _0xa0b15b['uid'] = _0x55f971['uo']['mWeUser']['uid'], _0xa0b15b['name'] = _0x5872f7['TsBase64']['EncodeURI'](this['mWeUser']['nickName']), _0xa0b15b['avatar'] = _0x5872f7['TsBase64']['EncodeURI'](this['mWeUser']['avatarUrl']), _0xa0b15b['gender'] = _0x55f971['uo']['mWeUser']['gender'], null != _0x55f971['uo']['mWeUser']['province'] && '' != _0x55f971['uo']['mWeUser']['province'] && (_0xa0b15b['province'] = _0x55f971['uo']['mWeUser']['province']), null != _0x55f971['uo']['mWeUser']['city'] && '' != _0x55f971['uo']['mWeUser']['city'] && (_0xa0b15b['city'] = _0x55f971['uo']['mWeUser']['city']), this['server'](_0x11b471['wxCallBack']['mIF']['userinfo'], _0xa0b15b, function (_0x2d794a) {
                        console['log']('updateUser' + 'Info..ok');
                    });
                }, _0x55f971['prototype']['server'] = function (_0x37150c, _0x248c67, _0x57172f, _0x50d07a) {
                    void 0x0 === _0x50d07a && (_0x50d07a = null), this['mHttpCall'] = new Laya['HttpReques' + 't'](), this['mHttpCall']['once'](Laya['Event']['COMPLETE'], this, function (_0x18a551) {
                        var _0x1632e5 = null;
                        _0x1632e5 = 'string' == typeof _0x18a551 ? _0x29be20['util']['getJSON'](_0x18a551) : _0x29be20['util']['getJSON'](_0x55f971['uo']['mHttpCall']['data']), null != _0x57172f && _0x57172f(_0x1632e5), _0x55f971['uo']['mHttpCall'] = null;
                    }), this['mHttpCall']['once'](Laya['Event']['ERROR'], this, function (_0xfc8ed2) {
                        null != _0x50d07a ? _0x50d07a() : _0x55f971['uo']['onHttpRequ' + 'estError'](_0xfc8ed2);
                    });
                    var _0x226fc1 = _0x29be20['util']['getServer']() + _0x37150c['url'] + _0x29be20['util']['getUrlPara' + 'ms'](_0x248c67, _0x37150c['key']);
                    this['mHttpCall']['send'](_0x226fc1, null, 'get', 'text');
                }, _0x55f971['prototype']['onHttpRequ' + 'estError'] = function (_0x5358c6) {
                    wx['hideLoadin' + 'g']();
                }, _0x55f971['prototype']['initVideoA' + 'D'] = function (_0x10f526) {
                    '' != _0x10f526 ? null == this['mVideoAD'] && (this['mVideoAD'] = wx['createRewa' + 'rdedVideoA' + 'd']({ 'adUnitId': _0x10f526 }), this['mVideoAD']['load'](), this['mVideoAD']['onError'](function (_0x49b09d) {
                        console['log'](_0x49b09d), _0x55f971['uo']['mNoVideo'] = !0x0;
                    })) : this['mNoVideo'] = !0x0;
                }, _0x55f971['prototype']['haveVideo'] = function () {
                    return null != this['mVideoAD'] && 0x1 != this['mNoVideo'];
                }, _0x55f971['prototype']['loadingVid' + 'eo'] = function (_0x20a0f2) {
                    return null == this['mVideoAD'] || 0x1 == _0x55f971['uo']['mNoVideo'] ? (null != _0x20a0f2 && _0x20a0f2(!0x1), !0x1) : (this['mVideoAD']['load']()['then'](function () {
                        null != _0x20a0f2 && _0x20a0f2(!0x0);
                    })['catch'](function (_0x1db704) {
                        console['log']('没有拉到广告'), console['log'](_0x1db704['errMsg']), null != _0x20a0f2 && _0x20a0f2(!0x1);
                    }), !0x0);
                }, _0x55f971['prototype']['showVideoA' + 'D'] = function (_0x1a3fe2) {
                    return null == this['mVideoAD'] || 0x1 == _0x55f971['uo']['mNoVideo'] ? (null != _0x1a3fe2 && _0x1a3fe2(!0x1), !0x1) : (_0x55f971['uo']['mVideoAD']['show'](), this['mVideoAD']['offClose'](null), this['mVideoAD']['onClose'](function (_0x37ade1) {
                        _0x37ade1 && _0x37ade1['isEnded'] || void 0x0 === _0x37ade1 ? null != _0x1a3fe2 && _0x1a3fe2(!0x0) : null != _0x1a3fe2 && _0x1a3fe2(!0x1);
                    }), !0x0);
                }, _0x55f971['uo'] = null, _0x55f971;
            }();
            _0x1a4eba['default'] = _0xb2716a;
        },
        {
            '../Main': 0xe,
            '../util/TimeUtil': 0x35,
            './Base64': 0x1,
            './MD5': 0x5,
            './util': 0x9,
            './wxCallBack': 0xa
        }
    ],
    0xc: [
        function (_0x37504e, _0x23df8f, _0x4769ec) {
            'use strict';
            Object['defineProp' + 'erty'](_0x4769ec, '__esModule', { 'value': !0x0 });
            var _0x273e20 = Laya['HttpReques' + 't'], _0x3021fc = _0x37504e('../Main'), _0x88ed17 = _0x37504e('./gameBox'), _0x1fcbb2 = _0x37504e('./wxCallBa' + 'ck'), _0x765953 = _0x37504e('./util'), _0x108f14 = _0x37504e('./MoreGame'), _0x2dc530 = _0x37504e('../util/Co' + 'nfigUtil'), _0x4a884b = _0x37504e('../util/Lo' + 'gUtil'), _0x22b3de = _0x37504e('../util/Sh' + 'areConfig'), _0x589b55 = _0x37504e('./Base64'), _0x4e47d8 = _0x37504e('./wxCore'), _0x20b1fb = _0x37504e('../util/Ti' + 'meUtil'), _0x3a7507 = _0x37504e('../script/' + 'MyLikeView'), _0x43feb5 = _0x37504e('../script/' + 'ShopView'), _0x4259b5 = _0x37504e('./OddEvenT' + 'estModel'), _0x5e264c = function () {
                    function _0x2fb7bb() {
                        this['mUID'] = 0x0, this['mOnOff'] = [], this['likeLoop'] = !0x0, this['mCards'] = 0x0, this['mWeiXinVer' + 'sion'] = '', this['mADKeep'] = 0x0, this['mHttpCall'] = null, this['mLaunch'] = null, this['mSaveImage'] = '', this['mMyRank'] = 0x0, this['mChallenge'] = null, this['mShareID'] = 0x0, this['mMarks'] = [
                            0x0,
                            0x0,
                            0x0,
                            0x0
                        ], this['fhOnoff'] = 0x0, this['mrelayID'] = 0x0, this['maxToolCar' + 'ds'] = 0x2, this['mToolCards'] = 0x0, this['mReturnApp' + 'id'] = '', this['mReturnUrl'] = '', this['mTaskInfo'] = [], this['mCoinsNum'] = 0x0, this['mPropList'] = [], this['mUsingProp' + 'Id'] = '2001', this['mStartAwar' + 'd'] = [], this['mUserData'] = [], this['mNowDay'] = 0x0, this['mWxAdUrl'] = [], this['mGamesBox'] = [], this['mShareCall' + 'back'] = null, this['mShareIsNo' + 'Callback'] = null, this['mShareIsAg' + 'ainCallbac' + 'k'] = null, this['mCallShare' + 'Time'] = 0x0, this['mShareCoun' + 't'] = 0x0, this['mPassAward' + 'ListData'] = [], this['mdtValues'] = null, this['skinId'] = 0x9, this['moreFenFaN' + 'um'] = 0x1, this['moreFenFaC' + 'ount'] = 0x0, this['mWxMenuBut' + 'tonRect'] = null, this['rnt2'] = {
                            'x': 0x0,
                            'y': 0x0,
                            'left': 0x0,
                            'top': 0x0,
                            'right': 0x0,
                            'height': 0x0
                        }, this['is_address'] = !0x0, this['channel_id'] = '0', this['first_chan' + 'nel_id'] = '0';
                    }
                    return _0x2fb7bb['prototype']['rankMeassa' + 'ge'] = function (_0x4f9511) {
                        wx['postMessag' + 'e']({
                            'type': 'FriendRank',
                            'show': 0x1,
                            'level': 0x0,
                            'info': _0x4e47d8['default']['uo']['getUser'](),
                            'dir': [
                                'none',
                                'previous',
                                'next'
                            ][_0x4f9511]
                        });
                    }, _0x2fb7bb['prototype']['closeRankM' + 'eassage'] = function () {
                        wx['postMessag' + 'e']({
                            'type': 'FriendRank',
                            'show': 0x0
                        });
                    }, _0x2fb7bb['prototype']['ResultMeas' + 'sage'] = function () {
                        wx['postMessag' + 'e']({
                            'type': 'result',
                            'show': 0x1,
                            'level': 0x0,
                            'info': _0x4e47d8['default']['uo']['getUser']()
                        });
                    }, _0x2fb7bb['prototype']['getItemLis' + 'tbytype'] = function (_0x4e940d) {
                        if (null != _0x3021fc['default']['app']['mWX']['mPropList']) {
                            for (var _0x4e940d = _0x4e940d, _0x8324f1 = [], _0x31676e = 0x0; _0x31676e < _0x3021fc['default']['app']['mWX']['mPropList']['length']; _0x31676e++)
                                Number(_0x3021fc['default']['app']['mWX']['mPropList'][_0x31676e]['type']) == _0x4e940d && (_0x8324f1[_0x8324f1['length']] = _0x3021fc['default']['app']['mWX']['mPropList'][_0x31676e]);
                            return _0x8324f1;
                        }
                    }, _0x2fb7bb['prototype']['IsOpenMore' + 'Fenfa'] = function () {
                        var _0x5814aa = 0x0;
                        return _0x3021fc['default']['app']['mWX']['mOnOff']['forEach'](function (_0x68632f) {
                            'of_more_fe' + 'nfa' != _0x68632f['key'] || (_0x5814aa = Number(_0x68632f['value']));
                        }), _0x5814aa;
                    }, _0x2fb7bb['prototype']['IsOpenBKYX'] = function () {
                        var _0x476333 = 0x1;
                        return _0x3021fc['default']['app']['mWX']['mOnOff']['forEach'](function (_0x3944ec) {
                            'of_hotgame' + '_end' != _0x3944ec['key'] || (_0x476333 = Number(JSON['parse'](_0x3944ec['param'])['open']));
                        }), _0x476333;
                    }, _0x2fb7bb['prototype']['IsOpenXCXL' + 'ist'] = function () {
                        var _0x8aa7e1 = 0x1;
                        return _0x3021fc['default']['app']['mWX']['mOnOff']['forEach'](function (_0x2d1ca7) {
                            'of_fenfa_x' + 'cxlist' != _0x2d1ca7['key'] || (_0x8aa7e1 = Number(_0x2d1ca7['value']));
                        }), _0x8aa7e1;
                    }, _0x2fb7bb['prototype']['BKYXNotSho' + 'wList'] = function () {
                        var _0x549ea2;
                        return _0x3021fc['default']['app']['mWX']['mOnOff']['forEach'](function (_0x182234) {
                            'of_hotgame' + '_notshow_l' + 'ist' != _0x182234['key'] || (_0x549ea2 = JSON['parse'](_0x182234['param'])['notshow']);
                        }), _0x549ea2;
                    }, _0x2fb7bb['prototype']['getItemLis' + 't'] = function (_0x2c49d0) {
                        if (void 0x0 === _0x2c49d0 && (_0x2c49d0 = 0x0), null != _0x3021fc['default']['app']['mWX']['mPropList']) {
                            for (var _0x21b356 = [], _0x2ce0c1 = 0x0; _0x2ce0c1 < _0x3021fc['default']['app']['mWX']['mPropList']['length']; _0x2ce0c1++)
                                0x0 == _0x2c49d0 ? Number(_0x3021fc['default']['app']['mWX']['mPropList'][_0x2ce0c1]['count']) > 0x0 && (_0x21b356[_0x21b356['length']] = _0x3021fc['default']['app']['mWX']['mPropList'][_0x2ce0c1]) : 0x0 == Number(_0x3021fc['default']['app']['mWX']['mPropList'][_0x2ce0c1]['count']) && Number(_0x3021fc['default']['app']['mWX']['mPropList'][_0x2ce0c1]['id'] < 0x1771) && Number(0xbbe != _0x3021fc['default']['app']['mWX']['mPropList'][_0x2ce0c1]['id']) && (_0x21b356[_0x21b356['length']] = _0x3021fc['default']['app']['mWX']['mPropList'][_0x2ce0c1]);
                            return _0x21b356;
                        }
                    }, _0x2fb7bb['prototype']['reportMark'] = function (_0x12984c, _0x5a6531, _0x3266d8) {
                        void 0x0 === _0x3266d8 && (_0x3266d8 = '');
                        var _0x4cd322 = this;
                        this['mHttpCall'] = new _0x273e20(), this['mHttpCall']['once'](Laya['Event']['COMPLETE'], this, function (_0x16f8ec) {
                            var _0x27fe43 = null;
                            _0x27fe43 = 'string' == typeof _0x16f8ec ? _0x765953['util']['getJSON'](_0x16f8ec) : _0x765953['util']['getJSON'](_0x4cd322['mHttpCall']['data']), _0x4a884b['LogUtil']['log']('reportMark' + '()\x20->\x20onRe' + 'sult\x20ret\x20=' + '\x20' + JSON['stringify'](_0x27fe43)), 0x0 == _0x27fe43['code'] && (_0x4cd322['mShareID'] = _0x27fe43['id'], _0x4cd322['mCards'] = Number(_0x27fe43['cards']), _0x12984c > _0x4cd322['mMarks'][0x0] && (_0x4cd322['mMarks'][0x0] = _0x12984c), void 0x0 != _0x5a6531 && null != _0x5a6531 && _0x5a6531()), _0x4cd322['mHttpCall'] = null;
                        }), this['mHttpCall']['once'](Laya['Event']['ERROR'], this, this['onHttpRequ' + 'estError']);
                        var _0xce7146 = [];
                        _0xce7146['mark'] = _0x12984c, _0xce7146['uid'] = this['mUID'], _0xce7146['id'] = this['mrelayID'], _0xce7146['reason'] = _0x589b55['TsBase64']['EncodeURI'](_0x3266d8);
                        var _0x297cdf = _0x2dc530['ConfigUtil']['mURL'] + _0x2dc530['ConfigUtil']['mCmd']['report'] + _0x765953['util']['getUrlPara' + 'ms'](_0xce7146, '1.0.1');
                        _0x4a884b['LogUtil']['log']('reportMark' + '()\x20mark\x20=\x20' + _0x12984c), _0x4a884b['LogUtil']['log']('reportMark' + '()\x20str\x20=\x20' + _0x297cdf), this['mHttpCall']['send'](_0x297cdf, null, 'get', 'text');
                    }, _0x2fb7bb['prototype']['dealCards'] = function (_0x1058e1, _0x1ac2a7) {
                        if (void 0x0 === _0x1058e1 && (_0x1058e1 = null), void 0x0 === _0x1ac2a7 && (_0x1ac2a7 = null), 0x0 != this['mLaunch']['query']['gift']) {
                            var _0x37e1c0 = this;
                            this['mHttpCall'] = new _0x273e20(), this['mHttpCall']['once'](Laya['Event']['COMPLETE'], this, function (_0x4acdd0) {
                                var _0x375189 = null;
                                _0x375189 = 'string' == typeof _0x4acdd0 ? _0x765953['util']['getJSON'](_0x4acdd0) : _0x765953['util']['getJSON'](_0x37e1c0['mHttpCall']['data']), _0x4a884b['LogUtil']['log']('dealCards(' + ')\x20->\x20onRes' + 'ult\x20ret\x20=\x20' + JSON['stringify'](_0x375189)), _0x375189['code'], _0x37e1c0['mHttpCall'] = null;
                            }), this['mHttpCall']['once'](Laya['Event']['ERROR'], this, this['onHttpRequ' + 'estError']);
                            var _0x30dcf3 = [];
                            _0x30dcf3['uid'] = this['mUID'], null != _0x37e1c0['mLaunch']['query']['gift'] ? _0x30dcf3['gift'] = Number(this['mLaunch']['query']['gift']) : void 0x0 !== this['mLaunch']['query']['gift'] ? _0x30dcf3['gift'] = Number(this['mLaunch']['query']['gift']) : _0x30dcf3['gift'] = 0x0, null != _0x1ac2a7 ? _0x30dcf3['ticket'] = _0x1ac2a7 : void 0x0 !== this['mLaunch']['shareTicke' + 't'] && (_0x30dcf3['ticket'] = this['mLaunch']['shareTicke' + 't']), this['mLaunch']['query']['gift'] = 0x0;
                            var _0x4aa94d = _0x2dc530['ConfigUtil']['mURL'] + _0x2dc530['ConfigUtil']['mCmd']['AddCard'] + _0x765953['util']['getUrlPara' + 'ms'](_0x30dcf3, '1.0.1');
                            this['mHttpCall']['send'](_0x4aa94d, null, 'get', 'text');
                        }
                    }, _0x2fb7bb['prototype']['updateCard' + 's'] = function (_0x49fcdd) {
                        void 0x0 === _0x49fcdd && (_0x49fcdd = !0x1);
                        var _0x26050a = this;
                        this['mHttpCall'] = new _0x273e20(), this['mHttpCall']['once'](Laya['Event']['COMPLETE'], this, function (_0x1d990b) {
                            _0x49fcdd && wx['hideLoadin' + 'g']();
                            var _0x422612 = null;
                            _0x422612 = 'string' == typeof _0x1d990b ? _0x765953['util']['getJSON'](_0x1d990b) : _0x765953['util']['getJSON'](_0x26050a['mHttpCall']['data']), _0x4a884b['LogUtil']['log']('updateCard' + 's()\x20->\x20onR' + 'esult\x20ret\x20' + '=\x20' + JSON['stringify'](_0x422612)), 0x0 == _0x422612['code'] && (_0x26050a['mCards'] = Number(_0x422612['cards'])), _0x26050a['mHttpCall'] = null;
                        }), this['mHttpCall']['once'](Laya['Event']['ERROR'], this, this['onHttpRequ' + 'estError']);
                        var _0x47a798 = [];
                        _0x47a798['uid'] = this['mUID'], _0x49fcdd && wx['showLoadin' + 'g']({
                            'title': '',
                            'mask': !0x0,
                            'success': function () {
                            },
                            'fail': function () {
                            },
                            'complete': function () {
                            }
                        });
                        var _0x77f460 = _0x2dc530['ConfigUtil']['mURL'] + _0x2dc530['ConfigUtil']['mCmd']['querycards'] + _0x765953['util']['getUrlPara' + 'ms'](_0x47a798);
                        this['mHttpCall']['send'](_0x77f460, null, 'get', 'text');
                    }, _0x2fb7bb['prototype']['addCardFor' + 'Me'] = function (_0x7bbc81) {
                        var _0x356217 = this;
                        this['mHttpCall'] = new _0x273e20(), this['mHttpCall']['once'](Laya['Event']['COMPLETE'], this, function (_0xef348e) {
                            var _0x5671f6 = null;
                            _0x5671f6 = 'string' == typeof _0xef348e ? _0x765953['util']['getJSON'](_0xef348e) : _0x765953['util']['getJSON'](_0x356217['mHttpCall']['data']), _0x4a884b['LogUtil']['log']('addCardFor' + 'Me()\x20->\x20on' + 'Result\x20ret' + '\x20=\x20' + JSON['stringify'](_0x5671f6)), 0x0 == _0x5671f6['code'] && (_0x356217['mCards'] < 0x2 && (_0x356217['mCards'] = _0x356217['mCards'] + 0x1), wx['showToast']({
                                'title': '获得复活卡1张',
                                'icon': 'success',
                                'image': '',
                                'duration': 0x7d0,
                                'success': function () {
                                },
                                'fail': function () {
                                },
                                'complete': function () {
                                }
                            })), _0x356217['mHttpCall'] = null;
                        }), this['mHttpCall']['once'](Laya['Event']['ERROR'], this, this['onHttpRequ' + 'estError']);
                        var _0x38a768 = [];
                        _0x38a768['uid'] = _0x356217['mUID'], _0x38a768['id'] = _0x7bbc81;
                        var _0x7d3a8c = _0x2dc530['ConfigUtil']['mURL'] + _0x2dc530['ConfigUtil']['mCmd']['AddMyCard'] + _0x765953['util']['getUrlPara' + 'ms'](_0x38a768, '1.0.1');
                        this['mHttpCall']['send'](_0x7d3a8c, null, 'get', 'text');
                    }, _0x2fb7bb['prototype']['showWorldR' + 'ank'] = function (_0x2ae98c) {
                        void 0x0 === _0x2ae98c && (_0x2ae98c = 0x0);
                        var _0x1f8052 = this;
                        wx['showLoadin' + 'g']({
                            'title': '',
                            'mask': !0x0,
                            'success': function () {
                            },
                            'fail': function () {
                            },
                            'complete': function () {
                            }
                        }), this['mHttpCall'] = new _0x273e20(), this['mHttpCall']['once'](Laya['Event']['COMPLETE'], this, function (_0xb5e58f) {
                            var _0x49472b = null;
                            if (_0x49472b = 'string' == typeof _0xb5e58f ? _0x765953['util']['getJSON'](_0xb5e58f) : _0x765953['util']['getJSON'](_0x1f8052['mHttpCall']['data']), _0x4a884b['LogUtil']['log']('showWorldR' + 'ank()\x20->\x20o' + 'nResult\x20re' + 't\x20=\x20' + JSON['stringify'](_0x49472b)), 0x0 == _0x49472b['code']) {
                                var _0x260c8d = Number(_0x49472b['rank']);
                                _0x260c8d > 0x0 && _0x1f8052['mMarks'][0x0] > 0x0 && (console['log']('MMRANK', _0x260c8d), _0x1f8052['mMyRank'] = _0x260c8d);
                                for (var _0x40be0e = _0x3021fc['default']['app']['wRankData'], _0x573e0f = _0x49472b['data'], _0xdf8a3a = 0x0; _0xdf8a3a < _0x573e0f['length']; _0xdf8a3a++) {
                                    var _0x57f050 = {};
                                    null == _0x573e0f[_0xdf8a3a]['name'] ? _0x57f050['name'] = 'null' : (_0x57f050['name'] = _0x3021fc['default']['app']['subname'](_0x589b55['TsBase64']['FromBase64'](_0x573e0f[_0xdf8a3a]['name']), 0xc), console['log'](_0x57f050['name']));
                                    var _0x140c80 = _0x589b55['TsBase64']['FromBase64'](_0x573e0f[_0xdf8a3a]['avatar']);
                                    '0' == _0x140c80['charAt'](_0x140c80['length'] - 0x1) && '/' == _0x140c80['charAt'](_0x140c80['length'] - 0x2) && (_0x140c80 = _0x140c80['substr'](0x0, _0x140c80['length'] - 0x2), _0x140c80 += '/132'), _0x57f050['avatar'] = _0x140c80, _0x57f050['mark'] = Math['floor'](_0x573e0f[_0xdf8a3a]['hismark']), _0x57f050['city'] = _0x573e0f[_0xdf8a3a]['city'], _0x57f050['uid'] = _0x573e0f[_0xdf8a3a]['uid'], _0x57f050['map1'] = Math['floor'](_0x573e0f[_0xdf8a3a]['mark1']), _0x57f050['map2'] = Math['floor'](_0x573e0f[_0xdf8a3a]['mark2']), _0x57f050['map3'] = Math['floor'](_0x573e0f[_0xdf8a3a]['mark3']), _0x40be0e['push'](_0x57f050);
                                }
                                for (_0xdf8a3a = 0x0; _0xdf8a3a < _0x40be0e['length']; _0xdf8a3a++)
                                    _0x40be0e[_0xdf8a3a]['rank'] = _0xdf8a3a + 0x1;
                                _0x573e0f['length'], wx['hideLoadin' + 'g']();
                            }
                            _0x1f8052['mHttpCall'] = null;
                        }), this['mHttpCall']['once'](Laya['Event']['ERROR'], this, this['onHttpRequ' + 'estError']);
                        var _0x18c5bc = [];
                        _0x18c5bc['uid'] = this['mUID'], _0x18c5bc['page'] = _0x2ae98c;
                        var _0x503c87 = _0x2dc530['ConfigUtil']['mURL'] + _0x2dc530['ConfigUtil']['mCmd']['rank'] + _0x765953['util']['getUrlPara' + 'ms'](_0x18c5bc);
                        this['mHttpCall']['send'](_0x503c87, null, 'get', 'text'), _0x4a884b['LogUtil']['log']('showWorldR' + 'ank()\x20->\x20s' + 'tr\x20=\x20' + _0x503c87);
                    }, _0x2fb7bb['prototype']['onHttpRequ' + 'estError'] = function (_0x409ad9) {
                        this['mHttpCall'] = null, console['log']('onHttpRequ' + 'estError:' + _0x409ad9);
                    }, _0x2fb7bb['prototype']['initMoreGa' + 'me'] = function (_0x46e61e, _0x21c762) {
                        void 0x0 === _0x21c762 && (_0x21c762 = !0x1);
                        var _0x40205b = _0x108f14['MoreGame']['GetIndexRa' + 'ndom'](_0x3021fc['default']['app']['mWX']['mGamesBox']);
                        null != _0x40205b ? (_0x46e61e['name'] = _0x40205b['gameid'], _0x21c762 ? (_0x46e61e['skin'] = _0x40205b['url_btn'], _0x46e61e['visible'] = !0x0) : _0x46e61e['skin'] = _0x40205b['url_result']) : (_0x46e61e['visible'] = !0x1, _0x46e61e['skin'] = '');
                    }, _0x2fb7bb['prototype']['initMoreGa' + 'me1'] = function (_0x522fe9, _0x2f1b07) {
                        var _0x584b42 = _0x108f14['MoreGame']['GetIndexRa' + 'ndom'](_0x3021fc['default']['app']['mWX']['mGamesBox']);
                        null != _0x584b42 ? (_0x522fe9['name'] = _0x584b42['gameid'], _0x522fe9['skin'] = _0x584b42['url_icon'], _0x522fe9['visible'] = !0x0, _0x2f1b07['text'] = _0x584b42['name']) : (_0x522fe9['visible'] = !0x1, _0x522fe9['skin'] = '');
                    }, _0x2fb7bb['prototype']['getMoreUrl'] = function (_0x12e088) {
                        for (var _0x395a95 = 0x0; _0x395a95 < this['mGamesBox']['length']; _0x395a95++)
                            if (Number(_0x12e088) == Number(this['mGamesBox'][_0x395a95]['gameid']))
                                return this['mGamesBox'][_0x395a95];
                    }, _0x2fb7bb['prototype']['reportADHi' + 't'] = function (_0x20e34b) {
                        var _0x54d3d2 = this;
                        this['mHttpCall'] = new _0x273e20(), this['mHttpCall']['once'](Laya['Event']['COMPLETE'], this, function (_0x339319) {
                            _0x54d3d2['mHttpCall'] = null, _0x4a884b['LogUtil']['log']('reportADHi' + 't()\x20->\x20onR' + 'esult\x20e\x20=\x20' + JSON['stringify'](_0x339319));
                        }), this['mHttpCall']['once'](Laya['Event']['ERROR'], this, this['onHttpRequ' + 'estError']);
                        var _0x47f1bd = [];
                        _0x47f1bd['uid'] = this['mUID'], _0x47f1bd['id'] = _0x20e34b;
                        var _0x10da83 = _0x2dc530['ConfigUtil']['mURL'] + _0x2dc530['ConfigUtil']['mCmd']['data'] + _0x765953['util']['getUrlPara' + 'ms'](_0x47f1bd);
                        _0x4a884b['LogUtil']['log']('reportADHi' + 't()\x20->\x20onR' + 'esult\x20str\x20' + '=\x20' + _0x10da83), this['mHttpCall']['send'](_0x10da83, null, 'get', 'text');
                    }, _0x2fb7bb['prototype']['showMoreGa' + 'mePage'] = function (_0x1190d9, _0x5a6bfa) {
                        void 0x0 === _0x5a6bfa && (_0x5a6bfa = null);
                        var _0x2d9efd = _0x3021fc['default']['app']['mWX']['getMoreUrl'](_0x1190d9['name']);
                        null != _0x2d9efd && (_0x3021fc['default']['app']['is_gamebox'] = !0x0, _0x88ed17['gameBox']['showBoxPag' + 'e'](_0x2d9efd['appid'], _0x3021fc['default']['app']['mWX']['mGamesBox'], '天天切蔬菜3D'));
                    }, _0x2fb7bb['prototype']['showMoreGa' + 'mePage1'] = function (_0x4cace7, _0x1e7b90) {
                        void 0x0 === _0x1e7b90 && (_0x1e7b90 = null);
                        var _0x49e117 = _0x3021fc['default']['app']['mWX']['getMoreUrl'](_0x4cace7['name']);
                        null != _0x49e117 && (_0x3021fc['default']['app']['is_gamebox'] = !0x0, _0x3021fc['default']['app']['moregame'] = 0x3, _0x3a7507['MyLikeView']['from_page'] = _0x1e7b90, _0x88ed17['gameBox']['showBoxPag' + 'e'](_0x49e117['appid'], _0x3021fc['default']['app']['mWX']['mGamesBox'], '天天切蔬菜3D'));
                    }, _0x2fb7bb['prototype']['getAgentID'] = function () {
                        return 0x0;
                    }, _0x2fb7bb['prototype']['initGameCl' + 'ub'] = function (_0x1cbe3a) {
                        _0x4e47d8['default']['uo']['wxVersion']() >= '2.0.3' && null == this['gameClub'] ? (console['log']('创建游戏圈'), this['gameClub'] = wx['createGame' + 'ClubButton']({
                            'icon': 'dark',
                            'type': 'image',
                            'image': 'gamebg/btn' + '_bbs.png',
                            'style': {
                                'right': 0x14,
                                'top': _0x1cbe3a,
                                'width': 0x1e,
                                'height': 0x2c
                            }
                        })) : console['log']('不能创建游戏圈');
                    }, _0x2fb7bb['prototype']['isInitGame' + 'Club'] = function () {
                        return null != this['gameClub'] && (_0x3021fc['default']['app']['mWX']['displayGam' + 'eClub'](!0x0), !0x0);
                    }, _0x2fb7bb['prototype']['getMenuBut' + 'tonTop_Cen' + 'terPoint'] = function () {
                        var _0xa612e9 = new Laya['Point'](0x0, 0x0), _0x20bdd7 = !0x1;
                        if (Laya['Browser']['onMiniGame']) {
                            if (_0x4e47d8['default']['uo']['wxVersion']() >= '2.1.0' && null == this['mWxMenuBut' + 'tonRect']) {
                                var _0x2107cf = wx['getMenuBut' + 'tonBoundin' + 'gClientRec' + 't']();
                                null != _0x2107cf ? NaN != _0x2107cf['height'] && void 0x0 != _0x2107cf['height'] && null != _0x2107cf['height'] && (this['mWxMenuBut' + 'tonRect'] = _0x2107cf) : _0x20bdd7 = !0x0;
                            }
                            if (null != this['mWxMenuBut' + 'tonRect']) {
                                var _0x4d3925 = this['mWxMenuBut' + 'tonRect']['height'], _0x580808 = this['dealTopVal' + 'ue'](this['mWxMenuBut' + 'tonRect']['top']);
                                this['rnt2']['x'] = this['mWxMenuBut' + 'tonRect']['width'] * Laya['stage']['height'] / _0x4e47d8['default']['uo']['mPhone']['screenHeig' + 'ht'], this['rnt2']['y'] = this['mWxMenuBut' + 'tonRect']['height'] * Laya['stage']['height'] / _0x4e47d8['default']['uo']['mPhone']['screenHeig' + 'ht'], this['rnt2']['right'] = this['mWxMenuBut' + 'tonRect']['right'], this['rnt2']['height'] = this['mWxMenuBut' + 'tonRect']['height'], console['log']('mWxMenuBut' + 'tonRect:', this['mWxMenuBut' + 'tonRect'], this['rnt2']), _0xa612e9['x'] = _0x580808 * Laya['stage']['height'] / _0x4e47d8['default']['uo']['mPhone']['screenHeig' + 'ht'], _0xa612e9['y'] = _0x4d3925 * Laya['stage']['height'] / _0x4e47d8['default']['uo']['mPhone']['screenHeig' + 'ht'], _0x20bdd7 && (_0xa612e9['x'] = 0x4d, _0xa612e9['y'] = 0.5);
                            }
                        }
                        return _0x20bdd7 && (_0xa612e9['x'] = 0x4d, _0xa612e9['y'] = 0.5), _0xa612e9;
                    }, _0x2fb7bb['prototype']['dealTopVal' + 'ue'] = function (_0x5e9a4) {
                        return _0x5e9a4 > 0x0 ? _0x5e9a4 : Number(_0x4e47d8['default']['uo']['phone']()['screenHeig' + 'ht']) > 0x320 ? 0x28 : 0xa;
                    }, _0x2fb7bb['prototype']['getMyMark'] = function () {
                        var _0x38417a = this;
                        this['mHttpCall'] = new _0x273e20(), this['mHttpCall']['once'](Laya['Event']['COMPLETE'], this, function (_0x556243) {
                            wx['hideLoadin' + 'g']();
                            var _0x4c26f6 = null;
                            _0x4c26f6 = 'string' == typeof _0x556243 ? _0x765953['util']['getJSON'](_0x556243) : _0x765953['util']['getJSON'](_0x38417a['mHttpCall']['data']), _0x4a884b['LogUtil']['log']('getMyMark(' + ')\x20->\x20onRes' + 'ult\x20ret\x20=\x20' + JSON['stringify'](_0x4c26f6)), 0x0 == _0x4c26f6['code'] && (_0x38417a['mMarks'][0x0] = Number(_0x4c26f6['mark']['mark']), wx['postMessag' + 'e']({
                                'type': 'send',
                                'mark': _0x38417a['mMarks'][0x0],
                                'level': 0x0,
                                'best': 0x0,
                                'user': _0x4e47d8['default']['uo']['getUser']()
                            })), _0x38417a['mHttpCall'] = null;
                        }), this['mHttpCall']['once'](Laya['Event']['ERROR'], this, this['onHttpRequ' + 'estError']);
                        var _0x8ec8c7 = [];
                        _0x8ec8c7['uid'] = this['mUID'];
                        var _0x32d063 = _0x2dc530['ConfigUtil']['mURL'] + _0x2dc530['ConfigUtil']['mCmd']['mymark'] + _0x765953['util']['getUrlPara' + 'ms'](_0x8ec8c7, '1.0.1');
                        this['mHttpCall']['send'](_0x32d063, null, 'get', 'text'), _0x4a884b['LogUtil']['log']('getMyMark(' + ')\x20->\x20str\x20=' + '\x20' + _0x32d063);
                    }, _0x2fb7bb['prototype']['reportData'] = function (_0x571ff7) {
                        var _0xfeca91 = this;
                        this['mHttpCall'] = new _0x273e20(), this['mHttpCall']['once'](Laya['Event']['COMPLETE'], this, function (_0xe0a6b9) {
                            _0xfeca91['mHttpCall'] = null, _0x4a884b['LogUtil']['log']('reportData' + '()\x20->\x20onRe' + 'sult\x20e\x20=\x20' + JSON['stringify'](_0xe0a6b9));
                        }), this['mHttpCall']['once'](Laya['Event']['ERROR'], this, this['onHttpRequ' + 'estError']);
                        var _0x39d2c9 = [];
                        _0x39d2c9['uid'] = this['mUID'], _0x39d2c9['type'] = _0x571ff7;
                        var _0x216dc5 = _0x2dc530['ConfigUtil']['mURL'] + _0x2dc530['ConfigUtil']['mCmd']['ad'] + _0x765953['util']['getUrlPara' + 'ms'](_0x39d2c9, '1.0.1');
                        this['mHttpCall']['send'](_0x216dc5, null, 'get', 'text'), _0x4a884b['LogUtil']['log']('reportData' + '()\x20->\x20str\x20' + '=\x20' + _0x216dc5);
                    }, _0x2fb7bb['prototype']['initReturn'] = function () {
                        var _0x4bd07b = _0x4e47d8['default']['uo']['launch']()['query']['pid'];
                        null == _0x4bd07b || void 0x0 === _0x4bd07b || '' == _0x4bd07b ? (this['mReturnApp' + 'id'] = '', this['mReturnUrl'] = '') : 0x8 == Number(_0x4bd07b) ? (this['mReturnApp' + 'id'] = '', this['mReturnUrl'] = '') : (this['mReturnApp' + 'id'] = _0x4bd07b, this['mReturnUrl'] = 'pages/inde' + 'x/index?');
                    }, _0x2fb7bb['prototype']['getOnOffRe' + 'ward1'] = function () {
                        for (var _0x206d2f = 0x0, _0x106400 = 0x0; _0x106400 < _0x3021fc['default']['app']['mWX']['mOnOff']['length']; _0x106400++)
                            if ('of_reward_' + 'first' == _0x3021fc['default']['app']['mWX']['mOnOff'][_0x106400]['key']) {
                                _0x206d2f = Number(JSON['parse'](_0x3021fc['default']['app']['mWX']['mOnOff'][_0x106400]['param'])['levelNum']);
                                break;
                            }
                        return _0x206d2f;
                    }, _0x2fb7bb['prototype']['getOnOffRe' + 'ward2'] = function () {
                        for (var _0x544f89 = 0x0, _0x36337d = 0x0; _0x36337d < _0x3021fc['default']['app']['mWX']['mOnOff']['length']; _0x36337d++)
                            if ('of_reward_' + 'getstyle' == _0x3021fc['default']['app']['mWX']['mOnOff'][_0x36337d]['key']) {
                                _0x544f89 = Number(_0x3021fc['default']['app']['mWX']['mOnOff'][_0x36337d]['value']);
                                break;
                            }
                        return _0x544f89;
                    }, _0x2fb7bb['prototype']['getOnOffRe' + 'ward3'] = function () {
                        for (var _0x2a7318 = 0x0, _0x4bf52b = 0x0; _0x4bf52b < _0x3021fc['default']['app']['mWX']['mOnOff']['length']; _0x4bf52b++)
                            if ('of_reward_' + 'interval' == _0x3021fc['default']['app']['mWX']['mOnOff'][_0x4bf52b]['key']) {
                                _0x2a7318 = Number(JSON['parse'](_0x3021fc['default']['app']['mWX']['mOnOff'][_0x4bf52b]['param'])['interval']);
                                break;
                            }
                        return _0x2a7318;
                    }, _0x2fb7bb['prototype']['getOnOffRe' + 'wardSkip'] = function () {
                        for (var _0x57a2ff = 0x0, _0x213f53 = 0x0; _0x213f53 < _0x3021fc['default']['app']['mWX']['mOnOff']['length']; _0x213f53++)
                            if ('of_reward_' + 'skip' == _0x3021fc['default']['app']['mWX']['mOnOff'][_0x213f53]['key']) {
                                _0x57a2ff = Number(JSON['parse'](_0x3021fc['default']['app']['mWX']['mOnOff'][_0x213f53]['param'])['delay']);
                                break;
                            }
                        return _0x57a2ff;
                    }, _0x2fb7bb['prototype']['getOnOffAl' + 'lControl'] = function () {
                        for (var _0x406ac1 = 0x0, _0x3627f6 = 0x0; _0x3627f6 < _0x3021fc['default']['app']['mWX']['mOnOff']['length']; _0x3627f6++)
                            if ('of_all' == _0x3021fc['default']['app']['mWX']['mOnOff'][_0x3627f6]['key']) {
                                _0x406ac1 = Number(_0x3021fc['default']['app']['mWX']['mOnOff'][_0x3627f6]['value']);
                                break;
                            }
                        return _0x406ac1;
                    }, _0x2fb7bb['prototype']['getOnOffSt' + 'artReward'] = function () {
                        for (var _0x1f9291 = 0x0, _0x5b93fe = 0x0; _0x5b93fe < _0x3021fc['default']['app']['mWX']['mOnOff']['length']; _0x5b93fe++)
                            if ('of_start_r' + 'eward' == _0x3021fc['default']['app']['mWX']['mOnOff'][_0x5b93fe]['key']) {
                                _0x1f9291 = Number(_0x3021fc['default']['app']['mWX']['mOnOff'][_0x5b93fe]['value']);
                                break;
                            }
                        return _0x1f9291;
                    }, _0x2fb7bb['prototype']['getOnOffSt' + 'artReward2'] = function () {
                        for (var _0x32dcf = 0x0, _0xc5eca9 = 0x0; _0xc5eca9 < _0x3021fc['default']['app']['mWX']['mOnOff']['length']; _0xc5eca9++)
                            if ('of_startre' + 'ward_inter' + 'val' == _0x3021fc['default']['app']['mWX']['mOnOff'][_0xc5eca9]['key']) {
                                _0x32dcf = Number(JSON['parse'](_0x3021fc['default']['app']['mWX']['mOnOff'][_0xc5eca9]['param'])['interval']);
                                break;
                            }
                        return _0x32dcf;
                    }, _0x2fb7bb['prototype']['getOnOffSt' + 'artReward3'] = function () {
                        for (var _0x66f1e4 = 0x0, _0x515c1a = 0x0; _0x515c1a < _0x3021fc['default']['app']['mWX']['mOnOff']['length']; _0x515c1a++)
                            if ('of_startre' + 'ward_first' + 'appear' == _0x3021fc['default']['app']['mWX']['mOnOff'][_0x515c1a]['key']) {
                                _0x66f1e4 = Number(JSON['parse'](_0x3021fc['default']['app']['mWX']['mOnOff'][_0x515c1a]['param'])['level']);
                                break;
                            }
                        return _0x66f1e4;
                    }, _0x2fb7bb['prototype']['getOnOffBo' + 'xReward2'] = function () {
                        for (var _0x2cc5d4 = 0x0, _0x52b99a = 0x0; _0x52b99a < _0x3021fc['default']['app']['mWX']['mOnOff']['length']; _0x52b99a++)
                            if ('of_boxrewa' + 'rd_change' == _0x3021fc['default']['app']['mWX']['mOnOff'][_0x52b99a]['key']) {
                                _0x2cc5d4 = Number(JSON['parse'](_0x3021fc['default']['app']['mWX']['mOnOff'][_0x52b99a]['param'])['interval']);
                                break;
                            }
                        return _0x2cc5d4;
                    }, _0x2fb7bb['prototype']['getOnOffBo' + 'xReward'] = function () {
                        for (var _0x3f9e3d = [], _0x15797a = 0x0, _0x51dba4 = 0x0, _0x6cc7c0 = 0x0; _0x6cc7c0 < _0x3021fc['default']['app']['mWX']['mOnOff']['length']; _0x6cc7c0++)
                            if ('of_box_rew' + 'ard' == _0x3021fc['default']['app']['mWX']['mOnOff'][_0x6cc7c0]['key']) {
                                _0x15797a = Number(_0x3021fc['default']['app']['mWX']['mOnOff'][_0x6cc7c0]['value']), _0x51dba4 = Number(JSON['parse'](_0x3021fc['default']['app']['mWX']['mOnOff'][_0x6cc7c0]['param'])['count']), _0x3f9e3d['push'](_0x15797a), _0x3f9e3d['push'](_0x51dba4);
                                break;
                            }
                        return _0x3f9e3d;
                    }, _0x2fb7bb['prototype']['onLaunch'] = function (_0x4a7394, _0x1619c0) {
                        console['log']('aaadfafasf' + 'asonLaunch' + 'onLaunchon' + 'LaunchonLa' + 'unchonLaun' + 'chdfas');
                    }, _0x2fb7bb['prototype']['getIsNewDa' + 'y'] = function () {
                        var _0x3a440a = Date['now'](), _0x6c9ba4 = 0x0, _0x269c35 = Laya['LocalStora' + 'ge']['getItem']('lastLoginT' + 'ime');
                        _0x269c35 && (_0x6c9ba4 = Number(_0x269c35)), this['isSameDay'](_0x3a440a, _0x6c9ba4) ? (_0x3021fc['default']['app']['isNewDay'] = !0x1, _0x4a884b['LogUtil']['log']('=====和上次登录' + '是同一天=====')) : (_0x3021fc['default']['app']['isNewDay'] = !0x0, _0x4a884b['LogUtil']['log']('=====新的一天=' + '=========')), Laya['LocalStora' + 'ge']['setItem']('lastLoginT' + 'ime', String(_0x3a440a));
                    }, _0x2fb7bb['prototype']['isSameDay'] = function (_0x1375c8, _0x49e178) {
                        var _0x1249aa = new Date(_0x1375c8), _0x14f8cf = new Date(_0x49e178);
                        return _0x1249aa['getFullYea' + 'r']() == _0x14f8cf['getFullYea' + 'r']() && _0x1249aa['getMonth']() == _0x14f8cf['getMonth']() && _0x1249aa['getDate']() == _0x14f8cf['getDate']();
                    }, _0x2fb7bb['prototype']['address_1'] = function () {
                        if (this['is_address']) {
                            this['is_address'] = !0x1, wx['getSystemI' + 'nfoSync']();
                            var _0x2fbd60 = Laya['LocalStora' + 'ge']['getItem']('firstEntry' + 'Time');
                            '' == _0x2fbd60 && (_0x2fbd60 = String(_0x20b1fb['TimeUtil']['getCurrTim' + 'e']()), Laya['LocalStora' + 'ge']['setItem']('firstEntry' + 'Time', _0x2fbd60));
                            var _0x348db0 = Laya['LocalStora' + 'ge']['getItem']('lastEntryT' + 'ime');
                            ('' == _0x348db0 && (_0x348db0 = String(_0x20b1fb['TimeUtil']['getCurrTim' + 'e']()), Laya['LocalStora' + 'ge']['setItem']('lastEntryT' + 'ime', _0x348db0)), null != _0x4e47d8['default']['uo']['mWeUser']['uid']) && _0x3021fc['default']['app']['mWX']['indexBpTot' + 'le']('app_open', {});
                            var _0x41f0eb = {
                                'channel_type': 0x0,
                                'share_from': void 0x0 !== _0x4e47d8['default']['uo']['launch']()['query']['uid'] ? _0x4e47d8['default']['uo']['launch']()['query']['uid'] : '0',
                                'first_entry_time': _0x2fbd60,
                                'last_entry_time': _0x348db0,
                                'device_os_version': _0x4e47d8['default']['uo']['mPhone']['system'],
                                'device_type': _0x4e47d8['default']['uo']['mPhone']['model'],
                                'wechat_version': _0x4e47d8['default']['uo']['mPhone']['version']
                            };
                            _0x3021fc['default']['app']['mWX']['indexBpTot' + 'le']('app_entry', _0x41f0eb);
                        }
                    }, _0x2fb7bb['prototype']['dealQuery'] = function (_0x142006, _0x34fd11) {
                        void 0x0 === _0x34fd11 && (_0x34fd11 = !0x1), null != _0x142006['query']['gift'] && void 0x0 !== _0x142006['query']['gift'] ? _0x142006['query']['id'] > 0x0 ? _0x3021fc['default']['app']['mWX']['addCardFor' + 'Me'](_0x142006['query']['id']) : _0x3021fc['default']['app']['mWX']['dealCards']() : 0x8 == Number(_0x142006['query']['type']) ? void 0x0 !== _0x142006['shareTicke' + 't'] && 'undefined' != _0x142006['shareTicke' + 't'] && _0x142006['shareTicke' + 't'] : _0x142006['query']['id'] > 0x0 && (_0x3021fc['default']['app']['mWX']['mrelayID'] = _0x142006['query']['id']);
                    }, _0x2fb7bb['prototype']['displayGam' + 'eClub'] = function (_0x28afd3) {
                        null != _0x3021fc['default']['app']['mWX']['gameClub'] && (_0x28afd3 ? _0x3021fc['default']['app']['mWX']['gameClub']['show']() : _0x3021fc['default']['app']['mWX']['gameClub']['hide']());
                    }, _0x2fb7bb['prototype']['getOnOffBy' + 'Key'] = function (_0x436a73) {
                        if (0x0 == this['fhOnoff'] && 'of_jump' != _0x436a73)
                            return !0x1;
                        for (var _0x1ec72d = 0x0; _0x1ec72d < this['mOnOff']['length']; _0x1ec72d++)
                            if (this['mOnOff'][_0x1ec72d]['key'] == _0x436a73)
                                return '0' != this['mOnOff'][_0x1ec72d]['value'];
                        return !0x1;
                    }, _0x2fb7bb['prototype']['isTodayChe' + 'ck'] = function (_0x55d7cf, _0x45058b) {
                        for (var _0x40e85b = 0x1; _0x40e85b <= 0x7; _0x40e85b++)
                            if (Number(_0x55d7cf['day_' + _0x40e85b]) == _0x45058b)
                                return !0x1;
                        return !0x0;
                    }, _0x2fb7bb['prototype']['updateLoca' + 'lPropCount'] = function (_0x4733f5, _0x58c23d) {
                        for (var _0x553580 = 0x0; _0x553580 < _0x3021fc['default']['app']['mWX']['mPropList']['length']; _0x553580++)
                            if (_0x3021fc['default']['app']['mWX']['mPropList'][_0x553580]['id'] == _0x4733f5) {
                                _0x3021fc['default']['app']['mWX']['mPropList'][_0x553580]['count'] = _0x58c23d;
                                break;
                            }
                    }, _0x2fb7bb['prototype']['updateLoca' + 'lTaskStatu' + 's'] = function (_0x2acee1, _0x2a7cb9) {
                        for (var _0x212f08 = 0x0; _0x212f08 < this['mTaskInfo']['length']; _0x212f08++)
                            if (this['mTaskInfo'][_0x212f08]['id'] == _0x2acee1) {
                                this['mTaskInfo'][_0x212f08]['give'] = _0x2a7cb9;
                                break;
                            }
                    }, _0x2fb7bb['prototype']['updateLoca' + 'lTaskOverC' + 'ount'] = function (_0x257f91, _0x4cfad1) {
                        for (var _0x5273df = 0x0; _0x5273df < this['mTaskInfo']['length']; _0x5273df++)
                            if (this['mTaskInfo'][_0x5273df]['id'] == _0x257f91) {
                                this['mTaskInfo'][_0x5273df]['over_count'] = _0x4cfad1;
                                break;
                            }
                    }, _0x2fb7bb['prototype']['setUserVal' + 'ue'] = function (_0x4876a1, _0x547427, _0x441351, _0x598eb7) {
                        void 0x0 === _0x441351 && (_0x441351 = !0x1), void 0x0 === _0x598eb7 && (_0x598eb7 = null);
                        var _0x548014 = this;
                        _0x441351 && wx['showLoadin' + 'g']({
                            'title': '',
                            'mask': !0x0,
                            'success': function () {
                            },
                            'fail': function () {
                            },
                            'complete': function () {
                            }
                        }), this['mHttpCall'] = new _0x273e20(), this['mHttpCall']['once'](Laya['Event']['COMPLETE'], this, function (_0x1ebe2b) {
                            0x0 == ('string' == typeof _0x1ebe2b ? _0x765953['util']['getJSON'](_0x1ebe2b) : _0x765953['util']['getJSON'](_0x548014['mHttpCall']['data']))['code'] && (_0x548014['updateUser' + 'DataByKey'](_0x4876a1, _0x547427), null != _0x598eb7 && _0x598eb7()), _0x441351 && wx['hideLoadin' + 'g'](), _0x548014['mHttpCall'] = null;
                        }), this['mHttpCall']['once'](Laya['Event']['ERROR'], this, this['onHttpRequ' + 'estError']);
                        var _0x191991 = [];
                        _0x191991['uid'] = this['mUID'], _0x191991['dt_key'] = _0x4876a1, _0x191991['dt_value'] = _0x547427;
                        var _0x1cc9c1 = _0x2dc530['ConfigUtil']['mURL'] + _0x2dc530['ConfigUtil']['mCmd']['SetUserVal' + 'ue'] + _0x765953['util']['getUrlPara' + 'ms'](_0x191991, '1.0.1');
                        this['mHttpCall']['send'](_0x1cc9c1, null, 'get', 'text');
                    }, _0x2fb7bb['prototype']['getUserDat' + 'aByKey'] = function (_0x5e2d05) {
                        if ('knife_skin' + '_id' === _0x5e2d05)
                            return platform['getInstanc' + 'e']()['getStorage' + 'Sync'](_0x5e2d05) || 0xa;
                    }, _0x2fb7bb['prototype']['updateUser' + 'DataByKey'] = function (_0x2dadf9, _0x3f2f05) {
                        for (var _0x2184ec = 0x0, _0x157472 = 0x0; _0x157472 < this['mUserData']['length']; _0x157472++)
                            this['mUserData'][_0x157472]['key'] == _0x2dadf9 ? this['mUserData'][_0x157472]['values'] = _0x3f2f05 : _0x2184ec++;
                        if (_0x2184ec == this['mUserData']['length']) {
                            var _0x50d92f = new Object();
                            _0x50d92f['key'] = _0x2dadf9, _0x50d92f['values'] = _0x3f2f05, this['mUserData']['push'](_0x50d92f);
                        }
                    }, _0x2fb7bb['prototype']['ChangeTCt'] = function (_0xaf18e1, _0x2a225e, _0x102626, _0x4567ed) {
                        void 0x0 === _0x102626 && (_0x102626 = null);
                        var _0x4d09f5 = this;
                        this['mHttpCall'] = new _0x273e20(), this['mHttpCall']['once'](Laya['Event']['COMPLETE'], this, function (_0x3d867a) {
                            var _0x4a4b3f = null;
                            0x0 == (_0x4a4b3f = 'string' == typeof _0x3d867a ? _0x765953['util']['getJSON'](_0x3d867a) : _0x765953['util']['getJSON'](_0x4d09f5['mHttpCall']['data']))['code'] && (_0x3021fc['default']['app']['mWX']['updateLoca' + 'lPropCount'](String(_0xaf18e1), _0x4a4b3f['new']), void 0x0 != _0x4567ed && null != _0x4567ed && _0x4567ed()), _0x4a884b['LogUtil']['log']('ChangeTCt(' + ')\x20->\x20ret\x20=' + '\x20' + JSON['stringify'](_0x4a4b3f)), _0x4d09f5['mHttpCall'] = null;
                        }), this['mHttpCall']['once'](Laya['Event']['ERROR'], this, this['onHttpRequ' + 'estError']);
                        var _0x48454b = [];
                        _0x48454b['uid'] = this['mUID'], _0x48454b['tid'] = _0xaf18e1, _0x48454b['count'] = _0x2a225e;
                        var _0x137d26 = _0x2dc530['ConfigUtil']['mURL'] + _0x2dc530['ConfigUtil']['mCmd']['ChangeTCt'] + _0x765953['util']['getUrlPara' + 'ms'](_0x48454b, '1.0.1');
                        this['mHttpCall']['send'](_0x137d26, null, 'get', 'text'), _0x4a884b['LogUtil']['log']('ChangeTCt(' + ')\x20str\x20=\x20' + _0x137d26);
                    }, _0x2fb7bb['prototype']['getPropCou' + 'nt'] = function (_0x15e0d0) {
                        var _0x494572 = 0x0;
                        return _0x3021fc['default']['app']['mWX']['mPropList']['forEach'](function (_0x27cd14) {
                            _0x27cd14['id'] != _0x15e0d0 || (_0x494572 = Number(_0x27cd14['count']));
                        }), _0x494572;
                    }, _0x2fb7bb['prototype']['getSpecifi' + 'cTaskIdByG' + 'oto'] = function (_0x405034) {
                        var _0x2cae4c = '';
                        return _0x3021fc['default']['app']['mWX']['mTaskInfo']['forEach'](function (_0x45b719) {
                            if ('' != _0x45b719['param']) {
                                var _0x2e56f9 = JSON['parse'](_0x45b719['param']);
                                'string' == typeof _0x2e56f9['goto'] && _0x2e56f9['goto'] == _0x405034 && (_0x2cae4c = _0x45b719['id']);
                            }
                        }), _0x2cae4c;
                    }, _0x2fb7bb['prototype']['isTaskFini' + 'shByGoto'] = function (_0x3323e5) {
                        var _0x2b3c4f = !0x1;
                        return _0x3021fc['default']['app']['mWX']['mTaskInfo']['forEach'](function (_0x2b407a) {
                            if ('' != _0x2b407a['param']) {
                                var _0xb1e956 = JSON['parse'](_0x2b407a['param']);
                                'string' == typeof _0xb1e956['goto'] && _0xb1e956['goto'] == _0x3323e5 && _0x2b407a['over_count'] >= _0x2b407a['count'] && (_0x2b3c4f = !0x0);
                            }
                        }), _0x2b3c4f;
                    }, _0x2fb7bb['prototype']['getMediaTy' + 'pe'] = function (_0x38e369, _0x2713fb) {
                        var _0x2c9d49 = this, _0x32238d = (_0x38e369['query']['ald_media_' + 'id'], _0x38e369['query']['ald_link_k' + 'ey']);
                        console['log']('query:', _0x38e369['query']), this['channel_id'] = _0x32238d ? String(_0x32238d) : '0';
                        var _0x5657ef = _0x2713fb['nowday'] == _0x2713fb['regday'];
                        if (this['first_chan' + 'nel_id'] = '-1', _0x5657ef)
                            (_0x29a872 = _0x2713fb['user_data'])['forEach'](function (_0x39416c) {
                                'first_chan' + 'nel_id' == _0x39416c['key'] && (_0x2c9d49['first_chan' + 'nel_id'] = String(_0x39416c['values']));
                            }), '-1' == this['first_chan' + 'nel_id'] && (this['first_chan' + 'nel_id'] = this['channel_id'], _0x3021fc['default']['app']['mWX']['setUserVal' + 'ue']('first_chan' + 'nel_id', String(this['first_chan' + 'nel_id'])));
                        else {
                            var _0x29a872 = _0x2713fb['user_data'];
                            _0x29a872['forEach'](function (_0x49259a) {
                                'first_chan' + 'nel_id' == _0x49259a['key'] && (_0x2c9d49['first_chan' + 'nel_id'] = String(_0x49259a['values']));
                            }), '-1' == this['first_chan' + 'nel_id'] && (this['first_chan' + 'nel_id'] = '0', _0x3021fc['default']['app']['mWX']['setUserVal' + 'ue']('first_chan' + 'nel_id', String(this['first_chan' + 'nel_id'])));
                        }
                    }, _0x2fb7bb['prototype']['isOwnSpeci' + 'ficProp'] = function (_0x10a3b8) {
                        var _0x4f07f0 = 0x0;
                        return this['mPropList']['forEach'](function (_0x1c526a) {
                            _0x1c526a['id'] == _0x10a3b8 && Number(_0x1c526a['count']) > 0x0 && (_0x4f07f0 = Number(_0x1c526a['count']));
                        }), _0x4f07f0;
                    }, _0x2fb7bb['prototype']['getOnOffVa' + 'lueByKey'] = function (_0x26915d) {
                        for (var _0x48dbde = 0x0; _0x48dbde < this['mOnOff']['length']; _0x48dbde++)
                            if (this['mOnOff'][_0x48dbde]['key'] == _0x26915d)
                                return this['mOnOff'][_0x48dbde]['value'];
                        return '0';
                    }, _0x2fb7bb['prototype']['itemTotle'] = function (_0x5352eb, _0x13ac95, _0x54f1ee, _0x14edf7, _0x27912f) {
                        void 0x0 === _0x14edf7 && (_0x14edf7 = ''), void 0x0 === _0x27912f && (_0x27912f = 0x1);
                        var _0x268a10 = this;
                        this['mHttpCall'] = new _0x273e20(), this['mHttpCall']['once'](Laya['Event']['COMPLETE'], this, function (_0x4f0bbc) {
                            _0x268a10['mHttpCall'] = null;
                        }), this['mHttpCall']['once'](Laya['Event']['ERROR'], this, this['onHttpRequ' + 'estError']);
                        var _0x71faf2 = [];
                        _0x71faf2['uid'] = this['mUID'], _0x71faf2['useitem'] = _0x5352eb, _0x71faf2['usect'] = _0x27912f, _0x71faf2['poskey'] = _0x13ac95, void 0x0 != _0x54f1ee && null != _0x54f1ee && (_0x71faf2['starttm'] = _0x54f1ee), '' != _0x14edf7 && (_0x71faf2['other'] = _0x14edf7);
                        var _0x2470ef = _0x2dc530['ConfigUtil']['mURL'] + _0x2dc530['ConfigUtil']['mCmd']['ItemTotle'] + _0x765953['util']['getUrlPara' + 'ms'](_0x71faf2, '1.0.1');
                        this['mHttpCall']['send'](_0x2470ef, null, 'get', 'text');
                    }, _0x2fb7bb['prototype']['getWxAdOpe' + 'n'] = function (_0x2df6c4) {
                        var _0xa71c5f = '';
                        return void 0x0 == _0x3021fc['default']['app']['mWX']['mWxAdUrl'] || null == _0x3021fc['default']['app']['mWX']['mWxAdUrl'] || 0x0 == _0x3021fc['default']['app']['mWX']['mWxAdUrl']['length'] ? _0xa71c5f : (_0x3021fc['default']['app']['mWX']['mWxAdUrl']['forEach'](function (_0xb5e45d) {
                            _0xb5e45d['id'] != _0x2df6c4 || (_0xa71c5f = _0xb5e45d['open']);
                        }), _0xa71c5f);
                    }, _0x2fb7bb['prototype']['getWxAdUni' + 'tIdById'] = function (_0x59d88d) {
                        var _0x37541c = '';
                        return void 0x0 == _0x3021fc['default']['app']['mWX']['mWxAdUrl'] || null == _0x3021fc['default']['app']['mWX']['mWxAdUrl'] || 0x0 == _0x3021fc['default']['app']['mWX']['mWxAdUrl']['length'] ? _0x37541c : (_0x3021fc['default']['app']['mWX']['mWxAdUrl']['forEach'](function (_0xc59d9f) {
                            _0xc59d9f['id'] != _0x59d88d || '1' == _0xc59d9f['open'] && (_0x37541c = _0xc59d9f['unitid']);
                        }), _0x37541c);
                    }, _0x2fb7bb['prototype']['getVideoRe' + 'wardArr'] = function () {
                        var _0x27f445 = [];
                        return _0x3021fc['default']['app']['mWX']['mOnOff']['forEach'](function (_0x319ee2) {
                            'of_v_rewar' + 'd' != _0x319ee2['key'] || (_0x27f445 = String(_0x319ee2['param'])['split'](',')['map'](Number));
                        }), _0x27f445;
                    }, _0x2fb7bb['prototype']['getVideoRe' + 'wardByCoun' + 't'] = function (_0x1e8c32) {
                        var _0x3bd920 = _0x3021fc['default']['app']['mWX']['getVideoRe' + 'wardArr']();
                        return _0x1e8c32 < _0x3bd920['length'] ? _0x3bd920[_0x1e8c32] : _0x3bd920[_0x3bd920['length'] - 0x1];
                    }, _0x2fb7bb['prototype']['getOnOffPa' + 'ramByKey'] = function (_0x3c9db) {
                        for (var _0x157b7e = '', _0xf33bf1 = 0x0; _0xf33bf1 < _0x3021fc['default']['app']['mWX']['mOnOff']['length']; _0xf33bf1++)
                            if (_0x3021fc['default']['app']['mWX']['mOnOff'][_0xf33bf1]['key'] == _0x3c9db) {
                                _0x157b7e = _0x3021fc['default']['app']['mWX']['mOnOff'][_0xf33bf1]['param'];
                                break;
                            }
                        return _0x157b7e;
                    }, _0x2fb7bb['prototype']['getShareTi' + 'meByCount'] = function () {
                        var _0x5aea72 = _0x3021fc['default']['app']['mWX']['getOnOffPa' + 'ramByKey']('of_share_t' + 'ime');
                        console['log']('分享时间', _0x5aea72);
                        var _0x1ae28f = _0x5aea72['split'](',');
                        return _0x3021fc['default']['app']['mWX']['mShareCoun' + 't'] > 0x0 ? Number(_0x1ae28f[_0x1ae28f['length'] - 0x1]) / 0x3e8 : Number(_0x1ae28f[0x0]) / 0x3e8;
                    }, _0x2fb7bb['prototype']['getRandomG' + 'ames'] = function (_0xb0934b) {
                        if (_0x3021fc['default']['app']['mWX']['mGamesBox']['length'] < _0xb0934b)
                            return _0x3021fc['default']['app']['mWX']['mGamesBox'];
                        for (var _0xdbd051 = []['concat'](_0x3021fc['default']['app']['mWX']['mGamesBox']), _0x16d7e2 = [], _0x358850 = 0x0; _0x358850 < _0xb0934b; _0x358850++) {
                            var _0x1f3d74 = Math['floor'](Math['random']() * (0x1 - _0xdbd051['length']) + _0xdbd051['length']), _0xb75bde = _0xdbd051[_0x1f3d74 - 0x1];
                            _0x16d7e2['push'](_0xb75bde), _0xdbd051['splice'](_0x1f3d74 - 0x1, 0x1);
                        }
                        return _0x16d7e2;
                    }, _0x2fb7bb['prototype']['getStartAw' + 'ardObject'] = function () {
                        if (0x0 == _0x3021fc['default']['app']['mWX']['mStartAwar' + 'd']['length'])
                            return null;
                        var _0x4a588d = _0x3021fc['default']['app']['mWX']['mStartAwar' + 'd'][0x0]['reward'];
                        return '' == JSON['parse'](_0x4a588d)['itemid'] ? null : JSON['parse'](_0x4a588d);
                    }, _0x2fb7bb['prototype']['getItemNam' + 'eByItemId'] = function (_0x3555df) {
                        for (var _0x829961 = '', _0x4747f7 = 0x0; _0x4747f7 < _0x3021fc['default']['app']['mWX']['mPropList']['length']; _0x4747f7++)
                            if (_0x3021fc['default']['app']['mWX']['mPropList'][_0x4747f7]['id'] == _0x3555df) {
                                _0x829961 = _0x3021fc['default']['app']['mWX']['mPropList'][_0x4747f7]['name'];
                                break;
                            }
                        return _0x829961;
                    }, _0x2fb7bb['prototype']['getItemByI' + 'temId'] = function (_0x2bf6c4) {
                        for (var _0x470cef = '', _0x264c4e = 0x0; _0x264c4e < _0x3021fc['default']['app']['mWX']['mPropList']['length']; _0x264c4e++)
                            if (_0x3021fc['default']['app']['mWX']['mPropList'][_0x264c4e]['id'] == _0x2bf6c4) {
                                _0x470cef = _0x3021fc['default']['app']['mWX']['mPropList'][_0x264c4e]['name'];
                                break;
                            }
                        return _0x470cef;
                    }, _0x2fb7bb['prototype']['initPassAw' + 'ardData'] = function () {
                        _0x3021fc['default']['app']['mWX']['mPassAward' + 'ListData']['splice'](0x0, _0x3021fc['default']['app']['mWX']['mPassAward' + 'ListData']['length']), _0x3021fc['default']['app']['mWX']['mPropList']['forEach'](function (_0x4f005f) {
                            '0' != _0x4f005f['gamebox'] && '2' == _0x4f005f['type'] && _0x3021fc['default']['app']['mWX']['mPassAward' + 'ListData']['push'](_0x4f005f);
                        });
                    }, _0x2fb7bb['prototype']['getPassAwa' + 'rdDataByLe' + 'vel'] = function (_0x16d9fb) {
                        for (var _0x494e34 = null, _0x12dd14 = 0x0; _0x12dd14 < _0x3021fc['default']['app']['mWX']['mPassAward' + 'ListData']['length']; _0x12dd14++) {
                            if ('string' != typeof _0x3021fc['default']['app']['mWX']['mPassAward' + 'ListData'][_0x12dd14]['other'])
                                return;
                            var _0x736df = JSON['parse'](_0x3021fc['default']['app']['mWX']['mPassAward' + 'ListData'][_0x12dd14]['other']);
                            _0x16d9fb == Number(_0x736df['num']) && (_0x494e34 = _0x3021fc['default']['app']['mWX']['mPassAward' + 'ListData'][_0x12dd14]);
                        }
                        return _0x494e34;
                    }, _0x2fb7bb['prototype']['initUserMu' + 'sicSoundOn' + 'Off'] = function () {
                        0x0 != _0x3021fc['default']['app']['mWX']['mUserData']['length'] && _0x3021fc['default']['app']['mWX']['mUserData']['forEach'](function (_0x138849) {
                            _0x138849['key'];
                        });
                    }, _0x2fb7bb['prototype']['getStartRe' + 'wardArr'] = function () {
                        var _0x45ee03 = 0x1;
                        return _0x3021fc['default']['app']['mWX']['mOnOff']['forEach'](function (_0x4209ee) {
                            'of_start' != _0x4209ee['key'] || (_0x45ee03 = Number(_0x4209ee['value']));
                        }), _0x45ee03;
                    }, _0x2fb7bb['prototype']['getDoubleC' + 'oinArr'] = function () {
                        var _0x2f98f2 = 0x1;
                        return _0x3021fc['default']['app']['mWX']['mOnOff']['forEach'](function (_0x1c4ead) {
                            'of_coins_d' + 'ouble' != _0x1c4ead['key'] || (_0x2f98f2 = Number(_0x1c4ead['value']));
                        }), _0x2f98f2;
                    }, _0x2fb7bb['prototype']['GetBPUrl'] = function () {
                        var _0x47d108 = '';
                        return _0x3021fc['default']['app']['mWX']['mdtValues']['forEach'](function (_0x50fa3c) {
                            'dt_log_url' != _0x50fa3c['key'] || (_0x47d108 = _0x50fa3c['param']);
                        }), console['log']('获得埋点地址', _0x47d108), _0x47d108;
                    }, _0x2fb7bb['prototype']['indexBpTot' + 'le'] = function (_0x514f0f, _0x20c0cd) {
                    }, _0x2fb7bb;
                }();
            _0x4769ec['default'] = _0x5e264c;
        },
        {
            '../Main': 0xe,
            '../script/MyLikeView': 0x21,
            '../script/ShopView': 0x24,
            '../util/ConfigUtil': 0x31,
            '../util/LogUtil': 0x32,
            '../util/ShareConfig': 0x33,
            '../util/TimeUtil': 0x35,
            './Base64': 0x1,
            './MoreGame': 0x6,
            './OddEvenTestModel': 0x7,
            './gameBox': 0x8,
            './util': 0x9,
            './wxCallBack': 0xa,
            './wxCore': 0xb
        }
    ],
    0xd: [
        function (_0x8d3de3, _0x5aad5c, _0x7b73e7) {
            'use strict';
            Object['defineProp' + 'erty'](_0x7b73e7, '__esModule', { 'value': !0x0 });
            var _0x4e363a = _0x8d3de3('./script/S' + 'tartView'), _0x3c97a7 = _0x8d3de3('./script/G' + 'ameUI'), _0x591aa4 = function () {
                    function _0x39a39a() {
                    }
                    return _0x39a39a['init'] = function () {
                        var _0x37f3bd = Laya['ClassUtils']['regClass'];
                        _0x37f3bd('script/Sta' + 'rtView.ts', _0x4e363a['default']), _0x37f3bd('script/Gam' + 'eUI.ts', _0x3c97a7['default']);
                    }, _0x39a39a['width'] = 0x2ee, _0x39a39a['height'] = 0x536, _0x39a39a['scaleMode'] = 'fixedwidth', _0x39a39a['screenMode'] = 'none', _0x39a39a['alignV'] = 'top', _0x39a39a['alignH'] = 'left', _0x39a39a['startScene'] = 'page/Start' + 'View.scene', _0x39a39a['sceneRoot'] = '', _0x39a39a['debug'] = !0x1, _0x39a39a['stat'] = !0x1, _0x39a39a['physicsDeb' + 'ug'] = !0x1, _0x39a39a['exportScen' + 'eToJson'] = !0x0, _0x39a39a;
                }();
            _0x7b73e7['default'] = _0x591aa4, _0x591aa4['init']();
        },
        {
            './script/GameUI': 0x1e,
            './script/StartView': 0x27
        }
    ],
    0xe: [
        function (_0x4b1956, _0x349e32, _0x28a799) {
            'use strict';
            Object['defineProp' + 'erty'](_0x28a799, '__esModule', { 'value': !0x0 });
            var _0x51c81a = _0x4b1956('./GameConf' + 'ig'), _0x519c3f = _0x4b1956('./script/d' + 'ata/foodLe' + 'ngth'), _0x3e5184 = _0x4b1956('./core/wxC' + 'ore'), _0x260eef = _0x4b1956('./core/wxM' + 'inPro'), _0x36b6b4 = _0x4b1956('./script/L' + 'oadingUI'), _0x284868 = _0x4b1956('./util/Sha' + 'reUtil'), _0x22ec78 = function () {
                    function _0x4e576f() {
                        var _0x5cbd02 = this;
                        this['shopView'] = null, this['resultView'] = null, this['LoadingVie' + 'w'] = null, this['getKnifeDi' + 'alog'] = null, this['clickAppId'] = '', this['clickGameI' + 'd'] = 0x0, this['clickFromP' + 'age'] = '', this['adUtil'] = null, this['wRankData'] = [], this['is_gamebox'] = !0x0, this['moregame'] = 0x0, this['is_share'] = !0x0, this['Level_num'] = 0x1, this['clickLikeA' + 'rr'] = [], this['baokuanlis' + 't'] = [], this['fakerxcxli' + 'st'] = [], this['is_success'] = !0x1, this['playAni'] = !0x1, this['isOk'] = !0x1, this['loadingSho' + 'w'] = !0x0, this['boxcangetn' + 'um'] = 0x0, this['isStartRew' + 'ard'] = !0x0, this['boxSkinId'] = 0x0, this['boxSkinKee' + 'pId'] = 0x0, this['boxChangeI' + 'nterval'] = 0x0, this['scene_num'] = 0x0, _0x4e576f['app'] = this, Laya3D['init'](_0x51c81a['default']['width'], _0x51c81a['default']['height']), Laya['stage']['scaleMode'] = Laya['Stage']['SCALE_SHOW' + 'ALL'], Laya['stage']['alignH'] = Laya['Stage']['ALIGN_CENT' + 'ER'], (Laya['stage']['screenMode'] = _0x51c81a['default']['screenMode'], Laya['URL']['exportScen' + 'eToJson'] = _0x51c81a['default']['exportScen' + 'eToJson'], Laya['MouseManag' + 'er']['multiTouch' + 'Enabled'] = !0x1, (_0x51c81a['default']['debug'] || 'true' == Laya['Utils']['getQuerySt' + 'ring']('debug')) && Laya['enableDebu' + 'gPanel'](), _0x51c81a['default']['physicsDeb' + 'ug'] && Laya['PhysicsDeb' + 'ugDraw'] && Laya['PhysicsDeb' + 'ugDraw']['enable'](), _0x51c81a['default']['stat'] && Laya['Stat']['show'](), Laya['alertGloba' + 'lError'] = !0x0, _0x4e576f['app']['mWX'] = new _0x260eef['default']());
                        var _0x232f69 = [
                            { 'url': 'res/atlas/' + 'game.atlas' },
                            { 'url': 'start/logo' + '.png' },
                            { 'url': 'bg/7.jpg' },
                            { 'url': 'newknife/0' + '.png' },
                            { 'url': 'newknife/1' + '.png' },
                            { 'url': 'newknife/2' + '.png' },
                            { 'url': 'newknife/3' + '.png' },
                            { 'url': 'newknife/4' + '.png' },
                            { 'url': 'newknife/5' + '.png' },
                            { 'url': 'newknife/6' + '.png' },
                            { 'url': 'newknife/7' + '.png' },
                            { 'url': 'newknife/8' + '.png' },
                            { 'url': 'button/djs' + '1.png' },
                            { 'url': 'button/djs' + '2.png' },
                            { 'url': 'button/djs' + '3.png' },
                            { 'url': 'button/djs' + '4.png' },
                            { 'url': 'button/djs' + '5.png' },
                            { 'url': 'button/res' + 'ult_image_' + 'bg_3.png' }
                        ];
                        Laya['loader']['load'](_0x232f69, Laya['Handler']['create'](this, function () {
                            null == _0x5cbd02['LoadingVie' + 'w'] && (_0x5cbd02['loadingSho' + 'w'] = !0x0, _0x5cbd02['LoadingVie' + 'w'] = new _0x36b6b4['default'](), Laya['stage']['addChild'](_0x5cbd02['LoadingVie' + 'w']));
                        })), Laya['ResourceVe' + 'rsion']['enable']('version.js' + 'on', Laya['Handler']['create'](this, this['onVersionL' + 'oaded']), Laya['ResourceVe' + 'rsion']['FILENAME_V' + 'ERSION']);
                    }
                    return _0x4e576f['prototype']['onVersionL' + 'oaded'] = function () {
                        FKGames['init']({
                            'debug': !![],
                            'appName': '',
                            'gamemonetizeId': 'wqcr0buabxc65j1bmben6i71q6f59ju5',
                            'gamedistributionId': '',
                            'complete': () => {
                                platform['getInstanc' + 'e']()['musicOpen'](), platform['getInstanc' + 'e'](), Laya['AtlasInfoM' + 'anager']['enable']('fileconfig' + '.json', Laya['Handler']['create'](this, this['onConfigLo' + 'aded'])), console['log']('----------' + '初始化成功!!!--' + '--------');
                            }
                        });
                    }, _0x4e576f['prototype']['onConfigLo' + 'aded'] = function () {
                        var _0x4a0a0d = this, _0x2532ce = _0x4e576f['app']['URL'], _0x3edbda = [
                                { 'url': 'ani/bx1.pn' + 'g' },
                                { 'url': 'ani/bx2.pn' + 'g' },
                                { 'url': 'ani/bx3.pn' + 'g' },
                                { 'url': 'ani/bx4.pn' + 'g' },
                                { 'url': 'ani/bx5.pn' + 'g' },
                                { 'url': 'ani/bx6.pn' + 'g' },
                                { 'url': 'ani/bx7.pn' + 'g' },
                                { 'url': 'res/level.' + 'json' },
                                { 'url': 'res/shop.j' + 'son' },
                                { 'url': 'res/atlas/' + 'food.atlas' },
                                { 'url': 'res/atlas/' + 'knife.atla' + 's' },
                                { 'url': 'res/atlas/' + 'start.atla' + 's' },
                                { 'url': 'res/atlas/' + 'shop.atlas' },
                                { 'url': 'res/atlas/' + 'my_like.at' + 'las' },
                                { 'url': 'start/img_' + 'bg.png' },
                                { 'url': 'start/logo' + '.png' },
                                { 'url': 'sound/btn_' + 'click.mp3' },
                                { 'url': 'sound/spee' + 'd1.mp3' },
                                { 'url': 'sound/spee' + 'd2.mp3' },
                                { 'url': 'sound/spee' + 'd3.mp3' },
                                { 'url': 'sound/spee' + 'd4.mp3' },
                                { 'url': 'sound/spee' + 'd5.mp3' },
                                { 'url': 'sound/cut.' + 'mp3' }
                            ];
                        Laya['loader']['load'](_0x3edbda, Laya['Handler']['create'](_0x4a0a0d, function (_0x3d2647) {
                            _0x4a0a0d['ChangeScen' + 'e']();
                        }));
                    }, _0x4e576f['prototype']['ChangeScen' + 'e'] = function () {
                        this['scene_num']++, _0x51c81a['default']['startScene'] && Laya['Scene']['open'](_0x51c81a['default']['startScene']);
                    }, _0x4e576f['prototype']['onBtnMouse' + 'Down'] = function (_0x5ab2cc) {
                        _0x5ab2cc['scale'](1.02, 1.02);
                    }, _0x4e576f['prototype']['onBtnMouse' + 'Out'] = function (_0x14995e) {
                        _0x14995e['scale'](0x1, 0x1);
                    }, _0x4e576f['prototype']['subname'] = function (_0x1eef96, _0x317406) {
                        return _0x1eef96['length'] > _0x317406 && (_0x1eef96 = _0x1eef96['substr'](0x0, _0x317406) + '...'), _0x1eef96;
                    }, _0x4e576f['app'] = null, _0x4e576f;
                }();
            _0x28a799['default'] = _0x22ec78, new _0x22ec78(), new _0x519c3f['default']();
        },
        {
            './GameConfig': 0xd,
            './core/wxCore': 0x1b,
            './core/wxMinPro': 0x1c,
            './script/LoadingUI': 0x20,
            './script/data/foodLength': 0x28,
            './util/ShareUtil': 0x34
        }
    ],
    0xf: [
        function (_0x561904, _0x446f6d, _0x344176) {
            'use strict';
            Object['defineProp' + 'erty'](_0x344176, '__esModule', { 'value': !0x0 });
            var _0x189f90 = _0x561904('./../ui/la' + 'yaMaxUI'), _0x34af49 = _0x561904('../script/' + 'MyLikeView' + '2'), _0x2747f9 = _0x561904('../Main'), _0x2ed59e = _0x561904('./MoreGame'), _0x144823 = _0x561904('./JumpObjC' + 'onverter'), _0x2477a9 = _0x561904('./gameBox'), _0x5698fd = _0x561904('./JumpAniC' + 'tl'), _0x38ce37 = _0x561904('./wxCore'), _0x4c3af4 = function (_0x4fd3c2) {
                    function _0x22976a() {
                        var _0xf792a4 = _0x4fd3c2['call'](this) || this;
                        return _0xf792a4['barValue'] = 0x582, _0xf792a4['timeIndex'] = 0x0, _0xf792a4['moveIndex'] = 0x1, _0xf792a4['isPress'] = !0x1, _0xf792a4['isMove'] = !0x1, _0xf792a4['loopNight'] = [
                            0x0,
                            0x0,
                            0x0,
                            0x0,
                            0x0,
                            0x0,
                            0x0,
                            0x0,
                            0x0
                        ], _0xf792a4['init'](), _0xf792a4;
                    }
                    return __extends(_0x22976a, _0x4fd3c2), _0x22976a['prototype']['onShow'] = function (_0x366568, _0x4f5130) {
                        if (_0x366568)
                            _0x2747f9['default']['app']['baokuanlis' + 't'] = [], this['visible'] = !0x0, this['isMove'] = !0x0, this['callback'] = _0x4f5130, this['loopNight'] = [
                                0x0,
                                0x0,
                                0x0,
                                0x0,
                                0x0,
                                0x0,
                                0x0,
                                0x0,
                                0x0
                            ], (this['gameList']['scrollBar']['setScroll'](0x0, this['barValue'], 0x0), this['addEvent']());
                        else
                            this['visible'] = !0x1, this['isMove'] = !0x1, _0x2747f9['default']['app']['mWX']['likeLoop'] = !0x1, this['callback'] && this['callback'](), this['removeEven' + 't'](), this['removeSelf'](), this['destroy'](!0x0);
                    }, _0x22976a['prototype']['addEvent'] = function () {
                        var _0x15a249 = this;
                        this['back']['on'](Laya['Event']['CLICK'], this, this['onBack']), this['btnStart']['on'](Laya['Event']['CLICK'], this, this['onBack']), Laya['timer']['once'](0xc8, this, function () {
                            _0x15a249['on'](Laya['Event']['MOUSE_DOWN'], _0x15a249, _0x15a249['mouseHandl' + 'er'], [0x0]), _0x15a249['on'](Laya['Event']['MOUSE_UP'], _0x15a249, _0x15a249['mouseHandl' + 'er'], [0x1]);
                        });
                    }, _0x22976a['prototype']['removeEven' + 't'] = function () {
                        this['back']['off'](Laya['Event']['CLICK'], this, this['onBack']), this['btnStart']['off'](Laya['Event']['CLICK'], this, this['onBack']);
                    }, _0x22976a['prototype']['init'] = function () {
                        this['gameList']['array'] = platform['getInstanc' + 'e']()['getForgame' + 's'](), console['log']('this.gameL' + 'ist.array\x20', this['gameList']['array']), (this['myLikeView'] = new _0x34af49['default'](), this['gameList']['vScrollBar' + 'Skin'] = '', this['gameList']['renderHand' + 'ler'] = new Laya['Handler'](this, this['updataGame' + 'List']), Laya['timer']['frameLoop'](0x1, this, this['move']));
                    }, _0x22976a['prototype']['onBack'] = function () {
                        this['onShow'](!0x1, null);
                    }, _0x22976a['prototype']['loop'] = function () {
                        this['isPress'] || this['isMove'] || (this['timeIndex'] += 0x3e8, this['timeIndex'] > 0x7d0 && (this['isMove'] = !0x0, this['timeIndex'] = 0x0, this['onMove']()));
                    }, _0x22976a['prototype']['mouseHandl' + 'er'] = function (_0x54f9d1) {
                        0x0 == _0x54f9d1 ? this['isPress'] = !0x0 : 0x1 == _0x54f9d1 && (this['isPress'] = !0x1, this['isMove'] = !0x0, this['gameList']['scrollBar']['value'] = Math['floor'](this['gameList']['scrollBar']['value']));
                    }, _0x22976a['prototype']['onMove'] = function () {
                        console['log']('moveIndex1' + ':', this['moveIndex']), this['moveIndex'] >= 0x0 && this['moveIndex'] <= 0x2 ? this['moveIndex'] = this['moveIndex'] + 0x1 : 0x3 == this['moveIndex'] ? this['moveIndex'] = -0x2 : -0x2 == this['moveIndex'] ? this['moveIndex'] = -0x1 : -0x1 == this['moveIndex'] && (this['moveIndex'] = 0x0), console['log']('moveIndex2' + ':', this['moveIndex']);
                    }, _0x22976a['prototype']['move'] = function () {
                        this['isMove'] && (this['isPress'] && (this['isMove'] = !0x1), this['gameList']['scrollBar']['value'] += 0x2 * this['moveIndex'], this['gameList']['scrollBar']['value'] >= this['barValue'] && (this['gameList']['scrollBar']['value'] = this['barValue'], this['moveIndex'] = -0x1), 0x0 == this['gameList']['scrollBar']['value'] && (this['gameList']['scrollBar']['value'] = 0x0, this['moveIndex'] = 0x1));
                    }, _0x22976a['prototype']['updataGame' + 'List'] = function (_0x1f07be, _0x444e15) {
                        var _0xca8eea = _0x1f07be['getChildBy' + 'Name']('icon');
                        if (0x0 == this['loopNight'][_0x444e15]) {
                            this['loopNight'][_0x444e15] = 0x1;
                            var _0x519b7b = _0x144823['JumpObjCon' + 'verter']['instance']['convert'](_0x1f07be['dataSource']);
                            if (!_0x519b7b)
                                return;
                            var _0xbd726 = '';
                            _0xbd726 = 0x1 == _0x2747f9['default']['app']['mWX']['oddEvenTes' + 'tModel']['isAniTest'] ? _0x1f07be['dataSource']['big_btn_ur' + 'l'] : _0x1f07be['dataSource']['static_big' + '_btn_icon'], console['log']('ooo2:', _0xbd726), _0xca8eea['skin'] = '', Laya['timer']['once'](0xc8, this, function () {
                                _0x2747f9['default']['app']['mWX']['likeLoop'] = !0x0;
                                var _0x4bf1b0 = _0x1f07be['dataSource']['anim_confi' + 'g'], _0x4793a3 = 0x0;
                                if (0x2 == _0x2747f9['default']['app']['mWX']['moreFenFaN' + 'um'])
                                    (_0x3f4f30 = JSON['parse'](_0x4bf1b0)['group_stat' + 'ic_big']['split'](','))['length'] > 0x1 && (_0x4793a3 = Number(_0x3f4f30[0x0]) + 0x1, _0xbd726 = _0xbd726['replace']('_1.', '_' + _0x4793a3 + '.')), console['log']('likeloop3', _0xbd726, _0x519b7b['big_frame']);
                                else {
                                    if (0x3 == _0x2747f9['default']['app']['mWX']['moreFenFaN' + 'um']) {
                                        var _0x3f4f30 = JSON['parse'](_0x4bf1b0)['group_stat' + 'ic_big']['split'](',');
                                        _0x3f4f30['length'] > 0x2 && (_0x4793a3 = Number(_0x3f4f30[0x0]) + Number(_0x3f4f30[0x1]) + 0x1, _0xbd726 = _0xbd726['replace']('_1.', '_' + _0x4793a3 + '.')), console['log']('likeloop33' + '3333', _0xbd726, _0x519b7b['big_frame']);
                                    }
                                }
                                _0x5698fd['JumpAniCtl']['instance']['ani'](_0xca8eea, _0xbd726, _0x519b7b['big_frame'], _0x519b7b['big_interv' + 'al'], _0x519b7b['millisecon' + 'd_big'], _0x4793a3);
                            });
                        }
                        _0x1f07be['offAll'](Laya['Event']['CLICK']), _0x1f07be['on'](Laya['Event']['CLICK'], this, this['onShowGame'], [_0x1f07be['dataSource']['gameid']]);
                    }, _0x22976a['prototype']['onShowGame'] = function (_0x53d981) {
                        if (_0x2477a9['gameBox']['isClickJum' + 'p']) {
                            var _0x25433b = _0x2747f9['default']['app']['mWX']['getMoreUrl'](_0x53d981);
                            if (null == _0x25433b)
                                return;
                            this['baokuan_ga' + 'meid'] = _0x53d981, this['myLikeView']['onclick'](_0x25433b['appid'], _0x25433b['gameid'], 'baokuan');
                        }
                    }, _0x22976a;
                }(_0x189f90['ui']['test']['BaoKuanTui' + 'JianUI']);
            _0x344176['default'] = _0x4c3af4;
        },
        {
            '../Main': 0xe,
            '../script/MyLikeView2': 0x22,
            './../ui/layaMaxUI': 0x2f,
            './JumpAniCtl': 0x13,
            './JumpObjConverter': 0x14,
            './MoreGame': 0x16,
            './gameBox': 0x18,
            './wxCore': 0x1b
        }
    ],
    0x10: [
        function (_0x334fe3, _0x17f3df, _0xe16de3) {
            'use strict';
            Object['defineProp' + 'erty'](_0xe16de3, '__esModule', { 'value': !0x0 });
            var _0x5f0b69 = function () {
                function _0x5e1aef() {
                    _0x5e1aef['_b64tab'] = function () {
                        for (var _0x1d8c61 = {}, _0x505ea6 = 0x0, _0x446a2c = _0x5e1aef['_b64chars']['length']; _0x505ea6 < _0x446a2c; _0x505ea6++)
                            _0x1d8c61[_0x5e1aef['_b64chars']['charAt'](_0x505ea6)] = _0x505ea6;
                        return _0x1d8c61;
                    };
                }
                return _0x5e1aef['_cb_btou'] = function (_0x3173d6) {
                    switch (_0x3173d6['length']) {
                    case 0x4:
                        var _0x354a57 = ((0x7 & _0x3173d6['charCodeAt'](0x0)) << 0x12 | (0x3f & _0x3173d6['charCodeAt'](0x1)) << 0xc | (0x3f & _0x3173d6['charCodeAt'](0x2)) << 0x6 | 0x3f & _0x3173d6['charCodeAt'](0x3)) - 0x10000;
                        return String['fromCharCo' + 'de'](0xd800 + (_0x354a57 >>> 0xa)) + String['fromCharCo' + 'de'](0xdc00 + (0x3ff & _0x354a57));
                    case 0x3:
                        return String['fromCharCo' + 'de']((0xf & _0x3173d6['charCodeAt'](0x0)) << 0xc | (0x3f & _0x3173d6['charCodeAt'](0x1)) << 0x6 | 0x3f & _0x3173d6['charCodeAt'](0x2));
                    default:
                        return String['fromCharCo' + 'de']((0x1f & _0x3173d6['charCodeAt'](0x0)) << 0x6 | 0x3f & _0x3173d6['charCodeAt'](0x1));
                    }
                }, _0x5e1aef['_cb_decode'] = function (_0x4751cf) {
                    var _0x2afe07 = _0x4751cf['length'], _0x4551e9 = _0x2afe07 % 0x4, _0x567574 = (_0x2afe07 > 0x0 ? this['_b64tab'][_0x4751cf['charAt'](0x0)] << 0x12 : 0x0) | (_0x2afe07 > 0x1 ? this['_b64tab'][_0x4751cf['charAt'](0x1)] << 0xc : 0x0) | (_0x2afe07 > 0x2 ? this['_b64tab'][_0x4751cf['charAt'](0x2)] << 0x6 : 0x0) | (_0x2afe07 > 0x3 ? this['_b64tab'][_0x4751cf['charAt'](0x3)] : 0x0), _0x59519f = [
                            String['fromCharCo' + 'de'](_0x567574 >>> 0x10),
                            String['fromCharCo' + 'de'](_0x567574 >>> 0x8 & 0xff),
                            String['fromCharCo' + 'de'](0xff & _0x567574)
                        ];
                    return _0x59519f['length'] -= [
                        0x0,
                        0x0,
                        0x2,
                        0x1
                    ][_0x4551e9], _0x59519f['join']('');
                }, _0x5e1aef['_cb_encode'] = function (_0xb3920e) {
                    var _0x5d1f23 = [
                            0x0,
                            0x2,
                            0x1
                        ][_0xb3920e['length'] % 0x3], _0x2b5c04 = _0xb3920e['charCodeAt'](0x0) << 0x10 | (_0xb3920e['length'] > 0x1 ? _0xb3920e['charCodeAt'](0x1) : 0x0) << 0x8 | (_0xb3920e['length'] > 0x2 ? _0xb3920e['charCodeAt'](0x2) : 0x0);
                    return [
                        _0x5e1aef['_b64chars']['charAt'](_0x2b5c04 >>> 0x12),
                        _0x5e1aef['_b64chars']['charAt'](_0x2b5c04 >>> 0xc & 0x3f),
                        _0x5d1f23 >= 0x2 ? '=' : _0x5e1aef['_b64chars']['charAt'](_0x2b5c04 >>> 0x6 & 0x3f),
                        _0x5d1f23 >= 0x1 ? '=' : _0x5e1aef['_b64chars']['charAt'](0x3f & _0x2b5c04)
                    ]['join']('');
                }, _0x5e1aef['_cb_utob'] = function (_0x148e86) {
                    if (_0x148e86['length'] < 0x2)
                        return (_0x459b53 = _0x148e86['charCodeAt'](0x0)) < 0x80 ? _0x148e86 : _0x459b53 < 0x800 ? String['fromCharCo' + 'de'](0xc0 | _0x459b53 >>> 0x6) + String['fromCharCo' + 'de'](0x80 | 0x3f & _0x459b53) : String['fromCharCo' + 'de'](0xe0 | _0x459b53 >>> 0xc & 0xf) + String['fromCharCo' + 'de'](0x80 | _0x459b53 >>> 0x6 & 0x3f) + String['fromCharCo' + 'de'](0x80 | 0x3f & _0x459b53);
                    var _0x459b53 = 0x10000 + 0x400 * (_0x148e86['charCodeAt'](0x0) - 0xd800) + (_0x148e86['charCodeAt'](0x1) - 0xdc00);
                    return String['fromCharCo' + 'de'](0xf0 | _0x459b53 >>> 0x12 & 0x7) + String['fromCharCo' + 'de'](0x80 | _0x459b53 >>> 0xc & 0x3f) + String['fromCharCo' + 'de'](0x80 | _0x459b53 >>> 0x6 & 0x3f) + String['fromCharCo' + 'de'](0x80 | 0x3f & _0x459b53);
                }, _0x5e1aef['_re_btou'] = function () {
                    return new RegExp([
                        '[À-ß][\u0080-¿]',
                        '[à-ï][\u0080-¿]' + '{2}',
                        '[ð-÷][\u0080-¿]' + '{3}'
                    ]['join']('|'), 'g');
                }, _0x5e1aef['_atob'] = function (_0x5affc2) {
                    return _0x5affc2['replace'](/[\s\S]{1,4}/g, this['_cb_decode']);
                }, _0x5e1aef['_btoa'] = function (_0x4a251f) {
                    return _0x4a251f['replace'](/[\s\S]{1,3}/g, this['_cb_encode']);
                }, _0x5e1aef['_btou'] = function (_0xa6172) {
                    return _0xa6172['replace'](this['_re_btou'], this['_cb_btou']);
                }, _0x5e1aef['_decode'] = function (_0x3a027e) {
                    var _0xdebba0 = this, _0x4af811 = String(_0x3a027e)['replace'](/[-_]/g, function (_0x54f842) {
                            return '-' == _0x54f842 ? '+' : '/';
                        });
                    return console['log']('1\x20=\x20', _0x4af811), _0x4af811 = _0x4af811['replace'](/[^A-Za-z0-9\+\/]/g, ''), console['log']('2\x20=\x20', _0x4af811), function (_0x2e9fa4) {
                        return _0xdebba0['_btou'](atob(_0x2e9fa4));
                    }(_0x4af811);
                }, _0x5e1aef['_encode'] = function (_0x276083, _0x515686) {
                    var _0x1ff02f = this;
                    void 0x0 === _0x515686 && (_0x515686 = !0x1);
                    var _0x3ee33b = function (_0x361ffe) {
                        return _0x1ff02f['_btoa'](_0x1ff02f['_utob'](_0x361ffe));
                    };
                    return _0x515686 ? _0x3ee33b(String(_0x276083))['replace'](/[+\/]/g, function (_0x104ac0) {
                        return '+' == _0x104ac0 ? '-' : '_';
                    })['replace'](/=/g, '') : _0x3ee33b(String(_0x276083));
                }, _0x5e1aef['EncodeURI'] = function (_0x1c2f8c) {
                    return this['_encode'](_0x1c2f8c, !0x0);
                }, _0x5e1aef['FromBase64'] = function (_0x2f30dd) {
                    return this['_decode'](_0x2f30dd);
                }, _0x5e1aef['ToBase64'] = function (_0x4638fc) {
                    return this['_encode'](_0x4638fc);
                }, _0x5e1aef['stringToBy' + 'tes'] = function (_0x233013) {
                    var _0xfef0a8, _0x5c51ce, _0x14edaa = new Array();
                    _0xfef0a8 = _0x233013['length'];
                    for (var _0x3e5506 = 0x0; _0x3e5506 < _0xfef0a8; _0x3e5506++)
                        (_0x5c51ce = _0x233013['charCodeAt'](_0x3e5506)) >= 0x10000 && _0x5c51ce <= 0x10ffff ? (_0x14edaa['push'](_0x5c51ce >> 0x12 & 0x7 | 0xf0), _0x14edaa['push'](_0x5c51ce >> 0xc & 0x3f | 0x80), _0x14edaa['push'](_0x5c51ce >> 0x6 & 0x3f | 0x80), _0x14edaa['push'](0x3f & _0x5c51ce | 0x80)) : _0x5c51ce >= 0x800 && _0x5c51ce <= 0xffff ? (_0x14edaa['push'](_0x5c51ce >> 0xc & 0xf | 0xe0), _0x14edaa['push'](_0x5c51ce >> 0x6 & 0x3f | 0x80), _0x14edaa['push'](0x3f & _0x5c51ce | 0x80)) : _0x5c51ce >= 0x80 && _0x5c51ce <= 0x7ff ? (_0x14edaa['push'](_0x5c51ce >> 0x6 & 0x1f | 0xc0), _0x14edaa['push'](0x3f & _0x5c51ce | 0x80)) : _0x14edaa['push'](0xff & _0x5c51ce);
                    return _0x14edaa;
                }, _0x5e1aef['byteToStri' + 'ng'] = function (_0x296be8) {
                    if ('string' == typeof _0x296be8)
                        return _0x296be8;
                    for (var _0xf0cfc5 = '', _0x1451e9 = _0x296be8, _0x5bbb59 = 0x0; _0x5bbb59 < _0x1451e9['length']; _0x5bbb59++) {
                        var _0x50a28e = _0x1451e9[_0x5bbb59]['toString'](0x2), _0x2c96d9 = _0x50a28e['match'](/^1+?(?=0)/);
                        if (_0x2c96d9 && 0x8 == _0x50a28e['length']) {
                            for (var _0x17f1f1 = _0x2c96d9[0x0]['length'], _0x41a9d0 = _0x1451e9[_0x5bbb59]['toString'](0x2)['slice'](0x7 - _0x17f1f1), _0x398072 = 0x1; _0x398072 < _0x17f1f1; _0x398072++)
                                _0x41a9d0 += _0x1451e9[_0x398072 + _0x5bbb59]['toString'](0x2)['slice'](0x2);
                            _0xf0cfc5 += String['fromCharCo' + 'de'](parseInt(_0x41a9d0, 0x2)), _0x5bbb59 += _0x17f1f1 - 0x1;
                        } else
                            _0xf0cfc5 += String['fromCharCo' + 'de'](_0x1451e9[_0x5bbb59]);
                    }
                    return _0xf0cfc5;
                }, _0x5e1aef['_utob'] = function (_0x1565e9) {
                    return _0x1565e9['replace'](this['_re_utob'], this['_cb_utob']);
                }, _0x5e1aef['_b64chars'] = 'ABCDEFGHIJ' + 'KLMNOPQRST' + 'UVWXYZabcd' + 'efghijklmn' + 'opqrstuvwx' + 'yz01234567' + '89+/', _0x5e1aef['_fromCharC' + 'ode'] = String['fromCharCo' + 'de'], _0x5e1aef['_re_utob'] = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g, _0x5e1aef;
            }();
            _0xe16de3['TsBase64'] = _0x5f0b69;
            var _0x12ad39 = _0x5f0b69['ToBase64']('Typescript'), _0xe6b635 = _0x5f0b69['EncodeURI']('Typescript' + '\x22');
            console['log'](_0x12ad39), console['log'](_0xe6b635);
        },
        {}
    ],
    0x11: [
        function (_0x455517, _0x9bdc07, _0x2a3842) {
            'use strict';
            Object['defineProp' + 'erty'](_0x2a3842, '__esModule', { 'value': !0x0 });
            var _0x11c835 = _0x455517('./../ui/la' + 'yaMaxUI'), _0x57cc9a = _0x455517('./MoreGame'), _0x24dd81 = _0x455517('../Main'), _0x5a4f28 = _0x455517('./gameBox'), _0x4cfba9 = _0x455517('../script/' + 'MyLikeView' + '2'), _0x4d9a5a = function (_0x338cb7) {
                    function _0x3083b9() {
                        var _0x524439 = _0x338cb7['call'](this) || this;
                        return _0x524439['ListData'] = [], _0x524439['showList'] = [], 0x2 * Laya['stage']['width'] < Laya['stage']['height'] && (_0x524439['topBox']['height'] = 0xa0, _0x524439['closeBtn']['y'] += 0x48, _0x524439['tips']['y'] += 0x48, _0x524439['gameBViewB' + 'ox']['y'] += 0x48), _0x524439['zOrder'] = 0x63, _0x524439['myLikeView'] = new _0x4cfba9['default'](), _0x524439['height'] = Laya['stage']['height'], _0x524439['gameList']['renderHand' + 'ler'] = new Laya['Handler'](_0x524439, _0x524439['updateGame' + 'List']), _0x524439['gameBViewB' + 'ox']['vScrollBar' + 'Skin'] = '', _0x524439['gameBViewB' + 'ox']['height'] = Laya['stage']['height'] - _0x524439['gameBViewB' + 'ox']['y'], _0x524439['gameBViewB' + 'ox']['vScrollBar']['elasticBac' + 'kTime'] = 0xc8, _0x524439['gameBViewB' + 'ox']['vScrollBar']['elasticDis' + 'tance'] = 0x96, _0x524439;
                    }
                    return __extends(_0x3083b9, _0x338cb7), _0x3083b9['prototype']['onShow'] = function (_0x14fec0, _0x702360) {
                        if (_0x14fec0) {
                            this['visible'] = !0x0;
                            var _0x41ead4 = this['getListDat' + 'a']();
                            this['gameList']['array'] = _0x41ead4, this['addEvent']();
                        } else
                            this['visible'] = !0x1, _0x702360 && _0x702360();
                    }, _0x3083b9['prototype']['addEvent'] = function () {
                        this['closeBtn']['on'](Laya['Event']['CLICK'], this, this['onShow'], [
                            !0x1,
                            null
                        ]);
                    }, _0x3083b9['prototype']['removeEven' + 't'] = function () {
                        this['closeBtn']['off'](Laya['Event']['CLICK'], this, this['onShow']);
                    }, _0x3083b9['prototype']['getListDat' + 'a'] = function () {
                        var _0x518fb5 = _0x57cc9a['MoreGame']['GetIndexRa' + 'ndomList'](_0x24dd81['default']['app']['mWX']['mGamesBox'], 0x9);
                        console['log']('--\x20列表页\x20初始九' + '个白名单\x20--', _0x518fb5);
                        var _0x1c1d56 = [], _0x472b17 = [], _0xd8d13e = [], _0x46ad33 = _0x24dd81['default']['app']['mWX']['getUserDat' + 'aByKey']('clickLikeA' + 'rr');
                        if (_0x46ad33 && '0' != _0x46ad33) {
                            _0xd8d13e = JSON['parse'](_0x46ad33), console['log']('--\x20爆款页\x20cli' + 'ckLikeArr-' + '--', _0xd8d13e);
                            for (_0x1c7914 = 0x0; _0x1c7914 < _0x518fb5['length']; _0x1c7914++) {
                                var _0xdfd241 = _0x518fb5[_0x1c7914];
                                -0x1 == _0xd8d13e['indexOf'](_0xdfd241['gameid']) ? _0x472b17['push'](_0xdfd241) : _0x1c1d56['push'](_0xdfd241);
                            }
                            console['log']('--\x20没有点击过的放' + '前面1111\x20--', _0x518fb5, _0x472b17, _0x1c1d56);
                            for (_0x1c7914 = 0x0; _0x1c7914 < _0x472b17['length']; _0x1c7914++) {
                                _0xd2dbb0 = _0x472b17[_0x1c7914], _0x518fb5[_0x1c7914] = _0xd2dbb0;
                            }
                            for (_0x1c7914 = 0x0; _0x1c7914 < _0x1c1d56['length']; _0x1c7914++) {
                                var _0xd2dbb0 = _0x1c1d56[_0x1c7914];
                                _0x518fb5[_0x518fb5['length'] - 0x1 - _0x1c7914] = _0xd2dbb0;
                            }
                            console['log']('--\x20没有点击过的放' + '前面2222\x20--', _0x518fb5, _0x472b17, _0x1c1d56);
                            for (_0x1c7914 = 0x0; _0x1c7914 < _0x518fb5['length']; _0x1c7914++)
                                _0x24dd81['default']['app']['fakerxcxli' + 'st']['push'](_0x518fb5[_0x1c7914]['appid']);
                            return _0x24dd81['default']['app']['mWX']['indexBpTot' + 'le']('recom_show', {
                                'game_show_list': _0x24dd81['default']['app']['fakerxcxli' + 'st'],
                                'position_type': 'app_list'
                            }), _0x518fb5;
                        }
                        console['log']('--\x20不随机\x20--', _0x518fb5);
                        for (var _0x1c7914 = 0x0; _0x1c7914 < _0x518fb5['length']; _0x1c7914++)
                            _0x24dd81['default']['app']['fakerxcxli' + 'st']['push'](_0x518fb5[_0x1c7914]['appid']);
                        return _0x24dd81['default']['app']['mWX']['indexBpTot' + 'le']('recom_show', {
                            'game_show_list': _0x24dd81['default']['app']['fakerxcxli' + 'st'],
                            'position_type': 'app_list'
                        }), _0x518fb5;
                    }, _0x3083b9['prototype']['updateGame' + 'List'] = function (_0x1fc9a9, _0x5e4e1c) {
                        var _0x17a36e = _0x1fc9a9['getChildBy' + 'Name']('gameIcon'), _0x45111c = _0x1fc9a9['getChildBy' + 'Name']('gameName');
                        _0x17a36e['skin'] = _0x1fc9a9['dataSource']['url_icon'], _0x45111c['text'] = _0x1fc9a9['dataSource']['name'], _0x1fc9a9['on'](Laya['Event']['CLICK'], this, this['onShowGame'], [_0x1fc9a9['dataSource']['gameid']]);
                    }, _0x3083b9['prototype']['onShowGame'] = function (_0x51235f) {
                        if (_0x5a4f28['gameBox']['isClickJum' + 'p']) {
                            var _0x414aa3 = _0x24dd81['default']['app']['mWX']['getMoreUrl'](_0x51235f);
                            if (null == _0x414aa3)
                                return;
                            this['xcx_gameid'] = _0x51235f, this['myLikeView']['onclick'](_0x414aa3['appid'], _0x414aa3['gameid'], 'fakerxcxli' + 'st');
                        }
                    }, _0x3083b9;
                }(_0x11c835['ui']['test']['FakerXCXLi' + 'stUI']);
            _0x2a3842['FakerXCXLi' + 'stView'] = _0x4d9a5a;
        },
        {
            '../Main': 0xe,
            '../script/MyLikeView2': 0x22,
            './../ui/layaMaxUI': 0x2f,
            './MoreGame': 0x16,
            './gameBox': 0x18
        }
    ],
    0x12: [
        function (_0x527647, _0x4a2a2e, _0xf41216) {
            'use strict';
            Object['defineProp' + 'erty'](_0xf41216, '__esModule', { 'value': !0x0 });
            var _0x50a147 = _0x527647('../Main'), _0x3c82c4 = function (_0x2cf21b) {
                    function _0x2349f8(_0x48bc8, _0x208ec8, _0x33e647, _0x2799dd, _0x3bf19b) {
                        var _0x79d18e = _0x2cf21b['call'](this) || this;
                        return _0x79d18e['frames'] = [], _0x79d18e['timer'] = 0x0, _0x79d18e['index'] = 0x0, _0x79d18e['frame_numb' + 'er'] = 0x1, _0x79d18e['interval'] = [0x64], _0x79d18e['showAniNum'] = 0x0, _0x79d18e['showAniArr'] = [], _0x79d18e['startFrame'] = 0x0, _0x79d18e['endFrame'] = 0x0, _0x79d18e['framesArr'] = [], _0x79d18e['isChange'] = !0x1, _0x79d18e['playAniNum'] = 0x0, _0x79d18e['aniPlayTim' + 'e'] = 0x0, _0x79d18e['changeAnit' + 'ime'] = [0xbb8], _0x79d18e['target'] = _0x48bc8, _0x79d18e['target']['skin'] = '', _0x79d18e['frames'] = _0x208ec8, _0x79d18e['frame_numb' + 'er'] = _0x208ec8['length'], _0x79d18e['interval'] = _0x33e647, _0x79d18e['framesArr'] = _0x2799dd, _0x79d18e['showAniArr'] = _0x79d18e['createAniA' + 'rr'](_0x2799dd), _0x79d18e['changeAnit' + 'ime'] = _0x3bf19b, _0x79d18e['getStartEn' + 'd'](_0x79d18e['playAniNum']), _0x79d18e['set_index'](_0x79d18e['startFrame']), _0x79d18e;
                    }
                    return __extends(_0x2349f8, _0x2cf21b), _0x2349f8['prototype']['getStartEn' + 'd'] = function (_0x41c9ad) {
                        0x0 == this['showAniArr'][_0x41c9ad] ? (this['startFrame'] = 0x0, this['endFrame'] = Number(this['framesArr'][this['showAniArr'][_0x41c9ad]])) : (this['startFrame'] = Number(this['framesArr'][this['showAniArr'][_0x41c9ad] - 0x1]), this['endFrame'] = Number(this['framesArr'][this['showAniArr'][_0x41c9ad]]));
                    }, _0x2349f8['prototype']['createAniA' + 'rr'] = function (_0x375043) {
                        var _0x480463 = [];
                        return _0x375043['forEach'](function (_0x3db060, _0x58c3e7) {
                            _0x480463['push'](_0x58c3e7);
                        }), this['shuffleArr' + 'ay'](_0x480463);
                    }, _0x2349f8['prototype']['shuffleArr' + 'ay'] = function (_0x1bc01d) {
                        for (var _0x4b060a = -0x1, _0x330f14 = _0x1bc01d['length'], _0x52db1b = _0x330f14 - 0x1, _0x2df39e = _0x330f14; ++_0x4b060a < _0x2df39e;) {
                            var _0x548923 = _0x4b060a + Math['floor'](Math['random']() * (_0x52db1b - _0x4b060a + 0x1)), _0xd50d6b = _0x1bc01d[_0x548923];
                            _0x1bc01d[_0x548923] = _0x1bc01d[_0x4b060a], _0x1bc01d[_0x4b060a] = _0xd50d6b;
                        }
                        return _0x1bc01d['length'] = _0x2df39e, _0x1bc01d;
                    }, _0x2349f8['prototype']['add_index'] = function () {
                        _0x50a147['default']['app']['playAni'] && (this['index'] + 0x1 >= this['endFrame'] ? this['isChange'] ? (++this['playAniNum'] >= this['showAniArr']['length'] && (this['playAniNum'] = 0x0), this['getStartEn' + 'd'](this['playAniNum']), this['set_index'](this['startFrame']), this['isChange'] = !0x1) : this['set_index'](this['startFrame']) : this['set_index'](this['index'] + 0x1));
                    }, _0x2349f8['prototype']['set_index'] = function (_0x43402f) {
                        if (this['index'] = _0x43402f, this['target']) {
                            if (this['target']['skin']) {
                                if (this['startFrame'] + 0x1 == this['endFrame'] && !this['isChange'])
                                    return;
                                this['index'] < this['endFrame'] && (this['target']['skin'] = this['frames'][_0x43402f]);
                            } else
                                this['target']['skin'] = this['frames'][_0x43402f];
                        }
                    }, _0x2349f8['prototype']['update'] = function () {
                        return _0x50a147['default']['app']['mWX']['likeLoop'] ? (this['timer'] += 0x32, (0x0 == _0x50a147['default']['app']['mWX']['oddEvenTes' + 'tModel']['isAniTest'] || 0x1 == _0x50a147['default']['app']['mWX']['oddEvenTes' + 'tModel']['isAniTest']) && (this['aniPlayTim' + 'e'] += 0x32, this['aniPlayTim' + 'e'] >= this['changeAnit' + 'ime'][0x0]) ? (this['aniPlayTim' + 'e'] = 0x0, this['isChange'] = !0x0, this['add_index'](), void (this['timer'] = 0x0)) : void (this['timer'] >= this['interval'][this['showAniArr'][this['playAniNum']]] && (this['add_index'](), this['timer'] = 0x0))) : (console['log']('销毁jumpAni'), void this['event']('die'));
                    }, _0x2349f8;
                }(Laya['EventDispa' + 'tcher']);
            _0xf41216['JumpAni'] = _0x3c82c4;
        },
        { '../Main': 0xe }
    ],
    0x13: [
        function (_0x1433bc, _0x215af9, _0x2f654d) {
            'use strict';
            Object['defineProp' + 'erty'](_0x2f654d, '__esModule', { 'value': !0x0 });
            var _0x32c053 = _0x1433bc('./JumpAni'), _0x2f6bd4 = _0x1433bc('../Main'), _0x8b3017 = function () {
                    function _0x27a07f() {
                        this['hasFrameAr' + 'r'] = [], this['aniList'] = [], Laya['timer']['loop'](0x32, this, this['loop50']);
                    }
                    return Object['defineProp' + 'erty'](_0x27a07f, 'instance', {
                        'get': function () {
                            return _0x27a07f['_instance'] || (_0x27a07f['_instance'] = new _0x27a07f()), _0x27a07f['_instance'];
                        },
                        'enumerable': !0x0,
                        'configurable': !0x0
                    }), _0x27a07f['prototype']['loop50'] = function () {
                        for (var _0x1f3a83 = this['aniList']['concat'](), _0x5d03d4 = 0x0; _0x5d03d4 < _0x1f3a83['length']; _0x5d03d4++)
                            _0x1f3a83[_0x5d03d4]['update']();
                    }, _0x27a07f['prototype']['ani'] = function (_0x3fb738, _0x493d0d, _0x5f5b3b, _0x5e12e1, _0x15b4bd, _0x4d4f5b) {
                        var _0x5e7979 = this, _0x5e33b0 = 0x0, _0x235c6b = [];
                        try {
                            _0x5f5b3b['forEach'](function (_0x1937a1) {
                                _0x5e33b0 += Number(_0x1937a1), _0x235c6b['push'](_0x5e33b0);
                            });
                        } catch (_0x54e28d) {
                            console['log'](_0x5f5b3b);
                        }
                        var _0x279cd1 = [];
                        _0x279cd1['push'](_0x493d0d);
                        var _0x12b923 = 0x2;
                        if (_0x2f6bd4['default']['app']['mWX']['moreFenFaN' + 'um'] >= 0x2 && 0x0 != _0x4d4f5b) {
                            _0x12b923 = _0x4d4f5b, console['log']('ii1:', _0x12b923, _0x5e33b0);
                            for (_0x8566ec = _0x12b923; _0x8566ec < _0x5e33b0 + _0x12b923; _0x8566ec++) {
                                _0x37b086 = _0x493d0d['replace']('_' + _0x12b923 + '.', '_' + _0x8566ec + '.'), (console['log']('path2:', _0x37b086, _0x8566ec), _0x279cd1['push'](_0x37b086));
                            }
                        } else {
                            console['log']('ii2:', _0x12b923, _0x5e33b0);
                            for (var _0x8566ec = _0x12b923; _0x8566ec <= _0x5e33b0; _0x8566ec++) {
                                var _0x37b086 = _0x493d0d['replace']('_1.', '_' + _0x8566ec + '.');
                                console['log']('path1:', _0x37b086, _0x8566ec), _0x279cd1['push'](_0x37b086);
                            }
                        }
                        this['hasFrameAr' + 'r']['indexOf'](_0x493d0d) < 0x0 && Laya['loader']['load'](_0x279cd1, Laya['Handler']['create'](this, function () {
                            console['log']('分发加载完成'), _0x5e7979['hasFrameAr' + 'r']['push'](_0x493d0d), _0x2f6bd4['default']['app']['playAni'] = !0x0;
                        }), null, Laya['Loader']['IMAGE'], 0x4), _0x3fb738['skin'] = '';
                        var _0x2f54ac = new _0x32c053['JumpAni'](_0x3fb738, _0x279cd1, _0x5e12e1, _0x235c6b, _0x15b4bd);
                        this['aniList']['push'](_0x2f54ac), _0x2f54ac['on']('die', this, this['onJumpAniD' + 'ie'], [_0x2f54ac]), console['log']('问题所在\x20===\x20分' + '发', _0x5f5b3b, _0x493d0d);
                    }, _0x27a07f['prototype']['onJumpAniD' + 'ie'] = function (_0x30bfa7) {
                        var _0x4a7ed4 = this['aniList']['indexOf'](_0x30bfa7);
                        _0x4a7ed4 >= 0x0 && this['aniList']['splice'](_0x4a7ed4, 0x1);
                    }, _0x27a07f;
                }();
            _0x2f654d['JumpAniCtl'] = _0x8b3017;
        },
        {
            '../Main': 0xe,
            './JumpAni': 0x12
        }
    ],
    0x14: [
        function (_0x36a780, _0xddafbd, _0x483ba9) {
            'use strict';
            Object['defineProp' + 'erty'](_0x483ba9, '__esModule', { 'value': !0x0 });
            var _0x280ce3 = _0x36a780('../Main'), _0x204158 = function () {
                    function _0x4989e4() {
                    }
                    return Object['defineProp' + 'erty'](_0x4989e4, 'instance', {
                        'get': function () {
                            return _0x4989e4['_instance'] || (_0x4989e4['_instance'] = new _0x4989e4()), _0x4989e4['_instance'];
                        },
                        'enumerable': !0x0,
                        'configurable': !0x0
                    }), _0x4989e4['prototype']['convert'] = function (_0x32b096) {
                        var _0x59d712 = 0x0, _0x234282 = [], _0x338f18 = [], _0x57b331 = '', _0x32f050 = 0x0, _0xdb7ee7 = [], _0x3f9876 = [], _0x417019 = '', _0x23b0e8 = [], _0x46e8d4 = [];
                        if (_0x32b096['anim_confi' + 'g'] && '' != _0x32b096['anim_confi' + 'g']) {
                            var _0x8de635 = {};
                            try {
                                if (_0x8de635 = JSON['parse'](_0x32b096['anim_confi' + 'g']), _0x8de635['framelist'] = _0x8de635['group_stat' + 'ic']['toString']()['split'](','), _0x8de635['framebigli' + 'st'] = _0x8de635['group_stat' + 'ic_big']['toString']()['split'](','), _0x8de635['frameone'] = _0x8de635['frame_stat' + 'ic']['toString']()['split'](','), _0x8de635['framebigon' + 'e'] = _0x8de635['frame_stat' + 'ic_big']['toString']()['split'](','), _0x8de635['millisecon' + 'd'] = _0x8de635['millisecon' + 'd_static']['toString']()['split'](','), _0x8de635['millisecon' + 'd_big'] = _0x8de635['millisecon' + 'd_static_b' + 'ig']['toString']()['split'](','), _0x8de635['millisecon' + 'd2'] = _0x8de635['millisecon' + 'd2']['toString']()['split'](','), _0x8de635['millisecon' + 'd_big2'] = _0x8de635['millisecon' + 'd_big2']['toString']()['split'](','), _0x8de635['millisecon' + 'd3'] = _0x8de635['millisecon' + 'd3']['toString']()['split'](','), _0x8de635['millisecon' + 'd_big3'] = _0x8de635['millisecon' + 'd_big3']['toString']()['split'](','), 0x1 == _0x280ce3['default']['app']['mWX']['moreFenFaN' + 'um'])
                                    _0x8de635['framelist']['splice'](0x1, _0x8de635['framelist']['length'] - 0x1), _0x8de635['framebigli' + 'st']['splice'](0x1, _0x8de635['framebigli' + 'st']['length'] - 0x1), _0x8de635['millisecon' + 'd']['splice'](0x1, _0x8de635['millisecon' + 'd']['length'] - 0x1), _0x8de635['millisecon' + 'd_big']['splice'](0x1, _0x8de635['millisecon' + 'd_big']['length'] - 0x1);
                                else {
                                    if (_0x280ce3['default']['app']['mWX']['moreFenFaN' + 'um'] >= 0x2)
                                        _0x8de635['framelist']['length'] > 0x1 && _0x8de635['framelist']['splice'](0x0, _0x8de635['framelist']['length'] - 0x1), _0x8de635['framebigli' + 'st']['length'] > 0x1 && _0x8de635['framebigli' + 'st']['splice'](0x0, _0x8de635['framebigli' + 'st']['length'] - 0x1), _0x8de635['millisecon' + 'd']['length'] > 0x1 && _0x8de635['millisecon' + 'd']['splice'](0x0, _0x8de635['framelist']['length'] - 0x1), _0x8de635['millisecon' + 'd_big']['length'] > 0x1 && _0x8de635['millisecon' + 'd_big']['splice'](0x0, _0x8de635['framelist']['length'] - 0x1);
                                    else {
                                        if (0x0 == _0x280ce3['default']['app']['mWX']['moreFenFaN' + 'um']) {
                                            for (var _0x476ba6 = 0x0, _0x5a2933 = 0x0, _0x38776a = 0x0; _0x38776a < _0x8de635['framelist']['length']; _0x38776a++)
                                                _0x476ba6 += Number(_0x8de635['framelist'][_0x38776a]);
                                            for (_0x38776a = 0x0; _0x38776a < _0x8de635['framebigli' + 'st']['length']; _0x38776a++)
                                                _0x5a2933 += Number(_0x8de635['framebigli' + 'st'][_0x38776a]);
                                            _0x8de635['framelist'] = [_0x476ba6], _0x8de635['framebigli' + 'st'] = [_0x5a2933];
                                        }
                                    }
                                }
                                console['log']('moreFenFaN' + 'um2:', _0x280ce3['default']['app']['mWX']['moreFenFaN' + 'um'], _0x8de635['framelist'], _0x8de635['framebigli' + 'st'], _0x8de635['millisecon' + 'd'], _0x8de635['millisecon' + 'd_big']);
                            } catch (_0x297ea2) {
                                return console['log'](_0x297ea2), null;
                            }
                            var _0xd272f7 = _0x280ce3['default']['app']['mWX']['oddEvenTes' + 'tModel'];
                            if (0x0 == _0xd272f7['isAniTest'] || 0x2 == _0xd272f7['isAniTest'])
                                _0x59d712 = 0x2, _0x234282 = _0x8de635['framelist'], _0x338f18 = _0x8de635['millisecon' + 'd'], _0x57b331 = _0x32b096['static_ico' + 'n'], _0x23b0e8 = _0x8de635['millisecon' + 'd3'];
                            else {
                                _0x338f18 = _0x8de635['millisecon' + 'd2'], _0x23b0e8 = _0x8de635['millisecon' + 'd2'], _0x59d712 = 0x1;
                                for (var _0x248d0c = [], _0x40ea2b = 0x0; _0x40ea2b < Number(_0x8de635['frameone'][0x0]); _0x40ea2b++)
                                    _0x248d0c['push'](0x1);
                                _0x234282 = _0x248d0c, _0x57b331 = _0x32b096['url_icon'];
                            }
                            if (0x0 == _0xd272f7['isAniTest'] || 0x2 == _0xd272f7['isAniTest'])
                                _0x32f050 = 0x2, _0xdb7ee7 = _0x8de635['framebigli' + 'st'], _0x3f9876 = _0x8de635['millisecon' + 'd_big'], _0x417019 = _0x32b096['static_big' + '_btn_icon'], _0x46e8d4 = _0x8de635['millisecon' + 'd_big3'];
                            else {
                                _0x46e8d4 = _0x8de635['millisecon' + 'd_big2'], _0x3f9876 = _0x8de635['millisecon' + 'd_big2'], _0x32f050 = 0x1;
                                for (var _0x248d0c = [], _0x40ea2b = 0x0; _0x40ea2b < Number(_0x8de635['framebigon' + 'e'][0x0]); _0x40ea2b++)
                                    _0x248d0c['push'](0x1);
                                _0xdb7ee7 = _0x248d0c, _0x417019 = _0x32b096['big_btn_ur' + 'l'];
                            }
                        } else
                            _0x59d712 = 0x0, _0x32f050 = 0x0;
                        return {
                            'small_type': _0x59d712,
                            'small_frame': _0x234282,
                            'small_interval': _0x338f18,
                            'small_image': _0x57b331,
                            'millisecond': _0x23b0e8,
                            'big_type': _0x32f050,
                            'big_frame': _0xdb7ee7,
                            'big_interval': _0x3f9876,
                            'big_image': _0x417019,
                            'millisecond_big': _0x46e8d4
                        };
                    }, _0x4989e4;
                }();
            _0x483ba9['JumpObjCon' + 'verter'] = _0x204158;
        },
        { '../Main': 0xe }
    ],
    0x15: [
        function (_0x7a5e2b, _0x53d49d, _0xfd593b) {
            'use strict';
            Object['defineProp' + 'erty'](_0xfd593b, '__esModule', { 'value': !0x0 });
            var _0x441c87 = function () {
                function _0x3aa27c() {
                    this['hexcase'] = 0x0, this['b64pad'] = '';
                }
                return _0x3aa27c['prototype']['hex_md5'] = function (_0x2a4b3e) {
                    return this['rstr2hex'](this['rstr_md5'](this['str2rstr_u' + 'tf8'](_0x2a4b3e)));
                }, _0x3aa27c['prototype']['b64_md5'] = function (_0x2df8e1) {
                    return this['rstr2b64'](this['rstr_md5'](this['str2rstr_u' + 'tf8'](_0x2df8e1)));
                }, _0x3aa27c['prototype']['any_md5'] = function (_0x352ed4, _0x47db96) {
                    return this['rstr2any'](this['rstr_md5'](this['str2rstr_u' + 'tf8'](_0x352ed4)), _0x47db96);
                }, _0x3aa27c['prototype']['hex_hmac_m' + 'd5'] = function (_0x11f248, _0x5389f6) {
                    return this['rstr2hex'](this['rstr_hmac_' + 'md5'](this['str2rstr_u' + 'tf8'](_0x11f248), this['str2rstr_u' + 'tf8'](_0x5389f6)));
                }, _0x3aa27c['prototype']['b64_hmac_m' + 'd5'] = function (_0x463927, _0x8a6cc0) {
                    return this['rstr2b64'](this['rstr_hmac_' + 'md5'](this['str2rstr_u' + 'tf8'](_0x463927), this['str2rstr_u' + 'tf8'](_0x8a6cc0)));
                }, _0x3aa27c['prototype']['any_hmac_m' + 'd5'] = function (_0x1caa4b, _0x5bf3cd, _0x2778a5) {
                    return this['rstr2any'](this['rstr_hmac_' + 'md5'](this['str2rstr_u' + 'tf8'](_0x1caa4b), this['str2rstr_u' + 'tf8'](_0x5bf3cd)), _0x2778a5);
                }, _0x3aa27c['prototype']['md5_vm_tes' + 't'] = function () {
                    return '900150983c' + 'd24fb0d696' + '3f7d28e17f' + '72' == this['hex_md5']('abc')['toLowerCas' + 'e']();
                }, _0x3aa27c['prototype']['rstr_md5'] = function (_0x50a230) {
                    return this['binl2rstr'](this['binl_md5'](this['rstr2binl'](_0x50a230), 0x8 * _0x50a230['length']));
                }, _0x3aa27c['prototype']['rstr_hmac_' + 'md5'] = function (_0xee356c, _0x2a959f) {
                    var _0x258f65 = this['rstr2binl'](_0xee356c);
                    _0x258f65['length'] > 0x10 && (_0x258f65 = this['binl_md5'](_0x258f65, 0x8 * _0xee356c['length']));
                    for (var _0x1204da = Array(0x10), _0x3139e0 = Array(0x10), _0x4cc9dc = 0x0; _0x4cc9dc < 0x10; _0x4cc9dc++)
                        _0x1204da[_0x4cc9dc] = 0x36363636 ^ _0x258f65[_0x4cc9dc], _0x3139e0[_0x4cc9dc] = 0x5c5c5c5c ^ _0x258f65[_0x4cc9dc];
                    var _0x11e676 = this['binl_md5'](_0x1204da['concat'](this['rstr2binl'](_0x2a959f)), 0x200 + 0x8 * _0x2a959f['length']);
                    return this['binl2rstr'](this['binl_md5'](_0x3139e0['concat'](_0x11e676), 0x280));
                }, _0x3aa27c['prototype']['rstr2hex'] = function (_0x22f73a) {
                    try {
                        this['hexcase'];
                    } catch (_0x2e5ec7) {
                        this['hexcase'] = 0x0;
                    }
                    for (var _0x16a2cf, _0x102d80 = this['hexcase'] ? '0123456789' + 'ABCDEF' : '0123456789' + 'abcdef', _0x2ef58b = '', _0x4a66f8 = 0x0; _0x4a66f8 < _0x22f73a['length']; _0x4a66f8++)
                        _0x16a2cf = _0x22f73a['charCodeAt'](_0x4a66f8), _0x2ef58b += _0x102d80['charAt'](_0x16a2cf >>> 0x4 & 0xf) + _0x102d80['charAt'](0xf & _0x16a2cf);
                    return _0x2ef58b;
                }, _0x3aa27c['prototype']['rstr2b64'] = function (_0x3b672b) {
                    try {
                        this['b64pad'];
                    } catch (_0x11141e) {
                        this['b64pad'] = '';
                    }
                    for (var _0x105a0a = '', _0x323562 = _0x3b672b['length'], _0xaf856f = 0x0; _0xaf856f < _0x323562; _0xaf856f += 0x3)
                        for (var _0x3adcd6 = _0x3b672b['charCodeAt'](_0xaf856f) << 0x10 | (_0xaf856f + 0x1 < _0x323562 ? _0x3b672b['charCodeAt'](_0xaf856f + 0x1) << 0x8 : 0x0) | (_0xaf856f + 0x2 < _0x323562 ? _0x3b672b['charCodeAt'](_0xaf856f + 0x2) : 0x0), _0x5cadf2 = 0x0; _0x5cadf2 < 0x4; _0x5cadf2++)
                            0x8 * _0xaf856f + 0x6 * _0x5cadf2 > 0x8 * _0x3b672b['length'] ? _0x105a0a += this['b64pad'] : _0x105a0a += ('ABCDEFGHIJ' + 'KLMNOPQRST' + 'UVWXYZabcd' + 'efghijklmn' + 'opqrstuvwx' + 'yz01234567' + '89+/')['charAt'](_0x3adcd6 >>> 0x6 * (0x3 - _0x5cadf2) & 0x3f);
                    return _0x105a0a;
                }, _0x3aa27c['prototype']['rstr2any'] = function (_0x5d743a, _0x1036da) {
                    var _0x57cb59, _0x27d0dc, _0x374091, _0x4a4731, _0x5d001c, _0x236185 = _0x1036da['length'], _0x548d60 = Array(Math['ceil'](_0x5d743a['length'] / 0x2));
                    for (_0x57cb59 = 0x0; _0x57cb59 < _0x548d60['length']; _0x57cb59++)
                        _0x548d60[_0x57cb59] = _0x5d743a['charCodeAt'](0x2 * _0x57cb59) << 0x8 | _0x5d743a['charCodeAt'](0x2 * _0x57cb59 + 0x1);
                    var _0x1fe9c5 = Math['ceil'](0x8 * _0x5d743a['length'] / (Math['log'](_0x1036da['length']) / Math['log'](0x2))), _0x1b9f71 = Array(_0x1fe9c5);
                    for (_0x27d0dc = 0x0; _0x27d0dc < _0x1fe9c5; _0x27d0dc++) {
                        for (_0x5d001c = Array(), _0x4a4731 = 0x0, _0x57cb59 = 0x0; _0x57cb59 < _0x548d60['length']; _0x57cb59++)
                            _0x4a4731 = (_0x4a4731 << 0x10) + _0x548d60[_0x57cb59], _0x4a4731 -= (_0x374091 = Math['floor'](_0x4a4731 / _0x236185)) * _0x236185, (_0x5d001c['length'] > 0x0 || _0x374091 > 0x0) && (_0x5d001c[_0x5d001c['length']] = _0x374091);
                        _0x1b9f71[_0x27d0dc] = _0x4a4731, _0x548d60 = _0x5d001c;
                    }
                    var _0x398d4c = '';
                    for (_0x57cb59 = _0x1b9f71['length'] - 0x1; _0x57cb59 >= 0x0; _0x57cb59--)
                        _0x398d4c += _0x1036da['charAt'](_0x1b9f71[_0x57cb59]);
                    return _0x398d4c;
                }, _0x3aa27c['prototype']['str2rstr_u' + 'tf8'] = function (_0xa8fead) {
                    for (var _0x241cf1, _0x433cad, _0x39338d = '', _0x36b19d = -0x1; ++_0x36b19d < _0xa8fead['length'];)
                        _0x241cf1 = _0xa8fead['charCodeAt'](_0x36b19d), _0x433cad = _0x36b19d + 0x1 < _0xa8fead['length'] ? _0xa8fead['charCodeAt'](_0x36b19d + 0x1) : 0x0, 0xd800 <= _0x241cf1 && _0x241cf1 <= 0xdbff && 0xdc00 <= _0x433cad && _0x433cad <= 0xdfff && (_0x241cf1 = 0x10000 + ((0x3ff & _0x241cf1) << 0xa) + (0x3ff & _0x433cad), _0x36b19d++), _0x241cf1 <= 0x7f ? _0x39338d += String['fromCharCo' + 'de'](_0x241cf1) : _0x241cf1 <= 0x7ff ? _0x39338d += String['fromCharCo' + 'de'](0xc0 | _0x241cf1 >>> 0x6 & 0x1f, 0x80 | 0x3f & _0x241cf1) : _0x241cf1 <= 0xffff ? _0x39338d += String['fromCharCo' + 'de'](0xe0 | _0x241cf1 >>> 0xc & 0xf, 0x80 | _0x241cf1 >>> 0x6 & 0x3f, 0x80 | 0x3f & _0x241cf1) : _0x241cf1 <= 0x1fffff && (_0x39338d += String['fromCharCo' + 'de'](0xf0 | _0x241cf1 >>> 0x12 & 0x7, 0x80 | _0x241cf1 >>> 0xc & 0x3f, 0x80 | _0x241cf1 >>> 0x6 & 0x3f, 0x80 | 0x3f & _0x241cf1));
                    return _0x39338d;
                }, _0x3aa27c['prototype']['str2rstr_u' + 'tf16le'] = function (_0xe0e176) {
                    for (var _0x4b5049 = '', _0x2b9b32 = 0x0; _0x2b9b32 < _0xe0e176['length']; _0x2b9b32++)
                        _0x4b5049 += String['fromCharCo' + 'de'](0xff & _0xe0e176['charCodeAt'](_0x2b9b32), _0xe0e176['charCodeAt'](_0x2b9b32) >>> 0x8 & 0xff);
                    return _0x4b5049;
                }, _0x3aa27c['prototype']['str2rstr_u' + 'tf16be'] = function (_0x2970dc) {
                    for (var _0x45a43c = '', _0x383e75 = 0x0; _0x383e75 < _0x2970dc['length']; _0x383e75++)
                        _0x45a43c += String['fromCharCo' + 'de'](_0x2970dc['charCodeAt'](_0x383e75) >>> 0x8 & 0xff, 0xff & _0x2970dc['charCodeAt'](_0x383e75));
                    return _0x45a43c;
                }, _0x3aa27c['prototype']['rstr2binl'] = function (_0x50ca9c) {
                    for (var _0x25285a = Array(_0x50ca9c['length'] >> 0x2), _0x1f6e16 = 0x0; _0x1f6e16 < _0x25285a['length']; _0x1f6e16++)
                        _0x25285a[_0x1f6e16] = 0x0;
                    for (_0x1f6e16 = 0x0; _0x1f6e16 < 0x8 * _0x50ca9c['length']; _0x1f6e16 += 0x8)
                        _0x25285a[_0x1f6e16 >> 0x5] |= (0xff & _0x50ca9c['charCodeAt'](_0x1f6e16 / 0x8)) << _0x1f6e16 % 0x20;
                    return _0x25285a;
                }, _0x3aa27c['prototype']['binl2rstr'] = function (_0x5642a3) {
                    for (var _0xab0e8a = '', _0x3982e8 = 0x0; _0x3982e8 < 0x20 * _0x5642a3['length']; _0x3982e8 += 0x8)
                        _0xab0e8a += String['fromCharCo' + 'de'](_0x5642a3[_0x3982e8 >> 0x5] >>> _0x3982e8 % 0x20 & 0xff);
                    return _0xab0e8a;
                }, _0x3aa27c['prototype']['binl_md5'] = function (_0x2227d8, _0x5cc312) {
                    _0x2227d8[_0x5cc312 >> 0x5] |= 0x80 << _0x5cc312 % 0x20, _0x2227d8[0xe + (_0x5cc312 + 0x40 >>> 0x9 << 0x4)] = _0x5cc312;
                    for (var _0x3da473 = 0x67452301, _0x598eb6 = -0x10325477, _0x30a108 = -0x67452302, _0x13bb39 = 0x10325476, _0x38c08a = 0x0; _0x38c08a < _0x2227d8['length']; _0x38c08a += 0x10) {
                        var _0x231f34 = _0x3da473, _0x3594e1 = _0x598eb6, _0x6fefb1 = _0x30a108, _0x23a370 = _0x13bb39;
                        _0x3da473 = this['md5_ff'](_0x3da473, _0x598eb6, _0x30a108, _0x13bb39, _0x2227d8[_0x38c08a + 0x0], 0x7, -0x28955b88), _0x13bb39 = this['md5_ff'](_0x13bb39, _0x3da473, _0x598eb6, _0x30a108, _0x2227d8[_0x38c08a + 0x1], 0xc, -0x173848aa), _0x30a108 = this['md5_ff'](_0x30a108, _0x13bb39, _0x3da473, _0x598eb6, _0x2227d8[_0x38c08a + 0x2], 0x11, 0x242070db), _0x598eb6 = this['md5_ff'](_0x598eb6, _0x30a108, _0x13bb39, _0x3da473, _0x2227d8[_0x38c08a + 0x3], 0x16, -0x3e423112), _0x3da473 = this['md5_ff'](_0x3da473, _0x598eb6, _0x30a108, _0x13bb39, _0x2227d8[_0x38c08a + 0x4], 0x7, -0xa83f051), _0x13bb39 = this['md5_ff'](_0x13bb39, _0x3da473, _0x598eb6, _0x30a108, _0x2227d8[_0x38c08a + 0x5], 0xc, 0x4787c62a), _0x30a108 = this['md5_ff'](_0x30a108, _0x13bb39, _0x3da473, _0x598eb6, _0x2227d8[_0x38c08a + 0x6], 0x11, -0x57cfb9ed), _0x598eb6 = this['md5_ff'](_0x598eb6, _0x30a108, _0x13bb39, _0x3da473, _0x2227d8[_0x38c08a + 0x7], 0x16, -0x2b96aff), _0x3da473 = this['md5_ff'](_0x3da473, _0x598eb6, _0x30a108, _0x13bb39, _0x2227d8[_0x38c08a + 0x8], 0x7, 0x698098d8), _0x13bb39 = this['md5_ff'](_0x13bb39, _0x3da473, _0x598eb6, _0x30a108, _0x2227d8[_0x38c08a + 0x9], 0xc, -0x74bb0851), _0x30a108 = this['md5_ff'](_0x30a108, _0x13bb39, _0x3da473, _0x598eb6, _0x2227d8[_0x38c08a + 0xa], 0x11, -0xa44f), _0x598eb6 = this['md5_ff'](_0x598eb6, _0x30a108, _0x13bb39, _0x3da473, _0x2227d8[_0x38c08a + 0xb], 0x16, -0x76a32842), _0x3da473 = this['md5_ff'](_0x3da473, _0x598eb6, _0x30a108, _0x13bb39, _0x2227d8[_0x38c08a + 0xc], 0x7, 0x6b901122), _0x13bb39 = this['md5_ff'](_0x13bb39, _0x3da473, _0x598eb6, _0x30a108, _0x2227d8[_0x38c08a + 0xd], 0xc, -0x2678e6d), _0x30a108 = this['md5_ff'](_0x30a108, _0x13bb39, _0x3da473, _0x598eb6, _0x2227d8[_0x38c08a + 0xe], 0x11, -0x5986bc72), _0x598eb6 = this['md5_ff'](_0x598eb6, _0x30a108, _0x13bb39, _0x3da473, _0x2227d8[_0x38c08a + 0xf], 0x16, 0x49b40821), _0x3da473 = this['md5_gg'](_0x3da473, _0x598eb6, _0x30a108, _0x13bb39, _0x2227d8[_0x38c08a + 0x1], 0x5, -0x9e1da9e), _0x13bb39 = this['md5_gg'](_0x13bb39, _0x3da473, _0x598eb6, _0x30a108, _0x2227d8[_0x38c08a + 0x6], 0x9, -0x3fbf4cc0), _0x30a108 = this['md5_gg'](_0x30a108, _0x13bb39, _0x3da473, _0x598eb6, _0x2227d8[_0x38c08a + 0xb], 0xe, 0x265e5a51), _0x598eb6 = this['md5_gg'](_0x598eb6, _0x30a108, _0x13bb39, _0x3da473, _0x2227d8[_0x38c08a + 0x0], 0x14, -0x16493856), _0x3da473 = this['md5_gg'](_0x3da473, _0x598eb6, _0x30a108, _0x13bb39, _0x2227d8[_0x38c08a + 0x5], 0x5, -0x29d0efa3), _0x13bb39 = this['md5_gg'](_0x13bb39, _0x3da473, _0x598eb6, _0x30a108, _0x2227d8[_0x38c08a + 0xa], 0x9, 0x2441453), _0x30a108 = this['md5_gg'](_0x30a108, _0x13bb39, _0x3da473, _0x598eb6, _0x2227d8[_0x38c08a + 0xf], 0xe, -0x275e197f), _0x598eb6 = this['md5_gg'](_0x598eb6, _0x30a108, _0x13bb39, _0x3da473, _0x2227d8[_0x38c08a + 0x4], 0x14, -0x182c0438), _0x3da473 = this['md5_gg'](_0x3da473, _0x598eb6, _0x30a108, _0x13bb39, _0x2227d8[_0x38c08a + 0x9], 0x5, 0x21e1cde6), _0x13bb39 = this['md5_gg'](_0x13bb39, _0x3da473, _0x598eb6, _0x30a108, _0x2227d8[_0x38c08a + 0xe], 0x9, -0x3cc8f82a), _0x30a108 = this['md5_gg'](_0x30a108, _0x13bb39, _0x3da473, _0x598eb6, _0x2227d8[_0x38c08a + 0x3], 0xe, -0xb2af279), _0x598eb6 = this['md5_gg'](_0x598eb6, _0x30a108, _0x13bb39, _0x3da473, _0x2227d8[_0x38c08a + 0x8], 0x14, 0x455a14ed), _0x3da473 = this['md5_gg'](_0x3da473, _0x598eb6, _0x30a108, _0x13bb39, _0x2227d8[_0x38c08a + 0xd], 0x5, -0x561c16fb), _0x13bb39 = this['md5_gg'](_0x13bb39, _0x3da473, _0x598eb6, _0x30a108, _0x2227d8[_0x38c08a + 0x2], 0x9, -0x3105c08), _0x30a108 = this['md5_gg'](_0x30a108, _0x13bb39, _0x3da473, _0x598eb6, _0x2227d8[_0x38c08a + 0x7], 0xe, 0x676f02d9), _0x598eb6 = this['md5_gg'](_0x598eb6, _0x30a108, _0x13bb39, _0x3da473, _0x2227d8[_0x38c08a + 0xc], 0x14, -0x72d5b376), _0x3da473 = this['md5_hh'](_0x3da473, _0x598eb6, _0x30a108, _0x13bb39, _0x2227d8[_0x38c08a + 0x5], 0x4, -0x5c6be), _0x13bb39 = this['md5_hh'](_0x13bb39, _0x3da473, _0x598eb6, _0x30a108, _0x2227d8[_0x38c08a + 0x8], 0xb, -0x788e097f), _0x30a108 = this['md5_hh'](_0x30a108, _0x13bb39, _0x3da473, _0x598eb6, _0x2227d8[_0x38c08a + 0xb], 0x10, 0x6d9d6122), _0x598eb6 = this['md5_hh'](_0x598eb6, _0x30a108, _0x13bb39, _0x3da473, _0x2227d8[_0x38c08a + 0xe], 0x17, -0x21ac7f4), _0x3da473 = this['md5_hh'](_0x3da473, _0x598eb6, _0x30a108, _0x13bb39, _0x2227d8[_0x38c08a + 0x1], 0x4, -0x5b4115bc), _0x13bb39 = this['md5_hh'](_0x13bb39, _0x3da473, _0x598eb6, _0x30a108, _0x2227d8[_0x38c08a + 0x4], 0xb, 0x4bdecfa9), _0x30a108 = this['md5_hh'](_0x30a108, _0x13bb39, _0x3da473, _0x598eb6, _0x2227d8[_0x38c08a + 0x7], 0x10, -0x944b4a0), _0x598eb6 = this['md5_hh'](_0x598eb6, _0x30a108, _0x13bb39, _0x3da473, _0x2227d8[_0x38c08a + 0xa], 0x17, -0x41404390), _0x3da473 = this['md5_hh'](_0x3da473, _0x598eb6, _0x30a108, _0x13bb39, _0x2227d8[_0x38c08a + 0xd], 0x4, 0x289b7ec6), _0x13bb39 = this['md5_hh'](_0x13bb39, _0x3da473, _0x598eb6, _0x30a108, _0x2227d8[_0x38c08a + 0x0], 0xb, -0x155ed806), _0x30a108 = this['md5_hh'](_0x30a108, _0x13bb39, _0x3da473, _0x598eb6, _0x2227d8[_0x38c08a + 0x3], 0x10, -0x2b10cf7b), _0x598eb6 = this['md5_hh'](_0x598eb6, _0x30a108, _0x13bb39, _0x3da473, _0x2227d8[_0x38c08a + 0x6], 0x17, 0x4881d05), _0x3da473 = this['md5_hh'](_0x3da473, _0x598eb6, _0x30a108, _0x13bb39, _0x2227d8[_0x38c08a + 0x9], 0x4, -0x262b2fc7), _0x13bb39 = this['md5_hh'](_0x13bb39, _0x3da473, _0x598eb6, _0x30a108, _0x2227d8[_0x38c08a + 0xc], 0xb, -0x1924661b), _0x30a108 = this['md5_hh'](_0x30a108, _0x13bb39, _0x3da473, _0x598eb6, _0x2227d8[_0x38c08a + 0xf], 0x10, 0x1fa27cf8), _0x598eb6 = this['md5_hh'](_0x598eb6, _0x30a108, _0x13bb39, _0x3da473, _0x2227d8[_0x38c08a + 0x2], 0x17, -0x3b53a99b), _0x3da473 = this['md5_ii'](_0x3da473, _0x598eb6, _0x30a108, _0x13bb39, _0x2227d8[_0x38c08a + 0x0], 0x6, -0xbd6ddbc), _0x13bb39 = this['md5_ii'](_0x13bb39, _0x3da473, _0x598eb6, _0x30a108, _0x2227d8[_0x38c08a + 0x7], 0xa, 0x432aff97), _0x30a108 = this['md5_ii'](_0x30a108, _0x13bb39, _0x3da473, _0x598eb6, _0x2227d8[_0x38c08a + 0xe], 0xf, -0x546bdc59), _0x598eb6 = this['md5_ii'](_0x598eb6, _0x30a108, _0x13bb39, _0x3da473, _0x2227d8[_0x38c08a + 0x5], 0x15, -0x36c5fc7), _0x3da473 = this['md5_ii'](_0x3da473, _0x598eb6, _0x30a108, _0x13bb39, _0x2227d8[_0x38c08a + 0xc], 0x6, 0x655b59c3), _0x13bb39 = this['md5_ii'](_0x13bb39, _0x3da473, _0x598eb6, _0x30a108, _0x2227d8[_0x38c08a + 0x3], 0xa, -0x70f3336e), _0x30a108 = this['md5_ii'](_0x30a108, _0x13bb39, _0x3da473, _0x598eb6, _0x2227d8[_0x38c08a + 0xa], 0xf, -0x100b83), _0x598eb6 = this['md5_ii'](_0x598eb6, _0x30a108, _0x13bb39, _0x3da473, _0x2227d8[_0x38c08a + 0x1], 0x15, -0x7a7ba22f), _0x3da473 = this['md5_ii'](_0x3da473, _0x598eb6, _0x30a108, _0x13bb39, _0x2227d8[_0x38c08a + 0x8], 0x6, 0x6fa87e4f), _0x13bb39 = this['md5_ii'](_0x13bb39, _0x3da473, _0x598eb6, _0x30a108, _0x2227d8[_0x38c08a + 0xf], 0xa, -0x1d31920), _0x30a108 = this['md5_ii'](_0x30a108, _0x13bb39, _0x3da473, _0x598eb6, _0x2227d8[_0x38c08a + 0x6], 0xf, -0x5cfebcec), _0x598eb6 = this['md5_ii'](_0x598eb6, _0x30a108, _0x13bb39, _0x3da473, _0x2227d8[_0x38c08a + 0xd], 0x15, 0x4e0811a1), _0x3da473 = this['md5_ii'](_0x3da473, _0x598eb6, _0x30a108, _0x13bb39, _0x2227d8[_0x38c08a + 0x4], 0x6, -0x8ac817e), _0x13bb39 = this['md5_ii'](_0x13bb39, _0x3da473, _0x598eb6, _0x30a108, _0x2227d8[_0x38c08a + 0xb], 0xa, -0x42c50dcb), _0x30a108 = this['md5_ii'](_0x30a108, _0x13bb39, _0x3da473, _0x598eb6, _0x2227d8[_0x38c08a + 0x2], 0xf, 0x2ad7d2bb), _0x598eb6 = this['md5_ii'](_0x598eb6, _0x30a108, _0x13bb39, _0x3da473, _0x2227d8[_0x38c08a + 0x9], 0x15, -0x14792c6f), _0x3da473 = this['safe_add'](_0x3da473, _0x231f34), _0x598eb6 = this['safe_add'](_0x598eb6, _0x3594e1), _0x30a108 = this['safe_add'](_0x30a108, _0x6fefb1), _0x13bb39 = this['safe_add'](_0x13bb39, _0x23a370);
                    }
                    return [
                        _0x3da473,
                        _0x598eb6,
                        _0x30a108,
                        _0x13bb39
                    ];
                }, _0x3aa27c['prototype']['md5_cmn'] = function (_0x44bcec, _0x46c38a, _0x5ca384, _0x3367a2, _0x161f26, _0x1dc30c) {
                    return this['safe_add'](this['bit_rol'](this['safe_add'](this['safe_add'](_0x46c38a, _0x44bcec), this['safe_add'](_0x3367a2, _0x1dc30c)), _0x161f26), _0x5ca384);
                }, _0x3aa27c['prototype']['md5_ff'] = function (_0x48a184, _0x1eea58, _0x4afb14, _0x3b2691, _0x2cfd83, _0x51d982, _0x980660) {
                    return this['md5_cmn'](_0x1eea58 & _0x4afb14 | ~_0x1eea58 & _0x3b2691, _0x48a184, _0x1eea58, _0x2cfd83, _0x51d982, _0x980660);
                }, _0x3aa27c['prototype']['md5_gg'] = function (_0x5e76ec, _0x1583f1, _0x3f0b14, _0xe833e5, _0x275e6e, _0x3a831b, _0x42c118) {
                    return this['md5_cmn'](_0x1583f1 & _0xe833e5 | _0x3f0b14 & ~_0xe833e5, _0x5e76ec, _0x1583f1, _0x275e6e, _0x3a831b, _0x42c118);
                }, _0x3aa27c['prototype']['md5_hh'] = function (_0x4c6c5a, _0x3a776b, _0x2c7aa9, _0x5ed573, _0x5c448f, _0xb7de6c, _0x243281) {
                    return this['md5_cmn'](_0x3a776b ^ _0x2c7aa9 ^ _0x5ed573, _0x4c6c5a, _0x3a776b, _0x5c448f, _0xb7de6c, _0x243281);
                }, _0x3aa27c['prototype']['md5_ii'] = function (_0x533424, _0x540716, _0x5d66d6, _0x18bafb, _0x427bde, _0x27943a, _0x4d8c81) {
                    return this['md5_cmn'](_0x5d66d6 ^ (_0x540716 | ~_0x18bafb), _0x533424, _0x540716, _0x427bde, _0x27943a, _0x4d8c81);
                }, _0x3aa27c['prototype']['safe_add'] = function (_0x381d54, _0x5752d5) {
                    var _0x1a4329 = (0xffff & _0x381d54) + (0xffff & _0x5752d5);
                    return (_0x381d54 >> 0x10) + (_0x5752d5 >> 0x10) + (_0x1a4329 >> 0x10) << 0x10 | 0xffff & _0x1a4329;
                }, _0x3aa27c['prototype']['bit_rol'] = function (_0x1a653a, _0x45687c) {
                    return _0x1a653a << _0x45687c | _0x1a653a >>> 0x20 - _0x45687c;
                }, _0x3aa27c;
            }();
            _0xfd593b['MD5'] = _0x441c87;
        },
        {}
    ],
    0x16: [
        function (_0x549022, _0x2856b0, _0x5485a6) {
            'use strict';
            Object['defineProp' + 'erty'](_0x5485a6, '__esModule', { 'value': !0x0 });
            var _0x1ed24f = function () {
                function _0x5a4f18() {
                }
                return _0x5a4f18['mWriteBox'] = [
                    'wxf77fb880' + 'cddf362c',
                    'wx4e24f1db' + 'ac6b54bb',
                    'wxdd8d2e22' + 'b81eb6e7',
                    'wx368efd3d' + '253d9f9c',
                    'wxd5c1f9da' + '7d66191e',
                    'wxd2c09111' + '29978e05',
                    'wx34755345' + '9e2b6490',
                    'wx642d9c05' + 'ee59170a',
                    'wx214d9b69' + '1e5b328b',
                    'wxaa46e779' + '19aec8d9'
                ], _0x5a4f18;
            }();
            _0x5485a6['WriteBoxLi' + 'st'] = _0x1ed24f;
            var _0x503c25 = function (_0x35a1a7) {
                    function _0x18e074() {
                        var _0x59aa11 = _0x35a1a7['call'](this) || this;
                        _0x59aa11['pos'](0x0, 0x0), _0x59aa11['size'](0xb6, 0xfa);
                        var _0x28ae7d = new Laya['Image']();
                        _0x28ae7d['name'] = 'mBack', _0x28ae7d['anchorX'] = 0.5, _0x28ae7d['anchorY'] = 0.5, _0x28ae7d['pos'](0x5b, 0x4b), _0x28ae7d['size'](0x96, 0x96), _0x59aa11['addChild'](_0x28ae7d), _0x28ae7d['skin'] = _0x123f1b['cdnface'] + ('main/bk1.p' + 'ng');
                        var _0x791f2e = new Laya['Image']();
                        _0x791f2e['name'] = 'mBack2', _0x791f2e['anchorX'] = 0.5, _0x791f2e['anchorY'] = 0.5, _0x791f2e['pos'](0x5b, 0x4b), _0x791f2e['size'](0x96, 0x96), _0x59aa11['addChild'](_0x791f2e);
                        var _0x37a72a = new Laya['Label']();
                        _0x37a72a['name'] = 'GameName', _0x37a72a['color'] = '#000000', _0x37a72a['fontSize'] = 0x19, _0x37a72a['centerX'] = 0x0, _0x37a72a['y'] = 0xa5, _0x59aa11['addChild'](_0x37a72a);
                        var _0x243512 = new Laya['Label']();
                        return _0x243512['name'] = 'PlayNum', _0x243512['color'] = '#000000', _0x243512['fontSize'] = 0x12, _0x243512['centerX'] = 0x0, _0x243512['y'] = 0xce, _0x59aa11['addChild'](_0x243512), _0x59aa11;
                    }
                    return __extends(_0x18e074, _0x35a1a7), _0x18e074;
                }(Laya['Box']), _0x2c1e9f = function (_0x4b57f1) {
                    function _0x239328() {
                        return _0x4b57f1['call'](this) || this;
                    }
                    return __extends(_0x239328, _0x4b57f1), _0x239328['prototype']['initCode'] = function () {
                        this['mNoIcon'] = new Laya['Label'](), this['mNoIcon']['pos'](0xa, 0x12), this['mNoIcon']['size'](0x5, 0x19), this['mNoIcon']['bgColor'] = '#FFA650', this['addChild'](this['mNoIcon']), this['mIcon'] = new Laya['Image'](), this['mIcon']['pos'](0x19, 0xc), this['mIcon']['size'](0x28, 0x28), this['addChild'](this['mIcon']), this['mName'] = new Laya['Label'](), this['mName']['pos'](0x1e, 0x12), this['mName']['size'](0xb4, 0x19), this['mName']['color'] = '#000000', this['mName']['bold'] = !0x0, this['mName']['fontSize'] = 0x19, this['addChild'](this['mName']), this['mList'] = new Laya['List'](), this['mList']['pos'](0xa, 0x46), this['mList']['size'](0x2da, 0xe6), this['mList']['spaceX'] = 0x0, this['mList']['itemRender'] = _0x503c25, this['addChild'](this['mList']);
                    }, _0x239328;
                }(Laya['Image']), _0x123f1b = function (_0x2a68f4) {
                    function _0x4f81b() {
                        var _0x17de1e = _0x2a68f4['call'](this) || this;
                        return _0x17de1e['mIconJumpD' + 'ata'] = null, _0x17de1e['mNextShowG' + 'roup'] = 0x0, _0x17de1e['mStartGrou' + 'pY'] = 0x0, _0x17de1e['mShowGameA' + 'ppid'] = '', _0x17de1e['mGoGame'] = null, _0x17de1e['mWxMenuBut' + 'tonRect'] = null, _0x17de1e['width'] = Laya['stage']['width'], _0x17de1e['height'] = Laya['stage']['height'], _0x17de1e['x'] = Laya['stage']['width'], _0x17de1e;
                    }
                    return __extends(_0x4f81b, _0x2a68f4), _0x4f81b['prototype']['createChil' + 'dren'] = function () {
                        _0x2a68f4['prototype']['createChil' + 'dren']['call'](this), this['createView'](_0x4f81b['uiView']);
                    }, _0x4f81b['prototype']['getMenuBut' + 'tonTop_Cen' + 'terPoint'] = function () {
                        var _0x558cfd = new Laya['Point'](0x0, 0x0);
                        if (Laya['Browser']['onMiniGame']) {
                            if (_0x4f81b['mWxVer'] >= '2.1.0' && null == this['mWxMenuBut' + 'tonRect'] && null != wx['getMenuBut' + 'tonBoundin' + 'gClientRec' + 't']()) {
                                var _0x19787c = wx['getMenuBut' + 'tonBoundin' + 'gClientRec' + 't']();
                                null != _0x19787c && NaN != _0x19787c['height'] && void 0x0 != _0x19787c['height'] && null != _0x19787c['height'] && (this['mWxMenuBut' + 'tonRect'] = _0x19787c);
                            }
                            if (null != this['mWxMenuBut' + 'tonRect']) {
                                var _0x4cec4a = this['mWxMenuBut' + 'tonRect']['height'], _0x191005 = this['mWxMenuBut' + 'tonRect']['top'];
                                return _0x558cfd['x'] = _0x191005 * Laya['stage']['height'] / _0x4f81b['mPhone']['screenHeig' + 'ht'], _0x558cfd['y'] = _0x4cec4a * Laya['stage']['height'] / _0x4f81b['mPhone']['screenHeig' + 'ht'], _0x558cfd;
                            }
                        }
                        return _0x558cfd;
                    }, _0x4f81b['getJSON'] = function (_0x801a5) {
                        if ('' == _0x801a5 || null == _0x801a5)
                            return { 'code': -0x3e7 };
                        var _0x4aa1d3 = _0x801a5['indexOf']('{', 0x0);
                        return _0x801a5 = _0x801a5['substr'](_0x4aa1d3, _0x801a5['length'] - _0x4aa1d3), JSON['parse'](_0x801a5);
                    }, _0x4f81b['onBtnMouse' + 'Down'] = function (_0x2f27e1) {
                        _0x2f27e1['scale'](1.05, 1.05);
                    }, _0x4f81b['onBtnMouse' + 'Out'] = function (_0x486724) {
                        _0x486724['scale'](0x1, 0x1);
                    }, _0x4f81b['registImgB' + 'tnClick'] = function (_0x37f7f7, _0x10d6b5, _0x5c2cdc, _0x14ebee) {
                        void 0x0 === _0x5c2cdc && (_0x5c2cdc = null), void 0x0 === _0x14ebee && (_0x14ebee = !0x0), null == _0x5c2cdc && (_0x5c2cdc = this), _0x14ebee && (_0x37f7f7['on'](Laya['Event']['MOUSE_DOWN'], this, this['onBtnMouse' + 'Down'], [_0x37f7f7]), _0x37f7f7['on'](Laya['Event']['MOUSE_UP'], this, this['onBtnMouse' + 'Out'], [_0x37f7f7]), _0x37f7f7['on'](Laya['Event']['MOUSE_OUT'], this, this['onBtnMouse' + 'Out'], [_0x37f7f7])), _0x37f7f7['on'](Laya['Event']['CLICK'], _0x5c2cdc, function (_0x602685) {
                            null != _0x10d6b5 && (null == _0x10d6b5['args'] ? _0x10d6b5['args'] = [_0x602685] : _0x10d6b5['args']['push'](_0x602685), _0x10d6b5['run']());
                        });
                    }, _0x4f81b['InitServer' + 'ListEx'] = function (_0x3c82d0, _0x13d8b9) {
                        (_0x4f81b['mType'] = 0x2, _0x4f81b['mGameName'] = _0x13d8b9, null == _0x4f81b['mSelf']) && ((Laya['Browser']['onMiniGame'] && (_0x4f81b['mPhone'] = wx['getSystemI' + 'nfoSync']()), Laya['Browser']['onMiniGame']) && ((_0x4f81b['mPhone']['model']['indexOf']('iPhone\x20X') >= 0x0 || Number(_0x4f81b['mPhone']['screenHeig' + 'ht']) >= 0x32c) && (_0x4f81b['iphoneX'] = !0x0), _0x4f81b['mWxVer'] = _0x4f81b['mPhone']['SDKVersion']), (_0x4f81b['mSelf'] = new _0x4f81b())['x'] = 0x2 == _0x4f81b['mType'] ? Laya['stage']['width'] + 0xa : -Laya['stage']['width'] - 0xa, _0x4f81b['mSelf']['zOrder'] = 0x9, _0x4f81b['mSelf']['visible'] = !0x1, _0x4f81b['mSelf']['onInit_GoG' + 'ame'](), Laya['stage']['addChild'](_0x4f81b['mSelf']), _0x4f81b['mMoreList'] = _0x3c82d0, _0x4f81b['InitData'](), _0x4f81b['mSelf']['onInit'](), console['log']('InitServer' + 'ListEx....' + '..........' + '.'));
                    }, _0x4f81b['InitData'] = function () {
                        _0x4f81b['mGroupList'] = [];
                        for (var _0xa8d997 = null, _0x216ce6 = 0x0; _0x216ce6 < _0x4f81b['mMoreList']['length']; ++_0x216ce6) {
                            if (void 0x0 == _0x4f81b['mMoreList'][_0x216ce6]['groupid'])
                                return;
                            _0xa8d997 != _0x4f81b['mMoreList'][_0x216ce6]['groupid'] && (_0x4f81b['mGroupList']['push']([]), _0xa8d997 = _0x4f81b['mMoreList'][_0x216ce6]['groupid']), _0x4f81b['mGroupList'][_0x4f81b['mGroupList']['length'] - 0x1]['push'](_0x4f81b['mMoreList'][_0x216ce6]);
                        }
                        console['log']('InitGroup\x20' + ':\x20', _0x4f81b['mGroupList']);
                    }, _0x4f81b['ShowList'] = function (_0x19eada, _0x2781db, _0x51e45f, _0x36ee83, _0x3c4d2e, _0x5c98af, _0x4ea906) {
                        if (_0x4f81b['mCloseHand' + 'ler'] = _0x3c4d2e, _0x4f81b['mJumpHandl' + 'e'] = _0x4ea906, _0x51e45f['length'] > 0x0 && (_0x4f81b['mJumpWrite'] = _0x51e45f), console['log']('MG\x20:\x20', _0x36ee83, _0x51e45f, _0x2781db), _0x36ee83['length'] > 0x0) {
                            for (var _0x52198e = !0x1, _0x5728b9 = 0x0; _0x5728b9 < _0x19eada['length']; ++_0x5728b9) {
                                if ((_0x496116 = (_0x30b18b = _0x19eada[_0x5728b9])['appid']['toUpperCas' + 'e']()) == (_0x347cd8 = _0x36ee83['trim']()['toUpperCas' + 'e']())) {
                                    if (0x3 == _0x30b18b['jump_type'])
                                        return console['log']('MG\x20:\x20GoToJ' + 'ump_3', _0x36ee83), _0x52198e = !0x0, void _0x4f81b['jumpToGame' + '_3'](_0x30b18b, function () {
                                            _0x4f81b['ShowList3'](_0x19eada, _0x2781db, _0x36ee83, _0x3c4d2e, _0x5c98af);
                                        }, function () {
                                            null != _0x4f81b['mCloseHand' + 'ler'] && _0x4f81b['mCloseHand' + 'ler']['run']();
                                        });
                                    break;
                                }
                            }
                            if (console['log']('MG\x20:\x20', _0x36ee83, _0x52198e), 0x0 == _0x52198e) {
                                if (!Laya['Browser']['onIOS'])
                                    for (_0x5728b9 = 0x0; _0x5728b9 < _0x51e45f['length']; ++_0x5728b9) {
                                        var _0x496116 = _0x51e45f[_0x5728b9]['toUpperCas' + 'e'](), _0x347cd8 = _0x36ee83['trim']()['toUpperCas' + 'e']();
                                        if (_0x496116 == _0x347cd8) {
                                            for (var _0x16f6ee = {}, _0x5cf557 = 0x0; _0x5cf557 < _0x19eada['length']; ++_0x5cf557) {
                                                var _0xa2dbc1 = _0x19eada[_0x5cf557];
                                                if (_0xa2dbc1['appid']['toUpperCas' + 'e']() == _0x36ee83['trim']()['toUpperCas' + 'e']()) {
                                                    _0x16f6ee = _0xa2dbc1;
                                                    break;
                                                }
                                            }
                                            _0x52198e = !0x0;
                                            var _0x30b18b = {};
                                            _0x30b18b['id'] = _0x16f6ee['id'], _0x30b18b['path'] = '', _0x30b18b['param'] = _0x16f6ee['param'], _0x30b18b['appid'] = '', _0x30b18b['name'] = '', _0x30b18b['box_appid'] = _0x36ee83, _0x30b18b['box_path'] = 'pages/inde' + 'x/index?', console['log']('MG\x20:\x20ToJum' + 'p3\x20:\x20', _0x30b18b), _0x4f81b['jumpToGame' + '_3'](_0x30b18b, function () {
                                                _0x4f81b['ShowList3'](_0x19eada, _0x2781db, _0x36ee83, _0x3c4d2e, _0x5c98af);
                                            }, function () {
                                                null != _0x4f81b['mCloseHand' + 'ler'] && _0x4f81b['mCloseHand' + 'ler']['run']();
                                            });
                                        }
                                    }
                                0x0 == _0x52198e && _0x4f81b['ShowList3'](_0x19eada, _0x2781db, _0x36ee83, _0x3c4d2e, _0x5c98af);
                            }
                        } else
                            _0x4f81b['ShowList3'](_0x19eada, _0x2781db, _0x36ee83, _0x3c4d2e, _0x5c98af);
                    }, _0x4f81b['ShowList3'] = function (_0x384622, _0x338baf, _0x3bbc1a, _0x31bc6a, _0xf2a48a) {
                        if (void 0x0 === _0xf2a48a && (_0xf2a48a = 0x9), Laya['Browser']['onMiniGame'] && wx['showLoadin' + 'g']({
                                'title': '资源加载中',
                                'mask': !0x0
                            }), null == _0x4f81b['mSelf'] ? _0x384622['length'] > 0x0 && _0x4f81b['InitServer' + 'ListEx'](_0x384622, _0x338baf) : Laya['timer']['once'](0x12c, _0x4f81b['mSelf'], _0x4f81b['mSelf']['latterLoad' + 'icon2'], [], !0x0), null != _0x4f81b['mSelf']) {
                            _0x4f81b['iphoneX'] && (_0x4f81b['mSelf']['mTitle']['top'] = 0x3c, _0x4f81b['mSelf']['mPanel']['top'] = _0x4f81b['mSelf']['mTitle']['top'] + 0x64);
                            var _0x33eeef = _0x4f81b['mSelf']['getMenuBut' + 'tonTop_Cen' + 'terPoint']();
                            _0x33eeef['x'] > 0x0 ? (_0x4f81b['mSelf']['mTitle']['top'] = _0x33eeef['x'] + _0x33eeef['y'] / 0x2 - _0x4f81b['mSelf']['mTitle']['height'] / 0x2, _0x4f81b['mSelf']['mPanel']['top'] = _0x4f81b['mSelf']['mTitle']['top'] + 0x64, console['log']('use\x20getMen' + 'uButtonTop' + '_CanterPoi' + 'nt\x20.\x20', _0x33eeef)) : console['log']('no\x20use\x20get' + 'MenuButton' + 'Top_Canter' + 'Point\x20.\x20', _0x33eeef), _0x4f81b['mSelf']['mShowGameA' + 'ppid'] = _0x3bbc1a, _0x4f81b['mSelf']['zOrder'] = _0xf2a48a, _0x4f81b['mSelf']['visible'] = !0x0, _0x4f81b['mSelf']['ShowAllGam' + 'es2'](), _0x4f81b['checkLoadI' + 'conCount']();
                        }
                    }, _0x4f81b['checkLoadI' + 'conCount'] = function () {
                        _0x4f81b['latterRunS' + 'howTween']();
                    }, _0x4f81b['latterRunS' + 'howTween'] = function () {
                        Laya['Browser']['onMiniGame'] && wx['hideLoadin' + 'g'](), Laya['timer']['callLater'](_0x4f81b['mSelf'], function () {
                            0x2 == _0x4f81b['mType'] ? (_0x4f81b['mSelf']['x'] = Laya['stage']['width'] + 0xa, Laya['Tween']['to'](_0x4f81b['mSelf'], { 'x': 0x0 }, 0x15e, null, new Laya['Handler'](this, function () {
                                _0x4f81b['mSelf']['ShowGameAp' + 'p']();
                            }))) : (_0x4f81b['mSelf']['x'] = -Laya['stage']['width'] - 0xa, Laya['Tween']['to'](_0x4f81b['mSelf'], { 'x': 0x0 }, 0x15e, null, new Laya['Handler'](this, function () {
                                _0x4f81b['mSelf']['ShowGameAp' + 'p']();
                            })));
                        });
                    }, _0x4f81b['GetIndexLi' + 'st'] = function (_0x174dd7) {
                        for (var _0x35b922 = [], _0x537c61 = 0x0; _0x537c61 < _0x174dd7['length']; ++_0x537c61)
                            0x1 == Number(_0x174dd7[_0x537c61]['show_index']) && String(_0x174dd7[_0x537c61]['url_btn'])['toString']()['length'] > 0xa && String(_0x174dd7[_0x537c61]['url_result'])['toString']()['length'] > 0xa && _0x35b922['push'](_0x174dd7[_0x537c61]);
                        return _0x35b922;
                    }, _0x4f81b['GetIndexRa' + 'ndom'] = function (_0x26c2dd) {
                        var _0x280c5b = _0x4f81b['GetIndexLi' + 'st'](_0x26c2dd);
                        if (_0x280c5b['length'] > 0x0) {
                            var _0x2e9999 = _0x280c5b[_0x4f81b['getRandom'](0x0, _0x280c5b['length'] - 0x1)];
                            if (void 0x0 != _0x2e9999)
                                return _0x2e9999;
                        }
                        return null;
                    }, _0x4f81b['GetIndexRa' + 'ndomList'] = function (_0x4a0e49, _0x225f6c) {
                        var _0x2adf60 = [], _0x22fc70 = _0x4f81b['GetIndexLi' + 'st'](_0x4a0e49);
                        if (_0x22fc70['length'] > 0x0)
                            for (; _0x225f6c > 0x0 && _0x22fc70['length'] > 0x0;) {
                                var _0x13b6c9 = _0x22fc70['splice'](_0x4f81b['getRandom'](0x0, _0x22fc70['length'] - 0x1), 0x1);
                                _0x2adf60['push'](_0x13b6c9[0x0]), _0x225f6c--;
                            }
                        return _0x2adf60;
                    }, _0x4f81b['CloseList'] = function () {
                        null != _0x4f81b['mSelf'] && (0x2 == _0x4f81b['mType'] ? Laya['Tween']['to'](_0x4f81b['mSelf'], { 'x': Laya['stage']['width'] + 0xa }, 0x1a4, null, new Laya['Handler'](this, function () {
                            _0x4f81b['mSelf']['visible'] = !0x1, null != _0x4f81b['mCloseHand' + 'ler'] && (_0x4f81b['mCloseHand' + 'ler']['once'] = !0x0, _0x4f81b['mCloseHand' + 'ler']['run'](), _0x4f81b['mCloseHand' + 'ler'] = null);
                        })) : Laya['Tween']['to'](_0x4f81b['mSelf'], { 'x': -Laya['stage']['width'] - 0xa }, 0x1a4, null, new Laya['Handler'](this, function () {
                            _0x4f81b['mSelf']['visible'] = !0x1, null != _0x4f81b['mCloseHand' + 'ler'] && (_0x4f81b['mCloseHand' + 'ler']['once'] = !0x0, _0x4f81b['mCloseHand' + 'ler']['run'](), _0x4f81b['mCloseHand' + 'ler'] = null);
                        })));
                    }, _0x4f81b['prototype']['onInit_GoG' + 'ame'] = function () {
                        var _0x5011dd = this;
                        if (null == this['mGoGame']) {
                            this['mGoGame'] = new Laya['Image'](), this['mGoGame']['size'](this['width'], this['height']), this['mGoGame']['pos'](0x0, 0x0);
                            var _0x4cff39 = new Laya['Label']();
                            _0x4cff39['left'] = 0x0, _0x4cff39['right'] = 0x0, _0x4cff39['top'] = 0x0, _0x4cff39['bottom'] = 0x0, _0x4cff39['bgColor'] = '#000000', _0x4cff39['alpha'] = 0.5, this['mGoGame']['addChild'](_0x4cff39), _0x4cff39['on'](Laya['Event']['CLICK'], _0x4cff39, function () {
                                _0x5011dd['mGoGame']['visible'] = !0x1;
                            });
                            var _0x435151 = new Laya['Image']();
                            _0x435151['name'] = 'GameNameBa' + 'ck', _0x435151['size'](0x226, 0x2a8), _0x435151['mouseEnabl' + 'ed'] = !0x0, _0x435151['mouseThrou' + 'gh'] = !0x1, _0x435151['pos']((this['width'] - _0x435151['width']) / 0x2, (this['height'] - _0x435151['height']) / 0x2), _0x435151['skin'] = _0x4f81b['cdnface'] + ('main/bg.pn' + 'g'), this['mGoGame']['addChild'](_0x435151), _0x4cff39['on'](Laya['Event']['CLICK'], _0x4cff39, function () {
                            });
                            var _0x3fe4af = new Laya['Image']();
                            _0x3fe4af['name'] = 'StarBack', _0x3fe4af['skin'] = _0x4f81b['cdnface'] + ('main/popup' + '_share_sta' + 'r.png'), _0x3fe4af['size'](0x1ea, 0x10f), _0x3fe4af['centerX'] = 0x0, _0x3fe4af['y'] = 0x1e, _0x435151['addChild'](_0x3fe4af), this['mIconMax'] = new Laya['Image'](), this['mIconMax']['name'] = 'IconBack', this['mIconMax']['skin'] = _0x4f81b['cdnface'] + ('main/bk2.p' + 'ng'), this['mIconMax']['size'](0xb4, 0xb4), this['mIconMax']['centerX'] = 0x0, this['mIconMax']['centerY'] = 0xf, _0x3fe4af['addChild'](this['mIconMax']);
                            var _0x2a4ab9 = new Laya['Image']();
                            _0x2a4ab9['pos'](0x0, 0x0), _0x2a4ab9['size'](0xb4, 0xb4), _0x2a4ab9['skin'] = _0x4f81b['cdnface'] + ('main/180s.' + 'png'), this['mIconMax']['addChild'](_0x2a4ab9), this['mIconName'] = new Laya['Label'](), this['mIconName']['size'](0x1ea, 0x28), this['mIconName']['centerX'] = 0x0, this['mIconName']['y'] = _0x3fe4af['y'] + _0x3fe4af['height'] + 0xa, this['mIconName']['align'] = 'center', this['mIconName']['fontSize'] = 0x24, this['mIconName']['color'] = '#332E4D', this['mIconName']['bold'] = !0x0, _0x435151['addChild'](this['mIconName']), this['mIconTips'] = new Laya['Label'](), this['mIconTips']['size'](0x1d6, 0x50), this['mIconTips']['centerX'] = 0x0, this['mIconTips']['y'] = _0x3fe4af['y'] + _0x3fe4af['height'] + 0x46, this['mIconTips']['align'] = 'center', this['mIconTips']['fontSize'] = 0x1a, this['mIconTips']['color'] = '#A1A1B3', this['mIconTips']['bold'] = !0x1, this['mIconTips']['wordWrap'] = !0x0, this['mIconTips']['leading'] = 0x5, _0x435151['addChild'](this['mIconTips']), this['mIconGoGam' + 'e'] = new Laya['Image'](), this['mIconGoGam' + 'e']['skin'] = _0x4f81b['cdnface'] + ('main/popup' + '_btn_begin' + '.png'), this['mIconGoGam' + 'e']['size'](0x168, 0x50), this['mIconGoGam' + 'e']['centerX'] = 0x0, this['mIconGoGam' + 'e']['y'] = this['mIconTips']['y'] + this['mIconTips']['height'] + 0x2d, _0x435151['addChild'](this['mIconGoGam' + 'e']), this['mIconBotto' + 'm'] = new Laya['Label'](), this['mIconBotto' + 'm']['size'](0x1d6, 0x50), this['mIconBotto' + 'm']['centerX'] = 0x0, this['mIconBotto' + 'm']['y'] = this['mIconGoGam' + 'e']['y'] + this['mIconGoGam' + 'e']['height'] + 0x14, this['mIconBotto' + 'm']['align'] = 'center', this['mIconBotto' + 'm']['fontSize'] = 0x18, this['mIconBotto' + 'm']['color'] = '#8A91E6', this['mIconBotto' + 'm']['text'] = '和好友一起玩吧', _0x435151['addChild'](this['mIconBotto' + 'm']);
                            var _0x27a3a8 = new Laya['Image']();
                            _0x27a3a8['size'](0x64, 0x64), _0x27a3a8['right'] = 0x0, _0x27a3a8['top'] = 0x0, _0x4f81b['registImgB' + 'tnClick'](_0x27a3a8, new Laya['Handler'](this, function (_0x4f927f) {
                                _0x4f927f['stopPropag' + 'ation'](), _0x5011dd['mGoGame']['visible'] = !0x1;
                            }));
                            var _0x4e491d = new Laya['Image']();
                            _0x4e491d['name'] = 'IconBack', _0x4e491d['skin'] = _0x4f81b['cdnface'] + ('main/close' + '.png'), _0x4e491d['size'](0x1e, 0x1e), _0x4e491d['right'] = 0x14, _0x4e491d['top'] = 0x14, _0x435151['addChild'](_0x4e491d), _0x435151['addChild'](_0x27a3a8), _0x4f81b['registImgB' + 'tnClick'](this['mIconGoGam' + 'e'], new Laya['Handler'](this, function (_0x52cb29) {
                                _0x52cb29['stopPropag' + 'ation'](), _0x5011dd['jumpToGame' + 'FromData'](_0x5011dd['mIconJumpD' + 'ata']), _0x5011dd['mGoGame']['visible'] = !0x1;
                            })), this['mGoGame']['visible'] = !0x1, this['addChild'](this['mGoGame']);
                        }
                    }, _0x4f81b['prototype']['onInit'] = function () {
                        if (0x0 == _0x4f81b['mMoreList']['length'])
                            return _0x4f81b['mSelf']['visible'] = !0x1, void console['log']('No\x20More\x20Ga' + 'meList\x20...' + '\x20');
                        this['mPanel']['vScrollBar' + 'Skin'] = '', this['mPanel']['hScrollBar' + 'Skin'] = void 0x0, this['mBack']['skin'] = _0x4f81b['cdnface'] + ('main/head_' + 'btn_back1.' + 'png'), this['mGameName']['text'] = _0x4f81b['mGameName'], _0x4f81b['registImgB' + 'tnClick'](this['mBack'], new Laya['Handler'](this, function (_0x42df42) {
                            _0x42df42['stopPropag' + 'ation'](), _0x4f81b['CloseList']();
                        })), _0x4f81b['registImgB' + 'tnClick'](this['mBack2'], new Laya['Handler'](this, function (_0x42d621) {
                            _0x42d621['stopPropag' + 'ation'](), _0x4f81b['CloseList']();
                        }));
                    }, _0x4f81b['prototype']['AddOneGrou' + 'pPage'] = function () {
                        if (this['mNextShowG' + 'roup'] < _0x4f81b['mGroupList']['length']) {
                            var _0x1f3afe = new _0x2c1e9f();
                            _0x1f3afe['initCode'](), this['mPanel']['addChild'](_0x1f3afe);
                            var _0x31fec1 = _0x4f81b['mGroupList'][this['mNextShowG' + 'roup']];
                            if (_0x1f3afe['y'] = this['mStartGrou' + 'pY'], _0x1f3afe['x'] = 0x0, _0x1f3afe['height'] = this['mPanel']['height'], this['init_page_' + 'game'](_0x1f3afe, _0x31fec1), this['mStartGrou' + 'pY'] += _0x1f3afe['height'], console['log']('changeHand' + 'ler\x20:\x20', this['mPanel']['vScrollBar']['max'], this['mNextShowG' + 'roup'], _0x4f81b['mGroupList']['length']), this['mNextShowG' + 'roup'] == _0x4f81b['mGroupList']['length'] - 0x1) {
                                var _0x420a2b = new Laya['Label']();
                                _0x420a2b['text'] = '别扯了，已经到底了.' + '..', _0x420a2b['size'](0x1d6, 0x12c), _0x420a2b['centerX'] = 0x0, _0x420a2b['y'] = _0x1f3afe['y'] + _0x1f3afe['height'] + 0xa, _0x420a2b['align'] = 'center', _0x420a2b['fontSize'] = 0x18, _0x420a2b['color'] = '#8A91E6', this['mPanel']['addChild'](_0x420a2b);
                            }
                            if (++this['mNextShowG' + 'roup'], _0x1f3afe['y'] + _0x1f3afe['height'] > 0x5dc)
                                return !0x1;
                        }
                        return !0x0;
                    }, _0x4f81b['prototype']['ShowAllGam' + 'es'] = function () {
                        if (0x0 == this['mNextShowG' + 'roup']) {
                            for (this['mPanel']['removeChil' + 'dren'](), this['mStartGrou' + 'pY'] = 0x0, console['log']('start\x20:\x20', this['mNextShowG' + 'roup'], _0x4f81b['mGroupList']['length']), this['mNextShowG' + 'roup'] = 0x0; this['mNextShowG' + 'roup'] < _0x4f81b['mGroupList']['length'];)
                                this['AddOneGrou' + 'pPage']();
                            this['mPanel']['refresh']();
                        }
                    }, _0x4f81b['prototype']['ShowAllGam' + 'es2'] = function () {
                        0x0 == this['mNextShowG' + 'roup'] && (this['mPanel']['removeChil' + 'dren'](), this['mStartGrou' + 'pY'] = 0x0, Laya['timer']['once'](0xc8, this, this['ShowNextGr' + 'oup']));
                    }, _0x4f81b['prototype']['ShowNextGr' + 'oup'] = function () {
                        this['mNextShowG' + 'roup'] < _0x4f81b['mGroupList']['length'] ? (this['AddOneGrou' + 'pPage'](), this['mPanel']['refresh'](), Laya['timer']['once'](0x12c, this, this['ShowNextGr' + 'oup']), console['log']('show\x20group' + '\x20:\x20', this['mNextShowG' + 'roup'], _0x4f81b['mGroupList']['length'])) : console['log']('group\x20show' + '\x20over\x20.');
                    }, _0x4f81b['prototype']['ShowGameAp' + 'p'] = function () {
                        this['mIconJumpD' + 'ata'] = null;
                        for (var _0x3d12ba = 0x0; _0x3d12ba < _0x4f81b['mMoreList']['length']; ++_0x3d12ba) {
                            if (_0x4f81b['mMoreList'][_0x3d12ba]['appid']['trim']()['toUpperCas' + 'e']() == _0x4f81b['mSelf']['mShowGameA' + 'ppid']['trim']()['toUpperCas' + 'e']()) {
                                this['mIconJumpD' + 'ata'] = _0x4f81b['mMoreList'][_0x3d12ba];
                                break;
                            }
                        }
                        null != this['mIconJumpD' + 'ata'] ? (this['mIconMax']['skin'] = this['mIconJumpD' + 'ata']['url_icon'], this['mIconName']['text'] = this['mIconJumpD' + 'ata']['name'], this['mIconTips']['text'] = this['mIconJumpD' + 'ata']['msg'], this['mGoGame']['visible'] = !0x0) : null != this['mGoGame'] && (this['mGoGame']['visible'] = !0x1);
                    }, _0x4f81b['prototype']['drawCircle' + 'Rect'] = function (_0x36bb57, _0x4a3491, _0x401dfc, _0x17eb12, _0x5e97b6, _0x53e6d6, _0x430493, _0x329db0, _0xb867e3) {
                        void 0x0 === _0x329db0 && (_0x329db0 = 0x0), void 0x0 === _0xb867e3 && (_0xb867e3 = '');
                        var _0x3a2dde = [
                            [
                                'moveTo',
                                _0x53e6d6,
                                0x0
                            ],
                            [
                                'arcTo',
                                _0x17eb12,
                                0x0,
                                _0x17eb12,
                                _0x53e6d6,
                                _0x53e6d6
                            ],
                            [
                                'arcTo',
                                _0x17eb12,
                                _0x5e97b6,
                                _0x17eb12 - _0x53e6d6,
                                _0x5e97b6,
                                _0x53e6d6
                            ],
                            [
                                'arcTo',
                                0x0,
                                _0x5e97b6,
                                0x0,
                                _0x5e97b6 - _0x53e6d6,
                                _0x53e6d6
                            ],
                            [
                                'arcTo',
                                0x0,
                                0x0,
                                _0x53e6d6,
                                0x0,
                                _0x53e6d6
                            ]
                        ];
                        _0x329db0 > 0x0 ? _0x36bb57['drawPath'](_0x4a3491, _0x401dfc, _0x3a2dde, { 'fillStyle': _0x430493 }, {
                            'strokeStyle': _0xb867e3,
                            'lineWidth': _0x329db0['toString']()
                        }) : _0x36bb57['drawPath'](_0x4a3491, _0x401dfc, _0x3a2dde, { 'fillStyle': _0x430493 });
                    }, _0x4f81b['prototype']['init_page_' + 'game'] = function (_0x20e22c, _0x50aa80) {
                        _0x20e22c['mName']['text'] = _0x50aa80[0x0]['groupname'];
                        var _0x59b994 = _0x50aa80[0x0]['groupicon'];
                        if (_0x59b994['length'] > 0xa ? (_0x20e22c['mNoIcon']['visible'] = !0x1, _0x20e22c['mIcon']['visible'] = !0x0, _0x20e22c['mIcon']['skin'] = _0x59b994, _0x20e22c['mName']['x'] = _0x20e22c['mIcon']['x'] + _0x20e22c['mIcon']['width'] + 0xa) : (_0x20e22c['mNoIcon']['visible'] = !0x0, _0x20e22c['mIcon']['visible'] = !0x1, _0x20e22c['mName']['x'] = _0x20e22c['mIcon']['x']), Laya['stage']['width'] > Laya['stage']['height']) {
                            var _0x1ad1f1 = Laya['stage']['width'];
                            0x1 == _0x4f81b['iphoneX'] && (_0x1ad1f1 = Laya['stage']['width'] - 0x3c);
                            var _0x2206da = Math['floor'](_0x1ad1f1 / 0xb6);
                            _0x20e22c['width'] = Laya['stage']['width'], _0x20e22c['mList']['width'] = 0xb6 * _0x2206da, _0x20e22c['mList']['x'] = (Laya['stage']['width'] - _0x20e22c['mList']['width']) / 0x2, _0x2673b4 = _0x20e22c['mList']['x'] - _0x20e22c['mNoIcon']['x'], (_0x20e22c['mNoIcon']['x'] += _0x2673b4, _0x20e22c['mIcon']['x'] += _0x2673b4, _0x20e22c['mName']['x'] += _0x2673b4, _0x20e22c['mList']['repeatX'] = _0x2206da, _0x20e22c['mList']['repeatY'] = Math['ceil'](_0x50aa80['length'] / _0x2206da));
                        } else {
                            if (Laya['stage']['width'] <= 0x2d8) {
                                _0x20e22c['mList']['repeatX'] = 0x3, _0x20e22c['mList']['repeatY'] = Math['ceil'](_0x50aa80['length'] / 0x3), _0x20e22c['width'] = Laya['stage']['width'], _0x20e22c['mList']['width'] = 0x222, _0x20e22c['mList']['x'] = (Laya['stage']['width'] - _0x20e22c['mList']['width']) / 0x2;
                                var _0x2673b4 = _0x20e22c['mList']['x'] - _0x20e22c['mNoIcon']['x'];
                                _0x20e22c['mNoIcon']['x'] += _0x2673b4, _0x20e22c['mIcon']['x'] += _0x2673b4, _0x20e22c['mName']['x'] += _0x2673b4;
                            } else
                                _0x20e22c['mList']['repeatX'] = 0x4, _0x20e22c['mList']['repeatY'] = Math['ceil'](_0x50aa80['length'] / 0x4);
                        }
                        _0x20e22c['height'] = 0x46 + 0xfa * _0x20e22c['mList']['repeatY'], _0x20e22c['mList']['selectEnab' + 'le'] = !0x0, _0x20e22c['mList']['renderHand' + 'ler'] = new Laya['Handler'](this, this['onListRend' + 'er']), _0x20e22c['mList']['mouseHandl' + 'er'] = new Laya['Handler'](this, this['listmouse']), _0x20e22c['mList']['array'] = _0x50aa80;
                    }, _0x4f81b['getRandom'] = function (_0x1d5fd8, _0xa1cb8a) {
                        return Math['round'](Math['random']() * (_0xa1cb8a - _0x1d5fd8)) + _0x1d5fd8;
                    }, _0x4f81b['prototype']['onListRend' + 'er'] = function (_0x4d89e1, _0x1a0629) {
                        var _0x51a3b9 = _0x4d89e1['dataSource'], _0x375ed8 = _0x4d89e1['getChildBy' + 'Name']('GameName'), _0x43f064 = _0x4d89e1['getChildBy' + 'Name']('PlayNum'), _0x2f1851 = _0x4d89e1['getChildBy' + 'Name']('mBack2');
                        _0x375ed8['text'] = _0x51a3b9['name'];
                        var _0xf8f9ac = Number(_0x51a3b9['base']);
                        if (void 0x0 == _0x51a3b9['basenum'] || 0x0 == Number(_0x51a3b9['basenum'])) {
                            var _0x449f1d = _0xf8f9ac - _0xf8f9ac / 0xa, _0x4cd909 = _0xf8f9ac + _0xf8f9ac / 0xa;
                            _0x51a3b9['basenum'] = Math['floor'](_0x4f81b['getRandom'](_0x449f1d, _0x4cd909) / 0x2710);
                        }
                        _0x43f064['text'] = _0x51a3b9['basenum'] + '万人在玩', _0x4f81b['mListSrcs']['push']([
                            _0x2f1851,
                            _0x51a3b9['url_icon'] + '?t=' + _0x51a3b9['updated_ti' + 'me']
                        ]), 0x1 == _0x4f81b['mListSrcs']['length'] && Laya['timer']['once'](0x12c, this, this['latterLoad' + 'icon2'], [], !0x0), _0x4f81b['registImgB' + 'tnClick'](_0x2f1851, null, this);
                    }, _0x4f81b['prototype']['latterLoad' + 'icon2'] = function () {
                        if (Laya['loader']['retryNum'] = 0xa, (0x0 != _0x4f81b['mListSrcs']['length'] || 0x0 != _0x4f81b['mListSrcs2']['length']) && 0x0 != _0x4f81b['mSelf']['visible']) {
                            var _0x5f495c = null, _0x5da583 = '';
                            if (_0x4f81b['mListSrcs']['length'] > 0x0)
                                _0x5f495c = (_0x2fdb07 = _0x4f81b['mListSrcs']['shift']())[0x0], _0x5da583 = _0x2fdb07[0x1], _0x4f81b['mListSrcs2']['push']([
                                    _0x5f495c,
                                    _0x5da583
                                ]);
                            else {
                                if (!(_0x4f81b['mReloadCou' + 'nt'] <= 0x1 && _0x4f81b['mListSrcs2']['length'] > 0x0))
                                    return;
                                _0x4f81b['mListSrcs'] = _0x4f81b['mListSrcs2'], _0x4f81b['mListSrcs2'] = [], _0x4f81b['mReloadCou' + 'nt']++;
                                var _0x168916 = _0x4f81b['mListSrcs']['length'];
                                console['log']('reload\x20cou' + 'nt\x20=\x20', _0x168916);
                                var _0x2fdb07 = _0x4f81b['mListSrcs']['shift']();
                                _0x5f495c = _0x2fdb07[0x0], _0x5da583 = _0x2fdb07[0x1], _0x4f81b['mListSrcs2']['push']([
                                    _0x5f495c,
                                    _0x5da583
                                ]);
                            }
                            if (0x0 == _0x5f495c['numChildre' + 'n']) {
                                var _0x220184 = new Laya['Image']();
                                _0x220184['pos'](0x0, 0x0), _0x220184['size'](0x96, 0x96), _0x220184['skin'] = _0x4f81b['cdnface'] + ('main/150s.' + 'png'), _0x5f495c['addChild'](_0x220184);
                            }
                            _0x5f495c['loadImage'](_0x5da583, new Laya['Handler'](this, function () {
                                for (var _0x2b9e63 = [], _0x322f5d = 0x0; _0x322f5d < _0x4f81b['mListSrcs2']['length']; ++_0x322f5d)
                                    _0x4f81b['mListSrcs2'][_0x322f5d][0x1] != _0x5da583 && _0x2b9e63['push'](_0x4f81b['mListSrcs2'][_0x322f5d]);
                                _0x4f81b['mListSrcs2'] = _0x2b9e63, _0x4f81b['mLoadCount']++, _0x4f81b['mSelf']['latterLoad' + 'icon2'](), Laya['timer']['once'](0x7d0, this, this['latterLoad' + 'icon2'], [], !0x0);
                            })), Laya['timer']['once'](0x7d0, this, this['latterLoad' + 'icon2'], [], !0x0);
                        }
                    }, _0x4f81b['prototype']['latterLoad' + 'icon'] = function (_0x6fdaf7, _0x225a49) {
                        if (Laya['loader']['retryNum'] = 0xa, _0x6fdaf7['skin'] = _0x225a49, _0x6fdaf7['size'](0x96, 0x96), 0x0 == _0x6fdaf7['numChildre' + 'n']) {
                            var _0x245f57 = new Laya['Image']();
                            _0x245f57['pos'](0x0, 0x0), _0x245f57['size'](0x96, 0x96), _0x245f57['skin'] = _0x4f81b['cdnface'] + ('main/150s.' + 'png'), _0x6fdaf7['addChild'](_0x245f57);
                        }
                    }, _0x4f81b['prototype']['listmouse'] = function (_0x4106ee, _0x58c5a1) {
                        if (_0x4106ee['type'] == Laya['Event']['CLICK']) {
                            var _0x444851 = _0x4106ee['currentTar' + 'get']['dataSource'];
                            'mBack2' == _0x4106ee['target']['name'] && (_0x4106ee['stopPropag' + 'ation'](), this['jumpToGame' + 'FromData'](_0x444851));
                        }
                    }, _0x4f81b['prototype']['isJumpWrit' + 'eList'] = function (_0x45c472) {
                        for (var _0x3bb756 = !0x1, _0x5b7bfa = 0x0; _0x5b7bfa < _0x4f81b['mJumpWrite']['length']; ++_0x5b7bfa) {
                            _0x4f81b['mJumpWrite'][_0x5b7bfa]['trim']()['toUpperCas' + 'e']() == _0x45c472['trim']()['toUpperCas' + 'e']() && (_0x3bb756 = !0x0);
                        }
                        return _0x3bb756;
                    }, _0x4f81b['prototype']['jumpToGame' + 'FromData'] = function (_0x5ad740) {
                        if (null != _0x5ad740 && Laya['Browser']['onMiniGame']) {
                            var _0x23d8c4 = _0x5ad740['path'], _0x13eec4 = _0x5ad740['param'], _0x3d53b5 = _0x5ad740['appid'], _0x19ca5b = _0x3d53b5, _0x5661c0 = _0x3d53b5['split']('?');
                            0x2 == _0x5661c0['length'] && (_0x19ca5b = _0x5661c0[0x0]);
                            var _0x32be5e = _0x3d53b5['split']('&');
                            0x2 == _0x32be5e['length'] && (_0x19ca5b = _0x32be5e[0x0]);
                            var _0x2e9ddf = Number(_0x5ad740['jump_type']), _0x5ec847 = 'https://tc' + 'dn.wanzhus' + 'hipin.cn/x' + 'cx/set/qrc' + 'ode/' + _0x19ca5b + '.jpg?t=' + _0x5ad740['updated_ti' + 'me'];
                            if (void 0x0 != _0x5ad740['big_url'] && (_0x5ec847 = _0x5ad740['big_url']), console['log']('list\x20click' + '\x20:\x20', _0x5ad740, _0x5ec847), _0x23d8c4['length'] < 0x5 && (_0x23d8c4 = 'pages/inde' + 'x/index'), Laya['Browser']['onMiniGame']) {
                                if (_0x4f81b['mWxVer'] >= '2.2.0') {
                                    var _0x37e13a = function (_0x26367c) {
                                            String(_0x26367c['errMsg'])['indexOf'](':fail\x20canc' + 'el') <= 0x0 ? (wx['previewIma' + 'ge']({ 'urls': [_0x5ec847] }), console['log']('跳转错误：显示二维码' + '：', _0x3d53b5, _0x5ad740['name'], _0x26367c['errMsg']), _0x4f81b['mJumpHandl' + 'e'] && (_0x4f81b['mJumpHandl' + 'e']['args'] = [
                                                0x3,
                                                Number(_0x5ad740['id']),
                                                _0x2e9ddf >= 0x2,
                                                !0x0
                                            ], _0x4f81b['mJumpHandl' + 'e']['run']())) : (console['log']('用户取消：', _0x3d53b5, _0x5ad740['name'], _0x26367c['errMsg']), _0x4f81b['mJumpHandl' + 'e'] && (_0x4f81b['mJumpHandl' + 'e']['args'] = [
                                                0x2,
                                                Number(_0x5ad740['id']),
                                                _0x2e9ddf >= 0x2,
                                                !0x0
                                            ], _0x4f81b['mJumpHandl' + 'e']['run']()));
                                        }, _0x35f6a1 = function (_0x220ab2) {
                                            console['log']('跳转成功', _0x3d53b5, _0x5ad740['name'], _0x220ab2), _0x4f81b['mJumpHandl' + 'e'] && (_0x4f81b['mJumpHandl' + 'e']['args'] = [
                                                0x1,
                                                Number(_0x5ad740['id']),
                                                _0x2e9ddf >= 0x2,
                                                !0x0
                                            ], _0x4f81b['mJumpHandl' + 'e']['run']());
                                        };
                                    if (this['isJumpWrit' + 'eList'](_0x3d53b5))
                                        return wx['navigateTo' + 'MiniProgra' + 'm']({
                                            'appId': _0x3d53b5,
                                            'path': _0x23d8c4 + '?' + _0x13eec4,
                                            'fail': _0x37e13a,
                                            'success': _0x35f6a1
                                        }), void console['log']('在列表中直接跳转：', _0x3d53b5, _0x5ad740['name'], _0x23d8c4);
                                    if (0x0 == _0x2e9ddf)
                                        wx['previewIma' + 'ge']({
                                            'urls': [_0x5ec847],
                                            'success': function (_0x6990a2) {
                                                console['log']('预览图片成功');
                                            }
                                        }), console['log']('二维码显示：', _0x3d53b5, _0x5ad740['name'], _0x2e9ddf), _0x4f81b['mJumpHandl' + 'e'] && (_0x4f81b['mJumpHandl' + 'e']['args'] = [
                                            0x3,
                                            Number(_0x5ad740['id']),
                                            !0x1,
                                            !0x0
                                        ], _0x4f81b['mJumpHandl' + 'e']['run']());
                                    else {
                                        if (0x1 == _0x2e9ddf)
                                            wx['navigateTo' + 'MiniProgra' + 'm']({
                                                'appId': _0x3d53b5,
                                                'path': _0x23d8c4 + '?' + _0x13eec4,
                                                'fail': _0x37e13a,
                                                'success': _0x35f6a1
                                            }), console['log']('直接跳转：', _0x3d53b5, _0x5ad740['name'], _0x23d8c4 + '?' + _0x13eec4);
                                        else {
                                            if (_0x2e9ddf >= 0x2) {
                                                var _0x5d12be = String(_0x5ad740['box_appid']);
                                                if (_0x5d12be['length'] < 0xc)
                                                    wx['navigateTo' + 'MiniProgra' + 'm']({
                                                        'appId': _0x3d53b5,
                                                        'path': _0x23d8c4 + '?' + _0x13eec4,
                                                        'fail': _0x37e13a,
                                                        'success': _0x35f6a1
                                                    }), console['log']('直接跳转：盒子app' + 'id错误', _0x3d53b5, _0x5ad740['name'], _0x23d8c4 + '?' + _0x13eec4, _0x5d12be);
                                                else {
                                                    var _0x444f1a = String(_0x5ad740['box_path']);
                                                    _0x444f1a['length'] < 0x5 ? _0x444f1a = _0x23d8c4['indexOf']('?') < 0x0 ? _0x23d8c4 + '?' + _0x5ad740['param'] : _0x23d8c4 + _0x5ad740['param'] : _0x444f1a['indexOf']('?') < 0x0 ? _0x444f1a += '?' + _0x5ad740['param'] : _0x444f1a += _0x5ad740['param'], _0x444f1a['indexOf']('target=') < 0x0 && (_0x444f1a += '&target=' + _0x3d53b5), wx['navigateTo' + 'MiniProgra' + 'm']({
                                                        'appId': _0x5d12be,
                                                        'path': _0x444f1a,
                                                        'fail': _0x37e13a,
                                                        'success': _0x35f6a1
                                                    }), console['log']('盒子跳转：', _0x3d53b5, _0x5ad740['name'], _0x444f1a, _0x5d12be);
                                                }
                                            }
                                        }
                                    }
                                } else
                                    wx['previewIma' + 'ge']({
                                        'urls': [_0x5ec847],
                                        'success': function (_0x5acd3f) {
                                            console['log']('预览图片成功');
                                        }
                                    }), _0x4f81b['mJumpHandl' + 'e'] && (_0x4f81b['mJumpHandl' + 'e']['args'] = [
                                        0x3,
                                        Number(_0x5ad740['id']),
                                        !0x1,
                                        !0x0
                                    ], _0x4f81b['mJumpHandl' + 'e']['run']()), console['log']('版本不支持。显示二维' + '码', _0x3d53b5, _0x5ad740['name']);
                            } else
                                console['log']('请在微信中测试跳转：', _0x3d53b5, _0x5ad740['name'], _0x23d8c4);
                        }
                    }, _0x4f81b['jumpToGame' + '_3'] = function (_0x4b25cd, _0x1f5b6f, _0xe90d65) {
                        var _0x2a9091 = _0x4b25cd['path'], _0x47d93c = _0x4b25cd['param'], _0x165094 = _0x4b25cd['appid'], _0x37b15d = String(_0x4b25cd['box_appid']);
                        _0x2a9091['length'] < 0x5 && (_0x2a9091 = 'pages/inde' + 'x/index'), 0x0 == _0x47d93c['indexOf']('?') && _0x47d93c['substr'](0x1);
                        var _0x3e6fa8 = String(_0x4b25cd['box_path']);
                        _0x3e6fa8['length'] < 0x5 ? _0x3e6fa8 = _0x2a9091['indexOf']('?') < 0x0 ? _0x2a9091 + '?' + _0x47d93c : _0x2a9091 + _0x47d93c : _0x3e6fa8['indexOf']('?') < 0x0 ? _0x3e6fa8 += '?' + _0x47d93c : _0x3e6fa8 += _0x47d93c, _0x3e6fa8['indexOf']('target=') < 0x0 && (_0x3e6fa8 += '&target=' + _0x165094), (Laya['Browser']['onMiniGame'] && wx['navigateTo' + 'MiniProgra' + 'm']({
                            'appId': _0x37b15d,
                            'path': _0x3e6fa8,
                            'success': function (_0x15d16d) {
                                console['log']('跳转成功', _0x165094, _0x4b25cd['name'], _0x15d16d), null != _0xe90d65 && _0xe90d65(), _0x4f81b['mJumpHandl' + 'e'] && (_0x4f81b['mJumpHandl' + 'e']['args'] = [
                                    0x1,
                                    Number(_0x4b25cd['id']),
                                    !0x1,
                                    !0x1
                                ], _0x4f81b['mJumpHandl' + 'e']['run']());
                            },
                            'fail': function (_0x3b6058) {
                                String(_0x3b6058['errMsg'])['indexOf'](':fail\x20canc' + 'el') <= 0x0 ? (null != _0x1f5b6f && _0x1f5b6f(), _0x4f81b['mJumpHandl' + 'e'] && (_0x4f81b['mJumpHandl' + 'e']['args'] = [
                                    0x0,
                                    Number(_0x4b25cd['id']),
                                    !0x1,
                                    !0x1
                                ], _0x4f81b['mJumpHandl' + 'e']['run']())) : (console['log']('用户取消', _0x165094, _0x4b25cd['name'], _0x3b6058['errMsg']), null != _0xe90d65 && _0xe90d65(), _0x4f81b['mJumpHandl' + 'e'] && (_0x4f81b['mJumpHandl' + 'e']['args'] = [
                                    0x2,
                                    Number(_0x4b25cd['id']),
                                    !0x1,
                                    !0x1
                                ], _0x4f81b['mJumpHandl' + 'e']['run']()));
                            }
                        }), console['log']('直接盒子跳转：', _0x165094, _0x4b25cd['name'], _0x3e6fa8, _0x37b15d));
                    }, _0x4f81b['mSelf'] = null, _0x4f81b['mVer'] = '', _0x4f81b['mGameName'] = '', _0x4f81b['mJumpWrite'] = [], _0x4f81b['mWxVer'] = '', _0x4f81b['mMoreList'] = [], _0x4f81b['mGroupList'] = [], _0x4f81b['mServerUrl'] = '', _0x4f81b['mType'] = 0x0, _0x4f81b['mPhone'] = {}, _0x4f81b['iphoneX'] = !0x1, _0x4f81b['cdnface'] = 'https://tc' + 'dn.wanzhus' + 'hipin.cn/x' + 'cx/more/', _0x4f81b['mListSrcs'] = [], _0x4f81b['mListSrcs2'] = [], _0x4f81b['mReloadCou' + 'nt'] = 0x0, _0x4f81b['mLoadCount'] = 0x0, _0x4f81b['uiView'] = {
                        'type': 'View',
                        'props': {
                            'y': 0x0,
                            'x': 0x0,
                            'width': 0x2ee,
                            'height': 0x536
                        },
                        'child': [
                            {
                                'type': 'Label',
                                'props': {
                                    'top': 0x0,
                                    'right': 0x0,
                                    'left': 0x0,
                                    'bottom': 0x0,
                                    'bgColor': '#ffffff'
                                }
                            },
                            {
                                'type': 'Image',
                                'props': {
                                    'var': 'mTitle',
                                    'right': 0x0,
                                    'left': 0x0,
                                    'height': 0x64
                                },
                                'child': [
                                    {
                                        'type': 'Image',
                                        'props': {
                                            'y': -0x3d,
                                            'x': 0x0,
                                            'width': 0xa6,
                                            'var': 'mBack2',
                                            'height': 0xa1
                                        }
                                    },
                                    {
                                        'type': 'Image',
                                        'props': {
                                            'x': 0x14,
                                            'width': 0x2c,
                                            'var': 'mBack',
                                            'height': 0x2c,
                                            'centerY': 0x0
                                        }
                                    },
                                    {
                                        'type': 'Label',
                                        'props': {
                                            'y': 0x1e,
                                            'var': 'mGameName',
                                            'text': '神手游戏',
                                            'fontSize': 0x28,
                                            'color': '#332E4D',
                                            'centerX': 0x0,
                                            'bold': !0x0
                                        }
                                    }
                                ]
                            },
                            {
                                'type': 'Panel',
                                'props': {
                                    'var': 'mPanel',
                                    'top': 0x64,
                                    'right': 0x0,
                                    'left': 0x0,
                                    'bottom': 0x0
                                }
                            }
                        ]
                    }, _0x4f81b;
                }(Laya['View']);
            _0x5485a6['MoreGame'] = _0x123f1b;
        },
        {}
    ],
    0x17: [
        function (_0x1d207a, _0x322e60, _0x342d9d) {
            'use strict';
            Object['defineProp' + 'erty'](_0x342d9d, '__esModule', { 'value': !0x0 });
            var _0x40facb = _0x1d207a('../Main'), _0x3c2025 = function () {
                    function _0xd99413(_0x36a1de) {
                        this['IS_OPEN'] = !0x1, this['BOX_TEST'] = !0x1, this['GAME_NUM_T' + 'EST'] = !0x1, this['MULTI_ICON' + '_TEST'] = !0x1, this['isEven'] = !0x1, this['isAniTest'] = 0x0;
                        var _0x51d68a = Number(_0x36a1de['uid']);
                        this['isEven'] = _0x51d68a % 0x2 == 0x0;
                        var _0x31e086, _0x2f73c2 = 0x0;
                        _0x40facb['default']['app']['mWX']['mOnOff']['forEach'](function (_0xfa5fe5) {
                            'of_icon_ty' + 'pe' == _0xfa5fe5['key'] && (_0x2f73c2 = Number(_0xfa5fe5['value']), _0x31e086 = Number(JSON['parse'](_0xfa5fe5['param'])['item']));
                        }), 0x0 == _0x2f73c2 ? this['isAniTest'] = _0x51d68a % 0x3 : 0x1 == _0x2f73c2 && (this['isAniTest'] = _0x31e086);
                    }
                    return Object['defineProp' + 'erty'](_0xd99413['prototype'], 'isOpen', {
                        'get': function () {
                            return 0x1 == _0x40facb['default']['app']['mWX']['fhOnoff'] && this['IS_OPEN'];
                        },
                        'enumerable': !0x0,
                        'configurable': !0x0
                    }), Object['defineProp' + 'erty'](_0xd99413['prototype'], 'isBoxTest', {
                        'get': function () {
                            return 0x1 == _0x40facb['default']['app']['mWX']['fhOnoff'] && this['BOX_TEST'];
                        },
                        'enumerable': !0x0,
                        'configurable': !0x0
                    }), Object['defineProp' + 'erty'](_0xd99413['prototype'], 'isGameNumT' + 'est', {
                        'get': function () {
                            return 0x1 == _0x40facb['default']['app']['mWX']['fhOnoff'] && this['GAME_NUM_T' + 'EST'];
                        },
                        'enumerable': !0x0,
                        'configurable': !0x0
                    }), Object['defineProp' + 'erty'](_0xd99413['prototype'], 'isMultiIco' + 'nTest', {
                        'get': function () {
                            return 0x1 == _0x40facb['default']['app']['mWX']['fhOnoff'] && this['MULTI_ICON' + '_TEST'];
                        },
                        'enumerable': !0x0,
                        'configurable': !0x0
                    }), _0xd99413;
                }();
            _0x342d9d['OddEvenTes' + 'tModel'] = _0x3c2025;
        },
        { '../Main': 0xe }
    ],
    0x18: [
        function (_0xe1bc7c, _0xf60e9f, _0x44ffb4) {
            'use strict';
            Object['defineProp' + 'erty'](_0x44ffb4, '__esModule', { 'value': !0x0 });
            var _0x1e9486 = _0xe1bc7c('./MoreGame'), _0x16abcb = _0xe1bc7c('../Main'), _0x51112b = _0xe1bc7c('../script/' + 'MyLikeView' + '2'), _0x43e44c = function () {
                    function _0x3f0ad1() {
                    }
                    return _0x3f0ad1['showBoxPag' + 'e'] = function (_0x3a7e2c, _0x193f90, _0x837d84, _0x571393) {
                        void 0x0 === _0x571393 && (_0x571393 = 0x0), _0x3f0ad1['showBefore']() && _0x1e9486['MoreGame']['ShowList'](_0x193f90, _0x837d84, _0x1e9486['WriteBoxLi' + 'st']['mWriteBox'], _0x3a7e2c, new Laya['Handler'](this, _0x3f0ad1['CloseBox']), _0x571393, new Laya['Handler'](this, _0x3f0ad1['JumpInfo']));
                    }, _0x3f0ad1['showBefore'] = function () {
                        return !0x0;
                    }, _0x3f0ad1['CloseBox'] = function () {
                    }, _0x3f0ad1['JumpInfo'] = function (_0x11828e, _0x264445, _0x3659a6, _0x5f516c) {
                        if (console['log']('跳转结果：', _0x11828e, _0x264445, _0x3659a6, _0x5f516c), _0x3f0ad1['isClickJum' + 'p'] = !0x0, 0x1 == _0x11828e) {
                            console['log']('--\x20允许直跳后\x20-' + '-', _0x16abcb['default']['app']['clickAppId'], _0x16abcb['default']['app']['clickGameI' + 'd'], _0x16abcb['default']['app']['clickFromP' + 'age']);
                            for (_0x6b58fe = 0x0; _0x6b58fe < _0x1e9486['WriteBoxLi' + 'st']['mWriteBox']['length']; ++_0x6b58fe) {
                                if (_0x16abcb['default']['app']['clickAppId']['toUpperCas' + 'e']() == _0x1e9486['WriteBoxLi' + 'st']['mWriteBox'][_0x6b58fe]['toUpperCas' + 'e']()) {
                                    -0x1 == _0x16abcb['default']['app']['clickLikeA' + 'rr']['indexOf'](_0x16abcb['default']['app']['clickGameI' + 'd']) && _0x16abcb['default']['app']['clickLikeA' + 'rr']['push'](String(_0x16abcb['default']['app']['clickGameI' + 'd']));
                                    var _0x10006d = JSON['stringify'](_0x16abcb['default']['app']['clickLikeA' + 'rr']);
                                    _0x16abcb['default']['app']['mWX']['setUserVal' + 'ue']('clickLikeA' + 'rr', _0x10006d), console['log']('--\x20允许直跳后\x20本' + '地保存\x20--', _0x16abcb['default']['app']['clickLikeA' + 'rr']);
                                    break;
                                }
                            }
                        }
                        for (var _0x397b24 = 0x0, _0x54b14d = '', _0x1bf64a = 0x0, _0x40a703 = 0x0, _0x4ededa = 0x1, _0x6b58fe = 0x0; _0x6b58fe < _0x16abcb['default']['app']['mWX']['mGamesBox']['length']; ++_0x6b58fe)
                            Number(_0x16abcb['default']['app']['mWX']['mGamesBox'][_0x6b58fe]['id']) == _0x264445 && (_0x397b24 = Number(_0x16abcb['default']['app']['mWX']['mGamesBox'][_0x6b58fe]['gameid']), _0x54b14d = _0x16abcb['default']['app']['mWX']['mGamesBox'][_0x6b58fe]['name'], _0x1bf64a = Number(_0x16abcb['default']['app']['mWX']['mGamesBox'][_0x6b58fe]['jump_type']), _0x40a703 = Number(_0x16abcb['default']['app']['mWX']['mGamesBox'][_0x6b58fe]['appid']), 0x1 == _0x16abcb['default']['app']['mWX']['moreFenFaN' + 'um'] ? _0x4ededa = 0x1 : _0x16abcb['default']['app']['mWX']['moreFenFaN' + 'um'] >= 0x1 ? _0x4ededa = JSON['parse'](_0x16abcb['default']['app']['mWX']['mGamesBox'][_0x6b58fe]['anim_confi' + 'g'])['millisecon' + 'd_static']['split'](',')['length'] > 0x1 ? JSON['parse'](_0x16abcb['default']['app']['mWX']['mGamesBox'][_0x6b58fe]['anim_confi' + 'g'])['millisecon' + 'd_static']['split'](',')['length'] : 0x1 : 0x0 == _0x16abcb['default']['app']['mWX']['moreFenFaN' + 'um'] && (_0x4ededa = 0x0));
                        Laya['Browser']['onIOS'] && (_0x1bf64a = 0x1), 0x1 == _0x3f0ad1['isCallNavi' + 'gation'] || 0x3 == _0x3f0ad1['isCallNavi' + 'gation'] ? ('recom_icon' + '_click', _0x16abcb['default']['app']['mWX']['indexBpTot' + 'le']('recom_clic' + 'k', {
                            'game_show_list': [_0x40a703],
                            'position_type': 'icon',
                            'game_id': _0x397b24,
                            'jump_type': 0x1 == _0x1bf64a ? 'game' : 0x3 == _0x1bf64a ? 'box' : _0x1bf64a,
                            'is_success_direct': _0x11828e,
                            'gif_show': [
                                _0x54b14d,
                                _0x4ededa
                            ],
                            'level': _0x16abcb['default']['app']['Level_num']
                        })) : 0x2 == _0x3f0ad1['isCallNavi' + 'gation'] || 0x4 == _0x3f0ad1['isCallNavi' + 'gation'] || 0x5 == _0x3f0ad1['isCallNavi' + 'gation'] || 0x6 == _0x3f0ad1['isCallNavi' + 'gation'] || 0x7 == _0x3f0ad1['isCallNavi' + 'gation'] || 0x9 == _0x3f0ad1['isCallNavi' + 'gation'] ? ('recom_bann' + 'er_click', _0x16abcb['default']['app']['mWX']['indexBpTot' + 'le']('recom_clic' + 'k', {
                            'game_show_list': _0x51112b['default']['showList'],
                            'position_type': 'banner',
                            'game_id': _0x397b24,
                            'jump_type': 0x1 == _0x1bf64a ? 'game' : 0x3 == _0x1bf64a ? 'box' : _0x1bf64a,
                            'is_success_direct': _0x11828e,
                            'gif_show': [
                                _0x54b14d,
                                _0x4ededa
                            ],
                            'level': _0x16abcb['default']['app']['Level_num']
                        })) : 0x8 == _0x3f0ad1['isCallNavi' + 'gation'] ? _0x16abcb['default']['app']['mWX']['indexBpTot' + 'le']('recom_clic' + 'k', {
                            'game_show_list': _0x16abcb['default']['app']['resultView'] ? _0x16abcb['default']['app']['resultView']['result_sho' + 'wList'] : [],
                            'position_type': 'result_pag' + 'e',
                            'game_id': _0x397b24,
                            'jump_type': 0x1 == _0x1bf64a ? 'game' : 0x3 == _0x1bf64a ? 'box' : _0x1bf64a,
                            'is_success_direct': _0x11828e,
                            'gif_show': [
                                _0x54b14d,
                                _0x4ededa
                            ],
                            'level': _0x16abcb['default']['app']['Level_num']
                        }) : 0xa == _0x3f0ad1['isCallNavi' + 'gation'] ? _0x16abcb['default']['app']['mWX']['indexBpTot' + 'le']('recom_clic' + 'k', {
                            'game_show_list': _0x16abcb['default']['app']['baokuanlis' + 't'],
                            'position_type': 'recommend_' + 'page',
                            'game_id': _0x397b24,
                            'jump_type': 0x1 == _0x1bf64a ? 'game' : 0x3 == _0x1bf64a ? 'box' : _0x1bf64a,
                            'is_success_direct': _0x11828e,
                            'gif_show': [
                                _0x54b14d,
                                _0x4ededa
                            ],
                            'level': _0x16abcb['default']['app']['Level_num']
                        }) : 0xb == _0x3f0ad1['isCallNavi' + 'gation'] && _0x16abcb['default']['app']['mWX']['indexBpTot' + 'le']('recom_clic' + 'k', {
                            'game_show_list': _0x16abcb['default']['app']['fakerxcxli' + 'st'],
                            'position_type': 'app_list',
                            'game_id': _0x397b24,
                            'jump_type': 0x1 == _0x1bf64a ? 'game' : 0x3 == _0x1bf64a ? 'box' : _0x1bf64a,
                            'is_success_direct': _0x11828e,
                            'gif_show': [
                                _0x54b14d,
                                _0x4ededa
                            ],
                            'level': _0x16abcb['default']['app']['Level_num']
                        });
                    }, _0x3f0ad1['isCallNavi' + 'gation'] = 0x0, _0x3f0ad1['isClickJum' + 'p'] = !0x0, _0x3f0ad1;
                }();
            _0x44ffb4['gameBox'] = _0x43e44c;
        },
        {
            '../Main': 0xe,
            '../script/MyLikeView2': 0x22,
            './MoreGame': 0x16
        }
    ],
    0x19: [
        function (_0x3cecd8, _0x4964a6, _0x3f3cc9) {
            'use strict';
            Object['defineProp' + 'erty'](_0x3f3cc9, '__esModule', { 'value': !0x0 });
            var _0xff8041 = _0x3cecd8('./wxCore'), _0x4d8130 = _0x3cecd8('../util/Co' + 'nfigUtil'), _0x3ead5d = function () {
                    function _0x335b13() {
                    }
                    return _0x335b13['getArrayVa' + 'lueParam'] = function (_0x5ad9b4, _0x5d53dc) {
                        if (null == _0x5ad9b4 || typeof _0x5ad9b4 != typeof [])
                            return '';
                        for (var _0x5f1200 = 0x0; _0x5f1200 < _0x5ad9b4['length']; ++_0x5f1200)
                            if (_0x5ad9b4[_0x5f1200]['key'] == _0x5d53dc)
                                return _0x5ad9b4[_0x5f1200]['param'];
                        return '';
                    }, _0x335b13['getUrlPara' + 'ms'] = function (_0x230be3, _0x4b210c) {
                        void 0x0 === _0x4b210c && (_0x4b210c = '1.0.1');
                        var _0x32c148 = !0x1, _0x32806a = new Array();
                        for (var _0x2869bb in _0x230be3)
                            if ('string' == typeof _0x230be3[_0x2869bb] || 'number' == typeof _0x230be3[_0x2869bb]) {
                                'tick' == _0x2869bb && (_0x32c148 = !0x0);
                                var _0x4fb852 = _0x2869bb['toLocaleLo' + 'werCase']();
                                _0x230be3[_0x4fb852] = _0x230be3[_0x2869bb], _0x32806a['push'](_0x4fb852);
                            }
                        if (0x0 == _0x32c148) {
                            var _0x468779 = new Date();
                            _0x230be3['tick'] = Math['floor'](_0x468779['getTime']() / 0x3e8), _0x32806a['push']('tick');
                        }
                        _0x32806a['sort'](function (_0x25b39c, _0x52086d) {
                            return _0x25b39c > _0x52086d ? 0x1 : -0x1;
                        });
                        for (var _0x368779 = '', _0x412273 = 0x0; _0x412273 < _0x32806a['length']; _0x412273++)
                            _0x368779 = _0x368779 + _0x32806a[_0x412273] + '=' + _0x230be3[_0x32806a[_0x412273]] + '&';
                        var _0x1e57a0 = '';
                        return _0x1e57a0 = null != _0x4d8130['ConfigUtil']['mKeys'][_0x4b210c] ? _0xff8041['md5_hex']['MD5'](_0x368779 + 'key=' + _0x4d8130['ConfigUtil']['mKeys'][_0x4b210c]) : _0xff8041['md5_hex']['MD5'](_0x368779 + ('key=wvkbfu' + 'hl')), _0x368779 + 'key=' + _0x1e57a0;
                    }, _0x335b13['getCDN'] = function () {
                        return 'https://tc' + 'dn.wanzhus' + 'hipin.cn/x' + 'cx/sf/';
                    }, _0x335b13['getJSON'] = function (_0x1847ac) {
                        if ('' == _0x1847ac || null == _0x1847ac)
                            return { 'code': -0x3e7 };
                        var _0xb481ce = _0x1847ac['indexOf']('{', 0x0);
                        return _0x1847ac = _0x1847ac['substr'](_0xb481ce, _0x1847ac['length'] - _0xb481ce), JSON['parse'](_0x1847ac);
                    }, _0x335b13['getServer'] = function () {
                        return _0x4d8130['ConfigUtil']['mURL'];
                    }, _0x335b13;
                }();
            _0x3f3cc9['util'] = _0x3ead5d;
        },
        {
            '../util/ConfigUtil': 0x31,
            './wxCore': 0x1b
        }
    ],
    0x1a: [
        function (_0x547646, _0x51aca2, _0x35f173) {
            'use strict';
            Object['defineProp' + 'erty'](_0x35f173, '__esModule', { 'value': !0x0 });
            var _0x23f86 = _0x547646('../util/AD' + 'Util'), _0x405d2d = _0x547646('./wxMinPro'), _0x192763 = _0x547646('./wxCore'), _0xa05373 = _0x547646('../Main'), _0x4aaf65 = _0x547646('../util/Ti' + 'meUtil'), _0x2c2249 = _0x547646('../util/Sh' + 'areUtil'), _0x5212e9 = function () {
                    function _0x6a1bed() {
                        this['tip'] = null;
                    }
                    return _0x6a1bed['prototype']['version'] = function () {
                        return '1.0.1';
                    }, _0x6a1bed['prototype']['loginBtnPo' + 's'] = function () {
                        return 0xa0;
                    }, _0x6a1bed['prototype']['onBefore'] = function () {
                        return !0x1;
                    }, _0x6a1bed['prototype']['onShow'] = function () {
                    }, _0x6a1bed['prototype']['onReShow'] = function () {
                    }, _0x6a1bed['prototype']['onLogin'] = function (_0x3b8894, _0x5bf947) {
                        return _0xa05373['default']['app']['adUtil'] = new _0x23f86['ADUtil'](), _0xa05373['default']['app']['mWX'] = new _0x405d2d['default'](), _0xa05373['default']['app']['mWX']['mUID'] = _0x5bf947['uid'], _0xa05373['default']['app']['mWX']['mLaunch'] = _0x192763['default']['uo']['launch'](), _0xa05373['default']['app']['mWX']['onLaunch'](_0x192763['default']['uo']['launch']()), _0x192763['default']['uo']['initVideoA' + 'D'](_0x23f86['ADUtil']['sDefaultVi' + 'deoId']), _0xa05373['default']['app']['mWX']['initReturn'](), !0x0;
                    }, _0x6a1bed['prototype']['onEnterGam' + 'e'] = function (_0x1eb5be, _0x50b77e, _0x4ed5b8) {
                        console['log']('123', _0x1eb5be), console['log']('234', _0x50b77e), console['log']('345', _0x4ed5b8), null != _0xa05373['default']['app']['mWX']['mShareCall' + 'back'] && (_0x2c2249['ShareUtil']['is_exit'] = !0x0, '0' == _0xa05373['default']['app']['mWX']['getOnOffVa' + 'lueByKey']('of_share_t' + 'ime') ? (_0xa05373['default']['app']['mWX']['mShareCall' + 'back'](), _0xa05373['default']['app']['mWX']['mShareCall' + 'back'] = null) : _0x4aaf65['TimeUtil']['getCurrTim' + 'e']() - _0xa05373['default']['app']['mWX']['mCallShare' + 'Time'] > _0xa05373['default']['app']['mWX']['getShareTi' + 'meByCount']() ? (_0xa05373['default']['app']['mWX']['mShareCall' + 'back'](), _0xa05373['default']['app']['mWX']['mShareCall' + 'back'] = null, _0xa05373['default']['app']['mWX']['mShareCoun' + 't']++, _0xa05373['default']['app']['mWX']['mCallShare' + 'Time'] = 0x0) : _0xa05373['default']['app']['is_share'] && Laya['timer']['once'](0xc8, this, function () {
                            wx['showToast']({
                                'title': '分享到群生效',
                                'icon': 'none',
                                'duration': 0x7d0,
                                'false': function (_0x290ec0) {
                                    console['log'](_0x290ec0);
                                },
                                'success': function (_0x3bcce6) {
                                    console['log'](_0x3bcce6);
                                }
                            });
                        }));
                    }, _0x6a1bed['prototype']['onHideGame'] = function () {
                    }, _0x6a1bed['mIF'] = {
                        'wxinfo': {
                            'url': '1.0.1/qc/w' + 'xinfo?',
                            'key': '1.0.1',
                            'tips': '报告微信信息接口'
                        },
                        'login': {
                            'url': '1.0.1/qc/l' + 'ogin?',
                            'key': '1.0.1',
                            'tips': '登录服务'
                        },
                        'lauch': {
                            'url': '1.0.1/qc/l' + 'auch?',
                            'key': '1.0.1',
                            'tips': '登录服务'
                        },
                        'userinfo': {
                            'url': '1.0.1/qc/u' + 'serinfo?',
                            'key': '1.0.1',
                            'tips': '更新用户信息'
                        }
                    }, _0x6a1bed;
                }();
            _0x35f173['wxCallBack'] = _0x5212e9;
        },
        {
            '../Main': 0xe,
            '../util/ADUtil': 0x30,
            '../util/ShareUtil': 0x34,
            '../util/TimeUtil': 0x35,
            './wxCore': 0x1b,
            './wxMinPro': 0x1c
        }
    ],
    0x1b: [
        function (_0x51ac00, _0x5c0dca, _0x25d4b6) {
            'use strict';
            Object['defineProp' + 'erty'](_0x25d4b6, '__esModule', { 'value': !0x0 });
            var _0x23161e = _0x51ac00('./wxCallBa' + 'ck'), _0xd240e = _0x51ac00('./util'), _0x529baa = _0x51ac00('./MD5'), _0x46e02b = _0x51ac00('./Base64'), _0x13c240 = _0x51ac00('../Main'), _0x4b8b0a = _0x51ac00('../util/Ti' + 'meUtil'), _0x4a8a25 = function () {
                    function _0x3f57b4() {
                    }
                    return _0x3f57b4['MD5'] = function (_0x40f1e6) {
                        return new _0x529baa['MD5']()['hex_md5'](_0x40f1e6);
                    }, _0x3f57b4;
                }();
            _0x25d4b6['md5_hex'] = _0x4a8a25;
            var _0x35a2f2 = function () {
                function _0x1ea39e() {
                    this['version'] = '1.0.1', this['mLaunch'] = null, this['mWeUser'] = {}, this['mPhone'] = {}, this['mSDKVersio' + 'n'] = '', this['iphoneX'] = !0x1, this['mCallBack'] = null, this['mHttpCall'] = null, this['mLoginType'] = 0x1, this['mShowLogo'] = !0x0, this['btnLogin'] = null, this['zOrder'] = 0x7b, this['mFrist'] = !0x0, this['mInit'] = !0x1, this['mVideoAD'] = null, this['mNoVideo'] = !0x1, this['mIsNewUser'] = 0x0, this['option123'] = null, this['loginSessi' + 'on'] = null, this['first_shar' + 'e_from'] = null, this['sigh_id'] = null, _0x1ea39e['uo'] = this, console['log']('wxcore.uo\x20' + '=\x20' + _0x1ea39e['uo']), this['mCallBack'] = new _0x23161e['wxCallBack']();
                }
                return _0x1ea39e['prototype']['screenHeig' + 'ht'] = function () {
                    return this['mPhone']['screenHeig' + 'ht'];
                }, _0x1ea39e['prototype']['IsXP'] = function () {
                    return !!(Laya['Browser']['onIOS'] && this['mPhone']['screenWidt' + 'h'] > 0x320);
                }, _0x1ea39e['prototype']['wxVersion'] = function () {
                    return this['mSDKVersio' + 'n'];
                }, _0x1ea39e['prototype']['getUser'] = function () {
                    return this['mWeUser'];
                }, _0x1ea39e['prototype']['getUserID'] = function () {
                    return Number(this['mWeUser']['uid']);
                }, _0x1ea39e['prototype']['phone'] = function () {
                    return this['mPhone'];
                }, _0x1ea39e['prototype']['launch'] = function () {
                    return this['mLaunch'];
                }, _0x1ea39e['prototype']['initWX'] = function (_0x10f667, _0x484b0a, _0x492e4c) {
                    void 0x0 === _0x10f667 && (_0x10f667 = 0x1), void 0x0 === _0x484b0a && (_0x484b0a = !0x0), void 0x0 === _0x492e4c && (_0x492e4c = 0x0), console['log']('进入core'), this['mPhone'] = wx['getSystemI' + 'nfoSync'](), (this['mPhone']['model']['indexOf']('iPhone\x20X') >= 0x0 && (this['iphoneX'] = !0x0), this['mSDKVersio' + 'n'] = this['mPhone']['SDKVersion']);
                    var _0x4f09e3 = wx['getLaunchO' + 'ptionsSync']();
                    this['option123'] = _0x4f09e3['query'];
                    var _0x326b5a = {};
                    if (_0x326b5a['query'] = _0x4f09e3['query'], _0x326b5a['scene'] = _0x4f09e3['scene'], _0x326b5a['shareTicke' + 't'] = _0x4f09e3['shareTicke' + 't'], _0x326b5a['isSticky'] = _0x4f09e3['isSticky'], null != _0x326b5a['query']['scene'])
                        for (var _0x4940f8 = decodeURIComponent(_0x326b5a['query']['scene'])['split']('&'), _0x763de2 = 0x0; _0x763de2 < _0x4940f8['length']; _0x763de2++) {
                            var _0x4e4907 = _0x4940f8[_0x763de2]['split']('=');
                            0x2 == _0x4e4907['length'] && (_0x326b5a['query'][_0x4e4907[0x0]] = _0x4e4907[0x1]);
                        }
                    this['mLaunch'] = _0x326b5a, this['mLoginType'] = _0x10f667, this['mShowLogo'] = _0x484b0a, 0x1 == this['mCallBack']['onBefore']() && this['showLoadin' + 'g'](), Laya['timer']['callLater'](this, this['check']);
                }, _0x1ea39e['prototype']['initWeb'] = function (_0x424b68) {
                    void 0x0 === _0x424b68 && (_0x424b68 = 0x0), 0x1 == this['mCallBack']['onBefore']() && this['showLoadin' + 'g']();
                }, _0x1ea39e['prototype']['showLoadin' + 'g'] = function () {
                    Laya['timer']['callLater'](this['mCallBack'], this['mCallBack']['onShow']);
                }, _0x1ea39e['prototype']['clear'] = function () {
                }, _0x1ea39e['prototype']['showLoginB' + 'tn'] = function () {
                    (console['log']('showLoginB' + 'tn'), null == this['btnLogin']) && (this['btnLogin'] = wx['createUser' + 'InfoButton']({
                        'type': 'image',
                        'withCredentials': !0x1,
                        'image': '',
                        'style': {
                            'left': 0x0,
                            'top': 0x0,
                            'width': 0x0,
                            'height': 0x0
                        }
                    }), this['btnLogin']['show'](), console['log'](this['btnLogin']), this['btnLogin']['onTap'](function (_0x1ab27f) {
                        void 0x0 !== _0x1ab27f['userInfo'] ? (_0x1ea39e['uo']['btnLogin']['destroy'](), _0x1ea39e['uo']['initUser'](_0x1ab27f), _0x1ea39e['uo']['btnLogin'] = null) : wx['showToast']({
                            'title': '游戏需要您授权头像和' + '用户名信息!',
                            'icon': 'success',
                            'image': '',
                            'duration': 0x7d0
                        });
                    }));
                }, _0x1ea39e['prototype']['check'] = function () {
                    wx['checkSessi' + 'on']({
                        'success': function (_0x5c04cb) {
                            console['log']('checkSessi' + 'on\x20ok'), _0x1ea39e['uo']['login']();
                        },
                        'fail': function (_0x3a2436) {
                            console['log']('checkSessi' + 'on\x20fail'), wx['removeStor' + 'ageSync']('user'), _0x1ea39e['uo']['login']();
                        }
                    });
                }, _0x1ea39e['prototype']['reLogin'] = function () {
                    wx['removeStor' + 'ageSync']('user'), this['login']();
                }, _0x1ea39e['prototype']['login'] = function () {
                    var _0x5b8870 = !0x0, _0x35a602 = wx['getStorage' + 'Sync']('user');
                    if ('object' == typeof _0x35a602) {
                        var _0x18fe79 = _0x35a602['openid'];
                        '' != _0x18fe79 && null != _0x18fe79 || (_0x5b8870 = !0x1), ('' == _0x35a602['uid'] || null == _0x35a602['uid'] || Number(_0x35a602['uid']) < 0x2710) && (_0x5b8870 = !0x1);
                    } else
                        _0x5b8870 = !0x1;
                    _0x5b8870 ? (_0x1ea39e['uo']['mWeUser'] = _0x35a602, _0x1ea39e['uo']['checkCode']('')) : wx['login']({
                        'success': function (_0xa19199) {
                            _0x1ea39e['uo']['checkCode'](_0xa19199['code']);
                        },
                        'fail': function (_0x236ba8) {
                            console['log']('login\x20fail' + ',try\x20again'), Laya['timer']['once'](0x3e8, _0x1ea39e['uo'], _0x1ea39e['uo']['login']);
                        }
                    });
                }, _0x1ea39e['prototype']['checkCode'] = function (_0x2b5a02) {
                    var _0x2f7896 = [];
                    _0x2f7896['code'] = _0x2b5a02, '' == _0x2b5a02 && (_0x2f7896['uid'] = _0x1ea39e['uo']['mWeUser']['uid']), void 0x0 !== this['mLaunch']['query']['uid'] && (_0x2f7896['master'] = this['mLaunch']['query']['uid']), void 0x0 !== this['mLaunch']['query']['agentid'] && (_0x2f7896['agentid'] = this['mLaunch']['query']['agentid']), void 0x0 !== this['mLaunch']['query']['adid'] && (_0x2f7896['adid'] = this['mLaunch']['query']['adid']), _0x2f7896['ver'] = this['mCallBack']['version'](), this['server'](_0x23161e['wxCallBack']['mIF']['login'], _0x2f7896, function (_0x320201) {
                        if (console['log']('用户登录返回数据', _0x320201), 0x0 == _0x320201['code']) {
                            if (_0x1ea39e['uo']['loginSessi' + 'on'] = _0x4b8b0a['TimeUtil']['getCurrTim' + 'e'](), null != _0x1ea39e['uo']['mWeUser'] && _0x1ea39e['uo']['mWeUser']['uid'] == _0x320201['uid']) {
                                if (_0x1ea39e['uo']['mWeUser']['openid'] != _0x320201['openid'])
                                    return void Laya['timer']['once'](0x64, _0x1ea39e['uo'], _0x1ea39e['uo']['reLogin']);
                            } else
                                _0x1ea39e['uo']['mWeUser'] = {}, _0x1ea39e['uo']['mWeUser']['openid'] = _0x320201['openid'], _0x1ea39e['uo']['mWeUser']['uid'] = Number(_0x320201['uid']);
                            0x1 == _0x1ea39e['uo']['mCallBack']['onLogin'](_0x1ea39e['uo']['mWeUser'], _0x320201) ? _0x1ea39e['uo']['getUserInf' + 'o']() : _0x1ea39e['uo']['init'](), console['log']('openid', _0x1ea39e['uo']['mWeUser']['openid'], _0x1ea39e['uo']['mWeUser']['uid']);
                        } else
                            Laya['timer']['once'](0x3e8, _0x1ea39e['uo'], _0x1ea39e['uo']['reLogin']);
                    });
                }, _0x1ea39e['prototype']['getUserInf' + 'o'] = function () {
                    if (0x2 == this['mLoginType'])
                        return _0x1ea39e['uo']['onEnter'](null, this['mLaunch']), void _0x1ea39e['uo']['init']();
                    wx['getUserInf' + 'o']({
                        'withCredentials': !0x1,
                        'lang': 'zh_CN',
                        'success': function (_0x274ea1) {
                            console['log'](_0x274ea1), _0x1ea39e['uo']['initUser'](_0x274ea1);
                        },
                        'fail': function (_0x2a7313) {
                            console['log'](_0x2a7313), _0x1ea39e['uo']['mSDKVersio' + 'n'] >= '2.0.1' ? (_0x1ea39e['uo']['showLoginB' + 'tn'](), _0x1ea39e['uo']['mCallBack']['onReShow']()) : _0x1ea39e['uo']['wxAuthoriz' + 'e']();
                        }
                    });
                }, _0x1ea39e['prototype']['wxAuthoriz' + 'e'] = function () {
                    wx['authorize']({
                        'scope': 'scope.user' + 'Info',
                        'success': function (_0x6392db) {
                            _0x1ea39e['uo']['getUserInf' + 'o']();
                        },
                        'fail': function (_0x441ae6) {
                            _0x1ea39e['uo']['openSeting']();
                        }
                    });
                }, _0x1ea39e['prototype']['openSeting'] = function () {
                    var _0xd16784 = this;
                    wx['showModal']({
                        'title': '提示',
                        'content': '游戏需要您授权头像和' + '用户名信息',
                        'showCancel': !0x1,
                        'cancelText': '取消',
                        'confirmText': '确认',
                        'success': function (_0x2c033d) {
                            wx['openSettin' + 'g']({
                                'success': function (_0x5c2a0d) {
                                    0x0 == _0x5c2a0d['authSettin' + 'g']['scope.user' + 'Info'] ? _0x1ea39e['uo']['openSeting']() : _0x1ea39e['uo']['getUserInf' + 'o']();
                                },
                                'fail': function (_0x56882f) {
                                    _0xd16784['openSeting']();
                                }
                            });
                        }
                    });
                }, _0x1ea39e['prototype']['initUser'] = function (_0x455956) {
                    var _0x2db307 = 0x0, _0x4fa7a9 = _0x455956['userInfo'];
                    console['log'](_0x4fa7a9['avatarUrl'], _0x1ea39e['uo']['mWeUser']['avatarUrl'], _0x1ea39e['uo']['mWeUser']['nickName'], _0x4fa7a9['nickName']), _0x1ea39e['uo']['mWeUser']['nickName'] != _0x4fa7a9['nickName'] && (_0x1ea39e['uo']['mWeUser']['nickName'] = _0x4fa7a9['nickName'], _0x2db307 = 0x1);
                    var _0x27347c = _0x4fa7a9['avatarUrl'];
                    '0' == _0x27347c['charAt'](_0x27347c['length'] - 0x1) && '/' == _0x27347c['charAt'](_0x27347c['length'] - 0x2) && (_0x27347c = _0x27347c['substr'](0x0, _0x27347c['length'] - 0x2), _0x27347c += '/132'), _0x1ea39e['uo']['mWeUser']['avatarUrl'] != _0x27347c && (_0x1ea39e['uo']['mWeUser']['avatarUrl'] = _0x27347c, _0x2db307 = 0x1), _0x1ea39e['uo']['mWeUser']['gender'] = _0x4fa7a9['gender'], _0x1ea39e['uo']['mWeUser']['province'] = _0x4fa7a9['province'], _0x1ea39e['uo']['mWeUser']['city'] = _0x4fa7a9['city'], _0x1ea39e['uo']['mWeUser']['country'] = _0x4fa7a9['country'], 0x1 == _0x2db307 && _0x1ea39e['uo']['updateUser' + 'Info'](), wx['setStorage' + 'Sync']('user', _0x1ea39e['uo']['mWeUser']), _0x1ea39e['uo']['onEnter'](null, this['mLaunch']), _0x1ea39e['uo']['init']();
                }, _0x1ea39e['prototype']['onEnter'] = function (_0x48e8c1, _0x42366c) {
                    this['mCallBack']['onEnterGam' + 'e'](this['mFrist'], _0x48e8c1, _0x42366c), this['mFrist'] = !0x1;
                }, _0x1ea39e['prototype']['init'] = function () {
                    0x0 == this['mInit'] && (_0x13c240['default']['app']['mWX']['displayGam' + 'eClub'](!0x0), wx['onShow'](this['wxShow']), wx['onHide'](this['wxHide']), this['mInit'] = !0x0);
                }, _0x1ea39e['prototype']['wxShow'] = function (_0x4b919c) {
                    console['log']('默认隐藏'), console['log']('达到'), console['log']('进入:' + new Date()['getTime']()), console['log'](_0x4b919c);
                    var _0x3bc4dd = {};
                    if (_0x3bc4dd['query'] = _0x4b919c['query'], _0x3bc4dd['scene'] = _0x4b919c['scene'], _0x3bc4dd['shareTicke' + 't'] = _0x4b919c['shareTicke' + 't'], _0x3bc4dd['isSticky'] = _0x4b919c['isSticky'], null != _0x3bc4dd['query']['scene'])
                        for (var _0x42445e = decodeURIComponent(_0x3bc4dd['query']['scene'])['split']('&'), _0x5d4f0e = 0x0; _0x5d4f0e < _0x42445e['length']; _0x5d4f0e++) {
                            var _0x534818 = _0x42445e[_0x5d4f0e]['split']('=');
                            0x2 == _0x534818['length'] && (_0x3bc4dd['query'][_0x534818[0x0]] = _0x534818[0x1]);
                        }
                    if (0x1 == _0x1ea39e['uo']['mFrist'])
                        return _0x1ea39e['uo']['mLaunch'] = _0x3bc4dd, void _0x1ea39e['uo']['getUserInf' + 'o']();
                    var _0x312012 = _0x1ea39e['uo']['mLaunch'];
                    _0x1ea39e['uo']['mLaunch'] = _0x3bc4dd, _0x1ea39e['uo']['onEnter'](_0x312012, _0x3bc4dd);
                }, _0x1ea39e['prototype']['wxHide'] = function () {
                    _0x1ea39e['uo']['mCallBack']['onHideGame'](), console['log']('退出:' + new Date()['getTime']());
                }, _0x1ea39e['prototype']['updateUser' + 'Info'] = function () {
                    var _0x46aed1 = {};
                    _0x46aed1['uid'] = _0x1ea39e['uo']['mWeUser']['uid'], _0x46aed1['name'] = _0x46e02b['TsBase64']['EncodeURI'](this['mWeUser']['nickName']), _0x46aed1['avatar'] = _0x46e02b['TsBase64']['EncodeURI'](this['mWeUser']['avatarUrl']), _0x46aed1['gender'] = _0x1ea39e['uo']['mWeUser']['gender'], null != _0x1ea39e['uo']['mWeUser']['province'] && '' != _0x1ea39e['uo']['mWeUser']['province'] && (_0x46aed1['province'] = _0x1ea39e['uo']['mWeUser']['province']), null != _0x1ea39e['uo']['mWeUser']['city'] && '' != _0x1ea39e['uo']['mWeUser']['city'] && (_0x46aed1['city'] = _0x1ea39e['uo']['mWeUser']['city']), this['server'](_0x23161e['wxCallBack']['mIF']['userinfo'], _0x46aed1, function (_0xddb4dc) {
                        console['log']('updateUser' + 'Info..ok');
                    });
                }, _0x1ea39e['prototype']['server'] = function (_0x2cd751, _0x259329, _0x62c492, _0x3567b9) {
                    void 0x0 === _0x3567b9 && (_0x3567b9 = null), this['mHttpCall'] = new Laya['HttpReques' + 't'](), this['mHttpCall']['once'](Laya['Event']['COMPLETE'], this, function (_0x1f054f) {
                        var _0x4a4e7a = null;
                        _0x4a4e7a = 'string' == typeof _0x1f054f ? _0xd240e['util']['getJSON'](_0x1f054f) : _0xd240e['util']['getJSON'](_0x1ea39e['uo']['mHttpCall']['data']), null != _0x62c492 && _0x62c492(_0x4a4e7a), _0x1ea39e['uo']['mHttpCall'] = null;
                    }), this['mHttpCall']['once'](Laya['Event']['ERROR'], this, function (_0x38ab87) {
                        null != _0x3567b9 ? _0x3567b9() : _0x1ea39e['uo']['onHttpRequ' + 'estError'](_0x38ab87);
                    });
                    var _0x397917 = _0xd240e['util']['getServer']() + _0x2cd751['url'] + _0xd240e['util']['getUrlPara' + 'ms'](_0x259329, _0x2cd751['key']);
                    this['mHttpCall']['send'](_0x397917, null, 'get', 'text');
                }, _0x1ea39e['prototype']['onHttpRequ' + 'estError'] = function (_0xcd484f) {
                    wx['hideLoadin' + 'g']();
                }, _0x1ea39e['prototype']['initVideoA' + 'D'] = function (_0x253059) {
                    '' != _0x253059 ? null == this['mVideoAD'] && (this['mVideoAD'] = wx['createRewa' + 'rdedVideoA' + 'd']({ 'adUnitId': _0x253059 }), this['mVideoAD']['load'](), this['mVideoAD']['onError'](function (_0x41b28b) {
                        console['log'](_0x41b28b), _0x1ea39e['uo']['mNoVideo'] = !0x0;
                    })) : this['mNoVideo'] = !0x0;
                }, _0x1ea39e['prototype']['haveVideo'] = function () {
                    return null != this['mVideoAD'] && 0x1 != this['mNoVideo'];
                }, _0x1ea39e['prototype']['loadingVid' + 'eo'] = function (_0x5e1acc) {
                    return null == this['mVideoAD'] || 0x1 == _0x1ea39e['uo']['mNoVideo'] ? (null != _0x5e1acc && _0x5e1acc(!0x1), !0x1) : (this['mVideoAD']['load']()['then'](function () {
                        null != _0x5e1acc && _0x5e1acc(!0x0);
                    })['catch'](function (_0x362238) {
                        console['log']('没有拉到广告'), console['log'](_0x362238['errMsg']), null != _0x5e1acc && _0x5e1acc(!0x1);
                    }), !0x0);
                }, _0x1ea39e['prototype']['showVideoA' + 'D'] = function (_0x206ce0) {
                    return null == this['mVideoAD'] || 0x1 == _0x1ea39e['uo']['mNoVideo'] ? (null != _0x206ce0 && _0x206ce0(!0x1), !0x1) : (_0x1ea39e['uo']['mVideoAD']['show'](), this['mVideoAD']['offClose'](null), this['mVideoAD']['onClose'](function (_0x31aec7) {
                        _0x31aec7 && _0x31aec7['isEnded'] || void 0x0 === _0x31aec7 ? null != _0x206ce0 && _0x206ce0(!0x0) : null != _0x206ce0 && _0x206ce0(!0x1);
                    }), !0x0);
                }, _0x1ea39e['uo'] = null, _0x1ea39e;
            }();
            _0x25d4b6['default'] = _0x35a2f2;
        },
        {
            '../Main': 0xe,
            '../util/TimeUtil': 0x35,
            './Base64': 0x10,
            './MD5': 0x15,
            './util': 0x19,
            './wxCallBack': 0x1a
        }
    ],
    0x1c: [
        function (_0x5359e9, _0x3950cd, _0x1ffe71) {
            'use strict';
            Object['defineProp' + 'erty'](_0x1ffe71, '__esModule', { 'value': !0x0 });
            var _0xb1e8d = Laya['HttpReques' + 't'], _0x374e99 = _0x5359e9('../Main'), _0xc29af1 = _0x5359e9('./gameBox'), _0x3e84da = _0x5359e9('./wxCallBa' + 'ck'), _0x4787db = _0x5359e9('./util'), _0x576296 = _0x5359e9('./MoreGame'), _0x521d78 = _0x5359e9('../util/Co' + 'nfigUtil'), _0x3abc38 = _0x5359e9('../util/Lo' + 'gUtil'), _0x54ebf0 = _0x5359e9('../util/Sh' + 'areConfig'), _0x94f5dc = _0x5359e9('./Base64'), _0x118235 = _0x5359e9('./wxCore'), _0x500915 = _0x5359e9('../util/Ti' + 'meUtil'), _0x56b61a = _0x5359e9('../script/' + 'MyLikeView'), _0x55b380 = _0x5359e9('../script/' + 'ShopView'), _0x9d0560 = _0x5359e9('./OddEvenT' + 'estModel'), _0x3c1720 = function () {
                    function _0x148d9b() {
                        this['mUID'] = 0x0, this['mOnOff'] = [], this['likeLoop'] = !0x0, this['mCards'] = 0x0, this['mWeiXinVer' + 'sion'] = '', this['mADKeep'] = 0x0, this['mHttpCall'] = null, this['mLaunch'] = null, this['mSaveImage'] = '', this['mMyRank'] = 0x0, this['mChallenge'] = null, this['mShareID'] = 0x0, this['mMarks'] = [
                            0x0,
                            0x0,
                            0x0,
                            0x0
                        ], this['fhOnoff'] = 0x0, this['mrelayID'] = 0x0, this['maxToolCar' + 'ds'] = 0x2, this['mToolCards'] = 0x0, this['mReturnApp' + 'id'] = '', this['mReturnUrl'] = '', this['mTaskInfo'] = [], this['mCoinsNum'] = 0x0, this['mPropList'] = [], this['mUsingProp' + 'Id'] = '2001', this['mStartAwar' + 'd'] = [], this['mUserData'] = [], this['mNowDay'] = 0x0, this['mWxAdUrl'] = [], this['mGamesBox'] = [], this['mShareCall' + 'back'] = null, this['mShareIsNo' + 'Callback'] = null, this['mShareIsAg' + 'ainCallbac' + 'k'] = null, this['mCallShare' + 'Time'] = 0x0, this['mShareCoun' + 't'] = 0x0, this['mPassAward' + 'ListData'] = [], this['mdtValues'] = null, this['skinId'] = 0x9, this['moreFenFaN' + 'um'] = 0x1, this['moreFenFaC' + 'ount'] = 0x0, this['mWxMenuBut' + 'tonRect'] = null, this['rnt2'] = {
                            'x': 0x0,
                            'y': 0x0,
                            'left': 0x0,
                            'top': 0x0,
                            'right': 0x0,
                            'height': 0x0
                        }, this['is_address'] = !0x0, this['channel_id'] = '0', this['first_chan' + 'nel_id'] = '0';
                    }
                    return _0x148d9b['prototype']['rankMeassa' + 'ge'] = function (_0x588562) {
                        wx['postMessag' + 'e']({
                            'type': 'FriendRank',
                            'show': 0x1,
                            'level': 0x0,
                            'info': _0x118235['default']['uo']['getUser'](),
                            'dir': [
                                'none',
                                'previous',
                                'next'
                            ][_0x588562]
                        });
                    }, _0x148d9b['prototype']['closeRankM' + 'eassage'] = function () {
                        wx['postMessag' + 'e']({
                            'type': 'FriendRank',
                            'show': 0x0
                        });
                    }, _0x148d9b['prototype']['ResultMeas' + 'sage'] = function () {
                        wx['postMessag' + 'e']({
                            'type': 'result',
                            'show': 0x1,
                            'level': 0x0,
                            'info': _0x118235['default']['uo']['getUser']()
                        });
                    }, _0x148d9b['prototype']['getItemLis' + 'tbytype'] = function (_0x570932) {
                        if (null != _0x374e99['default']['app']['mWX']['mPropList']) {
                            for (var _0x570932 = _0x570932, _0x5228ac = [], _0x3e3de5 = 0x0; _0x3e3de5 < _0x374e99['default']['app']['mWX']['mPropList']['length']; _0x3e3de5++)
                                Number(_0x374e99['default']['app']['mWX']['mPropList'][_0x3e3de5]['type']) == _0x570932 && (_0x5228ac[_0x5228ac['length']] = _0x374e99['default']['app']['mWX']['mPropList'][_0x3e3de5]);
                            return _0x5228ac;
                        }
                    }, _0x148d9b['prototype']['IsOpenMore' + 'Fenfa'] = function () {
                        var _0x189757 = 0x0;
                        return _0x374e99['default']['app']['mWX']['mOnOff']['forEach'](function (_0xc1f70d) {
                            'of_more_fe' + 'nfa' != _0xc1f70d['key'] || (_0x189757 = Number(_0xc1f70d['value']));
                        }), _0x189757;
                    }, _0x148d9b['prototype']['IsOpenBKYX'] = function () {
                        var _0x141cb8 = 0x1;
                        return _0x374e99['default']['app']['mWX']['mOnOff']['forEach'](function (_0x46cbe3) {
                            'of_hotgame' + '_end' != _0x46cbe3['key'] || (_0x141cb8 = Number(JSON['parse'](_0x46cbe3['param'])['open']));
                        }), _0x141cb8;
                    }, _0x148d9b['prototype']['IsOpenXCXL' + 'ist'] = function () {
                        var _0x56b68a = 0x1;
                        return _0x374e99['default']['app']['mWX']['mOnOff']['forEach'](function (_0x54b394) {
                            'of_fenfa_x' + 'cxlist' != _0x54b394['key'] || (_0x56b68a = Number(_0x54b394['value']));
                        }), _0x56b68a;
                    }, _0x148d9b['prototype']['BKYXNotSho' + 'wList'] = function () {
                        var _0x45358e;
                        return _0x374e99['default']['app']['mWX']['mOnOff']['forEach'](function (_0x50c738) {
                            'of_hotgame' + '_notshow_l' + 'ist' != _0x50c738['key'] || (_0x45358e = JSON['parse'](_0x50c738['param'])['notshow']);
                        }), _0x45358e;
                    }, _0x148d9b['prototype']['getItemLis' + 't'] = function (_0x83735a) {
                        if (void 0x0 === _0x83735a && (_0x83735a = 0x0), null != _0x374e99['default']['app']['mWX']['mPropList']) {
                            for (var _0x79ff21 = [], _0x21190b = 0x0; _0x21190b < _0x374e99['default']['app']['mWX']['mPropList']['length']; _0x21190b++)
                                0x0 == _0x83735a ? Number(_0x374e99['default']['app']['mWX']['mPropList'][_0x21190b]['count']) > 0x0 && (_0x79ff21[_0x79ff21['length']] = _0x374e99['default']['app']['mWX']['mPropList'][_0x21190b]) : 0x0 == Number(_0x374e99['default']['app']['mWX']['mPropList'][_0x21190b]['count']) && Number(_0x374e99['default']['app']['mWX']['mPropList'][_0x21190b]['id'] < 0x1771) && Number(0xbbe != _0x374e99['default']['app']['mWX']['mPropList'][_0x21190b]['id']) && (_0x79ff21[_0x79ff21['length']] = _0x374e99['default']['app']['mWX']['mPropList'][_0x21190b]);
                            return _0x79ff21;
                        }
                    }, _0x148d9b['prototype']['reportMark'] = function (_0x507d06, _0x22d808, _0x380559) {
                    }, _0x148d9b['prototype']['dealCards'] = function (_0x319114, _0x24e7d0) {
                        if (void 0x0 === _0x319114 && (_0x319114 = null), void 0x0 === _0x24e7d0 && (_0x24e7d0 = null), 0x0 != this['mLaunch']['query']['gift']) {
                            var _0x10b516 = this;
                            this['mHttpCall'] = new _0xb1e8d(), this['mHttpCall']['once'](Laya['Event']['COMPLETE'], this, function (_0x3f38c5) {
                                var _0xa7c716 = null;
                                _0xa7c716 = 'string' == typeof _0x3f38c5 ? _0x4787db['util']['getJSON'](_0x3f38c5) : _0x4787db['util']['getJSON'](_0x10b516['mHttpCall']['data']), _0x3abc38['LogUtil']['log']('dealCards(' + ')\x20->\x20onRes' + 'ult\x20ret\x20=\x20' + JSON['stringify'](_0xa7c716)), _0xa7c716['code'], _0x10b516['mHttpCall'] = null;
                            }), this['mHttpCall']['once'](Laya['Event']['ERROR'], this, this['onHttpRequ' + 'estError']);
                            var _0x5c4851 = [];
                            _0x5c4851['uid'] = this['mUID'], null != _0x10b516['mLaunch']['query']['gift'] ? _0x5c4851['gift'] = Number(this['mLaunch']['query']['gift']) : void 0x0 !== this['mLaunch']['query']['gift'] ? _0x5c4851['gift'] = Number(this['mLaunch']['query']['gift']) : _0x5c4851['gift'] = 0x0, null != _0x24e7d0 ? _0x5c4851['ticket'] = _0x24e7d0 : void 0x0 !== this['mLaunch']['shareTicke' + 't'] && (_0x5c4851['ticket'] = this['mLaunch']['shareTicke' + 't']), this['mLaunch']['query']['gift'] = 0x0;
                            var _0x4e7c64 = _0x521d78['ConfigUtil']['mURL'] + _0x521d78['ConfigUtil']['mCmd']['AddCard'] + _0x4787db['util']['getUrlPara' + 'ms'](_0x5c4851, '1.0.1');
                            this['mHttpCall']['send'](_0x4e7c64, null, 'get', 'text');
                        }
                    }, _0x148d9b['prototype']['updateCard' + 's'] = function (_0x59c9d5) {
                        void 0x0 === _0x59c9d5 && (_0x59c9d5 = !0x1);
                        var _0x31a50d = this;
                        this['mHttpCall'] = new _0xb1e8d(), this['mHttpCall']['once'](Laya['Event']['COMPLETE'], this, function (_0x2a9f4b) {
                            _0x59c9d5 && wx['hideLoadin' + 'g']();
                            var _0x5a9790 = null;
                            _0x5a9790 = 'string' == typeof _0x2a9f4b ? _0x4787db['util']['getJSON'](_0x2a9f4b) : _0x4787db['util']['getJSON'](_0x31a50d['mHttpCall']['data']), _0x3abc38['LogUtil']['log']('updateCard' + 's()\x20->\x20onR' + 'esult\x20ret\x20' + '=\x20' + JSON['stringify'](_0x5a9790)), 0x0 == _0x5a9790['code'] && (_0x31a50d['mCards'] = Number(_0x5a9790['cards'])), _0x31a50d['mHttpCall'] = null;
                        }), this['mHttpCall']['once'](Laya['Event']['ERROR'], this, this['onHttpRequ' + 'estError']);
                        var _0x979253 = [];
                        _0x979253['uid'] = this['mUID'], _0x59c9d5 && wx['showLoadin' + 'g']({
                            'title': '',
                            'mask': !0x0,
                            'success': function () {
                            },
                            'fail': function () {
                            },
                            'complete': function () {
                            }
                        });
                        var _0x59ce91 = _0x521d78['ConfigUtil']['mURL'] + _0x521d78['ConfigUtil']['mCmd']['querycards'] + _0x4787db['util']['getUrlPara' + 'ms'](_0x979253);
                        this['mHttpCall']['send'](_0x59ce91, null, 'get', 'text');
                    }, _0x148d9b['prototype']['addCardFor' + 'Me'] = function (_0x4ffe04) {
                        var _0x33a0d6 = this;
                        this['mHttpCall'] = new _0xb1e8d(), this['mHttpCall']['once'](Laya['Event']['COMPLETE'], this, function (_0x4353b4) {
                            var _0x1b1759 = null;
                            _0x1b1759 = 'string' == typeof _0x4353b4 ? _0x4787db['util']['getJSON'](_0x4353b4) : _0x4787db['util']['getJSON'](_0x33a0d6['mHttpCall']['data']), _0x3abc38['LogUtil']['log']('addCardFor' + 'Me()\x20->\x20on' + 'Result\x20ret' + '\x20=\x20' + JSON['stringify'](_0x1b1759)), 0x0 == _0x1b1759['code'] && (_0x33a0d6['mCards'] < 0x2 && (_0x33a0d6['mCards'] = _0x33a0d6['mCards'] + 0x1), wx['showToast']({
                                'title': '获得复活卡1张',
                                'icon': 'success',
                                'image': '',
                                'duration': 0x7d0,
                                'success': function () {
                                },
                                'fail': function () {
                                },
                                'complete': function () {
                                }
                            })), _0x33a0d6['mHttpCall'] = null;
                        }), this['mHttpCall']['once'](Laya['Event']['ERROR'], this, this['onHttpRequ' + 'estError']);
                        var _0x1ca85c = [];
                        _0x1ca85c['uid'] = _0x33a0d6['mUID'], _0x1ca85c['id'] = _0x4ffe04;
                        var _0x17a186 = _0x521d78['ConfigUtil']['mURL'] + _0x521d78['ConfigUtil']['mCmd']['AddMyCard'] + _0x4787db['util']['getUrlPara' + 'ms'](_0x1ca85c, '1.0.1');
                        this['mHttpCall']['send'](_0x17a186, null, 'get', 'text');
                    }, _0x148d9b['prototype']['showWorldR' + 'ank'] = function (_0x44486c) {
                        void 0x0 === _0x44486c && (_0x44486c = 0x0);
                        var _0x130d95 = this;
                        wx['showLoadin' + 'g']({
                            'title': '',
                            'mask': !0x0,
                            'success': function () {
                            },
                            'fail': function () {
                            },
                            'complete': function () {
                            }
                        }), this['mHttpCall'] = new _0xb1e8d(), this['mHttpCall']['once'](Laya['Event']['COMPLETE'], this, function (_0x481860) {
                            var _0x3f80b5 = null;
                            if (_0x3f80b5 = 'string' == typeof _0x481860 ? _0x4787db['util']['getJSON'](_0x481860) : _0x4787db['util']['getJSON'](_0x130d95['mHttpCall']['data']), _0x3abc38['LogUtil']['log']('showWorldR' + 'ank()\x20->\x20o' + 'nResult\x20re' + 't\x20=\x20' + JSON['stringify'](_0x3f80b5)), 0x0 == _0x3f80b5['code']) {
                                var _0x24ad85 = Number(_0x3f80b5['rank']);
                                _0x24ad85 > 0x0 && _0x130d95['mMarks'][0x0] > 0x0 && (console['log']('MMRANK', _0x24ad85), _0x130d95['mMyRank'] = _0x24ad85);
                                for (var _0x739e5a = _0x374e99['default']['app']['wRankData'], _0x341ccf = _0x3f80b5['data'], _0x2ac7cc = 0x0; _0x2ac7cc < _0x341ccf['length']; _0x2ac7cc++) {
                                    var _0x1106e2 = {};
                                    null == _0x341ccf[_0x2ac7cc]['name'] ? _0x1106e2['name'] = 'null' : (_0x1106e2['name'] = _0x374e99['default']['app']['subname'](_0x94f5dc['TsBase64']['FromBase64'](_0x341ccf[_0x2ac7cc]['name']), 0xc), console['log'](_0x1106e2['name']));
                                    var _0x2badbe = _0x94f5dc['TsBase64']['FromBase64'](_0x341ccf[_0x2ac7cc]['avatar']);
                                    '0' == _0x2badbe['charAt'](_0x2badbe['length'] - 0x1) && '/' == _0x2badbe['charAt'](_0x2badbe['length'] - 0x2) && (_0x2badbe = _0x2badbe['substr'](0x0, _0x2badbe['length'] - 0x2), _0x2badbe += '/132'), _0x1106e2['avatar'] = _0x2badbe, _0x1106e2['mark'] = Math['floor'](_0x341ccf[_0x2ac7cc]['hismark']), _0x1106e2['city'] = _0x341ccf[_0x2ac7cc]['city'], _0x1106e2['uid'] = _0x341ccf[_0x2ac7cc]['uid'], _0x1106e2['map1'] = Math['floor'](_0x341ccf[_0x2ac7cc]['mark1']), _0x1106e2['map2'] = Math['floor'](_0x341ccf[_0x2ac7cc]['mark2']), _0x1106e2['map3'] = Math['floor'](_0x341ccf[_0x2ac7cc]['mark3']), _0x739e5a['push'](_0x1106e2);
                                }
                                for (_0x2ac7cc = 0x0; _0x2ac7cc < _0x739e5a['length']; _0x2ac7cc++)
                                    _0x739e5a[_0x2ac7cc]['rank'] = _0x2ac7cc + 0x1;
                                _0x341ccf['length'], wx['hideLoadin' + 'g']();
                            }
                            _0x130d95['mHttpCall'] = null;
                        }), this['mHttpCall']['once'](Laya['Event']['ERROR'], this, this['onHttpRequ' + 'estError']);
                        var _0x1f1d8a = [];
                        _0x1f1d8a['uid'] = this['mUID'], _0x1f1d8a['page'] = _0x44486c;
                        var _0x4f7537 = _0x521d78['ConfigUtil']['mURL'] + _0x521d78['ConfigUtil']['mCmd']['rank'] + _0x4787db['util']['getUrlPara' + 'ms'](_0x1f1d8a);
                        this['mHttpCall']['send'](_0x4f7537, null, 'get', 'text'), _0x3abc38['LogUtil']['log']('showWorldR' + 'ank()\x20->\x20s' + 'tr\x20=\x20' + _0x4f7537);
                    }, _0x148d9b['prototype']['onHttpRequ' + 'estError'] = function (_0x4e71e7) {
                        this['mHttpCall'] = null, console['log']('onHttpRequ' + 'estError:' + _0x4e71e7);
                    }, _0x148d9b['prototype']['initMoreGa' + 'me'] = function (_0x38e896, _0x518c49) {
                        void 0x0 === _0x518c49 && (_0x518c49 = !0x1);
                        var _0x454ca8 = _0x576296['MoreGame']['GetIndexRa' + 'ndom'](_0x374e99['default']['app']['mWX']['mGamesBox']);
                        null != _0x454ca8 ? (_0x38e896['name'] = _0x454ca8['gameid'], _0x518c49 ? (_0x38e896['skin'] = _0x454ca8['url_btn'], _0x38e896['visible'] = !0x0) : _0x38e896['skin'] = _0x454ca8['url_result']) : (_0x38e896['visible'] = !0x1, _0x38e896['skin'] = '');
                    }, _0x148d9b['prototype']['initMoreGa' + 'me1'] = function (_0x5aaa0f, _0x16f23e) {
                        var _0x440343 = _0x576296['MoreGame']['GetIndexRa' + 'ndom'](_0x374e99['default']['app']['mWX']['mGamesBox']);
                        null != _0x440343 ? (_0x5aaa0f['name'] = _0x440343['gameid'], _0x5aaa0f['skin'] = _0x440343['url_icon'], _0x5aaa0f['visible'] = !0x0, _0x16f23e['text'] = _0x440343['name']) : (_0x5aaa0f['visible'] = !0x1, _0x5aaa0f['skin'] = '');
                    }, _0x148d9b['prototype']['getMoreUrl'] = function (_0x4a3b52) {
                        for (var _0x1a1a2b = 0x0; _0x1a1a2b < this['mGamesBox']['length']; _0x1a1a2b++)
                            if (Number(_0x4a3b52) == Number(this['mGamesBox'][_0x1a1a2b]['gameid']))
                                return this['mGamesBox'][_0x1a1a2b];
                    }, _0x148d9b['prototype']['reportADHi' + 't'] = function (_0x3c8150) {
                        var _0x5cc02e = this;
                        this['mHttpCall'] = new _0xb1e8d(), this['mHttpCall']['once'](Laya['Event']['COMPLETE'], this, function (_0x4e6dda) {
                            _0x5cc02e['mHttpCall'] = null, _0x3abc38['LogUtil']['log']('reportADHi' + 't()\x20->\x20onR' + 'esult\x20e\x20=\x20' + JSON['stringify'](_0x4e6dda));
                        }), this['mHttpCall']['once'](Laya['Event']['ERROR'], this, this['onHttpRequ' + 'estError']);
                        var _0x48db2d = [];
                        _0x48db2d['uid'] = this['mUID'], _0x48db2d['id'] = _0x3c8150;
                        var _0x122f78 = _0x521d78['ConfigUtil']['mURL'] + _0x521d78['ConfigUtil']['mCmd']['data'] + _0x4787db['util']['getUrlPara' + 'ms'](_0x48db2d);
                        _0x3abc38['LogUtil']['log']('reportADHi' + 't()\x20->\x20onR' + 'esult\x20str\x20' + '=\x20' + _0x122f78), this['mHttpCall']['send'](_0x122f78, null, 'get', 'text');
                    }, _0x148d9b['prototype']['showMoreGa' + 'mePage'] = function (_0x480bc9, _0x6aad47) {
                        void 0x0 === _0x6aad47 && (_0x6aad47 = null);
                        var _0x4322be = _0x374e99['default']['app']['mWX']['getMoreUrl'](_0x480bc9['name']);
                        null != _0x4322be && (_0x374e99['default']['app']['is_gamebox'] = !0x0, _0xc29af1['gameBox']['showBoxPag' + 'e'](_0x4322be['appid'], _0x374e99['default']['app']['mWX']['mGamesBox'], '天天切蔬菜3D'));
                    }, _0x148d9b['prototype']['showMoreGa' + 'mePage1'] = function (_0x515deb, _0x42e79f) {
                        void 0x0 === _0x42e79f && (_0x42e79f = null);
                        var _0x5e3409 = _0x374e99['default']['app']['mWX']['getMoreUrl'](_0x515deb['name']);
                        null != _0x5e3409 && (_0x374e99['default']['app']['is_gamebox'] = !0x0, _0x374e99['default']['app']['moregame'] = 0x3, _0x56b61a['MyLikeView']['from_page'] = _0x42e79f, _0xc29af1['gameBox']['showBoxPag' + 'e'](_0x5e3409['appid'], _0x374e99['default']['app']['mWX']['mGamesBox'], '天天切蔬菜3D'));
                    }, _0x148d9b['prototype']['getAgentID'] = function () {
                        return 0x0;
                    }, _0x148d9b['prototype']['initGameCl' + 'ub'] = function (_0xdff0f9) {
                        _0x118235['default']['uo']['wxVersion']() >= '2.0.3' && null == this['gameClub'] ? (console['log']('创建游戏圈'), this['gameClub'] = wx['createGame' + 'ClubButton']({
                            'icon': 'dark',
                            'type': 'image',
                            'image': 'gamebg/btn' + '_bbs.png',
                            'style': {
                                'right': 0x14,
                                'top': _0xdff0f9,
                                'width': 0x1e,
                                'height': 0x2c
                            }
                        })) : console['log']('不能创建游戏圈');
                    }, _0x148d9b['prototype']['isInitGame' + 'Club'] = function () {
                        return null != this['gameClub'] && (_0x374e99['default']['app']['mWX']['displayGam' + 'eClub'](!0x0), !0x0);
                    }, _0x148d9b['prototype']['getMenuBut' + 'tonTop_Cen' + 'terPoint'] = function () {
                        var _0x72b3b0 = new Laya['Point'](0x0, 0x0), _0x53396d = !0x1;
                        if (Laya['Browser']['onMiniGame']) {
                            if (_0x118235['default']['uo']['wxVersion']() >= '2.1.0' && null == this['mWxMenuBut' + 'tonRect']) {
                                var _0x320e62 = wx['getMenuBut' + 'tonBoundin' + 'gClientRec' + 't']();
                                null != _0x320e62 ? NaN != _0x320e62['height'] && void 0x0 != _0x320e62['height'] && null != _0x320e62['height'] && (this['mWxMenuBut' + 'tonRect'] = _0x320e62) : _0x53396d = !0x0;
                            }
                            if (null != this['mWxMenuBut' + 'tonRect']) {
                                var _0x10b30e = this['mWxMenuBut' + 'tonRect']['height'], _0x383059 = this['dealTopVal' + 'ue'](this['mWxMenuBut' + 'tonRect']['top']);
                                this['rnt2']['x'] = this['mWxMenuBut' + 'tonRect']['width'] * Laya['stage']['height'] / _0x118235['default']['uo']['mPhone']['screenHeig' + 'ht'], this['rnt2']['y'] = this['mWxMenuBut' + 'tonRect']['height'] * Laya['stage']['height'] / _0x118235['default']['uo']['mPhone']['screenHeig' + 'ht'], this['rnt2']['right'] = this['mWxMenuBut' + 'tonRect']['right'], this['rnt2']['height'] = this['mWxMenuBut' + 'tonRect']['height'], console['log']('mWxMenuBut' + 'tonRect:', this['mWxMenuBut' + 'tonRect'], this['rnt2']), _0x72b3b0['x'] = _0x383059 * Laya['stage']['height'] / _0x118235['default']['uo']['mPhone']['screenHeig' + 'ht'], _0x72b3b0['y'] = _0x10b30e * Laya['stage']['height'] / _0x118235['default']['uo']['mPhone']['screenHeig' + 'ht'], _0x53396d && (_0x72b3b0['x'] = 0x4d, _0x72b3b0['y'] = 0.5);
                            }
                        }
                        return _0x53396d && (_0x72b3b0['x'] = 0x4d, _0x72b3b0['y'] = 0.5), _0x72b3b0;
                    }, _0x148d9b['prototype']['dealTopVal' + 'ue'] = function (_0x4159a1) {
                        return _0x4159a1 > 0x0 ? _0x4159a1 : Number(_0x118235['default']['uo']['phone']()['screenHeig' + 'ht']) > 0x320 ? 0x28 : 0xa;
                    }, _0x148d9b['prototype']['getMyMark'] = function () {
                        var _0x42176a = this;
                        this['mHttpCall'] = new _0xb1e8d(), this['mHttpCall']['once'](Laya['Event']['COMPLETE'], this, function (_0x115e81) {
                            wx['hideLoadin' + 'g']();
                            var _0x466dab = null;
                            _0x466dab = 'string' == typeof _0x115e81 ? _0x4787db['util']['getJSON'](_0x115e81) : _0x4787db['util']['getJSON'](_0x42176a['mHttpCall']['data']), _0x3abc38['LogUtil']['log']('getMyMark(' + ')\x20->\x20onRes' + 'ult\x20ret\x20=\x20' + JSON['stringify'](_0x466dab)), 0x0 == _0x466dab['code'] && (_0x42176a['mMarks'][0x0] = Number(_0x466dab['mark']['mark']), wx['postMessag' + 'e']({
                                'type': 'send',
                                'mark': _0x42176a['mMarks'][0x0],
                                'level': 0x0,
                                'best': 0x0,
                                'user': _0x118235['default']['uo']['getUser']()
                            })), _0x42176a['mHttpCall'] = null;
                        }), this['mHttpCall']['once'](Laya['Event']['ERROR'], this, this['onHttpRequ' + 'estError']);
                        var _0x5e7eb8 = [];
                        _0x5e7eb8['uid'] = this['mUID'];
                        var _0x253163 = _0x521d78['ConfigUtil']['mURL'] + _0x521d78['ConfigUtil']['mCmd']['mymark'] + _0x4787db['util']['getUrlPara' + 'ms'](_0x5e7eb8, '1.0.1');
                        this['mHttpCall']['send'](_0x253163, null, 'get', 'text'), _0x3abc38['LogUtil']['log']('getMyMark(' + ')\x20->\x20str\x20=' + '\x20' + _0x253163);
                    }, _0x148d9b['prototype']['reportData'] = function (_0xe94a31) {
                        var _0x768121 = this;
                        this['mHttpCall'] = new _0xb1e8d(), this['mHttpCall']['once'](Laya['Event']['COMPLETE'], this, function (_0x1a4b68) {
                            _0x768121['mHttpCall'] = null, _0x3abc38['LogUtil']['log']('reportData' + '()\x20->\x20onRe' + 'sult\x20e\x20=\x20' + JSON['stringify'](_0x1a4b68));
                        }), this['mHttpCall']['once'](Laya['Event']['ERROR'], this, this['onHttpRequ' + 'estError']);
                        var _0x27c27a = [];
                        _0x27c27a['uid'] = this['mUID'], _0x27c27a['type'] = _0xe94a31;
                        var _0x4da459 = _0x521d78['ConfigUtil']['mURL'] + _0x521d78['ConfigUtil']['mCmd']['ad'] + _0x4787db['util']['getUrlPara' + 'ms'](_0x27c27a, '1.0.1');
                        this['mHttpCall']['send'](_0x4da459, null, 'get', 'text'), _0x3abc38['LogUtil']['log']('reportData' + '()\x20->\x20str\x20' + '=\x20' + _0x4da459);
                    }, _0x148d9b['prototype']['initReturn'] = function () {
                        var _0x2fc8e8 = _0x118235['default']['uo']['launch']()['query']['pid'];
                        null == _0x2fc8e8 || void 0x0 === _0x2fc8e8 || '' == _0x2fc8e8 ? (this['mReturnApp' + 'id'] = '', this['mReturnUrl'] = '') : 0x8 == Number(_0x2fc8e8) ? (this['mReturnApp' + 'id'] = '', this['mReturnUrl'] = '') : (this['mReturnApp' + 'id'] = _0x2fc8e8, this['mReturnUrl'] = 'pages/inde' + 'x/index?');
                    }, _0x148d9b['prototype']['getOnOffRe' + 'ward1'] = function () {
                        for (var _0x24fd2b = 0x0, _0x150fa7 = 0x0; _0x150fa7 < _0x374e99['default']['app']['mWX']['mOnOff']['length']; _0x150fa7++)
                            if ('of_reward_' + 'first' == _0x374e99['default']['app']['mWX']['mOnOff'][_0x150fa7]['key']) {
                                _0x24fd2b = Number(JSON['parse'](_0x374e99['default']['app']['mWX']['mOnOff'][_0x150fa7]['param'])['levelNum']);
                                break;
                            }
                        return _0x24fd2b;
                    }, _0x148d9b['prototype']['getOnOffRe' + 'ward2'] = function () {
                        for (var _0x1a36e8 = 0x0, _0xa89de = 0x0; _0xa89de < _0x374e99['default']['app']['mWX']['mOnOff']['length']; _0xa89de++)
                            if ('of_reward_' + 'getstyle' == _0x374e99['default']['app']['mWX']['mOnOff'][_0xa89de]['key']) {
                                _0x1a36e8 = Number(_0x374e99['default']['app']['mWX']['mOnOff'][_0xa89de]['value']);
                                break;
                            }
                        return _0x1a36e8;
                    }, _0x148d9b['prototype']['getOnOffRe' + 'ward3'] = function () {
                        for (var _0x3bf602 = 0x0, _0x50521e = 0x0; _0x50521e < _0x374e99['default']['app']['mWX']['mOnOff']['length']; _0x50521e++)
                            if ('of_reward_' + 'interval' == _0x374e99['default']['app']['mWX']['mOnOff'][_0x50521e]['key']) {
                                _0x3bf602 = Number(JSON['parse'](_0x374e99['default']['app']['mWX']['mOnOff'][_0x50521e]['param'])['interval']);
                                break;
                            }
                        return _0x3bf602;
                    }, _0x148d9b['prototype']['getOnOffRe' + 'wardSkip'] = function () {
                        for (var _0x4ace6d = 0x0, _0x11add2 = 0x0; _0x11add2 < _0x374e99['default']['app']['mWX']['mOnOff']['length']; _0x11add2++)
                            if ('of_reward_' + 'skip' == _0x374e99['default']['app']['mWX']['mOnOff'][_0x11add2]['key']) {
                                _0x4ace6d = Number(JSON['parse'](_0x374e99['default']['app']['mWX']['mOnOff'][_0x11add2]['param'])['delay']);
                                break;
                            }
                        return _0x4ace6d;
                    }, _0x148d9b['prototype']['getOnOffAl' + 'lControl'] = function () {
                        for (var _0x42508c = 0x0, _0x1f0207 = 0x0; _0x1f0207 < _0x374e99['default']['app']['mWX']['mOnOff']['length']; _0x1f0207++)
                            if ('of_all' == _0x374e99['default']['app']['mWX']['mOnOff'][_0x1f0207]['key']) {
                                _0x42508c = Number(_0x374e99['default']['app']['mWX']['mOnOff'][_0x1f0207]['value']);
                                break;
                            }
                        return _0x42508c;
                    }, _0x148d9b['prototype']['getOnOffSt' + 'artReward'] = function () {
                        for (var _0x269d61 = 0x0, _0x41c3b8 = 0x0; _0x41c3b8 < _0x374e99['default']['app']['mWX']['mOnOff']['length']; _0x41c3b8++)
                            if ('of_start_r' + 'eward' == _0x374e99['default']['app']['mWX']['mOnOff'][_0x41c3b8]['key']) {
                                _0x269d61 = Number(_0x374e99['default']['app']['mWX']['mOnOff'][_0x41c3b8]['value']);
                                break;
                            }
                        return _0x269d61;
                    }, _0x148d9b['prototype']['getOnOffSt' + 'artReward2'] = function () {
                        for (var _0x466f4d = 0x0, _0x3ae387 = 0x0; _0x3ae387 < _0x374e99['default']['app']['mWX']['mOnOff']['length']; _0x3ae387++)
                            if ('of_startre' + 'ward_inter' + 'val' == _0x374e99['default']['app']['mWX']['mOnOff'][_0x3ae387]['key']) {
                                _0x466f4d = Number(JSON['parse'](_0x374e99['default']['app']['mWX']['mOnOff'][_0x3ae387]['param'])['interval']);
                                break;
                            }
                        return _0x466f4d;
                    }, _0x148d9b['prototype']['getOnOffSt' + 'artReward3'] = function () {
                        for (var _0x3999d8 = 0x0, _0x2927df = 0x0; _0x2927df < _0x374e99['default']['app']['mWX']['mOnOff']['length']; _0x2927df++)
                            if ('of_startre' + 'ward_first' + 'appear' == _0x374e99['default']['app']['mWX']['mOnOff'][_0x2927df]['key']) {
                                _0x3999d8 = Number(JSON['parse'](_0x374e99['default']['app']['mWX']['mOnOff'][_0x2927df]['param'])['level']);
                                break;
                            }
                        return _0x3999d8;
                    }, _0x148d9b['prototype']['getOnOffBo' + 'xReward2'] = function () {
                        for (var _0x37aef2 = 0x0, _0x3a5a25 = 0x0; _0x3a5a25 < _0x374e99['default']['app']['mWX']['mOnOff']['length']; _0x3a5a25++)
                            if ('of_boxrewa' + 'rd_change' == _0x374e99['default']['app']['mWX']['mOnOff'][_0x3a5a25]['key']) {
                                _0x37aef2 = Number(JSON['parse'](_0x374e99['default']['app']['mWX']['mOnOff'][_0x3a5a25]['param'])['interval']);
                                break;
                            }
                        return _0x37aef2;
                    }, _0x148d9b['prototype']['getOnOffBo' + 'xReward'] = function () {
                        for (var _0x22c87b = [], _0x4c5c06 = 0x0, _0x38b9bd = 0x0, _0x324163 = 0x0; _0x324163 < _0x374e99['default']['app']['mWX']['mOnOff']['length']; _0x324163++)
                            if ('of_box_rew' + 'ard' == _0x374e99['default']['app']['mWX']['mOnOff'][_0x324163]['key']) {
                                _0x4c5c06 = Number(_0x374e99['default']['app']['mWX']['mOnOff'][_0x324163]['value']), _0x38b9bd = Number(JSON['parse'](_0x374e99['default']['app']['mWX']['mOnOff'][_0x324163]['param'])['count']), _0x22c87b['push'](_0x4c5c06), _0x22c87b['push'](_0x38b9bd);
                                break;
                            }
                        return _0x22c87b;
                    }, _0x148d9b['prototype']['onLaunch'] = function (_0x4a3fe5, _0x2d04fb) {
                        console['log']('onLaunchon' + 'LaunchonLa' + 'unchonLaun' + 'chonLaunch' + 'onLaunch'), void 0x0 === _0x2d04fb && (_0x2d04fb = !0x1);
                        var _0x346611 = _0x118235['default']['uo']['getUser'](), _0x23adb5 = {};
                        Laya['Browser']['onIOS'] ? _0x23adb5['platform'] = 0x2 : _0x23adb5['platform'] = 0x1, _0x23adb5['uid'] = _0x118235['default']['uo']['mWeUser']['uid'], _0x23adb5['name'] = _0x94f5dc['TsBase64']['EncodeURI'](_0x346611['nickName']), _0x23adb5['avatar'] = _0x94f5dc['TsBase64']['EncodeURI'](_0x346611['avatarUrl']), _0x23adb5['ver'] = _0x521d78['ConfigUtil']['mVersion'], void 0x0 !== _0x4a3fe5['query']['uid'] && (_0x23adb5['target'] = _0x4a3fe5['query']['uid']), void 0x0 !== _0x4a3fe5['query']['type'] && (_0x23adb5['type'] = _0x4a3fe5['query']['type']), void 0x0 !== _0x4a3fe5['query']['id'] && (_0x23adb5['id'] = _0x4a3fe5['query']['id']), _0x118235['default']['uo']['server'](_0x3e84da['wxCallBack']['mIF']['lauch'], _0x23adb5, function (_0x463ae6) {
                            if (0x0 == _0x463ae6['code']) {
                                if (console['log']('用户的数据', _0x463ae6), _0x374e99['default']['app']['mWX']['getMediaTy' + 'pe'](_0x4a3fe5, _0x463ae6), Laya['Browser']['window']['sharedCanv' + 'as']['width'] = Laya['stage']['width'], Laya['Browser']['window']['sharedCanv' + 'as']['height'] = Laya['stage']['height'], _0x374e99['default']['app']['mWX']['mMarks'][0x0] = Number(_0x463ae6['marks']['mark']), _0x374e99['default']['app']['mWX']['mMarks'][0x1] = Number(_0x463ae6['marks']['mark1']), _0x374e99['default']['app']['mWX']['mMarks'][0x2] = Number(_0x463ae6['marks']['mark2']), _0x374e99['default']['app']['mWX']['mMarks'][0x3] = Number(_0x463ae6['marks']['mark3']), _0x374e99['default']['app']['mWX']['fhOnoff'] = Number(_0x463ae6['fh_onoff']), console['log']('开关', _0x374e99['default']['app']['mWX']['fhOnoff']), _0x374e99['default']['app']['mWX']['mCards'] = Number(_0x463ae6['marks']['cards']), _0x54ebf0['ShareConfi' + 'g']['sShareUrls'] = _0x463ae6['shareurl'], _0x374e99['default']['app']['mWX']['mTaskInfo'] = _0x463ae6['task_info'], _0x374e99['default']['app']['mWX']['mOnOff'] = _0x463ae6['on_off'], _0x374e99['default']['app']['mWX']['mNowDay'] = _0x463ae6['nowday'], _0x374e99['default']['app']['adUtil']['mCustomBan' + 'nerAdList'] = _0x463ae6['games_ad'], _0x374e99['default']['app']['mWX']['mCoinsNum'] = Number(_0x463ae6['coins']), _0x374e99['default']['app']['mWX']['mWxAdUrl'] = _0x463ae6['wxadurl'], _0x374e99['default']['app']['mWX']['mdtValues'] = _0x463ae6['dt_values'], _0x374e99['default']['app']['mWX']['oddEvenTes' + 'tModel'] = new _0x9d0560['OddEvenTes' + 'tModel'](_0x463ae6), void 0x0 != _0x463ae6['item_list'] && null != _0x463ae6['item_list'] && (_0x374e99['default']['app']['mWX']['mPropList'] = _0x463ae6['item_list']), '0' != String(_0x463ae6['use_item']) && (_0x374e99['default']['app']['mWX']['mUsingProp' + 'Id'] = String(_0x463ae6['use_item'])), void 0x0 != typeof _0x463ae6['start_rewa' + 'rd'] && null != _0x463ae6['start_rewa' + 'rd'] && _0x463ae6['start_rewa' + 'rd']['length'] > 0x0 && (_0x374e99['default']['app']['mWX']['mStartAwar' + 'd'] = _0x463ae6['start_rewa' + 'rd']), void 0x0 != _0x463ae6['user_data'] && null != _0x463ae6['user_data'] && _0x463ae6['user_data']['length'] > 0x0 && (_0x374e99['default']['app']['mWX']['mUserData'] = _0x463ae6['user_data']), '' != _0x374e99['default']['app']['mWX']['getUserDat' + 'aByKey']('knife_skin' + '_id') && (_0x55b380['default']['skin_id'] = Number(_0x374e99['default']['app']['mWX']['getUserDat' + 'aByKey']('knife_skin' + '_id'))), '' != _0x374e99['default']['app']['mWX']['getUserDat' + 'aByKey']('Level_num') && (_0x374e99['default']['app']['Level_num'] = Number(_0x374e99['default']['app']['mWX']['getUserDat' + 'aByKey']('Level_num'))), _0x374e99['default']['app']['mWX']['skinId'] = '' == _0x374e99['default']['app']['mWX']['getUserDat' + 'aByKey']('new_reward' + '_knife_id') ? 0x9 : Number(_0x374e99['default']['app']['mWX']['getUserDat' + 'aByKey']('new_reward' + '_knife_id')), _0x374e99['default']['app']['boxSkinId'] = _0x374e99['default']['app']['mWX']['skinId'], console['log']('sssk:', _0x374e99['default']['app']['mWX']['skinId']), _0x374e99['default']['app']['mWX']['initUserMu' + 'sicSoundOn' + 'Off'](), _0x374e99['default']['app']['mWX']['mGamesBox'] = _0x463ae6['games_box'], _0x118235['default']['uo']['mIsNewUser'] = _0x463ae6['nowday'] == _0x463ae6['regday'] ? 0x1 : 0x0, _0x374e99['default']['app']['mWX']['address_1'](), '' == _0x374e99['default']['app']['mWX']['getUserDat' + 'aByKey']('first_shar' + 'e_from') ? (void 0x0 == _0x118235['default']['uo']['launch']['query'] ? (_0x118235['default']['uo']['first_shar' + 'e_from'] = '', _0x118235['default']['uo']['sigh_id'] = '') : (_0x118235['default']['uo']['first_shar' + 'e_from'] = _0x118235['default']['uo']['launch']['query']['uid'], _0x118235['default']['uo']['sigh_id'] = _0x118235['default']['uo']['launch']['query']['adid']), _0x374e99['default']['app']['mWX']['setUserVal' + 'ue']('first_shar' + 'e_from', _0x118235['default']['uo']['first_shar' + 'e_from']), _0x374e99['default']['app']['mWX']['setUserVal' + 'ue']('sigh_id', _0x118235['default']['uo']['sigh_id'])) : (_0x118235['default']['uo']['first_shar' + 'e_from'] = _0x374e99['default']['app']['mWX']['getUserDat' + 'aByKey']('first_shar' + 'e_from'), _0x118235['default']['uo']['sigh_id'] = _0x374e99['default']['app']['mWX']['getUserDat' + 'aByKey']('sigh_id')), _0x374e99['default']['app']['mWX']['getIsNewDa' + 'y'](), _0x374e99['default']['app']['isNewDay'] && (_0x374e99['default']['app']['clickLikeA' + 'rr'] = [], _0x374e99['default']['app']['mWX']['setUserVal' + 'ue']('clickLikeA' + 'rr', '0')), console['log']('scsdsad0', _0x374e99['default']['app']['mWX']['IsOpenMore' + 'Fenfa']()), 0x1 == _0x374e99['default']['app']['mWX']['IsOpenMore' + 'Fenfa']()) {
                                    var _0x53798b = _0x576296['MoreGame']['GetIndexRa' + 'ndomList'](_0x374e99['default']['app']['mWX']['mGamesBox'], 0x9);
                                    for (_0x374e99['default']['app']['mWX']['moreFenFaC' + 'ount'] = 0x0, _0x5991b6 = 0x0; _0x5991b6 < _0x53798b['length']; _0x5991b6++) {
                                        var _0x420d59 = _0x53798b[_0x5991b6];
                                        _0x374e99['default']['app']['mWX']['moreFenFaC' + 'ount'] = _0x374e99['default']['app']['mWX']['moreFenFaC' + 'ount'] < JSON['parse'](_0x420d59['anim_confi' + 'g'])['millisecon' + 'd_static']['split'](',')['length'] ? JSON['parse'](_0x420d59['anim_confi' + 'g'])['millisecon' + 'd_static']['split'](',')['length'] : _0x374e99['default']['app']['mWX']['moreFenFaC' + 'ount'];
                                    }
                                    for (var _0x5991b6 = _0x374e99['default']['app']['mWX']['moreFenFaC' + 'ount']; _0x5991b6 > 0x1; _0x5991b6--)
                                        if (_0x118235['default']['uo']['getUserID']() % _0x5991b6 == 0x0) {
                                            _0x374e99['default']['app']['mWX']['moreFenFaN' + 'um'] = _0x5991b6, console['log']('moreFenFaN' + 'um:', _0x374e99['default']['app']['mWX']['moreFenFaC' + 'ount'], _0x374e99['default']['app']['mWX']['moreFenFaN' + 'um']);
                                            break;
                                        }
                                } else
                                    _0x374e99['default']['app']['mWX']['moreFenFaN' + 'um'] = 0x0;
                                _0x374e99['default']['app']['ChangeScen' + 'e'](), _0x2d04fb || _0x374e99['default']['app']['mWX']['dealQuery'](_0x4a3fe5, !0x0);
                            }
                        });
                    }, _0x148d9b['prototype']['getIsNewDa' + 'y'] = function () {
                        var _0x19c38b = Date['now'](), _0x39bc3d = 0x0, _0x21261c = Laya['LocalStora' + 'ge']['getItem']('lastLoginT' + 'ime');
                        _0x21261c && (_0x39bc3d = Number(_0x21261c)), this['isSameDay'](_0x19c38b, _0x39bc3d) ? (_0x374e99['default']['app']['isNewDay'] = !0x1, _0x3abc38['LogUtil']['log']('=====和上次登录' + '是同一天=====')) : (_0x374e99['default']['app']['isNewDay'] = !0x0, _0x3abc38['LogUtil']['log']('=====新的一天=' + '=========')), Laya['LocalStora' + 'ge']['setItem']('lastLoginT' + 'ime', String(_0x19c38b));
                    }, _0x148d9b['prototype']['isSameDay'] = function (_0xa1a516, _0x2a2cff) {
                        var _0x1c0ed3 = new Date(_0xa1a516), _0x5de196 = new Date(_0x2a2cff);
                        return _0x1c0ed3['getFullYea' + 'r']() == _0x5de196['getFullYea' + 'r']() && _0x1c0ed3['getMonth']() == _0x5de196['getMonth']() && _0x1c0ed3['getDate']() == _0x5de196['getDate']();
                    }, _0x148d9b['prototype']['address_1'] = function () {
                        if (this['is_address']) {
                            this['is_address'] = !0x1, wx['getSystemI' + 'nfoSync']();
                            var _0x8e60c1 = Laya['LocalStora' + 'ge']['getItem']('firstEntry' + 'Time');
                            '' == _0x8e60c1 && (_0x8e60c1 = String(_0x500915['TimeUtil']['getCurrTim' + 'e']()), Laya['LocalStora' + 'ge']['setItem']('firstEntry' + 'Time', _0x8e60c1));
                            var _0x3c9768 = Laya['LocalStora' + 'ge']['getItem']('lastEntryT' + 'ime');
                            ('' == _0x3c9768 && (_0x3c9768 = String(_0x500915['TimeUtil']['getCurrTim' + 'e']()), Laya['LocalStora' + 'ge']['setItem']('lastEntryT' + 'ime', _0x3c9768)), null != _0x118235['default']['uo']['mWeUser']['uid']) && _0x374e99['default']['app']['mWX']['indexBpTot' + 'le']('app_open', {});
                            var _0x15db32 = {
                                'channel_type': 0x0,
                                'share_from': void 0x0 !== _0x118235['default']['uo']['launch']()['query']['uid'] ? _0x118235['default']['uo']['launch']()['query']['uid'] : '0',
                                'first_entry_time': _0x8e60c1,
                                'last_entry_time': _0x3c9768,
                                'device_os_version': _0x118235['default']['uo']['mPhone']['system'],
                                'device_type': _0x118235['default']['uo']['mPhone']['model'],
                                'wechat_version': _0x118235['default']['uo']['mPhone']['version']
                            };
                            _0x374e99['default']['app']['mWX']['indexBpTot' + 'le']('app_entry', _0x15db32);
                        }
                    }, _0x148d9b['prototype']['dealQuery'] = function (_0x29e1eb, _0x572256) {
                        void 0x0 === _0x572256 && (_0x572256 = !0x1), null != _0x29e1eb['query']['gift'] && void 0x0 !== _0x29e1eb['query']['gift'] ? _0x29e1eb['query']['id'] > 0x0 ? _0x374e99['default']['app']['mWX']['addCardFor' + 'Me'](_0x29e1eb['query']['id']) : _0x374e99['default']['app']['mWX']['dealCards']() : 0x8 == Number(_0x29e1eb['query']['type']) ? void 0x0 !== _0x29e1eb['shareTicke' + 't'] && 'undefined' != _0x29e1eb['shareTicke' + 't'] && _0x29e1eb['shareTicke' + 't'] : _0x29e1eb['query']['id'] > 0x0 && (_0x374e99['default']['app']['mWX']['mrelayID'] = _0x29e1eb['query']['id']);
                    }, _0x148d9b['prototype']['displayGam' + 'eClub'] = function (_0x5ce4a6) {
                        null != _0x374e99['default']['app']['mWX']['gameClub'] && (_0x5ce4a6 ? _0x374e99['default']['app']['mWX']['gameClub']['show']() : _0x374e99['default']['app']['mWX']['gameClub']['hide']());
                    }, _0x148d9b['prototype']['getOnOffBy' + 'Key'] = function (_0x4cf4c1) {
                        if (0x0 == this['fhOnoff'] && 'of_jump' != _0x4cf4c1)
                            return !0x1;
                        for (var _0x53bb11 = 0x0; _0x53bb11 < this['mOnOff']['length']; _0x53bb11++)
                            if (this['mOnOff'][_0x53bb11]['key'] == _0x4cf4c1)
                                return '0' != this['mOnOff'][_0x53bb11]['value'];
                        return !0x1;
                    }, _0x148d9b['prototype']['isTodayChe' + 'ck'] = function (_0xda36fe, _0x550c64) {
                        for (var _0x4b691c = 0x1; _0x4b691c <= 0x7; _0x4b691c++)
                            if (Number(_0xda36fe['day_' + _0x4b691c]) == _0x550c64)
                                return !0x1;
                        return !0x0;
                    }, _0x148d9b['prototype']['updateLoca' + 'lPropCount'] = function (_0x4431b3, _0x105535) {
                        for (var _0x1834ed = 0x0; _0x1834ed < _0x374e99['default']['app']['mWX']['mPropList']['length']; _0x1834ed++)
                            if (_0x374e99['default']['app']['mWX']['mPropList'][_0x1834ed]['id'] == _0x4431b3) {
                                _0x374e99['default']['app']['mWX']['mPropList'][_0x1834ed]['count'] = _0x105535;
                                break;
                            }
                    }, _0x148d9b['prototype']['updateLoca' + 'lTaskStatu' + 's'] = function (_0x4a7dc0, _0x3a3362) {
                        for (var _0x169198 = 0x0; _0x169198 < this['mTaskInfo']['length']; _0x169198++)
                            if (this['mTaskInfo'][_0x169198]['id'] == _0x4a7dc0) {
                                this['mTaskInfo'][_0x169198]['give'] = _0x3a3362;
                                break;
                            }
                    }, _0x148d9b['prototype']['updateLoca' + 'lTaskOverC' + 'ount'] = function (_0x3cd711, _0x4b0895) {
                        for (var _0x55abcb = 0x0; _0x55abcb < this['mTaskInfo']['length']; _0x55abcb++)
                            if (this['mTaskInfo'][_0x55abcb]['id'] == _0x3cd711) {
                                this['mTaskInfo'][_0x55abcb]['over_count'] = _0x4b0895;
                                break;
                            }
                    }, _0x148d9b['prototype']['setUserVal' + 'ue'] = function (_0x76c74b, _0x1a8ba6, _0x140dec, _0x1ddd36) {
                        platform['getInstanc' + 'e']()['setStorage' + 'Sync'](_0x76c74b, _0x1a8ba6);
                    }, _0x148d9b['prototype']['getUserDat' + 'aByKey'] = function (_0x2599e3) {
                        if (_0x2599e3 == 'gold')
                            return platform['getInstanc' + 'e']()['getStorage' + 'Sync'](_0x2599e3) || 0x0;
                        if (_0x2599e3 == 'Level_num')
                            return platform['getInstanc' + 'e']()['getStorage' + 'Sync'](_0x2599e3) || 0x1;
                        return platform['getInstanc' + 'e']()['getStorage' + 'Sync'](_0x2599e3) || '';
                    }, _0x148d9b['prototype']['updateUser' + 'DataByKey'] = function (_0x2de76c, _0x5d2547) {
                        platform['getInstanc' + 'e']()['setStorage' + 'Sync'](_0x2de76c, _0x5d2547);
                    }, _0x148d9b['prototype']['ChangeTCt'] = function (_0x53c0e8, _0xd815e4, _0x211ed6, _0x580424) {
                    }, _0x148d9b['prototype']['getPropCou' + 'nt'] = function (_0x7fde4d) {
                    }, _0x148d9b['prototype']['getSpecifi' + 'cTaskIdByG' + 'oto'] = function (_0x36b8f7) {
                        var _0x5f260b = '';
                        return _0x374e99['default']['app']['mWX']['mTaskInfo']['forEach'](function (_0x336651) {
                            if ('' != _0x336651['param']) {
                                var _0x46b3fc = JSON['parse'](_0x336651['param']);
                                'string' == typeof _0x46b3fc['goto'] && _0x46b3fc['goto'] == _0x36b8f7 && (_0x5f260b = _0x336651['id']);
                            }
                        }), _0x5f260b;
                    }, _0x148d9b['prototype']['isTaskFini' + 'shByGoto'] = function (_0x140a25) {
                        var _0x2471a5 = !0x1;
                        return _0x374e99['default']['app']['mWX']['mTaskInfo']['forEach'](function (_0x431e0b) {
                            if ('' != _0x431e0b['param']) {
                                var _0x284add = JSON['parse'](_0x431e0b['param']);
                                'string' == typeof _0x284add['goto'] && _0x284add['goto'] == _0x140a25 && _0x431e0b['over_count'] >= _0x431e0b['count'] && (_0x2471a5 = !0x0);
                            }
                        }), _0x2471a5;
                    }, _0x148d9b['prototype']['getMediaTy' + 'pe'] = function (_0x371517, _0x3cd903) {
                        var _0x76191d = this, _0x219483 = (_0x371517['query']['ald_media_' + 'id'], _0x371517['query']['ald_link_k' + 'ey']);
                        console['log']('query:', _0x371517['query']), this['channel_id'] = _0x219483 ? String(_0x219483) : '0';
                        var _0x4689de = _0x3cd903['nowday'] == _0x3cd903['regday'];
                        if (this['first_chan' + 'nel_id'] = '-1', _0x4689de)
                            (_0x38099b = _0x3cd903['user_data'])['forEach'](function (_0x531970) {
                                'first_chan' + 'nel_id' == _0x531970['key'] && (_0x76191d['first_chan' + 'nel_id'] = String(_0x531970['values']));
                            }), '-1' == this['first_chan' + 'nel_id'] && (this['first_chan' + 'nel_id'] = this['channel_id'], _0x374e99['default']['app']['mWX']['setUserVal' + 'ue']('first_chan' + 'nel_id', String(this['first_chan' + 'nel_id'])));
                        else {
                            var _0x38099b = _0x3cd903['user_data'];
                            _0x38099b['forEach'](function (_0x1e380c) {
                                'first_chan' + 'nel_id' == _0x1e380c['key'] && (_0x76191d['first_chan' + 'nel_id'] = String(_0x1e380c['values']));
                            }), '-1' == this['first_chan' + 'nel_id'] && (this['first_chan' + 'nel_id'] = '0', _0x374e99['default']['app']['mWX']['setUserVal' + 'ue']('first_chan' + 'nel_id', String(this['first_chan' + 'nel_id'])));
                        }
                    }, _0x148d9b['prototype']['isOwnSpeci' + 'ficProp'] = function (_0x218c4b) {
                        var _0x591357 = 0x0;
                        return this['mPropList']['forEach'](function (_0x3c7d81) {
                            _0x3c7d81['id'] == _0x218c4b && Number(_0x3c7d81['count']) > 0x0 && (_0x591357 = Number(_0x3c7d81['count']));
                        }), _0x591357;
                    }, _0x148d9b['prototype']['getOnOffVa' + 'lueByKey'] = function (_0x4cc165) {
                        for (var _0x424985 = 0x0; _0x424985 < this['mOnOff']['length']; _0x424985++)
                            if (this['mOnOff'][_0x424985]['key'] == _0x4cc165)
                                return this['mOnOff'][_0x424985]['value'];
                        return '0';
                    }, _0x148d9b['prototype']['itemTotle'] = function (_0x127b33, _0x5c78b5, _0x39f34d, _0x410b89, _0x3cbfe9) {
                        void 0x0 === _0x410b89 && (_0x410b89 = ''), void 0x0 === _0x3cbfe9 && (_0x3cbfe9 = 0x1);
                        var _0x3e8917 = this;
                        this['mHttpCall'] = new _0xb1e8d(), this['mHttpCall']['once'](Laya['Event']['COMPLETE'], this, function (_0x2172de) {
                            _0x3e8917['mHttpCall'] = null;
                        }), this['mHttpCall']['once'](Laya['Event']['ERROR'], this, this['onHttpRequ' + 'estError']);
                        var _0x2c96f0 = [];
                        _0x2c96f0['uid'] = this['mUID'], _0x2c96f0['useitem'] = _0x127b33, _0x2c96f0['usect'] = _0x3cbfe9, _0x2c96f0['poskey'] = _0x5c78b5, void 0x0 != _0x39f34d && null != _0x39f34d && (_0x2c96f0['starttm'] = _0x39f34d), '' != _0x410b89 && (_0x2c96f0['other'] = _0x410b89);
                        var _0x5c0f10 = _0x521d78['ConfigUtil']['mURL'] + _0x521d78['ConfigUtil']['mCmd']['ItemTotle'] + _0x4787db['util']['getUrlPara' + 'ms'](_0x2c96f0, '1.0.1');
                        this['mHttpCall']['send'](_0x5c0f10, null, 'get', 'text');
                    }, _0x148d9b['prototype']['getWxAdOpe' + 'n'] = function (_0x19d1af) {
                        var _0x28ebf3 = '';
                        return void 0x0 == _0x374e99['default']['app']['mWX']['mWxAdUrl'] || null == _0x374e99['default']['app']['mWX']['mWxAdUrl'] || 0x0 == _0x374e99['default']['app']['mWX']['mWxAdUrl']['length'] ? _0x28ebf3 : (_0x374e99['default']['app']['mWX']['mWxAdUrl']['forEach'](function (_0x1ebdb3) {
                            _0x1ebdb3['id'] != _0x19d1af || (_0x28ebf3 = _0x1ebdb3['open']);
                        }), _0x28ebf3);
                    }, _0x148d9b['prototype']['getWxAdUni' + 'tIdById'] = function (_0x5316cf) {
                        var _0x51d241 = '';
                        return void 0x0 == _0x374e99['default']['app']['mWX']['mWxAdUrl'] || null == _0x374e99['default']['app']['mWX']['mWxAdUrl'] || 0x0 == _0x374e99['default']['app']['mWX']['mWxAdUrl']['length'] ? _0x51d241 : (_0x374e99['default']['app']['mWX']['mWxAdUrl']['forEach'](function (_0x3309a8) {
                            _0x3309a8['id'] != _0x5316cf || '1' == _0x3309a8['open'] && (_0x51d241 = _0x3309a8['unitid']);
                        }), _0x51d241);
                    }, _0x148d9b['prototype']['getVideoRe' + 'wardArr'] = function () {
                        var _0x2f8ac8 = [];
                        return _0x374e99['default']['app']['mWX']['mOnOff']['forEach'](function (_0x3940a9) {
                            'of_v_rewar' + 'd' != _0x3940a9['key'] || (_0x2f8ac8 = String(_0x3940a9['param'])['split'](',')['map'](Number));
                        }), _0x2f8ac8;
                    }, _0x148d9b['prototype']['getVideoRe' + 'wardByCoun' + 't'] = function (_0x30538d) {
                        var _0x15331f = _0x374e99['default']['app']['mWX']['getVideoRe' + 'wardArr']();
                        return _0x30538d < _0x15331f['length'] ? _0x15331f[_0x30538d] : _0x15331f[_0x15331f['length'] - 0x1];
                    }, _0x148d9b['prototype']['getOnOffPa' + 'ramByKey'] = function (_0xea3614) {
                        for (var _0x58893d = '', _0x3c3edd = 0x0; _0x3c3edd < _0x374e99['default']['app']['mWX']['mOnOff']['length']; _0x3c3edd++)
                            if (_0x374e99['default']['app']['mWX']['mOnOff'][_0x3c3edd]['key'] == _0xea3614) {
                                _0x58893d = _0x374e99['default']['app']['mWX']['mOnOff'][_0x3c3edd]['param'];
                                break;
                            }
                        return _0x58893d;
                    }, _0x148d9b['prototype']['getShareTi' + 'meByCount'] = function () {
                        var _0x4092b7 = _0x374e99['default']['app']['mWX']['getOnOffPa' + 'ramByKey']('of_share_t' + 'ime');
                        console['log']('分享时间', _0x4092b7);
                        var _0x4d625e = _0x4092b7['split'](',');
                        return _0x374e99['default']['app']['mWX']['mShareCoun' + 't'] > 0x0 ? Number(_0x4d625e[_0x4d625e['length'] - 0x1]) / 0x3e8 : Number(_0x4d625e[0x0]) / 0x3e8;
                    }, _0x148d9b['prototype']['getRandomG' + 'ames'] = function (_0x392b83) {
                        if (_0x374e99['default']['app']['mWX']['mGamesBox']['length'] < _0x392b83)
                            return _0x374e99['default']['app']['mWX']['mGamesBox'];
                        for (var _0x2263b3 = []['concat'](_0x374e99['default']['app']['mWX']['mGamesBox']), _0xe600f6 = [], _0x295005 = 0x0; _0x295005 < _0x392b83; _0x295005++) {
                            var _0x3c93ab = Math['floor'](Math['random']() * (0x1 - _0x2263b3['length']) + _0x2263b3['length']), _0x1fb246 = _0x2263b3[_0x3c93ab - 0x1];
                            _0xe600f6['push'](_0x1fb246), _0x2263b3['splice'](_0x3c93ab - 0x1, 0x1);
                        }
                        return _0xe600f6;
                    }, _0x148d9b['prototype']['getStartAw' + 'ardObject'] = function () {
                        if (0x0 == _0x374e99['default']['app']['mWX']['mStartAwar' + 'd']['length'])
                            return null;
                        var _0x1c585f = _0x374e99['default']['app']['mWX']['mStartAwar' + 'd'][0x0]['reward'];
                        return '' == JSON['parse'](_0x1c585f)['itemid'] ? null : JSON['parse'](_0x1c585f);
                    }, _0x148d9b['prototype']['getItemNam' + 'eByItemId'] = function (_0x21d214) {
                        for (var _0x2b52c7 = '', _0x325653 = 0x0; _0x325653 < _0x374e99['default']['app']['mWX']['mPropList']['length']; _0x325653++)
                            if (_0x374e99['default']['app']['mWX']['mPropList'][_0x325653]['id'] == _0x21d214) {
                                _0x2b52c7 = _0x374e99['default']['app']['mWX']['mPropList'][_0x325653]['name'];
                                break;
                            }
                        return _0x2b52c7;
                    }, _0x148d9b['prototype']['getItemByI' + 'temId'] = function (_0x34796c) {
                        for (var _0x161a4b = '', _0x713dfe = 0x0; _0x713dfe < _0x374e99['default']['app']['mWX']['mPropList']['length']; _0x713dfe++)
                            if (_0x374e99['default']['app']['mWX']['mPropList'][_0x713dfe]['id'] == _0x34796c) {
                                _0x161a4b = _0x374e99['default']['app']['mWX']['mPropList'][_0x713dfe]['name'];
                                break;
                            }
                        return _0x161a4b;
                    }, _0x148d9b['prototype']['initPassAw' + 'ardData'] = function () {
                        _0x374e99['default']['app']['mWX']['mPassAward' + 'ListData']['splice'](0x0, _0x374e99['default']['app']['mWX']['mPassAward' + 'ListData']['length']), _0x374e99['default']['app']['mWX']['mPropList']['forEach'](function (_0x58f5f8) {
                            '0' != _0x58f5f8['gamebox'] && '2' == _0x58f5f8['type'] && _0x374e99['default']['app']['mWX']['mPassAward' + 'ListData']['push'](_0x58f5f8);
                        });
                    }, _0x148d9b['prototype']['getPassAwa' + 'rdDataByLe' + 'vel'] = function (_0x3fe801) {
                        for (var _0x3a0f4c = null, _0x65e4eb = 0x0; _0x65e4eb < _0x374e99['default']['app']['mWX']['mPassAward' + 'ListData']['length']; _0x65e4eb++) {
                            if ('string' != typeof _0x374e99['default']['app']['mWX']['mPassAward' + 'ListData'][_0x65e4eb]['other'])
                                return;
                            var _0x64c45e = JSON['parse'](_0x374e99['default']['app']['mWX']['mPassAward' + 'ListData'][_0x65e4eb]['other']);
                            _0x3fe801 == Number(_0x64c45e['num']) && (_0x3a0f4c = _0x374e99['default']['app']['mWX']['mPassAward' + 'ListData'][_0x65e4eb]);
                        }
                        return _0x3a0f4c;
                    }, _0x148d9b['prototype']['initUserMu' + 'sicSoundOn' + 'Off'] = function () {
                        0x0 != _0x374e99['default']['app']['mWX']['mUserData']['length'] && _0x374e99['default']['app']['mWX']['mUserData']['forEach'](function (_0x1e9a59) {
                            _0x1e9a59['key'];
                        });
                    }, _0x148d9b['prototype']['getStartRe' + 'wardArr'] = function () {
                        var _0x37d8c3 = 0x1;
                        return _0x374e99['default']['app']['mWX']['mOnOff']['forEach'](function (_0x293bc1) {
                            'of_start' != _0x293bc1['key'] || (_0x37d8c3 = Number(_0x293bc1['value']));
                        }), _0x37d8c3;
                    }, _0x148d9b['prototype']['getDoubleC' + 'oinArr'] = function () {
                        var _0xf24b23 = 0x1;
                        return _0x374e99['default']['app']['mWX']['mOnOff']['forEach'](function (_0x2b5418) {
                            'of_coins_d' + 'ouble' != _0x2b5418['key'] || (_0xf24b23 = Number(_0x2b5418['value']));
                        }), _0xf24b23;
                    }, _0x148d9b['prototype']['GetBPUrl'] = function () {
                        var _0x4f3ba2 = '';
                        return _0x374e99['default']['app']['mWX']['mdtValues']['forEach'](function (_0x5426eb) {
                            'dt_log_url' != _0x5426eb['key'] || (_0x4f3ba2 = _0x5426eb['param']);
                        }), console['log']('获得埋点地址', _0x4f3ba2), _0x4f3ba2;
                    }, _0x148d9b['prototype']['indexBpTot' + 'le'] = function (_0x2403bf, _0x450cb4) {
                        if (window['wx']) {
                            this['mHttpCall'] = new _0xb1e8d(), this['mHttpCall']['once'](Laya['Event']['COMPLETE'], this, this['onHttpRequ' + 'estError']), _0x450cb4['uid'] = _0x118235['default']['uo']['mWeUser']['uid'], _0x450cb4['is_new'] = _0x118235['default']['uo']['mIsNewUser'], _0x450cb4['session_id'] = _0x118235['default']['uo']['loginSessi' + 'on'], _0x450cb4['create_tim' + 'e'] = _0x500915['TimeUtil']['getCurrTim' + 'e'](), _0x450cb4['channel_id'] = _0x374e99['default']['app']['mWX']['channel_id'], _0x450cb4['first_chan' + 'nel_id'] = _0x374e99['default']['app']['mWX']['first_chan' + 'nel_id'];
                            var _0x4e6df9 = this['GetBPUrl']() + '&keyname=' + _0x2403bf + '&clos=' + JSON['stringify'](_0x450cb4) + ('&platform=' + '5&uid=') + _0x374e99['default']['app']['mWX']['mUID'] + '&now_time' + new Date()['getTime']();
                            console['log']('埋点统计：', _0x4e6df9), this['mHttpCall']['send'](_0x4e6df9, null, 'get', 'text');
                        }
                    }, _0x148d9b;
                }();
            _0x1ffe71['default'] = _0x3c1720;
        },
        {
            '../Main': 0xe,
            '../script/MyLikeView': 0x21,
            '../script/ShopView': 0x24,
            '../util/ConfigUtil': 0x31,
            '../util/LogUtil': 0x32,
            '../util/ShareConfig': 0x33,
            '../util/TimeUtil': 0x35,
            './Base64': 0x10,
            './MoreGame': 0x16,
            './OddEvenTestModel': 0x17,
            './gameBox': 0x18,
            './util': 0x19,
            './wxCallBack': 0x1a,
            './wxCore': 0x1b
        }
    ],
    0x1d: [
        function (_0x1d038a, _0x2186b6, _0x1be6e1) {
            'use strict';
            Object['defineProp' + 'erty'](_0x1be6e1, '__esModule', { 'value': !0x0 });
            var _0x3948a1 = _0x1d038a('./GameUI'), _0x396e32 = _0x1d038a('./gameObje' + 'ct/Food'), _0x5666da = _0x1d038a('./gameObje' + 'ct/BoardBa' + 'd'), _0x14c76a = _0x1d038a('./gameObje' + 'ct/BoardDi' + 'e'), _0xa21c62 = _0x1d038a('./gameObje' + 'ct/BoardSu' + 'ccess'), _0x2a51e8 = _0x1d038a('./gameObje' + 'ct/PlayerC' + 'trl'), _0x34da51 = _0x1d038a('../Main'), _0x27cf8f = _0x1d038a('./SoundPla' + 'yMgr'), _0x57e407 = function (_0x21325a) {
                    function _0x3c75fa() {
                        var _0x2734f9 = _0x21325a['call'](this) || this;
                        return _0x2734f9['intType'] = 0x3e8, _0x2734f9['numType'] = 0x3e8, _0x2734f9['strType'] = 'hello\x20laya', _0x2734f9['boolType'] = !0x0, _0x2734f9['Cut'] = !0x1, _0x2734f9['Die'] = !0x1, _0x2734f9['nowScore'] = 0x0, _0x2734f9['CreateObj'] = [], _0x2734f9['CreateInde' + 'x'] = 0x0, _0x2734f9['isSuccess'] = !0x1, _0x2734f9['speed'] = 0x1, _0x2734f9['__z'] = new Laya['Vector3'](0x0, 0x0, 0x5), _0x2734f9['speedLineF' + 'lag'] = 0x0, _0x2734f9;
                    }
                    return __extends(_0x3c75fa, _0x21325a), _0x3c75fa['prototype']['onAwake'] = function () {
                        _0x3c75fa['instance'] = this;
                    }, _0x3c75fa['prototype']['onEnable'] = function () {
                    }, _0x3c75fa['prototype']['onDisable'] = function () {
                    }, _0x3c75fa['prototype']['createGame' + 'Object'] = function (_0x907d8e, _0x5ba1a4) {
                        if (void 0x0 === _0x907d8e && (_0x907d8e = 0x0), void 0x0 === _0x5ba1a4 && (_0x5ba1a4 = 0x6), 0x0 == this['CreateObj']['length']) {
                            if (window['wx'])
                                _0x1fbf30 = Laya['loader']['getRes'](_0x34da51['default']['app']['URL'] + ('res/level.' + 'json'));
                            else
                                var _0x1fbf30 = Laya['loader']['getRes']('res/level.' + 'json');
                            void 0x0 == _0x1fbf30['level' + _0x34da51['default']['app']['Level_num']] && (_0x34da51['default']['app']['Level_num'] = 0x1), this['CreateObj'] = _0x1fbf30['level' + _0x34da51['default']['app']['Level_num']];
                        }
                        this['CreateObj'][this['CreateInde' + 'x']] || (this['CreateInde' + 'x'] = 0x0);
                        var _0x360e4 = this['CreateObj'][this['CreateInde' + 'x']]['id'];
                        _0x3948a1['default']['app']['txt_level']['text'] = '' + _0x34da51['default']['app']['Level_num'];
                        var _0x2e4558 = this['CreateObj'][this['CreateInde' + 'x']]['type'];
                        this['CreateInde' + 'x']++, this['isSuccess'] && (_0x360e4 = 'Success', _0x2e4558 = 0x63);
                        var _0x20c6ce = Laya['loader']['getRes']('Scenes/' + _0x360e4 + '.lh'), _0x32c6af = Laya['Sprite3D']['instantiat' + 'e'](_0x20c6ce);
                        switch (Number(_0x2e4558)) {
                        case 0x1:
                            _0x32c6af['addCompone' + 'nt'](_0x396e32['default']);
                            break;
                        case 0x2:
                            _0x32c6af['addCompone' + 'nt'](_0x5666da['default']);
                            break;
                        case 0x3:
                            _0x32c6af['addCompone' + 'nt'](_0x14c76a['default']);
                            break;
                        case 0x63:
                            _0x32c6af['addCompone' + 'nt'](_0xa21c62['default']);
                            break;
                        default:
                            _0x32c6af['addCompone' + 'nt'](_0x396e32['default']);
                        }
                        _0x32c6af['transform']['position'] = Laya['Vector3']['_ZERO'], _0x32c6af['transform']['localPosit' + 'ionZ'] = _0x907d8e + _0x5ba1a4 + 0.5, _0x3948a1['default']['app']['ObjCreatPo' + 's']['addChild'](_0x32c6af);
                    }, _0x3c75fa['prototype']['createGame' + 'Object1'] = function (_0xf70f1b, _0x19cf85, _0x5d7b47) {
                        if (void 0x0 === _0xf70f1b && (_0xf70f1b = 0x0), void 0x0 === _0x19cf85 && (_0x19cf85 = 0x6), void 0x0 === _0x5d7b47 && (_0x5d7b47 = !0x1), 0x0 == this['CreateObj']['length']) {
                            if (window['wx'])
                                _0xedaf61 = Laya['loader']['getRes'](_0x34da51['default']['app']['URL'] + ('res/level.' + 'json'));
                            else
                                var _0xedaf61 = Laya['loader']['getRes']('res/level.' + 'json');
                            this['CreateObj'] = _0xedaf61['level1'];
                        }
                        this['CreateObj'][this['CreateInde' + 'x']] || (this['CreateInde' + 'x'] = 0x0);
                        for (var _0x955e54 = 0x64, _0x376d4c = [], _0x280150 = 0x0; _0x280150 < this['CreateObj']['length']; _0x280150++) {
                            _0x34b05b = this['CreateObj'][_0x280150];
                            if (_0x5d7b47) {
                                if ('Board' == (_0x173171 = this['CreateObj'][_0x280150]['id'])['split']('_')[0x0])
                                    continue;
                            }
                            _0x955e54 -= 0x64 * _0x34b05b['random'];
                            var _0x3b98f7 = {};
                            _0x3b98f7['index'] = _0x280150, _0x3b98f7['random'] = _0x955e54, _0x376d4c['push'](_0x3b98f7);
                        }
                        console['log'](_0x376d4c);
                        for (var _0x1c7db2 = 0x64 * Math['random'](), _0xf9fe06 = 0x0, _0x280150 = 0x0; _0x280150 < _0x376d4c['length']; _0x280150++) {
                            var _0x34b05b;
                            if (_0x1c7db2 > (_0x34b05b = _0x376d4c[_0x280150])['random']) {
                                _0xf9fe06 = _0x280150, console['log']('index\x20', _0xf9fe06);
                                break;
                            }
                        }
                        var _0x173171 = this['CreateObj'][_0xf9fe06]['id'], _0x1d9b13 = this['CreateObj'][_0xf9fe06]['type'];
                        console['log'](_0x173171), this['CreateInde' + 'x']++, this['isSuccess'] && (_0x173171 = 'Success', _0x1d9b13 = 0x63);
                        var _0x57a645 = Laya['loader']['getRes']('Scenes/' + _0x173171 + '.lh'), _0x407ff1 = Laya['Sprite3D']['instantiat' + 'e'](_0x57a645);
                        switch (_0x1d9b13) {
                        case 0x1:
                            _0x407ff1['addCompone' + 'nt'](_0x396e32['default']);
                            break;
                        case 0x2:
                            _0x407ff1['addCompone' + 'nt'](_0x5666da['default']);
                            break;
                        case 0x3:
                            _0x407ff1['addCompone' + 'nt'](_0x14c76a['default']);
                            break;
                        case 0x63:
                            _0x407ff1['addCompone' + 'nt'](_0xa21c62['default']);
                            break;
                        default:
                            _0x407ff1['addCompone' + 'nt'](_0x396e32['default']);
                        }
                        _0x407ff1['transform']['position'] = Laya['Vector3']['_ZERO'], _0x407ff1['transform']['localPosit' + 'ionZ'] = _0xf70f1b + _0x19cf85 + 0x2, _0x3948a1['default']['app']['ObjCreatPo' + 's']['addChild'](_0x407ff1);
                    }, _0x3c75fa['prototype']['addScore'] = function () {
                        this['nowScore'] += 0x1, _0x27cf8f['SoundPlayM' + 'gr']['instance']['playGSound']('sound/cut'), _0x2a51e8['default']['instance']['SpeedUp'](), _0x3948a1['default']['app']['txt_score']['text'] = '' + this['nowScore'], 0x0 != _0x34da51['default']['app']['mWX']['getOnOffBo' + 'xReward']()[0x0] && (_0x34da51['default']['app']['boxcangetn' + 'um'] += 0x1, this['nowScore'] >= 0x64 ? (_0x34da51['default']['app']['is_success'] = !0x0, this['isSuccess'] = !0x0) : this['updateSpee' + 'd']());
                    }, _0x3c75fa['prototype']['updateSpee' + 'd'] = function () {
                        var _0x170e94 = this['nowScore'] / 0x64;
                        Laya['Tween']['clearAll'](_0x3948a1['default']['app']['pro']), Laya['Tween']['to'](_0x3948a1['default']['app']['pro'], { 'width': 0x115 * _0x170e94 }, 0xc8);
                    }, _0x3c75fa['prototype']['setKnifeAl' + 'pha'] = function (_0x443189) {
                        _0x3948a1['default']['app']['player']['getChildBy' + 'Name']('Knife')['meshRender' + 'er']['material']['albedoColo' + 'rA'] = _0x443189;
                    }, _0x3c75fa['prototype']['setBGPlane'] = function (_0x367710) {
                        void 0x0 === _0x367710 && (_0x367710 = 'image/BG1.' + 'jpg');
                        var _0x195eac = _0x3948a1['default']['app']['scene3D']['getChildBy' + 'Name']('Plane')['meshRender' + 'er']['material'];
                        Laya['Texture2D']['load'](_0x367710, Laya['Handler']['create'](this, function (_0x39f814) {
                            _0x195eac['albedoText' + 'ure'] = _0x39f814;
                        }));
                    }, _0x3c75fa['prototype']['sceneClear'] = function () {
                        this['nowScore'] = 0x0, _0x3948a1['default']['app']['ObjCreatPo' + 's']['destroyChi' + 'ldren'](), this['CreateInde' + 'x'] = 0x0, _0x3c75fa['instance']['isSuccess'] = !0x1;
                    }, _0x3c75fa['prototype']['showSpeedL' + 'ine'] = function (_0x5107cb) {
                        var _0x256bbc = _0x3948a1['default']['app']['scene3D']['getChildBy' + 'Name']('SpeedLine');
                        0x0 == this['speedLineF' + 'lag'] && 0x5 == _0x5107cb ? (this['speedLineF' + 'lag'] = 0x1, _0x256bbc['particleSy' + 'stem']['play']()) : 0x1 == this['speedLineF' + 'lag'] && (this['speedLineF' + 'lag'] = 0x0, _0x256bbc['particleSy' + 'stem']['stop']());
                    }, _0x3c75fa['prototype']['showSucces' + 'sEffect'] = function (_0xba33da) {
                        var _0xf88bda = _0x3948a1['default']['app']['scene3D']['getChildBy' + 'Name']('SuccessEff' + 'ect');
                        _0xf88bda['active'] = !!_0xba33da;
                    }, _0x3c75fa;
                }(Laya['Script']);
            _0x1be6e1['default'] = _0x57e407;
        },
        {
            '../Main': 0xe,
            './GameUI': 0x1e,
            './SoundPlayMgr': 0x25,
            './gameObject/BoardBad': 0x29,
            './gameObject/BoardDie': 0x2a,
            './gameObject/BoardSuccess': 0x2b,
            './gameObject/Food': 0x2c,
            './gameObject/PlayerCtrl': 0x2d
        }
    ],
    0x1e: [
        function (_0x5e62fb, _0x3d5660, _0x32a351) {
            'use strict';
            Object['defineProp' + 'erty'](_0x32a351, '__esModule', { 'value': !0x0 });
            var _0x53f818 = _0x5e62fb('./../ui/la' + 'yaMaxUI'), _0x2dc2a6 = _0x5e62fb('./gameObje' + 'ct/PlayerC' + 'trl'), _0x474e85 = _0x5e62fb('./GameMana' + 'ger'), _0x403e92 = _0x5e62fb('./StartVie' + 'w'), _0x470801 = _0x5e62fb('../Main'), _0x34c11f = _0x5e62fb('../core/wx' + 'Core'), _0xafe48b = _0x5e62fb('./MyLikeVi' + 'ew2'), _0x1a5d50 = _0x5e62fb('./ShopView'), _0x14ef79 = _0x5e62fb('../util/AD' + 'Util'), _0x10429f = _0x5e62fb('../util/Sh' + 'areUtil'), _0x473658 = _0x5e62fb('./GetKnife' + 'Dialog'), _0x20d5fc = _0x5e62fb('../core/Fa' + 'kerXCXList' + 'View'), _0x18c69f = function (_0x11e160) {
                    function _0x14ea44() {
                        var _0xfff255 = _0x11e160['call'](this) || this;
                        return _0xfff255['id'] = 0x0, _0xfff255['scene3D'] = null, _0xfff255['boxAni'] = null, _0xfff255['mMyLike'] = null, _0xfff255['fenfaListV' + 'iew'] = null, _0x14ea44['app'] = _0xfff255, _0xfff255['height'] = Laya['stage']['height'], _0x53f818 = _0xfff255, Laya['loader']['create']([
                            'Scenes/Cut' + 'main.ls',
                            'Scenes/Boa' + 'rd_01.lh',
                            'Scenes/Boa' + 'rd_02.lh',
                            'Scenes/Suc' + 'cess.lh',
                            'Scenes/Foo' + 'd_01.lh',
                            'Scenes/Foo' + 'd_02.lh',
                            'Scenes/Foo' + 'd_03.lh',
                            'Scenes/Foo' + 'd_04.lh',
                            'Scenes/Foo' + 'd_05.lh',
                            'Scenes/Foo' + 'd_06.lh',
                            'Scenes/Foo' + 'd_07.lh',
                            'Scenes/Foo' + 'd_08.lh',
                            'Scenes/Foo' + 'd_09.lh'
                        ], Laya['Handler']['create'](_0x53f818, _0x53f818['ScenesLoad' + 'ed'])), (_0xfff255['box_btnmor' + 'e']['visible'] = !0x1, _0xfff255['box_btn']['on'](Laya['Event']['MOUSE_DOWN'], _0xfff255, _0xfff255['startCut']), _0xfff255['box_btn']['on'](Laya['Event']['MOUSE_UP'], _0xfff255, _0xfff255['stopCut']), _0xfff255['btn_reborn']['on'](Laya['Event']['CLICK'], _0xfff255, _0xfff255['reborn']), _0xfff255['btn_addGam' + 'eObj']['on'](Laya['Event']['CLICK'], _0xfff255, _0xfff255['addObj']), _0xfff255['btn_reset']['on'](Laya['Event']['CLICK'], _0xfff255, _0xfff255['Scene3dRes' + 'et']), _0xfff255['v4']['on'](Laya['Event']['CLICK'], _0xfff255, _0xfff255['onBoxOpen']), _0xfff255['fenfaListB' + 'ox']['on'](Laya['Event']['CLICK'], _0xfff255, _0xfff255['onShowFenF' + 'aList']), _0xfff255['yad']['on'](Laya['Event']['MOUSE_DOWN'], this, () => {
                            platform['getInstanc' + 'e']()['navigate']('GAME', 'LOGO');
                        })), (_0xfff255['showV'](![]), _0xfff255['btn_speedL' + 'ine']['on'](Laya['Event']['CLICK'], _0xfff255, function () {
                            _0x474e85['default']['instance']['showSpeedL' + 'ine'](0x1);
                        }), _0xfff255['addCompone' + 'nt'](_0x474e85['default'])), _0xfff255;
                    }
                    return __extends(_0x14ea44, _0x11e160), _0x14ea44['prototype']['showV'] = function (_0x27d8fa) {
                        if (_0x27d8fa) {
                            this['cTips']['visible'] = !![];
                            if (this['v1']['visible'] = !0x0, this['v2']['visible'] = !0x0, this['v3']['visible'] = !0x0, 0x1 == _0x470801['default']['app']['mWX']['IsOpenXCXL' + 'ist']() && 0x1 == _0x470801['default']['app']['mWX']['fhOnoff']) {
                                this['fenfaListB' + 'tn']['visible'] = !0x0, this['fenfaListB' + 'ox']['visible'] = !0x0;
                                var _0x36094e = _0x470801['default']['app']['mWX']['getMenuBut' + 'tonTop_Cen' + 'terPoint']();
                                0x0 != _0x470801['default']['app']['mWX']['rnt2']['x'] && 0x0 != _0x470801['default']['app']['mWX']['rnt2']['y'] && (this['fenfaListB' + 'tn']['width'] = 0x3 * _0x470801['default']['app']['mWX']['rnt2']['height'] * (0x2ee / _0x34c11f['default']['uo']['mPhone']['screenWidt' + 'h']), this['fenfaListB' + 'tn']['height'] = _0x470801['default']['app']['mWX']['rnt2']['height'] * (0x2ee / _0x34c11f['default']['uo']['mPhone']['screenWidt' + 'h']), this['fenfaListB' + 'ox']['width'] = this['fenfaListB' + 'tn']['width'] + 0x28, this['fenfaListB' + 'ox']['height'] = this['fenfaListB' + 'ox']['height'] + 0x28), this['fenfaListB' + 'tn']['y'] = _0x36094e['x'] + _0x36094e['y'] / 0x2 + this['fenfaListB' + 'tn']['height'] / 0x2 + 0x5, this['fenfaListB' + 'tn']['right'] = (_0x34c11f['default']['uo']['mPhone']['screenWidt' + 'h'] - _0x470801['default']['app']['mWX']['rnt2']['right']) * (0x2ee / _0x34c11f['default']['uo']['mPhone']['screenWidt' + 'h']), this['fenfaListB' + 'ox']['y'] = _0x36094e['x'] + _0x36094e['y'] / 0x2 + this['fenfaListB' + 'tn']['height'] / 0x2, this['fenfaListB' + 'ox']['x'] = this['fenfaListB' + 'tn']['x'] - 0x14;
                            } else
                                this['fenfaListB' + 'tn']['visible'] = !0x1, this['fenfaListB' + 'ox']['visible'] = !0x1;
                        } else
                            this['cTips']['visible'] = ![], (this['v1']['visible'] = !0x1, this['v2']['visible'] = !0x1, this['v3']['visible'] = !0x1, this['v4']['visible'] = !0x1, this['fenfaListB' + 'tn']['visible'] = !0x1, this['fenfaListB' + 'ox']['visible'] = !0x1);
                    }, _0x14ea44['prototype']['boxPlayAni'] = function (_0xc38d28, _0x39d8e3) {
                    }, _0x14ea44['prototype']['ScenesLoad' + 'ed'] = function () {
                        console['log']('bbbb'), (this['scene3D'] = Laya['loader']['getRes']('Scenes/Cut' + 'main.ls'), Laya['Resource']['destroyUnu' + 'sedResourc' + 'es'](), this['box']['addChild'](this['scene3D']), this['visible'] = !0x0, this['player'] = this['scene3D']['getChildBy' + 'Name']('Player'), this['player']['addCompone' + 'nt'](_0x2dc2a6['default']), this['mainCamera'] = this['scene3D']['getChildBy' + 'Name']('MainCamera'), this['ObjCreatPo' + 's'] = this['scene3D']['getChildBy' + 'Name']('CreatePoin' + 't'), this['BG3D'] = this['scene3D']['getChildBy' + 'Name']('Plane'), _0x403e92['default']['app']['isStart'] = !0x0, this['addObj'](), _0x470801['default']['app']['isOk'] = !![], this['onSkin'](), this['onBGSkin'](), window['wx'] && (null == _0x403e92['default']['app']['mMyLike'] ? (_0x403e92['default']['app']['mMyLike'] = new _0xafe48b['default'](), _0x403e92['default']['app']['mMyLike']['centerX'] = 0x0, _0x403e92['default']['app']['mMyLike']['y'] = Laya['stage']['height'] - _0x403e92['default']['app']['mMyLike']['height'] - 0xa, _0x403e92['default']['app']['mMyLike']['onUpdata']('home_page'), _0x403e92['default']['app']['mMyLike']['name'] = 'home_page', _0x403e92['default']['app']['addChild'](_0x403e92['default']['app']['mMyLike'])) : _0x403e92['default']['app']['mMyLike']['onUpdata']('home_page')));
                    }, _0x14ea44['prototype']['onBoxOpen'] = function () {
                        if (0x1 == _0x470801['default']['app']['mWX']['getOnOffBo' + 'xReward']()[0x0])
                            null == _0x470801['default']['app']['getKnifeDi' + 'alog'] ? (_0x470801['default']['app']['getKnifeDi' + 'alog'] = new _0x473658['default'](), Laya['stage']['addChild'](_0x470801['default']['app']['getKnifeDi' + 'alog']), _0x470801['default']['app']['getKnifeDi' + 'alog']['onShow'](!0x0, _0x473658['default']['BOX_REWARD'])) : _0x470801['default']['app']['getKnifeDi' + 'alog']['onShow'](!0x0, _0x473658['default']['BOX_REWARD']);
                        else
                            0x2 == _0x470801['default']['app']['mWX']['getOnOffBo' + 'xReward']()[0x0] ? _0x14ef79['ADUtil']['playVideo'](function () {
                                null == _0x470801['default']['app']['getKnifeDi' + 'alog'] ? (_0x470801['default']['app']['getKnifeDi' + 'alog'] = new _0x473658['default'](), Laya['stage']['addChild'](_0x470801['default']['app']['getKnifeDi' + 'alog']), _0x470801['default']['app']['getKnifeDi' + 'alog']['onShow'](!0x0, _0x473658['default']['BOX_REWARD'])) : _0x470801['default']['app']['getKnifeDi' + 'alog']['onShow'](!0x0, _0x473658['default']['BOX_REWARD']);
                            }, function () {
                                _0x10429f['ShareUtil']['shareProp'](function () {
                                    null == _0x470801['default']['app']['getKnifeDi' + 'alog'] ? (_0x470801['default']['app']['getKnifeDi' + 'alog'] = new _0x473658['default'](), Laya['stage']['addChild'](_0x470801['default']['app']['getKnifeDi' + 'alog']), _0x470801['default']['app']['getKnifeDi' + 'alog']['onShow'](!0x0, _0x473658['default']['BOX_REWARD'])) : _0x470801['default']['app']['getKnifeDi' + 'alog']['onShow'](!0x0, _0x473658['default']['BOX_REWARD']);
                                });
                            }, function () {
                            }) : 0x3 == _0x470801['default']['app']['mWX']['getOnOffBo' + 'xReward']()[0x0] && _0x10429f['ShareUtil']['shareProp'](function () {
                                _0x470801['default']['app']['mWX']['indexBpTot' + 'le']('icon_page', {
                                    'is_success': 0x1,
                                    'is_click': 0x1,
                                    'from_type': 'share',
                                    'from_page': 'box_award'
                                }), null == _0x470801['default']['app']['getKnifeDi' + 'alog'] ? (_0x470801['default']['app']['getKnifeDi' + 'alog'] = new _0x473658['default'](), Laya['stage']['addChild'](_0x470801['default']['app']['getKnifeDi' + 'alog']), _0x470801['default']['app']['getKnifeDi' + 'alog']['onShow'](!0x0, _0x473658['default']['BOX_REWARD'])) : _0x470801['default']['app']['getKnifeDi' + 'alog']['onShow'](!0x0, _0x473658['default']['BOX_REWARD']);
                            });
                    }, _0x14ea44['prototype']['onSkin'] = function () {
                        _0x1a5d50['default']['skin_id'] = Number(_0x470801['default']['app']['mWX']['getUserDat' + 'aByKey']('knife_skin' + '_id')) - 0x1;
                        var _0x5cf392 = '';
                        console['log'](_0x1a5d50['default']['skin_id'] + ('\x20\x20++++++++' + '++++++++++')), console['log'](Number(_0x470801['default']['app']['mWX']['getUserDat' + 'aByKey']('knife_skin' + '_id')) + ('\x20\x20++++++++' + '++++++++++')), -0x1 == _0x1a5d50['default']['skin_id'] ? _0x5cf392 = 'knife_0' : 0x0 == _0x1a5d50['default']['skin_id'] ? _0x5cf392 = 'Knife_last' : 0xa == _0x1a5d50['default']['skin_id'] ? _0x5cf392 = 'knife_1' : 0xb == _0x1a5d50['default']['skin_id'] ? _0x5cf392 = 'knife_2' : 0xc == _0x1a5d50['default']['skin_id'] ? _0x5cf392 = 'knife_3' : 0xd == _0x1a5d50['default']['skin_id'] ? _0x5cf392 = 'knife_4' : 0xe == _0x1a5d50['default']['skin_id'] ? _0x5cf392 = 'knife_5' : 0xf == _0x1a5d50['default']['skin_id'] ? _0x5cf392 = 'knife_6' : 0x10 == _0x1a5d50['default']['skin_id'] ? _0x5cf392 = 'knife_7' : 0x11 == _0x1a5d50['default']['skin_id'] ? _0x5cf392 = 'knife_8' : 0x1 == _0x1a5d50['default']['skin_id'] ? _0x5cf392 = 'knife_02' : 0x2 == _0x1a5d50['default']['skin_id'] ? _0x5cf392 = 'Knife_03' : 0x3 == _0x1a5d50['default']['skin_id'] ? _0x5cf392 = 'knife_04' : 0x4 == _0x1a5d50['default']['skin_id'] ? _0x5cf392 = 'knife_05' : 0x5 == _0x1a5d50['default']['skin_id'] ? _0x5cf392 = 'Knifes_06' : 0x6 == _0x1a5d50['default']['skin_id'] ? _0x5cf392 = 'Knifes_07' : 0x7 == _0x1a5d50['default']['skin_id'] ? _0x5cf392 = 'Knifes_08' : 0x8 == _0x1a5d50['default']['skin_id'] && (_0x5cf392 = 'Knifes_09');
                        var _0x32a0c6 = 'Scenes/' + _0x5cf392 + '.lh';
                        Laya['loader']['create'](_0x32a0c6, Laya['Handler']['create'](_0x14ea44['app'], function (_0x342b55) {
                            if (_0x342b55) {
                                var _0x30cb42 = _0x14ea44['app']['player']['getChildBy' + 'Name']('Knife'), _0x17e302 = Laya['loader']['getRes'](_0x32a0c6);
                                _0x30cb42['meshFilter']['sharedMesh'] = _0x17e302['meshFilter']['sharedMesh'];
                                var _0x12b293 = _0x17e302['meshRender' + 'er']['material']['clone']();
                                _0x30cb42['meshRender' + 'er']['material'] = _0x12b293;
                            }
                        }));
                    }, _0x14ea44['prototype']['onBGSkin'] = function () {
                        null != _0x470801['default']['app']['shopView'] && _0x470801['default']['app']['shopView']['off'](_0x1a5d50['default']['CHANGESKIN'], _0x14ea44['app'], _0x14ea44['app']['onSkin']);
                        var _0x37a1e4 = Math['floor'](_0x470801['default']['app']['Level_num'] % 0x8);
                        0x7 == _0x37a1e4 && (_0x37a1e4 = 0x2);
                        var _0x12f2b3 = _0x14ea44['app']['scene3D']['getChildBy' + 'Name']('Plane')['meshRender' + 'er']['material'];
                        Laya['Texture2D']['load']('bg/' + _0x37a1e4 + '.jpg', Laya['Handler']['create'](_0x14ea44['app'], function (_0x290cd0) {
                            _0x12f2b3['albedoText' + 'ure'] = _0x290cd0;
                        }));
                    }, _0x14ea44['prototype']['startCut'] = function () {
                        this['cTips']['visible'] = ![], _0x2dc2a6['default']['instance']['Cut']();
                    }, _0x14ea44['prototype']['stopCut'] = function () {
                        _0x2dc2a6['default']['instance']['StopCut'](), this['cTips']['visible'] = !![];
                    }, _0x14ea44['prototype']['reborn'] = function () {
                        _0x2dc2a6['default']['instance']['ResetKnife']();
                    }, _0x14ea44['prototype']['addObj'] = function () {
                        _0x474e85['default']['instance']['createGame' + 'Object'](0x0);
                    }, _0x14ea44['prototype']['gameStart'] = function () {
                        _0x474e85['default']['instance']['createGame' + 'Object'](0x0);
                    }, _0x14ea44['prototype']['Scene3dRes' + 'et'] = function () {
                        Laya['timer']['clear'](this, this['gameStart']), _0x474e85['default']['instance']['sceneClear']();
                    }, _0x14ea44['prototype']['onShowFenF' + 'aList'] = function () {
                        _0x470801['default']['app']['mWX']['indexBpTot' + 'le']('icon_page', {
                            'is_success': 0x1,
                            'is_click': 0x1,
                            'from_type': '',
                            'icon_type': 'fake_exit',
                            'from_page': 'fake_exit'
                        }), console['log']('this.fenfa' + 'ListView:', this['fenfaListV' + 'iew']), this['fenfaListV' + 'iew'] || (this['fenfaListV' + 'iew'] = new _0x20d5fc['FakerXCXLi' + 'stView'](), Laya['stage']['addChild'](this['fenfaListV' + 'iew']), this['fenfaListV' + 'iew']['zOrder'] = 0x3e7), this['fenfaListV' + 'iew']['onShow'](!0x0, function () {
                        });
                    }, _0x14ea44;
                }(_0x53f818['ui']['test']['TestSceneU' + 'I']);
            _0x32a351['default'] = _0x18c69f;
        },
        {
            '../Main': 0xe,
            '../core/FakerXCXListView': 0x11,
            '../core/wxCore': 0x1b,
            '../util/ADUtil': 0x30,
            '../util/ShareUtil': 0x34,
            './../ui/layaMaxUI': 0x2f,
            './GameManager': 0x1d,
            './GetKnifeDialog': 0x1f,
            './MyLikeView2': 0x22,
            './ShopView': 0x24,
            './StartView': 0x27,
            './gameObject/PlayerCtrl': 0x2d
        }
    ],
    0x1f: [
        function (_0x30e948, _0x22c4a0, _0x2c4d48) {
            'use strict';
            Object['defineProp' + 'erty'](_0x2c4d48, '__esModule', { 'value': !0x0 });
            var _0x46d691 = _0x30e948('../ui/laya' + 'MaxUI'), _0x4daeb3 = _0x30e948('./MyLikeVi' + 'ew2'), _0x30bc61 = _0x30e948('../Main'), _0x349784 = _0x30e948('./ResultVi' + 'ew'), _0x332f20 = _0x30e948('../util/Sh' + 'areUtil'), _0x33e7fe = _0x30e948('../util/AD' + 'Util'), _0x2994ec = _0x30e948('./GameUI'), _0x336c96 = function (_0x4ab1ca) {
                    function _0x1bc5fe() {
                        var _0x19107f = _0x4ab1ca['call'](this) || this;
                        return _0x19107f['id'] = 0x0, _0x19107f['mMyLike'] = null, _0x19107f['isLoop'] = !0x1, _0x19107f['isChangein' + 'g'] = !0x1, _0x19107f['ttype'] = '', _0x19107f['height'] = Laya['stage']['height'], _0x19107f['init'](), _0x19107f;
                    }
                    return __extends(_0x1bc5fe, _0x4ab1ca), _0x1bc5fe['prototype']['onShow'] = function (_0x350dfd, _0x4d4c1f) {
                        if (_0x350dfd) {
                            if (this['ttype'] = _0x4d4c1f, this['visible'] = !0x0, this['isChangein' + 'g'] = !0x1, this['RotateLigh' + 't'](), this['initImg'](), this['initSkip'](), _0x4d4c1f == _0x1bc5fe['START_REWA' + 'RD'])
                                this['bg']['visible'] = !0x1, this['bg2']['visible'] = !0x0, this['startRewar' + 'd']['visible'] = !0x0, this['boxReward']['visible'] = !0x1, this['endReward']['visible'] = !0x1, this['mMyLike'] && (this['mMyLike']['visible'] = !0x1), _0x1d0a32 = { 'from_page': 'start_awar' + 'd' }, (0x2 == _0x30bc61['default']['app']['mWX']['getOnOffSt' + 'artReward']() ? this['knifebtn2']['loadImage']('button/get' + '4.png') : this['knifebtn2']['loadImage']('button/get' + '3.png'), _0x30bc61['default']['app']['mWX']['indexBpTot' + 'le']('start_awar' + 'd', _0x1d0a32));
                            else {
                                if (_0x4d4c1f == _0x1bc5fe['BOX_REWARD'])
                                    this['bg']['visible'] = !0x0, this['bg']['alpha'] = 0x1, this['bg2']['visible'] = !0x1, this['startRewar' + 'd']['visible'] = !0x1, this['boxReward']['visible'] = !0x0, this['endReward']['visible'] = !0x1, this['mMyLike'] && (this['mMyLike']['visible'] = !0x1), _0x1d0a32 = { 'from_page': 'box_award' }, _0x30bc61['default']['app']['mWX']['indexBpTot' + 'le']('box_award', _0x1d0a32);
                                else {
                                    if (_0x4d4c1f == _0x1bc5fe['END_REWARD']) {
                                        this['bg']['alpha'] = 0x1, this['bg']['visible'] = !0x0, this['bg2']['visible'] = !0x1, this['startRewar' + 'd']['visible'] = !0x1, this['boxReward']['visible'] = !0x1, this['endReward']['visible'] = !0x0;
                                        var _0x1d0a32 = { 'from_page': 'end_award' };
                                        0x2 == _0x30bc61['default']['app']['mWX']['getOnOffRe' + 'ward2']() ? this['knifebtn']['loadImage']('button/get' + 'btn.png') : this['knifebtn']['loadImage']('button/get' + 'btn1.png'), _0x30bc61['default']['app']['mWX']['indexBpTot' + 'le']('end_award', _0x1d0a32), window['wx'] && (null == this['mMyLike'] ? (this['mMyLike'] = new _0x4daeb3['default'](), this['mMyLike']['centerX'] = 0x0, this['mMyLike']['y'] = 0x96, this['mMyLike']['visible'] = !0x0, this['mMyLike']['onUpdata']('reward_pag' + 'e'), this['mMyLike']['name'] = 'reward_pag' + 'e', this['addChild'](this['mMyLike'])) : (this['mMyLike']['visible'] = !0x0, this['mMyLike']['onUpdata']('reward_pag' + 'e')));
                                    }
                                }
                            }
                        } else
                            this['visible'] = !0x1, this['isLoop'] = !0x1, _0x4d4c1f == _0x1bc5fe['START_REWA' + 'RD'] || _0x4d4c1f == _0x1bc5fe['BOX_REWARD'] || _0x4d4c1f == _0x1bc5fe['END_REWARD'] && (console['log']('likeLoopfa' + 'lse4'), _0x30bc61['default']['app']['mWX']['likeLoop'] = !0x1, null == _0x30bc61['default']['app']['resultView'] && (_0x30bc61['default']['app']['resultView'] = new _0x349784['default']('Win'), Laya['stage']['addChild'](_0x30bc61['default']['app']['resultView'])));
                    }, _0x1bc5fe['prototype']['init'] = function () {
                        this['knifebtn']['on'](Laya['Event']['MOUSE_DOWN'], this, this['getKnife']), this['knifePass']['on'](Laya['Event']['MOUSE_DOWN'], this, this['passKnife']), this['knifebtn2']['on'](Laya['Event']['MOUSE_DOWN'], this, this['getKnife']), this['knifePass2']['on'](Laya['Event']['MOUSE_DOWN'], this, this['passKnife']), this['knifebtn3']['on'](Laya['Event']['MOUSE_DOWN'], this, this['getKnife']);
                    }, _0x1bc5fe['prototype']['initSkip'] = function () {
                        var _0x4d0f3b = this;
                        this['ttype'] == _0x1bc5fe['START_REWA' + 'RD'] ? this['knifePass2']['visible'] = !0x0 : this['ttype'] == _0x1bc5fe['BOX_REWARD'] ? this['knifePass3']['visible'] = !0x0 : this['ttype'] == _0x1bc5fe['END_REWARD'] && (this['knifePass']['visible'] = !0x1, Laya['timer']['once'](_0x30bc61['default']['app']['mWX']['getOnOffRe' + 'wardSkip'](), this, function () {
                            _0x4d0f3b['knifePass']['visible'] = !0x0;
                        }));
                    }, _0x1bc5fe['prototype']['getKnife'] = function () {
                        var _0xe44686 = this;
                        if (this['ttype'] == _0x1bc5fe['START_REWA' + 'RD']) {
                            if (0x1 == _0x30bc61['default']['app']['mWX']['getOnOffSt' + 'artReward']())
                                _0x48cad9 = {
                                    'is_success': 0x1,
                                    'is_click': 0x1,
                                    'from_type': 'direct',
                                    'from_page': 'start_awar' + 'd'
                                }, (_0x30bc61['default']['app']['mWX']['indexBpTot' + 'le']('icon_page', _0x48cad9), this['useSkin'](), this['Dispose']());
                            else
                                0x2 == _0x30bc61['default']['app']['mWX']['getOnOffSt' + 'artReward']() ? _0x33e7fe['ADUtil']['playVideo'](function () {
                                    _0x30bc61['default']['app']['mWX']['indexBpTot' + 'le']('icon_page', {
                                        'is_success': 0x1,
                                        'is_click': 0x1,
                                        'from_type': 'video',
                                        'from_page': 'start_awar' + 'd'
                                    }), _0xe44686['useSkin'](), _0xe44686['Dispose'](), console['log']('caonima');
                                }, function () {
                                    _0x332f20['ShareUtil']['shareProp'](function () {
                                        _0x30bc61['default']['app']['mWX']['indexBpTot' + 'le']('icon_page', {
                                            'is_success': 0x1,
                                            'is_click': 0x1,
                                            'from_type': 'share',
                                            'from_page': 'start_awar' + 'd'
                                        }), _0xe44686['useSkin'](), _0xe44686['Dispose']();
                                    });
                                }, function () {
                                    _0x30bc61['default']['app']['mWX']['indexBpTot' + 'le']('icon_page', {
                                        'is_success': 0x0,
                                        'is_click': 0x1,
                                        'from_type': 'video',
                                        'from_page': 'start_awar' + 'd'
                                    }), wx['showToast']({
                                        'title': '未看完视频，无法领取' + '奖励',
                                        'icon': 'none',
                                        'image': '',
                                        'duration': 0x7d0
                                    });
                                }) : 0x3 == _0x30bc61['default']['app']['mWX']['getOnOffSt' + 'artReward']() && _0x332f20['ShareUtil']['shareProp'](function () {
                                    _0x30bc61['default']['app']['mWX']['indexBpTot' + 'le']('icon_page', {
                                        'is_success': 0x1,
                                        'is_click': 0x1,
                                        'from_type': 'share',
                                        'from_page': 'start_awar' + 'd'
                                    }), _0xe44686['useSkin'](), _0xe44686['Dispose']();
                                });
                        } else {
                            if (this['ttype'] == _0x1bc5fe['BOX_REWARD'])
                                _0x30bc61['default']['app']['boxcangetn' + 'um'] = 0x0, _0x2994ec['default']['app']['boxPlayAni'](!0x1), _0x2994ec['default']['app']['id'] = 0x0, _0x2994ec['default']['app']['bg1']['width'] = 0x0, _0x30bc61['default']['app']['boxSkinKee' + 'pId'] = 0x0, _0x30bc61['default']['app']['boxChangeI' + 'nterval'] = 0x0, 0x2 == _0x30bc61['default']['app']['mWX']['getOnOffBo' + 'xReward']()[0x0] ? (_0x2994ec['default']['app']['boxImg']['scale'](0x1, 0x1), _0x2994ec['default']['app']['boxImg']['skin'] = 'button/bla' + 'ck_box_2.p' + 'ng') : (_0x2994ec['default']['app']['boxImg']['scale'](0x1, 0x1), _0x2994ec['default']['app']['boxImg']['skin'] = 'button/box' + '_black.png'), this['useSkin'](), this['Dispose']();
                            else {
                                if (this['ttype'] == _0x1bc5fe['END_REWARD']) {
                                    if (0x1 == _0x30bc61['default']['app']['mWX']['getOnOffRe' + 'ward2']()) {
                                        var _0x48cad9 = {
                                            'is_success': 0x1,
                                            'is_click': 0x1,
                                            'from_type': 'direct',
                                            'from_page': 'end_award'
                                        };
                                        _0x30bc61['default']['app']['mWX']['indexBpTot' + 'le']('icon_page', _0x48cad9), this['useSkin'](), this['Dispose']();
                                    } else
                                        0x2 == _0x30bc61['default']['app']['mWX']['getOnOffRe' + 'ward2']() ? _0x33e7fe['ADUtil']['playVideo'](function () {
                                            _0x30bc61['default']['app']['mWX']['indexBpTot' + 'le']('icon_page', {
                                                'is_success': 0x1,
                                                'is_click': 0x1,
                                                'from_type': 'video',
                                                'from_page': 'end_award'
                                            }), _0xe44686['useSkin'](), _0xe44686['Dispose'](), console['log']('caonima');
                                        }, function () {
                                            _0x332f20['ShareUtil']['shareProp'](function () {
                                                _0x30bc61['default']['app']['mWX']['indexBpTot' + 'le']('icon_page', {
                                                    'is_success': 0x1,
                                                    'is_click': 0x1,
                                                    'from_type': 'share',
                                                    'from_page': 'end_award'
                                                }), _0xe44686['useSkin'](), _0xe44686['Dispose']();
                                            });
                                        }, function () {
                                            _0x30bc61['default']['app']['mWX']['indexBpTot' + 'le']('icon_page', {
                                                'is_success': 0x0,
                                                'is_click': 0x1,
                                                'from_type': 'video',
                                                'from_page': 'end_award'
                                            }), wx['showToast']({
                                                'title': '未看完视频，无法领取' + '奖励',
                                                'icon': 'none',
                                                'image': '',
                                                'duration': 0x7d0
                                            });
                                        }) : 0x3 == _0x30bc61['default']['app']['mWX']['getOnOffRe' + 'ward2']() && _0x332f20['ShareUtil']['shareProp'](function () {
                                            _0x30bc61['default']['app']['mWX']['indexBpTot' + 'le']('icon_page', {
                                                'is_success': 0x1,
                                                'is_click': 0x1,
                                                'from_type': 'share',
                                                'from_page': 'end_award'
                                            }), _0xe44686['useSkin'](), _0xe44686['Dispose']();
                                        });
                                }
                            }
                        }
                    }, _0x1bc5fe['prototype']['useSkin'] = function () {
                        console['log']('id:', String(this['id'])), _0x30bc61['default']['app']['mWX']['setUserVal' + 'ue']('knife_skin' + '_id', String(this['id'])), this['isChangein' + 'g'] = !0x0, this['onSkin'](this['id']), wx['showToast']({
                            'title': '领取成功',
                            'icon': 'none',
                            'image': '',
                            'duration': 0x7d0
                        });
                    }, _0x1bc5fe['prototype']['passKnife'] = function () {
                        this['Dispose']();
                    }, _0x1bc5fe['prototype']['initImg'] = function () {
                        var _0x5cd894 = this;
                        this['ttype'] == _0x1bc5fe['BOX_REWARD'] ? this['id'] = _0x30bc61['default']['app']['boxSkinId'] : (console['log']('Main.app.m' + 'WX.skinId:', _0x30bc61['default']['app']['mWX']['skinId']), this['id'] = Number(_0x30bc61['default']['app']['mWX']['skinId'] + 0x1), this['id'] == Number(_0x30bc61['default']['app']['mWX']['getUserDat' + 'aByKey']('knife_skin' + '_id')) && (this['id'] += 0x1), this['id'] == _0x30bc61['default']['app']['boxSkinId'] && (this['id'] += 0x1), this['id'] >= 0x13 && (this['id'] = 0xa)), _0x30bc61['default']['app']['mWX']['skinId'] = this['id'], _0x30bc61['default']['app']['mWX']['setUserVal' + 'ue']('new_reward' + '_knife_id', String(this['id'])), Laya['loader']['load']('newknife/' + Number(this['id'] - 0xa) + '.png', new Laya['Handler'](this, function () {
                            console['log']('skinId:', _0x5cd894['id'], 'newknife/' + Number(_0x5cd894['id'] - 0xa) + '.png'), _0x5cd894['ttype'] == _0x1bc5fe['START_REWA' + 'RD'] ? _0x5cd894['knifeImg2']['skin'] = 'newknife/' + Number(_0x5cd894['id'] - 0xa) + '.png' : _0x5cd894['ttype'] == _0x1bc5fe['BOX_REWARD'] ? _0x5cd894['knifeImg3']['skin'] = 'newknife/' + Number(_0x5cd894['id'] - 0xa) + '.png' : _0x5cd894['ttype'] == _0x1bc5fe['END_REWARD'] && (_0x5cd894['knifeImg']['skin'] = 'newknife/' + Number(_0x5cd894['id'] - 0xa) + '.png');
                        }));
                    }, _0x1bc5fe['prototype']['Dispose'] = function () {
                        this['onShow'](!0x1, this['ttype']);
                    }, _0x1bc5fe['prototype']['onSkin'] = function (_0x198ef4) {
                        if (this['isChangein' + 'g']) {
                            var _0x25615f = _0x198ef4;
                            if (0x0 != _0x25615f) {
                                console['log']('xxx:', _0x25615f);
                                var _0x113ea2 = '';
                                0xa == _0x25615f ? _0x113ea2 = 'knife_0' : 0xb == _0x25615f ? _0x113ea2 = 'knife_1' : 0xc == _0x25615f ? _0x113ea2 = 'knife_2' : 0xd == _0x25615f ? _0x113ea2 = 'knife_3' : 0xe == _0x25615f ? _0x113ea2 = 'knife_4' : 0xf == _0x25615f ? _0x113ea2 = 'knife_5' : 0x10 == _0x25615f ? _0x113ea2 = 'knife_6' : 0x11 == _0x25615f ? _0x113ea2 = 'knife_7' : 0x12 == _0x25615f && (_0x113ea2 = 'knife_8');
                                var _0x43a12b = 'Scenes/' + _0x113ea2 + '.lh';
                                Laya['loader']['create'](_0x43a12b, Laya['Handler']['create'](this, function (_0x3aa92a) {
                                    if (_0x3aa92a) {
                                        var _0x14744d = _0x2994ec['default']['app']['player']['getChildBy' + 'Name']('Knife'), _0x148aef = Laya['loader']['getRes'](_0x43a12b);
                                        _0x14744d['meshFilter']['sharedMesh'] = _0x148aef['meshFilter']['sharedMesh'];
                                        var _0x7e6494 = _0x148aef['meshRender' + 'er']['material']['clone']();
                                        _0x14744d['meshRender' + 'er']['material'] = _0x7e6494;
                                    }
                                }));
                            }
                        }
                    }, _0x1bc5fe['prototype']['RotateLigh' + 't'] = function () {
                        this['light3']['rotation'] = 0x0, this['light2']['rotation'] = 0x0, this['light']['rotation'] = 0x0, this['isLoop'] = !0x0, Laya['timer']['loop'](0x1, this, this['lRLight']);
                    }, _0x1bc5fe['prototype']['lRLight'] = function () {
                        this['isLoop'] && (this['ttype'] == _0x1bc5fe['START_REWA' + 'RD'] ? this['light2']['rotation'] += 0x1 : this['ttype'] == _0x1bc5fe['BOX_REWARD'] ? this['light3']['rotation'] += 0x1 : this['ttype'] == _0x1bc5fe['END_REWARD'] && (this['light']['rotation'] += 0x1));
                    }, _0x1bc5fe['START_REWA' + 'RD'] = 'START_REWA' + 'RD', _0x1bc5fe['BOX_REWARD'] = 'BOX_REWARD', _0x1bc5fe['END_REWARD'] = 'END_REWARD', _0x1bc5fe;
                }(_0x46d691['ui']['page']['GetKnifeDi' + 'alogUI']);
            _0x2c4d48['default'] = _0x336c96;
        },
        {
            '../Main': 0xe,
            '../ui/layaMaxUI': 0x2f,
            '../util/ADUtil': 0x30,
            '../util/ShareUtil': 0x34,
            './GameUI': 0x1e,
            './MyLikeView2': 0x22,
            './ResultView': 0x23
        }
    ],
    0x20: [
        function (_0x30c13a, _0xd43e1b, _0xb42da1) {
            'use strict';
            Object['defineProp' + 'erty'](_0xb42da1, '__esModule', { 'value': !0x0 });
            var _0x2efe1d = _0x30c13a('../ui/laya' + 'MaxUI'), _0x4f0942 = _0x30c13a('../Main'), _0x118e5a = function (_0x5b7900) {
                    function _0x93a4f9() {
                        var _0x434552 = _0x5b7900['call'](this) || this;
                        return _0x434552['intType'] = 0x3e8, _0x434552['numType'] = 0x3e8, _0x434552['strType'] = 'hello\x20laya', _0x434552['boolType'] = !0x0, _0x434552['xxx'] = 0x5, _0x434552;
                    }
                    return __extends(_0x93a4f9, _0x5b7900), _0x93a4f9['prototype']['onEnable'] = function () {
                        this['inte']();
                    }, _0x93a4f9['prototype']['inte'] = function () {
                        this['pro']['width'] = 0x19, this['zOrder'] = 0x3e7, this['xxx'] = 0x14, this['precent']['text'] = Math['floor'](this['pro']['width'] / 0x1ea * 0x64) + '%', this['yad']['on'](Laya['Event']['MOUSE_DOWN'], this, () => {
                            platform['getInstanc' + 'e']()['navigate']('LOADING', 'LOGO');
                        }), Laya['timer']['frameLoop'](0x1, this, this['onProgress']);
                    }, _0x93a4f9['prototype']['onProgress'] = function () {
                        var _0x3c452d = this['pro']['width'];
                        _0x3c452d += this['xxx'], this['precent']['text'] = Math['floor'](this['pro']['width'] / 0x1ea * 0x64) + '%', _0x4f0942['default']['app']['scene_num'] >= 0x1 ? _0x3c452d >= 0x1b9 && (this['xxx'] = 0.3, _0x3c452d >= 0x1ea && (_0x3c452d = 0x1ea), _0x4f0942['default']['app']['isOk'] ? (Laya['timer']['clear'](this, this['onProgress']), this['visible'] = !0x1, Laya['timer']['once'](0x1f4, this, function () {
                            _0x4f0942['default']['app']['loadingSho' + 'w'] = !0x1;
                        })) : _0x3c452d >= 0x1e8 && (_0x3c452d = 0x1e8)) : _0x3c452d >= 0x1b9 && (_0x3c452d = 0x1b9), this['pro']['width'] = _0x3c452d;
                    }, _0x93a4f9['prototype']['onDisable'] = function () {
                    }, _0x93a4f9;
                }(_0x2efe1d['ui']['page']['LoadingVie' + 'wUI']);
            _0xb42da1['default'] = _0x118e5a;
        },
        {
            '../Main': 0xe,
            '../ui/layaMaxUI': 0x2f
        }
    ],
    0x21: [
        function (_0x4b3578, _0x2eadb6, _0xc62820) {
            'use strict';
            Object['defineProp' + 'erty'](_0xc62820, '__esModule', { 'value': !0x0 });
            var _0x3c9d47 = _0x4b3578('../ui/laya' + 'MaxUI'), _0x19596b = _0x4b3578('../Main'), _0x4de30a = _0x4b3578('../core/Mo' + 'reGame'), _0x2f13c7 = _0x4b3578('../core/ga' + 'meBox'), _0x65801a = function (_0x508945) {
                    function _0x4ab756() {
                        return _0x508945['call'](this) || this;
                    }
                    return __extends(_0x4ab756, _0x508945), _0x4ab756['prototype']['onUpdata'] = function (_0xb101b) {
                        void 0x0 === _0xb101b && (_0xb101b = null);
                        var _0xcd0aae = Number(0x1770), _0x413e25 = this['mPanel']['width'];
                        this['mMoveBack']['removeChil' + 'dren']();
                        var _0x25d538 = _0x4de30a['MoreGame']['GetIndexRa' + 'ndomList'](_0x19596b['default']['app']['mWX']['mGamesBox'], 0x9), _0x2b66b7 = _0x4de30a['MoreGame']['GetIndexLi' + 'st'](_0x19596b['default']['app']['mWX']['mGamesBox']);
                        if (void 0x0 != _0x2b66b7 && null != _0x2b66b7) {
                            for (var _0x52f2a0 = 0x0; _0x52f2a0 < _0x25d538['length']; _0x52f2a0++)
                                _0x4ab756['list'][_0x52f2a0] = _0x25d538[_0x52f2a0]['appid'];
                            var _0x131da2 = { 'game_show_list': _0x4ab756['list'] };
                            _0x19596b['default']['app']['mWX']['indexBpTot' + 'le']('recom_bann' + 'er_show', _0x131da2);
                            for (var _0x3165f4 = 0x0, _0x1c4d5c = 0x0; _0x1c4d5c < _0x25d538['length']; ++_0x1c4d5c) {
                                var _0x3592af = new _0x3c9d47['ui']['page']['myLikeItem' + 'UI']();
                                _0x3592af['x'] = _0x3165f4, _0x3165f4 += _0x413e25 / 0x4, _0x3592af['centerY'] = 0x0;
                                var _0x14f89b = _0x25d538[_0x1c4d5c]['anim_confi' + 'g'];
                                try {
                                    var _0x20604e = JSON['parse'](_0x14f89b);
                                    Number(_0x20604e['frame']), Number(_0x20604e['millisecon' + 'd']);
                                } catch (_0x19e4ef) {
                                    0x0, 0x0;
                                }
                                _0x3592af['game_name']['text'] = _0x25d538[_0x1c4d5c]['name'], _0x3592af['game_icon']['skin'] = _0x25d538[_0x1c4d5c]['big_btn_ur' + 'l'], _0x3592af['on'](Laya['Event']['CLICK'], this, this['showMore2'], [
                                    _0x25d538[_0x1c4d5c],
                                    _0xb101b
                                ]), this['mMoveBack']['addChild'](_0x3592af), this['mMoveBack']['width'] = _0x3165f4 + 0xa;
                            }
                            this['moveLikeGa' + 'me'](_0xcd0aae, 0x12c, 0x9);
                        }
                    }, _0x4ab756['prototype']['showMore2'] = function (_0x31ffeb, _0x2563c7) {
                        void 0x0 === _0x2563c7 && (_0x2563c7 = null), _0x4ab756['from_page'] = this['name'], _0x19596b['default']['app']['moregame'] = 0x2, _0x2f13c7['gameBox']['showBoxPag' + 'e'](_0x31ffeb['appid'], _0x19596b['default']['app']['mWX']['mGamesBox'], '天天切菜3D');
                    }, _0x4ab756['prototype']['moveLikeGa' + 'me'] = function (_0x5afee3, _0x116f34, _0xe990e5) {
                        function _0x2409a5() {
                            Laya['Tween']['to'](_0x4a8fb1['mMoveBack'], { 'x': 0x0 }, _0x5afee3, null, new Laya['Handler'](_0x4a8fb1, _0x245524), _0x116f34);
                        }
                        function _0x245524() {
                            Laya['Tween']['to'](_0x4a8fb1['mMoveBack'], { 'x': _0x484f2f }, _0x5afee3, null, new Laya['Handler'](_0x4a8fb1, _0x2409a5), _0x116f34);
                        }
                        void 0x0 === _0xe990e5 && (_0xe990e5 = null);
                        var _0x4a8fb1 = this, _0x484f2f = -(_0x4a8fb1['mMoveBack']['width'] - _0x4a8fb1['mPanel']['width']);
                        _0x484f2f >= 0x0 || _0xe990e5 < 0x5 || (Laya['Tween']['clearAll'](_0x4a8fb1['mMoveBack']), Laya['Tween']['to'](_0x4a8fb1['mMoveBack'], { 'x': _0x484f2f }, _0x5afee3, null, new Laya['Handler'](_0x4a8fb1, _0x2409a5)));
                    }, _0x4ab756['list'] = {}, _0x4ab756['from_page'] = null, _0x4ab756;
                }(_0x3c9d47['ui']['page']['myLikeView' + 'UI']);
            _0xc62820['MyLikeView'] = _0x65801a;
        },
        {
            '../Main': 0xe,
            '../core/MoreGame': 0x16,
            '../core/gameBox': 0x18,
            '../ui/layaMaxUI': 0x2f
        }
    ],
    0x22: [
        function (_0xc71791, _0x959591, _0x73458c) {
            'use strict';
            Object['defineProp' + 'erty'](_0x73458c, '__esModule', { 'value': !0x0 });
            var _0x4fe3f6 = _0xc71791('../ui/laya' + 'MaxUI'), _0x4b942b = _0xc71791('../Core/ut' + 'il'), _0x2974fe = _0xc71791('../Main'), _0x3ac577 = _0xc71791('../Core/Mo' + 'reGame'), _0x11553a = _0xc71791('../Core/ga' + 'meBox'), _0x461004 = _0xc71791('../Core/Ju' + 'mpObjConve' + 'rter'), _0x45a712 = _0xc71791('../Core/Ju' + 'mpAniCtl'), _0x53c536 = function (_0x33140e) {
                    function _0x617272() {
                        var _0x2ccb92 = _0x33140e['call'](this) || this;
                        return _0x2ccb92['mCount'] = 0x0, _0x2ccb92['mSpeed'] = 0x0, _0x2ccb92['mStop'] = 0x0, _0x2ccb92['mMoveCt'] = 0x0, _0x2ccb92['IsSelectTy' + 'pe'] = '', _0x2ccb92['isLoop'] = !0x1, _0x2ccb92;
                    }
                    return __extends(_0x617272, _0x33140e), _0x617272['prototype']['onUpdata'] = function (_0x910ea1, _0x207699) {
                        void 0x0 === _0x207699 && (_0x207699 = !0x1);
                        var _0xce4592 = '';
                        switch (_0x910ea1) {
                        case 'reward_pag' + 'e':
                            _0xce4592 = 'reward_pag' + 'e', this['IsSelectTy' + 'pe'] = 'reward_pag' + 'e';
                            break;
                        case 'revive_pag' + 'e':
                            _0xce4592 = 'revive_pag' + 'e', this['IsSelectTy' + 'pe'] = 'revive_pag' + 'e';
                            break;
                        case 'end_page':
                            _0xce4592 = 'end_page', this['IsSelectTy' + 'pe'] = 'end_page';
                            break;
                        case 'home_page':
                            _0xce4592 = 'home_page', this['IsSelectTy' + 'pe'] = 'home_page';
                            break;
                        case 'game_page':
                            _0xce4592 = 'game_page', this['IsSelectTy' + 'pe'] = 'game_page';
                        }
                        if ('end_page' != this['IsSelectTy' + 'pe']) {
                            var _0x1797c9 = _0x4b942b['util']['getArrayVa' + 'lueParam'](_0x2974fe['default']['app']['mWX']['mOnOff'], 'of_like'), _0x3c5886 = JSON['parse'](_0x1797c9);
                            this['mCount'] = Number(_0x3c5886['count']), this['mSpeed'] = Number(_0x3c5886['speed']), this['mStop'] = Number(_0x3c5886['stop']), this['mMoveCt'] = Number(_0x3c5886['move_ct']), this['mPanel']['width'], (this['mMoveBack']['removeChil' + 'dren'](), this['stopMove']());
                            var _0x5f260d = this['getListDat' + 'a']();
                            _0x617272['showList'] = [];
                            var _0x39c133 = _0x207699 ? 0xa : 0x0;
                            (_0x3ac577['MoreGame']['mPhone']['screenHeig' + 'ht'] >= 0x2e9 || Laya['stage']['height'] / 0x2 >= 0x2e9) && (_0x39c133 = 0x0);
                            for (var _0x28da57 = function (_0x5e1c6c) {
                                        var _0x7115e9 = new _0x4fe3f6['ui']['like']['myLikeItem' + 'UI']();
                                        _0x7115e9['x'] = _0x39c133, _0x207699 && (_0x3ac577['MoreGame']['mPhone']['screenHeig' + 'ht'] < 0x2e9 || Laya['stage']['height'] / 0x2 < 0x2e9) && (console['log']('xxx3', _0x3ac577['MoreGame']['mPhone']['screenHeig' + 'ht'], Laya['stage']['height'] / 0x2), _0x7115e9['width'] = 0xaa * 0.7, _0x7115e9['scaleX'] = 0.6, _0x7115e9['scaleY'] = 0.6), _0x39c133 += _0x7115e9['width'], _0x7115e9['centerY'] = 0x0;
                                        var _0x4cb0c9 = _0x5f260d[_0x5e1c6c]['anim_confi' + 'g'];
                                        try {
                                            var _0x3677ad = JSON['parse'](_0x4cb0c9);
                                            Number(_0x3677ad['frame']), Number(_0x3677ad['millisecon' + 'd']);
                                        } catch (_0xf056df) {
                                            0x0, 0x0;
                                        }
                                        _0x617272['showList']['push'](_0x5f260d[_0x5e1c6c]['appid']), _0x7115e9['mGameName']['text'] = '', console['log']('games[i]'), console['log'](_0x5f260d[_0x5e1c6c]);
                                        var _0x362bd1 = _0x461004['JumpObjCon' + 'verter']['instance']['convert'](_0x5f260d[_0x5e1c6c]);
                                        if (!_0x362bd1)
                                            return 'continue';
                                        var _0x468413 = '';
                                        console['log']('Main.app.m' + 'WX.oddEven' + 'TestModel.' + 'isAniTest', _0x2974fe['default']['app']['mWX']['oddEvenTes' + 'tModel']['isAniTest']), _0x468413 = 0x1 == _0x2974fe['default']['app']['mWX']['oddEvenTes' + 'tModel']['isAniTest'] ? _0x5f260d[_0x5e1c6c]['url_icon'] : _0x5f260d[_0x5e1c6c]['static_ico' + 'n'], console['log']('ooo1:', _0x468413), 'gameBottom' == _0x910ea1 ? (_0x468413 = _0x5f260d[_0x5e1c6c]['url_icon'], _0x7115e9['mGameIcon']['skin'] = _0x468413, _0x2974fe['default']['app']['mWX']['likeLoop'] = !0x1) : (_0x7115e9['mGameIcon']['skin'] = _0x5f260d[_0x5e1c6c]['url_icon'], Laya['timer']['once'](0xc8, _0x1589a2, function () {
                                            console['log']('likeloop2'), _0x2974fe['default']['app']['mWX']['likeLoop'] = !0x0;
                                            var _0x5c3bfa = 0x0;
                                            if (0x2 == _0x2974fe['default']['app']['mWX']['moreFenFaN' + 'um'])
                                                (_0x44c3a1 = JSON['parse'](_0x4cb0c9)['group_stat' + 'ic']['split'](','))['length'] > 0x1 && (_0x5c3bfa = Number(_0x44c3a1[0x0]) + 0x1, _0x468413 = _0x468413['replace']('_1.', '_' + _0x5c3bfa + '.')), console['log']('likeloop2', _0x468413, _0x362bd1['small_fram' + 'e']);
                                            else {
                                                if (0x3 == _0x2974fe['default']['app']['mWX']['moreFenFaN' + 'um']) {
                                                    var _0x44c3a1 = JSON['parse'](_0x4cb0c9)['group_stat' + 'ic']['split'](',');
                                                    _0x44c3a1['length'] > 0x2 && (_0x5c3bfa = Number(_0x44c3a1[0x0]) + Number(_0x44c3a1[0x1]) + 0x1, _0x468413 = _0x468413['replace']('_1.', '_' + _0x5c3bfa + '.')), console['log']('likeloop22' + '22', _0x468413, _0x362bd1['small_fram' + 'e']);
                                                }
                                            }
                                            console['log']('likeloop33' + '33333333', _0x468413, _0x362bd1['small_fram' + 'e'], _0x5c3bfa), _0x45a712['JumpAniCtl']['instance']['ani'](_0x7115e9['mGameIcon'], _0x468413, _0x362bd1['small_fram' + 'e'], _0x362bd1['small_inte' + 'rval'], _0x362bd1['millisecon' + 'd'], _0x5c3bfa);
                                        })), _0x7115e9['on'](Laya['Event']['CLICK'], _0x1589a2, _0x1589a2['onclick'], [
                                            _0x5f260d[_0x5e1c6c]['appid'],
                                            _0x5f260d[_0x5e1c6c]['gameid'],
                                            _0x910ea1
                                        ]), _0x1589a2['mMoveBack']['addChild'](_0x7115e9);
                                    }, _0x1589a2 = this, _0x66e78e = 0x0; _0x66e78e < _0x5f260d['length'] && _0x66e78e < this['mCount']; ++_0x66e78e)
                                _0x28da57(_0x66e78e);
                            this['mMoveBack']['width'] = _0x39c133, _0x2974fe['default']['app']['mWX']['indexBpTot' + 'le']('recom_show', {
                                'game_show_list': _0x617272['showList'],
                                'position_type': 'banner',
                                'from_page': _0xce4592
                            }), this['moveLikeGa' + 'me']();
                        }
                    }, _0x617272['prototype']['getListDat' + 'a'] = function () {
                        var _0x564c7e = _0x3ac577['MoreGame']['GetIndexRa' + 'ndomList'](_0x2974fe['default']['app']['mWX']['mGamesBox'], 0x9);
                        console['log']('--\x20猜你喜欢ban' + 'ner\x20初始九个白名' + '单\x20--', _0x564c7e);
                        var _0x3a30f6 = {};
                        _0x3a30f6['type'] = 'big';
                        for (_0x19cc6c = 0x0; _0x19cc6c < _0x564c7e['length']; _0x19cc6c++)
                            0x1 == _0x2974fe['default']['app']['mWX']['moreFenFaN' + 'um'] ? _0x3a30f6['game_' + _0x19cc6c] = [
                                _0x564c7e[_0x19cc6c]['name'],
                                0x1
                            ] : _0x2974fe['default']['app']['mWX']['moreFenFaN' + 'um'] >= 0x2 ? _0x3a30f6['game_' + _0x19cc6c] = [
                                _0x564c7e[_0x19cc6c]['name'],
                                JSON['parse'](_0x564c7e[_0x19cc6c]['anim_confi' + 'g'])['millisecon' + 'd_static']['split'](',')['length'] > 0x1 ? JSON['parse'](_0x564c7e[_0x19cc6c]['anim_confi' + 'g'])['millisecon' + 'd_static']['split'](',')['length'] : 0x1
                            ] : 0x0 == _0x2974fe['default']['app']['mWX']['moreFenFaN' + 'um'] && (_0x3a30f6['game_' + _0x19cc6c] = [
                                _0x564c7e[_0x19cc6c]['name'],
                                0x0
                            ]);
                        _0x2974fe['default']['app']['mWX']['indexBpTot' + 'le']('gif_show', _0x3a30f6);
                        var _0x5381dc = [], _0x29efcd = [], _0x1a8e70 = [], _0x3be1ed = _0x2974fe['default']['app']['mWX']['getUserDat' + 'aByKey']('clickLikeA' + 'rr');
                        if (!_0x3be1ed || '0' == _0x3be1ed)
                            return console['log']('--\x20clickLi' + 'keStr\x20=\x20nu' + 'll\x20--', _0x564c7e), _0x3ac577['MoreGame']['GetIndexRa' + 'ndomList'](_0x564c7e, this['mCount']);
                        _0x1a8e70 = JSON['parse'](_0x3be1ed), console['log']('--\x20猜你喜欢ban' + 'ner\x20初始clic' + 'kLikeArr\x20-' + '-', _0x1a8e70);
                        for (_0x19cc6c = 0x0; _0x19cc6c < _0x564c7e['length']; _0x19cc6c++) {
                            var _0x1e4d98 = _0x564c7e[_0x19cc6c];
                            -0x1 == _0x1a8e70['indexOf'](_0x1e4d98['gameid']) ? _0x29efcd['push'](_0x1e4d98) : _0x5381dc['push'](_0x1e4d98);
                        }
                        if (_0x29efcd['length'] >= this['mCount'])
                            return console['log']('--\x20noListD' + 'ata.length' + '\x20>=\x20this.m' + 'Count\x20--', _0x29efcd), _0x3ac577['MoreGame']['GetIndexRa' + 'ndomList'](_0x29efcd, this['mCount']);
                        if (_0x29efcd['length'] < this['mCount']) {
                            for (var _0x5ca423 = _0x3ac577['MoreGame']['GetIndexRa' + 'ndomList'](_0x5381dc, this['mCount'] - _0x29efcd['length']), _0x19cc6c = 0x0; _0x19cc6c < _0x5ca423['length']; _0x19cc6c++) {
                                var _0x2b4dbf = _0x5ca423[_0x19cc6c];
                                _0x29efcd['push'](_0x2b4dbf);
                            }
                            return console['log']('--\x20noListD' + 'ata.length' + '\x20<\x20this.mC' + 'ount\x20--', _0x29efcd), _0x3ac577['MoreGame']['GetIndexRa' + 'ndomList'](_0x29efcd, this['mCount']);
                        }
                    }, _0x617272['prototype']['setMoreJum' + 'pType'] = function (_0x1e82f0, _0x1669ea) {
                        for (var _0x434c0a = 0x0; _0x434c0a < _0x2974fe['default']['app']['mWX']['mGamesBox']['length']; ++_0x434c0a)
                            Number(_0x2974fe['default']['app']['mWX']['mGamesBox'][_0x434c0a]['gameid']) == _0x1e82f0 && (_0x2974fe['default']['app']['mWX']['mGamesBox'][_0x434c0a]['jump_type'] = _0x1669ea);
                    }, _0x617272['prototype']['getMoreJum' + 'pType'] = function (_0x1e9c8d) {
                        for (var _0x4e1ed4 = 0x0; _0x4e1ed4 < _0x2974fe['default']['app']['mWX']['mGamesBox']['length']; ++_0x4e1ed4)
                            if (Number(_0x2974fe['default']['app']['mWX']['mGamesBox'][_0x4e1ed4]['gameid']) == _0x1e9c8d)
                                return Number(_0x2974fe['default']['app']['mWX']['mGamesBox'][_0x4e1ed4]['jump_type']);
                        return 0x3;
                    }, _0x617272['prototype']['onclick'] = function (_0x567f70, _0x422618, _0x45ff38) {
                        if (console['log']('--\x20onclick' + '123\x20--', _0x567f70, _0x422618, _0x45ff38), _0x11553a['gameBox']['isClickJum' + 'p']) {
                            if (_0x11553a['gameBox']['isClickJum' + 'p'] = !0x1, _0x2974fe['default']['app']['clickAppId'] = _0x567f70, _0x2974fe['default']['app']['clickGameI' + 'd'] = Number(_0x422618), _0x2974fe['default']['app']['clickFromP' + 'age'] = String(_0x45ff38), !Laya['Browser']['onIOS']) {
                                console['log']('--\x20onclick' + '\x20--', _0x422618 + _0x45ff38);
                                var _0x2dcbd8 = _0x2974fe['default']['app']['mWX']['getUserDat' + 'aByKey']('clickLikeA' + 'rr');
                                _0x2dcbd8 && '0' != _0x2dcbd8 && (_0x2974fe['default']['app']['clickLikeA' + 'rr'] = JSON['parse'](_0x2dcbd8)), console['log']('猜你喜欢点击，', _0x2974fe['default']['app']['clickLikeA' + 'rr']), _0x2974fe['default']['app']['clickLikeA' + 'rr']['length'] > 0x0 ? -0x1 == _0x2974fe['default']['app']['clickLikeA' + 'rr']['indexOf'](_0x422618) ? this['changeGame' + 'id'](_0x567f70, _0x422618) : this['setMoreJum' + 'pType'](_0x422618, 0x3) : this['changeGame' + 'id'](_0x567f70, _0x422618);
                            }
                            _0x11553a['gameBox']['isCallNavi' + 'gation'] = 'homeIcon' == _0x45ff38 ? 0x1 : 'homeBottom' == _0x45ff38 ? 0x2 : 'gameIcon' == _0x45ff38 ? 0x3 : 'revive' == _0x45ff38 ? 0x4 : 'arrowDead' == _0x45ff38 ? 0x5 : 'arrowSkin' == _0x45ff38 ? 0x6 : 'corpseSkin' == _0x45ff38 ? 0x7 : 'result' == _0x45ff38 ? 0x8 : 'baokuan' == _0x45ff38 ? 0xa : 'fakerxcxli' + 'st' == _0x45ff38 ? 0xb : 0x9, _0x11553a['gameBox']['showBoxPag' + 'e'](_0x567f70, _0x2974fe['default']['app']['mWX']['mGamesBox'], '天天切菜3D');
                        }
                    }, _0x617272['prototype']['changeGame' + 'id'] = function (_0x4e9c92, _0x811382) {
                        for (var _0x161089 = 0x0; _0x161089 < _0x3ac577['WriteBoxLi' + 'st']['mWriteBox']['length']; ++_0x161089) {
                            if (_0x4e9c92['toUpperCas' + 'e']() == _0x3ac577['WriteBoxLi' + 'st']['mWriteBox'][_0x161089]['toUpperCas' + 'e']()) {
                                0x3 == this['getMoreJum' + 'pType'](_0x811382) && this['setMoreJum' + 'pType'](_0x811382, 0x1);
                                break;
                            }
                        }
                    }, _0x617272['prototype']['moveLikeGa' + 'me'] = function () {
                        function _0x364f6d() {
                            var _0x4e167e = Math['abs'](_0x468ab6), _0x32d2e6 = Math['abs'](_0x468ab6 - _0xe7cc29['mMoveBack']['x']) * _0xe7cc29['mSpeed'] / _0x4e167e;
                            Laya['Tween']['to'](_0xe7cc29['mMoveBack'], { 'x': _0x468ab6 }, _0x32d2e6, null, new Laya['Handler'](_0xe7cc29, _0x387e62), _0xe7cc29['mStop']);
                        }
                        function _0x387e62() {
                            var _0x56fbff = Math['abs'](_0x468ab6), _0x1c2e24 = Math['abs'](0x0 - _0xe7cc29['mMoveBack']['x']) * _0xe7cc29['mSpeed'] / _0x56fbff;
                            Laya['Tween']['to'](_0xe7cc29['mMoveBack'], { 'x': 0x0 }, _0x1c2e24, null, new Laya['Handler'](_0xe7cc29, _0x364f6d), _0xe7cc29['mStop']);
                        }
                        function _0x208017() {
                            for (var _0x22e352 = _0xe7cc29['mMoveBack']['numChildre' + 'n'], _0xc1b2c2 = _0xe7cc29['mMoveBack']['getChildAt'](0x0)['width'] * _0xe7cc29['mMoveCt'], _0x3b696c = -(_0xe7cc29['mMoveBack']['width'] - _0xe7cc29['mPanel']['width']), _0x575b3b = _0xe7cc29['mMoveBack']['x'], _0x35c3d7 = 0x1; _0x35c3d7 < _0x22e352; ++_0x35c3d7) {
                                var _0xaea7df = _0x575b3b - _0xc1b2c2 * _0x35c3d7;
                                if (_0xaea7df < _0x3b696c && (_0xaea7df = _0x3b696c), _0x35c3d7 == _0x22e352 - 0x1 || _0xaea7df == _0x3b696c) {
                                    Laya['Tween']['to'](_0xe7cc29['mMoveBack'], { 'x': _0xaea7df }, _0xe7cc29['mSpeed'], null, new Laya['Handler'](_0xe7cc29, _0x598264), _0xe7cc29['mStop'] * _0x35c3d7 + _0xe7cc29['mSpeed'] * _0x35c3d7);
                                    break;
                                }
                                Laya['Tween']['to'](_0xe7cc29['mMoveBack'], { 'x': _0xaea7df }, _0xe7cc29['mSpeed'], null, null, _0xe7cc29['mStop'] * _0x35c3d7);
                            }
                        }
                        function _0x598264() {
                            for (var _0x38a944 = _0xe7cc29['mMoveBack']['numChildre' + 'n'], _0xafc65e = _0xe7cc29['mMoveBack']['getChildAt'](0x0)['width'] * _0xe7cc29['mMoveCt'], _0x52eabc = (_0xe7cc29['mMoveBack']['width'], _0xe7cc29['mPanel']['width'], _0xe7cc29['mMoveBack']['x']), _0xec4455 = 0x1; _0xec4455 < _0x38a944; ++_0xec4455) {
                                var _0x304e3e = _0x52eabc + _0xafc65e * _0xec4455;
                                if (_0x304e3e > 0x0 && (_0x304e3e = 0x0), _0xec4455 == _0x38a944 - 0x1 || 0x0 == _0x304e3e) {
                                    Laya['Tween']['to'](_0xe7cc29['mMoveBack'], { 'x': _0x304e3e }, _0xe7cc29['mSpeed'], null, new Laya['Handler'](_0xe7cc29, _0x208017), _0xe7cc29['mStop'] * _0xec4455 + _0xe7cc29['mSpeed'] * _0xec4455);
                                    break;
                                }
                                Laya['Tween']['to'](_0xe7cc29['mMoveBack'], { 'x': _0x304e3e }, _0xe7cc29['mSpeed'], null, null, _0xe7cc29['mStop'] * _0xec4455);
                            }
                        }
                        var _0xe7cc29 = this, _0x468ab6 = -(_0xe7cc29['mMoveBack']['width'] - _0xe7cc29['mPanel']['width']);
                        _0x468ab6 >= 0x0 || (_0xe7cc29['mMoveBack']['on'](Laya['Event']['MOUSE_DOWN'], this, this['onStartDra' + 'g']), _0xe7cc29['mMoveBack']['on'](Laya['Event']['DRAG_MOVE'], this, this['onDragMove']), _0xe7cc29['mMoveBack']['on'](Laya['Event']['DRAG_END'], this, this['onDragEnd']), 0x0 == _0xe7cc29['mMoveCt'] ? _0xe7cc29['mMoveBack']['x'] >= 0x0 ? _0x364f6d() : _0x387e62() : _0xe7cc29['mMoveBack']['x'] >= 0x0 ? _0x208017() : _0x598264());
                    }, _0x617272['prototype']['onStartDra' + 'g'] = function () {
                        var _0x9fa1ef = -(this['mMoveBack']['width'] - this['mPanel']['width']);
                        if (!(_0x9fa1ef >= 0x0)) {
                            var _0x3d63c1 = new Laya['Rectangle'](_0x9fa1ef, 0x0, Math['abs'](_0x9fa1ef), 0x0);
                            console['log'](_0x3d63c1), this['mMoveBack']['startDrag'](_0x3d63c1), this['mMoveBack']['on'](Laya['Event']['DRAG_START'], this, this['onDragStar' + 't']);
                        }
                    }, _0x617272['prototype']['onDragStar' + 't'] = function (_0xed9b3e) {
                        for (var _0x446ad6 = 0x0; _0x446ad6 < this['mMoveBack']['numChildre' + 'n']; ++_0x446ad6) {
                            this['mMoveBack']['getChildAt'](_0x446ad6)['mouseEnabl' + 'ed'] = !0x1;
                        }
                    }, _0x617272['prototype']['onDragMove'] = function () {
                        this['stopMove']();
                    }, _0x617272['prototype']['onDragEnd'] = function () {
                        this['mMoveBack']['off'](Laya['Event']['DRAG_START'], this, this['onDragStar' + 't']), this['mMoveBack']['off'](Laya['Event']['MOUSE_DOWN'], this, this['onStartDra' + 'g']), this['mMoveBack']['off'](Laya['Event']['DRAG_MOVE'], this, this['onDragMove']), this['mMoveBack']['off'](Laya['Event']['DRAG_END'], this, this['onDragEnd']);
                        for (var _0xe1ceb9 = 0x0; _0xe1ceb9 < this['mMoveBack']['numChildre' + 'n']; ++_0xe1ceb9) {
                            this['mMoveBack']['getChildAt'](_0xe1ceb9)['mouseEnabl' + 'ed'] = !0x0;
                        }
                        this['moveLikeGa' + 'me']();
                    }, _0x617272['prototype']['stopMove'] = function () {
                        Laya['Tween']['clearAll'](this['mMoveBack']);
                    }, _0x617272['prototype']['closeViewA' + 'ndFlash'] = function () {
                        this['isLoop'] = !0x1, console['log']('likeLoopfa' + 'lse3'), _0x2974fe['default']['app']['mWX']['likeLoop'] = !0x1, console['log']('dudududuud' + 'udduudud');
                    }, _0x617272['showList'] = [], _0x617272['jumpCount'] = {}, _0x617272['clickDic'] = {}, _0x617272;
                }(_0x4fe3f6['ui']['like']['myLikeView' + 'UI']);
            _0x73458c['default'] = _0x53c536;
        },
        {
            '../Core/JumpAniCtl': 0x3,
            '../Core/JumpObjConverter': 0x4,
            '../Core/MoreGame': 0x6,
            '../Core/gameBox': 0x8,
            '../Core/util': 0x9,
            '../Main': 0xe,
            '../ui/layaMaxUI': 0x2f
        }
    ],
    0x23: [
        function (_0x2c829a, _0x42c0ff, _0x31c328) {
            'use strict';
            Object['defineProp' + 'erty'](_0x31c328, '__esModule', { 'value': !0x0 });
            var _0x283674 = _0x2c829a('../ui/laya' + 'MaxUI'), _0x101fff = _0x2c829a('../Main'), _0x32c1d6 = _0x2c829a('../core/Mo' + 'reGame'), _0x491f3a = _0x2c829a('./gameObje' + 'ct/PlayerC' + 'trl'), _0x196470 = _0x2c829a('../GameCon' + 'fig'), _0x569d7c = _0x2c829a('./GameMana' + 'ger'), _0x1aaabd = _0x2c829a('./GameUI'), _0x5ee9c7 = _0x2c829a('../util/Sh' + 'areUtil'), _0x158cb3 = _0x2c829a('./SoundPla' + 'yMgr'), _0x1a463e = _0x2c829a('../core/Ju' + 'mpAniCtl'), _0x31fdee = _0x2c829a('../core/Ju' + 'mpObjConve' + 'rter'), _0x11bc4e = _0x2c829a('../core/ga' + 'meBox'), _0x33620e = _0x2c829a('./MyLikeVi' + 'ew2'), _0x24da59 = _0x2c829a('../util/AD' + 'Util'), _0x299245 = _0x2c829a('../core/wx' + 'Core'), _0x28e52e = _0x2c829a('../core/Ba' + 'oKuanTuiJi' + 'an'), _0x1f0845 = function (_0x4254e1) {
                    function _0x21318a(_0x14f2ec) {
                        var _0x4e24c3 = _0x4254e1['call'](this) || this;
                        _0x4e24c3['intType'] = 0x3e8, _0x4e24c3['numType'] = 0x3e8, _0x4e24c3['strType'] = 'hello\x20laya', _0x4e24c3['boolType'] = !0x0, _0x4e24c3['type'] = null, _0x4e24c3['revive_num'] = 0x0, _0x4e24c3['revive_big'] = 0x1, _0x4e24c3['reviveNum'] = 0x5, _0x4e24c3['reviveiMG'] = [
                            'button/djs' + '1.png',
                            'button/djs' + '2.png',
                            'button/djs' + '3.png',
                            'button/djs' + '4.png',
                            'button/djs' + '5.png'
                        ], _0x4e24c3['result_sho' + 'wList'] = new Array(), _0x4e24c3['isLoader'] = [
                            0x0,
                            0x0,
                            0x0,
                            0x0,
                            0x0,
                            0x0
                        ], _0x4e24c3['isLoop'] = !0x1, _0x4e24c3['baokuanyou' + 'xi'] = null, _0x4e24c3['height'] = Laya['stage']['height'];
                        var _0x133bbe = _0x101fff['default']['app']['mWX']['getMenuBut' + 'tonTop_Cen' + 'terPoint']();
                        return _0x4e24c3['listBox']['y'] = (Laya['stage']['height'] - 0x536) / 0x2 + 0xc8, _0x4e24c3['txt_gold']['text'] = _0x101fff['default']['app']['mWX']['getUserDat' + 'aByKey']('gold'), _0x4e24c3['type'] = _0x14f2ec, Laya['timer']['once'](0xc8, _0x4e24c3, function () {
                            _0x4e24c3['yad']['on'](Laya['Event']['MOUSE_DOWN'], _0x4e24c3, () => {
                                platform['getInstanc' + 'e']()['navigate']('GAME', 'LOGO');
                            }), (_0x4e24c3['btn_revive']['on'](Laya['Event']['CLICK'], _0x4e24c3, _0x4e24c3['onRevive']), _0x4e24c3['btn_next']['on'](Laya['Event']['CLICK'], _0x4e24c3, _0x4e24c3['onNext'], [0x5]), _0x4e24c3['btn_again']['on'](Laya['Event']['CLICK'], _0x4e24c3, _0x4e24c3['onAgain']), _0x4e24c3['btn_skip']['on'](Laya['Event']['CLICK'], _0x4e24c3, _0x4e24c3['onSkip']));
                        }), _0x4e24c3['reviveNum'] = 0x5, _0x4e24c3['reviveiMG'] = [
                            'button/djs' + '1.png',
                            'button/djs' + '2.png',
                            'button/djs' + '3.png',
                            'button/djs' + '4.png',
                            'button/djs' + '5.png'
                        ], _0x4e24c3['daojishi']['skin'] = _0x4e24c3['reviveiMG'][_0x4e24c3['reviveNum'] - 0x1], 'Die' == _0x4e24c3['type'] ? _0x4e24c3['revive_num'] < _0x4e24c3['revive_big'] ? (_0x4e24c3['reviveBox']['visible'] = !0x0, _0x4e24c3['endBox']['visible'] = !0x1, 0x0 == _0x101fff['default']['app']['mWX']['fhOnoff'] ? _0x4e24c3['btn_revive']['skin'] = 'button/fuh' + 'uo1.png' : 0x1 == _0x101fff['default']['app']['mWX']['getOnOffAl' + 'lControl']() ? _0x4e24c3['btn_revive']['skin'] = 'button/fuh' + 'uo2.png' : _0x4e24c3['btn_revive']['skin'] = 'button/fuh' + 'uo1.png', _0x4e24c3['btn_skip']['visible'] = !0x1, Laya['timer']['once'](_0x101fff['default']['app']['mWX']['getOnOffRe' + 'wardSkip'](), _0x4e24c3, function () {
                            _0x4e24c3['btn_skip']['visible'] = !0x0;
                        }), _0x4e24c3['isLoop'] = !0x0, Laya['timer']['loop'](0x3e8, _0x4e24c3, function () {
                            _0x4e24c3['dsjLoop']();
                        })) : _0x4e24c3['toNewEnd']() : _0x4e24c3['toNewEnd'](), _0x4e24c3;
                    }
                    return __extends(_0x21318a, _0x4254e1), _0x21318a['prototype']['dsjLoop'] = function () {
                        if (this['isLoop']) {
                            if (this['reviveNum'] -= 0x1, 0x0 == this['reviveNum'])
                                return this['isLoop'] = !0x1, Laya['timer']['clear'](this, this['dsjLoop']), void this['toNewEnd']();
                            this['daojishi']['skin'] = this['reviveiMG'][this['reviveNum'] - 0x1];
                        }
                    }, _0x21318a['prototype']['toNewEnd'] = function () {
                        var _0x3baeba = this;
                        this['toEnd']();
                    }, _0x21318a['prototype']['toEnd'] = function () {
                        var _0x582116 = this;
                        this['reviveBox']['visible'] = !0x1, this['endBox']['visible'] = !0x0, this['reviveNum'] = 0x0, 'Die' == this['type'] ? (this['title']['skin'] = 'button/fai' + 'l.png', this['btn_next']['visible'] = !0x1, this['btn_again']['visible'] = !0x1, _0x101fff['default']['app']['isStartRew' + 'ard'] = !0x0, Laya['timer']['once'](_0x101fff['default']['app']['mWX']['getOnOffRe' + 'wardSkip'](), this, function () {
                            _0x582116['btn_again']['visible'] = !0x0;
                        })) : (this['title']['skin'] = 'button/suc' + 'cess.png', this['btn_next']['visible'] = !0x1, this['btn_again']['visible'] = !0x1, Laya['timer']['once'](_0x101fff['default']['app']['mWX']['getOnOffRe' + 'wardSkip'](), this, function () {
                            _0x582116['btn_next']['visible'] = !0x0;
                        }), _0x101fff['default']['app']['Level_num']++, _0x101fff['default']['app']['mWX']['setUserVal' + 'ue']('Level_num', '' + _0x101fff['default']['app']['Level_num']));
                        var _0x55e7fb = [];
                        _0x101fff['default']['app']['Level_num'] / 0x5 == 0x0 && ('' == _0x101fff['default']['app']['mWX']['getUserDat' + 'aByKey']('food_skin') ? (_0x55e7fb = [
                            0x0,
                            0x1,
                            0x2
                        ], _0x101fff['default']['app']['mWX']['setUserVal' + 'ue']('food_skin', JSON['stringify'](_0x55e7fb))) : ((_0x55e7fb = JSON['parse'](_0x101fff['default']['app']['mWX']['getUserDat' + 'aByKey']('food_skin')))[_0x55e7fb['length'] + 0x1] = _0x55e7fb['length'], _0x101fff['default']['app']['mWX']['setUserVal' + 'ue']('food_skin', JSON['stringify'](_0x55e7fb))));
                        var _0x5a13aa = {
                            'is_level_complete': 'Die' == this['type'] ? 0x0 : 0x1,
                            'level': Number(_0x101fff['default']['app']['Level_num'] - 0x1)
                        };
                        this['isLoader'] = [
                            0x0,
                            0x0,
                            0x0,
                            0x0,
                            0x0,
                            0x0
                        ];
                    }, _0x21318a['prototype']['btnOff'] = function () {
                        this['btn_revive']['off'](Laya['Event']['CLICK'], this, this['onRevive']), this['btn_next']['off'](Laya['Event']['CLICK'], this, this['onNext']);
                    }, _0x21318a['prototype']['moreGame'] = function () {
                    }, _0x21318a['prototype']['updataGame' + 'List'] = function (_0x105ecc, _0x124f20) {
                        _0x105ecc['offAll'](Laya['Event']['MOUSE_DOWN']), _0x105ecc['on'](Laya['Event']['MOUSE_DOWN'], this, () => {
                            platform['getInstanc' + 'e']()['navigate']('GAME', 'MORE', _0x105ecc['dataSource']['id']);
                        });
                    }, _0x21318a['prototype']['onShowGame'] = function (_0x56fbd0) {
                        if (_0x11bc4e['gameBox']['isClickJum' + 'p']) {
                            var _0x3535f4 = _0x101fff['default']['app']['mWX']['getMoreUrl'](_0x56fbd0);
                            if (null == _0x3535f4)
                                return;
                            this['result_gam' + 'eid'] = _0x56fbd0, this['mlike']['onclick'](_0x3535f4['appid'], _0x3535f4['gameid'], 'result');
                        }
                    }, _0x21318a['prototype']['rotateIcon'] = function (_0x1fe65d, _0x5197cc) {
                        _0x1fe65d['rotation'] = -0x5a, Laya['Tween']['to'](_0x1fe65d, { 'rotation': 0x0 }, 0x1c2, null, Laya['Handler']['create'](this, function () {
                            _0x5197cc['run']();
                        }));
                    }, _0x21318a['prototype']['onEnable'] = function () {
                        this['moreGame']();
                    }, _0x21318a['prototype']['onDisable'] = function () {
                        this['gameList']['array'] = [];
                    }, _0x21318a['prototype']['flyGold'] = function (_0x63f836, _0x43b237) {
                        var _0x5065e6 = this;
                        void 0x0 === _0x63f836 && (_0x63f836 = null), this['btnOff']();
                        var _0xb7c9c2 = [], _0x313806 = 0x19;
                        Laya['stage']['height'] > 0x578 && (_0x313806 = 0x5a), this['txt_gold']['localToGlo' + 'bal'](Laya['Point']['TEMP']);
                        if ('Win' == this['type']) {
                            for (var _0x3fa936 = 0x0; _0x3fa936 < 0xa; _0x3fa936++) {
                                _0xb7c9c2[_0x3fa936] = new Laya['Image'](), _0xb7c9c2[_0x3fa936]['skin'] = 'start/img_' + 'gold.png', this['addChild'](_0xb7c9c2[_0x3fa936]);
                                var _0x34aa00 = 0x3c * Math['random']();
                                _0xb7c9c2[_0x3fa936]['pos'](0x12c + _0x34aa00, 0x40e), Laya['Tween']['to'](_0xb7c9c2[_0x3fa936], {
                                    'x': 0x1e,
                                    'y': _0x313806
                                }, 0x12c, null, Laya['Handler']['create'](this, function () {
                                    _0x5065e6['txt_gold']['text'] = Number(_0x5065e6['txt_gold']['text']) + _0x43b237 + '';
                                }), 0x50 * _0x3fa936);
                            }
                            Laya['timer']['once'](0x5dc, this, function () {
                                _0x101fff['default']['app']['mWX']['setUserVal' + 'ue']('gold', _0x5065e6['txt_gold']['text']);
                                for (var _0x486b0c = 0x0; _0x486b0c < _0xb7c9c2['length']; _0x486b0c++)
                                    _0xb7c9c2[_0x486b0c]['removeSelf'](), _0xb7c9c2[_0x486b0c]['destroy']();
                                null != _0x63f836 && _0x63f836();
                            });
                        } else {
                            for (var _0x2e2351 = 0x0; _0x2e2351 < _0xb7c9c2['length']; _0x2e2351++)
                                _0xb7c9c2[_0x2e2351]['removeSelf'](), _0xb7c9c2[_0x2e2351]['destroy']();
                            null != _0x63f836 && _0x63f836();
                        }
                    }, _0x21318a['prototype']['onNext'] = function (_0x925a12) {
                        var _0x12c907 = this;
                        platform['getInstanc' + 'e']()['showInters' + 'titial'](() => {
                            this['bkonNext'](_0x925a12);
                        });
                    }, _0x21318a['prototype']['onGold'] = function () {
                        var _0x13ca2d = this;
                        0x0 == _0x101fff['default']['app']['mWX']['fhOnoff'] ? this['onNext'](0x19) : 0x1 == _0x101fff['default']['app']['mWX']['getOnOffAl' + 'lControl']() ? _0x24da59['ADUtil']['playVideo'](function () {
                            _0x13ca2d['onNext'](0x19);
                        }, function () {
                            _0x5ee9c7['ShareUtil']['shareProp'](function () {
                                _0x13ca2d['onNext'](0x19);
                            });
                        }, function () {
                        }) : 0x2 == _0x101fff['default']['app']['mWX']['getOnOffAl' + 'lControl']() && _0x5ee9c7['ShareUtil']['shareProp'](function () {
                            _0x13ca2d['onNext'](0x19);
                        });
                    }, _0x21318a['prototype']['onRevive'] = function () {
                        var _0x4836eb = this;
                        platform['getInstanc' + 'e']()['showReward'](() => {
                            console['log']('revive++++' + '++++++++?'), (_0x4836eb['revive_num']++, _0x491f3a['default']['instance']['ResetKnife'](), _0x4836eb['onClose'](!0x0));
                        });
                    }, _0x21318a['prototype']['onClear'] = function () {
                        this['onNext'](0x5);
                    }, _0x21318a['prototype']['onAgain'] = function () {
                        var _0x51ffc = this;
                        if (_0x101fff['default']['app']['mWX']['likeLoop'] = !0x1, null == this['baokuanyou' + 'xi']) {
                            var _0x3bb591 = !0x1;
                            0x0 == _0x101fff['default']['app']['mWX']['IsOpenBKYX']() ? 0x1 == _0x299245['default']['uo']['mIsNewUser'] && (_0x3bb591 = !0x0) : 0x2 == _0x101fff['default']['app']['mWX']['IsOpenBKYX']() && (_0x3bb591 = !0x0), _0x3bb591 && _0x101fff['default']['app']['mWX']['BKYXNotSho' + 'wList']()['indexOf'](Number(_0x101fff['default']['app']['Level_num'] - 0x1)) < 0x0 ? (this['baokuanyou' + 'xi'] = new _0x28e52e['default'](), Laya['stage']['addChild'](this['baokuanyou' + 'xi']), this['baokuanyou' + 'xi']['zOrder'] = 0x63, this['baokuanyou' + 'xi']['onShow'](!0x0, function () {
                                _0x51ffc['bkonAgain'](), _0x51ffc['baokuanyou' + 'xi'] = null;
                            })) : this['bkonAgain']();
                        } else
                            this['bkonAgain']();
                    }, _0x21318a['prototype']['bkonAgain'] = function () {
                        _0x569d7c['default']['instance']['sceneClear'](), _0x569d7c['default']['instance']['showSucces' + 'sEffect'](!0x1), null != _0x1aaabd['default']['app']['scene3D'] && (_0x1aaabd['default']['app']['scene3D']['removeSelf'](), _0x1aaabd['default']['app']['scene3D'] = null), _0x1aaabd['default']['app']['visible'] = !0x1, this['onClose'](), Laya['Scene']['open'](_0x196470['default']['startScene'], !0x1);
                    }, _0x21318a['prototype']['bkonNext'] = function (_0x11a222) {
                        var _0x3b65ff = this;
                        this['flyGold'](function () {
                            _0x569d7c['default']['instance']['sceneClear'](), _0x569d7c['default']['instance']['showSucces' + 'sEffect'](!0x1), null != _0x1aaabd['default']['app']['scene3D'] && (_0x1aaabd['default']['app']['scene3D']['removeSelf'](), _0x1aaabd['default']['app']['scene3D'] = null), _0x1aaabd['default']['app']['visible'] = !0x1, _0x3b65ff['onClose'](), Laya['Scene']['open'](_0x196470['default']['startScene'], !0x1);
                        }, _0x11a222);
                    }, _0x21318a['prototype']['onSkip'] = function () {
                        this['reviveNum'] > 0x0 && (this['reviveNum'] = 0x0, Laya['timer']['clear'](this, this['dsjLoop']), this['toNewEnd']());
                    }, _0x21318a['prototype']['onClose'] = function (_0x235751) {
                        void 0x0 === _0x235751 && (_0x235751 = !0x1), Laya['timer']['clear'](this, this['dsjLoop']), _0x235751 || (console['log']('likeLoopfa' + 'lse2'), _0x101fff['default']['app']['mWX']['likeLoop'] = !0x1), _0x158cb3['SoundPlayM' + 'gr']['instance']['playGSound']('sound/btn_' + 'click'), (_0x101fff['default']['app']['mWX']['indexBpTot' + 'le']('back_home', {}), this['btn_revive']['off'](Laya['Event']['CLICK'], this, this['onRevive']), this['btn_next']['off'](Laya['Event']['CLICK'], this, this['onNext']), _0x101fff['default']['app']['resultView']['removeSelf'](), _0x101fff['default']['app']['resultView']['destroy'](), _0x101fff['default']['app']['resultView'] = null);
                    }, _0x21318a;
                }(_0x283674['ui']['page']['ResultView' + 'UI']);
            _0x31c328['default'] = _0x1f0845;
        },
        {
            '../GameConfig': 0xd,
            '../Main': 0xe,
            '../core/BaoKuanTuiJian': 0xf,
            '../core/JumpAniCtl': 0x13,
            '../core/JumpObjConverter': 0x14,
            '../core/MoreGame': 0x16,
            '../core/gameBox': 0x18,
            '../core/wxCore': 0x1b,
            '../ui/layaMaxUI': 0x2f,
            '../util/ADUtil': 0x30,
            '../util/ShareUtil': 0x34,
            './GameManager': 0x1d,
            './GameUI': 0x1e,
            './MyLikeView2': 0x22,
            './SoundPlayMgr': 0x25,
            './gameObject/PlayerCtrl': 0x2d
        }
    ],
    0x24: [
        function (_0x1d65af, _0xee606b, _0x436ce6) {
            'use strict';
            Object['defineProp' + 'erty'](_0x436ce6, '__esModule', { 'value': !0x0 });
            var _0x57186c = _0x1d65af('./../ui/la' + 'yaMaxUI'), _0x25df8d = _0x1d65af('../Main'), _0x4afbeb = _0x1d65af('../util/Sh' + 'areUtil'), _0x20576d = _0x1d65af('./SoundPla' + 'yMgr'), _0xcb0096 = _0x1d65af('../util/AD' + 'Util'), _0x14a62e = function (_0x148cf0) {
                    function _0x5ba717(_0x566ed0) {
                        var _0x41dac1 = _0x148cf0['call'](this) || this;
                        return _0x41dac1['intType'] = 0x3e8, _0x41dac1['numType'] = 0x3e8, _0x41dac1['strType'] = 'hello\x20laya', _0x41dac1['boolType'] = !0x0, _0x41dac1['food'] = [], _0x41dac1['knife'] = [], _0x41dac1['page_num'] = 0x0, _0x41dac1['type'] = null, _0x41dac1['btn_gold_n' + 'um'] = 0x6, _0x41dac1['isNoClick'] = !0x1, _0x41dac1['zOrder'] = 0x3e7, Laya['stage']['height'] > 0x578 && (_0x41dac1['bg']['top'] = 0x96), _0x41dac1['btn_close']['on'](Laya['Event']['CLICK'], _0x41dac1, _0x41dac1['onClose']), _0x41dac1['btn_right']['visible'] = !0x1, _0x41dac1['btn_left']['visible'] = !0x1, _0x41dac1['btn_unlock']['on'](Laya['Event']['CLICK'], _0x41dac1, _0x41dac1['getNewSkin']), _0x41dac1['btn_gold']['on'](Laya['Event']['CLICK'], _0x41dac1, _0x41dac1['onGold']), _0x41dac1['type'] = _0x566ed0, _0x41dac1['txt_gold']['text'] = _0x25df8d['default']['app']['mWX']['getUserDat' + 'aByKey']('gold'), 'food' == _0x566ed0 ? (_0x41dac1['title']['skin'] = 'shop/img_t' + 'itle1.png', _0x41dac1['data_skin'] = _0x25df8d['default']['app']['mWX']['getUserDat' + 'aByKey']('food_skin') || '', _0x5ba717['skin_id'] = Number(_0x25df8d['default']['app']['mWX']['getUserDat' + 'aByKey']('food_skin_' + 'id')), _0x41dac1['unlockNum']['text'] = 0x12c + '', '' == _0x41dac1['data_skin'] ? (_0x41dac1['data_skin'] = [
                            0x1,
                            0x2,
                            0x3
                        ], _0x25df8d['default']['app']['mWX']['setUserVal' + 'ue']('food_skin', JSON['stringify'](_0x41dac1['data_skin'])), _0x25df8d['default']['app']['mWX']['setUserVal' + 'ue']('food_skin_' + 'id', '1')) : _0x41dac1['data_skin'] = JSON['parse'](_0x25df8d['default']['app']['mWX']['getUserDat' + 'aByKey']('food_skin'))) : (_0x41dac1['unlockNum']['text'] = 0x3e8 + '', (_0x41dac1['title']['skin'] = 'shop/img_t' + 'itle2.png', _0x41dac1['data_skin'] = _0x25df8d['default']['app']['mWX']['getUserDat' + 'aByKey']('knife_skin') || '', _0x5ba717['skin_id'] = Number(_0x25df8d['default']['app']['mWX']['getUserDat' + 'aByKey']('knife_skin' + '_id')), '' == _0x41dac1['data_skin'] ? (_0x41dac1['data_skin'] = [0x1], _0x25df8d['default']['app']['mWX']['setUserVal' + 'ue']('knife_skin', JSON['stringify'](_0x41dac1['data_skin'])), _0x25df8d['default']['app']['mWX']['setUserVal' + 'ue']('knife_skin' + '_id', '1')) : _0x41dac1['data_skin'] = JSON['parse'](_0x25df8d['default']['app']['mWX']['getUserDat' + 'aByKey']('knife_skin')))), _0x41dac1['btn_gold']['skin'] = 'shop/btn_g' + 'et1.png', (0x0 == _0x41dac1['food']['length'] && _0x41dac1['updateMass' + 'age'](_0x566ed0), _0x41dac1['displayVie' + 'w']()), _0x41dac1;
                    }
                    return __extends(_0x5ba717, _0x148cf0), _0x5ba717['prototype']['onEnable'] = function () {
                    }, _0x5ba717['prototype']['onDisable'] = function () {
                    }, _0x5ba717['prototype']['displayVie' + 'w'] = function () {
                        'food' == this['type'] ? this['list']['array'] = this['food'] : this['list']['array'] = this['knife'], this['list']['vScrollBar' + 'Skin'] = '', this['data_skin']['length'] == this['list']['array']['length'] && (this['btn_unlock']['visible'] = ![], this['btn_gold']['x'] = 0xd1), this['list']['renderHand' + 'ler'] = new Laya['Handler'](this, this['onListRend' + 'er']);
                    }, _0x5ba717['prototype']['onListRend' + 'er'] = function (_0x545276, _0x23ff13) {
                        var _0x5f36f1 = _0x545276['getChildBy' + 'Name']('icon'), _0xc809be = _0x545276['getChildBy' + 'Name']('iconName'), _0x2db25a = _0x545276['getChildBy' + 'Name']('select');
                        _0xc809be['visible'] = ![];
                        if ('food' == this['type'])
                            _0x5f0b12 = this['food'], this['img_level']['skin'] = 'shop/img_l' + 'evel1.png';
                        else {
                            var _0x5f0b12 = this['knife'];
                            0x0 == this['page_num'] ? this['img_level']['skin'] = 'shop/img_l' + 'evel1.png' : 0x1 == this['page_num'] ? this['img_level']['skin'] = 'shop/img_l' + 'evel2.png' : 0x2 == this['page_num'] && (this['img_level']['skin'] = 'shop/img_l' + 'evel3.png');
                        }
                        -0x1 == this['data_skin']['indexOf'](Number(_0x545276['dataSource']['id'])) ? _0x5f36f1['skin'] = 'shop/img_w' + 'hat.png' : _0x5f36f1['skin'] = this['type'] + '/' + _0x545276['dataSource']['name'] + '.png';
                        if ('food' == this['type']) {
                        } else
                            _0x2db25a['visible'] = _0x23ff13 == _0x5ba717['skin_id'] - 0x1, _0x2db25a['visible'] && (this['curKnife'] = _0x545276), _0x545276['on'](Laya['Event']['CLICK'], this, this['onBtnBox'], [_0x545276]);
                    }, _0x5ba717['prototype']['onBtnBox'] = function (_0x374cff, _0x2a00b5) {
                        if ('food' == this['type']) {
                        } else {
                            if (-0x1 == this['data_skin']['indexOf'](Number(_0x374cff['dataSource']['id'])))
                                return;
                            this['curKnife'] && (this['curKnife']['getChildBy' + 'Name']('select')['visible'] = ![]), _0x374cff['getChildBy' + 'Name']('select')['visible'] = !![], this['curKnife'] = _0x374cff, _0x25df8d['default']['app']['mWX']['setUserVal' + 'ue']('knife_skin' + '_id', '' + _0x374cff['dataSource']['id']);
                        }
                    }, _0x5ba717['prototype']['getNewSkin'] = function () {
                        var _0x4bee13 = this;
                        if (this['data_skin']['length'] == this['list']['array']['length'])
                            return platform['getInstanc' + 'e']()['prompt']('Item\x20Alrea' + 'dy\x20Owned'), '';
                        if (Number(this['txt_gold']['text']) >= Number(this['unlockNum']['text'])) {
                            if ('food' == this['type']) {
                                var _0xc23841 = this['data_skin'][this['data_skin']['length'] - 0x1];
                                this['data_skin'][this['data_skin']['length']] = _0xc23841 + 0x1, _0x5ba717['skin_id'] = _0xc23841, _0x25df8d['default']['app']['mWX']['setUserVal' + 'ue']('food_skin_' + 'id', '' + _0x5ba717['skin_id']), _0x25df8d['default']['app']['mWX']['setUserVal' + 'ue']('food_skin', JSON['stringify'](this['data_skin'])), this['list']['refresh'](), this['list']['scrollTo'](_0x5ba717['skin_id']);
                            } else {
                                var _0x2009c1 = [], _0x341352;
                                for (let _0x4be7aa = 0x0; _0x4be7aa < this['list']['array']['length']; _0x4be7aa++) {
                                    _0x341352 = this['list']['array'][_0x4be7aa]['id'], this['data_skin']['indexOf'](Number(_0x341352)) == -0x1 && _0x2009c1['push'](_0x341352);
                                }
                                if (0x0 == _0x2009c1['length'])
                                    return;
                                var _0x251ef9 = Math['floor'](Math['random']() * _0x2009c1['length']);
                                this['data_skin'][this['data_skin']['length']] = Number(_0x2009c1[_0x251ef9]), _0x5ba717['skin_id'] = Number(_0x2009c1[_0x251ef9]), _0x25df8d['default']['app']['mWX']['setUserVal' + 'ue']('knife_skin' + '_id', '' + _0x5ba717['skin_id']), (_0x25df8d['default']['app']['mWX']['setUserVal' + 'ue']('knife_skin', JSON['stringify'](this['data_skin'])), _0x4bee13['data_skin'] = JSON['parse'](_0x25df8d['default']['app']['mWX']['getUserDat' + 'aByKey']('knife_skin'))), this['list']['refresh'](), this['list']['scrollTo'](_0x5ba717['skin_id']);
                            }
                            this['data_skin']['length'] == this['list']['length'] && (this['btn_unlock']['visible'] = ![], this['btn_gold']['x'] = 0xd1);
                            var _0x5c1d8d = Number(this['txt_gold']['text']) - Number(this['unlockNum']['text']);
                            _0x25df8d['default']['app']['mWX']['setUserVal' + 'ue']('gold', '' + _0x5c1d8d), this['txt_gold']['text'] = '' + _0x5c1d8d;
                        } else
                            platform['getInstanc' + 'e']()['prompt']('Coin\x20is\x20no' + 't\x20enough\x20');
                        ;
                    }, _0x5ba717['prototype']['changeSkin'] = function (_0x4a5b4a) {
                        var _0x832975 = this;
                        if (_0x5ba717['skin_id'] != _0x4a5b4a) {
                            var _0x17322f = this['list']['getCell'](_0x4a5b4a), _0x201af1, _0x2cc098 = _0x17322f && _0x17322f['getChildBy' + 'Name']('select');
                            _0x2cc098 && (_0x201af1 = _0x17322f['getChildBy' + 'Name']('icon'), _0x2cc098['visible'] = !![]);
                            let _0x4b114e = this['list']['getCell'](_0x5ba717['skin_id']);
                            _0x4b114e && (_0x4b114e['getChildBy' + 'Name']('select')['visible'] = !0x1), _0x201af1 && (_0x201af1['skin'] = this['type'] + '/' + _0xcb0096[_0x4a5b4a]['name'] + '.png');
                        }
                    }, _0x5ba717['prototype']['updateMass' + 'age'] = function (_0x13f0c6) {
                        var _0x41a3df = Laya['loader']['getRes']('res/shop.j' + 'son');
                        this['food'] = _0x41a3df['food'], this['knife'] = _0x41a3df['knife'];
                    }, _0x5ba717['prototype']['onBtn'] = function (_0x1ed935) {
                        if (this['page_num'] = this['page_num'] + _0x1ed935, this['page_num'] < 0x0 && (this['page_num'] = 0x0), 'food' == this['type'])
                            this['list']['array'] = this['food'], _0x1898aa = this['food']['length'] / 0x9;
                        else {
                            this['list']['array'] = this['knife'];
                            var _0x1898aa = this['knife']['length'] / 0x9;
                        }
                        this['page_num'] >= _0x1898aa && (this['page_num'] = _0x1898aa - 0x1);
                    }, _0x5ba717['prototype']['onGold'] = function () {
                        platform['getInstanc' + 'e']()['showReward'](() => {
                            this['txt_gold']['text'] = (Number(this['txt_gold']['text']) + 0x96)['toString'](), _0x25df8d['default']['app']['mWX']['setUserVal' + 'ue']('gold', this['txt_gold']['text']);
                        });
                    }, _0x5ba717['prototype']['onClose'] = function () {
                        'food' != this['type'] && this['event'](_0x5ba717['CHANGESKIN']), _0x25df8d['default']['app']['shopView']['removeSelf'](), _0x25df8d['default']['app']['shopView']['destroy'](), _0x25df8d['default']['app']['shopView'] = null;
                    }, _0x5ba717['skin_id'] = 0x0, _0x5ba717['CHANGESKIN'] = 'CHANGESKIN', _0x5ba717;
                }(_0x57186c['ui']['page']['ShopViewUI']);
            _0x436ce6['default'] = _0x14a62e;
        },
        {
            '../Main': 0xe,
            '../util/ADUtil': 0x30,
            '../util/ShareUtil': 0x34,
            './../ui/layaMaxUI': 0x2f,
            './SoundPlayMgr': 0x25
        }
    ],
    0x25: [
        function (_0x169a08, _0x7888e0, _0x48e1d3) {
            'use strict';
            Object['defineProp' + 'erty'](_0x48e1d3, '__esModule', { 'value': !0x0 });
            var _0x3f64db = _0x169a08('../Main'), _0x646883 = function () {
                    function _0x19fde8() {
                        this['resUrl'] = '', this['soundUrl'] = '', this['mp3'] = '.mp3', this['_musicVolu' + 'me'] = 0x1, this['_soundVolu' + 'me'] = 0x1, this['_soundMute' + 'd'] = !0x1, this['_canPlayBa' + 'llHit'] = !0x0, this['_canPlayBo' + 'wlHit'] = !0x0, this['_isPlaying' + 'Stick'] = !0x1, Laya['Browser']['onMiniGame'] && (this['_wx'] = Laya['Browser']['window']['wx']), this['stickPlayT' + 'imeout']();
                    }
                    return Object['defineProp' + 'erty'](_0x19fde8, 'instance', {
                        'get': function () {
                            return null == this['_instance'] && (this['_instance'] = new _0x19fde8()), this['_instance'];
                        },
                        'enumerable': !0x0,
                        'configurable': !0x0
                    }), _0x19fde8['prototype']['closeVoice'] = function () {
                        this['_soundMute' + 'd'] = !0x0, this['stopSound'](this['resUrl'] + 'bgm1.mp3');
                    }, _0x19fde8['prototype']['openVoice'] = function () {
                        this['_soundMute' + 'd'] = !0x1, this['playBgMusi' + 'c']();
                    }, _0x19fde8['prototype']['getUrl'] = function (_0x283baf) {
                        return _0x283baf;
                    }, _0x19fde8['prototype']['stopSound'] = function (_0x2e3d5e) {
                        Laya['SoundManag' + 'er']['stopSound'](this['getUrl'](_0x2e3d5e));
                    }, _0x19fde8['prototype']['playSound'] = function (_0x15feb4, _0x37f8c8) {
                        0x0 == this['_soundMute' + 'd'] && Laya['SoundManag' + 'er']['playSound'](_0x15feb4, _0x37f8c8);
                    }, _0x19fde8['prototype']['playBgMusi' + 'c'] = function (_0x5b03ac) {
                        void 0x0 === _0x5b03ac && (_0x5b03ac = 0x1), this['_soundMute' + 'd'] || Laya['SoundManag' + 'er']['playMusic'](this['getUrl'](this['resUrl'] + 'bgm' + _0x5b03ac + '.mp3'), 0x0);
                    }, _0x19fde8['prototype']['playGSound'] = function (_0x3f2285) {
                        this['playSound'](this['soundUrl'] + _0x3f2285 + this['mp3']);
                    }, _0x19fde8['prototype']['stopAll'] = function () {
                        Laya['SoundManag' + 'er']['stopAll']();
                    }, _0x19fde8['prototype']['playClick'] = function () {
                        this['playGSound']('ui_button_' + 'click');
                    }, _0x19fde8['prototype']['playBack'] = function () {
                        this['playGSound']('ui_back');
                    }, _0x19fde8['prototype']['playPause'] = function () {
                        this['playGSound']('ui_pause');
                    }, _0x19fde8['prototype']['playStart'] = function () {
                        this['playGSound']('ui_start');
                    }, _0x19fde8['prototype']['playBallHi' + 't'] = function () {
                        this['_canPlayBa' + 'llHit'] && (this['_canPlayBa' + 'llHit'] = !0x1, Laya['timer']['once'](0x3e8, this, function () {
                            this['_canPlayBa' + 'llHit'] = !0x0;
                        }));
                    }, _0x19fde8['prototype']['playTimeUp'] = function () {
                        this['playGSound']('times_up');
                    }, _0x19fde8['prototype']['playBowlHi' + 't'] = function () {
                        _0x19fde8['is_play'] && (Laya['timer']['once'](0xc8, this, function () {
                            _0x19fde8['is_play'] = !0x1;
                        }), this['playGSound']('glass_hit_' + 'intensity_' + '2_01'));
                    }, _0x19fde8['prototype']['playShapeC' + 'lick'] = function () {
                        this['playGSound']('Pop'), this['_wx'] && this['_wx']['vibrateSho' + 'rt']();
                    }, _0x19fde8['prototype']['playStick'] = function () {
                        if (!this['_isPlaying' + 'Stick']) {
                            this['_isPlaying' + 'Stick'] = !0x0;
                            var _0x7fbc4e = this['soundUrl'] + 'ui_pause' + this['mp3'];
                            Laya['SoundManag' + 'er']['playSound'](this['getUrl'](_0x7fbc4e), 0x1, Laya['Handler']['create'](this, function () {
                                this['_isPlaying' + 'Stick'] = !0x1;
                            })), Laya['SoundManag' + 'er']['setSoundVo' + 'lume'](0.5, this['getUrl'](_0x7fbc4e));
                        }
                    }, _0x19fde8['prototype']['stickPlayT' + 'imeout'] = function () {
                        Laya['timer']['loop'](0xbb8, this, function () {
                            this['_isPlaying' + 'Stick'] = !0x1;
                        });
                    }, _0x19fde8['MUSIC_VOLU' + 'ME'] = 'MUSIC_VOLU' + 'ME', _0x19fde8['SOUND_VOLU' + 'ME'] = 'SOUND_VOLU' + 'ME', _0x19fde8['is_play'] = !0x1, _0x19fde8;
                }();
            _0x48e1d3['SoundPlayM' + 'gr'] = _0x646883;
        },
        { '../Main': 0xe }
    ],
    0x26: [
        function (_0x570f78, _0x13e100, _0xdd7c6b) {
            'use strict';
            Object['defineProp' + 'erty'](_0xdd7c6b, '__esModule', { 'value': !0x0 });
            var _0x404940 = _0x570f78('./gameObje' + 'ct/Food'), _0x341f66 = _0x570f78('./gameObje' + 'ct/BoardBa' + 'd'), _0xfc23f9 = _0x570f78('./gameObje' + 'ct/BoardDi' + 'e'), _0x3ccb1e = _0x570f78('./gameObje' + 'ct/BoardSu' + 'ccess'), _0x376138 = _0x570f78('./StartVie' + 'w'), _0x1328da = _0x570f78('../Main'), _0x512068 = function (_0x4c234f) {
                    function _0x478fc9() {
                        var _0x187e4f = _0x4c234f['call'](this) || this;
                        return _0x187e4f['intType'] = 0x3e8, _0x187e4f['numType'] = 0x3e8, _0x187e4f['strType'] = 'hello\x20laya', _0x187e4f['boolType'] = !0x0, _0x187e4f['CreateObj'] = [], _0x187e4f['CreateInde' + 'x'] = 0x0, _0x187e4f;
                    }
                    return __extends(_0x478fc9, _0x4c234f), Object['defineProp' + 'erty'](_0x478fc9, 'instance', {
                        'get': function () {
                            return null == this['_instance'] && (this['_instance'] = new _0x478fc9()), this['_instance'];
                        },
                        'enumerable': !0x0,
                        'configurable': !0x0
                    }), _0x478fc9['prototype']['onAwake'] = function () {
                    }, _0x478fc9['prototype']['createGame' + 'Object'] = function (_0x4c3c4f, _0x32bad6) {
                        if (void 0x0 === _0x4c3c4f && (_0x4c3c4f = 0x0), void 0x0 === _0x32bad6 && (_0x32bad6 = 0x6), 0x0 == this['CreateObj']['length']) {
                            if (window['wx'])
                                _0x36ccfc = Laya['loader']['getRes'](_0x1328da['default']['app']['URL'] + ('res/level.' + 'json'));
                            else
                                var _0x36ccfc = Laya['loader']['getRes']('res/level.' + 'json');
                            this['CreateObj'] = _0x36ccfc['level1'];
                        }
                        this['CreateObj'][this['CreateInde' + 'x']] || (this['CreateInde' + 'x'] = 0x0);
                        var _0x57effa = this['CreateObj'][this['CreateInde' + 'x']]['id'], _0x274f38 = this['CreateObj'][this['CreateInde' + 'x']]['type'];
                        this['CreateInde' + 'x']++;
                        var _0x256da7 = Laya['loader']['getRes']('Scenes/' + _0x57effa + '.lh'), _0x1e626a = Laya['Sprite3D']['instantiat' + 'e'](_0x256da7);
                        switch (_0x274f38) {
                        case 0x1:
                            _0x1e626a['addCompone' + 'nt'](_0x404940['default']);
                            break;
                        case 0x2:
                            _0x1e626a['addCompone' + 'nt'](_0x341f66['default']);
                            break;
                        case 0x3:
                            _0x1e626a['addCompone' + 'nt'](_0xfc23f9['default']);
                            break;
                        case 0x63:
                            _0x1e626a['addCompone' + 'nt'](_0x3ccb1e['default']);
                            break;
                        default:
                            _0x1e626a['addCompone' + 'nt'](_0x404940['default']);
                        }
                        _0x1e626a['transform']['position'] = Laya['Vector3']['_ZERO'], _0x1e626a['transform']['localPosit' + 'ionZ'] = _0x4c3c4f + _0x32bad6 + 0.5, _0x376138['default']['app']['ObjCreatPo' + 's']['addChild'](_0x1e626a);
                    }, _0x478fc9['prototype']['onEnable'] = function () {
                    }, _0x478fc9['prototype']['onDisable'] = function () {
                    }, _0x478fc9['prototype']['sceneClear'] = function () {
                        _0x376138['default']['app']['ObjCreatPo' + 's']['destroyChi' + 'ldren'](), this['CreateInde' + 'x'] = 0x0;
                    }, _0x478fc9;
                }(Laya['Script']);
            _0xdd7c6b['default'] = _0x512068;
        },
        {
            '../Main': 0xe,
            './StartView': 0x27,
            './gameObject/BoardBad': 0x29,
            './gameObject/BoardDie': 0x2a,
            './gameObject/BoardSuccess': 0x2b,
            './gameObject/Food': 0x2c
        }
    ],
    0x27: [
        function (_0x60cd0, _0x22cbdc, _0x322bc0) {
            'use strict';
            Object['defineProp' + 'erty'](_0x322bc0, '__esModule', { 'value': !0x0 });
            var _0x34679d = _0x60cd0('./../ui/la' + 'yaMaxUI'), _0x54588b = _0x60cd0('../Main'), _0x4bc4df = _0x60cd0('./StartCon' + 'trol'), _0x3eaaa1 = Laya['Event'], _0x439e7b = _0x60cd0('./ShopView'), _0xba4f6d = _0x60cd0('./SoundPla' + 'yMgr'), _0x4baf32 = _0x60cd0('./MyLikeVi' + 'ew2'), _0x4c096c = _0x60cd0('./GameUI'), _0x4c86a6 = _0x60cd0('./GetKnife' + 'Dialog'), _0x4a06e7 = function (_0x57381c) {
                    function _0x3c7943() {
                        var _0x1d1af7 = _0x57381c['call'](this) || this;
                        _0x1d1af7['intType'] = 0x3e8, _0x1d1af7['numType'] = 0x3e8, _0x1d1af7['strType'] = 'hello\x20laya', _0x1d1af7['boolType'] = !0x0, _0x1d1af7['scene3D'] = null, _0x1d1af7['isStart'] = !0x1, _0x1d1af7['mMyLike'] = null, _0x1d1af7['isFirstToG' + 'ame'] = 0x0, _0x3c7943['app'] = _0x1d1af7, _0x1d1af7['height'] = Laya['stage']['height'];
                        if (_0x3c7943['first'])
                            _0x3c7943['first'] = !0x1, _0x1d1af7['isFirstToG' + 'ame'] = 0x1, _0x1d1af7['ScenesLoad' + 'ed']();
                        else
                            _0x1d1af7['isFirstToG' + 'ame'] = 0x2, _0x1d1af7['ScenesLoad' + 'ed']();
                        return _0x1d1af7['btn_knife']['on'](Laya['Event']['CLICK'], _0x1d1af7, _0x1d1af7['onShop'], ['knife']), _0x1d1af7['btn_knife']['on'](_0x3eaaa1['MOUSE_DOWN'], _0x54588b['default']['app'], _0x54588b['default']['app']['onBtnMouse' + 'Down'], [_0x1d1af7['btn_knife']]), _0x1d1af7['btn_knife']['on'](_0x3eaaa1['MOUSE_OUT'], _0x54588b['default']['app'], _0x54588b['default']['app']['onBtnMouse' + 'Out'], [_0x1d1af7['btn_knife']]), _0x1d1af7['btn_knife']['on'](_0x3eaaa1['MOUSE_UP'], _0x54588b['default']['app'], _0x54588b['default']['app']['onBtnMouse' + 'Out'], [_0x1d1af7['btn_knife']]), _0x1d1af7['yad']['on'](Laya['Event']['MOUSE_DOWN'], this, () => {
                            platform['getInstanc' + 'e']()['navigate']('HOME', 'LOGO');
                        }), _0x54588b['default']['app']['Level_num'] = _0x54588b['default']['app']['mWX']['getUserDat' + 'aByKey']('Level_num'), _0x1d1af7;
                    }
                    return __extends(_0x3c7943, _0x57381c), _0x3c7943['prototype']['onEnable'] = function () {
                    }, _0x3c7943['prototype']['onDisable'] = function () {
                    }, _0x3c7943['prototype']['ScenesLoad' + 'ed'] = function () {
                        this['btn_start']['on'](Laya['Event']['CLICK'], this, this['onStart']), this['visible'] = !0x0, this['zOrder'] = 0x3e7, this['isStart'] = !0x0, Laya['Scene']['open']('test/TestS' + 'cene.scene', !0x1);
                    }, _0x3c7943['prototype']['addObj'] = function () {
                        _0x4bc4df['default']['instance']['createGame' + 'Object'](0x0);
                    }, _0x3c7943['prototype']['onStart'] = function () {
                        platform['getInstanc' + 'e']()['showInters' + 'titial'](() => {
                            !_0x54588b['default']['app']['loadingSho' + 'w'] && (_0xba4f6d['SoundPlayM' + 'gr']['instance']['playGSound']('sound/btn_' + 'click'), this['clear'](), (_0x54588b['default']['app']['mWX']['indexBpTot' + 'le']('start_butt' + 'on_click', {}), _0x3c7943['app']['isStart'] = !0x1, _0x4c096c['default']['app']['showV'](!0x0), 0x0 != _0x54588b['default']['app']['mWX']['getOnOffSt' + 'artReward']() && (_0x54588b['default']['app']['Level_num'] - _0x54588b['default']['app']['mWX']['getOnOffSt' + 'artReward3']()) % _0x54588b['default']['app']['mWX']['getOnOffSt' + 'artReward2']() == 0x0 && (null == _0x54588b['default']['app']['getKnifeDi' + 'alog'] ? (_0x54588b['default']['app']['getKnifeDi' + 'alog'] = new _0x4c86a6['default'](), Laya['stage']['addChild'](_0x54588b['default']['app']['getKnifeDi' + 'alog']), _0x54588b['default']['app']['getKnifeDi' + 'alog']['onShow'](!0x0, _0x4c86a6['default']['START_REWA' + 'RD'])) : _0x54588b['default']['app']['getKnifeDi' + 'alog']['onShow'](!0x0, _0x4c86a6['default']['START_REWA' + 'RD']))));
                        });
                    }, _0x3c7943['prototype']['clear'] = function () {
                        this['visible'] = !0x1, console['log']('likeLoopfa' + 'lse1'), _0x54588b['default']['app']['mWX']['likeLoop'] = !0x1;
                    }, _0x3c7943['prototype']['onShop'] = function (_0x215296) {
                        _0xba4f6d['SoundPlayM' + 'gr']['instance']['playGSound']('sound/btn_' + 'click'), null == _0x54588b['default']['app']['shopView'] && (_0x54588b['default']['app']['shopView'] = new _0x439e7b['default'](_0x215296), Laya['stage']['addChild'](_0x54588b['default']['app']['shopView']), _0x54588b['default']['app']['shopView']['off'](_0x439e7b['default']['CHANGESKIN'], _0x4c096c['default']['app'], _0x4c096c['default']['app']['onSkin']), _0x54588b['default']['app']['shopView']['on'](_0x439e7b['default']['CHANGESKIN'], _0x4c096c['default']['app'], _0x4c096c['default']['app']['onSkin']));
                    }, _0x3c7943['prototype']['onSkin'] = function () {
                        var _0x263ed2 = this;
                        if (0x0 != _0x439e7b['default']['skin_id'] && (_0x439e7b['default']['skin_id'] = Number(_0x54588b['default']['app']['mWX']['getUserDat' + 'aByKey']('knife_skin' + '_id')), 0x0 != _0x439e7b['default']['skin_id'])) {
                            var _0x3029dd = '';
                            if (console['log']('xxx2:', _0x439e7b['default']['skin_id']), 0x0 != _0x439e7b['default']['skin_id']) {
                                0xa == _0x439e7b['default']['skin_id'] ? _0x3029dd = 'knife_0' : 0xb == _0x439e7b['default']['skin_id'] ? _0x3029dd = 'knife_1' : 0xc == _0x439e7b['default']['skin_id'] ? _0x3029dd = 'knife_2' : 0xd == _0x439e7b['default']['skin_id'] ? _0x3029dd = 'knife_3' : 0xe == _0x439e7b['default']['skin_id'] ? _0x3029dd = 'knife_4' : 0xf == _0x439e7b['default']['skin_id'] ? _0x3029dd = 'knife_5' : 0x10 == _0x439e7b['default']['skin_id'] ? _0x3029dd = 'knife_6' : 0x11 == _0x439e7b['default']['skin_id'] ? _0x3029dd = 'knife_7' : 0x12 == _0x439e7b['default']['skin_id'] ? _0x3029dd = 'knife_8' : 0x1 == _0x439e7b['default']['skin_id'] ? _0x3029dd = 'knife_02' : 0x2 == _0x439e7b['default']['skin_id'] ? _0x3029dd = 'Knife_03' : 0x3 == _0x439e7b['default']['skin_id'] ? _0x3029dd = 'knife_04' : 0x4 == _0x439e7b['default']['skin_id'] ? _0x3029dd = 'knife_05' : 0x5 == _0x439e7b['default']['skin_id'] ? _0x3029dd = 'Knifes_06' : 0x6 == _0x439e7b['default']['skin_id'] ? _0x3029dd = 'Knifes_07' : 0x7 == _0x439e7b['default']['skin_id'] ? _0x3029dd = 'Knifes_08' : 0x8 == _0x439e7b['default']['skin_id'] && (_0x3029dd = 'Knifes_09');
                                var _0x1144ac = 'Scenes/' + _0x3029dd + '.lh';
                                Laya['loader']['create'](_0x1144ac, Laya['Handler']['create'](this, function (_0x29c2b4) {
                                    if (_0x29c2b4) {
                                        var _0x5677de = _0x263ed2['player']['getChildBy' + 'Name']('Knife'), _0x5a6e75 = Laya['loader']['getRes'](_0x1144ac);
                                        _0x5677de['meshFilter']['sharedMesh'] = _0x5a6e75['meshFilter']['sharedMesh'];
                                        var _0x24105f = _0x5a6e75['meshRender' + 'er']['material']['clone']();
                                        _0x5677de['meshRender' + 'er']['material'] = _0x24105f;
                                    }
                                }));
                            }
                        }
                    }, _0x3c7943['prototype']['onBGSkin'] = function () {
                        null != _0x54588b['default']['app']['shopView'] && _0x54588b['default']['app']['shopView']['off'](_0x439e7b['default']['CHANGESKIN'], this, this['onSkin']);
                        var _0x5bd33b = Math['floor'](_0x54588b['default']['app']['Level_num'] % 0x8);
                        0x7 == _0x5bd33b && (_0x5bd33b = 0x2);
                        var _0x5afb25 = _0x54588b['default']['app']['URL'], _0x16e122 = this['scene3D']['getChildBy' + 'Name']('Plane')['meshRender' + 'er']['material'];
                        Laya['Texture2D']['load'](_0x5afb25 + 'bg/' + _0x5bd33b + '.jpg', Laya['Handler']['create'](this, function (_0x291ecf) {
                            _0x16e122['albedoText' + 'ure'] = _0x291ecf;
                        }));
                    }, _0x3c7943['first'] = !0x0, _0x3c7943['data'] = null, _0x3c7943;
                }(_0x34679d['ui']['page']['StartViewU' + 'I']);
            _0x322bc0['default'] = _0x4a06e7;
        },
        {
            '../Main': 0xe,
            './../ui/layaMaxUI': 0x2f,
            './GameUI': 0x1e,
            './GetKnifeDialog': 0x1f,
            './MyLikeView2': 0x22,
            './ShopView': 0x24,
            './SoundPlayMgr': 0x25,
            './StartControl': 0x26
        }
    ],
    0x28: [
        function (_0x530111, _0x361098, _0x2b617a) {
            'use strict';
            Object['defineProp' + 'erty'](_0x2b617a, '__esModule', { 'value': !0x0 });
            var _0x4ca93d = function () {
                function _0x3244a2() {
                    this['length'] = {
                        'Food_01': 5.5,
                        'Food_02': 0x2,
                        'Food_03': 0x3,
                        'Food_04': 0x4,
                        'Food_05': 5.5,
                        'Food_06': 0x2,
                        'Food_07': 5.5,
                        'Food_08': 0x3,
                        'Food_09': 5.5
                    }, _0x3244a2['instance'] = this;
                }
                return _0x3244a2;
            }();
            _0x2b617a['default'] = _0x4ca93d;
        },
        {}
    ],
    0x29: [
        function (_0x11e780, _0x4c9fb5, _0x31e965) {
            'use strict';
            Object['defineProp' + 'erty'](_0x31e965, '__esModule', { 'value': !0x0 });
            var _0x1783d8 = _0x11e780('../GameMan' + 'ager'), _0x471e31 = _0x11e780('./PlayerCt' + 'rl'), _0x3cde1d = _0x11e780('../StartVi' + 'ew'), _0x4b4ab9 = function (_0x5e6a8c) {
                    function _0x53a126() {
                        var _0x32cd00 = _0x5e6a8c['call'](this) || this;
                        return _0x32cd00['intType'] = 0x3e8, _0x32cd00['numType'] = 0x3e8, _0x32cd00['strType'] = 'hello\x20laya', _0x32cd00['boolType'] = !0x0, _0x32cd00['shaked'] = !0x1, _0x32cd00['moveSpeed'] = new Laya['Vector3'](0x0, 0x0, -0.05), _0x32cd00['_speed'] = new Laya['Vector3'](0x0, 0x0, 0x0), _0x32cd00;
                    }
                    return __extends(_0x53a126, _0x5e6a8c), _0x53a126['prototype']['onAwake'] = function () {
                    }, _0x53a126['prototype']['onEnable'] = function () {
                        var _0x45738d = this;
                        this['_owner'] = this['owner'], this['_trans'] = this['_owner']['transform'], _0x1783d8['default']['instance']['isSuccess'] || Laya['timer']['once'](0x3e8, this, function () {
                            _0x1783d8['default']['instance']['createGame' + 'Object'](_0x45738d['_trans']['localPosit' + 'ionZ'], 0x1);
                        }), Laya['timer']['loop'](0xa, this, this['foodMove']);
                    }, _0x53a126['prototype']['onDisable'] = function () {
                        Laya['timer']['clear'](this, this['foodMove']);
                    }, _0x53a126['prototype']['onUpdate'] = function () {
                    }, _0x53a126['prototype']['foodMove'] = function () {
                        _0x1783d8['default']['instance'] && (_0x1783d8['default']['instance']['Die'] && (_0x1783d8['default']['instance']['speed'] = 0x0), Laya['Vector3']['scale'](this['moveSpeed'], _0x1783d8['default']['instance']['speed'], this['_speed'])), _0x3cde1d['default']['app']['isStart'] && Laya['Vector3']['scale'](this['moveSpeed'], 0x1, this['_speed']), this['_trans']['translate'](this['_speed']), this['_trans']['position']['z'] <= -0x4 && (window['wx'] && wx['triggerGC'](), this['_owner']['removeSelf'](), this['_owner']['destroyChi' + 'ldren'](), this['_owner']['destroy'](!0x0)), _0x3cde1d['default']['app']['isStart'] || this['_trans']['position']['z'] >= 1.7 && this['_trans']['position']['z'] <= 2.5 && _0x1783d8['default']['instance']['Cut'] && (this['shaked'] || (_0x471e31['default']['instance']['Shake'](), this['shaked'] = !0x0));
                    }, _0x53a126;
                }(Laya['Script3D']);
            _0x31e965['default'] = _0x4b4ab9;
        },
        {
            '../GameManager': 0x1d,
            '../StartView': 0x27,
            './PlayerCtrl': 0x2d
        }
    ],
    0x2a: [
        function (_0xd4aebf, _0x1ce67c, _0x3fba86) {
            'use strict';
            Object['defineProp' + 'erty'](_0x3fba86, '__esModule', { 'value': !0x0 });
            var _0x9510c3 = _0xd4aebf('../GameMan' + 'ager'), _0x3ff581 = _0xd4aebf('./PlayerCt' + 'rl'), _0xc9832f = _0xd4aebf('../StartVi' + 'ew'), _0x461bd6 = _0xd4aebf('../../Main'), _0x33fb4e = function (_0x3e70a7) {
                    function _0x5522da() {
                        var _0x497222 = _0x3e70a7['call'](this) || this;
                        return _0x497222['intType'] = 0x3e8, _0x497222['numType'] = 0x3e8, _0x497222['strType'] = 'hello\x20laya', _0x497222['boolType'] = !0x0, _0x497222['shaked'] = !0x1, _0x497222['moveSpeed'] = new Laya['Vector3'](0x0, 0x0, -0.05), _0x497222['_speed'] = new Laya['Vector3'](0x0, 0x0, 0x0), _0x497222;
                    }
                    return __extends(_0x5522da, _0x3e70a7), _0x5522da['prototype']['onAwake'] = function () {
                    }, _0x5522da['prototype']['onEnable'] = function () {
                        var _0x4f5587 = this;
                        this['_owner'] = this['owner'], this['_trans'] = this['_owner']['transform'], Laya['timer']['once'](0x3e8, this, function () {
                            _0x9510c3['default']['instance']['createGame' + 'Object'](_0x4f5587['_trans']['localPosit' + 'ionZ'], 0x1);
                        }), Laya['timer']['frameLoop'](0x1, this, this['foodMove']);
                    }, _0x5522da['prototype']['onDisable'] = function () {
                        Laya['timer']['clear'](this, this['foodMove']);
                    }, _0x5522da['prototype']['onUpdate'] = function () {
                    }, _0x5522da['prototype']['foodMove'] = function () {
                        _0x9510c3['default']['instance'] && (_0x9510c3['default']['instance']['Die'] && (_0x9510c3['default']['instance']['speed'] = 0x0), Laya['Vector3']['scale'](this['moveSpeed'], _0x9510c3['default']['instance']['speed'], this['_speed'])), _0xc9832f['default']['app']['isStart'] && Laya['Vector3']['scale'](this['moveSpeed'], 0x1, this['_speed']), this['_trans']['translate'](this['_speed']), this['_trans']['position']['z'] <= -0x4 && (window['wx'] && wx['triggerGC'](), this['_owner']['removeSelf'](), this['_owner']['destroyChi' + 'ldren'](), this['_owner']['destroy'](!0x0));
                        if (_0xc9832f['default']['app']['isStar']) {
                        } else
                            this['_trans']['position']['z'] >= 1.75 && this['_trans']['position']['z'] <= 2.55 && (console['log']('i.default.' + 'instance.C' + 'ut\x20' + _0x9510c3['default']['instance']['Cut']), _0x9510c3['default']['instance']['Cut'] && (!this['shaked'] && (console['log']('this.shake' + 'd', this['shaked']), (_0x461bd6['default']['app']['is_success'] = !0x1, _0x3ff581['default']['instance']['PlayerDie'](), console['log']('死了'), this['shaked'] = !0x0))));
                    }, _0x5522da;
                }(Laya['Script3D']);
            _0x3fba86['default'] = _0x33fb4e;
        },
        {
            '../../Main': 0xe,
            '../GameManager': 0x1d,
            '../StartView': 0x27,
            './PlayerCtrl': 0x2d
        }
    ],
    0x2b: [
        function (_0x4cc4b7, _0xa1201d, _0x5bcdc0) {
            'use strict';
            Object['defineProp' + 'erty'](_0x5bcdc0, '__esModule', { 'value': !0x0 });
            var _0x38997e = _0x4cc4b7('../GameMan' + 'ager'), _0x3c6553 = _0x4cc4b7('./PlayerCt' + 'rl'), _0x34a0e3 = function (_0x167575) {
                    function _0x29a3aa() {
                        var _0x2726f9 = _0x167575['call'](this) || this;
                        return _0x2726f9['intType'] = 0x3e8, _0x2726f9['numType'] = 0x3e8, _0x2726f9['strType'] = 'hello\x20laya', _0x2726f9['boolType'] = !0x0, _0x2726f9['shaked'] = !0x1, _0x2726f9['moveSpeed'] = new Laya['Vector3'](0x0, 0x0, -0.05), _0x2726f9['_speed'] = new Laya['Vector3'](0x0, 0x0, 0x0), _0x2726f9;
                    }
                    return __extends(_0x29a3aa, _0x167575), _0x29a3aa['prototype']['onAwake'] = function () {
                        this['_owner'] = this['owner'], this['_trans'] = this['_owner']['transform'], console['log']('ZHENBAN!!!' + '!!!!!!!!!');
                    }, _0x29a3aa['prototype']['onEnable'] = function () {
                    }, _0x29a3aa['prototype']['onDisable'] = function () {
                    }, _0x29a3aa['prototype']['onUpdate'] = function () {
                        this['foodMove']();
                    }, _0x29a3aa['prototype']['foodMove'] = function () {
                        if (_0x38997e['default']['instance'] && Laya['Vector3']['scale'](this['moveSpeed'], _0x38997e['default']['instance']['speed'], this['_speed']), this['_trans']['position']['z'] <= 2.5 && !this['shaked'])
                            return _0x3c6553['default']['instance']['PlayerWin'](), this['shaked'] = !0x0, void console['log']('WINAAAAAAA');
                        this['shaked'] || this['_trans']['translate'](this['moveSpeed']);
                    }, _0x29a3aa;
                }(Laya['Script3D']);
            _0x5bcdc0['default'] = _0x34a0e3;
        },
        {
            '../GameManager': 0x1d,
            './PlayerCtrl': 0x2d
        }
    ],
    0x2c: [
        function (_0x588baf, _0x34a100, _0x23cd67) {
            'use strict';
            Object['defineProp' + 'erty'](_0x23cd67, '__esModule', { 'value': !0x0 });
            var _0x240c82 = _0x588baf('./Slices'), _0x383dc4 = _0x588baf('../GameMan' + 'ager'), _0x379c13 = _0x588baf('../data/fo' + 'odLength'), _0x284329 = _0x588baf('../StartVi' + 'ew'), _0x1937ff = function (_0x5ef655) {
                    function _0x57b4cd() {
                        var _0x5ad556 = _0x5ef655['call'](this) || this;
                        return _0x5ad556['intType'] = 0x3e8, _0x5ad556['numType'] = 0x3e8, _0x5ad556['strType'] = 'hello\x20laya', _0x5ad556['boolType'] = !0x0, _0x5ad556['_slices'] = [], _0x5ad556['created'] = !0x1, _0x5ad556['moveSpeed'] = new Laya['Vector3'](0x0, 0x0, -0.05), _0x5ad556['_speed'] = new Laya['Vector3'](0x0, 0x0, 0x0), _0x5ad556['_seted'] = !0x1, _0x5ad556;
                    }
                    return __extends(_0x57b4cd, _0x5ef655), _0x57b4cd['prototype']['onAwake'] = function () {
                        this['_owner'] = this['owner'], this['_trans'] = this['_owner']['transform'];
                        var _0x375bae = this['_owner']['getChildBy' + 'Name']('Effect');
                        if (_0x375bae)
                            for (var _0x384fb5 = 0x0; _0x384fb5 < _0x375bae['_children']['length']; _0x384fb5++) {
                                var _0x534d8d = _0x375bae['_children'][_0x384fb5]['addCompone' + 'nt'](_0x240c82['default']);
                                this['_slices']['push'](_0x534d8d);
                            }
                    }, _0x57b4cd['prototype']['onEnable'] = function () {
                        Laya['timer']['loop'](0xa, this, this['foodMove']);
                    }, _0x57b4cd['prototype']['onDisable'] = function () {
                        Laya['timer']['clear'](this, this['foodMove']);
                    }, _0x57b4cd['prototype']['onUpdate'] = function () {
                        this['created'] || this['_trans']['localPosit' + 'ionZ'] <= 0xc && (this['created'] = !0x0, _0x383dc4['default']['instance']['createGame' + 'Object'](this['_trans']['localPosit' + 'ionZ'], _0x379c13['default']['instance']['length'][this['_owner']['name']]));
                    }, _0x57b4cd['prototype']['foodMove'] = function () {
                        _0x383dc4['default']['instance'] && (_0x383dc4['default']['instance']['Die'] && (_0x383dc4['default']['instance']['speed'] = 0x0), Laya['Vector3']['scale'](this['moveSpeed'], _0x383dc4['default']['instance']['speed'], this['_speed'])), _0x284329['default']['app']['isStart'] && Laya['Vector3']['scale'](this['moveSpeed'], 0x1, this['_speed']), this['_trans']['translate'](this['_speed']), this['_trans']['position']['z'] <= -0x4 ? (this['_owner']['removeSelf'](), this['_owner']['destroyChi' + 'ldren'](), this['_owner']['destroy'](!0x0)) : this['_trans']['position']['z'] <= 0x3 && this['setEffect']();
                    }, _0x57b4cd['prototype']['setEffect'] = function () {
                        this['_seted'] || (this['_seted'] = !0x0);
                    }, _0x57b4cd;
                }(Laya['Script3D']);
            _0x23cd67['default'] = _0x1937ff;
        },
        {
            '../GameManager': 0x1d,
            '../StartView': 0x27,
            '../data/foodLength': 0x28,
            './Slices': 0x2e
        }
    ],
    0x2d: [
        function (_0x46293c, _0x58a0d8, _0x4ce00b) {
            'use strict';
            Object['defineProp' + 'erty'](_0x4ce00b, '__esModule', { 'value': !0x0 });
            var _0x2f357a = _0x46293c('../GameUI'), _0x5e2478 = _0x46293c('../GameMan' + 'ager'), _0x3e8c77 = _0x46293c('../../Main'), _0x2f1371 = _0x46293c('../ResultV' + 'iew'), _0x21db0a = _0x46293c('../SoundPl' + 'ayMgr'), _0x44e4bf = _0x46293c('../GetKnif' + 'eDialog'), _0x2c00d7 = function (_0xbdd8ca) {
                    function _0x473e2a() {
                        var _0x49d93e = _0xbdd8ca['call'](this) || this;
                        return _0x49d93e['CutSpeed'] = 0x1, _0x49d93e['canPlayAni'] = !0x0, _0x49d93e['impulse'] = new Laya['Vector3'](0x0, 0x0, -0x5), _0x49d93e['isWin'] = !0x1, _0x49d93e['sound_leve' + 'l'] = 0x0, _0x473e2a['instance'] = _0x49d93e, _0x49d93e;
                    }
                    return __extends(_0x473e2a, _0xbdd8ca), _0x473e2a['prototype']['onAwake'] = function () {
                        this['_owner'] = this['owner'], this['PlayerAni'] = this['_owner']['getCompone' + 'nt'](Laya['Animator']), this['shakeWave'] = this['_owner']['getChildBy' + 'Name']('shake');
                    }, _0x473e2a['prototype']['onTriggerE' + 'nter'] = function (_0x32233d) {
                    }, _0x473e2a['prototype']['Cut'] = function () {
                        this['_playAni']('Cut', !0x0), this['canPlayAni'] && (_0x5e2478['default']['instance']['Cut'] = !0x0), Laya['timer']['clear'](this, this['SpeedDown']);
                    }, _0x473e2a['prototype']['StopCut'] = function () {
                        this['_playAni']('Idle'), _0x5e2478['default']['instance']['Cut'] = !0x1, this['PlayerAni']['speed'] = this['CutSpeed'], Laya['timer']['clear'](this, this['SpeedUp']), Laya['timer']['loop'](0x1f4, this, this['SpeedDown']);
                    }, _0x473e2a['prototype']['Shake'] = function () {
                        _0x5e2478['default']['instance']['Cut'] = !0x1, this['_playAni']('Shake', !0x1, !0x0), this['shakeWave']['active'] = !0x0, this['CutSpeed'] = 0x1, this['PlayerAni']['speed'] = 0x7, Laya['timer']['clear'](this, this['SpeedUp']);
                    }, _0x473e2a['prototype']['PlayerDie'] = function () {
                        this['CutSpeed'] = 0x1, this['PlayerAni']['speed'] = 0x1, _0x3e8c77['default']['app']['is_success'] = !0x1, _0x5e2478['default']['instance']['Cut'] = !0x1, this['_playAni']('Die', !0x1, !0x1, function () {
                            null == _0x3e8c77['default']['app']['resultView'] && (_0x3e8c77['default']['app']['resultView'] = new _0x2f1371['default']('Die'), Laya['stage']['addChild'](_0x3e8c77['default']['app']['resultView']));
                        }), _0x5e2478['default']['instance']['Die'] = !0x0, _0x5e2478['default']['instance']['speed'] = 0x0;
                    }, _0x473e2a['prototype']['PlayerWin'] = function () {
                        this['isWin'] = !0x0, this['CutSpeed'] = 0x1, this['PlayerAni']['speed'] = 0x1, _0x3e8c77['default']['app']['is_success'] = !0x1, _0x5e2478['default']['instance']['Cut'] = !0x1, _0x2f357a['default']['app']['txt_score']['text'] = '0', this['_playAni']('Win', !0x1, !0x1, function () {
                            0x0 != _0x3e8c77['default']['app']['mWX']['getOnOffRe' + 'ward2']() ? _0x3e8c77['default']['app']['Level_num'] == _0x3e8c77['default']['app']['mWX']['getOnOffRe' + 'ward1']() ? null == _0x3e8c77['default']['app']['getKnifeDi' + 'alog'] ? (_0x3e8c77['default']['app']['getKnifeDi' + 'alog'] = new _0x44e4bf['default'](), Laya['stage']['addChild'](_0x3e8c77['default']['app']['getKnifeDi' + 'alog']), _0x3e8c77['default']['app']['getKnifeDi' + 'alog']['onShow'](!0x0, _0x44e4bf['default']['END_REWARD'])) : _0x3e8c77['default']['app']['getKnifeDi' + 'alog']['onShow'](!0x0, _0x44e4bf['default']['END_REWARD']) : _0x3e8c77['default']['app']['Level_num'] > _0x3e8c77['default']['app']['mWX']['getOnOffRe' + 'ward1']() && (_0x3e8c77['default']['app']['Level_num'] - _0x3e8c77['default']['app']['mWX']['getOnOffRe' + 'ward1']()) % _0x3e8c77['default']['app']['mWX']['getOnOffRe' + 'ward3']() == 0x0 ? null == _0x3e8c77['default']['app']['getKnifeDi' + 'alog'] ? (_0x3e8c77['default']['app']['getKnifeDi' + 'alog'] = new _0x44e4bf['default'](), Laya['stage']['addChild'](_0x3e8c77['default']['app']['getKnifeDi' + 'alog']), _0x3e8c77['default']['app']['getKnifeDi' + 'alog']['onShow'](!0x0, _0x44e4bf['default']['END_REWARD'])) : _0x3e8c77['default']['app']['getKnifeDi' + 'alog']['onShow'](!0x0, _0x44e4bf['default']['END_REWARD']) : null == _0x3e8c77['default']['app']['resultView'] && (_0x3e8c77['default']['app']['resultView'] = new _0x2f1371['default']('Win'), Laya['stage']['addChild'](_0x3e8c77['default']['app']['resultView'])) : null == _0x3e8c77['default']['app']['resultView'] && (_0x3e8c77['default']['app']['resultView'] = new _0x2f1371['default']('Win'), Laya['stage']['addChild'](_0x3e8c77['default']['app']['resultView']));
                        }), console['log']('play\x20WIN!!' + '!!!!!!!!!!' + '!!!!!'), _0x5e2478['default']['instance']['Die'] = !0x0, _0x5e2478['default']['instance']['showSucces' + 'sEffect'](!0x0);
                    }, _0x473e2a['prototype']['_playAni'] = function (_0x35c4ec, _0x243c05, _0x21ed6c, _0x35950d) {
                        void 0x0 === _0x243c05 && (_0x243c05 = !0x1), void 0x0 === _0x21ed6c && (_0x21ed6c = !0x1), void 0x0 === _0x35950d && (_0x35950d = null), _0x5e2478['default']['instance']['Die'] || (this['canPlayAni'] && !_0x243c05 ? (Laya['timer']['clear'](this, this['checkAniCo' + 'mplete']), this['PlayerAni']['play'](_0x35c4ec, 0x0, 0x0), _0x21ed6c && (this['canPlayAni'] = !0x1, Laya['timer']['frameLoop'](0x10, this, this['checkAniCo' + 'mplete'], [null])), null != _0x35950d && (Laya['timer']['clear'](this, this['checkAniCo' + 'mplete']), Laya['timer']['frameLoop'](0x10, this, this['checkAniCo' + 'mplete'], [_0x35950d]))) : this['canPlayAni'] && _0x243c05 && (Laya['timer']['clear'](this, this['checkAniCo' + 'mplete']), this['PlayerAni']['play'](_0x35c4ec)));
                    }, _0x473e2a['prototype']['checkAniCo' + 'mplete'] = function (_0x1da747) {
                        void 0x0 === _0x1da747 && (_0x1da747 = null), console['log'](this['PlayerAni']['getCurrent' + 'AnimatorPl' + 'ayState']()['normalized' + 'Time']), this['PlayerAni']['getCurrent' + 'AnimatorPl' + 'ayState']()['normalized' + 'Time'] >= 0x1 && (null == _0x1da747 ? (this['PlayerAni']['play']('Idle', 0x0, 0x0), this['canPlayAni'] = !0x0, Laya['timer']['clear'](this, this['checkAniCo' + 'mplete']), this['shakeWave']['active'] = !0x1) : (Laya['timer']['clear'](this, this['checkAniCo' + 'mplete']), _0x1da747(), _0x1da747 = null));
                    }, _0x473e2a['prototype']['SpeedUp'] = function () {
                        this['CutSpeed'] += 0.04, this['CutSpeed'] > 0x5 && (this['CutSpeed'] = 0x5), this['PlayerAni']['speed'] = this['CutSpeed'], this['updateSpee' + 'd'](0x1);
                    }, _0x473e2a['prototype']['SpeedDown'] = function () {
                        this['CutSpeed'] -= 0.6, console['log']('down:', this['CutSpeed']), this['CutSpeed'] <= 0x1 && (this['CutSpeed'] = 0x0, _0x5e2478['default']['instance']['speed'] = 0x1, Laya['timer']['clear'](this, this['SpeedDown'])), this['updateSpee' + 'd'](0x2);
                    }, _0x473e2a['prototype']['ResetKnife'] = function () {
                        this['CutSpeed'] = 0x1, this['PlayerAni']['speed'] = 0x1, _0x5e2478['default']['instance']['speed'] = 0x1, _0x5e2478['default']['instance']['Die'] = !0x1, this['_playAni']('Idle'), _0x5e2478['default']['instance']['Cut'] = !0x1;
                    }, _0x473e2a['prototype']['updateSpee' + 'd'] = function (_0x2502c8) {
                        var _0x29055d = this['CutSpeed'] / 0x5, _0x1b8b99 = Math['floor'](this['CutSpeed'] / 0x1);
                        if (_0x5e2478['default']['instance']['speed'] = 0x1 + _0x29055d, Laya['Tween']['clearAll'](_0x2f357a['default']['app']['progress']), 0x1 == _0x2502c8)
                            Laya['Tween']['to'](_0x2f357a['default']['app']['progress'], { 'width': 0xdb * _0x29055d }, 0xc8);
                        else {
                            if (0x1 == _0x29055d)
                                return void (_0x2f357a['default']['app']['progress']['width'] = 0xdb);
                            0x0 == this['CutSpeed'] && (this['CutSpeed'] = 0x1), Laya['Tween']['to'](_0x2f357a['default']['app']['progress'], { 'width': 0xdb * _0x29055d }, 0x3e8);
                        }
                        this['sound_leve' + 'l'] != _0x1b8b99 && 0x0 != _0x1b8b99 && (this['sound_leve' + 'l'] = _0x1b8b99, _0x21db0a['SoundPlayM' + 'gr']['instance']['playGSound']('sound/spee' + 'd' + _0x1b8b99)), _0x5e2478['default']['instance']['showSpeedL' + 'ine'](_0x1b8b99), _0x2f357a['default']['app']['lvlSpeed']['text'] = 'x\x20' + _0x1b8b99;
                    }, _0x473e2a;
                }(Laya['Script3D']);
            _0x4ce00b['default'] = _0x2c00d7;
        },
        {
            '../../Main': 0xe,
            '../GameManager': 0x1d,
            '../GameUI': 0x1e,
            '../GetKnifeDialog': 0x1f,
            '../ResultView': 0x23,
            '../SoundPlayMgr': 0x25
        }
    ],
    0x2e: [
        function (_0xd0f42f, _0x4116fd, _0x22a04b) {
            'use strict';
            Object['defineProp' + 'erty'](_0x22a04b, '__esModule', { 'value': !0x0 });
            var _0x377f5f = _0xd0f42f('../GameMan' + 'ager'), _0x2cd2d8 = _0xd0f42f('../StartVi' + 'ew'), _0x1d051e = function (_0x338a6d) {
                    function _0x3b7f29() {
                        var _0x3b9489 = _0x338a6d['call'](this) || this;
                        return _0x3b9489['intType'] = 0x3e8, _0x3b9489['numType'] = 0x3e8, _0x3b9489['strType'] = 'hello\x20laya', _0x3b9489['boolType'] = !0x0, _0x3b9489['impulse'] = new Laya['Vector3'](0x3, -0x14, -0x5), _0x3b9489['iscuted'] = !0x1, _0x3b9489;
                    }
                    return __extends(_0x3b7f29, _0x338a6d), _0x3b7f29['prototype']['onAwake'] = function () {
                        this['_owner'] = this['owner'], this['_trans'] = this['_owner']['transform'], this['_rig'] = this['_owner']['getCompone' + 'nt'](Laya['Rigidbody3' + 'D']), this['_efect'] = this['_owner']['getChildBy' + 'Name']('CutEffect'), this['OriPos'] = this['_trans']['localPosit' + 'ion']['clone'](), this['OriRot'] = this['_trans']['rotation']['clone']();
                        var _0x2472be = Math['random']();
                        this['impulse'] = _0x2472be >= 0.5 ? new Laya['Vector3'](0x3, -0xf, -0x8) : new Laya['Vector3'](-0x3, -0xf, -0x8);
                    }, _0x3b7f29['prototype']['onUpdate'] = function () {
                        _0x2cd2d8['default']['app']['isStart'] || this['_trans']['position']['z'] >= 2.3 && this['_trans']['position']['z'] <= 2.4 && _0x377f5f['default']['instance']['Cut'] && !_0x377f5f['default']['instance']['Die'] && this['Cuted']();
                    }, _0x3b7f29['prototype']['Cuted'] = function () {
                        this['iscuted'] || (this['iscuted'] = !0x0, this['_rig']['isKinemati' + 'c'] = !0x1, this['_rig']['applyImpul' + 'se'](this['impulse']), _0x377f5f['default']['instance']['addScore'](), this['_efect']['active'] = !0x0);
                    }, _0x3b7f29['prototype']['onEnable'] = function () {
                    }, _0x3b7f29['prototype']['onDisable'] = function () {
                    }, _0x3b7f29['prototype']['_reset'] = function () {
                        this['_trans']['localPosit' + 'ion'] = this['OriPos']['clone'](), this['_trans']['rotation'] = this['OriRot']['clone'](), this['_rig']['clearForce' + 's'](), this['_rig']['linearVelo' + 'city'] = Laya['Vector3']['_ZERO'], this['_rig']['angularVel' + 'ocity'] = Laya['Vector3']['_ZERO'], this['_rig']['isKinemati' + 'c'] = !0x0, this['iscuted'] = !0x1;
                    }, _0x3b7f29;
                }(Laya['Script3D']);
            _0x22a04b['default'] = _0x1d051e;
        },
        {
            '../GameManager': 0x1d,
            '../StartView': 0x27
        }
    ],
    0x2f: [
        function (_0x152ab4, _0x54ed67, _0x1e3387) {
            'use strict';
            Object['defineProp' + 'erty'](_0x1e3387, '__esModule', { 'value': !0x0 });
            var _0x51a490 = Laya['ClassUtils']['regClass'];
            !function (_0x1010fa) {
                !function (_0x351505) {
                    var _0x3c3fd4 = function (_0x31b961) {
                        function _0x375dfb() {
                            return _0x31b961['call'](this) || this;
                        }
                        return __extends(_0x375dfb, _0x31b961), _0x375dfb['prototype']['createChil' + 'dren'] = function () {
                            _0x31b961['prototype']['createChil' + 'dren']['call'](this), this['createView'](_0x375dfb['uiView']);
                        }, _0x375dfb['uiView'] = {
                            'type': 'View',
                            'props': {
                                'width': 0xb8,
                                'height': 0xb8
                            },
                            'compId': 0x1,
                            'child': [{
                                    'type': 'Image',
                                    'props': {
                                        'width': 0xb8,
                                        'height': 0xb8,
                                        'centerY': 0x0,
                                        'centerX': 0x0
                                    },
                                    'compId': 0x5,
                                    'child': [
                                        {
                                            'type': 'Image',
                                            'props': {
                                                'y': 22.5,
                                                'x': 22.5,
                                                'width': 0x8b,
                                                'var': 'mGameIcon',
                                                'height': 0x8b
                                            },
                                            'compId': 0xa
                                        },
                                        {
                                            'type': 'Image',
                                            'props': {
                                                'y': 0x9e,
                                                'x': 0x4,
                                                'width': 0x90,
                                                'height': 0x28
                                            },
                                            'compId': 0xb,
                                            'child': [{
                                                    'type': 'Label',
                                                    'props': {
                                                        'y': 0x6,
                                                        'x': 0x0,
                                                        'width': 0x90,
                                                        'var': 'mGameName',
                                                        'valign': 'middle',
                                                        'text': '可可加分',
                                                        'height': 0x19,
                                                        'fontSize': 0x14,
                                                        'font': 'SimSun',
                                                        'color': '#FFFFFF',
                                                        'bold': !0x0,
                                                        'align': 'center'
                                                    },
                                                    'compId': 0xc
                                                }]
                                        },
                                        {
                                            'type': 'Image',
                                            'props': { 'skin': 'button/ima' + 'ge_cainixi' + 'huan.png' },
                                            'compId': 0xd
                                        }
                                    ]
                                }],
                            'loadList': ['button/ima' + 'ge_cainixi' + 'huan.png'],
                            'loadList3D': []
                        }, _0x375dfb;
                    }(Laya['View']);
                    _0x351505['myLikeItem' + 'UI'] = _0x3c3fd4, _0x51a490('ui.like.my' + 'LikeItemUI', _0x3c3fd4);
                    var _0x51f860 = function (_0x55a4de) {
                        function _0x8a538d() {
                            return _0x55a4de['call'](this) || this;
                        }
                        return __extends(_0x8a538d, _0x55a4de), _0x8a538d['prototype']['createChil' + 'dren'] = function () {
                            _0x55a4de['prototype']['createChil' + 'dren']['call'](this), this['createView'](_0x8a538d['uiView']);
                        }, _0x8a538d['uiView'] = {
                            'type': 'View',
                            'props': {
                                'width': 0x2ee,
                                'height': 0xc8
                            },
                            'compId': 0x1,
                            'child': [{
                                    'type': 'Image',
                                    'props': {
                                        'y': 0x0,
                                        'x': 0x0,
                                        'width': 0x2ee,
                                        'skin': 'button/lik' + 'e_namebk.p' + 'ng',
                                        'height': 0xc8
                                    },
                                    'compId': 0x2,
                                    'child': [{
                                            'type': 'Panel',
                                            'props': {
                                                'y': 0x0,
                                                'x': 0x0,
                                                'width': 0x2ee,
                                                'var': 'mPanel',
                                                'height': 0xc8
                                            },
                                            'compId': 0x14,
                                            'child': [{
                                                    'type': 'Image',
                                                    'props': {
                                                        'y': 0x0,
                                                        'x': 0x0,
                                                        'width': 0x2ee,
                                                        'var': 'mMoveBack',
                                                        'height': 0xc8
                                                    },
                                                    'compId': 0x16
                                                }]
                                        }]
                                }],
                            'loadList': ['button/lik' + 'e_namebk.p' + 'ng'],
                            'loadList3D': []
                        }, _0x8a538d;
                    }(Laya['View']);
                    _0x351505['myLikeView' + 'UI'] = _0x51f860, _0x51a490('ui.like.my' + 'LikeViewUI', _0x51f860);
                }(_0x1010fa['like'] || (_0x1010fa['like'] = {}));
            }(_0x1e3387['ui'] || (_0x1e3387['ui'] = {})), function (_0x389e98) {
                !function (_0x4a3105) {
                    var _0x2027bc = function (_0x3b869c) {
                        function _0x3e9451() {
                            return _0x3b869c['call'](this) || this;
                        }
                        return __extends(_0x3e9451, _0x3b869c), _0x3e9451['prototype']['createChil' + 'dren'] = function () {
                            _0x3b869c['prototype']['createChil' + 'dren']['call'](this), this['createView'](_0x3e9451['uiView']);
                        }, _0x3e9451['uiView'] = {
                            'type': 'View',
                            'props': {
                                'y': 0x0,
                                'x': 0x0,
                                'width': 0x2ee,
                                'height': 0x536
                            },
                            'compId': 0x2,
                            'child': [
                                {
                                    'type': 'Image',
                                    'props': {
                                        'var': 'bg',
                                        'top': 0x0,
                                        'skin': 'button/bg.' + 'jpg',
                                        'right': 0x0,
                                        'left': 0x0,
                                        'bottom': 0x0
                                    },
                                    'compId': 0x1e
                                },
                                {
                                    'type': 'Label',
                                    'props': {
                                        'var': 'bg2',
                                        'top': 0x0,
                                        'right': 0x0,
                                        'left': 0x0,
                                        'bottom': 0x0,
                                        'bgColor': '#000000',
                                        'alpha': 0.7
                                    },
                                    'compId': 0x39
                                },
                                {
                                    'type': 'Box',
                                    'props': {
                                        'width': 0x321,
                                        'var': 'endReward',
                                        'height': 0x325,
                                        'centerY': 0x0,
                                        'centerX': 0x0
                                    },
                                    'compId': 0x1c,
                                    'child': [
                                        {
                                            'type': 'Image',
                                            'props': {
                                                'y': 400.5,
                                                'x': 400.5,
                                                'var': 'light',
                                                'skin': 'button/lig' + 'ht.png',
                                                'rotation': 0x0,
                                                'anchorY': 0.5,
                                                'anchorX': 0.5
                                            },
                                            'compId': 0x3
                                        },
                                        {
                                            'type': 'Image',
                                            'props': {
                                                'y': 0x12c,
                                                'x': 0x12c,
                                                'width': 0xc8,
                                                'var': 'knifeImg',
                                                'height': 0xc8
                                            },
                                            'compId': 0x19
                                        },
                                        {
                                            'type': 'Sprite',
                                            'props': {
                                                'y': 0x260,
                                                'x': 0xf5,
                                                'var': 'knifebtn',
                                                'texture': 'button/get' + 'btn.png'
                                            },
                                            'compId': 0x6
                                        },
                                        {
                                            'type': 'Image',
                                            'props': {
                                                'y': 0x2ea,
                                                'x': 0x190,
                                                'var': 'knifePass',
                                                'skin': 'button/jum' + 'p.png',
                                                'label': 'label',
                                                'anchorX': 0.5
                                            },
                                            'compId': 0x7
                                        },
                                        {
                                            'type': 'Box',
                                            'props': {
                                                'y': -234.5,
                                                'x': 26.5
                                            },
                                            'compId': 0x9,
                                            'child': [
                                                {
                                                    'type': 'Sprite',
                                                    'props': {
                                                        'y': 0x228,
                                                        'x': 0xab,
                                                        'width': 32.3,
                                                        'texture': 'button/sta' + 'r.png',
                                                        'height': 58.1
                                                    },
                                                    'compId': 0x8
                                                },
                                                {
                                                    'type': 'Sprite',
                                                    'props': {
                                                        'y': 0x1bb,
                                                        'x': 0x101,
                                                        'width': 43.9,
                                                        'texture': 'button/sta' + 'r.png',
                                                        'height': 77.9
                                                    },
                                                    'compId': 0x11
                                                },
                                                {
                                                    'type': 'Sprite',
                                                    'props': {
                                                        'y': 0x27f,
                                                        'x': 0x109,
                                                        'width': 25.3,
                                                        'texture': 'button/sta' + 'r.png',
                                                        'height': 45.3
                                                    },
                                                    'compId': 0x12
                                                },
                                                {
                                                    'type': 'Sprite',
                                                    'props': {
                                                        'y': 0x219,
                                                        'x': 0x1ba,
                                                        'width': 32.3,
                                                        'texture': 'button/sta' + 'r.png',
                                                        'height': 58.1
                                                    },
                                                    'compId': 0x13
                                                },
                                                {
                                                    'type': 'Sprite',
                                                    'props': {
                                                        'y': 0x23f,
                                                        'x': 0x223,
                                                        'width': 39.2,
                                                        'texture': 'button/sta' + 'r.png',
                                                        'height': 70.8
                                                    },
                                                    'compId': 0x14
                                                },
                                                {
                                                    'type': 'Sprite',
                                                    'props': {
                                                        'y': 0x2ed,
                                                        'x': 0x1e2,
                                                        'width': 32.2,
                                                        'texture': 'button/sta' + 'r.png'
                                                    },
                                                    'compId': 0x15
                                                }
                                            ]
                                        },
                                        {
                                            'type': 'Sprite',
                                            'props': {
                                                'y': 0x65,
                                                'x': 0x114,
                                                'texture': 'button/hap' + 'pyget.png'
                                            },
                                            'compId': 0x5
                                        }
                                    ]
                                },
                                {
                                    'type': 'Box',
                                    'props': {
                                        'y': 0x109,
                                        'x': -0x19,
                                        'width': 0x321,
                                        'var': 'startRewar' + 'd',
                                        'height': 0x325,
                                        'centerY': 0x0,
                                        'centerX': 0x0
                                    },
                                    'compId': 0x1f,
                                    'child': [
                                        {
                                            'type': 'Image',
                                            'props': {
                                                'y': 347.5,
                                                'x': 400.5,
                                                'var': 'light2',
                                                'skin': 'button/lig' + 'ht.png',
                                                'rotation': 0x0,
                                                'anchorY': 0.5,
                                                'anchorX': 0.5
                                            },
                                            'compId': 0x20
                                        },
                                        {
                                            'type': 'Image',
                                            'props': {
                                                'y': 0xf7,
                                                'x': 0x12c,
                                                'width': 0xc8,
                                                'var': 'knifeImg2',
                                                'height': 0xc8
                                            },
                                            'compId': 0x21
                                        },
                                        {
                                            'type': 'Sprite',
                                            'props': {
                                                'y': 0x260,
                                                'x': 0xf3,
                                                'var': 'knifebtn2',
                                                'texture': 'button/get' + '3.png'
                                            },
                                            'compId': 0x22
                                        },
                                        {
                                            'type': 'Image',
                                            'props': {
                                                'y': 0x2ea,
                                                'x': 0x190,
                                                'var': 'knifePass2',
                                                'skin': 'button/btn' + '_skip_2.pn' + 'g',
                                                'label': 'label',
                                                'anchorX': 0.5
                                            },
                                            'compId': 0x23
                                        },
                                        {
                                            'type': 'Box',
                                            'props': {
                                                'y': -287.5,
                                                'x': 26.5
                                            },
                                            'compId': 0x24,
                                            'child': [
                                                {
                                                    'type': 'Sprite',
                                                    'props': {
                                                        'y': 0x228,
                                                        'x': 0xab,
                                                        'width': 32.3,
                                                        'texture': 'button/sta' + 'r.png',
                                                        'height': 58.1
                                                    },
                                                    'compId': 0x25
                                                },
                                                {
                                                    'type': 'Sprite',
                                                    'props': {
                                                        'y': 0x1bb,
                                                        'x': 0x101,
                                                        'width': 43.9,
                                                        'texture': 'button/sta' + 'r.png',
                                                        'height': 77.9
                                                    },
                                                    'compId': 0x26
                                                },
                                                {
                                                    'type': 'Sprite',
                                                    'props': {
                                                        'y': 0x27f,
                                                        'x': 0x109,
                                                        'width': 25.3,
                                                        'texture': 'button/sta' + 'r.png',
                                                        'height': 45.3
                                                    },
                                                    'compId': 0x27
                                                },
                                                {
                                                    'type': 'Sprite',
                                                    'props': {
                                                        'y': 0x219,
                                                        'x': 0x1ba,
                                                        'width': 32.3,
                                                        'texture': 'button/sta' + 'r.png',
                                                        'height': 58.1
                                                    },
                                                    'compId': 0x28
                                                },
                                                {
                                                    'type': 'Sprite',
                                                    'props': {
                                                        'y': 0x23f,
                                                        'x': 0x223,
                                                        'width': 39.2,
                                                        'texture': 'button/sta' + 'r.png',
                                                        'height': 70.8
                                                    },
                                                    'compId': 0x29
                                                },
                                                {
                                                    'type': 'Sprite',
                                                    'props': {
                                                        'y': 0x2ed,
                                                        'x': 0x1e2,
                                                        'width': 32.2,
                                                        'texture': 'button/sta' + 'r.png'
                                                    },
                                                    'compId': 0x2a
                                                }
                                            ]
                                        },
                                        {
                                            'type': 'Sprite',
                                            'props': {
                                                'y': -0x25,
                                                'x': 0x8f,
                                                'texture': 'button/tit' + 'le_try.png'
                                            },
                                            'compId': 0x2b
                                        }
                                    ]
                                },
                                {
                                    'type': 'Box',
                                    'props': {
                                        'y': 0x109,
                                        'x': -0x19,
                                        'width': 0x321,
                                        'var': 'boxReward',
                                        'height': 0x325,
                                        'centerY': 0x0,
                                        'centerX': 0x0
                                    },
                                    'compId': 0x3a,
                                    'child': [
                                        {
                                            'type': 'Image',
                                            'props': {
                                                'y': 347.5,
                                                'x': 400.5,
                                                'var': 'light3',
                                                'skin': 'button/lig' + 'ht.png',
                                                'rotation': 0x0,
                                                'anchorY': 0.5,
                                                'anchorX': 0.5
                                            },
                                            'compId': 0x3b
                                        },
                                        {
                                            'type': 'Image',
                                            'props': {
                                                'y': 0xf7,
                                                'x': 0x12c,
                                                'width': 0xc8,
                                                'var': 'knifeImg3',
                                                'height': 0xc8
                                            },
                                            'compId': 0x3c
                                        },
                                        {
                                            'type': 'Sprite',
                                            'props': {
                                                'y': 0x260,
                                                'x': 0x152,
                                                'var': 'knifePass3',
                                                'texture': 'button/btn' + '_get_txt_b' + 'ig.png'
                                            },
                                            'compId': 0x3d
                                        },
                                        {
                                            'type': 'Image',
                                            'props': {
                                                'y': -0x1f4,
                                                'x': 0x19,
                                                'width': 0x2ee,
                                                'var': 'knifebtn3',
                                                'label': 'label',
                                                'height': 0x7d0
                                            },
                                            'compId': 0x3e
                                        },
                                        {
                                            'type': 'Box',
                                            'props': {
                                                'y': -287.5,
                                                'x': 26.5
                                            },
                                            'compId': 0x3f,
                                            'child': [
                                                {
                                                    'type': 'Sprite',
                                                    'props': {
                                                        'y': 0x228,
                                                        'x': 0xab,
                                                        'width': 32.3,
                                                        'texture': 'button/sta' + 'r.png',
                                                        'height': 58.1
                                                    },
                                                    'compId': 0x40
                                                },
                                                {
                                                    'type': 'Sprite',
                                                    'props': {
                                                        'y': 0x1bb,
                                                        'x': 0x101,
                                                        'width': 43.9,
                                                        'texture': 'button/sta' + 'r.png',
                                                        'height': 77.9
                                                    },
                                                    'compId': 0x41
                                                },
                                                {
                                                    'type': 'Sprite',
                                                    'props': {
                                                        'y': 0x27f,
                                                        'x': 0x109,
                                                        'width': 25.3,
                                                        'texture': 'button/sta' + 'r.png',
                                                        'height': 45.3
                                                    },
                                                    'compId': 0x42
                                                },
                                                {
                                                    'type': 'Sprite',
                                                    'props': {
                                                        'y': 0x219,
                                                        'x': 0x1ba,
                                                        'width': 32.3,
                                                        'texture': 'button/sta' + 'r.png',
                                                        'height': 58.1
                                                    },
                                                    'compId': 0x43
                                                },
                                                {
                                                    'type': 'Sprite',
                                                    'props': {
                                                        'y': 0x23f,
                                                        'x': 0x223,
                                                        'width': 39.2,
                                                        'texture': 'button/sta' + 'r.png',
                                                        'height': 70.8
                                                    },
                                                    'compId': 0x44
                                                },
                                                {
                                                    'type': 'Sprite',
                                                    'props': {
                                                        'y': 0x2ed,
                                                        'x': 0x1e2,
                                                        'width': 32.2,
                                                        'texture': 'button/sta' + 'r.png'
                                                    },
                                                    'compId': 0x45
                                                }
                                            ]
                                        },
                                        {
                                            'type': 'Sprite',
                                            'props': {
                                                'y': -0x25,
                                                'x': 0x8f,
                                                'texture': 'button/tit' + 'le_get.png'
                                            },
                                            'compId': 0x46
                                        }
                                    ]
                                }
                            ],
                            'loadList': [
                                'button/bg.' + 'jpg',
                                'button/lig' + 'ht.png',
                                'button/get' + 'btn.png',
                                'button/jum' + 'p.png',
                                'button/sta' + 'r.png',
                                'button/hap' + 'pyget.png',
                                'button/get' + '3.png',
                                'button/btn' + '_skip_2.pn' + 'g',
                                'button/tit' + 'le_try.png',
                                'button/btn' + '_get_txt_b' + 'ig.png',
                                'button/tit' + 'le_get.png'
                            ],
                            'loadList3D': []
                        }, _0x3e9451;
                    }(Laya['View']);
                    _0x4a3105['GetKnifeDi' + 'alogUI'] = _0x2027bc, _0x51a490('ui.page.Ge' + 'tKnifeDial' + 'ogUI', _0x2027bc);
                    var _0x1e3746 = function (_0x2084e1) {
                        function _0x467a42() {
                            return _0x2084e1['call'](this) || this;
                        }
                        return __extends(_0x467a42, _0x2084e1), _0x467a42['prototype']['createChil' + 'dren'] = function () {
                            _0x2084e1['prototype']['createChil' + 'dren']['call'](this), this['createView'](_0x467a42['uiView']);
                        }, _0x467a42['uiView'] = {
                            'type': 'Scene',
                            'props': {
                                'width': 0x2ee,
                                'height': 0x536
                            },
                            'compId': 0x2,
                            'child': [
                                {
                                    'type': 'Sprite',
                                    'props': {
                                        'width': 0x2ee,
                                        'var': 'spr',
                                        'height': 0x536
                                    },
                                    'compId': 0x3,
                                    'child': [{
                                            'type': 'Rect',
                                            'props': {
                                                'width': 0x2ee,
                                                'name': 'rect',
                                                'lineWidth': 0x1,
                                                'height': 0xa28,
                                                'fillColor': '#9a9a9a'
                                            },
                                            'compId': 0x4
                                        }]
                                },
                                {
                                    'type': 'Sprite',
                                    'props': {
                                        'y': 0x0,
                                        'x': 0x0,
                                        'texture': 'bg/7.jpg'
                                    },
                                    'compId': 0x9
                                },
                                {
                                    'type': 'Image',
                                    'props': {
                                        'y': 0xc8,
                                        'var': 'yad',
                                        'centerX': 0x0,
                                        'top': 0x14,
                                        'anchorX': 0.5,
                                        'skin': 'game/yad.p' + 'ng'
                                    },
                                    'compId': 0x1f4
                                },
                                {
                                    'type': 'Image',
                                    'props': {
                                        'centerY': -0x96,
                                        'centerX': 0x0,
                                        'skin': 'start/logo' + '.png'
                                    },
                                    'compId': 0x5
                                },
                                {
                                    'type': 'Image',
                                    'props': {
                                        'width': 0x1fe,
                                        'skin': 'game/img_p' + 'rogressA.p' + 'ng',
                                        'sizeGrid': '19,157,29,' + '128',
                                        'height': 0x3a,
                                        'centerX': 0xc,
                                        'bottom': 0x12c
                                    },
                                    'compId': 0x6,
                                    'child': [
                                        {
                                            'type': 'Image',
                                            'props': {
                                                'y': 0x7,
                                                'x': 0x9,
                                                'width': 0x1ea,
                                                'var': 'pro',
                                                'skin': 'game/img_p' + 'rogress_A.' + 'png',
                                                'sizeGrid': '17,122,17,' + '129',
                                                'height': 0x26
                                            },
                                            'compId': 0x7,
                                            'child': [{
                                                    'type': 'Image',
                                                    'props': {
                                                        'y': -0x1c,
                                                        'skin': 'game/qz.pn' + 'g',
                                                        'right': -0x1e
                                                    },
                                                    'compId': 0x8
                                                }]
                                        },
                                        {
                                            'type': 'Label',
                                            'props': {
                                                'y': -0x15,
                                                'x': 0xff,
                                                'var': 'precent',
                                                'text': '95%',
                                                'fontSize': 0x24,
                                                'font': 'Helvetica',
                                                'color': '#ffffff',
                                                'anchorY': 0.5,
                                                'anchorX': 0.5
                                            },
                                            'compId': 0xa
                                        }
                                    ]
                                }
                            ],
                            'loadList': [
                                'bg/7.jpg',
                                'start/logo' + '.png',
                                'game/img_p' + 'rogressA.p' + 'ng',
                                'game/img_p' + 'rogress_A.' + 'png',
                                'game/qz.pn' + 'g'
                            ],
                            'loadList3D': []
                        }, _0x467a42;
                    }(Laya['Scene']);
                    _0x4a3105['LoadingVie' + 'wUI'] = _0x1e3746, _0x51a490('ui.page.Lo' + 'adingViewU' + 'I', _0x1e3746);
                    var _0xbbbd85 = function (_0x587417) {
                        function _0x505185() {
                            return _0x587417['call'](this) || this;
                        }
                        return __extends(_0x505185, _0x587417), _0x505185['prototype']['createChil' + 'dren'] = function () {
                            _0x587417['prototype']['createChil' + 'dren']['call'](this), this['createView'](_0x505185['uiView']);
                        }, _0x505185['uiView'] = {
                            'type': 'View',
                            'props': {
                                'width': 0xa0,
                                'height': 0xbe
                            },
                            'compId': 0x2,
                            'child': [
                                {
                                    'type': 'Image',
                                    'props': {
                                        'width': 0x8c,
                                        'height': 0xb4,
                                        'centerY': 0x0,
                                        'centerX': 0x0
                                    },
                                    'compId': 0x3,
                                    'child': [
                                        {
                                            'type': 'Image',
                                            'props': {
                                                'y': -0x3,
                                                'x': 0x0,
                                                'width': 0x8c,
                                                'var': 'game_icon',
                                                'height': 0xb9
                                            },
                                            'compId': 0x4
                                        },
                                        {
                                            'type': 'Image',
                                            'props': {
                                                'width': 0x91,
                                                'skin': 'my_like/im' + 'g_kpbg.png',
                                                'sizeGrid': '3,3,3,3',
                                                'height': 0xbe,
                                                'centerY': 0x1,
                                                'centerX': 0x0
                                            },
                                            'compId': 0x5
                                        }
                                    ]
                                },
                                {
                                    'type': 'Label',
                                    'props': {
                                        'y': 0x9d,
                                        'width': 0xb4,
                                        'var': 'game_name',
                                        'valign': 'middle',
                                        'text': '采油小怪',
                                        'strokeColor': '#000000',
                                        'stroke': 0x2,
                                        'height': 0x1c,
                                        'fontSize': 0x16,
                                        'color': '#FFFFFF',
                                        'centerX': 0x0,
                                        'align': 'center'
                                    },
                                    'compId': 0x6
                                }
                            ],
                            'loadList': ['my_like/im' + 'g_kpbg.png'],
                            'loadList3D': []
                        }, _0x505185;
                    }(Laya['View']);
                    _0x4a3105['myLikeItem' + 'UI'] = _0xbbbd85, _0x51a490('ui.page.my' + 'LikeItemUI', _0xbbbd85);
                    var _0x1f385e = function (_0x524c97) {
                        function _0x39327f() {
                            return _0x524c97['call'](this) || this;
                        }
                        return __extends(_0x39327f, _0x524c97), _0x39327f['prototype']['createChil' + 'dren'] = function () {
                            _0x524c97['prototype']['createChil' + 'dren']['call'](this), this['createView'](_0x39327f['uiView']);
                        }, _0x39327f['uiView'] = {
                            'type': 'View',
                            'props': {
                                'width': 0x2ee,
                                'height': 0xd2
                            },
                            'compId': 0x2,
                            'child': [{
                                    'type': 'Image',
                                    'props': {
                                        'x': 0x0,
                                        'width': 0x2ee,
                                        'skin': 'my_like/im' + 'g_bg.png',
                                        'height': 0xd2,
                                        'centerY': 0x0
                                    },
                                    'compId': 0x3,
                                    'child': [{
                                            'type': 'Panel',
                                            'props': {
                                                'y': 0x0,
                                                'x': -0x1,
                                                'width': 0x2ef,
                                                'var': 'mPanel',
                                                'height': 0xd2
                                            },
                                            'compId': 0x4,
                                            'child': [{
                                                    'type': 'Image',
                                                    'props': {
                                                        'y': 0x0,
                                                        'x': 0x0,
                                                        'width': 0x2f0,
                                                        'var': 'mMoveBack',
                                                        'height': 0xd2
                                                    },
                                                    'compId': 0x5
                                                }]
                                        }]
                                }],
                            'loadList': ['my_like/im' + 'g_bg.png'],
                            'loadList3D': []
                        }, _0x39327f;
                    }(Laya['View']);
                    _0x4a3105['myLikeView' + 'UI'] = _0x1f385e, _0x51a490('ui.page.my' + 'LikeViewUI', _0x1f385e);
                    var _0x1831e0 = function (_0xd3e1bc) {
                        function _0x82df36() {
                            return _0xd3e1bc['call'](this) || this;
                        }
                        return __extends(_0x82df36, _0xd3e1bc), _0x82df36['prototype']['createChil' + 'dren'] = function () {
                            _0xd3e1bc['prototype']['createChil' + 'dren']['call'](this), this['createView'](_0x82df36['uiView']);
                        }, _0x82df36['uiView'] = {
                            'type': 'View',
                            'props': {
                                'y': 0x0,
                                'x': 0x0,
                                'width': 0x2ee,
                                'height': 0x536
                            },
                            'compId': 0x2,
                            'child': [{
                                    'type': 'Image',
                                    'props': {
                                        'var': 'bg',
                                        'top': 0x0,
                                        'skin': 'button/bg.' + 'jpg',
                                        'right': 0x0,
                                        'left': 0x0,
                                        'bottom': 0x0
                                    },
                                    'compId': 0x5,
                                    'child': [
                                        {
                                            'type': 'Box',
                                            'props': {
                                                'var': 'endBox',
                                                'top': 0x0,
                                                'right': 0x0,
                                                'left': 0x0,
                                                'bottom': 0x0
                                            },
                                            'compId': 0x65,
                                            'child': [
                                                {
                                                    'type': 'Image',
                                                    'props': {
                                                        'y': 0xc8,
                                                        'var': 'yad',
                                                        'right': 0x14,
                                                        'top': 0x14,
                                                        'anchorX': 0.5,
                                                        'skin': 'game/yad.p' + 'ng'
                                                    },
                                                    'compId': 0x1f4
                                                },
                                                {
                                                    'type': 'Image',
                                                    'props': {
                                                        'y': 0x3c,
                                                        'x': 0x28,
                                                        'var': 'gbbb',
                                                        'skin': 'start/img_' + 'write.png',
                                                        'anchorY': 0.5
                                                    },
                                                    'compId': 0x4c,
                                                    'child': [
                                                        {
                                                            'type': 'Label',
                                                            'props': {
                                                                'y': 0x4,
                                                                'x': 0x2a,
                                                                'width': 0x7c,
                                                                'var': 'txt_gold',
                                                                'text': '99999',
                                                                'height': 0x1e,
                                                                'fontSize': 0x1e,
                                                                'color': '#000000',
                                                                'align': 'center'
                                                            },
                                                            'compId': 0x4d
                                                        },
                                                        {
                                                            'type': 'Image',
                                                            'props': {
                                                                'y': -11.5,
                                                                'x': -0x13,
                                                                'skin': 'start/img_' + 'gold.png'
                                                            },
                                                            'compId': 0x4e
                                                        }
                                                    ]
                                                },
                                                {
                                                    'type': 'Box',
                                                    'props': {
                                                        'y': 0xc8,
                                                        'x': 0xe,
                                                        'width': 0x2d2,
                                                        'var': 'listBox',
                                                        'height': 0x34f
                                                    },
                                                    'compId': 0x66,
                                                    'child': [
                                                        {
                                                            'type': 'Box',
                                                            'props': {
                                                                'y': 0x0,
                                                                'x': 0x105,
                                                                'width': 0xc8,
                                                                'height': 0x32
                                                            },
                                                            'compId': 0x2d,
                                                            'child': [{
                                                                    'type': 'Image',
                                                                    'props': {
                                                                        'y': 0x2,
                                                                        'x': 0x64,
                                                                        'var': 'title',
                                                                        'skin': 'button/fai' + 'l.png',
                                                                        'centerX': 0x0,
                                                                        'bottom': 0x0,
                                                                        'anchorX': 0.5
                                                                    },
                                                                    'compId': 0x7
                                                                }]
                                                        },
                                                        {
                                                            'type': 'Button',
                                                            'props': {
                                                                'y': 0x338,
                                                                'x': 0x16d,
                                                                'width': 0x88,
                                                                'var': 'btn_next',
                                                                'stateNum': 0x1,
                                                                'skin': 'button/nex' + 't.png',
                                                                'height': 0x2c,
                                                                'anchorY': 0.5,
                                                                'anchorX': 0.5
                                                            },
                                                            'compId': 0x4b
                                                        },
                                                        {
                                                            'type': 'List',
                                                            'props': {
                                                                'y': 0x4b,
                                                                'width': 0x2bc,
                                                                'height': 0x2aa,
                                                                'centerX': 0x0,
                                                                'var': 'gameList',
                                                                'spaceY': 0x14,
                                                                'spaceX': 0x5,
                                                                'repeatY': 0x3,
                                                                'repeatX': 0x3
                                                            },
                                                            'compId': 0x5a,
                                                            'child': [{
                                                                    'type': 'Box',
                                                                    'props': {
                                                                        'width': 0xe6,
                                                                        'renderType': 'render',
                                                                        'height': 0xaa
                                                                    },
                                                                    'compId': 0x59,
                                                                    'child': [
                                                                        {
                                                                            'type': 'Image',
                                                                            'props': {
                                                                                'y': 0x5,
                                                                                'x': 0xf,
                                                                                'width': 0xc6,
                                                                                'name': 'thumb',
                                                                                'height': 148.5
                                                                            },
                                                                            'compId': 0x58
                                                                        },
                                                                        {
                                                                            'type': 'Image',
                                                                            'props': {
                                                                                'x': 0x0,
                                                                                'height': 0xaa,
                                                                                'skin': 'button/res' + 'ult_image_' + 'bg_3.png'
                                                                            },
                                                                            'compId': 0x5b
                                                                        }
                                                                    ]
                                                                }]
                                                        },
                                                        {
                                                            'type': 'Image',
                                                            'props': {
                                                                'y': 0x338,
                                                                'x': 0x16d,
                                                                'var': 'btn_again',
                                                                'skin': 'button/aga' + 'in.png',
                                                                'anchorY': 0.5,
                                                                'anchorX': 0.5
                                                            },
                                                            'compId': 0x5d
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            'type': 'Box',
                                            'props': {
                                                'y': 0x1aa,
                                                'x': 0xda,
                                                'var': 'reviveBox'
                                            },
                                            'compId': 0x63,
                                            'child': [
                                                {
                                                    'type': 'Button',
                                                    'props': {
                                                        'y': 0x1ce,
                                                        'var': 'btn_revive',
                                                        'stateNum': 0x1,
                                                        'skin': 'button/fuh' + 'uo1.png'
                                                    },
                                                    'compId': 0x2c
                                                },
                                                {
                                                    'type': 'Image',
                                                    'props': {
                                                        'y': 0x24f,
                                                        'x': 0x62,
                                                        'var': 'btn_skip',
                                                        'skin': 'button/jum' + 'p.png',
                                                        'label': 'label'
                                                    },
                                                    'compId': 0x5e
                                                },
                                                {
                                                    'type': 'Image',
                                                    'props': {
                                                        'y': 0x8e,
                                                        'x': 0x2d,
                                                        'skin': 'button/jid' + 'utiao2.png'
                                                    },
                                                    'compId': 0x5f,
                                                    'child': [
                                                        {
                                                            'type': 'Sprite',
                                                            'props': { 'texture': 'button/jin' + 'dutiao1.pn' + 'g' },
                                                            'compId': 0x60
                                                        },
                                                        {
                                                            'type': 'Image',
                                                            'props': {
                                                                'y': 0x6f,
                                                                'x': 0x6f,
                                                                'var': 'daojishi',
                                                                'skin': 'button/djs' + '1.png',
                                                                'anchorY': 0.5,
                                                                'anchorX': 0.5
                                                            },
                                                            'compId': 0x62
                                                        }
                                                    ]
                                                },
                                                {
                                                    'type': 'Sprite',
                                                    'props': {
                                                        'x': 0x2a,
                                                        'texture': 'button/isf' + 'uhuo.png'
                                                    },
                                                    'compId': 0x61
                                                }
                                            ]
                                        }
                                    ]
                                }],
                            'loadList': [
                                'button/bg.' + 'jpg',
                                'start/img_' + 'write.png',
                                'start/img_' + 'gold.png',
                                'button/fai' + 'l.png',
                                'button/nex' + 't.png',
                                'button/res' + 'ult_image_' + 'bg_3.png',
                                'button/aga' + 'in.png',
                                'button/fuh' + 'uo1.png',
                                'button/jum' + 'p.png',
                                'button/jid' + 'utiao2.png',
                                'button/jin' + 'dutiao1.pn' + 'g',
                                'button/djs' + '1.png',
                                'button/isf' + 'uhuo.png'
                            ],
                            'loadList3D': []
                        }, _0x82df36;
                    }(Laya['View']);
                    _0x4a3105['ResultView' + 'UI'] = _0x1831e0, _0x51a490('ui.page.Re' + 'sultViewUI', _0x1831e0);
                    var _0x3155b2 = function (_0xf0f415) {
                        function _0x427072() {
                            return _0xf0f415['call'](this) || this;
                        }
                        return __extends(_0x427072, _0xf0f415), _0x427072['prototype']['createChil' + 'dren'] = function () {
                            _0xf0f415['prototype']['createChil' + 'dren']['call'](this), this['createView'](_0x427072['uiView']);
                        }, _0x427072['uiView'] = {
                            'type': 'View',
                            'props': {
                                'width': 0x2ee,
                                'top': 0x0,
                                'right': 0x0,
                                'left': 0x0,
                                'height': 0x536,
                                'bottom': 0x0
                            },
                            'compId': 0x2,
                            'child': [{
                                    'type': 'Image',
                                    'props': {
                                        'var': 'bg',
                                        'top': 0x50,
                                        'skin': 'shop/mask.' + 'png',
                                        'sizeGrid': '48,217,63,' + '181',
                                        'right': 0x0,
                                        'left': 0x0,
                                        'bottom': 0x0
                                    },
                                    'compId': 0x5,
                                    'child': [
                                        {
                                            'type': 'Image',
                                            'props': {
                                                'y': 0x77,
                                                'x': 0x2be,
                                                'var': 'btn_close',
                                                'skin': 'shop/btn_c' + 'lose.png',
                                                'label': 'label'
                                            },
                                            'compId': 0x6
                                        },
                                        {
                                            'type': 'Image',
                                            'props': {
                                                'y': 0xc,
                                                'x': 0x6c,
                                                'var': 'title',
                                                'skin': 'shop/img_t' + 'itle2.png'
                                            },
                                            'compId': 0x7
                                        },
                                        {
                                            'type': 'Image',
                                            'props': {
                                                'x': 0x14,
                                                'var': 'btn_left',
                                                'skin': 'shop/btn_l' + 'eft.png',
                                                'left': 0x14,
                                                'label': 'label',
                                                'centerY': -0x28
                                            },
                                            'compId': 0x8
                                        },
                                        {
                                            'type': 'Image',
                                            'props': {
                                                'x': 0x2c1,
                                                'var': 'btn_right',
                                                'skin': 'shop/btn_r' + 'ight.png',
                                                'right': 0x14,
                                                'label': 'label',
                                                'centerY': -0x28
                                            },
                                            'compId': 0x9
                                        },
                                        {
                                            'type': 'Image',
                                            'props': {
                                                'x': 0x2d,
                                                'var': 'btn_unlock',
                                                'skin': 'shop/btn_u' + 'nlock.png',
                                                'label': 'label',
                                                'centerY': 0x12e
                                            },
                                            'compId': 0x17,
                                            'child': [{
                                                    'type': 'Label',
                                                    'props': {
                                                        'y': 0x24,
                                                        'x': 0x51,
                                                        'width': 0x5d,
                                                        'var': 'unlockNum',
                                                        'text': '2222',
                                                        'height': 0x18,
                                                        'fontSize': 0x20,
                                                        'color': '#FFE867',
                                                        'align': 'center'
                                                    },
                                                    'compId': 0x19
                                                }]
                                        },
                                        {
                                            'type': 'Image',
                                            'props': {
                                                'x': 0x196,
                                                'var': 'btn_gold',
                                                'skin': 'shop/btn_g' + 'et1.png',
                                                'label': 'label',
                                                'centerY': 0x12e
                                            },
                                            'compId': 0x18,
                                            'child': [{
                                                    'type': 'Label',
                                                    'props': {
                                                        'y': 34.5,
                                                        'x': 0x63,
                                                        'width': 0x42,
                                                        'var': 'gainNum',
                                                        'text': '+150',
                                                        'height': 0x18,
                                                        'fontSize': 0x20,
                                                        'color': '#FFE867'
                                                    },
                                                    'compId': 0x1b
                                                }]
                                        },
                                        {
                                            'type': 'Panel',
                                            'props': {
                                                'y': 0xb0,
                                                'x': 0x3a,
                                                'width': 0x27a,
                                                'height': 0x2d6,
                                                'centerY': -0x58,
                                                'centerX': 0x0
                                            },
                                            'compId': 0x1c,
                                            'child': [{
                                                    'type': 'List',
                                                    'props': {
                                                        'x': -0x3a,
                                                        'width': 0x27a,
                                                        'var': 'list',
                                                        'spaceY': 0x1c,
                                                        'spaceX': 0x18,
                                                        'repeatY': 0x3,
                                                        'repeatX': 0x3,
                                                        'height': 0x288,
                                                        'centerY': 0x0,
                                                        'centerX': 0x0
                                                    },
                                                    'compId': 0xa,
                                                    'child': [
                                                        {
                                                            'type': 'Image',
                                                            'props': {
                                                                'y': -0x26,
                                                                'x': 0x10f,
                                                                'var': 'img_level',
                                                                'skin': 'shop/img_l' + 'evel1.png',
                                                                'name': 'img_level',
                                                                'visible': ![]
                                                            },
                                                            'compId': 0x16
                                                        },
                                                        {
                                                            'type': 'Box',
                                                            'props': {
                                                                'y': 0x0,
                                                                'x': 0x0,
                                                                'width': 0xc2,
                                                                'renderType': 'render',
                                                                'height': 0xc2
                                                            },
                                                            'compId': 0xb,
                                                            'child': [
                                                                {
                                                                    'type': 'Sprite',
                                                                    'props': {
                                                                        'y': 0x0,
                                                                        'x': 0x0,
                                                                        'width': 0xc2,
                                                                        'texture': 'shop/iconB' + 'g.png',
                                                                        'height': 0xc2
                                                                    },
                                                                    'compId': 0xe
                                                                },
                                                                {
                                                                    'type': 'Image',
                                                                    'props': {
                                                                        'y': -0x3,
                                                                        'x': 0x0,
                                                                        'width': 0xc2,
                                                                        'var': 'select',
                                                                        'skin': 'shop/img_s' + 'elect.png',
                                                                        'name': 'select',
                                                                        'height': 0xc2
                                                                    },
                                                                    'compId': 0x13
                                                                },
                                                                {
                                                                    'type': 'Image',
                                                                    'props': {
                                                                        'var': 'icon',
                                                                        'scaleY': 0.7,
                                                                        'scaleX': 0.7,
                                                                        'name': 'icon',
                                                                        'centerY': 0x0,
                                                                        'centerX': 0x0
                                                                    },
                                                                    'compId': 0x15
                                                                },
                                                                {
                                                                    'type': 'Label',
                                                                    'props': {
                                                                        'y': 0x83,
                                                                        'x': 0x25,
                                                                        'var': 'iconName',
                                                                        'text': '物品名称',
                                                                        'name': 'iconName',
                                                                        'fontSize': 0x1e
                                                                    },
                                                                    'compId': 0x14
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }]
                                        },
                                        {
                                            'type': 'Image',
                                            'props': {
                                                'y': -0x39,
                                                'x': 0x2d,
                                                'skin': 'start/img_' + 'write.png'
                                            },
                                            'compId': 0x2c,
                                            'child': [
                                                {
                                                    'type': 'Label',
                                                    'props': {
                                                        'y': 0x4,
                                                        'x': 0x2a,
                                                        'width': 0x7c,
                                                        'var': 'txt_gold',
                                                        'text': '99999',
                                                        'height': 0x1e,
                                                        'fontSize': 0x1e,
                                                        'color': '#000000',
                                                        'align': 'center'
                                                    },
                                                    'compId': 0x2b
                                                },
                                                {
                                                    'type': 'Image',
                                                    'props': {
                                                        'y': -11.5,
                                                        'x': -0x13,
                                                        'skin': 'start/img_' + 'gold.png'
                                                    },
                                                    'compId': 0x2d
                                                }
                                            ]
                                        }
                                    ]
                                }],
                            'loadList': [
                                'shop/mask.' + 'png',
                                'shop/btn_c' + 'lose.png',
                                'shop/img_t' + 'itle2.png',
                                'shop/btn_l' + 'eft.png',
                                'shop/btn_r' + 'ight.png',
                                'shop/btn_u' + 'nlock.png',
                                'shop/btn_g' + 'et1.png',
                                'shop/img_l' + 'evel1.png',
                                'shop/iconB' + 'g.png',
                                'shop/img_s' + 'elect.png',
                                'start/img_' + 'write.png',
                                'start/img_' + 'gold.png'
                            ],
                            'loadList3D': []
                        }, _0x427072;
                    }(Laya['View']);
                    _0x4a3105['ShopViewUI'] = _0x3155b2, _0x51a490('ui.page.Sh' + 'opViewUI', _0x3155b2);
                    var _0x4782d0 = function (_0x4e41eb) {
                        function _0xf77559() {
                            return _0x4e41eb['call'](this) || this;
                        }
                        return __extends(_0xf77559, _0x4e41eb), _0xf77559['prototype']['createChil' + 'dren'] = function () {
                            _0x4e41eb['prototype']['createChil' + 'dren']['call'](this), this['createView'](_0xf77559['uiView']);
                        }, _0xf77559['uiView'] = {
                            'type': 'Scene',
                            'props': {
                                'width': 0x2ee,
                                'runtime': 'script/Sta' + 'rtView.ts',
                                'height': 0x536
                            },
                            'compId': 0x2,
                            'child': [
                                {
                                    'type': 'Sprite',
                                    'props': {
                                        'y': 0x0,
                                        'x': 0x0
                                    },
                                    'compId': 0xe
                                },
                                {
                                    'type': 'Box',
                                    'props': {
                                        'var': 'box',
                                        'top': 0x0,
                                        'right': 0x0,
                                        'left': 0x0,
                                        'bottom': 0x0
                                    },
                                    'compId': 0xb
                                },
                                {
                                    'type': 'Image',
                                    'props': {
                                        'var': 'yad',
                                        'skin': 'game/yad.p' + 'ng',
                                        'width': 0xa0,
                                        'height': 0x78,
                                        'bottom': 0x14,
                                        'left': 0x14
                                    },
                                    'compId': 0x1f4
                                },
                                {
                                    'type': 'Sprite',
                                    'props': {
                                        'y': 0x3a,
                                        'x': 0x34,
                                        'texture': 'start/logo' + '.png'
                                    },
                                    'compId': 0x8
                                },
                                {
                                    'type': 'Image',
                                    'props': {
                                        'y': 0x170,
                                        'var': 'btn_knife',
                                        'skin': 'start/btn_' + 'knife.png',
                                        'left': 0x0,
                                        'label': 'label'
                                    },
                                    'compId': 0x5
                                },
                                {
                                    'type': 'Image',
                                    'props': {
                                        'x': 0x0,
                                        'var': 'btn_start',
                                        'skin': 'start/img_' + 'bg.png',
                                        'bottom': 0x15e
                                    },
                                    'compId': 0x7,
                                    'child': [{
                                            'type': 'Image',
                                            'props': {
                                                'y': 0x18,
                                                'x': 0x113,
                                                'var': 'img_start',
                                                'skin': 'start/btn_' + 'start.png',
                                                'label': 'label'
                                            },
                                            'compId': 0x6
                                        }]
                                }
                            ],
                            'loadList': [
                                'start/logo' + '.png',
                                'start/btn_' + 'knife.png',
                                'start/btn_' + 'food.png',
                                'start/img_' + 'bg.png',
                                'start/btn_' + 'start.png'
                            ],
                            'loadList3D': []
                        }, _0xf77559;
                    }(Laya['Scene']);
                    _0x4a3105['StartViewU' + 'I'] = _0x4782d0, _0x51a490('ui.page.St' + 'artViewUI', _0x4782d0);
                }(_0x389e98['page'] || (_0x389e98['page'] = {}));
            }(_0x1e3387['ui'] || (_0x1e3387['ui'] = {})), function (_0x87f5ba) {
                !function (_0x4dfa9e) {
                    var _0x162751 = function (_0x32250f) {
                        function _0x37f8f6() {
                            return _0x32250f['call'](this) || this;
                        }
                        return __extends(_0x37f8f6, _0x32250f), _0x37f8f6['prototype']['createChil' + 'dren'] = function () {
                            _0x32250f['prototype']['createChil' + 'dren']['call'](this), this['createView'](_0x37f8f6['uiView']);
                        }, _0x37f8f6['uiView'] = {
                            'type': 'Scene',
                            'props': {
                                'width': 0x2ee,
                                'height': 0x536
                            },
                            'compId': 0x2,
                            'child': [{
                                    'type': 'Label',
                                    'props': {
                                        'top': 0x0,
                                        'right': 0x0,
                                        'left': 0x0,
                                        'bottom': 0x0,
                                        'bgColor': '#000000',
                                        'alpha': 0.9
                                    },
                                    'compId': 0x3,
                                    'child': [
                                        {
                                            'type': 'List',
                                            'props': {
                                                'y': 0xae,
                                                'x': 0x0,
                                                'width': 0x2ee,
                                                'var': 'gameList',
                                                'text': 'label',
                                                'spaceY': 0x26,
                                                'spaceX': 0x26,
                                                'repeatY': 0x5,
                                                'repeatX': 0x2,
                                                'height': 0x460
                                            },
                                            'compId': 0x4,
                                            'child': [{
                                                    'type': 'Box',
                                                    'props': {
                                                        'y': 0x18,
                                                        'x': 0x17,
                                                        'renderType': 'render'
                                                    },
                                                    'compId': 0x5,
                                                    'child': [
                                                        {
                                                            'type': 'Image',
                                                            'props': {
                                                                'y': 0xb,
                                                                'x': 0xc,
                                                                'width': 0x133,
                                                                'name': 'icon',
                                                                'height': 0x19a
                                                            },
                                                            'compId': 0x9
                                                        },
                                                        {
                                                            'type': 'Image',
                                                            'props': { 'skin': 'button/kua' + 'ng1.png' },
                                                            'compId': 0x6
                                                        }
                                                    ]
                                                }]
                                        },
                                        {
                                            'type': 'Sprite',
                                            'props': {
                                                'y': 0x4a,
                                                'x': 0x105,
                                                'texture': 'button/bky' + 'x.png'
                                            },
                                            'compId': 0x7
                                        },
                                        {
                                            'type': 'Image',
                                            'props': {
                                                'var': 'back',
                                                'top': 0x14,
                                                'skin': 'button/fha' + 'n.png'
                                            },
                                            'compId': 0x8
                                        },
                                        {
                                            'type': 'Image',
                                            'props': {
                                                'y': 0x48a,
                                                'x': 0xae,
                                                'var': 'btnStart',
                                                'skin': 'button/btn' + '_start.png',
                                                'label': 'label',
                                                'bottom': 0x28
                                            },
                                            'compId': 0xa
                                        }
                                    ]
                                }],
                            'loadList': [
                                'button/kua' + 'ng1.png',
                                'button/bky' + 'x.png',
                                'button/fha' + 'n.png',
                                'button/btn' + '_start.png'
                            ],
                            'loadList3D': []
                        }, _0x37f8f6;
                    }(Laya['Scene']);
                    _0x4dfa9e['BaoKuanTui' + 'JianUI'] = _0x162751, _0x51a490('ui.test.Ba' + 'oKuanTuiJi' + 'anUI', _0x162751);
                    var _0x599cc8 = function (_0x1a2302) {
                        function _0x3d4b3e() {
                            return _0x1a2302['call'](this) || this;
                        }
                        return __extends(_0x3d4b3e, _0x1a2302), _0x3d4b3e['prototype']['createChil' + 'dren'] = function () {
                            _0x1a2302['prototype']['createChil' + 'dren']['call'](this), this['createView'](_0x3d4b3e['uiView']);
                        }, _0x3d4b3e['uiView'] = {
                            'type': 'View',
                            'props': {
                                'width': 0x2ee,
                                'height': 0x536
                            },
                            'compId': 0x1,
                            'child': [
                                {
                                    'type': 'Label',
                                    'props': {
                                        'top': 0x0,
                                        'right': 0x0,
                                        'left': 0x0,
                                        'bottom': 0x0,
                                        'bgColor': '#FFFFFF'
                                    },
                                    'compId': 0x9
                                },
                                {
                                    'type': 'Label',
                                    'props': {
                                        'y': 0x0,
                                        'x': 0x0,
                                        'width': 0x2ee,
                                        'var': 'topBox',
                                        'height': 0x58,
                                        'bgColor': '#F2F2F2'
                                    },
                                    'compId': 0x10,
                                    'child': [{
                                            'type': 'Label',
                                            'props': {
                                                'width': 0x2ee,
                                                'valign': 'middle',
                                                'text': '小程序',
                                                'left': 0x0,
                                                'height': 0x58,
                                                'fontSize': 0x22,
                                                'color': '#333333',
                                                'bottom': 0x0,
                                                'bold': !0x0,
                                                'bgColor': '#F2F2F2',
                                                'align': 'center'
                                            },
                                            'compId': 0xa,
                                            'child': [{
                                                    'type': 'Box',
                                                    'props': {
                                                        'y': 0x282,
                                                        'x': 0x1d,
                                                        'width': 0x32,
                                                        'var': 'closeBtn',
                                                        'height': 0x32,
                                                        'centerY': 0x0
                                                    },
                                                    'compId': 0x11,
                                                    'child': [{
                                                            'type': 'Image',
                                                            'props': {
                                                                'y': 0xb,
                                                                'x': 0x0,
                                                                'skin': 'fenfa/btn_' + 'arrow_left' + '.png'
                                                            },
                                                            'compId': 0x8
                                                        }]
                                                }]
                                        }]
                                },
                                {
                                    'type': 'Label',
                                    'props': {
                                        'y': 0x58,
                                        'x': 0x28,
                                        'width': 0x2c6,
                                        'var': 'tips',
                                        'valign': 'middle',
                                        'text': '最近使用',
                                        'height': 0x50,
                                        'fontSize': 0x18,
                                        'color': '#999999',
                                        'align': 'left'
                                    },
                                    'compId': 0xc,
                                    'child': [{
                                            'type': 'Image',
                                            'props': {
                                                'skin': 'fenfa/line' + '.png',
                                                'bottom': 0x0
                                            },
                                            'compId': 0xd
                                        }]
                                },
                                {
                                    'type': 'Panel',
                                    'props': {
                                        'y': 0xa8,
                                        'width': 0x2ee,
                                        'var': 'gameBViewB' + 'ox',
                                        'height': 0x2bc
                                    },
                                    'compId': 0x6,
                                    'child': [{
                                            'type': 'List',
                                            'props': {
                                                'y': 0x0,
                                                'x': 0x0,
                                                'var': 'gameList',
                                                'repeatY': 0x9,
                                                'repeatX': 0x1
                                            },
                                            'compId': 0x2,
                                            'child': [{
                                                    'type': 'Box',
                                                    'props': {
                                                        'width': 0x2ee,
                                                        'renderType': 'render',
                                                        'height': 0x8c
                                                    },
                                                    'compId': 0x3,
                                                    'child': [
                                                        {
                                                            'type': 'Image',
                                                            'props': {
                                                                'x': 0x28,
                                                                'width': 0x64,
                                                                'name': 'gameIcon',
                                                                'height': 0x64,
                                                                'centerY': 0x0
                                                            },
                                                            'compId': 0x4,
                                                            'child': [{
                                                                    'type': 'Image',
                                                                    'props': {
                                                                        'width': 0x68,
                                                                        'skin': 'fenfa/mask' + '_icon.png',
                                                                        'height': 0x68,
                                                                        'centerY': 0x0,
                                                                        'centerX': 0x0
                                                                    },
                                                                    'compId': 0xb
                                                                }]
                                                        },
                                                        {
                                                            'type': 'Label',
                                                            'props': {
                                                                'x': 0xb4,
                                                                'text': '欢乐水杯',
                                                                'name': 'gameName',
                                                                'fontSize': 0x20,
                                                                'color': '#333333',
                                                                'centerY': 0x0
                                                            },
                                                            'compId': 0x5
                                                        },
                                                        {
                                                            'type': 'Image',
                                                            'props': {
                                                                'y': 0x8b,
                                                                'width': 0x23a,
                                                                'skin': 'fenfa/line' + '.png',
                                                                'right': 0x0,
                                                                'bottom': 0x0
                                                            },
                                                            'compId': 0xe
                                                        }
                                                    ]
                                                }]
                                        }]
                                }
                            ],
                            'loadList': [
                                'fenfa/btn_' + 'arrow_left' + '.png',
                                'fenfa/line' + '.png',
                                'fenfa/mask' + '_icon.png'
                            ],
                            'loadList3D': []
                        }, _0x3d4b3e;
                    }(Laya['View']);
                    _0x4dfa9e['FakerXCXLi' + 'stUI'] = _0x599cc8, _0x51a490('ui.test.Fa' + 'kerXCXList' + 'UI', _0x599cc8);
                    var _0x3fa1b4 = function (_0x1e6f8e) {
                        function _0x5c91a1() {
                            return _0x1e6f8e['call'](this) || this;
                        }
                        return __extends(_0x5c91a1, _0x1e6f8e), _0x5c91a1['prototype']['createChil' + 'dren'] = function () {
                            _0x1e6f8e['prototype']['createChil' + 'dren']['call'](this), this['createView'](_0x5c91a1['uiView']);
                        }, _0x5c91a1['uiView'] = {
                            'type': 'Scene',
                            'props': {
                                'width': 0x2ee,
                                'runtime': 'script/Gam' + 'eUI.ts',
                                'positionVariance_0': 0x64,
                                'maxPartices': 0x64,
                                'height': 0x536
                            },
                            'compId': 0x1,
                            'child': [
                                {
                                    'type': 'Sprite',
                                    'props': {
                                        'y': 0x0,
                                        'x': 0x0,
                                        'var': 'box'
                                    },
                                    'compId': 0xc6
                                },
                                {
                                    'type': 'Image',
                                    'props': {
                                        'y': 0xcc,
                                        'x': 0x0,
                                        'var': 'v1',
                                        'skin': 'game/img_p' + 'rogress.pn' + 'g'
                                    },
                                    'compId': 0xc0,
                                    'child': [
                                        {
                                            'type': 'Image',
                                            'props': {
                                                'y': 0x49,
                                                'x': 0x10,
                                                'width': 0x0,
                                                'var': 'progress',
                                                'skin': 'game/img_p' + 'rogressBar' + '.png',
                                                'sizeGrid': '0,219,0,0'
                                            },
                                            'compId': 0xc1
                                        },
                                        {
                                            'type': 'Label',
                                            'props': {
                                                'y': 67.5,
                                                'x': 77.4765625,
                                                'var': 'lvlSpeed',
                                                'text': 'x\x201',
                                                'fontSize': 0x24
                                            },
                                            'compId': 0xc2
                                        }
                                    ]
                                },
                                {
                                    'type': 'Image',
                                    'props': {
                                        'y': 0x50,
                                        'var': 'v2',
                                        'skin': 'game/img_p' + 'rogressA.p' + 'ng',
                                        'centerX': 0x0
                                    },
                                    'compId': 0xc3,
                                    'child': [{
                                            'type': 'Image',
                                            'props': {
                                                'y': 0x7,
                                                'x': 0x9,
                                                'width': 0x0,
                                                'var': 'pro',
                                                'skin': 'game/img_p' + 'rogress_A.' + 'png'
                                            },
                                            'compId': 0xc4,
                                            'child': [{
                                                    'type': 'Image',
                                                    'props': {
                                                        'y': -0x1c,
                                                        'skin': 'game/qz.pn' + 'g',
                                                        'right': -0x1e
                                                    },
                                                    'compId': 0xc5
                                                }]
                                        }]
                                },
                                {
                                    'type': 'Box',
                                    'props': {
                                        'y': 974.5,
                                        'x': 0x32,
                                        'var': 'box_btnmor' + 'e'
                                    },
                                    'compId': 0xc8,
                                    'child': [
                                        {
                                            'type': 'Button',
                                            'props': {
                                                'y': -0.5,
                                                'x': 0x1aa,
                                                'width': 0xc8,
                                                'var': 'btn_Cut',
                                                'skin': 'comp/butto' + 'n.png',
                                                'labelSize': 0x23,
                                                'label': '切',
                                                'height': 0x3c
                                            },
                                            'compId': 0x14
                                        },
                                        {
                                            'type': 'Button',
                                            'props': {
                                                'y': 103.5,
                                                'x': 0x1a5,
                                                'width': 0xc6,
                                                'var': 'btn_reborn',
                                                'skin': 'comp/butto' + 'n.png',
                                                'name': 'btn_reborn',
                                                'labelSize': 0x1e,
                                                'label': '复活',
                                                'height': 0x43
                                            },
                                            'compId': 0xb3
                                        },
                                        {
                                            'type': 'Button',
                                            'props': {
                                                'y': -0.5,
                                                'width': 0x8a,
                                                'var': 'btn_addGam' + 'eObj',
                                                'skin': 'comp/butto' + 'n.png',
                                                'labelSize': 0x23,
                                                'label': '上菜',
                                                'height': 0x3f
                                            },
                                            'compId': 0xb5
                                        },
                                        {
                                            'type': 'Button',
                                            'props': {
                                                'y': 114.5,
                                                'width': 0x92,
                                                'var': 'btn_reset',
                                                'skin': 'comp/butto' + 'n.png',
                                                'labelSize': 0x23,
                                                'label': '重置',
                                                'height': 0x2d
                                            },
                                            'compId': 0xb9
                                        },
                                        {
                                            'type': 'Button',
                                            'props': {
                                                'y': 197.5,
                                                'width': 0xf3,
                                                'var': 'btn_speedL' + 'ine',
                                                'skin': 'comp/butto' + 'n.png',
                                                'labelSize': 0x23,
                                                'label': '显示速度线',
                                                'height': 0x4b
                                            },
                                            'compId': 0xc7
                                        }
                                    ]
                                },
                                {
                                    'type': 'Box',
                                    'props': {
                                        'var': 'box_btn',
                                        'top': 0x0,
                                        'right': 0x0,
                                        'left': 0x1,
                                        'height': 0x9c4
                                    },
                                    'compId': 0xc9
                                },
                                {
                                    'type': 'Image',
                                    'props': {
                                        'y': 0x1b0,
                                        'x': 0x0,
                                        'var': 'v3',
                                        'skin': 'game/img_l' + 'evel.png'
                                    },
                                    'compId': 0xcb,
                                    'child': [
                                        {
                                            'type': 'Label',
                                            'props': {
                                                'y': 0x17,
                                                'x': 0xe,
                                                'width': 0x82,
                                                'var': 'txt_score',
                                                'text': '0',
                                                'height': 0x28,
                                                'fontSize': 0x28,
                                                'bold': !0x0,
                                                'align': 'center'
                                            },
                                            'compId': 0xcc
                                        },
                                        {
                                            'type': 'Sprite',
                                            'props': {
                                                'y': 0x47,
                                                'x': 0xe,
                                                'texture': 'game/txt_g' + 'q.png'
                                            },
                                            'compId': 0xcd
                                        },
                                        {
                                            'type': 'Label',
                                            'props': {
                                                'y': 0x47,
                                                'x': 0x4f,
                                                'width': 0x45,
                                                'var': 'txt_level',
                                                'text': '3',
                                                'height': 0x1b,
                                                'fontSize': 0x19,
                                                'color': '#5f5f5f',
                                                'bold': !0x0,
                                                'align': 'left'
                                            },
                                            'compId': 0xce
                                        }
                                    ]
                                },
                                {
                                    'type': 'Image',
                                    'props': {
                                        'y': 0x1ef,
                                        'x': 0x29f,
                                        'width': 0x71,
                                        'var': 'v4',
                                        'height': 0x82,
                                        'anchorY': 0.5,
                                        'anchorX': 0.5
                                    },
                                    'compId': 0xd0,
                                    'child': [{
                                            'type': 'Image',
                                            'props': {
                                                'y': 0x3a,
                                                'x': 0x38,
                                                'var': 'bottomweap' + 'on',
                                                'skin': 'button/bgb' + 'ottom2.png',
                                                'anchorY': 0.5,
                                                'anchorX': 0.5
                                            },
                                            'compId': 0xd8
                                        }]
                                },
                                {
                                    'type': 'Box',
                                    'props': {
                                        'y': 0x4e,
                                        'x': 0x212,
                                        'width': 0xdc,
                                        'visible': !0x1,
                                        'var': 'fenfaListB' + 'ox',
                                        'height': 0x6f
                                    },
                                    'compId': 0xdc
                                },
                                {
                                    'type': 'Image',
                                    'props': {
                                        'var': 'yad',
                                        'skin': 'game/yad.p' + 'ng',
                                        'width': 0xa0,
                                        'height': 0x78,
                                        'bottom': 0x14,
                                        'left': 0x14
                                    },
                                    'compId': 0x1f4
                                },
                                {
                                    'type': 'Image',
                                    'props': {
                                        'var': 'cTips',
                                        'skin': 'start/btn_' + 'start2.png',
                                        'bottom': 0x190,
                                        'centerX': 0x0
                                    },
                                    'compId': 0x1f4
                                },
                                {
                                    'type': 'Image',
                                    'props': {
                                        'y': 0x4e,
                                        'x': 0x226,
                                        'width': 0xb4,
                                        'visible': !0x1,
                                        'var': 'fenfaListB' + 'tn',
                                        'skin': 'fenfa/btn_' + 'quit.png',
                                        'label': 'label',
                                        'height': 0x3c
                                    },
                                    'compId': 0xdb
                                }
                            ],
                            'loadList': [
                                'game/img_p' + 'rogress.pn' + 'g',
                                'game/img_p' + 'rogressBar' + '.png',
                                'game/img_p' + 'rogressA.p' + 'ng',
                                'game/img_p' + 'rogress_A.' + 'png',
                                'game/qz.pn' + 'g',
                                'comp/butto' + 'n.png',
                                'game/img_l' + 'evel.png',
                                'game/txt_g' + 'q.png',
                                'button/bgb' + 'ottom2.png',
                                'button/jin' + 'dutiao.png',
                                'button/jin' + 'dutiaodi.p' + 'ng',
                                'button/box' + '_black.png',
                                'button/ico' + 'n_tv.png',
                                'fenfa/btn_' + 'quit.png'
                            ],
                            'loadList3D': []
                        }, _0x5c91a1;
                    }(Laya['Scene']);
                    _0x4dfa9e['TestSceneU' + 'I'] = _0x3fa1b4, _0x51a490('ui.test.Te' + 'stSceneUI', _0x3fa1b4);
                }(_0x87f5ba['test'] || (_0x87f5ba['test'] = {}));
            }(_0x1e3387['ui'] || (_0x1e3387['ui'] = {}));
        },
        {}
    ],
    0x30: [
        function (_0x3300eb, _0x37fb00, _0x45b35b) {
            'use strict';
            Object['defineProp' + 'erty'](_0x45b35b, '__esModule', { 'value': !0x0 });
            var _0x30b61a = _0x3300eb('../Main'), _0x2c953f = _0x3300eb('../core/wx' + 'Core'), _0x134d13 = function () {
                    function _0x91ec32() {
                        this['mBannerOff' + 'setY'] = 0x50, this['adBanner'] = null, this['mIsInvokeR' + 'emoveCusto' + 'mBannerAd'] = !0x1, this['mCustomBan' + 'ner'] = null, this['mCustomBan' + 'nerAdList'] = [];
                    }
                    return _0x91ec32['playVideo'] = function (_0x44abef, _0x371f96, _0x240d1b) {
                        void 0x0 === _0x371f96 && (_0x371f96 = null), void 0x0 === _0x240d1b && (_0x240d1b = null), _0x91ec32['sIsPlayVid' + 'eo'] || _0x2c953f['default']['uo']['loadingVid' + 'eo'](function (_0x3c3026) {
                            _0x3c3026 ? (_0x91ec32['sIsPlayVid' + 'eo'] = !0x0, _0x2c953f['default']['uo']['showVideoA' + 'D'](function (_0x4b4f5a) {
                                _0x4b4f5a ? (_0x91ec32['sIsPlayVid' + 'eo'] = !0x1, void 0x0 != _0x44abef && null != _0x44abef && (_0x44abef(), _0x30b61a['default']['app']['mWX']['reportData'](0x1))) : (_0x91ec32['sIsPlayVid' + 'eo'] = !0x1, null != _0x240d1b && _0x240d1b());
                            })) : (_0x91ec32['sIsPlayVid' + 'eo'] = !0x1, null != _0x371f96 ? _0x371f96() : wx['showToast']({
                                'title': '视频获取失败',
                                'icon': 'none',
                                'image': '',
                                'duration': 0x7d0
                            }));
                        });
                    }, _0x91ec32['prototype']['showBanner' + 'Ad'] = function (_0x300b5c, _0x1b5b11) {
                    }, _0x91ec32['prototype']['hideBanner' + 'Ad'] = function () {
                        this['removeCust' + 'omBannerAd'](), void 0x0 != this['adBanner'] && null != this['adBanner'] && this['adBanner']['hide']();
                    }, _0x91ec32['prototype']['addCustomB' + 'annerAd'] = function () {
                    }, _0x91ec32['prototype']['onCustomBa' + 'nnerClick'] = function (_0x341ac8, _0x1cb0c0, _0x5d1088, _0x29ff69, _0x1626fe) {
                        _0x1626fe['stopPropag' + 'ation']();
                    }, _0x91ec32['prototype']['removeCust' + 'omBannerAd'] = function () {
                        this['mIsInvokeR' + 'emoveCusto' + 'mBannerAd'] = !0x0, null != this['mCustomBan' + 'ner'] && (this['mCustomBan' + 'ner']['visible'] = !0x1);
                    }, _0x91ec32['sDefaultBa' + 'nnerId'] = 'adunit-27f' + 'e9c8dc68c0' + '0d7', _0x91ec32['sDefaultVi' + 'deoId'] = 'adunit-87e' + 'ebd000394e' + '641', _0x91ec32['sIsPlayVid' + 'eo'] = !0x1, _0x91ec32;
                }();
            _0x45b35b['ADUtil'] = _0x134d13;
        },
        {
            '../Main': 0xe,
            '../core/wxCore': 0x1b
        }
    ],
    0x31: [
        function (_0x29ac2d, _0x1a4378, _0x42fbde) {
            'use strict';
            Object['defineProp' + 'erty'](_0x42fbde, '__esModule', { 'value': !0x0 });
            var _0x56d66a = function () {
                function _0xb64873() {
                }
                return _0xb64873['mAdOn'] = !0x0, _0xb64873['mSoundable'] = !0x0, _0xb64873['mVersion'] = 0x3fa, _0xb64873['TAG'] = 'qc', _0xb64873['mScoreUnit'] = '分', _0xb64873['mURL'] = '', _0xb64873['mCmd'] = {
                    'check': '1.0.1/' + _0xb64873['TAG'] + '/check?',
                    'login': '1.0.1/' + _0xb64873['TAG'] + '/login?',
                    'login2': '1.0.2/' + _0xb64873['TAG'] + '/login2?',
                    'challenge': '1.0.1/' + _0xb64873['TAG'] + ('/challenge' + '?'),
                    'querycards': '1.0.1/' + _0xb64873['TAG'] + ('/querycard' + 's?'),
                    'rank': '1.0.1/' + _0xb64873['TAG'] + '/rank?',
                    'report': '1.0.1/' + _0xb64873['TAG'] + '/report?',
                    'AddCard': '1.0.1/' + _0xb64873['TAG'] + '/addcard?',
                    'AddMyCard': '1.0.1/' + _0xb64873['TAG'] + ('/AddMyCard' + '?'),
                    'ad': '1.0.1/' + _0xb64873['TAG'] + '/ad?',
                    'mymark': '1.0.1/' + _0xb64873['TAG'] + '/mymark?',
                    'ItemTotle': '1.0.1/' + _0xb64873['TAG'] + ('/ItemTotle' + '?'),
                    'SetUserValue': '1.0.1/' + _0xb64873['TAG'] + ('/SetUserVa' + 'lue?'),
                    'ChangeTCt': '1.0.1/' + _0xb64873['TAG'] + ('/ChangeTCt' + '?')
                }, _0xb64873['mKeys'] = { '1.0.1': 'd3dfa_af17' + '45389b71e5' + '1cd363c0' }, _0xb64873['mReportAdH' + 'itUrl'] = _0xb64873['mURL'] + '1.0.1/' + _0xb64873['TAG'] + '/data?', _0xb64873['mBannerAdI' + 'd'] = '', _0xb64873['mVideoAdId'] = '', _0xb64873['sMusicOnOf' + 'f'] = !0x0, _0xb64873['sSoundOnOf' + 'f'] = !0x0, _0xb64873['mIsNewUser'] = !0x1, _0xb64873['sStartGame' + 'Time'] = 0x0, _0xb64873['mLineColor'] = '#FF5572', _0xb64873;
            }();
            _0x42fbde['ConfigUtil'] = _0x56d66a;
        },
        {}
    ],
    0x32: [
        function (_0x3b6188, _0x1974f8, _0x3923fb) {
            'use strict';
            Object['defineProp' + 'erty'](_0x3923fb, '__esModule', { 'value': !0x0 });
            var _0x52e662 = _0x3b6188('./ConfigUt' + 'il'), _0x148cdc = function () {
                    function _0x2f618a() {
                    }
                    return _0x2f618a['log'] = function (_0x4b5c2f) {
                        console['log'](_0x52e662['ConfigUtil']['TAG'] + ':\x20' + _0x4b5c2f);
                    }, _0x2f618a;
                }();
            _0x3923fb['LogUtil'] = _0x148cdc;
        },
        { './ConfigUtil': 0x31 }
    ],
    0x33: [
        function (_0x88508a, _0x49a560, _0x11e7f3) {
            'use strict';
            Object['defineProp' + 'erty'](_0x11e7f3, '__esModule', { 'value': !0x0 });
            var _0x3ab8b1 = function () {
                function _0x33e80a() {
                }
                return _0x33e80a['sShareUrls'] = [], _0x33e80a['mShareTitl' + 'es'] = {
                    'shareApp': '我拥有的不仅是技巧，' + '而是那99.99%的' + '精准',
                    'shareGift': '我需要你的帮助，就差' + '一点点，真的一点点！',
                    'shareGroupRank': '差之毫厘谬以千里，我' + '们差点不是一点~',
                    'shareProp': '你帮我一点，我帮你一' + '点，友谊不止一点点\x20',
                    'share2Friend': '哼，跟我比精准？',
                    'shareRelay': '行百步半九十，不要让' + '我的努力白费！',
                    'shareContinue': '不，这是错觉，我的精' + '准不会错的！',
                    'shareToUsePropInStartAward': '看我水瓶里的水好漂亮' + '啊，千万不能洒了！',
                    'shareToUsePropInPassAward': '看我获得的奖励，好漂' + '亮的一瓶水啊！'
                }, _0x33e80a['mShareUrls'] = {
                    'shareApp': 'share/shar' + 'e2.jpg',
                    'shareGift': 'share/shar' + 'e1.png',
                    'shareGroupRank': 'share/shar' + 'e2.png',
                    'shareProp': 'share/shar' + 'e2.png',
                    'share2Friend': 'share/shar' + 'e1.png',
                    'shareRelay': 'share/shar' + 'e1.png',
                    'shareContinue': 'share/shar' + 'e2.png',
                    'shareToUsePropInStartAward': 'share/shar' + 'e1.png',
                    'shareToUsePropInPassAward': 'share/shar' + 'e2.png'
                }, _0x33e80a['mShareIds'] = {
                    'shareApp': 0x1,
                    'shareGift': 0x8,
                    'shareGroupRank': 0x2,
                    'shareProp': 0x1,
                    'share2Friend': 0x4,
                    'shareRelay': 0x6,
                    'shareContinue': 0x3,
                    'shareToUsePropInStartAward': 0xc,
                    'shareToUsePropInPassAward': 0xc,
                    'shareToGetDoubleCoin': 0xd,
                    'shareToGetCoin': 0xb,
                    'shareToReborn': 0xd,
                    'shareToGetStartAward': 0xd
                }, _0x33e80a;
            }();
            _0x11e7f3['ShareConfi' + 'g'] = _0x3ab8b1;
        },
        {}
    ],
    0x34: [
        function (_0x4b2e27, _0x204f37, _0x2b2c33) {
            'use strict';
            Object['defineProp' + 'erty'](_0x2b2c33, '__esModule', { 'value': !0x0 });
            var _0x19372c = _0x4b2e27('../Main'), _0x14ca19 = _0x4b2e27('./ShareCon' + 'fig'), _0x43b1c9 = _0x4b2e27('./TimeUtil'), _0x57bee9 = function () {
                    function _0xa95f15() {
                    }
                    return _0xa95f15['getShareUr' + 'l'] = function (_0x5c47b3, _0x7a1d90) {
                        if (null != _0x14ca19['ShareConfi' + 'g']['sShareUrls']) {
                            for (var _0xf335a = 0x0; _0xf335a < _0x14ca19['ShareConfi' + 'g']['sShareUrls']['length']; _0xf335a++)
                                if (Number(_0x14ca19['ShareConfi' + 'g']['sShareUrls'][_0xf335a]['id']) == _0x5c47b3) {
                                    var _0xf5a0a2 = _0x14ca19['ShareConfi' + 'g']['sShareUrls'][_0xf335a]['url'];
                                    if (null != _0xf5a0a2 && _0xf5a0a2['length'] > 0x2)
                                        return _0xf5a0a2;
                                    break;
                                }
                        }
                        return _0x7a1d90;
                    }, _0xa95f15['getShareTi' + 'tle'] = function (_0xbb9659, _0x4e61fe, _0x38f8a1) {
                        if (void 0x0 === _0x38f8a1 && (_0x38f8a1 = []), null != _0x14ca19['ShareConfi' + 'g']['sShareUrls']) {
                            for (var _0x32d7b6 = 0x0; _0x32d7b6 < _0x14ca19['ShareConfi' + 'g']['sShareUrls']['length']; _0x32d7b6++)
                                if (Number(_0x14ca19['ShareConfi' + 'g']['sShareUrls'][_0x32d7b6]['id']) == _0xbb9659) {
                                    var _0x3ce2be = _0x14ca19['ShareConfi' + 'g']['sShareUrls'][_0x32d7b6]['title'];
                                    if (null != _0x3ce2be && _0x3ce2be['length'] > 0x2) {
                                        for (var _0x4e36d1 = 0x0; _0x4e36d1 < _0x38f8a1['length']; _0x4e36d1++)
                                            _0x3ce2be['indexOf']('{' + _0x4e36d1 + '}') > -0x1 && (_0x3ce2be = _0x3ce2be['replace']('{' + _0x4e36d1 + '}', String(_0x38f8a1[_0x4e36d1])));
                                        return _0x3ce2be;
                                    }
                                    break;
                                }
                        }
                        return _0x4e61fe;
                    }, _0xa95f15['getShareTi' + 'tleByKey'] = function (_0x5bfdef, _0xbdf420) {
                        void 0x0 === _0xbdf420 && (_0xbdf420 = []);
                        for (var _0x2da635 = _0x14ca19['ShareConfi' + 'g']['mShareIds'][_0x5bfdef], _0x3ae1d0 = _0x14ca19['ShareConfi' + 'g']['mShareTitl' + 'es'][_0x5bfdef], _0x4bd95f = 0x0; _0x4bd95f < _0xbdf420['length']; _0x4bd95f++)
                            _0x3ae1d0['indexOf']('{' + _0x4bd95f + '}') > -0x1 && (_0x3ae1d0 = _0x3ae1d0['replace']('{' + _0x4bd95f + '}', String(_0xbdf420[_0x4bd95f])));
                        return _0xa95f15['getShareTi' + 'tle'](_0x2da635, _0x3ae1d0, _0xbdf420);
                    }, _0xa95f15['getShareUr' + 'lByKey'] = function (_0x1be29f) {
                        var _0x2ccb7e = _0x14ca19['ShareConfi' + 'g']['mShareIds'][_0x1be29f], _0x232dc4 = _0x14ca19['ShareConfi' + 'g']['mShareUrls'][_0x1be29f];
                        return _0xa95f15['getShareUr' + 'l'](_0x2ccb7e, _0x232dc4);
                    }, _0xa95f15['shareApp'] = function () {
                    }, _0xa95f15['shareGroup' + 'Rank'] = function () {
                        var _0x3b6ac8 = _0x14ca19['ShareConfi' + 'g']['mShareIds']['shareGroup' + 'Rank'], _0x485fcc = _0xa95f15['getShareTi' + 'tleByKey']('shareGroup' + 'Rank'), _0x148c80 = _0xa95f15['getShareUr' + 'lByKey']('shareGroup' + 'Rank');
                        _0xa95f15['is_exit'] = !0x1, _0x19372c['default']['app']['mWX']['mShareCall' + 'back'] = function () {
                        }, wx['shareAppMe' + 'ssage']({
                            'title': _0x485fcc,
                            'imageUrl': _0x148c80,
                            'query': 'uid=' + _0x19372c['default']['app']['mWX']['mUID'] + ('&id=0&type' + '=8&map=0&s' + 'url=') + _0x3b6ac8,
                            'success': function (_0x31a7e3) {
                            },
                            'fail': function (_0x6e45db) {
                                console['log'](_0x6e45db);
                            }
                        });
                    }, _0xa95f15['shareProp'] = function (_0x138da5) {
                        _0x19372c['default']['app']['is_share'] = !0x0;
                        var _0x4879c3 = _0x14ca19['ShareConfi' + 'g']['mShareIds']['shareProp'], _0x5a3b76 = _0xa95f15['getShareTi' + 'tleByKey']('shareProp'), _0x3521be = _0xa95f15['getShareUr' + 'lByKey']('shareProp');
                        _0xa95f15['is_exit'] = !0x1, _0x19372c['default']['app']['mWX']['mCallShare' + 'Time'] = _0x43b1c9['TimeUtil']['getCurrTim' + 'e'](), _0x19372c['default']['app']['mWX']['mShareCall' + 'back'] = function () {
                            _0x138da5();
                        }, _0x19372c['default']['app']['mWX']['mShareIsNo' + 'Callback'] = function () {
                            _0x19372c['default']['app']['mWX']['mShareIsNo' + 'Callback'] = null;
                        };
                        var _0x5c65b8 = _0x138da5;
                        _0x19372c['default']['app']['mWX']['mShareIsAg' + 'ainCallbac' + 'k'] = function () {
                            _0xa95f15['shareProp'](_0x5c65b8);
                        }, wx['shareAppMe' + 'ssage']({
                            'title': _0x5a3b76,
                            'imageUrl': _0x3521be,
                            'query': 'gift=' + _0x19372c['default']['app']['mWX']['mUID'] + '&uid=' + _0x19372c['default']['app']['mWX']['mUID'] + '&id=' + _0x19372c['default']['app']['mWX']['mShareID'] + ('&score=0&c' + 'lient=0&ty' + 'pe=0&surl=') + _0x4879c3,
                            'success': function (_0x4c451e) {
                                _0x19372c['default']['app']['mWX']['reportADHi' + 't'](String(_0x4879c3));
                            },
                            'fail': function (_0x1f5a8b) {
                            }
                        });
                    }, _0xa95f15['share2Frie' + 'nd'] = function () {
                        var _0x5ec2f4 = _0x14ca19['ShareConfi' + 'g']['mShareIds']['share2Frie' + 'nd'], _0xff58cf = _0xa95f15['getShareTi' + 'tleByKey']('share2Frie' + 'nd'), _0x395117 = _0xa95f15['getShareUr' + 'lByKey']('share2Frie' + 'nd');
                        _0x19372c['default']['app']['mWX']['mCallShare' + 'Time'] = _0x43b1c9['TimeUtil']['getCurrTim' + 'e'](), _0x19372c['default']['app']['mWX']['mShareCall' + 'back'] = function () {
                        }, _0x19372c['default']['app']['mWX']['mShareIsNo' + 'Callback'] = function () {
                            _0x19372c['default']['app']['mWX']['mShareIsNo' + 'Callback'] = null;
                        }, _0x19372c['default']['app']['mWX']['mShareIsAg' + 'ainCallbac' + 'k'] = function () {
                            _0xa95f15['share2Frie' + 'nd']();
                        }, wx['shareAppMe' + 'ssage']({
                            'title': _0xff58cf,
                            'imageUrl': _0x395117,
                            'query': 'gift=' + _0x19372c['default']['app']['mWX']['mUID'] + '&uid=' + _0x19372c['default']['app']['mWX']['mUID'] + ('&id=0&scor' + 'e=0&client' + '=0&type=0&' + 'surl=') + _0x5ec2f4,
                            'success': function (_0x5b6747) {
                            },
                            'fail': function (_0x11b285) {
                            }
                        });
                    }, _0xa95f15['shareRelay'] = function (_0x42dc69) {
                        var _0x4a8d62 = _0x14ca19['ShareConfi' + 'g']['mShareIds']['shareRelay'], _0x2d1fff = _0xa95f15['getShareTi' + 'tleByKey']('shareRelay'), _0x50674e = _0xa95f15['getShareUr' + 'lByKey']('shareRelay');
                        _0xa95f15['is_exit'] = !0x1, wx['shareAppMe' + 'ssage']({
                            'title': _0x2d1fff,
                            'imageUrl': _0x50674e,
                            'query': 'uid=' + _0x19372c['default']['app']['mWX']['mUID'] + '&id=' + _0x19372c['default']['app']['mWX']['mShareID'] + '&score=' + _0x42dc69 + ('&client=0&' + 'type=2&sur' + 'l=') + _0x4a8d62,
                            'success': function (_0x31a946) {
                            }
                        });
                    }, _0xa95f15['shareGift'] = function (_0x1552d9) {
                        _0x19372c['default']['app']['is_share'] = !0x0;
                        var _0x32a260 = _0x14ca19['ShareConfi' + 'g']['mShareIds']['shareGift'], _0xb519a6 = _0xa95f15['getShareTi' + 'tleByKey']('shareGift'), _0x3ce5a1 = _0xa95f15['getShareUr' + 'lByKey']('shareGift');
                        _0xa95f15['is_exit'] = !0x1, _0x19372c['default']['app']['mWX']['mCallShare' + 'Time'] = _0x43b1c9['TimeUtil']['getCurrTim' + 'e'](), _0x19372c['default']['app']['mWX']['mShareCall' + 'back'] = function () {
                            _0x19372c['default']['app']['mWX']['indexBpTot' + 'le']('icon_page', {
                                'is_success': 0x1,
                                'is_click': 0x1,
                                'from_type': 'share',
                                'icon_type': 0x7,
                                'reward_num': 0x32,
                                'from_page': 'scoreboard' + '_page'
                            }), _0x1552d9();
                        }, _0x19372c['default']['app']['mWX']['mShareIsNo' + 'Callback'] = function () {
                            _0x19372c['default']['app']['mWX']['indexBpTot' + 'le']('icon_page', {
                                'is_success': 0x0,
                                'is_click': 0x1,
                                'from_type': 'share',
                                'icon_type': 0x7,
                                'reward_num': 0x32,
                                'from_page': 'scoreboard' + '_page'
                            }), _0x19372c['default']['app']['mWX']['mShareIsNo' + 'Callback'] = null;
                        }, wx['shareAppMe' + 'ssage']({
                            'title': _0xb519a6,
                            'imageUrl': _0x3ce5a1,
                            'query': 'uid=' + _0x19372c['default']['app']['mWX']['mUID'] + ('&id=0&type' + '=0&map=0&s' + 'url=') + _0x32a260,
                            'success': function (_0x4b3bf7) {
                            },
                            'fail': function (_0x5b40ee) {
                                console['log'](_0x5b40ee);
                            }
                        });
                    }, _0xa95f15['shareConti' + 'nue'] = function (_0x1d67da) {
                        _0x19372c['default']['app']['is_share'] = !0x0;
                        var _0x371650 = _0x14ca19['ShareConfi' + 'g']['mShareIds']['shareConti' + 'nue'], _0x3d5f85 = _0xa95f15['getShareTi' + 'tleByKey']('shareConti' + 'nue'), _0x588241 = _0xa95f15['getShareUr' + 'lByKey']('shareConti' + 'nue');
                        _0xa95f15['is_exit'] = !0x1, _0x19372c['default']['app']['mWX']['mCallShare' + 'Time'] = _0x43b1c9['TimeUtil']['getCurrTim' + 'e'](), _0x19372c['default']['app']['mWX']['mShareCall' + 'back'] = function () {
                            _0x1d67da(!0x0);
                        }, _0x19372c['default']['app']['mWX']['mShareIsNo' + 'Callback'] = function () {
                            _0x1d67da(!0x1);
                        };
                        var _0x1e5544 = _0x1d67da;
                        _0x19372c['default']['app']['mWX']['mShareIsAg' + 'ainCallbac' + 'k'] = function () {
                            _0x1d67da(!0x1), _0xa95f15['shareConti' + 'nue'](_0x1e5544);
                        }, wx['shareAppMe' + 'ssage']({
                            'title': _0x3d5f85,
                            'imageUrl': _0x588241,
                            'query': 'uid=' + _0x19372c['default']['app']['mWX']['mUID'] + ('&id=0&type' + '=0&map=0&s' + 'url=') + _0x371650,
                            'success': function (_0x1944a9) {
                            },
                            'fail': function (_0x410552) {
                                console['log'](_0x410552);
                            }
                        });
                    }, _0xa95f15['shareAward'] = function (_0x2141b9) {
                        _0x19372c['default']['app']['is_share'] = !0x0;
                        var _0xda938a = _0x14ca19['ShareConfi' + 'g']['mShareIds']['shareToUse' + 'PropInStar' + 'tAward'], _0x5c8a05 = _0xa95f15['getShareTi' + 'tleByKey']('shareToUse' + 'PropInStar' + 'tAward'), _0x52a0cd = _0xa95f15['getShareUr' + 'lByKey']('shareToUse' + 'PropInStar' + 'tAward');
                        _0xa95f15['is_exit'] = !0x1, _0x19372c['default']['app']['mWX']['mCallShare' + 'Time'] = _0x43b1c9['TimeUtil']['getCurrTim' + 'e'](), _0x19372c['default']['app']['mWX']['mShareCall' + 'back'] = function () {
                            _0x2141b9(!0x0);
                        }, _0x19372c['default']['app']['mWX']['mShareIsNo' + 'Callback'] = function () {
                            _0x19372c['default']['app']['mWX']['mShareIsNo' + 'Callback'] = null, _0x2141b9(!0x1);
                        };
                        var _0x43d199 = _0x2141b9;
                        _0x19372c['default']['app']['mWX']['mShareIsAg' + 'ainCallbac' + 'k'] = function () {
                            _0xa95f15['shareAward'](_0x43d199);
                        }, wx['shareAppMe' + 'ssage']({
                            'title': _0x5c8a05,
                            'imageUrl': _0x52a0cd,
                            'query': 'uid=' + _0x19372c['default']['app']['mWX']['mUID'] + ('&id=0&type' + '=0&map=0&s' + 'url=') + _0xda938a,
                            'success': function (_0xa14c18) {
                            },
                            'fail': function (_0x64d72c) {
                                console['log'](_0x64d72c);
                            }
                        });
                    }, _0xa95f15['shareDoubl' + 'eCoin'] = function (_0x1d2512, _0x49120f) {
                        void 0x0 === _0x49120f && (_0x49120f = 0x0), _0x19372c['default']['app']['is_share'] = !0x0, _0x14ca19['ShareConfi' + 'g']['mShareIds']['shareToGet' + 'DoubleCoin'];
                        var _0x927015 = _0xa95f15['getShareTi' + 'tleByKey']('shareToGet' + 'DoubleCoin'), _0x1a4b33 = _0xa95f15['getShareUr' + 'lByKey']('shareToGet' + 'DoubleCoin');
                        _0x19372c['default']['app']['mWX']['mCallShare' + 'Time'] = _0x43b1c9['TimeUtil']['getCurrTim' + 'e'](), _0xa95f15['is_exit'] = !0x1, _0x19372c['default']['app']['mWX']['mShareCall' + 'back'] = function () {
                            var _0x5ebe79 = {
                                'is_success': 0x1,
                                'is_click': 0x1,
                                'from_type': 'share',
                                'icon_type': 0x9,
                                'reward_num': _0x49120f,
                                'from_page': 'scoreboard' + '_page'
                            };
                            _0x19372c['default']['app']['mWX']['indexBpTot' + 'le']('icon_page', _0x5ebe79), _0x1d2512();
                        }, _0x19372c['default']['app']['mWX']['mShareIsNo' + 'Callback'] = function () {
                            _0x19372c['default']['app']['mWX']['indexBpTot' + 'le']('icon_page', {
                                'is_success': 0x0,
                                'is_click': 0x1,
                                'from_type': 'share',
                                'icon_type': 0x9,
                                'reward_num': 0x0,
                                'from_page': 'scoreboard' + '_page'
                            }), _0x19372c['default']['app']['mWX']['mShareIsNo' + 'Callback'] = null;
                        };
                        var _0x196624 = _0x1d2512;
                        _0x19372c['default']['app']['mWX']['mShareIsAg' + 'ainCallbac' + 'k'] = function () {
                            _0xa95f15['shareDoubl' + 'eCoin'](_0x196624);
                        }, wx['shareAppMe' + 'ssage']({
                            'title': _0x927015,
                            'imageUrl': _0x1a4b33,
                            'success': function (_0x2f4a96) {
                            },
                            'fail': function (_0x22cb89) {
                                console['log'](_0x22cb89);
                            }
                        });
                    }, _0xa95f15['shareNowCo' + 'in'] = function (_0x30520e) {
                        var _0x41281c = _0x14ca19['ShareConfi' + 'g']['mShareIds']['shareToGet' + 'Coin'], _0x4a9982 = _0xa95f15['getShareTi' + 'tleByKey']('shareToGet' + 'Coin'), _0x1bc7a8 = _0xa95f15['getShareUr' + 'lByKey']('shareToGet' + 'Coin');
                        _0x19372c['default']['app']['mWX']['mCallShare' + 'Time'] = _0x43b1c9['TimeUtil']['getCurrTim' + 'e'](), _0xa95f15['is_exit'] = !0x1, _0x19372c['default']['app']['mWX']['mShareCall' + 'back'] = function () {
                            _0x30520e();
                        }, _0x19372c['default']['app']['mWX']['mShareIsNo' + 'Callback'] = function () {
                            _0x19372c['default']['app']['mWX']['mShareIsNo' + 'Callback'] = null;
                        };
                        var _0x18a019 = _0x30520e;
                        _0x19372c['default']['app']['mWX']['mShareIsAg' + 'ainCallbac' + 'k'] = function () {
                            _0xa95f15['shareNowCo' + 'in'](_0x18a019);
                        }, console['log']('分享的ID', _0x41281c), wx['shareAppMe' + 'ssage']({
                            'title': _0x4a9982,
                            'imageUrl': _0x1bc7a8,
                            'success': function (_0x488cb2) {
                            },
                            'fail': function (_0x42cb44) {
                            }
                        });
                    }, _0xa95f15['shareToReb' + 'orn'] = function (_0x6a2a6c) {
                        var _0x32dded = _0x14ca19['ShareConfi' + 'g']['mShareIds']['shareToReb' + 'orn'], _0x3e1082 = _0xa95f15['getShareTi' + 'tleByKey']('shareToReb' + 'orn'), _0x3d4b79 = _0xa95f15['getShareUr' + 'lByKey']('shareToReb' + 'orn');
                        _0x19372c['default']['app']['mWX']['mCallShare' + 'Time'] = _0x43b1c9['TimeUtil']['getCurrTim' + 'e'](), _0xa95f15['is_exit'] = !0x1, _0x19372c['default']['app']['mWX']['mShareCall' + 'back'] = function () {
                            _0x6a2a6c();
                        }, wx['shareAppMe' + 'ssage']({
                            'title': _0x3e1082,
                            'imageUrl': _0x3d4b79,
                            'query': 'uid=' + _0x19372c['default']['app']['mWX']['mUID'] + ('&id=0&type' + '=0&map=0&s' + 'url=') + _0x32dded,
                            'success': function (_0x53ee33) {
                            },
                            'fail': function (_0x1c8b23) {
                                console['log'](_0x1c8b23);
                            }
                        });
                    }, _0xa95f15['shareToGet' + 'StartAward'] = function (_0x165b38) {
                        var _0x108b06 = _0x14ca19['ShareConfi' + 'g']['mShareIds']['shareToGet' + 'StartAward'], _0x5f264a = _0xa95f15['getShareTi' + 'tleByKey']('shareToGet' + 'StartAward'), _0x2ed994 = _0xa95f15['getShareUr' + 'lByKey']('shareToGet' + 'StartAward');
                        _0x19372c['default']['app']['mWX']['mCallShare' + 'Time'] = _0x43b1c9['TimeUtil']['getCurrTim' + 'e'](), _0xa95f15['is_exit'] = !0x1, _0x19372c['default']['app']['mWX']['mShareCall' + 'back'] = function () {
                            _0x165b38();
                        }, wx['shareAppMe' + 'ssage']({
                            'title': _0x5f264a,
                            'imageUrl': _0x2ed994,
                            'query': 'uid=' + _0x19372c['default']['app']['mWX']['mUID'] + ('&id=0&type' + '=0&map=0&s' + 'url=') + _0x108b06,
                            'success': function (_0x2bd49c) {
                            },
                            'fail': function (_0x4e11e9) {
                                console['log'](_0x4e11e9);
                            }
                        });
                    }, _0xa95f15['is_exit'] = !0x0, _0xa95f15;
                }();
            _0x2b2c33['ShareUtil'] = _0x57bee9;
        },
        {
            '../Main': 0xe,
            './ShareConfig': 0x33,
            './TimeUtil': 0x35
        }
    ],
    0x35: [
        function (_0x5a51d0, _0x2ebd6e, _0x851be) {
            'use strict';
            Object['defineProp' + 'erty'](_0x851be, '__esModule', { 'value': !0x0 });
            var _0x6d64df = function () {
                function _0x32d510() {
                }
                return _0x32d510['getTimeByS' + 'econd'] = function (_0x1bfa9d) {
                    var _0x5895d9 = Math['round']((_0x1bfa9d - 0x708) / 0xe10), _0x235002 = Math['round']((_0x1bfa9d - 0x1e) / 0x3c) % 0x3c, _0xb107ff = Math['floor'](_0x1bfa9d % 0x3c);
                    return (_0x5895d9 > 0x0 ? _0x5895d9 > 0x9 ? String(_0x5895d9) : '0' + _0x5895d9 : '00') + ':' + (_0x235002 > 0x0 ? _0x235002 > 0x9 ? String(_0x235002) : '0' + _0x235002 : '00') + ':' + (_0xb107ff > 0x0 ? _0xb107ff > 0x9 ? String(_0xb107ff) : '0' + _0xb107ff : '00');
                }, _0x32d510['getTodayFi' + 'rstSecond'] = function () {
                    var _0x414e5d = new Date();
                    return _0x414e5d['setHours'](0x0, 0x0, 0x0, 0x0), _0x414e5d['getTime']() / 0x3e8;
                }, _0x32d510['getCurrTim' + 'e'] = function () {
                    var _0x283911 = new Date();
                    return Math['floor'](_0x283911['getTime']() / 0x3e8);
                }, _0x32d510;
            }();
            _0x851be['TimeUtil'] = _0x6d64df;
        },
        {}
    ]
}, {}, [0xe]);