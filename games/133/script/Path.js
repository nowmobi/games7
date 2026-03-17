Array['prototype']['pushAll$'] = function (_0x486b55) {
    _0x486b55 && (_0x486b55 instanceof Array ? this['push']['apply'](this, _0x486b55) : console['error']('参数items必须为' + '数组类型'));
}, Array['prototype']['insert$'] = function (_0x3f2df2, _0x543545) {
    this['splice'](_0x3f2df2, 0x0, _0x543545);
}, Array['prototype']['remove$'] = function (_0x2b2f52) {
    for (var _0x3a01da = this['length'] - 0x1; _0x3a01da >= 0x0; _0x3a01da--)
        this[_0x3a01da] == _0x2b2f52 && this['splice'](_0x3a01da, 0x1);
}, Array['prototype']['removeAt$'] = function (_0x51d9d3) {
    var _0x11f82d = this[_0x51d9d3];
    return this['splice'](_0x51d9d3, 0x1), _0x11f82d;
}, Array['prototype']['removeAll$'] = function () {
    this['length'] = 0x0;
}, Array['prototype']['contains$'] = function (_0x283480) {
    return -0x1 != this['indexOf'](_0x283480);
}, Array['prototype']['last$'] = function () {
    return this[this['length'] - 0x1];
}, Array['prototype']['isEmpty$'] = function () {
    return 0x0 == this['length'];
}, Array['prototype']['clone$'] = function () {
    let _0x1b33f6, _0x3a7987 = [], _0xcf00f2 = this['length'];
    for (_0x1b33f6 = 0x0; _0x1b33f6 < _0xcf00f2; _0x1b33f6++)
        _0x3a7987['push'](this[_0x1b33f6]);
    return _0x3a7987;
}, String['prototype']['startWith$'] = function (_0x22697a) {
    var _0x1e947f = '^' + _0x22697a, _0x35da6a = Laya['Pool']['getItem'](_0x1e947f, RegExp);
    null == _0x35da6a && (_0x35da6a = new RegExp(_0x1e947f));
    var _0x774430 = _0x35da6a['test'](this);
    return Laya['Pool']['recover'](_0x1e947f, _0x35da6a), _0x774430;
}, String['prototype']['endWith$'] = function (_0x177ce0) {
    var _0x4950b3 = _0x177ce0 + '$', _0x246030 = Laya['Pool']['getItem'](_0x4950b3, RegExp);
    null == _0x246030 && (_0x246030 = new RegExp(_0x4950b3));
    var _0x32f4c0 = _0x246030['test'](this);
    return Laya['Pool']['recover'](_0x4950b3, _0x246030), _0x32f4c0;
}, String['prototype']['replaceAll' + '$'] = function (_0x381dc5, _0x89cba8) {
    return this['split'](_0x381dc5)['join'](_0x89cba8);
}, String['prototype']['contains$'] = function (_0x42302c) {
    return -0x1 != this['indexOf'](_0x42302c);
}, window['now$'] = function () {
    return this['Date']['now']();
};