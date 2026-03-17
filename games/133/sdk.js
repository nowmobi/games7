!function () {
    class _0x41795a {
        constructor() {
            this['canNavigat' + 'eActive_'] = ![], this['screen_'] = '', this['action_'] = '', this['to_'] = '', this['prompt_'] = null, this['initialize' + 'd_'] = ![], this['initData']();
        }
        static ['getInstanc' + 'e']() {
            return !this['_instance'] && (this['_instance'] = new _0x41795a()), this['_instance'];
        }
        ['initData']() {
            let _0x51afcd = document['getElement' + 'ById']('layaCanvas');
            _0x51afcd && (_0x51afcd['addEventLi' + 'stener']('mouseup', this['onNavigate' + '_']['bind'](this)), _0x51afcd['addEventLi' + 'stener']('touchend', this['onNavigate' + '_']['bind'](this)));
        }
        ['onNavigate' + '_']() {
            this['canNavigat' + 'eActive_'] && YYGSDK['navigate'](this['screen_'], this['action_'], this['to_']), this['canNavigat' + 'eActive_'] = ![];
        }
        ['getStorage' + 'Sync'](_0x2f0ad0) {
            let _0x1731fd = null;
            try {
                let _0xecff5d = Laya['LocalStora' + 'ge']['getItem'](_0x2f0ad0);
                _0x1731fd = JSON['parse'](_0xecff5d);
            } catch (_0x4c7743) {
            }
            return _0x1731fd;
        }
        ['setStorage' + 'Sync'](_0x4d807c, _0x11be4b) {
            return Laya['LocalStora' + 'ge']['setItem'](_0x4d807c, JSON['stringify'](_0x11be4b));
        }
        ['navigate'](_0x25534a, _0x6976e1, _0x157030) {
            this['canNavigat' + 'eActive_'] === ![] && (this['screen_'] = _0x25534a, this['action_'] = _0x6976e1, this['to_'] = _0x157030, this['canNavigat' + 'eActive_'] = !![]);
        }
        ['onblur']() {
            if (document && document['getElement' + 'sByTagName']) {
                let _0x53e16d = document['getElement' + 'sByTagName']('audio') || [];
                for (let _0x60a8eb = 0x0; _0x60a8eb < _0x53e16d['length']; _0x60a8eb++) {
                    _0x53e16d[_0x60a8eb]['muted'] = !![];
                }
            }
        }
        ['onfocus']() {
            if (document && document['getElement' + 'sByTagName']) {
                let _0x238186 = document['getElement' + 'sByTagName']('audio') || [];
                for (let _0x4581f3 = 0x0; _0x4581f3 < _0x238186['length']; _0x4581f3++) {
                    _0x238186[_0x4581f3]['muted'] = ![];
                }
            }
        }
        ['showInters' + 'titial'](_0x18788a) {
            this['onblur'](), FKGames['showInters' + 'titial']({
                'beforeShowAd': () => {
                },
                'afterShowAd': () => {
                    window['focus'](), this['onfocus'](), _0x18788a && _0x18788a();
                }
            });
        }
        ['showReward'](_0x4221ef, _0x355f14) {
            this['onblur'](), FKGames['showReward']({
                'beforeShowAd': () => {
                },
                'afterShowAd': () => {
                },
                'rewarded': () => {
                    _0x4221ef && _0x4221ef();
                }
            });
            return;
            YYGSDK['adsManager']['request'](YYG['TYPE']['REWARD'], YYG['EventHandl' + 'er']['create'](this, () => {
                window['focus'](), this['onfocus'](), _0x4221ef && _0x4221ef(), _0x4221ef = null;
            }), YYG['EventHandl' + 'er']['create'](this, _0x253757 => {
                window['focus'](), this['onfocus'](), _0x355f14 ? (_0x355f14(), _0x355f14 = null) : _0x253757 == YYG['Event']['AD_SKIPPED'] && this['prompt']('Failed\x20to\x20' + 'get\x20the\x20re' + 'ward,\x20plea' + 'se\x20watch\x20t' + 'he\x20ads\x20to\x20' + 'the\x20end.');
            }));
        }
        ['initList'](_0x579c2b) {
            if (YYGSDK['isGamedist' + 'ribution']) {
                _0x579c2b['visible'] = ![];
                return;
            }
            _0x579c2b['renderHand' + 'ler'] = new Laya['Handler'](_0x579c2b, function (_0x11d210) {
                _0x11d210['offAll'](Laya['Event']['MOUSE_DOWN']), _0x11d210['on'](Laya['Event']['MOUSE_DOWN'], _0x11d210, () => {
                    _0x41795a['getInstanc' + 'e']()['navigate']('GAME', 'MORE', _0x11d210['dataSource']['id']);
                });
            }), _0x579c2b['array'] = _0x41795a['getInstanc' + 'e']()['getForgame' + 's']();
        }
        ['prompt'](_0x3c748c, _0x451f77) {
            !this['prompt_'] && (this['prompt_'] = document['createElem' + 'ent']('div'), this['prompt_']['style']['cssText'] = 'font-famil' + 'y:siyuan;m' + 'ax-width:8' + '0%;min-wid' + 'th:320px;p' + 'adding:10p' + 'x\x2010px\x2010p' + 'x\x2010px;min' + '-height:40' + 'px;color:\x20' + 'rgb(255,\x202' + '55,\x20255);l' + 'ine-height' + ':\x2020px;tex' + 't-align:ce' + 'nter;borde' + 'r-radius:\x20' + '4px;positi' + 'on:\x20fixed;' + 'top:\x2040%;l' + 'eft:\x2050%;t' + 'ransform:\x20' + 'translate(' + '-50%,\x20-50%' + ');z-index:' + '\x20999999;ba' + 'ckground:\x20' + 'rgba(0,\x200,' + '\x200,.7);fon' + 't-size:\x2016' + 'px;', document['body']['appendChil' + 'd'](this['prompt_'])), this['prompt_']['innerHTML'] = _0x3c748c, _0x451f77 = isNaN(_0x451f77) ? 0x7d0 : _0x451f77, this['prompt_']['style']['display'] = 'inline', this['prompt_']['style']['opacity'] = '1', setTimeout(function () {
                var _0x559890 = 0.5;
                this['prompt_']['style']['webkitTran' + 'sition'] = '-webkit-tr' + 'ansform\x20' + _0x559890 + ('s\x20ease-in,' + '\x20opacity\x20') + _0x559890 + 's\x20ease-in', this['prompt_']['style']['opacity'] = '0', this['prompt_']['style']['display'] = 'none';
            }['bind'](this), _0x451f77);
        }
        ['getForgame' + 's']() {
            let _0x1a1520 = YYGSDK['forgames'] || [], _0xb3df3f = _0x1a1520['slice']();
            for (let _0x300f20 = 0x0, _0x392f93 = _0xb3df3f['length']; _0x300f20 < _0x392f93; _0x300f20++) {
                const _0x2ca927 = Math['floor'](Math['random']() * (_0x300f20 + 0x1)), _0x214245 = _0xb3df3f[_0x2ca927];
                _0xb3df3f[_0x2ca927] = _0xb3df3f[_0x300f20], _0xb3df3f[_0x300f20] = _0x214245;
            }
            return _0xb3df3f;
        }
        ['startup'](_0x29553a, _0x1c6592) {
            if (this['initialize' + 'd_'])
                return;
            this['initialize' + 'd_'] = !![], Laya['loader']['create']('cnf.json', Laya['Handler']['create'](this, _0x548896 => {
                this['initialize' + 'd_'] = ![], YYGSDK['on'](YYG['Event']['YYGSDK_INI' + 'TIALIZED'], this, () => {
                    _0x1c6592 && _0x1c6592(), _0x1c6592 = null, this['initialize' + 'd_'] = !![];
                });
                let _0x480cf8 = new YYG['Options']();
                _0x480cf8['gameNameId'] = _0x29553a, _0x480cf8['gamedistri' + 'butionID'] = _0x548896['id'] || '', YYGSDK['__init__'](YYG['ChannelTyp' + 'e']['YAD'], _0x480cf8);
            }));
        }
    }
    _0x41795a['_instance'] = null, window['platform'] = _0x41795a;
}();