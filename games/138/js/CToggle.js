function CToggle(_0x542ab4, _0x4a6cf2, _0x15fa95, _0x125905) {
    var _0x1a49e4, _0x1a1764, _0x5becf1, _0x34ab22 = [], _0x881fbd, _0x572ad4 = 0x1;
    this['_init'] = function (_0x4fab72, _0x16e829, _0x327e3b, _0x85ba69) {
        _0x1a1764 = new Array(), _0x5becf1 = new Array();
        var _0x4f3a98 = {
                'images': [_0x327e3b],
                'frames': {
                    'width': _0x327e3b['width'] / 0x2,
                    'height': _0x327e3b['height'],
                    'regX': _0x327e3b['width'] / 0x2 / 0x2,
                    'regY': _0x327e3b['height'] / 0x2
                },
                'animations': {
                    'state_true': [0x0],
                    'state_false': [0x1]
                }
            }, _0x4823e8 = new createjs['SpriteShee' + 't'](_0x4f3a98);
        _0x1a49e4 = _0x85ba69, _0x881fbd = createSprite(_0x4823e8, 'state_' + _0x1a49e4, _0x327e3b['width'] / 0x2 / 0x2, _0x327e3b['height'] / 0x2, _0x327e3b['width'] / 0x2, _0x327e3b['height']), _0x881fbd['x'] = _0x4fab72, _0x881fbd['y'] = _0x16e829, _0x881fbd['stop']();
        if (!s_bMobile)
            _0x881fbd['cursor'] = 'pointer';
        s_oStage['addChild'](_0x881fbd), this['_initListe' + 'ner']();
    }, this['setRotatio' + 'n'] = function (_0x58df6a) {
        _0x881fbd['rotation'] = _0x58df6a;
    }, this['unload'] = function () {
        _0x881fbd['off']('mousedown', this['buttonDown']), _0x881fbd['off']('pressup', this['buttonRele' + 'ase']), s_oStage['removeChil' + 'd'](_0x881fbd);
    }, this['_initListe' + 'ner'] = function () {
        _0x881fbd['on']('mousedown', this['buttonDown']), _0x881fbd['on']('pressup', this['buttonRele' + 'ase']);
    }, this['addEventLi' + 'stener'] = function (_0x32470e, _0x2c2731, _0x2193b2) {
        _0x1a1764[_0x32470e] = _0x2c2731, _0x5becf1[_0x32470e] = _0x2193b2;
    }, this['addEventLi' + 'stenerWith' + 'Params'] = function (_0x123aba, _0x270259, _0x3d9d4b, _0x38013a) {
        _0x1a1764[_0x123aba] = _0x270259, _0x5becf1[_0x123aba] = _0x3d9d4b, _0x34ab22 = _0x38013a;
    }, this['setActive'] = function (_0x384103) {
        _0x1a49e4 = _0x384103, _0x881fbd['gotoAndSto' + 'p']('state_' + _0x1a49e4);
    }, this['setScale'] = function (_0x4fc7d7) {
        _0x572ad4 = _0x4fc7d7, _0x881fbd['scaleX'] = _0x572ad4, _0x881fbd['scaleY'] = _0x572ad4;
    }, this['buttonRele' + 'ase'] = function () {
        _0x881fbd['scaleX'] = _0x572ad4, _0x881fbd['scaleY'] = _0x572ad4, playSound('click', 0x1, ![]), _0x1a49e4 = !_0x1a49e4, _0x881fbd['gotoAndSto' + 'p']('state_' + _0x1a49e4), _0x1a1764[ON_MOUSE_UP] && _0x1a1764[ON_MOUSE_UP]['call'](_0x5becf1[ON_MOUSE_UP], _0x34ab22);
    }, this['buttonDown'] = function () {
        _0x881fbd['scaleX'] = _0x572ad4 - 0.1, _0x881fbd['scaleY'] = _0x572ad4 - 0.1, _0x1a1764[ON_MOUSE_DOWN] && _0x1a1764[ON_MOUSE_DOWN]['call'](_0x5becf1[ON_MOUSE_DOWN], _0x34ab22);
    }, this['getButtonI' + 'mage'] = function () {
        return _0x881fbd;
    }, this['setPositio' + 'n'] = function (_0x2c4df8, _0x523fef) {
        _0x881fbd['x'] = _0x2c4df8, _0x881fbd['y'] = _0x523fef;
    }, this['setVisible'] = function (_0x956d8e) {
        _0x881fbd['visible'] = _0x956d8e;
    }, this['_init'](_0x542ab4, _0x4a6cf2, _0x15fa95, _0x125905);
}