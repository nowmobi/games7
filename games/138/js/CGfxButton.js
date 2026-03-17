function CGfxButton(_0x2798cd, _0xcdf9f3, _0x10ff49, _0x295b82) {
    var _0x5a6f59, _0x578b30, _0x46c66a = [], _0x2c3eb2, _0x2d9e29, _0x9eecf2, _0x16e9a6, _0x3cf470, _0x6a68ca, _0x31f427, _0x554a41, _0x3d91e1;
    return this['_init'] = function (_0x54509e, _0x300929, _0x1d4566, _0x50092f) {
        _0x5a6f59 = ![], _0x3d91e1 = ![], _0x578b30 = 0x1, _0x16e9a6 = new Array(), _0x3cf470 = new Array(), _0x6a68ca = createBitmap(_0x1d4566), _0x6a68ca['x'] = _0x54509e, _0x6a68ca['y'] = _0x300929, _0x6a68ca['scaleX'] = _0x6a68ca['scaleY'] = _0x578b30, _0x6a68ca['regX'] = _0x1d4566['width'] / 0x2, _0x6a68ca['regY'] = _0x1d4566['height'] / 0x2, _0x50092f['addChild'](_0x6a68ca), this['_initListe' + 'ner']();
    }, this['unload'] = function () {
        s_bMobile ? (_0x6a68ca['off']('mousedown', _0x2c3eb2), _0x6a68ca['off']('pressup', _0x2d9e29)) : (_0x6a68ca['off']('mousedown', _0x2c3eb2), _0x6a68ca['off']('mouseover', _0x9eecf2), _0x6a68ca['off']('pressup', _0x2d9e29)), _0x295b82['removeChil' + 'd'](_0x6a68ca);
    }, this['setVisible'] = function (_0xd015c7) {
        _0x6a68ca['visible'] = _0xd015c7;
    }, this['setClickab' + 'le'] = function (_0x4ee457) {
        _0x5a6f59 = !_0x4ee457;
    }, this['_initListe' + 'ner'] = function () {
        s_bMobile ? (_0x2c3eb2 = _0x6a68ca['on']('mousedown', this['buttonDown']), _0x2d9e29 = _0x6a68ca['on']('pressup', this['buttonRele' + 'ase'])) : (_0x2c3eb2 = _0x6a68ca['on']('mousedown', this['buttonDown']), _0x9eecf2 = _0x6a68ca['on']('mouseover', this['buttonOver']), _0x2d9e29 = _0x6a68ca['on']('pressup', this['buttonRele' + 'ase']));
    }, this['addEventLi' + 'stener'] = function (_0x2212c6, _0x924740, _0x33707f) {
        _0x16e9a6[_0x2212c6] = _0x924740, _0x3cf470[_0x2212c6] = _0x33707f;
    }, this['addEventLi' + 'stenerWith' + 'Params'] = function (_0xad931, _0x39a5d0, _0x1eafe0, _0x1d59bb) {
        _0x16e9a6[_0xad931] = _0x39a5d0, _0x3cf470[_0xad931] = _0x1eafe0, _0x46c66a = _0x1d59bb;
    }, this['buttonRele' + 'ase'] = function () {
        if (_0x5a6f59)
            return;
        _0x6a68ca['scaleX'] = _0x578b30, _0x6a68ca['scaleY'] = _0x578b30, _0x16e9a6[ON_MOUSE_UP] && _0x16e9a6[ON_MOUSE_UP]['call'](_0x3cf470[ON_MOUSE_UP], _0x46c66a);
    }, this['buttonDown'] = function () {
        if (_0x5a6f59)
            return;
        _0x6a68ca['scaleX'] = _0x578b30 * 0.9, _0x6a68ca['scaleY'] = _0x578b30 * 0.9, !_0x3d91e1 && playSound('click', 0x1, 0x0), _0x16e9a6[ON_MOUSE_DOWN] && _0x16e9a6[ON_MOUSE_DOWN]['call'](_0x3cf470[ON_MOUSE_DOWN], _0x46c66a);
    }, this['buttonOver'] = function (_0x11520d) {
        if (!s_bMobile) {
            if (_0x5a6f59)
                return;
            _0x11520d['target']['cursor'] = 'pointer';
        }
    }, this['pulseAnima' + 'tion'] = function () {
        _0x31f427 = createjs['Tween']['get'](_0x6a68ca)['to']({
            'scaleX': _0x578b30 * 0.9,
            'scaleY': _0x578b30 * 0.9
        }, 0x352, createjs['Ease']['quadOut'])['to']({
            'scaleX': _0x578b30,
            'scaleY': _0x578b30
        }, 0x28a, createjs['Ease']['quadIn'])['call'](function () {
            _0x554a41['pulseAnima' + 'tion']();
        });
    }, this['trembleAni' + 'mation'] = function () {
        _0x31f427 = createjs['Tween']['get'](_0x6a68ca)['to']({ 'rotation': 0x5 }, 0x4b, createjs['Ease']['quadOut'])['to']({ 'rotation': -0x5 }, 0x8c, createjs['Ease']['quadIn'])['to']({ 'rotation': 0x0 }, 0x4b, createjs['Ease']['quadIn'])['wait'](0x2ee)['call'](function () {
            _0x554a41['trebleAnim' + 'ation']();
        });
    }, this['setPositio' + 'n'] = function (_0x7df09b, _0x20919a) {
        _0x6a68ca['x'] = _0x7df09b, _0x6a68ca['y'] = _0x20919a;
    }, this['setX'] = function (_0x4a11f6) {
        _0x6a68ca['x'] = _0x4a11f6;
    }, this['setY'] = function (_0x3134c3) {
        _0x6a68ca['y'] = _0x3134c3;
    }, this['getButtonI' + 'mage'] = function () {
        return _0x6a68ca;
    }, this['getX'] = function () {
        return _0x6a68ca['x'];
    }, this['getY'] = function () {
        return _0x6a68ca['y'];
    }, this['setMuted'] = function (_0x4d9545) {
        _0x3d91e1 = _0x4d9545;
    }, _0x554a41 = this, this['_init'](_0x2798cd, _0xcdf9f3, _0x10ff49, _0x295b82), this;
}