!function () {
    'use strict';
    class _0x2f8b8b extends Laya['Scene'] {
    }
    class _0x1a7656 {
        constructor() {
            this['forceHide'] = !0x1, this['init']();
        }
        ['init']() {
            this['scenes'] = [];
        }
        get ['getTopScen' + 'e']() {
            return this['topScene'];
        }
        ['openScene'](_0x222c22, _0x45835d = !0x1, _0x3720f4, _0x25f896, _0x5b8052) {
            Laya['Scene']['open'](_0x222c22, _0x45835d, _0x3720f4, Laya['Handler']['create'](this, _0x24754d => {
                let _0x423c14 = this['scenes']['filter'](_0x2e7c24 => _0x2e7c24['url'] == _0x222c22);
                _0x423c14 && _0x423c14['length'] > 0x0 ? (console['log']('已打开此场景', _0x423c14), _0x423c14[0x0]['close']()) : (_0x25f896 ? _0x25f896['addChild'](_0x24754d) : Laya['stage']['addChild'](_0x24754d), this['scenes']['push'](_0x24754d), this['topScene'] = this['scenes'][this['scenes']['length'] - 0x1], _0x5b8052 && _0x5b8052(_0x24754d));
            }));
        }
        ['closeScene'](_0x582295) {
            if (_0x582295 ? 'string' == typeof _0x582295 && this['scenes']['forEach'](_0xeba082 => {
                    _0xeba082['url'] != _0x582295 || (_0x582295 = _0xeba082);
                }) : null != this['topScene'] && (_0x582295 = this['topScene']), _0x582295 && _0x582295 instanceof Laya['Scene']) {
                var _0x58be20 = this['scenes']['indexOf'](_0x582295);
                -0x1 != _0x58be20 && (this['scenes']['splice'](_0x58be20, 0x1), this['topScene'] = this['scenes'][this['scenes']['length'] - 0x1]), _0x582295['close'](), _0x357ad8['Platform']['hideBanner'](), Laya['timer']['once'](0x64, this, () => {
                    var _0xc90a3d = this['topScene'];
                    _0xc90a3d['canShowAd'] && !_0xc90a3d['isWuchu'] && 0x0 == _0x14bce7['instance']['openSceneC' + 'ount'] && (_0x357ad8['Platform']['showBanner'](), console['log']('UIMgr\x20Show' + 'Banner', _0xc90a3d['url']));
                });
            }
        }
    }
    class _0x662778 {
    }
    _0x662778['AD_LOAD_EV' + 'ENT'] = '', _0x662778['AD_SHOW_EV' + 'ENT'] = '', _0x662778['AD_VIDEO_C' + 'LOSE_EVENT'] = '', _0x662778['PLATFORM_W' + 'AKE_EVENT'] = '', _0x662778['PLATFORM_S' + 'LEEP_EVENT'] = '', _0x662778['LOAD_FINIS' + 'H_EVENT'] = '', _0x662778['GAME_INIT_' + 'EVENT'] = '', _0x662778['GAME_PLAY_' + 'EVENT'] = '', _0x662778['GAME_REBOR' + 'N_EVENT'] = '', _0x662778['GAME_OVER_' + 'EVENT'] = '', _0x662778['MOUSE_EVEN' + 'T'] = '', _0x662778['CHANGE_SKI' + 'N_EVENT'] = '', _0x662778['CHANGE_BRI' + 'CK_EVENT'] = '', _0x662778['CHANGE_LEV' + 'EL_EVENT'] = '', _0x662778['CHANGE_COI' + 'N_EVENT'] = '', _0x662778['SHOW_TIPS_' + 'EVENT'] = '', _0x662778['UPDATE_SHA' + 'RE_COUNT'] = '', _0x662778['UPDATE_CHE' + 'CK_SV'] = '', _0x662778['LOGIN_EVEN' + 'T'] = '', _0x662778['SHARE_BACK' + '_EVENT'] = '';
    class _0x53776d {
        constructor() {
            this['storageDat' + 'a'] = {
                'score': 0x0,
                'level': 0x1,
                'playCount': 0x0,
                'playTime': new Date()['getTime'](),
                'gameTime': new Date()['getTime']() - 0x5265c00,
                'offlineTime': new Date()['getTime'](),
                'strength': 0x14,
                'coin': 0x0,
                'key': 0x0,
                'signDay': 0x1,
                'signWeek': 0x1,
                'isSign': !0x1,
                'keyAmount': 0x0,
                'isSound': !0x0,
                'isVibrate': !0x0,
                'skinPlate': [
                    0x1,
                    0x6
                ],
                'skinKnife': [0x1],
                'skinColor': [0x0],
                'plateIndex': 0x1,
                'knifeIndex': 0x1,
                'colorIndex': 0x0,
                'isNewPlay': !0x0,
                'shareCount': 0x0
            }, this['storageNam' + 'e'] = {
                'score': '',
                'level': '',
                'playCount': '',
                'playTime': '',
                'gameTime': '',
                'strength': '',
                'coin': '',
                'signDay': '',
                'signWeek': '',
                'isSign': '',
                'isSound': '',
                'isVibrate': '',
                'keyAmount': '',
                'skinPlate': '',
                'skinKnife': '',
                'skinColor': '',
                'plateIndex': '',
                'knifeIndex': '',
                'colorIndex': '',
                'isNewPlay': '',
                'offlineTime': '',
                'shareCount': '',
                'key': ''
            }, this['init']();
        }
        ['init']() {
            for (let _0x2728bb in this['storageDat' + 'a']) {
                let _0x1e5b6c = this['readStorag' + 'e'](_0x2728bb);
                _0x1e5b6c ? (this['storageDat' + 'a'][_0x2728bb] = JSON['parse'](_0x1e5b6c), console['log']('加载缓存', _0x2728bb, this['storageDat' + 'a'][_0x2728bb])) : (this['writeStora' + 'ge'](_0x2728bb, this['storageDat' + 'a'][_0x2728bb]), console['log']('初始化', _0x2728bb, this['storageDat' + 'a'][_0x2728bb])), this['storageNam' + 'e'][_0x2728bb] = _0x2728bb;
            }
            this['refreshDat' + 'a']();
        }
        ['setValue'](_0x4ca442, _0xa87377) {
            this['storageDat' + 'a'][_0x4ca442] = _0xa87377, this['writeStora' + 'ge'](_0x4ca442, _0xa87377);
        }
        ['writeStora' + 'ge'](_0x51850c, _0x58e29f) {
            Laya['LocalStora' + 'ge']['setItem'](_0x51850c, JSON['stringify'](_0x58e29f));
        }
        ['readStorag' + 'e'](_0x590144) {
            return Laya['LocalStora' + 'ge']['getItem'](_0x590144);
        }
        ['removeStor' + 'age'](_0x47dcb2) {
        }
        ['refreshDat' + 'a']() {
            Math['floor'](this['storageDat' + 'a']['gameTime'] / 0x5265c00) != Math['floor'](this['getCurrent' + 'Time'] / 0x5265c00) && (console['log']('更新每日数据'), this['setValue'](this['storageNam' + 'e']['playCount'], 0x0), this['setValue'](this['storageNam' + 'e']['playTime'], this['getCurrent' + 'Time']), this['setValue'](this['storageNam' + 'e']['gameTime'], this['getCurrent' + 'Time']), this['setValue'](this['storageNam' + 'e']['strength'], 0x14), this['setValue'](this['storageNam' + 'e']['isSign'], !0x1), this['storageDat' + 'a']['signDay'] > 0x7 && (this['setValue'](this['storageNam' + 'e']['signDay'], 0x1), this['setValue'](this['storageNam' + 'e']['signWeek'], this['storageDat' + 'a']['signWeek'] + 0x1)), _0x357ad8['Event']['on'](_0x662778['UPDATE_SHA' + 'RE_COUNT'], this, this['updateShar' + 'eCount']));
        }
        ['updateShar' + 'eCount'](_0x175864) {
            this['setValue'](this['storageNam' + 'e']['shareCount'], _0x175864['amount']), console['log']('剩余分享次数：', _0x175864['amount']), _0x357ad8['Event']['event'](_0x662778['UPDATE_CHE' + 'CK_SV']);
        }
        get ['getCurrent' + 'Time']() {
            return new Date()['getTime']();
        }
        ['passLevel']() {
            this['setValue'](this['storageNam' + 'e']['level'], this['storageDat' + 'a']['level'] + 0x1);
        }
        ['updateCoin'](_0x4905a4) {
            this['setValue'](this['storageNam' + 'e']['coin'], this['storageDat' + 'a']['coin'] + _0x4905a4), _0x357ad8['Event']['event'](_0x662778['CHANGE_COI' + 'N_EVENT']);
        }
        ['getSkin'](_0x1d8d01, _0x3837ed) {
            this['storageDat' + 'a'][_0x1d8d01]['push'](_0x3837ed), this['setValue'](_0x1d8d01, this['storageDat' + 'a'][_0x1d8d01]);
        }
        ['changeSkin'](_0x46452c, _0xe477d8) {
            this['setValue'](_0x46452c, _0xe477d8);
        }
    }
    class _0x1672ff {
        constructor() {
            this['appId'] = 'wx47537a2f' + 'e2002c8c', this['gameVersio' + 'n'] = '1.0.4', this['gameType'] = '3D', this['sceneResUr' + 'l'] = 'res/scene/' + 'Convention' + 'al/ResScen' + 'e.ls', this['modelResUr' + 'l'] = 'res/model/' + 'Convention' + 'al/ResScen' + 'e.lh', this['rebornCoun' + 't'] = 0x0, this['playCount'] = 0x0;
        }
        get ['shareConte' + 'xt']() {
            return [
                '请分享到活跃的群！',
                '请分享到不同群！',
                '请分享给好友！',
                '请分享给20人以上的' + '群！'
            ][Math['floor'](0x4 * Math['random']())];
        }
    }
    class _0x568350 {
        static ['add'](_0x2ef857, _0x18653b) {
            var _0x1542a5 = new Laya['Vector3']();
            return Laya['Vector3']['add'](_0x2ef857, _0x18653b, _0x1542a5), _0x1542a5['clone']();
        }
        static ['subtract'](_0x1239ca, _0x2e6d13) {
            var _0x27dc48 = new Laya['Vector3']();
            return Laya['Vector3']['subtract'](_0x1239ca, _0x2e6d13, _0x27dc48), _0x27dc48['clone']();
        }
        static ['mull'](_0x5b04e7, _0x4ee2f3) {
            var _0x58f8f1 = new Laya['Vector3']();
            return Laya['Vector3']['scale'](_0x5b04e7, _0x4ee2f3, _0x58f8f1), _0x58f8f1['clone']();
        }
        static ['dot'](_0x56d221, _0x21e9bb) {
            return Laya['Vector3']['dot'](_0x56d221, _0x21e9bb);
        }
        static ['cross'](_0x343d05, _0x43be23) {
            var _0x4af585 = new Laya['Vector3']();
            return Laya['Vector3']['cross'](_0x343d05, _0x43be23, _0x4af585), _0x4af585['clone']();
        }
        static ['normalized'](_0x35e72c) {
            var _0x2f7c68 = new Laya['Vector3']();
            return Laya['Vector3']['normalize'](_0x35e72c, _0x2f7c68), _0x2f7c68['clone']();
        }
        static ['distance'](_0x25e2eb, _0x182a75) {
            var _0x1ec02c = _0x568350['subtract'](_0x25e2eb, _0x182a75);
            return Laya['Vector3']['scalarLeng' + 'th'](_0x1ec02c);
        }
    }
    var _0xedc39a, _0x44362d, _0x3c0ec2, _0xda6ec5, _0x531a07, _0x802519;
    !function (_0x82fdc9) {
        _0x82fdc9['Loading'] = 'UIScene/Lo' + 'ading.scen' + 'e', _0x82fdc9['BusyLoadin' + 'g'] = 'UIScene/Bu' + 'syLoading.' + 'scene', _0x82fdc9['Home'] = 'UIScene/Ho' + 'me.scene', _0x82fdc9['Game'] = 'UIScene/Ga' + 'me.scene', _0x82fdc9['Game3D'] = 'UIScene/Ga' + 'me3D.scene', _0x82fdc9['Reborn'] = 'UIScene/Re' + 'born.scene', _0x82fdc9['Settlement'] = 'UIScene/Se' + 'ttlement.s' + 'cene', _0x82fdc9['Mission'] = 'UIScene/Mi' + 'ssion.scen' + 'e', _0x82fdc9['Skin'] = 'UIScene/Sk' + 'in.scene', _0x82fdc9['FreeSkin'] = 'UIScene/Fr' + 'eeSkin.sce' + 'ne', _0x82fdc9['Sign'] = 'UIScene/Si' + 'gn.scene', _0x82fdc9['Offline'] = 'UIScene/Of' + 'fline.scen' + 'e', _0x82fdc9['Strength'] = 'UIScene/St' + 'rength.sce' + 'ne', _0x82fdc9['SignTips'] = 'UIScene/Si' + 'gnTips.sce' + 'ne', _0x82fdc9['Busy'] = 'UIScene/Bu' + 'sy.scene', _0x82fdc9['Background'] = 'UIScene/Ba' + 'ckground.s' + 'cene', _0x82fdc9['Box'] = 'UIScene/Bo' + 'x.scene', _0x82fdc9['Clean'] = 'UIScene/Cl' + 'ean.scene', _0x82fdc9['Box2'] = 'UIScene/Bo' + 'x2.scene';
    }(_0xedc39a || (_0xedc39a = {})), function (_0x417ed4) {
        _0x417ed4['BoxItem'] = 'prefab/Box' + 'Item.prefa' + 'b', _0x417ed4['FontDamage' + 'd'] = 'prefab/Fon' + 'tDamaged.p' + 'refab', _0x417ed4['CompoundIt' + 'em'] = 'prefab/Com' + 'poundItem.' + 'prefab', _0x417ed4['DuilianIco' + 'n'] = 'prefab/Dui' + 'lianIcon.p' + 'refab';
    }(_0x44362d || (_0x44362d = {})), function (_0x525123) {
        _0x525123['BGM'] = 'Bgm', _0x525123['CLICK'] = 'Click', _0x525123['Finish2'] = 'Finish2', _0x525123['EndLight'] = 'EndLight', _0x525123['Roach'] = 'Roach', _0x525123['RollDown'] = 'RollDown', _0x525123['Fail'] = 'Fail', _0x525123['Rolling'] = 'Rolling', _0x525123['RollingLon' + 'g'] = 'RollingLon' + 'g';
    }(_0x3c0ec2 || (_0x3c0ec2 = {}));
    class _0x5a6c07 {
        ['addClickEv' + 'ent'](_0x94faa5, _0x35338b, _0x51decb, _0x5a7ca7, _0x464806) {
            if (_0x94faa5['offAllCall' + 'er'](_0x35338b), _0x94faa5 instanceof Laya['Button'] && !_0x464806) {
                let _0x3522d4 = _0x283a00 => {
                    _0x51decb && _0x51decb['call'](_0x35338b, _0x283a00), _0x357ad8['Sound']['play'](_0x3c0ec2['CLICK']);
                };
                _0x94faa5['on'](Laya['Event']['CLICK'], _0x35338b, _0x3522d4, [_0x5a7ca7]);
            } else {
                let _0x4913f7 = 0x3c, _0x475d13 = 0x1, _0x243ba8 = _0x94faa5['scaleX'] * _0x475d13, _0x4e9c92 = _0x94faa5['scaleY'] * _0x475d13, _0x217cba = 0.9 * _0x475d13, _0x1766d3 = !0x1, _0xcad947 = _0x303876 => {
                        _0x1766d3 = !0x0, Laya['Tween']['to'](_0x94faa5, {
                            'scaleX': _0x217cba,
                            'scaleY': _0x217cba
                        }, _0x4913f7);
                    };
                _0x94faa5['on'](Laya['Event']['MOUSE_DOWN'], _0x35338b, _0xcad947, [_0x5a7ca7]);
                let _0x58c53f = _0x3d2918 => {
                    0x0 != _0x1766d3 && (_0x1766d3 = !0x1, Laya['Tween']['to'](_0x94faa5, {
                        'scaleX': _0x243ba8,
                        'scaleY': _0x4e9c92
                    }, _0x4913f7), _0x51decb && _0x51decb['call'](_0x35338b, _0x3d2918), _0x357ad8['Sound']['play'](_0x3c0ec2['CLICK']));
                };
                _0x94faa5['on'](Laya['Event']['MOUSE_UP'], _0x35338b, _0x58c53f, [_0x5a7ca7]);
                let _0x170cdd = _0x100c32 => {
                    Laya['Tween']['to'](_0x94faa5, {
                        'scaleX': _0x243ba8,
                        'scaleY': _0x4e9c92
                    }, _0x4913f7);
                };
                _0x94faa5['on'](Laya['Event']['MOUSE_OUT'], _0x35338b, _0x170cdd, [_0x5a7ca7]);
            }
        }
        ['getRGB'](_0x2e3c74) {
            var _0x2cf6ba = [], _0x369b93 = [];
            let _0x12252d = _0x2e3c74['replace'](/#/, '');
            if (0x3 == _0x12252d['length']) {
                for (var _0x41018b = [], _0x332dc9 = 0x0; _0x332dc9 < 0x3; _0x332dc9++)
                    _0x41018b['push'](_0x12252d['charAt'](_0x332dc9) + _0x12252d['charAt'](_0x332dc9));
                _0x12252d = _0x41018b['join']('');
            }
            for (_0x332dc9 = 0x0; _0x332dc9 < 0x3; _0x332dc9++)
                _0x2cf6ba[_0x332dc9] = '0x' + _0x12252d['substr'](0x2 * _0x332dc9, 0x2), _0x369b93['push'](parseInt(_0x2cf6ba[_0x332dc9]));
            return new Laya['Vector3'](_0x369b93[0x0] / 0xff, _0x369b93[0x1] / 0xff, _0x369b93[0x2] / 0xff);
        }
        ['getRGBA'](_0x205ff6) {
            var _0x1c776c = [], _0x35719f = [];
            let _0x1529b6 = _0x205ff6['replace'](/#/, '');
            if (0x3 == _0x1529b6['length']) {
                for (var _0x5e0556 = [], _0x1a21b9 = 0x0; _0x1a21b9 < 0x3; _0x1a21b9++)
                    _0x5e0556['push'](_0x1529b6['charAt'](_0x1a21b9) + _0x1529b6['charAt'](_0x1a21b9));
                _0x1529b6 = _0x5e0556['join']('');
            }
            for (_0x1a21b9 = 0x0; _0x1a21b9 < 0x3; _0x1a21b9++)
                _0x1c776c[_0x1a21b9] = '0x' + _0x1529b6['substr'](0x2 * _0x1a21b9, 0x2), _0x35719f['push'](parseInt(_0x1c776c[_0x1a21b9]));
            return new Laya['Vector4'](_0x35719f[0x0] / 0xff, _0x35719f[0x1] / 0xff, _0x35719f[0x2] / 0xff, 0x1);
        }
        ['getColorSt' + 'ring'](_0x18ecfa) {
            var _0x31c0e0 = 0xf & _0x18ecfa, _0x39702d = _0x31c0e0 > 0x9 ? this['getHexValu' + 'e'](Number(_0x31c0e0)) + '' : _0x31c0e0 + '';
            return ((_0x31c0e0 = 0xf & _0x18ecfa >>> 0x4) > 0x9 ? this['getHexValu' + 'e'](Number(_0x31c0e0)) + '' : _0x31c0e0 + '') + _0x39702d;
        }
        ['getHexValu' + 'e'](_0x4b0966) {
            switch (_0x4b0966) {
            case 0xa:
                return 'A';
            case 0xb:
                return 'B';
            case 0xc:
                return 'C';
            case 0xd:
                return 'D';
            case 0xe:
                return 'E';
            case 0xf:
                return 'F';
            }
        }
        ['getCurrent' + 'Time']() {
            return Math['floor'](Date['parse'](new Date()['toString']()) / 0x3e8);
        }
        ['inverseLer' + 'p'](_0x3d7631, _0x46fbe5, _0x298178) {
            return (_0x298178 - _0x3d7631) / (_0x46fbe5 - _0x3d7631);
        }
        ['linearEqua' + 'tion'](_0x279629, _0x1ee682) {
            var _0x4ff463 = (_0x279629['y'] - _0x1ee682['y']) / (_0x279629['x'] - _0x1ee682['x']);
            return [
                _0x4ff463,
                _0x279629['y'] - _0x4ff463 * _0x279629['x']
            ];
        }
        ['loadJsonFi' + 'le'](_0x301b4a, _0x324fe5) {
            Laya['loader']['load'](_0x301b4a, Laya['Handler']['create'](this, _0x356954 => {
                var _0x818510 = Laya['loader']['getRes'](_0x301b4a);
                _0x324fe5(_0x818510);
            }), null, Laya['Loader']['JSON']);
        }
        ['getRandomA' + 'rray'](_0x47354a, _0x24d84c) {
            var _0xc9d4ee = [], _0x54a842 = [];
            _0x54a842 = (_0x54a842 = _0x54a842['concat'](_0x47354a))['sort'](function () {
                return 0.5 - Math['random']();
            });
            for (var _0x345630 = 0x0; _0x345630 < _0x24d84c; _0x345630++)
                _0xc9d4ee['push'](_0x54a842[_0x345630]);
            return _0xc9d4ee;
        }
        ['loadSubpac' + 'kage'](_0x5f100f, _0x43d146, _0x1bb34d) {
            Laya['Browser']['onWeiXin'] && wx['loadSubpac' + 'kage']({
                'name': _0x5f100f,
                'success': function (_0x48d103) {
                    console['log']('分包加载成功：', _0x5f100f), _0x1bb34d['call'](_0x48d103, _0x43d146, !0x0);
                },
                'fail': function (_0x1099e9) {
                    console['error']('分包加载失败：', _0x5f100f), _0x1bb34d['call'](_0x1099e9, _0x43d146, !0x1);
                }
            })['onProgress' + 'Update'](_0x1a90eb => {
                console['log'](_0x1a90eb, '分包========' + '========');
            });
        }
        ['loadSubpac' + 'kagesSync'](_0x1cdbb9, _0x5620e9, _0x7bf241) {
            for (var _0x2abfbd = _0x1cdbb9['length'], _0x515b41 = 0x0; _0x515b41 < _0x2abfbd; _0x515b41++)
                this['loadSubpac' + 'kage'](_0x1cdbb9[_0x515b41], _0x5620e9, (_0x3d2c32, _0x141092) => {
                    _0x141092 && 0x0 == --_0x2abfbd && (console['log']('全部分包加载完成'), _0x7bf241['call'](this, _0x5620e9, !0x0));
                });
        }
        ['loadSubpac' + 'kages'](_0x30dce4, _0x4c9cde, _0x2b1480) {
            var _0x34f209 = _0x30dce4['length'];
            !function _0x33b5ab() {
                var _0x5737a4 = _0x30dce4[_0x34f209 - 0x1];
                null != _0x5737a4 ? _0x357ad8['Utils']['loadSubpac' + 'kage'](_0x5737a4, _0x4c9cde, (_0x8b91d5, _0x2efe70) => {
                    _0x2efe70 && (_0x34f209--, _0x33b5ab());
                }) : (console['log']('全部分包加载完成'), 0x0 == _0x34f209 ? _0x2b1480['call'](this, _0x4c9cde, !0x0) : _0x2b1480['call'](this, _0x4c9cde, !0x1));
            }();
        }
        ['getTimeLef' + 't2BySecond'](_0x1d4508) {
            let _0x2df7a4 = Math['round']((_0x1d4508 - 0x1e) / 0x3c) % 0x3c, _0x4cd745 = _0x1d4508 % 0x3c;
            return (_0x2df7a4 > 0x0 ? _0x2df7a4 > 0x9 ? _0x2df7a4 + ':' : '0' + _0x2df7a4 + ':' : '00:') + (_0x4cd745 > 0x0 ? (_0x4cd745 > 0x9 ? _0x4cd745 + '' : '0' + _0x4cd745) + '' : '00');
        }
        ['objectShak' + 'e'](_0x50e28b, _0x474245 = 0x1, _0x288967 = 0.7) {
            var _0xb7117c = _0x474245, _0x29d28c = 0x1, _0x16b71d = _0x50e28b['transform']['localPosit' + 'ion']['clone']();
            Laya['timer']['frameLoop'](0x1, this, function _0x5d7e35() {
                if (_0xb7117c > 0x0) {
                    var _0x10739b = new Laya['Vector3']();
                    Laya['Vector3']['scale']((_0x57396c = Math['random']() > 0.5 ? Math['random']() : -Math['random'](), _0x1f2b40 = Math['random']() > 0.5 ? Math['random']() : -Math['random'](), new Laya['Vector3'](_0x57396c, _0x1f2b40, 0x0)), _0x288967, _0x10739b), Laya['Vector3']['add'](_0x16b71d, _0x10739b, _0x10739b), _0x50e28b['transform']['localPosit' + 'ion'] = _0x10739b, _0xb7117c -= 0.02 * _0x29d28c;
                } else
                    _0xb7117c = 0x0, _0x50e28b['transform']['localPosit' + 'ion'] = _0x16b71d, Laya['timer']['clear'](this, _0x5d7e35);
                var _0x57396c, _0x1f2b40;
            });
        }
        ['objectShak' + 'e2D'](_0x4764b3, _0x45a720 = 0x1, _0x5207e9 = 0.7) {
            this['originPos'] && (Laya['timer']['clear'](this, this['updateShak' + 'e']), _0x4764b3['pos'](this['originPos']['x'], this['originPos']['y'])), this['shakeTime'] = _0x45a720, (this['originPos'] = new Laya['Vector2'](_0x4764b3['x'], _0x4764b3['y']), Laya['timer']['frameLoop'](0x1, this, this['updateShak' + 'e'], [
                _0x5207e9,
                _0x4764b3,
                0x1
            ]));
        }
        ['randomPos']() {
            var _0x584797 = Math['random']() > 0.5 ? Math['random']() : -Math['random'](), _0x3816dd = Math['random']() > 0.5 ? Math['random']() : -Math['random']();
            return new Laya['Vector2'](_0x584797, _0x3816dd);
        }
        ['updateShak' + 'e'](_0x447ef7, _0xef7b38, _0x71658a) {
            if (this['shakeTime'] > 0x0) {
                var _0x4a8233 = new Laya['Vector2']();
                Laya['Vector2']['scale'](this['randomPos'](), _0x447ef7, _0x4a8233), _0x4a8233['setValue'](_0x4a8233['x'] + this['originPos']['x'], _0x4a8233['y'] + this['originPos']['y']), _0xef7b38['pos'](_0x4a8233['x'], _0x4a8233['y']), this['shakeTime'] -= 0.02 * _0x71658a;
            } else
                this['shakeTime'] = 0x0, _0xef7b38['pos'](this['originPos']['x'], this['originPos']['y']), Laya['timer']['clear'](this, this['updateShak' + 'e']), this['originPos'] = null;
        }
        ['sameSide'](_0x439ba8, _0xdd6961, _0x17b2de, _0x10df05) {
            var _0x4a4f74 = _0x568350['subtract'](_0xdd6961, _0x439ba8), _0x4648c9 = _0x568350['subtract'](_0x17b2de, _0x439ba8), _0x431ff6 = _0x568350['subtract'](_0x10df05, _0x439ba8), _0x23e39b = _0x568350['cross'](_0x4a4f74, _0x4648c9), _0x26f748 = _0x568350['cross'](_0x4a4f74, _0x431ff6);
            return _0x568350['dot'](_0x23e39b, _0x26f748) >= 0x0;
        }
        ['pointInTri' + 'angle'](_0x506cad, _0x3c67a1, _0x4e306b, _0x2351d8) {
            return this['sameSide'](_0x506cad, _0x3c67a1, _0x4e306b, _0x2351d8) && this['sameSide'](_0x3c67a1, _0x4e306b, _0x506cad, _0x2351d8) && this['sameSide'](_0x4e306b, _0x506cad, _0x3c67a1, _0x2351d8);
        }
        ['findNodeBy' + 'Name'](_0x5e3b96, _0x3dc56a) {
            let _0x405453 = null, _0x1e376f = _0x3a5073 => {
                    for (let _0x4eafbb = 0x0; _0x4eafbb < _0x3a5073['numChildre' + 'n']; _0x4eafbb++) {
                        if (_0x3a5073['getChildAt'](_0x4eafbb)['name'] == _0x3dc56a)
                            return void (_0x405453 = _0x3a5073['getChildAt'](_0x4eafbb));
                        _0x1e376f(_0x3a5073['getChildAt'](_0x4eafbb));
                    }
                };
            return _0x1e376f(_0x5e3b96), _0x405453;
        }
        ['coinCollec' + 'tAnim'](_0x3ba042, _0x48350f, _0x161a26, _0x2f1786 = 0xf, _0x19bf33 = null) {
            for (var _0xf2de32 = _0x2f1786, _0x19d414 = 0x0; _0x19d414 < _0x2f1786; _0x19d414++) {
                let _0xdf2a41 = Laya['Pool']['getItemByC' + 'lass']('coin', Laya['Image']);
                _0xdf2a41['skin'] = 'ui/sy_jb_0' + '1.png', _0xdf2a41['x'] = _0x3ba042['x'], _0xdf2a41['y'] = _0x3ba042['y'], _0xdf2a41['scale'](0.6, 0.6), _0x161a26['addChild'](_0xdf2a41);
                let _0x68f775 = 0x12c + 0x64 * Math['random']() - 0x32;
                Laya['Tween']['to'](_0xdf2a41, {
                    'x': _0xdf2a41['x'] + 0xfa * Math['random']() - 0x7d,
                    'y': _0xdf2a41['y'] + 0xfa * Math['random']() - 0x7d
                }, _0x68f775), Laya['timer']['once'](_0x68f775 + 0x32, this, function () {
                    Laya['Tween']['to'](_0xdf2a41, {
                        'x': _0x48350f['x'],
                        'y': _0x48350f['y']
                    }, 0x190, null, new Laya['Handler'](this, function () {
                        _0x161a26['removeChil' + 'd'](_0xdf2a41), Laya['Pool']['recover']('coin', _0xdf2a41), 0x0 == --_0xf2de32 && _0x19bf33 && _0x19bf33(_0x161a26);
                    }));
                });
            }
        }
        ['fixCameraF' + 'ield'](_0x315cdf) {
            let _0x1d77f7 = (Laya['stage']['displayHei' + 'ght'] - 0x536 < 0x0 ? 0x0 : Laya['stage']['displayHei' + 'ght'] - 0x536) / 0x122 * 0xa;
            _0x315cdf['fieldOfVie' + 'w'] += _0x1d77f7;
        }
        ['changeMatC' + 'olor'](_0x39e88b, _0x53947f) {
            _0x39e88b['meshRender' + 'er'] && (_0x39e88b['meshRender' + 'er']['sharedMate' + 'rial']['albedoColo' + 'r'] = _0x53947f);
        }
        ['getRandom']() {
            return this['getRandomA' + 'rray']([
                0x0,
                0.1,
                0.2,
                0.3,
                0.4,
                0.5,
                0.6,
                0.7,
                0.8,
                0.9,
                0x1
            ], 0x1)[0x0];
        }
        ['getAngle'](_0x42a5d7, _0x2b9b1c) {
            var _0x1e9e07 = Laya['Vector3']['dot'](_0x42a5d7, _0x2b9b1c), _0x5001a9 = Laya['Vector3']['scalarLeng' + 'th'](_0x42a5d7) * Laya['Vector3']['scalarLeng' + 'th'](_0x2b9b1c);
            if (0x0 == _0x5001a9) {
                if (_0x42a5d7['z'] > _0x2b9b1c['z'])
                    return 0x0;
                if (_0x42a5d7['z'] < _0x2b9b1c['z'])
                    return 0xb4;
                if (_0x42a5d7['y'] > _0x2b9b1c['y'])
                    return 0x5a;
                if (_0x42a5d7['y'] < _0x2b9b1c['y'])
                    return -0x5a;
            }
            var _0x54d32c = _0x1e9e07 / _0x5001a9;
            return 0xb4 * Math['acos'](_0x54d32c) / Math['PI'];
        }
        ['transform'](_0x5dd9fe) {
            let _0x3e65ad = [
                    '',
                    '',
                    ''
                ], _0x23e3c1 = 0x3e8, _0x53e591 = 0x3;
            for (var _0x153675 = 0x1; _0x5dd9fe / _0x23e3c1 >= 0x1;)
                _0x23e3c1 *= 0xa, _0x53e591 += 0x1;
            if (_0x53e591 <= 0x4)
                _0x3e65ad[0x1] = 'k', _0x3e65ad[0x0] = (_0x5dd9fe / 0x3e8)['toFixed'](0x2);
            else {
                if (_0x53e591 <= 0x9) {
                    let _0x3fcd17 = parseInt((_0x53e591 - 0x4)['toFixed'](0x0)) / 0x2 > 0x1 ? 'm' : 'k';
                    _0x153675 = 'k' === _0x3fcd17 ? 0x3e8 : 0xf4240, _0x3e65ad[0x1] = _0x3fcd17;
                    let _0x213277 = (_0x5dd9fe / _0x153675)['toFixed'](0x2);
                    _0x3e65ad[0x0] = _0x213277 + '';
                } else {
                    if (_0x53e591 <= 0x10) {
                        let _0xf9ea60 = 'b', _0x518eea = 0x1;
                        'm' === _0xf9ea60 ? _0x518eea = 0xf4240 : 'b' === _0xf9ea60 && (_0x518eea = 0x3b9aca00), _0x3e65ad[0x1] = _0xf9ea60, _0x3e65ad[0x0] = (_0x5dd9fe / _0x518eea)['toFixed'](0x2);
                    }
                }
            }
            return _0x5dd9fe < 0x3e8 && (_0x3e65ad[0x1] = '', _0x3e65ad[0x0] = Number(_0x5dd9fe)['toFixed'](0x0) + ''), _0x3e65ad['join']('');
        }
        static ['createTria' + 'ngle'](_0x3dffc7, _0x57b08f, _0x2c335a) {
            void 0x0 === _0x3dffc7 && (_0x3dffc7 = 0x1), void 0x0 === _0x57b08f && (_0x57b08f = 0x1), void 0x0 === _0x2c335a && (_0x2c335a = 0x1), Laya['VertexMesh']['getVertexD' + 'eclaration']('POSITION,N' + 'ORMAL,UV');
            var _0x44e4b2 = _0x3dffc7 / 0x2, _0x1ddd43 = _0x57b08f / 0x2, _0x4d21c7 = _0x2c335a / 0x2;
            new Float32Array([
                -_0x44e4b2,
                _0x1ddd43,
                -_0x4d21c7,
                0x0,
                0x1,
                0x0,
                0x0,
                0x0,
                _0x44e4b2,
                _0x1ddd43,
                -_0x4d21c7,
                0x0,
                0x1,
                0x0,
                0x1,
                0x0,
                _0x44e4b2,
                _0x1ddd43,
                _0x4d21c7,
                0x0,
                0x1,
                0x0,
                0x1,
                0x1,
                -_0x44e4b2,
                -_0x1ddd43,
                -_0x4d21c7,
                0x0,
                -0x1,
                0x0,
                0x0,
                0x0,
                _0x44e4b2,
                -_0x1ddd43,
                -_0x4d21c7,
                0x0,
                -0x1,
                0x0,
                -0x1,
                0x0,
                _0x44e4b2,
                -_0x1ddd43,
                _0x4d21c7,
                0x0,
                -0x1,
                0x0,
                -0x1,
                -0x1,
                -_0x44e4b2,
                _0x1ddd43,
                -_0x4d21c7,
                0x0,
                -0x1,
                0x0,
                0x0,
                0x0,
                _0x44e4b2,
                _0x1ddd43,
                -_0x4d21c7,
                0x0,
                -0x1,
                0x0,
                -0x1,
                0x0,
                _0x44e4b2,
                -_0x1ddd43,
                -_0x4d21c7,
                0x0,
                -0x1,
                0x0,
                0x0,
                -0x1,
                -_0x44e4b2,
                -_0x1ddd43,
                -_0x4d21c7,
                0x0,
                -0x1,
                0x0,
                -0x1,
                -0x1,
                _0x44e4b2,
                _0x1ddd43,
                -_0x4d21c7,
                0x0,
                0x1,
                0x0,
                0x0,
                0x0,
                _0x44e4b2,
                _0x1ddd43,
                _0x4d21c7,
                0x0,
                0x1,
                0x0,
                0x1,
                0x0,
                _0x44e4b2,
                -_0x1ddd43,
                -_0x4d21c7,
                0x0,
                0x1,
                0x0,
                0x0,
                0x1,
                _0x44e4b2,
                -_0x1ddd43,
                _0x4d21c7,
                0x0,
                0x1,
                0x0,
                0x1,
                0x1,
                -_0x44e4b2,
                _0x1ddd43,
                -_0x4d21c7,
                0x0,
                0x1,
                0x0,
                0x0,
                0x0,
                _0x44e4b2,
                _0x1ddd43,
                _0x4d21c7,
                0x0,
                0x1,
                0x0,
                0x0,
                0x0,
                _0x44e4b2,
                -_0x1ddd43,
                _0x4d21c7,
                0x0,
                0x1,
                0x0,
                0x0,
                0x1,
                -_0x44e4b2,
                -_0x1ddd43,
                -_0x4d21c7,
                0x0,
                0x1,
                0x0,
                0x1,
                0x1
            ]), new Uint16Array([
                0x0,
                0x1,
                0x2,
                0x5,
                0x4,
                0x3,
                0x6,
                0x9,
                0x8,
                0x8,
                0x7,
                0x6,
                0xb,
                0xa,
                0xc,
                0xc,
                0xd,
                0xb,
                0xe,
                0xf,
                0x10,
                0x10,
                0x11,
                0xe
            ]);
        }
        ['getNormal'](_0x349591, _0x5cb7f9, _0x20f4d9) {
            var _0x1afaf1 = _0x568350['subtract'](_0x5cb7f9, _0x349591), _0x4fe24f = _0x568350['subtract'](_0x20f4d9, _0x349591);
            return _0x568350['normalized'](_0x568350['cross'](_0x4fe24f, _0x1afaf1));
        }
        ['missTouch'](_0x1031b4, _0x25b38b = 0x12c) {
            _0x357ad8['Platform']['hideBanner'](), _0x1031b4['bottom'] = 0x46;
            var _0x6d93f9 = _0x14bce7['instance']['dataConfig']['front_bann' + 'er_show_ti' + 'me'], _0x5a0fb1 = _0x14bce7['instance']['dataConfig']['front_butt' + 'on_up'];
            Laya['timer']['once'](_0x6d93f9, _0x1031b4, () => {
                _0x357ad8['Platform']['showBanner'](), Laya['Tween']['to'](_0x1031b4, { 'bottom': _0x25b38b }, _0x5a0fb1);
            });
        }
        ['clearMissT' + 'ouch'](_0x3592a4) {
            Laya['timer']['clearAll'](_0x3592a4);
        }
        ['clamp'](_0x1551ce, _0x3a50bd, _0x50edb1) {
            return _0x1551ce < _0x3a50bd ? _0x3a50bd : _0x1551ce > _0x50edb1 ? _0x50edb1 : _0x1551ce;
        }
        ['loadTextur' + 'e2D'](_0x1f6fe1, _0x4cebc2) {
            Laya['Texture2D']['load'](_0x1f6fe1, Laya['Handler']['create'](null, _0x8464f7 => {
                _0x4cebc2(_0x8464f7);
            }));
        }
        ['setMateria' + 'lTexture'](_0x2a8f01, _0x3b3d27) {
            this['loadTextur' + 'e2D'](_0x3b3d27, _0x412c62 => {
                _0x2a8f01['albedoText' + 'ure'] = _0x412c62;
            });
        }
        ['cameraCros' + 'sTween'](_0x43f93d, _0x52b04b) {
            let _0x555967 = Laya['PrimitiveM' + 'esh']['createBox'](0x1, 0x1, 0x1), _0x5107cc = new Laya['MeshSprite' + '3D'](_0x555967);
            _0x43f93d['addChild'](_0x5107cc), _0x5107cc['transform']['localPosit' + 'ion'] = new Laya['Vector3'](0x0, 0x0, -0x1);
            let _0x51a61b = new Laya['UnlitMater' + 'ial']();
            _0x51a61b['alphaTest'] = !0x1, _0x51a61b['alphaTestV' + 'alue'] = 0.5, _0x51a61b['blend'] = 0x1, _0x51a61b['blendDst'] = 0x303, _0x51a61b['blendSrc'] = 0x302, _0x51a61b['cull'] = 0x1, _0x51a61b['depthTest'] = 0x203, _0x51a61b['depthWrite'] = !0x1, _0x51a61b['renderQueu' + 'e'] = 0xbb8, _0x51a61b['tilingOffs' + 'et'] = new Laya['Vector4'](0x1, 0x1, 0x0, 0x0);
            let _0x2bcb0a = new Laya['Vector4'](0x0, 0x0, 0x0, 0x0);
            _0x51a61b['albedoColo' + 'r'] = _0x2bcb0a, _0x5107cc['meshRender' + 'er']['material'] = _0x51a61b;
            let _0x24eabc = new Laya['Tween']();
            _0x24eabc['to'](_0x2bcb0a, { 'w': 0x1 }, 0x3e8, null, Laya['Handler']['create'](this, () => {
                _0x52b04b && _0x52b04b(), _0x24eabc['to'](_0x2bcb0a, { 'w': 0x0 }, 0x3e8, null, Laya['Handler']['create'](this, () => {
                    _0x5107cc['destroy']();
                })), _0x24eabc['update'] = new Laya['Handler'](this, () => {
                    _0x51a61b['albedoColo' + 'r'] = _0x2bcb0a;
                });
            })), _0x24eabc['update'] = new Laya['Handler'](this, () => {
                _0x51a61b['albedoColo' + 'r'] = _0x2bcb0a;
            });
        }
        ['emojiAnim'](_0x223dfe, _0x16c764, _0x3469b9, _0x1f839d = 0xf, _0x1f5323 = null) {
            for (var _0x58f9e4 = _0x1f839d, _0x3273a5 = 0x0; _0x3273a5 < _0x1f839d; _0x3273a5++) {
                let _0x1fcdd4 = Laya['Pool']['getItemByC' + 'lass']('coin', Laya['Image']);
                _0x3469b9['addChild'](_0x1fcdd4), _0x1fcdd4['skin'] = _0x223dfe, _0x1fcdd4['x'] = _0x16c764['x'], _0x1fcdd4['y'] = _0x16c764['y'], _0x1fcdd4['alpha'] = 0x1, _0x1fcdd4['scale'](0.6, 0.6);
                let _0x1e1d9c = 0x190 + 0x64 * Math['random']() - 0x32, _0x121384 = Math['random']() > 0.5 ? _0x1fcdd4['x'] + 0x96 * Math['random']() + 0x64 : _0x1fcdd4['x'] - 0x96 * Math['random']() - 0x64;
                Laya['Tween']['to'](_0x1fcdd4, {
                    'x': _0x121384,
                    'y': _0x1fcdd4['y'] - 0x7d * Math['random']() - 0x96
                }, _0x1e1d9c), Laya['timer']['once'](_0x1e1d9c + 0x32, this, function () {
                    Laya['Tween']['to'](_0x1fcdd4, {
                        'x': _0x1fcdd4['x'],
                        'y': _0x1fcdd4['y'] - 0x64,
                        'alpha': 0x0
                    }, 0x5dc, null, new Laya['Handler'](this, function () {
                        _0x3469b9['removeChil' + 'd'](_0x1fcdd4), Laya['Pool']['recover']('coin', _0x1fcdd4), 0x0 == --_0x58f9e4 && _0x1f5323 && _0x1f5323(_0x3469b9);
                    }));
                });
            }
        }
    }
    _0x5a6c07['showPoint'] = function (_0x4088ba, _0xe4c9f8) {
        for (var _0x4c8ea4 = 0x0; _0x4c8ea4 < _0x4088ba['length']; _0x4c8ea4++) {
            _0x4088ba[_0x4c8ea4], _0x5a6c07['createBox'](0.1, 0.1, 0.1);
            var _0x23cd42 = new Laya['MeshSprite' + '3D']();
            _0x357ad8['CommonData']['mainScene']['addChild'](_0x23cd42);
        }
    }, _0x5a6c07['createMesh'] = function (_0x5c8604, _0x527fb9) {
        Laya['Resource']['destroyUnu' + 'sedResourc' + 'es'](), Laya['VertexMesh']['getVertexD' + 'eclaration']('POSITION,N' + 'ORMAL');
        for (var _0x46b481 = [], _0x3c5d22 = new Laya['Vector3'](-0x1, 0x0, 0x0), _0x2df89d = 0x0; _0x2df89d < _0x5c8604['length']; _0x2df89d++) {
            var _0x586a86 = _0x5c8604[_0x2df89d];
            _0x46b481['push'](_0x586a86['x']), _0x46b481['push'](_0x586a86['y']), _0x46b481['push'](_0x586a86['z']), _0x46b481['push'](_0x3c5d22['x']), _0x46b481['push'](_0x3c5d22['y']), _0x46b481['push'](_0x3c5d22['z']);
        }
        new Float32Array(_0x46b481), new Uint16Array(_0x527fb9);
    }, _0x5a6c07['createBox2'] = function (_0x3d8180, _0x48b57f, _0x5d9422) {
        void 0x0 === _0x3d8180 && (_0x3d8180 = 0x1), void 0x0 === _0x48b57f && (_0x48b57f = 0x1), void 0x0 === _0x5d9422 && (_0x5d9422 = 0x1), Laya['VertexMesh']['getVertexD' + 'eclaration']('POSITION');
        var _0x176694 = _0x3d8180 / 0x2, _0x30383c = _0x48b57f / 0x2, _0x42a51c = _0x5d9422 / 0x2;
        new Float32Array([
            -_0x176694,
            _0x30383c,
            -_0x42a51c,
            _0x176694,
            _0x30383c,
            -_0x42a51c,
            _0x176694,
            _0x30383c,
            _0x42a51c,
            -_0x176694,
            _0x30383c,
            _0x42a51c,
            -_0x176694,
            -_0x30383c,
            -_0x42a51c,
            _0x176694,
            -_0x30383c,
            -_0x42a51c,
            _0x176694,
            -_0x30383c,
            _0x42a51c,
            -_0x176694,
            -_0x30383c,
            _0x42a51c,
            -_0x176694,
            _0x30383c,
            -_0x42a51c,
            -_0x176694,
            _0x30383c,
            _0x42a51c,
            -_0x176694,
            -_0x30383c,
            _0x42a51c,
            -_0x176694,
            -_0x30383c,
            -_0x42a51c,
            _0x176694,
            _0x30383c,
            -_0x42a51c,
            _0x176694,
            _0x30383c,
            _0x42a51c,
            _0x176694,
            -_0x30383c,
            _0x42a51c,
            _0x176694,
            -_0x30383c,
            -_0x42a51c,
            -_0x176694,
            _0x30383c,
            _0x42a51c,
            _0x176694,
            _0x30383c,
            _0x42a51c,
            _0x176694,
            -_0x30383c,
            _0x42a51c,
            -_0x176694,
            -_0x30383c,
            _0x42a51c,
            -_0x176694,
            _0x30383c,
            -_0x42a51c,
            _0x176694,
            _0x30383c,
            -_0x42a51c,
            _0x176694,
            -_0x30383c,
            -_0x42a51c,
            -_0x176694,
            -_0x30383c,
            -_0x42a51c
        ]), new Uint16Array([
            0x0,
            0x1,
            0x2,
            0x2,
            0x3,
            0x0,
            0x4,
            0x7,
            0x6,
            0x6,
            0x5,
            0x4,
            0x8,
            0x9,
            0xa,
            0xa,
            0xb,
            0x8,
            0xc,
            0xf,
            0xe,
            0xe,
            0xd,
            0xc,
            0x10,
            0x11,
            0x12,
            0x12,
            0x13,
            0x10,
            0x14,
            0x17,
            0x16,
            0x16,
            0x15,
            0x14
        ]);
    }, _0x5a6c07['createBox'] = function (_0x6a1d94, _0x33502d, _0x495fa0) {
        void 0x0 === _0x6a1d94 && (_0x6a1d94 = 0x1), void 0x0 === _0x33502d && (_0x33502d = 0x1), void 0x0 === _0x495fa0 && (_0x495fa0 = 0x1), Laya['VertexMesh']['getVertexD' + 'eclaration']('POSITION,N' + 'ORMAL,UV');
        var _0xe7b154 = _0x6a1d94 / 0x2, _0x5d9964 = _0x33502d / 0x2, _0x2701a5 = _0x495fa0 / 0x2;
        new Float32Array([
            -_0xe7b154,
            _0x5d9964,
            -_0x2701a5,
            0x0,
            0x1,
            0x0,
            0x0,
            0x0,
            _0xe7b154,
            _0x5d9964,
            -_0x2701a5,
            0x0,
            0x1,
            0x0,
            0x1,
            0x0,
            _0xe7b154,
            _0x5d9964,
            _0x2701a5,
            0x0,
            0x1,
            0x0,
            0x1,
            0x1,
            -_0xe7b154,
            _0x5d9964,
            _0x2701a5,
            0x0,
            0x1,
            0x0,
            0x0,
            0x1,
            -_0xe7b154,
            -_0x5d9964,
            -_0x2701a5,
            0x0,
            -0x1,
            0x0,
            0x0,
            0x1,
            _0xe7b154,
            -_0x5d9964,
            -_0x2701a5,
            0x0,
            -0x1,
            0x0,
            0x1,
            0x1,
            _0xe7b154,
            -_0x5d9964,
            _0x2701a5,
            0x0,
            -0x1,
            0x0,
            0x1,
            0x0,
            -_0xe7b154,
            -_0x5d9964,
            _0x2701a5,
            0x0,
            -0x1,
            0x0,
            0x0,
            0x0,
            -_0xe7b154,
            _0x5d9964,
            -_0x2701a5,
            -0x1,
            0x0,
            0x0,
            0x0,
            0x0,
            -_0xe7b154,
            _0x5d9964,
            _0x2701a5,
            -0x1,
            0x0,
            0x0,
            0x1,
            0x0,
            -_0xe7b154,
            -_0x5d9964,
            _0x2701a5,
            -0x1,
            0x0,
            0x0,
            0x1,
            0x1,
            -_0xe7b154,
            -_0x5d9964,
            -_0x2701a5,
            -0x1,
            0x0,
            0x0,
            0x0,
            0x1,
            _0xe7b154,
            _0x5d9964,
            -_0x2701a5,
            0x1,
            0x0,
            0x0,
            0x1,
            0x0,
            _0xe7b154,
            _0x5d9964,
            _0x2701a5,
            0x1,
            0x0,
            0x0,
            0x0,
            0x0,
            _0xe7b154,
            -_0x5d9964,
            _0x2701a5,
            0x1,
            0x0,
            0x0,
            0x0,
            0x1,
            _0xe7b154,
            -_0x5d9964,
            -_0x2701a5,
            0x1,
            0x0,
            0x0,
            0x1,
            0x1,
            -_0xe7b154,
            _0x5d9964,
            _0x2701a5,
            0x0,
            0x0,
            0x1,
            0x0,
            0x0,
            _0xe7b154,
            _0x5d9964,
            _0x2701a5,
            0x0,
            0x0,
            0x1,
            0x1,
            0x0,
            _0xe7b154,
            -_0x5d9964,
            _0x2701a5,
            0x0,
            0x0,
            0x1,
            0x1,
            0x1,
            -_0xe7b154,
            -_0x5d9964,
            _0x2701a5,
            0x0,
            0x0,
            0x1,
            0x0,
            0x1,
            -_0xe7b154,
            _0x5d9964,
            -_0x2701a5,
            0x0,
            0x0,
            -0x1,
            0x1,
            0x0,
            _0xe7b154,
            _0x5d9964,
            -_0x2701a5,
            0x0,
            0x0,
            -0x1,
            0x0,
            0x0,
            _0xe7b154,
            -_0x5d9964,
            -_0x2701a5,
            0x0,
            0x0,
            -0x1,
            0x0,
            0x1,
            -_0xe7b154,
            -_0x5d9964,
            -_0x2701a5,
            0x0,
            0x0,
            -0x1,
            0x1,
            0x1
        ]), new Uint16Array([
            0x0,
            0x1,
            0x2,
            0x2,
            0x3,
            0x0,
            0x4,
            0x7,
            0x6,
            0x6,
            0x5,
            0x4,
            0x8,
            0x9,
            0xa,
            0xa,
            0xb,
            0x8,
            0xc,
            0xf,
            0xe,
            0xe,
            0xd,
            0xc,
            0x10,
            0x11,
            0x12,
            0x12,
            0x13,
            0x10,
            0x14,
            0x17,
            0x16,
            0x16,
            0x15,
            0x14
        ]);
    };
    class _0x1bbc46 {
        constructor() {
            this['init'](), Laya['loader']['load'](this['url'], Laya['Handler']['create'](this, this['loadComple' + 'te']), Laya['Handler']['create'](this, this['loadProgre' + 'ss']), Laya['Loader']['PREFAB']);
        }
        ['init']() {
            this['url'] = [];
            for (let _0x407e40 in _0x44362d)
                this['url']['push'](_0x44362d[_0x407e40]);
        }
        ['getItem'](_0x492be5) {
            let _0x3c85d7 = Laya['loader']['getRes'](_0x492be5);
            return _0x3c85d7 ? Laya['Pool']['getItemByC' + 'reateFun'](_0x492be5, _0x3c85d7['create'], _0x3c85d7) : null;
        }
        ['recoverIte' + 'm'](_0x5d5210, _0x199031) {
            Laya['Pool']['recover'](_0x5d5210, _0x199031), _0x199031['parent']['removeChil' + 'd'](_0x199031);
        }
        ['loadProgre' + 'ss'](_0x1a0e7f) {
            console['log']('预制体资源加载中..' + '.', _0x1a0e7f);
        }
        ['loadComple' + 'te']() {
            console['log']('预制体资源加载完成!');
        }
    }
    class _0x5e7331 {
        constructor() {
            this['_isPlay'] = !0x1, this['_isOver'] = !0x1, this['_isPause'] = !0x1, this['_isPressed'] = !0x1, Laya['stage']['on'](Laya['Event']['MOUSE_DOWN'], this, this['onMouseDow' + 'nClick']), Laya['stage']['on'](Laya['Event']['MOUSE_UP'], this, this['onMouseUpC' + 'lick']), Laya['stage']['on'](Laya['Event']['MOUSE_MOVE'], this, this['onMouseMov' + 'eClick']);
        }
        get ['isPressed']() {
            return this['_isPressed'];
        }
        set ['isPressed'](_0x7ee0a7) {
            this['_isPressed'] = _0x7ee0a7;
        }
        get ['isPlay']() {
            return this['_isPlay'];
        }
        set ['isPlay'](_0x31876c) {
            this['_isPlay'] = _0x31876c;
        }
        get ['isOver']() {
            return this['_isOver'];
        }
        set ['isOver'](_0x2c4a72) {
            this['_isOver'] = _0x2c4a72;
        }
        get ['isPause']() {
            return this['_isPause'];
        }
        set ['isPause'](_0x5b8ffb) {
            this['_isPause'] = _0x5b8ffb, Laya['timer']['scale'] = _0x5b8ffb ? 0x0 : 0x1;
        }
        set ['gameScale'](_0x2ca969) {
            Laya['timer']['scale'] = _0x2ca969;
        }
        ['onMouseDow' + 'nClick'](_0xfdf906) {
            _0x357ad8['Event']['event'](_0x662778['MOUSE_EVEN' + 'T'], {
                'type': 'down',
                'evt': _0xfdf906
            });
        }
        ['onMouseUpC' + 'lick'](_0x4a24e2) {
            _0x357ad8['Event']['event'](_0x662778['MOUSE_EVEN' + 'T'], {
                'type': 'up',
                'evt': _0x4a24e2
            });
        }
        ['onMouseMov' + 'eClick'](_0x4b3dae) {
            _0x357ad8['Event']['event'](_0x662778['MOUSE_EVEN' + 'T'], {
                'type': 'move',
                'evt': _0x4b3dae
            });
        }
        ['getThrowX'](_0x5e664f, _0x510044, _0x252cf1, _0x1d184f) {
            return _0x5e664f * Math['pow'](_0x1d184f, 0x2) + _0x510044 * _0x1d184f + _0x252cf1;
        }
    }
    class _0x14571b {
        ['toScale'](_0x45aadb, _0x13b28a, _0x2ec34c, _0x4e213a, _0x2287f2, _0x5b1a16 = !0x1, _0x202b4c = null) {
            if (_0x45aadb) {
                var _0x3ff9ce = null;
                _0x45aadb['scale'](_0x13b28a, _0x13b28a), _0x4d9908();
            }
            function _0x4d9908() {
                _0x3ff9ce = _0x5b1a16 || _0x2287f2 ? new Laya['Handler'](this, _0x38eb49) : null, Laya['Tween']['to'](_0x45aadb, {
                    'scaleX': _0x2ec34c,
                    'scaleY': _0x2ec34c
                }, _0x4e213a, _0x202b4c, _0x3ff9ce);
            }
            function _0x38eb49() {
                _0x3ff9ce = _0x5b1a16 ? new Laya['Handler'](this, _0x4d9908) : null, Laya['Tween']['to'](_0x45aadb, {
                    'scaleX': _0x13b28a,
                    'scaleY': _0x13b28a
                }, _0x4e213a, _0x202b4c, _0x3ff9ce);
            }
        }
        ['toAlpha'](_0x46530e, _0x547f12, _0x2f2bc3, _0x469db0, _0x3a330b, _0x167ff4 = !0x1, _0x495ca3 = null) {
            if (_0x46530e) {
                var _0x1a8497 = null;
                _0x46530e['alpha'] = _0x547f12, _0x2a9f77();
            }
            function _0x2a9f77() {
                _0x1a8497 = _0x167ff4 || _0x3a330b ? new Laya['Handler'](this, _0x3b8324) : null, Laya['Tween']['to'](_0x46530e, { 'alpha': _0x2f2bc3 }, _0x469db0, _0x495ca3, _0x1a8497);
            }
            function _0x3b8324() {
                _0x1a8497 = _0x167ff4 ? new Laya['Handler'](this, _0x2a9f77) : null, Laya['Tween']['to'](_0x46530e, { 'alpha': _0x547f12 }, _0x469db0, _0x495ca3, _0x1a8497);
            }
        }
        ['toPosition'](_0x2ff588, _0x5582ce, _0x457264, _0x4d11fa = !0x1, _0x4b7862 = 0x0) {
            let _0x22c97e = new Laya['Vector2'](_0x2ff588['x'], _0x2ff588['y']);
            function _0x5ecc32() {
                if (_0x4d11fa)
                    switch (_0x4b7862) {
                    case 0x0:
                        var _0x34725d = new Laya['Handler'](this, _0x4995e0);
                        break;
                    case 0x1:
                        _0x34725d = new Laya['Handler'](this, _0x56a98a);
                    }
                Laya['Tween']['to'](_0x2ff588, {
                    'x': _0x5582ce['x'],
                    'y': _0x5582ce['y']
                }, _0x457264, null, _0x34725d);
            }
            function _0x4995e0() {
                Laya['Tween']['to'](_0x2ff588, {
                    'x': _0x22c97e['x'],
                    'y': _0x22c97e['y']
                }, _0x457264, null, Laya['Handler']['create'](this, _0x5ecc32));
            }
            function _0x56a98a() {
                _0x2ff588['x'] = _0x22c97e['x'], _0x2ff588['y'] = _0x22c97e['y'], _0x5ecc32();
            }
            _0x5ecc32();
        }
        ['toPosition' + '3D'](_0x4a14b5, _0x19c035, _0x268d23, _0x5abf39, _0x28dc24, _0x5b7592, _0x36780e) {
            _0x28dc24 && (_0x4a14b5['transform']['position'] = _0x28dc24);
            var _0x4b60d1 = new Laya['Tween'](), _0x454192 = _0x4a14b5['transform']['position']['clone']();
            _0x4b60d1['to'](_0x454192, {
                'x': _0x19c035['x'],
                'y': _0x19c035['y'],
                'z': _0x19c035['z']
            }, _0x268d23, _0x5abf39, Laya['Handler']['create'](this, () => {
                _0x4a14b5['destroyed'] ? _0x4b60d1['clear']() : (_0x4a14b5['transform']['position'] = _0x19c035, _0x5b7592 && _0x5b7592());
            })), _0x4b60d1['update'] = new Laya['Handler'](this, () => {
                _0x4a14b5['destroyed'] ? _0x4b60d1['clear']() : (_0x4a14b5['transform']['position'] = _0x454192, _0x36780e && _0x36780e(_0x4a14b5, _0x454192));
            });
        }
        ['toRotaion'](_0x1d3c49, _0x53b0c5, _0xe17ee, _0x21dc14 = !0x1, _0x1c6f62 = !0x1) {
            var _0x251bf4 = _0x1d3c49['rotation'];
            function _0x1fca99() {
                Laya['Tween']['to'](_0x1d3c49, { 'rotation': -_0x53b0c5 }, 0x2 * _0xe17ee, null, Laya['Handler']['create'](this, _0x3fba8f));
            }
            function _0x3fba8f() {
                Laya['Tween']['to'](_0x1d3c49, { 'rotation': _0x53b0c5 }, 0x2 * _0xe17ee, null, Laya['Handler']['create'](this, _0x1fca99));
            }
            function _0x58eb2a() {
                Laya['Tween']['to'](_0x1d3c49, { 'rotation': _0x251bf4 }, _0xe17ee);
            }
            !function () {
                if (_0x21dc14)
                    var _0x22665a = new Laya['Handler'](this, _0x1fca99);
                else {
                    if (_0x1c6f62)
                        var _0x22665a = new Laya['Handler'](this, _0x58eb2a);
                }
                Laya['Tween']['to'](_0x1d3c49, { 'rotation': _0x53b0c5 }, _0xe17ee, null, _0x22665a);
            }();
        }
        ['clear'](_0xafe726) {
            Laya['Tween']['clearAll'](_0xafe726);
        }
    }
    class _0x547ddc extends Laya['Script3D'] {
        ['onAwake']() {
            this['self'] = this['owner'], this['init']();
        }
        ['init'](..._0x3aca47) {
        }
        ['onDestroy']() {
            Laya['timer']['clearAll'](this), _0x357ad8['Event']['offAllCall' + 'er'](this);
        }
    }
    class _0x2c5113 extends _0x547ddc {
        ['init'](_0x56f99c, _0x4821b8, _0xdc000f, _0xd51579, _0x49fc01, _0x456991) {
            this['sizeX'] = _0x56f99c ? _0x56f99c / 0x2 : 0x0, this['sizeY'] = _0x4821b8 ? _0x4821b8 / 0x2 : 0x0, this['sizeZ'] = _0xdc000f ? _0xdc000f / 0x2 : 0x0, this['offsetX'] = _0xd51579 || 0x0, this['offsetY'] = _0x49fc01 || 0x0, this['offsetZ'] = _0x456991 || 0x0, this['maxSize'] = Math['max'](this['sizeZ'], Math['max'](this['sizeX'], this['sizeY']));
        }
    }
    class _0x3f6a04 extends _0x2c5113 {
        ['onAwake']() {
            super['onAwake'](), null == _0x2c5113['colliders'] && (_0x2c5113['colliders'] = []), _0x2c5113['colliders']['push'](this);
        }
        ['onDestroy']() {
            _0x2c5113['colliders']['splice'](_0x2c5113['colliders']['indexOf'](this), 0x1), super['onDestroy']();
        }
        ['getTarget'](_0x496828) {
            if (this['touchTarge' + 'ts']) {
                _0x240087 = null;
                for (var _0x2ec9d0 = 0x0; _0x2ec9d0 < this['touchTarge' + 'ts']['length']; _0x2ec9d0++)
                    _0x496828 == this['touchTarge' + 'ts'][_0x2ec9d0]['target'] && (_0x240087 = this['touchTarge' + 'ts'][_0x2ec9d0]);
                null == _0x240087 && (_0x240087 = {
                    'target': _0x496828,
                    'isFirstTouch': !0x0
                }, this['touchTarge' + 'ts']['push'](_0x240087));
            } else {
                this['touchTarge' + 'ts'] = [];
                var _0x240087 = {
                    'target': _0x496828,
                    'isFirstTouch': !0x0
                };
                this['touchTarge' + 'ts']['push'](_0x240087);
            }
            return _0x240087;
        }
        ['setTarget'](_0x284b6c, _0x35cda2) {
            for (var _0x915a35 = 0x0; _0x915a35 < this['touchTarge' + 'ts']['length']; _0x915a35++) {
                if (_0x284b6c == this['touchTarge' + 'ts'][_0x915a35]['target'])
                    this['touchTarge' + 'ts'][_0x915a35]['isFirstTou' + 'ch'] = _0x35cda2;
            }
        }
    }
    class _0xb46e7f extends _0x3f6a04 {
        ['onStart']() {
            if (this['init'](0x1, 0.2, 0.24, 0x0, 0x0, 0x0), this['isTrigger'] = !0x0, this['speed'] = 0x3 * Math['random']() / 0x64 + 0.03, this['isLeft'] = Math['random']() > 0.5, !this['isLeft']) {
                let _0x241157 = this['self']['transform']['rotationEu' + 'ler']['clone']();
                _0x241157['y'] += 0xb4, this['self']['transform']['rotationEu' + 'ler'] = _0x241157;
            }
        }
        ['onUpdate']() {
            this['self']['transform']['translate'](new Laya['Vector3'](this['speed'], 0x0, 0x0));
            let _0x3e823f = this['self']['transform']['position']['clone']();
            if (_0x3e823f['x'] > 0x2 || _0x3e823f['x'] < -0x2) {
                this['isLeft'] = !this['isLeft'];
                let _0x45c094 = this['self']['transform']['rotationEu' + 'ler']['clone']();
                _0x45c094['y'] += 0xb4, this['self']['transform']['rotationEu' + 'ler'] = _0x45c094;
            }
        }
    }
    class _0x6ad4ba extends _0x547ddc {
        constructor() {
            super(...arguments), this['canFollow'] = !0x0;
        }
        ['changeSkin']() {
            let _0x1473f6 = _0x357ad8['Level']['getKnife'](_0x357ad8['Storage']['storageDat' + 'a']['knifeIndex'] - 0x1), _0x5d5642 = this['self']['getChildBy' + 'Name']('KnifePoint');
            _0x5d5642['destroyChi' + 'ldren'](), _0x5d5642['addChild'](_0x1473f6), _0x1473f6['transform']['localPosit' + 'ion'] = new Laya['Vector3']();
            let _0x191540 = _0x357ad8['Level']['getPlate'](_0x357ad8['Storage']['storageDat' + 'a']['plateIndex'] - 0x1), _0x4cbf93 = this['self']['getChildBy' + 'Name']('PlatePoint');
            _0x4cbf93['destroyChi' + 'ldren'](), _0x4cbf93['addChild'](_0x191540), _0x191540['transform']['localPosit' + 'ion'] = new Laya['Vector3']();
        }
        ['start']() {
            this['anim']['play']('CameraStar' + 't');
        }
        ['init']() {
            this['firstX'] = this['self']['transform']['position']['x'], this['oriPos'] = this['self']['transform']['position']['clone'](), this['oriRot'] = this['self']['transform']['rotationEu' + 'ler']['clone'](), this['anim'] = this['self']['getCompone' + 'nt'](Laya['Animator']), this['fx'] = this['self']['getChildBy' + 'Name']('CameraWind' + 'FX')['getChildAt'](0x0)['particleSy' + 'stem'], this['fx']['stop'](), this['shineFX'] = this['self']['getChildBy' + 'Name']('ShineFX'), this['throwSushi' + 'FX'] = this['self']['getChildBy' + 'Name']('FX')['getChildBy' + 'Name']('ThrowSushi' + 'FX')['particleSy' + 'stem'], this['initData']();
        }
        ['setTarget'](_0x459f2c) {
            this['target'] = _0x459f2c;
            var _0xc4d990 = this['self']['transform']['position']['clone'](), _0x11375f = this['target']['transform']['position']['clone']();
            this['offset'] = new Laya['Vector3'](), Laya['Vector3']['subtract'](_0xc4d990, _0x11375f, this['offset']);
        }
        ['finish'](_0x4e34a4, _0x440da6) {
            this['fx']['stop'](), this['self']['getChildBy' + 'Name']('SushiPoint')['addChild'](_0x4e34a4), _0x4e34a4['transform']['localPosit' + 'ion'] = new Laya['Vector3'](0x0, _0x440da6, 0x0), _0x4e34a4['transform']['localRotat' + 'ionEuler'] = new Laya['Vector3'](), this['canFollow'] = !0x1, this['anim']['play']('CameraFini' + 'sh_2'), Laya['timer']['once'](0x898, this, () => {
                this['throwSushi' + 'FX']['play'](), _0x357ad8['Sound']['play'](_0x3c0ec2['Finish2']);
            }), Laya['timer']['once'](0xbb8, this, () => {
                _0x357ad8['Utils']['cameraCros' + 'sTween'](_0x357ad8['Level']['mainCamera'], () => {
                    _0x357ad8['Game']['isPlay'] = !0x1, _0x357ad8['Level']['setFog']('#EA9B62', !0x1), console['log']('过度到首页'), this['initData'](), Laya['timer']['once'](0x1f4, this, () => {
                        this['anim']['play']('CameraEat_' + '2'), Laya['timer']['once'](0x4e2, this, () => {
                            _0x357ad8['Event']['event'](_0x662778['GAME_OVER_' + 'EVENT']);
                        });
                    });
                });
            });
        }
        ['onUpdate']() {
            if (_0x357ad8['Game']['isPlay'] && this['target'] && this['canFollow']) {
                var _0x43eb89 = new Laya['Vector3'](), _0x227dc4 = this['target']['transform']['position']['clone']();
                Laya['Vector3']['add'](_0x227dc4, this['offset'], _0x43eb89), _0x43eb89['y'] = this['self']['transform']['position']['y'], Laya['Vector3']['lerp'](this['self']['transform']['position'], _0x43eb89, 0.2, _0x43eb89), this['self']['transform']['position'] = _0x43eb89;
            }
        }
        ['initData']() {
            this['canFollow'] = !0x0, this['self']['transform']['position'] = this['oriPos'], this['self']['transform']['rotationEu' + 'ler'] = this['oriRot'], this['anim']['play']('CameraIdle'), this['shineFX']['active'] = !0x1;
        }
    }
    class _0x1c502f extends _0x3f6a04 {
        ['onStart']() {
            this['init'](0xa, 0x5, 2.4, 0x0, 0x0, 0x0), this['isTrigger'] = !0x0;
        }
    }
    class _0x120141 extends _0x3f6a04 {
        ['onStart']() {
            this['init'](0x1, 0.2, 0.24, 0x0, 0x0, 0x0), this['isTrigger'] = !0x0;
        }
    }
    class _0x194b0f {
        constructor() {
            this['tween'] = new Laya['Tween'](), this['tweens'] = [];
        }
        ['getTimeByF' + 'rame'](_0x72bf4f) {
            return Math['round'](0xa * _0x72bf4f);
        }
        ['toTween'](_0xa870c1, _0x9bff74, _0x578553, _0x37a85e, _0x5d0d5a, _0x46abe2 = !0x0) {
            this['target'] = _0xa870c1, this['isLocal'] = _0x46abe2;
            var _0x5ae35a = {}, _0x1ea8c4 = {};
            if (_0x9bff74['pos']) {
                var _0x25ffb4 = _0x46abe2 ? _0xa870c1['transform']['localPosit' + 'ion']['clone']() : _0xa870c1['transform']['position']['clone']();
                _0x5ae35a['posX'] = _0x25ffb4['x'], _0x5ae35a['posY'] = _0x25ffb4['y'], _0x5ae35a['posZ'] = _0x25ffb4['z'], _0x1ea8c4['posX'] = _0x9bff74['pos']['x'], _0x1ea8c4['posY'] = _0x9bff74['pos']['y'], _0x1ea8c4['posZ'] = _0x9bff74['pos']['z'];
            }
            if (_0x9bff74['rot']) {
                var _0x2fcffd = _0x46abe2 ? _0xa870c1['transform']['localRotat' + 'ionEuler']['clone']() : _0xa870c1['transform']['rotationEu' + 'ler']['clone']();
                _0x5ae35a['rotX'] = _0x2fcffd['x'], _0x5ae35a['rotY'] = _0x2fcffd['y'], _0x5ae35a['rotZ'] = _0x2fcffd['z'], _0x1ea8c4['rotX'] = _0x9bff74['rot']['x'], _0x1ea8c4['rotY'] = _0x9bff74['rot']['y'], _0x1ea8c4['rotZ'] = _0x9bff74['rot']['z'];
            }
            if (_0x9bff74['sca']) {
                var _0x390c2f = _0xa870c1['transform']['getWorldLo' + 'ssyScale']()['clone']();
                _0x5ae35a['scaX'] = _0x390c2f['x'], _0x5ae35a['scaY'] = _0x390c2f['y'], _0x5ae35a['scaZ'] = _0x390c2f['z'], _0x1ea8c4['scaX'] = _0x9bff74['sca']['x'], _0x1ea8c4['scaY'] = _0x9bff74['sca']['y'], _0x1ea8c4['scaZ'] = _0x9bff74['sca']['z'];
            }
            return this['tween']['to'](_0x5ae35a, {
                'posX': _0x1ea8c4['posX'],
                'posY': _0x1ea8c4['posY'],
                'posZ': _0x1ea8c4['posZ'],
                'rotX': _0x1ea8c4['rotX'],
                'rotY': _0x1ea8c4['rotY'],
                'rotZ': _0x1ea8c4['rotZ'],
                'scaX': _0x1ea8c4['scaX'],
                'scaY': _0x1ea8c4['scaY'],
                'scaZ': _0x1ea8c4['scaZ']
            }, _0x578553, _0x5d0d5a, Laya['Handler']['create'](this, () => {
                _0x37a85e && _0x37a85e();
                var _0x52d17d = this['tweens']['shift']();
                _0x52d17d && this['toTween'](this['target'], _0x52d17d['value'], _0x52d17d['time'], _0x52d17d['completeFu' + 'n'], _0x5d0d5a, _0x46abe2);
            })), this['tween']['update'] = new Laya['Handler'](this, () => {
                _0x9bff74['pos'] && (_0x46abe2 ? _0xa870c1['transform']['localPosit' + 'ion'] = new Laya['Vector3'](_0x5ae35a['posX'], _0x5ae35a['posY'], _0x5ae35a['posZ']) : _0xa870c1['transform']['position'] = new Laya['Vector3'](_0x5ae35a['posX'], _0x5ae35a['posY'], _0x5ae35a['posZ'])), _0x9bff74['rot'] && (_0x46abe2 ? _0xa870c1['transform']['localRotat' + 'ionEuler'] = new Laya['Vector3'](_0x5ae35a['rotX'], _0x5ae35a['rotY'], _0x5ae35a['rotZ']) : _0xa870c1['transform']['rotationEu' + 'ler'] = new Laya['Vector3'](_0x5ae35a['rotX'], _0x5ae35a['rotY'], _0x5ae35a['rotZ'])), _0x9bff74['sca'] && _0xa870c1['transform']['setWorldLo' + 'ssyScale'](new Laya['Vector3'](_0x5ae35a['scaX'], _0x5ae35a['scaY'], _0x5ae35a['scaZ']));
            }), this;
        }
        ['clearTween'](_0x4b0d54) {
            this['tweens'] = [], this['tween']['clear'](), this['target'] && _0x4b0d54 && (_0x4b0d54['pos'] && (this['isLocal'] ? this['target']['transform']['localPosit' + 'ion'] = new Laya['Vector3'](_0x4b0d54['pos']['x'], _0x4b0d54['pos']['y'], _0x4b0d54['pos']['z']) : this['target']['transform']['position'] = new Laya['Vector3'](_0x4b0d54['pos']['x'], _0x4b0d54['pos']['y'], _0x4b0d54['pos']['z'])), _0x4b0d54['rot'] && (this['target']['transform']['rotationEu' + 'ler'] = new Laya['Vector3'](_0x4b0d54['rot']['x'], _0x4b0d54['rot']['y'], _0x4b0d54['rot']['z'])), _0x4b0d54['sca'] && this['target']['transform']['setWorldLo' + 'ssyScale'](new Laya['Vector3'](_0x4b0d54['sca']['x'], _0x4b0d54['sca']['y'], _0x4b0d54['sca']['z'])));
        }
        ['then'](_0x32e500, _0x16eec4, _0x6b9a87) {
            return this['tweens']['push']({
                'value': _0x32e500,
                'time': _0x16eec4,
                'completeFun': _0x6b9a87
            }), this;
        }
    }
    class _0x5536e4 extends _0x2c5113 {
        ['onUpdate']() {
            var _0x10cc81 = _0x2c5113['colliders'];
            if (_0x10cc81 && 0x0 != _0x10cc81['length'])
                for (var _0x2fa87f = _0x10cc81['length'] - 0x1; _0x2fa87f >= 0x0; _0x2fa87f--) {
                    var _0x14f83e = _0x10cc81[_0x2fa87f];
                    if (_0x14f83e['self']['transform']) {
                        var _0x12f5b3 = _0x14f83e['getTarget'](this), _0x1f4021 = _0x14f83e['self']['transform']['position']['clone'](), _0x1282e6 = this['self']['transform']['position']['clone'](), _0x160ea4 = _0x14f83e['sizeZ'] + this['sizeZ'] - Math['abs'](_0x1f4021['z'] - _0x1282e6['z']);
                        if (Math['abs'](_0x1f4021['y'] - _0x1282e6['y']) < this['sizeY'] + _0x14f83e['sizeY'] && _0x1282e6['z'] > _0x1f4021['z'] - this['sizeZ'] - _0x14f83e['sizeZ'] && _0x1282e6['z'] < _0x1f4021['z'] + this['sizeZ'] + _0x14f83e['sizeZ'] && _0x1282e6['x'] > _0x1f4021['x'] - this['sizeX'] - _0x14f83e['sizeX'] && _0x1282e6['x'] < _0x1f4021['x'] + this['sizeX'] + _0x14f83e['sizeX'] && _0x14f83e['isTrigger']) {
                            if (_0x1f4021['y'] > _0x1282e6['y']) {
                                _0x1282e6['y'] = _0x1f4021['y'] - (this['sizeY'] + _0x14f83e['sizeY']);
                                var _0x457c35 = _0xda6ec5['Up'];
                            } else
                                _0x1282e6['y'] = _0x1f4021['y'] + (this['sizeY'] + _0x14f83e['sizeY']), _0x457c35 = _0xda6ec5['Down'];
                            _0x12f5b3['isFirstTou' + 'ch'] ? (_0x14f83e['setTarget'](this, !0x1), _0x14f83e['isTrigger'] ? this['triggerEnt' + 'er']({
                                'type': _0x457c35,
                                'owner': this['self'],
                                'target': _0x14f83e
                            }) : (this['collisionE' + 'nter']({
                                'type': _0x457c35,
                                'owner': this['self'],
                                'target': _0x14f83e
                            }), this['self']['transform']['position'] = _0x1282e6)) : _0x14f83e['isTrigger'] ? this['triggerSta' + 'y']({
                                'type': _0x457c35,
                                'owner': this['self'],
                                'target': _0x14f83e
                            }) : (this['collisionS' + 'tay']({
                                'type': _0x457c35,
                                'owner': this['self'],
                                'target': _0x14f83e
                            }), this['self']['transform']['position'] = _0x1282e6);
                        } else {
                            if (_0x160ea4 > 0x0 && _0x160ea4 < 0.5 && _0x1282e6['x'] > _0x1f4021['x'] - _0x14f83e['sizeX'] - this['sizeX'] && _0x1282e6['x'] < _0x1f4021['x'] + _0x14f83e['sizeX'] + this['sizeX'] && _0x1282e6['y'] > _0x1f4021['y'] - this['sizeY'] - _0x14f83e['sizeY'] && _0x1282e6['y'] < _0x1f4021['y'] + this['sizeY'] + _0x14f83e['sizeY']) {
                                if (_0x1f4021['z'] > _0x1282e6['z'])
                                    _0x1282e6['z'] = _0x1f4021['z'] - (_0x14f83e['sizeZ'] + this['sizeZ']), _0x457c35 = _0xda6ec5['Forward'];
                                else
                                    _0x1282e6['z'] = _0x1f4021['z'] + (_0x14f83e['sizeZ'] + this['sizeZ']), _0x457c35 = _0xda6ec5['Backward'];
                                _0x12f5b3['isFirstTou' + 'ch'] ? (_0x14f83e['setTarget'](this, !0x1), _0x14f83e['isTrigger'] ? this['triggerEnt' + 'er']({
                                    'type': _0x457c35,
                                    'owner': this['self'],
                                    'target': _0x14f83e
                                }) : (this['collisionE' + 'nter']({
                                    'type': _0x457c35,
                                    'owner': this['self'],
                                    'target': _0x14f83e
                                }), this['self']['transform']['position'] = _0x1282e6)) : _0x14f83e['isTrigger'] ? this['triggerSta' + 'y']({
                                    'type': _0x457c35,
                                    'owner': this['self'],
                                    'target': _0x14f83e
                                }) : (this['collisionS' + 'tay']({
                                    'type': _0x457c35,
                                    'owner': this['self'],
                                    'target': _0x14f83e
                                }), this['self']['transform']['position'] = _0x1282e6);
                            } else {
                                if (Math['abs'](_0x1f4021['x'] - _0x1282e6['x']) < _0x14f83e['sizeX'] + this['sizeX'] && _0x1282e6['z'] > _0x1f4021['z'] - _0x14f83e['sizeZ'] - this['sizeZ'] && _0x1282e6['z'] < _0x1f4021['z'] + _0x14f83e['sizeZ'] + this['sizeZ'] && _0x1282e6['y'] > _0x1f4021['y'] - this['sizeY'] - _0x14f83e['sizeY'] && _0x1282e6['y'] < _0x1f4021['y'] + this['sizeY'] + _0x14f83e['sizeY']) {
                                    if (_0x1f4021['x'] > _0x1282e6['x'])
                                        _0x1282e6['x'] = _0x1f4021['x'] - (_0x14f83e['sizeX'] + this['sizeX']), _0x457c35 = _0xda6ec5['Left'];
                                    else
                                        _0x1282e6['x'] = _0x1f4021['x'] + (_0x14f83e['sizeX'] + this['sizeX']), _0x457c35 = _0xda6ec5['Right'];
                                    _0x12f5b3['isFirstTou' + 'ch'] ? (_0x14f83e['setTarget'](this, !0x1), _0x14f83e['isTrigger'] ? this['triggerEnt' + 'er']({
                                        'type': _0x457c35,
                                        'owner': this['self'],
                                        'target': _0x14f83e
                                    }) : (this['collisionE' + 'nter']({
                                        'type': _0x457c35,
                                        'owner': this['self'],
                                        'target': _0x14f83e
                                    }), this['self']['transform']['position'] = _0x1282e6)) : _0x14f83e['isTrigger'] ? this['triggerSta' + 'y']({
                                        'type': _0x457c35,
                                        'owner': this['self'],
                                        'target': _0x14f83e
                                    }) : (this['collisionS' + 'tay']({
                                        'type': _0x457c35,
                                        'owner': this['self'],
                                        'target': _0x14f83e
                                    }), this['self']['transform']['position'] = _0x1282e6);
                                } else
                                    _0x12f5b3['isFirstTou' + 'ch'] || (_0x14f83e['setTarget'](this, !0x0), _0x14f83e['isTrigger'] ? this['triggerExi' + 't']({
                                        'owner': this['self'],
                                        'target': _0x14f83e
                                    }) : this['collisionE' + 'xit']({
                                        'owner': this['self'],
                                        'target': _0x14f83e
                                    }));
                            }
                        }
                    }
                }
        }
        ['triggerEnt' + 'er'](_0x1858fe) {
        }
        ['triggerSta' + 'y'](_0x1f8093) {
        }
        ['triggerExi' + 't'](_0x537523) {
        }
        ['collisionE' + 'nter'](_0x7c8231) {
        }
        ['collisionS' + 'tay'](_0x13cac2) {
        }
        ['collisionE' + 'xit'](_0x1593d1) {
        }
    }
    !function (_0x688905) {
        _0x688905['None'] = 'none', _0x688905['Forward'] = 'forward', _0x688905['Backward'] = 'backward', _0x688905['Left'] = 'left', _0x688905['Right'] = 'right', _0x688905['Up'] = 'up', _0x688905['Down'] = 'down';
    }(_0xda6ec5 || (_0xda6ec5 = {}));
    class _0xba0ed2 extends _0x5536e4 {
        constructor() {
            super(...arguments), this['radius'] = 1.1, this['maxRadius'] = 0x2, this['amount'] = 0xc8, this['mats'] = [], this['canPlay'] = !0x0, this['triggerCou' + 'nt'] = 0x0, this['currentInd' + 'ex'] = 0x0;
        }
        ['initData']() {
            if (this['rotateTarg' + 'et']) {
                this['canPlay'] = !0x0, this['isPressed'] = !0x1, this['canRotate'] = !0x1, this['currentInd' + 'ex'] = 0x0, this['radius'] = 1.1, this['init'](0x4, this['radius'], this['radius']);
                for (var _0x112790 = 0x0; _0x112790 < 0x1; _0x112790++) {
                    this['rotateTarg' + 'et']['getChildAt'](_0x112790)['getChildAt'](0x0)['_children']['forEach'](_0x368be8 => {
                        _0x368be8['active'] = !0x1;
                    });
                }
                this['self']['transform']['position'] = new Laya['Vector3'](0x0, 6.94, -0x10), this['self']['transform']['rotationEu' + 'ler'] = new Laya['Vector3'](), this['rollFX']['stop']();
            }
        }
        ['onStart']() {
            this['init'](0x4, this['radius'], this['radius']), this['rotateTarg' + 'et'] = this['self']['getChildAt'](0x0);
            for (var _0xba722f = 0x0; _0xba722f < 0x1; _0xba722f++) {
                this['rotateTarg' + 'et']['getChildAt'](_0xba722f)['getChildAt'](0x0)['_children']['forEach'](_0x36952b => {
                    _0x36952b['active'] = !0x1;
                });
            }
            this['tween'] = new _0x194b0f(), _0x357ad8['Event']['on'](_0x662778['MOUSE_EVEN' + 'T'], this, this['onMouseEve' + 'nt']);
            let _0x150260 = this['self']['transform']['position']['clone']();
            _0x150260['y'] = 5.5 + this['radius'], this['self']['transform']['position'] = _0x150260, this['addRadius'] = (this['maxRadius'] - 1.1) / this['amount'], this['rollFXSpr'] = _0x357ad8['Level']['moveFX'], this['rollFX'] = this['rollFXSpr']['getChildAt'](0x0)['particleSy' + 'stem'], this['rollFX']['stop']();
        }
        ['onMouseEve' + 'nt'](_0x2ef82c) {
            'up' == _0x2ef82c['type'] ? this['isPressed'] = !0x1 : 'down' == _0x2ef82c['type'] && (this['isPressed'] = !0x0);
        }
        ['onUpdate']() {
            if (_0x357ad8['Game']['isPlay']) {
                if (super['onUpdate'](), this['oldStatus'] != this['isPressed'] && this['canPlay']) {
                    this['oldStatus'] = this['isPressed'];
                    let _0x189783 = this['self']['transform']['position']['clone']();
                    _0x189783['z'] += 0.4, this['tween']['clearTween'](), this['isPressed'] ? (_0x189783['y'] = 0x5 + this['radius'], this['tween']['toTween'](this['self'], { 'pos': _0x189783 }, 0x32, () => {
                        _0x357ad8['Sound']['play'](_0x3c0ec2['RollDown']), _0x357ad8['Utils']['objectShak' + 'e'](_0x357ad8['Level']['mainCamera'], 0.1, 0.1);
                    }, Laya['Ease']['backOut'])['then']({ 'sca': new Laya['Vector3'](0x1, 0.75, 1.25) }, 0x64)['then']({ 'sca': new Laya['Vector3'](0x1, 0x1, 0x1) }, 0x64)) : (_0x189783['y'] = 5.5 + this['radius'], this['tween']['toTween'](this['self'], { 'pos': _0x189783 }, 0x32)['then']({ 'sca': new Laya['Vector3'](0x1, 1.25, 0.75) }, 0x64)['then']({ 'sca': new Laya['Vector3'](0x1, 0x1, 0x1) }, 0x64));
                } else
                    this['self']['transform']['translate'](new Laya['Vector3'](0x0, 0x0, 0.1));
                this['canRotate'] && this['rotateTarg' + 'et']['transform']['rotate'](new Laya['Vector3'](-0.15, 0x0, 0x0)), this['oldRotateS' + 'tatus'] != this['canRotate'] && (this['oldRotateS' + 'tatus'] = this['canRotate'], this['canRotate'] && this['fxColor'] ? (this['rollFX']['startColor' + 'Constant'] = this['fxColor'], this['rollFX']['play'](), window['WebAudioEn' + 'gine']['playSound']('res/sound/' + 'RollingLon' + 'g.mp3')) : (this['rollFX']['stop'](), window['WebAudioEn' + 'gine']['stopSound']('res/sound/' + 'RollingLon' + 'g.mp3')));
                var _0x33391d = this['self']['transform']['position']['clone']();
                _0x33391d['y'] = 6.94, this['rollFXSpr']['transform']['position'] = _0x33391d;
            }
        }
        ['roach']() {
            this['isRoach'] || (this['isRoach'] = !0x0, _0x357ad8['Sound']['play'](_0x3c0ec2['Roach']), Laya['timer']['once'](0x3e8, this, () => {
                this['isRoach'] = !0x1;
            }));
        }
        ['triggerEnt' + 'er'](_0x185ef4) {
            var _0x42b63f = _0x185ef4['target']['self']['name'];
            if (-0x1 != _0x42b63f['indexOf']('Sushi1_')) {
                Laya['timer']['clear'](this, this['cancelRota' + 'te']), Laya['timer']['once'](0x64, this, this['cancelRota' + 'te']), this['canRotate'] = !0x0;
                let _0x4a3e30 = _0x185ef4['target']['self']['meshRender' + 'er']['material']['clone']();
                _0x185ef4['target']['self']['destroy'](), this['showPart'](_0x4a3e30['albedoText' + 'ure']), _0x357ad8['Event']['event']('Update_Pro' + 'gress', { 'value': 0x5 });
            } else {
                if (-0x1 != _0x42b63f['indexOf']('Nail_'))
                    Laya['timer']['clear'](this, this['cancelRota' + 'te']), Laya['timer']['once'](0x64, this, this['cancelRota' + 'te']), this['canRotate'] = !0x0, _0x185ef4['target']['self']['destroy'](), this['showPart'](_0x357ad8['Level']['nailTextur' + 'e']), _0x357ad8['Event']['event']('Update_Pro' + 'gress', { 'value': -0xf }), this['roach']();
                else {
                    if ('Bug_01' == _0x42b63f)
                        Laya['timer']['clear'](this, this['cancelRota' + 'te']), Laya['timer']['once'](0x64, this, this['cancelRota' + 'te']), this['canRotate'] = !0x0, _0x185ef4['target']['self']['destroy'](), this['showPart'](_0x357ad8['Level']['bugTexture']), this['showPart'](_0x357ad8['Level']['bugTexture']), this['showPart'](_0x357ad8['Level']['bugTexture']), _0x357ad8['Event']['event']('Update_Pro' + 'gress', { 'value': -0x12c }), this['roach']();
                    else {
                        if ('Ground_Fin' + 'ish' == _0x42b63f) {
                            this['canPlay'] = !0x1, this['tween']['clearTween']();
                            let _0x3469de = this['self']['transform']['position']['clone']();
                            _0x3469de['z'] += 0.4, _0x3469de['y'] = 0x5 + this['radius'], this['tween']['toTween'](this['self'], { 'pos': _0x3469de }, 0x32, () => {
                            }, Laya['Ease']['backOut'])['then']({ 'sca': new Laya['Vector3'](0x1, 0.75, 1.25) }, 0x64)['then']({ 'sca': new Laya['Vector3'](0x1, 0x1, 0x1) }, 0x64);
                        }
                    }
                }
            }
        }
        ['triggerExi' + 't'](_0x10bd16) {
            'Ground_Fin' + 'ish' == _0x10bd16['target']['self']['name'] && (_0x357ad8['Game']['isPlay'] = !0x1, this['tween']['clearTween'](), _0x357ad8['Level']['finish'](this['self'], this['radius'] - 0x2), this['rollFX']['stop']());
        }
        ['cancelRota' + 'te']() {
            this['canRotate'] = !0x1;
        }
        ['showPart'](_0x3e8897) {
            if (this['currentInd' + 'ex'] > 0xc7)
                return;
            var _0x357671 = _0x3e8897['url']['split']('/');
            switch (_0x357671[_0x357671['length'] - 0x1]) {
            case 'Sushi_02.j' + 'pg':
                this['fxColor'] = _0x357ad8['Utils']['getRGBA']('#46572B');
                break;
            case 'Sushi_04.j' + 'pg':
                this['fxColor'] = _0x357ad8['Utils']['getRGBA']('#FE5723');
                break;
            case 'Sushi_011.' + 'jpg':
                this['fxColor'] = _0x357ad8['Utils']['getRGBA']('#6FC820');
                break;
            case 'Sushi_012.' + 'jpg':
                this['fxColor'] = _0x357ad8['Utils']['getRGBA']('#EAC811');
                break;
            case 'Sushi_03.p' + 'ng':
                this['fxColor'] = _0x357ad8['Utils']['getRGBA']('#E3E0C4');
                break;
            case 'Sushi_05.p' + 'ng':
                this['fxColor'] = _0x357ad8['Utils']['getRGBA']('#FEE211');
                break;
            case 'Sushi_06.p' + 'ng':
                this['fxColor'] = _0x357ad8['Utils']['getRGBA']('#FFE9C9');
                break;
            case 'Sushi_07.p' + 'ng':
                this['fxColor'] = _0x357ad8['Utils']['getRGBA']('#D03E36');
                break;
            case 'Sushi_08.p' + 'ng':
                this['fxColor'] = _0x357ad8['Utils']['getRGBA']('#F9481E');
                break;
            case 'Sushi_09.p' + 'ng':
                this['fxColor'] = _0x357ad8['Utils']['getRGBA']('#41715C');
                break;
            case 'Sushi_010.' + 'png':
                this['fxColor'] = _0x357ad8['Utils']['getRGBA']('#876540');
                break;
            case 'Sushi_012.' + 'png':
                this['fxColor'] = _0x357ad8['Utils']['getRGBA']('#F5F5F5');
            }
            _0x357ad8['Platform']['playVibrat' + 'eShort']();
            for (var _0x203958 = 0x0; _0x203958 < 0x1; _0x203958++) {
                let _0x36ee6e = this['rotateTarg' + 'et']['getChildAt'](_0x203958)['getChildAt'](0x0)['getChildAt'](this['currentInd' + 'ex']);
                _0x36ee6e['active'] = !0x0, _0x36ee6e['meshRender' + 'er']['material']['albedoText' + 'ure'] = _0x3e8897;
            }
            this['currentInd' + 'ex']++, this['radius'] = 1.1 + this['currentInd' + 'ex'] * this['addRadius'];
            let _0x1fa472 = this['self']['transform']['position']['clone']();
            _0x1fa472['y'] = 0x5 + this['radius'], this['self']['transform']['position'] = _0x1fa472, this['init'](0x4, this['radius'], this['radius']);
        }
    }
    class _0x11ece5 extends _0x3f6a04 {
        ['onStart']() {
            this['init'](0x1, 0.2, 0.24, 0x0, 0x0, 0x0), this['isTrigger'] = !0x0;
        }
    }
    class _0x1b5e7a {
        constructor() {
            this['matType'] = [
                [
                    'Sushi_02.j' + 'pg',
                    'Sushi_03.p' + 'ng',
                    'Sushi_04.j' + 'pg',
                    'Sushi_05.p' + 'ng',
                    'Sushi_06.p' + 'ng',
                    'Sushi_07.p' + 'ng',
                    'Sushi_08.p' + 'ng'
                ],
                [
                    'Sushi_011.' + 'jpg',
                    'Sushi_012.' + 'jpg',
                    'Sushi_012.' + 'png'
                ],
                [
                    'Sushi_09.p' + 'ng',
                    'Sushi_010.' + 'png'
                ]
            ];
        }
        ['getKnife'](_0x1d7a5a) {
            return this['cloneObj'](this['knifes']['getChildAt'](_0x1d7a5a));
        }
        ['getPlate'](_0x6ee2c7) {
            return this['cloneObj'](this['plates']['getChildAt'](_0x6ee2c7));
        }
        ['playHero'](_0xe71262) {
            if (this['heroAnim']['play'](_0xe71262), 'idle' == _0xe71262)
                var _0x37ddd3 = 0x1;
            else
                _0x37ddd3 = 'happy' == _0xe71262 ? 0x3 : 0x2;
            for (var _0x7d5275 = this['hero']['getChildBy' + 'Name']('Hero_01'), _0x54f193 = 0x1; _0x54f193 < 0x4; _0x54f193++)
                _0x7d5275['getChildAt'](_0x54f193 - 0x1)['active'] = _0x54f193 == _0x37ddd3;
        }
        ['init']() {
            var _0x51e425 = this['loadSceneR' + 'es']();
            this['setFog']('#EA9B62', !0x1), this['moveFX'] = _0x51e425['getChildBy' + 'Name']('MoveFX');
            var _0x4c0d6b = _0x51e425['getChildBy' + 'Name']('Target');
            this['sushiComp'] = _0x4c0d6b['addCompone' + 'nt'](_0xba0ed2), this['parent'] = _0x51e425['getChildBy' + 'Name']('Parent'), this['sushi'] = _0x51e425['getChildBy' + 'Name']('Sushi1_01'), this['nail'] = _0x51e425['getChildBy' + 'Name']('Nail_01'), this['bug'] = _0x51e425['getChildBy' + 'Name']('Bug_01'), this['knifes'] = _0x51e425['getChildBy' + 'Name']('Knifes'), this['plates'] = _0x51e425['getChildBy' + 'Name']('Plates'), _0x51e425['getChildBy' + 'Name']('GameScene')['getChildBy' + 'Name']('Ground_Fin' + 'ish')['addCompone' + 'nt'](_0x1c502f), this['cameraComp']['setTarget'](_0x4c0d6b), _0x357ad8['Utils']['loadTextur' + 'e2D']('res/scene/' + 'Convention' + 'al/Assets/' + 'Projects/R' + 'ollSushi/T' + 'extures/' + this['matType'][0x2][0x0], _0x1ec4dd => {
                this['nailTextur' + 'e'] = _0x1ec4dd;
            }), _0x357ad8['Utils']['loadTextur' + 'e2D']('res/scene/' + 'Convention' + 'al/Assets/' + 'Projects/R' + 'ollSushi/T' + 'extures/' + this['matType'][0x2][0x1], _0x2ebdc3 => {
                this['bugTexture'] = _0x2ebdc3;
            });
            let _0x1b0054 = _0x51e425['getChildBy' + 'Name']('Hero_01');
            this['heroAnim'] = _0x1b0054['getCompone' + 'nt'](Laya['Animator']), this['hero'] = _0x1b0054, this['initLevel'](), this['cameraComp']['changeSkin']();
        }
        ['loadSceneR' + 'es']() {
            let _0x198c36 = Laya['loader']['getRes'](_0x357ad8['CommonData']['sceneResUr' + 'l']);
            Laya['stage']['addChild'](_0x198c36), Laya['stage']['setChildIn' + 'dex'](_0x198c36, 0x1), this['mainScene'] = _0x198c36;
            var _0x6c8c90 = _0x198c36['getChildBy' + 'Name']('Camera');
            return this['mainCamera'] = _0x6c8c90['getChildBy' + 'Name']('Point')['getChildBy' + 'Name']('Main\x20Camer' + 'a'), _0x357ad8['Utils']['fixCameraF' + 'ield'](this['mainCamera']), _0x357ad8['CommonData']['mainScene'] = this['mainScene'], _0x357ad8['CommonData']['mainCamera'] = this['mainCamera'], this['cameraComp'] = _0x6c8c90['addCompone' + 'nt'](_0x6ad4ba), _0x198c36;
        }
        ['loadModelR' + 'es']() {
            return Laya['loader']['getRes'](_0x357ad8['CommonData']['modelResUr' + 'l']);
        }
        ['createShad' + 'ow'](_0x12d3de) {
            var _0x3783de = _0x12d3de['getChildBy' + 'Name']('Directiona' + 'l\x20Light');
            _0x3783de['shadowMode'] = Laya['ShadowMode']['SoftHigh'], _0x3783de['shadowDist' + 'ance'] = 0x3c, _0x3783de['shadowReso' + 'lution'] = 0x800, _0x3783de['shadowCasc' + 'adesMode'] = Laya['ShadowCasc' + 'adesMode']['TwoCascade' + 's'], _0x3783de['shadowNorm' + 'alBias'] = 0.4;
        }
        ['setFog'](_0x2f304a, _0x329b45 = !0x0) {
            let _0xf9fee5 = this['mainScene'];
            _0xf9fee5['enableFog'] = _0x329b45, _0xf9fee5['fogColor'] = _0x357ad8['Utils']['getRGB'](_0x2f304a), _0xf9fee5['fogStart'] = 0x14, _0xf9fee5['fogRange'] = 0x32;
        }
        ['initLevel']() {
            this['playHero']('idle'), this['cameraComp']['initData'](), this['parent']['destroyChi' + 'ldren'](), this['parent']['addChild'](this['sushiComp']['self']), this['sushiComp']['initData']();
            let _0x2ab6ea = _0x357ad8['Storage']['storageDat' + 'a']['level'];
            if (0x1 == _0x2ab6ea)
                var _0x2ad843 = 0x0;
            else
                _0x2ad843 = _0x2ab6ea < 0x4 ? 0x1 : 0x2;
            var _0x3d9fff = _0x2ab6ea % 0x5 == 0x0;
            if (_0x3d9fff) {
                for (var _0x104687 = 0x0; _0x104687 < 0x5; _0x104687++)
                    this['createSush' + 'i'](0x14 * _0x104687 - 0x5, _0x3d9fff);
            } else {
                for (_0x104687 = 0x0; _0x104687 < 0x5; _0x104687++)
                    Math['random']() > 0.3 || 0x0 == _0x2ad843 || 0x0 == _0x104687 ? this['createSush' + 'i'](0x14 * _0x104687 - 0x5) : _0x2ad843 > 0x0 && (Math['random']() > 0.5 ? this['createNail'](0x14 * _0x104687 - 0x5) : this['createBug'](0x14 * _0x104687 - 0x5), _0x2ad843--);
            }
        }
        ['finish'](_0x506b79, _0x77a205) {
            this['cameraComp']['finish'](_0x506b79, _0x77a205);
        }
        ['cloneObj'](_0x237f24) {
            return _0x237f24 ? _0x237f24['clone']() : null;
        }
        ['createSush' + 'i'](_0x349eb2, _0x47a24d = !0x1) {
            let _0x3355d2 = new Laya['Sprite3D']();
            if (this['parent']['addChild'](_0x3355d2), _0x3355d2['transform']['position'] = new Laya['Vector3'](0x0, 5.9, _0x349eb2), _0x47a24d)
                var _0x2563f7 = _0x357ad8['Utils']['getRandomA' + 'rray'](this['matType'][0x1], 0x1)[0x0];
            else
                _0x2563f7 = _0x357ad8['Utils']['getRandomA' + 'rray'](this['matType'][0x0], 0x1)[0x0];
            _0x2563f7 = 'res/scene/' + 'Convention' + 'al/Assets/' + 'Projects/R' + 'ollSushi/T' + 'extures/' + _0x2563f7, _0x357ad8['Utils']['loadTextur' + 'e2D'](_0x2563f7, _0x2936ee => {
                let _0x2c1886 = this['sushi']['clone']();
                _0x3355d2['addChild'](_0x2c1886), _0x2c1886['transform']['localPosit' + 'ion'] = new Laya['Vector3'](0x0, 0x0, 0x0), _0x2c1886['_children']['forEach'](_0x119863 => {
                    _0x119863['addCompone' + 'nt'](_0x11ece5), _0x119863['meshRender' + 'er']['material']['albedoText' + 'ure'] = _0x2936ee, _0x119863['meshRender' + 'er']['material']['tilingOffs' + 'etZ'] = 0x0;
                });
            });
        }
        ['createNail'](_0x3aca26) {
            let _0x2ab85e = new Laya['Sprite3D']();
            this['parent']['addChild'](_0x2ab85e), _0x2ab85e['transform']['position'] = new Laya['Vector3'](0x0, 5.9, _0x3aca26);
            let _0x1ee39e = this['nail']['clone']();
            _0x2ab85e['addChild'](_0x1ee39e), _0x1ee39e['transform']['localPosit' + 'ion'] = new Laya['Vector3'](0x0, 0x0, 0x0), _0x1ee39e['_children']['forEach'](_0x213346 => {
                _0x213346['addCompone' + 'nt'](_0x120141);
            });
        }
        ['createBug'](_0x6b196b) {
            let _0x48e32f = new Laya['Sprite3D']();
            this['parent']['addChild'](_0x48e32f), _0x48e32f['transform']['position'] = new Laya['Vector3'](0x0, 5.9, _0x6b196b);
            for (var _0x132f54 = 0x0; _0x132f54 < 0x3; _0x132f54++) {
                let _0x347c95 = this['bug']['clone']();
                _0x48e32f['addChild'](_0x347c95), _0x347c95['transform']['localPosit' + 'ion'] = new Laya['Vector3'](0x0, 0x0, 0x1 * _0x132f54 - 0x1), _0x347c95['addCompone' + 'nt'](_0xb46e7f);
            }
        }
    }
    class _0x18911b {
        constructor() {
            this['bannerId'] = '', this['videoId'] = '', this['interId'] = '', this['gridId'] = '', this['existBanne' + 'rAd'] = !0x1, this['existVideo' + 'Ad'] = !0x1, this['existInter' + 'Ad'] = !0x1, this['existGridA' + 'd'] = !0x1, this['init']();
        }
        ['init']() {
            console['error']('初始化平台失败');
        }
        ['loadBanner']() {
            console['error']('暂不支持调用接口:\x20' + 'loadBanner');
        }
        ['showBanner']() {
            console['error']('暂不支持调用接口:\x20' + 'showBanner');
        }
        ['hideBanner']() {
            console['error']('暂不支持调用接口:\x20' + 'hideBanner');
        }
        ['loadVideoA' + 'd']() {
            console['error']('暂不支持调用接口:\x20' + 'loadVideoA' + 'd');
        }
        ['showVideoA' + 'd']() {
            console['error']('暂不支持调用接口:\x20' + 'showVideoA' + 'd');
        }
    }
    !function (_0x42362f) {
        _0x42362f[_0x42362f['WeiXin'] = 0x0] = 'WeiXin', _0x42362f[_0x42362f['Qq'] = 0x1] = 'Qq', _0x42362f[_0x42362f['Vivo'] = 0x2] = 'Vivo', _0x42362f[_0x42362f['Oppo'] = 0x3] = 'Oppo', _0x42362f[_0x42362f['ZiJieTiaoD' + 'ong'] = 0x4] = 'ZiJieTiaoD' + 'ong', _0x42362f[_0x42362f['Mgc'] = 0x5] = 'Mgc', _0x42362f[_0x42362f['Swan'] = 0x6] = 'Swan', _0x42362f[_0x42362f['Android'] = 0x7] = 'Android', _0x42362f[_0x42362f['Ios'] = 0x8] = 'Ios';
    }(_0x531a07 || (_0x531a07 = {}));
    class _0x26d87a extends Laya['Scene'] {
        constructor() {
            super(), this['navList'] = this['navList'], this['navData'] = [], this['scrollDir'] = 0x1, this['preIndex'] = -0x1, this['isRandomSo' + 'rt'] = !0x1;
        }
        ['onAwake']() {
            this['height'] = Laya['stage']['height'];
        }
        ['onOpened'](_0x31f169) {
            _0x31f169 && _0x31f169['isRandomSo' + 'rt'] && (this['isRandomSo' + 'rt'] = this['isRandomSo' + 'rt']), _0x26d87a['scrollScen' + 'e'] = this, this['initList']();
        }
        ['onClosed']() {
            Laya['timer']['clearAll'](this), _0x26d87a['scrollScen' + 'e'] = null;
        }
        ['initList']() {
            this['navData'] = []['concat'](_0x14bce7['instance']['navDataArr']), this['isRandomSo' + 'rt'] && (this['navData'] = _0x3959f9['shuffleArr'](this['navData'])), this['navList']['hScrollBar' + 'Skin'] = '', this['navList']['repeatX'] = this['navData']['length'], this['navList']['repeatY'] = 0x1, this['navList']['array'] = this['navData'], this['navList']['renderHand' + 'ler'] = Laya['Handler']['create'](this, this['onListRend' + 'er'], null, !0x1), this['navList']['mouseHandl' + 'er'] = new Laya['Handler'](this, this['mouseHandl' + 'er']), this['ids'] = [], this['startIndex'] = 0x0, this['startLengt' + 'h'] = 0x4;
            for (var _0x153665 = 0x0; _0x153665 < this['startLengt' + 'h']; _0x153665++) {
                var _0x2f7f48 = this['navData'][_0x153665];
                _0x2f7f48 && this['ids']['push'](_0x2f7f48['id']);
            }
            Laya['timer']['frameLoop'](0x1, this, () => {
                if (this['startIndex'] != this['navList']['startIndex']) {
                    if (this['startIndex'] > this['navList']['startIndex']) {
                        for (var _0x59dcaf = 0x0; _0x59dcaf < this['navList']['repeatY']; _0x59dcaf++)
                            this['ids']['push'](this['navData'][this['navList']['startIndex'] + _0x59dcaf]['id']);
                    } else
                        for (_0x59dcaf = 0x0; _0x59dcaf < this['navList']['repeatY']; _0x59dcaf++) {
                            var _0x319013 = this['navData'][this['startLengt' + 'h'] - this['navList']['repeatY'] + this['navList']['startIndex'] + _0x59dcaf];
                            _0x319013 && this['ids']['push'](_0x319013['id']);
                        }
                    this['startIndex'] = this['navList']['startIndex'];
                }
            }), this['scrollLoop']();
        }
        ['mouseHandl' + 'er'](_0xf9efd3, _0x47cb8c) {
            Laya['timer']['clear'](this, this['scrollLoop']), Laya['timer']['once'](0x3e8, this, this['scrollLoop']);
        }
        ['scrollLoop']() {
            Laya['timer']['once'](0x3e8, this, () => {
                let _0xde1b8b = Math['floor'](this['navList']['startIndex']);
                0x1 == this['scrollDir'] ? ++_0xde1b8b >= this['navData']['length'] - 0x4 && (_0xde1b8b--, this['scrollDir'] = -this['scrollDir']) : --_0xde1b8b < 0x0 && (this['scrollDir'] = -this['scrollDir']), this['navList']['tweenTo'](_0xde1b8b, 0x3e8, Laya['Handler']['create'](this, this['scrollLoop']));
            });
        }
        ['onListRend' + 'er'](_0x32faab, _0x47308d) {
            if (!(_0x47308d >= this['navList']['array']['length'])) {
                var _0x50e976 = _0x32faab['getChildBy' + 'Name']('item');
                _0x50e976['getChildBy' + 'Name']('icon')['skin'] = this['navData'][_0x47308d]['icon'], _0x50e976['off'](Laya['Event']['CLICK'], this, this['navCB'], [_0x47308d]), _0x50e976['on'](Laya['Event']['CLICK'], this, this['navCB'], [_0x47308d]);
            }
        }
        ['navCB'](_0x20d982) {
            console['log']('click\x20id:', _0x20d982), _0x14bce7['instance']['NavigateAp' + 'p'](_0x20d982, () => {
            });
        }
    }
    class _0x1407b5 {
        constructor() {
            this['currentInd' + 'ex'] = 0x0;
        }
        static get ['Instance']() {
            return _0x1407b5['_instance'] || (_0x1407b5['_instance'] = new _0x1407b5()), _0x1407b5['_instance'];
        }
        get ['sysInfo']() {
            return this['_sysInfo'] || (this['_sysInfo'] = wx['getSystemI' + 'nfoSync']()), this['_sysInfo'];
        }
        ['initAd'](_0x5dcbcb, _0x361438, _0x1c822a = 0x5, _0x1c211e = 0x7530, _0x25376c = 0x1, _0x4ef576 = 0x1, _0x43d352 = []) {
            this['bannerIds'] = ['adunit-7e9' + '913f4b72e7' + 'd89'], _0x5dcbcb && _0x361438 ? (console['log']('新机制=======' + '========='), this['changeTime'] = _0x1c211e, this['refreshNum'] = _0x25376c, this['bannerNum'] = _0x4ef576, this['bannerIds'] = this['bannerIds']['concat'](_0x43d352), this['useInnovat' + 'ion'] = !0x0, this['loadBanner' + 'New'](), this['showBanner'] = this['showBanner' + 'New'], this['hideBanner'] = this['hideBanner' + 'New']) : (this['bannerCoun' + 't'] = _0x1c822a, this['currentCou' + 'nt'] = _0x1c822a, this['useInnovat' + 'ion'] = !0x1, this['loadBanner' + 'Old'](), this['showBanner'] = this['showBanner' + 'Old'], this['hideBanner'] = this['hideBanner' + 'Old']);
        }
        ['getBannerI' + 'd']() {
            var _0x39351b = Math['floor'](0x64 * Math['random']()) % this['bannerIds']['length'];
            return this['currentBan' + 'nerId'] = this['bannerIds'][_0x39351b], this['bannerIds'][_0x39351b];
        }
        ['setBannerT' + 'op'](_0x5d6acf) {
            if (!this['currentBan' + 'ner'])
                return;
            let _0x41b479 = this['sysInfo'];
            if (this['useInnovat' + 'ion'])
                var _0x971a21 = this['currentBan' + 'ner']['banner'];
            else
                _0x971a21 = this['currentBan' + 'ner'];
            let _0x5b6bf5 = _0x971a21['style']['realHeight'] + 0.1;
            _0x41b479['model']['startsWith']('iPhone\x20X') && (_0x5b6bf5 += 0x28 / Laya['Browser']['height'] * _0xdc3e17['height']), _0x971a21['style']['top'] = _0x41b479['screenHeig' + 'ht'] - _0x5b6bf5 + _0x5d6acf;
        }
        ['loadBanner' + 'Old']() {
            if (!Laya['Browser']['onWeiXin'])
                return;
            if (this['isLoading'])
                return;
            this['isLoading'] = !0x0, this['currentBan' + 'ner'] && (this['currentBan' + 'ner']['destroy'](), this['currentBan' + 'ner'] = null);
            let _0x4f0e0f = this['sysInfo'], _0x45e879 = this['getBannerI' + 'd'](), _0x4a834e = wx['createBann' + 'erAd']({
                    'adUnitId': _0x45e879,
                    'style': {
                        'width': 0.8 * _0x4f0e0f['screenWidt' + 'h'],
                        'top': 0.8 * _0x4f0e0f['screenHeig' + 'ht'],
                        'left': 0.2 * _0x4f0e0f['screenWidt' + 'h'] / 0x2
                    }
                });
            _0x4a834e['onLoad'](() => {
                console['log']('create\x20ban' + 'ner\x20succes' + 's'), _0x1407b5['Instance']['currentBan' + 'ner'] = _0x4a834e, _0x1407b5['Instance']['isLoading'] = !0x1, _0x1407b5['Instance']['isLoadBann' + 'erError'] = !0x1, _0x1407b5['Instance']['isloadAndS' + 'how'] && (_0x1407b5['Instance']['isloadAndS' + 'how'] = !0x1, _0x1407b5['Instance']['showBanner' + 'Old']());
            }), _0x4a834e['onError'](_0x13ee58 => {
                console['log']('create\x20ban' + 'ner\x20error', _0x13ee58), _0x1407b5['Instance']['isLoading'] = !0x1, _0x1407b5['Instance']['isLoadBann' + 'erError'] = !0x0, _0x357ad8['Event']['event']('Hide_Clear' + '_View');
            }), _0x4a834e['onResize'](_0x2f8d80 => {
                let _0x5d3f07 = _0x4a834e['style']['realHeight'] + 0.1;
                _0x4f0e0f['model']['startsWith']('iPhone\x20X') && (_0x5d3f07 += 0x28 / Laya['Browser']['height'] * _0xdc3e17['height']), _0x4a834e['style']['top'] = _0x4f0e0f['screenHeig' + 'ht'] - _0x5d3f07;
            });
        }
        ['showBanner' + 'Old']() {
            if (!this['currentBan' + 'ner'])
                return this['isloadAndS' + 'how'] = !0x0, void this['loadBanner' + 'Old']();
            if (Laya['Browser']['onWeiXin']) {
                if (!this['currentBan' + 'ner'])
                    return;
                if (this['isShowBann' + 'er'])
                    return;
                this['isShowBann' + 'er'] = !0x0, this['currentBan' + 'ner']['show'](), console['log']('show\x20banne' + 'r'), this['setBannerT' + 'op'](0x0);
            }
        }
        ['hideBanner' + 'Old']() {
            if (Laya['Browser']['onWeiXin']) {
                if (this['isloadAndS' + 'how'] = !0x1, 0x0 == this['isShowBann' + 'er'])
                    return;
                if (this['isShowBann' + 'er'] = !0x1, !this['currentBan' + 'ner'])
                    return;
                this['currentBan' + 'ner']['hide'](), console['log']('hide\x20banne' + 'r', this['isShowBann' + 'er'], this['currentBan' + 'ner']), this['countBanne' + 'r']();
            }
        }
        ['countBanne' + 'r']() {
            this['currentBan' + 'ner'] && (0x0 == this['currentCou' + 'nt'] && (this['currentCou' + 'nt'] = this['bannerCoun' + 't'], this['loadBanner' + 'Old']()), this['currentCou' + 'nt']--, console['log']('banner剩余展示' + '次数', this['bannerCoun' + 't']));
        }
        ['loadBanner' + 'New']() {
            if (!Laya['Browser']['onWeiXin'])
                return;
            console['log']('create\x20ban' + 'ner'), this['banners'] = [];
            let _0xb0ae0d = this['sysInfo'], _0x1d8eaf = this['bannerIds']['length'] * this['bannerNum'], _0x516e9e = _0x1d8eaf;
            for (let _0x2f00ea = 0x0; _0x2f00ea < this['bannerIds']['length']; _0x2f00ea++) {
                let _0x21ce8b = this['bannerIds'][_0x2f00ea];
                for (let _0x10a6eb = 0x0; _0x10a6eb < this['bannerNum']; _0x10a6eb++) {
                    let _0x129f7b = wx['createBann' + 'erAd']({
                        'adUnitId': _0x21ce8b,
                        'style': {
                            'width': 0.8 * _0xb0ae0d['screenWidt' + 'h'],
                            'top': 0.8 * _0xb0ae0d['screenHeig' + 'ht'],
                            'left': 0.2 * _0xb0ae0d['screenWidt' + 'h'] / 0x2
                        }
                    });
                    _0x129f7b['onLoad'](() => {
                        let _0x5c6c1b = {
                            'banner': _0x129f7b,
                            'showCount': 0x0
                        };
                        _0x1407b5['Instance']['banners']['push'](_0x5c6c1b), _0x1407b5['Instance']['isLoadBann' + 'erError'] = !0x1, 0x0 == --_0x1d8eaf && (_0x1407b5['Instance']['isloadAndS' + 'how'] && _0x1407b5['Instance']['showBanner'](), console['log']('front_bann' + 'er_ids====' + '=====', this['banners']));
                    }), _0x129f7b['onError'](_0x369f55 => {
                        console['log']('create\x20ban' + 'ner\x20error', _0x369f55), 0x0 == --_0x516e9e && (_0x1407b5['Instance']['isLoadBann' + 'erError'] = !0x0, _0x357ad8['Event']['event']('Hide_Clear' + '_View'));
                    }), _0x129f7b['onResize'](_0x53dfbf => {
                        let _0x5f1e2a = _0x129f7b['style']['realHeight'] + 0.1;
                        _0xb0ae0d['model']['startsWith']('iPhone\x20X') && (_0x5f1e2a += 0x28 / Laya['Browser']['height'] * _0xdc3e17['height']), _0x129f7b['style']['top'] = _0xb0ae0d['screenHeig' + 'ht'] - _0x5f1e2a;
                    });
                }
            }
        }
        ['showBanner' + 'New']() {
            if (Laya['Browser']['onWeiXin']) {
                if (this['hideBanner' + 'New'](), !this['banners'] || 0x0 == this['banners']['length'])
                    return this['loadBanner' + 'New'](), void (this['isloadAndS' + 'how'] = !0x0);
                this['currentInd' + 'ex'] >= this['banners']['length'] && (this['currentInd' + 'ex'] = 0x0);
                let _0x35ed37 = this['banners'][this['currentInd' + 'ex']];
                if (Laya['timer']['once'](this['changeTime'], this, this['showBanner' + 'New']), !_0x35ed37 || !_0x35ed37['banner'])
                    return;
                this['currentInd' + 'ex']++, _0x35ed37['banner']['show'](), _0x35ed37['showCount']++, this['currentBan' + 'ner'] = _0x35ed37, console['log']('show\x20banne' + 'r', this['currentInd' + 'ex'] - 0x1), this['setBannerT' + 'op'](0x0);
            }
        }
        ['hideBanner' + 'New']() {
            if (this['isloadAndS' + 'how'] = !0x1, Laya['Browser']['onWeiXin']) {
                let _0x163db4 = this['currentBan' + 'ner'];
                if (!_0x163db4)
                    return;
                _0x163db4['banner']['hide'](), _0x163db4['showCount'] >= this['refreshNum'] && (_0x163db4['banner']['destroy'](), this['banners']['splice'](this['banners']['indexOf'](_0x163db4), 0x1), console['log']('destroy\x20ba' + 'nner')), console['log']('hide\x20banne' + 'r', this['currentInd' + 'ex'] - 0x1), this['currentBan' + 'ner'] = null, Laya['timer']['clear'](this, this['showBanner' + 'New']);
            }
        }
    }
    class _0x42afc1 extends _0x18911b {
        constructor() {
            super(...arguments), this['bannerTopF' + 'actor'] = 0x0, this['isShowBann' + 'er'] = !0x1;
        }
        ['init']() {
            if (Laya['Browser']['onWeiXin']) {
                this['getSystemI' + 'nfoSync'](), this['videoId'] = 'adunit-691' + '6dca5c35a3' + '69b', this['interId'] = 'adunit-966' + '1fecbbdc97' + '600', this['gridId'] = 'adunit-efd' + 'ab00ff44b7' + 'cf0', this['initAd']();
                var _0x4ab707 = wx['getLaunchO' + 'ptionsSync']()['query'];
                console['log']('init\x20query' + ':', _0x4ab707);
            }
        }
        ['initAd']() {
            Laya['Browser']['onWeiXin'] && (this['loadVideoA' + 'd'](), this['createGame' + 'CustomAd'](), this['createSing' + 'leCustomAd']());
        }
        ['getBannerI' + 'd']() {
            var _0x3e41b = Math['floor'](0x64 * Math['random']()) % this['bannerIds']['length'];
            return this['currentBan' + 'nerId'] = this['bannerIds'][_0x3e41b], this['bannerIds'][_0x3e41b];
        }
        ['setBannerT' + 'op'](_0x1cfb83) {
        }
        ['countBanne' + 'r']() {
        }
        ['loadVideoA' + 'd']() {
        }
        ['showVideoA' + 'd'](_0x41ecba = !0x1) {
        }
        ['createInte' + 'rAd'](_0x24ae9d) {
            Laya['Browser']['onWeiXin'] && (this['interAd'] = wx['createInte' + 'rstitialAd']({ 'adUnitId': this['interId'] }), this['interAd']['onLoad'](() => {
                console['log']('插屏广告加载成功'), _0x24ae9d && this['showInterA' + 'd']();
            }));
        }
        ['showInterA' + 'd']() {
            this['interAd'] && this['interAd']['show']();
        }
        ['createHome' + 'CustomAd'](_0x48269d) {
            if (Laya['Browser']['onWeiXin']) {
                if (this['homeGridAd' + 's'])
                    _0x48269d && this['showHomeGr' + 'idAd']();
                else {
                    let _0x14eff4 = 0x2 * _0x14bce7['instance']['dataConfig']['front_gezi' + '_number'];
                    this['homeGridAd' + 's'] = [];
                    for (let _0x256a56 = 0x0; _0x256a56 < _0x14eff4; _0x256a56++) {
                        let _0x54e86c = this['getGridPos'](_0x256a56, 0x78 * (Math['floor'](_0x256a56 / 0x2) + 0x1)), _0x1667f4 = wx['createCust' + 'omAd']({
                                'adUnitId': this['gridId'],
                                'adIntervals': 0x1e,
                                'style': _0x54e86c
                            });
                        this['homeGridAd' + 's']['push'](_0x1667f4), _0x1667f4['onLoad'](() => {
                            _0x48269d && _0x1667f4['show']();
                        });
                    }
                }
            }
        }
        ['createGame' + 'CustomAd']() {
            if (Laya['Browser']['onWeiXin']) {
                this['gameGridAd'] = [];
                for (let _0x92e3a4 = 0x0; _0x92e3a4 < 0x2; _0x92e3a4++) {
                    let _0x1ef1b1 = this['getGridPos'](_0x92e3a4, 0x78 * (Math['floor'](_0x92e3a4 / 0x2) + 0x1)), _0x40fdfe = wx['createCust' + 'omAd']({
                            'adUnitId': this['gridId'],
                            'adIntervals': 0x1e,
                            'style': _0x1ef1b1
                        });
                    this['gameGridAd']['push'](_0x40fdfe), _0x40fdfe['onLoad'](() => {
                    });
                }
            }
        }
        ['createSing' + 'leCustomAd']() {
            if (Laya['Browser']['onWeiXin']) {
                let _0x271383 = this['getGridPos'](0x1), _0x32fc56 = wx['createCust' + 'omAd']({
                        'adUnitId': this['gridId'],
                        'adIntervals': 0x1e,
                        'style': _0x271383
                    });
                this['singleGrid' + 'Ad'] = _0x32fc56, _0x32fc56['onLoad'](() => {
                });
            }
        }
        ['showHomeGr' + 'idAd']() {
        }
        ['hideHomeGr' + 'idAd']() {
        }
        ['showGameGr' + 'idAd']() {
        }
        ['hideGameGr' + 'idAd']() {
        }
        ['showSingle' + 'GridAd']() {
        }
        ['hideSingle' + 'GridAd']() {
        }
        ['getGridPos'](_0x1e9a5e, _0x579d49 = 0x78) {
            let _0x938e4c = {
                'width': 0x14,
                'height': 0x14
            };
            return _0x1e9a5e % 0x2 == 0x0 ? (_0x938e4c['left'] = 0x14, _0x938e4c['top'] = _0x579d49) : (_0x938e4c['left'] = this['sysInfo']['windowWidt' + 'h'] - 0x5a, _0x938e4c['top'] = _0x579d49), _0x938e4c;
        }
        ['loadBanner'](_0x3c3aad) {
            if (Laya['Browser']['onWeiXin'] && (_0x3c3aad && (this['isloadAndS' + 'how'] = _0x3c3aad), !this['isLoading'])) {
                this['isLoading'] = !0x0, this['existBanne' + 'rAd'] = !0x1;
                var _0x10220d = this, _0x50aecf = this['sysInfo'], _0x34ea41 = this['getBannerI' + 'd'](), _0x52248d = wx['createBann' + 'erAd']({
                        'adUnitId': _0x34ea41,
                        'style': {
                            'top': 0.8 * _0x50aecf['screenHeig' + 'ht'],
                            'width': 0.8 * _0x50aecf['screenWidt' + 'h'],
                            'left': 0.2 * _0x50aecf['screenWidt' + 'h'] / 0x2
                        }
                    });
                _0x52248d['onLoad'](() => {
                    var _0x388640;
                    (console['log']('Banner\x20加载成' + '功'), _0x10220d['existBanne' + 'rAd'] = !0x0, _0x10220d['bannerItem'] = _0x52248d, _0x10220d['isLoading'] = !0x1, _0x10220d['bannerLoad' + 'Error'] = !0x1, _0x10220d['isloadAndS' + 'how']) ? (_0x10220d['isloadAndS' + 'how'] = !0x1, (_0x388640 = _0x357ad8['UI']['getTopScen' + 'e']) && _0x388640['canShowAd'] && !_0x388640['isWuchu'] && 0x0 == _0x14bce7['instance']['openSceneC' + 'ount'] && _0x10220d['showBanner']()) : _0x10220d['isShowBann' + 'er'] || (_0x388640 = _0x357ad8['UI']['getTopScen' + 'e']) && _0x388640['canShowAd'] && !_0x388640['isWuchu'] && 0x0 == _0x14bce7['instance']['openSceneC' + 'ount'] && _0x10220d['showBanner']();
                }), _0x52248d['onError'](_0x552964 => {
                    _0x10220d['existBanne' + 'rAd'] = !0x1, console['error']('Banner\x20加载错' + '误', _0x552964), _0x10220d['isLoading'] = !0x1, _0x10220d['bannerLoad' + 'Error'] = !0x0, _0x357ad8['Event']['event']('Hide_Clear' + '_View');
                }), _0x52248d['onResize'](_0x4503ea => {
                    if (!_0x52248d)
                        return;
                    let _0x5ef7dc = _0x52248d['style']['realHeight'] + 0.1;
                    _0x50aecf['model']['startsWith']('iPhone\x20X') && (_0x5ef7dc += 0x28 / Laya['Browser']['height'] * _0xdc3e17['height']), _0x52248d['style']['top'] = _0x50aecf['screenHeig' + 'ht'] - _0x5ef7dc + _0x10220d['bannerTopF' + 'actor'];
                });
            }
        }
        ['showScroll' + 'UI']() {
            null == _0x26d87a['scrollScen' + 'e'] ? _0x14bce7['instance']['openScene'](_0x802519['SCENE_SCRO' + 'LLUI']) : Laya['stage']['setChildIn' + 'dex'](_0x26d87a['scrollScen' + 'e'], Laya['stage']['numChildre' + 'n'] - 0x1);
        }
        ['hideScroll' + 'UI']() {
            null != _0x26d87a['scrollScen' + 'e'] && (_0x14bce7['instance']['closeScene'](_0x802519['SCENE_SCRO' + 'LLUI']), _0x26d87a['scrollScen' + 'e'] = null);
        }
        ['showBanner'](_0x54f834, _0x2ed11a) {
        }
        ['hideBanner']() {
        }
        set ['bannerLoad' + 'Error'](_0x8ccbc) {
        }
        get ['bannerLoad' + 'Error']() {
            return _0x1407b5['Instance']['isLoadBann' + 'erError'];
        }
        ['getSystemI' + 'nfoSync']() {
            if (Laya['Browser']['onWeiXin']) {
                this['sysInfo'] = wx['getSystemI' + 'nfoSync']();
                var _0x10ac44 = this['sysInfo']['model']['split']('\x20')[0x1];
                Number(_0x10ac44) < 0x8 && _0x357ad8['Storage']['setValue'](_0x357ad8['Storage']['storageNam' + 'e']['isSound'], !0x1);
            }
        }
        ['regisiterW' + 'xCallback']() {
            Laya['Browser']['onWeiXin'] && (wx['offShow'](this['onShowEven' + 't']), wx['onShow'](this['onShowEven' + 't']), wx['offHide'](this['onHideEven' + 't']), wx['onHide'](this['onHideEven' + 't']));
        }
        ['onShowEven' + 't'](_0x2ce73c) {
            _0x357ad8['Storage']['storageDat' + 'a']['isSound'] && _0x357ad8['Sound']['playMusic'](_0x3c0ec2['BGM']), _0x357ad8['UI']['getTopScen' + 'e'] && _0x357ad8['UI']['getTopScen' + 'e']['url'] == _0xedc39a['Game3D'] && 0x0 == _0x14bce7['instance']['openSceneC' + 'ount'] && (_0x357ad8['Game']['isPlay'] = !0x0), _0x357ad8['Event']['event'](_0x662778['PLATFORM_W' + 'AKE_EVENT']);
        }
        ['onHideEven' + 't']() {
            console['log']('onHide'), _0x357ad8['Storage']['setValue'](_0x357ad8['Storage']['storageNam' + 'e']['offlineTim' + 'e'], new Date()['getTime']()), _0x357ad8['Event']['event'](_0x662778['PLATFORM_S' + 'LEEP_EVENT']), _0x357ad8['Game']['isPlay'] && (_0x357ad8['Game']['isPlay'] = !0x1);
        }
        ['showShareM' + 'enuWithTic' + 'ket'](_0x41c5f2) {
            wx['showShareM' + 'enu']({
                'withShareTicket': _0x41c5f2,
                'success': function () {
                },
                'fail': function () {
                },
                'complete': function () {
                }
            });
        }
        ['regisiterW' + 'XShareCall' + 'back']() {
            if (Laya['Browser']['onWeiXin']) {
                var _0x34151a = _0x14bce7['instance']['shareConte' + 'xt'];
                wx['onShareApp' + 'Message'](function () {
                    return console['log']('用户点击了转发按钮'), {
                        'title': _0x34151a['title'],
                        'imageUrl': _0x34151a['image'],
                        'query': 'share_id=1',
                        'success': function (_0x33fd46) {
                        },
                        'fail': function () {
                        }
                    };
                });
            }
        }
        ['showToast'](_0x44d9a5, _0x1152d9) {
            Laya['Browser']['onWeiXin'] && wx['showToast']({
                'title': _0x44d9a5,
                'duration': _0x1152d9,
                'icon': 'none',
                'success': function () {
                },
                'fail': function () {
                },
                'complete': function () {
                },
                'image': '',
                'mask': !0x1
            });
        }
        ['shareGame'](_0xd031e5) {
            if (Laya['Browser']['onWeiXin']) {
                console['log']('分享游戏');
                var _0x327349 = _0x14bce7['instance']['shareConte' + 'xt'];
                this['JJShareApp' + 'Message'](_0x327349, _0xd031e5);
            }
        }
        ['playVibrat' + 'eShort']() {
            Laya['Browser']['onWeiXin'] && _0x357ad8['Storage']['storageDat' + 'a']['isVibrate'] && wx['vibrateSho' + 'rt']({
                'success': function () {
                },
                'fail': function () {
                },
                'complete': function () {
                }
            });
        }
        ['playVibrat' + 'eLong']() {
            Laya['Browser']['onWeiXin'] && _0x357ad8['Storage']['storageDat' + 'a']['isVibrate'] && wx['vibrateLon' + 'g']({
                'success': function () {
                },
                'fail': function () {
                },
                'complete': function () {
                }
            });
        }
        ['showModal'](_0x4f6f4f) {
            if (Laya['Browser']['onWeiXin']) {
                var _0x471e68 = this;
                wx['showModal']({
                    'title': '提示',
                    'content': _0x4f6f4f,
                    'showCancel': !0x0,
                    'confirmText': '重新分享',
                    'success'(_0x34086e) {
                        _0x34086e['confirm'] ? (console['log']('点击确定'), _0x471e68['shareGame'](_0x471e68['shareCallB' + 'ack'])) : _0x34086e['cancel'] && console['log']('点击取消');
                    }
                });
            }
        }
        ['aldSendEve' + 'nt'](_0x3395dc, _0x203e04) {
            console['log']('埋点：', _0x3395dc), Laya['Browser']['onWeiXin'] && wx['JJSendEven' + 't'](() => ({
                'name': _0x3395dc,
                'param': _0x203e04
            }));
        }
        ['aldSendOpe' + 'nid'](_0x2acabd) {
        }
        ['JJBannerAd' + 'ShowCount']() {
            var _0xdc84ea = this;
            Laya['Browser']['onWeiXin'] && wx['JJBannerAd' + 'ShowCount'](() => ({
                'adUnitId': _0xdc84ea['currentBan' + 'nerId'],
                'adUnitName': 'banner',
                'pageName': 'all'
            }));
        }
        ['JJSendVide' + 'oAdCount'](_0x3eb290, _0x49e6ce) {
            var _0x3a3b24 = this;
            Laya['Browser']['onWeiXin'] && wx['JJSendVide' + 'oAdCount'](() => ({
                'adUnitId': _0x3a3b24['videoId'],
                'adUnitName': _0x49e6ce,
                'isEnded': _0x3eb290
            }));
        }
        ['JJShareApp' + 'Message'](_0x174724, _0x5a0722) {
            wx['JJShareApp' + 'Message'](() => ({
                'title': _0x174724['title'],
                'imageUrl': _0x174724['imageUrl'],
                'id': _0x174724['id']
            }))['then'](_0x35bf78 => {
                _0x5a0722(_0x35bf78);
            });
        }
        ['JJOnShareA' + 'ppMessage'](_0x50310a) {
            wx['JJOnShareA' + 'ppMessage'](() => ({
                'title': _0x50310a['title'],
                'imageUrl': _0x50310a['imageUrl'],
                'id': _0x50310a['id']
            }));
        }
    }
    class _0x3cbc7b extends _0x42afc1 {
    }
    class _0x3295e4 {
        constructor() {
            this['init']();
        }
        ['init']() {
            this['costStreng' + 'th'] = 0x1, this['maxStrengt' + 'h'] = 0x14, this['recoverTim' + 'e'] = 0x5, this['recoverVal' + 'ue_Share'] = 0x5, this['recoverVal' + 'ue_Video'] = 0x5, this['currentStr' + 'ength'] = _0x357ad8['Storage']['storageDat' + 'a']['strength'];
            let _0x2235f5 = (new Date()['getTime']() - _0x357ad8['Storage']['storageDat' + 'a']['offlineTim' + 'e']) / 0xea60, _0x45812b = Math['floor'](_0x2235f5 / this['recoverTim' + 'e']);
            _0x45812b >= 0x14 - this['currentStr' + 'ength'] && (_0x45812b = 0x14 - this['currentStr' + 'ength']), this['addStrengt' + 'h'](0x3, _0x45812b), this['currentStr' + 'ength'] < this['maxStrengt' + 'h'] && (this['countTime'] = 0x0, Laya['timer']['loop'](0x3e8, this, this['updateStre' + 'ngthValue']));
        }
        ['addStrengt' + 'h'](_0x34f75b, _0x4e8e9a) {
            switch (_0x34f75b) {
            case 0x0:
                this['currentStr' + 'ength'] += 0x1;
                break;
            case 0x1:
                this['currentStr' + 'ength'] += this['recoverVal' + 'ue_Video'];
                break;
            case 0x2:
                this['currentStr' + 'ength'] += this['recoverVal' + 'ue_Share'];
                break;
            case 0x3:
                this['currentStr' + 'ength'] += _0x4e8e9a;
            }
            this['currentStr' + 'ength'] >= this['maxStrengt' + 'h'] && null == _0x4e8e9a && (this['currentStr' + 'ength'] = this['maxStrengt' + 'h']), this['updateData']();
        }
        ['subStrengt' + 'h'](_0x24afb2) {
            if (this['currentStr' + 'ength'] < this['costStreng' + 'th']) {
                var _0x1ec86d = !0x1;
                this['isGetStren' + 'gthByVideo'] = !this['isGetStren' + 'gthByVideo'];
            } else
                _0x1ec86d = !0x0, this['currentStr' + 'ength'] == this['maxStrengt' + 'h'] && (Laya['timer']['clear'](this, this['updateStre' + 'ngthValue']), this['countTime'] = 0x0, Laya['timer']['loop'](0x3e8, this, this['updateStre' + 'ngthValue'])), this['currentStr' + 'ength'] -= this['costStreng' + 'th'];
            this['updateData'](), _0x24afb2(_0x1ec86d);
        }
        get ['getStrengt' + 'ByMaxStren' + 'gth']() {
            return this['currentStr' + 'ength'] + '/' + this['maxStrengt' + 'h'];
        }
        ['updateStre' + 'ngthValue']() {
            this['countTime']++;
            let _0x2275a5 = 0x3c * this['recoverTim' + 'e'] - this['countTime'];
            this['time'] = _0x357ad8['Utils']['getTimeLef' + 't2BySecond'](_0x2275a5), 0x0 == _0x2275a5 && (this['addStrengt' + 'h'](0x0), this['currentStr' + 'ength'] < this['maxStrengt' + 'h'] ? this['countTime'] = 0x0 : Laya['timer']['clear'](this, this['updateStre' + 'ngthValue']));
        }
        ['updateData']() {
            _0x357ad8['Storage']['setValue'](_0x357ad8['Storage']['storageNam' + 'e']['strength'], this['currentStr' + 'ength']);
        }
    }
    class _0x3029d6 {
        constructor() {
            for (var _0x1a837a in (this['_pathRoot'] = 'res/sound/', this['_soundCtx'] = {}, this['_soundFile'] = [], _0x3c0ec2)) {
                let _0x42306f = _0x3c0ec2[_0x1a837a];
                this['_soundFile']['push'](_0x42306f);
            }
            console['log'](this['_soundFile']), this['init'](), Laya['SoundManag' + 'er']['autoStopMu' + 'sic'] = !0x1;
        }
        ['init']() {
            let _0x10eef7 = this['_pathRoot'], _0x306cb4 = '', _0x12e16d = this['_soundFile'], _0xdab765 = this['_soundFile']['length'];
            for (let _0x36adb6 = 0x0; _0x36adb6 < _0xdab765; ++_0x36adb6) {
                _0x306cb4 = _0x12e16d[_0x36adb6];
                let _0x4d55f5 = new Laya['SoundChann' + 'el']();
                _0x4d55f5['url'] = _0x10eef7 + _0x306cb4 + '.mp3', -0x1 != _0x306cb4['indexOf']('Bgm') && (_0x4d55f5['loops'] = 0x0), Laya['SoundManag' + 'er']['addChannel'](_0x4d55f5), this['_soundCtx'][_0x306cb4] = !0x0;
            }
            Laya['loader']['load'](['res/sound/' + 'Bgm.mp3']);
        }
        ['play'](_0x228db0) {
            this['_soundCtx'][_0x228db0] && _0x357ad8['Storage']['storageDat' + 'a']['isSound'] && Laya['SoundManag' + 'er']['playSound'](this['_pathRoot'] + _0x228db0 + '.mp3');
        }
        ['stop'](_0x369e23) {
            this['_soundCtx'][_0x369e23] && Laya['SoundManag' + 'er']['stopSound'](this['_pathRoot'] + _0x369e23 + '.mp3');
        }
        ['playMusic'](_0x1d1892) {
            Laya['SoundManag' + 'er']['stopMusic'](), Laya['SoundManag' + 'er']['playMusic'](this['_pathRoot'] + _0x1d1892 + '.mp3', 0x0);
        }
        ['stopMusic']() {
            Laya['SoundManag' + 'er']['stopMusic']();
        }
    }
    class _0x19fec6 {
    }
    class _0x48c783 {
        constructor() {
            this['offset'] = 0x0, this['loadModels']();
        }
        static get ['Instance']() {
            return _0x48c783['_instance'] || (_0x48c783['_instance'] = new _0x48c783()), _0x48c783['_instance'];
        }
        ['loadModels']() {
            Laya['loader']['load']('jsonFile/M' + 'odelsConfi' + 'g.json', Laya['Handler']['create'](this, () => {
                this['modelsConf' + 'ig'] = Laya['Loader']['getRes']('jsonFile/M' + 'odelsConfi' + 'g.json');
            }), null, Laya['Loader']['JSON']);
        }
        ['randomCrea' + 'teModels'](_0x1ea772) {
            this['offset'] = _0x1ea772;
            let _0x3a83c7 = Math['floor'](0x64 * Math['random']() % this['modelsConf' + 'ig']['length']);
            console['log']('关卡模组：', _0x3a83c7), this['modelsConf' + 'ig'][_0x3a83c7]['models']['forEach'](_0x39c099 => {
                this['createMode' + 'l'](_0x39c099);
            });
        }
        ['createMode' + 'l'](_0x4b2629) {
            var _0x2285cc = _0x4b2629['name'], _0x4775d7 = this['cloneObj'](this['model']['getChildBy' + 'Name'](_0x2285cc));
            this['parent']['addChild'](_0x4775d7);
            let _0x24bcc2 = _0x4b2629['position'];
            _0x4775d7['transform']['position'] = new Laya['Vector3'](Number(_0x24bcc2['x']), Number(_0x24bcc2['y']), Number(_0x24bcc2['z']) + this['offset']);
            let _0x23b5b4 = _0x4b2629['rotation'];
            _0x23b5b4 && (_0x4775d7['transform']['rotationEu' + 'ler'] = new Laya['Vector3'](Number(_0x23b5b4['x']), Number(_0x23b5b4['y']), Number(_0x23b5b4['z'])));
        }
        ['cloneObj'](_0xe73935) {
            return _0xe73935['clone']();
        }
    }
    class _0x357ad8 {
        static get ['ModelCreat' + 'or']() {
            return _0x48c783['Instance'];
        }
        static ['init']() {
            for (var _0x23295d in _0x662778)
                _0x662778[_0x23295d] = _0x23295d;
            _0x357ad8['UI'], _0x357ad8['Storage'], _0x357ad8['Prefab'], _0x357ad8['CommonData'], _0x357ad8['Utils'], _0x357ad8['Event'], _0x357ad8['Game'], _0x357ad8['Tween'], _0x357ad8['Level'], _0x357ad8['Platform'], _0x357ad8['Streng'], _0x357ad8['Sound'], _0x357ad8['ModelCreat' + 'or'];
        }
        static get ['UI']() {
            return this['uiManager'] || (this['uiManager'] = new _0x1a7656()), this['uiManager'];
        }
        static get ['Storage']() {
            return this['storageMan' + 'ager'] || (this['storageMan' + 'ager'] = new _0x53776d()), this['storageMan' + 'ager'];
        }
        static get ['Utils']() {
            return this['utils'] || (this['utils'] = new _0x5a6c07()), this['utils'];
        }
        static get ['CommonData']() {
            return this['commonData'] || (this['commonData'] = new _0x1672ff()), this['commonData'];
        }
        static get ['Event']() {
            return this['event'] || (this['event'] = new Laya['EventDispa' + 'tcher']()), this['event'];
        }
        static get ['Prefab']() {
            return this['prefabMana' + 'ger'] || (this['prefabMana' + 'ger'] = new _0x1bbc46()), this['prefabMana' + 'ger'];
        }
        static get ['Game']() {
            return this['gameManage' + 'r'] || (this['gameManage' + 'r'] = new _0x5e7331()), this['gameManage' + 'r'];
        }
        static get ['Tween']() {
            return this['tweenManag' + 'er'] || (this['tweenManag' + 'er'] = new _0x14571b()), this['tweenManag' + 'er'];
        }
        static get ['Level']() {
            return this['levelManag' + 'er'] || (this['levelManag' + 'er'] = new _0x1b5e7a()), this['levelManag' + 'er'];
        }
        static get ['Platform']() {
            return this['platformMa' + 'nager'] || (this['platformMa' + 'nager'] = new _0x3cbc7b()), this['platformMa' + 'nager'];
        }
        static get ['Streng']() {
            return this['strengthMa' + 'nager'] || (this['strengthMa' + 'nager'] = new _0x3295e4()), this['strengthMa' + 'nager'];
        }
        static get ['Sound']() {
            return this['soundManag' + 'er'] || (this['soundManag' + 'er'] = new _0x3029d6()), this['soundManag' + 'er'];
        }
        static get ['Net']() {
            return this['netManager'] || (this['netManager'] = new _0x19fec6()), this['netManager'];
        }
    }
    !function (_0x552e46) {
        _0x552e46['SCENE_FRIE' + 'NDGAME'] = 'JJExport/F' + 'riendGameU' + 'I.scene', _0x552e46['SCENE_SCRO' + 'LLUI'] = 'JJExport/S' + 'crollUI.sc' + 'ene', _0x552e46['SCENE_RECO' + 'MMENDUI'] = 'JJExport/R' + 'ecommendUI' + '.scene', _0x552e46['SCENE_FULL' + 'GAMEUI'] = 'JJExport/F' + 'ullGameUI.' + 'scene', _0x552e46['SCENE_FINI' + 'SHGAMEUI'] = 'JJExport/F' + 'inishGameU' + 'I.scene', _0x552e46['SCENE_DRAW' + 'UI'] = 'JJExport/D' + 'rawUI.scen' + 'e', _0x552e46['SCENE_PROG' + 'RAMUI'] = 'JJExport/P' + 'rogramUI.s' + 'cene', _0x552e46['SCENE_WECH' + 'ATUI'] = 'JJExport/W' + 'eChatUI.sc' + 'ene';
    }(_0x802519 || (_0x802519 = {}));
    class _0x14bce7 {
        constructor() {
            this['dataConfig'] = {
                'is_allow_area': !0x1,
                'is_allow_export': !0x1,
                'front_wuchu_scene': '1001|1002',
                'front_pass_gate': 0x1,
                'front_wuchu_finish_gate': 0x5,
                'front_time_tag_switch': !0x1,
                'front_share_number': 0x1,
                'front_all_export_switch': !0x1,
                'front_homepage_ad_switch': !0x1,
                'front_start_remen_chance': 0x64,
                'front_start_wanghong_chance': 0x64,
                'front_duilian_export_switch': !0x1,
                'front_duilian_icon_number': 0x4,
                'front_jingxi_export_switch': !0x1,
                'front_inside_remen_chance': 0x64,
                'front_inside_wanghong_chance': 0x64,
                'front_jiesuan_tiaozhuan_chance': 0x64,
                'front_jiesuan_next_export_chance': 0x0,
                'front_freetips_switch': !0x1,
                'front_randompaly_start_level': 0x1,
                'front_game_number_official': 0x1,
                'front_first_box_gate': 0x1,
                'front_second_box_gate': 0x1,
                'front_box_chance': 0x64,
                'front_progress_bar_return': 0.006,
                'front_progress_bar_reduce': 0x6,
                'front_box_clicks': [
                    0x2,
                    0x8
                ],
                'front_is_box_force': !0x1,
                'front_banner_show_time': 0x3e8,
                'front_banner_hide_time': 0x3e8,
                'front_wuchu_wanghong_gate': 0x1,
                'front_wuchu_remen_gate': 0x1,
                'front_banner_appear': 0x3e8,
                'front_button_up': 0x3e8,
                'front_banner_ids': [],
                'front_create_banner_num': 0x2,
                'front_banner_change_time': 0xbb8,
                'front_banner_refresh_num': 0x2,
                'front_banner_number': 0x8,
                'front_banner_switch': !0x1,
                'front_homepage_video_switch': !0x1,
                'front_start_game_switch': !0x1,
                'front_start_video_number': 0x1,
                'front_top_gezi_gate': 0x1,
                'front_wx_duilian_switch': !0x1,
                'front_gezi_number': 0x4,
                'front_wx_ad_switch': !0x1
            }, this['navDataArr'] = [], this['openSceneC' + 'ount'] = 0x0;
        }
        static get ['instance']() {
            return this['_instance'] || (this['_instance'] = new _0x14bce7()), this['_instance'];
        }
        get ['isOpenWuCh' + 'u']() {
            let _0x85624b = _0x357ad8['Storage']['storageDat' + 'a']['level'];
            return this['dataConfig']['is_allow_a' + 'rea'] && _0x3959f9['allowScene']() && _0x85624b >= this['dataConfig']['front_pass' + '_gate'] && _0x85624b < this['dataConfig']['front_wuch' + 'u_finish_g' + 'ate'];
        }
        get ['shareAmoun' + 't']() {
            var _0x448a5f = this['dataConfig']['front_shar' + 'e_number'];
            return null != _0x448a5f ? _0x448a5f : 0x4;
        }
        set ['shareConte' + 'xt'](_0x1ba8b6) {
            this['shareConfi' + 'g'] = _0x1ba8b6;
        }
        get ['shareConte' + 'xt']() {
            return this['shareConfi' + 'g'];
        }
        get ['showBanner' + 'Count']() {
            return this['dataConfig']['front_bann' + 'er_number'];
        }
        ['openScene'](_0x30677d, _0x258dd1 = !0x1, _0x38fa45, _0x20bcb9, _0x1512e6) {
            Laya['Scene']['open'](_0x30677d, _0x258dd1, _0x38fa45, Laya['Handler']['create'](this, _0x2d0c9c => {
                _0x30677d != _0x802519['SCENE_FINI' + 'SHGAMEUI'] && this['openSceneC' + 'ount']++, Laya['stage']['addChild'](_0x2d0c9c), _0x2d0c9c['zOrder'] += 0xa, _0x1512e6 && _0x1512e6();
            }));
        }
        ['closeScene'](_0xc2dbdb) {
            Laya['Scene']['close'](_0xc2dbdb);
        }
        ['NavigateAp' + 'p'](_0x244140, _0x3c154a, _0x2ebd9f) {
            if (0x0 != this['navDataArr']['length'] && (console['log']('跳转', this['navDataArr'][_0x244140]['appid']), _0x357ad8['Platform']['aldSendEve' + 'nt']('导出-总点击数'), Laya['Browser']['onWeiXin'])) {
                var _0x377fb6 = this;
                wx['JJNavigate' + 'ToMiniProg' + 'ram'](() => ({
                    'appId': _0x377fb6['navDataArr'][_0x244140]['appid'],
                    'path': _0x377fb6['navDataArr'][_0x244140]['path'],
                    'id': _0x377fb6['navDataArr'][_0x244140]['id']
                }))['then'](_0x58162f => {
                    console['log']('success'), _0x357ad8['Platform']['aldSendEve' + 'nt']('导出成功-总用户数'), _0x357ad8['Platform']['aldSendEve' + 'nt']('导出成功-' + _0x377fb6['navDataArr'][_0x244140]['title']);
                }, _0x23f9d9 => {
                    console['log']('fail', _0x23f9d9), -0x1 != _0x23f9d9['errMsg']['indexOf']('cancel') && _0x3c154a && _0x3c154a();
                });
            }
        }
        ['getTitle'](_0x311ebc, _0x18a8c7 = !0x0) {
            return null == _0x311ebc ? '\x20' : _0x18a8c7 && _0x311ebc['subtitle'] && '' != _0x311ebc['subtitle'] ? _0x311ebc['subtitle'] : _0x311ebc['title'];
        }
        ['updateData' + 'Config'](_0x45889f) {
            var _0x5d523c = _0x45889f['data'];
            this['dataConfig']['is_allow_a' + 'rea'] = _0x45889f['is_allow_a' + 'rea'], this['dataConfig']['is_allow_e' + 'xport'] = _0x45889f['is_allow_e' + 'xport'], this['dataConfig']['front_wuch' + 'u_scene'] = _0x45889f['front_wuch' + 'u_scene'];
            for (let _0x444723 in _0x5d523c)
                this['dataConfig'][_0x444723] = _0x5d523c[_0x444723]['config_val'];
            console['log'](this['dataConfig']), _0x357ad8['Event']['event'](_0x662778['UPDATE_SHA' + 'RE_COUNT'], { 'amount': this['dataConfig']['front_shar' + 'e_number'] });
        }
        ['updateNavD' + 'ata'](_0x50c531) {
            this['navDataArr'] = [];
            for (var _0x1aeb50 = 0x0; _0x1aeb50 < _0x50c531['length']; _0x1aeb50++) {
                var _0x3fcded = _0x50c531[_0x1aeb50], _0x57a712 = new _0x1dd6b0();
                _0x57a712['appid'] = _0x3fcded['channel_ga' + 'me_appid'], _0x57a712['title'] = _0x3fcded['channel_ga' + 'me_name'], _0x57a712['path'] = _0x3fcded['path'], _0x57a712['subtitle'] = _0x3fcded['originalit' + 'y']['copywritin' + 'g'], _0x57a712['icon'] = _0x3fcded['originalit' + 'y']['material'], _0x57a712['id'] = _0x3fcded['originalit' + 'y']['id'], this['navDataArr']['push'](_0x57a712);
            }
        }
    }
    class _0x1dd6b0 {
    }
    class _0x3959f9 {
        static ['httpReques' + 't'](_0x3691a, _0x54aaee, _0x8f1e34 = 'get', _0x36480f) {
        }
        static ['shuffleArr'](_0x4caab1) {
            let _0x1227c8 = _0x4caab1['length'];
            for (; _0x1227c8;) {
                let _0x27ec3a = Math['floor'](Math['random']() * _0x1227c8--);
                [_0x4caab1[_0x27ec3a], _0x4caab1[_0x1227c8]] = [
                    _0x4caab1[_0x1227c8],
                    _0x4caab1[_0x27ec3a]
                ];
            }
            return _0x4caab1;
        }
        static ['fixNodeY'](_0x26826c) {
            _0x26826c['y'] = _0x26826c['y'] * Laya['stage']['displayHei' + 'ght'] / Laya['stage']['designHeig' + 'ht'];
        }
        static ['visibleDel' + 'ay'](_0x2f3dae, _0x2cdf81 = 0x5dc) {
            _0x2f3dae['visible'] = !0x1, Laya['timer']['once'](_0x2cdf81, this, () => {
                _0x2f3dae['visible'] = !0x0;
            });
        }
        static ['tMove'](_0xecc44b, _0x44e4b5, _0x1d6f69, _0xd577ce) {
            Laya['Tween']['to'](_0xecc44b, { 'x': _0x44e4b5 }, _0x1d6f69, null, new Laya['Handler'](this, () => {
                _0xd577ce && _0xd577ce();
            }));
        }
        static ['allowScene']() {
            if (Laya['Browser']['onWeiXin']) {
                var _0x2fdf76 = wx['getLaunchO' + 'ptionsSync']();
                console['log']('当前场景：', _0x2fdf76['scene']);
                var _0x30122f = !0x0;
                let _0x5dbb9b = _0x14bce7['instance']['dataConfig']['front_wuch' + 'u_scene'];
                (null == _0x5dbb9b && (_0x30122f = !0x0), -0x1 == _0x5dbb9b['search']('|')) && (_0x30122f = parseInt(_0x5dbb9b) != _0x2fdf76['scene']);
                let _0x12246a = _0x5dbb9b['split']('|');
                for (let _0x902ed2 = 0x0; _0x902ed2 < _0x12246a['length']; _0x902ed2++) {
                    parseInt(_0x12246a[_0x902ed2]) == _0x2fdf76['scene'] && (_0x30122f = !0x1);
                }
                return _0x30122f;
            }
            return !0x0;
        }
    }
    class _0x3da791 extends Laya['Script'] {
        constructor() {
            super(), this['isFix'] = !0x1;
        }
        ['onAwake']() {
            if (this['isFix']) {
                let _0x28b232 = this['owner'];
                _0x3959f9['fixNodeY'](_0x28b232);
            }
        }
        ['onDestroy']() {
        }
    }
    class _0x2ed5b9 extends Laya['Scene'] {
        constructor() {
            super(), this['navList'] = this['navList'], this['navData'] = [], this['clickIndex'] = 0x6;
        }
        ['onOpened'](_0x1ec071) {
            _0x1ec071 && (_0x1ec071['posY'] && (this['navList']['y'] = _0x1ec071['posY']), 0x1 == _0x1ec071['fixY'] && _0x3959f9['fixNodeY'](this['navList'])), this['_init']();
        }
        ['onClosed']() {
            Laya['timer']['clearAll'](this);
        }
        ['_init']() {
            this['initList']();
        }
        ['updateNavD' + 'ata']() {
            this['navData'] = []['concat'](_0x3959f9['shuffleArr'](_0x14bce7['instance']['navDataArr']))['slice'](0x0, 0x6), this['navList']['array'] = this['navData'];
        }
        ['initList']() {
            if (this['navData'] = []['concat'](_0x3959f9['shuffleArr'](_0x14bce7['instance']['navDataArr']))['slice'](0x0, 0x6), this['navList']['vScrollBar' + 'Skin'] = '', this['navList']['repeatX'] = 0x3, this['navList']['repeatY'] = 0x2, this['navList']['array'] = this['navData'], this['navList']['renderHand' + 'ler'] = Laya['Handler']['create'](this, this['onListRend' + 'er'], null, !0x1), this['navData']['length'] < 0x6)
                this['imgFinger']['visible'] = !0x1;
            else {
                var _0x2dc5dd = _0x357ad8['Utils']['getRandomA' + 'rray']([
                        0x0,
                        0x1,
                        0x2,
                        0x3,
                        0x4,
                        0x5
                    ], 0x1)[0x0], _0x1ef974 = this['navList']['cells'][_0x2dc5dd];
                _0x1ef974['addChild'](this['imgFinger']), this['imgFinger']['pos'](_0x1ef974['width'] / 1.5, _0x1ef974['height'] / 1.5), Laya['timer']['loop'](0x3e8, this, this['fingerAnim']);
            }
        }
        ['fingerAnim']() {
            !this['isPlayFing' + 'er'] && (this['isPlayFing' + 'er'] = !0x0, _0x357ad8['Tween']['toRotaion'](this['imgFinger'], -0x1e, 0x64, !0x1, !0x0), Laya['timer']['once'](0xc8, this, () => {
                this['isPlayFing' + 'er'] = !0x1;
            }));
        }
        ['onListRend' + 'er'](_0x49a72d, _0x5a6285) {
            if (!(_0x5a6285 >= this['navList']['array']['length'])) {
                var _0x3d2688 = _0x49a72d['getChildBy' + 'Name']('item');
                _0x3d2688['getChildBy' + 'Name']('icon')['skin'] = this['navData'][_0x5a6285]['icon'];
                var _0x1ab994 = _0x14bce7['instance']['navDataArr']['indexOf'](this['navData'][_0x5a6285]);
                _0x3d2688['off'](Laya['Event']['CLICK'], this, this['navCB'], [
                    _0x5a6285,
                    _0x1ab994
                ]), _0x3d2688['on'](Laya['Event']['CLICK'], this, this['navCB'], [
                    _0x5a6285,
                    _0x1ab994
                ]);
            }
        }
        ['navCB'](_0x4b1e5c, _0x3bf7b0) {
            _0x357ad8['Platform']['aldSendEve' + 'nt']('结算页\x206\x20个\x20ic' + 'on-总点击数'), console['log']('click\x20id:', _0x3bf7b0), _0x14bce7['instance']['NavigateAp' + 'p'](_0x3bf7b0, () => {
                _0x14bce7['instance']['openScene'](_0x802519['SCENE_FULL' + 'GAMEUI'], !0x1, {
                    'closeCallbackFun': () => {
                        _0x357ad8['Platform']['showBanner']();
                    }
                });
            }, () => {
                _0x357ad8['Platform']['aldSendEve' + 'nt']('结算页\x206\x20个\x20ic' + 'on-总成功跳转数');
            }), this['changeData'](_0x4b1e5c);
        }
        ['changeData'](_0x26072e) {
            this['updateNavD' + 'ata']();
            for (var _0x38518b = [], _0x45355d = 0x0; _0x45355d < this['navData']['length']; _0x45355d++)
                _0x38518b['push'](this['navData'][_0x45355d]['id']);
        }
    }
    const _0x8939a4 = 0x258;
    class _0x2fad1d extends Laya['Scene'] {
        constructor() {
            super(), this['rootNode'] = this['rootNode'], this['closeBtn'] = this['closeBtn'], this['navList'] = this['navList'], this['navData'] = [], this['scrollDir'] = 0x1, this['preIndex'] = -0x1, this['closeCallb' + 'ackFun'] = null, this['isRandomSo' + 'rt'] = !0x1;
        }
        ['onAwake']() {
            this['height'] = Laya['stage']['height'];
        }
        ['onOpened'](_0x1780e9) {
            _0x1780e9 && (_0x1780e9['closeCallb' + 'ackFun'] && (this['closeCallb' + 'ackFun'] = _0x1780e9['closeCallb' + 'ackFun']), _0x1780e9['isRandomSo' + 'rt'] && (this['isRandomSo' + 'rt'] = this['isRandomSo' + 'rt'])), this['_init'](), _0x357ad8['Platform']['aldSendEve' + 'nt']('[好友都在玩的爆款游' + '戏]\x20弹窗-弹出次数'), _0x357ad8['Platform']['hideBanner']();
        }
        ['onClosed']() {
            Laya['timer']['clearAll'](this), this['closeCallb' + 'ackFun'] && this['closeCallb' + 'ackFun'](), _0x14bce7['instance']['openSceneC' + 'ount']--, _0x357ad8['Platform']['hideBanner'](), _0x357ad8['Utils']['clearMissT' + 'ouch'](this['closeBtn']);
        }
        ['_init']() {
            this['rootNode']['y'] = _0x8939a4, this['rootNode']['y'] = this['rootNode']['y'] * Laya['stage']['displayHei' + 'ght'] / Laya['stage']['designHeig' + 'ht'], this['closeBtn']['on'](Laya['Event']['CLICK'], this, this['closeCB']), this['initList'](), _0x14bce7['instance']['isOpenWuCh' + 'u'] ? _0x357ad8['Utils']['missTouch'](this['closeBtn'], 0x104) : Laya['timer']['once'](0x320, this, () => {
                _0x357ad8['Platform']['showBanner']();
            });
        }
        ['initList']() {
            this['navData'] = []['concat'](_0x14bce7['instance']['navDataArr']), this['navData'] = _0x3959f9['shuffleArr'](this['navData']), this['navList']['vScrollBar' + 'Skin'] = '', this['navList']['repeatX'] = 0x3, this['navList']['repeatY'] = Math['floor'](this['navData']['length'] / 0x3), this['navList']['array'] = this['navData'], this['navList']['renderHand' + 'ler'] = Laya['Handler']['create'](this, this['onListRend' + 'er'], null, !0x1), this['navList']['mouseHandl' + 'er'] = new Laya['Handler'](this, this['mouseHandl' + 'er']), Laya['timer']['once'](0x3e8, this, () => {
                Laya['timer']['frameLoop'](0x1, this, this['scrollLoop']);
            });
        }
        ['mouseHandl' + 'er'](_0x41a711, _0x4c0149) {
            this['againScrol' + 'l']();
        }
        ['againScrol' + 'l']() {
            Laya['timer']['clear'](this, this['scrollLoop']), Laya['timer']['once'](0x3e8, this, () => {
                Laya['timer']['frameLoop'](0x1, this, this['scrollLoop']);
            });
        }
        ['scrollLoop']() {
            let _0x1ec412 = this['navList']['scrollBar'];
            _0x1ec412['value'] += this['scrollDir'], (_0x1ec412['value'] >= _0x1ec412['max'] || _0x1ec412['value'] <= 0x0) && (this['scrollDir'] = -this['scrollDir'], this['againScrol' + 'l']());
        }
        ['onListRend' + 'er'](_0x5cda57, _0x26e5e2) {
            if (!(_0x26e5e2 >= this['navList']['array']['length'])) {
                var _0x189db5 = _0x5cda57['getChildBy' + 'Name']('item'), _0x1567cf = _0x189db5['getChildBy' + 'Name']('icon'), _0x565d58 = _0x189db5['getChildBy' + 'Name']('name');
                _0x1567cf['skin'] = this['navData'][_0x26e5e2]['icon'], _0x565d58['text'] = _0x14bce7['instance']['getTitle'](this['navData'][_0x26e5e2]), _0x189db5['off'](Laya['Event']['CLICK'], this, this['navCB'], [_0x26e5e2]), _0x189db5['on'](Laya['Event']['CLICK'], this, this['navCB'], [_0x26e5e2]);
            }
        }
        ['navCB'](_0x1a7a92) {
            _0x357ad8['Platform']['aldSendEve' + 'nt']('[好友都在玩的爆款游' + '戏]\x20弹窗-总点击数'), console['log']('click\x20id:', _0x1a7a92), _0x1a7a92 = _0x14bce7['instance']['navDataArr']['indexOf'](this['navData'][_0x1a7a92]), _0x14bce7['instance']['NavigateAp' + 'p'](_0x1a7a92, () => {
                _0x14bce7['instance']['openScene'](_0x802519['SCENE_FULL' + 'GAMEUI'], !0x1, {
                    'continueCallbackFun': () => {
                        _0x357ad8['Platform']['showBanner']();
                    }
                });
            }, () => {
                _0x357ad8['Platform']['aldSendEve' + 'nt']('[好友都在玩的爆款游' + '戏]\x20弹窗-总成功跳' + '转数');
            });
        }
        ['closeCB']() {
            _0x14bce7['instance']['closeScene'](_0x802519['SCENE_FRIE' + 'NDGAME']);
        }
    }
    class _0x3b0019 {
        constructor() {
            this['dataConfig'] = _0x14bce7['instance']['dataConfig'];
        }
        static get ['Instance']() {
            return _0x3b0019['_instance'] || (_0x3b0019['_instance'] = new _0x3b0019()), _0x3b0019['_instance'];
        }
        get ['isOpenWuCh' + 'u']() {
            let _0x22891b = _0x357ad8['Storage']['storageDat' + 'a']['level'];
            return this['dataConfig']['is_allow_a' + 'rea'] && _0x3959f9['allowScene']() && _0x22891b >= this['dataConfig']['front_pass' + '_gate'] && _0x22891b < this['dataConfig']['front_wuch' + 'u_finish_g' + 'ate'];
        }
        get ['isOpenExpo' + 'rt']() {
            return this['dataConfig']['is_allow_e' + 'xport'] && _0x3959f9['allowScene']() && this['dataConfig']['front_all_' + 'export_swi' + 'tch'];
        }
        get ['isShowExpo' + 'rtMoreBtn']() {
            return this['isOpenExpo' + 'rt'] && this['dataConfig']['front_jing' + 'xi_export_' + 'switch'];
        }
        ['navClick'](_0x3115cf) {
            console['log']('click\x20id:', _0x3115cf), _0x14bce7['instance']['NavigateAp' + 'p'](_0x3115cf, () => {
            });
        }
        ['getRandomI' + 'ndex']() {
            return Math['floor'](Math['random']() * _0x14bce7['instance']['navDataArr']['length']);
        }
        get ['getRandom0' + 'To100']() {
            return 0x64 * Math['random']();
        }
        ['missTouch'](_0x581262, _0x2df92e = 0x12c) {
            _0x357ad8['Platform']['hideBanner'](), _0x581262['bottom'] = 0x5a;
            var _0x455d13 = _0x14bce7['instance']['dataConfig']['front_bann' + 'er_appear'], _0x1e8343 = _0x14bce7['instance']['dataConfig']['front_butt' + 'on_up'];
            Laya['timer']['once'](_0x455d13, _0x581262, () => {
                _0x357ad8['Platform']['showBanner'](), Laya['Tween']['to'](_0x581262, { 'bottom': _0x2df92e }, _0x1e8343);
            });
        }
        ['clearMissT' + 'ouch'](_0xf6e8f9) {
            Laya['timer']['clearAll'](_0xf6e8f9);
        }
        ['getTitle'](_0x5ebcbe, _0x24259b = !0x0) {
            let _0x2748d8 = _0x14bce7['instance']['navDataArr'];
            return null == _0x2748d8[_0x5ebcbe] ? '\x20' : _0x24259b && _0x2748d8[_0x5ebcbe]['subtitle'] && '' != _0x2748d8[_0x5ebcbe]['subtitle'] ? _0x2748d8[_0x5ebcbe]['subtitle'] : _0x2748d8[_0x5ebcbe]['title'];
        }
        ['loadHomePa' + 'ge'](_0xadca6a) {
            this['isOpenExpo' + 'rt'] && this['dataConfig']['front_home' + 'page_ad_sw' + 'itch'] ? _0x14bce7['instance']['openScene'](_0x802519['SCENE_RECO' + 'MMENDUI'], !0x1, {
                'isHomePage': !0x0,
                'closeCallbackFun': () => {
                    _0x14bce7['instance']['openScene'](_0x802519['SCENE_FULL' + 'GAMEUI'], !0x1, {
                        'isHomePage': !0x0,
                        'continueCallbackFun': () => {
                            _0xadca6a && _0xadca6a();
                        },
                        'dontClose': !0x0
                    });
                },
                'dontClose': !0x0
            }) : _0xadca6a && _0xadca6a(), this['isOpenWuCh' + 'u'] && (this['dataConfig']['front_home' + 'page_video' + '_switch'] ? (this['dataConfig']['front_home' + 'page_video' + '_switch'] = !0x1, console['log']('首页自动弹出视频'), _0x357ad8['Platform']['showVideoA' + 'd'](!0x0), _0x357ad8['Event']['on'](_0x662778['AD_VIDEO_C' + 'LOSE_EVENT'], this, () => {
                _0x357ad8['Platform']['showInterA' + 'd'](), _0x357ad8['Event']['offAllCall' + 'er'](this);
            })) : this['dataConfig']['front_wx_a' + 'd_switch'] && _0x357ad8['Platform']['createInte' + 'rAd'](!0x0)), console['log']('initListtt' + 'tttttttttt' + 'tttttttttt' + 't');
        }
        ['showInterA' + 'd']() {
            this['isOpenWuCh' + 'u'] && this['dataConfig']['front_wx_a' + 'd_switch'] && _0x357ad8['Platform']['createInte' + 'rAd'](!0x0);
        }
        ['showDuilia' + 'nIcon'](_0x291200, _0x16334b = 0xc8) {
            if (this['isOpenExpo' + 'rt'] && this['dataConfig']['front_duil' + 'ian_export' + '_switch']) {
                let _0x13b041 = this['dataConfig']['front_duil' + 'ian_icon_n' + 'umber'], _0xc4d906 = 0x2 * _0x13b041, _0x26f8dd = []['concat'](_0x14bce7['instance']['navDataArr']);
                _0x26f8dd = _0x3959f9['shuffleArr'](_0x26f8dd)['slice'](0x0, _0xc4d906);
                for (let _0x8e786b = 0x0; _0x8e786b < _0x13b041; _0x8e786b++)
                    for (let _0xefe49c = 0x0; _0xefe49c < 0x2; _0xefe49c++) {
                        let _0xbc436f = _0x26f8dd['shift'](), _0x524cef = _0x357ad8['Prefab']['getItem'](_0x44362d['DuilianIco' + 'n']);
                        _0x291200['addChild'](_0x524cef), _0x524cef['pos'](0x0 == _0xefe49c ? 0x5 : Laya['stage']['width'] - _0x524cef['width'] - 0x5, _0x16334b + 0xc8 * _0x8e786b);
                        let _0x20a8a3 = _0x524cef['getChildAt'](0x0), _0x3eb8e5 = _0x524cef['getChildAt'](0x1);
                        _0x20a8a3['skin'] = _0xbc436f['icon'];
                        let _0x141070 = _0x14bce7['instance']['navDataArr']['indexOf'](_0xbc436f);
                        _0x3eb8e5['text'] = this['getTitle'](_0x141070), _0x524cef['off'](Laya['Event']['CLICK'], _0x524cef['parent'], _0x3b0019['Instance']['navClick'], [_0x141070]), _0x524cef['on'](Laya['Event']['CLICK'], _0x524cef['parent'], _0x3b0019['Instance']['navClick'], [_0x141070]);
                    }
            } else
                this['dataConfig']['front_wx_d' + 'uilian_swi' + 'tch'];
        }
        ['clickStart' + 'Game'](_0x1c5ce9) {
            this['dataConfig']['front_star' + 't_game_swi' + 'tch'] && this['dataConfig']['front_star' + 't_video_nu' + 'mber'] > 0x0 ? (this['dataConfig']['front_star' + 't_video_nu' + 'mber']--, console['log']('开始游戏'), Laya['Browser']['onWeiXin'] ? (_0x357ad8['Platform']['showVideoA' + 'd'](), _0x357ad8['Event']['on'](_0x662778['AD_VIDEO_C' + 'LOSE_EVENT'], this, () => {
                this['showFirstB' + 'ox'](_0x1c5ce9), _0x357ad8['Event']['offAllCall' + 'er'](this);
            })) : this['showFirstB' + 'ox'](_0x1c5ce9)) : this['showFirstB' + 'ox'](_0x1c5ce9);
        }
        ['showGameFi' + 'nishExport'](_0x5b8b9d) {
            this['isOpenExpo' + 'rt'] ? _0x14bce7['instance']['openScene'](_0x802519['SCENE_RECO' + 'MMENDUI'], !0x1, {
                'closeCallbackFun': () => {
                    _0x14bce7['instance']['openScene'](_0x802519['SCENE_FULL' + 'GAMEUI'], !0x1, {
                        'continueCallbackFun': () => {
                            _0x3b0019['Instance']['showSecond' + 'Box'](_0x5b8b9d);
                        }
                    });
                }
            }) : _0x5b8b9d && _0x5b8b9d();
        }
        ['showSettle' + 'ment'](_0x4eacd6) {
            this['isOpenWuCh' + 'u'] && _0x4eacd6 && (this['settlement' + 'Btn'] = _0x4eacd6, this['missTouch'](_0x4eacd6, 0x122)), Laya['timer']['once'](0xa, this, () => {
                this['showSettle' + 'mentExport' + 'UI'](!0x0), this['settlement' + 'AutoNaviga' + 'teApp']();
            }), _0x357ad8['Storage']['storageDat' + 'a']['level'] >= this['dataConfig']['front_top_' + 'gezi_gate'] && _0x357ad8['Platform']['showSingle' + 'GridAd']();
        }
        ['closeSettl' + 'ement'](_0x284b74) {
            _0x357ad8['Platform']['hideSingle' + 'GridAd'](), this['settlement' + 'Btn'] && (this['clearMissT' + 'ouch'](this['settlement' + 'Btn']), this['settlement' + 'Btn'] = null), this['showSettle' + 'mentExport' + 'UI'](!0x1), this['isOpenExpo' + 'rt'] && this['getRandom0' + 'To100'] < this['dataConfig']['front_jies' + 'uan_next_e' + 'xport_chan' + 'ce'] ? _0x14bce7['instance']['openScene'](_0x802519['SCENE_RECO' + 'MMENDUI'], !0x1, {
                'closeCallbackFun': () => {
                    _0x14bce7['instance']['openScene'](_0x802519['SCENE_FULL' + 'GAMEUI'], !0x1, {
                        'continueCallbackFun': () => {
                            _0x284b74 && _0x284b74();
                        }
                    });
                }
            }) : _0x284b74 && _0x284b74();
        }
        ['wuchuBtn'](_0x10b2f0, _0x4d63b7, _0x52cadd, _0x18cfb7) {
            Laya['timer']['once'](0x14, this, () => {
                _0x357ad8['Platform']['hideBanner']();
            });
            let _0x21e29d = _0x357ad8['Storage']['storageDat' + 'a']['level'];
            (_0x10b2f0 == _0x802519['SCENE_FULL' + 'GAMEUI'] && _0x21e29d >= this['dataConfig']['front_wuch' + 'u_wanghong' + '_gate'] || _0x10b2f0 == _0x802519['SCENE_RECO' + 'MMENDUI'] && _0x21e29d >= this['dataConfig']['front_wuch' + 'u_remen_ga' + 'te']) && !_0x4d63b7 && this['isOpenWuCh' + 'u'] && !_0x357ad8['Platform']['bannerLoad' + 'Error'] ? _0x357ad8['Utils']['addClickEv' + 'ent'](_0x52cadd, _0x52cadd['parent'], () => {
                _0x52cadd['offAllCall' + 'er'](_0x52cadd['parent']), Laya['timer']['once'](this['dataConfig']['front_bann' + 'er_show_ti' + 'me'], this, () => {
                    _0x357ad8['Platform']['showBanner'](), Laya['timer']['once'](this['dataConfig']['front_bann' + 'er_hide_ti' + 'me'], this, () => {
                        _0x357ad8['Platform']['hideBanner'](), _0x357ad8['Utils']['addClickEv' + 'ent'](_0x52cadd, _0x52cadd['parent'], _0x18cfb7, null, !0x0);
                    });
                });
            }, null, !0x0) : _0x357ad8['Utils']['addClickEv' + 'ent'](_0x52cadd, _0x52cadd['parent'], _0x18cfb7, null, !0x0);
        }
        ['showFullGa' + 'meUI'](_0x17a110) {
            this['isOpenExpo' + 'rt'] && _0x14bce7['instance']['openScene'](_0x802519['SCENE_FULL' + 'GAMEUI'], !0x1, {
                'continueCallbackFun': () => {
                    _0x17a110 && _0x17a110();
                }
            });
        }
        ['showRecomm' + 'endUI'](_0x2962a0) {
            this['isOpenExpo' + 'rt'] && _0x14bce7['instance']['openScene'](_0x802519['SCENE_RECO' + 'MMENDUI'], !0x1, {
                'closeCallbackFun': () => {
                    _0x2962a0 && _0x2962a0();
                }
            });
        }
        ['wanghongAu' + 'toNavigate' + 'App'](_0x538f33) {
            this['isOpenExpo' + 'rt'] && (_0x538f33 && this['getRandom0' + 'To100'] < this['dataConfig']['front_star' + 't_wanghong' + '_chance'] || !_0x538f33 && this['getRandom0' + 'To100'] < this['dataConfig']['front_insi' + 'de_wanghon' + 'g_chance']) && _0x14bce7['instance']['NavigateAp' + 'p'](this['getRandomI' + 'ndex'](), () => {
                console['log']('网红爆款自动跳转取消');
            }, () => {
                console['log']('网红爆款自动跳转成功');
            });
        }
        ['remenAutoN' + 'avigateApp'](_0x187777) {
            this['isOpenExpo' + 'rt'] && (_0x187777 && this['getRandom0' + 'To100'] < this['dataConfig']['front_star' + 't_remen_ch' + 'ance'] || !_0x187777 && this['getRandom0' + 'To100'] < this['dataConfig']['front_insi' + 'de_remen_c' + 'hance']) && _0x14bce7['instance']['NavigateAp' + 'p'](this['getRandomI' + 'ndex'](), () => {
                console['log']('热门推荐自动跳转取消');
            }, () => {
                console['log']('热门推荐自动跳转成功');
            });
        }
        ['settlement' + 'AutoNaviga' + 'teApp']() {
            this['isOpenExpo' + 'rt'] && this['getRandom0' + 'To100'] < this['dataConfig']['front_jies' + 'uan_tiaozh' + 'uan_chance'] && _0x14bce7['instance']['NavigateAp' + 'p'](this['getRandomI' + 'ndex'](), () => {
                this['settlement' + 'Btn'] && (this['clearMissT' + 'ouch'](this['settlement' + 'Btn']), this['settlement' + 'Btn'] = null), console['log']('结算页自动跳转取消'), _0x14bce7['instance']['openScene'](_0x802519['SCENE_RECO' + 'MMENDUI']), this['remenAutoN' + 'avigateApp']();
            }, () => {
                console['log']('结算页自动跳转成功');
            });
        }
        ['showSettle' + 'mentExport' + 'UI'](_0x54c7f4, _0x4e3283 = 0x258) {
            this['isOpenExpo' + 'rt'] && (_0x54c7f4 ? _0x14bce7['instance']['openScene'](_0x802519['SCENE_FINI' + 'SHGAMEUI'], !0x1, {
                'posY': _0x4e3283,
                'fixY': !0x0
            }) : _0x14bce7['instance']['closeScene'](_0x802519['SCENE_FINI' + 'SHGAMEUI']));
        }
        ['showFirstB' + 'ox'](_0x258746) {
            this['isOpenWuCh' + 'u'] && _0x357ad8['Storage']['storageDat' + 'a']['level'] >= this['dataConfig']['front_firs' + 't_box_gate'] && this['getRandom0' + 'To100'] < this['dataConfig']['front_box_' + 'chance'] ? _0x357ad8['UI']['openScene'](_0xedc39a['Clean'], !0x1, {
                'closeCallback': () => {
                    _0x258746 && _0x258746();
                }
            }) : _0x258746 && _0x258746();
        }
        ['showSecond' + 'Box'](_0xa0ca5a) {
            this['isOpenWuCh' + 'u'] && _0x357ad8['Storage']['storageDat' + 'a']['level'] >= this['dataConfig']['front_seco' + 'nd_box_gat' + 'e'] && this['getRandom0' + 'To100'] < this['dataConfig']['front_box_' + 'chance'] ? _0x357ad8['UI']['openScene'](_0xedc39a['Box2'], !0x1, {
                'isSettlement': !0x0,
                'closeCallback': () => {
                    _0xa0ca5a && _0xa0ca5a();
                }
            }) : _0xa0ca5a && _0xa0ca5a();
        }
    }
    class _0x5a206a extends Laya['Scene'] {
        constructor() {
            super(), this['exitBtn'] = this['exitBtn'], this['continueBt' + 'n'] = this['continueBt' + 'n'], this['navList'] = this['navList'], this['navData'] = [], this['scrollDir'] = 0x1, this['preIndex'] = -0x1, this['hotArr'] = [], this['continueCa' + 'llbackFun'] = null, this['curGrade'] = -0x1;
        }
        ['onAwake']() {
            this['height'] = Laya['stage']['height'];
        }
        ['onOpened'](_0xdbb6cf) {
            _0xdbb6cf && _0xdbb6cf['continueCa' + 'llbackFun'] && (this['continueCa' + 'llbackFun'] = _0xdbb6cf['continueCa' + 'llbackFun']), _0xdbb6cf && _0xdbb6cf['grade'] && (this['curGrade'] = _0xdbb6cf['grade']), _0xdbb6cf && _0xdbb6cf['dontClose'] && (this['dontClose'] = !0x0), this['_init'](), _0x357ad8['Platform']['aldSendEve' + 'nt']('全屏幕导出页出现次数');
            var _0x1cd568 = _0xdbb6cf && _0xdbb6cf['isHomePage'];
            (_0x3b0019['Instance']['wanghongAu' + 'toNavigate' + 'App'](_0x1cd568), _0x3b0019['Instance']['wuchuBtn'](this['url'], _0x1cd568, this['continueBt' + 'n'], this['continueCB']), _0x357ad8['Storage']['storageDat' + 'a']['level'] >= _0x3b0019['Instance']['dataConfig']['front_top_' + 'gezi_gate'] && _0x357ad8['Platform']['showSingle' + 'GridAd'](), _0x357ad8['Platform']['hideHomeGr' + 'idAd'](), Laya['Browser']['onWeiXin']) && (_0x357ad8['Platform']['sysInfo']['model']['startsWith']('iPhone\x20X') && (this['continueBt' + 'n']['bottom'] += 0x28)), _0x14bce7['instance']['isOpenFull' + 'GameUI'] = !0x0;
        }
        ['onClosed']() {
            Laya['timer']['clearAll'](this), _0x357ad8['Event']['offAllCall' + 'er'](this), _0x357ad8['Platform']['hideBanner'](), _0x14bce7['instance']['openSceneC' + 'ount']--;
            var _0x2d863c = _0x357ad8['UI']['getTopScen' + 'e'];
            0x0 == _0x14bce7['instance']['openSceneC' + 'ount'] && (_0x2d863c['canShowAd'] && _0x357ad8['Platform']['showBanner'](), _0x2d863c['url'] == _0xedc39a['Home'] && _0x357ad8['Platform']['showHomeGr' + 'idAd']()), _0x14bce7['instance']['isOpenFull' + 'GameUI'] = !0x1, _0x357ad8['Storage']['storageDat' + 'a']['level'] >= _0x3b0019['Instance']['dataConfig']['front_top_' + 'gezi_gate'] && _0x357ad8['Platform']['hideSingle' + 'GridAd']();
        }
        ['_init']() {
            !_0x14bce7['instance']['isOpenWuCh' + 'u'] || _0x357ad8['Storage']['storageDat' + 'a']['level'] < _0x14bce7['instance']['dataConfig']['front_rand' + 'ompaly_sta' + 'rt_level'] ? this['exitBtn']['visible'] = !0x1 : this['exitBtn']['on'](Laya['Event']['CLICK'], this, this['closeCB']), this['getHotRand' + 'Arr'](), this['initList']();
        }
        ['getHotRand' + 'Arr']() {
            let _0x4248ef = [
                0x0,
                0x1,
                0x2,
                0x3,
                0x4,
                0x5,
                0x6,
                0x7,
                0x8
            ];
            _0x4248ef = _0x3959f9['shuffleArr'](_0x4248ef), this['hotArr'] = _0x4248ef['slice'](0x0, 0x3);
        }
        ['initList']() {
            this['navData'] = []['concat'](_0x14bce7['instance']['navDataArr']), this['navData'] = _0x3959f9['shuffleArr'](this['navData']), this['navList']['vScrollBar' + 'Skin'] = '', this['navList']['repeatX'] = 0x3, this['navList']['repeatY'] = Math['floor'](this['navData']['length'] / 0x3), this['navList']['array'] = this['navData'], this['navList']['height'] = Laya['stage']['displayHei' + 'ght'] - 0x1b2, this['navList']['renderHand' + 'ler'] = Laya['Handler']['create'](this, this['onListRend' + 'er'], null, !0x1), this['navList']['mouseHandl' + 'er'] = new Laya['Handler'](this, this['mouseHandl' + 'er']), Laya['timer']['once'](0x3e8, this, () => {
                Laya['timer']['frameLoop'](0x1, this, this['scrollLoop']);
            });
        }
        ['mouseHandl' + 'er'](_0x12e04d, _0x1018ea) {
            this['againScrol' + 'l']();
        }
        ['againScrol' + 'l']() {
            Laya['timer']['clear'](this, this['scrollLoop']), Laya['timer']['once'](0x3e8, this, () => {
                Laya['timer']['frameLoop'](0x1, this, this['scrollLoop']);
            });
        }
        ['scrollLoop']() {
            let _0x1bcbad = this['navList']['scrollBar'];
            _0x1bcbad['value'] += this['scrollDir'], (_0x1bcbad['value'] >= _0x1bcbad['max'] || _0x1bcbad['value'] <= 0x0) && (this['scrollDir'] = -this['scrollDir'], this['againScrol' + 'l']());
        }
        ['onListRend' + 'er'](_0x48d173, _0x46f2f9) {
            if (!(_0x46f2f9 >= this['navList']['array']['length'])) {
                var _0x14f440 = _0x48d173['getChildBy' + 'Name']('item'), _0x27f8a6 = _0x14f440['getChildBy' + 'Name']('icon'), _0x1c5e46 = _0x14f440['getChildBy' + 'Name']('name'), _0x1d5a23 = _0x14f440['getChildBy' + 'Name']('hot');
                _0x14f440['getChildBy' + 'Name']('color')['skin'] = 'JJExportRe' + 's/' + (Math['floor'](_0x46f2f9 % 0x9) + 0x1) + '.png', _0x27f8a6['skin'] = this['navData'][_0x46f2f9]['icon'], _0x1c5e46['text'] = _0x14bce7['instance']['getTitle'](this['navData'][_0x46f2f9]), _0x1d5a23['visible'] = -0x1 != this['hotArr']['indexOf'](_0x46f2f9), _0x14f440['off'](Laya['Event']['CLICK'], this, this['navCB'], [_0x46f2f9]), _0x14f440['on'](Laya['Event']['CLICK'], this, this['navCB'], [_0x46f2f9]);
            }
        }
        ['navCB'](_0x24b2cb) {
            _0x357ad8['Platform']['aldSendEve' + 'nt']('网红爆款全屏幕导出页' + '-总点击数'), console['log']('click\x20id:', _0x24b2cb), _0x24b2cb = _0x14bce7['instance']['navDataArr']['indexOf'](this['navData'][_0x24b2cb]), _0x14bce7['instance']['NavigateAp' + 'p'](_0x24b2cb, () => {
            }, () => {
                _0x357ad8['Platform']['aldSendEve' + 'nt']('网红爆款全屏幕导出页' + '-总成功跳转数');
            });
        }
        ['closeCB']() {
            var _0x2ade40 = Math['floor'](Math['random']() * this['navData']['length']);
            _0x357ad8['Platform']['aldSendEve' + 'nt']('网红爆款全屏幕导出页' + '-总点击数'), console['log']('click\x20id:', _0x2ade40), _0x14bce7['instance']['NavigateAp' + 'p'](_0x2ade40, null, () => {
                _0x357ad8['Platform']['aldSendEve' + 'nt']('网红爆款全屏幕导出页' + '-总成功跳转数');
            });
        }
        ['continueCB']() {
            this['dontClose'] ? this['continueCa' + 'llbackFun'] && (this['continueCa' + 'llbackFun'](), this['continueCa' + 'llbackFun'] = null) : (this['close'](), this['continueCa' + 'llbackFun'] && this['continueCa' + 'llbackFun']());
        }
    }
    class _0x292196 extends Laya['Scene'] {
        constructor() {
            super(), this['navList'] = this['navList'], this['navData'] = [], this['scrollDir'] = 0x1, this['preIndex'] = -0x1, this['closeCallb' + 'ackFun'] = null;
        }
        ['onAwake']() {
            this['height'] = Laya['stage']['height'];
        }
        ['onOpened'](_0x52f104) {
            _0x52f104 && _0x52f104['closeCallb' + 'ackFun'] && (this['closeCallb' + 'ackFun'] = _0x52f104['closeCallb' + 'ackFun']), _0x52f104 && _0x52f104['dontClose'] && (this['dontClose'] = !0x0), this['_init'](), _0x357ad8['Platform']['aldSendEve' + 'nt']('热门推荐全屏幕导出页' + '出现次数');
            var _0xe95ae6 = _0x52f104 && _0x52f104['isHomePage'];
            _0x3b0019['Instance']['remenAutoN' + 'avigateApp'](_0xe95ae6), _0x3b0019['Instance']['wuchuBtn'](this['url'], _0xe95ae6, this['continueBt' + 'n'], this['closeCB']), _0x357ad8['Storage']['storageDat' + 'a']['level'] >= _0x3b0019['Instance']['dataConfig']['front_top_' + 'gezi_gate'] && _0x357ad8['Platform']['showSingle' + 'GridAd']();
        }
        ['onClosed']() {
            Laya['timer']['clearAll'](this), _0x357ad8['Event']['offAllCall' + 'er'](this), _0x14bce7['instance']['isOpenWuCh' + 'u'] && _0x357ad8['Platform']['hideBanner'](), _0x14bce7['instance']['openSceneC' + 'ount']--;
            var _0x3e2bdc = _0x357ad8['UI']['getTopScen' + 'e'];
            0x0 == _0x14bce7['instance']['openSceneC' + 'ount'] && null != _0x3e2bdc && _0x3e2bdc['canShowAd'] && _0x357ad8['Platform']['showBanner'](), _0x357ad8['UI']['getTopScen' + 'e']['url'] == _0xedc39a['Reborn'] && _0x357ad8['Event']['event']('timeStatus', { 'isStartTimer': !0x0 }), this['closeCallb' + 'ackFun'] && this['closeCallb' + 'ackFun'](), _0x357ad8['Storage']['storageDat' + 'a']['level'] >= _0x3b0019['Instance']['dataConfig']['front_top_' + 'gezi_gate'] && _0x357ad8['Platform']['hideSingle' + 'GridAd']();
        }
        ['_init']() {
            this['initList'](), platform['getInstanc' + 'e']()['initList'](this['ADList']);
        }
        ['initList']() {
            if (this['navData'] = []['concat'](_0x14bce7['instance']['navDataArr']), this['navData'] = _0x3959f9['shuffleArr'](this['navData']), this['navList']['vScrollBar' + 'Skin'] = '', this['navList']['repeatX'] = 0x2, this['navList']['repeatY'] = Math['floor'](this['navData']['length'] / 0x2), this['navList']['array'] = this['navData'], this['navList']['height'] = Laya['stage']['displayHei' + 'ght'] - 0x1ae, this['navList']['renderHand' + 'ler'] = Laya['Handler']['create'](this, this['onListRend' + 'er'], null, !0x1), this['navList']['mouseHandl' + 'er'] = new Laya['Handler'](this, this['mouseHandl' + 'er']), this['navData']['length'] < 0x6)
                this['imgFinger']['visible'] = !0x1;
            else {
                var _0x1c4f04 = _0x357ad8['Utils']['getRandomA' + 'rray']([
                        0x0,
                        0x1,
                        0x2,
                        0x3,
                        0x4,
                        0x5
                    ], 0x1)[0x0], _0x68ecad = this['navList']['cells'][_0x1c4f04];
                _0x68ecad['addChild'](this['imgFinger']), this['imgFinger']['pos'](_0x68ecad['width'] / 1.5, _0x68ecad['height'] / 1.5), Laya['timer']['loop'](0x3e8, this, this['fingerAnim']);
            }
            Laya['timer']['once'](0x3e8, this, () => {
                Laya['timer']['frameLoop'](0x1, this, this['scrollLoop']);
            });
        }
        ['mouseHandl' + 'er'](_0x5e4478, _0x321906) {
            this['againScrol' + 'l']();
        }
        ['againScrol' + 'l']() {
            Laya['timer']['clear'](this, this['scrollLoop']), Laya['timer']['once'](0x3e8, this, () => {
                Laya['timer']['frameLoop'](0x1, this, this['scrollLoop']);
            });
        }
        ['scrollLoop']() {
            let _0x38e613 = this['navList']['scrollBar'];
            _0x38e613['value'] += this['scrollDir'], (_0x38e613['value'] >= _0x38e613['max'] || _0x38e613['value'] <= 0x0) && (this['scrollDir'] = -this['scrollDir'], this['againScrol' + 'l']());
        }
        ['onListRend' + 'er'](_0x14feea, _0x5d8529) {
            if (!(_0x5d8529 >= this['navList']['array']['length'])) {
                var _0xabd4c6 = _0x14feea['getChildBy' + 'Name']('item'), _0x261b0b = _0xabd4c6['getChildBy' + 'Name']('icon'), _0x3dfaf1 = _0xabd4c6['getChildBy' + 'Name']('name');
                _0x261b0b['skin'] = this['navData'][_0x5d8529]['icon'], _0x3dfaf1['text'] = _0x14bce7['instance']['getTitle'](this['navData'][_0x5d8529]), _0xabd4c6['off'](Laya['Event']['CLICK'], this, this['navCB'], [_0x5d8529]), _0xabd4c6['on'](Laya['Event']['CLICK'], this, this['navCB'], [_0x5d8529]);
            }
        }
        ['navCB'](_0x525531) {
            _0x357ad8['Platform']['aldSendEve' + 'nt']('热门推荐全屏幕导出页' + '-总点击数'), console['log']('click\x20id:', _0x525531), _0x525531 = _0x14bce7['instance']['navDataArr']['indexOf'](this['navData'][_0x525531]), _0x14bce7['instance']['NavigateAp' + 'p'](_0x525531, () => {
            }, () => {
                _0x357ad8['Platform']['aldSendEve' + 'nt']('热门推荐全屏幕导出页' + '-总成功跳转数');
            });
        }
        ['onContinue' + 'Click']() {
            var _0x43f505 = Math['floor'](Math['random']() * this['navData']['length']);
            _0x357ad8['Platform']['aldSendEve' + 'nt']('热门推荐全屏幕导出页' + '-总点击数'), console['log']('click\x20id:', _0x43f505), _0x14bce7['instance']['NavigateAp' + 'p'](_0x43f505, null, () => {
                _0x357ad8['Platform']['aldSendEve' + 'nt']('热门推荐全屏幕导出页' + '-总成功跳转数');
            });
        }
        ['closeCB']() {
            this['dontClose'] ? this['closeCallb' + 'ackFun'] && (this['closeCallb' + 'ackFun'](), this['closeCallb' + 'ackFun'] = null) : this['close']();
        }
        ['fingerAnim']() {
            !this['isPlayFing' + 'er'] && (this['isPlayFing' + 'er'] = !0x0, _0x357ad8['Tween']['toRotaion'](this['imgFinger'], -0x1e, 0x64, !0x1, !0x0), Laya['timer']['once'](0xc8, this, () => {
                this['isPlayFing' + 'er'] = !0x1;
            }));
        }
    }
    class _0x35a487 extends Laya['Scene'] {
        ['checkShare' + 'OrVideo']() {
            this['isVideo'] = _0x357ad8['Storage']['storageDat' + 'a']['shareCount'] <= 0x0 && _0x357ad8['Platform']['existVideo' + 'Ad'], this['imgType'] && (this['isVideo'] ? this['imgType']['skin'] = 'ui/sy_sj_0' + '4.png' : this['imgType']['skin'] = 'ui/sy_sj_0' + '5.png'), _0x357ad8['Event']['on'](_0x662778['AD_VIDEO_C' + 'LOSE_EVENT'], this, this['onCloseVid' + 'eo']);
        }
        ['onAwake']() {
            (this['height'] = Laya['stage']['height'], this['checkShare' + 'OrVideo'](), Laya['Browser']['onWeiXin'] && this['btmBox']) && (_0x357ad8['Platform']['sysInfo']['model']['startsWith']('iPhone\x20X') && (this['btmBox']['bottom'] += 0x28)), (this['init'](), this['initUI'](), this['initData'](), this['initEvent'](), this['canShowAd'] && !this['isWuchu'] && 0x0 == _0x14bce7['instance']['openSceneC' + 'ount'] ? (_0x357ad8['Platform']['showBanner'](), console['log']('BaseScene\x20' + 'ShowBanner')) : (_0x357ad8['Platform']['hideBanner'](), console['log']('BaseScene\x20' + 'HideBanner')), Laya['timer']['once'](0xa, this, () => {
                null != _0x26d87a['scrollScen' + 'e'] && Laya['stage']['setChildIn' + 'dex'](_0x26d87a['scrollScen' + 'e'], Laya['stage']['numChildre' + 'n'] - 0x1);
            }), _0x357ad8['Event']['on'](_0x662778['UPDATE_CHE' + 'CK_SV'], this, this['checkShare' + 'OrVideo']));
        }
        get ['isWuchu']() {
            return _0x14bce7['instance']['isOpenWuCh' + 'u'] && this['url'] == _0xedc39a['Settlement'];
        }
        ['onClosed']() {
            Laya['timer']['clearAll'](this), _0x357ad8['Event']['offAllCall' + 'er'](this), this['scene']['destroy']();
        }
        ['init']() {
            this['btnClose'] && _0x357ad8['Utils']['addClickEv' + 'ent'](this['btnClose'], this, this['onCloseEve' + 'nt'], null, !0x0), this['fcCoin'] && (this['fcCoin']['value'] = _0x357ad8['Storage']['storageDat' + 'a']['coin']['toString'](), _0x357ad8['Event']['on'](_0x662778['CHANGE_COI' + 'N_EVENT'], this, () => {
                this['fcCoin']['value'] = _0x357ad8['Storage']['storageDat' + 'a']['coin']['toString']();
            })), this['fcLevel'] && (this['fcLevel']['value'] = _0x357ad8['Storage']['storageDat' + 'a']['level']['toString']());
        }
        ['initUI']() {
        }
        ['initData']() {
        }
        ['initEvent']() {
        }
        ['onCloseEve' + 'nt']() {
            _0x357ad8['UI']['closeScene'](this['url']), this['onBtnClose' + 'CallBack'] && this['onBtnClose' + 'CallBack']();
        }
        ['RewardClic' + 'k'](_0x43f7de, _0x32d936) {
            if (!Laya['Browser']['onWeiXin'])
                return this['rewardCall' + 'back'] = _0x43f7de, void this['rewardCall' + 'back']();
            _0x32d936 || this['isVideo'] ? (_0x357ad8['Event']['off'](_0x662778['AD_VIDEO_C' + 'LOSE_EVENT'], this, this['onCloseVid' + 'eo']), _0x357ad8['Event']['on'](_0x662778['AD_VIDEO_C' + 'LOSE_EVENT'], this, this['onCloseVid' + 'eo']), this['rewardCall' + 'back'] = _0x43f7de, _0x357ad8['Platform']['showVideoA' + 'd']()) : _0x357ad8['Platform']['shareGame'](_0x5aa89d => {
                _0x5aa89d ? (_0x43f7de(), _0x357ad8['Event']['event'](_0x662778['UPDATE_SHA' + 'RE_COUNT'], { 'amount': _0x357ad8['Storage']['storageDat' + 'a']['shareCount'] - 0x1 })) : _0x357ad8['Platform']['showModal'](_0x357ad8['CommonData']['shareConte' + 'xt']);
            });
        }
        ['onCloseVid' + 'eo'](_0x263471) {
            this['rewardCall' + 'back'] && (_0x263471['isEnded'] ? this['rewardCall' + 'back']() : (console['log']('未看完视频'), _0x357ad8['Platform']['showToast']('未看完视频', 0x7d0)), this['rewardCall' + 'back'] = null);
        }
        get ['canShowAd']() {
            return this['url'] == _0xedc39a['Settlement'] || this['url'] == _0xedc39a['Home'];
        }
    }
    class _0x1b85ac extends _0x35a487 {
        constructor() {
            super(...arguments), this['boxMaskHei' + 'ght'] = 0x0;
        }
        ['onPress']() {
            this['pressBar']['value'] += this['addProgers' + 's'], Laya['Tween']['to'](this['btnPress'], {
                'scaleX': 0.7,
                'scaleY': 0.7
            }, 0x6e, null, Laya['Handler']['create'](this, () => {
                Laya['Tween']['to'](this['btnPress'], {
                    'scaleX': 0x1,
                    'scaleY': 0x1
                }, 0x6e, null);
            })), Laya['Tween']['to'](this['imgSushi'], { 'rotation': 0x1e }, 0x64, null, Laya['Handler']['create'](this, () => {
                Laya['Tween']['to'](this['imgSushi'], { 'rotation': 0x0 }, 0x64);
            })), console['log']('前', this['pressBar']['value'], this['addProgers' + 's'], this['needClick']), this['pressBar']['value'] >= this['needClick'] * this['addProgers' + 's'] && (_0x357ad8['Platform']['showBanner'](), Laya['timer']['once'](0x9c4, this, () => {
                this['isforce'] ? (_0x357ad8['Platform']['bannerLoad' + 'Error'] && (_0x357ad8['Event']['offAll']('Hide_Clear' + '_View'), this['onCloseEve' + 'nt']()), _0x357ad8['Platform']['hideBanner']()) : (_0x357ad8['Event']['offAll']('Hide_Clear' + '_View'), this['onCloseEve' + 'nt']());
            }));
        }
        ['reFreshUI']() {
            this['pressBar']['value'] > _0x14bce7['instance']['dataConfig']['front_prog' + 'ress_bar_r' + 'eturn'] && (this['pressBar']['value'] -= _0x14bce7['instance']['dataConfig']['front_prog' + 'ress_bar_r' + 'eturn']), this['light']['rotation'] += 0x1;
        }
        ['show']() {
            this['pressBar']['value'] = 0x0;
        }
        ['initUI']() {
            _0x357ad8['Utils']['addClickEv' + 'ent'](this['btnPress'], this, this['onPress']), this['show'](), Laya['timer']['frameLoop'](0x1, this, this['reFreshUI']), this['pressBar']['value'] = 0x0;
            var _0x3c2a18 = Number(_0x14bce7['instance']['dataConfig']['front_box_' + 'clicks'][0x0]), _0x37981c = Number(_0x14bce7['instance']['dataConfig']['front_box_' + 'clicks'][0x1]);
            this['max'] = _0x37981c, this['needClick'] = Math['floor'](Math['random']() * (_0x37981c - _0x14bce7['instance']['dataConfig']['front_prog' + 'ress_bar_r' + 'educe'] - _0x3c2a18 + 0x1)) + _0x3c2a18, this['addProgers' + 's'] = 0x1 / _0x37981c, console['log']('点击数：', this['needClick']), _0x14bce7['instance']['dataConfig']['front_is_b' + 'ox_force'] ? (this['isforce'] = !0x0, _0x357ad8['Event']['on']('Hide_Clear' + '_View', this, () => {
                _0x357ad8['Event']['offAll']('Hide_Clear' + '_View'), this['onCloseEve' + 'nt']();
            })) : this['isforce'] = !0x1;
        }
        ['initEvent']() {
            _0x357ad8['Event']['on'](_0x662778['PLATFORM_W' + 'AKE_EVENT'], this, this['onCloseEve' + 'nt']), _0x357ad8['Platform']['bannerLoad' + 'Error'] || _0x357ad8['Event']['on']('Hide_Clear' + '_View', this, () => {
                _0x357ad8['Event']['offAll']('Hide_Clear' + '_View'), this['onCloseEve' + 'nt']();
            });
        }
        ['onOpened'](_0x4c60b8) {
            super['onOpened'](_0x4c60b8), this['visible'] = !0x1, _0x4c60b8 && (this['closeCallb' + 'ack'] = _0x4c60b8['closeCallb' + 'ack']), Laya['timer']['once'](0x64, this, () => {
                _0x357ad8['Platform']['hideBanner']();
            }), this['visible'] = !0x0, Laya['timer']['once'](0xa, this, () => {
                _0x357ad8['Platform']['bannerLoad' + 'Error'] && (_0x357ad8['Event']['offAll']('Hide_Clear' + '_View'), this['onCloseEve' + 'nt']());
            });
        }
        ['onCloseEve' + 'nt']() {
            _0x357ad8['Event']['offAll']('Hide_Clear' + '_View'), _0x357ad8['Event']['off'](_0x662778['PLATFORM_W' + 'AKE_EVENT'], this, this['onCloseEve' + 'nt']), _0x357ad8['UI']['closeScene'](_0xedc39a['Box2']), this['closeCallb' + 'ack'] && (this['closeCallb' + 'ack'](), this['closeCallb' + 'ack'] = null);
        }
    }
    class _0x400d95 extends _0x35a487 {
        ['initData']() {
            this['countTimer'] = 0x0, this['count'] = 0x1, Laya['timer']['frameLoop'](0x1, this, this['checkLoad']);
        }
        ['checkLoad']() {
            this['imgRotate']['rotation'] += 0x5, this['countTimer'] += Laya['timer']['delta'], this['countTimer'] / 0x3e8 > 0.2 && (this['count']++, this['countTimer'] = 0x0, this['count'] > 0x3 && (this['count'] = 0x1)), this['updateLoad' + 'ing'](), _0x357ad8['CommonData']['loadFinish' + 'ed'] && FKGames['init']({
                'debug': !![],
                'appName': '',
                'gamemonetizeId': 'gg9rl10fh373q0w6pibvzbcu91dc1dxf',
                'gamedistributionId': '',
                'complete': () => {
                    platform['getInstanc' + 'e']()['musicOpen'](), (_0x357ad8['CommonData']['loadFinish' + 'ed'] = !0x1, console['log']('进入游戏首页'), _0x357ad8['UI']['openScene'](_0xedc39a['Game3D'], !0x1, null, null, () => {
                        _0x357ad8['Sound']['playMusic'](_0x3c0ec2['BGM']), _0x357ad8['UI']['openScene'](_0xedc39a['Home'], !0x1, null, null, () => {
                            _0x357ad8['UI']['closeScene'](_0xedc39a['BusyLoadin' + 'g']), _0x357ad8['Platform']['aldSendEve' + 'nt']('进入首页');
                        });
                    })), console['log']('----------' + '初始化成功!!!--' + '--------');
                }
            });
        }
        ['updateLoad' + 'ing']() {
            for (var _0x1ab20a = 0x0; _0x1ab20a < 0x3; _0x1ab20a++) {
                this['imgLoading']['getChildAt'](_0x1ab20a)['visible'] = this['count'] >= _0x1ab20a + 0x1;
            }
        }
    }
    class _0x315b61 extends _0x35a487 {
        constructor() {
            super(...arguments), this['boxMaskHei' + 'ght'] = 0x0;
        }
        ['onPress']() {
            this['pressBar']['value'] += this['addProgers' + 's'], Laya['Tween']['to'](this['btnPress'], {
                'scaleX': 0.7,
                'scaleY': 0.7
            }, 0x6e, null, Laya['Handler']['create'](this, () => {
                Laya['Tween']['to'](this['btnPress'], {
                    'scaleX': 0x1,
                    'scaleY': 0x1
                }, 0x6e, null);
            })), Laya['Tween']['to'](this['imgGift'], { 'rotation': 0x1e }, 0x64, null, Laya['Handler']['create'](this, () => {
                Laya['Tween']['to'](this['imgGift'], { 'rotation': 0x0 }, 0x64);
            })), console['log']('前', this['pressBar']['value'], this['addProgers' + 's'], this['needClick']), this['pressBar']['value'] >= this['needClick'] * this['addProgers' + 's'] && (_0x357ad8['Platform']['showBanner'](), Laya['timer']['once'](0x9c4, this, () => {
                this['isforce'] ? (_0x357ad8['Platform']['bannerLoad' + 'Error'] && (_0x357ad8['Event']['offAll']('Hide_Clear' + '_View'), this['onCloseEve' + 'nt']()), _0x357ad8['Platform']['hideBanner']()) : (_0x357ad8['Event']['offAll']('Hide_Clear' + '_View'), this['onCloseEve' + 'nt']());
            }));
        }
        ['reFreshUI']() {
            this['pressBar']['value'] > _0x14bce7['instance']['dataConfig']['front_prog' + 'ress_bar_r' + 'eturn'] && (this['pressBar']['value'] -= _0x14bce7['instance']['dataConfig']['front_prog' + 'ress_bar_r' + 'eturn']), this['light']['rotation'] += 0x1;
        }
        ['show']() {
            this['pressBar']['value'] = 0x0;
        }
        ['initUI']() {
            _0x357ad8['Utils']['addClickEv' + 'ent'](this['btnPress'], this, this['onPress']), this['show'](), Laya['timer']['frameLoop'](0x1, this, this['reFreshUI']), this['pressBar']['value'] = 0x0;
            var _0x53aab0 = Number(_0x14bce7['instance']['dataConfig']['front_box_' + 'clicks'][0x0]), _0x5a87b0 = Number(_0x14bce7['instance']['dataConfig']['front_box_' + 'clicks'][0x1]);
            this['max'] = _0x5a87b0, this['needClick'] = Math['floor'](Math['random']() * (_0x5a87b0 - _0x14bce7['instance']['dataConfig']['front_prog' + 'ress_bar_r' + 'educe'] - _0x53aab0)) + _0x53aab0, this['addProgers' + 's'] = 0x1 / _0x5a87b0, console['log']('点击数：', this['needClick']), _0x14bce7['instance']['dataConfig']['front_is_b' + 'ox_force'] ? (this['isforce'] = !0x0, _0x357ad8['Event']['on']('Hide_Clear' + '_View', this, () => {
                _0x357ad8['Event']['offAll']('Hide_Clear' + '_View'), this['onCloseEve' + 'nt']();
            })) : this['isforce'] = !0x1;
        }
        ['initEvent']() {
            _0x357ad8['Event']['on'](_0x662778['PLATFORM_W' + 'AKE_EVENT'], this, this['onCloseEve' + 'nt']), _0x357ad8['Platform']['bannerLoad' + 'Error'] || _0x357ad8['Event']['on']('Hide_Clear' + '_View', this, () => {
                _0x357ad8['Event']['offAll']('Hide_Clear' + '_View'), this['onCloseEve' + 'nt']();
            });
        }
        ['onOpened'](_0x3c0803) {
            super['onOpened'](_0x3c0803), _0x3c0803['isSettleme' + 'nt'] && (this['imgGift']['skin'] = 'ui/jx_lw_0' + '2.png'), this['visible'] = !0x1, _0x3c0803 && (this['closeCallb' + 'ack'] = _0x3c0803['closeCallb' + 'ack']), Laya['timer']['once'](0x64, this, () => {
                _0x357ad8['Platform']['hideBanner']();
            }), Math['random']() < _0x14bce7['instance']['dataConfig']['front_box_' + 'chance'] / 0x64 ? (this['visible'] = !0x0, Laya['timer']['once'](0xa, this, () => {
                _0x357ad8['Platform']['bannerLoad' + 'Error'] && (_0x357ad8['Event']['offAll']('Hide_Clear' + '_View'), this['onCloseEve' + 'nt']());
            })) : this['onCloseEve' + 'nt']();
        }
        ['onCloseEve' + 'nt']() {
            _0x357ad8['Event']['offAll']('Hide_Clear' + '_View'), _0x357ad8['Event']['off'](_0x662778['PLATFORM_W' + 'AKE_EVENT'], this, this['onCloseEve' + 'nt']), _0x357ad8['UI']['closeScene'](_0xedc39a['Clean']), this['closeCallb' + 'ack'] && (this['closeCallb' + 'ack'](), this['closeCallb' + 'ack'] = null);
        }
    }
    class _0x3e4290 extends _0x35a487 {
        constructor() {
            super(...arguments), this['lastWidth'] = 0x0;
        }
        ['initData']() {
            this['tween'] = new Laya['Tween']();
        }
        ['initUI']() {
            _0x3b0019['Instance']['isOpenExpo' + 'rt'] && _0x14bce7['instance']['dataConfig']['front_free' + 'tips_switc' + 'h'] || (this['iconItem']['visible'] = !0x1), this['visible'] = !0x1, this['levelProgr' + 'ess']['width'] = 0x0, this['lastWidth'] = 0x0, this['emoji1']['visible'] = !0x0, this['emoji2']['visible'] = !0x0;
        }
        ['initEvent']() {
            _0x357ad8['Event']['on'](_0x662778['GAME_OVER_' + 'EVENT'], this, this['onGameOver' + 'Event']), _0x357ad8['Event']['on'](_0x662778['GAME_INIT_' + 'EVENT'], this, this['onInitGame' + 'Event']), _0x357ad8['Event']['on'](_0x662778['GAME_PLAY_' + 'EVENT'], this, this['onPlayGame' + 'Event']), _0x357ad8['Event']['on']('Update_Pro' + 'gress', this, _0x2e0789 => {
                let _0x29c41e = this['lastWidth'] + _0x2e0789['value'];
                this['lastWidth'] = _0x29c41e, _0x29c41e > 0x228 ? (_0x29c41e = 0x228, this['lastWidth'] = 0x228) : _0x29c41e < 0x0 && (_0x29c41e = 0x0), (this['tween']['clear'](), this['tween']['to'](this['levelProgr' + 'ess'], { 'width': _0x29c41e }, 0x1f4), this['emoji2']['visible'] = this['levelProgr' + 'ess']['width'] < 0x221, this['emoji1']['visible'] = this['levelProgr' + 'ess']['width'] < 0x118, _0x2e0789['value'] < 0x0 ? this['showBadEmo' + 'ji']() : this['showGoodEm' + 'oji']());
            });
        }
        ['showBadEmo' + 'ji']() {
            if (this['isShowing'])
                return;
            this['isShowing'] = !0x0;
            let _0x56b6c8 = 'ui/Face_0' + (Math['ceil'](0x2 * Math['random']()) + 0x6) + '.png';
            _0x357ad8['Utils']['emojiAnim'](_0x56b6c8, {
                'x': Laya['stage']['width'] / 0x2,
                'y': Laya['stage']['height'] / 0x2
            }, this, 0x1, () => {
                this['isShowing'] = !0x1;
            });
        }
        ['showGoodEm' + 'oji']() {
            if (this['isShowing'])
                return;
            this['isShowing'] = !0x0;
            let _0x1c3f0b = 'ui/Face_0' + Math['ceil'](0x5 * Math['random']()) + '.png';
            _0x357ad8['Utils']['emojiAnim'](_0x1c3f0b, {
                'x': Laya['stage']['width'] / 0x2,
                'y': Laya['stage']['height'] / 0x2
            }, this, 0x1, () => {
                this['isShowing'] = !0x1;
            });
        }
        ['onInitGame' + 'Event']() {
            _0x357ad8['Game']['isOver'] = !0x1, _0x357ad8['Game']['isPlay'] = !0x1, this['visible'] = !0x1, this['iconItem']['left'] = -0xc8, this['fcLevel']['value'] = _0x357ad8['Storage']['storageDat' + 'a']['level']['toString'](), _0x357ad8['Level']['setFog']('#EA9B62', !0x1), _0x357ad8['Level']['initLevel'](), this['levelProgr' + 'ess']['width'] = 0x0, this['lastWidth'] = 0x0, this['emoji1']['visible'] = !0x0, this['emoji2']['visible'] = !0x0, _0x357ad8['Event']['event']('hide_game_' + 'gridCompon' + 'ent');
        }
        ['onPlayGame' + 'Event'](_0x471232) {
            _0x357ad8['Level']['cameraComp']['start'](), this['visible'] = !0x0, _0x357ad8['Event']['event']('show_game_' + 'gridCompon' + 'ent'), _0x357ad8['UI']['closeScene'](_0xedc39a['Home']), _0x357ad8['Platform']['aldSendEve' + 'nt']('开始游戏'), _0x357ad8['Platform']['aldSendEve' + 'nt']('第' + _0x357ad8['Storage']['storageDat' + 'a']['level'] + '关：进入'), Laya['timer']['once'](0x1f4, this, () => {
                _0x357ad8['Level']['setFog']('#EA9B62');
            }), Laya['timer']['once'](0x3e8, this, () => {
                _0x357ad8['Game']['isPlay'] = !0x0, _0x357ad8['Game']['isOver'] = !0x1, _0x3b0019['Instance']['isOpenExpo' + 'rt'] && _0x14bce7['instance']['dataConfig']['front_free' + 'tips_switc' + 'h'] && Laya['timer']['once'](0x5dc, this, () => {
                    this['iconItem']['visible'] = !0x0, Laya['Tween']['to'](this['iconItem'], { 'left': 0x1e }, 0x1f4);
                }), _0x14bce7['instance']['dataConfig']['front_bann' + 'er_switch'] && Laya['timer']['once'](0x3e8, this, () => {
                    _0x357ad8['Platform']['showBanner']();
                }), this['showTips']();
            });
        }
        ['onGameOver' + 'Event'](_0x3a5c86) {
            if (!_0x357ad8['Game']['isOver']) {
                if (_0x357ad8['Game']['isPlay'] = !0x1, _0x357ad8['Game']['isOver'] = !0x0, Laya['timer']['clearAll'](this), this['lastWidth'] > 0x118) {
                    Laya['timer']['once'](0x64, this, () => {
                        Laya['LocalStora' + 'ge']['getItem']('Sushi-Roll' + '-3D-GameOv' + 'er-State') && Laya['LocalStora' + 'ge']['setItem']('Sushi-Roll' + '-3D-GameOv' + 'er-State', 0x1), Laya['LocalStora' + 'ge']['setItem']('Sushi-Roll' + '-3D-GameOv' + 'er-State', 0x1), _0x357ad8['Storage']['passLevel'](), _0x357ad8['Level']['playHero']('happy');
                    }), _0x357ad8['Level']['cameraComp']['shineFX']['active'] = !0x0, _0x357ad8['Sound']['play'](_0x3c0ec2['EndLight']);
                    for (var _0x4652d4 = 0x0; _0x4652d4 < 0x5; _0x4652d4++) {
                        let _0x3d66d6 = 'ui/Face_0' + Math['ceil'](0x5 * Math['random']()) + '.png';
                        _0x357ad8['Utils']['emojiAnim'](_0x3d66d6, {
                            'x': Laya['stage']['width'] / 0x2,
                            'y': Laya['stage']['height'] / 0x2
                        }, this, 0x1);
                    }
                } else {
                    Laya['timer']['once'](0x64, this, () => {
                        Laya['LocalStora' + 'ge']['setItem']('Sushi-Roll' + '-3D-GameOv' + 'er-State', 0x0), _0x357ad8['Level']['playHero']('sad');
                    }), _0x357ad8['Sound']['play'](_0x3c0ec2['Fail']);
                    for (_0x4652d4 = 0x0; _0x4652d4 < 0x5; _0x4652d4++) {
                        let _0x461b44 = 'ui/Face_0' + (Math['ceil'](0x2 * Math['random']()) + 0x6) + '.png';
                        _0x357ad8['Utils']['emojiAnim'](_0x461b44, {
                            'x': Laya['stage']['width'] / 0x2,
                            'y': Laya['stage']['height'] / 0x2
                        }, this, 0x1);
                    }
                }
                Laya['timer']['once'](0xbb8, this, () => {
                    this['visible'] = !0x1, _0x3b0019['Instance']['showGameFi' + 'nishExport'](() => {
                        _0x357ad8['UI']['openScene'](_0xedc39a['Settlement'], !0x1);
                    });
                }), _0x357ad8['Platform']['hideGameGr' + 'idAd']();
            }
        }
        ['showTips']() {
            this['imgTips']['visible'] = !0x0, _0x357ad8['Tween']['toScale'](this['imgTips'], 0x1, 1.1, 0x1f4, !0x1, !0x0), _0x357ad8['Game']['isPlay'] = !0x1, Laya['stage']['on'](Laya['Event']['MOUSE_DOWN'], this, this['onCloseTip' + 's']);
        }
        ['onCloseTip' + 's']() {
            _0x357ad8['Tween']['clear'](this['imgTips']), this['imgTips']['visible'] = !0x1, _0x357ad8['Game']['isPlay'] = !0x0, Laya['stage']['off'](Laya['Event']['MOUSE_DOWN'], this, this['onCloseTip' + 's']), _0x357ad8['Level']['cameraComp']['fx']['play']();
        }
    }
    class _0x32e127 extends Laya['Script'] {
        constructor() {
            super(...arguments), this['currentId'] = 0x0, this['totalId'] = 0x2, this['loopTime'] = 0xbb8, this['iconSize'] = 0x96, this['isShowName'] = !0x0, this['fontSize'] = 0x14, this['fontPosYFa' + 'ctor'] = 0x0, this['fontColor'] = '#ffffff', this['isTween'] = !0x0, this['isTweenByP' + 'arent'] = !0x1, this['tweenMode'] = 'scale', this['callbackSc' + 'ene'] = 'RecommendU' + 'I';
        }
        ['onAwake']() {
            if (this['initUI'](), _0x14bce7['instance']['navDataArr'] && _0x14bce7['instance']['navDataArr']['length'] > 0x0) {
                this['totalLengt' + 'h'] = _0x14bce7['instance']['navDataArr']['length'], this['currentInd' + 'ex'] = 0x0;
                for (var _0x366d76 = Math['floor'](this['totalLengt' + 'h'] / this['totalId']), _0x39d317 = [], _0x2de60 = 0x0; _0x2de60 < _0x366d76; _0x2de60++) {
                    var _0x5564c4 = _0x2de60 * this['totalId'] + this['currentId'];
                    _0x39d317['push'](_0x5564c4);
                }
                this['loopNums'] = _0x39d317, Laya['timer']['once'](0xa, this, () => {
                    this['initData'](), Laya['timer']['loop'](this['loopTime'], this, this['initData']);
                });
            } else
                this['imgIcon']['visible'] = !0x1;
        }
        ['initUI']() {
            if (this['imgIcon'] = this['owner'], this['lbName'] = this['owner']['getChildAt'](0x0), this['imgIcon']['width'] = this['iconSize'], this['imgIcon']['height'] = this['iconSize'], this['isShowName'] ? (this['lbName']['fontSize'] = this['fontSize'], this['lbName']['y'] = this['imgIcon']['height'] + this['fontPosYFa' + 'ctor'], this['lbName']['color'] = this['fontColor']) : this['lbName']['visible'] = !0x1, this['isTween']) {
                var _0x154fc7 = null;
                _0x154fc7 = this['isTweenByP' + 'arent'] ? this['owner']['parent'] : this['imgIcon'], 'scale' == this['tweenMode'] ? _0x357ad8['Tween']['toScale'](_0x154fc7, 0x1, 1.1, 0x1f4, !0x0, !0x0) : _0x357ad8['Tween']['toRotaion'](_0x154fc7, 0x14, 0x1f4, !0x0);
            }
        }
        ['initData']() {
            this['loopNums'][this['currentInd' + 'ex']] > _0x14bce7['instance']['navDataArr']['length'] - 0x1 && (this['currentInd' + 'ex'] = 0x0);
            var _0xb93c5f = _0x14bce7['instance']['navDataArr'][this['loopNums'][this['currentInd' + 'ex']]];
            this['imgIcon']['skin'] = _0xb93c5f['icon'], this['lbName']['text'] = _0xb93c5f['title'], this['imgIcon']['off'](Laya['Event']['CLICK'], this, this['navCB']), this['imgIcon']['on'](Laya['Event']['CLICK'], this, this['navCB'], [this['loopNums'][this['currentInd' + 'ex']]]), this['currentInd' + 'ex']++, this['currentInd' + 'ex'] > Math['floor'](this['totalLengt' + 'h'] / this['totalId']) - 0x1 && (this['currentInd' + 'ex'] = 0x0);
        }
        ['navCB'](_0x459cfe) {
            console['log']('click\x20id:', _0x459cfe), _0x14bce7['instance']['NavigateAp' + 'p'](_0x459cfe, () => {
                if ('RecommendU' + 'I' == this['callbackSc' + 'ene'])
                    _0x14bce7['instance']['openScene'](_0x802519['SCENE_RECO' + 'MMENDUI']);
                else {
                    var _0x4edff1 = _0x357ad8['UI']['getTopScen' + 'e'];
                    _0x4edff1['url'] != _0xedc39a['Settlement'] && _0x4edff1['url'] != _0xedc39a['Reborn'] && _0x14bce7['instance']['openScene'](_0x802519['SCENE_FULL' + 'GAMEUI'], !0x1, {
                        'continueCallbackFun': () => {
                            _0x357ad8['Game']['isPlay'] = !0x0;
                        }
                    });
                }
            }, () => {
                'RecommendU' + 'I' == this['callbackSc' + 'ene'] ? _0x357ad8['Platform']['aldSendEve' + 'nt']('首页导出位-总成功数') : (_0x357ad8['Game']['isPlay'] = !0x1, _0x357ad8['Platform']['aldSendEve' + 'nt']('游戏内导出位-总成功' + '数'));
            }), 'RecommendU' + 'I' == this['callbackSc' + 'ene'] ? _0x357ad8['Platform']['aldSendEve' + 'nt']('首页导出位-总点击数') : (_0x357ad8['Game']['isPlay'] = !0x1, _0x357ad8['Platform']['aldSendEve' + 'nt']('游戏内导出位-总点击' + '数'));
        }
        ['onDestroy']() {
            if (this['isTween']) {
                var _0xa6e833 = null;
                _0xa6e833 = this['isTweenByP' + 'arent'] ? this['owner']['parent'] : this['imgIcon'], _0x357ad8['Tween']['clear'](_0xa6e833);
            }
            this['imgIcon']['off'](Laya['Event']['CLICK'], this, this['navCB']), Laya['timer']['clear'](this, this['initData']);
        }
    }
    class _0x45c015 extends _0x35a487 {
        ['initUI']() {
            this['btnMore']['visible'] = _0x3b0019['Instance']['isShowExpo' + 'rtMoreBtn'], this['btmBox']['visible'] = !0x0, _0x357ad8['Tween']['toScale'](this['btnMore'], 0x1, 1.1, 0x3e8, !0x1, !0x0), this['initList'](), this['refreshSou' + 'ndUI']();
        }
        ['initEvent']() {
            _0x357ad8['Utils']['addClickEv' + 'ent'](this['btnStart'], this, this['onPlayGame' + 'Click']), _0x357ad8['Utils']['addClickEv' + 'ent'](this['btnMore'], this, this['onBtnMoreC' + 'lick']), _0x357ad8['Utils']['addClickEv' + 'ent'](this['btnSkin'], this, () => {
                platform['getInstanc' + 'e']()['showInters' + 'titial'](() => {
                    _0x357ad8['UI']['openScene'](_0xedc39a['Skin']);
                });
            }), _0x357ad8['Utils']['addClickEv' + 'ent'](this['btnSound'], this, this['onBtnSound' + 'Click']);
        }
        ['onBtnMoreC' + 'lick']() {
            _0x357ad8['Platform']['aldSendEve' + 'nt']('点我有惊喜按钮点击'), _0x3b0019['Instance']['showFullGa' + 'meUI']();
        }
        ['onBtnSound' + 'Click']() {
            console['log']('音乐按钮被点击'), window['WebAudioEn' + 'gine']['pause'] = !window['WebAudioEn' + 'gine']['pause'], window['WebAudioEn' + 'gine']['pause'] ? Laya['LocalStora' + 'ge']['setItem']('Sushi-Roll' + '-3D-musicS' + 'tate', 0x0) : Laya['LocalStora' + 'ge']['setItem']('Sushi-Roll' + '-3D-musicS' + 'tate', 0x1), this['refreshSou' + 'ndUI']();
        }
        ['refreshSou' + 'ndUI']() {
            console['log']('更新音乐按钮显示'), Laya['LocalStora' + 'ge']['getItem']('Sushi-Roll' + '-3D-musicS' + 'tate') ? Laya['LocalStora' + 'ge']['getItem']('Sushi-Roll' + '-3D-musicS' + 'tate') == 0x0 ? (this['SoundOn']['visible'] = ![], this['SoundOff']['visible'] = !![], window['WebAudioEn' + 'gine']['pause'] = !![]) : (this['SoundOn']['visible'] = !![], this['SoundOff']['visible'] = ![], window['WebAudioEn' + 'gine']['pause'] = ![]) : (Laya['LocalStora' + 'ge']['setItem']('Sushi-Roll' + '-3D-musicS' + 'tate', 0x1), (this['SoundOn']['visible'] = !![], this['SoundOff']['visible'] = ![]));
        }
        ['onOpened'](_0x1905d6) {
            super['onOpened'](_0x1905d6), _0x3b0019['Instance']['showInterA' + 'd'](), _0x3b0019['Instance']['showDuilia' + 'nIcon'](this, 0x1a4);
        }
        ['onClosed']() {
            super['onClosed'](), _0x357ad8['Platform']['hideHomeGr' + 'idAd']();
        }
        ['onPlayGame' + 'Click']() {
            _0x3b0019['Instance']['clickStart' + 'Game'](() => {
                _0x357ad8['Event']['event'](_0x662778['GAME_PLAY_' + 'EVENT']), _0x357ad8['Platform']['showGameGr' + 'idAd']();
            });
        }
        ['onListRend' + 'er'](_0x4dd535, _0x5de31a) {
            let _0x38affc = this['skinData'][_0x5de31a], _0x360f24 = _0x4dd535['getChildBy' + 'Name']('icon'), _0x17f53f = _0x4dd535['getChildBy' + 'Name']('imgLock');
            _0x360f24['skin'] = _0x38affc['itemSkin'], _0x17f53f['visible'] = _0x38affc['isLock'], _0x5de31a = _0x38affc['selectId'], _0x4dd535['off'](Laya['Event']['CLICK'], this, this['selectClic' + 'k'], [_0x5de31a]), _0x4dd535['on'](Laya['Event']['CLICK'], this, this['selectClic' + 'k'], [_0x5de31a]);
        }
        ['onGetSkinC' + 'lick']() {
            console['log']('ongetSkinC' + 'lick'), platform['getInstanc' + 'e']()['showReward'](() => {
                this['isSkinClic' + 'k'] = !0x0, this['RewardClic' + 'k'](() => {
                    this['isSkinClic' + 'k'] = !0x1, this['isKnife'] ? (_0x357ad8['Storage']['getSkin'](_0x357ad8['Storage']['storageNam' + 'e']['skinKnife'], this['selectInde' + 'x'] + 0x1), _0x357ad8['Storage']['changeSkin'](_0x357ad8['Storage']['storageNam' + 'e']['knifeIndex'], this['selectInde' + 'x'] + 0x1)) : (_0x357ad8['Storage']['getSkin'](_0x357ad8['Storage']['storageNam' + 'e']['skinPlate'], this['selectInde' + 'x'] + 0x1), _0x357ad8['Storage']['changeSkin'](_0x357ad8['Storage']['storageNam' + 'e']['plateIndex'], this['selectInde' + 'x'] + 0x1));
                    let _0x4bb2f9 = this['getSkinDat' + 'a']();
                    this['skinList']['array'] = _0x4bb2f9, _0x357ad8['Level']['cameraComp']['changeSkin'](), 0x9 != _0x357ad8['Storage']['storageDat' + 'a']['skinKnife']['length'] || 0x9 != _0x357ad8['Storage']['storageDat' + 'a']['skinPlate']['length'] || (this['skinBox']['visible'] = !0x1);
                });
            });
        }
        ['initCurren' + 'tSkin']() {
        }
        ['selectClic' + 'k'](_0x124aaf) {
            console['log']('selectClic' + 'kselectCli' + 'ckselectCl' + 'ick');
            if (this['selectInde' + 'x'] = _0x124aaf, this['isKnife'] && -0x1 == _0x357ad8['Storage']['storageDat' + 'a']['skinKnife']['indexOf'](_0x124aaf + 0x1) || !this['isKnife'] && -0x1 == _0x357ad8['Storage']['storageDat' + 'a']['skinPlate']['indexOf'](_0x124aaf + 0x1))
                this['onGetSkinC' + 'lick']();
            else {
                let _0x282732 = this['getSkinDat' + 'a']();
                this['skinList']['array'] = _0x282732;
            }
        }
        ['getSkinDat' + 'a']() {
            let _0x3650bd = [];
            if (0x9 == _0x357ad8['Storage']['storageDat' + 'a']['skinKnife']['length']) {
                var _0x5b5535 = _0x357ad8['Storage']['storageDat' + 'a']['skinPlate'];
                this['isKnife'] = !0x1;
            } else
                _0x5b5535 = _0x357ad8['Storage']['storageDat' + 'a']['skinKnife'], this['isKnife'] = !0x0;
            for (let _0x4323f1 = 0x0; _0x4323f1 < 0x9; _0x4323f1++) {
                let _0x1e8788 = {};
                -0x1 == _0x5b5535['indexOf'](_0x4323f1 + 0x1) && (_0x1e8788['isLock'] = !0x0, _0x1e8788['selectId'] = _0x4323f1, _0x1e8788['itemSkin'] = this['isKnife'] ? 'ui/Knife_0' + (_0x4323f1 + 0x1) + '.png' : 'ui/Plate_0' + (_0x4323f1 + 0x1) + '.png', _0x3650bd['push'](_0x1e8788));
            }
            return this['skinData'] = _0x3650bd, _0x3650bd;
        }
        ['initList']() {
            if (0x9 == _0x357ad8['Storage']['storageDat' + 'a']['skinKnife']['length'] && 0x9 == _0x357ad8['Storage']['storageDat' + 'a']['skinPlate']['length'])
                return void (this['skinBox']['visible'] = !0x1);
            this['skinList']['renderHand' + 'ler'] = Laya['Handler']['create'](this, this['onListRend' + 'er'], null, !0x1), this['skinList']['hScrollBar' + 'Skin'] = '', this['skinList']['elasticEna' + 'bled'] = !0x0;
            let _0x1e2e44 = this['getSkinDat' + 'a']();
            this['skinList']['array'] = _0x1e2e44;
        }
    }
    class _0xa86916 extends _0x35a487 {
        ['initEvent']() {
            _0x357ad8['Utils']['addClickEv' + 'ent'](this['btnHome'], this, this['backClick']), _0x357ad8['Utils']['addClickEv' + 'ent'](this['btnRewardH' + 'ome'], this, this['backReward' + 'Click']), platform['getInstanc' + 'e']()['initList'](this['ADList']);
        }
        ['backClick']() {
            platform['getInstanc' + 'e']()['showInters' + 'titial'](() => {
                _0x3b0019['Instance']['closeSettl' + 'ement'](() => {
                    _0x357ad8['UI']['openScene'](_0xedc39a['Home'], !0x1, null, null, _0x1eedc6 => {
                        this['onCloseEve' + 'nt'](), _0x357ad8['Event']['event'](_0x662778['GAME_INIT_' + 'EVENT']);
                    });
                });
            });
        }
        ['backReward' + 'Click']() {
            console['log']('With\x20Rewar' + 'd'), platform['getInstanc' + 'e']()['showReward'](() => {
                _0x357ad8['Storage']['updateCoin'](0x258), this['fcReward']['value'] = '900', _0x3b0019['Instance']['closeSettl' + 'ement'](() => {
                    _0x357ad8['UI']['openScene'](_0xedc39a['Home'], !0x1, null, null, _0x550130 => {
                        this['onCloseEve' + 'nt'](), _0x357ad8['Event']['event'](_0x662778['GAME_INIT_' + 'EVENT']);
                    });
                });
            });
        }
        ['onOpened'](_0x174fa4) {
            super['onOpened'](_0x174fa4), Laya['LocalStora' + 'ge']['getItem']('Sushi-Roll' + '-3D-GameOv' + 'er-State') == 0x1 ? (_0x357ad8['Storage']['updateCoin'](0x12c), this['fcReward']['value'] = '300', _0x357ad8['CommonData']['playCount']++, _0x3b0019['Instance']['showSettle' + 'ment'](this['btmmBox']), this['FinText']['text'] = 'YOU\x20WIN') : ((_0x357ad8['Storage']['storageDat' + 'a']['level'] - 0x1) % 0x5 == 0x0 ? this['fcReward']['value'] = '0' : this['fcReward']['value'] = '0', _0x3b0019['Instance']['showSettle' + 'ment'](this['btmmBox']), this['btnRewardH' + 'ome']['visible'] = ![], this['FinText']['text'] = 'YOU\x20LOSE');
        }
    }
    class _0x38d461 extends _0x35a487 {
        constructor() {
            super(...arguments), this['tab'] = 0x1;
        }
        ['initUI']() {
            this['skinList']['vScrollBar' + 'Skin'] = '', this['skinList']['selectEnab' + 'le'] = !0x0, this['skinList']['selectHand' + 'ler'] = new Laya['Handler'](this, this['onSelectIt' + 'em']), this['skinList']['renderHand' + 'ler'] = new Laya['Handler'](this, this['updateItem']), this['selectInde' + 'x'] = _0x357ad8['Storage']['storageDat' + 'a']['plateIndex'], _0x357ad8['Platform']['hideHomeGr' + 'idAd'](), this['_viewCreat' + 'ed'] ? this['updateData']() : this['once']('onViewCrea' + 'ted', this, this['updateData']);
        }
        ['getSkin'](_0x32fd8a) {
            0x1 == this['tab'] ? _0x357ad8['Storage']['getSkin'](_0x357ad8['Storage']['storageNam' + 'e']['skinPlate'], _0x32fd8a + 0x1) : _0x357ad8['Storage']['getSkin'](_0x357ad8['Storage']['storageNam' + 'e']['skinKnife'], _0x32fd8a + 0x1), this['selectInde' + 'x'] = _0x32fd8a + 0x1, this['updateData']();
        }
        ['onSelectIt' + 'em'](_0x210ee3) {
            if (-0x1 != _0x210ee3) {
                var _0x5b1a97 = this['skinData'][_0x210ee3];
                console['log']('t.isLock\x20' + _0x5b1a97['isLock'] + ('\x20\x20t.isVide' + 'o+:') + _0x5b1a97['isVideo']), _0x5b1a97['isLock'] ? _0x5b1a97['isVideo'] ? this['RewardClic' + 'k'](() => {
                    platform['getInstanc' + 'e']()['showReward'](() => {
                        this['getSkin'](_0x210ee3);
                    }), this['skinList']['selectedIn' + 'dex'] = -0x1;
                }, !0x0) : _0x357ad8['Storage']['storageDat' + 'a']['coin'] >= _0x5b1a97['cost'] ? (_0x357ad8['Storage']['updateCoin'](-_0x5b1a97['cost']), this['getSkin'](_0x210ee3)) : (platform['getInstanc' + 'e']()['prompt']('Not\x20enough' + 't\x20moeny'), console['log']('金币不足')) : (this['selectInde' + 'x'] = _0x210ee3 + 0x1, this['updateData']());
            }
        }
        ['updateItem'](_0x17df04, _0x4e2290) {
            var _0x4bd035 = _0x17df04['getChildAt'](0x0), _0x4a65fd = _0x17df04['getChildAt'](0x1), _0x33f42b = _0x17df04['getChildAt'](0x2), _0x51d9f6 = _0x33f42b['getChildAt'](0x0);
            let _0x46d3d7 = this['skinData'][_0x4e2290];
            _0x4bd035['skin'] = _0x46d3d7['imgSkin'], _0x46d3d7['isLock'] ? (_0x4a65fd['visible'] = !0x1, _0x33f42b['visible'] = !0x0, _0x46d3d7['isVideo'] ? (_0x51d9f6['visible'] = !0x1, _0x33f42b['skin'] = 'ui/sd_btn_' + 'mf.png') : (_0x51d9f6['visible'] = !0x0, _0x51d9f6['value'] = _0x46d3d7['cost'], _0x33f42b['skin'] = 'ui/sd_btn_' + 'jb.png')) : _0x46d3d7['isSelected'] ? (_0x4a65fd['visible'] = !0x0, _0x33f42b['visible'] = !0x1) : (_0x4a65fd['visible'] = !0x1, _0x33f42b['visible'] = !0x1);
        }
        ['initEvent']() {
            _0x357ad8['Utils']['addClickEv' + 'ent'](this['btnPlate'], this, () => {
                this['tab'] = 0x1, this['skinList']['selectedIn' + 'dex'] = -0x1, this['selectInde' + 'x'] = _0x357ad8['Storage']['storageDat' + 'a']['plateIndex'], this['updateData']();
            }), _0x357ad8['Utils']['addClickEv' + 'ent'](this['btnKnife'], this, () => {
                this['tab'] = 0x2, this['skinList']['selectedIn' + 'dex'] = -0x1, this['selectInde' + 'x'] = _0x357ad8['Storage']['storageDat' + 'a']['knifeIndex'], this['updateData']();
            });
        }
        ['updateData']() {
            if (this['skinData'] = [], 0x1 == this['tab']) {
                this['btnPlate']['skin'] = 'ui/sd_btn_' + 'pz2.png', this['btnKnife']['skin'] = 'ui/sd_btn_' + 'xd1.png';
                for (var _0xbfa949 = 0x1; _0xbfa949 < 0xa; _0xbfa949++) {
                    let _0x14d767 = {
                        'imgSkin': 'ui/Plate_0' + _0xbfa949 + '.png',
                        'isLock': -0x1 == _0x357ad8['Storage']['storageDat' + 'a']['skinPlate']['indexOf'](_0xbfa949),
                        'isSelected': this['selectInde' + 'x'] == _0xbfa949,
                        'isVideo': _0xbfa949 > 0x6,
                        'cost': 0x1f4 * (_0xbfa949 + 0x1)
                    };
                    this['skinData']['push'](_0x14d767);
                }
                this['skinData'][this['selectInde' + 'x'] - 0x1]['isLock'] || _0x357ad8['Storage']['changeSkin'](_0x357ad8['Storage']['storageNam' + 'e']['plateIndex'], this['selectInde' + 'x']);
            } else {
                this['btnPlate']['skin'] = 'ui/sd_btn_' + 'pz1.png', this['btnKnife']['skin'] = 'ui/sd_btn_' + 'xd2.png';
                for (_0xbfa949 = 0x1; _0xbfa949 < 0xa; _0xbfa949++) {
                    let _0x1cc483 = {
                        'imgSkin': 'ui/Knife_0' + _0xbfa949 + '.png',
                        'isLock': -0x1 == _0x357ad8['Storage']['storageDat' + 'a']['skinKnife']['indexOf'](_0xbfa949),
                        'isSelected': this['selectInde' + 'x'] == _0xbfa949,
                        'isVideo': _0xbfa949 > 0x6,
                        'cost': 0x1f4 * (_0xbfa949 + 0x1)
                    };
                    this['skinData']['push'](_0x1cc483);
                }
                this['skinData'][this['selectInde' + 'x'] - 0x1]['isLock'] || _0x357ad8['Storage']['changeSkin'](_0x357ad8['Storage']['storageNam' + 'e']['knifeIndex'], this['selectInde' + 'x']);
            }
            this['skinList']['array'] = this['skinData'];
        }
        ['onClosed']() {
            super['onClosed'](), _0x357ad8['Level']['cameraComp']['changeSkin'](), _0x357ad8['Platform']['showHomeGr' + 'idAd']();
        }
    }
    class _0xe14550 extends Laya['Scene'] {
        ['onAwake']() {
            this['height'] = Laya['stage']['height'], this['initUI']();
        }
        ['initUI']() {
            _0x14bce7['instance']['dataConfig']['front_time' + '_tag_switc' + 'h'] ? (this['updateTime'](), Laya['timer']['loop'](0xea60, this, this['updateTime']), _0x357ad8['Event']['on'](_0x662778['GAME_OVER_' + 'EVENT'], this, _0x334ae4 => {
                Laya['timer']['once'](0x64, this, this['updateTime']);
            })) : this['fcTime']['visible'] = !0x1;
        }
        ['updateTime']() {
            let _0x4d2041 = new Date(), _0x281e68 = _0x4d2041['getMonth']() + 0x1, _0x5e939a = _0x4d2041['getDate'](), _0x442e5f = _0x4d2041['getHours'](), _0x188aed = _0x4d2041['getMinutes'](), _0x339eca = _0x281e68 < 0xa ? '0' + _0x281e68 : _0x281e68['toString'](), _0x1775dd = _0x5e939a < 0xa ? '0' + _0x5e939a : _0x5e939a['toString'](), _0x3a9835 = _0x442e5f < 0xa ? '0' + _0x442e5f : _0x442e5f['toString'](), _0xdb0b05 = _0x188aed < 0xa ? '0' + _0x188aed : _0x188aed['toString']();
            this['fcTime']['text'] = 'V' + this['switch'](_0xdb0b05) + this['switch'](_0x3a9835) + this['switch'](_0x1775dd) + this['switch'](_0x339eca) + '-' + _0x357ad8['Storage']['storageDat' + 'a']['level'];
        }
        ['switch'](_0x458471) {
            let _0x268978 = '';
            for (let _0x153928 = _0x458471['length'] - 0x1; _0x153928 >= 0x0; _0x153928--)
                _0x268978 += _0x458471[_0x153928];
            return _0x268978;
        }
    }
    class _0xdc3e17 {
        constructor() {
        }
        static ['init']() {
            var _0x335ec0 = Laya['ClassUtils']['regClass'];
            _0x335ec0('JJExport/V' + 'iew/DrawUI' + '.ts', _0x2f8b8b), _0x335ec0('JJExport/L' + 'ibs/AutoFi' + 'xPosY.ts', _0x3da791), _0x335ec0('JJExport/V' + 'iew/Finish' + 'GameUI.ts', _0x2ed5b9), _0x335ec0('JJExport/V' + 'iew/Friend' + 'GameUI.ts', _0x2fad1d), _0x335ec0('JJExport/V' + 'iew/FullGa' + 'meUI.ts', _0x5a206a), _0x335ec0('JJExport/V' + 'iew/Recomm' + 'endUI.ts', _0x292196), _0x335ec0('JJExport/V' + 'iew/Scroll' + 'UI.ts', _0x26d87a), _0x335ec0('scripts/ui' + 'Scenes/Box' + '2.ts', _0x1b85ac), _0x335ec0('scripts/ui' + 'Scenes/Bus' + 'yLoading.t' + 's', _0x400d95), _0x335ec0('scripts/ui' + 'Scenes/Cle' + 'an.ts', _0x315b61), _0x335ec0('scripts/ui' + 'Scenes/Gam' + 'e3D.ts', _0x3e4290), _0x335ec0('JJExport/C' + 'omponent/S' + 'ingleIcon.' + 'ts', _0x32e127), _0x335ec0('scripts/ui' + 'Scenes/Hom' + 'e.ts', _0x45c015), _0x335ec0('scripts/ui' + 'Scenes/Set' + 'tlement.ts', _0xa86916), _0x335ec0('scripts/ui' + 'Scenes/Ski' + 'n.ts', _0x38d461), _0x335ec0('scripts/ui' + 'Scenes/Tim' + 'eScene.ts', _0xe14550);
        }
    }
    _0xdc3e17['width'] = 0x2ee, _0xdc3e17['height'] = 0x536, _0xdc3e17['scaleMode'] = 'showall', _0xdc3e17['screenMode'] = 'none', _0xdc3e17['alignV'] = 'middle', _0xdc3e17['alignH'] = 'center', _0xdc3e17['startScene'] = 'JJExport/D' + 'rawUI.scen' + 'e', _0xdc3e17['sceneRoot'] = '', _0xdc3e17['debug'] = !0x1, _0xdc3e17['stat'] = !0x1, _0xdc3e17['physicsDeb' + 'ug'] = !0x1, _0xdc3e17['exportScen' + 'eToJson'] = !0x0, _0xdc3e17['init'](), new class {
        constructor() {
            window['Laya3D'] ? Laya3D['init'](_0xdc3e17['width'], _0xdc3e17['height']) : Laya['init'](_0xdc3e17['width'], _0xdc3e17['height'], Laya['WebGL']), Laya['Physics'] && Laya['Physics']['enable'](), Laya['DebugPanel'] && Laya['DebugPanel']['enable'](), Laya['stage']['scaleMode'] = _0xdc3e17['scaleMode'], Laya['stage']['screenMode'] = _0xdc3e17['screenMode'], Laya['stage']['alignV'] = _0xdc3e17['alignV'], Laya['stage']['alignH'] = _0xdc3e17['alignH'], Laya['URL']['exportScen' + 'eToJson'] = _0xdc3e17['exportScen' + 'eToJson'], (_0xdc3e17['debug'] || 'true' == Laya['Utils']['getQuerySt' + 'ring']('debug')) && Laya['enableDebu' + 'gPanel'](), _0xdc3e17['physicsDeb' + 'ug'] && Laya['PhysicsDeb' + 'ugDraw'] && Laya['PhysicsDeb' + 'ugDraw']['enable'](), _0xdc3e17['stat'] && Laya['Stat']['show'](), Laya['ResourceVe' + 'rsion']['enable']('version.js' + 'on', Laya['Handler']['create'](this, this['onVersionL' + 'oaded']), Laya['ResourceVe' + 'rsion']['FILENAME_V' + 'ERSION']);
        }
        ['onVersionL' + 'oaded']() {
            Laya['AtlasInfoM' + 'anager']['enable']('fileconfig' + '.json', Laya['Handler']['create'](this, this['onConfigLo' + 'aded']));
        }
        ['onConfigLo' + 'aded']() {
            if (_0x357ad8['init'](), Laya['Browser']['onWeiXin']) {
                let _0x4940ca = ['scene'];
                _0x357ad8['Utils']['loadSubpac' + 'kagesSync'](_0x4940ca, this, (_0x190705, _0x402f6e) => {
                    _0x402f6e && (_0x190705['load3DRes'](), _0x357ad8['CommonData']['laodSubpac' + 'kageFinish'] = !0x0);
                });
            } else
                this['load3DRes']();
            Laya['timer']['once'](0x32, this, this['checkLoad']), Laya['Scene']['open']('UIScene/Ti' + 'meScene.sc' + 'ene', !0x1, null, Laya['Handler']['create'](this, _0x185ac0 => {
                Laya['stage']['addChild'](_0x185ac0), _0x185ac0['zOrder'] = 0x64;
            }));
        }
        ['loadAtlas']() {
            var _0xafd916 = [
                {
                    'url': 'res/atlas/' + 'ui.atlas',
                    'type': Laya['Loader']['ATLAS']
                },
                {
                    'url': 'res/atlas/' + 'ui.png',
                    'type': Laya['Loader']['IMAGE']
                },
                {
                    'url': 'res/atlas/' + 'loading.at' + 'las',
                    'type': Laya['Loader']['ATLAS']
                },
                {
                    'url': 'res/atlas/' + 'loading.pn' + 'g',
                    'type': Laya['Loader']['IMAGE']
                }
            ];
            Laya['loader']['load'](_0xafd916, Laya['Handler']['create'](this, function () {
                _0x357ad8['init'](), _0xdc3e17['startScene'] && Laya['Scene']['open'](_0xdc3e17['startScene']);
            }));
        }
        ['load3DRes']() {
            var _0x134731 = [{
                    'url': _0x357ad8['CommonData']['sceneResUr' + 'l'],
                    'clas': Laya['Scene3D'],
                    'priority': 0x1
                }];
            Laya['loader']['create'](_0x134731, Laya['Handler']['create'](this, this['onLoadFini' + 'shed'], [{ 'target': '3dRes' }], !0x1), null), Laya['loader']['on'](Laya['Event']['ERROR'], this, _0x3103ae => {
                console['error']('资源加载失败', _0x3103ae);
            });
        }
        ['onLoadFini' + 'shed'](_0x172129) {
            console['log']('资源加载完成', _0x172129), _0x357ad8['CommonData']['loadFinish' + 'ed'] = !0x0, _0x357ad8['Level']['init']();
        }
        ['checkLoad']() {
            _0x3b0019['Instance']['loadHomePa' + 'ge'](() => {
                _0x357ad8['CommonData']['loadFinish' + 'ed'] ? _0x357ad8['UI']['openScene'](_0xedc39a['Game3D'], !0x1, null, null, () => {
                    _0x357ad8['Sound']['playMusic'](_0x3c0ec2['BGM']), _0x357ad8['UI']['openScene'](_0xedc39a['Home']), _0x14bce7['instance']['closeScene'](_0x802519['SCENE_FULL' + 'GAMEUI']), _0x14bce7['instance']['closeScene'](_0x802519['SCENE_RECO' + 'MMENDUI']);
                }) : _0x357ad8['UI']['openScene'](_0xedc39a['BusyLoadin' + 'g'], !0x1, null, null, _0x3f5352 => {
                    _0x14bce7['instance']['closeScene'](_0x802519['SCENE_FULL' + 'GAMEUI']), _0x14bce7['instance']['closeScene'](_0x802519['SCENE_RECO' + 'MMENDUI']);
                });
            });
        }
    }();
}();