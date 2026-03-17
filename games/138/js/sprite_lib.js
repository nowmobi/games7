function CSpriteLibrary() {
    var _0x4bd028, _0x4f9c7f, _0x179df8, _0x3d8b11, _0x59febc, _0x19670e;
    this['init'] = function (_0x3fe76e, _0x2a1910, _0xfa01ab) {
        _0x4f9c7f = 0x0, _0x179df8 = 0x0, _0x3d8b11 = _0x3fe76e, _0x59febc = _0x2a1910, _0x19670e = _0xfa01ab, _0x4bd028 = {};
    }, this['addSprite'] = function (_0xe238ba, _0x4edfa7) {
        if (_0x4bd028['hasOwnProp' + 'erty'](_0xe238ba))
            return;
        _0x4bd028[_0xe238ba] = {
            'szPath': _0x4edfa7,
            'oSprite': new Image()
        }, _0x4f9c7f++;
    }, this['getSprite'] = function (_0x55da9c) {
        return !_0x4bd028['hasOwnProp' + 'erty'](_0x55da9c) ? null : _0x4bd028[_0x55da9c]['oSprite'];
    }, this['_onSprites' + 'Loaded'] = function () {
        _0x59febc['call'](_0x19670e);
    }, this['_onSpriteL' + 'oaded'] = function () {
        _0x3d8b11['call'](_0x19670e), ++_0x179df8 == _0x4f9c7f && this['_onSprites' + 'Loaded']();
    }, this['loadSprite' + 's'] = function () {
        for (var _0x18ded0 in _0x4bd028) {
            _0x4bd028[_0x18ded0]['oSprite']['oSpriteLib' + 'rary'] = this, _0x4bd028[_0x18ded0]['oSprite']['onload'] = function () {
                this['oSpriteLib' + 'rary']['_onSpriteL' + 'oaded']();
            }, _0x4bd028[_0x18ded0]['oSprite']['src'] = _0x4bd028[_0x18ded0]['szPath'];
        }
    }, this['getNumSpri' + 'tes'] = function () {
        return _0x4f9c7f;
    };
}