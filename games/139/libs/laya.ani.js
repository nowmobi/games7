!function (_0x31442d, _0x5a45c3) {
    'use strict';
    class _0x458972 {
    }
    _0x458972['Skeleton'] = null, _0x458972['AnimationT' + 'emplet'] = null, _0x458972['Templet'] = null;
    class _0xf63743 {
    }
    class _0x59ddf2 {
    }
    class _0x359890 {
    }
    class _0x55dcef {
        static ['parse'](_0x5ca4cf, _0x3f9f69) {
            var _0x137218, _0x1f19f4, _0x36b296, _0x129688, _0x3ea421, _0x2d878, _0x53ac9c, _0x196504 = _0x3f9f69['__getBuffe' + 'r'](), _0x565406 = _0x3f9f69['readUTFStr' + 'ing']();
            _0x5ca4cf['_aniClassN' + 'ame'] = _0x565406;
            var _0x559236, _0x64d25 = _0x3f9f69['readUTFStr' + 'ing']()['split']('\x0a'), _0xa31194 = _0x3f9f69['getUint8'](), _0x38b9a8 = _0x3f9f69['getUint32'](), _0xc8743e = _0x3f9f69['getUint32']();
            _0x38b9a8 > 0x0 && (_0x559236 = _0x196504['slice'](_0x38b9a8, _0xc8743e));
            var _0x3a1341 = new _0x5a45c3['Byte'](_0x559236);
            for (_0xc8743e > 0x0 && (_0x5ca4cf['_publicExt' + 'Data'] = _0x196504['slice'](_0xc8743e, _0x196504['byteLength'])), _0x5ca4cf['_useParent'] = !!_0x3f9f69['getUint8'](), _0x5ca4cf['_anis']['length'] = _0xa31194, _0x137218 = 0x0; _0x137218 < _0xa31194; _0x137218++) {
                var _0x194ef4 = _0x5ca4cf['_anis'][_0x137218] = new _0xf63743();
                _0x194ef4['nodes'] = [];
                var _0x56ec80 = _0x194ef4['name'] = _0x64d25[_0x3f9f69['getUint16']()];
                _0x5ca4cf['_aniMap'][_0x56ec80] = _0x137218, _0x194ef4['bone3DMap'] = {}, _0x194ef4['playTime'] = _0x3f9f69['getFloat32']();
                var _0x55cfdd = _0x194ef4['nodes']['length'] = _0x3f9f69['getUint8']();
                for (_0x194ef4['totalKeyfr' + 'ameDatasLe' + 'ngth'] = 0x0, _0x1f19f4 = 0x0; _0x1f19f4 < _0x55cfdd; _0x1f19f4++) {
                    var _0x35bb9f = _0x194ef4['nodes'][_0x1f19f4] = new _0x59ddf2();
                    _0x35bb9f['childs'] = [];
                    var _0x5055e3 = _0x3f9f69['getInt16']();
                    _0x5055e3 >= 0x0 && (_0x35bb9f['name'] = _0x64d25[_0x5055e3], _0x194ef4['bone3DMap'][_0x35bb9f['name']] = _0x1f19f4), _0x35bb9f['keyFrame'] = [], _0x35bb9f['parentInde' + 'x'] = _0x3f9f69['getInt16'](), -0x1 == _0x35bb9f['parentInde' + 'x'] ? _0x35bb9f['parent'] = null : _0x35bb9f['parent'] = _0x194ef4['nodes'][_0x35bb9f['parentInde' + 'x']], _0x35bb9f['lerpType'] = _0x3f9f69['getUint8']();
                    var _0x498c5b = _0x3f9f69['getUint32']();
                    _0x3a1341['pos'] = _0x498c5b;
                    var _0x18eef7 = _0x35bb9f['keyframeWi' + 'dth'] = _0x3a1341['getUint16']();
                    if (_0x194ef4['totalKeyfr' + 'ameDatasLe' + 'ngth'] += _0x18eef7, 0x0 === _0x35bb9f['lerpType'] || 0x1 === _0x35bb9f['lerpType']) {
                        for (_0x35bb9f['interpolat' + 'ionMethod'] = [], _0x35bb9f['interpolat' + 'ionMethod']['length'] = _0x18eef7, _0x36b296 = 0x0; _0x36b296 < _0x18eef7; _0x36b296++)
                            _0x35bb9f['interpolat' + 'ionMethod'][_0x36b296] = _0x458972['AnimationT' + 'emplet']['interpolat' + 'ion'][_0x3a1341['getUint8']()];
                    }
                    null != _0x35bb9f['parent'] && _0x35bb9f['parent']['childs']['push'](_0x35bb9f);
                    var _0x12928c = _0x3f9f69['getUint16']();
                    _0x12928c > 0x0 && (_0x35bb9f['extenData'] = _0x196504['slice'](_0x3f9f69['pos'], _0x3f9f69['pos'] + _0x12928c), _0x3f9f69['pos'] += _0x12928c);
                    var _0x576170 = _0x3f9f69['getUint16']();
                    _0x35bb9f['keyFrame']['length'] = _0x576170;
                    var _0x15699f, _0x19e4e9 = 0x0;
                    for (_0x36b296 = 0x0, _0x129688 = _0x576170; _0x36b296 < _0x129688; _0x36b296++) {
                        if ((_0x15699f = _0x35bb9f['keyFrame'][_0x36b296] = new _0x359890())['duration'] = _0x3f9f69['getFloat32'](), _0x15699f['startTime'] = _0x19e4e9, 0x2 === _0x35bb9f['lerpType']) {
                            _0x15699f['interpolat' + 'ionData'] = [];
                            var _0x14da28, _0x41a3fc = _0x3f9f69['getUint8']();
                            switch (_0x14da28 = _0x3f9f69['getFloat32']()) {
                            case 0xfe:
                                for (_0x15699f['interpolat' + 'ionData']['length'] = _0x18eef7, _0x53ac9c = 0x0; _0x53ac9c < _0x18eef7; _0x53ac9c++)
                                    _0x15699f['interpolat' + 'ionData'][_0x53ac9c] = 0x0;
                                break;
                            case 0xff:
                                for (_0x15699f['interpolat' + 'ionData']['length'] = _0x18eef7, _0x53ac9c = 0x0; _0x53ac9c < _0x18eef7; _0x53ac9c++)
                                    _0x15699f['interpolat' + 'ionData'][_0x53ac9c] = 0x5;
                                break;
                            default:
                                for (_0x15699f['interpolat' + 'ionData']['push'](_0x14da28), _0x2d878 = 0x1; _0x2d878 < _0x41a3fc; _0x2d878++)
                                    _0x15699f['interpolat' + 'ionData']['push'](_0x3f9f69['getFloat32']());
                            }
                        }
                        for (_0x15699f['data'] = new Float32Array(_0x18eef7), _0x15699f['dData'] = new Float32Array(_0x18eef7), _0x15699f['nextData'] = new Float32Array(_0x18eef7), _0x3ea421 = 0x0; _0x3ea421 < _0x18eef7; _0x3ea421++)
                            _0x15699f['data'][_0x3ea421] = _0x3f9f69['getFloat32'](), _0x15699f['data'][_0x3ea421] > -1e-8 && _0x15699f['data'][_0x3ea421] < 1e-8 && (_0x15699f['data'][_0x3ea421] = 0x0);
                        _0x19e4e9 += _0x15699f['duration'];
                    }
                    _0x15699f['startTime'] = _0x194ef4['playTime'], _0x35bb9f['playTime'] = _0x194ef4['playTime'], _0x5ca4cf['_calculate' + 'KeyFrame'](_0x35bb9f, _0x576170, _0x18eef7);
                }
            }
        }
    }
    class _0x5bda49 {
        static ['READ_DATA']() {
            _0x5bda49['_DATA']['offset'] = _0x5bda49['_reader']['getUint32'](), _0x5bda49['_DATA']['size'] = _0x5bda49['_reader']['getUint32']();
        }
        static ['READ_BLOCK']() {
            for (var _0x4c6efe = _0x5bda49['_BLOCK']['count'] = _0x5bda49['_reader']['getUint16'](), _0x1ae3e4 = _0x5bda49['_BLOCK']['blockStart' + 's'] = [], _0x5dfe99 = _0x5bda49['_BLOCK']['blockLengt' + 'hs'] = [], _0x4b913d = 0x0; _0x4b913d < _0x4c6efe; _0x4b913d++)
                _0x1ae3e4['push'](_0x5bda49['_reader']['getUint32']()), _0x5dfe99['push'](_0x5bda49['_reader']['getUint32']());
        }
        static ['READ_STRIN' + 'GS']() {
            var _0x3adc3f = _0x5bda49['_reader']['getUint32'](), _0x347fd0 = _0x5bda49['_reader']['getUint16'](), _0x105ca1 = _0x5bda49['_reader']['pos'];
            _0x5bda49['_reader']['pos'] = _0x3adc3f + _0x5bda49['_DATA']['offset'];
            for (var _0x4f381c = 0x0; _0x4f381c < _0x347fd0; _0x4f381c++)
                _0x5bda49['_strings'][_0x4f381c] = _0x5bda49['_reader']['readUTFStr' + 'ing']();
            _0x5bda49['_reader']['pos'] = _0x105ca1;
        }
        static ['parse'](_0x10f044, _0x1d60ef) {
            _0x5bda49['_templet'] = _0x10f044, _0x5bda49['_reader'] = _0x1d60ef, _0x1d60ef['__getBuffe' + 'r'](), (_0x5bda49['READ_DATA'](), _0x5bda49['READ_BLOCK'](), _0x5bda49['READ_STRIN' + 'GS']());
            for (var _0x910176 = 0x0, _0x2c025c = _0x5bda49['_BLOCK']['count']; _0x910176 < _0x2c025c; _0x910176++) {
                var _0x499133 = _0x1d60ef['getUint16'](), _0x47ca0e = _0x5bda49['_strings'][_0x499133], _0x2051bc = _0x5bda49['READ_' + _0x47ca0e];
                if (null == _0x2051bc)
                    throw new Error('model\x20file' + '\x20err,no\x20th' + 'is\x20functio' + 'n:' + _0x499133 + '\x20' + _0x47ca0e);
                _0x2051bc['call'](null);
            }
        }
        static ['READ_ANIMA' + 'TIONS']() {
            var _0x456d1e, _0x51b454, _0x5e5e98, _0xc337bb, _0x4f4be2 = _0x5bda49['_reader'], _0x3d3867 = _0x4f4be2['__getBuffe' + 'r'](), _0x3c6d05 = _0x4f4be2['getUint16'](), _0x2d19ef = [];
            for (_0x2d19ef['length'] = _0x3c6d05, _0x456d1e = 0x0; _0x456d1e < _0x3c6d05; _0x456d1e++)
                _0x2d19ef[_0x456d1e] = _0x458972['AnimationT' + 'emplet']['interpolat' + 'ion'][_0x4f4be2['getByte']()];
            var _0x532234 = _0x4f4be2['getUint8']();
            for (_0x5bda49['_templet']['_anis']['length'] = _0x532234, _0x456d1e = 0x0; _0x456d1e < _0x532234; _0x456d1e++) {
                var _0x29cb73 = _0x5bda49['_templet']['_anis'][_0x456d1e] = new _0xf63743();
                _0x29cb73['nodes'] = [];
                var _0x4565d0 = _0x29cb73['name'] = _0x5bda49['_strings'][_0x4f4be2['getUint16']()];
                _0x5bda49['_templet']['_aniMap'][_0x4565d0] = _0x456d1e, _0x29cb73['bone3DMap'] = {}, _0x29cb73['playTime'] = _0x4f4be2['getFloat32']();
                var _0x3e1e2e = _0x29cb73['nodes']['length'] = _0x4f4be2['getInt16']();
                for (_0x29cb73['totalKeyfr' + 'ameDatasLe' + 'ngth'] = 0x0, _0x51b454 = 0x0; _0x51b454 < _0x3e1e2e; _0x51b454++) {
                    var _0x292f35 = _0x29cb73['nodes'][_0x51b454] = new _0x59ddf2();
                    _0x292f35['keyframeWi' + 'dth'] = _0x3c6d05, _0x292f35['childs'] = [];
                    var _0x19dc42 = _0x4f4be2['getUint16']();
                    _0x19dc42 >= 0x0 && (_0x292f35['name'] = _0x5bda49['_strings'][_0x19dc42], _0x29cb73['bone3DMap'][_0x292f35['name']] = _0x51b454), _0x292f35['keyFrame'] = [], _0x292f35['parentInde' + 'x'] = _0x4f4be2['getInt16'](), -0x1 == _0x292f35['parentInde' + 'x'] ? _0x292f35['parent'] = null : _0x292f35['parent'] = _0x29cb73['nodes'][_0x292f35['parentInde' + 'x']], _0x29cb73['totalKeyfr' + 'ameDatasLe' + 'ngth'] += _0x3c6d05, _0x292f35['interpolat' + 'ionMethod'] = _0x2d19ef, null != _0x292f35['parent'] && _0x292f35['parent']['childs']['push'](_0x292f35);
                    var _0x547b09 = _0x4f4be2['getUint16']();
                    _0x292f35['keyFrame']['length'] = _0x547b09;
                    var _0x39af89 = null, _0x123589 = null;
                    for (_0x5e5e98 = 0x0, _0xc337bb = _0x547b09; _0x5e5e98 < _0xc337bb; _0x5e5e98++) {
                        (_0x39af89 = _0x292f35['keyFrame'][_0x5e5e98] = new _0x359890())['startTime'] = _0x4f4be2['getFloat32'](), _0x123589 && (_0x123589['duration'] = _0x39af89['startTime'] - _0x123589['startTime']), _0x39af89['dData'] = new Float32Array(_0x3c6d05), _0x39af89['nextData'] = new Float32Array(_0x3c6d05);
                        var _0x96b72c = _0x5bda49['_DATA']['offset'], _0x3cfa1 = _0x4f4be2['getUint32'](), _0x29894e = 0x4 * _0x3c6d05, _0x37beeb = _0x3d3867['slice'](_0x96b72c + _0x3cfa1, _0x96b72c + _0x3cfa1 + _0x29894e);
                        _0x39af89['data'] = new Float32Array(_0x37beeb), _0x123589 = _0x39af89;
                    }
                    _0x39af89['duration'] = 0x0, _0x292f35['playTime'] = _0x29cb73['playTime'], _0x5bda49['_templet']['_calculate' + 'KeyFrame'](_0x292f35, _0x547b09, _0x3c6d05);
                }
            }
        }
    }
    _0x5bda49['_strings'] = [], _0x5bda49['_BLOCK'] = { 'count': 0x0 }, _0x5bda49['_DATA'] = {
        'offset': 0x0,
        'size': 0x0
    };
    class _0x11c43f {
        constructor() {
        }
    }
    _0x11c43f['stopped'] = 0x0, _0x11c43f['paused'] = 0x1, _0x11c43f['playing'] = 0x2;
    class _0x194624 extends _0x5a45c3['EventDispa' + 'tcher'] {
        constructor() {
            super(), this['isCache'] = !0x0, this['playbackRa' + 'te'] = 0x1, this['_destroyed'] = !0x1, this['_currentAn' + 'imationCli' + 'pIndex'] = -0x1, this['_currentKe' + 'yframeInde' + 'x'] = -0x1, this['_currentTi' + 'me'] = 0x0, this['_overallDu' + 'ration'] = Number['MAX_VALUE'], this['_stopWhenC' + 'ircleFinis' + 'h'] = !0x1, this['_elapsedPl' + 'aybackTime'] = 0x0, this['_startUpda' + 'teLoopCoun' + 't'] = -0x1, this['_cachePlay' + 'Rate'] = 0x1, this['cacheFrame' + 'Rate'] = 0x3c, this['returnToZe' + 'roStopped'] = !0x1;
        }
        get ['templet']() {
            return this['_templet'];
        }
        set ['templet'](_0x5eaaee) {
            this['state'] !== _0x11c43f['stopped'] && this['stop'](!0x0), this['_templet'] !== _0x5eaaee && (this['_templet'] = _0x5eaaee, this['_computeFu' + 'llKeyframe' + 'Indices']());
        }
        get ['playStart']() {
            return this['_playStart'];
        }
        get ['playEnd']() {
            return this['_playEnd'];
        }
        get ['playDurati' + 'on']() {
            return this['_playDurat' + 'ion'];
        }
        get ['overallDur' + 'ation']() {
            return this['_overallDu' + 'ration'];
        }
        get ['currentAni' + 'mationClip' + 'Index']() {
            return this['_currentAn' + 'imationCli' + 'pIndex'];
        }
        get ['currentKey' + 'frameIndex']() {
            return this['_currentKe' + 'yframeInde' + 'x'];
        }
        get ['currentPla' + 'yTime']() {
            return this['_currentTi' + 'me'] + this['_playStart'];
        }
        get ['currentFra' + 'meTime']() {
            return this['_currentFr' + 'ameTime'];
        }
        get ['cachePlayR' + 'ate']() {
            return this['_cachePlay' + 'Rate'];
        }
        set ['cachePlayR' + 'ate'](_0x388b6b) {
            this['_cachePlay' + 'Rate'] !== _0x388b6b && (this['_cachePlay' + 'Rate'] = _0x388b6b, this['_templet'] && this['_computeFu' + 'llKeyframe' + 'Indices']());
        }
        get ['cacheFrame' + 'Rate']() {
            return this['_cacheFram' + 'eRate'];
        }
        set ['cacheFrame' + 'Rate'](_0x431083) {
            this['_cacheFram' + 'eRate'] !== _0x431083 && (this['_cacheFram' + 'eRate'] = _0x431083, this['_cacheFram' + 'eRateInter' + 'val'] = 0x3e8 / this['_cacheFram' + 'eRate'], this['_templet'] && this['_computeFu' + 'llKeyframe' + 'Indices']());
        }
        set ['currentTim' + 'e'](_0xf59dd4) {
            if (-0x1 !== this['_currentAn' + 'imationCli' + 'pIndex'] && this['_templet']) {
                if (_0xf59dd4 < this['_playStart'] || _0xf59dd4 > this['_playEnd'])
                    throw new Error('AnimationP' + 'layer:valu' + 'e\x20must\x20lar' + 'ge\x20than\x20pl' + 'ayStartTim' + 'e,small\x20th' + 'an\x20playEnd' + 'Time.');
                this['_startUpda' + 'teLoopCoun' + 't'] = _0x5a45c3['Stat']['loopCount'];
                var _0x4dee2f = this['_cacheFram' + 'eRateInter' + 'val'] * this['_cachePlay' + 'Rate'];
                this['_currentTi' + 'me'] = _0xf59dd4, this['_currentKe' + 'yframeInde' + 'x'] = Math['floor'](this['currentPla' + 'yTime'] / _0x4dee2f), this['_currentFr' + 'ameTime'] = this['_currentKe' + 'yframeInde' + 'x'] * _0x4dee2f;
            }
        }
        get ['paused']() {
            return this['_paused'];
        }
        set ['paused'](_0x38de2a) {
            this['_paused'] = _0x38de2a, _0x38de2a && this['event'](_0x5a45c3['Event']['PAUSED']);
        }
        get ['cacheFrame' + 'RateInterv' + 'al']() {
            return this['_cacheFram' + 'eRateInter' + 'val'];
        }
        get ['state']() {
            return -0x1 === this['_currentAn' + 'imationCli' + 'pIndex'] ? _0x11c43f['stopped'] : this['_paused'] ? _0x11c43f['paused'] : _0x11c43f['playing'];
        }
        get ['destroyed']() {
            return this['_destroyed'];
        }
        ['_onTemplet' + 'LoadedComp' + 'uteFullKey' + 'frameIndic' + 'es'](_0x2adbd6, _0x3041fd, _0x1d384d) {
            this['_templet'] === _0x1d384d && this['_cachePlay' + 'Rate'] === _0x2adbd6 && this['_cacheFram' + 'eRate'] === _0x3041fd && this['_computeFu' + 'llKeyframe' + 'Indices']();
        }
        ['_computeFu' + 'llKeyframe' + 'Indices']() {
        }
        ['_onAnimati' + 'onTempletL' + 'oaded']() {
            this['destroyed'] || this['_calculate' + 'PlayDurati' + 'on']();
        }
        ['_calculate' + 'PlayDurati' + 'on']() {
            if (this['state'] !== _0x11c43f['stopped']) {
                var _0x1b236d = this['_templet']['getAniDura' + 'tion'](this['_currentAn' + 'imationCli' + 'pIndex']);
                0x0 === this['_playEnd'] && (this['_playEnd'] = _0x1b236d), this['_playEnd'] > _0x1b236d && (this['_playEnd'] = _0x1b236d), this['_playDurat' + 'ion'] = this['_playEnd'] - this['_playStart'];
            }
        }
        ['_setPlayPa' + 'rams'](_0x191a1d, _0x1cfd5d) {
            this['_currentTi' + 'me'] = _0x191a1d, this['_currentKe' + 'yframeInde' + 'x'] = Math['floor'](this['currentPla' + 'yTime'] / _0x1cfd5d + 0.01), this['_currentFr' + 'ameTime'] = this['_currentKe' + 'yframeInde' + 'x'] * _0x1cfd5d;
        }
        ['_setPlayPa' + 'ramsWhenSt' + 'op'](_0xd1f145, _0x5850b0, _0x3df764 = -0x1) {
            this['_currentTi' + 'me'] = _0xd1f145;
            var _0x4aaa21 = _0x3df764 > 0x0 ? _0x3df764 : _0xd1f145;
            this['_currentKe' + 'yframeInde' + 'x'] = Math['floor'](_0x4aaa21 / _0x5850b0 + 0.01), this['_currentKe' + 'yframeInde' + 'x'] = Math['floor'](_0xd1f145 / _0x5850b0 + 0.01), this['_currentFr' + 'ameTime'] = this['_currentKe' + 'yframeInde' + 'x'] * _0x5850b0, this['_currentAn' + 'imationCli' + 'pIndex'] = -0x1;
        }
        ['_update'](_0x4ff633) {
            if (-0x1 !== this['_currentAn' + 'imationCli' + 'pIndex'] && !this['_paused'] && this['_templet']) {
                var _0x2d8cb6 = this['_cacheFram' + 'eRateInter' + 'val'] * this['_cachePlay' + 'Rate'], _0x1f1d85 = 0x0;
                this['_startUpda' + 'teLoopCoun' + 't'] !== _0x5a45c3['Stat']['loopCount'] && (_0x1f1d85 = _0x4ff633 * this['playbackRa' + 'te'], this['_elapsedPl' + 'aybackTime'] += _0x1f1d85);
                var _0x3fe3e5 = this['playDurati' + 'on'];
                if (_0x1f1d85 += this['_currentTi' + 'me'], 0x0 !== this['_overallDu' + 'ration'] && this['_elapsedPl' + 'aybackTime'] >= this['_overallDu' + 'ration'] || 0x0 === this['_overallDu' + 'ration'] && this['_elapsedPl' + 'aybackTime'] >= _0x3fe3e5 || 0x0 === this['_overallDu' + 'ration'] && _0x1f1d85 >= this['playEnd'])
                    return this['_setPlayPa' + 'ramsWhenSt' + 'op'](_0x3fe3e5, _0x2d8cb6, this['playEnd']), void this['event'](_0x5a45c3['Event']['STOPPED']);
                if (_0x3fe3e5 > 0x0) {
                    if (_0x1f1d85 >= _0x3fe3e5)
                        return this['_stopWhenC' + 'ircleFinis' + 'h'] ? (this['_setPlayPa' + 'ramsWhenSt' + 'op'](_0x3fe3e5, _0x2d8cb6), this['_stopWhenC' + 'ircleFinis' + 'h'] = !0x1, void this['event'](_0x5a45c3['Event']['STOPPED'])) : (_0x1f1d85 %= _0x3fe3e5, this['_setPlayPa' + 'rams'](_0x1f1d85, _0x2d8cb6), void this['event'](_0x5a45c3['Event']['COMPLETE']));
                    this['_setPlayPa' + 'rams'](_0x1f1d85, _0x2d8cb6);
                } else {
                    if (this['_stopWhenC' + 'ircleFinis' + 'h'])
                        return this['_setPlayPa' + 'ramsWhenSt' + 'op'](_0x3fe3e5, _0x2d8cb6), this['_stopWhenC' + 'ircleFinis' + 'h'] = !0x1, void this['event'](_0x5a45c3['Event']['STOPPED']);
                    this['_currentTi' + 'me'] = this['_currentFr' + 'ameTime'] = this['_currentKe' + 'yframeInde' + 'x'] = 0x0, this['event'](_0x5a45c3['Event']['COMPLETE']);
                }
            }
        }
        ['_destroy']() {
            this['offAll'](), this['_templet'] = null, this['_destroyed'] = !0x0;
        }
        ['play'](_0x545d77 = 0x0, _0x17b3e8 = 0x1, _0x39892d = 0x7fffffff, _0x1841f4 = 0x0, _0xc0c164 = 0x0) {
            if (!this['_templet'])
                throw new Error('AnimationP' + 'layer:temp' + 'let\x20must\x20n' + 'ot\x20be\x20null' + ',maybe\x20you' + '\x20need\x20to\x20s' + 'et\x20url.');
            if (_0x39892d < 0x0 || _0x1841f4 < 0x0 || _0xc0c164 < 0x0)
                throw new Error('AnimationP' + 'layer:over' + 'allDuratio' + 'n,playStar' + 't\x20and\x20play' + 'End\x20must\x20l' + 'arge\x20than\x20' + 'zero.');
            if (0x0 !== _0xc0c164 && _0x1841f4 > _0xc0c164)
                throw new Error('AnimationP' + 'layer:star' + 't\x20must\x20les' + 's\x20than\x20end' + '.');
            this['_currentTi' + 'me'] = 0x0, this['_currentFr' + 'ameTime'] = 0x0, this['_elapsedPl' + 'aybackTime'] = 0x0, this['playbackRa' + 'te'] = _0x17b3e8, this['_overallDu' + 'ration'] = _0x39892d, this['_playStart'] = _0x1841f4, this['_playEnd'] = _0xc0c164, this['_paused'] = !0x1, this['_currentAn' + 'imationCli' + 'pIndex'] = _0x545d77, this['_currentKe' + 'yframeInde' + 'x'] = 0x0, this['_startUpda' + 'teLoopCoun' + 't'] = _0x5a45c3['Stat']['loopCount'], this['event'](_0x5a45c3['Event']['PLAYED']), this['_calculate' + 'PlayDurati' + 'on'](), this['_update'](0x0);
        }
        ['playByFram' + 'e'](_0x253e28 = 0x0, _0x317e41 = 0x1, _0x560361 = 0x7fffffff, _0x1fe3f0 = 0x0, _0x1f0f6c = 0x0, _0x1ddeff = 0x1e) {
            var _0x4a48e6 = 0x3e8 / _0x1ddeff;
            this['play'](_0x253e28, _0x317e41, _0x560361, _0x1fe3f0 * _0x4a48e6, _0x1f0f6c * _0x4a48e6);
        }
        ['stop'](_0x13b519 = !0x0) {
            _0x13b519 ? (this['_currentTi' + 'me'] = this['_currentFr' + 'ameTime'] = this['_currentKe' + 'yframeInde' + 'x'] = 0x0, this['_currentAn' + 'imationCli' + 'pIndex'] = -0x1, this['event'](_0x5a45c3['Event']['STOPPED'])) : this['_stopWhenC' + 'ircleFinis' + 'h'] = !0x0;
        }
        ['destroy']() {
        }
    }
    class _0xf6f9f6 {
        constructor() {
        }
        static ['getBezierR' + 'ate'](_0x48094c, _0x17ff1c, _0x3797d7, _0x184734, _0x215f66) {
            var _0x307eb3 = _0xf6f9f6['_getBezier' + 'ParamKey'](_0x17ff1c, _0x3797d7, _0x184734, _0x215f66), _0x5797b3 = 0x64 * _0x307eb3 + _0x48094c;
            if (_0xf6f9f6['_bezierRes' + 'ultCache'][_0x5797b3])
                return _0xf6f9f6['_bezierRes' + 'ultCache'][_0x5797b3];
            var _0x306f06, _0x162922, _0x439b8a = _0xf6f9f6['_getBezier' + 'Points'](_0x17ff1c, _0x3797d7, _0x184734, _0x215f66, _0x307eb3);
            for (_0x162922 = _0x439b8a['length'], _0x306f06 = 0x0; _0x306f06 < _0x162922; _0x306f06 += 0x2)
                if (_0x48094c <= _0x439b8a[_0x306f06])
                    return _0xf6f9f6['_bezierRes' + 'ultCache'][_0x5797b3] = _0x439b8a[_0x306f06 + 0x1], _0x439b8a[_0x306f06 + 0x1];
            return _0xf6f9f6['_bezierRes' + 'ultCache'][_0x5797b3] = 0x1, 0x1;
        }
        static ['_getBezier' + 'ParamKey'](_0x1cde16, _0x3f4ca5, _0x2e73d1, _0x19c1d1) {
            return 0x64 * (0x64 * (0x64 * (0x64 * _0x1cde16 + _0x3f4ca5) + _0x2e73d1) + _0x19c1d1);
        }
        static ['_getBezier' + 'Points'](_0x18f28a, _0x2b5cdc, _0xbbde53, _0x4db66b, _0x5483db) {
            return _0xf6f9f6['_bezierPoi' + 'ntsCache'][_0x5483db] ? _0xf6f9f6['_bezierPoi' + 'ntsCache'][_0x5483db] : (_0x5aa8ef = [
                0x0,
                0x0,
                _0x18f28a,
                _0x2b5cdc,
                _0xbbde53,
                _0x4db66b,
                0x1,
                0x1
            ], _0x58343c = new _0x5a45c3['Bezier']()['getBezierP' + 'oints'](_0x5aa8ef, 0x64, 0x3), _0xf6f9f6['_bezierPoi' + 'ntsCache'][_0x5483db] = _0x58343c, _0x58343c);
            var _0x5aa8ef, _0x58343c;
        }
    }
    _0xf6f9f6['_bezierRes' + 'ultCache'] = {}, _0xf6f9f6['_bezierPoi' + 'ntsCache'] = {};
    class _0x1a2660 extends _0x5a45c3['Resource'] {
        constructor() {
            super(), this['_anis'] = [], this['_aniMap'] = {}, this['unfixedLas' + 'tAniIndex'] = -0x1, this['_fullFrame' + 's'] = null, this['_boneCurKe' + 'yFrm'] = [];
        }
        static ['_LinearInt' + 'erpolation' + '_0'](_0x628e9, _0x315714, _0x2952eb, _0x2011a6, _0xc853a3, _0x1d9021, _0x2bc087, _0x3c3b28, _0x575eb4, _0x3c6fdc = null) {
            return _0x2952eb[_0x2011a6] = _0xc853a3[_0x315714] + _0x1d9021 * _0x2bc087[_0x315714], 0x1;
        }
        static ['_Quaternio' + 'nInterpola' + 'tion_1'](_0x4aeb8c, _0x3fbb0b, _0xe43fb0, _0x418f65, _0x174384, _0xdb1621, _0x20bbac, _0x5590ae, _0x29c67c, _0x35b463 = null) {
            var _0x239a7f = 0x0 === _0x5590ae ? 0x0 : _0xdb1621 / _0x5590ae;
            return _0x5a45c3['MathUtil']['slerpQuate' + 'rnionArray'](_0x174384, _0x3fbb0b, _0x29c67c, _0x3fbb0b, _0x239a7f, _0xe43fb0, _0x418f65), 0x4;
        }
        static ['_AngleInte' + 'rpolation_' + '2'](_0x243b97, _0x2cc67c, _0x527aa3, _0x7bbe9f, _0x1c5447, _0x766ead, _0x5ad30f, _0x460991, _0x1f11f0, _0x3073ec = null) {
            return 0x0;
        }
        static ['_RadiansIn' + 'terpolatio' + 'n_3'](_0x352235, _0x55e54e, _0x581651, _0x421760, _0x36bc5a, _0x452857, _0x42463e, _0x5dc328, _0x590850, _0x117d15 = null) {
            return 0x0;
        }
        static ['_Matrix4x4' + 'Interpolat' + 'ion_4'](_0x2414d6, _0x5cb062, _0x2eb2de, _0x4297c6, _0x15d1ed, _0x41c6aa, _0x2e4b2c, _0x1c01a7, _0x58f660, _0x3a52fe = null) {
            for (var _0x8111fe = 0x0; _0x8111fe < 0x10; _0x8111fe++, _0x5cb062++)
                _0x2eb2de[_0x4297c6 + _0x8111fe] = _0x15d1ed[_0x5cb062] + _0x41c6aa * _0x2e4b2c[_0x5cb062];
            return 0x10;
        }
        static ['_NoInterpo' + 'lation_5'](_0x56e3c1, _0x368552, _0x2f6df7, _0x1c377c, _0x41481f, _0x5f2927, _0x317441, _0x53073a, _0x1e968c, _0x39e600 = null) {
            return _0x2f6df7[_0x1c377c] = _0x41481f[_0x368552], 0x1;
        }
        static ['_BezierInt' + 'erpolation' + '_6'](_0x2de7c9, _0x1bd637, _0x48d3b0, _0x3d4d44, _0x48b196, _0x4d6f23, _0x1cd9b3, _0x44fad6, _0x32d509, _0x1415e5 = null, _0x5e059e = 0x0) {
            return _0x48d3b0[_0x3d4d44] = _0x48b196[_0x1bd637] + (_0x32d509[_0x1bd637] - _0x48b196[_0x1bd637]) * _0xf6f9f6['getBezierR' + 'ate'](_0x4d6f23 / _0x44fad6, _0x1415e5[_0x5e059e], _0x1415e5[_0x5e059e + 0x1], _0x1415e5[_0x5e059e + 0x2], _0x1415e5[_0x5e059e + 0x3]), 0x5;
        }
        static ['_BezierInt' + 'erpolation' + '_7'](_0x52b70e, _0x37ecbc, _0x4728bd, _0x58c1c7, _0x63f816, _0x98280a, _0x22c3cf, _0x31a533, _0x1b87f0, _0x5e8e63 = null, _0x362835 = 0x0) {
            return _0x4728bd[_0x58c1c7] = _0x5e8e63[_0x362835 + 0x4] + _0x5e8e63[_0x362835 + 0x5] * _0xf6f9f6['getBezierR' + 'ate']((0.001 * _0x98280a + _0x5e8e63[_0x362835 + 0x6]) / _0x5e8e63[_0x362835 + 0x7], _0x5e8e63[_0x362835], _0x5e8e63[_0x362835 + 0x1], _0x5e8e63[_0x362835 + 0x2], _0x5e8e63[_0x362835 + 0x3]), 0x9;
        }
        ['parse'](_0x12b377) {
            var _0x78a870 = new _0x5a45c3['Byte'](_0x12b377);
            this['_aniVersio' + 'n'] = _0x78a870['readUTFStr' + 'ing'](), _0x55dcef['parse'](this, _0x78a870);
        }
        ['_calculate' + 'KeyFrame'](_0x151847, _0x2ef9a8, _0x29dd36) {
            var _0x26f9b5 = _0x151847['keyFrame'];
            _0x26f9b5[_0x2ef9a8] = _0x26f9b5[0x0];
            for (var _0x212e5e = 0x0; _0x212e5e < _0x2ef9a8; _0x212e5e++)
                for (var _0x5e1e54 = _0x26f9b5[_0x212e5e], _0x9dd35a = 0x0; _0x9dd35a < _0x29dd36; _0x9dd35a++)
                    _0x5e1e54['dData'][_0x9dd35a] = 0x0 === _0x5e1e54['duration'] ? 0x0 : (_0x26f9b5[_0x212e5e + 0x1]['data'][_0x9dd35a] - _0x5e1e54['data'][_0x9dd35a]) / _0x5e1e54['duration'], _0x5e1e54['nextData'][_0x9dd35a] = _0x26f9b5[_0x212e5e + 0x1]['data'][_0x9dd35a];
            _0x26f9b5['length']--;
        }
        ['_onAsynLoa' + 'ded'](_0x3af746, _0x14853a = null) {
            var _0x1686e8 = new _0x5a45c3['Byte'](_0x3af746);
            switch (this['_aniVersio' + 'n'] = _0x1686e8['readUTFStr' + 'ing'](), this['_aniVersio' + 'n']) {
            case 'LAYAANIMAT' + 'ION:02':
                _0x5bda49['parse'](this, _0x1686e8);
                break;
            default:
                _0x55dcef['parse'](this, _0x1686e8);
            }
        }
        ['getAnimati' + 'onCount']() {
            return this['_anis']['length'];
        }
        ['getAnimati' + 'on'](_0x2c3f06) {
            return this['_anis'][_0x2c3f06];
        }
        ['getAniDura' + 'tion'](_0xd6ab5e) {
            return this['_anis'][_0xd6ab5e]['playTime'];
        }
        ['getNodes'](_0x3a112a) {
            return this['_anis'][_0x3a112a]['nodes'];
        }
        ['getNodeInd' + 'exWithName'](_0x2ebc96, _0x1ef293) {
            return this['_anis'][_0x2ebc96]['bone3DMap'][_0x1ef293];
        }
        ['getNodeCou' + 'nt'](_0x1263b1) {
            return this['_anis'][_0x1263b1]['nodes']['length'];
        }
        ['getTotalke' + 'yframesLen' + 'gth'](_0x202c31) {
            return this['_anis'][_0x202c31]['totalKeyfr' + 'ameDatasLe' + 'ngth'];
        }
        ['getPublicE' + 'xtData']() {
            return this['_publicExt' + 'Data'];
        }
        ['getAnimati' + 'onDataWith' + 'Cache'](_0x4b02ec, _0x23e63c, _0x350c2f, _0x141c90) {
            var _0x2379e7 = _0x23e63c[_0x350c2f];
            if (_0x2379e7) {
                var _0x5bf16d = _0x2379e7[_0x4b02ec];
                return _0x5bf16d ? _0x5bf16d[_0x141c90] : null;
            }
            return null;
        }
        ['setAnimati' + 'onDataWith' + 'Cache'](_0x46f435, _0x6889f0, _0x43cf8d, _0x454dd8, _0x238857) {
            var _0x47f580 = _0x6889f0[_0x43cf8d] || (_0x6889f0[_0x43cf8d] = {});
            (_0x47f580[_0x46f435] || (_0x47f580[_0x46f435] = []))[_0x454dd8] = _0x238857;
        }
        ['getNodeKey' + 'Frame'](_0xf173e9, _0x4db78e, _0x406564) {
            var _0x40e39c = this['_boneCurKe' + 'yFrm'][_0x4db78e], _0x2836a9 = _0xf173e9['length'];
            (null == _0x40e39c || _0x40e39c >= _0x2836a9) && (_0x40e39c = this['_boneCurKe' + 'yFrm'][_0x4db78e] = 0x0);
            var _0x2d24e4 = _0xf173e9[_0x40e39c], _0x2d7af0 = _0x406564 - _0x2d24e4['startTime'];
            if (0x0 == _0x2d7af0 || _0x2d7af0 > 0x0 && _0x2d24e4['duration'] > _0x2d7af0)
                return _0x40e39c;
            var _0x5d65d9 = 0x0;
            if (_0x2d7af0 > 0x0) {
                for (_0x406564 += 0.01, _0x5d65d9 = _0x40e39c + 0x1; _0x5d65d9 < _0x2836a9; _0x5d65d9++)
                    if ((_0x2d24e4 = _0xf173e9[_0x5d65d9])['startTime'] <= _0x406564 && _0x2d24e4['startTime'] + _0x2d24e4['duration'] > _0x406564)
                        return this['_boneCurKe' + 'yFrm'][_0x4db78e] = _0x5d65d9, _0x5d65d9;
                return _0x2836a9 - 0x1;
            }
            for (_0x5d65d9 = 0x0; _0x5d65d9 < _0x40e39c; _0x5d65d9++)
                if ((_0x2d24e4 = _0xf173e9[_0x5d65d9])['startTime'] <= _0x406564 && _0x2d24e4['startTime'] + _0x2d24e4['duration'] > _0x406564)
                    return this['_boneCurKe' + 'yFrm'][_0x4db78e] = _0x5d65d9, _0x5d65d9;
            return _0x40e39c;
        }
        ['getOrigina' + 'lData'](_0x8996ae, _0x27af91, _0x9a0bf0, _0x5e5aff, _0xe25480) {
            var _0x1381f7 = this['_anis'][_0x8996ae]['nodes'], _0x403f30 = this['_boneCurKe' + 'yFrm'];
            _0x403f30['length'] < _0x1381f7['length'] && (_0x403f30['length'] = _0x1381f7['length']);
            for (var _0x41ea6d = 0x0, _0x47eef4 = 0x0, _0x3f1784 = _0x1381f7['length'], _0xf40e0e = 0x0; _0x47eef4 < _0x3f1784; _0x47eef4++) {
                var _0x56823b, _0x55158a = _0x1381f7[_0x47eef4], _0x38bb39 = _0x55158a['keyFrame'];
                _0x56823b = _0x38bb39[this['getNodeKey' + 'Frame'](_0x38bb39, _0x47eef4, _0xe25480)], _0x55158a['dataOffset'] = _0xf40e0e;
                var _0x292b6d = _0xe25480 - _0x56823b['startTime'], _0x57a626 = _0x55158a['lerpType'];
                if (_0x57a626)
                    switch (_0x57a626) {
                    case 0x0:
                    case 0x1:
                        for (_0x41ea6d = 0x0; _0x41ea6d < _0x55158a['keyframeWi' + 'dth'];)
                            _0x41ea6d += _0x55158a['interpolat' + 'ionMethod'][_0x41ea6d](_0x55158a, _0x41ea6d, _0x27af91, _0xf40e0e + _0x41ea6d, _0x56823b['data'], _0x292b6d, _0x56823b['dData'], _0x56823b['duration'], _0x56823b['nextData']);
                        break;
                    case 0x2:
                        var _0x5429e3 = _0x56823b['interpolat' + 'ionData'], _0x990c89 = _0x5429e3['length'], _0x5cd8f6 = 0x0;
                        for (_0x41ea6d = 0x0; _0x41ea6d < _0x990c89;) {
                            var _0x3f938d = _0x5429e3[_0x41ea6d];
                            switch (_0x3f938d) {
                            case 0x6:
                            case 0x7:
                                _0x41ea6d += _0x1a2660['interpolat' + 'ion'][_0x3f938d](_0x55158a, _0x5cd8f6, _0x27af91, _0xf40e0e + _0x5cd8f6, _0x56823b['data'], _0x292b6d, _0x56823b['dData'], _0x56823b['duration'], _0x56823b['nextData'], _0x5429e3, _0x41ea6d + 0x1);
                                break;
                            default:
                                _0x41ea6d += _0x1a2660['interpolat' + 'ion'][_0x3f938d](_0x55158a, _0x5cd8f6, _0x27af91, _0xf40e0e + _0x5cd8f6, _0x56823b['data'], _0x292b6d, _0x56823b['dData'], _0x56823b['duration'], _0x56823b['nextData']);
                            }
                            _0x5cd8f6++;
                        }
                    }
                else {
                    for (_0x41ea6d = 0x0; _0x41ea6d < _0x55158a['keyframeWi' + 'dth'];)
                        _0x41ea6d += _0x55158a['interpolat' + 'ionMethod'][_0x41ea6d](_0x55158a, _0x41ea6d, _0x27af91, _0xf40e0e + _0x41ea6d, _0x56823b['data'], _0x292b6d, _0x56823b['dData'], _0x56823b['duration'], _0x56823b['nextData']);
                }
                _0xf40e0e += _0x55158a['keyframeWi' + 'dth'];
            }
        }
        ['getNodesCu' + 'rrentFrame' + 'Index'](_0x422945, _0x59893b) {
            var _0x5306d3 = this['_anis'][_0x422945]['nodes'];
            _0x422945 !== this['unfixedLas' + 'tAniIndex'] && (this['unfixedCur' + 'rentFrameI' + 'ndexes'] = new Uint32Array(_0x5306d3['length']), this['unfixedCur' + 'rentTimes'] = new Float32Array(_0x5306d3['length']), this['unfixedLas' + 'tAniIndex'] = _0x422945);
            for (var _0x1318cb = 0x0, _0x10145c = _0x5306d3['length']; _0x1318cb < _0x10145c; _0x1318cb++) {
                var _0x125574 = _0x5306d3[_0x1318cb];
                for (_0x59893b < this['unfixedCur' + 'rentTimes'][_0x1318cb] && (this['unfixedCur' + 'rentFrameI' + 'ndexes'][_0x1318cb] = 0x0), this['unfixedCur' + 'rentTimes'][_0x1318cb] = _0x59893b; this['unfixedCur' + 'rentFrameI' + 'ndexes'][_0x1318cb] < _0x125574['keyFrame']['length'] && !(_0x125574['keyFrame'][this['unfixedCur' + 'rentFrameI' + 'ndexes'][_0x1318cb]]['startTime'] > this['unfixedCur' + 'rentTimes'][_0x1318cb]);)
                    this['unfixedCur' + 'rentFrameI' + 'ndexes'][_0x1318cb]++;
                this['unfixedCur' + 'rentFrameI' + 'ndexes'][_0x1318cb]--;
            }
            return this['unfixedCur' + 'rentFrameI' + 'ndexes'];
        }
        ['getOrigina' + 'lDataUnfix' + 'edRate'](_0x4162ea, _0x476119, _0x1cee26) {
            var _0x13cf9d = this['_anis'][_0x4162ea]['nodes'];
            _0x4162ea !== this['unfixedLas' + 'tAniIndex'] && (this['unfixedCur' + 'rentFrameI' + 'ndexes'] = new Uint32Array(_0x13cf9d['length']), this['unfixedCur' + 'rentTimes'] = new Float32Array(_0x13cf9d['length']), this['unfixedKey' + 'frames'] = [], this['unfixedLas' + 'tAniIndex'] = _0x4162ea);
            for (var _0x269c73 = 0x0, _0xbed94e = 0x0, _0xacca89 = _0x13cf9d['length'], _0x19bb68 = 0x0; _0xbed94e < _0xacca89; _0xbed94e++) {
                var _0x2ffaf3 = _0x13cf9d[_0xbed94e];
                for (_0x1cee26 < this['unfixedCur' + 'rentTimes'][_0xbed94e] && (this['unfixedCur' + 'rentFrameI' + 'ndexes'][_0xbed94e] = 0x0), this['unfixedCur' + 'rentTimes'][_0xbed94e] = _0x1cee26; this['unfixedCur' + 'rentFrameI' + 'ndexes'][_0xbed94e] < _0x2ffaf3['keyFrame']['length'] && !(_0x2ffaf3['keyFrame'][this['unfixedCur' + 'rentFrameI' + 'ndexes'][_0xbed94e]]['startTime'] > this['unfixedCur' + 'rentTimes'][_0xbed94e]);)
                    this['unfixedKey' + 'frames'][_0xbed94e] = _0x2ffaf3['keyFrame'][this['unfixedCur' + 'rentFrameI' + 'ndexes'][_0xbed94e]], this['unfixedCur' + 'rentFrameI' + 'ndexes'][_0xbed94e]++;
                var _0x3bb925 = this['unfixedKey' + 'frames'][_0xbed94e];
                _0x2ffaf3['dataOffset'] = _0x19bb68;
                var _0x3ca7a4 = _0x1cee26 - _0x3bb925['startTime'];
                if (_0x2ffaf3['lerpType'])
                    switch (_0x2ffaf3['lerpType']) {
                    case 0x0:
                    case 0x1:
                        for (_0x269c73 = 0x0; _0x269c73 < _0x2ffaf3['keyframeWi' + 'dth'];)
                            _0x269c73 += _0x2ffaf3['interpolat' + 'ionMethod'][_0x269c73](_0x2ffaf3, _0x269c73, _0x476119, _0x19bb68 + _0x269c73, _0x3bb925['data'], _0x3ca7a4, _0x3bb925['dData'], _0x3bb925['duration'], _0x3bb925['nextData']);
                        break;
                    case 0x2:
                        var _0x561f9e = _0x3bb925['interpolat' + 'ionData'], _0x1770f1 = _0x561f9e['length'], _0x22a1c2 = 0x0;
                        for (_0x269c73 = 0x0; _0x269c73 < _0x1770f1;) {
                            var _0x445f14 = _0x561f9e[_0x269c73];
                            switch (_0x445f14) {
                            case 0x6:
                            case 0x7:
                                _0x269c73 += _0x1a2660['interpolat' + 'ion'][_0x445f14](_0x2ffaf3, _0x22a1c2, _0x476119, _0x19bb68 + _0x22a1c2, _0x3bb925['data'], _0x3ca7a4, _0x3bb925['dData'], _0x3bb925['duration'], _0x3bb925['nextData'], _0x561f9e, _0x269c73 + 0x1);
                                break;
                            default:
                                _0x269c73 += _0x1a2660['interpolat' + 'ion'][_0x445f14](_0x2ffaf3, _0x22a1c2, _0x476119, _0x19bb68 + _0x22a1c2, _0x3bb925['data'], _0x3ca7a4, _0x3bb925['dData'], _0x3bb925['duration'], _0x3bb925['nextData']);
                            }
                            _0x22a1c2++;
                        }
                    }
                else {
                    for (_0x269c73 = 0x0; _0x269c73 < _0x2ffaf3['keyframeWi' + 'dth'];)
                        _0x269c73 += _0x2ffaf3['interpolat' + 'ionMethod'][_0x269c73](_0x2ffaf3, _0x269c73, _0x476119, _0x19bb68 + _0x269c73, _0x3bb925['data'], _0x3ca7a4, _0x3bb925['dData'], _0x3bb925['duration'], _0x3bb925['nextData']);
                }
                _0x19bb68 += _0x2ffaf3['keyframeWi' + 'dth'];
            }
        }
    }
    _0x1a2660['interpolat' + 'ion'] = [
        _0x1a2660['_LinearInt' + 'erpolation' + '_0'],
        _0x1a2660['_Quaternio' + 'nInterpola' + 'tion_1'],
        _0x1a2660['_AngleInte' + 'rpolation_' + '2'],
        _0x1a2660['_RadiansIn' + 'terpolatio' + 'n_3'],
        _0x1a2660['_Matrix4x4' + 'Interpolat' + 'ion_4'],
        _0x1a2660['_NoInterpo' + 'lation_5'],
        _0x1a2660['_BezierInt' + 'erpolation' + '_6'],
        _0x1a2660['_BezierInt' + 'erpolation' + '_7']
    ], _0x458972['AnimationT' + 'emplet'] = _0x1a2660;
    class _0x15601c extends _0x5a45c3['Graphics'] {
        ['drawSkin'](_0x4f789d, _0x45bc0a) {
            this['drawTriang' + 'les'](_0x4f789d['texture'], 0x0, 0x0, _0x4f789d['vertices'], _0x4f789d['uvs'], _0x4f789d['indexes'], _0x4f789d['transform'] || _0x5a45c3['Matrix']['EMPTY'], _0x45bc0a);
        }
        static ['create']() {
            return _0x15601c['_caches']['pop']() || new _0x15601c();
        }
        static ['recycle'](_0x2bfe63) {
            _0x2bfe63['clear'](), _0x15601c['_caches']['push'](_0x2bfe63);
        }
    }
    _0x15601c['_caches'] = [];
    class _0x12880e {
        constructor() {
            this['skX'] = 0x0, this['skY'] = 0x0, this['scX'] = 0x1, this['scY'] = 0x1, this['x'] = 0x0, this['y'] = 0x0, this['skewX'] = 0x0, this['skewY'] = 0x0;
        }
        ['initData'](_0x1fad44) {
            null != _0x1fad44['x'] && (this['x'] = _0x1fad44['x']), null != _0x1fad44['y'] && (this['y'] = _0x1fad44['y']), null != _0x1fad44['skX'] && (this['skX'] = _0x1fad44['skX']), null != _0x1fad44['skY'] && (this['skY'] = _0x1fad44['skY']), null != _0x1fad44['scX'] && (this['scX'] = _0x1fad44['scX']), null != _0x1fad44['scY'] && (this['scY'] = _0x1fad44['scY']);
        }
        ['getMatrix']() {
            var _0xb85c59;
            return (_0xb85c59 = this['mMatrix'] ? this['mMatrix'] : this['mMatrix'] = new _0x5a45c3['Matrix']())['identity'](), _0xb85c59['scale'](this['scX'], this['scY']), (this['skewX'] || this['skewY']) && this['skew'](_0xb85c59, this['skewX'] * Math['PI'] / 0xb4, this['skewY'] * Math['PI'] / 0xb4), _0xb85c59['rotate'](this['skX'] * Math['PI'] / 0xb4), _0xb85c59['translate'](this['x'], this['y']), _0xb85c59;
        }
        ['skew'](_0x1d7014, _0x4fadb3, _0x5f2993) {
            var _0x2b9018 = Math['sin'](_0x5f2993), _0x463c36 = Math['cos'](_0x5f2993), _0x1b20bf = Math['sin'](_0x4fadb3), _0x568940 = Math['cos'](_0x4fadb3);
            return _0x1d7014['setTo'](_0x1d7014['a'] * _0x568940 - _0x1d7014['b'] * _0x2b9018, _0x1d7014['a'] * _0x1b20bf + _0x1d7014['b'] * _0x463c36, _0x1d7014['c'] * _0x568940 - _0x1d7014['d'] * _0x2b9018, _0x1d7014['c'] * _0x1b20bf + _0x1d7014['d'] * _0x463c36, _0x1d7014['tx'] * _0x568940 - _0x1d7014['ty'] * _0x2b9018, _0x1d7014['tx'] * _0x1b20bf + _0x1d7014['ty'] * _0x463c36), _0x1d7014;
        }
    }
    class _0x4ddd9a {
        constructor() {
            this['length'] = 0xa, this['resultTran' + 'sform'] = new _0x12880e(), this['resultMatr' + 'ix'] = new _0x5a45c3['Matrix'](), this['inheritSca' + 'le'] = !0x0, this['inheritRot' + 'ation'] = !0x0, this['d'] = -0x1, this['_children'] = [];
        }
        ['setTempMat' + 'rix'](_0x2517af) {
            this['_tempMatri' + 'x'] = _0x2517af;
            var _0x4bc2f8, _0x373356 = 0x0;
            for (_0x373356 = 0x0, _0x4bc2f8 = this['_children']['length']; _0x373356 < _0x4bc2f8; _0x373356++)
                this['_children'][_0x373356]['setTempMat' + 'rix'](this['_tempMatri' + 'x']);
        }
        ['update'](_0x2aa7ba = null) {
            var _0x57bab4;
            if (this['rotation'] = this['transform']['skX'], _0x2aa7ba)
                _0x57bab4 = this['resultTran' + 'sform']['getMatrix'](), _0x5a45c3['Matrix']['mul'](_0x57bab4, _0x2aa7ba, this['resultMatr' + 'ix']), this['resultRota' + 'tion'] = this['rotation'];
            else {
                if (this['resultRota' + 'tion'] = this['rotation'] + this['parentBone']['resultRota' + 'tion'], this['parentBone']) {
                    if (this['inheritRot' + 'ation'] && this['inheritSca' + 'le'])
                        _0x57bab4 = this['resultTran' + 'sform']['getMatrix'](), _0x5a45c3['Matrix']['mul'](_0x57bab4, this['parentBone']['resultMatr' + 'ix'], this['resultMatr' + 'ix']);
                    else {
                        var _0x33d6cd, _0x361fee, _0x1464f5, _0x3d09e5 = this['parentBone'], _0x3c68b8 = this['parentBone']['resultMatr' + 'ix'];
                        _0x57bab4 = this['resultTran' + 'sform']['getMatrix']();
                        var _0x58fd1a = _0x3c68b8['a'] * _0x57bab4['tx'] + _0x3c68b8['c'] * _0x57bab4['ty'] + _0x3c68b8['tx'], _0x20dcb4 = _0x3c68b8['b'] * _0x57bab4['tx'] + _0x3c68b8['d'] * _0x57bab4['ty'] + _0x3c68b8['ty'], _0x305bd9 = new _0x5a45c3['Matrix']();
                        this['inheritRot' + 'ation'] ? (_0x33d6cd = Math['atan2'](_0x3d09e5['resultMatr' + 'ix']['b'], _0x3d09e5['resultMatr' + 'ix']['a']), _0x361fee = Math['cos'](_0x33d6cd), _0x1464f5 = Math['sin'](_0x33d6cd), _0x305bd9['setTo'](_0x361fee, _0x1464f5, -_0x1464f5, _0x361fee, 0x0, 0x0), _0x5a45c3['Matrix']['mul'](this['_tempMatri' + 'x'], _0x305bd9, _0x5a45c3['Matrix']['TEMP']), _0x5a45c3['Matrix']['TEMP']['copyTo'](_0x305bd9), _0x57bab4 = this['resultTran' + 'sform']['getMatrix'](), _0x5a45c3['Matrix']['mul'](_0x57bab4, _0x305bd9, this['resultMatr' + 'ix']), this['resultTran' + 'sform']['scX'] * this['resultTran' + 'sform']['scY'] < 0x0 && this['resultMatr' + 'ix']['rotate'](0.5 * Math['PI']), this['resultMatr' + 'ix']['tx'] = _0x58fd1a, this['resultMatr' + 'ix']['ty'] = _0x20dcb4) : (this['inheritSca' + 'le'], _0x57bab4 = this['resultTran' + 'sform']['getMatrix'](), _0x5a45c3['Matrix']['TEMP']['identity'](), _0x5a45c3['Matrix']['TEMP']['d'] = this['d'], _0x5a45c3['Matrix']['mul'](_0x57bab4, _0x5a45c3['Matrix']['TEMP'], this['resultMatr' + 'ix']), this['resultMatr' + 'ix']['tx'] = _0x58fd1a, this['resultMatr' + 'ix']['ty'] = _0x20dcb4);
                    }
                } else
                    (_0x57bab4 = this['resultTran' + 'sform']['getMatrix']())['copyTo'](this['resultMatr' + 'ix']);
            }
            var _0x46d98d, _0x443edd = 0x0;
            for (_0x443edd = 0x0, _0x46d98d = this['_children']['length']; _0x443edd < _0x46d98d; _0x443edd++)
                this['_children'][_0x443edd]['update']();
        }
        ['updateChil' + 'd']() {
            var _0x140887, _0x3f87f9 = 0x0;
            for (_0x3f87f9 = 0x0, _0x140887 = this['_children']['length']; _0x3f87f9 < _0x140887; _0x3f87f9++)
                this['_children'][_0x3f87f9]['update']();
        }
        ['setRotatio' + 'n'](_0x142472) {
            this['_sprite'] && (this['_sprite']['rotation'] = 0xb4 * _0x142472 / Math['PI']);
        }
        ['updateDraw'](_0x4a6144, _0x2ffdaf) {
            _0x4ddd9a['ShowBones'] && !_0x4ddd9a['ShowBones'][this['name']] || (this['_sprite'] ? (this['_sprite']['x'] = _0x4a6144 + this['resultMatr' + 'ix']['tx'], this['_sprite']['y'] = _0x2ffdaf + this['resultMatr' + 'ix']['ty']) : (this['_sprite'] = new _0x5a45c3['Sprite'](), this['_sprite']['graphics']['drawCircle'](0x0, 0x0, 0x5, '#ff0000'), this['_sprite']['graphics']['drawLine'](0x0, 0x0, this['length'], 0x0, '#00ff00'), this['_sprite']['graphics']['fillText'](this['name'], 0x0, 0x0, '20px\x20Arial', '#00ff00', 'center'), _0x5a45c3['ILaya']['stage']['addChild'](this['_sprite']), this['_sprite']['x'] = _0x4a6144 + this['resultMatr' + 'ix']['tx'], this['_sprite']['y'] = _0x2ffdaf + this['resultMatr' + 'ix']['ty']));
            var _0x52f531, _0x5c382e = 0x0;
            for (_0x5c382e = 0x0, _0x52f531 = this['_children']['length']; _0x5c382e < _0x52f531; _0x5c382e++)
                this['_children'][_0x5c382e]['updateDraw'](_0x4a6144, _0x2ffdaf);
        }
        ['addChild'](_0x3bbfc1) {
            this['_children']['push'](_0x3bbfc1), _0x3bbfc1['parentBone'] = this;
        }
        ['findBone'](_0x1f4dd3) {
            if (this['name'] == _0x1f4dd3)
                return this;
            var _0x85ed37, _0x2711a1, _0x35954a;
            for (_0x85ed37 = 0x0, _0x2711a1 = this['_children']['length']; _0x85ed37 < _0x2711a1; _0x85ed37++)
                if (_0x35954a = this['_children'][_0x85ed37]['findBone'](_0x1f4dd3))
                    return _0x35954a;
            return null;
        }
        ['localToWor' + 'ld'](_0x306c70) {
            var _0x56309c = _0x306c70[0x0], _0x1a85a3 = _0x306c70[0x1];
            _0x306c70[0x0] = _0x56309c * this['resultMatr' + 'ix']['a'] + _0x1a85a3 * this['resultMatr' + 'ix']['c'] + this['resultMatr' + 'ix']['tx'], _0x306c70[0x1] = _0x56309c * this['resultMatr' + 'ix']['b'] + _0x1a85a3 * this['resultMatr' + 'ix']['d'] + this['resultMatr' + 'ix']['ty'];
        }
    }
    _0x4ddd9a['ShowBones'] = {};
    class _0x25f426 {
        constructor() {
        }
        static ['getRelativ' + 'eUV'](_0x58c0a3, _0x79d1ed, _0x2ee1c4 = null) {
            var _0x14db88, _0x245e06, _0x5341f2 = _0x58c0a3[0x0], _0x30f480 = _0x58c0a3[0x2] - _0x58c0a3[0x0], _0x472af3 = _0x58c0a3[0x1], _0x514377 = _0x58c0a3[0x5] - _0x58c0a3[0x1];
            _0x2ee1c4 || (_0x2ee1c4 = []), _0x2ee1c4['length'] = _0x79d1ed['length'], _0x245e06 = _0x2ee1c4['length'];
            var _0xf81c8e = 0x1 / _0x30f480, _0x5d6882 = 0x1 / _0x514377;
            for (_0x14db88 = 0x0; _0x14db88 < _0x245e06; _0x14db88 += 0x2)
                _0x2ee1c4[_0x14db88] = (_0x79d1ed[_0x14db88] - _0x5341f2) * _0xf81c8e, _0x2ee1c4[_0x14db88 + 0x1] = (_0x79d1ed[_0x14db88 + 0x1] - _0x472af3) * _0x5d6882;
            return _0x2ee1c4;
        }
        static ['getAbsolut' + 'eUV'](_0x1405a4, _0x32cdc8, _0x458ab1 = null) {
            if (0x0 == _0x1405a4[0x0] && 0x0 == _0x1405a4[0x1] && 0x1 == _0x1405a4[0x4] && 0x1 == _0x1405a4[0x5])
                return _0x458ab1 ? (_0x5a45c3['Utils']['copyArray'](_0x458ab1, _0x32cdc8), _0x458ab1) : _0x32cdc8;
            var _0x12f657, _0x212c44, _0x98bda4 = _0x1405a4[0x0], _0x1b2710 = _0x1405a4[0x2] - _0x1405a4[0x0], _0x8b9c74 = _0x1405a4[0x1], _0x4872bd = _0x1405a4[0x5] - _0x1405a4[0x1];
            for (_0x458ab1 || (_0x458ab1 = []), _0x458ab1['length'] = _0x32cdc8['length'], _0x212c44 = _0x458ab1['length'], _0x12f657 = 0x0; _0x12f657 < _0x212c44; _0x12f657 += 0x2)
                _0x458ab1[_0x12f657] = _0x32cdc8[_0x12f657] * _0x1b2710 + _0x98bda4, _0x458ab1[_0x12f657 + 0x1] = _0x32cdc8[_0x12f657 + 0x1] * _0x4872bd + _0x8b9c74;
            return _0x458ab1;
        }
    }
    class _0x3332dd {
        constructor() {
            this['uvs'] = new Float32Array([
                0x0,
                0x0,
                0x1,
                0x0,
                0x1,
                0x1,
                0x0,
                0x1
            ]), this['vertices'] = new Float32Array([
                0x0,
                0x0,
                0x64,
                0x0,
                0x64,
                0x64,
                0x0,
                0x64
            ]), this['indexes'] = new Uint16Array([
                0x0,
                0x1,
                0x3,
                0x3,
                0x1,
                0x2
            ]), this['useUvTrans' + 'form'] = !0x1, this['canvasPadd' + 'ing'] = 0x1;
        }
        ['getBounds']() {
            return _0x5a45c3['Rectangle']['_getWrapRe' + 'c'](this['vertices']);
        }
    }
    class _0xe35448 extends _0x3332dd {
        constructor() {
            super();
        }
        ['init2'](_0x489eae, _0x5a33be, _0x46137f, _0x111243) {
            this['transform'] && (this['transform'] = null);
            var _0x1831dc = _0x5a33be || [
                0x0,
                0x1,
                0x3,
                0x3,
                0x1,
                0x2
            ];
            this['texture'] = _0x489eae, this['indexes'] = new Uint16Array(_0x1831dc), this['vertices'] = new Float32Array(_0x46137f), this['uvs'] = new Float32Array(_0x111243);
        }
    }
    class _0x26972d {
        constructor() {
            this['srcDisplay' + 'Index'] = -0x1, this['type'] = 'src', this['displayInd' + 'ex'] = -0x1, this['originalIn' + 'dex'] = -0x1, this['_replaceDi' + 'c'] = {};
        }
        ['showSlotDa' + 'ta'](_0x15570e, _0x519e00 = !0x0) {
            this['currSlotDa' + 'ta'] = _0x15570e, _0x519e00 && (this['displayInd' + 'ex'] = this['srcDisplay' + 'Index']), this['currDispla' + 'yData'] = null, this['currTextur' + 'e'] = null;
        }
        ['showDispla' + 'yByName'](_0x279799) {
            this['currSlotDa' + 'ta'] && this['showDispla' + 'yByIndex'](this['currSlotDa' + 'ta']['getDisplay' + 'ByName'](_0x279799));
        }
        ['replaceDis' + 'playByName'](_0x3b2302, _0xf6a50b) {
            var _0x438cdd, _0x4472c5;
            this['currSlotDa' + 'ta'] && (_0x438cdd = this['currSlotDa' + 'ta']['getDisplay' + 'ByName'](_0x3b2302), _0x4472c5 = this['currSlotDa' + 'ta']['getDisplay' + 'ByName'](_0xf6a50b), this['replaceDis' + 'playByInde' + 'x'](_0x438cdd, _0x4472c5));
        }
        ['replaceDis' + 'playByInde' + 'x'](_0x395328, _0x55058d) {
            this['currSlotDa' + 'ta'] && (this['_replaceDi' + 'c'][_0x395328] = _0x55058d, this['originalIn' + 'dex'] == _0x395328 && this['showDispla' + 'yByIndex'](_0x395328));
        }
        ['showDispla' + 'yByIndex'](_0x4e07af) {
            if (this['originalIn' + 'dex'] = _0x4e07af, null != this['_replaceDi' + 'c'][_0x4e07af] && (_0x4e07af = this['_replaceDi' + 'c'][_0x4e07af]), this['currSlotDa' + 'ta'] && _0x4e07af > -0x1 && _0x4e07af < this['currSlotDa' + 'ta']['displayArr']['length']) {
                if (this['displayInd' + 'ex'] = _0x4e07af, this['currDispla' + 'yData'] = this['currSlotDa' + 'ta']['displayArr'][_0x4e07af], this['currDispla' + 'yData']) {
                    var _0x33ac48 = this['currDispla' + 'yData']['name'];
                    this['currTextur' + 'e'] = this['templet']['getTexture'](_0x33ac48), this['currTextur' + 'e'] && 0x0 == this['currDispla' + 'yData']['type'] && this['currDispla' + 'yData']['uvs'] && (this['currTextur' + 'e'] = this['currDispla' + 'yData']['createText' + 'ure'](this['currTextur' + 'e']));
                }
            } else
                this['displayInd' + 'ex'] = -0x1, this['currDispla' + 'yData'] = null, this['currTextur' + 'e'] = null;
        }
        ['replaceSki' + 'n'](_0x496def) {
            this['_diyTextur' + 'e'] = _0x496def, this['_curDiyUV'] && (this['_curDiyUV']['length'] = 0x0), this['currDispla' + 'yData'] && this['_diyTextur' + 'e'] == this['currDispla' + 'yData']['texture'] && (this['_diyTextur' + 'e'] = null);
        }
        ['setParentM' + 'atrix'](_0x24a767) {
            this['_parentMat' + 'rix'] = _0x24a767;
        }
        static ['createSkin' + 'Mesh']() {
            return new _0xe35448();
        }
        static ['isSameArr'](_0x371f3f, _0x1db1cd) {
            if (_0x371f3f['length'] != _0x1db1cd['length'])
                return !0x1;
            var _0x3dba99, _0xc01fcd;
            for (_0xc01fcd = _0x371f3f['length'], _0x3dba99 = 0x0; _0x3dba99 < _0xc01fcd; _0x3dba99++)
                if (_0x371f3f[_0x3dba99] != _0x1db1cd[_0x3dba99])
                    return !0x1;
            return !0x0;
        }
        ['getSaveVer' + 'ticle'](_0x25e438) {
            return _0x26972d['useSameMat' + 'rixAndVert' + 'icle'] && this['_preGraphi' + 'cVerticle'] && _0x26972d['isSameArr'](_0x25e438, this['_preGraphi' + 'cVerticle']) ? _0x25e438 = this['_preGraphi' + 'cVerticle'] : (_0x25e438 = _0x5a45c3['ILaya']['Utils']['copyArray']([], _0x25e438), this['_preGraphi' + 'cVerticle'] = _0x25e438), _0x25e438;
        }
        static ['isSameMatr' + 'ix'](_0x57ca54, _0x464bd2) {
            return _0x57ca54['a'] == _0x464bd2['a'] && _0x57ca54['b'] == _0x464bd2['b'] && _0x57ca54['c'] == _0x464bd2['c'] && _0x57ca54['d'] == _0x464bd2['d'] && Math['abs'](_0x57ca54['tx'] - _0x464bd2['tx']) < 0.00001 && Math['abs'](_0x57ca54['ty'] - _0x464bd2['ty']) < 0.00001;
        }
        ['getSaveMat' + 'rix'](_0x4247ce) {
            if (_0x26972d['useSameMat' + 'rixAndVert' + 'icle'] && this['_preGraphi' + 'cMatrix'] && _0x26972d['isSameMatr' + 'ix'](_0x4247ce, this['_preGraphi' + 'cMatrix']))
                _0x4247ce = this['_preGraphi' + 'cMatrix'];
            else {
                var _0x54c26f = _0x4247ce['clone']();
                _0x4247ce = _0x54c26f, this['_preGraphi' + 'cMatrix'] = _0x4247ce;
            }
            return _0x4247ce;
        }
        ['draw'](_0x95d474, _0x5cdcf4, _0x5d483d = !0x1, _0x3b8e34 = 0x1) {
            if ((null != this['_diyTextur' + 'e'] || null != this['currTextur' + 'e']) && null != this['currDispla' + 'yData'] || this['currDispla' + 'yData'] && 0x3 == this['currDispla' + 'yData']['type']) {
                var _0x4b07b5, _0xd6d4e9 = this['currTextur' + 'e'];
                switch (this['_diyTextur' + 'e'] && (_0xd6d4e9 = this['_diyTextur' + 'e']), this['currDispla' + 'yData']['type']) {
                case 0x0:
                    if (_0x95d474) {
                        var _0x35c504 = this['getDisplay' + 'Matrix']();
                        if (this['_parentMat' + 'rix']) {
                            var _0x54b641 = !0x1;
                            if (_0x35c504) {
                                var _0x176211;
                                if (_0x5a45c3['Matrix']['mul'](_0x35c504, this['_parentMat' + 'rix'], _0x5a45c3['Matrix']['TEMP']), _0x5d483d ? (null == this['_resultMat' + 'rix'] && (this['_resultMat' + 'rix'] = new _0x5a45c3['Matrix']()), _0x176211 = this['_resultMat' + 'rix']) : _0x176211 = _0x26972d['_tempResul' + 'tMatrix'], this['_diyTextur' + 'e'] && this['currDispla' + 'yData']['uvs']) {
                                    var _0x4b7f8f = _0x26972d['_tempMatri' + 'x'];
                                    _0x4b7f8f['identity'](), this['currDispla' + 'yData']['uvs'][0x1] > this['currDispla' + 'yData']['uvs'][0x5] && (_0x4b7f8f['d'] = -0x1), this['currDispla' + 'yData']['uvs'][0x0] > this['currDispla' + 'yData']['uvs'][0x4] && this['currDispla' + 'yData']['uvs'][0x1] > this['currDispla' + 'yData']['uvs'][0x5] && (_0x54b641 = !0x0, _0x4b7f8f['rotate'](-Math['PI'] / 0x2)), _0x5a45c3['Matrix']['mul'](_0x4b7f8f, _0x5a45c3['Matrix']['TEMP'], _0x176211);
                                } else
                                    _0x5a45c3['Matrix']['TEMP']['copyTo'](_0x176211);
                                _0x5d483d || (_0x176211 = this['getSaveMat' + 'rix'](_0x176211)), _0x176211['_checkTran' + 'sform'](), _0x54b641 ? _0x95d474['drawTextur' + 'e'](_0xd6d4e9, -this['currDispla' + 'yData']['height'] / 0x2, -this['currDispla' + 'yData']['width'] / 0x2, this['currDispla' + 'yData']['height'], this['currDispla' + 'yData']['width'], _0x176211, _0x3b8e34) : _0x95d474['drawTextur' + 'e'](_0xd6d4e9, -this['currDispla' + 'yData']['width'] / 0x2, -this['currDispla' + 'yData']['height'] / 0x2, this['currDispla' + 'yData']['width'], this['currDispla' + 'yData']['height'], _0x176211, _0x3b8e34);
                            }
                        }
                    }
                    break;
                case 0x1:
                    if (_0x5d483d ? (null == this['_skinSprit' + 'e'] && (this['_skinSprit' + 'e'] = _0x26972d['createSkin' + 'Mesh']()), _0x4b07b5 = this['_skinSprit' + 'e']) : _0x4b07b5 = _0x26972d['createSkin' + 'Mesh'](), null == _0x4b07b5)
                        return;
                    var _0x42bb4b;
                    if (null == this['currDispla' + 'yData']['bones']) {
                        var _0x4d1fb3, _0x50d994 = this['currDispla' + 'yData']['weights'];
                        this['deformData'] && (_0x50d994 = this['deformData']), this['_diyTextur' + 'e'] ? (this['_curDiyUV'] || (this['_curDiyUV'] = []), 0x0 == this['_curDiyUV']['length'] && (this['_curDiyUV'] = _0x25f426['getRelativ' + 'eUV'](this['currTextur' + 'e']['uv'], this['currDispla' + 'yData']['uvs'], this['_curDiyUV']), this['_curDiyUV'] = _0x25f426['getAbsolut' + 'eUV'](this['_diyTextur' + 'e']['uv'], this['_curDiyUV'], this['_curDiyUV'])), _0x4d1fb3 = this['_curDiyUV']) : _0x4d1fb3 = this['currDispla' + 'yData']['uvs'], this['_mVerticle' + 'Arr'] = _0x50d994, this['currDispla' + 'yData']['triangles']['length'], (_0x42bb4b = this['currDispla' + 'yData']['triangles'], this['deformData'] && (_0x5d483d || (this['_mVerticle' + 'Arr'] = this['getSaveVer' + 'ticle'](this['_mVerticle' + 'Arr']))), _0x4b07b5['init2'](_0xd6d4e9, _0x42bb4b, this['_mVerticle' + 'Arr'], _0x4d1fb3));
                        var _0xb7a3, _0x305b14 = this['getDisplay' + 'Matrix']();
                        if (this['_parentMat' + 'rix']) {
                            if (_0x305b14)
                                _0x5a45c3['Matrix']['mul'](_0x305b14, this['_parentMat' + 'rix'], _0x5a45c3['Matrix']['TEMP']), _0x5d483d ? (null == this['_resultMat' + 'rix'] && (this['_resultMat' + 'rix'] = new _0x5a45c3['Matrix']()), _0xb7a3 = this['_resultMat' + 'rix']) : _0xb7a3 = _0x26972d['_tempResul' + 'tMatrix'], _0x5a45c3['Matrix']['TEMP']['copyTo'](_0xb7a3), _0x5d483d || (_0xb7a3 = this['getSaveMat' + 'rix'](_0xb7a3)), _0x4b07b5['transform'] = _0xb7a3;
                        }
                    } else
                        this['skinMesh'](_0x5cdcf4, _0x4b07b5);
                    _0x95d474['drawSkin'](_0x4b07b5, _0x3b8e34);
                    break;
                case 0x2:
                    if (_0x5d483d ? (null == this['_skinSprit' + 'e'] && (this['_skinSprit' + 'e'] = _0x26972d['createSkin' + 'Mesh']()), _0x4b07b5 = this['_skinSprit' + 'e']) : _0x4b07b5 = _0x26972d['createSkin' + 'Mesh'](), null == _0x4b07b5)
                        return;
                    this['skinMesh'](_0x5cdcf4, _0x4b07b5), _0x95d474['drawSkin'](_0x4b07b5, _0x3b8e34);
                }
            }
        }
        ['skinMesh'](_0x4c8426, _0x40698e) {
            var _0x4dc312, _0x31b47d = this['currTextur' + 'e'], _0x422a4f = this['currDispla' + 'yData']['bones'];
            this['_diyTextur' + 'e'] ? (_0x31b47d = this['_diyTextur' + 'e'], this['_curDiyUV'] || (this['_curDiyUV'] = []), 0x0 == this['_curDiyUV']['length'] && (this['_curDiyUV'] = _0x25f426['getRelativ' + 'eUV'](this['currTextur' + 'e']['uv'], this['currDispla' + 'yData']['uvs'], this['_curDiyUV']), this['_curDiyUV'] = _0x25f426['getAbsolut' + 'eUV'](this['_diyTextur' + 'e']['uv'], this['_curDiyUV'], this['_curDiyUV'])), _0x4dc312 = this['_curDiyUV']) : _0x4dc312 = this['currDispla' + 'yData']['uvs'];
            var _0x8a38f8, _0x5507e6, _0x22fca6, _0x2b96a5, _0x12e01, _0x4cf3fc = this['currDispla' + 'yData']['weights'], _0xbf3e11 = this['currDispla' + 'yData']['triangles'], _0x204609 = 0x0, _0x1625bf = 0x0, _0xfab2b0 = 0x0, _0x4c5e75 = 0x0, _0x215077 = 0x0, _0x59acca = 0x0, _0x273dcb = 0x0;
            if (_0x26972d['_tempVerti' + 'cleArr']['length'] = 0x0, _0x12e01 = _0x26972d['_tempVerti' + 'cleArr'], this['deformData'] && this['deformData']['length'] > 0x0) {
                var _0x53f556 = 0x0;
                for (_0x59acca = 0x0, _0x273dcb = _0x422a4f['length']; _0x59acca < _0x273dcb;) {
                    for (_0xfab2b0 = _0x422a4f[_0x59acca++] + _0x59acca, _0x204609 = 0x0, _0x1625bf = 0x0; _0x59acca < _0xfab2b0; _0x59acca++)
                        _0x5507e6 = _0x4c8426[_0x422a4f[_0x59acca]], _0x22fca6 = _0x4cf3fc[_0x4c5e75] + this['deformData'][_0x53f556++], _0x2b96a5 = _0x4cf3fc[_0x4c5e75 + 0x1] + this['deformData'][_0x53f556++], _0x215077 = _0x4cf3fc[_0x4c5e75 + 0x2], _0x204609 += (_0x22fca6 * _0x5507e6['a'] + _0x2b96a5 * _0x5507e6['c'] + _0x5507e6['tx']) * _0x215077, _0x1625bf += (_0x22fca6 * _0x5507e6['b'] + _0x2b96a5 * _0x5507e6['d'] + _0x5507e6['ty']) * _0x215077, _0x4c5e75 += 0x3;
                    _0x12e01['push'](_0x204609, _0x1625bf);
                }
            } else
                for (_0x59acca = 0x0, _0x273dcb = _0x422a4f['length']; _0x59acca < _0x273dcb;) {
                    for (_0xfab2b0 = _0x422a4f[_0x59acca++] + _0x59acca, _0x204609 = 0x0, _0x1625bf = 0x0; _0x59acca < _0xfab2b0; _0x59acca++)
                        _0x5507e6 = _0x4c8426[_0x422a4f[_0x59acca]], _0x22fca6 = _0x4cf3fc[_0x4c5e75], _0x2b96a5 = _0x4cf3fc[_0x4c5e75 + 0x1], _0x215077 = _0x4cf3fc[_0x4c5e75 + 0x2], _0x204609 += (_0x22fca6 * _0x5507e6['a'] + _0x2b96a5 * _0x5507e6['c'] + _0x5507e6['tx']) * _0x215077, _0x1625bf += (_0x22fca6 * _0x5507e6['b'] + _0x2b96a5 * _0x5507e6['d'] + _0x5507e6['ty']) * _0x215077, _0x4c5e75 += 0x3;
                    _0x12e01['push'](_0x204609, _0x1625bf);
                }
            this['_mVerticle' + 'Arr'] = _0x12e01, _0x8a38f8 = _0xbf3e11, this['_mVerticle' + 'Arr'] = this['getSaveVer' + 'ticle'](this['_mVerticle' + 'Arr']), _0x40698e['init2'](_0x31b47d, _0x8a38f8, this['_mVerticle' + 'Arr'], _0x4dc312);
        }
        ['drawBonePo' + 'int'](_0xcb5e1) {
            _0xcb5e1 && this['_parentMat' + 'rix'] && _0xcb5e1['drawCircle'](this['_parentMat' + 'rix']['tx'], this['_parentMat' + 'rix']['ty'], 0x5, '#ff0000');
        }
        ['getDisplay' + 'Matrix']() {
            return this['currDispla' + 'yData'] ? this['currDispla' + 'yData']['transform']['getMatrix']() : null;
        }
        ['getMatrix']() {
            return this['_resultMat' + 'rix'];
        }
        ['copy']() {
            var _0x2ffb99 = new _0x26972d();
            return _0x2ffb99['type'] = 'copy', _0x2ffb99['name'] = this['name'], _0x2ffb99['attachment' + 'Name'] = this['attachment' + 'Name'], _0x2ffb99['srcDisplay' + 'Index'] = this['srcDisplay' + 'Index'], _0x2ffb99['parent'] = this['parent'], _0x2ffb99['displayInd' + 'ex'] = this['displayInd' + 'ex'], _0x2ffb99['templet'] = this['templet'], _0x2ffb99['currSlotDa' + 'ta'] = this['currSlotDa' + 'ta'], _0x2ffb99['currTextur' + 'e'] = this['currTextur' + 'e'], _0x2ffb99['currDispla' + 'yData'] = this['currDispla' + 'yData'], _0x2ffb99;
        }
    }
    _0x26972d['_tempMatri' + 'x'] = new _0x5a45c3['Matrix'](), _0x26972d['_tempResul' + 'tMatrix'] = new _0x5a45c3['Matrix'](), _0x26972d['useSameMat' + 'rixAndVert' + 'icle'] = !0x0, _0x26972d['_tempVerti' + 'cleArr'] = [];
    class _0x2a4a4f {
        constructor() {
            this['deformSlot' + 'DataList'] = [];
        }
    }
    class _0x2b9322 {
        constructor() {
            this['deformSlot' + 'DisplayLis' + 't'] = [];
        }
    }
    class _0x27fd5e {
        constructor() {
            this['slotIndex'] = -0x1, this['timeList'] = [], this['vectices'] = [], this['tweenKeyLi' + 'st'] = [], this['frameIndex'] = 0x0;
        }
        ['binarySear' + 'ch1'](_0x3967ee, _0x166e37) {
            var _0x3d9bb1 = 0x0, _0x318d05 = _0x3967ee['length'] - 0x2;
            if (0x0 == _0x318d05)
                return 0x1;
            for (var _0x454975 = _0x318d05 >>> 0x1;;) {
                if (_0x3967ee[Math['floor'](_0x454975 + 0x1)] <= _0x166e37 ? _0x3d9bb1 = _0x454975 + 0x1 : _0x318d05 = _0x454975, _0x3d9bb1 == _0x318d05)
                    return _0x3d9bb1 + 0x1;
                _0x454975 = _0x3d9bb1 + _0x318d05 >>> 0x1;
            }
            return 0x0;
        }
        ['apply'](_0x37d080, _0x2ecd23, _0x5e6406 = 0x1) {
            if (_0x37d080 += 0.05, !(this['timeList']['length'] <= 0x0)) {
                var _0x562695 = 0x0;
                if (!(_0x37d080 < this['timeList'][0x0])) {
                    var _0x1ddf20 = this['vectices'][0x0]['length'], _0x2446af = [], _0xa614a5 = this['binarySear' + 'ch1'](this['timeList'], _0x37d080);
                    if (this['frameIndex'] = _0xa614a5, _0x37d080 >= this['timeList'][this['timeList']['length'] - 0x1]) {
                        var _0x1c4ec9 = this['vectices'][this['vectices']['length'] - 0x1];
                        if (_0x5e6406 < 0x1) {
                            for (_0x562695 = 0x0; _0x562695 < _0x1ddf20; _0x562695++)
                                _0x2446af[_0x562695] += (_0x1c4ec9[_0x562695] - _0x2446af[_0x562695]) * _0x5e6406;
                        } else {
                            for (_0x562695 = 0x0; _0x562695 < _0x1ddf20; _0x562695++)
                                _0x2446af[_0x562695] = _0x1c4ec9[_0x562695];
                        }
                        this['deformData'] = _0x2446af;
                    } else {
                        var _0x22cb6b, _0x12f08e = this['vectices'][this['frameIndex'] - 0x1], _0x2e9dba = this['vectices'][this['frameIndex']], _0x4b4cb9 = this['timeList'][this['frameIndex'] - 0x1], _0x3efea5 = this['timeList'][this['frameIndex']];
                        for (_0x5e6406 = this['tweenKeyLi' + 'st'][_0xa614a5 - 0x1] ? (_0x37d080 - _0x4b4cb9) / (_0x3efea5 - _0x4b4cb9) : 0x0, _0x562695 = 0x0; _0x562695 < _0x1ddf20; _0x562695++)
                            _0x22cb6b = _0x12f08e[_0x562695], _0x2446af[_0x562695] = _0x22cb6b + (_0x2e9dba[_0x562695] - _0x22cb6b) * _0x5e6406;
                        this['deformData'] = _0x2446af;
                    }
                }
            }
        }
    }
    class _0x777a60 {
        constructor() {
            this['drawOrder'] = [];
        }
    }
    class _0x4f7537 {
        constructor() {
        }
    }
    class _0x5e85e9 {
        constructor(_0x27c0b6, _0x3bf802) {
            this['isSpine'] = !0x0, this['isDebug'] = !0x1, this['_targetBon' + 'e'] = _0x3bf802[_0x27c0b6['targetBone' + 'Index']], this['isSpine'] = _0x27c0b6['isSpine'], null == this['_bones'] && (this['_bones'] = []), this['_bones']['length'] = 0x0;
            for (var _0x101d36 = 0x0, _0x47156e = _0x27c0b6['boneIndexs']['length']; _0x101d36 < _0x47156e; _0x101d36++)
                this['_bones']['push'](_0x3bf802[_0x27c0b6['boneIndexs'][_0x101d36]]);
            this['name'] = _0x27c0b6['name'], this['mix'] = _0x27c0b6['mix'], this['bendDirect' + 'ion'] = _0x27c0b6['bendDirect' + 'ion'];
        }
        ['apply']() {
            switch (this['_bones']['length']) {
            case 0x1:
                this['_applyIk1'](this['_bones'][0x0], this['_targetBon' + 'e']['resultMatr' + 'ix']['tx'], this['_targetBon' + 'e']['resultMatr' + 'ix']['ty'], this['mix']);
                break;
            case 0x2:
                this['isSpine'] ? this['_applyIk2'](this['_bones'][0x0], this['_bones'][0x1], this['_targetBon' + 'e']['resultMatr' + 'ix']['tx'], this['_targetBon' + 'e']['resultMatr' + 'ix']['ty'], this['bendDirect' + 'ion'], this['mix']) : this['_applyIk3'](this['_bones'][0x0], this['_bones'][0x1], this['_targetBon' + 'e']['resultMatr' + 'ix']['tx'], this['_targetBon' + 'e']['resultMatr' + 'ix']['ty'], this['bendDirect' + 'ion'], this['mix']);
            }
        }
        ['_applyIk1'](_0x2e06fe, _0x5c08dc, _0x129a34, _0x3fed0d) {
            var _0x24ab82 = _0x2e06fe['parentBone'], _0x275bbb = 0x1 / (_0x24ab82['resultMatr' + 'ix']['a'] * _0x24ab82['resultMatr' + 'ix']['d'] - _0x24ab82['resultMatr' + 'ix']['b'] * _0x24ab82['resultMatr' + 'ix']['c']), _0x15e201 = _0x5c08dc - _0x24ab82['resultMatr' + 'ix']['tx'], _0x28e823 = _0x129a34 - _0x24ab82['resultMatr' + 'ix']['ty'], _0x5e0275 = (_0x15e201 * _0x24ab82['resultMatr' + 'ix']['d'] - _0x28e823 * _0x24ab82['resultMatr' + 'ix']['c']) * _0x275bbb - _0x2e06fe['transform']['x'], _0x482dbf = (_0x28e823 * _0x24ab82['resultMatr' + 'ix']['a'] - _0x15e201 * _0x24ab82['resultMatr' + 'ix']['b']) * _0x275bbb - _0x2e06fe['transform']['y'], _0x278e1b = Math['atan2'](_0x482dbf, _0x5e0275) * _0x5e85e9['radDeg'] - 0x0 - _0x2e06fe['transform']['skX'];
            _0x2e06fe['transform']['scX'] < 0x0 && (_0x278e1b += 0xb4), _0x278e1b > 0xb4 ? _0x278e1b -= 0x168 : _0x278e1b < -0xb4 && (_0x278e1b += 0x168), _0x2e06fe['transform']['skX'] = _0x2e06fe['transform']['skY'] = _0x2e06fe['transform']['skX'] + _0x278e1b * _0x3fed0d, _0x2e06fe['update']();
        }
        ['updatePos'](_0x388fba, _0x3ada61) {
            this['_sp'] && this['_sp']['pos'](_0x388fba, _0x3ada61);
        }
        ['_applyIk2'](_0x387efe, _0x1873f0, _0x3b24db, _0x50579d, _0x370255, _0x48259a) {
            if (0x0 != _0x48259a) {
                var _0x456188, _0x31e716, _0x17b245, _0x472345 = _0x387efe['resultTran' + 'sform']['x'], _0x442a62 = _0x387efe['resultTran' + 'sform']['y'], _0x579233 = _0x387efe['transform']['scX'], _0x53c5cf = _0x387efe['transform']['scY'], _0x5e6569 = _0x1873f0['transform']['scX'];
                _0x579233 < 0x0 ? (_0x579233 = -_0x579233, _0x456188 = 0xb4, _0x17b245 = -0x1) : (_0x456188 = 0x0, _0x17b245 = 0x1), _0x53c5cf < 0x0 && (_0x53c5cf = -_0x53c5cf, _0x17b245 = -_0x17b245), _0x5e6569 < 0x0 ? (_0x5e6569 = -_0x5e6569, _0x31e716 = 0xb4) : _0x31e716 = 0x0;
                var _0x28d26d, _0x5e8d32, _0x492d57, _0x402ab3 = _0x1873f0['resultTran' + 'sform']['x'], _0x11253e = _0x387efe['resultMatr' + 'ix']['a'], _0x3417b5 = _0x387efe['resultMatr' + 'ix']['c'], _0x3f9913 = _0x387efe['resultMatr' + 'ix']['b'], _0x2ca310 = _0x387efe['resultMatr' + 'ix']['d'], _0x2c0b2b = Math['abs'](_0x579233 - _0x53c5cf) <= 0.0001;
                _0x2c0b2b ? (_0x5e8d32 = _0x11253e * _0x402ab3 + _0x3417b5 * (_0x28d26d = _0x1873f0['resultTran' + 'sform']['y']) + _0x387efe['resultMatr' + 'ix']['tx'], _0x492d57 = _0x3f9913 * _0x402ab3 + _0x2ca310 * _0x28d26d + _0x387efe['resultMatr' + 'ix']['ty']) : (_0x28d26d = 0x0, _0x5e8d32 = _0x11253e * _0x402ab3 + _0x387efe['resultMatr' + 'ix']['tx'], _0x492d57 = _0x3f9913 * _0x402ab3 + _0x387efe['resultMatr' + 'ix']['ty']), this['isDebug'] && (this['_sp'] || (this['_sp'] = new _0x5a45c3['Sprite'](), _0x5a45c3['ILaya']['stage']['addChild'](this['_sp'])), this['_sp']['graphics']['clear'](), this['_sp']['graphics']['drawCircle'](_0x3b24db, _0x50579d, 0xf, '#ffff00'), this['_sp']['graphics']['drawCircle'](_0x5e8d32, _0x492d57, 0xf, '#ff00ff')), _0x387efe['setRotatio' + 'n'](Math['atan2'](_0x492d57 - _0x387efe['resultMatr' + 'ix']['ty'], _0x5e8d32 - _0x387efe['resultMatr' + 'ix']['tx']));
                var _0x24d342 = _0x387efe['parentBone'];
                _0x11253e = _0x24d342['resultMatr' + 'ix']['a'], _0x3417b5 = _0x24d342['resultMatr' + 'ix']['c'], _0x3f9913 = _0x24d342['resultMatr' + 'ix']['b'];
                var _0xb960c4, _0x24f1a0, _0xd4d83b = 0x1 / (_0x11253e * (_0x2ca310 = _0x24d342['resultMatr' + 'ix']['d']) - _0x3417b5 * _0x3f9913), _0xe2ffc2 = _0x3b24db - _0x24d342['resultMatr' + 'ix']['tx'], _0x2f77ac = _0x50579d - _0x24d342['resultMatr' + 'ix']['ty'], _0x106de5 = (_0xe2ffc2 * _0x2ca310 - _0x2f77ac * _0x3417b5) * _0xd4d83b - _0x472345, _0x161c61 = (_0x2f77ac * _0x11253e - _0xe2ffc2 * _0x3f9913) * _0xd4d83b - _0x442a62, _0x3510bc = ((_0xe2ffc2 = _0x5e8d32 - _0x24d342['resultMatr' + 'ix']['tx']) * _0x2ca310 - (_0x2f77ac = _0x492d57 - _0x24d342['resultMatr' + 'ix']['ty']) * _0x3417b5) * _0xd4d83b - _0x472345, _0x4783e0 = (_0x2f77ac * _0x11253e - _0xe2ffc2 * _0x3f9913) * _0xd4d83b - _0x442a62, _0x567e85 = Math['sqrt'](_0x3510bc * _0x3510bc + _0x4783e0 * _0x4783e0), _0x424c78 = _0x1873f0['length'] * _0x5e6569;
                if (_0x2c0b2b) {
                    var _0x4b4af7 = (_0x106de5 * _0x106de5 + _0x161c61 * _0x161c61 - _0x567e85 * _0x567e85 - (_0x424c78 *= _0x579233) * _0x424c78) / (0x2 * _0x567e85 * _0x424c78);
                    _0x4b4af7 < -0x1 ? _0x4b4af7 = -0x1 : _0x4b4af7 > 0x1 && (_0x4b4af7 = 0x1), _0x24f1a0 = Math['acos'](_0x4b4af7) * _0x370255, _0x11253e = _0x567e85 + _0x424c78 * _0x4b4af7, _0x3417b5 = _0x424c78 * Math['sin'](_0x24f1a0), _0xb960c4 = Math['atan2'](_0x161c61 * _0x11253e - _0x106de5 * _0x3417b5, _0x106de5 * _0x11253e + _0x161c61 * _0x3417b5);
                } else {
                    var _0x28cd64 = (_0x11253e = _0x579233 * _0x424c78) * _0x11253e, _0x3a6d74 = (_0x3417b5 = _0x53c5cf * _0x424c78) * _0x3417b5, _0x324bab = _0x106de5 * _0x106de5 + _0x161c61 * _0x161c61, _0x13b855 = Math['atan2'](_0x161c61, _0x106de5), _0x18b803 = -0x2 * _0x3a6d74 * _0x567e85, _0x4c7722 = _0x3a6d74 - _0x28cd64;
                    if ((_0x2ca310 = _0x18b803 * _0x18b803 - 0x4 * _0x4c7722 * (_0x3f9913 = _0x3a6d74 * _0x567e85 * _0x567e85 + _0x28cd64 * _0x324bab - _0x28cd64 * _0x3a6d74)) > 0x0) {
                        var _0x4e5754 = Math['sqrt'](_0x2ca310);
                        _0x18b803 < 0x0 && (_0x4e5754 = -_0x4e5754);
                        var _0x4f3496 = (_0x4e5754 = -(_0x18b803 + _0x4e5754) / 0x2) / _0x4c7722, _0x5c5f3e = _0x3f9913 / _0x4e5754, _0x478a29 = Math['abs'](_0x4f3496) < Math['abs'](_0x5c5f3e) ? _0x4f3496 : _0x5c5f3e;
                        _0x478a29 * _0x478a29 <= _0x324bab && (_0x2f77ac = Math['sqrt'](_0x324bab - _0x478a29 * _0x478a29) * _0x370255, _0xb960c4 = _0x13b855 - Math['atan2'](_0x2f77ac, _0x478a29), _0x24f1a0 = Math['atan2'](_0x2f77ac / _0x53c5cf, (_0x478a29 - _0x567e85) / _0x579233));
                    }
                    var _0x5e06ae = 0x0, _0x28d895 = Number['MAX_VALUE'], _0x4b22a3 = 0x0, _0x15d954 = 0x0, _0x2417d6 = 0x0, _0xfd7132 = 0x0, _0x163620 = 0x0, _0x62f6ff = 0x0;
                    (_0x2ca310 = (_0xe2ffc2 = _0x567e85 + _0x11253e) * _0xe2ffc2) > _0xfd7132 && (_0x2417d6 = 0x0, _0xfd7132 = _0x2ca310, _0x163620 = _0xe2ffc2), (_0x2ca310 = (_0xe2ffc2 = _0x567e85 - _0x11253e) * _0xe2ffc2) < _0x28d895 && (_0x5e06ae = Math['PI'], _0x28d895 = _0x2ca310, _0x4b22a3 = _0xe2ffc2);
                    var _0x5789b9 = Math['acos'](-_0x11253e * _0x567e85 / (_0x28cd64 - _0x3a6d74));
                    (_0x2ca310 = (_0xe2ffc2 = _0x11253e * Math['cos'](_0x5789b9) + _0x567e85) * _0xe2ffc2 + (_0x2f77ac = _0x3417b5 * Math['sin'](_0x5789b9)) * _0x2f77ac) < _0x28d895 && (_0x5e06ae = _0x5789b9, _0x28d895 = _0x2ca310, _0x4b22a3 = _0xe2ffc2, _0x15d954 = _0x2f77ac), _0x2ca310 > _0xfd7132 && (_0x2417d6 = _0x5789b9, _0xfd7132 = _0x2ca310, _0x163620 = _0xe2ffc2, _0x62f6ff = _0x2f77ac), _0x324bab <= (_0x28d895 + _0xfd7132) / 0x2 ? (_0xb960c4 = _0x13b855 - Math['atan2'](_0x15d954 * _0x370255, _0x4b22a3), _0x24f1a0 = _0x5e06ae * _0x370255) : (_0xb960c4 = _0x13b855 - Math['atan2'](_0x62f6ff * _0x370255, _0x163620), _0x24f1a0 = _0x2417d6 * _0x370255);
                }
                var _0x26f432 = Math['atan2'](_0x28d26d, _0x402ab3) * _0x17b245, _0x447fa2 = _0x387efe['resultTran' + 'sform']['skX'];
                (_0xb960c4 = (_0xb960c4 - _0x26f432) * _0x5e85e9['radDeg'] + _0x456188 - _0x447fa2) > 0xb4 ? _0xb960c4 -= 0x168 : _0xb960c4 < -0xb4 && (_0xb960c4 += 0x168), _0x387efe['resultTran' + 'sform']['x'] = _0x472345, _0x387efe['resultTran' + 'sform']['y'] = _0x442a62, _0x387efe['resultTran' + 'sform']['skX'] = _0x387efe['resultTran' + 'sform']['skY'] = _0x447fa2 + _0xb960c4 * _0x48259a, _0x447fa2 = _0x1873f0['resultTran' + 'sform']['skX'], _0x447fa2 %= 0x168, (_0x24f1a0 = ((_0x24f1a0 + _0x26f432) * _0x5e85e9['radDeg'] - 0x0) * _0x17b245 + _0x31e716 - _0x447fa2) > 0xb4 ? _0x24f1a0 -= 0x168 : _0x24f1a0 < -0xb4 && (_0x24f1a0 += 0x168), _0x1873f0['resultTran' + 'sform']['x'] = _0x402ab3, _0x1873f0['resultTran' + 'sform']['y'] = _0x28d26d, _0x1873f0['resultTran' + 'sform']['skX'] = _0x1873f0['resultTran' + 'sform']['skY'] = _0x1873f0['resultTran' + 'sform']['skY'] + _0x24f1a0 * _0x48259a, _0x387efe['update']();
            }
        }
        ['_applyIk3'](_0x138c60, _0x18da1d, _0x522d0c, _0x2c927e, _0x31c0a6, _0x4f39ac) {
            if (0x0 == _0x4f39ac)
                return;
            var _0x4ef663, _0x2ce3c6;
            const _0x2799e5 = _0x18da1d['resultMatr' + 'ix']['a'] * _0x18da1d['length'], _0x3f5f03 = _0x18da1d['resultMatr' + 'ix']['b'] * _0x18da1d['length'], _0xbfe523 = _0x2799e5 * _0x2799e5 + _0x3f5f03 * _0x3f5f03, _0x1e12bb = Math['sqrt'](_0xbfe523);
            var _0x55d623 = _0x138c60['resultMatr' + 'ix']['tx'], _0x539425 = _0x138c60['resultMatr' + 'ix']['ty'], _0x5dfcc1 = _0x18da1d['resultMatr' + 'ix']['tx'], _0x17534a = _0x18da1d['resultMatr' + 'ix']['ty'], _0x2a0fe4 = _0x5dfcc1 - _0x55d623, _0x52ae42 = _0x17534a - _0x539425;
            const _0x95ba32 = _0x2a0fe4 * _0x2a0fe4 + _0x52ae42 * _0x52ae42, _0x36a7bd = Math['sqrt'](_0x95ba32), _0x4bf76f = (_0x2a0fe4 = _0x522d0c - _0x138c60['resultMatr' + 'ix']['tx']) * _0x2a0fe4 + (_0x52ae42 = _0x2c927e - _0x138c60['resultMatr' + 'ix']['ty']) * _0x52ae42, _0x5ba4a9 = Math['sqrt'](_0x4bf76f);
            if (_0x1e12bb + _0x36a7bd <= _0x5ba4a9 || _0x5ba4a9 + _0x1e12bb <= _0x36a7bd || _0x5ba4a9 + _0x36a7bd <= _0x1e12bb) {
                var _0x48b4cc;
                _0x5dfcc1 = _0x55d623 + (_0x48b4cc = _0x1e12bb + _0x36a7bd <= _0x5ba4a9 ? 0x1 : -0x1) * (_0x522d0c - _0x55d623) * _0x36a7bd / _0x5ba4a9, _0x17534a = _0x539425 + _0x48b4cc * (_0x2c927e - _0x539425) * _0x36a7bd / _0x5ba4a9;
            } else {
                const _0x58d7cb = (_0x95ba32 - _0xbfe523 + _0x4bf76f) / (0x2 * _0x4bf76f), _0x12502b = Math['sqrt'](_0x95ba32 - _0x58d7cb * _0x58d7cb * _0x4bf76f) / _0x5ba4a9, _0x3a4c27 = _0x55d623 + _0x2a0fe4 * _0x58d7cb, _0x177eb6 = _0x539425 + _0x52ae42 * _0x58d7cb, _0x1064e5 = -_0x52ae42 * _0x12502b, _0x2bd29f = _0x2a0fe4 * _0x12502b;
                _0x31c0a6 > 0x0 ? (_0x5dfcc1 = _0x3a4c27 - _0x1064e5, _0x17534a = _0x177eb6 - _0x2bd29f) : (_0x5dfcc1 = _0x3a4c27 + _0x1064e5, _0x17534a = _0x177eb6 + _0x2bd29f);
            }
            var _0x36baee, _0x13d9de, _0xed442f, _0x5c8f85;
            _0x4ef663 = _0x5dfcc1, _0x2ce3c6 = _0x17534a, this['isDebug'] && (this['_sp'] || (this['_sp'] = new _0x5a45c3['Sprite'](), _0x5a45c3['ILaya']['stage']['addChild'](this['_sp'])), this['_sp']['graphics']['clear'](), this['_sp']['graphics']['drawCircle'](_0x55d623, _0x539425, 0xf, '#ff00ff'), this['_sp']['graphics']['drawCircle'](_0x522d0c, _0x2c927e, 0xf, '#ffff00'), this['_sp']['graphics']['drawCircle'](_0x4ef663, _0x2ce3c6, 0xf, '#ff00ff')), _0x36baee = Math['atan2'](_0x2ce3c6 - _0x138c60['resultMatr' + 'ix']['ty'], _0x4ef663 - _0x138c60['resultMatr' + 'ix']['tx']), _0x138c60['setRotatio' + 'n'](_0x36baee), (_0x13d9de = _0x5e85e9['_tempMatri' + 'x'])['identity'](), _0x13d9de['rotate'](_0x36baee), _0x13d9de['scale'](_0x138c60['resultMatr' + 'ix']['getScaleX'](), _0x138c60['resultMatr' + 'ix']['getScaleY']()), _0x13d9de['translate'](_0x138c60['resultMatr' + 'ix']['tx'], _0x138c60['resultMatr' + 'ix']['ty']), _0x13d9de['copyTo'](_0x138c60['resultMatr' + 'ix']), _0x138c60['updateChil' + 'd'](), _0xed442f = Math['atan2'](_0x2c927e - _0x2ce3c6, _0x522d0c - _0x4ef663), _0x18da1d['setRotatio' + 'n'](_0xed442f), (_0x5c8f85 = _0x5e85e9['_tempMatri' + 'x'])['identity'](), _0x5c8f85['rotate'](_0xed442f), _0x5c8f85['scale'](_0x18da1d['resultMatr' + 'ix']['getScaleX'](), _0x18da1d['resultMatr' + 'ix']['getScaleY']()), _0x5c8f85['translate'](_0x4ef663, _0x2ce3c6), _0x13d9de['copyTo'](_0x18da1d['resultMatr' + 'ix']), _0x18da1d['updateChil' + 'd']();
        }
    }
    _0x5e85e9['radDeg'] = 0xb4 / Math['PI'], _0x5e85e9['degRad'] = Math['PI'] / 0xb4, _0x5e85e9['_tempMatri' + 'x'] = new _0x5a45c3['Matrix']();
    class _0x19a24f {
        constructor() {
            this['boneNames'] = [], this['bendDirect' + 'ion'] = 0x1, this['mix'] = 0x1, this['isSpine'] = !0x0, this['targetBone' + 'Index'] = -0x1, this['boneIndexs'] = [];
        }
    }
    class _0x2e2a54 {
        constructor(_0x5792a9, _0x59af39) {
            this['_debugKey'] = !0x1, this['_segments'] = [], this['_curves'] = [], this['data'] = _0x5792a9, this['position'] = _0x5792a9['position'], this['spacing'] = _0x5792a9['spacing'], this['rotateMix'] = _0x5792a9['rotateMix'], this['translateM' + 'ix'] = _0x5792a9['translateM' + 'ix'], this['bones'] = [];
            for (var _0x3279be = this['data']['bones'], _0x6a8c4 = 0x0, _0x204297 = _0x3279be['length']; _0x6a8c4 < _0x204297; _0x6a8c4++)
                this['bones']['push'](_0x59af39[_0x3279be[_0x6a8c4]]);
        }
        ['apply'](_0x34e3f1, _0x4660fd) {
            if (this['target']) {
                var _0x1d37a9 = this['translateM' + 'ix'], _0x1d243b = this['translateM' + 'ix'], _0x161286 = _0x1d243b > 0x0, _0x340a9b = this['data']['spacingMod' + 'e'], _0x5ac582 = 'length' == _0x340a9b, _0x3b92e3 = this['data']['rotateMode'], _0x2c3462 = 'tangent' == _0x3b92e3, _0x2634c6 = 'chainScale' == _0x3b92e3, _0x49b5e1 = [], _0x3e63f3 = this['bones']['length'], _0x3f4a8a = _0x2c3462 ? _0x3e63f3 : _0x3e63f3 + 0x1, _0x598eb8 = [];
                this['_spaces'] = _0x598eb8, _0x598eb8[0x0] = this['position'];
                var _0xad299d = this['spacing'];
                if (_0x2634c6 || _0x5ac582)
                    for (var _0x20ec35 = 0x0, _0x2685fe = _0x3f4a8a - 0x1; _0x20ec35 < _0x2685fe;) {
                        var _0x40ac2e = this['bones'][_0x20ec35], _0x13502f = _0x40ac2e['length'], _0x21d3d6 = _0x13502f * _0x40ac2e['resultMatr' + 'ix']['a'], _0x23203a = _0x13502f * _0x40ac2e['resultMatr' + 'ix']['b'];
                        _0x13502f = Math['sqrt'](_0x21d3d6 * _0x21d3d6 + _0x23203a * _0x23203a), _0x2634c6 && (_0x49b5e1[_0x20ec35] = _0x13502f), _0x598eb8[++_0x20ec35] = _0x5ac582 ? Math['max'](0x0, _0x13502f + _0xad299d) : _0xad299d;
                    }
                else {
                    for (_0x20ec35 = 0x1; _0x20ec35 < _0x3f4a8a; _0x20ec35++)
                        _0x598eb8[_0x20ec35] = _0xad299d;
                }
                var _0x465878 = this['computeWor' + 'ldPosition' + 's'](this['target'], _0x34e3f1, _0x4660fd, _0x3f4a8a, _0x2c3462, 'percent' == this['data']['positionMo' + 'de'], 'percent' == _0x340a9b);
                if (this['_debugKey']) {
                    for (_0x20ec35 = 0x0; _0x20ec35 < _0x465878['length']; _0x20ec35++)
                        _0x4660fd['drawCircle'](_0x465878[_0x20ec35++], _0x465878[_0x20ec35++], 0x5, '#00ff00');
                    var _0x598b9b = [];
                    for (_0x20ec35 = 0x0; _0x20ec35 < _0x465878['length']; _0x20ec35++)
                        _0x598b9b['push'](_0x465878[_0x20ec35++], _0x465878[_0x20ec35++]);
                    _0x4660fd['drawLines'](0x0, 0x0, _0x598b9b, '#ff0000');
                }
                var _0x512187, _0x112dfb = _0x465878[0x0], _0x203bc9 = _0x465878[0x1], _0x493453 = this['data']['offsetRota' + 'tion'], _0x194d84 = 'chain' == _0x3b92e3 && 0x0 == _0x493453;
                for (_0x20ec35 = 0x0, _0x512187 = 0x3; _0x20ec35 < _0x3e63f3; _0x20ec35++, _0x512187 += 0x3) {
                    (_0x40ac2e = this['bones'][_0x20ec35])['resultMatr' + 'ix']['tx'] += (_0x112dfb - _0x40ac2e['resultMatr' + 'ix']['tx']) * _0x1d37a9, _0x40ac2e['resultMatr' + 'ix']['ty'] += (_0x203bc9 - _0x40ac2e['resultMatr' + 'ix']['ty']) * _0x1d37a9;
                    var _0x4552eb = (_0x21d3d6 = _0x465878[_0x512187]) - _0x112dfb, _0x3416be = (_0x23203a = _0x465878[_0x512187 + 0x1]) - _0x203bc9;
                    if (_0x2634c6 && 0x0 != (_0x13502f = _0x49b5e1[_0x20ec35])) {
                        var _0x8c9245 = (Math['sqrt'](_0x4552eb * _0x4552eb + _0x3416be * _0x3416be) / _0x13502f - 0x1) * _0x1d243b + 0x1;
                        _0x40ac2e['resultMatr' + 'ix']['a'] *= _0x8c9245, _0x40ac2e['resultMatr' + 'ix']['c'] *= _0x8c9245;
                    }
                    if (_0x112dfb = _0x21d3d6, _0x203bc9 = _0x23203a, _0x161286) {
                        var _0x7377da, _0x5b3fd2, _0x25e4b2, _0x40873d = _0x40ac2e['resultMatr' + 'ix']['a'], _0x36c9d8 = _0x40ac2e['resultMatr' + 'ix']['c'], _0x4a4171 = _0x40ac2e['resultMatr' + 'ix']['b'], _0x45342c = _0x40ac2e['resultMatr' + 'ix']['d'];
                        _0x7377da = _0x2c3462 ? _0x465878[_0x512187 - 0x1] : 0x0 == _0x598eb8[_0x20ec35 + 0x1] ? _0x465878[_0x512187 + 0x2] : Math['atan2'](_0x3416be, _0x4552eb), _0x7377da -= Math['atan2'](_0x4a4171, _0x40873d) - _0x493453 / 0xb4 * Math['PI'], _0x194d84 && (_0x5b3fd2 = Math['cos'](_0x7377da), _0x25e4b2 = Math['sin'](_0x7377da), _0x112dfb += ((_0x13502f = _0x40ac2e['length']) * (_0x5b3fd2 * _0x40873d - _0x25e4b2 * _0x4a4171) - _0x4552eb) * _0x1d243b, _0x203bc9 += (_0x13502f * (_0x25e4b2 * _0x40873d + _0x5b3fd2 * _0x4a4171) - _0x3416be) * _0x1d243b), _0x7377da > Math['PI'] ? _0x7377da -= 0x2 * Math['PI'] : _0x7377da < -Math['PI'] && (_0x7377da += 0x2 * Math['PI']), _0x7377da *= _0x1d243b, _0x5b3fd2 = Math['cos'](_0x7377da), _0x25e4b2 = Math['sin'](_0x7377da), _0x40ac2e['resultMatr' + 'ix']['a'] = _0x5b3fd2 * _0x40873d - _0x25e4b2 * _0x4a4171, _0x40ac2e['resultMatr' + 'ix']['c'] = _0x5b3fd2 * _0x36c9d8 - _0x25e4b2 * _0x45342c, _0x40ac2e['resultMatr' + 'ix']['b'] = _0x25e4b2 * _0x40873d + _0x5b3fd2 * _0x4a4171, _0x40ac2e['resultMatr' + 'ix']['d'] = _0x25e4b2 * _0x36c9d8 + _0x5b3fd2 * _0x45342c;
                    }
                }
            }
        }
        ['computeWor' + 'ldVertices' + '2'](_0x478c0e, _0x2f445a, _0xfa5e47, _0x3effe1, _0x289fad, _0xccd02a) {
            var _0x33365e, _0xa88e0a, _0x1bc4b5, _0x52b15b = _0x478c0e['currDispla' + 'yData']['bones'], _0xf3334e = _0x478c0e['currDispla' + 'yData']['weights'], _0x339e5c = _0x478c0e['currDispla' + 'yData']['triangles'], _0x78ada5 = 0x0, _0x3ad5ac = 0x0, _0x48fca8 = 0x0, _0x367c63 = 0x0, _0x58701b = 0x0, _0x1592d1 = 0x0, _0x38df75 = 0x0, _0x5b9269 = 0x0, _0x40edd5 = 0x0, _0x3162be = 0x0;
            if (null != _0x52b15b) {
                for (_0x78ada5 = 0x0; _0x78ada5 < _0xfa5e47; _0x78ada5 += 0x2)
                    _0x3ad5ac += (_0x367c63 = _0x52b15b[_0x3ad5ac]) + 0x1, _0x48fca8 += _0x367c63;
                var _0x1726a5 = _0x2f445a;
                for (_0x58701b = _0xccd02a, _0x1592d1 = 0x3 * _0x48fca8; _0x58701b < _0x3effe1; _0x58701b += 0x2) {
                    for (_0x38df75 = 0x0, _0x5b9269 = 0x0, _0x367c63 = _0x52b15b[_0x3ad5ac++], _0x367c63 += _0x3ad5ac; _0x3ad5ac < _0x367c63; _0x3ad5ac++, _0x1592d1 += 0x3) {
                        _0x33365e = _0x1726a5[_0x52b15b[_0x3ad5ac]]['resultMatr' + 'ix'], _0x40edd5 = _0xf3334e[_0x1592d1], _0x3162be = _0xf3334e[_0x1592d1 + 0x1];
                        var _0x19e5d0 = _0xf3334e[_0x1592d1 + 0x2];
                        _0x38df75 += (_0x40edd5 * _0x33365e['a'] + _0x3162be * _0x33365e['c'] + _0x33365e['tx']) * _0x19e5d0, _0x5b9269 += (_0x40edd5 * _0x33365e['b'] + _0x3162be * _0x33365e['d'] + _0x33365e['ty']) * _0x19e5d0;
                    }
                    _0x289fad[_0x58701b] = _0x38df75, _0x289fad[_0x58701b + 0x1] = _0x5b9269;
                }
            } else {
                var _0x502986, _0x3cda12;
                if (_0x339e5c || (_0x339e5c = _0xf3334e), _0x478c0e['deformData'] && (_0x339e5c = _0x478c0e['deformData']), _0x502986 = _0x478c0e['parent'], _0x2f445a) {
                    for (_0x1bc4b5 = _0x2f445a['length'], _0x78ada5 = 0x0; _0x78ada5 < _0x1bc4b5; _0x78ada5++)
                        if (_0x2f445a[_0x78ada5]['name'] == _0x502986) {
                            _0xa88e0a = _0x2f445a[_0x78ada5];
                            break;
                        }
                }
                _0xa88e0a && (_0x3cda12 = _0xa88e0a['resultMatr' + 'ix']), _0x3cda12 || (_0x3cda12 = _0x2e2a54['_tempMt']);
                var _0x4539c2 = _0x3cda12['tx'], _0x299de3 = _0x3cda12['ty'], _0x2a62e2 = _0x3cda12['a'], _0x111bbf = _0x3cda12['b'], _0x59d273 = _0x3cda12['c'], _0x5f885b = _0x3cda12['d'];
                for (_0xa88e0a && (_0x5f885b *= _0xa88e0a['d']), _0x3ad5ac = _0xfa5e47, _0x58701b = _0xccd02a; _0x58701b < _0x3effe1; _0x3ad5ac += 0x2, _0x58701b += 0x2)
                    _0x40edd5 = _0x339e5c[_0x3ad5ac], _0x3162be = _0x339e5c[_0x3ad5ac + 0x1], _0x289fad[_0x58701b] = _0x40edd5 * _0x2a62e2 + _0x3162be * _0x111bbf + _0x4539c2, _0x289fad[_0x58701b + 0x1] = -(_0x40edd5 * _0x59d273 + _0x3162be * _0x5f885b + _0x299de3);
            }
        }
        ['computeWor' + 'ldPosition' + 's'](_0x2587e6, _0x36ef60, _0x4c622a, _0x578536, _0x154206, _0x4c0773, _0x381d7a) {
            _0x2587e6['currDispla' + 'yData']['bones'], _0x2587e6['currDispla' + 'yData']['weights'], _0x2587e6['currDispla' + 'yData']['triangles'];
            var _0x210487, _0x28d8fa, _0x183234, _0x3bdeb0, _0xe32cbb, _0x22d5ee, _0x195e18, _0x476836, _0x29148e = [], _0x394ed6 = 0x0, _0x204342 = _0x2587e6['currDispla' + 'yData']['verLen'], _0x2cd342 = this['position'], _0x80813f = this['_spaces'], _0x423d94 = [], _0xa7d9f0 = _0x204342 / 0x6, _0x227226 = -0x1;
            if (_0xa7d9f0--, _0x204342 -= 0x4, this['computeWor' + 'ldVertices' + '2'](_0x2587e6, _0x36ef60, 0x2, _0x204342, _0x29148e, 0x0), this['_debugKey']) {
                for (_0x394ed6 = 0x0; _0x394ed6 < _0x29148e['length'];)
                    _0x4c622a['drawCircle'](_0x29148e[_0x394ed6++], _0x29148e[_0x394ed6++], 0xa, '#ff0000');
            }
            _0x210487 = _0x29148e, this['_curves']['length'] = _0xa7d9f0;
            var _0x3cf775 = this['_curves'];
            _0x28d8fa = 0x0;
            var _0x2f86bc, _0x26f0d6, _0x1fd158, _0x1555f7, _0x199919, _0x3a7f6, _0x549c47, _0x209de3, _0x563562, _0x2b5766 = _0x210487[0x0], _0x205c96 = _0x210487[0x1], _0x3ef6d5 = 0x0, _0x4b75c8 = 0x0, _0x54dfb8 = 0x0, _0x1f8459 = 0x0, _0x5941c1 = 0x0, _0x413804 = 0x0;
            for (_0x394ed6 = 0x0, _0x563562 = 0x2; _0x394ed6 < _0xa7d9f0; _0x394ed6++, _0x563562 += 0x6)
                _0x199919 = 0x2 * (_0x2f86bc = 0.1875 * (_0x2b5766 - 0x2 * (_0x3ef6d5 = _0x210487[_0x563562]) + (_0x54dfb8 = _0x210487[_0x563562 + 0x2]))) + (_0x1fd158 = 0.09375 * (0x3 * (_0x3ef6d5 - _0x54dfb8) - _0x2b5766 + (_0x5941c1 = _0x210487[_0x563562 + 0x4]))), _0x3a7f6 = 0x2 * (_0x26f0d6 = 0.1875 * (_0x205c96 - 0x2 * (_0x4b75c8 = _0x210487[_0x563562 + 0x1]) + (_0x1f8459 = _0x210487[_0x563562 + 0x3]))) + (_0x1555f7 = 0.09375 * (0x3 * (_0x4b75c8 - _0x1f8459) - _0x205c96 + (_0x413804 = _0x210487[_0x563562 + 0x5]))), _0x549c47 = 0.75 * (_0x3ef6d5 - _0x2b5766) + _0x2f86bc + 0.16666667 * _0x1fd158, _0x209de3 = 0.75 * (_0x4b75c8 - _0x205c96) + _0x26f0d6 + 0.16666667 * _0x1555f7, _0x28d8fa += Math['sqrt'](_0x549c47 * _0x549c47 + _0x209de3 * _0x209de3), _0x549c47 += _0x199919, _0x209de3 += _0x3a7f6, _0x199919 += _0x1fd158, _0x3a7f6 += _0x1555f7, _0x28d8fa += Math['sqrt'](_0x549c47 * _0x549c47 + _0x209de3 * _0x209de3), _0x549c47 += _0x199919, _0x209de3 += _0x3a7f6, _0x28d8fa += Math['sqrt'](_0x549c47 * _0x549c47 + _0x209de3 * _0x209de3), _0x549c47 += _0x199919 + _0x1fd158, _0x209de3 += _0x3a7f6 + _0x1555f7, _0x28d8fa += Math['sqrt'](_0x549c47 * _0x549c47 + _0x209de3 * _0x209de3), _0x3cf775[_0x394ed6] = _0x28d8fa, _0x2b5766 = _0x5941c1, _0x205c96 = _0x413804;
            if (_0x4c0773 && (_0x2cd342 *= _0x28d8fa), _0x381d7a) {
                for (_0x394ed6 = 0x0; _0x394ed6 < _0x578536; _0x394ed6++)
                    _0x80813f[_0x394ed6] *= _0x28d8fa;
            }
            var _0x4c2b47, _0x57ed1e = this['_segments'], _0x4ee4e3 = 0x0;
            for (_0x394ed6 = 0x0, _0x183234 = 0x0, _0x3bdeb0 = 0x0, _0x4c2b47 = 0x0; _0x394ed6 < _0x578536; _0x394ed6++, _0x183234 += 0x3)
                if ((_0xe32cbb = _0x2cd342 += _0x22d5ee = _0x80813f[_0x394ed6]) < 0x0)
                    this['addBeforeP' + 'osition'](_0xe32cbb, _0x210487, 0x0, _0x423d94, _0x183234);
                else {
                    if (_0xe32cbb > _0x28d8fa)
                        this['addAfterPo' + 'sition'](_0xe32cbb - _0x28d8fa, _0x210487, _0x204342 - 0x4, _0x423d94, _0x183234);
                    else {
                        for (;; _0x3bdeb0++)
                            if (!(_0xe32cbb > (_0x476836 = _0x3cf775[_0x3bdeb0]))) {
                                0x0 == _0x3bdeb0 ? _0xe32cbb /= _0x476836 : _0xe32cbb = (_0xe32cbb - (_0x195e18 = _0x3cf775[_0x3bdeb0 - 0x1])) / (_0x476836 - _0x195e18);
                                break;
                            }
                        if (_0x3bdeb0 != _0x227226) {
                            _0x227226 = _0x3bdeb0;
                            var _0x2b56b1 = 0x6 * _0x3bdeb0;
                            for (_0x199919 = 0x2 * (_0x2f86bc = 0.03 * ((_0x2b5766 = _0x210487[_0x2b56b1]) - 0x2 * (_0x3ef6d5 = _0x210487[_0x2b56b1 + 0x2]) + (_0x54dfb8 = _0x210487[_0x2b56b1 + 0x4]))) + (_0x1fd158 = 0.006 * (0x3 * (_0x3ef6d5 - _0x54dfb8) - _0x2b5766 + (_0x5941c1 = _0x210487[_0x2b56b1 + 0x6]))), _0x3a7f6 = 0x2 * (_0x26f0d6 = 0.03 * ((_0x205c96 = _0x210487[_0x2b56b1 + 0x1]) - 0x2 * (_0x4b75c8 = _0x210487[_0x2b56b1 + 0x3]) + (_0x1f8459 = _0x210487[_0x2b56b1 + 0x5]))) + (_0x1555f7 = 0.006 * (0x3 * (_0x4b75c8 - _0x1f8459) - _0x205c96 + (_0x413804 = _0x210487[_0x2b56b1 + 0x7]))), _0x549c47 = 0.3 * (_0x3ef6d5 - _0x2b5766) + _0x2f86bc + 0.16666667 * _0x1fd158, _0x209de3 = 0.3 * (_0x4b75c8 - _0x205c96) + _0x26f0d6 + 0.16666667 * _0x1555f7, _0x4ee4e3 = Math['sqrt'](_0x549c47 * _0x549c47 + _0x209de3 * _0x209de3), _0x57ed1e[0x0] = _0x4ee4e3, _0x2b56b1 = 0x1; _0x2b56b1 < 0x8; _0x2b56b1++)
                                _0x549c47 += _0x199919, _0x209de3 += _0x3a7f6, _0x199919 += _0x1fd158, _0x3a7f6 += _0x1555f7, _0x4ee4e3 += Math['sqrt'](_0x549c47 * _0x549c47 + _0x209de3 * _0x209de3), _0x57ed1e[_0x2b56b1] = _0x4ee4e3;
                            _0x549c47 += _0x199919, _0x209de3 += _0x3a7f6, _0x4ee4e3 += Math['sqrt'](_0x549c47 * _0x549c47 + _0x209de3 * _0x209de3), _0x57ed1e[0x8] = _0x4ee4e3, _0x549c47 += _0x199919 + _0x1fd158, _0x209de3 += _0x3a7f6 + _0x1555f7, _0x4ee4e3 += Math['sqrt'](_0x549c47 * _0x549c47 + _0x209de3 * _0x209de3), _0x57ed1e[0x9] = _0x4ee4e3, _0x4c2b47 = 0x0;
                        }
                        for (_0xe32cbb *= _0x4ee4e3;; _0x4c2b47++)
                            if (!(_0xe32cbb > (_0x476836 = _0x57ed1e[_0x4c2b47]))) {
                                0x0 == _0x4c2b47 ? _0xe32cbb /= _0x476836 : _0xe32cbb = _0x4c2b47 + (_0xe32cbb - (_0x195e18 = _0x57ed1e[_0x4c2b47 - 0x1])) / (_0x476836 - _0x195e18);
                                break;
                            }
                        this['addCurvePo' + 'sition'](0.1 * _0xe32cbb, _0x2b5766, _0x205c96, _0x3ef6d5, _0x4b75c8, _0x54dfb8, _0x1f8459, _0x5941c1, _0x413804, _0x423d94, _0x183234, _0x154206 || _0x394ed6 > 0x0 && 0x0 == _0x22d5ee);
                    }
                }
            return _0x423d94;
        }
        ['addBeforeP' + 'osition'](_0x4031cb, _0x3c41aa, _0x713f3f, _0x285bd9, _0x86949e) {
            var _0x1413f8 = _0x3c41aa[_0x713f3f], _0x1ae883 = _0x3c41aa[_0x713f3f + 0x1], _0x43e420 = _0x3c41aa[_0x713f3f + 0x2] - _0x1413f8, _0x1458f1 = _0x3c41aa[_0x713f3f + 0x3] - _0x1ae883, _0x218b0c = Math['atan2'](_0x1458f1, _0x43e420);
            _0x285bd9[_0x86949e] = _0x1413f8 + _0x4031cb * Math['cos'](_0x218b0c), _0x285bd9[_0x86949e + 0x1] = _0x1ae883 + _0x4031cb * Math['sin'](_0x218b0c), _0x285bd9[_0x86949e + 0x2] = _0x218b0c;
        }
        ['addAfterPo' + 'sition'](_0x538235, _0x4af21d, _0x344d02, _0x374207, _0x3243d8) {
            var _0x2930bc = _0x4af21d[_0x344d02 + 0x2], _0xed2ed1 = _0x4af21d[_0x344d02 + 0x3], _0x1cb829 = _0x2930bc - _0x4af21d[_0x344d02], _0x177d94 = _0xed2ed1 - _0x4af21d[_0x344d02 + 0x1], _0x1f68aa = Math['atan2'](_0x177d94, _0x1cb829);
            _0x374207[_0x3243d8] = _0x2930bc + _0x538235 * Math['cos'](_0x1f68aa), _0x374207[_0x3243d8 + 0x1] = _0xed2ed1 + _0x538235 * Math['sin'](_0x1f68aa), _0x374207[_0x3243d8 + 0x2] = _0x1f68aa;
        }
        ['addCurvePo' + 'sition'](_0x11d386, _0x79ab91, _0x5d72b1, _0x295102, _0x13e2b3, _0x4db98b, _0xa24a3a, _0x5d331d, _0x110a58, _0x4cd119, _0x211924, _0x35387d) {
            0x0 == _0x11d386 && (_0x11d386 = 0.0001);
            var _0x24bd3e = _0x11d386 * _0x11d386, _0x16438b = _0x24bd3e * _0x11d386, _0x4b7bc6 = 0x1 - _0x11d386, _0x1990e5 = _0x4b7bc6 * _0x4b7bc6, _0x5ba840 = _0x1990e5 * _0x4b7bc6, _0x1c5c24 = _0x4b7bc6 * _0x11d386, _0x13077f = 0x3 * _0x1c5c24, _0x21c53b = _0x4b7bc6 * _0x13077f, _0x3aeae0 = _0x13077f * _0x11d386, _0x87ee41 = _0x79ab91 * _0x5ba840 + _0x295102 * _0x21c53b + _0x4db98b * _0x3aeae0 + _0x5d331d * _0x16438b, _0x4b639f = _0x5d72b1 * _0x5ba840 + _0x13e2b3 * _0x21c53b + _0xa24a3a * _0x3aeae0 + _0x110a58 * _0x16438b;
            _0x4cd119[_0x211924] = _0x87ee41, _0x4cd119[_0x211924 + 0x1] = _0x4b639f, _0x4cd119[_0x211924 + 0x2] = _0x35387d ? Math['atan2'](_0x4b639f - (_0x5d72b1 * _0x1990e5 + _0x13e2b3 * _0x1c5c24 * 0x2 + _0xa24a3a * _0x24bd3e), _0x87ee41 - (_0x79ab91 * _0x1990e5 + _0x295102 * _0x1c5c24 * 0x2 + _0x4db98b * _0x24bd3e)) : 0x0;
        }
    }
    _0x2e2a54['BEFORE'] = -0x2, _0x2e2a54['AFTER'] = -0x3, _0x2e2a54['_tempMt'] = new _0x5a45c3['Matrix']();
    class _0x209c4c {
        constructor() {
            this['bones'] = [];
        }
    }
    class _0x182fe9 {
        constructor(_0x4c337d, _0x2934d7) {
            var _0x2f7050, _0x1f84bf;
            for (this['_temp'] = [], this['_data'] = _0x4c337d, null == this['_bones'] && (this['_bones'] = []), this['target'] = _0x2934d7[_0x4c337d['targetInde' + 'x']], _0x2f7050 = 0x0, _0x1f84bf = _0x4c337d['boneIndexs']['length']; _0x2f7050 < _0x1f84bf; _0x2f7050++)
                this['_bones']['push'](_0x2934d7[_0x4c337d['boneIndexs'][_0x2f7050]]);
            this['rotateMix'] = _0x4c337d['rotateMix'], this['translateM' + 'ix'] = _0x4c337d['translateM' + 'ix'], this['scaleMix'] = _0x4c337d['scaleMix'], this['shearMix'] = _0x4c337d['shearMix'];
        }
        ['apply']() {
            for (var _0x2b140f, _0x47f87a = this['target']['resultMatr' + 'ix']['a'], _0x41ab01 = this['target']['resultMatr' + 'ix']['b'], _0x223f57 = this['target']['resultMatr' + 'ix']['c'], _0x39be5d = this['target']['resultMatr' + 'ix']['d'], _0x1d85d6 = 0x0, _0x39ecb5 = this['_bones']['length']; _0x1d85d6 < _0x39ecb5; _0x1d85d6++) {
                if (_0x2b140f = this['_bones'][_0x1d85d6], this['rotateMix'] > 0x0) {
                    var _0x4df7a8 = _0x2b140f['resultMatr' + 'ix']['a'], _0x2f3d31 = _0x2b140f['resultMatr' + 'ix']['b'], _0x1419db = _0x2b140f['resultMatr' + 'ix']['c'], _0x1a3fe6 = _0x2b140f['resultMatr' + 'ix']['d'], _0x1b0273 = Math['atan2'](_0x223f57, _0x47f87a) - Math['atan2'](_0x1419db, _0x4df7a8) + this['_data']['offsetRota' + 'tion'] * Math['PI'] / 0xb4;
                    _0x1b0273 > Math['PI'] ? _0x1b0273 -= 0x2 * Math['PI'] : _0x1b0273 < -Math['PI'] && (_0x1b0273 += 0x2 * Math['PI']), _0x1b0273 *= this['rotateMix'];
                    var _0x290ae6 = Math['cos'](_0x1b0273), _0x5b0426 = Math['sin'](_0x1b0273);
                    _0x2b140f['resultMatr' + 'ix']['a'] = _0x290ae6 * _0x4df7a8 - _0x5b0426 * _0x1419db, _0x2b140f['resultMatr' + 'ix']['b'] = _0x290ae6 * _0x2f3d31 - _0x5b0426 * _0x1a3fe6, _0x2b140f['resultMatr' + 'ix']['c'] = _0x5b0426 * _0x4df7a8 + _0x290ae6 * _0x1419db, _0x2b140f['resultMatr' + 'ix']['d'] = _0x5b0426 * _0x2f3d31 + _0x290ae6 * _0x1a3fe6;
                }
                if (this['translateM' + 'ix'] && (this['_temp'][0x0] = this['_data']['offsetX'], this['_temp'][0x1] = this['_data']['offsetY'], this['target']['localToWor' + 'ld'](this['_temp']), _0x2b140f['resultMatr' + 'ix']['tx'] += (this['_temp'][0x0] - _0x2b140f['resultMatr' + 'ix']['tx']) * this['translateM' + 'ix'], _0x2b140f['resultMatr' + 'ix']['ty'] += (this['_temp'][0x1] - _0x2b140f['resultMatr' + 'ix']['ty']) * this['translateM' + 'ix'], _0x2b140f['updateChil' + 'd']()), this['scaleMix'] > 0x0) {
                    var _0x5016b7 = Math['sqrt'](_0x2b140f['resultMatr' + 'ix']['a'] * _0x2b140f['resultMatr' + 'ix']['a'] + _0x2b140f['resultMatr' + 'ix']['c'] * _0x2b140f['resultMatr' + 'ix']['c']), _0x10d877 = Math['sqrt'](_0x47f87a * _0x47f87a + _0x223f57 * _0x223f57), _0x2bf04b = _0x5016b7 > 0.00001 ? (_0x5016b7 + (_0x10d877 - _0x5016b7 + this['_data']['offsetScal' + 'eX']) * this['scaleMix']) / _0x5016b7 : 0x0;
                    _0x2b140f['resultMatr' + 'ix']['a'] *= _0x2bf04b, _0x2b140f['resultMatr' + 'ix']['c'] *= _0x2bf04b, _0x5016b7 = Math['sqrt'](_0x2b140f['resultMatr' + 'ix']['b'] * _0x2b140f['resultMatr' + 'ix']['b'] + _0x2b140f['resultMatr' + 'ix']['d'] * _0x2b140f['resultMatr' + 'ix']['d']), _0x10d877 = Math['sqrt'](_0x41ab01 * _0x41ab01 + _0x39be5d * _0x39be5d), _0x2bf04b = _0x5016b7 > 0.00001 ? (_0x5016b7 + (_0x10d877 - _0x5016b7 + this['_data']['offsetScal' + 'eY']) * this['scaleMix']) / _0x5016b7 : 0x0, _0x2b140f['resultMatr' + 'ix']['b'] *= _0x2bf04b, _0x2b140f['resultMatr' + 'ix']['d'] *= _0x2bf04b;
                }
                if (this['shearMix'] > 0x0) {
                    _0x2f3d31 = _0x2b140f['resultMatr' + 'ix']['b'], _0x1a3fe6 = _0x2b140f['resultMatr' + 'ix']['d'];
                    var _0x3fcb4a = Math['atan2'](_0x1a3fe6, _0x2f3d31);
                    (_0x1b0273 = Math['atan2'](_0x39be5d, _0x41ab01) - Math['atan2'](_0x223f57, _0x47f87a) - (_0x3fcb4a - Math['atan2'](_0x2b140f['resultMatr' + 'ix']['c'], _0x2b140f['resultMatr' + 'ix']['a']))) > Math['PI'] ? _0x1b0273 -= 0x2 * Math['PI'] : _0x1b0273 < -Math['PI'] && (_0x1b0273 += 0x2 * Math['PI']), _0x1b0273 = _0x3fcb4a + (_0x1b0273 + this['_data']['offsetShea' + 'rY'] * Math['PI'] / 0xb4) * this['shearMix'], _0x2bf04b = Math['sqrt'](_0x2f3d31 * _0x2f3d31 + _0x1a3fe6 * _0x1a3fe6), _0x2b140f['resultMatr' + 'ix']['b'] = Math['cos'](_0x1b0273) * _0x2bf04b, _0x2b140f['resultMatr' + 'ix']['d'] = Math['sin'](_0x1b0273) * _0x2bf04b;
                }
            }
        }
    }
    class _0xf4adb1 extends _0x5a45c3['Sprite'] {
        constructor(_0x132279 = null, _0x3e6158 = 0x0) {
            super(), this['_boneMatri' + 'xArray'] = [], this['_lastTime'] = 0x0, this['_currAniIn' + 'dex'] = -0x1, this['_pause'] = !0x0, this['_aniClipIn' + 'dex'] = -0x1, this['_clipIndex'] = -0x1, this['_skinIndex'] = 0x0, this['_skinName'] = 'default', this['_aniMode'] = 0x0, this['_index'] = -0x1, this['_total'] = -0x1, this['_indexCont' + 'rol'] = !0x1, this['_eventInde' + 'x'] = 0x0, this['_drawOrder' + 'Index'] = 0x0, this['_drawOrder'] = null, this['_lastAniCl' + 'ipIndex'] = -0x1, this['_lastUpdat' + 'eAniClipIn' + 'dex'] = -0x1, this['_playAudio'] = !0x0, this['_soundChan' + 'nelArr'] = [], _0x132279 && this['init'](_0x132279, _0x3e6158);
        }
        ['init'](_0x3c37a2, _0x2b20a8 = 0x0) {
            var _0x26fd2e, _0x2111e4, _0x58a11c, _0x536f8d, _0x50a1e6 = 0x0;
            if (0x1 == _0x2b20a8) {
                for (this['_graphicsC' + 'ache'] = [], _0x50a1e6 = 0x0, _0x26fd2e = _0x3c37a2['getAnimati' + 'onCount'](); _0x50a1e6 < _0x26fd2e; _0x50a1e6++)
                    this['_graphicsC' + 'ache']['push']([]);
            }
            if (this['_yReverseM' + 'atrix'] = _0x3c37a2['yReverseMa' + 'trix'], this['_aniMode'] = _0x2b20a8, this['_templet'] = _0x3c37a2, this['_templet']['_addRefere' + 'nce'](0x1), this['_player'] = new _0x194624(), this['_player']['cacheFrame' + 'Rate'] = _0x3c37a2['rate'], this['_player']['templet'] = _0x3c37a2, this['_player']['play'](), this['_parseSrcB' + 'oneMatrix'](), this['_boneList'] = _0x3c37a2['mBoneArr'], this['_rootBone'] = _0x3c37a2['mRootBone'], this['_aniSectio' + 'nDic'] = _0x3c37a2['aniSection' + 'Dic'], _0x3c37a2['ikArr']['length'] > 0x0) {
                for (this['_ikArr'] = [], _0x50a1e6 = 0x0, _0x26fd2e = _0x3c37a2['ikArr']['length']; _0x50a1e6 < _0x26fd2e; _0x50a1e6++)
                    this['_ikArr']['push'](new _0x5e85e9(_0x3c37a2['ikArr'][_0x50a1e6], this['_boneList']));
            }
            if (_0x3c37a2['pathArr']['length'] > 0x0) {
                for (null == this['_pathDic'] && (this['_pathDic'] = {}), _0x50a1e6 = 0x0, _0x26fd2e = _0x3c37a2['pathArr']['length']; _0x50a1e6 < _0x26fd2e; _0x50a1e6++)
                    _0x2111e4 = _0x3c37a2['pathArr'][_0x50a1e6], _0x58a11c = new _0x2e2a54(_0x2111e4, this['_boneList']), (_0x536f8d = this['_boneSlotD' + 'ic'][_0x2111e4['name']]) && ((_0x58a11c = new _0x2e2a54(_0x2111e4, this['_boneList']))['target'] = _0x536f8d), this['_pathDic'][_0x2111e4['name']] = _0x58a11c;
            }
            if (_0x3c37a2['tfArr']['length'] > 0x0) {
                for (this['_tfArr'] = [], _0x50a1e6 = 0x0, _0x26fd2e = _0x3c37a2['tfArr']['length']; _0x50a1e6 < _0x26fd2e; _0x50a1e6++)
                    this['_tfArr']['push'](new _0x182fe9(_0x3c37a2['tfArr'][_0x50a1e6], this['_boneList']));
            }
            if (_0x3c37a2['skinDataAr' + 'ray']['length'] > 0x0) {
                var _0x19b426 = this['_templet']['skinDataAr' + 'ray'][this['_skinIndex']];
                this['_skinName'] = _0x19b426['name'];
            }
            this['_player']['on'](_0x5a45c3['Event']['PLAYED'], this, this['_onPlay']), this['_player']['on'](_0x5a45c3['Event']['STOPPED'], this, this['_onStop']), this['_player']['on'](_0x5a45c3['Event']['PAUSED'], this, this['_onPause']);
        }
        get ['url']() {
            return this['_aniPath'];
        }
        set ['url'](_0x420f0f) {
            this['load'](_0x420f0f);
        }
        ['load'](_0x2b63c4, _0x612272 = null, _0x2ba7c8 = 0x0) {
            this['_aniPath'] = _0x2b63c4, this['_complete'] = _0x612272, this['_loadAniMo' + 'de'] = _0x2ba7c8, _0x5a45c3['ILaya']['loader']['load']([{
                    'url': _0x2b63c4,
                    'type': _0x5a45c3['ILaya']['Loader']['BUFFER']
                }], _0x5a45c3['Handler']['create'](this, this['_onLoaded']));
        }
        ['_onLoaded']() {
            var _0x2d413b, _0x4d2aa8 = _0x5a45c3['ILaya']['Loader']['getRes'](this['_aniPath']);
            null != _0x4d2aa8 && (null == _0x458972['Templet']['TEMPLET_DI' + 'CTIONARY'] && (_0x458972['Templet']['TEMPLET_DI' + 'CTIONARY'] = {}), (_0x2d413b = _0x458972['Templet']['TEMPLET_DI' + 'CTIONARY'][this['_aniPath']]) ? _0x2d413b['isParseFai' + 'l'] ? this['_parseFail']() : _0x2d413b['isParserCo' + 'mplete'] ? this['_parseComp' + 'lete']() : (_0x2d413b['on'](_0x5a45c3['Event']['COMPLETE'], this, this['_parseComp' + 'lete']), _0x2d413b['on'](_0x5a45c3['Event']['ERROR'], this, this['_parseFail'])) : ((_0x2d413b = new _0x458972['Templet']())['_setCreate' + 'URL'](this['_aniPath']), _0x458972['Templet']['TEMPLET_DI' + 'CTIONARY'][this['_aniPath']] = _0x2d413b, _0x2d413b['on'](_0x5a45c3['Event']['COMPLETE'], this, this['_parseComp' + 'lete']), _0x2d413b['on'](_0x5a45c3['Event']['ERROR'], this, this['_parseFail']), _0x2d413b['isParserCo' + 'mplete'] = !0x1, _0x2d413b['parseData'](null, _0x4d2aa8)));
        }
        ['_parseComp' + 'lete']() {
            var _0x5735c7 = _0x458972['Templet']['TEMPLET_DI' + 'CTIONARY'][this['_aniPath']];
            _0x5735c7 && (this['init'](_0x5735c7, this['_loadAniMo' + 'de']), this['play'](0x0, !0x0)), this['_complete'] && this['_complete']['runWith'](this);
        }
        ['_parseFail']() {
        }
        ['_onPlay']() {
            this['event'](_0x5a45c3['Event']['PLAYED']);
        }
        ['_onStop']() {
            var _0x195e86, _0x1dc039 = this['_templet']['eventAniAr' + 'r'][this['_aniClipIn' + 'dex']];
            if (_0x1dc039 && this['_eventInde' + 'x'] < _0x1dc039['length']) {
                for (; this['_eventInde' + 'x'] < _0x1dc039['length']; this['_eventInde' + 'x']++)
                    (_0x195e86 = _0x1dc039[this['_eventInde' + 'x']])['time'] >= this['_player']['playStart'] && _0x195e86['time'] <= this['_player']['playEnd'] && this['event'](_0x5a45c3['Event']['LABEL'], _0x195e86);
            }
            this['_drawOrder'] = null, this['event'](_0x5a45c3['Event']['STOPPED']);
        }
        ['_onPause']() {
            this['event'](_0x5a45c3['Event']['PAUSED']);
        }
        ['_parseSrcB' + 'oneMatrix']() {
            var _0x2fe7c9 = 0x0, _0x5b715f = 0x0;
            for (_0x5b715f = this['_templet']['srcBoneMat' + 'rixArr']['length'], _0x2fe7c9 = 0x0; _0x2fe7c9 < _0x5b715f; _0x2fe7c9++)
                this['_boneMatri' + 'xArray']['push'](new _0x5a45c3['Matrix']());
            if (0x0 == this['_aniMode'])
                this['_boneSlotD' + 'ic'] = this['_templet']['boneSlotDi' + 'c'], this['_bindBoneB' + 'oneSlotDic'] = this['_templet']['bindBoneBo' + 'neSlotDic'], this['_boneSlotA' + 'rray'] = this['_templet']['boneSlotAr' + 'ray'];
            else {
                null == this['_boneSlotD' + 'ic'] && (this['_boneSlotD' + 'ic'] = {}), null == this['_bindBoneB' + 'oneSlotDic'] && (this['_bindBoneB' + 'oneSlotDic'] = {}), null == this['_boneSlotA' + 'rray'] && (this['_boneSlotA' + 'rray'] = []);
                var _0x15e428, _0x519113, _0x9ad691 = this['_templet']['boneSlotAr' + 'ray'];
                for (_0x2fe7c9 = 0x0, _0x5b715f = _0x9ad691['length']; _0x2fe7c9 < _0x5b715f; _0x2fe7c9++)
                    _0x15e428 = _0x9ad691[_0x2fe7c9], null == (_0x519113 = this['_bindBoneB' + 'oneSlotDic'][_0x15e428['parent']]) && (this['_bindBoneB' + 'oneSlotDic'][_0x15e428['parent']] = _0x519113 = []), this['_boneSlotD' + 'ic'][_0x15e428['name']] = _0x15e428 = _0x15e428['copy'](), _0x519113['push'](_0x15e428), this['_boneSlotA' + 'rray']['push'](_0x15e428);
            }
        }
        ['_emitMisse' + 'dEvents'](_0x39c991, _0x73fd39, _0x57b701 = 0x0) {
            var _0x2639c4 = this['_templet']['eventAniAr' + 'r'][this['_player']['currentAni' + 'mationClip' + 'Index']];
            if (_0x2639c4) {
                var _0x1ad0fe, _0x2babdc, _0x5cad86 = 0x0;
                for (_0x1ad0fe = _0x2639c4['length'], _0x5cad86 = _0x57b701; _0x5cad86 < _0x1ad0fe; _0x5cad86++)
                    (_0x2babdc = _0x2639c4[_0x5cad86])['time'] >= this['_player']['playStart'] && _0x2babdc['time'] <= this['_player']['playEnd'] && this['event'](_0x5a45c3['Event']['LABEL'], _0x2babdc);
            }
        }
        ['_update'](_0x38a908 = !0x0) {
            if (!(this['_pause'] || _0x38a908 && this['_indexCont' + 'rol'])) {
                var _0x3c5182 = this['timer']['currTimer'], _0x391b69 = this['_player']['currentKey' + 'frameIndex'], _0x20ffee = _0x3c5182 - this['_lastTime'];
                if (_0x38a908 ? this['_player']['_update'](_0x20ffee) : _0x391b69 = -0x1, this['_lastTime'] = _0x3c5182, this['_player'] && (this['_index'] = this['_clipIndex'] = this['_player']['currentKey' + 'frameIndex'], !(this['_index'] < 0x0 || _0x20ffee > 0x0 && this['_clipIndex'] == _0x391b69 && this['_lastUpdat' + 'eAniClipIn' + 'dex'] == this['_aniClipIn' + 'dex']))) {
                    this['_lastUpdat' + 'eAniClipIn' + 'dex'] = this['_aniClipIn' + 'dex'], _0x391b69 > this['_clipIndex'] && 0x0 != this['_eventInde' + 'x'] && (this['_emitMisse' + 'dEvents'](this['_player']['playStart'], this['_player']['playEnd'], this['_eventInde' + 'x']), this['_eventInde' + 'x'] = 0x0);
                    var _0x5ee0ff, _0x23d682, _0x286c90 = this['_templet']['eventAniAr' + 'r'][this['_aniClipIn' + 'dex']];
                    if (_0x286c90 && this['_eventInde' + 'x'] < _0x286c90['length']) {
                        var _0x3a26c6 = _0x286c90[this['_eventInde' + 'x']];
                        _0x3a26c6['time'] >= this['_player']['playStart'] && _0x3a26c6['time'] <= this['_player']['playEnd'] ? this['_player']['currentPla' + 'yTime'] >= _0x3a26c6['time'] && (this['event'](_0x5a45c3['Event']['LABEL'], _0x3a26c6), this['_eventInde' + 'x']++, this['_playAudio'] && _0x3a26c6['audioValue'] && 'null' !== _0x3a26c6['audioValue'] && 'undefined' !== _0x3a26c6['audioValue'] && (_0x5ee0ff = _0x5a45c3['SoundManag' + 'er']['playSound'](this['_player']['templet']['_path'] + _0x3a26c6['audioValue'], 0x1, _0x5a45c3['Handler']['create'](this, this['_onAniSoun' + 'dStoped'])), _0x5a45c3['SoundManag' + 'er']['playbackRa' + 'te'] = this['_player']['playbackRa' + 'te'], _0x5ee0ff && this['_soundChan' + 'nelArr']['push'](_0x5ee0ff))) : _0x3a26c6['time'] < this['_player']['playStart'] && this['_playAudio'] && _0x3a26c6['audioValue'] && 'null' !== _0x3a26c6['audioValue'] && 'undefined' !== _0x3a26c6['audioValue'] ? (this['_eventInde' + 'x']++, _0x5ee0ff = _0x5a45c3['SoundManag' + 'er']['playSound'](this['_player']['templet']['_path'] + _0x3a26c6['audioValue'], 0x1, _0x5a45c3['Handler']['create'](this, this['_onAniSoun' + 'dStoped']), null, (this['_player']['currentPla' + 'yTime'] - _0x3a26c6['time']) / 0x3e8), _0x5a45c3['SoundManag' + 'er']['playbackRa' + 'te'] = this['_player']['playbackRa' + 'te'], _0x5ee0ff && this['_soundChan' + 'nelArr']['push'](_0x5ee0ff)) : this['_eventInde' + 'x']++;
                    }
                    0x0 == this['_aniMode'] ? (_0x23d682 = this['_templet']['getGrahics' + 'DataWithCa' + 'che'](this['_aniClipIn' + 'dex'], this['_clipIndex']) || this['_createGra' + 'phics']()) && this['graphics'] != _0x23d682 && (this['graphics'] = _0x23d682) : 0x1 == this['_aniMode'] ? (_0x23d682 = this['_getGrahic' + 'sDataWithC' + 'ache'](this['_aniClipIn' + 'dex'], this['_clipIndex']) || this['_createGra' + 'phics']()) && this['graphics'] != _0x23d682 && (this['graphics'] = _0x23d682) : this['_createGra' + 'phics']();
                }
            }
        }
        ['_onAniSoun' + 'dStoped'](_0x12ecf5) {
            for (var _0x43d266, _0x5b6df9 = this['_soundChan' + 'nelArr']['length'], _0x348bee = 0x0; _0x348bee < _0x5b6df9; _0x348bee++)
                ((_0x43d266 = this['_soundChan' + 'nelArr'][_0x348bee])['isStopped'] || _0x12ecf5) && (!_0x43d266['isStopped'] && _0x43d266['stop'](), this['_soundChan' + 'nelArr']['splice'](_0x348bee, 0x1), _0x5b6df9--, _0x348bee--);
        }
        ['_createGra' + 'phics'](_0x3ba153 = -0x1) {
            -0x1 == _0x3ba153 && (_0x3ba153 = this['_clipIndex']);
            var _0x136ec6, _0x12273d = _0x3ba153 * this['_player']['cacheFrame' + 'RateInterv' + 'al'], _0x21b7f2 = this['_templet']['drawOrderA' + 'niArr'][this['_aniClipIn' + 'dex']];
            if (_0x21b7f2 && _0x21b7f2['length'] > 0x0) {
                for (this['_drawOrder' + 'Index'] = 0x0, _0x136ec6 = _0x21b7f2[this['_drawOrder' + 'Index']]; _0x12273d >= _0x136ec6['time'] && (this['_drawOrder'] = _0x136ec6['drawOrder'], this['_drawOrder' + 'Index']++, !(this['_drawOrder' + 'Index'] >= _0x21b7f2['length']));)
                    _0x136ec6 = _0x21b7f2[this['_drawOrder' + 'Index']];
            }
            0x0 == this['_aniMode'] || 0x1 == this['_aniMode'] ? this['graphics'] = _0x15601c['create']() : this['graphics'] instanceof _0x15601c ? this['graphics']['clear']() : this['graphics'] = _0x15601c['create']();
            var _0x27e0f9 = this['graphics'], _0x3276c2 = this['_templet']['getNodes'](this['_aniClipIn' + 'dex']), _0x4247c6 = 0x0 == this['_player']['state'];
            this['_templet']['getOrigina' + 'lData'](this['_aniClipIn' + 'dex'], this['_curOrigin' + 'alData'], null, _0x3ba153, _0x4247c6 ? _0x12273d + this['_player']['cacheFrame' + 'RateInterv' + 'al'] : _0x12273d);
            var _0x3636dc, _0x3d3b96, _0x3b4966, _0x26817b, _0x5b5273 = this['_aniSectio' + 'nDic'][this['_aniClipIn' + 'dex']], _0x19c325 = 0x0, _0x22ae04 = 0x0, _0x13dc5b = 0x0, _0xf0cd42 = 0x0, _0x126661 = 0x0, _0x37e0c1 = this['_templet']['srcBoneMat' + 'rixArr']['length'], _0x5f93f5 = this['_curOrigin' + 'alData'];
            for (_0x22ae04 = 0x0, _0x126661 = _0x5b5273[0x0]; _0x22ae04 < _0x37e0c1; _0x22ae04++) {
                var _0x5c8bac = (_0x26817b = this['_boneList'][_0x22ae04])['resultTran' + 'sform'];
                _0x3b4966 = this['_templet']['srcBoneMat' + 'rixArr'][_0x22ae04], _0x5c8bac['scX'] = _0x3b4966['scX'] * _0x5f93f5[_0x19c325++], _0x5c8bac['skX'] = _0x3b4966['skX'] + _0x5f93f5[_0x19c325++], _0x5c8bac['skY'] = _0x3b4966['skY'] + _0x5f93f5[_0x19c325++], _0x5c8bac['scY'] = _0x3b4966['scY'] * _0x5f93f5[_0x19c325++], _0x5c8bac['x'] = _0x3b4966['x'] + _0x5f93f5[_0x19c325++], _0x5c8bac['y'] = _0x3b4966['y'] + _0x5f93f5[_0x19c325++], 0x8 === this['_templet']['tMatrixDat' + 'aLen'] && (_0x5c8bac['skewX'] = _0x3b4966['skewX'] + _0x5f93f5[_0x19c325++], _0x5c8bac['skewY'] = _0x3b4966['skewY'] + _0x5f93f5[_0x19c325++]);
            }
            var _0x1feff0, _0x296680 = {}, _0x38623a = {};
            for (_0x126661 += _0x5b5273[0x1]; _0x22ae04 < _0x126661; _0x22ae04++)
                _0x296680[(_0x1feff0 = _0x3276c2[_0x22ae04])['name']] = _0x5f93f5[_0x19c325++], _0x38623a[_0x1feff0['name']] = _0x5f93f5[_0x19c325++], _0x19c325 += 0x4;
            var _0x264c20, _0x1de539, _0x4cf2e6 = {}, _0x2c6dd3 = {};
            for (_0x126661 += _0x5b5273[0x2]; _0x22ae04 < _0x126661; _0x22ae04++)
                _0x4cf2e6[(_0x1feff0 = _0x3276c2[_0x22ae04])['name']] = _0x5f93f5[_0x19c325++], _0x2c6dd3[_0x1feff0['name']] = _0x5f93f5[_0x19c325++], _0x19c325 += 0x4;
            if (this['_pathDic'])
                for (_0x126661 += _0x5b5273[0x3]; _0x22ae04 < _0x126661; _0x22ae04++) {
                    if (_0x1feff0 = _0x3276c2[_0x22ae04], _0x264c20 = this['_pathDic'][_0x1feff0['name']])
                        switch (new _0x5a45c3['Byte'](_0x1feff0['extenData'])['getByte']()) {
                        case 0x1:
                            _0x264c20['position'] = _0x5f93f5[_0x19c325++];
                            break;
                        case 0x2:
                            _0x264c20['spacing'] = _0x5f93f5[_0x19c325++];
                            break;
                        case 0x3:
                            _0x264c20['rotateMix'] = _0x5f93f5[_0x19c325++], _0x264c20['translateM' + 'ix'] = _0x5f93f5[_0x19c325++];
                        }
                }
            if (this['_rootBone']['update'](this['_yReverseM' + 'atrix'] || _0x5a45c3['Matrix']['TEMP']['identity']()), this['_ikArr']) {
                for (_0x22ae04 = 0x0, _0x126661 = this['_ikArr']['length']; _0x22ae04 < _0x126661; _0x22ae04++)
                    (_0x1de539 = this['_ikArr'][_0x22ae04])['name'] in _0x4cf2e6 && (_0x1de539['bendDirect' + 'ion'] = _0x4cf2e6[_0x1de539['name']]), _0x1de539['name'] in _0x2c6dd3 && (_0x1de539['mix'] = _0x2c6dd3[_0x1de539['name']]), _0x1de539['apply']();
            }
            if (this['_pathDic']) {
                for (var _0xa27356 in this['_pathDic'])
                    (_0x264c20 = this['_pathDic'][_0xa27356])['apply'](this['_boneList'], _0x27e0f9);
            }
            if (this['_tfArr']) {
                for (_0x22ae04 = 0x0, _0xf0cd42 = this['_tfArr']['length']; _0x22ae04 < _0xf0cd42; _0x22ae04++)
                    this['_tfArr'][_0x22ae04]['apply']();
            }
            for (_0x22ae04 = 0x0, _0xf0cd42 = this['_boneList']['length']; _0x22ae04 < _0xf0cd42; _0x22ae04++)
                if (_0x26817b = this['_boneList'][_0x22ae04], _0x3d3b96 = this['_bindBoneB' + 'oneSlotDic'][_0x26817b['name']], _0x26817b['resultMatr' + 'ix']['copyTo'](this['_boneMatri' + 'xArray'][_0x22ae04]), _0x3d3b96) {
                    for (_0x13dc5b = 0x0, _0x126661 = _0x3d3b96['length']; _0x13dc5b < _0x126661; _0x13dc5b++)
                        (_0x3636dc = _0x3d3b96[_0x13dc5b]) && _0x3636dc['setParentM' + 'atrix'](_0x26817b['resultMatr' + 'ix']);
                }
            var _0x567155, _0x297cb1, _0x5ca283, _0x2f9959, _0x7affc5 = {}, _0x5efa77 = this['_templet']['deformAniA' + 'rr'];
            if (_0x5efa77 && _0x5efa77['length'] > 0x0) {
                if (this['_lastAniCl' + 'ipIndex'] != this['_aniClipIn' + 'dex']) {
                    for (this['_lastAniCl' + 'ipIndex'] = this['_aniClipIn' + 'dex'], _0x22ae04 = 0x0, _0x126661 = this['_boneSlotA' + 'rray']['length']; _0x22ae04 < _0x126661; _0x22ae04++)
                        (_0x3636dc = this['_boneSlotA' + 'rray'][_0x22ae04])['deformData'] = null;
                }
                var _0xd69d98, _0x4aa009 = _0x5efa77[this['_aniClipIn' + 'dex']];
                for (_0xd69d98 in (_0x567155 = _0x4aa009['default'], this['_setDeform'](_0x567155, _0x7affc5, this['_boneSlotA' + 'rray'], _0x12273d), _0x4aa009))
                    'default' != _0xd69d98 && _0xd69d98 != this['_skinName'] && (_0x567155 = _0x4aa009[_0xd69d98], this['_setDeform'](_0x567155, _0x7affc5, this['_boneSlotA' + 'rray'], _0x12273d));
                _0x567155 = _0x4aa009[this['_skinName']], this['_setDeform'](_0x567155, _0x7affc5, this['_boneSlotA' + 'rray'], _0x12273d);
            }
            if (this['_drawOrder']) {
                for (_0x22ae04 = 0x0, _0x126661 = this['_drawOrder']['length']; _0x22ae04 < _0x126661; _0x22ae04++)
                    _0x297cb1 = _0x296680[(_0x3636dc = this['_boneSlotA' + 'rray'][this['_drawOrder'][_0x22ae04]])['name']], _0x5ca283 = _0x38623a[_0x3636dc['name']], isNaN(_0x297cb1) || -0x2 == _0x297cb1 || (this['_templet']['attachment' + 'Names'] ? _0x3636dc['showDispla' + 'yByName'](this['_templet']['attachment' + 'Names'][_0x297cb1]) : _0x3636dc['showDispla' + 'yByIndex'](_0x297cb1)), _0x7affc5[this['_drawOrder'][_0x22ae04]] ? (_0x2f9959 = _0x7affc5[this['_drawOrder'][_0x22ae04]], _0x3636dc['currDispla' + 'yData'] && _0x2f9959[_0x3636dc['currDispla' + 'yData']['attachment' + 'Name']] ? _0x3636dc['deformData'] = _0x2f9959[_0x3636dc['currDispla' + 'yData']['attachment' + 'Name']] : _0x3636dc['deformData'] = null) : _0x3636dc['deformData'] = null, isNaN(_0x5ca283) ? _0x3636dc['draw'](_0x27e0f9, this['_boneMatri' + 'xArray'], 0x2 == this['_aniMode']) : _0x3636dc['draw'](_0x27e0f9, this['_boneMatri' + 'xArray'], 0x2 == this['_aniMode'], _0x5ca283);
            } else {
                for (_0x22ae04 = 0x0, _0x126661 = this['_boneSlotA' + 'rray']['length']; _0x22ae04 < _0x126661; _0x22ae04++)
                    _0x297cb1 = _0x296680[(_0x3636dc = this['_boneSlotA' + 'rray'][_0x22ae04])['name']], _0x5ca283 = _0x38623a[_0x3636dc['name']], isNaN(_0x297cb1) || -0x2 == _0x297cb1 || (this['_templet']['attachment' + 'Names'] ? _0x3636dc['showDispla' + 'yByName'](this['_templet']['attachment' + 'Names'][_0x297cb1]) : _0x3636dc['showDispla' + 'yByIndex'](_0x297cb1)), _0x7affc5[_0x22ae04] ? (_0x2f9959 = _0x7affc5[_0x22ae04], _0x3636dc['currDispla' + 'yData'] && _0x2f9959[_0x3636dc['currDispla' + 'yData']['attachment' + 'Name']] ? _0x3636dc['deformData'] = _0x2f9959[_0x3636dc['currDispla' + 'yData']['attachment' + 'Name']] : _0x3636dc['deformData'] = null) : _0x3636dc['deformData'] = null, isNaN(_0x5ca283) ? _0x3636dc['draw'](_0x27e0f9, this['_boneMatri' + 'xArray'], 0x2 == this['_aniMode']) : _0x3636dc['draw'](_0x27e0f9, this['_boneMatri' + 'xArray'], 0x2 == this['_aniMode'], _0x5ca283);
            }
            return 0x0 == this['_aniMode'] ? (this['_templet']['setGrahics' + 'DataWithCa' + 'che'](this['_aniClipIn' + 'dex'], _0x3ba153, _0x27e0f9), this['_checkIsAl' + 'lParsed'](this['_aniClipIn' + 'dex'])) : 0x1 == this['_aniMode'] && this['_setGrahic' + 'sDataWithC' + 'ache'](this['_aniClipIn' + 'dex'], _0x3ba153, _0x27e0f9), _0x27e0f9;
        }
        ['_checkIsAl' + 'lParsed'](_0x3e32a7) {
            var _0x4d3f43, _0x481bcb;
            for (_0x481bcb = Math['floor'](0.01 + this['_templet']['getAniDura' + 'tion'](_0x3e32a7) / 0x3e8 * this['_player']['cacheFrame' + 'Rate']), _0x4d3f43 = 0x0; _0x4d3f43 < _0x481bcb; _0x4d3f43++)
                if (!this['_templet']['getGrahics' + 'DataWithCa' + 'che'](_0x3e32a7, _0x4d3f43))
                    return;
            this['_templet']['getGrahics' + 'DataWithCa' + 'che'](_0x3e32a7, _0x481bcb) ? this['_templet']['deleteAniD' + 'ata'](_0x3e32a7) : this['_createGra' + 'phics'](_0x481bcb);
        }
        ['_setDeform'](_0x106d9d, _0x4c912b, _0x152cb0, _0x319a4e) {
            var _0x3dcc6c, _0x59f2d7, _0x1e338c, _0x74d4db, _0x5edc28, _0x41d6f2;
            if (_0x106d9d && _0x106d9d) {
                for (_0x74d4db = 0x0, _0x5edc28 = _0x106d9d['deformSlot' + 'DataList']['length']; _0x74d4db < _0x5edc28; _0x74d4db++)
                    for (_0x3dcc6c = _0x106d9d['deformSlot' + 'DataList'][_0x74d4db], _0x41d6f2 = 0x0; _0x41d6f2 < _0x3dcc6c['deformSlot' + 'DisplayLis' + 't']['length']; _0x41d6f2++)
                        _0x1e338c = _0x152cb0[(_0x59f2d7 = _0x3dcc6c['deformSlot' + 'DisplayLis' + 't'][_0x41d6f2])['slotIndex']], _0x59f2d7['apply'](_0x319a4e, _0x1e338c), _0x4c912b[_0x59f2d7['slotIndex']] || (_0x4c912b[_0x59f2d7['slotIndex']] = {}), _0x4c912b[_0x59f2d7['slotIndex']][_0x59f2d7['attachment']] = _0x59f2d7['deformData'];
            }
        }
        ['getAnimNum']() {
            return this['_templet']['getAnimati' + 'onCount']();
        }
        ['getAniName' + 'ByIndex'](_0x1cb0f7) {
            return this['_templet']['getAniName' + 'ByIndex'](_0x1cb0f7);
        }
        ['getSlotByN' + 'ame'](_0x52f17d) {
            return this['_boneSlotD' + 'ic'][_0x52f17d];
        }
        ['showSkinBy' + 'Name'](_0x27c1b3, _0x33486e = !0x0) {
            this['showSkinBy' + 'Index'](this['_templet']['getSkinInd' + 'exByName'](_0x27c1b3), _0x33486e);
        }
        ['showSkinBy' + 'Index'](_0x2a83c7, _0x454aca = !0x0) {
            for (var _0x26e808 = 0x0; _0x26e808 < this['_boneSlotA' + 'rray']['length']; _0x26e808++)
                this['_boneSlotA' + 'rray'][_0x26e808]['showSlotDa' + 'ta'](null, _0x454aca);
            if (this['_templet']['showSkinBy' + 'Index'](this['_boneSlotD' + 'ic'], _0x2a83c7, _0x454aca)) {
                var _0xa22efa = this['_templet']['skinDataAr' + 'ray'][_0x2a83c7];
                this['_skinIndex'] = _0x2a83c7, this['_skinName'] = _0xa22efa['name'];
            }
            this['_clearCach' + 'e']();
        }
        ['showSlotSk' + 'inByIndex'](_0x26011d, _0x337f48) {
            if (0x0 != this['_aniMode']) {
                var _0x547378 = this['getSlotByN' + 'ame'](_0x26011d);
                _0x547378 && _0x547378['showDispla' + 'yByIndex'](_0x337f48), this['_clearCach' + 'e']();
            }
        }
        ['showSlotSk' + 'inByName'](_0x13da09, _0x5804cb) {
            if (0x0 != this['_aniMode']) {
                var _0x50b4d7 = this['getSlotByN' + 'ame'](_0x13da09);
                _0x50b4d7 && _0x50b4d7['showDispla' + 'yByName'](_0x5804cb), this['_clearCach' + 'e']();
            }
        }
        ['replaceSlo' + 'tSkinName'](_0x5915d5, _0x26f0fd, _0x58143b) {
            if (0x0 != this['_aniMode']) {
                var _0x5adb39 = this['getSlotByN' + 'ame'](_0x5915d5);
                _0x5adb39 && _0x5adb39['replaceDis' + 'playByName'](_0x26f0fd, _0x58143b), this['_clearCach' + 'e']();
            }
        }
        ['replaceSlo' + 'tSkinByInd' + 'ex'](_0x3b4e7a, _0x5e2f41, _0x2d3a29) {
            if (0x0 != this['_aniMode']) {
                var _0x4e6cac = this['getSlotByN' + 'ame'](_0x3b4e7a);
                _0x4e6cac && _0x4e6cac['replaceDis' + 'playByInde' + 'x'](_0x5e2f41, _0x2d3a29), this['_clearCach' + 'e']();
            }
        }
        ['setSlotSki' + 'n'](_0x38ee15, _0x54e42b) {
            if (0x0 != this['_aniMode']) {
                var _0x427279 = this['getSlotByN' + 'ame'](_0x38ee15);
                _0x427279 && _0x427279['replaceSki' + 'n'](_0x54e42b), this['_clearCach' + 'e']();
            }
        }
        ['_clearCach' + 'e']() {
            if (0x1 == this['_aniMode'])
                for (var _0x12f789 = 0x0, _0x16acc1 = this['_graphicsC' + 'ache']['length']; _0x12f789 < _0x16acc1; _0x12f789++) {
                    for (var _0x1c505c = 0x0, _0x13734d = this['_graphicsC' + 'ache'][_0x12f789]['length']; _0x1c505c < _0x13734d; _0x1c505c++) {
                        var _0x4fc5d0 = this['_graphicsC' + 'ache'][_0x12f789][_0x1c505c];
                        _0x4fc5d0 && _0x4fc5d0 != this['graphics'] && _0x15601c['recycle'](_0x4fc5d0);
                    }
                    this['_graphicsC' + 'ache'][_0x12f789]['length'] = 0x0;
                }
        }
        ['play'](_0x54de1e, _0xbca63a, _0x5ba26b = !0x0, _0x16c860 = 0x0, _0x4e4163 = 0x0, _0x300071 = !0x0, _0x484e85 = !0x0) {
            this['_playAudio'] = _0x484e85, this['_indexCont' + 'rol'] = !0x1;
            var _0x3d5d0a, _0x5e7082 = -0x1;
            if (_0x3d5d0a = _0xbca63a ? 0x7fffffff : 0x0, 'string' == typeof _0x54de1e)
                for (var _0x270574 = 0x0, _0x127591 = this['_templet']['getAnimati' + 'onCount'](); _0x270574 < _0x127591; _0x270574++) {
                    var _0x81ccc8 = this['_templet']['getAnimati' + 'on'](_0x270574);
                    if (_0x81ccc8 && _0x54de1e == _0x81ccc8['name']) {
                        _0x5e7082 = _0x270574;
                        break;
                    }
                }
            else
                _0x5e7082 = _0x54de1e;
            _0x5e7082 > -0x1 && _0x5e7082 < this['getAnimNum']() && (this['_aniClipIn' + 'dex'] = _0x5e7082, (_0x5ba26b || this['_pause'] || this['_currAniIn' + 'dex'] != _0x5e7082) && (this['_currAniIn' + 'dex'] = _0x5e7082, this['_curOrigin' + 'alData'] = new Float32Array(this['_templet']['getTotalke' + 'yframesLen' + 'gth'](_0x5e7082)), this['_drawOrder'] = null, this['_eventInde' + 'x'] = 0x0, this['_player']['play'](_0x5e7082, this['_player']['playbackRa' + 'te'], _0x3d5d0a, _0x16c860, _0x4e4163), _0x300071 && this['_templet']['showSkinBy' + 'Index'](this['_boneSlotD' + 'ic'], this['_skinIndex']), this['_pause'] && (this['_pause'] = !0x1, this['_lastTime'] = _0x5a45c3['ILaya']['Browser']['now'](), this['timer']['frameLoop'](0x1, this, this['_update'], null, !0x0)), this['_update']()));
        }
        ['stop']() {
            this['_pause'] || (this['_pause'] = !0x0, this['_player'] && this['_player']['stop'](!0x0), this['_soundChan' + 'nelArr']['length'] > 0x0 && this['_onAniSoun' + 'dStoped'](!0x0), this['timer']['clear'](this, this['_update']));
        }
        ['playbackRa' + 'te'](_0x155454) {
            this['_player'] && (this['_player']['playbackRa' + 'te'] = _0x155454);
        }
        ['paused']() {
            if (!this['_pause']) {
                if (this['_pause'] = !0x0, this['_player'] && (this['_player']['paused'] = !0x0), this['_soundChan' + 'nelArr']['length'] > 0x0) {
                    for (var _0x1411c9, _0x274305 = this['_soundChan' + 'nelArr']['length'], _0x8932a7 = 0x0; _0x8932a7 < _0x274305; _0x8932a7++)
                        (_0x1411c9 = this['_soundChan' + 'nelArr'][_0x8932a7])['isStopped'] || _0x1411c9['pause']();
                }
                this['timer']['clear'](this, this['_update']);
            }
        }
        ['resume']() {
            if (this['_indexCont' + 'rol'] = !0x1, this['_pause']) {
                if (this['_pause'] = !0x1, this['_player'] && (this['_player']['paused'] = !0x1), this['_soundChan' + 'nelArr']['length'] > 0x0) {
                    for (var _0x51b545, _0x18a7f4 = this['_soundChan' + 'nelArr']['length'], _0x3a103f = 0x0; _0x3a103f < _0x18a7f4; _0x3a103f++)
                        (_0x51b545 = this['_soundChan' + 'nelArr'][_0x3a103f])['audioBuffe' + 'r'] && _0x51b545['resume']();
                }
                this['_lastTime'] = _0x5a45c3['ILaya']['Browser']['now'](), this['timer']['frameLoop'](0x1, this, this['_update'], null, !0x0);
            }
        }
        ['_getGrahic' + 'sDataWithC' + 'ache'](_0x4c47d0, _0x3a51fe) {
            return this['_graphicsC' + 'ache'][_0x4c47d0][_0x3a51fe];
        }
        ['_setGrahic' + 'sDataWithC' + 'ache'](_0x5bb90a, _0x55e158, _0x57d283) {
            this['_graphicsC' + 'ache'][_0x5bb90a][_0x55e158] = _0x57d283;
        }
        ['destroy'](_0xd5d8ad = !0x0) {
            super['destroy'](_0xd5d8ad), this['_templet']['_removeRef' + 'erence'](0x1), this['_templet'] = null, this['_player'] && this['_player']['offAll'](), this['_player'] = null, this['_curOrigin' + 'alData'] = null, this['_boneMatri' + 'xArray']['length'] = 0x0, this['_lastTime'] = 0x0, this['timer']['clear'](this, this['_update']), this['_soundChan' + 'nelArr']['length'] > 0x0 && this['_onAniSoun' + 'dStoped'](!0x0);
        }
        get ['index']() {
            return this['_index'];
        }
        set ['index'](_0xf15fc6) {
            this['player'] && (this['_index'] = _0xf15fc6, this['_player']['currentTim' + 'e'] = 0x3e8 * this['_index'] / this['_player']['cacheFrame' + 'Rate'], this['_indexCont' + 'rol'] = !0x0, this['_update'](!0x1));
        }
        get ['total']() {
            return this['_templet'] && this['_player'] ? this['_total'] = Math['floor'](this['_templet']['getAniDura' + 'tion'](this['_player']['currentAni' + 'mationClip' + 'Index']) / 0x3e8 * this['_player']['cacheFrame' + 'Rate']) : this['_total'] = -0x1, this['_total'];
        }
        get ['player']() {
            return this['_player'];
        }
        get ['templet']() {
            return this['_templet'];
        }
    }
    _0xf4adb1['useSimpleM' + 'eshInCanva' + 's'] = !0x1, _0x458972['Skeleton'] = _0xf4adb1, _0x5a45c3['ILaya']['regClass'](_0xf4adb1), _0x5a45c3['ClassUtils']['regClass']('laya.ani.b' + 'one.Skelet' + 'on', _0xf4adb1), _0x5a45c3['ClassUtils']['regClass']('Laya.Skele' + 'ton', _0xf4adb1);
    class _0x45dadf {
        constructor() {
            this['slotArr'] = [];
        }
    }
    class _0x427cb9 {
        ['createText' + 'ure'](_0x2a8765) {
            return this['texture'] ? this['texture'] : (this['texture'] = new _0x5a45c3['Texture'](_0x2a8765['bitmap'], this['uvs']), this['uvs'][0x0] > this['uvs'][0x4] && this['uvs'][0x1] > this['uvs'][0x5] ? (this['texture']['width'] = _0x2a8765['height'], this['texture']['height'] = _0x2a8765['width'], this['texture']['offsetX'] = -_0x2a8765['offsetX'], this['texture']['offsetY'] = -_0x2a8765['offsetY'], this['texture']['sourceWidt' + 'h'] = _0x2a8765['sourceHeig' + 'ht'], this['texture']['sourceHeig' + 'ht'] = _0x2a8765['sourceWidt' + 'h']) : (this['texture']['width'] = _0x2a8765['width'], this['texture']['height'] = _0x2a8765['height'], this['texture']['offsetX'] = -_0x2a8765['offsetX'], this['texture']['offsetY'] = -_0x2a8765['offsetY'], this['texture']['sourceWidt' + 'h'] = _0x2a8765['sourceWidt' + 'h'], this['texture']['sourceHeig' + 'ht'] = _0x2a8765['sourceHeig' + 'ht']), this['texture']);
        }
        ['destory']() {
            this['texture'] && this['texture']['destroy']();
        }
    }
    class _0x4df105 {
        constructor() {
            this['displayArr'] = [];
        }
        ['getDisplay' + 'ByName'](_0x478db9) {
            for (var _0x1b5a29 = 0x0, _0x5064b0 = this['displayArr']['length']; _0x1b5a29 < _0x5064b0; _0x1b5a29++)
                if (this['displayArr'][_0x1b5a29]['attachment' + 'Name'] == _0x478db9)
                    return _0x1b5a29;
            return -0x1;
        }
    }
    class _0x41dc6c {
        constructor() {
            this['boneIndexs'] = [];
        }
    }
    class _0x5b7f0e extends _0x1a2660 {
        constructor() {
            super(...arguments), this['_graphicsC' + 'ache'] = [], this['srcBoneMat' + 'rixArr'] = [], this['ikArr'] = [], this['tfArr'] = [], this['pathArr'] = [], this['boneSlotDi' + 'c'] = {}, this['bindBoneBo' + 'neSlotDic'] = {}, this['boneSlotAr' + 'ray'] = [], this['skinDataAr' + 'ray'] = [], this['skinDic'] = {}, this['subTexture' + 'Dic'] = {}, this['isParseFai' + 'l'] = !0x1, this['drawOrderA' + 'niArr'] = [], this['eventAniAr' + 'r'] = [], this['attachment' + 'Names'] = null, this['deformAniA' + 'rr'] = [], this['skinSlotDi' + 'splayDataA' + 'rr'] = [], this['_isParseAu' + 'dio'] = !0x1, this['_isDestroy' + 'ed'] = !0x1, this['_rate'] = 0x1e, this['isParserCo' + 'mplete'] = !0x1, this['aniSection' + 'Dic'] = {}, this['_textureDi' + 'c'] = {}, this['mBoneArr'] = [];
        }
        ['loadAni'](_0x3f48ea) {
            this['_skBufferU' + 'rl'] = _0x3f48ea, _0x5a45c3['ILaya']['loader']['load'](_0x3f48ea, _0x5a45c3['Handler']['create'](this, this['onComplete']), null, _0x5a45c3['ILaya']['Loader']['BUFFER']);
        }
        ['onComplete'](_0x39d177 = null) {
            if (this['_isDestroy' + 'ed'])
                this['destroy']();
            else {
                var _0x5d86e5 = _0x5a45c3['ILaya']['Loader']['getRes'](this['_skBufferU' + 'rl']);
                _0x5d86e5 ? (this['_path'] = this['_skBufferU' + 'rl']['slice'](0x0, this['_skBufferU' + 'rl']['lastIndexO' + 'f']('/')) + '/', this['parseData'](null, _0x5d86e5)) : this['event'](_0x5a45c3['Event']['ERROR'], 'load\x20faile' + 'd:' + this['_skBufferU' + 'rl']);
            }
        }
        ['parseData'](_0x169c65, _0x5b4510, _0x207607 = 0x1e) {
            if (!this['_path']) {
                var _0x347189 = this['_relativeU' + 'rl'] || this['url'];
                if (_0x347189) {
                    var _0x4d711d = _0x347189['lastIndexO' + 'f']('/');
                    this['_path'] = _0x4d711d > 0x0 ? _0x347189['slice'](0x0, _0x4d711d) + '/' : '';
                }
            }
            this['_mainTextu' + 're'] = _0x169c65, this['_rate'] = _0x207607, this['parse'](_0x5b4510);
        }
        ['buildArmat' + 'ure'](_0xd44316 = 0x0) {
            return new _0xf4adb1(this, _0xd44316);
        }
        ['parse'](_0x2ac107) {
            super['parse'](_0x2ac107), this['event'](_0x5a45c3['Event']['LOADED'], this), this['_aniVersio' + 'n'] === _0x5b7f0e['LAYA_ANIMA' + 'TION_VISIO' + 'N'] ? this['_isParseAu' + 'dio'] = !0x0 : (this['_aniVersio' + 'n'], _0x5b7f0e['LAYA_ANIMA' + 'TION_160_V' + 'ISION']), this['_mainTextu' + 're'] ? this['_parsePubl' + 'icExtData']() : this['_parseText' + 'urePath']();
        }
        ['_parseText' + 'urePath']() {
            if (this['_isDestroy' + 'ed'])
                this['destroy']();
            else {
                var _0x3777a3 = 0x0;
                this['_loadList'] = [];
                var _0x3a3c48, _0x27df1f = new _0x5a45c3['Byte'](this['getPublicE' + 'xtData']()), _0x5ca7b9 = _0x27df1f['getInt32'](), _0x2b417d = _0x27df1f['readUTFStr' + 'ing'](), _0x585a16 = _0x2b417d['split']('\x0a');
                for (_0x3777a3 = 0x0; _0x3777a3 < _0x5ca7b9; _0x3777a3++)
                    _0x3a3c48 = this['_path'] + _0x585a16[0x2 * _0x3777a3], _0x2b417d = _0x585a16[0x2 * _0x3777a3 + 0x1], _0x27df1f['getFloat32'](), _0x27df1f['getFloat32'](), _0x27df1f['getFloat32'](), _0x27df1f['getFloat32'](), _0x27df1f['getFloat32'](), _0x27df1f['getFloat32'](), _0x27df1f['getFloat32'](), _0x27df1f['getFloat32'](), -0x1 == this['_loadList']['indexOf'](_0x3a3c48) && this['_loadList']['push'](_0x3a3c48);
                _0x5a45c3['ILaya']['loader']['load'](this['_loadList'], _0x5a45c3['Handler']['create'](this, this['_textureCo' + 'mplete']));
            }
        }
        ['_textureCo' + 'mplete']() {
            for (var _0x43c9e1, _0x40bf4e = 0x0, _0x43981b = this['_loadList']['length']; _0x40bf4e < _0x43981b; _0x40bf4e++)
                _0x43c9e1 = this['_loadList'][_0x40bf4e], this['_textureDi' + 'c'][_0x43c9e1] = _0x5a45c3['ILaya']['Loader']['getRes'](_0x43c9e1);
            this['_parsePubl' + 'icExtData']();
        }
        ['_parsePubl' + 'icExtData']() {
            var _0x2a7684, _0x1a47cd = 0x0, _0x178b12 = 0x0, _0xeba917 = 0x0, _0x229f6b = 0x0, _0x35af64 = 0x0;
            for (_0x1a47cd = 0x0, _0x35af64 = this['getAnimati' + 'onCount'](); _0x1a47cd < _0x35af64; _0x1a47cd++)
                this['_graphicsC' + 'ache']['push']([]);
            _0x2a7684 = 'Dragon' != this['_aniClassN' + 'ame'];
            var _0x14f746, _0x34cf63, _0x58bb88 = new _0x5a45c3['Byte'](this['getPublicE' + 'xtData']()), _0x2af94f = 0x0, _0x3542b7 = 0x0, _0x2d19de = 0x0, _0x5d7b30 = 0x0, _0x35521e = 0x0, _0x30849e = 0x0, _0x167d08 = 0x0, _0x3637cc = 0x0, _0x4c10d7 = 0x0, _0x1740df = _0x58bb88['getInt32'](), _0x1026b8 = _0x58bb88['readUTFStr' + 'ing'](), _0x588d1a = _0x1026b8['split']('\x0a');
            for (_0x1a47cd = 0x0; _0x1a47cd < _0x1740df; _0x1a47cd++) {
                if (_0x14f746 = this['_mainTextu' + 're'], _0x34cf63 = this['_path'] + _0x588d1a[0x2 * _0x1a47cd], _0x1026b8 = _0x588d1a[0x2 * _0x1a47cd + 0x1], null == this['_mainTextu' + 're'] && (_0x14f746 = this['_textureDi' + 'c'][_0x34cf63]), !_0x14f746)
                    return this['event'](_0x5a45c3['Event']['ERROR'], this), void (this['isParseFai' + 'l'] = !0x0);
                _0x2af94f = _0x58bb88['getFloat32'](), _0x3542b7 = _0x58bb88['getFloat32'](), _0x2d19de = _0x58bb88['getFloat32'](), _0x5d7b30 = _0x58bb88['getFloat32'](), _0x4c10d7 = _0x58bb88['getFloat32'](), _0x35521e = isNaN(_0x4c10d7) ? 0x0 : _0x4c10d7, _0x4c10d7 = _0x58bb88['getFloat32'](), _0x30849e = isNaN(_0x4c10d7) ? 0x0 : _0x4c10d7, _0x4c10d7 = _0x58bb88['getFloat32'](), _0x167d08 = isNaN(_0x4c10d7) ? _0x2d19de : _0x4c10d7, _0x4c10d7 = _0x58bb88['getFloat32'](), _0x3637cc = isNaN(_0x4c10d7) ? _0x5d7b30 : _0x4c10d7, this['subTexture' + 'Dic'][_0x1026b8] = _0x5a45c3['Texture']['create'](_0x14f746, _0x2af94f, _0x3542b7, _0x2d19de, _0x5d7b30, -_0x35521e, -_0x30849e, _0x167d08, _0x3637cc);
            }
            this['_mainTextu' + 're'] = _0x14f746;
            var _0x2412ce, _0x41ff35, _0x5c0df2, _0x566bab, _0x297840, _0x473d7b = _0x58bb88['getUint16']();
            for (_0x1a47cd = 0x0; _0x1a47cd < _0x473d7b; _0x1a47cd++)
                (_0x2412ce = [])['push'](_0x58bb88['getUint16']()), _0x2412ce['push'](_0x58bb88['getUint16']()), _0x2412ce['push'](_0x58bb88['getUint16']()), _0x2412ce['push'](_0x58bb88['getUint16']()), this['aniSection' + 'Dic'][_0x1a47cd] = _0x2412ce;
            var _0x36985c, _0x3025f3 = _0x58bb88['getInt16'](), _0x241d22 = {};
            for (_0x1a47cd = 0x0; _0x1a47cd < _0x3025f3; _0x1a47cd++)
                _0x41ff35 = new _0x4ddd9a(), 0x0 == _0x1a47cd ? _0x36985c = _0x41ff35 : _0x41ff35['root'] = _0x36985c, _0x41ff35['d'] = _0x2a7684 ? -0x1 : 0x1, _0x566bab = _0x58bb88['readUTFStr' + 'ing'](), _0x297840 = _0x58bb88['readUTFStr' + 'ing'](), _0x41ff35['length'] = _0x58bb88['getFloat32'](), 0x1 == _0x58bb88['getByte']() && (_0x41ff35['inheritRot' + 'ation'] = !0x1), 0x1 == _0x58bb88['getByte']() && (_0x41ff35['inheritSca' + 'le'] = !0x1), _0x41ff35['name'] = _0x566bab, _0x297840 && ((_0x5c0df2 = _0x241d22[_0x297840]) ? _0x5c0df2['addChild'](_0x41ff35) : this['mRootBone'] = _0x41ff35), _0x241d22[_0x566bab] = _0x41ff35, this['mBoneArr']['push'](_0x41ff35);
            this['tMatrixDat' + 'aLen'] = _0x58bb88['getUint16']();
            var _0x5bc60b, _0x5123ea, _0x4c2181 = _0x58bb88['getUint16'](), _0x13aba9 = Math['floor'](_0x4c2181 / this['tMatrixDat' + 'aLen']), _0x4e4a89 = this['srcBoneMat' + 'rixArr'];
            for (_0x1a47cd = 0x0; _0x1a47cd < _0x13aba9; _0x1a47cd++)
                (_0x5bc60b = new _0x12880e())['scX'] = _0x58bb88['getFloat32'](), _0x5bc60b['skX'] = _0x58bb88['getFloat32'](), _0x5bc60b['skY'] = _0x58bb88['getFloat32'](), _0x5bc60b['scY'] = _0x58bb88['getFloat32'](), _0x5bc60b['x'] = _0x58bb88['getFloat32'](), _0x5bc60b['y'] = _0x58bb88['getFloat32'](), 0x8 === this['tMatrixDat' + 'aLen'] && (_0x5bc60b['skewX'] = _0x58bb88['getFloat32'](), _0x5bc60b['skewY'] = _0x58bb88['getFloat32']()), _0x4e4a89['push'](_0x5bc60b), (_0x41ff35 = this['mBoneArr'][_0x1a47cd])['transform'] = _0x5bc60b;
            var _0x5a06fc, _0x53bbb1, _0x109eb8 = _0x58bb88['getUint16']();
            for (_0x1a47cd = 0x0; _0x1a47cd < _0x109eb8; _0x1a47cd++) {
                for (_0x5123ea = new _0x19a24f(), _0x5a06fc = _0x58bb88['getUint16'](), _0x178b12 = 0x0; _0x178b12 < _0x5a06fc; _0x178b12++)
                    _0x5123ea['boneNames']['push'](_0x58bb88['readUTFStr' + 'ing']()), _0x5123ea['boneIndexs']['push'](_0x58bb88['getInt16']());
                _0x5123ea['name'] = _0x58bb88['readUTFStr' + 'ing'](), _0x5123ea['targetBone' + 'Name'] = _0x58bb88['readUTFStr' + 'ing'](), _0x5123ea['targetBone' + 'Index'] = _0x58bb88['getInt16'](), _0x5123ea['bendDirect' + 'ion'] = _0x58bb88['getFloat32'](), _0x5123ea['mix'] = _0x58bb88['getFloat32'](), _0x5123ea['isSpine'] = _0x2a7684, this['ikArr']['push'](_0x5123ea);
            }
            var _0x115f11, _0x33fdfc, _0x354a63 = _0x58bb88['getUint16']();
            for (_0x1a47cd = 0x0; _0x1a47cd < _0x354a63; _0x1a47cd++) {
                for (_0x53bbb1 = new _0x41dc6c(), _0x115f11 = _0x58bb88['getUint16'](), _0x178b12 = 0x0; _0x178b12 < _0x115f11; _0x178b12++)
                    _0x53bbb1['boneIndexs']['push'](_0x58bb88['getInt16']());
                _0x53bbb1['name'] = _0x58bb88['getUTFStri' + 'ng'](), _0x53bbb1['targetInde' + 'x'] = _0x58bb88['getInt16'](), _0x53bbb1['rotateMix'] = _0x58bb88['getFloat32'](), _0x53bbb1['translateM' + 'ix'] = _0x58bb88['getFloat32'](), _0x53bbb1['scaleMix'] = _0x58bb88['getFloat32'](), _0x53bbb1['shearMix'] = _0x58bb88['getFloat32'](), _0x53bbb1['offsetRota' + 'tion'] = _0x58bb88['getFloat32'](), _0x53bbb1['offsetX'] = _0x58bb88['getFloat32'](), _0x53bbb1['offsetY'] = _0x58bb88['getFloat32'](), _0x53bbb1['offsetScal' + 'eX'] = _0x58bb88['getFloat32'](), _0x53bbb1['offsetScal' + 'eY'] = _0x58bb88['getFloat32'](), _0x53bbb1['offsetShea' + 'rY'] = _0x58bb88['getFloat32'](), this['tfArr']['push'](_0x53bbb1);
            }
            var _0x42f364, _0x72599e, _0x10b05a, _0xe9602, _0x2c3d0a, _0xf46c38, _0x487e04, _0x226ddf, _0x17631f, _0x48d126, _0x5809d3 = _0x58bb88['getUint16']();
            for (_0x1a47cd = 0x0; _0x1a47cd < _0x5809d3; _0x1a47cd++) {
                for ((_0x33fdfc = new _0x209c4c())['name'] = _0x58bb88['readUTFStr' + 'ing'](), _0x42f364 = _0x58bb88['getUint16'](), _0x178b12 = 0x0; _0x178b12 < _0x42f364; _0x178b12++)
                    _0x33fdfc['bones']['push'](_0x58bb88['getInt16']());
                _0x33fdfc['target'] = _0x58bb88['readUTFStr' + 'ing'](), _0x33fdfc['positionMo' + 'de'] = _0x58bb88['readUTFStr' + 'ing'](), _0x33fdfc['spacingMod' + 'e'] = _0x58bb88['readUTFStr' + 'ing'](), _0x33fdfc['rotateMode'] = _0x58bb88['readUTFStr' + 'ing'](), _0x33fdfc['offsetRota' + 'tion'] = _0x58bb88['getFloat32'](), _0x33fdfc['position'] = _0x58bb88['getFloat32'](), _0x33fdfc['spacing'] = _0x58bb88['getFloat32'](), _0x33fdfc['rotateMix'] = _0x58bb88['getFloat32'](), _0x33fdfc['translateM' + 'ix'] = _0x58bb88['getFloat32'](), this['pathArr']['push'](_0x33fdfc);
            }
            var _0x3f9c85, _0x58f181 = _0x58bb88['getInt16']();
            for (_0x1a47cd = 0x0; _0x1a47cd < _0x58f181; _0x1a47cd++) {
                var _0x100c86 = _0x58bb88['getUint8'](), _0x35499b = {};
                this['deformAniA' + 'rr']['push'](_0x35499b);
                for (var _0x10bb0d = 0x0; _0x10bb0d < _0x100c86; _0x10bb0d++)
                    for ((_0x487e04 = new _0x2a4a4f())['skinName'] = _0x58bb88['getUTFStri' + 'ng'](), _0x35499b[_0x487e04['skinName']] = _0x487e04, _0x72599e = _0x58bb88['getInt16'](), _0x178b12 = 0x0; _0x178b12 < _0x72599e; _0x178b12++)
                        for (_0x226ddf = new _0x2b9322(), _0x487e04['deformSlot' + 'DataList']['push'](_0x226ddf), _0x10b05a = _0x58bb88['getInt16'](), _0xeba917 = 0x0; _0xeba917 < _0x10b05a; _0xeba917++)
                            for (_0x17631f = new _0x27fd5e(), _0x226ddf['deformSlot' + 'DisplayLis' + 't']['push'](_0x17631f), _0x17631f['slotIndex'] = _0x58bb88['getInt16'](), _0x17631f['attachment'] = _0x58bb88['getUTFStri' + 'ng'](), _0xe9602 = _0x58bb88['getInt16'](), _0x229f6b = 0x0; _0x229f6b < _0xe9602; _0x229f6b++)
                                for (0x1 == _0x58bb88['getByte']() ? _0x17631f['tweenKeyLi' + 'st']['push'](!0x0) : _0x17631f['tweenKeyLi' + 'st']['push'](!0x1), _0x2c3d0a = _0x58bb88['getFloat32'](), _0x17631f['timeList']['push'](_0x2c3d0a), _0x48d126 = [], _0x17631f['vectices']['push'](_0x48d126), _0xf46c38 = _0x58bb88['getInt16'](), _0x35af64 = 0x0; _0x35af64 < _0xf46c38; _0x35af64++)
                                    _0x48d126['push'](_0x58bb88['getFloat32']());
            }
            var _0x3d740e, _0x1d49d2, _0x46c770, _0x412fb4, _0x2d88a4 = _0x58bb88['getInt16']();
            for (_0x1a47cd = 0x0; _0x1a47cd < _0x2d88a4; _0x1a47cd++) {
                for (_0x3d740e = _0x58bb88['getInt16'](), _0x3f9c85 = [], _0x178b12 = 0x0; _0x178b12 < _0x3d740e; _0x178b12++) {
                    for ((_0x1d49d2 = new _0x777a60())['time'] = _0x58bb88['getFloat32'](), _0x46c770 = _0x58bb88['getInt16'](), _0xeba917 = 0x0; _0xeba917 < _0x46c770; _0xeba917++)
                        _0x1d49d2['drawOrder']['push'](_0x58bb88['getInt16']());
                    _0x3f9c85['push'](_0x1d49d2);
                }
                this['drawOrderA' + 'niArr']['push'](_0x3f9c85);
            }
            var _0x364f8d, _0x4eee62, _0x11377d = _0x58bb88['getInt16']();
            for (_0x1a47cd = 0x0; _0x1a47cd < _0x11377d; _0x1a47cd++) {
                for (_0x364f8d = _0x58bb88['getInt16'](), _0x412fb4 = [], _0x178b12 = 0x0; _0x178b12 < _0x364f8d; _0x178b12++)
                    (_0x4eee62 = new _0x4f7537())['name'] = _0x58bb88['getUTFStri' + 'ng'](), this['_isParseAu' + 'dio'] && (_0x4eee62['audioValue'] = _0x58bb88['getUTFStri' + 'ng']()), _0x4eee62['intValue'] = _0x58bb88['getInt32'](), _0x4eee62['floatValue'] = _0x58bb88['getFloat32'](), _0x4eee62['stringValu' + 'e'] = _0x58bb88['getUTFStri' + 'ng'](), _0x4eee62['time'] = _0x58bb88['getFloat32'](), _0x412fb4['push'](_0x4eee62);
                this['eventAniAr' + 'r']['push'](_0x412fb4);
            }
            var _0x18495a = _0x58bb88['getInt16']();
            if (_0x18495a > 0x0) {
                for (this['attachment' + 'Names'] = [], _0x1a47cd = 0x0; _0x1a47cd < _0x18495a; _0x1a47cd++)
                    this['attachment' + 'Names']['push'](_0x58bb88['getUTFStri' + 'ng']());
            }
            var _0x19f97e, _0x297d82, _0x12bb39 = _0x58bb88['getInt16']();
            for (_0x1a47cd = 0x0; _0x1a47cd < _0x12bb39; _0x1a47cd++)
                (_0x19f97e = new _0x26972d())['name'] = _0x58bb88['readUTFStr' + 'ing'](), _0x19f97e['parent'] = _0x58bb88['readUTFStr' + 'ing'](), _0x19f97e['attachment' + 'Name'] = _0x58bb88['readUTFStr' + 'ing'](), _0x19f97e['srcDisplay' + 'Index'] = _0x19f97e['displayInd' + 'ex'] = _0x58bb88['getInt16'](), _0x19f97e['templet'] = this, this['boneSlotDi' + 'c'][_0x19f97e['name']] = _0x19f97e, null == (_0x297d82 = this['bindBoneBo' + 'neSlotDic'][_0x19f97e['parent']]) && (this['bindBoneBo' + 'neSlotDic'][_0x19f97e['parent']] = _0x297d82 = []), _0x297d82['push'](_0x19f97e), this['boneSlotAr' + 'ray']['push'](_0x19f97e);
            var _0x28a35c, _0x3cbca5, _0x4b1ad5, _0x4aff54, _0x29f9e2, _0x4ffa29, _0x5dba08, _0x142160, _0x5e487f, _0x8d936b, _0x3624cc = _0x58bb88['readUTFStr' + 'ing']()['split']('\x0a'), _0x417d03 = 0x0, _0x2e6d5f = _0x58bb88['getUint8']();
            for (_0x1a47cd = 0x0; _0x1a47cd < _0x2e6d5f; _0x1a47cd++) {
                for ((_0x28a35c = new _0x45dadf())['name'] = _0x3624cc[_0x417d03++], _0x4aff54 = _0x58bb88['getUint8'](), _0x178b12 = 0x0; _0x178b12 < _0x4aff54; _0x178b12++) {
                    for ((_0x3cbca5 = new _0x4df105())['name'] = _0x3624cc[_0x417d03++], _0x19f97e = this['boneSlotDi' + 'c'][_0x3cbca5['name']], _0x29f9e2 = _0x58bb88['getUint8'](), _0xeba917 = 0x0; _0xeba917 < _0x29f9e2; _0xeba917++) {
                        if (_0x4b1ad5 = new _0x427cb9(), this['skinSlotDi' + 'splayDataA' + 'rr']['push'](_0x4b1ad5), _0x4b1ad5['name'] = _0x3624cc[_0x417d03++], _0x4b1ad5['attachment' + 'Name'] = _0x3624cc[_0x417d03++], _0x4b1ad5['transform'] = new _0x12880e(), _0x4b1ad5['transform']['scX'] = _0x58bb88['getFloat32'](), _0x4b1ad5['transform']['skX'] = _0x58bb88['getFloat32'](), _0x4b1ad5['transform']['skY'] = _0x58bb88['getFloat32'](), _0x4b1ad5['transform']['scY'] = _0x58bb88['getFloat32'](), _0x4b1ad5['transform']['x'] = _0x58bb88['getFloat32'](), _0x4b1ad5['transform']['y'] = _0x58bb88['getFloat32'](), _0x3cbca5['displayArr']['push'](_0x4b1ad5), _0x4b1ad5['width'] = _0x58bb88['getFloat32'](), _0x4b1ad5['height'] = _0x58bb88['getFloat32'](), _0x4b1ad5['type'] = _0x58bb88['getUint8'](), _0x4b1ad5['verLen'] = _0x58bb88['getUint16'](), (_0x3025f3 = _0x58bb88['getUint16']()) > 0x0)
                            for (_0x4b1ad5['bones'] = [], _0x229f6b = 0x0; _0x229f6b < _0x3025f3; _0x229f6b++) {
                                var _0x173ac5 = _0x58bb88['getUint16']();
                                _0x4b1ad5['bones']['push'](_0x173ac5);
                            }
                        if ((_0x4ffa29 = _0x58bb88['getUint16']()) > 0x0) {
                            for (_0x4b1ad5['uvs'] = [], _0x229f6b = 0x0; _0x229f6b < _0x4ffa29; _0x229f6b++)
                                _0x4b1ad5['uvs']['push'](_0x58bb88['getFloat32']());
                        }
                        if ((_0x5dba08 = _0x58bb88['getUint16']()) > 0x0) {
                            for (_0x4b1ad5['weights'] = [], _0x229f6b = 0x0; _0x229f6b < _0x5dba08; _0x229f6b++)
                                _0x4b1ad5['weights']['push'](_0x58bb88['getFloat32']());
                        }
                        if ((_0x142160 = _0x58bb88['getUint16']()) > 0x0) {
                            for (_0x4b1ad5['triangles'] = [], _0x229f6b = 0x0; _0x229f6b < _0x142160; _0x229f6b++)
                                _0x4b1ad5['triangles']['push'](_0x58bb88['getUint16']());
                        }
                        if ((_0x5e487f = _0x58bb88['getUint16']()) > 0x0) {
                            for (_0x4b1ad5['vertices'] = [], _0x229f6b = 0x0; _0x229f6b < _0x5e487f; _0x229f6b++)
                                _0x4b1ad5['vertices']['push'](_0x58bb88['getFloat32']());
                        }
                        if ((_0x8d936b = _0x58bb88['getUint16']()) > 0x0) {
                            for (_0x4b1ad5['lengths'] = [], _0x229f6b = 0x0; _0x229f6b < _0x8d936b; _0x229f6b++)
                                _0x4b1ad5['lengths']['push'](_0x58bb88['getFloat32']());
                        }
                    }
                    _0x28a35c['slotArr']['push'](_0x3cbca5);
                }
                this['skinDic'][_0x28a35c['name']] = _0x28a35c, this['skinDataAr' + 'ray']['push'](_0x28a35c);
            }
            0x1 == _0x58bb88['getUint8']() ? (this['yReverseMa' + 'trix'] = new _0x5a45c3['Matrix'](0x1, 0x0, 0x0, -0x1, 0x0, 0x0), _0x36985c && _0x36985c['setTempMat' + 'rix'](this['yReverseMa' + 'trix'])) : _0x36985c && _0x36985c['setTempMat' + 'rix'](new _0x5a45c3['Matrix']()), this['showSkinBy' + 'Index'](this['boneSlotDi' + 'c'], 0x0), this['isParserCo' + 'mplete'] = !0x0, this['event'](_0x5a45c3['Event']['COMPLETE'], this);
        }
        ['getTexture'](_0x490577) {
            var _0x3286b8 = this['subTexture' + 'Dic'][_0x490577];
            return _0x3286b8 || (_0x3286b8 = this['subTexture' + 'Dic'][_0x490577['substr'](0x0, _0x490577['length'] - 0x1)]), null == _0x3286b8 ? this['_mainTextu' + 're'] : _0x3286b8;
        }
        ['showSkinBy' + 'Index'](_0x5dcb57, _0x2abc69, _0xd1be15 = !0x0) {
            if (_0x2abc69 < 0x0 && _0x2abc69 >= this['skinDataAr' + 'ray']['length'])
                return !0x1;
            var _0x15cef8, _0x4f6fd3, _0x715a20, _0x2fc7d2, _0x5577b0 = this['skinDataAr' + 'ray'][_0x2abc69];
            if (_0x5577b0) {
                for (_0x15cef8 = 0x0, _0x4f6fd3 = _0x5577b0['slotArr']['length']; _0x15cef8 < _0x4f6fd3; _0x15cef8++)
                    (_0x2fc7d2 = _0x5577b0['slotArr'][_0x15cef8]) && (_0x715a20 = _0x5dcb57[_0x2fc7d2['name']]) && (_0x715a20['showSlotDa' + 'ta'](_0x2fc7d2, _0xd1be15), _0xd1be15 && 'undefined' != _0x715a20['attachment' + 'Name'] && 'null' != _0x715a20['attachment' + 'Name'] ? _0x715a20['showDispla' + 'yByName'](_0x715a20['attachment' + 'Name']) : _0x715a20['showDispla' + 'yByIndex'](_0x715a20['displayInd' + 'ex']));
                return !0x0;
            }
            return !0x1;
        }
        ['getSkinInd' + 'exByName'](_0x46a971) {
            for (var _0x1a61bc = 0x0, _0x2bdc21 = this['skinDataAr' + 'ray']['length']; _0x1a61bc < _0x2bdc21; _0x1a61bc++)
                if (this['skinDataAr' + 'ray'][_0x1a61bc]['name'] == _0x46a971)
                    return _0x1a61bc;
            return -0x1;
        }
        ['getGrahics' + 'DataWithCa' + 'che'](_0x3a277e, _0x2c9937) {
            return this['_graphicsC' + 'ache'][_0x3a277e] && this['_graphicsC' + 'ache'][_0x3a277e][_0x2c9937] ? this['_graphicsC' + 'ache'][_0x3a277e][_0x2c9937] : null;
        }
        ['_setCreate' + 'URL'](_0x13df7b) {
            this['_skBufferU' + 'rl'] = this['_relativeU' + 'rl'] = _0x13df7b, super['_setCreate' + 'URL'](_0x13df7b);
        }
        ['setGrahics' + 'DataWithCa' + 'che'](_0x278c9e, _0x5f427b, _0x1a4781) {
            this['_graphicsC' + 'ache'][_0x278c9e][_0x5f427b] = _0x1a4781;
        }
        ['deleteAniD' + 'ata'](_0x2db683) {
            if (this['_anis'][_0x2db683]) {
                var _0xf5b5ce = this['_anis'][_0x2db683];
                _0xf5b5ce['bone3DMap'] = null, _0xf5b5ce['nodes'] = null;
            }
        }
        ['destroy']() {
            var _0x334781;
            for (_0x334781 in (this['_isDestroy' + 'ed'] = !0x0, this['subTexture' + 'Dic']))
                _0x334781 && this['subTexture' + 'Dic'][_0x334781]['destroy']();
            for (_0x334781 in this['_textureDi' + 'c'])
                _0x334781 && this['_textureDi' + 'c'][_0x334781]['destroy']();
            for (var _0x5398ba = 0x0, _0x5d8dc6 = this['skinSlotDi' + 'splayDataA' + 'rr']['length']; _0x5398ba < _0x5d8dc6; _0x5398ba++)
                this['skinSlotDi' + 'splayDataA' + 'rr'][_0x5398ba]['destory']();
            this['skinSlotDi' + 'splayDataA' + 'rr']['length'] = 0x0, this['_relativeU' + 'rl'] && delete _0x5b7f0e['TEMPLET_DI' + 'CTIONARY'][this['_relativeU' + 'rl']], super['destroy'](), _0x5a45c3['ILaya']['loader']['clearRes'](this['_skBufferU' + 'rl']);
        }
        ['getAniName' + 'ByIndex'](_0x4f9328) {
            var _0x5cec6a = this['getAnimati' + 'on'](_0x4f9328);
            return _0x5cec6a ? _0x5cec6a['name'] : null;
        }
        get ['rate']() {
            return this['_rate'];
        }
        set ['rate'](_0x5d4be1) {
            this['_rate'] = _0x5d4be1;
        }
    }
    _0x5b7f0e['LAYA_ANIMA' + 'TION_160_V' + 'ISION'] = 'LAYAANIMAT' + 'ION:1.6.0', _0x5b7f0e['LAYA_ANIMA' + 'TION_VISIO' + 'N'] = 'LAYAANIMAT' + 'ION:1.7.0', _0x458972['Templet'] = _0x5b7f0e;
    class _0x7252a5 extends _0x5a45c3['Sprite'] {
        constructor(_0x7022df = null) {
            super(), this['_start'] = 0x0, this['_Pos'] = 0x0, this['_ended'] = !0x0, this['_loadedIma' + 'ge'] = {}, this['_endFrame'] = -0x1, this['interval'] = 0x1e, this['_ids'] = {}, this['_idOfSprit' + 'e'] = [], this['_reset'](), this['_playing'] = !0x1, this['_parentMov' + 'ieClip'] = _0x7022df, _0x7022df ? (this['_isRoot'] = !0x1, this['_movieClip' + 'List'] = _0x7022df['_movieClip' + 'List'], this['_movieClip' + 'List']['push'](this)) : (this['_movieClip' + 'List'] = [this], this['_isRoot'] = !0x0, this['_setBitUp'](_0x5a45c3['Const']['DISPLAY']));
        }
        ['destroy'](_0x2d9727 = !0x0) {
            this['_clear'](), super['destroy'](_0x2d9727);
        }
        ['_setDispla' + 'y'](_0x577ca9) {
            super['_setDispla' + 'y'](_0x577ca9), this['_isRoot'] && this['_onDisplay'](_0x577ca9);
        }
        ['_onDisplay'](_0x29d208) {
            _0x29d208 ? this['timer']['loop'](this['interval'], this, this['updates'], null, !0x0) : this['timer']['clear'](this, this['updates']);
        }
        ['updates']() {
            var _0x3da23e, _0x148c2c;
            if (!this['_parentMov' + 'ieClip']) {
                for (_0x148c2c = this['_movieClip' + 'List']['length'], _0x3da23e = 0x0; _0x3da23e < _0x148c2c; _0x3da23e++)
                    this['_movieClip' + 'List'][_0x3da23e] && this['_movieClip' + 'List'][_0x3da23e]['_update']();
            }
        }
        get ['index']() {
            return this['_playIndex'];
        }
        set ['index'](_0x3ab426) {
            this['_playIndex'] = _0x3ab426, this['_data'] && this['_displayFr' + 'ame'](this['_playIndex']), this['_labels'] && this['_labels'][_0x3ab426] && this['event'](_0x5a45c3['Event']['LABEL'], this['_labels'][_0x3ab426]);
        }
        ['addLabel'](_0x45e362, _0x45d2a7) {
            this['_labels'] || (this['_labels'] = {}), this['_labels'][_0x45d2a7] = _0x45e362;
        }
        ['removeLabe' + 'l'](_0x90041e) {
            if (_0x90041e) {
                if (!this['_labels']) {
                    for (var _0x239e67 in this['_labels'])
                        if (this['_labels'][_0x239e67] === _0x90041e) {
                            delete this['_labels'][_0x239e67];
                            break;
                        }
                }
            } else
                this['_labels'] = null;
        }
        get ['count']() {
            return this['_count'];
        }
        get ['playing']() {
            return this['_playing'];
        }
        ['_update']() {
            if (this['_data'] && this['_playing']) {
                if (this['_playIndex']++, this['_playIndex'] >= this['_count']) {
                    if (!this['loop'])
                        return this['_playIndex']--, void this['stop']();
                    this['_playIndex'] = 0x0;
                }
                if (this['_parseFram' + 'e'](this['_playIndex']), this['_labels'] && this['_labels'][this['_playIndex']] && this['event'](_0x5a45c3['Event']['LABEL'], this['_labels'][this['_playIndex']]), -0x1 != this['_endFrame'] && this['_endFrame'] == this['_playIndex']) {
                    if (this['_endFrame'] = -0x1, null != this['_completeH' + 'andler']) {
                        var _0x3926cd = this['_completeH' + 'andler'];
                        this['_completeH' + 'andler'] = null, _0x3926cd['run']();
                    }
                    this['stop']();
                }
            }
        }
        ['stop']() {
            this['_playing'] = !0x1;
        }
        ['gotoAndSto' + 'p'](_0x51cc51) {
            this['index'] = _0x51cc51, this['stop']();
        }
        ['_clear']() {
            if (this['stop'](), this['_idOfSprit' + 'e']['length'] = 0x0, !this['_parentMov' + 'ieClip']) {
                var _0x5806e9, _0x767687;
                for (this['timer']['clear'](this, this['updates']), _0x767687 = this['_movieClip' + 'List']['length'], _0x5806e9 = 0x0; _0x5806e9 < _0x767687; _0x5806e9++)
                    this['_movieClip' + 'List'][_0x5806e9] != this && this['_movieClip' + 'List'][_0x5806e9]['_clear']();
                this['_movieClip' + 'List']['length'] = 0x0;
            }
            var _0x539ab6;
            for (_0x539ab6 in (this['_atlasPath'] && _0x5a45c3['ILaya']['Loader']['clearRes'](this['_atlasPath']), this['_loadedIma' + 'ge']))
                this['_loadedIma' + 'ge'][_0x539ab6] && (_0x5a45c3['ILaya']['Loader']['clearRes'](_0x539ab6), this['_loadedIma' + 'ge'][_0x539ab6] = !0x1);
            this['removeChil' + 'dren'](), this['graphics'] = null, this['_parentMov' + 'ieClip'] = null;
        }
        ['play'](_0x47abce = 0x0, _0x239153 = !0x0) {
            this['loop'] = _0x239153, this['_playing'] = !0x0, this['_data'] && this['_displayFr' + 'ame'](_0x47abce);
        }
        ['_displayFr' + 'ame'](_0x5d4de2 = -0x1) {
            -0x1 != _0x5d4de2 && (this['_curIndex'] > _0x5d4de2 && this['_reset'](), this['_parseFram' + 'e'](_0x5d4de2));
        }
        ['_reset'](_0x497c44 = !0x0) {
            _0x497c44 && 0x1 != this['_curIndex'] && this['removeChil' + 'dren'](), this['_preIndex'] = this['_curIndex'] = -0x1, this['_Pos'] = this['_start'];
        }
        ['_parseFram' + 'e'](_0x157f9a) {
            var _0x35b68f, _0x378570, _0x1e0ccd, _0xed27ab, _0x5634dd, _0x62d7ce, _0x419ab0 = !0x1, _0x53df5a = this['_idOfSprit' + 'e'], _0xd7ae8d = this['_data'];
            for (this['_ended'] && this['_reset'](), _0xd7ae8d['pos'] = this['_Pos'], this['_ended'] = !0x1, this['_playIndex'] = _0x157f9a, this['_curIndex'] > _0x157f9a && _0x157f9a < this['_preIndex'] && (this['_reset'](!0x0), _0xd7ae8d['pos'] = this['_Pos']); this['_curIndex'] <= _0x157f9a && !this['_ended'];)
                switch (_0xd7ae8d['getUint16']()) {
                case 0xc:
                    if (_0x1e0ccd = _0xd7ae8d['getUint16'](), _0xed27ab = this['_ids'][_0xd7ae8d['getUint16']()], this['_Pos'] = _0xd7ae8d['pos'], _0xd7ae8d['pos'] = _0xed27ab, 0x0 == (_0x5634dd = _0xd7ae8d['getUint8']())) {
                        var _0x3586bb = _0xd7ae8d['getUint16']();
                        if (!(_0x378570 = _0x53df5a[_0x1e0ccd])) {
                            _0x378570 = _0x53df5a[_0x1e0ccd] = new _0x5a45c3['Sprite']();
                            var _0x16bfdf = new _0x5a45c3['Sprite']();
                            _0x16bfdf['loadImage'](this['basePath'] + _0x3586bb + '.png'), this['_loadedIma' + 'ge'][this['basePath'] + _0x3586bb + '.png'] = !0x0, _0x378570['addChild'](_0x16bfdf), _0x16bfdf['size'](_0xd7ae8d['getFloat32'](), _0xd7ae8d['getFloat32']());
                            var _0x26e868 = _0xd7ae8d['_getMatrix']();
                            _0x16bfdf['transform'] = _0x26e868;
                        }
                        _0x378570['alpha'] = 0x1;
                    } else
                        0x1 == _0x5634dd && ((_0x35b68f = _0x53df5a[_0x1e0ccd]) || (_0x53df5a[_0x1e0ccd] = _0x35b68f = new _0x7252a5(this), _0x35b68f['interval'] = this['interval'], _0x35b68f['_ids'] = this['_ids'], _0x35b68f['basePath'] = this['basePath'], _0x35b68f['_setData'](_0xd7ae8d, _0xed27ab), _0x35b68f['_initState'](), _0x35b68f['play'](0x0)), _0x35b68f['alpha'] = 0x1);
                    _0xd7ae8d['pos'] = this['_Pos'];
                    break;
                case 0x3:
                    var _0x203908 = _0x53df5a[_0xd7ae8d['getUint16']()];
                    _0x203908 && (this['addChild'](_0x203908), _0x203908['zOrder'] = _0xd7ae8d['getUint16'](), _0x419ab0 = !0x0);
                    break;
                case 0x4:
                    (_0x203908 = _0x53df5a[_0xd7ae8d['getUint16']()]) && _0x203908['removeSelf']();
                    break;
                case 0x5:
                    _0x53df5a[_0xd7ae8d['getUint16']()][_0x7252a5['_ValueList'][_0xd7ae8d['getUint16']()]] = _0xd7ae8d['getFloat32']();
                    break;
                case 0x6:
                    _0x53df5a[_0xd7ae8d['getUint16']()]['visible'] = _0xd7ae8d['getUint8']() > 0x0;
                    break;
                case 0x7:
                    var _0x22f57b = (_0x378570 = _0x53df5a[_0xd7ae8d['getUint16']()])['transform'] || _0x5a45c3['Matrix']['create']();
                    _0x22f57b['setTo'](_0xd7ae8d['getFloat32'](), _0xd7ae8d['getFloat32'](), _0xd7ae8d['getFloat32'](), _0xd7ae8d['getFloat32'](), _0xd7ae8d['getFloat32'](), _0xd7ae8d['getFloat32']()), _0x378570['transform'] = _0x22f57b;
                    break;
                case 0x8:
                    _0x53df5a[_0xd7ae8d['getUint16']()]['setPos'](_0xd7ae8d['getFloat32'](), _0xd7ae8d['getFloat32']());
                    break;
                case 0x9:
                    _0x53df5a[_0xd7ae8d['getUint16']()]['setSize'](_0xd7ae8d['getFloat32'](), _0xd7ae8d['getFloat32']());
                    break;
                case 0xa:
                    _0x53df5a[_0xd7ae8d['getUint16']()]['alpha'] = _0xd7ae8d['getFloat32']();
                    break;
                case 0xb:
                    _0x53df5a[_0xd7ae8d['getUint16']()]['setScale'](_0xd7ae8d['getFloat32'](), _0xd7ae8d['getFloat32']());
                    break;
                case 0x62:
                    _0x62d7ce = _0xd7ae8d['getString'](), this['event'](_0x62d7ce), 'stop' == _0x62d7ce && this['stop']();
                    break;
                case 0x63:
                    this['_curIndex'] = _0xd7ae8d['getUint16'](), _0x419ab0 && this['updateZOrd' + 'er']();
                    break;
                case 0x64:
                    this['_count'] = this['_curIndex'] + 0x1, this['_ended'] = !0x0, this['_playing'] && (this['event'](_0x5a45c3['Event']['FRAME']), this['event'](_0x5a45c3['Event']['END']), this['event'](_0x5a45c3['Event']['COMPLETE'])), this['_reset'](!0x1);
                }
            this['_playing'] && !this['_ended'] && this['event'](_0x5a45c3['Event']['FRAME']), this['_Pos'] = _0xd7ae8d['pos'];
        }
        ['_setData'](_0x1f0dc8, _0x265381) {
            this['_data'] = _0x1f0dc8, this['_start'] = _0x265381 + 0x3;
        }
        set ['url'](_0x553cb1) {
            this['load'](_0x553cb1);
        }
        ['load'](_0x17ef9f, _0x4ce5d9 = !0x1, _0x232979 = null) {
            var _0x519d1c;
            this['_url'] = _0x17ef9f, _0x4ce5d9 && (this['_atlasPath'] = _0x232979 || _0x17ef9f['split']('.swf')[0x0] + '.json'), this['stop'](), this['_clear'](), this['_movieClip' + 'List'] = [this], _0x519d1c = [{
                    'url': _0x17ef9f,
                    'type': _0x5a45c3['ILaya']['Loader']['BUFFER']
                }], this['_atlasPath'] && _0x519d1c['push']({
                'url': this['_atlasPath'],
                'type': _0x5a45c3['ILaya']['Loader']['ATLAS']
            }), _0x5a45c3['ILaya']['loader']['load'](_0x519d1c, _0x5a45c3['Handler']['create'](this, this['_onLoaded']));
        }
        ['_onLoaded']() {
            var _0x160fdd;
            (_0x160fdd = _0x5a45c3['ILaya']['Loader']['getRes'](this['_url'])) ? !this['_atlasPath'] || _0x5a45c3['ILaya']['Loader']['getAtlas'](this['_atlasPath']) ? (this['basePath'] = this['_atlasPath'] ? _0x5a45c3['ILaya']['Loader']['getAtlas'](this['_atlasPath'])['dir'] : this['_url']['split']('.swf')[0x0] + '/image/', this['_initData'](_0x160fdd)) : this['event'](_0x5a45c3['Event']['ERROR'], 'Atlas\x20not\x20' + 'find') : this['event'](_0x5a45c3['Event']['ERROR'], 'file\x20not\x20f' + 'ind');
        }
        ['_initState']() {
            this['_reset'](), this['_ended'] = !0x1;
            var _0x397ba3 = this['_playing'];
            for (this['_playing'] = !0x1, this['_curIndex'] = 0x0; !this['_ended'];)
                this['_parseFram' + 'e'](++this['_curIndex']);
            this['_playing'] = _0x397ba3;
        }
        ['_initData'](_0x21d486) {
            this['_data'] = new _0x5a45c3['Byte'](_0x21d486);
            var _0x500e89, _0x4ccc07 = this['_data']['getUint16']();
            for (_0x500e89 = 0x0; _0x500e89 < _0x4ccc07; _0x500e89++)
                this['_ids'][this['_data']['getInt16']()] = this['_data']['getInt32']();
            this['interval'] = 0x3e8 / this['_data']['getUint16'](), this['_setData'](this['_data'], this['_ids'][0x7fff]), this['_initState'](), this['play'](0x0), this['event'](_0x5a45c3['Event']['LOADED']), this['_parentMov' + 'ieClip'] || this['timer']['loop'](this['interval'], this, this['updates'], null, !0x0);
        }
        ['playTo'](_0xe592c4, _0x410559, _0x385cd3 = null) {
            this['_completeH' + 'andler'] = _0x385cd3, this['_endFrame'] = _0x410559, this['play'](_0xe592c4, !0x1);
        }
    }
    _0x7252a5['_ValueList'] = [
        'x',
        'y',
        'width',
        'height',
        'scaleX',
        'scaleY',
        'rotation',
        'alpha'
    ], _0x31442d['AnimationC' + 'ontent'] = _0xf63743, _0x31442d['AnimationN' + 'odeContent'] = _0x59ddf2, _0x31442d['AnimationP' + 'arser01'] = _0x55dcef, _0x31442d['AnimationP' + 'arser02'] = _0x5bda49, _0x31442d['AnimationP' + 'layer'] = _0x194624, _0x31442d['AnimationS' + 'tate'] = _0x11c43f, _0x31442d['AnimationT' + 'emplet'] = _0x1a2660, _0x31442d['BezierLerp'] = _0xf6f9f6, _0x31442d['Bone'] = _0x4ddd9a, _0x31442d['BoneSlot'] = _0x26972d, _0x31442d['DeformAniD' + 'ata'] = _0x2a4a4f, _0x31442d['DeformSlot' + 'Data'] = _0x2b9322, _0x31442d['DeformSlot' + 'DisplayDat' + 'a'] = _0x27fd5e, _0x31442d['DrawOrderD' + 'ata'] = _0x777a60, _0x31442d['EventData'] = _0x4f7537, _0x31442d['GraphicsAn' + 'i'] = _0x15601c, _0x31442d['IAniLib'] = _0x458972, _0x31442d['IkConstrai' + 'nt'] = _0x5e85e9, _0x31442d['IkConstrai' + 'ntData'] = _0x19a24f, _0x31442d['KeyFramesC' + 'ontent'] = _0x359890, _0x31442d['MeshData'] = _0x3332dd, _0x31442d['MovieClip'] = _0x7252a5, _0x31442d['PathConstr' + 'aint'] = _0x2e2a54, _0x31442d['PathConstr' + 'aintData'] = _0x209c4c, _0x31442d['Skeleton'] = _0xf4adb1, _0x31442d['SkinData'] = _0x45dadf, _0x31442d['SkinMeshFo' + 'rGraphic'] = _0xe35448, _0x31442d['SkinSlotDi' + 'splayData'] = _0x427cb9, _0x31442d['SlotData'] = _0x4df105, _0x31442d['Templet'] = _0x5b7f0e, _0x31442d['TFConstrai' + 'nt'] = _0x182fe9, _0x31442d['TFConstrai' + 'ntData'] = _0x41dc6c, _0x31442d['Transform'] = _0x12880e, _0x31442d['UVTools'] = _0x25f426;
}(window['Laya'] = window['Laya'] || {}, Laya);