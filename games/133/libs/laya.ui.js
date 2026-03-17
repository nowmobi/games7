!function (_0x8d0ce5, _0x126068) {
    'use strict';
    class _0x167a28 {
    }
    _0x167a28['touchScrol' + 'lEnable'] = !0x0, _0x167a28['mouseWheel' + 'Enable'] = !0x0, _0x167a28['showButton' + 's'] = !0x0, _0x167a28['popupBgCol' + 'or'] = '#000000', _0x167a28['popupBgAlp' + 'ha'] = 0.5, _0x167a28['closeDialo' + 'gOnSide'] = !0x0, window['UIConfig'] = _0x167a28;
    class _0x5393ca {
    }
    _0x5393ca['defaultSiz' + 'eGrid'] = [
        0x4,
        0x4,
        0x4,
        0x4,
        0x0
    ], _0x5393ca['labelColor'] = '#000000', _0x5393ca['labelPaddi' + 'ng'] = [
        0x2,
        0x2,
        0x2,
        0x2
    ], _0x5393ca['inputLabel' + 'Padding'] = [
        0x1,
        0x1,
        0x1,
        0x3
    ], _0x5393ca['buttonStat' + 'eNum'] = 0x3, _0x5393ca['buttonLabe' + 'lColors'] = [
        '#32556b',
        '#32cc6b',
        '#ff0000',
        '#C0C0C0'
    ], _0x5393ca['comboBoxIt' + 'emColors'] = [
        '#5e95b6',
        '#ffffff',
        '#000000',
        '#8fa4b1',
        '#ffffff'
    ], _0x5393ca['scrollBarM' + 'inNum'] = 0xf, _0x5393ca['scrollBarD' + 'elayTime'] = 0x1f4;
    class _0x38f875 extends _0x126068['Graphics'] {
        constructor() {
            super(...arguments), this['autoCacheC' + 'md'] = !0x0, this['_width'] = 0x0, this['_height'] = 0x0, this['uv'] = null;
        }
        ['destroy']() {
            super['destroy'](), this['_source'] = null, this['_sizeGrid'] = null, this['_offset'] = null;
        }
        get ['sizeGrid']() {
            return this['_sizeGrid'];
        }
        set ['sizeGrid'](_0x2e9967) {
            this['_sizeGrid'] = _0x2e9967['map'](_0x4bea0b => +_0x4bea0b), this['_setChange' + 'd']();
        }
        get ['width']() {
            return this['_width'] ? this['_width'] : this['_source'] ? this['_source']['sourceWidt' + 'h'] : 0x0;
        }
        set ['width'](_0x5c0fb4) {
            this['_width'] != _0x5c0fb4 && (this['_width'] = _0x5c0fb4, this['_setChange' + 'd']());
        }
        get ['height']() {
            return this['_height'] ? this['_height'] : this['_source'] ? this['_source']['sourceHeig' + 'ht'] : 0x0;
        }
        set ['height'](_0x2950dd) {
            this['_height'] != _0x2950dd && (this['_height'] = _0x2950dd, this['_setChange' + 'd']());
        }
        get ['source']() {
            return this['_source'];
        }
        set ['source'](_0x49a350) {
            _0x49a350 ? (this['_source'] = _0x49a350, this['_setChange' + 'd']()) : (this['_source'] = null, this['clear']());
        }
        ['_setChange' + 'd']() {
            this['_isChanged'] || (this['_isChanged'] = !0x0, _0x126068['ILaya']['timer']['callLater'](this, this['changeSour' + 'ce']));
        }
        ['changeSour' + 'ce']() {
            this['_isChanged'] = !0x1;
            var _0x22a60a = this['_source'];
            if (_0x22a60a && _0x22a60a['bitmap']) {
                var _0x102668 = this['width'], _0x46122b = this['height'], _0x6d7fa2 = this['_sizeGrid'], _0x46a81e = _0x22a60a['sourceWidt' + 'h'], _0x50e51a = _0x22a60a['sourceHeig' + 'ht'];
                if (_0x6d7fa2 && (_0x46a81e !== _0x102668 || _0x50e51a !== _0x46122b))
                    return this['clear'](), this['draw9Grid'](_0x22a60a, 0x0, 0x0, _0x102668, _0x46122b, _0x6d7fa2), void this['_repaint']();
                this['clear'](), this['drawTextur' + 'e'](_0x22a60a, this['_offset'] ? this['_offset'][0x0] : 0x0, this['_offset'] ? this['_offset'][0x1] : 0x0, _0x102668, _0x46122b, null, 0x1, null, null, this['uv']), this['_repaint']();
            }
        }
        ['drawBitmap'](_0x4c7b2b, _0x5a3e0e, _0x2c1188, _0x3fb44d, _0xf60f4d = 0x0, _0x592062 = 0x0) {
            _0xf60f4d < 0.1 || _0x592062 < 0.1 || (!_0x4c7b2b || _0x5a3e0e['width'] == _0xf60f4d && _0x5a3e0e['height'] == _0x592062 ? this['drawImage'](_0x5a3e0e, _0x2c1188, _0x3fb44d, _0xf60f4d, _0x592062) : this['fillTextur' + 'e'](_0x5a3e0e, _0x2c1188, _0x3fb44d, _0xf60f4d, _0x592062));
        }
        static ['getTexture'](_0x5b40f1, _0x46a4a1, _0x4d852b, _0x20ba24, _0x2790de) {
            var _0x4dc3d1;
            return _0x20ba24 <= 0x0 && (_0x20ba24 = 0x1), _0x2790de <= 0x0 && (_0x2790de = 0x1), _0x5b40f1['$_GID'] || (_0x5b40f1['$_GID'] = _0x126068['Utils']['getGID']()), _0x4dc3d1 && _0x4dc3d1['_getSource']() || (_0x4dc3d1 = _0x126068['Texture']['createFrom' + 'Texture'](_0x5b40f1, _0x46a4a1, _0x4d852b, _0x20ba24, _0x2790de)), _0x4dc3d1;
        }
    }
    _0x126068['ClassUtils']['regClass']('laya.ui.Au' + 'toBitmap', _0x38f875), _0x126068['ClassUtils']['regClass']('Laya.AutoB' + 'itmap', _0x38f875);
    class _0x2e464f extends _0x126068['Component'] {
        constructor() {
            super(...arguments), this['_top'] = NaN, this['_bottom'] = NaN, this['_left'] = NaN, this['_right'] = NaN, this['_centerX'] = NaN, this['_centerY'] = NaN;
        }
        ['onReset']() {
            this['_top'] = this['_bottom'] = this['_left'] = this['_right'] = this['_centerX'] = this['_centerY'] = NaN;
        }
        ['_onEnable']() {
            this['owner']['parent'] ? this['_onAdded']() : this['owner']['once'](_0x126068['Event']['ADDED'], this, this['_onAdded']);
        }
        ['_onDisable']() {
            this['owner']['off'](_0x126068['Event']['ADDED'], this, this['_onAdded']), this['owner']['parent'] && this['owner']['parent']['off'](_0x126068['Event']['RESIZE'], this, this['_onParentR' + 'esize']);
        }
        ['_onAdded']() {
            this['owner']['parent'] && this['owner']['parent']['on'](_0x126068['Event']['RESIZE'], this, this['_onParentR' + 'esize']), this['resetLayou' + 'tX'](), this['resetLayou' + 'tY']();
        }
        ['_onParentR' + 'esize']() {
            var _0x51ad72 = this['resetLayou' + 'tX'](), _0x4ba426 = this['resetLayou' + 'tY']();
            (_0x51ad72 || _0x4ba426) && this['owner']['event'](_0x126068['Event']['RESIZE']);
        }
        ['resetLayou' + 'tX']() {
            var _0x4250d6 = this['owner'];
            if (!_0x4250d6)
                return !0x1;
            var _0x236ffa = _0x4250d6['parent'];
            if (_0x236ffa) {
                if (isNaN(this['centerX'])) {
                    if (isNaN(this['left']))
                        isNaN(this['right']) || (_0x4250d6['x'] = Math['round'](_0x236ffa['width'] - _0x4250d6['displayWid' + 'th'] - this['right'] + _0x4250d6['pivotX'] * _0x4250d6['scaleX']));
                    else {
                        if (_0x4250d6['x'] = Math['round'](this['left'] + _0x4250d6['pivotX'] * _0x4250d6['scaleX']), !isNaN(this['right'])) {
                            var _0x1248cf = (_0x236ffa['_width'] - this['left'] - this['right']) / (_0x4250d6['scaleX'] || 0.01);
                            if (_0x1248cf != _0x4250d6['width'])
                                return _0x4250d6['width'] = _0x1248cf, !0x0;
                        }
                    }
                } else
                    _0x4250d6['x'] = Math['round'](0.5 * (_0x236ffa['width'] - _0x4250d6['displayWid' + 'th']) + this['centerX'] + _0x4250d6['pivotX'] * _0x4250d6['scaleX']);
            }
            return !0x1;
        }
        ['resetLayou' + 'tY']() {
            var _0x443811 = this['owner'];
            if (!_0x443811)
                return !0x1;
            var _0x56e3d0 = _0x443811['parent'];
            if (_0x56e3d0) {
                if (isNaN(this['centerY'])) {
                    if (isNaN(this['top']))
                        isNaN(this['bottom']) || (_0x443811['y'] = Math['round'](_0x56e3d0['height'] - _0x443811['displayHei' + 'ght'] - this['bottom'] + _0x443811['pivotY'] * _0x443811['scaleY']));
                    else {
                        if (_0x443811['y'] = Math['round'](this['top'] + _0x443811['pivotY'] * _0x443811['scaleY']), !isNaN(this['bottom'])) {
                            var _0x18ffa0 = (_0x56e3d0['_height'] - this['top'] - this['bottom']) / (_0x443811['scaleY'] || 0.01);
                            if (_0x18ffa0 != _0x443811['height'])
                                return _0x443811['height'] = _0x18ffa0, !0x0;
                        }
                    }
                } else
                    _0x443811['y'] = Math['round'](0.5 * (_0x56e3d0['height'] - _0x443811['displayHei' + 'ght']) + this['centerY'] + _0x443811['pivotY'] * _0x443811['scaleY']);
            }
            return !0x1;
        }
        ['resetLayou' + 't']() {
            this['owner'] && (this['resetLayou' + 'tX'](), this['resetLayou' + 'tY']());
        }
        get ['top']() {
            return this['_top'];
        }
        set ['top'](_0x1b4da9) {
            this['_top'] != _0x1b4da9 && (this['_top'] = _0x1b4da9, this['resetLayou' + 'tY']());
        }
        get ['bottom']() {
            return this['_bottom'];
        }
        set ['bottom'](_0x293897) {
            this['_bottom'] != _0x293897 && (this['_bottom'] = _0x293897, this['resetLayou' + 'tY']());
        }
        get ['left']() {
            return this['_left'];
        }
        set ['left'](_0x1be100) {
            this['_left'] != _0x1be100 && (this['_left'] = _0x1be100, this['resetLayou' + 'tX']());
        }
        get ['right']() {
            return this['_right'];
        }
        set ['right'](_0xb2e845) {
            this['_right'] != _0xb2e845 && (this['_right'] = _0xb2e845, this['resetLayou' + 'tX']());
        }
        get ['centerX']() {
            return this['_centerX'];
        }
        set ['centerX'](_0x20aaeb) {
            this['_centerX'] != _0x20aaeb && (this['_centerX'] = _0x20aaeb, this['resetLayou' + 'tX']());
        }
        get ['centerY']() {
            return this['_centerY'];
        }
        set ['centerY'](_0xc40bf3) {
            this['_centerY'] != _0xc40bf3 && (this['_centerY'] = _0xc40bf3, this['resetLayou' + 'tY']());
        }
    }
    _0x2e464f['EMPTY'] = null, _0x126068['ILaya']['regClass'](_0x2e464f), _0x2e464f['EMPTY'] = new _0x2e464f(), _0x126068['ClassUtils']['regClass']('laya.ui.Wi' + 'dget', _0x2e464f), _0x126068['ClassUtils']['regClass']('Laya.Widge' + 't', _0x2e464f);
    class _0x31131d extends _0x126068['Event'] {
    }
    _0x31131d['SHOW_TIP'] = 'showtip', _0x31131d['HIDE_TIP'] = 'hidetip', _0x126068['ILaya']['regClass'](_0x31131d), _0x126068['ClassUtils']['regClass']('laya.ui.UI' + 'Event', _0x31131d), _0x126068['ClassUtils']['regClass']('Laya.UIEve' + 'nt', _0x31131d);
    class _0x1c3411 {
        static ['fillArray'](_0x5235ac, _0x262e92, _0x304c43 = null) {
            var _0x4b8600 = _0x5235ac['concat']();
            if (_0x262e92)
                for (var _0x110eb2 = _0x262e92['split'](','), _0x7c7709 = 0x0, _0x2fa541 = Math['min'](_0x4b8600['length'], _0x110eb2['length']); _0x7c7709 < _0x2fa541; _0x7c7709++) {
                    var _0x45861b = _0x110eb2[_0x7c7709];
                    _0x4b8600[_0x7c7709] = 'true' == _0x45861b || 'false' != _0x45861b && _0x45861b, null != _0x304c43 && (_0x4b8600[_0x7c7709] = _0x304c43(_0x45861b));
                }
            return _0x4b8600;
        }
        static ['toColor'](_0x20beec) {
            return _0x126068['Utils']['toHexColor'](_0x20beec);
        }
        static ['gray'](_0x338670, _0x2d0c03 = !0x0) {
            _0x2d0c03 ? _0x1c3411['addFilter'](_0x338670, _0x1c3411['grayFilter']) : _0x1c3411['clearFilte' + 'r'](_0x338670, _0x126068['ColorFilte' + 'r']);
        }
        static ['addFilter'](_0x35bc00, _0x558806) {
            var _0x42114a = _0x35bc00['filters'] || [];
            _0x42114a['push'](_0x558806), _0x35bc00['filters'] = _0x42114a;
        }
        static ['clearFilte' + 'r'](_0x1a6fc0, _0x2db5e1) {
            var _0x314e23 = _0x1a6fc0['filters'];
            if (null != _0x314e23 && _0x314e23['length'] > 0x0) {
                for (var _0x38a394 = _0x314e23['length'] - 0x1; _0x38a394 > -0x1; _0x38a394--) {
                    _0x314e23[_0x38a394] instanceof _0x2db5e1 && _0x314e23['splice'](_0x38a394, 0x1);
                }
                _0x1a6fc0['filters'] = _0x314e23;
            }
        }
        static ['_getReplac' + 'eStr'](_0x2865ba) {
            return _0x1c3411['escapeSequ' + 'ence'][_0x2865ba];
        }
        static ['adptString'](_0x732136) {
            return _0x732136['replace'](/\\(\w)/g, _0x1c3411['_getReplac' + 'eStr']);
        }
        static ['getBindFun'](_0x9b34d8) {
            _0x1c3411['_funMap'] || (_0x1c3411['_funMap'] = new _0x126068['WeakObject']());
            var _0x3073fc = _0x1c3411['_funMap']['get'](_0x9b34d8);
            if (null == _0x3073fc) {
                var _0x4f9f43 = '\x22' + _0x9b34d8 + '\x22', _0x47c9b3 = '(function(' + 'data){if(d' + 'ata==null)' + 'return;wit' + 'h(data){tr' + 'y{\x0areturn\x20' + (_0x4f9f43 = _0x4f9f43['replace'](/^"\${|}"$/g, '')['replace'](/\${/g, '\x22+')['replace'](/}/g, '+\x22')) + ('\x0a}catch(e)' + '{}}})');
                _0x3073fc = window['Laya']['_runScript'](_0x47c9b3), _0x1c3411['_funMap']['set'](_0x9b34d8, _0x3073fc);
            }
            return _0x3073fc;
        }
    }
    _0x1c3411['grayFilter'] = new _0x126068['ColorFilte' + 'r']([
        0.3086,
        0.6094,
        0.082,
        0x0,
        0x0,
        0.3086,
        0.6094,
        0.082,
        0x0,
        0x0,
        0.3086,
        0.6094,
        0.082,
        0x0,
        0x0,
        0x0,
        0x0,
        0x0,
        0x1,
        0x0
    ]), _0x1c3411['escapeSequ' + 'ence'] = {
        '\x5cn': '\x0a',
        '\x5ct': '\x09'
    }, _0x1c3411['_funMap'] = null, _0x126068['ClassUtils']['regClass']('laya.ui.UI' + 'Utils', _0x1c3411), _0x126068['ClassUtils']['regClass']('Laya.UIUti' + 'ls', _0x1c3411);
    class _0x23f9d7 extends _0x126068['Sprite'] {
        constructor(_0x1f4c52 = !0x0) {
            super(), this['_anchorX'] = NaN, this['_anchorY'] = NaN, this['_widget'] = _0x2e464f['EMPTY'], _0x1f4c52 && (this['preinitial' + 'ize'](), this['createChil' + 'dren'](), this['initialize']());
        }
        ['destroy'](_0x12c060 = !0x0) {
            super['destroy'](_0x12c060), this['_dataSourc' + 'e'] = null, this['_tag'] = null, this['_toolTip'] = null;
        }
        ['preinitial' + 'ize']() {
        }
        ['createChil' + 'dren']() {
        }
        ['initialize']() {
        }
        get ['width']() {
            return this['get_width']();
        }
        ['get_width']() {
            return this['_width'] ? this['_width'] : this['measureWid' + 'th']();
        }
        ['measureWid' + 'th']() {
            var _0x2ec141 = 0x0;
            this['commitMeas' + 'ure']();
            for (var _0x42836d = this['numChildre' + 'n'] - 0x1; _0x42836d > -0x1; _0x42836d--) {
                var _0x113e38 = this['getChildAt'](_0x42836d);
                _0x113e38['_visible'] && (_0x2ec141 = Math['max'](_0x113e38['_x'] + _0x113e38['width'] * _0x113e38['scaleX'], _0x2ec141));
            }
            return _0x2ec141;
        }
        ['commitMeas' + 'ure']() {
        }
        get ['height']() {
            return this['get_height']();
        }
        ['get_height']() {
            return this['_height'] ? this['_height'] : this['measureHei' + 'ght']();
        }
        ['measureHei' + 'ght']() {
            var _0x26f6a5 = 0x0;
            this['commitMeas' + 'ure']();
            for (var _0x56bb1d = this['numChildre' + 'n'] - 0x1; _0x56bb1d > -0x1; _0x56bb1d--) {
                var _0x54d3d9 = this['getChildAt'](_0x56bb1d);
                _0x54d3d9['_visible'] && (_0x26f6a5 = Math['max'](_0x54d3d9['_y'] + _0x54d3d9['height'] * _0x54d3d9['scaleY'], _0x26f6a5));
            }
            return _0x26f6a5;
        }
        get ['dataSource']() {
            return this['get_dataSo' + 'urce']();
        }
        ['get_dataSo' + 'urce']() {
            return this['_dataSourc' + 'e'];
        }
        set ['dataSource'](_0x3e7d42) {
            this['set_dataSo' + 'urce'](_0x3e7d42);
        }
        ['set_dataSo' + 'urce'](_0x3c25dd) {
            for (var _0x159d77 in (this['_dataSourc' + 'e'] = _0x3c25dd, this['_dataSourc' + 'e']))
                _0x159d77 in this && 'function' != typeof this[_0x159d77] && (this[_0x159d77] = this['_dataSourc' + 'e'][_0x159d77]);
        }
        get ['top']() {
            return this['get_top']();
        }
        ['get_top']() {
            return this['_widget']['top'];
        }
        set ['top'](_0x2dd594) {
            this['set_top'](_0x2dd594);
        }
        ['set_top'](_0x5b27ce) {
            _0x5b27ce != this['_widget']['top'] && (this['_getWidget']()['top'] = _0x5b27ce);
        }
        get ['bottom']() {
            return this['get_bottom']();
        }
        ['get_bottom']() {
            return this['_widget']['bottom'];
        }
        set ['bottom'](_0x27b90b) {
            this['set_bottom'](_0x27b90b);
        }
        ['set_bottom'](_0x5a59bb) {
            _0x5a59bb != this['_widget']['bottom'] && (this['_getWidget']()['bottom'] = _0x5a59bb);
        }
        get ['left']() {
            return this['_widget']['left'];
        }
        set ['left'](_0x50cc6a) {
            _0x50cc6a != this['_widget']['left'] && (this['_getWidget']()['left'] = _0x50cc6a);
        }
        get ['right']() {
            return this['_widget']['right'];
        }
        set ['right'](_0xdacb9b) {
            _0xdacb9b != this['_widget']['right'] && (this['_getWidget']()['right'] = _0xdacb9b);
        }
        get ['centerX']() {
            return this['_widget']['centerX'];
        }
        set ['centerX'](_0x3789c5) {
            _0x3789c5 != this['_widget']['centerX'] && (this['_getWidget']()['centerX'] = _0x3789c5);
        }
        get ['centerY']() {
            return this['_widget']['centerY'];
        }
        set ['centerY'](_0x415bf3) {
            _0x415bf3 != this['_widget']['centerY'] && (this['_getWidget']()['centerY'] = _0x415bf3);
        }
        ['_sizeChang' + 'ed']() {
            isNaN(this['_anchorX']) || (this['pivotX'] = this['anchorX'] * this['width']), isNaN(this['_anchorY']) || (this['pivotY'] = this['anchorY'] * this['height']), this['event'](_0x126068['Event']['RESIZE']), this['_widget'] !== _0x2e464f['EMPTY'] && this['_widget']['resetLayou' + 't']();
        }
        get ['tag']() {
            return this['_tag'];
        }
        set ['tag'](_0x428658) {
            this['_tag'] = _0x428658;
        }
        get ['toolTip']() {
            return this['_toolTip'];
        }
        set ['toolTip'](_0x13c855) {
            this['_toolTip'] != _0x13c855 && (this['_toolTip'] = _0x13c855, null != _0x13c855 ? (this['on'](_0x126068['Event']['MOUSE_OVER'], this, this['onMouseOve' + 'r']), this['on'](_0x126068['Event']['MOUSE_OUT'], this, this['onMouseOut'])) : (this['off'](_0x126068['Event']['MOUSE_OVER'], this, this['onMouseOve' + 'r']), this['off'](_0x126068['Event']['MOUSE_OUT'], this, this['onMouseOut'])));
        }
        ['onMouseOve' + 'r'](_0x4d941a) {
            _0x126068['ILaya']['stage']['event'](_0x31131d['SHOW_TIP'], this['_toolTip']);
        }
        ['onMouseOut'](_0x2fb7ae) {
            _0x126068['ILaya']['stage']['event'](_0x31131d['HIDE_TIP'], this['_toolTip']);
        }
        get ['gray']() {
            return this['_gray'];
        }
        set ['gray'](_0x52db2f) {
            _0x52db2f !== this['_gray'] && (this['_gray'] = _0x52db2f, _0x1c3411['gray'](this, _0x52db2f));
        }
        get ['disabled']() {
            return this['_disabled'];
        }
        set ['disabled'](_0x3a91db) {
            _0x3a91db !== this['_disabled'] && (this['gray'] = this['_disabled'] = _0x3a91db, this['mouseEnabl' + 'ed'] = !_0x3a91db);
        }
        ['_getWidget']() {
            return this['_widget'] === _0x2e464f['EMPTY'] && (this['_widget'] = this['addCompone' + 'nt'](_0x2e464f)), this['_widget'];
        }
        set ['scaleX'](_0x1f2f92) {
            this['set_scaleX'](_0x1f2f92);
        }
        ['set_scaleX'](_0x350f95) {
            super['get_scaleX']() != _0x350f95 && (super['set_scaleX'](_0x350f95), this['event'](_0x126068['Event']['RESIZE']));
        }
        get ['scaleX']() {
            return super['scaleX'];
        }
        set ['scaleY'](_0x5c5a3b) {
            this['set_scaleY'](_0x5c5a3b);
        }
        ['set_scaleY'](_0x46ea06) {
            super['get_scaleY']() != _0x46ea06 && (super['set_scaleY'](_0x46ea06), this['event'](_0x126068['Event']['RESIZE']));
        }
        get ['scaleY']() {
            return super['scaleY'];
        }
        ['onCompResi' + 'ze']() {
            this['_sizeChang' + 'ed']();
        }
        set ['width'](_0x315a8e) {
            this['set_width'](_0x315a8e);
        }
        ['set_width'](_0x4ab33e) {
            super['get_width']() != _0x4ab33e && (super['set_width'](_0x4ab33e), this['callLater'](this['_sizeChang' + 'ed']));
        }
        set ['height'](_0x33f0fe) {
            this['set_height'](_0x33f0fe);
        }
        ['set_height'](_0x2d4f6d) {
            super['get_height']() != _0x2d4f6d && (super['set_height'](_0x2d4f6d), this['callLater'](this['_sizeChang' + 'ed']));
        }
        get ['anchorX']() {
            return this['get_anchor' + 'X']();
        }
        ['get_anchor' + 'X']() {
            return this['_anchorX'];
        }
        set ['anchorX'](_0x3bf254) {
            this['set_anchor' + 'X'](_0x3bf254);
        }
        ['set_anchor' + 'X'](_0x5e536b) {
            this['_anchorX'] != _0x5e536b && (this['_anchorX'] = _0x5e536b, this['callLater'](this['_sizeChang' + 'ed']));
        }
        get ['anchorY']() {
            return this['get_anchor' + 'Y']();
        }
        ['get_anchor' + 'Y']() {
            return this['_anchorY'];
        }
        set ['anchorY'](_0x588089) {
            this['set_anchor' + 'Y'](_0x588089);
        }
        ['set_anchor' + 'Y'](_0x17638f) {
            this['_anchorY'] != _0x17638f && (this['_anchorY'] = _0x17638f, this['callLater'](this['_sizeChang' + 'ed']));
        }
        ['_childChan' + 'ged'](_0x39b82e = null) {
            this['callLater'](this['_sizeChang' + 'ed']), super['_childChan' + 'ged'](_0x39b82e);
        }
    }
    _0x126068['ILaya']['regClass'](_0x23f9d7), _0x126068['ClassUtils']['regClass']('laya.ui.UI' + 'Component', _0x23f9d7), _0x126068['ClassUtils']['regClass']('Laya.UICom' + 'ponent', _0x23f9d7);
    class _0x527063 extends _0x23f9d7 {
        constructor(_0x4225e5 = null) {
            super(), this['skin'] = _0x4225e5;
        }
        ['destroy'](_0x1b60dc = !0x0) {
            super['destroy'](!0x0), this['_bitmap'] && this['_bitmap']['destroy'](), this['_bitmap'] = null;
        }
        ['dispose']() {
            this['destroy'](!0x0), _0x126068['ILaya']['loader']['clearRes'](this['_skin']);
        }
        ['createChil' + 'dren']() {
            this['graphics'] = this['_bitmap'] = new _0x38f875(), this['_bitmap']['autoCacheC' + 'md'] = !0x1;
        }
        get ['skin']() {
            return this['_skin'];
        }
        set ['skin'](_0x46d1f3) {
            if (this['_skin'] != _0x46d1f3 && !this['destroyed']) {
                if (this['_skin'] = _0x46d1f3, _0x46d1f3) {
                    var _0x5df393 = _0x126068['Loader']['getRes'](_0x46d1f3);
                    _0x5df393 ? (this['source'] = _0x5df393, this['onCompResi' + 'ze']()) : _0x126068['ILaya']['loader']['load'](this['_skin'], _0x126068['Handler']['create'](this, this['setSource'], [this['_skin']]), null, _0x126068['Loader']['IMAGE'], 0x1, !0x0, this['_group']);
                } else
                    this['source'] = null;
                this['event'](_0x126068['Event']['CHANGED']);
            }
        }
        get ['source']() {
            return this['_bitmap']['source'];
        }
        set ['source'](_0x3acd82) {
            this['_bitmap'] && (this['_bitmap']['source'] = _0x3acd82, this['event'](_0x126068['Event']['LOADED']), this['repaint']());
        }
        get ['group']() {
            return this['_group'];
        }
        set ['group'](_0x12f792) {
            _0x12f792 && this['_skin'] && _0x126068['Loader']['setGroup'](this['_skin'], _0x12f792), this['_group'] = _0x12f792;
        }
        ['setSource'](_0x59142d, _0x55d251 = null) {
            _0x59142d === this['_skin'] && _0x55d251 && !this['destroyed'] && (this['source'] = _0x55d251, this['onCompResi' + 'ze']());
        }
        ['measureWid' + 'th']() {
            return this['_bitmap']['width'];
        }
        ['measureHei' + 'ght']() {
            return this['_bitmap']['height'];
        }
        set ['width'](_0x527bd2) {
            super['width'] = _0x527bd2, this['_bitmap']['width'] = 0x0 == _0x527bd2 ? 1e-7 : _0x527bd2;
        }
        get ['width']() {
            return super['width'];
        }
        set ['height'](_0x461406) {
            super['height'] = _0x461406, this['_bitmap']['height'] = 0x0 == _0x461406 ? 1e-7 : _0x461406;
        }
        get ['height']() {
            return super['height'];
        }
        get ['sizeGrid']() {
            return this['_bitmap']['sizeGrid'] ? this['_bitmap']['sizeGrid']['join'](',') : null;
        }
        set ['sizeGrid'](_0x1cd22c) {
            this['_bitmap']['sizeGrid'] = _0x1c3411['fillArray'](_0x5393ca['defaultSiz' + 'eGrid'], _0x1cd22c, Number);
        }
        set ['dataSource'](_0xa8289e) {
            this['_dataSourc' + 'e'] = _0xa8289e, 'string' == typeof _0xa8289e ? this['skin'] = _0xa8289e : super['dataSource'] = _0xa8289e;
        }
        get ['dataSource']() {
            return super['dataSource'];
        }
    }
    _0x126068['ILaya']['regClass'](_0x527063), _0x126068['ClassUtils']['regClass']('laya.ui.Im' + 'age', _0x527063), _0x126068['ClassUtils']['regClass']('Laya.Image', _0x527063);
    class _0x45f4d7 extends _0x527063 {
        constructor(_0x56ff49 = null) {
            super(), this['advsListAr' + 'r'] = [], this['resUrl'] = 'https://un' + 'ioncdn.lay' + 'abox.com/c' + 'onfig/icon' + 'list.json', this['_http'] = new _0x126068['Browser']['window']['XMLHttpReq' + 'uest'](), this['_data'] = [], this['_resquestT' + 'ime'] = 0x57e40, this['_playIndex'] = 0x0, this['_lunboTime'] = 0x1388, this['skin'] = _0x56ff49, this['setLoadUrl'](), this['init'](), this['size'](0x78, 0x78);
        }
        ['setLoadUrl']() {
        }
        ['init']() {
            this['isSupportJ' + 'ump']() ? ((_0x126068['Browser']['onMiniGame'] || _0x126068['Browser']['onBDMiniGa' + 'me']) && _0x126068['ILaya']['timer']['loop'](this['_resquestT' + 'ime'], this, this['onGetAdvsL' + 'istData']), this['onGetAdvsL' + 'istData'](), this['initEvent']()) : this['visible'] = !0x1;
        }
        ['initEvent']() {
            this['on'](_0x126068['Event']['CLICK'], this, this['onAdvsImgC' + 'lick']);
        }
        ['onAdvsImgC' + 'lick']() {
            this['getCurrent' + 'AppidObj']() && this['jumptoGame']();
        }
        ['revertAdvs' + 'Data']() {
            this['advsListAr' + 'r'][this['_playIndex']] && (this['visible'] = !0x0, this['skin'] = this['advsListAr' + 'r'][this['_playIndex']]);
        }
        ['isSupportJ' + 'ump']() {
            return _0x126068['Browser']['onMiniGame'] ? window['wx']['navigateTo' + 'MiniProgra' + 'm'] instanceof Function : !!_0x126068['Browser']['onBDMiniGa' + 'me'];
        }
        ['jumptoGame']() {
            var _0x89db35 = this['advsListAr' + 'r'][this['_playIndex']];
            parseInt(_0x89db35['gameid']), _0x89db35['extendInfo'], _0x89db35['path'], _0x126068['Browser']['onMiniGame'] ? this['isSupportJ' + 'ump']() && window['wx']['navigateTo' + 'MiniProgra' + 'm']({
                'appId': this['_appid'],
                'path': '',
                'extraData': '',
                'envVersion': 'release',
                'success': function () {
                    console['log']('----------' + '---跳转成功---' + '----------' + '-');
                },
                'fail': function () {
                    console['log']('----------' + '---跳转失败---' + '----------' + '-');
                },
                'complete': function () {
                    console['log']('----------' + '---跳转接口调用成' + '功---------' + '-----'), this['updateAdvs' + 'Info']();
                }['bind'](this)
            }) : _0x126068['Browser']['onBDMiniGa' + 'me'] || (this['visible'] = !0x1);
        }
        ['updateAdvs' + 'Info']() {
            this['visible'] = !0x1, this['onLunbo'](), _0x126068['ILaya']['timer']['loop'](this['_lunboTime'], this, this['onLunbo']);
        }
        ['onLunbo']() {
            this['_playIndex'] >= this['advsListAr' + 'r']['length'] - 0x1 ? this['_playIndex'] = 0x0 : this['_playIndex'] += 0x1, this['visible'] = !0x0, this['revertAdvs' + 'Data']();
        }
        ['getCurrent' + 'AppidObj']() {
            return this['advsListAr' + 'r'][this['_playIndex']];
        }
        ['onGetAdvsL' + 'istData']() {
            var _0x1b2f7f = this, _0x2576a0 = _0x45f4d7['randRange'](0x2710, 0xf4240), _0x5e95ec = this['resUrl'] + '?' + _0x2576a0;
            this['_http']['open']('get', _0x5e95ec, !0x0), this['_http']['setRequest' + 'Header']('Content-Ty' + 'pe', 'applicatio' + 'n/x-www-fo' + 'rm-urlenco' + 'ded'), this['_http']['responseTy' + 'pe'] = 'text', this['_http']['onerror'] = function (_0x260936) {
                _0x1b2f7f['_onError'](_0x260936);
            }, this['_http']['onload'] = function (_0x1283d9) {
                _0x1b2f7f['_onLoad'](_0x1283d9);
            }, this['_http']['send'](null);
        }
        static ['randRange'](_0x315c44, _0x494c80) {
            return Math['floor'](Math['random']() * (_0x494c80 - _0x315c44 + 0x1)) + _0x315c44;
        }
        ['_onError'](_0xb29ab9) {
            this['error']('Request\x20fa' + 'iled\x20Statu' + 's:' + this['_http']['status'] + '\x20text:' + this['_http']['statusText']);
        }
        ['_onLoad'](_0x2fb92d) {
            var _0x1146a8 = this['_http'], _0x4d6e59 = void 0x0 !== _0x1146a8['status'] ? _0x1146a8['status'] : 0xc8;
            0xc8 === _0x4d6e59 || 0xcc === _0x4d6e59 || 0x0 === _0x4d6e59 ? this['complete']() : this['error']('[' + _0x1146a8['status'] + ']' + _0x1146a8['statusText'] + ':' + _0x1146a8['responseUR' + 'L']);
        }
        ['error'](_0x4d9615) {
            this['event'](_0x126068['Event']['ERROR'], _0x4d9615);
        }
        ['complete']() {
            try {
                this['_data'] = this['_http']['response'] || this['_http']['responseTe' + 'xt'], this['_data'] = JSON['parse'](this['_data']), this['advsListAr' + 'r'] = this['_data']['list'], this['_appid'] = this['_data']['appid'], this['updateAdvs' + 'Info'](), this['revertAdvs' + 'Data']();
            } catch (_0x25d0bc) {
                this['error'](_0x25d0bc['message']);
            }
        }
        ['getAdvsQAr' + 'r'](_0x731963) {
            var _0x30c734 = [], _0x548a4e = _0x126068['LocalStora' + 'ge']['getJSON']('gameObj');
            for (var _0x197b26 in _0x731963) {
                var _0x239c8d = _0x731963[_0x197b26];
                _0x548a4e && _0x548a4e[_0x239c8d['gameid']] && !_0x239c8d['isQiangZhi'] || _0x30c734['push'](_0x239c8d);
            }
            return _0x30c734;
        }
        ['clear']() {
            var _0x131ddb = this['_http'];
            _0x131ddb['onerror'] = _0x131ddb['onabort'] = _0x131ddb['onprogress'] = _0x131ddb['onload'] = null;
        }
        ['destroy'](_0x725c6e = !0x0) {
            _0x126068['ILaya']['timer']['clear'](this, this['onLunbo']), super['destroy'](!0x0), this['clear'](), _0x126068['ILaya']['timer']['clear'](this, this['onGetAdvsL' + 'istData']);
        }
    }
    _0x126068['ClassUtils']['regClass']('laya.ui.Ad' + 'vImage', _0x45f4d7), _0x126068['ClassUtils']['regClass']('Laya.AdvIm' + 'age', _0x45f4d7);
    class _0x41b5da extends _0x23f9d7 {
        set ['dataSource'](_0x54640c) {
            for (var _0x4e6469 in (this['_dataSourc' + 'e'] = _0x54640c, _0x54640c)) {
                var _0x39dd20 = this['getChildBy' + 'Name'](_0x4e6469);
                _0x39dd20 ? _0x39dd20['dataSource'] = _0x54640c[_0x4e6469] : _0x4e6469 in this && !(this[_0x4e6469] instanceof Function) && (this[_0x4e6469] = _0x54640c[_0x4e6469]);
            }
        }
        get ['dataSource']() {
            return super['dataSource'];
        }
        get ['bgColor']() {
            return this['_bgColor'];
        }
        set ['bgColor'](_0xc8c375) {
            this['_bgColor'] = _0xc8c375, _0xc8c375 ? (this['_onResize'](null), this['on'](_0x126068['Event']['RESIZE'], this, this['_onResize'])) : (this['graphics']['clear'](), this['off'](_0x126068['Event']['RESIZE'], this, this['_onResize']));
        }
        ['_onResize'](_0x129406) {
            this['graphics']['clear'](), this['graphics']['drawRect'](0x0, 0x0, this['width'], this['height'], this['_bgColor']);
        }
    }
    _0x126068['ILaya']['regClass'](_0x41b5da), _0x126068['ClassUtils']['regClass']('laya.ui.Bo' + 'x', _0x41b5da), _0x126068['ClassUtils']['regClass']('Laya.Box', _0x41b5da);
    class _0x37601b extends _0x23f9d7 {
        constructor(_0x398e1e = null, _0x49b39f = '') {
            super(), this['_labelColo' + 'rs'] = _0x5393ca['buttonLabe' + 'lColors'], this['_state'] = 0x0, this['_autoSize'] = !0x0, this['_stateNum'] = _0x5393ca['buttonStat' + 'eNum'], this['_stateChan' + 'ged'] = !0x1, this['skin'] = _0x398e1e, this['label'] = _0x49b39f;
        }
        ['destroy'](_0xc07810 = !0x0) {
            super['destroy'](_0xc07810), this['_bitmap'] && this['_bitmap']['destroy'](), this['_text'] && this['_text']['destroy'](_0xc07810), this['_bitmap'] = null, this['_text'] = null, this['_clickHand' + 'ler'] = null, this['_labelColo' + 'rs'] = this['_sources'] = this['_strokeCol' + 'ors'] = null;
        }
        ['createChil' + 'dren']() {
            this['graphics'] = this['_bitmap'] = new _0x38f875();
        }
        ['createText']() {
            this['_text'] || (this['_text'] = new _0x126068['Text'](), this['_text']['overflow'] = _0x126068['Text']['HIDDEN'], this['_text']['align'] = 'center', this['_text']['valign'] = 'middle', this['_text']['width'] = this['_width'], this['_text']['height'] = this['_height']);
        }
        ['initialize']() {
            0x1 !== this['_mouseStat' + 'e'] && (this['mouseEnabl' + 'ed'] = !0x0, this['_setBit'](_0x126068['Const']['HAS_MOUSE'], !0x0)), this['_createLis' + 'tener'](_0x126068['Event']['MOUSE_OVER'], this, this['onMouse'], null, !0x1, !0x1), this['_createLis' + 'tener'](_0x126068['Event']['MOUSE_OUT'], this, this['onMouse'], null, !0x1, !0x1), this['_createLis' + 'tener'](_0x126068['Event']['MOUSE_DOWN'], this, this['onMouse'], null, !0x1, !0x1), this['_createLis' + 'tener'](_0x126068['Event']['MOUSE_UP'], this, this['onMouse'], null, !0x1, !0x1), this['_createLis' + 'tener'](_0x126068['Event']['CLICK'], this, this['onMouse'], null, !0x1, !0x1);
        }
        ['onMouse'](_0x14f314) {
            if (!0x1 !== this['toggle'] || !this['_selected'])
                return _0x14f314['type'] === _0x126068['Event']['CLICK'] ? (this['toggle'] && (this['selected'] = !this['_selected']), void (this['_clickHand' + 'ler'] && this['_clickHand' + 'ler']['run']())) : void (!this['_selected'] && (this['state'] = _0x37601b['stateMap'][_0x14f314['type']]));
        }
        get ['skin']() {
            return this['_skin'];
        }
        set ['skin'](_0x3e639b) {
            this['_skin'] != _0x3e639b && (this['_skin'] = _0x3e639b, _0x3e639b ? _0x126068['Loader']['getRes'](_0x3e639b) ? this['_skinLoade' + 'd']() : _0x126068['ILaya']['loader']['load'](this['_skin'], _0x126068['Handler']['create'](this, this['_skinLoade' + 'd']), null, _0x126068['Loader']['IMAGE'], 0x1) : this['_skinLoade' + 'd']());
        }
        ['_skinLoade' + 'd']() {
            this['callLater'](this['changeClip' + 's']), this['_setStateC' + 'hanged'](), this['_sizeChang' + 'ed'](), this['event'](_0x126068['Event']['LOADED']);
        }
        get ['stateNum']() {
            return this['_stateNum'];
        }
        set ['stateNum'](_0x4ba076) {
            'string' == typeof _0x4ba076 && (_0x4ba076 = parseInt(_0x4ba076)), this['_stateNum'] != _0x4ba076 && (this['_stateNum'] = _0x4ba076 < 0x1 ? 0x1 : _0x4ba076 > 0x3 ? 0x3 : _0x4ba076, this['callLater'](this['changeClip' + 's']));
        }
        ['changeClip' + 's']() {
            var _0x56fe14 = _0x126068['Loader']['getRes'](this['_skin']);
            if (_0x56fe14) {
                var _0x92e4e0 = _0x56fe14['sourceWidt' + 'h'], _0x489a52 = _0x56fe14['sourceHeig' + 'ht'] / this['_stateNum'];
                _0x56fe14['$_GID'] || (_0x56fe14['$_GID'] = _0x126068['Utils']['getGID']());
                var _0x4e3943 = _0x56fe14['$_GID'] + '-' + this['_stateNum'], _0x5f1ce0 = _0x126068['WeakObject']['I']['get'](_0x4e3943);
                if (_0x126068['Utils']['isOkTextur' + 'eList'](_0x5f1ce0) || (_0x5f1ce0 = null), _0x5f1ce0)
                    this['_sources'] = _0x5f1ce0;
                else {
                    if (this['_sources'] = [], 0x1 === this['_stateNum'])
                        this['_sources']['push'](_0x56fe14);
                    else {
                        for (var _0x7d3ac6 = 0x0; _0x7d3ac6 < this['_stateNum']; _0x7d3ac6++)
                            this['_sources']['push'](_0x126068['Texture']['createFrom' + 'Texture'](_0x56fe14, 0x0, _0x489a52 * _0x7d3ac6, _0x92e4e0, _0x489a52));
                    }
                    _0x126068['WeakObject']['I']['set'](_0x4e3943, this['_sources']);
                }
                this['_autoSize'] ? (this['_bitmap']['width'] = this['_width'] || _0x92e4e0, this['_bitmap']['height'] = this['_height'] || _0x489a52, this['_text'] && (this['_text']['width'] = this['_bitmap']['width'], this['_text']['height'] = this['_bitmap']['height'])) : this['_text'] && (this['_text']['x'] = _0x92e4e0);
            } else
                console['log']('lose\x20skin', this['_skin']);
        }
        ['measureWid' + 'th']() {
            return this['runCallLat' + 'er'](this['changeClip' + 's']), this['_autoSize'] ? this['_bitmap']['width'] : (this['runCallLat' + 'er'](this['changeStat' + 'e']), this['_bitmap']['width'] + (this['_text'] ? this['_text']['width'] : 0x0));
        }
        ['measureHei' + 'ght']() {
            return this['runCallLat' + 'er'](this['changeClip' + 's']), this['_text'] ? Math['max'](this['_bitmap']['height'], this['_text']['height']) : this['_bitmap']['height'];
        }
        get ['label']() {
            return this['_text'] ? this['_text']['text'] : null;
        }
        set ['label'](_0x6bda39) {
            (this['_text'] || _0x6bda39) && (this['createText'](), this['_text']['text'] != _0x6bda39 && (_0x6bda39 && !this['_text']['parent'] && this['addChild'](this['_text']), this['_text']['text'] = (_0x6bda39 + '')['replace'](/\\n/g, '\x0a'), this['_setStateC' + 'hanged']()));
        }
        get ['selected']() {
            return this['_selected'];
        }
        set ['selected'](_0x56afc3) {
            this['_selected'] != _0x56afc3 && (this['_selected'] = _0x56afc3, this['state'] = this['_selected'] ? 0x2 : 0x0, this['event'](_0x126068['Event']['CHANGE']));
        }
        get ['state']() {
            return this['_state'];
        }
        set ['state'](_0x3e82f3) {
            this['_state'] != _0x3e82f3 && (this['_state'] = _0x3e82f3, this['_setStateC' + 'hanged']());
        }
        ['changeStat' + 'e']() {
            this['_stateChan' + 'ged'] = !0x1, this['runCallLat' + 'er'](this['changeClip' + 's']);
            var _0x49536a = this['_state'] < this['_stateNum'] ? this['_state'] : this['_stateNum'] - 0x1;
            this['_sources'] && (this['_bitmap']['source'] = this['_sources'][_0x49536a]), this['label'] && (this['_text']['color'] = this['_labelColo' + 'rs'][_0x49536a], this['_strokeCol' + 'ors'] && (this['_text']['strokeColo' + 'r'] = this['_strokeCol' + 'ors'][_0x49536a]));
        }
        get ['labelColor' + 's']() {
            return this['_labelColo' + 'rs']['join'](',');
        }
        set ['labelColor' + 's'](_0x1d2417) {
            this['_labelColo' + 'rs'] = _0x1c3411['fillArray'](_0x5393ca['buttonLabe' + 'lColors'], _0x1d2417, String), this['_setStateC' + 'hanged']();
        }
        get ['strokeColo' + 'rs']() {
            return this['_strokeCol' + 'ors'] ? this['_strokeCol' + 'ors']['join'](',') : '';
        }
        set ['strokeColo' + 'rs'](_0x4b4a83) {
            this['_strokeCol' + 'ors'] = _0x1c3411['fillArray'](_0x5393ca['buttonLabe' + 'lColors'], _0x4b4a83, String), this['_setStateC' + 'hanged']();
        }
        get ['labelPaddi' + 'ng']() {
            return this['createText'](), this['_text']['padding']['join'](',');
        }
        set ['labelPaddi' + 'ng'](_0x43a6c1) {
            this['createText'](), this['_text']['padding'] = _0x1c3411['fillArray'](_0x5393ca['labelPaddi' + 'ng'], _0x43a6c1, Number);
        }
        get ['labelSize']() {
            return this['createText'](), this['_text']['fontSize'];
        }
        set ['labelSize'](_0x1d59c5) {
            this['createText'](), this['_text']['fontSize'] = _0x1d59c5;
        }
        get ['labelStrok' + 'e']() {
            return this['createText'](), this['_text']['stroke'];
        }
        set ['labelStrok' + 'e'](_0x4d237d) {
            this['createText'](), this['_text']['stroke'] = _0x4d237d;
        }
        get ['labelStrok' + 'eColor']() {
            return this['createText'](), this['_text']['strokeColo' + 'r'];
        }
        set ['labelStrok' + 'eColor'](_0x2e9531) {
            this['createText'](), this['_text']['strokeColo' + 'r'] = _0x2e9531;
        }
        get ['labelBold']() {
            return this['createText'](), this['_text']['bold'];
        }
        set ['labelBold'](_0x1369c5) {
            this['createText'](), this['_text']['bold'] = _0x1369c5;
        }
        get ['labelFont']() {
            return this['createText'](), this['_text']['font'];
        }
        set ['labelFont'](_0x3fec81) {
            this['createText'](), this['_text']['font'] = _0x3fec81;
        }
        get ['labelAlign']() {
            return this['createText'](), this['_text']['align'];
        }
        set ['labelAlign'](_0x4002d7) {
            this['createText'](), this['_text']['align'] = _0x4002d7;
        }
        get ['clickHandl' + 'er']() {
            return this['_clickHand' + 'ler'];
        }
        set ['clickHandl' + 'er'](_0x3ee361) {
            this['_clickHand' + 'ler'] = _0x3ee361;
        }
        get ['text']() {
            return this['createText'](), this['_text'];
        }
        get ['sizeGrid']() {
            return this['_bitmap']['sizeGrid'] ? this['_bitmap']['sizeGrid']['join'](',') : null;
        }
        set ['sizeGrid'](_0x1d7470) {
            this['_bitmap']['sizeGrid'] = _0x1c3411['fillArray'](_0x5393ca['defaultSiz' + 'eGrid'], _0x1d7470, Number);
        }
        set ['width'](_0x2ec8f1) {
            super['set_width'](_0x2ec8f1), this['_autoSize'] && (this['_bitmap']['width'] = _0x2ec8f1, this['_text'] && (this['_text']['width'] = _0x2ec8f1));
        }
        get ['width']() {
            return super['get_width']();
        }
        set ['height'](_0x395e39) {
            super['set_height'](_0x395e39), this['_autoSize'] && (this['_bitmap']['height'] = _0x395e39, this['_text'] && (this['_text']['height'] = _0x395e39));
        }
        get ['height']() {
            return super['get_height']();
        }
        set ['dataSource'](_0x237b01) {
            this['_dataSourc' + 'e'] = _0x237b01, 'number' == typeof _0x237b01 || 'string' == typeof _0x237b01 ? this['label'] = _0x237b01 + '' : super['set_dataSo' + 'urce'](_0x237b01);
        }
        get ['dataSource']() {
            return super['get_dataSo' + 'urce']();
        }
        get ['iconOffset']() {
            return this['_bitmap']['_offset'] ? this['_bitmap']['_offset']['join'](',') : null;
        }
        set ['iconOffset'](_0x181125) {
            this['_bitmap']['_offset'] = _0x181125 ? _0x1c3411['fillArray']([
                0x1,
                0x1
            ], _0x181125, Number) : [];
        }
        ['_setStateC' + 'hanged']() {
            this['_stateChan' + 'ged'] || (this['_stateChan' + 'ged'] = !0x0, this['callLater'](this['changeStat' + 'e']));
        }
    }
    _0x37601b['stateMap'] = {
        'mouseup': 0x0,
        'mouseover': 0x1,
        'mousedown': 0x2,
        'mouseout': 0x0
    }, _0x126068['ILaya']['regClass'](_0x37601b), _0x126068['ClassUtils']['regClass']('laya.ui.Bu' + 'tton', _0x37601b), _0x126068['ClassUtils']['regClass']('Laya.Butto' + 'n', _0x37601b);
    class _0x310346 extends _0x37601b {
        constructor(_0xa8d0fe = null, _0x11394e = '') {
            super(_0xa8d0fe, _0x11394e), this['toggle'] = !0x0, this['_autoSize'] = !0x1;
        }
        ['preinitial' + 'ize']() {
            super['preinitial' + 'ize'](), this['toggle'] = !0x0, this['_autoSize'] = !0x1;
        }
        ['initialize']() {
            super['initialize'](), this['createText'](), this['_text']['align'] = 'left', this['_text']['valign'] = 'top', this['_text']['width'] = 0x0;
        }
        set ['dataSource'](_0x211e8a) {
            this['_dataSourc' + 'e'] = _0x211e8a, _0x211e8a instanceof Boolean ? this['selected'] = _0x211e8a : 'string' == typeof _0x211e8a ? this['selected'] = 'true' === _0x211e8a : super['dataSource'] = _0x211e8a;
        }
        get ['dataSource']() {
            return super['dataSource'];
        }
    }
    _0x126068['ILaya']['regClass'](_0x310346), _0x126068['ClassUtils']['regClass']('laya.ui.Ch' + 'eckBox', _0x310346), _0x126068['ClassUtils']['regClass']('Laya.Check' + 'Box', _0x310346);
    class _0x156dd6 extends _0x23f9d7 {
        constructor(_0x414518 = null, _0x3e59b7 = 0x1, _0x1f79a7 = 0x1) {
            super(), this['_clipX'] = 0x1, this['_clipY'] = 0x1, this['_clipWidth'] = 0x0, this['_clipHeigh' + 't'] = 0x0, this['_interval'] = 0x32, this['_index'] = 0x0, this['_toIndex'] = -0x1, this['_clipX'] = _0x3e59b7, this['_clipY'] = _0x1f79a7, this['skin'] = _0x414518;
        }
        ['destroy'](_0x5cfe47 = !0x0) {
            super['destroy'](!0x0), this['_bitmap'] && this['_bitmap']['destroy'](), this['_bitmap'] = null, this['_sources'] = null;
        }
        ['dispose']() {
            this['destroy'](!0x0), _0x126068['ILaya']['loader']['clearRes'](this['_skin']);
        }
        ['createChil' + 'dren']() {
            this['graphics'] = this['_bitmap'] = new _0x38f875();
        }
        ['_onDisplay'](_0x121cb9) {
            this['_isPlaying'] ? this['_getBit'](_0x126068['Const']['DISPLAYED_' + 'INSTAGE']) ? this['play']() : this['stop']() : this['_autoPlay'] && this['play']();
        }
        get ['skin']() {
            return this['_skin'];
        }
        set ['skin'](_0x35ff9c) {
            this['_skin'] != _0x35ff9c && (this['_skin'] = _0x35ff9c, _0x35ff9c ? _0x126068['Loader']['getRes'](_0x35ff9c) ? this['_skinLoade' + 'd']() : _0x126068['ILaya']['loader']['load'](this['_skin'], _0x126068['Handler']['create'](this, this['_skinLoade' + 'd']), null, _0x126068['Loader']['IMAGE'], 0x1) : this['_bitmap']['source'] = null);
        }
        ['_skinLoade' + 'd']() {
            this['_setClipCh' + 'anged'](), this['_sizeChang' + 'ed'](), this['event'](_0x126068['Event']['LOADED']);
        }
        get ['clipX']() {
            return this['_clipX'];
        }
        set ['clipX'](_0x57a7e2) {
            this['_clipX'] = _0x57a7e2 || 0x1, this['_setClipCh' + 'anged']();
        }
        get ['clipY']() {
            return this['_clipY'];
        }
        set ['clipY'](_0x1b4888) {
            this['_clipY'] = _0x1b4888 || 0x1, this['_setClipCh' + 'anged']();
        }
        get ['clipWidth']() {
            return this['_clipWidth'];
        }
        set ['clipWidth'](_0x454786) {
            this['_clipWidth'] = _0x454786, this['_setClipCh' + 'anged']();
        }
        get ['clipHeight']() {
            return this['_clipHeigh' + 't'];
        }
        set ['clipHeight'](_0x516687) {
            this['_clipHeigh' + 't'] = _0x516687, this['_setClipCh' + 'anged']();
        }
        ['changeClip']() {
            if (this['_clipChang' + 'ed'] = !0x1, this['_skin']) {
                var _0x3d554a = _0x126068['Loader']['getRes'](this['_skin']);
                _0x3d554a ? this['loadComple' + 'te'](this['_skin'], _0x3d554a) : _0x126068['ILaya']['loader']['load'](this['_skin'], _0x126068['Handler']['create'](this, this['loadComple' + 'te'], [this['_skin']]));
            }
        }
        ['loadComple' + 'te'](_0x2b035c, _0x31979a) {
            if (_0x2b035c === this['_skin'] && _0x31979a) {
                var _0x452686 = this['_clipWidth'] || Math['ceil'](_0x31979a['sourceWidt' + 'h'] / this['_clipX']), _0x1336dc = this['_clipHeigh' + 't'] || Math['ceil'](_0x31979a['sourceHeig' + 'ht'] / this['_clipY']), _0xdc46b = this['_skin'] + _0x452686 + _0x1336dc, _0x5a7dfe = _0x126068['WeakObject']['I']['get'](_0xdc46b);
                if (_0x126068['Utils']['isOkTextur' + 'eList'](_0x5a7dfe) || (_0x5a7dfe = null), _0x5a7dfe)
                    this['_sources'] = _0x5a7dfe;
                else {
                    this['_sources'] = [];
                    for (var _0x2bde9a = 0x0; _0x2bde9a < this['_clipY']; _0x2bde9a++)
                        for (var _0x4fd5e3 = 0x0; _0x4fd5e3 < this['_clipX']; _0x4fd5e3++)
                            this['_sources']['push'](_0x126068['Texture']['createFrom' + 'Texture'](_0x31979a, _0x452686 * _0x4fd5e3, _0x1336dc * _0x2bde9a, _0x452686, _0x1336dc));
                    _0x126068['WeakObject']['I']['set'](_0xdc46b, this['_sources']);
                }
                this['index'] = this['_index'], this['event'](_0x126068['Event']['LOADED']), this['onCompResi' + 'ze']();
            }
        }
        get ['sources']() {
            return this['_sources'];
        }
        set ['sources'](_0x21bda0) {
            this['_sources'] = _0x21bda0, this['index'] = this['_index'], this['event'](_0x126068['Event']['LOADED']);
        }
        get ['group']() {
            return this['_group'];
        }
        set ['group'](_0x262478) {
            _0x262478 && this['_skin'] && _0x126068['Loader']['setGroup'](this['_skin'], _0x262478), this['_group'] = _0x262478;
        }
        set ['width'](_0x32e973) {
            super['width'] = _0x32e973, this['_bitmap']['width'] = _0x32e973;
        }
        get ['width']() {
            return super['width'];
        }
        set ['height'](_0x162573) {
            super['height'] = _0x162573, this['_bitmap']['height'] = _0x162573;
        }
        get ['height']() {
            return super['height'];
        }
        ['measureWid' + 'th']() {
            return this['runCallLat' + 'er'](this['changeClip']), this['_bitmap']['width'];
        }
        ['measureHei' + 'ght']() {
            return this['runCallLat' + 'er'](this['changeClip']), this['_bitmap']['height'];
        }
        get ['sizeGrid']() {
            return this['_bitmap']['sizeGrid'] ? this['_bitmap']['sizeGrid']['join'](',') : null;
        }
        set ['sizeGrid'](_0x5a3d22) {
            this['_bitmap']['sizeGrid'] = _0x1c3411['fillArray'](_0x5393ca['defaultSiz' + 'eGrid'], _0x5a3d22, Number);
        }
        get ['index']() {
            return this['_index'];
        }
        set ['index'](_0x5e6345) {
            this['_index'] = _0x5e6345, this['_bitmap'] && this['_sources'] && (this['_bitmap']['source'] = this['_sources'][_0x5e6345]), this['event'](_0x126068['Event']['CHANGE']);
        }
        get ['total']() {
            return this['runCallLat' + 'er'](this['changeClip']), this['_sources'] ? this['_sources']['length'] : 0x0;
        }
        get ['autoPlay']() {
            return this['_autoPlay'];
        }
        set ['autoPlay'](_0xa13e33) {
            this['_autoPlay'] != _0xa13e33 && (this['_autoPlay'] = _0xa13e33, _0xa13e33 ? this['play']() : this['stop']());
        }
        get ['interval']() {
            return this['_interval'];
        }
        set ['interval'](_0x59530e) {
            this['_interval'] != _0x59530e && (this['_interval'] = _0x59530e, this['_isPlaying'] && this['play']());
        }
        get ['isPlaying']() {
            return this['_isPlaying'];
        }
        set ['isPlaying'](_0x196607) {
            this['_isPlaying'] = _0x196607;
        }
        ['play'](_0x9fac0f = 0x0, _0x453f64 = -0x1) {
            this['_isPlaying'] = !0x0, this['index'] = _0x9fac0f, this['_toIndex'] = _0x453f64, this['_index']++, _0x126068['ILaya']['timer']['loop'](this['interval'], this, this['_loop']), this['on'](_0x126068['Event']['DISPLAY'], this, this['_onDisplay']), this['on'](_0x126068['Event']['UNDISPLAY'], this, this['_onDisplay']);
        }
        ['_loop']() {
            this['_visible'] && this['_sources'] && (this['_index']++, this['_toIndex'] > -0x1 && this['_index'] >= this['_toIndex'] ? this['stop']() : this['_index'] >= this['_sources']['length'] && (this['_index'] = 0x0), this['index'] = this['_index']);
        }
        ['stop']() {
            this['_isPlaying'] = !0x1, _0x126068['ILaya']['timer']['clear'](this, this['_loop']), this['event'](_0x126068['Event']['COMPLETE']);
        }
        set ['dataSource'](_0x2e3e33) {
            this['_dataSourc' + 'e'] = _0x2e3e33, 'number' == typeof _0x2e3e33 || 'string' == typeof _0x2e3e33 ? this['index'] = parseInt(_0x2e3e33) : super['dataSource'] = _0x2e3e33;
        }
        get ['dataSource']() {
            return super['dataSource'];
        }
        get ['bitmap']() {
            return this['_bitmap'];
        }
        ['_setClipCh' + 'anged']() {
            this['_clipChang' + 'ed'] || (this['_clipChang' + 'ed'] = !0x0, this['callLater'](this['changeClip']));
        }
    }
    _0x126068['ILaya']['regClass'](_0x156dd6), _0x126068['ClassUtils']['regClass']('laya.ui.Cl' + 'ip', _0x156dd6), _0x126068['ClassUtils']['regClass']('Laya.Clip', _0x156dd6);
    class _0x79adb2 extends _0x23f9d7 {
        constructor() {
            super(...arguments), this['_gridSize'] = 0xb, this['_bgColor'] = '#ffffff', this['_borderCol' + 'or'] = '#000000', this['_inputColo' + 'r'] = '#000000', this['_inputBgCo' + 'lor'] = '#efefef', this['_colors'] = [], this['_selectedC' + 'olor'] = '#000000';
        }
        ['destroy'](_0x149ef6 = !0x0) {
            super['destroy'](_0x149ef6), this['_colorPane' + 'l'] && this['_colorPane' + 'l']['destroy'](_0x149ef6), this['_colorButt' + 'on'] && this['_colorButt' + 'on']['destroy'](_0x149ef6), this['_colorPane' + 'l'] = null, this['_colorTile' + 's'] = null, this['_colorBloc' + 'k'] = null, this['_colorInpu' + 't'] = null, this['_colorButt' + 'on'] = null, this['_colors'] = null, this['changeHand' + 'ler'] = null;
        }
        ['createChil' + 'dren']() {
            this['addChild'](this['_colorButt' + 'on'] = new _0x37601b()), this['_colorPane' + 'l'] = new _0x41b5da(), this['_colorPane' + 'l']['size'](0xe6, 0xa6), this['_colorPane' + 'l']['addChild'](this['_colorTile' + 's'] = new _0x126068['Sprite']()), this['_colorPane' + 'l']['addChild'](this['_colorBloc' + 'k'] = new _0x126068['Sprite']()), this['_colorPane' + 'l']['addChild'](this['_colorInpu' + 't'] = new _0x126068['Input']());
        }
        ['initialize']() {
            this['_colorButt' + 'on']['on'](_0x126068['Event']['CLICK'], this, this['onColorBut' + 'tonClick']), this['_colorBloc' + 'k']['pos'](0x5, 0x5), this['_colorInpu' + 't']['pos'](0x3c, 0x5), this['_colorInpu' + 't']['size'](0x3c, 0x14), this['_colorInpu' + 't']['on'](_0x126068['Event']['CHANGE'], this, this['onColorInp' + 'utChange']), this['_colorInpu' + 't']['on'](_0x126068['Event']['KEY_DOWN'], this, this['onColorFie' + 'ldKeyDown']), this['_colorTile' + 's']['pos'](0x5, 0x1e), this['_colorTile' + 's']['on'](_0x126068['Event']['MOUSE_MOVE'], this, this['onColorTil' + 'esMouseMov' + 'e']), this['_colorTile' + 's']['on'](_0x126068['Event']['CLICK'], this, this['onColorTil' + 'esClick']), this['_colorTile' + 's']['size'](0x14 * this['_gridSize'], 0xc * this['_gridSize']), this['_colorPane' + 'l']['on'](_0x126068['Event']['MOUSE_DOWN'], this, this['onPanelMou' + 'seDown']), this['bgColor'] = this['_bgColor'];
        }
        ['onPanelMou' + 'seDown'](_0x27f676) {
            _0x27f676['stopPropag' + 'ation']();
        }
        ['changePane' + 'l']() {
            this['_panelChan' + 'ged'] = !0x1;
            var _0x1c5771 = this['_colorPane' + 'l']['graphics'];
            _0x1c5771['clear'](!0x0), _0x1c5771['drawRect'](0x0, 0x0, 0xe6, 0xa6, this['_bgColor'], this['_borderCol' + 'or']), this['drawBlock'](this['_selectedC' + 'olor']), this['_colorInpu' + 't']['borderColo' + 'r'] = this['_borderCol' + 'or'], this['_colorInpu' + 't']['bgColor'] = this['_inputBgCo' + 'lor'], this['_colorInpu' + 't']['color'] = this['_inputColo' + 'r'], (_0x1c5771 = this['_colorTile' + 's']['graphics'])['clear'](!0x0);
            for (var _0x272d30 = [
                        0x0,
                        0x333333,
                        0x666666,
                        0x999999,
                        0xcccccc,
                        0xffffff,
                        0xff0000,
                        0xff00,
                        0xff,
                        0xffff00,
                        0xffff,
                        0xff00ff
                    ], _0x492c1a = 0x0; _0x492c1a < 0xc; _0x492c1a++)
                for (var _0xb33e1 = 0x0; _0xb33e1 < 0x14; _0xb33e1++) {
                    var _0x5c365c;
                    _0x5c365c = 0x0 === _0xb33e1 ? _0x272d30[_0x492c1a] : 0x1 === _0xb33e1 ? 0x0 : 0x33 * (((0x3 * _0x492c1a + _0xb33e1 / 0x6) % 0x3 << 0x0) + 0x3 * (_0x492c1a / 0x6 << 0x0)) << 0x10 | _0xb33e1 % 0x6 * 0x33 << 0x8 | (_0x492c1a << 0x0) % 0x6 * 0x33;
                    var _0x428a45 = _0x1c3411['toColor'](_0x5c365c);
                    this['_colors']['push'](_0x428a45);
                    var _0x54342a = _0xb33e1 * this['_gridSize'], _0x52f4a7 = _0x492c1a * this['_gridSize'];
                    _0x1c5771['drawRect'](_0x54342a, _0x52f4a7, this['_gridSize'], this['_gridSize'], _0x428a45, '#000000');
                }
        }
        ['onColorBut' + 'tonClick'](_0x38db73) {
            this['_colorPane' + 'l']['parent'] ? this['close']() : this['open']();
        }
        ['open']() {
            let _0x132407 = _0x126068['ILaya']['stage'];
            var _0x26e01d = this['localToGlo' + 'bal'](new _0x126068['Point']()), _0x14b789 = _0x26e01d['x'] + this['_colorPane' + 'l']['width'] <= _0x132407['width'] ? _0x26e01d['x'] : _0x132407['width'] - this['_colorPane' + 'l']['width'], _0x1fa8cf = _0x26e01d['y'] + this['_colorButt' + 'on']['height'];
            _0x1fa8cf = _0x1fa8cf + this['_colorPane' + 'l']['height'] <= _0x132407['height'] ? _0x1fa8cf : _0x26e01d['y'] - this['_colorPane' + 'l']['height'], this['_colorPane' + 'l']['pos'](_0x14b789, _0x1fa8cf), this['_colorPane' + 'l']['zOrder'] = 0x3e9, _0x132407['addChild'](this['_colorPane' + 'l']), _0x132407['on'](_0x126068['Event']['MOUSE_DOWN'], this, this['removeColo' + 'rBox']);
        }
        ['close']() {
            _0x126068['ILaya']['stage']['off'](_0x126068['Event']['MOUSE_DOWN'], this, this['removeColo' + 'rBox']), this['_colorPane' + 'l']['removeSelf']();
        }
        ['removeColo' + 'rBox'](_0x17c481 = null) {
            this['close']();
        }
        ['onColorFie' + 'ldKeyDown'](_0x2c188d) {
            0xd == _0x2c188d['keyCode'] && (this['_colorInpu' + 't']['text'] ? this['selectedCo' + 'lor'] = this['_colorInpu' + 't']['text'] : this['selectedCo' + 'lor'] = null, this['close'](), _0x2c188d['stopPropag' + 'ation']());
        }
        ['onColorInp' + 'utChange'](_0x375ef3 = null) {
            this['_colorInpu' + 't']['text'] ? this['drawBlock'](this['_colorInpu' + 't']['text']) : this['drawBlock']('#FFFFFF');
        }
        ['onColorTil' + 'esClick'](_0x58468e) {
            this['selectedCo' + 'lor'] = this['getColorBy' + 'Mouse'](), this['close']();
        }
        ['onColorTil' + 'esMouseMov' + 'e'](_0x2e988d) {
            this['_colorInpu' + 't']['focus'] = !0x1;
            var _0x4a6b92 = this['getColorBy' + 'Mouse']();
            this['_colorInpu' + 't']['text'] = _0x4a6b92, this['drawBlock'](_0x4a6b92);
        }
        ['getColorBy' + 'Mouse']() {
            var _0x53629c = this['_colorTile' + 's']['getMousePo' + 'int'](), _0xa34a54 = Math['floor'](_0x53629c['x'] / this['_gridSize']), _0x386638 = Math['floor'](_0x53629c['y'] / this['_gridSize']);
            return this['_colors'][0x14 * _0x386638 + _0xa34a54];
        }
        ['drawBlock'](_0x31cbbb) {
            var _0x306d89 = this['_colorBloc' + 'k']['graphics'];
            _0x306d89['clear'](!0x0);
            var _0x1e5bf9 = _0x31cbbb || '#ffffff';
            _0x306d89['drawRect'](0x0, 0x0, 0x32, 0x14, _0x1e5bf9, this['_borderCol' + 'or']), _0x31cbbb || _0x306d89['drawLine'](0x0, 0x0, 0x32, 0x14, '#ff0000');
        }
        get ['selectedCo' + 'lor']() {
            return this['_selectedC' + 'olor'];
        }
        set ['selectedCo' + 'lor'](_0x13ac05) {
            this['_selectedC' + 'olor'] != _0x13ac05 && (this['_selectedC' + 'olor'] = this['_colorInpu' + 't']['text'] = _0x13ac05, this['drawBlock'](_0x13ac05), this['changeColo' + 'r'](), this['changeHand' + 'ler'] && this['changeHand' + 'ler']['runWith'](this['_selectedC' + 'olor']), this['event'](_0x126068['Event']['CHANGE'], _0x126068['Event']['EMPTY']['setTo'](_0x126068['Event']['CHANGE'], this, this)));
        }
        get ['skin']() {
            return this['_colorButt' + 'on']['skin'];
        }
        set ['skin'](_0x8d44f1) {
            this['_colorButt' + 'on']['once'](_0x126068['Event']['LOADED'], this, this['changeColo' + 'r']), this['_colorButt' + 'on']['skin'] = _0x8d44f1;
        }
        ['changeColo' + 'r']() {
            var _0x28b7c9 = this['graphics'];
            _0x28b7c9['clear'](!0x0);
            var _0x49ab7a = this['_selectedC' + 'olor'] || '#000000';
            _0x28b7c9['drawRect'](0x0, 0x0, this['_colorButt' + 'on']['width'], this['_colorButt' + 'on']['height'], _0x49ab7a);
        }
        get ['bgColor']() {
            return this['_bgColor'];
        }
        set ['bgColor'](_0x147cc0) {
            this['_bgColor'] = _0x147cc0, this['_setPanelC' + 'hanged']();
        }
        get ['borderColo' + 'r']() {
            return this['_borderCol' + 'or'];
        }
        set ['borderColo' + 'r'](_0x1c42ca) {
            this['_borderCol' + 'or'] = _0x1c42ca, this['_setPanelC' + 'hanged']();
        }
        get ['inputColor']() {
            return this['_inputColo' + 'r'];
        }
        set ['inputColor'](_0x25e6f9) {
            this['_inputColo' + 'r'] = _0x25e6f9, this['_setPanelC' + 'hanged']();
        }
        get ['inputBgCol' + 'or']() {
            return this['_inputBgCo' + 'lor'];
        }
        set ['inputBgCol' + 'or'](_0x26a773) {
            this['_inputBgCo' + 'lor'] = _0x26a773, this['_setPanelC' + 'hanged']();
        }
        ['_setPanelC' + 'hanged']() {
            this['_panelChan' + 'ged'] || (this['_panelChan' + 'ged'] = !0x0, this['callLater'](this['changePane' + 'l']));
        }
    }
    _0x126068['ILaya']['regClass'](_0x79adb2), _0x126068['ClassUtils']['regClass']('laya.ui.Co' + 'lorPicker', _0x79adb2), _0x126068['ClassUtils']['regClass']('Laya.Color' + 'Picker', _0x79adb2);
    class _0x24d44a extends _0x23f9d7 {
        constructor(_0x7b1d78 = '') {
            super(), this['text'] = _0x7b1d78;
        }
        ['destroy'](_0x1b901b = !0x0) {
            super['destroy'](_0x1b901b), this['_tf'] = null;
        }
        ['createChil' + 'dren']() {
            this['addChild'](this['_tf'] = new _0x126068['Text']());
        }
        get ['text']() {
            return this['_tf']['text'];
        }
        set ['text'](_0x271648) {
            this['_tf']['text'] != _0x271648 && (_0x271648 && (_0x271648 = _0x1c3411['adptString'](_0x271648 + '')), this['_tf']['text'] = _0x271648, this['event'](_0x126068['Event']['CHANGE']), this['_width'] && this['_height'] || this['onCompResi' + 'ze']());
        }
        ['changeText'](_0x177196) {
            this['_tf']['changeText'](_0x177196);
        }
        get ['wordWrap']() {
            return this['_tf']['wordWrap'];
        }
        set ['wordWrap'](_0x3c723c) {
            this['_tf']['wordWrap'] = _0x3c723c;
        }
        get ['color']() {
            return this['_tf']['color'];
        }
        set ['color'](_0x43dd22) {
            this['_tf']['color'] = _0x43dd22;
        }
        get ['font']() {
            return this['_tf']['font'];
        }
        set ['font'](_0x3b1890) {
            this['_tf']['font'] = _0x3b1890;
        }
        get ['align']() {
            return this['_tf']['align'];
        }
        set ['align'](_0x59bfd7) {
            this['_tf']['align'] = _0x59bfd7;
        }
        get ['valign']() {
            return this['_tf']['valign'];
        }
        set ['valign'](_0x538bcc) {
            this['_tf']['valign'] = _0x538bcc;
        }
        get ['bold']() {
            return this['_tf']['bold'];
        }
        set ['bold'](_0x450725) {
            this['_tf']['bold'] = _0x450725;
        }
        get ['italic']() {
            return this['_tf']['italic'];
        }
        set ['italic'](_0x49508e) {
            this['_tf']['italic'] = _0x49508e;
        }
        get ['leading']() {
            return this['_tf']['leading'];
        }
        set ['leading'](_0x477fd7) {
            this['_tf']['leading'] = _0x477fd7;
        }
        get ['fontSize']() {
            return this['_tf']['fontSize'];
        }
        set ['fontSize'](_0xf1513f) {
            this['_tf']['fontSize'] = _0xf1513f;
        }
        get ['padding']() {
            return this['_tf']['padding']['join'](',');
        }
        set ['padding'](_0x4a9880) {
            this['_tf']['padding'] = _0x1c3411['fillArray'](_0x5393ca['labelPaddi' + 'ng'], _0x4a9880, Number);
        }
        get ['bgColor']() {
            return this['_tf']['bgColor'];
        }
        set ['bgColor'](_0x1d8bb4) {
            this['_tf']['bgColor'] = _0x1d8bb4;
        }
        get ['borderColo' + 'r']() {
            return this['_tf']['borderColo' + 'r'];
        }
        set ['borderColo' + 'r'](_0x433ff4) {
            this['_tf']['borderColo' + 'r'] = _0x433ff4;
        }
        get ['stroke']() {
            return this['_tf']['stroke'];
        }
        set ['stroke'](_0x5ea21a) {
            this['_tf']['stroke'] = _0x5ea21a;
        }
        get ['strokeColo' + 'r']() {
            return this['_tf']['strokeColo' + 'r'];
        }
        set ['strokeColo' + 'r'](_0x102571) {
            this['_tf']['strokeColo' + 'r'] = _0x102571;
        }
        get ['textField']() {
            return this['_tf'];
        }
        ['measureWid' + 'th']() {
            return this['_tf']['width'];
        }
        ['measureHei' + 'ght']() {
            return this['_tf']['height'];
        }
        get ['width']() {
            return this['_width'] || this['_tf']['text'] ? super['width'] : 0x0;
        }
        set ['width'](_0x105618) {
            super['width'] = _0x105618, this['_tf']['width'] = _0x105618;
        }
        get ['height']() {
            return this['_height'] || this['_tf']['text'] ? super['height'] : 0x0;
        }
        set ['height'](_0x5b05b7) {
            super['height'] = _0x5b05b7, this['_tf']['height'] = _0x5b05b7;
        }
        set ['dataSource'](_0x1bb525) {
            this['_dataSourc' + 'e'] = _0x1bb525, 'number' == typeof _0x1bb525 || 'string' == typeof _0x1bb525 ? this['text'] = _0x1bb525 + '' : super['dataSource'] = _0x1bb525;
        }
        get ['dataSource']() {
            return super['dataSource'];
        }
        get ['overflow']() {
            return this['_tf']['overflow'];
        }
        set ['overflow'](_0x5b9ca3) {
            this['_tf']['overflow'] = _0x5b9ca3;
        }
        get ['underline']() {
            return this['_tf']['underline'];
        }
        set ['underline'](_0x17d8c8) {
            this['_tf']['underline'] = _0x17d8c8;
        }
        get ['underlineC' + 'olor']() {
            return this['_tf']['underlineC' + 'olor'];
        }
        set ['underlineC' + 'olor'](_0x14820b) {
            this['_tf']['underlineC' + 'olor'] = _0x14820b;
        }
    }
    _0x126068['ILaya']['regClass'](_0x24d44a), _0x126068['ClassUtils']['regClass']('laya.ui.La' + 'bel', _0x24d44a), _0x126068['ClassUtils']['regClass']('Laya.Label', _0x24d44a);
    class _0x184c22 extends _0x23f9d7 {
        constructor(_0xd85e38 = null) {
            super(), this['isVertical'] = !0x0, this['showLabel'] = !0x0, this['_max'] = 0x64, this['_min'] = 0x0, this['_tick'] = 0x1, this['_value'] = 0x0, _0x184c22['label'] || (_0x184c22['label'] = new _0x24d44a()), this['skin'] = _0xd85e38;
        }
        ['destroy'](_0x4732ea = !0x0) {
            super['destroy'](_0x4732ea), this['_bg'] && this['_bg']['destroy'](_0x4732ea), this['_bar'] && this['_bar']['destroy'](_0x4732ea), this['_progress'] && this['_progress']['destroy'](_0x4732ea), this['_bg'] = null, this['_bar'] = null, this['_progress'] = null, this['changeHand' + 'ler'] = null;
        }
        ['createChil' + 'dren']() {
            this['addChild'](this['_bg'] = new _0x527063()), this['addChild'](this['_bar'] = new _0x37601b());
        }
        ['initialize']() {
            this['_bar']['on'](_0x126068['Event']['MOUSE_DOWN'], this, this['onBarMouse' + 'Down']), this['_bg']['sizeGrid'] = this['_bar']['sizeGrid'] = '4,4,4,4,0', this['_progress'] && (this['_progress']['sizeGrid'] = this['_bar']['sizeGrid']), this['allowClick' + 'Back'] = !0x0;
        }
        ['onBarMouse' + 'Down'](_0x345a1d) {
            var _0x530c5b = _0x126068['ILaya'];
            this['_globalSac' + 'le'] || (this['_globalSac' + 'le'] = new _0x126068['Point']()), this['_globalSac' + 'le']['setTo'](this['globalScal' + 'eX'] || 0.01, this['globalScal' + 'eY'] || 0.01), this['_maxMove'] = this['isVertical'] ? this['height'] - this['_bar']['height'] : this['width'] - this['_bar']['width'], this['_tx'] = _0x530c5b['stage']['mouseX'], this['_ty'] = _0x530c5b['stage']['mouseY'], _0x530c5b['stage']['on'](_0x126068['Event']['MOUSE_MOVE'], this, this['mouseMove']), _0x530c5b['stage']['once'](_0x126068['Event']['MOUSE_UP'], this, this['mouseUp']), _0x530c5b['stage']['once'](_0x126068['Event']['MOUSE_OUT'], this, this['mouseUp']), this['showValueT' + 'ext']();
        }
        ['showValueT' + 'ext']() {
            if (this['showLabel']) {
                var _0x12c046 = _0x184c22['label'];
                this['addChild'](_0x12c046), _0x12c046['textField']['changeText'](this['_value'] + ''), this['isVertical'] ? (_0x12c046['x'] = this['_bar']['_x'] + 0x14, _0x12c046['y'] = 0.5 * (this['_bar']['height'] - _0x12c046['height']) + this['_bar']['_y']) : (_0x12c046['y'] = this['_bar']['_y'] - 0x14, _0x12c046['x'] = 0.5 * (this['_bar']['width'] - _0x12c046['width']) + this['_bar']['_x']);
            }
        }
        ['hideValueT' + 'ext']() {
            _0x184c22['label'] && _0x184c22['label']['removeSelf']();
        }
        ['mouseUp'](_0x5049a1) {
            let _0x11b27d = _0x126068['ILaya']['stage'];
            _0x11b27d['off'](_0x126068['Event']['MOUSE_MOVE'], this, this['mouseMove']), _0x11b27d['off'](_0x126068['Event']['MOUSE_UP'], this, this['mouseUp']), _0x11b27d['off'](_0x126068['Event']['MOUSE_OUT'], this, this['mouseUp']), this['sendChange' + 'Event'](_0x126068['Event']['CHANGED']), this['hideValueT' + 'ext']();
        }
        ['mouseMove'](_0x5a397d) {
            let _0xaa8736 = _0x126068['ILaya']['stage'];
            var _0x26ea85 = this['_value'];
            if (this['isVertical'] ? (this['_bar']['y'] += (_0xaa8736['mouseY'] - this['_ty']) / this['_globalSac' + 'le']['y'], this['_bar']['_y'] > this['_maxMove'] ? this['_bar']['y'] = this['_maxMove'] : this['_bar']['_y'] < 0x0 && (this['_bar']['y'] = 0x0), this['_value'] = this['_bar']['_y'] / this['_maxMove'] * (this['_max'] - this['_min']) + this['_min'], this['_progress'] && (this['_progress']['height'] = this['_bar']['_y'] + 0.5 * this['_bar']['height'])) : (this['_bar']['x'] += (_0xaa8736['mouseX'] - this['_tx']) / this['_globalSac' + 'le']['x'], this['_bar']['_x'] > this['_maxMove'] ? this['_bar']['x'] = this['_maxMove'] : this['_bar']['_x'] < 0x0 && (this['_bar']['x'] = 0x0), this['_value'] = this['_bar']['_x'] / this['_maxMove'] * (this['_max'] - this['_min']) + this['_min'], this['_progress'] && (this['_progress']['width'] = this['_bar']['_x'] + 0.5 * this['_bar']['width'])), this['_tx'] = _0xaa8736['mouseX'], this['_ty'] = _0xaa8736['mouseY'], 0x0 != this['_tick']) {
                var _0x51c1d7 = Math['pow'](0xa, (this['_tick'] + '')['length'] - 0x1);
                this['_value'] = Math['round'](Math['round'](this['_value'] / this['_tick']) * this['_tick'] * _0x51c1d7) / _0x51c1d7;
            }
            this['_value'] != _0x26ea85 && this['sendChange' + 'Event'](), this['showValueT' + 'ext']();
        }
        ['sendChange' + 'Event'](_0x3eb23e = _0x126068['Event']['CHANGE']) {
            this['event'](_0x3eb23e), this['changeHand' + 'ler'] && this['changeHand' + 'ler']['runWith'](this['_value']);
        }
        get ['skin']() {
            return this['_skin'];
        }
        set ['skin'](_0x4a1945) {
            this['_skin'] != _0x4a1945 && (this['_skin'] = _0x4a1945, this['_skin'] && !_0x126068['Loader']['getRes'](this['_skin']) ? _0x126068['ILaya']['loader']['load']([
                this['_skin'],
                this['_skin']['replace']('.png', '$bar.png')
            ], _0x126068['Handler']['create'](this, this['_skinLoade' + 'd'])) : this['_skinLoade' + 'd']());
        }
        ['_skinLoade' + 'd']() {
            if (this['_bg']) {
                this['_bg']['skin'] = this['_skin'], this['_bar']['skin'] = this['_skin']['replace']('.png', '$bar.png');
                var _0x5b36e8 = this['_skin']['replace']('.png', '$progress.' + 'png');
                _0x126068['Loader']['getRes'](_0x5b36e8) && (this['_progress'] || (this['addChild'](this['_progress'] = new _0x527063()), this['_progress']['sizeGrid'] = this['_bar']['sizeGrid'], this['setChildIn' + 'dex'](this['_progress'], 0x1)), this['_progress']['skin'] = _0x5b36e8), this['setBarPoin' + 't'](), this['callLater'](this['changeValu' + 'e']), this['_sizeChang' + 'ed'](), this['event'](_0x126068['Event']['LOADED']);
            }
        }
        ['setBarPoin' + 't']() {
            this['isVertical'] ? this['_bar']['x'] = Math['round'](0.5 * (this['_bg']['width'] - this['_bar']['width'])) : this['_bar']['y'] = Math['round'](0.5 * (this['_bg']['height'] - this['_bar']['height']));
        }
        ['measureWid' + 'th']() {
            return Math['max'](this['_bg']['width'], this['_bar']['width']);
        }
        ['measureHei' + 'ght']() {
            return Math['max'](this['_bg']['height'], this['_bar']['height']);
        }
        ['_sizeChang' + 'ed']() {
            super['_sizeChang' + 'ed'](), this['isVertical'] ? this['_bg']['height'] = this['height'] : this['_bg']['width'] = this['width'], this['setBarPoin' + 't'](), this['changeValu' + 'e']();
        }
        get ['sizeGrid']() {
            return this['_bg']['sizeGrid'];
        }
        set ['sizeGrid'](_0x519847) {
            this['_bg']['sizeGrid'] = _0x519847, this['_bar']['sizeGrid'] = _0x519847, this['_progress'] && (this['_progress']['sizeGrid'] = this['_bar']['sizeGrid']);
        }
        ['setSlider'](_0x2a0cb5, _0x345118, _0x5df742) {
            this['_value'] = -0x1, this['_min'] = _0x2a0cb5, this['_max'] = _0x345118 > _0x2a0cb5 ? _0x345118 : _0x2a0cb5, this['value'] = _0x5df742 < _0x2a0cb5 ? _0x2a0cb5 : _0x5df742 > _0x345118 ? _0x345118 : _0x5df742;
        }
        get ['tick']() {
            return this['_tick'];
        }
        set ['tick'](_0x4ab936) {
            this['_tick'] != _0x4ab936 && (this['_tick'] = _0x4ab936, this['callLater'](this['changeValu' + 'e']));
        }
        ['changeValu' + 'e']() {
            if (0x0 != this['tick']) {
                var _0x1b6304 = Math['pow'](0xa, (this['_tick'] + '')['length'] - 0x1);
                this['_value'] = Math['round'](Math['round'](this['_value'] / this['_tick']) * this['_tick'] * _0x1b6304) / _0x1b6304;
            }
            this['_value'] = this['_value'] > this['_max'] ? this['_max'] : this['_value'] < this['_min'] ? this['_min'] : this['_value'];
            var _0x4bec0b = this['_max'] - this['_min'];
            0x0 === _0x4bec0b && (_0x4bec0b = 0x1), this['isVertical'] ? (this['_bar']['y'] = (this['_value'] - this['_min']) / _0x4bec0b * (this['height'] - this['_bar']['height']), this['_progress'] && (this['_progress']['height'] = this['_bar']['_y'] + 0.5 * this['_bar']['height'])) : (this['_bar']['x'] = (this['_value'] - this['_min']) / _0x4bec0b * (this['width'] - this['_bar']['width']), this['_progress'] && (this['_progress']['width'] = this['_bar']['_x'] + 0.5 * this['_bar']['width']));
        }
        get ['max']() {
            return this['_max'];
        }
        set ['max'](_0x14626b) {
            this['_max'] != _0x14626b && (this['_max'] = _0x14626b, this['callLater'](this['changeValu' + 'e']));
        }
        get ['min']() {
            return this['_min'];
        }
        set ['min'](_0x213bf7) {
            this['_min'] != _0x213bf7 && (this['_min'] = _0x213bf7, this['callLater'](this['changeValu' + 'e']));
        }
        get ['value']() {
            return this['_value'];
        }
        set ['value'](_0x3cef72) {
            if (this['_value'] != _0x3cef72) {
                var _0x43bfd5 = this['_value'];
                this['_value'] = _0x3cef72, this['changeValu' + 'e'](), this['_value'] != _0x43bfd5 && this['sendChange' + 'Event']();
            }
        }
        get ['allowClick' + 'Back']() {
            return this['_allowClic' + 'kBack'];
        }
        set ['allowClick' + 'Back'](_0x4a8eb5) {
            this['_allowClic' + 'kBack'] != _0x4a8eb5 && (this['_allowClic' + 'kBack'] = _0x4a8eb5, _0x4a8eb5 ? this['_bg']['on'](_0x126068['Event']['MOUSE_DOWN'], this, this['onBgMouseD' + 'own']) : this['_bg']['off'](_0x126068['Event']['MOUSE_DOWN'], this, this['onBgMouseD' + 'own']));
        }
        ['onBgMouseD' + 'own'](_0x4b974a) {
            var _0x150624 = this['_bg']['getMousePo' + 'int']();
            this['isVertical'] ? this['value'] = _0x150624['y'] / (this['height'] - this['_bar']['height']) * (this['_max'] - this['_min']) + this['_min'] : this['value'] = _0x150624['x'] / (this['width'] - this['_bar']['width']) * (this['_max'] - this['_min']) + this['_min'];
        }
        set ['dataSource'](_0x243c5c) {
            this['_dataSourc' + 'e'] = _0x243c5c, 'number' == typeof _0x243c5c || 'string' == typeof _0x243c5c ? this['value'] = Number(_0x243c5c) : super['dataSource'] = _0x243c5c;
        }
        get ['dataSource']() {
            return super['dataSource'];
        }
        get ['bar']() {
            return this['_bar'];
        }
    }
    _0x184c22['label'] = null, _0x126068['ILaya']['regClass'](_0x184c22), _0x126068['ClassUtils']['regClass']('laya.ui.Sl' + 'ider', _0x184c22), _0x126068['ClassUtils']['regClass']('Laya.Slide' + 'r', _0x184c22);
    class _0x1afb40 extends _0x23f9d7 {
        constructor(_0x3f95a9 = null) {
            super(), this['rollRatio'] = 0.97, this['scaleBar'] = !0x0, this['autoHide'] = !0x1, this['elasticDis' + 'tance'] = 0x0, this['elasticBac' + 'kTime'] = 0x1f4, this['_showButto' + 'ns'] = _0x167a28['showButton' + 's'], this['_scrollSiz' + 'e'] = 0x1, this['_thumbPerc' + 'ent'] = 0x1, this['_lastOffse' + 't'] = 0x0, this['_checkElas' + 'tic'] = !0x1, this['_isElastic'] = !0x1, this['_hide'] = !0x1, this['_clickOnly'] = !0x0, this['_touchScro' + 'llEnable'] = _0x167a28['touchScrol' + 'lEnable'], this['_mouseWhee' + 'lEnable'] = _0x167a28['mouseWheel' + 'Enable'], this['skin'] = _0x3f95a9, this['max'] = 0x1;
        }
        ['destroy'](_0xcb6b8b = !0x0) {
            this['stopScroll'](), this['target'] = null, super['destroy'](_0xcb6b8b), this['upButton'] && this['upButton']['destroy'](_0xcb6b8b), this['downButton'] && this['downButton']['destroy'](_0xcb6b8b), this['slider'] && this['slider']['destroy'](_0xcb6b8b), this['upButton'] = this['downButton'] = null, this['slider'] = null, this['changeHand' + 'ler'] = null, this['_offsets'] = null;
        }
        ['createChil' + 'dren']() {
            this['addChild'](this['slider'] = new _0x184c22()), this['addChild'](this['upButton'] = new _0x37601b()), this['addChild'](this['downButton'] = new _0x37601b());
        }
        ['initialize']() {
            this['slider']['showLabel'] = !0x1, this['slider']['tick'] = 0x0, this['slider']['on'](_0x126068['Event']['CHANGE'], this, this['onSliderCh' + 'ange']), this['slider']['setSlider'](0x0, 0x0, 0x0), this['upButton']['on'](_0x126068['Event']['MOUSE_DOWN'], this, this['onButtonMo' + 'useDown']), this['downButton']['on'](_0x126068['Event']['MOUSE_DOWN'], this, this['onButtonMo' + 'useDown']);
        }
        ['onSliderCh' + 'ange']() {
            this['_value'] != this['slider']['value'] && (this['value'] = this['slider']['value']);
        }
        ['onButtonMo' + 'useDown'](_0x1691b5) {
            var _0x238d3d = _0x1691b5['currentTar' + 'get'] === this['upButton'];
            this['slide'](_0x238d3d), _0x126068['ILaya']['timer']['once'](_0x5393ca['scrollBarD' + 'elayTime'], this, this['startLoop'], [_0x238d3d]), _0x126068['ILaya']['stage']['once'](_0x126068['Event']['MOUSE_UP'], this, this['onStageMou' + 'seUp']);
        }
        ['startLoop'](_0x4e70c8) {
            _0x126068['ILaya']['timer']['frameLoop'](0x1, this, this['slide'], [_0x4e70c8]);
        }
        ['slide'](_0x388f57) {
            _0x388f57 ? this['value'] -= this['_scrollSiz' + 'e'] : this['value'] += this['_scrollSiz' + 'e'];
        }
        ['onStageMou' + 'seUp'](_0x35c554) {
            _0x126068['ILaya']['timer']['clear'](this, this['startLoop']), _0x126068['ILaya']['timer']['clear'](this, this['slide']);
        }
        get ['skin']() {
            return this['_skin'];
        }
        set ['skin'](_0x13983c) {
            '\x20' != _0x13983c && this['_skin'] != _0x13983c && (this['_skin'] = _0x13983c, this['_skin'] && !_0x126068['Loader']['getRes'](this['_skin']) ? _0x126068['ILaya']['loader']['load']([
                this['_skin'],
                this['_skin']['replace']('.png', '$up.png'),
                this['_skin']['replace']('.png', '$down.png'),
                this['_skin']['replace']('.png', '$bar.png')
            ], _0x126068['Handler']['create'](this, this['_skinLoade' + 'd'])) : this['_skinLoade' + 'd']());
        }
        ['_skinLoade' + 'd']() {
            this['slider'] && (this['slider']['skin'] = this['_skin'], this['callLater'](this['changeScro' + 'llBar']), this['_sizeChang' + 'ed'](), this['event'](_0x126068['Event']['LOADED']));
        }
        ['changeScro' + 'llBar']() {
            this['upButton']['visible'] = this['_showButto' + 'ns'], this['downButton']['visible'] = this['_showButto' + 'ns'], this['_showButto' + 'ns'] && (this['upButton']['skin'] = this['_skin']['replace']('.png', '$up.png'), this['downButton']['skin'] = this['_skin']['replace']('.png', '$down.png')), this['slider']['isVertical'] ? this['slider']['y'] = this['_showButto' + 'ns'] ? this['upButton']['height'] : 0x0 : this['slider']['x'] = this['_showButto' + 'ns'] ? this['upButton']['width'] : 0x0, this['resetPosit' + 'ions'](), this['repaint']();
        }
        ['_sizeChang' + 'ed']() {
            super['_sizeChang' + 'ed'](), this['repaint'](), this['resetPosit' + 'ions'](), this['event'](_0x126068['Event']['CHANGE']), this['changeHand' + 'ler'] && this['changeHand' + 'ler']['runWith'](this['value']);
        }
        ['resetPosit' + 'ions']() {
            this['slider']['isVertical'] ? this['slider']['height'] = this['height'] - (this['_showButto' + 'ns'] ? this['upButton']['height'] + this['downButton']['height'] : 0x0) : this['slider']['width'] = this['width'] - (this['_showButto' + 'ns'] ? this['upButton']['width'] + this['downButton']['width'] : 0x0), this['resetButto' + 'nPosition']();
        }
        ['resetButto' + 'nPosition']() {
            this['slider']['isVertical'] ? this['downButton']['y'] = this['slider']['_y'] + this['slider']['height'] : this['downButton']['x'] = this['slider']['_x'] + this['slider']['width'];
        }
        ['measureWid' + 'th']() {
            return this['slider']['isVertical'] ? this['slider']['width'] : 0x64;
        }
        ['measureHei' + 'ght']() {
            return this['slider']['isVertical'] ? 0x64 : this['slider']['height'];
        }
        ['setScroll'](_0x4a7b2b, _0x2317a2, _0x133c0c) {
            this['runCallLat' + 'er'](this['_sizeChang' + 'ed']), this['slider']['setSlider'](_0x4a7b2b, _0x2317a2, _0x133c0c), this['slider']['bar']['visible'] = _0x2317a2 > 0x0, !this['_hide'] && this['autoHide'] && (this['visible'] = !0x1);
        }
        get ['max']() {
            return this['slider']['max'];
        }
        set ['max'](_0x18f940) {
            this['slider']['max'] = _0x18f940;
        }
        get ['min']() {
            return this['slider']['min'];
        }
        set ['min'](_0x4e2885) {
            this['slider']['min'] = _0x4e2885;
        }
        get ['value']() {
            return this['_value'];
        }
        set ['value'](_0x463250) {
            _0x463250 !== this['_value'] && (this['_value'] = _0x463250, this['_isElastic'] || (this['slider']['_value'] != _0x463250 && (this['slider']['_value'] = _0x463250, this['slider']['changeValu' + 'e']()), this['_value'] = this['slider']['_value']), this['event'](_0x126068['Event']['CHANGE']), this['changeHand' + 'ler'] && this['changeHand' + 'ler']['runWith'](this['_value']));
        }
        get ['isVertical']() {
            return this['slider']['isVertical'];
        }
        set ['isVertical'](_0x50b388) {
            this['slider']['isVertical'] = _0x50b388;
        }
        get ['sizeGrid']() {
            return this['slider']['sizeGrid'];
        }
        set ['sizeGrid'](_0xbca5e0) {
            this['slider']['sizeGrid'] = _0xbca5e0;
        }
        get ['scrollSize']() {
            return this['_scrollSiz' + 'e'];
        }
        set ['scrollSize'](_0x154cda) {
            this['_scrollSiz' + 'e'] = _0x154cda;
        }
        set ['dataSource'](_0x5bedee) {
            this['_dataSourc' + 'e'] = _0x5bedee, 'number' == typeof _0x5bedee || 'string' == typeof _0x5bedee ? this['value'] = Number(_0x5bedee) : super['dataSource'] = _0x5bedee;
        }
        get ['dataSource']() {
            return super['dataSource'];
        }
        get ['thumbPerce' + 'nt']() {
            return this['_thumbPerc' + 'ent'];
        }
        set ['thumbPerce' + 'nt'](_0x2cd335) {
            this['runCallLat' + 'er'](this['changeScro' + 'llBar']), this['runCallLat' + 'er'](this['_sizeChang' + 'ed']), _0x2cd335 = _0x2cd335 >= 0x1 ? 0.99 : _0x2cd335, this['_thumbPerc' + 'ent'] = _0x2cd335, this['scaleBar'] && (this['slider']['isVertical'] ? this['slider']['bar']['height'] = Math['max'](this['slider']['height'] * _0x2cd335, _0x5393ca['scrollBarM' + 'inNum']) : this['slider']['bar']['width'] = Math['max'](this['slider']['width'] * _0x2cd335, _0x5393ca['scrollBarM' + 'inNum']));
        }
        get ['target']() {
            return this['_target'];
        }
        set ['target'](_0x34f6d4) {
            this['_target'] && (this['_target']['off'](_0x126068['Event']['MOUSE_WHEE' + 'L'], this, this['onTargetMo' + 'useWheel']), this['_target']['off'](_0x126068['Event']['MOUSE_DOWN'], this, this['onTargetMo' + 'useDown'])), this['_target'] = _0x34f6d4, _0x34f6d4 && (this['_mouseWhee' + 'lEnable'] && this['_target']['on'](_0x126068['Event']['MOUSE_WHEE' + 'L'], this, this['onTargetMo' + 'useWheel']), this['_touchScro' + 'llEnable'] && this['_target']['on'](_0x126068['Event']['MOUSE_DOWN'], this, this['onTargetMo' + 'useDown']));
        }
        get ['hide']() {
            return this['_hide'];
        }
        set ['hide'](_0x5ca325) {
            this['_hide'] = _0x5ca325, this['visible'] = !_0x5ca325;
        }
        get ['showButton' + 's']() {
            return this['_showButto' + 'ns'];
        }
        set ['showButton' + 's'](_0x5b2479) {
            this['_showButto' + 'ns'] = _0x5b2479, this['callLater'](this['changeScro' + 'llBar']);
        }
        get ['touchScrol' + 'lEnable']() {
            return this['_touchScro' + 'llEnable'];
        }
        set ['touchScrol' + 'lEnable'](_0x10a2d2) {
            this['_touchScro' + 'llEnable'] = _0x10a2d2, this['target'] = this['_target'];
        }
        get ['mouseWheel' + 'Enable']() {
            return this['_mouseWhee' + 'lEnable'];
        }
        set ['mouseWheel' + 'Enable'](_0x2791c7) {
            this['_mouseWhee' + 'lEnable'] = _0x2791c7, this['target'] = this['_target'];
        }
        ['onTargetMo' + 'useWheel'](_0x1177b7) {
            this['value'] -= _0x1177b7['delta'] * this['_scrollSiz' + 'e'], this['target'] = this['_target'];
        }
        ['onTargetMo' + 'useDown'](_0x3fc599) {
            this['isLockedFu' + 'n'] && !this['isLockedFu' + 'n'](_0x3fc599) || (this['event'](_0x126068['Event']['END']), this['_clickOnly'] = !0x0, this['_lastOffse' + 't'] = 0x0, this['_checkElas' + 'tic'] = !0x1, this['_lastPoint'] || (this['_lastPoint'] = new _0x126068['Point']()), this['_lastPoint']['setTo'](_0x126068['ILaya']['stage']['mouseX'], _0x126068['ILaya']['stage']['mouseY']), _0x126068['ILaya']['timer']['clear'](this, this['tweenMove']), _0x126068['Tween']['clearTween'](this), _0x126068['ILaya']['stage']['once'](_0x126068['Event']['MOUSE_UP'], this, this['onStageMou' + 'seUp2']), _0x126068['ILaya']['stage']['once'](_0x126068['Event']['MOUSE_OUT'], this, this['onStageMou' + 'seUp2']), _0x126068['ILaya']['timer']['frameLoop'](0x1, this, this['loop']));
        }
        ['startDragF' + 'orce']() {
            this['_clickOnly'] = !0x0, this['_lastOffse' + 't'] = 0x0, this['_checkElas' + 'tic'] = !0x1, this['_lastPoint'] || (this['_lastPoint'] = new _0x126068['Point']()), this['_lastPoint']['setTo'](_0x126068['ILaya']['stage']['mouseX'], _0x126068['ILaya']['stage']['mouseY']), _0x126068['ILaya']['timer']['clear'](this, this['tweenMove']), _0x126068['Tween']['clearTween'](this), _0x126068['ILaya']['stage']['once'](_0x126068['Event']['MOUSE_UP'], this, this['onStageMou' + 'seUp2']), _0x126068['ILaya']['stage']['once'](_0x126068['Event']['MOUSE_OUT'], this, this['onStageMou' + 'seUp2']), _0x126068['ILaya']['timer']['frameLoop'](0x1, this, this['loop']);
        }
        ['cancelDrag' + 'Op']() {
            _0x126068['ILaya']['stage']['off'](_0x126068['Event']['MOUSE_UP'], this, this['onStageMou' + 'seUp2']), _0x126068['ILaya']['stage']['off'](_0x126068['Event']['MOUSE_OUT'], this, this['onStageMou' + 'seUp2']), _0x126068['ILaya']['timer']['clear'](this, this['tweenMove']), _0x126068['ILaya']['timer']['clear'](this, this['loop']), this['_target']['mouseEnabl' + 'ed'] = !0x0;
        }
        ['checkTrigg' + 'ers'](_0x260d83 = !0x1) {
            return this['value'] >= 0x0 && this['value'] - this['_lastOffse' + 't'] <= 0x0 && this['triggerDow' + 'nDragLimit'] && this['triggerDow' + 'nDragLimit'](_0x260d83) ? (this['cancelDrag' + 'Op'](), this['value'] = 0x0, !0x0) : !!(this['value'] <= this['max'] && this['value'] - this['_lastOffse' + 't'] >= this['max'] && this['triggerUpD' + 'ragLimit'] && this['triggerUpD' + 'ragLimit'](_0x260d83)) && (this['cancelDrag' + 'Op'](), this['value'] = this['max'], !0x0);
        }
        get ['lastOffset']() {
            return this['_lastOffse' + 't'];
        }
        ['startTween' + 'MoveForce'](_0x4471b7) {
            this['_lastOffse' + 't'] = _0x4471b7, _0x126068['ILaya']['timer']['frameLoop'](0x1, this, this['tweenMove'], [0xc8]);
        }
        ['loop']() {
            var _0x57f53e = _0x126068['ILaya']['stage']['mouseY'], _0x5d5d63 = _0x126068['ILaya']['stage']['mouseX'];
            if (this['_lastOffse' + 't'] = this['isVertical'] ? _0x57f53e - this['_lastPoint']['y'] : _0x5d5d63 - this['_lastPoint']['x'], this['_clickOnly']) {
                if (!(Math['abs'](this['_lastOffse' + 't'] * (this['isVertical'] ? _0x126068['ILaya']['stage']['_canvasTra' + 'nsform']['getScaleY']() : _0x126068['ILaya']['stage']['_canvasTra' + 'nsform']['getScaleX']())) > 0x1))
                    return;
                if (this['_clickOnly'] = !0x1, this['checkTrigg' + 'ers']())
                    return;
                this['_offsets'] || (this['_offsets'] = []), this['_offsets']['length'] = 0x0, this['_target']['mouseEnabl' + 'ed'] = !0x1, !this['hide'] && this['autoHide'] && (this['alpha'] = 0x1, this['visible'] = !0x0), this['event'](_0x126068['Event']['START']);
            } else {
                if (this['checkTrigg' + 'ers']())
                    return;
            }
            this['_offsets']['push'](this['_lastOffse' + 't']), this['_lastPoint']['x'] = _0x5d5d63, this['_lastPoint']['y'] = _0x57f53e, 0x0 !== this['_lastOffse' + 't'] && (this['_checkElas' + 'tic'] || (this['elasticDis' + 'tance'] > 0x0 ? this['_checkElas' + 'tic'] || 0x0 == this['_lastOffse' + 't'] || (this['_lastOffse' + 't'] > 0x0 && this['_value'] <= this['min'] || this['_lastOffse' + 't'] < 0x0 && this['_value'] >= this['max'] ? (this['_isElastic'] = !0x0, this['_checkElas' + 'tic'] = !0x0) : this['_isElastic'] = !0x1) : this['_checkElas' + 'tic'] = !0x0), this['_isElastic'] ? this['_value'] <= this['min'] ? this['_lastOffse' + 't'] > 0x0 ? this['value'] -= this['_lastOffse' + 't'] * Math['max'](0x0, 0x1 - (this['min'] - this['_value']) / this['elasticDis' + 'tance']) : (this['value'] -= 0.5 * this['_lastOffse' + 't'], this['_value'] >= this['min'] && (this['_checkElas' + 'tic'] = !0x1)) : this['_value'] >= this['max'] && (this['_lastOffse' + 't'] < 0x0 ? this['value'] -= this['_lastOffse' + 't'] * Math['max'](0x0, 0x1 - (this['_value'] - this['max']) / this['elasticDis' + 'tance']) : (this['value'] -= 0.5 * this['_lastOffse' + 't'], this['_value'] <= this['max'] && (this['_checkElas' + 'tic'] = !0x1))) : this['value'] -= this['_lastOffse' + 't']);
        }
        ['onStageMou' + 'seUp2'](_0x170610) {
            if (_0x126068['ILaya']['stage']['off'](_0x126068['Event']['MOUSE_UP'], this, this['onStageMou' + 'seUp2']), _0x126068['ILaya']['stage']['off'](_0x126068['Event']['MOUSE_OUT'], this, this['onStageMou' + 'seUp2']), _0x126068['ILaya']['timer']['clear'](this, this['loop']), !(this['_clickOnly'] && this['_value'] >= this['min'] && this['_value'] <= this['max'])) {
                if (this['_target']['mouseEnabl' + 'ed'] = !0x0, this['_isElastic'])
                    this['_value'] < this['min'] ? _0x126068['Tween']['to'](this, { 'value': this['min'] }, this['elasticBac' + 'kTime'], _0x126068['Ease']['sineOut'], _0x126068['Handler']['create'](this, this['elasticOve' + 'r'])) : this['_value'] > this['max'] && _0x126068['Tween']['to'](this, { 'value': this['max'] }, this['elasticBac' + 'kTime'], _0x126068['Ease']['sineOut'], _0x126068['Handler']['create'](this, this['elasticOve' + 'r']));
                else {
                    if (!this['_offsets'])
                        return;
                    this['_offsets']['length'] < 0x1 && (this['_offsets'][0x0] = this['isVertical'] ? _0x126068['ILaya']['stage']['mouseY'] - this['_lastPoint']['y'] : _0x126068['ILaya']['stage']['mouseX'] - this['_lastPoint']['x']);
                    for (var _0x391af1 = 0x0, _0xc0ebd6 = Math['min'](this['_offsets']['length'], 0x3), _0xdd396d = 0x0; _0xdd396d < _0xc0ebd6; _0xdd396d++)
                        _0x391af1 += this['_offsets'][this['_offsets']['length'] - 0x1 - _0xdd396d];
                    if (this['_lastOffse' + 't'] = _0x391af1 / _0xc0ebd6, (_0x391af1 = Math['abs'](this['_lastOffse' + 't'])) < 0x2)
                        return void this['event'](_0x126068['Event']['END']);
                    _0x391af1 > 0xfa && (this['_lastOffse' + 't'] = this['_lastOffse' + 't'] > 0x0 ? 0xfa : -0xfa);
                    var _0x24e79c = Math['round'](Math['abs'](this['elasticDis' + 'tance'] * (this['_lastOffse' + 't'] / 0x96)));
                    _0x126068['ILaya']['timer']['frameLoop'](0x1, this, this['tweenMove'], [_0x24e79c]);
                }
            }
        }
        ['elasticOve' + 'r']() {
            this['_isElastic'] = !0x1, !this['hide'] && this['autoHide'] && _0x126068['Tween']['to'](this, { 'alpha': 0x0 }, 0x1f4), this['event'](_0x126068['Event']['END']);
        }
        ['tweenMove'](_0x144883) {
            var _0x16b363;
            if ((this['_lastOffse' + 't'] *= this['rollRatio'], !this['checkTrigg' + 'ers'](!0x0)) && (_0x144883 > 0x0 && (this['_lastOffse' + 't'] > 0x0 && this['value'] <= this['min'] ? (this['_isElastic'] = !0x0, _0x16b363 = 0.5 * -(this['min'] - _0x144883 - this['value']), this['_lastOffse' + 't'] > _0x16b363 && (this['_lastOffse' + 't'] = _0x16b363)) : this['_lastOffse' + 't'] < 0x0 && this['value'] >= this['max'] && (this['_isElastic'] = !0x0, _0x16b363 = 0.5 * -(this['max'] + _0x144883 - this['value']), this['_lastOffse' + 't'] < _0x16b363 && (this['_lastOffse' + 't'] = _0x16b363))), this['value'] -= this['_lastOffse' + 't'], Math['abs'](this['_lastOffse' + 't']) < 0.1)) {
                if (_0x126068['ILaya']['timer']['clear'](this, this['tweenMove']), this['_isElastic'])
                    return void (this['_value'] < this['min'] ? _0x126068['Tween']['to'](this, { 'value': this['min'] }, this['elasticBac' + 'kTime'], _0x126068['Ease']['sineOut'], _0x126068['Handler']['create'](this, this['elasticOve' + 'r'])) : this['_value'] > this['max'] ? _0x126068['Tween']['to'](this, { 'value': this['max'] }, this['elasticBac' + 'kTime'], _0x126068['Ease']['sineOut'], _0x126068['Handler']['create'](this, this['elasticOve' + 'r'])) : this['elasticOve' + 'r']());
                this['event'](_0x126068['Event']['END']), !this['hide'] && this['autoHide'] && _0x126068['Tween']['to'](this, { 'alpha': 0x0 }, 0x1f4);
            }
        }
        ['stopScroll']() {
            this['onStageMou' + 'seUp2'](null), _0x126068['ILaya']['timer']['clear'](this, this['tweenMove']), _0x126068['Tween']['clearTween'](this);
        }
        get ['tick']() {
            return this['slider']['tick'];
        }
        set ['tick'](_0x2a84e1) {
            this['slider']['tick'] = _0x2a84e1;
        }
    }
    _0x126068['ILaya']['regClass'](_0x1afb40), _0x126068['ClassUtils']['regClass']('laya.ui.Sc' + 'rollBar', _0x1afb40), _0x126068['ClassUtils']['regClass']('Laya.Scrol' + 'lBar', _0x1afb40);
    class _0xc98be5 extends _0x1afb40 {
    }
    _0x126068['ILaya']['regClass'](_0xc98be5), _0x126068['ClassUtils']['regClass']('laya.ui.VS' + 'crollBar', _0xc98be5), _0x126068['ClassUtils']['regClass']('Laya.VScro' + 'llBar', _0xc98be5);
    class _0x2fcd50 extends _0x1afb40 {
        ['initialize']() {
            super['initialize'](), this['slider']['isVertical'] = !0x1;
        }
    }
    _0x126068['ILaya']['regClass'](_0x2fcd50), _0x126068['ClassUtils']['regClass']('laya.ui.HS' + 'crollBar', _0x2fcd50), _0x126068['ClassUtils']['regClass']('Laya.HScro' + 'llBar', _0x2fcd50);
    class _0x5d66c9 extends _0x41b5da {
        constructor() {
            super(...arguments), this['selectEnab' + 'le'] = !0x1, this['totalPage'] = 0x0, this['_$componen' + 'tType'] = 'List', this['_repeatX'] = 0x0, this['_repeatY'] = 0x0, this['_repeatX2'] = 0x0, this['_repeatY2'] = 0x0, this['_spaceX'] = 0x0, this['_spaceY'] = 0x0, this['_cells'] = [], this['_startInde' + 'x'] = 0x0, this['_selectedI' + 'ndex'] = -0x1, this['_page'] = 0x0, this['_isVertica' + 'l'] = !0x0, this['_cellSize'] = 0x14, this['_cellOffse' + 't'] = 0x0, this['_createdLi' + 'ne'] = 0x0, this['_offset'] = new _0x126068['Point'](), this['_usedCache'] = null, this['_elasticEn' + 'abled'] = !0x1, this['_preLen'] = 0x0;
        }
        ['destroy'](_0x433293 = !0x0) {
            this['_content'] && this['_content']['destroy'](_0x433293), this['_scrollBar'] && this['_scrollBar']['destroy'](_0x433293), super['destroy'](_0x433293), this['_content'] = null, this['_scrollBar'] = null, this['_itemRende' + 'r'] = null, this['_cells'] = null, this['_array'] = null, this['selectHand' + 'ler'] = this['renderHand' + 'ler'] = this['mouseHandl' + 'er'] = null;
        }
        ['createChil' + 'dren']() {
            this['addChild'](this['_content'] = new _0x41b5da());
        }
        set ['cacheAs'](_0x2f4f2c) {
            super['cacheAs'] = _0x2f4f2c, this['_scrollBar'] && (this['_usedCache'] = null, 'none' !== _0x2f4f2c ? this['_scrollBar']['on'](_0x126068['Event']['START'], this, this['onScrollSt' + 'art']) : this['_scrollBar']['off'](_0x126068['Event']['START'], this, this['onScrollSt' + 'art']));
        }
        get ['cacheAs']() {
            return super['cacheAs'];
        }
        ['onScrollSt' + 'art']() {
            this['_usedCache'] || (this['_usedCache'] = super['cacheAs']), super['cacheAs'] = 'none', this['_scrollBar']['once'](_0x126068['Event']['END'], this, this['onScrollEn' + 'd']);
        }
        ['onScrollEn' + 'd']() {
            super['cacheAs'] = this['_usedCache'];
        }
        get ['content']() {
            return this['_content'];
        }
        get ['vScrollBar' + 'Skin']() {
            return this['_scrollBar'] ? this['_scrollBar']['skin'] : null;
        }
        set ['vScrollBar' + 'Skin'](_0x248382) {
            this['_removePre' + 'ScrollBar']();
            var _0x3dee37 = new _0xc98be5();
            _0x3dee37['name'] = 'scrollBar', _0x3dee37['right'] = 0x0, _0x3dee37['skin'] = _0x248382, _0x3dee37['elasticDis' + 'tance'] = this['_elasticEn' + 'abled'] ? 0xc8 : 0x0, this['scrollBar'] = _0x3dee37, this['addChild'](_0x3dee37), this['_setCellCh' + 'anged']();
        }
        ['_removePre' + 'ScrollBar']() {
            var _0x336cfd = this['removeChil' + 'dByName']('scrollBar');
            _0x336cfd && _0x336cfd['destroy'](!0x0);
        }
        get ['hScrollBar' + 'Skin']() {
            return this['_scrollBar'] ? this['_scrollBar']['skin'] : null;
        }
        set ['hScrollBar' + 'Skin'](_0x2643e0) {
            this['_removePre' + 'ScrollBar']();
            var _0x5cb897 = new _0x2fcd50();
            _0x5cb897['name'] = 'scrollBar', _0x5cb897['bottom'] = 0x0, _0x5cb897['skin'] = _0x2643e0, _0x5cb897['elasticDis' + 'tance'] = this['_elasticEn' + 'abled'] ? 0xc8 : 0x0, this['scrollBar'] = _0x5cb897, this['addChild'](_0x5cb897), this['_setCellCh' + 'anged']();
        }
        get ['scrollBar']() {
            return this['_scrollBar'];
        }
        set ['scrollBar'](_0x5d443d) {
            this['_scrollBar'] != _0x5d443d && (this['_scrollBar'] = _0x5d443d, _0x5d443d && (this['_isVertica' + 'l'] = this['_scrollBar']['isVertical'], this['addChild'](this['_scrollBar']), this['_scrollBar']['on'](_0x126068['Event']['CHANGE'], this, this['onScrollBa' + 'rChange'])));
        }
        get ['itemRender']() {
            return this['_itemRende' + 'r'];
        }
        set ['itemRender'](_0x4d84f0) {
            if (this['_itemRende' + 'r'] != _0x4d84f0) {
                this['_itemRende' + 'r'] = _0x4d84f0;
                for (var _0x44a3c3 = this['_cells']['length'] - 0x1; _0x44a3c3 > -0x1; _0x44a3c3--)
                    this['_cells'][_0x44a3c3]['destroy']();
                this['_cells']['length'] = 0x0, this['_setCellCh' + 'anged']();
            }
        }
        set ['width'](_0x4ebb5a) {
            _0x4ebb5a != this['_width'] && (super['width'] = _0x4ebb5a, this['_setCellCh' + 'anged']());
        }
        get ['width']() {
            return super['width'];
        }
        set ['height'](_0x2fc602) {
            _0x2fc602 != this['_height'] && (super['height'] = _0x2fc602, this['_setCellCh' + 'anged']());
        }
        get ['height']() {
            return super['height'];
        }
        get ['repeatX']() {
            return this['_repeatX'] > 0x0 ? this['_repeatX'] : this['_repeatX2'] > 0x0 ? this['_repeatX2'] : 0x1;
        }
        set ['repeatX'](_0x5aced0) {
            this['_repeatX'] = _0x5aced0, this['_setCellCh' + 'anged']();
        }
        get ['repeatY']() {
            return this['_repeatY'] > 0x0 ? this['_repeatY'] : this['_repeatY2'] > 0x0 ? this['_repeatY2'] : 0x1;
        }
        set ['repeatY'](_0x4a2b8b) {
            this['_repeatY'] = _0x4a2b8b, this['_setCellCh' + 'anged']();
        }
        get ['spaceX']() {
            return this['_spaceX'];
        }
        set ['spaceX'](_0x22691d) {
            this['_spaceX'] = _0x22691d, this['_setCellCh' + 'anged']();
        }
        get ['spaceY']() {
            return this['_spaceY'];
        }
        set ['spaceY'](_0x1d30e5) {
            this['_spaceY'] = _0x1d30e5, this['_setCellCh' + 'anged']();
        }
        ['changeCell' + 's']() {
            if (this['_cellChang' + 'ed'] = !0x1, this['_itemRende' + 'r']) {
                this['scrollBar'] = this['getChildBy' + 'Name']('scrollBar');
                var _0x2efc6b = this['_getOneCel' + 'l'](), _0x889473 = _0x2efc6b['width'] + this['_spaceX'] || 0x1, _0x37a9ce = _0x2efc6b['height'] + this['_spaceY'] || 0x1;
                this['_width'] > 0x0 && (this['_repeatX2'] = this['_isVertica' + 'l'] ? Math['round'](this['_width'] / _0x889473) : Math['ceil'](this['_width'] / _0x889473)), this['_height'] > 0x0 && (this['_repeatY2'] = this['_isVertica' + 'l'] ? Math['ceil'](this['_height'] / _0x37a9ce) : Math['round'](this['_height'] / _0x37a9ce));
                var _0x3a5a94 = this['_width'] ? this['_width'] : _0x889473 * this['repeatX'] - this['_spaceX'], _0x33e250 = this['_height'] ? this['_height'] : _0x37a9ce * this['repeatY'] - this['_spaceY'];
                this['_cellSize'] = this['_isVertica' + 'l'] ? _0x37a9ce : _0x889473, this['_cellOffse' + 't'] = this['_isVertica' + 'l'] ? _0x37a9ce * Math['max'](this['_repeatY2'], this['_repeatY']) - _0x33e250 - this['_spaceY'] : _0x889473 * Math['max'](this['_repeatX2'], this['_repeatX']) - _0x3a5a94 - this['_spaceX'], this['_isVertica' + 'l'] && this['vScrollBar' + 'Skin'] ? this['_scrollBar']['height'] = _0x33e250 : !this['_isVertica' + 'l'] && this['hScrollBar' + 'Skin'] && (this['_scrollBar']['width'] = _0x3a5a94), this['setContent' + 'Size'](_0x3a5a94, _0x33e250);
                var _0x54cacf = this['_isVertica' + 'l'] ? this['repeatX'] : this['repeatY'], _0x5e5a06 = (this['_isVertica' + 'l'] ? this['repeatY'] : this['repeatX']) + (this['_scrollBar'] ? 0x1 : 0x0);
                this['_createIte' + 'ms'](0x0, _0x54cacf, _0x5e5a06), this['_createdLi' + 'ne'] = _0x5e5a06, this['_array'] && (this['array'] = this['_array'], this['runCallLat' + 'er'](this['renderItem' + 's']));
            }
        }
        ['_getOneCel' + 'l']() {
            if (0x0 === this['_cells']['length']) {
                var _0x17b96f = this['createItem']();
                if (this['_offset']['setTo'](_0x17b96f['_x'], _0x17b96f['_y']), this['cacheConte' + 'nt'])
                    return _0x17b96f;
                this['_cells']['push'](_0x17b96f);
            }
            return this['_cells'][0x0];
        }
        ['_createIte' + 'ms'](_0x57a059, _0x200d96, _0x50353c) {
            var _0x28b704 = this['_content'], _0x353818 = this['_getOneCel' + 'l'](), _0x3e97ee = _0x353818['width'] + this['_spaceX'], _0x505a71 = _0x353818['height'] + this['_spaceY'];
            if (this['cacheConte' + 'nt']) {
                var _0x9e4bef = new _0x41b5da();
                _0x9e4bef['cacheAs'] = 'normal', _0x9e4bef['pos']((this['_isVertica' + 'l'] ? 0x0 : _0x57a059) * _0x3e97ee, (this['_isVertica' + 'l'] ? _0x57a059 : 0x0) * _0x505a71), this['_content']['addChild'](_0x9e4bef), _0x28b704 = _0x9e4bef;
            } else {
                for (var _0x53741b = [], _0x424555 = this['_cells']['length'] - 0x1; _0x424555 > -0x1; _0x424555--) {
                    var _0x38d7b1 = this['_cells'][_0x424555];
                    _0x38d7b1['removeSelf'](), _0x53741b['push'](_0x38d7b1);
                }
                this['_cells']['length'] = 0x0;
            }
            for (var _0x7fc275 = _0x57a059; _0x7fc275 < _0x50353c; _0x7fc275++)
                for (var _0x24e7d7 = 0x0; _0x24e7d7 < _0x200d96; _0x24e7d7++)
                    (_0x353818 = _0x53741b && _0x53741b['length'] ? _0x53741b['pop']() : this['createItem']())['x'] = (this['_isVertica' + 'l'] ? _0x24e7d7 : _0x7fc275) * _0x3e97ee - _0x28b704['_x'], _0x353818['y'] = (this['_isVertica' + 'l'] ? _0x7fc275 : _0x24e7d7) * _0x505a71 - _0x28b704['_y'], _0x353818['name'] = 'item' + (_0x7fc275 * _0x200d96 + _0x24e7d7), _0x28b704['addChild'](_0x353818), this['addCell'](_0x353818);
        }
        ['createItem']() {
            var _0x4c3027 = [];
            if ('function' == typeof this['_itemRende' + 'r'])
                var _0x62ce40 = new this['_itemRende' + 'r']();
            else
                _0x62ce40 = _0x126068['SceneUtils']['createComp'](this['_itemRende' + 'r'], null, null, _0x4c3027);
            if (0x0 == _0x4c3027['length'] && _0x62ce40['_watchMap']) {
                var _0x20bc57 = _0x62ce40['_watchMap'];
                for (var _0x42e9f2 in _0x20bc57)
                    for (var _0x5033a9 = _0x20bc57[_0x42e9f2], _0x218b45 = 0x0; _0x218b45 < _0x5033a9['length']; _0x218b45++) {
                        var _0x5e4bf9 = _0x5033a9[_0x218b45];
                        _0x4c3027['push'](_0x5e4bf9['comp'], _0x5e4bf9['prop'], _0x5e4bf9['value']);
                    }
            }
            return _0x4c3027['length'] && (_0x62ce40['_$bindData'] = _0x4c3027), _0x62ce40;
        }
        ['addCell'](_0x2d78b6) {
            _0x2d78b6['on'](_0x126068['Event']['CLICK'], this, this['onCellMous' + 'e']), _0x2d78b6['on'](_0x126068['Event']['RIGHT_CLIC' + 'K'], this, this['onCellMous' + 'e']), _0x2d78b6['on'](_0x126068['Event']['MOUSE_OVER'], this, this['onCellMous' + 'e']), _0x2d78b6['on'](_0x126068['Event']['MOUSE_OUT'], this, this['onCellMous' + 'e']), _0x2d78b6['on'](_0x126068['Event']['MOUSE_DOWN'], this, this['onCellMous' + 'e']), _0x2d78b6['on'](_0x126068['Event']['MOUSE_UP'], this, this['onCellMous' + 'e']), this['_cells']['push'](_0x2d78b6);
        }
        ['_afterInit' + 'ed']() {
            this['initItems']();
        }
        ['initItems']() {
            if (!this['_itemRende' + 'r'] && null != this['getChildBy' + 'Name']('item0')) {
                var _0x1a8db8;
                this['repeatX'] = 0x1, _0x1a8db8 = 0x0;
                for (var _0x3c703e = 0x0; _0x3c703e < 0x2710; _0x3c703e++) {
                    var _0x3bd70e = this['getChildBy' + 'Name']('item' + _0x3c703e);
                    if (!_0x3bd70e)
                        break;
                    this['addCell'](_0x3bd70e), _0x1a8db8++;
                }
                this['repeatY'] = _0x1a8db8;
            }
        }
        ['setContent' + 'Size'](_0x77309f, _0x5c88ff) {
            this['_content']['width'] = _0x77309f, this['_content']['height'] = _0x5c88ff, (this['_scrollBar'] || 0x0 != this['_offset']['x'] || 0x0 != this['_offset']['y']) && (this['_content']['_style']['scrollRect'] || (this['_content']['scrollRect'] = _0x126068['Rectangle']['create']()), this['_content']['_style']['scrollRect']['setTo'](-this['_offset']['x'], -this['_offset']['y'], _0x77309f, _0x5c88ff), this['_content']['scrollRect'] = this['_content']['scrollRect']), this['event'](_0x126068['Event']['RESIZE']);
        }
        ['onCellMous' + 'e'](_0x83fcb0) {
            _0x83fcb0['type'] === _0x126068['Event']['MOUSE_DOWN'] && (this['_isMoved'] = !0x1);
            var _0x313254 = _0x83fcb0['currentTar' + 'get'], _0x3b02b8 = this['_startInde' + 'x'] + this['_cells']['indexOf'](_0x313254);
            _0x3b02b8 < 0x0 || (_0x83fcb0['type'] === _0x126068['Event']['CLICK'] || _0x83fcb0['type'] === _0x126068['Event']['RIGHT_CLIC' + 'K'] ? this['selectEnab' + 'le'] && !this['_isMoved'] ? this['selectedIn' + 'dex'] = _0x3b02b8 : this['changeCell' + 'State'](_0x313254, !0x0, 0x0) : _0x83fcb0['type'] !== _0x126068['Event']['MOUSE_OVER'] && _0x83fcb0['type'] !== _0x126068['Event']['MOUSE_OUT'] || this['_selectedI' + 'ndex'] === _0x3b02b8 || this['changeCell' + 'State'](_0x313254, _0x83fcb0['type'] === _0x126068['Event']['MOUSE_OVER'], 0x0), this['mouseHandl' + 'er'] && this['mouseHandl' + 'er']['runWith']([
                _0x83fcb0,
                _0x3b02b8
            ]));
        }
        ['changeCell' + 'State'](_0x5392c1, _0x1a4316, _0x4d0a7b) {
            var _0xf28ea2 = _0x5392c1['getChildBy' + 'Name']('selectBox');
            _0xf28ea2 && (this['selectEnab' + 'le'] = !0x0, _0xf28ea2['visible'] = _0x1a4316, _0xf28ea2['index'] = _0x4d0a7b);
        }
        ['_sizeChang' + 'ed']() {
            super['_sizeChang' + 'ed'](), this['setContent' + 'Size'](this['width'], this['height']), this['_scrollBar'] && this['callLater'](this['onScrollBa' + 'rChange']);
        }
        ['onScrollBa' + 'rChange'](_0x1dd1ca = null) {
            this['runCallLat' + 'er'](this['changeCell' + 's']);
            var _0x25317f = this['_scrollBar']['value'], _0x1693d3 = this['_isVertica' + 'l'] ? this['repeatX'] : this['repeatY'], _0x17338a = this['_isVertica' + 'l'] ? this['repeatY'] : this['repeatX'], _0x4b44ff = Math['floor'](_0x25317f / this['_cellSize']);
            if (this['cacheConte' + 'nt'])
                _0x3dd7b4 = _0x17338a + 0x1, this['_createdLi' + 'ne'] - _0x4b44ff < _0x3dd7b4 && (this['_createIte' + 'ms'](this['_createdLi' + 'ne'], _0x1693d3, this['_createdLi' + 'ne'] + _0x3dd7b4), this['renderItem' + 's'](this['_createdLi' + 'ne'] * _0x1693d3, 0x0), this['_createdLi' + 'ne'] += _0x3dd7b4);
            else {
                var _0x282314 = _0x4b44ff * _0x1693d3, _0x3dd7b4 = 0x0;
                if (_0x282314 > this['_startInde' + 'x']) {
                    _0x3dd7b4 = _0x282314 - this['_startInde' + 'x'];
                    var _0x202b0f = !0x0, _0x56b32b = this['_startInde' + 'x'] + _0x1693d3 * (_0x17338a + 0x1);
                    this['_isMoved'] = !0x0;
                } else
                    _0x282314 < this['_startInde' + 'x'] && (_0x3dd7b4 = this['_startInde' + 'x'] - _0x282314, _0x202b0f = !0x1, _0x56b32b = this['_startInde' + 'x'] - 0x1, this['_isMoved'] = !0x0);
                for (var _0x443667 = 0x0; _0x443667 < _0x3dd7b4; _0x443667++) {
                    if (_0x202b0f) {
                        var _0x5d219f = this['_cells']['shift']();
                        this['_cells'][this['_cells']['length']] = _0x5d219f;
                        var _0x1a5768 = _0x56b32b + _0x443667;
                    } else
                        _0x5d219f = this['_cells']['pop'](), this['_cells']['unshift'](_0x5d219f), _0x1a5768 = _0x56b32b - _0x443667;
                    var _0x38d4b4 = Math['floor'](_0x1a5768 / _0x1693d3) * this['_cellSize'];
                    this['_isVertica' + 'l'] ? _0x5d219f['y'] = _0x38d4b4 : _0x5d219f['x'] = _0x38d4b4, this['renderItem'](_0x5d219f, _0x1a5768);
                }
                this['_startInde' + 'x'] = _0x282314, this['changeSele' + 'ctStatus']();
            }
            var _0x3e4ce8 = this['_content']['_style']['scrollRect'];
            this['_isVertica' + 'l'] ? (_0x3e4ce8['y'] = _0x25317f - this['_offset']['y'], _0x3e4ce8['x'] = -this['_offset']['x']) : (_0x3e4ce8['y'] = -this['_offset']['y'], _0x3e4ce8['x'] = _0x25317f - this['_offset']['x']), this['_content']['scrollRect'] = _0x3e4ce8;
        }
        ['posCell'](_0x54b9f9, _0xf5251a) {
            if (this['_scrollBar']) {
                var _0x266ef0 = this['_isVertica' + 'l'] ? this['repeatX'] : this['repeatY'], _0x182987 = (this['_isVertica' + 'l'] ? this['repeatY'] : this['repeatX'], Math['floor'](_0xf5251a / _0x266ef0) * this['_cellSize']);
                this['_isVertica' + 'l'] ? _0x54b9f9['_y'] = _0x182987 : _0x54b9f9['x'] = _0x182987;
            }
        }
        get ['selectedIn' + 'dex']() {
            return this['_selectedI' + 'ndex'];
        }
        set ['selectedIn' + 'dex'](_0x3ddc86) {
            this['_selectedI' + 'ndex'] != _0x3ddc86 && (this['_selectedI' + 'ndex'] = _0x3ddc86, this['changeSele' + 'ctStatus'](), this['event'](_0x126068['Event']['CHANGE']), this['selectHand' + 'ler'] && this['selectHand' + 'ler']['runWith'](_0x3ddc86), this['startIndex'] = this['_startInde' + 'x']);
        }
        ['changeSele' + 'ctStatus']() {
            for (var _0x56f696 = 0x0, _0xb61f4b = this['_cells']['length']; _0x56f696 < _0xb61f4b; _0x56f696++)
                this['changeCell' + 'State'](this['_cells'][_0x56f696], this['_selectedI' + 'ndex'] === this['_startInde' + 'x'] + _0x56f696, 0x1);
        }
        get ['selectedIt' + 'em']() {
            return -0x1 != this['_selectedI' + 'ndex'] ? this['_array'][this['_selectedI' + 'ndex']] : null;
        }
        set ['selectedIt' + 'em'](_0x16edde) {
            this['selectedIn' + 'dex'] = this['_array']['indexOf'](_0x16edde);
        }
        get ['selection']() {
            return this['getCell'](this['_selectedI' + 'ndex']);
        }
        set ['selection'](_0x4e4637) {
            this['selectedIn' + 'dex'] = this['_startInde' + 'x'] + this['_cells']['indexOf'](_0x4e4637);
        }
        get ['startIndex']() {
            return this['_startInde' + 'x'];
        }
        set ['startIndex'](_0x14d29f) {
            this['_startInde' + 'x'] = _0x14d29f > 0x0 ? _0x14d29f : 0x0, this['callLater'](this['renderItem' + 's']);
        }
        ['renderItem' + 's'](_0x3e8fb7 = 0x0, _0x2f9e08 = 0x0) {
            for (var _0x1d3325 = _0x3e8fb7, _0x3217f6 = _0x2f9e08 || this['_cells']['length']; _0x1d3325 < _0x3217f6; _0x1d3325++)
                this['renderItem'](this['_cells'][_0x1d3325], this['_startInde' + 'x'] + _0x1d3325);
            this['changeSele' + 'ctStatus']();
        }
        ['renderItem'](_0x30e5a7, _0xfb37aa) {
            this['_array'] && _0xfb37aa >= 0x0 && _0xfb37aa < this['_array']['length'] ? (_0x30e5a7['visible'] = !0x0, _0x30e5a7['_$bindData'] ? (_0x30e5a7['_dataSourc' + 'e'] = this['_array'][_0xfb37aa], this['_bindData'](_0x30e5a7, this['_array'][_0xfb37aa])) : _0x30e5a7['dataSource'] = this['_array'][_0xfb37aa], this['cacheConte' + 'nt'] || this['posCell'](_0x30e5a7, _0xfb37aa), this['hasListene' + 'r'](_0x126068['Event']['RENDER']) && this['event'](_0x126068['Event']['RENDER'], [
                _0x30e5a7,
                _0xfb37aa
            ]), this['renderHand' + 'ler'] && this['renderHand' + 'ler']['runWith']([
                _0x30e5a7,
                _0xfb37aa
            ])) : (_0x30e5a7['visible'] = !0x1, _0x30e5a7['dataSource'] = null);
        }
        ['_bindData'](_0x70ff3e, _0x4a6306) {
            for (var _0x2c8213 = _0x70ff3e['_$bindData'], _0x22726f = 0x0, _0x125df9 = _0x2c8213['length']; _0x22726f < _0x125df9; _0x22726f++) {
                var _0x502f7a = _0x2c8213[_0x22726f++], _0x9e41d9 = _0x2c8213[_0x22726f++], _0x8b1cf6 = _0x2c8213[_0x22726f], _0x596825 = _0x1c3411['getBindFun'](_0x8b1cf6);
                _0x502f7a[_0x9e41d9] = _0x596825['call'](this, _0x4a6306);
            }
        }
        get ['array']() {
            return this['_array'];
        }
        set ['array'](_0x24849a) {
            this['runCallLat' + 'er'](this['changeCell' + 's']), this['_array'] = _0x24849a || [], this['_preLen'] = this['_array']['length'];
            var _0x27f88e = this['_array']['length'];
            if (this['totalPage'] = Math['ceil'](_0x27f88e / (this['repeatX'] * this['repeatY'])), this['_selectedI' + 'ndex'] = this['_selectedI' + 'ndex'] < _0x27f88e ? this['_selectedI' + 'ndex'] : _0x27f88e - 0x1, this['startIndex'] = this['_startInde' + 'x'], this['_scrollBar']) {
                this['_scrollBar']['stopScroll']();
                var _0x1bbf90 = this['_isVertica' + 'l'] ? this['repeatX'] : this['repeatY'], _0x2055e8 = this['_isVertica' + 'l'] ? this['repeatY'] : this['repeatX'], _0x48278f = Math['ceil'](_0x27f88e / _0x1bbf90);
                (this['_cellOffse' + 't'] > 0x0 ? this['totalPage'] + 0x1 : this['totalPage']) > 0x1 && _0x48278f >= _0x2055e8 ? (this['_scrollBar']['scrollSize'] = this['_cellSize'], this['_scrollBar']['thumbPerce' + 'nt'] = _0x2055e8 / _0x48278f, this['_scrollBar']['setScroll'](0x0, (_0x48278f - _0x2055e8) * this['_cellSize'] + this['_cellOffse' + 't'], this['_scrollBar']['value']), this['_scrollBar']['target'] = this['_content']) : (this['_scrollBar']['setScroll'](0x0, 0x0, 0x0), this['_scrollBar']['target'] = this['_content']);
            }
        }
        ['updateArra' + 'y'](_0x406942) {
            var _0x41e8b1;
            if (this['_array'] = _0x406942, this['_array'] && ((_0x41e8b1 = this['_preLen'] - this['_startInde' + 'x']) >= 0x0 && this['renderItem' + 's'](_0x41e8b1), this['_preLen'] = this['_array']['length']), this['_scrollBar']) {
                var _0x57c795 = _0x406942['length'], _0x246eb6 = this['_isVertica' + 'l'] ? this['repeatX'] : this['repeatY'], _0x3e0325 = this['_isVertica' + 'l'] ? this['repeatY'] : this['repeatX'], _0xd3b571 = Math['ceil'](_0x57c795 / _0x246eb6);
                _0xd3b571 >= _0x3e0325 && (this['_scrollBar']['thumbPerce' + 'nt'] = _0x3e0325 / _0xd3b571, this['_scrollBar']['slider']['_max'] = (_0xd3b571 - _0x3e0325) * this['_cellSize'] + this['_cellOffse' + 't']);
            }
        }
        get ['page']() {
            return this['_page'];
        }
        set ['page'](_0x8affc5) {
            this['_page'] = _0x8affc5, this['_array'] && (this['_page'] = _0x8affc5 > 0x0 ? _0x8affc5 : 0x0, this['_page'] = this['_page'] < this['totalPage'] ? this['_page'] : this['totalPage'] - 0x1, this['startIndex'] = this['_page'] * this['repeatX'] * this['repeatY']);
        }
        get ['length']() {
            return this['_array'] ? this['_array']['length'] : 0x0;
        }
        set ['dataSource'](_0x598b34) {
            this['_dataSourc' + 'e'] = _0x598b34, 'number' == typeof _0x598b34 || 'string' == typeof _0x598b34 ? this['selectedIn' + 'dex'] = parseInt(_0x598b34) : _0x598b34 instanceof Array ? this['array'] = _0x598b34 : super['dataSource'] = _0x598b34;
        }
        get ['dataSource']() {
            return super['dataSource'];
        }
        get ['cells']() {
            return this['runCallLat' + 'er'](this['changeCell' + 's']), this['_cells'];
        }
        get ['elasticEna' + 'bled']() {
            return this['_elasticEn' + 'abled'];
        }
        set ['elasticEna' + 'bled'](_0x4b0e65) {
            this['_elasticEn' + 'abled'] = _0x4b0e65, this['_scrollBar'] && (this['_scrollBar']['elasticDis' + 'tance'] = _0x4b0e65 ? 0xc8 : 0x0);
        }
        ['refresh']() {
            this['array'] = this['_array'];
        }
        ['getItem'](_0x2f8ae9) {
            return _0x2f8ae9 > -0x1 && _0x2f8ae9 < this['_array']['length'] ? this['_array'][_0x2f8ae9] : null;
        }
        ['changeItem'](_0x4dc2ba, _0x5d9104) {
            _0x4dc2ba > -0x1 && _0x4dc2ba < this['_array']['length'] && (this['_array'][_0x4dc2ba] = _0x5d9104, _0x4dc2ba >= this['_startInde' + 'x'] && _0x4dc2ba < this['_startInde' + 'x'] + this['_cells']['length'] && this['renderItem'](this['getCell'](_0x4dc2ba), _0x4dc2ba));
        }
        ['setItem'](_0x3ab63a, _0x3b45f9) {
            this['changeItem'](_0x3ab63a, _0x3b45f9);
        }
        ['addItem'](_0x474bbb) {
            this['_array']['push'](_0x474bbb), this['array'] = this['_array'];
        }
        ['addItemAt'](_0x31f07c, _0x3ea2d6) {
            this['_array']['splice'](_0x3ea2d6, 0x0, _0x31f07c), this['array'] = this['_array'];
        }
        ['deleteItem'](_0x315cc7) {
            this['_array']['splice'](_0x315cc7, 0x1), this['array'] = this['_array'];
        }
        ['getCell'](_0x38e948) {
            return this['runCallLat' + 'er'](this['changeCell' + 's']), _0x38e948 > -0x1 && this['_cells'] ? this['_cells'][(_0x38e948 - this['_startInde' + 'x']) % this['_cells']['length']] : null;
        }
        ['scrollTo'](_0xc44c06) {
            if (this['_scrollBar']) {
                var _0xdbace4 = this['_isVertica' + 'l'] ? this['repeatX'] : this['repeatY'];
                this['_scrollBar']['value'] = Math['floor'](_0xc44c06 / _0xdbace4) * this['_cellSize'];
            } else
                this['startIndex'] = _0xc44c06;
        }
        ['tweenTo'](_0x6b4988, _0x22b9d4 = 0xc8, _0x4a984c = null) {
            if (this['_scrollBar']) {
                this['_scrollBar']['stopScroll']();
                var _0x51234c = this['_isVertica' + 'l'] ? this['repeatX'] : this['repeatY'];
                _0x126068['Tween']['to'](this['_scrollBar'], { 'value': Math['floor'](_0x6b4988 / _0x51234c) * this['_cellSize'] }, _0x22b9d4, null, _0x4a984c, 0x0, !0x0);
            } else
                this['startIndex'] = _0x6b4988, _0x4a984c && _0x4a984c['run']();
        }
        ['_setCellCh' + 'anged']() {
            this['_cellChang' + 'ed'] || (this['_cellChang' + 'ed'] = !0x0, this['callLater'](this['changeCell' + 's']));
        }
        ['commitMeas' + 'ure']() {
            this['runCallLat' + 'er'](this['changeCell' + 's']);
        }
    }
    _0x126068['ILaya']['regClass'](_0x5d66c9), _0x126068['ClassUtils']['regClass']('laya.ui.Li' + 'st', _0x5d66c9), _0x126068['ClassUtils']['regClass']('Laya.List', _0x5d66c9);
    class _0x76941a extends _0x23f9d7 {
        constructor(_0xef8752 = null, _0x2679a3 = null) {
            super(), this['_visibleNu' + 'm'] = 0x6, this['_itemColor' + 's'] = _0x5393ca['comboBoxIt' + 'emColors'], this['_itemSize'] = 0xc, this['_labels'] = [], this['_selectedI' + 'ndex'] = -0x1, this['itemRender'] = null, this['skin'] = _0xef8752, this['labels'] = _0x2679a3;
        }
        ['destroy'](_0x26a416 = !0x0) {
            super['destroy'](_0x26a416), this['_button'] && this['_button']['destroy'](_0x26a416), this['_list'] && this['_list']['destroy'](_0x26a416), this['_button'] = null, this['_list'] = null, this['_itemColor' + 's'] = null, this['_labels'] = null, this['_selectHan' + 'dler'] = null;
        }
        ['createChil' + 'dren']() {
            this['addChild'](this['_button'] = new _0x37601b()), this['_button']['text']['align'] = 'left', this['_button']['labelPaddi' + 'ng'] = '0,0,0,5', this['_button']['on'](_0x126068['Event']['MOUSE_DOWN'], this, this['onButtonMo' + 'useDown']);
        }
        ['_createLis' + 't']() {
            this['_list'] = new _0x5d66c9(), this['_scrollBar' + 'Skin'] && (this['_list']['vScrollBar' + 'Skin'] = this['_scrollBar' + 'Skin']), this['_setListEv' + 'ent'](this['_list']);
        }
        ['_setListEv' + 'ent'](_0x4e3fa9) {
            this['_list']['selectEnab' + 'le'] = !0x0, this['_list']['on'](_0x126068['Event']['MOUSE_DOWN'], this, this['onListDown']), this['_list']['mouseHandl' + 'er'] = _0x126068['Handler']['create'](this, this['onlistItem' + 'Mouse'], null, !0x1), this['_list']['scrollBar'] && this['_list']['scrollBar']['on'](_0x126068['Event']['MOUSE_DOWN'], this, this['onScrollBa' + 'rDown']);
        }
        ['onListDown'](_0x496f7b) {
            _0x496f7b['stopPropag' + 'ation']();
        }
        ['onScrollBa' + 'rDown'](_0x59f308) {
            _0x59f308['stopPropag' + 'ation']();
        }
        ['onButtonMo' + 'useDown'](_0x442add) {
            this['callLater'](this['switchTo'], [!this['_isOpen']]);
        }
        get ['skin']() {
            return this['_button']['skin'];
        }
        set ['skin'](_0x154314) {
            this['_button']['skin'] != _0x154314 && (this['_button']['skin'] = _0x154314, this['_listChang' + 'ed'] = !0x0);
        }
        ['measureWid' + 'th']() {
            return this['_button']['width'];
        }
        ['measureHei' + 'ght']() {
            return this['_button']['height'];
        }
        ['changeList']() {
            this['_listChang' + 'ed'] = !0x1;
            var _0x3910bc = this['width'] - 0x2, _0x58e7fb = this['_itemColor' + 's'][0x2];
            this['_itemHeigh' + 't'] = this['_itemSize'] + 0x6, this['_list']['itemRender'] = this['itemRender'] || {
                'type': 'Box',
                'child': [{
                        'type': 'Label',
                        'props': {
                            'name': 'label',
                            'x': 0x1,
                            'padding': '3,3,3,3',
                            'width': _0x3910bc,
                            'height': this['_itemHeigh' + 't'],
                            'fontSize': this['_itemSize'],
                            'color': _0x58e7fb
                        }
                    }]
            }, this['_list']['repeatY'] = this['_visibleNu' + 'm'], this['_list']['refresh']();
        }
        ['onlistItem' + 'Mouse'](_0x31ba87, _0x5c3ece) {
            var _0x1a50fd = _0x31ba87['type'];
            if (_0x1a50fd === _0x126068['Event']['MOUSE_OVER'] || _0x1a50fd === _0x126068['Event']['MOUSE_OUT']) {
                if (this['_isCustomL' + 'ist'])
                    return;
                var _0x2fc105 = this['_list']['getCell'](_0x5c3ece);
                if (!_0x2fc105)
                    return;
                var _0x5b993a = _0x2fc105['getChildBy' + 'Name']('label');
                _0x5b993a && (_0x1a50fd === _0x126068['Event']['ROLL_OVER'] ? (_0x5b993a['bgColor'] = this['_itemColor' + 's'][0x0], _0x5b993a['color'] = this['_itemColor' + 's'][0x1]) : (_0x5b993a['bgColor'] = null, _0x5b993a['color'] = this['_itemColor' + 's'][0x2]));
            } else
                _0x1a50fd === _0x126068['Event']['CLICK'] && (this['selectedIn' + 'dex'] = _0x5c3ece, this['isOpen'] = !0x1);
        }
        ['switchTo'](_0x118756) {
            this['isOpen'] = _0x118756;
        }
        ['changeOpen']() {
            this['isOpen'] = !this['_isOpen'];
        }
        set ['width'](_0x5b065c) {
            super['width'] = _0x5b065c, this['_button']['width'] = this['_width'], this['_itemChang' + 'ed'] = !0x0, this['_listChang' + 'ed'] = !0x0;
        }
        get ['width']() {
            return super['width'];
        }
        set ['height'](_0x165aef) {
            super['height'] = _0x165aef, this['_button']['height'] = this['_height'];
        }
        get ['height']() {
            return super['height'];
        }
        get ['labels']() {
            return this['_labels']['join'](',');
        }
        set ['labels'](_0x3fe890) {
            this['_labels']['length'] > 0x0 && (this['selectedIn' + 'dex'] = -0x1), _0x3fe890 ? this['_labels'] = _0x3fe890['split'](',') : this['_labels']['length'] = 0x0, this['_itemChang' + 'ed'] = !0x0;
        }
        ['changeItem']() {
            if (this['_itemChang' + 'ed'] = !0x1, this['_listHeigh' + 't'] = this['_labels']['length'] > 0x0 ? Math['min'](this['_visibleNu' + 'm'], this['_labels']['length']) * this['_itemHeigh' + 't'] : this['_itemHeigh' + 't'], !this['_isCustomL' + 'ist']) {
                var _0x4ff63e = this['_list']['graphics'];
                _0x4ff63e['clear'](!0x0), _0x4ff63e['drawRect'](0x0, 0x0, this['width'] - 0x1, this['_listHeigh' + 't'], this['_itemColor' + 's'][0x4], this['_itemColor' + 's'][0x3]);
            }
            var _0x44dff4 = this['_list']['array'] || [];
            _0x44dff4['length'] = 0x0;
            for (var _0x1ea985 = 0x0, _0x20cc09 = this['_labels']['length']; _0x1ea985 < _0x20cc09; _0x1ea985++)
                _0x44dff4['push']({ 'label': this['_labels'][_0x1ea985] });
            this['_list']['height'] = this['_listHeigh' + 't'], this['_list']['array'] = _0x44dff4;
        }
        get ['selectedIn' + 'dex']() {
            return this['_selectedI' + 'ndex'];
        }
        set ['selectedIn' + 'dex'](_0x46368c) {
            this['_selectedI' + 'ndex'] != _0x46368c && (this['_selectedI' + 'ndex'] = _0x46368c, this['_labels']['length'] > 0x0 ? this['changeSele' + 'cted']() : this['callLater'](this['changeSele' + 'cted']), this['event'](_0x126068['Event']['CHANGE'], [_0x126068['Event']['EMPTY']['setTo'](_0x126068['Event']['CHANGE'], this, this)]), this['_selectHan' + 'dler'] && this['_selectHan' + 'dler']['runWith'](this['_selectedI' + 'ndex']));
        }
        ['changeSele' + 'cted']() {
            this['_button']['label'] = this['selectedLa' + 'bel'];
        }
        get ['selectHand' + 'ler']() {
            return this['_selectHan' + 'dler'];
        }
        set ['selectHand' + 'ler'](_0x2cd4a0) {
            this['_selectHan' + 'dler'] = _0x2cd4a0;
        }
        get ['selectedLa' + 'bel']() {
            return this['_selectedI' + 'ndex'] > -0x1 && this['_selectedI' + 'ndex'] < this['_labels']['length'] ? this['_labels'][this['_selectedI' + 'ndex']] : null;
        }
        set ['selectedLa' + 'bel'](_0x992e0c) {
            this['selectedIn' + 'dex'] = this['_labels']['indexOf'](_0x992e0c);
        }
        get ['visibleNum']() {
            return this['_visibleNu' + 'm'];
        }
        set ['visibleNum'](_0x2b0bee) {
            this['_visibleNu' + 'm'] = _0x2b0bee, this['_listChang' + 'ed'] = !0x0;
        }
        get ['itemColors']() {
            return String(this['_itemColor' + 's']);
        }
        set ['itemColors'](_0x5f5918) {
            this['_itemColor' + 's'] = _0x1c3411['fillArray'](this['_itemColor' + 's'], _0x5f5918, String), this['_listChang' + 'ed'] = !0x0;
        }
        get ['itemSize']() {
            return this['_itemSize'];
        }
        set ['itemSize'](_0x8ccfa0) {
            this['_itemSize'] = _0x8ccfa0, this['_listChang' + 'ed'] = !0x0;
        }
        get ['isOpen']() {
            return this['_isOpen'];
        }
        set ['isOpen'](_0x31ef52) {
            if (this['_isOpen'] != _0x31ef52) {
                if (this['_isOpen'] = _0x31ef52, this['_button']['selected'] = this['_isOpen'], this['_isOpen']) {
                    this['_list'] || this['_createLis' + 't'](), this['_listChang' + 'ed'] && !this['_isCustomL' + 'ist'] && this['changeList'](), this['_itemChang' + 'ed'] && this['changeItem']();
                    var _0xf227eb = this['localToGlo' + 'bal'](_0x126068['Point']['TEMP']['setTo'](0x0, 0x0)), _0x58818d = _0xf227eb['y'] + this['_button']['height'];
                    _0x58818d = _0x58818d + this['_listHeigh' + 't'] <= _0x126068['ILaya']['stage']['height'] ? _0x58818d : _0xf227eb['y'] - this['_listHeigh' + 't'], this['_list']['pos'](_0xf227eb['x'], _0x58818d), this['_list']['zOrder'] = 0x3e9, _0x126068['ILaya']['stage']['addChild'](this['_list']), _0x126068['ILaya']['stage']['once'](_0x126068['Event']['MOUSE_DOWN'], this, this['removeList']), _0x126068['ILaya']['stage']['on'](_0x126068['Event']['MOUSE_WHEE' + 'L'], this, this['_onStageMo' + 'useWheel']), this['_list']['selectedIn' + 'dex'] = this['_selectedI' + 'ndex'];
                } else
                    this['_list'] && this['_list']['removeSelf']();
            }
        }
        ['_onStageMo' + 'useWheel'](_0x401dae) {
            this['_list'] && !this['_list']['contains'](_0x401dae['target']) && this['removeList'](null);
        }
        ['removeList'](_0x4f6c48) {
            _0x126068['ILaya']['stage']['off'](_0x126068['Event']['MOUSE_DOWN'], this, this['removeList']), _0x126068['ILaya']['stage']['off'](_0x126068['Event']['MOUSE_WHEE' + 'L'], this, this['_onStageMo' + 'useWheel']), this['isOpen'] = !0x1;
        }
        get ['scrollBarS' + 'kin']() {
            return this['_scrollBar' + 'Skin'];
        }
        set ['scrollBarS' + 'kin'](_0x4f1fc1) {
            this['_scrollBar' + 'Skin'] = _0x4f1fc1;
        }
        get ['sizeGrid']() {
            return this['_button']['sizeGrid'];
        }
        set ['sizeGrid'](_0x34a7aa) {
            this['_button']['sizeGrid'] = _0x34a7aa;
        }
        get ['scrollBar']() {
            return this['list']['scrollBar'];
        }
        get ['button']() {
            return this['_button'];
        }
        get ['list']() {
            return this['_list'] || this['_createLis' + 't'](), this['_list'];
        }
        set ['list'](_0x49a422) {
            _0x49a422 && (_0x49a422['removeSelf'](), this['_isCustomL' + 'ist'] = !0x0, this['_list'] = _0x49a422, this['_setListEv' + 'ent'](_0x49a422), this['_itemHeigh' + 't'] = _0x49a422['getCell'](0x0)['height'] + _0x49a422['spaceY']);
        }
        set ['dataSource'](_0x2a5e15) {
            this['_dataSourc' + 'e'] = _0x2a5e15, 'number' == typeof _0x2a5e15 || 'string' == typeof _0x2a5e15 ? this['selectedIn' + 'dex'] = parseInt(_0x2a5e15) : _0x2a5e15 instanceof Array ? this['labels'] = _0x2a5e15['join'](',') : super['dataSource'] = _0x2a5e15;
        }
        get ['dataSource']() {
            return super['dataSource'];
        }
        get ['labelColor' + 's']() {
            return this['_button']['labelColor' + 's'];
        }
        set ['labelColor' + 's'](_0x36c302) {
            this['_button']['labelColor' + 's'] != _0x36c302 && (this['_button']['labelColor' + 's'] = _0x36c302);
        }
        get ['labelPaddi' + 'ng']() {
            return this['_button']['text']['padding']['join'](',');
        }
        set ['labelPaddi' + 'ng'](_0xae56f7) {
            this['_button']['text']['padding'] = _0x1c3411['fillArray'](_0x5393ca['labelPaddi' + 'ng'], _0xae56f7, Number);
        }
        get ['labelSize']() {
            return this['_button']['text']['fontSize'];
        }
        set ['labelSize'](_0x38853b) {
            this['_button']['text']['fontSize'] = _0x38853b;
        }
        get ['labelBold']() {
            return this['_button']['text']['bold'];
        }
        set ['labelBold'](_0x495717) {
            this['_button']['text']['bold'] = _0x495717;
        }
        get ['labelFont']() {
            return this['_button']['text']['font'];
        }
        set ['labelFont'](_0x54c188) {
            this['_button']['text']['font'] = _0x54c188;
        }
        get ['stateNum']() {
            return this['_button']['stateNum'];
        }
        set ['stateNum'](_0x5241a5) {
            this['_button']['stateNum'] = _0x5241a5;
        }
    }
    _0x126068['ILaya']['regClass'](_0x76941a), _0x126068['ClassUtils']['regClass']('laya.ui.Co' + 'mboBox', _0x76941a), _0x126068['ClassUtils']['regClass']('Laya.Combo' + 'Box', _0x76941a);
    class _0x1a2001 extends _0x23f9d7 {
        constructor(_0x207f41 = null) {
            super(), this['_value'] = 0.5, this['skin'] = _0x207f41;
        }
        ['destroy'](_0x25ac85 = !0x0) {
            super['destroy'](_0x25ac85), this['_bg'] && this['_bg']['destroy'](_0x25ac85), this['_bar'] && this['_bar']['destroy'](_0x25ac85), this['_bg'] = this['_bar'] = null, this['changeHand' + 'ler'] = null;
        }
        ['createChil' + 'dren']() {
            this['addChild'](this['_bg'] = new _0x527063()), this['addChild'](this['_bar'] = new _0x527063()), this['_bar']['_bitmap']['autoCacheC' + 'md'] = !0x1;
        }
        get ['skin']() {
            return this['_skin'];
        }
        set ['skin'](_0x1e694a) {
            this['_skin'] != _0x1e694a && (this['_skin'] = _0x1e694a, this['_skin'] && !_0x126068['Loader']['getRes'](this['_skin']) ? _0x126068['ILaya']['loader']['load'](this['_skin'], _0x126068['Handler']['create'](this, this['_skinLoade' + 'd']), null, _0x126068['Loader']['IMAGE'], 0x1) : this['_skinLoade' + 'd']());
        }
        ['_skinLoade' + 'd']() {
            this['_bg'] && (this['_bg']['skin'] = this['_skin'], this['_bar']['skin'] = this['_skin']['replace']('.png', '$bar.png'), this['callLater'](this['changeValu' + 'e']), this['_sizeChang' + 'ed'](), this['event'](_0x126068['Event']['LOADED']));
        }
        ['measureWid' + 'th']() {
            return this['_bg']['width'];
        }
        ['measureHei' + 'ght']() {
            return this['_bg']['height'];
        }
        get ['value']() {
            return this['_value'];
        }
        set ['value'](_0x2d5b8f) {
            this['_value'] != _0x2d5b8f && (_0x2d5b8f = _0x2d5b8f > 0x1 ? 0x1 : _0x2d5b8f < 0x0 ? 0x0 : _0x2d5b8f, this['_value'] = _0x2d5b8f, this['callLater'](this['changeValu' + 'e']), this['event'](_0x126068['Event']['CHANGE']), this['changeHand' + 'ler'] && this['changeHand' + 'ler']['runWith'](_0x2d5b8f));
        }
        ['changeValu' + 'e']() {
            if (this['sizeGrid']) {
                var _0x173d9f = this['sizeGrid']['split'](','), _0x33d3e3 = Number(_0x173d9f[0x3]), _0x429f23 = Number(_0x173d9f[0x1]), _0x3a98b2 = (this['width'] - _0x33d3e3 - _0x429f23) * this['_value'];
                this['_bar']['width'] = _0x33d3e3 + _0x429f23 + _0x3a98b2, this['_bar']['visible'] = this['_bar']['width'] > _0x33d3e3 + _0x429f23;
            } else
                this['_bar']['width'] = this['width'] * this['_value'];
        }
        get ['bar']() {
            return this['_bar'];
        }
        get ['bg']() {
            return this['_bg'];
        }
        get ['sizeGrid']() {
            return this['_bg']['sizeGrid'];
        }
        set ['sizeGrid'](_0x2701af) {
            this['_bg']['sizeGrid'] = this['_bar']['sizeGrid'] = _0x2701af;
        }
        set ['width'](_0x3a9b57) {
            super['width'] = _0x3a9b57, this['_bg']['width'] = this['_width'], this['callLater'](this['changeValu' + 'e']);
        }
        get ['width']() {
            return super['width'];
        }
        set ['height'](_0x153195) {
            super['height'] = _0x153195, this['_bg']['height'] = this['_height'], this['_bar']['height'] = this['_height'];
        }
        get ['height']() {
            return super['height'];
        }
        set ['dataSource'](_0x29e402) {
            this['_dataSourc' + 'e'] = _0x29e402, 'number' == typeof _0x29e402 || 'string' == typeof _0x29e402 ? this['value'] = Number(_0x29e402) : super['dataSource'] = _0x29e402;
        }
        get ['dataSource']() {
            return super['dataSource'];
        }
    }
    _0x126068['ILaya']['regClass'](_0x1a2001), _0x126068['ClassUtils']['regClass']('laya.ui.Pr' + 'ogressBar', _0x1a2001), _0x126068['ClassUtils']['regClass']('Laya.Progr' + 'essBar', _0x1a2001);
    class _0x240817 extends _0x37601b {
        constructor(_0x5db270 = null, _0x307df3 = '') {
            super(_0x5db270, _0x307df3), this['toggle'] = !0x1, this['_autoSize'] = !0x1;
        }
        ['destroy'](_0x550e93 = !0x0) {
            super['destroy'](_0x550e93), this['_value'] = null;
        }
        ['preinitial' + 'ize']() {
            super['preinitial' + 'ize'](), this['toggle'] = !0x1, this['_autoSize'] = !0x1;
        }
        ['initialize']() {
            super['initialize'](), this['createText'](), this['_text']['align'] = 'left', this['_text']['valign'] = 'top', this['_text']['width'] = 0x0, this['on'](_0x126068['Event']['CLICK'], this, this['onClick']);
        }
        ['onClick'](_0xab1ae1) {
            this['selected'] = !0x0;
        }
        get ['value']() {
            return null != this['_value'] ? this['_value'] : this['label'];
        }
        set ['value'](_0x524363) {
            this['_value'] = _0x524363;
        }
    }
    _0x126068['ILaya']['regClass'](_0x240817), _0x126068['ClassUtils']['regClass']('laya.ui.Ra' + 'dio', _0x240817), _0x126068['ClassUtils']['regClass']('Laya.Radio', _0x240817);
    class _0x11f15b extends _0x41b5da {
        constructor(_0x258320 = null, _0x3328a6 = null) {
            super(), this['_selectedI' + 'ndex'] = -0x1, this['_direction'] = 'horizontal', this['_space'] = 0x0, this['skin'] = _0x3328a6, this['labels'] = _0x258320;
        }
        ['preinitial' + 'ize']() {
            this['mouseEnabl' + 'ed'] = !0x0;
        }
        ['destroy'](_0x2640f0 = !0x0) {
            super['destroy'](_0x2640f0), this['_items'] && (this['_items']['length'] = 0x0), this['_items'] = null, this['selectHand' + 'ler'] = null;
        }
        ['addItem'](_0x2e3b05, _0x1bd6b5 = !0x0) {
            var _0x26770a = _0x2e3b05, _0x23d788 = this['_items']['length'];
            if (_0x26770a['name'] = 'item' + _0x23d788, this['addChild'](_0x26770a), this['initItems'](), _0x1bd6b5 && _0x23d788 > 0x0) {
                var _0x272c48 = this['_items'][_0x23d788 - 0x1];
                'horizontal' == this['_direction'] ? _0x26770a['x'] = _0x272c48['_x'] + _0x272c48['width'] + this['_space'] : _0x26770a['y'] = _0x272c48['_y'] + _0x272c48['height'] + this['_space'];
            } else
                _0x1bd6b5 && (_0x26770a['x'] = 0x0, _0x26770a['y'] = 0x0);
            return _0x23d788;
        }
        ['delItem'](_0x336d2f, _0x26a833 = !0x0) {
            var _0x330807 = this['_items']['indexOf'](_0x336d2f);
            if (-0x1 != _0x330807) {
                var _0xe97b3c, _0x22bafa = _0x336d2f;
                this['removeChil' + 'd'](_0x22bafa);
                for (var _0x4464a0 = _0x330807 + 0x1, _0x1986c6 = this['_items']['length']; _0x4464a0 < _0x1986c6; _0x4464a0++) {
                    var _0x2553b0 = this['_items'][_0x4464a0];
                    _0x2553b0['name'] = 'item' + (_0x4464a0 - 0x1), _0x26a833 && ('horizontal' == this['_direction'] ? _0x2553b0['x'] -= _0x22bafa['width'] + this['_space'] : _0x2553b0['y'] -= _0x22bafa['height'] + this['_space']);
                }
                if (this['initItems'](), this['_selectedI' + 'ndex'] > -0x1)
                    _0xe97b3c = this['_selectedI' + 'ndex'] < this['_items']['length'] ? this['_selectedI' + 'ndex'] : this['_selectedI' + 'ndex'] - 0x1, this['_selectedI' + 'ndex'] = -0x1, this['selectedIn' + 'dex'] = _0xe97b3c;
            }
        }
        ['_afterInit' + 'ed']() {
            this['initItems']();
        }
        ['initItems']() {
            this['_items'] || (this['_items'] = []), this['_items']['length'] = 0x0;
            for (var _0x54d886 = 0x0; _0x54d886 < 0x2710; _0x54d886++) {
                var _0x27b530 = this['getChildBy' + 'Name']('item' + _0x54d886);
                if (null == _0x27b530)
                    break;
                this['_items']['push'](_0x27b530), _0x27b530['selected'] = _0x54d886 === this['_selectedI' + 'ndex'], _0x27b530['clickHandl' + 'er'] = _0x126068['Handler']['create'](this, this['itemClick'], [_0x54d886], !0x1);
            }
        }
        ['itemClick'](_0x5b171d) {
            this['selectedIn' + 'dex'] = _0x5b171d;
        }
        get ['selectedIn' + 'dex']() {
            return this['_selectedI' + 'ndex'];
        }
        set ['selectedIn' + 'dex'](_0x89dfab) {
            this['_selectedI' + 'ndex'] != _0x89dfab && (this['setSelect'](this['_selectedI' + 'ndex'], !0x1), this['_selectedI' + 'ndex'] = _0x89dfab, this['setSelect'](_0x89dfab, !0x0), this['event'](_0x126068['Event']['CHANGE']), this['selectHand' + 'ler'] && this['selectHand' + 'ler']['runWith'](this['_selectedI' + 'ndex']));
        }
        ['setSelect'](_0x430b5d, _0x5dd980) {
            this['_items'] && _0x430b5d > -0x1 && _0x430b5d < this['_items']['length'] && (this['_items'][_0x430b5d]['selected'] = _0x5dd980);
        }
        get ['skin']() {
            return this['_skin'];
        }
        set ['skin'](_0x40f1c5) {
            this['_skin'] != _0x40f1c5 && (this['_skin'] = _0x40f1c5, this['_skin'] && !_0x126068['Loader']['getRes'](this['_skin']) ? _0x126068['ILaya']['loader']['load'](this['_skin'], _0x126068['Handler']['create'](this, this['_skinLoade' + 'd']), null, _0x126068['Loader']['IMAGE'], 0x1) : this['_skinLoade' + 'd']());
        }
        ['_skinLoade' + 'd']() {
            this['_setLabelC' + 'hanged'](), this['event'](_0x126068['Event']['LOADED']);
        }
        get ['labels']() {
            return this['_labels'];
        }
        set ['labels'](_0x3c9037) {
            if (this['_labels'] != _0x3c9037) {
                if (this['_labels'] = _0x3c9037, this['removeChil' + 'dren'](), this['_setLabelC' + 'hanged'](), this['_labels'])
                    for (var _0x58bb88 = this['_labels']['split'](','), _0x30b5ca = 0x0, _0x570b6a = _0x58bb88['length']; _0x30b5ca < _0x570b6a; _0x30b5ca++) {
                        var _0x488e5f = this['createItem'](this['_skin'], _0x58bb88[_0x30b5ca]);
                        _0x488e5f['name'] = 'item' + _0x30b5ca, this['addChild'](_0x488e5f);
                    }
                this['initItems']();
            }
        }
        ['createItem'](_0x5769be, _0x59ae3d) {
            return null;
        }
        get ['labelColor' + 's']() {
            return this['_labelColo' + 'rs'];
        }
        set ['labelColor' + 's'](_0x4a0807) {
            this['_labelColo' + 'rs'] != _0x4a0807 && (this['_labelColo' + 'rs'] = _0x4a0807, this['_setLabelC' + 'hanged']());
        }
        get ['labelStrok' + 'e']() {
            return this['_labelStro' + 'ke'];
        }
        set ['labelStrok' + 'e'](_0x11f79d) {
            this['_labelStro' + 'ke'] != _0x11f79d && (this['_labelStro' + 'ke'] = _0x11f79d, this['_setLabelC' + 'hanged']());
        }
        get ['labelStrok' + 'eColor']() {
            return this['_labelStro' + 'keColor'];
        }
        set ['labelStrok' + 'eColor'](_0x322f7a) {
            this['_labelStro' + 'keColor'] != _0x322f7a && (this['_labelStro' + 'keColor'] = _0x322f7a, this['_setLabelC' + 'hanged']());
        }
        get ['strokeColo' + 'rs']() {
            return this['_strokeCol' + 'ors'];
        }
        set ['strokeColo' + 'rs'](_0xc29dfc) {
            this['_strokeCol' + 'ors'] != _0xc29dfc && (this['_strokeCol' + 'ors'] = _0xc29dfc, this['_setLabelC' + 'hanged']());
        }
        get ['labelSize']() {
            return this['_labelSize'];
        }
        set ['labelSize'](_0x1c9a22) {
            this['_labelSize'] != _0x1c9a22 && (this['_labelSize'] = _0x1c9a22, this['_setLabelC' + 'hanged']());
        }
        get ['stateNum']() {
            return this['_stateNum'];
        }
        set ['stateNum'](_0x20ec8a) {
            this['_stateNum'] != _0x20ec8a && (this['_stateNum'] = _0x20ec8a, this['_setLabelC' + 'hanged']());
        }
        get ['labelBold']() {
            return this['_labelBold'];
        }
        set ['labelBold'](_0xceff5a) {
            this['_labelBold'] != _0xceff5a && (this['_labelBold'] = _0xceff5a, this['_setLabelC' + 'hanged']());
        }
        get ['labelFont']() {
            return this['_labelFont'];
        }
        set ['labelFont'](_0x5c7ffb) {
            this['_labelFont'] != _0x5c7ffb && (this['_labelFont'] = _0x5c7ffb, this['_setLabelC' + 'hanged']());
        }
        get ['labelPaddi' + 'ng']() {
            return this['_labelPadd' + 'ing'];
        }
        set ['labelPaddi' + 'ng'](_0x12a647) {
            this['_labelPadd' + 'ing'] != _0x12a647 && (this['_labelPadd' + 'ing'] = _0x12a647, this['_setLabelC' + 'hanged']());
        }
        get ['direction']() {
            return this['_direction'];
        }
        set ['direction'](_0x170444) {
            this['_direction'] = _0x170444, this['_setLabelC' + 'hanged']();
        }
        get ['space']() {
            return this['_space'];
        }
        set ['space'](_0x39632e) {
            this['_space'] = _0x39632e, this['_setLabelC' + 'hanged']();
        }
        ['changeLabe' + 'ls']() {
            if (this['_labelChan' + 'ged'] = !0x1, this['_items'])
                for (var _0xb8a14f = 0x0, _0xc79a1f = 0x0, _0x48424f = this['_items']['length']; _0xc79a1f < _0x48424f; _0xc79a1f++) {
                    var _0x36eb60 = this['_items'][_0xc79a1f];
                    this['_skin'] && (_0x36eb60['skin'] = this['_skin']), this['_labelColo' + 'rs'] && (_0x36eb60['labelColor' + 's'] = this['_labelColo' + 'rs']), this['_labelSize'] && (_0x36eb60['labelSize'] = this['_labelSize']), this['_labelStro' + 'ke'] && (_0x36eb60['labelStrok' + 'e'] = this['_labelStro' + 'ke']), this['_labelStro' + 'keColor'] && (_0x36eb60['labelStrok' + 'eColor'] = this['_labelStro' + 'keColor']), this['_strokeCol' + 'ors'] && (_0x36eb60['strokeColo' + 'rs'] = this['_strokeCol' + 'ors']), this['_labelBold'] && (_0x36eb60['labelBold'] = this['_labelBold']), this['_labelPadd' + 'ing'] && (_0x36eb60['labelPaddi' + 'ng'] = this['_labelPadd' + 'ing']), this['_labelAlig' + 'n'] && (_0x36eb60['labelAlign'] = this['_labelAlig' + 'n']), this['_stateNum'] && (_0x36eb60['stateNum'] = this['_stateNum']), this['_labelFont'] && (_0x36eb60['labelFont'] = this['_labelFont']), 'horizontal' === this['_direction'] ? (_0x36eb60['y'] = 0x0, _0x36eb60['x'] = _0xb8a14f, _0xb8a14f += _0x36eb60['width'] + this['_space']) : (_0x36eb60['x'] = 0x0, _0x36eb60['y'] = _0xb8a14f, _0xb8a14f += _0x36eb60['height'] + this['_space']);
                }
            this['_sizeChang' + 'ed']();
        }
        ['commitMeas' + 'ure']() {
            this['runCallLat' + 'er'](this['changeLabe' + 'ls']);
        }
        get ['items']() {
            return this['_items'];
        }
        get ['selection']() {
            return this['_selectedI' + 'ndex'] > -0x1 && this['_selectedI' + 'ndex'] < this['_items']['length'] ? this['_items'][this['_selectedI' + 'ndex']] : null;
        }
        set ['selection'](_0x46c2d4) {
            this['selectedIn' + 'dex'] = this['_items']['indexOf'](_0x46c2d4);
        }
        set ['dataSource'](_0x148af0) {
            this['_dataSourc' + 'e'] = _0x148af0, 'number' == typeof _0x148af0 || 'string' == typeof _0x148af0 ? this['selectedIn' + 'dex'] = parseInt(_0x148af0) : _0x148af0 instanceof Array ? this['labels'] = _0x148af0['join'](',') : super['dataSource'] = _0x148af0;
        }
        get ['dataSource']() {
            return super['dataSource'];
        }
        ['_setLabelC' + 'hanged']() {
            this['_labelChan' + 'ged'] || (this['_labelChan' + 'ged'] = !0x0, this['callLater'](this['changeLabe' + 'ls']));
        }
    }
    _0x126068['ILaya']['regClass'](_0x11f15b), _0x126068['ClassUtils']['regClass']('laya.ui.UI' + 'Group', _0x11f15b), _0x126068['ClassUtils']['regClass']('Laya.UIGro' + 'up', _0x11f15b);
    class _0x165964 extends _0x11f15b {
        ['createItem'](_0x189edb, _0x4202d7) {
            return new _0x240817(_0x189edb, _0x4202d7);
        }
    }
    _0x126068['ILaya']['regClass'](_0x165964), _0x126068['ClassUtils']['regClass']('laya.ui.Ra' + 'dioGroup', _0x165964), _0x126068['ClassUtils']['regClass']('Laya.Radio' + 'Group', _0x165964);
    class _0x5cbd52 extends _0x11f15b {
        ['createItem'](_0x3bf5a8, _0x289ebd) {
            return new _0x37601b(_0x3bf5a8, _0x289ebd);
        }
    }
    _0x126068['ILaya']['regClass'](_0x5cbd52), _0x126068['ClassUtils']['regClass']('laya.ui.Ta' + 'b', _0x5cbd52), _0x126068['ClassUtils']['regClass']('Laya.Tab', _0x5cbd52);
    class _0x154356 extends _0x41b5da {
        constructor() {
            super(...arguments), this['_setIndexH' + 'andler'] = _0x126068['Handler']['create'](this, this['setIndex'], null, !0x1);
        }
        ['setItems'](_0x6ea80a) {
            this['removeChil' + 'dren']();
            for (var _0x1f4f52 = 0x0, _0x597da7 = 0x0, _0x185510 = _0x6ea80a['length']; _0x597da7 < _0x185510; _0x597da7++) {
                var _0x425d67 = _0x6ea80a[_0x597da7];
                _0x425d67 && (_0x425d67['name'] = 'item' + _0x1f4f52, this['addChild'](_0x425d67), _0x1f4f52++);
            }
            this['initItems']();
        }
        ['addItem'](_0x4cc67d) {
            _0x4cc67d['name'] = 'item' + this['_items']['length'], this['addChild'](_0x4cc67d), this['initItems']();
        }
        ['_afterInit' + 'ed']() {
            this['initItems']();
        }
        ['initItems']() {
            this['_items'] = [];
            for (var _0x20d566 = 0x0; _0x20d566 < 0x2710; _0x20d566++) {
                var _0x5e0674 = this['getChildBy' + 'Name']('item' + _0x20d566);
                if (null == _0x5e0674)
                    break;
                this['_items']['push'](_0x5e0674), _0x5e0674['visible'] = _0x20d566 == this['_selectedI' + 'ndex'];
            }
        }
        get ['selectedIn' + 'dex']() {
            return this['_selectedI' + 'ndex'];
        }
        set ['selectedIn' + 'dex'](_0x5b7cbb) {
            this['_selectedI' + 'ndex'] != _0x5b7cbb && (this['setSelect'](this['_selectedI' + 'ndex'], !0x1), this['_selectedI' + 'ndex'] = _0x5b7cbb, this['setSelect'](this['_selectedI' + 'ndex'], !0x0));
        }
        ['setSelect'](_0x1a480d, _0x176920) {
            this['_items'] && _0x1a480d > -0x1 && _0x1a480d < this['_items']['length'] && (this['_items'][_0x1a480d]['visible'] = _0x176920);
        }
        get ['selection']() {
            return this['_selectedI' + 'ndex'] > -0x1 && this['_selectedI' + 'ndex'] < this['_items']['length'] ? this['_items'][this['_selectedI' + 'ndex']] : null;
        }
        set ['selection'](_0x16a4e3) {
            this['selectedIn' + 'dex'] = this['_items']['indexOf'](_0x16a4e3);
        }
        get ['setIndexHa' + 'ndler']() {
            return this['_setIndexH' + 'andler'];
        }
        set ['setIndexHa' + 'ndler'](_0x2019cf) {
            this['_setIndexH' + 'andler'] = _0x2019cf;
        }
        ['setIndex'](_0x4fa899) {
            this['selectedIn' + 'dex'] = _0x4fa899;
        }
        get ['items']() {
            return this['_items'];
        }
        set ['dataSource'](_0x1bf562) {
            if (this['_dataSourc' + 'e'] = _0x1bf562, 'number' == typeof _0x1bf562 || 'string' == typeof _0x1bf562)
                this['selectedIn' + 'dex'] = parseInt(_0x1bf562);
            else {
                for (var _0x2ba1a0 in this['_dataSourc' + 'e'])
                    _0x2ba1a0 in this && (this[_0x2ba1a0] = this['_dataSourc' + 'e'][_0x2ba1a0]);
            }
        }
        get ['dataSource']() {
            return super['dataSource'];
        }
    }
    _0x126068['ILaya']['regClass'](_0x154356), _0x126068['ClassUtils']['regClass']('laya.ui.Vi' + 'ewStack', _0x154356), _0x126068['ClassUtils']['regClass']('Laya.ViewS' + 'tack', _0x154356);
    class _0x369135 extends _0x24d44a {
        constructor(_0x4690d0 = '') {
            super(), this['text'] = _0x4690d0, this['skin'] = this['skin'];
        }
        ['preinitial' + 'ize']() {
            this['mouseEnabl' + 'ed'] = !0x0;
        }
        ['destroy'](_0x4551de = !0x0) {
            super['destroy'](_0x4551de), this['_bg'] && this['_bg']['destroy'](), this['_bg'] = null;
        }
        ['createChil' + 'dren']() {
            this['addChild'](this['_tf'] = new _0x126068['Input']()), this['_tf']['padding'] = _0x5393ca['inputLabel' + 'Padding'], this['_tf']['on'](_0x126068['Event']['INPUT'], this, this['_onInput']), this['_tf']['on'](_0x126068['Event']['ENTER'], this, this['_onEnter']), this['_tf']['on'](_0x126068['Event']['BLUR'], this, this['_onBlur']), this['_tf']['on'](_0x126068['Event']['FOCUS'], this, this['_onFocus']);
        }
        ['_onFocus']() {
            this['event'](_0x126068['Event']['FOCUS'], this);
        }
        ['_onBlur']() {
            this['event'](_0x126068['Event']['BLUR'], this);
        }
        ['_onInput']() {
            this['event'](_0x126068['Event']['INPUT'], this);
        }
        ['_onEnter']() {
            this['event'](_0x126068['Event']['ENTER'], this);
        }
        ['initialize']() {
            this['width'] = 0x80, this['height'] = 0x16;
        }
        get ['bg']() {
            return this['_bg'];
        }
        set ['bg'](_0x20cd5e) {
            this['graphics'] = this['_bg'] = _0x20cd5e;
        }
        get ['skin']() {
            return this['_skin'];
        }
        set ['skin'](_0x155f91) {
            this['_skin'] != _0x155f91 && (this['_skin'] = _0x155f91, this['_skin'] && !_0x126068['Loader']['getRes'](this['_skin']) ? _0x126068['ILaya']['loader']['load'](this['_skin'], _0x126068['Handler']['create'](this, this['_skinLoade' + 'd']), null, _0x126068['Loader']['IMAGE'], 0x1) : this['_skinLoade' + 'd']());
        }
        ['_skinLoade' + 'd']() {
            this['_bg'] || (this['graphics'] = this['_bg'] = new _0x38f875()), this['_bg']['source'] = _0x126068['Loader']['getRes'](this['_skin']), this['_width'] && (this['_bg']['width'] = this['_width']), this['_height'] && (this['_bg']['height'] = this['_height']), this['_sizeChang' + 'ed'](), this['event'](_0x126068['Event']['LOADED']);
        }
        get ['sizeGrid']() {
            return this['_bg'] && this['_bg']['sizeGrid'] ? this['_bg']['sizeGrid']['join'](',') : null;
        }
        set ['sizeGrid'](_0x408b22) {
            this['_bg'] || (this['graphics'] = this['_bg'] = new _0x38f875()), this['_bg']['sizeGrid'] = _0x1c3411['fillArray'](_0x5393ca['defaultSiz' + 'eGrid'], _0x408b22, Number);
        }
        set ['text'](_0x285275) {
            this['_tf']['text'] != _0x285275 && (_0x285275 += '', this['_tf']['text'] = _0x285275, this['event'](_0x126068['Event']['CHANGE']));
        }
        get ['text']() {
            return super['text'];
        }
        set ['width'](_0x18b45d) {
            super['width'] = _0x18b45d, this['_bg'] && (this['_bg']['width'] = _0x18b45d);
        }
        get ['width']() {
            return super['width'];
        }
        set ['height'](_0x1ab942) {
            super['height'] = _0x1ab942, this['_bg'] && (this['_bg']['height'] = _0x1ab942);
        }
        get ['height']() {
            return super['height'];
        }
        get ['multiline']() {
            return this['_tf']['multiline'];
        }
        set ['multiline'](_0x1a1f88) {
            this['_tf']['multiline'] = _0x1a1f88;
        }
        set ['editable'](_0x2f7a6a) {
            this['_tf']['editable'] = _0x2f7a6a;
        }
        get ['editable']() {
            return this['_tf']['editable'];
        }
        ['select']() {
            this['_tf']['select']();
        }
        get ['restrict']() {
            return this['_tf']['restrict'];
        }
        set ['restrict'](_0x2ac346) {
            this['_tf']['restrict'] = _0x2ac346;
        }
        get ['prompt']() {
            return this['_tf']['prompt'];
        }
        set ['prompt'](_0x22c3c0) {
            this['_tf']['prompt'] = _0x22c3c0;
        }
        get ['promptColo' + 'r']() {
            return this['_tf']['promptColo' + 'r'];
        }
        set ['promptColo' + 'r'](_0x3e73ea) {
            this['_tf']['promptColo' + 'r'] = _0x3e73ea;
        }
        get ['maxChars']() {
            return this['_tf']['maxChars'];
        }
        set ['maxChars'](_0x3e7301) {
            this['_tf']['maxChars'] = _0x3e7301;
        }
        get ['focus']() {
            return this['_tf']['focus'];
        }
        set ['focus'](_0x30f0d6) {
            this['_tf']['focus'] = _0x30f0d6;
        }
        get ['type']() {
            return this['_tf']['type'];
        }
        set ['type'](_0x4e222b) {
            this['_tf']['type'] = _0x4e222b;
        }
        ['setSelecti' + 'on'](_0x332a27, _0x8d9a1b) {
            this['_tf']['setSelecti' + 'on'](_0x332a27, _0x8d9a1b);
        }
    }
    _0x126068['ILaya']['regClass'](_0x369135), _0x126068['ClassUtils']['regClass']('laya.ui.Te' + 'xtInput', _0x369135), _0x126068['ClassUtils']['regClass']('Laya.TextI' + 'nput', _0x369135);
    class _0x35fb98 extends _0x369135 {
        constructor(_0x574974 = '') {
            super(_0x574974), this['on'](_0x126068['Event']['CHANGE'], this, this['_onTextCha' + 'nge']);
        }
        ['_onTextCha' + 'nge']() {
            this['callLater'](this['changeScro' + 'll']);
        }
        ['destroy'](_0xedcee6 = !0x0) {
            this['_vScrollBa' + 'r'] && this['_vScrollBa' + 'r']['destroy'](), this['_hScrollBa' + 'r'] && this['_hScrollBa' + 'r']['destroy'](), this['_vScrollBa' + 'r'] = null, this['_hScrollBa' + 'r'] = null, super['destroy'](_0xedcee6);
        }
        ['initialize']() {
            this['width'] = 0xb4, this['height'] = 0x96, this['_tf']['wordWrap'] = !0x0, this['multiline'] = !0x0;
        }
        set ['width'](_0x282fd6) {
            super['width'] = _0x282fd6, this['callLater'](this['changeScro' + 'll']);
        }
        get ['width']() {
            return super['width'];
        }
        set ['height'](_0x50a359) {
            super['height'] = _0x50a359, this['callLater'](this['changeScro' + 'll']);
        }
        get ['height']() {
            return super['height'];
        }
        get ['vScrollBar' + 'Skin']() {
            return this['_vScrollBa' + 'r'] ? this['_vScrollBa' + 'r']['skin'] : null;
        }
        set ['vScrollBar' + 'Skin'](_0xa73f3f) {
            null == this['_vScrollBa' + 'r'] && (this['addChild'](this['_vScrollBa' + 'r'] = new _0xc98be5()), this['_vScrollBa' + 'r']['on'](_0x126068['Event']['CHANGE'], this, this['onVBarChan' + 'ged']), this['_vScrollBa' + 'r']['target'] = this['_tf'], this['callLater'](this['changeScro' + 'll'])), this['_vScrollBa' + 'r']['skin'] = _0xa73f3f;
        }
        get ['hScrollBar' + 'Skin']() {
            return this['_hScrollBa' + 'r'] ? this['_hScrollBa' + 'r']['skin'] : null;
        }
        set ['hScrollBar' + 'Skin'](_0x4e22ae) {
            null == this['_hScrollBa' + 'r'] && (this['addChild'](this['_hScrollBa' + 'r'] = new _0x2fcd50()), this['_hScrollBa' + 'r']['on'](_0x126068['Event']['CHANGE'], this, this['onHBarChan' + 'ged']), this['_hScrollBa' + 'r']['mouseWheel' + 'Enable'] = !0x1, this['_hScrollBa' + 'r']['target'] = this['_tf'], this['callLater'](this['changeScro' + 'll'])), this['_hScrollBa' + 'r']['skin'] = _0x4e22ae;
        }
        ['onVBarChan' + 'ged'](_0x43b9ff) {
            this['_tf']['scrollY'] != this['_vScrollBa' + 'r']['value'] && (this['_tf']['scrollY'] = this['_vScrollBa' + 'r']['value']);
        }
        ['onHBarChan' + 'ged'](_0x13ee81) {
            this['_tf']['scrollX'] != this['_hScrollBa' + 'r']['value'] && (this['_tf']['scrollX'] = this['_hScrollBa' + 'r']['value']);
        }
        get ['vScrollBar']() {
            return this['_vScrollBa' + 'r'];
        }
        get ['hScrollBar']() {
            return this['_hScrollBa' + 'r'];
        }
        get ['maxScrollY']() {
            return this['_tf']['maxScrollY'];
        }
        get ['scrollY']() {
            return this['_tf']['scrollY'];
        }
        get ['maxScrollX']() {
            return this['_tf']['maxScrollX'];
        }
        get ['scrollX']() {
            return this['_tf']['scrollX'];
        }
        ['changeScro' + 'll']() {
            var _0x23c4bf = this['_vScrollBa' + 'r'] && this['_tf']['maxScrollY'] > 0x0, _0x18a960 = this['_hScrollBa' + 'r'] && this['_tf']['maxScrollX'] > 0x0, _0x29ffb4 = _0x23c4bf ? this['_width'] - this['_vScrollBa' + 'r']['width'] : this['_width'], _0x2fafa7 = _0x18a960 ? this['_height'] - this['_hScrollBa' + 'r']['height'] : this['_height'], _0x348fe2 = this['_tf']['padding'] || _0x5393ca['labelPaddi' + 'ng'];
            this['_tf']['width'] = _0x29ffb4, this['_tf']['height'] = _0x2fafa7, this['_vScrollBa' + 'r'] && (this['_vScrollBa' + 'r']['x'] = this['_width'] - this['_vScrollBa' + 'r']['width'] - _0x348fe2[0x2], this['_vScrollBa' + 'r']['y'] = _0x348fe2[0x1], this['_vScrollBa' + 'r']['height'] = this['_height'] - (_0x18a960 ? this['_hScrollBa' + 'r']['height'] : 0x0) - _0x348fe2[0x1] - _0x348fe2[0x3], this['_vScrollBa' + 'r']['scrollSize'] = 0x1, this['_vScrollBa' + 'r']['thumbPerce' + 'nt'] = _0x2fafa7 / Math['max'](this['_tf']['textHeight'], _0x2fafa7), this['_vScrollBa' + 'r']['setScroll'](0x1, this['_tf']['maxScrollY'], this['_tf']['scrollY']), this['_vScrollBa' + 'r']['visible'] = _0x23c4bf), this['_hScrollBa' + 'r'] && (this['_hScrollBa' + 'r']['x'] = _0x348fe2[0x0], this['_hScrollBa' + 'r']['y'] = this['_height'] - this['_hScrollBa' + 'r']['height'] - _0x348fe2[0x3], this['_hScrollBa' + 'r']['width'] = this['_width'] - (_0x23c4bf ? this['_vScrollBa' + 'r']['width'] : 0x0) - _0x348fe2[0x0] - _0x348fe2[0x2], this['_hScrollBa' + 'r']['scrollSize'] = Math['max'](0.033 * _0x29ffb4, 0x1), this['_hScrollBa' + 'r']['thumbPerce' + 'nt'] = _0x29ffb4 / Math['max'](this['_tf']['textWidth'], _0x29ffb4), this['_hScrollBa' + 'r']['setScroll'](0x0, this['maxScrollX'], this['scrollX']), this['_hScrollBa' + 'r']['visible'] = _0x18a960);
        }
        ['scrollTo'](_0x48ede2) {
            this['commitMeas' + 'ure'](), this['_tf']['scrollY'] = _0x48ede2;
        }
    }
    _0x126068['ILaya']['regClass'](_0x35fb98), _0x126068['ClassUtils']['regClass']('laya.ui.Te' + 'xtArea', _0x35fb98), _0x126068['ClassUtils']['regClass']('Laya.TextA' + 'rea', _0x35fb98);
    class _0x3e0697 extends _0x41b5da {
        constructor() {
            super(...arguments), this['_oldW'] = 0x0, this['_oldH'] = 0x0;
        }
        ['onEnable']() {
            _0x126068['ILaya']['stage']['on']('resize', this, this['onResize']), this['onResize']();
        }
        ['onDisable']() {
            _0x126068['ILaya']['stage']['off']('resize', this, this['onResize']);
        }
        ['onResize']() {
            let _0x23988d = _0x126068['ILaya']['stage'];
            if (this['width'] > 0x0 && this['height'] > 0x0) {
                var _0xfcda91 = Math['min'](_0x23988d['width'] / this['_oldW'], _0x23988d['height'] / this['_oldH']);
                super['width'] = _0x23988d['width'], super['height'] = _0x23988d['height'], this['scale'](_0xfcda91, _0xfcda91);
            }
        }
        set ['width'](_0x431608) {
            super['width'] = _0x431608, this['_oldW'] = _0x431608;
        }
        get ['width']() {
            return super['width'];
        }
        set ['height'](_0x1b7f50) {
            super['height'] = _0x1b7f50, this['_oldH'] = _0x1b7f50;
        }
        get ['height']() {
            return super['height'];
        }
    }
    _0x126068['ILaya']['regClass'](_0x3e0697), _0x126068['ClassUtils']['regClass']('laya.ui.Sc' + 'aleBox', _0x3e0697), _0x126068['ClassUtils']['regClass']('Laya.Scale' + 'Box', _0x3e0697);
    class _0xf7bd27 extends _0x184c22 {
        constructor(_0x268a1b = null) {
            super(_0x268a1b), this['isVertical'] = !0x1;
        }
    }
    _0x126068['ILaya']['regClass'](_0xf7bd27), _0x126068['ClassUtils']['regClass']('laya.ui.HS' + 'lider', _0xf7bd27), _0x126068['ClassUtils']['regClass']('Laya.HSlid' + 'er', _0xf7bd27);
    class _0x214e15 extends _0x41b5da {
        constructor() {
            super(), this['_usedCache'] = null, this['_elasticEn' + 'abled'] = !0x1, this['width'] = this['height'] = 0x64;
        }
        ['destroy'](_0x4b0ca3 = !0x0) {
            super['destroy'](_0x4b0ca3), this['_content'] && this['_content']['destroy'](_0x4b0ca3), this['_vScrollBa' + 'r'] && this['_vScrollBa' + 'r']['destroy'](_0x4b0ca3), this['_hScrollBa' + 'r'] && this['_hScrollBa' + 'r']['destroy'](_0x4b0ca3), this['_vScrollBa' + 'r'] = null, this['_hScrollBa' + 'r'] = null, this['_content'] = null;
        }
        ['destroyChi' + 'ldren']() {
            this['_content']['destroyChi' + 'ldren']();
        }
        ['createChil' + 'dren']() {
            super['addChild'](this['_content'] = new _0x41b5da());
        }
        ['addChild'](_0x338201) {
            return _0x338201['on'](_0x126068['Event']['RESIZE'], this, this['onResize']), this['_setScroll' + 'Changed'](), this['_content']['addChild'](_0x338201);
        }
        ['onResize']() {
            this['_setScroll' + 'Changed']();
        }
        ['addChildAt'](_0x2ab83b, _0x3cad13) {
            return _0x2ab83b['on'](_0x126068['Event']['RESIZE'], this, this['onResize']), this['_setScroll' + 'Changed'](), this['_content']['addChildAt'](_0x2ab83b, _0x3cad13);
        }
        ['removeChil' + 'd'](_0x26a1f0) {
            return _0x26a1f0['off'](_0x126068['Event']['RESIZE'], this, this['onResize']), this['_setScroll' + 'Changed'](), this['_content']['removeChil' + 'd'](_0x26a1f0);
        }
        ['removeChil' + 'dAt'](_0x478655) {
            return this['getChildAt'](_0x478655)['off'](_0x126068['Event']['RESIZE'], this, this['onResize']), this['_setScroll' + 'Changed'](), this['_content']['removeChil' + 'dAt'](_0x478655);
        }
        ['removeChil' + 'dren'](_0x551870 = 0x0, _0x4936fe = 0x7fffffff) {
            return this['_content']['removeChil' + 'dren'](_0x551870, _0x4936fe), this['_setScroll' + 'Changed'](), this;
        }
        ['getChildAt'](_0x2454ab) {
            return this['_content']['getChildAt'](_0x2454ab);
        }
        ['getChildBy' + 'Name'](_0x3d461b) {
            return this['_content']['getChildBy' + 'Name'](_0x3d461b);
        }
        ['getChildIn' + 'dex'](_0x51ca99) {
            return this['_content']['getChildIn' + 'dex'](_0x51ca99);
        }
        get ['numChildre' + 'n']() {
            return this['_content']['numChildre' + 'n'];
        }
        ['changeScro' + 'll']() {
            this['_scrollCha' + 'nged'] = !0x1;
            var _0x1c65d7 = this['contentWid' + 'th'] || 0x1, _0x5f0458 = this['contentHei' + 'ght'] || 0x1, _0x339b50 = this['_vScrollBa' + 'r'], _0x5621b4 = this['_hScrollBa' + 'r'], _0x388b79 = _0x339b50 && _0x5f0458 > this['_height'], _0xb666e8 = _0x5621b4 && _0x1c65d7 > this['_width'], _0x1b3029 = _0x388b79 ? this['_width'] - _0x339b50['width'] : this['_width'], _0x5842ff = _0xb666e8 ? this['_height'] - _0x5621b4['height'] : this['_height'];
            _0x339b50 && (_0x339b50['x'] = this['_width'] - _0x339b50['width'], _0x339b50['y'] = 0x0, _0x339b50['height'] = this['_height'] - (_0xb666e8 ? _0x5621b4['height'] : 0x0), _0x339b50['scrollSize'] = Math['max'](0.033 * this['_height'], 0x1), _0x339b50['thumbPerce' + 'nt'] = _0x5842ff / _0x5f0458, _0x339b50['setScroll'](0x0, _0x5f0458 - _0x5842ff, _0x339b50['value'])), _0x5621b4 && (_0x5621b4['x'] = 0x0, _0x5621b4['y'] = this['_height'] - _0x5621b4['height'], _0x5621b4['width'] = this['_width'] - (_0x388b79 ? _0x339b50['width'] : 0x0), _0x5621b4['scrollSize'] = Math['max'](0.033 * this['_width'], 0x1), _0x5621b4['thumbPerce' + 'nt'] = _0x1b3029 / _0x1c65d7, _0x5621b4['setScroll'](0x0, _0x1c65d7 - _0x1b3029, _0x5621b4['value']));
        }
        ['_sizeChang' + 'ed']() {
            super['_sizeChang' + 'ed'](), this['setContent' + 'Size'](this['_width'], this['_height']);
        }
        get ['contentWid' + 'th']() {
            for (var _0x1b0848 = 0x0, _0x41c3a1 = this['_content']['numChildre' + 'n'] - 0x1; _0x41c3a1 > -0x1; _0x41c3a1--) {
                var _0x2e7b4c = this['_content']['getChildAt'](_0x41c3a1);
                _0x1b0848 = Math['max'](_0x2e7b4c['_x'] + _0x2e7b4c['width'] * _0x2e7b4c['scaleX'] - _0x2e7b4c['pivotX'], _0x1b0848);
            }
            return _0x1b0848;
        }
        get ['contentHei' + 'ght']() {
            for (var _0x15ec45 = 0x0, _0x9caef6 = this['_content']['numChildre' + 'n'] - 0x1; _0x9caef6 > -0x1; _0x9caef6--) {
                var _0xcace21 = this['_content']['getChildAt'](_0x9caef6);
                _0x15ec45 = Math['max'](_0xcace21['_y'] + _0xcace21['height'] * _0xcace21['scaleY'] - _0xcace21['pivotY'], _0x15ec45);
            }
            return _0x15ec45;
        }
        ['setContent' + 'Size'](_0x336bed, _0xb2814f) {
            var _0x43b433 = this['_content'];
            _0x43b433['width'] = _0x336bed, _0x43b433['height'] = _0xb2814f, _0x43b433['_style']['scrollRect'] || (_0x43b433['scrollRect'] = _0x126068['Rectangle']['create']()), _0x43b433['_style']['scrollRect']['setTo'](0x0, 0x0, _0x336bed, _0xb2814f), _0x43b433['scrollRect'] = _0x43b433['scrollRect'];
        }
        set ['width'](_0x165168) {
            super['width'] = _0x165168, this['_setScroll' + 'Changed']();
        }
        get ['width']() {
            return super['width'];
        }
        set ['height'](_0x1de0bb) {
            super['height'] = _0x1de0bb, this['_setScroll' + 'Changed']();
        }
        get ['height']() {
            return super['height'];
        }
        get ['vScrollBar' + 'Skin']() {
            return this['_vScrollBa' + 'r'] ? this['_vScrollBa' + 'r']['skin'] : null;
        }
        set ['vScrollBar' + 'Skin'](_0x40e0a7) {
            null == this['_vScrollBa' + 'r'] && (super['addChild'](this['_vScrollBa' + 'r'] = new _0xc98be5()), this['_vScrollBa' + 'r']['on'](_0x126068['Event']['CHANGE'], this, this['onScrollBa' + 'rChange'], [this['_vScrollBa' + 'r']]), this['_vScrollBa' + 'r']['target'] = this['_content'], this['_vScrollBa' + 'r']['elasticDis' + 'tance'] = this['_elasticEn' + 'abled'] ? 0xc8 : 0x0, this['_setScroll' + 'Changed']()), this['_vScrollBa' + 'r']['skin'] = _0x40e0a7;
        }
        get ['hScrollBar' + 'Skin']() {
            return this['_hScrollBa' + 'r'] ? this['_hScrollBa' + 'r']['skin'] : null;
        }
        set ['hScrollBar' + 'Skin'](_0x3ba304) {
            null == this['_hScrollBa' + 'r'] && (super['addChild'](this['_hScrollBa' + 'r'] = new _0x2fcd50()), this['_hScrollBa' + 'r']['on'](_0x126068['Event']['CHANGE'], this, this['onScrollBa' + 'rChange'], [this['_hScrollBa' + 'r']]), this['_hScrollBa' + 'r']['target'] = this['_content'], this['_hScrollBa' + 'r']['elasticDis' + 'tance'] = this['_elasticEn' + 'abled'] ? 0xc8 : 0x0, this['_setScroll' + 'Changed']()), this['_hScrollBa' + 'r']['skin'] = _0x3ba304;
        }
        get ['vScrollBar']() {
            return this['_vScrollBa' + 'r'];
        }
        get ['hScrollBar']() {
            return this['_hScrollBa' + 'r'];
        }
        get ['content']() {
            return this['_content'];
        }
        ['onScrollBa' + 'rChange'](_0x10322d) {
            var _0x36acca = this['_content']['_style']['scrollRect'];
            if (_0x36acca) {
                var _0x21363a = Math['round'](_0x10322d['value']);
                _0x10322d['isVertical'] ? _0x36acca['y'] = _0x21363a : _0x36acca['x'] = _0x21363a, this['_content']['scrollRect'] = _0x36acca;
            }
        }
        ['scrollTo'](_0x2f2caa = 0x0, _0x2573e3 = 0x0) {
            this['vScrollBar'] && (this['vScrollBar']['value'] = _0x2573e3), this['hScrollBar'] && (this['hScrollBar']['value'] = _0x2f2caa);
        }
        ['refresh']() {
            this['changeScro' + 'll']();
        }
        set ['cacheAs'](_0x2f89d0) {
            super['cacheAs'] = _0x2f89d0, this['_usedCache'] = null, 'none' !== _0x2f89d0 ? (this['_hScrollBa' + 'r'] && this['_hScrollBa' + 'r']['on'](_0x126068['Event']['START'], this, this['onScrollSt' + 'art']), this['_vScrollBa' + 'r'] && this['_vScrollBa' + 'r']['on'](_0x126068['Event']['START'], this, this['onScrollSt' + 'art'])) : (this['_hScrollBa' + 'r'] && this['_hScrollBa' + 'r']['off'](_0x126068['Event']['START'], this, this['onScrollSt' + 'art']), this['_vScrollBa' + 'r'] && this['_vScrollBa' + 'r']['off'](_0x126068['Event']['START'], this, this['onScrollSt' + 'art']));
        }
        get ['cacheAs']() {
            return super['cacheAs'];
        }
        get ['elasticEna' + 'bled']() {
            return this['_elasticEn' + 'abled'];
        }
        set ['elasticEna' + 'bled'](_0x33edc0) {
            this['_elasticEn' + 'abled'] = _0x33edc0, this['_vScrollBa' + 'r'] && (this['_vScrollBa' + 'r']['elasticDis' + 'tance'] = _0x33edc0 ? 0xc8 : 0x0), this['_hScrollBa' + 'r'] && (this['_hScrollBa' + 'r']['elasticDis' + 'tance'] = _0x33edc0 ? 0xc8 : 0x0);
        }
        ['onScrollSt' + 'art']() {
            this['_usedCache'] || (this['_usedCache'] = super['cacheAs']), super['cacheAs'] = 'none', this['_hScrollBa' + 'r'] && this['_hScrollBa' + 'r']['once'](_0x126068['Event']['END'], this, this['onScrollEn' + 'd']), this['_vScrollBa' + 'r'] && this['_vScrollBa' + 'r']['once'](_0x126068['Event']['END'], this, this['onScrollEn' + 'd']);
        }
        ['onScrollEn' + 'd']() {
            super['cacheAs'] = this['_usedCache'];
        }
        ['_setScroll' + 'Changed']() {
            this['_scrollCha' + 'nged'] || (this['_scrollCha' + 'nged'] = !0x0, this['callLater'](this['changeScro' + 'll']));
        }
    }
    _0x126068['ILaya']['regClass'](_0x214e15), _0x126068['ClassUtils']['regClass']('laya.ui.Pa' + 'nel', _0x214e15), _0x126068['ClassUtils']['regClass']('Laya.Panel', _0x214e15);
    class _0x4d7376 extends _0x184c22 {
    }
    _0x126068['ILaya']['regClass'](_0x4d7376), _0x126068['ClassUtils']['regClass']('laya.ui.VS' + 'lider', _0x4d7376), _0x126068['ClassUtils']['regClass']('Laya.VSlid' + 'er', _0x4d7376);
    class _0x3c2cdd extends _0x41b5da {
        constructor() {
            super(), this['_spaceLeft'] = 0xa, this['_spaceBott' + 'om'] = 0x0, this['_keepStatu' + 's'] = !0x0, this['width'] = this['height'] = 0xc8;
        }
        ['destroy'](_0x147848 = !0x0) {
            super['destroy'](_0x147848), this['_list'] && this['_list']['destroy'](_0x147848), this['_list'] = null, this['_source'] = null, this['_renderHan' + 'dler'] = null;
        }
        ['createChil' + 'dren']() {
            this['addChild'](this['_list'] = new _0x5d66c9()), this['_list']['renderHand' + 'ler'] = _0x126068['Handler']['create'](this, this['renderItem'], null, !0x1), this['_list']['repeatX'] = 0x1, this['_list']['on'](_0x126068['Event']['CHANGE'], this, this['onListChan' + 'ge']);
        }
        ['onListChan' + 'ge'](_0x2db83c = null) {
            this['event'](_0x126068['Event']['CHANGE']);
        }
        get ['keepStatus']() {
            return this['_keepStatu' + 's'];
        }
        set ['keepStatus'](_0x3829b8) {
            this['_keepStatu' + 's'] = _0x3829b8;
        }
        get ['array']() {
            return this['_list']['array'];
        }
        set ['array'](_0x196fce) {
            this['_keepStatu' + 's'] && this['_list']['array'] && _0x196fce && this['parseOpenS' + 'tatus'](this['_list']['array'], _0x196fce), this['_source'] = _0x196fce, this['_list']['array'] = this['getArray']();
        }
        get ['source']() {
            return this['_source'];
        }
        get ['list']() {
            return this['_list'];
        }
        get ['itemRender']() {
            return this['_list']['itemRender'];
        }
        set ['itemRender'](_0x35c2dd) {
            this['_list']['itemRender'] = _0x35c2dd;
        }
        get ['scrollBarS' + 'kin']() {
            return this['_list']['vScrollBar' + 'Skin'];
        }
        set ['scrollBarS' + 'kin'](_0x2ec685) {
            this['_list']['vScrollBar' + 'Skin'] = _0x2ec685;
        }
        get ['scrollBar']() {
            return this['_list']['scrollBar'];
        }
        get ['mouseHandl' + 'er']() {
            return this['_list']['mouseHandl' + 'er'];
        }
        set ['mouseHandl' + 'er'](_0x4891ee) {
            this['_list']['mouseHandl' + 'er'] = _0x4891ee;
        }
        get ['renderHand' + 'ler']() {
            return this['_renderHan' + 'dler'];
        }
        set ['renderHand' + 'ler'](_0x243f67) {
            this['_renderHan' + 'dler'] = _0x243f67;
        }
        get ['spaceLeft']() {
            return this['_spaceLeft'];
        }
        set ['spaceLeft'](_0x2275e5) {
            this['_spaceLeft'] = _0x2275e5;
        }
        get ['spaceBotto' + 'm']() {
            return this['_list']['spaceY'];
        }
        set ['spaceBotto' + 'm'](_0x525366) {
            this['_list']['spaceY'] = _0x525366;
        }
        get ['selectedIn' + 'dex']() {
            return this['_list']['selectedIn' + 'dex'];
        }
        set ['selectedIn' + 'dex'](_0x15e74d) {
            this['_list']['selectedIn' + 'dex'] = _0x15e74d;
        }
        get ['selectedIt' + 'em']() {
            return this['_list']['selectedIt' + 'em'];
        }
        set ['selectedIt' + 'em'](_0xda4c45) {
            this['_list']['selectedIt' + 'em'] = _0xda4c45;
        }
        set ['width'](_0x23888a) {
            super['width'] = _0x23888a, this['_list']['width'] = _0x23888a;
        }
        get ['width']() {
            return super['width'];
        }
        set ['height'](_0x252523) {
            super['height'] = _0x252523, this['_list']['height'] = _0x252523;
        }
        get ['height']() {
            return super['height'];
        }
        ['getArray']() {
            var _0x4cd074 = [];
            for (let _0x11d6c0 in this['_source']) {
                let _0x2ac24c = this['_source'][_0x11d6c0];
                this['getParentO' + 'penStatus'](_0x2ac24c) && (_0x2ac24c['x'] = this['_spaceLeft'] * this['getDepth'](_0x2ac24c), _0x4cd074['push'](_0x2ac24c));
            }
            return _0x4cd074;
        }
        ['getDepth'](_0x21ef5e, _0x48c0fd = 0x0) {
            return null == _0x21ef5e['nodeParent'] ? _0x48c0fd : this['getDepth'](_0x21ef5e['nodeParent'], _0x48c0fd + 0x1);
        }
        ['getParentO' + 'penStatus'](_0x396e47) {
            var _0x3c8453 = _0x396e47['nodeParent'];
            return null == _0x3c8453 || !!_0x3c8453['isOpen'] && (null == _0x3c8453['nodeParent'] || this['getParentO' + 'penStatus'](_0x3c8453));
        }
        ['renderItem'](_0x580fab, _0x4f1683) {
            var _0x1d423b = _0x580fab['dataSource'];
            if (_0x1d423b) {
                _0x580fab['left'] = _0x1d423b['x'];
                var _0x562cdc = _0x580fab['getChildBy' + 'Name']('arrow');
                _0x562cdc && (_0x1d423b['hasChild'] ? (_0x562cdc['visible'] = !0x0, _0x562cdc['index'] = _0x1d423b['isOpen'] ? 0x1 : 0x0, _0x562cdc['tag'] = _0x4f1683, _0x562cdc['off'](_0x126068['Event']['CLICK'], this, this['onArrowCli' + 'ck']), _0x562cdc['on'](_0x126068['Event']['CLICK'], this, this['onArrowCli' + 'ck'])) : _0x562cdc['visible'] = !0x1);
                var _0x20f7f5 = _0x580fab['getChildBy' + 'Name']('folder');
                _0x20f7f5 && (0x2 == _0x20f7f5['clipY'] ? _0x20f7f5['index'] = _0x1d423b['isDirector' + 'y'] ? 0x0 : 0x1 : _0x20f7f5['index'] = _0x1d423b['isDirector' + 'y'] ? _0x1d423b['isOpen'] ? 0x1 : 0x0 : 0x2), this['_renderHan' + 'dler'] && this['_renderHan' + 'dler']['runWith']([
                    _0x580fab,
                    _0x4f1683
                ]);
            }
        }
        ['onArrowCli' + 'ck'](_0x561ac2) {
            var _0xd1faa3 = _0x561ac2['currentTar' + 'get']['tag'];
            this['_list']['array'][_0xd1faa3]['isOpen'] = !this['_list']['array'][_0xd1faa3]['isOpen'], this['event'](_0x126068['Event']['OPEN']), this['_list']['array'] = this['getArray']();
        }
        ['setItemSta' + 'te'](_0x5437dd, _0x589593) {
            this['_list']['array'][_0x5437dd] && (this['_list']['array'][_0x5437dd]['isOpen'] = _0x589593, this['_list']['array'] = this['getArray']());
        }
        ['fresh']() {
            this['_list']['array'] = this['getArray'](), this['repaint']();
        }
        set ['dataSource'](_0x52276f) {
            this['_dataSourc' + 'e'] = _0x52276f, super['dataSource'] = _0x52276f;
        }
        get ['dataSource']() {
            return super['dataSource'];
        }
        set ['xml'](_0x36d835) {
            var _0x46c91f = [];
            this['parseXml'](_0x36d835['childNodes'][0x0], _0x46c91f, null, !0x0), this['array'] = _0x46c91f;
        }
        ['parseXml'](_0x4b74ea, _0x46a9e8, _0x5403c2, _0x49bccb) {
            var _0x252ac9, _0x5c3ce1 = _0x4b74ea['childNodes'], _0x50c033 = _0x5c3ce1['length'];
            if (!_0x49bccb) {
                _0x252ac9 = {};
                var _0x148af1 = _0x4b74ea['attributes'];
                for (let _0x3a6fa1 in _0x148af1) {
                    var _0x17aca9 = _0x148af1[_0x3a6fa1], _0x350e3c = _0x17aca9['nodeName'], _0x1a965c = _0x17aca9['nodeValue'];
                    _0x252ac9[_0x350e3c] = 'true' == _0x1a965c || 'false' != _0x1a965c && _0x1a965c;
                }
                _0x252ac9['nodeParent'] = _0x5403c2, _0x50c033 > 0x0 && (_0x252ac9['isDirector' + 'y'] = !0x0), _0x252ac9['hasChild'] = _0x50c033 > 0x0, _0x46a9e8['push'](_0x252ac9);
            }
            for (var _0x3e876a = 0x0; _0x3e876a < _0x50c033; _0x3e876a++) {
                var _0x5b1e54 = _0x5c3ce1[_0x3e876a];
                this['parseXml'](_0x5b1e54, _0x46a9e8, _0x252ac9, !0x1);
            }
        }
        ['parseOpenS' + 'tatus'](_0x469c81, _0x3ddad5) {
            for (var _0x20e397 = 0x0, _0x1a1088 = _0x3ddad5['length']; _0x20e397 < _0x1a1088; _0x20e397++) {
                var _0xe8c185 = _0x3ddad5[_0x20e397];
                if (_0xe8c185['isDirector' + 'y'])
                    for (var _0x49d84c = 0x0, _0x29d807 = _0x469c81['length']; _0x49d84c < _0x29d807; _0x49d84c++) {
                        var _0x281de9 = _0x469c81[_0x49d84c];
                        if (_0x281de9['isDirector' + 'y'] && this['isSamePare' + 'nt'](_0x281de9, _0xe8c185) && _0xe8c185['label'] == _0x281de9['label']) {
                            _0xe8c185['isOpen'] = _0x281de9['isOpen'];
                            break;
                        }
                    }
            }
        }
        ['isSamePare' + 'nt'](_0x2ca6ef, _0x3b756d) {
            return null == _0x2ca6ef['nodeParent'] && null == _0x3b756d['nodeParent'] || null != _0x2ca6ef['nodeParent'] && null != _0x3b756d['nodeParent'] && (_0x2ca6ef['nodeParent']['label'] == _0x3b756d['nodeParent']['label'] && this['isSamePare' + 'nt'](_0x2ca6ef['nodeParent'], _0x3b756d['nodeParent']));
        }
        get ['selectedPa' + 'th']() {
            return this['_list']['selectedIt' + 'em'] ? this['_list']['selectedIt' + 'em']['path'] : null;
        }
        ['filter'](_0x109b43) {
            if (Boolean(_0x109b43)) {
                var _0x365ff0 = [];
                this['getFilterS' + 'ource'](this['_source'], _0x365ff0, _0x109b43), this['_list']['array'] = _0x365ff0;
            } else
                this['_list']['array'] = this['getArray']();
        }
        ['getFilterS' + 'ource'](_0x5c3048, _0x3791f8, _0x364c93) {
            _0x364c93 = _0x364c93['toLocaleLo' + 'werCase']();
            for (let _0x377403 of _0x5c3048)
                !_0x377403['isDirector' + 'y'] && String(_0x377403['label'])['toLowerCas' + 'e']()['indexOf'](_0x364c93) > -0x1 && (_0x377403['x'] = 0x0, _0x3791f8['push'](_0x377403)), _0x377403['child'] && _0x377403['child']['length'] > 0x0 && this['getFilterS' + 'ource'](_0x377403['child'], _0x3791f8, _0x364c93);
        }
    }
    _0x126068['ILaya']['regClass'](_0x3c2cdd), _0x126068['ClassUtils']['regClass']('laya.ui.Tr' + 'ee', _0x3c2cdd), _0x126068['ClassUtils']['regClass']('Laya.Tree', _0x3c2cdd);
    class _0x3f7c12 extends _0x41b5da {
        constructor() {
            super(...arguments), this['_space'] = 0x0, this['_align'] = 'none', this['_itemChang' + 'ed'] = !0x1;
        }
        ['addChild'](_0x486d6a) {
            return _0x486d6a['on'](_0x126068['Event']['RESIZE'], this, this['onResize']), this['_setItemCh' + 'anged'](), super['addChild'](_0x486d6a);
        }
        ['onResize'](_0x3cea4e) {
            this['_setItemCh' + 'anged']();
        }
        ['addChildAt'](_0x2888a9, _0x4a3dfe) {
            return _0x2888a9['on'](_0x126068['Event']['RESIZE'], this, this['onResize']), this['_setItemCh' + 'anged'](), super['addChildAt'](_0x2888a9, _0x4a3dfe);
        }
        ['removeChil' + 'dAt'](_0x365fde) {
            return this['getChildAt'](_0x365fde)['off'](_0x126068['Event']['RESIZE'], this, this['onResize']), this['_setItemCh' + 'anged'](), super['removeChil' + 'dAt'](_0x365fde);
        }
        ['refresh']() {
            this['_setItemCh' + 'anged']();
        }
        ['changeItem' + 's']() {
            this['_itemChang' + 'ed'] = !0x1;
        }
        get ['space']() {
            return this['_space'];
        }
        set ['space'](_0x5d1ff2) {
            this['_space'] = _0x5d1ff2, this['_setItemCh' + 'anged']();
        }
        get ['align']() {
            return this['_align'];
        }
        set ['align'](_0x545553) {
            this['_align'] = _0x545553, this['_setItemCh' + 'anged']();
        }
        ['sortItem'](_0x7ef5) {
            _0x7ef5 && _0x7ef5['sort'](function (_0x238515, _0x34f682) {
                return _0x238515['y'] - _0x34f682['y'];
            });
        }
        ['_setItemCh' + 'anged']() {
            this['_itemChang' + 'ed'] || (this['_itemChang' + 'ed'] = !0x0, this['callLater'](this['changeItem' + 's']));
        }
    }
    _0x126068['ILaya']['regClass'](_0x3f7c12), _0x126068['ClassUtils']['regClass']('laya.ui.La' + 'youtBox', _0x3f7c12), _0x126068['ClassUtils']['regClass']('Laya.Layou' + 'tBox', _0x3f7c12);
    class _0x2d6f67 extends _0x3f7c12 {
        ['sortItem'](_0x3cca87) {
            _0x3cca87 && _0x3cca87['sort'](function (_0x4d9218, _0x80f566) {
                return _0x4d9218['x'] - _0x80f566['x'];
            });
        }
        set ['height'](_0x1a857f) {
            this['_height'] != _0x1a857f && (super['height'] = _0x1a857f, this['callLater'](this['changeItem' + 's']));
        }
        get ['height']() {
            return super['height'];
        }
        ['changeItem' + 's']() {
            this['_itemChang' + 'ed'] = !0x1;
            for (var _0x5f2dc0 = [], _0x4cfab5 = 0x0, _0x44c4e6 = 0x0, _0x4d0da4 = this['numChildre' + 'n']; _0x44c4e6 < _0x4d0da4; _0x44c4e6++) {
                var _0x938536 = this['getChildAt'](_0x44c4e6);
                _0x938536 && (_0x5f2dc0['push'](_0x938536), _0x4cfab5 = this['_height'] ? this['_height'] : Math['max'](_0x4cfab5, _0x938536['height'] * _0x938536['scaleY']));
            }
            this['sortItem'](_0x5f2dc0);
            var _0x246f64 = 0x0;
            for (_0x44c4e6 = 0x0, _0x4d0da4 = _0x5f2dc0['length']; _0x44c4e6 < _0x4d0da4; _0x44c4e6++)
                (_0x938536 = _0x5f2dc0[_0x44c4e6])['x'] = _0x246f64, _0x246f64 += _0x938536['width'] * _0x938536['scaleX'] + this['_space'], this['_align'] == _0x2d6f67['TOP'] ? _0x938536['y'] = 0x0 : this['_align'] == _0x2d6f67['MIDDLE'] ? _0x938536['y'] = 0.5 * (_0x4cfab5 - _0x938536['height'] * _0x938536['scaleY']) : this['_align'] == _0x2d6f67['BOTTOM'] && (_0x938536['y'] = _0x4cfab5 - _0x938536['height'] * _0x938536['scaleY']);
            this['_sizeChang' + 'ed']();
        }
    }
    _0x2d6f67['NONE'] = 'none', _0x2d6f67['TOP'] = 'top', _0x2d6f67['MIDDLE'] = 'middle', _0x2d6f67['BOTTOM'] = 'bottom', _0x126068['ILaya']['regClass'](_0x2d6f67), _0x126068['ClassUtils']['regClass']('laya.ui.HB' + 'ox', _0x2d6f67), _0x126068['ClassUtils']['regClass']('Laya.HBox', _0x2d6f67);
    class _0x42f989 extends _0x3f7c12 {
        set ['width'](_0x3f3cda) {
            this['_width'] != _0x3f3cda && (super['width'] = _0x3f3cda, this['callLater'](this['changeItem' + 's']));
        }
        get ['width']() {
            return super['width'];
        }
        ['changeItem' + 's']() {
            this['_itemChang' + 'ed'] = !0x1;
            for (var _0x5ac6de = [], _0x57ab02 = 0x0, _0x2854d3 = 0x0, _0x4a337e = this['numChildre' + 'n']; _0x2854d3 < _0x4a337e; _0x2854d3++) {
                var _0x468ce9 = this['getChildAt'](_0x2854d3);
                _0x468ce9 && (_0x5ac6de['push'](_0x468ce9), _0x57ab02 = this['_width'] ? this['_width'] : Math['max'](_0x57ab02, _0x468ce9['width'] * _0x468ce9['scaleX']));
            }
            this['sortItem'](_0x5ac6de);
            var _0x458c04 = 0x0;
            for (_0x2854d3 = 0x0, _0x4a337e = _0x5ac6de['length']; _0x2854d3 < _0x4a337e; _0x2854d3++)
                (_0x468ce9 = _0x5ac6de[_0x2854d3])['y'] = _0x458c04, _0x458c04 += _0x468ce9['height'] * _0x468ce9['scaleY'] + this['_space'], this['_align'] == _0x42f989['LEFT'] ? _0x468ce9['x'] = 0x0 : this['_align'] == _0x42f989['CENTER'] ? _0x468ce9['x'] = 0.5 * (_0x57ab02 - _0x468ce9['width'] * _0x468ce9['scaleX']) : this['_align'] == _0x42f989['RIGHT'] && (_0x468ce9['x'] = _0x57ab02 - _0x468ce9['width'] * _0x468ce9['scaleX']);
            this['_sizeChang' + 'ed']();
        }
    }
    _0x42f989['NONE'] = 'none', _0x42f989['LEFT'] = 'left', _0x42f989['CENTER'] = 'center', _0x42f989['RIGHT'] = 'right', _0x126068['ILaya']['regClass'](_0x42f989), _0x126068['ClassUtils']['regClass']('laya.ui.VB' + 'ox', _0x42f989), _0x126068['ClassUtils']['regClass']('Laya.VBox', _0x42f989);
    class _0xd983a5 extends _0x156dd6 {
        constructor(_0x1d599b = null, _0x2d9531 = null) {
            super(), this['_valueArr'] = '', this['_indexMap'] = null, this['_sheet'] = null, this['_direction'] = 'horizontal', this['_spaceX'] = 0x0, this['_spaceY'] = 0x0, this['_align'] = 'left', this['_wordsW'] = 0x0, this['_wordsH'] = 0x0, _0x1d599b && (this['skin'] = _0x1d599b), _0x2d9531 && (this['sheet'] = _0x2d9531);
        }
        ['createChil' + 'dren']() {
            this['_bitmap'] = new _0x38f875(), this['on'](_0x126068['Event']['LOADED'], this, this['_onClipLoa' + 'ded']);
        }
        ['_onClipLoa' + 'ded']() {
            this['callLater'](this['changeValu' + 'e']);
        }
        get ['sheet']() {
            return this['_sheet'];
        }
        set ['sheet'](_0x3cbdd1) {
            _0x3cbdd1 += '', this['_sheet'] = _0x3cbdd1;
            var _0x22180c = _0x3cbdd1['split']('\x20');
            this['_clipX'] = String(_0x22180c[0x0])['length'], this['clipY'] = _0x22180c['length'], this['_indexMap'] = {};
            for (var _0x302a67 = 0x0; _0x302a67 < this['_clipY']; _0x302a67++)
                for (var _0x2a3d79 = _0x22180c[_0x302a67]['split'](''), _0x21173e = 0x0, _0x2db8fb = _0x2a3d79['length']; _0x21173e < _0x2db8fb; _0x21173e++)
                    this['_indexMap'][_0x2a3d79[_0x21173e]] = _0x302a67 * this['_clipX'] + _0x21173e;
        }
        get ['value']() {
            return this['_valueArr'] ? this['_valueArr'] : '';
        }
        set ['value'](_0x47f357) {
            _0x47f357 += '', this['_valueArr'] = _0x47f357, this['callLater'](this['changeValu' + 'e']);
        }
        get ['direction']() {
            return this['_direction'];
        }
        set ['direction'](_0x3766) {
            this['_direction'] = _0x3766, this['callLater'](this['changeValu' + 'e']);
        }
        get ['spaceX']() {
            return this['_spaceX'];
        }
        set ['spaceX'](_0x50bec1) {
            this['_spaceX'] = _0x50bec1, 'horizontal' === this['_direction'] && this['callLater'](this['changeValu' + 'e']);
        }
        get ['spaceY']() {
            return this['_spaceY'];
        }
        set ['spaceY'](_0x5b739a) {
            this['_spaceY'] = _0x5b739a, 'horizontal' !== this['_direction'] && this['callLater'](this['changeValu' + 'e']);
        }
        set ['align'](_0x2d60b6) {
            this['_align'] = _0x2d60b6, this['callLater'](this['changeValu' + 'e']);
        }
        get ['align']() {
            return this['_align'];
        }
        ['changeValu' + 'e']() {
            var _0x166e7a;
            if (this['_sources'] && (this['_valueArr'] && (this['graphics']['clear'](!0x0), _0x166e7a = this['_sources'][0x0]))) {
                var _0x46b1ae = 'horizontal' === this['_direction'];
                _0x46b1ae ? (this['_wordsW'] = this['_valueArr']['length'] * (_0x166e7a['sourceWidt' + 'h'] + this['spaceX']), this['_wordsH'] = _0x166e7a['sourceHeig' + 'ht']) : (this['_wordsW'] = _0x166e7a['sourceWidt' + 'h'], this['_wordsH'] = (_0x166e7a['sourceHeig' + 'ht'] + this['spaceY']) * this['_valueArr']['length']);
                var _0x16cce7 = 0x0;
                if (this['_width'])
                    switch (this['_align']) {
                    case 'center':
                        _0x16cce7 = 0.5 * (this['_width'] - this['_wordsW']);
                        break;
                    case 'right':
                        _0x16cce7 = this['_width'] - this['_wordsW'];
                        break;
                    default:
                        _0x16cce7 = 0x0;
                    }
                for (var _0x838a9b = 0x0, _0x4865ff = this['_valueArr']['length']; _0x838a9b < _0x4865ff; _0x838a9b++) {
                    var _0x36bede = this['_indexMap'][this['_valueArr']['charAt'](_0x838a9b)];
                    this['sources'][_0x36bede] && (_0x166e7a = this['sources'][_0x36bede], _0x46b1ae ? this['graphics']['drawImage'](_0x166e7a, _0x16cce7 + _0x838a9b * (_0x166e7a['sourceWidt' + 'h'] + this['spaceX']), 0x0, _0x166e7a['sourceWidt' + 'h'], _0x166e7a['sourceHeig' + 'ht']) : this['graphics']['drawImage'](_0x166e7a, 0x0 + _0x16cce7, _0x838a9b * (_0x166e7a['sourceHeig' + 'ht'] + this['spaceY']), _0x166e7a['sourceWidt' + 'h'], _0x166e7a['sourceHeig' + 'ht']));
                }
                this['_width'] || (this['_widget']['resetLayou' + 'tX'](), this['callLater'](this['_sizeChang' + 'ed'])), this['_height'] || (this['_widget']['resetLayou' + 'tY'](), this['callLater'](this['_sizeChang' + 'ed']));
            }
        }
        set ['width'](_0x390b3f) {
            super['width'] = _0x390b3f, this['callLater'](this['changeValu' + 'e']);
        }
        get ['width']() {
            return super['width'];
        }
        set ['height'](_0xd28a8c) {
            super['height'] = _0xd28a8c, this['callLater'](this['changeValu' + 'e']);
        }
        get ['height']() {
            return super['height'];
        }
        ['measureWid' + 'th']() {
            return this['_wordsW'];
        }
        ['measureHei' + 'ght']() {
            return this['_wordsH'];
        }
        ['destroy'](_0x196bad = !0x0) {
            this['_valueArr'] = null, this['_indexMap'] = null, this['graphics']['clear'](!0x0), this['removeSelf'](), this['off'](_0x126068['Event']['LOADED'], this, this['_onClipLoa' + 'ded']), super['destroy'](_0x196bad);
        }
    }
    _0x126068['ILaya']['regClass'](_0xd983a5), _0x126068['ClassUtils']['regClass']('laya.ui.Fo' + 'ntClip', _0xd983a5), _0x126068['ClassUtils']['regClass']('Laya.FontC' + 'lip', _0xd983a5);
    class _0x11c6a7 extends _0x126068['Scene'] {
        constructor() {
            super(!0x1), this['_watchMap'] = {}, this['_anchorX'] = NaN, this['_anchorY'] = NaN, this['_widget'] = _0x2e464f['EMPTY'], this['createChil' + 'dren']();
        }
        static ['__init__']() {
            _0x126068['ILaya']['ClassUtils']['regShortCl' + 'assName']([
                _0x154356,
                _0x37601b,
                _0x35fb98,
                _0x79adb2,
                _0x41b5da,
                _0x3e0697,
                _0x310346,
                _0x156dd6,
                _0x76941a,
                _0x23f9d7,
                _0x2fcd50,
                _0xf7bd27,
                _0x527063,
                _0x24d44a,
                _0x5d66c9,
                _0x214e15,
                _0x1a2001,
                _0x240817,
                _0x165964,
                _0x1afb40,
                _0x184c22,
                _0x5cbd52,
                _0x369135,
                _0x11c6a7,
                _0xc98be5,
                _0x4d7376,
                _0x3c2cdd,
                _0x2d6f67,
                _0x42f989,
                _0x126068['Animation'],
                _0x126068['Text'],
                _0xd983a5
            ]);
        }
        static ['regCompone' + 'nt'](_0x7f929c, _0x30e986) {
            _0x126068['ILaya']['ClassUtils']['regClass'](_0x7f929c, _0x30e986);
        }
        static ['regViewRun' + 'time'](_0x34fc55, _0x47bc09) {
            _0x126068['ILaya']['ClassUtils']['regClass'](_0x34fc55, _0x47bc09);
        }
        static ['regUI'](_0x1046d1, _0x4ee5f6) {
            _0x126068['ILaya']['loader']['cacheRes'](_0x1046d1, _0x4ee5f6);
        }
        ['destroy'](_0x1a4f0e = !0x0) {
            this['_watchMap'] = null, super['destroy'](_0x1a4f0e);
        }
        ['changeData'](_0x2f5ff2) {
            var _0x333a0f = this['_watchMap'][_0x2f5ff2];
            if (_0x333a0f)
                for (var _0x1580fb = 0x0, _0x4401b9 = _0x333a0f['length']; _0x1580fb < _0x4401b9; _0x1580fb++) {
                    _0x333a0f[_0x1580fb]['exe'](this);
                }
        }
        get ['top']() {
            return this['_widget']['top'];
        }
        set ['top'](_0x5d5504) {
            _0x5d5504 != this['_widget']['top'] && (this['_getWidget']()['top'] = _0x5d5504);
        }
        get ['bottom']() {
            return this['_widget']['bottom'];
        }
        set ['bottom'](_0x5aceb0) {
            _0x5aceb0 != this['_widget']['bottom'] && (this['_getWidget']()['bottom'] = _0x5aceb0);
        }
        get ['left']() {
            return this['_widget']['left'];
        }
        set ['left'](_0xcdcb28) {
            _0xcdcb28 != this['_widget']['left'] && (this['_getWidget']()['left'] = _0xcdcb28);
        }
        get ['right']() {
            return this['_widget']['right'];
        }
        set ['right'](_0x5a2cc6) {
            _0x5a2cc6 != this['_widget']['right'] && (this['_getWidget']()['right'] = _0x5a2cc6);
        }
        get ['centerX']() {
            return this['_widget']['centerX'];
        }
        set ['centerX'](_0x401fa1) {
            _0x401fa1 != this['_widget']['centerX'] && (this['_getWidget']()['centerX'] = _0x401fa1);
        }
        get ['centerY']() {
            return this['_widget']['centerY'];
        }
        set ['centerY'](_0x41cc45) {
            _0x41cc45 != this['_widget']['centerY'] && (this['_getWidget']()['centerY'] = _0x41cc45);
        }
        get ['anchorX']() {
            return this['_anchorX'];
        }
        set ['anchorX'](_0x4fe1a1) {
            this['_anchorX'] != _0x4fe1a1 && (this['_anchorX'] = _0x4fe1a1, this['callLater'](this['_sizeChang' + 'ed']));
        }
        get ['anchorY']() {
            return this['_anchorY'];
        }
        set ['anchorY'](_0xb507e4) {
            this['_anchorY'] != _0xb507e4 && (this['_anchorY'] = _0xb507e4, this['callLater'](this['_sizeChang' + 'ed']));
        }
        ['_sizeChang' + 'ed']() {
            isNaN(this['_anchorX']) || (this['pivotX'] = this['anchorX'] * this['width']), isNaN(this['_anchorY']) || (this['pivotY'] = this['anchorY'] * this['height']), this['event'](_0x126068['Event']['RESIZE']);
        }
        ['_getWidget']() {
            return this['_widget'] === _0x2e464f['EMPTY'] && (this['_widget'] = this['addCompone' + 'nt'](_0x2e464f)), this['_widget'];
        }
        ['loadUI'](_0x52bb60) {
            var _0x5f2d42 = _0x11c6a7['uiMap'][_0x52bb60];
            _0x11c6a7['uiMap'] && this['createView'](_0x5f2d42);
        }
        get ['dataSource']() {
            return this['_dataSourc' + 'e'];
        }
        set ['dataSource'](_0x15ee72) {
            for (var _0x107ff9 in (this['_dataSourc' + 'e'] = _0x15ee72, _0x15ee72)) {
                var _0xca06f4 = this['getChildBy' + 'Name'](_0x107ff9);
                _0xca06f4 instanceof _0x23f9d7 ? _0xca06f4['dataSource'] = _0x15ee72[_0x107ff9] : _0x107ff9 in this && !(this[_0x107ff9] instanceof Function) && (this[_0x107ff9] = _0x15ee72[_0x107ff9]);
            }
        }
    }
    _0x11c6a7['uiMap'] = {}, _0x126068['ILaya']['regClass'](_0x11c6a7), _0x126068['ClassUtils']['regClass']('laya.ui.Vi' + 'ew', _0x11c6a7), _0x126068['ClassUtils']['regClass']('Laya.View', _0x11c6a7);
    class _0x29bad1 {
    }
    _0x29bad1['Dialog'] = null;
    class _0x45cd2f extends _0x126068['Sprite'] {
        constructor() {
            super(), this['maskLayer'] = new _0x126068['Sprite'](), this['popupEffec' + 't'] = _0xfdf512 => {
                _0xfdf512['scale'](0x1, 0x1), _0xfdf512['_effectTwe' + 'en'] = _0x126068['Tween']['from'](_0xfdf512, {
                    'x': _0x126068['ILaya']['stage']['width'] / 0x2,
                    'y': _0x126068['ILaya']['stage']['height'] / 0x2,
                    'scaleX': 0x0,
                    'scaleY': 0x0
                }, 0x12c, _0x126068['Ease']['backOut'], _0x126068['Handler']['create'](this, this['doOpen'], [_0xfdf512]), 0x0, !0x1, !0x1);
            }, this['closeEffec' + 't'] = _0x213514 => {
                _0x213514['_effectTwe' + 'en'] = _0x126068['Tween']['to'](_0x213514, {
                    'x': _0x126068['ILaya']['stage']['width'] / 0x2,
                    'y': _0x126068['ILaya']['stage']['height'] / 0x2,
                    'scaleX': 0x0,
                    'scaleY': 0x0
                }, 0x12c, _0x126068['Ease']['strongOut'], _0x126068['Handler']['create'](this, this['doClose'], [_0x213514]), 0x0, !0x1, !0x1);
            }, this['popupEffec' + 'tHandler'] = new _0x126068['Handler'](this, this['popupEffec' + 't']), this['closeEffec' + 'tHandler'] = new _0x126068['Handler'](this, this['closeEffec' + 't']), this['mouseEnabl' + 'ed'] = this['maskLayer']['mouseEnabl' + 'ed'] = !0x0, this['zOrder'] = 0x3e8, _0x126068['ILaya']['stage']['addChild'](this), _0x126068['ILaya']['stage']['on'](_0x126068['Event']['RESIZE'], this, this['_onResize']), _0x167a28['closeDialo' + 'gOnSide'] && this['maskLayer']['on']('click', this, this['_closeOnSi' + 'de']), this['_onResize'](null);
        }
        ['_closeOnSi' + 'de']() {
            var _0xf024d9 = this['getChildAt'](this['numChildre' + 'n'] - 0x1);
            _0xf024d9 instanceof _0x29bad1['Dialog'] && _0xf024d9['close']();
        }
        ['setLockVie' + 'w'](_0x53585c) {
            this['lockLayer'] || (this['lockLayer'] = new _0x41b5da(), this['lockLayer']['mouseEnabl' + 'ed'] = !0x0, this['lockLayer']['size'](_0x126068['ILaya']['stage']['width'], _0x126068['ILaya']['stage']['height'])), this['lockLayer']['removeChil' + 'dren'](), _0x53585c && (_0x53585c['centerX'] = _0x53585c['centerY'] = 0x0, this['lockLayer']['addChild'](_0x53585c));
        }
        ['_onResize'](_0x390cb9 = null) {
            var _0x41c73b = this['maskLayer']['width'] = _0x126068['ILaya']['stage']['width'], _0x204002 = this['maskLayer']['height'] = _0x126068['ILaya']['stage']['height'];
            this['lockLayer'] && this['lockLayer']['size'](_0x41c73b, _0x204002), this['maskLayer']['graphics']['clear'](!0x0), this['maskLayer']['graphics']['drawRect'](0x0, 0x0, _0x41c73b, _0x204002, _0x167a28['popupBgCol' + 'or']), this['maskLayer']['alpha'] = _0x167a28['popupBgAlp' + 'ha'];
            for (var _0x3ed2c6 = this['numChildre' + 'n'] - 0x1; _0x3ed2c6 > -0x1; _0x3ed2c6--) {
                var _0x33a07e = this['getChildAt'](_0x3ed2c6);
                _0x33a07e['isPopupCen' + 'ter'] && this['_centerDia' + 'log'](_0x33a07e);
            }
        }
        ['_centerDia' + 'log'](_0x445696) {
            _0x445696['x'] = Math['round']((_0x126068['ILaya']['stage']['width'] - _0x445696['width'] >> 0x1) + _0x445696['pivotX']), _0x445696['y'] = Math['round']((_0x126068['ILaya']['stage']['height'] - _0x445696['height'] >> 0x1) + _0x445696['pivotY']);
        }
        ['open'](_0x2dc0f6, _0x2e77a4 = !0x1, _0x380ed2 = !0x1) {
            _0x2e77a4 && this['_closeAll'](), this['_clearDial' + 'ogEffect'](_0x2dc0f6), _0x2dc0f6['isPopupCen' + 'ter'] && this['_centerDia' + 'log'](_0x2dc0f6), this['addChild'](_0x2dc0f6), (_0x2dc0f6['isModal'] || this['_getBit'](_0x126068['Const']['HAS_ZORDER'])) && _0x126068['ILaya']['timer']['callLater'](this, this['_checkMask']), _0x380ed2 && null != _0x2dc0f6['popupEffec' + 't'] ? _0x2dc0f6['popupEffec' + 't']['runWith'](_0x2dc0f6) : this['doOpen'](_0x2dc0f6), this['event'](_0x126068['Event']['OPEN']);
        }
        ['_clearDial' + 'ogEffect'](_0x547aec) {
            _0x547aec['_effectTwe' + 'en'] && (_0x126068['Tween']['clear'](_0x547aec['_effectTwe' + 'en']), _0x547aec['_effectTwe' + 'en'] = null);
        }
        ['doOpen'](_0xb2ed9c) {
            _0xb2ed9c['onOpened'](_0xb2ed9c['_param']);
        }
        ['lock'](_0x10499b) {
            this['lockLayer'] && (_0x10499b ? this['addChild'](this['lockLayer']) : this['lockLayer']['removeSelf']());
        }
        ['close'](_0x4aee62) {
            this['_clearDial' + 'ogEffect'](_0x4aee62), _0x4aee62['isShowEffe' + 'ct'] && null != _0x4aee62['closeEffec' + 't'] ? _0x4aee62['closeEffec' + 't']['runWith']([_0x4aee62]) : this['doClose'](_0x4aee62), this['event'](_0x126068['Event']['CLOSE']);
        }
        ['doClose'](_0x31cb8f) {
            _0x31cb8f['removeSelf'](), _0x31cb8f['isModal'] && this['_checkMask'](), _0x31cb8f['closeHandl' + 'er'] && _0x31cb8f['closeHandl' + 'er']['runWith'](_0x31cb8f['closeType']), _0x31cb8f['onClosed'](_0x31cb8f['closeType']), _0x31cb8f['autoDestro' + 'yAtClosed'] && _0x31cb8f['destroy']();
        }
        ['closeAll']() {
            this['_closeAll'](), this['event'](_0x126068['Event']['CLOSE']);
        }
        ['_closeAll']() {
            for (var _0x3ed5e0 = this['numChildre' + 'n'] - 0x1; _0x3ed5e0 > -0x1; _0x3ed5e0--) {
                var _0x4d8fa7 = this['getChildAt'](_0x3ed5e0);
                _0x4d8fa7 && null != _0x4d8fa7['close'] && this['doClose'](_0x4d8fa7);
            }
        }
        ['getDialogs' + 'ByGroup'](_0x158ca2) {
            for (var _0x35f5ce = [], _0x59488a = this['numChildre' + 'n'] - 0x1; _0x59488a > -0x1; _0x59488a--) {
                var _0x15baea = this['getChildAt'](_0x59488a);
                _0x15baea && _0x15baea['group'] === _0x158ca2 && _0x35f5ce['push'](_0x15baea);
            }
            return _0x35f5ce;
        }
        ['closeByGro' + 'up'](_0x425d88) {
            for (var _0x3ee25a = [], _0x1e5ced = this['numChildre' + 'n'] - 0x1; _0x1e5ced > -0x1; _0x1e5ced--) {
                var _0x15efa8 = this['getChildAt'](_0x1e5ced);
                _0x15efa8 && _0x15efa8['group'] === _0x425d88 && (_0x15efa8['close'](), _0x3ee25a['push'](_0x15efa8));
            }
            return _0x3ee25a;
        }
        ['_checkMask']() {
            this['maskLayer']['removeSelf']();
            for (var _0x38029e = this['numChildre' + 'n'] - 0x1; _0x38029e > -0x1; _0x38029e--) {
                var _0x47ebd8 = this['getChildAt'](_0x38029e);
                if (_0x47ebd8 && _0x47ebd8['isModal'])
                    return void this['addChildAt'](this['maskLayer'], _0x38029e);
            }
        }
    }
    _0x126068['ClassUtils']['regClass']('laya.ui.Di' + 'alogManage' + 'r', _0x45cd2f), _0x126068['ClassUtils']['regClass']('Laya.Dialo' + 'gManager', _0x45cd2f);
    class _0x30f4aa extends _0x11c6a7 {
        constructor() {
            super(), this['isShowEffe' + 'ct'] = !0x0, this['isPopupCen' + 'ter'] = !0x0, this['popupEffec' + 't'] = _0x30f4aa['manager']['popupEffec' + 'tHandler'], this['closeEffec' + 't'] = _0x30f4aa['manager']['closeEffec' + 'tHandler'], this['_dealDragA' + 'rea'](), this['on'](_0x126068['Event']['CLICK'], this, this['_onClick']);
        }
        static get ['manager']() {
            return _0x30f4aa['_manager'] = _0x30f4aa['_manager'] || new _0x45cd2f();
        }
        static set ['manager'](_0x38ce26) {
            _0x30f4aa['_manager'] = _0x38ce26;
        }
        ['_dealDragA' + 'rea']() {
            var _0x3455b4 = this['getChildBy' + 'Name']('drag');
            _0x3455b4 && (this['dragArea'] = _0x3455b4['_x'] + ',' + _0x3455b4['_y'] + ',' + _0x3455b4['width'] + ',' + _0x3455b4['height'], _0x3455b4['removeSelf']());
        }
        get ['dragArea']() {
            return this['_dragArea'] ? this['_dragArea']['toString']() : null;
        }
        set ['dragArea'](_0x5b82e1) {
            if (_0x5b82e1) {
                var _0x251e85 = _0x1c3411['fillArray']([
                    0x0,
                    0x0,
                    0x0,
                    0x0
                ], _0x5b82e1, Number);
                this['_dragArea'] = new _0x126068['Rectangle'](_0x251e85[0x0], _0x251e85[0x1], _0x251e85[0x2], _0x251e85[0x3]), this['on'](_0x126068['Event']['MOUSE_DOWN'], this, this['_onMouseDo' + 'wn']);
            } else
                this['_dragArea'] = null, this['off'](_0x126068['Event']['MOUSE_DOWN'], this, this['_onMouseDo' + 'wn']);
        }
        ['_onMouseDo' + 'wn'](_0x366000) {
            var _0x5e6e3c = this['getMousePo' + 'int']();
            this['_dragArea']['contains'](_0x5e6e3c['x'], _0x5e6e3c['y']) ? this['startDrag']() : this['stopDrag']();
        }
        ['_onClick'](_0x6b7600) {
            var _0x1a484e = _0x6b7600['target'];
            if (_0x1a484e)
                switch (_0x1a484e['name']) {
                case _0x30f4aa['CLOSE']:
                case _0x30f4aa['CANCEL']:
                case _0x30f4aa['SURE']:
                case _0x30f4aa['NO']:
                case _0x30f4aa['OK']:
                case _0x30f4aa['YES']:
                    return void this['close'](_0x1a484e['name']);
                }
        }
        ['open'](_0x4f4b85 = !0x0, _0x43cac0 = null) {
            this['_dealDragA' + 'rea'](), this['_param'] = _0x43cac0, _0x30f4aa['manager']['open'](this, _0x4f4b85, this['isShowEffe' + 'ct']), _0x30f4aa['manager']['lock'](!0x1);
        }
        ['close'](_0x555507 = null) {
            this['closeType'] = _0x555507, _0x30f4aa['manager']['close'](this);
        }
        ['destroy'](_0x54cf4d = !0x0) {
            this['closeHandl' + 'er'] = null, this['popupEffec' + 't'] = null, this['closeEffec' + 't'] = null, this['_dragArea'] = null, super['destroy'](_0x54cf4d);
        }
        ['show'](_0x42ae16 = !0x1, _0x59547e = !0x0) {
            this['_open'](!0x1, _0x42ae16, _0x59547e);
        }
        ['popup'](_0x2cbe77 = !0x1, _0x1c2841 = !0x0) {
            this['_open'](!0x0, _0x2cbe77, _0x1c2841);
        }
        ['_open'](_0x4c9299, _0x17cace, _0x291253) {
            this['isModal'] = _0x4c9299, this['isShowEffe' + 'ct'] = _0x291253, _0x30f4aa['manager']['lock'](!0x0), this['open'](_0x17cace);
        }
        get ['isPopup']() {
            return null != this['parent'];
        }
        set ['zOrder'](_0x1ed2c0) {
            super['zOrder'] = _0x1ed2c0, _0x30f4aa['manager']['_checkMask']();
        }
        get ['zOrder']() {
            return super['zOrder'];
        }
        static ['setLockVie' + 'w'](_0x52ac75) {
            _0x30f4aa['manager']['setLockVie' + 'w'](_0x52ac75);
        }
        static ['lock'](_0x34cbe1) {
            _0x30f4aa['manager']['lock'](_0x34cbe1);
        }
        static ['closeAll']() {
            _0x30f4aa['manager']['closeAll']();
        }
        static ['getDialogs' + 'ByGroup'](_0x1a96e7) {
            return _0x30f4aa['manager']['getDialogs' + 'ByGroup'](_0x1a96e7);
        }
        static ['closeByGro' + 'up'](_0x594116) {
            return _0x30f4aa['manager']['closeByGro' + 'up'](_0x594116);
        }
    }
    _0x30f4aa['CLOSE'] = 'close', _0x30f4aa['CANCEL'] = 'cancel', _0x30f4aa['SURE'] = 'sure', _0x30f4aa['NO'] = 'no', _0x30f4aa['YES'] = 'yes', _0x30f4aa['OK'] = 'ok', _0x29bad1['Dialog'] = _0x30f4aa, _0x126068['ILaya']['regClass'](_0x30f4aa), _0x126068['ClassUtils']['regClass']('laya.ui.Di' + 'alog', _0x30f4aa), _0x126068['ClassUtils']['regClass']('Laya.Dialo' + 'g', _0x30f4aa);
    class _0x19e95f extends _0x23f9d7 {
        constructor() {
            super(), this['_tipBox'] = new _0x23f9d7(), this['_tipBox']['addChild'](this['_tipText'] = new _0x126068['Text']()), this['_tipText']['x'] = this['_tipText']['y'] = 0x5, this['_tipText']['color'] = _0x19e95f['tipTextCol' + 'or'], this['_defaultTi' + 'pHandler'] = this['_showDefau' + 'ltTip'], _0x126068['ILaya']['stage']['on'](_0x31131d['SHOW_TIP'], this, this['_onStageSh' + 'owTip']), _0x126068['ILaya']['stage']['on'](_0x31131d['HIDE_TIP'], this, this['_onStageHi' + 'deTip']), this['zOrder'] = 0x44c;
        }
        ['_onStageHi' + 'deTip'](_0x5f978) {
            _0x126068['ILaya']['timer']['clear'](this, this['_showTip']), this['closeAll'](), this['removeSelf']();
        }
        ['_onStageSh' + 'owTip'](_0x58dde1) {
            _0x126068['ILaya']['timer']['once'](_0x19e95f['tipDelay'], this, this['_showTip'], [_0x58dde1], !0x0);
        }
        ['_showTip'](_0x4a5b0f) {
            if ('string' == typeof _0x4a5b0f) {
                var _0x5bcaf0 = String(_0x4a5b0f);
                Boolean(_0x5bcaf0) && this['_defaultTi' + 'pHandler'](_0x5bcaf0);
            } else
                _0x4a5b0f instanceof _0x126068['Handler'] ? _0x4a5b0f['run']() : _0x4a5b0f instanceof Function && _0x4a5b0f['apply']();
            _0x126068['ILaya']['stage']['on'](_0x126068['Event']['MOUSE_MOVE'], this, this['_onStageMo' + 'useMove']), _0x126068['ILaya']['stage']['on'](_0x126068['Event']['MOUSE_DOWN'], this, this['_onStageMo' + 'useDown']), this['_onStageMo' + 'useMove'](null);
        }
        ['_onStageMo' + 'useDown'](_0x4ad2f1) {
            this['closeAll']();
        }
        ['_onStageMo' + 'useMove'](_0x4a5108) {
            this['_showToSta' + 'ge'](this, _0x19e95f['offsetX'], _0x19e95f['offsetY']);
        }
        ['_showToSta' + 'ge'](_0x57736e, _0x248b7b = 0x0, _0x178855 = 0x0) {
            var _0x482f70 = _0x57736e['getBounds']();
            _0x57736e['x'] = _0x126068['ILaya']['stage']['mouseX'] + _0x248b7b, _0x57736e['y'] = _0x126068['ILaya']['stage']['mouseY'] + _0x178855, _0x57736e['_x'] + _0x482f70['width'] > _0x126068['ILaya']['stage']['width'] && (_0x57736e['x'] -= _0x482f70['width'] + _0x248b7b), _0x57736e['_y'] + _0x482f70['height'] > _0x126068['ILaya']['stage']['height'] && (_0x57736e['y'] -= _0x482f70['height'] + _0x178855);
        }
        ['closeAll']() {
            _0x126068['ILaya']['timer']['clear'](this, this['_showTip']), _0x126068['ILaya']['stage']['off'](_0x126068['Event']['MOUSE_MOVE'], this, this['_onStageMo' + 'useMove']), _0x126068['ILaya']['stage']['off'](_0x126068['Event']['MOUSE_DOWN'], this, this['_onStageMo' + 'useDown']), this['removeChil' + 'dren']();
        }
        ['showDislay' + 'Tip'](_0x9bc956) {
            this['addChild'](_0x9bc956), this['_showToSta' + 'ge'](this), _0x126068['ILaya']['stage']['addChild'](this);
        }
        ['_showDefau' + 'ltTip'](_0xcb99e6) {
            this['_tipText']['text'] = _0xcb99e6;
            var _0x4df3c5 = this['_tipBox']['graphics'];
            _0x4df3c5['clear'](!0x0), _0x4df3c5['drawRect'](0x0, 0x0, this['_tipText']['width'] + 0xa, this['_tipText']['height'] + 0xa, _0x19e95f['tipBackCol' + 'or']), this['addChild'](this['_tipBox']), this['_showToSta' + 'ge'](this), _0x126068['ILaya']['stage']['addChild'](this);
        }
        get ['defaultTip' + 'Handler']() {
            return this['_defaultTi' + 'pHandler'];
        }
        set ['defaultTip' + 'Handler'](_0x49c6f9) {
            this['_defaultTi' + 'pHandler'] = _0x49c6f9;
        }
    }
    _0x19e95f['offsetX'] = 0xa, _0x19e95f['offsetY'] = 0xf, _0x19e95f['tipTextCol' + 'or'] = '#ffffff', _0x19e95f['tipBackCol' + 'or'] = '#111111', _0x19e95f['tipDelay'] = 0xc8, _0x126068['ILaya']['regClass'](_0x19e95f), _0x126068['ClassUtils']['regClass']('laya.ui.Ti' + 'pManager', _0x19e95f), _0x126068['ClassUtils']['regClass']('Laya.TipMa' + 'nager', _0x19e95f);
    class _0x1237a3 extends _0x23f9d7 {
        constructor() {
            super(), this['_width'] = this['_height'] = 0xc8;
            var _0x3290c6 = new _0x126068['Texture']();
            _0x3290c6['bitmap'] = new _0x126068['Texture2D'](), this['texture'] = _0x3290c6;
        }
        ['onEnable']() {
            this['postMsg']({
                'type': 'display',
                'rate': _0x126068['Laya']['stage']['frameRate']
            }), window['wx'] && window['sharedCanv' + 'as'] && _0x126068['Laya']['timer']['frameLoop'](0x1, this, this['_onLoop']);
        }
        ['onDisable']() {
            this['postMsg']({ 'type': 'undisplay' }), _0x126068['Laya']['timer']['clear'](this, this['_onLoop']);
        }
        ['_onLoop']() {
            this['texture']['bitmap']['loadImageS' + 'ource'](window['sharedCanv' + 'as']);
        }
        set ['width'](_0x204288) {
            super['width'] = _0x204288, window['sharedCanv' + 'as'] && (window['sharedCanv' + 'as']['width'] = _0x204288), this['callLater'](this['_postMsg']);
        }
        get ['width']() {
            return super['width'];
        }
        set ['height'](_0x2ce871) {
            super['height'] = _0x2ce871, window['sharedCanv' + 'as'] && (window['sharedCanv' + 'as']['height'] = _0x2ce871), this['callLater'](this['_postMsg']);
        }
        get ['height']() {
            return super['height'];
        }
        set ['x'](_0x5dd3c5) {
            super['x'] = _0x5dd3c5, this['callLater'](this['_postMsg']);
        }
        get ['x']() {
            return super['x'];
        }
        set ['y'](_0x308ad2) {
            super['y'] = _0x308ad2, this['callLater'](this['_postMsg']);
        }
        get ['y']() {
            return super['y'];
        }
        ['_postMsg']() {
            var _0x150988 = new _0x126068['Matrix']();
            _0x150988['translate'](this['x'], this['y']);
            var _0x2811a6 = _0x126068['Laya']['stage'];
            _0x150988['scale'](_0x2811a6['_canvasTra' + 'nsform']['getScaleX']() * this['globalScal' + 'eX'] * _0x2811a6['transform']['getScaleX'](), _0x2811a6['_canvasTra' + 'nsform']['getScaleY']() * this['globalScal' + 'eY'] * _0x2811a6['transform']['getScaleY']()), this['postMsg']({
                'type': 'changeMatr' + 'ix',
                'a': _0x150988['a'],
                'b': _0x150988['b'],
                'c': _0x150988['c'],
                'd': _0x150988['d'],
                'tx': _0x150988['tx'],
                'ty': _0x150988['ty'],
                'w': this['width'],
                'h': this['height']
            });
        }
        ['postMsg'](_0x24ae2b) {
            window['wx'] && window['wx']['getOpenDat' + 'aContext'] && window['wx']['getOpenDat' + 'aContext']()['postMessag' + 'e'](_0x24ae2b);
        }
    }
    _0x126068['ILaya']['regClass'](_0x1237a3), _0x126068['ClassUtils']['regClass']('laya.ui.WX' + 'OpenDataVi' + 'ewer', _0x1237a3), _0x126068['ClassUtils']['regClass']('Laya.WXOpe' + 'nDataViewe' + 'r', _0x1237a3), _0x8d0ce5['AdvImage'] = _0x45f4d7, _0x8d0ce5['AutoBitmap'] = _0x38f875, _0x8d0ce5['Box'] = _0x41b5da, _0x8d0ce5['Button'] = _0x37601b, _0x8d0ce5['CheckBox'] = _0x310346, _0x8d0ce5['Clip'] = _0x156dd6, _0x8d0ce5['ColorPicke' + 'r'] = _0x79adb2, _0x8d0ce5['ComboBox'] = _0x76941a, _0x8d0ce5['Dialog'] = _0x30f4aa, _0x8d0ce5['DialogMana' + 'ger'] = _0x45cd2f, _0x8d0ce5['FontClip'] = _0xd983a5, _0x8d0ce5['HBox'] = _0x2d6f67, _0x8d0ce5['HScrollBar'] = _0x2fcd50, _0x8d0ce5['HSlider'] = _0xf7bd27, _0x8d0ce5['IUI'] = _0x29bad1, _0x8d0ce5['Image'] = _0x527063, _0x8d0ce5['Label'] = _0x24d44a, _0x8d0ce5['LayoutBox'] = _0x3f7c12, _0x8d0ce5['List'] = _0x5d66c9, _0x8d0ce5['Panel'] = _0x214e15, _0x8d0ce5['ProgressBa' + 'r'] = _0x1a2001, _0x8d0ce5['Radio'] = _0x240817, _0x8d0ce5['RadioGroup'] = _0x165964, _0x8d0ce5['ScaleBox'] = _0x3e0697, _0x8d0ce5['ScrollBar'] = _0x1afb40, _0x8d0ce5['Slider'] = _0x184c22, _0x8d0ce5['Styles'] = _0x5393ca, _0x8d0ce5['Tab'] = _0x5cbd52, _0x8d0ce5['TextArea'] = _0x35fb98, _0x8d0ce5['TextInput'] = _0x369135, _0x8d0ce5['TipManager'] = _0x19e95f, _0x8d0ce5['Tree'] = _0x3c2cdd, _0x8d0ce5['UIComponen' + 't'] = _0x23f9d7, _0x8d0ce5['UIConfig'] = _0x167a28, _0x8d0ce5['UIEvent'] = _0x31131d, _0x8d0ce5['UIGroup'] = _0x11f15b, _0x8d0ce5['UILib'] = class {
        static ['__init__']() {
        }
    }, _0x8d0ce5['UIUtils'] = _0x1c3411, _0x8d0ce5['VBox'] = _0x42f989, _0x8d0ce5['VScrollBar'] = _0xc98be5, _0x8d0ce5['VSlider'] = _0x4d7376, _0x8d0ce5['View'] = _0x11c6a7, _0x8d0ce5['ViewStack'] = _0x154356, _0x8d0ce5['WXOpenData' + 'Viewer'] = _0x1237a3, _0x8d0ce5['Widget'] = _0x2e464f;
}(window['Laya'] = window['Laya'] || {}, Laya);