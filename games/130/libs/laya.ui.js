!function (_0x5f2c3f, _0xa34f75, _0x591c88) {
    var _0x3c8136 = (_0x591c88['un'], _0x591c88['uns'], _0x591c88['static']), _0x49b6a8 = _0x591c88['class'], _0x3e8dc5 = _0x591c88['getset'], _0x2fbb04 = (_0x591c88['__newvec'], laya['display']['Animation']), _0x530c06 = laya['utils']['Browser'], _0x185a3a = laya['utils']['ClassUtils'], _0x1bd5f7 = laya['filters']['ColorFilte' + 'r'], _0x441c9f = laya['components']['Component'], _0x35df26 = (laya['Const'], laya['utils']['Ease']), _0x4cb8fc = laya['events']['Event'], _0x2c5523 = laya['display']['Graphics'], _0x7c2cf9 = laya['utils']['Handler'], _0x258afb = laya['net']['HttpReques' + 't'], _0x1cabd8 = laya['display']['Input'], _0x501cfb = laya['net']['Loader'], _0x14bbc0 = laya['net']['LocalStora' + 'ge'], _0x217a69 = laya['maths']['Matrix'], _0x328408 = (laya['display']['Node'], laya['maths']['Point']), _0x2007b3 = laya['maths']['Rectangle'], _0xff180f = (laya['renders']['Render'], laya['display']['Scene']), _0x1bd9ad = laya['utils']['SceneUtils'], _0x364be4 = laya['display']['Sprite'], _0x17af9b = (laya['display']['Stage'], laya['display']['Text']), _0x5eb495 = laya['resource']['Texture'], _0x40209b = laya['utils']['TimeLine'], _0x564173 = laya['utils']['Tween'], _0x4e0983 = laya['utils']['Utils'], _0x30604b = laya['utils']['WeakObject'];
    _0x591c88['interface']('laya.ui.IB' + 'ox'), _0x591c88['interface']('laya.ui.II' + 'tem'), _0x591c88['interface']('laya.ui.IS' + 'elect'), _0x591c88['interface']('laya.ui.IR' + 'ender');
    var _0xa85e7c = function () {
            function _0x3338a4() {
            }
            return _0x49b6a8(_0x3338a4, 'UIConfig'), _0x3338a4['touchScrol' + 'lEnable'] = !0x0, _0x3338a4['mouseWheel' + 'Enable'] = !0x0, _0x3338a4['showButton' + 's'] = !0x0, _0x3338a4['popupBgCol' + 'or'] = '#000000', _0x3338a4['popupBgAlp' + 'ha'] = 0.5, _0x3338a4['closeDialo' + 'gOnSide'] = !0x0, _0x3338a4;
        }(), _0x48c7cc = function () {
            function _0x1f4879() {
            }
            return _0x49b6a8(_0x1f4879, 'laya.ui.St' + 'yles'), _0x1f4879['labelColor'] = '#000000', _0x1f4879['buttonStat' + 'eNum'] = 0x3, _0x1f4879['scrollBarM' + 'inNum'] = 0xf, _0x1f4879['scrollBarD' + 'elayTime'] = 0x1f4, _0x3c8136(_0x1f4879, [
                'defaultSiz' + 'eGrid',
                function () {
                    return this['defaultSiz' + 'eGrid'] = [
                        0x4,
                        0x4,
                        0x4,
                        0x4,
                        0x0
                    ];
                },
                'labelPaddi' + 'ng',
                function () {
                    return this['labelPaddi' + 'ng'] = [
                        0x2,
                        0x2,
                        0x2,
                        0x2
                    ];
                },
                'inputLabel' + 'Padding',
                function () {
                    return this['inputLabel' + 'Padding'] = [
                        0x1,
                        0x1,
                        0x1,
                        0x3
                    ];
                },
                'buttonLabe' + 'lColors',
                function () {
                    return this['buttonLabe' + 'lColors'] = [
                        '#32556b',
                        '#32cc6b',
                        '#ff0000',
                        '#C0C0C0'
                    ];
                },
                'comboBoxIt' + 'emColors',
                function () {
                    return this['comboBoxIt' + 'emColors'] = [
                        '#5e95b6',
                        '#ffffff',
                        '#000000',
                        '#8fa4b1',
                        '#ffffff'
                    ];
                }
            ]), _0x1f4879;
        }(), _0x250d08 = function () {
            function _0x58f4a4() {
            }
            return _0x49b6a8(_0x58f4a4, 'laya.ui.UI' + 'Utils'), _0x58f4a4['fillArray'] = function (_0x4bc060, _0x1cc33f, _0x2b9c15) {
                var _0x3a7794 = _0x4bc060['concat']();
                if (_0x1cc33f)
                    for (var _0x3ef8ef = _0x1cc33f['split'](','), _0x57435f = 0x0, _0x27028e = Math['min'](_0x3a7794['length'], _0x3ef8ef['length']); _0x27028e > _0x57435f; _0x57435f++) {
                        var _0x2646fb = _0x3ef8ef[_0x57435f];
                        _0x3a7794[_0x57435f] = 'true' == _0x2646fb ? !0x0 : 'false' == _0x2646fb ? !0x1 : _0x2646fb, null != _0x2b9c15 && (_0x3a7794[_0x57435f] = _0x2b9c15(_0x2646fb));
                    }
                return _0x3a7794;
            }, _0x58f4a4['toColor'] = function (_0x2aa69d) {
                return _0x4e0983['toHexColor'](_0x2aa69d);
            }, _0x58f4a4['gray'] = function (_0x485548, _0x4a659c) {
                void 0x0 === _0x4a659c && (_0x4a659c = !0x0), _0x4a659c ? _0x58f4a4['addFilter'](_0x485548, _0x58f4a4['grayFilter']) : _0x58f4a4['clearFilte' + 'r'](_0x485548, _0x1bd5f7);
            }, _0x58f4a4['addFilter'] = function (_0x4ed5be, _0x393019) {
                var _0x13ec83 = _0x4ed5be['filters'] || [];
                _0x13ec83['push'](_0x393019), _0x4ed5be['filters'] = _0x13ec83;
            }, _0x58f4a4['clearFilte' + 'r'] = function (_0x552698, _0x446d2d) {
                var _0x2eb8f9 = _0x552698['filters'];
                if (null != _0x2eb8f9 && _0x2eb8f9['length'] > 0x0) {
                    for (var _0x597d33 = _0x2eb8f9['length'] - 0x1; _0x597d33 > -0x1; _0x597d33--) {
                        var _0x27242d = _0x2eb8f9[_0x597d33];
                        _0x591c88['__typeof'](_0x27242d, _0x446d2d) && _0x2eb8f9['splice'](_0x597d33, 0x1);
                    }
                    _0x552698['filters'] = _0x2eb8f9;
                }
            }, _0x58f4a4['_getReplac' + 'eStr'] = function (_0x16fd98) {
                return _0x58f4a4['escapeSequ' + 'ence'][_0x16fd98];
            }, _0x58f4a4['adptString'] = function (_0x298d89) {
                return _0x298d89['replace'](/\\(\w)/g, _0x58f4a4['_getReplac' + 'eStr']);
            }, _0x58f4a4['getBindFun'] = function (_0x55f371) {
                var _0x199e7a = _0x58f4a4['_funMap']['get'](_0x55f371);
                if (null == _0x199e7a) {
                    var _0xc1be8b = '\x22' + _0x55f371 + '\x22';
                    _0xc1be8b = _0xc1be8b['replace'](/^"\${|}"$/g, '')['replace'](/\${/g, '\x22+')['replace'](/}/g, '+\x22');
                    var _0x3efd26 = '(function(' + 'data){if(d' + 'ata==null)' + 'return;wit' + 'h(data){tr' + 'y{\x0areturn\x20' + _0xc1be8b + ('\x0a}catch(e)' + '{}}})');
                    _0x199e7a = _0x591c88['_runScript'](_0x3efd26), _0x58f4a4['_funMap']['set'](_0x55f371, _0x199e7a);
                }
                return _0x199e7a;
            }, _0x3c8136(_0x58f4a4, [
                'grayFilter',
                function () {
                    return this['grayFilter'] = new _0x1bd5f7([
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
                    ]);
                },
                'escapeSequ' + 'ence',
                function () {
                    return this['escapeSequ' + 'ence'] = {
                        '\x5cn': '\x0a',
                        '\x5ct': '\x09'
                    };
                },
                '_funMap',
                function () {
                    return this['_funMap'] = new _0x30604b();
                }
            ]), _0x58f4a4;
        }(), _0x50d197 = function (_0x1530b5) {
            function _0xe1b575() {
                _0xe1b575['__super']['call'](this), this['_top'] = NaN, this['_bottom'] = NaN, this['_left'] = NaN, this['_right'] = NaN, this['_centerX'] = NaN, this['_centerY'] = NaN;
            }
            _0x49b6a8(_0xe1b575, 'laya.ui.Wi' + 'dget', _0x1530b5);
            var _0x50ff3c = _0xe1b575['prototype'];
            return _0x50ff3c['onReset'] = function () {
                this['_top'] = this['_bottom'] = this['_left'] = this['_right'] = this['_centerX'] = this['_centerY'] = NaN;
            }, _0x50ff3c['_onEnable'] = function () {
                this['owner']['parent'] ? this['_onAdded']() : this['owner']['once']('added', this, this['_onAdded']);
            }, _0x50ff3c['_onDisable'] = function () {
                this['owner']['off']('added', this, this['_onAdded']), this['owner']['parent'] && this['owner']['parent']['off']('resize', this, this['_onParentR' + 'esize']);
            }, _0x50ff3c['_onAdded'] = function () {
                this['owner']['parent'] && this['owner']['parent']['on']('resize', this, this['_onParentR' + 'esize']), this['resetLayou' + 'tX'](), this['resetLayou' + 'tY']();
            }, _0x50ff3c['_onParentR' + 'esize'] = function () {
                (this['resetLayou' + 'tX']() || this['resetLayou' + 'tY']()) && this['owner']['event']('resize');
            }, _0x50ff3c['resetLayou' + 'tX'] = function () {
                var _0x52e996 = this['owner'];
                if (!_0x52e996)
                    return !0x1;
                var _0x2b67e6 = _0x52e996['parent'];
                if (_0x2b67e6) {
                    if (isNaN(this['centerX'])) {
                        if (isNaN(this['left']))
                            isNaN(this['right']) || (_0x52e996['x'] = Math['round'](_0x2b67e6['width'] - _0x52e996['displayWid' + 'th'] - this['right'] + _0x52e996['pivotX'] * _0x52e996['scaleX']));
                        else {
                            if (_0x52e996['x'] = Math['round'](this['left'] + _0x52e996['pivotX'] * _0x52e996['scaleX']), !isNaN(this['right'])) {
                                var _0x29567f = (_0x2b67e6['_width'] - this['left'] - this['right']) / (_0x52e996['scaleX'] || 0.01);
                                if (_0x29567f != _0x52e996['width'])
                                    return _0x52e996['width'] = _0x29567f, !0x0;
                            }
                        }
                    } else
                        _0x52e996['x'] = Math['round'](0.5 * (_0x2b67e6['width'] - _0x52e996['displayWid' + 'th']) + this['centerX'] + _0x52e996['pivotX'] * _0x52e996['scaleX']);
                }
                return !0x1;
            }, _0x50ff3c['resetLayou' + 'tY'] = function () {
                var _0x55e1a3 = this['owner'];
                if (!_0x55e1a3)
                    return !0x1;
                var _0x23d7c2 = _0x55e1a3['parent'];
                if (_0x23d7c2) {
                    if (isNaN(this['centerY'])) {
                        if (isNaN(this['top']))
                            isNaN(this['bottom']) || (_0x55e1a3['y'] = Math['round'](_0x23d7c2['height'] - _0x55e1a3['displayHei' + 'ght'] - this['bottom'] + _0x55e1a3['pivotY'] * _0x55e1a3['scaleY']));
                        else {
                            if (_0x55e1a3['y'] = Math['round'](this['top'] + _0x55e1a3['pivotY'] * _0x55e1a3['scaleY']), !isNaN(this['bottom'])) {
                                var _0x276441 = (_0x23d7c2['_height'] - this['top'] - this['bottom']) / (_0x55e1a3['scaleY'] || 0.01);
                                if (_0x276441 != _0x55e1a3['height'])
                                    return _0x55e1a3['height'] = _0x276441, !0x0;
                            }
                        }
                    } else
                        _0x55e1a3['y'] = Math['round'](0.5 * (_0x23d7c2['height'] - _0x55e1a3['displayHei' + 'ght']) + this['centerY'] + _0x55e1a3['pivotY'] * _0x55e1a3['scaleY']);
                }
                return !0x1;
            }, _0x50ff3c['resetLayou' + 't'] = function () {
                this['owner'] && (this['resetLayou' + 'tX'](), this['resetLayou' + 'tY']());
            }, _0x3e8dc5(0x0, _0x50ff3c, 'centerX', function () {
                return this['_centerX'];
            }, function (_0x1ee353) {
                this['_centerX'] != _0x1ee353 && (this['_centerX'] = _0x1ee353, this['resetLayou' + 'tX']());
            }), _0x3e8dc5(0x0, _0x50ff3c, 'top', function () {
                return this['_top'];
            }, function (_0xb66b33) {
                this['_top'] != _0xb66b33 && (this['_top'] = _0xb66b33, this['resetLayou' + 'tY']());
            }), _0x3e8dc5(0x0, _0x50ff3c, 'bottom', function () {
                return this['_bottom'];
            }, function (_0x1ef917) {
                this['_bottom'] != _0x1ef917 && (this['_bottom'] = _0x1ef917, this['resetLayou' + 'tY']());
            }), _0x3e8dc5(0x0, _0x50ff3c, 'left', function () {
                return this['_left'];
            }, function (_0x4567b1) {
                this['_left'] != _0x4567b1 && (this['_left'] = _0x4567b1, this['resetLayou' + 'tX']());
            }), _0x3e8dc5(0x0, _0x50ff3c, 'right', function () {
                return this['_right'];
            }, function (_0x32249c) {
                this['_right'] != _0x32249c && (this['_right'] = _0x32249c, this['resetLayou' + 'tX']());
            }), _0x3e8dc5(0x0, _0x50ff3c, 'centerY', function () {
                return this['_centerY'];
            }, function (_0x2d0610) {
                this['_centerY'] != _0x2d0610 && (this['_centerY'] = _0x2d0610, this['resetLayou' + 'tY']());
            }), _0x3c8136(_0xe1b575, [
                'EMPTY',
                function () {
                    return this['EMPTY'] = new _0xe1b575();
                }
            ]), _0xe1b575;
        }(_0x441c9f), _0x4b5e3d = (function (_0x41fcb8) {
            function _0x2b1825() {
                _0x2b1825['__super']['call'](this);
            }
            return _0x49b6a8(_0x2b1825, 'laya.ui.UI' + 'Event', _0x41fcb8), _0x2b1825['SHOW_TIP'] = 'showtip', _0x2b1825['HIDE_TIP'] = 'hidetip', _0x2b1825;
        }(_0x4cb8fc), function (_0x251edd) {
            function _0x334d90() {
                this['autoCacheC' + 'md'] = !0x0, this['_width'] = 0x0, this['_height'] = 0x0, this['_source'] = null, this['_sizeGrid'] = null, this['_isChanged'] = !0x1, this['_offset'] = null, _0x334d90['__super']['call'](this);
            }
            _0x49b6a8(_0x334d90, 'laya.ui.Au' + 'toBitmap', _0x251edd);
            var _0x34730b = _0x334d90['prototype'];
            return _0x34730b['destroy'] = function () {
                _0x251edd['prototype']['destroy']['call'](this), this['_source'] = null, this['_sizeGrid'] = null, this['_offset'] = null;
            }, _0x34730b['_setChange' + 'd'] = function () {
                this['_isChanged'] || (this['_isChanged'] = !0x0, _0x591c88['timer']['callLater'](this, this['changeSour' + 'ce']));
            }, _0x34730b['changeSour' + 'ce'] = function () {
                this['_isChanged'] = !0x1;
                var _0x161e55 = this['_source'];
                if (_0x161e55 && _0x161e55['bitmap']) {
                    var _0x398dfb = this['width'], _0x5b788a = this['height'], _0x337417 = this['_sizeGrid'], _0x3ffc44 = _0x161e55['sourceWidt' + 'h'], _0x20ed6a = _0x161e55['sourceHeig' + 'ht'];
                    if (!_0x337417 || _0x3ffc44 === _0x398dfb && _0x20ed6a === _0x5b788a)
                        this['clear'](), this['drawTextur' + 'e'](_0x161e55, this['_offset'] ? this['_offset'][0x0] : 0x0, this['_offset'] ? this['_offset'][0x1] : 0x0, _0x398dfb, _0x5b788a);
                    else {
                        this['clear']();
                        var _0x8ffa5a = _0x337417[0x0], _0x2ed45a = _0x337417[0x1], _0x117e58 = _0x337417[0x2], _0x1c4ae6 = _0x337417[0x3], _0x4f9b08 = _0x337417[0x4], _0xe4ae49 = !0x1;
                        if (_0x398dfb == _0x3ffc44 && (_0x1c4ae6 = _0x2ed45a = 0x0), _0x5b788a == _0x20ed6a && (_0x8ffa5a = _0x117e58 = 0x0), _0x1c4ae6 + _0x2ed45a > _0x398dfb) {
                            var _0x26ff2a = _0x398dfb;
                            _0xe4ae49 = !0x0, _0x398dfb = _0x1c4ae6 + _0x2ed45a, this['save'](), this['clipRect'](0x0, 0x0, _0x26ff2a, _0x5b788a);
                        }
                        _0x1c4ae6 && _0x8ffa5a && this['drawImage'](_0x334d90['getTexture'](_0x161e55, 0x0, 0x0, _0x1c4ae6, _0x8ffa5a), 0x0, 0x0, _0x1c4ae6, _0x8ffa5a), _0x2ed45a && _0x8ffa5a && this['drawImage'](_0x334d90['getTexture'](_0x161e55, _0x3ffc44 - _0x2ed45a, 0x0, _0x2ed45a, _0x8ffa5a), _0x398dfb - _0x2ed45a, 0x0, _0x2ed45a, _0x8ffa5a), _0x1c4ae6 && _0x117e58 && this['drawImage'](_0x334d90['getTexture'](_0x161e55, 0x0, _0x20ed6a - _0x117e58, _0x1c4ae6, _0x117e58), 0x0, _0x5b788a - _0x117e58, _0x1c4ae6, _0x117e58), _0x2ed45a && _0x117e58 && this['drawImage'](_0x334d90['getTexture'](_0x161e55, _0x3ffc44 - _0x2ed45a, _0x20ed6a - _0x117e58, _0x2ed45a, _0x117e58), _0x398dfb - _0x2ed45a, _0x5b788a - _0x117e58, _0x2ed45a, _0x117e58), _0x8ffa5a && this['drawBitmap'](_0x4f9b08, _0x334d90['getTexture'](_0x161e55, _0x1c4ae6, 0x0, _0x3ffc44 - _0x1c4ae6 - _0x2ed45a, _0x8ffa5a), _0x1c4ae6, 0x0, _0x398dfb - _0x1c4ae6 - _0x2ed45a, _0x8ffa5a), _0x117e58 && this['drawBitmap'](_0x4f9b08, _0x334d90['getTexture'](_0x161e55, _0x1c4ae6, _0x20ed6a - _0x117e58, _0x3ffc44 - _0x1c4ae6 - _0x2ed45a, _0x117e58), _0x1c4ae6, _0x5b788a - _0x117e58, _0x398dfb - _0x1c4ae6 - _0x2ed45a, _0x117e58), _0x1c4ae6 && this['drawBitmap'](_0x4f9b08, _0x334d90['getTexture'](_0x161e55, 0x0, _0x8ffa5a, _0x1c4ae6, _0x20ed6a - _0x8ffa5a - _0x117e58), 0x0, _0x8ffa5a, _0x1c4ae6, _0x5b788a - _0x8ffa5a - _0x117e58), _0x2ed45a && this['drawBitmap'](_0x4f9b08, _0x334d90['getTexture'](_0x161e55, _0x3ffc44 - _0x2ed45a, _0x8ffa5a, _0x2ed45a, _0x20ed6a - _0x8ffa5a - _0x117e58), _0x398dfb - _0x2ed45a, _0x8ffa5a, _0x2ed45a, _0x5b788a - _0x8ffa5a - _0x117e58), this['drawBitmap'](_0x4f9b08, _0x334d90['getTexture'](_0x161e55, _0x1c4ae6, _0x8ffa5a, _0x3ffc44 - _0x1c4ae6 - _0x2ed45a, _0x20ed6a - _0x8ffa5a - _0x117e58), _0x1c4ae6, _0x8ffa5a, _0x398dfb - _0x1c4ae6 - _0x2ed45a, _0x5b788a - _0x8ffa5a - _0x117e58), _0xe4ae49 && this['restore']();
                    }
                    this['_repaint']();
                }
            }, _0x34730b['drawBitmap'] = function (_0x22e611, _0x42fe6a, _0x983df7, _0x5f3368, _0x20b731, _0x3d5845) {
                void 0x0 === _0x20b731 && (_0x20b731 = 0x0), void 0x0 === _0x3d5845 && (_0x3d5845 = 0x0), 0.1 > _0x20b731 || 0.1 > _0x3d5845 || (!_0x22e611 || _0x42fe6a['width'] == _0x20b731 && _0x42fe6a['height'] == _0x3d5845 ? this['drawImage'](_0x42fe6a, _0x983df7, _0x5f3368, _0x20b731, _0x3d5845) : this['fillTextur' + 'e'](_0x42fe6a, _0x983df7, _0x5f3368, _0x20b731, _0x3d5845));
            }, _0x3e8dc5(0x0, _0x34730b, 'sizeGrid', function () {
                return this['_sizeGrid'];
            }, function (_0x405ad7) {
                this['_sizeGrid'] = _0x405ad7, this['_setChange' + 'd']();
            }), _0x3e8dc5(0x0, _0x34730b, 'width', function () {
                return this['_width'] ? this['_width'] : this['_source'] ? this['_source']['sourceWidt' + 'h'] : 0x0;
            }, function (_0x7930) {
                this['_width'] != _0x7930 && (this['_width'] = _0x7930, this['_setChange' + 'd']());
            }), _0x3e8dc5(0x0, _0x34730b, 'height', function () {
                return this['_height'] ? this['_height'] : this['_source'] ? this['_source']['sourceHeig' + 'ht'] : 0x0;
            }, function (_0x51c7ab) {
                this['_height'] != _0x51c7ab && (this['_height'] = _0x51c7ab, this['_setChange' + 'd']());
            }), _0x3e8dc5(0x0, _0x34730b, 'source', function () {
                return this['_source'];
            }, function (_0x52d519) {
                _0x52d519 ? (this['_source'] = _0x52d519, this['_setChange' + 'd']()) : (this['_source'] = null, this['clear']());
            }), _0x334d90['getTexture'] = function (_0x6da62, _0x1748c3, _0xbd9a4e, _0x2fd0c2, _0x19b954) {
                0x0 >= _0x2fd0c2 && (_0x2fd0c2 = 0x1), 0x0 >= _0x19b954 && (_0x19b954 = 0x1), _0x6da62['$_GID'] || (_0x6da62['$_GID'] = _0x4e0983['getGID']());
                var _0x4b093d;
                return _0x4b093d && _0x4b093d['_getSource']() || (_0x4b093d = _0x5eb495['createFrom' + 'Texture'](_0x6da62, _0x1748c3, _0xbd9a4e, _0x2fd0c2, _0x19b954)), _0x4b093d;
            }, _0x334d90;
        }(_0x2c5523)), _0x291fc3 = function (_0x3c0312) {
            function _0x442bd3() {
                this['_dataSourc' + 'e'] = null, this['_toolTip'] = null, this['_tag'] = null, this['_disabled'] = !0x1, this['_gray'] = !0x1, _0x442bd3['__super']['call'](this), this['_anchorX'] = NaN, this['_anchorY'] = NaN, this['_widget'] = _0x50d197['EMPTY'], this['preinitial' + 'ize'](), this['createChil' + 'dren'](), this['initialize']();
            }
            _0x49b6a8(_0x442bd3, 'laya.ui.UI' + 'Component', _0x3c0312);
            var _0x4c22f3 = _0x442bd3['prototype'];
            return _0x4c22f3['destroy'] = function (_0x5e054e) {
                void 0x0 === _0x5e054e && (_0x5e054e = !0x0), _0x3c0312['prototype']['destroy']['call'](this, _0x5e054e), this['_dataSourc' + 'e'] = null, this['_tag'] = null, this['_toolTip'] = null;
            }, _0x4c22f3['preinitial' + 'ize'] = function () {
            }, _0x4c22f3['createChil' + 'dren'] = function () {
            }, _0x4c22f3['initialize'] = function () {
            }, _0x4c22f3['measureWid' + 'th'] = function () {
                var _0x3afdd6 = 0x0;
                this['commitMeas' + 'ure']();
                for (var _0x2242ee = this['numChildre' + 'n'] - 0x1; _0x2242ee > -0x1; _0x2242ee--) {
                    var _0x41907b = this['getChildAt'](_0x2242ee);
                    _0x41907b['_visible'] && (_0x3afdd6 = Math['max'](_0x41907b['_x'] + _0x41907b['width'] * _0x41907b['scaleX'], _0x3afdd6));
                }
                return _0x3afdd6;
            }, _0x4c22f3['commitMeas' + 'ure'] = function () {
            }, _0x4c22f3['measureHei' + 'ght'] = function () {
                var _0x5724ee = 0x0;
                this['commitMeas' + 'ure']();
                for (var _0x23a21e = this['numChildre' + 'n'] - 0x1; _0x23a21e > -0x1; _0x23a21e--) {
                    var _0x246237 = this['getChildAt'](_0x23a21e);
                    _0x246237['_visible'] && (_0x5724ee = Math['max'](_0x246237['_y'] + _0x246237['height'] * _0x246237['scaleY'], _0x5724ee));
                }
                return _0x5724ee;
            }, _0x4c22f3['_sizeChang' + 'ed'] = function () {
                isNaN(this['_anchorX']) || (this['pivotX'] = this['anchorX'] * this['width']), isNaN(this['_anchorY']) || (this['pivotY'] = this['anchorY'] * this['height']), this['event']('resize'), this['_widget'] !== _0x50d197['EMPTY'] && this['_widget']['resetLayou' + 't']();
            }, _0x4c22f3['onMouseOve' + 'r'] = function (_0x6b9d9c) {
                _0x591c88['stage']['event']('showtip', this['_toolTip']);
            }, _0x4c22f3['onMouseOut'] = function (_0x245f44) {
                _0x591c88['stage']['event']('hidetip', this['_toolTip']);
            }, _0x4c22f3['_getWidget'] = function () {
                return this['_widget'] === _0x50d197['EMPTY'] && (this['_widget'] = this['addCompone' + 'nt'](_0x50d197)), this['_widget'];
            }, _0x4c22f3['onCompResi' + 'ze'] = function () {
                this['_sizeChang' + 'ed']();
            }, _0x4c22f3['_childChan' + 'ged'] = function (_0x21a10b) {
                this['callLater'](this['_sizeChang' + 'ed']), _0x3c0312['prototype']['_childChan' + 'ged']['call'](this, _0x21a10b);
            }, _0x3e8dc5(0x0, _0x4c22f3, 'centerY', function () {
                return this['_widget']['centerY'];
            }, function (_0x5a55b0) {
                _0x5a55b0 != this['_widget']['centerY'] && (this['_getWidget']()['centerY'] = _0x5a55b0);
            }), _0x3e8dc5(0x0, _0x4c22f3, 'width', function () {
                return this['_width'] ? this['_width'] : this['measureWid' + 'th']();
            }, function (_0x376199) {
                _0x591c88['superGet'](_0x364be4, this, 'width') != _0x376199 && (_0x591c88['superSet'](_0x364be4, this, 'width', _0x376199), this['callLater'](this['_sizeChang' + 'ed']));
            }), _0x3e8dc5(0x0, _0x4c22f3, 'bottom', function () {
                return this['_widget']['bottom'];
            }, function (_0x4dee5b) {
                _0x4dee5b != this['_widget']['bottom'] && (this['_getWidget']()['bottom'] = _0x4dee5b);
            }), _0x3e8dc5(0x0, _0x4c22f3, 'height', function () {
                return this['_height'] ? this['_height'] : this['measureHei' + 'ght']();
            }, function (_0x52b61d) {
                _0x591c88['superGet'](_0x364be4, this, 'height') != _0x52b61d && (_0x591c88['superSet'](_0x364be4, this, 'height', _0x52b61d), this['callLater'](this['_sizeChang' + 'ed']));
            }), _0x3e8dc5(0x0, _0x4c22f3, 'left', function () {
                return this['_widget']['left'];
            }, function (_0x41900b) {
                _0x41900b != this['_widget']['left'] && (this['_getWidget']()['left'] = _0x41900b);
            }), _0x3e8dc5(0x0, _0x4c22f3, 'dataSource', function () {
                return this['_dataSourc' + 'e'];
            }, function (_0x1f2790) {
                this['_dataSourc' + 'e'] = _0x1f2790;
                for (var _0x5b4d37 in this['_dataSourc' + 'e'])
                    this['hasOwnProp' + 'erty'](_0x5b4d37) && 'function' != typeof this[_0x5b4d37] && (this[_0x5b4d37] = this['_dataSourc' + 'e'][_0x5b4d37]);
            }), _0x3e8dc5(0x0, _0x4c22f3, 'centerX', function () {
                return this['_widget']['centerX'];
            }, function (_0x228b61) {
                _0x228b61 != this['_widget']['centerX'] && (this['_getWidget']()['centerX'] = _0x228b61);
            }), _0x3e8dc5(0x0, _0x4c22f3, 'top', function () {
                return this['_widget']['top'];
            }, function (_0x146eae) {
                _0x146eae != this['_widget']['top'] && (this['_getWidget']()['top'] = _0x146eae);
            }), _0x3e8dc5(0x0, _0x4c22f3, 'right', function () {
                return this['_widget']['right'];
            }, function (_0x27c185) {
                _0x27c185 != this['_widget']['right'] && (this['_getWidget']()['right'] = _0x27c185);
            }), _0x3e8dc5(0x0, _0x4c22f3, 'tag', function () {
                return this['_tag'];
            }, function (_0x48d787) {
                this['_tag'] = _0x48d787;
            }), _0x3e8dc5(0x0, _0x4c22f3, 'toolTip', function () {
                return this['_toolTip'];
            }, function (_0x1430a1) {
                this['_toolTip'] != _0x1430a1 && (this['_toolTip'] = _0x1430a1, null != _0x1430a1 ? (this['on']('mouseover', this, this['onMouseOve' + 'r']), this['on']('mouseout', this, this['onMouseOut'])) : (this['off']('mouseover', this, this['onMouseOve' + 'r']), this['off']('mouseout', this, this['onMouseOut'])));
            }), _0x3e8dc5(0x0, _0x4c22f3, 'gray', function () {
                return this['_gray'];
            }, function (_0x22a16c) {
                _0x22a16c !== this['_gray'] && (this['_gray'] = _0x22a16c, _0x250d08['gray'](this, _0x22a16c));
            }), _0x3e8dc5(0x0, _0x4c22f3, 'disabled', function () {
                return this['_disabled'];
            }, function (_0x540a1d) {
                _0x540a1d !== this['_disabled'] && (this['gray'] = this['_disabled'] = _0x540a1d, this['mouseEnabl' + 'ed'] = !_0x540a1d);
            }), _0x3e8dc5(0x0, _0x4c22f3, 'scaleX', _0x3c0312['prototype']['_$get_scal' + 'eX'], function (_0x42ec56) {
                _0x591c88['superGet'](_0x364be4, this, 'scaleX') != _0x42ec56 && (_0x591c88['superSet'](_0x364be4, this, 'scaleX', _0x42ec56), this['event']('resize'));
            }), _0x3e8dc5(0x0, _0x4c22f3, 'scaleY', _0x3c0312['prototype']['_$get_scal' + 'eY'], function (_0x1e7e98) {
                _0x591c88['superGet'](_0x364be4, this, 'scaleY') != _0x1e7e98 && (_0x591c88['superSet'](_0x364be4, this, 'scaleY', _0x1e7e98), this['event']('resize'));
            }), _0x3e8dc5(0x0, _0x4c22f3, 'anchorX', function () {
                return this['_anchorX'];
            }, function (_0x356d3f) {
                this['_anchorX'] != _0x356d3f && (this['_anchorX'] = _0x356d3f, this['callLater'](this['_sizeChang' + 'ed']));
            }), _0x3e8dc5(0x0, _0x4c22f3, 'anchorY', function () {
                return this['_anchorY'];
            }, function (_0x17ca89) {
                this['_anchorY'] != _0x17ca89 && (this['_anchorY'] = _0x17ca89, this['callLater'](this['_sizeChang' + 'ed']));
            }), _0x442bd3;
        }(_0x364be4), _0x2a8871 = function (_0x37de4f) {
            function _0x1b7130() {
                this['lockLayer'] = null, this['popupEffec' + 't'] = function (_0x5f5c7c) {
                    _0x5f5c7c['scale'](0x1, 0x1), _0x5f5c7c['_effectTwe' + 'en'] = _0x564173['from'](_0x5f5c7c, {
                        'x': _0x591c88['stage']['width'] / 0x2,
                        'y': _0x591c88['stage']['height'] / 0x2,
                        'scaleX': 0x0,
                        'scaleY': 0x0
                    }, 0x12c, _0x35df26['backOut'], _0x7c2cf9['create'](this, this['doOpen'], [_0x5f5c7c]), 0x0, !0x1, !0x1);
                }, this['closeEffec' + 't'] = function (_0xe95c26) {
                    _0xe95c26['_effectTwe' + 'en'] = _0x564173['to'](_0xe95c26, {
                        'x': _0x591c88['stage']['width'] / 0x2,
                        'y': _0x591c88['stage']['height'] / 0x2,
                        'scaleX': 0x0,
                        'scaleY': 0x0
                    }, 0x12c, _0x35df26['strongOut'], _0x7c2cf9['create'](this, this['doClose'], [_0xe95c26]), 0x0, !0x1, !0x1);
                }, _0x1b7130['__super']['call'](this), this['maskLayer'] = new _0x364be4(), this['popupEffec' + 'tHandler'] = new _0x7c2cf9(this, this['popupEffec' + 't']), this['closeEffec' + 'tHandler'] = new _0x7c2cf9(this, this['closeEffec' + 't']), this['mouseEnabl' + 'ed'] = this['maskLayer']['mouseEnabl' + 'ed'] = !0x0, this['zOrder'] = 0x3e8, _0x591c88['stage']['addChild'](this), _0x591c88['stage']['on']('resize', this, this['_onResize']), _0xa85e7c['closeDialo' + 'gOnSide'] && this['maskLayer']['on']('click', this, this['_closeOnSi' + 'de']), this['_onResize'](null);
            }
            _0x49b6a8(_0x1b7130, 'laya.ui.Di' + 'alogManage' + 'r', _0x37de4f);
            var _0x1f3c36 = _0x1b7130['prototype'];
            return _0x1f3c36['_closeOnSi' + 'de'] = function () {
                var _0x430896 = this['getChildAt'](this['numChildre' + 'n'] - 0x1);
                _0x430896 instanceof laya['ui']['Dialog'] && _0x430896['close']();
            }, _0x1f3c36['setLockVie' + 'w'] = function (_0x12a3ac) {
                this['lockLayer'] || (this['lockLayer'] = new _0x51befc(), this['lockLayer']['mouseEnabl' + 'ed'] = !0x0, this['lockLayer']['size'](_0x591c88['stage']['width'], _0x591c88['stage']['height'])), this['lockLayer']['removeChil' + 'dren'](), _0x12a3ac && (_0x12a3ac['centerX'] = _0x12a3ac['centerY'] = 0x0, this['lockLayer']['addChild'](_0x12a3ac));
            }, _0x1f3c36['_onResize'] = function (_0x4ecc2a) {
                var _0x427375 = this['maskLayer']['width'] = _0x591c88['stage']['width'], _0x1216c1 = this['maskLayer']['height'] = _0x591c88['stage']['height'];
                this['lockLayer'] && this['lockLayer']['size'](_0x427375, _0x1216c1), this['maskLayer']['graphics']['clear'](!0x0), this['maskLayer']['graphics']['drawRect'](0x0, 0x0, _0x427375, _0x1216c1, _0xa85e7c['popupBgCol' + 'or']), this['maskLayer']['alpha'] = _0xa85e7c['popupBgAlp' + 'ha'];
                for (var _0x46ed48 = this['numChildre' + 'n'] - 0x1; _0x46ed48 > -0x1; _0x46ed48--) {
                    var _0x189353 = this['getChildAt'](_0x46ed48);
                    _0x189353['isPopupCen' + 'ter'] && this['_centerDia' + 'log'](_0x189353);
                }
            }, _0x1f3c36['_centerDia' + 'log'] = function (_0x4a7b33) {
                _0x4a7b33['x'] = Math['round']((_0x591c88['stage']['width'] - _0x4a7b33['width'] >> 0x1) + _0x4a7b33['pivotX']), _0x4a7b33['y'] = Math['round']((_0x591c88['stage']['height'] - _0x4a7b33['height'] >> 0x1) + _0x4a7b33['pivotY']);
            }, _0x1f3c36['open'] = function (_0x4532eb, _0x44ee35, _0x52560c) {
                void 0x0 === _0x44ee35 && (_0x44ee35 = !0x1), void 0x0 === _0x52560c && (_0x52560c = !0x1), _0x44ee35 && this['_closeAll'](), this['_clearDial' + 'ogEffect'](_0x4532eb), _0x4532eb['isPopupCen' + 'ter'] && this['_centerDia' + 'log'](_0x4532eb), this['addChild'](_0x4532eb), (_0x4532eb['isModal'] || this['_getBit'](0x20)) && _0x591c88['timer']['callLater'](this, this['_checkMask']), _0x52560c && null != _0x4532eb['popupEffec' + 't'] ? _0x4532eb['popupEffec' + 't']['runWith'](_0x4532eb) : this['doOpen'](_0x4532eb), this['event']('open');
            }, _0x1f3c36['_clearDial' + 'ogEffect'] = function (_0x397415) {
                _0x397415['_effectTwe' + 'en'] && (_0x564173['clear'](_0x397415['_effectTwe' + 'en']), _0x397415['_effectTwe' + 'en'] = null);
            }, _0x1f3c36['doOpen'] = function (_0x87841d) {
                _0x87841d['onOpened'](_0x87841d['_param']);
            }, _0x1f3c36['lock'] = function (_0x59820a) {
                this['lockLayer'] && (_0x59820a ? this['addChild'](this['lockLayer']) : this['lockLayer']['removeSelf']());
            }, _0x1f3c36['close'] = function (_0x2d4f26) {
                this['_clearDial' + 'ogEffect'](_0x2d4f26), _0x2d4f26['isShowEffe' + 'ct'] && null != _0x2d4f26['closeEffec' + 't'] ? _0x2d4f26['closeEffec' + 't']['runWith']([_0x2d4f26]) : this['doClose'](_0x2d4f26), this['event']('close');
            }, _0x1f3c36['doClose'] = function (_0x37c1e0) {
                _0x37c1e0['removeSelf'](), _0x37c1e0['isModal'] && this['_checkMask'](), _0x37c1e0['closeHandl' + 'er'] && _0x37c1e0['closeHandl' + 'er']['runWith'](_0x37c1e0['closeType']), _0x37c1e0['onClosed'](_0x37c1e0['closeType']), _0x37c1e0['autoDestro' + 'yAtClosed'] && _0x37c1e0['destroy']();
            }, _0x1f3c36['closeAll'] = function () {
                this['_closeAll'](), this['event']('close');
            }, _0x1f3c36['_closeAll'] = function () {
                for (var _0x10b955 = this['numChildre' + 'n'] - 0x1; _0x10b955 > -0x1; _0x10b955--) {
                    var _0x21c29e = this['getChildAt'](_0x10b955);
                    _0x21c29e && null != _0x21c29e['close'] && this['doClose'](_0x21c29e);
                }
            }, _0x1f3c36['getDialogs' + 'ByGroup'] = function (_0xc32c93) {
                for (var _0x43aadc = [], _0x34ec0e = this['numChildre' + 'n'] - 0x1; _0x34ec0e > -0x1; _0x34ec0e--) {
                    var _0x44f984 = this['getChildAt'](_0x34ec0e);
                    _0x44f984 && _0x44f984['group'] === _0xc32c93 && _0x43aadc['push'](_0x44f984);
                }
                return _0x43aadc;
            }, _0x1f3c36['closeByGro' + 'up'] = function (_0x48e32c) {
                for (var _0x7b9dc7 = [], _0x7a0bab = this['numChildre' + 'n'] - 0x1; _0x7a0bab > -0x1; _0x7a0bab--) {
                    var _0x393444 = this['getChildAt'](_0x7a0bab);
                    _0x393444 && _0x393444['group'] === _0x48e32c && (_0x393444['close'](), _0x7b9dc7['push'](_0x393444));
                }
                return _0x7b9dc7;
            }, _0x1f3c36['_checkMask'] = function () {
                this['maskLayer']['removeSelf']();
                for (var _0x59c244 = this['numChildre' + 'n'] - 0x1; _0x59c244 > -0x1; _0x59c244--) {
                    var _0x3d4af9 = this['getChildAt'](_0x59c244);
                    if (_0x3d4af9 && _0x3d4af9['isModal'])
                        return void this['addChildAt'](this['maskLayer'], _0x59c244);
                }
            }, _0x1b7130;
        }(_0x364be4), _0x4ddaee = function (_0x52c9f6) {
            function _0x58a667() {
                this['_watchMap'] = {}, this['_widget'] = null, this['_dataSourc' + 'e'] = null, this['_anchorX'] = NaN, this['_anchorY'] = NaN, this['_widget'] = _0x50d197['EMPTY'], _0x58a667['__super']['call'](this);
            }
            _0x49b6a8(_0x58a667, 'laya.ui.Vi' + 'ew', _0x52c9f6);
            var _0x469bbd = _0x58a667['prototype'];
            return _0x469bbd['destroy'] = function (_0x393a31) {
                void 0x0 === _0x393a31 && (_0x393a31 = !0x0), this['_watchMap'] = null, _0x52c9f6['prototype']['destroy']['call'](this, _0x393a31);
            }, _0x469bbd['changeData'] = function (_0x4c881a) {
                var _0x4821c4 = this['_watchMap'][_0x4c881a];
                if (_0x4821c4)
                    for (var _0x3cf6c7 = 0x0, _0x4037dd = _0x4821c4['length']; _0x4037dd > _0x3cf6c7; _0x3cf6c7++) {
                        var _0x58e2b8 = _0x4821c4[_0x3cf6c7];
                        _0x58e2b8['exe'](this);
                    }
            }, _0x469bbd['_sizeChang' + 'ed'] = function () {
                isNaN(this['_anchorX']) || (this['pivotX'] = this['anchorX'] * this['width']), isNaN(this['_anchorY']) || (this['pivotY'] = this['anchorY'] * this['height']), this['event']('resize');
            }, _0x469bbd['_getWidget'] = function () {
                return this['_widget'] === _0x50d197['EMPTY'] && (this['_widget'] = this['addCompone' + 'nt'](_0x50d197)), this['_widget'];
            }, _0x469bbd['loadUI'] = function (_0x206c61) {
                var _0x43ff1d = _0x58a667['uiMap'][_0x206c61];
                _0x58a667['uiMap'] && this['createView'](_0x43ff1d);
            }, _0x3e8dc5(0x0, _0x469bbd, 'anchorX', function () {
                return this['_anchorX'];
            }, function (_0xe0036e) {
                this['_anchorX'] != _0xe0036e && (this['_anchorX'] = _0xe0036e, this['callLater'](this['_sizeChang' + 'ed']));
            }), _0x3e8dc5(0x0, _0x469bbd, 'centerX', function () {
                return this['_widget']['centerX'];
            }, function (_0x305bad) {
                _0x305bad != this['_widget']['centerX'] && (this['_getWidget']()['centerX'] = _0x305bad);
            }), _0x3e8dc5(0x0, _0x469bbd, 'top', function () {
                return this['_widget']['top'];
            }, function (_0x3fcb85) {
                _0x3fcb85 != this['_widget']['top'] && (this['_getWidget']()['top'] = _0x3fcb85);
            }), _0x3e8dc5(0x0, _0x469bbd, 'bottom', function () {
                return this['_widget']['bottom'];
            }, function (_0x5cd8df) {
                _0x5cd8df != this['_widget']['bottom'] && (this['_getWidget']()['bottom'] = _0x5cd8df);
            }), _0x3e8dc5(0x0, _0x469bbd, 'dataSource', function () {
                return this['_dataSourc' + 'e'];
            }, function (_0x4124e1) {
                this['_dataSourc' + 'e'] = _0x4124e1;
                for (var _0x4c79f0 in _0x4124e1) {
                    var _0x2d44c0 = this['getChildBy' + 'Name'](_0x4c79f0);
                    _0x2d44c0 instanceof laya['ui']['UIComponen' + 't'] ? _0x2d44c0['dataSource'] = _0x4124e1[_0x4c79f0] : this['hasOwnProp' + 'erty'](_0x4c79f0) && 'function' != typeof this[_0x4c79f0] && (this[_0x4c79f0] = _0x4124e1[_0x4c79f0]);
                }
            }), _0x3e8dc5(0x0, _0x469bbd, 'left', function () {
                return this['_widget']['left'];
            }, function (_0x3b6ba4) {
                _0x3b6ba4 != this['_widget']['left'] && (this['_getWidget']()['left'] = _0x3b6ba4);
            }), _0x3e8dc5(0x0, _0x469bbd, 'right', function () {
                return this['_widget']['right'];
            }, function (_0x43cae) {
                _0x43cae != this['_widget']['right'] && (this['_getWidget']()['right'] = _0x43cae);
            }), _0x3e8dc5(0x0, _0x469bbd, 'anchorY', function () {
                return this['_anchorY'];
            }, function (_0x21acaa) {
                this['_anchorY'] != _0x21acaa && (this['_anchorY'] = _0x21acaa, this['callLater'](this['_sizeChang' + 'ed']));
            }), _0x3e8dc5(0x0, _0x469bbd, 'centerY', function () {
                return this['_widget']['centerY'];
            }, function (_0x77b3b) {
                _0x77b3b != this['_widget']['centerY'] && (this['_getWidget']()['centerY'] = _0x77b3b);
            }), _0x58a667['regCompone' + 'nt'] = function (_0xbb5c9a, _0x42a3a6) {
                _0x185a3a['regClass'](_0xbb5c9a, _0x42a3a6);
            }, _0x58a667['regViewRun' + 'time'] = function (_0x66e5fa, _0x77a9ef) {
                _0x185a3a['regClass'](_0x66e5fa, _0x77a9ef);
            }, _0x58a667['regUI'] = function (_0x4a90ba, _0x2a4d7b) {
                _0x591c88['loader']['cacheRes'](_0x4a90ba, _0x2a4d7b);
            }, _0x58a667['uiMap'] = {}, _0x58a667['__init$'] = function () {
                _0x185a3a['regShortCl' + 'assName']([
                    _0x41d5a9,
                    _0x19d5d0,
                    _0x1241a5,
                    _0x3f28fc,
                    _0x51befc,
                    _0x501e24,
                    _0x19d5d0,
                    _0x1bd3ba,
                    _0x4b5e28,
                    _0x5968d9,
                    _0x291fc3,
                    _0x41ed7e,
                    _0x69a164,
                    _0x43423b,
                    _0xf56596,
                    _0x1e34b1,
                    _0x3f0757,
                    _0x3aaf9b,
                    _0x41ed2d,
                    _0xc0b764,
                    _0x5cbd76,
                    _0xd72b9d,
                    _0xba94bc,
                    _0x20ab5c,
                    _0x58a667,
                    _0x528a6b,
                    _0x168dec,
                    _0x288359,
                    _0x3241ae,
                    _0x146ff7,
                    _0x538eb1,
                    _0x364be4,
                    _0x2fbb04,
                    _0x17af9b,
                    _0x3e68af
                ]);
            }, _0x58a667;
        }(_0xff180f), _0x51befc = (function (_0x56ed78) {
            function _0x1bfc60() {
                this['_$4__textu' + 're'] = null, _0x1bfc60['__super']['call'](this), this['_width'] = this['_height'] = 0xc8;
                var _0x54b3e3 = new _0x5eb495();
                if (!_0x591c88['Texture2D'])
                    throw new Error('WXOpenData' + 'Viewer:web' + 'gl\x20not\x20fou' + 'nd!');
                _0x54b3e3['bitmap'] = new _0x591c88['Texture2D'](), this['texture'] = _0x54b3e3;
            }
            _0x49b6a8(_0x1bfc60, 'laya.ui.WX' + 'OpenDataVi' + 'ewer', _0x56ed78);
            var _0x246d5a = _0x1bfc60['prototype'];
            return _0x246d5a['onEnable'] = function () {
                this['postMsg']({
                    'type': 'display',
                    'rate': _0x591c88['stage']['frameRate']
                }), _0x5f2c3f['wx'] && _0x5f2c3f['sharedCanv' + 'as'] && _0x591c88['timer']['frameLoop'](0x1, this, this['_onLoop']);
            }, _0x246d5a['onDisable'] = function () {
                this['postMsg']({ 'type': 'undisplay' }), _0x591c88['timer']['clear'](this, this['_onLoop']);
            }, _0x246d5a['_onLoop'] = function () {
                this['texture']['bitmap']['loadImageS' + 'ource'](_0x5f2c3f['sharedCanv' + 'as']);
            }, _0x246d5a['_postMsg'] = function () {
                var _0x1eecd3 = new _0x217a69();
                _0x1eecd3['translate'](this['x'], this['y']);
                var _0x1ecff0 = _0x591c88['stage'];
                _0x1eecd3['scale'](_0x1ecff0['_canvasTra' + 'nsform']['getScaleX']() * this['globalScal' + 'eX'] * _0x1ecff0['transform']['getScaleX'](), _0x1ecff0['_canvasTra' + 'nsform']['getScaleY']() * this['globalScal' + 'eY'] * _0x1ecff0['transform']['getScaleY']()), this['postMsg']({
                    'type': 'changeMatr' + 'ix',
                    'a': _0x1eecd3['a'],
                    'b': _0x1eecd3['b'],
                    'c': _0x1eecd3['c'],
                    'd': _0x1eecd3['d'],
                    'tx': _0x1eecd3['tx'],
                    'ty': _0x1eecd3['ty'],
                    'w': this['width'],
                    'h': this['height']
                });
            }, _0x246d5a['postMsg'] = function (_0x268bf6) {
                if (_0x5f2c3f['wx'] && _0x5f2c3f['wx']['getOpenDat' + 'aContext']) {
                    var _0x51ab7d = _0x5f2c3f['wx']['getOpenDat' + 'aContext']();
                    _0x51ab7d['postMessag' + 'e'](_0x268bf6);
                }
            }, _0x3e8dc5(0x0, _0x246d5a, 'x', _0x56ed78['prototype']['_$get_x'], function (_0x2de82c) {
                _0x591c88['superSet'](_0x291fc3, this, 'x', _0x2de82c), this['callLater'](this['_postMsg']);
            }), _0x3e8dc5(0x0, _0x246d5a, 'width', _0x56ed78['prototype']['_$get_widt' + 'h'], function (_0xcabbe6) {
                _0x591c88['superSet'](_0x291fc3, this, 'width', _0xcabbe6), _0x5f2c3f['sharedCanv' + 'as'] && (_0x5f2c3f['sharedCanv' + 'as']['width'] = _0xcabbe6), this['callLater'](this['_postMsg']);
            }), _0x3e8dc5(0x0, _0x246d5a, 'height', _0x56ed78['prototype']['_$get_heig' + 'ht'], function (_0x343e38) {
                _0x591c88['superSet'](_0x291fc3, this, 'height', _0x343e38), _0x5f2c3f['sharedCanv' + 'as'] && (_0x5f2c3f['sharedCanv' + 'as']['height'] = _0x343e38), this['callLater'](this['_postMsg']);
            }), _0x3e8dc5(0x0, _0x246d5a, 'y', _0x56ed78['prototype']['_$get_y'], function (_0x1cb142) {
                _0x591c88['superSet'](_0x291fc3, this, 'y', _0x1cb142), this['callLater'](this['_postMsg']);
            }), _0x1bfc60;
        }(_0x291fc3), function (_0x55d63c) {
            function _0x5f08a1() {
                this['_bgColor'] = null, _0x5f08a1['__super']['call'](this);
            }
            _0x49b6a8(_0x5f08a1, 'laya.ui.Bo' + 'x', _0x55d63c);
            var _0xbb6de0 = _0x5f08a1['prototype'];
            return _0x591c88['imps'](_0xbb6de0, { 'laya.ui.IBox': !0x0 }), _0xbb6de0['_onResize'] = function (_0x2c3a20) {
                this['graphics']['clear'](), this['graphics']['drawRect'](0x0, 0x0, this['width'], this['height'], this['_bgColor']);
            }, _0x3e8dc5(0x0, _0xbb6de0, 'dataSource', _0x55d63c['prototype']['_$get_data' + 'Source'], function (_0x5355e5) {
                this['_dataSourc' + 'e'] = _0x5355e5;
                for (var _0x1f5e7c in _0x5355e5) {
                    var _0x1f7f62 = this['getChildBy' + 'Name'](_0x1f5e7c);
                    _0x1f7f62 ? _0x1f7f62['dataSource'] = _0x5355e5[_0x1f5e7c] : this['hasOwnProp' + 'erty'](_0x1f5e7c) && 'function' != typeof this[_0x1f5e7c] && (this[_0x1f5e7c] = _0x5355e5[_0x1f5e7c]);
                }
            }), _0x3e8dc5(0x0, _0xbb6de0, 'bgColor', function () {
                return this['_bgColor'];
            }, function (_0x154358) {
                this['_bgColor'] = _0x154358, _0x154358 ? (this['_onResize'](null), this['on']('resize', this, this['_onResize'])) : (this['graphics']['clear'](), this['off']('resize', this, this['_onResize']));
            }), _0x5f08a1;
        }(_0x291fc3)), _0x19d5d0 = function (_0x4afaad) {
            function _0x4399e9(_0x2b8912, _0x515a7b) {
                this['toggle'] = !0x1, this['_bitmap'] = null, this['_text'] = null, this['_strokeCol' + 'ors'] = null, this['_state'] = 0x0, this['_selected'] = !0x1, this['_skin'] = null, this['_autoSize'] = !0x0, this['_sources'] = null, this['_clickHand' + 'ler'] = null, this['_stateChan' + 'ged'] = !0x1, _0x4399e9['__super']['call'](this), this['_labelColo' + 'rs'] = _0x48c7cc['buttonLabe' + 'lColors'], this['_stateNum'] = _0x48c7cc['buttonStat' + 'eNum'], void 0x0 === _0x515a7b && (_0x515a7b = ''), this['skin'] = _0x2b8912, this['label'] = _0x515a7b;
            }
            _0x49b6a8(_0x4399e9, 'laya.ui.Bu' + 'tton', _0x4afaad);
            var _0x12dc8c = _0x4399e9['prototype'];
            return _0x591c88['imps'](_0x12dc8c, { 'laya.ui.ISelect': !0x0 }), _0x12dc8c['destroy'] = function (_0x5a66e4) {
                void 0x0 === _0x5a66e4 && (_0x5a66e4 = !0x0), _0x4afaad['prototype']['destroy']['call'](this, _0x5a66e4), this['_bitmap'] && this['_bitmap']['destroy'](), this['_text'] && this['_text']['destroy'](_0x5a66e4), this['_bitmap'] = null, this['_text'] = null, this['_clickHand' + 'ler'] = null, this['_labelColo' + 'rs'] = this['_sources'] = this['_strokeCol' + 'ors'] = null;
            }, _0x12dc8c['createChil' + 'dren'] = function () {
                this['graphics'] = this['_bitmap'] = new _0x4b5e3d();
            }, _0x12dc8c['createText'] = function () {
                this['_text'] || (this['_text'] = new _0x17af9b(), this['_text']['overflow'] = 'hidden', this['_text']['align'] = 'center', this['_text']['valign'] = 'middle', this['_text']['width'] = this['_width'], this['_text']['height'] = this['_height']);
            }, _0x12dc8c['initialize'] = function () {
                0x1 !== this['_mouseStat' + 'e'] && (this['mouseEnabl' + 'ed'] = !0x0, this['_setBit'](0x40, !0x0)), this['_createLis' + 'tener']('mouseover', this, this['onMouse'], null, !0x1, !0x1), this['_createLis' + 'tener']('mouseout', this, this['onMouse'], null, !0x1, !0x1), this['_createLis' + 'tener']('mousedown', this, this['onMouse'], null, !0x1, !0x1), this['_createLis' + 'tener']('mouseup', this, this['onMouse'], null, !0x1, !0x1), this['_createLis' + 'tener']('click', this, this['onMouse'], null, !0x1, !0x1);
            }, _0x12dc8c['onMouse'] = function (_0x7bbfb7) {
                return this['toggle'] === !0x1 && this['_selected'] ? void 0x0 : 'click' === _0x7bbfb7['type'] ? (this['toggle'] && (this['selected'] = !this['_selected']), void (this['_clickHand' + 'ler'] && this['_clickHand' + 'ler']['run']())) : void (!this['_selected'] && (this['state'] = _0x4399e9['stateMap'][_0x7bbfb7['type']]));
            }, _0x12dc8c['_skinLoade' + 'd'] = function () {
                this['callLater'](this['changeClip' + 's']), this['_setStateC' + 'hanged'](), this['_sizeChang' + 'ed'](), this['event']('loaded');
            }, _0x12dc8c['changeClip' + 's'] = function () {
                var _0x2f3825 = _0x501cfb['getRes'](this['_skin']);
                if (!_0x2f3825)
                    return void console['log']('lose\x20skin', this['_skin']);
                var _0x8dbbc1 = _0x2f3825['sourceWidt' + 'h'], _0x9789d = _0x2f3825['sourceHeig' + 'ht'] / this['_stateNum'];
                _0x2f3825['$_GID'] || (_0x2f3825['$_GID'] = _0x4e0983['getGID']());
                var _0x45413b = _0x2f3825['$_GID'] + '-' + this['_stateNum'], _0x58a761 = _0x30604b['I']['get'](_0x45413b);
                if (_0x4e0983['isOkTextur' + 'eList'](_0x58a761) || (_0x58a761 = null), _0x58a761)
                    this['_sources'] = _0x58a761;
                else {
                    if (this['_sources'] = [], 0x1 === this['_stateNum'])
                        this['_sources']['push'](_0x2f3825);
                    else {
                        for (var _0x40188e = 0x0; _0x40188e < this['_stateNum']; _0x40188e++)
                            this['_sources']['push'](_0x5eb495['createFrom' + 'Texture'](_0x2f3825, 0x0, _0x9789d * _0x40188e, _0x8dbbc1, _0x9789d));
                    }
                    _0x30604b['I']['set'](_0x45413b, this['_sources']);
                }
                this['_autoSize'] ? (this['_bitmap']['width'] = this['_width'] || _0x8dbbc1, this['_bitmap']['height'] = this['_height'] || _0x9789d, this['_text'] && (this['_text']['width'] = this['_bitmap']['width'], this['_text']['height'] = this['_bitmap']['height'])) : this['_text'] && (this['_text']['x'] = _0x8dbbc1);
            }, _0x12dc8c['measureWid' + 'th'] = function () {
                return this['runCallLat' + 'er'](this['changeClip' + 's']), this['_autoSize'] ? this['_bitmap']['width'] : (this['runCallLat' + 'er'](this['changeStat' + 'e']), this['_bitmap']['width'] + (this['_text'] ? this['_text']['width'] : 0x0));
            }, _0x12dc8c['measureHei' + 'ght'] = function () {
                return this['runCallLat' + 'er'](this['changeClip' + 's']), this['_text'] ? Math['max'](this['_bitmap']['height'], this['_text']['height']) : this['_bitmap']['height'];
            }, _0x12dc8c['changeStat' + 'e'] = function () {
                this['_stateChan' + 'ged'] = !0x1, this['runCallLat' + 'er'](this['changeClip' + 's']);
                var _0x3a78f4 = this['_state'] < this['_stateNum'] ? this['_state'] : this['_stateNum'] - 0x1;
                this['_sources'] && (this['_bitmap']['source'] = this['_sources'][_0x3a78f4]), this['label'] && (this['_text']['color'] = this['_labelColo' + 'rs'][_0x3a78f4], this['_strokeCol' + 'ors'] && (this['_text']['strokeColo' + 'r'] = this['_strokeCol' + 'ors'][_0x3a78f4]));
            }, _0x12dc8c['_setStateC' + 'hanged'] = function () {
                this['_stateChan' + 'ged'] || (this['_stateChan' + 'ged'] = !0x0, this['callLater'](this['changeStat' + 'e']));
            }, _0x3e8dc5(0x0, _0x12dc8c, 'skin', function () {
                return this['_skin'];
            }, function (_0x543c10) {
                this['_skin'] != _0x543c10 && (this['_skin'] = _0x543c10, _0x543c10 ? _0x501cfb['getRes'](_0x543c10) ? this['_skinLoade' + 'd']() : _0x591c88['loader']['load'](this['_skin'], _0x7c2cf9['create'](this, this['_skinLoade' + 'd']), null, 'image', 0x1) : this['_skinLoade' + 'd']());
            }), _0x3e8dc5(0x0, _0x12dc8c, 'labelPaddi' + 'ng', function () {
                return this['createText'](), this['_text']['padding']['join'](',');
            }, function (_0x5357c0) {
                this['createText'](), this['_text']['padding'] = _0x250d08['fillArray'](_0x48c7cc['labelPaddi' + 'ng'], _0x5357c0, Number);
            }), _0x3e8dc5(0x0, _0x12dc8c, 'state', function () {
                return this['_state'];
            }, function (_0x1e6ece) {
                this['_state'] != _0x1e6ece && (this['_state'] = _0x1e6ece, this['_setStateC' + 'hanged']());
            }), _0x3e8dc5(0x0, _0x12dc8c, 'text', function () {
                return this['createText'](), this['_text'];
            }), _0x3e8dc5(0x0, _0x12dc8c, 'stateNum', function () {
                return this['_stateNum'];
            }, function (_0x1a64be) {
                'string' == typeof _0x1a64be && (_0x1a64be = parseInt(_0x1a64be)), this['_stateNum'] != _0x1a64be && (this['_stateNum'] = 0x1 > _0x1a64be ? 0x1 : _0x1a64be > 0x3 ? 0x3 : _0x1a64be, this['callLater'](this['changeClip' + 's']));
            }), _0x3e8dc5(0x0, _0x12dc8c, 'label', function () {
                return this['_text'] ? this['_text']['text'] : null;
            }, function (_0x420aa7) {
                (this['_text'] || _0x420aa7) && (this['createText'](), this['_text']['text'] != _0x420aa7 && (_0x420aa7 && !this['_text']['parent'] && this['addChild'](this['_text']), this['_text']['text'] = (_0x420aa7 + '')['replace'](/\\n/g, '\x0a'), this['_setStateC' + 'hanged']()));
            }), _0x3e8dc5(0x0, _0x12dc8c, 'labelSize', function () {
                return this['createText'](), this['_text']['fontSize'];
            }, function (_0x56f440) {
                this['createText'](), this['_text']['fontSize'] = _0x56f440;
            }), _0x3e8dc5(0x0, _0x12dc8c, 'selected', function () {
                return this['_selected'];
            }, function (_0x3e4935) {
                this['_selected'] != _0x3e4935 && (this['_selected'] = _0x3e4935, this['state'] = this['_selected'] ? 0x2 : 0x0, this['event']('change'));
            }), _0x3e8dc5(0x0, _0x12dc8c, 'strokeColo' + 'rs', function () {
                return this['_strokeCol' + 'ors'] ? this['_strokeCol' + 'ors']['join'](',') : '';
            }, function (_0x280ded) {
                this['_strokeCol' + 'ors'] = _0x250d08['fillArray'](_0x48c7cc['buttonLabe' + 'lColors'], _0x280ded, String), this['_setStateC' + 'hanged']();
            }), _0x3e8dc5(0x0, _0x12dc8c, 'labelColor' + 's', function () {
                return this['_labelColo' + 'rs']['join'](',');
            }, function (_0x5860b8) {
                this['_labelColo' + 'rs'] = _0x250d08['fillArray'](_0x48c7cc['buttonLabe' + 'lColors'], _0x5860b8, String), this['_setStateC' + 'hanged']();
            }), _0x3e8dc5(0x0, _0x12dc8c, 'labelStrok' + 'e', function () {
                return this['createText'](), this['_text']['stroke'];
            }, function (_0x173651) {
                this['createText'](), this['_text']['stroke'] = _0x173651;
            }), _0x3e8dc5(0x0, _0x12dc8c, 'labelStrok' + 'eColor', function () {
                return this['createText'](), this['_text']['strokeColo' + 'r'];
            }, function (_0x587402) {
                this['createText'](), this['_text']['strokeColo' + 'r'] = _0x587402;
            }), _0x3e8dc5(0x0, _0x12dc8c, 'labelBold', function () {
                return this['createText'](), this['_text']['bold'];
            }, function (_0x6a994) {
                this['createText'](), this['_text']['bold'] = _0x6a994;
            }), _0x3e8dc5(0x0, _0x12dc8c, 'labelFont', function () {
                return this['createText'](), this['_text']['font'];
            }, function (_0x5a6e9c) {
                this['createText'](), this['_text']['font'] = _0x5a6e9c;
            }), _0x3e8dc5(0x0, _0x12dc8c, 'labelAlign', function () {
                return this['createText'](), this['_text']['align'];
            }, function (_0x47e595) {
                this['createText'](), this['_text']['align'] = _0x47e595;
            }), _0x3e8dc5(0x0, _0x12dc8c, 'clickHandl' + 'er', function () {
                return this['_clickHand' + 'ler'];
            }, function (_0x37b542) {
                this['_clickHand' + 'ler'] = _0x37b542;
            }), _0x3e8dc5(0x0, _0x12dc8c, 'sizeGrid', function () {
                return this['_bitmap']['sizeGrid'] ? this['_bitmap']['sizeGrid']['join'](',') : null;
            }, function (_0x4238a0) {
                this['_bitmap']['sizeGrid'] = _0x250d08['fillArray'](_0x48c7cc['defaultSiz' + 'eGrid'], _0x4238a0, Number);
            }), _0x3e8dc5(0x0, _0x12dc8c, 'width', _0x4afaad['prototype']['_$get_widt' + 'h'], function (_0x3646d2) {
                _0x591c88['superSet'](_0x291fc3, this, 'width', _0x3646d2), this['_autoSize'] && (this['_bitmap']['width'] = _0x3646d2, this['_text'] && (this['_text']['width'] = _0x3646d2));
            }), _0x3e8dc5(0x0, _0x12dc8c, 'height', _0x4afaad['prototype']['_$get_heig' + 'ht'], function (_0x39d0fb) {
                _0x591c88['superSet'](_0x291fc3, this, 'height', _0x39d0fb), this['_autoSize'] && (this['_bitmap']['height'] = _0x39d0fb, this['_text'] && (this['_text']['height'] = _0x39d0fb));
            }), _0x3e8dc5(0x0, _0x12dc8c, 'dataSource', _0x4afaad['prototype']['_$get_data' + 'Source'], function (_0x2ca7a7) {
                this['_dataSourc' + 'e'] = _0x2ca7a7, 'number' == typeof _0x2ca7a7 || 'string' == typeof _0x2ca7a7 ? this['label'] = _0x2ca7a7 + '' : _0x591c88['superSet'](_0x291fc3, this, 'dataSource', _0x2ca7a7);
            }), _0x3e8dc5(0x0, _0x12dc8c, 'iconOffset', function () {
                return this['_bitmap']['_offset'] ? this['_bitmap']['_offset']['join'](',') : null;
            }, function (_0x59c9ac) {
                _0x59c9ac ? this['_bitmap']['_offset'] = _0x250d08['fillArray']([
                    0x1,
                    0x1
                ], _0x59c9ac, Number) : this['_bitmap']['_offset'] = [];
            }), _0x3c8136(_0x4399e9, [
                'stateMap',
                function () {
                    return this['stateMap'] = {
                        'mouseup': 0x0,
                        'mouseover': 0x1,
                        'mousedown': 0x2,
                        'mouseout': 0x0
                    };
                }
            ]), _0x4399e9;
        }(_0x291fc3), _0x43423b = function (_0x54dd12) {
            function _0x20faeb(_0x58181e) {
                this['_bitmap'] = null, this['_skin'] = null, this['_group'] = null, _0x20faeb['__super']['call'](this), this['skin'] = _0x58181e;
            }
            _0x49b6a8(_0x20faeb, 'laya.ui.Im' + 'age', _0x54dd12);
            var _0x39fbae = _0x20faeb['prototype'];
            return _0x39fbae['destroy'] = function (_0x46d82f) {
                void 0x0 === _0x46d82f && (_0x46d82f = !0x0), _0x54dd12['prototype']['destroy']['call'](this, !0x0), this['_bitmap'] && this['_bitmap']['destroy'](), this['_bitmap'] = null;
            }, _0x39fbae['dispose'] = function () {
                this['destroy'](!0x0), _0x591c88['loader']['clearRes'](this['_skin']);
            }, _0x39fbae['createChil' + 'dren'] = function () {
                this['graphics'] = this['_bitmap'] = new _0x4b5e3d(), this['_bitmap']['autoCacheC' + 'md'] = !0x1;
            }, _0x39fbae['setSource'] = function (_0x59ac4a, _0x25b0ac) {
                _0x59ac4a === this['_skin'] && _0x25b0ac && (this['source'] = _0x25b0ac, this['onCompResi' + 'ze']());
            }, _0x39fbae['measureWid' + 'th'] = function () {
                return this['_bitmap']['width'];
            }, _0x39fbae['measureHei' + 'ght'] = function () {
                return this['_bitmap']['height'];
            }, _0x3e8dc5(0x0, _0x39fbae, 'dataSource', _0x54dd12['prototype']['_$get_data' + 'Source'], function (_0x23c162) {
                this['_dataSourc' + 'e'] = _0x23c162, 'string' == typeof _0x23c162 ? this['skin'] = _0x23c162 : _0x591c88['superSet'](_0x291fc3, this, 'dataSource', _0x23c162);
            }), _0x3e8dc5(0x0, _0x39fbae, 'source', function () {
                return this['_bitmap']['source'];
            }, function (_0x49e78a) {
                this['_bitmap'] && (this['_bitmap']['source'] = _0x49e78a, this['event']('loaded'), this['repaint']());
            }), _0x3e8dc5(0x0, _0x39fbae, 'skin', function () {
                return this['_skin'];
            }, function (_0x2bf451) {
                if (this['_skin'] != _0x2bf451) {
                    if (this['_skin'] = _0x2bf451, _0x2bf451) {
                        var _0x4b98cd = _0x501cfb['getRes'](_0x2bf451);
                        _0x4b98cd ? (this['source'] = _0x4b98cd, this['onCompResi' + 'ze']()) : _0x591c88['loader']['load'](this['_skin'], _0x7c2cf9['create'](this, this['setSource'], [this['_skin']]), null, 'image', 0x1, !0x0, this['_group']);
                    } else
                        this['source'] = null;
                }
            }), _0x3e8dc5(0x0, _0x39fbae, 'sizeGrid', function () {
                return this['_bitmap']['sizeGrid'] ? this['_bitmap']['sizeGrid']['join'](',') : null;
            }, function (_0x5a2e35) {
                this['_bitmap']['sizeGrid'] = _0x250d08['fillArray'](_0x48c7cc['defaultSiz' + 'eGrid'], _0x5a2e35, Number);
            }), _0x3e8dc5(0x0, _0x39fbae, 'group', function () {
                return this['_group'];
            }, function (_0x3bfc87) {
                _0x3bfc87 && this['_skin'] && _0x501cfb['setGroup'](this['_skin'], _0x3bfc87), this['_group'] = _0x3bfc87;
            }), _0x3e8dc5(0x0, _0x39fbae, 'width', _0x54dd12['prototype']['_$get_widt' + 'h'], function (_0x1deb50) {
                _0x591c88['superSet'](_0x291fc3, this, 'width', _0x1deb50), this['_bitmap']['width'] = 0x0 == _0x1deb50 ? 1e-7 : _0x1deb50;
            }), _0x3e8dc5(0x0, _0x39fbae, 'height', _0x54dd12['prototype']['_$get_heig' + 'ht'], function (_0x519a9b) {
                _0x591c88['superSet'](_0x291fc3, this, 'height', _0x519a9b), this['_bitmap']['height'] = 0x0 == _0x519a9b ? 1e-7 : _0x519a9b;
            }), _0x20faeb;
        }(_0x291fc3), _0xf56596 = function (_0x58f6d8) {
            function _0x525ac3(_0x4cb456) {
                this['_tf'] = null, _0x525ac3['__super']['call'](this), void 0x0 === _0x4cb456 && (_0x4cb456 = ''), this['text'] = _0x4cb456;
            }
            _0x49b6a8(_0x525ac3, 'laya.ui.La' + 'bel', _0x58f6d8);
            var _0x488d6d = _0x525ac3['prototype'];
            return _0x488d6d['destroy'] = function (_0x51d4ef) {
                void 0x0 === _0x51d4ef && (_0x51d4ef = !0x0), _0x58f6d8['prototype']['destroy']['call'](this, _0x51d4ef), this['_tf'] = null;
            }, _0x488d6d['createChil' + 'dren'] = function () {
                this['addChild'](this['_tf'] = new _0x17af9b());
            }, _0x488d6d['changeText'] = function (_0x2bbfda) {
                this['_tf']['changeText'](_0x2bbfda);
            }, _0x488d6d['measureWid' + 'th'] = function () {
                return this['_tf']['width'];
            }, _0x488d6d['measureHei' + 'ght'] = function () {
                return this['_tf']['height'];
            }, _0x3e8dc5(0x0, _0x488d6d, 'padding', function () {
                return this['_tf']['padding']['join'](',');
            }, function (_0x2b35c3) {
                this['_tf']['padding'] = _0x250d08['fillArray'](_0x48c7cc['labelPaddi' + 'ng'], _0x2b35c3, Number);
            }), _0x3e8dc5(0x0, _0x488d6d, 'bold', function () {
                return this['_tf']['bold'];
            }, function (_0x318d39) {
                this['_tf']['bold'] = _0x318d39;
            }), _0x3e8dc5(0x0, _0x488d6d, 'align', function () {
                return this['_tf']['align'];
            }, function (_0x161180) {
                this['_tf']['align'] = _0x161180;
            }), _0x3e8dc5(0x0, _0x488d6d, 'text', function () {
                return this['_tf']['text'];
            }, function (_0x2098c1) {
                this['_tf']['text'] != _0x2098c1 && (_0x2098c1 && (_0x2098c1 = _0x250d08['adptString'](_0x2098c1 + '')), this['_tf']['text'] = _0x2098c1, this['event']('change'), this['_width'] && this['_height'] || this['onCompResi' + 'ze']());
            }), _0x3e8dc5(0x0, _0x488d6d, 'italic', function () {
                return this['_tf']['italic'];
            }, function (_0x597d06) {
                this['_tf']['italic'] = _0x597d06;
            }), _0x3e8dc5(0x0, _0x488d6d, 'wordWrap', function () {
                return this['_tf']['wordWrap'];
            }, function (_0x2ffa18) {
                this['_tf']['wordWrap'] = _0x2ffa18;
            }), _0x3e8dc5(0x0, _0x488d6d, 'font', function () {
                return this['_tf']['font'];
            }, function (_0x120e6b) {
                this['_tf']['font'] = _0x120e6b;
            }), _0x3e8dc5(0x0, _0x488d6d, 'dataSource', _0x58f6d8['prototype']['_$get_data' + 'Source'], function (_0x333972) {
                this['_dataSourc' + 'e'] = _0x333972, 'number' == typeof _0x333972 || 'string' == typeof _0x333972 ? this['text'] = _0x333972 + '' : _0x591c88['superSet'](_0x291fc3, this, 'dataSource', _0x333972);
            }), _0x3e8dc5(0x0, _0x488d6d, 'color', function () {
                return this['_tf']['color'];
            }, function (_0x4285fa) {
                this['_tf']['color'] = _0x4285fa;
            }), _0x3e8dc5(0x0, _0x488d6d, 'valign', function () {
                return this['_tf']['valign'];
            }, function (_0x3cddba) {
                this['_tf']['valign'] = _0x3cddba;
            }), _0x3e8dc5(0x0, _0x488d6d, 'leading', function () {
                return this['_tf']['leading'];
            }, function (_0x1e2eec) {
                this['_tf']['leading'] = _0x1e2eec;
            }), _0x3e8dc5(0x0, _0x488d6d, 'fontSize', function () {
                return this['_tf']['fontSize'];
            }, function (_0x380272) {
                this['_tf']['fontSize'] = _0x380272;
            }), _0x3e8dc5(0x0, _0x488d6d, 'bgColor', function () {
                return this['_tf']['bgColor'];
            }, function (_0x58a1ac) {
                this['_tf']['bgColor'] = _0x58a1ac;
            }), _0x3e8dc5(0x0, _0x488d6d, 'borderColo' + 'r', function () {
                return this['_tf']['borderColo' + 'r'];
            }, function (_0x370e4d) {
                this['_tf']['borderColo' + 'r'] = _0x370e4d;
            }), _0x3e8dc5(0x0, _0x488d6d, 'stroke', function () {
                return this['_tf']['stroke'];
            }, function (_0x41ad57) {
                this['_tf']['stroke'] = _0x41ad57;
            }), _0x3e8dc5(0x0, _0x488d6d, 'strokeColo' + 'r', function () {
                return this['_tf']['strokeColo' + 'r'];
            }, function (_0x176b40) {
                this['_tf']['strokeColo' + 'r'] = _0x176b40;
            }), _0x3e8dc5(0x0, _0x488d6d, 'textField', function () {
                return this['_tf'];
            }), _0x3e8dc5(0x0, _0x488d6d, 'width', function () {
                return this['_width'] || this['_tf']['text'] ? _0x591c88['superGet'](_0x291fc3, this, 'width') : 0x0;
            }, function (_0xcefde4) {
                _0x591c88['superSet'](_0x291fc3, this, 'width', _0xcefde4), this['_tf']['width'] = _0xcefde4;
            }), _0x3e8dc5(0x0, _0x488d6d, 'height', function () {
                return this['_height'] || this['_tf']['text'] ? _0x591c88['superGet'](_0x291fc3, this, 'height') : 0x0;
            }, function (_0x2d3863) {
                _0x591c88['superSet'](_0x291fc3, this, 'height', _0x2d3863), this['_tf']['height'] = _0x2d3863;
            }), _0x3e8dc5(0x0, _0x488d6d, 'overflow', function () {
                return this['_tf']['overflow'];
            }, function (_0x42a91b) {
                this['_tf']['overflow'] = _0x42a91b;
            }), _0x3e8dc5(0x0, _0x488d6d, 'underline', function () {
                return this['_tf']['underline'];
            }, function (_0x21c3e1) {
                this['_tf']['underline'] = _0x21c3e1;
            }), _0x3e8dc5(0x0, _0x488d6d, 'underlineC' + 'olor', function () {
                return this['_tf']['underlineC' + 'olor'];
            }, function (_0x326787) {
                this['_tf']['underlineC' + 'olor'] = _0x326787;
            }), _0x525ac3;
        }(_0x291fc3), _0x5968d9 = function (_0x3ddd1d) {
            function _0x13e4d2(_0x582475, _0x1bd108) {
                this['_visibleNu' + 'm'] = 0x6, this['_button'] = null, this['_list'] = null, this['_isOpen'] = !0x1, this['_itemSize'] = 0xc, this['_labels'] = [], this['_selectedI' + 'ndex'] = -0x1, this['_selectHan' + 'dler'] = null, this['_itemHeigh' + 't'] = NaN, this['_listHeigh' + 't'] = NaN, this['_listChang' + 'ed'] = !0x1, this['_itemChang' + 'ed'] = !0x1, this['_scrollBar' + 'Skin'] = null, this['_isCustomL' + 'ist'] = !0x1, this['itemRender'] = null, _0x13e4d2['__super']['call'](this), this['_itemColor' + 's'] = _0x48c7cc['comboBoxIt' + 'emColors'], this['skin'] = _0x582475, this['labels'] = _0x1bd108;
            }
            _0x49b6a8(_0x13e4d2, 'laya.ui.Co' + 'mboBox', _0x3ddd1d);
            var _0x438b23 = _0x13e4d2['prototype'];
            return _0x438b23['destroy'] = function (_0x37d4d2) {
                void 0x0 === _0x37d4d2 && (_0x37d4d2 = !0x0), _0x3ddd1d['prototype']['destroy']['call'](this, _0x37d4d2), this['_button'] && this['_button']['destroy'](_0x37d4d2), this['_list'] && this['_list']['destroy'](_0x37d4d2), this['_button'] = null, this['_list'] = null, this['_itemColor' + 's'] = null, this['_labels'] = null, this['_selectHan' + 'dler'] = null;
            }, _0x438b23['createChil' + 'dren'] = function () {
                this['addChild'](this['_button'] = new _0x19d5d0()), this['_button']['text']['align'] = 'left', this['_button']['labelPaddi' + 'ng'] = '0,0,0,5', this['_button']['on']('mousedown', this, this['onButtonMo' + 'useDown']);
            }, _0x438b23['_createLis' + 't'] = function () {
                this['_list'] = new _0x1e34b1(), this['_scrollBar' + 'Skin'] && (this['_list']['vScrollBar' + 'Skin'] = this['_scrollBar' + 'Skin']), this['_setListEv' + 'ent'](this['_list']);
            }, _0x438b23['_setListEv' + 'ent'] = function (_0x1b61e4) {
                this['_list']['selectEnab' + 'le'] = !0x0, this['_list']['on']('mousedown', this, this['onListDown']), this['_list']['mouseHandl' + 'er'] = _0x7c2cf9['create'](this, this['onlistItem' + 'Mouse'], null, !0x1), this['_list']['scrollBar'] && this['_list']['scrollBar']['on']('mousedown', this, this['onScrollBa' + 'rDown']);
            }, _0x438b23['onListDown'] = function (_0x404ab4) {
                _0x404ab4['stopPropag' + 'ation']();
            }, _0x438b23['onScrollBa' + 'rDown'] = function (_0x31fe50) {
                _0x31fe50['stopPropag' + 'ation']();
            }, _0x438b23['onButtonMo' + 'useDown'] = function (_0x57d047) {
                this['callLater'](this['switchTo'], [!this['_isOpen']]);
            }, _0x438b23['measureWid' + 'th'] = function () {
                return this['_button']['width'];
            }, _0x438b23['measureHei' + 'ght'] = function () {
                return this['_button']['height'];
            }, _0x438b23['changeList'] = function () {
                this['_listChang' + 'ed'] = !0x1;
                var _0x2be374 = this['width'] - 0x2, _0x13a3ba = this['_itemColor' + 's'][0x2];
                this['_itemHeigh' + 't'] = this['_itemSize'] + 0x6, this['_list']['itemRender'] = this['itemRender'] || {
                    'type': 'Box',
                    'child': [{
                            'type': 'Label',
                            'props': {
                                'name': 'label',
                                'x': 0x1,
                                'padding': '3,3,3,3',
                                'width': _0x2be374,
                                'height': this['_itemHeigh' + 't'],
                                'fontSize': this['_itemSize'],
                                'color': _0x13a3ba
                            }
                        }]
                }, this['_list']['repeatY'] = this['_visibleNu' + 'm'], this['_list']['refresh']();
            }, _0x438b23['onlistItem' + 'Mouse'] = function (_0x472ff5, _0x507ba6) {
                var _0x525a9a = _0x472ff5['type'];
                if ('mouseover' === _0x525a9a || 'mouseout' === _0x525a9a) {
                    if (this['_isCustomL' + 'ist'])
                        return;
                    var _0xb7f925 = this['_list']['getCell'](_0x507ba6);
                    if (!_0xb7f925)
                        return;
                    var _0xa30307 = _0xb7f925['getChildBy' + 'Name']('label');
                    _0xa30307 && ('mouseover' === _0x525a9a ? (_0xa30307['bgColor'] = this['_itemColor' + 's'][0x0], _0xa30307['color'] = this['_itemColor' + 's'][0x1]) : (_0xa30307['bgColor'] = null, _0xa30307['color'] = this['_itemColor' + 's'][0x2]));
                } else
                    'click' === _0x525a9a && (this['selectedIn' + 'dex'] = _0x507ba6, this['isOpen'] = !0x1);
            }, _0x438b23['switchTo'] = function (_0x162987) {
                this['isOpen'] = _0x162987;
            }, _0x438b23['changeOpen'] = function () {
                this['isOpen'] = !this['_isOpen'];
            }, _0x438b23['changeItem'] = function () {
                if (this['_itemChang' + 'ed'] = !0x1, this['_listHeigh' + 't'] = this['_labels']['length'] > 0x0 ? Math['min'](this['_visibleNu' + 'm'], this['_labels']['length']) * this['_itemHeigh' + 't'] : this['_itemHeigh' + 't'], !this['_isCustomL' + 'ist']) {
                    var _0x48d7ab = this['_list']['graphics'];
                    _0x48d7ab['clear'](!0x0), _0x48d7ab['drawRect'](0x0, 0x0, this['width'] - 0x1, this['_listHeigh' + 't'], this['_itemColor' + 's'][0x4], this['_itemColor' + 's'][0x3]);
                }
                var _0x3310d3 = this['_list']['array'] || [];
                _0x3310d3['length'] = 0x0;
                for (var _0x5e0b5a = 0x0, _0x7b1902 = this['_labels']['length']; _0x7b1902 > _0x5e0b5a; _0x5e0b5a++)
                    _0x3310d3['push']({ 'label': this['_labels'][_0x5e0b5a] });
                this['_list']['height'] = this['_listHeigh' + 't'], this['_list']['array'] = _0x3310d3;
            }, _0x438b23['changeSele' + 'cted'] = function () {
                this['_button']['label'] = this['selectedLa' + 'bel'];
            }, _0x438b23['_onStageMo' + 'useWheel'] = function (_0x2e7a6c) {
                this['_list'] && !this['_list']['contains'](_0x2e7a6c['target']) && this['removeList'](null);
            }, _0x438b23['removeList'] = function (_0x531b2d) {
                _0x591c88['stage']['off']('mousedown', this, this['removeList']), _0x591c88['stage']['off']('mousewheel', this, this['_onStageMo' + 'useWheel']), this['isOpen'] = !0x1;
            }, _0x3e8dc5(0x0, _0x438b23, 'selectedIn' + 'dex', function () {
                return this['_selectedI' + 'ndex'];
            }, function (_0x48711a) {
                this['_selectedI' + 'ndex'] != _0x48711a && (this['_selectedI' + 'ndex'] = _0x48711a, this['_labels']['length'] > 0x0 ? this['changeSele' + 'cted']() : this['callLater'](this['changeSele' + 'cted']), this['event']('change', [_0x4cb8fc['EMPTY']['setTo']('change', this, this)]), this['_selectHan' + 'dler'] && this['_selectHan' + 'dler']['runWith'](this['_selectedI' + 'ndex']));
            }), _0x3e8dc5(0x0, _0x438b23, 'skin', function () {
                return this['_button']['skin'];
            }, function (_0x58c939) {
                this['_button']['skin'] != _0x58c939 && (this['_button']['skin'] = _0x58c939, this['_listChang' + 'ed'] = !0x0);
            }), _0x3e8dc5(0x0, _0x438b23, 'visibleNum', function () {
                return this['_visibleNu' + 'm'];
            }, function (_0x9d7ac5) {
                this['_visibleNu' + 'm'] = _0x9d7ac5, this['_listChang' + 'ed'] = !0x0;
            }), _0x3e8dc5(0x0, _0x438b23, 'width', _0x3ddd1d['prototype']['_$get_widt' + 'h'], function (_0x36e590) {
                _0x591c88['superSet'](_0x291fc3, this, 'width', _0x36e590), this['_button']['width'] = this['_width'], this['_itemChang' + 'ed'] = !0x0, this['_listChang' + 'ed'] = !0x0;
            }), _0x3e8dc5(0x0, _0x438b23, 'selectedLa' + 'bel', function () {
                return this['_selectedI' + 'ndex'] > -0x1 && this['_selectedI' + 'ndex'] < this['_labels']['length'] ? this['_labels'][this['_selectedI' + 'ndex']] : null;
            }, function (_0x18f01e) {
                this['selectedIn' + 'dex'] = this['_labels']['indexOf'](_0x18f01e);
            }), _0x3e8dc5(0x0, _0x438b23, 'labels', function () {
                return this['_labels']['join'](',');
            }, function (_0x4fbfa4) {
                this['_labels']['length'] > 0x0 && (this['selectedIn' + 'dex'] = -0x1), _0x4fbfa4 ? this['_labels'] = _0x4fbfa4['split'](',') : this['_labels']['length'] = 0x0, this['_itemChang' + 'ed'] = !0x0;
            }), _0x3e8dc5(0x0, _0x438b23, 'height', _0x3ddd1d['prototype']['_$get_heig' + 'ht'], function (_0x5dec65) {
                _0x591c88['superSet'](_0x291fc3, this, 'height', _0x5dec65), this['_button']['height'] = this['_height'];
            }), _0x3e8dc5(0x0, _0x438b23, 'selectHand' + 'ler', function () {
                return this['_selectHan' + 'dler'];
            }, function (_0x12c577) {
                this['_selectHan' + 'dler'] = _0x12c577;
            }), _0x3e8dc5(0x0, _0x438b23, 'labelBold', function () {
                return this['_button']['text']['bold'];
            }, function (_0x26c7f5) {
                this['_button']['text']['bold'] = _0x26c7f5;
            }), _0x3e8dc5(0x0, _0x438b23, 'itemColors', function () {
                return String(this['_itemColor' + 's']);
            }, function (_0x2a0f6e) {
                this['_itemColor' + 's'] = _0x250d08['fillArray'](this['_itemColor' + 's'], _0x2a0f6e, String), this['_listChang' + 'ed'] = !0x0;
            }), _0x3e8dc5(0x0, _0x438b23, 'itemSize', function () {
                return this['_itemSize'];
            }, function (_0x2c348a) {
                this['_itemSize'] = _0x2c348a, this['_listChang' + 'ed'] = !0x0;
            }), _0x3e8dc5(0x0, _0x438b23, 'scrollBar', function () {
                return this['list']['scrollBar'];
            }), _0x3e8dc5(0x0, _0x438b23, 'isOpen', function () {
                return this['_isOpen'];
            }, function (_0x12daca) {
                if (this['_isOpen'] != _0x12daca) {
                    if (this['_isOpen'] = _0x12daca, this['_button']['selected'] = this['_isOpen'], this['_isOpen']) {
                        this['_list'] || this['_createLis' + 't'](), this['_listChang' + 'ed'] && !this['_isCustomL' + 'ist'] && this['changeList'](), this['_itemChang' + 'ed'] && this['changeItem']();
                        var _0x153073 = this['localToGlo' + 'bal'](_0x328408['TEMP']['setTo'](0x0, 0x0)), _0x5df8b3 = _0x153073['y'] + this['_button']['height'];
                        _0x5df8b3 = _0x5df8b3 + this['_listHeigh' + 't'] <= _0x591c88['stage']['height'] ? _0x5df8b3 : _0x153073['y'] - this['_listHeigh' + 't'], this['_list']['pos'](_0x153073['x'], _0x5df8b3), this['_list']['zOrder'] = 0x3e9, _0x591c88['_currentSt' + 'age']['addChild'](this['_list']), _0x591c88['stage']['once']('mousedown', this, this['removeList']), _0x591c88['stage']['on']('mousewheel', this, this['_onStageMo' + 'useWheel']), this['_list']['selectedIn' + 'dex'] = this['_selectedI' + 'ndex'];
                    } else
                        this['_list'] && this['_list']['removeSelf']();
                }
            }), _0x3e8dc5(0x0, _0x438b23, 'scrollBarS' + 'kin', function () {
                return this['_scrollBar' + 'Skin'];
            }, function (_0x11b77c) {
                this['_scrollBar' + 'Skin'] = _0x11b77c;
            }), _0x3e8dc5(0x0, _0x438b23, 'sizeGrid', function () {
                return this['_button']['sizeGrid'];
            }, function (_0x4b16ac) {
                this['_button']['sizeGrid'] = _0x4b16ac;
            }), _0x3e8dc5(0x0, _0x438b23, 'button', function () {
                return this['_button'];
            }), _0x3e8dc5(0x0, _0x438b23, 'list', function () {
                return this['_list'] || this['_createLis' + 't'](), this['_list'];
            }, function (_0x56e413) {
                _0x56e413 && (_0x56e413['removeSelf'](), this['_isCustomL' + 'ist'] = !0x0, this['_list'] = _0x56e413, this['_setListEv' + 'ent'](_0x56e413), this['_itemHeigh' + 't'] = _0x56e413['getCell'](0x0)['height'] + _0x56e413['spaceY']);
            }), _0x3e8dc5(0x0, _0x438b23, 'dataSource', _0x3ddd1d['prototype']['_$get_data' + 'Source'], function (_0x4b590a) {
                this['_dataSourc' + 'e'] = _0x4b590a, 'number' == typeof _0x4b590a && Math['floor'](_0x4b590a) == _0x4b590a || 'string' == typeof _0x4b590a ? this['selectedIn' + 'dex'] = parseInt(_0x4b590a) : _0x4b590a instanceof Array ? this['labels'] = _0x4b590a['join'](',') : _0x591c88['superSet'](_0x291fc3, this, 'dataSource', _0x4b590a);
            }), _0x3e8dc5(0x0, _0x438b23, 'labelColor' + 's', function () {
                return this['_button']['labelColor' + 's'];
            }, function (_0xb0e5fe) {
                this['_button']['labelColor' + 's'] != _0xb0e5fe && (this['_button']['labelColor' + 's'] = _0xb0e5fe);
            }), _0x3e8dc5(0x0, _0x438b23, 'labelPaddi' + 'ng', function () {
                return this['_button']['text']['padding']['join'](',');
            }, function (_0x558122) {
                this['_button']['text']['padding'] = _0x250d08['fillArray'](_0x48c7cc['labelPaddi' + 'ng'], _0x558122, Number);
            }), _0x3e8dc5(0x0, _0x438b23, 'labelSize', function () {
                return this['_button']['text']['fontSize'];
            }, function (_0x16d21b) {
                this['_button']['text']['fontSize'] = _0x16d21b;
            }), _0x3e8dc5(0x0, _0x438b23, 'labelFont', function () {
                return this['_button']['text']['font'];
            }, function (_0x24ce80) {
                this['_button']['text']['font'] = _0x24ce80;
            }), _0x3e8dc5(0x0, _0x438b23, 'stateNum', function () {
                return this['_button']['stateNum'];
            }, function (_0xe6ed57) {
                this['_button']['stateNum'] = _0xe6ed57;
            }), _0x13e4d2;
        }(_0x291fc3), _0x4b5e28 = (function (_0x3bad28) {
            function _0x1d54f9() {
                this['_tipBox'] = null, this['_tipText'] = null, this['_defaultTi' + 'pHandler'] = null, _0x1d54f9['__super']['call'](this), this['_tipBox'] = new _0x291fc3(), this['_tipBox']['addChild'](this['_tipText'] = new _0x17af9b()), this['_tipText']['x'] = this['_tipText']['y'] = 0x5, this['_tipText']['color'] = _0x1d54f9['tipTextCol' + 'or'], this['_defaultTi' + 'pHandler'] = this['_showDefau' + 'ltTip'], _0x591c88['stage']['on']('showtip', this, this['_onStageSh' + 'owTip']), _0x591c88['stage']['on']('hidetip', this, this['_onStageHi' + 'deTip']), this['zOrder'] = 0x44c;
            }
            _0x49b6a8(_0x1d54f9, 'laya.ui.Ti' + 'pManager', _0x3bad28);
            var _0x2a7759 = _0x1d54f9['prototype'];
            return _0x2a7759['_onStageHi' + 'deTip'] = function (_0xd13d1c) {
                _0x591c88['timer']['clear'](this, this['_showTip']), this['closeAll'](), this['removeSelf']();
            }, _0x2a7759['_onStageSh' + 'owTip'] = function (_0x55a887) {
                _0x591c88['timer']['once'](_0x1d54f9['tipDelay'], this, this['_showTip'], [_0x55a887], !0x0);
            }, _0x2a7759['_showTip'] = function (_0x2e1216) {
                if ('string' == typeof _0x2e1216) {
                    var _0x136ff4 = String(_0x2e1216);
                    Boolean(_0x136ff4) && this['_defaultTi' + 'pHandler'](_0x136ff4);
                } else
                    _0x2e1216 instanceof laya['utils']['Handler'] ? _0x2e1216['run']() : 'function' == typeof _0x2e1216 && _0x2e1216['apply']();
                _0x591c88['stage']['on']('mousemove', this, this['_onStageMo' + 'useMove']), _0x591c88['stage']['on']('mousedown', this, this['_onStageMo' + 'useDown']), this['_onStageMo' + 'useMove'](null);
            }, _0x2a7759['_onStageMo' + 'useDown'] = function (_0x47e14e) {
                this['closeAll']();
            }, _0x2a7759['_onStageMo' + 'useMove'] = function (_0xc05e99) {
                this['_showToSta' + 'ge'](this, _0x1d54f9['offsetX'], _0x1d54f9['offsetY']);
            }, _0x2a7759['_showToSta' + 'ge'] = function (_0x33ab01, _0x3120df, _0x594b71) {
                void 0x0 === _0x3120df && (_0x3120df = 0x0), void 0x0 === _0x594b71 && (_0x594b71 = 0x0);
                var _0x23f3a9 = _0x33ab01['getBounds']();
                _0x33ab01['x'] = _0x591c88['stage']['mouseX'] + _0x3120df, _0x33ab01['y'] = _0x591c88['stage']['mouseY'] + _0x594b71, _0x33ab01['_x'] + _0x23f3a9['width'] > _0x591c88['stage']['width'] && (_0x33ab01['x'] -= _0x23f3a9['width'] + _0x3120df), _0x33ab01['_y'] + _0x23f3a9['height'] > _0x591c88['stage']['height'] && (_0x33ab01['y'] -= _0x23f3a9['height'] + _0x594b71);
            }, _0x2a7759['closeAll'] = function () {
                _0x591c88['timer']['clear'](this, this['_showTip']), _0x591c88['stage']['off']('mousemove', this, this['_onStageMo' + 'useMove']), _0x591c88['stage']['off']('mousedown', this, this['_onStageMo' + 'useDown']), this['removeChil' + 'dren']();
            }, _0x2a7759['showDislay' + 'Tip'] = function (_0x2cab16) {
                this['addChild'](_0x2cab16), this['_showToSta' + 'ge'](this), _0x591c88['_currentSt' + 'age']['addChild'](this);
            }, _0x2a7759['_showDefau' + 'ltTip'] = function (_0x333987) {
                this['_tipText']['text'] = _0x333987;
                var _0x68c299 = this['_tipBox']['graphics'];
                _0x68c299['clear'](!0x0), _0x68c299['drawRect'](0x0, 0x0, this['_tipText']['width'] + 0xa, this['_tipText']['height'] + 0xa, _0x1d54f9['tipBackCol' + 'or']), this['addChild'](this['_tipBox']), this['_showToSta' + 'ge'](this), _0x591c88['_currentSt' + 'age']['addChild'](this);
            }, _0x3e8dc5(0x0, _0x2a7759, 'defaultTip' + 'Handler', function () {
                return this['_defaultTi' + 'pHandler'];
            }, function (_0x9f1851) {
                this['_defaultTi' + 'pHandler'] = _0x9f1851;
            }), _0x1d54f9['offsetX'] = 0xa, _0x1d54f9['offsetY'] = 0xf, _0x1d54f9['tipTextCol' + 'or'] = '#ffffff', _0x1d54f9['tipBackCol' + 'or'] = '#111111', _0x1d54f9['tipDelay'] = 0xc8, _0x1d54f9;
        }(_0x291fc3), function (_0x31374c) {
            function _0x17366d(_0x316859, _0x5e9bc3, _0x5e739b) {
                this['_sources'] = null, this['_bitmap'] = null, this['_skin'] = null, this['_clipX'] = 0x1, this['_clipY'] = 0x1, this['_clipWidth'] = 0x0, this['_clipHeigh' + 't'] = 0x0, this['_autoPlay'] = !0x1, this['_interval'] = 0x32, this['_complete'] = null, this['_isPlaying'] = !0x1, this['_index'] = 0x0, this['_clipChang' + 'ed'] = !0x1, this['_group'] = null, this['_toIndex'] = -0x1, _0x17366d['__super']['call'](this), void 0x0 === _0x5e9bc3 && (_0x5e9bc3 = 0x1), void 0x0 === _0x5e739b && (_0x5e739b = 0x1), this['_clipX'] = _0x5e9bc3, this['_clipY'] = _0x5e739b, this['skin'] = _0x316859;
            }
            _0x49b6a8(_0x17366d, 'laya.ui.Cl' + 'ip', _0x31374c);
            var _0x17b7bd = _0x17366d['prototype'];
            return _0x17b7bd['destroy'] = function (_0x3329c5) {
                void 0x0 === _0x3329c5 && (_0x3329c5 = !0x0), _0x31374c['prototype']['destroy']['call'](this, !0x0), this['_bitmap'] && this['_bitmap']['destroy'](), this['_bitmap'] = null, this['_sources'] = null;
            }, _0x17b7bd['dispose'] = function () {
                this['destroy'](!0x0), _0x591c88['loader']['clearRes'](this['_skin']);
            }, _0x17b7bd['createChil' + 'dren'] = function () {
                this['graphics'] = this['_bitmap'] = new _0x4b5e3d();
            }, _0x17b7bd['_onDisplay'] = function (_0x59469a) {
                this['_isPlaying'] ? this['_getBit'](0x80) ? this['play']() : this['stop']() : this['_autoPlay'] && this['play']();
            }, _0x17b7bd['_skinLoade' + 'd'] = function () {
                this['_setClipCh' + 'anged'](), this['_sizeChang' + 'ed'](), this['event']('loaded');
            }, _0x17b7bd['changeClip'] = function () {
                if (this['_clipChang' + 'ed'] = !0x1, this['_skin']) {
                    var _0x3226ed = _0x501cfb['getRes'](this['_skin']);
                    _0x3226ed ? this['loadComple' + 'te'](this['_skin'], _0x3226ed) : _0x591c88['loader']['load'](this['_skin'], _0x7c2cf9['create'](this, this['loadComple' + 'te'], [this['_skin']]));
                }
            }, _0x17b7bd['loadComple' + 'te'] = function (_0x57289c, _0x2f904a) {
                if (_0x57289c === this['_skin'] && _0x2f904a) {
                    var _0x2c5369 = this['_clipWidth'] || Math['ceil'](_0x2f904a['sourceWidt' + 'h'] / this['_clipX']), _0x43049f = this['_clipHeigh' + 't'] || Math['ceil'](_0x2f904a['sourceHeig' + 'ht'] / this['_clipY']), _0x391bf8 = this['_skin'] + _0x2c5369 + _0x43049f, _0x26acda = _0x30604b['I']['get'](_0x391bf8);
                    if (_0x4e0983['isOkTextur' + 'eList'](_0x26acda) || (_0x26acda = null), _0x26acda)
                        this['_sources'] = _0x26acda;
                    else {
                        this['_sources'] = [];
                        for (var _0x349088 = 0x0; _0x349088 < this['_clipY']; _0x349088++)
                            for (var _0xc4ed47 = 0x0; _0xc4ed47 < this['_clipX']; _0xc4ed47++)
                                this['_sources']['push'](_0x5eb495['createFrom' + 'Texture'](_0x2f904a, _0x2c5369 * _0xc4ed47, _0x43049f * _0x349088, _0x2c5369, _0x43049f));
                        _0x30604b['I']['set'](_0x391bf8, this['_sources']);
                    }
                    this['index'] = this['_index'], this['event']('loaded'), this['onCompResi' + 'ze']();
                }
            }, _0x17b7bd['measureWid' + 'th'] = function () {
                return this['runCallLat' + 'er'](this['changeClip']), this['_bitmap']['width'];
            }, _0x17b7bd['measureHei' + 'ght'] = function () {
                return this['runCallLat' + 'er'](this['changeClip']), this['_bitmap']['height'];
            }, _0x17b7bd['play'] = function (_0x108b89, _0x42e036) {
                void 0x0 === _0x108b89 && (_0x108b89 = 0x0), void 0x0 === _0x42e036 && (_0x42e036 = -0x1), this['_isPlaying'] = !0x0, this['index'] = _0x108b89, this['_toIndex'] = _0x42e036, this['_index']++, _0x591c88['timer']['loop'](this['interval'], this, this['_loop']), this['on']('display', this, this['_onDisplay']), this['on']('undisplay', this, this['_onDisplay']);
            }, _0x17b7bd['_loop'] = function () {
                this['_visible'] && this['_sources'] && (this['_index']++, this['_toIndex'] > -0x1 && this['_index'] >= this['_toIndex'] ? this['stop']() : this['_index'] >= this['_sources']['length'] && (this['_index'] = 0x0), this['index'] = this['_index']);
            }, _0x17b7bd['stop'] = function () {
                this['_isPlaying'] = !0x1, _0x591c88['timer']['clear'](this, this['_loop']), this['event']('complete');
            }, _0x17b7bd['_setClipCh' + 'anged'] = function () {
                this['_clipChang' + 'ed'] || (this['_clipChang' + 'ed'] = !0x0, this['callLater'](this['changeClip']));
            }, _0x3e8dc5(0x0, _0x17b7bd, 'interval', function () {
                return this['_interval'];
            }, function (_0x48fa6f) {
                this['_interval'] != _0x48fa6f && (this['_interval'] = _0x48fa6f, this['_isPlaying'] && this['play']());
            }), _0x3e8dc5(0x0, _0x17b7bd, 'skin', function () {
                return this['_skin'];
            }, function (_0x2140ff) {
                this['_skin'] != _0x2140ff && (this['_skin'] = _0x2140ff, _0x2140ff ? _0x501cfb['getRes'](_0x2140ff) ? this['_skinLoade' + 'd']() : _0x591c88['loader']['load'](this['_skin'], _0x7c2cf9['create'](this, this['_skinLoade' + 'd']), null, 'image', 0x1) : this['_bitmap']['source'] = null);
            }), _0x3e8dc5(0x0, _0x17b7bd, 'sources', function () {
                return this['_sources'];
            }, function (_0x328364) {
                this['_sources'] = _0x328364, this['index'] = this['_index'], this['event']('loaded');
            }), _0x3e8dc5(0x0, _0x17b7bd, 'clipX', function () {
                return this['_clipX'];
            }, function (_0x5ab2fa) {
                this['_clipX'] = _0x5ab2fa || 0x1, this['_setClipCh' + 'anged']();
            }), _0x3e8dc5(0x0, _0x17b7bd, 'clipY', function () {
                return this['_clipY'];
            }, function (_0x2e1929) {
                this['_clipY'] = _0x2e1929 || 0x1, this['_setClipCh' + 'anged']();
            }), _0x3e8dc5(0x0, _0x17b7bd, 'total', function () {
                return this['runCallLat' + 'er'](this['changeClip']), this['_sources'] ? this['_sources']['length'] : 0x0;
            }), _0x3e8dc5(0x0, _0x17b7bd, 'clipWidth', function () {
                return this['_clipWidth'];
            }, function (_0x4799b7) {
                this['_clipWidth'] = _0x4799b7, this['_setClipCh' + 'anged']();
            }), _0x3e8dc5(0x0, _0x17b7bd, 'sizeGrid', function () {
                return this['_bitmap']['sizeGrid'] ? this['_bitmap']['sizeGrid']['join'](',') : null;
            }, function (_0x30c052) {
                this['_bitmap']['sizeGrid'] = _0x250d08['fillArray'](_0x48c7cc['defaultSiz' + 'eGrid'], _0x30c052, Number);
            }), _0x3e8dc5(0x0, _0x17b7bd, 'group', function () {
                return this['_group'];
            }, function (_0x19bc7c) {
                _0x19bc7c && this['_skin'] && _0x501cfb['setGroup'](this['_skin'], _0x19bc7c), this['_group'] = _0x19bc7c;
            }), _0x3e8dc5(0x0, _0x17b7bd, 'clipHeight', function () {
                return this['_clipHeigh' + 't'];
            }, function (_0x4d084d) {
                this['_clipHeigh' + 't'] = _0x4d084d, this['_setClipCh' + 'anged']();
            }), _0x3e8dc5(0x0, _0x17b7bd, 'width', _0x31374c['prototype']['_$get_widt' + 'h'], function (_0x1d9686) {
                _0x591c88['superSet'](_0x291fc3, this, 'width', _0x1d9686), this['_bitmap']['width'] = _0x1d9686;
            }), _0x3e8dc5(0x0, _0x17b7bd, 'height', _0x31374c['prototype']['_$get_heig' + 'ht'], function (_0x2afb54) {
                _0x591c88['superSet'](_0x291fc3, this, 'height', _0x2afb54), this['_bitmap']['height'] = _0x2afb54;
            }), _0x3e8dc5(0x0, _0x17b7bd, 'index', function () {
                return this['_index'];
            }, function (_0x1ccc43) {
                this['_index'] = _0x1ccc43, this['_bitmap'] && this['_sources'] && (this['_bitmap']['source'] = this['_sources'][_0x1ccc43]), this['event']('change');
            }), _0x3e8dc5(0x0, _0x17b7bd, 'autoPlay', function () {
                return this['_autoPlay'];
            }, function (_0x384cce) {
                this['_autoPlay'] != _0x384cce && (this['_autoPlay'] = _0x384cce, _0x384cce ? this['play']() : this['stop']());
            }), _0x3e8dc5(0x0, _0x17b7bd, 'isPlaying', function () {
                return this['_isPlaying'];
            }, function (_0x2da7e8) {
                this['_isPlaying'] = _0x2da7e8;
            }), _0x3e8dc5(0x0, _0x17b7bd, 'dataSource', _0x31374c['prototype']['_$get_data' + 'Source'], function (_0x1c4f3) {
                this['_dataSourc' + 'e'] = _0x1c4f3, 'number' == typeof _0x1c4f3 && Math['floor'](_0x1c4f3) == _0x1c4f3 || 'string' == typeof _0x1c4f3 ? this['index'] = parseInt(_0x1c4f3) : _0x591c88['superSet'](_0x291fc3, this, 'dataSource', _0x1c4f3);
            }), _0x3e8dc5(0x0, _0x17b7bd, 'bitmap', function () {
                return this['_bitmap'];
            }), _0x17366d;
        }(_0x291fc3)), _0x3f28fc = function (_0x505ea4) {
            function _0x1169e1() {
                this['changeHand' + 'ler'] = null, this['_gridSize'] = 0xb, this['_bgColor'] = '#ffffff', this['_borderCol' + 'or'] = '#000000', this['_inputColo' + 'r'] = '#000000', this['_inputBgCo' + 'lor'] = '#efefef', this['_colorPane' + 'l'] = null, this['_colorTile' + 's'] = null, this['_colorBloc' + 'k'] = null, this['_colorInpu' + 't'] = null, this['_colorButt' + 'on'] = null, this['_colors'] = [], this['_selectedC' + 'olor'] = '#000000', this['_panelChan' + 'ged'] = !0x1, _0x1169e1['__super']['call'](this);
            }
            _0x49b6a8(_0x1169e1, 'laya.ui.Co' + 'lorPicker', _0x505ea4);
            var _0x4c9bca = _0x1169e1['prototype'];
            return _0x4c9bca['destroy'] = function (_0x533c71) {
                void 0x0 === _0x533c71 && (_0x533c71 = !0x0), _0x505ea4['prototype']['destroy']['call'](this, _0x533c71), this['_colorPane' + 'l'] && this['_colorPane' + 'l']['destroy'](_0x533c71), this['_colorButt' + 'on'] && this['_colorButt' + 'on']['destroy'](_0x533c71), this['_colorPane' + 'l'] = null, this['_colorTile' + 's'] = null, this['_colorBloc' + 'k'] = null, this['_colorInpu' + 't'] = null, this['_colorButt' + 'on'] = null, this['_colors'] = null, this['changeHand' + 'ler'] = null;
            }, _0x4c9bca['createChil' + 'dren'] = function () {
                this['addChild'](this['_colorButt' + 'on'] = new _0x19d5d0()), this['_colorPane' + 'l'] = new _0x51befc(), this['_colorPane' + 'l']['size'](0xe6, 0xa6), this['_colorPane' + 'l']['addChild'](this['_colorTile' + 's'] = new _0x364be4()), this['_colorPane' + 'l']['addChild'](this['_colorBloc' + 'k'] = new _0x364be4()), this['_colorPane' + 'l']['addChild'](this['_colorInpu' + 't'] = new _0x1cabd8());
            }, _0x4c9bca['initialize'] = function () {
                this['_colorButt' + 'on']['on']('click', this, this['onColorBut' + 'tonClick']), this['_colorBloc' + 'k']['pos'](0x5, 0x5), this['_colorInpu' + 't']['pos'](0x3c, 0x5), this['_colorInpu' + 't']['size'](0x3c, 0x14), this['_colorInpu' + 't']['on']('change', this, this['onColorInp' + 'utChange']), this['_colorInpu' + 't']['on']('keydown', this, this['onColorFie' + 'ldKeyDown']), this['_colorTile' + 's']['pos'](0x5, 0x1e), this['_colorTile' + 's']['on']('mousemove', this, this['onColorTil' + 'esMouseMov' + 'e']), this['_colorTile' + 's']['on']('click', this, this['onColorTil' + 'esClick']), this['_colorTile' + 's']['size'](0x14 * this['_gridSize'], 0xc * this['_gridSize']), this['_colorPane' + 'l']['on']('mousedown', this, this['onPanelMou' + 'seDown']), this['bgColor'] = this['_bgColor'];
            }, _0x4c9bca['onPanelMou' + 'seDown'] = function (_0x3965c0) {
                _0x3965c0['stopPropag' + 'ation']();
            }, _0x4c9bca['changePane' + 'l'] = function () {
                this['_panelChan' + 'ged'] = !0x1;
                var _0x4807af = this['_colorPane' + 'l']['graphics'];
                _0x4807af['clear'](!0x0), _0x4807af['drawRect'](0x0, 0x0, 0xe6, 0xa6, this['_bgColor'], this['_borderCol' + 'or']), this['drawBlock'](this['_selectedC' + 'olor']), this['_colorInpu' + 't']['borderColo' + 'r'] = this['_borderCol' + 'or'], this['_colorInpu' + 't']['bgColor'] = this['_inputBgCo' + 'lor'], this['_colorInpu' + 't']['color'] = this['_inputColo' + 'r'], _0x4807af = this['_colorTile' + 's']['graphics'], _0x4807af['clear'](!0x0);
                for (var _0x21e43c = [
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
                        ], _0x4eccac = 0x0; 0xc > _0x4eccac; _0x4eccac++)
                    for (var _0x1222fc = 0x0; 0x14 > _0x1222fc; _0x1222fc++) {
                        var _0x3374cc = 0x0;
                        _0x3374cc = 0x0 === _0x1222fc ? _0x21e43c[_0x4eccac] : 0x1 === _0x1222fc ? 0x0 : 0x33 * (((0x3 * _0x4eccac + _0x1222fc / 0x6) % 0x3 << 0x0) + 0x3 * (_0x4eccac / 0x6 << 0x0)) << 0x10 | _0x1222fc % 0x6 * 0x33 << 0x8 | (_0x4eccac << 0x0) % 0x6 * 0x33;
                        var _0x5d9b3a = _0x250d08['toColor'](_0x3374cc);
                        this['_colors']['push'](_0x5d9b3a);
                        var _0x5225ff = _0x1222fc * this['_gridSize'], _0x15bd5b = _0x4eccac * this['_gridSize'];
                        _0x4807af['drawRect'](_0x5225ff, _0x15bd5b, this['_gridSize'], this['_gridSize'], _0x5d9b3a, '#000000');
                    }
            }, _0x4c9bca['onColorBut' + 'tonClick'] = function (_0x2eb3be) {
                this['_colorPane' + 'l']['parent'] ? this['close']() : this['open']();
            }, _0x4c9bca['open'] = function () {
                var _0x10dc62 = this['localToGlo' + 'bal'](new _0x328408()), _0x12db90 = _0x10dc62['x'] + this['_colorPane' + 'l']['width'] <= _0x591c88['stage']['width'] ? _0x10dc62['x'] : _0x591c88['stage']['width'] - this['_colorPane' + 'l']['width'], _0x5a3db8 = _0x10dc62['y'] + this['_colorButt' + 'on']['height'];
                _0x5a3db8 = _0x5a3db8 + this['_colorPane' + 'l']['height'] <= _0x591c88['stage']['height'] ? _0x5a3db8 : _0x10dc62['y'] - this['_colorPane' + 'l']['height'], this['_colorPane' + 'l']['pos'](_0x12db90, _0x5a3db8), this['_colorPane' + 'l']['zOrder'] = 0x3e9, _0x591c88['_currentSt' + 'age']['addChild'](this['_colorPane' + 'l']), _0x591c88['stage']['on']('mousedown', this, this['removeColo' + 'rBox']);
            }, _0x4c9bca['close'] = function () {
                _0x591c88['stage']['off']('mousedown', this, this['removeColo' + 'rBox']), this['_colorPane' + 'l']['removeSelf']();
            }, _0x4c9bca['removeColo' + 'rBox'] = function (_0x155a3f) {
                this['close']();
            }, _0x4c9bca['onColorFie' + 'ldKeyDown'] = function (_0x53210a) {
                0xd == _0x53210a['keyCode'] && (this['_colorInpu' + 't']['text'] ? this['selectedCo' + 'lor'] = this['_colorInpu' + 't']['text'] : this['selectedCo' + 'lor'] = null, this['close'](), _0x53210a['stopPropag' + 'ation']());
            }, _0x4c9bca['onColorInp' + 'utChange'] = function (_0x2396b9) {
                this['_colorInpu' + 't']['text'] ? this['drawBlock'](this['_colorInpu' + 't']['text']) : this['drawBlock']('#FFFFFF');
            }, _0x4c9bca['onColorTil' + 'esClick'] = function (_0x508211) {
                this['selectedCo' + 'lor'] = this['getColorBy' + 'Mouse'](), this['close']();
            }, _0x4c9bca['onColorTil' + 'esMouseMov' + 'e'] = function (_0x469ca6) {
                this['_colorInpu' + 't']['focus'] = !0x1;
                var _0x1334e6 = this['getColorBy' + 'Mouse']();
                this['_colorInpu' + 't']['text'] = _0x1334e6, this['drawBlock'](_0x1334e6);
            }, _0x4c9bca['getColorBy' + 'Mouse'] = function () {
                var _0x151021 = this['_colorTile' + 's']['getMousePo' + 'int'](), _0x5d4498 = Math['floor'](_0x151021['x'] / this['_gridSize']), _0x299c9b = Math['floor'](_0x151021['y'] / this['_gridSize']);
                return this['_colors'][0x14 * _0x299c9b + _0x5d4498];
            }, _0x4c9bca['drawBlock'] = function (_0x5d1f06) {
                var _0x3ee8b6 = this['_colorBloc' + 'k']['graphics'];
                _0x3ee8b6['clear'](!0x0);
                var _0x3b4682 = _0x5d1f06 ? _0x5d1f06 : '#ffffff';
                _0x3ee8b6['drawRect'](0x0, 0x0, 0x32, 0x14, _0x3b4682, this['_borderCol' + 'or']), _0x5d1f06 || _0x3ee8b6['drawLine'](0x0, 0x0, 0x32, 0x14, '#ff0000');
            }, _0x4c9bca['changeColo' + 'r'] = function () {
                var _0x2ef6ab = this['graphics'];
                _0x2ef6ab['clear'](!0x0);
                var _0x3da337 = this['_selectedC' + 'olor'] || '#000000';
                _0x2ef6ab['drawRect'](0x0, 0x0, this['_colorButt' + 'on']['width'], this['_colorButt' + 'on']['height'], _0x3da337);
            }, _0x4c9bca['_setPanelC' + 'hanged'] = function () {
                this['_panelChan' + 'ged'] || (this['_panelChan' + 'ged'] = !0x0, this['callLater'](this['changePane' + 'l']));
            }, _0x3e8dc5(0x0, _0x4c9bca, 'inputBgCol' + 'or', function () {
                return this['_inputBgCo' + 'lor'];
            }, function (_0x4481ef) {
                this['_inputBgCo' + 'lor'] = _0x4481ef, this['_setPanelC' + 'hanged']();
            }), _0x3e8dc5(0x0, _0x4c9bca, 'selectedCo' + 'lor', function () {
                return this['_selectedC' + 'olor'];
            }, function (_0x53e0f6) {
                this['_selectedC' + 'olor'] != _0x53e0f6 && (this['_selectedC' + 'olor'] = this['_colorInpu' + 't']['text'] = _0x53e0f6, this['drawBlock'](_0x53e0f6), this['changeColo' + 'r'](), this['changeHand' + 'ler'] && this['changeHand' + 'ler']['runWith'](this['_selectedC' + 'olor']), this['event']('change', _0x4cb8fc['EMPTY']['setTo']('change', this, this)));
            }), _0x3e8dc5(0x0, _0x4c9bca, 'skin', function () {
                return this['_colorButt' + 'on']['skin'];
            }, function (_0x4c9b0c) {
                this['_colorButt' + 'on']['once']('loaded', this, this['changeColo' + 'r']), this['_colorButt' + 'on']['skin'] = _0x4c9b0c;
            }), _0x3e8dc5(0x0, _0x4c9bca, 'bgColor', function () {
                return this['_bgColor'];
            }, function (_0x3c6986) {
                this['_bgColor'] = _0x3c6986, this['_setPanelC' + 'hanged']();
            }), _0x3e8dc5(0x0, _0x4c9bca, 'borderColo' + 'r', function () {
                return this['_borderCol' + 'or'];
            }, function (_0x9f8ea) {
                this['_borderCol' + 'or'] = _0x9f8ea, this['_setPanelC' + 'hanged']();
            }), _0x3e8dc5(0x0, _0x4c9bca, 'inputColor', function () {
                return this['_inputColo' + 'r'];
            }, function (_0x61cc76) {
                this['_inputColo' + 'r'] = _0x61cc76, this['_setPanelC' + 'hanged']();
            }), _0x1169e1;
        }(_0x291fc3), _0x3aaf9b = function (_0x2e5d63) {
            function _0x1729f8(_0x5957f6) {
                this['changeHand' + 'ler'] = null, this['_bg'] = null, this['_bar'] = null, this['_skin'] = null, this['_value'] = 0.5, _0x1729f8['__super']['call'](this), this['skin'] = _0x5957f6;
            }
            _0x49b6a8(_0x1729f8, 'laya.ui.Pr' + 'ogressBar', _0x2e5d63);
            var _0x23c80e = _0x1729f8['prototype'];
            return _0x23c80e['destroy'] = function (_0x3424e7) {
                void 0x0 === _0x3424e7 && (_0x3424e7 = !0x0), _0x2e5d63['prototype']['destroy']['call'](this, _0x3424e7), this['_bg'] && this['_bg']['destroy'](_0x3424e7), this['_bar'] && this['_bar']['destroy'](_0x3424e7), this['_bg'] = this['_bar'] = null, this['changeHand' + 'ler'] = null;
            }, _0x23c80e['createChil' + 'dren'] = function () {
                this['addChild'](this['_bg'] = new _0x43423b()), this['addChild'](this['_bar'] = new _0x43423b()), this['_bar']['_bitmap']['autoCacheC' + 'md'] = !0x1;
            }, _0x23c80e['_skinLoade' + 'd'] = function () {
                this['_bg']['skin'] = this['_skin'], this['_bar']['skin'] = this['_skin']['replace']('.png', '$bar.png'), this['callLater'](this['changeValu' + 'e']), this['_sizeChang' + 'ed'](), this['event']('loaded');
            }, _0x23c80e['measureWid' + 'th'] = function () {
                return this['_bg']['width'];
            }, _0x23c80e['measureHei' + 'ght'] = function () {
                return this['_bg']['height'];
            }, _0x23c80e['changeValu' + 'e'] = function () {
                if (this['sizeGrid']) {
                    var _0x57dc8c = this['sizeGrid']['split'](','), _0xdc1b4e = Number(_0x57dc8c[0x3]), _0x160342 = Number(_0x57dc8c[0x1]), _0x6f6e89 = this['width'] - _0xdc1b4e - _0x160342, _0x16eb7e = _0x6f6e89 * this['_value'];
                    this['_bar']['width'] = _0xdc1b4e + _0x160342 + _0x16eb7e, this['_bar']['visible'] = this['_bar']['width'] > _0xdc1b4e + _0x160342;
                } else
                    this['_bar']['width'] = this['width'] * this['_value'];
            }, _0x3e8dc5(0x0, _0x23c80e, 'dataSource', _0x2e5d63['prototype']['_$get_data' + 'Source'], function (_0x2eedf4) {
                this['_dataSourc' + 'e'] = _0x2eedf4, 'number' == typeof _0x2eedf4 || 'string' == typeof _0x2eedf4 ? this['value'] = Number(_0x2eedf4) : _0x591c88['superSet'](_0x291fc3, this, 'dataSource', _0x2eedf4);
            }), _0x3e8dc5(0x0, _0x23c80e, 'skin', function () {
                return this['_skin'];
            }, function (_0x364a49) {
                this['_skin'] != _0x364a49 && (this['_skin'] = _0x364a49, this['_skin'] && !_0x501cfb['getRes'](this['_skin']) ? _0x591c88['loader']['load'](this['_skin'], _0x7c2cf9['create'](this, this['_skinLoade' + 'd']), null, 'image', 0x1) : this['_skinLoade' + 'd']());
            }), _0x3e8dc5(0x0, _0x23c80e, 'height', _0x2e5d63['prototype']['_$get_heig' + 'ht'], function (_0x367175) {
                _0x591c88['superSet'](_0x291fc3, this, 'height', _0x367175), this['_bg']['height'] = this['_height'], this['_bar']['height'] = this['_height'];
            }), _0x3e8dc5(0x0, _0x23c80e, 'bar', function () {
                return this['_bar'];
            }), _0x3e8dc5(0x0, _0x23c80e, 'value', function () {
                return this['_value'];
            }, function (_0x5db318) {
                this['_value'] != _0x5db318 && (_0x5db318 = _0x5db318 > 0x1 ? 0x1 : 0x0 > _0x5db318 ? 0x0 : _0x5db318, this['_value'] = _0x5db318, this['callLater'](this['changeValu' + 'e']), this['event']('change'), this['changeHand' + 'ler'] && this['changeHand' + 'ler']['runWith'](_0x5db318));
            }), _0x3e8dc5(0x0, _0x23c80e, 'bg', function () {
                return this['_bg'];
            }), _0x3e8dc5(0x0, _0x23c80e, 'sizeGrid', function () {
                return this['_bg']['sizeGrid'];
            }, function (_0xfc71fd) {
                this['_bg']['sizeGrid'] = this['_bar']['sizeGrid'] = _0xfc71fd;
            }), _0x3e8dc5(0x0, _0x23c80e, 'width', _0x2e5d63['prototype']['_$get_widt' + 'h'], function (_0x478578) {
                _0x591c88['superSet'](_0x291fc3, this, 'width', _0x478578), this['_bg']['width'] = this['_width'], this['callLater'](this['changeValu' + 'e']);
            }), _0x1729f8;
        }(_0x291fc3), _0x5cbd76 = function (_0x11cdb4) {
            function _0x5efbd3(_0x32dc32) {
                this['rollRatio'] = 0.97, this['changeHand' + 'ler'] = null, this['scaleBar'] = !0x0, this['autoHide'] = !0x1, this['elasticDis' + 'tance'] = 0x0, this['elasticBac' + 'kTime'] = 0x1f4, this['upButton'] = null, this['downButton'] = null, this['slider'] = null, this['_scrollSiz' + 'e'] = 0x1, this['_skin'] = null, this['_thumbPerc' + 'ent'] = 0x1, this['_target'] = null, this['_lastPoint'] = null, this['_lastOffse' + 't'] = 0x0, this['_checkElas' + 'tic'] = !0x1, this['_isElastic'] = !0x1, this['_value'] = NaN, this['_hide'] = !0x1, this['_clickOnly'] = !0x0, this['_offsets'] = null, this['isLockedFu' + 'n'] = null, this['triggerDow' + 'nDragLimit'] = null, this['triggerUpD' + 'ragLimit'] = null, _0x5efbd3['__super']['call'](this), this['_showButto' + 'ns'] = _0xa85e7c['showButton' + 's'], this['_touchScro' + 'llEnable'] = _0xa85e7c['touchScrol' + 'lEnable'], this['_mouseWhee' + 'lEnable'] = _0xa85e7c['mouseWheel' + 'Enable'], this['skin'] = _0x32dc32, this['max'] = 0x1;
            }
            _0x49b6a8(_0x5efbd3, 'laya.ui.Sc' + 'rollBar', _0x11cdb4);
            var _0x10eda4 = _0x5efbd3['prototype'];
            return _0x10eda4['destroy'] = function (_0x268590) {
                void 0x0 === _0x268590 && (_0x268590 = !0x0), this['stopScroll'](), this['target'] = null, _0x11cdb4['prototype']['destroy']['call'](this, _0x268590), this['upButton'] && this['upButton']['destroy'](_0x268590), this['downButton'] && this['downButton']['destroy'](_0x268590), this['slider'] && this['slider']['destroy'](_0x268590), this['upButton'] = this['downButton'] = null, this['slider'] = null, this['changeHand' + 'ler'] = null, this['_offsets'] = null;
            }, _0x10eda4['createChil' + 'dren'] = function () {
                this['addChild'](this['slider'] = new _0xd72b9d()), this['addChild'](this['upButton'] = new _0x19d5d0()), this['addChild'](this['downButton'] = new _0x19d5d0());
            }, _0x10eda4['initialize'] = function () {
                this['slider']['showLabel'] = !0x1, this['slider']['tick'] = 0x0, this['slider']['on']('change', this, this['onSliderCh' + 'ange']), this['slider']['setSlider'](0x0, 0x0, 0x0), this['upButton']['on']('mousedown', this, this['onButtonMo' + 'useDown']), this['downButton']['on']('mousedown', this, this['onButtonMo' + 'useDown']);
            }, _0x10eda4['onSliderCh' + 'ange'] = function () {
                this['_value'] != this['slider']['value'] && (this['value'] = this['slider']['value']);
            }, _0x10eda4['onButtonMo' + 'useDown'] = function (_0x36e08a) {
                var _0x5698ad = _0x36e08a['currentTar' + 'get'] === this['upButton'];
                this['slide'](_0x5698ad), _0x591c88['timer']['once'](_0x48c7cc['scrollBarD' + 'elayTime'], this, this['startLoop'], [_0x5698ad]), _0x591c88['stage']['once']('mouseup', this, this['onStageMou' + 'seUp']);
            }, _0x10eda4['startLoop'] = function (_0x3a6c56) {
                _0x591c88['timer']['frameLoop'](0x1, this, this['slide'], [_0x3a6c56]);
            }, _0x10eda4['slide'] = function (_0x3112cf) {
                _0x3112cf ? this['value'] -= this['_scrollSiz' + 'e'] : this['value'] += this['_scrollSiz' + 'e'];
            }, _0x10eda4['onStageMou' + 'seUp'] = function (_0x406aaa) {
                _0x591c88['timer']['clear'](this, this['startLoop']), _0x591c88['timer']['clear'](this, this['slide']);
            }, _0x10eda4['_skinLoade' + 'd'] = function () {
                this['slider']['skin'] = this['_skin'], this['callLater'](this['changeScro' + 'llBar']), this['_sizeChang' + 'ed'](), this['event']('loaded');
            }, _0x10eda4['changeScro' + 'llBar'] = function () {
                this['upButton']['visible'] = this['_showButto' + 'ns'], this['downButton']['visible'] = this['_showButto' + 'ns'], this['_showButto' + 'ns'] && (this['upButton']['skin'] = this['_skin']['replace']('.png', '$up.png'), this['downButton']['skin'] = this['_skin']['replace']('.png', '$down.png')), this['slider']['isVertical'] ? this['slider']['y'] = this['_showButto' + 'ns'] ? this['upButton']['height'] : 0x0 : this['slider']['x'] = this['_showButto' + 'ns'] ? this['upButton']['width'] : 0x0, this['resetPosit' + 'ions'](), this['repaint']();
            }, _0x10eda4['_sizeChang' + 'ed'] = function () {
                _0x11cdb4['prototype']['_sizeChang' + 'ed']['call'](this), this['repaint'](), this['resetPosit' + 'ions'](), this['event']('change'), this['changeHand' + 'ler'] && this['changeHand' + 'ler']['runWith'](this['value']);
            }, _0x10eda4['resetPosit' + 'ions'] = function () {
                this['slider']['isVertical'] ? this['slider']['height'] = this['height'] - (this['_showButto' + 'ns'] ? this['upButton']['height'] + this['downButton']['height'] : 0x0) : this['slider']['width'] = this['width'] - (this['_showButto' + 'ns'] ? this['upButton']['width'] + this['downButton']['width'] : 0x0), this['resetButto' + 'nPosition']();
            }, _0x10eda4['resetButto' + 'nPosition'] = function () {
                this['slider']['isVertical'] ? this['downButton']['y'] = this['slider']['_y'] + this['slider']['height'] : this['downButton']['x'] = this['slider']['_x'] + this['slider']['width'];
            }, _0x10eda4['measureWid' + 'th'] = function () {
                return this['slider']['isVertical'] ? this['slider']['width'] : 0x64;
            }, _0x10eda4['measureHei' + 'ght'] = function () {
                return this['slider']['isVertical'] ? 0x64 : this['slider']['height'];
            }, _0x10eda4['setScroll'] = function (_0x1f353d, _0x1fe5c4, _0x173fb0) {
                this['runCallLat' + 'er'](this['_sizeChang' + 'ed']), this['slider']['setSlider'](_0x1f353d, _0x1fe5c4, _0x173fb0), this['slider']['bar']['visible'] = _0x1fe5c4 > 0x0, !this['_hide'] && this['autoHide'] && (this['visible'] = !0x1);
            }, _0x10eda4['onTargetMo' + 'useWheel'] = function (_0x312ebb) {
                this['value'] -= _0x312ebb['delta'] * this['_scrollSiz' + 'e'], this['target'] = this['_target'];
            }, _0x10eda4['onTargetMo' + 'useDown'] = function (_0x4fb9d6) {
                (!this['isLockedFu' + 'n'] || this['isLockedFu' + 'n'](_0x4fb9d6)) && (this['event']('end'), this['_clickOnly'] = !0x0, this['_lastOffse' + 't'] = 0x0, this['_checkElas' + 'tic'] = !0x1, this['_lastPoint'] || (this['_lastPoint'] = new _0x328408()), this['_lastPoint']['setTo'](_0x591c88['stage']['mouseX'], _0x591c88['stage']['mouseY']), _0x591c88['timer']['clear'](this, this['tweenMove']), _0x564173['clearTween'](this), _0x591c88['stage']['once']('mouseup', this, this['onStageMou' + 'seUp2']), _0x591c88['stage']['once']('mouseout', this, this['onStageMou' + 'seUp2']), _0x591c88['timer']['frameLoop'](0x1, this, this['loop']));
            }, _0x10eda4['startDragF' + 'orce'] = function () {
                this['_clickOnly'] = !0x0, this['_lastOffse' + 't'] = 0x0, this['_checkElas' + 'tic'] = !0x1, this['_lastPoint'] || (this['_lastPoint'] = new _0x328408()), this['_lastPoint']['setTo'](_0x591c88['stage']['mouseX'], _0x591c88['stage']['mouseY']), _0x591c88['timer']['clear'](this, this['tweenMove']), _0x564173['clearTween'](this), _0x591c88['stage']['once']('mouseup', this, this['onStageMou' + 'seUp2']), _0x591c88['stage']['once']('mouseout', this, this['onStageMou' + 'seUp2']), _0x591c88['timer']['frameLoop'](0x1, this, this['loop']);
            }, _0x10eda4['cancelDrag' + 'Op'] = function () {
                _0x591c88['stage']['off']('mouseup', this, this['onStageMou' + 'seUp2']), _0x591c88['stage']['off']('mouseout', this, this['onStageMou' + 'seUp2']), _0x591c88['timer']['clear'](this, this['tweenMove']), _0x591c88['timer']['clear'](this, this['loop']), this['_target']['mouseEnabl' + 'ed'] = !0x0;
            }, _0x10eda4['checkTrigg' + 'ers'] = function (_0x5a9716) {
                return void 0x0 === _0x5a9716 && (_0x5a9716 = !0x1), this['value'] >= 0x0 && this['value'] - this['_lastOffse' + 't'] <= 0x0 && this['triggerDow' + 'nDragLimit'] && this['triggerDow' + 'nDragLimit'](_0x5a9716) ? (this['cancelDrag' + 'Op'](), this['value'] = 0x0, !0x0) : this['value'] <= this['max'] && this['value'] - this['_lastOffse' + 't'] >= this['max'] && this['triggerUpD' + 'ragLimit'] && this['triggerUpD' + 'ragLimit'](_0x5a9716) ? (this['cancelDrag' + 'Op'](), this['value'] = this['max'], !0x0) : !0x1;
            }, _0x10eda4['startTween' + 'MoveForce'] = function (_0x2f01ee) {
                this['_lastOffse' + 't'] = _0x2f01ee, _0x591c88['timer']['frameLoop'](0x1, this, this['tweenMove'], [0xc8]);
            }, _0x10eda4['loop'] = function () {
                var _0x4545d9 = _0x591c88['stage']['mouseY'], _0x83743 = _0x591c88['stage']['mouseX'];
                if (this['_lastOffse' + 't'] = this['isVertical'] ? _0x4545d9 - this['_lastPoint']['y'] : _0x83743 - this['_lastPoint']['x'], this['_clickOnly']) {
                    if (!(Math['abs'](this['_lastOffse' + 't'] * (this['isVertical'] ? _0x591c88['stage']['_canvasTra' + 'nsform']['getScaleY']() : _0x591c88['stage']['_canvasTra' + 'nsform']['getScaleX']())) > 0x1))
                        return;
                    if (this['_clickOnly'] = !0x1, this['checkTrigg' + 'ers']())
                        return;
                    this['_offsets'] || (this['_offsets'] = []), this['_offsets']['length'] = 0x0, this['_target']['mouseEnabl' + 'ed'] = !0x1, !this['hide'] && this['autoHide'] && (this['alpha'] = 0x1, this['visible'] = !0x0), this['event']('start');
                } else {
                    if (this['checkTrigg' + 'ers']())
                        return;
                }
                this['_offsets']['push'](this['_lastOffse' + 't']), this['_lastPoint']['x'] = _0x83743, this['_lastPoint']['y'] = _0x4545d9, 0x0 !== this['_lastOffse' + 't'] && (this['_checkElas' + 'tic'] || (this['elasticDis' + 'tance'] > 0x0 ? this['_checkElas' + 'tic'] || 0x0 == this['_lastOffse' + 't'] || (this['_lastOffse' + 't'] > 0x0 && this['_value'] <= this['min'] || this['_lastOffse' + 't'] < 0x0 && this['_value'] >= this['max'] ? (this['_isElastic'] = !0x0, this['_checkElas' + 'tic'] = !0x0) : this['_isElastic'] = !0x1) : this['_checkElas' + 'tic'] = !0x0), this['_isElastic'] ? this['_value'] <= this['min'] ? this['_lastOffse' + 't'] > 0x0 ? this['value'] -= this['_lastOffse' + 't'] * Math['max'](0x0, 0x1 - (this['min'] - this['_value']) / this['elasticDis' + 'tance']) : (this['value'] -= 0.5 * this['_lastOffse' + 't'], this['_value'] >= this['min'] && (this['_checkElas' + 'tic'] = !0x1)) : this['_value'] >= this['max'] && (this['_lastOffse' + 't'] < 0x0 ? this['value'] -= this['_lastOffse' + 't'] * Math['max'](0x0, 0x1 - (this['_value'] - this['max']) / this['elasticDis' + 'tance']) : (this['value'] -= 0.5 * this['_lastOffse' + 't'], this['_value'] <= this['max'] && (this['_checkElas' + 'tic'] = !0x1))) : this['value'] -= this['_lastOffse' + 't']);
            }, _0x10eda4['onStageMou' + 'seUp2'] = function (_0x29e5b3) {
                if (_0x591c88['stage']['off']('mouseup', this, this['onStageMou' + 'seUp2']), _0x591c88['stage']['off']('mouseout', this, this['onStageMou' + 'seUp2']), _0x591c88['timer']['clear'](this, this['loop']), !(this['_clickOnly'] && this['_value'] >= this['min'] && this['_value'] <= this['max'])) {
                    if (this['_target']['mouseEnabl' + 'ed'] = !0x0, this['_isElastic'])
                        this['_value'] < this['min'] ? _0x564173['to'](this, { 'value': this['min'] }, this['elasticBac' + 'kTime'], _0x35df26['sineOut'], _0x7c2cf9['create'](this, this['elasticOve' + 'r'])) : this['_value'] > this['max'] && _0x564173['to'](this, { 'value': this['max'] }, this['elasticBac' + 'kTime'], _0x35df26['sineOut'], _0x7c2cf9['create'](this, this['elasticOve' + 'r']));
                    else {
                        if (!this['_offsets'])
                            return;
                        this['_offsets']['length'] < 0x1 && (this['_offsets'][0x0] = this['isVertical'] ? _0x591c88['stage']['mouseY'] - this['_lastPoint']['y'] : _0x591c88['stage']['mouseX'] - this['_lastPoint']['x']);
                        for (var _0xe4872a = 0x0, _0x1689ed = Math['min'](this['_offsets']['length'], 0x3), _0xf2f3fb = 0x0; _0x1689ed > _0xf2f3fb; _0xf2f3fb++)
                            _0xe4872a += this['_offsets'][this['_offsets']['length'] - 0x1 - _0xf2f3fb];
                        if (this['_lastOffse' + 't'] = _0xe4872a / _0x1689ed, _0xe4872a = Math['abs'](this['_lastOffse' + 't']), 0x2 > _0xe4872a)
                            return void this['event']('end');
                        _0xe4872a > 0xfa && (this['_lastOffse' + 't'] = this['_lastOffse' + 't'] > 0x0 ? 0xfa : -0xfa);
                        var _0x10881d = Math['round'](Math['abs'](this['elasticDis' + 'tance'] * (this['_lastOffse' + 't'] / 0x96)));
                        _0x591c88['timer']['frameLoop'](0x1, this, this['tweenMove'], [_0x10881d]);
                    }
                }
            }, _0x10eda4['elasticOve' + 'r'] = function () {
                this['_isElastic'] = !0x1, !this['hide'] && this['autoHide'] && _0x564173['to'](this, { 'alpha': 0x0 }, 0x1f4), this['event']('end');
            }, _0x10eda4['tweenMove'] = function (_0x5e6da4) {
                if (this['_lastOffse' + 't'] *= this['rollRatio'], !this['checkTrigg' + 'ers'](!0x0)) {
                    var _0x40ef11 = NaN;
                    if (_0x5e6da4 > 0x0 && (this['_lastOffse' + 't'] > 0x0 && this['value'] <= this['min'] ? (this['_isElastic'] = !0x0, _0x40ef11 = 0.5 * -(this['min'] - _0x5e6da4 - this['value']), this['_lastOffse' + 't'] > _0x40ef11 && (this['_lastOffse' + 't'] = _0x40ef11)) : this['_lastOffse' + 't'] < 0x0 && this['value'] >= this['max'] && (this['_isElastic'] = !0x0, _0x40ef11 = 0.5 * -(this['max'] + _0x5e6da4 - this['value']), this['_lastOffse' + 't'] < _0x40ef11 && (this['_lastOffse' + 't'] = _0x40ef11))), this['value'] -= this['_lastOffse' + 't'], Math['abs'](this['_lastOffse' + 't']) < 0.1) {
                        if (_0x591c88['timer']['clear'](this, this['tweenMove']), this['_isElastic'])
                            return void (this['_value'] < this['min'] ? _0x564173['to'](this, { 'value': this['min'] }, this['elasticBac' + 'kTime'], _0x35df26['sineOut'], _0x7c2cf9['create'](this, this['elasticOve' + 'r'])) : this['_value'] > this['max'] ? _0x564173['to'](this, { 'value': this['max'] }, this['elasticBac' + 'kTime'], _0x35df26['sineOut'], _0x7c2cf9['create'](this, this['elasticOve' + 'r'])) : this['elasticOve' + 'r']());
                        this['event']('end'), !this['hide'] && this['autoHide'] && _0x564173['to'](this, { 'alpha': 0x0 }, 0x1f4);
                    }
                }
            }, _0x10eda4['stopScroll'] = function () {
                this['onStageMou' + 'seUp2'](null), _0x591c88['timer']['clear'](this, this['tweenMove']), _0x564173['clearTween'](this);
            }, _0x3e8dc5(0x0, _0x10eda4, 'thumbPerce' + 'nt', function () {
                return this['_thumbPerc' + 'ent'];
            }, function (_0x10d7f5) {
                this['runCallLat' + 'er'](this['changeScro' + 'llBar']), this['runCallLat' + 'er'](this['_sizeChang' + 'ed']), _0x10d7f5 = _0x10d7f5 >= 0x1 ? 0.99 : _0x10d7f5, this['_thumbPerc' + 'ent'] = _0x10d7f5, this['scaleBar'] && (this['slider']['isVertical'] ? this['slider']['bar']['height'] = Math['max'](this['slider']['height'] * _0x10d7f5, _0x48c7cc['scrollBarM' + 'inNum']) : this['slider']['bar']['width'] = Math['max'](this['slider']['width'] * _0x10d7f5, _0x48c7cc['scrollBarM' + 'inNum']));
            }), _0x3e8dc5(0x0, _0x10eda4, 'dataSource', _0x11cdb4['prototype']['_$get_data' + 'Source'], function (_0x1e0545) {
                this['_dataSourc' + 'e'] = _0x1e0545, 'number' == typeof _0x1e0545 || 'string' == typeof _0x1e0545 ? this['value'] = Number(_0x1e0545) : _0x591c88['superSet'](_0x291fc3, this, 'dataSource', _0x1e0545);
            }), _0x3e8dc5(0x0, _0x10eda4, 'skin', function () {
                return this['_skin'];
            }, function (_0x4147fb) {
                '\x20' != _0x4147fb && this['_skin'] != _0x4147fb && (this['_skin'] = _0x4147fb, this['_skin'] && !_0x501cfb['getRes'](this['_skin']) ? _0x591c88['loader']['load']([
                    this['_skin'],
                    this['_skin']['replace']('.png', '$up.png'),
                    this['_skin']['replace']('.png', '$down.png'),
                    this['_skin']['replace']('.png', '$bar.png')
                ], _0x7c2cf9['create'](this, this['_skinLoade' + 'd'])) : this['_skinLoade' + 'd']());
            }), _0x3e8dc5(0x0, _0x10eda4, 'max', function () {
                return this['slider']['max'];
            }, function (_0x5851d8) {
                this['slider']['max'] = _0x5851d8;
            }), _0x3e8dc5(0x0, _0x10eda4, 'min', function () {
                return this['slider']['min'];
            }, function (_0x2da758) {
                this['slider']['min'] = _0x2da758;
            }), _0x3e8dc5(0x0, _0x10eda4, 'value', function () {
                return this['_value'];
            }, function (_0x304014) {
                _0x304014 !== this['_value'] && (this['_value'] = _0x304014, this['_isElastic'] || (this['slider']['_value'] != _0x304014 && (this['slider']['_value'] = _0x304014, this['slider']['changeValu' + 'e']()), this['_value'] = this['slider']['_value']), this['event']('change'), this['changeHand' + 'ler'] && this['changeHand' + 'ler']['runWith'](this['_value']));
            }), _0x3e8dc5(0x0, _0x10eda4, 'isVertical', function () {
                return this['slider']['isVertical'];
            }, function (_0x48551d) {
                this['slider']['isVertical'] = _0x48551d;
            }), _0x3e8dc5(0x0, _0x10eda4, 'sizeGrid', function () {
                return this['slider']['sizeGrid'];
            }, function (_0x563bc3) {
                this['slider']['sizeGrid'] = _0x563bc3;
            }), _0x3e8dc5(0x0, _0x10eda4, 'scrollSize', function () {
                return this['_scrollSiz' + 'e'];
            }, function (_0x1e875b) {
                this['_scrollSiz' + 'e'] = _0x1e875b;
            }), _0x3e8dc5(0x0, _0x10eda4, 'target', function () {
                return this['_target'];
            }, function (_0x43f7e9) {
                this['_target'] && (this['_target']['off']('mousewheel', this, this['onTargetMo' + 'useWheel']), this['_target']['off']('mousedown', this, this['onTargetMo' + 'useDown'])), this['_target'] = _0x43f7e9, _0x43f7e9 && (this['_mouseWhee' + 'lEnable'] && this['_target']['on']('mousewheel', this, this['onTargetMo' + 'useWheel']), this['_touchScro' + 'llEnable'] && this['_target']['on']('mousedown', this, this['onTargetMo' + 'useDown']));
            }), _0x3e8dc5(0x0, _0x10eda4, 'hide', function () {
                return this['_hide'];
            }, function (_0x3c4bc6) {
                this['_hide'] = _0x3c4bc6, this['visible'] = !_0x3c4bc6;
            }), _0x3e8dc5(0x0, _0x10eda4, 'showButton' + 's', function () {
                return this['_showButto' + 'ns'];
            }, function (_0x4374b6) {
                this['_showButto' + 'ns'] = _0x4374b6, this['callLater'](this['changeScro' + 'llBar']);
            }), _0x3e8dc5(0x0, _0x10eda4, 'touchScrol' + 'lEnable', function () {
                return this['_touchScro' + 'llEnable'];
            }, function (_0x37b19e) {
                this['_touchScro' + 'llEnable'] = _0x37b19e, this['target'] = this['_target'];
            }), _0x3e8dc5(0x0, _0x10eda4, 'mouseWheel' + 'Enable', function () {
                return this['_mouseWhee' + 'lEnable'];
            }, function (_0x3d6fb9) {
                this['_mouseWhee' + 'lEnable'] = _0x3d6fb9, this['target'] = this['_target'];
            }), _0x3e8dc5(0x0, _0x10eda4, 'lastOffset', function () {
                return this['_lastOffse' + 't'];
            }), _0x3e8dc5(0x0, _0x10eda4, 'tick', function () {
                return this['slider']['tick'];
            }, function (_0x1c959e) {
                this['slider']['tick'] = _0x1c959e;
            }), _0x5efbd3;
        }(_0x291fc3), _0xd72b9d = function (_0x15febb) {
            function _0x2aec3c(_0x461cf3) {
                this['changeHand' + 'ler'] = null, this['isVertical'] = !0x0, this['showLabel'] = !0x0, this['_allowClic' + 'kBack'] = !0x1, this['_max'] = 0x64, this['_min'] = 0x0, this['_tick'] = 0x1, this['_value'] = 0x0, this['_skin'] = null, this['_bg'] = null, this['_progress'] = null, this['_bar'] = null, this['_tx'] = NaN, this['_ty'] = NaN, this['_maxMove'] = NaN, this['_globalSac' + 'le'] = null, _0x2aec3c['__super']['call'](this), this['skin'] = _0x461cf3;
            }
            _0x49b6a8(_0x2aec3c, 'laya.ui.Sl' + 'ider', _0x15febb);
            var _0x275a9e = _0x2aec3c['prototype'];
            return _0x275a9e['destroy'] = function (_0x1193ec) {
                void 0x0 === _0x1193ec && (_0x1193ec = !0x0), _0x15febb['prototype']['destroy']['call'](this, _0x1193ec), this['_bg'] && this['_bg']['destroy'](_0x1193ec), this['_bar'] && this['_bar']['destroy'](_0x1193ec), this['_progress'] && this['_progress']['destroy'](_0x1193ec), this['_bg'] = null, this['_bar'] = null, this['_progress'] = null, this['changeHand' + 'ler'] = null;
            }, _0x275a9e['createChil' + 'dren'] = function () {
                this['addChild'](this['_bg'] = new _0x43423b()), this['addChild'](this['_bar'] = new _0x19d5d0());
            }, _0x275a9e['initialize'] = function () {
                this['_bar']['on']('mousedown', this, this['onBarMouse' + 'Down']), this['_bg']['sizeGrid'] = this['_bar']['sizeGrid'] = '4,4,4,4,0', this['_progress'] && (this['_progress']['sizeGrid'] = this['_bar']['sizeGrid']), this['allowClick' + 'Back'] = !0x0;
            }, _0x275a9e['onBarMouse' + 'Down'] = function (_0x4e75f1) {
                this['_globalSac' + 'le'] || (this['_globalSac' + 'le'] = new _0x328408()), this['_globalSac' + 'le']['setTo'](this['globalScal' + 'eX'] || 0.01, this['globalScal' + 'eY'] || 0.01), this['_maxMove'] = this['isVertical'] ? this['height'] - this['_bar']['height'] : this['width'] - this['_bar']['width'], this['_tx'] = _0x591c88['stage']['mouseX'], this['_ty'] = _0x591c88['stage']['mouseY'], _0x591c88['stage']['on']('mousemove', this, this['mouseMove']), _0x591c88['stage']['once']('mouseup', this, this['mouseUp']), _0x591c88['stage']['once']('mouseout', this, this['mouseUp']), this['showValueT' + 'ext']();
            }, _0x275a9e['showValueT' + 'ext'] = function () {
                if (this['showLabel']) {
                    var _0x4bdfe6 = laya['ui']['Slider']['label'];
                    this['addChild'](_0x4bdfe6), _0x4bdfe6['textField']['changeText'](this['_value'] + ''), this['isVertical'] ? (_0x4bdfe6['x'] = this['_bar']['_x'] + 0x14, _0x4bdfe6['y'] = 0.5 * (this['_bar']['height'] - _0x4bdfe6['height']) + this['_bar']['_y']) : (_0x4bdfe6['y'] = this['_bar']['_y'] - 0x14, _0x4bdfe6['x'] = 0.5 * (this['_bar']['width'] - _0x4bdfe6['width']) + this['_bar']['_x']);
                }
            }, _0x275a9e['hideValueT' + 'ext'] = function () {
                laya['ui']['Slider']['label'] && laya['ui']['Slider']['label']['removeSelf']();
            }, _0x275a9e['mouseUp'] = function (_0x257c56) {
                _0x591c88['stage']['off']('mousemove', this, this['mouseMove']), _0x591c88['stage']['off']('mouseup', this, this['mouseUp']), _0x591c88['stage']['off']('mouseout', this, this['mouseUp']), this['sendChange' + 'Event']('changed'), this['hideValueT' + 'ext']();
            }, _0x275a9e['mouseMove'] = function (_0x1e39c6) {
                var _0x114d65 = this['_value'];
                if (this['isVertical'] ? (this['_bar']['y'] += (_0x591c88['stage']['mouseY'] - this['_ty']) / this['_globalSac' + 'le']['y'], this['_bar']['_y'] > this['_maxMove'] ? this['_bar']['y'] = this['_maxMove'] : this['_bar']['_y'] < 0x0 && (this['_bar']['y'] = 0x0), this['_value'] = this['_bar']['_y'] / this['_maxMove'] * (this['_max'] - this['_min']) + this['_min'], this['_progress'] && (this['_progress']['height'] = this['_bar']['_y'] + 0.5 * this['_bar']['height'])) : (this['_bar']['x'] += (_0x591c88['stage']['mouseX'] - this['_tx']) / this['_globalSac' + 'le']['x'], this['_bar']['_x'] > this['_maxMove'] ? this['_bar']['x'] = this['_maxMove'] : this['_bar']['_x'] < 0x0 && (this['_bar']['x'] = 0x0), this['_value'] = this['_bar']['_x'] / this['_maxMove'] * (this['_max'] - this['_min']) + this['_min'], this['_progress'] && (this['_progress']['width'] = this['_bar']['_x'] + 0.5 * this['_bar']['width'])), this['_tx'] = _0x591c88['stage']['mouseX'], this['_ty'] = _0x591c88['stage']['mouseY'], 0x0 != this['_tick']) {
                    var _0x6ddd0c = Math['pow'](0xa, (this['_tick'] + '')['length'] - 0x1);
                    this['_value'] = Math['round'](Math['round'](this['_value'] / this['_tick']) * this['_tick'] * _0x6ddd0c) / _0x6ddd0c;
                }
                this['_value'] != _0x114d65 && this['sendChange' + 'Event'](), this['showValueT' + 'ext']();
            }, _0x275a9e['sendChange' + 'Event'] = function (_0x28b9a7) {
                void 0x0 === _0x28b9a7 && (_0x28b9a7 = 'change'), this['event'](_0x28b9a7), this['changeHand' + 'ler'] && this['changeHand' + 'ler']['runWith'](this['_value']);
            }, _0x275a9e['_skinLoade' + 'd'] = function () {
                this['_bg']['skin'] = this['_skin'], this['_bar']['skin'] = this['_skin']['replace']('.png', '$bar.png');
                var _0x5bd68a = this['_skin']['replace']('.png', '$progress.' + 'png');
                _0x501cfb['getRes'](_0x5bd68a) && (this['_progress'] || (this['addChild'](this['_progress'] = new _0x43423b()), this['_progress']['sizeGrid'] = this['_bar']['sizeGrid'], this['setChildIn' + 'dex'](this['_progress'], 0x1)), this['_progress']['skin'] = _0x5bd68a), this['setBarPoin' + 't'](), this['callLater'](this['changeValu' + 'e']), this['_sizeChang' + 'ed'](), this['event']('loaded');
            }, _0x275a9e['setBarPoin' + 't'] = function () {
                this['isVertical'] ? this['_bar']['x'] = Math['round'](0.5 * (this['_bg']['width'] - this['_bar']['width'])) : this['_bar']['y'] = Math['round'](0.5 * (this['_bg']['height'] - this['_bar']['height']));
            }, _0x275a9e['measureWid' + 'th'] = function () {
                return Math['max'](this['_bg']['width'], this['_bar']['width']);
            }, _0x275a9e['measureHei' + 'ght'] = function () {
                return Math['max'](this['_bg']['height'], this['_bar']['height']);
            }, _0x275a9e['_sizeChang' + 'ed'] = function () {
                _0x15febb['prototype']['_sizeChang' + 'ed']['call'](this), this['isVertical'] ? this['_bg']['height'] = this['height'] : this['_bg']['width'] = this['width'], this['setBarPoin' + 't'](), this['changeValu' + 'e']();
            }, _0x275a9e['setSlider'] = function (_0x3097a0, _0x428642, _0x141047) {
                this['_value'] = -0x1, this['_min'] = _0x3097a0, this['_max'] = _0x428642 > _0x3097a0 ? _0x428642 : _0x3097a0, this['value'] = _0x3097a0 > _0x141047 ? _0x3097a0 : _0x141047 > _0x428642 ? _0x428642 : _0x141047;
            }, _0x275a9e['changeValu' + 'e'] = function () {
                if (0x0 != this['tick']) {
                    var _0xc9938c = Math['pow'](0xa, (this['_tick'] + '')['length'] - 0x1);
                    this['_value'] = Math['round'](Math['round'](this['_value'] / this['_tick']) * this['_tick'] * _0xc9938c) / _0xc9938c;
                }
                this['_value'] = this['_value'] > this['_max'] ? this['_max'] : this['_value'] < this['_min'] ? this['_min'] : this['_value'];
                var _0x238a14 = this['_max'] - this['_min'];
                0x0 === _0x238a14 && (_0x238a14 = 0x1), this['isVertical'] ? (this['_bar']['y'] = (this['_value'] - this['_min']) / _0x238a14 * (this['height'] - this['_bar']['height']), this['_progress'] && (this['_progress']['height'] = this['_bar']['_y'] + 0.5 * this['_bar']['height'])) : (this['_bar']['x'] = (this['_value'] - this['_min']) / _0x238a14 * (this['width'] - this['_bar']['width']), this['_progress'] && (this['_progress']['width'] = this['_bar']['_x'] + 0.5 * this['_bar']['width']));
            }, _0x275a9e['onBgMouseD' + 'own'] = function (_0x2e199e) {
                var _0x54e5d2 = this['_bg']['getMousePo' + 'int']();
                this['isVertical'] ? this['value'] = _0x54e5d2['y'] / (this['height'] - this['_bar']['height']) * (this['_max'] - this['_min']) + this['_min'] : this['value'] = _0x54e5d2['x'] / (this['width'] - this['_bar']['width']) * (this['_max'] - this['_min']) + this['_min'];
            }, _0x3e8dc5(0x0, _0x275a9e, 'dataSource', _0x15febb['prototype']['_$get_data' + 'Source'], function (_0x1e1bc1) {
                this['_dataSourc' + 'e'] = _0x1e1bc1, 'number' == typeof _0x1e1bc1 || 'string' == typeof _0x1e1bc1 ? this['value'] = Number(_0x1e1bc1) : _0x591c88['superSet'](_0x291fc3, this, 'dataSource', _0x1e1bc1);
            }), _0x3e8dc5(0x0, _0x275a9e, 'skin', function () {
                return this['_skin'];
            }, function (_0x77ee41) {
                this['_skin'] != _0x77ee41 && (this['_skin'] = _0x77ee41, this['_skin'] && !_0x501cfb['getRes'](this['_skin']) ? _0x591c88['loader']['load']([
                    this['_skin'],
                    this['_skin']['replace']('.png', '$bar.png')
                ], _0x7c2cf9['create'](this, this['_skinLoade' + 'd'])) : this['_skinLoade' + 'd']());
            }), _0x3e8dc5(0x0, _0x275a9e, 'tick', function () {
                return this['_tick'];
            }, function (_0x2798cf) {
                this['_tick'] != _0x2798cf && (this['_tick'] = _0x2798cf, this['callLater'](this['changeValu' + 'e']));
            }), _0x3e8dc5(0x0, _0x275a9e, 'sizeGrid', function () {
                return this['_bg']['sizeGrid'];
            }, function (_0x574717) {
                this['_bg']['sizeGrid'] = _0x574717, this['_bar']['sizeGrid'] = _0x574717, this['_progress'] && (this['_progress']['sizeGrid'] = this['_bar']['sizeGrid']);
            }), _0x3e8dc5(0x0, _0x275a9e, 'allowClick' + 'Back', function () {
                return this['_allowClic' + 'kBack'];
            }, function (_0x56a9a1) {
                this['_allowClic' + 'kBack'] != _0x56a9a1 && (this['_allowClic' + 'kBack'] = _0x56a9a1, _0x56a9a1 ? this['_bg']['on']('mousedown', this, this['onBgMouseD' + 'own']) : this['_bg']['off']('mousedown', this, this['onBgMouseD' + 'own']));
            }), _0x3e8dc5(0x0, _0x275a9e, 'max', function () {
                return this['_max'];
            }, function (_0x517b54) {
                this['_max'] != _0x517b54 && (this['_max'] = _0x517b54, this['callLater'](this['changeValu' + 'e']));
            }), _0x3e8dc5(0x0, _0x275a9e, 'min', function () {
                return this['_min'];
            }, function (_0x88a10) {
                this['_min'] != _0x88a10 && (this['_min'] = _0x88a10, this['callLater'](this['changeValu' + 'e']));
            }), _0x3e8dc5(0x0, _0x275a9e, 'bar', function () {
                return this['_bar'];
            }), _0x3e8dc5(0x0, _0x275a9e, 'value', function () {
                return this['_value'];
            }, function (_0x479717) {
                if (this['_value'] != _0x479717) {
                    var _0x3fb106 = this['_value'];
                    this['_value'] = _0x479717, this['changeValu' + 'e'](), this['_value'] != _0x3fb106 && this['sendChange' + 'Event']();
                }
            }), _0x3c8136(_0x2aec3c, [
                'label',
                function () {
                    return this['label'] = new _0xf56596();
                }
            ]), _0x2aec3c;
        }(_0x291fc3), _0x228ae1 = function (_0x190dc0) {
            function _0x117d78(_0x2d0300) {
                this['gameStopHD'] = !0x1, this['iconImgTl'] = null, this['_iconImage'] = null, this['_moreBox'] = null, this['_gameBox'] = null, this['screenType'] = 0x0, this['_moreGameD' + 'ataUrl'] = 'https://ab' + 'c.layabox.' + 'com/public' + '/more/game' + 'list2.json', this['_iconImage' + 'Obj'] = null, this['clickCallB' + 'ack'] = null, this['closeCallB' + 'ack'] = null, this['isShow'] = !0x1, this['dinfo'] = null, this['ErrorUrlHt' + 'tps'] = 'https://el' + 'astic.laya' + 'box.com/', this['tongjiType'] = 'bdm', void 0x0 === _0x2d0300 && (_0x2d0300 = 0x0), _0x117d78['__super']['call'](this), this['screenType'] = _0x2d0300, this['init']();
            }
            var _0x4ca5fe, _0x19b219;
            _0x49b6a8(_0x117d78, 'laya.ui.Mo' + 'reGame', _0x190dc0);
            var _0x3adc6c = _0x117d78['prototype'];
            return _0x3adc6c['getLocalDa' + 'teString'] = function (_0x4c6eee) {
                void 0x0 === _0x4c6eee && (_0x4c6eee = 0x0);
                var _0x778263 = this['getDateByT' + 'imestamp'](_0x4c6eee)['toLocaleDa' + 'teString']();
                if (_0x530c06['onLimixiu'] || _0x530c06['onMiniGame']) {
                    var _0x521450 = new Date();
                    _0x778263 = _0x117d78['toLocaleDa' + 'teString'](_0x521450['getTime']());
                }
                var _0x49da1b = new RegExp('/', 'g');
                return _0x778263 = _0x778263['replace'](_0x49da1b, '-');
            }, _0x3adc6c['getDateByT' + 'imestamp'] = function (_0x5c5f04) {
                return void 0x0 === _0x5c5f04 && (_0x5c5f04 = 0x0), _0x5c5f04 && '' != _0x5c5f04 ? new Date(_0x5c5f04) : new Date();
            }, _0x3adc6c['reportErro' + 'r'] = function (_0x821833, _0x473b49, _0x2bcde4) {
                void 0x0 === _0x473b49 && (_0x473b49 = ''), _0x2bcde4 = _0x2bcde4 || {};
                var _0x57b564 = Date['now'](), _0x4cb30d = new Date(_0x57b564 + 0x0);
                _0x2bcde4['date'] = _0x4cb30d['toLocaleSt' + 'ring'](), _0x2bcde4['etype'] = _0x821833, 'error' != _0x821833 && 'statistics' != _0x821833 && (_0x821833 = 'statistics'), _0x2bcde4['version'] = 'V0.0.1', _0x2bcde4['gameId'] = 0x2774, _0x2bcde4['dinfo'] = this['dinfo'], _0x2bcde4['channel'] = -0x3e8, _0x2bcde4['msg'] = _0x473b49, _0x2bcde4['@timestamp'] = _0x4cb30d['toISOStrin' + 'g'](), _0x2bcde4['user'] = this['getUserId'](), _0x2bcde4['openid'] = this['getOpenId']();
                var _0x8d9cd3 = _0x117d78['getDay'](_0x4cb30d);
                _0x2bcde4['rdate'] = _0x8d9cd3, _0x2bcde4['day'] = _0x4cb30d['getDate']() + '', _0x2bcde4['hour'] = _0x4cb30d['getHours']() + '', _0x2bcde4['minute'] = _0x4cb30d['getMinutes']() + '', _0x2bcde4['gameurl'] = _0xa34f75['baseURI'], _0x2bcde4['regTime'] = 0x0, 'error' == _0x821833 ? this['sendLog'](_0x2bcde4, this['tongjiType'] + 'error-' + _0x8d9cd3['substring'](0x0, 0x6) + '/' + _0x821833 + '/', _0x821833) : this['sendLog'](_0x2bcde4, this['tongjiType'] + '-' + _0x8d9cd3['substring'](0x0, 0x6) + '/' + _0x821833 + '/', _0x821833);
            }, _0x3adc6c['getUserId'] = function () {
                var _0x3e5cdd = parseInt(_0x14bbc0['getItem']('layauserid') + '') || -0x1;
                return -0x1 == _0x3e5cdd && (_0x3e5cdd = this['randRange'](0x0, 0x3b9aca00), _0x14bbc0['setItem']('layauserid', _0x3e5cdd + '')), _0x3e5cdd;
            }, _0x3adc6c['getOpenId'] = function () {
                var _0x42ffa5 = 'abcdefghij' + 'klmnopqrst' + 'uvwxyzABCD' + 'EFGHIJKLMN' + 'OPQRSTUVWX' + 'YZ01234567' + '89', _0x559bd5 = _0x14bbc0['getItem']('openid');
                if (null == _0x559bd5 || '' == _0x559bd5) {
                    _0x559bd5 = '';
                    for (var _0x322cc3 = 0x0, _0x42809c = 0x20; _0x42809c > _0x322cc3; _0x322cc3++) {
                        var _0x293f61 = this['randRange'](0x0, 0x3e);
                        _0x559bd5 += _0x42ffa5['charAt'](_0x293f61);
                    }
                    _0x14bbc0['setItem']('openid', _0x559bd5);
                }
                return _0x559bd5;
            }, _0x3adc6c['sendLog'] = function (_0x5266c6, _0x269d59, _0x572fac) {
                var _0x1f1c21 = this, _0x3b496d = new _0x258afb();
                _0x3b496d['on']('error', this, function (_0x2078f5, _0x52d632, _0xf7b445) {
                    if (_0xf7b445 && -0x1 != _0xf7b445['indexOf']('[404]')) {
                        var _0x5619b6 = new _0x258afb();
                        _0x5619b6['send'](_0x1f1c21['ErrorUrlHt' + 'tps'] + 'garbage/' + _0x52d632 + '/', JSON['stringify'](_0x2078f5), 'post', 'text', [
                            'Content-Ty' + 'pe',
                            'applicatio' + 'n/json'
                        ]);
                    }
                }, [
                    _0x5266c6,
                    _0x572fac
                ]), _0x530c06['onBDMiniGa' + 'me'] && (_0x5266c6['gameurl'] = ''), _0x3b496d['send'](this['ErrorUrlHt' + 'tps'] + _0x269d59, JSON['stringify'](_0x5266c6), 'post', 'text', [
                    'Content-Ty' + 'pe',
                    'applicatio' + 'n/json'
                ]);
            }, _0x3adc6c['initEvent'] = function () {
                this['on']('click', this, this['onIconClic' + 'k']);
            }, _0x3adc6c['onStageRes' + 'ize'] = function () {
                var _0x3984eb = Math['min'](_0x591c88['stage']['width'] / _0x591c88['stage']['designWidt' + 'h'], _0x591c88['stage']['height'] / _0x591c88['stage']['designHeig' + 'ht']);
                _0x591c88['stage']['width'] < 0x2d0 && (_0x3984eb = 0.9), this['_moreBox'] && this['_moreBox']['scale'](_0x3984eb, _0x3984eb), this['_gameBox'] && this['_gameBox']['scale'](_0x3984eb, _0x3984eb);
            }, _0x3adc6c['tada'] = function (_0x1a2d8f, _0x2fff41, _0x419da4, _0x58489a) {
                void 0x0 === _0x419da4 && (_0x419da4 = 1.1), void 0x0 === _0x58489a && (_0x58489a = 0x1);
                var _0x1e7070 = new _0x40209b();
                return _0x1e7070['reset'](), _0x1e7070['to'](_0x1a2d8f, {
                    'scaleX': _0x419da4,
                    'scaleY': _0x419da4,
                    'rotation': 0x3
                }, 0.1 * _0x2fff41)['to'](_0x1a2d8f, {
                    'scaleX': _0x419da4,
                    'scaleY': _0x419da4,
                    'rotation': -0x3
                }, 0.1 * _0x2fff41)['to'](_0x1a2d8f, {
                    'scaleX': _0x419da4,
                    'scaleY': _0x419da4,
                    'rotation': 0x3
                }, 0.1 * _0x2fff41)['to'](_0x1a2d8f, {
                    'scaleX': _0x419da4,
                    'scaleY': _0x419da4,
                    'rotation': -0x3
                }, 0.1 * _0x2fff41)['to'](_0x1a2d8f, {
                    'scaleX': _0x419da4,
                    'scaleY': _0x419da4,
                    'rotation': 0x3
                }, 0.1 * _0x2fff41)['to'](_0x1a2d8f, {
                    'scaleX': _0x419da4,
                    'scaleY': _0x419da4,
                    'rotation': -0x3
                }, 0.1 * _0x2fff41)['to'](_0x1a2d8f, {
                    'scaleX': _0x419da4,
                    'scaleY': _0x419da4,
                    'rotation': 0x3
                }, 0.1 * _0x2fff41)['to'](_0x1a2d8f, {
                    'scaleX': _0x419da4,
                    'scaleY': _0x419da4,
                    'rotation': -0x3
                }, 0.1 * _0x2fff41)['to'](_0x1a2d8f, {
                    'scaleX': _0x419da4,
                    'scaleY': _0x419da4,
                    'rotation': 0x3
                }, 0.1 * _0x2fff41)['to'](_0x1a2d8f, {
                    'scaleX': _0x58489a,
                    'scaleY': _0x58489a,
                    'rotation': 0x0
                }, 0.1 * _0x2fff41), _0x1e7070['play'](0x0), _0x1e7070;
            }, _0x3adc6c['dispose'] = function () {
                this['removeEven' + 't'](), this['gameStopHD'] = !0x0, _0x117d78['_moreGameD' + 'ata'] = null, this['_iconImage' + 'Obj'] = null, this['clickCallB' + 'ack'] = null, this['closeCallB' + 'ack'] = null, this['iconImgTl'] && (this['iconImgTl']['offAll']('complete'), this['iconImgTl'] = null), this['_moreBox'] && (this['_moreBox']['removeChil' + 'dren'](), this['_moreBox'] = null), this['_gameBox'] && (this['_gameBox']['removeChil' + 'dren'](), this['_gameBox'] = null), this['_iconImage'] && (this['_iconImage']['removeSelf'](), this['_iconImage'] = null);
            }, _0x3adc6c['onSetIconT' + 'ype'] = function (_0x2309fd) {
                this['gameStopHD'] = !_0x2309fd, this['visible'] = _0x2309fd;
            }, _0x3adc6c['checkIconI' + 'mgHD'] = function () {
                this['iconImgTl'] ? this['iconImgTl']['play'](0x0) : this['iconImgTl'] = this['tada'](this['_iconImage'], 0x4b0, 1.1, 0.9), this['iconImgTl']['on']('complete', this, this['onTlComple' + 'te']);
            }, _0x3adc6c['onTlComple' + 'te'] = function () {
                if (this['parent']) {
                    if (this['_iconImage']['scale'](0.9, 0.9), this['_iconImage']['rotation'] = 0x0, this['gameStopHD'] && this['iconImgTl'])
                        return this['iconImgTl']['offAll']('complete'), void (this['iconImgTl'] = null);
                    _0x591c88['timer']['once'](0x3e8, this, this['onYanChiPl' + 'ay']);
                } else
                    this['iconImgTl'] && (this['iconImgTl']['offAll'](), this['iconImgTl'] = null);
            }, _0x3adc6c['onYanChiPl' + 'ay'] = function () {
                this['parent'] && this['iconImgTl'] ? this['iconImgTl']['play'](0x0) : this['iconImgTl'] && (this['iconImgTl']['offAll']('complete'), this['iconImgTl'] = null);
            }, _0x3adc6c['removeEven' + 't'] = function () {
                this['off']('click', this, this['onIconClic' + 'k']);
            }, _0x3adc6c['onIconClic' + 'k'] = function () {
                this['isShow'] = !0x0, null != this['clickCallB' + 'ack'] && this['clickCallB' + 'ack']['run']();
                var _0x395a32 = _0x14bbc0['getItem']('currentTim' + 'e'), _0x1ae236 = this['getLocalDa' + 'teString']();
                _0x395a32 != _0x1ae236 ? (_0x14bbc0['setItem']('currentTim' + 'e', _0x1ae236), this['reportErro' + 'r'](_0x117d78['_moreGameD' + 'ata']['statid1'])) : this['reportErro' + 'r'](_0x117d78['_moreGameD' + 'ata']['statid2']), this['onResLoade' + 'd']();
            }, _0x3adc6c['onResLoade' + 'd'] = function () {
                if (this['_moreBox'])
                    this['_moreBox']['visible'] = !0x0;
                else {
                    this['_moreBox'] = new _0x51befc(), _0x591c88['stage']['addChild'](this['_moreBox']), this['_moreBox']['zOrder'] = 0x1869f, this['_moreBox']['left'] = this['_moreBox']['right'] = this['_moreBox']['top'] = this['_moreBox']['bottom'] = 0x0;
                    var _0x458d68 = this['onCreateIm' + 'age'](_0x117d78['onGetAtlas' + 'DanImgUrl']('img_white_' + 'bg'), this['_moreBox']);
                    _0x458d68['top'] = _0x458d68['left'] = _0x458d68['right'] = _0x458d68['bottom'] = 0x0, _0x458d68['sizeGrid'] = '1,1,1,1,1';
                    var _0x47359b = this['onCreateIm' + 'age'](_0x117d78['onGetAtlas' + 'DanImgUrl']('hengfengex' + 'ian'), this['_moreBox']);
                    _0x47359b['left'] = _0x47359b['right'] = 0x0, _0x47359b['y'] = 0x84, _0x47359b['alpha'] = 0.2;
                    var _0x2baa8e = this['onCreateIm' + 'age'](_0x117d78['onGetAtlas' + 'DanImgUrl']('img_font_j' + 'ingcai'), this['_moreBox']);
                    _0x2baa8e['on']('click', this, this['onJiantouI' + 'mgClick']), this['isQMP']() && this['screenType'] ? _0x2baa8e['pos'](0xf, 0x46) : _0x2baa8e['pos'](0xf, 0x2d);
                    var _0x14a788 = new _0x1e34b1();
                    this['_moreBox']['addChild'](_0x14a788), _0x14a788['itemRender'] = _0x4ca5fe, _0x14a788['selectEnab' + 'le'] = !0x0, _0x14a788['vScrollBar' + 'Skin'] = '', _0x14a788['scrollBar']['autoHide'] = !0x0, _0x14a788['scrollBar']['elasticDis' + 'tance'] = 0xfa, _0x14a788['renderHand' + 'ler'] = new _0x7c2cf9(this, this['onGameList' + 'Render']);
                    var _0x97a247 = _0x117d78['_moreGameD' + 'ata']['marvellous' + 'Game']['gameList'], _0x3b0e7c = [];
                    _0x3b0e7c['push'](_0x97a247[0x0]), _0x3b0e7c['push'](_0x97a247[0x1]);
                    var _0x42b6af = this['RandomNumB' + 'oth'](_0x3b0e7c['length'], _0x97a247['length'] - _0x3b0e7c['length'], _0x97a247['length']);
                    if (!_0x42b6af)
                        return void (this['visible'] = !0x1);
                    try {
                        for (var _0x26726a = 0x0, _0x2b2766 = _0x42b6af['length']; _0x2b2766 > _0x26726a; _0x26726a++) {
                            var _0x278e92 = _0x42b6af[_0x26726a];
                            _0x3b0e7c['push'](_0x97a247[_0x278e92]);
                        }
                        _0x117d78['_moreGameD' + 'ata']['marvellous' + 'Game']['gameList'] = [], _0x117d78['_moreGameD' + 'ata']['marvellous' + 'Game']['gameList'] = _0x3b0e7c, _0x14a788['array'] = _0x117d78['_moreGameD' + 'ata']['marvellous' + 'Game']['gameList'];
                    } catch (_0x143963) {
                        _0x14a788['array'] = _0x117d78['_moreGameD' + 'ata']['marvellous' + 'Game']['gameList'];
                    }
                    this['screenType'] && (_0x14a788['spaceY'] = 0xa, _0x14a788['width'] = 0x2b2, this['isQMP']() ? _0x14a788['height'] = _0x591c88['stage']['height'] + 0x82 : _0x14a788['height'] = 0x473, _0x14a788['y'] = 0x8b, _0x14a788['centerX'] = 0x0), this['onStageRes' + 'ize']();
                }
            }, _0x3adc6c['RandomNumB' + 'oth'] = function (_0x1770e5, _0x538b04, _0x18061f) {
                for (var _0x9b0271 = [], _0x519f08 = _0x1770e5; _0x18061f > _0x519f08; _0x519f08++)
                    _0x9b0271['push'](_0x519f08);
                var _0xe952eb = [], _0x4cac30 = _0x9b0271['length'];
                for (_0x519f08 = 0x0; _0x4cac30 > _0x519f08; _0x519f08++) {
                    var _0x23a7d7 = (_0x9b0271['length'], Math['floor'](Math['random']() * _0x9b0271['length']));
                    if (_0xe952eb['push'](_0x9b0271[_0x23a7d7]), _0x9b0271['splice'](_0x23a7d7, 0x1), _0x9b0271['length'] <= _0x4cac30 - _0x538b04)
                        return _0xe952eb;
                }
                return null;
            }, _0x3adc6c['isQMP'] = function () {
                var _0x23a3e2 = !0x1, _0x3401b0 = 0x0;
                if (_0x3401b0 = 'horizontal' == _0x591c88['stage']['screenMode'] ? _0x530c06['height'] % 0x9 : _0x530c06['width'] % 0x9, _0x530c06['onAndroid'] && 0x0 == _0x3401b0) {
                    var _0x4f3855 = 0x0;
                    _0x4f3855 = 'horizontal' == _0x591c88['stage']['screenMode'] ? _0x530c06['width'] : _0x530c06['height'], -0x1 != [
                        0x8e8,
                        0x870,
                        0x8c4,
                        0xc30,
                        0x8c8,
                        0x924,
                        0x906
                    ]['indexOf'](_0x4f3855) && (_0x23a3e2 = !0x0);
                }
                var _0x24f9fd = /iPhone/gi['test'](_0x530c06['window']['navigator']['userAgent']) && 0x177 == Math['min'](_0x530c06['clientHeig' + 'ht'], _0x530c06['clientWidt' + 'h']) && 0x32c == Math['max'](_0x530c06['clientHeig' + 'ht'], _0x530c06['clientWidt' + 'h']), _0x4e442e = 0x19e == Math['min'](_0x530c06['clientHeig' + 'ht'], _0x530c06['clientWidt' + 'h']) && 0x380 == Math['max'](_0x530c06['clientHeig' + 'ht'], _0x530c06['clientWidt' + 'h']);
                return !_0x530c06['onMiniGame'] && !_0x530c06['onBDMiniGa' + 'me'] || _0x530c06['onAndroid'] || !_0x24f9fd && !_0x4e442e || (_0x23a3e2 = !0x0), _0x23a3e2;
            }, _0x3adc6c['onDrawShap' + 'es'] = function (_0x3f042e, _0x327cac, _0x3f64cd, _0x1c03da) {
                void 0x0 === _0x3f64cd && (_0x3f64cd = 0x5), void 0x0 === _0x1c03da && (_0x1c03da = !0x1);
                var _0x4982c2 = _0x3f64cd;
                _0x1c03da && (_0x4982c2 = 0x0);
                var _0x59de56 = new _0x364be4();
                return _0x59de56['graphics']['drawPath'](0x0, 0x0, [
                    [
                        'moveTo',
                        _0x3f64cd,
                        0x0
                    ],
                    [
                        'lineTo',
                        0x69,
                        0x0
                    ],
                    [
                        'arcTo',
                        _0x3f042e,
                        0x0,
                        _0x3f042e,
                        _0x3f64cd,
                        _0x3f64cd
                    ],
                    [
                        'lineTo',
                        _0x3f042e,
                        _0x327cac
                    ],
                    [
                        'arcTo',
                        _0x3f042e,
                        _0x327cac + _0x3f64cd,
                        0x69,
                        _0x327cac + _0x3f64cd,
                        _0x4982c2
                    ],
                    [
                        'lineTo',
                        _0x3f64cd,
                        _0x327cac + _0x3f64cd
                    ],
                    [
                        'arcTo',
                        0x0,
                        _0x327cac + _0x3f64cd,
                        0x0,
                        _0x327cac,
                        _0x4982c2
                    ],
                    [
                        'lineTo',
                        0x0,
                        _0x3f64cd
                    ],
                    [
                        'arcTo',
                        0x0,
                        0x0,
                        _0x3f64cd,
                        0x0,
                        _0x3f64cd
                    ],
                    ['closePath']
                ], { 'fillStyle': '#ff0000' }), _0x59de56;
            }, _0x3adc6c['onCreateMa' + 'skImg'] = function (_0x53ae6e, _0x14d986) {
                var _0x4cb455 = this['onCreateIm' + 'age'](_0x117d78['onGetAtlas' + 'DanImgUrl']('dayuan'), _0x14d986), _0x170820 = this['onCreateIm' + 'age'](_0x53ae6e, _0x4cb455);
                _0x170820['pos'](0xb, 0xa);
                var _0x288ee3 = new _0x364be4();
                return _0x288ee3['graphics']['drawCircle'](0x47, 0x4a, 0x44, '#ff0000'), _0x170820['mask'] = _0x288ee3, _0x4cb455['scale'](0.7, 0.7), _0x4cb455;
            }, _0x3adc6c['onGameList' + 'Render'] = function (_0x4b5aab, _0x2509cc) {
                var _0xe74359 = _0x117d78['_moreGameD' + 'ata']['marvellous' + 'Game']['gameList'];
                if (!(0x0 > _0x2509cc || _0x2509cc > _0xe74359['length'] - 0x1)) {
                    var _0x2ca733 = _0xe74359[_0x2509cc];
                    _0x4b5aab['init'](_0x2ca733, this['screenType'], new _0x7c2cf9(this, this['onItemClic' + 'kCallBack']));
                }
            }, _0x3adc6c['onItemClic' + 'kCallBack'] = function (_0x13a785) {
                var _0x4c64de = this;
                if (swan['navigateTo' + 'MiniProgra' + 'm']) {
                    var _0x1b4bb8 = _0x13a785['appKey'], _0xeb3ea7 = _0x13a785['path'], _0x2ff5c5 = _0x13a785['extendInfo'];
                    swan['navigateTo' + 'MiniProgra' + 'm']({
                        'appKey': _0x1b4bb8,
                        'path': _0xeb3ea7,
                        'extraData': _0x2ff5c5,
                        'success': function (_0x3d6c89) {
                        },
                        'fail': function (_0x18ee97) {
                        },
                        'complete': function (_0x312b20) {
                            _0x4c64de['reportErro' + 'r'](_0x13a785['statid']);
                        }['bind'](this)
                    });
                }
            }, _0x3adc6c['onJiantouI' + 'mgClick'] = function (_0x474a58) {
                this['isShow'] = !0x1, this['_moreBox'] && (this['_moreBox']['visible'] = !0x1), null != this['closeCallB' + 'ack'] && this['closeCallB' + 'ack']['run']();
            }, _0x3adc6c['onCreateLa' + 'bel'] = function (_0x1a3207, _0x1ed61b, _0x37bd74, _0x286757, _0x201eae, _0x27a8ab, _0x5be5af) {
                void 0x0 === _0x37bd74 && (_0x37bd74 = 0x18), void 0x0 === _0x286757 && (_0x286757 = '#000000'), void 0x0 === _0x201eae && (_0x201eae = !0x1), void 0x0 === _0x27a8ab && (_0x27a8ab = 'center'), void 0x0 === _0x5be5af && (_0x5be5af = 0xa);
                var _0x4c1d93 = new _0xf56596();
                return _0x4c1d93['text'] = _0x1a3207, _0x4c1d93['font'] = 'Microsoft\x20' + 'YaHei', _0x4c1d93['fontSize'] = _0x37bd74, _0x4c1d93['color'] = _0x286757, _0x4c1d93['bold'] = !0x0, _0x4c1d93['leading'] = _0x5be5af, _0x4c1d93['valign'] = 'middle', _0x4c1d93['align'] = _0x27a8ab, _0x4c1d93['wordWrap'] = _0x201eae, _0x1ed61b['addChild'](_0x4c1d93), _0x4c1d93;
            }, _0x3adc6c['onCreateIm' + 'age'] = function (_0x482c19, _0x1c5d15) {
                var _0x3337f2 = new _0x43423b();
                return _0x3337f2['skin'] = _0x482c19, _0x1c5d15['addChild'](_0x3337f2), _0x3337f2;
            }, _0x3adc6c['init'] = function () {
                var _0x22c1ff = _0x530c06['window']['navigator']['userAgent'], _0x313175 = _0x22c1ff['indexOf']('SwanGame') > -0x1;
                this['visible'] = !0x1, _0x313175 && (this['dinfo'] = JSON['stringify'](laya['bd']['mini']['BMiniAdapt' + 'er']['systemInfo']), this['onGetAdvsL' + 'istData']());
            }, _0x3adc6c['randRange'] = function (_0xfcb862, _0x520f05) {
                return Math['floor'](Math['random']() * (_0x520f05 - _0xfcb862 + 0x1)) + _0xfcb862;
            }, _0x3adc6c['onGetAdvsL' + 'istData'] = function () {
                var _0x40562a = this, _0xb96b98 = this['randRange'](0x2710, 0xf4240), _0x5b3761 = this['_moreGameD' + 'ataUrl'] + '?' + _0xb96b98;
                _0x117d78['_http']['open']('get', _0x5b3761, !0x0), _0x117d78['_http']['setRequest' + 'Header']('Content-Ty' + 'pe', 'applicatio' + 'n/x-www-fo' + 'rm-urlenco' + 'ded'), _0x117d78['_http']['responseTy' + 'pe'] = 'text', _0x117d78['_http']['onerror'] = function (_0x3ca9f4) {
                    _0x40562a['_onError'](_0x3ca9f4);
                }, _0x117d78['_http']['onload'] = function (_0x559237) {
                    _0x40562a['_onLoad'](_0x559237);
                }, _0x117d78['_http']['send'](null);
            }, _0x3adc6c['_onError'] = function (_0x40553a) {
                this['error']('Request\x20fa' + 'iled\x20Statu' + 's:' + _0x117d78['_http']['status'] + '\x20text:' + _0x117d78['_http']['statusText']);
            }, _0x3adc6c['_onLoad'] = function (_0x186fb5) {
                var _0x2f7d15 = _0x117d78['_http'], _0xb124db = void 0x0 !== _0x2f7d15['status'] ? _0x2f7d15['status'] : 0xc8;
                0xc8 === _0xb124db || 0xcc === _0xb124db || 0x0 === _0xb124db ? this['complete']() : this['error']('[' + _0x2f7d15['status'] + ']' + _0x2f7d15['statusText'] + ':' + _0x2f7d15['responseUR' + 'L']);
            }, _0x3adc6c['error'] = function (_0x10195d) {
                this['event']('error', _0x10195d);
            }, _0x3adc6c['complete'] = function () {
                var _0x244f4e = !0x0;
                try {
                    var _0x1b6564 = _0x117d78['_http']['response'] || _0x117d78['_http']['responseTe' + 'xt'];
                    _0x117d78['_moreGameD' + 'ata'] = JSON['parse'](_0x1b6564), this['initUI']();
                } catch (_0x575588) {
                    _0x244f4e = !0x1, this['error'](_0x575588['message']);
                }
            }, _0x3adc6c['initUI'] = function () {
                _0x117d78['_moreGameD' + 'ata']['isOpen'] && this['screenType'] ? (this['_iconImage'] || (this['_iconImage'] = new _0x43423b(), this['addChild'](this['_iconImage'])), this['_iconImage']['skin'] = _0x117d78['onGetImgSk' + 'inUrl'](_0x117d78['_moreGameD' + 'ata']['icon']), this['_iconImage' + 'Obj'] && (this['_iconImage']['size'](this['_iconImage' + 'Obj']['width'], this['_iconImage' + 'Obj']['height']), this['_iconImage']['pivot'](this['_iconImage' + 'Obj']['width'] / 0x2, this['_iconImage' + 'Obj']['height'] / 0x2), this['_iconImage']['pos'](this['_iconImage' + 'Obj']['width'] / 0x2, this['_iconImage' + 'Obj']['height'] / 0x2)), this['visible'] = !0x0, this['initEvent'](), this['gameStopHD'] = !0x1, this['checkIconI' + 'mgHD']()) : this['visible'] = !0x1;
            }, _0x3adc6c['setIconSiz' + 'e'] = function (_0x1ea987, _0x381c3c) {
                this['_iconImage'] && (this['_iconImage']['size'](_0x1ea987, _0x381c3c), this['_iconImage']['pivot'](_0x1ea987 / 0x2, _0x381c3c / 0x2), this['_iconImage']['pos'](_0x1ea987 / 0x2, _0x381c3c / 0x2)), this['_iconImage' + 'Obj'] = {
                    'width': _0x1ea987,
                    'height': _0x381c3c
                };
            }, _0x117d78['toLocaleDa' + 'teString'] = function (_0xb3dff1) {
                return _0x117d78['getDateFor' + 'matStr'](_0xb3dff1, '/');
            }, _0x117d78['getDateFor' + 'matStr'] = function (_0x4f4983, _0x35b151) {
                void 0x0 === _0x35b151 && (_0x35b151 = 'yynndd');
                var _0x2130e5 = new Date(_0x4f4983), _0x4d65b8 = _0x2130e5['getFullYea' + 'r'](), _0x1f2e42 = _0x2130e5['getMonth']() + 0x1, _0x3a3e76 = _0x2130e5['getDate'](), _0x165b1d = _0x2130e5['getHours'](), _0x53242f = _0x2130e5['getMinutes'](), _0x24eba7 = _0x2130e5['getSeconds']();
                switch (_0x35b151) {
                case 'yynndd':
                    return _0x4d65b8['toString']() + '年' + _0x1f2e42['toString']() + '月' + _0x3a3e76['toString']() + '日';
                case '/':
                    return _0x4d65b8['toString']() + '/' + _0x1f2e42['toString']() + '/' + _0x3a3e76['toString']();
                }
                return _0x4d65b8['toString']() + '年' + _0x1f2e42['toString']() + '月' + _0x3a3e76['toString']() + '日' + _0x165b1d['toString']() + '时' + _0x53242f['toString']() + '分' + _0x24eba7['toString']() + '秒';
            }, _0x117d78['getDay'] = function (_0x92216e) {
                var _0x31c7ae = _0x92216e['getMonth']() + 0x1, _0x21b112 = _0x92216e['getDate'](), _0x12940f = _0x92216e['getFullYea' + 'r']() + '' + (0xa > _0x31c7ae ? '0' + _0x31c7ae : _0x31c7ae) + (0xa > _0x21b112 ? '0' + _0x21b112 : _0x21b112);
                return _0x12940f;
            }, _0x117d78['onGetAtlas' + 'DanImgUrl'] = function (_0x2d2807) {
                return _0x117d78['_moreGameD' + 'ata']['imgPath'] + _0x117d78['_moreGameD' + 'ata']['atlas'] + _0x2d2807 + '.png';
            }, _0x117d78['onGetImgSk' + 'inUrl'] = function (_0x5eebd3) {
                return _0x117d78['_moreGameD' + 'ata']['imgPath'] + _0x5eebd3;
            }, _0x117d78['onGetIconI' + 'mgSkinUrl'] = function (_0x23f85a) {
                return _0x117d78['_moreGameD' + 'ata']['iconPath'] + _0x23f85a;
            }, _0x117d78['_moreGameD' + 'ata'] = null, _0x3c8136(_0x117d78, [
                '_http',
                function () {
                    return this['_http'] = new _0x530c06['window']['XMLHttpReq' + 'uest']();
                }
            ]), _0x117d78['__init$'] = function () {
                _0x4ca5fe = function (_0x5b01ee) {
                    function _0x16ea75() {
                        this['titleLabel'] = null, this['gameListBo' + 'x'] = null, _0x16ea75['__super']['call'](this);
                    }
                    _0x49b6a8(_0x16ea75, '', _0x5b01ee);
                    var _0x4d9495 = _0x16ea75['prototype'];
                    return _0x4d9495['init'] = function (_0x23df3e, _0x82a95c, _0x337832) {
                        if (this['titleLabel'] ? this['titleLabel']['text'] = _0x23df3e['title'] : (this['titleLabel'] = this['onCreateLa' + 'bel'](_0x23df3e['title'], this, 0x20, '#3d3939'), this['titleLabel']['pos'](0x8, 0x0), this['titleLabel']['size'](0xa2, 0x32)), this['gameListBo' + 'x']) {
                            for (_0x56e865 = 0x0, _0xc6c87f = this['gameListBo' + 'x']['_children']['length']; _0xc6c87f > _0x56e865; _0x56e865++)
                                _0x3e21d8 = this['gameListBo' + 'x']['_children'][_0x56e865], _0x3e21d8['init'](_0x23df3e['gameList'][_0x56e865], _0x82a95c, _0x337832);
                        } else {
                            this['gameListBo' + 'x'] = new _0x51befc(), this['addChild'](this['gameListBo' + 'x']);
                            for (var _0x5a527d = 0x0, _0x288ed6 = 0x41, _0x448272 = 0xaf, _0x56e865 = 0x0, _0xc6c87f = _0x23df3e['gameList']['length']; _0xc6c87f > _0x56e865; _0x56e865++) {
                                var _0x3e21d8 = new _0x19b219();
                                _0x3e21d8['init'](_0x23df3e['gameList'][_0x56e865], _0x82a95c, _0x337832), _0x3e21d8['x'] = _0x5a527d + _0x56e865 * _0x448272, _0x3e21d8['y'] = _0x288ed6, this['gameListBo' + 'x']['addChild'](_0x3e21d8);
                            }
                        }
                        this['size'](0x2b7, 0x154);
                    }, _0x4d9495['onCreateLa' + 'bel'] = function (_0x50f8d3, _0x6a6ebd, _0x39047e, _0x56134c, _0x33ef5e) {
                        void 0x0 === _0x39047e && (_0x39047e = 0x1a), void 0x0 === _0x56134c && (_0x56134c = '#000000'), void 0x0 === _0x33ef5e && (_0x33ef5e = !0x0);
                        var _0x7e517e = new _0xf56596();
                        return _0x7e517e['text'] = _0x50f8d3, _0x7e517e['font'] = 'Microsoft\x20' + 'YaHei', _0x7e517e['fontSize'] = _0x39047e, _0x7e517e['color'] = _0x56134c, _0x7e517e['bold'] = _0x33ef5e, _0x7e517e['leading'] = 0xa, _0x7e517e['valign'] = 'middle', _0x7e517e['align'] = 'center', _0x7e517e['overflow'] = 'hidden', _0x6a6ebd['addChild'](_0x7e517e), _0x7e517e;
                    }, _0x16ea75;
                }(_0x51befc), _0x19b219 = function (_0x10edad) {
                    function _0x525171() {
                        this['kuangImg'] = null, this['iconNameLa' + 'bel'] = null, this['iconImg'] = null, this['playImg'] = null, this['itemData'] = null, this['callBackHa' + 'ndler'] = null, _0x525171['__super']['call'](this);
                    }
                    _0x49b6a8(_0x525171, '', _0x10edad);
                    var _0x439df1 = _0x525171['prototype'];
                    return _0x439df1['MoveGameIt' + 'em'] = function () {
                    }, _0x439df1['initEvent'] = function () {
                        this['on']('click', this, this['onItemClic' + 'k']);
                    }, _0x439df1['onItemClic' + 'k'] = function () {
                        null != this['callBackHa' + 'ndler'] && this['callBackHa' + 'ndler']['runWith']([this['itemData']]);
                    }, _0x439df1['init'] = function (_0x2538ac, _0x495dd5, _0x4c1e48) {
                        if (this['itemData'] = _0x2538ac, this['callBackHa' + 'ndler'] = _0x4c1e48, this['kuangImg'] ? this['kuangImg']['skin'] = _0x117d78['onGetAtlas' + 'DanImgUrl']('dayuan') : this['kuangImg'] = this['onCreateIm' + 'age'](_0x117d78['onGetAtlas' + 'DanImgUrl']('dayuan'), this), this['iconImg'])
                            this['iconImg']['skin'] = _0x117d78['onGetIconI' + 'mgSkinUrl'](_0x2538ac['icon']);
                        else {
                            this['iconImg'] = this['onCreateIm' + 'age'](_0x117d78['onGetIconI' + 'mgSkinUrl'](_0x2538ac['icon']), this);
                            var _0x4c08fe = new _0x364be4();
                            _0x4c08fe['graphics']['drawCircle'](0x47, 0x4a, 0x44, '#ff0000'), this['iconImg']['mask'] = _0x4c08fe, this['iconImg']['pos'](0xd, 0xa);
                        }
                        this['iconNameLa' + 'bel'] ? this['iconNameLa' + 'bel']['text'] = _0x2538ac['name'] : (this['iconNameLa' + 'bel'] = this['onCreateLa' + 'bel'](_0x2538ac['name'], this, 0x1c, '#3d3939'), this['iconNameLa' + 'bel']['pos'](0x7, 0xa5)), this['playImg'] ? this['playImg']['skin'] = _0x117d78['onGetAtlas' + 'DanImgUrl']('img_play') : (this['playImg'] = this['onCreateIm' + 'age'](_0x117d78['onGetAtlas' + 'DanImgUrl']('img_play'), this), this['playImg']['pos'](0xc, 0xd2)), this['size'](0xa5, 0x10e), this['initEvent']();
                    }, _0x439df1['onCreateLa' + 'bel'] = function (_0x4893ec, _0x54143e, _0x225b0f, _0x5220a4, _0x18545b) {
                        void 0x0 === _0x225b0f && (_0x225b0f = 0x18), void 0x0 === _0x5220a4 && (_0x5220a4 = '#000000'), void 0x0 === _0x18545b && (_0x18545b = !0x1);
                        var _0x3a05c1 = new _0xf56596();
                        return _0x3a05c1['text'] = _0x4893ec, _0x3a05c1['font'] = 'Microsoft\x20' + 'YaHei', _0x3a05c1['fontSize'] = _0x225b0f, _0x3a05c1['color'] = _0x5220a4, _0x3a05c1['bold'] = _0x18545b, _0x3a05c1['leading'] = 0xa, _0x3a05c1['valign'] = 'middle', _0x3a05c1['align'] = 'center', _0x3a05c1['size'](0x98, 0x2c), _0x3a05c1['overflow'] = 'hidden', _0x54143e['addChild'](_0x3a05c1), _0x3a05c1;
                    }, _0x439df1['onCreateIm' + 'age'] = function (_0x31c675, _0x3e9650) {
                        var _0x27c169 = new _0x43423b();
                        return _0x27c169['skin'] = _0x31c675, _0x3e9650['addChild'](_0x27c169), _0x27c169;
                    }, _0x525171;
                }(_0x51befc);
            }, _0x117d78;
        }(_0x4ddaee), _0x528a6b = function (_0x135a19) {
            function _0x56248f() {
                this['closeHandl' + 'er'] = null, this['popupEffec' + 't'] = null, this['closeEffec' + 't'] = null, this['group'] = null, this['isModal'] = !0x1, this['isShowEffe' + 'ct'] = !0x0, this['isPopupCen' + 'ter'] = !0x0, this['closeType'] = null, this['_dragArea'] = null, this['_param'] = null, this['_effectTwe' + 'en'] = null, _0x56248f['__super']['call'](this), this['popupEffec' + 't'] = _0x56248f['manager']['popupEffec' + 'tHandler'], this['closeEffec' + 't'] = _0x56248f['manager']['closeEffec' + 'tHandler'], this['_dealDragA' + 'rea'](), this['on']('click', this, this['_onClick']);
            }
            _0x49b6a8(_0x56248f, 'laya.ui.Di' + 'alog', _0x135a19);
            var _0x1a6fdf = _0x56248f['prototype'];
            return _0x1a6fdf['_dealDragA' + 'rea'] = function () {
                var _0x2713b6 = this['getChildBy' + 'Name']('drag');
                _0x2713b6 && (this['dragArea'] = _0x2713b6['_x'] + ',' + _0x2713b6['_y'] + ',' + _0x2713b6['width'] + ',' + _0x2713b6['height'], _0x2713b6['removeSelf']());
            }, _0x1a6fdf['_onMouseDo' + 'wn'] = function (_0x334c59) {
                var _0x1c06b9 = this['getMousePo' + 'int']();
                this['_dragArea']['contains'](_0x1c06b9['x'], _0x1c06b9['y']) ? this['startDrag']() : this['stopDrag']();
            }, _0x1a6fdf['_onClick'] = function (_0x1d7f1a) {
                var _0x9b02c0 = _0x1d7f1a['target'];
                if (_0x9b02c0)
                    switch (_0x9b02c0['name']) {
                    case 'close':
                    case 'cancel':
                    case 'sure':
                    case 'no':
                    case 'ok':
                    case 'yes':
                        return void this['close'](_0x9b02c0['name']);
                    }
            }, _0x1a6fdf['open'] = function (_0x4c2407, _0x203717) {
                void 0x0 === _0x4c2407 && (_0x4c2407 = !0x0), this['_dealDragA' + 'rea'](), this['_param'] = _0x203717, _0x56248f['manager']['open'](this, _0x4c2407, this['isShowEffe' + 'ct']), _0x56248f['manager']['lock'](!0x1);
            }, _0x1a6fdf['close'] = function (_0x202f4e) {
                this['closeType'] = _0x202f4e, _0x56248f['manager']['close'](this);
            }, _0x1a6fdf['destroy'] = function (_0x1c0d14) {
                void 0x0 === _0x1c0d14 && (_0x1c0d14 = !0x0), this['closeHandl' + 'er'] = null, this['popupEffec' + 't'] = null, this['closeEffec' + 't'] = null, this['_dragArea'] = null, _0x135a19['prototype']['destroy']['call'](this, _0x1c0d14);
            }, _0x1a6fdf['show'] = function (_0x47a5c6, _0x31eb5e) {
                void 0x0 === _0x47a5c6 && (_0x47a5c6 = !0x1), void 0x0 === _0x31eb5e && (_0x31eb5e = !0x0), this['_open'](!0x1, _0x47a5c6, _0x31eb5e);
            }, _0x1a6fdf['popup'] = function (_0x1c5dbc, _0x5e5ab3) {
                void 0x0 === _0x1c5dbc && (_0x1c5dbc = !0x1), void 0x0 === _0x5e5ab3 && (_0x5e5ab3 = !0x0), this['_open'](!0x0, _0x1c5dbc, _0x5e5ab3);
            }, _0x1a6fdf['_open'] = function (_0x45ec26, _0x1c01fa, _0x52bd4e) {
                this['isModal'] = _0x45ec26, this['isShowEffe' + 'ct'] = _0x52bd4e, _0x56248f['manager']['lock'](!0x0), this['open'](_0x1c01fa);
            }, _0x3e8dc5(0x0, _0x1a6fdf, 'dragArea', function () {
                return this['_dragArea'] ? this['_dragArea']['toString']() : null;
            }, function (_0x36f5f2) {
                if (_0x36f5f2) {
                    var _0x5480cb = _0x250d08['fillArray']([
                        0x0,
                        0x0,
                        0x0,
                        0x0
                    ], _0x36f5f2, Number);
                    this['_dragArea'] = new _0x2007b3(_0x5480cb[0x0], _0x5480cb[0x1], _0x5480cb[0x2], _0x5480cb[0x3]), this['on']('mousedown', this, this['_onMouseDo' + 'wn']);
                } else
                    this['_dragArea'] = null, this['off']('mousedown', this, this['_onMouseDo' + 'wn']);
            }), _0x3e8dc5(0x0, _0x1a6fdf, 'isPopup', function () {
                return null != this['parent'];
            }), _0x3e8dc5(0x0, _0x1a6fdf, 'zOrder', _0x135a19['prototype']['_$get_zOrd' + 'er'], function (_0x525093) {
                _0x591c88['superSet'](_0x4ddaee, this, 'zOrder', _0x525093), _0x56248f['manager']['_checkMask']();
            }), _0x3e8dc5(0x1, _0x56248f, 'manager', function () {
                return _0x56248f['_manager'] = _0x56248f['_manager'] || new _0x2a8871();
            }, function (_0x5773cb) {
                _0x56248f['_manager'] = _0x5773cb;
            }), _0x56248f['setLockVie' + 'w'] = function (_0x2aed1e) {
                _0x56248f['manager']['setLockVie' + 'w'](_0x2aed1e);
            }, _0x56248f['lock'] = function (_0x4d6445) {
                _0x56248f['manager']['lock'](_0x4d6445);
            }, _0x56248f['closeAll'] = function () {
                _0x56248f['manager']['closeAll']();
            }, _0x56248f['getDialogs' + 'ByGroup'] = function (_0x2b1598) {
                return _0x56248f['manager']['getDialogs' + 'ByGroup'](_0x2b1598);
            }, _0x56248f['closeByGro' + 'up'] = function (_0x4103a9) {
                return _0x56248f['manager']['closeByGro' + 'up'](_0x4103a9);
            }, _0x56248f['CLOSE'] = 'close', _0x56248f['CANCEL'] = 'cancel', _0x56248f['SURE'] = 'sure', _0x56248f['NO'] = 'no', _0x56248f['YES'] = 'yes', _0x56248f['OK'] = 'ok', _0x56248f['_manager'] = null, _0x56248f;
        }(_0x4ddaee), _0x41d5a9 = function (_0x366ed6) {
            function _0x3dc314() {
                this['_items'] = null, this['_selectedI' + 'ndex'] = 0x0, _0x3dc314['__super']['call'](this), this['_setIndexH' + 'andler'] = _0x7c2cf9['create'](this, this['setIndex'], null, !0x1);
            }
            _0x49b6a8(_0x3dc314, 'laya.ui.Vi' + 'ewStack', _0x366ed6);
            var _0x5ddf22 = _0x3dc314['prototype'];
            return _0x591c88['imps'](_0x5ddf22, { 'laya.ui.IItem': !0x0 }), _0x5ddf22['setItems'] = function (_0x3e9ddc) {
                this['removeChil' + 'dren']();
                for (var _0xa2bcd7 = 0x0, _0xe973f3 = 0x0, _0x7c328c = _0x3e9ddc['length']; _0x7c328c > _0xe973f3; _0xe973f3++) {
                    var _0x3efee5 = _0x3e9ddc[_0xe973f3];
                    _0x3efee5 && (_0x3efee5['name'] = 'item' + _0xa2bcd7, this['addChild'](_0x3efee5), _0xa2bcd7++);
                }
                this['initItems']();
            }, _0x5ddf22['addItem'] = function (_0x5c6361) {
                _0x5c6361['name'] = 'item' + this['_items']['length'], this['addChild'](_0x5c6361), this['initItems']();
            }, _0x5ddf22['_afterInit' + 'ed'] = function () {
                this['initItems']();
            }, _0x5ddf22['initItems'] = function () {
                this['_items'] = [];
                for (var _0x56ae2f = 0x0; 0x2710 > _0x56ae2f; _0x56ae2f++) {
                    var _0x1ba6b1 = this['getChildBy' + 'Name']('item' + _0x56ae2f);
                    if (null == _0x1ba6b1)
                        break;
                    this['_items']['push'](_0x1ba6b1), _0x1ba6b1['visible'] = _0x56ae2f == this['_selectedI' + 'ndex'];
                }
            }, _0x5ddf22['setSelect'] = function (_0x2b5c1f, _0x32a813) {
                this['_items'] && _0x2b5c1f > -0x1 && _0x2b5c1f < this['_items']['length'] && (this['_items'][_0x2b5c1f]['visible'] = _0x32a813);
            }, _0x5ddf22['setIndex'] = function (_0x5cb238) {
                this['selectedIn' + 'dex'] = _0x5cb238;
            }, _0x3e8dc5(0x0, _0x5ddf22, 'dataSource', _0x366ed6['prototype']['_$get_data' + 'Source'], function (_0x236a55) {
                if (this['_dataSourc' + 'e'] = _0x236a55, 'number' == typeof _0x236a55 && Math['floor'](_0x236a55) == _0x236a55 || 'string' == typeof _0x236a55)
                    this['selectedIn' + 'dex'] = parseInt(_0x236a55);
                else {
                    for (var _0x358aaf in this['_dataSourc' + 'e'])
                        this['hasOwnProp' + 'erty'](_0x358aaf) && (this[_0x358aaf] = this['_dataSourc' + 'e'][_0x358aaf]);
                }
            }), _0x3e8dc5(0x0, _0x5ddf22, 'selectedIn' + 'dex', function () {
                return this['_selectedI' + 'ndex'];
            }, function (_0x48c682) {
                this['_selectedI' + 'ndex'] != _0x48c682 && (this['setSelect'](this['_selectedI' + 'ndex'], !0x1), this['_selectedI' + 'ndex'] = _0x48c682, this['setSelect'](this['_selectedI' + 'ndex'], !0x0));
            }), _0x3e8dc5(0x0, _0x5ddf22, 'selection', function () {
                return this['_selectedI' + 'ndex'] > -0x1 && this['_selectedI' + 'ndex'] < this['_items']['length'] ? this['_items'][this['_selectedI' + 'ndex']] : null;
            }, function (_0x2b1058) {
                this['selectedIn' + 'dex'] = this['_items']['indexOf'](_0x2b1058);
            }), _0x3e8dc5(0x0, _0x5ddf22, 'items', function () {
                return this['_items'];
            }), _0x3e8dc5(0x0, _0x5ddf22, 'setIndexHa' + 'ndler', function () {
                return this['_setIndexH' + 'andler'];
            }, function (_0x150098) {
                this['_setIndexH' + 'andler'] = _0x150098;
            }), _0x3dc314;
        }(_0x51befc), _0x31fd4d = function (_0x32deaa) {
            function _0x356fd6() {
                this['_space'] = 0x0, this['_align'] = 'none', this['_itemChang' + 'ed'] = !0x1, _0x356fd6['__super']['call'](this);
            }
            _0x49b6a8(_0x356fd6, 'laya.ui.La' + 'youtBox', _0x32deaa);
            var _0x4b2172 = _0x356fd6['prototype'];
            return _0x4b2172['addChild'] = function (_0x41cade) {
                return _0x41cade['on']('resize', this, this['onResize']), this['_setItemCh' + 'anged'](), laya['display']['Node']['prototype']['addChild']['call'](this, _0x41cade);
            }, _0x4b2172['onResize'] = function (_0x4421ef) {
                this['_setItemCh' + 'anged']();
            }, _0x4b2172['addChildAt'] = function (_0x123eeb, _0xb77249) {
                return _0x123eeb['on']('resize', this, this['onResize']), this['_setItemCh' + 'anged'](), laya['display']['Node']['prototype']['addChildAt']['call'](this, _0x123eeb, _0xb77249);
            }, _0x4b2172['removeChil' + 'dAt'] = function (_0x1fa2dc) {
                return this['getChildAt'](_0x1fa2dc)['off']('resize', this, this['onResize']), this['_setItemCh' + 'anged'](), laya['display']['Node']['prototype']['removeChil' + 'dAt']['call'](this, _0x1fa2dc);
            }, _0x4b2172['refresh'] = function () {
                this['_setItemCh' + 'anged']();
            }, _0x4b2172['changeItem' + 's'] = function () {
                this['_itemChang' + 'ed'] = !0x1;
            }, _0x4b2172['sortItem'] = function (_0x227497) {
                _0x227497 && _0x227497['sort'](function (_0x3b2320, _0xc13f16) {
                    return _0x3b2320['y'] - _0xc13f16['y'];
                });
            }, _0x4b2172['_setItemCh' + 'anged'] = function () {
                this['_itemChang' + 'ed'] || (this['_itemChang' + 'ed'] = !0x0, this['callLater'](this['changeItem' + 's']));
            }, _0x3e8dc5(0x0, _0x4b2172, 'space', function () {
                return this['_space'];
            }, function (_0x3d0f0f) {
                this['_space'] = _0x3d0f0f, this['_setItemCh' + 'anged']();
            }), _0x3e8dc5(0x0, _0x4b2172, 'align', function () {
                return this['_align'];
            }, function (_0x2e9628) {
                this['_align'] = _0x2e9628, this['_setItemCh' + 'anged']();
            }), _0x356fd6;
        }(_0x51befc), _0x12e8da = function (_0x52e3d2) {
            function _0x2c8b3c(_0x28c591, _0x2bbc32) {
                this['selectHand' + 'ler'] = null, this['_items'] = null, this['_selectedI' + 'ndex'] = -0x1, this['_skin'] = null, this['_direction'] = 'horizontal', this['_space'] = 0x0, this['_labels'] = null, this['_labelColo' + 'rs'] = null, this['_labelFont'] = null, this['_labelStro' + 'keColor'] = null, this['_strokeCol' + 'ors'] = null, this['_labelStro' + 'ke'] = NaN, this['_labelSize'] = 0x0, this['_labelBold'] = !0x1, this['_labelPadd' + 'ing'] = null, this['_labelAlig' + 'n'] = null, this['_stateNum'] = 0x0, this['_labelChan' + 'ged'] = !0x1, _0x2c8b3c['__super']['call'](this), this['skin'] = _0x2bbc32, this['labels'] = _0x28c591;
            }
            _0x49b6a8(_0x2c8b3c, 'laya.ui.UI' + 'Group', _0x52e3d2);
            var _0x5caba5 = _0x2c8b3c['prototype'];
            return _0x591c88['imps'](_0x5caba5, { 'laya.ui.IItem': !0x0 }), _0x5caba5['preinitial' + 'ize'] = function () {
                this['mouseEnabl' + 'ed'] = !0x0;
            }, _0x5caba5['destroy'] = function (_0x32243e) {
                void 0x0 === _0x32243e && (_0x32243e = !0x0), laya['ui']['UIComponen' + 't']['prototype']['destroy']['call'](this, _0x32243e), this['_items'] && (this['_items']['length'] = 0x0), this['_items'] = null, this['selectHand' + 'ler'] = null;
            }, _0x5caba5['addItem'] = function (_0xc60d48, _0x1dea66) {
                void 0x0 === _0x1dea66 && (_0x1dea66 = !0x0);
                var _0x4edac0 = _0xc60d48, _0x5006f1 = this['_items']['length'];
                if (_0x4edac0['name'] = 'item' + _0x5006f1, this['addChild'](_0x4edac0), this['initItems'](), _0x1dea66 && _0x5006f1 > 0x0) {
                    var _0x5961d0 = this['_items'][_0x5006f1 - 0x1];
                    'horizontal' == this['_direction'] ? _0x4edac0['x'] = _0x5961d0['_x'] + _0x5961d0['width'] + this['_space'] : _0x4edac0['y'] = _0x5961d0['_y'] + _0x5961d0['height'] + this['_space'];
                } else
                    _0x1dea66 && (_0x4edac0['x'] = 0x0, _0x4edac0['y'] = 0x0);
                return _0x5006f1;
            }, _0x5caba5['delItem'] = function (_0x441bb5, _0x20be6f) {
                void 0x0 === _0x20be6f && (_0x20be6f = !0x0);
                var _0xc70af6 = this['_items']['indexOf'](_0x441bb5);
                if (-0x1 != _0xc70af6) {
                    var _0x528b1f = _0x441bb5;
                    this['removeChil' + 'd'](_0x528b1f);
                    for (var _0xa30624 = _0xc70af6 + 0x1, _0x148b31 = this['_items']['length']; _0x148b31 > _0xa30624; _0xa30624++) {
                        var _0x138280 = this['_items'][_0xa30624];
                        _0x138280['name'] = 'item' + (_0xa30624 - 0x1), _0x20be6f && ('horizontal' == this['_direction'] ? _0x138280['x'] -= _0x528b1f['width'] + this['_space'] : _0x138280['y'] -= _0x528b1f['height'] + this['_space']);
                    }
                    if (this['initItems'](), this['_selectedI' + 'ndex'] > -0x1) {
                        var _0x4f815a = 0x0;
                        _0x4f815a = this['_selectedI' + 'ndex'] < this['_items']['length'] ? this['_selectedI' + 'ndex'] : this['_selectedI' + 'ndex'] - 0x1, this['_selectedI' + 'ndex'] = -0x1, this['selectedIn' + 'dex'] = _0x4f815a;
                    }
                }
            }, _0x5caba5['_afterInit' + 'ed'] = function () {
                this['initItems']();
            }, _0x5caba5['initItems'] = function () {
                this['_items'] || (this['_items'] = []), this['_items']['length'] = 0x0;
                for (var _0x1880e7 = 0x0; 0x2710 > _0x1880e7; _0x1880e7++) {
                    var _0x597d7a = this['getChildBy' + 'Name']('item' + _0x1880e7);
                    if (null == _0x597d7a)
                        break;
                    this['_items']['push'](_0x597d7a), _0x597d7a['selected'] = _0x1880e7 === this['_selectedI' + 'ndex'], _0x597d7a['clickHandl' + 'er'] = _0x7c2cf9['create'](this, this['itemClick'], [_0x1880e7], !0x1);
                }
            }, _0x5caba5['itemClick'] = function (_0x2948cc) {
                this['selectedIn' + 'dex'] = _0x2948cc;
            }, _0x5caba5['setSelect'] = function (_0x1bbcc2, _0x28b12f) {
                this['_items'] && _0x1bbcc2 > -0x1 && _0x1bbcc2 < this['_items']['length'] && (this['_items'][_0x1bbcc2]['selected'] = _0x28b12f);
            }, _0x5caba5['_skinLoade' + 'd'] = function () {
                this['_setLabelC' + 'hanged'](), this['event']('loaded');
            }, _0x5caba5['createItem'] = function (_0x3d0031, _0x1f220b) {
                return null;
            }, _0x5caba5['changeLabe' + 'ls'] = function () {
                if (this['_labelChan' + 'ged'] = !0x1, this['_items'])
                    for (var _0x504b57 = 0x0, _0xece66d = 0x0, _0x545801 = this['_items']['length']; _0x545801 > _0xece66d; _0xece66d++) {
                        var _0x19d265 = this['_items'][_0xece66d];
                        this['_skin'] && (_0x19d265['skin'] = this['_skin']), this['_labelColo' + 'rs'] && (_0x19d265['labelColor' + 's'] = this['_labelColo' + 'rs']), this['_labelSize'] && (_0x19d265['labelSize'] = this['_labelSize']), this['_labelStro' + 'ke'] && (_0x19d265['labelStrok' + 'e'] = this['_labelStro' + 'ke']), this['_labelStro' + 'keColor'] && (_0x19d265['labelStrok' + 'eColor'] = this['_labelStro' + 'keColor']), this['_strokeCol' + 'ors'] && (_0x19d265['strokeColo' + 'rs'] = this['_strokeCol' + 'ors']), this['_labelBold'] && (_0x19d265['labelBold'] = this['_labelBold']), this['_labelPadd' + 'ing'] && (_0x19d265['labelPaddi' + 'ng'] = this['_labelPadd' + 'ing']), this['_labelAlig' + 'n'] && (_0x19d265['labelAlign'] = this['_labelAlig' + 'n']), this['_stateNum'] && (_0x19d265['stateNum'] = this['_stateNum']), this['_labelFont'] && (_0x19d265['labelFont'] = this['_labelFont']), 'horizontal' === this['_direction'] ? (_0x19d265['y'] = 0x0, _0x19d265['x'] = _0x504b57, _0x504b57 += _0x19d265['width'] + this['_space']) : (_0x19d265['x'] = 0x0, _0x19d265['y'] = _0x504b57, _0x504b57 += _0x19d265['height'] + this['_space']);
                    }
                this['_sizeChang' + 'ed']();
            }, _0x5caba5['commitMeas' + 'ure'] = function () {
                this['runCallLat' + 'er'](this['changeLabe' + 'ls']);
            }, _0x5caba5['_setLabelC' + 'hanged'] = function () {
                this['_labelChan' + 'ged'] || (this['_labelChan' + 'ged'] = !0x0, this['callLater'](this['changeLabe' + 'ls']));
            }, _0x3e8dc5(0x0, _0x5caba5, 'labelStrok' + 'eColor', function () {
                return this['_labelStro' + 'keColor'];
            }, function (_0x412084) {
                this['_labelStro' + 'keColor'] != _0x412084 && (this['_labelStro' + 'keColor'] = _0x412084, this['_setLabelC' + 'hanged']());
            }), _0x3e8dc5(0x0, _0x5caba5, 'skin', function () {
                return this['_skin'];
            }, function (_0x2fde40) {
                this['_skin'] != _0x2fde40 && (this['_skin'] = _0x2fde40, this['_skin'] && !_0x501cfb['getRes'](this['_skin']) ? _0x591c88['loader']['load'](this['_skin'], _0x7c2cf9['create'](this, this['_skinLoade' + 'd']), null, 'image', 0x1) : this['_skinLoade' + 'd']());
            }), _0x3e8dc5(0x0, _0x5caba5, 'selectedIn' + 'dex', function () {
                return this['_selectedI' + 'ndex'];
            }, function (_0x42b18c) {
                this['_selectedI' + 'ndex'] != _0x42b18c && (this['setSelect'](this['_selectedI' + 'ndex'], !0x1), this['_selectedI' + 'ndex'] = _0x42b18c, this['setSelect'](_0x42b18c, !0x0), this['event']('change'), this['selectHand' + 'ler'] && this['selectHand' + 'ler']['runWith'](this['_selectedI' + 'ndex']));
            }), _0x3e8dc5(0x0, _0x5caba5, 'labels', function () {
                return this['_labels'];
            }, function (_0x382c86) {
                if (this['_labels'] != _0x382c86) {
                    if (this['_labels'] = _0x382c86, this['removeChil' + 'dren'](), this['_setLabelC' + 'hanged'](), this['_labels'])
                        for (var _0x1e37ee = this['_labels']['split'](','), _0xb9f72e = 0x0, _0x56445a = _0x1e37ee['length']; _0x56445a > _0xb9f72e; _0xb9f72e++) {
                            var _0x12a23e = this['createItem'](this['_skin'], _0x1e37ee[_0xb9f72e]);
                            _0x12a23e['name'] = 'item' + _0xb9f72e, this['addChild'](_0x12a23e);
                        }
                    this['initItems']();
                }
            }), _0x3e8dc5(0x0, _0x5caba5, 'strokeColo' + 'rs', function () {
                return this['_strokeCol' + 'ors'];
            }, function (_0xa91743) {
                this['_strokeCol' + 'ors'] != _0xa91743 && (this['_strokeCol' + 'ors'] = _0xa91743, this['_setLabelC' + 'hanged']());
            }), _0x3e8dc5(0x0, _0x5caba5, 'labelColor' + 's', function () {
                return this['_labelColo' + 'rs'];
            }, function (_0x3e0218) {
                this['_labelColo' + 'rs'] != _0x3e0218 && (this['_labelColo' + 'rs'] = _0x3e0218, this['_setLabelC' + 'hanged']());
            }), _0x3e8dc5(0x0, _0x5caba5, 'labelStrok' + 'e', function () {
                return this['_labelStro' + 'ke'];
            }, function (_0xa6762c) {
                this['_labelStro' + 'ke'] != _0xa6762c && (this['_labelStro' + 'ke'] = _0xa6762c, this['_setLabelC' + 'hanged']());
            }), _0x3e8dc5(0x0, _0x5caba5, 'labelSize', function () {
                return this['_labelSize'];
            }, function (_0x15ee21) {
                this['_labelSize'] != _0x15ee21 && (this['_labelSize'] = _0x15ee21, this['_setLabelC' + 'hanged']());
            }), _0x3e8dc5(0x0, _0x5caba5, 'stateNum', function () {
                return this['_stateNum'];
            }, function (_0x1a126a) {
                this['_stateNum'] != _0x1a126a && (this['_stateNum'] = _0x1a126a, this['_setLabelC' + 'hanged']());
            }), _0x3e8dc5(0x0, _0x5caba5, 'labelBold', function () {
                return this['_labelBold'];
            }, function (_0x280d48) {
                this['_labelBold'] != _0x280d48 && (this['_labelBold'] = _0x280d48, this['_setLabelC' + 'hanged']());
            }), _0x3e8dc5(0x0, _0x5caba5, 'labelFont', function () {
                return this['_labelFont'];
            }, function (_0x1c0dad) {
                this['_labelFont'] != _0x1c0dad && (this['_labelFont'] = _0x1c0dad, this['_setLabelC' + 'hanged']());
            }), _0x3e8dc5(0x0, _0x5caba5, 'labelPaddi' + 'ng', function () {
                return this['_labelPadd' + 'ing'];
            }, function (_0x26448e) {
                this['_labelPadd' + 'ing'] != _0x26448e && (this['_labelPadd' + 'ing'] = _0x26448e, this['_setLabelC' + 'hanged']());
            }), _0x3e8dc5(0x0, _0x5caba5, 'direction', function () {
                return this['_direction'];
            }, function (_0x4182d5) {
                this['_direction'] = _0x4182d5, this['_setLabelC' + 'hanged']();
            }), _0x3e8dc5(0x0, _0x5caba5, 'space', function () {
                return this['_space'];
            }, function (_0x1ab492) {
                this['_space'] = _0x1ab492, this['_setLabelC' + 'hanged']();
            }), _0x3e8dc5(0x0, _0x5caba5, 'items', function () {
                return this['_items'];
            }), _0x3e8dc5(0x0, _0x5caba5, 'selection', function () {
                return this['_selectedI' + 'ndex'] > -0x1 && this['_selectedI' + 'ndex'] < this['_items']['length'] ? this['_items'][this['_selectedI' + 'ndex']] : null;
            }, function (_0x2a2c57) {
                this['selectedIn' + 'dex'] = this['_items']['indexOf'](_0x2a2c57);
            }), _0x3e8dc5(0x0, _0x5caba5, 'dataSource', _0x52e3d2['prototype']['_$get_data' + 'Source'], function (_0x47a250) {
                this['_dataSourc' + 'e'] = _0x47a250, 'number' == typeof _0x47a250 && Math['floor'](_0x47a250) == _0x47a250 || 'string' == typeof _0x47a250 ? this['selectedIn' + 'dex'] = parseInt(_0x47a250) : _0x47a250 instanceof Array ? this['labels'] = _0x47a250['join'](',') : _0x591c88['superSet'](_0x51befc, this, 'dataSource', _0x47a250);
            }), _0x2c8b3c;
        }(_0x51befc), _0x1bd3ba = function (_0xb8a190) {
            function _0x4858f5(_0x4bd833, _0x4c7495) {
                void 0x0 === _0x4c7495 && (_0x4c7495 = ''), _0x4858f5['__super']['call'](this, _0x4bd833, _0x4c7495);
            }
            _0x49b6a8(_0x4858f5, 'laya.ui.Ch' + 'eckBox', _0xb8a190);
            var _0x21b495 = _0x4858f5['prototype'];
            return _0x21b495['preinitial' + 'ize'] = function () {
                laya['ui']['UIComponen' + 't']['prototype']['preinitial' + 'ize']['call'](this), this['toggle'] = !0x0, this['_autoSize'] = !0x1;
            }, _0x21b495['initialize'] = function () {
                _0xb8a190['prototype']['initialize']['call'](this), this['createText'](), this['_text']['align'] = 'left', this['_text']['valign'] = 'top', this['_text']['width'] = 0x0;
            }, _0x3e8dc5(0x0, _0x21b495, 'dataSource', _0xb8a190['prototype']['_$get_data' + 'Source'], function (_0x3c6b49) {
                this['_dataSourc' + 'e'] = _0x3c6b49, 'boolean' == typeof _0x3c6b49 ? this['selected'] = _0x3c6b49 : 'string' == typeof _0x3c6b49 ? this['selected'] = 'true' === _0x3c6b49 : _0x591c88['superSet'](_0x19d5d0, this, 'dataSource', _0x3c6b49);
            }), _0x4858f5;
        }(_0x19d5d0), _0x3241ae = function (_0x321806) {
            function _0x859737() {
                this['_list'] = null, this['_source'] = null, this['_renderHan' + 'dler'] = null, this['_spaceLeft'] = 0xa, this['_spaceBott' + 'om'] = 0x0, this['_keepStatu' + 's'] = !0x0, _0x859737['__super']['call'](this), this['width'] = this['height'] = 0xc8;
            }
            _0x49b6a8(_0x859737, 'laya.ui.Tr' + 'ee', _0x321806);
            var _0x540ae4 = _0x859737['prototype'];
            return _0x591c88['imps'](_0x540ae4, { 'laya.ui.IRender': !0x0 }), _0x540ae4['destroy'] = function (_0xd62fee) {
                void 0x0 === _0xd62fee && (_0xd62fee = !0x0), laya['ui']['UIComponen' + 't']['prototype']['destroy']['call'](this, _0xd62fee), this['_list'] && this['_list']['destroy'](_0xd62fee), this['_list'] = null, this['_source'] = null, this['_renderHan' + 'dler'] = null;
            }, _0x540ae4['createChil' + 'dren'] = function () {
                this['addChild'](this['_list'] = new _0x1e34b1()), this['_list']['renderHand' + 'ler'] = _0x7c2cf9['create'](this, this['renderItem'], null, !0x1), this['_list']['repeatX'] = 0x1, this['_list']['on']('change', this, this['onListChan' + 'ge']);
            }, _0x540ae4['onListChan' + 'ge'] = function (_0xdf77b4) {
                this['event']('change');
            }, _0x540ae4['getArray'] = function () {
                var _0x34c51e, _0x250607 = [];
                for (var _0x2a2b53 in this['_source'])
                    _0x34c51e = this['_source'][_0x2a2b53], this['getParentO' + 'penStatus'](_0x34c51e) && (_0x34c51e['x'] = this['_spaceLeft'] * this['getDepth'](_0x34c51e), _0x250607['push'](_0x34c51e));
                return _0x250607;
            }, _0x540ae4['getDepth'] = function (_0x1b4db2, _0x318f67) {
                return void 0x0 === _0x318f67 && (_0x318f67 = 0x0), null == _0x1b4db2['nodeParent'] ? _0x318f67 : this['getDepth'](_0x1b4db2['nodeParent'], _0x318f67 + 0x1);
            }, _0x540ae4['getParentO' + 'penStatus'] = function (_0x2f118e) {
                var _0x1d7304 = _0x2f118e['nodeParent'];
                return null == _0x1d7304 ? !0x0 : _0x1d7304['isOpen'] ? null != _0x1d7304['nodeParent'] ? this['getParentO' + 'penStatus'](_0x1d7304) : !0x0 : !0x1;
            }, _0x540ae4['renderItem'] = function (_0x54aec8, _0x5b28a4) {
                var _0x2bd3a0 = _0x54aec8['dataSource'];
                if (_0x2bd3a0) {
                    _0x54aec8['left'] = _0x2bd3a0['x'];
                    var _0x41a547 = _0x54aec8['getChildBy' + 'Name']('arrow');
                    _0x41a547 && (_0x2bd3a0['hasChild'] ? (_0x41a547['visible'] = !0x0, _0x41a547['index'] = _0x2bd3a0['isOpen'] ? 0x1 : 0x0, _0x41a547['tag'] = _0x5b28a4, _0x41a547['off']('click', this, this['onArrowCli' + 'ck']), _0x41a547['on']('click', this, this['onArrowCli' + 'ck'])) : _0x41a547['visible'] = !0x1);
                    var _0xcd4065 = _0x54aec8['getChildBy' + 'Name']('folder');
                    _0xcd4065 && (0x2 == _0xcd4065['clipY'] ? _0xcd4065['index'] = _0x2bd3a0['isDirector' + 'y'] ? 0x0 : 0x1 : _0xcd4065['index'] = _0x2bd3a0['isDirector' + 'y'] ? _0x2bd3a0['isOpen'] ? 0x1 : 0x0 : 0x2), this['_renderHan' + 'dler'] && this['_renderHan' + 'dler']['runWith']([
                        _0x54aec8,
                        _0x5b28a4
                    ]);
                }
            }, _0x540ae4['onArrowCli' + 'ck'] = function (_0x574110) {
                var _0x6136a6 = _0x574110['currentTar' + 'get'], _0x46045d = _0x6136a6['tag'];
                this['_list']['array'][_0x46045d]['isOpen'] = !this['_list']['array'][_0x46045d]['isOpen'], this['event']('open'), this['_list']['array'] = this['getArray']();
            }, _0x540ae4['setItemSta' + 'te'] = function (_0x344003, _0x42bdd6) {
                this['_list']['array'][_0x344003] && (this['_list']['array'][_0x344003]['isOpen'] = _0x42bdd6, this['_list']['array'] = this['getArray']());
            }, _0x540ae4['fresh'] = function () {
                this['_list']['array'] = this['getArray'](), this['repaint']();
            }, _0x540ae4['parseXml'] = function (_0x43b010, _0x22b290, _0x4710b5, _0x1c4c47) {
                var _0xf0ad1, _0x4c2fce = _0x43b010['childNodes'], _0x58e909 = _0x4c2fce['length'];
                if (!_0x1c4c47) {
                    _0xf0ad1 = {};
                    var _0x1d7424, _0x91e768 = _0x43b010['attributes'];
                    for (var _0x477dcc in _0x91e768) {
                        _0x1d7424 = _0x91e768[_0x477dcc];
                        var _0x29b0ca = _0x1d7424['nodeName'], _0xbaa519 = _0x1d7424['nodeValue'];
                        _0xf0ad1[_0x29b0ca] = 'true' == _0xbaa519 ? !0x0 : 'false' == _0xbaa519 ? !0x1 : _0xbaa519;
                    }
                    _0xf0ad1['nodeParent'] = _0x4710b5, _0x58e909 > 0x0 && (_0xf0ad1['isDirector' + 'y'] = !0x0), _0xf0ad1['hasChild'] = _0x58e909 > 0x0, _0x22b290['push'](_0xf0ad1);
                }
                for (var _0x56dd04 = 0x0; _0x58e909 > _0x56dd04; _0x56dd04++) {
                    var _0x122ef5 = _0x4c2fce[_0x56dd04];
                    this['parseXml'](_0x122ef5, _0x22b290, _0xf0ad1, !0x1);
                }
            }, _0x540ae4['parseOpenS' + 'tatus'] = function (_0x548f28, _0x56bb55) {
                for (var _0xdba149 = 0x0, _0x3ee97a = _0x56bb55['length']; _0x3ee97a > _0xdba149; _0xdba149++) {
                    var _0x54e314 = _0x56bb55[_0xdba149];
                    if (_0x54e314['isDirector' + 'y'])
                        for (var _0x3b3f9a = 0x0, _0x60a702 = _0x548f28['length']; _0x60a702 > _0x3b3f9a; _0x3b3f9a++) {
                            var _0x560756 = _0x548f28[_0x3b3f9a];
                            if (_0x560756['isDirector' + 'y'] && this['isSamePare' + 'nt'](_0x560756, _0x54e314) && _0x54e314['label'] == _0x560756['label']) {
                                _0x54e314['isOpen'] = _0x560756['isOpen'];
                                break;
                            }
                        }
                }
            }, _0x540ae4['isSamePare' + 'nt'] = function (_0x3efcc3, _0x3e7431) {
                return null == _0x3efcc3['nodeParent'] && null == _0x3e7431['nodeParent'] ? !0x0 : null == _0x3efcc3['nodeParent'] || null == _0x3e7431['nodeParent'] ? !0x1 : _0x3efcc3['nodeParent']['label'] == _0x3e7431['nodeParent']['label'] ? this['isSamePare' + 'nt'](_0x3efcc3['nodeParent'], _0x3e7431['nodeParent']) : !0x1;
            }, _0x540ae4['filter'] = function (_0x42ebc6) {
                if (Boolean(_0x42ebc6)) {
                    var _0x541fef = [];
                    this['getFilterS' + 'ource'](this['_source'], _0x541fef, _0x42ebc6), this['_list']['array'] = _0x541fef;
                } else
                    this['_list']['array'] = this['getArray']();
            }, _0x540ae4['getFilterS' + 'ource'] = function (_0x5f16ff, _0x4b78f8, _0x55b412) {
                _0x55b412 = _0x55b412['toLocaleLo' + 'werCase']();
                var _0x1c02e6;
                for (var _0x366a4f in _0x5f16ff)
                    _0x1c02e6 = _0x5f16ff[_0x366a4f], !_0x1c02e6['isDirector' + 'y'] && String(_0x1c02e6['label'])['toLowerCas' + 'e']()['indexOf'](_0x55b412) > -0x1 && (_0x1c02e6['x'] = 0x0, _0x4b78f8['push'](_0x1c02e6)), _0x1c02e6['child'] && _0x1c02e6['child']['length'] > 0x0 && this['getFilterS' + 'ource'](_0x1c02e6['child'], _0x4b78f8, _0x55b412);
            }, _0x3e8dc5(0x0, _0x540ae4, 'spaceBotto' + 'm', function () {
                return this['_list']['spaceY'];
            }, function (_0x2cd7e6) {
                this['_list']['spaceY'] = _0x2cd7e6;
            }), _0x3e8dc5(0x0, _0x540ae4, 'keepStatus', function () {
                return this['_keepStatu' + 's'];
            }, function (_0x3d2608) {
                this['_keepStatu' + 's'] = _0x3d2608;
            }), _0x3e8dc5(0x0, _0x540ae4, 'itemRender', function () {
                return this['_list']['itemRender'];
            }, function (_0x13d770) {
                this['_list']['itemRender'] = _0x13d770;
            }), _0x3e8dc5(0x0, _0x540ae4, 'array', function () {
                return this['_list']['array'];
            }, function (_0x503692) {
                this['_keepStatu' + 's'] && this['_list']['array'] && _0x503692 && this['parseOpenS' + 'tatus'](this['_list']['array'], _0x503692), this['_source'] = _0x503692, this['_list']['array'] = this['getArray']();
            }), _0x3e8dc5(0x0, _0x540ae4, 'mouseHandl' + 'er', function () {
                return this['_list']['mouseHandl' + 'er'];
            }, function (_0x3ed713) {
                this['_list']['mouseHandl' + 'er'] = _0x3ed713;
            }), _0x3e8dc5(0x0, _0x540ae4, 'dataSource', _0x321806['prototype']['_$get_data' + 'Source'], function (_0x15b6d0) {
                this['_dataSourc' + 'e'] = _0x15b6d0, _0x591c88['superSet'](_0x51befc, this, 'dataSource', _0x15b6d0);
            }), _0x3e8dc5(0x0, _0x540ae4, 'source', function () {
                return this['_source'];
            }), _0x3e8dc5(0x0, _0x540ae4, 'scrollBar', function () {
                return this['_list']['scrollBar'];
            }), _0x3e8dc5(0x0, _0x540ae4, 'list', function () {
                return this['_list'];
            }), _0x3e8dc5(0x0, _0x540ae4, 'scrollBarS' + 'kin', function () {
                return this['_list']['vScrollBar' + 'Skin'];
            }, function (_0x1f838d) {
                this['_list']['vScrollBar' + 'Skin'] = _0x1f838d;
            }), _0x3e8dc5(0x0, _0x540ae4, 'renderHand' + 'ler', function () {
                return this['_renderHan' + 'dler'];
            }, function (_0x1b0296) {
                this['_renderHan' + 'dler'] = _0x1b0296;
            }), _0x3e8dc5(0x0, _0x540ae4, 'selectedIn' + 'dex', function () {
                return this['_list']['selectedIn' + 'dex'];
            }, function (_0x46505f) {
                this['_list']['selectedIn' + 'dex'] = _0x46505f;
            }), _0x3e8dc5(0x0, _0x540ae4, 'spaceLeft', function () {
                return this['_spaceLeft'];
            }, function (_0x430c7e) {
                this['_spaceLeft'] = _0x430c7e;
            }), _0x3e8dc5(0x0, _0x540ae4, 'selectedIt' + 'em', function () {
                return this['_list']['selectedIt' + 'em'];
            }, function (_0x1bf13d) {
                this['_list']['selectedIt' + 'em'] = _0x1bf13d;
            }), _0x3e8dc5(0x0, _0x540ae4, 'width', _0x321806['prototype']['_$get_widt' + 'h'], function (_0x273900) {
                _0x591c88['superSet'](_0x51befc, this, 'width', _0x273900), this['_list']['width'] = _0x273900;
            }), _0x3e8dc5(0x0, _0x540ae4, 'height', _0x321806['prototype']['_$get_heig' + 'ht'], function (_0x4f9ba7) {
                _0x591c88['superSet'](_0x51befc, this, 'height', _0x4f9ba7), this['_list']['height'] = _0x4f9ba7;
            }), _0x3e8dc5(0x0, _0x540ae4, 'xml', null, function (_0x578676) {
                var _0x42fab5 = [];
                this['parseXml'](_0x578676['childNodes'][0x0], _0x42fab5, null, !0x0), this['array'] = _0x42fab5;
            }), _0x3e8dc5(0x0, _0x540ae4, 'selectedPa' + 'th', function () {
                return this['_list']['selectedIt' + 'em'] ? this['_list']['selectedIt' + 'em']['path'] : null;
            }), _0x859737;
        }(_0x51befc), _0x3f0757 = function (_0x35a542) {
            function _0xf5708f() {
                this['_content'] = null, this['_vScrollBa' + 'r'] = null, this['_hScrollBa' + 'r'] = null, this['_scrollCha' + 'nged'] = !0x1, this['_usedCache'] = null, this['_elasticEn' + 'abled'] = !0x1, _0xf5708f['__super']['call'](this), this['width'] = this['height'] = 0x64;
            }
            _0x49b6a8(_0xf5708f, 'laya.ui.Pa' + 'nel', _0x35a542);
            var _0x3af239 = _0xf5708f['prototype'];
            return _0x3af239['destroy'] = function (_0x381234) {
                void 0x0 === _0x381234 && (_0x381234 = !0x0), laya['ui']['UIComponen' + 't']['prototype']['destroy']['call'](this, _0x381234), this['_content'] && this['_content']['destroy'](_0x381234), this['_vScrollBa' + 'r'] && this['_vScrollBa' + 'r']['destroy'](_0x381234), this['_hScrollBa' + 'r'] && this['_hScrollBa' + 'r']['destroy'](_0x381234), this['_vScrollBa' + 'r'] = null, this['_hScrollBa' + 'r'] = null, this['_content'] = null;
            }, _0x3af239['destroyChi' + 'ldren'] = function () {
                this['_content']['destroyChi' + 'ldren']();
            }, _0x3af239['createChil' + 'dren'] = function () {
                laya['display']['Node']['prototype']['addChild']['call'](this, this['_content'] = new _0x51befc());
            }, _0x3af239['addChild'] = function (_0x1b1e3d) {
                return _0x1b1e3d['on']('resize', this, this['onResize']), this['_setScroll' + 'Changed'](), this['_content']['addChild'](_0x1b1e3d);
            }, _0x3af239['onResize'] = function () {
                this['_setScroll' + 'Changed']();
            }, _0x3af239['addChildAt'] = function (_0x4c0f17, _0x3b7827) {
                return _0x4c0f17['on']('resize', this, this['onResize']), this['_setScroll' + 'Changed'](), this['_content']['addChildAt'](_0x4c0f17, _0x3b7827);
            }, _0x3af239['removeChil' + 'd'] = function (_0xf446e1) {
                return _0xf446e1['off']('resize', this, this['onResize']), this['_setScroll' + 'Changed'](), this['_content']['removeChil' + 'd'](_0xf446e1);
            }, _0x3af239['removeChil' + 'dAt'] = function (_0x2db24a) {
                return this['getChildAt'](_0x2db24a)['off']('resize', this, this['onResize']), this['_setScroll' + 'Changed'](), this['_content']['removeChil' + 'dAt'](_0x2db24a);
            }, _0x3af239['removeChil' + 'dren'] = function (_0x11eca7, _0x526e4a) {
                return void 0x0 === _0x11eca7 && (_0x11eca7 = 0x0), void 0x0 === _0x526e4a && (_0x526e4a = 0x7fffffff), this['_content']['removeChil' + 'dren'](_0x11eca7, _0x526e4a), this['_setScroll' + 'Changed'](), this;
            }, _0x3af239['getChildAt'] = function (_0x3a7eea) {
                return this['_content']['getChildAt'](_0x3a7eea);
            }, _0x3af239['getChildBy' + 'Name'] = function (_0x2c0066) {
                return this['_content']['getChildBy' + 'Name'](_0x2c0066);
            }, _0x3af239['getChildIn' + 'dex'] = function (_0x22e3b9) {
                return this['_content']['getChildIn' + 'dex'](_0x22e3b9);
            }, _0x3af239['changeScro' + 'll'] = function () {
                this['_scrollCha' + 'nged'] = !0x1;
                var _0x54223f = this['contentWid' + 'th'] || 0x1, _0x219925 = this['contentHei' + 'ght'] || 0x1, _0x4b5827 = this['_vScrollBa' + 'r'], _0x1c42a2 = this['_hScrollBa' + 'r'], _0x1d82bf = _0x4b5827 && _0x219925 > this['_height'], _0x4af79a = _0x1c42a2 && _0x54223f > this['_width'], _0x4cc03e = _0x1d82bf ? this['_width'] - _0x4b5827['width'] : this['_width'], _0x28f350 = _0x4af79a ? this['_height'] - _0x1c42a2['height'] : this['_height'];
                _0x4b5827 && (_0x4b5827['x'] = this['_width'] - _0x4b5827['width'], _0x4b5827['y'] = 0x0, _0x4b5827['height'] = this['_height'] - (_0x4af79a ? _0x1c42a2['height'] : 0x0), _0x4b5827['scrollSize'] = Math['max'](0.033 * this['_height'], 0x1), _0x4b5827['thumbPerce' + 'nt'] = _0x28f350 / _0x219925, _0x4b5827['setScroll'](0x0, _0x219925 - _0x28f350, _0x4b5827['value'])), _0x1c42a2 && (_0x1c42a2['x'] = 0x0, _0x1c42a2['y'] = this['_height'] - _0x1c42a2['height'], _0x1c42a2['width'] = this['_width'] - (_0x1d82bf ? _0x4b5827['width'] : 0x0), _0x1c42a2['scrollSize'] = Math['max'](0.033 * this['_width'], 0x1), _0x1c42a2['thumbPerce' + 'nt'] = _0x4cc03e / _0x54223f, _0x1c42a2['setScroll'](0x0, _0x54223f - _0x4cc03e, _0x1c42a2['value']));
            }, _0x3af239['_sizeChang' + 'ed'] = function () {
                laya['ui']['UIComponen' + 't']['prototype']['_sizeChang' + 'ed']['call'](this), this['setContent' + 'Size'](this['_width'], this['_height']);
            }, _0x3af239['setContent' + 'Size'] = function (_0x1a2f30, _0x4ca5da) {
                var _0xe15c23 = this['_content'];
                _0xe15c23['width'] = _0x1a2f30, _0xe15c23['height'] = _0x4ca5da, _0xe15c23['_style']['scrollRect'] || (_0xe15c23['scrollRect'] = _0x2007b3['create']()), _0xe15c23['_style']['scrollRect']['setTo'](0x0, 0x0, _0x1a2f30, _0x4ca5da), _0xe15c23['scrollRect'] = _0xe15c23['scrollRect'];
            }, _0x3af239['onScrollBa' + 'rChange'] = function (_0x582ca1) {
                var _0x27f500 = this['_content']['_style']['scrollRect'];
                if (_0x27f500) {
                    var _0x11da02 = Math['round'](_0x582ca1['value']);
                    _0x582ca1['isVertical'] ? _0x27f500['y'] = _0x11da02 : _0x27f500['x'] = _0x11da02, this['_content']['scrollRect'] = _0x27f500;
                }
            }, _0x3af239['scrollTo'] = function (_0xd6114c, _0x51d829) {
                void 0x0 === _0xd6114c && (_0xd6114c = 0x0), void 0x0 === _0x51d829 && (_0x51d829 = 0x0), this['vScrollBar'] && (this['vScrollBar']['value'] = _0x51d829), this['hScrollBar'] && (this['hScrollBar']['value'] = _0xd6114c);
            }, _0x3af239['refresh'] = function () {
                this['changeScro' + 'll']();
            }, _0x3af239['onScrollSt' + 'art'] = function () {
                this['_usedCache'] || (this['_usedCache'] = _0x591c88['superGet'](_0x51befc, this, 'cacheAs')), _0x591c88['superSet'](_0x51befc, this, 'cacheAs', 'none'), this['_hScrollBa' + 'r'] && this['_hScrollBa' + 'r']['once']('end', this, this['onScrollEn' + 'd']), this['_vScrollBa' + 'r'] && this['_vScrollBa' + 'r']['once']('end', this, this['onScrollEn' + 'd']);
            }, _0x3af239['onScrollEn' + 'd'] = function () {
                _0x591c88['superSet'](_0x51befc, this, 'cacheAs', this['_usedCache']);
            }, _0x3af239['_setScroll' + 'Changed'] = function () {
                this['_scrollCha' + 'nged'] || (this['_scrollCha' + 'nged'] = !0x0, this['callLater'](this['changeScro' + 'll']));
            }, _0x3e8dc5(0x0, _0x3af239, 'numChildre' + 'n', function () {
                return this['_content']['numChildre' + 'n'];
            }), _0x3e8dc5(0x0, _0x3af239, 'hScrollBar' + 'Skin', function () {
                return this['_hScrollBa' + 'r'] ? this['_hScrollBa' + 'r']['skin'] : null;
            }, function (_0x242d8f) {
                null == this['_hScrollBa' + 'r'] && (laya['display']['Node']['prototype']['addChild']['call'](this, this['_hScrollBa' + 'r'] = new _0x41ed7e()), this['_hScrollBa' + 'r']['on']('change', this, this['onScrollBa' + 'rChange'], [this['_hScrollBa' + 'r']]), this['_hScrollBa' + 'r']['target'] = this['_content'], this['_hScrollBa' + 'r']['elasticDis' + 'tance'] = this['_elasticEn' + 'abled'] ? 0xc8 : 0x0, this['_setScroll' + 'Changed']()), this['_hScrollBa' + 'r']['skin'] = _0x242d8f;
            }), _0x3e8dc5(0x0, _0x3af239, 'contentWid' + 'th', function () {
                for (var _0x4343b5 = 0x0, _0x19cb55 = this['_content']['numChildre' + 'n'] - 0x1; _0x19cb55 > -0x1; _0x19cb55--) {
                    var _0x28ae58 = this['_content']['getChildAt'](_0x19cb55);
                    _0x4343b5 = Math['max'](_0x28ae58['_x'] + _0x28ae58['width'] * _0x28ae58['scaleX'] - _0x28ae58['pivotX'], _0x4343b5);
                }
                return _0x4343b5;
            }), _0x3e8dc5(0x0, _0x3af239, 'contentHei' + 'ght', function () {
                for (var _0x4da895 = 0x0, _0x18ccd4 = this['_content']['numChildre' + 'n'] - 0x1; _0x18ccd4 > -0x1; _0x18ccd4--) {
                    var _0x5bc9d0 = this['_content']['getChildAt'](_0x18ccd4);
                    _0x4da895 = Math['max'](_0x5bc9d0['_y'] + _0x5bc9d0['height'] * _0x5bc9d0['scaleY'] - _0x5bc9d0['pivotY'], _0x4da895);
                }
                return _0x4da895;
            }), _0x3e8dc5(0x0, _0x3af239, 'width', _0x35a542['prototype']['_$get_widt' + 'h'], function (_0x31da6d) {
                _0x591c88['superSet'](_0x51befc, this, 'width', _0x31da6d), this['_setScroll' + 'Changed']();
            }), _0x3e8dc5(0x0, _0x3af239, 'hScrollBar', function () {
                return this['_hScrollBa' + 'r'];
            }), _0x3e8dc5(0x0, _0x3af239, 'content', function () {
                return this['_content'];
            }), _0x3e8dc5(0x0, _0x3af239, 'height', _0x35a542['prototype']['_$get_heig' + 'ht'], function (_0x3f5b1e) {
                _0x591c88['superSet'](_0x51befc, this, 'height', _0x3f5b1e), this['_setScroll' + 'Changed']();
            }), _0x3e8dc5(0x0, _0x3af239, 'vScrollBar' + 'Skin', function () {
                return this['_vScrollBa' + 'r'] ? this['_vScrollBa' + 'r']['skin'] : null;
            }, function (_0x547a58) {
                null == this['_vScrollBa' + 'r'] && (laya['display']['Node']['prototype']['addChild']['call'](this, this['_vScrollBa' + 'r'] = new _0x168dec()), this['_vScrollBa' + 'r']['on']('change', this, this['onScrollBa' + 'rChange'], [this['_vScrollBa' + 'r']]), this['_vScrollBa' + 'r']['target'] = this['_content'], this['_vScrollBa' + 'r']['elasticDis' + 'tance'] = this['_elasticEn' + 'abled'] ? 0xc8 : 0x0, this['_setScroll' + 'Changed']()), this['_vScrollBa' + 'r']['skin'] = _0x547a58;
            }), _0x3e8dc5(0x0, _0x3af239, 'vScrollBar', function () {
                return this['_vScrollBa' + 'r'];
            }), _0x3e8dc5(0x0, _0x3af239, 'cacheAs', _0x35a542['prototype']['_$get_cach' + 'eAs'], function (_0x4e1e8d) {
                _0x591c88['superSet'](_0x51befc, this, 'cacheAs', _0x4e1e8d), this['_usedCache'] = null, 'none' !== _0x4e1e8d ? (this['_hScrollBa' + 'r'] && this['_hScrollBa' + 'r']['on']('start', this, this['onScrollSt' + 'art']), this['_vScrollBa' + 'r'] && this['_vScrollBa' + 'r']['on']('start', this, this['onScrollSt' + 'art'])) : (this['_hScrollBa' + 'r'] && this['_hScrollBa' + 'r']['off']('start', this, this['onScrollSt' + 'art']), this['_vScrollBa' + 'r'] && this['_vScrollBa' + 'r']['off']('start', this, this['onScrollSt' + 'art']));
            }), _0x3e8dc5(0x0, _0x3af239, 'elasticEna' + 'bled', function () {
                return this['_elasticEn' + 'abled'];
            }, function (_0xa3ba08) {
                this['_elasticEn' + 'abled'] = _0xa3ba08, this['_vScrollBa' + 'r'] && (this['_vScrollBa' + 'r']['elasticDis' + 'tance'] = _0xa3ba08 ? 0xc8 : 0x0), this['_hScrollBa' + 'r'] && (this['_hScrollBa' + 'r']['elasticDis' + 'tance'] = _0xa3ba08 ? 0xc8 : 0x0);
            }), _0xf5708f;
        }(_0x51befc), _0x1e34b1 = function (_0x3ba746) {
            function _0x4dc4ab() {
                this['selectHand' + 'ler'] = null, this['renderHand' + 'ler'] = null, this['mouseHandl' + 'er'] = null, this['selectEnab' + 'le'] = !0x1, this['totalPage'] = 0x0, this['_$componen' + 'tType'] = 'List', this['_content'] = null, this['_scrollBar'] = null, this['_itemRende' + 'r'] = null, this['_repeatX'] = 0x0, this['_repeatY'] = 0x0, this['_repeatX2'] = 0x0, this['_repeatY2'] = 0x0, this['_spaceX'] = 0x0, this['_spaceY'] = 0x0, this['_array'] = null, this['_startInde' + 'x'] = 0x0, this['_selectedI' + 'ndex'] = -0x1, this['_page'] = 0x0, this['_isVertica' + 'l'] = !0x0, this['_cellSize'] = 0x14, this['_cellOffse' + 't'] = 0x0, this['_isMoved'] = !0x1, this['cacheConte' + 'nt'] = !0x1, this['_createdLi' + 'ne'] = 0x0, this['_cellChang' + 'ed'] = !0x1, this['_usedCache'] = null, this['_elasticEn' + 'abled'] = !0x1, this['_preLen'] = 0x0, _0x4dc4ab['__super']['call'](this), this['_cells'] = [], this['_offset'] = new _0x328408();
            }
            _0x49b6a8(_0x4dc4ab, 'laya.ui.Li' + 'st', _0x3ba746);
            var _0x191db7 = _0x4dc4ab['prototype'];
            return _0x591c88['imps'](_0x191db7, {
                'laya.ui.IRender': !0x0,
                'laya.ui.IItem': !0x0
            }), _0x191db7['destroy'] = function (_0x1ece4f) {
                void 0x0 === _0x1ece4f && (_0x1ece4f = !0x0), this['_content'] && this['_content']['destroy'](_0x1ece4f), this['_scrollBar'] && this['_scrollBar']['destroy'](_0x1ece4f), laya['ui']['UIComponen' + 't']['prototype']['destroy']['call'](this, _0x1ece4f), this['_content'] = null, this['_scrollBar'] = null, this['_itemRende' + 'r'] = null, this['_cells'] = null, this['_array'] = null, this['selectHand' + 'ler'] = this['renderHand' + 'ler'] = this['mouseHandl' + 'er'] = null;
            }, _0x191db7['createChil' + 'dren'] = function () {
                this['addChild'](this['_content'] = new _0x51befc());
            }, _0x191db7['onScrollSt' + 'art'] = function () {
                this['_usedCache'] || (this['_usedCache'] = _0x591c88['superGet'](_0x51befc, this, 'cacheAs')), _0x591c88['superSet'](_0x51befc, this, 'cacheAs', 'none'), this['_scrollBar']['once']('end', this, this['onScrollEn' + 'd']);
            }, _0x191db7['onScrollEn' + 'd'] = function () {
                _0x591c88['superSet'](_0x51befc, this, 'cacheAs', this['_usedCache']);
            }, _0x191db7['_removePre' + 'ScrollBar'] = function () {
                var _0x4c6757 = this['removeChil' + 'dByName']('scrollBar');
                _0x4c6757 && _0x4c6757['destroy'](!0x0);
            }, _0x191db7['changeCell' + 's'] = function () {
                if (this['_cellChang' + 'ed'] = !0x1, this['_itemRende' + 'r']) {
                    this['scrollBar'] = this['getChildBy' + 'Name']('scrollBar');
                    var _0x2b3938 = this['_getOneCel' + 'l'](), _0x45ee7b = _0x2b3938['width'] + this['_spaceX'] || 0x1, _0x5cd94d = _0x2b3938['height'] + this['_spaceY'] || 0x1;
                    this['_width'] > 0x0 && (this['_repeatX2'] = this['_isVertica' + 'l'] ? Math['round'](this['_width'] / _0x45ee7b) : Math['ceil'](this['_width'] / _0x45ee7b)), this['_height'] > 0x0 && (this['_repeatY2'] = this['_isVertica' + 'l'] ? Math['ceil'](this['_height'] / _0x5cd94d) : Math['round'](this['_height'] / _0x5cd94d));
                    var _0x36e0d1 = this['_width'] ? this['_width'] : _0x45ee7b * this['repeatX'] - this['_spaceX'], _0x2cea45 = this['_height'] ? this['_height'] : _0x5cd94d * this['repeatY'] - this['_spaceY'];
                    this['_cellSize'] = this['_isVertica' + 'l'] ? _0x5cd94d : _0x45ee7b, this['_cellOffse' + 't'] = this['_isVertica' + 'l'] ? _0x5cd94d * Math['max'](this['_repeatY2'], this['_repeatY']) - _0x2cea45 - this['_spaceY'] : _0x45ee7b * Math['max'](this['_repeatX2'], this['_repeatX']) - _0x36e0d1 - this['_spaceX'], this['_isVertica' + 'l'] && this['vScrollBar' + 'Skin'] ? this['_scrollBar']['height'] = _0x2cea45 : !this['_isVertica' + 'l'] && this['hScrollBar' + 'Skin'] && (this['_scrollBar']['width'] = _0x36e0d1), this['setContent' + 'Size'](_0x36e0d1, _0x2cea45);
                    var _0x8c1b5a = this['_isVertica' + 'l'] ? this['repeatX'] : this['repeatY'], _0x358a56 = (this['_isVertica' + 'l'] ? this['repeatY'] : this['repeatX']) + (this['_scrollBar'] ? 0x1 : 0x0);
                    this['_createIte' + 'ms'](0x0, _0x8c1b5a, _0x358a56), this['_createdLi' + 'ne'] = _0x358a56, this['_array'] && (this['array'] = this['_array'], this['runCallLat' + 'er'](this['renderItem' + 's']));
                }
            }, _0x191db7['_getOneCel' + 'l'] = function () {
                if (0x0 === this['_cells']['length']) {
                    var _0x173479 = this['createItem']();
                    if (this['_offset']['setTo'](_0x173479['_x'], _0x173479['_y']), this['cacheConte' + 'nt'])
                        return _0x173479;
                    this['_cells']['push'](_0x173479);
                }
                return this['_cells'][0x0];
            }, _0x191db7['_createIte' + 'ms'] = function (_0xfe59a1, _0x5004c5, _0x4e141f) {
                var _0x13ce16 = this['_content'], _0x6c6f53 = this['_getOneCel' + 'l'](), _0x1229e9 = _0x6c6f53['width'] + this['_spaceX'], _0x3f9004 = _0x6c6f53['height'] + this['_spaceY'];
                if (this['cacheConte' + 'nt']) {
                    var _0xf9b1f9 = new _0x51befc();
                    _0xf9b1f9['cacheAs'] = 'normal', _0xf9b1f9['pos']((this['_isVertica' + 'l'] ? 0x0 : _0xfe59a1) * _0x1229e9, (this['_isVertica' + 'l'] ? _0xfe59a1 : 0x0) * _0x3f9004), this['_content']['addChild'](_0xf9b1f9), _0x13ce16 = _0xf9b1f9;
                } else {
                    for (var _0x48a63d = [], _0x29cd67 = this['_cells']['length'] - 0x1; _0x29cd67 > -0x1; _0x29cd67--) {
                        var _0x418c0f = this['_cells'][_0x29cd67];
                        _0x418c0f['removeSelf'](), _0x48a63d['push'](_0x418c0f);
                    }
                    this['_cells']['length'] = 0x0;
                }
                for (var _0x32a02e = _0xfe59a1; _0x4e141f > _0x32a02e; _0x32a02e++)
                    for (var _0x4391f2 = 0x0; _0x5004c5 > _0x4391f2; _0x4391f2++)
                        _0x6c6f53 = _0x48a63d && _0x48a63d['length'] ? _0x48a63d['pop']() : this['createItem'](), _0x6c6f53['x'] = (this['_isVertica' + 'l'] ? _0x4391f2 : _0x32a02e) * _0x1229e9 - _0x13ce16['_x'], _0x6c6f53['y'] = (this['_isVertica' + 'l'] ? _0x32a02e : _0x4391f2) * _0x3f9004 - _0x13ce16['_y'], _0x6c6f53['name'] = 'item' + (_0x32a02e * _0x5004c5 + _0x4391f2), _0x13ce16['addChild'](_0x6c6f53), this['addCell'](_0x6c6f53);
            }, _0x191db7['createItem'] = function () {
                var _0x5091ec = [];
                if ('function' == typeof this['_itemRende' + 'r'])
                    var _0x56311e = new this['_itemRende' + 'r']();
                else
                    _0x56311e = _0x1bd9ad['createComp'](this['_itemRende' + 'r'], null, null, _0x5091ec);
                if (0x0 == _0x5091ec['length'] && _0x56311e['_watchMap']) {
                    var _0x1569ff = _0x56311e['_watchMap'];
                    for (var _0x318472 in _0x1569ff)
                        for (var _0x4dfe5c = _0x1569ff[_0x318472], _0x1fa818 = 0x0; _0x1fa818 < _0x4dfe5c['length']; _0x1fa818++) {
                            var _0x1cc690 = _0x4dfe5c[_0x1fa818];
                            _0x5091ec['push'](_0x1cc690['comp'], _0x1cc690['prop'], _0x1cc690['value']);
                        }
                }
                return _0x5091ec['length'] && (_0x56311e['_$bindData'] = _0x5091ec), _0x56311e;
            }, _0x191db7['addCell'] = function (_0x2c5c72) {
                _0x2c5c72['on']('click', this, this['onCellMous' + 'e']), _0x2c5c72['on']('rightclick', this, this['onCellMous' + 'e']), _0x2c5c72['on']('mouseover', this, this['onCellMous' + 'e']), _0x2c5c72['on']('mouseout', this, this['onCellMous' + 'e']), _0x2c5c72['on']('mousedown', this, this['onCellMous' + 'e']), _0x2c5c72['on']('mouseup', this, this['onCellMous' + 'e']), this['_cells']['push'](_0x2c5c72);
            }, _0x191db7['_afterInit' + 'ed'] = function () {
                this['initItems']();
            }, _0x191db7['initItems'] = function () {
                if (!this['_itemRende' + 'r'] && null != this['getChildBy' + 'Name']('item0')) {
                    this['repeatX'] = 0x1;
                    var _0x36ef49 = 0x0;
                    _0x36ef49 = 0x0;
                    for (var _0x234417 = 0x0; 0x2710 > _0x234417; _0x234417++) {
                        var _0x129682 = this['getChildBy' + 'Name']('item' + _0x234417);
                        {
                            if (!_0x129682)
                                break;
                            this['addCell'](_0x129682), _0x36ef49++;
                        }
                    }
                    this['repeatY'] = _0x36ef49;
                }
            }, _0x191db7['setContent' + 'Size'] = function (_0x1063f1, _0x35c1e3) {
                this['_content']['width'] = _0x1063f1, this['_content']['height'] = _0x35c1e3, (this['_scrollBar'] || 0x0 != this['_offset']['x'] || 0x0 != this['_offset']['y']) && (this['_content']['_style']['scrollRect'] || (this['_content']['scrollRect'] = _0x2007b3['create']()), this['_content']['_style']['scrollRect']['setTo'](-this['_offset']['x'], -this['_offset']['y'], _0x1063f1, _0x35c1e3), this['_content']['scrollRect'] = this['_content']['scrollRect']), this['event']('resize');
            }, _0x191db7['onCellMous' + 'e'] = function (_0x2b7210) {
                'mousedown' === _0x2b7210['type'] && (this['_isMoved'] = !0x1);
                var _0x51a6c4 = _0x2b7210['currentTar' + 'get'], _0x3d3981 = this['_startInde' + 'x'] + this['_cells']['indexOf'](_0x51a6c4);
                0x0 > _0x3d3981 || ('click' === _0x2b7210['type'] || 'rightclick' === _0x2b7210['type'] ? this['selectEnab' + 'le'] && !this['_isMoved'] ? this['selectedIn' + 'dex'] = _0x3d3981 : this['changeCell' + 'State'](_0x51a6c4, !0x0, 0x0) : 'mouseover' !== _0x2b7210['type'] && 'mouseout' !== _0x2b7210['type'] || this['_selectedI' + 'ndex'] === _0x3d3981 || this['changeCell' + 'State'](_0x51a6c4, 'mouseover' === _0x2b7210['type'], 0x0), this['mouseHandl' + 'er'] && this['mouseHandl' + 'er']['runWith']([
                    _0x2b7210,
                    _0x3d3981
                ]));
            }, _0x191db7['changeCell' + 'State'] = function (_0x48912d, _0x4ba85c, _0x3535d9) {
                var _0x5aa2db = _0x48912d['getChildBy' + 'Name']('selectBox');
                _0x5aa2db && (this['selectEnab' + 'le'] = !0x0, _0x5aa2db['visible'] = _0x4ba85c, _0x5aa2db['index'] = _0x3535d9);
            }, _0x191db7['_sizeChang' + 'ed'] = function () {
                laya['ui']['UIComponen' + 't']['prototype']['_sizeChang' + 'ed']['call'](this), this['setContent' + 'Size'](this['width'], this['height']), this['_scrollBar'] && this['callLater'](this['onScrollBa' + 'rChange']);
            }, _0x191db7['onScrollBa' + 'rChange'] = function (_0x19799e) {
                this['runCallLat' + 'er'](this['changeCell' + 's']);
                var _0x5b2cb7 = this['_scrollBar']['value'], _0x286226 = this['_isVertica' + 'l'] ? this['repeatX'] : this['repeatY'], _0x213375 = this['_isVertica' + 'l'] ? this['repeatY'] : this['repeatX'], _0x4f61f9 = Math['floor'](_0x5b2cb7 / this['_cellSize']);
                if (this['cacheConte' + 'nt'])
                    _0x493558 = _0x213375 + 0x1, this['_createdLi' + 'ne'] - _0x4f61f9 < _0x493558 && (this['_createIte' + 'ms'](this['_createdLi' + 'ne'], _0x286226, this['_createdLi' + 'ne'] + _0x493558), this['renderItem' + 's'](this['_createdLi' + 'ne'] * _0x286226, 0x0), this['_createdLi' + 'ne'] += _0x493558);
                else {
                    var _0x1725b3 = _0x4f61f9 * _0x286226, _0x493558 = 0x0;
                    if (_0x1725b3 > this['_startInde' + 'x']) {
                        _0x493558 = _0x1725b3 - this['_startInde' + 'x'];
                        var _0x5b4aa0 = !0x0, _0x9fe790 = this['_startInde' + 'x'] + _0x286226 * (_0x213375 + 0x1);
                        this['_isMoved'] = !0x0;
                    } else
                        _0x1725b3 < this['_startInde' + 'x'] && (_0x493558 = this['_startInde' + 'x'] - _0x1725b3, _0x5b4aa0 = !0x1, _0x9fe790 = this['_startInde' + 'x'] - 0x1, this['_isMoved'] = !0x0);
                    for (var _0x329a3a = 0x0; _0x493558 > _0x329a3a; _0x329a3a++) {
                        if (_0x5b4aa0) {
                            var _0x1558b7 = this['_cells']['shift']();
                            this['_cells'][this['_cells']['length']] = _0x1558b7;
                            var _0x658377 = _0x9fe790 + _0x329a3a;
                        } else
                            _0x1558b7 = this['_cells']['pop'](), this['_cells']['unshift'](_0x1558b7), _0x658377 = _0x9fe790 - _0x329a3a;
                        var _0x36c689 = Math['floor'](_0x658377 / _0x286226) * this['_cellSize'];
                        this['_isVertica' + 'l'] ? _0x1558b7['y'] = _0x36c689 : _0x1558b7['x'] = _0x36c689, this['renderItem'](_0x1558b7, _0x658377);
                    }
                    this['_startInde' + 'x'] = _0x1725b3, this['changeSele' + 'ctStatus']();
                }
                var _0x560247 = this['_content']['_style']['scrollRect'];
                this['_isVertica' + 'l'] ? (_0x560247['y'] = _0x5b2cb7 - this['_offset']['y'], _0x560247['x'] = -this['_offset']['x']) : (_0x560247['y'] = -this['_offset']['y'], _0x560247['x'] = _0x5b2cb7 - this['_offset']['x']), this['_content']['scrollRect'] = _0x560247;
            }, _0x191db7['posCell'] = function (_0x3cbe83, _0x4f508b) {
                if (this['_scrollBar']) {
                    var _0x447a60 = this['_isVertica' + 'l'] ? this['repeatX'] : this['repeatY'], _0x43c839 = (this['_isVertica' + 'l'] ? this['repeatY'] : this['repeatX'], Math['floor'](_0x4f508b / _0x447a60) * this['_cellSize']);
                    this['_isVertica' + 'l'] ? _0x3cbe83['_y'] = _0x43c839 : _0x3cbe83['x'] = _0x43c839;
                }
            }, _0x191db7['changeSele' + 'ctStatus'] = function () {
                for (var _0x4bac2c = 0x0, _0x38b07d = this['_cells']['length']; _0x38b07d > _0x4bac2c; _0x4bac2c++)
                    this['changeCell' + 'State'](this['_cells'][_0x4bac2c], this['_selectedI' + 'ndex'] === this['_startInde' + 'x'] + _0x4bac2c, 0x1);
            }, _0x191db7['renderItem' + 's'] = function (_0x152c0a, _0x56d050) {
                void 0x0 === _0x152c0a && (_0x152c0a = 0x0), void 0x0 === _0x56d050 && (_0x56d050 = 0x0);
                for (var _0x5e8f89 = _0x152c0a, _0x4022c2 = _0x56d050 || this['_cells']['length']; _0x4022c2 > _0x5e8f89; _0x5e8f89++)
                    this['renderItem'](this['_cells'][_0x5e8f89], this['_startInde' + 'x'] + _0x5e8f89);
                this['changeSele' + 'ctStatus']();
            }, _0x191db7['renderItem'] = function (_0x3a5c24, _0x31734a) {
                this['_array'] && _0x31734a >= 0x0 && _0x31734a < this['_array']['length'] ? (_0x3a5c24['visible'] = !0x0, _0x3a5c24['_$bindData'] ? (_0x3a5c24['_dataSourc' + 'e'] = this['_array'][_0x31734a], this['_bindData'](_0x3a5c24, this['_array'][_0x31734a])) : _0x3a5c24['dataSource'] = this['_array'][_0x31734a], this['cacheConte' + 'nt'] || this['posCell'](_0x3a5c24, _0x31734a), this['hasListene' + 'r']('render') && this['event']('render', [
                    _0x3a5c24,
                    _0x31734a
                ]), this['renderHand' + 'ler'] && this['renderHand' + 'ler']['runWith']([
                    _0x3a5c24,
                    _0x31734a
                ])) : (_0x3a5c24['visible'] = !0x1, _0x3a5c24['dataSource'] = null);
            }, _0x191db7['_bindData'] = function (_0x54636a, _0x442de8) {
                for (var _0x4473d9 = _0x54636a['_$bindData'], _0x2bcde8 = 0x0, _0x452af9 = _0x4473d9['length']; _0x452af9 > _0x2bcde8; _0x2bcde8++) {
                    var _0x4fce33 = _0x4473d9[_0x2bcde8++], _0x5bb4b9 = _0x4473d9[_0x2bcde8++], _0x44c3b5 = _0x4473d9[_0x2bcde8], _0x1943aa = _0x250d08['getBindFun'](_0x44c3b5);
                    _0x4fce33[_0x5bb4b9] = _0x1943aa['call'](this, _0x442de8);
                }
            }, _0x191db7['updateArra' + 'y'] = function (_0x345e4f) {
                this['_array'] = _0x345e4f;
                var _0x5cb383 = 0x0;
                if (this['_array'] && (_0x5cb383 = this['_preLen'] - this['_startInde' + 'x'], _0x5cb383 >= 0x0 && this['renderItem' + 's'](_0x5cb383), this['_preLen'] = this['_array']['length']), this['_scrollBar']) {
                    var _0x44d3e7 = _0x345e4f['length'], _0x2764cd = this['_isVertica' + 'l'] ? this['repeatX'] : this['repeatY'], _0x45b503 = this['_isVertica' + 'l'] ? this['repeatY'] : this['repeatX'], _0x1a1383 = Math['ceil'](_0x44d3e7 / _0x2764cd);
                    _0x1a1383 >= _0x45b503 && (this['_scrollBar']['thumbPerce' + 'nt'] = _0x45b503 / _0x1a1383, this['_scrollBar']['slider']['_max'] = (_0x1a1383 - _0x45b503) * this['_cellSize'] + this['_cellOffse' + 't']);
                }
            }, _0x191db7['refresh'] = function () {
                this['array'] = this['_array'];
            }, _0x191db7['getItem'] = function (_0x406adc) {
                return _0x406adc > -0x1 && _0x406adc < this['_array']['length'] ? this['_array'][_0x406adc] : null;
            }, _0x191db7['changeItem'] = function (_0x178dec, _0x318563) {
                _0x178dec > -0x1 && _0x178dec < this['_array']['length'] && (this['_array'][_0x178dec] = _0x318563, _0x178dec >= this['_startInde' + 'x'] && _0x178dec < this['_startInde' + 'x'] + this['_cells']['length'] && this['renderItem'](this['getCell'](_0x178dec), _0x178dec));
            }, _0x191db7['setItem'] = function (_0x594ffe, _0x7b594) {
                this['changeItem'](_0x594ffe, _0x7b594);
            }, _0x191db7['addItem'] = function (_0x5ca73f) {
                this['_array']['push'](_0x5ca73f), this['array'] = this['_array'];
            }, _0x191db7['addItemAt'] = function (_0x2e1ac2, _0x4f62ef) {
                this['_array']['splice'](_0x4f62ef, 0x0, _0x2e1ac2), this['array'] = this['_array'];
            }, _0x191db7['deleteItem'] = function (_0x40ad11) {
                this['_array']['splice'](_0x40ad11, 0x1), this['array'] = this['_array'];
            }, _0x191db7['getCell'] = function (_0x126cf7) {
                return this['runCallLat' + 'er'](this['changeCell' + 's']), _0x126cf7 > -0x1 && this['_cells'] ? this['_cells'][(_0x126cf7 - this['_startInde' + 'x']) % this['_cells']['length']] : null;
            }, _0x191db7['scrollTo'] = function (_0x4ae529) {
                if (this['_scrollBar']) {
                    var _0x553122 = this['_isVertica' + 'l'] ? this['repeatX'] : this['repeatY'];
                    this['_scrollBar']['value'] = Math['floor'](_0x4ae529 / _0x553122) * this['_cellSize'];
                } else
                    this['startIndex'] = _0x4ae529;
            }, _0x191db7['tweenTo'] = function (_0x4aecb3, _0x10b20b, _0x4ad2e4) {
                if (void 0x0 === _0x10b20b && (_0x10b20b = 0xc8), this['_scrollBar']) {
                    this['_scrollBar']['stopScroll']();
                    var _0x48b1c9 = this['_isVertica' + 'l'] ? this['repeatX'] : this['repeatY'];
                    _0x564173['to'](this['_scrollBar'], { 'value': Math['floor'](_0x4aecb3 / _0x48b1c9) * this['_cellSize'] }, _0x10b20b, null, _0x4ad2e4, 0x0, !0x0);
                } else
                    this['startIndex'] = _0x4aecb3, _0x4ad2e4 && _0x4ad2e4['run']();
            }, _0x191db7['_setCellCh' + 'anged'] = function () {
                this['_cellChang' + 'ed'] || (this['_cellChang' + 'ed'] = !0x0, this['callLater'](this['changeCell' + 's']));
            }, _0x191db7['commitMeas' + 'ure'] = function () {
                this['runCallLat' + 'er'](this['changeCell' + 's']);
            }, _0x3e8dc5(0x0, _0x191db7, 'cacheAs', _0x3ba746['prototype']['_$get_cach' + 'eAs'], function (_0x57213c) {
                _0x591c88['superSet'](_0x51befc, this, 'cacheAs', _0x57213c), this['_scrollBar'] && (this['_usedCache'] = null, 'none' !== _0x57213c ? this['_scrollBar']['on']('start', this, this['onScrollSt' + 'art']) : this['_scrollBar']['off']('start', this, this['onScrollSt' + 'art']));
            }), _0x3e8dc5(0x0, _0x191db7, 'content', function () {
                return this['_content'];
            }), _0x3e8dc5(0x0, _0x191db7, 'height', _0x3ba746['prototype']['_$get_heig' + 'ht'], function (_0x5125ac) {
                _0x5125ac != this['_height'] && (_0x591c88['superSet'](_0x51befc, this, 'height', _0x5125ac), this['_setCellCh' + 'anged']());
            }), _0x3e8dc5(0x0, _0x191db7, 'itemRender', function () {
                return this['_itemRende' + 'r'];
            }, function (_0x41f79e) {
                if (this['_itemRende' + 'r'] != _0x41f79e) {
                    this['_itemRende' + 'r'] = _0x41f79e;
                    for (var _0x2f6e96 = this['_cells']['length'] - 0x1; _0x2f6e96 > -0x1; _0x2f6e96--)
                        this['_cells'][_0x2f6e96]['destroy']();
                    this['_cells']['length'] = 0x0, this['_setCellCh' + 'anged']();
                }
            }), _0x3e8dc5(0x0, _0x191db7, 'vScrollBar' + 'Skin', function () {
                return this['_scrollBar'] ? this['_scrollBar']['skin'] : null;
            }, function (_0x102c3b) {
                this['_removePre' + 'ScrollBar']();
                var _0xf1d0c9 = new _0x168dec();
                _0xf1d0c9['name'] = 'scrollBar', _0xf1d0c9['right'] = 0x0, _0xf1d0c9['skin'] = _0x102c3b, _0xf1d0c9['elasticDis' + 'tance'] = this['_elasticEn' + 'abled'] ? 0xc8 : 0x0, this['scrollBar'] = _0xf1d0c9, this['addChild'](_0xf1d0c9), this['_setCellCh' + 'anged']();
            }), _0x3e8dc5(0x0, _0x191db7, 'page', function () {
                return this['_page'];
            }, function (_0x34d7b8) {
                this['_page'] = _0x34d7b8, this['_array'] && (this['_page'] = _0x34d7b8 > 0x0 ? _0x34d7b8 : 0x0, this['_page'] = this['_page'] < this['totalPage'] ? this['_page'] : this['totalPage'] - 0x1, this['startIndex'] = this['_page'] * this['repeatX'] * this['repeatY']);
            }), _0x3e8dc5(0x0, _0x191db7, 'hScrollBar' + 'Skin', function () {
                return this['_scrollBar'] ? this['_scrollBar']['skin'] : null;
            }, function (_0x460e7b) {
                this['_removePre' + 'ScrollBar']();
                var _0x52a272 = new _0x41ed7e();
                _0x52a272['name'] = 'scrollBar', _0x52a272['bottom'] = 0x0, _0x52a272['skin'] = _0x460e7b, _0x52a272['elasticDis' + 'tance'] = this['_elasticEn' + 'abled'] ? 0xc8 : 0x0, this['scrollBar'] = _0x52a272, this['addChild'](_0x52a272), this['_setCellCh' + 'anged']();
            }), _0x3e8dc5(0x0, _0x191db7, 'repeatX', function () {
                return this['_repeatX'] > 0x0 ? this['_repeatX'] : this['_repeatX2'] > 0x0 ? this['_repeatX2'] : 0x1;
            }, function (_0x81792c) {
                this['_repeatX'] = _0x81792c, this['_setCellCh' + 'anged']();
            }), _0x3e8dc5(0x0, _0x191db7, 'scrollBar', function () {
                return this['_scrollBar'];
            }, function (_0x120cfa) {
                this['_scrollBar'] != _0x120cfa && (this['_scrollBar'] = _0x120cfa, _0x120cfa && (this['_isVertica' + 'l'] = this['_scrollBar']['isVertical'], this['addChild'](this['_scrollBar']), this['_scrollBar']['on']('change', this, this['onScrollBa' + 'rChange'])));
            }), _0x3e8dc5(0x0, _0x191db7, 'width', _0x3ba746['prototype']['_$get_widt' + 'h'], function (_0x917c0d) {
                _0x917c0d != this['_width'] && (_0x591c88['superSet'](_0x51befc, this, 'width', _0x917c0d), this['_setCellCh' + 'anged']());
            }), _0x3e8dc5(0x0, _0x191db7, 'repeatY', function () {
                return this['_repeatY'] > 0x0 ? this['_repeatY'] : this['_repeatY2'] > 0x0 ? this['_repeatY2'] : 0x1;
            }, function (_0x2c7c12) {
                this['_repeatY'] = _0x2c7c12, this['_setCellCh' + 'anged']();
            }), _0x3e8dc5(0x0, _0x191db7, 'spaceX', function () {
                return this['_spaceX'];
            }, function (_0x520204) {
                this['_spaceX'] = _0x520204, this['_setCellCh' + 'anged']();
            }), _0x3e8dc5(0x0, _0x191db7, 'spaceY', function () {
                return this['_spaceY'];
            }, function (_0x308c39) {
                this['_spaceY'] = _0x308c39, this['_setCellCh' + 'anged']();
            }), _0x3e8dc5(0x0, _0x191db7, 'selectedIn' + 'dex', function () {
                return this['_selectedI' + 'ndex'];
            }, function (_0x8317b6) {
                this['_selectedI' + 'ndex'] != _0x8317b6 && (this['_selectedI' + 'ndex'] = _0x8317b6, this['changeSele' + 'ctStatus'](), this['event']('change'), this['selectHand' + 'ler'] && this['selectHand' + 'ler']['runWith'](_0x8317b6), this['startIndex'] = this['_startInde' + 'x']);
            }), _0x3e8dc5(0x0, _0x191db7, 'selectedIt' + 'em', function () {
                return -0x1 != this['_selectedI' + 'ndex'] ? this['_array'][this['_selectedI' + 'ndex']] : null;
            }, function (_0x102a6f) {
                this['selectedIn' + 'dex'] = this['_array']['indexOf'](_0x102a6f);
            }), _0x3e8dc5(0x0, _0x191db7, 'length', function () {
                return this['_array'] ? this['_array']['length'] : 0x0;
            }), _0x3e8dc5(0x0, _0x191db7, 'selection', function () {
                return this['getCell'](this['_selectedI' + 'ndex']);
            }, function (_0x3a34d2) {
                this['selectedIn' + 'dex'] = this['_startInde' + 'x'] + this['_cells']['indexOf'](_0x3a34d2);
            }), _0x3e8dc5(0x0, _0x191db7, 'startIndex', function () {
                return this['_startInde' + 'x'];
            }, function (_0x2cecd5) {
                this['_startInde' + 'x'] = _0x2cecd5 > 0x0 ? _0x2cecd5 : 0x0, this['callLater'](this['renderItem' + 's']);
            }), _0x3e8dc5(0x0, _0x191db7, 'array', function () {
                return this['_array'];
            }, function (_0x5e62b7) {
                this['runCallLat' + 'er'](this['changeCell' + 's']), this['_array'] = _0x5e62b7 || [], this['_preLen'] = this['_array']['length'];
                var _0x311684 = this['_array']['length'];
                if (this['totalPage'] = Math['ceil'](_0x311684 / (this['repeatX'] * this['repeatY'])), this['_selectedI' + 'ndex'] = this['_selectedI' + 'ndex'] < _0x311684 ? this['_selectedI' + 'ndex'] : _0x311684 - 0x1, this['startIndex'] = this['_startInde' + 'x'], this['_scrollBar']) {
                    this['_scrollBar']['stopScroll']();
                    var _0x2338b0 = this['_isVertica' + 'l'] ? this['repeatX'] : this['repeatY'], _0x12d6e2 = this['_isVertica' + 'l'] ? this['repeatY'] : this['repeatX'], _0x5e0940 = Math['ceil'](_0x311684 / _0x2338b0), _0x41ab86 = this['_cellOffse' + 't'] > 0x0 ? this['totalPage'] + 0x1 : this['totalPage'];
                    _0x41ab86 > 0x1 && _0x5e0940 >= _0x12d6e2 ? (this['_scrollBar']['scrollSize'] = this['_cellSize'], this['_scrollBar']['thumbPerce' + 'nt'] = _0x12d6e2 / _0x5e0940, this['_scrollBar']['setScroll'](0x0, (_0x5e0940 - _0x12d6e2) * this['_cellSize'] + this['_cellOffse' + 't'], this['_scrollBar']['value']), this['_scrollBar']['target'] = this['_content']) : (this['_scrollBar']['setScroll'](0x0, 0x0, 0x0), this['_scrollBar']['target'] = this['_content']);
                }
            }), _0x3e8dc5(0x0, _0x191db7, 'dataSource', _0x3ba746['prototype']['_$get_data' + 'Source'], function (_0x2a52f3) {
                this['_dataSourc' + 'e'] = _0x2a52f3, 'number' == typeof _0x2a52f3 && Math['floor'](_0x2a52f3) == _0x2a52f3 || 'string' == typeof _0x2a52f3 ? this['selectedIn' + 'dex'] = parseInt(_0x2a52f3) : _0x2a52f3 instanceof Array ? this['array'] = _0x2a52f3 : _0x591c88['superSet'](_0x51befc, this, 'dataSource', _0x2a52f3);
            }), _0x3e8dc5(0x0, _0x191db7, 'cells', function () {
                return this['runCallLat' + 'er'](this['changeCell' + 's']), this['_cells'];
            }), _0x3e8dc5(0x0, _0x191db7, 'elasticEna' + 'bled', function () {
                return this['_elasticEn' + 'abled'];
            }, function (_0x329510) {
                this['_elasticEn' + 'abled'] = _0x329510, this['_scrollBar'] && (this['_scrollBar']['elasticDis' + 'tance'] = _0x329510 ? 0xc8 : 0x0);
            }), _0x4dc4ab;
        }(_0x51befc), _0x20ab5c = function (_0x37e813) {
            function _0xd7c48e(_0x2ea72e) {
                this['_bg'] = null, this['_skin'] = null, _0xd7c48e['__super']['call'](this), void 0x0 === _0x2ea72e && (_0x2ea72e = ''), this['text'] = _0x2ea72e, this['skin'] = this['skin'];
            }
            _0x49b6a8(_0xd7c48e, 'laya.ui.Te' + 'xtInput', _0x37e813);
            var _0x15186f = _0xd7c48e['prototype'];
            return _0x15186f['preinitial' + 'ize'] = function () {
                this['mouseEnabl' + 'ed'] = !0x0;
            }, _0x15186f['destroy'] = function (_0x5abeb7) {
                void 0x0 === _0x5abeb7 && (_0x5abeb7 = !0x0), _0x37e813['prototype']['destroy']['call'](this, _0x5abeb7), this['_bg'] && this['_bg']['destroy'](), this['_bg'] = null;
            }, _0x15186f['createChil' + 'dren'] = function () {
                this['addChild'](this['_tf'] = new _0x1cabd8()), this['_tf']['padding'] = _0x48c7cc['inputLabel' + 'Padding'], this['_tf']['on']('input', this, this['_onInput']), this['_tf']['on']('enter', this, this['_onEnter']), this['_tf']['on']('blur', this, this['_onBlur']), this['_tf']['on']('focus', this, this['_onFocus']);
            }, _0x15186f['_onFocus'] = function () {
                this['event']('focus', this);
            }, _0x15186f['_onBlur'] = function () {
                this['event']('blur', this);
            }, _0x15186f['_onInput'] = function () {
                this['event']('input', this);
            }, _0x15186f['_onEnter'] = function () {
                this['event']('enter', this);
            }, _0x15186f['initialize'] = function () {
                this['width'] = 0x80, this['height'] = 0x16;
            }, _0x15186f['_skinLoade' + 'd'] = function () {
                this['_bg'] || (this['graphics'] = this['_bg'] = new _0x4b5e3d()), this['_bg']['source'] = _0x501cfb['getRes'](this['_skin']), this['_width'] && (this['_bg']['width'] = this['_width']), this['_height'] && (this['_bg']['height'] = this['_height']), this['_sizeChang' + 'ed'](), this['event']('loaded');
            }, _0x15186f['select'] = function () {
                this['_tf']['select']();
            }, _0x15186f['setSelecti' + 'on'] = function (_0x24b16c, _0x2b2fc3) {
                this['_tf']['setSelecti' + 'on'](_0x24b16c, _0x2b2fc3);
            }, _0x3e8dc5(0x0, _0x15186f, 'text', _0x37e813['prototype']['_$get_text'], function (_0xe47a03) {
                this['_tf']['text'] != _0xe47a03 && (_0xe47a03 += '', this['_tf']['text'] = _0xe47a03, this['event']('change'));
            }), _0x3e8dc5(0x0, _0x15186f, 'bg', function () {
                return this['_bg'];
            }, function (_0x22f1dd) {
                this['graphics'] = this['_bg'] = _0x22f1dd;
            }), _0x3e8dc5(0x0, _0x15186f, 'multiline', function () {
                return this['_tf']['multiline'];
            }, function (_0x3ba9ec) {
                this['_tf']['multiline'] = _0x3ba9ec;
            }), _0x3e8dc5(0x0, _0x15186f, 'skin', function () {
                return this['_skin'];
            }, function (_0x4965a9) {
                this['_skin'] != _0x4965a9 && (this['_skin'] = _0x4965a9, this['_skin'] && !_0x501cfb['getRes'](this['_skin']) ? _0x591c88['loader']['load'](this['_skin'], _0x7c2cf9['create'](this, this['_skinLoade' + 'd']), null, 'image', 0x1) : this['_skinLoade' + 'd']());
            }), _0x3e8dc5(0x0, _0x15186f, 'sizeGrid', function () {
                return this['_bg'] && this['_bg']['sizeGrid'] ? this['_bg']['sizeGrid']['join'](',') : null;
            }, function (_0x1510a7) {
                this['_bg'] || (this['graphics'] = this['_bg'] = new _0x4b5e3d()), this['_bg']['sizeGrid'] = _0x250d08['fillArray'](_0x48c7cc['defaultSiz' + 'eGrid'], _0x1510a7, Number);
            }), _0x3e8dc5(0x0, _0x15186f, 'width', _0x37e813['prototype']['_$get_widt' + 'h'], function (_0xb381e1) {
                _0x591c88['superSet'](_0xf56596, this, 'width', _0xb381e1), this['_bg'] && (this['_bg']['width'] = _0xb381e1);
            }), _0x3e8dc5(0x0, _0x15186f, 'height', _0x37e813['prototype']['_$get_heig' + 'ht'], function (_0x3bf14d) {
                _0x591c88['superSet'](_0xf56596, this, 'height', _0x3bf14d), this['_bg'] && (this['_bg']['height'] = _0x3bf14d);
            }), _0x3e8dc5(0x0, _0x15186f, 'editable', function () {
                return this['_tf']['editable'];
            }, function (_0x1fe9ad) {
                this['_tf']['editable'] = _0x1fe9ad;
            }), _0x3e8dc5(0x0, _0x15186f, 'restrict', function () {
                return this['_tf']['restrict'];
            }, function (_0x3b6b15) {
                this['_tf']['restrict'] = _0x3b6b15;
            }), _0x3e8dc5(0x0, _0x15186f, 'prompt', function () {
                return this['_tf']['prompt'];
            }, function (_0x310cee) {
                this['_tf']['prompt'] = _0x310cee;
            }), _0x3e8dc5(0x0, _0x15186f, 'promptColo' + 'r', function () {
                return this['_tf']['promptColo' + 'r'];
            }, function (_0x32f6da) {
                this['_tf']['promptColo' + 'r'] = _0x32f6da;
            }), _0x3e8dc5(0x0, _0x15186f, 'maxChars', function () {
                return this['_tf']['maxChars'];
            }, function (_0x349994) {
                this['_tf']['maxChars'] = _0x349994;
            }), _0x3e8dc5(0x0, _0x15186f, 'focus', function () {
                return this['_tf']['focus'];
            }, function (_0x3e9673) {
                this['_tf']['focus'] = _0x3e9673;
            }), _0x3e8dc5(0x0, _0x15186f, 'type', function () {
                return this['_tf']['type'];
            }, function (_0xd10a5f) {
                this['_tf']['type'] = _0xd10a5f;
            }), _0xd7c48e;
        }(_0xf56596), _0x501e24 = function (_0x3beb4d) {
            function _0x5b44c4() {
                this['_oldW'] = 0x0, this['_oldH'] = 0x0, _0x5b44c4['__super']['call'](this);
            }
            _0x49b6a8(_0x5b44c4, 'laya.ui.Sc' + 'aleBox', _0x3beb4d);
            var _0x53879a = _0x5b44c4['prototype'];
            return _0x53879a['onEnable'] = function () {
                _0x591c88['stage']['on']('resize', this, this['onResize']), this['onResize']();
            }, _0x53879a['onDisable'] = function () {
                _0x591c88['stage']['off']('resize', this, this['onResize']);
            }, _0x53879a['onResize'] = function () {
                if (this['width'] > 0x0 && this['height'] > 0x0) {
                    var _0x3571fc = Math['min'](_0x591c88['stage']['width'] / this['_oldW'], _0x591c88['stage']['height'] / this['_oldH']);
                    _0x591c88['superSet'](_0x51befc, this, 'width', _0x591c88['stage']['width']), _0x591c88['superSet'](_0x51befc, this, 'height', _0x591c88['stage']['height']), this['scale'](_0x3571fc, _0x3571fc);
                }
            }, _0x3e8dc5(0x0, _0x53879a, 'width', _0x3beb4d['prototype']['_$get_widt' + 'h'], function (_0x1dd664) {
                _0x591c88['superSet'](_0x51befc, this, 'width', _0x1dd664), this['_oldW'] = _0x1dd664;
            }), _0x3e8dc5(0x0, _0x53879a, 'height', _0x3beb4d['prototype']['_$get_heig' + 'ht'], function (_0x2a626e) {
                _0x591c88['superSet'](_0x51befc, this, 'height', _0x2a626e), this['_oldH'] = _0x2a626e;
            }), _0x5b44c4;
        }(_0x51befc), _0x41ed2d = function (_0xe3ca37) {
            function _0x3e649f(_0x3e92df, _0x211ec8) {
                this['_value'] = null, void 0x0 === _0x211ec8 && (_0x211ec8 = ''), _0x3e649f['__super']['call'](this, _0x3e92df, _0x211ec8);
            }
            _0x49b6a8(_0x3e649f, 'laya.ui.Ra' + 'dio', _0xe3ca37);
            var _0x5dae1e = _0x3e649f['prototype'];
            return _0x5dae1e['destroy'] = function (_0x330663) {
                void 0x0 === _0x330663 && (_0x330663 = !0x0), _0xe3ca37['prototype']['destroy']['call'](this, _0x330663), this['_value'] = null;
            }, _0x5dae1e['preinitial' + 'ize'] = function () {
                laya['ui']['UIComponen' + 't']['prototype']['preinitial' + 'ize']['call'](this), this['toggle'] = !0x1, this['_autoSize'] = !0x1;
            }, _0x5dae1e['initialize'] = function () {
                _0xe3ca37['prototype']['initialize']['call'](this), this['createText'](), this['_text']['align'] = 'left', this['_text']['valign'] = 'top', this['_text']['width'] = 0x0, this['on']('click', this, this['onClick']);
            }, _0x5dae1e['onClick'] = function (_0x44e9e4) {
                this['selected'] = !0x0;
            }, _0x3e8dc5(0x0, _0x5dae1e, 'value', function () {
                return null != this['_value'] ? this['_value'] : this['label'];
            }, function (_0x4f3715) {
                this['_value'] = _0x4f3715;
            }), _0x3e649f;
        }(_0x19d5d0), _0x3e68af = function (_0x458cbd) {
            function _0x347714(_0x3c834b, _0x2c8119) {
                this['_valueArr'] = null, this['_indexMap'] = null, this['_sheet'] = null, this['_direction'] = 'horizontal', this['_spaceX'] = 0x0, this['_spaceY'] = 0x0, this['_align'] = 'left', this['_wordsW'] = 0x0, this['_wordsH'] = 0x0, _0x347714['__super']['call'](this), _0x3c834b && (this['skin'] = _0x3c834b), _0x2c8119 && (this['sheet'] = _0x2c8119);
            }
            _0x49b6a8(_0x347714, 'laya.ui.Fo' + 'ntClip', _0x458cbd);
            var _0x59ec42 = _0x347714['prototype'];
            return _0x59ec42['createChil' + 'dren'] = function () {
                this['_bitmap'] = new _0x4b5e3d(), this['on']('loaded', this, this['_onClipLoa' + 'ded']);
            }, _0x59ec42['_onClipLoa' + 'ded'] = function () {
                this['callLater'](this['changeValu' + 'e']);
            }, _0x59ec42['changeValu' + 'e'] = function () {
                if (this['_sources'] && this['_valueArr']) {
                    this['graphics']['clear'](!0x0);
                    var _0x40ed07;
                    if (_0x40ed07 = this['_sources'][0x0]) {
                        var _0x1a1254 = 'horizontal' === this['_direction'];
                        _0x1a1254 ? (this['_wordsW'] = this['_valueArr']['length'] * (_0x40ed07['sourceWidt' + 'h'] + this['spaceX']), this['_wordsH'] = _0x40ed07['sourceHeig' + 'ht']) : (this['_wordsW'] = _0x40ed07['sourceWidt' + 'h'], this['_wordsH'] = (_0x40ed07['sourceHeig' + 'ht'] + this['spaceY']) * this['_valueArr']['length']);
                        var _0x5198f1 = 0x0;
                        if (this['_width'])
                            switch (this['_align']) {
                            case 'center':
                                _0x5198f1 = 0.5 * (this['_width'] - this['_wordsW']);
                                break;
                            case 'right':
                                _0x5198f1 = this['_width'] - this['_wordsW'];
                                break;
                            default:
                                _0x5198f1 = 0x0;
                            }
                        for (var _0x325a25 = 0x0, _0x506db6 = this['_valueArr']['length']; _0x506db6 > _0x325a25; _0x325a25++) {
                            var _0x21be57 = this['_indexMap'][this['_valueArr']['charAt'](_0x325a25)];
                            this['sources'][_0x21be57] && (_0x40ed07 = this['sources'][_0x21be57], _0x1a1254 ? this['graphics']['drawImage'](_0x40ed07, _0x5198f1 + _0x325a25 * (_0x40ed07['sourceWidt' + 'h'] + this['spaceX']), 0x0, _0x40ed07['sourceWidt' + 'h'], _0x40ed07['sourceHeig' + 'ht']) : this['graphics']['drawImage'](_0x40ed07, 0x0 + _0x5198f1, _0x325a25 * (_0x40ed07['sourceHeig' + 'ht'] + this['spaceY']), _0x40ed07['sourceWidt' + 'h'], _0x40ed07['sourceHeig' + 'ht']));
                        }
                        this['_width'] || (this['_widget']['resetLayou' + 'tX'](), this['callLater'](this['_sizeChang' + 'ed'])), this['_height'] || (this['_widget']['resetLayou' + 'tY'](), this['callLater'](this['_sizeChang' + 'ed']));
                    }
                }
            }, _0x59ec42['measureWid' + 'th'] = function () {
                return this['_wordsW'];
            }, _0x59ec42['measureHei' + 'ght'] = function () {
                return this['_wordsH'];
            }, _0x59ec42['destroy'] = function (_0x4f5d8c) {
                void 0x0 === _0x4f5d8c && (_0x4f5d8c = !0x0), this['_valueArr'] = null, this['_indexMap'] = null, this['graphics']['clear'](!0x0), this['removeSelf'](), this['off']('loaded', this, this['_onClipLoa' + 'ded']), _0x458cbd['prototype']['destroy']['call'](this, _0x4f5d8c);
            }, _0x3e8dc5(0x0, _0x59ec42, 'sheet', function () {
                return this['_sheet'];
            }, function (_0x3020f5) {
                _0x3020f5 += '', this['_sheet'] = _0x3020f5;
                var _0xc8898f = _0x3020f5['split']('\x20');
                this['_clipX'] = String(_0xc8898f[0x0])['length'], this['clipY'] = _0xc8898f['length'], this['_indexMap'] = {};
                for (var _0x2d44c8 = 0x0; _0x2d44c8 < this['_clipY']; _0x2d44c8++)
                    for (var _0x53532c = _0xc8898f[_0x2d44c8]['split'](''), _0x3c5e08 = 0x0, _0x2d368e = _0x53532c['length']; _0x2d368e > _0x3c5e08; _0x3c5e08++)
                        this['_indexMap'][_0x53532c[_0x3c5e08]] = _0x2d44c8 * this['_clipX'] + _0x3c5e08;
            }), _0x3e8dc5(0x0, _0x59ec42, 'height', _0x458cbd['prototype']['_$get_heig' + 'ht'], function (_0x1015b2) {
                _0x591c88['superSet'](_0x4b5e28, this, 'height', _0x1015b2), this['callLater'](this['changeValu' + 'e']);
            }), _0x3e8dc5(0x0, _0x59ec42, 'direction', function () {
                return this['_direction'];
            }, function (_0x4ef3e1) {
                this['_direction'] = _0x4ef3e1, this['callLater'](this['changeValu' + 'e']);
            }), _0x3e8dc5(0x0, _0x59ec42, 'value', function () {
                return this['_valueArr'] ? this['_valueArr'] : '';
            }, function (_0x262dbf) {
                _0x262dbf += '', this['_valueArr'] = _0x262dbf, this['callLater'](this['changeValu' + 'e']);
            }), _0x3e8dc5(0x0, _0x59ec42, 'width', _0x458cbd['prototype']['_$get_widt' + 'h'], function (_0x24813e) {
                _0x591c88['superSet'](_0x4b5e28, this, 'width', _0x24813e), this['callLater'](this['changeValu' + 'e']);
            }), _0x3e8dc5(0x0, _0x59ec42, 'spaceX', function () {
                return this['_spaceX'];
            }, function (_0x3abe9a) {
                this['_spaceX'] = _0x3abe9a, 'horizontal' === this['_direction'] && this['callLater'](this['changeValu' + 'e']);
            }), _0x3e8dc5(0x0, _0x59ec42, 'spaceY', function () {
                return this['_spaceY'];
            }, function (_0x50c813) {
                this['_spaceY'] = _0x50c813, 'horizontal' !== this['_direction'] && this['callLater'](this['changeValu' + 'e']);
            }), _0x3e8dc5(0x0, _0x59ec42, 'align', function () {
                return this['_align'];
            }, function (_0x37ed54) {
                this['_align'] = _0x37ed54, this['callLater'](this['changeValu' + 'e']);
            }), _0x347714;
        }(_0x4b5e28), _0x168dec = (function (_0x8188ae) {
            function _0x338e57(_0x1286b1) {
                this['advsListAr' + 'r'] = [], this['resUrl'] = 'https://un' + 'ioncdn.lay' + 'abox.com/c' + 'onfig/icon' + 'list.json', this['_data'] = [], this['_resquestT' + 'ime'] = 0x57e40, this['_appid'] = null, this['_playIndex'] = 0x0, this['_lunboTime'] = 0x1388, _0x338e57['__super']['call'](this), this['_http'] = new _0x530c06['window']['XMLHttpReq' + 'uest'](), this['skin'] = _0x1286b1, this['setLoadUrl'](), this['init'](), this['size'](0x78, 0x78);
            }
            _0x49b6a8(_0x338e57, 'laya.ui.Ad' + 'vImage', _0x8188ae);
            var _0x5e95bf = _0x338e57['prototype'];
            return _0x5e95bf['setLoadUrl'] = function () {
                _0x530c06['onLimixiu'] && (this['resUrl'] = 'https://ab' + 'c.layabox.' + 'com/public' + '/wyw/gconf' + 'ig.json');
            }, _0x5e95bf['init'] = function () {
                this['isSupportJ' + 'ump']() ? ((_0x530c06['onMiniGame'] || _0x530c06['onBDMiniGa' + 'me']) && _0x591c88['timer']['loop'](this['_resquestT' + 'ime'], this, this['onGetAdvsL' + 'istData']), this['onGetAdvsL' + 'istData'](), this['initEvent']()) : this['visible'] = !0x1;
            }, _0x5e95bf['initEvent'] = function () {
                this['on']('click', this, this['onAdvsImgC' + 'lick']);
            }, _0x5e95bf['onAdvsImgC' + 'lick'] = function () {
                var _0x47c75a = this['getCurrent' + 'AppidObj']();
                _0x47c75a && this['jumptoGame']();
            }, _0x5e95bf['revertAdvs' + 'Data'] = function () {
                if (this['advsListAr' + 'r'][this['_playIndex']]) {
                    if (this['visible'] = !0x0, _0x530c06['onLimixiu']) {
                        var _0x3fb251 = 'https://ab' + 'c.layabox.' + 'com/public' + '/icon/';
                        this['visible'] = !0x0;
                        var _0x39ee3d = this['advsListAr' + 'r'][this['_playIndex']];
                        _0x39ee3d && (_0x530c06['onLimixiu'] && GameStatusInfo['gameId'] == _0x39ee3d['gameid'] ? this['onLunbo']() : (this['skin'] = _0x3fb251 + _0x39ee3d['iconUrl'], this['size'](0x67, 0x7e)));
                    } else
                        this['skin'] = this['advsListAr' + 'r'][this['_playIndex']];
                }
            }, _0x5e95bf['isSupportJ' + 'ump'] = function () {
                if (_0x530c06['onMiniGame']) {
                    var _0x287707 = 'function' == typeof wx['navigateTo' + 'MiniProgra' + 'm'];
                    return _0x287707;
                }
                if (_0x530c06['onLimixiu']) {
                    if (BK['QQ']['skipGame'])
                        return !0x0;
                } else {
                    if (_0x530c06['onBDMiniGa' + 'me'])
                        return !0x0;
                }
                return !0x1;
            }, _0x5e95bf['jumptoGame'] = function () {
                var _0x166767 = this, _0x4c36d4 = this['advsListAr' + 'r'][this['_playIndex']], _0x1f4119 = parseInt(_0x4c36d4['gameid']), _0x533132 = _0x4c36d4['extendInfo'];
                _0x4c36d4['path'];
                if (_0x530c06['onLimixiu']) {
                    if (!_0x4c36d4['isLunBo'] && !_0x4c36d4['isLunBo']) {
                        var _0x2b7717 = _0x14bbc0['getJSON']('gameObj');
                        _0x2b7717 || (_0x2b7717 = {}), _0x2b7717[_0x4c36d4['gameid']] || (_0x2b7717[_0x4c36d4['gameid']] = {}), _0x2b7717[_0x4c36d4['gameid']] = { 'isclick': !0x0 }, _0x14bbc0['setJSON']('gameObj', _0x2b7717), this['advsListAr' + 'r']['splice'](this['_playIndex'], 0x1);
                    }
                    BK['QQ']['skipGame'](_0x1f4119, _0x533132), this['updateAdvs' + 'Info']();
                } else
                    _0x530c06['onMiniGame'] ? this['isSupportJ' + 'ump']() && wx['navigateTo' + 'MiniProgra' + 'm']({
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
                            console['log']('----------' + '---跳转接口调用成' + '功---------' + '-----'), _0x166767['updateAdvs' + 'Info']();
                        }['bind'](this)
                    }) : _0x530c06['onBDMiniGa' + 'me'] || (this['visible'] = !0x1);
            }, _0x5e95bf['updateAdvs' + 'Info'] = function () {
                this['visible'] = !0x1, this['onLunbo'](), _0x591c88['timer']['loop'](this['_lunboTime'], this, this['onLunbo']);
            }, _0x5e95bf['onLunbo'] = function () {
                this['_playIndex'] >= this['advsListAr' + 'r']['length'] - 0x1 ? this['_playIndex'] = 0x0 : this['_playIndex'] += 0x1, this['visible'] = !0x0, this['revertAdvs' + 'Data']();
            }, _0x5e95bf['getCurrent' + 'AppidObj'] = function () {
                return this['advsListAr' + 'r'][this['_playIndex']];
            }, _0x5e95bf['onGetAdvsL' + 'istData'] = function () {
                var _0x4222a7 = this, _0xac03ab = _0x338e57['randRange'](0x2710, 0xf4240), _0x30892f = this['resUrl'] + '?' + _0xac03ab;
                this['_http']['open']('get', _0x30892f, !0x0), this['_http']['setRequest' + 'Header']('Content-Ty' + 'pe', 'applicatio' + 'n/x-www-fo' + 'rm-urlenco' + 'ded'), this['_http']['responseTy' + 'pe'] = 'text', this['_http']['onerror'] = function (_0x5dc77a) {
                    _0x4222a7['_onError'](_0x5dc77a);
                }, this['_http']['onload'] = function (_0x45ce17) {
                    _0x4222a7['_onLoad'](_0x45ce17);
                }, this['_http']['send'](null);
            }, _0x5e95bf['_onError'] = function (_0x50c35a) {
                this['error']('Request\x20fa' + 'iled\x20Statu' + 's:' + this['_http']['status'] + '\x20text:' + this['_http']['statusText']);
            }, _0x5e95bf['_onLoad'] = function (_0x5cf2ef) {
                var _0x55a339 = this['_http'], _0x1c6cd1 = void 0x0 !== _0x55a339['status'] ? _0x55a339['status'] : 0xc8;
                0xc8 === _0x1c6cd1 || 0xcc === _0x1c6cd1 || 0x0 === _0x1c6cd1 ? this['complete']() : this['error']('[' + _0x55a339['status'] + ']' + _0x55a339['statusText'] + ':' + _0x55a339['responseUR' + 'L']);
            }, _0x5e95bf['error'] = function (_0xaffd29) {
                this['event']('error', _0xaffd29);
            }, _0x5e95bf['complete'] = function () {
                var _0x8dc8ed = !0x0;
                try {
                    this['_data'] = this['_http']['response'] || this['_http']['responseTe' + 'xt'], this['_data'] = JSON['parse'](this['_data']), _0x530c06['onLimixiu'] ? (this['advsListAr' + 'r'] = this['getAdvsQAr' + 'r'](this['_data']), this['advsListAr' + 'r']['length'] ? (this['updateAdvs' + 'Info'](), this['revertAdvs' + 'Data']()) : this['visible'] = !0x1) : (this['advsListAr' + 'r'] = this['_data']['list'], this['_appid'] = this['_data']['appid'], this['updateAdvs' + 'Info'](), this['revertAdvs' + 'Data']());
                } catch (_0x38faa6) {
                    _0x8dc8ed = !0x1, this['error'](_0x38faa6['message']);
                }
            }, _0x5e95bf['getAdvsQAr' + 'r'] = function (_0xe768f0) {
                var _0x2bf6c0 = [], _0x30ac3e = _0x14bbc0['getJSON']('gameObj');
                for (var _0x10bd06 in _0xe768f0) {
                    var _0x4402df = _0xe768f0[_0x10bd06];
                    _0x30ac3e && _0x30ac3e[_0x4402df['gameid']] && !_0x4402df['isQiangZhi'] || _0x2bf6c0['push'](_0x4402df);
                }
                return _0x2bf6c0;
            }, _0x5e95bf['clear'] = function () {
                var _0x1da723 = this['_http'];
                _0x1da723['onerror'] = _0x1da723['onabort'] = _0x1da723['onprogress'] = _0x1da723['onload'] = null;
            }, _0x5e95bf['destroy'] = function (_0x52deb2) {
                void 0x0 === _0x52deb2 && (_0x52deb2 = !0x0), _0x591c88['timer']['clear'](this, this['onLunbo']), _0x8188ae['prototype']['destroy']['call'](this, !0x0), this['clear'](), _0x591c88['timer']['clear'](this, this['onGetAdvsL' + 'istData']);
            }, _0x338e57['randRange'] = function (_0x411536, _0xfc213a) {
                return Math['floor'](Math['random']() * (_0xfc213a - _0x411536 + 0x1)) + _0x411536;
            }, _0x338e57;
        }(_0x43423b), function (_0x10d456) {
            function _0x338509() {
                _0x338509['__super']['call'](this);
            }
            return _0x49b6a8(_0x338509, 'laya.ui.VS' + 'crollBar', _0x10d456), _0x338509;
        }(_0x5cbd76)), _0x288359 = function (_0x264b97) {
            function _0x27caca() {
                _0x27caca['__super']['call'](this);
            }
            return _0x49b6a8(_0x27caca, 'laya.ui.VS' + 'lider', _0x264b97), _0x27caca;
        }(_0xd72b9d), _0x41ed7e = function (_0x24c0c6) {
            function _0x353e4d() {
                _0x353e4d['__super']['call'](this);
            }
            _0x49b6a8(_0x353e4d, 'laya.ui.HS' + 'crollBar', _0x24c0c6);
            var _0x4bc7b0 = _0x353e4d['prototype'];
            return _0x4bc7b0['initialize'] = function () {
                _0x24c0c6['prototype']['initialize']['call'](this), this['slider']['isVertical'] = !0x1;
            }, _0x353e4d;
        }(_0x5cbd76), _0x69a164 = function (_0x19f6d8) {
            function _0x367248(_0x45574f) {
                _0x367248['__super']['call'](this, _0x45574f), this['isVertical'] = !0x1;
            }
            return _0x49b6a8(_0x367248, 'laya.ui.HS' + 'lider', _0x19f6d8), _0x367248;
        }(_0xd72b9d), _0x146ff7 = function (_0x54e384) {
            function _0x5db57d() {
                _0x5db57d['__super']['call'](this);
            }
            _0x49b6a8(_0x5db57d, 'laya.ui.HB' + 'ox', _0x54e384);
            var _0x163824 = _0x5db57d['prototype'];
            return _0x163824['sortItem'] = function (_0x54ec32) {
                _0x54ec32 && _0x54ec32['sort'](function (_0x2cfc6b, _0x2fc3bb) {
                    return _0x2cfc6b['x'] - _0x2fc3bb['x'];
                });
            }, _0x163824['changeItem' + 's'] = function () {
                this['_itemChang' + 'ed'] = !0x1;
                for (var _0x1972a1 = [], _0x5b10cd = 0x0, _0x5704ee = 0x0, _0x300a19 = this['numChildre' + 'n']; _0x300a19 > _0x5704ee; _0x5704ee++) {
                    var _0x36d5c7 = this['getChildAt'](_0x5704ee);
                    _0x36d5c7 && (_0x1972a1['push'](_0x36d5c7), _0x5b10cd = this['_height'] ? this['_height'] : Math['max'](_0x5b10cd, _0x36d5c7['height'] * _0x36d5c7['scaleY']));
                }
                this['sortItem'](_0x1972a1);
                var _0x96ff2 = 0x0;
                for (_0x5704ee = 0x0, _0x300a19 = _0x1972a1['length']; _0x300a19 > _0x5704ee; _0x5704ee++)
                    _0x36d5c7 = _0x1972a1[_0x5704ee], _0x36d5c7['x'] = _0x96ff2, _0x96ff2 += _0x36d5c7['width'] * _0x36d5c7['scaleX'] + this['_space'], 'top' == this['_align'] ? _0x36d5c7['y'] = 0x0 : 'middle' == this['_align'] ? _0x36d5c7['y'] = 0.5 * (_0x5b10cd - _0x36d5c7['height'] * _0x36d5c7['scaleY']) : 'bottom' == this['_align'] && (_0x36d5c7['y'] = _0x5b10cd - _0x36d5c7['height'] * _0x36d5c7['scaleY']);
                this['_sizeChang' + 'ed']();
            }, _0x3e8dc5(0x0, _0x163824, 'height', _0x54e384['prototype']['_$get_heig' + 'ht'], function (_0x2c2346) {
                this['_height'] != _0x2c2346 && (_0x591c88['superSet'](_0x31fd4d, this, 'height', _0x2c2346), this['callLater'](this['changeItem' + 's']));
            }), _0x5db57d['NONE'] = 'none', _0x5db57d['TOP'] = 'top', _0x5db57d['MIDDLE'] = 'middle', _0x5db57d['BOTTOM'] = 'bottom', _0x5db57d;
        }(_0x31fd4d), _0xc0b764 = function (_0xc79360) {
            function _0x1278ad() {
                _0x1278ad['__super']['call'](this);
            }
            _0x49b6a8(_0x1278ad, 'laya.ui.Ra' + 'dioGroup', _0xc79360);
            var _0x57918e = _0x1278ad['prototype'];
            return _0x57918e['createItem'] = function (_0x373711, _0x3702b7) {
                return new _0x41ed2d(_0x373711, _0x3702b7);
            }, _0x1278ad;
        }(_0x12e8da), _0x538eb1 = function (_0x2b80f5) {
            function _0x141cef() {
                _0x141cef['__super']['call'](this);
            }
            _0x49b6a8(_0x141cef, 'laya.ui.VB' + 'ox', _0x2b80f5);
            var _0x41a79e = _0x141cef['prototype'];
            return _0x41a79e['changeItem' + 's'] = function () {
                this['_itemChang' + 'ed'] = !0x1;
                for (var _0x30a60c = [], _0x236b25 = 0x0, _0x1def74 = 0x0, _0x15758d = this['numChildre' + 'n']; _0x15758d > _0x1def74; _0x1def74++) {
                    var _0x4239b4 = this['getChildAt'](_0x1def74);
                    _0x4239b4 && (_0x30a60c['push'](_0x4239b4), _0x236b25 = this['_width'] ? this['_width'] : Math['max'](_0x236b25, _0x4239b4['width'] * _0x4239b4['scaleX']));
                }
                this['sortItem'](_0x30a60c);
                var _0x4e1a5f = 0x0;
                for (_0x1def74 = 0x0, _0x15758d = _0x30a60c['length']; _0x15758d > _0x1def74; _0x1def74++)
                    _0x4239b4 = _0x30a60c[_0x1def74], _0x4239b4['y'] = _0x4e1a5f, _0x4e1a5f += _0x4239b4['height'] * _0x4239b4['scaleY'] + this['_space'], 'left' == this['_align'] ? _0x4239b4['x'] = 0x0 : 'center' == this['_align'] ? _0x4239b4['x'] = 0.5 * (_0x236b25 - _0x4239b4['width'] * _0x4239b4['scaleX']) : 'right' == this['_align'] && (_0x4239b4['x'] = _0x236b25 - _0x4239b4['width'] * _0x4239b4['scaleX']);
                this['_sizeChang' + 'ed']();
            }, _0x3e8dc5(0x0, _0x41a79e, 'width', _0x2b80f5['prototype']['_$get_widt' + 'h'], function (_0x5e8540) {
                this['_width'] != _0x5e8540 && (_0x591c88['superSet'](_0x31fd4d, this, 'width', _0x5e8540), this['callLater'](this['changeItem' + 's']));
            }), _0x141cef['NONE'] = 'none', _0x141cef['LEFT'] = 'left', _0x141cef['CENTER'] = 'center', _0x141cef['RIGHT'] = 'right', _0x141cef;
        }(_0x31fd4d), _0x1241a5 = function (_0x4c822d) {
            function _0x57eeec(_0x35cb9e) {
                this['_vScrollBa' + 'r'] = null, this['_hScrollBa' + 'r'] = null, void 0x0 === _0x35cb9e && (_0x35cb9e = ''), _0x57eeec['__super']['call'](this, _0x35cb9e), this['on']('change', this, this['_onTextCha' + 'nge']);
            }
            _0x49b6a8(_0x57eeec, 'laya.ui.Te' + 'xtArea', _0x4c822d);
            var _0x15395c = _0x57eeec['prototype'];
            return _0x15395c['_onTextCha' + 'nge'] = function () {
                this['callLater'](this['changeScro' + 'll']);
            }, _0x15395c['destroy'] = function (_0x402b2a) {
                void 0x0 === _0x402b2a && (_0x402b2a = !0x0), _0x4c822d['prototype']['destroy']['call'](this, _0x402b2a), this['_vScrollBa' + 'r'] && this['_vScrollBa' + 'r']['destroy'](), this['_hScrollBa' + 'r'] && this['_hScrollBa' + 'r']['destroy'](), this['_vScrollBa' + 'r'] = null, this['_hScrollBa' + 'r'] = null;
            }, _0x15395c['initialize'] = function () {
                this['width'] = 0xb4, this['height'] = 0x96, this['_tf']['wordWrap'] = !0x0, this['multiline'] = !0x0;
            }, _0x15395c['onVBarChan' + 'ged'] = function (_0x3ea182) {
                this['_tf']['scrollY'] != this['_vScrollBa' + 'r']['value'] && (this['_tf']['scrollY'] = this['_vScrollBa' + 'r']['value']);
            }, _0x15395c['onHBarChan' + 'ged'] = function (_0x593ef3) {
                this['_tf']['scrollX'] != this['_hScrollBa' + 'r']['value'] && (this['_tf']['scrollX'] = this['_hScrollBa' + 'r']['value']);
            }, _0x15395c['changeScro' + 'll'] = function () {
                var _0xe4bf91 = this['_vScrollBa' + 'r'] && this['_tf']['maxScrollY'] > 0x0, _0x164e80 = this['_hScrollBa' + 'r'] && this['_tf']['maxScrollX'] > 0x0, _0x35138e = _0xe4bf91 ? this['_width'] - this['_vScrollBa' + 'r']['width'] : this['_width'], _0x588e31 = _0x164e80 ? this['_height'] - this['_hScrollBa' + 'r']['height'] : this['_height'], _0x3296b9 = this['_tf']['padding'] || _0x48c7cc['labelPaddi' + 'ng'];
                this['_tf']['width'] = _0x35138e, this['_tf']['height'] = _0x588e31, this['_vScrollBa' + 'r'] && (this['_vScrollBa' + 'r']['x'] = this['_width'] - this['_vScrollBa' + 'r']['width'] - _0x3296b9[0x2], this['_vScrollBa' + 'r']['y'] = _0x3296b9[0x1], this['_vScrollBa' + 'r']['height'] = this['_height'] - (_0x164e80 ? this['_hScrollBa' + 'r']['height'] : 0x0) - _0x3296b9[0x1] - _0x3296b9[0x3], this['_vScrollBa' + 'r']['scrollSize'] = 0x1, this['_vScrollBa' + 'r']['thumbPerce' + 'nt'] = _0x588e31 / Math['max'](this['_tf']['textHeight'], _0x588e31), this['_vScrollBa' + 'r']['setScroll'](0x1, this['_tf']['maxScrollY'], this['_tf']['scrollY']), this['_vScrollBa' + 'r']['visible'] = _0xe4bf91), this['_hScrollBa' + 'r'] && (this['_hScrollBa' + 'r']['x'] = _0x3296b9[0x0], this['_hScrollBa' + 'r']['y'] = this['_height'] - this['_hScrollBa' + 'r']['height'] - _0x3296b9[0x3], this['_hScrollBa' + 'r']['width'] = this['_width'] - (_0xe4bf91 ? this['_vScrollBa' + 'r']['width'] : 0x0) - _0x3296b9[0x0] - _0x3296b9[0x2], this['_hScrollBa' + 'r']['scrollSize'] = Math['max'](0.033 * _0x35138e, 0x1), this['_hScrollBa' + 'r']['thumbPerce' + 'nt'] = _0x35138e / Math['max'](this['_tf']['textWidth'], _0x35138e), this['_hScrollBa' + 'r']['setScroll'](0x0, this['maxScrollX'], this['scrollX']), this['_hScrollBa' + 'r']['visible'] = _0x164e80);
            }, _0x15395c['scrollTo'] = function (_0x5e5a5d) {
                this['commitMeas' + 'ure'](), this['_tf']['scrollY'] = _0x5e5a5d;
            }, _0x3e8dc5(0x0, _0x15395c, 'scrollY', function () {
                return this['_tf']['scrollY'];
            }), _0x3e8dc5(0x0, _0x15395c, 'width', _0x4c822d['prototype']['_$get_widt' + 'h'], function (_0x507b4a) {
                _0x591c88['superSet'](_0x20ab5c, this, 'width', _0x507b4a), this['callLater'](this['changeScro' + 'll']);
            }), _0x3e8dc5(0x0, _0x15395c, 'hScrollBar', function () {
                return this['_hScrollBa' + 'r'];
            }), _0x3e8dc5(0x0, _0x15395c, 'height', _0x4c822d['prototype']['_$get_heig' + 'ht'], function (_0x30d019) {
                _0x591c88['superSet'](_0x20ab5c, this, 'height', _0x30d019), this['callLater'](this['changeScro' + 'll']);
            }), _0x3e8dc5(0x0, _0x15395c, 'maxScrollX', function () {
                return this['_tf']['maxScrollX'];
            }), _0x3e8dc5(0x0, _0x15395c, 'vScrollBar' + 'Skin', function () {
                return this['_vScrollBa' + 'r'] ? this['_vScrollBa' + 'r']['skin'] : null;
            }, function (_0x4c4bec) {
                null == this['_vScrollBa' + 'r'] && (this['addChild'](this['_vScrollBa' + 'r'] = new _0x168dec()), this['_vScrollBa' + 'r']['on']('change', this, this['onVBarChan' + 'ged']), this['_vScrollBa' + 'r']['target'] = this['_tf'], this['callLater'](this['changeScro' + 'll'])), this['_vScrollBa' + 'r']['skin'] = _0x4c4bec;
            }), _0x3e8dc5(0x0, _0x15395c, 'hScrollBar' + 'Skin', function () {
                return this['_hScrollBa' + 'r'] ? this['_hScrollBa' + 'r']['skin'] : null;
            }, function (_0x5e8f7a) {
                null == this['_hScrollBa' + 'r'] && (this['addChild'](this['_hScrollBa' + 'r'] = new _0x41ed7e()), this['_hScrollBa' + 'r']['on']('change', this, this['onHBarChan' + 'ged']), this['_hScrollBa' + 'r']['mouseWheel' + 'Enable'] = !0x1, this['_hScrollBa' + 'r']['target'] = this['_tf'], this['callLater'](this['changeScro' + 'll'])), this['_hScrollBa' + 'r']['skin'] = _0x5e8f7a;
            }), _0x3e8dc5(0x0, _0x15395c, 'vScrollBar', function () {
                return this['_vScrollBa' + 'r'];
            }), _0x3e8dc5(0x0, _0x15395c, 'maxScrollY', function () {
                return this['_tf']['maxScrollY'];
            }), _0x3e8dc5(0x0, _0x15395c, 'scrollX', function () {
                return this['_tf']['scrollX'];
            }), _0x57eeec;
        }(_0x20ab5c), _0xba94bc = function (_0x183839) {
            function _0x1a136f() {
                _0x1a136f['__super']['call'](this);
            }
            _0x49b6a8(_0x1a136f, 'laya.ui.Ta' + 'b', _0x183839);
            var _0x25a4ca = _0x1a136f['prototype'];
            return _0x25a4ca['createItem'] = function (_0x2987e0, _0x1c9690) {
                return new _0x19d5d0(_0x2987e0, _0x1c9690);
            }, _0x1a136f;
        }(_0x12e8da);
    _0x591c88['__init']([
        _0x228ae1,
        _0x4ddaee
    ]);
}(window, document, Laya);