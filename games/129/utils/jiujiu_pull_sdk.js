!function () {
    function _0x3d68a6(_0x459fa2, _0x1659fe, _0x12da5c) {
        return new Promise(function (_0x1ea717, _0x1f8cfd) {
            var _0x488bf9 = new XMLHttpRequest();
            _0x488bf9['withCreden' + 'tials'] = !0x0, _0x488bf9['onreadysta' + 'techange'] = function () {
                0x4 === _0x488bf9['readyState'] && 0xc8 == _0x488bf9['status'] && _0x1ea717(JSON['parse'](_0x488bf9['responseTe' + 'xt']));
            }, _0x488bf9['onerror'] = function (_0xc8c5e3) {
                _0x1f8cfd('');
            }, _0x488bf9['ontimeout'] = function (_0x5b1b6c) {
                _0x1f8cfd('');
            }, _0x488bf9['open'](_0x459fa2, _0x1659fe + function (_0x2f8b0b) {
                var _0x94f6b1 = '?';
                for (var _0x1d6e09 in _0x2f8b0b)
                    _0x94f6b1 += _0x1d6e09 + '=' + _0x2f8b0b[_0x1d6e09] + '&';
                return _0x94f6b1;
            }(_0x12da5c), !0x1), _0x488bf9['send']();
        });
    }
    void 0x0 === window['JJSdkConf'] && console['error']('jiujiu_sdk' + '_conf.js必须' + '放置在jiujiu_' + 'sdk.js、jiu' + 'jiu_pull_s' + 'dk.js之前');
    for (var _0x581634 = {
                'JJGameConfigs': function () {
                    return _0x3d68a6('GET', window['JJSdkConf']['req_domain'] + ('/game/conf' + 'igs'), {
                        'version': window['JJSdkConf']['version'],
                        'app_key': window['JJSdkConf']['app_key']
                    });
                },
                'JJGameConfigByKeys': function (_0x7e2bdf) {
                    return _0x3d68a6('GET', window['JJSdkConf']['req_domain'] + ('/get/confi' + 'gs/by/keys'), {
                        'version': window['JJSdkConf']['version'],
                        'app_key': window['JJSdkConf']['app_key'],
                        'config_key': _0x7e2bdf
                    });
                },
                'JJGameShares': function () {
                    var _0x58f54f = arguments['length'] > 0x0 && void 0x0 !== arguments[0x0] ? arguments[0x0] : '';
                    return _0x3d68a6('GET', window['JJSdkConf']['req_domain'] + ('/game/shar' + 'es'), {
                        'app_key': window['JJSdkConf']['app_key'],
                        'p_code': _0x58f54f
                    });
                },
                'JJGameAds': function () {
                    var _0x2d68dd = arguments['length'] > 0x0 && void 0x0 !== arguments[0x0] ? arguments[0x0] : '';
                    return _0x3d68a6('GET', window['JJSdkConf']['req_domain'] + '/ads', {
                        'app_key': window['JJSdkConf']['app_key'],
                        'position_id': _0x2d68dd
                    });
                },
                'JJGetGameConfigAdShare': function () {
                    var _0x15d5dd = arguments['length'] > 0x0 && void 0x0 !== arguments[0x0] ? arguments[0x0] : '', _0x345a85 = {};
                    return _0x15d5dd && (_0x345a85 = _0x15d5dd()), _0x345a85['app_key'] = window['JJSdkConf']['app_key'], _0x345a85['version'] = window['JJSdkConf']['version'], void 0x0 === _0x345a85['version'] ? void console['error']('配置三合一接口必须小' + '游戏传递版本号') : _0x3d68a6('GET', window['JJSdkConf']['req_domain'] + ('/batch/con' + 'figs'), _0x345a85);
                }
            }, _0x10ed14 = [
                'JJGameConf' + 'igs',
                'JJGameConf' + 'igByKeys',
                'JJGameShar' + 'es',
                'JJGameAds',
                'JJGetGameC' + 'onfigAdSha' + 're'
            ], _0x4cda71 = _0x10ed14['length'] - 0x1; _0x4cda71 >= 0x0; _0x4cda71--)
        !function (_0x15e3e4, _0x513991) {
            Object['defineProp' + 'erty'](window, _0x15e3e4, {
                'value': _0x513991,
                'writable': !0x1,
                'enumerable': !0x0,
                'configurable': !0x0
            });
        }(_0x10ed14[_0x4cda71], _0x581634[_0x10ed14[_0x4cda71]]);
}();