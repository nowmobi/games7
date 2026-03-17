function CLevelBut(_0x1875a8, _0x249b80, _0x2a2435, _0x47e5e5, _0x374dd6, _0x4c33fa, _0x436074) {
    var _0x5690c9, _0x2c88f6, _0x482064, _0x3b0712 = new Array(), _0xbcf4d5 = [], _0x22ba73, _0x2d0cc3, _0x478e19, _0x26546e, _0x57f887, _0x108e50, _0x4d85c8, _0x3925dd, _0x43a70a;
    this['_init'] = function (_0x472341, _0x4a9073, _0x3a6396, _0x4373eb, _0x31d700, _0x423c0e) {
        _0x2c88f6 = new Array(), _0x482064 = new Array(), _0x26546e = new createjs['Container'](), _0x57f887['addChild'](_0x26546e);
        var _0x13ab0a = {
                'images': [_0x4373eb],
                'frames': {
                    'width': _0x4373eb['width'] / 0x2,
                    'height': _0x4373eb['height'],
                    'regX': _0x4373eb['width'] / 0x2 / 0x2,
                    'regY': _0x4373eb['height'] / 0x2
                },
                'animations': {
                    'state_true': [0x0],
                    'state_false': [0x1]
                }
            }, _0xf6d455 = new createjs['SpriteShee' + 't'](_0x13ab0a);
        _0x5690c9 = _0x423c0e, _0x478e19 = createSprite(_0xf6d455, 'state_' + _0x5690c9, _0x4373eb['width'] / 0x2 / 0x2, _0x4373eb['height'] / 0x2, _0x4373eb['width'] / 0x2, _0x4373eb['height']), _0x478e19['mouseEnabl' + 'ed'] = _0x423c0e, _0x478e19['x'] = _0x472341, _0x478e19['y'] = _0x4a9073, _0x478e19['stop']();
        !s_bMobile && _0x5690c9 && (_0x26546e['cursor'] = 'pointer');
        _0x26546e['addChild'](_0x478e19), _0x3b0712['push'](_0x478e19), _0x2d0cc3 = new createjs['Text'](_0x3a6396, FONT_SIZE_LEVEL_BUTTON + PRIMARY_FONT, PRIMARY_FONT_COLOR), _0x2d0cc3['x'] = _0x472341, _0x2d0cc3['y'] = _0x4a9073, _0x2d0cc3['textAlign'] = 'center', _0x2d0cc3['textBaseli' + 'ne'] = 'middle', _0x2d0cc3['lineWidth'] = 0xc8, _0x3925dd = new Array(), _0x43a70a = new Array();
        var _0x4373eb;
        for (var _0x520757 = 0x0; _0x520757 < 0x3; _0x520757++) {
            _0x31d700 && _0x31d700 > _0x520757 ? _0x4373eb = s_oSpriteLibrary['getSprite']('star') : _0x4373eb = s_oSpriteLibrary['getSprite']('starbox'), _0x3925dd['push'](createBitmap(_0x4373eb, _0x4373eb['width'], _0x4373eb['height'])), _0x3925dd[_0x520757]['regX'] = _0x4373eb['width'] * 0.5, _0x3925dd[_0x520757]['regY'] = _0x4373eb['height'] * 0.5, _0x3925dd[_0x520757]['scaleX'] = 0.7, _0x3925dd[_0x520757]['scaleY'] = _0x3925dd[_0x520757]['scaleX'], _0x26546e['addChild'](_0x3925dd[_0x520757]);
        }
        _0x3925dd[0x0]['x'] = _0x472341 - 0x23, _0x3925dd[0x0]['y'] = _0x4a9073 - 0x2d, _0x3925dd[0x1]['x'] = _0x472341, _0x3925dd[0x1]['y'] = _0x4a9073 - 0x3c, _0x3925dd[0x2]['x'] = _0x472341 + 0x23, _0x3925dd[0x2]['y'] = _0x4a9073 - 0x2d, _0x26546e['addChild'](_0x2d0cc3), !_0x423c0e && (_0x2d0cc3['color'] = SECONDARY_FONT_COLOR), this['_initListe' + 'ner']();
    }, this['unload'] = function () {
        _0x26546e['off']('mousedown', _0x108e50), _0x26546e['off']('pressup', _0x4d85c8), _0x26546e['removeChil' + 'd'](_0x478e19);
    }, this['_initListe' + 'ner'] = function () {
        _0x108e50 = _0x26546e['on']('mousedown', this['buttonDown']), _0x4d85c8 = _0x26546e['on']('pressup', this['buttonRele' + 'ase']);
    }, this['viewBut'] = function (_0x5a60ee) {
        _0x26546e['addChild'](_0x5a60ee);
    }, this['addEventLi' + 'stener'] = function (_0x3e6b85, _0x5efea6, _0x31c61f) {
        _0x2c88f6[_0x3e6b85] = _0x5efea6, _0x482064[_0x3e6b85] = _0x31c61f;
    }, this['addEventLi' + 'stenerWith' + 'Params'] = function (_0x1fa73d, _0x4d9d28, _0x49dcb4, _0x281fa3) {
        _0x2c88f6[_0x1fa73d] = _0x4d9d28, _0x482064[_0x1fa73d] = _0x49dcb4, _0xbcf4d5 = _0x281fa3;
    }, this['ifClickabl' + 'e'] = function () {
        if (_0x26546e['mouseEnabl' + 'ed'] === !![])
            return 0x1;
        return 0x0;
    }, this['setActive'] = function (_0x2ac06f, _0x21e50e) {
        _0x5690c9 = _0x21e50e, _0x3b0712[_0x2ac06f]['gotoAndSto' + 'p']('state_' + _0x5690c9), _0x3b0712[_0x2ac06f]['mouseEnabl' + 'ed'] = !![], _0x5690c9 ? (_0x2d0cc3['color'] = PRIMARY_FONT_COLOR, _0x22ba73['color'] = SECONDARY_FONT_COLOR) : (_0x2d0cc3['color'] = PRIMARY_FONT_COLOR, _0x22ba73['color'] = SECONDARY_FONT_COLOR);
    }, this['buttonRele' + 'ase'] = function () {
        if (!_0x5690c9)
            return;
        playSound('click', 0x1, 0x0), _0x2c88f6[ON_MOUSE_UP] && _0x2c88f6[ON_MOUSE_UP]['call'](_0x482064[ON_MOUSE_UP], _0xbcf4d5);
    }, this['buttonDown'] = function () {
        _0x2c88f6[ON_MOUSE_DOWN] && _0x2c88f6[ON_MOUSE_DOWN]['call'](_0x482064[ON_MOUSE_DOWN], _0xbcf4d5);
    }, this['setPositio' + 'n'] = function (_0x43aa5f, _0x1f0dbb) {
        _0x26546e['x'] = _0x43aa5f, _0x26546e['y'] = _0x1f0dbb;
    }, this['setVisible'] = function (_0x439c5e) {
        _0x26546e['visible'] = _0x439c5e;
    }, _0x57f887 = _0x436074, this['_init'](_0x1875a8, _0x249b80, _0x2a2435, _0x47e5e5, _0x374dd6, _0x4c33fa, _0x436074);
}