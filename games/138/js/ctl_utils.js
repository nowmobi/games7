var s_iScaleFactor = 0x1, s_bIsIphone = ![], s_iOffsetX, s_iOffsetY;
(function (_0x546fb2) {
    (jQuery['browser'] = jQuery['browser'] || {})['mobile'] = /android|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(ad|hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|symbian|tablet|treo|up\.(browser|link)|vodafone|wap|webos|windows (ce|phone)|xda|xiino/i['test'](_0x546fb2) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|e\-|e\/|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(di|rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|xda(\-|2|g)|yas\-|your|zeto|zte\-/i['test'](_0x546fb2['substr'](0x0, 0x4));
}(navigator['userAgent'] || navigator['vendor'] || window['opera']), $(window)['resize'](function () {
    sizeHandler();
}));
function NotImplementedError(_0x5a18e1) {
    this['name'] = 'NotImpleme' + 'ntedError', this['message'] = _0x5a18e1 || '';
}
NotImplementedError['prototype'] = Error['prototype'];
function error(_0x35be08) {
    throw {
        'name': 'NotImpleme' + 'ntedError',
        'message': _0x35be08
    };
}
function trace(_0x3f8657) {
    console['log'](_0x3f8657);
}
window['addEventLi' + 'stener']('orientatio' + 'nchange', onOrientationChange);
function onOrientationChange() {
    sizeHandler();
}
function ifArrayContainsValue(_0x48cd12, _0x1514a7) {
    for (var _0xb26cee = 0x0; _0xb26cee < _0x48cd12['length']; _0xb26cee++) {
        if (_0x48cd12[_0xb26cee] === _0x1514a7)
            return !![];
    }
    return ![];
}
function getSize(_0x28b0db) {
    var _0x280c28, _0x369a44 = _0x28b0db['toLowerCas' + 'e'](), _0x23f177 = window['document'], _0x253659 = _0x23f177['documentEl' + 'ement'];
    if (window['inner' + _0x28b0db] === undefined)
        _0x280c28 = _0x253659['client' + _0x28b0db];
    else {
        if (window['inner' + _0x28b0db] != _0x253659['client' + _0x28b0db]) {
            var _0x41dd52 = _0x23f177['createElem' + 'ent']('body');
            _0x41dd52['id'] = 'vpw-test-b', _0x41dd52['style']['cssText'] = 'overflow:s' + 'croll';
            var _0x4d0802 = _0x23f177['createElem' + 'ent']('div');
            _0x4d0802['id'] = 'vpw-test-d', _0x4d0802['style']['cssText'] = 'position:a' + 'bsolute;to' + 'p:-1000px', _0x4d0802['innerHTML'] = '<style>@me' + 'dia(' + _0x369a44 + ':' + _0x253659['client' + _0x28b0db] + ('px){body#v' + 'pw-test-b\x20' + 'div#vpw-te' + 'st-d{') + _0x369a44 + (':7px!impor' + 'tant}}</st' + 'yle>'), _0x41dd52['appendChil' + 'd'](_0x4d0802), _0x253659['insertBefo' + 're'](_0x41dd52, _0x23f177['head']), _0x4d0802['offset' + _0x28b0db] == 0x7 ? _0x280c28 = _0x253659['client' + _0x28b0db] : _0x280c28 = window['inner' + _0x28b0db], _0x253659['removeChil' + 'd'](_0x41dd52);
        } else
            _0x280c28 = window['inner' + _0x28b0db];
    }
    return _0x280c28;
}
;
function sizeHandler() {
    window['scrollTo'](0x0, 0x1);
    if (!$('#canvas'))
        return;
    var _0x373c56, _0x51350e = navigator['userAgent']['match'](/(iPad|iPhone|iPod)/g) ? !![] : ![];
    _0x51350e ? _0x373c56 = getIOSWindowHeight() : _0x373c56 = getSize('Height');
    var _0x153744 = getSize('Width');
    _checkOrientation(_0x153744, _0x373c56);
    var _0x4ffaf6 = Math['min'](_0x373c56 / CANVAS_HEIGHT, _0x153744 / CANVAS_WIDTH), _0x17095f = CANVAS_WIDTH * _0x4ffaf6, _0x819ac4 = CANVAS_HEIGHT * _0x4ffaf6, _0x3cd2ab = 0x0, _0x6b4d49 = _0x373c56 / 0x2 - _0x819ac4 / 0x2, _0x52e7e2 = _0x153744 / 0x2 - _0x17095f / 0x2, _0x364150 = CANVAS_WIDTH / _0x17095f;
    (_0x52e7e2 * _0x364150 < -EDGEBOARD_X || _0x6b4d49 * _0x364150 < -EDGEBOARD_Y) && (_0x4ffaf6 = Math['min'](_0x373c56 / (CANVAS_HEIGHT - EDGEBOARD_Y * 0x2), _0x153744 / (CANVAS_WIDTH - EDGEBOARD_X * 0x2)), _0x17095f = CANVAS_WIDTH * _0x4ffaf6, _0x819ac4 = CANVAS_HEIGHT * _0x4ffaf6, _0x6b4d49 = (_0x373c56 - _0x819ac4) / 0x2, _0x52e7e2 = (_0x153744 - _0x17095f) / 0x2, _0x364150 = CANVAS_WIDTH / _0x17095f);
    s_iOffsetX = -0x1 * _0x52e7e2 * _0x364150, s_iOffsetY = -0x1 * _0x6b4d49 * _0x364150;
    _0x6b4d49 >= 0x0 && (s_iOffsetY = 0x0);
    _0x52e7e2 >= 0x0 && (s_iOffsetX = 0x0);
    s_oInterface !== null && s_oInterface['refreshBut' + 'tonPos'](s_iOffsetX, s_iOffsetY);
    s_oMenu !== null && s_oMenu['refreshBut' + 'tonPos'](s_iOffsetX, s_iOffsetY);
    s_oLevelMenu !== null && s_oLevelMenu['refreshBut' + 'tonPos'](s_iOffsetX, s_iOffsetY);
    if (s_bIsIphone) {
        canvas = document['getElement' + 'ById']('canvas'), s_oStage['canvas']['width'] = _0x17095f * 0x2, s_oStage['canvas']['height'] = _0x819ac4 * 0x2, canvas['style']['width'] = _0x17095f + 'px', canvas['style']['height'] = _0x819ac4 + 'px';
        var _0x2120f4 = Math['min'](_0x17095f / CANVAS_WIDTH, _0x819ac4 / CANVAS_HEIGHT);
        s_oStage['scaleX'] = s_oStage['scaleY'] = _0x2120f4 * 0x2;
    } else
        s_bMobile ? ($('#canvas')['css']('width', _0x17095f + 'px'), $('#canvas')['css']('height', _0x819ac4 + 'px')) : (s_oStage['canvas']['width'] = _0x17095f, s_oStage['canvas']['height'] = _0x819ac4, s_iScaleFactor = Math['min'](_0x17095f / CANVAS_WIDTH, _0x819ac4 / CANVAS_HEIGHT), s_oStage['scaleX'] = s_oStage['scaleY'] = s_iScaleFactor);
    _0x6b4d49 < 0x0 ? $('#canvas')['css']('top', _0x6b4d49 + 'px') : $('#canvas')['css']('top', '0px');
    var _0x48813d = Math['min'](s_oStage['scaleX'], 0x1), _0x1ccc80 = Math['min'](s_oStage['scaleY'], 0x1), _0x206df1 = 0x13e * _0x1ccc80, _0x5f59d2 = 0x89 * _0x48813d;
    if (s_bIsIphone) {
    } else {
        if (s_bMobile)
            var _0x206df1 = 0x13e * (_0x1ccc80 / 0x4), _0x5f59d2 = 0x89 * (_0x48813d / 0x4);
    }
    $('#sitelogo')['css']('width', _0x206df1 + 'px'), $('#sitelogo')['css']('height', _0x5f59d2 + 'px'), $('#sitelogo')['css']('top', _0x819ac4 - _0x5f59d2 + 'px'), $('#canvas')['css']('left', _0x52e7e2 + 'px'), fullscreenHandler();
}
;
function _checkOrientation(_0x105a14, _0x52e83b) {
}
function isChrome() {
    var _0x600e3a = /Chrome/['test'](navigator['userAgent']) && /Google Inc/['test'](navigator['vendor']);
    return _0x600e3a;
}
function isIOS() {
    var _0x25abca = [
        'iPad\x20Simul' + 'ator',
        'iPhone\x20Sim' + 'ulator',
        'iPod\x20Simul' + 'ator',
        'iPad',
        'iPhone',
        'iPod'
    ];
    navigator['userAgent']['toLowerCas' + 'e']()['indexOf']('iphone') !== -0x1 && (s_bIsIphone = !![]);
    while (_0x25abca['length']) {
        if (navigator['platform'] === _0x25abca['pop']())
            return !![];
    }
    return s_bIsIphone = ![], ![];
}
function getIOSWindowHeight() {
    var _0x14d731 = document['documentEl' + 'ement']['clientWidt' + 'h'] / window['innerWidth'];
    return window['innerHeigh' + 't'] * _0x14d731;
}
;
function getHeightOfIOSToolbars() {
    var _0x2918ee = (window['orientatio' + 'n'] === 0x0 ? screen['height'] : screen['width']) - getIOSWindowHeight();
    return _0x2918ee > 0x1 ? _0x2918ee : 0x0;
}
;
function getMobileOperatingSystem() {
    var _0x444bb4 = navigator['userAgent'] || navigator['vendor'] || window['opera'];
    if (_0x444bb4['match'](/iPad/i) || _0x444bb4['match'](/iPhone/i) || _0x444bb4['match'](/iPod/i))
        return 'ios';
    else
        return _0x444bb4['match'](/Android/i) ? 'android' : 'unknown';
}
function inIframe() {
    try {
        return window['self'] !== window['top'];
    } catch (_0x38cb02) {
        return !![];
    }
}
function soundPlaying(_0x5c11ec) {
    if (DISABLE_SOUND_MOBILE === ![] || s_bMobile === ![])
        return s_aSounds[_0x5c11ec]['playing']();
}
function stopSound(_0x50d2fc) {
    (DISABLE_SOUND_MOBILE === ![] || s_bMobile === ![]) && s_aSounds[_0x50d2fc]['stop']();
}
function playSound(_0x4d8fce, _0x392461, _0x143e30) {
    if (DISABLE_SOUND_MOBILE === ![] || s_bMobile === ![])
        return s_aSounds[_0x4d8fce]['play'](), s_aSounds[_0x4d8fce]['volume'](_0x392461), s_aSounds[_0x4d8fce]['loop'](_0x143e30), s_aSounds[_0x4d8fce];
    return null;
}
function setVolume(_0x2e39f0, _0x13b153) {
    (DISABLE_SOUND_MOBILE === ![] || s_bMobile === ![]) && s_aSounds[_0x2e39f0]['volume'](_0x13b153);
}
function setMute(_0x453af9, _0x421da2) {
    (DISABLE_SOUND_MOBILE === ![] || s_bMobile === ![]) && s_aSounds[_0x421da2]['mute'](_0x453af9);
}
function createBitmap(_0x4375a1, _0x2860c3, _0x4abe84) {
    var _0x6b56c = new createjs['Bitmap'](_0x4375a1), _0x4967af = new createjs['Shape']();
    return _0x2860c3 && _0x4abe84 ? _0x4967af['graphics']['beginFill']('#fff')['drawRect'](0x0, 0x0, _0x2860c3, _0x4abe84) : _0x4967af['graphics']['beginFill']('#ff0')['drawRect'](0x0, 0x0, _0x4375a1['width'], _0x4375a1['height']), _0x6b56c['hitArea'] = _0x4967af, _0x6b56c;
}
function createSprite(_0x9fb1db, _0x50c0fc, _0x275c20, _0x29bc37, _0x542f41, _0x247ace) {
    if (_0x50c0fc !== null)
        var _0x347e02 = new createjs['Sprite'](_0x9fb1db, _0x50c0fc);
    else
        var _0x347e02 = new createjs['Sprite'](_0x9fb1db);
    var _0x1a85d9 = new createjs['Shape']();
    return _0x1a85d9['graphics']['beginFill']('#000000')['drawRect'](-_0x275c20, -_0x29bc37, _0x542f41, _0x247ace), _0x347e02['hitArea'] = _0x1a85d9, _0x347e02;
}
function randomFloatBetween(_0x3485d, _0xa834b4, _0x34bc2b) {
    return typeof _0x34bc2b === 'undefined' && (_0x34bc2b = 0x2), parseFloat(Math['min'](_0x3485d + Math['random']() * (_0xa834b4 - _0x3485d), _0xa834b4)['toFixed'](_0x34bc2b));
}
function shuffle(_0x58d059) {
    var _0x33382d = _0x58d059['length'], _0x1595ab, _0x3f81db;
    while (0x0 !== _0x33382d) {
        _0x3f81db = Math['floor'](Math['random']() * _0x33382d), _0x33382d -= 0x1, _0x1595ab = _0x58d059[_0x33382d], _0x58d059[_0x33382d] = _0x58d059[_0x3f81db], _0x58d059[_0x3f81db] = _0x1595ab;
    }
    return _0x58d059;
}
function easeLinear(_0x5b4502, _0x368d30, _0x4b30a0, _0x5d0892) {
    return _0x4b30a0 * _0x5b4502 / _0x5d0892 + _0x368d30;
}
function easeInQuad(_0x4d3c8a, _0x551247, _0x3f045f, _0x5418cb) {
    return _0x3f045f * (_0x4d3c8a /= _0x5418cb) * _0x4d3c8a + _0x551247;
}
function easeInSine(_0x29558f, _0x53232b, _0x4231fa, _0x5a9eb3) {
    return -_0x4231fa * Math['cos'](_0x29558f / _0x5a9eb3 * (Math['PI'] / 0x2)) + _0x4231fa + _0x53232b;
}
function easeInCubic(_0x22cf5e, _0x214786, _0x22a332, _0x58ebbe) {
    return _0x22a332 * (_0x22cf5e /= _0x58ebbe) * _0x22cf5e * _0x22cf5e + _0x214786;
}
;
function getTrajectoryPoint(_0x42ff25, _0x3463e3) {
    var _0x4b8668 = new createjs['Point'](), _0x2a7f4d = (0x1 - _0x42ff25) * (0x1 - _0x42ff25), _0x1d3f8c = _0x42ff25 * _0x42ff25;
    return _0x4b8668['x'] = _0x2a7f4d * _0x3463e3['start']['x'] + 0x2 * (0x1 - _0x42ff25) * _0x42ff25 * _0x3463e3['traj']['x'] + _0x1d3f8c * _0x3463e3['end']['x'], _0x4b8668['y'] = _0x2a7f4d * _0x3463e3['start']['y'] + 0x2 * (0x1 - _0x42ff25) * _0x42ff25 * _0x3463e3['traj']['y'] + _0x1d3f8c * _0x3463e3['end']['y'], _0x4b8668;
}
function formatTime(_0x20e0e3) {
    _0x20e0e3 /= 0x3e8;
    var _0x551ebc = Math['floor'](_0x20e0e3 / 0x3c), _0x11db2b = _0x20e0e3 - _0x551ebc * 0x3c;
    _0x11db2b = parseFloat(_0x11db2b)['toFixed'](0x0);
    var _0x178ab4 = '';
    return _0x551ebc < 0xa ? _0x178ab4 += '0' + _0x551ebc + ':' : _0x178ab4 += _0x551ebc + ':', _0x11db2b < 0xa ? _0x178ab4 += '0' + _0x11db2b : _0x178ab4 += _0x11db2b, _0x178ab4;
}
function degreesToRadians(_0x4bc6f9) {
    return _0x4bc6f9 * Math['PI'] / 0xb4;
}
function checkRectCollision(_0x1c5ea8, _0x363f1e) {
    var _0x2dbe99, _0x12a079;
    return _0x2dbe99 = getBounds(_0x1c5ea8, 0.9), _0x12a079 = getBounds(_0x363f1e, 0.98), calculateIntersection(_0x2dbe99, _0x12a079);
}
function calculateIntersection(_0x14f6d7, _0x123f3a) {
    var _0x65fb44, _0x22b602, _0x3e32a1 = {}, _0x3ab5b5 = {};
    return _0x3e32a1['cx'] = _0x14f6d7['x'] + (_0x3e32a1['hw'] = _0x14f6d7['width'] / 0x2), _0x3e32a1['cy'] = _0x14f6d7['y'] + (_0x3e32a1['hh'] = _0x14f6d7['height'] / 0x2), _0x3ab5b5['cx'] = _0x123f3a['x'] + (_0x3ab5b5['hw'] = _0x123f3a['width'] / 0x2), _0x3ab5b5['cy'] = _0x123f3a['y'] + (_0x3ab5b5['hh'] = _0x123f3a['height'] / 0x2), _0x65fb44 = Math['abs'](_0x3e32a1['cx'] - _0x3ab5b5['cx']) - (_0x3e32a1['hw'] + _0x3ab5b5['hw']), _0x22b602 = Math['abs'](_0x3e32a1['cy'] - _0x3ab5b5['cy']) - (_0x3e32a1['hh'] + _0x3ab5b5['hh']), _0x65fb44 < 0x0 && _0x22b602 < 0x0 ? (_0x65fb44 = Math['min'](Math['min'](_0x14f6d7['width'], _0x123f3a['width']), -_0x65fb44), _0x22b602 = Math['min'](Math['min'](_0x14f6d7['height'], _0x123f3a['height']), -_0x22b602), {
        'x': Math['max'](_0x14f6d7['x'], _0x123f3a['x']),
        'y': Math['max'](_0x14f6d7['y'], _0x123f3a['y']),
        'width': _0x65fb44,
        'height': _0x22b602,
        'rect1': _0x14f6d7,
        'rect2': _0x123f3a
    }) : null;
}
function getBounds(_0x28d8d6, _0x1c56d2) {
    var _0x136422 = {
        'x': Infinity,
        'y': Infinity,
        'width': 0x0,
        'height': 0x0
    };
    if (_0x28d8d6 instanceof createjs['Container']) {
        _0x136422['x2'] = -Infinity, _0x136422['y2'] = -Infinity;
        var _0x1e85b8 = _0x28d8d6['children'], _0xe38ed7 = _0x1e85b8['length'], _0x4b7d5a, _0x1b2a21;
        for (_0x1b2a21 = 0x0; _0x1b2a21 < _0xe38ed7; _0x1b2a21++) {
            _0x4b7d5a = getBounds(_0x1e85b8[_0x1b2a21], 0x1);
            if (_0x4b7d5a['x'] < _0x136422['x'])
                _0x136422['x'] = _0x4b7d5a['x'];
            if (_0x4b7d5a['y'] < _0x136422['y'])
                _0x136422['y'] = _0x4b7d5a['y'];
            if (_0x4b7d5a['x'] + _0x4b7d5a['width'] > _0x136422['x2'])
                _0x136422['x2'] = _0x4b7d5a['x'] + _0x4b7d5a['width'];
            if (_0x4b7d5a['y'] + _0x4b7d5a['height'] > _0x136422['y2'])
                _0x136422['y2'] = _0x4b7d5a['y'] + _0x4b7d5a['height'];
        }
        if (_0x136422['x'] == Infinity)
            _0x136422['x'] = 0x0;
        if (_0x136422['y'] == Infinity)
            _0x136422['y'] = 0x0;
        if (_0x136422['x2'] == Infinity)
            _0x136422['x2'] = 0x0;
        if (_0x136422['y2'] == Infinity)
            _0x136422['y2'] = 0x0;
        _0x136422['width'] = _0x136422['x2'] - _0x136422['x'], _0x136422['height'] = _0x136422['y2'] - _0x136422['y'], delete _0x136422['x2'], delete _0x136422['y2'];
    } else {
        var _0x61fac8, _0x27e9cb, _0x418570, _0x167968, _0x514db1 = {}, _0x38a804;
        if (_0x28d8d6 instanceof createjs['Bitmap'])
            _0x38a804 = _0x28d8d6['sourceRect'] || _0x28d8d6['image'], _0x514db1['width'] = _0x38a804['width'] * _0x1c56d2, _0x514db1['height'] = _0x38a804['height'] * _0x1c56d2;
        else {
            if (_0x28d8d6 instanceof createjs['Sprite']) {
                if (_0x28d8d6['spriteShee' + 't']['_frames'] && _0x28d8d6['spriteShee' + 't']['_frames'][_0x28d8d6['currentFra' + 'me']] && _0x28d8d6['spriteShee' + 't']['_frames'][_0x28d8d6['currentFra' + 'me']]['image']) {
                    var _0x5533a0 = _0x28d8d6['spriteShee' + 't']['getFrame'](_0x28d8d6['currentFra' + 'me']);
                    _0x514db1['width'] = _0x5533a0['rect']['width'], _0x514db1['height'] = _0x5533a0['rect']['height'], _0x514db1['regX'] = _0x5533a0['regX'], _0x514db1['regY'] = _0x5533a0['regY'];
                } else
                    _0x136422['x'] = _0x28d8d6['x'] || 0x0, _0x136422['y'] = _0x28d8d6['y'] || 0x0;
            } else
                _0x136422['x'] = _0x28d8d6['x'] || 0x0, _0x136422['y'] = _0x28d8d6['y'] || 0x0;
        }
        _0x514db1['regX'] = _0x514db1['regX'] || 0x0, _0x514db1['width'] = _0x514db1['width'] || 0x0, _0x514db1['regY'] = _0x514db1['regY'] || 0x0, _0x514db1['height'] = _0x514db1['height'] || 0x0, _0x136422['regX'] = _0x514db1['regX'], _0x136422['regY'] = _0x514db1['regY'], _0x61fac8 = _0x28d8d6['localToGlo' + 'bal'](0x0 - _0x514db1['regX'], 0x0 - _0x514db1['regY']), _0x27e9cb = _0x28d8d6['localToGlo' + 'bal'](_0x514db1['width'] - _0x514db1['regX'], _0x514db1['height'] - _0x514db1['regY']), _0x418570 = _0x28d8d6['localToGlo' + 'bal'](_0x514db1['width'] - _0x514db1['regX'], 0x0 - _0x514db1['regY']), _0x167968 = _0x28d8d6['localToGlo' + 'bal'](0x0 - _0x514db1['regX'], _0x514db1['height'] - _0x514db1['regY']), _0x136422['x'] = Math['min'](Math['min'](Math['min'](_0x61fac8['x'], _0x27e9cb['x']), _0x418570['x']), _0x167968['x']), _0x136422['y'] = Math['min'](Math['min'](Math['min'](_0x61fac8['y'], _0x27e9cb['y']), _0x418570['y']), _0x167968['y']), _0x136422['width'] = Math['max'](Math['max'](Math['max'](_0x61fac8['x'], _0x27e9cb['x']), _0x418570['x']), _0x167968['x']) - _0x136422['x'], _0x136422['height'] = Math['max'](Math['max'](Math['max'](_0x61fac8['y'], _0x27e9cb['y']), _0x418570['y']), _0x167968['y']) - _0x136422['y'];
    }
    return _0x136422;
}
function NoClickDelay(_0x567b8f) {
    this['element'] = _0x567b8f;
    if (window['Touch'])
        this['element']['addEventLi' + 'stener']('touchstart', this, ![]);
}
NoClickDelay['prototype'] = {
    'handleEvent': function (_0x309872) {
        switch (_0x309872['type']) {
        case 'touchstart':
            this['onTouchSta' + 'rt'](_0x309872);
            break;
        case 'touchmove':
            this['onTouchMov' + 'e'](_0x309872);
            break;
        case 'touchend':
            this['onTouchEnd'](_0x309872);
            break;
        }
    },
    'onTouchStart': function (_0x8e71b7) {
        _0x8e71b7['preventDef' + 'ault'](), this['moved'] = ![], this['element']['addEventLi' + 'stener']('touchmove', this, ![]), this['element']['addEventLi' + 'stener']('touchend', this, ![]);
    },
    'onTouchMove': function (_0xc0f0f1) {
        this['moved'] = !![];
    },
    'onTouchEnd': function (_0x5662e8) {
        this['element']['removeEven' + 'tListener']('touchmove', this, ![]), this['element']['removeEven' + 'tListener']('touchend', this, ![]);
        if (!this['moved']) {
            var _0x317e77 = document['elementFro' + 'mPoint'](_0x5662e8['changedTou' + 'ches'][0x0]['clientX'], _0x5662e8['changedTou' + 'ches'][0x0]['clientY']);
            if (_0x317e77['nodeType'] == 0x3)
                _0x317e77 = _0x317e77['parentNode'];
            var _0x52415 = document['createEven' + 't']('MouseEvent' + 's');
            _0x52415['initEvent']('click', !![], !![]), _0x317e77['dispatchEv' + 'ent'](_0x52415);
        }
    }
}, function () {
    var _0x2a2a7c = 'hidden';
    if (_0x2a2a7c in document)
        document['addEventLi' + 'stener']('visibility' + 'change', _0x49a130);
    else {
        if ((_0x2a2a7c = 'mozHidden') in document)
            document['addEventLi' + 'stener']('mozvisibil' + 'itychange', _0x49a130);
        else {
            if ((_0x2a2a7c = 'webkitHidd' + 'en') in document)
                document['addEventLi' + 'stener']('webkitvisi' + 'bilitychan' + 'ge', _0x49a130);
            else {
                if ((_0x2a2a7c = 'msHidden') in document)
                    document['addEventLi' + 'stener']('msvisibili' + 'tychange', _0x49a130);
                else {
                    if ('onfocusin' in document)
                        document['onfocusin'] = document['onfocusout'] = _0x49a130;
                    else
                        window['onpageshow'] = window['onpagehide'] = window['onfocus'] = window['onblur'] = _0x49a130;
                }
            }
        }
    }
    function _0x49a130(_0x99b67d) {
        var _0x12e308 = 'visible', _0x33bbd2 = 'hidden', _0x5efb5d = {
                'focus': _0x12e308,
                'focusin': _0x12e308,
                'pageshow': _0x12e308,
                'blur': _0x33bbd2,
                'focusout': _0x33bbd2,
                'pagehide': _0x33bbd2
            };
        _0x99b67d = _0x99b67d || window['event'], _0x99b67d['type'] in _0x5efb5d ? document['body']['className'] = _0x5efb5d[_0x99b67d['type']] : (document['body']['className'] = this[_0x2a2a7c] ? 'hidden' : 'visible', document['body']['className'] === 'hidden' ? s_oMain['stopUpdate']() : s_oMain['startUpdat' + 'e']());
    }
}();
function ctlArcadeResume() {
    s_oMain !== null && s_oMain['startUpdat' + 'e']();
}
function ctlArcadePause() {
    s_oMain !== null && s_oMain['stopUpdate']();
}
function getParamValue(_0x4d3dd2) {
    var _0x35a810 = window['location']['search']['substring'](0x1), _0x377e85 = _0x35a810['split']('&');
    for (var _0x4668ba = 0x0; _0x4668ba < _0x377e85['length']; _0x4668ba++) {
        var _0xf3fc0 = _0x377e85[_0x4668ba]['split']('=');
        if (_0xf3fc0[0x0] == _0x4d3dd2)
            return _0xf3fc0[0x1];
    }
}
function saveItem(_0xe41839, _0x1cf0f7) {
    s_bStorageAvailable && localStorage['setItem'](_0xe41839, _0x1cf0f7);
}
function getItem(_0x4d5d98) {
    if (s_bStorageAvailable)
        return localStorage['getItem'](_0x4d5d98);
    return null;
}
function setItemJson(_0x4acebb, _0xe5a9a) {
    s_bStorageAvailable && localStorage['setItem'](_0x4acebb, JSON['stringify'](_0xe5a9a));
}
function getItemJson(_0x6a3f93) {
    if (s_bStorageAvailable)
        return JSON['parse'](localStorage['getItem'](_0x6a3f93));
    return null;
}
function fullscreenHandler() {
    if (!ENABLE_FULLSCREEN || !screenfull['enabled'])
        return;
    screen['height'] < window['innerHeigh' + 't'] + 0x3 && screen['height'] > window['innerHeigh' + 't'] - 0x3 ? s_bFullscreen = !![] : s_bFullscreen = ![], s_oInterface !== null && s_oInterface['resetFulls' + 'creenBut'](), s_oMenu !== null && s_oMenu['resetFulls' + 'creenBut'](), s_oLevelMenu !== null && s_oLevelMenu['resetFulls' + 'creenBut'](), s_oMascotteSelection !== null && s_oMascotteSelection['resetFulls' + 'creenBut']();
}
screenfull['enabled'] && screenfull['on']('change', function () {
    s_bFullscreen = screenfull['isFullscre' + 'en'], s_oInterface !== null && s_oInterface['resetFulls' + 'creenBut'](), s_oMenu !== null && s_oMenu['resetFulls' + 'creenBut'](), s_oLevelMenu !== null && s_oLevelMenu['resetFulls' + 'creenBut'](), s_oMascotteSelection !== null && s_oMascotteSelection['resetFulls' + 'creenBut']();
});