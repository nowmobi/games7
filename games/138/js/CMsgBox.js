function CMsgBox(_0x4ea7f6, _0x5989e2) {
    var _0x4f0081, _0x1077f2, _0x564503, _0x42326c, _0x59702e;
    this['_init'] = function (_0xa4ffcd) {
        _0x42326c = new createjs['Container'](), _0x59702e['addChild'](_0x42326c);
        var _0x37a986;
        _0x37a986 = new createjs['Shape'](), _0x37a986['graphics']['beginFill']('black')['drawRect'](0x0, 0x0, CANVAS_WIDTH, CANVAS_HEIGHT), _0x37a986['alpha'] = 0.5, _0x37a986['on']('click', function () {
        }), _0x42326c['addChild'](_0x37a986);
        var _0x11c7b2 = s_oSpriteLibrary['getSprite']('msg_box'), _0x1002b6 = createBitmap(_0x11c7b2);
        _0x1002b6['x'] = CANVAS_WIDTH_HALF, _0x1002b6['y'] = CANVAS_HEIGHT_HALF, _0x1002b6['regX'] = _0x11c7b2['width'] * 0.5, _0x1002b6['regY'] = _0x11c7b2['height'] * 0.5, _0x42326c['addChild'](_0x1002b6), _0x4f0081 = new createjs['Text'](TEXT_ERR_LS, FONT_SIZE_MESSAGE_BOX + PRIMARY_FONT, '#fff'), _0x4f0081['x'] = CANVAS_WIDTH_HALF, _0x4f0081['y'] = CANVAS_HEIGHT_HALF - 0x78, _0x4f0081['textAlign'] = 'center', _0x4f0081['textBaseli' + 'ne'] = 'middle', _0x4f0081['lineWidth'] = 0x1f4, _0x42326c['addChild'](_0x4f0081), _0x1077f2 = new CGfxButton(CANVAS_WIDTH_HALF, CANVAS_HEIGHT_HALF + 0x5a, s_oSpriteLibrary['getSprite']('but_yes'), _0x42326c), _0x1077f2['addEventLi' + 'stener'](ON_MOUSE_UP, this['_onButOk'], this);
    }, this['_onButOk'] = function () {
        _0x564503['unload']();
    }, this['unload'] = function () {
        _0x1077f2['unload'](), _0x59702e['removeChil' + 'd'](_0x42326c);
    }, _0x564503 = this, _0x59702e = _0x5989e2, this['_init'](_0x4ea7f6);
}