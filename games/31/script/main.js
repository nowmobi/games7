var _0x5a46 = ['tinted', 'keyboard', 'keydown', 'key', 'show', 'player2', 'clearTint', 'Sine.easeInOut', 'lose', 'gameover', 'Sine.easeOut', 'txt_', 'end', 'paused', 'txt_paused', 'resume', 'showBanner', 'FIT', 'redfoc', 'Scale', 'CENTER_BOTH', 'Game', 'GD_OPTIONS', 'i8j2zx1c8m4pm9f6xx7o1ycf02u0rn3a', 'name', 'SDK_GAME_START', 'SDK_GAME_PAUSE', 'SDK_GDPR_TRACKING', 'SDK_GDPR_TARGETING', 'getElementsByTagName', 'createElement', 'src', 'parentNode', 'insertBefore', 'local', 'boot', 'preload', 'load', 'image', 'img/background.png', 'game_title', 'btn_start', 'img/btn_start.png', 'create', 'scene', 'start', 'Scene', 'group', 'add', 'sprite', 'background', 'alpha', 'rectangle', 'addMultiple', 'progress', 'width', 'img/board.png', 'img/shadow_board.png', 'img/btn_pause.png', 'btn_sound', 'btn_sound_off', 'btn_multi', 'img/btn_single.png', 'btn_exit', 'img/btn_exit.png', 'btn_close', 'img/btn_close.png', 'btn_restart', 'img/btn_restart.png', 'btn_resume', 'img/btn_resume.png', 'highlight', 'img/highlight.png', 'txt_lose', 'img/txt_lose.png', 'txt_win', 'img/txt_win.png', 'img/txt_paused.png', 'txt_menu', 'img/txt_menu.png', 'txt_about', 'img/txt_about.png', 'white', 'img/white.png', 'white_king', 'black_king', 'window', 'img/window.png', 'shadow_window', 'img/shadow_window.png', 'header', 'img/header.png', 'about', 'audio', 'click', 'audio/click.mp3', 'completed', 'audio/completed.mp3', 'audio/gameover.mp3', 'placed1', 'audio/placed1.mp3', 'placed2', 'audio/placed2.mp3', 'swap', 'destroy', 'setInteractive', 'tweens', 'Linear', 'gameobjectdown', 'menu', 'Back.easeOut', 'btn_single', 'button', 'single', 'multi', 'btn_about', 'input', 'bot', 'game', 'close', 'play', 'setOrigin', 'shadow_board', 'board', 'sound', 'setTexture', 'btn_pause', 'pause', 'type', 'table', 'piece', 'pos', 'black', 'push', 'White\x20turn', 'Black\x20turn', 'available', 'filled', 'restart', 'exit', 'getLength', 'getChildren', 'king', 'length', 'ori', 'dump', 'save', 'priority', 'splice', 'floor', 'random', 'match', 'win', 'setTint'];
(function(_0x393ce6, _0x493c19) {
    var _0x1e5bf0 = function(_0x52c8d7) {
        while (--_0x52c8d7) {
            _0x393ce6['push'](_0x393ce6['shift']());
        }
    };
    _0x1e5bf0(++_0x493c19);
}(_0x5a46, 0x1e4));
var _0x2ecd = function(_0x4b7b79, _0x245fff) {
    _0x4b7b79 = _0x4b7b79 - 0x0;
    var _0x10a4aa = _0x5a46[_0x4b7b79];
    return _0x10a4aa;
};
window[_0x2ecd('0x0')] = {
    'gameId': _0x2ecd('0x1'),
    'onEvent': function(_0x1e8d7b) {
        switch (_0x1e8d7b[_0x2ecd('0x2')]) {
            case _0x2ecd('0x3'):
                break;
            case _0x2ecd('0x4'):
                break;
            case _0x2ecd('0x5'):
                break;
            case _0x2ecd('0x6'):
                break;
        }
    }
};
(function(_0x162515, _0x5b4543, _0x43a717) {
    var _0x51c204, _0x314eec = _0x162515[_0x2ecd('0x7')](_0x5b4543)[0x0];
    if (_0x162515['getElementById'](_0x43a717)) return;
    _0x51c204 = _0x162515[_0x2ecd('0x8')](_0x5b4543);
    _0x51c204['id'] = _0x43a717;
    _0x51c204[_0x2ecd('0x9')] = 'https://api.gamemonetize.com/sdk.js';
    _0x314eec[_0x2ecd('0xa')][_0x2ecd('0xb')](_0x51c204, _0x314eec);
}(document, 'script', 'gamemonetize-sdk'));
var game_mode = _0x2ecd('0xc');
var game_sound = !![];
class Boot extends Phaser['Scene'] {
    constructor() {
        super(_0x2ecd('0xd'));
    }[_0x2ecd('0xe')]() {
        this[_0x2ecd('0xf')][_0x2ecd('0x10')]('background', _0x2ecd('0x11'));
        this[_0x2ecd('0xf')][_0x2ecd('0x10')](_0x2ecd('0x12'), 'img/game_title.png');
        this[_0x2ecd('0xf')][_0x2ecd('0x10')](_0x2ecd('0x13'), _0x2ecd('0x14'));
    }[_0x2ecd('0x15')]() {
        this[_0x2ecd('0x16')][_0x2ecd('0x17')]('load');
    }
}
class Loader extends Phaser[_0x2ecd('0x18')] {
    constructor() {
        super('load');
        this[_0x2ecd('0x19')];
    }['preload']() {
        this[_0x2ecd('0x19')] = this[_0x2ecd('0x1a')][_0x2ecd('0x19')]();
        this[_0x2ecd('0x1a')][_0x2ecd('0x1b')](0x168, 0x21c, _0x2ecd('0x1c'));
        this[_0x2ecd('0x1a')][_0x2ecd('0x1b')](0x168, 0x17c, _0x2ecd('0x12'));
        var _0x7875fc = this[_0x2ecd('0x1a')]['rectangle'](0x168, 0x244, 0x21c, 0x1c, 0x0);
        _0x7875fc[_0x2ecd('0x1d')] = 0.4;
        var _0x3ab3bd = this[_0x2ecd('0x1a')][_0x2ecd('0x1e')](0x168, 0x244, 0x20e, 0x10, 0xffffff);
        this['group'][_0x2ecd('0x1f')]([_0x7875fc, _0x3ab3bd]);
        this['load']['on'](_0x2ecd('0x20'), function(_0x934d8d) {
            _0x3ab3bd[_0x2ecd('0x21')] = 0x20e * _0x934d8d;
        });
        this[_0x2ecd('0xf')][_0x2ecd('0x10')]('board', _0x2ecd('0x22'));
        this[_0x2ecd('0xf')][_0x2ecd('0x10')]('shadow_board', _0x2ecd('0x23'));
        this[_0x2ecd('0xf')][_0x2ecd('0x10')]('btn_pause', _0x2ecd('0x24'));
        this[_0x2ecd('0xf')][_0x2ecd('0x10')](_0x2ecd('0x25'), 'img/btn_sound.png');
        this[_0x2ecd('0xf')][_0x2ecd('0x10')](_0x2ecd('0x26'), 'img/btn_sound_off.png');
        this[_0x2ecd('0xf')]['image'](_0x2ecd('0x27'), 'img/btn_multi.png');
        this[_0x2ecd('0xf')]['image']('btn_single', _0x2ecd('0x28'));
        this[_0x2ecd('0xf')][_0x2ecd('0x10')]('btn_about', 'img/btn_about.png');
        this[_0x2ecd('0xf')][_0x2ecd('0x10')](_0x2ecd('0x29'), _0x2ecd('0x2a'));
        this['load'][_0x2ecd('0x10')](_0x2ecd('0x2b'), _0x2ecd('0x2c'));
        this[_0x2ecd('0xf')][_0x2ecd('0x10')](_0x2ecd('0x2d'), _0x2ecd('0x2e'));
        this[_0x2ecd('0xf')][_0x2ecd('0x10')](_0x2ecd('0x2f'), _0x2ecd('0x30'));
        this[_0x2ecd('0xf')]['image'](_0x2ecd('0x31'), _0x2ecd('0x32'));
        this[_0x2ecd('0xf')][_0x2ecd('0x10')](_0x2ecd('0x33'), _0x2ecd('0x34'));
        this['load'][_0x2ecd('0x10')]('txt_player1', 'img/txt_player1.png');
        this[_0x2ecd('0xf')]['image']('txt_player2', 'img/txt_player2.png');
        this['load'][_0x2ecd('0x10')](_0x2ecd('0x35'), _0x2ecd('0x36'));
        this['load'][_0x2ecd('0x10')]('txt_paused', _0x2ecd('0x37'));
        this['load'][_0x2ecd('0x10')](_0x2ecd('0x38'), _0x2ecd('0x39'));
        this[_0x2ecd('0xf')][_0x2ecd('0x10')](_0x2ecd('0x3a'), _0x2ecd('0x3b'));
        this['load'][_0x2ecd('0x10')](_0x2ecd('0x3c'), _0x2ecd('0x3d'));
        this['load'][_0x2ecd('0x10')](_0x2ecd('0x3e'), 'img/white_king.png');
        this[_0x2ecd('0xf')][_0x2ecd('0x10')]('black', 'img/black.png');
        this['load'][_0x2ecd('0x10')](_0x2ecd('0x3f'), 'img/black_king.png');
        this[_0x2ecd('0xf')][_0x2ecd('0x10')](_0x2ecd('0x40'), _0x2ecd('0x41'));
        this[_0x2ecd('0xf')][_0x2ecd('0x10')](_0x2ecd('0x42'), _0x2ecd('0x43'));
        this[_0x2ecd('0xf')]['image'](_0x2ecd('0x44'), _0x2ecd('0x45'));
        this[_0x2ecd('0xf')][_0x2ecd('0x10')](_0x2ecd('0x46'), 'img/about.png');
        this[_0x2ecd('0xf')][_0x2ecd('0x47')](_0x2ecd('0x48'), _0x2ecd('0x49'));
        this[_0x2ecd('0xf')][_0x2ecd('0x47')](_0x2ecd('0x4a'), _0x2ecd('0x4b'));
        this[_0x2ecd('0xf')][_0x2ecd('0x47')]('gameover', _0x2ecd('0x4c'));
        this['load']['audio'](_0x2ecd('0x4d'), _0x2ecd('0x4e'));
        this['load'][_0x2ecd('0x47')](_0x2ecd('0x4f'), _0x2ecd('0x50'));
        this['load'][_0x2ecd('0x47')](_0x2ecd('0x51'), 'audio/swap.mp3');
    }[_0x2ecd('0x15')]() {
        this['group'][_0x2ecd('0x52')](!![], !![]);
        var _0x30ec11 = this['add'][_0x2ecd('0x1b')](0x168, 0x244, _0x2ecd('0x13'))[_0x2ecd('0x53')]();
        this[_0x2ecd('0x54')][_0x2ecd('0x1a')]({
            'targets': _0x30ec11,
            'scaleX': 0.95,
            'scaleY': 0.95,
            'ease': _0x2ecd('0x55'),
            'duration': 0x258,
            'yoyo': !![],
            'loop': -0x1
        });
        this['input']['on'](_0x2ecd('0x56'), function() {
            show_ad();
            this[_0x2ecd('0x16')][_0x2ecd('0x17')](_0x2ecd('0x57'));
        }, this);
    }
}
class Menu extends Phaser[_0x2ecd('0x18')] {
    constructor() {
        super(_0x2ecd('0x57'));
    }[_0x2ecd('0x15')]() {
        var _0x12a809 = this;
        var _0x2f7b1a = _0x2ecd('0x57');
        var _0x320da2;
        this[_0x2ecd('0x1a')]['sprite'](0x168, 0x21c, _0x2ecd('0x1c'));
        var _0x1ce52f = this[_0x2ecd('0x1a')][_0x2ecd('0x1b')](0x194, 0x2d0, _0x2ecd('0x42'));
        var _0x586af8 = this[_0x2ecd('0x1a')]['sprite'](0x168, -0x90, _0x2ecd('0x12'))[_0x2ecd('0x53')]();
        var _0x4d05d0 = this[_0x2ecd('0x1a')][_0x2ecd('0x1b')](0x168, 0x268, _0x2ecd('0x40'));
        var _0x39d308 = this['add'][_0x2ecd('0x1b')](0x168, 0x180, 'txt_menu');
        this[_0x2ecd('0x54')][_0x2ecd('0x1a')]({
            'targets': _0x586af8,
            'y': 0x90,
            'ease': _0x2ecd('0x58'),
            'duration': 0x1f4
        });
        var _0x1f7b51 = this['add'][_0x2ecd('0x1b')](0x168, 0x220, _0x2ecd('0x59'))[_0x2ecd('0x53')]();
        _0x1f7b51[_0x2ecd('0x5a')] = !![];
        _0x1f7b51['name'] = _0x2ecd('0x5b');
        var _0x552d09 = this[_0x2ecd('0x1a')][_0x2ecd('0x1b')](0x168, 0x290, 'btn_multi')[_0x2ecd('0x53')]();
        _0x552d09['button'] = !![];
        _0x552d09[_0x2ecd('0x2')] = _0x2ecd('0x5c');
        var _0x5c0b09 = this[_0x2ecd('0x1a')][_0x2ecd('0x1b')](0x168, 0x300, _0x2ecd('0x5d'))[_0x2ecd('0x53')]();
        _0x5c0b09['button'] = !![];
        _0x5c0b09['name'] = _0x2ecd('0x46');
        this[_0x2ecd('0x5e')]['on']('gameobjectdown', function(_0x4e9b8b, _0x1077a8) {
            play_sound(_0x2ecd('0x48'), _0x12a809);
            _0x12a809[_0x2ecd('0x54')]['add']({
                'targets': _0x1077a8,
                'scaleX': 0.9,
                'scaleY': 0.9,
                'ease': _0x2ecd('0x55'),
                'duration': 0x64,
                'yoyo': !![],
                'onComplete': function() {
                    if (_0x2f7b1a === _0x2ecd('0x57')) {
                        if (_0x1077a8[_0x2ecd('0x2')] === _0x2ecd('0x5b')) {
                            game_mode = _0x2ecd('0x5f');
                            _0x12a809[_0x2ecd('0x16')][_0x2ecd('0x17')](_0x2ecd('0x60'));
                        } else if (_0x1077a8[_0x2ecd('0x2')] === _0x2ecd('0x5c')) {
                            game_mode = _0x2ecd('0xc');
                            _0x12a809['scene'][_0x2ecd('0x17')]('game');
                        } else if (_0x1077a8[_0x2ecd('0x2')] === _0x2ecd('0x46')) {
                            _0x2e777b();
                        }
                    } else {
                        if (_0x1077a8[_0x2ecd('0x2')] === _0x2ecd('0x61')) {
                            _0x320da2[_0x2ecd('0x52')](!![], !![]);
                            _0x2f7b1a = 'menu';
                        }
                    }
                }
            });
        });

        function _0x2e777b() {
            _0x2f7b1a = _0x2ecd('0x46');
            _0x320da2 = _0x12a809[_0x2ecd('0x1a')]['group']();
            var _0x4d05d0 = _0x12a809[_0x2ecd('0x1a')][_0x2ecd('0x1b')](0x168, 0x268, _0x2ecd('0x40'));
            var _0x2f839a = _0x12a809[_0x2ecd('0x1a')][_0x2ecd('0x1b')](0x168, 0x180, 'txt_about');
            var _0x400c5e = _0x12a809[_0x2ecd('0x1a')][_0x2ecd('0x1b')](0x168, 0x30c, _0x2ecd('0x2b'))[_0x2ecd('0x53')]();
            _0x400c5e[_0x2ecd('0x5a')] = !![];
            _0x400c5e[_0x2ecd('0x2')] = _0x2ecd('0x61');
            var _0x160fa7 = _0x12a809['add']['sprite'](0x168, 0x258, _0x2ecd('0x46'));
            _0x320da2[_0x2ecd('0x1f')]([_0x4d05d0, _0x2f839a, _0x400c5e, _0x160fa7]);
        }
    }
}
class Game extends Phaser[_0x2ecd('0x18')] {
    constructor() {
        super(_0x2ecd('0x60'));
    }[_0x2ecd('0x15')]() {
        var _0x3d917b = this;
        var _0x16dd67 = _0x2ecd('0x62');
        this[_0x2ecd('0x1a')][_0x2ecd('0x1b')](0x168, 0x21c, _0x2ecd('0x1c'));
        this['add'][_0x2ecd('0x1b')](0x168, 0x0, _0x2ecd('0x44'))[_0x2ecd('0x63')](0.5, 0x0);
        this[_0x2ecd('0x1a')][_0x2ecd('0x1b')](0x191, 0x29f, _0x2ecd('0x64'));
        this[_0x2ecd('0x1a')][_0x2ecd('0x1b')](0x168, 0x21c, _0x2ecd('0x65'));
        var _0x7f67d8 = this[_0x2ecd('0x1a')]['sprite'](0xa0, 0x0, _0x2ecd('0x25'))[_0x2ecd('0x53')]();
        _0x7f67d8[_0x2ecd('0x63')](0.5, 0x0);
        _0x7f67d8[_0x2ecd('0x5a')] = !![];
        _0x7f67d8[_0x2ecd('0x2')] = _0x2ecd('0x66');
        if (!game_sound) {
            _0x7f67d8[_0x2ecd('0x67')](_0x2ecd('0x26'));
        }
        var _0x277f53 = this['add'][_0x2ecd('0x1b')](0x240, 0x0, _0x2ecd('0x68'))['setInteractive']();
        _0x277f53['setOrigin'](0.5, 0x0);
        _0x277f53['button'] = !![];
        _0x277f53[_0x2ecd('0x2')] = _0x2ecd('0x69');
        var _0x5e1d99 = this[_0x2ecd('0x1a')][_0x2ecd('0x19')]();
        var _0x247620 = this[_0x2ecd('0x1a')]['group']();
        var _0x125759 = this[_0x2ecd('0x1a')]['group']();
        var _0x64c090 = ![];
        var _0x545826 = new Array();
        var _0x44f65;
        var _0x541b59 = 0x2;
        var _0x1af517 = ![];
        var _0x2b34dc = 0x12c;
        var _0x57f7b1 = ![];
        var _0x3462c2 = ![];
        var _0x59b568;
        var _0xb84ed0;
        var _0x1c0290 = 0x8d;
        var _0x5d6582 = 0x139;
        var _0x37f0f6 = 0x3f;
        var _0x4bb319 = 0x3f;
        for (let _0x3416cc = 0x0; _0x3416cc < 0x8; _0x3416cc++) {
            let _0x27781e = new Array();
            for (let _0x1c23c2 = 0x0; _0x1c23c2 < 0x8; _0x1c23c2++) {
                let _0x1c6bda = 0x0;
                let _0x5ea14e = 0x2b4369;
                if (_0x64c090) {
                    _0x5ea14e = 0x11173d;
                    _0x64c090 = ![];
                } else {
                    _0x64c090 = !![];
                }
                let _0x2bcd06 = this[_0x2ecd('0x1a')][_0x2ecd('0x1b')](_0x1c0290 + _0x37f0f6 * _0x1c23c2, _0x5d6582 + _0x4bb319 * _0x3416cc, _0x2ecd('0x31'))[_0x2ecd('0x53')]();
                _0x2bcd06[_0x2ecd('0x1d')] = 0x0;
                _0x2bcd06[_0x2ecd('0x6a')] = _0x2ecd('0x6b');
                _0x2bcd06['pos'] = {
                    'x': _0x1c23c2,
                    'y': _0x3416cc
                };
                _0x247620['add'](_0x2bcd06);
                if (_0x3416cc < 0x3) {
                    if (!_0x64c090) {
                        let _0x3e8bb5 = this[_0x2ecd('0x1a')][_0x2ecd('0x1b')](_0x1c0290 + _0x37f0f6 * _0x1c23c2, _0x5d6582 + _0x4bb319 * _0x3416cc, _0x2ecd('0x3c'))[_0x2ecd('0x53')]();
                        _0x3e8bb5[_0x2ecd('0x6a')] = 0x1;
                        _0x3e8bb5[_0x2ecd('0x6c')] = !![];
                        _0x3e8bb5[_0x2ecd('0x6d')] = {
                            'x': _0x1c23c2,
                            'y': _0x3416cc
                        };
                        _0x125759[_0x2ecd('0x1a')](_0x3e8bb5);
                        _0x1c6bda = {
                            'filled': !![],
                            'type': 0x1
                        };
                    }
                } else if (_0x3416cc > 0x4) {
                    if (!_0x64c090) {
                        let _0x19a88a = this[_0x2ecd('0x1a')][_0x2ecd('0x1b')](_0x1c0290 + _0x37f0f6 * _0x1c23c2, _0x5d6582 + _0x4bb319 * _0x3416cc, _0x2ecd('0x6e'))[_0x2ecd('0x53')]();
                        _0x19a88a[_0x2ecd('0x6a')] = 0x2;
                        _0x19a88a[_0x2ecd('0x6c')] = !![];
                        _0x19a88a[_0x2ecd('0x6d')] = {
                            'x': _0x1c23c2,
                            'y': _0x3416cc
                        };
                        _0x125759['add'](_0x19a88a);
                        _0x1c6bda = {
                            'filled': !![],
                            'type': 0x2
                        };
                    }
                }
                if (_0x1c23c2 === 0x7) {
                    if (_0x3416cc % 0x2 === 0x1) {
                        _0x64c090 = ![];
                    } else {
                        _0x64c090 = !![];
                    }
                }
                if (!_0x1c6bda) {
                    _0x1c6bda = {
                        'filled': ![],
                        'type': 0x0
                    };
                }
                _0x27781e[_0x2ecd('0x6f')](_0x1c6bda);
            }
            _0x545826[_0x2ecd('0x6f')](_0x27781e);
        }
        this['input']['on'](_0x2ecd('0x56'), function(_0x3328ad, _0x27ff38) {
            if (_0x27ff38[_0x2ecd('0x6a')] === _0x2ecd('0x6b') || _0x27ff38[_0x2ecd('0x6c')] && _0x16dd67 === _0x2ecd('0x62')) {
                if (_0x27ff38[_0x2ecd('0x6c')]) {
                    play_sound(_0x2ecd('0x4f'), _0x3d917b);
                } else {
                    play_sound(_0x2ecd('0x4d'), _0x3d917b);
                }
                if (game_mode === _0x2ecd('0xc')) {
                    if (_0x545826[_0x27ff38[_0x2ecd('0x6d')]['y']][_0x27ff38[_0x2ecd('0x6d')]['x']]['available']) {
                        _0x47ef17(_0x27ff38[_0x2ecd('0x6d')], _0x545826[_0x27ff38[_0x2ecd('0x6d')]['y']][_0x27ff38[_0x2ecd('0x6d')]['x']]['type']);
                        _0x545826[_0x27ff38[_0x2ecd('0x6d')]['y']][_0x27ff38[_0x2ecd('0x6d')]['x']]['available'] = ![];
                    } else {
                        if (_0x545826[_0x27ff38[_0x2ecd('0x6d')]['y']][_0x27ff38[_0x2ecd('0x6d')]['x']]['filled'] && _0x545826[_0x27ff38['pos']['y']][_0x27ff38['pos']['x']][_0x2ecd('0x6a')] === _0x541b59) {
                            _0x224ca2(_0x545826[_0x27ff38[_0x2ecd('0x6d')]['y']][_0x27ff38[_0x2ecd('0x6d')]['x']][_0x2ecd('0x6a')], _0x27ff38[_0x2ecd('0x6d')]);
                        } else {
                            if (_0x541b59 === 0x1) {
                                alert(_0x2ecd('0x70'));
                            } else {
                                alert(_0x2ecd('0x71'));
                            }
                        }
                    }
                } else if (game_mode === _0x2ecd('0x5f')) {
                    if (_0x545826[_0x27ff38[_0x2ecd('0x6d')]['y']][_0x27ff38[_0x2ecd('0x6d')]['x']][_0x2ecd('0x72')]) {
                        _0x47ef17(_0x27ff38[_0x2ecd('0x6d')], _0x545826[_0x27ff38[_0x2ecd('0x6d')]['y']][_0x27ff38['pos']['x']][_0x2ecd('0x6a')]);
                        _0x545826[_0x27ff38[_0x2ecd('0x6d')]['y']][_0x27ff38[_0x2ecd('0x6d')]['x']][_0x2ecd('0x72')] = ![];
                    } else {
                        if (_0x545826[_0x27ff38['pos']['y']][_0x27ff38['pos']['x']][_0x2ecd('0x73')] && _0x545826[_0x27ff38[_0x2ecd('0x6d')]['y']][_0x27ff38[_0x2ecd('0x6d')]['x']]['type'] === _0x541b59) {
                            _0x224ca2(_0x545826[_0x27ff38[_0x2ecd('0x6d')]['y']][_0x27ff38[_0x2ecd('0x6d')]['x']][_0x2ecd('0x6a')], _0x27ff38[_0x2ecd('0x6d')]);
                        } else {
                            if (_0x541b59 === 0x1) {
                                alert(_0x2ecd('0x70'));
                            } else {
                                alert(_0x2ecd('0x71'));
                            }
                        }
                    }
                }
            }
            if (_0x27ff38[_0x2ecd('0x5a')]) {
                play_sound(_0x2ecd('0x48'), _0x3d917b);
                _0x3d917b['tweens'][_0x2ecd('0x1a')]({
                    'targets': _0x27ff38,
                    'scaleX': 0.9,
                    'scaleY': 0.9,
                    'ease': _0x2ecd('0x55'),
                    'duration': 0x64,
                    'yoyo': !![],
                    'onComplete': function() {
                        if (_0x16dd67 === _0x2ecd('0x62')) {
                            if (_0x27ff38[_0x2ecd('0x2')] === _0x2ecd('0x69')) {
                                _0x476771();
                            } else if (_0x27ff38[_0x2ecd('0x2')] === _0x2ecd('0x66')) {
                                if (game_sound) {
                                    game_sound = ![];
                                    _0x27ff38['setTexture']('btn_sound_off');
                                } else {
                                    game_sound = !![];
                                    _0x27ff38[_0x2ecd('0x67')](_0x2ecd('0x25'));
                                }
                            }
                        } else {
                            if (_0x27ff38[_0x2ecd('0x2')] === 'resume') {
                                _0xb84ed0[_0x2ecd('0x52')](!![], !![]);
                                _0x16dd67 = _0x2ecd('0x62');
                            } else if (_0x27ff38[_0x2ecd('0x2')] === _0x2ecd('0x74')) {
                                show_ad();
                                _0x3d917b['scene']['start'](_0x2ecd('0x60'));
                            } else if (_0x27ff38[_0x2ecd('0x2')] === _0x2ecd('0x75')) {
                                show_ad();
                                _0x3d917b[_0x2ecd('0x16')][_0x2ecd('0x17')](_0x2ecd('0x57'));
                            }
                        }
                    }
                });
            }
        });

        function _0x1f68c8() {
            var _0x236375 = [
                [],
                [],
                [],
                []
            ];
            let _0x10ffdc = _0x125759[_0x2ecd('0x76')]();
            let _0x545004 = _0x125759[_0x2ecd('0x77')]();
            for (let _0x1a9b68 = 0x0; _0x1a9b68 < _0x10ffdc; _0x1a9b68++) {
                let _0x367bf7 = _0x545004[_0x1a9b68];
                if (_0x367bf7[_0x2ecd('0x6a')] === 0x1) {
                    let _0x39d532 = {
                        'x': -0x1,
                        'y': 0x1
                    };
                    _0x123276(_0x39d532, _0x367bf7[_0x2ecd('0x6d')], 0x2);
                    _0x39d532 = {
                        'x': 0x1,
                        'y': 0x1
                    };
                    _0x123276(_0x39d532, _0x367bf7[_0x2ecd('0x6d')], 0x2);
                    if (_0x367bf7[_0x2ecd('0x78')]) {
                        _0x39d532 = {
                            'x': -0x1,
                            'y': -0x1
                        };
                        _0x123276(_0x39d532, _0x367bf7[_0x2ecd('0x6d')], 0x2);
                        _0x39d532 = {
                            'x': 0x1,
                            'y': -0x1
                        };
                        _0x123276(_0x39d532, _0x367bf7[_0x2ecd('0x6d')], 0x2);
                    }
                }
            }
            if (_0x236375[0x0][_0x2ecd('0x79')] === 0x0) {
                for (let _0x3322ee = 0x0; _0x3322ee < _0x10ffdc; _0x3322ee++) {
                    let _0x367bf7 = _0x545004[_0x3322ee];
                    if (_0x367bf7[_0x2ecd('0x6a')] === 0x1) {
                        let _0x39d532 = {
                            'x': -0x1,
                            'y': 0x1
                        };
                        _0x4e9544(_0x39d532, _0x367bf7[_0x2ecd('0x6d')], 0x2);
                        _0x39d532 = {
                            'x': 0x1,
                            'y': 0x1
                        };
                        _0x4e9544(_0x39d532, _0x367bf7[_0x2ecd('0x6d')], 0x2);
                        if (_0x367bf7[_0x2ecd('0x78')]) {
                            _0x39d532 = {
                                'x': -0x1,
                                'y': -0x1
                            };
                            _0x4e9544(_0x39d532, _0x367bf7[_0x2ecd('0x6d')], 0x2);
                            _0x39d532 = {
                                'x': 0x1,
                                'y': -0x1
                            };
                            _0x4e9544(_0x39d532, _0x367bf7[_0x2ecd('0x6d')], 0x2);
                        }
                    }
                }
            }
            if (_0x236375[0x2][_0x2ecd('0x79')] > 0x0 && _0x236375[0x1][_0x2ecd('0x79')] === 0x0) {
                let _0x805a94 = _0x236375[0x2]['length'];
                for (let _0x3322ee = 0x0; _0x3322ee < _0x805a94; _0x3322ee++) {
                    let _0xb3e425 = _0x236375[0x2][_0x3322ee];
                    let _0x5bf65c = {
                        'x': _0xb3e425['x'] - _0xb3e425[_0x2ecd('0x7a')]['x'],
                        'y': _0xb3e425['y'] - _0xb3e425['ori']['y']
                    };
                    _0xb8c482(_0xb3e425, _0x5bf65c);
                    _0x805a94 = _0x236375[0x2][_0x2ecd('0x79')];
                }
            }
            if (_0x236375[0x1][_0x2ecd('0x79')] > 0x0) {
                let _0x2712b5 = _0x236375[0x1][_0x2ecd('0x79')];
                for (let _0x3322ee = 0x0; _0x3322ee < _0x2712b5; _0x3322ee++) {
                    let _0xb3e425 = _0x236375[0x1][_0x3322ee];
                    let _0xe9126d = _0x558bc9(_0xb3e425[_0x2ecd('0x7a')]);
                    if (_0xe9126d) {
                        let _0x5bf65c = {
                            'x': _0xb3e425['x'] - _0xb3e425[_0x2ecd('0x7a')]['x'],
                            'y': _0xb3e425['y'] - _0xb3e425[_0x2ecd('0x7a')]['y']
                        };
                        _0x50c01c(_0xb3e425, _0x5bf65c);
                        _0x2712b5 = _0x236375[0x1][_0x2ecd('0x79')];
                    }
                }
            }

            function _0x50c01c(_0x480bc5, _0x2bfb83) {
                let _0x21d5b6 = {
                    'x': _0x480bc5['x'],
                    'y': _0x480bc5['y']
                };
                let _0x11755b;
                _0x11755b = {
                    'x': 0x1,
                    'y': 0x1
                };
                if (_0x222655(_0x11755b, _0x21d5b6)) {
                    if (_0x545826[_0x21d5b6['y'] + _0x11755b['y']][_0x21d5b6['x'] + _0x11755b['x']][_0x2ecd('0x6a')] === 0x2) {
                        _0x11755b = {
                            'x': -0x1,
                            'y': -0x1
                        };
                        if (_0x222655(_0x11755b, _0x21d5b6)) {
                            if (!_0x545826[_0x21d5b6['y'] + _0x11755b['y']][_0x21d5b6['x'] + _0x11755b['x']][_0x2ecd('0x73')]) {
                                _0x503267(_0x480bc5[_0x2ecd('0x7a')], _0x2ecd('0x7b'));
                            }
                        }
                    }
                }
                _0x11755b = {
                    'x': -0x1,
                    'y': 0x1
                };
                if (_0x222655(_0x11755b, _0x21d5b6)) {
                    if (_0x545826[_0x21d5b6['y'] + _0x11755b['y']][_0x21d5b6['x'] + _0x11755b['x']][_0x2ecd('0x6a')] === 0x2) {
                        _0x11755b = {
                            'x': 0x1,
                            'y': -0x1
                        };
                        if (_0x222655(_0x11755b, _0x21d5b6)) {
                            if (!_0x545826[_0x21d5b6['y'] + _0x11755b['y']][_0x21d5b6['x'] + _0x11755b['x']][_0x2ecd('0x73')]) {
                                _0x503267(_0x480bc5['ori'], _0x2ecd('0x7b'));
                            }
                        }
                    }
                }
            }

            function _0xb8c482(_0xb38f02, _0x58f93c) {
                let _0x3cd73f = {
                    'x': _0xb38f02['x'],
                    'y': _0xb38f02['y']
                };
                let _0x5d7b7e;
                if (_0x222655(_0x58f93c, _0x3cd73f)) {
                    if (_0x545826[_0x3cd73f['y'] + _0x58f93c['y']][_0x3cd73f['x'] + _0x58f93c['x']][_0x2ecd('0x73')] && _0x545826[_0x3cd73f['y'] + _0x58f93c['y']][_0x3cd73f['x'] + _0x58f93c['x']][_0x2ecd('0x6a')] === 0x2) {
                        _0x5d7b7e = {
                            'x': -0x1,
                            'y': _0x58f93c['y'] * -0x1
                        };
                        if (_0x222655(_0x5d7b7e, _0xb38f02[_0x2ecd('0x7a')])) {
                            if (_0x545826[_0xb38f02[_0x2ecd('0x7a')]['y'] + _0x5d7b7e['y']][_0xb38f02['ori']['x'] + _0x5d7b7e['x']][_0x2ecd('0x73')] && _0x545826[_0xb38f02[_0x2ecd('0x7a')]['y'] + _0x5d7b7e['y']][_0xb38f02[_0x2ecd('0x7a')]['x'] + _0x5d7b7e['x']][_0x2ecd('0x6a')] === 0x1) {
                                _0x5d7b7e = {
                                    'x': -0x2,
                                    'y': _0x58f93c['y'] * -0x2
                                };
                                if (_0x222655(_0x5d7b7e, _0xb38f02[_0x2ecd('0x7a')])) {
                                    if (!_0x545826[_0xb38f02[_0x2ecd('0x7a')]['y'] + _0x5d7b7e['y']][_0xb38f02[_0x2ecd('0x7a')]['x'] + _0x5d7b7e['x']][_0x2ecd('0x73')]) {
                                        _0x503267(_0xb38f02['ori'], _0x2ecd('0x7b'));
                                    }
                                }
                            }
                        }
                        _0x5d7b7e = {
                            'x': 0x1,
                            'y': _0x58f93c['y'] * -0x1
                        };
                        if (_0x222655(_0x5d7b7e, _0xb38f02[_0x2ecd('0x7a')])) {
                            if (_0x545826[_0xb38f02['ori']['y'] + _0x5d7b7e['y']][_0xb38f02[_0x2ecd('0x7a')]['x'] + _0x5d7b7e['x']]['filled'] && _0x545826[_0xb38f02[_0x2ecd('0x7a')]['y'] + _0x5d7b7e['y']][_0xb38f02[_0x2ecd('0x7a')]['x'] + _0x5d7b7e['x']][_0x2ecd('0x6a')] === 0x1) {
                                _0x5d7b7e = {
                                    'x': 0x2,
                                    'y': _0x58f93c['y'] * -0x2
                                };
                                if (_0x222655(_0x5d7b7e, _0xb38f02[_0x2ecd('0x7a')])) {
                                    if (!_0x545826[_0xb38f02[_0x2ecd('0x7a')]['y'] + _0x5d7b7e['y']][_0xb38f02[_0x2ecd('0x7a')]['x'] + _0x5d7b7e['x']][_0x2ecd('0x73')]) {
                                        _0x503267(_0xb38f02['ori'], _0x2ecd('0x7b'));
                                    }
                                }
                            }
                        }
                    } else if (_0x545826[_0x3cd73f['y'] + _0x58f93c['y']][_0x3cd73f['x'] + _0x58f93c['x']]['type'] === 0x1 || !_0x545826[_0x3cd73f['y'] + _0x58f93c['y']][_0x3cd73f['x'] + _0x58f93c['x']][_0x2ecd('0x73')]) {
                        if (_0x58f93c['x'] > 0x0) {
                            let _0x477984 = 0x0;
                            _0x5d7b7e = {
                                'x': 0x1,
                                'y': -0x1
                            };
                            if (_0x222655(_0x5d7b7e, _0x3cd73f)) {
                                if (_0x545826[_0x3cd73f['y'] + _0x5d7b7e['y']][_0x3cd73f['x'] + _0x5d7b7e['x']][_0x2ecd('0x73')]) {
                                    _0x477984++;
                                }
                            }
                            _0x5d7b7e = {
                                'x': -0x1,
                                'y': 0x1
                            };
                            if (_0x222655(_0x5d7b7e, _0x3cd73f)) {
                                if (_0x545826[_0x3cd73f['y'] + _0x5d7b7e['y']][_0x3cd73f['x'] + _0x5d7b7e['x']][_0x2ecd('0x73')]) {
                                    _0x477984++;
                                }
                            }
                            if (_0x477984 === 0x2) {
                                _0xbc62e9(_0xb38f02[_0x2ecd('0x7a')], _0x2ecd('0x7c'));
                            }
                        } else {
                            let _0x37a4e9 = 0x0;
                            _0x5d7b7e = {
                                'x': -0x1,
                                'y': -0x1
                            };
                            if (_0x222655(_0x5d7b7e, _0x3cd73f)) {
                                if (_0x545826[_0x3cd73f['y'] + _0x5d7b7e['y']][_0x3cd73f['x'] + _0x5d7b7e['x']][_0x2ecd('0x73')]) {
                                    _0x37a4e9++;
                                }
                            }
                            _0x5d7b7e = {
                                'x': 0x1,
                                'y': 0x1
                            };
                            if (_0x222655(_0x5d7b7e, _0x3cd73f)) {
                                if (_0x545826[_0x3cd73f['y'] + _0x5d7b7e['y']][_0x3cd73f['x'] + _0x5d7b7e['x']][_0x2ecd('0x73')]) {
                                    _0x37a4e9++;
                                }
                            }
                            if (_0x37a4e9 === 0x2) {
                                _0xbc62e9(_0xb38f02[_0x2ecd('0x7a')], 'save');
                            }
                        }
                    }
                }
            }

            function _0x503267(_0x5a5b1f, _0x33cc14) {
                _0x18478d: for (let _0x137ec8 = 0x1; _0x137ec8 < 0x3; _0x137ec8++) {
                    let _0x2afee2 = _0x236375[_0x137ec8][_0x2ecd('0x79')];
                    for (let _0x1e55fa = 0x0; _0x1e55fa < _0x2afee2; _0x1e55fa++) {
                        let _0x95268e = _0x236375[_0x137ec8][_0x1e55fa];
                        if (_0x95268e[_0x2ecd('0x7a')]['x'] === _0x5a5b1f['x'] && _0x95268e[_0x2ecd('0x7a')]['y'] === _0x5a5b1f['y']) {
                            if (_0x33cc14 === _0x2ecd('0x7b')) {
                                _0x236375[0x3][_0x2ecd('0x6f')](_0x95268e);
                            } else if (_0x2ecd('0x7d')) {
                                _0x236375[0x0][_0x2ecd('0x6f')](_0x95268e);
                            } else if (_0x2ecd('0x7c')) {
                                _0x236375[0x1][_0x2ecd('0x6f')](_0x95268e);
                            }
                            _0x236375[_0x137ec8]['splice'](_0x1e55fa, _0x1e55fa + 0x1);
                            break _0x18478d;
                        }
                    }
                }
            }

            function _0xbc62e9(_0x4c7438) {
                let _0xb6f4a6 = _0x236375[0x2][_0x2ecd('0x79')];
                for (let _0x3e075c = 0x0; _0x3e075c < _0xb6f4a6; _0x3e075c++) {
                    let _0x36e6f8 = _0x236375[0x2][_0x3e075c];
                    if (_0x36e6f8['ori']['x'] === _0x4c7438['x'] && _0x36e6f8[_0x2ecd('0x7a')]['y'] === _0x4c7438['y']) {
                        _0x236375[0x1]['push'](_0x36e6f8);
                        _0x236375[0x2][_0x2ecd('0x7e')](_0x3e075c, _0x3e075c + 0x1);
                        break;
                    }
                }
            }

            function _0x4e9544(_0x2bbbd7, _0x56d6fe, _0x161065) {
                if (_0x222655(_0x2bbbd7, _0x56d6fe)) {
                    if (_0x545826[_0x56d6fe['y'] + _0x2bbbd7['y']][_0x56d6fe['x'] + _0x2bbbd7['x']][_0x2ecd('0x73')]) {
                        if (_0x545826[_0x56d6fe['y'] + _0x2bbbd7['y']][_0x56d6fe['x'] + _0x2bbbd7['x']][_0x2ecd('0x6a')] === _0x161065) {
                            _0x2bbbd7 = {
                                'x': _0x2bbbd7['x'] * -0x1,
                                'y': _0x2bbbd7['y'] * -0x1
                            };
                            if (_0x222655(_0x2bbbd7, _0x56d6fe)) {
                                if (_0x545826[_0x56d6fe['y'] + _0x2bbbd7['y']][_0x56d6fe['x'] + _0x2bbbd7['x']]['filled'] && _0x545826[_0x56d6fe['y'] + _0x2bbbd7['y']][_0x56d6fe['x'] + _0x2bbbd7['x']]['type'] !== _0x161065) {
                                    _0x503267({
                                        'x': _0x56d6fe['x'] + _0x2bbbd7['x'],
                                        'y': _0x56d6fe['y'] + _0x2bbbd7['y']
                                    }, _0x2ecd('0x7b'));
                                } else if (!_0x545826[_0x56d6fe['y'] + _0x2bbbd7['y']][_0x56d6fe['x'] + _0x2bbbd7['x']]['filled']) {
                                    _0x503267({
                                        'x': _0x56d6fe['x'] + _0x2bbbd7['x'],
                                        'y': _0x56d6fe['y'] + _0x2bbbd7['y']
                                    }, 'dump');
                                }
                            }
                        }
                    } else {
                        _0x2bbbd7 = {
                            'x': _0x2bbbd7['x'] * -0x1,
                            'y': _0x2bbbd7['y'] * -0x1
                        };
                        if (_0x222655(_0x2bbbd7, _0x56d6fe)) {
                            if (_0x545826[_0x56d6fe['y'] + _0x2bbbd7['y']][_0x56d6fe['x'] + _0x2bbbd7['x']][_0x2ecd('0x73')] && _0x545826[_0x56d6fe['y'] + _0x2bbbd7['y']][_0x56d6fe['x'] + _0x2bbbd7['x']][_0x2ecd('0x6a')] === _0x161065) {
                                _0x503267(_0x56d6fe, _0x2ecd('0x7d'));
                            }
                        }
                    }
                }
            }

            function _0x123276(_0x144316, _0x7edff8, _0x3cfc47) {
                if (_0x222655(_0x144316, _0x7edff8)) {
                    var _0x5689a1 = {
                        'x': _0x7edff8['x'] + _0x144316['x'],
                        'y': _0x7edff8['y'] + _0x144316['y']
                    };
                    if (!_0x545826[_0x5689a1['y']][_0x5689a1['x']][_0x2ecd('0x73')]) {
                        var _0x54eb24 = !![];
                        let _0x51038e;
                        for (let _0x475014 = 0x0; _0x475014 < 0x4; _0x475014++) {
                            if (_0x475014 === 0x0) {
                                _0x51038e = {
                                    'x': 0x1,
                                    'y': 0x1
                                };
                            } else if (_0x475014 === 0x1) {
                                _0x51038e = {
                                    'x': -0x1,
                                    'y': 0x1
                                };
                            } else if (_0x475014 === 0x2) {
                                _0x51038e = {
                                    'x': 0x1,
                                    'y': -0x1
                                };
                            } else if (_0x475014 === 0x3) {
                                _0x51038e = {
                                    'x': -0x1,
                                    'y': -0x1
                                };
                            }
                            if (_0x222655(_0x51038e, _0x5689a1)) {
                                if (_0x545826[_0x5689a1['y'] + _0x51038e['y']][_0x5689a1['x'] + _0x51038e['x']][_0x2ecd('0x73')] && _0x545826[_0x5689a1['y'] + _0x51038e['y']][_0x5689a1['x'] + _0x51038e['x']][_0x2ecd('0x6a')] === _0x3cfc47) {
                                    let _0x17c7af = ![];
                                    if (_0x475014 >= 0x2) {
                                        _0x17c7af = _0x558bc9({
                                            'x': _0x5689a1['x'] + _0x51038e['x'],
                                            'y': _0x5689a1['y'] + _0x51038e['y']
                                        });
                                        if (_0x17c7af) {
                                            if (_0x5689a1['x'] === 0x7 && _0x5689a1['y'] === 0x6) {
                                                _0x236375[0x1][_0x2ecd('0x6f')]({
                                                    'x': _0x7edff8['x'] + _0x144316['x'],
                                                    'y': _0x7edff8['y'] + _0x144316['y'],
                                                    'ori': _0x7edff8
                                                });
                                            } else {
                                                _0x236375[0x3][_0x2ecd('0x6f')]({
                                                    'x': _0x7edff8['x'] + _0x144316['x'],
                                                    'y': _0x7edff8['y'] + _0x144316['y'],
                                                    'ori': _0x7edff8
                                                });
                                            }
                                            _0x54eb24 = ![];
                                            break;
                                        }
                                    } else {
                                        _0x17c7af = ![];
                                        _0x17c7af = _0x558bc9(_0x7edff8);
                                        if (!_0x17c7af) {
                                            if (_0x5689a1['x'] === 0x6 && _0x5689a1['y'] === 0x7) {
                                                _0x236375[0x1][_0x2ecd('0x6f')]({
                                                    'x': _0x7edff8['x'] + _0x144316['x'],
                                                    'y': _0x7edff8['y'] + _0x144316['y'],
                                                    'ori': _0x7edff8
                                                });
                                            } else {
                                                _0x236375[0x2]['push']({
                                                    'x': _0x7edff8['x'] + _0x144316['x'],
                                                    'y': _0x7edff8['y'] + _0x144316['y'],
                                                    'ori': _0x7edff8
                                                });
                                            }
                                            _0x54eb24 = ![];
                                            break;
                                        } else {
                                            if (_0x5689a1['x'] === 0x6 && _0x5689a1['y'] === 0x7) {
                                                _0x236375[0x1][_0x2ecd('0x6f')]({
                                                    'x': _0x7edff8['x'] + _0x144316['x'],
                                                    'y': _0x7edff8['y'] + _0x144316['y'],
                                                    'ori': _0x7edff8
                                                });
                                            } else {
                                                _0x236375[0x3][_0x2ecd('0x6f')]({
                                                    'x': _0x7edff8['x'] + _0x144316['x'],
                                                    'y': _0x7edff8['y'] + _0x144316['y'],
                                                    'ori': _0x7edff8
                                                });
                                            }
                                            break;
                                        }
                                    }
                                }
                            }
                        }
                        if (_0x54eb24) {
                            _0x236375[0x1]['push']({
                                'x': _0x7edff8['x'] + _0x144316['x'],
                                'y': _0x7edff8['y'] + _0x144316['y'],
                                'ori': _0x7edff8
                            });
                        }
                    } else if (_0x545826[_0x7edff8['y'] + _0x144316['y']][_0x7edff8['x'] + _0x144316['x']][_0x2ecd('0x6a')] === _0x3cfc47) {
                        let _0x361974 = {
                            'x': _0x144316['x'] * 0x2,
                            'y': _0x144316['y'] * 0x2
                        };
                        if (_0x222655(_0x361974, _0x7edff8)) {
                            if (!_0x545826[_0x7edff8['y'] + _0x361974['y']][_0x7edff8['x'] + _0x361974['x']]['filled']) {
                                _0x236375[0x0]['push']({
                                    'x': _0x7edff8['x'] + _0x361974['x'],
                                    'y': _0x7edff8['y'] + _0x361974['y'],
                                    'ori': _0x7edff8,
                                    'match': !![]
                                });
                            }
                        }
                    }
                }
            }
            _0x59b568 = _0x236375;
            var _0x4c0c47 = !![];
            for (let _0x1c1bf5 = 0x0; _0x1c1bf5 < _0x236375['length']; _0x1c1bf5++) {
                if (_0x236375[_0x1c1bf5][_0x2ecd('0x79')] > 0x0) {
                    _0x4c0c47 = ![];
                    let _0x1a19c4 = Math[_0x2ecd('0x7f')](Math[_0x2ecd('0x80')]() * _0x236375[_0x1c1bf5]['length']);
                    let _0xb3e425 = _0x236375[_0x1c1bf5][_0x1a19c4];
                    _0x44f65 = _0xb3e425[_0x2ecd('0x7a')];
                    if (_0xb3e425['match']) {
                        _0x545826[_0xb3e425['y']][_0xb3e425['x']][_0x2ecd('0x81')] = !![];
                    }
                    _0x47ef17({
                        'x': _0xb3e425['x'],
                        'y': _0xb3e425['y']
                    }, 0x1);
                    break;
                }
            }
            if (_0x4c0c47) {
                _0xef30b1(_0x2ecd('0x82'));
            }
        }

        function _0x1e2485() {
            if (_0x3462c2) {
                _0x3462c2 = ![];
            }
            if (_0x541b59 === 0x1) {
                _0x541b59 = 0x2;
            } else {
                _0x541b59 = 0x1;
            }
            if (game_mode === _0x2ecd('0xc')) {
                _0x6795c9();
            } else {
                if (_0x541b59 === 0x2) {
                    _0x6795c9();
                } else {
                    _0x1f68c8();
                }
            }
        }

        function _0x519af0() {
            let _0x1dad64 = _0x125759[_0x2ecd('0x76')]();
            let _0x3eb83a = _0x125759[_0x2ecd('0x77')]();
            for (let _0x1e65b2 = 0x0; _0x1e65b2 < _0x1dad64; _0x1e65b2++) {
                let _0x257616 = _0x3eb83a[_0x1e65b2];
                if (_0x257616[_0x2ecd('0x6d')]['x'] === _0x44f65['x'] && _0x257616[_0x2ecd('0x6d')]['y'] === _0x44f65['y']) {
                    if (_0x257616['type'] === 0x1) {
                        _0x257616[_0x2ecd('0x83')](0xb5ffdf);
                        _0x257616[_0x2ecd('0x84')] = !![];
                    } else {
                        _0x257616['setTint'](0xff002f);
                        _0x257616['tinted'] = !![];
                    }
                    break;
                }
            }
        }
        this[_0x2ecd('0x5e')][_0x2ecd('0x85')]['on'](_0x2ecd('0x86'), function(_0x5ace65, _0x48560e) {
            let _0x556b45 = _0x5ace65[_0x2ecd('0x87')];
            let _0x5266c7;
            if (_0x556b45 === '0' || _0x556b45 === '1' || _0x556b45 === '2' || _0x556b45 === '3') {
                _0x5266c7 = Number(_0x556b45);
                let _0x39f477 = _0x125759[_0x2ecd('0x76')]();
                let _0x543e86 = _0x125759[_0x2ecd('0x77')]();
                _0x117edd();
                for (let _0x309d7b = 0x0; _0x309d7b < _0x39f477; _0x309d7b++) {
                    let _0x4b7de0 = _0x59b568[_0x5266c7][_0x2ecd('0x79')];
                    let _0xca39f = _0x543e86[_0x309d7b];
                    for (let _0x2a25b5 = 0x0; _0x2a25b5 < _0x4b7de0; _0x2a25b5++) {
                        let _0xf173b3 = _0x59b568[_0x5266c7][_0x2a25b5];
                        if (_0xca39f[_0x2ecd('0x6d')]['x'] === _0xf173b3[_0x2ecd('0x7a')]['x'] && _0xca39f[_0x2ecd('0x6d')]['y'] === _0xf173b3[_0x2ecd('0x7a')]['y']) {
                            _0xca39f[_0x2ecd('0x1d')] = 0.5;
                        }
                    }
                }
            }
        });

        function _0x6795c9() {
            let _0x4de92e = _0x42102b();
            if (_0x4de92e[_0x2ecd('0x79')] > 0x0) {
                _0x1af517 = !![];
                let _0x4cd946 = _0x247620[_0x2ecd('0x76')]();
                let _0x17a747 = _0x247620[_0x2ecd('0x77')]();
                for (let _0x1239ec = 0x0; _0x1239ec < _0x4de92e['length']; _0x1239ec++) {
                    for (let _0x325ec9 = 0x0; _0x325ec9 < _0x4cd946; _0x325ec9++) {
                        let _0x2318e4 = _0x17a747[_0x325ec9];
                        if (_0x2318e4[_0x2ecd('0x6d')]['x'] === _0x4de92e[_0x1239ec]['x'] && _0x2318e4[_0x2ecd('0x6d')]['y'] === _0x4de92e[_0x1239ec]['y']) {
                            _0x2318e4[_0x2ecd('0x1d')] = 0x1;
                            _0x2318e4[_0x2ecd('0x88')] = !![];
                        }
                    }
                }
            } else {
                _0x1af517 = ![];
                _0x312a18();
            }
        }

        function _0x312a18() {
            var _0x54ae32 = !![];
            let _0x8749bb = _0x125759['getLength']();
            let _0x49a63b = _0x125759['getChildren']();
            let _0x1af719 = new Array();
            for (let _0x346b18 = 0x0; _0x346b18 < _0x8749bb; _0x346b18++) {
                let _0x9082b = _0x49a63b[_0x346b18];
                if (_0x9082b[_0x2ecd('0x6a')] === _0x541b59) {
                    let _0x3ae9d2;
                    let _0x2555cd = _0x9082b[_0x2ecd('0x6d')];
                    let _0x170414;
                    if (_0x541b59 === 0x2) {
                        _0x3ae9d2 = {
                            'x': -0x1,
                            'y': -0x1
                        };
                        _0x170414 = 0x1;
                    } else if (_0x541b59 === 0x1) {
                        _0x3ae9d2 = {
                            'x': -0x1,
                            'y': 0x1
                        };
                        _0x170414 = 0x2;
                    }
                    _0x420ef3(_0x3ae9d2, _0x2555cd, _0x170414);
                    if (_0x541b59 === 0x2) {
                        _0x3ae9d2 = {
                            'x': 0x1,
                            'y': -0x1
                        };
                    } else if (_0x541b59 === 0x1) {
                        _0x3ae9d2 = {
                            'x': 0x1,
                            'y': 0x1
                        };
                    }
                    _0x420ef3(_0x3ae9d2, _0x2555cd, _0x170414);
                    if (_0x54ae32) {
                        let _0x1c35b6 = _0x558bc9(_0x2555cd);
                        if (_0x1c35b6) {
                            if (_0x541b59 === 0x1) {
                                _0x3ae9d2 = {
                                    'x': -0x1,
                                    'y': -0x1
                                };
                                _0x170414 = 0x1;
                            } else if (_0x541b59 === 0x2) {
                                _0x3ae9d2 = {
                                    'x': -0x1,
                                    'y': 0x1
                                };
                                _0x170414 = 0x2;
                            }
                            _0x420ef3(_0x3ae9d2, _0x2555cd, _0x170414);
                            if (_0x541b59 === 0x1) {
                                _0x3ae9d2 = {
                                    'x': 0x1,
                                    'y': -0x1
                                };
                            } else if (_0x541b59 === 0x2) {
                                _0x3ae9d2 = {
                                    'x': 0x1,
                                    'y': 0x1
                                };
                            }
                            _0x420ef3(_0x3ae9d2, _0x2555cd, _0x170414);
                        }
                    }
                }
            }

            function _0x420ef3(_0x4d89f4, _0x471a54, _0x1388d4) {
                if (_0x222655(_0x4d89f4, _0x471a54)) {
                    if (!_0x545826[_0x471a54['y'] + _0x4d89f4['y']][_0x471a54['x'] + _0x4d89f4['x']][_0x2ecd('0x73')]) {
                        _0x54ae32 = ![];
                    }
                }
            }
            if (_0x54ae32) {
                if (game_mode === _0x2ecd('0x5f')) {
                    if (_0x541b59 === 0x2) {
                        _0xef30b1('lose');
                    }
                } else {
                    if (_0x541b59 === 0x2) {
                        _0xef30b1(_0x2ecd('0x89'));
                    } else {
                        _0xef30b1('player1');
                    }
                }
            }
        }

        function _0x42102b() {
            let _0x29b754 = _0x125759[_0x2ecd('0x76')]();
            let _0x141a8d = _0x125759[_0x2ecd('0x77')]();
            let _0x4a6806 = new Array();
            for (let _0x3e21d0 = 0x0; _0x3e21d0 < _0x29b754; _0x3e21d0++) {
                let _0x5ba3d9 = _0x141a8d[_0x3e21d0];
                if (_0x5ba3d9[_0x2ecd('0x6a')] === _0x541b59) {
                    let _0x2c369a;
                    let _0x3a78c8 = _0x5ba3d9['pos'];
                    let _0x482378;
                    if (_0x541b59 === 0x2) {
                        _0x2c369a = {
                            'x': -0x1,
                            'y': -0x1
                        };
                        _0x482378 = 0x1;
                    } else if (_0x541b59 === 0x1) {
                        _0x2c369a = {
                            'x': -0x1,
                            'y': 0x1
                        };
                        _0x482378 = 0x2;
                    }
                    _0x52a47c(_0x2c369a, _0x3a78c8, _0x482378);
                    if (_0x541b59 === 0x2) {
                        _0x2c369a = {
                            'x': 0x1,
                            'y': -0x1
                        };
                    } else if (_0x541b59 === 0x1) {
                        _0x2c369a = {
                            'x': 0x1,
                            'y': 0x1
                        };
                    }
                    _0x52a47c(_0x2c369a, _0x3a78c8, _0x482378);
                    let _0x52ecf4 = _0x558bc9(_0x3a78c8);
                    if (_0x52ecf4) {
                        if (_0x541b59 === 0x1) {
                            _0x2c369a = {
                                'x': -0x1,
                                'y': -0x1
                            };
                        } else if (_0x541b59 === 0x2) {
                            _0x2c369a = {
                                'x': -0x1,
                                'y': 0x1
                            };
                        }
                        _0x52a47c(_0x2c369a, _0x3a78c8, _0x482378);
                        if (_0x541b59 === 0x1) {
                            _0x2c369a = {
                                'x': 0x1,
                                'y': -0x1
                            };
                        } else if (_0x541b59 === 0x2) {
                            _0x2c369a = {
                                'x': 0x1,
                                'y': 0x1
                            };
                        }
                        _0x52a47c(_0x2c369a, _0x3a78c8, _0x482378);
                    }
                }
            }

            function _0x52a47c(_0x148b68, _0x104f5e, _0x3e2062) {
                if (_0x222655(_0x148b68, _0x104f5e)) {
                    if (_0x545826[_0x104f5e['y'] + _0x148b68['y']][_0x104f5e['x'] + _0x148b68['x']][_0x2ecd('0x73')] && _0x545826[_0x104f5e['y'] + _0x148b68['y']][_0x104f5e['x'] + _0x148b68['x']]['type'] === _0x3e2062) {
                        _0x148b68 = {
                            'x': _0x148b68['x'] * 0x2,
                            'y': _0x148b68['y'] * 0x2
                        };
                        if (_0x222655(_0x148b68, _0x104f5e)) {
                            if (!_0x545826[_0x104f5e['y'] + _0x148b68['y']][_0x104f5e['x'] + _0x148b68['x']][_0x2ecd('0x73')]) {
                                _0x4a6806[_0x2ecd('0x6f')]({
                                    'x': _0x104f5e['x'] + _0x148b68['x'],
                                    'y': _0x104f5e['y'] + _0x148b68['y'],
                                    'ori': _0x104f5e
                                });
                            }
                        }
                    }
                }
            }
            return _0x4a6806;
        }

        function _0xdfdb9d(_0x3fa053) {
            let _0x4ed2a2 = _0x558bc9(_0x3fa053);
            let _0x2673ed = ![];
            let _0x4e1898;
            if (_0x541b59 === 0x1) {
                _0x4e1898 = {
                    'x': -0x1,
                    'y': 0x1
                };
                _0x9e92c8(_0x4e1898, _0x3fa053, 0x2);
                _0x4e1898 = {
                    'x': 0x1,
                    'y': 0x1
                };
                _0x9e92c8(_0x4e1898, _0x3fa053, 0x2);
                if (_0x4ed2a2) {
                    _0x4e1898 = {
                        'x': -0x1,
                        'y': -0x1
                    };
                    _0x9e92c8(_0x4e1898, _0x3fa053, 0x2);
                    _0x4e1898 = {
                        'x': 0x1,
                        'y': -0x1
                    };
                    _0x9e92c8(_0x4e1898, _0x3fa053, 0x2);
                }
            } else if (_0x541b59 === 0x2) {
                _0x4e1898 = {
                    'x': -0x1,
                    'y': -0x1
                };
                _0x9e92c8(_0x4e1898, _0x3fa053, 0x1);
                _0x4e1898 = {
                    'x': 0x1,
                    'y': -0x1
                };
                _0x9e92c8(_0x4e1898, _0x3fa053, 0x1);
                if (_0x4ed2a2) {
                    _0x4e1898 = {
                        'x': -0x1,
                        'y': 0x1
                    };
                    _0x9e92c8(_0x4e1898, _0x3fa053, 0x1);
                    _0x4e1898 = {
                        'x': 0x1,
                        'y': 0x1
                    };
                    _0x9e92c8(_0x4e1898, _0x3fa053, 0x1);
                }
            }

            function _0x9e92c8(_0x4e1898, _0x3fa053, _0x17b1db) {
                if (_0x222655(_0x4e1898, _0x3fa053)) {
                    if (_0x545826[_0x3fa053['y'] + _0x4e1898['y']][_0x3fa053['x'] + _0x4e1898['x']][_0x2ecd('0x73')] && _0x545826[_0x3fa053['y'] + _0x4e1898['y']][_0x3fa053['x'] + _0x4e1898['x']][_0x2ecd('0x6a')] === _0x17b1db) {
                        _0x4e1898 = {
                            'x': _0x4e1898['x'] * 0x2,
                            'y': _0x4e1898['y'] * 0x2
                        };
                        if (_0x222655(_0x4e1898, _0x3fa053)) {
                            if (!_0x545826[_0x3fa053['y'] + _0x4e1898['y']][_0x3fa053['x'] + _0x4e1898['x']][_0x2ecd('0x73')]) {
                                _0x44f65 = _0x3fa053;
                                _0x2673ed = {
                                    'x': _0x3fa053['x'] + _0x4e1898['x'],
                                    'y': _0x3fa053['y'] + _0x4e1898['y'],
                                    'ori': _0x3fa053
                                };
                                _0x545826[_0x2673ed['y']][_0x2673ed['x']][_0x2ecd('0x81')] = !![];
                            }
                        }
                    }
                }
            }
            return _0x2673ed;
        }

        function _0x558bc9(_0xe1682e) {
            var _0x1c9c40 = _0x125759[_0x2ecd('0x76')]();
            var _0x3479f0 = _0x125759[_0x2ecd('0x77')]();
            var _0x1337ec = ![];
            for (let _0x514584 = 0x0; _0x514584 < _0x1c9c40; _0x514584++) {
                let _0xa6eac4 = _0x3479f0[_0x514584];
                if (_0xa6eac4[_0x2ecd('0x6d')]['x'] === _0xe1682e['x'] && _0xa6eac4[_0x2ecd('0x6d')]['y'] === _0xe1682e['y']) {
                    if (_0xa6eac4['king']) {
                        _0x1337ec = !![];
                    }
                    break;
                }
            }
            return _0x1337ec;
        }

        function _0x224ca2(_0x24c0a0, _0x546531) {
            let _0x10a63b = new Array();
            let _0x36f572 = ![];
            _0x117edd();
            var _0x52120c = _0x558bc9(_0x546531);
            if (_0x24c0a0 === 0x2) {
                let _0x110757 = {
                    'x': -0x1,
                    'y': -0x1
                };
                _0x21d45f(_0x110757, _0x546531, 0x1);
                _0x110757 = {
                    'x': 0x1,
                    'y': -0x1
                };
                _0x21d45f(_0x110757, _0x546531, 0x1);
                if (_0x52120c) {
                    _0x110757 = {
                        'x': -0x1,
                        'y': 0x1
                    };
                    _0x21d45f(_0x110757, _0x546531, 0x1);
                    _0x110757 = {
                        'x': 0x1,
                        'y': 0x1
                    };
                    _0x21d45f(_0x110757, _0x546531, 0x1);
                }
            }
            if (_0x24c0a0 === 0x1) {
                let _0x389e15 = {
                    'x': -0x1,
                    'y': 0x1
                };
                _0x21d45f(_0x389e15, _0x546531, 0x2);
                _0x389e15 = {
                    'x': 0x1,
                    'y': 0x1
                };
                _0x21d45f(_0x389e15, _0x546531, 0x2);
                if (_0x52120c) {
                    _0x389e15 = {
                        'x': -0x1,
                        'y': -0x1
                    };
                    _0x21d45f(_0x389e15, _0x546531, 0x2);
                    _0x389e15 = {
                        'x': 0x1,
                        'y': -0x1
                    };
                    _0x21d45f(_0x389e15, _0x546531, 0x2);
                }
            }

            function _0x21d45f(_0x464748, _0x546531, _0x55a3e5) {
                if (_0x222655(_0x464748, _0x546531)) {
                    if (!_0x545826[_0x546531['y'] + _0x464748['y']][_0x546531['x'] + _0x464748['x']][_0x2ecd('0x73')]) {
                        _0x10a63b[_0x2ecd('0x6f')]({
                            'x': _0x546531['x'] + _0x464748['x'],
                            'y': _0x546531['y'] + _0x464748['y']
                        });
                    } else if (_0x545826[_0x546531['y'] + _0x464748['y']][_0x546531['x'] + _0x464748['x']][_0x2ecd('0x6a')] === _0x55a3e5) {
                        _0x464748 = {
                            'x': _0x464748['x'] * 0x2,
                            'y': _0x464748['y'] * 0x2
                        };
                        if (_0x222655(_0x464748, _0x546531)) {
                            if (!_0x545826[_0x546531['y'] + _0x464748['y']][_0x546531['x'] + _0x464748['x']]['filled']) {
                                _0x10a63b[_0x2ecd('0x6f')]({
                                    'x': _0x546531['x'] + _0x464748['x'],
                                    'y': _0x546531['y'] + _0x464748['y'],
                                    'match': !![]
                                });
                                _0x36f572 = !![];
                            }
                        }
                    }
                }
            }
            let _0x5797f4 = !![];
            if (_0x36f572) {
                for (let _0x5b67d5 = 0x0; _0x5b67d5 < _0x10a63b[_0x2ecd('0x79')]; _0x5b67d5++) {
                    if (!_0x10a63b[_0x5b67d5][_0x2ecd('0x81')]) {
                        _0x10a63b[_0x2ecd('0x7e')](_0x5b67d5, _0x5b67d5 + 0x1);
                        _0x5b67d5--;
                    }
                }
            } else if (_0x1af517) {
                _0x5797f4 = ![];
            }
            if (_0x5797f4 && _0x10a63b[_0x2ecd('0x79')] > 0x0) {
                _0x57f7b1 = !![];
                _0x44f65 = _0x546531;
                _0x519af0();
                let _0x115007 = _0x247620[_0x2ecd('0x76')]();
                let _0x1986d7 = _0x247620[_0x2ecd('0x77')]();
                for (let _0x5b67d5 = 0x0; _0x5b67d5 < _0x10a63b[_0x2ecd('0x79')]; _0x5b67d5++) {
                    for (let _0x2b70a0 = 0x0; _0x2b70a0 < _0x115007; _0x2b70a0++) {
                        let _0x16c671 = _0x1986d7[_0x2b70a0];
                        if (_0x16c671['pos']['x'] === _0x10a63b[_0x5b67d5]['x'] && _0x16c671['pos']['y'] === _0x10a63b[_0x5b67d5]['y']) {
                            _0x16c671[_0x2ecd('0x1d')] = 0x1;
                            _0x16c671[_0x2ecd('0x88')] = !![];
                            _0x545826[_0x16c671[_0x2ecd('0x6d')]['y']][_0x16c671[_0x2ecd('0x6d')]['x']][_0x2ecd('0x72')] = !![];
                            if (_0x36f572) {
                                _0x545826[_0x16c671[_0x2ecd('0x6d')]['y']][_0x16c671[_0x2ecd('0x6d')]['x']]['match'] = !![];
                            }
                        }
                    }
                }
            }
        }

        function _0x222655(_0x202a9e, _0x19c19c) {
            let _0x321e51 = ![];
            if (_0x19c19c['x'] + _0x202a9e['x'] >= 0x0 && _0x19c19c['x'] + _0x202a9e['x'] < 0x8 && _0x19c19c['y'] + _0x202a9e['y'] >= 0x0 && _0x19c19c['y'] + _0x202a9e['y'] < 0x8) {
                _0x321e51 = !![];
            }
            return _0x321e51;
        }

        function _0x117edd() {
            if (_0x57f7b1) {
                let _0x3ab311 = _0x247620[_0x2ecd('0x76')]();
                let _0x7c818 = _0x247620[_0x2ecd('0x77')]();
                for (let _0x496c74 = 0x0; _0x496c74 < _0x3ab311; _0x496c74++) {
                    let _0x4a3ec2 = _0x7c818[_0x496c74];
                    if (_0x4a3ec2[_0x2ecd('0x88')]) {
                        _0x4a3ec2[_0x2ecd('0x1d')] = 0x0;
                        _0x4a3ec2[_0x2ecd('0x88')] = ![];
                        _0x545826[_0x4a3ec2[_0x2ecd('0x6d')]['y']][_0x4a3ec2[_0x2ecd('0x6d')]['x']][_0x2ecd('0x72')] = ![];
                        if (_0x545826[_0x4a3ec2[_0x2ecd('0x6d')]['y']][_0x4a3ec2[_0x2ecd('0x6d')]['x']]['match']) {
                            _0x545826[_0x4a3ec2[_0x2ecd('0x6d')]['y']][_0x4a3ec2[_0x2ecd('0x6d')]['x']][_0x2ecd('0x81')] = ![];
                        }
                    }
                }
                _0x3ab311 = _0x125759['getLength']();
                _0x7c818 = _0x125759[_0x2ecd('0x77')]();
                for (let _0x483339 = 0x0; _0x483339 < _0x3ab311; _0x483339++) {
                    let _0x4a3ec2 = _0x7c818[_0x483339];
                    if (_0x4a3ec2['tinted']) {
                        _0x4a3ec2[_0x2ecd('0x84')] = ![];
                        _0x4a3ec2[_0x2ecd('0x8a')]();
                    }
                }
            }
        }

        function _0x39b00c(_0x43f451, _0x2787) {
            play_sound('swap', _0x3d917b);
            setTimeout(_0x388eb0, _0x2b34dc / 0x2);

            function _0x388eb0() {
                let _0x3d1bc7 = _0x125759[_0x2ecd('0x76')]();
                let _0x3d2eaa = _0x125759[_0x2ecd('0x77')]();
                for (let _0x1cbd9f = 0x0; _0x1cbd9f < _0x3d1bc7; _0x1cbd9f++) {
                    let _0x5e909c = _0x3d2eaa[_0x1cbd9f];
                    if (_0x5e909c[_0x2ecd('0x6d')]['x'] === _0x43f451 && _0x5e909c[_0x2ecd('0x6d')]['y'] === _0x2787) {
                        _0x545826[_0x5e909c[_0x2ecd('0x6d')]['y']][_0x5e909c[_0x2ecd('0x6d')]['x']][_0x2ecd('0x73')] = ![];
                        _0x545826[_0x5e909c[_0x2ecd('0x6d')]['y']][_0x5e909c['pos']['x']][_0x2ecd('0x6a')] = 0x0;
                        _0x5e909c[_0x2ecd('0x52')](!![], !![]);
                        break;
                    }
                }
            }
        }

        function _0x47ef17(_0x5204a7, _0x89f11) {
            let _0x57b67d = _0x125759[_0x2ecd('0x76')]();
            let _0x8830fd = _0x125759[_0x2ecd('0x77')]();
            for (let _0x1bca8b = 0x0; _0x1bca8b < _0x57b67d; _0x1bca8b++) {
                let _0x2fc0f3 = _0x8830fd[_0x1bca8b];
                if (_0x2fc0f3[_0x2ecd('0x6d')]['x'] === _0x44f65['x'] && _0x2fc0f3[_0x2ecd('0x6d')]['y'] === _0x44f65['y']) {
                    if (_0x545826[_0x5204a7['y']][_0x5204a7['x']][_0x2ecd('0x81')]) {
                        _0x3462c2 = !![];
                        _0x545826[_0x5204a7['y']][_0x5204a7['x']][_0x2ecd('0x81')] = ![];
                        if (_0x5204a7['y'] < _0x44f65['y']) {
                            if (_0x5204a7['x'] > _0x44f65['x']) {
                                _0x39b00c(_0x5204a7['x'] - 0x1, _0x5204a7['y'] + 0x1);
                            } else {
                                _0x39b00c(_0x5204a7['x'] + 0x1, _0x5204a7['y'] + 0x1);
                            }
                        } else if (_0x5204a7['y'] > _0x44f65['y']) {
                            if (_0x5204a7['x'] > _0x44f65['x']) {
                                _0x39b00c(_0x5204a7['x'] - 0x1, _0x5204a7['y'] - 0x1);
                            } else {
                                _0x39b00c(_0x5204a7['x'] + 0x1, _0x5204a7['y'] - 0x1);
                            }
                        }
                    }
                    _0x2fc0f3[_0x2ecd('0x6d')] = _0x5204a7;
                    _0x545826[_0x44f65['y']][_0x44f65['x']][_0x2ecd('0x73')] = ![];
                    _0x545826[_0x5204a7['y']][_0x5204a7['x']][_0x2ecd('0x73')] = !![];
                    _0x545826[_0x5204a7['y']][_0x5204a7['x']][_0x2ecd('0x6a')] = _0x545826[_0x44f65['y']][_0x44f65['x']][_0x2ecd('0x6a')];
                    _0x545826[_0x44f65['y']][_0x44f65['x']][_0x2ecd('0x6a')] = 0x0;
                    _0x3d917b['tweens'][_0x2ecd('0x1a')]({
                        'targets': _0x2fc0f3,
                        'x': _0x1c0290 + _0x37f0f6 * _0x5204a7['x'],
                        'y': _0x5d6582 + _0x4bb319 * _0x5204a7['y'],
                        'ease': _0x2ecd('0x8b'),
                        'duration': _0x2b34dc,
                        'onComplete': function() {
                            if (_0x541b59 === 0x1) {
                                if (_0x2fc0f3[_0x2ecd('0x6d')]['y'] === 0x7) {
                                    if (!_0x2fc0f3[_0x2ecd('0x78')]) {
                                        _0x2fc0f3[_0x2ecd('0x78')] = !![];
                                        if (_0x2fc0f3[_0x2ecd('0x6a')] === 0x1) {
                                            _0x2fc0f3[_0x2ecd('0x67')](_0x2ecd('0x3e'));
                                        }
                                    }
                                }
                            } else if (_0x541b59 === 0x2) {
                                if (_0x2fc0f3[_0x2ecd('0x6d')]['y'] === 0x0) {
                                    if (!_0x2fc0f3[_0x2ecd('0x78')]) {
                                        _0x2fc0f3[_0x2ecd('0x78')] = !![];
                                        if (_0x2fc0f3[_0x2ecd('0x6a')] === 0x2) {
                                            _0x2fc0f3[_0x2ecd('0x67')](_0x2ecd('0x3f'));
                                        }
                                    }
                                }
                            }
                            if (game_mode === _0x2ecd('0x5f')) {
                                if (_0x541b59 === 0x2) {
                                    if (_0x3462c2) {
                                        _0x3462c2 = ![];
                                        let _0x4b0379 = _0xdfdb9d(_0x2fc0f3[_0x2ecd('0x6d')]);
                                        if (_0x4b0379) {
                                            _0x47ef17({
                                                'x': _0x4b0379['x'],
                                                'y': _0x4b0379['y']
                                            }, 0x2);
                                        } else {
                                            _0x1e2485();
                                        }
                                    } else {
                                        _0x1e2485();
                                    }
                                } else if (_0x541b59 === 0x1) {
                                    if (_0x3462c2) {
                                        _0x3462c2 = ![];
                                        let _0x29a79b = _0xdfdb9d(_0x2fc0f3[_0x2ecd('0x6d')]);
                                        if (_0x29a79b) {
                                            _0x47ef17({
                                                'x': _0x29a79b['x'],
                                                'y': _0x29a79b['y']
                                            }, 0x1);
                                        } else {
                                            _0x1e2485();
                                        }
                                    } else {
                                        _0x1e2485();
                                    }
                                }
                            } else if (game_mode === _0x2ecd('0xc')) {
                                if (_0x541b59 === 0x1) {
                                    if (_0x3462c2) {
                                        _0x3462c2 = ![];
                                        let _0x3fc2c2 = _0xdfdb9d(_0x2fc0f3['pos']);
                                        if (_0x3fc2c2) {
                                            _0x47ef17({
                                                'x': _0x3fc2c2['x'],
                                                'y': _0x3fc2c2['y']
                                            }, 0x1);
                                        } else {
                                            _0x1e2485();
                                        }
                                    } else {
                                        _0x1e2485();
                                    }
                                } else if (_0x541b59 === 0x2) {
                                    if (_0x3462c2) {
                                        _0x3462c2 = ![];
                                        let _0x3c5375 = _0xdfdb9d(_0x2fc0f3['pos']);
                                        if (_0x3c5375) {
                                            _0x47ef17({
                                                'x': _0x3c5375['x'],
                                                'y': _0x3c5375['y']
                                            }, 0x2);
                                        } else {
                                            _0x1e2485();
                                        }
                                    } else {
                                        _0x1e2485();
                                    }
                                }
                            }
                        }
                    });
                    break;
                }
            }
            _0x117edd();
        }

        function _0xef30b1(_0x2bcbfa) {
            if (_0x2bcbfa === _0x2ecd('0x8c')) {
                play_sound(_0x2ecd('0x8d'), _0x3d917b);
            } else {
                play_sound(_0x2ecd('0x4a'), _0x3d917b);
            }
            _0x16dd67 = _0x2ecd('0x8d');
            var _0x538da0 = _0x3d917b[_0x2ecd('0x1a')][_0x2ecd('0x1e')](0x0, 0x0, 0x2d0, 0x438, 0x0)[_0x2ecd('0x63')](0x0);
            _0x538da0['alpha'] = 0x0;
            _0x3d917b[_0x2ecd('0x54')][_0x2ecd('0x1a')]({
                'targets': _0x538da0,
                'alpha': 0.5,
                'ease': _0x2ecd('0x8e'),
                'duration': 0x1f4
            });
            var _0x2d1c44 = _0x3d917b[_0x2ecd('0x1a')]['sprite'](0x168, 0x500, _0x2ecd('0x8f') + _0x2bcbfa);
            _0x3d917b[_0x2ecd('0x54')][_0x2ecd('0x1a')]({
                'targets': _0x2d1c44,
                'y': 0x21c,
                'ease': _0x2ecd('0x58'),
                'duration': 0x258
            });
            setTimeout(function() {
                _0x2d1c44[_0x2ecd('0x52')](!![], !![]);
                _0x16111b();
            }, 0xfa0);
        }

        function _0x16111b() {
            _0x16dd67 = _0x2ecd('0x90');
            _0xb84ed0 = _0x3d917b[_0x2ecd('0x1a')]['group']();
            var _0x21b0e5 = _0x3d917b[_0x2ecd('0x1a')][_0x2ecd('0x1b')](0x2d0, 0x438, _0x2ecd('0x42'))[_0x2ecd('0x63')](0x1);
            var _0x3f6bc5 = _0x3d917b[_0x2ecd('0x1a')][_0x2ecd('0x1b')](0x168, 0x21c, _0x2ecd('0x40'));
            var _0x53450d = _0x3d917b[_0x2ecd('0x1a')][_0x2ecd('0x1b')](0x168, 0x1d8, _0x2ecd('0x2d'))[_0x2ecd('0x53')]();
            _0x53450d['button'] = !![];
            _0x53450d[_0x2ecd('0x2')] = _0x2ecd('0x74');
            var _0x2f1774 = _0x3d917b[_0x2ecd('0x1a')][_0x2ecd('0x1b')](0x168, 0x248, _0x2ecd('0x29'))[_0x2ecd('0x53')]();
            _0x2f1774['button'] = !![];
            _0x2f1774[_0x2ecd('0x2')] = 'exit';
            _0xb84ed0[_0x2ecd('0x1f')]([_0x21b0e5, _0x3f6bc5, _0x53450d, _0x2f1774]);
        }

        function _0x476771() {
            _0x16dd67 = _0x2ecd('0x91');
            _0xb84ed0 = _0x3d917b[_0x2ecd('0x1a')][_0x2ecd('0x19')]();
            var _0x3df0fb = _0x3d917b[_0x2ecd('0x1a')][_0x2ecd('0x1e')](0x0, 0x0, 0x2d0, 0x438, 0x0)[_0x2ecd('0x63')](0x0);
            _0x3df0fb[_0x2ecd('0x1d')] = 0x0;
            _0x3d917b[_0x2ecd('0x54')][_0x2ecd('0x1a')]({
                'targets': _0x3df0fb,
                'alpha': 0.5,
                'ease': _0x2ecd('0x8e'),
                'duration': 0x1f4
            });
            var _0x37a89e = _0x3d917b[_0x2ecd('0x1a')]['sprite'](0x2d0, 0x438, _0x2ecd('0x42'))[_0x2ecd('0x63')](0x1);
            var _0x31f840 = _0x3d917b[_0x2ecd('0x1a')][_0x2ecd('0x1b')](0x168, 0x21c, _0x2ecd('0x40'));
            var _0x3fdfb5 = _0x3d917b['add'][_0x2ecd('0x1b')](0x168, 0x138, _0x2ecd('0x92'));
            var _0x504dd9 = _0x3d917b[_0x2ecd('0x1a')][_0x2ecd('0x1b')](0x168, 0x1d8, 'btn_resume')[_0x2ecd('0x53')]();
            _0x504dd9[_0x2ecd('0x5a')] = !![];
            _0x504dd9[_0x2ecd('0x2')] = _0x2ecd('0x93');
            var _0x4c08d2 = _0x3d917b['add'][_0x2ecd('0x1b')](0x168, 0x248, _0x2ecd('0x2d'))[_0x2ecd('0x53')]();
            _0x4c08d2['button'] = !![];
            _0x4c08d2[_0x2ecd('0x2')] = _0x2ecd('0x74');
            var _0x9162ff = _0x3d917b['add']['sprite'](0x168, 0x2b8, 'btn_exit')['setInteractive']();
            _0x9162ff[_0x2ecd('0x5a')] = !![];
            _0x9162ff[_0x2ecd('0x2')] = 'exit';
            _0xb84ed0[_0x2ecd('0x1f')]([_0x3df0fb, _0x37a89e, _0x31f840, _0x3fdfb5, _0x504dd9, _0x4c08d2, _0x9162ff]);
        }
    }
}

function play_sound(_0x2f112d, _0x3c9818) {
    if (game_sound) {
        _0x3c9818[_0x2ecd('0x66')][_0x2ecd('0x62')](_0x2f112d);
    }
}

function show_ad() {
    if (typeof sdk !== 'undefined' && sdk[_0x2ecd('0x94')] !== 'undefined') {
        sdk['showBanner']();
    }
}
var config = {
    'type': Phaser['AUTO'],
    'width': 0x2d0,
    'height': 0x438,
    'scale': {
        'mode': Phaser['Scale'][_0x2ecd('0x95')],
        'parent': _0x2ecd('0x96'),
        'autoCenter': Phaser[_0x2ecd('0x97')][_0x2ecd('0x98')]
    },
    'scene': [Boot, Loader, Menu, Game]
};
var game = new Phaser[(_0x2ecd('0x99'))](config);