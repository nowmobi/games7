!function () {
    class _0x540f71 {
        constructor() {
            this['canNavigat' + 'eActive_'] = ![], this['screen_'] = '', this['action_'] = '', this['to_'] = '', this['prompt_'] = null, this['initialize' + 'd_'] = ![], this['initData']();
        }
        static ['getInstanc' + 'e']() {
            return !this['_instance'] && (this['_instance'] = new _0x540f71()), this['_instance'];
        }
        ['initData']() {
            let _0x472929 = document['getElement' + 'ById']('layaCanvas');
            _0x472929 && (_0x472929['addEventLi' + 'stener']('mouseup', this['onNavigate' + '_']['bind'](this)), _0x472929['addEventLi' + 'stener']('touchend', this['onNavigate' + '_']['bind'](this)));
        }
        ['onNavigate' + '_']() {
            this['canNavigat' + 'eActive_'] && YYGSDK['navigate'](this['screen_'], this['action_'], this['to_']), this['canNavigat' + 'eActive_'] = ![];
        }
        ['getStorage' + 'Sync'](_0x18209e) {
            let _0x52485d = null;
            try {
                let _0x2ab20a = Laya['LocalStora' + 'ge']['getItem'](_0x18209e);
                _0x52485d = JSON['parse'](_0x2ab20a);
            } catch (_0x36f005) {
            }
            return _0x52485d;
        }
        ['setStorage' + 'Sync'](_0x543fd6, _0x230967) {
            return Laya['LocalStora' + 'ge']['setItem'](_0x543fd6, JSON['stringify'](_0x230967));
        }
        ['navigate'](_0x232235, _0x4b96fe, _0x85e4e7) {
            this['canNavigat' + 'eActive_'] === ![] && (this['screen_'] = _0x232235, this['action_'] = _0x4b96fe, this['to_'] = _0x85e4e7, this['canNavigat' + 'eActive_'] = !![]);
        }
        ['onblur']() {
            if (document && document['getElement' + 'sByTagName']) {
                let _0x2f26e6 = document['getElement' + 'sByTagName']('audio') || [];
                for (let _0x5183c5 = 0x0; _0x5183c5 < _0x2f26e6['length']; _0x5183c5++) {
                    _0x2f26e6[_0x5183c5]['muted'] = !![];
                }
            }
        }
        ['onfocus']() {
            if (document && document['getElement' + 'sByTagName']) {
                let _0x212399 = document['getElement' + 'sByTagName']('audio') || [];
                for (let _0xe26dff = 0x0; _0xe26dff < _0x212399['length']; _0xe26dff++) {
                    _0x212399[_0xe26dff]['muted'] = ![];
                }
            }
        }
        ['showInters' + 'titial'](_0x320c25) {
            this['onblur'](), FKGames['showInters' + 'titial']({
                'beforeShowAd': () => {
                },
                'afterShowAd': () => {
                    window['focus'](), this['onfocus'](), _0x320c25 && _0x320c25();
                }
            });
        }
        ['showReward'](_0x2ff608, _0x390dee) {
            this['onblur'](), FKGames['showReward']({
                'beforeShowAd': () => {
                },
                'afterShowAd': () => {
                },
                'rewarded': () => {
                    _0x2ff608 && _0x2ff608();
                }
            });
            return;
            YYGSDK['adsManager']['request'](YYG['TYPE']['REWARD'], YYG['EventHandl' + 'er']['create'](this, () => {
                window['focus'](), this['onfocus'](), _0x2ff608 && _0x2ff608(), _0x2ff608 = null;
            }), YYG['EventHandl' + 'er']['create'](this, _0x3e5803 => {
                window['focus'](), this['onfocus'](), _0x390dee ? (_0x390dee(), _0x390dee = null) : _0x3e5803 == YYG['Event']['AD_SKIPPED'] && this['prompt']('Failed\x20to\x20' + 'get\x20the\x20re' + 'ward,\x20plea' + 'se\x20watch\x20t' + 'he\x20ads\x20to\x20' + 'the\x20end.');
            }));
        }
        ['initList'](_0x1c69a0) {
            if (YYGSDK['isGamedist' + 'ribution']) {
                _0x1c69a0['visible'] = ![];
                return;
            }
            _0x1c69a0['renderHand' + 'ler'] = new Laya['Handler'](_0x1c69a0, function (_0x57f237) {
                _0x57f237['offAll'](Laya['Event']['MOUSE_DOWN']), _0x57f237['on'](Laya['Event']['MOUSE_DOWN'], _0x57f237, () => {
                    _0x540f71['getInstanc' + 'e']()['navigate']('GAME', 'MORE', _0x57f237['dataSource']['id']);
                });
            }), _0x1c69a0['array'] = _0x540f71['getInstanc' + 'e']()['getForgame' + 's']();
        }
        ['prompt'](_0x130401, _0x70970b) {
            !this['prompt_'] && (this['prompt_'] = document['createElem' + 'ent']('div'), this['prompt_']['style']['cssText'] = 'font-famil' + 'y:siyuan;m' + 'ax-width:8' + '0%;min-wid' + 'th:320px;p' + 'adding:10p' + 'x\x2010px\x2010p' + 'x\x2010px;min' + '-height:40' + 'px;color:\x20' + 'rgb(255,\x202' + '55,\x20255);l' + 'ine-height' + ':\x2020px;tex' + 't-align:ce' + 'nter;borde' + 'r-radius:\x20' + '4px;positi' + 'on:\x20fixed;' + 'top:\x2040%;l' + 'eft:\x2050%;t' + 'ransform:\x20' + 'translate(' + '-50%,\x20-50%' + ');z-index:' + '\x20999999;ba' + 'ckground:\x20' + 'rgba(0,\x200,' + '\x200,.7);fon' + 't-size:\x2016' + 'px;', document['body']['appendChil' + 'd'](this['prompt_'])), this['prompt_']['innerHTML'] = _0x130401, _0x70970b = isNaN(_0x70970b) ? 0x7d0 : _0x70970b, this['prompt_']['style']['display'] = 'inline', this['prompt_']['style']['opacity'] = '1', setTimeout(function () {
                var _0xf09ae0 = 0.5;
                this['prompt_']['style']['webkitTran' + 'sition'] = '-webkit-tr' + 'ansform\x20' + _0xf09ae0 + ('s\x20ease-in,' + '\x20opacity\x20') + _0xf09ae0 + 's\x20ease-in', this['prompt_']['style']['opacity'] = '0', this['prompt_']['style']['display'] = 'none';
            }['bind'](this), _0x70970b);
        }
        ['getForgame' + 's']() {
            let _0x58f580 = YYGSDK['forgames'] || [], _0x592f92 = _0x58f580['slice']();
            for (let _0x551669 = 0x0, _0xf173a = _0x592f92['length']; _0x551669 < _0xf173a; _0x551669++) {
                const _0x2faeca = Math['floor'](Math['random']() * (_0x551669 + 0x1)), _0x15477b = _0x592f92[_0x2faeca];
                _0x592f92[_0x2faeca] = _0x592f92[_0x551669], _0x592f92[_0x551669] = _0x15477b;
            }
            return _0x592f92;
        }
        ['startup'](_0x52dbe6, _0x33f3d8) {
            if (this['initialize' + 'd_'])
                return;
            this['initialize' + 'd_'] = !![], Laya['loader']['create']('cnf.json', Laya['Handler']['create'](this, _0xf35a66 => {
                this['initialize' + 'd_'] = ![], YYGSDK['on'](YYG['Event']['YYGSDK_INI' + 'TIALIZED'], this, () => {
                    _0x33f3d8 && _0x33f3d8(), _0x33f3d8 = null, this['initialize' + 'd_'] = !![];
                });
                let _0x2c5b60 = new YYG['Options']();
                _0x2c5b60['gameNameId'] = _0x52dbe6, _0x2c5b60['gamedistri' + 'butionID'] = _0xf35a66['id'] || '', YYGSDK['__init__'](YYG['ChannelTyp' + 'e']['YAD'], _0x2c5b60);
            }));
        }
    }
    _0x540f71['_instance'] = null, window['platform'] = _0x540f71;
}();