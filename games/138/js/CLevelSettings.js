function CLevelSettings(_0x11c3b6) {
    var _0xeb517f, _0x181b95;
    this['init'] = function (_0x5b2ff3) {
        _0x181b95 = 0x0, _0xeb517f = _0x5b2ff3, NUM_LEVELS = Object['keys'](_0xeb517f)['length'], s_oLevelSettings = this;
    }, this['loadLevel'] = function (_0x598a9e) {
        _0x181b95 = _0x598a9e, MOVES_INFO = _0xeb517f[_0x598a9e]['moves'], PIECES_SOLUTION = _0xeb517f[_0x598a9e]['pieces_sol' + 'ution'], EXTRA_PIECES = _0xeb517f[_0x598a9e]['extra_piec' + 'es'], STARS_INFO = [
            LS_STARS[_0x598a9e]['star_0'],
            LS_STARS[_0x598a9e]['star_1'],
            LS_STARS[_0x598a9e]['star_2']
        ];
    }, this['nextLevel'] = function () {
        _0x181b95 < _0xeb517f['length'] && (_0x181b95++, this['loadLevel'](_0x181b95));
    }, this['getNextLev' + 'el'] = function () {
        return _0x181b95 < _0xeb517f['length'] ? _0x181b95 + 0x2 : _0x181b95 + 0x1;
    }, this['getCurrent' + 'Level'] = function () {
        return _0x181b95;
    }, this['getNumLeve' + 'l'] = function () {
        return _0xeb517f['length'];
    }, this['deleteSave' + 'Data'] = function () {
        var _0x5e7e86 = s_oSpriteLibrary['getSprite']('msg_box'), _0x32f268 = new createjs['Container'](), _0x1be90f = new createBitmap(_0x5e7e86, _0x5e7e86['width'], _0x5e7e86['height']);
        _0x1be90f['regX'] = _0x5e7e86['width'] * 0.5, _0x1be90f['regY'] = _0x5e7e86['height'] * 0.5;
        var _0x4e978b = new createjs['Text'](TEXT_DELETE_SAVE, '\x2040px\x20' + PRIMARY_FONT, '#FFFFFF');
        _0x4e978b['y'] = -0xb4, _0x4e978b['textAlign'] = 'center', _0x4e978b['lineWidth'] = 0x2bc, _0x32f268['x'] = CANVAS_WIDTH_HALF, _0x32f268['y'] = CANVAS_HEIGHT_HALF, _0x32f268['alpha'] = 0x0;
        var _0x5db047 = new createjs['Shape']();
        _0x5db047['graphics']['beginFill']('#000000')['drawRect'](-CANVAS_WIDTH_HALF, -CANVAS_HEIGHT_HALF, CANVAS_WIDTH, CANVAS_HEIGHT), _0x5db047['alpha'] = 0.5, _0x5db047['on']('mousedown', function () {
        }, this), s_oStage['addChild'](_0x32f268), _0x32f268['addChild'](_0x5db047, _0x1be90f, _0x4e978b);
        var _0x32978e = new CGfxButton(-0x64, +0x6e, s_oSpriteLibrary['getSprite']('but_yes'), _0x32f268), _0x5cc607 = new CGfxButton(+0x64, +0x6e, s_oSpriteLibrary['getSprite']('but_exit'), _0x32f268);
        _0x5cc607['pulseAnima' + 'tion'](), _0x5cc607['addEventLi' + 'stener'](ON_MOUSE_UP, function () {
            new createjs['Tween']['get'](_0x32f268)['to']({ 'alpha': 0x0 }, 0x1f4)['call'](function () {
                s_oStage['removeChil' + 'd'](_0x32f268);
            });
        }, this), _0x32978e['addEventLi' + 'stener'](ON_MOUSE_UP, function () {
            clearAllItem(), s_oMain['loadUserDa' + 'ta'](), new createjs['Tween']['get'](_0x32f268)['to']({ 'alpha': 0x0 }, 0x1f4)['call'](function () {
                s_oStage['removeChil' + 'd'](_0x32f268);
            });
        }, this), new createjs['Tween']['get'](_0x32f268)['to']({ 'alpha': 0x1 }, 0x1f4);
    }, this['init'](_0x11c3b6);
}
s_oLevelSettings = null;