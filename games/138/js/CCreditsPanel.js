function CCreditsPanel() {
    var _0x2fc95c, _0x38cd91, _0x5d9ce3, _0x139b86, _0x193ab4, _0x53f040, _0x3e3bb6, _0x8cf3a2, _0xbd87c, _0x49f694;
    this['_init'] = function () {
        _0x38cd91 = new createjs['Shape'](), _0x38cd91['graphics']['beginFill']('black')['drawRect'](0x0, 0x0, CANVAS_WIDTH, CANVAS_HEIGHT), _0x38cd91['alpha'] = 0.7, _0x38cd91['on']('mousedown', function () {
        }), s_oStage['addChild'](_0x38cd91);
        var _0x453a3f = s_oSpriteLibrary['getSprite']('msg_box');
        _0x49f694 = CANVAS_HEIGHT + _0x453a3f['height'] * 0.5, _0x8cf3a2 = new createjs['Container'](), _0x8cf3a2['y'] = _0x49f694, s_oStage['addChild'](_0x8cf3a2), _0x2fc95c = createBitmap(_0x453a3f), _0x2fc95c['regX'] = _0x453a3f['width'] * 0.5, _0x2fc95c['regY'] = _0x453a3f['height'] * 0.5, _0x2fc95c['x'] = CANVAS_WIDTH_HALF, _0x2fc95c['y'] = CANVAS_HEIGHT_HALF, _0x8cf3a2['addChild'](_0x2fc95c), _0x193ab4 = new createjs['Text'](TEXT_CREDITS_DEVELOPED, '50px\x20' + PRIMARY_FONT, PRIMARY_FONT_COLOR), _0x193ab4['textAlign'] = 'center', _0x193ab4['textBaseli' + 'ne'] = 'alphabetic', _0x193ab4['x'] = CANVAS_WIDTH_HALF, _0x193ab4['y'] = CANVAS_HEIGHT_HALF - 0x46, _0x8cf3a2['addChild'](_0x193ab4), _0x3db3dc = s_oSpriteLibrary['getSprite']('logo_ctl'), _0x5d9ce3 = createBitmap(_0x3db3dc), _0x5d9ce3['regX'] = _0x3db3dc['width'] * 0.5, _0x5d9ce3['regY'] = _0x3db3dc['height'] * 0.5, _0x5d9ce3['x'] = CANVAS_WIDTH_HALF, _0x5d9ce3['y'] = CANVAS_HEIGHT_HALF, _0x8cf3a2['addChild'](_0x5d9ce3), _0x3e3bb6 = new createjs['Text'](TEXT_LINK, '36px\x20' + PRIMARY_FONT, PRIMARY_FONT_COLOR), _0x3e3bb6['textAlign'] = 'center', _0x3e3bb6['textBaseli' + 'ne'] = 'alphabetic', _0x3e3bb6['x'] = CANVAS_WIDTH_HALF, _0x3e3bb6['y'] = CANVAS_HEIGHT_HALF + 0x6e, _0x8cf3a2['addChild'](_0x3e3bb6), _0x53f040 = new createjs['Shape'](), _0x53f040['graphics']['beginFill']('#0f0f0f')['drawRect'](0x0, 0x0, CANVAS_WIDTH, CANVAS_HEIGHT), _0x53f040['alpha'] = 0.01, _0x53f040['on']('click', this['_onLogoBut' + 'Release']), _0x8cf3a2['addChild'](_0x53f040);
        !s_bMobile && (_0x53f040['cursor'] = 'pointer');
        ;
        var _0x3db3dc = s_oSpriteLibrary['getSprite']('but_exit');
        _0xbd87c = {
            'x': CANVAS_WIDTH_HALF + 0xeb,
            'y': CANVAS_HEIGHT_HALF - 0x7d
        }, _0x139b86 = new CGfxButton(_0xbd87c['x'], _0xbd87c['y'], _0x3db3dc, _0x8cf3a2), _0x139b86['addEventLi' + 'stener'](ON_MOUSE_UP, this['unload'], this), new createjs['Tween']['get'](_0x8cf3a2)['to']({ 'y': 0x0 }, 0x3e8, createjs['Ease']['backOut']);
    }, this['unload'] = function () {
        createjs['Tween']['get'](_0x38cd91)['to']({ 'alpha': 0x0 }, 0x1f4), createjs['Tween']['get'](_0x8cf3a2)['to']({ 'y': _0x49f694 }, 0x190, createjs['Ease']['backIn'])['call'](function () {
            _0x53f040['off']('click', this['_onLogoBut' + 'Release']), _0x139b86['unload'](), _0x139b86 = null, s_oStage['removeChil' + 'd'](_0x8cf3a2, _0x38cd91);
        });
    }, this['_onLogoBut' + 'Release'] = function () {
    }, this['_init']();
}