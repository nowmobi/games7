!function (_0x4ad30f, _0x20385f) {
    'use strict';
    class _0x10bbcf {
    }
    _0x10bbcf['touchScrol' + 'lEnable'] = !0x0, _0x10bbcf['mouseWheel' + 'Enable'] = !0x0, _0x10bbcf['showButton' + 's'] = !0x0, _0x10bbcf['popupBgCol' + 'or'] = '#000000', _0x10bbcf['popupBgAlp' + 'ha'] = 0.5, _0x10bbcf['closeDialo' + 'gOnSide'] = !0x0, window['UIConfig'] = _0x10bbcf;
    class _0x44287a {
    }
    _0x44287a['defaultSiz' + 'eGrid'] = [
        0x4,
        0x4,
        0x4,
        0x4,
        0x0
    ], _0x44287a['labelColor'] = '#000000', _0x44287a['labelPaddi' + 'ng'] = [
        0x2,
        0x2,
        0x2,
        0x2
    ], _0x44287a['inputLabel' + 'Padding'] = [
        0x1,
        0x1,
        0x1,
        0x3
    ], _0x44287a['buttonStat' + 'eNum'] = 0x3, _0x44287a['buttonLabe' + 'lColors'] = [
        '#32556b',
        '#32cc6b',
        '#ff0000',
        '#C0C0C0'
    ], _0x44287a['comboBoxIt' + 'emColors'] = [
        '#5e95b6',
        '#ffffff',
        '#000000',
        '#8fa4b1',
        '#ffffff'
    ], _0x44287a['scrollBarM' + 'inNum'] = 0xf, _0x44287a['scrollBarD' + 'elayTime'] = 0x1f4;
    class _0x2f278e extends _0x20385f['Graphics'] {
        constructor() {
            super(...arguments), this['autoCacheC' + 'md'] = !0x0, this['_width'] = 0x0, this['_height'] = 0x0, this['uv'] = null;
        }
        ['destroy']() {
            super['destroy'](), this['_source'] = null, this['_sizeGrid'] = null, this['_offset'] = null;
        }
        get ['sizeGrid']() {
            return this['_sizeGrid'];
        }
        set ['sizeGrid'](_0x1a26f9) {
            this['_sizeGrid'] = _0x1a26f9['map'](_0x14435c => +_0x14435c), this['_setChange' + 'd']();
        }
        get ['width']() {
            return this['_width'] ? this['_width'] : this['_source'] ? this['_source']['sourceWidt' + 'h'] : 0x0;
        }
        set ['width'](_0x15c78b) {
            this['_width'] != _0x15c78b && (this['_width'] = _0x15c78b, this['_setChange' + 'd']());
        }
        get ['height']() {
            return this['_height'] ? this['_height'] : this['_source'] ? this['_source']['sourceHeig' + 'ht'] : 0x0;
        }
        set ['height'](_0x3c7724) {
            this['_height'] != _0x3c7724 && (this['_height'] = _0x3c7724, this['_setChange' + 'd']());
        }
        get ['source']() {
            return this['_source'];
        }
        set ['source'](_0x37a53d) {
            _0x37a53d ? (this['_source'] = _0x37a53d, this['_setChange' + 'd']()) : (this['_source'] = null, this['clear']());
        }
        ['_setChange' + 'd']() {
            this['_isChanged'] || (this['_isChanged'] = !0x0, _0x20385f['ILaya']['timer']['callLater'](this, this['changeSour' + 'ce']));
        }
        ['changeSour' + 'ce']() {
            this['_isChanged'] = !0x1;
            var _0x4fe2f4 = this['_source'];
            if (_0x4fe2f4 && _0x4fe2f4['bitmap']) {
                var _0x5f317e = this['width'], _0x31a062 = this['height'], _0x44e9d9 = this['_sizeGrid'], _0x97de07 = _0x4fe2f4['sourceWidt' + 'h'], _0x3a863f = _0x4fe2f4['sourceHeig' + 'ht'];
                if (_0x44e9d9 && (_0x97de07 !== _0x5f317e || _0x3a863f !== _0x31a062))
                    return this['clear'](), this['draw9Grid'](_0x4fe2f4, 0x0, 0x0, _0x5f317e, _0x31a062, _0x44e9d9), void this['_repaint']();
                this['clear'](), this['drawTextur' + 'e'](_0x4fe2f4, this['_offset'] ? this['_offset'][0x0] : 0x0, this['_offset'] ? this['_offset'][0x1] : 0x0, _0x5f317e, _0x31a062, null, 0x1, null, null, this['uv']), this['_repaint']();
            }
        }
        ['drawBitmap'](_0x11059a, _0x2b20a6, _0x1750eb, _0x1dd2bb, _0xbac802 = 0x0, _0x399eca = 0x0) {
            _0xbac802 < 0.1 || _0x399eca < 0.1 || (!_0x11059a || _0x2b20a6['width'] == _0xbac802 && _0x2b20a6['height'] == _0x399eca ? this['drawImage'](_0x2b20a6, _0x1750eb, _0x1dd2bb, _0xbac802, _0x399eca) : this['fillTextur' + 'e'](_0x2b20a6, _0x1750eb, _0x1dd2bb, _0xbac802, _0x399eca));
        }
        static ['getTexture'](_0x28c9d6, _0x2f17d8, _0x1a2ab7, _0x255212, _0xd7a0cf) {
            var _0x1489a9;
            return _0x255212 <= 0x0 && (_0x255212 = 0x1), _0xd7a0cf <= 0x0 && (_0xd7a0cf = 0x1), _0x28c9d6['$_GID'] || (_0x28c9d6['$_GID'] = _0x20385f['Utils']['getGID']()), _0x1489a9 && _0x1489a9['_getSource']() || (_0x1489a9 = _0x20385f['Texture']['createFrom' + 'Texture'](_0x28c9d6, _0x2f17d8, _0x1a2ab7, _0x255212, _0xd7a0cf)), _0x1489a9;
        }
    }
    _0x20385f['ClassUtils']['regClass']('laya.ui.Au' + 'toBitmap', _0x2f278e), _0x20385f['ClassUtils']['regClass']('Laya.AutoB' + 'itmap', _0x2f278e);
    class _0x2eb4bf extends _0x20385f['Component'] {
        constructor() {
            super(...arguments), this['_top'] = NaN, this['_bottom'] = NaN, this['_left'] = NaN, this['_right'] = NaN, this['_centerX'] = NaN, this['_centerY'] = NaN;
        }
        ['onReset']() {
            this['_top'] = this['_bottom'] = this['_left'] = this['_right'] = this['_centerX'] = this['_centerY'] = NaN;
        }
        ['_onEnable']() {
            this['owner']['parent'] ? this['_onAdded']() : this['owner']['once'](_0x20385f['Event']['ADDED'], this, this['_onAdded']);
        }
        ['_onDisable']() {
            this['owner']['off'](_0x20385f['Event']['ADDED'], this, this['_onAdded']), this['owner']['parent'] && this['owner']['parent']['off'](_0x20385f['Event']['RESIZE'], this, this['_onParentR' + 'esize']);
        }
        ['_onAdded']() {
            this['owner']['parent'] && this['owner']['parent']['on'](_0x20385f['Event']['RESIZE'], this, this['_onParentR' + 'esize']), this['resetLayou' + 'tX'](), this['resetLayou' + 'tY']();
        }
        ['_onParentR' + 'esize']() {
            var _0xa1dacc = this['resetLayou' + 'tX'](), _0x234230 = this['resetLayou' + 'tY']();
            (_0xa1dacc || _0x234230) && this['owner']['event'](_0x20385f['Event']['RESIZE']);
        }
        ['resetLayou' + 'tX']() {
            var _0x1b409a = this['owner'];
            if (!_0x1b409a)
                return !0x1;
            var _0x2b4686 = _0x1b409a['parent'];
            if (_0x2b4686) {
                if (isNaN(this['centerX'])) {
                    if (isNaN(this['left']))
                        isNaN(this['right']) || (_0x1b409a['x'] = Math['round'](_0x2b4686['width'] - _0x1b409a['displayWid' + 'th'] - this['right'] + _0x1b409a['pivotX'] * _0x1b409a['scaleX']));
                    else {
                        if (_0x1b409a['x'] = Math['round'](this['left'] + _0x1b409a['pivotX'] * _0x1b409a['scaleX']), !isNaN(this['right'])) {
                            var _0x4b241b = (_0x2b4686['_width'] - this['left'] - this['right']) / (_0x1b409a['scaleX'] || 0.01);
                            if (_0x4b241b != _0x1b409a['width'])
                                return _0x1b409a['width'] = _0x4b241b, !0x0;
                        }
                    }
                } else
                    _0x1b409a['x'] = Math['round'](0.5 * (_0x2b4686['width'] - _0x1b409a['displayWid' + 'th']) + this['centerX'] + _0x1b409a['pivotX'] * _0x1b409a['scaleX']);
            }
            return !0x1;
        }
        ['resetLayou' + 'tY']() {
            var _0x140cff = this['owner'];
            if (!_0x140cff)
                return !0x1;
            var _0x2d5b79 = _0x140cff['parent'];
            if (_0x2d5b79) {
                if (isNaN(this['centerY'])) {
                    if (isNaN(this['top']))
                        isNaN(this['bottom']) || (_0x140cff['y'] = Math['round'](_0x2d5b79['height'] - _0x140cff['displayHei' + 'ght'] - this['bottom'] + _0x140cff['pivotY'] * _0x140cff['scaleY']));
                    else {
                        if (_0x140cff['y'] = Math['round'](this['top'] + _0x140cff['pivotY'] * _0x140cff['scaleY']), !isNaN(this['bottom'])) {
                            var _0x326d07 = (_0x2d5b79['_height'] - this['top'] - this['bottom']) / (_0x140cff['scaleY'] || 0.01);
                            if (_0x326d07 != _0x140cff['height'])
                                return _0x140cff['height'] = _0x326d07, !0x0;
                        }
                    }
                } else
                    _0x140cff['y'] = Math['round'](0.5 * (_0x2d5b79['height'] - _0x140cff['displayHei' + 'ght']) + this['centerY'] + _0x140cff['pivotY'] * _0x140cff['scaleY']);
            }
            return !0x1;
        }
        ['resetLayou' + 't']() {
            this['owner'] && (this['resetLayou' + 'tX'](), this['resetLayou' + 'tY']());
        }
        get ['top']() {
            return this['_top'];
        }
        set ['top'](_0x196152) {
            this['_top'] != _0x196152 && (this['_top'] = _0x196152, this['resetLayou' + 'tY']());
        }
        get ['bottom']() {
            return this['_bottom'];
        }
        set ['bottom'](_0x22741a) {
            this['_bottom'] != _0x22741a && (this['_bottom'] = _0x22741a, this['resetLayou' + 'tY']());
        }
        get ['left']() {
            return this['_left'];
        }
        set ['left'](_0x17bab1) {
            this['_left'] != _0x17bab1 && (this['_left'] = _0x17bab1, this['resetLayou' + 'tX']());
        }
        get ['right']() {
            return this['_right'];
        }
        set ['right'](_0x19c889) {
            this['_right'] != _0x19c889 && (this['_right'] = _0x19c889, this['resetLayou' + 'tX']());
        }
        get ['centerX']() {
            return this['_centerX'];
        }
        set ['centerX'](_0x378c98) {
            this['_centerX'] != _0x378c98 && (this['_centerX'] = _0x378c98, this['resetLayou' + 'tX']());
        }
        get ['centerY']() {
            return this['_centerY'];
        }
        set ['centerY'](_0x4ae913) {
            this['_centerY'] != _0x4ae913 && (this['_centerY'] = _0x4ae913, this['resetLayou' + 'tY']());
        }
    }
    _0x2eb4bf['EMPTY'] = null, _0x20385f['ILaya']['regClass'](_0x2eb4bf), _0x2eb4bf['EMPTY'] = new _0x2eb4bf(), _0x20385f['ClassUtils']['regClass']('laya.ui.Wi' + 'dget', _0x2eb4bf), _0x20385f['ClassUtils']['regClass']('Laya.Widge' + 't', _0x2eb4bf);
    class _0x3c5059 extends _0x20385f['Event'] {
    }
    _0x3c5059['SHOW_TIP'] = 'showtip', _0x3c5059['HIDE_TIP'] = 'hidetip', _0x20385f['ILaya']['regClass'](_0x3c5059), _0x20385f['ClassUtils']['regClass']('laya.ui.UI' + 'Event', _0x3c5059), _0x20385f['ClassUtils']['regClass']('Laya.UIEve' + 'nt', _0x3c5059);
    class _0x234441 {
        static ['fillArray'](_0x36c4b9, _0x1c04b5, _0x7c18ad = null) {
            var _0x7e4daa = _0x36c4b9['concat']();
            if (_0x1c04b5)
                for (var _0x43d1b4 = _0x1c04b5['split'](','), _0x1209ca = 0x0, _0x30dd8b = Math['min'](_0x7e4daa['length'], _0x43d1b4['length']); _0x1209ca < _0x30dd8b; _0x1209ca++) {
                    var _0x8d1171 = _0x43d1b4[_0x1209ca];
                    _0x7e4daa[_0x1209ca] = 'true' == _0x8d1171 || 'false' != _0x8d1171 && _0x8d1171, null != _0x7c18ad && (_0x7e4daa[_0x1209ca] = _0x7c18ad(_0x8d1171));
                }
            return _0x7e4daa;
        }
        static ['toColor'](_0x31cfe1) {
            return _0x20385f['Utils']['toHexColor'](_0x31cfe1);
        }
        static ['gray'](_0x3dacc7, _0x2b8fdf = !0x0) {
            _0x2b8fdf ? _0x234441['addFilter'](_0x3dacc7, _0x234441['grayFilter']) : _0x234441['clearFilte' + 'r'](_0x3dacc7, _0x20385f['ColorFilte' + 'r']);
        }
        static ['addFilter'](_0x441610, _0x740581) {
            var _0xf7240e = _0x441610['filters'] || [];
            _0xf7240e['push'](_0x740581), _0x441610['filters'] = _0xf7240e;
        }
        static ['clearFilte' + 'r'](_0x270b53, _0x48521c) {
            var _0x50a2d0 = _0x270b53['filters'];
            if (null != _0x50a2d0 && _0x50a2d0['length'] > 0x0) {
                for (var _0x129ca3 = _0x50a2d0['length'] - 0x1; _0x129ca3 > -0x1; _0x129ca3--) {
                    _0x50a2d0[_0x129ca3] instanceof _0x48521c && _0x50a2d0['splice'](_0x129ca3, 0x1);
                }
                _0x270b53['filters'] = _0x50a2d0;
            }
        }
        static ['_getReplac' + 'eStr'](_0x39cc77) {
            return _0x234441['escapeSequ' + 'ence'][_0x39cc77];
        }
        static ['adptString'](_0x25b492) {
            return _0x25b492['replace'](/\\(\w)/g, _0x234441['_getReplac' + 'eStr']);
        }
        static ['getBindFun'](_0x105b23) {
            _0x234441['_funMap'] || (_0x234441['_funMap'] = new _0x20385f['WeakObject']());
            var _0x4bb46a = _0x234441['_funMap']['get'](_0x105b23);
            if (null == _0x4bb46a) {
                var _0x3d8cee = '\x22' + _0x105b23 + '\x22', _0x268959 = '(function(' + 'data){if(d' + 'ata==null)' + 'return;wit' + 'h(data){tr' + 'y{\x0areturn\x20' + (_0x3d8cee = _0x3d8cee['replace'](/^"\${|}"$/g, '')['replace'](/\${/g, '\x22+')['replace'](/}/g, '+\x22')) + ('\x0a}catch(e)' + '{}}})');
                _0x4bb46a = window['Laya']['_runScript'](_0x268959), _0x234441['_funMap']['set'](_0x105b23, _0x4bb46a);
            }
            return _0x4bb46a;
        }
    }
    _0x234441['grayFilter'] = new _0x20385f['ColorFilte' + 'r']([
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
    ]), _0x234441['escapeSequ' + 'ence'] = {
        '\x5cn': '\x0a',
        '\x5ct': '\x09'
    }, _0x234441['_funMap'] = null, _0x20385f['ClassUtils']['regClass']('laya.ui.UI' + 'Utils', _0x234441), _0x20385f['ClassUtils']['regClass']('Laya.UIUti' + 'ls', _0x234441);
    class _0xa31ae0 extends _0x20385f['Sprite'] {
        constructor(_0xe3350f = !0x0) {
            super(), this['_anchorX'] = NaN, this['_anchorY'] = NaN, this['_widget'] = _0x2eb4bf['EMPTY'], _0xe3350f && (this['preinitial' + 'ize'](), this['createChil' + 'dren'](), this['initialize']());
        }
        ['destroy'](_0xabdb15 = !0x0) {
            super['destroy'](_0xabdb15), this['_dataSourc' + 'e'] = null, this['_tag'] = null, this['_toolTip'] = null;
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
            var _0x625233 = 0x0;
            this['commitMeas' + 'ure']();
            for (var _0x3ab436 = this['numChildre' + 'n'] - 0x1; _0x3ab436 > -0x1; _0x3ab436--) {
                var _0x450741 = this['getChildAt'](_0x3ab436);
                _0x450741['_visible'] && (_0x625233 = Math['max'](_0x450741['_x'] + _0x450741['width'] * _0x450741['scaleX'], _0x625233));
            }
            return _0x625233;
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
            var _0x45d994 = 0x0;
            this['commitMeas' + 'ure']();
            for (var _0x1dc81b = this['numChildre' + 'n'] - 0x1; _0x1dc81b > -0x1; _0x1dc81b--) {
                var _0x204a5a = this['getChildAt'](_0x1dc81b);
                _0x204a5a['_visible'] && (_0x45d994 = Math['max'](_0x204a5a['_y'] + _0x204a5a['height'] * _0x204a5a['scaleY'], _0x45d994));
            }
            return _0x45d994;
        }
        get ['dataSource']() {
            return this['get_dataSo' + 'urce']();
        }
        ['get_dataSo' + 'urce']() {
            return this['_dataSourc' + 'e'];
        }
        set ['dataSource'](_0x5456fb) {
            this['set_dataSo' + 'urce'](_0x5456fb);
        }
        ['set_dataSo' + 'urce'](_0x1c6f0b) {
            for (var _0x4f0590 in (this['_dataSourc' + 'e'] = _0x1c6f0b, this['_dataSourc' + 'e']))
                _0x4f0590 in this && 'function' != typeof this[_0x4f0590] && (this[_0x4f0590] = this['_dataSourc' + 'e'][_0x4f0590]);
        }
        get ['top']() {
            return this['get_top']();
        }
        ['get_top']() {
            return this['_widget']['top'];
        }
        set ['top'](_0x23319a) {
            this['set_top'](_0x23319a);
        }
        ['set_top'](_0xcdd77f) {
            _0xcdd77f != this['_widget']['top'] && (this['_getWidget']()['top'] = _0xcdd77f);
        }
        get ['bottom']() {
            return this['get_bottom']();
        }
        ['get_bottom']() {
            return this['_widget']['bottom'];
        }
        set ['bottom'](_0x3b95b7) {
            this['set_bottom'](_0x3b95b7);
        }
        ['set_bottom'](_0x25454c) {
            _0x25454c != this['_widget']['bottom'] && (this['_getWidget']()['bottom'] = _0x25454c);
        }
        get ['left']() {
            return this['_widget']['left'];
        }
        set ['left'](_0xaa035) {
            _0xaa035 != this['_widget']['left'] && (this['_getWidget']()['left'] = _0xaa035);
        }
        get ['right']() {
            return this['_widget']['right'];
        }
        set ['right'](_0x3084b9) {
            _0x3084b9 != this['_widget']['right'] && (this['_getWidget']()['right'] = _0x3084b9);
        }
        get ['centerX']() {
            return this['_widget']['centerX'];
        }
        set ['centerX'](_0x34bb8a) {
            _0x34bb8a != this['_widget']['centerX'] && (this['_getWidget']()['centerX'] = _0x34bb8a);
        }
        get ['centerY']() {
            return this['_widget']['centerY'];
        }
        set ['centerY'](_0x4ad2f2) {
            _0x4ad2f2 != this['_widget']['centerY'] && (this['_getWidget']()['centerY'] = _0x4ad2f2);
        }
        ['_sizeChang' + 'ed']() {
            isNaN(this['_anchorX']) || (this['pivotX'] = this['anchorX'] * this['width']), isNaN(this['_anchorY']) || (this['pivotY'] = this['anchorY'] * this['height']), this['event'](_0x20385f['Event']['RESIZE']), this['_widget'] !== _0x2eb4bf['EMPTY'] && this['_widget']['resetLayou' + 't']();
        }
        get ['tag']() {
            return this['_tag'];
        }
        set ['tag'](_0xf63b15) {
            this['_tag'] = _0xf63b15;
        }
        get ['toolTip']() {
            return this['_toolTip'];
        }
        set ['toolTip'](_0x1a415b) {
            this['_toolTip'] != _0x1a415b && (this['_toolTip'] = _0x1a415b, null != _0x1a415b ? (this['on'](_0x20385f['Event']['MOUSE_OVER'], this, this['onMouseOve' + 'r']), this['on'](_0x20385f['Event']['MOUSE_OUT'], this, this['onMouseOut'])) : (this['off'](_0x20385f['Event']['MOUSE_OVER'], this, this['onMouseOve' + 'r']), this['off'](_0x20385f['Event']['MOUSE_OUT'], this, this['onMouseOut'])));
        }
        ['onMouseOve' + 'r'](_0x114d14) {
            _0x20385f['ILaya']['stage']['event'](_0x3c5059['SHOW_TIP'], this['_toolTip']);
        }
        ['onMouseOut'](_0x385bc3) {
            _0x20385f['ILaya']['stage']['event'](_0x3c5059['HIDE_TIP'], this['_toolTip']);
        }
        get ['gray']() {
            return this['_gray'];
        }
        set ['gray'](_0x233520) {
            _0x233520 !== this['_gray'] && (this['_gray'] = _0x233520, _0x234441['gray'](this, _0x233520));
        }
        get ['disabled']() {
            return this['_disabled'];
        }
        set ['disabled'](_0x125d17) {
            _0x125d17 !== this['_disabled'] && (this['gray'] = this['_disabled'] = _0x125d17, this['mouseEnabl' + 'ed'] = !_0x125d17);
        }
        ['_getWidget']() {
            return this['_widget'] === _0x2eb4bf['EMPTY'] && (this['_widget'] = this['addCompone' + 'nt'](_0x2eb4bf)), this['_widget'];
        }
        set ['scaleX'](_0xef7d73) {
            this['set_scaleX'](_0xef7d73);
        }
        ['set_scaleX'](_0x14e0c3) {
            super['get_scaleX']() != _0x14e0c3 && (super['set_scaleX'](_0x14e0c3), this['event'](_0x20385f['Event']['RESIZE']));
        }
        get ['scaleX']() {
            return super['scaleX'];
        }
        set ['scaleY'](_0x54b1b7) {
            this['set_scaleY'](_0x54b1b7);
        }
        ['set_scaleY'](_0x4fa713) {
            super['get_scaleY']() != _0x4fa713 && (super['set_scaleY'](_0x4fa713), this['event'](_0x20385f['Event']['RESIZE']));
        }
        get ['scaleY']() {
            return super['scaleY'];
        }
        ['onCompResi' + 'ze']() {
            this['_sizeChang' + 'ed']();
        }
        set ['width'](_0x1afbec) {
            this['set_width'](_0x1afbec);
        }
        ['set_width'](_0x846551) {
            super['get_width']() != _0x846551 && (super['set_width'](_0x846551), this['callLater'](this['_sizeChang' + 'ed']));
        }
        set ['height'](_0x1380e2) {
            this['set_height'](_0x1380e2);
        }
        ['set_height'](_0x1e300f) {
            super['get_height']() != _0x1e300f && (super['set_height'](_0x1e300f), this['callLater'](this['_sizeChang' + 'ed']));
        }
        get ['anchorX']() {
            return this['get_anchor' + 'X']();
        }
        ['get_anchor' + 'X']() {
            return this['_anchorX'];
        }
        set ['anchorX'](_0x33f8ba) {
            this['set_anchor' + 'X'](_0x33f8ba);
        }
        ['set_anchor' + 'X'](_0x1f6da4) {
            this['_anchorX'] != _0x1f6da4 && (this['_anchorX'] = _0x1f6da4, this['callLater'](this['_sizeChang' + 'ed']));
        }
        get ['anchorY']() {
            return this['get_anchor' + 'Y']();
        }
        ['get_anchor' + 'Y']() {
            return this['_anchorY'];
        }
        set ['anchorY'](_0xbe1be5) {
            this['set_anchor' + 'Y'](_0xbe1be5);
        }
        ['set_anchor' + 'Y'](_0x1ebb01) {
            this['_anchorY'] != _0x1ebb01 && (this['_anchorY'] = _0x1ebb01, this['callLater'](this['_sizeChang' + 'ed']));
        }
        ['_childChan' + 'ged'](_0x11348a = null) {
            this['callLater'](this['_sizeChang' + 'ed']), super['_childChan' + 'ged'](_0x11348a);
        }
    }
    _0x20385f['ILaya']['regClass'](_0xa31ae0), _0x20385f['ClassUtils']['regClass']('laya.ui.UI' + 'Component', _0xa31ae0), _0x20385f['ClassUtils']['regClass']('Laya.UICom' + 'ponent', _0xa31ae0);
    class _0x15956b extends _0xa31ae0 {
        constructor(_0x57fb4e = null) {
            super(), this['skin'] = _0x57fb4e;
        }
        ['destroy'](_0x35e8b4 = !0x0) {
            super['destroy'](!0x0), this['_bitmap'] && this['_bitmap']['destroy'](), this['_bitmap'] = null;
        }
        ['dispose']() {
            this['destroy'](!0x0), _0x20385f['ILaya']['loader']['clearRes'](this['_skin']);
        }
        ['createChil' + 'dren']() {
            this['graphics'] = this['_bitmap'] = new _0x2f278e(), this['_bitmap']['autoCacheC' + 'md'] = !0x1;
        }
        get ['skin']() {
            return this['_skin'];
        }
        set ['skin'](_0xff5a5) {
            if (this['_skin'] != _0xff5a5) {
                if (this['_skin'] = _0xff5a5, _0xff5a5) {
                    var _0x270dcc = _0x20385f['Loader']['getRes'](_0xff5a5);
                    _0x270dcc ? (this['source'] = _0x270dcc, this['onCompResi' + 'ze']()) : _0x20385f['ILaya']['loader']['load'](this['_skin'], _0x20385f['Handler']['create'](this, this['setSource'], [this['_skin']]), null, _0x20385f['Loader']['IMAGE'], 0x1, !0x0, this['_group']);
                } else
                    this['source'] = null;
            }
        }
        get ['source']() {
            return this['_bitmap']['source'];
        }
        set ['source'](_0x5aad4a) {
            this['_bitmap'] && (this['_bitmap']['source'] = _0x5aad4a, this['event'](_0x20385f['Event']['LOADED']), this['repaint']());
        }
        get ['group']() {
            return this['_group'];
        }
        set ['group'](_0x546a09) {
            _0x546a09 && this['_skin'] && _0x20385f['Loader']['setGroup'](this['_skin'], _0x546a09), this['_group'] = _0x546a09;
        }
        ['setSource'](_0x43e085, _0x347ee3 = null) {
            _0x43e085 === this['_skin'] && _0x347ee3 && (this['source'] = _0x347ee3, this['onCompResi' + 'ze']());
        }
        ['measureWid' + 'th']() {
            return this['_bitmap']['width'];
        }
        ['measureHei' + 'ght']() {
            return this['_bitmap']['height'];
        }
        set ['width'](_0x4f2dd7) {
            super['width'] = _0x4f2dd7, this['_bitmap']['width'] = 0x0 == _0x4f2dd7 ? 1e-7 : _0x4f2dd7;
        }
        get ['width']() {
            return super['width'];
        }
        set ['height'](_0x2aff43) {
            super['height'] = _0x2aff43, this['_bitmap']['height'] = 0x0 == _0x2aff43 ? 1e-7 : _0x2aff43;
        }
        get ['height']() {
            return super['height'];
        }
        get ['sizeGrid']() {
            return this['_bitmap']['sizeGrid'] ? this['_bitmap']['sizeGrid']['join'](',') : null;
        }
        set ['sizeGrid'](_0x377e62) {
            this['_bitmap']['sizeGrid'] = _0x234441['fillArray'](_0x44287a['defaultSiz' + 'eGrid'], _0x377e62, Number);
        }
        set ['dataSource'](_0x4b40f4) {
            this['_dataSourc' + 'e'] = _0x4b40f4, 'string' == typeof _0x4b40f4 ? this['skin'] = _0x4b40f4 : super['dataSource'] = _0x4b40f4;
        }
        get ['dataSource']() {
            return super['dataSource'];
        }
    }
    _0x20385f['ILaya']['regClass'](_0x15956b), _0x20385f['ClassUtils']['regClass']('laya.ui.Im' + 'age', _0x15956b), _0x20385f['ClassUtils']['regClass']('Laya.Image', _0x15956b);
    class _0x1b9455 extends _0x15956b {
        constructor(_0xe6a44 = null) {
            super(), this['advsListAr' + 'r'] = [], this['resUrl'] = 'https://un' + 'ioncdn.lay' + 'abox.com/c' + 'onfig/icon' + 'list.json', this['_http'] = new _0x20385f['Browser']['window']['XMLHttpReq' + 'uest'](), this['_data'] = [], this['_resquestT' + 'ime'] = 0x57e40, this['_playIndex'] = 0x0, this['_lunboTime'] = 0x1388, this['skin'] = _0xe6a44, this['setLoadUrl'](), this['init'](), this['size'](0x78, 0x78);
        }
        ['setLoadUrl']() {
        }
        ['init']() {
            this['isSupportJ' + 'ump']() ? ((_0x20385f['Browser']['onMiniGame'] || _0x20385f['Browser']['onBDMiniGa' + 'me']) && _0x20385f['ILaya']['timer']['loop'](this['_resquestT' + 'ime'], this, this['onGetAdvsL' + 'istData']), this['onGetAdvsL' + 'istData'](), this['initEvent']()) : this['visible'] = !0x1;
        }
        ['initEvent']() {
            this['on'](_0x20385f['Event']['CLICK'], this, this['onAdvsImgC' + 'lick']);
        }
        ['onAdvsImgC' + 'lick']() {
            this['getCurrent' + 'AppidObj']() && this['jumptoGame']();
        }
        ['revertAdvs' + 'Data']() {
            this['advsListAr' + 'r'][this['_playIndex']] && (this['visible'] = !0x0, this['skin'] = this['advsListAr' + 'r'][this['_playIndex']]);
        }
        ['isSupportJ' + 'ump']() {
            return _0x20385f['Browser']['onMiniGame'] ? window['wx']['navigateTo' + 'MiniProgra' + 'm'] instanceof Function : !!_0x20385f['Browser']['onBDMiniGa' + 'me'];
        }
        ['jumptoGame']() {
            var _0xdb175d = this['advsListAr' + 'r'][this['_playIndex']];
            parseInt(_0xdb175d['gameid']), _0xdb175d['extendInfo'], _0xdb175d['path'], _0x20385f['Browser']['onMiniGame'] ? this['isSupportJ' + 'ump']() && window['wx']['navigateTo' + 'MiniProgra' + 'm']({
                'appId': this['_appid'],
                'path': '',
                'extraData': '',
                'envVersion': 'release',
                'success': function () {
                },
                'fail': function () {
                },
                'complete': function () {
                    this['updateAdvs' + 'Info']();
                }['bind'](this)
            }) : _0x20385f['Browser']['onBDMiniGa' + 'me'] || (this['visible'] = !0x1);
        }
        ['updateAdvs' + 'Info']() {
            this['visible'] = !0x1, this['onLunbo'](), _0x20385f['ILaya']['timer']['loop'](this['_lunboTime'], this, this['onLunbo']);
        }
        ['onLunbo']() {
            this['_playIndex'] >= this['advsListAr' + 'r']['length'] - 0x1 ? this['_playIndex'] = 0x0 : this['_playIndex'] += 0x1, this['visible'] = !0x0, this['revertAdvs' + 'Data']();
        }
        ['getCurrent' + 'AppidObj']() {
            return this['advsListAr' + 'r'][this['_playIndex']];
        }
        ['onGetAdvsL' + 'istData']() {
            var _0x223c92 = this, _0x325fde = _0x1b9455['randRange'](0x2710, 0xf4240), _0x1059d0 = this['resUrl'] + '?' + _0x325fde;
            this['_http']['open']('get', _0x1059d0, !0x0), this['_http']['setRequest' + 'Header']('Content-Ty' + 'pe', 'applicatio' + 'n/x-www-fo' + 'rm-urlenco' + 'ded'), this['_http']['responseTy' + 'pe'] = 'text', this['_http']['onerror'] = function (_0x548a3d) {
                _0x223c92['_onError'](_0x548a3d);
            }, this['_http']['onload'] = function (_0x5b98b9) {
                _0x223c92['_onLoad'](_0x5b98b9);
            }, this['_http']['send'](null);
        }
        static ['randRange'](_0x14eb83, _0x214cb1) {
            return Math['floor'](Math['random']() * (_0x214cb1 - _0x14eb83 + 0x1)) + _0x14eb83;
        }
        ['_onError'](_0x3e1d8e) {
            this['error']('Request\x20fa' + 'iled\x20Statu' + 's:' + this['_http']['status'] + '\x20text:' + this['_http']['statusText']);
        }
        ['_onLoad'](_0x238a73) {
            var _0x5dc3ee = this['_http'], _0x69003c = void 0x0 !== _0x5dc3ee['status'] ? _0x5dc3ee['status'] : 0xc8;
            0xc8 === _0x69003c || 0xcc === _0x69003c || 0x0 === _0x69003c ? this['complete']() : this['error']('[' + _0x5dc3ee['status'] + ']' + _0x5dc3ee['statusText'] + ':' + _0x5dc3ee['responseUR' + 'L']);
        }
        ['error'](_0x17f6dc) {
            this['event'](_0x20385f['Event']['ERROR'], _0x17f6dc);
        }
        ['complete']() {
            try {
                this['_data'] = this['_http']['response'] || this['_http']['responseTe' + 'xt'], this['_data'] = JSON['parse'](this['_data']), this['advsListAr' + 'r'] = this['_data']['list'], this['_appid'] = this['_data']['appid'], this['updateAdvs' + 'Info'](), this['revertAdvs' + 'Data']();
            } catch (_0x1df18b) {
                this['error'](_0x1df18b['message']);
            }
        }
        ['getAdvsQAr' + 'r'](_0x4a5354) {
            var _0x68be11 = [], _0x1b46e6 = _0x20385f['LocalStora' + 'ge']['getJSON']('gameObj');
            for (var _0x5539f1 in _0x4a5354) {
                var _0x1d60e9 = _0x4a5354[_0x5539f1];
                _0x1b46e6 && _0x1b46e6[_0x1d60e9['gameid']] && !_0x1d60e9['isQiangZhi'] || _0x68be11['push'](_0x1d60e9);
            }
            return _0x68be11;
        }
        ['clear']() {
            var _0xe5557d = this['_http'];
            _0xe5557d['onerror'] = _0xe5557d['onabort'] = _0xe5557d['onprogress'] = _0xe5557d['onload'] = null;
        }
        ['destroy'](_0x491735 = !0x0) {
            _0x20385f['ILaya']['timer']['clear'](this, this['onLunbo']), super['destroy'](!0x0), this['clear'](), _0x20385f['ILaya']['timer']['clear'](this, this['onGetAdvsL' + 'istData']);
        }
    }
    _0x20385f['ClassUtils']['regClass']('laya.ui.Ad' + 'vImage', _0x1b9455), _0x20385f['ClassUtils']['regClass']('Laya.AdvIm' + 'age', _0x1b9455);
    class _0x1c310b extends _0xa31ae0 {
        set ['dataSource'](_0xaf0580) {
            for (var _0x49dc66 in (this['_dataSourc' + 'e'] = _0xaf0580, _0xaf0580)) {
                var _0x4dfaeb = this['getChildBy' + 'Name'](_0x49dc66);
                _0x4dfaeb ? _0x4dfaeb['dataSource'] = _0xaf0580[_0x49dc66] : _0x49dc66 in this && !(this[_0x49dc66] instanceof Function) && (this[_0x49dc66] = _0xaf0580[_0x49dc66]);
            }
        }
        get ['dataSource']() {
            return super['dataSource'];
        }
        get ['bgColor']() {
            return this['_bgColor'];
        }
        set ['bgColor'](_0x588e59) {
            this['_bgColor'] = _0x588e59, _0x588e59 ? (this['_onResize'](null), this['on'](_0x20385f['Event']['RESIZE'], this, this['_onResize'])) : (this['graphics']['clear'](), this['off'](_0x20385f['Event']['RESIZE'], this, this['_onResize']));
        }
        ['_onResize'](_0x506829) {
            this['graphics']['clear'](), this['graphics']['drawRect'](0x0, 0x0, this['width'], this['height'], this['_bgColor']);
        }
    }
    _0x20385f['ILaya']['regClass'](_0x1c310b), _0x20385f['ClassUtils']['regClass']('laya.ui.Bo' + 'x', _0x1c310b), _0x20385f['ClassUtils']['regClass']('Laya.Box', _0x1c310b);
    class _0x5dea9c extends _0xa31ae0 {
        constructor(_0x340d7c = null, _0x349aac = '') {
            super(), this['_labelColo' + 'rs'] = _0x44287a['buttonLabe' + 'lColors'], this['_state'] = 0x0, this['_autoSize'] = !0x0, this['_stateNum'] = _0x44287a['buttonStat' + 'eNum'], this['_stateChan' + 'ged'] = !0x1, this['skin'] = _0x340d7c, this['label'] = _0x349aac;
        }
        ['destroy'](_0x23a4d3 = !0x0) {
            super['destroy'](_0x23a4d3), this['_bitmap'] && this['_bitmap']['destroy'](), this['_text'] && this['_text']['destroy'](_0x23a4d3), this['_bitmap'] = null, this['_text'] = null, this['_clickHand' + 'ler'] = null, this['_labelColo' + 'rs'] = this['_sources'] = this['_strokeCol' + 'ors'] = null;
        }
        ['createChil' + 'dren']() {
            this['graphics'] = this['_bitmap'] = new _0x2f278e();
        }
        ['createText']() {
            this['_text'] || (this['_text'] = new _0x20385f['Text'](), this['_text']['overflow'] = _0x20385f['Text']['HIDDEN'], this['_text']['align'] = 'center', this['_text']['valign'] = 'middle', this['_text']['width'] = this['_width'], this['_text']['height'] = this['_height']);
        }
        ['initialize']() {
            0x1 !== this['_mouseStat' + 'e'] && (this['mouseEnabl' + 'ed'] = !0x0, this['_setBit'](_0x20385f['Const']['HAS_MOUSE'], !0x0)), this['_createLis' + 'tener'](_0x20385f['Event']['MOUSE_OVER'], this, this['onMouse'], null, !0x1, !0x1), this['_createLis' + 'tener'](_0x20385f['Event']['MOUSE_OUT'], this, this['onMouse'], null, !0x1, !0x1), this['_createLis' + 'tener'](_0x20385f['Event']['MOUSE_DOWN'], this, this['onMouse'], null, !0x1, !0x1), this['_createLis' + 'tener'](_0x20385f['Event']['MOUSE_UP'], this, this['onMouse'], null, !0x1, !0x1), this['_createLis' + 'tener'](_0x20385f['Event']['CLICK'], this, this['onMouse'], null, !0x1, !0x1);
        }
        ['onMouse'](_0x4a87f) {
            if (!0x1 !== this['toggle'] || !this['_selected'])
                return _0x4a87f['type'] === _0x20385f['Event']['CLICK'] ? (this['toggle'] && (this['selected'] = !this['_selected']), void (this['_clickHand' + 'ler'] && this['_clickHand' + 'ler']['run']())) : void (!this['_selected'] && (this['state'] = _0x5dea9c['stateMap'][_0x4a87f['type']]));
        }
        get ['skin']() {
            return this['_skin'];
        }
        set ['skin'](_0x50e8fb) {
            this['_skin'] != _0x50e8fb && (this['_skin'] = _0x50e8fb, _0x50e8fb ? _0x20385f['Loader']['getRes'](_0x50e8fb) ? this['_skinLoade' + 'd']() : _0x20385f['ILaya']['loader']['load'](this['_skin'], _0x20385f['Handler']['create'](this, this['_skinLoade' + 'd']), null, _0x20385f['Loader']['IMAGE'], 0x1) : this['_skinLoade' + 'd']());
        }
        ['_skinLoade' + 'd']() {
            this['callLater'](this['changeClip' + 's']), this['_setStateC' + 'hanged'](), this['_sizeChang' + 'ed'](), this['event'](_0x20385f['Event']['LOADED']);
        }
        get ['stateNum']() {
            return this['_stateNum'];
        }
        set ['stateNum'](_0x501e78) {
            'string' == typeof _0x501e78 && (_0x501e78 = parseInt(_0x501e78)), this['_stateNum'] != _0x501e78 && (this['_stateNum'] = _0x501e78 < 0x1 ? 0x1 : _0x501e78 > 0x3 ? 0x3 : _0x501e78, this['callLater'](this['changeClip' + 's']));
        }
        ['changeClip' + 's']() {
            var _0x10b20c = _0x20385f['Loader']['getRes'](this['_skin']);
            if (_0x10b20c) {
                var _0x408972 = _0x10b20c['sourceWidt' + 'h'], _0x203879 = _0x10b20c['sourceHeig' + 'ht'] / this['_stateNum'];
                _0x10b20c['$_GID'] || (_0x10b20c['$_GID'] = _0x20385f['Utils']['getGID']());
                var _0x319d0a = _0x10b20c['$_GID'] + '-' + this['_stateNum'], _0x35b4ba = _0x20385f['WeakObject']['I']['get'](_0x319d0a);
                if (_0x20385f['Utils']['isOkTextur' + 'eList'](_0x35b4ba) || (_0x35b4ba = null), _0x35b4ba)
                    this['_sources'] = _0x35b4ba;
                else {
                    if (this['_sources'] = [], 0x1 === this['_stateNum'])
                        this['_sources']['push'](_0x10b20c);
                    else {
                        for (var _0x558e8d = 0x0; _0x558e8d < this['_stateNum']; _0x558e8d++)
                            this['_sources']['push'](_0x20385f['Texture']['createFrom' + 'Texture'](_0x10b20c, 0x0, _0x203879 * _0x558e8d, _0x408972, _0x203879));
                    }
                    _0x20385f['WeakObject']['I']['set'](_0x319d0a, this['_sources']);
                }
                this['_autoSize'] ? (this['_bitmap']['width'] = this['_width'] || _0x408972, this['_bitmap']['height'] = this['_height'] || _0x203879, this['_text'] && (this['_text']['width'] = this['_bitmap']['width'], this['_text']['height'] = this['_bitmap']['height'])) : this['_text'] && (this['_text']['x'] = _0x408972);
            }
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
        set ['label'](_0x3bfc9f) {
            (this['_text'] || _0x3bfc9f) && (this['createText'](), this['_text']['text'] != _0x3bfc9f && (_0x3bfc9f && !this['_text']['parent'] && this['addChild'](this['_text']), this['_text']['text'] = (_0x3bfc9f + '')['replace'](/\\n/g, '\x0a'), this['_setStateC' + 'hanged']()));
        }
        get ['selected']() {
            return this['_selected'];
        }
        set ['selected'](_0x18b256) {
            this['_selected'] != _0x18b256 && (this['_selected'] = _0x18b256, this['state'] = this['_selected'] ? 0x2 : 0x0, this['event'](_0x20385f['Event']['CHANGE']));
        }
        get ['state']() {
            return this['_state'];
        }
        set ['state'](_0x4e429e) {
            this['_state'] != _0x4e429e && (this['_state'] = _0x4e429e, this['_setStateC' + 'hanged']());
        }
        ['changeStat' + 'e']() {
            this['_stateChan' + 'ged'] = !0x1, this['runCallLat' + 'er'](this['changeClip' + 's']);
            var _0x3885e1 = this['_state'] < this['_stateNum'] ? this['_state'] : this['_stateNum'] - 0x1;
            this['_sources'] && (this['_bitmap']['source'] = this['_sources'][_0x3885e1]), this['label'] && (this['_text']['color'] = this['_labelColo' + 'rs'][_0x3885e1], this['_strokeCol' + 'ors'] && (this['_text']['strokeColo' + 'r'] = this['_strokeCol' + 'ors'][_0x3885e1]));
        }
        get ['labelColor' + 's']() {
            return this['_labelColo' + 'rs']['join'](',');
        }
        set ['labelColor' + 's'](_0x4ffe36) {
            this['_labelColo' + 'rs'] = _0x234441['fillArray'](_0x44287a['buttonLabe' + 'lColors'], _0x4ffe36, String), this['_setStateC' + 'hanged']();
        }
        get ['strokeColo' + 'rs']() {
            return this['_strokeCol' + 'ors'] ? this['_strokeCol' + 'ors']['join'](',') : '';
        }
        set ['strokeColo' + 'rs'](_0xf4d52b) {
            this['_strokeCol' + 'ors'] = _0x234441['fillArray'](_0x44287a['buttonLabe' + 'lColors'], _0xf4d52b, String), this['_setStateC' + 'hanged']();
        }
        get ['labelPaddi' + 'ng']() {
            return this['createText'](), this['_text']['padding']['join'](',');
        }
        set ['labelPaddi' + 'ng'](_0x34ec97) {
            this['createText'](), this['_text']['padding'] = _0x234441['fillArray'](_0x44287a['labelPaddi' + 'ng'], _0x34ec97, Number);
        }
        get ['labelSize']() {
            return this['createText'](), this['_text']['fontSize'];
        }
        set ['labelSize'](_0x51a04b) {
            this['createText'](), this['_text']['fontSize'] = _0x51a04b;
        }
        get ['labelStrok' + 'e']() {
            return this['createText'](), this['_text']['stroke'];
        }
        set ['labelStrok' + 'e'](_0x59801e) {
            this['createText'](), this['_text']['stroke'] = _0x59801e;
        }
        get ['labelStrok' + 'eColor']() {
            return this['createText'](), this['_text']['strokeColo' + 'r'];
        }
        set ['labelStrok' + 'eColor'](_0xdf92c1) {
            this['createText'](), this['_text']['strokeColo' + 'r'] = _0xdf92c1;
        }
        get ['labelBold']() {
            return this['createText'](), this['_text']['bold'];
        }
        set ['labelBold'](_0x16065f) {
            this['createText'](), this['_text']['bold'] = _0x16065f;
        }
        get ['labelFont']() {
            return this['createText'](), this['_text']['font'];
        }
        set ['labelFont'](_0x529bcb) {
            this['createText'](), this['_text']['font'] = _0x529bcb;
        }
        get ['labelAlign']() {
            return this['createText'](), this['_text']['align'];
        }
        set ['labelAlign'](_0x53e42b) {
            this['createText'](), this['_text']['align'] = _0x53e42b;
        }
        get ['clickHandl' + 'er']() {
            return this['_clickHand' + 'ler'];
        }
        set ['clickHandl' + 'er'](_0xfa77ad) {
            this['_clickHand' + 'ler'] = _0xfa77ad;
        }
        get ['text']() {
            return this['createText'](), this['_text'];
        }
        get ['sizeGrid']() {
            return this['_bitmap']['sizeGrid'] ? this['_bitmap']['sizeGrid']['join'](',') : null;
        }
        set ['sizeGrid'](_0x4e5131) {
            this['_bitmap']['sizeGrid'] = _0x234441['fillArray'](_0x44287a['defaultSiz' + 'eGrid'], _0x4e5131, Number);
        }
        set ['width'](_0x39ef6a) {
            super['set_width'](_0x39ef6a), this['_autoSize'] && (this['_bitmap']['width'] = _0x39ef6a, this['_text'] && (this['_text']['width'] = _0x39ef6a));
        }
        get ['width']() {
            return super['get_width']();
        }
        set ['height'](_0x4594b6) {
            super['set_height'](_0x4594b6), this['_autoSize'] && (this['_bitmap']['height'] = _0x4594b6, this['_text'] && (this['_text']['height'] = _0x4594b6));
        }
        get ['height']() {
            return super['get_height']();
        }
        set ['dataSource'](_0x550de1) {
            this['_dataSourc' + 'e'] = _0x550de1, 'number' == typeof _0x550de1 || 'string' == typeof _0x550de1 ? this['label'] = _0x550de1 + '' : super['set_dataSo' + 'urce'](_0x550de1);
        }
        get ['dataSource']() {
            return super['get_dataSo' + 'urce']();
        }
        get ['iconOffset']() {
            return this['_bitmap']['_offset'] ? this['_bitmap']['_offset']['join'](',') : null;
        }
        set ['iconOffset'](_0x39eb6f) {
            this['_bitmap']['_offset'] = _0x39eb6f ? _0x234441['fillArray']([
                0x1,
                0x1
            ], _0x39eb6f, Number) : [];
        }
        ['_setStateC' + 'hanged']() {
            this['_stateChan' + 'ged'] || (this['_stateChan' + 'ged'] = !0x0, this['callLater'](this['changeStat' + 'e']));
        }
    }
    _0x5dea9c['stateMap'] = {
        'mouseup': 0x0,
        'mouseover': 0x1,
        'mousedown': 0x2,
        'mouseout': 0x0
    }, _0x20385f['ILaya']['regClass'](_0x5dea9c), _0x20385f['ClassUtils']['regClass']('laya.ui.Bu' + 'tton', _0x5dea9c), _0x20385f['ClassUtils']['regClass']('Laya.Butto' + 'n', _0x5dea9c);
    class _0x1dd0a3 extends _0x5dea9c {
        constructor(_0x35853b = null, _0x2d61d1 = '') {
            super(_0x35853b, _0x2d61d1), this['toggle'] = !0x0, this['_autoSize'] = !0x1;
        }
        ['preinitial' + 'ize']() {
            super['preinitial' + 'ize'](), this['toggle'] = !0x0, this['_autoSize'] = !0x1;
        }
        ['initialize']() {
            super['initialize'](), this['createText'](), this['_text']['align'] = 'left', this['_text']['valign'] = 'top', this['_text']['width'] = 0x0;
        }
        set ['dataSource'](_0x5c63cb) {
            this['_dataSourc' + 'e'] = _0x5c63cb, _0x5c63cb instanceof Boolean ? this['selected'] = _0x5c63cb : 'string' == typeof _0x5c63cb ? this['selected'] = 'true' === _0x5c63cb : super['dataSource'] = _0x5c63cb;
        }
        get ['dataSource']() {
            return super['dataSource'];
        }
    }
    _0x20385f['ILaya']['regClass'](_0x1dd0a3), _0x20385f['ClassUtils']['regClass']('laya.ui.Ch' + 'eckBox', _0x1dd0a3), _0x20385f['ClassUtils']['regClass']('Laya.Check' + 'Box', _0x1dd0a3);
    class _0x2e63f8 extends _0xa31ae0 {
        constructor(_0x77bcfa = null, _0x2ca129 = 0x1, _0x1b1663 = 0x1) {
            super(), this['_clipX'] = 0x1, this['_clipY'] = 0x1, this['_clipWidth'] = 0x0, this['_clipHeigh' + 't'] = 0x0, this['_interval'] = 0x32, this['_index'] = 0x0, this['_toIndex'] = -0x1, this['_clipX'] = _0x2ca129, this['_clipY'] = _0x1b1663, this['skin'] = _0x77bcfa;
        }
        ['destroy'](_0x225a23 = !0x0) {
            super['destroy'](!0x0), this['_bitmap'] && this['_bitmap']['destroy'](), this['_bitmap'] = null, this['_sources'] = null;
        }
        ['dispose']() {
            this['destroy'](!0x0), _0x20385f['ILaya']['loader']['clearRes'](this['_skin']);
        }
        ['createChil' + 'dren']() {
            this['graphics'] = this['_bitmap'] = new _0x2f278e();
        }
        ['_onDisplay'](_0x2f0403) {
            this['_isPlaying'] ? this['_getBit'](_0x20385f['Const']['DISPLAYED_' + 'INSTAGE']) ? this['play']() : this['stop']() : this['_autoPlay'] && this['play']();
        }
        get ['skin']() {
            return this['_skin'];
        }
        set ['skin'](_0x12d979) {
            this['_skin'] != _0x12d979 && (this['_skin'] = _0x12d979, _0x12d979 ? _0x20385f['Loader']['getRes'](_0x12d979) ? this['_skinLoade' + 'd']() : _0x20385f['ILaya']['loader']['load'](this['_skin'], _0x20385f['Handler']['create'](this, this['_skinLoade' + 'd']), null, _0x20385f['Loader']['IMAGE'], 0x1) : this['_bitmap']['source'] = null);
        }
        ['_skinLoade' + 'd']() {
            this['_setClipCh' + 'anged'](), this['_sizeChang' + 'ed'](), this['event'](_0x20385f['Event']['LOADED']);
        }
        get ['clipX']() {
            return this['_clipX'];
        }
        set ['clipX'](_0x187a6a) {
            this['_clipX'] = _0x187a6a || 0x1, this['_setClipCh' + 'anged']();
        }
        get ['clipY']() {
            return this['_clipY'];
        }
        set ['clipY'](_0x4d5086) {
            this['_clipY'] = _0x4d5086 || 0x1, this['_setClipCh' + 'anged']();
        }
        get ['clipWidth']() {
            return this['_clipWidth'];
        }
        set ['clipWidth'](_0xceb975) {
            this['_clipWidth'] = _0xceb975, this['_setClipCh' + 'anged']();
        }
        get ['clipHeight']() {
            return this['_clipHeigh' + 't'];
        }
        set ['clipHeight'](_0x47cd66) {
            this['_clipHeigh' + 't'] = _0x47cd66, this['_setClipCh' + 'anged']();
        }
        ['changeClip']() {
            if (this['_clipChang' + 'ed'] = !0x1, this['_skin']) {
                var _0x38bc60 = _0x20385f['Loader']['getRes'](this['_skin']);
                _0x38bc60 ? this['loadComple' + 'te'](this['_skin'], _0x38bc60) : _0x20385f['ILaya']['loader']['load'](this['_skin'], _0x20385f['Handler']['create'](this, this['loadComple' + 'te'], [this['_skin']]));
            }
        }
        ['loadComple' + 'te'](_0x376f5f, _0x12446b) {
            if (_0x376f5f === this['_skin'] && _0x12446b) {
                var _0x3e0b6c = this['_clipWidth'] || Math['ceil'](_0x12446b['sourceWidt' + 'h'] / this['_clipX']), _0x55e7d9 = this['_clipHeigh' + 't'] || Math['ceil'](_0x12446b['sourceHeig' + 'ht'] / this['_clipY']), _0x2bcab5 = this['_skin'] + _0x3e0b6c + _0x55e7d9, _0x55b92b = _0x20385f['WeakObject']['I']['get'](_0x2bcab5);
                if (_0x20385f['Utils']['isOkTextur' + 'eList'](_0x55b92b) || (_0x55b92b = null), _0x55b92b)
                    this['_sources'] = _0x55b92b;
                else {
                    this['_sources'] = [];
                    for (var _0x532579 = 0x0; _0x532579 < this['_clipY']; _0x532579++)
                        for (var _0x8ea78e = 0x0; _0x8ea78e < this['_clipX']; _0x8ea78e++)
                            this['_sources']['push'](_0x20385f['Texture']['createFrom' + 'Texture'](_0x12446b, _0x3e0b6c * _0x8ea78e, _0x55e7d9 * _0x532579, _0x3e0b6c, _0x55e7d9));
                    _0x20385f['WeakObject']['I']['set'](_0x2bcab5, this['_sources']);
                }
                this['index'] = this['_index'], this['event'](_0x20385f['Event']['LOADED']), this['onCompResi' + 'ze']();
            }
        }
        get ['sources']() {
            return this['_sources'];
        }
        set ['sources'](_0x2bcd37) {
            this['_sources'] = _0x2bcd37, this['index'] = this['_index'], this['event'](_0x20385f['Event']['LOADED']);
        }
        get ['group']() {
            return this['_group'];
        }
        set ['group'](_0x4a24e9) {
            _0x4a24e9 && this['_skin'] && _0x20385f['Loader']['setGroup'](this['_skin'], _0x4a24e9), this['_group'] = _0x4a24e9;
        }
        set ['width'](_0x1ac739) {
            super['width'] = _0x1ac739, this['_bitmap']['width'] = _0x1ac739;
        }
        get ['width']() {
            return super['width'];
        }
        set ['height'](_0x1c75a2) {
            super['height'] = _0x1c75a2, this['_bitmap']['height'] = _0x1c75a2;
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
        set ['sizeGrid'](_0x469b0c) {
            this['_bitmap']['sizeGrid'] = _0x234441['fillArray'](_0x44287a['defaultSiz' + 'eGrid'], _0x469b0c, Number);
        }
        get ['index']() {
            return this['_index'];
        }
        set ['index'](_0x5933d6) {
            this['_index'] = _0x5933d6, this['_bitmap'] && this['_sources'] && (this['_bitmap']['source'] = this['_sources'][_0x5933d6]), this['event'](_0x20385f['Event']['CHANGE']);
        }
        get ['total']() {
            return this['runCallLat' + 'er'](this['changeClip']), this['_sources'] ? this['_sources']['length'] : 0x0;
        }
        get ['autoPlay']() {
            return this['_autoPlay'];
        }
        set ['autoPlay'](_0x1779e7) {
            this['_autoPlay'] != _0x1779e7 && (this['_autoPlay'] = _0x1779e7, _0x1779e7 ? this['play']() : this['stop']());
        }
        get ['interval']() {
            return this['_interval'];
        }
        set ['interval'](_0x47740c) {
            this['_interval'] != _0x47740c && (this['_interval'] = _0x47740c, this['_isPlaying'] && this['play']());
        }
        get ['isPlaying']() {
            return this['_isPlaying'];
        }
        set ['isPlaying'](_0x1c85aa) {
            this['_isPlaying'] = _0x1c85aa;
        }
        ['play'](_0x1cc2b5 = 0x0, _0x5664c9 = -0x1) {
            this['_isPlaying'] = !0x0, this['index'] = _0x1cc2b5, this['_toIndex'] = _0x5664c9, this['_index']++, _0x20385f['ILaya']['timer']['loop'](this['interval'], this, this['_loop']), this['on'](_0x20385f['Event']['DISPLAY'], this, this['_onDisplay']), this['on'](_0x20385f['Event']['UNDISPLAY'], this, this['_onDisplay']);
        }
        ['_loop']() {
            this['_visible'] && this['_sources'] && (this['_index']++, this['_toIndex'] > -0x1 && this['_index'] >= this['_toIndex'] ? this['stop']() : this['_index'] >= this['_sources']['length'] && (this['_index'] = 0x0), this['index'] = this['_index']);
        }
        ['stop']() {
            this['_isPlaying'] = !0x1, _0x20385f['ILaya']['timer']['clear'](this, this['_loop']), this['event'](_0x20385f['Event']['COMPLETE']);
        }
        set ['dataSource'](_0x5f1368) {
            this['_dataSourc' + 'e'] = _0x5f1368, 'number' == typeof _0x5f1368 || 'string' == typeof _0x5f1368 ? this['index'] = parseInt(_0x5f1368) : super['dataSource'] = _0x5f1368;
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
    _0x20385f['ILaya']['regClass'](_0x2e63f8), _0x20385f['ClassUtils']['regClass']('laya.ui.Cl' + 'ip', _0x2e63f8), _0x20385f['ClassUtils']['regClass']('Laya.Clip', _0x2e63f8);
    class _0x2e229f extends _0xa31ae0 {
        constructor() {
            super(...arguments), this['_gridSize'] = 0xb, this['_bgColor'] = '#ffffff', this['_borderCol' + 'or'] = '#000000', this['_inputColo' + 'r'] = '#000000', this['_inputBgCo' + 'lor'] = '#efefef', this['_colors'] = [], this['_selectedC' + 'olor'] = '#000000';
        }
        ['destroy'](_0x49a355 = !0x0) {
            super['destroy'](_0x49a355), this['_colorPane' + 'l'] && this['_colorPane' + 'l']['destroy'](_0x49a355), this['_colorButt' + 'on'] && this['_colorButt' + 'on']['destroy'](_0x49a355), this['_colorPane' + 'l'] = null, this['_colorTile' + 's'] = null, this['_colorBloc' + 'k'] = null, this['_colorInpu' + 't'] = null, this['_colorButt' + 'on'] = null, this['_colors'] = null, this['changeHand' + 'ler'] = null;
        }
        ['createChil' + 'dren']() {
            this['addChild'](this['_colorButt' + 'on'] = new _0x5dea9c()), this['_colorPane' + 'l'] = new _0x1c310b(), this['_colorPane' + 'l']['size'](0xe6, 0xa6), this['_colorPane' + 'l']['addChild'](this['_colorTile' + 's'] = new _0x20385f['Sprite']()), this['_colorPane' + 'l']['addChild'](this['_colorBloc' + 'k'] = new _0x20385f['Sprite']()), this['_colorPane' + 'l']['addChild'](this['_colorInpu' + 't'] = new _0x20385f['Input']());
        }
        ['initialize']() {
            this['_colorButt' + 'on']['on'](_0x20385f['Event']['CLICK'], this, this['onColorBut' + 'tonClick']), this['_colorBloc' + 'k']['pos'](0x5, 0x5), this['_colorInpu' + 't']['pos'](0x3c, 0x5), this['_colorInpu' + 't']['size'](0x3c, 0x14), this['_colorInpu' + 't']['on'](_0x20385f['Event']['CHANGE'], this, this['onColorInp' + 'utChange']), this['_colorInpu' + 't']['on'](_0x20385f['Event']['KEY_DOWN'], this, this['onColorFie' + 'ldKeyDown']), this['_colorTile' + 's']['pos'](0x5, 0x1e), this['_colorTile' + 's']['on'](_0x20385f['Event']['MOUSE_MOVE'], this, this['onColorTil' + 'esMouseMov' + 'e']), this['_colorTile' + 's']['on'](_0x20385f['Event']['CLICK'], this, this['onColorTil' + 'esClick']), this['_colorTile' + 's']['size'](0x14 * this['_gridSize'], 0xc * this['_gridSize']), this['_colorPane' + 'l']['on'](_0x20385f['Event']['MOUSE_DOWN'], this, this['onPanelMou' + 'seDown']), this['bgColor'] = this['_bgColor'];
        }
        ['onPanelMou' + 'seDown'](_0x35e957) {
            _0x35e957['stopPropag' + 'ation']();
        }
        ['changePane' + 'l']() {
            this['_panelChan' + 'ged'] = !0x1;
            var _0x76d0dd = this['_colorPane' + 'l']['graphics'];
            _0x76d0dd['clear'](!0x0), _0x76d0dd['drawRect'](0x0, 0x0, 0xe6, 0xa6, this['_bgColor'], this['_borderCol' + 'or']), this['drawBlock'](this['_selectedC' + 'olor']), this['_colorInpu' + 't']['borderColo' + 'r'] = this['_borderCol' + 'or'], this['_colorInpu' + 't']['bgColor'] = this['_inputBgCo' + 'lor'], this['_colorInpu' + 't']['color'] = this['_inputColo' + 'r'], (_0x76d0dd = this['_colorTile' + 's']['graphics'])['clear'](!0x0);
            for (var _0x34b79b = [
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
                    ], _0x273b12 = 0x0; _0x273b12 < 0xc; _0x273b12++)
                for (var _0x352229 = 0x0; _0x352229 < 0x14; _0x352229++) {
                    var _0x324539;
                    _0x324539 = 0x0 === _0x352229 ? _0x34b79b[_0x273b12] : 0x1 === _0x352229 ? 0x0 : 0x33 * (((0x3 * _0x273b12 + _0x352229 / 0x6) % 0x3 << 0x0) + 0x3 * (_0x273b12 / 0x6 << 0x0)) << 0x10 | _0x352229 % 0x6 * 0x33 << 0x8 | (_0x273b12 << 0x0) % 0x6 * 0x33;
                    var _0x4ef8dc = _0x234441['toColor'](_0x324539);
                    this['_colors']['push'](_0x4ef8dc);
                    var _0x1df76e = _0x352229 * this['_gridSize'], _0x3bacb1 = _0x273b12 * this['_gridSize'];
                    _0x76d0dd['drawRect'](_0x1df76e, _0x3bacb1, this['_gridSize'], this['_gridSize'], _0x4ef8dc, '#000000');
                }
        }
        ['onColorBut' + 'tonClick'](_0x506820) {
            this['_colorPane' + 'l']['parent'] ? this['close']() : this['open']();
        }
        ['open']() {
            let _0x1941cf = _0x20385f['ILaya']['stage'];
            var _0x469edc = this['localToGlo' + 'bal'](new _0x20385f['Point']()), _0x15f617 = _0x469edc['x'] + this['_colorPane' + 'l']['width'] <= _0x1941cf['width'] ? _0x469edc['x'] : _0x1941cf['width'] - this['_colorPane' + 'l']['width'], _0x4844ce = _0x469edc['y'] + this['_colorButt' + 'on']['height'];
            _0x4844ce = _0x4844ce + this['_colorPane' + 'l']['height'] <= _0x1941cf['height'] ? _0x4844ce : _0x469edc['y'] - this['_colorPane' + 'l']['height'], this['_colorPane' + 'l']['pos'](_0x15f617, _0x4844ce), this['_colorPane' + 'l']['zOrder'] = 0x3e9, _0x1941cf['addChild'](this['_colorPane' + 'l']), _0x1941cf['on'](_0x20385f['Event']['MOUSE_DOWN'], this, this['removeColo' + 'rBox']);
        }
        ['close']() {
            _0x20385f['ILaya']['stage']['off'](_0x20385f['Event']['MOUSE_DOWN'], this, this['removeColo' + 'rBox']), this['_colorPane' + 'l']['removeSelf']();
        }
        ['removeColo' + 'rBox'](_0x190980 = null) {
            this['close']();
        }
        ['onColorFie' + 'ldKeyDown'](_0x2fa1a5) {
            0xd == _0x2fa1a5['keyCode'] && (this['_colorInpu' + 't']['text'] ? this['selectedCo' + 'lor'] = this['_colorInpu' + 't']['text'] : this['selectedCo' + 'lor'] = null, this['close'](), _0x2fa1a5['stopPropag' + 'ation']());
        }
        ['onColorInp' + 'utChange'](_0x269e75 = null) {
            this['_colorInpu' + 't']['text'] ? this['drawBlock'](this['_colorInpu' + 't']['text']) : this['drawBlock']('#FFFFFF');
        }
        ['onColorTil' + 'esClick'](_0x42abdd) {
            this['selectedCo' + 'lor'] = this['getColorBy' + 'Mouse'](), this['close']();
        }
        ['onColorTil' + 'esMouseMov' + 'e'](_0x367df5) {
            this['_colorInpu' + 't']['focus'] = !0x1;
            var _0xc85f2c = this['getColorBy' + 'Mouse']();
            this['_colorInpu' + 't']['text'] = _0xc85f2c, this['drawBlock'](_0xc85f2c);
        }
        ['getColorBy' + 'Mouse']() {
            var _0x3257fc = this['_colorTile' + 's']['getMousePo' + 'int'](), _0x1e38b5 = Math['floor'](_0x3257fc['x'] / this['_gridSize']), _0x37e82c = Math['floor'](_0x3257fc['y'] / this['_gridSize']);
            return this['_colors'][0x14 * _0x37e82c + _0x1e38b5];
        }
        ['drawBlock'](_0xdd58b3) {
            var _0x147a44 = this['_colorBloc' + 'k']['graphics'];
            _0x147a44['clear'](!0x0);
            var _0x3fab09 = _0xdd58b3 || '#ffffff';
            _0x147a44['drawRect'](0x0, 0x0, 0x32, 0x14, _0x3fab09, this['_borderCol' + 'or']), _0xdd58b3 || _0x147a44['drawLine'](0x0, 0x0, 0x32, 0x14, '#ff0000');
        }
        get ['selectedCo' + 'lor']() {
            return this['_selectedC' + 'olor'];
        }
        set ['selectedCo' + 'lor'](_0x4474ad) {
            this['_selectedC' + 'olor'] != _0x4474ad && (this['_selectedC' + 'olor'] = this['_colorInpu' + 't']['text'] = _0x4474ad, this['drawBlock'](_0x4474ad), this['changeColo' + 'r'](), this['changeHand' + 'ler'] && this['changeHand' + 'ler']['runWith'](this['_selectedC' + 'olor']), this['event'](_0x20385f['Event']['CHANGE'], _0x20385f['Event']['EMPTY']['setTo'](_0x20385f['Event']['CHANGE'], this, this)));
        }
        get ['skin']() {
            return this['_colorButt' + 'on']['skin'];
        }
        set ['skin'](_0x19ff9a) {
            this['_colorButt' + 'on']['once'](_0x20385f['Event']['LOADED'], this, this['changeColo' + 'r']), this['_colorButt' + 'on']['skin'] = _0x19ff9a;
        }
        ['changeColo' + 'r']() {
            var _0x4ff9b6 = this['graphics'];
            _0x4ff9b6['clear'](!0x0);
            var _0x4b214d = this['_selectedC' + 'olor'] || '#000000';
            _0x4ff9b6['drawRect'](0x0, 0x0, this['_colorButt' + 'on']['width'], this['_colorButt' + 'on']['height'], _0x4b214d);
        }
        get ['bgColor']() {
            return this['_bgColor'];
        }
        set ['bgColor'](_0x13c2df) {
            this['_bgColor'] = _0x13c2df, this['_setPanelC' + 'hanged']();
        }
        get ['borderColo' + 'r']() {
            return this['_borderCol' + 'or'];
        }
        set ['borderColo' + 'r'](_0x341f64) {
            this['_borderCol' + 'or'] = _0x341f64, this['_setPanelC' + 'hanged']();
        }
        get ['inputColor']() {
            return this['_inputColo' + 'r'];
        }
        set ['inputColor'](_0xa36659) {
            this['_inputColo' + 'r'] = _0xa36659, this['_setPanelC' + 'hanged']();
        }
        get ['inputBgCol' + 'or']() {
            return this['_inputBgCo' + 'lor'];
        }
        set ['inputBgCol' + 'or'](_0x84df72) {
            this['_inputBgCo' + 'lor'] = _0x84df72, this['_setPanelC' + 'hanged']();
        }
        ['_setPanelC' + 'hanged']() {
            this['_panelChan' + 'ged'] || (this['_panelChan' + 'ged'] = !0x0, this['callLater'](this['changePane' + 'l']));
        }
    }
    _0x20385f['ILaya']['regClass'](_0x2e229f), _0x20385f['ClassUtils']['regClass']('laya.ui.Co' + 'lorPicker', _0x2e229f), _0x20385f['ClassUtils']['regClass']('Laya.Color' + 'Picker', _0x2e229f);
    class _0x3aa97b extends _0xa31ae0 {
        constructor(_0x2dbf91 = '') {
            super(), this['text'] = _0x2dbf91;
        }
        ['destroy'](_0x29a41c = !0x0) {
            super['destroy'](_0x29a41c), this['_tf'] = null;
        }
        ['createChil' + 'dren']() {
            this['addChild'](this['_tf'] = new _0x20385f['Text']());
        }
        get ['text']() {
            return this['_tf']['text'];
        }
        set ['text'](_0x21bbc2) {
            this['_tf']['text'] != _0x21bbc2 && (_0x21bbc2 && (_0x21bbc2 = _0x234441['adptString'](_0x21bbc2 + '')), this['_tf']['text'] = _0x21bbc2, this['event'](_0x20385f['Event']['CHANGE']), this['_width'] && this['_height'] || this['onCompResi' + 'ze']());
        }
        ['changeText'](_0x3503ab) {
            this['_tf']['changeText'](_0x3503ab);
        }
        get ['wordWrap']() {
            return this['_tf']['wordWrap'];
        }
        set ['wordWrap'](_0x14102e) {
            this['_tf']['wordWrap'] = _0x14102e;
        }
        get ['color']() {
            return this['_tf']['color'];
        }
        set ['color'](_0x11b438) {
            this['_tf']['color'] = _0x11b438;
        }
        get ['font']() {
            return this['_tf']['font'];
        }
        set ['font'](_0x200309) {
            this['_tf']['font'] = _0x200309;
        }
        get ['align']() {
            return this['_tf']['align'];
        }
        set ['align'](_0x430fbe) {
            this['_tf']['align'] = _0x430fbe;
        }
        get ['valign']() {
            return this['_tf']['valign'];
        }
        set ['valign'](_0x5df7f2) {
            this['_tf']['valign'] = _0x5df7f2;
        }
        get ['bold']() {
            return this['_tf']['bold'];
        }
        set ['bold'](_0x2badd3) {
            this['_tf']['bold'] = _0x2badd3;
        }
        get ['italic']() {
            return this['_tf']['italic'];
        }
        set ['italic'](_0x4527ef) {
            this['_tf']['italic'] = _0x4527ef;
        }
        get ['leading']() {
            return this['_tf']['leading'];
        }
        set ['leading'](_0x480abd) {
            this['_tf']['leading'] = _0x480abd;
        }
        get ['fontSize']() {
            return this['_tf']['fontSize'];
        }
        set ['fontSize'](_0x148d80) {
            this['_tf']['fontSize'] = _0x148d80;
        }
        get ['padding']() {
            return this['_tf']['padding']['join'](',');
        }
        set ['padding'](_0x3a8377) {
            this['_tf']['padding'] = _0x234441['fillArray'](_0x44287a['labelPaddi' + 'ng'], _0x3a8377, Number);
        }
        get ['bgColor']() {
            return this['_tf']['bgColor'];
        }
        set ['bgColor'](_0x40c8cf) {
            this['_tf']['bgColor'] = _0x40c8cf;
        }
        get ['borderColo' + 'r']() {
            return this['_tf']['borderColo' + 'r'];
        }
        set ['borderColo' + 'r'](_0x5f24b5) {
            this['_tf']['borderColo' + 'r'] = _0x5f24b5;
        }
        get ['stroke']() {
            return this['_tf']['stroke'];
        }
        set ['stroke'](_0x59d476) {
            this['_tf']['stroke'] = _0x59d476;
        }
        get ['strokeColo' + 'r']() {
            return this['_tf']['strokeColo' + 'r'];
        }
        set ['strokeColo' + 'r'](_0x371b16) {
            this['_tf']['strokeColo' + 'r'] = _0x371b16;
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
        set ['width'](_0x48c40b) {
            super['width'] = _0x48c40b, this['_tf']['width'] = _0x48c40b;
        }
        get ['height']() {
            return this['_height'] || this['_tf']['text'] ? super['height'] : 0x0;
        }
        set ['height'](_0x38db98) {
            super['height'] = _0x38db98, this['_tf']['height'] = _0x38db98;
        }
        set ['dataSource'](_0x175017) {
            this['_dataSourc' + 'e'] = _0x175017, 'number' == typeof _0x175017 || 'string' == typeof _0x175017 ? this['text'] = _0x175017 + '' : super['dataSource'] = _0x175017;
        }
        get ['dataSource']() {
            return super['dataSource'];
        }
        get ['overflow']() {
            return this['_tf']['overflow'];
        }
        set ['overflow'](_0xa1f23e) {
            this['_tf']['overflow'] = _0xa1f23e;
        }
        get ['underline']() {
            return this['_tf']['underline'];
        }
        set ['underline'](_0x2fdf40) {
            this['_tf']['underline'] = _0x2fdf40;
        }
        get ['underlineC' + 'olor']() {
            return this['_tf']['underlineC' + 'olor'];
        }
        set ['underlineC' + 'olor'](_0x28b988) {
            this['_tf']['underlineC' + 'olor'] = _0x28b988;
        }
    }
    _0x20385f['ILaya']['regClass'](_0x3aa97b), _0x20385f['ClassUtils']['regClass']('laya.ui.La' + 'bel', _0x3aa97b), _0x20385f['ClassUtils']['regClass']('Laya.Label', _0x3aa97b);
    class _0x26d3fd extends _0xa31ae0 {
        constructor(_0x2d3ebf = null) {
            super(), this['isVertical'] = !0x0, this['showLabel'] = !0x0, this['_max'] = 0x64, this['_min'] = 0x0, this['_tick'] = 0x1, this['_value'] = 0x0, _0x26d3fd['label'] || (_0x26d3fd['label'] = new _0x3aa97b()), this['skin'] = _0x2d3ebf;
        }
        ['destroy'](_0x1c5df6 = !0x0) {
            super['destroy'](_0x1c5df6), this['_bg'] && this['_bg']['destroy'](_0x1c5df6), this['_bar'] && this['_bar']['destroy'](_0x1c5df6), this['_progress'] && this['_progress']['destroy'](_0x1c5df6), this['_bg'] = null, this['_bar'] = null, this['_progress'] = null, this['changeHand' + 'ler'] = null;
        }
        ['createChil' + 'dren']() {
            this['addChild'](this['_bg'] = new _0x15956b()), this['addChild'](this['_bar'] = new _0x5dea9c());
        }
        ['initialize']() {
            this['_bar']['on'](_0x20385f['Event']['MOUSE_DOWN'], this, this['onBarMouse' + 'Down']), this['_bg']['sizeGrid'] = this['_bar']['sizeGrid'] = '4,4,4,4,0', this['_progress'] && (this['_progress']['sizeGrid'] = this['_bar']['sizeGrid']), this['allowClick' + 'Back'] = !0x0;
        }
        ['onBarMouse' + 'Down'](_0x3bb8a4) {
            var _0x4dbe84 = _0x20385f['ILaya'];
            this['_globalSac' + 'le'] || (this['_globalSac' + 'le'] = new _0x20385f['Point']()), this['_globalSac' + 'le']['setTo'](this['globalScal' + 'eX'] || 0.01, this['globalScal' + 'eY'] || 0.01), this['_maxMove'] = this['isVertical'] ? this['height'] - this['_bar']['height'] : this['width'] - this['_bar']['width'], this['_tx'] = _0x4dbe84['stage']['mouseX'], this['_ty'] = _0x4dbe84['stage']['mouseY'], _0x4dbe84['stage']['on'](_0x20385f['Event']['MOUSE_MOVE'], this, this['mouseMove']), _0x4dbe84['stage']['once'](_0x20385f['Event']['MOUSE_UP'], this, this['mouseUp']), _0x4dbe84['stage']['once'](_0x20385f['Event']['MOUSE_OUT'], this, this['mouseUp']), this['showValueT' + 'ext']();
        }
        ['showValueT' + 'ext']() {
            if (this['showLabel']) {
                var _0x2f3c13 = _0x26d3fd['label'];
                this['addChild'](_0x2f3c13), _0x2f3c13['textField']['changeText'](this['_value'] + ''), this['isVertical'] ? (_0x2f3c13['x'] = this['_bar']['_x'] + 0x14, _0x2f3c13['y'] = 0.5 * (this['_bar']['height'] - _0x2f3c13['height']) + this['_bar']['_y']) : (_0x2f3c13['y'] = this['_bar']['_y'] - 0x14, _0x2f3c13['x'] = 0.5 * (this['_bar']['width'] - _0x2f3c13['width']) + this['_bar']['_x']);
            }
        }
        ['hideValueT' + 'ext']() {
            _0x26d3fd['label'] && _0x26d3fd['label']['removeSelf']();
        }
        ['mouseUp'](_0x390fc4) {
            let _0x478448 = _0x20385f['ILaya']['stage'];
            _0x478448['off'](_0x20385f['Event']['MOUSE_MOVE'], this, this['mouseMove']), _0x478448['off'](_0x20385f['Event']['MOUSE_UP'], this, this['mouseUp']), _0x478448['off'](_0x20385f['Event']['MOUSE_OUT'], this, this['mouseUp']), this['sendChange' + 'Event'](_0x20385f['Event']['CHANGED']), this['hideValueT' + 'ext']();
        }
        ['mouseMove'](_0x17f6ee) {
            let _0x51f426 = _0x20385f['ILaya']['stage'];
            var _0x1f0cb5 = this['_value'];
            if (this['isVertical'] ? (this['_bar']['y'] += (_0x51f426['mouseY'] - this['_ty']) / this['_globalSac' + 'le']['y'], this['_bar']['_y'] > this['_maxMove'] ? this['_bar']['y'] = this['_maxMove'] : this['_bar']['_y'] < 0x0 && (this['_bar']['y'] = 0x0), this['_value'] = this['_bar']['_y'] / this['_maxMove'] * (this['_max'] - this['_min']) + this['_min'], this['_progress'] && (this['_progress']['height'] = this['_bar']['_y'] + 0.5 * this['_bar']['height'])) : (this['_bar']['x'] += (_0x51f426['mouseX'] - this['_tx']) / this['_globalSac' + 'le']['x'], this['_bar']['_x'] > this['_maxMove'] ? this['_bar']['x'] = this['_maxMove'] : this['_bar']['_x'] < 0x0 && (this['_bar']['x'] = 0x0), this['_value'] = this['_bar']['_x'] / this['_maxMove'] * (this['_max'] - this['_min']) + this['_min'], this['_progress'] && (this['_progress']['width'] = this['_bar']['_x'] + 0.5 * this['_bar']['width'])), this['_tx'] = _0x51f426['mouseX'], this['_ty'] = _0x51f426['mouseY'], 0x0 != this['_tick']) {
                var _0x22debc = Math['pow'](0xa, (this['_tick'] + '')['length'] - 0x1);
                this['_value'] = Math['round'](Math['round'](this['_value'] / this['_tick']) * this['_tick'] * _0x22debc) / _0x22debc;
            }
            this['_value'] != _0x1f0cb5 && this['sendChange' + 'Event'](), this['showValueT' + 'ext']();
        }
        ['sendChange' + 'Event'](_0x385bcb = _0x20385f['Event']['CHANGE']) {
            this['event'](_0x385bcb), this['changeHand' + 'ler'] && this['changeHand' + 'ler']['runWith'](this['_value']);
        }
        get ['skin']() {
            return this['_skin'];
        }
        set ['skin'](_0x278677) {
            this['_skin'] != _0x278677 && (this['_skin'] = _0x278677, this['_skin'] && !_0x20385f['Loader']['getRes'](this['_skin']) ? _0x20385f['ILaya']['loader']['load']([
                this['_skin'],
                this['_skin']['replace']('.png', '$bar.png')
            ], _0x20385f['Handler']['create'](this, this['_skinLoade' + 'd'])) : this['_skinLoade' + 'd']());
        }
        ['_skinLoade' + 'd']() {
            this['_bg']['skin'] = this['_skin'], this['_bar']['skin'] = this['_skin']['replace']('.png', '$bar.png');
            var _0x1c49fd = this['_skin']['replace']('.png', '$progress.' + 'png');
            _0x20385f['Loader']['getRes'](_0x1c49fd) && (this['_progress'] || (this['addChild'](this['_progress'] = new _0x15956b()), this['_progress']['sizeGrid'] = this['_bar']['sizeGrid'], this['setChildIn' + 'dex'](this['_progress'], 0x1)), this['_progress']['skin'] = _0x1c49fd), this['setBarPoin' + 't'](), this['callLater'](this['changeValu' + 'e']), this['_sizeChang' + 'ed'](), this['event'](_0x20385f['Event']['LOADED']);
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
        set ['sizeGrid'](_0x193be6) {
            this['_bg']['sizeGrid'] = _0x193be6, this['_bar']['sizeGrid'] = _0x193be6, this['_progress'] && (this['_progress']['sizeGrid'] = this['_bar']['sizeGrid']);
        }
        ['setSlider'](_0xd28d4d, _0x5c8cc2, _0xb8b6ad) {
            this['_value'] = -0x1, this['_min'] = _0xd28d4d, this['_max'] = _0x5c8cc2 > _0xd28d4d ? _0x5c8cc2 : _0xd28d4d, this['value'] = _0xb8b6ad < _0xd28d4d ? _0xd28d4d : _0xb8b6ad > _0x5c8cc2 ? _0x5c8cc2 : _0xb8b6ad;
        }
        get ['tick']() {
            return this['_tick'];
        }
        set ['tick'](_0x4db8ae) {
            this['_tick'] != _0x4db8ae && (this['_tick'] = _0x4db8ae, this['callLater'](this['changeValu' + 'e']));
        }
        ['changeValu' + 'e']() {
            if (0x0 != this['tick']) {
                var _0x46f8a6 = Math['pow'](0xa, (this['_tick'] + '')['length'] - 0x1);
                this['_value'] = Math['round'](Math['round'](this['_value'] / this['_tick']) * this['_tick'] * _0x46f8a6) / _0x46f8a6;
            }
            this['_value'] = this['_value'] > this['_max'] ? this['_max'] : this['_value'] < this['_min'] ? this['_min'] : this['_value'];
            var _0x11ac0b = this['_max'] - this['_min'];
            0x0 === _0x11ac0b && (_0x11ac0b = 0x1), this['isVertical'] ? (this['_bar']['y'] = (this['_value'] - this['_min']) / _0x11ac0b * (this['height'] - this['_bar']['height']), this['_progress'] && (this['_progress']['height'] = this['_bar']['_y'] + 0.5 * this['_bar']['height'])) : (this['_bar']['x'] = (this['_value'] - this['_min']) / _0x11ac0b * (this['width'] - this['_bar']['width']), this['_progress'] && (this['_progress']['width'] = this['_bar']['_x'] + 0.5 * this['_bar']['width']));
        }
        get ['max']() {
            return this['_max'];
        }
        set ['max'](_0x32e875) {
            this['_max'] != _0x32e875 && (this['_max'] = _0x32e875, this['callLater'](this['changeValu' + 'e']));
        }
        get ['min']() {
            return this['_min'];
        }
        set ['min'](_0x5de775) {
            this['_min'] != _0x5de775 && (this['_min'] = _0x5de775, this['callLater'](this['changeValu' + 'e']));
        }
        get ['value']() {
            return this['_value'];
        }
        set ['value'](_0x3b4a5f) {
            if (this['_value'] != _0x3b4a5f) {
                var _0x56c007 = this['_value'];
                this['_value'] = _0x3b4a5f, this['changeValu' + 'e'](), this['_value'] != _0x56c007 && this['sendChange' + 'Event']();
            }
        }
        get ['allowClick' + 'Back']() {
            return this['_allowClic' + 'kBack'];
        }
        set ['allowClick' + 'Back'](_0x232edc) {
            this['_allowClic' + 'kBack'] != _0x232edc && (this['_allowClic' + 'kBack'] = _0x232edc, _0x232edc ? this['_bg']['on'](_0x20385f['Event']['MOUSE_DOWN'], this, this['onBgMouseD' + 'own']) : this['_bg']['off'](_0x20385f['Event']['MOUSE_DOWN'], this, this['onBgMouseD' + 'own']));
        }
        ['onBgMouseD' + 'own'](_0x2eb70a) {
            var _0x5c2814 = this['_bg']['getMousePo' + 'int']();
            this['isVertical'] ? this['value'] = _0x5c2814['y'] / (this['height'] - this['_bar']['height']) * (this['_max'] - this['_min']) + this['_min'] : this['value'] = _0x5c2814['x'] / (this['width'] - this['_bar']['width']) * (this['_max'] - this['_min']) + this['_min'];
        }
        set ['dataSource'](_0x32c838) {
            this['_dataSourc' + 'e'] = _0x32c838, 'number' == typeof _0x32c838 || 'string' == typeof _0x32c838 ? this['value'] = Number(_0x32c838) : super['dataSource'] = _0x32c838;
        }
        get ['dataSource']() {
            return super['dataSource'];
        }
        get ['bar']() {
            return this['_bar'];
        }
    }
    _0x26d3fd['label'] = null, _0x20385f['ILaya']['regClass'](_0x26d3fd), _0x20385f['ClassUtils']['regClass']('laya.ui.Sl' + 'ider', _0x26d3fd), _0x20385f['ClassUtils']['regClass']('Laya.Slide' + 'r', _0x26d3fd);
    class _0x594366 extends _0xa31ae0 {
        constructor(_0x345d2b = null) {
            super(), this['rollRatio'] = 0.97, this['scaleBar'] = !0x0, this['autoHide'] = !0x1, this['elasticDis' + 'tance'] = 0x0, this['elasticBac' + 'kTime'] = 0x1f4, this['_showButto' + 'ns'] = _0x10bbcf['showButton' + 's'], this['_scrollSiz' + 'e'] = 0x1, this['_thumbPerc' + 'ent'] = 0x1, this['_lastOffse' + 't'] = 0x0, this['_checkElas' + 'tic'] = !0x1, this['_isElastic'] = !0x1, this['_hide'] = !0x1, this['_clickOnly'] = !0x0, this['_touchScro' + 'llEnable'] = _0x10bbcf['touchScrol' + 'lEnable'], this['_mouseWhee' + 'lEnable'] = _0x10bbcf['mouseWheel' + 'Enable'], this['skin'] = _0x345d2b, this['max'] = 0x1;
        }
        ['destroy'](_0xa0f1d9 = !0x0) {
            this['stopScroll'](), this['target'] = null, super['destroy'](_0xa0f1d9), this['upButton'] && this['upButton']['destroy'](_0xa0f1d9), this['downButton'] && this['downButton']['destroy'](_0xa0f1d9), this['slider'] && this['slider']['destroy'](_0xa0f1d9), this['upButton'] = this['downButton'] = null, this['slider'] = null, this['changeHand' + 'ler'] = null, this['_offsets'] = null;
        }
        ['createChil' + 'dren']() {
            this['addChild'](this['slider'] = new _0x26d3fd()), this['addChild'](this['upButton'] = new _0x5dea9c()), this['addChild'](this['downButton'] = new _0x5dea9c());
        }
        ['initialize']() {
            this['slider']['showLabel'] = !0x1, this['slider']['tick'] = 0x0, this['slider']['on'](_0x20385f['Event']['CHANGE'], this, this['onSliderCh' + 'ange']), this['slider']['setSlider'](0x0, 0x0, 0x0), this['upButton']['on'](_0x20385f['Event']['MOUSE_DOWN'], this, this['onButtonMo' + 'useDown']), this['downButton']['on'](_0x20385f['Event']['MOUSE_DOWN'], this, this['onButtonMo' + 'useDown']);
        }
        ['onSliderCh' + 'ange']() {
            this['_value'] != this['slider']['value'] && (this['value'] = this['slider']['value']);
        }
        ['onButtonMo' + 'useDown'](_0x1cef97) {
            var _0x1615fb = _0x1cef97['currentTar' + 'get'] === this['upButton'];
            this['slide'](_0x1615fb), _0x20385f['ILaya']['timer']['once'](_0x44287a['scrollBarD' + 'elayTime'], this, this['startLoop'], [_0x1615fb]), _0x20385f['ILaya']['stage']['once'](_0x20385f['Event']['MOUSE_UP'], this, this['onStageMou' + 'seUp']);
        }
        ['startLoop'](_0x3568d8) {
            _0x20385f['ILaya']['timer']['frameLoop'](0x1, this, this['slide'], [_0x3568d8]);
        }
        ['slide'](_0x54053b) {
            _0x54053b ? this['value'] -= this['_scrollSiz' + 'e'] : this['value'] += this['_scrollSiz' + 'e'];
        }
        ['onStageMou' + 'seUp'](_0xa303d9) {
            _0x20385f['ILaya']['timer']['clear'](this, this['startLoop']), _0x20385f['ILaya']['timer']['clear'](this, this['slide']);
        }
        get ['skin']() {
            return this['_skin'];
        }
        set ['skin'](_0x547241) {
            '\x20' != _0x547241 && this['_skin'] != _0x547241 && (this['_skin'] = _0x547241, this['_skin'] && !_0x20385f['Loader']['getRes'](this['_skin']) ? _0x20385f['ILaya']['loader']['load']([
                this['_skin'],
                this['_skin']['replace']('.png', '$up.png'),
                this['_skin']['replace']('.png', '$down.png'),
                this['_skin']['replace']('.png', '$bar.png')
            ], _0x20385f['Handler']['create'](this, this['_skinLoade' + 'd'])) : this['_skinLoade' + 'd']());
        }
        ['_skinLoade' + 'd']() {
            this['slider']['skin'] = this['_skin'], this['callLater'](this['changeScro' + 'llBar']), this['_sizeChang' + 'ed'](), this['event'](_0x20385f['Event']['LOADED']);
        }
        ['changeScro' + 'llBar']() {
            this['upButton']['visible'] = this['_showButto' + 'ns'], this['downButton']['visible'] = this['_showButto' + 'ns'], this['_showButto' + 'ns'] && (this['upButton']['skin'] = this['_skin']['replace']('.png', '$up.png'), this['downButton']['skin'] = this['_skin']['replace']('.png', '$down.png')), this['slider']['isVertical'] ? this['slider']['y'] = this['_showButto' + 'ns'] ? this['upButton']['height'] : 0x0 : this['slider']['x'] = this['_showButto' + 'ns'] ? this['upButton']['width'] : 0x0, this['resetPosit' + 'ions'](), this['repaint']();
        }
        ['_sizeChang' + 'ed']() {
            super['_sizeChang' + 'ed'](), this['repaint'](), this['resetPosit' + 'ions'](), this['event'](_0x20385f['Event']['CHANGE']), this['changeHand' + 'ler'] && this['changeHand' + 'ler']['runWith'](this['value']);
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
        ['setScroll'](_0x51f9c3, _0x51cd6d, _0x4e8dbd) {
            this['runCallLat' + 'er'](this['_sizeChang' + 'ed']), this['slider']['setSlider'](_0x51f9c3, _0x51cd6d, _0x4e8dbd), this['slider']['bar']['visible'] = _0x51cd6d > 0x0, !this['_hide'] && this['autoHide'] && (this['visible'] = !0x1);
        }
        get ['max']() {
            return this['slider']['max'];
        }
        set ['max'](_0x5b7b6b) {
            this['slider']['max'] = _0x5b7b6b;
        }
        get ['min']() {
            return this['slider']['min'];
        }
        set ['min'](_0x39bbe6) {
            this['slider']['min'] = _0x39bbe6;
        }
        get ['value']() {
            return this['_value'];
        }
        set ['value'](_0x666a33) {
            _0x666a33 !== this['_value'] && (this['_value'] = _0x666a33, this['_isElastic'] || (this['slider']['_value'] != _0x666a33 && (this['slider']['_value'] = _0x666a33, this['slider']['changeValu' + 'e']()), this['_value'] = this['slider']['_value']), this['event'](_0x20385f['Event']['CHANGE']), this['changeHand' + 'ler'] && this['changeHand' + 'ler']['runWith'](this['_value']));
        }
        get ['isVertical']() {
            return this['slider']['isVertical'];
        }
        set ['isVertical'](_0x436bb7) {
            this['slider']['isVertical'] = _0x436bb7;
        }
        get ['sizeGrid']() {
            return this['slider']['sizeGrid'];
        }
        set ['sizeGrid'](_0x27fa73) {
            this['slider']['sizeGrid'] = _0x27fa73;
        }
        get ['scrollSize']() {
            return this['_scrollSiz' + 'e'];
        }
        set ['scrollSize'](_0x108eb3) {
            this['_scrollSiz' + 'e'] = _0x108eb3;
        }
        set ['dataSource'](_0x51f94d) {
            this['_dataSourc' + 'e'] = _0x51f94d, 'number' == typeof _0x51f94d || 'string' == typeof _0x51f94d ? this['value'] = Number(_0x51f94d) : super['dataSource'] = _0x51f94d;
        }
        get ['dataSource']() {
            return super['dataSource'];
        }
        get ['thumbPerce' + 'nt']() {
            return this['_thumbPerc' + 'ent'];
        }
        set ['thumbPerce' + 'nt'](_0x525124) {
            this['runCallLat' + 'er'](this['changeScro' + 'llBar']), this['runCallLat' + 'er'](this['_sizeChang' + 'ed']), _0x525124 = _0x525124 >= 0x1 ? 0.99 : _0x525124, this['_thumbPerc' + 'ent'] = _0x525124, this['scaleBar'] && (this['slider']['isVertical'] ? this['slider']['bar']['height'] = Math['max'](this['slider']['height'] * _0x525124, _0x44287a['scrollBarM' + 'inNum']) : this['slider']['bar']['width'] = Math['max'](this['slider']['width'] * _0x525124, _0x44287a['scrollBarM' + 'inNum']));
        }
        get ['target']() {
            return this['_target'];
        }
        set ['target'](_0x15cea9) {
            this['_target'] && (this['_target']['off'](_0x20385f['Event']['MOUSE_WHEE' + 'L'], this, this['onTargetMo' + 'useWheel']), this['_target']['off'](_0x20385f['Event']['MOUSE_DOWN'], this, this['onTargetMo' + 'useDown'])), this['_target'] = _0x15cea9, _0x15cea9 && (this['_mouseWhee' + 'lEnable'] && this['_target']['on'](_0x20385f['Event']['MOUSE_WHEE' + 'L'], this, this['onTargetMo' + 'useWheel']), this['_touchScro' + 'llEnable'] && this['_target']['on'](_0x20385f['Event']['MOUSE_DOWN'], this, this['onTargetMo' + 'useDown']));
        }
        get ['hide']() {
            return this['_hide'];
        }
        set ['hide'](_0x7f777b) {
            this['_hide'] = _0x7f777b, this['visible'] = !_0x7f777b;
        }
        get ['showButton' + 's']() {
            return this['_showButto' + 'ns'];
        }
        set ['showButton' + 's'](_0x51ba5f) {
            this['_showButto' + 'ns'] = _0x51ba5f, this['callLater'](this['changeScro' + 'llBar']);
        }
        get ['touchScrol' + 'lEnable']() {
            return this['_touchScro' + 'llEnable'];
        }
        set ['touchScrol' + 'lEnable'](_0x82846a) {
            this['_touchScro' + 'llEnable'] = _0x82846a, this['target'] = this['_target'];
        }
        get ['mouseWheel' + 'Enable']() {
            return this['_mouseWhee' + 'lEnable'];
        }
        set ['mouseWheel' + 'Enable'](_0x186164) {
            this['_mouseWhee' + 'lEnable'] = _0x186164, this['target'] = this['_target'];
        }
        ['onTargetMo' + 'useWheel'](_0x195f8a) {
            this['value'] -= _0x195f8a['delta'] * this['_scrollSiz' + 'e'], this['target'] = this['_target'];
        }
        ['onTargetMo' + 'useDown'](_0x35c75d) {
            this['isLockedFu' + 'n'] && !this['isLockedFu' + 'n'](_0x35c75d) || (this['event'](_0x20385f['Event']['END']), this['_clickOnly'] = !0x0, this['_lastOffse' + 't'] = 0x0, this['_checkElas' + 'tic'] = !0x1, this['_lastPoint'] || (this['_lastPoint'] = new _0x20385f['Point']()), this['_lastPoint']['setTo'](_0x20385f['ILaya']['stage']['mouseX'], _0x20385f['ILaya']['stage']['mouseY']), _0x20385f['ILaya']['timer']['clear'](this, this['tweenMove']), _0x20385f['Tween']['clearTween'](this), _0x20385f['ILaya']['stage']['once'](_0x20385f['Event']['MOUSE_UP'], this, this['onStageMou' + 'seUp2']), _0x20385f['ILaya']['stage']['once'](_0x20385f['Event']['MOUSE_OUT'], this, this['onStageMou' + 'seUp2']), _0x20385f['ILaya']['timer']['frameLoop'](0x1, this, this['loop']));
        }
        ['startDragF' + 'orce']() {
            this['_clickOnly'] = !0x0, this['_lastOffse' + 't'] = 0x0, this['_checkElas' + 'tic'] = !0x1, this['_lastPoint'] || (this['_lastPoint'] = new _0x20385f['Point']()), this['_lastPoint']['setTo'](_0x20385f['ILaya']['stage']['mouseX'], _0x20385f['ILaya']['stage']['mouseY']), _0x20385f['ILaya']['timer']['clear'](this, this['tweenMove']), _0x20385f['Tween']['clearTween'](this), _0x20385f['ILaya']['stage']['once'](_0x20385f['Event']['MOUSE_UP'], this, this['onStageMou' + 'seUp2']), _0x20385f['ILaya']['stage']['once'](_0x20385f['Event']['MOUSE_OUT'], this, this['onStageMou' + 'seUp2']), _0x20385f['ILaya']['timer']['frameLoop'](0x1, this, this['loop']);
        }
        ['cancelDrag' + 'Op']() {
            _0x20385f['ILaya']['stage']['off'](_0x20385f['Event']['MOUSE_UP'], this, this['onStageMou' + 'seUp2']), _0x20385f['ILaya']['stage']['off'](_0x20385f['Event']['MOUSE_OUT'], this, this['onStageMou' + 'seUp2']), _0x20385f['ILaya']['timer']['clear'](this, this['tweenMove']), _0x20385f['ILaya']['timer']['clear'](this, this['loop']), this['_target']['mouseEnabl' + 'ed'] = !0x0;
        }
        ['checkTrigg' + 'ers'](_0x308848 = !0x1) {
            return this['value'] >= 0x0 && this['value'] - this['_lastOffse' + 't'] <= 0x0 && this['triggerDow' + 'nDragLimit'] && this['triggerDow' + 'nDragLimit'](_0x308848) ? (this['cancelDrag' + 'Op'](), this['value'] = 0x0, !0x0) : !!(this['value'] <= this['max'] && this['value'] - this['_lastOffse' + 't'] >= this['max'] && this['triggerUpD' + 'ragLimit'] && this['triggerUpD' + 'ragLimit'](_0x308848)) && (this['cancelDrag' + 'Op'](), this['value'] = this['max'], !0x0);
        }
        get ['lastOffset']() {
            return this['_lastOffse' + 't'];
        }
        ['startTween' + 'MoveForce'](_0x498f1f) {
            this['_lastOffse' + 't'] = _0x498f1f, _0x20385f['ILaya']['timer']['frameLoop'](0x1, this, this['tweenMove'], [0xc8]);
        }
        ['loop']() {
            var _0x31bd8a = _0x20385f['ILaya']['stage']['mouseY'], _0x1a7368 = _0x20385f['ILaya']['stage']['mouseX'];
            if (this['_lastOffse' + 't'] = this['isVertical'] ? _0x31bd8a - this['_lastPoint']['y'] : _0x1a7368 - this['_lastPoint']['x'], this['_clickOnly']) {
                if (!(Math['abs'](this['_lastOffse' + 't'] * (this['isVertical'] ? _0x20385f['ILaya']['stage']['_canvasTra' + 'nsform']['getScaleY']() : _0x20385f['ILaya']['stage']['_canvasTra' + 'nsform']['getScaleX']())) > 0x1))
                    return;
                if (this['_clickOnly'] = !0x1, this['checkTrigg' + 'ers']())
                    return;
                this['_offsets'] || (this['_offsets'] = []), this['_offsets']['length'] = 0x0, this['_target']['mouseEnabl' + 'ed'] = !0x1, !this['hide'] && this['autoHide'] && (this['alpha'] = 0x1, this['visible'] = !0x0), this['event'](_0x20385f['Event']['START']);
            } else {
                if (this['checkTrigg' + 'ers']())
                    return;
            }
            this['_offsets']['push'](this['_lastOffse' + 't']), this['_lastPoint']['x'] = _0x1a7368, this['_lastPoint']['y'] = _0x31bd8a, 0x0 !== this['_lastOffse' + 't'] && (this['_checkElas' + 'tic'] || (this['elasticDis' + 'tance'] > 0x0 ? this['_checkElas' + 'tic'] || 0x0 == this['_lastOffse' + 't'] || (this['_lastOffse' + 't'] > 0x0 && this['_value'] <= this['min'] || this['_lastOffse' + 't'] < 0x0 && this['_value'] >= this['max'] ? (this['_isElastic'] = !0x0, this['_checkElas' + 'tic'] = !0x0) : this['_isElastic'] = !0x1) : this['_checkElas' + 'tic'] = !0x0), this['_isElastic'] ? this['_value'] <= this['min'] ? this['_lastOffse' + 't'] > 0x0 ? this['value'] -= this['_lastOffse' + 't'] * Math['max'](0x0, 0x1 - (this['min'] - this['_value']) / this['elasticDis' + 'tance']) : (this['value'] -= 0.5 * this['_lastOffse' + 't'], this['_value'] >= this['min'] && (this['_checkElas' + 'tic'] = !0x1)) : this['_value'] >= this['max'] && (this['_lastOffse' + 't'] < 0x0 ? this['value'] -= this['_lastOffse' + 't'] * Math['max'](0x0, 0x1 - (this['_value'] - this['max']) / this['elasticDis' + 'tance']) : (this['value'] -= 0.5 * this['_lastOffse' + 't'], this['_value'] <= this['max'] && (this['_checkElas' + 'tic'] = !0x1))) : this['value'] -= this['_lastOffse' + 't']);
        }
        ['onStageMou' + 'seUp2'](_0x146636) {
            if (_0x20385f['ILaya']['stage']['off'](_0x20385f['Event']['MOUSE_UP'], this, this['onStageMou' + 'seUp2']), _0x20385f['ILaya']['stage']['off'](_0x20385f['Event']['MOUSE_OUT'], this, this['onStageMou' + 'seUp2']), _0x20385f['ILaya']['timer']['clear'](this, this['loop']), !(this['_clickOnly'] && this['_value'] >= this['min'] && this['_value'] <= this['max'])) {
                if (this['_target']['mouseEnabl' + 'ed'] = !0x0, this['_isElastic'])
                    this['_value'] < this['min'] ? _0x20385f['Tween']['to'](this, { 'value': this['min'] }, this['elasticBac' + 'kTime'], _0x20385f['Ease']['sineOut'], _0x20385f['Handler']['create'](this, this['elasticOve' + 'r'])) : this['_value'] > this['max'] && _0x20385f['Tween']['to'](this, { 'value': this['max'] }, this['elasticBac' + 'kTime'], _0x20385f['Ease']['sineOut'], _0x20385f['Handler']['create'](this, this['elasticOve' + 'r']));
                else {
                    if (!this['_offsets'])
                        return;
                    this['_offsets']['length'] < 0x1 && (this['_offsets'][0x0] = this['isVertical'] ? _0x20385f['ILaya']['stage']['mouseY'] - this['_lastPoint']['y'] : _0x20385f['ILaya']['stage']['mouseX'] - this['_lastPoint']['x']);
                    for (var _0x4d5165 = 0x0, _0x3bb414 = Math['min'](this['_offsets']['length'], 0x3), _0x2b772c = 0x0; _0x2b772c < _0x3bb414; _0x2b772c++)
                        _0x4d5165 += this['_offsets'][this['_offsets']['length'] - 0x1 - _0x2b772c];
                    if (this['_lastOffse' + 't'] = _0x4d5165 / _0x3bb414, (_0x4d5165 = Math['abs'](this['_lastOffse' + 't'])) < 0x2)
                        return void this['event'](_0x20385f['Event']['END']);
                    _0x4d5165 > 0xfa && (this['_lastOffse' + 't'] = this['_lastOffse' + 't'] > 0x0 ? 0xfa : -0xfa);
                    var _0x2189b9 = Math['round'](Math['abs'](this['elasticDis' + 'tance'] * (this['_lastOffse' + 't'] / 0x96)));
                    _0x20385f['ILaya']['timer']['frameLoop'](0x1, this, this['tweenMove'], [_0x2189b9]);
                }
            }
        }
        ['elasticOve' + 'r']() {
            this['_isElastic'] = !0x1, !this['hide'] && this['autoHide'] && _0x20385f['Tween']['to'](this, { 'alpha': 0x0 }, 0x1f4), this['event'](_0x20385f['Event']['END']);
        }
        ['tweenMove'](_0x372661) {
            var _0x1d0762;
            if ((this['_lastOffse' + 't'] *= this['rollRatio'], !this['checkTrigg' + 'ers'](!0x0)) && (_0x372661 > 0x0 && (this['_lastOffse' + 't'] > 0x0 && this['value'] <= this['min'] ? (this['_isElastic'] = !0x0, _0x1d0762 = 0.5 * -(this['min'] - _0x372661 - this['value']), this['_lastOffse' + 't'] > _0x1d0762 && (this['_lastOffse' + 't'] = _0x1d0762)) : this['_lastOffse' + 't'] < 0x0 && this['value'] >= this['max'] && (this['_isElastic'] = !0x0, _0x1d0762 = 0.5 * -(this['max'] + _0x372661 - this['value']), this['_lastOffse' + 't'] < _0x1d0762 && (this['_lastOffse' + 't'] = _0x1d0762))), this['value'] -= this['_lastOffse' + 't'], Math['abs'](this['_lastOffse' + 't']) < 0.1)) {
                if (_0x20385f['ILaya']['timer']['clear'](this, this['tweenMove']), this['_isElastic'])
                    return void (this['_value'] < this['min'] ? _0x20385f['Tween']['to'](this, { 'value': this['min'] }, this['elasticBac' + 'kTime'], _0x20385f['Ease']['sineOut'], _0x20385f['Handler']['create'](this, this['elasticOve' + 'r'])) : this['_value'] > this['max'] ? _0x20385f['Tween']['to'](this, { 'value': this['max'] }, this['elasticBac' + 'kTime'], _0x20385f['Ease']['sineOut'], _0x20385f['Handler']['create'](this, this['elasticOve' + 'r'])) : this['elasticOve' + 'r']());
                this['event'](_0x20385f['Event']['END']), !this['hide'] && this['autoHide'] && _0x20385f['Tween']['to'](this, { 'alpha': 0x0 }, 0x1f4);
            }
        }
        ['stopScroll']() {
            this['onStageMou' + 'seUp2'](null), _0x20385f['ILaya']['timer']['clear'](this, this['tweenMove']), _0x20385f['Tween']['clearTween'](this);
        }
        get ['tick']() {
            return this['slider']['tick'];
        }
        set ['tick'](_0x3a07ba) {
            this['slider']['tick'] = _0x3a07ba;
        }
    }
    _0x20385f['ILaya']['regClass'](_0x594366), _0x20385f['ClassUtils']['regClass']('laya.ui.Sc' + 'rollBar', _0x594366), _0x20385f['ClassUtils']['regClass']('Laya.Scrol' + 'lBar', _0x594366);
    class _0x3f571d extends _0x594366 {
    }
    _0x20385f['ILaya']['regClass'](_0x3f571d), _0x20385f['ClassUtils']['regClass']('laya.ui.VS' + 'crollBar', _0x3f571d), _0x20385f['ClassUtils']['regClass']('Laya.VScro' + 'llBar', _0x3f571d);
    class _0x16863c extends _0x594366 {
        ['initialize']() {
            super['initialize'](), this['slider']['isVertical'] = !0x1;
        }
    }
    _0x20385f['ILaya']['regClass'](_0x16863c), _0x20385f['ClassUtils']['regClass']('laya.ui.HS' + 'crollBar', _0x16863c), _0x20385f['ClassUtils']['regClass']('Laya.HScro' + 'llBar', _0x16863c);
    class _0x2460e1 extends _0x1c310b {
        constructor() {
            super(...arguments), this['selectEnab' + 'le'] = !0x1, this['totalPage'] = 0x0, this['_$componen' + 'tType'] = 'List', this['_repeatX'] = 0x0, this['_repeatY'] = 0x0, this['_repeatX2'] = 0x0, this['_repeatY2'] = 0x0, this['_spaceX'] = 0x0, this['_spaceY'] = 0x0, this['_cells'] = [], this['_startInde' + 'x'] = 0x0, this['_selectedI' + 'ndex'] = -0x1, this['_page'] = 0x0, this['_isVertica' + 'l'] = !0x0, this['_cellSize'] = 0x14, this['_cellOffse' + 't'] = 0x0, this['_createdLi' + 'ne'] = 0x0, this['_offset'] = new _0x20385f['Point'](), this['_usedCache'] = null, this['_elasticEn' + 'abled'] = !0x1, this['_preLen'] = 0x0;
        }
        ['destroy'](_0x2dec8d = !0x0) {
            this['_content'] && this['_content']['destroy'](_0x2dec8d), this['_scrollBar'] && this['_scrollBar']['destroy'](_0x2dec8d), super['destroy'](_0x2dec8d), this['_content'] = null, this['_scrollBar'] = null, this['_itemRende' + 'r'] = null, this['_cells'] = null, this['_array'] = null, this['selectHand' + 'ler'] = this['renderHand' + 'ler'] = this['mouseHandl' + 'er'] = null;
        }
        ['createChil' + 'dren']() {
            this['addChild'](this['_content'] = new _0x1c310b());
        }
        set ['cacheAs'](_0x24cf63) {
            super['cacheAs'] = _0x24cf63, this['_scrollBar'] && (this['_usedCache'] = null, 'none' !== _0x24cf63 ? this['_scrollBar']['on'](_0x20385f['Event']['START'], this, this['onScrollSt' + 'art']) : this['_scrollBar']['off'](_0x20385f['Event']['START'], this, this['onScrollSt' + 'art']));
        }
        get ['cacheAs']() {
            return super['cacheAs'];
        }
        ['onScrollSt' + 'art']() {
            this['_usedCache'] || (this['_usedCache'] = super['cacheAs']), super['cacheAs'] = 'none', this['_scrollBar']['once'](_0x20385f['Event']['END'], this, this['onScrollEn' + 'd']);
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
        set ['vScrollBar' + 'Skin'](_0x4631a8) {
            this['_removePre' + 'ScrollBar']();
            var _0x5f23c0 = new _0x3f571d();
            _0x5f23c0['name'] = 'scrollBar', _0x5f23c0['right'] = 0x0, _0x5f23c0['skin'] = _0x4631a8, _0x5f23c0['elasticDis' + 'tance'] = this['_elasticEn' + 'abled'] ? 0xc8 : 0x0, this['scrollBar'] = _0x5f23c0, this['addChild'](_0x5f23c0), this['_setCellCh' + 'anged']();
        }
        ['_removePre' + 'ScrollBar']() {
            var _0xc4b08b = this['removeChil' + 'dByName']('scrollBar');
            _0xc4b08b && _0xc4b08b['destroy'](!0x0);
        }
        get ['hScrollBar' + 'Skin']() {
            return this['_scrollBar'] ? this['_scrollBar']['skin'] : null;
        }
        set ['hScrollBar' + 'Skin'](_0x40183d) {
            this['_removePre' + 'ScrollBar']();
            var _0x49c2a1 = new _0x16863c();
            _0x49c2a1['name'] = 'scrollBar', _0x49c2a1['bottom'] = 0x0, _0x49c2a1['skin'] = _0x40183d, _0x49c2a1['elasticDis' + 'tance'] = this['_elasticEn' + 'abled'] ? 0xc8 : 0x0, this['scrollBar'] = _0x49c2a1, this['addChild'](_0x49c2a1), this['_setCellCh' + 'anged']();
        }
        get ['scrollBar']() {
            return this['_scrollBar'];
        }
        set ['scrollBar'](_0x287d49) {
            this['_scrollBar'] != _0x287d49 && (this['_scrollBar'] = _0x287d49, _0x287d49 && (this['_isVertica' + 'l'] = this['_scrollBar']['isVertical'], this['addChild'](this['_scrollBar']), this['_scrollBar']['on'](_0x20385f['Event']['CHANGE'], this, this['onScrollBa' + 'rChange'])));
        }
        get ['itemRender']() {
            return this['_itemRende' + 'r'];
        }
        set ['itemRender'](_0x27ca05) {
            if (this['_itemRende' + 'r'] != _0x27ca05) {
                this['_itemRende' + 'r'] = _0x27ca05;
                for (var _0x255020 = this['_cells']['length'] - 0x1; _0x255020 > -0x1; _0x255020--)
                    this['_cells'][_0x255020]['destroy']();
                this['_cells']['length'] = 0x0, this['_setCellCh' + 'anged']();
            }
        }
        set ['width'](_0x534dd0) {
            _0x534dd0 != this['_width'] && (super['width'] = _0x534dd0, this['_setCellCh' + 'anged']());
        }
        get ['width']() {
            return super['width'];
        }
        set ['height'](_0x591c79) {
            _0x591c79 != this['_height'] && (super['height'] = _0x591c79, this['_setCellCh' + 'anged']());
        }
        get ['height']() {
            return super['height'];
        }
        get ['repeatX']() {
            return this['_repeatX'] > 0x0 ? this['_repeatX'] : this['_repeatX2'] > 0x0 ? this['_repeatX2'] : 0x1;
        }
        set ['repeatX'](_0x2a6014) {
            this['_repeatX'] = _0x2a6014, this['_setCellCh' + 'anged']();
        }
        get ['repeatY']() {
            return this['_repeatY'] > 0x0 ? this['_repeatY'] : this['_repeatY2'] > 0x0 ? this['_repeatY2'] : 0x1;
        }
        set ['repeatY'](_0x2b8d4c) {
            this['_repeatY'] = _0x2b8d4c, this['_setCellCh' + 'anged']();
        }
        get ['spaceX']() {
            return this['_spaceX'];
        }
        set ['spaceX'](_0xbc057d) {
            this['_spaceX'] = _0xbc057d, this['_setCellCh' + 'anged']();
        }
        get ['spaceY']() {
            return this['_spaceY'];
        }
        set ['spaceY'](_0x472d06) {
            this['_spaceY'] = _0x472d06, this['_setCellCh' + 'anged']();
        }
        ['changeCell' + 's']() {
            if (this['_cellChang' + 'ed'] = !0x1, this['_itemRende' + 'r']) {
                this['scrollBar'] = this['getChildBy' + 'Name']('scrollBar');
                var _0x25465c = this['_getOneCel' + 'l'](), _0x124a7e = _0x25465c['width'] + this['_spaceX'] || 0x1, _0x43ca21 = _0x25465c['height'] + this['_spaceY'] || 0x1;
                this['_width'] > 0x0 && (this['_repeatX2'] = this['_isVertica' + 'l'] ? Math['round'](this['_width'] / _0x124a7e) : Math['ceil'](this['_width'] / _0x124a7e)), this['_height'] > 0x0 && (this['_repeatY2'] = this['_isVertica' + 'l'] ? Math['ceil'](this['_height'] / _0x43ca21) : Math['round'](this['_height'] / _0x43ca21));
                var _0x258372 = this['_width'] ? this['_width'] : _0x124a7e * this['repeatX'] - this['_spaceX'], _0xa891f5 = this['_height'] ? this['_height'] : _0x43ca21 * this['repeatY'] - this['_spaceY'];
                this['_cellSize'] = this['_isVertica' + 'l'] ? _0x43ca21 : _0x124a7e, this['_cellOffse' + 't'] = this['_isVertica' + 'l'] ? _0x43ca21 * Math['max'](this['_repeatY2'], this['_repeatY']) - _0xa891f5 - this['_spaceY'] : _0x124a7e * Math['max'](this['_repeatX2'], this['_repeatX']) - _0x258372 - this['_spaceX'], this['_isVertica' + 'l'] && this['vScrollBar' + 'Skin'] ? this['_scrollBar']['height'] = _0xa891f5 : !this['_isVertica' + 'l'] && this['hScrollBar' + 'Skin'] && (this['_scrollBar']['width'] = _0x258372), this['setContent' + 'Size'](_0x258372, _0xa891f5);
                var _0x5b0efc = this['_isVertica' + 'l'] ? this['repeatX'] : this['repeatY'], _0x20ac79 = (this['_isVertica' + 'l'] ? this['repeatY'] : this['repeatX']) + (this['_scrollBar'] ? 0x1 : 0x0);
                this['_createIte' + 'ms'](0x0, _0x5b0efc, _0x20ac79), this['_createdLi' + 'ne'] = _0x20ac79, this['_array'] && (this['array'] = this['_array'], this['runCallLat' + 'er'](this['renderItem' + 's']));
            }
        }
        ['_getOneCel' + 'l']() {
            if (0x0 === this['_cells']['length']) {
                var _0x4931b4 = this['createItem']();
                if (this['_offset']['setTo'](_0x4931b4['_x'], _0x4931b4['_y']), this['cacheConte' + 'nt'])
                    return _0x4931b4;
                this['_cells']['push'](_0x4931b4);
            }
            return this['_cells'][0x0];
        }
        ['_createIte' + 'ms'](_0x44e271, _0x4b38a0, _0x4f4e3d) {
            var _0x32f1e6 = this['_content'], _0x4696a6 = this['_getOneCel' + 'l'](), _0x527c5d = _0x4696a6['width'] + this['_spaceX'], _0x23ca5d = _0x4696a6['height'] + this['_spaceY'];
            if (this['cacheConte' + 'nt']) {
                var _0x58b57c = new _0x1c310b();
                _0x58b57c['cacheAs'] = 'normal', _0x58b57c['pos']((this['_isVertica' + 'l'] ? 0x0 : _0x44e271) * _0x527c5d, (this['_isVertica' + 'l'] ? _0x44e271 : 0x0) * _0x23ca5d), this['_content']['addChild'](_0x58b57c), _0x32f1e6 = _0x58b57c;
            } else {
                for (var _0x287e00 = [], _0x105af6 = this['_cells']['length'] - 0x1; _0x105af6 > -0x1; _0x105af6--) {
                    var _0x103035 = this['_cells'][_0x105af6];
                    _0x103035['removeSelf'](), _0x287e00['push'](_0x103035);
                }
                this['_cells']['length'] = 0x0;
            }
            for (var _0x3a8f4b = _0x44e271; _0x3a8f4b < _0x4f4e3d; _0x3a8f4b++)
                for (var _0x4e5fa0 = 0x0; _0x4e5fa0 < _0x4b38a0; _0x4e5fa0++)
                    (_0x4696a6 = _0x287e00 && _0x287e00['length'] ? _0x287e00['pop']() : this['createItem']())['x'] = (this['_isVertica' + 'l'] ? _0x4e5fa0 : _0x3a8f4b) * _0x527c5d - _0x32f1e6['_x'], _0x4696a6['y'] = (this['_isVertica' + 'l'] ? _0x3a8f4b : _0x4e5fa0) * _0x23ca5d - _0x32f1e6['_y'], _0x4696a6['name'] = 'item' + (_0x3a8f4b * _0x4b38a0 + _0x4e5fa0), _0x32f1e6['addChild'](_0x4696a6), this['addCell'](_0x4696a6);
        }
        ['createItem']() {
            var _0x4c754a = [];
            if ('function' == typeof this['_itemRende' + 'r'])
                var _0x1bc6b5 = new this['_itemRende' + 'r']();
            else
                _0x1bc6b5 = _0x20385f['SceneUtils']['createComp'](this['_itemRende' + 'r'], null, null, _0x4c754a);
            if (0x0 == _0x4c754a['length'] && _0x1bc6b5['_watchMap']) {
                var _0x3ab5f0 = _0x1bc6b5['_watchMap'];
                for (var _0x42e24f in _0x3ab5f0)
                    for (var _0x236817 = _0x3ab5f0[_0x42e24f], _0x81e231 = 0x0; _0x81e231 < _0x236817['length']; _0x81e231++) {
                        var _0x4c1a2a = _0x236817[_0x81e231];
                        _0x4c754a['push'](_0x4c1a2a['comp'], _0x4c1a2a['prop'], _0x4c1a2a['value']);
                    }
            }
            return _0x4c754a['length'] && (_0x1bc6b5['_$bindData'] = _0x4c754a), _0x1bc6b5;
        }
        ['addCell'](_0x3ab1a5) {
            _0x3ab1a5['on'](_0x20385f['Event']['CLICK'], this, this['onCellMous' + 'e']), _0x3ab1a5['on'](_0x20385f['Event']['RIGHT_CLIC' + 'K'], this, this['onCellMous' + 'e']), _0x3ab1a5['on'](_0x20385f['Event']['MOUSE_OVER'], this, this['onCellMous' + 'e']), _0x3ab1a5['on'](_0x20385f['Event']['MOUSE_OUT'], this, this['onCellMous' + 'e']), _0x3ab1a5['on'](_0x20385f['Event']['MOUSE_DOWN'], this, this['onCellMous' + 'e']), _0x3ab1a5['on'](_0x20385f['Event']['MOUSE_UP'], this, this['onCellMous' + 'e']), this['_cells']['push'](_0x3ab1a5);
        }
        ['_afterInit' + 'ed']() {
            this['initItems']();
        }
        ['initItems']() {
            if (!this['_itemRende' + 'r'] && null != this['getChildBy' + 'Name']('item0')) {
                var _0x40a349;
                this['repeatX'] = 0x1, _0x40a349 = 0x0;
                for (var _0x1c5b74 = 0x0; _0x1c5b74 < 0x2710; _0x1c5b74++) {
                    var _0x2cf700 = this['getChildBy' + 'Name']('item' + _0x1c5b74);
                    if (!_0x2cf700)
                        break;
                    this['addCell'](_0x2cf700), _0x40a349++;
                }
                this['repeatY'] = _0x40a349;
            }
        }
        ['setContent' + 'Size'](_0x6bbb1, _0x590331) {
            this['_content']['width'] = _0x6bbb1, this['_content']['height'] = _0x590331, (this['_scrollBar'] || 0x0 != this['_offset']['x'] || 0x0 != this['_offset']['y']) && (this['_content']['_style']['scrollRect'] || (this['_content']['scrollRect'] = _0x20385f['Rectangle']['create']()), this['_content']['_style']['scrollRect']['setTo'](-this['_offset']['x'], -this['_offset']['y'], _0x6bbb1, _0x590331), this['_content']['scrollRect'] = this['_content']['scrollRect']), this['event'](_0x20385f['Event']['RESIZE']);
        }
        ['onCellMous' + 'e'](_0x15ad5f) {
            _0x15ad5f['type'] === _0x20385f['Event']['MOUSE_DOWN'] && (this['_isMoved'] = !0x1);
            var _0x39c670 = _0x15ad5f['currentTar' + 'get'], _0x2491a6 = this['_startInde' + 'x'] + this['_cells']['indexOf'](_0x39c670);
            _0x2491a6 < 0x0 || (_0x15ad5f['type'] === _0x20385f['Event']['CLICK'] || _0x15ad5f['type'] === _0x20385f['Event']['RIGHT_CLIC' + 'K'] ? this['selectEnab' + 'le'] && !this['_isMoved'] ? this['selectedIn' + 'dex'] = _0x2491a6 : this['changeCell' + 'State'](_0x39c670, !0x0, 0x0) : _0x15ad5f['type'] !== _0x20385f['Event']['MOUSE_OVER'] && _0x15ad5f['type'] !== _0x20385f['Event']['MOUSE_OUT'] || this['_selectedI' + 'ndex'] === _0x2491a6 || this['changeCell' + 'State'](_0x39c670, _0x15ad5f['type'] === _0x20385f['Event']['MOUSE_OVER'], 0x0), this['mouseHandl' + 'er'] && this['mouseHandl' + 'er']['runWith']([
                _0x15ad5f,
                _0x2491a6
            ]));
        }
        ['changeCell' + 'State'](_0x355275, _0x101190, _0x1c3f98) {
            var _0x5784a0 = _0x355275['getChildBy' + 'Name']('selectBox');
            _0x5784a0 && (this['selectEnab' + 'le'] = !0x0, _0x5784a0['visible'] = _0x101190, _0x5784a0['index'] = _0x1c3f98);
        }
        ['_sizeChang' + 'ed']() {
            super['_sizeChang' + 'ed'](), this['setContent' + 'Size'](this['width'], this['height']), this['_scrollBar'] && this['callLater'](this['onScrollBa' + 'rChange']);
        }
        ['onScrollBa' + 'rChange'](_0x25d909 = null) {
            this['runCallLat' + 'er'](this['changeCell' + 's']);
            var _0xa340ce = this['_scrollBar']['value'], _0x4e5ddc = this['_isVertica' + 'l'] ? this['repeatX'] : this['repeatY'], _0x56d262 = this['_isVertica' + 'l'] ? this['repeatY'] : this['repeatX'], _0x3f7b57 = Math['floor'](_0xa340ce / this['_cellSize']);
            if (this['cacheConte' + 'nt'])
                _0x211db4 = _0x56d262 + 0x1, this['_createdLi' + 'ne'] - _0x3f7b57 < _0x211db4 && (this['_createIte' + 'ms'](this['_createdLi' + 'ne'], _0x4e5ddc, this['_createdLi' + 'ne'] + _0x211db4), this['renderItem' + 's'](this['_createdLi' + 'ne'] * _0x4e5ddc, 0x0), this['_createdLi' + 'ne'] += _0x211db4);
            else {
                var _0x5099bd = _0x3f7b57 * _0x4e5ddc, _0x211db4 = 0x0;
                if (_0x5099bd > this['_startInde' + 'x']) {
                    _0x211db4 = _0x5099bd - this['_startInde' + 'x'];
                    var _0x1045d4 = !0x0, _0x431524 = this['_startInde' + 'x'] + _0x4e5ddc * (_0x56d262 + 0x1);
                    this['_isMoved'] = !0x0;
                } else
                    _0x5099bd < this['_startInde' + 'x'] && (_0x211db4 = this['_startInde' + 'x'] - _0x5099bd, _0x1045d4 = !0x1, _0x431524 = this['_startInde' + 'x'] - 0x1, this['_isMoved'] = !0x0);
                for (var _0xf54b56 = 0x0; _0xf54b56 < _0x211db4; _0xf54b56++) {
                    if (_0x1045d4) {
                        var _0x586c34 = this['_cells']['shift']();
                        this['_cells'][this['_cells']['length']] = _0x586c34;
                        var _0x91844c = _0x431524 + _0xf54b56;
                    } else
                        _0x586c34 = this['_cells']['pop'](), this['_cells']['unshift'](_0x586c34), _0x91844c = _0x431524 - _0xf54b56;
                    var _0x284d96 = Math['floor'](_0x91844c / _0x4e5ddc) * this['_cellSize'];
                    this['_isVertica' + 'l'] ? _0x586c34['y'] = _0x284d96 : _0x586c34['x'] = _0x284d96, this['renderItem'](_0x586c34, _0x91844c);
                }
                this['_startInde' + 'x'] = _0x5099bd, this['changeSele' + 'ctStatus']();
            }
            var _0x1e768e = this['_content']['_style']['scrollRect'];
            this['_isVertica' + 'l'] ? (_0x1e768e['y'] = _0xa340ce - this['_offset']['y'], _0x1e768e['x'] = -this['_offset']['x']) : (_0x1e768e['y'] = -this['_offset']['y'], _0x1e768e['x'] = _0xa340ce - this['_offset']['x']), this['_content']['scrollRect'] = _0x1e768e;
        }
        ['posCell'](_0xd29c2b, _0x376cc4) {
            if (this['_scrollBar']) {
                var _0x4ecc62 = this['_isVertica' + 'l'] ? this['repeatX'] : this['repeatY'], _0x2a046b = (this['_isVertica' + 'l'] ? this['repeatY'] : this['repeatX'], Math['floor'](_0x376cc4 / _0x4ecc62) * this['_cellSize']);
                this['_isVertica' + 'l'] ? _0xd29c2b['_y'] = _0x2a046b : _0xd29c2b['x'] = _0x2a046b;
            }
        }
        get ['selectedIn' + 'dex']() {
            return this['_selectedI' + 'ndex'];
        }
        set ['selectedIn' + 'dex'](_0x2a113f) {
            this['_selectedI' + 'ndex'] != _0x2a113f && (this['_selectedI' + 'ndex'] = _0x2a113f, this['changeSele' + 'ctStatus'](), this['event'](_0x20385f['Event']['CHANGE']), this['selectHand' + 'ler'] && this['selectHand' + 'ler']['runWith'](_0x2a113f), this['startIndex'] = this['_startInde' + 'x']);
        }
        ['changeSele' + 'ctStatus']() {
            for (var _0x29a86f = 0x0, _0x3abe6a = this['_cells']['length']; _0x29a86f < _0x3abe6a; _0x29a86f++)
                this['changeCell' + 'State'](this['_cells'][_0x29a86f], this['_selectedI' + 'ndex'] === this['_startInde' + 'x'] + _0x29a86f, 0x1);
        }
        get ['selectedIt' + 'em']() {
            return -0x1 != this['_selectedI' + 'ndex'] ? this['_array'][this['_selectedI' + 'ndex']] : null;
        }
        set ['selectedIt' + 'em'](_0x2dcf24) {
            this['selectedIn' + 'dex'] = this['_array']['indexOf'](_0x2dcf24);
        }
        get ['selection']() {
            return this['getCell'](this['_selectedI' + 'ndex']);
        }
        set ['selection'](_0x3f5e4c) {
            this['selectedIn' + 'dex'] = this['_startInde' + 'x'] + this['_cells']['indexOf'](_0x3f5e4c);
        }
        get ['startIndex']() {
            return this['_startInde' + 'x'];
        }
        set ['startIndex'](_0xca3a63) {
            this['_startInde' + 'x'] = _0xca3a63 > 0x0 ? _0xca3a63 : 0x0, this['callLater'](this['renderItem' + 's']);
        }
        ['renderItem' + 's'](_0x271ac1 = 0x0, _0x128c6e = 0x0) {
            for (var _0x548141 = _0x271ac1, _0x2610e7 = _0x128c6e || this['_cells']['length']; _0x548141 < _0x2610e7; _0x548141++)
                this['renderItem'](this['_cells'][_0x548141], this['_startInde' + 'x'] + _0x548141);
            this['changeSele' + 'ctStatus']();
        }
        ['renderItem'](_0x5e79c9, _0x577211) {
            this['_array'] && _0x577211 >= 0x0 && _0x577211 < this['_array']['length'] ? (_0x5e79c9['visible'] = !0x0, _0x5e79c9['_$bindData'] ? (_0x5e79c9['_dataSourc' + 'e'] = this['_array'][_0x577211], this['_bindData'](_0x5e79c9, this['_array'][_0x577211])) : _0x5e79c9['dataSource'] = this['_array'][_0x577211], this['cacheConte' + 'nt'] || this['posCell'](_0x5e79c9, _0x577211), this['hasListene' + 'r'](_0x20385f['Event']['RENDER']) && this['event'](_0x20385f['Event']['RENDER'], [
                _0x5e79c9,
                _0x577211
            ]), this['renderHand' + 'ler'] && this['renderHand' + 'ler']['runWith']([
                _0x5e79c9,
                _0x577211
            ])) : (_0x5e79c9['visible'] = !0x1, _0x5e79c9['dataSource'] = null);
        }
        ['_bindData'](_0x449d3e, _0x3916f) {
            for (var _0x101187 = _0x449d3e['_$bindData'], _0x3ebeb8 = 0x0, _0x1e745b = _0x101187['length']; _0x3ebeb8 < _0x1e745b; _0x3ebeb8++) {
                var _0x13fb02 = _0x101187[_0x3ebeb8++], _0x274118 = _0x101187[_0x3ebeb8++], _0x1cc7d0 = _0x101187[_0x3ebeb8], _0x5becc0 = _0x234441['getBindFun'](_0x1cc7d0);
                _0x13fb02[_0x274118] = _0x5becc0['call'](this, _0x3916f);
            }
        }
        get ['array']() {
            return this['_array'];
        }
        set ['array'](_0x1f2b34) {
            this['runCallLat' + 'er'](this['changeCell' + 's']), this['_array'] = _0x1f2b34 || [], this['_preLen'] = this['_array']['length'];
            var _0x3d3aa2 = this['_array']['length'];
            if (this['totalPage'] = Math['ceil'](_0x3d3aa2 / (this['repeatX'] * this['repeatY'])), this['_selectedI' + 'ndex'] = this['_selectedI' + 'ndex'] < _0x3d3aa2 ? this['_selectedI' + 'ndex'] : _0x3d3aa2 - 0x1, this['startIndex'] = this['_startInde' + 'x'], this['_scrollBar']) {
                this['_scrollBar']['stopScroll']();
                var _0x537e4f = this['_isVertica' + 'l'] ? this['repeatX'] : this['repeatY'], _0x423f2d = this['_isVertica' + 'l'] ? this['repeatY'] : this['repeatX'], _0x4acd36 = Math['ceil'](_0x3d3aa2 / _0x537e4f);
                (this['_cellOffse' + 't'] > 0x0 ? this['totalPage'] + 0x1 : this['totalPage']) > 0x1 && _0x4acd36 >= _0x423f2d ? (this['_scrollBar']['scrollSize'] = this['_cellSize'], this['_scrollBar']['thumbPerce' + 'nt'] = _0x423f2d / _0x4acd36, this['_scrollBar']['setScroll'](0x0, (_0x4acd36 - _0x423f2d) * this['_cellSize'] + this['_cellOffse' + 't'], this['_scrollBar']['value']), this['_scrollBar']['target'] = this['_content']) : (this['_scrollBar']['setScroll'](0x0, 0x0, 0x0), this['_scrollBar']['target'] = this['_content']);
            }
        }
        ['updateArra' + 'y'](_0x1442c9) {
            var _0x2fafc1;
            if (this['_array'] = _0x1442c9, this['_array'] && ((_0x2fafc1 = this['_preLen'] - this['_startInde' + 'x']) >= 0x0 && this['renderItem' + 's'](_0x2fafc1), this['_preLen'] = this['_array']['length']), this['_scrollBar']) {
                var _0x2eb1e6 = _0x1442c9['length'], _0x42c681 = this['_isVertica' + 'l'] ? this['repeatX'] : this['repeatY'], _0x266a99 = this['_isVertica' + 'l'] ? this['repeatY'] : this['repeatX'], _0x22878a = Math['ceil'](_0x2eb1e6 / _0x42c681);
                _0x22878a >= _0x266a99 && (this['_scrollBar']['thumbPerce' + 'nt'] = _0x266a99 / _0x22878a, this['_scrollBar']['slider']['_max'] = (_0x22878a - _0x266a99) * this['_cellSize'] + this['_cellOffse' + 't']);
            }
        }
        get ['page']() {
            return this['_page'];
        }
        set ['page'](_0x596daf) {
            this['_page'] = _0x596daf, this['_array'] && (this['_page'] = _0x596daf > 0x0 ? _0x596daf : 0x0, this['_page'] = this['_page'] < this['totalPage'] ? this['_page'] : this['totalPage'] - 0x1, this['startIndex'] = this['_page'] * this['repeatX'] * this['repeatY']);
        }
        get ['length']() {
            return this['_array'] ? this['_array']['length'] : 0x0;
        }
        set ['dataSource'](_0xece69a) {
            this['_dataSourc' + 'e'] = _0xece69a, 'number' == typeof _0xece69a || 'string' == typeof _0xece69a ? this['selectedIn' + 'dex'] = parseInt(_0xece69a) : _0xece69a instanceof Array ? this['array'] = _0xece69a : super['dataSource'] = _0xece69a;
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
        set ['elasticEna' + 'bled'](_0x59b10f) {
            this['_elasticEn' + 'abled'] = _0x59b10f, this['_scrollBar'] && (this['_scrollBar']['elasticDis' + 'tance'] = _0x59b10f ? 0xc8 : 0x0);
        }
        ['refresh']() {
            this['array'] = this['_array'];
        }
        ['getItem'](_0x4d970c) {
            return _0x4d970c > -0x1 && _0x4d970c < this['_array']['length'] ? this['_array'][_0x4d970c] : null;
        }
        ['changeItem'](_0x143378, _0x178d20) {
            _0x143378 > -0x1 && _0x143378 < this['_array']['length'] && (this['_array'][_0x143378] = _0x178d20, _0x143378 >= this['_startInde' + 'x'] && _0x143378 < this['_startInde' + 'x'] + this['_cells']['length'] && this['renderItem'](this['getCell'](_0x143378), _0x143378));
        }
        ['setItem'](_0x373aff, _0x272044) {
            this['changeItem'](_0x373aff, _0x272044);
        }
        ['addItem'](_0x4fe44c) {
            this['_array']['push'](_0x4fe44c), this['array'] = this['_array'];
        }
        ['addItemAt'](_0x53c704, _0x3caa8f) {
            this['_array']['splice'](_0x3caa8f, 0x0, _0x53c704), this['array'] = this['_array'];
        }
        ['deleteItem'](_0x2fbaf1) {
            this['_array']['splice'](_0x2fbaf1, 0x1), this['array'] = this['_array'];
        }
        ['getCell'](_0x305920) {
            return this['runCallLat' + 'er'](this['changeCell' + 's']), _0x305920 > -0x1 && this['_cells'] ? this['_cells'][(_0x305920 - this['_startInde' + 'x']) % this['_cells']['length']] : null;
        }
        ['scrollTo'](_0x5b9574) {
            if (this['_scrollBar']) {
                var _0xe98a08 = this['_isVertica' + 'l'] ? this['repeatX'] : this['repeatY'];
                this['_scrollBar']['value'] = Math['floor'](_0x5b9574 / _0xe98a08) * this['_cellSize'];
            } else
                this['startIndex'] = _0x5b9574;
        }
        ['tweenTo'](_0xb05979, _0x34b2f5 = 0xc8, _0x1dd280 = null) {
            if (this['_scrollBar']) {
                this['_scrollBar']['stopScroll']();
                var _0x1042e4 = this['_isVertica' + 'l'] ? this['repeatX'] : this['repeatY'];
                _0x20385f['Tween']['to'](this['_scrollBar'], { 'value': Math['floor'](_0xb05979 / _0x1042e4) * this['_cellSize'] }, _0x34b2f5, null, _0x1dd280, 0x0, !0x0);
            } else
                this['startIndex'] = _0xb05979, _0x1dd280 && _0x1dd280['run']();
        }
        ['_setCellCh' + 'anged']() {
            this['_cellChang' + 'ed'] || (this['_cellChang' + 'ed'] = !0x0, this['callLater'](this['changeCell' + 's']));
        }
        ['commitMeas' + 'ure']() {
            this['runCallLat' + 'er'](this['changeCell' + 's']);
        }
    }
    _0x20385f['ILaya']['regClass'](_0x2460e1), _0x20385f['ClassUtils']['regClass']('laya.ui.Li' + 'st', _0x2460e1), _0x20385f['ClassUtils']['regClass']('Laya.List', _0x2460e1);
    class _0x189f8b extends _0xa31ae0 {
        constructor(_0x2bc0e5 = null, _0xa3eee5 = null) {
            super(), this['_visibleNu' + 'm'] = 0x6, this['_itemColor' + 's'] = _0x44287a['comboBoxIt' + 'emColors'], this['_itemSize'] = 0xc, this['_labels'] = [], this['_selectedI' + 'ndex'] = -0x1, this['itemRender'] = null, this['skin'] = _0x2bc0e5, this['labels'] = _0xa3eee5;
        }
        ['destroy'](_0x2bb9c7 = !0x0) {
            super['destroy'](_0x2bb9c7), this['_button'] && this['_button']['destroy'](_0x2bb9c7), this['_list'] && this['_list']['destroy'](_0x2bb9c7), this['_button'] = null, this['_list'] = null, this['_itemColor' + 's'] = null, this['_labels'] = null, this['_selectHan' + 'dler'] = null;
        }
        ['createChil' + 'dren']() {
            this['addChild'](this['_button'] = new _0x5dea9c()), this['_button']['text']['align'] = 'left', this['_button']['labelPaddi' + 'ng'] = '0,0,0,5', this['_button']['on'](_0x20385f['Event']['MOUSE_DOWN'], this, this['onButtonMo' + 'useDown']);
        }
        ['_createLis' + 't']() {
            this['_list'] = new _0x2460e1(), this['_scrollBar' + 'Skin'] && (this['_list']['vScrollBar' + 'Skin'] = this['_scrollBar' + 'Skin']), this['_setListEv' + 'ent'](this['_list']);
        }
        ['_setListEv' + 'ent'](_0x51550b) {
            this['_list']['selectEnab' + 'le'] = !0x0, this['_list']['on'](_0x20385f['Event']['MOUSE_DOWN'], this, this['onListDown']), this['_list']['mouseHandl' + 'er'] = _0x20385f['Handler']['create'](this, this['onlistItem' + 'Mouse'], null, !0x1), this['_list']['scrollBar'] && this['_list']['scrollBar']['on'](_0x20385f['Event']['MOUSE_DOWN'], this, this['onScrollBa' + 'rDown']);
        }
        ['onListDown'](_0x59c602) {
            _0x59c602['stopPropag' + 'ation']();
        }
        ['onScrollBa' + 'rDown'](_0xf38d77) {
            _0xf38d77['stopPropag' + 'ation']();
        }
        ['onButtonMo' + 'useDown'](_0x2f3b94) {
            this['callLater'](this['switchTo'], [!this['_isOpen']]);
        }
        get ['skin']() {
            return this['_button']['skin'];
        }
        set ['skin'](_0x2ad37e) {
            this['_button']['skin'] != _0x2ad37e && (this['_button']['skin'] = _0x2ad37e, this['_listChang' + 'ed'] = !0x0);
        }
        ['measureWid' + 'th']() {
            return this['_button']['width'];
        }
        ['measureHei' + 'ght']() {
            return this['_button']['height'];
        }
        ['changeList']() {
            this['_listChang' + 'ed'] = !0x1;
            var _0x1f909a = this['width'] - 0x2, _0x43f212 = this['_itemColor' + 's'][0x2];
            this['_itemHeigh' + 't'] = this['_itemSize'] + 0x6, this['_list']['itemRender'] = this['itemRender'] || {
                'type': 'Box',
                'child': [{
                        'type': 'Label',
                        'props': {
                            'name': 'label',
                            'x': 0x1,
                            'padding': '3,3,3,3',
                            'width': _0x1f909a,
                            'height': this['_itemHeigh' + 't'],
                            'fontSize': this['_itemSize'],
                            'color': _0x43f212
                        }
                    }]
            }, this['_list']['repeatY'] = this['_visibleNu' + 'm'], this['_list']['refresh']();
        }
        ['onlistItem' + 'Mouse'](_0x2b04b6, _0x4f769e) {
            var _0x5c1dce = _0x2b04b6['type'];
            if (_0x5c1dce === _0x20385f['Event']['MOUSE_OVER'] || _0x5c1dce === _0x20385f['Event']['MOUSE_OUT']) {
                if (this['_isCustomL' + 'ist'])
                    return;
                var _0x4b240c = this['_list']['getCell'](_0x4f769e);
                if (!_0x4b240c)
                    return;
                var _0x1157b0 = _0x4b240c['getChildBy' + 'Name']('label');
                _0x1157b0 && (_0x5c1dce === _0x20385f['Event']['ROLL_OVER'] ? (_0x1157b0['bgColor'] = this['_itemColor' + 's'][0x0], _0x1157b0['color'] = this['_itemColor' + 's'][0x1]) : (_0x1157b0['bgColor'] = null, _0x1157b0['color'] = this['_itemColor' + 's'][0x2]));
            } else
                _0x5c1dce === _0x20385f['Event']['CLICK'] && (this['selectedIn' + 'dex'] = _0x4f769e, this['isOpen'] = !0x1);
        }
        ['switchTo'](_0x5d19c6) {
            this['isOpen'] = _0x5d19c6;
        }
        ['changeOpen']() {
            this['isOpen'] = !this['_isOpen'];
        }
        set ['width'](_0x1fa9d1) {
            super['width'] = _0x1fa9d1, this['_button']['width'] = this['_width'], this['_itemChang' + 'ed'] = !0x0, this['_listChang' + 'ed'] = !0x0;
        }
        get ['width']() {
            return super['width'];
        }
        set ['height'](_0x206204) {
            super['height'] = _0x206204, this['_button']['height'] = this['_height'];
        }
        get ['height']() {
            return super['height'];
        }
        get ['labels']() {
            return this['_labels']['join'](',');
        }
        set ['labels'](_0x5f0f83) {
            this['_labels']['length'] > 0x0 && (this['selectedIn' + 'dex'] = -0x1), _0x5f0f83 ? this['_labels'] = _0x5f0f83['split'](',') : this['_labels']['length'] = 0x0, this['_itemChang' + 'ed'] = !0x0;
        }
        ['changeItem']() {
            if (this['_itemChang' + 'ed'] = !0x1, this['_listHeigh' + 't'] = this['_labels']['length'] > 0x0 ? Math['min'](this['_visibleNu' + 'm'], this['_labels']['length']) * this['_itemHeigh' + 't'] : this['_itemHeigh' + 't'], !this['_isCustomL' + 'ist']) {
                var _0x5a187a = this['_list']['graphics'];
                _0x5a187a['clear'](!0x0), _0x5a187a['drawRect'](0x0, 0x0, this['width'] - 0x1, this['_listHeigh' + 't'], this['_itemColor' + 's'][0x4], this['_itemColor' + 's'][0x3]);
            }
            var _0x415676 = this['_list']['array'] || [];
            _0x415676['length'] = 0x0;
            for (var _0x3fbeca = 0x0, _0xecd1d6 = this['_labels']['length']; _0x3fbeca < _0xecd1d6; _0x3fbeca++)
                _0x415676['push']({ 'label': this['_labels'][_0x3fbeca] });
            this['_list']['height'] = this['_listHeigh' + 't'], this['_list']['array'] = _0x415676;
        }
        get ['selectedIn' + 'dex']() {
            return this['_selectedI' + 'ndex'];
        }
        set ['selectedIn' + 'dex'](_0x92604d) {
            this['_selectedI' + 'ndex'] != _0x92604d && (this['_selectedI' + 'ndex'] = _0x92604d, this['_labels']['length'] > 0x0 ? this['changeSele' + 'cted']() : this['callLater'](this['changeSele' + 'cted']), this['event'](_0x20385f['Event']['CHANGE'], [_0x20385f['Event']['EMPTY']['setTo'](_0x20385f['Event']['CHANGE'], this, this)]), this['_selectHan' + 'dler'] && this['_selectHan' + 'dler']['runWith'](this['_selectedI' + 'ndex']));
        }
        ['changeSele' + 'cted']() {
            this['_button']['label'] = this['selectedLa' + 'bel'];
        }
        get ['selectHand' + 'ler']() {
            return this['_selectHan' + 'dler'];
        }
        set ['selectHand' + 'ler'](_0x36f1d8) {
            this['_selectHan' + 'dler'] = _0x36f1d8;
        }
        get ['selectedLa' + 'bel']() {
            return this['_selectedI' + 'ndex'] > -0x1 && this['_selectedI' + 'ndex'] < this['_labels']['length'] ? this['_labels'][this['_selectedI' + 'ndex']] : null;
        }
        set ['selectedLa' + 'bel'](_0x2b4389) {
            this['selectedIn' + 'dex'] = this['_labels']['indexOf'](_0x2b4389);
        }
        get ['visibleNum']() {
            return this['_visibleNu' + 'm'];
        }
        set ['visibleNum'](_0x4067fa) {
            this['_visibleNu' + 'm'] = _0x4067fa, this['_listChang' + 'ed'] = !0x0;
        }
        get ['itemColors']() {
            return String(this['_itemColor' + 's']);
        }
        set ['itemColors'](_0x5be608) {
            this['_itemColor' + 's'] = _0x234441['fillArray'](this['_itemColor' + 's'], _0x5be608, String), this['_listChang' + 'ed'] = !0x0;
        }
        get ['itemSize']() {
            return this['_itemSize'];
        }
        set ['itemSize'](_0x293ebe) {
            this['_itemSize'] = _0x293ebe, this['_listChang' + 'ed'] = !0x0;
        }
        get ['isOpen']() {
            return this['_isOpen'];
        }
        set ['isOpen'](_0x4bbea9) {
            if (this['_isOpen'] != _0x4bbea9) {
                if (this['_isOpen'] = _0x4bbea9, this['_button']['selected'] = this['_isOpen'], this['_isOpen']) {
                    this['_list'] || this['_createLis' + 't'](), this['_listChang' + 'ed'] && !this['_isCustomL' + 'ist'] && this['changeList'](), this['_itemChang' + 'ed'] && this['changeItem']();
                    var _0x3964c8 = this['localToGlo' + 'bal'](_0x20385f['Point']['TEMP']['setTo'](0x0, 0x0)), _0x5dc764 = _0x3964c8['y'] + this['_button']['height'];
                    _0x5dc764 = _0x5dc764 + this['_listHeigh' + 't'] <= _0x20385f['ILaya']['stage']['height'] ? _0x5dc764 : _0x3964c8['y'] - this['_listHeigh' + 't'], this['_list']['pos'](_0x3964c8['x'], _0x5dc764), this['_list']['zOrder'] = 0x3e9, _0x20385f['ILaya']['stage']['addChild'](this['_list']), _0x20385f['ILaya']['stage']['once'](_0x20385f['Event']['MOUSE_DOWN'], this, this['removeList']), _0x20385f['ILaya']['stage']['on'](_0x20385f['Event']['MOUSE_WHEE' + 'L'], this, this['_onStageMo' + 'useWheel']), this['_list']['selectedIn' + 'dex'] = this['_selectedI' + 'ndex'];
                } else
                    this['_list'] && this['_list']['removeSelf']();
            }
        }
        ['_onStageMo' + 'useWheel'](_0x5c7556) {
            this['_list'] && !this['_list']['contains'](_0x5c7556['target']) && this['removeList'](null);
        }
        ['removeList'](_0x16399a) {
            _0x20385f['ILaya']['stage']['off'](_0x20385f['Event']['MOUSE_DOWN'], this, this['removeList']), _0x20385f['ILaya']['stage']['off'](_0x20385f['Event']['MOUSE_WHEE' + 'L'], this, this['_onStageMo' + 'useWheel']), this['isOpen'] = !0x1;
        }
        get ['scrollBarS' + 'kin']() {
            return this['_scrollBar' + 'Skin'];
        }
        set ['scrollBarS' + 'kin'](_0x38e5b1) {
            this['_scrollBar' + 'Skin'] = _0x38e5b1;
        }
        get ['sizeGrid']() {
            return this['_button']['sizeGrid'];
        }
        set ['sizeGrid'](_0x4ba18f) {
            this['_button']['sizeGrid'] = _0x4ba18f;
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
        set ['list'](_0x166ce3) {
            _0x166ce3 && (_0x166ce3['removeSelf'](), this['_isCustomL' + 'ist'] = !0x0, this['_list'] = _0x166ce3, this['_setListEv' + 'ent'](_0x166ce3), this['_itemHeigh' + 't'] = _0x166ce3['getCell'](0x0)['height'] + _0x166ce3['spaceY']);
        }
        set ['dataSource'](_0x3300ca) {
            this['_dataSourc' + 'e'] = _0x3300ca, 'number' == typeof _0x3300ca || 'string' == typeof _0x3300ca ? this['selectedIn' + 'dex'] = parseInt(_0x3300ca) : _0x3300ca instanceof Array ? this['labels'] = _0x3300ca['join'](',') : super['dataSource'] = _0x3300ca;
        }
        get ['dataSource']() {
            return super['dataSource'];
        }
        get ['labelColor' + 's']() {
            return this['_button']['labelColor' + 's'];
        }
        set ['labelColor' + 's'](_0x67d469) {
            this['_button']['labelColor' + 's'] != _0x67d469 && (this['_button']['labelColor' + 's'] = _0x67d469);
        }
        get ['labelPaddi' + 'ng']() {
            return this['_button']['text']['padding']['join'](',');
        }
        set ['labelPaddi' + 'ng'](_0x36c628) {
            this['_button']['text']['padding'] = _0x234441['fillArray'](_0x44287a['labelPaddi' + 'ng'], _0x36c628, Number);
        }
        get ['labelSize']() {
            return this['_button']['text']['fontSize'];
        }
        set ['labelSize'](_0x217850) {
            this['_button']['text']['fontSize'] = _0x217850;
        }
        get ['labelBold']() {
            return this['_button']['text']['bold'];
        }
        set ['labelBold'](_0x49138e) {
            this['_button']['text']['bold'] = _0x49138e;
        }
        get ['labelFont']() {
            return this['_button']['text']['font'];
        }
        set ['labelFont'](_0x5d40b4) {
            this['_button']['text']['font'] = _0x5d40b4;
        }
        get ['stateNum']() {
            return this['_button']['stateNum'];
        }
        set ['stateNum'](_0x14c932) {
            this['_button']['stateNum'] = _0x14c932;
        }
    }
    _0x20385f['ILaya']['regClass'](_0x189f8b), _0x20385f['ClassUtils']['regClass']('laya.ui.Co' + 'mboBox', _0x189f8b), _0x20385f['ClassUtils']['regClass']('Laya.Combo' + 'Box', _0x189f8b);
    class _0x36c723 extends _0xa31ae0 {
        constructor(_0x27edfb = null) {
            super(), this['_value'] = 0.5, this['skin'] = _0x27edfb;
        }
        ['destroy'](_0x2fae2f = !0x0) {
            super['destroy'](_0x2fae2f), this['_bg'] && this['_bg']['destroy'](_0x2fae2f), this['_bar'] && this['_bar']['destroy'](_0x2fae2f), this['_bg'] = this['_bar'] = null, this['changeHand' + 'ler'] = null;
        }
        ['createChil' + 'dren']() {
            this['addChild'](this['_bg'] = new _0x15956b()), this['addChild'](this['_bar'] = new _0x15956b()), this['_bar']['_bitmap']['autoCacheC' + 'md'] = !0x1;
        }
        get ['skin']() {
            return this['_skin'];
        }
        set ['skin'](_0x426fa4) {
            this['_skin'] != _0x426fa4 && (this['_skin'] = _0x426fa4, this['_skin'] && !_0x20385f['Loader']['getRes'](this['_skin']) ? _0x20385f['ILaya']['loader']['load'](this['_skin'], _0x20385f['Handler']['create'](this, this['_skinLoade' + 'd']), null, _0x20385f['Loader']['IMAGE'], 0x1) : this['_skinLoade' + 'd']());
        }
        ['_skinLoade' + 'd']() {
            this['_bg']['skin'] = this['_skin'], this['_bar']['skin'] = this['_skin']['replace']('.png', '$bar.png'), this['callLater'](this['changeValu' + 'e']), this['_sizeChang' + 'ed'](), this['event'](_0x20385f['Event']['LOADED']);
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
        set ['value'](_0xa42a6c) {
            this['_value'] != _0xa42a6c && (_0xa42a6c = _0xa42a6c > 0x1 ? 0x1 : _0xa42a6c < 0x0 ? 0x0 : _0xa42a6c, this['_value'] = _0xa42a6c, this['callLater'](this['changeValu' + 'e']), this['event'](_0x20385f['Event']['CHANGE']), this['changeHand' + 'ler'] && this['changeHand' + 'ler']['runWith'](_0xa42a6c));
        }
        ['changeValu' + 'e']() {
            if (this['sizeGrid']) {
                var _0x50bc19 = this['sizeGrid']['split'](','), _0xa49d36 = Number(_0x50bc19[0x3]), _0x559142 = Number(_0x50bc19[0x1]), _0x2975c2 = (this['width'] - _0xa49d36 - _0x559142) * this['_value'];
                this['_bar']['width'] = _0xa49d36 + _0x559142 + _0x2975c2, this['_bar']['visible'] = this['_bar']['width'] > _0xa49d36 + _0x559142;
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
        set ['sizeGrid'](_0x40269b) {
            this['_bg']['sizeGrid'] = this['_bar']['sizeGrid'] = _0x40269b;
        }
        set ['width'](_0xb4411a) {
            super['width'] = _0xb4411a, this['_bg']['width'] = this['_width'], this['callLater'](this['changeValu' + 'e']);
        }
        get ['width']() {
            return super['width'];
        }
        set ['height'](_0x5a6c34) {
            super['height'] = _0x5a6c34, this['_bg']['height'] = this['_height'], this['_bar']['height'] = this['_height'];
        }
        get ['height']() {
            return super['height'];
        }
        set ['dataSource'](_0x3344ed) {
            this['_dataSourc' + 'e'] = _0x3344ed, 'number' == typeof _0x3344ed || 'string' == typeof _0x3344ed ? this['value'] = Number(_0x3344ed) : super['dataSource'] = _0x3344ed;
        }
        get ['dataSource']() {
            return super['dataSource'];
        }
    }
    _0x20385f['ILaya']['regClass'](_0x36c723), _0x20385f['ClassUtils']['regClass']('laya.ui.Pr' + 'ogressBar', _0x36c723), _0x20385f['ClassUtils']['regClass']('Laya.Progr' + 'essBar', _0x36c723);
    class _0x10bc54 extends _0x5dea9c {
        constructor(_0x54c032 = null, _0x5569c9 = '') {
            super(_0x54c032, _0x5569c9), this['toggle'] = !0x1, this['_autoSize'] = !0x1;
        }
        ['destroy'](_0x51264b = !0x0) {
            super['destroy'](_0x51264b), this['_value'] = null;
        }
        ['preinitial' + 'ize']() {
            super['preinitial' + 'ize'](), this['toggle'] = !0x1, this['_autoSize'] = !0x1;
        }
        ['initialize']() {
            super['initialize'](), this['createText'](), this['_text']['align'] = 'left', this['_text']['valign'] = 'top', this['_text']['width'] = 0x0, this['on'](_0x20385f['Event']['CLICK'], this, this['onClick']);
        }
        ['onClick'](_0x41934b) {
            this['selected'] = !0x0;
        }
        get ['value']() {
            return null != this['_value'] ? this['_value'] : this['label'];
        }
        set ['value'](_0x466e4e) {
            this['_value'] = _0x466e4e;
        }
    }
    _0x20385f['ILaya']['regClass'](_0x10bc54), _0x20385f['ClassUtils']['regClass']('laya.ui.Ra' + 'dio', _0x10bc54), _0x20385f['ClassUtils']['regClass']('Laya.Radio', _0x10bc54);
    class _0x3c7016 extends _0x1c310b {
        constructor(_0x2bb20a = null, _0x18cc6a = null) {
            super(), this['_selectedI' + 'ndex'] = -0x1, this['_direction'] = 'horizontal', this['_space'] = 0x0, this['skin'] = _0x18cc6a, this['labels'] = _0x2bb20a;
        }
        ['preinitial' + 'ize']() {
            this['mouseEnabl' + 'ed'] = !0x0;
        }
        ['destroy'](_0x269056 = !0x0) {
            super['destroy'](_0x269056), this['_items'] && (this['_items']['length'] = 0x0), this['_items'] = null, this['selectHand' + 'ler'] = null;
        }
        ['addItem'](_0x2be082, _0x376b94 = !0x0) {
            var _0x40a668 = _0x2be082, _0xb1775b = this['_items']['length'];
            if (_0x40a668['name'] = 'item' + _0xb1775b, this['addChild'](_0x40a668), this['initItems'](), _0x376b94 && _0xb1775b > 0x0) {
                var _0x37e793 = this['_items'][_0xb1775b - 0x1];
                'horizontal' == this['_direction'] ? _0x40a668['x'] = _0x37e793['_x'] + _0x37e793['width'] + this['_space'] : _0x40a668['y'] = _0x37e793['_y'] + _0x37e793['height'] + this['_space'];
            } else
                _0x376b94 && (_0x40a668['x'] = 0x0, _0x40a668['y'] = 0x0);
            return _0xb1775b;
        }
        ['delItem'](_0x2ae144, _0x28d795 = !0x0) {
            var _0x4297ae = this['_items']['indexOf'](_0x2ae144);
            if (-0x1 != _0x4297ae) {
                var _0x1a77a7, _0x1fade3 = _0x2ae144;
                this['removeChil' + 'd'](_0x1fade3);
                for (var _0x49aef5 = _0x4297ae + 0x1, _0x2146e1 = this['_items']['length']; _0x49aef5 < _0x2146e1; _0x49aef5++) {
                    var _0x5aeb54 = this['_items'][_0x49aef5];
                    _0x5aeb54['name'] = 'item' + (_0x49aef5 - 0x1), _0x28d795 && ('horizontal' == this['_direction'] ? _0x5aeb54['x'] -= _0x1fade3['width'] + this['_space'] : _0x5aeb54['y'] -= _0x1fade3['height'] + this['_space']);
                }
                if (this['initItems'](), this['_selectedI' + 'ndex'] > -0x1)
                    _0x1a77a7 = this['_selectedI' + 'ndex'] < this['_items']['length'] ? this['_selectedI' + 'ndex'] : this['_selectedI' + 'ndex'] - 0x1, this['_selectedI' + 'ndex'] = -0x1, this['selectedIn' + 'dex'] = _0x1a77a7;
            }
        }
        ['_afterInit' + 'ed']() {
            this['initItems']();
        }
        ['initItems']() {
            this['_items'] || (this['_items'] = []), this['_items']['length'] = 0x0;
            for (var _0x4d187e = 0x0; _0x4d187e < 0x2710; _0x4d187e++) {
                var _0x44ff33 = this['getChildBy' + 'Name']('item' + _0x4d187e);
                if (null == _0x44ff33)
                    break;
                this['_items']['push'](_0x44ff33), _0x44ff33['selected'] = _0x4d187e === this['_selectedI' + 'ndex'], _0x44ff33['clickHandl' + 'er'] = _0x20385f['Handler']['create'](this, this['itemClick'], [_0x4d187e], !0x1);
            }
        }
        ['itemClick'](_0xbb39c5) {
            this['selectedIn' + 'dex'] = _0xbb39c5;
        }
        get ['selectedIn' + 'dex']() {
            return this['_selectedI' + 'ndex'];
        }
        set ['selectedIn' + 'dex'](_0x4441e1) {
            this['_selectedI' + 'ndex'] != _0x4441e1 && (this['setSelect'](this['_selectedI' + 'ndex'], !0x1), this['_selectedI' + 'ndex'] = _0x4441e1, this['setSelect'](_0x4441e1, !0x0), this['event'](_0x20385f['Event']['CHANGE']), this['selectHand' + 'ler'] && this['selectHand' + 'ler']['runWith'](this['_selectedI' + 'ndex']));
        }
        ['setSelect'](_0x5f056b, _0x26386f) {
            this['_items'] && _0x5f056b > -0x1 && _0x5f056b < this['_items']['length'] && (this['_items'][_0x5f056b]['selected'] = _0x26386f);
        }
        get ['skin']() {
            return this['_skin'];
        }
        set ['skin'](_0x3b253c) {
            this['_skin'] != _0x3b253c && (this['_skin'] = _0x3b253c, this['_skin'] && !_0x20385f['Loader']['getRes'](this['_skin']) ? _0x20385f['ILaya']['loader']['load'](this['_skin'], _0x20385f['Handler']['create'](this, this['_skinLoade' + 'd']), null, _0x20385f['Loader']['IMAGE'], 0x1) : this['_skinLoade' + 'd']());
        }
        ['_skinLoade' + 'd']() {
            this['_setLabelC' + 'hanged'](), this['event'](_0x20385f['Event']['LOADED']);
        }
        get ['labels']() {
            return this['_labels'];
        }
        set ['labels'](_0x538bce) {
            if (this['_labels'] != _0x538bce) {
                if (this['_labels'] = _0x538bce, this['removeChil' + 'dren'](), this['_setLabelC' + 'hanged'](), this['_labels'])
                    for (var _0x301c44 = this['_labels']['split'](','), _0x44a2de = 0x0, _0x434a1a = _0x301c44['length']; _0x44a2de < _0x434a1a; _0x44a2de++) {
                        var _0x5ee1c9 = this['createItem'](this['_skin'], _0x301c44[_0x44a2de]);
                        _0x5ee1c9['name'] = 'item' + _0x44a2de, this['addChild'](_0x5ee1c9);
                    }
                this['initItems']();
            }
        }
        ['createItem'](_0x32900f, _0x1c115a) {
            return null;
        }
        get ['labelColor' + 's']() {
            return this['_labelColo' + 'rs'];
        }
        set ['labelColor' + 's'](_0x59b969) {
            this['_labelColo' + 'rs'] != _0x59b969 && (this['_labelColo' + 'rs'] = _0x59b969, this['_setLabelC' + 'hanged']());
        }
        get ['labelStrok' + 'e']() {
            return this['_labelStro' + 'ke'];
        }
        set ['labelStrok' + 'e'](_0x56e297) {
            this['_labelStro' + 'ke'] != _0x56e297 && (this['_labelStro' + 'ke'] = _0x56e297, this['_setLabelC' + 'hanged']());
        }
        get ['labelStrok' + 'eColor']() {
            return this['_labelStro' + 'keColor'];
        }
        set ['labelStrok' + 'eColor'](_0x1655bd) {
            this['_labelStro' + 'keColor'] != _0x1655bd && (this['_labelStro' + 'keColor'] = _0x1655bd, this['_setLabelC' + 'hanged']());
        }
        get ['strokeColo' + 'rs']() {
            return this['_strokeCol' + 'ors'];
        }
        set ['strokeColo' + 'rs'](_0x2fa7d5) {
            this['_strokeCol' + 'ors'] != _0x2fa7d5 && (this['_strokeCol' + 'ors'] = _0x2fa7d5, this['_setLabelC' + 'hanged']());
        }
        get ['labelSize']() {
            return this['_labelSize'];
        }
        set ['labelSize'](_0x1faa24) {
            this['_labelSize'] != _0x1faa24 && (this['_labelSize'] = _0x1faa24, this['_setLabelC' + 'hanged']());
        }
        get ['stateNum']() {
            return this['_stateNum'];
        }
        set ['stateNum'](_0x409532) {
            this['_stateNum'] != _0x409532 && (this['_stateNum'] = _0x409532, this['_setLabelC' + 'hanged']());
        }
        get ['labelBold']() {
            return this['_labelBold'];
        }
        set ['labelBold'](_0x26c91c) {
            this['_labelBold'] != _0x26c91c && (this['_labelBold'] = _0x26c91c, this['_setLabelC' + 'hanged']());
        }
        get ['labelFont']() {
            return this['_labelFont'];
        }
        set ['labelFont'](_0x92c01d) {
            this['_labelFont'] != _0x92c01d && (this['_labelFont'] = _0x92c01d, this['_setLabelC' + 'hanged']());
        }
        get ['labelPaddi' + 'ng']() {
            return this['_labelPadd' + 'ing'];
        }
        set ['labelPaddi' + 'ng'](_0x1a788c) {
            this['_labelPadd' + 'ing'] != _0x1a788c && (this['_labelPadd' + 'ing'] = _0x1a788c, this['_setLabelC' + 'hanged']());
        }
        get ['direction']() {
            return this['_direction'];
        }
        set ['direction'](_0x36d22b) {
            this['_direction'] = _0x36d22b, this['_setLabelC' + 'hanged']();
        }
        get ['space']() {
            return this['_space'];
        }
        set ['space'](_0x557eb3) {
            this['_space'] = _0x557eb3, this['_setLabelC' + 'hanged']();
        }
        ['changeLabe' + 'ls']() {
            if (this['_labelChan' + 'ged'] = !0x1, this['_items'])
                for (var _0x4e831a = 0x0, _0x39ea90 = 0x0, _0x1d16b8 = this['_items']['length']; _0x39ea90 < _0x1d16b8; _0x39ea90++) {
                    var _0x20b1e9 = this['_items'][_0x39ea90];
                    this['_skin'] && (_0x20b1e9['skin'] = this['_skin']), this['_labelColo' + 'rs'] && (_0x20b1e9['labelColor' + 's'] = this['_labelColo' + 'rs']), this['_labelSize'] && (_0x20b1e9['labelSize'] = this['_labelSize']), this['_labelStro' + 'ke'] && (_0x20b1e9['labelStrok' + 'e'] = this['_labelStro' + 'ke']), this['_labelStro' + 'keColor'] && (_0x20b1e9['labelStrok' + 'eColor'] = this['_labelStro' + 'keColor']), this['_strokeCol' + 'ors'] && (_0x20b1e9['strokeColo' + 'rs'] = this['_strokeCol' + 'ors']), this['_labelBold'] && (_0x20b1e9['labelBold'] = this['_labelBold']), this['_labelPadd' + 'ing'] && (_0x20b1e9['labelPaddi' + 'ng'] = this['_labelPadd' + 'ing']), this['_labelAlig' + 'n'] && (_0x20b1e9['labelAlign'] = this['_labelAlig' + 'n']), this['_stateNum'] && (_0x20b1e9['stateNum'] = this['_stateNum']), this['_labelFont'] && (_0x20b1e9['labelFont'] = this['_labelFont']), 'horizontal' === this['_direction'] ? (_0x20b1e9['y'] = 0x0, _0x20b1e9['x'] = _0x4e831a, _0x4e831a += _0x20b1e9['width'] + this['_space']) : (_0x20b1e9['x'] = 0x0, _0x20b1e9['y'] = _0x4e831a, _0x4e831a += _0x20b1e9['height'] + this['_space']);
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
        set ['selection'](_0x7e83a5) {
            this['selectedIn' + 'dex'] = this['_items']['indexOf'](_0x7e83a5);
        }
        set ['dataSource'](_0x13a297) {
            this['_dataSourc' + 'e'] = _0x13a297, 'number' == typeof _0x13a297 || 'string' == typeof _0x13a297 ? this['selectedIn' + 'dex'] = parseInt(_0x13a297) : _0x13a297 instanceof Array ? this['labels'] = _0x13a297['join'](',') : super['dataSource'] = _0x13a297;
        }
        get ['dataSource']() {
            return super['dataSource'];
        }
        ['_setLabelC' + 'hanged']() {
            this['_labelChan' + 'ged'] || (this['_labelChan' + 'ged'] = !0x0, this['callLater'](this['changeLabe' + 'ls']));
        }
    }
    _0x20385f['ILaya']['regClass'](_0x3c7016), _0x20385f['ClassUtils']['regClass']('laya.ui.UI' + 'Group', _0x3c7016), _0x20385f['ClassUtils']['regClass']('Laya.UIGro' + 'up', _0x3c7016);
    class _0x1bf0dd extends _0x3c7016 {
        ['createItem'](_0x3b1c43, _0xad1f43) {
            return new _0x10bc54(_0x3b1c43, _0xad1f43);
        }
    }
    _0x20385f['ILaya']['regClass'](_0x1bf0dd), _0x20385f['ClassUtils']['regClass']('laya.ui.Ra' + 'dioGroup', _0x1bf0dd), _0x20385f['ClassUtils']['regClass']('Laya.Radio' + 'Group', _0x1bf0dd);
    class _0x4cd65e extends _0x3c7016 {
        ['createItem'](_0x1d45da, _0x288af1) {
            return new _0x5dea9c(_0x1d45da, _0x288af1);
        }
    }
    _0x20385f['ILaya']['regClass'](_0x4cd65e), _0x20385f['ClassUtils']['regClass']('laya.ui.Ta' + 'b', _0x4cd65e), _0x20385f['ClassUtils']['regClass']('Laya.Tab', _0x4cd65e);
    class _0xcbf27f extends _0x1c310b {
        constructor() {
            super(...arguments), this['_setIndexH' + 'andler'] = _0x20385f['Handler']['create'](this, this['setIndex'], null, !0x1);
        }
        ['setItems'](_0x2396ea) {
            this['removeChil' + 'dren']();
            for (var _0x302c3f = 0x0, _0x434e3d = 0x0, _0xd8d64c = _0x2396ea['length']; _0x434e3d < _0xd8d64c; _0x434e3d++) {
                var _0x7e80c4 = _0x2396ea[_0x434e3d];
                _0x7e80c4 && (_0x7e80c4['name'] = 'item' + _0x302c3f, this['addChild'](_0x7e80c4), _0x302c3f++);
            }
            this['initItems']();
        }
        ['addItem'](_0x37a491) {
            _0x37a491['name'] = 'item' + this['_items']['length'], this['addChild'](_0x37a491), this['initItems']();
        }
        ['_afterInit' + 'ed']() {
            this['initItems']();
        }
        ['initItems']() {
            this['_items'] = [];
            for (var _0x3d5fce = 0x0; _0x3d5fce < 0x2710; _0x3d5fce++) {
                var _0x202ade = this['getChildBy' + 'Name']('item' + _0x3d5fce);
                if (null == _0x202ade)
                    break;
                this['_items']['push'](_0x202ade), _0x202ade['visible'] = _0x3d5fce == this['_selectedI' + 'ndex'];
            }
        }
        get ['selectedIn' + 'dex']() {
            return this['_selectedI' + 'ndex'];
        }
        set ['selectedIn' + 'dex'](_0x7e900a) {
            this['_selectedI' + 'ndex'] != _0x7e900a && (this['setSelect'](this['_selectedI' + 'ndex'], !0x1), this['_selectedI' + 'ndex'] = _0x7e900a, this['setSelect'](this['_selectedI' + 'ndex'], !0x0));
        }
        ['setSelect'](_0x3673c1, _0x5efbff) {
            this['_items'] && _0x3673c1 > -0x1 && _0x3673c1 < this['_items']['length'] && (this['_items'][_0x3673c1]['visible'] = _0x5efbff);
        }
        get ['selection']() {
            return this['_selectedI' + 'ndex'] > -0x1 && this['_selectedI' + 'ndex'] < this['_items']['length'] ? this['_items'][this['_selectedI' + 'ndex']] : null;
        }
        set ['selection'](_0x22c03b) {
            this['selectedIn' + 'dex'] = this['_items']['indexOf'](_0x22c03b);
        }
        get ['setIndexHa' + 'ndler']() {
            return this['_setIndexH' + 'andler'];
        }
        set ['setIndexHa' + 'ndler'](_0x586781) {
            this['_setIndexH' + 'andler'] = _0x586781;
        }
        ['setIndex'](_0x14ed01) {
            this['selectedIn' + 'dex'] = _0x14ed01;
        }
        get ['items']() {
            return this['_items'];
        }
        set ['dataSource'](_0x1a64d0) {
            if (this['_dataSourc' + 'e'] = _0x1a64d0, 'number' == typeof _0x1a64d0 || 'string' == typeof _0x1a64d0)
                this['selectedIn' + 'dex'] = parseInt(_0x1a64d0);
            else {
                for (var _0x44ee4a in this['_dataSourc' + 'e'])
                    _0x44ee4a in this && (this[_0x44ee4a] = this['_dataSourc' + 'e'][_0x44ee4a]);
            }
        }
        get ['dataSource']() {
            return super['dataSource'];
        }
    }
    _0x20385f['ILaya']['regClass'](_0xcbf27f), _0x20385f['ClassUtils']['regClass']('laya.ui.Vi' + 'ewStack', _0xcbf27f), _0x20385f['ClassUtils']['regClass']('Laya.ViewS' + 'tack', _0xcbf27f);
    class _0x24bf59 extends _0x3aa97b {
        constructor(_0x23408b = '') {
            super(), this['text'] = _0x23408b, this['skin'] = this['skin'];
        }
        ['preinitial' + 'ize']() {
            this['mouseEnabl' + 'ed'] = !0x0;
        }
        ['destroy'](_0x2cd0e7 = !0x0) {
            super['destroy'](_0x2cd0e7), this['_bg'] && this['_bg']['destroy'](), this['_bg'] = null;
        }
        ['createChil' + 'dren']() {
            this['addChild'](this['_tf'] = new _0x20385f['Input']()), this['_tf']['padding'] = _0x44287a['inputLabel' + 'Padding'], this['_tf']['on'](_0x20385f['Event']['INPUT'], this, this['_onInput']), this['_tf']['on'](_0x20385f['Event']['ENTER'], this, this['_onEnter']), this['_tf']['on'](_0x20385f['Event']['BLUR'], this, this['_onBlur']), this['_tf']['on'](_0x20385f['Event']['FOCUS'], this, this['_onFocus']);
        }
        ['_onFocus']() {
            this['event'](_0x20385f['Event']['FOCUS'], this);
        }
        ['_onBlur']() {
            this['event'](_0x20385f['Event']['BLUR'], this);
        }
        ['_onInput']() {
            this['event'](_0x20385f['Event']['INPUT'], this);
        }
        ['_onEnter']() {
            this['event'](_0x20385f['Event']['ENTER'], this);
        }
        ['initialize']() {
            this['width'] = 0x80, this['height'] = 0x16;
        }
        get ['bg']() {
            return this['_bg'];
        }
        set ['bg'](_0x339f06) {
            this['graphics'] = this['_bg'] = _0x339f06;
        }
        get ['skin']() {
            return this['_skin'];
        }
        set ['skin'](_0x51b057) {
            this['_skin'] != _0x51b057 && (this['_skin'] = _0x51b057, this['_skin'] && !_0x20385f['Loader']['getRes'](this['_skin']) ? _0x20385f['ILaya']['loader']['load'](this['_skin'], _0x20385f['Handler']['create'](this, this['_skinLoade' + 'd']), null, _0x20385f['Loader']['IMAGE'], 0x1) : this['_skinLoade' + 'd']());
        }
        ['_skinLoade' + 'd']() {
            this['_bg'] || (this['graphics'] = this['_bg'] = new _0x2f278e()), this['_bg']['source'] = _0x20385f['Loader']['getRes'](this['_skin']), this['_width'] && (this['_bg']['width'] = this['_width']), this['_height'] && (this['_bg']['height'] = this['_height']), this['_sizeChang' + 'ed'](), this['event'](_0x20385f['Event']['LOADED']);
        }
        get ['sizeGrid']() {
            return this['_bg'] && this['_bg']['sizeGrid'] ? this['_bg']['sizeGrid']['join'](',') : null;
        }
        set ['sizeGrid'](_0x44e100) {
            this['_bg'] || (this['graphics'] = this['_bg'] = new _0x2f278e()), this['_bg']['sizeGrid'] = _0x234441['fillArray'](_0x44287a['defaultSiz' + 'eGrid'], _0x44e100, Number);
        }
        set ['text'](_0x51b986) {
            this['_tf']['text'] != _0x51b986 && (_0x51b986 += '', this['_tf']['text'] = _0x51b986, this['event'](_0x20385f['Event']['CHANGE']));
        }
        get ['text']() {
            return super['text'];
        }
        set ['width'](_0x630741) {
            super['width'] = _0x630741, this['_bg'] && (this['_bg']['width'] = _0x630741);
        }
        get ['width']() {
            return super['width'];
        }
        set ['height'](_0x555d57) {
            super['height'] = _0x555d57, this['_bg'] && (this['_bg']['height'] = _0x555d57);
        }
        get ['height']() {
            return super['height'];
        }
        get ['multiline']() {
            return this['_tf']['multiline'];
        }
        set ['multiline'](_0x1e3ea1) {
            this['_tf']['multiline'] = _0x1e3ea1;
        }
        set ['editable'](_0x290f8d) {
            this['_tf']['editable'] = _0x290f8d;
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
        set ['restrict'](_0x3f8a1d) {
            this['_tf']['restrict'] = _0x3f8a1d;
        }
        get ['prompt']() {
            return this['_tf']['prompt'];
        }
        set ['prompt'](_0xfabbf0) {
            this['_tf']['prompt'] = _0xfabbf0;
        }
        get ['promptColo' + 'r']() {
            return this['_tf']['promptColo' + 'r'];
        }
        set ['promptColo' + 'r'](_0x4382e3) {
            this['_tf']['promptColo' + 'r'] = _0x4382e3;
        }
        get ['maxChars']() {
            return this['_tf']['maxChars'];
        }
        set ['maxChars'](_0x1ce3ce) {
            this['_tf']['maxChars'] = _0x1ce3ce;
        }
        get ['focus']() {
            return this['_tf']['focus'];
        }
        set ['focus'](_0x476378) {
            this['_tf']['focus'] = _0x476378;
        }
        get ['type']() {
            return this['_tf']['type'];
        }
        set ['type'](_0x3ebee8) {
            this['_tf']['type'] = _0x3ebee8;
        }
        ['setSelecti' + 'on'](_0x461abb, _0x4b5da9) {
            this['_tf']['setSelecti' + 'on'](_0x461abb, _0x4b5da9);
        }
    }
    _0x20385f['ILaya']['regClass'](_0x24bf59), _0x20385f['ClassUtils']['regClass']('laya.ui.Te' + 'xtInput', _0x24bf59), _0x20385f['ClassUtils']['regClass']('Laya.TextI' + 'nput', _0x24bf59);
    class _0x25226c extends _0x24bf59 {
        constructor(_0x12ee2e = '') {
            super(_0x12ee2e), this['on'](_0x20385f['Event']['CHANGE'], this, this['_onTextCha' + 'nge']);
        }
        ['_onTextCha' + 'nge']() {
            this['callLater'](this['changeScro' + 'll']);
        }
        ['destroy'](_0xe076ed = !0x0) {
            this['_vScrollBa' + 'r'] && this['_vScrollBa' + 'r']['destroy'](), this['_hScrollBa' + 'r'] && this['_hScrollBa' + 'r']['destroy'](), this['_vScrollBa' + 'r'] = null, this['_hScrollBa' + 'r'] = null, super['destroy'](_0xe076ed);
        }
        ['initialize']() {
            this['width'] = 0xb4, this['height'] = 0x96, this['_tf']['wordWrap'] = !0x0, this['multiline'] = !0x0;
        }
        set ['width'](_0x4fc3b1) {
            super['width'] = _0x4fc3b1, this['callLater'](this['changeScro' + 'll']);
        }
        get ['width']() {
            return super['width'];
        }
        set ['height'](_0x205867) {
            super['height'] = _0x205867, this['callLater'](this['changeScro' + 'll']);
        }
        get ['height']() {
            return super['height'];
        }
        get ['vScrollBar' + 'Skin']() {
            return this['_vScrollBa' + 'r'] ? this['_vScrollBa' + 'r']['skin'] : null;
        }
        set ['vScrollBar' + 'Skin'](_0x48bb5a) {
            null == this['_vScrollBa' + 'r'] && (this['addChild'](this['_vScrollBa' + 'r'] = new _0x3f571d()), this['_vScrollBa' + 'r']['on'](_0x20385f['Event']['CHANGE'], this, this['onVBarChan' + 'ged']), this['_vScrollBa' + 'r']['target'] = this['_tf'], this['callLater'](this['changeScro' + 'll'])), this['_vScrollBa' + 'r']['skin'] = _0x48bb5a;
        }
        get ['hScrollBar' + 'Skin']() {
            return this['_hScrollBa' + 'r'] ? this['_hScrollBa' + 'r']['skin'] : null;
        }
        set ['hScrollBar' + 'Skin'](_0x383df7) {
            null == this['_hScrollBa' + 'r'] && (this['addChild'](this['_hScrollBa' + 'r'] = new _0x16863c()), this['_hScrollBa' + 'r']['on'](_0x20385f['Event']['CHANGE'], this, this['onHBarChan' + 'ged']), this['_hScrollBa' + 'r']['mouseWheel' + 'Enable'] = !0x1, this['_hScrollBa' + 'r']['target'] = this['_tf'], this['callLater'](this['changeScro' + 'll'])), this['_hScrollBa' + 'r']['skin'] = _0x383df7;
        }
        ['onVBarChan' + 'ged'](_0x397a75) {
            this['_tf']['scrollY'] != this['_vScrollBa' + 'r']['value'] && (this['_tf']['scrollY'] = this['_vScrollBa' + 'r']['value']);
        }
        ['onHBarChan' + 'ged'](_0x37b079) {
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
            var _0x44d87c = this['_vScrollBa' + 'r'] && this['_tf']['maxScrollY'] > 0x0, _0x238a7e = this['_hScrollBa' + 'r'] && this['_tf']['maxScrollX'] > 0x0, _0x59e44b = _0x44d87c ? this['_width'] - this['_vScrollBa' + 'r']['width'] : this['_width'], _0x55103f = _0x238a7e ? this['_height'] - this['_hScrollBa' + 'r']['height'] : this['_height'], _0x24fe2c = this['_tf']['padding'] || _0x44287a['labelPaddi' + 'ng'];
            this['_tf']['width'] = _0x59e44b, this['_tf']['height'] = _0x55103f, this['_vScrollBa' + 'r'] && (this['_vScrollBa' + 'r']['x'] = this['_width'] - this['_vScrollBa' + 'r']['width'] - _0x24fe2c[0x2], this['_vScrollBa' + 'r']['y'] = _0x24fe2c[0x1], this['_vScrollBa' + 'r']['height'] = this['_height'] - (_0x238a7e ? this['_hScrollBa' + 'r']['height'] : 0x0) - _0x24fe2c[0x1] - _0x24fe2c[0x3], this['_vScrollBa' + 'r']['scrollSize'] = 0x1, this['_vScrollBa' + 'r']['thumbPerce' + 'nt'] = _0x55103f / Math['max'](this['_tf']['textHeight'], _0x55103f), this['_vScrollBa' + 'r']['setScroll'](0x1, this['_tf']['maxScrollY'], this['_tf']['scrollY']), this['_vScrollBa' + 'r']['visible'] = _0x44d87c), this['_hScrollBa' + 'r'] && (this['_hScrollBa' + 'r']['x'] = _0x24fe2c[0x0], this['_hScrollBa' + 'r']['y'] = this['_height'] - this['_hScrollBa' + 'r']['height'] - _0x24fe2c[0x3], this['_hScrollBa' + 'r']['width'] = this['_width'] - (_0x44d87c ? this['_vScrollBa' + 'r']['width'] : 0x0) - _0x24fe2c[0x0] - _0x24fe2c[0x2], this['_hScrollBa' + 'r']['scrollSize'] = Math['max'](0.033 * _0x59e44b, 0x1), this['_hScrollBa' + 'r']['thumbPerce' + 'nt'] = _0x59e44b / Math['max'](this['_tf']['textWidth'], _0x59e44b), this['_hScrollBa' + 'r']['setScroll'](0x0, this['maxScrollX'], this['scrollX']), this['_hScrollBa' + 'r']['visible'] = _0x238a7e);
        }
        ['scrollTo'](_0x4a56ad) {
            this['commitMeas' + 'ure'](), this['_tf']['scrollY'] = _0x4a56ad;
        }
    }
    _0x20385f['ILaya']['regClass'](_0x25226c), _0x20385f['ClassUtils']['regClass']('laya.ui.Te' + 'xtArea', _0x25226c), _0x20385f['ClassUtils']['regClass']('Laya.TextA' + 'rea', _0x25226c);
    class _0x2285df extends _0x1c310b {
        constructor() {
            super(...arguments), this['_oldW'] = 0x0, this['_oldH'] = 0x0;
        }
        ['onEnable']() {
            _0x20385f['ILaya']['stage']['on']('resize', this, this['onResize']), this['onResize']();
        }
        ['onDisable']() {
            _0x20385f['ILaya']['stage']['off']('resize', this, this['onResize']);
        }
        ['onResize']() {
            let _0x1f9e50 = _0x20385f['ILaya']['stage'];
            if (this['width'] > 0x0 && this['height'] > 0x0) {
                var _0x3916b0 = Math['min'](_0x1f9e50['width'] / this['_oldW'], _0x1f9e50['height'] / this['_oldH']);
                super['width'] = _0x1f9e50['width'], super['height'] = _0x1f9e50['height'], this['scale'](_0x3916b0, _0x3916b0);
            }
        }
        set ['width'](_0x270f32) {
            super['width'] = _0x270f32, this['_oldW'] = _0x270f32;
        }
        get ['width']() {
            return super['width'];
        }
        set ['height'](_0xe282a) {
            super['height'] = _0xe282a, this['_oldH'] = _0xe282a;
        }
        get ['height']() {
            return super['height'];
        }
    }
    _0x20385f['ILaya']['regClass'](_0x2285df), _0x20385f['ClassUtils']['regClass']('laya.ui.Sc' + 'aleBox', _0x2285df), _0x20385f['ClassUtils']['regClass']('Laya.Scale' + 'Box', _0x2285df);
    class _0x4c38cc extends _0x26d3fd {
        constructor(_0x34a30b = null) {
            super(_0x34a30b), this['isVertical'] = !0x1;
        }
    }
    _0x20385f['ILaya']['regClass'](_0x4c38cc), _0x20385f['ClassUtils']['regClass']('laya.ui.HS' + 'lider', _0x4c38cc), _0x20385f['ClassUtils']['regClass']('Laya.HSlid' + 'er', _0x4c38cc);
    class _0x7e1a44 extends _0x1c310b {
        constructor() {
            super(), this['_usedCache'] = null, this['_elasticEn' + 'abled'] = !0x1, this['width'] = this['height'] = 0x64;
        }
        ['destroy'](_0xcfbac8 = !0x0) {
            super['destroy'](_0xcfbac8), this['_content'] && this['_content']['destroy'](_0xcfbac8), this['_vScrollBa' + 'r'] && this['_vScrollBa' + 'r']['destroy'](_0xcfbac8), this['_hScrollBa' + 'r'] && this['_hScrollBa' + 'r']['destroy'](_0xcfbac8), this['_vScrollBa' + 'r'] = null, this['_hScrollBa' + 'r'] = null, this['_content'] = null;
        }
        ['destroyChi' + 'ldren']() {
            this['_content']['destroyChi' + 'ldren']();
        }
        ['createChil' + 'dren']() {
            super['addChild'](this['_content'] = new _0x1c310b());
        }
        ['addChild'](_0x34b466) {
            return _0x34b466['on'](_0x20385f['Event']['RESIZE'], this, this['onResize']), this['_setScroll' + 'Changed'](), this['_content']['addChild'](_0x34b466);
        }
        ['onResize']() {
            this['_setScroll' + 'Changed']();
        }
        ['addChildAt'](_0x6b7b1e, _0x7f018b) {
            return _0x6b7b1e['on'](_0x20385f['Event']['RESIZE'], this, this['onResize']), this['_setScroll' + 'Changed'](), this['_content']['addChildAt'](_0x6b7b1e, _0x7f018b);
        }
        ['removeChil' + 'd'](_0x45402a) {
            return _0x45402a['off'](_0x20385f['Event']['RESIZE'], this, this['onResize']), this['_setScroll' + 'Changed'](), this['_content']['removeChil' + 'd'](_0x45402a);
        }
        ['removeChil' + 'dAt'](_0x38f6a9) {
            return this['getChildAt'](_0x38f6a9)['off'](_0x20385f['Event']['RESIZE'], this, this['onResize']), this['_setScroll' + 'Changed'](), this['_content']['removeChil' + 'dAt'](_0x38f6a9);
        }
        ['removeChil' + 'dren'](_0x5d8c64 = 0x0, _0x7a9576 = 0x7fffffff) {
            return this['_content']['removeChil' + 'dren'](_0x5d8c64, _0x7a9576), this['_setScroll' + 'Changed'](), this;
        }
        ['getChildAt'](_0xcfe019) {
            return this['_content']['getChildAt'](_0xcfe019);
        }
        ['getChildBy' + 'Name'](_0x5d7f1f) {
            return this['_content']['getChildBy' + 'Name'](_0x5d7f1f);
        }
        ['getChildIn' + 'dex'](_0xcb5349) {
            return this['_content']['getChildIn' + 'dex'](_0xcb5349);
        }
        get ['numChildre' + 'n']() {
            return this['_content']['numChildre' + 'n'];
        }
        ['changeScro' + 'll']() {
            this['_scrollCha' + 'nged'] = !0x1;
            var _0xe37fe5 = this['contentWid' + 'th'] || 0x1, _0x4a51b1 = this['contentHei' + 'ght'] || 0x1, _0x21c872 = this['_vScrollBa' + 'r'], _0x572138 = this['_hScrollBa' + 'r'], _0x3fcc39 = _0x21c872 && _0x4a51b1 > this['_height'], _0x14c772 = _0x572138 && _0xe37fe5 > this['_width'], _0x5f393f = _0x3fcc39 ? this['_width'] - _0x21c872['width'] : this['_width'], _0x3e5387 = _0x14c772 ? this['_height'] - _0x572138['height'] : this['_height'];
            _0x21c872 && (_0x21c872['x'] = this['_width'] - _0x21c872['width'], _0x21c872['y'] = 0x0, _0x21c872['height'] = this['_height'] - (_0x14c772 ? _0x572138['height'] : 0x0), _0x21c872['scrollSize'] = Math['max'](0.033 * this['_height'], 0x1), _0x21c872['thumbPerce' + 'nt'] = _0x3e5387 / _0x4a51b1, _0x21c872['setScroll'](0x0, _0x4a51b1 - _0x3e5387, _0x21c872['value'])), _0x572138 && (_0x572138['x'] = 0x0, _0x572138['y'] = this['_height'] - _0x572138['height'], _0x572138['width'] = this['_width'] - (_0x3fcc39 ? _0x21c872['width'] : 0x0), _0x572138['scrollSize'] = Math['max'](0.033 * this['_width'], 0x1), _0x572138['thumbPerce' + 'nt'] = _0x5f393f / _0xe37fe5, _0x572138['setScroll'](0x0, _0xe37fe5 - _0x5f393f, _0x572138['value']));
        }
        ['_sizeChang' + 'ed']() {
            super['_sizeChang' + 'ed'](), this['setContent' + 'Size'](this['_width'], this['_height']);
        }
        get ['contentWid' + 'th']() {
            for (var _0x44abe0 = 0x0, _0x299e22 = this['_content']['numChildre' + 'n'] - 0x1; _0x299e22 > -0x1; _0x299e22--) {
                var _0x35e3d1 = this['_content']['getChildAt'](_0x299e22);
                _0x44abe0 = Math['max'](_0x35e3d1['_x'] + _0x35e3d1['width'] * _0x35e3d1['scaleX'] - _0x35e3d1['pivotX'], _0x44abe0);
            }
            return _0x44abe0;
        }
        get ['contentHei' + 'ght']() {
            for (var _0x4ec299 = 0x0, _0x4d06c7 = this['_content']['numChildre' + 'n'] - 0x1; _0x4d06c7 > -0x1; _0x4d06c7--) {
                var _0x2c05a2 = this['_content']['getChildAt'](_0x4d06c7);
                _0x4ec299 = Math['max'](_0x2c05a2['_y'] + _0x2c05a2['height'] * _0x2c05a2['scaleY'] - _0x2c05a2['pivotY'], _0x4ec299);
            }
            return _0x4ec299;
        }
        ['setContent' + 'Size'](_0x1c9eb0, _0x4038b9) {
            var _0x238f18 = this['_content'];
            _0x238f18['width'] = _0x1c9eb0, _0x238f18['height'] = _0x4038b9, _0x238f18['_style']['scrollRect'] || (_0x238f18['scrollRect'] = _0x20385f['Rectangle']['create']()), _0x238f18['_style']['scrollRect']['setTo'](0x0, 0x0, _0x1c9eb0, _0x4038b9), _0x238f18['scrollRect'] = _0x238f18['scrollRect'];
        }
        set ['width'](_0x3186cb) {
            super['width'] = _0x3186cb, this['_setScroll' + 'Changed']();
        }
        get ['width']() {
            return super['width'];
        }
        set ['height'](_0x5167ec) {
            super['height'] = _0x5167ec, this['_setScroll' + 'Changed']();
        }
        get ['height']() {
            return super['height'];
        }
        get ['vScrollBar' + 'Skin']() {
            return this['_vScrollBa' + 'r'] ? this['_vScrollBa' + 'r']['skin'] : null;
        }
        set ['vScrollBar' + 'Skin'](_0x3261db) {
            null == this['_vScrollBa' + 'r'] && (super['addChild'](this['_vScrollBa' + 'r'] = new _0x3f571d()), this['_vScrollBa' + 'r']['on'](_0x20385f['Event']['CHANGE'], this, this['onScrollBa' + 'rChange'], [this['_vScrollBa' + 'r']]), this['_vScrollBa' + 'r']['target'] = this['_content'], this['_vScrollBa' + 'r']['elasticDis' + 'tance'] = this['_elasticEn' + 'abled'] ? 0xc8 : 0x0, this['_setScroll' + 'Changed']()), this['_vScrollBa' + 'r']['skin'] = _0x3261db;
        }
        get ['hScrollBar' + 'Skin']() {
            return this['_hScrollBa' + 'r'] ? this['_hScrollBa' + 'r']['skin'] : null;
        }
        set ['hScrollBar' + 'Skin'](_0x51577b) {
            null == this['_hScrollBa' + 'r'] && (super['addChild'](this['_hScrollBa' + 'r'] = new _0x16863c()), this['_hScrollBa' + 'r']['on'](_0x20385f['Event']['CHANGE'], this, this['onScrollBa' + 'rChange'], [this['_hScrollBa' + 'r']]), this['_hScrollBa' + 'r']['target'] = this['_content'], this['_hScrollBa' + 'r']['elasticDis' + 'tance'] = this['_elasticEn' + 'abled'] ? 0xc8 : 0x0, this['_setScroll' + 'Changed']()), this['_hScrollBa' + 'r']['skin'] = _0x51577b;
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
        ['onScrollBa' + 'rChange'](_0x2ed8f1) {
            var _0x40cc8d = this['_content']['_style']['scrollRect'];
            if (_0x40cc8d) {
                var _0x376841 = Math['round'](_0x2ed8f1['value']);
                _0x2ed8f1['isVertical'] ? _0x40cc8d['y'] = _0x376841 : _0x40cc8d['x'] = _0x376841, this['_content']['scrollRect'] = _0x40cc8d;
            }
        }
        ['scrollTo'](_0x3cbe11 = 0x0, _0x26d976 = 0x0) {
            this['vScrollBar'] && (this['vScrollBar']['value'] = _0x26d976), this['hScrollBar'] && (this['hScrollBar']['value'] = _0x3cbe11);
        }
        ['refresh']() {
            this['changeScro' + 'll']();
        }
        set ['cacheAs'](_0x8db0d5) {
            super['cacheAs'] = _0x8db0d5, this['_usedCache'] = null, 'none' !== _0x8db0d5 ? (this['_hScrollBa' + 'r'] && this['_hScrollBa' + 'r']['on'](_0x20385f['Event']['START'], this, this['onScrollSt' + 'art']), this['_vScrollBa' + 'r'] && this['_vScrollBa' + 'r']['on'](_0x20385f['Event']['START'], this, this['onScrollSt' + 'art'])) : (this['_hScrollBa' + 'r'] && this['_hScrollBa' + 'r']['off'](_0x20385f['Event']['START'], this, this['onScrollSt' + 'art']), this['_vScrollBa' + 'r'] && this['_vScrollBa' + 'r']['off'](_0x20385f['Event']['START'], this, this['onScrollSt' + 'art']));
        }
        get ['cacheAs']() {
            return super['cacheAs'];
        }
        get ['elasticEna' + 'bled']() {
            return this['_elasticEn' + 'abled'];
        }
        set ['elasticEna' + 'bled'](_0x1f15e9) {
            this['_elasticEn' + 'abled'] = _0x1f15e9, this['_vScrollBa' + 'r'] && (this['_vScrollBa' + 'r']['elasticDis' + 'tance'] = _0x1f15e9 ? 0xc8 : 0x0), this['_hScrollBa' + 'r'] && (this['_hScrollBa' + 'r']['elasticDis' + 'tance'] = _0x1f15e9 ? 0xc8 : 0x0);
        }
        ['onScrollSt' + 'art']() {
            this['_usedCache'] || (this['_usedCache'] = super['cacheAs']), super['cacheAs'] = 'none', this['_hScrollBa' + 'r'] && this['_hScrollBa' + 'r']['once'](_0x20385f['Event']['END'], this, this['onScrollEn' + 'd']), this['_vScrollBa' + 'r'] && this['_vScrollBa' + 'r']['once'](_0x20385f['Event']['END'], this, this['onScrollEn' + 'd']);
        }
        ['onScrollEn' + 'd']() {
            super['cacheAs'] = this['_usedCache'];
        }
        ['_setScroll' + 'Changed']() {
            this['_scrollCha' + 'nged'] || (this['_scrollCha' + 'nged'] = !0x0, this['callLater'](this['changeScro' + 'll']));
        }
    }
    _0x20385f['ILaya']['regClass'](_0x7e1a44), _0x20385f['ClassUtils']['regClass']('laya.ui.Pa' + 'nel', _0x7e1a44), _0x20385f['ClassUtils']['regClass']('Laya.Panel', _0x7e1a44);
    class _0x2de130 extends _0x26d3fd {
    }
    _0x20385f['ILaya']['regClass'](_0x2de130), _0x20385f['ClassUtils']['regClass']('laya.ui.VS' + 'lider', _0x2de130), _0x20385f['ClassUtils']['regClass']('Laya.VSlid' + 'er', _0x2de130);
    class _0x29a651 extends _0x1c310b {
        constructor() {
            super(), this['_spaceLeft'] = 0xa, this['_spaceBott' + 'om'] = 0x0, this['_keepStatu' + 's'] = !0x0, this['width'] = this['height'] = 0xc8;
        }
        ['destroy'](_0x1b075a = !0x0) {
            super['destroy'](_0x1b075a), this['_list'] && this['_list']['destroy'](_0x1b075a), this['_list'] = null, this['_source'] = null, this['_renderHan' + 'dler'] = null;
        }
        ['createChil' + 'dren']() {
            this['addChild'](this['_list'] = new _0x2460e1()), this['_list']['renderHand' + 'ler'] = _0x20385f['Handler']['create'](this, this['renderItem'], null, !0x1), this['_list']['repeatX'] = 0x1, this['_list']['on'](_0x20385f['Event']['CHANGE'], this, this['onListChan' + 'ge']);
        }
        ['onListChan' + 'ge'](_0x56a85d = null) {
            this['event'](_0x20385f['Event']['CHANGE']);
        }
        get ['keepStatus']() {
            return this['_keepStatu' + 's'];
        }
        set ['keepStatus'](_0x57e8d6) {
            this['_keepStatu' + 's'] = _0x57e8d6;
        }
        get ['array']() {
            return this['_list']['array'];
        }
        set ['array'](_0x2663f0) {
            this['_keepStatu' + 's'] && this['_list']['array'] && _0x2663f0 && this['parseOpenS' + 'tatus'](this['_list']['array'], _0x2663f0), this['_source'] = _0x2663f0, this['_list']['array'] = this['getArray']();
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
        set ['itemRender'](_0x34e050) {
            this['_list']['itemRender'] = _0x34e050;
        }
        get ['scrollBarS' + 'kin']() {
            return this['_list']['vScrollBar' + 'Skin'];
        }
        set ['scrollBarS' + 'kin'](_0x3149da) {
            this['_list']['vScrollBar' + 'Skin'] = _0x3149da;
        }
        get ['scrollBar']() {
            return this['_list']['scrollBar'];
        }
        get ['mouseHandl' + 'er']() {
            return this['_list']['mouseHandl' + 'er'];
        }
        set ['mouseHandl' + 'er'](_0x9a683) {
            this['_list']['mouseHandl' + 'er'] = _0x9a683;
        }
        get ['renderHand' + 'ler']() {
            return this['_renderHan' + 'dler'];
        }
        set ['renderHand' + 'ler'](_0x32a729) {
            this['_renderHan' + 'dler'] = _0x32a729;
        }
        get ['spaceLeft']() {
            return this['_spaceLeft'];
        }
        set ['spaceLeft'](_0x50dd8e) {
            this['_spaceLeft'] = _0x50dd8e;
        }
        get ['spaceBotto' + 'm']() {
            return this['_list']['spaceY'];
        }
        set ['spaceBotto' + 'm'](_0x95ca58) {
            this['_list']['spaceY'] = _0x95ca58;
        }
        get ['selectedIn' + 'dex']() {
            return this['_list']['selectedIn' + 'dex'];
        }
        set ['selectedIn' + 'dex'](_0x5ca358) {
            this['_list']['selectedIn' + 'dex'] = _0x5ca358;
        }
        get ['selectedIt' + 'em']() {
            return this['_list']['selectedIt' + 'em'];
        }
        set ['selectedIt' + 'em'](_0x3705e6) {
            this['_list']['selectedIt' + 'em'] = _0x3705e6;
        }
        set ['width'](_0x3b3eee) {
            super['width'] = _0x3b3eee, this['_list']['width'] = _0x3b3eee;
        }
        get ['width']() {
            return super['width'];
        }
        set ['height'](_0x1e3241) {
            super['height'] = _0x1e3241, this['_list']['height'] = _0x1e3241;
        }
        get ['height']() {
            return super['height'];
        }
        ['getArray']() {
            var _0x235a68 = [];
            for (let _0x4dae58 in this['_source']) {
                let _0x1fc9f1 = this['_source'][_0x4dae58];
                this['getParentO' + 'penStatus'](_0x1fc9f1) && (_0x1fc9f1['x'] = this['_spaceLeft'] * this['getDepth'](_0x1fc9f1), _0x235a68['push'](_0x1fc9f1));
            }
            return _0x235a68;
        }
        ['getDepth'](_0x283d1b, _0x3492dc = 0x0) {
            return null == _0x283d1b['nodeParent'] ? _0x3492dc : this['getDepth'](_0x283d1b['nodeParent'], _0x3492dc + 0x1);
        }
        ['getParentO' + 'penStatus'](_0x486663) {
            var _0x23dd5c = _0x486663['nodeParent'];
            return null == _0x23dd5c || !!_0x23dd5c['isOpen'] && (null == _0x23dd5c['nodeParent'] || this['getParentO' + 'penStatus'](_0x23dd5c));
        }
        ['renderItem'](_0x30f759, _0x2e2bbe) {
            var _0x2f5432 = _0x30f759['dataSource'];
            if (_0x2f5432) {
                _0x30f759['left'] = _0x2f5432['x'];
                var _0x19494b = _0x30f759['getChildBy' + 'Name']('arrow');
                _0x19494b && (_0x2f5432['hasChild'] ? (_0x19494b['visible'] = !0x0, _0x19494b['index'] = _0x2f5432['isOpen'] ? 0x1 : 0x0, _0x19494b['tag'] = _0x2e2bbe, _0x19494b['off'](_0x20385f['Event']['CLICK'], this, this['onArrowCli' + 'ck']), _0x19494b['on'](_0x20385f['Event']['CLICK'], this, this['onArrowCli' + 'ck'])) : _0x19494b['visible'] = !0x1);
                var _0x5dbbe1 = _0x30f759['getChildBy' + 'Name']('folder');
                _0x5dbbe1 && (0x2 == _0x5dbbe1['clipY'] ? _0x5dbbe1['index'] = _0x2f5432['isDirector' + 'y'] ? 0x0 : 0x1 : _0x5dbbe1['index'] = _0x2f5432['isDirector' + 'y'] ? _0x2f5432['isOpen'] ? 0x1 : 0x0 : 0x2), this['_renderHan' + 'dler'] && this['_renderHan' + 'dler']['runWith']([
                    _0x30f759,
                    _0x2e2bbe
                ]);
            }
        }
        ['onArrowCli' + 'ck'](_0x450bdd) {
            var _0x515fbf = _0x450bdd['currentTar' + 'get']['tag'];
            this['_list']['array'][_0x515fbf]['isOpen'] = !this['_list']['array'][_0x515fbf]['isOpen'], this['event'](_0x20385f['Event']['OPEN']), this['_list']['array'] = this['getArray']();
        }
        ['setItemSta' + 'te'](_0xdcd5da, _0x1c638f) {
            this['_list']['array'][_0xdcd5da] && (this['_list']['array'][_0xdcd5da]['isOpen'] = _0x1c638f, this['_list']['array'] = this['getArray']());
        }
        ['fresh']() {
            this['_list']['array'] = this['getArray'](), this['repaint']();
        }
        set ['dataSource'](_0x3138d0) {
            this['_dataSourc' + 'e'] = _0x3138d0, super['dataSource'] = _0x3138d0;
        }
        get ['dataSource']() {
            return super['dataSource'];
        }
        set ['xml'](_0x364782) {
            var _0x23fc8e = [];
            this['parseXml'](_0x364782['childNodes'][0x0], _0x23fc8e, null, !0x0), this['array'] = _0x23fc8e;
        }
        ['parseXml'](_0x2c55b9, _0x2ac350, _0x2d6050, _0x3b4983) {
            var _0x46e51f, _0x3ad261 = _0x2c55b9['childNodes'], _0x5c1736 = _0x3ad261['length'];
            if (!_0x3b4983) {
                _0x46e51f = {};
                var _0xb0590e = _0x2c55b9['attributes'];
                for (let _0x421f1b in _0xb0590e) {
                    var _0x3de27a = _0xb0590e[_0x421f1b], _0x27ac36 = _0x3de27a['nodeName'], _0x4e88ed = _0x3de27a['nodeValue'];
                    _0x46e51f[_0x27ac36] = 'true' == _0x4e88ed || 'false' != _0x4e88ed && _0x4e88ed;
                }
                _0x46e51f['nodeParent'] = _0x2d6050, _0x5c1736 > 0x0 && (_0x46e51f['isDirector' + 'y'] = !0x0), _0x46e51f['hasChild'] = _0x5c1736 > 0x0, _0x2ac350['push'](_0x46e51f);
            }
            for (var _0x51b6b1 = 0x0; _0x51b6b1 < _0x5c1736; _0x51b6b1++) {
                var _0x1126be = _0x3ad261[_0x51b6b1];
                this['parseXml'](_0x1126be, _0x2ac350, _0x46e51f, !0x1);
            }
        }
        ['parseOpenS' + 'tatus'](_0xc3d029, _0xffaae3) {
            for (var _0x18b9bf = 0x0, _0x12f6e9 = _0xffaae3['length']; _0x18b9bf < _0x12f6e9; _0x18b9bf++) {
                var _0x170e5d = _0xffaae3[_0x18b9bf];
                if (_0x170e5d['isDirector' + 'y'])
                    for (var _0x2924c4 = 0x0, _0x5194b8 = _0xc3d029['length']; _0x2924c4 < _0x5194b8; _0x2924c4++) {
                        var _0x2d7661 = _0xc3d029[_0x2924c4];
                        if (_0x2d7661['isDirector' + 'y'] && this['isSamePare' + 'nt'](_0x2d7661, _0x170e5d) && _0x170e5d['label'] == _0x2d7661['label']) {
                            _0x170e5d['isOpen'] = _0x2d7661['isOpen'];
                            break;
                        }
                    }
            }
        }
        ['isSamePare' + 'nt'](_0x2e6ff5, _0x1b6d51) {
            return null == _0x2e6ff5['nodeParent'] && null == _0x1b6d51['nodeParent'] || null != _0x2e6ff5['nodeParent'] && null != _0x1b6d51['nodeParent'] && (_0x2e6ff5['nodeParent']['label'] == _0x1b6d51['nodeParent']['label'] && this['isSamePare' + 'nt'](_0x2e6ff5['nodeParent'], _0x1b6d51['nodeParent']));
        }
        get ['selectedPa' + 'th']() {
            return this['_list']['selectedIt' + 'em'] ? this['_list']['selectedIt' + 'em']['path'] : null;
        }
        ['filter'](_0x1b41f3) {
            if (Boolean(_0x1b41f3)) {
                var _0x531641 = [];
                this['getFilterS' + 'ource'](this['_source'], _0x531641, _0x1b41f3), this['_list']['array'] = _0x531641;
            } else
                this['_list']['array'] = this['getArray']();
        }
        ['getFilterS' + 'ource'](_0x3710ec, _0xa69a59, _0x3adf22) {
            _0x3adf22 = _0x3adf22['toLocaleLo' + 'werCase']();
            for (let _0x9c1307 of _0x3710ec)
                !_0x9c1307['isDirector' + 'y'] && String(_0x9c1307['label'])['toLowerCas' + 'e']()['indexOf'](_0x3adf22) > -0x1 && (_0x9c1307['x'] = 0x0, _0xa69a59['push'](_0x9c1307)), _0x9c1307['child'] && _0x9c1307['child']['length'] > 0x0 && this['getFilterS' + 'ource'](_0x9c1307['child'], _0xa69a59, _0x3adf22);
        }
    }
    _0x20385f['ILaya']['regClass'](_0x29a651), _0x20385f['ClassUtils']['regClass']('laya.ui.Tr' + 'ee', _0x29a651), _0x20385f['ClassUtils']['regClass']('Laya.Tree', _0x29a651);
    class _0x2d2da9 extends _0x1c310b {
        constructor() {
            super(...arguments), this['_space'] = 0x0, this['_align'] = 'none', this['_itemChang' + 'ed'] = !0x1;
        }
        ['addChild'](_0x4fca66) {
            return _0x4fca66['on'](_0x20385f['Event']['RESIZE'], this, this['onResize']), this['_setItemCh' + 'anged'](), super['addChild'](_0x4fca66);
        }
        ['onResize'](_0x548fea) {
            this['_setItemCh' + 'anged']();
        }
        ['addChildAt'](_0x7fa418, _0x509987) {
            return _0x7fa418['on'](_0x20385f['Event']['RESIZE'], this, this['onResize']), this['_setItemCh' + 'anged'](), super['addChildAt'](_0x7fa418, _0x509987);
        }
        ['removeChil' + 'dAt'](_0x5433ba) {
            return this['getChildAt'](_0x5433ba)['off'](_0x20385f['Event']['RESIZE'], this, this['onResize']), this['_setItemCh' + 'anged'](), super['removeChil' + 'dAt'](_0x5433ba);
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
        set ['space'](_0x42baf4) {
            this['_space'] = _0x42baf4, this['_setItemCh' + 'anged']();
        }
        get ['align']() {
            return this['_align'];
        }
        set ['align'](_0x5aa986) {
            this['_align'] = _0x5aa986, this['_setItemCh' + 'anged']();
        }
        ['sortItem'](_0x4f9807) {
            _0x4f9807 && _0x4f9807['sort'](function (_0x5cc56d, _0x3ad22f) {
                return _0x5cc56d['y'] - _0x3ad22f['y'];
            });
        }
        ['_setItemCh' + 'anged']() {
            this['_itemChang' + 'ed'] || (this['_itemChang' + 'ed'] = !0x0, this['callLater'](this['changeItem' + 's']));
        }
    }
    _0x20385f['ILaya']['regClass'](_0x2d2da9), _0x20385f['ClassUtils']['regClass']('laya.ui.La' + 'youtBox', _0x2d2da9), _0x20385f['ClassUtils']['regClass']('Laya.Layou' + 'tBox', _0x2d2da9);
    class _0x17cf49 extends _0x2d2da9 {
        ['sortItem'](_0x3fd23e) {
            _0x3fd23e && _0x3fd23e['sort'](function (_0x422cb7, _0x219d7b) {
                return _0x422cb7['x'] - _0x219d7b['x'];
            });
        }
        set ['height'](_0x91f12d) {
            this['_height'] != _0x91f12d && (super['height'] = _0x91f12d, this['callLater'](this['changeItem' + 's']));
        }
        get ['height']() {
            return super['height'];
        }
        ['changeItem' + 's']() {
            this['_itemChang' + 'ed'] = !0x1;
            for (var _0x4c8981 = [], _0x4ee4eb = 0x0, _0x4d167b = 0x0, _0x32d6c9 = this['numChildre' + 'n']; _0x4d167b < _0x32d6c9; _0x4d167b++) {
                var _0x1ed600 = this['getChildAt'](_0x4d167b);
                _0x1ed600 && (_0x4c8981['push'](_0x1ed600), _0x4ee4eb = this['_height'] ? this['_height'] : Math['max'](_0x4ee4eb, _0x1ed600['height'] * _0x1ed600['scaleY']));
            }
            this['sortItem'](_0x4c8981);
            var _0x15dbe1 = 0x0;
            for (_0x4d167b = 0x0, _0x32d6c9 = _0x4c8981['length']; _0x4d167b < _0x32d6c9; _0x4d167b++)
                (_0x1ed600 = _0x4c8981[_0x4d167b])['x'] = _0x15dbe1, _0x15dbe1 += _0x1ed600['width'] * _0x1ed600['scaleX'] + this['_space'], this['_align'] == _0x17cf49['TOP'] ? _0x1ed600['y'] = 0x0 : this['_align'] == _0x17cf49['MIDDLE'] ? _0x1ed600['y'] = 0.5 * (_0x4ee4eb - _0x1ed600['height'] * _0x1ed600['scaleY']) : this['_align'] == _0x17cf49['BOTTOM'] && (_0x1ed600['y'] = _0x4ee4eb - _0x1ed600['height'] * _0x1ed600['scaleY']);
            this['_sizeChang' + 'ed']();
        }
    }
    _0x17cf49['NONE'] = 'none', _0x17cf49['TOP'] = 'top', _0x17cf49['MIDDLE'] = 'middle', _0x17cf49['BOTTOM'] = 'bottom', _0x20385f['ILaya']['regClass'](_0x17cf49), _0x20385f['ClassUtils']['regClass']('laya.ui.HB' + 'ox', _0x17cf49), _0x20385f['ClassUtils']['regClass']('Laya.HBox', _0x17cf49);
    class _0x260d43 extends _0x2d2da9 {
        set ['width'](_0x364400) {
            this['_width'] != _0x364400 && (super['width'] = _0x364400, this['callLater'](this['changeItem' + 's']));
        }
        get ['width']() {
            return super['width'];
        }
        ['changeItem' + 's']() {
            this['_itemChang' + 'ed'] = !0x1;
            for (var _0x359301 = [], _0x4e6313 = 0x0, _0x43e2f9 = 0x0, _0xc9a160 = this['numChildre' + 'n']; _0x43e2f9 < _0xc9a160; _0x43e2f9++) {
                var _0x16f889 = this['getChildAt'](_0x43e2f9);
                _0x16f889 && (_0x359301['push'](_0x16f889), _0x4e6313 = this['_width'] ? this['_width'] : Math['max'](_0x4e6313, _0x16f889['width'] * _0x16f889['scaleX']));
            }
            this['sortItem'](_0x359301);
            var _0x99e8f5 = 0x0;
            for (_0x43e2f9 = 0x0, _0xc9a160 = _0x359301['length']; _0x43e2f9 < _0xc9a160; _0x43e2f9++)
                (_0x16f889 = _0x359301[_0x43e2f9])['y'] = _0x99e8f5, _0x99e8f5 += _0x16f889['height'] * _0x16f889['scaleY'] + this['_space'], this['_align'] == _0x260d43['LEFT'] ? _0x16f889['x'] = 0x0 : this['_align'] == _0x260d43['CENTER'] ? _0x16f889['x'] = 0.5 * (_0x4e6313 - _0x16f889['width'] * _0x16f889['scaleX']) : this['_align'] == _0x260d43['RIGHT'] && (_0x16f889['x'] = _0x4e6313 - _0x16f889['width'] * _0x16f889['scaleX']);
            this['_sizeChang' + 'ed']();
        }
    }
    _0x260d43['NONE'] = 'none', _0x260d43['LEFT'] = 'left', _0x260d43['CENTER'] = 'center', _0x260d43['RIGHT'] = 'right', _0x20385f['ILaya']['regClass'](_0x260d43), _0x20385f['ClassUtils']['regClass']('laya.ui.VB' + 'ox', _0x260d43), _0x20385f['ClassUtils']['regClass']('Laya.VBox', _0x260d43);
    class _0x4d4758 extends _0x2e63f8 {
        constructor(_0x28e3fa = null, _0x460fc0 = null) {
            super(), this['_valueArr'] = '', this['_indexMap'] = null, this['_sheet'] = null, this['_direction'] = 'horizontal', this['_spaceX'] = 0x0, this['_spaceY'] = 0x0, this['_align'] = 'left', this['_wordsW'] = 0x0, this['_wordsH'] = 0x0, _0x28e3fa && (this['skin'] = _0x28e3fa), _0x460fc0 && (this['sheet'] = _0x460fc0);
        }
        ['createChil' + 'dren']() {
            this['_bitmap'] = new _0x2f278e(), this['on'](_0x20385f['Event']['LOADED'], this, this['_onClipLoa' + 'ded']);
        }
        ['_onClipLoa' + 'ded']() {
            this['callLater'](this['changeValu' + 'e']);
        }
        get ['sheet']() {
            return this['_sheet'];
        }
        set ['sheet'](_0x41f82c) {
            _0x41f82c += '', this['_sheet'] = _0x41f82c;
            var _0x38ecd9 = _0x41f82c['split']('\x20');
            this['_clipX'] = String(_0x38ecd9[0x0])['length'], this['clipY'] = _0x38ecd9['length'], this['_indexMap'] = {};
            for (var _0x323748 = 0x0; _0x323748 < this['_clipY']; _0x323748++)
                for (var _0x13febf = _0x38ecd9[_0x323748]['split'](''), _0x33ddfb = 0x0, _0x1e2caa = _0x13febf['length']; _0x33ddfb < _0x1e2caa; _0x33ddfb++)
                    this['_indexMap'][_0x13febf[_0x33ddfb]] = _0x323748 * this['_clipX'] + _0x33ddfb;
        }
        get ['value']() {
            return this['_valueArr'] ? this['_valueArr'] : '';
        }
        set ['value'](_0x1c3dc4) {
            _0x1c3dc4 += '', this['_valueArr'] = _0x1c3dc4, this['callLater'](this['changeValu' + 'e']);
        }
        get ['direction']() {
            return this['_direction'];
        }
        set ['direction'](_0x3c60f3) {
            this['_direction'] = _0x3c60f3, this['callLater'](this['changeValu' + 'e']);
        }
        get ['spaceX']() {
            return this['_spaceX'];
        }
        set ['spaceX'](_0x2ded78) {
            this['_spaceX'] = _0x2ded78, 'horizontal' === this['_direction'] && this['callLater'](this['changeValu' + 'e']);
        }
        get ['spaceY']() {
            return this['_spaceY'];
        }
        set ['spaceY'](_0x483c99) {
            this['_spaceY'] = _0x483c99, 'horizontal' !== this['_direction'] && this['callLater'](this['changeValu' + 'e']);
        }
        set ['align'](_0x568670) {
            this['_align'] = _0x568670, this['callLater'](this['changeValu' + 'e']);
        }
        get ['align']() {
            return this['_align'];
        }
        ['changeValu' + 'e']() {
            var _0x34543c;
            if (this['_sources'] && (this['_valueArr'] && (this['graphics']['clear'](!0x0), _0x34543c = this['_sources'][0x0]))) {
                var _0x464c52 = 'horizontal' === this['_direction'];
                _0x464c52 ? (this['_wordsW'] = this['_valueArr']['length'] * (_0x34543c['sourceWidt' + 'h'] + this['spaceX']), this['_wordsH'] = _0x34543c['sourceHeig' + 'ht']) : (this['_wordsW'] = _0x34543c['sourceWidt' + 'h'], this['_wordsH'] = (_0x34543c['sourceHeig' + 'ht'] + this['spaceY']) * this['_valueArr']['length']);
                var _0x3b66c9 = 0x0;
                if (this['_width'])
                    switch (this['_align']) {
                    case 'center':
                        _0x3b66c9 = 0.5 * (this['_width'] - this['_wordsW']);
                        break;
                    case 'right':
                        _0x3b66c9 = this['_width'] - this['_wordsW'];
                        break;
                    default:
                        _0x3b66c9 = 0x0;
                    }
                for (var _0x4a2e82 = 0x0, _0x5189b8 = this['_valueArr']['length']; _0x4a2e82 < _0x5189b8; _0x4a2e82++) {
                    var _0x4bb1d7 = this['_indexMap'][this['_valueArr']['charAt'](_0x4a2e82)];
                    this['sources'][_0x4bb1d7] && (_0x34543c = this['sources'][_0x4bb1d7], _0x464c52 ? this['graphics']['drawImage'](_0x34543c, _0x3b66c9 + _0x4a2e82 * (_0x34543c['sourceWidt' + 'h'] + this['spaceX']), 0x0, _0x34543c['sourceWidt' + 'h'], _0x34543c['sourceHeig' + 'ht']) : this['graphics']['drawImage'](_0x34543c, 0x0 + _0x3b66c9, _0x4a2e82 * (_0x34543c['sourceHeig' + 'ht'] + this['spaceY']), _0x34543c['sourceWidt' + 'h'], _0x34543c['sourceHeig' + 'ht']));
                }
                this['_width'] || (this['_widget']['resetLayou' + 'tX'](), this['callLater'](this['_sizeChang' + 'ed'])), this['_height'] || (this['_widget']['resetLayou' + 'tY'](), this['callLater'](this['_sizeChang' + 'ed']));
            }
        }
        set ['width'](_0x32a98d) {
            super['width'] = _0x32a98d, this['callLater'](this['changeValu' + 'e']);
        }
        get ['width']() {
            return super['width'];
        }
        set ['height'](_0x3c0f4d) {
            super['height'] = _0x3c0f4d, this['callLater'](this['changeValu' + 'e']);
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
        ['destroy'](_0x3460f1 = !0x0) {
            this['_valueArr'] = null, this['_indexMap'] = null, this['graphics']['clear'](!0x0), this['removeSelf'](), this['off'](_0x20385f['Event']['LOADED'], this, this['_onClipLoa' + 'ded']), super['destroy'](_0x3460f1);
        }
    }
    _0x20385f['ILaya']['regClass'](_0x4d4758), _0x20385f['ClassUtils']['regClass']('laya.ui.Fo' + 'ntClip', _0x4d4758), _0x20385f['ClassUtils']['regClass']('Laya.FontC' + 'lip', _0x4d4758);
    class _0x18b1e4 extends _0x20385f['Scene'] {
        constructor() {
            super(!0x1), this['_watchMap'] = {}, this['_anchorX'] = NaN, this['_anchorY'] = NaN, this['_widget'] = _0x2eb4bf['EMPTY'], this['createChil' + 'dren']();
        }
        static ['__init__']() {
            _0x20385f['ILaya']['ClassUtils']['regShortCl' + 'assName']([
                _0xcbf27f,
                _0x5dea9c,
                _0x25226c,
                _0x2e229f,
                _0x1c310b,
                _0x2285df,
                _0x1dd0a3,
                _0x2e63f8,
                _0x189f8b,
                _0xa31ae0,
                _0x16863c,
                _0x4c38cc,
                _0x15956b,
                _0x3aa97b,
                _0x2460e1,
                _0x7e1a44,
                _0x36c723,
                _0x10bc54,
                _0x1bf0dd,
                _0x594366,
                _0x26d3fd,
                _0x4cd65e,
                _0x24bf59,
                _0x18b1e4,
                _0x3f571d,
                _0x2de130,
                _0x29a651,
                _0x17cf49,
                _0x260d43,
                _0x20385f['Animation'],
                _0x20385f['Text'],
                _0x4d4758
            ]);
        }
        static ['regCompone' + 'nt'](_0x34efb9, _0x934938) {
            _0x20385f['ILaya']['ClassUtils']['regClass'](_0x34efb9, _0x934938);
        }
        static ['regViewRun' + 'time'](_0x12db66, _0x3bc791) {
            _0x20385f['ILaya']['ClassUtils']['regClass'](_0x12db66, _0x3bc791);
        }
        static ['regUI'](_0x56e641, _0x4054b0) {
            _0x20385f['ILaya']['loader']['cacheRes'](_0x56e641, _0x4054b0);
        }
        ['destroy'](_0x5ab560 = !0x0) {
            this['_watchMap'] = null, super['destroy'](_0x5ab560);
        }
        ['changeData'](_0x3242f9) {
            var _0x433aa9 = this['_watchMap'][_0x3242f9];
            if (_0x433aa9)
                for (var _0x52cc01 = 0x0, _0x183d8b = _0x433aa9['length']; _0x52cc01 < _0x183d8b; _0x52cc01++) {
                    _0x433aa9[_0x52cc01]['exe'](this);
                }
        }
        get ['top']() {
            return this['_widget']['top'];
        }
        set ['top'](_0xfa76cf) {
            _0xfa76cf != this['_widget']['top'] && (this['_getWidget']()['top'] = _0xfa76cf);
        }
        get ['bottom']() {
            return this['_widget']['bottom'];
        }
        set ['bottom'](_0x4649f4) {
            _0x4649f4 != this['_widget']['bottom'] && (this['_getWidget']()['bottom'] = _0x4649f4);
        }
        get ['left']() {
            return this['_widget']['left'];
        }
        set ['left'](_0x73a42e) {
            _0x73a42e != this['_widget']['left'] && (this['_getWidget']()['left'] = _0x73a42e);
        }
        get ['right']() {
            return this['_widget']['right'];
        }
        set ['right'](_0x39ae8c) {
            _0x39ae8c != this['_widget']['right'] && (this['_getWidget']()['right'] = _0x39ae8c);
        }
        get ['centerX']() {
            return this['_widget']['centerX'];
        }
        set ['centerX'](_0xab84d7) {
            _0xab84d7 != this['_widget']['centerX'] && (this['_getWidget']()['centerX'] = _0xab84d7);
        }
        get ['centerY']() {
            return this['_widget']['centerY'];
        }
        set ['centerY'](_0x500e08) {
            _0x500e08 != this['_widget']['centerY'] && (this['_getWidget']()['centerY'] = _0x500e08);
        }
        get ['anchorX']() {
            return this['_anchorX'];
        }
        set ['anchorX'](_0x5e52e6) {
            this['_anchorX'] != _0x5e52e6 && (this['_anchorX'] = _0x5e52e6, this['callLater'](this['_sizeChang' + 'ed']));
        }
        get ['anchorY']() {
            return this['_anchorY'];
        }
        set ['anchorY'](_0x1c0fa0) {
            this['_anchorY'] != _0x1c0fa0 && (this['_anchorY'] = _0x1c0fa0, this['callLater'](this['_sizeChang' + 'ed']));
        }
        ['_sizeChang' + 'ed']() {
            isNaN(this['_anchorX']) || (this['pivotX'] = this['anchorX'] * this['width']), isNaN(this['_anchorY']) || (this['pivotY'] = this['anchorY'] * this['height']), this['event'](_0x20385f['Event']['RESIZE']);
        }
        ['_getWidget']() {
            return this['_widget'] === _0x2eb4bf['EMPTY'] && (this['_widget'] = this['addCompone' + 'nt'](_0x2eb4bf)), this['_widget'];
        }
        ['loadUI'](_0x244637) {
            var _0x3eea94 = _0x18b1e4['uiMap'][_0x244637];
            _0x18b1e4['uiMap'] && this['createView'](_0x3eea94);
        }
        get ['dataSource']() {
            return this['_dataSourc' + 'e'];
        }
        set ['dataSource'](_0x1cbb46) {
            for (var _0x92e86e in (this['_dataSourc' + 'e'] = _0x1cbb46, _0x1cbb46)) {
                var _0x9c0a0e = this['getChildBy' + 'Name'](_0x92e86e);
                _0x9c0a0e instanceof _0xa31ae0 ? _0x9c0a0e['dataSource'] = _0x1cbb46[_0x92e86e] : _0x92e86e in this && !(this[_0x92e86e] instanceof Function) && (this[_0x92e86e] = _0x1cbb46[_0x92e86e]);
            }
        }
    }
    _0x18b1e4['uiMap'] = {}, _0x20385f['ILaya']['regClass'](_0x18b1e4), _0x20385f['ClassUtils']['regClass']('laya.ui.Vi' + 'ew', _0x18b1e4), _0x20385f['ClassUtils']['regClass']('Laya.View', _0x18b1e4);
    class _0x47980b {
    }
    _0x47980b['Dialog'] = null;
    class _0x291c1a extends _0x20385f['Sprite'] {
        constructor() {
            super(), this['maskLayer'] = new _0x20385f['Sprite'](), this['popupEffec' + 't'] = _0x59af85 => {
                _0x59af85['scale'](0x1, 0x1), _0x59af85['_effectTwe' + 'en'] = _0x20385f['Tween']['from'](_0x59af85, {
                    'x': _0x20385f['ILaya']['stage']['width'] / 0x2,
                    'y': _0x20385f['ILaya']['stage']['height'] / 0x2,
                    'scaleX': 0x0,
                    'scaleY': 0x0
                }, 0x12c, _0x20385f['Ease']['backOut'], _0x20385f['Handler']['create'](this, this['doOpen'], [_0x59af85]), 0x0, !0x1, !0x1);
            }, this['closeEffec' + 't'] = _0x3a074a => {
                _0x3a074a['_effectTwe' + 'en'] = _0x20385f['Tween']['to'](_0x3a074a, {
                    'x': _0x20385f['ILaya']['stage']['width'] / 0x2,
                    'y': _0x20385f['ILaya']['stage']['height'] / 0x2,
                    'scaleX': 0x0,
                    'scaleY': 0x0
                }, 0x12c, _0x20385f['Ease']['strongOut'], _0x20385f['Handler']['create'](this, this['doClose'], [_0x3a074a]), 0x0, !0x1, !0x1);
            }, this['popupEffec' + 'tHandler'] = new _0x20385f['Handler'](this, this['popupEffec' + 't']), this['closeEffec' + 'tHandler'] = new _0x20385f['Handler'](this, this['closeEffec' + 't']), this['mouseEnabl' + 'ed'] = this['maskLayer']['mouseEnabl' + 'ed'] = !0x0, this['zOrder'] = 0x3e8, _0x20385f['ILaya']['stage']['addChild'](this), _0x20385f['ILaya']['stage']['on'](_0x20385f['Event']['RESIZE'], this, this['_onResize']), _0x10bbcf['closeDialo' + 'gOnSide'] && this['maskLayer']['on']('click', this, this['_closeOnSi' + 'de']), this['_onResize'](null);
        }
        ['_closeOnSi' + 'de']() {
            var _0x39b9b5 = this['getChildAt'](this['numChildre' + 'n'] - 0x1);
            _0x39b9b5 instanceof _0x47980b['Dialog'] && _0x39b9b5['close']();
        }
        ['setLockVie' + 'w'](_0x23d665) {
            this['lockLayer'] || (this['lockLayer'] = new _0x1c310b(), this['lockLayer']['mouseEnabl' + 'ed'] = !0x0, this['lockLayer']['size'](_0x20385f['ILaya']['stage']['width'], _0x20385f['ILaya']['stage']['height'])), this['lockLayer']['removeChil' + 'dren'](), _0x23d665 && (_0x23d665['centerX'] = _0x23d665['centerY'] = 0x0, this['lockLayer']['addChild'](_0x23d665));
        }
        ['_onResize'](_0x58950d = null) {
            var _0x5514a2 = this['maskLayer']['width'] = _0x20385f['ILaya']['stage']['width'], _0x506d2c = this['maskLayer']['height'] = _0x20385f['ILaya']['stage']['height'];
            this['lockLayer'] && this['lockLayer']['size'](_0x5514a2, _0x506d2c), this['maskLayer']['graphics']['clear'](!0x0), this['maskLayer']['graphics']['drawRect'](0x0, 0x0, _0x5514a2, _0x506d2c, _0x10bbcf['popupBgCol' + 'or']), this['maskLayer']['alpha'] = _0x10bbcf['popupBgAlp' + 'ha'];
            for (var _0x5a8fba = this['numChildre' + 'n'] - 0x1; _0x5a8fba > -0x1; _0x5a8fba--) {
                var _0x2b2f6b = this['getChildAt'](_0x5a8fba);
                _0x2b2f6b['isPopupCen' + 'ter'] && this['_centerDia' + 'log'](_0x2b2f6b);
            }
        }
        ['_centerDia' + 'log'](_0x4b43d6) {
            _0x4b43d6['x'] = Math['round']((_0x20385f['ILaya']['stage']['width'] - _0x4b43d6['width'] >> 0x1) + _0x4b43d6['pivotX']), _0x4b43d6['y'] = Math['round']((_0x20385f['ILaya']['stage']['height'] - _0x4b43d6['height'] >> 0x1) + _0x4b43d6['pivotY']);
        }
        ['open'](_0x57bae0, _0x2123bf = !0x1, _0x4946f0 = !0x1) {
            _0x2123bf && this['_closeAll'](), this['_clearDial' + 'ogEffect'](_0x57bae0), _0x57bae0['isPopupCen' + 'ter'] && this['_centerDia' + 'log'](_0x57bae0), this['addChild'](_0x57bae0), (_0x57bae0['isModal'] || this['_getBit'](_0x20385f['Const']['HAS_ZORDER'])) && _0x20385f['ILaya']['timer']['callLater'](this, this['_checkMask']), _0x4946f0 && null != _0x57bae0['popupEffec' + 't'] ? _0x57bae0['popupEffec' + 't']['runWith'](_0x57bae0) : this['doOpen'](_0x57bae0), this['event'](_0x20385f['Event']['OPEN']);
        }
        ['_clearDial' + 'ogEffect'](_0x300ea2) {
            _0x300ea2['_effectTwe' + 'en'] && (_0x20385f['Tween']['clear'](_0x300ea2['_effectTwe' + 'en']), _0x300ea2['_effectTwe' + 'en'] = null);
        }
        ['doOpen'](_0x35a987) {
            _0x35a987['onOpened'](_0x35a987['_param']);
        }
        ['lock'](_0x3dd7eb) {
            this['lockLayer'] && (_0x3dd7eb ? this['addChild'](this['lockLayer']) : this['lockLayer']['removeSelf']());
        }
        ['close'](_0x5c0483) {
            this['_clearDial' + 'ogEffect'](_0x5c0483), _0x5c0483['isShowEffe' + 'ct'] && null != _0x5c0483['closeEffec' + 't'] ? _0x5c0483['closeEffec' + 't']['runWith']([_0x5c0483]) : this['doClose'](_0x5c0483), this['event'](_0x20385f['Event']['CLOSE']);
        }
        ['doClose'](_0x554d9f) {
            _0x554d9f['removeSelf'](), _0x554d9f['isModal'] && this['_checkMask'](), _0x554d9f['closeHandl' + 'er'] && _0x554d9f['closeHandl' + 'er']['runWith'](_0x554d9f['closeType']), _0x554d9f['onClosed'](_0x554d9f['closeType']), _0x554d9f['autoDestro' + 'yAtClosed'] && _0x554d9f['destroy']();
        }
        ['closeAll']() {
            this['_closeAll'](), this['event'](_0x20385f['Event']['CLOSE']);
        }
        ['_closeAll']() {
            for (var _0x489a45 = this['numChildre' + 'n'] - 0x1; _0x489a45 > -0x1; _0x489a45--) {
                var _0x121aa9 = this['getChildAt'](_0x489a45);
                _0x121aa9 && null != _0x121aa9['close'] && this['doClose'](_0x121aa9);
            }
        }
        ['getDialogs' + 'ByGroup'](_0xf12636) {
            for (var _0x4e405e = [], _0x2b5de9 = this['numChildre' + 'n'] - 0x1; _0x2b5de9 > -0x1; _0x2b5de9--) {
                var _0x4781c1 = this['getChildAt'](_0x2b5de9);
                _0x4781c1 && _0x4781c1['group'] === _0xf12636 && _0x4e405e['push'](_0x4781c1);
            }
            return _0x4e405e;
        }
        ['closeByGro' + 'up'](_0x2377f1) {
            for (var _0x34aec8 = [], _0x5ccbe1 = this['numChildre' + 'n'] - 0x1; _0x5ccbe1 > -0x1; _0x5ccbe1--) {
                var _0x4ece30 = this['getChildAt'](_0x5ccbe1);
                _0x4ece30 && _0x4ece30['group'] === _0x2377f1 && (_0x4ece30['close'](), _0x34aec8['push'](_0x4ece30));
            }
            return _0x34aec8;
        }
        ['_checkMask']() {
            this['maskLayer']['removeSelf']();
            for (var _0x2e0b87 = this['numChildre' + 'n'] - 0x1; _0x2e0b87 > -0x1; _0x2e0b87--) {
                var _0x203f4e = this['getChildAt'](_0x2e0b87);
                if (_0x203f4e && _0x203f4e['isModal'])
                    return void this['addChildAt'](this['maskLayer'], _0x2e0b87);
            }
        }
    }
    _0x20385f['ClassUtils']['regClass']('laya.ui.Di' + 'alogManage' + 'r', _0x291c1a), _0x20385f['ClassUtils']['regClass']('Laya.Dialo' + 'gManager', _0x291c1a);
    class _0xac9cb7 extends _0x18b1e4 {
        constructor() {
            super(), this['isShowEffe' + 'ct'] = !0x0, this['isPopupCen' + 'ter'] = !0x0, this['popupEffec' + 't'] = _0xac9cb7['manager']['popupEffec' + 'tHandler'], this['closeEffec' + 't'] = _0xac9cb7['manager']['closeEffec' + 'tHandler'], this['_dealDragA' + 'rea'](), this['on'](_0x20385f['Event']['CLICK'], this, this['_onClick']);
        }
        static get ['manager']() {
            return _0xac9cb7['_manager'] = _0xac9cb7['_manager'] || new _0x291c1a();
        }
        static set ['manager'](_0x206278) {
            _0xac9cb7['_manager'] = _0x206278;
        }
        ['_dealDragA' + 'rea']() {
            var _0x502898 = this['getChildBy' + 'Name']('drag');
            _0x502898 && (this['dragArea'] = _0x502898['_x'] + ',' + _0x502898['_y'] + ',' + _0x502898['width'] + ',' + _0x502898['height'], _0x502898['removeSelf']());
        }
        get ['dragArea']() {
            return this['_dragArea'] ? this['_dragArea']['toString']() : null;
        }
        set ['dragArea'](_0x686697) {
            if (_0x686697) {
                var _0x6be714 = _0x234441['fillArray']([
                    0x0,
                    0x0,
                    0x0,
                    0x0
                ], _0x686697, Number);
                this['_dragArea'] = new _0x20385f['Rectangle'](_0x6be714[0x0], _0x6be714[0x1], _0x6be714[0x2], _0x6be714[0x3]), this['on'](_0x20385f['Event']['MOUSE_DOWN'], this, this['_onMouseDo' + 'wn']);
            } else
                this['_dragArea'] = null, this['off'](_0x20385f['Event']['MOUSE_DOWN'], this, this['_onMouseDo' + 'wn']);
        }
        ['_onMouseDo' + 'wn'](_0x132110) {
            var _0x533600 = this['getMousePo' + 'int']();
            this['_dragArea']['contains'](_0x533600['x'], _0x533600['y']) ? this['startDrag']() : this['stopDrag']();
        }
        ['_onClick'](_0x4210fc) {
            var _0x2fbf18 = _0x4210fc['target'];
            if (_0x2fbf18)
                switch (_0x2fbf18['name']) {
                case _0xac9cb7['CLOSE']:
                case _0xac9cb7['CANCEL']:
                case _0xac9cb7['SURE']:
                case _0xac9cb7['NO']:
                case _0xac9cb7['OK']:
                case _0xac9cb7['YES']:
                    return void this['close'](_0x2fbf18['name']);
                }
        }
        ['open'](_0x2031f0 = !0x0, _0x5eb027 = null) {
            this['_dealDragA' + 'rea'](), this['_param'] = _0x5eb027, _0xac9cb7['manager']['open'](this, _0x2031f0, this['isShowEffe' + 'ct']), _0xac9cb7['manager']['lock'](!0x1);
        }
        ['close'](_0x27bafc = null) {
            this['closeType'] = _0x27bafc, _0xac9cb7['manager']['close'](this);
        }
        ['destroy'](_0xdea7ce = !0x0) {
            this['closeHandl' + 'er'] = null, this['popupEffec' + 't'] = null, this['closeEffec' + 't'] = null, this['_dragArea'] = null, super['destroy'](_0xdea7ce);
        }
        ['show'](_0x2f4613 = !0x1, _0x56d81c = !0x0) {
            this['_open'](!0x1, _0x2f4613, _0x56d81c);
        }
        ['popup'](_0xe15f73 = !0x1, _0x2ed222 = !0x0) {
            this['_open'](!0x0, _0xe15f73, _0x2ed222);
        }
        ['_open'](_0x357719, _0x16a9ec, _0x4d10c8) {
            this['isModal'] = _0x357719, this['isShowEffe' + 'ct'] = _0x4d10c8, _0xac9cb7['manager']['lock'](!0x0), this['open'](_0x16a9ec);
        }
        get ['isPopup']() {
            return null != this['parent'];
        }
        set ['zOrder'](_0x5292cb) {
            super['zOrder'] = _0x5292cb, _0xac9cb7['manager']['_checkMask']();
        }
        get ['zOrder']() {
            return super['zOrder'];
        }
        static ['setLockVie' + 'w'](_0xb12f9c) {
            _0xac9cb7['manager']['setLockVie' + 'w'](_0xb12f9c);
        }
        static ['lock'](_0x59a0da) {
            _0xac9cb7['manager']['lock'](_0x59a0da);
        }
        static ['closeAll']() {
            _0xac9cb7['manager']['closeAll']();
        }
        static ['getDialogs' + 'ByGroup'](_0x74494a) {
            return _0xac9cb7['manager']['getDialogs' + 'ByGroup'](_0x74494a);
        }
        static ['closeByGro' + 'up'](_0x2ec156) {
            return _0xac9cb7['manager']['closeByGro' + 'up'](_0x2ec156);
        }
    }
    _0xac9cb7['CLOSE'] = 'close', _0xac9cb7['CANCEL'] = 'cancel', _0xac9cb7['SURE'] = 'sure', _0xac9cb7['NO'] = 'no', _0xac9cb7['YES'] = 'yes', _0xac9cb7['OK'] = 'ok', _0x47980b['Dialog'] = _0xac9cb7, _0x20385f['ILaya']['regClass'](_0xac9cb7), _0x20385f['ClassUtils']['regClass']('laya.ui.Di' + 'alog', _0xac9cb7), _0x20385f['ClassUtils']['regClass']('Laya.Dialo' + 'g', _0xac9cb7);
    class _0x523029 extends _0xa31ae0 {
        constructor() {
            super(), this['_tipBox'] = new _0xa31ae0(), this['_tipBox']['addChild'](this['_tipText'] = new _0x20385f['Text']()), this['_tipText']['x'] = this['_tipText']['y'] = 0x5, this['_tipText']['color'] = _0x523029['tipTextCol' + 'or'], this['_defaultTi' + 'pHandler'] = this['_showDefau' + 'ltTip'], _0x20385f['ILaya']['stage']['on'](_0x3c5059['SHOW_TIP'], this, this['_onStageSh' + 'owTip']), _0x20385f['ILaya']['stage']['on'](_0x3c5059['HIDE_TIP'], this, this['_onStageHi' + 'deTip']), this['zOrder'] = 0x44c;
        }
        ['_onStageHi' + 'deTip'](_0x2abc2f) {
            _0x20385f['ILaya']['timer']['clear'](this, this['_showTip']), this['closeAll'](), this['removeSelf']();
        }
        ['_onStageSh' + 'owTip'](_0x9f3d55) {
            _0x20385f['ILaya']['timer']['once'](_0x523029['tipDelay'], this, this['_showTip'], [_0x9f3d55], !0x0);
        }
        ['_showTip'](_0x5b3f6d) {
            if ('string' == typeof _0x5b3f6d) {
                var _0x1520a8 = String(_0x5b3f6d);
                Boolean(_0x1520a8) && this['_defaultTi' + 'pHandler'](_0x1520a8);
            } else
                _0x5b3f6d instanceof _0x20385f['Handler'] ? _0x5b3f6d['run']() : _0x5b3f6d instanceof Function && _0x5b3f6d['apply']();
            _0x20385f['ILaya']['stage']['on'](_0x20385f['Event']['MOUSE_MOVE'], this, this['_onStageMo' + 'useMove']), _0x20385f['ILaya']['stage']['on'](_0x20385f['Event']['MOUSE_DOWN'], this, this['_onStageMo' + 'useDown']), this['_onStageMo' + 'useMove'](null);
        }
        ['_onStageMo' + 'useDown'](_0x267bf3) {
            this['closeAll']();
        }
        ['_onStageMo' + 'useMove'](_0x4c2576) {
            this['_showToSta' + 'ge'](this, _0x523029['offsetX'], _0x523029['offsetY']);
        }
        ['_showToSta' + 'ge'](_0x73ff38, _0x17afe0 = 0x0, _0x2cedf7 = 0x0) {
            var _0x2ea048 = _0x73ff38['getBounds']();
            _0x73ff38['x'] = _0x20385f['ILaya']['stage']['mouseX'] + _0x17afe0, _0x73ff38['y'] = _0x20385f['ILaya']['stage']['mouseY'] + _0x2cedf7, _0x73ff38['_x'] + _0x2ea048['width'] > _0x20385f['ILaya']['stage']['width'] && (_0x73ff38['x'] -= _0x2ea048['width'] + _0x17afe0), _0x73ff38['_y'] + _0x2ea048['height'] > _0x20385f['ILaya']['stage']['height'] && (_0x73ff38['y'] -= _0x2ea048['height'] + _0x2cedf7);
        }
        ['closeAll']() {
            _0x20385f['ILaya']['timer']['clear'](this, this['_showTip']), _0x20385f['ILaya']['stage']['off'](_0x20385f['Event']['MOUSE_MOVE'], this, this['_onStageMo' + 'useMove']), _0x20385f['ILaya']['stage']['off'](_0x20385f['Event']['MOUSE_DOWN'], this, this['_onStageMo' + 'useDown']), this['removeChil' + 'dren']();
        }
        ['showDislay' + 'Tip'](_0x59b103) {
            this['addChild'](_0x59b103), this['_showToSta' + 'ge'](this), _0x20385f['ILaya']['stage']['addChild'](this);
        }
        ['_showDefau' + 'ltTip'](_0x42f3cf) {
            this['_tipText']['text'] = _0x42f3cf;
            var _0x5813b7 = this['_tipBox']['graphics'];
            _0x5813b7['clear'](!0x0), _0x5813b7['drawRect'](0x0, 0x0, this['_tipText']['width'] + 0xa, this['_tipText']['height'] + 0xa, _0x523029['tipBackCol' + 'or']), this['addChild'](this['_tipBox']), this['_showToSta' + 'ge'](this), _0x20385f['ILaya']['stage']['addChild'](this);
        }
        get ['defaultTip' + 'Handler']() {
            return this['_defaultTi' + 'pHandler'];
        }
        set ['defaultTip' + 'Handler'](_0x2bcb3b) {
            this['_defaultTi' + 'pHandler'] = _0x2bcb3b;
        }
    }
    _0x523029['offsetX'] = 0xa, _0x523029['offsetY'] = 0xf, _0x523029['tipTextCol' + 'or'] = '#ffffff', _0x523029['tipBackCol' + 'or'] = '#111111', _0x523029['tipDelay'] = 0xc8, _0x20385f['ILaya']['regClass'](_0x523029), _0x20385f['ClassUtils']['regClass']('laya.ui.Ti' + 'pManager', _0x523029), _0x20385f['ClassUtils']['regClass']('Laya.TipMa' + 'nager', _0x523029);
    class _0x5a3991 extends _0xa31ae0 {
        constructor() {
            super(), this['_width'] = this['_height'] = 0xc8;
            var _0x25a20e = new _0x20385f['Texture']();
            _0x25a20e['bitmap'] = new _0x20385f['Texture2D'](), this['texture'] = _0x25a20e;
        }
        ['onEnable']() {
            this['postMsg']({
                'type': 'display',
                'rate': _0x20385f['Laya']['stage']['frameRate']
            }), window['wx'] && window['sharedCanv' + 'as'] && _0x20385f['Laya']['timer']['frameLoop'](0x1, this, this['_onLoop']);
        }
        ['onDisable']() {
            this['postMsg']({ 'type': 'undisplay' }), _0x20385f['Laya']['timer']['clear'](this, this['_onLoop']);
        }
        ['_onLoop']() {
            this['texture']['bitmap']['loadImageS' + 'ource'](window['sharedCanv' + 'as']);
        }
        set ['width'](_0x5a0b93) {
            super['width'] = _0x5a0b93, window['sharedCanv' + 'as'] && (window['sharedCanv' + 'as']['width'] = _0x5a0b93), this['callLater'](this['_postMsg']);
        }
        get ['width']() {
            return super['width'];
        }
        set ['height'](_0x1f44f9) {
            super['height'] = _0x1f44f9, window['sharedCanv' + 'as'] && (window['sharedCanv' + 'as']['height'] = _0x1f44f9), this['callLater'](this['_postMsg']);
        }
        get ['height']() {
            return super['height'];
        }
        set ['x'](_0x32e523) {
            super['x'] = _0x32e523, this['callLater'](this['_postMsg']);
        }
        get ['x']() {
            return super['x'];
        }
        set ['y'](_0x508cc5) {
            super['y'] = _0x508cc5, this['callLater'](this['_postMsg']);
        }
        get ['y']() {
            return super['y'];
        }
        ['_postMsg']() {
            var _0x4887a3 = new _0x20385f['Matrix']();
            _0x4887a3['translate'](this['x'], this['y']);
            var _0x4c0bb6 = _0x20385f['Laya']['stage'];
            _0x4887a3['scale'](_0x4c0bb6['_canvasTra' + 'nsform']['getScaleX']() * this['globalScal' + 'eX'] * _0x4c0bb6['transform']['getScaleX'](), _0x4c0bb6['_canvasTra' + 'nsform']['getScaleY']() * this['globalScal' + 'eY'] * _0x4c0bb6['transform']['getScaleY']()), this['postMsg']({
                'type': 'changeMatr' + 'ix',
                'a': _0x4887a3['a'],
                'b': _0x4887a3['b'],
                'c': _0x4887a3['c'],
                'd': _0x4887a3['d'],
                'tx': _0x4887a3['tx'],
                'ty': _0x4887a3['ty'],
                'w': this['width'],
                'h': this['height']
            });
        }
        ['postMsg'](_0xa1812) {
            window['wx'] && window['wx']['getOpenDat' + 'aContext'] && window['wx']['getOpenDat' + 'aContext']()['postMessag' + 'e'](_0xa1812);
        }
    }
    _0x20385f['ILaya']['regClass'](_0x5a3991), _0x20385f['ClassUtils']['regClass']('laya.ui.WX' + 'OpenDataVi' + 'ewer', _0x5a3991), _0x20385f['ClassUtils']['regClass']('Laya.WXOpe' + 'nDataViewe' + 'r', _0x5a3991), _0x4ad30f['AdvImage'] = _0x1b9455, _0x4ad30f['AutoBitmap'] = _0x2f278e, _0x4ad30f['Box'] = _0x1c310b, _0x4ad30f['Button'] = _0x5dea9c, _0x4ad30f['CheckBox'] = _0x1dd0a3, _0x4ad30f['Clip'] = _0x2e63f8, _0x4ad30f['ColorPicke' + 'r'] = _0x2e229f, _0x4ad30f['ComboBox'] = _0x189f8b, _0x4ad30f['Dialog'] = _0xac9cb7, _0x4ad30f['DialogMana' + 'ger'] = _0x291c1a, _0x4ad30f['FontClip'] = _0x4d4758, _0x4ad30f['HBox'] = _0x17cf49, _0x4ad30f['HScrollBar'] = _0x16863c, _0x4ad30f['HSlider'] = _0x4c38cc, _0x4ad30f['IUI'] = _0x47980b, _0x4ad30f['Image'] = _0x15956b, _0x4ad30f['Label'] = _0x3aa97b, _0x4ad30f['LayoutBox'] = _0x2d2da9, _0x4ad30f['List'] = _0x2460e1, _0x4ad30f['Panel'] = _0x7e1a44, _0x4ad30f['ProgressBa' + 'r'] = _0x36c723, _0x4ad30f['Radio'] = _0x10bc54, _0x4ad30f['RadioGroup'] = _0x1bf0dd, _0x4ad30f['ScaleBox'] = _0x2285df, _0x4ad30f['ScrollBar'] = _0x594366, _0x4ad30f['Slider'] = _0x26d3fd, _0x4ad30f['Styles'] = _0x44287a, _0x4ad30f['Tab'] = _0x4cd65e, _0x4ad30f['TextArea'] = _0x25226c, _0x4ad30f['TextInput'] = _0x24bf59, _0x4ad30f['TipManager'] = _0x523029, _0x4ad30f['Tree'] = _0x29a651, _0x4ad30f['UIComponen' + 't'] = _0xa31ae0, _0x4ad30f['UIConfig'] = _0x10bbcf, _0x4ad30f['UIEvent'] = _0x3c5059, _0x4ad30f['UIGroup'] = _0x3c7016, _0x4ad30f['UILib'] = class {
        static ['__init__']() {
        }
    }, _0x4ad30f['UIUtils'] = _0x234441, _0x4ad30f['VBox'] = _0x260d43, _0x4ad30f['VScrollBar'] = _0x3f571d, _0x4ad30f['VSlider'] = _0x2de130, _0x4ad30f['View'] = _0x18b1e4, _0x4ad30f['ViewStack'] = _0xcbf27f, _0x4ad30f['WXOpenData' + 'Viewer'] = _0x5a3991, _0x4ad30f['Widget'] = _0x2eb4bf;
}(window['Laya'] = window['Laya'] || {}, Laya);