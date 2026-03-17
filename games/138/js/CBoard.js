function CBoard(_0x42cce9, _0x150c71) {
    var _0x1936ce, _0x5d4d07, _0x357005, _0x5539d8, _0x3450b0, _0x57d47e, _0x3a0cab;
    this['_init'] = function () {
        _0x357005 = _0x150c71, _0x1936ce = _0x42cce9, _0x5539d8 = [], this['initSquare' + 'MatrixCoor' + 'dinates'](), this['initBoardC' + 'oordinates']();
        for (var _0x574f96 = 0x0; _0x574f96 < PIECES_SOLUTION['length']; _0x574f96++) {
            var _0x529a5a = this['findSquare' + 'Position'](PIECES_SOLUTION[_0x574f96]['column'], PIECES_SOLUTION[_0x574f96]['row']), _0x309924 = new CPipe(PIECES_SOLUTION[_0x574f96]['type'], PIECES_SOLUTION[_0x574f96]['column'], PIECES_SOLUTION[_0x574f96]['row'], _0x1936ce, _0x529a5a, _0x3450b0, _0x57d47e);
            _0x5539d8['push'](_0x309924);
        }
        ;
        for (var _0x574f96 = 0x0; _0x574f96 < EXTRA_PIECES['length']; _0x574f96++) {
            var _0x529a5a = this['findSquare' + 'Position'](PIECES_SOLUTION[_0x574f96]['column'], PIECES_SOLUTION[_0x574f96]['row']), _0x309924 = new CPipe(EXTRA_PIECES[_0x574f96]['type'], EXTRA_PIECES[_0x574f96]['column'], EXTRA_PIECES[_0x574f96]['row'], _0x1936ce, _0x529a5a, _0x3450b0, _0x57d47e);
            _0x5539d8['push'](_0x309924);
        }
        ;
        this['randomizeB' + 'oard']();
    }, this['initSquare' + 'MatrixCoor' + 'dinates'] = function () {
        _0x3450b0 = [], _0x57d47e = [];
        for (var _0x3f236a = 0x0; _0x3f236a < NUM_SQUARE_COLUMNS; _0x3f236a++) {
            _0x3450b0[_0x3f236a] = EDGEBOARD_X + BOARD_START_LEFT + SQUARES_SIZE * _0x3f236a;
        }
        ;
        for (var _0x1a12fe = 0x0; _0x1a12fe < NUM_SQUARE_ROWS; _0x1a12fe++) {
            _0x57d47e[_0x1a12fe] = EDGEBOARD_Y + BOARD_START_TOP + SQUARES_SIZE * _0x1a12fe;
        }
        ;
    }, this['initBoardC' + 'oordinates'] = function () {
        _0x3a0cab = [];
        var _0x158365 = [];
        for (var _0x379baf = 0x0; _0x379baf < _0x57d47e['length']; _0x379baf++) {
            for (var _0x4fa41c = 0x0; _0x4fa41c < _0x3450b0['length']; _0x4fa41c++) {
                _0x158365 = [
                    _0x3450b0[_0x4fa41c],
                    _0x57d47e[_0x379baf]
                ], _0x3a0cab['push'](_0x158365);
            }
            ;
        }
        ;
    }, this['returnBoar' + 'dCoordinat' + 'es'] = function () {
        return _0x3a0cab;
    }, this['randomizeB' + 'oard'] = function () {
        var _0xa8fc98 = 0x0;
        for (var _0x11fb94 = 0x0; _0x11fb94 < _0x5539d8['length']; _0x11fb94++) {
            var _0x204b35 = 0x5a * Math['floor'](Math['random']() * 0x3 + 0x0);
            _0x204b35 === 0x0 && _0xa8fc98++;
            ;
            _0x5539d8[_0x11fb94]['rotatePipe'](_0x204b35);
        }
        ;
        _0xa8fc98 * 0x64 / _0x5539d8['length'] > RANDOM_MIN_PERCENTAGE && this['randomizeB' + 'oard']();
        ;
    }, this['getContain' + 'er'] = function () {
        return _0x1936ce;
    }, this['getSquare'] = function (_0x516a63) {
        return _0x5539d8[_0x516a63];
    }, this['getArray'] = function () {
        return _0x5539d8;
    }, this['findSquare' + 'WithItsPos' + 'ition'] = function (_0x4dfebe, _0x21e8d3) {
        for (var _0x5358fd = 0x0; _0x5358fd < _0x5539d8['length']; _0x5358fd++) {
            if (_0x5539d8[_0x5358fd]['getColumn']() === _0x4dfebe && _0x5539d8[_0x5358fd]['getRow']() === _0x21e8d3)
                return _0x5539d8[_0x5358fd];
            ;
        }
        ;
    }, this['findSquare' + 'Position'] = function (_0x264e12, _0x1a7c19) {
        for (var _0xedc3d8 = 0x0; _0xedc3d8 < _0x3a0cab['length']; _0xedc3d8++) {
            if (_0x3a0cab[_0xedc3d8][0x0] === _0x3450b0[_0x264e12] && _0x3a0cab[_0xedc3d8][0x1] === _0x57d47e[_0x1a7c19])
                return _0xedc3d8;
            ;
        }
        ;
    }, this['unload'] = function () {
        _0x1936ce['removeAllC' + 'hildren']();
    }, _0x5d4d07 = this, this['_init']();
}