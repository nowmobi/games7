!function () {
    'use strict';
    class _0x17c88d {
        constructor() {
        }
    }
    window['GameSettin' + 'g'] = _0x17c88d, _0x17c88d['LOGIN_URL'] = '', _0x17c88d['HEARTBEAT'] = 0x1 / 0x0, _0x17c88d['ratio'] = 0x1, _0x17c88d['HAS_SDK'] = !0x1, _0x17c88d['SWITCH'] = {
        'ONLINE': !0x1,
        'SHOW_PROTOCOL_LOG': !0x1,
        'AD_VIDEO': !0x0
    }, _0x17c88d['GAME_SIGN'] = 'spiral', _0x17c88d['LoginPlatf' + 'orm'] = 'web', _0x17c88d['REPORT'] = !0x1, _0x17c88d['LOAD_DATA_' + 'JS'] = !0x0, _0x17c88d['CLICK_SOUN' + 'D_ID'] = 0x3e8, _0x17c88d['startScene'] = 'MainScene', _0x17c88d['ANGLE_1_RA' + 'D'] = 0xb4 / Math['PI'], _0x17c88d['RAD_1_ANGL' + 'E'] = Math['PI'] / 0xb4, _0x17c88d['BATTLE_MOD' + 'E'] = { 'NORMAL': 0x0 }, _0x17c88d['VIDEO_TYPE'] = {
        'OFFLINE_REWARD': 'offline_re' + 'ward',
        'SIGN_REWARD': 'sign_rewar' + 'd',
        'RELIVE': 'relive',
        'BOX_REWARD_KEY': 'box_reward' + '_key',
        'COIN_REWARD_PLUS': 'coin_rewar' + 'd_plus',
        'GET_COIN': 'get_coin',
        'GET_GOOD': 'get_good',
        'JUMP_CHAPTER': 'jump_chapt' + 'er',
        'PLUCK_REWARD_PLUS': 'pluck_rewa' + 'rd_plus'
    }, _0x17c88d['DAY_MILLIS' + 'ECOND'] = 0x5265c00;
    class _0x1faf3f {
        constructor() {
        }
        static ['remo_GameK' + 'ey_veArray' + 'Element'](_0x561940, _0x54255b) {
            if (_0x561940 && _0x561940 instanceof Array) {
                for (var _0x57e6a3 = _0x561940['length']; --_0x57e6a3 > -0x1;)
                    _0x561940[_0x57e6a3] == _0x54255b && _0x561940['splice'](_0x57e6a3, 0x1);
            }
        }
        static ['remo_GameK' + 'ey_veArray' + 'ElementAt'](_0x23ed40, _0x358be8) {
            _0x23ed40 && _0x23ed40 instanceof Array && _0x23ed40['splice'](_0x358be8, 0x1);
        }
        static ['arra_GameK' + 'ey_yContai' + 'ns'](_0x5e9636, _0x167d76) {
            return !!(_0x5e9636 && _0x5e9636 instanceof Array) && -0x1 != _0x5e9636['indexOf'](_0x167d76);
        }
        static ['getC_GameK' + 'ey_hildDee' + 'p'](_0x1f60c5, _0x458e49) {
            var _0x35ba88 = _0x1f60c5['getChildBy' + 'Name'](_0x458e49);
            if (_0x35ba88)
                return _0x35ba88;
            for (var _0x7b65fe = 0x0; _0x7b65fe < _0x1f60c5['_children']['length']; _0x7b65fe++)
                if (_0x35ba88 = _0x1faf3f['getC_GameK' + 'ey_hildDee' + 'p'](_0x1f60c5['_children'][_0x7b65fe], _0x458e49))
                    return _0x35ba88;
        }
        static ['getC_GameK' + 'ey_hildArr' + 'ayDeep'](_0x2adf43, _0xb8c5fc) {
            let _0x219b5e = [];
            _0x2adf43['name'] == _0xb8c5fc && _0x219b5e['push'](_0x2adf43);
            let _0x1a1963, _0x132ca1 = _0x2adf43['_children']['length'];
            for (; --_0x132ca1 > -0x1;)
                (_0x1a1963 = _0x1faf3f['getC_GameK' + 'ey_hildArr' + 'ayDeep'](_0x2adf43['_children'][_0x132ca1], _0xb8c5fc)) && _0x219b5e['pushAll$'](_0x1a1963);
            return _0x219b5e;
        }
        static ['getA_GameK' + 'ey_vater'](_0xadc623) {
            if (!_0xadc623 || !_0xadc623['getCompone' + 'nt'])
                return null;
            let _0x528577 = null;
            if (_0xadc623['getCompone' + 'nt'](Laya['Animator']))
                _0x528577 = _0xadc623;
            else {
                let _0x14b084 = _0xadc623['_children'], _0x2d5bd9 = 0x0, _0x4a4648 = _0x14b084['length'];
                for (; _0x2d5bd9 < _0x4a4648 && !(_0x528577 = _0x1faf3f['getA_GameK' + 'ey_vater'](_0x14b084[_0x2d5bd9])); _0x2d5bd9++);
            }
            return _0x528577;
        }
        static ['clam_GameK' + 'ey_p'](_0xb84727, _0x363eaf, _0x3a5b3f) {
            return Math['max'](_0xb84727, Math['min'](_0x363eaf, _0x3a5b3f));
        }
        static ['form_GameK' + 'ey_atDateS' + 'tr'](_0x90ee1e) {
            return _0x90ee1e['format']('yyyy-MM-dd' + '\x20hh:mm');
        }
        static ['getZ_GameK' + 'ey_eroTime']() {
            return Date['parse'](new Date()['toDateStri' + 'ng']());
        }
        static ['floa_GameK' + 'ey_tRange'](_0x34e0a5, _0x197ffc) {
            return Math['random']() * (_0x197ffc - _0x34e0a5) + _0x34e0a5;
        }
        static ['rand_GameK' + 'ey_omChanc' + 'e'](_0x2be0b4) {
            return _0x2be0b4 >= Math['random']();
        }
        static ['intR_GameK' + 'ey_ange'](_0x354d02, _0x2e946e) {
            return Math['floor'](Math['random']() * (_0x2e946e - _0x354d02) + _0x354d02);
        }
        static ['getS_GameK' + 'ey_kinPath' + 'ById'](_0x1c5d5a) {
            var _0x593c59 = D['SpritePath'][_0x1c5d5a];
            return _0x593c59 || (_0x593c59 = D['SpritePath'][0x64]), _0x593c59['chs'];
        }
        static ['arra_GameK' + 'ey_yRandom'](_0x27a48e) {
            return _0x27a48e[_0x1faf3f['intR_GameK' + 'ey_ange'](0x0, _0x27a48e['length'])];
        }
        static ['shif_GameK' + 'ey_tRandom'](_0x5c72c7) {
            var _0x3078a7 = _0x1faf3f['intR_GameK' + 'ey_ange'](0x0, _0x5c72c7['length']), _0x3a3390 = _0x5c72c7[_0x3078a7];
            return _0x5c72c7['removeAt'](_0x3078a7), _0x3a3390;
        }
        static ['rand_GameK' + 'ey_omIndex' + 'ByWeight'](_0x14c1d0, _0x5ccc36) {
            if (!_0x5ccc36) {
                _0x5ccc36 = 0x0;
                for (var _0x229c85 = 0x0; _0x229c85 < _0x14c1d0['length']; _0x229c85++)
                    _0x5ccc36 += _0x14c1d0[_0x229c85];
            }
            for (var _0x2d52f3 = _0x1faf3f['intR_GameK' + 'ey_ange'](0x0, _0x5ccc36 + 0x1), _0x594188 = 0x0; _0x594188 < _0x14c1d0['length']; _0x594188++)
                if ((_0x2d52f3 -= _0x14c1d0[_0x594188]) <= 0x0)
                    return _0x594188;
            return 0x0;
        }
        static ['getS_GameK' + 'ey_trParam'](_0x52c65a) {
            var _0x4f85d6 = D['CommonPara' + 'meter'][_0x52c65a];
            return _0x4f85d6 ? _0x4f85d6['Value'] : '';
        }
        static ['getN_GameK' + 'ey_umberPa' + 'ram'](_0x6b1212) {
            return Number(_0x1faf3f['getS_GameK' + 'ey_trParam'](_0x6b1212));
        }
        static ['send_GameK' + 'ey_ParamHt' + 'tp'](_0x41428d, _0x4acab3, _0x2b7664) {
            var _0x4e33d9 = new Laya['HttpReques' + 't']();
            _0x4e33d9['_loadedSiz' + 'e'] = 0x0, _0x4e33d9['_totalSize'] = 0x4c4b40, _0x4e33d9['once'](Laya['Event']['COMPLETE'], _0x1faf3f, _0x1faf3f['onHt_GameK' + 'ey_tpCompe' + 'lete'], [
                _0x4e33d9,
                _0x2b7664
            ]);
            for (key in _0x4acab3)
                _0x41428d += _0x1faf3f['stri_GameK' + 'ey_ngForma' + 't']('&{0}={1}', [
                    key,
                    _0x4acab3[key]
                ]);
            _0x4e33d9['send'](_0x41428d, null, 'get', 'text');
        }
        static ['onHt_GameK' + 'ey_tpCompe' + 'lete'](_0xc81865, _0x37d1c3) {
            _0x37d1c3 && _0x37d1c3['runWith'](_0xc81865['data']);
        }
        static ['setS_GameK' + 'ey_howName'](_0x47052c, _0x514fce, _0x3886c4) {
            if (_0x47052c) {
                var _0x4b7b67;
                _0x3886c4 || (_0x47052c['text'] = '名字六个字哦', _0x3886c4 = _0x47052c['textField']['textWidth']);
                var _0xe3fb33 = _0x514fce['length'];
                for (_0x47052c['text'] = '', _0x4b7b67 = 0x0; _0x4b7b67 < _0xe3fb33; _0x4b7b67++)
                    if (_0x47052c['text'] += _0x514fce['charAt'](_0x4b7b67), _0x47052c['textField']['textWidth'] > _0x3886c4)
                        return void (_0x47052c['text'] = _0x514fce['substring'](0x0, _0x4b7b67));
                _0x47052c['text'] = _0x514fce;
            }
        }
        static ['getS_GameK' + 'ey_tring'](_0xaeb474, _0x2f7961) {
            if (!D['GameText'][_0xaeb474])
                return _0xaeb474 + _0x2f7961;
            var _0x12d262 = D['GameText'][_0xaeb474]['chs'];
            return _0x12d262 ? _0x2f7961 ? _0x1faf3f['stri_GameK' + 'ey_ngForma' + 't'](_0x12d262, _0x2f7961) : _0x12d262 : D['GameText'][0x0]['chs'];
        }
        static ['stri_GameK' + 'ey_ngForma' + 't'](_0x2bdc45, _0x162bc2) {
            if (!_0x2bdc45)
                return _0x162bc2;
            var _0x2d1e6c = _0x2bdc45;
            if (_0x162bc2) {
                for (var _0x1da2d0 = 0x0; _0x1da2d0 < _0x162bc2['length']; _0x1da2d0++)
                    _0x2d1e6c = _0x2d1e6c['replaceAll']('{' + _0x1da2d0 + '}', _0x162bc2[_0x1da2d0]);
            }
            return _0x2d1e6c;
        }
        static ['onBu_GameK' + 'ey_ttonSca' + 'leEvent'](_0x33f96e, _0x48eaf0, _0x1a4e67, _0x4e86c1) {
            !_0x33f96e['defaultSca' + 'le'] && (_0x33f96e['defaultSca' + 'le'] = {
                'scaleX': _0x33f96e['scaleX'] || 0x1,
                'scaleY': _0x33f96e['scaleY'] || 0x1
            }), _0x33f96e['on'](Laya['Event']['MOUSE_DOWN'], _0x1faf3f, _0x1faf3f['_onSc_Game' + 'Key_aleBtn' + 'Down']), _0x33f96e['on'](Laya['Event']['ROLL_OUT'], _0x1faf3f, _0x1faf3f['_onS_GameK' + 'ey_caleBtn' + 'Out']), _0x33f96e['on'](Laya['Event']['MOUSE_UP'], _0x1faf3f, _0x1faf3f['_onS_GameK' + 'ey_caleBtn' + 'Up']), _0x33f96e['on'](Laya['Event']['CLICK'], _0x1faf3f, _0x1faf3f['_onS_GameK' + 'ey_caleBtn' + 'Click'], [
                _0x48eaf0,
                _0x1a4e67
            ]), _0x33f96e['_sound'] = _0x4e86c1;
        }
        static ['_onS_GameK' + 'ey_caleBtn' + 'Click'](_0x347df8, _0x32f648, _0x218458) {
            try {
                _0x347df8 && _0x347df8[_0x32f648] && _0x347df8[_0x32f648](_0x218458), Laya['audioManag' + 'er'] && Laya['audioManag' + 'er']['play_GameK' + 'ey_Sound'](_0x218458['target']['_sound'] || _0x17c88d['CLICK_SOUN' + 'D_ID']);
            } catch (_0x3cf9ce) {
            }
            _0x218458['stopPropag' + 'ation']();
        }
        static ['_onSc_Game' + 'Key_aleBtn' + 'Down'](_0x26794b) {
            _0x26794b['target']['scale'](1.1 * _0x26794b['target']['defaultSca' + 'le']['scaleX'], 1.1 * _0x26794b['target']['defaultSca' + 'le']['scaleY']), _0x26794b['stopPropag' + 'ation']();
        }
        static ['_onS_GameK' + 'ey_caleBtn' + 'Out'](_0x224030) {
            _0x224030['currentTar' + 'get']['scale'](0x1 * _0x224030['target']['defaultSca' + 'le']['scaleX'], 0x1 * _0x224030['target']['defaultSca' + 'le']['scaleY']), _0x224030['stopPropag' + 'ation']();
        }
        static ['_onS_GameK' + 'ey_caleBtn' + 'Up'](_0x13f8c1) {
            _0x13f8c1['target']['scale'](0x1 * _0x13f8c1['target']['defaultSca' + 'le']['scaleX'], 0x1 * _0x13f8c1['target']['defaultSca' + 'le']['scaleY']), _0x13f8c1['stopPropag' + 'ation']();
        }
        static ['onBu_GameK' + 'ey_ttonEve' + 'nt'](_0x4eca6d, _0x2100a2, _0x2a0774) {
            _0x4eca6d && (_0x4eca6d['on'](Laya['Event']['MOUSE_DOWN'], _0x2100a2, _0x1faf3f['_onB_GameK' + 'ey_tnDown']), _0x4eca6d['on'](Laya['Event']['ROLL_OUT'], _0x2100a2, _0x1faf3f['_onB_GameK' + 'ey_tnOut']), _0x4eca6d['on'](Laya['Event']['MOUSE_UP'], _0x2100a2, _0x1faf3f['_onB_GameK' + 'ey_tnUp']), _0x4eca6d['on'](Laya['Event']['CLICK'], _0x2100a2, _0x1faf3f['_onB_GameK' + 'ey_tnClick'], [
                _0x2100a2,
                _0x2a0774
            ]));
        }
        static ['_onB_GameK' + 'ey_tnClick'](_0x27999f, _0x3ad4c5, _0x17595b) {
            window['pgdk$'] && pgdk$['shakePhone' + '$']();
            try {
                _0x27999f && _0x27999f[_0x3ad4c5] && _0x27999f[_0x3ad4c5](_0x17595b);
            } catch (_0x9ae3e7) {
                Prot_GameKey_ocolManager['repo_GameK' + 'ey_rtError'](_0x9ae3e7['stack']);
            }
            _0x17595b['stopPropag' + 'ation']();
        }
        static ['_onB_GameK' + 'ey_tnDown'](_0x5032c1) {
            _0x5032c1['stopPropag' + 'ation']();
        }
        static ['_onB_GameK' + 'ey_tnOut'](_0x49b767) {
            _0x49b767['stopPropag' + 'ation']();
        }
        static ['_onB_GameK' + 'ey_tnUp'](_0x1ddf1b) {
            _0x1ddf1b['stopPropag' + 'ation']();
        }
        static ['onEv_GameK' + 'ey_ent'](_0x9fcbdc, _0xc02e9f) {
            _0xc02e9f['on'](Laya['Event']['MOUSE_DOWN'], _0x9fcbdc, _0x9fcbdc['onMouseEve' + 'ntHandler']), _0xc02e9f['on'](Laya['Event']['ROLL_OUT'], _0x9fcbdc, _0x9fcbdc['onMouseEve' + 'ntHandler']), _0xc02e9f['on'](Laya['Event']['MOUSE_UP'], _0x9fcbdc, _0x9fcbdc['onMouseEve' + 'ntHandler']), _0xc02e9f['on'](Laya['Event']['CLICK'], _0x9fcbdc, _0x9fcbdc['onMouseEve' + 'ntHandler']);
        }
        static ['offE_GameK' + 'ey_vent'](_0x3f06ac, _0x1eef0f) {
            _0x1eef0f['off'](Laya['Event']['MOUSE_DOWN'], _0x3f06ac, _0x3f06ac['onMouseEve' + 'ntHandler']), _0x1eef0f['off'](Laya['Event']['ROLL_OUT'], _0x3f06ac, _0x3f06ac['onMouseEve' + 'ntHandler']), _0x1eef0f['off'](Laya['Event']['MOUSE_UP'], _0x3f06ac, _0x3f06ac['onMouseEve' + 'ntHandler']), _0x1eef0f['off'](Laya['Event']['CLICK'], _0x3f06ac, _0x3f06ac['onMouseEve' + 'ntHandler']);
        }
        static ['form_GameK' + 'ey_atTime'](_0x58af17, _0x4dc0dc) {
            var _0x54e863 = Math['floor'](_0x58af17 / 0x3c);
            if (_0x58af17 %= 0x3c, !_0x4dc0dc || _0x54e863 < 0x3c)
                return _0x1faf3f['time_GameK' + 'ey_NumberF' + 'ormat'](_0x54e863) + ':' + _0x1faf3f['time_GameK' + 'ey_NumberF' + 'ormat'](_0x58af17);
            var _0x3d69c3 = Math['floor'](_0x54e863 / 0x3c);
            return _0x54e863 %= 0x3c, _0x3d69c3 + ':' + _0x1faf3f['time_GameK' + 'ey_NumberF' + 'ormat'](_0x54e863) + ':' + _0x1faf3f['time_GameK' + 'ey_NumberF' + 'ormat'](_0x58af17);
        }
        static ['time_GameK' + 'ey_NumberF' + 'ormat'](_0x1b6235) {
            return (_0x1b6235 < 0xa ? '0' : '') + parseInt(_0x1b6235);
        }
        static ['setV_GameK' + 'ey_ector3'](_0x3f1bc4, _0x4774b6, _0xd9b961, _0x4d7b17) {
            _0x3f1bc4['x'] = _0x4774b6, _0x3f1bc4['y'] = _0xd9b961, _0x3f1bc4['z'] = _0x4d7b17;
        }
        static ['rese_GameK' + 'ey_tScale'](_0x3102d5) {
            if (!_0x3102d5)
                return;
            let _0x591be9 = _0x3102d5['transform']['localScale']['clone']();
            _0x3102d5['transform']['localScale'] = new Laya['Vector3'](0x0, 0x0, 0x0), _0x3102d5['transform']['localScale'] = _0x591be9;
            let _0x45a9fc = _0x3102d5['_children'], _0x371ee0 = _0x45a9fc ? _0x45a9fc['length'] : 0x0;
            for (; --_0x371ee0 > -0x1;)
                _0x1faf3f['rese_GameK' + 'ey_tScale'](_0x45a9fc[_0x371ee0]);
        }
        static ['copyVector' + '3'](_0x327e01, _0xb06e5a) {
            _0xb06e5a['x'] = _0x327e01['x'], _0xb06e5a['y'] = _0x327e01['y'], _0xb06e5a['z'] = _0x327e01['z'];
        }
        static ['getV3Lengt' + 'h$'](_0x39db81) {
            return Math['sqrt'](Math['pow'](_0x39db81['x'], 0x2) + Math['pow'](_0x39db81['y'], 0x2) + Math['pow'](_0x39db81['z'], 0x2));
        }
        static ['getSkinPat' + 'hById'](_0x3f0e11) {
            var _0x2618b8 = D['SpritePath'][_0x3f0e11];
            return _0x2618b8 || (_0x2618b8 = D['SpritePath'][0x64]), _0x2618b8['chs'];
        }
        static ['changeImgC' + 'olor$'](_0x113abc, _0x6075e8) {
            let _0x41e0d3 = [
                    _0x113abc[0x0],
                    0x0,
                    0x0,
                    0x0,
                    0x0,
                    0x0,
                    _0x113abc[0x1],
                    0x0,
                    0x0,
                    0x0,
                    0x0,
                    0x0,
                    _0x113abc[0x2],
                    0x0,
                    0x0,
                    0x0,
                    0x0,
                    0x0,
                    _0x113abc[0x3],
                    0x0
                ], _0x466404 = new Laya['ColorFilte' + 'r'](_0x41e0d3);
            _0x6075e8['filters'] = [_0x466404];
        }
        static ['imgBecomeW' + 'hite$'](_0x50852d) {
            let _0x3bcf94 = new Laya['ColorFilte' + 'r']([
                0x1,
                0x1,
                0x1,
                0x1,
                0x1,
                0x1,
                0x1,
                0x1,
                0x1,
                0x1,
                0x1,
                0x1,
                0x1,
                0x1,
                0x1,
                0x1,
                0x1,
                0x1,
                0x1,
                0x1
            ]);
            _0x50852d['filters'] = [_0x3bcf94];
        }
        static ['coinNumSho' + 'w$'](_0x2ee3e2) {
            var _0x3563c7;
            if (_0x2ee3e2 < 0x3e8)
                _0x3563c7 = _0x2ee3e2 % 0x3e8;
            else {
                if (_0x2ee3e2 >= 0x3e8 && _0x2ee3e2 < 0x2710) {
                    var _0x588b93 = _0x2ee3e2 / 0x3e8, _0x14323e = /([0-9]+.[0-9]{1})[0-9]*/;
                    _0x3563c7 = String(_0x588b93)['replace'](_0x14323e, '$1') + 'K';
                } else
                    _0x588b93 = _0x2ee3e2 / 0x2710, _0x14323e = /([0-9]+.[0-9]{1})[0-9]*/, _0x3563c7 = String(_0x588b93)['replace'](_0x14323e, '$1') + '万';
            }
            return _0x3563c7;
        }
    }
    class _0x3e110a {
        constructor() {
            this['inited'] = !0x1, this['initedCB'] = void 0x0, this['_deltaTime' + '$'] = 0x0, this['_maxDeltaT' + 'ime$'] = 0x3e8 * Laya['Scene3D']['physicsSet' + 'tings']['fixedTimeS' + 'tep'];
        }
        static ['getInstanc' + 'e$']() {
            return null == _0x3e110a['instance'] && (_0x3e110a['instance'] = new _0x3e110a()), _0x3e110a['instance'];
        }
        get ['isIn_GameK' + 'ey_ited']() {
            return this['inited'];
        }
        get ['deltaTime$']() {
            return this['_deltaTime' + '$'] = Laya['physicsTim' + 'er']['delta'], this['_deltaTime' + '$'];
        }
        ['init'](_0x3fab23) {
            this['initedCB'] = _0x3fab23, this['init_GameK' + 'ey_Complet' + 'e']();
        }
        ['init_GameK' + 'ey_Complet' + 'e']() {
            this['inited'] = !0x0, this['initedCB'] && this['initedCB']();
        }
    }
    _0x3e110a['instance'] = void 0x0;
    class _0x446464 extends Laya['Script'] {
        constructor() {
            super(), this['isShow$'] = !0x1, this['clickCallb' + 'ack$'] = void 0x0, this['animT$'] = 0x5dc, this['animCountT' + '$'] = void 0x0, this['minScale$'] = 0.8, this['maxScale$'] = 1.2, this['label_coin' + '$'] = void 0x0;
        }
        ['setActive$'](_0x342f62) {
            this['owner']['visible'] = this['isShow$'] = _0x342f62, this['isShow$'] && (this['animCountT' + '$'] = 0x0);
        }
        ['setPos$'](_0x1576c8, _0x4977c3) {
            this['owner']['pos'](_0x1576c8, _0x4977c3), this['changeCall' + 'back$'] && this['changeCall' + 'back$']();
        }
        ['setClickCa' + 'llback$'](_0x20c4b6) {
            this['clickCallb' + 'ack$'] = _0x20c4b6;
        }
        ['setChangeC' + 'allback$'](_0x2e39c3) {
            this['changeCall' + 'back$'] = _0x2e39c3;
        }
        ['refreshUI$'](_0x43d74c) {
            this['label_coin' + '$']['text'] = _0x43d74c;
        }
        ['onStart']() {
            this['initUI$'](), this['monitorBtn' + 's$']();
        }
        ['initUI$']() {
            this['label_coin' + '$'] = _0x1faf3f['getC_GameK' + 'ey_hildDee' + 'p'](this['owner'], 'label_coin'), this['owner']['visible'] = !0x1;
        }
        ['monitorBtn' + 's$']() {
            _0x1faf3f['onBu_GameK' + 'ey_ttonSca' + 'leEvent'](this['owner'], this, 'onClickPan' + 'el$');
        }
        ['onClickPan' + 'el$']() {
            this['clickCallb' + 'ack$'] && this['clickCallb' + 'ack$'](), this['setActive$'](!0x1);
        }
        ['refreshPan' + 'elAnim$']() {
            if (!this['isShow$'])
                return;
            this['animCountT' + '$'] += _0x3e110a['getInstanc' + 'e$']()['deltaTime$'], this['animCountT' + '$'] > this['animT$'] && (this['animCountT' + '$'] %= this['animT$']);
            let _0x412ea = this['animCountT' + '$'] / this['animT$'];
            this['owner']['scaleX'] = this['owner']['scaleY'] = (this['maxScale$'] - this['minScale$']) * (_0x412ea > 0.5 ? 0x1 - _0x412ea : _0x412ea) + this['minScale$'];
        }
        ['onUpdate']() {
            this['refreshPan' + 'elAnim$']();
        }
    }
    class _0x28d556 {
        constructor() {
        }
        static ['getL_GameK' + 'ey_ocalDat' + 'a'](_0x2157e8, _0x2fe32b) {
            let _0x1beee5;
            return _0x2157e8 += _0x17c88d['GAME_SIGN'], null != (_0x1beee5 = _0x28d556['localDataD' + 'ic'][_0x2157e8]) ? _0x1beee5 : (null != (_0x1beee5 = Laya['LocalStora' + 'ge']['getItem'](_0x2157e8)) && 'null' !== _0x1beee5 && 'undefined' !== _0x1beee5 && '' !== _0x1beee5 || null == _0x2fe32b ? 'boolean' == typeof _0x2fe32b ? _0x1beee5 = _0x28d556['_toBoolean'](_0x1beee5, _0x2fe32b) : 'number' == typeof _0x2fe32b ? _0x1beee5 = _0x28d556['_toNumber'](_0x1beee5, _0x2fe32b) : 'object' == typeof _0x2fe32b && (_0x1beee5 = _0x28d556['_toJSON'](_0x1beee5, _0x2fe32b)) : _0x1beee5 = _0x2fe32b, _0x28d556['localDataD' + 'ic'][_0x2157e8] = _0x1beee5, _0x1beee5);
        }
        static ['_toBoolean'](_0x5ad70e, _0x4ef3bd) {
            return 'boolean' == typeof _0x5ad70e ? _0x5ad70e : null == _0x5ad70e || '' == _0x5ad70e ? _0x4ef3bd : 'false' != _0x5ad70e && ('true' == _0x5ad70e || void 0x0);
        }
        static ['_toNumber'](_0x50713e, _0x3b70cd) {
            let _0x50e6df = Number(_0x50713e);
            return isNaN(_0x50e6df) ? _0x3b70cd : _0x50e6df;
        }
        static ['_toJSON'](_0x3f0227, _0x3edade) {
            try {
                let _0x5fc8 = JSON['parse'](_0x3f0227);
                return 'object' == typeof _0x5fc8 && _0x5fc8 ? _0x5fc8 : _0x3edade;
            } catch (_0x40a4ad) {
                return _0x3edade;
            }
        }
        static ['setL_GameK' + 'ey_ocalDat' + 'a'](_0x27feba, _0x479277) {
            _0x27feba += _0x17c88d['GAME_SIGN'], _0x28d556['localDataD' + 'ic'][_0x27feba] = _0x479277, 'object' == typeof _0x479277 && (_0x479277 = JSON['stringify'](_0x479277)), Laya['LocalStora' + 'ge']['setItem'](_0x27feba, _0x479277);
        }
        ['clear']() {
            _0x28d556['localDataD' + 'ic'] = {};
        }
    }
    _0x28d556['localDataD' + 'ic'] = {}, _0x28d556['KEY'] = {
        'ACCO_GameKey_UNT': 'account',
        'PASS_GameKey_WORD': 'password',
        'SOUN_GameKey_D': 'sound',
        'MUSI_GameKey_C': 'music',
        'SOUN_GameKey_D_SWITCH': 'sound_swit' + 'ch',
        'SHAK_GameKey_E': 'shake',
        'LEVEL$': 'level',
        'LEVEL_PROGRESS$': 'level_prog' + 'ress',
        'COIN$': 'COIN',
        'SUCCESS_CUP_NUM$': 'successCup' + 'Num',
        'INDUCE_TIMES$': 'induce_tim' + 'es',
        'INDUCE_TIME$': 'induce_tim' + 'e',
        'INDUCE_CNT$': 'induce_cnt',
        'BEST_SCORE$': 'best_score',
        'CUR_JUICER': 'curJuicer',
        'CUR_HAND': 'curHand',
        'FRUIT_IDS': 'fruitIds',
        'GLASS_IDS': 'glassIds',
        'DECORATE_IDS': 'decorateId' + 's',
        'JUICER_IDS': 'juicerIds',
        'HAND_IDS': 'handIds'
    };
    class _0x51da5e {
        constructor() {
        }
        ['setS_GameK' + 'ey_hake'](_0x4fb328) {
            _0x28d556['setL_GameK' + 'ey_ocalDat' + 'a'](_0x28d556['KEY']['SHAK_GameK' + 'ey_E'], _0x4fb328);
        }
        ['getS_GameK' + 'ey_hake']() {
            return _0x28d556['getL_GameK' + 'ey_ocalDat' + 'a'](_0x28d556['KEY']['SHAK_GameK' + 'ey_E'], !0x0);
        }
        ['chan_GameK' + 'ey_geShake' + 'Switch']() {
            _0x28d556['setL_GameK' + 'ey_ocalDat' + 'a'](_0x28d556['KEY']['SHAK_GameK' + 'ey_E'], !this['getS_GameK' + 'ey_hake']());
        }
        ['setS_GameK' + 'ey_oundSwi' + 'tch'](_0xdf49e) {
            _0x28d556['setL_GameK' + 'ey_ocalDat' + 'a'](_0x28d556['KEY']['SOUN_GameK' + 'ey_D_SWITC' + 'H'], _0xdf49e);
        }
        ['getS_GameK' + 'ey_oundSwi' + 'tch']() {
            return !0x1;
        }
        ['clea_GameK' + 'ey_r']() {
        }
    }
    class _0x27f240 {
        constructor() {
            this['_coin$'] = 0x0, this['_mission$'] = 0x1, this['_missionPr' + 'ogress$'] = 0x1, this['awardHandI' + 'dArr$'] = [
                0x3,
                0x9,
                0xd
            ], this['_successCu' + 'pNum$'] = 0x0, this['_curHandSk' + 'inId'] = 0x1, this['_curJuicer' + 'Id'] = 0x1, this['_haveFruit' + 'Ids'] = [
                0x1,
                0x2,
                0x3
            ], this['_haveGlass' + 'Ids'] = [
                0x1,
                0x2,
                0x3,
                0x4
            ], this['_haveDecor' + 'ateIds'] = [
                0x1,
                0x2,
                0x3
            ], this['_haveJuice' + 'rIds'] = [
                0x1,
                0x3,
                0x4
            ], this['_haveHandI' + 'ds'] = [0x1];
        }
        ['setCurJuic' + 'erId'](_0x567268) {
            this['_curJuicer' + 'Id'] = _0x567268, _0x28d556['setL_GameK' + 'ey_ocalDat' + 'a'](_0x28d556['KEY']['CUR_JUICER'], this['_curJuicer' + 'Id']);
        }
        ['setCurHand' + 'Id'](_0xf1ab0f) {
            this['_curHandSk' + 'inId'] = _0xf1ab0f, _0x28d556['setL_GameK' + 'ey_ocalDat' + 'a'](_0x28d556['KEY']['CUR_HAND'], this['_curHandSk' + 'inId']);
        }
        get ['curJuicerI' + 'd']() {
            return this['_curJuicer' + 'Id'] = _0x28d556['getL_GameK' + 'ey_ocalDat' + 'a'](_0x28d556['KEY']['CUR_JUICER'], this['_curJuicer' + 'Id']), this['_curJuicer' + 'Id'];
        }
        get ['curHandSki' + 'nId']() {
            return this['_curHandSk' + 'inId'] = _0x28d556['getL_GameK' + 'ey_ocalDat' + 'a'](_0x28d556['KEY']['CUR_HAND'], this['_curHandSk' + 'inId']), this['_curHandSk' + 'inId'];
        }
        get ['fruitIds']() {
            return this['_haveFruit' + 'Ids'] = _0x28d556['getL_GameK' + 'ey_ocalDat' + 'a'](_0x28d556['KEY']['FRUIT_IDS'], this['_haveFruit' + 'Ids']), this['_haveFruit' + 'Ids'];
        }
        get ['glassIds']() {
            return this['_haveGlass' + 'Ids'] = _0x28d556['getL_GameK' + 'ey_ocalDat' + 'a'](_0x28d556['KEY']['GLASS_IDS'], this['_haveGlass' + 'Ids']), this['_haveGlass' + 'Ids'];
        }
        get ['decorateId' + 's']() {
            return this['_haveDecor' + 'ateIds'] = _0x28d556['getL_GameK' + 'ey_ocalDat' + 'a'](_0x28d556['KEY']['DECORATE_I' + 'DS'], this['_haveDecor' + 'ateIds']), this['_haveDecor' + 'ateIds'];
        }
        get ['juicerIds']() {
            return this['_haveJuice' + 'rIds'] = _0x28d556['getL_GameK' + 'ey_ocalDat' + 'a'](_0x28d556['KEY']['JUICER_IDS'], this['_haveJuice' + 'rIds']), this['_haveJuice' + 'rIds'];
        }
        get ['handIds']() {
            return this['_haveHandI' + 'ds'] = _0x28d556['getL_GameK' + 'ey_ocalDat' + 'a'](_0x28d556['KEY']['HAND_IDS'], this['_haveHandI' + 'ds']), this['_haveHandI' + 'ds'];
        }
        ['isHaveFrui' + 'tId'](_0x1243df) {
            return -0x1 != this['fruitIds']['indexOf'](_0x1243df);
        }
        ['isHaveGlas' + 'sId'](_0x24a9e9) {
            return -0x1 != this['glassIds']['indexOf'](_0x24a9e9);
        }
        ['isHaveDeco' + 'rateId'](_0xd3f34d) {
            return -0x1 != this['decorateId' + 's']['indexOf'](_0xd3f34d);
        }
        ['isHaveJuic' + 'erId'](_0x18279d) {
            return -0x1 != this['juicerIds']['indexOf'](_0x18279d);
        }
        ['isHaveHand' + 'Id'](_0x1af03d) {
            return -0x1 != this['handIds']['indexOf'](_0x1af03d);
        }
        ['addHandSki' + 'n$'](_0x4d3657) {
            this['isHaveHand' + 'Id'](_0x4d3657) || (this['_haveHandI' + 'ds']['push'](_0x4d3657), _0x28d556['setL_GameK' + 'ey_ocalDat' + 'a'](_0x28d556['KEY']['HAND_IDS'], this['_haveHandI' + 'ds']), this['setCurHand' + 'Id'](_0x4d3657));
        }
        ['addFruitSk' + 'in$'](_0x4fb490) {
            this['isHaveFrui' + 'tId'](_0x4fb490) || (this['_haveFruit' + 'Ids']['push'](_0x4fb490), _0x28d556['setL_GameK' + 'ey_ocalDat' + 'a'](_0x28d556['KEY']['FRUIT_IDS'], this['_haveFruit' + 'Ids']));
        }
        ['addDecorat' + 'eSkin$'](_0x2369f3) {
            this['isHaveDeco' + 'rateId'](_0x2369f3) || (this['_haveDecor' + 'ateIds']['push'](_0x2369f3), _0x28d556['setL_GameK' + 'ey_ocalDat' + 'a'](_0x28d556['KEY']['DECORATE_I' + 'DS'], this['_haveDecor' + 'ateIds']));
        }
        get ['coin$']() {
            return this['_coin$'] = _0x28d556['getL_GameK' + 'ey_ocalDat' + 'a'](_0x28d556['KEY']['COIN$'], 0x0), this['_coin$'];
        }
        ['onGetCoin$'](_0x4a1a6e) {
            this['_coin$'] = this['coin$'] + _0x4a1a6e, _0x28d556['setL_GameK' + 'ey_ocalDat' + 'a'](_0x28d556['KEY']['COIN$'], this['_coin$']);
        }
        get ['mission$']() {
            return this['_mission$'] = _0x28d556['getL_GameK' + 'ey_ocalDat' + 'a'](_0x28d556['KEY']['LEVEL$'], 0x1), console['log']('当前关卡数：', this['_mission$']), this['_mission$'];
        }
        ['setMission' + '$'](_0x20aab6) {
            null != _0x20aab6 && _0x28d556['setL_GameK' + 'ey_ocalDat' + 'a'](_0x28d556['KEY']['LEVEL$'], _0x20aab6);
        }
        get ['missionPro' + 'gress$']() {
            return this['_missionPr' + 'ogress$'] = _0x28d556['getL_GameK' + 'ey_ocalDat' + 'a'](_0x28d556['KEY']['LEVEL_PROG' + 'RESS$'], 0x1), console['log']('当前关卡进度：', this['_missionPr' + 'ogress$']), this['_missionPr' + 'ogress$'];
        }
        ['setMission' + 'Progress$'](_0x3a26db) {
            null != _0x3a26db && _0x28d556['setL_GameK' + 'ey_ocalDat' + 'a'](_0x28d556['KEY']['LEVEL_PROG' + 'RESS$'], _0x3a26db);
        }
        get ['successCup' + 'Num$']() {
            return this['_successCu' + 'pNum$'] = _0x28d556['getL_GameK' + 'ey_ocalDat' + 'a'](_0x28d556['KEY']['SUCCESS_CU' + 'P_NUM$'], 0x0), console['log']('当前玩家已成功榨汁杯' + '数：', this['_missionPr' + 'ogress$']), this['_successCu' + 'pNum$'];
        }
        ['setSuccess' + 'CupNum$'](_0x104350) {
            null != _0x104350 && _0x28d556['setL_GameK' + 'ey_ocalDat' + 'a'](_0x28d556['KEY']['SUCCESS_CU' + 'P_NUM$'], _0x104350);
        }
        ['clear$']() {
        }
    }
    class _0x70bfb {
        constructor() {
            this['curMission' + 'Data'] = void 0x0, this['curDrinkDa' + 'ta'] = void 0x0, this['_choiceSco' + 're'] = void 0x0, this['_decorateS' + 'core'] = void 0x0, this['_skillScor' + 'e'] = void 0x0, this['maxId$'] = void 0x0, this['idRandomDi' + 'c$'] = {};
        }
        ['getMission' + 'DataByMiss' + 'ionId$'](_0x18b16a) {
            if (null == _0x18b16a && (_0x18b16a = 0x1), !this['maxId$']) {
                let _0x13ff83;
                for (let _0x34a4d6 in D['missionBas' + 'ic'])
                    _0x13ff83 = Number(_0x34a4d6), (!this['maxId$'] || _0x13ff83 > this['maxId$']) && (this['maxId$'] = _0x13ff83);
            }
            if (_0x18b16a > this['maxId$']) {
                let _0xa16641 = this['idRandomDi' + 'c$'][_0x18b16a];
                return _0xa16641 || (_0xa16641 = this['idRandomDi' + 'c$'][_0x18b16a] = Math['floor'](Math['random']() * this['maxId$']) + 0x1), D['missionBas' + 'ic'][_0xa16641];
            }
            return D['missionBas' + 'ic'][_0x18b16a];
        }
        ['getDrinkDa' + 'taByDrinkI' + 'd$'](_0x122494) {
            null == _0x122494 && (_0x122494 = 0x1);
            for (let _0x3ced78 in D['drinkBasic'])
                if (Number(_0x3ced78) == _0x122494)
                    return this['curDrinkDa' + 'ta'] = D['drinkBasic'][_0x3ced78], D['drinkBasic'][_0x3ced78];
        }
        ['getFruitDa' + 'taByFruitI' + 'd$'](_0x22afa5) {
            null == _0x22afa5 && (_0x22afa5 = 0x1);
            for (let _0xb3cb6 in D['fruitBasic'])
                if (Number(_0xb3cb6) == _0x22afa5)
                    return D['fruitBasic'][_0xb3cb6];
        }
        ['setChoiceS' + 'core$'](_0x232ecf) {
            let _0x149dbe = this['curDrinkDa' + 'ta']['fruitIdArr']['length'];
            this['_choiceSco' + 're'] = _0x232ecf == _0x149dbe ? 0x1 : this['randomScor' + 'e$']();
        }
        ['setDecorat' + 'eScore$'](_0xa302c3) {
            this['_decorateS' + 'core'] = _0xa302c3 <= 0.7 ? this['randomScor' + 'e$']() : 0x1;
        }
        ['setSkillSc' + 'ore$'](_0x423baa) {
            let _0x2fb95d = 0x0;
            for (let _0xd319ff = 0x0; _0xd319ff < _0x423baa['length']; _0xd319ff++)
                _0x2fb95d += _0x423baa[_0xd319ff];
            let _0x4f565d = _0x2fb95d / _0x423baa['length'];
            this['_skillScor' + 'e'] = _0x4f565d > 0.85 ? 0x1 : this['randomScor' + 'e$']();
        }
        ['getTotalSc' + 'ore$']() {
            return this['choiceScor' + 'e'] + this['decorateSc' + 'ore'] + this['skillScore'];
        }
        ['randomScor' + 'e$']() {
            return _0x1faf3f['clam_GameK' + 'ey_p'](0.35, Math['random'](), 0.75);
        }
        get ['choiceScor' + 'e']() {
            return this['_choiceSco' + 're'] || 0x0;
        }
        get ['decorateSc' + 'ore']() {
            return this['_decorateS' + 'core'] || 0x0;
        }
        get ['skillScore']() {
            return this['_skillScor' + 'e'] || 0x0;
        }
        ['clear$']() {
            this['curMission' + 'Data'] = void 0x0, this['curDrinkDa' + 'ta'] = void 0x0;
        }
    }
    class _0x5ed125 {
        constructor() {
            this['showPages'] = [], this['showShopId' + 's'] = [], this['showPageGo' + 'ods'] = {}, this['initConfig']();
        }
        ['initConfig']() {
            let _0x6ee93d, _0x35067b, _0x639a28, _0x5503a3;
            for (_0x6ee93d in D['shop'])
                _0x6ee93d = Number(_0x6ee93d), (_0x639a28 = D['shop'][_0x6ee93d]) && 0x1 == _0x639a28['isShow'] && ((_0x5503a3 = this['showPageGo' + 'ods'][_0x639a28['page']]) || (this['showPageGo' + 'ods'][_0x639a28['page']] = _0x5503a3 = []), _0x5503a3['push'](_0x6ee93d), this['showShopId' + 's']['contains$'](_0x6ee93d) || (this['showShopId' + 's']['push'](_0x6ee93d), _0x35067b = Number(_0x639a28['page']), this['showPages']['contains$'](_0x35067b) || this['showPages']['push'](_0x35067b)));
        }
        ['getShopId'](_0x10ee17, _0x4c485f) {
            let _0x515ffd = this['showPageGo' + 'ods'][_0x10ee17];
            if (!_0x515ffd)
                return;
            let _0x178238, _0x4d953b = _0x515ffd['length'];
            for (; --_0x4d953b > -0x1;)
                if ((_0x178238 = D['shop'][_0x515ffd[_0x4d953b]])['itemId'] == _0x4c485f)
                    return _0x178238['id'];
        }
    }
    _0x5ed125['SHOP_PAGE'] = {
        'FRUIT': 0x1,
        'GLASS': 0x2,
        'DECORATE': 0x3,
        'JUICER': 0x4,
        'HAND': 0x5
    }, _0x5ed125['GOODS'] = {
        'FRUIT': 0x1,
        'GLASS': 0x2,
        'DECORATE': 0x3,
        'JUICER': 0x4,
        'HAND': 0x5
    }, _0x5ed125['BUY_TYPE'] = {
        'MISSION': 0x1,
        'BUY': 0x2,
        'TURNTABLE': 0x3
    };
    class _0x268083 {
        constructor() {
            this['inited'] = !0x1, this['initedCB'] = void 0x0;
        }
        static ['getInstanc' + 'e$']() {
            return null == _0x268083['instance'] && (_0x268083['instance'] = new _0x268083()), _0x268083['instance'];
        }
        get ['isIn_GameK' + 'ey_ited']() {
            return this['inited'];
        }
        ['init'](_0x5d7683) {
            this['initedCB'] = _0x5d7683, this['load_GameK' + 'ey_AllConf' + 'ig']();
        }
        ['load_GameK' + 'ey_AllConf' + 'ig']() {
            this['shopConfig' + '$'] = new _0x5ed125(), this['load_GameK' + 'ey_AllConf' + 'igComplete']();
        }
        ['load_GameK' + 'ey_AllConf' + 'igComplete']() {
            this['inited'] = !0x0, this['initedCB'] && this['initedCB']();
        }
    }
    _0x268083['instance'] = void 0x0;
    class _0x3bf571 {
        constructor() {
            this['cPage'] = void 0x0, this['shopPageDa' + 'tas'] = {}, this['shopShowDa' + 'tas'] = {}, this['initData']();
        }
        ['initData']() {
            let _0xbd117e, _0x2641a6, _0x19c871, _0x1f2b79, _0x119c65 = _0x268083['getInstanc' + 'e$']()['shopConfig' + '$']['showPageGo' + 'ods'];
            if (_0x119c65)
                for (let _0x14da5a in _0x119c65) {
                    for (_0x2641a6 = {
                            'shops': [],
                            'page': Number(_0x14da5a)
                        }, _0x1f2b79 = (_0xbd117e = _0x119c65[_0x14da5a])['length']; --_0x1f2b79 > -0x1;)
                        _0x19c871 = _0xbd117e[_0x1f2b79], _0x2641a6['shops']['push']({ 'id': _0x19c871 });
                    this['shopListCh' + 'ange'](_0x2641a6);
                }
        }
        ['getShopDat' + 'aList'](_0x3baabf) {
            return this['shopShowDa' + 'tas'][_0x3baabf];
        }
        ['shopListCh' + 'ange'](_0xc8b58d) {
            if (this['shopPageDa' + 'tas'][_0xc8b58d['page']] = _0xc8b58d['shops'], this['sortShopLi' + 'st'](this['shopPageDa' + 'tas'][_0xc8b58d['page']]), !_0x268083['getInstanc' + 'e$']()['shopConfig' + '$']['showPages'])
                return;
            let _0x3d334d, _0xfad3a8, _0x1e17eb, _0x3b332f;
            if (this['shopShowDa' + 'tas'][_0xc8b58d['page']] = [], _0x268083['getInstanc' + 'e$']()['shopConfig' + '$']['showPages']['contains$'](_0xc8b58d['page']) && (_0x1e17eb = this['shopPageDa' + 'tas'][_0xc8b58d['page']])) {
                for (_0xfad3a8 = _0x1e17eb['length'], _0x3d334d = 0x0; _0x3d334d < _0xfad3a8; _0x3d334d++)
                    (_0x3b332f = _0x1e17eb[_0x3d334d]) && _0x268083['getInstanc' + 'e$']()['shopConfig' + '$']['showShopId' + 's']['contains$'](_0x3b332f['id']) && this['shopShowDa' + 'tas'][_0xc8b58d['page']]['push'](_0x3b332f);
            }
        }
        ['sortShopLi' + 'st'](_0x5a3b79) {
            let _0x238eab, _0x5c248b, _0x2e0aea, _0x4f5cac, _0x383112, _0x43c9ed, _0x413b77 = _0x5a3b79['length'];
            for (_0x238eab = 0x0; _0x238eab < _0x413b77; _0x238eab++)
                for (_0x5c248b = _0x238eab + 0x1; _0x5c248b < _0x413b77; _0x5c248b++)
                    _0x2e0aea = _0x5a3b79[_0x238eab], _0x4f5cac = _0x5a3b79[_0x5c248b], _0x383112 = D['shop'][_0x2e0aea['id']], _0x43c9ed = D['shop'][_0x4f5cac['id']], _0x383112 ? _0x43c9ed ? (_0x383112['sort'] > _0x43c9ed['sort'] || _0x383112['sort'] == _0x43c9ed['sort'] && _0x383112['id'] > _0x43c9ed['id']) && (_0x5a3b79[_0x238eab] = _0x4f5cac, _0x5a3b79[_0x5c248b] = _0x2e0aea) : (console['log']('商品ID:' + _0x4f5cac['id'] + ('未在客户端找到，请尝' + '试更新！')), _0x5a3b79['removeAt'](_0x5c248b), _0x5c248b--, _0x413b77--) : (console['log']('商品ID:' + _0x2e0aea['id'] + ('未在客户端找到，请尝' + '试更新！')), _0x5a3b79['removeAt'](_0x238eab), _0x238eab--, _0x5c248b--, _0x413b77--);
        }
        ['clear']() {
            this['shopPageDa' + 'tas'] = {}, this['shopShowDa' + 'tas'] = {};
        }
    }
    class _0xe6399d {
        constructor() {
            this['inited'] = !0x1, this['initedCB'] = void 0x0, window['dataMgr'] = this;
        }
        static ['getInstanc' + 'e$']() {
            return null == _0xe6399d['instance'] && (_0xe6399d['instance'] = new _0xe6399d()), _0xe6399d['instance'];
        }
        get ['isIn_GameK' + 'ey_ited']() {
            return this['inited'];
        }
        ['init'](_0x25117e) {
            this['initedCB'] = _0x25117e, this['init_GameK' + 'ey_Datas'](), this['init_GameK' + 'ey_Complet' + 'e']();
        }
        ['init_GameK' + 'ey_Datas']() {
            this['localData$'] = new _0x28d556(), this['settingDat' + 'a$'] = new _0x51da5e(), this['userData$'] = new _0x27f240(), this['drinkData$'] = new _0x70bfb(), this['shopData$'] = new _0x3bf571();
        }
        ['init_GameK' + 'ey_Complet' + 'e']() {
            this['inited'] = !0x0, this['initedCB'] && this['initedCB']();
        }
        ['getInduceC' + 'nt']() {
            let _0x321a5b = Number(_0x28d556['getL_GameK' + 'ey_ocalDat' + 'a'](_0x28d556['KEY']['INDUCE_TIM' + 'E'], 0x0)), _0x43cc3f = 0x0;
            return new Date(_0x321a5b)['toDateStri' + 'ng']() === new Date()['toDateStri' + 'ng']() && (_0x43cc3f = Number(_0x28d556['getL_GameK' + 'ey_ocalDat' + 'a'](_0x28d556['KEY']['INDUCE_CNT'], 0x0))), _0x43cc3f;
        }
        ['addInduceC' + 'nt']() {
            let _0x4dffbf = _0xe6399d['getInstanc' + 'e$']()['getInduceC' + 'nt']();
            _0x28d556['setL_GameK' + 'ey_ocalDat' + 'a'](_0x28d556['KEY']['INDUCE_CNT'], _0x4dffbf + 0x1), _0x28d556['setL_GameK' + 'ey_ocalDat' + 'a'](_0x28d556['KEY']['INDUCE_TIM' + 'E'], Date['now']());
        }
        ['clea_GameK' + 'ey_r']() {
            this['localData$'] && this['localData$']['clear'](), this['settingDat' + 'a$'] && this['settingDat' + 'a$']['clear'](), this['userData$'] && this['userData$']['clear$'](), this['drinkData$'] && this['drinkData$']['clear$']();
        }
    }
    _0xe6399d['instance'] = void 0x0;
    class _0x3830d2 extends Laya['EventDispa' + 'tcher'] {
        constructor() {
            super(), this['inited'] = !0x1, this['initedCB'] = void 0x0, window['eventManag' + 'er'] = this;
        }
        static ['getInstanc' + 'e$']() {
            return null == _0x3830d2['instance'] && (_0x3830d2['instance'] = new _0x3830d2()), _0x3830d2['instance'];
        }
        get ['isIn_GameK' + 'ey_ited']() {
            return this['inited'];
        }
        ['init'](_0x307b56) {
            this['initedCB'] = _0x307b56, this['init_GameK' + 'ey_Complet' + 'e']();
        }
        ['init_GameK' + 'ey_Complet' + 'e']() {
            this['inited'] = !0x0, this['initedCB'] && this['initedCB']();
        }
        ['addE_GameK' + 'ey_ventLis' + 'tener'](_0x5e1561, _0x3f9676, _0x12544e, _0x76785) {
            this['on'](_0x5e1561, _0x3f9676, _0x12544e, _0x76785);
        }
        ['remo_GameK' + 'ey_veEvent' + 'Listener'](_0x2df733, _0x438d36, _0x40c053) {
            this['off'](_0x2df733, _0x438d36, _0x40c053);
        }
        ['disp_GameK' + 'ey_atchEve' + 'nt'](_0x4b7b54, _0x14222f) {
            var _0x1614e8 = {
                'data': _0x14222f,
                'name': _0x4b7b54
            };
            this['event'](_0x4b7b54, _0x1614e8), _0x1614e8 = null;
        }
    }
    _0x3830d2['instance'] = void 0x0;
    class _0x5b5578 {
    }
    _0x5b5578['SCREEN_SIZ' + 'E_CHANGE'] = 0x1, _0x5b5578['MUSIC_VOLU' + 'ME'] = 0x2, _0x5b5578['SOUND_VOLU' + 'ME'] = 0x3, _0x5b5578['ON_EXIT_GA' + 'ME'] = 0x4, _0x5b5578['ON_SHOW_GA' + 'ME'] = 0x5, _0x5b5578['COLLIDER_E' + 'NTER'] = 'colliderEn' + 'ter', _0x5b5578['COLLIDER_S' + 'TAY'] = 'colliderSt' + 'ay', _0x5b5578['COLLIDER_E' + 'XIT'] = 'colliderEx' + 'it', _0x5b5578['TRIGGER_EN' + 'TER'] = 'triggerEnt' + 'er', _0x5b5578['TRIGGER_ST' + 'AY'] = 'triggerSta' + 'y', _0x5b5578['TRIGGER_EX' + 'IT'] = 'triggerExi' + 't', _0x5b5578['ON_DATA_LO' + 'AD'] = 0x3ea, _0x5b5578['ON_START_G' + 'AME'] = 0x3eb, _0x5b5578['REST_FIGHT'] = 0x3ec, _0x5b5578['START_JUIC' + 'E'] = 0x3ed, _0x5b5578['STOP_JUICE'] = 0x3ee, _0x5b5578['OVER_JUICE'] = 0x3ef, _0x5b5578['MACK_JUICE' + '_OK'] = 0x3f0, _0x5b5578['FRUIT_USE_' + 'OVER'] = 0x3f2, _0x5b5578['FILL_FLUID'] = 0x3f3, _0x5b5578['RSP_FILL_U' + 'I_POSES'] = 0x3f4, _0x5b5578['ADORN_STAR' + 'T'] = 0x3f5, _0x5b5578['ADORN_OVER'] = 0x3f6, _0x5b5578['CHANGE_CUP'] = 0x3f7, _0x5b5578['ASK_PLAY_W' + 'ALK_OUT'] = 0x3f8, _0x5b5578['CHANGE_ADO' + 'RN'] = 0x3f9, _0x5b5578['SCENE_LOAD' + 'ED'] = 0x3fa, _0x5b5578['INPUT_MOUS' + 'E_DOWN'] = 0x456, _0x5b5578['INPUT_MOUS' + 'E_MOVE'] = 0x457, _0x5b5578['INPUT_MOUS' + 'E_UP'] = 0x458, _0x5b5578['FIGHT_FAIL'] = 0x459, _0x5b5578['FIGHT_WIN'] = 0x45a, _0x5b5578['GETED_LOOT' + 'BOX'] = 0x45b, _0x5b5578['GETED_COIN'] = 0x45c, _0x5b5578['SCORE_CHAN' + 'GE$'] = 0x45d, _0x5b5578['ADD_SCORE$'] = 0x45e, _0x5b5578['RELIVE$'] = 0x460, _0x5b5578['ON_NET_FAI' + 'LD'] = 0x7d0, _0x5b5578['ON_REGISTE' + 'R_FINISH'] = 0x7d1, _0x5b5578['ON_LOGINGA' + 'ME_FINISH'] = 0x7d2, _0x5b5578['ON_SERVER_' + 'LIST_FINIS' + 'H'] = 0x7d3, _0x5b5578['ON_UPDATE_' + 'WX_USERINF' + 'O'] = 0x7d4, _0x5b5578['ARRIVE_JUI' + 'CE_POS'] = 0xbb8, _0x5b5578['ARRIVE_ADO' + 'RN_POS'] = 0xbb9, _0x5b5578['FRUIT_SEND'] = 0xfa1, _0x5b5578['CUR_JUICER' + '_CHANGE'] = 0xfa2, _0x5b5578['CUR_HAND_C' + 'HANGE'] = 0xfa3;
    class _0x606097 extends Laya['Script'] {
        constructor() {
            super(), this['bubblePane' + 'l$'] = void 0x0, this['needCoins$'] = void 0x0, this['skins$'] = void 0x0, this['btnUp$'] = void 0x0, this['bubblePane' + 'lCtr$'] = void 0x0, this['upName$'] = void 0x0, this['animT$'] = 0x1f4, this['animCountT' + '$'] = void 0x0, this['minScaleY$'] = 0x1, this['maxScaleY$'] = 1.2;
        }
        ['onStart']() {
            this['initData$'](), this['initUI$'](), this['refreshUI$'](), this['monitorBtn' + '$'](), this['monitorEve' + 'nts$']();
        }
        get ['enoughCoin' + '$']() {
            return this['userData$']['coin$'] >= this['needCoin$'];
        }
        get ['curIndex$']() {
            return _0x28d556['getL_GameK' + 'ey_ocalDat' + 'a'](this['upName$'], 0x0);
        }
        get ['needCoin$']() {
            return this['needCoins$'][this['curIndex$']];
        }
        get ['skin$']() {
            return this['skinArray$'][this['curIndex$']];
        }
        ['initData$']() {
            this['skinArray$'] = this['skins$']['split'](','), this['userData$'] = _0xe6399d['getInstanc' + 'e$']()['userData$'];
        }
        ['initUI$']() {
            this['upName$'] = this['owner']['name'], this['btnUp$'] = _0x1faf3f['getC_GameK' + 'ey_hildDee' + 'p'](this['owner'], 'upBtn'), this['bubblePane' + 'lCtr$'] = this['bubblePane' + 'l$']['getCompone' + 'nt'](_0x446464);
        }
        ['refreshUI$']() {
            this['refreshUpB' + 'tnShow$'](), this['owner']['skin'] = this['skin$'];
        }
        ['refreshUpB' + 'tnShow$']() {
            this['animCountT' + '$'] = 0x0, this['btnUp$']['visible'] = this['enoughCoin' + '$'];
        }
        ['monitorBtn' + '$']() {
            _0x1faf3f['onBu_GameK' + 'ey_ttonSca' + 'leEvent'](this['btnUp$'], this, 'onClickBtn' + 'Up$');
        }
        ['monitorEve' + 'nts$']() {
            _0x3830d2['getInstanc' + 'e$']()['addE_GameK' + 'ey_ventLis' + 'tener'](_0x5b5578['GETED_COIN'], this, this['refreshUpB' + 'tnShow$']);
        }
        ['cancelEven' + 'ts$']() {
            _0x3830d2['getInstanc' + 'e$']()['remo_GameK' + 'ey_veEvent' + 'Listener'](_0x5b5578['GETED_COIN'], this, this['refreshUpB' + 'tnShow$']);
        }
        ['onClickBtn' + 'Up$']() {
            this['btnUp$']['visible'] = !0x1, this['bubblePane' + 'lCtr$']['setActive$'](!0x0), this['bubblePane' + 'lCtr$']['refreshUI$'](this['needCoin$']), this['bubblePane' + 'lCtr$']['setClickCa' + 'llback$'](this['onClickPan' + 'el$']['bind'](this)), Laya['Point']['TEMP']['setTo'](this['btnUp$']['x'], this['btnUp$']['y']), this['btnUp$']['parent']['localToGlo' + 'bal'](Laya['Point']['TEMP']), this['bubblePane' + 'l$']['parent']['globalToLo' + 'cal'](Laya['Point']['TEMP']), this['bubblePane' + 'lCtr$']['setPos$'](Laya['Point']['TEMP']['x'], Laya['Point']['TEMP']['y']), this['bubblePane' + 'lCtr$']['setChangeC' + 'allback$'](this['refreshUpB' + 'tnShow$']['bind'](this));
        }
        ['onClickPan' + 'el$']() {
            this['enoughCoin' + '$'] && (this['userData$']['onGetCoin$'](-this['needCoin$']), _0x3830d2['getInstanc' + 'e$']()['disp_GameK' + 'ey_atchEve' + 'nt'](_0x5b5578['GETED_COIN'], -this['needCoin$']), _0x28d556['setL_GameK' + 'ey_ocalDat' + 'a'](this['upName$'], this['curIndex$'] + 0x1), this['refreshUI$']());
        }
        ['refreshUpB' + 'tnAnim$']() {
            this['btnUp$']['visible'] && (this['animCountT' + '$'] += _0x3e110a['getInstanc' + 'e$']()['deltaTime$'], this['animCountT' + '$'] > this['animT$'] && (this['animCountT' + '$'] %= this['animT$']), this['btnUp$']['scaleY'] = Laya['Ease']['backOut'](this['animCountT' + '$'] / this['animT$'], this['minScaleY$'], this['maxScaleY$'] - this['minScaleY$'], 0x1));
        }
        ['onUpdate']() {
            this['refreshUpB' + 'tnAnim$']();
        }
        ['onDestroy']() {
            this['cancelEven' + 'ts$']();
        }
    }
    class _0x5a29eb {
    }
    _0x5a29eb['LAYER_BG'] = 'bg', _0x5a29eb['LAYER_MAIN' + 'UI'] = 'main_ui', _0x5a29eb['LAYER_NORM' + 'AL'] = 'normal', _0x5a29eb['LAYER_TOP'] = 'top', _0x5a29eb['LAYER_MESS' + 'AGE'] = 'msg';
    class _0x3a41f3 {
        constructor() {
            this['inited'] = !0x1, this['initedCB'] = void 0x0, this['uis'] = {}, this['layers'] = {}, this['baseWindow' + 'Class'] = Laya['CyzClassMa' + 'p']['BaseWindow'], window['uiMgr'] = this;
        }
        static ['getInstanc' + 'e$']() {
            return null == _0x3a41f3['instance'] && (_0x3a41f3['instance'] = new _0x3a41f3()), _0x3a41f3['instance'];
        }
        get ['isIn_GameK' + 'ey_ited']() {
            return this['inited'];
        }
        ['init'](_0x35039d) {
            this['initedCB'] = _0x35039d, this['bg$'] = Laya['stage']['addChild'](new Laya['Image']('battle/bg.' + 'jpg')), this['bg$']['left'] = this['bg$']['right'] = this['bg$']['top'] = this['bg$']['bottom'] = 0x0;
            var _0x28acca = 0x0, _0x63488c = this['crea_GameK' + 'ey_teBox']();
            Laya['stage']['addChild'](_0x63488c), this['layers'][_0x5a29eb['LAYER_BG']] = _0x63488c, _0x28acca += 0x64, _0x63488c['zOrder'] = _0x28acca;
            var _0x29c36c = this['crea_GameK' + 'ey_teBox']();
            Laya['stage']['addChild'](_0x29c36c), this['layers'][_0x5a29eb['LAYER_MAIN' + 'UI']] = _0x29c36c, _0x28acca += 0x64, _0x29c36c['zOrder'] = _0x28acca;
            var _0x25f24a = this['crea_GameK' + 'ey_teBox']();
            Laya['stage']['addChild'](_0x25f24a), this['layers'][_0x5a29eb['LAYER_NORM' + 'AL']] = _0x25f24a, _0x28acca += 0x64, _0x25f24a['zOrder'] = _0x28acca;
            var _0xe3f5d7 = this['crea_GameK' + 'ey_teBox']();
            Laya['stage']['addChild'](_0xe3f5d7), this['layers'][_0x5a29eb['LAYER_TOP']] = _0xe3f5d7, _0x28acca += 0x64, _0xe3f5d7['zOrder'] = _0x28acca;
            var _0x2d610e = this['crea_GameK' + 'ey_teBox']();
            Laya['stage']['addChild'](_0x2d610e), this['layers'][_0x5a29eb['LAYER_MESS' + 'AGE']] = _0x2d610e, _0x28acca += 0x64, _0x2d610e['zOrder'] = _0x28acca, this['init_GameK' + 'ey_Complet' + 'e']();
        }
        ['crea_GameK' + 'ey_teBox']() {
            var _0x38413b = new Laya['Box']();
            return _0x38413b['left'] = 0x0, _0x38413b['right'] = 0x0, _0x38413b['top'] = 0x0, _0x38413b['bottom'] = 0x0, _0x38413b['mouseThrou' + 'gh'] = !0x0, _0x38413b;
        }
        ['init_GameK' + 'ey_Complet' + 'e']() {
            this['inited'] = !0x0, this['initedCB'] && this['initedCB']();
        }
        ['getU_GameK' + 'ey_I'](_0x53cc85) {
            var _0x2ebb9a = this['uis'][_0x53cc85['className']];
            return _0x2ebb9a && _0x2ebb9a['last$']();
        }
        ['open_GameK' + 'ey_UI'](_0x9bf780, _0x42feac, ..._0x1a9728) {
            if (_0x9bf780['uiConfig']['only'] && this['getU_GameK' + 'ey_I'](_0x9bf780))
                return _0x42feac && _0x42feac(), this['getU_GameK' + 'ey_I'](_0x9bf780);
            var _0x88770c = this['crea_GameK' + 'ey_teSurre' + 'nal'](_0x9bf780);
            Laya['loader']['create'](_0x9bf780['url'], Laya['Handler']['create'](this, _0x1f3e1 => {
                if (_0x9bf780['uiConfig']['only'] && this['getU_GameK' + 'ey_I'](_0x9bf780))
                    return;
                let _0xb0e5b1 = new Laya['Prefab']();
                _0xb0e5b1['json'] = _0x1f3e1;
                let _0xde884 = _0xb0e5b1['create'](), _0x35d42a = _0xde884['getCompone' + 'nt'](_0x9bf780);
                _0x35d42a['init'](_0x1a9728, _0x42feac, _0x88770c), this['uis'][_0x9bf780['className']] || (this['uis'][_0x9bf780['className']] = []), this['uis'][_0x9bf780['className']]['push'](_0x35d42a);
                let _0x3d0326 = _0x9bf780['uiConfig']['layer'], _0x7c1e02 = this['layers'][_0x3d0326];
                _0x7c1e02 && _0x7c1e02['addChild'](_0xde884);
            }));
        }
        ['crea_GameK' + 'ey_teComp'](_0x1dbb0c, _0x21da83, _0x9ad084, ..._0x5190ce) {
            Laya['loader']['create'](_0x21da83['url'], Laya['Handler']['create'](this, _0x12388c => {
                if (_0x1dbb0c['destroyed'])
                    return;
                let _0x4f5e47 = new Laya['Prefab']();
                _0x4f5e47['json'] = _0x12388c;
                let _0x2f2b30 = _0x4f5e47['create']();
                _0x2f2b30['getCompone' + 'nt'](_0x21da83)['init'](_0x5190ce, _0x9ad084), _0x1dbb0c && _0x1dbb0c['addChild'](_0x2f2b30);
            }));
        }
        ['crea_GameK' + 'ey_tePrefa' + 'b'](_0x223d15, _0x58f12e, _0x4e7e58) {
            Laya['loader']['create'](_0x223d15, Laya['Handler']['create'](this, _0x552664 => {
                if (_0x58f12e['destroyed'])
                    return;
                let _0x3c6f15 = new Laya['Prefab']();
                _0x3c6f15['json'] = _0x552664;
                let _0x596b21 = _0x3c6f15['create']();
                _0x58f12e && _0x58f12e['addChild'](_0x596b21), _0x4e7e58 && _0x4e7e58(_0x596b21);
            }));
        }
        ['crea_GameK' + 'ey_teSurre' + 'nal'](_0x367372) {
            if (!_0x367372['uiConfig']['needUISurr' + 'enal'])
                return null;
            var _0xfe6b72 = _0x367372['uiConfig']['layer'], _0x433ee4 = this['crea_GameK' + 'ey_teBox']();
            _0x433ee4['mouseThrou' + 'gh'] = !0x1;
            var _0x5219f2 = this['layers'][_0xfe6b72];
            return _0x5219f2 && _0x5219f2['addChild'](_0x433ee4), _0x1faf3f['onBu_GameK' + 'ey_ttonEve' + 'nt'](_0x433ee4), _0x433ee4;
        }
        ['getL_GameK' + 'ey_ayer'](_0x1824ec) {
            return this['layers'][_0x1824ec];
        }
        ['clos_GameK' + 'ey_eUI'](_0x278ddc) {
            var _0x5a5724 = this['uis'][_0x278ddc['constructo' + 'r']['className']];
            _0x5a5724 && _0x5a5724['remove$'](_0x278ddc), _0x278ddc['owner']['destroy']();
        }
        ['clos_GameK' + 'ey_eAll']() {
            for (var _0x5db83a in this['uis']) {
                var _0x2391a0 = this['uis'][_0x5db83a];
                if (!(_0x2391a0 instanceof Array))
                    continue;
                let _0x42201e = _0x2391a0['length'];
                for (; --_0x42201e > -0x1;) {
                    var _0x4daa04 = _0x2391a0[_0x42201e];
                    _0x4daa04 instanceof this['baseWindow' + 'Class'] && !_0x4daa04['constructo' + 'r']['uiConfig']['notClose'] && (_0x4daa04['destroy'](), _0x2391a0['removeAt$'](_0x42201e));
                }
            }
        }
    }
    _0x3a41f3['instance'] = void 0x0;
    class _0x1fc701 extends Laya['Script'] {
        constructor() {
            super(), this['finishCb'] = void 0x0, this['_eve_GameK' + 'ey_nts'] = [], this['_bannerAct' + 'Index'] = void 0x0;
        }
        ['onStart']() {
            this['owner']['visible'] = !0x1, this['constructo' + 'r']['uiConfig']['bannerId'] || this['onUI_GameK' + 'ey_Load']();
        }
        ['onUI_GameK' + 'ey_Load']() {
            this['_isClosed'] || (this['owner']['visible'] = !0x0, this['uiSurrenal'] && this['uiSurrenal']['destroy'](), this['uiSurrenal'] = void 0x0, Laya['timer']['callLater'](this, function () {
                this['finishCb'] && this['finishCb'](this['ui']);
            }));
        }
        ['init_GameK' + 'ey_Data']() {
        }
        ['moni_GameK' + 'ey_torBtns']() {
        }
        ['init'](_0x430106, _0x4932c3, _0x2cfc0a) {
            this['args'] = _0x430106, this['finishCb'] = _0x4932c3, this['uiSurrenal'] = _0x2cfc0a, this['init_GameK' + 'ey_Data']();
        }
        ['addE_GameK' + 'ey_ventLis' + 'tener'](_0x2c71b1, _0x4d3d39) {
            _0x3830d2['getInstanc' + 'e$']()['addE_GameK' + 'ey_ventLis' + 'tener'](_0x2c71b1, this, _0x4d3d39), this['_eve_GameK' + 'ey_nts']['push']({
                'e': _0x2c71b1,
                'cn': _0x4d3d39
            });
        }
        ['remo_GameK' + 'ey_veEvent' + 'Listener'](_0x3d924b, _0x352475) {
            for (var _0x23fa63, _0x30dc4a = this['_eve_GameK' + 'ey_nts']['length']; --_0x30dc4a > -0x1;)
                if ((_0x23fa63 = this['_eve_GameK' + 'ey_nts'][_0x30dc4a])['e'] == _0x3d924b && _0x23fa63['cn'] == _0x352475) {
                    this['_eve_GameK' + 'ey_nts']['removeAt'](_0x30dc4a);
                    break;
                }
        }
        ['remo_GameK' + 'ey_veAllEv' + 'entListene' + 'r']() {
            for (var _0x2fb1e4; this['_eve_GameK' + 'ey_nts']['length'];)
                _0x2fb1e4 = this['_eve_GameK' + 'ey_nts']['shift'](), _0x3830d2['getInstanc' + 'e$']()['remo_GameK' + 'ey_veEvent' + 'Listener'](_0x2fb1e4['e'], this, _0x2fb1e4['cn']);
            this['_eve_GameK' + 'ey_nts'] = [];
        }
        ['crea_GameK' + 'ey_teBanne' + 'rByUI'](_0x3d408b, _0x659d2b) {
            this['_bannerUI'] = _0x3d408b;
        }
        ['hide_GameK' + 'ey_Banner']() {
        }
        ['reba_GameK' + 'ey_ckBanne' + 'r']() {
            this['_bannerAct' + 'Index'] = void 0x0;
        }
        ['refr_GameK' + 'ey_eshBann' + 'er']() {
            this['bannerChan' + 'geCnt']--, this['bannerChan' + 'geCnt'] < 0x0 || (Laya['timer']['once'](this['bannerChan' + 'geSpacing'], this, this['refr_GameK' + 'ey_eshBann' + 'er']), 0x1 == bannerState && (this['isLoadingN' + 'ewBanner'] || (this['isLoadingN' + 'ewBanner'] = !0x0)));
        }
        ['onLoadedNe' + 'wBanner'](_0x3373e2) {
            this['isLoadingN' + 'ewBanner'] = !0x1, _0x3373e2 && 0x1 == bannerState && (this['_bannerUI']['destroyed'] || (this['reba_GameK' + 'ey_ckBanne' + 'r'](), this['bannerId'] = this['nextBanner' + 'Id'], this['crea_GameK' + 'ey_teBanne' + 'rByUI'](this['_bannerUI'])));
        }
        ['doCl_GameK' + 'ey_ose']() {
            this['_isClosed'] || (this['uiSurrenal'] && this['uiSurrenal']['destroy'](), this['uiSurrenal'] = void 0x0, this['reba_GameK' + 'ey_ckBanne' + 'r'](), this['_isClosed'] = !0x0, this['remo_GameK' + 'ey_veAllEv' + 'entListene' + 'r'](), Laya['timer']['clearAll'](this), _0x3a41f3['getInstanc' + 'e$']()['clos_GameK' + 'ey_eUI'](this), this['args'] && this['args']['closeHandl' + 'er'] && this['args']['closeHandl' + 'er']['run']());
        }
        ['destroy']() {
            this['doCl_GameK' + 'ey_ose']();
        }
    }
    _0x1fc701['url'] = '', _0x1fc701['className'] = '', _0x1fc701['uiConfig'] = {
        'layer': _0x5a29eb['LAYER_NORM' + 'AL'],
        'only': !0x0,
        'needUISurrenal': !0x0,
        'notClose': !0x1,
        'bannerId': void 0x0
    };
    class _0x1bf616 extends _0x1fc701 {
        constructor() {
            super(), this['winName'] = '沙滩界面';
        }
        ['onUI_GameK' + 'ey_Load']() {
            super['onUI_GameK' + 'ey_Load'](), this['btn_start$'] = _0x1faf3f['getC_GameK' + 'ey_hildDee' + 'p'](this['owner'], 'btn_start'), this['label_day$'] = _0x1faf3f['getC_GameK' + 'ey_hildDee' + 'p'](this['owner'], 'label_day'), this['coinNum$'] = _0x1faf3f['getC_GameK' + 'ey_hildDee' + 'p'](this['owner'], 'label_coin' + 'Num'), this['label_day$']['text'] = 'DAY' + _0xe6399d['getInstanc' + 'e$']()['userData$']['mission$'] + '\x20', this['refreshCoi' + 'nUI$'](), this['moni_GameK' + 'ey_torBtns'](), this['monitorEve' + 'nts$']();
        }
        ['moni_GameK' + 'ey_torBtns']() {
            _0x1faf3f['onBu_GameK' + 'ey_ttonSca' + 'leEvent'](this['btn_start$'], this, 'onClickSta' + 'rt$');
        }
        ['monitorEve' + 'nts$']() {
            this['addE_GameK' + 'ey_ventLis' + 'tener'](_0x5b5578['GETED_COIN'], this['refreshCoi' + 'nUI$']);
        }
        ['refreshCoi' + 'nUI$']() {
            let _0x10b6ef = _0xe6399d['getInstanc' + 'e$']()['userData$']['coin$'];
            this['coinNum$']['text'] = _0x1faf3f['coinNumSho' + 'w$'](_0x10b6ef);
        }
        ['onClickSta' + 'rt$']() {
            platform['getInstanc' + 'e']()['showInters' + 'titial'](() => {
                console('Beac'), this['doCl_GameK' + 'ey_ose']();
            });
        }
    }
    _0x1bf616['url'] = 'Prefab/Bat' + 'tle/BeachW' + 'indow.json', _0x1bf616['className'] = 'BeachUI', _0x1bf616['uiConfig'] = {
        'layer': _0x5a29eb['LAYER_NORM' + 'AL'],
        'only': !0x0,
        'needUISurrenal': !0x0,
        'notClose': !0x1
    };
    class _0x38bfcf extends Laya['Script'] {
        constructor() {
            super(), this['canShowBan' + 'ner$'] = !0x0;
        }
        ['onStart']() {
            window['pgdk$'] && pgdk$['hideBanner' + '$'](), window['pgdk$'] && pgdk$['onUIOpen$'](this), this['boxBanner$'] && (this['boxBanner$']['alpha'] = 0x0), this['autoShowBa' + 'nner$'] && this['restoreBan' + 'ner$']();
        }
        ['restoreBan' + 'ner$']() {
            this['canShowBan' + 'ner$'] && this['_createBan' + 'nerByUI$']();
        }
        ['_createBan' + 'nerByUI$']() {
            if (!this['boxBanner$'])
                return;
            Laya['stage']['height'] > 0x500 && 'number' == typeof this['boxBanner$']['bottom'] && (this['boxBanner$']['bottom'] = 0x3c);
            let _0x3b09e1 = this['boxBanner$']['localToGlo' + 'bal'](new Laya['Point'](0x0, 0x0)), _0x534536 = this['boxBanner$']['localToGlo' + 'bal'](new Laya['Point'](this['boxBanner$']['width'], this['boxBanner$']['height'])), _0x5cab7d = _0x3b09e1['x'], _0x1212f9 = _0x3b09e1['y'], _0x19ebdb = _0x534536['x'] - _0x3b09e1['x'], _0xa97527 = _0x534536['y'] - _0x3b09e1['y'], _0x40db26 = Laya['stage']['width'] / Laya['Browser']['clientWidt' + 'h'], _0x5e4a4b = Laya['stage']['height'] / Laya['Browser']['clientHeig' + 'ht'], _0x5f787a = {
                    'left': _0x5cab7d / _0x40db26,
                    'top': _0x1212f9 / _0x5e4a4b,
                    'width': _0x19ebdb / _0x40db26,
                    'height': _0xa97527 / _0x5e4a4b
                }, _0x48db94 = {
                    'top': this['top$'],
                    'bottom': this['bottom$'],
                    'left': this['left$'],
                    'right': this['right$']
                };
        }
        ['onEnable']() {
        }
        ['onDisable']() {
        }
        ['onDestroy']() {
        }
    }
    class _0x5ad3aa {
        constructor() {
        }
        static ['init']() {
            _0x3830d2['getInstanc' + 'e$']()['addE_GameK' + 'ey_ventLis' + 'tener'](_0x5b5578['SCREEN_SIZ' + 'E_CHANGE'], null, _0x5ad3aa['onRe_GameK' + 'ey_size']);
        }
        static ['crea_GameK' + 'ey_teUIMod' + 'el'](_0x36d49c, _0x11b12d, _0x351898) {
            return _0x5ad3aa['uiModelDic'] || (_0x5ad3aa['uiModelDic'] = {}, _0x5ad3aa['uiModelMax' + 'Id'] = 0x0), _0x36d49c['UMId'] || (_0x36d49c['UMId'] = ++_0x5ad3aa['uiModelMax' + 'Id']), _0x5ad3aa['getU_GameK' + 'ey_IData'](_0x36d49c, !0x0), Laya['CyzClassMa' + 'p']['UIMode3D']['create'](_0x36d49c, _0x11b12d, _0x351898);
        }
        static ['onRe_GameK' + 'ey_size']() {
            _0x5ad3aa['resi_GameK' + 'ey_zeScene' + 's']();
        }
        static ['resi_GameK' + 'ey_zeScene' + 's']() {
            if (!_0x5ad3aa['uiModelDic'])
                return;
            let _0x20a896;
            for (_0x20a896 in _0x5ad3aa['uiModelDic'])
                _0x5ad3aa['resi_GameK' + 'ey_zeScene'](_0x5ad3aa['uiModelDic'][_0x20a896]);
        }
        static ['getU_GameK' + 'ey_IData'](_0x540561, _0x4432af) {
            let _0x46326c = _0x5ad3aa['uiModelDic'][_0x540561['UMId']];
            if (!_0x46326c && _0x4432af) {
                _0x5ad3aa['uiModelDic'][_0x540561['UMId']] = _0x46326c = {};
                let _0x74af87 = _0x540561['addChild'](new Laya['Scene3D']());
                _0x74af87['ambientCol' + 'or'] = new Laya['Vector3'](0.3, 0.3, 0.3);
                let _0x2c219e = _0x74af87['addChild'](new Laya['Camera'](0x0, 0.1, 0x3e8));
                _0x2c219e['transform']['rotate'](new Laya['Vector3'](0x0, 0xb4, 0x0), !0x0, !0x1), _0x2c219e['transform']['position'] = new Laya['Vector3'](0x0, 0x0, -0x1f4), _0x2c219e['orthograph' + 'ic'] = !0x0, _0x2c219e['orthograph' + 'icVertical' + 'Size'] = 0x5, _0x2c219e['clearFlag'] = Laya['BaseCamera']['CLEARFLAG_' + 'DEPTHONLY'], _0x46326c['camera'] = _0x2c219e, _0x46326c['scene'] = _0x74af87, _0x5ad3aa['resi_GameK' + 'ey_zeScene'](_0x46326c);
            }
            return _0x46326c;
        }
        static ['get3_GameK' + 'ey_DUIPos'](_0x2ac225, _0x13b212, _0x106c4d, _0x4f6739) {
            if (!_0x106c4d)
                return null;
            _0x4f6739 || (_0x4f6739 = new Laya['Vector3']());
            var _0x245e01 = _0x5ad3aa['getU_GameK' + 'ey_IData'](_0x106c4d), _0x5e0edb = _0x245e01['sceneStage' + 'Rate'], _0x3284fc = _0x245e01['camera'];
            return _0x4f6739['x'] = (_0x2ac225 - 0.5 * Laya['stage']['width']) * _0x5e0edb['x'] + _0x3284fc['transform']['position']['x'], _0x4f6739['y'] = (_0x13b212 - 0.5 * Laya['stage']['height']) * _0x5e0edb['y'] + _0x3284fc['transform']['position']['y'], _0x4f6739['z'] = _0x3284fc['transform']['position']['z'] + 0x64, _0x4f6739;
        }
        static ['resi_GameK' + 'ey_zeScene'](_0x147403) {
            let _0x462e4e = _0x147403['camera'], _0x899084 = new Laya['Vector3'](0x0, 0x0, 0x0), _0x5d11f7 = new Laya['Vector3'](0x0, 0x0, 0x0), _0x1e84bf = new Laya['Vector3'](0x0, 0x0, 0x0);
            _0x462e4e['convertScr' + 'eenCoordTo' + 'Orthograph' + 'icCoord'](_0x1e84bf, _0x899084);
            let _0xb775d1 = Laya['RenderStat' + 'e']['clientWidt' + 'h'] / Laya['stage']['width'] || 0x1, _0x41dd61 = Laya['RenderStat' + 'e']['clientHeig' + 'ht'] / Laya['stage']['height'] || 0x1;
            _0x1e84bf = new Laya['Vector3'](_0xb775d1, _0x41dd61, 0x0), _0x462e4e['convertScr' + 'eenCoordTo' + 'Orthograph' + 'icCoord'](_0x1e84bf, _0x5d11f7), _0x147403['sceneStage' + 'Rate'] = new Laya['Vector2'](_0x5d11f7['x'] - _0x899084['x'], _0x5d11f7['y'] - _0x899084['y']);
        }
        static ['dest_GameK' + 'ey_royUIMo' + 'del'](_0x562a90, _0x1b7f76) {
            let _0x220f96 = _0x5ad3aa['getU_GameK' + 'ey_IData'](_0x562a90);
            _0x220f96 && (_0x220f96['scene']['destroy'](), delete _0x5ad3aa['uiModelDic'][_0x562a90['UMId']], _0x562a90['UMId'] = void 0x0);
        }
        static ['getL_GameK' + 'ey_ocalPos' + 'ition'](_0x2a93fe, _0x4c5d8a, _0x210761) {
            let _0x5633e8 = _0x2a93fe['worldMatri' + 'x'];
            _0x210761 || (_0x210761 = new Laya['Vector3']());
            var _0x1ac2c6 = Laya['Transform3' + 'D']['_tempMatri' + 'x0'];
            return _0x5633e8['invert'](_0x1ac2c6), Laya['Vector3']['transformC' + 'oordinate'](_0x4c5d8a, _0x1ac2c6, _0x210761), _0x210761;
        }
        static ['getL_GameK' + 'ey_ocalRot' + 'ation'](_0x521fe2, _0x196b2d, _0x51e2d0) {
            return _0x51e2d0 || (_0x51e2d0 = new Laya['Quaternion']()), null != _0x521fe2 ? (_0x521fe2['rotation']['invert'](Laya['Transform3' + 'D']['_tempQuate' + 'rnion0']), Laya['Quaternion']['multiply'](Laya['Transform3' + 'D']['_tempQuate' + 'rnion0'], _0x196b2d, _0x51e2d0)) : _0x196b2d['cloneTo'](_0x51e2d0), _0x51e2d0;
        }
        static ['getL_GameK' + 'ey_ocalSca' + 'le'](_0x594eb5, _0x59a73f, _0x27f35b) {
            if (_0x27f35b || (_0x27f35b = new Laya['Vector3']()), null !== _0x594eb5) {
                let _0x4aabac = Laya['Transform3' + 'D']['_tempMatri' + 'x3x33'], _0x145627 = Laya['Transform3' + 'D']['_tempMatri' + 'x3x33'], _0x211c97 = _0x145627['elements'], _0x26ee99 = _0x594eb5['_getScaleM' + 'atrix']();
                _0x26ee99['invert'](_0x26ee99), Laya['Matrix3x3']['createFrom' + 'Scaling'](_0x59a73f, _0x4aabac), Laya['Matrix3x3']['multiply'](_0x26ee99, _0x4aabac, _0x145627), _0x27f35b['x'] = _0x211c97[0x0], _0x27f35b['y'] = _0x211c97[0x4], _0x27f35b['z'] = _0x211c97[0x8];
            } else
                _0x59a73f['cloneTo'](_0x27f35b);
            return _0x27f35b;
        }
        static ['refreshRig' + 'idbodysCol' + 'liderShape'](_0x32d9b4) {
            let _0x5c8c3b = _0x32d9b4['getCompone' + 'nt'](Laya['Rigidbody3' + 'D']);
            if (_0x5c8c3b && _0x5ad3aa['refreshSin' + 'gleRigidbo' + 'dyCollider' + 'Shape'](_0x5c8c3b, _0x32d9b4), !_0x32d9b4['_children'])
                return;
            let _0x52a090 = _0x32d9b4['_children']['length'];
            for (; --_0x52a090 > -0x1;)
                _0x5ad3aa['refreshRig' + 'idbodysCol' + 'liderShape'](_0x32d9b4['_children'][_0x52a090]);
        }
        static ['refreshSin' + 'gleRigidbo' + 'dyCollider' + 'Shape'](_0x9dfceb, _0x1e5989) {
            let _0x278e8e = _0x1e5989['getCompone' + 'nt'](Laya['Rigidbody3' + 'D']);
            if (_0x278e8e && _0x278e8e != _0x9dfceb)
                return;
            let _0x4edd9f = _0x1e5989['getCompone' + 'nt'](Laya['PhysicsCol' + 'lider']);
            if (_0x4edd9f) {
                let _0x5ad586 = _0x4edd9f['colliderSh' + 'ape']['clone']();
                _0x5ad586['_localRota' + 'tion'] = _0x5ad3aa['getL_GameK' + 'ey_ocalRot' + 'ation'](_0x9dfceb['owner']['transform'], _0x1e5989['transform']['rotation']), _0x5ad586['_scale'] = _0x5ad3aa['getL_GameK' + 'ey_ocalSca' + 'le'](_0x9dfceb['owner']['transform'], _0x1e5989['transform']['getWorldLo' + 'ssyScale']()), _0x5ad586['_localOffs' + 'et'] = _0x5ad3aa['getL_GameK' + 'ey_ocalPos' + 'ition'](_0x9dfceb['owner']['transform'], _0x1e5989['transform']['position']), _0x5ad586['updateLoca' + 'lTransform' + 'ations'](), _0x1e5989['_destroyCo' + 'mponent'](_0x4edd9f), _0x9dfceb['colliderSh' + 'ape'] || (_0x9dfceb['colliderSh' + 'ape'] = new Laya['CompoundCo' + 'lliderShap' + 'e']()), _0x9dfceb['colliderSh' + 'ape']['addChildSh' + 'ape'] && _0x9dfceb['colliderSh' + 'ape']['addChildSh' + 'ape'](_0x5ad586);
            }
            if (!_0x1e5989['_children'])
                return;
            let _0x30203f = _0x1e5989['_children']['length'];
            for (; --_0x30203f > -0x1;)
                _0x5ad3aa['refreshSin' + 'gleRigidbo' + 'dyCollider' + 'Shape'](_0x9dfceb, _0x1e5989['_children'][_0x30203f]);
        }
        static ['getMeshObj' + 's$'](_0x44047b) {
            let _0x3f5c9d = [];
            (_0x44047b instanceof Laya['MeshSprite' + '3D'] || _0x44047b instanceof Laya['SkinnedMes' + 'hSprite3D']) && _0x3f5c9d['push'](_0x44047b);
            let _0xcfacaa, _0x19a02d, _0xb6bd80 = _0x44047b['_children'], _0x27b635 = _0xb6bd80['length'];
            for (; --_0x27b635 > -0x1;)
                for (_0x19a02d = (_0xcfacaa = _0x5ad3aa['getMeshObj' + 's$'](_0xb6bd80[_0x27b635]))['length']; --_0x19a02d > -0x1;)
                    _0x3f5c9d['push'](_0xcfacaa[_0x19a02d]);
            return _0x3f5c9d;
        }
    }
    class _0x42867c extends Laya['Script'] {
        constructor() {
            super(), this['_modelId'] = 0x0, this['sprite'] = null, this['_animator'] = null, this['avater'] = null, this['_canimator' + 's'] = [], this['_parent'] = null, this['_addModels'] = [], this['_bones'] = {}, this['_loadedHan' + 'dler'] = null, this['_position'] = new Laya['Vector3'](NaN, NaN, NaN), this['_localPosi' + 'tion'] = new Laya['Vector3'](0x0, 0x0, 0x0), this['_localScal' + 'e'] = new Laya['Vector3'](0x1, 0x1, 0x1), this['_localRota' + 'tion'] = new Laya['Vector3'](0x0, 0x0, 0x0), this['loaded'] = !0x1, this['_active'] = !0x0, this['_config'] = void 0x0, this['_name'] = void 0x0, this['_isDestroy' + 'ed'] = void 0x0, this['_isOrbit'] = void 0x0, this['_adds'] = void 0x0, this['_addLoadIn' + 'dex'] = void 0x0, this['isPauseEmi' + 'ssion$'] = !0x1;
        }
        ['reset'](_0x4774be, _0x5aabcb, _0x2f8625) {
            this['_parent'] = _0x4774be, this['_modelId'] = _0x5aabcb, this['_loadedHan' + 'dler'] = _0x2f8625, this['_isDestroy' + 'ed'] = !0x1, this['_config'] = D['PrefabsPat' + 'h'][_0x5aabcb];
            var _0x3b9e9b = this['_config']['chs'];
            if (this['_name'] = _0x3b9e9b['substring'](_0x3b9e9b['lastIndexO' + 'f']('/') + 0x1), this['setLocalSc' + 'ale'](this['_config']['scale']), this['_isOrbit'] = !!this['_config']['path'], this['_adds'] = [], this['_addLoadIn' + 'dex'] = 0x0, this['_config']['additional' + 'Id'])
                for (var _0x43c0e2 = this['_config']['additional' + 'Id']['split']('&'), _0x97f31c = 0x0; _0x97f31c < _0x43c0e2['length']; _0x97f31c++) {
                    var _0xcce226 = _0x43c0e2[_0x97f31c]['split']('#');
                    this['_adds']['push']([
                        _0xcce226[0x0],
                        _0xcce226[0x1]
                    ]);
                }
            this['_isOrbit'] ? this['creareOrbi' + 't']() : this['create']();
        }
        ['create']() {
            if (this['loaded'])
                Laya['timer']['once'](0x1, this, this['_onA_GameK' + 'ey_llCompl' + 'eted']);
            else {
                let _0x3e0678 = this['_modelId'];
                _0x42867c['prepareLoa' + 'd']([this['_modelId']], Laya['Handler']['create'](this, this['_onC_GameK' + 'ey_omplete'], [_0x3e0678]));
            }
        }
        ['_onC_GameK' + 'ey_omplete'](_0x4f1b97) {
            if (_0x4f1b97 == this['_modelId'] && !this['_isDestroy' + 'ed']) {
                var _0x41a36f = this['_config']['chs'];
                if (_0x41a36f['endWith$']('.lh') || (_0x41a36f += '/' + this['_name'] + '.lh'), this['sprite'] = Laya['Loader']['getRes'](_0x41a36f), this['sprite']) {
                    this['sprite'] = Laya['Sprite3D']['instantiat' + 'e'](this['sprite']), this['sprite']['$model'] = this, this['sprite']['$name'] = 'Model_' + this['_modelId'], this['avater'] = _0x1faf3f['getA_GameK' + 'ey_vater'](this['sprite']), this['avater'] && (this['_animator'] = this['avater']['getCompone' + 'nt'](Laya['Animator']));
                    for (var _0x511c55 = 0x0; _0x511c55 < this['_adds']['length']; _0x511c55++) {
                        var _0x14caac = this['_adds'][_0x511c55];
                        _0x42867c['create'](this['getBone'](_0x14caac[0x1]), _0x14caac[0x0]);
                    }
                    Laya['timer']['once'](0x1, this, this['_onA_GameK' + 'ey_llCompl' + 'eted']);
                }
            }
        }
        ['changePare' + 'nt'](_0x591d5c) {
            let _0x20d8cd = this['sprite']['transform']['position']['clone'](), _0x38c7c0 = this['sprite']['transform']['rotationEu' + 'ler']['clone'](), _0x5409bd = this['sprite']['transform']['getWorldLo' + 'ssyScale']()['clone']();
            this['sprite']['removeSelf'](), this['_parent'] = _0x591d5c, this['_parent']['addChild'](this['sprite']), this['sprite']['transform']['position'] = _0x20d8cd, this['sprite']['transform']['rotationEu' + 'ler'] = _0x38c7c0, this['sprite']['transform']['setWorldLo' + 'ssyScale'](_0x5409bd);
        }
        ['setPositio' + 'n'](_0x2f3d48, _0x1de3d9, _0x210d5c) {
            _0x1faf3f['setV_GameK' + 'ey_ector3'](this['_position'], _0x2f3d48, _0x1de3d9, _0x210d5c), this['loaded'] && (this['sprite']['transform']['position'] = this['_position']);
        }
        ['setLocalPo' + 'sition'](_0x138539, _0x4e23cb, _0x1cc2fe) {
            _0x1faf3f['setV_GameK' + 'ey_ector3'](this['_localPosi' + 'tion'], _0x138539, _0x4e23cb, _0x1cc2fe), this['loaded'] && (this['sprite']['transform']['localPosit' + 'ion'] = this['_localPosi' + 'tion']);
        }
        ['setLocalSc' + 'ale'](_0x179ef1, _0x4f18bf, _0x364e8a) {
            void 0x0 === _0x179ef1 && (_0x179ef1 = 0x1), void 0x0 === _0x4f18bf && (_0x4f18bf = _0x179ef1), void 0x0 === _0x364e8a && (_0x364e8a = _0x179ef1), _0x1faf3f['setV_GameK' + 'ey_ector3'](this['_localScal' + 'e'], _0x179ef1, _0x4f18bf, _0x364e8a), this['loaded'] && (this['sprite']['transform']['localScale'] = this['_localScal' + 'e']['clone'](), _0x1faf3f['rese_GameK' + 'ey_tScale'](this['sprite']));
        }
        ['setLocalRo' + 'tation'](_0x3c4bac, _0x5f4ea0, _0x5ef6ff, _0x26e885) {
            _0x26e885 || (_0x3c4bac *= _0x17c88d['RAD_1_ANGL' + 'E'], _0x5f4ea0 *= _0x17c88d['RAD_1_ANGL' + 'E'], _0x5ef6ff *= _0x17c88d['RAD_1_ANGL' + 'E']), _0x1faf3f['setV_GameK' + 'ey_ector3'](this['_localRota' + 'tion'], _0x3c4bac, _0x5f4ea0, _0x5ef6ff), this['loaded'] && this['_setLocalR' + 'otation']();
        }
        ['_setLocalR' + 'otation']() {
            var _0x2eb27a = this['sprite']['transform'];
            Laya['Quaternion']['createFrom' + 'YawPitchRo' + 'll'](this['_localRota' + 'tion']['x'], this['_localRota' + 'tion']['y'], this['_localRota' + 'tion']['z'], _0x2eb27a['_localRota' + 'tion']), _0x2eb27a['localRotat' + 'ion'] = _0x2eb27a['_localRota' + 'tion'];
        }
        ['setActive'](_0x3ecd52) {
            this['_active'] != _0x3ecd52 && (this['_active'] = _0x3ecd52, this['loaded'] && (this['sprite']['active'] = _0x3ecd52));
        }
        ['rotate'](_0x43f15e, _0x183793, _0xd0d1c7) {
            this['loaded'] && this['sprite']['transform']['rotate'](_0x43f15e, _0x183793, _0xd0d1c7);
        }
        ['_onLoadedM' + 'odel'](_0x2d65d3) {
            if (!this['_isDestroy' + 'ed']) {
                this['sprite'] = Laya['Sprite3D']['instantiat' + 'e'](_0x2d65d3), this['avater'] = this['sprite']['getChildAt'](0x0), this['_animator'] = this['avater']['getCompone' + 'nt'](Laya['Animator']);
                for (var _0x4e659a = 0x0; _0x4e659a < this['_config']['subModel']['length']; _0x4e659a++) {
                    var _0x493be5 = this['_config']['subModel'][_0x4e659a];
                    if ('0' == _0x493be5)
                        break;
                    var _0x4538c5 = this['avater']['getChildBy' + 'Name'](_0x493be5);
                    if (_0x4538c5) {
                        var _0x1f3a40 = _0x4538c5['getCompone' + 'nt'](Laya['Animator']);
                        _0x1f3a40 && this['_canimator' + 's']['push'](_0x1f3a40);
                    }
                }
                this['_loadAdds']();
            }
        }
        ['_loadAdds']() {
            this['_isDestroy' + 'ed'] || (this['_addLoadIn' + 'dex'] >= this['_adds']['length'] ? this['_onA_GameK' + 'ey_llCompl' + 'eted']() : this['_addModels']['push'](_0x42867c['create'](void 0x0, this['_adds'][this['_addLoadIn' + 'dex']][0x0], Laya['Handler']['create'](this, this['_onA_GameK' + 'ey_ddLoade' + 'd']))));
        }
        ['_onA_GameK' + 'ey_ddLoade' + 'd']() {
            if (!this['_isDestroy' + 'ed']) {
                var _0x27bc0b = this['_addModels']['last'](), _0x475bcc = this['_adds'][this['_addLoadIn' + 'dex']][0x1];
                this['bindBone'](_0x475bcc, _0x27bc0b['sprite']), this['_addLoadIn' + 'dex']++, this['_loadAdds']();
            }
        }
        ['_onA_GameK' + 'ey_llCompl' + 'eted']() {
            this['loaded'] = !0x0, this['_isDestroy' + 'ed'] || (this['_waitDestr' + 'oy'] ? this['dispose']() : (this['_parent'] && this['_parent']['addChild'](this['sprite']), this['sprite']['transform']['localScale'] = this['_localScal' + 'e'], this['refreshRig' + 'idbodysCol' + 'liderShape'](this['sprite']), isNaN(this['_position']['x']) ? this['sprite']['transform']['localPosit' + 'ion'] = this['_localPosi' + 'tion'] : this['sprite']['transform']['position'] = this['_position'], this['_setLocalR' + 'otation'](), this['_config']['color'] && this['_config']['color']['length'] > 0x0 && _0x42867c['chan_GameK' + 'ey_geMater' + 'ialColor'](this['sprite'], this['_config']['color'][0x0], this['_config']['color'][0x1], this['_config']['color'][0x2], this['_config']['color'][0x3]), this['isPauseEmi' + 'ssion$'] && this['pauseEmiss' + 'ion'](), this['sprite']['active'] = this['_active'], this['_parent']['destroyed'] || this['_loadedHan' + 'dler'] && this['_loadedHan' + 'dler']['runWith'](this)));
        }
        ['refreshRig' + 'idbodysCol' + 'liderShape'](_0x113195) {
            let _0x2c8f54 = _0x113195['getCompone' + 'nt'](Laya['Rigidbody3' + 'D']);
            if (_0x2c8f54 && this['refreshSin' + 'gleRigidbo' + 'dyCollider' + 'Shape'](_0x2c8f54, _0x113195), !_0x113195['_children'])
                return;
            let _0x1ecd88 = _0x113195['_children']['length'];
            for (; --_0x1ecd88 > -0x1;)
                this['refreshRig' + 'idbodysCol' + 'liderShape'](_0x113195['_children'][_0x1ecd88]);
        }
        ['refreshSin' + 'gleRigidbo' + 'dyCollider' + 'Shape'](_0x1366c0, _0x5f327c) {
            let _0x523f1e = _0x5f327c['getCompone' + 'nt'](Laya['PhysicsCol' + 'lider']);
            if (_0x523f1e) {
                let _0x163b8c = _0x523f1e['colliderSh' + 'ape']['clone']();
                _0x163b8c['_localRota' + 'tion'] = _0x5ad3aa['getL_GameK' + 'ey_ocalRot' + 'ation'](_0x1366c0['owner']['transform'], _0x5f327c['transform']['rotation']), _0x163b8c['_scale'] = _0x5ad3aa['getL_GameK' + 'ey_ocalSca' + 'le'](_0x1366c0['owner']['transform'], _0x5f327c['transform']['getWorldLo' + 'ssyScale']()), _0x163b8c['_localOffs' + 'et'] = _0x5ad3aa['getL_GameK' + 'ey_ocalPos' + 'ition'](_0x1366c0['owner']['transform'], _0x5f327c['transform']['position']), _0x163b8c['updateLoca' + 'lTransform' + 'ations'](), _0x5f327c['_destroyCo' + 'mponent'](_0x523f1e), _0x1366c0['colliderSh' + 'ape']['addChildSh' + 'ape'] && _0x1366c0['colliderSh' + 'ape']['addChildSh' + 'ape'](_0x163b8c);
            }
            if (!_0x5f327c['_children'])
                return;
            let _0x6b701d = _0x5f327c['_children']['length'];
            for (; --_0x6b701d > -0x1;)
                this['refreshSin' + 'gleRigidbo' + 'dyCollider' + 'Shape'](_0x1366c0, _0x5f327c['_children'][_0x6b701d]);
        }
        ['bindBone'](_0x52685a, _0x211531) {
            var _0x202f68 = this['getBone'](_0x52685a);
            _0x202f68 && _0x202f68['addChild'](_0x211531);
        }
        ['getBone'](_0x48c4ee) {
            var _0x279820 = this['_bones'][_0x48c4ee];
            if (!_0x279820) {
                if (_0x48c4ee !== _0x42867c['ORBIT_POIN' + 'T']['POINT3'] || this['_animator']['_avatarNod' + 'eMap'][_0x48c4ee]) {
                    if (!this['_animator']['_avatarNod' + 'eMap'][_0x48c4ee])
                        return console['log']('无该模型:' + this['_modelId'] + '的绑点:' + _0x48c4ee + '!'), null;
                    _0x279820 = this['sprite']['addChild'](new Laya['Sprite3D']()), this['_animator']['linkSprite' + '3DToAvatar' + 'Node'](_0x48c4ee, _0x279820);
                } else
                    _0x279820 = this['avater'];
                this['_bones'][_0x48c4ee] = _0x279820;
            }
            return _0x279820;
        }
        ['playAnim'](_0x3772e9, _0x4c2ace, _0x1c3a46, _0x3bc686, _0x3e1910, _0x446e94) {
            let _0x3c50af;
            if (this['_animator'] && (_0x3c50af = this['_animator']['_controlle' + 'rLayers'][0x0]['_statesMap'][_0x3772e9]), _0x3c50af) {
                let _0x4bba1c = this['_animator']['getControl' + 'lerLayer']()['_playState' + 'Info']['_currentSt' + 'ate'];
                if (!_0x446e94 && _0x4bba1c['name'] == _0x3772e9 && _0x3c50af['speed'] > 0x0)
                    return;
                _0x3c50af['clip']['islooping'] = _0x4c2ace, _0x3c50af['speed'] = null != _0x3e1910 ? _0x3e1910 : 0x1, _0x446e94 ? this['_animator']['play'](_0x3772e9, 0x0, 0x0) : this['_animator']['crossFade'](_0x3772e9, 0.2);
            }
        }
        ['stopAnim$']() {
            let _0xe8dd52 = this['_animator']['getControl' + 'lerLayer']();
            _0xe8dd52 && (_0xe8dd52['_playState' + 'Info']['_currentSt' + 'ate']['speed'] = 0x0);
        }
        ['pauseEmiss' + 'ion']() {
            this['isPauseEmi' + 'ssion$'] = !0x0, this['sprite'] && this['_setEmissi' + 'on$'](this['sprite'], !0x1);
        }
        ['resumeEmis' + 'sion']() {
            this['isPauseEmi' + 'ssion$'] = !0x1, this['sprite'] && this['_setEmissi' + 'on$'](this['sprite'], !0x0);
        }
        ['_setEmissi' + 'on$'](_0x5749ce, _0x34c4d3) {
            if (this['isPauseEmi' + 'ssion$'] != _0x34c4d3 && (_0x5749ce['particleSy' + 'stem'] && (_0x5749ce['particleSy' + 'stem']['emission']['enable'] = _0x34c4d3), _0x5749ce['_children'] && _0x5749ce['_children']['length'] > 0x0)) {
                for (let _0x1350ad = 0x0; _0x1350ad < _0x5749ce['_children']['length']; _0x1350ad++)
                    this['_setEmissi' + 'on$'](_0x5749ce['_children'][_0x1350ad], _0x34c4d3);
            }
        }
        ['changeEmis' + 'sionColor$'](_0x59189b, _0x122d33, _0x50c9b6, _0x126bfd) {
            this['sprite'] && this['_changeEmi' + 'ssionColor' + '$'](this['sprite'], _0x59189b, _0x122d33, _0x50c9b6, _0x126bfd);
        }
        ['_changeEmi' + 'ssionColor' + '$'](_0xce4192, _0x100e36, _0xf78664, _0x185515, _0x3fdf80) {
            if (_0xce4192['particleSy' + 'stem']) {
                let _0x4f21e7 = _0xce4192['particleSy' + 'stem']['startColor' + 'Constant'];
                _0x4f21e7['x'] = _0x100e36, _0x4f21e7['y'] = _0xf78664, _0x4f21e7['z'] = _0x185515, _0x4f21e7['w'] = _0x3fdf80;
            }
            if (_0xce4192['_children'] && _0xce4192['_children']['length'] > 0x0) {
                for (let _0x3ed4ec = 0x0; _0x3ed4ec < _0xce4192['_children']['length']; _0x3ed4ec++)
                    this['_changeEmi' + 'ssionColor' + '$'](_0xce4192['_children'][_0x3ed4ec], _0x100e36, _0xf78664, _0x185515, _0x3fdf80);
            }
        }
        static ['chan_GameK' + 'ey_geMater' + 'ialColor'](_0x10f16b, _0x316e60, _0x2b26e2, _0x10294d, _0x3b44a5, _0x6dcd06) {
            _0x42867c['_cha_GameK' + 'ey_ngeMate' + 'rialColor'](_0x10f16b, _0x316e60, _0x2b26e2, _0x10294d, _0x3b44a5, _0x6dcd06);
            for (let _0x52c6e9 = 0x0; _0x52c6e9 < _0x10f16b['_children']['length']; _0x52c6e9++)
                _0x42867c['chan_GameK' + 'ey_geMater' + 'ialColor'](_0x10f16b['_children'][_0x52c6e9], _0x316e60, _0x2b26e2, _0x10294d, _0x3b44a5, _0x6dcd06);
        }
        static ['_cha_GameK' + 'ey_ngeMate' + 'rialColor'](_0x24ce03, _0xece21f, _0x590e49, _0x4faa1d, _0x43eb31, _0x4f8540) {
            let _0x52b7ac = [];
            if (_0x24ce03 instanceof Laya['MeshSprite' + '3D'] || _0x24ce03 instanceof Laya['SkinnedMes' + 'hSprite3D'] || _0x24ce03 instanceof Laya['ShuriKenPa' + 'rticle3D']) {
                if (null != _0x4f8540) {
                    let _0x260782 = _0x24ce03['_render']['materials'];
                    if (_0x260782) {
                        let _0x60a34b, _0x15d3e1 = _0x260782['length'];
                        for (; --_0x15d3e1 > -0x1;)
                            (_0x60a34b = _0x260782[_0x15d3e1])['name'] == _0x4f8540 && _0x52b7ac['push'](_0x60a34b);
                    } else
                        _0x24ce03['_render']['material']['name'] == _0x4f8540 && _0x52b7ac['push'](_0x24ce03['_render']['material']);
                } else {
                    _0x52b7ac['push'](_0x24ce03['_render']['material']);
                    let _0x15eff3 = _0x24ce03['_render']['materials'];
                    if (_0x15eff3) {
                        let _0x1248ce = _0x15eff3['length'];
                        for (; --_0x1248ce > -0x1;)
                            _0x52b7ac['push'](_0x15eff3[_0x1248ce]);
                    }
                }
            }
            if (_0x52b7ac && _0x52b7ac['length'] > 0x0) {
                let _0x5636d7 = _0x52b7ac['length'];
                for (; --_0x5636d7 > -0x1;)
                    _0x42867c['setM_GameK' + 'ey_aterial' + 'Color'](_0x52b7ac[_0x5636d7], _0xece21f, _0x590e49, _0x4faa1d, _0x43eb31);
            }
        }
        static ['setM_GameK' + 'ey_aterial' + 'Color'](_0x1acaec, _0xe2eef3, _0x340be5, _0x4caf9e, _0x13f18c) {
            _0x1acaec['defualtAlb' + 'edoColor'] || (_0x1acaec['defualtAlb' + 'edoColor'] = null != _0x1acaec['albedoColo' + 'r'] ? _0x1acaec['albedoColo' + 'r']['clone']() : _0x1acaec['color']), _0xe2eef3 = null == _0xe2eef3 ? _0x1acaec['defualtAlb' + 'edoColor']['x'] : _0xe2eef3, _0x340be5 = null == _0x340be5 ? _0x1acaec['defualtAlb' + 'edoColor']['y'] : _0x340be5, _0x4caf9e = null == _0x4caf9e ? _0x1acaec['defualtAlb' + 'edoColor']['z'] : _0x4caf9e, _0x13f18c = null == _0x13f18c ? _0x1acaec['defualtAlb' + 'edoColor']['w'] : _0x13f18c, null != _0x1acaec['albedoColo' + 'r'] ? _0x1acaec['albedoColo' + 'r'] = new Laya['Vector4'](_0xe2eef3, _0x340be5, _0x4caf9e, _0x13f18c) : _0x1acaec['color'] = new Laya['Vector4'](_0xe2eef3, _0x340be5, _0x4caf9e, _0x13f18c);
        }
        static ['setF_GameK' + 'ey_riction'](_0x4e663b, _0x3c31e1) {
            let _0x565e90, _0x547263 = _0x4e663b['_component' + 's'];
            if (_0x547263) {
                let _0x188fda;
                for (_0x565e90 = _0x547263['length']; --_0x565e90 > -0x1;)
                    ((_0x188fda = _0x547263[_0x565e90]) instanceof Laya['PhysicsCol' + 'lider'] || _0x188fda instanceof Laya['Rigidbody3' + 'D']) && (_0x188fda['friction'] = _0x3c31e1);
            }
            let _0x18f516 = _0x4e663b['_children'];
            if (_0x18f516) {
                for (_0x565e90 = _0x18f516['length']; --_0x565e90 > -0x1;)
                    _0x42867c['setF_GameK' + 'ey_riction'](_0x18f516[_0x565e90], _0x3c31e1);
            }
        }
        ['getMateria' + 'ls$']() {
            if (this['loaded'])
                return this['_getMateri' + 'als'](this['sprite']);
        }
        ['_getMateri' + 'als'](_0x4fa796) {
            let _0x1d10be = [];
            if (_0x4fa796 instanceof Laya['MeshSprite' + '3D'] || _0x4fa796 instanceof Laya['SkinnedMes' + 'hSprite3D']) {
                if (_0x4fa796['_render']['materials']) {
                    let _0x50bb66 = _0x4fa796['_render']['materials']['length'];
                    for (; --_0x50bb66 > -0x1;)
                        _0x1d10be['push'](_0x4fa796['_render']['materials'][_0x50bb66]);
                } else
                    _0x1d10be['push'](_0x4fa796['_render']['material']);
            }
            let _0x40fe57 = _0x4fa796['_children'];
            if (_0x40fe57) {
                let _0x2b4f98 = _0x40fe57['length'];
                for (; --_0x2b4f98 > -0x1;) {
                    let _0x3928e8 = this['_getMateri' + 'als'](_0x40fe57[_0x2b4f98]), _0x17ac19 = _0x3928e8['length'];
                    for (; --_0x17ac19 > -0x1;)
                        _0x1d10be['push'](_0x3928e8[_0x17ac19]);
                }
            }
            return _0x1d10be;
        }
        ['rese_GameK' + 'ey_tMateri' + 'alsColor'](_0x52df3d) {
            this['_res_GameK' + 'ey_etMater' + 'ialColor'](_0x52df3d);
            for (let _0x57bbac = 0x0; _0x57bbac < _0x52df3d['_children']['length']; _0x57bbac++)
                this['rese_GameK' + 'ey_tMateri' + 'alsColor'](_0x52df3d['_children'][_0x57bbac]);
        }
        ['_res_GameK' + 'ey_etMater' + 'ialColor'](_0x54136b) {
            if (_0x54136b instanceof Laya['MeshSprite' + '3D'] || _0x54136b instanceof Laya['SkinnedMes' + 'hSprite3D']) {
                _0x54136b['_render']['material']['defualtAlb' + 'edoColor'] && (null != _0x54136b['_render']['material']['albedoColo' + 'r'] ? _0x54136b['_render']['material']['albedoColo' + 'r'] = _0x54136b['_render']['material']['defualtAlb' + 'edoColor']['clone']() : material['color'] = _0x54136b['_render']['material']['defualtAlb' + 'edoColor']['clone']());
                let _0x487805 = _0x54136b['_render']['materials'];
                if (_0x487805) {
                    let _0x154299, _0x558805 = _0x487805['length'];
                    for (; --_0x558805 > -0x1;)
                        (_0x154299 = _0x487805[_0x558805])['defualtAlb' + 'edoColor'] && (null != _0x154299['albedoColo' + 'r'] ? _0x154299['albedoColo' + 'r'] = _0x154299['defualtAlb' + 'edoColor']['clone']() : _0x154299['color'] = _0x154299['defualtAlb' + 'edoColor']['clone']());
                }
            }
        }
        ['replay']() {
            this['setActive'](!0x1), this['setActive'](!0x0);
        }
        ['creareOrbi' + 't']() {
            var _0x3024c4 = _0x42867c['_fullChs'](_0x42867c['ORBIT_DATA'][this['_config']['path']]);
            this['spritePref' + 'ab'] = Laya['Loader']['getRes'](_0x3024c4), this['spritePref' + 'ab'] = Laya['Sprite3D']['instantiat' + 'e'](this['spritePref' + 'ab']), this['spritePref' + 'ab']['loaded'] ? Laya['timer']['once'](0x1, this, this['onLo_GameK' + 'ey_adedOrb' + 'it'], null, !0x1) : this['spritePref' + 'ab']['once'](Laya['Event']['HIERARCHY_' + 'LOADED'], this, this['onLo_GameK' + 'ey_adedOrb' + 'it']);
        }
        ['onLo_GameK' + 'ey_adedOrb' + 'it']() {
            if (!this['_isDestroy' + 'ed']) {
                this['_onLoadedM' + 'odel'](this['spritePref' + 'ab']), this['_onA_GameK' + 'ey_llCompl' + 'eted']();
                var _0x5c3ab0 = 0x0;
                this['_config']['path'] === _0x42867c['ORBIT_TYPE']['SURROUND'] ? _0x5c3ab0 = 0x3 : this['_config']['path'] === _0x42867c['ORBIT_TYPE']['UPROUND'] ? _0x5c3ab0 = 0x2 : this['_config']['path'] === _0x42867c['ORBIT_TYPE']['DRAGON'] && (_0x5c3ab0 = 0x1), this['prepareOrb' + 'itItems'](_0x5c3ab0);
            }
        }
        ['prepareOrb' + 'itItems'](_0x36fddd) {
            var _0x2a510b = _0x42867c['_getUrlByI' + 'd'](this['_modelId']);
            this['_orbitItem' + 'Prefab'] = Laya['Loader']['getRes'](_0x2a510b), this['_orbitItem' + 'Prefab'] = Laya['Sprite3D']['instantiat' + 'e'](this['_orbitItem' + 'Prefab']), this['_orbitItem' + 'Prefab']['loaded'] ? this['onLo_GameK' + 'ey_adedOrb' + 'itItems'](_0x36fddd) : this['_orbitItem' + 'Prefab']['once'](Laya['Event']['HIERARCHY_' + 'LOADED'], this, this['onLo_GameK' + 'ey_adedOrb' + 'itItems'], [_0x36fddd]);
        }
        ['onLo_GameK' + 'ey_adedOrb' + 'itItems'](_0x1700fa) {
            if (!this['_isDestroy' + 'ed'] && _0x1700fa > 0x0) {
                for (var _0x34d211; --_0x1700fa > -0x1;)
                    _0x34d211 = Laya['Sprite3D']['instantiat' + 'e'](this['_orbitItem' + 'Prefab']), this['bindBone'](_0x42867c['ORBIT_POIN' + 'T']['POINT' + (_0x1700fa + 0x1)], _0x34d211);
            }
        }
        ['dispose']() {
            if (!this['_isDestroy' + 'ed'] && this['loaded']) {
                this['_isDestroy' + 'ed'] = !0x0, this['loaded'] = !0x1;
                for (var _0xf0489e = 0x0; _0xf0489e < this['_addModels']['length']; _0xf0489e++)
                    this['_addModels'][_0xf0489e]['dispose']();
                this['_orbitItem' + 'Prefab'] && this['_orbitItem' + 'Prefab']['destroy'](!0x0), this['spritePref' + 'ab'] && this['spritePref' + 'ab']['destroy'](!0x0), this['_addModels'] = [], this['_parent'] && this['_parent']['destroyed'] || this['sprite']['destroy'](!0x0), this['sprite'] = null, this['_animator'] = null, this['avater'] = null, this['_canimator' + 's'] = [], this['_parent'] = null, this['_addModels'] = [], this['_bones'] = {}, this['_loadedHan' + 'dler'] = null, this['_active'] = !0x0, this['_waitDestr' + 'oy'] = !0x1, this['isPauseEmi' + 'ssion$'] = !0x1, this['_position'] = new Laya['Vector3'](NaN, NaN, NaN), this['_localPosi' + 'tion'] = new Laya['Vector3'](0x0, 0x0, 0x0), this['_localScal' + 'e'] = new Laya['Vector3'](0x1, 0x1, 0x1), this['_localRota' + 'tion'] = new Laya['Vector3'](0x0, 0x0, 0x0), Laya['timer']['clearAll'](this), Laya['Pool']['recover']('ssModel', this), _0x42867c['modelUsedC' + 'nt'][this['_modelId']]--;
            } else
                this['_waitDestr' + 'oy'] = !0x0;
        }
        ['setReceive' + 'Shadow'](_0x13c61f) {
            this['_set_GameK' + 'ey_Receive' + 'Shadow'](this['sprite'], _0x13c61f);
        }
        ['_set_GameK' + 'ey_Receive' + 'Shadow'](_0x2b0e72, _0x1996d5) {
            if (_0x2b0e72 instanceof Laya['MeshSprite' + '3D'])
                _0x2b0e72['meshRender' + 'er']['receiveSha' + 'dow'] = _0x1996d5;
            else {
                for (let _0x513149 = 0x0; _0x513149 < _0x2b0e72['_children']['length']; _0x513149++)
                    this['_set_GameK' + 'ey_Receive' + 'Shadow'](_0x2b0e72['_children'][_0x513149], _0x1996d5);
            }
        }
        ['setCastSha' + 'dow'](_0x298447) {
            this['_set_GameK' + 'ey_CastSha' + 'dow'](this['sprite'], _0x298447);
        }
        ['_set_GameK' + 'ey_CastSha' + 'dow'](_0x469d1e, _0x86967) {
            _0x469d1e instanceof Laya['MeshSprite' + '3D'] ? _0x469d1e['meshRender' + 'er']['castShadow'] = _0x86967 : _0x469d1e instanceof Laya['SkinnedMes' + 'hSprite3D'] && (_0x469d1e['skinnedMes' + 'hRenderer']['castShadow'] = _0x86967);
            for (let _0x278372 = 0x0; _0x278372 < _0x469d1e['_children']['length']; _0x278372++)
                this['_set_GameK' + 'ey_CastSha' + 'dow'](_0x469d1e['_children'][_0x278372], _0x86967);
        }
        static ['_isLoading'](_0x512670) {
            for (var _0x381649 = 0x0; _0x381649 < _0x512670['length']; _0x381649++)
                if (-0x1 != _0x42867c['curLoad']['indexOf'](_0x512670[_0x381649]))
                    return !0x0;
            return !0x1;
        }
        static ['prepareLoa' + 'd'](_0x173cdb, _0x56c224) {
            if (0x0 == _0x173cdb['length'] && _0x56c224['run'](), _0x42867c['_isLoading'](_0x173cdb)) {
                var _0x31665a = {
                    'ids': _0x173cdb,
                    'completeHandler': _0x56c224
                };
                _0x42867c['waitting']['push'](_0x31665a);
            } else {
                if (_0x42867c['curLoading' + 'Num'] >= _0x42867c['MAX_LOADIN' + 'G_NUM'])
                    _0x31665a = {
                        'ids': _0x173cdb,
                        'completeHandler': _0x56c224
                    }, _0x42867c['waitting']['push'](_0x31665a);
                else {
                    for (var _0x349a78 = [], _0x1b518c = 0x0; _0x1b518c < _0x173cdb['length']; _0x1b518c++) {
                        var _0x49de16 = _0x173cdb[_0x1b518c], _0x57f852 = D['PrefabsPat' + 'h'][_0x49de16], _0x1b1a11 = _0x49de16;
                        if (Number(_0x49de16)) {
                            if (!_0x57f852)
                                continue;
                            _0x42867c['curLoad']['push'](_0x49de16), _0x1b1a11 = _0x57f852['chs'];
                        }
                        var _0x83988f = _0x57f852 ? _0x57f852['additional' + 'Id'] : 0x0;
                        if (_0x83988f)
                            for (var _0x4be8d5 = _0x83988f['split']('&'), _0x4eea8d = 0x0; _0x4eea8d < _0x4be8d5['length']; _0x4eea8d++) {
                                var _0x7d0eb5 = _0x4be8d5[_0x4eea8d]['split']('#')[0x0];
                                !_0x173cdb['contains'](_0x7d0eb5) && _0x173cdb['push'](_0x7d0eb5);
                            }
                        _0x349a78['push'](_0x1b1a11 + _0x1b1a11['substr'](_0x1b1a11['lastIndexO' + 'f']('/')) + '.lh');
                    }
                    _0x42867c['curLoading' + 'Num']++, Laya['loader']['create'](_0x349a78, Laya['Handler']['create'](null, function () {
                        _0x42867c['curLoading' + 'Num']--;
                        for (var _0x3e10d6 = 0x0; _0x3e10d6 < _0x173cdb['length']; _0x3e10d6++) {
                            var _0x4f9f76 = _0x173cdb[_0x3e10d6], _0x5d3135 = D['PrefabsPat' + 'h'][_0x4f9f76];
                            if (Number(_0x4f9f76)) {
                                if (!_0x5d3135)
                                    continue;
                                _0x5d3135['chs'];
                            }
                            _0x42867c['curLoad']['remove$'](_0x4f9f76);
                        }
                        var _0x13d654;
                        Laya['timer']['once'](0x1, this, function () {
                            _0x56c224['run']();
                        });
                        for (_0x3e10d6 = _0x42867c['waitting']['length'] - 0x1; _0x3e10d6 >= 0x0; _0x3e10d6--)
                            if (_0x13d654 = _0x42867c['waitting'][_0x3e10d6], !_0x42867c['_isLoading'](_0x13d654))
                                return _0x42867c['waitting']['removeAt$'](_0x3e10d6), void _0x42867c['prepareLoa' + 'd'](_0x13d654['ids'], _0x13d654['completeHa' + 'ndler']);
                    }));
                }
            }
        }
        static ['create'](_0x4e127b, _0x2e5b12, _0x227cab) {
            var _0x239294 = Laya['Pool']['getItem']('ssModel') || new _0x42867c();
            return _0x239294['reset'](_0x4e127b, _0x2e5b12, _0x227cab), _0x42867c['_addModelU' + 'sedCnt'](_0x2e5b12), _0x239294;
        }
        static ['_addModelU' + 'sedCnt'](_0x4e30a3) {
            _0x42867c['modelUsedC' + 'nt'][_0x4e30a3] = (_0x42867c['modelUsedC' + 'nt'][_0x4e30a3] || 0x0) + 0x1;
        }
        static ['_getUrlByI' + 'd'](_0x3a43b5) {
            var _0x375e7a = D['PrefabsPat' + 'h'][_0x3a43b5];
            return _0x42867c['_fullChs'](_0x375e7a['chs']);
        }
        static ['_fullChs'](_0x5ec39e) {
            var _0x53ecc2 = _0x5ec39e['substring'](_0x5ec39e['lastIndexO' + 'f']('/') + 0x1);
            return _0x5ec39e + '/' + _0x53ecc2 + '.lh';
        }
        static ['destroyRes'](_0x148e1a) {
            _0x148e1a && (_0x148e1a['destroy'] && !_0x148e1a['destroyed'] ? _0x148e1a['destroy']() : _0x148e1a['dispose'] && !_0x148e1a['disposed'] && _0x148e1a['dispose']());
        }
        static ['destroyRes' + 'Array'](_0x226922) {
            if (_0x226922)
                for (var _0x3b6e4b = 0x0; _0x3b6e4b < _0x226922['length']; _0x3b6e4b++) {
                    var _0x1b817b = _0x226922[_0x3b6e4b];
                    _0x17c88d['SWITCH']['MODEL_LOG'] && console['log']('-资源:' + _0x1b817b), _0x42867c['loadedCoun' + 't'][_0x1b817b] && (_0x42867c['loadedCoun' + 't'][_0x1b817b]--, 0x0 == _0x42867c['loadedCoun' + 't'][_0x1b817b] && (_0x42867c['destroyRes'](Laya['Loader']['getRes'](_0x1b817b)), Laya['Loader']['clearRes'](Laya['URL']['formatURL'](_0x1b817b), !0x0)));
                }
        }
    }
    _0x42867c['ORBIT_POIN' + 'T'] = {}, _0x42867c['ORBIT_POIN' + 'T']['POINT1'] = 'leftPoint', _0x42867c['ORBIT_POIN' + 'T']['POINT2'] = 'rightPoint', _0x42867c['ORBIT_POIN' + 'T']['POINT3'] = 'waistPoint', _0x42867c['ORBIT_POIN' + 'T']['POINT4'] = 'solePoint', _0x42867c['ORBIT_TYPE'] = {}, _0x42867c['ORBIT_TYPE']['SURROUND'] = 0x1, _0x42867c['ORBIT_TYPE']['UPROUND'] = 0x2, _0x42867c['ORBIT_TYPE']['DRAGON'] = 0x3, _0x42867c['ORBIT_DATA'] = {}, _0x42867c['ORBIT_DATA'][_0x42867c['ORBIT_TYPE']['UPROUND']] = 'models/orb' + 'it/guiji_l' + 'uoxuan01', _0x42867c['ORBIT_DATA'][_0x42867c['ORBIT_TYPE']['DRAGON']] = 'models/orb' + 'it/guiji_l' + 'ong01', _0x42867c['MAX_LOADIN' + 'G_NUM'] = 0x3, _0x42867c['curLoading' + 'Num'] = 0x0, _0x42867c['waitting'] = [], _0x42867c['loadedCoun' + 't'] = {}, _0x42867c['modelUsedC' + 'nt'] = {}, _0x42867c['curLoad'] = [];
    class _0x4950bb extends _0x1fc701 {
        constructor() {
            super(), this['winName'] = '登录加载';
        }
        ['onUI_GameK' + 'ey_Load']() {
            super['onUI_GameK' + 'ey_Load'](), this['_tai_GameK' + 'ey_lValue'] = [
                '.',
                '..',
                '...',
                '....',
                '.....',
                '......'
            ], this['_tai_GameK' + 'ey_lIndex'] = 0x0, this['_pro_GameK' + 'ey_gressUp' + 'dateTime'] = 0xc8, this['_pro_GameK' + 'ey_gressTi' + 'me'] = this['_pro_GameK' + 'ey_gressUp' + 'dateTime'], this['load_GameK' + 'ey_edCallb' + 'ack'] = this['args'][0x0], this['pack_GameK' + 'ey_ages'] = [
                'models_rol' + 'e',
                'models_obj'
            ], this['preloadMod' + 'elIds'] = [
                0x7d0,
                0x7d1,
                0x7d2
            ], this['progressLe' + 'ngth'] = this['pack_GameK' + 'ey_ages']['length'] + 0x1, this['progress_b' + 'ar'] = _0x1faf3f['getC_GameK' + 'ey_hildDee' + 'p'](this['owner'], 'progress_b' + 'ar'), this['progress_i' + 'con'] = _0x1faf3f['getC_GameK' + 'ey_hildDee' + 'p'](this['owner'], 'progress_i' + 'con'), this['labelTail'] = _0x1faf3f['getC_GameK' + 'ey_hildDee' + 'p'](this['owner'], 'label_tail'), this['refreshPro' + 'gressUI'](), this['load_GameK' + 'ey_SubPack' + 's']();
        }
        ['refreshPro' + 'gressUI']() {
            if (!this['progress_b' + 'ar'])
                return;
            let _0x2e005b = null == this['pack_GameK' + 'ey_ages'] ? 0x0 : 0x1 - this['pack_GameK' + 'ey_ages']['length'] / this['progressLe' + 'ngth'];
            _0x2e005b = Math['min'](0x1, this['progress_b' + 'ar']['value'] + 0.0005 * Laya['timer']['delta']), this['progress_b' + 'ar']['value'] = _0x2e005b, this['progress_i' + 'con']['x'] = this['progress_b' + 'ar']['width'] * _0x2e005b;
        }
        ['load_GameK' + 'ey_SubPack' + 's']() {
            this['onlo_GameK' + 'ey_adedPac' + 'ks']();
        }
        ['onLo_GameK' + 'ey_adedSin' + 'glePack'](_0x23cae9) {
            console['log']('loadSubpac' + 'kage\x20succe' + 'ss'), this['load_GameK' + 'ey_SubPack' + 's']();
        }
        ['onlo_GameK' + 'ey_adedPac' + 'ks']() {
            this['preloadMod' + 'els$']();
        }
        ['preloadMod' + 'els$']() {
            0x0 != this['preloadMod' + 'elIds']['length'] ? _0x42867c['prepareLoa' + 'd'](this['preloadMod' + 'elIds'], Laya['Handler']['create'](this, this['onModelsPr' + 'eloaded$'])) : this['loadingCom' + 'plete$']();
        }
        ['onModelsPr' + 'eloaded$']() {
            this['loadingCom' + 'plete$']();
        }
        ['loadingCom' + 'plete$']() {
            FKGames['init']({
                'debug': !![],
                'appName': '',
                'gamemonetizeId': 'gwsadqnt3dkfpqz5p2xgaijii9coctsx',
                'gamedistributionId': '',
                'complete': () => {
                    this['load_GameK' + 'ey_edCallb' + 'ack'] && this['load_GameK' + 'ey_edCallb' + 'ack'](), this['load_GameK' + 'ey_edCallb' + 'ack'] = void 0x0, Laya['timer']['once'](0x64, this, this['destroy']), console['log']('----------' + '初始化成功!!!--' + '--------');
                }
            });
        }
        ['upda_GameK' + 'ey_teTail']() {
        }
        ['onUpdate']() {
            this['_pro_GameK' + 'ey_gressTi' + 'me'] += Laya['timer']['delta'], this['_pro_GameK' + 'ey_gressTi' + 'me'] > this['_pro_GameK' + 'ey_gressUp' + 'dateTime'] && (this['_pro_GameK' + 'ey_gressTi' + 'me'] = 0x0, this['upda_GameK' + 'ey_teTail']()), this['refreshPro' + 'gressUI']();
        }
    }
    _0x4950bb['url'] = 'Prefab/Loa' + 'ding/Login' + 'LoadingWin' + 'dow.json', _0x4950bb['className'] = 'LoginLoadi' + 'ngUI', _0x4950bb['uiConfig'] = {
        'layer': _0x5a29eb['LAYER_TOP'],
        'only': !0x0,
        'needUISurrenal': !0x0,
        'notClose': !0x1
    };
    class _0x2ca6bb extends Laya['Script'] {
        constructor() {
            super();
        }
        ['executeWhe' + 'nSdkReady$'](_0x56f396, _0x3557ff) {
            'undefined' != typeof pgdk$ && pgdk$['isSdkReady' + '$'] ? _0x3557ff && _0x3557ff() : Laya['timer']['once'](0x64, this, this['executeWhe' + 'nSdkReady$'], [
                _0x56f396,
                _0x3557ff
            ], !0x0);
        }
        ['setWidget$'](_0x27aab6, _0x102b8b, _0x167206, _0x47dae4, _0x2846ed) {
            'number' == typeof _0x102b8b && (_0x27aab6['top'] = _0x102b8b), 'number' == typeof _0x167206 && (_0x27aab6['bottom'] = _0x167206), 'number' == typeof _0x47dae4 && (_0x27aab6['left'] = _0x47dae4), 'number' == typeof _0x2846ed && (_0x27aab6['right'] = _0x2846ed), 'number' != typeof _0x47dae4 && 'number' != typeof _0x2846ed && (_0x27aab6['centerX'] = 0x0), 'number' != typeof _0x102b8b && 'number' != typeof _0x167206 && (_0x27aab6['centerY'] = 0x0);
        }
        ['createBase' + 'List$'](_0xad9e06) {
            let _0x517950 = new Laya['List']();
            return _0x517950['repeatX'] = _0xad9e06 ? 0xa : 0x1, _0x517950['repeatY'] = _0xad9e06 ? 0x1 : 0xa, _0xad9e06 ? _0x517950['hScrollBar' + 'Skin'] = 'common/hsc' + 'roll.png' : _0x517950['vScrollBar' + 'Skin'] = 'common/vsc' + 'roll.png', _0x517950['scrollBar']['visible'] = !0x1, this['setWidget$'](_0x517950, 0x0, 0x0, 0x0, 0x0), _0x517950;
        }
        ['createLabe' + 'l$'](_0x1db597, _0x572b14, _0x3dbc98, _0x569959) {
            let _0x1b1f13 = _0x1db597['addChild'](new Laya['Label']());
            return _0x569959 && (_0x1b1f13['color'] = _0x569959), _0x1b1f13['fontSize'] = _0x572b14, _0x1b1f13['lineHeight'] = _0x572b14, _0x1b1f13['font'] = 'SimHei', _0x1b1f13['text'] = _0x3dbc98, _0x1b1f13;
        }
        ['registerAd' + 'ClickEvent' + '$'](_0x4899b9, _0x53f0e5) {
            _0x4899b9['clickEvent' + '$'] && _0x4899b9['off'](Laya['Event']['CLICK'], _0x4899b9, _0x4899b9['clickEvent' + '$']), _0x4899b9['clickEvent' + '$'] = function () {
                pgdk$['navigateTo' + 'MiniProgra' + 'm$'](this['dataSource'], _0x53f0e5);
            }, _0x4899b9['on'](Laya['Event']['CLICK'], _0x4899b9, _0x4899b9['clickEvent' + '$']);
        }
        ['createMask' + '$'](_0x2ba68d, _0x700c0c) {
            if (!_0x700c0c)
                return;
            let _0x17245a = new Laya['Image']();
            return _0x17245a['skin'] = _0x700c0c, _0x17245a['width'] = _0x2ba68d['width'], _0x17245a['height'] = _0x2ba68d['height'], _0x17245a['left'] = _0x17245a['right'] = _0x17245a['top'] = _0x17245a['bottom'] = 0x0, _0x2ba68d['mask'] = _0x17245a, _0x17245a;
        }
        ['createBgNo' + 'de$'](_0x135639, _0x5ed481, _0x1aa083, _0x2f2ea4) {
            let _0x16a0c4;
            if (void 0x0 === _0x1aa083 && (_0x1aa083 = 0x64), void 0x0 === _0x2f2ea4 && (_0x2f2ea4 = 0x64), _0x5ed481['startsWith']('#'))
                (_0x16a0c4 = _0x135639['addChild'](new Laya['Box']()))['width'] = _0x1aa083, _0x16a0c4['height'] = _0x2f2ea4, 0x9 === _0x5ed481['length'] ? (_0x16a0c4['bgColor'] = _0x5ed481['substring'](0x0, 0x7), _0x16a0c4['alpha'] = parseInt('0x' + _0x5ed481['substring'](0x7)) / 0xff) : (_0x16a0c4['bgColor'] = _0x5ed481, _0x16a0c4['alpha'] = 0.7);
            else {
                let _0x129ad7 = _0x5ed481['split'](';');
                (_0x16a0c4 = _0x135639['addChild'](new Laya['Image']()))['width'] = _0x1aa083, _0x16a0c4['height'] = _0x2f2ea4, _0x16a0c4['skin'] = _0x129ad7[0x0], _0x129ad7[0x1] && (_0x16a0c4['sizeGrid'] = _0x129ad7[0x1]);
            }
            return _0x16a0c4;
        }
    }
    class _0x2ec5b8 extends Laya['Sprite'] {
        constructor(_0x307974) {
            super(), this['_offsetTex' + 'ture'] = new Laya['Point'](), this['_originalS' + 'ize'] = _0x307974, this['_imgUrl'] = '', this['_singleImg' + 'Size'] = null, this['_totalFram' + 'es'] = 0x0, this['_curentFra' + 'me'] = 0x0, this['_rowCount'] = 0x0, this['_colCount'] = 0x0, this['_tag'] = '', this['_imgTextur' + 'e'] = null, this['_onSizeCha' + 'ngedCb'] = null, this['size'](_0x307974['width'], _0x307974['height']);
        }
        ['setImage'](_0x5df2c6) {
            if (this['_imgUrl'] !== _0x5df2c6) {
                if ('object' == typeof _0x5df2c6) {
                    let _0x487bce = _0x5df2c6;
                    this['_setImageA' + 'nimation'](_0x487bce['path'], {
                        'width': _0x487bce['width'],
                        'height': _0x487bce['height']
                    }, _0x487bce['frame_coun' + 't']);
                } else
                    this['_setImg'](_0x5df2c6);
            }
        }
        ['_setImg'](_0x2cb3d0) {
            this['_imgUrl'] = _0x2cb3d0, this['_totalFram' + 'es'] = 0x1, null !== this['_imgTextur' + 'e'] && (this['_imgTextur' + 'e'] = null, this['_singleImg' + 'Size'] = null, this['_totalFram' + 'es'] = 0x0, this['_curentFra' + 'me'] = 0x0, this['_rowCount'] = 0x0, this['_colCount'] = 0x0, this['_endAnimat' + 'e'](), this['graphics']['clear'](!0x0));
            let _0x53a6e5 = '';
            if ('string' == typeof _0x2cb3d0 && '' !== _0x2cb3d0)
                _0x53a6e5 = _0x2cb3d0;
            else {
                if (Array['isArray'](_0x2cb3d0) && _0x2cb3d0['length'] > 0x0) {
                    let _0x2cbd93 = pgdk$['randomInt'](0x0, _0x2cb3d0['length'] - 0x1);
                    _0x53a6e5 = _0x2cb3d0[_0x2cbd93];
                } else
                    _0x53a6e5 = 'ad/default' + '_ad.png';
            }
            this['loadImage'](_0x53a6e5, Laya['Handler']['create'](this, function () {
                this['destroyed'] || this['_imgUrl'] === _0x2cb3d0 && this['texture'] && (this['size'](this['texture']['width'], this['texture']['height']), this['_onSizeCha' + 'ngedCb'] && this['_onSizeCha' + 'ngedCb']());
            }['bind'](this)));
        }
        ['_setImageA' + 'nimation'](_0x32c85b, _0x4b0061, _0x1332e8) {
            this['destroyed'] || (_0x1332e8 > 0x1 ? (this['_imgUrl'] = _0x32c85b, this['_singleImg' + 'Size'] = _0x4b0061, this['_totalFram' + 'es'] = _0x1332e8, this['size'](this['_singleImg' + 'Size']['width'], this['_singleImg' + 'Size']['height']), this['_onSizeCha' + 'ngedCb'] && this['_onSizeCha' + 'ngedCb'](), this['_loadImg'](function () {
                this['destroyed'] || _0x32c85b === this['_imgUrl'] && (null !== this['texture'] && (this['texture'] = null), null !== this['_imgTextur' + 'e'] && (this['_curentFra' + 'me'] = 0x0, this['_rowCount'] = this['_imgTextur' + 'e']['sourceHeig' + 'ht'] / this['_singleImg' + 'Size']['height'], this['_colCount'] = this['_imgTextur' + 'e']['sourceWidt' + 'h'] / this['_singleImg' + 'Size']['width'], this['scaleX'] = this['parent']['width'] / this['_singleImg' + 'Size']['width'], this['scaleY'] = this['parent']['height'] / this['_singleImg' + 'Size']['height'], this['centerX'] = this['centerY'] = 0x0, this['_startAnim' + 'ate']()));
            }['bind'](this))) : this['_setImg'](_0x32c85b));
        }
        ['_loadImg'](_0x39c9bd) {
            'string' == typeof this['_imgUrl'] && '' !== this['_imgUrl'] && Laya['loader']['load'](this['_imgUrl'], Laya['Handler']['create'](this, function () {
                this['destroyed'] || (this['_imgTextur' + 'e'] = Laya['loader']['getRes'](this['_imgUrl']), 'function' == typeof _0x39c9bd && _0x39c9bd());
            }['bind'](this)));
        }
        ['_updateFra' + 'me']() {
            if (this['isStop'])
                return;
            this['_curentFra' + 'me'] += 0x1, this['_curentFra' + 'me'] > this['_totalFram' + 'es'] && (this['_curentFra' + 'me'] = 0x1);
            let _0x33d834 = (this['_curentFra' + 'me'] - 0x1) % this['_colCount'] * this['_singleImg' + 'Size']['width'], _0x4e337f = Math['floor']((this['_curentFra' + 'me'] - 0x1) / this['_colCount']) * this['_singleImg' + 'Size']['height'];
            this['_offsetTex' + 'ture']['x'] = -_0x33d834, this['_offsetTex' + 'ture']['y'] = -_0x4e337f, this['graphics']['clear'](!0x0), this['graphics']['fillTextur' + 'e'](this['_imgTextur' + 'e'], 0x0, 0x0, this['_singleImg' + 'Size']['width'], this['_singleImg' + 'Size']['height'], 'no-repeat', this['_offsetTex' + 'ture']);
        }
        ['_startAnim' + 'ate']() {
            this['_endAnimat' + 'e'](), this['_tag'] = pgdk$['generateSt' + 'ring'](0x20), pgdk$['schedule$']['schedule']('Update_Ima' + 'ge_Animati' + 'on_' + this['_tag'], function () {
                this['_checkIsOn' + 'Show'](this) && this['_updateFra' + 'me']();
            }['bind'](this), !0x1, 0x64), this['_updateFra' + 'me'](), this['isStop'] = !0x1;
        }
        ['_endAnimat' + 'e']() {
            '' !== this['_tag'] && (pgdk$['schedule$']['unschedule']('Update_Ima' + 'ge_Animati' + 'on_' + this['_tag']), this['_tag'] = '');
        }
        ['clearAnim']() {
            this['isStop'] = !0x0, this['graphics']['clear'](!0x0);
        }
        ['onSizeChan' + 'ged'](_0x1963c6) {
            'function' == typeof _0x1963c6 && (this['_onSizeCha' + 'ngedCb'] = _0x1963c6);
        }
        ['offSizeCha' + 'nged']() {
            this['_onSizeCha' + 'ngedCb'] = null;
        }
        ['_checkIsOn' + 'Show'](_0x52b4db) {
            return null === _0x52b4db || _0x52b4db && _0x52b4db['visible'] && this['_checkIsOn' + 'Show'](_0x52b4db['parent']);
        }
    }
    class _0x1d662c extends _0x2ca6bb {
        constructor() {
            super(), this['viewName$'] = null, this['iconBg$'] = null, this['iconMask$'] = null, this['titleBg$'] = null, this['showTitle$'] = !0x0, this['isInCell$'] = !0x1, this['isRotate$'] = !0x0, this['titleColor' + '$'] = '#000000', this['dataType$'] = 'gameover';
        }
        ['onStart']() {
            this['owner']['bgColor'] = '', this['owner']['alpha'] = 0x1, this['executeWhe' + 'nSdkReady$'](this, this['initUI$']['bind'](this));
        }
        ['initUI$']() {
            this['ui$'] = new Laya['Image'](), this['owner']['addChild'](this['ui$']);
            let _0x4c9ed0 = pgdk$['getRandomA' + 'd$'](this['dataType$']);
            this['dataSource' + '$'] = _0x4c9ed0, this['dataSource' + '$'] && (this['ui$']['skin'] = this['iconBg$'], this['ui$']['anchorX'] = this['ui$']['anchorY'] = 0.5, this['ui$']['width'] = this['owner']['width'], this['ui$']['height'] = this['owner']['height'], this['setWidget$'](this['ui$'], 0x0, 0x0, 0x0, 0x0), this['createIcon' + '$'](), this['createTitl' + 'e$'](), this['createMask' + '$'](this['icon$'], this['iconMask$']), this['initEvents' + '$'](), this['resetRotat' + 'e$']());
        }
        ['createIcon' + '$']() {
            this['icon$'] = new Laya['Image'](), this['ui$']['addChild'](this['icon$']), this['isInCell$'] ? (this['icon$']['width'] = this['ui$']['width'] - 0x32, this['icon$']['height'] = this['ui$']['height'] - 0x32, this['icon$']['centerY'] = -0x5, this['icon$']['centerX'] = 0x0, this['icon$']['zOrder'] = -0x2) : (this['icon$']['width'] = this['ui$']['width'] - 0xa, this['icon$']['height'] = this['icon$']['width'], this['setWidget$'](this['icon$'], 0x5, null, 0x5, 0x5)), this['changeAd$']();
        }
        ['createTitl' + 'e$']() {
            this['showTitle$'] && (this['title$'] = this['createLabe' + 'l$'](this['ui$'], 0x18, this['dataSource' + '$']['title']['substring'](0x0, 0x6), this['titleColor' + '$']), this['setWidget$'](this['title$'], null, 0x5, null, null));
        }
        ['onUpdate']() {
            this['rotate$']();
        }
        ['changeAd$']() {
            if (pgdk$['recoverRan' + 'domAd$'](this['dataSource' + '$']), this['dataSource' + '$'] = pgdk$['getRandomA' + 'd$'](this['dataType$']), this['dataSource' + '$']) {
                if (this['setIcon$'](), !this['showTitle$'])
                    return;
                this['title$'] && (this['title$']['text'] = this['dataSource' + '$']['title']['substring'](0x0, 0x6));
            }
        }
        ['resetRotat' + 'e$']() {
            this['isRotate$'] && (this['ui$']['rotation'] = 0x0, this['rotateCnt'] = 0x0, this['rotateSpee' + 'd'] = 0x64, this['nextRotate' + 'Time'] = 0x3);
        }
        ['rotate$']() {
            if (!this['ui$'])
                return;
            if (!this['isRotate$'])
                return;
            let _0x1bdb16 = Laya['timer']['delta'] / 0x3e8;
            if (this['nextRotate' + 'Time'] > 0x0)
                this['nextRotate' + 'Time'] -= _0x1bdb16;
            else {
                let _0x29c315 = this['ui$']['rotation'];
                this['ui$']['rotation'] += this['rotateSpee' + 'd'] * _0x1bdb16, this['ui$']['rotation'] <= -0x5 ? (this['ui$']['rotation'] = -0x5, this['rotateSpee' + 'd'] = Math['abs'](this['rotateSpee' + 'd'])) : this['ui$']['rotation'] >= 0x5 && (this['ui$']['rotation'] = 0x5, this['rotateSpee' + 'd'] = -Math['abs'](this['rotateSpee' + 'd'])), (_0x29c315 >= 0x0 && this['ui$']['rotation'] <= 0x0 || _0x29c315 <= 0x0 && this['ui$']['rotation'] >= 0x0) && (this['rotateCnt']++, this['rotateCnt'] >= 0x4 && (this['resetRotat' + 'e$'](), this['changeAd$']()));
            }
        }
        ['click$']() {
            pgdk$['navigateTo' + 'MiniProgra' + 'm$'](this['dataSource' + '$'], this['viewName$']);
        }
        ['onRemoved$']() {
            pgdk$['recoverRan' + 'domAd$'](this['dataSource' + '$']);
        }
        ['initEvents' + '$']() {
            this['ui$']['on'](Laya['Event']['REMOVED'], this, this['onRemoved$']), this['ui$']['on'](Laya['Event']['CLICK'], this, this['click$']);
        }
        ['setIcon$']() {
            let _0x25f5cf, _0x2e361f = this['dataSource' + '$']['img'];
            if (this['gif'] && this['gif']['clearAnim'](), 'string' == typeof _0x2e361f)
                this['icon$']['skin'] = _0x2e361f;
            else {
                if (Object['keys'](_0x2e361f)['length']) {
                    for (const _0x116615 in _0x2e361f)
                        if (_0x2e361f['hasOwnProp' + 'erty'](_0x116615)) {
                            const _0x398703 = _0x2e361f[_0x116615];
                            if ('gifData' === _0x116615 && _0x398703 && Object['keys'](_0x398703)['length']) {
                                let _0x361f8a = new _0x2ec5b8({
                                    'width': 0x96,
                                    'height': 0x96
                                });
                                this['gif'] = this['icon$']['addChild'](_0x361f8a), _0x25f5cf = pgdk$['arrayRando' + 'm'](_0x398703), this['gif']['setImage'](_0x25f5cf);
                                break;
                            }
                            if ('array' === _0x116615 && _0x398703 && Object['keys'](_0x398703)['length']) {
                                _0x25f5cf = pgdk$['arrayRando' + 'm'](_0x398703), this['icon$']['skin'] = _0x25f5cf['path'];
                                break;
                            }
                        }
                }
            }
        }
    }
    class _0x1cba90 extends Laya['Script'] {
        constructor() {
            super(), this['forward'] = !0x0, this['_lastStart' + 'Index'] = -0x1, this['step'] = 0x1;
        }
        ['onStart']() {
            this['scrolling'] = !0x1, Laya['timer']['loop'](0x7d0, this, this['scrollToNe' + 'xt']), this['owner']['scrollBar']['on'](Laya['Event']['END'], this, this['onScrollEn' + 'd']);
        }
        ['scrollToNe' + 'xt']() {
            if (this['scrolling'])
                return;
            let _0x108745 = this['owner']['startIndex'];
            this['_lastStart' + 'Index'] === _0x108745 && (this['forward'] = !this['forward']), this['_lastStart' + 'Index'] = _0x108745, _0x108745 += this['forward'] ? this['step'] : -this['step'], this['owner']['tweenTo'](_0x108745, 0xc8), this['forward'] || 0x0 !== _0x108745 || (this['forward'] = !0x0);
        }
        ['onScrollEn' + 'd']() {
            this['scrolling'] = !0x1;
        }
        ['onMouseDow' + 'n'](_0x3f1465) {
            this['scrolling'] = !0x0;
        }
        ['onMouseUp'](_0x29931d) {
            this['scrolling'] = !0x1;
        }
    }
    class _0x304831 extends _0x2ca6bb {
        constructor() {
            super(), this['viewName$'] = null, this['bgSkin$'] = '#000000', this['iconBg$'] = null, this['iconMask$'] = null, this['showTitle$'] = !0x0, this['titleBg$'] = null, this['titleColor' + '$'] = '#FFFFFF', this['margin$'] = 0x5, this['spaceX$'] = 0x5, this['isInCell$'] = !0x1, this['dataType$'] = 'carousel', this['width'] = 0x2d0, this['height'] = 0xaf, this['cellWidth'] = 0x8c, this['cellHeight'] = 0xa5, this['cellCnt'] = 0x0, this['iconSize'] = 0x0, this['iconOrder'] = 0x0, this['iconOffset' + 'X'] = 0x0, this['iconOffset' + 'Y'] = 0x0, this['hScrollBar' + 'Skin$'] = 'common/hsc' + 'roll.png', this['titleHeigh' + 't$'] = 0x19, this['tittleFons' + 'ize$'] = 0x19;
        }
        ['onStart']() {
            this['initUI$'](), this['list$']['addCompone' + 'nt'](_0x1cba90), this['executeWhe' + 'nSdkReady$'](this, this['createAds$']['bind'](this));
        }
        ['initUI$']() {
            this['cellHeight'] = this['owner']['height'] - 0x2 * this['margin$'], this['cellWidth'] = this['showTitle$'] ? this['cellHeight'] - this['titleHeigh' + 't$'] : this['cellHeight'], this['owner']['bgColor'] = '', this['owner']['alpha'] = 0x1, this['titleBgLis' + 't$'] = this['titleBg$'] && this['titleBg$']['split'](','), this['ui$'] = new Laya['Box'](), this['ui$']['width'] = this['owner']['width'], this['ui$']['height'] = this['owner']['height'], this['setWidget$'](this['ui$'], 0x0, 0x0, 0x0, 0x0), this['owner']['addChild'](this['ui$']), this['createBg$'](), this['createList' + '$']();
        }
        ['getTitleBg' + '$']() {
            return this['titleBgLis' + 't$'] ? this['titleBgLis' + 't$'][Math['floor'](Math['random']() * this['titleBgLis' + 't$']['length'])] : void 0x0;
        }
        ['createBg$']() {
            if (!this['bgSkin$'] || '0' == this['bgSkin$'])
                return;
            let _0x445abc = this['createBgNo' + 'de$'](this['ui$'], this['bgSkin$'], this['width$'], this['height$']);
            this['setWidget$'](_0x445abc, 0x0, 0x0, 0x0, 0x0);
        }
        ['createList' + '$']() {
            if (this['list$'] = new Laya['List'](), this['list$']['repeatX'] = 0xa, this['list$']['repeatY'] = 0x1, this['list$']['spaceX'] = this['spaceX$'], this['list$']['hScrollBar' + 'Skin'] = this['hScrollBar' + 'Skin$'] || 'common/hsc' + 'roll.png', this['list$']['scrollBar']['visible'] = !0x1, this['list$']['renderHand' + 'ler'] = new Laya['Handler'](this, this['renderHand' + 'ler$']), this['setWidget$'](this['list$'], this['margin$'], this['margin$'], this['margin$'], this['margin$']), this['ui$']['addChild'](this['list$']), this['list$']['itemRender'] = {
                    'type': 'Image',
                    'props': {
                        'width': this['cellWidth'],
                        'height': this['cellHeight']
                    }
                }, this['isInCell$']) {
                let _0x35533c = (Laya['stage']['width'] - 0x19) / 0x5;
                this['list$']['itemRender'] = {
                    'type': 'Image',
                    'props': {
                        'width': _0x35533c,
                        'height': 0x87
                    }
                };
            }
        }
        ['renderHand' + 'ler$'](_0x407fbe, _0x32b3ec) {
            this['renderIcon' + 'Bg$'](_0x407fbe, _0x32b3ec), this['renderIcon' + '$'](_0x407fbe, _0x32b3ec), this['renderTitl' + 'e$'](_0x407fbe, _0x32b3ec), this['registerAd' + 'ClickEvent' + '$'](_0x407fbe, this['viewName$']);
        }
        ['renderIcon' + 'Bg$'](_0x4f66c9, _0x351248) {
            this['iconBg$'] && (this['iconBgNode' + '$'] = this['createBgNo' + 'de$'](_0x4f66c9, this['iconBg$'], this['cellWidth'], this['cellHeight']), this['iconBgNode' + '$']['zOrder'] = -0x1, this['setWidget$'](this['iconBgNode' + '$'], 0x0, 0x0, 0x0, 0x0));
        }
        ['renderIcon' + '$'](_0x30ab06, _0xf62a31) {
            let _0x614d7f = _0x30ab06['getChildBy' + 'Name']('GameIcon');
            if (!_0x614d7f) {
                if ((_0x614d7f = _0x30ab06['addChild'](new Laya['Image']()))['name'] = 'GameIcon', this['iconBgNode' + '$']) {
                    let _0x293d58 = 0x5;
                    if (_0x614d7f['width'] = _0x614d7f['height'] = this['cellWidth'] - 0x2 * _0x293d58, _0x614d7f['left'] = _0x293d58, _0x614d7f['top'] = _0x293d58, this['isInCell$']) {
                        let _0x18f725 = (Laya['stage']['width'] - 0x19) / 0x5;
                        _0x614d7f['bottom'] = 0xf, _0x614d7f['top'] = 0xa, _0x614d7f['left'] = _0x614d7f['right'] = 0.5 * (_0x18f725 - Math['min'](0x73, _0x18f725 - 0x14)), _0x614d7f['zOrder'] = -0x2;
                    }
                } else
                    _0x614d7f['width'] = _0x614d7f['height'] = this['cellWidth'];
                if (_0x614d7f['left'] = this['iconOffset' + 'X'] || _0x614d7f['left'], _0x614d7f['top'] = this['iconOffset' + 'Y'] || _0x614d7f['top'], _0x614d7f['zOrder'] = this['iconOrder'] || _0x614d7f['zOrder'], _0x614d7f['width'] = this['iconSize'] || _0x614d7f['width'], _0x614d7f['height'] = this['iconSize'] || _0x614d7f['height'], this['iconMask$']) {
                    let _0x2a547c = new Laya['Image']();
                    _0x2a547c['width'] = _0x614d7f['width'], _0x2a547c['height'] = _0x614d7f['height'], _0x2a547c['skin'] = this['iconMask$'], _0x614d7f['mask'] = _0x2a547c;
                }
            }
            this['setIcon$'](_0x30ab06, _0x614d7f);
        }
        ['renderTitl' + 'e$'](_0x1adcbd, _0x33659e) {
            if (!this['showTitle$'])
                return;
            let _0x36bb91 = _0x1adcbd['getChildBy' + 'Name']('GameTitleB' + 'g');
            _0x36bb91 || ((_0x36bb91 = _0x1adcbd['addChild'](new Laya['Image']()))['bottom'] = 0x0, _0x36bb91['name'] = 'GameTitleB' + 'g', _0x36bb91['width'] = this['cellWidth'], _0x36bb91['height'] = 0x19, _0x36bb91['skin'] = this['getTitleBg' + '$']());
            let _0x5a25a3 = _0x36bb91['getChildBy' + 'Name']('GameTitle');
            _0x5a25a3 || ((_0x5a25a3 = this['createLabe' + 'l$'](_0x36bb91, this['tittleFons' + 'ize$'], _0x1adcbd['dataSource']['title']['substring'](0x0, 0x6), this['titleColor' + '$']))['name'] = 'GameTitle', _0x5a25a3['anchorX'] = _0x5a25a3['anchorY'] = 0.5, _0x5a25a3['centerX'] = 0x0, this['setWidget$'](_0x5a25a3, null, 0x0, null, null));
        }
        ['createAds$']() {
            this['list$']['array'] = pgdk$['unsortedAd' + 's$'](this['dataType$'], this['cellCnt']);
        }
        ['setIcon$'](_0x4212a8, _0x4498f1) {
            let _0x9adcf7, _0x5977ba = _0x4212a8['dataSource']['img'];
            if ('string' == typeof _0x5977ba)
                _0x4498f1['skin'] = _0x5977ba;
            else {
                if (Object['keys'](_0x5977ba)['length']) {
                    for (const _0x15c06e in _0x5977ba)
                        if (_0x5977ba['hasOwnProp' + 'erty'](_0x15c06e)) {
                            const _0x2c23ab = _0x5977ba[_0x15c06e];
                            if ('gifData' === _0x15c06e && _0x2c23ab && Object['keys'](_0x2c23ab)['length']) {
                                let _0x6c92c7 = new _0x2ec5b8({
                                        'width': 0x96,
                                        'height': 0x96
                                    }), _0xd4c06 = _0x4498f1['addChild'](_0x6c92c7);
                                _0x9adcf7 = pgdk$['arrayRando' + 'm'](_0x2c23ab), _0xd4c06['setImage'](_0x9adcf7);
                                break;
                            }
                            if ('array' === _0x15c06e && _0x2c23ab && Object['keys'](_0x2c23ab)['length']) {
                                _0x9adcf7 = pgdk$['arrayRando' + 'm'](_0x2c23ab), _0x4498f1['skin'] = _0x9adcf7['path'];
                                break;
                            }
                        }
                }
            }
        }
    }
    class _0x12b776 extends _0x2ca6bb {
        constructor() {
            super(), this['viewName$'] = null, this['bgSkin$'] = null, this['iconMask$'] = null, this['iconBg$'] = null, this['titleBg$'] = null, this['titleColor' + '$'] = '#FFFFFF', this['columns$'] = 0x3, this['rows$'] = 0x0, this['spacingX$'] = 0xa, this['spacingY$'] = 0xa, this['dataType$'] = 'gameover';
        }
        ['onStart']() {
            this['initUI$'](), this['executeWhe' + 'nSdkReady$'](this, this['createAds$']['bind'](this));
        }
        ['initUI$']() {
            this['owner']['bgColor'] = '', this['owner']['alpha'] = 0x1, this['ui$'] = this['owner']['addChild'](new Laya['Box']()), this['ui$']['viewName$'] = this['viewName$'];
            let _0x2a7e17 = this['ui$']['width'] = this['owner']['width'], _0x34f3b0 = this['ui$']['height'] = this['owner']['height'];
            if (this['setWidget$'](this['ui$'], 0x0, 0x0, 0x0, 0x0), 'number' == typeof top && 'number' == typeof bottom && (_0x34f3b0 = Laya['stage']['height'] - bottom - top), 'number' == typeof left && 'number' == typeof right && (_0x2a7e17 = Laya['stage']['width'] - right - left), this['cellWidth'] = Math['floor']((_0x2a7e17 - 0xa - this['spacingX$'] * (this['columns$'] - 0x1)) / this['columns$']), this['cellHeight'] = Math['floor'](1.2 * this['cellWidth']), this['rows$']) {
                let _0x187f28 = (this['cellHeight'] + this['spacingY$']) * this['rows$'] - this['spacingY$'] + 0xa;
                _0x34f3b0 > _0x187f28 && (_0x34f3b0 = _0x187f28, this['ui$']['bottom'] = NaN, this['ui$']['height'] = _0x34f3b0);
            }
            this['width$'] = _0x2a7e17, this['height$'] = _0x34f3b0, this['createBg$'](), this['createList' + '$'](), this['titleBgLis' + 't$'] = this['titleBg$'] ? this['titleBg$']['split'](',') : void 0x0, this['list$']['addCompone' + 'nt'](_0x1cba90)['step'] = 0x3;
        }
        ['getTitleBg' + '$'](_0x414f21) {
            return this['titleBgLis' + 't$'] ? this['titleBgLis' + 't$'][Math['floor'](Math['random']() * this['titleBgLis' + 't$']['length'])] : void 0x0;
        }
        ['createBg$']() {
            if (!this['bgSkin$'])
                return;
            let _0x3f4cbf;
            if (this['bgSkin$']['startWith$']('#'))
                (_0x3f4cbf = this['ui$']['addChild'](new Laya['Box']()))['width'] = this['width$'], _0x3f4cbf['height'] = this['height$'], _0x3f4cbf['bgColor'] = this['bgSkin$'], _0x3f4cbf['alpha'] = 0.7;
            else {
                let _0x18ae8b = this['bgSkin$']['split'](';');
                (_0x3f4cbf = this['ui$']['addChild'](new Laya['Image']()))['width'] = this['width$'], _0x3f4cbf['height'] = this['height$'], _0x3f4cbf['skin'] = _0x18ae8b[0x0], _0x18ae8b[0x1] && (_0x3f4cbf['sizeGrid'] = _0x18ae8b[0x1]);
            }
            this['setWidget$'](_0x3f4cbf, 0x0, 0x0, 0x0, 0x0);
        }
        ['createList' + '$']() {
            this['list$'] = this['ui$']['addChild'](this['createBase' + 'List$'](!0x1)), this['list$']['repeatX'] = this['columns$'], this['list$']['repeatY'] = Math['floor'](this['height$'] / this['cellHeight']) + 0x1, this['list$']['name'] = 'List', this['list$']['spaceX'] = this['spacingX$'], this['list$']['spaceY'] = this['spacingY$'], this['list$']['anchorX'] = this['list$']['anchorY'] = 0.5, this['list$']['width'] = this['width$'], this['list$']['height'] = this['height$'], this['setWidget$'](this['list$'], 0x5, 0x5, 0x5, 0x5), this['list$']['renderHand' + 'ler'] = new Laya['Handler'](this, this['renderHand' + 'ler$']), this['list$']['itemRender'] = {
                'type': 'Image',
                'props': {
                    'width': this['cellWidth'],
                    'height': this['cellHeight']
                }
            }, this['createAds$']();
        }
        ['renderHand' + 'ler$'](_0x4ea03f, _0x1865df) {
            if (0x0 === _0x4ea03f['numChildre' + 'n']) {
                if (this['iconBg$']) {
                    let _0x9a123c;
                    if (this['iconBg$']['startWith$']('#'))
                        (_0x9a123c = _0x4ea03f['addChild'](new Laya['Box']()))['bgColor'] = this['iconBg$'];
                    else {
                        _0x9a123c = _0x4ea03f['addChild'](new Laya['Image']());
                        let _0x289ba0 = this['iconBg$']['split'](';');
                        _0x9a123c['skin'] = _0x289ba0[0x0], _0x9a123c['sizeGrid'] = _0x289ba0[0x1];
                    }
                    _0x9a123c['width'] = this['cellWidth'], _0x9a123c['height'] = this['cellHeight'];
                }
                let _0xe51e7e = 0x5;
                if (_0x4ea03f['icon$'] = _0x4ea03f['addChild'](new Laya['Image']()), _0x4ea03f['icon$']['name'] = 'GameIcon', _0x4ea03f['icon$']['width'] = _0x4ea03f['icon$']['height'] = this['iconBg$'] ? this['cellWidth'] - 0x2 * _0xe51e7e : this['cellWidth'], _0x4ea03f['icon$']['top'] = this['iconBg$'] ? _0xe51e7e : 0x0, _0x4ea03f['icon$']['centerX'] = 0x0, this['setIcon$'](_0x4ea03f), this['iconMask$']) {
                    let _0x5e7e28 = new Laya['Image']();
                    _0x5e7e28['width'] = _0x4ea03f['icon$']['width'], _0x5e7e28['height'] = _0x4ea03f['icon$']['height'], _0x5e7e28['skin'] = this['iconMask$'], _0x4ea03f['icon$']['mask'] = _0x5e7e28;
                }
                this['titleBg$'] && (_0x4ea03f['titleBg$'] = _0x4ea03f['addChild'](new Laya['Image']()), _0x4ea03f['titleBg$']['bottom'] = 0x0, _0x4ea03f['titleBg$']['left'] = _0x4ea03f['titleBg$']['right'] = 0x0, _0x4ea03f['titleBg$']['height'] = this['cellHeight'] - this['cellWidth'], _0x4ea03f['titleBg$']['skin'] = this['getTitleBg' + '$'](_0x1865df));
                let _0x4e6047 = this['cellHeight'] - this['cellWidth'] - 0xa;
                _0x4ea03f['title$'] = this['createLabe' + 'l$'](_0x4ea03f, _0x4e6047, _0x4ea03f['dataSource']['title']['substring'](0x0, 0x6), this['titleColor' + '$']), _0x4ea03f['title$']['anchorX'] = _0x4ea03f['title$']['anchorY'] = 0.5, _0x4ea03f['title$']['centerX'] = 0x0, this['setWidget$'](_0x4ea03f['title$'], null, 0x5, null, null);
            }
            this['setIcon$'](_0x4ea03f), _0x4ea03f['title$']['text'] = _0x4ea03f['dataSource']['title']['substring'](0x0, 0x6), this['registerAd' + 'ClickEvent' + '$'](_0x4ea03f, this['viewName$']);
        }
        ['createAds$']() {
            this['list$']['array'] = window['pgdk$'] && pgdk$['unsortedAd' + 's$'](this['dataType$'], this['rows$'] * this['columns$']);
        }
        ['setIcon$'](_0x529c20) {
            let _0x1383ae, _0x426008 = _0x529c20['dataSource']['img'];
            if ('string' == typeof _0x426008)
                _0x529c20['icon$']['skin'] = _0x426008;
            else {
                if (Object['keys'](_0x426008)['length']) {
                    for (const _0x310df3 in _0x426008)
                        if (_0x426008['hasOwnProp' + 'erty'](_0x310df3)) {
                            const _0x1c1afb = _0x426008[_0x310df3];
                            if ('gifData' === _0x310df3 && _0x1c1afb && Object['keys'](_0x1c1afb)['length']) {
                                let _0x123011 = new _0x2ec5b8({
                                        'width': 0x96,
                                        'height': 0x96
                                    }), _0x31bd08 = _0x529c20['icon$']['addChild'](_0x123011);
                                _0x1383ae = pgdk$['arrayRando' + 'm'](_0x1c1afb), _0x31bd08['setImage'](_0x1383ae);
                                break;
                            }
                            if ('array' === _0x310df3 && _0x1c1afb && Object['keys'](_0x1c1afb)['length']) {
                                _0x1383ae = pgdk$['arrayRando' + 'm'](_0x1c1afb), _0x529c20['icon$']['skin'] = _0x1383ae['path'];
                                break;
                            }
                        }
                }
            }
        }
    }
    class _0x1216fe extends _0x2ca6bb {
        constructor() {
            super(), this['viewName$'] = null, this['dialogBgSk' + 'in$'] = null, this['width$'] = 0x1f4, this['height$'] = 0x2bc, this['iconMask$'] = null, this['titleBg$'] = null, this['titleColor' + '$'] = '#FFFFFF', this['hScrollBar' + 'Skin$'] = null, this['isCreateCl' + 'oseLabel$'] = !0x1, this['listMargin' + '$'] = 0x2;
        }
        ['onStart']() {
            this['owner']['on'](Laya['Event']['CLICK'], this, this['showUI$']), Laya['isShowView' + 'Index$'] ? this['showUI$']() : Laya['isShowView' + 'Index$'] = !0x0;
        }
        ['showUI$']() {
            this['ui$'] ? Laya['stage']['addChild'](this['ui$']) : this['initUI$']();
        }
        ['initUI$']() {
            this['titleBgLis' + 't$'] = this['titleBg$'] && this['titleBg$']['split'](','), this['ui$'] = new Laya['Box'](), this['ui$']['zOrder'] = 0x3b9ac9ff, this['ui$']['name'] = 'PgViewInde' + 'x', this['setWidget$'](this['ui$'], 0x0, 0x0, 0x0, 0x0), Laya['stage']['addChild'](this['ui$']), this['createBg$'](), this['createDial' + 'ogBg$'](), this['createTitl' + 'e$'](), this['createClos' + 'eBtn$'](), this['createGrid' + '$'](), this['createClos' + 'eLabel$']();
        }
        ['getTitleBg' + '$']() {
            return this['titleBgLis' + 't$'] ? this['titleBgLis' + 't$'][Math['floor'](Math['random']() * this['titleBgLis' + 't$']['length'])] : void 0x0;
        }
        ['createBg$']() {
            let _0x588b8d = new Laya['Box']();
            _0x588b8d['name'] = 'ImageBg', _0x588b8d['bgColor'] = '#000000', this['setWidget$'](_0x588b8d, 0x0, 0x0, 0x0, 0x0), _0x588b8d['alpha'] = 0.7, this['ui$']['addChild'](_0x588b8d);
        }
        ['createTitl' + 'e$']() {
            let _0x17f32f = new Laya['Image']();
            _0x17f32f['skin'] = 'sdk/index-' + 'hot.png', _0x17f32f['centerX'] = 0x0, _0x17f32f['top'] = 0x14, this['dialogBg$']['addChild'](_0x17f32f);
        }
        ['createClos' + 'eBtn$']() {
            let _0x48a687 = new Laya['Image']();
            _0x48a687['skin'] = 'sdk/index-' + 'close.png', _0x48a687['top'] = 0x14, _0x48a687['right'] = 0x14, _0x48a687['on'](Laya['Event']['CLICK'], this, this['doClose$']), this['dialogBg$']['addChild'](_0x48a687);
        }
        ['doClose$']() {
            this['ui$']['removeSelf']();
        }
        ['createDial' + 'ogBg$']() {
            this['dialogBg$'] = new Laya['Image'](), this['dialogBg$']['width'] = this['width$'], this['dialogBg$']['height'] = this['height$'], this['dialogBg$']['centerX'] = 0x0, this['dialogBg$']['centerY'] = 0x0;
            let _0x2f26f7 = this['dialogBgSk' + 'in$']['split'](';');
            this['dialogBg$']['skin'] = _0x2f26f7[0x0], _0x2f26f7[0x1] && (this['dialogBg$']['sizeGrid'] = _0x2f26f7[0x1]), this['ui$']['addChild'](this['dialogBg$']);
        }
        ['createGrid' + '$']() {
            this['createGrid' + 'Bg$'](), this['grid$'] = new Laya['Box'](), this['grid$']['width'] = this['width$'] - 0x2 * this['listMargin' + '$'], this['grid$']['height'] = this['height$'] - 0x50, this['grid$']['centerX'] = 0x0, this['grid$']['bottom'] = this['listMargin' + '$'], this['dialogBg$']['addChild'](this['grid$']), this['comp'] = this['grid$']['addCompone' + 'nt'](_0x12b776), this['comp']['dataType$'] = 'slider', this['comp']['rows$'] = 0x6, this['comp']['iconMask$'] = this['iconMask$'], this['comp']['titleBg$'] = this['titleBg$'], this['comp']['titleColor' + '$'] = this['titleColor' + '$'];
        }
        ['createGrid' + 'Bg$']() {
            this['grid$'] = new Laya['Image'](), this['grid$']['skin'] = 'sdk/image_' + 'icon_bg.pn' + 'g', this['grid$']['sizeGrid'] = '20,20,20,2' + '0', this['grid$']['width'] = this['width$'] - 0x2 * this['listMargin' + '$'], this['grid$']['height'] = this['height$'] - 0x50, this['grid$']['centerX'] = 0x0, this['grid$']['bottom'] = this['listMargin' + '$'], this['dialogBg$']['addChild'](this['grid$']);
        }
        ['createClos' + 'eLabel$']() {
            this['isCreateCl' + 'oseLabel$'] ? (this['label_clos' + 'e$'] || (this['label_clos' + 'e$'] = this['createLabe' + 'l$'](this['dialogBg$'], 0x32, '关闭', '#c0c0c0'), this['label_clos' + 'e$']['centerX'] = 0x0, this['label_clos' + 'e$']['bottom'] = -0x50, this['label_clos' + 'e$']['on'](Laya['Event']['CLICK'], this, this['doClose$'])), this['label_clos' + 'e$']['visible'] = !0x0) : this['label_clos' + 'e$'] && (this['label_clos' + 'e$']['visible'] = !0x1);
        }
    }
    class _0x311bf8 extends _0x2ca6bb {
        static ['create'](_0x26bd66) {
            if (pgdk$['hideBanner' + '$'](), Laya['gameCenter' + 'UI$'])
                return Laya['stage']['addChild'](Laya['gameCenter' + 'UI$']), Laya['gameCenter' + 'UI$']['getCompone' + 'nt'](_0x311bf8)['closeCallb' + 'ack$'] = _0x26bd66, Laya['gameCenter' + 'UI$'];
            let _0x210941 = new Laya['Box']();
            _0x210941['bgColor'] = '#000000', _0x210941['name'] = 'GameCenter' + 'UI', _0x210941['viewName$'] = '游戏中心', _0x210941['zOrder'] = 0x3b9ac9ff, _0x210941['width'] = 0x2d0, _0x210941['height'] = 0x500, Laya['stage']['addChild'](_0x210941), Laya['gameCenter' + 'UI$'] = _0x210941;
            let _0x25a01e = _0x210941['addCompone' + 'nt'](_0x311bf8);
            _0x25a01e['setWidget$'](_0x210941, 0x0, 0x0, 0x0, 0x0), _0x25a01e['closeCallb' + 'ack$'] = _0x26bd66;
        }
        constructor() {
            super(), this['titleBg$'] = 'sdk/1.png,' + 'sdk/2.png,' + 'sdk/3.png,' + 'sdk/4.png,' + 'sdk/5.png,' + 'sdk/6.png,' + 'sdk/7.png,' + 'sdk/8.png,' + 'sdk/9.png', this['closeCallb' + 'ack$'] = void 0x0;
        }
        ['onStart']() {
            this['initUI$']();
        }
        ['onEnable']() {
            this['reset$']();
        }
        ['reset$']() {
            this['canTrick$'] = pgdk$['isGameCent' + 'erViewDela' + 'y$'](), this['hasClick$'] = !0x1, this['hasShowBan' + 'ner$'] = !0x1;
        }
        ['initUI$']() {
            this['reset$'](), this['createList' + 'Ads$'](), this['createGrid' + 'Ads$'](), this['createBtnC' + 'ontinue$'](), this['createBann' + 'erBox$'](), this['owner']['addCompone' + 'nt'](_0x38bfcf)['boxBanner$'] = this['boxBanner$'];
        }
        ['createBann' + 'erBox$']() {
            this['boxBanner$'] = this['owner']['addChild'](new Laya['Box']()), this['boxBanner$']['zOrder'] = 0x1, this['boxBanner$']['left'] = this['boxBanner$']['right'] = 0x0, this['boxBanner$']['bottom'] = 0xa, this['boxBanner$']['height'] = 0xdc, this['boxBanner$']['bgColor'] = '#FFFFFF';
        }
        ['createList' + 'Ads$']() {
            this['list1$'] = this['owner']['addChild'](new Laya['Box']()), this['list1$']['top'] = 0x64, this['list1$']['width'] = 0x2a8, this['list1$']['height'] = 0xb4, this['list1$']['centerX'] = 0x0;
            let _0x15607a = this['list1$']['addCompone' + 'nt'](_0x304831);
            _0x15607a['dataType$'] = 'dialog', _0x15607a['bgSkin$'] = '', _0x15607a['titleColor' + '$'] = '#ffffff', _0x15607a['tittleFons' + 'ize$'] = 0x12;
        }
        ['createGrid' + 'Ads$']() {
            this['list$'] = this['owner']['addChild'](new Laya['Box']()), this['list$']['width'] = 0x2a8, this['list$']['top'] = 0x12c, this['list$']['bottom'] = 0x14, this['list$']['centerX'] = 0x0;
            let _0x5aa1b4 = this['list$']['addCompone' + 'nt'](_0x12b776);
            _0x5aa1b4['dataType$'] = 'dialog', _0x5aa1b4['iconBg$'] = 'sdk/image_' + 'icon_bg.pn' + 'g;20,20,20' + ',20', _0x5aa1b4['iconMask$'] = 'sdk/image_' + 'icon_bg.pn' + 'g', _0x5aa1b4['titleBg$'] = this['titleBg$'], _0x5aa1b4['spacingY$'] = 0x14, _0x5aa1b4['rows$'] = 0x6;
        }
        ['createBtnC' + 'ontinue$']() {
            let _0x520f4c = this['owner']['addChild'](new Laya['Image']());
            _0x520f4c['skin'] = 'sdk/btn-co' + 'ntinue-new' + '.png', _0x520f4c['centerX'] = 0x0, _0x520f4c['bottom'] = 0x73, _0x520f4c['scaleX'] = _0x520f4c['scaleY'] = 0.9, _0x520f4c['on'](Laya['Event']['CLICK'], this, function () {
                if (this['canTrick$']) {
                    if (this['hasClick$']) {
                        if (!this['hasShowBan' + 'ner$'])
                            return;
                        this['_onClose$']();
                    } else
                        this['hasClick$'] = !0x0, Laya['timer']['once'](0x3e8, this, this['_showBanne' + 'r$']);
                } else
                    this['_onClose$']();
            }['bind'](this));
        }
        ['_onClose$']() {
            this['owner']['removeSelf'](), this['closeCallb' + 'ack$'] && (this['closeCallb' + 'ack$'](), this['closeCallb' + 'ack$'] = void 0x0);
        }
        ['_showBanne' + 'r$']() {
            this['owner']['getCompone' + 'nt'](_0x38bfcf)['restoreBan' + 'ner$'](), this['hasShowBan' + 'ner$'] = !0x0, Laya['timer']['once'](0x3e8, this, this['_hideBanne' + 'r$']);
        }
        ['_hideBanne' + 'r$']() {
            pgdk$['hideBanner' + '$']();
        }
        ['createBann' + 'er$']() {
            this['bannerPos$'] = this['owner']['addChild'](new Laya['Box']()), this['bannerPos$']['width'] = 0x2bc, this['bannerPos$']['height'] = 0xdc, this['bannerPos$']['centerX'] = 0x0, this['bannerPos$']['bottom'] = 0x3c, this['showBanner' + '$']();
        }
    }
    Laya['createGame' + 'Center'] = _0x311bf8['create'];
    class _0x2fd06 extends Laya['Script'] {
        constructor() {
            super();
        }
        static ['getInstanc' + 'e$']() {
            return null == _0x2fd06['instance'] && (_0x2fd06['instance'] = new _0x2fd06()), _0x2fd06['instance']['init$']();
        }
        ['init$']() {
            console['log']('Init\x20Sched' + 'uler\x20Insta' + 'nce...');
            var _0x4218e4 = {};
            return {
                'schedule': function (_0x571df1, _0x2117eb, _0x1bc4b5, _0x570691, _0x45e48b) {
                    if (!this['_checkKey'](_0x571df1) || !this['_checkCall' + 'back'](_0x2117eb))
                        return !0x1;
                    if (_0x4218e4[_0x571df1])
                        return !0x1;
                    null == _0x570691 && (_0x570691 = _0x1bc4b5 ? 0x1 : 0x0), null == _0x45e48b && (_0x45e48b = Number['MAX_VALUE']);
                    let _0x2d3628 = 0x0 === _0x45e48b ? _0x2117eb : function (_0x575e8c) {
                        let _0x30887c = _0x4218e4[_0x571df1];
                        if (_0x30887c) {
                            if (_0x30887c['invokeTime' + 's'] += 0x1, _0x30887c['invokeTime' + 's'] >= _0x45e48b) {
                                let _0x20b960 = _0x30887c['cb'];
                                this['unschedule'](_0x571df1), _0x20b960();
                            } else
                                _0x30887c['cb'](_0x575e8c);
                        }
                    }['bind'](this);
                    return 0x0 === _0x45e48b ? _0x1bc4b5 ? Laya['timer']['frameOnce'](_0x570691, this, _0x2d3628) : Laya['timer']['once'](_0x570691, this, _0x2d3628) : (_0x4218e4[_0x571df1] = {
                        'invokeTimes': 0x0,
                        'cb': _0x2117eb,
                        'scheduleCb': _0x2d3628
                    }, _0x1bc4b5 ? Laya['timer']['frameLoop'](_0x570691, this, _0x2d3628) : Laya['timer']['loop'](_0x570691, this, _0x2d3628)), !0x0;
                },
                'unschedule': function (_0x384aab) {
                    return !!this['_checkKey'](_0x384aab) && (!!_0x4218e4[_0x384aab] && (Laya['timer']['clear'](this, _0x4218e4[_0x384aab]['scheduleCb']), delete _0x4218e4[_0x384aab], !0x0));
                },
                'isScheduled': function (_0x5d6d6a) {
                    return !!this['_checkKey'](_0x5d6d6a) && !!_0x4218e4[_0x5d6d6a];
                },
                'unscheduleAll': function () {
                    for (let _0x123fc8 in _0x4218e4)
                        Laya['timer']['clear'](this, _0x4218e4[_0x123fc8]['cb']);
                    _0x4218e4 = {};
                },
                '_checkKey': function (_0x445c51) {
                    return 'string' == typeof _0x445c51 && '' !== _0x445c51;
                },
                '_checkCallback': function (_0x3b3c94) {
                    return 'function' == typeof _0x3b3c94;
                }
            };
        }
    }
    _0x2fd06['instance'] = void 0x0;
    class _0x4e92fe extends Laya['Script'] {
        constructor() {
            super(), window['pgdk$'] = this, this['app_versio' + 'n'] = 0x1, this['_banners$'] = [], this['MIN_BANNER' + '_WIDTH$'] = 0x12c, this['MIN_BANNER' + '_HEIGHT$'] = 0x7a, this['schedule$'] = _0x2fd06['getInstanc' + 'e$']();
        }
        ['onStart']() {
            console['log'](this['dataHandle' + 'r$']), this['_getParamD' + 'ata$']();
        }
        ['unsortedAd' + 's$'](_0x1cfb72, _0x3c114a) {
            let _0x57f646 = [];
            if (pgdk$['isSdkReady' + '$']) {
                let _0x5f35da = [], _0x12b2cd = pgdk$['getAds$'](_0x1cfb72);
                for (let _0x5b34b2 = 0x0; _0x5b34b2 < _0x12b2cd['length']; _0x5b34b2++)
                    _0x5f35da['push'](_0x12b2cd[_0x5b34b2]);
                for (; _0x5f35da['length'] > 0x0;) {
                    let _0x34c147 = Math['floor'](Math['random']() * _0x5f35da['length']);
                    _0x57f646['push'](_0x5f35da['removeAt$'](_0x34c147));
                }
                let _0x10333c = _0x57f646['length'];
                if (_0x10333c < _0x3c114a) {
                    let _0x5d6aae = _0x3c114a - _0x57f646['length'];
                    for (; --_0x5d6aae > -0x1;)
                        _0x57f646['push'](_0x57f646[Math['floor'](_0x10333c * Math['random']())]);
                }
            }
            return _0x57f646;
        }
        ['getAds$'](_0x4917a0) {
            return this['dataHandle' + 'r$']['getAds$'](_0x4917a0);
        }
        ['getRandomA' + 'd$'](_0x353a28) {
            if (this['isSdkReady' + '$'])
                return this['_randomAdC' + 'ache$'] || (this['_randomAdC' + 'ache$'] = [], this['_randomAdC' + 'ache$']['pushAll$'](this['getAds$'](_0x353a28))), this['_randomAdC' + 'ache$'] && this['_randomAdC' + 'ache$']['length'] > 0x0 && this['_randomAdC' + 'ache$']['removeAt$'](Math['floor'](Math['random']() * this['_randomAdC' + 'ache$']['length']));
        }
        ['randomInt'](_0x4a3f89, _0x18b652) {
            return Math['floor'](Math['random']() * (_0x18b652 - _0x4a3f89) + _0x4a3f89);
        }
        ['generateSt' + 'ring'](_0x511aff) {
            let _0x56c4ff = '';
            if ('number' == typeof _0x511aff) {
                for (let _0x4a3e06 = 0x0; _0x4a3e06 < _0x511aff; _0x4a3e06++)
                    Math['random']() < 0.5 ? _0x56c4ff += String['fromCharCo' + 'de'](this['randomInt']('0'['charCodeAt'](), '0'['charCodeAt']() + 0x9)) : _0x56c4ff += String['fromCharCo' + 'de'](this['randomInt']('a'['charCodeAt'](), 'a'['charCodeAt']() + 0x19));
            }
            return _0x56c4ff;
        }
        ['arrayRando' + 'm'](_0x33519c) {
            return _0x33519c[this['randomInt'](0x0, _0x33519c['length'])];
        }
        ['recoverRan' + 'domAd$'](_0x155ceb) {
            _0x155ceb && this['isSdkReady' + '$'] && -0x1 === this['_randomAdC' + 'ache$']['indexOf'](_0x155ceb) && this['_randomAdC' + 'ache$']['push'](_0x155ceb);
        }
        ['isIOS$']() {
            if (this['platformHa' + 'ndler$'] && this['platformHa' + 'ndler$']['isIOS$'])
                return this['platformHa' + 'ndler$']['isIOS$']();
        }
        ['shakePhone' + '$'](_0x338f46) {
        }
        ['_getParamD' + 'ata$']() {
            let _0x53b6f3 = new Laya['HttpReques' + 't']();
            this['platformHa' + 'ndler$'] && (this['appId$'] = this['platformHa' + 'ndler$']['appId$']), _0x53b6f3['once'](Laya['Event']['COMPLETE'], this, this['_recivePar' + 'amData$']), _0x53b6f3['send']('https://ga' + 'me.littleb' + 'oy.net/api' + '/gameparam' + 's.jsp?appi' + 'd=' + this['appId$'] + '&version=' + this['app_versio' + 'n'] + '&t=' + Date['now'](), null, 'POST', 'json', [
                'Content-Ty' + 'pe',
                'applicatio' + 'n/x-www-fo' + 'rm-urlenco' + 'ded;charse' + 't=utf-8'
            ]);
        }
        ['_recivePar' + 'amData$'](_0x26ffa5) {
            this['cfg$'] = _0x26ffa5['data'], this['isParamGot' + '$'] = !0x0;
        }
        ['canTrick$']() {
            switch (this['channel$']) {
            case 'zs':
                if (this['dataHandle' + 'r$'] && this['dataHandle' + 'r$']['cfg$']) {
                    if (0x1 !== this['dataHandle' + 'r$']['cfg$']['zs_switch'])
                        return !0x1;
                    if (0x1 !== this['dataHandle' + 'r$']['cfg$']['zs_banner_' + 'city'])
                        return !0x1;
                }
            case 'qy':
                return !0x0;
            default:
                return this['cfg$'] && this['cfg$']['cheat'];
            }
        }
        ['getPgCfg$'](_0x56ca5e) {
            try {
                return this['cfg$'][_0x56ca5e];
            } catch (_0x48156b) {
                return;
            }
        }
        ['isGameCent' + 'erViewDela' + 'y$']() {
            return this['canTrick$']() && this['getPgCfg$']('gameCenter' + 'ViewDelayR' + 'ate') > Math['random']();
        }
        ['isResultTr' + 'ick$']() {
            return this['canTrick$']() && this['getPgCfg$']('isResultTr' + 'ick') > Math['random']();
        }
        ['isShowExit' + '$']() {
            return this['canTrick$']() && this['getPgCfg$']('showExitRa' + 'te') > Math['random']();
        }
        ['getChannle' + 'Config$']() {
            if (this['dataHandle' + 'r$'] && this['dataHandle' + 'r$']['getConfig$'])
                return this['dataHandle' + 'r$']['getConfig$']();
        }
        ['showBanner' + '$'](_0x4f3c27, _0x22e0ee) {
            this['platformHa' + 'ndler$'] && this['platformHa' + 'ndler$']['showBanner' + '$'](_0x4f3c27, _0x22e0ee);
        }
        ['hideBanner' + '$']() {
            this['platformHa' + 'ndler$'] && this['platformHa' + 'ndler$']['hideBanner' + '$']();
        }
        ['_getUis$']() {
            return this['_uis$'] || (this['_uis$'] = []), this['_uis$'];
        }
        ['onUIOpen$'](_0x2fb1be) {
            -0x1 === this['_getUis$']()['indexOf'](_0x2fb1be) && this['_getUis$']()['push'](_0x2fb1be);
        }
        ['onUIClose$'](_0x58e44f) {
            -0x1 !== this['_getUis$']()['indexOf'](_0x58e44f) && (this['_getUis$']()['remove$'](_0x58e44f), this['restoreBan' + 'ner$']());
        }
        ['restoreBan' + 'ner$']() {
            let _0x2e1ed5 = this['_getUis$']()[this['_getUis$']()['length'] - 0x1];
            _0x2e1ed5 && _0x2e1ed5['restoreBan' + 'ner$'] && _0x2e1ed5['restoreBan' + 'ner$']();
        }
        ['showInters' + 'titialAd$']() {
            this['platformHa' + 'ndler$'] && this['platformHa' + 'ndler$']['showInters' + 'titialAd$']();
        }
        ['showVideoA' + 'd$'](_0x576d46) {
            this['platformHa' + 'ndler$'] && this['platformHa' + 'ndler$']['showVideoA' + 'd$'] && this['platformHa' + 'ndler$'] && this['platformHa' + 'ndler$']['showVideoA' + 'd$'](_0x576d46);
        }
        ['navigateTo' + 'MiniProgra' + 'm$'](_0x2364ef, _0x46c099, _0x517715, _0xda301b) {
            this['platformHa' + 'ndler$'] && this['platformHa' + 'ndler$']['navigate2M' + 'ini$'] && this['platformHa' + 'ndler$']['navigate2M' + 'ini$'](_0x2364ef, _0x46c099, _0x517715, _0xda301b);
        }
        ['showToast$'](_0x39970c) {
            this['platformHa' + 'ndler$'] && this['platformHa' + 'ndler$']['showToast$'] && this['platformHa' + 'ndler$']['showToast$'](_0x39970c);
        }
        ['getUserId$']() {
            this['platformHa' + 'ndler$'] && this['platformHa' + 'ndler$']['getUerId$'] && this['platformHa' + 'ndler$'] && this['platformHa' + 'ndler$']['getUerId$']();
        }
        ['showAppBox' + '$'](_0x273d05) {
            this['platformHa' + 'ndler$'] && this['platformHa' + 'ndler$']['showAppBox' + '$'] ? this['platformHa' + 'ndler$']['showAppBox' + '$'](_0x273d05) : _0x273d05 && _0x273d05();
        }
        ['getNativeA' + 'dData$']() {
            if (this['platformHa' + 'ndler$'] && this['platformHa' + 'ndler$']['getNativeA' + 'dData$'])
                return this['platformHa' + 'ndler$'] && this['platformHa' + 'ndler$']['getNativeA' + 'dData$']();
        }
        ['nativeClic' + 'k$'](_0x257888) {
            this['platformHa' + 'ndler$'] && this['platformHa' + 'ndler$']['nativeClic' + 'k$'] && this['platformHa' + 'ndler$'] && this['platformHa' + 'ndler$']['nativeClic' + 'k$'](_0x257888);
        }
        ['reportMoni' + 'tor$']() {
            this['platformHa' + 'ndler$'] && this['platformHa' + 'ndler$']['reportMoni' + 'tor$'] && this['platformHa' + 'ndler$'] && this['platformHa' + 'ndler$']['reportMoni' + 'tor$']();
        }
        ['startRecor' + 'd$'](_0x51d97c, _0x573207, _0x41d703) {
            this['platformHa' + 'ndler$'] && this['platformHa' + 'ndler$']['recorderSt' + 'art$'] && this['platformHa' + 'ndler$']['recorderSt' + 'art$'](_0x51d97c, _0x573207, _0x41d703);
        }
        ['stopRecord' + '$'](_0x3ca191) {
            this['platformHa' + 'ndler$'] && this['platformHa' + 'ndler$']['recorderSt' + 'op$'] && this['platformHa' + 'ndler$']['recorderSt' + 'op$'](_0x3ca191);
        }
        ['shareRecor' + 'd$'](_0x12f911, _0x1160fd) {
            this['platformHa' + 'ndler$'] && this['platformHa' + 'ndler$']['shareRecor' + 'dVideo$'] && this['platformHa' + 'ndler$']['shareRecor' + 'dVideo$'](_0x12f911, _0x1160fd);
        }
        ['showMoreGa' + 'meBtn$'](_0x368188) {
            if (this['platformHa' + 'ndler$'] && this['platformHa' + 'ndler$']['createMore' + 'gameBtn$']) {
                let _0x9bf0c1 = this['unsortedAd' + 's$'](_0x368188);
                if (0x0 == _0x9bf0c1['length'])
                    return void Laya['timer']['once'](0x7d0, this, function () {
                        this['showMoreGa' + 'meBtn$'](_0x368188);
                    });
                this['platformHa' + 'ndler$']['createMore' + 'gameBtn$'](_0x9bf0c1[0x0], {
                    'left': 0x0,
                    'top': Laya['Browser']['clientHeig' + 'ht'] - 0x106,
                    'width': 0x46,
                    'height': 0x46
                });
            }
        }
        ['hideMoreGa' + 'meBtn$']() {
            this['platformHa' + 'ndler$'] && this['platformHa' + 'ndler$']['hideMoreGa' + 'meBtn$'] && this['platformHa' + 'ndler$']['hideMoreGa' + 'meBtn$']();
        }
        ['isNewUser$'](_0x18a2dd) {
            this['dataHandle' + 'r$'] && this['dataHandle' + 'r$']['isNewUser$'] && this['dataHandle' + 'r$']['isNewUser$'](_0x18a2dd);
        }
        ['reportData' + '$'](_0x3f3c61, ..._0x3f2d13) {
            this['dataHandle' + 'r$'] && this['dataHandle' + 'r$']['reportData' + '$'] && this['dataHandle' + 'r$']['reportData' + '$'](_0x3f3c61, _0x3f2d13);
        }
        ['getNativeC' + 'onfig$']() {
            this['dataHandle' + 'r$'] && this['dataHandle' + 'r$']['getNativeC' + 'onfig$'] && this['dataHandle' + 'r$']['getNativeC' + 'onfig$']();
        }
    }
    class _0x5a8d50 extends _0x1fc701 {
        constructor() {
            super(), this['winName'] = '奖励界面';
        }
        ['onUI_GameK' + 'ey_Load']() {
            super['onUI_GameK' + 'ey_Load'](), this['coinNum$'] = _0x1faf3f['getC_GameK' + 'ey_hildDee' + 'p'](this['owner'], 'label_coin' + 'Num'), this['gameList'] = _0x1faf3f['getC_GameK' + 'ey_hildDee' + 'p'](this['owner'], 'gameList'), this['btn_contin' + 'ue$'] = _0x1faf3f['getC_GameK' + 'ey_hildDee' + 'p'](this['owner'], 'btn_contin' + 'ue'), this['img_awardB' + 'g$'] = _0x1faf3f['getC_GameK' + 'ey_hildDee' + 'p'](this['owner'], 'img_awardB' + 'g'), this['label_awar' + 'd$'] = _0x1faf3f['getC_GameK' + 'ey_hildDee' + 'p'](this['owner'], 'label_awar' + 'd'), this['BoxBanner$'] = _0x1faf3f['getC_GameK' + 'ey_hildDee' + 'p'](this['owner'], 'BoxBanner'), this['img_awardI' + 'con$'] = _0x1faf3f['getC_GameK' + 'ey_hildDee' + 'p'](this['owner'], 'img_awardI' + 'con'), this['list_good_' + 'cur'] = _0x1faf3f['getC_GameK' + 'ey_hildDee' + 'p'](this['owner'], 'list_good_' + 'cur'), this['box_reward' + '$'] = _0x1faf3f['getC_GameK' + 'ey_hildDee' + 'p'](this['owner'], 'box_reward'), this['box_reward' + '_icon$'] = _0x1faf3f['getC_GameK' + 'ey_hildDee' + 'p'](this['owner'], 'box_reward' + '_icon'), this['label_rewa' + 'rd_close$'] = _0x1faf3f['getC_GameK' + 'ey_hildDee' + 'p'](this['owner'], 'label_rewa' + 'rd_close'), this['list_good_' + 'cur']['renderHand' + 'ler'] = new Laya['Handler'](this, this['renderGood' + 'Item']), this['list_good_' + 'cur']['array'] = this['rewardCupD' + 'atas$'], this['list_good_' + 'cur']['width'] = this['rewardNeed' + 'CupNum$'] * this['list_good_' + 'cur']['cells'][0x0]['width'] + (this['rewardNeed' + 'CupNum$'] - 0x1) * this['list_good_' + 'cur']['spaceX'], this['moni_GameK' + 'ey_torBtns'](), this['initUI$']();
        }
        ['init_GameK' + 'ey_Data']() {
            this['userDataMg' + '$'] = _0xe6399d['getInstanc' + 'e$']()['userData$'], this['sucCupNum'] = _0xe6399d['getInstanc' + 'e$']()['userData$']['successCup' + 'Num$'];
            let _0x13d394 = this['userDataMg' + '$']['mission$'], _0x13b3b0 = this['userDataMg' + '$']['missionPro' + 'gress$'], _0x4f41b7 = _0x13d394 > 0x1 && 0x1 == _0x13b3b0 ? _0x13d394 - 0x1 : _0x13d394, _0x3e0979 = Math['ceil'](Math['sqrt'](0x2 * _0x4f41b7 + 0.25) - 0.5);
            this['rewardNeed' + 'CupNum$'] = Math['min'](0x3 * _0x3e0979, 0xc), this['rewardCupD' + 'atas$'] = [];
            let _0x24bb86 = this['rewardNeed' + 'CupNum$'];
            for (; --_0x24bb86 > -0x1;)
                this['rewardCupD' + 'atas$']['push'](null);
            this['selectAwar' + 'd$']();
        }
        ['renderGood' + 'Item'](_0x209e15, _0x38ceb0) {
            if (_0x209e15['inited'] || (_0x209e15['img_empty'] = _0x1faf3f['getC_GameK' + 'ey_hildDee' + 'p'](_0x209e15, 'img_empty'), _0x209e15['img_full'] = _0x1faf3f['getC_GameK' + 'ey_hildDee' + 'p'](_0x209e15, 'img_full'), _0x209e15['inited'] = !0x0), _0x38ceb0 <= this['sucCupNum'] - 0x1)
                (_0x209e15['img_full']['visible'] = !0x0, _0x38ceb0 == this['sucCupNum'] - 0x1) && (_0x209e15['img_full']['scaleY'] = 0x1, new Laya['Tween']()['from'](_0x209e15['img_full'], { 'scaleY': 0x0 }, 0x7d0, Laya['Ease']['quintInOut']));
            else
                _0x209e15['img_full']['visible'] = !0x1;
        }
        ['moni_GameK' + 'ey_torBtns']() {
            _0x1faf3f['onBu_GameK' + 'ey_ttonSca' + 'leEvent'](this['btn_contin' + 'ue$'], this, 'onClickCon' + 'tinue$'), _0x1faf3f['onBu_GameK' + 'ey_ttonSca' + 'leEvent'](this['label_rewa' + 'rd_close$'], this, 'onClickClo' + 'seRewardLa' + 'bel$');
        }
        ['initUI$']() {
            let _0x4a32ad = _0xe6399d['getInstanc' + 'e$']()['userData$']['coin$'];
            this['coinNum$']['text'] = _0x1faf3f['coinNumSho' + 'w$'](_0x4a32ad), this['owner']['ani2'] && this['owner']['ani2']['play'](0x0, !0x0), this['setAwardIt' + 'em$'](), this['askPlayBan' + 'nerMoveAni' + 'm$'](), this['gameList']['renderHand' + 'ler'] = new Laya['Handler'](this, this['showADPane' + 'l']);
        }
        ['showADPane' + 'l'](_0x375d8a) {
            _0x375d8a['offAll'](Laya['Event']['MOUSE_DOWN']), _0x375d8a['on'](Laya['Event']['MOUSE_DOWN'], _0x375d8a, () => {
                platform['getInstanc' + 'e']()['navigate']('GAME', 'MORE');
            });
        }
        ['selectAwar' + 'd$']() {
            this['curAwardHa' + 'ndId$'] = void 0x0, this['isHaveAwar' + 'd'] = !0x0;
            let _0x33a669 = this['userDataMg' + '$']['handIds'], _0x1114b = this['userDataMg' + '$']['awardHandI' + 'dArr$'];
            for (let _0x499e19 = 0x0; _0x499e19 < _0x1114b['length']; _0x499e19++)
                if (!_0x33a669['includes'](_0x1114b[_0x499e19])) {
                    this['curAwardHa' + 'ndId$'] = _0x1114b[_0x499e19];
                    break;
                }
            this['curAwardHa' + 'ndId$'] || (this['isHaveAwar' + 'd'] = !0x1);
        }
        ['setAwardIt' + 'em$']() {
            if (this['isHaveAwar' + 'd']) {
                this['label_awar' + 'd$']['text'] = 'REWARD';
                let _0x489dca = D['handSkinBa' + 'sic'][this['curAwardHa' + 'ndId$']]['handSkinIm' + 'gId'];
                (this['img_awardI' + 'con$']['skin'] = _0x1faf3f['getSkinPat' + 'hById'](_0x489dca), this['sucCupNum'] >= this['rewardNeed' + 'CupNum$']) && (this['label_awar' + 'd$']['text'] = 'RECEIVED', new Laya['Tween']()['from'](this['label_awar' + 'd$'], { 'fontSize': 0xa }, 0x7d0, Laya['Ease']['quintInOut']), this['userDataMg' + '$']['addHandSki' + 'n$'](this['curAwardHa' + 'ndId$']), this['userDataMg' + '$']['setSuccess' + 'CupNum$'](0x0), this['box_reward' + '_icon$']['skin'] = _0x1faf3f['getSkinPat' + 'hById'](_0x489dca), this['box_reward' + '$']['visible'] = !0x0, this['owner']['ani3'] && this['owner']['ani3']['play'](0x0, !0x0));
            } else
                this['img_awardB' + 'g$']['visible'] = !0x1;
        }
        ['askPlayBan' + 'nerMoveAni' + 'm$']() {
        }
        ['playUpAnim' + '$']() {
        }
        ['refreshUpA' + 'nim$']() {
        }
        ['showBanner' + '$']() {
        }
        ['onClickCon' + 'tinue$']() {
            this['destroy'](), _0x3830d2['getInstanc' + 'e$']()['disp_GameK' + 'ey_atchEve' + 'nt'](_0x5b5578['REST_FIGHT']), _0x3a41f3['getInstanc' + 'e$']()['open_GameK' + 'ey_UI'](Laya['CyzClassMa' + 'p']['MainUI']);
        }
        ['onClickClo' + 'seRewardLa' + 'bel$']() {
            this['box_reward' + '$']['visible'] = !0x1;
        }
        ['onUpdate']() {
            this['refreshUpA' + 'nim$']();
        }
    }
    _0x5a8d50['url'] = 'Prefab/Bat' + 'tle/Battle' + 'AwardWindo' + 'w.json', _0x5a8d50['className'] = 'BattleAwar' + 'dUI$', _0x5a8d50['uiConfig'] = {
        'layer': _0x5a29eb['LAYER_NORM' + 'AL'],
        'only': !0x0,
        'needUISurrenal': !0x0,
        'notClose': !0x1
    };
    class _0x43a93f {
        constructor() {
            this['inited'] = !0x1, this['initedCB'] = void 0x0, this['soun_GameK' + 'ey_dDic'] = {}, this['refr_GameK' + 'ey_eshMusi' + 'cVolume'](), this['refr_GameK' + 'ey_eshSoun' + 'dVolume'](), Laya['audioManag' + 'er'] = this;
        }
        static ['getInstanc' + 'e$']() {
            return null == _0x43a93f['instance'] && (_0x43a93f['instance'] = new _0x43a93f()), _0x43a93f['instance'];
        }
        ['init'](_0x936290) {
            if (this['initedCB'] = _0x936290, this['inited'])
                this['initedCB'] && this['initedCB']();
            else {
                var _0x18d61e = [];
                for (var _0x3ca0a1 in D['musicBasic']) {
                    var _0x2fa063 = D['musicBasic'][_0x3ca0a1];
                    0x2 == _0x2fa063['type'] && _0x18d61e['push'](_0x2fa063['file']);
                }
                if (Laya['Browser']['onMiniGame']) {
                    if (0x0 == _0x18d61e['length'])
                        this['init_GameK' + 'ey_Complet' + 'e']();
                    else {
                        let _0x566638, _0x59e940;
                        for (let _0x4d7730 in D['musicBasic'])
                            0x2 == (_0x566638 = D['musicBasic'][_0x4d7730])['type'] && (_0x59e940 = this['play_GameK' + 'ey_Sound'](Number(_0x4d7730), !0x1, !0x0)) && (_0x59e940['volume'] = 0x0);
                        this['init_GameK' + 'ey_Complet' + 'e']();
                    }
                } else
                    this['init_GameK' + 'ey_Complet' + 'e']();
            }
        }
        get ['isIn_GameK' + 'ey_ited']() {
            return this['inited'];
        }
        ['setS_GameK' + 'ey_oundSwi' + 'tch'](_0x4f8894) {
            _0xe6399d['getInstanc' + 'e$']()['settingDat' + 'a$']['setS_GameK' + 'ey_oundSwi' + 'tch'](_0x4f8894);
        }
        ['getS_GameK' + 'ey_oundSwi' + 'tch']() {
            return _0xe6399d['getInstanc' + 'e$']()['settingDat' + 'a$']['getS_GameK' + 'ey_oundSwi' + 'tch']();
        }
        ['init_GameK' + 'ey_Complet' + 'e']() {
            this['inited'] = !0x0, this['initedCB'] && this['initedCB']();
        }
        ['play_GameK' + 'ey_Music'](_0x55dc25) {
            Laya['stage']['isVisibili' + 'ty'] ? this['_play_Game' + 'Key_Music'](_0x55dc25) : Laya['timer']['once'](0x3e8, this, this['play_GameK' + 'ey_Music']);
        }
        ['_play_Game' + 'Key_Music'](_0x54d24b, _0x2b1e9b) {
            if (this['getS_GameK' + 'ey_oundSwi' + 'tch']()) {
                this['playMusicI' + 'd'] = _0x54d24b;
                var _0x58b32c = D['musicBasic'][_0x54d24b]['file'];
                this['_bgm'] && this['_bgm']['position'], (Laya['SoundManag' + 'er']['_tMusic'] != _0x58b32c || _0x2b1e9b) && (Laya['Browser']['onMiniGame'] ? (this['_bgm'] || (this['_bgm'] = wx['createInne' + 'rAudioCont' + 'ext']()), this['_bgm']['src'] = _0x58b32c, this['_bgm']['loop'] = !0x0, this['_bgm']['play']()) : this['_bgm'] || (this['_bgm'] = Laya['SoundManag' + 'er']['playMusic'](_0x58b32c, 0x0, void 0x0, this['_bgm'] && this['_bgm']['url'] === _0x58b32c ? this['_bgm']['position'] : 0x0)), this['refr_GameK' + 'ey_eshMusi' + 'cVolume']());
            }
        }
        ['back_GameK' + 'ey_PlayMus' + 'ic']() {
            this['_play_Game' + 'Key_Music'](this['playMusicI' + 'd'], !0x0);
        }
        ['_get_GameK' + 'ey_CurMusi' + 'cConfig']() {
            return this['_bgm'] ? D['musicBasic'][this['playMusicI' + 'd']] : null;
        }
        ['stop_GameK' + 'ey_Music']() {
            Laya['Browser']['onMiniGame'] ? this['_bgm']['stop']() : (Laya['SoundManag' + 'er']['stopMusic'](), this['_bgm'] = null);
        }
        ['resu_GameK' + 'ey_meMusic']() {
            this['_bgm'] && this['play_GameK' + 'ey_Music'](this['playMusicI' + 'd']);
        }
        ['refr_GameK' + 'ey_eshMusi' + 'cVolume']() {
            this['setM_GameK' + 'ey_usicVol' + 'ume'](Number(_0x28d556['getL_GameK' + 'ey_ocalDat' + 'a'](_0x28d556['KEY']['MUSIC'], 0x1)));
        }
        ['refr_GameK' + 'ey_eshSoun' + 'dVolume']() {
            this['soundVolum' + 'e'] = Number(_0x28d556['getL_GameK' + 'ey_ocalDat' + 'a'](_0x28d556['KEY']['SOUND'], 0x1)), Laya['SoundManag' + 'er']['soundVolum' + 'e'] = this['soundVolum' + 'e'];
        }
        ['play_GameK' + 'ey_Sound'](_0x5524f4, _0x3b48c0, _0x64d5e3) {
            if (!this['getS_GameK' + 'ey_oundSwi' + 'tch']() && !_0x64d5e3)
                return;
            if (!Laya['stage']['isVisibili' + 'ty'])
                return;
            var _0x417e01 = D['musicBasic'][_0x5524f4];
            let _0x3ff769;
            _0x3ff769 = Laya['SoundManag' + 'er']['playSound'](_0x417e01['file'], _0x3b48c0 ? 0x0 : 0x1);
            var _0x330008 = this['soundVolum' + 'e'];
            return Laya['SoundManag' + 'er']['setSoundVo' + 'lume'](_0x417e01['musicPower'] * _0x330008, _0x417e01['file']), _0x3ff769;
        }
        ['remo_GameK' + 'ey_veChann' + 'el'](_0x2408b5) {
            _0x2408b5 && (Laya['SoundManag' + 'er']['removeChan' + 'nel'](_0x2408b5), _0x2408b5 = null);
        }
        ['stop_GameK' + 'ey_Sound'](_0x57047b) {
            if (Laya['stage']['isVisibili' + 'ty']) {
                var _0x17a704 = D['musicBasic'][_0x57047b];
                Laya['SoundManag' + 'er']['stopSound'](_0x17a704['file']);
            }
        }
        ['setM_GameK' + 'ey_usicVol' + 'ume'](_0x5a480d) {
            this['musicVolum' + 'e'] = _0x5a480d;
            var _0x49059e = this['_get_GameK' + 'ey_CurMusi' + 'cConfig']();
            _0x49059e && this['_mus_GameK' + 'ey_icVolum' + 'e'](_0x49059e['musicPower'] * this['musicVolum' + 'e']), Laya['SoundManag' + 'er']['musicVolum' + 'e'] = (_0x49059e ? _0x49059e['musicPower'] : 0x1) * this['musicVolum' + 'e'];
        }
        ['_mus_GameK' + 'ey_icVolum' + 'e'](_0x34b300) {
            Laya['Browser']['onMiniGame'] ? this['_bgm'] && (this['_bgm']['volume'] = _0x34b300) : Laya['SoundManag' + 'er']['_musicChan' + 'nel'] && (Laya['SoundManag' + 'er']['_musicChan' + 'nel']['volume'] = _0x34b300);
        }
        ['musi_GameK' + 'ey_cCheck']() {
            Laya['SoundManag' + 'er']['_musicChan' + 'nel']['isStopped'] && Laya['SoundManag' + 'er']['_musicChan' + 'nel']['play']();
        }
    }
    _0x43a93f['instance'] = void 0x0;
    class _0x39a0e3 {
        constructor() {
            this['coinDatas'] = [], this['moveState'] = 0x0, this['countTime'] = 0x0, this['moveEndCnt'] = 0x0, this['targetPos'] = new Laya['Point']();
        }
        static ['create'](_0x50774b, _0x24c3b3, _0x2bdda2, _0x14f26e, _0x2060ef, _0x1396e9, _0xcebaa6, _0x38e90f, _0x46939d) {
            if (!(_0x50774b > 0x0))
                return _0x2060ef && _0x2060ef(), void (_0x2060ef = void 0x0);
            let _0x48af3c = new _0x39a0e3();
            return _0x48af3c['setData'](_0x50774b, _0x24c3b3, _0x2bdda2, _0x14f26e, _0x2060ef, _0x1396e9, _0xcebaa6, _0x38e90f, _0x46939d), Laya['timer']['once'](0x1, _0x48af3c, _0x48af3c['onStart']), _0x48af3c;
        }
        ['setData'](_0x1b8650, _0x113cb3, _0x178972, _0x396758, _0x11de5a, _0x233136, _0x1b5930, _0x4a60d7, _0x5498ef) {
            this['coinNum'] = _0x1b8650, this['coinImgDat' + 'a'] = _0x113cb3, this['startUI'] = _0x178972, this['targetUI'] = _0x396758, this['completeCa' + 'llback'] = _0x11de5a, this['area'] = _0x1b5930 || 0x96, this['boomTime'] = _0x4a60d7 || 0x1f4, this['moveTime'] = _0x5498ef || 0x320, this['isAutoDest' + 'roy'] = null == _0x233136;
        }
        ['onStart']() {
            this['crateCoins'](), this['moveState'] = 0x1, Laya['timer']['loop'](0x1, this, this['update']);
        }
        ['crateCoins']() {
            let _0x4715c3 = this['coinNum'];
            for (; --_0x4715c3 > -0x1;)
                this['coinDatas']['push'](this['createSing' + 'leCoin']());
        }
        ['createSing' + 'leCoin']() {
            let _0x41e1ec, _0x55365e = this['startUI']['addChild'](new Laya['Image']());
            for (_0x41e1ec in (_0x55365e['anchorX'] = _0x55365e['anchorY'] = 0.5, this['coinImgDat' + 'a']))
                _0x55365e[_0x41e1ec] = this['coinImgDat' + 'a'][_0x41e1ec];
            let _0x5e0062 = this['boomTime'] + _0x1faf3f['floa_GameK' + 'ey_tRange'](-0x96, 0x96), _0x3bbb69 = this['moveTime'] - this['boomTime'] + _0x1faf3f['floa_GameK' + 'ey_tRange'](-0x96, 0x96);
            return {
                'img': _0x55365e,
                'startPos': {
                    'x': 0.5 * this['startUI']['width'],
                    'y': 0.5 * this['startUI']['height']
                },
                'boomPos': this['getRandomB' + 'oomPos'](),
                'boomTime': _0x5e0062,
                'goTargetTime': _0x3bbb69,
                'totalTime': _0x5e0062 + _0x3bbb69
            };
        }
        ['getRandomB' + 'oomPos']() {
            return {
                'x': 0.5 * this['startUI']['width'] + _0x1faf3f['floa_GameK' + 'ey_tRange'](-this['area'], this['area']),
                'y': 0.5 * this['startUI']['height'] + _0x1faf3f['floa_GameK' + 'ey_tRange'](-this['area'], this['area'])
            };
        }
        ['getTargetP' + 'os']() {
            if (!this['targetUI']['destroyed'])
                return this['targetPos']['setTo'](this['targetUI']['x'], this['targetUI']['y']), this['targetUI']['parent']['localToGlo' + 'bal'](this['targetPos']), this['startUI']['globalToLo' + 'cal'](this['targetPos']), this['targetPos'];
        }
        ['update']() {
            this['moveCoins']();
        }
        ['moveCoins']() {
            if (this['targetUI']['destroyed'])
                return;
            if (0x1 != this['moveState'])
                return;
            this['countTime'] += Laya['timer']['delta'];
            let _0x189d06 = this['coinDatas']['length'];
            for (; --_0x189d06 > -0x1;)
                this['moveSingle' + 'Coin'](this['coinDatas'][_0x189d06]);
        }
        ['moveSingle' + 'Coin'](_0x30379b) {
            if (!_0x30379b['isMoveEnd']) {
                if (this['countTime'] <= _0x30379b['boomTime']) {
                    let _0x1aa6cf = Laya['Ease']['quintOut'](this['countTime'], 0x0, 0x1, _0x30379b['boomTime']);
                    _0x30379b['img']['pos'](_0x30379b['startPos']['x'] + (_0x30379b['boomPos']['x'] - _0x30379b['startPos']['x']) * _0x1aa6cf, _0x30379b['startPos']['y'] + (_0x30379b['boomPos']['y'] - _0x30379b['startPos']['y']) * _0x1aa6cf);
                } else {
                    if (this['countTime'] < _0x30379b['totalTime']) {
                        let _0x4318b1 = Laya['Ease']['linearNone'](this['countTime'] - _0x30379b['boomTime'], 0x0, 0x1, _0x30379b['goTargetTi' + 'me']);
                        this['coinDatas']['indexOf'](_0x30379b);
                        let _0x34a0d5 = this['getTargetP' + 'os'](), _0x3c1262 = _0x30379b['boomPos'];
                        _0x30379b['img']['pos'](_0x3c1262['x'] + (_0x34a0d5['x'] - _0x3c1262['x']) * _0x4318b1, _0x3c1262['y'] + (_0x34a0d5['y'] - _0x3c1262['y']) * _0x4318b1);
                    } else
                        this['onSingleCo' + 'inMoveComp' + 'lete'](_0x30379b);
                }
            }
        }
        ['onSingleCo' + 'inMoveComp' + 'lete'](_0x119022) {
            this['moveEndCnt']++;
            let _0x284aaf = this['getTargetP' + 'os']();
            _0x119022['img']['pos'](_0x284aaf['x'], _0x284aaf['y']), _0x119022['img']['visible'] = !0x1, _0x119022['isMoveEnd'] = !0x0, this['moveEndCnt'] == this['coinNum'] && Laya['timer']['once'](0x1, this, this['onAllMoveC' + 'pmplete']);
        }
        ['onAllMoveC' + 'pmplete']() {
            _0x43a93f['getInstanc' + 'e$']()['play_GameK' + 'ey_Sound'](0x3ed, !0x1), this['moveState'] = 0x2, this['isAutoDest' + 'roy'] && this['destroy'](), this['completeCa' + 'llback'] && this['completeCa' + 'llback'](), this['completeCa' + 'llback'] = void 0x0;
        }
        ['clearCoins']() {
            let _0x5cf31d, _0x44956d = this['coinDatas']['length'];
            for (; --_0x44956d > -0x1;)
                (_0x5cf31d = this['coinDatas'][_0x44956d])['img'] && _0x5cf31d['img']['destroy']();
            this['coinDatas'] = [];
        }
        ['destroy']() {
            Laya['timer']['clearAll'](this), this['clearCoins']();
        }
    }
    class _0x464b32 extends _0x1fc701 {
        constructor() {
            super(), this['winName'] = '结算界面';
        }
        ['onUI_GameK' + 'ey_Load']() {
            super['onUI_GameK' + 'ey_Load'](), this['coinNum$'] = _0x1faf3f['getC_GameK' + 'ey_hildDee' + 'p'](this['owner'], 'label_coin' + 'Num'), this['btn_contin' + 'ue$'] = _0x1faf3f['getC_GameK' + 'ey_hildDee' + 'p'](this['owner'], 'btn_contin' + 'ue'), this['label_awar' + 'dNum$'] = _0x1faf3f['getC_GameK' + 'ey_hildDee' + 'p'](this['owner'], 'label_awar' + 'dNum'), this['btn_three$'] = _0x1faf3f['getC_GameK' + 'ey_hildDee' + 'p'](this['owner'], 'btn_three'), this['box_drink$'] = _0x1faf3f['getC_GameK' + 'ey_hildDee' + 'p'](this['owner'], 'box_drink'), this['drinkBg$'] = _0x1faf3f['getC_GameK' + 'ey_hildDee' + 'p'](this['box_drink$'], 'img_bg'), this['decorate$'] = _0x1faf3f['getC_GameK' + 'ey_hildDee' + 'p'](this['box_drink$'], 'img_decora' + 'te'), this['glass$'] = _0x1faf3f['getC_GameK' + 'ey_hildDee' + 'p'](this['box_drink$'], 'img_glass'), this['glassBg$'] = _0x1faf3f['getC_GameK' + 'ey_hildDee' + 'p'](this['box_drink$'], 'img_glass_' + 'bg'), this['joiceUp$'] = _0x1faf3f['getC_GameK' + 'ey_hildDee' + 'p'](this['box_drink$'], 'img_up'), this['joiceCente' + 'r$'] = _0x1faf3f['getC_GameK' + 'ey_hildDee' + 'p'](this['box_drink$'], 'img_center'), this['joiceBotto' + 'm$'] = _0x1faf3f['getC_GameK' + 'ey_hildDee' + 'p'](this['box_drink$'], 'img_bottom'), this['img_starFu' + '1$'] = _0x1faf3f['getC_GameK' + 'ey_hildDee' + 'p'](this['owner'], 'img_starFu' + '1'), this['img_starFu' + '2$'] = _0x1faf3f['getC_GameK' + 'ey_hildDee' + 'p'](this['owner'], 'img_starFu' + '2'), this['img_starFu' + '3$'] = _0x1faf3f['getC_GameK' + 'ey_hildDee' + 'p'](this['owner'], 'img_starFu' + '3'), this['pb_choice$'] = _0x1faf3f['getC_GameK' + 'ey_hildDee' + 'p'](this['owner'], 'pb_choice'), this['choice_sta' + 'rFu1$'] = _0x1faf3f['getC_GameK' + 'ey_hildDee' + 'p'](this['owner'], 'choice_sta' + 'rFu1'), this['pb_decorat' + 'e$'] = _0x1faf3f['getC_GameK' + 'ey_hildDee' + 'p'](this['owner'], 'pb_decorat' + 'e'), this['decorate_s' + 'tarFu1$'] = _0x1faf3f['getC_GameK' + 'ey_hildDee' + 'p'](this['owner'], 'decorate_s' + 'tarFu1'), this['pb_skill$'] = _0x1faf3f['getC_GameK' + 'ey_hildDee' + 'p'](this['owner'], 'pb_skill'), this['skill_star' + 'Fu1$'] = _0x1faf3f['getC_GameK' + 'ey_hildDee' + 'p'](this['owner'], 'skill_star' + 'Fu1'), this['BoxBanner$'] = _0x1faf3f['getC_GameK' + 'ey_hildDee' + 'p'](this['owner'], 'BoxBanner'), this['label_succ' + 'essNum$'] = _0x1faf3f['getC_GameK' + 'ey_hildDee' + 'p'](this['owner'], 'label_succ' + 'essNum'), this['decorate_s' + 'tarEm1$'] = _0x1faf3f['getC_GameK' + 'ey_hildDee' + 'p'](this['owner'], 'decorate_s' + 'tarEm1'), this['moni_GameK' + 'ey_torBtns'](), this['initUI$']();
        }
        ['init_GameK' + 'ey_Data']() {
            this['userDataMg' + '$'] = _0xe6399d['getInstanc' + 'e$']()['userData$'], this['curMission' + 'Id$'] = this['userDataMg' + '$']['mission$'], this['curMission' + 'Progress$'] = this['userDataMg' + '$']['missionPro' + 'gress$'], this['drinkDataM' + 'g$'] = _0xe6399d['getInstanc' + 'e$']()['drinkData$'], this['curMission' + 'Data$'] = this['drinkDataM' + 'g$']['getMission' + 'DataByMiss' + 'ionId$'](this['curMission' + 'Id$']), this['curDrinkDa' + 'ta$'] = this['drinkDataM' + 'g$']['getDrinkDa' + 'taByDrinkI' + 'd$'](this['curMission' + 'Data$']['drinkArr'][this['curMission' + 'Progress$'] - 0x1]), this['addNum$'] = this['curMission' + 'Data$']['coinNumArr'][this['curMission' + 'Progress$'] - 0x1], this['setScoreDa' + 'ta$'](), this['setMisProg' + 'ress$'](), this['setSucCupN' + 'um$'](), this['addAllFrui' + 't$'](), this['addDecorat' + 'e$']();
        }
        ['moni_GameK' + 'ey_torBtns']() {
            _0x1faf3f['onBu_GameK' + 'ey_ttonSca' + 'leEvent'](this['btn_three$'], this, 'onClickThr' + 'ee$'), _0x1faf3f['onBu_GameK' + 'ey_ttonSca' + 'leEvent'](this['btn_contin' + 'ue$'], this, 'onClickCon' + 'tinue$');
        }
        ['initUI$']() {
            let _0x3ae139 = this['userDataMg' + '$']['coin$'];
            this['coinNum$']['text'] = _0x1faf3f['coinNumSho' + 'w$'](_0x3ae139), this['makeRoleNe' + 'edDrink$'](), this['setScoreSh' + 'ow$'](), this['refreshAwa' + 'rdNumUI$'](), this['askPlayBan' + 'nerMoveAni' + 'm$']();
        }
        ['refreshAwa' + 'rdNumUI$']() {
            this['label_awar' + 'dNum$']['text'] = '+' + this['addNum$'];
        }
        ['askPlayBan' + 'nerMoveAni' + 'm$']() {
        }
        ['playUpAnim' + '$']() {
            this['isPlayUpAn' + 'im$'] = !0x0, this['moveAllT$'] = 0x1f4, this['delayMoveC' + 'ountT$'] = 0x7d0, this['moveCountT' + '$'] = 0x0, this['btn_contin' + 'ue$']['ty'] = this['btn_contin' + 'ue$']['y'], this['btn_three$']['ty'] = this['btn_three$']['y'], this['btn_contin' + 'ue$']['sy'] = this['btn_contin' + 'ue$']['y'] = Laya['stage']['height'] - 0xb4, this['btn_three$']['sy'] = this['btn_three$']['y'] = Laya['stage']['height'] - 0xb4;
        }
        ['refreshUpA' + 'nim$']() {
            if (!this['isPlayUpAn' + 'im$'])
                return;
            if (this['delayMoveC' + 'ountT$'] > 0x0)
                return void (this['delayMoveC' + 'ountT$'] -= Laya['timer']['delta']);
            this['moveCountT' + '$'] += Laya['timer']['delta'];
            let _0x582f81 = Math['min'](0x1, this['moveCountT' + '$'] / this['moveAllT$']);
            this['btn_contin' + 'ue$']['y'] = this['btn_contin' + 'ue$']['sy'] + (this['btn_contin' + 'ue$']['ty'] - this['btn_contin' + 'ue$']['sy']) * _0x582f81, this['btn_three$']['y'] = this['btn_three$']['sy'] + (this['btn_three$']['ty'] - this['btn_three$']['sy']) * _0x582f81, 0x1 == _0x582f81 && (this['isPlayUpAn' + 'im$'] = !0x1);
        }
        ['showBanner' + '$']() {
            pgdk$['restoreBan' + 'ner$']();
        }
        ['makeRoleNe' + 'edDrink$']() {
            this['drinkBg$']['skin'] = _0x1faf3f['getSkinPat' + 'hById'](this['curDrinkDa' + 'ta$']['effectImgI' + 'd']), this['glass$']['skin'] = _0x1faf3f['getSkinPat' + 'hById'](D['glassBasic'][this['curDrinkDa' + 'ta$']['glassId']]['glassImgId']), this['glassBg$']['skin'] = _0x1faf3f['getSkinPat' + 'hById'](D['glassBasic'][this['curDrinkDa' + 'ta$']['glassId']]['glassImgId'] + 0x4), this['decorate$']['skin'] = _0x1faf3f['getSkinPat' + 'hById'](D['decorateBa' + 'sic'][this['curDrinkDa' + 'ta$']['decorateId']]['decorateIm' + 'gId']), this['joiceUp$']['skin'] = _0x1faf3f['getSkinPat' + 'hById'](this['curDrinkDa' + 'ta$']['juiceImgId' + 'Arr'][0x0]), this['joiceCente' + 'r$']['skin'] = _0x1faf3f['getSkinPat' + 'hById'](this['curDrinkDa' + 'ta$']['juiceImgId' + 'Arr'][0x1]), this['joiceBotto' + 'm$']['skin'] = _0x1faf3f['getSkinPat' + 'hById'](this['curDrinkDa' + 'ta$']['juiceImgId' + 'Arr'][0x2]);
            let _0x49088b = this['drinkDataM' + 'g$']['getFruitDa' + 'taByFruitI' + 'd$'](this['curDrinkDa' + 'ta$']['fruitIdArr'][0x2])['fluidColor'];
            this['juiceChang' + 'eColor$'](_0x49088b, this['joiceUp$']);
            let _0x5d535e = this['drinkDataM' + 'g$']['getFruitDa' + 'taByFruitI' + 'd$'](this['curDrinkDa' + 'ta$']['fruitIdArr'][0x1])['fluidColor'];
            this['juiceChang' + 'eColor$'](_0x5d535e, this['joiceCente' + 'r$']);
            let _0x543ea0 = this['drinkDataM' + 'g$']['getFruitDa' + 'taByFruitI' + 'd$'](this['curDrinkDa' + 'ta$']['fruitIdArr'][0x0])['fluidColor'];
            this['juiceChang' + 'eColor$'](_0x543ea0, this['joiceBotto' + 'm$']);
            let _0x394722 = this['curDrinkDa' + 'ta$']['fruitIdArr']['length'];
            0x2 == _0x394722 ? this['juiceChang' + 'eColor$'](_0x5d535e, this['joiceUp$']) : 0x1 == _0x394722 && (this['juiceChang' + 'eColor$'](_0x543ea0, this['joiceUp$']), this['juiceChang' + 'eColor$'](_0x543ea0, this['joiceCente' + 'r$'])), 0x3 == this['curDrinkDa' + 'ta$']['glassId'] && (this['joiceUp$']['centerX'] -= 0xd, this['joiceUp$']['centerY'] += 0xd, this['joiceCente' + 'r$']['centerX'] -= 0xd, this['joiceCente' + 'r$']['centerY'] += 0xd, this['joiceBotto' + 'm$']['centerX'] -= 0xd, this['joiceBotto' + 'm$']['centerY'] += 0xd);
        }
        ['juiceChang' + 'eColor$'](_0x39c259, _0x436389) {
            _0x1faf3f['changeImgC' + 'olor$'](_0x39c259, _0x436389);
        }
        ['setScoreDa' + 'ta$']() {
            this['choScore$'] = this['drinkDataM' + 'g$']['choiceScor' + 'e'], this['decScore$'] = this['drinkDataM' + 'g$']['decorateSc' + 'ore'], this['skiScore$'] = this['drinkDataM' + 'g$']['skillScore'], this['allScore$'] = Math['floor'](this['choScore$'] + this['decScore$'] + this['skiScore$']), this['starNum$'] = 0x0, this['choScore$'] >= 0x1 && this['starNum$']++, this['decScore$'] >= 0x1 && this['starNum$']++, this['skiScore$'] >= 0x1 && this['starNum$']++;
            let _0x31c952 = [];
            _0x31c952 = 0x0 == this['starNum$'] ? [
                !0x1,
                !0x1,
                !0x1
            ] : 0x1 == this['starNum$'] ? [
                !0x0,
                !0x1,
                !0x1
            ] : 0x2 == this['starNum$'] ? [
                !0x0,
                !0x0,
                !0x1
            ] : [
                !0x0,
                !0x0,
                !0x0
            ], this['starShowAr' + 'r$'] = _0x31c952;
        }
        ['setScoreSh' + 'ow$']() {
            this['setStarSho' + 'w$'](), this['choice_sta' + 'rFu1$']['visible'] = 0x1 == this['choScore$'], this['decorate_s' + 'tarFu1$']['visible'] = 0x1 == this['decScore$'], this['skill_star' + 'Fu1$']['visible'] = 0x1 == this['skiScore$'], this['pb_choice$']['value'] = this['choScore$'], this['pb_decorat' + 'e$']['value'] = this['decScore$'], this['pb_skill$']['value'] = this['skiScore$'];
            let _0x3a3974 = new Laya['Tween'](), _0x310072 = new Laya['Tween'](), _0x3ee3b6 = new Laya['Tween']();
            _0x3a3974['from'](this['pb_choice$'], { 'value': 0x0 }, 0x7d0, Laya['Ease']['quintInOut']), _0x310072['from'](this['pb_decorat' + 'e$'], { 'value': 0x0 }, 0x7d0, Laya['Ease']['quintInOut']), _0x3ee3b6['from'](this['pb_skill$'], { 'value': 0x0 }, 0x7d0, Laya['Ease']['quintInOut']), this['label_succ' + 'essNum$']['text'] = this['userDataMg' + '$']['successCup' + 'Num$'];
        }
        ['setCoinSho' + 'w$']() {
            this['coinNum$']['text'] = '+' + this['addNum$'], _0x39a0e3['create'](0x14, {
                'skin': 'main/CoinI' + 'con.png',
                'width': 0x23,
                'height': 0x23
            }, this['label_awar' + 'dNum$'], this['coinNum$'], this['onCoinAnim' + 'Complete$']['bind'](this));
        }
        ['onCoinAnim' + 'Complete$']() {
            this['userDataMg' + '$']['onGetCoin$'](this['addNum$']);
            let _0x36af58 = this['userDataMg' + '$']['coin$'];
            this['coinNum$']['text'] = _0x1faf3f['coinNumSho' + 'w$'](_0x36af58), this['continue$']();
        }
        ['setStarSho' + 'w$']() {
            this['img_starFu' + '1$']['visible'] = this['starShowAr' + 'r$'][0x0], this['img_starFu' + '2$']['visible'] = this['starShowAr' + 'r$'][0x1], this['img_starFu' + '3$']['visible'] = this['starShowAr' + 'r$'][0x2];
        }
        ['setMisNum$']() {
            let _0x54260c = this['userDataMg' + '$']['mission$'];
            _0x54260c++, this['userDataMg' + '$']['setMission' + '$'](_0x54260c);
        }
        ['setMisProg' + 'ress$']() {
            let _0x3c59c4 = this['userDataMg' + '$']['missionPro' + 'gress$'];
            _0x3c59c4++, this['userDataMg' + '$']['setMission' + 'Progress$'](_0x3c59c4), _0x3c59c4 > this['curMission' + 'Data$']['drinkArr']['length'] && (this['userDataMg' + '$']['setMission' + 'Progress$'](0x1), this['setMisNum$']());
        }
        ['setSucCupN' + 'um$']() {
            let _0x7969ec = this['userDataMg' + '$']['successCup' + 'Num$'];
            _0x7969ec++, this['userDataMg' + '$']['setSuccess' + 'CupNum$'](_0x7969ec);
        }
        ['addAllFrui' + 't$']() {
            let _0xf66cde = this['userDataMg' + '$']['fruitIds'], _0x1c52a4 = this['args'][0x0][0x0];
            for (let _0x4e4325 = 0x0; _0x4e4325 < _0x1c52a4['length']; _0x4e4325++)
                _0xf66cde['includes'](_0x1c52a4[_0x4e4325]) || this['userDataMg' + '$']['addFruitSk' + 'in$'](_0x1c52a4[_0x4e4325]);
        }
        ['addDecorat' + 'e$']() {
            let _0x440ea7 = this['userDataMg' + '$']['decorateId' + 's'], _0x593639 = this['args'][0x0][0x1];
            _0x440ea7['includes'](_0x593639) || this['userDataMg' + '$']['addDecorat' + 'eSkin$'](_0x593639);
        }
        ['onClickThr' + 'ee$']() {
            platform['getInstanc' + 'e']()['showReward'](() => {
                this['addNum$'] *= 0x3, this['playCoinAn' + 'im$']();
            }), pgdk$['showVideoA' + 'd$'](this['receiveVid' + 'eo$']['bind'](this));
        }
        ['receiveVid' + 'eo$'](_0x52e8d8) {
            _0x52e8d8 && (this['addNum$'] *= 0x3, this['playCoinAn' + 'im$']());
        }
        ['onClickCon' + 'tinue$']() {
            this['isPlayUpAn' + 'im$'] || this['playCoinAn' + 'im$']();
        }
        ['playCoinAn' + 'im$']() {
            this['refreshAwa' + 'rdNumUI$'](), this['setCoinSho' + 'w$'](), this['btn_three$']['visible'] = !0x1, this['btn_contin' + 'ue$']['visible'] = !0x1;
        }
        ['continue$']() {
            _0x3830d2['getInstanc' + 'e$']()['disp_GameK' + 'ey_atchEve' + 'nt'](_0x5b5578['ASK_PLAY_W' + 'ALK_OUT']), _0x3a41f3['getInstanc' + 'e$']()['open_GameK' + 'ey_UI'](_0x5a8d50), this['destroy']();
        }
        ['onUpdate']() {
            this['refreshUpA' + 'nim$']();
        }
    }
    _0x464b32['url'] = 'Prefab/Bat' + 'tle/Battle' + 'ResultWind' + 'ow.json', _0x464b32['className'] = 'BattleResu' + 'ltUI$', _0x464b32['uiConfig'] = {
        'layer': _0x5a29eb['LAYER_NORM' + 'AL'],
        'only': !0x0,
        'needUISurrenal': !0x0,
        'notClose': !0x1
    };
    class _0x157d64 extends _0x1fc701 {
        constructor() {
            super(), this['winName'] = '战斗信息界面';
        }
        ['init_GameK' + 'ey_Data']() {
            this['curMission' + 'Id$'] = _0xe6399d['getInstanc' + 'e$']()['userData$']['mission$'], this['curMission' + 'Progress$'] = _0xe6399d['getInstanc' + 'e$']()['userData$']['missionPro' + 'gress$'], this['drinkDataM' + 'g$'] = _0xe6399d['getInstanc' + 'e$']()['drinkData$'], this['curMission' + 'Data$'] = this['drinkDataM' + 'g$']['getMission' + 'DataByMiss' + 'ionId$'](this['curMission' + 'Id$']), this['curDrinkDa' + 'ta$'] = this['drinkDataM' + 'g$']['getDrinkDa' + 'taByDrinkI' + 'd$'](this['curMission' + 'Data$']['drinkArr'][this['curMission' + 'Progress$'] - 0x1]), this['fruitIdArr' + '$'] = this['curDrinkDa' + 'ta$']['fruitIdArr'], this['havedFruit' + 'IdArr$'] = _0xe6399d['getInstanc' + 'e$']()['userData$']['fruitIds'], this['havedGlass' + 'IdsArr$'] = _0xe6399d['getInstanc' + 'e$']()['userData$']['glassIds'], this['havedDecor' + 'ateIdsArr$'] = _0xe6399d['getInstanc' + 'e$']()['userData$']['decorateId' + 's'], this['curFruitNu' + 'm$'] = 0x1, this['blendStep$'] = 0x1, this['choiceTrue' + 'Num$'] = 0x0, this['skillScore' + 'Arr$'] = [], this['starEffect' + 'UI$'] = void 0x0, this['isDecorate' + 'True$'] = void 0x0;
        }
        ['startMoveA' + 'rrow']() {
            this['isStartMov' + 'eArrow'] = !0x0, this['dProgress$']['visible'] = !0x0, this['allLength'] = this['dProgress$']['x'] + this['dProgress$']['width'];
            let _0x21c841 = this['dCenter$']['width'] / 0x2, _0x278d95 = this['dProgress$']['width'] - this['dCenter$']['width'];
            this['dCenter$']['x'] = _0x1faf3f['clam_GameK' + 'ey_p'](_0x21c841, Math['random']() * this['dProgress$']['width'], _0x278d95), this['dArrow$']['x'] = 0x0, this['xSpeed$'] = 0.3, this['dirValue$'] = 0x1, this['isShaking$'] = !0x1, this['shakeTime$'] = 0x0, this['shakeDis$'] = 0xc8, this['shakeNum$'] = 0x0;
        }
        ['moveArrow']() {
            this['dArrow$']['x'] >= this['dProgress$']['width'] ? this['dirValue$'] = -0x1 : this['dArrow$']['x'] <= 0x0 && (this['dirValue$'] = 0x1), this['dArrow$']['x'] += this['dirValue$'] * this['xSpeed$'] * Math['min'](Laya['timer']['delta'], 0x32), this['isShaking$'] || this['dArrow$']['x'] < 0.6 * this['dProgress$']['width'] && this['dArrow$']['x'] > 0.4 * this['dProgress$']['width'] && (this['isShaking$'] = !0x0);
        }
        ['checkShake']() {
            this['isShaking$'] && (this['shakeTime$'] += Laya['timer']['delta'], this['shakeTime$'] > 0xc8 && (this['shakeTime$'] = 0x0, this['shakeNum$']++), this['shakeNum$'] >= 0x3 && (this['shakeNum$'] = 0x0, this['isShaking$'] = !0x1));
        }
        ['onUpdate']() {
            this['isStartMov' + 'eArrow'] && this['moveArrow'](), this['checkShake']();
        }
        ['stopMoveAr' + 'row']() {
            this['isStartMov' + 'eArrow'] = !0x1;
            let _0x1436fc = this['dCenter$']['x'] + this['dCenter$']['width'] / 0x2, _0x19ae36 = 0x1;
            _0x1436fc > this['dArrow$']['x'] ? _0x19ae36 = 0x1 - (_0x1436fc - this['dArrow$']['x']) / _0x1436fc : _0x1436fc < this['dArrow$']['x'] && (_0x19ae36 = 0x1 - Math['abs'](_0x1436fc - this['dArrow$']['x']) / _0x1436fc);
            let _0x34c690 = this['isDecorate' + 'True$'] ? (_0x19ae36 + 0x1) / 0x2 : _0x19ae36 / 0x2;
            this['saveDecora' + 'teScore$'](_0x34c690), this['showSelect' + 'Word$'](!0x1);
        }
        ['onUI_GameK' + 'ey_Load']() {
            super['onUI_GameK' + 'ey_Load'](), this['input_box$'] = _0x1faf3f['getC_GameK' + 'ey_hildDee' + 'p'](this['owner'], 'inputBox'), this['box_drink$'] = _0x1faf3f['getC_GameK' + 'ey_hildDee' + 'p'](this['owner'], 'box_drink'), this['drinkBg$'] = _0x1faf3f['getC_GameK' + 'ey_hildDee' + 'p'](this['box_drink$'], 'img_bg'), this['decorate$'] = _0x1faf3f['getC_GameK' + 'ey_hildDee' + 'p'](this['box_drink$'], 'img_decora' + 'te'), this['glass$'] = _0x1faf3f['getC_GameK' + 'ey_hildDee' + 'p'](this['box_drink$'], 'img_glass'), this['glassBg$'] = _0x1faf3f['getC_GameK' + 'ey_hildDee' + 'p'](this['box_drink$'], 'img_glass_' + 'bg'), this['joiceUp$'] = _0x1faf3f['getC_GameK' + 'ey_hildDee' + 'p'](this['box_drink$'], 'img_up'), this['joiceCente' + 'r$'] = _0x1faf3f['getC_GameK' + 'ey_hildDee' + 'p'](this['box_drink$'], 'img_center'), this['joiceBotto' + 'm$'] = _0x1faf3f['getC_GameK' + 'ey_hildDee' + 'p'](this['box_drink$'], 'img_bottom'), this['btn_back$'] = _0x1faf3f['getC_GameK' + 'ey_hildDee' + 'p'](this['owner'], 'btn_back'), this['btn_Box$'] = _0x1faf3f['getC_GameK' + 'ey_hildDee' + 'p'](this['owner'], 'btnBox'), this['btn_good1$'] = _0x1faf3f['getC_GameK' + 'ey_hildDee' + 'p'](this['owner'], 'btn_good1'), this['btn_good2$'] = _0x1faf3f['getC_GameK' + 'ey_hildDee' + 'p'](this['owner'], 'btn_good2'), this['btn_good3$'] = _0x1faf3f['getC_GameK' + 'ey_hildDee' + 'p'](this['owner'], 'btn_good3'), this['img_good1$'] = _0x1faf3f['getC_GameK' + 'ey_hildDee' + 'p'](this['owner'], 'img_good1'), this['img_good2$'] = _0x1faf3f['getC_GameK' + 'ey_hildDee' + 'p'](this['owner'], 'img_good2'), this['img_good3$'] = _0x1faf3f['getC_GameK' + 'ey_hildDee' + 'p'](this['owner'], 'img_good3'), this['img_juiceM' + 'ark1$'] = _0x1faf3f['getC_GameK' + 'ey_hildDee' + 'p'](this['owner'], 'img_juiceM' + 'ark1'), this['img_markIc' + 'on1Bg$'] = _0x1faf3f['getC_GameK' + 'ey_hildDee' + 'p'](this['owner'], 'img_markIc' + 'on1Bg'), this['img_markIc' + 'on1$'] = _0x1faf3f['getC_GameK' + 'ey_hildDee' + 'p'](this['owner'], 'img_markIc' + 'on1'), this['img_juiceM' + 'ark2$'] = _0x1faf3f['getC_GameK' + 'ey_hildDee' + 'p'](this['owner'], 'img_juiceM' + 'ark2'), this['img_markIc' + 'on2Bg$'] = _0x1faf3f['getC_GameK' + 'ey_hildDee' + 'p'](this['owner'], 'img_markIc' + 'on2Bg'), this['img_markIc' + 'on2$'] = _0x1faf3f['getC_GameK' + 'ey_hildDee' + 'p'](this['owner'], 'img_markIc' + 'on2'), this['img_juiceM' + 'ark3$'] = _0x1faf3f['getC_GameK' + 'ey_hildDee' + 'p'](this['owner'], 'img_juiceM' + 'ark3'), this['img_markIc' + 'on3Bg$'] = _0x1faf3f['getC_GameK' + 'ey_hildDee' + 'p'](this['owner'], 'img_markIc' + 'on3Bg'), this['img_markIc' + 'on3$'] = _0x1faf3f['getC_GameK' + 'ey_hildDee' + 'p'](this['owner'], 'img_markIc' + 'on3'), this['dProgress$'] = _0x1faf3f['getC_GameK' + 'ey_hildDee' + 'p'](this['owner'], 'img_progre' + 'ss'), this['dCenter$'] = _0x1faf3f['getC_GameK' + 'ey_hildDee' + 'p'](this['owner'], 'img_area'), this['dArrow$'] = _0x1faf3f['getC_GameK' + 'ey_hildDee' + 'p'](this['owner'], 'img_arrow'), this['label_word' + '$'] = _0x1faf3f['getC_GameK' + 'ey_hildDee' + 'p'](this['owner'], 'label_word'), this['label_rati' + 'o$'] = _0x1faf3f['getC_GameK' + 'ey_hildDee' + 'p'](this['owner'], 'label_rati' + 'o'), this['effectStar' + '$'] = _0x1faf3f['getC_GameK' + 'ey_hildDee' + 'p'](this['owner'], 'effectStar'), this['label_sele' + 'ct$'] = _0x1faf3f['getC_GameK' + 'ey_hildDee' + 'p'](this['owner'], 'label_sele' + 'ct'), this['initUI$'](), this['moni_GameK' + 'ey_torBtns'](), this['monitorEve' + 'nts$']();
        }
        ['moni_GameK' + 'ey_torBtns']() {
            this['input_box$'] && (this['input_box$']['on'](Laya['Event']['MOUSE_DOWN'], this, this['onInputMou' + 'seDown$']), this['input_box$']['on'](Laya['Event']['MOUSE_UP'], this, this['onInputMou' + 'seUp$']), this['input_box$']['on'](Laya['Event']['MOUSE_OUT'], this, this['onInputMou' + 'seUp$'])), _0x1faf3f['onBu_GameK' + 'ey_ttonSca' + 'leEvent'](this['btn_back$'], this, 'onClickBac' + 'k$'), _0x1faf3f['onBu_GameK' + 'ey_ttonSca' + 'leEvent'](this['btn_good1$'], this, 'onClickGoo' + 'd$'), _0x1faf3f['onBu_GameK' + 'ey_ttonSca' + 'leEvent'](this['btn_good2$'], this, 'onClickGoo' + 'd$'), _0x1faf3f['onBu_GameK' + 'ey_ttonSca' + 'leEvent'](this['btn_good3$'], this, 'onClickGoo' + 'd$');
        }
        ['initUI$']() {
            this['owner']['bottomBtnA' + 'nim']['play'](0x0, !0x0), this['makeRoleNe' + 'edDrink$']();
        }
        ['onDestroy']() {
        }
        ['nextBlendS' + 'tep$']() {
            this['blendStep$']++, this['resetBtns$']();
        }
        ['resetBtns$']() {
            this['blendStep$'] == _0x157d64['Step$']['FRUIT'] ? this['resetFruit' + 'Btns$']() : this['blendStep$'] == _0x157d64['Step$']['GLASS'] ? (this['showSelect' + 'Word$'](!0x0, this['blendStep$']), this['resetGlass' + 'Btns$']()) : this['blendStep$'] == _0x157d64['Step$']['DECORATE'] && (this['startMoveA' + 'rrow'](), this['showSelect' + 'Word$'](!0x0, this['blendStep$']), this['resetDecor' + 'ateBtns$']()), this['showBtns$']();
        }
        ['resetFruit' + 'Btns$']() {
            let _0x4cb6f3 = this['fruitIdArr' + '$'][this['curFruitNu' + 'm$'] - 0x1], _0x4ba26f = _0x4cb6f3, _0x528374 = this['drinkDataM' + 'g$']['getFruitDa' + 'taByFruitI' + 'd$'](_0x4cb6f3)['fruitImgId'], _0x4d1e39 = this['havedFruit' + 'IdArr$']['length'], _0x3f5770 = this['havedFruit' + 'IdArr$'][Math['floor'](Math['random']() * _0x4d1e39)], _0xbc7a7d = _0x3f5770, _0xea1254 = this['drinkDataM' + 'g$']['getFruitDa' + 'taByFruitI' + 'd$'](_0x3f5770)['fruitImgId'], _0x557f5d = this['havedFruit' + 'IdArr$'][Math['floor'](Math['random']() * _0x4d1e39)], _0x50e578 = _0x557f5d, _0x415a57 = this['drinkDataM' + 'g$']['getFruitDa' + 'taByFruitI' + 'd$'](_0x557f5d)['fruitImgId'], _0x64dad3 = Math['ceil'](0x3 * Math['random']());
            this['btn_good1$']['skin'] = this['btn_good2$']['skin'] = this['btn_good3$']['skin'] = 'battle/But' + 'tonE.png', this['btn_good1$']['isChoiceTr' + 'ue'] = void 0x0, this['btn_good2$']['isChoiceTr' + 'ue'] = void 0x0, this['btn_good3$']['isChoiceTr' + 'ue'] = void 0x0, 0x1 == _0x64dad3 ? (this['btn_good1$']['isChoiceTr' + 'ue'] = !0x0, this['setBtnsInf' + 'o$'](_0x4ba26f, _0x528374, _0xbc7a7d, _0xea1254, _0x50e578, _0x415a57)) : 0x2 == _0x64dad3 ? (this['btn_good2$']['isChoiceTr' + 'ue'] = !0x0, this['setBtnsInf' + 'o$'](_0xbc7a7d, _0xea1254, _0x4ba26f, _0x528374, _0x50e578, _0x415a57)) : (this['btn_good3$']['isChoiceTr' + 'ue'] = !0x0, this['setBtnsInf' + 'o$'](_0xbc7a7d, _0xea1254, _0x50e578, _0x415a57, _0x4ba26f, _0x528374)), _0x4cb6f3 == _0x3f5770 && (this['btn_good1$']['isChoiceTr' + 'ue'] = !0x0), _0x4cb6f3 == _0x557f5d && (this['btn_good2$']['isChoiceTr' + 'ue'] = !0x0);
        }
        ['resetGlass' + 'Btns$']() {
            let _0x3b5d0a = this['curDrinkDa' + 'ta$']['glassId'], _0x5d623c = D['glassBasic'][_0x3b5d0a], _0xf7b7ee = _0x5d623c['glassModel' + 'Id'], _0x459d49 = _0x5d623c['glassImgId'], _0x5a38b1 = this['havedGlass' + 'IdsArr$']['length'], _0x69cb09 = this['havedGlass' + 'IdsArr$'][Math['floor'](Math['random']() * _0x5a38b1)], _0x2da7d4 = D['glassBasic'][_0x69cb09]['glassModel' + 'Id'], _0x421884 = D['glassBasic'][_0x69cb09]['glassImgId'], _0x3484fd = this['havedGlass' + 'IdsArr$'][Math['floor'](Math['random']() * _0x5a38b1)], _0x47746f = D['glassBasic'][_0x3484fd]['glassModel' + 'Id'], _0x1647bc = D['glassBasic'][_0x3484fd]['glassImgId'], _0x39209f = Math['ceil'](0x3 * Math['random']());
            this['btn_good1$']['skin'] = this['btn_good2$']['skin'] = this['btn_good3$']['skin'] = 'battle/But' + 'tonK.png', 0x1 == _0x39209f ? this['setBtnsInf' + 'o$'](_0xf7b7ee, _0x459d49, _0x2da7d4, _0x421884, _0x47746f, _0x1647bc) : 0x2 == _0x39209f ? this['setBtnsInf' + 'o$'](_0x2da7d4, _0x421884, _0xf7b7ee, _0x459d49, _0x47746f, _0x1647bc) : this['setBtnsInf' + 'o$'](_0x2da7d4, _0x421884, _0x47746f, _0x1647bc, _0xf7b7ee, _0x459d49);
        }
        ['resetDecor' + 'ateBtns$']() {
            let _0x2e987c = this['curDrinkDa' + 'ta$']['decorateId'], _0xe2a617 = D['decorateBa' + 'sic'][_0x2e987c], _0x20909a = _0xe2a617['decorateMo' + 'delId'], _0x566323 = _0xe2a617['decorateIm' + 'gId'], _0x495000 = this['havedDecor' + 'ateIdsArr$']['length'], _0x496a35 = this['havedDecor' + 'ateIdsArr$'][Math['floor'](Math['random']() * _0x495000)], _0x28f13c = D['decorateBa' + 'sic'][_0x496a35]['decorateMo' + 'delId'], _0xcd4f36 = D['decorateBa' + 'sic'][_0x496a35]['decorateIm' + 'gId'], _0x1fc0ff = this['havedDecor' + 'ateIdsArr$'][Math['floor'](Math['random']() * _0x495000)], _0x1333c4 = D['decorateBa' + 'sic'][_0x1fc0ff]['decorateMo' + 'delId'], _0x533735 = D['decorateBa' + 'sic'][_0x1fc0ff]['decorateIm' + 'gId'], _0x56bb30 = Math['ceil'](0x3 * Math['random']());
            this['btn_good1$']['isDecorate' + 'True'] = void 0x0, this['btn_good2$']['isDecorate' + 'True'] = void 0x0, this['btn_good3$']['isDecorate' + 'True'] = void 0x0, this['btn_good1$']['skin'] = this['btn_good2$']['skin'] = this['btn_good3$']['skin'] = 'battle/But' + 'tonM.png', 0x1 == _0x56bb30 ? (this['btn_good1$']['isDecorate' + 'True'] = !0x0, this['setBtnsInf' + 'o$'](_0x20909a, _0x566323, _0x28f13c, _0xcd4f36, _0x1333c4, _0x533735)) : 0x2 == _0x56bb30 ? (this['btn_good2$']['isDecorate' + 'True'] = !0x0, this['setBtnsInf' + 'o$'](_0x28f13c, _0xcd4f36, _0x20909a, _0x566323, _0x1333c4, _0x533735)) : (this['btn_good3$']['isDecorate' + 'True'] = !0x0, this['setBtnsInf' + 'o$'](_0x28f13c, _0xcd4f36, _0x1333c4, _0x533735, _0x20909a, _0x566323)), _0x2e987c == _0x496a35 && (this['btn_good1$']['isDecorate' + 'True'] = !0x0), _0x2e987c == _0x1fc0ff && (this['btn_good2$']['isDecorate' + 'True'] = !0x0);
        }
        ['setBtnsInf' + 'o$'](_0x314fe7, _0x250834, _0x5ea79e, _0x561a94, _0x2ef681, _0x4c8bd) {
            this['btn_good1$']['willSendId'] = _0x314fe7, this['img_good1$']['skin'] = _0x1faf3f['getSkinPat' + 'hById'](_0x250834), this['btn_good2$']['willSendId'] = _0x5ea79e, this['img_good2$']['skin'] = _0x1faf3f['getSkinPat' + 'hById'](_0x561a94), this['btn_good3$']['willSendId'] = _0x2ef681, this['img_good3$']['skin'] = _0x1faf3f['getSkinPat' + 'hById'](_0x4c8bd);
        }
        ['onClickGoo' + 'd$'](_0x293e93) {
            let _0x3d6621 = _0x293e93['target']['willSendId'];
            if (_0x293e93['target']['isChoiceTr' + 'ue'] && this['recordChoi' + 'ce$'](), _0x293e93['target']['isDecorate' + 'True'] && (this['isDecorate' + 'True$'] = !0x0), this['blendStep$'] == _0x157d64['Step$']['FRUIT'])
                this['curFruitNu' + 'm$']++, this['showWarnZh' + 'a$'](), _0x3830d2['getInstanc' + 'e$']()['disp_GameK' + 'ey_atchEve' + 'nt'](_0x5b5578['FRUIT_SEND'], _0x3d6621);
            else {
                if (this['blendStep$'] == _0x157d64['Step$']['GLASS'])
                    return this['nextBlendS' + 'tep$'](), void _0x3830d2['getInstanc' + 'e$']()['disp_GameK' + 'ey_atchEve' + 'nt'](_0x5b5578['CHANGE_CUP'], _0x3d6621);
                this['blendStep$'] == _0x157d64['Step$']['DECORATE'] && (this['stopMoveAr' + 'row'](), _0x3830d2['getInstanc' + 'e$']()['disp_GameK' + 'ey_atchEve' + 'nt'](_0x5b5578['CHANGE_ADO' + 'RN'], _0x3d6621));
            }
            this['hideBtns$']();
        }
        ['showOnceSk' + 'illScore$'](_0xf5f2b5) {
            this['owner']['warnZha']['gotoAndSto' + 'p'](this['owner']['warnZha']['playEnd']);
            let _0x4f8e3d = _0xf5f2b5['data'];
            if (_0x4f8e3d >= 0.95 ? (this['label_word' + '$']['text'] = 'PERFECT!', this['label_rati' + 'o$']['visible'] = !0x1) : _0x4f8e3d >= 0.85 && _0x4f8e3d < 0.95 ? (this['label_word' + '$']['text'] = 'COOL!', this['label_rati' + 'o$']['visible'] = !0x0, this['label_rati' + 'o$']['text'] = Math['floor'](0x64 * _0x4f8e3d) + '%') : (this['label_word' + '$']['text'] = 'GREAT!', this['label_rati' + 'o$']['visible'] = !0x0, this['label_rati' + 'o$']['text'] = Math['floor'](0x64 * _0x4f8e3d) + '%'), this['owner']['scoreWord']['play'](0x0, !0x1), this['starEffect' + 'UI$'])
                this['starEffect' + 'UI$']['starShow']['play'](0x0, !0x1);
            else {
                let _0x1a56d6 = 'Prefab/Eff' + 'ect/ShowSt' + 'ar.json';
                _0x3a41f3['getInstanc' + 'e$']()['crea_GameK' + 'ey_tePrefa' + 'b'](_0x1a56d6, this['effectStar' + '$'], this['preCompele' + 't$']['bind'](this));
            }
        }
        ['preCompele' + 't$'](_0xa6820) {
            this['starEffect' + 'UI$'] = _0xa6820, _0xa6820['starShow']['play'](0x0, !0x1);
        }
        ['showSelect' + 'Word$'](_0x5ba628, _0x372c83) {
            _0x5ba628 ? (this['label_sele' + 'ct$']['visible'] = !0x0, _0x372c83 == _0x157d64['Step$']['GLASS'] ? this['label_sele' + 'ct$']['text'] = 'Choose\x20A\x20C' + 'up' : _0x372c83 == _0x157d64['Step$']['DECORATE'] && (this['label_sele' + 'ct$']['text'] = 'Choose\x20Dec' + 'orations')) : this['label_sele' + 'ct$']['visible'] = !0x1;
        }
        ['showWarnZh' + 'a$']() {
            this['owner']['warnZha']['play'](0x0, !0x1);
        }
        ['showBtns$']() {
            this['btn_Box$']['visible'] = !0x0;
        }
        ['hideBtns$']() {
            this['btn_Box$']['visible'] = !0x1;
        }
        ['onClickBac' + 'k$']() {
            _0x3830d2['getInstanc' + 'e$']()['disp_GameK' + 'ey_atchEve' + 'nt'](_0x5b5578['REST_FIGHT']), _0x3a41f3['getInstanc' + 'e$']()['open_GameK' + 'ey_UI'](Laya['CyzClassMa' + 'p']['MainUI']), this['destroy']();
        }
        ['onInputMou' + 'seDown$'](_0x5cd318) {
            _0x3830d2['getInstanc' + 'e$']()['disp_GameK' + 'ey_atchEve' + 'nt'](_0x5b5578['INPUT_MOUS' + 'E_DOWN'], _0x5cd318);
        }
        ['onInputMou' + 'seUp$'](_0x1815bf) {
            _0x3830d2['getInstanc' + 'e$']()['disp_GameK' + 'ey_atchEve' + 'nt'](_0x5b5578['INPUT_MOUS' + 'E_UP'], _0x1815bf);
        }
        ['makeRoleNe' + 'edDrink$']() {
            this['drinkBg$']['skin'] = _0x1faf3f['getSkinPat' + 'hById'](this['curDrinkDa' + 'ta$']['effectImgI' + 'd']), this['glass$']['skin'] = _0x1faf3f['getSkinPat' + 'hById'](D['glassBasic'][this['curDrinkDa' + 'ta$']['glassId']]['glassImgId']), this['glassBg$']['skin'] = _0x1faf3f['getSkinPat' + 'hById'](D['glassBasic'][this['curDrinkDa' + 'ta$']['glassId']]['glassImgId'] + 0x4), this['decorate$']['skin'] = _0x1faf3f['getSkinPat' + 'hById'](D['decorateBa' + 'sic'][this['curDrinkDa' + 'ta$']['decorateId']]['decorateIm' + 'gId']), this['joiceUp$']['skin'] = _0x1faf3f['getSkinPat' + 'hById'](this['curDrinkDa' + 'ta$']['juiceImgId' + 'Arr'][0x0]), this['joiceCente' + 'r$']['skin'] = _0x1faf3f['getSkinPat' + 'hById'](this['curDrinkDa' + 'ta$']['juiceImgId' + 'Arr'][0x1]), this['joiceBotto' + 'm$']['skin'] = _0x1faf3f['getSkinPat' + 'hById'](this['curDrinkDa' + 'ta$']['juiceImgId' + 'Arr'][0x2]);
            let _0x17ba20 = this['drinkDataM' + 'g$']['getFruitDa' + 'taByFruitI' + 'd$'](this['curDrinkDa' + 'ta$']['fruitIdArr'][0x2])['fluidColor'];
            this['juiceChang' + 'eColor$'](_0x17ba20, this['joiceUp$']);
            let _0x312a7c = this['drinkDataM' + 'g$']['getFruitDa' + 'taByFruitI' + 'd$'](this['curDrinkDa' + 'ta$']['fruitIdArr'][0x1])['fluidColor'];
            this['juiceChang' + 'eColor$'](_0x312a7c, this['joiceCente' + 'r$']);
            let _0x1220d5 = this['drinkDataM' + 'g$']['getFruitDa' + 'taByFruitI' + 'd$'](this['curDrinkDa' + 'ta$']['fruitIdArr'][0x0])['fluidColor'];
            this['juiceChang' + 'eColor$'](_0x1220d5, this['joiceBotto' + 'm$']);
            let _0x3429e6 = this['curDrinkDa' + 'ta$']['fruitIdArr']['length'];
            0x2 == _0x3429e6 ? this['juiceChang' + 'eColor$'](_0x312a7c, this['joiceUp$']) : 0x1 == _0x3429e6 && (this['juiceChang' + 'eColor$'](_0x1220d5, this['joiceUp$']), this['juiceChang' + 'eColor$'](_0x1220d5, this['joiceCente' + 'r$'])), 0x3 == this['curDrinkDa' + 'ta$']['glassId'] && (this['joiceUp$']['centerX'] -= 0xd, this['joiceUp$']['centerY'] += 0xd, this['joiceCente' + 'r$']['centerX'] -= 0xd, this['joiceCente' + 'r$']['centerY'] += 0xd, this['joiceBotto' + 'm$']['centerX'] -= 0xd, this['joiceBotto' + 'm$']['centerY'] += 0xd);
        }
        ['juiceChang' + 'eColor$'](_0x15d377, _0x372835) {
            _0x1faf3f['changeImgC' + 'olor$'](_0x15d377, _0x372835);
        }
        ['setMarkImg' + '$'](_0x19ce78) {
            let _0x48fb25 = _0x19ce78['data'], _0x521708 = _0x48fb25['length'];
            if (0x1 == _0x521708) {
                this['img_juiceM' + 'ark1$']['visible'] = !0x0, this['img_juiceM' + 'ark2$']['visible'] = !0x1, this['img_juiceM' + 'ark3$']['visible'] = !0x1, this['img_juiceM' + 'ark1$']['pos'](_0x48fb25[0x0]['x'], _0x48fb25[0x0]['y']);
                let _0x27845c = this['drinkDataM' + 'g$']['getFruitDa' + 'taByFruitI' + 'd$'](this['fruitIdArr' + '$'][0x0])['fruitImgId'];
                this['img_markIc' + 'on1$']['skin'] = _0x1faf3f['getSkinPat' + 'hById'](_0x27845c);
            } else {
                if (0x2 == _0x521708) {
                    this['img_juiceM' + 'ark1$']['visible'] = !0x0, this['img_juiceM' + 'ark2$']['visible'] = !0x0, this['img_juiceM' + 'ark3$']['visible'] = !0x1, this['img_juiceM' + 'ark1$']['pos'](_0x48fb25[0x0]['x'], _0x48fb25[0x0]['y']);
                    let _0x331e7d = this['drinkDataM' + 'g$']['getFruitDa' + 'taByFruitI' + 'd$'](this['fruitIdArr' + '$'][0x0])['fruitImgId'];
                    this['img_markIc' + 'on1$']['skin'] = _0x1faf3f['getSkinPat' + 'hById'](_0x331e7d), this['img_juiceM' + 'ark2$']['pos'](_0x48fb25[0x1]['x'], _0x48fb25[0x1]['y']);
                    let _0xda034b = this['drinkDataM' + 'g$']['getFruitDa' + 'taByFruitI' + 'd$'](this['fruitIdArr' + '$'][0x1])['fruitImgId'];
                    this['img_markIc' + 'on2$']['skin'] = _0x1faf3f['getSkinPat' + 'hById'](_0xda034b);
                } else {
                    if (0x3 == _0x521708) {
                        this['img_juiceM' + 'ark1$']['visible'] = !0x0, this['img_juiceM' + 'ark2$']['visible'] = !0x0, this['img_juiceM' + 'ark3$']['visible'] = !0x0, this['img_juiceM' + 'ark1$']['pos'](_0x48fb25[0x0]['x'], _0x48fb25[0x0]['y']);
                        let _0x16c39f = this['drinkDataM' + 'g$']['getFruitDa' + 'taByFruitI' + 'd$'](this['fruitIdArr' + '$'][0x0])['fruitImgId'];
                        this['img_markIc' + 'on1$']['skin'] = _0x1faf3f['getSkinPat' + 'hById'](_0x16c39f), this['img_juiceM' + 'ark2$']['pos'](_0x48fb25[0x1]['x'], _0x48fb25[0x1]['y']);
                        let _0xe81e15 = this['drinkDataM' + 'g$']['getFruitDa' + 'taByFruitI' + 'd$'](this['fruitIdArr' + '$'][0x1])['fruitImgId'];
                        this['img_markIc' + 'on2$']['skin'] = _0x1faf3f['getSkinPat' + 'hById'](_0xe81e15), this['img_juiceM' + 'ark3$']['pos'](_0x48fb25[0x2]['x'], _0x48fb25[0x2]['y']);
                        let _0x2c31d9 = this['drinkDataM' + 'g$']['getFruitDa' + 'taByFruitI' + 'd$'](this['fruitIdArr' + '$'][0x2])['fruitImgId'];
                        this['img_markIc' + 'on3$']['skin'] = _0x1faf3f['getSkinPat' + 'hById'](_0x2c31d9);
                    }
                }
            }
            this['img_markIc' + 'on1Bg$']['skin'] = this['img_markIc' + 'on1$']['skin'], this['img_markIc' + 'on2Bg$']['skin'] = this['img_markIc' + 'on2$']['skin'], this['img_markIc' + 'on3Bg$']['skin'] = this['img_markIc' + 'on3$']['skin'], _0x1faf3f['imgBecomeW' + 'hite$'](this['img_markIc' + 'on1Bg$']), _0x1faf3f['imgBecomeW' + 'hite$'](this['img_markIc' + 'on2Bg$']), _0x1faf3f['imgBecomeW' + 'hite$'](this['img_markIc' + 'on3Bg$']);
        }
        ['hideMarks$']() {
            this['img_juiceM' + 'ark1$']['visible'] = !0x1, this['img_juiceM' + 'ark2$']['visible'] = !0x1, this['img_juiceM' + 'ark3$']['visible'] = !0x1;
        }
        ['recordChoi' + 'ce$']() {
            this['choiceTrue' + 'Num$']++;
        }
        ['recordOneF' + 'ruitSkillS' + 'core$'](_0x256a3c) {
            let _0xaafbc7 = _0x256a3c['data'];
            this['skillScore' + 'Arr$']['push'](_0xaafbc7);
        }
        ['saveChoice' + 'Score$']() {
            this['drinkDataM' + 'g$']['setChoiceS' + 'core$'](this['choiceTrue' + 'Num$']);
        }
        ['saveSkillS' + 'coreArr$']() {
            this['drinkDataM' + 'g$']['setSkillSc' + 'ore$'](this['skillScore' + 'Arr$']);
        }
        ['saveDecora' + 'teScore$'](_0x1dfcb7) {
            this['drinkDataM' + 'g$']['setDecorat' + 'eScore$'](_0x1dfcb7);
        }
        ['openResult' + 'Window$']() {
            _0x3a41f3['getInstanc' + 'e$']()['open_GameK' + 'ey_UI'](_0x464b32, void 0x0, [
                this['fruitIdArr' + '$'],
                this['curDrinkDa' + 'ta$']['decorateId']
            ]);
        }
        ['removeStar' + 'EffectUI$']() {
            this['starEffect' + 'UI$'] && (this['starEffect' + 'UI$']['destroy'](), this['starEffect' + 'UI$'] = void 0x0);
        }
        ['monitorEve' + 'nts$']() {
            this['addE_GameK' + 'ey_ventLis' + 'tener'](_0x5b5578['RSP_FILL_U' + 'I_POSES'], this['setMarkImg' + '$']), this['addE_GameK' + 'ey_ventLis' + 'tener'](_0x5b5578['RSP_FILL_U' + 'I_POSES'], this['resetBtns$']), this['addE_GameK' + 'ey_ventLis' + 'tener'](_0x5b5578['OVER_JUICE'], this['resetBtns$']), this['addE_GameK' + 'ey_ventLis' + 'tener'](_0x5b5578['OVER_JUICE'], this['recordOneF' + 'ruitSkillS' + 'core$']), this['addE_GameK' + 'ey_ventLis' + 'tener'](_0x5b5578['OVER_JUICE'], this['showOnceSk' + 'illScore$']), this['addE_GameK' + 'ey_ventLis' + 'tener'](_0x5b5578['ADORN_STAR' + 'T'], this['nextBlendS' + 'tep$']), this['addE_GameK' + 'ey_ventLis' + 'tener'](_0x5b5578['ADORN_STAR' + 'T'], this['saveChoice' + 'Score$']), this['addE_GameK' + 'ey_ventLis' + 'tener'](_0x5b5578['ADORN_STAR' + 'T'], this['saveSkillS' + 'coreArr$']), this['addE_GameK' + 'ey_ventLis' + 'tener'](_0x5b5578['ADORN_STAR' + 'T'], this['hideMarks$']), this['addE_GameK' + 'ey_ventLis' + 'tener'](_0x5b5578['ADORN_STAR' + 'T'], this['removeStar' + 'EffectUI$']), this['addE_GameK' + 'ey_ventLis' + 'tener'](_0x5b5578['ADORN_OVER'], this['openResult' + 'Window$']), this['addE_GameK' + 'ey_ventLis' + 'tener'](_0x5b5578['ADORN_OVER'], this['destroy']);
        }
    }
    _0x157d64['Step$'] = {
        'FRUIT': 0x1,
        'GLASS': 0x2,
        'DECORATE': 0x3
    }, _0x157d64['url'] = 'Prefab/Bat' + 'tle/Battle' + 'InfoWindow' + '.json', _0x157d64['className'] = 'BattleInfo' + 'UI$', _0x157d64['uiConfig'] = {
        'layer': _0x5a29eb['LAYER_NORM' + 'AL'],
        'only': !0x0,
        'needUISurrenal': !0x0,
        'notClose': !0x1
    };
    class _0x5d78d3 extends _0x1fc701 {
        constructor() {
            super(), this['winName'] = '商店收集品界面', this['nextGoodsD' + 'ata'] = void 0x0, this['tagIndexSh' + 'owDatas'] = void 0x0;
        }
        ['init_GameK' + 'ey_Data']() {
            this['curPage'] = 0x1, this['goodsTagIn' + 'dex'] = 0x0, this['refreshSho' + 'pData']();
        }
        ['onUI_GameK' + 'ey_Load']() {
            super['onUI_GameK' + 'ey_Load'](), this['label_curP' + 'ageName'] = _0x1faf3f['getC_GameK' + 'ey_hildDee' + 'p'](this['owner'], 'label_curP' + 'ageName'), this['btn_close'] = _0x1faf3f['getC_GameK' + 'ey_hildDee' + 'p'](this['owner'], 'btn_close'), this['btn_fruit'] = _0x1faf3f['getC_GameK' + 'ey_hildDee' + 'p'](this['owner'], 'btn_fruit'), this['btn_glass'] = _0x1faf3f['getC_GameK' + 'ey_hildDee' + 'p'](this['owner'], 'btn_glass'), this['btn_decora' + 'te'] = _0x1faf3f['getC_GameK' + 'ey_hildDee' + 'p'](this['owner'], 'btn_decora' + 'te'), this['unSelectBt' + 'nHeight'] = this['btn_glass']['height'], this['unSelectBt' + 'nSkin'] = this['btn_glass']['skin'], this['selectBtnH' + 'eight'] = this['btn_fruit']['height'], this['selectBtnS' + 'kin'] = this['btn_fruit']['skin'], this['list_good_' + 'cur'] = _0x1faf3f['getC_GameK' + 'ey_hildDee' + 'p'](this['owner'], 'list_good_' + 'cur'), this['list_good_' + 'cur']['scrollBar']['visible'] = !0x1, this['list_good_' + 'cur']['renderHand' + 'ler'] = new Laya['Handler'](this, this['renderGood' + 'Item']), this['list_good_' + 'cur']['mouseHandl' + 'er'] = new Laya['Handler'](this, this['selectGood' + 'Item']), this['listenEven' + 'ts'](), this['monitorBtn' + 's'](), this['refreshSho' + 'pGoods']();
        }
        ['refreshSho' + 'pData']() {
            this['shopDatas'] = _0xe6399d['getInstanc' + 'e$']()['shopData$']['getShopDat' + 'aList'](this['curPage']);
            let _0x506b96, _0x2bea90, _0x3c52cd, _0x210343, _0x58cd9c = this['shopDatas']['length'];
            for (this['tagIndexSh' + 'owDatas'] = [], this['goodsBuyTy' + 'peDatas'] = [], _0x210343 = 0x0; _0x210343 < _0x58cd9c; _0x210343++)
                _0x506b96 = this['shopDatas'][_0x210343], _0x2bea90 = D['shop'][_0x506b96['id']], (_0x3c52cd = this['goodsBuyTy' + 'peDatas'][_0x2bea90['tagIndex'] - 0x1]) || (this['goodsBuyTy' + 'peDatas'][_0x2bea90['tagIndex'] - 0x1] = _0x3c52cd = {
                    'array': [],
                    'buyType': _0x2bea90['buyType']
                }, this['tagIndexSh' + 'owDatas']['push'](null)), _0x3c52cd['array']['push'](_0x506b96);
        }
        ['refreshSho' + 'pGoods']() {
            this['list_good_' + 'cur']['array'] = this['goodsBuyTy' + 'peDatas'][this['goodsTagIn' + 'dex']]['array'];
        }
        ['listenEven' + 'ts']() {
        }
        ['monitorBtn' + 's']() {
            _0x1faf3f['onBu_GameK' + 'ey_ttonSca' + 'leEvent'](this['btn_glass'], this, 'onClickGla' + 'ssBtn'), _0x1faf3f['onBu_GameK' + 'ey_ttonSca' + 'leEvent'](this['btn_close'], this, 'onClickClo' + 'seBtn'), _0x1faf3f['onBu_GameK' + 'ey_ttonSca' + 'leEvent'](this['btn_fruit'], this, 'onClickFru' + 'itBtn'), _0x1faf3f['onBu_GameK' + 'ey_ttonSca' + 'leEvent'](this['btn_decora' + 'te'], this, 'onClickDec' + 'orateBtn');
        }
        ['changePage' + 'Name']() {
            this['curPage'] == _0x5ed125['SHOP_PAGE']['FRUIT'] ? this['label_curP' + 'ageName']['text'] = 'Juicing\x20it' + 'ems' : this['curPage'] == _0x5ed125['SHOP_PAGE']['GLASS'] ? this['label_curP' + 'ageName']['text'] = 'Cup' : this['curPage'] == _0x5ed125['SHOP_PAGE']['DECORATE'] && (this['label_curP' + 'ageName']['text'] = 'Decoration' + 's');
        }
        ['onChangePa' + 'ge']() {
            this['clearPageD' + 'ata'](), this['refreshSho' + 'pData'](), this['refreshSho' + 'pGoods'](), this['changePage' + 'Name']();
        }
        ['changePage' + 'BtnShow'](_0x258d0e, _0x355a19, _0x456290) {
            _0x258d0e['height'] = this['selectBtnH' + 'eight'], _0x258d0e['skin'] = this['selectBtnS' + 'kin'], _0x355a19['height'] = this['unSelectBt' + 'nHeight'], _0x355a19['skin'] = this['unSelectBt' + 'nSkin'], _0x456290['height'] = this['unSelectBt' + 'nHeight'], _0x456290['skin'] = this['unSelectBt' + 'nSkin'];
        }
        ['onClickFru' + 'itBtn']() {
            _0x5ed125['SHOP_PAGE']['FRUIT'] != this['curPage'] && (this['curPage'] = _0x5ed125['SHOP_PAGE']['FRUIT'], this['changePage' + 'BtnShow'](this['btn_fruit'], this['btn_glass'], this['btn_decora' + 'te']), this['onChangePa' + 'ge']());
        }
        ['onClickGla' + 'ssBtn']() {
            _0x5ed125['SHOP_PAGE']['GLASS'] != this['curPage'] && (this['curPage'] = _0x5ed125['SHOP_PAGE']['GLASS'], this['changePage' + 'BtnShow'](this['btn_glass'], this['btn_fruit'], this['btn_decora' + 'te']), this['onChangePa' + 'ge']());
        }
        ['onClickDec' + 'orateBtn']() {
            _0x5ed125['SHOP_PAGE']['DECORATE'] != this['curPage'] && (this['curPage'] = _0x5ed125['SHOP_PAGE']['DECORATE'], this['changePage' + 'BtnShow'](this['btn_decora' + 'te'], this['btn_glass'], this['btn_fruit']), this['onChangePa' + 'ge']());
        }
        ['onClickClo' + 'seBtn']() {
            this['destroy']();
        }
        ['onGetShopI' + 'tem'](_0x362dbf) {
            this['refreshSel' + 'ectState']();
        }
        ['clearPageD' + 'ata']() {
            this['goodsTagIn' + 'dex'] = 0x0;
        }
        ['refreshSel' + 'ectState']() {
            let _0x589247, _0x42c56b, _0x34e612 = this['list_good_' + 'cur']['cells'], _0x204b99 = _0x34e612['length'];
            for (_0x589247 = 0x0; _0x589247 < _0x204b99; _0x589247++)
                (_0x42c56b = _0x34e612[_0x589247])['dataSource'] && (_0x42c56b['dataSource']['id'] == this['curUseGood' + 'Id'] ? this['renderGood' + 'Item'](_0x42c56b, this['list_good_' + 'cur']['startIndex'] + _0x589247) : this['lastUseGoo' + 'dId'] == _0x42c56b['dataSource']['id'] && this['renderGood' + 'Item'](_0x42c56b, this['list_good_' + 'cur']['startIndex'] + _0x589247));
        }
        ['renderGood' + 'Item'](_0x572ade, _0x5edeb3) {
            _0x572ade['inited'] || (_0x572ade['icon_good'] = _0x1faf3f['getC_GameK' + 'ey_hildDee' + 'p'](_0x572ade, 'icon_good'), _0x572ade['inited'] = !0x0);
            let _0x2b6702 = D['shop'][_0x572ade['dataSource']['id']], _0x2097d7 = _0x2b6702['type'], _0x342ca6 = (_0x2b6702['buyValue2'], void 0x0), _0x256188 = this['isHaveGood'](_0x572ade['dataSource']['id']);
            if (_0x2097d7 == _0x5ed125['GOODS']['FRUIT']) {
                let _0x2bb3fc = D['fruitBasic'][_0x2b6702['itemId']];
                _0x2bb3fc && (_0x342ca6 = _0x2bb3fc['fruitImgId']);
            } else {
                if (_0x2097d7 == _0x5ed125['GOODS']['GLASS']) {
                    let _0x5c17ce = D['glassBasic'][_0x2b6702['itemId']];
                    _0x5c17ce && (_0x342ca6 = _0x5c17ce['glassImgId']);
                } else {
                    if (_0x2097d7 == _0x5ed125['GOODS']['DECORATE']) {
                        let _0x452623 = D['decorateBa' + 'sic'][_0x2b6702['itemId']];
                        _0x452623 && (_0x342ca6 = _0x452623['decorateIm' + 'gId']);
                    }
                }
            }
            _0x572ade['icon_good']['skin'] = _0x256188 ? _0x1faf3f['getSkinPat' + 'hById'](_0x342ca6) : 'collection' + 's/SolidBlo' + 'b.png';
        }
        ['isHaveGood'](_0x3c29e1) {
            if (!_0x3c29e1)
                return !0x0;
            let _0x20aaf4 = D['shop'][_0x3c29e1], _0x43f122 = _0x20aaf4['type'], _0xd919e7 = !0x1;
            return _0x43f122 == _0x5ed125['GOODS']['FRUIT'] ? _0xd919e7 = _0xe6399d['getInstanc' + 'e$']()['userData$']['isHaveFrui' + 'tId'](_0x20aaf4['itemId']) : _0x43f122 == _0x5ed125['GOODS']['GLASS'] ? _0xd919e7 = _0xe6399d['getInstanc' + 'e$']()['userData$']['isHaveGlas' + 'sId'](_0x20aaf4['itemId']) : _0x43f122 == _0x5ed125['GOODS']['DECORATE'] && (_0xd919e7 = _0xe6399d['getInstanc' + 'e$']()['userData$']['isHaveDeco' + 'rateId'](_0x20aaf4['itemId'])), _0xd919e7;
        }
        ['selectGood' + 'Item'](_0x35502d, _0x159880) {
            let _0xf0644e = _0x1faf3f['getC_GameK' + 'ey_hildDee' + 'p'](_0x35502d['target'], 'icon_good');
            _0xf0644e && (!_0xf0644e['defaultSca' + 'le'] && (_0xf0644e['defaultSca' + 'le'] = {
                'scaleX': _0xf0644e['scaleX'] || 0x1,
                'scaleY': _0xf0644e['scaleY'] || 0x1
            }), _0x35502d['type'] == Laya['Event']['MOUSE_DOWN'] ? _0xf0644e['scale'](1.05 * _0xf0644e['defaultSca' + 'le']['scaleX'], 1.05 * _0xf0644e['defaultSca' + 'le']['scaleY']) : _0xf0644e['scale'](0x1, 0x1));
        }
        ['onUpdate']() {
        }
        ['onDestroy']() {
            _0x3a41f3['getInstanc' + 'e$']()['open_GameK' + 'ey_UI'](Laya['CyzClassMa' + 'p']['MainUI']), super['onDestroy']();
        }
    }
    _0x5d78d3['url'] = 'Prefab/Bat' + 'tle/Collec' + 'tionWindow' + '.json', _0x5d78d3['className'] = 'ShopCollec' + 'tionsUI$', _0x5d78d3['uiConfig'] = {
        'layer': _0x5a29eb['LAYER_NORM' + 'AL'],
        'only': !0x0,
        'needUISurrenal': !0x0,
        'notClose': !0x1
    };
    class _0x3bed18 extends _0x1fc701 {
        constructor() {
            super(), this['winName'] = '商店SKIN界面', this['nextGoodsD' + 'ata'] = void 0x0, this['tagIndexSh' + 'owDatas'] = void 0x0;
        }
        ['init_GameK' + 'ey_Data']() {
            this['startHandS' + 'kinId'] = _0xe6399d['getInstanc' + 'e$']()['userData$']['curHandSki' + 'nId'], this['startJuice' + 'rId'] = _0xe6399d['getInstanc' + 'e$']()['userData$']['curJuicerI' + 'd'], this['curPage'] = void 0x0;
            let _0x2ab509 = this['args'][0x0];
            if ((_0x2ab509 = _0x2ab509 || _0x268083['getInstanc' + 'e$']()['shopConfig' + '$']['getShopId'](_0x5ed125['SHOP_PAGE']['JUICER'], this['startJuice' + 'rId'])) > 0x0) {
                let _0x5f1f7c = D['shop'][_0x2ab509];
                this['curPage'] = _0x5f1f7c['page'], this['goodsTagIn' + 'dex'] = _0x5f1f7c['tagIndex'] - 0x1;
            }
            this['refreshSho' + 'pData'](_0x2ab509);
        }
        ['onUI_GameK' + 'ey_Load']() {
            super['onUI_GameK' + 'ey_Load'](), this['label_curP' + 'ageName'] = _0x1faf3f['getC_GameK' + 'ey_hildDee' + 'p'](this['owner'], 'label_curP' + 'ageName'), this['btn_close'] = _0x1faf3f['getC_GameK' + 'ey_hildDee' + 'p'](this['owner'], 'btn_close'), this['btn_juicer'] = _0x1faf3f['getC_GameK' + 'ey_hildDee' + 'p'](this['owner'], 'btn_juicer'), this['btn_hand'] = _0x1faf3f['getC_GameK' + 'ey_hildDee' + 'p'](this['owner'], 'btn_hand'), this['list_good_' + 'cur'] = _0x1faf3f['getC_GameK' + 'ey_hildDee' + 'p'](this['owner'], 'list_good_' + 'cur'), this['list_good_' + 'cur']['scrollBar']['visible'] = !0x1, this['list_good_' + 'cur']['renderHand' + 'ler'] = new Laya['Handler'](this, this['renderGood' + 'Item']), this['list_good_' + 'cur']['mouseHandl' + 'er'] = new Laya['Handler'](this, this['selectGood' + 'Item']), this['listenEven' + 'ts'](), this['monitorBtn' + 's'](), this['refreshSho' + 'pGoods']();
        }
        ['refreshSho' + 'pData'](_0x3b621e) {
            this['shopDatas'] = _0xe6399d['getInstanc' + 'e$']()['shopData$']['getShopDat' + 'aList'](this['curPage']);
            let _0x5bab62 = void 0x0;
            this['curPage'] == _0x5ed125['SHOP_PAGE']['JUICER'] ? _0x5bab62 = _0xe6399d['getInstanc' + 'e$']()['userData$']['curJuicerI' + 'd'] : this['curPage'] == _0x5ed125['SHOP_PAGE']['HAND'] && (_0x5bab62 = _0xe6399d['getInstanc' + 'e$']()['userData$']['curHandSki' + 'nId']);
            let _0x1dabba, _0x3b2776, _0x436a04, _0x1f1835, _0xf0bd66 = this['shopDatas']['length'];
            for (this['lastUseGoo' + 'dId'] = this['curUseGood' + 'Id'], this['tagIndexSh' + 'owDatas'] = [], this['goodsBuyTy' + 'peDatas'] = [], _0x1f1835 = 0x0; _0x1f1835 < _0xf0bd66; _0x1f1835++)
                if (_0x1dabba = this['shopDatas'][_0x1f1835], _0x3b2776 = D['shop'][_0x1dabba['id']]) {
                    if ((_0x436a04 = this['goodsBuyTy' + 'peDatas'][_0x3b2776['tagIndex'] - 0x1]) || (this['goodsBuyTy' + 'peDatas'][_0x3b2776['tagIndex'] - 0x1] = _0x436a04 = {
                            'array': [],
                            'buyType': _0x3b2776['buyType']
                        }, this['tagIndexSh' + 'owDatas']['push'](null)), _0x3b2776['itemId'] == _0x5bab62 && (this['curUseGood' + 'Id'] = _0x1dabba['id']), this['curPage'] == _0x5ed125['SHOP_PAGE']['JUICER']) {
                        if (!D['juicerBasi' + 'c'][_0x3b2776['itemId']])
                            continue;
                    } else {
                        if (this['curPage'] == _0x5ed125['SHOP_PAGE']['HAND'] && !D['handSkinBa' + 'sic'][_0x3b2776['itemId']])
                            continue;
                    }
                    _0x436a04['array']['push'](_0x1dabba);
                }
            this['selectGood' + 'Id'] = _0x3b621e || this['curUseGood' + 'Id'];
        }
        ['refreshSho' + 'pGoods']() {
            this['list_good_' + 'cur']['array'] = this['goodsBuyTy' + 'peDatas'][this['goodsTagIn' + 'dex']]['array'];
        }
        ['listenEven' + 'ts']() {
        }
        ['monitorBtn' + 's']() {
            _0x1faf3f['onBu_GameK' + 'ey_ttonSca' + 'leEvent'](this['btn_hand'], this, 'onClickHan' + 'dBtn'), _0x1faf3f['onBu_GameK' + 'ey_ttonSca' + 'leEvent'](this['btn_close'], this, 'onClickClo' + 'seBtn'), _0x1faf3f['onBu_GameK' + 'ey_ttonSca' + 'leEvent'](this['btn_juicer'], this, 'onClickJui' + 'cerBtn');
        }
        ['changePage' + 'Name']() {
            this['curPage'] == _0x5ed125['SHOP_PAGE']['JUICER'] ? this['label_curP' + 'ageName']['text'] = 'Juicer' : this['curPage'] == _0x5ed125['SHOP_PAGE']['HAND'] && (this['label_curP' + 'ageName']['text'] = 'Arm');
        }
        ['onChangePa' + 'ge']() {
            this['clearPageD' + 'ata'](), this['refreshSho' + 'pData'](), this['refreshSho' + 'pGoods'](), this['changePage' + 'Name']();
        }
        ['changePage' + 'BtnShow']() {
            let _0x4d47a7 = this['btn_hand']['height'], _0x50deac = this['btn_hand']['skin'];
            this['btn_hand']['height'] = this['btn_juicer']['height'], this['btn_hand']['skin'] = this['btn_juicer']['skin'], this['btn_juicer']['height'] = _0x4d47a7, this['btn_juicer']['skin'] = _0x50deac;
        }
        ['onClickJui' + 'cerBtn']() {
            _0x5ed125['SHOP_PAGE']['JUICER'] != this['curPage'] && (this['curPage'] = _0x5ed125['SHOP_PAGE']['JUICER'], this['changePage' + 'BtnShow'](), this['onChangePa' + 'ge']());
        }
        ['onClickHan' + 'dBtn']() {
            _0x5ed125['SHOP_PAGE']['HAND'] != this['curPage'] && (this['curPage'] = _0x5ed125['SHOP_PAGE']['HAND'], this['changePage' + 'BtnShow'](), this['onChangePa' + 'ge']());
        }
        ['onClickClo' + 'seBtn']() {
            this['destroy']();
        }
        ['onGetShopI' + 'tem'](_0x42c89a) {
            this['refreshSel' + 'ectState']();
        }
        ['clearTagDa' + 'ta']() {
            this['goodsTagIn' + 'dex'] = null != this['nextGoodsD' + 'ata'] ? this['nextGoodsT' + 'agIndex'] : this['goodsTagIn' + 'dex'], this['nextGoodsT' + 'agIndex'] = void 0x0, this['isPlayFixA' + 'nim'] = !0x1, this['mouseOffse' + 'tX'] = this['lastMouseO' + 'ffsetX'] = void 0x0;
        }
        ['clearPageD' + 'ata']() {
            this['isPlayFixA' + 'nim'] && this['onGoodsArr' + 'iveTarget'](), this['clearTagDa' + 'ta'](), this['goodsTagIn' + 'dex'] = 0x0, this['selectGood' + 'Id'] = void 0x0;
        }
        ['refreshSel' + 'ectState']() {
            let _0x53185a, _0x30aacd, _0x432b3a = this['list_good_' + 'cur']['cells'], _0x1e1352 = _0x432b3a['length'];
            for (_0x53185a = 0x0; _0x53185a < _0x1e1352; _0x53185a++)
                (_0x30aacd = _0x432b3a[_0x53185a])['dataSource'] && (_0x30aacd['dataSource']['id'] == this['curUseGood' + 'Id'] ? this['renderGood' + 'Item'](_0x30aacd, this['list_good_' + 'cur']['startIndex'] + _0x53185a) : this['lastUseGoo' + 'dId'] == _0x30aacd['dataSource']['id'] && this['renderGood' + 'Item'](_0x30aacd, this['list_good_' + 'cur']['startIndex'] + _0x53185a));
        }
        ['renderGood' + 'Item'](_0x1431ea, _0x1b7d9c) {
            _0x1431ea['inited'] || (_0x1431ea['icon_good'] = _0x1faf3f['getC_GameK' + 'ey_hildDee' + 'p'](_0x1431ea, 'icon_good'), _0x1431ea['mark_unSel' + 'ect'] = _0x1faf3f['getC_GameK' + 'ey_hildDee' + 'p'](_0x1431ea, 'mark_unSel' + 'ect'), _0x1431ea['mark_selec' + 't'] = _0x1faf3f['getC_GameK' + 'ey_hildDee' + 'p'](_0x1431ea, 'mark_selec' + 't'), _0x1431ea['bg_sale'] = _0x1faf3f['getC_GameK' + 'ey_hildDee' + 'p'](_0x1431ea, 'bg_sale'), _0x1431ea['inited'] = !0x0);
            let _0x256b0e = D['shop'][_0x1431ea['dataSource']['id']], _0x4ef081 = _0x256b0e['type'], _0x5e3873 = (_0x256b0e['buyValue2'], void 0x0), _0x95a93c = this['isHaveGood'](_0x1431ea['dataSource']['id']), _0x5abb55 = !0x1;
            if (_0x4ef081 == _0x5ed125['GOODS']['JUICER']) {
                let _0x1d6985 = D['juicerBasi' + 'c'][_0x256b0e['itemId']];
                _0x1d6985 && (_0x5e3873 = _0x1d6985['juicerImgI' + 'd']), _0x5abb55 = _0x256b0e['itemId'] == _0xe6399d['getInstanc' + 'e$']()['userData$']['curJuicerI' + 'd'];
            } else {
                if (_0x4ef081 == _0x5ed125['GOODS']['HAND']) {
                    let _0x461b7c = D['handSkinBa' + 'sic'][_0x256b0e['itemId']];
                    _0x461b7c && (_0x5e3873 = _0x461b7c['handSkinIm' + 'gId']), _0x5abb55 = _0x256b0e['itemId'] == _0xe6399d['getInstanc' + 'e$']()['userData$']['curHandSki' + 'nId'];
                }
            }
            _0x1431ea['icon_good']['skin'] = _0x5e3873 && _0x95a93c ? _0x1faf3f['getSkinPat' + 'hById'](_0x5e3873) : void 0x0, _0x1431ea['mark_selec' + 't']['visible'] = _0x5abb55, _0x1431ea['mark_unSel' + 'ect']['visible'] = !_0x5abb55, _0x1431ea['bg_sale']['visible'] = !_0x95a93c;
        }
        ['isHaveGood'](_0x2cb1bb) {
            if (!_0x2cb1bb)
                return !0x0;
            let _0x1b707f = D['shop'][_0x2cb1bb], _0x364f43 = _0x1b707f['type'], _0x176c8c = !0x1;
            return _0x364f43 == _0x5ed125['GOODS']['JUICER'] ? _0x176c8c = _0xe6399d['getInstanc' + 'e$']()['userData$']['isHaveJuic' + 'erId'](_0x1b707f['itemId']) : _0x364f43 == _0x5ed125['GOODS']['HAND'] && (_0x176c8c = _0xe6399d['getInstanc' + 'e$']()['userData$']['isHaveHand' + 'Id'](_0x1b707f['itemId'])), _0x176c8c;
        }
        ['selectGood' + 'Item'](_0x183961, _0x5e4e50) {
            if (_0x183961['type'] != Laya['Event']['CLICK'])
                return;
            let _0x1905a6 = this['list_good_' + 'cur']['getCell'](_0x5e4e50);
            if (this['selectGood' + 'Id'] != _0x1905a6['dataSource']['id'] && (this['selectGood' + 'Id'] = _0x1905a6['dataSource']['id'], this['isHaveGood'](this['selectGood' + 'Id']))) {
                let _0x19c5bd = D['shop'][this['selectGood' + 'Id']];
                _0x19c5bd['type'] == _0x5ed125['GOODS']['JUICER'] ? (_0xe6399d['getInstanc' + 'e$']()['userData$']['setCurJuic' + 'erId'](_0x19c5bd['itemId']), _0x3830d2['getInstanc' + 'e$']()['disp_GameK' + 'ey_atchEve' + 'nt'](_0x5b5578['CUR_JUICER' + '_CHANGE'])) : _0x19c5bd['type'] == _0x5ed125['GOODS']['HAND'] && (_0xe6399d['getInstanc' + 'e$']()['userData$']['setCurHand' + 'Id'](_0x19c5bd['itemId']), _0x3830d2['getInstanc' + 'e$']()['disp_GameK' + 'ey_atchEve' + 'nt'](_0x5b5578['CUR_HAND_C' + 'HANGE'])), this['refreshSho' + 'pData'](), this['refreshSel' + 'ectState']();
            }
        }
        ['onUpdate']() {
        }
        ['onDestroy']() {
            _0x3a41f3['getInstanc' + 'e$']()['open_GameK' + 'ey_UI'](Laya['CyzClassMa' + 'p']['MainUI']), super['onDestroy']();
        }
    }
    _0x3bed18['url'] = 'Prefab/Bat' + 'tle/SkinsW' + 'indow.json', _0x3bed18['className'] = 'ShopSkinsU' + 'I$', _0x3bed18['uiConfig'] = {
        'layer': _0x5a29eb['LAYER_NORM' + 'AL'],
        'only': !0x0,
        'needUISurrenal': !0x0,
        'notClose': !0x1
    };
    class _0x4f9d04 extends _0x1fc701 {
        constructor() {
            super(), this['winName'] = '主界面';
        }
        ['onUI_GameK' + 'ey_Load']() {
            super['onUI_GameK' + 'ey_Load'](), this['coinNum$'] = _0x1faf3f['getC_GameK' + 'ey_hildDee' + 'p'](this['owner'], 'label_coin' + 'Num'), this['btn_start$'] = _0x1faf3f['getC_GameK' + 'ey_hildDee' + 'p'](this['owner'], 'btn_start'), this['btn_items$'] = _0x1faf3f['getC_GameK' + 'ey_hildDee' + 'p'](this['owner'], 'btn_items'), this['btn_custom' + '$'] = _0x1faf3f['getC_GameK' + 'ey_hildDee' + 'p'](this['owner'], 'btn_custom'), this['img_need$'] = _0x1faf3f['getC_GameK' + 'ey_hildDee' + 'p'](this['owner'], 'img_need'), this['box_drink$'] = _0x1faf3f['getC_GameK' + 'ey_hildDee' + 'p'](this['owner'], 'box_drink'), this['drinkBg$'] = _0x1faf3f['getC_GameK' + 'ey_hildDee' + 'p'](this['box_drink$'], 'img_bg'), this['decorate$'] = _0x1faf3f['getC_GameK' + 'ey_hildDee' + 'p'](this['box_drink$'], 'img_decora' + 'te'), this['glass$'] = _0x1faf3f['getC_GameK' + 'ey_hildDee' + 'p'](this['box_drink$'], 'img_glass'), this['glassBg$'] = _0x1faf3f['getC_GameK' + 'ey_hildDee' + 'p'](this['box_drink$'], 'img_glass_' + 'bg'), this['joiceUp$'] = _0x1faf3f['getC_GameK' + 'ey_hildDee' + 'p'](this['box_drink$'], 'img_up'), this['joiceCente' + 'r$'] = _0x1faf3f['getC_GameK' + 'ey_hildDee' + 'p'](this['box_drink$'], 'img_center'), this['joiceBotto' + 'm$'] = _0x1faf3f['getC_GameK' + 'ey_hildDee' + 'p'](this['box_drink$'], 'img_bottom'), this['monitorEve' + 'nts$'](), this['moni_GameK' + 'ey_torBtns'](), this['initUI$']();
        }
        ['init_GameK' + 'ey_Data']() {
            this['curMission' + 'Id$'] = _0xe6399d['getInstanc' + 'e$']()['userData$']['mission$'], this['curMission' + 'Progress$'] = _0xe6399d['getInstanc' + 'e$']()['userData$']['missionPro' + 'gress$'], this['drinkDataM' + 'g$'] = _0xe6399d['getInstanc' + 'e$']()['drinkData$'], this['curMission' + 'Data$'] = this['drinkDataM' + 'g$']['getMission' + 'DataByMiss' + 'ionId$'](this['curMission' + 'Id$']), this['curDrinkDa' + 'ta$'] = this['drinkDataM' + 'g$']['getDrinkDa' + 'taByDrinkI' + 'd$'](this['curMission' + 'Data$']['drinkArr'][this['curMission' + 'Progress$'] - 0x1]);
        }
        ['moni_GameK' + 'ey_torBtns']() {
            _0x1faf3f['onBu_GameK' + 'ey_ttonSca' + 'leEvent'](this['btn_start$'], this, 'onClickSta' + 'rt$'), _0x1faf3f['onBu_GameK' + 'ey_ttonSca' + 'leEvent'](this['btn_items$'], this, 'onClickIte' + 'm$'), _0x1faf3f['onBu_GameK' + 'ey_ttonSca' + 'leEvent'](this['btn_custom' + '$'], this, 'onClickCus' + 'tom$');
        }
        ['initUI$']() {
            let _0x277f55 = _0xe6399d['getInstanc' + 'e$']()['userData$']['coin$'];
            this['coinNum$']['text'] = _0x1faf3f['coinNumSho' + 'w$'](_0x277f55), this['makeRoleNe' + 'edDrink$'](), Laya['timer']['once'](0xfa0, this, this['showNeedAn' + 'im']);
        }
        ['resetCoinN' + 'um$']() {
            let _0x162cf3 = _0xe6399d['getInstanc' + 'e$']()['userData$']['coin$'];
            this['coinNum$']['text'] = _0x1faf3f['coinNumSho' + 'w$'](_0x162cf3);
        }
        ['makeRoleNe' + 'edDrink$']() {
            this['drinkBg$']['skin'] = _0x1faf3f['getSkinPat' + 'hById'](this['curDrinkDa' + 'ta$']['effectImgI' + 'd']), this['glass$']['skin'] = _0x1faf3f['getSkinPat' + 'hById'](D['glassBasic'][this['curDrinkDa' + 'ta$']['glassId']]['glassImgId']), this['glassBg$']['skin'] = _0x1faf3f['getSkinPat' + 'hById'](D['glassBasic'][this['curDrinkDa' + 'ta$']['glassId']]['glassImgId'] + 0x4), this['decorate$']['skin'] = _0x1faf3f['getSkinPat' + 'hById'](D['decorateBa' + 'sic'][this['curDrinkDa' + 'ta$']['decorateId']]['decorateIm' + 'gId']), this['joiceUp$']['skin'] = _0x1faf3f['getSkinPat' + 'hById'](this['curDrinkDa' + 'ta$']['juiceImgId' + 'Arr'][0x0]), this['joiceCente' + 'r$']['skin'] = _0x1faf3f['getSkinPat' + 'hById'](this['curDrinkDa' + 'ta$']['juiceImgId' + 'Arr'][0x1]), this['joiceBotto' + 'm$']['skin'] = _0x1faf3f['getSkinPat' + 'hById'](this['curDrinkDa' + 'ta$']['juiceImgId' + 'Arr'][0x2]);
            let _0x3749fa = this['drinkDataM' + 'g$']['getFruitDa' + 'taByFruitI' + 'd$'](this['curDrinkDa' + 'ta$']['fruitIdArr'][0x2])['fluidColor'];
            this['juiceChang' + 'eColor$'](_0x3749fa, this['joiceUp$']);
            let _0x27d323 = this['drinkDataM' + 'g$']['getFruitDa' + 'taByFruitI' + 'd$'](this['curDrinkDa' + 'ta$']['fruitIdArr'][0x1])['fluidColor'];
            this['juiceChang' + 'eColor$'](_0x27d323, this['joiceCente' + 'r$']);
            let _0x7cda6d = this['drinkDataM' + 'g$']['getFruitDa' + 'taByFruitI' + 'd$'](this['curDrinkDa' + 'ta$']['fruitIdArr'][0x0])['fluidColor'];
            this['juiceChang' + 'eColor$'](_0x7cda6d, this['joiceBotto' + 'm$']);
            let _0x9c57c5 = this['curDrinkDa' + 'ta$']['fruitIdArr']['length'];
            0x2 == _0x9c57c5 ? this['juiceChang' + 'eColor$'](_0x27d323, this['joiceUp$']) : 0x1 == _0x9c57c5 && (this['juiceChang' + 'eColor$'](_0x7cda6d, this['joiceUp$']), this['juiceChang' + 'eColor$'](_0x7cda6d, this['joiceCente' + 'r$'])), 0x3 == this['curDrinkDa' + 'ta$']['glassId'] && (this['joiceUp$']['centerX'] -= 0xd, this['joiceUp$']['centerY'] += 0xd, this['joiceCente' + 'r$']['centerX'] -= 0xd, this['joiceCente' + 'r$']['centerY'] += 0xd, this['joiceBotto' + 'm$']['centerX'] -= 0xd, this['joiceBotto' + 'm$']['centerY'] += 0xd);
        }
        ['juiceChang' + 'eColor$'](_0x563754, _0x1bcd67) {
            _0x1faf3f['changeImgC' + 'olor$'](_0x563754, _0x1bcd67);
        }
        ['showNeedAn' + 'im']() {
            this['owner']['need']['play'](0x0, !0x1);
        }
        ['onClickSta' + 'rt$']() {
            platform['getInstanc' + 'e']()['showInters' + 'titial'](() => {
                curScene['isLoadedSc' + 'ene$'] && (this['destroy'](), _0x3830d2['getInstanc' + 'e$']()['disp_GameK' + 'ey_atchEve' + 'nt'](_0x5b5578['ON_START_G' + 'AME']), _0x3a41f3['getInstanc' + 'e$']()['open_GameK' + 'ey_UI'](_0x157d64));
            });
        }
        ['onClickBea' + 'ch$']() {
            _0x3a41f3['getInstanc' + 'e$']()['open_GameK' + 'ey_UI'](_0x1bf616);
        }
        ['onClickIte' + 'm$']() {
            _0x3a41f3['getInstanc' + 'e$']()['open_GameK' + 'ey_UI'](_0x5d78d3);
        }
        ['onClickCus' + 'tom$']() {
            _0x3a41f3['getInstanc' + 'e$']()['open_GameK' + 'ey_UI'](_0x3bed18);
        }
        ['monitorEve' + 'nts$']() {
            this['addE_GameK' + 'ey_ventLis' + 'tener'](_0x5b5578['GETED_COIN'], this['resetCoinN' + 'um$']);
        }
    }
    _0x4f9d04['url'] = 'Prefab/Mai' + 'n/MainWind' + 'ow.json', _0x4f9d04['className'] = 'MainUI', _0x4f9d04['uiConfig'] = {
        'layer': _0x5a29eb['LAYER_NORM' + 'AL'],
        'only': !0x0,
        'needUISurrenal': !0x0,
        'notClose': !0x1
    };
    class _0x4e88fc extends _0x5a8d50 {
        constructor() {
            super(), this['winName'] = '奖励界面';
        }
        ['onClickCon' + 'tinue$']() {
            this['destroy'](), _0x3830d2['getInstanc' + 'e$']()['disp_GameK' + 'ey_atchEve' + 'nt'](_0x5b5578['REST_FIGHT']), _0x3a41f3['getInstanc' + 'e$']()['open_GameK' + 'ey_UI'](Laya['CyzClassMa' + 'p']['MainUIOppo']);
        }
    }
    _0x4e88fc['url'] = 'Prefab/Bat' + 'tle/Battle' + 'AwardWindo' + 'wOppo.json', _0x4e88fc['className'] = 'BattleAwar' + 'dUIOppo$', _0x4e88fc['uiConfig'] = {
        'layer': _0x5a29eb['LAYER_NORM' + 'AL'],
        'only': !0x0,
        'needUISurrenal': !0x0,
        'notClose': !0x1
    };
    class _0x58ee5a extends _0x464b32 {
        constructor() {
            super(), this['winName'] = '结算界面';
        }
        ['onClickCon' + 'tinue$']() {
            _0x3830d2['getInstanc' + 'e$']()['disp_GameK' + 'ey_atchEve' + 'nt'](_0x5b5578['ASK_PLAY_W' + 'ALK_OUT']), _0x3a41f3['getInstanc' + 'e$']()['open_GameK' + 'ey_UI'](_0x4e88fc), this['destroy']();
        }
    }
    _0x58ee5a['url'] = 'Prefab/Bat' + 'tle/Battle' + 'ResultWind' + 'owOppo.jso' + 'n', _0x58ee5a['className'] = 'BattleResu' + 'ltUIOppo$', _0x58ee5a['uiConfig'] = {
        'layer': _0x5a29eb['LAYER_NORM' + 'AL'],
        'only': !0x0,
        'needUISurrenal': !0x0,
        'notClose': !0x1
    };
    class _0x25ade3 extends _0x157d64 {
        constructor() {
            super(), this['winName'] = '战斗信息界面';
        }
        ['openResult' + 'Window$']() {
            _0x3a41f3['getInstanc' + 'e$']()['open_GameK' + 'ey_UI'](_0x58ee5a, void 0x0, [
                this['fruitIdArr' + '$'],
                this['curDrinkDa' + 'ta$']['decorateId']
            ]);
        }
    }
    _0x25ade3['url'] = 'Prefab/Bat' + 'tle/Battle' + 'InfoWindow' + 'Oppo.json', _0x25ade3['className'] = 'BattleInfo' + 'UIOppo$', _0x25ade3['uiconfig'] = {
        'layer': _0x5a29eb['LAYER_NORM' + 'AL'],
        'only': !0x0,
        'needUISurrenal': !0x0,
        'notClose': !0x1
    };
    class _0x30885c extends Laya['Material'] {
        constructor() {
            super(), this['setShaderN' + 'ame']('FluidShade' + 'r'), this['coolor$'] = new Laya['Vector4'](0x1, 0x0, 0x1, 0x1), this['loopT$'] = 0x7d0, Laya['timer']['loop'](0x1, this, function () {
                this['waterTime$'] = Laya['timer']['currTimer'] % this['loopT$'] * 0x2 * Math['PI'] / this['loopT$'];
            });
        }
        set ['coolor$'](_0x3d526c) {
            this['_shaderVal' + 'ues']['setVector'](_0x30885c['COLOR'], _0x3d526c);
        }
        set ['waterTime$'](_0x17bbd8) {
            this['_shaderVal' + 'ues']['setNumber'](_0x30885c['T'], _0x17bbd8);
        }
        set ['fill$'](_0x331423) {
            this['_shaderVal' + 'ues']['setNumber'](_0x30885c['FILL'], _0x331423);
        }
        ['destroy']() {
            Laya['timer']['clearAll'](this), super['destroy']();
        }
        static ['initShader' + '$']() {
            var _0x21b021 = {
                    'a_Position': Laya['VertexMesh']['MESH_POSIT' + 'ION0'],
                    'a_Normal': Laya['VertexMesh']['MESH_NORMA' + 'L0']
                }, _0x3bc9a5 = {
                    'u_MvpMatrix': Laya['Shader3D']['PERIOD_SPR' + 'ITE'],
                    'u_WorldMat': Laya['Shader3D']['PERIOD_SPR' + 'ITE'],
                    'u_Color': Laya['Shader3D']['PERIOD_MAT' + 'ERIAL'],
                    'u_Fill': Laya['Shader3D']['PERIOD_MAT' + 'ERIAL'],
                    'u_T': Laya['Shader3D']['PERIOD_MAT' + 'ERIAL'],
                    'u_SunLight.direction': Laya['Shader3D']['PERIOD_SCE' + 'NE']
                }, _0x259c96 = Laya['Shader3D']['add']('FluidShade' + 'r'), _0x42766c = new Laya['SubShader'](_0x21b021, _0x3bc9a5);
            _0x259c96['addSubShad' + 'er'](_0x42766c), _0x42766c['addShaderP' + 'ass']('\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20#includ' + 'e\x20\x22Lightin' + 'g.glsl\x22;\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20attribute' + '\x20vec4\x20a_Po' + 'sition;\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + 'attribute\x20' + 'vec3\x20a_Nor' + 'mal;\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20unif' + 'orm\x20mat4\x20u' + '_MvpMatrix' + ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20unifor' + 'm\x20float\x20u_' + 'T;\x20\x20\x20\x20\x20\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + 'uniform\x20fl' + 'oat\x20u_Fill' + ';\x20\x20\x20\x20\x20\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20u' + 'niform\x20mat' + '4\x20u_WorldM' + 'at;\x0a\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20var' + 'ying\x20vec3\x20' + 'v_Normal;\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20varying\x20' + 'float\x20v_si' + 'na;\x0a\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20voi' + 'd\x20main()\x20{' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20flo' + 'at\x20rad\x20=\x20u' + '_T\x20+\x20a_Pos' + 'ition.x\x20*\x20' + '2.0\x20+\x20a_Po' + 'sition.z\x20*' + '\x202.0;\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20float\x20si' + 'na\x20=\x20sin(r' + 'ad);\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20float\x20u_T' + 'hickFactor' + '\x20=\x20sina\x20*\x20' + '0.01\x20*\x20u_F' + 'ill;\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20vec4\x20m_Po' + 's\x20=\x20vec4(a' + '_Position.' + 'x,\x20a_Posit' + 'ion.y\x20+\x20u_' + 'ThickFacto' + 'r,\x20a_Posit' + 'ion.z,\x20a_P' + 'osition.w)' + ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20gl' + '_Position\x20' + '=\x20remapGLP' + 'ositionZ(u' + '_MvpMatrix' + '\x20*\x20m_Pos);' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20v_N' + 'ormal\x20=\x20ma' + 't3(u_World' + 'Mat)*a_Nor' + 'mal;\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20v_sina\x20=(' + 'a_Normal.x' + '\x20!=\x200.0\x20||' + '\x20a_Normal.' + 'z\x20!=\x200.0\x20?' + '\x201.0\x20:\x20(si' + 'na\x20+\x201.0)\x20' + '*\x200.5\x20*\x20(1' + '.0\x20-\x200.9)\x20' + '+\x200.9)\x20*\x201' + '.2;\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20}\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20#ifdef\x20' + 'FSHIGHPREC' + 'ISION\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20pr' + 'ecision\x20hi' + 'ghp\x20float;' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20#else\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20precision' + '\x20mediump\x20f' + 'loat;\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20#e' + 'ndif\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20#in' + 'clude\x20\x22Lig' + 'hting.glsl' + '\x22;\x0a\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20unif' + 'orm\x20vec4\x20u' + '_Color;\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + 'uniform\x20Di' + 'rectionLig' + 'ht\x20u_SunLi' + 'ght;\x0a\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20va' + 'rying\x20vec3' + '\x20v_Normal;' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20varying' + '\x20float\x20v_s' + 'ina;\x0a\x0a\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20v' + 'oid\x20main()' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20{\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20gl_FragCo' + 'lor\x20=\x20vec4' + '(v_sina\x20*\x20' + 'u_Color.rg' + 'b,\x20u_Color' + '.a);\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20}\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20');
        }
    }
    _0x30885c['COLOR'] = Laya['Shader3D']['propertyNa' + 'meToID']('u_Color'), _0x30885c['T'] = Laya['Shader3D']['propertyNa' + 'meToID']('u_T'), _0x30885c['FILL'] = Laya['Shader3D']['propertyNa' + 'meToID']('u_Fill');
    class _0xc071bb extends Laya['Material'] {
        constructor(_0x3b32b3, _0x204b5c) {
            super(), this['setShaderN' + 'ame']('FluidBotto' + 'mShader'), this['tint1'] = new Laya['Vector4'](0x1, 0x1, 0x1, 0x1), this['tint2'] = new Laya['Vector4'](0x1, 0x1, 0x1, 0x1), this['tint3'] = new Laya['Vector4'](0x1, 0x1, 0x1, 0x1), this['fill1'] = 0x0, this['fill2'] = 0x0, this['fill3'] = 0x0, this['maxY'] = _0x204b5c, this['minY'] = _0x3b32b3, this['renderMode'] = _0xc071bb['RENDERMODE' + '_ALPHABLEN' + 'DED'], this['loopT$'] = 0x7d0, Laya['timer']['loop'](0x1, this, function () {
                this['waterTime$'] = Laya['timer']['currTimer'] % this['loopT$'] * 0x2 * Math['PI'] / this['loopT$'];
            });
        }
        static ['__initDefi' + 'ne__']() {
        }
        set ['waterTime$'](_0x35766d) {
            this['_shaderVal' + 'ues']['setNumber'](_0xc071bb['T'], _0x35766d);
        }
        set ['tint1'](_0xe1d78) {
            this['_shaderVal' + 'ues']['setVector'](_0xc071bb['TINT1'], _0xe1d78);
        }
        set ['tint2'](_0x10a096) {
            this['_shaderVal' + 'ues']['setVector'](_0xc071bb['TINT2'], _0x10a096);
        }
        set ['tint3'](_0x434335) {
            this['_shaderVal' + 'ues']['setVector'](_0xc071bb['TINT3'], _0x434335);
        }
        set ['fill1'](_0x1d8a41) {
            this['_shaderVal' + 'ues']['setNumber'](_0xc071bb['FILL1'], _0x1d8a41);
        }
        set ['fill2'](_0x12cf06) {
            this['_shaderVal' + 'ues']['setNumber'](_0xc071bb['FILL2'], _0x12cf06);
        }
        set ['fill3'](_0x2c31cb) {
            this['_shaderVal' + 'ues']['setNumber'](_0xc071bb['FILL3'], _0x2c31cb);
        }
        set ['minY'](_0x291aa7) {
            this['_shaderVal' + 'ues']['setNumber'](_0xc071bb['MINY'], _0x291aa7);
        }
        set ['maxY'](_0x772f78) {
            this['_shaderVal' + 'ues']['setNumber'](_0xc071bb['MAXY'], _0x772f78);
        }
        get ['depthWrite']() {
            return this['_shaderVal' + 'ues']['getBool'](_0xc071bb['DEPTH_WRIT' + 'E']);
        }
        set ['depthWrite'](_0x16f45b) {
            this['_shaderVal' + 'ues']['setBool'](_0xc071bb['DEPTH_WRIT' + 'E'], _0x16f45b);
        }
        get ['cull']() {
            return this['_shaderVal' + 'ues']['getInt'](_0xc071bb['CULL']);
        }
        set ['cull'](_0x5913f5) {
            this['_shaderVal' + 'ues']['setInt'](_0xc071bb['CULL'], _0x5913f5);
        }
        get ['blend']() {
            return this['_shaderVal' + 'ues']['getInt'](_0xc071bb['BLEND']);
        }
        set ['blend'](_0x69e83d) {
            this['_shaderVal' + 'ues']['setInt'](_0xc071bb['BLEND'], _0x69e83d);
        }
        get ['blendSrc']() {
            return this['_shaderVal' + 'ues']['getInt'](_0xc071bb['BLEND_SRC']);
        }
        set ['blendSrc'](_0x244014) {
            this['_shaderVal' + 'ues']['setInt'](_0xc071bb['BLEND_SRC'], _0x244014);
        }
        get ['blendDst']() {
            return this['_shaderVal' + 'ues']['getInt'](_0xc071bb['BLEND_DST']);
        }
        set ['blendDst'](_0x45bf96) {
            this['_shaderVal' + 'ues']['setInt'](_0xc071bb['BLEND_DST'], _0x45bf96);
        }
        get ['depthTest']() {
            return this['_shaderVal' + 'ues']['getInt'](_0xc071bb['DEPTH_TEST']);
        }
        set ['depthTest'](_0xa6204b) {
            this['_shaderVal' + 'ues']['setInt'](_0xc071bb['DEPTH_TEST'], _0xa6204b);
        }
        set ['renderMode'](_0x4115f2) {
            switch (_0x4115f2) {
            case _0xc071bb['RENDERMODE' + '_ADDTIVE']:
                this['renderQueu' + 'e'] = Laya['Material']['RENDERQUEU' + 'E_TRANSPAR' + 'ENT'] + 0x1, this['alphaTest'] = !0x1, this['depthWrite'] = !0x1, this['cull'] = Laya['RenderStat' + 'e']['CULL_NONE'], this['blend'] = Laya['RenderStat' + 'e']['BLEND_ENAB' + 'LE_ALL'], this['blendSrc'] = Laya['RenderStat' + 'e']['BLENDPARAM' + '_SRC_ALPHA'], this['blendDst'] = Laya['RenderStat' + 'e']['BLENDPARAM' + '_ONE'], this['depthTest'] = Laya['RenderStat' + 'e']['DEPTHTEST_' + 'LESS'];
                break;
            case _0xc071bb['RENDERMODE' + '_ALPHABLEN' + 'DED']:
                this['renderQueu' + 'e'] = Laya['Material']['RENDERQUEU' + 'E_TRANSPAR' + 'ENT'] + 0x1, this['alphaTest'] = !0x1, this['depthWrite'] = !0x0, this['cull'] = Laya['RenderStat' + 'e']['CULL_NONE'], this['blend'] = Laya['RenderStat' + 'e']['BLEND_ENAB' + 'LE_ALL'], this['blendSrc'] = Laya['RenderStat' + 'e']['BLENDPARAM' + '_SRC_ALPHA'], this['blendDst'] = Laya['RenderStat' + 'e']['BLENDPARAM' + '_ONE_MINUS' + '_SRC_ALPHA'], this['depthTest'] = Laya['RenderStat' + 'e']['DEPTHTEST_' + 'LESS'];
                break;
            default:
                throw new Error('MeshFluidB' + 'ottomMater' + 'ial$\x20:\x20ren' + 'derMode\x20va' + 'lue\x20error.');
            }
        }
        static ['initShader' + '$']() {
            _0xc071bb['__initDefi' + 'ne__']();
            var _0x54830f = {
                    'a_Position': Laya['VertexMesh']['MESH_POSIT' + 'ION0'],
                    'a_Normal': Laya['VertexMesh']['MESH_NORMA' + 'L0'],
                    'a_Texcoord0': Laya['VertexMesh']['MESH_TEXTU' + 'RECOORDINA' + 'TE0']
                }, _0x169e8d = {
                    'u_MvpMatrix': Laya['Shader3D']['PERIOD_SPR' + 'ITE'],
                    'u_WorldMat': Laya['Shader3D']['PERIOD_SPR' + 'ITE'],
                    'u_Tint1': Laya['Shader3D']['PERIOD_MAT' + 'ERIAL'],
                    'u_Tint2': Laya['Shader3D']['PERIOD_MAT' + 'ERIAL'],
                    'u_Tint3': Laya['Shader3D']['PERIOD_MAT' + 'ERIAL'],
                    'u_Fill1': Laya['Shader3D']['PERIOD_MAT' + 'ERIAL'],
                    'u_Fill2': Laya['Shader3D']['PERIOD_MAT' + 'ERIAL'],
                    'u_Fill3': Laya['Shader3D']['PERIOD_MAT' + 'ERIAL'],
                    'u_MaxY': Laya['Shader3D']['PERIOD_MAT' + 'ERIAL'],
                    'u_MinY': Laya['Shader3D']['PERIOD_MAT' + 'ERIAL'],
                    'u_SunLight.direction': Laya['Shader3D']['PERIOD_SCE' + 'NE'],
                    'u_T': Laya['Shader3D']['PERIOD_MAT' + 'ERIAL']
                }, _0x451718 = Laya['Shader3D']['add']('FluidBotto' + 'mShader'), _0xb89600 = new Laya['SubShader'](_0x54830f, _0x169e8d);
            _0x451718['addSubShad' + 'er'](_0xb89600);
            let _0x23b6ad = {
                's_Cull': Laya['Shader3D']['RENDER_STA' + 'TE_CULL'],
                's_Blend': Laya['Shader3D']['RENDER_STA' + 'TE_BLEND'],
                's_BlendSrc': Laya['Shader3D']['RENDER_STA' + 'TE_BLEND_S' + 'RC'],
                's_BlendDst': Laya['Shader3D']['RENDER_STA' + 'TE_BLEND_D' + 'ST'],
                's_DepthTest': Laya['Shader3D']['RENDER_STA' + 'TE_DEPTH_T' + 'EST'],
                's_DepthWrite': Laya['Shader3D']['RENDER_STA' + 'TE_DEPTH_W' + 'RITE']
            };
            _0xb89600['addShaderP' + 'ass']('\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20#includ' + 'e\x20\x22Lightin' + 'g.glsl\x22;\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20attribute' + '\x20vec4\x20a_Po' + 'sition;\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + 'attribute\x20' + 'vec3\x20a_Nor' + 'mal;\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20att' + 'ribute\x20vec' + '2\x20a_Texcoo' + 'rd0;\x0a\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20un' + 'iform\x20mat4' + '\x20u_MvpMatr' + 'ix;\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20unifo' + 'rm\x20mat4\x20u_' + 'WorldMat;\x0a' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20uniform' + '\x20float\x20u_M' + 'axY;\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20uni' + 'form\x20float' + '\x20u_MinY;\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20uniform\x20f' + 'loat\x20u_Fil' + 'l1;\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20unif' + 'orm\x20float\x20' + 'u_Fill2;\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20uniform\x20f' + 'loat\x20u_Fil' + 'l3;\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20unif' + 'orm\x20float\x20' + 'u_T;\x0a\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20va' + 'rying\x20vec2' + '\x20v_Texcoor' + 'd0;\x20\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20var' + 'ying\x20vec3\x20' + 'v_Position' + 'World;\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20v' + 'arying\x20vec' + '3\x20v_Normal' + ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20varyin' + 'g\x20float\x20v_' + 'WorldWater' + 'PosY1;\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20v' + 'arying\x20flo' + 'at\x20v_World' + 'WaterPosY2' + ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20varyin' + 'g\x20float\x20v_' + 'WorldWater' + 'PosY3;\x0a\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + 'void\x20main(' + ')\x20{\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + 'float\x20rad\x20' + '=\x20u_T\x20+\x20a_' + 'Position.x' + '\x20*\x202.0\x20+\x20a' + '_Position.' + 'z\x20*\x202.0;\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20float' + '\x20sina\x20=\x20si' + 'n(rad);\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20float\x20' + 'deltaY\x20=\x20u' + '_MaxY\x20-\x20u_' + 'MinY;\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20float\x20u_' + 'ThickFacto' + 'r\x20=\x20sina\x20*' + '\x200.01\x20*\x20(a' + '_Position.' + 'y\x20-\x20u_MinY' + ')\x20/\x20deltaY' + ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20ve' + 'c4\x20m_Pos\x20=' + ('\x20vec4(a_Po' + 'sition.x,\x20' + 'a_Position' + '.y\x20+\x20u_Thi' + 'ckFactor,\x20' + 'a_Position' + '.z,\x20a_Posi' + 'tion.w);\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20gl_Po' + 'sition\x20=\x20r' + 'emapGLPosi' + 'tionZ(u_Mv' + 'pMatrix\x20*\x20' + 'm_Pos);\x0a\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20v_Pos' + 'itionWorld' + '=(u_WorldM' + 'at*a_Posit' + 'ion).xyz;\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20floa' + 't\x20localWat' + 'erY1\x20=\x20u_M' + 'inY\x20+\x20u_Fi' + 'll1\x20*\x20delt' + 'aY;\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + 'float\x20loca' + 'lWaterY2\x20=' + '\x20localWate' + 'rY1\x20+\x20u_Fi' + 'll2\x20*\x20delt' + 'aY;\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + 'float\x20loca' + 'lWaterY3\x20=' + '\x20localWate' + 'rY2\x20+\x20u_Fi' + 'll3\x20*\x20delt' + 'aY;\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + 'v_WorldWat' + 'erPosY1\x20=\x20' + '(u_WorldMa' + 't\x20*\x20vec4(a' + '_Position.' + 'x,\x20localWa' + 'terY1,\x20a_P' + 'osition.z,' + '\x20a_Positio' + 'n.w)).y;\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20v_Wor' + 'ldWaterPos' + 'Y2\x20=\x20(u_Wo' + 'rldMat\x20*\x20v' + 'ec4(a_Posi' + 'tion.x,\x20lo' + 'calWaterY2' + ',\x20a_Positi' + 'on.z,\x20a_Po' + 'sition.w))' + '.y;\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + 'v_WorldWat' + 'erPosY3\x20=\x20' + '(u_WorldMa' + 't\x20*\x20vec4(a' + '_Position.' + 'x,\x20localWa' + 'terY3,\x20a_P' + 'osition.z,' + '\x20a_Positio' + 'n.w)).y;\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20v_Nor' + 'mal=mat3(u' + '_WorldMat)' + '*a_Normal;' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20}\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20'), '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20#ifdef\x20' + 'FSHIGHPREC' + 'ISION\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20pr' + 'ecision\x20hi' + 'ghp\x20float;' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20#else\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20precision' + '\x20mediump\x20f' + 'loat;\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20#e' + 'ndif\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20#in' + 'clude\x20\x22Lig' + 'hting.glsl' + '\x22;\x0a\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20vary' + 'ing\x20vec3\x20v' + '_PositionW' + 'orld;\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20va' + 'rying\x20vec3' + '\x20v_Normal;' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20varying' + '\x20float\x20v_W' + 'orldWaterP' + 'osY1;\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20va' + 'rying\x20floa' + 't\x20v_WorldW' + 'aterPosY2;' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20varying' + '\x20float\x20v_W' + 'orldWaterP' + 'osY3;\x0a\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20u' + 'niform\x20vec' + '4\x20u_Tint1;' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20uniform' + '\x20vec4\x20u_Ti' + 'nt2;\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20uni' + 'form\x20vec4\x20' + 'u_Tint3;\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20uniform\x20D' + 'irectionLi' + 'ght\x20u_SunL' + 'ight;\x0a\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20v' + 'oid\x20main()' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20{\x20\x20\x20\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20float\x20' + 'diffuse\x20=\x20' + 'max(dot(-u' + '_SunLight.' + 'direction,' + '\x20v_Normal)' + ',\x200.0)\x20*\x20(' + '\x201.0\x20-\x200.9' + '9)\x20+\x200.99;' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20vec' + '4\x20color;\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20if(v_' + 'PositionWo' + 'rld.y\x20<\x20v_' + 'WorldWater' + 'PosY1){\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20co' + 'lor\x20=\x20u_Ti' + 'nt1;\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20}else\x20if(' + 'v_Position' + 'World.y\x20<\x20' + 'v_WorldWat' + 'erPosY2){\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + 'color\x20=\x20u_' + 'Tint2;\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20}else\x20i' + 'f(v_Positi' + 'onWorld.y\x20' + '<\x20v_WorldW' + 'aterPosY3)' + '{\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + ('\x20\x20color\x20=\x20' + 'u_Tint3;\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20}else' + '{\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20color\x20=\x20' + 'vec4(0.0);' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20}\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20gl_Fr' + 'agColor\x20=\x20' + 'vec4(diffu' + 'se\x20*\x20color' + '.rgb\x20*\x20max' + '(1.0,\x201.2\x20' + '-\x20(v_World' + 'WaterPosY3' + '\x20-\x20v_Posit' + 'ionWorld.y' + ')\x20/\x201.0),\x20' + 'color.a);\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20}\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20'), _0x23b6ad);
        }
        ['destroy']() {
            Laya['timer']['clearAll'](this), super['destroy']();
        }
    }
    _0xc071bb['TINT1'] = Laya['Shader3D']['propertyNa' + 'meToID']('u_Tint1'), _0xc071bb['TINT2'] = Laya['Shader3D']['propertyNa' + 'meToID']('u_Tint2'), _0xc071bb['TINT3'] = Laya['Shader3D']['propertyNa' + 'meToID']('u_Tint3'), _0xc071bb['TEXTURE'] = Laya['Shader3D']['propertyNa' + 'meToID']('u_Texture'), _0xc071bb['FILL1'] = Laya['Shader3D']['propertyNa' + 'meToID']('u_Fill1'), _0xc071bb['FILL2'] = Laya['Shader3D']['propertyNa' + 'meToID']('u_Fill2'), _0xc071bb['FILL3'] = Laya['Shader3D']['propertyNa' + 'meToID']('u_Fill3'), _0xc071bb['MAXY'] = Laya['Shader3D']['propertyNa' + 'meToID']('u_MaxY'), _0xc071bb['MINY'] = Laya['Shader3D']['propertyNa' + 'meToID']('u_MinY'), _0xc071bb['T'] = Laya['Shader3D']['propertyNa' + 'meToID']('u_T'), _0xc071bb['CULL'] = Laya['Shader3D']['propertyNa' + 'meToID']('s_Cull'), _0xc071bb['BLEND'] = Laya['Shader3D']['propertyNa' + 'meToID']('s_Blend'), _0xc071bb['BLEND_SRC'] = Laya['Shader3D']['propertyNa' + 'meToID']('s_BlendSrc'), _0xc071bb['BLEND_DST'] = Laya['Shader3D']['propertyNa' + 'meToID']('s_BlendDst'), _0xc071bb['DEPTH_TEST'] = Laya['Shader3D']['propertyNa' + 'meToID']('s_DepthTes' + 't'), _0xc071bb['DEPTH_WRIT' + 'E'] = Laya['Shader3D']['propertyNa' + 'meToID']('s_DepthWri' + 'te'), _0xc071bb['RENDERMODE' + '_ADDTIVE'] = 0x0, _0xc071bb['RENDERMODE' + '_ALPHABLEN' + 'DED'] = 0x1;
    class _0xa6946a extends Laya['Material'] {
        constructor(_0x587e6c, _0x39b0ec, _0x530802, _0x1e1e9f, _0x1b10a6) {
            super(), this['setShaderN' + 'ame']('FruitShade' + 'r'), this['minY'] = _0x39b0ec, this['maxY'] = _0x530802, this['minPerfect' + 'Fill'] = _0x1e1e9f, this['maxPerfect' + 'Fill'] = _0x1b10a6, this['topColor'] = new Laya['Vector4'](0x1, 0x0, 0x1, 0x1), this['color'] = new Laya['Vector4'](0x1, 0x1, 0x1, 0x1), this['texture'] = _0x587e6c, this['fill'] = 0.5, this['renderMode'] = _0xa6946a['RENDERMODE' + '_ALPHABLEN' + 'DED'];
        }
        set ['fill'](_0x49689f) {
            this['_shaderVal' + 'ues']['setNumber'](_0xa6946a['FILL'], _0x49689f);
        }
        set ['texture'](_0x11431a) {
            this['_shaderVal' + 'ues']['setTexture'](_0xa6946a['TEXTURE'], _0x11431a);
        }
        set ['color'](_0x206792) {
            this['_shaderVal' + 'ues']['setVector'](_0xa6946a['COLOR'], _0x206792);
        }
        set ['topColor'](_0x86e055) {
            this['_shaderVal' + 'ues']['setVector'](_0xa6946a['TOPCOLOR'], _0x86e055);
        }
        set ['minPerfect' + 'Fill'](_0x31847a) {
            this['_shaderVal' + 'ues']['setNumber'](_0xa6946a['MINPERFECT' + 'FILL'], _0x31847a);
        }
        set ['maxPerfect' + 'Fill'](_0x49bc8d) {
            this['_shaderVal' + 'ues']['setNumber'](_0xa6946a['MAXPERFECT' + 'FILL'], _0x49bc8d);
        }
        set ['minY'](_0x4ceaf6) {
            this['_shaderVal' + 'ues']['setNumber'](_0xa6946a['MINY'], _0x4ceaf6);
        }
        set ['maxY'](_0x170a3f) {
            this['_shaderVal' + 'ues']['setNumber'](_0xa6946a['MAXY'], _0x170a3f);
        }
        get ['depthWrite']() {
            return this['_shaderVal' + 'ues']['getBool'](_0xa6946a['DEPTH_WRIT' + 'E']);
        }
        set ['depthWrite'](_0x551682) {
            this['_shaderVal' + 'ues']['setBool'](_0xa6946a['DEPTH_WRIT' + 'E'], _0x551682);
        }
        get ['cull']() {
            return this['_shaderVal' + 'ues']['getInt'](_0xa6946a['CULL']);
        }
        set ['cull'](_0x133621) {
            this['_shaderVal' + 'ues']['setInt'](_0xa6946a['CULL'], _0x133621);
        }
        get ['blend']() {
            return this['_shaderVal' + 'ues']['getInt'](_0xa6946a['BLEND']);
        }
        set ['blend'](_0x28cb6e) {
            this['_shaderVal' + 'ues']['setInt'](_0xa6946a['BLEND'], _0x28cb6e);
        }
        get ['blendSrc']() {
            return this['_shaderVal' + 'ues']['getInt'](_0xa6946a['BLEND_SRC']);
        }
        set ['blendSrc'](_0x30bb93) {
            this['_shaderVal' + 'ues']['setInt'](_0xa6946a['BLEND_SRC'], _0x30bb93);
        }
        get ['blendDst']() {
            return this['_shaderVal' + 'ues']['getInt'](_0xa6946a['BLEND_DST']);
        }
        set ['blendDst'](_0x36454c) {
            this['_shaderVal' + 'ues']['setInt'](_0xa6946a['BLEND_DST'], _0x36454c);
        }
        get ['depthTest']() {
            return this['_shaderVal' + 'ues']['getInt'](_0xa6946a['DEPTH_TEST']);
        }
        set ['depthTest'](_0x16113f) {
            this['_shaderVal' + 'ues']['setInt'](_0xa6946a['DEPTH_TEST'], _0x16113f);
        }
        get ['alphaTest']() {
            return this['_alphaTest'];
        }
        set ['alphaTest'](_0x5e1137) {
            this['_alphaTest'] = _0x5e1137, _0x5e1137 ? this['_shaderVal' + 'ues']['addDefine'](Laya['Material']['SHADERDEFI' + 'NE_ALPHATE' + 'ST']) : this['_shaderVal' + 'ues']['removeDefi' + 'ne'](Laya['Material']['SHADERDEFI' + 'NE_ALPHATE' + 'ST']);
        }
        set ['renderMode'](_0x2a8443) {
            switch (_0x2a8443) {
            case _0xa6946a['RENDERMODE' + '_ADDTIVE']:
                this['renderQueu' + 'e'] = Laya['Material']['RENDERQUEU' + 'E_TRANSPAR' + 'ENT'], this['alphaTest'] = !0x1, this['depthWrite'] = !0x1, this['cull'] = Laya['RenderStat' + 'e']['CULL_NONE'], this['blend'] = Laya['RenderStat' + 'e']['BLEND_ENAB' + 'LE_ALL'], this['blendSrc'] = Laya['RenderStat' + 'e']['BLENDPARAM' + '_SRC_ALPHA'], this['blendDst'] = Laya['RenderStat' + 'e']['BLENDPARAM' + '_ONE'], this['depthTest'] = Laya['RenderStat' + 'e']['DEPTHTEST_' + 'LESS'];
                break;
            case _0xa6946a['RENDERMODE' + '_ALPHABLEN' + 'DED']:
                this['renderQueu' + 'e'] = Laya['Material']['RENDERQUEU' + 'E_TRANSPAR' + 'ENT'], this['alphaTest'] = !0x1, this['depthWrite'] = !0x0, this['cull'] = Laya['RenderStat' + 'e']['CULL_NONE'], this['blend'] = Laya['RenderStat' + 'e']['BLEND_ENAB' + 'LE_ALL'], this['blendSrc'] = Laya['RenderStat' + 'e']['BLENDPARAM' + '_SRC_ALPHA'], this['blendDst'] = Laya['RenderStat' + 'e']['BLENDPARAM' + '_ONE_MINUS' + '_SRC_ALPHA'], this['depthTest'] = Laya['RenderStat' + 'e']['DEPTHTEST_' + 'LESS'];
                break;
            default:
                throw new Error('MeshFruitM' + 'aterial$\x20:' + '\x20renderMod' + 'e\x20value\x20er' + 'ror.');
            }
        }
        static ['initShader' + '$']() {
            let _0x2c441c = {
                    'a_Position': Laya['VertexMesh']['MESH_POSIT' + 'ION0'],
                    'a_Normal': Laya['VertexMesh']['MESH_NORMA' + 'L0'],
                    'a_Texcoord0': Laya['VertexMesh']['MESH_TEXTU' + 'RECOORDINA' + 'TE0']
                }, _0x35452f = {
                    'u_MvpMatrix': Laya['Shader3D']['PERIOD_SPR' + 'ITE'],
                    'u_WorldMat': Laya['Shader3D']['PERIOD_SPR' + 'ITE'],
                    'u_Texture': Laya['Shader3D']['PERIOD_MAT' + 'ERIAL'],
                    'u_FillAmount': Laya['Shader3D']['PERIOD_MAT' + 'ERIAL'],
                    'u_Color': Laya['Shader3D']['PERIOD_MAT' + 'ERIAL'],
                    'u_TopColor': Laya['Shader3D']['PERIOD_MAT' + 'ERIAL'],
                    'u_MinY': Laya['Shader3D']['PERIOD_MAT' + 'ERIAL'],
                    'u_MaxY': Laya['Shader3D']['PERIOD_MAT' + 'ERIAL'],
                    'u_MaxPerfectFill': Laya['Shader3D']['PERIOD_MAT' + 'ERIAL'],
                    'u_MinPerfectFill': Laya['Shader3D']['PERIOD_MAT' + 'ERIAL'],
                    'u_SunLight.direction': Laya['Shader3D']['PERIOD_SCE' + 'NE']
                }, _0x4a25d8 = {
                    's_Cull': Laya['Shader3D']['RENDER_STA' + 'TE_CULL'],
                    's_Blend': Laya['Shader3D']['RENDER_STA' + 'TE_BLEND'],
                    's_BlendSrc': Laya['Shader3D']['RENDER_STA' + 'TE_BLEND_S' + 'RC'],
                    's_BlendDst': Laya['Shader3D']['RENDER_STA' + 'TE_BLEND_D' + 'ST'],
                    's_DepthTest': Laya['Shader3D']['RENDER_STA' + 'TE_DEPTH_T' + 'EST'],
                    's_DepthWrite': Laya['Shader3D']['RENDER_STA' + 'TE_DEPTH_W' + 'RITE']
                };
            var _0x45412c = Laya['Shader3D']['add']('FruitShade' + 'r'), _0x3f4c85 = new Laya['SubShader'](_0x2c441c, _0x35452f);
            _0x45412c['addSubShad' + 'er'](_0x3f4c85), _0x3f4c85['addShaderP' + 'ass']('\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20#includ' + 'e\x20\x22Lightin' + 'g.glsl\x22;\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20attribute' + '\x20vec4\x20a_Po' + 'sition;\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + 'attribute\x20' + 'vec3\x20a_Nor' + 'mal;\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20att' + 'ribute\x20vec' + '2\x20a_Texcoo' + 'rd0;\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20unif' + 'orm\x20mat4\x20u' + '_MvpMatrix' + ';\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20uniform' + '\x20mat4\x20u_Wo' + 'rldMat;\x20\x20\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20uniform\x20' + 'float\x20u_Mi' + 'nY;\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20unif' + 'orm\x20float\x20' + 'u_MaxY;\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + 'uniform\x20fl' + 'oat\x20u_MaxP' + 'erfectFill' + ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20unifor' + 'm\x20float\x20u_' + 'MinPerfect' + 'Fill;\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20un' + 'iform\x20floa' + 't\x20u_FillAm' + 'ount;\x0a\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20v' + 'arying\x20vec' + '3\x20v_Normal' + ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20varyin' + 'g\x20vec2\x20v_T' + 'excoord0;\x20' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20varying' + '\x20float\x20v_r' + 'esult;\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20v' + 'arying\x20flo' + 'at\x20v_resul' + 't3;\x0a\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20voi' + 'd\x20main()\x20{' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20mat' + '3\x20worldMat' + '=mat3(u_Wo' + 'rldMat);\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20v_Nor' + 'mal=worldM' + 'at*a_Norma' + 'l;\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20v' + '_Texcoord0' + '\x20=\x20a_Texco' + 'ord0;\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20float\x20lo' + 'calTargetY' + '\x20=\x20(u_MinY' + '\x20-\x20u_MaxY)' + '\x20*\x20u_FillA' + 'mount\x20+\x20u_' + 'MaxY;\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20float\x20ta' + 'rgetY\x20=\x20(u' + '_WorldMat*' + '\x20vec4(a_Po' + 'sition.x,\x20' + 'localTarge' + 'tY,\x20a_Posi' + 'tion.zw)).' + 'y;\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20f' + 'loat\x20posit' + 'ionWorldY=' + '(u_WorldMa' + 't*a_Positi' + 'on).y;\x0a\x20\x20\x20' + ('\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + 'v_result\x20=' + '\x20(position' + 'WorldY\x20>=\x20' + 'targetY\x20-\x20' + '0.001\x20?\x201.' + '0\x20:\x200.0);\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20floa' + 't\x20v_result' + '2\x20=\x20(posit' + 'ionWorldY\x20' + '<\x20targetY\x20' + '?\x201.0\x20:\x200.' + '0);\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + 'vec4\x20m_Pos' + '\x20=\x20vec4(a_' + 'Position.x' + ',\x20a_Positi' + 'on.y,\x20a_Po' + 'sition.z,\x20' + 'a_Position' + '.w);\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20if(v_resu' + 'lt2\x20==\x201.0' + '){\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20m_Pos.y' + '\x20=\x20localTa' + 'rgetY;\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20m_P' + 'os.x\x20-=\x20a_' + 'Normal.x\x20*' + '\x200.01;\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20m_P' + 'os.z\x20-=\x20a_' + 'Normal.z\x20*' + '\x200.01;\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20}\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20float\x20loc' + 'alMinPerfe' + 'ctY\x20=\x20(u_M' + 'axY\x20-\x20u_Mi' + 'nY)\x20*\x20u_Mi' + 'nPerfectFi' + 'll\x20+\x20u_Min' + 'Y;\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20f' + 'loat\x20local' + 'MaxPerfect' + 'Y\x20=\x20(u_Max' + 'Y\x20-\x20u_MinY' + ')\x20*\x20u_MaxP' + 'erfectFill' + '\x20+\x20u_MinY;' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20flo' + 'at\x20minPerf' + 'ectY\x20=\x20(u_' + 'WorldMat*\x20' + 'vec4(a_Pos' + 'ition.x,\x20l' + 'ocalMinPer' + 'fectY,\x20a_P' + 'osition.zw' + ')).y;\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20float\x20ma' + 'xPerfectY\x20' + '=\x20(u_World' + 'Mat*\x20vec4(' + 'a_Position' + '.x,\x20localM' + 'axPerfectY' + ',\x20a_Positi' + 'on.zw)).y;' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20v_r' + 'esult3\x20=\x20(' + 'positionWo' + 'rldY\x20>=\x20mi' + 'nPerfectY\x20' + '&&\x20positio' + 'nWorldY\x20<=' + '\x20maxPerfec' + 'tY\x20?\x201.0\x20:' + '\x200.0);\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20gl_Posi' + 'tion\x20=\x20rem' + 'apGLPositi' + 'onZ(u_MvpM') + ('atrix\x20*\x20m_' + 'Pos);\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20}\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20'), '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20#ifdef\x20' + 'FSHIGHPREC' + 'ISION\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20pr' + 'ecision\x20hi' + 'ghp\x20float;' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20#else\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20precision' + '\x20mediump\x20f' + 'loat;\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20#e' + 'ndif\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20#in' + 'clude\x20\x22Lig' + 'hting.glsl' + '\x22;\x0a\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20vary' + 'ing\x20vec3\x20v' + '_Normal;\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20varying\x20v' + 'ec2\x20v_Texc' + 'oord0;\x20\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + 'varying\x20fl' + 'oat\x20v_resu' + 'lt;\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20vary' + 'ing\x20float\x20' + 'v_result3;' + '\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20unifor' + 'm\x20vec4\x20u_T' + 'opColor;\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20uniform\x20s' + 'ampler2D\x20u' + '_Texture;\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20uniform\x20' + 'DirectionL' + 'ight\x20u_Sun' + 'Light;\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20u' + 'niform\x20vec' + '4\x20u_Color;' + '\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20void\x20m' + 'ain()\x20{\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20if(v_r' + 'esult\x20==\x200' + '.0){\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20disca' + 'rd;\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '}\x20else\x20{\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20f' + 'loat\x20diffu' + 'se\x20=\x20max(d' + 'ot(-u_SunL' + 'ight.direc' + 'tion,\x20v_No' + 'rmal),\x200.0' + ')\x20*\x20(\x201.0\x20' + '-\x200.5)\x20+\x200' + '.5;\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20vec4\x20a' + 'lbedoTextu' + 'reColor\x20=\x20' + '(v_result3' + '\x20>\x200.0\x20?\x20v' + 'ec4(vec3(1' + '.0,1.0,0.0' + ')\x20*\x20diffus' + 'e,\x201.0)\x20:\x20' + 'texture2D(' + 'u_Texture,' + '\x20v_Texcoor' + 'd0)\x20*\x20vec4' + '(u_Color.r' + 'gb\x20*\x20diffu' + 'se,\x20u_Colo' + 'r.a));\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20gl_' + 'FragColor\x20' + '=\x20(gl_Fron' + 'tFacing\x20?\x20' + 'albedoText' + 'ureColor\x20:' + '\x20u_TopColo' + 'r);\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + ('}\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20}\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20'), _0x4a25d8);
        }
    }
    _0xa6946a['FILL'] = Laya['Shader3D']['propertyNa' + 'meToID']('u_FillAmou' + 'nt'), _0xa6946a['MAXPERFECT' + 'FILL'] = Laya['Shader3D']['propertyNa' + 'meToID']('u_MaxPerfe' + 'ctFill'), _0xa6946a['MINPERFECT' + 'FILL'] = Laya['Shader3D']['propertyNa' + 'meToID']('u_MinPerfe' + 'ctFill'), _0xa6946a['MAXY'] = Laya['Shader3D']['propertyNa' + 'meToID']('u_MaxY'), _0xa6946a['MINY'] = Laya['Shader3D']['propertyNa' + 'meToID']('u_MinY'), _0xa6946a['TEXTURE'] = Laya['Shader3D']['propertyNa' + 'meToID']('u_Texture'), _0xa6946a['COLOR'] = Laya['Shader3D']['propertyNa' + 'meToID']('u_Color'), _0xa6946a['TOPCOLOR'] = Laya['Shader3D']['propertyNa' + 'meToID']('u_TopColor'), _0xa6946a['CULL'] = Laya['Shader3D']['propertyNa' + 'meToID']('s_Cull'), _0xa6946a['BLEND'] = Laya['Shader3D']['propertyNa' + 'meToID']('s_Blend'), _0xa6946a['BLEND_SRC'] = Laya['Shader3D']['propertyNa' + 'meToID']('s_BlendSrc'), _0xa6946a['BLEND_DST'] = Laya['Shader3D']['propertyNa' + 'meToID']('s_BlendDst'), _0xa6946a['DEPTH_TEST'] = Laya['Shader3D']['propertyNa' + 'meToID']('s_DepthTes' + 't'), _0xa6946a['DEPTH_WRIT' + 'E'] = Laya['Shader3D']['propertyNa' + 'meToID']('s_DepthWri' + 'te'), _0xa6946a['RENDERMODE' + '_ADDTIVE'] = 0x0, _0xa6946a['RENDERMODE' + '_ALPHABLEN' + 'DED'] = 0x1;
    class _0x320138 extends Laya['Material'] {
        constructor(_0x4d0c5a, _0x5a61e5) {
            super(), this['setShaderN' + 'ame']('BgMaskShad' + 'er'), this['alpha$'] = 0x0, this['texture$'] = _0x4d0c5a, this['tilingOffs' + 'et'] = _0x5a61e5, this['renderMode'] = _0x320138['RENDERMODE' + '_ALPHABLEN' + 'DED'];
        }
        static ['__initDefi' + 'ne__']() {
            _0x320138['SHADERDEFI' + 'NE_MAINTEX' + 'TURE'] = Laya['Shader3D']['getDefineB' + 'yName']('MAINTEXTUR' + 'E'), _0x320138['SHADERDEFI' + 'NE_TILINGO' + 'FFSET'] = Laya['Shader3D']['getDefineB' + 'yName']('TILINGOFFS' + 'ET'), _0x320138['SHADERDEFI' + 'NE_ADDTIVE' + 'FOG'] = Laya['Shader3D']['getDefineB' + 'yName']('ADDTIVEFOG');
        }
        set ['alpha$'](_0x566327) {
            this['_shaderVal' + 'ues']['setVector'](_0x320138['ALPHA'], _0x566327);
        }
        set ['texture$'](_0x454c93) {
            this['_shaderVal' + 'ues']['setTexture'](_0x320138['TEXTURE'], _0x454c93);
        }
        get ['depthWrite']() {
            return this['_shaderVal' + 'ues']['getBool'](_0x320138['DEPTH_WRIT' + 'E']);
        }
        set ['depthWrite'](_0x3c2dc6) {
            this['_shaderVal' + 'ues']['setBool'](_0x320138['DEPTH_WRIT' + 'E'], _0x3c2dc6);
        }
        get ['cull']() {
            return this['_shaderVal' + 'ues']['getInt'](_0x320138['CULL']);
        }
        set ['cull'](_0x44e58d) {
            this['_shaderVal' + 'ues']['setInt'](_0x320138['CULL'], _0x44e58d);
        }
        get ['blend']() {
            return this['_shaderVal' + 'ues']['getInt'](_0x320138['BLEND']);
        }
        set ['blend'](_0x509155) {
            this['_shaderVal' + 'ues']['setInt'](_0x320138['BLEND'], _0x509155);
        }
        get ['blendSrc']() {
            return this['_shaderVal' + 'ues']['getInt'](_0x320138['BLEND_SRC']);
        }
        set ['blendSrc'](_0x29e2b4) {
            this['_shaderVal' + 'ues']['setInt'](_0x320138['BLEND_SRC'], _0x29e2b4);
        }
        get ['blendDst']() {
            return this['_shaderVal' + 'ues']['getInt'](_0x320138['BLEND_DST']);
        }
        set ['blendDst'](_0x56fa06) {
            this['_shaderVal' + 'ues']['setInt'](_0x320138['BLEND_DST'], _0x56fa06);
        }
        get ['depthTest']() {
            return this['_shaderVal' + 'ues']['getInt'](_0x320138['DEPTH_TEST']);
        }
        set ['depthTest'](_0x3b6a81) {
            this['_shaderVal' + 'ues']['setInt'](_0x320138['DEPTH_TEST'], _0x3b6a81);
        }
        get ['_MainTex_S' + 'TX']() {
            return this['_shaderVal' + 'ues']['getVector'](_0x320138['TILINGOFFS' + 'ET'])['x'];
        }
        set ['_MainTex_S' + 'TX'](_0x13b2b6) {
            var _0x388e34 = this['_shaderVal' + 'ues']['getVector'](_0x320138['TILINGOFFS' + 'ET']);
            _0x388e34['x'] = _0x13b2b6, this['tilingOffs' + 'et'] = _0x388e34;
        }
        get ['_MainTex_S' + 'TY']() {
            return this['_shaderVal' + 'ues']['getVector'](_0x320138['TILINGOFFS' + 'ET'])['y'];
        }
        set ['_MainTex_S' + 'TY'](_0x433352) {
            var _0x55aca9 = this['_shaderVal' + 'ues']['getVector'](_0x320138['TILINGOFFS' + 'ET']);
            _0x55aca9['y'] = _0x433352, this['tilingOffs' + 'et'] = _0x55aca9;
        }
        get ['_MainTex_S' + 'TZ']() {
            return this['_shaderVal' + 'ues']['getVector'](_0x320138['TILINGOFFS' + 'ET'])['z'];
        }
        set ['_MainTex_S' + 'TZ'](_0x1947d2) {
            var _0x3b7216 = this['_shaderVal' + 'ues']['getVector'](_0x320138['TILINGOFFS' + 'ET']);
            _0x3b7216['z'] = _0x1947d2, this['tilingOffs' + 'et'] = _0x3b7216;
        }
        get ['_MainTex_S' + 'TW']() {
            return this['_shaderVal' + 'ues']['getVector'](_0x320138['TILINGOFFS' + 'ET'])['w'];
        }
        set ['_MainTex_S' + 'TW'](_0x3e7ad5) {
            var _0x5e9dbf = this['_shaderVal' + 'ues']['getVector'](_0x320138['TILINGOFFS' + 'ET']);
            _0x5e9dbf['w'] = _0x3e7ad5, this['tilingOffs' + 'et'] = _0x5e9dbf;
        }
        get ['tilingOffs' + 'etX']() {
            return this['_MainTex_S' + 'TX'];
        }
        set ['tilingOffs' + 'etX'](_0x4c90a9) {
            this['_MainTex_S' + 'TX'] = _0x4c90a9;
        }
        get ['tilingOffs' + 'etY']() {
            return this['_MainTex_S' + 'TY'];
        }
        set ['tilingOffs' + 'etY'](_0x47c3c9) {
            this['_MainTex_S' + 'TY'] = _0x47c3c9;
        }
        get ['tilingOffs' + 'etZ']() {
            return this['_MainTex_S' + 'TZ'];
        }
        set ['tilingOffs' + 'etZ'](_0xfa35a9) {
            this['_MainTex_S' + 'TZ'] = _0xfa35a9;
        }
        get ['tilingOffs' + 'etW']() {
            return this['_MainTex_S' + 'TW'];
        }
        set ['tilingOffs' + 'etW'](_0x3c5a8f) {
            this['_MainTex_S' + 'TW'] = _0x3c5a8f;
        }
        get ['tilingOffs' + 'et']() {
            return this['_shaderVal' + 'ues']['getVector'](_0x320138['TILINGOFFS' + 'ET']);
        }
        set ['tilingOffs' + 'et'](_0x46afdc) {
            _0x46afdc && (0x1 != _0x46afdc['x'] || 0x1 != _0x46afdc['y'] || 0x0 != _0x46afdc['z'] || 0x0 != _0x46afdc['w']) ? this['_shaderVal' + 'ues']['addDefine'](_0x320138['SHADERDEFI' + 'NE_TILINGO' + 'FFSET']) : this['_shaderVal' + 'ues']['removeDefi' + 'ne'](_0x320138['SHADERDEFI' + 'NE_TILINGO' + 'FFSET']), this['_shaderVal' + 'ues']['setVector'](_0x320138['TILINGOFFS' + 'ET'], _0x46afdc);
        }
        set ['renderMode'](_0x57bc0a) {
            switch (_0x57bc0a) {
            case _0x320138['RENDERMODE' + '_ADDTIVE']:
                this['renderQueu' + 'e'] = Laya['Material']['RENDERQUEU' + 'E_TRANSPAR' + 'ENT'], this['alphaTest'] = !0x1, this['depthWrite'] = !0x1, this['cull'] = Laya['RenderStat' + 'e']['CULL_NONE'], this['blend'] = Laya['RenderStat' + 'e']['BLEND_ENAB' + 'LE_ALL'], this['blendSrc'] = Laya['RenderStat' + 'e']['BLENDPARAM' + '_SRC_ALPHA'], this['blendDst'] = Laya['RenderStat' + 'e']['BLENDPARAM' + '_ONE'], this['depthTest'] = Laya['RenderStat' + 'e']['DEPTHTEST_' + 'LESS'];
                break;
            case _0x320138['RENDERMODE' + '_ALPHABLEN' + 'DED']:
                this['renderQueu' + 'e'] = Laya['Material']['RENDERQUEU' + 'E_TRANSPAR' + 'ENT'], this['alphaTest'] = !0x1, this['depthWrite'] = !0x0, this['cull'] = Laya['RenderStat' + 'e']['CULL_NONE'], this['blend'] = Laya['RenderStat' + 'e']['BLEND_ENAB' + 'LE_ALL'], this['blendSrc'] = Laya['RenderStat' + 'e']['BLENDPARAM' + '_SRC_ALPHA'], this['blendDst'] = Laya['RenderStat' + 'e']['BLENDPARAM' + '_ONE_MINUS' + '_SRC_ALPHA'], this['depthTest'] = Laya['RenderStat' + 'e']['DEPTHTEST_' + 'LESS'];
                break;
            default:
                throw new Error('MeshBgMask' + 'Material$\x20' + ':\x20renderMo' + 'de\x20value\x20e' + 'rror.');
            }
        }
        static ['initShader' + '$']() {
            _0x320138['__initDefi' + 'ne__']();
            var _0x303c17 = {
                    'a_Position': Laya['VertexMesh']['MESH_POSIT' + 'ION0'],
                    'a_Normal': Laya['VertexMesh']['MESH_NORMA' + 'L0'],
                    'a_Texcoord0': Laya['VertexMesh']['MESH_TEXTU' + 'RECOORDINA' + 'TE0']
                }, _0x43d193 = {
                    'u_MvpMatrix': Laya['Shader3D']['PERIOD_SPR' + 'ITE'],
                    'u_WorldMat': Laya['Shader3D']['PERIOD_SPR' + 'ITE'],
                    'u_Alpha': Laya['Shader3D']['PERIOD_MAT' + 'ERIAL'],
                    'u_SunLight.direction': Laya['Shader3D']['PERIOD_SCE' + 'NE'],
                    'u_Texture': Laya['Shader3D']['PERIOD_MAT' + 'ERIAL'],
                    'u_TilingOffset': Laya['Shader3D']['PERIOD_MAT' + 'ERIAL']
                }, _0x4169b9 = Laya['Shader3D']['add']('BgMaskShad' + 'er'), _0x15db54 = new Laya['SubShader'](_0x303c17, _0x43d193);
            _0x4169b9['addSubShad' + 'er'](_0x15db54);
            let _0x25fea3 = {
                's_Cull': Laya['Shader3D']['RENDER_STA' + 'TE_CULL'],
                's_Blend': Laya['Shader3D']['RENDER_STA' + 'TE_BLEND'],
                's_BlendSrc': Laya['Shader3D']['RENDER_STA' + 'TE_BLEND_S' + 'RC'],
                's_BlendDst': Laya['Shader3D']['RENDER_STA' + 'TE_BLEND_D' + 'ST'],
                's_DepthTest': Laya['Shader3D']['RENDER_STA' + 'TE_DEPTH_T' + 'EST'],
                's_DepthWrite': Laya['Shader3D']['RENDER_STA' + 'TE_DEPTH_W' + 'RITE']
            };
            _0x15db54['addShaderP' + 'ass']('\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20#includ' + 'e\x20\x22Lightin' + 'g.glsl\x22;\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20attribute' + '\x20vec4\x20a_Po' + 'sition;\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + 'attribute\x20' + 'vec3\x20a_Nor' + 'mal;\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20att' + 'ribute\x20vec' + '2\x20a_Texcoo' + 'rd0;\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20unif' + 'orm\x20mat4\x20u' + '_MvpMatrix' + ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20unifor' + 'm\x20mat4\x20u_W' + 'orldMat;\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20uniform\x20v' + 'ec4\x20u_Tili' + 'ngOffset;\x0a' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20varying' + '\x20vec3\x20v_No' + 'rmal;\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20va' + 'rying\x20vec2' + '\x20v_Texcoor' + 'd0;\x0a\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20voi' + 'd\x20main()\x20{' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20gl_' + 'Position\x20=' + '\x20remapGLPo' + 'sitionZ(u_' + 'MvpMatrix\x20' + '*\x20a_Positi' + 'on);\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20v_Normal\x20' + '=\x20mat3(u_W' + 'orldMat)*a' + '_Normal;\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20#ifde' + 'f\x20TILINGOF' + 'FSET\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20v_Tex' + 'coord0=Tra' + 'nsformUV(a' + '_Texcoord0' + ',u_TilingO' + 'ffset);\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20#else\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + 'v_Texcoord' + '0=a_Texcoo' + 'rd0;\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20#endif\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '}\x0a\x20\x20\x20\x20\x20\x20\x20\x20', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20#ifdef\x20' + 'FSHIGHPREC' + 'ISION\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20pr' + 'ecision\x20hi' + 'ghp\x20float;' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20#else\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20precision' + '\x20mediump\x20f' + 'loat;\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20#e' + 'ndif\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20#in' + 'clude\x20\x22Lig' + 'hting.glsl' + '\x22;\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20un' + 'iform\x20floa' + 't\x20u_Alpha;' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20uniform' + '\x20vec4\x20u_Co' + 'lor;\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20uni' + 'form\x20Direc' + 'tionLight\x20' + 'u_SunLight' + ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20unifor' + 'm\x20sampler2' + 'D\x20u_Textur' + 'e;\x0a\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20vary' + 'ing\x20vec3\x20v' + '_Normal;\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20varying\x20v' + 'ec2\x20v_Texc' + 'oord0;\x20\x0a\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20void\x20main' + '()\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20{\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20float\x20d' + 'iffuse\x20=\x20m' + 'ax(dot(-u_' + 'SunLight.d' + 'irection,\x20' + 'v_Normal),' + '\x200.0)\x20*\x20(\x20' + '1.0\x20-\x200.5)' + '\x20+\x200.5;\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20gl_Fra' + 'gColor\x20=\x20t' + 'exture2D(u' + '_Texture,\x20' + 'v_Texcoord' + '0)\x20*\x20vec4(' + 'diffuse,\x20d' + 'iffuse,\x20di' + 'ffuse,\x20u_A' + 'lpha);\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20}' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20', _0x25fea3);
        }
    }
    _0x320138['ALPHA'] = Laya['Shader3D']['propertyNa' + 'meToID']('u_Alpha'), _0x320138['TEXTURE'] = Laya['Shader3D']['propertyNa' + 'meToID']('u_Texture'), _0x320138['TILINGOFFS' + 'ET'] = Laya['Shader3D']['propertyNa' + 'meToID']('u_TilingOf' + 'fset'), _0x320138['CULL'] = Laya['Shader3D']['propertyNa' + 'meToID']('s_Cull'), _0x320138['BLEND'] = Laya['Shader3D']['propertyNa' + 'meToID']('s_Blend'), _0x320138['BLEND_SRC'] = Laya['Shader3D']['propertyNa' + 'meToID']('s_BlendSrc'), _0x320138['BLEND_DST'] = Laya['Shader3D']['propertyNa' + 'meToID']('s_BlendDst'), _0x320138['DEPTH_TEST'] = Laya['Shader3D']['propertyNa' + 'meToID']('s_DepthTes' + 't'), _0x320138['DEPTH_WRIT' + 'E'] = Laya['Shader3D']['propertyNa' + 'meToID']('s_DepthWri' + 'te'), _0x320138['RENDERMODE' + '_ADDTIVE'] = 0x0, _0x320138['RENDERMODE' + '_ALPHABLEN' + 'DED'] = 0x1;
    class _0xb9fe0 {
        constructor() {
            this['inited'] = !0x1, _0xa6946a['initShader' + '$'](), _0xc071bb['initShader' + '$'](), _0x30885c['initShader' + '$'](), _0x320138['initShader' + '$']();
        }
        static ['getInstanc' + 'e$']() {
            return _0xb9fe0['instance$'] || (_0xb9fe0['instance$'] = new _0xb9fe0()), _0xb9fe0['instance$'];
        }
        ['preCompile' + '22']() {
            Laya['Shader3D']['compileSha' + 'der']('BLINNPHONG', 0x0, 0x0, 0x2002, 0x8, 0x0), Laya['Shader3D']['compileSha' + 'der']('BLINNPHONG', 0x0, 0x0, 0x2002, 0x8, 0x2), Laya['Shader3D']['compileSha' + 'der']('BLINNPHONG', 0x0, 0x0, 0x2002, 0x8, 0x12), Laya['Shader3D']['compileSha' + 'der']('BLINNPHONG', 0x0, 0x0, 0x2002, 0x28, 0x0), Laya['Shader3D']['compileSha' + 'der']('BLINNPHONG', 0x0, 0x0, 0x2002, 0x28, 0x2), Laya['Shader3D']['compileSha' + 'der']('BLINNPHONG', 0x0, 0x0, 0x2002, 0x28, 0x10), Laya['Shader3D']['compileSha' + 'der']('BLINNPHONG', 0x0, 0x0, 0x2002, 0x28, 0x12), Laya['Shader3D']['compileSha' + 'der']('BLINNPHONG', 0x0, 0x0, 0x2002, 0x48, 0x0), Laya['Shader3D']['compileSha' + 'der']('BLINNPHONG', 0x0, 0x0, 0x2002, 0x48, 0x2), Laya['Shader3D']['compileSha' + 'der']('BLINNPHONG', 0x0, 0x0, 0x2002, 0x68, 0x0), Laya['Shader3D']['compileSha' + 'der']('BLINNPHONG', 0x0, 0x0, 0x2006, 0x8, 0x0), Laya['Shader3D']['compileSha' + 'der']('BLINNPHONG', 0x0, 0x0, 0x2006, 0x8, 0x2), Laya['Shader3D']['compileSha' + 'der']('BLINNPHONG', 0x0, 0x0, 0x2006, 0x8, 0x12), Laya['Shader3D']['compileSha' + 'der']('BLINNPHONG', 0x0, 0x0, 0x2006, 0x28, 0x0), Laya['Shader3D']['compileSha' + 'der']('BLINNPHONG', 0x0, 0x0, 0x2006, 0x28, 0x10), Laya['Shader3D']['compileSha' + 'der']('BLINNPHONG', 0x0, 0x0, 0x2006, 0x28, 0x12), Laya['Shader3D']['compileSha' + 'der']('BLINNPHONG', 0x0, 0x0, 0x2006, 0x48, 0x0), Laya['Shader3D']['compileSha' + 'der']('BLINNPHONG', 0x0, 0x0, 0x2006, 0x48, 0x2), Laya['Shader3D']['compileSha' + 'der']('BLINNPHONG', 0x0, 0x0, 0x2006, 0x68, 0x0), Laya['Shader3D']['compileSha' + 'der']('PARTICLESH' + 'URIKEN', 0x0, 0x0, 0x2000, 0x4002008, 0x2), Laya['Shader3D']['compileSha' + 'der']('PARTICLESH' + 'URIKEN', 0x0, 0x0, 0x2000, 0x4028008, 0xe), Laya['Shader3D']['compileSha' + 'der']('Effect', 0x0, 0x0, 0x2000, 0x0, 0xa), console['debug']('预编译完毕');
        }
        ['preCompile' + '25']() {
            for (var _0x541cda in (this['shaderObj'] = {
                    'BLINNPHONG': [
                        {
                            'defineNames': [
                                'DIRECTIONL' + 'IGHT',
                                'UV'
                            ],
                            'passIndex': 0x0,
                            'subShaderIndex': 0x0
                        },
                        {
                            'defineNames': [
                                'DIRECTIONL' + 'IGHT',
                                'UV',
                                'UV1'
                            ],
                            'passIndex': 0x0,
                            'subShaderIndex': 0x0
                        },
                        {
                            'defineNames': [
                                'DIFFUSEMAP',
                                'DIRECTIONL' + 'IGHT',
                                'UV'
                            ],
                            'passIndex': 0x0,
                            'subShaderIndex': 0x0
                        },
                        {
                            'defineNames': [
                                'GPU_INSTAN' + 'CE',
                                'DIRECTIONL' + 'IGHT',
                                'UV'
                            ],
                            'passIndex': 0x0,
                            'subShaderIndex': 0x0
                        },
                        {
                            'defineNames': [
                                'GPU_INSTAN' + 'CE',
                                'DIFFUSEMAP',
                                'DIRECTIONL' + 'IGHT',
                                'UV'
                            ],
                            'passIndex': 0x0,
                            'subShaderIndex': 0x0
                        }
                    ],
                    'Effect': [{
                            'defineNames': [
                                'ADDTIVEFOG',
                                'MAINTEXTUR' + 'E'
                            ],
                            'passIndex': 0x0,
                            'subShaderIndex': 0x0
                        }],
                    'Unlit': [{
                            'defineNames': [
                                'ALPHATEST',
                                'ALBEDOTEXT' + 'URE'
                            ],
                            'passIndex': 0x0,
                            'subShaderIndex': 0x0
                        }],
                    'PARTICLESHURIKEN': [
                        {
                            'defineNames': [
                                'DIFFUSEMAP',
                                'SPHERHBILL' + 'BOARD',
                                'COLOROVERL' + 'IFETIME',
                                'SIZEOVERLI' + 'FETIMECURV' + 'E',
                                'ROTATIONOV' + 'ERLIFETIME',
                                'ROTATIONOV' + 'ERLIFETIME' + 'CONSTANT',
                                'TEXTURESHE' + 'ETANIMATIO' + 'NCURVE',
                                'SHAPE',
                                'TINTCOLOR'
                            ],
                            'passIndex': 0x0,
                            'subShaderIndex': 0x0
                        },
                        {
                            'defineNames': [
                                'DIFFUSEMAP',
                                'SPHERHBILL' + 'BOARD',
                                'COLOROVERL' + 'IFETIME',
                                'SHAPE'
                            ],
                            'passIndex': 0x0,
                            'subShaderIndex': 0x0
                        },
                        {
                            'defineNames': [
                                'DIFFUSEMAP',
                                'HORIZONTAL' + 'BILLBOARD',
                                'COLOROVERL' + 'IFETIME',
                                'SIZEOVERLI' + 'FETIMECURV' + 'E',
                                'SHAPE',
                                'TINTCOLOR'
                            ],
                            'passIndex': 0x0,
                            'subShaderIndex': 0x0
                        },
                        {
                            'defineNames': [
                                'DIFFUSEMAP',
                                'SPHERHBILL' + 'BOARD',
                                'SIZEOVERLI' + 'FETIMECURV' + 'E',
                                'SHAPE',
                                'TINTCOLOR'
                            ],
                            'passIndex': 0x0,
                            'subShaderIndex': 0x0
                        },
                        {
                            'defineNames': [
                                'DIFFUSEMAP',
                                'ADDTIVEFOG',
                                'SPHERHBILL' + 'BOARD',
                                'SIZEOVERLI' + 'FETIMECURV' + 'E',
                                'SHAPE',
                                'TINTCOLOR'
                            ],
                            'passIndex': 0x0,
                            'subShaderIndex': 0x0
                        },
                        {
                            'defineNames': [
                                'DIFFUSEMAP',
                                'ADDTIVEFOG',
                                'SPHERHBILL' + 'BOARD',
                                'COLOROVERL' + 'IFETIME',
                                'SIZEOVERLI' + 'FETIMECURV' + 'E',
                                'ROTATIONOV' + 'ERLIFETIME',
                                'ROTATIONOV' + 'ERLIFETIME' + 'CONSTANT',
                                'TINTCOLOR'
                            ],
                            'passIndex': 0x0,
                            'subShaderIndex': 0x0
                        },
                        {
                            'defineNames': [
                                'DIFFUSEMAP',
                                'STRETCHEDB' + 'ILLBOARD',
                                'COLOROVERL' + 'IFETIME',
                                'SHAPE',
                                'TINTCOLOR'
                            ],
                            'passIndex': 0x0,
                            'subShaderIndex': 0x0
                        },
                        {
                            'defineNames': [
                                'DIFFUSEMAP',
                                'SPHERHBILL' + 'BOARD',
                                'COLOROVERL' + 'IFETIME',
                                'SHAPE',
                                'TINTCOLOR'
                            ],
                            'passIndex': 0x0,
                            'subShaderIndex': 0x0
                        },
                        {
                            'defineNames': [
                                'DIFFUSEMAP',
                                'SPHERHBILL' + 'BOARD',
                                'COLOROVERL' + 'IFETIME',
                                'SIZEOVERLI' + 'FETIMECURV' + 'E',
                                'ROTATIONOV' + 'ERLIFETIME',
                                'ROTATIONOV' + 'ERLIFETIME' + 'CONSTANT',
                                'TINTCOLOR'
                            ],
                            'passIndex': 0x0,
                            'subShaderIndex': 0x0
                        },
                        {
                            'defineNames': [
                                'DIFFUSEMAP',
                                'SPHERHBILL' + 'BOARD',
                                'SIZEOVERLI' + 'FETIMECURV' + 'E',
                                'TINTCOLOR'
                            ],
                            'passIndex': 0x0,
                            'subShaderIndex': 0x0
                        },
                        {
                            'defineNames': [
                                'DIFFUSEMAP',
                                'ADDTIVEFOG',
                                'SPHERHBILL' + 'BOARD',
                                'COLOROVERL' + 'IFETIME',
                                'ROTATIONOV' + 'ERLIFETIME',
                                'ROTATIONOV' + 'ERLIFETIME' + 'CONSTANT',
                                'SHAPE',
                                'TINTCOLOR'
                            ],
                            'passIndex': 0x0,
                            'subShaderIndex': 0x0
                        }
                    ]
                }, this['shaderObj'])) {
                let _0xc6b2c3 = this['shaderObj'][_0x541cda];
                for (let _0x11ac64 = 0x0; _0x11ac64 < _0xc6b2c3['length']; _0x11ac64++) {
                    let _0x250fdd = _0xc6b2c3[_0x11ac64], _0x344c13 = new Laya['ShaderVari' + 'ant'](Laya['Shader3D']['find'](_0x541cda), _0x250fdd['subShaderI' + 'ndex'], _0x250fdd['passIndex'], _0x250fdd['defineName' + 's']);
                    Laya['Shader3D']['debugShade' + 'rVariantCo' + 'llection']['add'](_0x344c13);
                }
            }
            Laya['Shader3D']['debugShade' + 'rVariantCo' + 'llection']['compile'](), console['log']('预编译完毕');
        }
    }
    _0xb9fe0['instance$'] = void 0x0;
    class _0x374623 extends _0x4f9d04 {
        constructor() {
            super(), this['winName'] = '主界面';
        }
        ['onUI_GameK' + 'ey_Load']() {
            _0x1fc701['prototype']['onUI_GameK' + 'ey_Load']['call'](this), this['setUINode'](), this['monitorEve' + 'nts$'](), this['moni_GameK' + 'ey_torBtns'](), _0xb9fe0['getInstanc' + 'e$']()['preCompile' + '25'](), window['shaderObj'] = {}, window['getShaders'] = function () {
                let _0x6400c9;
                for (let _0x3d1b2a = 0x0; _0x3d1b2a < Laya['Shader3D']['debugShade' + 'rVariantCo' + 'llection']['variantCou' + 'nt']; _0x3d1b2a++) {
                    let _0x199bf0 = Laya['Shader3D']['debugShade' + 'rVariantCo' + 'llection']['getByIndex'](_0x3d1b2a), _0x3bf99b = _0x199bf0['shader']['name'];
                    window['shaderObj'][_0x3bf99b] || (window['shaderObj'][_0x3bf99b] = []), _0x6400c9 = window['shaderObj'][_0x3bf99b];
                    let _0x27212a = {};
                    _0x27212a['defineName' + 's'] = _0x199bf0['defineName' + 's'], _0x27212a['passIndex'] = _0x199bf0['passIndex'], _0x27212a['subShaderI' + 'ndex'] = _0x199bf0['subShaderI' + 'ndex'], _0x6400c9['push'](_0x27212a);
                }
                console['log'](JSON['stringify'](window['shaderObj']));
            }, this['initUI$']();
        }
        ['init_GameK' + 'ey_Data']() {
            this['curMission' + 'Id$'] = _0xe6399d['getInstanc' + 'e$']()['userData$']['mission$'], this['curMission' + 'Progress$'] = _0xe6399d['getInstanc' + 'e$']()['userData$']['missionPro' + 'gress$'], this['drinkDataM' + 'g$'] = _0xe6399d['getInstanc' + 'e$']()['drinkData$'], this['curMission' + 'Data$'] = this['drinkDataM' + 'g$']['getMission' + 'DataByMiss' + 'ionId$'](this['curMission' + 'Id$']), this['curDrinkDa' + 'ta$'] = this['drinkDataM' + 'g$']['getDrinkDa' + 'taByDrinkI' + 'd$'](this['curMission' + 'Data$']['drinkArr'][this['curMission' + 'Progress$'] - 0x1]);
        }
        ['moni_GameK' + 'ey_torBtns']() {
            _0x1faf3f['onBu_GameK' + 'ey_ttonSca' + 'leEvent'](this['btn_start$'], this, 'onClickSta' + 'rt$'), _0x1faf3f['onBu_GameK' + 'ey_ttonSca' + 'leEvent'](this['btn_items$'], this, 'onClickIte' + 'm$'), _0x1faf3f['onBu_GameK' + 'ey_ttonSca' + 'leEvent'](this['btn_custom' + '$'], this, 'onClickCus' + 'tom$');
        }
        ['showBannr$']() {
        }
        ['reportData' + '$']() {
        }
        ['showInters' + 'titialAd$']() {
        }
        ['onClickSta' + 'rt$']() {
            platform['getInstanc' + 'e']()['showInters' + 'titial'](() => {
                console['log']('aaaaaa'), curScene['isLoadedSc' + 'ene$'] && (this['destroy'](), _0x3830d2['getInstanc' + 'e$']()['disp_GameK' + 'ey_atchEve' + 'nt'](_0x5b5578['ON_START_G' + 'AME']), _0x3a41f3['getInstanc' + 'e$']()['open_GameK' + 'ey_UI'](_0x25ade3));
            });
        }
        ['onClickBea' + 'ch$']() {
            _0x3a41f3['getInstanc' + 'e$']()['open_GameK' + 'ey_UI'](_0x1bf616);
        }
        ['onClickIte' + 'm$']() {
            _0x3a41f3['getInstanc' + 'e$']()['open_GameK' + 'ey_UI'](_0x5d78d3);
        }
        ['onClickCus' + 'tom$']() {
            _0x3a41f3['getInstanc' + 'e$']()['open_GameK' + 'ey_UI'](_0x3bed18);
        }
    }
    _0x374623['url'] = 'Prefab/Mai' + 'n/MainWind' + 'owOppo.jso' + 'n', _0x374623['className'] = 'MainUiOppo', _0x374623['uiConfig'] = {
        'layer': _0x5a29eb['LAYER_NORM' + 'AL'],
        'only': !0x0,
        'needUISurrenal': !0x0,
        'notClose': !0x1
    };
    class _0x3f3924 {
        constructor() {
            this['inited'] = !0x1, this['initedCB'] = void 0x0, this['sceneMap'] = {};
        }
        static ['getInstanc' + 'e$']() {
            return null == _0x3f3924['instance'] && (_0x3f3924['instance'] = new _0x3f3924()), _0x3f3924['instance'];
        }
        get ['isIn_GameK' + 'ey_ited']() {
            return this['inited'];
        }
        ['init'](_0x21589e) {
            this['initedCB'] = _0x21589e, this['init_GameK' + 'ey_Complet' + 'e']();
        }
        ['open_GameK' + 'ey_InitSce' + 'ne']() {
        }
        ['init_GameK' + 'ey_Complet' + 'e']() {
            this['open_GameK' + 'ey_InitSce' + 'ne'](), this['inited'] = !0x0, this['initedCB'] && this['initedCB']();
        }
        ['open_GameK' + 'ey_Scene'](_0x12c4fd, _0x50aabf, _0x45fa01, ..._0x8349de) {
            Laya['Scene']['open'](_0x12c4fd['url'], !0x0, _0x8349de, Laya['Handler']['create'](this, _0x14ae8e => {
                _0x50aabf && _0x50aabf['run']();
            }), _0x45fa01);
        }
        ['add_GameKe' + 'y_Scene'](_0x121350) {
            this['sceneMap'][_0x121350['constructo' + 'r']['className']] = _0x121350;
        }
        ['remo_GameK' + 'ey_veScene'](_0x58f00a) {
            delete this['sceneMap'][_0x58f00a['constructo' + 'r']['className']];
        }
        ['getS_GameK' + 'ey_cene'](_0xc16811) {
            return this['sceneMap'][_0xc16811['className']];
        }
    }
    _0x3f3924['instance'] = void 0x0;
    class _0x6dd10a extends Laya['Scene'] {
        constructor() {
            super(), this['_even_Game' + 'Key_ts'] = [], _0x3f3924['getInstanc' + 'e$']()['add_GameKe' + 'y_Scene'](this);
        }
        ['addE_GameK' + 'ey_ventLis' + 'tener'](_0x49e413, _0x382950) {
            _0x3830d2['getInstanc' + 'e$']()['addE_GameK' + 'ey_ventLis' + 'tener'](_0x49e413, this, _0x382950), this['_even_Game' + 'Key_ts']['push']({
                'e': _0x49e413,
                'cn': _0x382950
            });
        }
        ['remo_GameK' + 'ey_veEvent' + 'Listener'](_0x11734b, _0x3738a1) {
            for (var _0x4ec2ac, _0x146cc8 = this['_even_Game' + 'Key_ts']['length']; --_0x146cc8 > -0x1;)
                if ((_0x4ec2ac = this['_even_Game' + 'Key_ts'][_0x146cc8])['e'] == _0x11734b && _0x4ec2ac['cn'] == _0x3738a1) {
                    this['_even_Game' + 'Key_ts']['removeAt'](_0x146cc8);
                    break;
                }
        }
        ['remo_GameK' + 'ey_veAllEv' + 'entListene' + 'r']() {
            for (var _0xb91bb9; this['_even_Game' + 'Key_ts']['length'];)
                _0xb91bb9 = this['_even_Game' + 'Key_ts']['shift'](), _0x3830d2['getInstanc' + 'e$']()['remo_GameK' + 'ey_veEvent' + 'Listener'](_0xb91bb9['e'], this, _0xb91bb9['cn']);
            this['_even_Game' + 'Key_ts'] = [];
        }
        ['onDestroy']() {
            _0x3f3924['getInstanc' + 'e$']()['remo_GameK' + 'ey_veScene'](this), this['remo_GameK' + 'ey_veAllEv' + 'entListene' + 'r'](), this['close']();
        }
    }
    _0x6dd10a['url'] = '', _0x6dd10a['className'] = '';
    class _0x55756d extends Laya['Script3D'] {
        constructor() {
            super(), this['modelId$'] = void 0x0;
        }
        static ['create$'](_0x4b75ba, _0x509330) {
            let _0x2cb88e = _0x4b75ba['addChild'](new Laya['Sprite3D']());
            return _0x2cb88e['addCompone' + 'nt'](_0x55756d)['setData$'](_0x509330), _0x2cb88e;
        }
        ['setData$'](_0x237b7b) {
            this['loadedCall' + 'back$'] = _0x237b7b;
        }
        ['onStart']() {
            this['initData$'](), this['createMode' + 'l$'](), this['resetPos$'](), this['monitorEve' + 'nts$']();
        }
        ['initData$']() {
            this['refreshMod' + 'elData$'](), this['inputMouse' + 'Down$'] = !0x1, this['_canJuice$'] = !0x1, this['_handState' + '$'] = 0x0, this['transform$'] = this['owner']['transform'], this['moveYSpeed' + '$'] = 0.01, this['handStartP' + 'os$'] = new Laya['Vector3'](0x0, 0x14, 0x0), this['makeJuiceV' + '$'] = 0.00001, this['speedPlus$'] = 0.000001, this['juiceT$'] = 0x0;
        }
        ['refreshMod' + 'elData$']() {
            let _0x3db93c = _0xe6399d['getInstanc' + 'e$']()['userData$']['curHandSki' + 'nId'], _0x3d58b3 = D['handSkinBa' + 'sic'][_0x3db93c];
            return !(!_0x3d58b3 || _0x3d58b3['handSkinMo' + 'delId'] == this['modelId$']) && (this['modelId$'] = _0x3d58b3['handSkinMo' + 'delId'], !0x0);
        }
        ['createMode' + 'l$']() {
            this['modelCtr$'] = _0x42867c['create'](this['owner'], this['modelId$'], Laya['Handler']['create'](this, this['onModelLoa' + 'ded$'])), this['modelCtr$']['setLocalPo' + 'sition'](0x0, 0x0, 0x0);
        }
        ['onModelLoa' + 'ded$'](_0xa022e3) {
            this['owner']['destroyed'] || (this['loaded$'] = !0x0, this['loadedCall' + 'back$'] && this['loadedCall' + 'back$'](), this['loadedCall' + 'back$'] = void 0x0);
        }
        ['onHandChan' + 'ge$'](_0x546885) {
            this['refreshMod' + 'elData$']() && (this['modelCtr$'] && this['modelCtr$']['dispose'](), this['modelCtr$'] = void 0x0, this['createMode' + 'l$']());
        }
        ['setDefault' + 'PosY$'](_0x40d209, _0x591a70, _0x21c6f4) {
            this['handStartP' + 'os$']['x'] = _0x40d209, this['handStartP' + 'os$']['y'] = _0x591a70, this['handStartP' + 'os$']['z'] = _0x21c6f4, this['_canJuice$'] || 0x0 != this['handState$'] || this['resetPos$']();
        }
        ['resetPos$']() {
            let _0x5c3c41 = this['transform$']['position'];
            _0x5c3c41['x'] = this['handStartP' + 'os$']['x'], _0x5c3c41['y'] = this['handStartP' + 'os$']['y'], _0x5c3c41['z'] = this['handStartP' + 'os$']['z'], this['transform$']['position'] = _0x5c3c41;
        }
        set ['handState$'](_0x4fb087) {
            _0x4fb087 != this['_handState' + '$'] && (0x0 != _0x4fb087 && 0x4 == this['_handState' + '$'] || (0x1 == _0x4fb087 ? !this['_canJuice$'] || 0x0 != this['_handState' + '$'] && 0x2 != this['_handState' + '$'] || (this['_handState' + '$'] = 0x1) : 0x3 == _0x4fb087 ? this['_canJuice$'] && 0x1 == this['_handState' + '$'] && (this['_handState' + '$'] = 0x3) : 0x4 == _0x4fb087 ? this['_canJuice$'] || 0x1 != this['_handState' + '$'] && 0x3 != this['_handState' + '$'] || (this['_handState' + '$'] = 0x4) : this['_handState' + '$'] = _0x4fb087));
        }
        get ['handState$']() {
            return this['_handState' + '$'];
        }
        ['monitorEve' + 'nts$']() {
            _0x3830d2['getInstanc' + 'e$']()['addE_GameK' + 'ey_ventLis' + 'tener'](_0x5b5578['CUR_HAND_C' + 'HANGE'], this, this['onHandChan' + 'ge$']);
        }
        ['cancleEven' + 'ts$']() {
            _0x3830d2['getInstanc' + 'e$']()['remo_GameK' + 'ey_veEvent' + 'Listener'](_0x5b5578['CUR_HAND_C' + 'HANGE'], this, this['onHandChan' + 'ge$']);
        }
        ['onStartJui' + 'ce$'](_0x6a8bc3) {
            let _0x11df85 = this['transform$']['position'];
            _0x11df85['y'] = _0x6a8bc3, this['transform$']['position'] = _0x11df85, this['handState$'] = 0x3, this['juiceT$'] = 0x0;
        }
        ['fixHandY$'](_0x43b21f) {
            let _0x4fe3e1 = this['transform$']['position'];
            _0x4fe3e1['y'] = _0x43b21f, this['transform$']['position'] = _0x4fe3e1;
        }
        ['onStopJuic' + 'e$']() {
        }
        ['askMoveToS' + 'tart$']() {
            this['handState$'] = 0x2;
        }
        ['onFruitUse' + 'Over$']() {
            this['_canJuice$'] = !0x1, this['askMoveToS' + 'tart$']();
        }
        ['onCreatedF' + 'ruit$'](_0x378aa1, _0x2cbffd, _0x1897f7) {
            this['_canJuice$'] = !0x0;
            let _0x3d464f = this['transform$']['position'];
            _0x3d464f['x'] = _0x378aa1, _0x3d464f['y'] = _0x2cbffd, _0x3d464f['z'] = _0x1897f7, this['transform$']['position'] = _0x3d464f;
        }
        ['askDownMov' + 'e$']() {
            this['handState$'] = 0x1;
        }
        get ['speed$']() {
            return 0x3 == this['handState$'] ? this['makeJuiceV' + '$'] + this['speedPlus$'] * this['juiceT$'] : 0x4 == this['handState$'] ? 0x0 : this['moveYSpeed' + '$'];
        }
        ['refreshMov' + 'eStartAnim' + '$']() {
            if (0x2 != this['handState$'])
                return;
            let _0x35e4fb = _0x3e110a['getInstanc' + 'e$']()['deltaTime$'] * this['speed$'], _0x403495 = this['transform$']['position'];
            _0x403495['y'] > this['handStartP' + 'os$']['y'] ? _0x403495['y'] = Math['max'](_0x403495['y'] - _0x35e4fb, this['handStartP' + 'os$']['y']) : _0x403495['y'] = Math['min'](this['handStartP' + 'os$']['y'], _0x403495['y'] + _0x35e4fb), this['transform$']['position'] = _0x403495, _0x403495['y'] != this['handStartP' + 'os$']['y'] || (this['handState$'] = 0x0);
        }
        ['move$']() {
            this['isDead$'] || (this['refreshDow' + 'nAnim$'](), this['refreshMov' + 'eStartAnim' + '$']());
        }
        ['refreshDow' + 'nAnim$']() {
            if (0x1 != this['handState$'] && 0x3 != this['handState$'])
                return;
            0x3 == this['handState$'] && (this['juiceT$'] += _0x3e110a['getInstanc' + 'e$']()['deltaTime$']);
            let _0x2154d1 = _0x3e110a['getInstanc' + 'e$']()['deltaTime$'] * this['speed$'], _0x5c2314 = this['transform$']['position'];
            _0x5c2314['y'] -= _0x2154d1, this['transform$']['position'] = _0x5c2314;
        }
        ['onDestroy']() {
            this['cancleEven' + 'ts$'](), this['modelCtr$'] && this['modelCtr$']['dispose'](), this['modelCtr$'] = void 0x0;
        }
    }
    class _0x452a47 extends Laya['Script3D'] {
        constructor() {
            super(), this['fruitMater' + 'ial$'] = void 0x0, this['minY$'] = void 0x0, this['maxY$'] = void 0x0, this['_fill$'] = void 0x0, this['_topColor$'] = void 0x0, this['_fillData$'] = {}, this['frameFillM' + 'ax$'] = void 0x0, this['_frameCutY' + 'Max$'] = void 0x0, this['_minPerfec' + 'tFill$'] = void 0x0, this['perfectFil' + 'lYDis$'] = 0.04, this['_maxPerfec' + 'tFill$'] = void 0x0, this['targetFill' + '$'] = void 0x0, this['loadedCall' + 'back$'] = void 0x0, this['fruitConfi' + 'g$'] = void 0x0, this['transform$'] = void 0x0, this['fruitState' + '$'] = 0x0, this['_stopOffse' + 'tFill$'] = void 0x0, this['_stopOffse' + 'tFillYDis$'] = 0.5, this['_cutYSpaci' + 'ngT$'] = void 0x0, this['_cutYCount' + 'T$'] = void 0x0, this['_juiceSpee' + 'd$'] = void 0x0;
        }
        static ['create$'](_0x1954f8, _0x3bcd13, _0x2b23d4, _0x419e01, _0x206887) {
            let _0x47b076 = _0x1954f8['addChild'](new Laya['Sprite3D']());
            return _0x47b076['addCompone' + 'nt'](_0x452a47)['setData$'](_0x3bcd13, _0x2b23d4, _0x419e01, _0x206887), _0x47b076;
        }
        ['onStart']() {
            this['createMode' + 'l$']();
        }
        ['setData$'](_0x1ebf34, _0x2a1ec4, _0xd398b1, _0x19e59f) {
            this['transform$'] = this['owner']['transform'], this['targetFill' + '$'] = _0x2a1ec4, this['loadedCall' + 'back$'] = _0x19e59f, this['fruitConfi' + 'g$'] = D['fruitBasic'][_0x1ebf34], this['_cutYSpaci' + 'ngT$'] = 0xc8 * this['fruitConfi' + 'g$']['hard'], this['_frameCutY' + 'Max$'] = 0.02 + this['fruitConfi' + 'g$']['hard'], this['_juiceSpee' + 'd$'] = 0.005 * this['fruitConfi' + 'g$']['hard'], this['_fillData$']['index'] = _0xd398b1, this['fruitState' + '$'] = 0x0;
            let _0x4e4f52 = this['fruitConfi' + 'g$']['fluidColor'];
            this['_fillData$']['color'] = new Laya['Vector4'](_0x4e4f52[0x0], _0x4e4f52[0x1], _0x4e4f52[0x2], _0x4e4f52[0x3]);
        }
        ['createMode' + 'l$']() {
            this['modelCtr$'] = _0x42867c['create'](this['owner'], this['fruitConfi' + 'g$']['fruitModel' + 'Id'], Laya['Handler']['create'](this, this['onModelLoa' + 'ded$']));
        }
        ['onModelLoa' + 'ded$'](_0x37b130) {
            if (this['owner']['destroyed'])
                return;
            let _0x2b2690 = _0x5ad3aa['getMeshObj' + 's$'](this['modelCtr$']['sprite'])[0x0]['meshRender' + 'er'];
            this['minY$'] = void 0x0, this['maxY$'] = void 0x0;
            let _0x3408c5 = _0x1faf3f['getC_GameK' + 'ey_hildDee' + 'p'](this['modelCtr$']['sprite'], 'BottomPoin' + 't'), _0x402873 = _0x1faf3f['getC_GameK' + 'ey_hildDee' + 'p'](this['modelCtr$']['sprite'], 'TopPoint'), _0x1e67d7 = _0x1faf3f['getC_GameK' + 'ey_hildDee' + 'p'](this['modelCtr$']['sprite'], 'Perfect'), _0x4122d4 = this['owner']['transform']['position']['y'], _0xa82448 = _0x3408c5['transform']['position']['y'], _0xdcc293 = _0x402873['transform']['position']['y'], _0x188d01 = _0x1e67d7['transform']['position']['y'];
            this['minY$'] = _0xa82448 - _0x4122d4, this['maxY$'] = _0xdcc293 - _0x4122d4;
            let _0x4850f4 = _0xdcc293 - _0xa82448;
            this['_minPerfec' + 'tFill$'] = Math['min'](0x1, (_0x188d01 - _0xa82448 - this['perfectFil' + 'lYDis$']) / _0x4850f4), this['_maxPerfec' + 'tFill$'] = Math['min'](0x1, (_0x188d01 - _0xa82448 + this['perfectFil' + 'lYDis$']) / _0x4850f4), this['_stopOffse' + 'tFill$'] = this['_stopOffse' + 'tFillYDis$'] / _0x4850f4, this['frameFillM' + 'ax$'] = this['_frameCutY' + 'Max$'] / _0x4850f4, this['fruitMater' + 'ial$'] = _0x2b2690['sharedMate' + 'rial'] = new _0xa6946a(_0x2b2690['sharedMate' + 'rial']['albedoText' + 'ure'], _0x3408c5['transform']['localPosit' + 'ion']['y'], _0x402873['transform']['localPosit' + 'ion']['y'], this['_minPerfec' + 'tFill$'], this['_maxPerfec' + 'tFill$']), this['fill$'] = 0x1;
            let _0x3ad33d = this['fruitConfi' + 'g$']['topColor'];
            this['topColor$'] = new Laya['Vector4'](_0x3ad33d[0x0], _0x3ad33d[0x1], _0x3ad33d[0x2], _0x3ad33d[0x3]), this['loadedCall' + 'back$'] && this['loadedCall' + 'back$'](), this['loadedCall' + 'back$'] = void 0x0;
        }
        get ['canJuice$']() {
            return this['modelCtr$'] && this['modelCtr$']['loaded'] && 0x3 != this['fruitState' + '$'];
        }
        get ['isLoaded$']() {
            return this['modelCtr$'] && this['modelCtr$']['loaded'];
        }
        set ['topColor$'](_0x2eed78) {
            this['_topColor$'] != _0x2eed78 && (this['fruitMater' + 'ial$']['topColor'] = this['_topColor$'] = _0x2eed78);
        }
        get ['topColor$']() {
            return this['_topColor$'];
        }
        set ['fill$'](_0x292e68) {
            this['_fill$'] != _0x292e68 && (this['_fill$'] = this['fruitMater' + 'ial$']['fill'] = _0x292e68);
        }
        get ['fill$']() {
            return this['_fill$'];
        }
        get ['bootomY$']() {
            return (this['minY$'] - this['maxY$']) * this['fill$'] + this['maxY$'] + this['owner']['transform']['position']['y'];
        }
        get ['topY$']() {
            return this['maxY$'] + this['owner']['transform']['position']['y'];
        }
        get ['fillData$']() {
            return this['_fillData$']['fill'] = (0x1 - this['fill$']) * this['targetFill' + '$'] / this['_minPerfec' + 'tFill$'], this['_fillData$'];
        }
        ['checkMakeJ' + 'uice$'](_0x4c570e) {
            if (0x3 == this['fruitState' + '$'])
                return;
            return this['bootomY$'] < _0x4c570e && (this['doMakeJuic' + 'e$'](_0x4c570e), !0x0);
        }
        ['askJuiceSt' + 'op$']() {
            0x0 != this['fruitState' + '$'] && 0x3 != this['fruitState' + '$'] && (this['fruitState' + '$'] = 0x0, _0x3830d2['getInstanc' + 'e$']()['disp_GameK' + 'ey_atchEve' + 'nt'](_0x5b5578['STOP_JUICE']), 0x1 - this['fill$'] >= this['_minPerfec' + 'tFill$'] - this['_stopOffse' + 'tFill$'] && (this['fruitState' + '$'] = 0x3, _0x3830d2['getInstanc' + 'e$']()['disp_GameK' + 'ey_atchEve' + 'nt'](_0x5b5578['OVER_JUICE'], this['score$'])));
        }
        get ['score$']() {
            let _0x3c36e5 = 0x1 - this['fill$'];
            return _0x3c36e5 < this['_minPerfec' + 'tFill$'] ? 0x1 - (this['_minPerfec' + 'tFill$'] - _0x3c36e5) : _0x3c36e5 > this['_maxPerfec' + 'tFill$'] ? 0x1 - (_0x3c36e5 - this['_maxPerfec' + 'tFill$']) : 0x1;
        }
        ['doMakeJuic' + 'e$'](_0x48422e) {
            0x1 != this['fruitState' + '$'] && (this['fruitState' + '$'] = 0x1, this['_cutYCount' + 'T$'] = 0x0, this['isCountT$'] = !0x1, _0x3830d2['getInstanc' + 'e$']()['disp_GameK' + 'ey_atchEve' + 'nt'](_0x5b5578['START_JUIC' + 'E'], this)), !this['isCountT$'] && (this['_cutYCount' + 'T$'] < this['_cutYSpaci' + 'ngT$'] && (this['_cutYCount' + 'T$'] += _0x3e110a['getInstanc' + 'e$']()['deltaTime$'], this['_cutYCount' + 'T$'] >= this['_cutYSpaci' + 'ngT$'] && (this['isCountT$'] = !0x0)), this['_cutYCount' + 'T$'] < this['_cutYSpaci' + 'ngT$']) || (this['fill$'] = Math['max']((this['topY$'] - _0x3e110a['getInstanc' + 'e$']()['deltaTime$'] * this['_juiceSpee' + 'd$'] - _0x48422e) / (this['maxY$'] - this['minY$']), 0x0, this['fill$'] - this['frameFillM' + 'ax$']), this['_cutYCount' + 'T$'] -= _0x3e110a['getInstanc' + 'e$']()['deltaTime$'], this['_cutYCount' + 'T$'] <= 0x0 && (this['_cutYCount' + 'T$'] = 0x0, this['isCountT$'] = !0x1));
        }
        ['setJuiceEf' + 'fectShow$'](_0x15d095) {
        }
        ['checkFruit' + 'UseOver$']() {
            0x0 == this['fill$'] && (this['fruitState' + '$'] = 0x3, _0x3830d2['getInstanc' + 'e$']()['disp_GameK' + 'ey_atchEve' + 'nt'](_0x5b5578['STOP_JUICE']), _0x3830d2['getInstanc' + 'e$']()['disp_GameK' + 'ey_atchEve' + 'nt'](_0x5b5578['FRUIT_USE_' + 'OVER']), _0x3830d2['getInstanc' + 'e$']()['disp_GameK' + 'ey_atchEve' + 'nt'](_0x5b5578['OVER_JUICE'], this['score$']));
        }
        ['onDestroy']() {
        }
    }
    class _0x1e3d4b extends Laya['Script3D'] {
        constructor() {
            super(), this['minY$'] = -0x1, this['maxY$'] = 0x1, this['topCone$'] = void 0x0, this['bootomMate' + 'rial$'] = void 0x0, this['topMateria' + 'l$'] = void 0x0, this['_color1$'] = void 0x0, this['_color1$'] = void 0x0, this['_color1$'] = void 0x0, this['_topColor$'] = void 0x0, this['_fill1$'] = 0x0, this['_fill2$'] = 0x0, this['_fill3$'] = 0x0, this['rDatas$'] = void 0x0, this['targetFill' + 's$'] = void 0x0, this['color1$'] = new Laya['Vector4'](0x0, 0x0, 0x1, 0x1), this['color2$'] = new Laya['Vector4'](0x1, 0x0, 0x0, 0x1), this['color3$'] = new Laya['Vector4'](0x0, 0x1, 0x0, 0x1), this['fill1$'] = 0x0, this['fill2$'] = 0x0, this['fill3$'] = 0x0, this['topColor$'] = new Laya['Vector4'](0x0, 0x1, 0x0, 0x1);
        }
        static ['create$'](_0x557baa, _0x4f3159, _0xd47f14, _0x1648f0, _0x190172) {
            if (!_0x557baa)
                return;
            let _0x211de3 = _0x557baa['addCompone' + 'nt'](_0x1e3d4b);
            return _0x211de3['setData$'](_0x4f3159, _0xd47f14, _0x1648f0, _0x190172), _0x211de3;
        }
        ['setData$'](_0x190259, _0x514f3, _0x3484ac, _0x3046a5) {
            this['minY$'] = _0x190259, this['maxY$'] = _0x514f3, this['rDatas$'] = _0x3484ac, this['targetFill' + 's$'] = _0x3046a5;
        }
        ['onStart']() {
            this['changeMate' + 'rial$'](), this['createTopC' + 'one$'](), this['monitorEve' + 'nts$']();
        }
        ['monitorEve' + 'nts$']() {
            _0x3830d2['getInstanc' + 'e$']()['addE_GameK' + 'ey_ventLis' + 'tener'](_0x5b5578['FILL_FLUID'], this, this['onFillFlui' + 'd$']), _0x3830d2['getInstanc' + 'e$']()['addE_GameK' + 'ey_ventLis' + 'tener'](_0x5b5578['STOP_JUICE'], this, this['onStopJuic' + 'e$']);
        }
        ['cancelEven' + 'ts$']() {
            _0x3830d2['getInstanc' + 'e$']()['remo_GameK' + 'ey_veEvent' + 'Listener'](_0x5b5578['FILL_FLUID'], this, this['onFillFlui' + 'd$']), _0x3830d2['getInstanc' + 'e$']()['remo_GameK' + 'ey_veEvent' + 'Listener'](_0x5b5578['STOP_JUICE'], this, this['onStopJuic' + 'e$']);
        }
        ['onFillFlui' + 'd$'](_0x3e9c17) {
            0x0 == _0x3e9c17['data']['index'] ? (this['color1$'] = _0x3e9c17['data']['color'], this['fill1$'] = _0x3e9c17['data']['fill']) : 0x1 == _0x3e9c17['data']['index'] ? (this['color2$'] = _0x3e9c17['data']['color'], this['fill2$'] = _0x3e9c17['data']['fill']) : 0x2 == _0x3e9c17['data']['index'] && (this['color3$'] = _0x3e9c17['data']['color'], this['fill3$'] = _0x3e9c17['data']['fill']), this['upEffect$'] || this['createUpEf' + 'fect$'](), this['upEffect$']['setLocalPo' + 'sition'](0x0, this['coneY$'] + 0.1, 0x0), this['upEffect$']['resumeEmis' + 'sion'](), this['upEffect$']['loaded'] && this['upEffect$']['changeEmis' + 'sionColor$'](this['topColor$']['x'], this['topColor$']['y'], this['topColor$']['z'], this['topColor$']['w']);
        }
        ['onStopJuic' + 'e$']() {
            this['upEffect$'] && this['upEffect$']['pauseEmiss' + 'ion']();
        }
        ['createUpEf' + 'fect$']() {
            this['upEffect$'] = _0x42867c['create'](this['owner'], 0x7d1, Laya['Handler']['create'](this, this['onUpEffect' + 'Loaded$']));
        }
        ['onUpEffect' + 'Loaded$']() {
            this['destroyed'] || this['owner']['destroyed'] || this['upEffect$']['changeEmis' + 'sionColor$'](this['topColor$']['x'], this['topColor$']['y'], this['topColor$']['z'], this['topColor$']['w']);
        }
        ['changeMate' + 'rial$']() {
            this['bootomMate' + 'rial$'] = this['owner']['meshRender' + 'er']['sharedMate' + 'rial'] = new _0xc071bb(this['minY$'], this['maxY$']), this['bootomMate' + 'rial$']['fill1'] = this['fill1$'], this['bootomMate' + 'rial$']['fill2'] = this['fill2$'], this['bootomMate' + 'rial$']['fill3'] = this['fill3$'], this['bootomMate' + 'rial$']['tint1'] = this['color1$'], this['bootomMate' + 'rial$']['tint2'] = this['color2$'], this['bootomMate' + 'rial$']['tint3'] = this['color3$'];
        }
        ['createTopC' + 'one$']() {
            this['topCone$'] = this['owner']['addChild'](new Laya['MeshSprite' + '3D'](Laya['PrimitiveM' + 'esh']['createCyli' + 'nder'](0x1, 0.01, 0x64))), this['topMateria' + 'l$'] = this['topCone$']['meshRender' + 'er']['sharedMate' + 'rial'] = new _0x30885c(), this['topCone$']['transform']['localPosit' + 'ion'] = new Laya['Vector3'](0x0, 0x1, 0x0), this['topMateria' + 'l$']['coolor$'] = this['topColor$'], this['onChangeFi' + 'll$']();
        }
        get ['coneR$']() {
            let _0x27d358, _0xa42e1b = this['coneY$'], _0x1c777f = this['rDatas$']['length'];
            for (; --_0x1c777f > -0x1;)
                if ((_0x27d358 = this['rDatas$'][_0x1c777f])['y'] <= _0xa42e1b)
                    return _0x27d358['r'] + 0.0005;
            return 0x0;
        }
        get ['coneY$']() {
            return (this['maxY$'] - this['minY$']) * this['totalFill$'] + this['minY$'];
        }
        ['onChangeFi' + 'll$']() {
            if (!this['topCone$'])
                return;
            let _0x6bf870 = this['coneY$'], _0x39c864 = this['topCone$']['transform']['localPosit' + 'ion'];
            _0x39c864['y'] = _0x6bf870, this['topCone$']['transform']['localPosit' + 'ion'] = _0x39c864;
            let _0x564cab = this['coneR$'];
            if (this['minY$'] == _0x6bf870)
                this['topCone$']['active'] = !0x1;
            else {
                this['topCone$']['active'] = !0x0;
                let _0x5d736d = this['topCone$']['transform']['localScale'];
                _0x5d736d['x'] = _0x564cab, _0x5d736d['z'] = _0x564cab, this['topCone$']['transform']['localScale'] = _0x5d736d;
            }
            this['_fill3$'] > 0x0 ? this['topColor$'] = this['_color3$'] : this['_fill2$'] > 0x0 ? this['topColor$'] = this['_color2$'] : this['topColor$'] = this['_color1$'], this['topMateria' + 'l$']['fill$'] = this['totalFill$'];
        }
        get ['totalFill$']() {
            return Math['min'](0x1, this['_fill1$'] + this['_fill2$'] + this['_fill3$']);
        }
        set ['topColor$'](_0x2012f8) {
            this['_topColor$'] = _0x2012f8, this['topMateria' + 'l$'] && (this['topMateria' + 'l$']['coolor$'] = _0x2012f8);
        }
        get ['topColor$']() {
            return this['_topColor$'];
        }
        set ['color1$'](_0x59252c) {
            this['_color1$'] = _0x59252c, this['bootomMate' + 'rial$'] && (this['bootomMate' + 'rial$']['tint1'] = _0x59252c);
        }
        get ['color1$']() {
            return this['_color1$'];
        }
        set ['color2$'](_0x1ae581) {
            this['_color2$'] = _0x1ae581, this['bootomMate' + 'rial$'] && (this['bootomMate' + 'rial$']['tint2'] = _0x1ae581);
        }
        get ['color2$']() {
            return this['_color2$'];
        }
        set ['color3$'](_0x2b0eed) {
            this['_color3$'] = _0x2b0eed, this['bootomMate' + 'rial$'] && (this['bootomMate' + 'rial$']['tint3'] = _0x2b0eed);
        }
        get ['color3$']() {
            return this['_color3$'];
        }
        set ['fill1$'](_0x19a21f) {
            this['_fill1$'] = _0x19a21f, this['bootomMate' + 'rial$'] && (this['bootomMate' + 'rial$']['fill1'] = _0x19a21f), this['onChangeFi' + 'll$']();
        }
        get ['fill1$']() {
            return this['_fill1$'];
        }
        set ['fill2$'](_0x209c37) {
            this['_fill2$'] = _0x209c37, this['bootomMate' + 'rial$'] && (this['bootomMate' + 'rial$']['fill2'] = _0x209c37), this['onChangeFi' + 'll$']();
        }
        get ['fill2$']() {
            return this['_fill2$'];
        }
        set ['fill3$'](_0x5428fb) {
            this['_fill3$'] = _0x5428fb, this['bootomMate' + 'rial$'] && (this['bootomMate' + 'rial$']['fill3'] = _0x5428fb), this['onChangeFi' + 'll$']();
        }
        get ['fill3$']() {
            return this['_fill3$'];
        }
        get ['fillUIPose' + 's$']() {
            let _0x53b7dc, _0x9b8005, _0x4a81a0, _0x5e525c, _0x1dc853 = this['owner']['transform']['position'], _0x256cb4 = [], _0x492405 = this['targetFill' + 's$']['length'], _0x2caf36 = 0x0;
            for (let _0x3cb163 = 0x0; _0x3cb163 < _0x492405; _0x3cb163++) {
                for (_0x2caf36 += this['targetFill' + 's$'][_0x3cb163], _0x9b8005 = (this['maxY$'] - this['minY$']) * _0x2caf36 + this['minY$'], _0x5e525c = this['rDatas$']['length']; --_0x5e525c > -0x1;)
                    if ((_0x4a81a0 = this['rDatas$'][_0x5e525c])['y'] <= _0x9b8005) {
                        _0x53b7dc = -_0x4a81a0['r'] - 0.0005;
                        break;
                    }
                _0x256cb4['push'](curScene['getUIPos$'](new Laya['Vector3'](_0x1dc853['x'] + _0x53b7dc, _0x9b8005 + _0x1dc853['y'], _0x1dc853['z'])));
            }
            return _0x256cb4;
        }
        ['onDestroy']() {
            this['cancelEven' + 'ts$']();
        }
    }
    class _0xaa53f2 extends _0x2ca6bb {
        constructor() {
            super(), this['viewName$'] = '好友热玩', this['iconWidth'] = 0x50, this['iconMaskSk' + 'in$'] = 'sdk/image_' + 'circle.png', this['backSkin$'] = 'sdk/image_' + 'back.png', this['dataType$'] = 'copyWx';
        }
        static ['create$'](_0x16468e) {
            if (pgdk$['isShowExit' + '$']()) {
                if (pgdk$['hideBanner' + '$'](), Laya['hotPlayUI$']) {
                    Laya['stage']['addChild'](Laya['hotPlayUI$']);
                    let _0x3b6382 = Laya['hotPlayUI$']['addCompone' + 'nt'](_0xaa53f2);
                    _0x3b6382['resetList$'](), _0x3b6382['closeCallb' + 'cak$'] = _0x16468e;
                } else {
                    let _0x974f0b = Laya['stage']['addChild'](new Laya['Box']());
                    _0x974f0b['zOrder'] = 0x3b9ac9ff, _0x974f0b['bgColor'] = '#FF0000', _0x974f0b['name'] = 'HotPlayUI', _0x974f0b['viewName'] = '好友热玩', _0x974f0b['addCompone' + 'nt'](_0x38bfcf);
                    let _0x2df3e2 = _0x974f0b['addCompone' + 'nt'](_0xaa53f2);
                    _0x2df3e2['setWidget$'](_0x974f0b, 0x0, 0x0, 0x0, 0x0), _0x2df3e2['closeCallb' + 'cak$'] = _0x16468e, Laya['hotPlayUI$'] = _0x974f0b;
                }
                return Laya['hotPlayUI$'];
            }
            _0x16468e && _0x16468e();
        }
        ['onStart']() {
            this['initUI$'](), this['executeWhe' + 'nSdkReady$'](this, this['createList' + '$']['bind'](this));
        }
        ['initUI$']() {
            this['createBg$'](), this['createHead' + 'er$'](), this['createBack' + 'Button$']();
        }
        ['addChild'](_0x5fad30) {
            return this['owner']['addChild'](_0x5fad30);
        }
        ['createBg$']() {
            let _0x21c26e = this['addChild'](new Laya['Box']());
            _0x21c26e['bgColor'] = '#FFFFFF', this['setWidget$'](_0x21c26e, 0x0, 0x0, 0x0, 0x0);
        }
        ['createHead' + 'er$']() {
            this['head'] = this['addChild'](new Laya['Box']()), this['head']['bgColor'] = '#F0F0F0', this['head']['height'] = 0x96, this['addChild'](this['head']), this['setWidget$'](this['head'], 0x0, null, 0x0, 0x0);
        }
        ['createBack' + 'Button$']() {
            let _0x496278 = this['head']['addChild'](new Laya['Box']());
            _0x496278['width'] = 0xc8, _0x496278['height'] = 0x64, this['setWidget$'](_0x496278, null, 0x0, 0x0, null);
            let _0x3c2a79 = _0x496278['addChild'](new Laya['Image']());
            _0x3c2a79['left'] = 0x14, _0x3c2a79['centerY'] = 0x0, _0x3c2a79['width'] = 0x19, _0x3c2a79['height'] = 0x2b, _0x3c2a79['skin'] = this['backSkin$'];
            let _0x40af93 = this['createLabe' + 'l$'](_0x496278, 0x1a, '好友热玩', '#000000');
            _0x40af93['left'] = 0x3c, _0x40af93['centerY'] = 0x0, _0x496278['on'](Laya['Event']['CLICK'], this, function () {
                this['active'] = !0x1, this['parent$'] = this['parent'], this['owner']['removeSelf'](), this['closeCallb' + 'cak$'] && this['closeCallb' + 'cak$']();
            }['bind'](this));
        }
        ['resetList$']() {
            this['list$'] && (this['list$']['array'] = pgdk$['unsortedAd' + 's$'](this['dataType$']));
        }
        ['createList' + '$']() {
            this['list$'] = this['addChild'](this['createBase' + 'List$'](!0x1)), this['setWidget$'](this['list$'], 0x96, 0x0, 0x0, 0x0), this['list$']['renderHand' + 'ler'] = new Laya['Handler'](this, this['renderHand' + 'ler$']), this['list$']['itemRender'] = {
                'type': 'Box',
                'props': {
                    'width': 0x2d0,
                    'height': 0x96,
                    'left': 0x0,
                    'right': 0x0
                }
            }, this['resetList$'](), this['createHead' + 'IconSp$']();
        }
        ['createHead' + 'IconSp$']() {
            this['headIconSp' + '$'] = this['list$']['_children'][0x0]['addChild'](new Laya['Sprite']()), this['headIconSp' + '$']['mouseThrou' + 'gh'] = !0x0, this['headIconSp' + '$']['startY'] = 0x54, this['headIconSp' + '$']['pos'](this['list$']['x'] + 0xdc, this['headIconSp' + '$']['startY']), pgdk$['platformHa' + 'ndler$']['getHeadIco' + 'nSp$'](0x32, 0x32, 0x5, this['list$']['itemRender']['props']['height'] - 0x32, this['list$']['array']['length'], 0x3, this['headIconSp' + '$']);
        }
        ['renderHand' + 'ler$'](_0x1dae51, _0x5c6e50) {
            if (0x0 === _0x1dae51['numChildre' + 'n']) {
                let _0x2d17e8 = _0x1dae51['addChild'](new Laya['Box']());
                _0x2d17e8['bgColor'] = '#F0F0F0', _0x2d17e8['height'] = 0x2, this['setWidget$'](_0x2d17e8, null, 0x2, 0x64, 0x0), _0x1dae51['addChild'](_0x2d17e8), _0x1dae51['icon$'] = _0x1dae51['addChild'](new Laya['Image']()), _0x1dae51['icon$']['name'] = 'GameIcon', _0x1dae51['icon$']['x'] = 0x28, _0x1dae51['icon$']['centerY'] = 0.5, _0x1dae51['icon$']['width'] = _0x1dae51['icon$']['height'] = this['iconWidth'], this['setIcon$'](_0x1dae51);
                let _0x426acc = new Laya['Image']();
                _0x426acc['width'] = _0x426acc['height'] = this['iconWidth'], _0x426acc['skin'] = this['iconMaskSk' + 'in$'], _0x1dae51['icon$']['mask'] = _0x426acc, _0x1dae51['title$'] = this['createLabe' + 'l$'](_0x1dae51, 0x18, _0x1dae51['dataSource']['title'], '#000000'), _0x1dae51['title$']['anchorX'] = 0x0, this['setWidget$'](_0x1dae51['title$'], null, null, 0xdc, null), _0x1dae51['title$']['centerY'] = -0xa, _0x1dae51['friendInfo' + '$'] = this['createLabe' + 'l$'](_0x1dae51, 0x12, Math['floor'](0x64 * Math['random']() + 0x3) + '个好友在玩', '#707070'), _0x1dae51['friendInfo' + '$']['anchorX'] = 0x0, this['setWidget$'](_0x1dae51['friendInfo' + '$'], null, null, 0x190, null), _0x1dae51['friendInfo' + '$']['centerY'] = 0x32;
            }
            this['setIcon$'](_0x1dae51), _0x1dae51['title$']['text'] = _0x1dae51['dataSource']['title'], this['registerAd' + 'ClickEvent' + '$'](_0x1dae51, this['viewName$']);
        }
        ['setIcon$'](_0x3e6403) {
            let _0x5bcdb9, _0x1800f9 = _0x3e6403['dataSource']['img'];
            if ('string' == typeof _0x1800f9)
                _0x3e6403['icon$']['skin'] = _0x1800f9;
            else {
                if (Object['keys'](_0x1800f9)['length']) {
                    for (const _0x5dbc9c in _0x1800f9)
                        if (_0x1800f9['hasOwnProp' + 'erty'](_0x5dbc9c)) {
                            const _0xfa51c1 = _0x1800f9[_0x5dbc9c];
                            if ('gifData' === _0x5dbc9c && _0xfa51c1 && Object['keys'](_0xfa51c1)['length']) {
                                let _0x2bbe2c = new _0x2ec5b8({
                                        'width': 0x96,
                                        'height': 0x96
                                    }), _0x3dcf1c = _0x3e6403['icon$']['addChild'](_0x2bbe2c);
                                _0x5bcdb9 = pgdk$['arrayRando' + 'm'](_0xfa51c1), _0x3dcf1c['setImage'](_0x5bcdb9);
                            } else {
                                if ('array' === _0x5dbc9c && _0xfa51c1 && Object['keys'](_0xfa51c1)['length']) {
                                    _0x5bcdb9 = pgdk$['arrayRando' + 'm'](_0xfa51c1), _0x3e6403['icon$']['skin'] = _0x5bcdb9['path'];
                                    break;
                                }
                            }
                        }
                }
            }
        }
    }
    class _0x2daa12 extends Laya['Script3D'] {
        constructor() {
            super(), this['modelId$'] = void 0x0, this['targetFill' + 's$'] = void 0x0, this['strawPoint' + '$'] = void 0x0, this['isPlayingD' + 'rink$'] = void 0x0, this['isPlayingA' + 'dorn$'] = void 0x0, this['tempV3$'] = void 0x0, this['adornAnimT' + '$'] = 0x320, this['adornAnimS' + 'tartY$'] = 0x5, this['adornAnimC' + 'ountT$'] = 0x0, this['adornTaget' + 'Y$'] = 0x0;
        }
        static ['create$'](_0x631dc3, _0x5aeae1, _0x283200, _0x6ae7a2) {
            let _0x2a0bb6 = _0x631dc3['addChild'](new Laya['Sprite3D']());
            _0x2a0bb6['transform']['localPosit' + 'ion'] = _0x283200['clone']();
            let _0xc264bd = _0x2a0bb6['addCompone' + 'nt'](_0x2daa12);
            return _0xc264bd['setData$'](_0x5aeae1, _0x6ae7a2), _0xc264bd;
        }
        ['setData$'](_0x3d69ad, _0x20c1d7) {
            this['modelId$'] = _0x3d69ad, this['targetFill' + 's$'] = _0x20c1d7;
        }
        ['onStart']() {
            this['createMode' + 'l$']();
        }
        ['createMode' + 'l$']() {
            this['modelCtr$'] = _0x42867c['create'](this['owner'], this['modelId$'], Laya['Handler']['create'](this, this['onModelLoa' + 'ded$']));
        }
        ['onModelLoa' + 'ded$']() {
            if (this['destroyed'])
                return;
            let _0x2212fd = _0x1faf3f['getC_GameK' + 'ey_hildDee' + 'p'](this['modelCtr$']['sprite'], 'Drink'), _0x5ee53a = [], _0x1e2b62 = {}, _0x42ae3f = [];
            _0x2212fd['meshFilter']['sharedMesh']['getPositio' + 'ns'](_0x42ae3f);
            let _0x4f9132, _0x3fb052, _0x5a5d2e, _0x3bf94b, _0x305235, _0x320fe3, _0x5cea3b, _0x3a46e7 = _0x42ae3f['length'], _0x1f48de = void 0x0, _0x22b1ed = void 0x0;
            for (; --_0x3a46e7 > -0x1;)
                for (_0x4f9132 = _0x42ae3f[_0x3a46e7], (null == _0x1f48de || _0x1f48de > _0x4f9132['y']) && (_0x1f48de = _0x4f9132['y']), (null == _0x22b1ed || _0x22b1ed < _0x4f9132['y']) && (_0x22b1ed = _0x4f9132['y']), _0x3bf94b = 0x2 * (_0x1e2b62[_0x4f9132['y']] || 0x0), _0x5cea3b == _0x4f9132['y'] && 0x0 != _0x3a46e7 || (null != _0x5cea3b && _0x5ee53a['push']({
                        'y': _0x5cea3b,
                        'r': _0x1e2b62[_0x5cea3b] || 0x0
                    }), _0x5cea3b = _0x4f9132['y']), _0x305235 = _0x3bf94b * _0x3bf94b, _0x320fe3 = _0x3a46e7; --_0x320fe3 > -0x1;)
                    (_0x3fb052 = _0x42ae3f[_0x320fe3])['y'] == _0x4f9132['y'] && ((_0x5a5d2e = Math['pow'](_0x3fb052['x'] - _0x4f9132['x'], 0x2) + Math['pow'](_0x3fb052['z'] - _0x4f9132['z'], 0x2)) < _0x305235 || (_0x1e2b62[_0x4f9132['y']] = 0.5 * Math['sqrt'](_0x5a5d2e)));
            this['fluidCtr$'] = _0x1e3d4b['create$'](_0x2212fd, _0x1f48de, _0x22b1ed, _0x5ee53a, this['targetFill' + 's$']), this['lastFluidC' + 'tr$'] && (this['fluidCtr$']['color1$'] = this['lastFluidC' + 'tr$']['color1$'], this['fluidCtr$']['color2$'] = this['lastFluidC' + 'tr$']['color2$'], this['fluidCtr$']['color3$'] = this['lastFluidC' + 'tr$']['color3$'], this['fluidCtr$']['topColor$'] = this['lastFluidC' + 'tr$']['topColor$'], this['fluidCtr$']['fill1$'] = this['lastFluidC' + 'tr$']['fill1$'], this['fluidCtr$']['fill2$'] = this['lastFluidC' + 'tr$']['fill2$'], this['fluidCtr$']['fill3$'] = this['lastFluidC' + 'tr$']['fill3$'], this['lastFluidC' + 'tr$'] = void 0x0), this['strawPoint' + '$'] = _0x1faf3f['getC_GameK' + 'ey_hildDee' + 'p'](this['modelCtr$']['sprite'], 'StrawPoint'), this['strawPoint' + '$']['active'] = !0x1;
        }
        ['changeMode' + 'l$'](_0x173371) {
            this['modelCtr$'] && this['modelCtr$']['dispose'](), this['modelCtr$'] = void 0x0, this['lastFluidC' + 'tr$'] = this['fluidCtr$'], this['modelId$'] = _0x173371, this['createMode' + 'l$']();
        }
        ['changeAdor' + 'n$'](_0x2cf4c9) {
            let _0x46a970 = _0x1faf3f['getC_GameK' + 'ey_hildDee' + 'p'](this['modelCtr$']['sprite'], 'Slices');
            this['adornModel' + 'Ctr$'] = _0x42867c['create'](_0x46a970, _0x2cf4c9, Laya['Handler']['create'](this, this['delayAdorn' + 'Over$']));
        }
        ['changePare' + 'nt$'](_0x3da62a) {
            let _0x29aa00 = this['owner']['transform']['getWorldLo' + 'ssyScale']()['clone']();
            _0x3da62a['addChild'](this['owner']), this['owner']['transform']['localPosit' + 'ion'] = new Laya['Vector3'](), this['owner']['transform']['localRotat' + 'ionEuler'] = new Laya['Vector3'](), this['owner']['transform']['setWorldLo' + 'ssyScale'](_0x29aa00), this['fluidCtr$']['bootomMate' + 'rial$']['renderQueu' + 'e'] = Laya['Material']['RENDERQUEU' + 'E_TRANSPAR' + 'ENT'];
        }
        ['playDrinkA' + 'nim$']() {
            this['isPlayingD' + 'rink$'] = !0x0, this['drinkSpeed' + '$'] = 0.001;
        }
        ['refreshDri' + 'nkAnim$']() {
            this['isPlayingD' + 'rink$'] && (this['fluidCtr$']['fill3$'] > 0x0 ? this['fluidCtr$']['fill3$'] = Math['max'](this['fluidCtr$']['fill3$'] - _0x3e110a['getInstanc' + 'e$']()['deltaTime$'] * this['drinkSpeed' + '$'], 0x0) : this['fluidCtr$']['fill2$'] > 0x0 ? this['fluidCtr$']['fill2$'] = Math['max'](this['fluidCtr$']['fill2$'] - _0x3e110a['getInstanc' + 'e$']()['deltaTime$'] * this['drinkSpeed' + '$'], 0x0) : this['fluidCtr$']['fill1$'] > 0x0 && (this['fluidCtr$']['fill1$'] = Math['max'](this['fluidCtr$']['fill1$'] - _0x3e110a['getInstanc' + 'e$']()['deltaTime$'] * this['drinkSpeed' + '$'], 0x0)), 0x0 == this['fluidCtr$']['totalFill$'] && (this['isPlayingD' + 'rink$'] = !0x1));
        }
        ['refreshAdo' + 'rnAnim$']() {
            this['isPlayingA' + 'dorn$'] && (this['adornAnimC' + 'ountT$'] += _0x3e110a['getInstanc' + 'e$']()['deltaTime$'], this['tempV3$'] = this['adornModel' + 'Ctr$']['sprite']['transform']['position'], this['tempV3$']['y'] = Math['max'](0x0, 0x1 - this['adornAnimC' + 'ountT$'] / this['adornAnimT' + '$']) * this['adornAnimS' + 'tartY$'] + this['adornTaget' + 'Y$'], this['adornModel' + 'Ctr$']['sprite']['transform']['position'] = this['tempV3$'], this['adornAnimC' + 'ountT$'] > this['adornAnimT' + '$'] && (this['isPlayingA' + 'dorn$'] = !0x1, Laya['timer']['once'](0x1f4, this, this['onAdornOve' + 'r$'])));
        }
        ['onUpdate']() {
            this['refreshDri' + 'nkAnim$'](), this['refreshAdo' + 'rnAnim$']();
        }
        ['delayAdorn' + 'Over$']() {
            this['isPlayingA' + 'dorn$'] = !0x0, this['tempV3$'] = this['adornModel' + 'Ctr$']['sprite']['transform']['position'], this['adornTaget' + 'Y$'] = this['tempV3$']['y'], this['tempV3$']['y'] += this['adornAnimS' + 'tartY$'], this['adornModel' + 'Ctr$']['sprite']['transform']['position'] = this['tempV3$'];
        }
        ['onAdornOve' + 'r$']() {
            this['strawPoint' + '$']['active'] = !0x0, window['wx'] && !window['tt'] && 0x3 == _0xe6399d['getInstanc' + 'e$']()['drinkData$']['getTotalSc' + 'ore$']() ? _0xaa53f2['create$'](this['sendAdornO' + 'verEvent$']['bind'](this)) : this['sendAdornO' + 'verEvent$']();
        }
        ['sendAdornO' + 'verEvent$']() {
            _0x3830d2['getInstanc' + 'e$']()['disp_GameK' + 'ey_atchEve' + 'nt'](_0x5b5578['ADORN_OVER'], this);
        }
        ['onDestroy']() {
            this['modelCtr$'] && this['modelCtr$']['dispose'](), this['modelCtr$'] = void 0x0, this['adornModel' + 'Ctr$'] && this['adornModel' + 'Ctr$']['dispose'](), this['adornModel' + 'Ctr$'] = void 0x0;
        }
    }
    class _0x8abaac extends Laya['Script3D'] {
        constructor() {
            super(), this['targetFill' + 's$'] = void 0x0, this['modelId$'] = void 0x0, this['modelCtr$'] = void 0x0, this['glassCupCt' + 'r$'] = void 0x0, this['transform$'] = void 0x0, this['tempEuler$'] = void 0x0, this['isOpenJuic' + 'eMode$'] = void 0x0, this['dropEffect' + 'Model$'] = void 0x0, this['brokenEffe' + 'ctModel$'] = void 0x0, this['brokenBits' + '$'] = void 0x0, this['brokenBitU' + 'pSpacing$'] = 0xc8, this['lastBroken' + 'BitUpT$'] = 0x0, this['brokenAnim' + 'Bits$'] = [], this['brokenAnim' + 'TArea$'] = [
                0x12c,
                0x320
            ], this['brokenBitS' + 'caleArea$'] = [
                0.15,
                0.2
            ], this['brokenAnim' + 'G$'] = 0.000007, this['brokenRota' + 'teSpeed$'] = 0.5;
        }
        static ['create$'](_0x143235, _0x282291) {
            let _0x35eaca = _0x143235['addChild'](new Laya['Sprite3D']());
            return _0x35eaca['transform']['position'] = new Laya['Vector3'](0x0, 0xa, -0x5), _0x35eaca['addCompone' + 'nt'](_0x8abaac)['setData$'](_0x282291), _0x35eaca;
        }
        ['setData$'](_0x462334) {
            this['transform$'] = this['owner']['transform'], this['targetFill' + 's$'] = _0x462334;
        }
        ['onStart']() {
            this['refreshMod' + 'elData$'](), this['createMode' + 'l$'](), this['createCup$'](), this['createBott' + 'om$'](), this['monitorEve' + 'nts$']();
        }
        ['refreshMod' + 'elData$']() {
            let _0x256257 = _0xe6399d['getInstanc' + 'e$']()['userData$']['curJuicerI' + 'd'], _0x1f2e26 = D['juicerBasi' + 'c'][_0x256257];
            return _0x1f2e26['juicerMode' + 'lId'] != this['modelId$'] && (this['modelId$'] = _0x1f2e26['juicerMode' + 'lId'], !0x0);
        }
        ['createMode' + 'l$']() {
            this['modelCtr$'] = _0x42867c['create'](this['owner'], this['modelId$'], Laya['Handler']['create'](this, this['onModelLoa' + 'ded$']));
        }
        ['createCup$']() {
            this['glassCupCt' + 'r$'] = _0x2daa12['create$'](this['owner'], 0x6a, new Laya['Vector3'](0x0, 0x0, 0x0), this['targetFill' + 's$']);
        }
        ['createBott' + 'om$']() {
            this['bottomMode' + 'l$'] = _0x42867c['create'](this['owner'], 0x12d), this['bottomMode' + 'l$']['setLocalPo' + 'sition'](0x0, -0.8, -0x3), this['bottomMode' + 'l$']['setLocalSc' + 'ale'](0xa);
        }
        ['onModelLoa' + 'ded$'](_0x560276) {
            if (this['owner']['destroyed'])
                return;
            let _0x50d183 = _0x1faf3f['getC_GameK' + 'ey_hildDee' + 'p'](this['modelCtr$']['sprite'], 'BladePoint');
            this['_cutY$'] = _0x50d183['transform']['localPosit' + 'ion']['y'];
            let _0x57b88a = _0x1faf3f['getC_GameK' + 'ey_hildDee' + 'p'](this['modelCtr$']['sprite'], 'TopPoint');
            this['_topY$'] = _0x57b88a['transform']['localPosit' + 'ion']['y'];
            let _0x27d175 = _0x1faf3f['getC_GameK' + 'ey_hildDee' + 'p'](this['modelCtr$']['sprite'], 'LowestPoin' + 't');
            this['_lowY$'] = _0x27d175['transform']['localPosit' + 'ion']['y'], this['blade$'] = _0x1faf3f['getC_GameK' + 'ey_hildDee' + 'p'](this['modelCtr$']['sprite'], 'Blade'), this['modelCtr$']['stopAnim$']();
        }
        ['onChangeBl' + 'ender$'](_0x1d0fb6) {
            this['refreshMod' + 'elData$']() && (this['modelCtr$'] && this['modelCtr$']['dispose'](), this['modelCtr$'] = void 0x0, this['createMode' + 'l$']());
        }
        get ['isLoaded$']() {
            return this['modelCtr$'] && this['modelCtr$']['loaded'];
        }
        ['getCollier' + 'Pos$']() {
            let _0x3fb5bd = _0x1faf3f['getC_GameK' + 'ey_hildDee' + 'p'](this['modelCtr$']['sprite'], 'BladePoint');
            return _0x3fb5bd ? _0x3fb5bd['transform']['position']['clone']() : 0x0;
        }
        get ['lowY$']() {
            return this['owner']['transform']['position']['y'] + this['_lowY$'];
        }
        get ['topY$']() {
            return this['owner']['transform']['position']['y'] + this['_topY$'];
        }
        get ['cutY$']() {
            return this['owner']['transform']['position']['y'] + this['_cutY$'];
        }
        ['monitorEve' + 'nts$']() {
            _0x3830d2['getInstanc' + 'e$']()['addE_GameK' + 'ey_ventLis' + 'tener'](_0x5b5578['ADORN_STAR' + 'T'], this, this['onAdornSta' + 'rt$']), _0x3830d2['getInstanc' + 'e$']()['addE_GameK' + 'ey_ventLis' + 'tener'](_0x5b5578['CHANGE_CUP'], this, this['onChangeCu' + 'p$']), _0x3830d2['getInstanc' + 'e$']()['addE_GameK' + 'ey_ventLis' + 'tener'](_0x5b5578['CHANGE_ADO' + 'RN'], this, this['onChangeAd' + 'orn$']), _0x3830d2['getInstanc' + 'e$']()['addE_GameK' + 'ey_ventLis' + 'tener'](_0x5b5578['ON_START_G' + 'AME'], this, this['onOpenJuic' + 'eMode$']), _0x3830d2['getInstanc' + 'e$']()['addE_GameK' + 'ey_ventLis' + 'tener'](_0x5b5578['CUR_JUICER' + '_CHANGE'], this, this['onChangeBl' + 'ender$']), _0x3830d2['getInstanc' + 'e$']()['addE_GameK' + 'ey_ventLis' + 'tener'](_0x5b5578['FILL_FLUID'], this, this['onFillFlui' + 'd$']), _0x3830d2['getInstanc' + 'e$']()['addE_GameK' + 'ey_ventLis' + 'tener'](_0x5b5578['STOP_JUICE'], this, this['onStopJuic' + 'e$']);
        }
        ['cancleEven' + 'ts$']() {
            _0x3830d2['getInstanc' + 'e$']()['remo_GameK' + 'ey_veEvent' + 'Listener'](_0x5b5578['ADORN_STAR' + 'T'], this, this['onAdornSta' + 'rt$']), _0x3830d2['getInstanc' + 'e$']()['remo_GameK' + 'ey_veEvent' + 'Listener'](_0x5b5578['CHANGE_CUP'], this, this['onChangeCu' + 'p$']), _0x3830d2['getInstanc' + 'e$']()['remo_GameK' + 'ey_veEvent' + 'Listener'](_0x5b5578['CHANGE_ADO' + 'RN'], this, this['onChangeAd' + 'orn$']), _0x3830d2['getInstanc' + 'e$']()['remo_GameK' + 'ey_veEvent' + 'Listener'](_0x5b5578['ON_START_G' + 'AME'], this, this['onOpenJuic' + 'eMode$']), _0x3830d2['getInstanc' + 'e$']()['remo_GameK' + 'ey_veEvent' + 'Listener'](_0x5b5578['CUR_JUICER' + '_CHANGE'], this, this['onChangeBl' + 'ender$']), _0x3830d2['getInstanc' + 'e$']()['remo_GameK' + 'ey_veEvent' + 'Listener'](_0x5b5578['FILL_FLUID'], this, this['onFillFlui' + 'd$']), _0x3830d2['getInstanc' + 'e$']()['remo_GameK' + 'ey_veEvent' + 'Listener'](_0x5b5578['STOP_JUICE'], this, this['onStopJuic' + 'e$']);
        }
        ['onFillFlui' + 'd$'](_0x5d5763) {
            this['dropEffect' + 'Model$'] || this['createDrop' + 'Effect$'](), this['brokenEffe' + 'ctModel$'] || this['createBrok' + 'enEffect$'](), this['dropEffect' + 'Model$']['resumeEmis' + 'sion'](), this['brokenEffe' + 'ctModel$']['resumeEmis' + 'sion'](), this['askUpABit$'](), this['dropEffect' + 'Color$'] != _0x5d5763['data']['color'] && (this['dropEffect' + 'Color$'] = _0x5d5763['data']['color'], this['dropEffect' + 'Model$']['loaded'] && this['refreshDro' + 'pEffectCol' + 'or$'](), this['brokenEffe' + 'ctModel$']['loaded'] && this['refreshBro' + 'kenEffectC' + 'olor$']());
        }
        ['askUpABit$']() {
            if (!this['brokenBits' + '$'])
                return;
            let _0x40b493 = Laya['timer']['currTimer'];
            if (_0x40b493 - this['lastBroken' + 'BitUpT$'] < this['brokenBitU' + 'pSpacing$'])
                return;
            this['lastBroken' + 'BitUpT$'] = _0x40b493;
            let _0x361e9b = this['brokenBits' + '$']['length'];
            if (0x0 == _0x361e9b)
                return;
            let _0x5107ab = Math['floor'](Math['random']() * _0x361e9b), _0x578697 = this['brokenBits' + '$'][_0x5107ab];
            _0x578697['animT$'] = _0x1faf3f['floa_GameK' + 'ey_tRange'](this['brokenAnim' + 'TArea$'][0x0], this['brokenAnim' + 'TArea$'][0x1]), _0x578697['animTQ$'] = _0x578697['animT$'] * _0x578697['animT$'], _0x578697['h'] = 0.5 * _0x578697['animTQ$'] * this['brokenAnim' + 'G$'], _0x578697['countT$'] = 0x0, _0x578697['rotateSpee' + 'd$'] = _0x1faf3f['floa_GameK' + 'ey_tRange'](-this['brokenRota' + 'teSpeed$'], this['brokenRota' + 'teSpeed$']);
            let _0x3cc773 = _0x1faf3f['floa_GameK' + 'ey_tRange'](this['brokenBitS' + 'caleArea$'][0x0], this['brokenBitS' + 'caleArea$'][0x1]);
            _0x578697['transform']['localScale'] = new Laya['Vector3'](_0x3cc773, _0x3cc773, _0x3cc773), _0x578697['active'] = !0x0, this['brokenBits' + '$']['splice'](_0x5107ab, 0x1), this['brokenAnim' + 'Bits$']['push'](_0x578697);
        }
        ['refreshBit' + 'Anim$']() {
            let _0x48f24d = this['brokenAnim' + 'Bits$']['length'];
            if (0x0 == _0x48f24d)
                return;
            let _0x4fffce, _0x34837e, _0x2f1250, _0xdf422b, _0x2c97f5 = _0x3e110a['getInstanc' + 'e$']()['deltaTime$'];
            for (; --_0x48f24d > -0x1;)
                _0x2f1250 = (_0x4fffce = this['brokenAnim' + 'Bits$'][_0x48f24d])['transform']['localPosit' + 'ion'], (_0xdf422b = _0x4fffce['transform']['localRotat' + 'ionEuler'])['z'] += _0x2c97f5 * _0x4fffce['rotateSpee' + 'd$'], _0x4fffce['countT$'] += _0x2c97f5, _0x34837e = _0x4fffce['countT$'] / _0x4fffce['animT$'], _0x2f1250['y'] = _0x4fffce['h'] * Math['max'](0x0, _0x34837e > 0.5 ? 0x1 - _0x34837e : _0x34837e), _0x4fffce['transform']['localPosit' + 'ion'] = _0x2f1250, _0x4fffce['transform']['localRotat' + 'ionEuler'] = _0xdf422b, _0x4fffce['countT$'] >= _0x4fffce['animT$'] && (_0x4fffce['active'] = !0x1, this['brokenAnim' + 'Bits$']['splice'](_0x48f24d, 0x1), this['brokenBits' + '$']['push'](_0x4fffce));
        }
        ['onStopJuic' + 'e$']() {
            this['dropEffect' + 'Model$'] && this['dropEffect' + 'Model$']['pauseEmiss' + 'ion'](), this['brokenEffe' + 'ctModel$'] && this['brokenEffe' + 'ctModel$']['pauseEmiss' + 'ion']();
        }
        ['createDrop' + 'Effect$']() {
            let _0x268875 = _0x1faf3f['getC_GameK' + 'ey_hildDee' + 'p'](this['modelCtr$']['sprite'], 'StreamPoin' + 't');
            this['dropEffect' + 'Model$'] = _0x42867c['create'](_0x268875, 0x7d0, Laya['Handler']['create'](this, this['onDropEffe' + 'ctLoaded$'])), this['dropEffect' + 'Model$']['setLocalPo' + 'sition'](0x0, 0x0, 0x0);
        }
        ['createBrok' + 'enEffect$']() {
            let _0xcc4d5d = _0x1faf3f['getC_GameK' + 'ey_hildDee' + 'p'](this['modelCtr$']['sprite'], 'BladePoint');
            this['brokenEffe' + 'ctModel$'] = _0x42867c['create'](_0xcc4d5d, 0x7d2, Laya['Handler']['create'](this, this['onBrokenEf' + 'fectLoaded' + '$'])), this['brokenEffe' + 'ctModel$']['setLocalPo' + 'sition'](0x0, 0x0, 0x0);
        }
        ['onDropEffe' + 'ctLoaded$']() {
            this['destroyed'] || this['owner']['destroyed'] || this['dropEffect' + 'Color$'] && this['refreshDro' + 'pEffectCol' + 'or$']();
        }
        ['refreshDro' + 'pEffectCol' + 'or$']() {
            this['dropEffect' + 'Model$']['changeEmis' + 'sionColor$'](this['dropEffect' + 'Color$']['x'], this['dropEffect' + 'Color$']['y'], this['dropEffect' + 'Color$']['z'], this['dropEffect' + 'Color$']['w']);
        }
        ['onBrokenEf' + 'fectLoaded' + '$']() {
            if (this['destroyed'] || this['owner']['destroyed'])
                return;
            this['brokenBits' + '$'] = _0x1faf3f['getC_GameK' + 'ey_hildArr' + 'ayDeep'](this['brokenEffe' + 'ctModel$']['sprite'], 'bit');
            let _0x18f023 = this['brokenBits' + '$'] ? this['brokenBits' + '$']['length'] : 0x0;
            for (; --_0x18f023 > -0x1;)
                this['brokenBits' + '$'][_0x18f023]['active'] = !0x1;
            this['dropEffect' + 'Color$'] && this['refreshBro' + 'kenEffectC' + 'olor$']();
        }
        ['refreshBro' + 'kenEffectC' + 'olor$']() {
            this['brokenEffe' + 'ctModel$']['changeEmis' + 'sionColor$'](this['dropEffect' + 'Color$']['x'], this['dropEffect' + 'Color$']['y'], this['dropEffect' + 'Color$']['z'], this['dropEffect' + 'Color$']['w']);
            let _0xf9bcf8 = this['brokenBits' + '$'] ? this['brokenBits' + '$']['length'] : 0x0;
            for (; --_0xf9bcf8 > -0x1;)
                _0x42867c['chan_GameK' + 'ey_geMater' + 'ialColor'](this['brokenBits' + '$'][_0xf9bcf8], 0.7 * this['dropEffect' + 'Color$']['x'], 0.7 * this['dropEffect' + 'Color$']['y'], 0.7 * this['dropEffect' + 'Color$']['z'], this['dropEffect' + 'Color$']['w']);
            for (_0xf9bcf8 = this['brokenAnim' + 'Bits$'] ? this['brokenAnim' + 'Bits$']['length'] : 0x0; --_0xf9bcf8 > -0x1;)
                _0x42867c['chan_GameK' + 'ey_geMater' + 'ialColor'](this['brokenAnim' + 'Bits$'][_0xf9bcf8], 0.7 * this['dropEffect' + 'Color$']['x'], 0.7 * this['dropEffect' + 'Color$']['y'], 0.7 * this['dropEffect' + 'Color$']['z'], this['dropEffect' + 'Color$']['w']);
        }
        ['onOpenJuic' + 'eMode$']() {
            this['modelCtr$']['playAnim']('Cutting', !0x0), this['isOpenJuic' + 'eMode$'] = !0x0;
        }
        ['onAdornSta' + 'rt$']() {
            this['modelCtr$'] && this['modelCtr$']['setActive'](!0x1);
        }
        ['onChangeCu' + 'p$'](_0x32df91) {
            this['glassCupCt' + 'r$'] && this['glassCupCt' + 'r$']['changeMode' + 'l$'](_0x32df91['data']);
        }
        ['onChangeAd' + 'orn$'](_0x39f194) {
            this['glassCupCt' + 'r$'] && this['glassCupCt' + 'r$']['changeAdor' + 'n$'](_0x39f194['data']);
        }
        ['onUpdate']() {
            this['rotateBlad' + 'e$'](), this['refreshBit' + 'Anim$']();
        }
        ['rotateBlad' + 'e$']() {
            this['blade$'] && !this['blade$']['destroyed'] && this['isOpenJuic' + 'eMode$'] && (this['tempEuler$'] = this['blade$']['transform']['localRotat' + 'ionEuler'], this['tempEuler$']['y'] += 0x1 * _0x3e110a['getInstanc' + 'e$']()['deltaTime$'], this['blade$']['transform']['localRotat' + 'ionEuler'] = this['tempEuler$']);
        }
        ['onDestroy']() {
            this['cancleEven' + 'ts$'](), this['modelCtr$'] && this['modelCtr$']['dispose'](), this['modelCtr$'] = void 0x0, this['dropEffect' + 'Model$'] && this['dropEffect' + 'Model$']['dispose'](), this['dropEffect' + 'Model$'] = void 0x0, this['bottomMode' + 'l$'] && this['bottomMode' + 'l$']['dispose'](), this['bottomMode' + 'l$'] = void 0x0;
        }
    }
    class _0x28cf19 extends Laya['Script3D'] {
        constructor() {
            super(), this['initData$']();
        }
        ['initData$']() {
            this['curFruidIn' + 'dex$'] = 0x0, this['curFruitId' + '$'] = void 0x0, this['maskCtr$'] = void 0x0, this['curMission' + 'Id$'] = _0xe6399d['getInstanc' + 'e$']()['userData$']['mission$'], this['curMission' + 'Progress$'] = _0xe6399d['getInstanc' + 'e$']()['userData$']['missionPro' + 'gress$'], this['drinkDataM' + 'g$'] = _0xe6399d['getInstanc' + 'e$']()['drinkData$'], this['curMission' + 'Data$'] = this['drinkDataM' + 'g$']['getMission' + 'DataByMiss' + 'ionId$'](this['curMission' + 'Id$']), this['drinkConfi' + 'g$'] = this['drinkDataM' + 'g$']['getDrinkDa' + 'taByDrinkI' + 'd$'](this['curMission' + 'Data$']['drinkArr'][this['curMission' + 'Progress$'] - 0x1]), this['isPlayingS' + 'hake$'] = !0x1;
        }
        static ['create$'](_0x176d00, _0x5ed3cb) {
            let _0x20b6e = _0x176d00['addChild'](new Laya['Sprite3D']())['addCompone' + 'nt'](_0x28cf19);
            return _0x20b6e['setData$'](_0x5ed3cb), _0x20b6e;
        }
        ['setData$'](_0x4338f5) {
            this['loadedCall' + 'back$'] = _0x4338f5;
        }
        ['onStart']() {
            this['createHand' + '$'](), this['createBlen' + 'der$'](), this['monitorEve' + 'nts$']();
        }
        ['createHand' + '$']() {
            this['hand$'] = _0x55756d['create$'](this['owner'], this['onHandLoad' + 'ed$']['bind'](this)), this['handCtr$'] = this['hand$']['getCompone' + 'nt'](_0x55756d), this['hand$']['active'] = !0x1;
        }
        ['onHandLoad' + 'ed$']() {
            this['checkLoade' + 'd$']();
        }
        ['checkLoade' + 'd$']() {
            this['loaded$'] || (this['loaded$'] = this['handCtr$'] && this['handCtr$']['loaded$'], this['loaded$'] && (this['loadedCall' + 'back$'] && this['loadedCall' + 'back$'](), this['loadedCall' + 'back$'] = void 0x0));
        }
        ['createFrui' + 't$']() {
            this['curFruidIn' + 'dex$'] >= this['drinkConfi' + 'g$']['targetFill']['length'] || (this['hand$']['active'] = !0x0, this['curFruit$'] && this['curFruit$']['destroy'](), this['curFruit$'] = _0x452a47['create$'](this['hand$'], this['curFruitId' + '$'], this['drinkConfi' + 'g$']['targetFill'][this['curFruidIn' + 'dex$']], this['curFruidIn' + 'dex$'], this['onFruitLoa' + 'ded$']['bind'](this)), this['curFruitCt' + 'r$'] = this['curFruit$']['getCompone' + 'nt'](_0x452a47), this['curFruidIn' + 'dex$']++);
        }
        ['onFruitLoa' + 'ded$']() {
            this['refreshHan' + 'dStartPos$']();
            let _0x19c197 = this['curBlender' + 'Ctr$']['topY$'], _0x522120 = this['curBlender' + 'Ctr$']['owner']['transform']['position'], _0x2856fa = this['curFruitCt' + 'r$'] && this['curFruitCt' + 'r$']['canJuice$'] ? this['curFruitCt' + 'r$']['bootomY$'] - this['curFruitCt' + 'r$']['owner']['transform']['position']['y'] : 0x0;
            this['handCtr$'] && this['handCtr$']['onCreatedF' + 'ruit$'](_0x522120['x'], _0x19c197 + 0x5 - _0x2856fa, _0x522120['z']), this['handCtr$'] && this['handCtr$']['askMoveToS' + 'tart$']();
        }
        ['createBlen' + 'der$']() {
            this['curBlender' + '$'] = _0x8abaac['create$'](this['owner'], this['drinkConfi' + 'g$']['targetFill']), this['curBlender' + 'Ctr$'] = this['curBlender' + '$']['getCompone' + 'nt'](_0x8abaac);
        }
        ['refreshHan' + 'dStartPos$']() {
            if (!this['handCtr$'] || !this['handCtr$']['loaded$'])
                return;
            if (!this['curBlender' + 'Ctr$'] || !this['curBlender' + 'Ctr$']['isLoaded$'])
                return;
            let _0x268c70 = this['curBlender' + 'Ctr$']['topY$'], _0x45323c = this['curBlender' + 'Ctr$']['owner']['transform']['position'];
            if (this['curFruitCt' + 'r$'] && this['curFruitCt' + 'r$']['canJuice$']) {
                let _0x5e0515 = this['curBlender' + 'Ctr$']['lowY$'], _0xd74b23 = _0x268c70 + (this['curFruitCt' + 'r$'] && this['curFruitCt' + 'r$']['canJuice$'] ? this['curFruitCt' + 'r$']['bootomY$'] - this['curFruitCt' + 'r$']['owner']['transform']['position']['y'] : 0x0) - _0x5e0515;
                _0xd74b23 < 0x0 ? this['handCtr$']['setDefault' + 'PosY$'](_0x45323c['x'], _0x268c70 - _0xd74b23, _0x45323c['z']) : this['handCtr$']['setDefault' + 'PosY$'](_0x45323c['x'], _0x268c70, _0x45323c['z']);
            } else {
                let _0x580765 = this['curFruitCt' + 'r$'] && this['curFruitCt' + 'r$']['canJuice$'] ? this['curFruitCt' + 'r$']['bootomY$'] - this['curFruitCt' + 'r$']['owner']['transform']['position']['y'] : 0x0;
                this['handCtr$'] && this['handCtr$']['setDefault' + 'PosY$'](_0x45323c['x'], _0x268c70 + 0x5 - _0x580765, _0x45323c['z']);
            }
        }
        ['monitorEve' + 'nts$']() {
            _0x3830d2['getInstanc' + 'e$']()['addE_GameK' + 'ey_ventLis' + 'tener'](_0x5b5578['INPUT_MOUS' + 'E_DOWN'], this, this['onInputMou' + 'seDown$']), _0x3830d2['getInstanc' + 'e$']()['addE_GameK' + 'ey_ventLis' + 'tener'](_0x5b5578['INPUT_MOUS' + 'E_UP'], this, this['onInputMou' + 'seUp$']), _0x3830d2['getInstanc' + 'e$']()['addE_GameK' + 'ey_ventLis' + 'tener'](_0x5b5578['START_JUIC' + 'E'], this, this['onStartJui' + 'ce$']), _0x3830d2['getInstanc' + 'e$']()['addE_GameK' + 'ey_ventLis' + 'tener'](_0x5b5578['STOP_JUICE'], this, this['onStopJuic' + 'e$']), _0x3830d2['getInstanc' + 'e$']()['addE_GameK' + 'ey_ventLis' + 'tener'](_0x5b5578['OVER_JUICE'], this, this['onOverJuic' + 'e$']), _0x3830d2['getInstanc' + 'e$']()['addE_GameK' + 'ey_ventLis' + 'tener'](_0x5b5578['FRUIT_SEND'], this, this['onSelectFr' + 'uit$']), _0x3830d2['getInstanc' + 'e$']()['addE_GameK' + 'ey_ventLis' + 'tener'](_0x5b5578['ARRIVE_JUI' + 'CE_POS'], this, this['onCameraAr' + 'riveJuiceP' + 'os$']), _0x3830d2['getInstanc' + 'e$']()['addE_GameK' + 'ey_ventLis' + 'tener'](_0x5b5578['ADORN_OVER'], this, this['onAdornEnd' + '$']);
        }
        ['cancleEven' + 'ts$']() {
            _0x3830d2['getInstanc' + 'e$']()['remo_GameK' + 'ey_veEvent' + 'Listener'](_0x5b5578['INPUT_MOUS' + 'E_DOWN'], this, this['onInputMou' + 'seDown$']), _0x3830d2['getInstanc' + 'e$']()['remo_GameK' + 'ey_veEvent' + 'Listener'](_0x5b5578['INPUT_MOUS' + 'E_UP'], this, this['onInputMou' + 'seUp$']), _0x3830d2['getInstanc' + 'e$']()['remo_GameK' + 'ey_veEvent' + 'Listener'](_0x5b5578['START_JUIC' + 'E'], this, this['onStartJui' + 'ce$']), _0x3830d2['getInstanc' + 'e$']()['remo_GameK' + 'ey_veEvent' + 'Listener'](_0x5b5578['STOP_JUICE'], this, this['onStopJuic' + 'e$']), _0x3830d2['getInstanc' + 'e$']()['remo_GameK' + 'ey_veEvent' + 'Listener'](_0x5b5578['OVER_JUICE'], this, this['onOverJuic' + 'e$']), _0x3830d2['getInstanc' + 'e$']()['remo_GameK' + 'ey_veEvent' + 'Listener'](_0x5b5578['FRUIT_SEND'], this, this['onSelectFr' + 'uit$']), _0x3830d2['getInstanc' + 'e$']()['remo_GameK' + 'ey_veEvent' + 'Listener'](_0x5b5578['ARRIVE_JUI' + 'CE_POS'], this, this['onCameraAr' + 'riveJuiceP' + 'os$']), _0x3830d2['getInstanc' + 'e$']()['remo_GameK' + 'ey_veEvent' + 'Listener'](_0x5b5578['ADORN_OVER'], this, this['onAdornEnd' + '$']);
        }
        ['onCameraAr' + 'riveJuiceP' + 'os$']() {
            _0x3830d2['getInstanc' + 'e$']()['disp_GameK' + 'ey_atchEve' + 'nt'](_0x5b5578['RSP_FILL_U' + 'I_POSES'], this['curBlender' + 'Ctr$']['glassCupCt' + 'r$']['fluidCtr$']['fillUIPose' + 's$']);
        }
        ['onStartJui' + 'ce$']() {
            let _0x17ca5b = this['hand$']['transform']['position']['y'], _0x23eade = this['curFruitCt' + 'r$'] ? this['curFruitCt' + 'r$']['bootomY$'] : _0x17ca5b;
            this['handCtr$']['onStartJui' + 'ce$'](this['curBlender' + 'Ctr$']['cutY$'] - _0x23eade + _0x17ca5b), this['isPlayingS' + 'hake$'] = !0x0;
        }
        ['fixHandPos' + '$']() {
            let _0x4f048e = this['hand$']['transform']['position']['y'], _0x1e318e = this['curFruitCt' + 'r$'] ? this['curFruitCt' + 'r$']['bootomY$'] : _0x4f048e;
            this['handCtr$']['fixHandY$'](this['curBlender' + 'Ctr$']['cutY$'] - _0x1e318e + _0x4f048e);
        }
        ['onStopJuic' + 'e$']() {
            this['handCtr$']['onStopJuic' + 'e$'](), this['isPlayingS' + 'hake$'] = !0x1;
        }
        ['refreshSha' + 'ke$']() {
        }
        ['onOverJuic' + 'e$'](_0x3122c1) {
            this['handCtr$'] && this['handCtr$']['onFruitUse' + 'Over$'](), this['curFruidIn' + 'dex$'] == this['drinkConfi' + 'g$']['targetFill']['length'] && this['onAllFruit' + 'Juice$']();
        }
        ['onAllFruit' + 'Juice$']() {
            _0x3830d2['getInstanc' + 'e$']()['disp_GameK' + 'ey_atchEve' + 'nt'](_0x5b5578['ADORN_STAR' + 'T']);
        }
        ['onAdornEnd' + '$']() {
            this['hand$']['active'] = !0x1;
        }
        ['onInputMou' + 'seDown$']() {
            curScene['isFight$'] && this['curFruitCt' + 'r$'] && (this['inputMouse' + 'Down$'] || this['handCtr$'] && (this['inputMouse' + 'Down$'] = !0x0, this['handCtr$']['askDownMov' + 'e$']()));
        }
        ['onInputMou' + 'seUp$']() {
            this['inputMouse' + 'Down$'] && this['handCtr$'] && (this['inputMouse' + 'Down$'] = !0x1, this['handCtr$']['askMoveToS' + 'tart$'](), this['curFruitCt' + 'r$'] && this['curFruitCt' + 'r$']['askJuiceSt' + 'op$']());
        }
        ['onSelectFr' + 'uit$'](_0x47ee77) {
            this['curFruitId' + '$'] = Number(_0x47ee77['data']), this['createFrui' + 't$']();
        }
        ['onUpdate']() {
            this['handCtr$'] && this['handCtr$']['move$'](), this['checkMakeJ' + 'uice$'](), this['refreshHan' + 'dStartPos$'](), this['refreshSha' + 'ke$']();
        }
        ['getTargetF' + 'illMarkUIP' + 'os'](_0x13bccd) {
        }
        ['checkMakeJ' + 'uice$']() {
            this['curFruit$'] && this['curFruitCt' + 'r$']['canJuice$'] && this['curBlender' + 'Ctr$'] && this['curFruitCt' + 'r$']['checkMakeJ' + 'uice$'](this['curBlender' + 'Ctr$']['cutY$']) && (_0x3830d2['getInstanc' + 'e$']()['disp_GameK' + 'ey_atchEve' + 'nt'](_0x5b5578['FILL_FLUID'], this['curFruitCt' + 'r$']['fillData$']), this['curFruitCt' + 'r$']['checkFruit' + 'UseOver$'](), this['fixHandPos' + '$']());
        }
        ['onDestroy']() {
            this['cancleEven' + 'ts$']();
        }
    }
    class _0x4b3ca9 extends Laya['Script3D'] {
        constructor() {
            super(), this['initData$']();
        }
        ['initData$']() {
            this['roleId$'] = void 0x0, this['isCurCusto' + 'm$'] = void 0x0, this['modelCtr$'] = void 0x0, this['animState$'] = 0x0, this['leftIntoPo' + 's$'] = new Laya['Vector3'](0x1e, 0x0, 0x19), this['nextCustom' + 'Pos$'] = new Laya['Vector3'](0xf, 0x0, 0x19), this['curCustomP' + 'os$'] = new Laya['Vector3'](0x0, 0x0, 0x19), this['rightOutPo' + 's$'] = new Laya['Vector3'](-0x1e, 0x0, 0x19), this['targetRot$'] = void 0x0, this['moveSpeed$'] = 0.005, this['tempRotEul' + 'er$'] = void 0x0, this['tempPos$'] = void 0x0, this['moveT$'] = void 0x0, this['moveTotalT' + '$'] = void 0x0, this['mouthNeutr' + 'alA$'] = void 0x0, this['mouthSadA$'] = void 0x0, this['mouthSmile' + 'A$'] = void 0x0;
        }
        static ['create$'](_0x216cc7, _0x40e87c, _0xe5f548, _0x5fda8) {
            let _0x166d4b = _0x216cc7['addChild'](new Laya['Sprite3D']())['addCompone' + 'nt'](_0x4b3ca9);
            return _0x166d4b['setData$'](_0x40e87c, _0xe5f548, _0x5fda8), _0x166d4b;
        }
        ['setData$'](_0x28b4ba, _0x360f08, _0x2d70b3) {
            this['roleId$'] = _0x28b4ba, this['isCurCusto' + 'm$'] = _0x360f08, this['loadedCall' + 'back$'] = _0x2d70b3, this['roleConfig' + '$'] = D['RoleSkin'][this['roleId$']];
        }
        ['onStart']() {
            this['createMode' + 'l$']();
        }
        ['setModelAc' + 'tive$'](_0x3e7e3e) {
            this['modelCtr$'] && this['modelCtr$']['setActive'](_0x3e7e3e);
        }
        ['createMode' + 'l$']() {
            this['modelCtr$'] = _0x42867c['create'](this['owner'], this['roleConfig' + '$']['model'], Laya['Handler']['create'](this, this['onModelLoa' + 'ded$']));
        }
        ['onModelLoa' + 'ded$'](_0x319478) {
            if (this['destroyed'] || this['owner']['destroyed'])
                return;
            let _0x2ef897, _0x25fa1d = this['roleConfig' + '$']['hair'], _0x13b128 = this['roleConfig' + '$']['cloth'], _0x15c31c = this['roleConfig' + '$']['pant'], _0x80df45 = _0x1faf3f['getC_GameK' + 'ey_hildDee' + 'p'](this['modelCtr$']['sprite'], 'HairA')['_children'];
            for (_0x2ef897 = _0x80df45['length']; --_0x2ef897 > -0x1;)
                _0x80df45[_0x2ef897]['active'] = _0x2ef897 == _0x25fa1d;
            let _0x49e375 = _0x1faf3f['getC_GameK' + 'ey_hildDee' + 'p'](this['modelCtr$']['sprite'], 'Top1')['_children'];
            for (_0x2ef897 = _0x49e375['length']; --_0x2ef897 > -0x1;)
                _0x49e375[_0x2ef897]['active'] = _0x2ef897 == _0x13b128;
            let _0x18200c = _0x1faf3f['getC_GameK' + 'ey_hildDee' + 'p'](this['modelCtr$']['sprite'], 'Pants1')['_children'];
            for (_0x2ef897 = _0x18200c['length']; --_0x2ef897 > -0x1;)
                _0x18200c[_0x2ef897]['active'] = _0x2ef897 == _0x15c31c;
            this['mouthNeutr' + 'alA$'] = _0x1faf3f['getC_GameK' + 'ey_hildDee' + 'p'](this['modelCtr$']['sprite'], 'MouthNeutr' + 'alA'), this['mouthSadA$'] = _0x1faf3f['getC_GameK' + 'ey_hildDee' + 'p'](this['modelCtr$']['sprite'], 'MouthSadA'), this['mouthSmile' + 'A$'] = _0x1faf3f['getC_GameK' + 'ey_hildDee' + 'p'](this['modelCtr$']['sprite'], 'MouthSmile' + 'A'), this['mouthNeutr' + 'alA$']['active'] = !0x0, this['mouthSadA$']['active'] = this['mouthSmile' + 'A$']['active'] = !0x1, this['isCurCusto' + 'm$'] ? this['playWalkIn' + 'Anim$']() : this['playWalkTo' + 'NextCustom' + 'Pos$'](), this['loaded$'] = !0x0, this['loadedCall' + 'back$'] && this['loadedCall' + 'back$'](), this['loadedCall' + 'back$'] = void 0x0;
        }
        ['playWalkTo' + 'NextCustom' + 'Pos$']() {
            this['animState$'] = 0x7, this['modelCtr$']['playAnim'](_0x4b3ca9['AnimName$']['WALK_IN'], !0x0, void 0x0, void 0x0, void 0x0, !0x0), this['tempRotEul' + 'er$'] = this['owner']['transform']['rotationEu' + 'ler'], this['tempRotEul' + 'er$']['x'] = 0x0, this['tempRotEul' + 'er$']['y'] = 0x37, this['tempRotEul' + 'er$']['z'] = 0x0, this['owner']['transform']['rotationEu' + 'ler'] = this['tempRotEul' + 'er$'], this['tempPos$'] = this['owner']['transform']['position'], _0x1faf3f['copyVector' + '3'](this['leftIntoPo' + 's$'], this['tempPos$']), this['owner']['transform']['position'] = this['tempPos$'], this['moveTotalT' + '$'] = Laya['Vector3']['distance'](this['leftIntoPo' + 's$'], this['nextCustom' + 'Pos$']) / this['moveSpeed$'], this['moveT$'] = 0x0, this['targetRot$'] = new Laya['Vector3'](0x0, 0x14, 0x0);
        }
        ['refreshWal' + 'kToNextCus' + 'tomPosAnim' + '$']() {
            this['tempPos$'] = this['owner']['transform']['position'], this['moveT$'] += Laya['timer']['delta'], Laya['Vector3']['lerp'](this['leftIntoPo' + 's$'], this['nextCustom' + 'Pos$'], Math['min'](0x1, this['moveT$'] / this['moveTotalT' + '$']), this['tempPos$']), this['owner']['transform']['position'] = this['tempPos$'], this['moveT$'] >= this['moveTotalT' + '$'] && (this['tempRotEul' + 'er$'] = this['owner']['transform']['rotationEu' + 'ler'], Laya['Vector3']['lerp'](this['tempRotEul' + 'er$'], this['targetRot$'], Math['min'](0x1, 0.02 * Laya['timer']['delta']), this['tempRotEul' + 'er$']), Math['abs'](this['tempRotEul' + 'er$']['y'] - this['targetRot$']['y']) <= 0.1 ? (this['tempRotEul' + 'er$']['y'] = this['targetRot$']['y'], this['owner']['transform']['rotationEu' + 'ler'] = this['tempRotEul' + 'er$'], this['onWalkToNe' + 'xtCustomPo' + 'sAnimCompl' + 'ete$']()) : this['owner']['transform']['rotationEu' + 'ler'] = this['tempRotEul' + 'er$']);
        }
        ['onWalkToNe' + 'xtCustomPo' + 'sAnimCompl' + 'ete$']() {
            this['playIdleAn' + 'im$']();
        }
        ['drink$'](_0x387354) {
            this['glassCtr$'] = _0x387354;
            let _0x36ff3c = _0x1faf3f['getC_GameK' + 'ey_hildDee' + 'p'](this['modelCtr$']['sprite'], 'GlassPoint');
            this['glassCtr$']['changePare' + 'nt$'](_0x36ff3c), Laya['timer']['once'](0x3e8, this, this['dinkWater$']), this['playDrinkA' + 'nim$']();
        }
        ['dinkWater$']() {
            this['glassCtr$'] && this['glassCtr$']['playDrinkA' + 'nim$']();
        }
        ['playWalkIn' + 'Anim$']() {
            this['animState$'] = 0x1, this['modelCtr$']['playAnim'](_0x4b3ca9['AnimName$']['WALK_IN'], !0x0, void 0x0, void 0x0, void 0x0, !0x0), this['tempRotEul' + 'er$'] = this['owner']['transform']['rotationEu' + 'ler'], this['tempRotEul' + 'er$']['x'] = 0x0, this['tempRotEul' + 'er$']['y'] = 0x37, this['tempRotEul' + 'er$']['z'] = 0x0, this['owner']['transform']['rotationEu' + 'ler'] = this['tempRotEul' + 'er$'], this['tempPos$'] = this['owner']['transform']['position'], _0x1faf3f['copyVector' + '3'](this['nextCustom' + 'Pos$'], this['tempPos$']), this['owner']['transform']['position'] = this['tempPos$'], this['moveTotalT' + '$'] = Laya['Vector3']['distance'](this['nextCustom' + 'Pos$'], this['curCustomP' + 'os$']) / this['moveSpeed$'], this['moveT$'] = 0x0, this['targetRot$'] = new Laya['Vector3'](0x0, 0x0, 0x0);
        }
        ['refreshWal' + 'kToCurCust' + 'omPosAnim$']() {
            this['tempPos$'] = this['owner']['transform']['position'], this['moveT$'] += Laya['timer']['delta'], Laya['Vector3']['lerp'](this['nextCustom' + 'Pos$'], this['curCustomP' + 'os$'], Math['min'](0x1, this['moveT$'] / this['moveTotalT' + '$']), this['tempPos$']), this['owner']['transform']['position'] = this['tempPos$'], this['moveT$'] >= this['moveTotalT' + '$'] && (this['tempRotEul' + 'er$'] = this['owner']['transform']['rotationEu' + 'ler'], Laya['Vector3']['lerp'](this['tempRotEul' + 'er$'], this['targetRot$'], Math['min'](0x1, 0.02 * Laya['timer']['delta']), this['tempRotEul' + 'er$']), Math['abs'](this['tempRotEul' + 'er$']['y']) <= 0.1 ? (this['tempRotEul' + 'er$']['y'] = this['targetRot$']['y'], this['owner']['transform']['rotationEu' + 'ler'] = this['tempRotEul' + 'er$'], this['onWalkInAn' + 'imComplete' + '$']()) : this['owner']['transform']['rotationEu' + 'ler'] = this['tempRotEul' + 'er$']);
        }
        ['onWalkInAn' + 'imComplete' + '$']() {
            this['playIdleAn' + 'im$']();
        }
        ['playIdleAn' + 'im$']() {
            this['animState$'] = 0x2, this['modelCtr$']['playAnim'](this['isCurCusto' + 'm$'] ? _0x4b3ca9['AnimName$']['IDLE'] : _0x4b3ca9['AnimName$']['IDLE2'], !0x0);
        }
        ['playDrinkA' + 'nim$']() {
            this['animState$'] = 0x3, this['modelCtr$']['playAnim'](_0x4b3ca9['AnimName$']['DRINK'], !0x1, void 0x0, void 0x0, 0x1, !0x0), Laya['timer']['once'](0x7d0, this, this['playHappyA' + 'nim$']);
        }
        ['playHappyA' + 'nim$']() {
            this['modelCtr$']['playAnim'](_0x4b3ca9['AnimName$']['HAPPY'], !0x0);
        }
        ['playSadAni' + 'm$']() {
            this['modelCtr$']['playAnim'](_0x4b3ca9['AnimName$']['SAD'], !0x0);
        }
        ['playWalkOu' + 'tAnim$'](_0x4728c9) {
            this['_walkOutCa' + 'llback$'] = _0x4728c9, this['modelCtr$']['playAnim'](_0x4b3ca9['AnimName$']['WALK_OUT'], !0x0), this['targetRot$'] = new Laya['Vector3'](0x0, 0x1e, 0x0), this['moveTotalT' + '$'] = Laya['Vector3']['distance'](this['rightOutPo' + 's$'], this['curCustomP' + 'os$']) / this['moveSpeed$'], this['moveT$'] = 0x0, this['animState$'] = 0x6;
        }
        ['refreshWal' + 'kOutAnim$']() {
            this['tempPos$'] = this['owner']['transform']['position'], this['tempRotEul' + 'er$'] = this['owner']['transform']['rotationEu' + 'ler'], this['tempRotEul' + 'er$']['y'] != this['targetRot$']['y'] ? (this['tempRotEul' + 'er$']['y'] += (this['targetRot$']['y'] - this['tempRotEul' + 'er$']['y']) * Math['min'](0x1, 0.02 * Laya['timer']['delta']), Math['abs'](this['tempRotEul' + 'er$']['y'] - this['targetRot$']['y']) <= 0.1 ? (this['tempRotEul' + 'er$']['y'] = this['targetRot$']['y'], this['owner']['transform']['rotationEu' + 'ler'] = this['tempRotEul' + 'er$']) : this['owner']['transform']['rotationEu' + 'ler'] = this['tempRotEul' + 'er$']) : (this['moveT$'] += Laya['timer']['delta'], Laya['Vector3']['lerp'](this['curCustomP' + 'os$'], this['rightOutPo' + 's$'], Math['min'](0x1, this['moveT$'] / this['moveTotalT' + '$']), this['tempPos$']), this['owner']['transform']['position'] = this['tempPos$'], this['moveT$'] >= this['moveTotalT' + '$'] && this['onWalkOutA' + 'nimComplet' + 'e$']());
        }
        ['onWalkOutA' + 'nimComplet' + 'e$']() {
            this['owner']['transform']['position'] = this['rightOutPo' + 's$']['clone'](), this['owner']['transform']['rotationEu' + 'ler'] = this['targetRot$']['clone'](), this['animState$'] = 0x0, this['setModelAc' + 'tive$'](!0x1), this['_walkOutCa' + 'llback$'] && this['_walkOutCa' + 'llback$'](), this['_walkOutCa' + 'llback$'] = void 0x0;
        }
        ['refreshAni' + 'ms$']() {
            0x1 == this['animState$'] ? this['refreshWal' + 'kToCurCust' + 'omPosAnim$']() : 0x7 == this['animState$'] ? this['refreshWal' + 'kToNextCus' + 'tomPosAnim' + '$']() : 0x6 == this['animState$'] && this['refreshWal' + 'kOutAnim$']();
        }
        ['onUpdate']() {
            this['refreshAni' + 'ms$']();
        }
        ['onDestroy']() {
            this['modelCtr$'] = void 0x0;
        }
    }
    _0x4b3ca9['AnimName$'] = {
        'WALK_IN': 'GirlWalk1',
        'IDLE': 'IdleNoPlat' + 'e0',
        'IDLE2': 'IdleWheel',
        'DRINK': 'IdleNoPlat' + 'eDrink',
        'HAPPY': 'IdleNoPlat' + 'e2New',
        'SAD': 'IdleNoPlat' + 'e1New',
        'WALK_OUT': 'GirlWalkDr' + 'inkNew'
    };
    class _0x175a02 extends Laya['Script3D'] {
        constructor() {
            super(), this['initData$']();
        }
        ['initData$']() {
            this['startPos$'] = new Laya['Vector3'](0x0, 0xa, -0x6), this['_state$'] = 0x0, this['_alpha$'] = 0x0, this['_animT$'] = void 0x0, this['_animTotal' + 'T$'] = 0x7d0;
        }
        static ['create$'](_0x140540, _0x3d12b0) {
            let _0x52395f = _0x140540['addChild'](new Laya['Sprite3D']())['addCompone' + 'nt'](_0x175a02);
            return _0x52395f['setData$'](_0x3d12b0), _0x52395f;
        }
        ['setData$'](_0xd9d85b) {
            this['loadedCall' + 'back$'] = _0xd9d85b;
        }
        ['onStart']() {
            this['owner']['transform']['position'] = this['startPos$']['clone'](), this['createMode' + 'l$']();
        }
        set ['state$'](_0x2740b5) {
            this['_state$'] = _0x2740b5;
        }
        get ['state$']() {
            return this['_state$'];
        }
        set ['alpha$'](_0x358778) {
            this['_alpha$'] = _0x358778, this['bgMaterial' + '$'] && (this['bgMaterial' + '$']['alpha$'] = _0x358778);
        }
        get ['alpha$']() {
            return this['_alpha$'];
        }
        ['createMode' + 'l$']() {
            this['modelCtr$'] = _0x42867c['create'](this['owner'], 0x12c, Laya['Handler']['create'](this, this['onModelLoa' + 'ded$']));
            let _0x2fc2b8 = this['modelCtr$']['_config']['scale'];
            this['modelCtr$']['setLocalSc' + 'ale'](_0x2fc2b8, 0x2 * _0x2fc2b8, _0x2fc2b8);
        }
        ['onModelLoa' + 'ded$'](_0x2dd96a) {
            if (this['destroyed'] || this['owner']['destroyed'])
                return;
            let _0x5b464e = _0x5ad3aa['getMeshObj' + 's$'](this['modelCtr$']['sprite'])[0x0]['meshRender' + 'er'], _0x145a5f = _0x5b464e['sharedMate' + 'rial'];
            this['bgMaterial' + '$'] = _0x5b464e['sharedMate' + 'rial'] = new _0x320138(_0x145a5f['albedoText' + 'ure'], _0x145a5f['tilingOffs' + 'et']), this['bgMaterial' + '$']['alpha$'] = this['alpha$'], this['loaded$'] = !0x0, this['loadedCall' + 'back$'] && this['loadedCall' + 'back$'](), this['loadedCall' + 'back$'] = void 0x0;
        }
        ['playShowAn' + 'im$'](_0x1d4f01) {
            this['state$'] = 0x1, this['_animT$'] = 0x0, this['_animCompl' + 'teCallback' + '$'] = _0x1d4f01;
        }
        ['playHideAn' + 'im$'](_0x227bca) {
            this['state$'] = 0x3, this['_animT$'] = 0x0, this['_animHideC' + 'allback$'] = _0x227bca;
        }
        ['refreshSho' + 'wAnim$']() {
            this['_animT$'] += _0x3e110a['getInstanc' + 'e$']()['deltaTime$'], this['_animT$'] >= this['_animTotal' + 'T$'] ? (this['alpha$'] = 0x1, this['state$'] = 0x2, this['_animCompl' + 'teCallback' + '$'] && this['_animCompl' + 'teCallback' + '$'](), this['_animCompl' + 'teCallback' + '$'] = void 0x0) : this['alpha$'] = Math['min'](0x1, this['_animT$'] / this['_animTotal' + 'T$']);
        }
        ['refreshHid' + 'eAnim$']() {
            this['_animT$'] += _0x3e110a['getInstanc' + 'e$']()['deltaTime$'], this['_animT$'] >= this['_animTotal' + 'T$'] ? (this['alpha$'] = 0x0, this['state$'] = 0x4, this['_animHideC' + 'allback$'] && this['_animHideC' + 'allback$'](), this['_animHideC' + 'allback$'] = void 0x0) : this['alpha$'] = 0x1 - Math['min'](0x1, this['_animT$'] / this['_animTotal' + 'T$']);
        }
        ['refreshAni' + 'm$']() {
            0x1 == this['state$'] ? this['refreshSho' + 'wAnim$']() : 0x3 == this['state$'] && this['refreshHid' + 'eAnim$']();
        }
        ['onUpdate']() {
            this['refreshAni' + 'm$']();
        }
        ['onDestroy']() {
            this['modelCtr$'] && this['modelCtr$']['dispose'](), this['modelCtr$'] = void 0x0;
        }
    }
    class _0x416b95 extends Laya['Script3D'] {
        constructor() {
            super(), this['initData$']();
        }
        ['initData$']() {
            this['customInde' + 'x$'] = _0xe6399d['getInstanc' + 'e$']()['userData$']['missionPro' + 'gress$'] - 0x1, this['levelConfo' + 'g$'] = _0xe6399d['getInstanc' + 'e$']()['drinkData$']['getMission' + 'DataByMiss' + 'ionId$'](_0xe6399d['getInstanc' + 'e$']()['userData$']['mission$']), this['barCounter' + 'Model$'] = void 0x0;
        }
        static ['create$'](_0x573484, _0x5ae224) {
            let _0x218d65 = _0x573484['addChild'](new Laya['Sprite3D']())['addCompone' + 'nt'](_0x416b95);
            return _0x218d65['setData$'](_0x5ae224), _0x218d65;
        }
        ['setData$'](_0x5f818) {
            this['_loadedCal' + 'lback$'] = _0x5f818;
        }
        ['onStart']() {
            this['createShop' + '$'](), this['createBgMa' + 'sk$'](), this['createCust' + 'oms$'](), this['monitorEve' + 'nts$']();
        }
        ['monitorEve' + 'nts$']() {
            _0x3830d2['getInstanc' + 'e$']()['addE_GameK' + 'ey_ventLis' + 'tener'](_0x5b5578['ON_START_G' + 'AME'], this, this['onOpenMake' + 'JuiceMode$']), _0x3830d2['getInstanc' + 'e$']()['addE_GameK' + 'ey_ventLis' + 'tener'](_0x5b5578['ADORN_OVER'], this, this['onAdornOve' + 'r$']), _0x3830d2['getInstanc' + 'e$']()['addE_GameK' + 'ey_ventLis' + 'tener'](_0x5b5578['ASK_PLAY_W' + 'ALK_OUT'], this, this['onAskPlayW' + 'alkOut$']);
        }
        ['cancelEven' + 'ts$']() {
            _0x3830d2['getInstanc' + 'e$']()['remo_GameK' + 'ey_veEvent' + 'Listener'](_0x5b5578['ON_START_G' + 'AME'], this, this['onOpenMake' + 'JuiceMode$']), _0x3830d2['getInstanc' + 'e$']()['remo_GameK' + 'ey_veEvent' + 'Listener'](_0x5b5578['ADORN_OVER'], this, this['onAdornOve' + 'r$']), _0x3830d2['getInstanc' + 'e$']()['remo_GameK' + 'ey_veEvent' + 'Listener'](_0x5b5578['ASK_PLAY_W' + 'ALK_OUT'], this, this['onAskPlayW' + 'alkOut$']);
        }
        ['createLayo' + 'uts$']() {
        }
        ['checkLoade' + 'd$']() {
            this['loaded$'] || (this['loaded$'] = this['barCounter' + 'Model$'] && this['barCounter' + 'Model$']['loaded'] && this['_bgMaskCtr' + '$'] && this['_bgMaskCtr' + '$']['loaded$'] && this['_curCustom' + '$'] && this['_curCustom' + '$']['loaded$'], this['loaded$'] && (this['_loadedCal' + 'lback$'] && this['_loadedCal' + 'lback$'](), this['_loadedCal' + 'lback$'] = void 0x0));
        }
        ['createShop' + '$']() {
            this['barCounter' + 'Model$'] = _0x42867c['create'](this['owner'], 0xc8, Laya['Handler']['create'](this, this['onShopLoad' + 'ed$'])), this['barCounter' + 'Model$']['setLocalRo' + 'tation'](0xb4, 0x0, 0x0);
        }
        ['onShopLoad' + 'ed$']() {
            this['checkLoade' + 'd$']();
        }
        ['createBgMa' + 'sk$']() {
            this['_bgMaskCtr' + '$'] = _0x175a02['create$'](this['owner'], this['onBgMaskLo' + 'aded$']['bind'](this));
        }
        ['onBgMaskLo' + 'aded$']() {
            this['checkLoade' + 'd$']();
        }
        ['createCust' + 'oms$']() {
            let _0x23dcb3 = this['levelConfo' + 'g$']['drinkArr'], _0x584a96 = _0x23dcb3[this['customInde' + 'x$']], _0x1d29ac = _0x23dcb3[this['customInde' + 'x$'] + 0x1], _0x271b49 = _0x584a96 > 0x0 ? _0xe6399d['getInstanc' + 'e$']()['drinkData$']['getDrinkDa' + 'taByDrinkI' + 'd$'](_0x584a96) : void 0x0, _0x1b2901 = _0x1d29ac > 0x0 ? _0xe6399d['getInstanc' + 'e$']()['drinkData$']['getDrinkDa' + 'taByDrinkI' + 'd$'](_0x1d29ac) : void 0x0;
            _0x271b49 && (this['_curCustom' + '$'] = _0x4b3ca9['create$'](this['owner'], _0x271b49['roleId'], !0x0, this['onCurCusto' + 'mLoaded$']['bind'](this))), _0x1b2901 && (this['_nextCusto' + 'm$'] = _0x4b3ca9['create$'](this['owner'], _0x1b2901['roleId']));
        }
        ['onCurCusto' + 'mLoaded$']() {
            this['checkLoade' + 'd$']();
        }
        ['onAdornOve' + 'r$'](_0x32dc7e) {
            this['barCounter' + 'Model$']['setActive'](!0x0), this['_curCustom' + '$'] && this['_curCustom' + '$']['setModelAc' + 'tive$'](!0x0), this['_nextCusto' + 'm$'] && this['_nextCusto' + 'm$']['setModelAc' + 'tive$'](!0x0), this['_nextCusto' + 'm$'] && this['_nextCusto' + 'm$']['playIdleAn' + 'im$'](), this['_curCustom' + '$'] && this['_curCustom' + '$']['drink$'](_0x32dc7e['data']), this['_bgMaskCtr' + '$'] && this['_bgMaskCtr' + '$']['playHideAn' + 'im$'](this['onBgHideAn' + 'imComplete' + '$']['bind'](this));
        }
        ['onOpenMake' + 'JuiceMode$']() {
            this['_bgMaskCtr' + '$'] && this['_bgMaskCtr' + '$']['playShowAn' + 'im$'](this['onOpenJuic' + 'eMakeModeC' + 'omplete$']['bind'](this));
        }
        ['onBgHideAn' + 'imComplete' + '$']() {
        }
        ['onAskPlayW' + 'alkOut$']() {
            this['_curCustom' + '$'] && this['_curCustom' + '$']['playWalkOu' + 'tAnim$']();
        }
        ['onOpenJuic' + 'eMakeModeC' + 'omplete$']() {
            this['barCounter' + 'Model$']['setActive'](!0x1), this['_curCustom' + '$'] && this['_curCustom' + '$']['setModelAc' + 'tive$'](!0x1), this['_nextCusto' + 'm$'] && this['_nextCusto' + 'm$']['setModelAc' + 'tive$'](!0x1);
        }
        ['onJuiceMak' + 'eComplete$']() {
        }
        ['onDestroy']() {
            this['barCounter' + 'Model$'] && this['barCounter' + 'Model$']['dispose'](), this['barCounter' + 'Model$'] = void 0x0, this['cancelEven' + 'ts$']();
        }
    }
    class _0x22c4a6 extends Laya['Script3D'] {
        constructor() {
            super(), this['_tempVecto' + 'r3'] = new Laya['Vector3'](), this['yawPitchRo' + 'll'] = new Laya['Vector3'](), this['resultRota' + 'tion'] = new Laya['Quaternion'](), this['tempRotati' + 'onZ'] = new Laya['Quaternion'](), this['tempRotati' + 'onX'] = new Laya['Quaternion'](), this['tempRotati' + 'onY'] = new Laya['Quaternion'](), this['rotaionSpe' + 'ed'] = 0.00006;
        }
        ['onAwake']() {
            Laya['stage']['on'](Laya['Event']['RIGHT_MOUS' + 'E_DOWN'], this, this['mouseDown']), Laya['stage']['on'](Laya['Event']['RIGHT_MOUS' + 'E_UP'], this, this['mouseUp']), this['camera'] = this['owner'];
        }
        ['_onDestroy']() {
            Laya['stage']['off'](Laya['Event']['RIGHT_MOUS' + 'E_DOWN'], this, this['mouseDown']), Laya['stage']['off'](Laya['Event']['RIGHT_MOUS' + 'E_UP'], this, this['mouseUp']);
        }
        ['onUpdate'](_0x4bb507) {
            var _0x17a26f = 0x5 * Laya['timer']['delta'];
            if (!isNaN(this['lastMouseX']) && !isNaN(this['lastMouseY']) && this['isMouseDow' + 'n']) {
                this['owner']['scene'], (Laya['KeyBoardMa' + 'nager']['hasKeyDown'](0x57) && this['moveForwar' + 'd'](-0.01 * _0x17a26f), Laya['KeyBoardMa' + 'nager']['hasKeyDown'](0x53) && this['moveForwar' + 'd'](0.01 * _0x17a26f), Laya['KeyBoardMa' + 'nager']['hasKeyDown'](0x41) && this['moveRight'](-0.01 * _0x17a26f), Laya['KeyBoardMa' + 'nager']['hasKeyDown'](0x44) && this['moveRight'](0.01 * _0x17a26f), Laya['KeyBoardMa' + 'nager']['hasKeyDown'](0x51) && this['moveVertic' + 'al'](0.01 * _0x17a26f), Laya['KeyBoardMa' + 'nager']['hasKeyDown'](0x45) && this['moveVertic' + 'al'](-0.01 * _0x17a26f));
                var _0x587bcd = Laya['stage']['mouseX'] - this['lastMouseX'], _0x264fda = Laya['stage']['mouseY'] - this['lastMouseY'], _0xfa0654 = this['yawPitchRo' + 'll'];
                _0xfa0654['x'] -= _0x587bcd * this['rotaionSpe' + 'ed'] * _0x17a26f, _0xfa0654['y'] -= _0x264fda * this['rotaionSpe' + 'ed'] * _0x17a26f, this['updateRota' + 'tion']();
            }
            this['lastMouseX'] = Laya['stage']['mouseX'], this['lastMouseY'] = Laya['stage']['mouseY'];
        }
        ['mouseDown'](_0x1c9a19) {
            this['camera']['transform']['localRotat' + 'ion']['getYawPitc' + 'hRoll'](this['yawPitchRo' + 'll']), this['lastMouseX'] = Laya['stage']['mouseX'], this['lastMouseY'] = Laya['stage']['mouseY'], this['isMouseDow' + 'n'] = !0x0;
        }
        ['mouseUp'](_0x228f61) {
            this['isMouseDow' + 'n'] = !0x1;
        }
        ['moveForwar' + 'd'](_0x5402f5) {
            this['_tempVecto' + 'r3']['x'] = 0x0, this['_tempVecto' + 'r3']['y'] = 0x0, this['_tempVecto' + 'r3']['z'] = _0x5402f5, this['camera']['transform']['translate'](this['_tempVecto' + 'r3']);
        }
        ['moveRight'](_0x5f19cc) {
            this['_tempVecto' + 'r3']['y'] = 0x0, this['_tempVecto' + 'r3']['z'] = 0x0, this['_tempVecto' + 'r3']['x'] = _0x5f19cc, this['camera']['transform']['translate'](this['_tempVecto' + 'r3']);
        }
        ['moveVertic' + 'al'](_0x45076d) {
            this['_tempVecto' + 'r3']['x'] = this['_tempVecto' + 'r3']['z'] = 0x0, this['_tempVecto' + 'r3']['y'] = _0x45076d, this['camera']['transform']['translate'](this['_tempVecto' + 'r3'], !0x1);
        }
        ['updateRota' + 'tion']() {
            Math['abs'](this['yawPitchRo' + 'll']['y']) < 1.5 && (Laya['Quaternion']['createFrom' + 'YawPitchRo' + 'll'](this['yawPitchRo' + 'll']['x'], this['yawPitchRo' + 'll']['y'], this['yawPitchRo' + 'll']['z'], this['tempRotati' + 'onZ']), this['tempRotati' + 'onZ']['cloneTo'](this['camera']['transform']['localRotat' + 'ion']), this['camera']['transform']['localRotat' + 'ion'] = this['camera']['transform']['localRotat' + 'ion']);
        }
    }
    class _0x1632e4 extends Laya['Script3D'] {
        constructor() {
            super(), this['initData$']();
        }
        ['initData$']() {
            this['startCamer' + 'aPos$'] = new Laya['Vector3'](0x0, 0x1e, -0x15), this['startCamer' + 'aEuler$'] = new Laya['Vector3'](-0x11, -0xb4, 0x0), this['doJuiceCam' + 'eraPos$'] = new Laya['Vector3'](0x0, 13.2, -0x10), this['doJuiceCam' + 'eraEuler$'] = new Laya['Vector3'](-2.5, -0xb4, 0x0), this['adornCamer' + 'aPos$'] = new Laya['Vector3'](0x0, 0xe, -0xa), this['adornCamer' + 'aEuler$'] = new Laya['Vector3'](-0x1b, -0xb4, 0x0), this['adornOverC' + 'ameraTarge' + 'tPos$'] = new Laya['Vector3'](0x0, 0x12, -0x12), this['state$'] = 0x0, this['startMoveS' + 'peed$'] = 0.005, this['juiceMoveS' + 'peed$'] = 0.01, this['moveT$'] = void 0x0, this['animTotalT' + '$'] = void 0x0, this['tempPos$'] = void 0x0, this['tempRot$'] = void 0x0, this['isShakeCam' + 'era$'] = !0x1;
        }
        static ['create$'](_0x248b36) {
            let _0x5f4190 = _0x248b36['addChild'](new Laya['Camera'](0x0, 0.1, 0x3e8));
            return _0x5f4190['clearFlag'] = 0x2, _0x5f4190['addCompone' + 'nt'](_0x1632e4);
        }
        set ['state$'](_0x59b5a0) {
            this['_state$'] = _0x59b5a0;
        }
        get ['state$']() {
            return this['_state$'];
        }
        ['onStart']() {
            let _0x3effb4 = this['owner'];
            _0x3effb4['transform']['position'] = this['doJuiceCam' + 'eraPos$']['clone']();
            let _0x25da51 = _0x3effb4['transform']['rotationEu' + 'ler'];
            _0x25da51['z'] = this['doJuiceCam' + 'eraEuler$']['z'], _0x25da51['y'] = this['doJuiceCam' + 'eraEuler$']['y'], _0x25da51['x'] = this['doJuiceCam' + 'eraEuler$']['x'], _0x3effb4['transform']['rotationEu' + 'ler'] = _0x25da51, Laya['Browser']['onPC'] && _0x3effb4['addCompone' + 'nt'](_0x22c4a6), this['monitorEve' + 'nts$']();
        }
        ['monitorEve' + 'nts$']() {
            _0x3830d2['getInstanc' + 'e$']()['addE_GameK' + 'ey_ventLis' + 'tener'](_0x5b5578['ON_START_G' + 'AME'], this, this['onOpenMake' + 'JuiceMode$']), _0x3830d2['getInstanc' + 'e$']()['addE_GameK' + 'ey_ventLis' + 'tener'](_0x5b5578['START_JUIC' + 'E'], this, this['onJuiceSta' + 'rt$']), _0x3830d2['getInstanc' + 'e$']()['addE_GameK' + 'ey_ventLis' + 'tener'](_0x5b5578['FILL_FLUID'], this, this['onFillFlui' + 'd$']), _0x3830d2['getInstanc' + 'e$']()['addE_GameK' + 'ey_ventLis' + 'tener'](_0x5b5578['ADORN_STAR' + 'T'], this, this['onAdornSta' + 'rt$']), _0x3830d2['getInstanc' + 'e$']()['addE_GameK' + 'ey_ventLis' + 'tener'](_0x5b5578['ADORN_OVER'], this, this['onAdornEnd' + '$']), _0x3830d2['getInstanc' + 'e$']()['addE_GameK' + 'ey_ventLis' + 'tener'](_0x5b5578['SCENE_LOAD' + 'ED'], this, this['onSceneLoa' + 'ded$']);
        }
        ['cancelEven' + 'ts$']() {
            _0x3830d2['getInstanc' + 'e$']()['remo_GameK' + 'ey_veEvent' + 'Listener'](_0x5b5578['ON_START_G' + 'AME'], this, this['onOpenMake' + 'JuiceMode$']), _0x3830d2['getInstanc' + 'e$']()['remo_GameK' + 'ey_veEvent' + 'Listener'](_0x5b5578['ADORN_STAR' + 'T'], this, this['onAdornSta' + 'rt$']), _0x3830d2['getInstanc' + 'e$']()['remo_GameK' + 'ey_veEvent' + 'Listener'](_0x5b5578['ADORN_OVER'], this, this['onAdornEnd' + '$']), _0x3830d2['getInstanc' + 'e$']()['remo_GameK' + 'ey_veEvent' + 'Listener'](_0x5b5578['SCENE_LOAD' + 'ED'], this, this['onSceneLoa' + 'ded$']), _0x3830d2['getInstanc' + 'e$']()['remo_GameK' + 'ey_veEvent' + 'Listener'](_0x5b5578['START_JUIC' + 'E'], this, this['onJuiceSta' + 'rt$']), _0x3830d2['getInstanc' + 'e$']()['remo_GameK' + 'ey_veEvent' + 'Listener'](_0x5b5578['FILL_FLUID'], this, this['onFillFlui' + 'd$']);
        }
        ['onSceneLoa' + 'ded$']() {
            this['playStartA' + 'nim$']();
        }
        ['onOpenMake' + 'JuiceMode$']() {
            this['playMoveTo' + 'JuicePosAn' + 'im$']();
        }
        ['onJuiceSta' + 'rt$'](_0x3359c0) {
            this['playShakeA' + 'nim$'](_0x3359c0['data']['fruitConfi' + 'g$']['hard']);
        }
        ['onAdornSta' + 'rt$']() {
            this['playMoveTo' + 'AdornPosAn' + 'im$']();
        }
        ['onAdornEnd' + '$']() {
            this['playAdornO' + 'verAnim$']();
        }
        ['playStartA' + 'nim$']() {
            this['state$'] = 0x1, this['moveT$'] = 0x0, this['animTotalT' + '$'] = Laya['Vector3']['distance'](this['doJuiceCam' + 'eraPos$'], this['startCamer' + 'aPos$']) / this['startMoveS' + 'peed$'];
        }
        ['playMoveTo' + 'JuicePosAn' + 'im$']() {
            this['state$'] = 0x2, this['moveT$'] = 0x0, this['animTotalT' + '$'] = Laya['Vector3']['distance'](this['doJuiceCam' + 'eraPos$'], this['startCamer' + 'aPos$']) / this['juiceMoveS' + 'peed$'];
        }
        ['playMoveTo' + 'AdornPosAn' + 'im$']() {
            this['state$'] = 0x4, this['moveT$'] = 0x0, this['animTotalT' + '$'] = Laya['Vector3']['distance'](this['adornCamer' + 'aPos$'], this['doJuiceCam' + 'eraPos$']) / this['juiceMoveS' + 'peed$'];
        }
        ['playAdornO' + 'verAnim$']() {
            this['state$'] = 0x6, this['moveT$'] = 0x0, this['animTotalT' + '$'] = Laya['Vector3']['distance'](this['adornCamer' + 'aPos$'], this['adornOverC' + 'ameraTarge' + 'tPos$']) / this['startMoveS' + 'peed$'];
        }
        ['playShakeA' + 'nim$'](_0x1fb387) {
            this['isShakeCam' + 'era$'] || (this['shakeOffse' + 'tAngle$'] = 0x2 + 0xa * _0x1fb387 * _0x1fb387, this['singleShak' + 'eT$'] = 0x64, this['shakeCount' + 'T$'] = 0x0, this['shakeDirec' + 'tion$'] = Math['random']() > 0.5 ? 0x1 : -0x1, this['shakeCutPa' + 'ra$'] = 0.7, this['isShakeCam' + 'era$'] = !0x0);
        }
        ['refreshAni' + 'm$']() {
            0x1 == this['state$'] ? this['refreshMov' + 'eToStartPo' + 'sAnim$']() : 0x2 == this['state$'] ? this['refreshMov' + 'eToDoJuice' + 'PosAnim$']() : 0x4 == this['state$'] ? this['refreshMov' + 'eAdornPosA' + 'nim$']() : 0x6 == this['state$'] && this['refreshAdo' + 'rnOverAnim' + '$'](), this['refreshSha' + 'keAnim$']();
        }
        ['refreshSha' + 'keAnim$']() {
            if (!this['isShakeCam' + 'era$'])
                return;
            this['shakeCount' + 'T$'] += _0x3e110a['getInstanc' + 'e$']()['deltaTime$'];
            let _0x2fd640 = Math['min'](0x1, this['shakeCount' + 'T$'] / this['singleShak' + 'eT$']);
            this['tempRot$'] = this['owner']['transform']['rotationEu' + 'ler'], this['tempRot$']['z'] = (_0x2fd640 > 0.5 ? 0x1 - _0x2fd640 : _0x2fd640) * this['shakeDirec' + 'tion$'] * this['shakeOffse' + 'tAngle$'], this['owner']['transform']['rotationEu' + 'ler'] = this['tempRot$'], this['shakeCount' + 'T$'] >= this['singleShak' + 'eT$'] && (this['shakeDirec' + 'tion'] *= -0x1, this['shakeCount' + 'T$'] -= this['singleShak' + 'eT$'], this['singleShak' + 'eT$'] *= this['shakeCutPa' + 'ra$'], this['shakeOffse' + 'tAngle$'] *= this['shakeCutPa' + 'ra$'], this['shakeOffse' + 'tAngle$'] < 0x1 && (this['isShakeCam' + 'era$'] = !0x1));
        }
        ['refreshAdo' + 'rnOverAnim' + '$']() {
            if (this['moveT$'] += _0x3e110a['getInstanc' + 'e$']()['deltaTime$'], this['moveT$'] >= this['animTotalT' + '$'])
                this['onAdornOve' + 'rAnimCompl' + 'ete$']();
            else {
                let _0x4df817 = Math['min'](0x1, this['moveT$'] / this['animTotalT' + '$']);
                this['tempPos$'] = this['owner']['transform']['position'], Laya['Vector3']['lerp'](this['adornCamer' + 'aPos$'], this['adornOverC' + 'ameraTarge' + 'tPos$'], _0x4df817, this['tempPos$']), this['owner']['transform']['position'] = this['tempPos$'], this['tempRot$'] = this['owner']['transform']['rotationEu' + 'ler'], Laya['Vector3']['lerp'](this['adornCamer' + 'aEuler$'], this['startCamer' + 'aEuler$'], _0x4df817, this['tempRot$']), this['owner']['transform']['rotationEu' + 'ler'] = this['tempRot$'];
            }
        }
        ['refreshMov' + 'eToDoJuice' + 'PosAnim$']() {
            if (this['moveT$'] += _0x3e110a['getInstanc' + 'e$']()['deltaTime$'], this['moveT$'] >= this['animTotalT' + '$'])
                this['onMoveToDo' + 'JuicePosAn' + 'imComplete' + '$']();
            else {
                let _0x29a820 = Math['min'](0x1, this['moveT$'] / this['animTotalT' + '$']);
                this['tempPos$'] = this['owner']['transform']['position'], Laya['Vector3']['lerp'](this['startCamer' + 'aPos$'], this['doJuiceCam' + 'eraPos$'], _0x29a820, this['tempPos$']), this['owner']['transform']['position'] = this['tempPos$'], this['tempRot$'] = this['owner']['transform']['rotationEu' + 'ler'], Laya['Vector3']['lerp'](this['startCamer' + 'aEuler$'], this['doJuiceCam' + 'eraEuler$'], _0x29a820, this['tempRot$']), this['owner']['transform']['rotationEu' + 'ler'] = this['tempRot$'];
            }
        }
        ['refreshMov' + 'eAdornPosA' + 'nim$']() {
            if (this['moveT$'] += _0x3e110a['getInstanc' + 'e$']()['deltaTime$'], this['moveT$'] >= this['animTotalT' + '$'])
                this['onMoveAdor' + 'nPosAnimCo' + 'mplete$']();
            else {
                let _0x4a1671 = Math['min'](0x1, this['moveT$'] / this['animTotalT' + '$']);
                this['tempPos$'] = this['owner']['transform']['position'], Laya['Vector3']['lerp'](this['doJuiceCam' + 'eraPos$'], this['adornCamer' + 'aPos$'], _0x4a1671, this['tempPos$']), this['owner']['transform']['position'] = this['tempPos$'], this['tempRot$'] = this['owner']['transform']['rotationEu' + 'ler'], Laya['Vector3']['lerp'](this['doJuiceCam' + 'eraEuler$'], this['adornCamer' + 'aEuler$'], _0x4a1671, this['tempRot$']), this['owner']['transform']['rotationEu' + 'ler'] = this['tempRot$'];
            }
        }
        ['onAdornOve' + 'rAnimCompl' + 'ete$']() {
            this['state$'] = 0x7, this['owner']['transform']['position'] = this['adornOverC' + 'ameraTarge' + 'tPos$'], this['owner']['transform']['rotationEu' + 'ler'] = this['startCamer' + 'aEuler$']['clone']();
        }
        ['onMoveAdor' + 'nPosAnimCo' + 'mplete$']() {
            this['state$'] = 0x5, this['owner']['transform']['position'] = this['adornCamer' + 'aPos$']['clone'](), this['owner']['transform']['rotationEu' + 'ler'] = this['adornCamer' + 'aEuler$']['clone'](), _0x3830d2['getInstanc' + 'e$']()['disp_GameK' + 'ey_atchEve' + 'nt'](_0x5b5578['ARRIVE_ADO' + 'RN_POS']);
        }
        ['onMoveToDo' + 'JuicePosAn' + 'imComplete' + '$']() {
            this['owner']['transform']['position'] = this['doJuiceCam' + 'eraPos$']['clone'](), this['owner']['transform']['rotationEu' + 'ler'] = this['doJuiceCam' + 'eraEuler$']['clone'](), this['state$'] = 0x3, _0x3830d2['getInstanc' + 'e$']()['disp_GameK' + 'ey_atchEve' + 'nt'](_0x5b5578['ARRIVE_JUI' + 'CE_POS']);
        }
        ['refreshMov' + 'eToStartPo' + 'sAnim$']() {
            if (this['moveT$'] += _0x3e110a['getInstanc' + 'e$']()['deltaTime$'], this['moveT$'] >= this['animTotalT' + '$'])
                this['onMoveToSt' + 'artPosAnim' + 'Complete$']();
            else {
                let _0x468c1f = Math['min'](0x1, this['moveT$'] / this['animTotalT' + '$']);
                this['tempPos$'] = this['owner']['transform']['position'], Laya['Vector3']['lerp'](this['doJuiceCam' + 'eraPos$'], this['startCamer' + 'aPos$'], _0x468c1f, this['tempPos$']), this['owner']['transform']['position'] = this['tempPos$'], this['tempRot$'] = this['owner']['transform']['rotationEu' + 'ler'], Laya['Vector3']['lerp'](this['doJuiceCam' + 'eraEuler$'], this['startCamer' + 'aEuler$'], _0x468c1f, this['tempRot$']), this['owner']['transform']['rotationEu' + 'ler'] = this['tempRot$'];
            }
        }
        ['onMoveToSt' + 'artPosAnim' + 'Complete$']() {
            this['owner']['transform']['position'] = this['startCamer' + 'aPos$']['clone'](), this['owner']['transform']['rotationEu' + 'ler'] = this['startCamer' + 'aEuler$']['clone'](), this['state$'] = 0x0;
        }
        ['getUIPos$'](_0x1ca390, _0x157ff3) {
            return _0x157ff3 = _0x157ff3 || new Laya['Vector3'](), this['owner']['worldToVie' + 'wportPoint'](_0x1ca390, _0x157ff3), _0x157ff3;
        }
        ['onUpdate']() {
            this['refreshAni' + 'm$']();
        }
        ['onDestroy']() {
            this['cancelEven' + 'ts$']();
        }
    }
    class _0x7edf4 extends _0x6dd10a {
        constructor() {
            super(), window['curScene'] = this, this['init$']();
        }
        ['init$']() {
            this['initData$'](), this['refreshDat' + 'a$'](), this['monitorEve' + 'nts$'](), this['createScen' + 'e$'](), this['createCame' + 'ra$'](), this['createBg$'](), this['createPlay' + 'er$']();
        }
        ['initData$']() {
            this['fight_stat' + 'e$'] = 0x0;
        }
        ['refreshDat' + 'a$']() {
            this['isLoadedSc' + 'ene$'] = !0x1;
        }
        ['startFight' + '$']() {
            this['fight_stat' + 'e$'] = 0x1;
        }
        ['resetFight' + '$']() {
            this['refreshDat' + 'a$'](), this['baseScene$']['destroy'](), this['baseScene$'] = this['rootScene$']['addChild'](new Laya['Sprite3D']()), this['createCame' + 'ra$'](), this['createBg$'](), this['createPlay' + 'er$'](), this['fight_stat' + 'e$'] = 0x0;
        }
        ['monitorEve' + 'nts$']() {
            this['addE_GameK' + 'ey_ventLis' + 'tener'](_0x5b5578['ON_START_G' + 'AME'], this['startFight' + '$']), this['addE_GameK' + 'ey_ventLis' + 'tener'](_0x5b5578['REST_FIGHT'], this['resetFight' + '$']);
        }
        ['createScen' + 'e$']() {
            this['rootScene$'] = this['addChild'](new Laya['Scene3D']()), this['rootScene$']['ambientCol' + 'or'] = new Laya['Vector3'](0.5, 0.5, 0.5);
            var _0x2cec26 = new Laya['DirectionL' + 'ight']();
            _0x2cec26['color'] = new Laya['Vector3'](0.5, 0.5, 0.5), this['directionL' + 'ight'] = _0x2cec26;
            var _0x2a2f6c = _0x2cec26['transform']['worldMatri' + 'x'];
            _0x2a2f6c['setForward'](new Laya['Vector3'](0.7, -0x2, 1.8)), _0x2cec26['transform']['worldMatri' + 'x'] = _0x2a2f6c, _0x2cec26['shadowDist' + 'ance'] = 0x64, _0x2cec26['shadowReso' + 'lution'] = 0x200, _0x2cec26['shadowPSSM' + 'Count'] = 0x1, _0x2cec26['shadowPCFT' + 'ype'] = 0x0, this['rootScene$']['addChild'](_0x2cec26), this['baseScene$'] = this['rootScene$']['addChild'](new Laya['Sprite3D']());
        }
        ['createCame' + 'ra$']() {
            this['camera$'] = _0x1632e4['create$'](this['baseScene$']);
        }
        ['createPlay' + 'er$']() {
            this['playerCtr$'] = _0x28cf19['create$'](this['baseScene$'], this['onPlayerLo' + 'ded$']['bind'](this));
        }
        ['createBg$']() {
            this['bgCtr$'] = _0x416b95['create$'](this['baseScene$'], this['onBgLoded$']['bind'](this));
        }
        ['onPlayerLo' + 'ded$']() {
            this['checkAllLo' + 'aded$']();
        }
        ['onBgLoded$']() {
            this['checkAllLo' + 'aded$']();
        }
        ['checkAllLo' + 'aded$']() {
            this['playerCtr$'] && this['playerCtr$']['loaded$'] && this['bgCtr$'] && this['bgCtr$']['loaded$'] && (this['isLoadedSc' + 'ene$'] = !0x0, _0x3830d2['getInstanc' + 'e$']()['disp_GameK' + 'ey_atchEve' + 'nt'](_0x5b5578['SCENE_LOAD' + 'ED']));
        }
        get ['isFight$']() {
            return 0x1 == this['fight_stat' + 'e$'];
        }
        ['getUIPos$'](_0x5933cb, _0x1631b9) {
            return this['camera$']['getUIPos$'](_0x5933cb, _0x1631b9);
        }
    }
    _0x7edf4['url'] = 'Scene/Batt' + 'leScene.sc' + 'ene', _0x7edf4['className'] = 'BattleScen' + 'e$';
    class _0x472c21 extends Laya['Script'] {
        constructor() {
            super(), this['coupletKey'] = null, this['sliderKey'] = null, this['carouselKe' + 'y'] = null, this['dialogKey'] = null, this['gameoverKe' + 'y'] = null, this['copyWxKey'] = null, this['reviveKey'] = null, this['_config'] = [], this['cache'] = {
                'slider': [],
                'couplet': [],
                'carousel': [],
                'gameover': [],
                'dialog': [],
                'dialogFriendGames': [],
                'copyWx': [],
                'revive': []
            };
        }
        ['onStart']() {
        }
        ['init$']() {
            this['_config'] = [
                {
                    'name': 'slider',
                    'key': this['sliderKey'],
                    'data': []
                },
                {
                    'name': 'couplet',
                    'key': this['coupletKey'],
                    'data': []
                },
                {
                    'name': 'carousel',
                    'key': this['carouselKe' + 'y'],
                    'data': []
                },
                {
                    'name': 'gameover',
                    'key': this['gameoverKe' + 'y'],
                    'data': []
                },
                {
                    'name': 'dialog',
                    'key': this['dialogKey'],
                    'data': []
                },
                {
                    'name': 'dialogFrie' + 'ndGames',
                    'key': this['carouselKe' + 'y'],
                    'data': []
                },
                {
                    'name': 'copyWx',
                    'key': this['copyWxKey'],
                    'data': []
                },
                {
                    'name': 'revive',
                    'key': this['reviveKey'],
                    'data': []
                }
            ], this['getAdData$']();
        }
        ['getAdData$']() {
            let _0x3bc104 = this;
            if (!window['wx']) {
                let _0x2384db = [
                    {
                        'appid': 'wx4fbc709c' + '03523c0d',
                        'logo': 'https://im' + 'g.2960.net' + '/2019-08-0' + '6/129f821b' + 'e99f996d30' + 'c8cc57dbf7' + 'eea0.png',
                        'title': '几何风暴暴暴暴'
                    },
                    {
                        'appid': 'wxccad312b' + '6eb6d15f',
                        'logo': 'https://im' + 'g.2960.net' + '/2019-08-0' + '6/dca32ac1' + '17dae6d960' + '80151622b9' + 'ebea.png',
                        'title': '几何风暴'
                    },
                    {
                        'appid': 'wx56929af8' + '5b4ee605',
                        'logo': 'https://im' + 'g.2960.net' + '/2019-08-0' + '6/5a138ed0' + '7be51e4fa9' + 'b20900a61b' + '976a.png',
                        'title': '几何风暴'
                    },
                    {
                        'appid': 'wxc83cf066' + '206e8d5f',
                        'logo': 'https://im' + 'g.2960.net' + '/2019-08-0' + '6/e9bc201c' + '4813c88740' + '3e36bb6dfe' + '8402.png',
                        'title': '几何风暴'
                    },
                    {
                        'appid': 'wx1cd174e3' + '98e50d0b',
                        'logo': 'https://im' + 'g.2960.net' + '/2019-08-0' + '6/c97275cd' + '397e63de95' + '0f7494e7b3' + 'ef00.png',
                        'title': '几何风暴'
                    },
                    {
                        'appid': 'wxa4668e10' + 'c31f77c0',
                        'logo': 'https://im' + 'g.2960.net' + '/2019-08-0' + '6/7b3f0adb' + 'ac29079dba' + '7a40ac628f' + 'd1df.png',
                        'title': '几何风暴'
                    },
                    {
                        'appid': 'wxaa07a343' + '502af86c',
                        'logo': 'https://im' + 'g.2960.net' + '/2019-08-0' + '6/ad445412' + 'a0bb84ce92' + '081d78588d' + '4097.png',
                        'title': '几何风暴'
                    },
                    {
                        'appid': 'wx5bcd76a8' + 'aa2089f1',
                        'logo': 'https://im' + 'g.2960.net' + '/2019-08-0' + '6/b7499e5a' + 'e018eec269' + '827bb34149' + '3f99.jpg',
                        'title': '几何风暴'
                    },
                    {
                        'appid': 'wx4afb4917' + 'e558d198',
                        'logo': 'https://im' + 'g.2960.net' + '/2019-08-0' + '6/eae9615b' + 'f03a5f8c96' + 'a12a326fa9' + 'e937.png',
                        'title': '几何风暴'
                    },
                    {
                        'appid': 'wxeee62740' + '1171c2a3',
                        'logo': 'https://im' + 'g.2960.net' + '/2019-08-0' + '6/9132ca95' + 'd9e7be8f18' + 'df77b24ccc' + '9388.png',
                        'title': '几何风暴'
                    }
                ];
                return _0x3bc104['cache']['slider'] = _0x2384db, _0x3bc104['cache']['couplet'] = _0x2384db, _0x3bc104['cache']['carousel'] = _0x2384db, _0x3bc104['cache']['gameover'] = _0x2384db, _0x3bc104['cache']['dialog'] = _0x2384db, _0x3bc104['cache']['dialogFrie' + 'ndGames'] = _0x2384db, _0x3bc104['cache']['copyWx'] = _0x2384db, _0x3bc104['cache']['revive'] = _0x2384db, _0x3bc104['data$'] = _0x3bc104['cache'], _0x3bc104['formatData' + '$'](), pgdk$['isSdkReady' + '$'] = !0x0, new Promise((_0x221fb1, _0x3994cf) => {
                    _0x221fb1();
                });
            }
            return this['initQyAd$']();
        }
        ['initQyAd$']() {
            let _0x32d02a = this, _0x377c66 = [];
            _0x32d02a['_config']['forEach'](_0x2885ff => _0x377c66['push'](_0x2885ff['key']));
            let _0xe4b846 = _0x377c66['join'](',');
            return new Promise((_0x4bbf9e, _0x41ae89) => {
                AdvManager['getIconBut' + 'tons'](_0xe4b846, _0x3163e3 => {
                    _0x4bbf9e(_0x3163e3), _0x41ae89();
                });
            })['then'](_0x2957e9 => {
                for (let _0x41ade5 = 0x0; _0x41ade5 < _0x32d02a['_config']['length']; _0x41ade5++) {
                    let _0x13c6c1 = _0x32d02a['_config'][_0x41ade5];
                    if (_0x13c6c1['data'] = _0x2957e9[_0x13c6c1['key']], _0x32d02a['cache'][_0x13c6c1['name']] && (_0x32d02a['cache'][_0x13c6c1['name']] = _0x2957e9[_0x13c6c1['key']], _0x32d02a['cache'][_0x13c6c1['name']]))
                        for (let _0x5283bf = 0x0; _0x5283bf < _0x32d02a['cache'][_0x13c6c1['name']]['length']; _0x5283bf++) {
                            let _0x2be13a = _0x32d02a['cache'][_0x13c6c1['name']][_0x5283bf]['logo_attr'];
                            _0x32d02a['cache'][_0x13c6c1['name']][_0x5283bf]['logoData'] = _0x32d02a['adIs_gif'](_0x2be13a);
                        }
                }
                _0x32d02a['data$'] = _0x32d02a['cache'], _0x32d02a['formatData' + '$'](), pgdk$['isSdkReady' + '$'] = !0x0;
            });
        }
        ['adIs_gif'](_0x3e98d1) {
            if (Array['isArray'](_0x3e98d1) && _0x3e98d1['length'] > 0x0) {
                let _0xc833a6, _0x43e38b = [];
                for (let _0x4c7d4a = 0x0; _0x4c7d4a < _0x3e98d1['length']; _0x4c7d4a++)
                    (_0xc833a6 = _0x3e98d1[_0x4c7d4a])['frame_coun' + 't'] && _0xc833a6['frame_coun' + 't'] > 0x1 && _0x43e38b['push'](_0xc833a6);
                return 0x0 != _0x43e38b['length'] ? {
                    'gifData': _0x43e38b,
                    'array': _0x3e98d1
                } : {
                    'gifData': null,
                    'array': _0x3e98d1
                };
            }
            return {
                'gifData': null,
                'array': _0x3e98d1
            };
        }
        ['formatData' + '$']() {
            if (window['wx']) {
                for (const _0x1b67af in this['data$'])
                    if (this['data$']['hasOwnProp' + 'erty'](_0x1b67af)) {
                        const _0x2e9c04 = this['data$'][_0x1b67af];
                        if (!_0x2e9c04)
                            return;
                        for (let _0x3321ca = 0x0; _0x3321ca < _0x2e9c04['length']; _0x3321ca++) {
                            let _0x26d13f = _0x2e9c04[_0x3321ca];
                            _0x26d13f['title'] = _0x26d13f['title'], _0x26d13f['img'] = _0x26d13f['logoData'];
                        }
                    }
            } else {
                for (const _0x4c557e in this['data$'])
                    if (this['data$']['hasOwnProp' + 'erty'](_0x4c557e)) {
                        const _0x48cd7f = this['data$'][_0x4c557e];
                        if (!_0x48cd7f)
                            return;
                        for (let _0x3afee0 = 0x0; _0x3afee0 < _0x48cd7f['length']; _0x3afee0++) {
                            let _0x9a9c5f = _0x48cd7f[_0x3afee0];
                            _0x9a9c5f['title'] = _0x9a9c5f['title'], _0x9a9c5f['img'] = _0x9a9c5f['logo'];
                        }
                    }
            }
        }
        ['getAds$'](_0x4a9b7f) {
            return this['data$'][_0x4a9b7f];
        }
    }
    class _0x59e97d extends _0x2ca6bb {
        constructor() {
            super(), this['viewName$'] = '最近使用', this['iconWidth'] = 0x50, this['iconMaskSk' + 'in$'] = 'sdk/image_' + 'circle.png', this['starSkin$'] = 'sdk/image_' + 'star.png', this['backSkin$'] = 'sdk/image_' + 'back.png', this['dataType$'] = 'copyWx';
        }
        static ['create$'](_0x4d051a) {
            if (pgdk$['isShowExit' + '$']()) {
                if (pgdk$['hideBanner' + '$'](), Laya['recentUseU' + 'I$'])
                    return Laya['stage']['addChild'](Laya['recentUseU' + 'I$']), Laya['recentUseU' + 'I$']['getCompone' + 'nt'](_0x59e97d)['resetList$'](), Laya['recentUseU' + 'I$'];
                {
                    let _0x20f68c = Laya['stage']['addChild'](new Laya['Box']());
                    _0x20f68c['zOrder'] = 0x3b9ac9ff, _0x20f68c['bgColor'] = '#FF0000', _0x20f68c['name'] = 'RecentUseU' + 'I', _0x20f68c['viewName'] = '最近使用', _0x20f68c['addCompone' + 'nt'](_0x38bfcf), _0x20f68c['addCompone' + 'nt'](_0x59e97d)['setWidget$'](_0x20f68c, 0x0, 0x0, 0x0, 0x0), Laya['recentUseU' + 'I$'] = _0x20f68c;
                }
            } else
                _0x4d051a && _0x4d051a();
        }
        ['onStart']() {
            this['initUI$'](), this['executeWhe' + 'nSdkReady$'](this, this['createList' + '$']['bind'](this));
        }
        ['initUI$']() {
            this['createBg$'](), this['createHead' + 'er$'](), this['createBack' + 'Button$']();
        }
        ['addChild'](_0xf3f231) {
            return this['owner']['addChild'](_0xf3f231);
        }
        ['createBg$']() {
            let _0x3d8ded = this['addChild'](new Laya['Box']());
            _0x3d8ded['bgColor'] = '#FFFFFF', this['setWidget$'](_0x3d8ded, 0x0, 0x0, 0x0, 0x0);
        }
        ['createHead' + 'er$']() {
            this['head'] = this['addChild'](new Laya['Box']()), this['head']['bgColor'] = '#F0F0F0', this['head']['height'] = 0x96, this['addChild'](this['head']), this['setWidget$'](this['head'], 0x0, null, 0x0, 0x0);
        }
        ['createBack' + 'Button$']() {
            let _0x4abfc3 = this['head']['addChild'](new Laya['Box']());
            _0x4abfc3['width'] = 0xc8, _0x4abfc3['height'] = 0x64, this['setWidget$'](_0x4abfc3, null, 0x0, 0x0, null);
            let _0x245207 = _0x4abfc3['addChild'](new Laya['Image']());
            _0x245207['left'] = 0x14, _0x245207['centerY'] = 0x0, _0x245207['width'] = 0x19, _0x245207['height'] = 0x2b, _0x245207['skin'] = this['backSkin$'];
            let _0x184b49 = this['createLabe' + 'l$'](_0x4abfc3, 0x1a, '最近使用', '#000000');
            _0x184b49['left'] = 0x3c, _0x184b49['centerY'] = 0x0, _0x4abfc3['on'](Laya['Event']['CLICK'], this, function () {
                this['active'] = !0x1, this['parent$'] = this['parent'], this['owner']['removeSelf']();
            }['bind'](this));
        }
        ['resetList$']() {
            this['list$'] && (this['list$']['array'] = pgdk$['unsortedAd' + 's$'](this['dataType$']));
        }
        ['createList' + '$']() {
            this['list$'] = this['addChild'](this['createBase' + 'List$'](!0x1)), this['setWidget$'](this['list$'], 0x96, 0x0, 0x0, 0x0), this['list$']['renderHand' + 'ler'] = new Laya['Handler'](this, this['renderHand' + 'ler$']), this['list$']['itemRender'] = {
                'type': 'Box',
                'props': {
                    'width': 0x2d0,
                    'height': 0x96,
                    'left': 0x0,
                    'right': 0x0
                }
            }, this['resetList$']();
        }
        ['renderHand' + 'ler$'](_0x54bce7, _0x2f79cc) {
            if (0x0 === _0x54bce7['numChildre' + 'n']) {
                let _0x288643 = _0x54bce7['addChild'](new Laya['Box']());
                _0x288643['bgColor'] = '#F0F0F0', _0x288643['height'] = 0x2, this['setWidget$'](_0x288643, null, 0x2, 0x64, 0x0), _0x54bce7['addChild'](_0x288643), _0x54bce7['icon$'] = _0x54bce7['addChild'](new Laya['Image']()), _0x54bce7['icon$']['name'] = 'GameIcon', _0x54bce7['icon$']['x'] = 0x28, _0x54bce7['icon$']['centerY'] = 0.5, _0x54bce7['icon$']['width'] = _0x54bce7['icon$']['height'] = this['iconWidth'], this['setIcon$'](_0x54bce7);
                let _0x269499 = new Laya['Image']();
                _0x269499['width'] = _0x269499['height'] = this['iconWidth'], _0x269499['skin'] = this['iconMaskSk' + 'in$'], _0x54bce7['icon$']['mask'] = _0x269499, _0x54bce7['title$'] = this['createLabe' + 'l$'](_0x54bce7, 0x18, _0x54bce7['dataSource']['title'], '#000000'), _0x54bce7['title$']['anchorX'] = 0x0, _0x54bce7['title$']['centerY'] = 0.5, this['setWidget$'](_0x54bce7['title$'], null, null, 0xdc, null), _0x54bce7['star$'] = _0x54bce7['addChild'](new Laya['Image']()), _0x54bce7['star$']['width'] = _0x54bce7['star$']['height'] = 0x32, _0x54bce7['star$']['centerY'] = 0.5, _0x54bce7['star$']['skin'] = this['starSkin$'], this['setWidget$'](_0x54bce7['star$'], null, null, null, 0x50);
            }
            this['setIcon$'](_0x54bce7), _0x54bce7['title$']['text'] = _0x54bce7['dataSource']['title'], _0x54bce7['star$']['visible'] = Math['random']() < 0.2, this['registerAd' + 'ClickEvent' + '$'](_0x54bce7, this['viewName$']);
        }
        ['setIcon$'](_0x242eca) {
            let _0x448b07, _0x92a81b = _0x242eca['dataSource']['img'];
            if ('string' == typeof _0x92a81b)
                _0x242eca['icon$']['skin'] = _0x92a81b;
            else {
                if (Object['keys'](_0x92a81b)['length']) {
                    for (const _0x3393be in _0x92a81b)
                        if (_0x92a81b['hasOwnProp' + 'erty'](_0x3393be)) {
                            const _0x26bdda = _0x92a81b[_0x3393be];
                            if ('gifData' === _0x3393be && _0x26bdda && Object['keys'](_0x26bdda)['length']) {
                                let _0x119fde = new _0x2ec5b8({
                                        'width': 0x96,
                                        'height': 0x96
                                    }), _0x17b094 = _0x242eca['icon$']['addChild'](_0x119fde);
                                _0x448b07 = pgdk$['arrayRando' + 'm'](_0x26bdda), _0x17b094['setImage'](_0x448b07);
                            } else {
                                if ('array' === _0x3393be && _0x26bdda && Object['keys'](_0x26bdda)['length']) {
                                    _0x448b07 = pgdk$['arrayRando' + 'm'](_0x26bdda), _0x242eca['icon$']['skin'] = _0x448b07['path'];
                                    break;
                                }
                            }
                        }
                }
            }
        }
    }
    class _0x2359e4 extends _0x2ca6bb {
        constructor() {
            super(), this['skin$'] = null, this['position$'] = 'right';
        }
        ['onStart']() {
            this['init$']();
        }
        ['init$']() {
            pgdk$['isParamGot' + '$'] || Laya['timer']['once'](0x3e8, this, this['init$']), pgdk$['isShowExit' + '$']() && this['initUI$']();
        }
        ['initRightT' + 'opCloseBtn' + '$']() {
            if ('undefined' != typeof wx && wx['getMenuBut' + 'tonBoundin' + 'gClientRec' + 't']) {
                let _0x255113 = wx['getMenuBut' + 'tonBoundin' + 'gClientRec' + 't']();
                if (!_0x255113)
                    return;
                if (0x0 === _0x255113['left'])
                    return Laya['timer']['once'](0x64, this, this['initRightT' + 'opCloseBtn' + '$']), 0x0;
                this['ui$']['visible'] = !0x0;
                let _0x560f5f = Laya['stage']['width'] / Laya['Browser']['clientWidt' + 'h'], _0x5a1a8e = Laya['stage']['height'] / Laya['Browser']['clientHeig' + 'ht'];
                this['ui$']['width'] = _0x255113['width'] * _0x560f5f, this['ui$']['height'] = _0x255113['height'] * _0x5a1a8e, 'left' === this['position$'] ? (this['ui$']['top'] = _0x255113['top'] * _0x5a1a8e, this['ui$']['left'] = 0x14) : (this['ui$']['top'] = _0x255113['bottom'] * _0x5a1a8e, this['ui$']['left'] = _0x255113['left'] * _0x560f5f);
            }
        }
        ['initUI$']() {
            this['ui$'] = new Laya['Image'](), Laya['stage']['addChild'](this['ui$']), this['ui$']['zOrder'] = 0x2540be3ff, this['ui$']['name'] = 'ButtonExit', this['ui$']['skin'] = this['skin$'], this['ui$']['width'] = 0x82, this['ui$']['height'] = 0x32, 'left' === this['position$'] ? this['setWidget$'](this['ui$'], 0x28, null, 0x14, null) : this['setWidget$'](this['ui$'], 0x64, null, 0x23a, null), Laya['btnRightTo' + 'pExit$'] = this['ui$'], this['initRightT' + 'opCloseBtn' + '$'](), this['ui$']['on'](Laya['Event']['CLICK'], this['ui$'], function () {
                _0x59e97d['create$']();
            }['bind'](this['ui$']));
        }
    }
    class _0xa675de extends Laya['Script'] {
        constructor() {
            super(), this['_banners$'] = [], this['MIN_BANNER' + '_WIDTH$'] = 0x12c, this['MIN_BANNER' + '_HEIGHT$'] = 0x7a;
        }
        ['onStart']() {
            this['initShare$'](), this['isVideoAct' + 'ive$'] && this['initVideoA' + 'd$'](), this['isInsertAc' + 'tive$'] && this['initInters' + 'titialAd$'](), this['_refreshBa' + 'nner$']();
        }
        ['onUpdate']() {
            this['_refreshBa' + 'nner$']();
        }
        ['navigate2M' + 'ini$'](_0x4f52d6, _0x55ebed, _0x5ae365, _0x387994) {
            'undefined' != typeof wx ? wx['navigateTo' + 'MiniProgra' + 'm'] && _0x4f52d6['appid'] && wx['navigateTo' + 'MiniProgra' + 'm']({
                'appId': _0x4f52d6['appid'],
                'path': _0x4f52d6['path'],
                'fail': function (_0x491c25) {
                    _0x491c25 && console['log'](_0x491c25['errMsg']), _0x491c25 && _0x491c25['errMsg'] && -0x1 !== _0x491c25['errMsg']['indexOf']('cancel') && (console['debug']('取消导出'), _0x387994 && _0x387994());
                },
                'success': function () {
                    _0x5ae365 && _0x5ae365();
                }
            }) : console['warn']('非微信环境，无法跳转', _0x4f52d6);
        }
        ['showBanner' + '$'](_0x5a0184, _0x123628) {
            this['isAdActive' + '$'] && (this['_needBanne' + 'r$'] = !0x0, console['log'](now$(), '显示广告'), 'undefined' != typeof wx && wx['createBann' + 'erAd'] && (this['_banners$']['length'] >= 0x2 && this['_hideBanne' + 'r$'](), this['_banners$']['length'] > 0x0 && (this['_curBanner' + '$'] = this['_banners$'][0x0], this['_curBanner' + '$']['startShowT' + 'ime$'] = Date['now'](), this['_curBanner' + '$']['rect$'] = _0x5a0184, this['_curBanner' + '$']['widget$'] = _0x123628, this['_curBanner' + '$']['show'](), this['_resizeBan' + 'nerPos$'](this['_curBanner' + '$'], _0x5a0184, _0x123628)), this['_createBan' + 'ner$'](!0x0, _0x5a0184, _0x123628)));
        }
        ['hideBanner' + '$']() {
            this['_needBanne' + 'r$'] = !0x1, this['_hideBanne' + 'r$']();
        }
        ['_hideBanne' + 'r$']() {
            if (console['log'](Date['now'](), '隐藏广告'), 'undefined' == typeof wx)
                return;
            if (!this['_curBanner' + '$'])
                return;
            if (0x0 === this['_banners$']['length'])
                return;
            let _0x923fca = this['_banners$']['removeAt$'](0x0);
            if (_0x923fca['hide'](), this['_banners$']['length'] >= 0x1 && _0x923fca['$showTime'] > 0x7530) {
                console['log'](Date['now'](), '销毁广告');
                let _0x54e388 = [
                    this['_curBanner' + '$']['$id'],
                    !0x1,
                    this['_curBanner' + '$']['style']['left'],
                    this['_curBanner' + '$']['style']['top'],
                    this['_curBanner' + '$']['style']['height']
                ];
                this['_curBanner' + '$']['destroy'](), this['_curBanner' + '$'] = void 0x0, this['__createBa' + 'nner$'](_0x54e388);
            } else
                this['_curBanner' + '$'] = void 0x0, this['_banners$']['push'](_0x923fca);
        }
        ['_createBan' + 'ner$'](_0x38a28b, _0x144457, _0x2f175a) {
            if ('undefined' == typeof wx || !wx['createBann' + 'erAd'])
                return;
            if (this['bannerIds$']['length'] <= 0x0)
                return;
            let _0x5c306e = this['bannerIds$']['removeAt$'](Math['floor'](Math['random']() * this['bannerIds$']['length']));
            this['__createBa' + 'nner$']([
                _0x5c306e,
                _0x38a28b,
                _0x144457,
                _0x2f175a
            ]);
        }
        ['__createBa' + 'nner$'](_0xfe3619) {
            if (!_0xfe3619)
                return;
            console['log'](now$(), '创建广告');
            let _0x49c1d6 = _0xfe3619[0x0], _0x197b83 = _0xfe3619[0x1], _0xa4c442 = _0xfe3619[0x2], _0x8e5c7 = _0xfe3619[0x3], _0x1d03e1 = wx['createBann' + 'erAd']({
                    'adUnitId': _0x49c1d6,
                    'style': {
                        'left': _0xa4c442['left'],
                        'top': _0xa4c442['top'],
                        'width': _0xa4c442['width']
                    }
                });
            _0x1d03e1['id$'] = _0x49c1d6, _0x1d03e1['onLoad$'] = function () {
                this['_onBannerL' + 'oad$'](_0x1d03e1, _0x197b83, _0xa4c442, _0x8e5c7);
            }['bind'](this), _0x1d03e1['onError$'] = function (_0x502a54) {
                console['warn']('广告加载失败:'), console['warn'](_0x502a54), this['destroy'] && this['destroy'](), setTimeout(this['__createBa' + 'nner$']['bind'](this, _0xfe3619), 0xbb8, _0xfe3619);
            }['bind'](this), _0x1d03e1['onLoad'](_0x1d03e1['onLoad$']['bind'](_0x1d03e1)), _0x1d03e1['onError'](_0x1d03e1['onError$']['bind'](_0x1d03e1, _0xfe3619));
        }
        ['_onBannerL' + 'oad$'](_0xd8e302, _0x6f0587, _0x1a8c92, _0x63a899) {
            this['_needBanne' + 'r$'] && _0x6f0587 && !this['_curBanner' + '$'] ? (this['_curBanner' + '$'] = _0xd8e302, this['_curBanner' + '$']['startShowT' + 'ime$'] = Date['now'](), this['_curBanner' + '$']['rect$'] = _0x1a8c92, this['_curBanner' + '$']['widget$'] = _0x63a899, this['_curBanner' + '$']['show'](), this['_banners$']['insert$'](0x0, _0xd8e302), this['_resizeBan' + 'nerPos$'](_0xd8e302, _0x1a8c92, _0x63a899)) : this['_banners$']['push'](_0xd8e302);
        }
        ['_resizeBan' + 'nerPos$'](_0x26be17, _0x33400d, _0x499359) {
            if (_0x33400d['width'] / _0x33400d['height'] > _0x26be17['style']['realWidth'] / _0x26be17['style']['realHeight']) {
                if (_0x26be17['style']['realHeight'] > _0x33400d['height'] && _0x26be17['style']['realWidth'] > this['MIN_BANNER' + '_WIDTH$']) {
                    let _0x198093 = Math['max'](this['MIN_BANNER' + '_WIDTH$'], _0x26be17['style']['realWidth'] / (_0x26be17['style']['realHeight'] / _0x33400d['height']));
                    _0x26be17['style']['width'] = _0x198093;
                }
            } else
                'undefined' != typeof cc ? _0x26be17['style']['width'] = Math['min'](cc['view']['getFrameSi' + 'ze']()['width'], Math['max'](this['MIN_BANNER' + '_WIDTH$'], _0x33400d['width'])) : 'undefined' != typeof Laya && (_0x26be17['style']['width'] = Math['min'](Laya['Browser']['clientWidt' + 'h'], Math['max'](this['MIN_BANNER' + '_WIDTH$'], _0x33400d['width'])));
            let _0x282600 = _0x26be17['style']['realHeight'] / _0x26be17['style']['realWidth'] * _0x26be17['style']['width'];
            'number' == typeof _0x499359['top'] && 'number' != typeof _0x499359['bottom'] ? _0x26be17['style']['top'] = _0x33400d['top'] : 'number' != typeof _0x499359['top'] && 'number' == typeof _0x499359['bottom'] ? _0x26be17['style']['top'] = _0x33400d['top'] + _0x33400d['height'] - _0x282600 : _0x26be17['style']['top'] = _0x33400d['top'] + _0x33400d['height'] / 0x2 - _0x282600 / 0x2, 'number' == typeof _0x499359['left'] && 'number' != typeof _0x499359['right'] ? _0x26be17['style']['left'] = _0x33400d['left'] : 'number' != typeof _0x499359['left'] && 'number' == typeof _0x499359['right'] ? _0x26be17['style']['left'] = _0x33400d['left'] + _0x33400d['width'] - _0x26be17['style']['width'] : _0x26be17['style']['left'] = _0x33400d['left'] + _0x33400d['width'] / 0x2 - _0x26be17['style']['width'] / 0x2;
        }
        ['_refreshBa' + 'nner$']() {
            this['_needBanne' + 'r$'] && this['_curBanner' + '$'] && (Date['now']() - this['_curBanner' + '$']['startShowT' + 'ime$'] > this['bannerShow' + 'Spacing$'] ? (this['showBanner' + '$'](this['_curBanner' + '$']['rect$'], this['_curBanner' + '$']['widget$']), console['log'](now$(), '刷新Banner')) : this['_resizeBan' + 'nerPos$'](this['_curBanner' + '$'], this['_curBanner' + '$']['rect$'], this['_curBanner' + '$']['widget$']));
        }
        ['initInters' + 'titialAd$']() {
            this['createInte' + 'rstitialAd' + '$']();
        }
        ['createInte' + 'rstitialAd' + '$']() {
            this['isAdActive' + '$'] ? 'undefined' != typeof wx && wx['createInte' + 'rstitialAd'] ? this['insertUnit' + 'Id$'] ? (this['_curInters' + 'titialAd$'] = wx['createInte' + 'rstitialAd']({ 'adUnitId': this['insertUnit' + 'Id$'] }), this['_curInters' + 'titialAd$']['onClose'](function () {
                this['createInte' + 'rstitialAd' + '$']();
            }['bind'](this))) : console['warn'](now$(), '未配置插屏广告ID') : console['warn'](now$(), '非微信环境，无法创建' + '插屏广告') : console['warn'](now$(), '流量主未开通，无法创' + '建插屏广告');
        }
        ['showInters' + 'titialAd$']() {
            this['isAdActive' + '$'] ? 'undefined' != typeof wx && wx['createInte' + 'rstitialAd'] ? this['_curInters' + 'titialAd$'] ? this['_curInters' + 'titialAd$'] && this['_curInters' + 'titialAd$']['show']()['catch'](_0x1e37d0 => {
                console['error'](_0x1e37d0);
            }) : console['warn'](now$(), '请先使用initIn' + 'terstitial' + 'Ad$()，预加载插' + '屏广告') : console['warn'](now$(), '非微信环境，无法创建' + '插屏广告') : console['warn'](now$(), '流量主未开通，无法创' + '建插屏广告');
        }
        ['initShare$']() {
            if (window['wx'] && wx['showShareM' + 'enu'](), window['wx'] && wx['updateShar' + 'eMenu']({ 'withShareTicket': !0x0 }), this['shares'] = [
                    {
                        'title': '我发现了一种好喝的果' + '汁！',
                        'imageUrl': 'share/shar' + 'e1.jpg'
                    },
                    {
                        'title': '榨汁100%，我榨的' + '汁是万里挑一！',
                        'imageUrl': 'share/shar' + 'e1.jpg'
                    }
                ], !window['wx'])
                return;
            let _0x21a0a2 = this['shares'][Math['floor'](this['shares']['length'] * Math['random']())];
            wx['onShareApp' + 'Message'](function () {
                return {
                    'title': _0x21a0a2['title'],
                    'imageUrl': _0x21a0a2['imageUrl']
                };
            });
        }
        ['share$']() {
            if (!window['wx'])
                return;
            this['onShare'] = !0x0;
            let _0x2f6b53 = this['shares'][Math['floor'](this['shares']['length'] * Math['random']())];
            wx['shareAppMe' + 'ssage']({
                'title': _0x2f6b53['title'],
                'imageUrl': _0x2f6b53['imageUrl']
            });
        }
        ['initVideoA' + 'd$']() {
            this['hasVideoIn' + 'it$'] || (this['_videoErro' + 'rTimes'] = 0x0, this['_maxVideoE' + 'rrorTimes'] = 0x5, this['createVide' + 'oAd$'](), this['hasVideoIn' + 'it$'] = !0x0);
        }
        ['createVide' + 'oAd$']() {
            this['isAdActive' + '$'] ? 'undefined' != typeof wx && wx['createRewa' + 'rdedVideoA' + 'd'] ? this['videoUnitI' + 'd$'] ? this['_videoAd$'] || (this['_videoAd$'] = wx['createRewa' + 'rdedVideoA' + 'd']({ 'adUnitId': this['videoUnitI' + 'd$'] }), this['_videoAd$']['onLoad'](function () {
                this['_videoErro' + 'rTimes'] = 0x0, console['log'](now$(), '激励式视频加载成功');
            }['bind'](this)), this['_videoAd$']['onClose'](function (_0x5f275c) {
                this['_videoClos' + 'eCallback$'] && (this['_videoClos' + 'eCallback$'](!_0x5f275c || _0x5f275c['isEnded']), this['_videoClos' + 'eCallback$'] = void 0x0);
            }['bind'](this)), this['_videoAd$']['onError'](function (_0x1d9aa0) {
                this['_videoErro' + 'rTimes']++, this['_videoErro' + 'rTimes'] >= this['_maxVideoE' + 'rrorTimes'] ? console['warn'](now$(), '激励式视频加载失败次' + '数过多,\x20停止重试。' + '\x20') : (console['warn'](now$(), '激励式视频加载失败,' + '\x20重试' + this['_videoErro' + 'rTimes']), console['warn'](_0x1d9aa0), this['_videoAd$']['load']());
            }['bind'](this))) : console['warn'](now$(), '未配置激励式视频ID') : console['warn'](now$(), '非微信环境，无法创建' + '激励式视频') : console['warn'](now$(), '流量主未开通，无法创' + '建激励式视频');
        }
        ['showVideoA' + 'd$'](_0x4eed3a) {
            return this['isAdActive' + '$'] ? 'undefined' != typeof wx && wx['createRewa' + 'rdedVideoA' + 'd'] ? void (this['_videoAd$'] ? !this['_videoAd$'] || this['_videoErro' + 'rTimes'] >= this['_maxVideoE' + 'rrorTimes'] ? _0x4eed3a && _0x4eed3a(!0x1) : (this['_videoClos' + 'eCallback$'] = _0x4eed3a, this['_videoAd$']['show']()) : console['error'](now$(), '请先使用initVi' + 'deoAd$()，预' + '加载激励式视频')) : (console['warn'](now$(), '非微信环境，无法播放' + '激励式视频。当做成功' + '回调。'), void (_0x4eed3a && _0x4eed3a(!0x0))) : (console['warn'](now$(), '流量主未开通，无法创' + '建激励式视频。当做成' + '功回调。'), void (_0x4eed3a && _0x4eed3a(!0x0)));
        }
        ['getHeadIco' + 'nSp$'](_0x467a3f, _0xcb31d5, _0x3fdd92, _0x42ab93, _0x2410a8, _0x4c4f10, _0x35a610) {
            if (!window['wx'])
                return;
            let _0x1febcf = _0x2410a8 * _0x4c4f10, _0x2aa04d = this;
            if (!_0x2aa04d['sharedCanv' + 'as']) {
                var _0x10fe9a = wx['getOpenDat' + 'aContext']();
                _0x2aa04d['sharedCanv' + 'as'] = _0x10fe9a['canvas'];
            }
            let _0x2051ed = _0x4c4f10 * _0x467a3f + (_0x4c4f10 - 0x1) * _0x3fdd92, _0x1c8b18 = _0x2410a8 * _0xcb31d5 + (_0x2410a8 - 0x1) * _0x42ab93;
            _0x2aa04d['sharedCanv' + 'as']['width'] = _0x2051ed, _0x2aa04d['sharedCanv' + 'as']['height'] = _0x1c8b18, _0x35a610 = _0x35a610 || new Laya['Sprite']();
            var _0x256dd9 = new Laya['Texture2D'](0x0, 0x0, Laya['TextureFor' + 'mat']['R8G8B8A8'], !0x0, !0x0);
            _0x256dd9['loadImageS' + 'ource'](_0x2aa04d['sharedCanv' + 'as']), _0x2aa04d['shareTextu' + 're'] = new Laya['Texture'](_0x256dd9), _0x2aa04d['shareTextu' + 're']['bitmap']['alwaysChan' + 'ge'] = !0x1;
            let _0x4a6de0, _0x16d4ce, _0x350c85 = {
                    'friendcontainer': {
                        'width': _0x2051ed,
                        'height': _0x1c8b18
                    }
                }, _0x1c9537 = '<view\x20id=\x27' + 'friendcont' + 'ainer\x27>', _0x31a791 = _0x1febcf;
            for (; --_0x31a791 > -0x1;)
                _0x1c9537 += '<image\x20id=' + '\x27headicon' + _0x31a791 + ('\x27\x20src=\x27\x27><' + '/image>'), _0x4a6de0 = _0x31a791 % _0x4c4f10 + 0x1, _0x16d4ce = Math['floor'](_0x31a791 / _0x4c4f10) + 0x1, _0x350c85['headicon' + _0x31a791] = {
                    'width': _0x467a3f,
                    'height': _0xcb31d5,
                    'position': 'absolute',
                    'left': (_0x467a3f + _0x3fdd92) * (_0x4a6de0 - 0x1),
                    'top': (_0xcb31d5 + _0x42ab93) * (_0x16d4ce - 0x1)
                };
            let _0x150efd = {
                'type': 'refresh',
                'row': _0x2410a8,
                'column': _0x4c4f10,
                'w': _0x467a3f,
                'h': _0xcb31d5,
                'spaceX': _0x3fdd92,
                'spaceY': _0x42ab93,
                'html': _0x1c9537 += '</view>',
                'style': _0x350c85
            };
            return wx['postMessag' + 'e'](JSON['stringify'](_0x150efd)), _0x35a610['refreshCou' + 'ntT'] = 0x1388, _0x35a610['visible'] = !0x0, _0x35a610['graphics']['clear'](), _0x35a610['graphics']['drawTextur' + 'e'](_0x2aa04d['shareTextu' + 're'], 0x0, 0x0, _0x2aa04d['shareTextu' + 're']['width'], _0x2aa04d['shareTextu' + 're']['height']), (_0x35a610['intervalId'] > 0x0 && clearInterval(_0x35a610['intervalId']), _0x35a610['intervalId'] = setInterval(function () {
                _0x35a610['destroyed'] ? clearInterval(_0x35a610['intervalId']) : (_0x2aa04d['shareTextu' + 're']['bitmap']['loadImageS' + 'ource'](_0x2aa04d['sharedCanv' + 'as']), _0x35a610['refreshCou' + 'ntT'] -= 0x64, _0x35a610['refreshCou' + 'ntT'] < 0x0 && clearInterval(_0x35a610['intervalId']));
            }, 0x64), _0x35a610);
        }
    }
    class _0x377fed extends _0xa675de {
        constructor() {
            super();
        }
        ['navigate2M' + 'ini$'](_0x4612e7, _0x467c94, _0x3d1d29, _0xb1e78d) {
            'undefined' != typeof wx ? wx['h_ToMinPro' + 'gram'] && _0x4612e7['appid'] && (_0x4612e7['fail'] = function (_0x2d696d) {
                _0x2d696d && console['log'](_0x2d696d['errMsg']), _0x2d696d && _0x2d696d['errMsg'] && -0x1 !== _0x2d696d['errMsg']['indexOf']('cancel') && (console['debug']('取消导出'), '最近使用' != _0x467c94 && '好友热玩' != _0x467c94 && '游戏中心' != _0x467c94 && _0x311bf8['create'](), _0xb1e78d && _0xb1e78d());
            }, _0x4612e7['success'] = function () {
                _0x3d1d29 && _0x3d1d29();
            }, _0x4612e7['appId'] = _0x4612e7['appid'], wx['h_ToMinPro' + 'gram'](_0x4612e7)) : console['warn']('非微信环境，无法跳转', _0x4612e7);
        }
    }
    class _0x457c2b extends _0x7edf4 {
        constructor() {
            super();
        }
    }
    _0x457c2b['url'] = 'Scene/Batt' + 'leSceneOpp' + 'o.scene', _0x457c2b['className'] = 'BattleScen' + 'eOppo$';
    class _0x390397 extends Laya['Script'] {
        constructor() {
            super();
        }
    }
    class _0x526e87 extends Laya['Script'] {
        constructor() {
            super(), this['channel$'] = null, this['appId$'] = null, this['isAdActive' + '$'] = !0x0, this['nativeAdId' + 's$'] = [], this['bannerId$'] = null, this['isVideoAct' + 'ive$'] = null, this['videoUnitI' + 'd$'] = null, this['isInsertAc' + 'tive$'] = !0x0, this['insertUnit' + 'Id$'] = null, this['sysInfo'] = {}, this['nativeAds$'] = [], this['userId'] = '';
        }
        ['onStart']() {
            this['init$']();
        }
        ['init$']() {
            console['log']('tcy\x20oppoSD' + 'K初始化'), this['getSceneIn' + 'fo$'](), this['curBannerA' + 'd$'] = void 0x0, this['curVideoAd' + '$'] = void 0x0, this['curNativeA' + 'd$'] = void 0x0, this['bannerStat' + 'us$'] = -0x1, this['_initVideo' + '$'](), this['createNati' + 'veAds$'](), this['_createInt' + 'erstitialA' + 'd$']();
        }
        ['navigate2M' + 'ini$'](_0x431ccd, _0x3a751c, _0x56b3bc, _0x310649) {
            if (pgdk$['dataHandle' + 'r$']['navigate2M' + 'ini$'])
                pgdk$['dataHandle' + 'r$']['navigate2M' + 'ini$'](_0x431ccd, _0x3a751c, _0x56b3bc, _0x310649);
            else {
                var _0x3cb40a = _0x431ccd['extraData'] || {};
                _0x3cb40a['from'] = this['appId$'], qg['navigateTo' + 'MiniGame']({
                    'pkgName': _0x431ccd['pkg_name'],
                    'path': _0x431ccd['path'],
                    'extraData': _0x3cb40a
                });
            }
        }
        ['getSceneIn' + 'fo$']() {
            window['qg'] && qg['getSystemI' + 'nfo']({
                'success': function (_0x1eeb49) {
                    this['sysInfo'] = _0x1eeb49;
                }['bind'](this),
                'fail': function (_0x3c341b) {
                    console['log']('tcy\x20获取系统信息' + '失败'), console['log'](_0x3c341b);
                }['bind'](this),
                'complete': function (_0x353fa2) {
                    console['log']('tcy\x20获取系统信息' + '接口调用结束'), console['log'](_0x353fa2);
                }['bind'](this)
            });
        }
        ['_createBan' + 'ner$'](_0x45d650) {
            if (!window['qg'])
                return;
            if (!this['isAdActive' + '$'])
                return void console['warn']('tcy\x20广告组未开通' + '，无法创建banne' + 'r广告');
            if ('undefined' == typeof qg || !qg['createBann' + 'erAd'])
                return void console['warn']('tcy\x20非oppo环' + '境，无法创建激ban' + 'ner广告');
            if (!this['bannerId$'])
                return void console['warn']('tcy\x20未配置ban' + 'ner广告ID');
            var _0x3ce193 = this['sysInfo']['screenWidt' + 'h'], _0x5528a6 = this['sysInfo']['screenHeig' + 'ht'];
            console['log'](this['bannerId$']), console['log'](qg), console['log'](window['qg']), console['log']('tcy\x20开始创建op' + 'pobanner广告'), this['curBannerA' + 'd$'] = qg['createBann' + 'erAd']({
                'adUnitId': this['bannerId$'],
                'style': {
                    'left': 0x0,
                    'top': _0x5528a6 - 0x64,
                    'width': _0x3ce193,
                    'height': 0x12c
                }
            });
            let _0x535d7c = this;
            this['curBannerA' + 'd$']['onLoad'](function () {
                console['log']('tcy\x20banner' + '加载成功'), _0x535d7c['curBannerA' + 'd$']['show']();
            }), this['curBannerA' + 'd$']['onError'](function (_0x54a16f) {
                console['log']('tcy\x20banner' + '加载失败'), console['log'](_0x54a16f);
            });
        }
        ['showBanner' + '$'](_0x5631c3, _0x5d51c6) {
            this['_showBanne' + 'r$'](_0x5631c3, _0x5d51c6);
        }
        ['_showBanne' + 'r$'](_0x391966, _0x44eedc) {
            window['qg'] && 0x0 != this['bannerStat' + 'us$'] && (console['log']('tcy\x20展示oppo' + 'banner广告'), this['curBannerA' + 'd$'] ? (console['log']('tcy\x20oppoba' + 'nner存在'), this['bannerStat' + 'us$'] = 0x0, this['curBannerA' + 'd$']['show']()) : this['_createBan' + 'ner$']({
                'rect': _0x391966,
                'widget': _0x44eedc
            }));
        }
        ['hideBanner' + '$']() {
            window['qg'] && 0x1 != this['bannerStat' + 'us$'] && (this['curBannerA' + 'd$'] ? (this['bannerStat' + 'us$'] = 0x1, this['curBannerA' + 'd$']['hide']()) : this['_createBan' + 'ner$']());
        }
        ['_initVideo' + '$']() {
            this['_videoErro' + 'rTimes'] = 0x0, this['_maxVideoE' + 'rrorTimes'] = 0x5, this['onVideoLoa' + 'dOk'] = !0x1, this['_createVid' + 'eoAd$'](), console['log']('tcy\x20初始化视频广' + '告');
        }
        ['_createVid' + 'eoAd$']() {
            window['qg'] && (this['isVideoAct' + 'ive$'] ? 'undefined' != typeof qg && qg['createRewa' + 'rdedVideoA' + 'd'] ? this['videoUnitI' + 'd$'] ? this['curVideoAd' + '$'] && '{}' != JSON['stringify'](this['curVideoAd' + '$']) || (console['log']('tcy\x20创建视频广告'), this['curVideoAd' + '$'] = qg['createRewa' + 'rdedVideoA' + 'd']({ 'adUnitId': this['videoUnitI' + 'd$'] }), this['curVideoAd' + '$']['onLoad'](function () {
                this['_videoErro' + 'rTimes'] = 0x0, this['onVideoLoa' + 'dOk'] = !0x0, console['log']('tcy\x20激励式视频加' + '载成功');
            }['bind'](this)), this['curVideoAd' + '$']['onClose'](function (_0x39434e) {
                console['log']('tcy\x20关闭视频'), this['curVideoAd' + '$'] = void 0x0, this['onVideoLoa' + 'dOk'] = !0x1, this['_videoClos' + 'eCallback$'] && (console['log']('tcy\x20关闭视频执行' + '回调'), console['log'](this['_videoClos' + 'eCallback$']), this['_videoClos' + 'eCallback$'](!_0x39434e || _0x39434e['isEnded']), this['_videoClos' + 'eCallback$'] = void 0x0);
            }['bind'](this)), this['curVideoAd' + '$']['onError'](function (_0x371973) {
                this['_videoErro' + 'rTimes']++, this['_videoErro' + 'rTimes'] >= this['_maxVideoE' + 'rrorTimes'] && (console['warn']('tcy\x20激励式视频加' + '载失败次数过多,\x20停' + '止重试。\x20'), this['_initVideo' + '$']()), console['warn']('tcy\x20激励式视频加' + '载失败,\x20重试' + this['_videoErro' + 'rTimes']), console['warn'](JSON['stringify'](_0x371973)), this['curVideoAd' + '$']['load']();
            }['bind'](this)), this['curVideoAd' + '$']['load']()) : console['warn']('tcy\x20未配置视频广' + '告ID') : console['warn']('tcy\x20非oppo环' + '境，无法创建视频广告') : console['warn']('tcy\x20广告组未开通' + '，无法创建视频广告'));
        }
        ['showVideoA' + 'd$'](_0x157a51) {
            return console['log'](JSON['stringify'](this['isAdActive' + '$'])), this['isVideoAct' + 'ive$'] ? 'undefined' != typeof qg && qg['createRewa' + 'rdedVideoA' + 'd'] ? (console['log']('tcy\x20视频播放'), console['log'](JSON['stringify'](this['curVideoAd' + '$'])), this['curVideoAd' + '$'] && this['onVideoLoa' + 'dOk'] ? (this['_videoClos' + 'eCallback$'] = _0x157a51, void this['curVideoAd' + '$']['show']()) : this['onVideoLoa' + 'dOk'] ? !this['curVideoAd' + '$'] || this['_videoErro' + 'rTimes'] >= this['_maxVideoE' + 'rrorTimes'] ? (this['_novidoTip' + '$']('视频点击频繁，请稍后' + '再试'), console['log']('tcy\x20视频加载失败' + '.........'), this['_initVideo' + '$'](), void (_0x157a51 && _0x157a51(!0x1))) : void 0x0 : (this['_novidoTip' + '$']('视频点击频繁，请稍后' + '再试'), void this['_initVideo' + '$']())) : (console['warn']('tcy\x20非oppo环' + '境，无法播放激励式视' + '频。当做成功回调。'), void (_0x157a51 && _0x157a51(!0x0))) : (console['warn']('tcy\x20广告组未开通' + '，无法创建激励式视频' + '。当做成功回调。'), void (_0x157a51 && _0x157a51(!0x0)));
        }
        ['_shakePhon' + 'e$']() {
        }
        ['_login$']() {
            window['qg'] && qg['login']({
                'success': function (_0x21f04a) {
                    var _0xe0e318 = JSON['stringify'](_0x21f04a['data']);
                    console['log']('tcy\x20登录oppo'), console['log'](JSON['stringify'](_0xe0e318)), this['userId'] = _0xe0e318['uid'];
                }['bind'](this),
                'fail': function (_0x3d2fc0) {
                    console['log'](JSON['stringify'](_0x3d2fc0));
                }['bind'](this)
            });
        }
        ['getUerId$']() {
            return this['userId'];
        }
        ['_novidoTip' + '$'](_0x3460d1) {
            window['qg'] && qg['showToast']({ 'title': _0x3460d1 });
        }
        ['getNativeA' + 'd$'](_0x3a0cfa) {
        }
        ['createNati' + 'veAds$']() {
            console['log']('tcy\x20原生广告id');
            let _0x6d8afd = this['arrayRando' + 'm'](this['nativeAdId' + 's$']);
            this['_createNat' + 'iveAd$'](_0x6d8afd);
        }
        ['_createNat' + 'iveAd$'](_0x2ed002) {
            if (console['log']('tcy\x20创建原生广告'), !window['qg'])
                return;
            if (!this['isAdActive' + '$'])
                return void console['warn']('tcy\x20广告组未开通' + '，无法创建原生广告');
            if (!qg['createNati' + 'veAd'])
                return void console['warn']('tcy\x20非oppo环' + '境，无法创建原生广告');
            if (!_0x2ed002)
                return void console['warn']('tcy\x20未配置原生广' + '告ID');
            let _0x19c62c;
            console['log']('tcy\x20创建原生广告' + '1'), console['log'](_0x2ed002);
            try {
                _0x19c62c = qg['createNati' + 'veAd']({ 'adUnitId': _0x2ed002 });
            } catch (_0x1650bd) {
                console['log']('tcy\x20原生广告lo' + 'ad.....');
            }
            _0x19c62c['onLoad'](function (_0x3cbe94) {
                console['log']('tcy\x20原生广告加载' + '成功3'), console['log'](JSON['stringify'](_0x3cbe94)), this['nativeAds$'] = _0x3cbe94['adList'], this['curNativeA' + 'd$'] = _0x19c62c, this['loadNative' + 'logo$']();
            }['bind'](this)), _0x19c62c['onError'](function () {
                console['warn']('tcy\x20原生广告加载' + '失败4:'), console['warn'](JSON['stringify'](errMsg)), setTimeout(this['_creatNati' + 'veAd$']['bind'](this), 0xbb8);
            }['bind'](this)), console['log']('tcy\x20原生广告lo' + 'ad2'), console['log'](JSON['stringify'](_0x19c62c)), _0x19c62c['load'](), this['curNativeA' + 'd$'] = _0x19c62c;
        }
        ['getNativeA' + 'dData$']() {
            return console['log']('tcy\x20获取原生广告' + '数据'), console['log'](JSON['stringify'](this['nativeAds$'])), this['nativeAds$']['pop']();
        }
        ['randomInt'](_0x1de0fd, _0x47afd0) {
            return Math['floor'](Math['random']() * (_0x47afd0 - _0x1de0fd) + _0x1de0fd);
        }
        ['arrayRando' + 'm'](_0x26a04c) {
            return _0x26a04c[this['randomInt'](0x0, _0x26a04c['length'])];
        }
        ['loadNative' + 'logo$']() {
            if (this['nativeAds$']['length'] <= 0x0)
                return;
            this['nativeLogo' + 'Arr'] = [];
            let _0x3b73ca, _0x36ea94, _0x5f0997, _0x1583bd = this['nativeAds$']['length'];
            for (; --_0x1583bd > -0x1;)
                (_0x3b73ca = this['nativeAds$'][_0x1583bd])['imgUrlList'] && (_0x36ea94 = _0x3b73ca['imgUrlList'], _0x5f0997 = this['arrayRando' + 'm'](_0x36ea94), this['setNativeL' + 'ogo$'](_0x5f0997, _0x3b73ca));
        }
        ['setNativeL' + 'ogo$'](_0x1a8598, _0x10de83) {
            Laya['loader']['load'](_0x1a8598, Laya['Handler']['create'](this, _0xec44d7 => {
                _0x10de83['logoImg$'] = _0x1a8598;
            }));
        }
        ['nativeClic' + 'k$'](_0x2d023e) {
            this['curNativeA' + 'd$'] ? (console['log']('tcy\x20原生广告点击'), this['curNativeA' + 'd$']['reportAdSh' + 'ow']({ 'adId': _0x2d023e }), this['curNativeA' + 'd$']['reportAdCl' + 'ick']({ 'adId': _0x2d023e }), this['nativeAds$']['length'] <= 0x0 && (this['curNativeA' + 'd$'] = void 0x0, this['nativeAds$'] = [], this['createNati' + 'veAds$']())) : console['log']('tcy\x20没有创建原生' + '广告');
        }
        ['closeNativ' + 'eAd$'](_0x3e16cc) {
            this['curNativeA' + 'd$'] ? (this['curNativeA' + 'd$']['reportAdSh' + 'ow']({ 'adId': _0x3e16cc }), this['nativeAds$']['length'] <= 0x0 && (this['curNativeA' + 'd$'] = void 0x0, this['nativeAds$'] = [], this['createNati' + 'veAds$']())) : console['log']('tcy\x20没有创建原生' + '广告');
        }
        ['_createInt' + 'erstitialA' + 'd$']() {
            if (!window['qg'])
                return;
            if (!this['isInsertAc' + 'tive$'])
                return void console['warn']('tcy\x20广告组未开通' + '，无法创建插屏广告');
            if ('undefined' == typeof qg || !qg['createInse' + 'rtAd'])
                return void console['warn']('tcy\x20非oppo环' + '境，无法创建插屏广告');
            if (!this['insertUnit' + 'Id$'])
                return void console['warn']('tcy\x20未配置插屏广' + '告ID');
            let _0x2d916c;
            console['log']('tcy\x20创建插屏广告');
            try {
                _0x2d916c = qg['createInse' + 'rtAd']({ 'adUnitId': this['insertUnit' + 'Id$'] });
            } catch (_0x1846a1) {
                console['log']('tcy\x20插屏广告fa' + 'il');
            }
            _0x2d916c['onClose'](function () {
                _0x2d916c['destroy'](), this['curInterst' + 'itialAd$'] = null, this['_createInt' + 'erstitialA' + 'd$'](), pgdk$['showBanner' + '$'](null, null);
            }), _0x2d916c['onLoad'](function () {
                console['log']('tcy\x20插屏广告加载' + '成功'), this['curInterst' + 'itialAd$'] = _0x2d916c;
            }['bind'](this)), _0x2d916c['onError'](function (_0x455497) {
                console['warn']('tcy\x20插屏广告加载' + '失败:'), console['warn'](JSON['stringify'](_0x455497)), setTimeout(this['_createInt' + 'erstitialA' + 'd$']['bind'](this), 0xbb8);
            }['bind'](this)), _0x2d916c['load']();
        }
        ['showInters' + 'titialAd$']() {
            if (console['log'](JSON['stringify'](this['isInsertAc' + 'tive$'])), this['isInsertAc' + 'tive$']) {
                if ('undefined' != typeof qg && qg['createInse' + 'rtAd']) {
                    if (console['log']('tcy\x20展示插屏广告'), console['log'](JSON['stringify'](this['curInterst' + 'itialAd$'])), this['curInterst' + 'itialAd$'])
                        return pgdk$['hideBanner' + '$'](), this['curInterst' + 'itialAd$']['show'](), void (this['curInterst' + 'itialAd$'] = null);
                    this['curInterst' + 'itialAd$'] || this['_createInt' + 'erstitialA' + 'd$']();
                } else
                    console['warn']('tcy\x20非oppo环' + '境，无法展示插屏广告' + '。');
            } else
                console['warn']('tcy\x20广告组未开通' + '，无法创建插屏广告');
        }
        ['reportMoni' + 'tor$']() {
            'undefined' != typeof qg && qg['reportMoni' + 'tor'] ? qg['reportMoni' + 'tor']('game_scene', 0x0) : console['warn']('不能进行数据上报');
        }
    }
    class _0x48c56c extends Laya['Script'] {
        constructor() {
            super(), this['appId$'] = null, this['isAdActive' + '$'] = !0x0, this['bannerIds$'] = null, this['isVideoAct' + 'ive$'] = !0x0, this['videoUnitI' + 'd$'] = null, this['isInsertAc' + 'tive$'] = !0x0, this['insertUnit' + 'Id$'] = null, this['shareId$'] = null, this['secret$'] = null, this['_banners$'] = [], this['loginCode$'] = '', this['anonymous_' + 'code$'] = '', this['recorderMs' + 'g'] = void 0x0, this['recordClip' + 'IndexList'] = [], this['recordVide' + 'oRes'] = void 0x0, this['MIN_BANNER' + '_WIDTH$'] = 0xd0, this['MIN_BANNER' + '_HEIGHT$'] = 0x80;
        }
        ['onStart']() {
            window['tt'] && (this['updateMgr$'](), this['_login$'](), this['isVideoAct' + 'ive$'] && this['initVideoA' + 'd$'](), this['isInsertAc' + 'tive$'] && this['initInters' + 'titialAd$'](), this['_refreshBa' + 'nner$'](), this['initGameRe' + 'corder$']());
        }
        ['updateMgr$']() {
            if (!window['tt'] || !tt['getUpdateM' + 'anager'])
                return;
            const _0x65f45 = tt['getUpdateM' + 'anager']();
            _0x65f45['onCheckFor' + 'Update'](function (_0x40dec5) {
            }), _0x65f45['onUpdateRe' + 'ady'](() => {
            }), _0x65f45['onUpdateFa' + 'iled'](() => {
            });
        }
        ['_checkLogi' + 'n$']() {
        }
        ['_login$']() {
            if ('undefined' == typeof tt || !tt['login'])
                return void console['warn']('非头条环境，无法跳转', data);
            if (localStorage['getItem']('sessionKey' + '$'))
                return;
            let _0x10ff7b = this;
            tt['login']({
                'force': !0x1,
                'success'(_0x39630e) {
                    console['log']('头条登录成功...'), console['log']('login调用成功' + _0x39630e['code'] + '\x20' + _0x39630e['anonymousC' + 'ode']), _0x10ff7b['loginCode$'] = _0x39630e['code'], _0x10ff7b['anonymous_' + 'code$'] = _0x39630e['anonymousC' + 'ode'], _0x10ff7b['getPlatfor' + 'mOpenId$']();
                },
                'fail'(_0x2f019c) {
                    console['log']('头条登录失败...'), console['log']('login调用失败');
                }
            });
        }
        ['getPlatfor' + 'mOpenId$']() {
            if ('undefined' == typeof tt || !tt['request'])
                return;
            if (!this['loginCode$'] && !this['anonymous_' + 'code$'])
                return;
            if (!this['secret$'])
                return;
            let _0x4124f2;
            this['loginCode$'] ? _0x4124f2 = {
                'appid': this['appId$'],
                'secret': this['secret$'],
                'code': this['loginCode$']
            } : this['anonymous_' + 'code$'] && (_0x4124f2 = {
                'appid': this['appId$'],
                'secret': this['secret$'],
                'anonymous_code': this['anonymous_' + 'code$']
            });
            let _0x5dff24 = this;
            console['log']('tcy\x20获取用户信息' + '....'), tt['request']({
                'url': 'https://de' + 'veloper.to' + 'utiao.com/' + 'api/apps/j' + 'scode2sess' + 'ion',
                'data': _0x4124f2,
                'header': { 'content-type': 'applicatio' + 'n/json' },
                'method': 'GET',
                'success': function (_0x5e5415) {
                    console['log']('获取openid成功'), _0x5dff24['user_Id'] = _0x5e5415['data']['openid'] || _0x5e5415['data']['anonymous_' + 'openid'], console['log'](_0x5e5415), console['log']('tcy\x20\x20userI' + 'D' + _0x5dff24['user_Id']), localStorage['setItem']('sessionKey' + '$', _0x5e5415['data']['session_ke' + 'y']);
                },
                'fail': function (_0x1881c8) {
                    console['log']('获取openid失败'), console['log'](_0x1881c8);
                },
                'complete': function (_0x2165f9) {
                }
            });
        }
        ['getUserId$']() {
            return window['tt'] ? this['user_Id'] : '';
        }
        ['onUpdate']() {
            this['_refreshBa' + 'nner$']();
        }
        ['navigate2M' + 'ini$'](_0x5b6eef, _0x34418e, _0x149462, _0x1eedd3) {
            if (window['tt'] && 'function' == typeof window['tt']['showMoreGa' + 'mesModal']) {
                if (window['zs']['sdk'] && window['zs']['sdk']['showMoreGa' + 'mesModal']) {
                    let _0x41f25c = pgdk$['getPlatfor' + 'mUserId$']() || '';
                    window['zs']['sdk']['showMoreGa' + 'mesModal'](_0x5b6eef, _0x41f25c, _0x149462, _0x1eedd3);
                } else {
                    var _0x4bf143 = _0x5b6eef, _0x2920d2 = _0x4bf143['extraData'] || {};
                    _0x2920d2['appId'] = this['appId$'], tt['onMoreGame' + 'sModalClos' + 'e'](function (_0x3fd236) {
                        console['log']('modal\x20clos' + 'ed', _0x3fd236);
                    }), tt['onNavigate' + 'ToMiniProg' + 'ram'](function (_0x5e02c7) {
                        _0x5e02c7 && (console['log'](_0x5e02c7['errCode']), console['log'](_0x5e02c7['errMsg']), 0x0 == _0x5e02c7['errCode'] ? _0x149462 && _0x149462() : fail && _0x1eedd3());
                    }), 'ios' !== tt['getSystemI' + 'nfoSync']()['platform'] && tt['showMoreGa' + 'mesModal']({
                        'appLaunchOptions': [{
                                'appId': _0x4bf143['app_id'],
                                'query': _0x4bf143['path'],
                                'extraData': _0x2920d2
                            }],
                        'success'(_0xa93c4c) {
                            console['log']('showMoreGa' + 'mesModal\x20s' + 'uccess', _0xa93c4c['errMsg']);
                        },
                        'fail'(_0x1044f3) {
                            console['log']('showMoreGa' + 'mesModal\x20f' + 'ail', _0x1044f3['errMsg']);
                        }
                    });
                }
            }
        }
        ['showBanner' + '$'](_0x3b08c4, _0x581548) {
            this['isAdActive' + '$'] && (this['_needBanne' + 'r$'] = !0x0, console['log'](now$(), '显示广告'), 'undefined' != typeof tt && tt['createBann' + 'erAd'] && (this['_banners$']['length'] >= 0x2 && this['_hideBanne' + 'r$'](), this['_banners$']['length'] > 0x0 && (this['_curBanner' + '$'] = this['_banners$'][0x0], this['_curBanner' + '$']['startShowT' + 'ime$'] = Date['now'](), this['_curBanner' + '$']['rect$'] = _0x3b08c4, this['_curBanner' + '$']['widget$'] = _0x581548, this['_curBanner' + '$']['show'](), this['_resizeBan' + 'nerPos$'](this['_curBanner' + '$'], _0x3b08c4, _0x581548)), this['_createBan' + 'ner$'](!0x0, _0x3b08c4, _0x581548)));
        }
        ['hideBanner' + '$']() {
            this['_needBanne' + 'r$'] = !0x1, this['_hideBanne' + 'r$']();
        }
        ['_hideBanne' + 'r$']() {
            if (console['log'](Date['now'](), '隐藏广告'), 'undefined' == typeof tt)
                return;
            if (!this['_curBanner' + '$'])
                return;
            if (0x0 === this['_banners$']['length'])
                return;
            let _0x11b15f = this['_banners$']['removeAt$'](0x0);
            if (_0x11b15f['hide'](), this['_banners$']['length'] >= 0x1 && _0x11b15f['$showTime'] > 0x7530) {
                console['log'](Date['now'](), '销毁广告');
                let _0x1e2339 = [
                    this['_curBanner' + '$']['$id'],
                    !0x1,
                    this['_curBanner' + '$']['style']['left'],
                    this['_curBanner' + '$']['style']['top'],
                    this['_curBanner' + '$']['style']['height']
                ];
                this['_curBanner' + '$']['destroy'](), this['_curBanner' + '$'] = void 0x0, this['__createBa' + 'nner$'](_0x1e2339);
            } else
                this['_curBanner' + '$'] = void 0x0, this['_banners$']['push'](_0x11b15f);
        }
        ['_createBan' + 'ner$'](_0x118198, _0x56ee6a, _0x1236ea) {
            if ('undefined' == typeof tt || !tt['createBann' + 'erAd'])
                return;
            if (this['bannerIds$']['length'] <= 0x0)
                return;
            let _0x19db84 = this['bannerIds$']['removeAt$'](Math['floor'](Math['random']() * this['bannerIds$']['length']));
            this['__createBa' + 'nner$']([
                _0x19db84,
                _0x118198,
                _0x56ee6a,
                _0x1236ea
            ]);
        }
        ['__createBa' + 'nner$'](_0x111217) {
            if (!_0x111217)
                return;
            console['log'](now$(), '创建广告');
            let _0x370f8f = _0x111217[0x0], _0x6d90fd = _0x111217[0x1], _0x42f47d = _0x111217[0x2], _0x1beee4 = _0x111217[0x3], _0x28a3e0 = tt['createBann' + 'erAd']({
                    'adUnitId': _0x370f8f,
                    'style': {
                        'left': _0x42f47d['left'],
                        'top': _0x42f47d['top'],
                        'width': _0x42f47d['width']
                    }
                });
            _0x28a3e0['id$'] = _0x370f8f, _0x28a3e0['onLoad$'] = function () {
                this['_onBannerL' + 'oad$'](_0x28a3e0, _0x6d90fd, _0x42f47d, _0x1beee4);
            }['bind'](this), _0x28a3e0['onError$'] = function (_0x280f53) {
                console['warn']('广告加载失败:'), console['warn'](_0x280f53), this['destroy'] && this['destroy'](), setTimeout(this['__createBa' + 'nner$']['bind'](this, _0x111217), 0xbb8, _0x111217);
            }['bind'](this), _0x28a3e0['onResize$'] = function (_0x33ff25) {
                this['style']['realWidth'] = _0x33ff25['width'], this['style']['realHeight'] = _0x33ff25['height'];
            }['bind'](_0x28a3e0), _0x28a3e0['onLoad'](_0x28a3e0['onLoad$']['bind'](_0x28a3e0)), _0x28a3e0['onError'](_0x28a3e0['onError$']['bind'](_0x28a3e0, _0x111217)), _0x28a3e0['onResize'](_0x28a3e0['onResize$']['bind'](_0x28a3e0));
        }
        ['_onBannerL' + 'oad$'](_0x2abbf2, _0x30336f, _0x352da1, _0x2d5843) {
            this['_needBanne' + 'r$'] && _0x30336f && !this['_curBanner' + '$'] ? (this['_curBanner' + '$'] = _0x2abbf2, this['_curBanner' + '$']['startShowT' + 'ime$'] = Date['now'](), this['_curBanner' + '$']['rect$'] = _0x352da1, this['_curBanner' + '$']['widget$'] = _0x2d5843, this['_curBanner' + '$']['show'](), this['_banners$']['insert$'](0x0, _0x2abbf2), this['_resizeBan' + 'nerPos$'](_0x2abbf2, _0x352da1, _0x2d5843)) : this['_banners$']['push'](_0x2abbf2);
        }
        ['_resizeBan' + 'nerPos$'](_0x4b9d0d, _0x5664e6, _0x1409f6) {
            if (_0x5664e6['width'] / _0x5664e6['height'] > _0x4b9d0d['style']['realWidth'] / _0x4b9d0d['style']['realHeight']) {
                if (_0x4b9d0d['style']['realHeight'] > _0x5664e6['height'] && _0x4b9d0d['style']['realWidth'] > this['MIN_BANNER' + '_WIDTH$']) {
                    let _0xc4f814 = Math['max'](this['MIN_BANNER' + '_WIDTH$'], _0x4b9d0d['style']['realWidth'] / (_0x4b9d0d['style']['realHeight'] / _0x5664e6['height']));
                    _0x4b9d0d['style']['width'] = _0xc4f814;
                }
            } else
                'undefined' != typeof cc ? _0x4b9d0d['style']['width'] = Math['min'](cc['view']['getFrameSi' + 'ze']()['width'], Math['max'](this['MIN_BANNER' + '_WIDTH$'], _0x5664e6['width'])) : 'undefined' != typeof Laya && (_0x4b9d0d['style']['width'] = Math['min'](Laya['Browser']['clientWidt' + 'h'], Math['max'](this['MIN_BANNER' + '_WIDTH$'], _0x5664e6['width'])));
            let _0xa5ee8d = _0x4b9d0d['style']['realHeight'];
            'number' == typeof _0x1409f6['top'] && 'number' != typeof _0x1409f6['bottom'] ? _0x4b9d0d['style']['top'] = _0x5664e6['top'] : 'number' != typeof _0x1409f6['top'] && 'number' == typeof _0x1409f6['bottom'] ? _0x4b9d0d['style']['top'] = _0x5664e6['top'] + _0x5664e6['height'] - _0xa5ee8d : _0x4b9d0d['style']['top'] = _0x5664e6['top'] + _0x5664e6['height'] / 0x2 - _0xa5ee8d / 0x2, 'number' == typeof _0x1409f6['left'] && 'number' != typeof _0x1409f6['right'] ? _0x4b9d0d['style']['left'] = _0x5664e6['left'] : 'number' != typeof _0x1409f6['left'] && 'number' == typeof _0x1409f6['right'] ? _0x4b9d0d['style']['left'] = _0x5664e6['left'] + _0x5664e6['width'] - _0x4b9d0d['style']['realWidth'] : _0x4b9d0d['style']['left'] = _0x5664e6['left'] + _0x5664e6['width'] / 0x2 - _0x4b9d0d['style']['realWidth'] / 0x2;
        }
        ['_refreshBa' + 'nner$']() {
            this['_needBanne' + 'r$'] && this['_curBanner' + '$'] && (Date['now']() - this['_curBanner' + '$']['startShowT' + 'ime$'] > this['bannerShow' + 'Spacing$'] ? (this['showBanner' + '$'](this['_curBanner' + '$']['rect$'], this['_curBanner' + '$']['widget$']), console['log'](now$(), '刷新Banner')) : this['_resizeBan' + 'nerPos$'](this['_curBanner' + '$'], this['_curBanner' + '$']['rect$'], this['_curBanner' + '$']['widget$']));
        }
        ['initInters' + 'titialAd$']() {
            this['createInte' + 'rstitialAd' + '$']();
        }
        ['createInte' + 'rstitialAd' + '$']() {
            this['isAdActive' + '$'] ? 'undefined' != typeof tt && tt['createInte' + 'rstitialAd'] ? this['insertUnit' + 'Id$'] ? (this['_curInters' + 'titialAd$'] = tt['createInte' + 'rstitialAd']({ 'adUnitId': this['insertUnit' + 'Id$'] }), this['_curInters' + 'titialAd$']['onClose'](function () {
                this['createInte' + 'rstitialAd' + '$']();
            }['bind'](this))) : console['warn'](now$(), '未配置插屏广告ID') : console['warn'](now$(), '非头条环境，无法创建' + '插屏广告') : console['warn'](now$(), '流量主未开通，无法创' + '建插屏广告');
        }
        ['showInters' + 'titialAd$']() {
            this['isAdActive' + '$'] ? 'undefined' != typeof tt && tt['createInte' + 'rstitialAd'] ? this['_curInters' + 'titialAd$'] ? this['_curInters' + 'titialAd$'] && this['_curInters' + 'titialAd$']['show']()['catch'](_0x298320 => {
                console['error'](_0x298320);
            }) : console['warn'](now$(), '请先使用initIn' + 'terstitial' + 'Ad$()，预加载插' + '屏广告') : console['warn'](now$(), '非头条环境，无法创建' + '插屏广告') : console['warn'](now$(), '流量主未开通，无法创' + '建插屏广告');
        }
        ['initVideoA' + 'd$']() {
            this['hasVideoIn' + 'it$'] || (this['_videoErro' + 'rTimes'] = 0x0, this['_maxVideoE' + 'rrorTimes'] = 0x5, this['createVide' + 'oAd$'](), this['hasVideoIn' + 'it$'] = !0x0);
        }
        ['createVide' + 'oAd$']() {
            this['isAdActive' + '$'] ? 'undefined' != typeof tt && tt['createRewa' + 'rdedVideoA' + 'd'] ? this['videoUnitI' + 'd$'] ? this['_videoAd$'] || (this['_videoAd$'] = tt['createRewa' + 'rdedVideoA' + 'd']({ 'adUnitId': this['videoUnitI' + 'd$'] }), this['_videoAd$']['onLoad'](function () {
                this['_videoErro' + 'rTimes'] = 0x0, console['log'](now$(), '激励式视频加载成功');
            }['bind'](this)), this['_videoAd$']['onClose'](function (_0xa8b4ef) {
                this['_videoClos' + 'eCallback$'] && (this['_videoClos' + 'eCallback$'](!_0xa8b4ef || _0xa8b4ef['isEnded']), this['_videoClos' + 'eCallback$'] = void 0x0);
            }['bind'](this)), this['_videoAd$']['onError'](function (_0x131610) {
                this['_videoErro' + 'rTimes']++, this['_videoErro' + 'rTimes'] >= this['_maxVideoE' + 'rrorTimes'] ? console['warn'](now$(), '激励式视频加载失败次' + '数过多,\x20停止重试。' + '\x20') : (console['log']('tcy\x20视频id'), console['log'](this['videoUnitI' + 'd$']), console['log'](this['appid$']), console['warn'](now$(), '激励式视频加载失败,' + '\x20重试' + this['_videoErro' + 'rTimes']), console['warn'](_0x131610), this['_videoAd$']['load']());
            }['bind'](this))) : console['warn'](now$(), '未配置激励式视频ID') : console['warn'](now$(), '非头条环境，无法创建' + '激励式视频') : console['warn'](now$(), '流量主未开通，无法创' + '建激励式视频');
        }
        ['showVideoA' + 'd$'](_0x518119) {
            return this['isAdActive' + '$'] ? 'undefined' != typeof tt && tt['createRewa' + 'rdedVideoA' + 'd'] ? void (this['_videoAd$'] ? !this['_videoAd$'] || this['_videoErro' + 'rTimes'] >= this['_maxVideoE' + 'rrorTimes'] ? _0x518119 && _0x518119(!0x1) : (this['_videoClos' + 'eCallback$'] = _0x518119, this['_videoAd$']['show']()) : console['error'](now$(), '请先使用initVi' + 'deoAd$()，预' + '加载激励式视频')) : (console['warn'](now$(), '非头条环境，无法播放' + '激励式视频。当做成功' + '回调。'), void (_0x518119 && _0x518119(!0x0))) : (console['warn'](now$(), '流量主未开通，无法创' + '建激励式视频。当做成' + '功回调。'), void (_0x518119 && _0x518119(!0x0)));
        }
        ['initGameRe' + 'corder$']() {
            this['recorderMs' + 'g'] || (this['recorderMs' + 'g'] = tt['getGameRec' + 'orderManag' + 'er']());
        }
        ['recorderSt' + 'art$'](_0x453666, _0x1d42be, _0x59f7a0) {
            if (!this['recorderMs' + 'g'])
                return;
            let _0x4d60a6 = this;
            this['recorderMs' + 'g']['onStart'](_0x3a8064 => {
                console['log']('录屏开始'), _0x453666 && _0x453666();
            }), this['recorderMs' + 'g']['onStop'](_0x3eabfd => {
                _0x4d60a6['recordVide' + 'oRes'] = _0x3eabfd, console['log'](_0x3eabfd['videoPath']);
            }), this['recorderMs' + 'g']['onError'](_0x3293b2 => {
                console['warn']('视频录制出错'), _0x59f7a0 && _0x59f7a0();
            }), this['recorderMs' + 'g']['start']({ 'duration': _0x1d42be });
        }
        ['recorderCl' + 'ip$'](_0x245351, _0x53d540, _0x252132) {
            this['recorderMs' + 'g'] && this['recorderMs' + 'g']['recordClip']({
                'timeRange': _0x245351,
                'success'(_0x5a7b08) {
                    console['log'](_0x5a7b08['index']), clipIndexList['push'](_0x5a7b08['index']), _0x53d540 && _0x53d540();
                },
                'fail'(_0x35206e) {
                    console['warn']('录屏裁剪失败'), console['warn'](_0x35206e), _0x252132 && _0x252132();
                }
            });
        }
        ['recorderCl' + 'iper$']() {
            this['recorderMs' + 'g'] && this['recordVide' + 'oRes'] && this['recorderMs' + 'g']['clipVideo']({
                'path': this['recordVide' + 'oRes']['videoPath'],
                'clipRange': this['recordClip' + 'IndexList'],
                'success'(_0x2023a0) {
                    console['log'](_0x2023a0['videoPath']);
                },
                'fail'(_0x1bd78b) {
                    console['error'](_0x1bd78b);
                }
            });
        }
        ['recorderPa' + 'use$'](_0x17eafd) {
            this['recorderMs' + 'g'] && (this['recorderMs' + 'g']['onPause'](_0x33988b => {
                console['log'](_0x33988b['videoPath']), _0x17eafd && _0x17eafd();
            }), this['recorderMs' + 'g']['pause']());
        }
        ['recorderRe' + 'sume$'](_0x49d4f8) {
            this['recorderMs' + 'g'] && (this['recorderMs' + 'g']['onResume'](_0x32ef5c => {
                console['log'](_0x32ef5c['videoPath']), _0x49d4f8 && _0x49d4f8();
            }), this['recorderMs' + 'g']['resume']());
        }
        ['recorderSt' + 'op$'](_0x282430) {
            this['recorderMs' + 'g'] && this['recorderMs' + 'g']['stop']();
        }
        ['shareRecor' + 'dVideo$'](_0x5cc1ef, _0x4275ab) {
            'undefined' != typeof tt && tt['shareAppMe' + 'ssage'] && this['recordVide' + 'oRes'] && tt['shareAppMe' + 'ssage']({
                'channel': 'video',
                'title': '脑洞打开，打造只属于' + '你的战车',
                'desc': '超强的AI，据说只有' + '百分之一的人能战胜',
                'imageUrl': './share/sh' + 'are1.jpg',
                'templateId': this['shareId$'],
                'query': '',
                'extra': {
                    'videoPath': this['recordVide' + 'oRes']['videoPath'],
                    'videoTopics': [
                        '话题1',
                        '话题2'
                    ]
                },
                'success'() {
                    console['log']('分享视频成功'), _0x5cc1ef && _0x5cc1ef(), this['recordVide' + 'oRes'] = void 0x0;
                },
                'fail'(_0x21f2a7) {
                    console['log']('分享视频失败'), _0x4275ab && _0x4275ab(), this['recordVide' + 'oRes'] = void 0x0;
                }
            });
        }
        ['createMore' + 'gameBtn$'](_0x213bd3, _0x58ee20, _0x55a562, _0x579006) {
            if (window['tt'] && 'function' == typeof window['tt']['createMore' + 'GamesButto' + 'n']) {
                var _0x3a46a5 = _0x213bd3, _0x5f5d63 = _0x3a46a5['extraData'] || {};
                _0x5f5d63['appId'] = this['appId$'], this['moreGamesB' + 'utton'] && (this['moreGamesB' + 'utton']['hide'](), this['moreGamesB' + 'utton'] = null), this['moreGamesB' + 'utton'] = tt['createMore' + 'GamesButto' + 'n']({
                    'type': 'image',
                    'image': 'zsad/anymo' + 're.png',
                    'style': {
                        'left': _0x58ee20['left'],
                        'top': _0x58ee20['top'],
                        'width': _0x58ee20['width'],
                        'height': _0x58ee20['height'],
                        'lineHeight': 0x28,
                        'textColor': '#ffffff',
                        'textAlign': 'center',
                        'fontSize': 0x0,
                        'borderRadius': 0x0,
                        'borderWidth': 0x0,
                        'borderColor': '#000000'
                    },
                    'appLaunchOptions': [{
                            'appId': _0x3a46a5['app_id'],
                            'query': _0x3a46a5['path'],
                            'extraData': _0x5f5d63
                        }],
                    'onNavigateToMiniGame'(_0x36b04b) {
                        console['log']('跳转其他小游戏', _0x36b04b), _0x36b04b && (0x0 == _0x36b04b['errCode'] ? _0x55a562 && _0x55a562() : _0x579006 && _0x579006());
                    }
                }), this['moreGamesB' + 'utton']['onTap'](() => {
                    console['log']('点击更多游戏');
                }), this['moreGamesB' + 'utton']['show']();
            }
        }
        ['showMoreGa' + 'mesModal$'](_0x3ce7d6, _0x2984b3, _0x4a6092) {
            if (!window['tt'] || 'function' != typeof window['tt']['showMoreGa' + 'mesModal'])
                return;
            var _0x56b5ca = _0x3ce7d6, _0x48cc5b = _0x56b5ca['extraData'] || {};
            _0x48cc5b['appId'] = this['appId$'], tt['onMoreGame' + 'sModalClos' + 'e'](function (_0x86abcd) {
                console['log']('modal\x20clos' + 'ed', _0x86abcd);
            }), tt['onNavigate' + 'ToMiniProg' + 'ram'](function (_0x5343a8) {
                _0x5343a8 && (console['log'](_0x5343a8['errCode']), console['log'](_0x5343a8['errMsg']), 0x0 == _0x5343a8['errCode'] ? _0x2984b3 && _0x2984b3() : _0x4a6092 && _0x4a6092());
            }), 'ios' !== tt['getSystemI' + 'nfoSync']()['platform'] ? tt['showMoreGa' + 'mesModal']({
                'appLaunchOptions': [{
                        'appId': _0x56b5ca['app_id'],
                        'query': _0x56b5ca['path'],
                        'extraData': _0x48cc5b
                    }],
                'success'(_0x1d7442) {
                    console['log']('showMoreGa' + 'mesModal\x20s' + 'uccess', _0x1d7442['errMsg']);
                },
                'fail'(_0x542f19) {
                    console['log']('showMoreGa' + 'mesModal\x20f' + 'ail', _0x542f19['errMsg']);
                }
            }) : this['showToast$']('IOS暂不支持该功能');
        }
        ['hideMoreGa' + 'meBtn$']() {
            this['moreGamesB' + 'utton'] && (this['moreGamesB' + 'utton']['hide'](), this['moreGamesB' + 'utton'] = null);
        }
        ['showToast$'](_0x3ecee5) {
            window['tt'] && 'function' == typeof window['tt']['showToast'] && tt['showToast']({
                'title': _0x3ecee5,
                'duration': 0x7d0,
                'success'(_0x311a25) {
                    console['log']('' + _0x311a25);
                },
                'fail'(_0xd6f571) {
                    console['log']('showToast调' + '用失败');
                }
            });
        }
    }
    class _0x563f4a extends Laya['Script'] {
        constructor() {
            super();
        }
        ['onStart']() {
            this['owner']['on'](Laya['Event']['LOADED'], this, this['onImgLoade' + 'd$']), this['owner']['on'](Laya['Event']['CHANGED'], this, this['onImgLoade' + 'd$']), this['startUwidt' + 'h'] = this['owner']['width'], this['startUheig' + 'ht'] = this['owner']['height'];
        }
        ['onImgLoade' + 'd$']() {
            if (!this['owner']['source'])
                return;
            let _0x82ce22 = this['owner']['source']['sourceHeig' + 'ht'], _0x58a421 = this['owner']['source']['sourceWidt' + 'h'], _0x5f76ad = this['startUwidt' + 'h'], _0x4491e4 = this['startUheig' + 'ht'], _0x4544c1 = Math['abs'](_0x5f76ad - _0x58a421), _0x550b3d = Math['abs'](_0x4491e4 - _0x82ce22);
            if (_0x58a421 > _0x5f76ad && _0x82ce22 > _0x4491e4) {
                if (_0x4544c1 > _0x550b3d) {
                    let _0x2e6e7d = _0x58a421 / _0x5f76ad;
                    this['owner']['height'] = _0x82ce22 / _0x2e6e7d, this['owner']['width'] = this['startUwidt' + 'h'];
                } else {
                    let _0x4a51b4 = _0x82ce22 / _0x4491e4;
                    this['owner']['width'] = _0x58a421 / _0x4a51b4, this['owner']['height'] = this['startUheig' + 'ht'];
                }
            } else {
                if (_0x58a421 > _0x5f76ad && _0x82ce22 < _0x4491e4) {
                    let _0x4ab2d2 = _0x58a421 / _0x5f76ad;
                    this['owner']['height'] = _0x82ce22 / _0x4ab2d2, this['owner']['width'] = this['startUwidt' + 'h'];
                } else {
                    if (_0x58a421 < _0x5f76ad && _0x82ce22 > _0x4491e4) {
                        let _0x25399c = _0x82ce22 / _0x4491e4;
                        this['owner']['width'] = _0x58a421 / _0x25399c, this['owner']['height'] = this['startUheig' + 'ht'];
                    } else {
                        if (_0x58a421 < _0x5f76ad && _0x82ce22 < _0x4491e4) {
                            let _0x47e80c = _0x82ce22 / _0x4491e4;
                            this['owner']['width'] = _0x58a421 / _0x47e80c, this['owner']['height'] = this['startUheig' + 'ht'];
                        } else
                            this['owner']['width'] = this['startUwidt' + 'h'], this['owner']['height'] = this['startUheig' + 'ht'];
                    }
                }
            }
        }
    }
    class _0x1e730d {
        static ['init']() {
            let _0x4221c0 = Laya['ClassUtils']['regClass'];
            _0x4221c0('script/Mod' + 'ule/Battle' + '/View/Beat' + 'hUpControl' + '.js', _0x606097), _0x4221c0('script/Mod' + 'ule/Battle' + '/View/Beat' + 'hUpBubbleP' + 'anel.js', _0x446464), _0x4221c0('script/Mod' + 'ule/Battle' + '/View/Beac' + 'hUI.js', _0x1bf616), _0x4221c0('script/sdk' + '/view/PgTo' + 'pView$.js', _0x38bfcf), _0x4221c0('script/Mod' + 'ule/Loadin' + 'g/View/Log' + 'inLoadingU' + 'I.js', _0x4950bb), _0x4221c0('script/sdk' + '/view/PgSi' + 'ngleAd$.js', _0x1d662c), _0x4221c0('script/sdk' + '/view/PgVi' + 'ewList$.js', _0x304831), _0x4221c0('script/sdk' + '/view/PgVi' + 'ewIndex$.j' + 's', _0x1216fe), _0x4221c0('script/Mod' + 'ule/Main/V' + 'iew/MainUI' + '.js', _0x4f9d04), _0x4221c0('script/Mod' + 'ule/Main/V' + 'iew/MainUi' + 'Oppo.js', _0x374623), _0x4221c0('script/Mod' + 'ule/Battle' + '/Scene/Bat' + 'tleScene.j' + 's', _0x7edf4), _0x4221c0('script/sdk' + '/Pgdk$.js', _0x4e92fe), _0x4221c0('script/sdk' + '/data/Pgdk' + 'DataQyWx$.' + 'js', _0x472c21), _0x4221c0('script/sdk' + '/view/PgEx' + 'itButton$.' + 'js', _0x2359e4), _0x4221c0('script/sdk' + '/platform/' + 'PgdkQyWx$.' + 'js', _0x377fed), _0x4221c0('script/Mod' + 'ule/Battle' + '/Scene/Bat' + 'tleSceneOp' + 'po.js', _0x457c2b), _0x4221c0('script/sdk' + '/data/Pgdk' + 'DataQyOppo' + '$.js', _0x390397), _0x4221c0('script/sdk' + '/platform/' + 'PgdkOppo$.' + 'js', _0x526e87), _0x4221c0('script/sdk' + '/platform/' + 'PgdkToutia' + 'o$.js', _0x48c56c), _0x4221c0('script/Mod' + 'ule/Battle' + '/View/Batt' + 'leAwardUI.' + 'js', _0x5a8d50), _0x4221c0('script/Mod' + 'ule/Battle' + '/View/Batt' + 'leAwardUIO' + 'ppo.js', _0x4e88fc), _0x4221c0('script/Bas' + 'e/ImgAutoM' + 'atchSize.j' + 's', _0x563f4a), _0x4221c0('script/Mod' + 'ule/Battle' + '/View/Batt' + 'leInfoUI.j' + 's', _0x157d64), _0x4221c0('script/Mod' + 'ule/Battle' + '/View/Batt' + 'leInfoUIOp' + 'po.js', _0x25ade3), _0x4221c0('script/Mod' + 'ule/Battle' + '/View/Batt' + 'leResultUI' + '.js', _0x464b32), _0x4221c0('script/Mod' + 'ule/Battle' + '/View/Batt' + 'leResultUI' + 'Oppo.js', _0x58ee5a), _0x4221c0('script/Mod' + 'ule/Battle' + '/View/Shop' + 'Collection' + 'sUI.js', _0x5d78d3), _0x4221c0('script/Mod' + 'ule/Battle' + '/View/Shop' + 'SkinsUI.js', _0x3bed18);
        }
    }
    _0x1e730d['width'] = 0x280, _0x1e730d['height'] = 0x470, _0x1e730d['scaleMode'] = 'fixedwidth', _0x1e730d['screenMode'] = 'none', _0x1e730d['alignV'] = 'top', _0x1e730d['alignH'] = 'left', _0x1e730d['startScene'] = 'Scene/Batt' + 'leScene.sc' + 'ene', _0x1e730d['sceneRoot'] = '', _0x1e730d['debug'] = !0x1, _0x1e730d['stat'] = !0x1, _0x1e730d['physicsDeb' + 'ug'] = !0x1, _0x1e730d['exportScen' + 'eToJson'] = !0x0, _0x1e730d['init']();
    class _0x1dff62 {
        constructor() {
            this['_uis$'] = [], Laya['uiMgr$'] = this;
        }
        static ['init$']() {
            Laya['uiMgr$'] || new _0x1dff62();
        }
        ['onUIOpen$'](_0x2e400f) {
            -0x1 === this['_uis$']['indexOf'](_0x2e400f) && this['_uis$']['push'](_0x2e400f);
        }
        ['onUIClose$'](_0x42f992) {
            -0x1 !== this['_uis$']['indexOf'](_0x42f992) && (this['_uis$']['remove$'](_0x42f992), this['restoreBan' + 'ner$']());
        }
        ['restoreBan' + 'ner$']() {
            let _0x278351 = this['_uis$'][this['_uis$']['length'] - 0x1];
            _0x278351 && _0x278351['restoreBan' + 'ner$'] && _0x278351['restoreBan' + 'ner$']();
        }
        ['isLastUI$'](_0x1365ea) {
            let _0x39a98e = this['_uis$']['length'];
            return _0x39a98e && this['_uis$']['indexOf'](_0x1365ea) == _0x39a98e - 0x1;
        }
    }
    class _0x3fabf0 {
        constructor() {
            this['inited'] = !0x1;
        }
        static ['getInstanc' + 'e$']() {
            return null == _0x3fabf0['instance'] && (window['gameManage' + 'r'] = _0x3fabf0['instance'] = new _0x3fabf0()), _0x3fabf0['instance'];
        }
        ['init_GameK' + 'ey_Manager']() {
            this['inited'] || (_0x1dff62['init$'](), _0x3830d2['getInstanc' + 'e$']()['isIn_GameK' + 'ey_ited'] ? _0x268083['getInstanc' + 'e$']()['isIn_GameK' + 'ey_ited'] ? _0x3a41f3['getInstanc' + 'e$']()['isIn_GameK' + 'ey_ited'] ? _0xe6399d['getInstanc' + 'e$']()['isIn_GameK' + 'ey_ited'] ? _0x3e110a['getInstanc' + 'e$']()['isIn_GameK' + 'ey_ited'] ? _0x43a93f['getInstanc' + 'e$']()['isIn_GameK' + 'ey_ited'] ? _0x3fabf0['loadedPack' + 's'] ? _0x3f3924['getInstanc' + 'e$']()['isIn_GameK' + 'ey_ited'] ? this['onIn_GameK' + 'ey_itedGam' + 'e']() : _0x3f3924['getInstanc' + 'e$']()['init'](this['init_GameK' + 'ey_Manager']['bind'](this)) : _0x3a41f3['getInstanc' + 'e$']()['open_GameK' + 'ey_UI'](_0x4950bb, null, function () {
                _0x3fabf0['loadedPack' + 's'] = !0x0, this['init_GameK' + 'ey_Manager']();
            }['bind'](this)) : _0x43a93f['getInstanc' + 'e$']()['init'](this['init_GameK' + 'ey_Manager']['bind'](this)) : _0x3e110a['getInstanc' + 'e$']()['init'](this['init_GameK' + 'ey_Manager']['bind'](this)) : _0xe6399d['getInstanc' + 'e$']()['init'](this['init_GameK' + 'ey_Manager']['bind'](this)) : _0x3a41f3['getInstanc' + 'e$']()['init'](this['init_GameK' + 'ey_Manager']['bind'](this)) : _0x268083['getInstanc' + 'e$']()['init'](this['init_GameK' + 'ey_Manager']['bind'](this)) : _0x3830d2['getInstanc' + 'e$']()['init'](this['init_GameK' + 'ey_Manager']['bind'](this)));
        }
        ['onIn_GameK' + 'ey_itedGam' + 'e']() {
            window['qg'] ? _0x3f3924['getInstanc' + 'e$']()['open_GameK' + 'ey_Scene'](_0x457c2b, Laya['Handler']['create'](this, this['onSceneLoa' + 'ded$'])) : _0x3f3924['getInstanc' + 'e$']()['open_GameK' + 'ey_Scene'](_0x7edf4, Laya['Handler']['create'](this, this['onSceneLoa' + 'ded$']));
        }
        ['onSceneLoa' + 'ded$']() {
            window['qg'] ? _0x3a41f3['getInstanc' + 'e$']()['open_GameK' + 'ey_UI'](Laya['CyzClassMa' + 'p']['MainUIOppo']) : _0x3a41f3['getInstanc' + 'e$']()['open_GameK' + 'ey_UI'](Laya['CyzClassMa' + 'p']['MainUI']);
        }
        ['moni_GameK' + 'ey_torEven' + 'ts']() {
        }
        ['onSh_GameK' + 'ey_owGame']() {
        }
        ['onEx_GameK' + 'ey_itGame']() {
        }
        ['open_GameK' + 'ey_MainUI'](_0x8fa3bd) {
        }
        ['open_GameK' + 'ey_Offline' + 'UI']() {
        }
    }
    _0x3fabf0['instance'] = void 0x0;
    class _0x3b6fb2 {
        constructor(_0x35068b) {
            this['arrayBuffe' + 'r'] = _0x35068b, this['index'] = 0x0, this['dv'] = new DataView(this['arrayBuffe' + 'r']);
        }
        ['readByte']() {
            return this['dv']['getInt8'](this['index']++);
        }
        ['readShort']() {
            var _0x416d49 = this['dv']['getInt16'](this['index']);
            return this['index'] += 0x2, _0x416d49;
        }
        ['readInt']() {
            var _0x47f470 = this['dv']['getInt32'](this['index']);
            return this['index'] += 0x4, _0x47f470;
        }
        ['readUint']() {
            var _0xde9c54 = this['dv']['getUint32'](this['index']);
            return this['index'] += 0x4, _0xde9c54;
        }
        ['readLong']() {
            var _0x1996ee = this['readInt'](), _0x40a700 = this['readUint']();
            return _0x1996ee * Math['POW_2_32'] + _0x40a700;
        }
        ['readFloat']() {
            var _0x1cd060 = this['dv']['getFloat32'](this['index']);
            return this['index'] += 0x4, _0x1cd060;
        }
        ['readUTF']() {
            var _0x2b26d2 = this['readShort']();
            return this['readText'](_0x2b26d2);
        }
        ['readText'](_0x429e1d) {
            for (var _0xa38d1f = this['arrayBuffe' + 'r']['slice'](this['index'], this['index'] + _0x429e1d), _0x4d8abd = new Uint8Array(_0xa38d1f), _0xd8c3e4 = '', _0x21acac = _0x429e1d, _0x29dcd8 = 0x0, _0x33f061 = String['fromCharCo' + 'de'], _0x5cbe9b = 0x0, _0x168fa4 = _0x4d8abd; _0x5cbe9b < _0x21acac;)
                (_0x29dcd8 = _0x168fa4[_0x5cbe9b++]) < 0x80 ? 0x0 != _0x29dcd8 && (_0xd8c3e4 += _0x33f061(_0x29dcd8)) : _0xd8c3e4 += _0x33f061(_0x29dcd8 < 0xe0 ? (0x3f & _0x29dcd8) << 0x6 | 0x7f & _0x168fa4[_0x5cbe9b++] : _0x29dcd8 < 0xf0 ? (0x1f & _0x29dcd8) << 0xc | (0x7f & _0x168fa4[_0x5cbe9b++]) << 0x6 | 0x7f & _0x168fa4[_0x5cbe9b++] : (0xf & _0x29dcd8) << 0x12 | (0x7f & _0x168fa4[_0x5cbe9b++]) << 0xc | _0x168fa4[_0x5cbe9b++] << 0x6 & 0x7f | 0x7f & _0x168fa4[_0x5cbe9b++]), 0x0;
            return this['index'] += _0x429e1d, _0xd8c3e4;
        }
        ['readArrayB' + 'uffer'](_0x5cc54a) {
            var _0x36a8fb = this['arrayBuffe' + 'r']['slice'](this['index'], this['index'] + _0x5cc54a);
            return this['index'] += _0x5cc54a, _0x36a8fb;
        }
    }
    class _0x11caff {
        static ['init_GameK' + 'ey_Data']() {
            if (_0x17c88d['LOAD_DATA_' + 'JS']) {
                function _0x3ffa21() {
                    for (var _0x52a80f in D)
                        if ('properties' != _0x52a80f) {
                            var _0xf7da7e = D[_0x52a80f], _0x5221ac = D['properties'][_0x52a80f];
                            if (_0x5221ac)
                                for (var _0x1664f1 in _0xf7da7e) {
                                    var _0x4eb7c2 = _0xf7da7e[_0x1664f1], _0x167032 = {};
                                    _0x167032[_0x5221ac[0x0]] = _0x1664f1;
                                    for (var _0x526412 = 0x1, _0x59b02a = _0x5221ac['length']; _0x526412 < _0x59b02a; _0x526412++) {
                                        var _0xaa3602 = _0x4eb7c2[_0x526412 - 0x1];
                                        void 0x0 !== _0xaa3602 && (_0x167032[_0x5221ac[_0x526412]] = _0xaa3602);
                                    }
                                    _0xf7da7e[_0x1664f1] = _0x167032;
                                }
                        }
                    _0x220620();
                }
                _0x3ffa21();
            } else {
                function _0x533fc4() {
                    for (var _0x55144f, _0x41a8cf, _0x5159e8, _0x53a958, _0x118bc1, _0x39f736, _0x39b0bc, _0x23e405 = {}, _0x82010f = Laya['Loader']['getRes']('script/dat' + 'a.bin'), _0x45b782 = new _0x3b6fb2(_0x82010f), _0xcbd78 = _0x45b782['readUTF'](), _0x3d1578 = [], _0x59092e = []; '#' != _0xcbd78;) {
                        _0x118bc1 = _0x23e405[_0xcbd78] = {}, _0x55144f = _0x45b782['readByte'](), _0x3d1578['length'] = 0x0, _0x59092e['length'] = 0x0;
                        for (var _0x15a914 = 0x0; _0x15a914 < _0x55144f; _0x15a914++)
                            _0x3d1578['push'](_0x45b782['readUTF']()), _0x59092e['push'](_0x45b782['readUTF']());
                        _0x41a8cf = _0x45b782['readShort']();
                        for (var _0x19b436 = 0x0; _0x19b436 < _0x41a8cf; _0x19b436++)
                            for (var _0x41132a = 0x0; _0x41132a < _0x55144f; _0x41132a++) {
                                switch (_0x59092e[_0x41132a]) {
                                case 'byte':
                                    _0x5159e8 = _0x45b782['readByte']();
                                    break;
                                case 'short':
                                    _0x5159e8 = _0x45b782['readShort']();
                                    break;
                                case 'int':
                                    _0x5159e8 = _0x45b782['readInt']();
                                    break;
                                case 'float':
                                    _0x5159e8 = _0x45b782['readFloat']();
                                    break;
                                case 'string':
                                    _0x5159e8 = _0x45b782['readUTF']();
                                    break;
                                case 'int[]':
                                    if (_0x5159e8 = void 0x0, (_0x39f736 = _0x45b782['readShort']()) > 0x0) {
                                        for (_0x5159e8 = [], _0x39b0bc = 0x0; _0x39b0bc < _0x39f736; _0x39b0bc++)
                                            _0x5159e8['push'](_0x45b782['readInt']());
                                    }
                                    break;
                                case 'float[]':
                                    if (_0x5159e8 = void 0x0, (_0x39f736 = _0x45b782['readShort']()) > 0x0) {
                                        for (_0x5159e8 = [], _0x39b0bc = 0x0; _0x39b0bc < _0x39f736; _0x39b0bc++)
                                            _0x5159e8['push'](_0x45b782['readFloat']());
                                    }
                                    break;
                                default:
                                    console['error']('DataInputS' + 'tream缺失解析方' + '法：' + _0x59092e[_0x41132a]);
                                }
                                0x0 == _0x41132a && (_0x53a958 = _0x118bc1[_0x5159e8] = {}), _0x53a958[_0x3d1578[_0x41132a]] = _0x5159e8;
                            }
                        _0xcbd78 = _0x45b782['readUTF']();
                    }
                    D = _0x23e405, Laya['Loader']['clearRes']('script/dat' + 'a.bin', !0x0), _0x220620();
                }
                Laya['loader']['load']('script/dat' + 'a.bin', Handler['create'](this, _0x533fc4), null, Laya['Loader']['BUFFER']);
            }
            function _0x220620() {
                !function () {
                    var _0x387fef = [];
                    for (var _0x486843 in D['PrefabsPat' + 'h']) {
                        var _0xb0891a = D['PrefabsPat' + 'h'][_0x486843];
                        _0xb0891a['subModel'] ? _0xb0891a['subModel'] = _0xb0891a['subModel']['split']('#') : _0xb0891a['subModel'] = _0x387fef, _0xb0891a['actionInSh' + 'op'] ? _0xb0891a['actionInSh' + 'op'] = _0xb0891a['actionInSh' + 'op']['split']('#') : _0xb0891a['actionInSh' + 'op'] = _0x387fef;
                    }
                }(), D['_inited'] = !0x0, _0x3830d2['getInstanc' + 'e$']()['disp_GameK' + 'ey_atchEve' + 'nt'](_0x5b5578['ON_DATA_LO' + 'AD']);
            }
        }
    }
    class _0x3275c9 {
        constructor() {
            this['curPos'] = new Laya['Vector3']();
        }
        static ['create'](_0x159cac, _0x15b2f6, _0x400454) {
            let _0x57b80e = new _0x3275c9();
            return _0x57b80e['init'](_0x159cac, _0x15b2f6, _0x400454), _0x57b80e;
        }
        ['init'](_0x399135, _0x3e950c, _0x1c7e90) {
            this['targetUI'] = _0x399135, this['modelId'] = _0x3e950c, this['load_GameK' + 'ey_edHandl' + 'er'] = _0x1c7e90, this['uiDa_GameK' + 'ey_ta'] = _0x5ad3aa['getU_GameK' + 'ey_IData'](_0x399135), this['modelCtr'] = _0x42867c['create'](this['uiDa_GameK' + 'ey_ta']['scene'], this['modelId'], Laya['Handler']['create'](this, this['onMo_GameK' + 'ey_delLoad' + 'ed'])), Laya['timer']['loop'](0x1, this, this['upda_GameK' + 'ey_tePos']);
        }
        ['onMo_GameK' + 'ey_delLoad' + 'ed']() {
            this['load_GameK' + 'ey_edHandl' + 'er'] && this['load_GameK' + 'ey_edHandl' + 'er']['runWith'](this), this['load_GameK' + 'ey_edHandl' + 'er'] = void 0x0;
        }
        ['playAnim'](_0x48d2f5, _0x3e8ecc, _0xcf0ec, _0x4ead2a, _0x37ec67) {
            this['modelCtr'] && this['modelCtr']['playAnim'](_0x48d2f5, _0x3e8ecc, _0xcf0ec, _0x4ead2a, _0x37ec67);
        }
        ['upda_GameK' + 'ey_tePos']() {
            this['modelCtr'] && (Laya['Point']['TEMP']['setTo'](0x0, 0x0), this['targetUI']['localToGlo' + 'bal'](Laya['Point']['TEMP']), this['curPos'] = _0x5ad3aa['get3_GameK' + 'ey_DUIPos'](Laya['Point']['TEMP']['x'], Laya['Point']['TEMP']['y'], this['targetUI'], this['curPos']), this['modelCtr']['setPositio' + 'n'](this['curPos']['x'], this['curPos']['y'], this['curPos']['z']));
        }
        ['dispose']() {
            Laya['timer']['clearAll'](this), this['modelCtr'] && this['modelCtr']['dispose'](), this['modelCtr'] = void 0x0, _0x5ad3aa['dest_GameK' + 'ey_royUIMo' + 'del'](this['targetUI'], this['modelId']);
        }
    }
    class _0x2e1b74 {
        static ['init']() {
            Laya['CyzClassMa' + 'p'] = {}, Laya['CyzClassMa' + 'p']['LocalData'] = _0x28d556, Laya['CyzClassMa' + 'p']['BaseWindow'] = _0x1fc701, Laya['CyzClassMa' + 'p']['UIMode3D'] = _0x3275c9, Laya['CyzClassMa' + 'p']['MainUI'] = _0x4f9d04, Laya['CyzClassMa' + 'p']['MainUIOppo'] = _0x374623;
        }
    }
    _0x1e730d['width'] = 0x280, _0x1e730d['height'] = 0x470, _0x1e730d['screenMode'] = Laya['Browser']['onPC'] ? Laya['Stage']['SCREEN_NON' + 'E'] : Laya['Stage']['SCREEN_VER' + 'TICAL'], _0x1e730d['alignV'] = Laya['Stage']['ALIGN_CENT' + 'ER'], _0x1e730d['alignH'] = Laya['Stage']['ALIGN_MIDD' + 'LE'], _0x1e730d['sceneRoot'] = '', _0x1e730d['debug'] = !0x1, _0x1e730d['stat'] = !0x1, _0x1e730d['physicsDeb' + 'ug'] = !0x1, _0x1e730d['exportScen' + 'eToJson'] = !0x0, new class {
        constructor() {
            Laya3D['init'](0x0, 0x0), Laya['Shader3D']['debugMode'] = !0x1, _0x2e1b74['init'](), Laya['stage']['alignV'] = _0x1e730d['alignV'], Laya['stage']['alignH'] = _0x1e730d['alignH'], Laya['URL']['exportScen' + 'eToJson'] = _0x1e730d['exportScen' + 'eToJson'], (_0x1e730d['debug'] || 'true' == Laya['Utils']['getQuerySt' + 'ring']('debug')) && Laya['enableDebu' + 'gPanel'](), _0x1e730d['physicsDeb' + 'ug'] && Laya['PhysicsDeb' + 'ugDraw'] && Laya['PhysicsDeb' + 'ugDraw']['enable'](), _0x1e730d['stat'] && Laya['Stat']['show'](), Laya['alertGloba' + 'lError'] = !0x0, Laya['ResourceVe' + 'rsion']['enable']('version.js' + 'on', Laya['Handler']['create'](this, this['onVersionL' + 'oaded']), Laya['ResourceVe' + 'rsion']['FILENAME_V' + 'ERSION']), window['onunload'] = function (_0x28ee39) {
                _0x3830d2['getInstanc' + 'e$']()['disp_GameK' + 'ey_atchEve' + 'nt'](_0x5b5578['ON_EXIT_GA' + 'ME']), gameManager['onEx_GameK' + 'ey_itGame']();
            };
        }
        ['onPlfLoade' + 'd']() {
            Laya['ResourceVe' + 'rsion']['enable']('version.js' + 'on', Laya['Handler']['create'](this, this['onVersionL' + 'oaded']), Laya['ResourceVe' + 'rsion']['FILENAME_V' + 'ERSION']);
        }
        ['onVersionL' + 'oaded']() {
            Laya['AtlasInfoM' + 'anager']['enable']('fileconfig' + '.json', Laya['Handler']['create'](this, this['onConfigLo' + 'aded']));
        }
        ['onConfigLo' + 'aded']() {
            _0xb9fe0['getInstanc' + 'e$']()['inited'] || (_0xb9fe0['getInstanc' + 'e$']()['preCompile' + '22'](), window['shaderObj'] = {}, window['getShaders'] = function () {
                let _0xd99dd;
                for (let _0x2e5905 = 0x0; _0x2e5905 < Laya['Shader3D']['debugShade' + 'rVariantCo' + 'llection']['variantCou' + 'nt']; _0x2e5905++) {
                    let _0x570be0 = Laya['Shader3D']['debugShade' + 'rVariantCo' + 'llection']['getByIndex'](_0x2e5905), _0x1a6f45 = _0x570be0['shader']['name'];
                    window['shaderObj'][_0x1a6f45] || (window['shaderObj'][_0x1a6f45] = []), _0xd99dd = window['shaderObj'][_0x1a6f45];
                    let _0xcb6b64 = {};
                    _0xcb6b64['defineName' + 's'] = _0x570be0['defineName' + 's'], _0xcb6b64['passIndex'] = _0x570be0['passIndex'], _0xcb6b64['subShaderI' + 'ndex'] = _0x570be0['subShaderI' + 'ndex'], _0xd99dd['push'](_0xcb6b64);
                }
            }), _0x11caff['init_GameK' + 'ey_Data'](), _0x5ad3aa['init'](), _0x3fabf0['getInstanc' + 'e$']()['init_GameK' + 'ey_Manager']();
        }
    }(), Laya['stage']['on'](Laya['Event']['RESIZE'], null, function () {
        _0x3830d2['getInstanc' + 'e$']()['disp_GameK' + 'ey_atchEve' + 'nt'](_0x5b5578['SCREEN_SIZ' + 'E_CHANGE']);
    }), Laya['stage']['_setScreen' + 'Size'] = Laya['stage']['setScreenS' + 'ize'], Laya['stage']['setScreenS' + 'ize'] = function (_0x20cda9, _0x11f284, _0x4f589d) {
        if (!Laya['stage']['_isInputti' + 'ng']()) {
            var _0x140551, _0x59befd, _0x4b98da, _0x36d0f3, _0x5b3f19, _0x11a701 = (_0x59befd = {}, _0x4b98da = Laya['Browser']['clientWidt' + 'h'] * Laya['Browser']['pixelRatio'], _0x36d0f3 = Laya['Browser']['clientHeig' + 'ht'] * Laya['Browser']['pixelRatio'], _0x5b3f19 = _0x140551 = Laya['Browser']['onPC'] ? _0x36d0f3 / _0x4b98da : _0x36d0f3 > _0x4b98da ? _0x36d0f3 / _0x4b98da : _0x4b98da / _0x36d0f3, _0x140551 > 0x500 / 0x2d0 ? (_0x59befd['scaleMode'] = Laya['Stage']['SCALE_FIXE' + 'D_AUTO'], _0x59befd['height'] = 0x500, _0x59befd['width'] = 0x2d0, GameSetting['ratio'] = Laya['Browser']['clientWidt' + 'h'] / Laya['stage']['width']) : _0x140551 < 0x500 / 0x356 ? (_0x59befd['scaleMode'] = Laya['Stage']['SCALE_SHOW' + 'ALL'], _0x59befd['height'] = 0x500, _0x59befd['width'] = 0x356, GameSetting['ratio'] = Laya['Browser']['clientHeig' + 'ht'] / Laya['stage']['height']) : (_0x59befd['scaleMode'] = Laya['Stage']['SCALE_FIXE' + 'D_HEIGHT'], _0x59befd['height'] = 0x500, GameSetting['ratio'] = Laya['Browser']['clientWidt' + 'h'] / Laya['stage']['width']), _0x59befd['trueRate'] = _0x5b3f19, _0x59befd);
            this['_scaleMode'] = _0x11a701['scaleMode'], this['designHeig' + 'ht'] = _0x11a701['height'], this['designWidt' + 'h'] = _0x11a701['width'], this['_setScreen' + 'Size'](_0x20cda9, _0x11f284), _0x4f589d || Laya['timer']['once'](0x7d0, null, function () {
                Laya['stage']['setScreenS' + 'ize'](Laya['Browser']['clientWidt' + 'h'] * Laya['Browser']['pixelRatio'], Laya['Browser']['clientHeig' + 'ht'] * Laya['Browser']['pixelRatio'], !0x0);
            });
        }
    }, Laya['stage']['_changeCan' + 'vasSize']();
}();