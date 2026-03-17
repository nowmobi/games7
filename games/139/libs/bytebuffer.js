!function (_0x5d411b, _0x618bcb) {
    'function' == typeof define && define['amd'] ? define(['long'], _0x618bcb) : 'function' == typeof require && 'object' == typeof module && module && module['exports'] ? module['exports'] = function () {
        var _0x5bf328;
        try {
            _0x5bf328 = require('long');
        } catch (_0x4a832d) {
        }
        return _0x618bcb(_0x5bf328);
    }() : (_0x5d411b['dcodeIO'] = _0x5d411b['dcodeIO'] || {})['ByteBuffer'] = _0x618bcb(_0x5d411b['dcodeIO']['Long']);
}(this, function (_0x486183) {
    'use strict';
    var _0x1cd814 = function (_0x536d35, _0x1e4aab, _0x2888a6) {
        if (void 0x0 === _0x536d35 && (_0x536d35 = _0x1cd814['DEFAULT_CA' + 'PACITY']), void 0x0 === _0x1e4aab && (_0x1e4aab = _0x1cd814['DEFAULT_EN' + 'DIAN']), void 0x0 === _0x2888a6 && (_0x2888a6 = _0x1cd814['DEFAULT_NO' + 'ASSERT']), !_0x2888a6) {
            if ((_0x536d35 |= 0x0) < 0x0)
                throw RangeError('Illegal\x20ca' + 'pacity');
            _0x1e4aab = !!_0x1e4aab, _0x2888a6 = !!_0x2888a6;
        }
        this['buffer'] = 0x0 === _0x536d35 ? _0x47aef8 : new ArrayBuffer(_0x536d35), this['view'] = 0x0 === _0x536d35 ? null : new Uint8Array(this['buffer']), this['offset'] = 0x0, this['markedOffs' + 'et'] = -0x1, this['limit'] = _0x536d35, this['littleEndi' + 'an'] = _0x1e4aab, this['noAssert'] = _0x2888a6;
    };
    _0x1cd814['VERSION'] = '5.0.1', _0x1cd814['LITTLE_END' + 'IAN'] = !0x0, _0x1cd814['BIG_ENDIAN'] = !0x1, _0x1cd814['DEFAULT_CA' + 'PACITY'] = 0x10, _0x1cd814['DEFAULT_EN' + 'DIAN'] = _0x1cd814['BIG_ENDIAN'], _0x1cd814['DEFAULT_NO' + 'ASSERT'] = !0x1, _0x1cd814['Long'] = _0x486183 || null;
    var _0x170abd = _0x1cd814['prototype'];
    _0x170abd['__isByteBu' + 'ffer__'], Object['defineProp' + 'erty'](_0x170abd, '__isByteBu' + 'ffer__', {
        'value': !0x0,
        'enumerable': !0x1,
        'configurable': !0x1
    });
    var _0x47aef8 = new ArrayBuffer(0x0), _0x42ac01 = String['fromCharCo' + 'de'];
    function _0x538793(_0x4853e0) {
        var _0x3a43da = 0x0;
        return function () {
            return _0x3a43da < _0x4853e0['length'] ? _0x4853e0['charCodeAt'](_0x3a43da++) : null;
        };
    }
    function _0x582764() {
        var _0x6d7c52 = [], _0x13584f = [];
        return function () {
            if (0x0 === arguments['length'])
                return _0x13584f['join']('') + _0x42ac01['apply'](String, _0x6d7c52);
            _0x6d7c52['length'] + arguments['length'] > 0x400 && (_0x13584f['push'](_0x42ac01['apply'](String, _0x6d7c52)), _0x6d7c52['length'] = 0x0), Array['prototype']['push']['apply'](_0x6d7c52, arguments);
        };
    }
    function _0x30dada(_0x29f14d, _0x19f78f, _0x1a2520, _0x17f526, _0x133a51) {
        var _0x12b803, _0x189515, _0xf152c8 = 0x8 * _0x133a51 - _0x17f526 - 0x1, _0x3f2bb7 = (0x1 << _0xf152c8) - 0x1, _0x4a4d34 = _0x3f2bb7 >> 0x1, _0x437658 = -0x7, _0x5ecf0f = _0x1a2520 ? _0x133a51 - 0x1 : 0x0, _0x2acbe6 = _0x1a2520 ? -0x1 : 0x1, _0x5ed8e9 = _0x29f14d[_0x19f78f + _0x5ecf0f];
        for (_0x5ecf0f += _0x2acbe6, _0x12b803 = _0x5ed8e9 & (0x1 << -_0x437658) - 0x1, _0x5ed8e9 >>= -_0x437658, _0x437658 += _0xf152c8; _0x437658 > 0x0; _0x12b803 = 0x100 * _0x12b803 + _0x29f14d[_0x19f78f + _0x5ecf0f], _0x5ecf0f += _0x2acbe6, _0x437658 -= 0x8);
        for (_0x189515 = _0x12b803 & (0x1 << -_0x437658) - 0x1, _0x12b803 >>= -_0x437658, _0x437658 += _0x17f526; _0x437658 > 0x0; _0x189515 = 0x100 * _0x189515 + _0x29f14d[_0x19f78f + _0x5ecf0f], _0x5ecf0f += _0x2acbe6, _0x437658 -= 0x8);
        if (0x0 === _0x12b803)
            _0x12b803 = 0x1 - _0x4a4d34;
        else {
            if (_0x12b803 === _0x3f2bb7)
                return _0x189515 ? NaN : 0x1 / 0x0 * (_0x5ed8e9 ? -0x1 : 0x1);
            _0x189515 += Math['pow'](0x2, _0x17f526), _0x12b803 -= _0x4a4d34;
        }
        return (_0x5ed8e9 ? -0x1 : 0x1) * _0x189515 * Math['pow'](0x2, _0x12b803 - _0x17f526);
    }
    function _0x5d0c34(_0x78a2ed, _0x702076, _0x2442ff, _0x12500e, _0x1549ae, _0x1076f2) {
        var _0x4872ce, _0x235c4e, _0x2beabb, _0x7c32a = 0x8 * _0x1076f2 - _0x1549ae - 0x1, _0x591ef0 = (0x1 << _0x7c32a) - 0x1, _0x105378 = _0x591ef0 >> 0x1, _0x2bf68d = 0x17 === _0x1549ae ? Math['pow'](0x2, -0x18) - Math['pow'](0x2, -0x4d) : 0x0, _0x13b6d4 = _0x12500e ? 0x0 : _0x1076f2 - 0x1, _0x509808 = _0x12500e ? 0x1 : -0x1, _0x533535 = _0x702076 < 0x0 || 0x0 === _0x702076 && 0x1 / _0x702076 < 0x0 ? 0x1 : 0x0;
        for (_0x702076 = Math['abs'](_0x702076), isNaN(_0x702076) || _0x702076 === 0x1 / 0x0 ? (_0x235c4e = isNaN(_0x702076) ? 0x1 : 0x0, _0x4872ce = _0x591ef0) : (_0x4872ce = Math['floor'](Math['log'](_0x702076) / Math['LN2']), _0x702076 * (_0x2beabb = Math['pow'](0x2, -_0x4872ce)) < 0x1 && (_0x4872ce--, _0x2beabb *= 0x2), (_0x702076 += _0x4872ce + _0x105378 >= 0x1 ? _0x2bf68d / _0x2beabb : _0x2bf68d * Math['pow'](0x2, 0x1 - _0x105378)) * _0x2beabb >= 0x2 && (_0x4872ce++, _0x2beabb /= 0x2), _0x4872ce + _0x105378 >= _0x591ef0 ? (_0x235c4e = 0x0, _0x4872ce = _0x591ef0) : _0x4872ce + _0x105378 >= 0x1 ? (_0x235c4e = (_0x702076 * _0x2beabb - 0x1) * Math['pow'](0x2, _0x1549ae), _0x4872ce += _0x105378) : (_0x235c4e = _0x702076 * Math['pow'](0x2, _0x105378 - 0x1) * Math['pow'](0x2, _0x1549ae), _0x4872ce = 0x0)); _0x1549ae >= 0x8; _0x78a2ed[_0x2442ff + _0x13b6d4] = 0xff & _0x235c4e, _0x13b6d4 += _0x509808, _0x235c4e /= 0x100, _0x1549ae -= 0x8);
        for (_0x4872ce = _0x4872ce << _0x1549ae | _0x235c4e, _0x7c32a += _0x1549ae; _0x7c32a > 0x0; _0x78a2ed[_0x2442ff + _0x13b6d4] = 0xff & _0x4872ce, _0x13b6d4 += _0x509808, _0x4872ce /= 0x100, _0x7c32a -= 0x8);
        _0x78a2ed[_0x2442ff + _0x13b6d4 - _0x509808] |= 0x80 * _0x533535;
    }
    _0x1cd814['accessor'] = function () {
        return Uint8Array;
    }, _0x1cd814['allocate'] = function (_0x20b211, _0x488ce1, _0x1231a8) {
        return new _0x1cd814(_0x20b211, _0x488ce1, _0x1231a8);
    }, _0x1cd814['concat'] = function (_0x55137e, _0xd83e9f, _0x1ee2da, _0x3a3094) {
        'boolean' != typeof _0xd83e9f && 'string' == typeof _0xd83e9f || (_0x3a3094 = _0x1ee2da, _0x1ee2da = _0xd83e9f, _0xd83e9f = void 0x0);
        for (var _0x417952, _0xf4b99 = 0x0, _0x3fe26a = 0x0, _0x2df07a = _0x55137e['length']; _0x3fe26a < _0x2df07a; ++_0x3fe26a)
            _0x1cd814['isByteBuff' + 'er'](_0x55137e[_0x3fe26a]) || (_0x55137e[_0x3fe26a] = _0x1cd814['wrap'](_0x55137e[_0x3fe26a], _0xd83e9f)), (_0x417952 = _0x55137e[_0x3fe26a]['limit'] - _0x55137e[_0x3fe26a]['offset']) > 0x0 && (_0xf4b99 += _0x417952);
        if (0x0 === _0xf4b99)
            return new _0x1cd814(0x0, _0x1ee2da, _0x3a3094);
        var _0x9e529, _0x3d49b1 = new _0x1cd814(_0xf4b99, _0x1ee2da, _0x3a3094);
        for (_0x3fe26a = 0x0; _0x3fe26a < _0x2df07a;)
            (_0x417952 = (_0x9e529 = _0x55137e[_0x3fe26a++])['limit'] - _0x9e529['offset']) <= 0x0 || (_0x3d49b1['view']['set'](_0x9e529['view']['subarray'](_0x9e529['offset'], _0x9e529['limit']), _0x3d49b1['offset']), _0x3d49b1['offset'] += _0x417952);
        return _0x3d49b1['limit'] = _0x3d49b1['offset'], _0x3d49b1['offset'] = 0x0, _0x3d49b1;
    }, _0x1cd814['isByteBuff' + 'er'] = function (_0x13cac5) {
        return !0x0 === (_0x13cac5 && _0x13cac5['__isByteBu' + 'ffer__']);
    }, _0x1cd814['type'] = function () {
        return ArrayBuffer;
    }, _0x1cd814['wrap'] = function (_0x5e30ce, _0x5f5b29, _0x5aef24, _0x1a886a) {
        if ('string' != typeof _0x5f5b29 && (_0x1a886a = _0x5aef24, _0x5aef24 = _0x5f5b29, _0x5f5b29 = void 0x0), 'string' == typeof _0x5e30ce)
            switch (void 0x0 === _0x5f5b29 && (_0x5f5b29 = 'utf8'), _0x5f5b29) {
            case 'base64':
                return _0x1cd814['fromBase64'](_0x5e30ce, _0x5aef24);
            case 'hex':
                return _0x1cd814['fromHex'](_0x5e30ce, _0x5aef24);
            case 'binary':
                return _0x1cd814['fromBinary'](_0x5e30ce, _0x5aef24);
            case 'utf8':
                return _0x1cd814['fromUTF8'](_0x5e30ce, _0x5aef24);
            case 'debug':
                return _0x1cd814['fromDebug'](_0x5e30ce, _0x5aef24);
            default:
                throw Error('Unsupporte' + 'd\x20encoding' + ':\x20' + _0x5f5b29);
            }
        if (null === _0x5e30ce || 'object' != typeof _0x5e30ce)
            throw TypeError('Illegal\x20bu' + 'ffer');
        var _0x47380c;
        if (_0x1cd814['isByteBuff' + 'er'](_0x5e30ce))
            return (_0x47380c = _0x170abd['clone']['call'](_0x5e30ce))['markedOffs' + 'et'] = -0x1, _0x47380c;
        if (_0x5e30ce instanceof Uint8Array)
            _0x47380c = new _0x1cd814(0x0, _0x5aef24, _0x1a886a), _0x5e30ce['length'] > 0x0 && (_0x47380c['buffer'] = _0x5e30ce['buffer'], _0x47380c['offset'] = _0x5e30ce['byteOffset'], _0x47380c['limit'] = _0x5e30ce['byteOffset'] + _0x5e30ce['byteLength'], _0x47380c['view'] = new Uint8Array(_0x5e30ce['buffer']));
        else {
            if (_0x5e30ce instanceof ArrayBuffer)
                _0x47380c = new _0x1cd814(0x0, _0x5aef24, _0x1a886a), _0x5e30ce['byteLength'] > 0x0 && (_0x47380c['buffer'] = _0x5e30ce, _0x47380c['offset'] = 0x0, _0x47380c['limit'] = _0x5e30ce['byteLength'], _0x47380c['view'] = _0x5e30ce['byteLength'] > 0x0 ? new Uint8Array(_0x5e30ce) : null);
            else {
                if ('[object\x20Ar' + 'ray]' !== Object['prototype']['toString']['call'](_0x5e30ce))
                    throw TypeError('Illegal\x20bu' + 'ffer');
                (_0x47380c = new _0x1cd814(_0x5e30ce['length'], _0x5aef24, _0x1a886a))['limit'] = _0x5e30ce['length'];
                for (var _0x2353b3 = 0x0; _0x2353b3 < _0x5e30ce['length']; ++_0x2353b3)
                    _0x47380c['view'][_0x2353b3] = _0x5e30ce[_0x2353b3];
            }
        }
        return _0x47380c;
    }, _0x170abd['writeBitSe' + 't'] = function (_0x1eba98, _0x53eaac) {
        var _0x1ec546 = void 0x0 === _0x53eaac;
        if (_0x1ec546 && (_0x53eaac = this['offset']), !this['noAssert']) {
            if (!(_0x1eba98 instanceof Array))
                throw TypeError('Illegal\x20Bi' + 'tSet:\x20Not\x20' + 'an\x20array');
            if ('number' != typeof _0x53eaac || _0x53eaac % 0x1 != 0x0)
                throw TypeError('Illegal\x20of' + 'fset:\x20' + _0x53eaac + ('\x20(not\x20an\x20i' + 'nteger)'));
            if ((_0x53eaac >>>= 0x0) < 0x0 || _0x53eaac + 0x0 > this['buffer']['byteLength'])
                throw RangeError('Illegal\x20of' + 'fset:\x200\x20<=' + '\x20' + _0x53eaac + '\x20(+0)\x20<=\x20' + this['buffer']['byteLength']);
        }
        var _0x5c5718, _0x12c6e2 = _0x53eaac, _0x15c041 = _0x1eba98['length'], _0x1abdfe = _0x15c041 >> 0x3, _0x26328f = 0x0;
        for (_0x53eaac += this['writeVarin' + 't32'](_0x15c041, _0x53eaac); _0x1abdfe--;)
            _0x5c5718 = 0x1 & !!_0x1eba98[_0x26328f++] | (0x1 & !!_0x1eba98[_0x26328f++]) << 0x1 | (0x1 & !!_0x1eba98[_0x26328f++]) << 0x2 | (0x1 & !!_0x1eba98[_0x26328f++]) << 0x3 | (0x1 & !!_0x1eba98[_0x26328f++]) << 0x4 | (0x1 & !!_0x1eba98[_0x26328f++]) << 0x5 | (0x1 & !!_0x1eba98[_0x26328f++]) << 0x6 | (0x1 & !!_0x1eba98[_0x26328f++]) << 0x7, this['writeByte'](_0x5c5718, _0x53eaac++);
        if (_0x26328f < _0x15c041) {
            var _0x2347c3 = 0x0;
            for (_0x5c5718 = 0x0; _0x26328f < _0x15c041;)
                _0x5c5718 |= (0x1 & !!_0x1eba98[_0x26328f++]) << _0x2347c3++;
            this['writeByte'](_0x5c5718, _0x53eaac++);
        }
        return _0x1ec546 ? (this['offset'] = _0x53eaac, this) : _0x53eaac - _0x12c6e2;
    }, _0x170abd['readBitSet'] = function (_0x3a27ea) {
        var _0x59e730 = void 0x0 === _0x3a27ea;
        _0x59e730 && (_0x3a27ea = this['offset']);
        var _0x1944a5, _0x3b148f = this['readVarint' + '32'](_0x3a27ea), _0x144dd2 = _0x3b148f['value'], _0x17137f = _0x144dd2 >> 0x3, _0x546f13 = 0x0, _0x5d9307 = [];
        for (_0x3a27ea += _0x3b148f['length']; _0x17137f--;)
            _0x1944a5 = this['readByte'](_0x3a27ea++), _0x5d9307[_0x546f13++] = !!(0x1 & _0x1944a5), _0x5d9307[_0x546f13++] = !!(0x2 & _0x1944a5), _0x5d9307[_0x546f13++] = !!(0x4 & _0x1944a5), _0x5d9307[_0x546f13++] = !!(0x8 & _0x1944a5), _0x5d9307[_0x546f13++] = !!(0x10 & _0x1944a5), _0x5d9307[_0x546f13++] = !!(0x20 & _0x1944a5), _0x5d9307[_0x546f13++] = !!(0x40 & _0x1944a5), _0x5d9307[_0x546f13++] = !!(0x80 & _0x1944a5);
        if (_0x546f13 < _0x144dd2) {
            var _0x2ea5d6 = 0x0;
            for (_0x1944a5 = this['readByte'](_0x3a27ea++); _0x546f13 < _0x144dd2;)
                _0x5d9307[_0x546f13++] = !!(_0x1944a5 >> _0x2ea5d6++ & 0x1);
        }
        return _0x59e730 && (this['offset'] = _0x3a27ea), _0x5d9307;
    }, _0x170abd['readBytes'] = function (_0x7762fc, _0x1ac2db) {
        var _0x35656f = void 0x0 === _0x1ac2db;
        if (_0x35656f && (_0x1ac2db = this['offset']), !this['noAssert']) {
            if ('number' != typeof _0x1ac2db || _0x1ac2db % 0x1 != 0x0)
                throw TypeError('Illegal\x20of' + 'fset:\x20' + _0x1ac2db + ('\x20(not\x20an\x20i' + 'nteger)'));
            if ((_0x1ac2db >>>= 0x0) < 0x0 || _0x1ac2db + _0x7762fc > this['buffer']['byteLength'])
                throw RangeError('Illegal\x20of' + 'fset:\x200\x20<=' + '\x20' + _0x1ac2db + '\x20(+' + _0x7762fc + ')\x20<=\x20' + this['buffer']['byteLength']);
        }
        var _0x58f78f = this['slice'](_0x1ac2db, _0x1ac2db + _0x7762fc);
        return _0x35656f && (this['offset'] += _0x7762fc), _0x58f78f;
    }, _0x170abd['writeBytes'] = _0x170abd['append'], _0x170abd['writeInt8'] = function (_0x19f0b3, _0x910e16) {
        var _0x14f2d1 = void 0x0 === _0x910e16;
        if (_0x14f2d1 && (_0x910e16 = this['offset']), !this['noAssert']) {
            if ('number' != typeof _0x19f0b3 || _0x19f0b3 % 0x1 != 0x0)
                throw TypeError('Illegal\x20va' + 'lue:\x20' + _0x19f0b3 + ('\x20(not\x20an\x20i' + 'nteger)'));
            if (_0x19f0b3 |= 0x0, 'number' != typeof _0x910e16 || _0x910e16 % 0x1 != 0x0)
                throw TypeError('Illegal\x20of' + 'fset:\x20' + _0x910e16 + ('\x20(not\x20an\x20i' + 'nteger)'));
            if ((_0x910e16 >>>= 0x0) < 0x0 || _0x910e16 + 0x0 > this['buffer']['byteLength'])
                throw RangeError('Illegal\x20of' + 'fset:\x200\x20<=' + '\x20' + _0x910e16 + '\x20(+0)\x20<=\x20' + this['buffer']['byteLength']);
        }
        _0x910e16 += 0x1;
        var _0x4af821 = this['buffer']['byteLength'];
        return _0x910e16 > _0x4af821 && this['resize']((_0x4af821 *= 0x2) > _0x910e16 ? _0x4af821 : _0x910e16), _0x910e16 -= 0x1, this['view'][_0x910e16] = _0x19f0b3, _0x14f2d1 && (this['offset'] += 0x1), this;
    }, _0x170abd['writeByte'] = _0x170abd['writeInt8'], _0x170abd['readInt8'] = function (_0x4d13fa) {
        var _0x466c27 = void 0x0 === _0x4d13fa;
        if (_0x466c27 && (_0x4d13fa = this['offset']), !this['noAssert']) {
            if ('number' != typeof _0x4d13fa || _0x4d13fa % 0x1 != 0x0)
                throw TypeError('Illegal\x20of' + 'fset:\x20' + _0x4d13fa + ('\x20(not\x20an\x20i' + 'nteger)'));
            if ((_0x4d13fa >>>= 0x0) < 0x0 || _0x4d13fa + 0x1 > this['buffer']['byteLength'])
                throw RangeError('Illegal\x20of' + 'fset:\x200\x20<=' + '\x20' + _0x4d13fa + '\x20(+1)\x20<=\x20' + this['buffer']['byteLength']);
        }
        var _0x3aafae = this['view'][_0x4d13fa];
        return 0x80 == (0x80 & _0x3aafae) && (_0x3aafae = -(0xff - _0x3aafae + 0x1)), _0x466c27 && (this['offset'] += 0x1), _0x3aafae;
    }, _0x170abd['readByte'] = _0x170abd['readInt8'], _0x170abd['writeUint8'] = function (_0x1a8a20, _0x28774e) {
        var _0x375e4d = void 0x0 === _0x28774e;
        if (_0x375e4d && (_0x28774e = this['offset']), !this['noAssert']) {
            if ('number' != typeof _0x1a8a20 || _0x1a8a20 % 0x1 != 0x0)
                throw TypeError('Illegal\x20va' + 'lue:\x20' + _0x1a8a20 + ('\x20(not\x20an\x20i' + 'nteger)'));
            if (_0x1a8a20 >>>= 0x0, 'number' != typeof _0x28774e || _0x28774e % 0x1 != 0x0)
                throw TypeError('Illegal\x20of' + 'fset:\x20' + _0x28774e + ('\x20(not\x20an\x20i' + 'nteger)'));
            if ((_0x28774e >>>= 0x0) < 0x0 || _0x28774e + 0x0 > this['buffer']['byteLength'])
                throw RangeError('Illegal\x20of' + 'fset:\x200\x20<=' + '\x20' + _0x28774e + '\x20(+0)\x20<=\x20' + this['buffer']['byteLength']);
        }
        _0x28774e += 0x1;
        var _0x525286 = this['buffer']['byteLength'];
        return _0x28774e > _0x525286 && this['resize']((_0x525286 *= 0x2) > _0x28774e ? _0x525286 : _0x28774e), _0x28774e -= 0x1, this['view'][_0x28774e] = _0x1a8a20, _0x375e4d && (this['offset'] += 0x1), this;
    }, _0x170abd['writeUInt8'] = _0x170abd['writeUint8'], _0x170abd['readUint8'] = function (_0xfc76be) {
        var _0x4b1943 = void 0x0 === _0xfc76be;
        if (_0x4b1943 && (_0xfc76be = this['offset']), !this['noAssert']) {
            if ('number' != typeof _0xfc76be || _0xfc76be % 0x1 != 0x0)
                throw TypeError('Illegal\x20of' + 'fset:\x20' + _0xfc76be + ('\x20(not\x20an\x20i' + 'nteger)'));
            if ((_0xfc76be >>>= 0x0) < 0x0 || _0xfc76be + 0x1 > this['buffer']['byteLength'])
                throw RangeError('Illegal\x20of' + 'fset:\x200\x20<=' + '\x20' + _0xfc76be + '\x20(+1)\x20<=\x20' + this['buffer']['byteLength']);
        }
        var _0x30ebae = this['view'][_0xfc76be];
        return _0x4b1943 && (this['offset'] += 0x1), _0x30ebae;
    }, _0x170abd['readUInt8'] = _0x170abd['readUint8'], _0x170abd['writeInt16'] = function (_0x44d09e, _0x55b206) {
        var _0x5c271b = void 0x0 === _0x55b206;
        if (_0x5c271b && (_0x55b206 = this['offset']), !this['noAssert']) {
            if ('number' != typeof _0x44d09e || _0x44d09e % 0x1 != 0x0)
                throw TypeError('Illegal\x20va' + 'lue:\x20' + _0x44d09e + ('\x20(not\x20an\x20i' + 'nteger)'));
            if (_0x44d09e |= 0x0, 'number' != typeof _0x55b206 || _0x55b206 % 0x1 != 0x0)
                throw TypeError('Illegal\x20of' + 'fset:\x20' + _0x55b206 + ('\x20(not\x20an\x20i' + 'nteger)'));
            if ((_0x55b206 >>>= 0x0) < 0x0 || _0x55b206 + 0x0 > this['buffer']['byteLength'])
                throw RangeError('Illegal\x20of' + 'fset:\x200\x20<=' + '\x20' + _0x55b206 + '\x20(+0)\x20<=\x20' + this['buffer']['byteLength']);
        }
        _0x55b206 += 0x2;
        var _0x356fcf = this['buffer']['byteLength'];
        return _0x55b206 > _0x356fcf && this['resize']((_0x356fcf *= 0x2) > _0x55b206 ? _0x356fcf : _0x55b206), _0x55b206 -= 0x2, this['littleEndi' + 'an'] ? (this['view'][_0x55b206 + 0x1] = (0xff00 & _0x44d09e) >>> 0x8, this['view'][_0x55b206] = 0xff & _0x44d09e) : (this['view'][_0x55b206] = (0xff00 & _0x44d09e) >>> 0x8, this['view'][_0x55b206 + 0x1] = 0xff & _0x44d09e), _0x5c271b && (this['offset'] += 0x2), this;
    }, _0x170abd['writeShort'] = _0x170abd['writeInt16'], _0x170abd['readInt16'] = function (_0x2c507a) {
        var _0xff1b55 = void 0x0 === _0x2c507a;
        if (_0xff1b55 && (_0x2c507a = this['offset']), !this['noAssert']) {
            if ('number' != typeof _0x2c507a || _0x2c507a % 0x1 != 0x0)
                throw TypeError('Illegal\x20of' + 'fset:\x20' + _0x2c507a + ('\x20(not\x20an\x20i' + 'nteger)'));
            if ((_0x2c507a >>>= 0x0) < 0x0 || _0x2c507a + 0x2 > this['buffer']['byteLength'])
                throw RangeError('Illegal\x20of' + 'fset:\x200\x20<=' + '\x20' + _0x2c507a + '\x20(+2)\x20<=\x20' + this['buffer']['byteLength']);
        }
        var _0x1f40b0 = 0x0;
        return this['littleEndi' + 'an'] ? (_0x1f40b0 = this['view'][_0x2c507a], _0x1f40b0 |= this['view'][_0x2c507a + 0x1] << 0x8) : (_0x1f40b0 = this['view'][_0x2c507a] << 0x8, _0x1f40b0 |= this['view'][_0x2c507a + 0x1]), 0x8000 == (0x8000 & _0x1f40b0) && (_0x1f40b0 = -(0xffff - _0x1f40b0 + 0x1)), _0xff1b55 && (this['offset'] += 0x2), _0x1f40b0;
    }, _0x170abd['readShort'] = _0x170abd['readInt16'], _0x170abd['writeUint1' + '6'] = function (_0x149945, _0x493d8f) {
        var _0x34362f = void 0x0 === _0x493d8f;
        if (_0x34362f && (_0x493d8f = this['offset']), !this['noAssert']) {
            if ('number' != typeof _0x149945 || _0x149945 % 0x1 != 0x0)
                throw TypeError('Illegal\x20va' + 'lue:\x20' + _0x149945 + ('\x20(not\x20an\x20i' + 'nteger)'));
            if (_0x149945 >>>= 0x0, 'number' != typeof _0x493d8f || _0x493d8f % 0x1 != 0x0)
                throw TypeError('Illegal\x20of' + 'fset:\x20' + _0x493d8f + ('\x20(not\x20an\x20i' + 'nteger)'));
            if ((_0x493d8f >>>= 0x0) < 0x0 || _0x493d8f + 0x0 > this['buffer']['byteLength'])
                throw RangeError('Illegal\x20of' + 'fset:\x200\x20<=' + '\x20' + _0x493d8f + '\x20(+0)\x20<=\x20' + this['buffer']['byteLength']);
        }
        _0x493d8f += 0x2;
        var _0x4def46 = this['buffer']['byteLength'];
        return _0x493d8f > _0x4def46 && this['resize']((_0x4def46 *= 0x2) > _0x493d8f ? _0x4def46 : _0x493d8f), _0x493d8f -= 0x2, this['littleEndi' + 'an'] ? (this['view'][_0x493d8f + 0x1] = (0xff00 & _0x149945) >>> 0x8, this['view'][_0x493d8f] = 0xff & _0x149945) : (this['view'][_0x493d8f] = (0xff00 & _0x149945) >>> 0x8, this['view'][_0x493d8f + 0x1] = 0xff & _0x149945), _0x34362f && (this['offset'] += 0x2), this;
    }, _0x170abd['writeUInt1' + '6'] = _0x170abd['writeUint1' + '6'], _0x170abd['readUint16'] = function (_0x160f20) {
        var _0x3eb2c4 = void 0x0 === _0x160f20;
        if (_0x3eb2c4 && (_0x160f20 = this['offset']), !this['noAssert']) {
            if ('number' != typeof _0x160f20 || _0x160f20 % 0x1 != 0x0)
                throw TypeError('Illegal\x20of' + 'fset:\x20' + _0x160f20 + ('\x20(not\x20an\x20i' + 'nteger)'));
            if ((_0x160f20 >>>= 0x0) < 0x0 || _0x160f20 + 0x2 > this['buffer']['byteLength'])
                throw RangeError('Illegal\x20of' + 'fset:\x200\x20<=' + '\x20' + _0x160f20 + '\x20(+2)\x20<=\x20' + this['buffer']['byteLength']);
        }
        var _0x42e3e4 = 0x0;
        return this['littleEndi' + 'an'] ? (_0x42e3e4 = this['view'][_0x160f20], _0x42e3e4 |= this['view'][_0x160f20 + 0x1] << 0x8) : (_0x42e3e4 = this['view'][_0x160f20] << 0x8, _0x42e3e4 |= this['view'][_0x160f20 + 0x1]), _0x3eb2c4 && (this['offset'] += 0x2), _0x42e3e4;
    }, _0x170abd['readUInt16'] = _0x170abd['readUint16'], _0x170abd['writeInt32'] = function (_0x442475, _0x328c9c) {
        var _0x57d5a0 = void 0x0 === _0x328c9c;
        if (_0x57d5a0 && (_0x328c9c = this['offset']), !this['noAssert']) {
            if ('number' != typeof _0x442475 || _0x442475 % 0x1 != 0x0)
                throw TypeError('Illegal\x20va' + 'lue:\x20' + _0x442475 + ('\x20(not\x20an\x20i' + 'nteger)'));
            if (_0x442475 |= 0x0, 'number' != typeof _0x328c9c || _0x328c9c % 0x1 != 0x0)
                throw TypeError('Illegal\x20of' + 'fset:\x20' + _0x328c9c + ('\x20(not\x20an\x20i' + 'nteger)'));
            if ((_0x328c9c >>>= 0x0) < 0x0 || _0x328c9c + 0x0 > this['buffer']['byteLength'])
                throw RangeError('Illegal\x20of' + 'fset:\x200\x20<=' + '\x20' + _0x328c9c + '\x20(+0)\x20<=\x20' + this['buffer']['byteLength']);
        }
        _0x328c9c += 0x4;
        var _0x1d5137 = this['buffer']['byteLength'];
        return _0x328c9c > _0x1d5137 && this['resize']((_0x1d5137 *= 0x2) > _0x328c9c ? _0x1d5137 : _0x328c9c), _0x328c9c -= 0x4, this['littleEndi' + 'an'] ? (this['view'][_0x328c9c + 0x3] = _0x442475 >>> 0x18 & 0xff, this['view'][_0x328c9c + 0x2] = _0x442475 >>> 0x10 & 0xff, this['view'][_0x328c9c + 0x1] = _0x442475 >>> 0x8 & 0xff, this['view'][_0x328c9c] = 0xff & _0x442475) : (this['view'][_0x328c9c] = _0x442475 >>> 0x18 & 0xff, this['view'][_0x328c9c + 0x1] = _0x442475 >>> 0x10 & 0xff, this['view'][_0x328c9c + 0x2] = _0x442475 >>> 0x8 & 0xff, this['view'][_0x328c9c + 0x3] = 0xff & _0x442475), _0x57d5a0 && (this['offset'] += 0x4), this;
    }, _0x170abd['writeInt'] = _0x170abd['writeInt32'], _0x170abd['readInt32'] = function (_0x1b2756) {
        var _0x552171 = void 0x0 === _0x1b2756;
        if (_0x552171 && (_0x1b2756 = this['offset']), !this['noAssert']) {
            if ('number' != typeof _0x1b2756 || _0x1b2756 % 0x1 != 0x0)
                throw TypeError('Illegal\x20of' + 'fset:\x20' + _0x1b2756 + ('\x20(not\x20an\x20i' + 'nteger)'));
            if ((_0x1b2756 >>>= 0x0) < 0x0 || _0x1b2756 + 0x4 > this['buffer']['byteLength'])
                throw RangeError('Illegal\x20of' + 'fset:\x200\x20<=' + '\x20' + _0x1b2756 + '\x20(+4)\x20<=\x20' + this['buffer']['byteLength']);
        }
        var _0x4812b4 = 0x0;
        return this['littleEndi' + 'an'] ? (_0x4812b4 = this['view'][_0x1b2756 + 0x2] << 0x10, _0x4812b4 |= this['view'][_0x1b2756 + 0x1] << 0x8, _0x4812b4 |= this['view'][_0x1b2756], _0x4812b4 += this['view'][_0x1b2756 + 0x3] << 0x18 >>> 0x0) : (_0x4812b4 = this['view'][_0x1b2756 + 0x1] << 0x10, _0x4812b4 |= this['view'][_0x1b2756 + 0x2] << 0x8, _0x4812b4 |= this['view'][_0x1b2756 + 0x3], _0x4812b4 += this['view'][_0x1b2756] << 0x18 >>> 0x0), _0x4812b4 |= 0x0, _0x552171 && (this['offset'] += 0x4), _0x4812b4;
    }, _0x170abd['readInt'] = _0x170abd['readInt32'], _0x170abd['writeUint3' + '2'] = function (_0x37d99e, _0x2afd09) {
        var _0x3a26ba = void 0x0 === _0x2afd09;
        if (_0x3a26ba && (_0x2afd09 = this['offset']), !this['noAssert']) {
            if ('number' != typeof _0x37d99e || _0x37d99e % 0x1 != 0x0)
                throw TypeError('Illegal\x20va' + 'lue:\x20' + _0x37d99e + ('\x20(not\x20an\x20i' + 'nteger)'));
            if (_0x37d99e >>>= 0x0, 'number' != typeof _0x2afd09 || _0x2afd09 % 0x1 != 0x0)
                throw TypeError('Illegal\x20of' + 'fset:\x20' + _0x2afd09 + ('\x20(not\x20an\x20i' + 'nteger)'));
            if ((_0x2afd09 >>>= 0x0) < 0x0 || _0x2afd09 + 0x0 > this['buffer']['byteLength'])
                throw RangeError('Illegal\x20of' + 'fset:\x200\x20<=' + '\x20' + _0x2afd09 + '\x20(+0)\x20<=\x20' + this['buffer']['byteLength']);
        }
        _0x2afd09 += 0x4;
        var _0x4f5661 = this['buffer']['byteLength'];
        return _0x2afd09 > _0x4f5661 && this['resize']((_0x4f5661 *= 0x2) > _0x2afd09 ? _0x4f5661 : _0x2afd09), _0x2afd09 -= 0x4, this['littleEndi' + 'an'] ? (this['view'][_0x2afd09 + 0x3] = _0x37d99e >>> 0x18 & 0xff, this['view'][_0x2afd09 + 0x2] = _0x37d99e >>> 0x10 & 0xff, this['view'][_0x2afd09 + 0x1] = _0x37d99e >>> 0x8 & 0xff, this['view'][_0x2afd09] = 0xff & _0x37d99e) : (this['view'][_0x2afd09] = _0x37d99e >>> 0x18 & 0xff, this['view'][_0x2afd09 + 0x1] = _0x37d99e >>> 0x10 & 0xff, this['view'][_0x2afd09 + 0x2] = _0x37d99e >>> 0x8 & 0xff, this['view'][_0x2afd09 + 0x3] = 0xff & _0x37d99e), _0x3a26ba && (this['offset'] += 0x4), this;
    }, _0x170abd['writeUInt3' + '2'] = _0x170abd['writeUint3' + '2'], _0x170abd['readUint32'] = function (_0x34ed09) {
        var _0xf6ba67 = void 0x0 === _0x34ed09;
        if (_0xf6ba67 && (_0x34ed09 = this['offset']), !this['noAssert']) {
            if ('number' != typeof _0x34ed09 || _0x34ed09 % 0x1 != 0x0)
                throw TypeError('Illegal\x20of' + 'fset:\x20' + _0x34ed09 + ('\x20(not\x20an\x20i' + 'nteger)'));
            if ((_0x34ed09 >>>= 0x0) < 0x0 || _0x34ed09 + 0x4 > this['buffer']['byteLength'])
                throw RangeError('Illegal\x20of' + 'fset:\x200\x20<=' + '\x20' + _0x34ed09 + '\x20(+4)\x20<=\x20' + this['buffer']['byteLength']);
        }
        var _0x2a62af = 0x0;
        return this['littleEndi' + 'an'] ? (_0x2a62af = this['view'][_0x34ed09 + 0x2] << 0x10, _0x2a62af |= this['view'][_0x34ed09 + 0x1] << 0x8, _0x2a62af |= this['view'][_0x34ed09], _0x2a62af += this['view'][_0x34ed09 + 0x3] << 0x18 >>> 0x0) : (_0x2a62af = this['view'][_0x34ed09 + 0x1] << 0x10, _0x2a62af |= this['view'][_0x34ed09 + 0x2] << 0x8, _0x2a62af |= this['view'][_0x34ed09 + 0x3], _0x2a62af += this['view'][_0x34ed09] << 0x18 >>> 0x0), _0xf6ba67 && (this['offset'] += 0x4), _0x2a62af;
    }, _0x170abd['readUInt32'] = _0x170abd['readUint32'], _0x486183 && (_0x170abd['writeInt64'] = function (_0x29a2c5, _0x10bd2d) {
        var _0x1155b7 = void 0x0 === _0x10bd2d;
        if (_0x1155b7 && (_0x10bd2d = this['offset']), !this['noAssert']) {
            if ('number' == typeof _0x29a2c5)
                _0x29a2c5 = _0x486183['fromNumber'](_0x29a2c5);
            else {
                if ('string' == typeof _0x29a2c5)
                    _0x29a2c5 = _0x486183['fromString'](_0x29a2c5);
                else {
                    if (!(_0x29a2c5 && _0x29a2c5 instanceof _0x486183))
                        throw TypeError('Illegal\x20va' + 'lue:\x20' + _0x29a2c5 + ('\x20(not\x20an\x20i' + 'nteger\x20or\x20' + 'Long)'));
                }
            }
            if ('number' != typeof _0x10bd2d || _0x10bd2d % 0x1 != 0x0)
                throw TypeError('Illegal\x20of' + 'fset:\x20' + _0x10bd2d + ('\x20(not\x20an\x20i' + 'nteger)'));
            if ((_0x10bd2d >>>= 0x0) < 0x0 || _0x10bd2d + 0x0 > this['buffer']['byteLength'])
                throw RangeError('Illegal\x20of' + 'fset:\x200\x20<=' + '\x20' + _0x10bd2d + '\x20(+0)\x20<=\x20' + this['buffer']['byteLength']);
        }
        'number' == typeof _0x29a2c5 ? _0x29a2c5 = _0x486183['fromNumber'](_0x29a2c5) : 'string' == typeof _0x29a2c5 && (_0x29a2c5 = _0x486183['fromString'](_0x29a2c5)), _0x10bd2d += 0x8;
        var _0x42737e = this['buffer']['byteLength'];
        _0x10bd2d > _0x42737e && this['resize']((_0x42737e *= 0x2) > _0x10bd2d ? _0x42737e : _0x10bd2d), _0x10bd2d -= 0x8;
        var _0x2f920b = _0x29a2c5['low'], _0x1077b7 = _0x29a2c5['high'];
        return this['littleEndi' + 'an'] ? (this['view'][_0x10bd2d + 0x3] = _0x2f920b >>> 0x18 & 0xff, this['view'][_0x10bd2d + 0x2] = _0x2f920b >>> 0x10 & 0xff, this['view'][_0x10bd2d + 0x1] = _0x2f920b >>> 0x8 & 0xff, this['view'][_0x10bd2d] = 0xff & _0x2f920b, _0x10bd2d += 0x4, this['view'][_0x10bd2d + 0x3] = _0x1077b7 >>> 0x18 & 0xff, this['view'][_0x10bd2d + 0x2] = _0x1077b7 >>> 0x10 & 0xff, this['view'][_0x10bd2d + 0x1] = _0x1077b7 >>> 0x8 & 0xff, this['view'][_0x10bd2d] = 0xff & _0x1077b7) : (this['view'][_0x10bd2d] = _0x1077b7 >>> 0x18 & 0xff, this['view'][_0x10bd2d + 0x1] = _0x1077b7 >>> 0x10 & 0xff, this['view'][_0x10bd2d + 0x2] = _0x1077b7 >>> 0x8 & 0xff, this['view'][_0x10bd2d + 0x3] = 0xff & _0x1077b7, _0x10bd2d += 0x4, this['view'][_0x10bd2d] = _0x2f920b >>> 0x18 & 0xff, this['view'][_0x10bd2d + 0x1] = _0x2f920b >>> 0x10 & 0xff, this['view'][_0x10bd2d + 0x2] = _0x2f920b >>> 0x8 & 0xff, this['view'][_0x10bd2d + 0x3] = 0xff & _0x2f920b), _0x1155b7 && (this['offset'] += 0x8), this;
    }, _0x170abd['writeLong'] = _0x170abd['writeInt64'], _0x170abd['readInt64'] = function (_0x2d22cf) {
        var _0x48269c = void 0x0 === _0x2d22cf;
        if (_0x48269c && (_0x2d22cf = this['offset']), !this['noAssert']) {
            if ('number' != typeof _0x2d22cf || _0x2d22cf % 0x1 != 0x0)
                throw TypeError('Illegal\x20of' + 'fset:\x20' + _0x2d22cf + ('\x20(not\x20an\x20i' + 'nteger)'));
            if ((_0x2d22cf >>>= 0x0) < 0x0 || _0x2d22cf + 0x8 > this['buffer']['byteLength'])
                throw RangeError('Illegal\x20of' + 'fset:\x200\x20<=' + '\x20' + _0x2d22cf + '\x20(+8)\x20<=\x20' + this['buffer']['byteLength']);
        }
        var _0x3d3756 = 0x0, _0x275e72 = 0x0;
        this['littleEndi' + 'an'] ? (_0x3d3756 = this['view'][_0x2d22cf + 0x2] << 0x10, _0x3d3756 |= this['view'][_0x2d22cf + 0x1] << 0x8, _0x3d3756 |= this['view'][_0x2d22cf], _0x3d3756 += this['view'][_0x2d22cf + 0x3] << 0x18 >>> 0x0, _0x2d22cf += 0x4, _0x275e72 = this['view'][_0x2d22cf + 0x2] << 0x10, _0x275e72 |= this['view'][_0x2d22cf + 0x1] << 0x8, _0x275e72 |= this['view'][_0x2d22cf], _0x275e72 += this['view'][_0x2d22cf + 0x3] << 0x18 >>> 0x0) : (_0x275e72 = this['view'][_0x2d22cf + 0x1] << 0x10, _0x275e72 |= this['view'][_0x2d22cf + 0x2] << 0x8, _0x275e72 |= this['view'][_0x2d22cf + 0x3], _0x275e72 += this['view'][_0x2d22cf] << 0x18 >>> 0x0, _0x2d22cf += 0x4, _0x3d3756 = this['view'][_0x2d22cf + 0x1] << 0x10, _0x3d3756 |= this['view'][_0x2d22cf + 0x2] << 0x8, _0x3d3756 |= this['view'][_0x2d22cf + 0x3], _0x3d3756 += this['view'][_0x2d22cf] << 0x18 >>> 0x0);
        var _0x47a09a = new _0x486183(_0x3d3756, _0x275e72, !0x1);
        return _0x48269c && (this['offset'] += 0x8), _0x47a09a;
    }, _0x170abd['readLong'] = _0x170abd['readInt64'], _0x170abd['writeUint6' + '4'] = function (_0x28d735, _0x3a6375) {
        var _0x2788ba = void 0x0 === _0x3a6375;
        if (_0x2788ba && (_0x3a6375 = this['offset']), !this['noAssert']) {
            if ('number' == typeof _0x28d735)
                _0x28d735 = _0x486183['fromNumber'](_0x28d735);
            else {
                if ('string' == typeof _0x28d735)
                    _0x28d735 = _0x486183['fromString'](_0x28d735);
                else {
                    if (!(_0x28d735 && _0x28d735 instanceof _0x486183))
                        throw TypeError('Illegal\x20va' + 'lue:\x20' + _0x28d735 + ('\x20(not\x20an\x20i' + 'nteger\x20or\x20' + 'Long)'));
                }
            }
            if ('number' != typeof _0x3a6375 || _0x3a6375 % 0x1 != 0x0)
                throw TypeError('Illegal\x20of' + 'fset:\x20' + _0x3a6375 + ('\x20(not\x20an\x20i' + 'nteger)'));
            if ((_0x3a6375 >>>= 0x0) < 0x0 || _0x3a6375 + 0x0 > this['buffer']['byteLength'])
                throw RangeError('Illegal\x20of' + 'fset:\x200\x20<=' + '\x20' + _0x3a6375 + '\x20(+0)\x20<=\x20' + this['buffer']['byteLength']);
        }
        'number' == typeof _0x28d735 ? _0x28d735 = _0x486183['fromNumber'](_0x28d735) : 'string' == typeof _0x28d735 && (_0x28d735 = _0x486183['fromString'](_0x28d735)), _0x3a6375 += 0x8;
        var _0xe45104 = this['buffer']['byteLength'];
        _0x3a6375 > _0xe45104 && this['resize']((_0xe45104 *= 0x2) > _0x3a6375 ? _0xe45104 : _0x3a6375), _0x3a6375 -= 0x8;
        var _0x22ab0b = _0x28d735['low'], _0x466ee9 = _0x28d735['high'];
        return this['littleEndi' + 'an'] ? (this['view'][_0x3a6375 + 0x3] = _0x22ab0b >>> 0x18 & 0xff, this['view'][_0x3a6375 + 0x2] = _0x22ab0b >>> 0x10 & 0xff, this['view'][_0x3a6375 + 0x1] = _0x22ab0b >>> 0x8 & 0xff, this['view'][_0x3a6375] = 0xff & _0x22ab0b, _0x3a6375 += 0x4, this['view'][_0x3a6375 + 0x3] = _0x466ee9 >>> 0x18 & 0xff, this['view'][_0x3a6375 + 0x2] = _0x466ee9 >>> 0x10 & 0xff, this['view'][_0x3a6375 + 0x1] = _0x466ee9 >>> 0x8 & 0xff, this['view'][_0x3a6375] = 0xff & _0x466ee9) : (this['view'][_0x3a6375] = _0x466ee9 >>> 0x18 & 0xff, this['view'][_0x3a6375 + 0x1] = _0x466ee9 >>> 0x10 & 0xff, this['view'][_0x3a6375 + 0x2] = _0x466ee9 >>> 0x8 & 0xff, this['view'][_0x3a6375 + 0x3] = 0xff & _0x466ee9, _0x3a6375 += 0x4, this['view'][_0x3a6375] = _0x22ab0b >>> 0x18 & 0xff, this['view'][_0x3a6375 + 0x1] = _0x22ab0b >>> 0x10 & 0xff, this['view'][_0x3a6375 + 0x2] = _0x22ab0b >>> 0x8 & 0xff, this['view'][_0x3a6375 + 0x3] = 0xff & _0x22ab0b), _0x2788ba && (this['offset'] += 0x8), this;
    }, _0x170abd['writeUInt6' + '4'] = _0x170abd['writeUint6' + '4'], _0x170abd['readUint64'] = function (_0x41f5c7) {
        var _0x4f40d6 = void 0x0 === _0x41f5c7;
        if (_0x4f40d6 && (_0x41f5c7 = this['offset']), !this['noAssert']) {
            if ('number' != typeof _0x41f5c7 || _0x41f5c7 % 0x1 != 0x0)
                throw TypeError('Illegal\x20of' + 'fset:\x20' + _0x41f5c7 + ('\x20(not\x20an\x20i' + 'nteger)'));
            if ((_0x41f5c7 >>>= 0x0) < 0x0 || _0x41f5c7 + 0x8 > this['buffer']['byteLength'])
                throw RangeError('Illegal\x20of' + 'fset:\x200\x20<=' + '\x20' + _0x41f5c7 + '\x20(+8)\x20<=\x20' + this['buffer']['byteLength']);
        }
        var _0x37b481 = 0x0, _0x446afa = 0x0;
        this['littleEndi' + 'an'] ? (_0x37b481 = this['view'][_0x41f5c7 + 0x2] << 0x10, _0x37b481 |= this['view'][_0x41f5c7 + 0x1] << 0x8, _0x37b481 |= this['view'][_0x41f5c7], _0x37b481 += this['view'][_0x41f5c7 + 0x3] << 0x18 >>> 0x0, _0x41f5c7 += 0x4, _0x446afa = this['view'][_0x41f5c7 + 0x2] << 0x10, _0x446afa |= this['view'][_0x41f5c7 + 0x1] << 0x8, _0x446afa |= this['view'][_0x41f5c7], _0x446afa += this['view'][_0x41f5c7 + 0x3] << 0x18 >>> 0x0) : (_0x446afa = this['view'][_0x41f5c7 + 0x1] << 0x10, _0x446afa |= this['view'][_0x41f5c7 + 0x2] << 0x8, _0x446afa |= this['view'][_0x41f5c7 + 0x3], _0x446afa += this['view'][_0x41f5c7] << 0x18 >>> 0x0, _0x41f5c7 += 0x4, _0x37b481 = this['view'][_0x41f5c7 + 0x1] << 0x10, _0x37b481 |= this['view'][_0x41f5c7 + 0x2] << 0x8, _0x37b481 |= this['view'][_0x41f5c7 + 0x3], _0x37b481 += this['view'][_0x41f5c7] << 0x18 >>> 0x0);
        var _0x3d737b = new _0x486183(_0x37b481, _0x446afa, !0x0);
        return _0x4f40d6 && (this['offset'] += 0x8), _0x3d737b;
    }, _0x170abd['readUInt64'] = _0x170abd['readUint64']), _0x170abd['writeFloat' + '32'] = function (_0x109e19, _0x4e49b3) {
        var _0x5b6adb = void 0x0 === _0x4e49b3;
        if (_0x5b6adb && (_0x4e49b3 = this['offset']), !this['noAssert']) {
            if ('number' != typeof _0x109e19)
                throw TypeError('Illegal\x20va' + 'lue:\x20' + _0x109e19 + ('\x20(not\x20a\x20nu' + 'mber)'));
            if ('number' != typeof _0x4e49b3 || _0x4e49b3 % 0x1 != 0x0)
                throw TypeError('Illegal\x20of' + 'fset:\x20' + _0x4e49b3 + ('\x20(not\x20an\x20i' + 'nteger)'));
            if ((_0x4e49b3 >>>= 0x0) < 0x0 || _0x4e49b3 + 0x0 > this['buffer']['byteLength'])
                throw RangeError('Illegal\x20of' + 'fset:\x200\x20<=' + '\x20' + _0x4e49b3 + '\x20(+0)\x20<=\x20' + this['buffer']['byteLength']);
        }
        _0x4e49b3 += 0x4;
        var _0x367826 = this['buffer']['byteLength'];
        return _0x4e49b3 > _0x367826 && this['resize']((_0x367826 *= 0x2) > _0x4e49b3 ? _0x367826 : _0x4e49b3), _0x4e49b3 -= 0x4, _0x5d0c34(this['view'], _0x109e19, _0x4e49b3, this['littleEndi' + 'an'], 0x17, 0x4), _0x5b6adb && (this['offset'] += 0x4), this;
    }, _0x170abd['writeFloat'] = _0x170abd['writeFloat' + '32'], _0x170abd['readFloat3' + '2'] = function (_0x1c299f) {
        var _0x12a1f3 = void 0x0 === _0x1c299f;
        if (_0x12a1f3 && (_0x1c299f = this['offset']), !this['noAssert']) {
            if ('number' != typeof _0x1c299f || _0x1c299f % 0x1 != 0x0)
                throw TypeError('Illegal\x20of' + 'fset:\x20' + _0x1c299f + ('\x20(not\x20an\x20i' + 'nteger)'));
            if ((_0x1c299f >>>= 0x0) < 0x0 || _0x1c299f + 0x4 > this['buffer']['byteLength'])
                throw RangeError('Illegal\x20of' + 'fset:\x200\x20<=' + '\x20' + _0x1c299f + '\x20(+4)\x20<=\x20' + this['buffer']['byteLength']);
        }
        var _0x4ec7ae = _0x30dada(this['view'], _0x1c299f, this['littleEndi' + 'an'], 0x17, 0x4);
        return _0x12a1f3 && (this['offset'] += 0x4), _0x4ec7ae;
    }, _0x170abd['readFloat'] = _0x170abd['readFloat3' + '2'], _0x170abd['writeFloat' + '64'] = function (_0x4a7edc, _0x43c117) {
        var _0x991428 = void 0x0 === _0x43c117;
        if (_0x991428 && (_0x43c117 = this['offset']), !this['noAssert']) {
            if ('number' != typeof _0x4a7edc)
                throw TypeError('Illegal\x20va' + 'lue:\x20' + _0x4a7edc + ('\x20(not\x20a\x20nu' + 'mber)'));
            if ('number' != typeof _0x43c117 || _0x43c117 % 0x1 != 0x0)
                throw TypeError('Illegal\x20of' + 'fset:\x20' + _0x43c117 + ('\x20(not\x20an\x20i' + 'nteger)'));
            if ((_0x43c117 >>>= 0x0) < 0x0 || _0x43c117 + 0x0 > this['buffer']['byteLength'])
                throw RangeError('Illegal\x20of' + 'fset:\x200\x20<=' + '\x20' + _0x43c117 + '\x20(+0)\x20<=\x20' + this['buffer']['byteLength']);
        }
        _0x43c117 += 0x8;
        var _0x19c290 = this['buffer']['byteLength'];
        return _0x43c117 > _0x19c290 && this['resize']((_0x19c290 *= 0x2) > _0x43c117 ? _0x19c290 : _0x43c117), _0x43c117 -= 0x8, _0x5d0c34(this['view'], _0x4a7edc, _0x43c117, this['littleEndi' + 'an'], 0x34, 0x8), _0x991428 && (this['offset'] += 0x8), this;
    }, _0x170abd['writeDoubl' + 'e'] = _0x170abd['writeFloat' + '64'], _0x170abd['readFloat6' + '4'] = function (_0x428b26) {
        var _0x4685d9 = void 0x0 === _0x428b26;
        if (_0x4685d9 && (_0x428b26 = this['offset']), !this['noAssert']) {
            if ('number' != typeof _0x428b26 || _0x428b26 % 0x1 != 0x0)
                throw TypeError('Illegal\x20of' + 'fset:\x20' + _0x428b26 + ('\x20(not\x20an\x20i' + 'nteger)'));
            if ((_0x428b26 >>>= 0x0) < 0x0 || _0x428b26 + 0x8 > this['buffer']['byteLength'])
                throw RangeError('Illegal\x20of' + 'fset:\x200\x20<=' + '\x20' + _0x428b26 + '\x20(+8)\x20<=\x20' + this['buffer']['byteLength']);
        }
        var _0x2fec81 = _0x30dada(this['view'], _0x428b26, this['littleEndi' + 'an'], 0x34, 0x8);
        return _0x4685d9 && (this['offset'] += 0x8), _0x2fec81;
    }, _0x170abd['readDouble'] = _0x170abd['readFloat6' + '4'], _0x1cd814['MAX_VARINT' + '32_BYTES'] = 0x5, _0x1cd814['calculateV' + 'arint32'] = function (_0x24131e) {
        return (_0x24131e >>>= 0x0) < 0x80 ? 0x1 : _0x24131e < 0x4000 ? 0x2 : _0x24131e < 0x1 << 0x15 ? 0x3 : _0x24131e < 0x1 << 0x1c ? 0x4 : 0x5;
    }, _0x1cd814['zigZagEnco' + 'de32'] = function (_0x228872) {
        return ((_0x228872 |= 0x0) << 0x1 ^ _0x228872 >> 0x1f) >>> 0x0;
    }, _0x1cd814['zigZagDeco' + 'de32'] = function (_0x3a45f3) {
        return _0x3a45f3 >>> 0x1 ^ -(0x1 & _0x3a45f3) | 0x0;
    }, _0x170abd['writeVarin' + 't32'] = function (_0x34f1fd, _0x51e9b9) {
        var _0x4cad99 = void 0x0 === _0x51e9b9;
        if (_0x4cad99 && (_0x51e9b9 = this['offset']), !this['noAssert']) {
            if ('number' != typeof _0x34f1fd || _0x34f1fd % 0x1 != 0x0)
                throw TypeError('Illegal\x20va' + 'lue:\x20' + _0x34f1fd + ('\x20(not\x20an\x20i' + 'nteger)'));
            if (_0x34f1fd |= 0x0, 'number' != typeof _0x51e9b9 || _0x51e9b9 % 0x1 != 0x0)
                throw TypeError('Illegal\x20of' + 'fset:\x20' + _0x51e9b9 + ('\x20(not\x20an\x20i' + 'nteger)'));
            if ((_0x51e9b9 >>>= 0x0) < 0x0 || _0x51e9b9 + 0x0 > this['buffer']['byteLength'])
                throw RangeError('Illegal\x20of' + 'fset:\x200\x20<=' + '\x20' + _0x51e9b9 + '\x20(+0)\x20<=\x20' + this['buffer']['byteLength']);
        }
        var _0x6c2fee, _0x186f85 = _0x1cd814['calculateV' + 'arint32'](_0x34f1fd);
        _0x51e9b9 += _0x186f85;
        var _0x4cc118 = this['buffer']['byteLength'];
        for (_0x51e9b9 > _0x4cc118 && this['resize']((_0x4cc118 *= 0x2) > _0x51e9b9 ? _0x4cc118 : _0x51e9b9), _0x51e9b9 -= _0x186f85, _0x34f1fd >>>= 0x0; _0x34f1fd >= 0x80;)
            _0x6c2fee = 0x7f & _0x34f1fd | 0x80, this['view'][_0x51e9b9++] = _0x6c2fee, _0x34f1fd >>>= 0x7;
        return this['view'][_0x51e9b9++] = _0x34f1fd, _0x4cad99 ? (this['offset'] = _0x51e9b9, this) : _0x186f85;
    }, _0x170abd['writeVarin' + 't32ZigZag'] = function (_0xcc6c8b, _0x1e2685) {
        return this['writeVarin' + 't32'](_0x1cd814['zigZagEnco' + 'de32'](_0xcc6c8b), _0x1e2685);
    }, _0x170abd['readVarint' + '32'] = function (_0x473b9b) {
        var _0xbf0f27 = void 0x0 === _0x473b9b;
        if (_0xbf0f27 && (_0x473b9b = this['offset']), !this['noAssert']) {
            if ('number' != typeof _0x473b9b || _0x473b9b % 0x1 != 0x0)
                throw TypeError('Illegal\x20of' + 'fset:\x20' + _0x473b9b + ('\x20(not\x20an\x20i' + 'nteger)'));
            if ((_0x473b9b >>>= 0x0) < 0x0 || _0x473b9b + 0x1 > this['buffer']['byteLength'])
                throw RangeError('Illegal\x20of' + 'fset:\x200\x20<=' + '\x20' + _0x473b9b + '\x20(+1)\x20<=\x20' + this['buffer']['byteLength']);
        }
        var _0x338b87, _0x2a454b = 0x0, _0x126888 = 0x0;
        do {
            if (!this['noAssert'] && _0x473b9b > this['limit']) {
                var _0x264bc5 = Error('Truncated');
                throw _0x264bc5['truncated'] = !0x0, _0x264bc5;
            }
            _0x338b87 = this['view'][_0x473b9b++], _0x2a454b < 0x5 && (_0x126888 |= (0x7f & _0x338b87) << 0x7 * _0x2a454b), ++_0x2a454b;
        } while (0x0 != (0x80 & _0x338b87));
        return _0x126888 |= 0x0, _0xbf0f27 ? (this['offset'] = _0x473b9b, _0x126888) : {
            'value': _0x126888,
            'length': _0x2a454b
        };
    }, _0x170abd['readVarint' + '32ZigZag'] = function (_0x58d2e9) {
        var _0x5c97b6 = this['readVarint' + '32'](_0x58d2e9);
        return 'object' == typeof _0x5c97b6 ? _0x5c97b6['value'] = _0x1cd814['zigZagDeco' + 'de32'](_0x5c97b6['value']) : _0x5c97b6 = _0x1cd814['zigZagDeco' + 'de32'](_0x5c97b6), _0x5c97b6;
    }, _0x486183 && (_0x1cd814['MAX_VARINT' + '64_BYTES'] = 0xa, _0x1cd814['calculateV' + 'arint64'] = function (_0x5f4dff) {
        'number' == typeof _0x5f4dff ? _0x5f4dff = _0x486183['fromNumber'](_0x5f4dff) : 'string' == typeof _0x5f4dff && (_0x5f4dff = _0x486183['fromString'](_0x5f4dff));
        var _0x693fc9 = _0x5f4dff['toInt']() >>> 0x0, _0x6f6ce6 = _0x5f4dff['shiftRight' + 'Unsigned'](0x1c)['toInt']() >>> 0x0, _0xadb187 = _0x5f4dff['shiftRight' + 'Unsigned'](0x38)['toInt']() >>> 0x0;
        return 0x0 == _0xadb187 ? 0x0 == _0x6f6ce6 ? _0x693fc9 < 0x4000 ? _0x693fc9 < 0x80 ? 0x1 : 0x2 : _0x693fc9 < 0x1 << 0x15 ? 0x3 : 0x4 : _0x6f6ce6 < 0x4000 ? _0x6f6ce6 < 0x80 ? 0x5 : 0x6 : _0x6f6ce6 < 0x1 << 0x15 ? 0x7 : 0x8 : _0xadb187 < 0x80 ? 0x9 : 0xa;
    }, _0x1cd814['zigZagEnco' + 'de64'] = function (_0x18cd03) {
        return 'number' == typeof _0x18cd03 ? _0x18cd03 = _0x486183['fromNumber'](_0x18cd03, !0x1) : 'string' == typeof _0x18cd03 ? _0x18cd03 = _0x486183['fromString'](_0x18cd03, !0x1) : !0x1 !== _0x18cd03['unsigned'] && (_0x18cd03 = _0x18cd03['toSigned']()), _0x18cd03['shiftLeft'](0x1)['xor'](_0x18cd03['shiftRight'](0x3f))['toUnsigned']();
    }, _0x1cd814['zigZagDeco' + 'de64'] = function (_0x2dff26) {
        return 'number' == typeof _0x2dff26 ? _0x2dff26 = _0x486183['fromNumber'](_0x2dff26, !0x1) : 'string' == typeof _0x2dff26 ? _0x2dff26 = _0x486183['fromString'](_0x2dff26, !0x1) : !0x1 !== _0x2dff26['unsigned'] && (_0x2dff26 = _0x2dff26['toSigned']()), _0x2dff26['shiftRight' + 'Unsigned'](0x1)['xor'](_0x2dff26['and'](_0x486183['ONE'])['toSigned']()['negate']())['toSigned']();
    }, _0x170abd['writeVarin' + 't64'] = function (_0x672e31, _0x4cc9ae) {
        var _0x2ff911 = void 0x0 === _0x4cc9ae;
        if (_0x2ff911 && (_0x4cc9ae = this['offset']), !this['noAssert']) {
            if ('number' == typeof _0x672e31)
                _0x672e31 = _0x486183['fromNumber'](_0x672e31);
            else {
                if ('string' == typeof _0x672e31)
                    _0x672e31 = _0x486183['fromString'](_0x672e31);
                else {
                    if (!(_0x672e31 && _0x672e31 instanceof _0x486183))
                        throw TypeError('Illegal\x20va' + 'lue:\x20' + _0x672e31 + ('\x20(not\x20an\x20i' + 'nteger\x20or\x20' + 'Long)'));
                }
            }
            if ('number' != typeof _0x4cc9ae || _0x4cc9ae % 0x1 != 0x0)
                throw TypeError('Illegal\x20of' + 'fset:\x20' + _0x4cc9ae + ('\x20(not\x20an\x20i' + 'nteger)'));
            if ((_0x4cc9ae >>>= 0x0) < 0x0 || _0x4cc9ae + 0x0 > this['buffer']['byteLength'])
                throw RangeError('Illegal\x20of' + 'fset:\x200\x20<=' + '\x20' + _0x4cc9ae + '\x20(+0)\x20<=\x20' + this['buffer']['byteLength']);
        }
        'number' == typeof _0x672e31 ? _0x672e31 = _0x486183['fromNumber'](_0x672e31, !0x1) : 'string' == typeof _0x672e31 ? _0x672e31 = _0x486183['fromString'](_0x672e31, !0x1) : !0x1 !== _0x672e31['unsigned'] && (_0x672e31 = _0x672e31['toSigned']());
        var _0x432330 = _0x1cd814['calculateV' + 'arint64'](_0x672e31), _0x12c350 = _0x672e31['toInt']() >>> 0x0, _0x13ebc1 = _0x672e31['shiftRight' + 'Unsigned'](0x1c)['toInt']() >>> 0x0, _0x203302 = _0x672e31['shiftRight' + 'Unsigned'](0x38)['toInt']() >>> 0x0;
        _0x4cc9ae += _0x432330;
        var _0x165391 = this['buffer']['byteLength'];
        switch (_0x4cc9ae > _0x165391 && this['resize']((_0x165391 *= 0x2) > _0x4cc9ae ? _0x165391 : _0x4cc9ae), _0x4cc9ae -= _0x432330, _0x432330) {
        case 0xa:
            this['view'][_0x4cc9ae + 0x9] = _0x203302 >>> 0x7 & 0x1;
        case 0x9:
            this['view'][_0x4cc9ae + 0x8] = 0x9 !== _0x432330 ? 0x80 | _0x203302 : 0x7f & _0x203302;
        case 0x8:
            this['view'][_0x4cc9ae + 0x7] = 0x8 !== _0x432330 ? _0x13ebc1 >>> 0x15 | 0x80 : _0x13ebc1 >>> 0x15 & 0x7f;
        case 0x7:
            this['view'][_0x4cc9ae + 0x6] = 0x7 !== _0x432330 ? _0x13ebc1 >>> 0xe | 0x80 : _0x13ebc1 >>> 0xe & 0x7f;
        case 0x6:
            this['view'][_0x4cc9ae + 0x5] = 0x6 !== _0x432330 ? _0x13ebc1 >>> 0x7 | 0x80 : _0x13ebc1 >>> 0x7 & 0x7f;
        case 0x5:
            this['view'][_0x4cc9ae + 0x4] = 0x5 !== _0x432330 ? 0x80 | _0x13ebc1 : 0x7f & _0x13ebc1;
        case 0x4:
            this['view'][_0x4cc9ae + 0x3] = 0x4 !== _0x432330 ? _0x12c350 >>> 0x15 | 0x80 : _0x12c350 >>> 0x15 & 0x7f;
        case 0x3:
            this['view'][_0x4cc9ae + 0x2] = 0x3 !== _0x432330 ? _0x12c350 >>> 0xe | 0x80 : _0x12c350 >>> 0xe & 0x7f;
        case 0x2:
            this['view'][_0x4cc9ae + 0x1] = 0x2 !== _0x432330 ? _0x12c350 >>> 0x7 | 0x80 : _0x12c350 >>> 0x7 & 0x7f;
        case 0x1:
            this['view'][_0x4cc9ae] = 0x1 !== _0x432330 ? 0x80 | _0x12c350 : 0x7f & _0x12c350;
        }
        return _0x2ff911 ? (this['offset'] += _0x432330, this) : _0x432330;
    }, _0x170abd['writeVarin' + 't64ZigZag'] = function (_0x527a12, _0x34e9b1) {
        return this['writeVarin' + 't64'](_0x1cd814['zigZagEnco' + 'de64'](_0x527a12), _0x34e9b1);
    }, _0x170abd['readVarint' + '64'] = function (_0x173d91) {
        var _0x276aa4 = void 0x0 === _0x173d91;
        if (_0x276aa4 && (_0x173d91 = this['offset']), !this['noAssert']) {
            if ('number' != typeof _0x173d91 || _0x173d91 % 0x1 != 0x0)
                throw TypeError('Illegal\x20of' + 'fset:\x20' + _0x173d91 + ('\x20(not\x20an\x20i' + 'nteger)'));
            if ((_0x173d91 >>>= 0x0) < 0x0 || _0x173d91 + 0x1 > this['buffer']['byteLength'])
                throw RangeError('Illegal\x20of' + 'fset:\x200\x20<=' + '\x20' + _0x173d91 + '\x20(+1)\x20<=\x20' + this['buffer']['byteLength']);
        }
        var _0x477182 = _0x173d91, _0x43b989 = 0x0, _0x2cd8f2 = 0x0, _0xf9789c = 0x0, _0x959b33 = 0x0;
        if (_0x43b989 = 0x7f & (_0x959b33 = this['view'][_0x173d91++]), 0x80 & _0x959b33 && (_0x43b989 |= (0x7f & (_0x959b33 = this['view'][_0x173d91++])) << 0x7, (0x80 & _0x959b33 || this['noAssert'] && void 0x0 === _0x959b33) && (_0x43b989 |= (0x7f & (_0x959b33 = this['view'][_0x173d91++])) << 0xe, (0x80 & _0x959b33 || this['noAssert'] && void 0x0 === _0x959b33) && (_0x43b989 |= (0x7f & (_0x959b33 = this['view'][_0x173d91++])) << 0x15, (0x80 & _0x959b33 || this['noAssert'] && void 0x0 === _0x959b33) && (_0x2cd8f2 = 0x7f & (_0x959b33 = this['view'][_0x173d91++]), (0x80 & _0x959b33 || this['noAssert'] && void 0x0 === _0x959b33) && (_0x2cd8f2 |= (0x7f & (_0x959b33 = this['view'][_0x173d91++])) << 0x7, (0x80 & _0x959b33 || this['noAssert'] && void 0x0 === _0x959b33) && (_0x2cd8f2 |= (0x7f & (_0x959b33 = this['view'][_0x173d91++])) << 0xe, (0x80 & _0x959b33 || this['noAssert'] && void 0x0 === _0x959b33) && (_0x2cd8f2 |= (0x7f & (_0x959b33 = this['view'][_0x173d91++])) << 0x15, (0x80 & _0x959b33 || this['noAssert'] && void 0x0 === _0x959b33) && (_0xf9789c = 0x7f & (_0x959b33 = this['view'][_0x173d91++]), (0x80 & _0x959b33 || this['noAssert'] && void 0x0 === _0x959b33) && (_0xf9789c |= (0x7f & (_0x959b33 = this['view'][_0x173d91++])) << 0x7, 0x80 & _0x959b33 || this['noAssert'] && void 0x0 === _0x959b33))))))))))
            throw Error('Buffer\x20ove' + 'rrun');
        var _0x1a354d = _0x486183['fromBits'](_0x43b989 | _0x2cd8f2 << 0x1c, _0x2cd8f2 >>> 0x4 | _0xf9789c << 0x18, !0x1);
        return _0x276aa4 ? (this['offset'] = _0x173d91, _0x1a354d) : {
            'value': _0x1a354d,
            'length': _0x173d91 - _0x477182
        };
    }, _0x170abd['readVarint' + '64ZigZag'] = function (_0x22c426) {
        var _0x519310 = this['readVarint' + '64'](_0x22c426);
        return _0x519310 && _0x519310['value'] instanceof _0x486183 ? _0x519310['value'] = _0x1cd814['zigZagDeco' + 'de64'](_0x519310['value']) : _0x519310 = _0x1cd814['zigZagDeco' + 'de64'](_0x519310), _0x519310;
    }), _0x170abd['writeCStri' + 'ng'] = function (_0x342a9a, _0x1f9435) {
        var _0x25befe = void 0x0 === _0x1f9435;
        _0x25befe && (_0x1f9435 = this['offset']);
        var _0x2ad5d4, _0x34c474 = _0x342a9a['length'];
        if (!this['noAssert']) {
            if ('string' != typeof _0x342a9a)
                throw TypeError('Illegal\x20st' + 'r:\x20Not\x20a\x20s' + 'tring');
            for (_0x2ad5d4 = 0x0; _0x2ad5d4 < _0x34c474; ++_0x2ad5d4)
                if (0x0 === _0x342a9a['charCodeAt'](_0x2ad5d4))
                    throw RangeError('Illegal\x20st' + 'r:\x20Contain' + 's\x20NULL-cha' + 'racters');
            if ('number' != typeof _0x1f9435 || _0x1f9435 % 0x1 != 0x0)
                throw TypeError('Illegal\x20of' + 'fset:\x20' + _0x1f9435 + ('\x20(not\x20an\x20i' + 'nteger)'));
            if ((_0x1f9435 >>>= 0x0) < 0x0 || _0x1f9435 + 0x0 > this['buffer']['byteLength'])
                throw RangeError('Illegal\x20of' + 'fset:\x200\x20<=' + '\x20' + _0x1f9435 + '\x20(+0)\x20<=\x20' + this['buffer']['byteLength']);
        }
        _0x34c474 = _0x466612['calculateU' + 'TF16asUTF8'](_0x538793(_0x342a9a))[0x1], _0x1f9435 += _0x34c474 + 0x1;
        var _0x2b3278 = this['buffer']['byteLength'];
        return _0x1f9435 > _0x2b3278 && this['resize']((_0x2b3278 *= 0x2) > _0x1f9435 ? _0x2b3278 : _0x1f9435), _0x1f9435 -= _0x34c474 + 0x1, _0x466612['encodeUTF1' + '6toUTF8'](_0x538793(_0x342a9a), function (_0x43a1b8) {
            this['view'][_0x1f9435++] = _0x43a1b8;
        }['bind'](this)), this['view'][_0x1f9435++] = 0x0, _0x25befe ? (this['offset'] = _0x1f9435, this) : _0x34c474;
    }, _0x170abd['readCStrin' + 'g'] = function (_0x4f35c2) {
        var _0x20bc61 = void 0x0 === _0x4f35c2;
        if (_0x20bc61 && (_0x4f35c2 = this['offset']), !this['noAssert']) {
            if ('number' != typeof _0x4f35c2 || _0x4f35c2 % 0x1 != 0x0)
                throw TypeError('Illegal\x20of' + 'fset:\x20' + _0x4f35c2 + ('\x20(not\x20an\x20i' + 'nteger)'));
            if ((_0x4f35c2 >>>= 0x0) < 0x0 || _0x4f35c2 + 0x1 > this['buffer']['byteLength'])
                throw RangeError('Illegal\x20of' + 'fset:\x200\x20<=' + '\x20' + _0x4f35c2 + '\x20(+1)\x20<=\x20' + this['buffer']['byteLength']);
        }
        var _0xc74b7e, _0x1c618f = _0x4f35c2, _0x2d94ed = -0x1;
        return _0x466612['decodeUTF8' + 'toUTF16'](function () {
            if (0x0 === _0x2d94ed)
                return null;
            if (_0x4f35c2 >= this['limit'])
                throw RangeError('Illegal\x20ra' + 'nge:\x20Trunc' + 'ated\x20data,' + '\x20' + _0x4f35c2 + '\x20<\x20' + this['limit']);
            return 0x0 === (_0x2d94ed = this['view'][_0x4f35c2++]) ? null : _0x2d94ed;
        }['bind'](this), _0xc74b7e = _0x582764(), !0x0), _0x20bc61 ? (this['offset'] = _0x4f35c2, _0xc74b7e()) : {
            'string': _0xc74b7e(),
            'length': _0x4f35c2 - _0x1c618f
        };
    }, _0x170abd['writeIStri' + 'ng'] = function (_0x4119a3, _0x2f37f2) {
        var _0x1bb8ed = void 0x0 === _0x2f37f2;
        if (_0x1bb8ed && (_0x2f37f2 = this['offset']), !this['noAssert']) {
            if ('string' != typeof _0x4119a3)
                throw TypeError('Illegal\x20st' + 'r:\x20Not\x20a\x20s' + 'tring');
            if ('number' != typeof _0x2f37f2 || _0x2f37f2 % 0x1 != 0x0)
                throw TypeError('Illegal\x20of' + 'fset:\x20' + _0x2f37f2 + ('\x20(not\x20an\x20i' + 'nteger)'));
            if ((_0x2f37f2 >>>= 0x0) < 0x0 || _0x2f37f2 + 0x0 > this['buffer']['byteLength'])
                throw RangeError('Illegal\x20of' + 'fset:\x200\x20<=' + '\x20' + _0x2f37f2 + '\x20(+0)\x20<=\x20' + this['buffer']['byteLength']);
        }
        var _0x1fa3f7, _0x4a1143 = _0x2f37f2;
        _0x1fa3f7 = _0x466612['calculateU' + 'TF16asUTF8'](_0x538793(_0x4119a3), this['noAssert'])[0x1], _0x2f37f2 += 0x4 + _0x1fa3f7;
        var _0xc0efcd = this['buffer']['byteLength'];
        if (_0x2f37f2 > _0xc0efcd && this['resize']((_0xc0efcd *= 0x2) > _0x2f37f2 ? _0xc0efcd : _0x2f37f2), _0x2f37f2 -= 0x4 + _0x1fa3f7, this['littleEndi' + 'an'] ? (this['view'][_0x2f37f2 + 0x3] = _0x1fa3f7 >>> 0x18 & 0xff, this['view'][_0x2f37f2 + 0x2] = _0x1fa3f7 >>> 0x10 & 0xff, this['view'][_0x2f37f2 + 0x1] = _0x1fa3f7 >>> 0x8 & 0xff, this['view'][_0x2f37f2] = 0xff & _0x1fa3f7) : (this['view'][_0x2f37f2] = _0x1fa3f7 >>> 0x18 & 0xff, this['view'][_0x2f37f2 + 0x1] = _0x1fa3f7 >>> 0x10 & 0xff, this['view'][_0x2f37f2 + 0x2] = _0x1fa3f7 >>> 0x8 & 0xff, this['view'][_0x2f37f2 + 0x3] = 0xff & _0x1fa3f7), _0x2f37f2 += 0x4, _0x466612['encodeUTF1' + '6toUTF8'](_0x538793(_0x4119a3), function (_0x19a042) {
                this['view'][_0x2f37f2++] = _0x19a042;
            }['bind'](this)), _0x2f37f2 !== _0x4a1143 + 0x4 + _0x1fa3f7)
            throw RangeError('Illegal\x20ra' + 'nge:\x20Trunc' + 'ated\x20data,' + '\x20' + _0x2f37f2 + '\x20==\x20' + (_0x2f37f2 + 0x4 + _0x1fa3f7));
        return _0x1bb8ed ? (this['offset'] = _0x2f37f2, this) : _0x2f37f2 - _0x4a1143;
    }, _0x170abd['readIStrin' + 'g'] = function (_0x22bf29) {
        var _0x163f4b = void 0x0 === _0x22bf29;
        if (_0x163f4b && (_0x22bf29 = this['offset']), !this['noAssert']) {
            if ('number' != typeof _0x22bf29 || _0x22bf29 % 0x1 != 0x0)
                throw TypeError('Illegal\x20of' + 'fset:\x20' + _0x22bf29 + ('\x20(not\x20an\x20i' + 'nteger)'));
            if ((_0x22bf29 >>>= 0x0) < 0x0 || _0x22bf29 + 0x4 > this['buffer']['byteLength'])
                throw RangeError('Illegal\x20of' + 'fset:\x200\x20<=' + '\x20' + _0x22bf29 + '\x20(+4)\x20<=\x20' + this['buffer']['byteLength']);
        }
        var _0x41fc51 = _0x22bf29, _0x40de08 = this['readUint32'](_0x22bf29), _0x5cf07b = this['readUTF8St' + 'ring'](_0x40de08, _0x1cd814['METRICS_BY' + 'TES'], _0x22bf29 += 0x4);
        return _0x22bf29 += _0x5cf07b['length'], _0x163f4b ? (this['offset'] = _0x22bf29, _0x5cf07b['string']) : {
            'string': _0x5cf07b['string'],
            'length': _0x22bf29 - _0x41fc51
        };
    }, _0x1cd814['METRICS_CH' + 'ARS'] = 'c', _0x1cd814['METRICS_BY' + 'TES'] = 'b', _0x170abd['writeUTF8S' + 'tring'] = function (_0x102418, _0x48a481) {
        var _0xcaf88, _0xf6c9fb = void 0x0 === _0x48a481;
        if (_0xf6c9fb && (_0x48a481 = this['offset']), !this['noAssert']) {
            if ('number' != typeof _0x48a481 || _0x48a481 % 0x1 != 0x0)
                throw TypeError('Illegal\x20of' + 'fset:\x20' + _0x48a481 + ('\x20(not\x20an\x20i' + 'nteger)'));
            if ((_0x48a481 >>>= 0x0) < 0x0 || _0x48a481 + 0x0 > this['buffer']['byteLength'])
                throw RangeError('Illegal\x20of' + 'fset:\x200\x20<=' + '\x20' + _0x48a481 + '\x20(+0)\x20<=\x20' + this['buffer']['byteLength']);
        }
        var _0x3effb5 = _0x48a481;
        _0xcaf88 = _0x466612['calculateU' + 'TF16asUTF8'](_0x538793(_0x102418))[0x1], _0x48a481 += _0xcaf88;
        var _0x5e5a1a = this['buffer']['byteLength'];
        return _0x48a481 > _0x5e5a1a && this['resize']((_0x5e5a1a *= 0x2) > _0x48a481 ? _0x5e5a1a : _0x48a481), _0x48a481 -= _0xcaf88, _0x466612['encodeUTF1' + '6toUTF8'](_0x538793(_0x102418), function (_0x46b3d0) {
            this['view'][_0x48a481++] = _0x46b3d0;
        }['bind'](this)), _0xf6c9fb ? (this['offset'] = _0x48a481, this) : _0x48a481 - _0x3effb5;
    }, _0x170abd['writeStrin' + 'g'] = _0x170abd['writeUTF8S' + 'tring'], _0x1cd814['calculateU' + 'TF8Chars'] = function (_0x31d4c4) {
        return _0x466612['calculateU' + 'TF16asUTF8'](_0x538793(_0x31d4c4))[0x0];
    }, _0x1cd814['calculateU' + 'TF8Bytes'] = function (_0x5137e8) {
        return _0x466612['calculateU' + 'TF16asUTF8'](_0x538793(_0x5137e8))[0x1];
    }, _0x1cd814['calculateS' + 'tring'] = _0x1cd814['calculateU' + 'TF8Bytes'], _0x170abd['readUTF8St' + 'ring'] = function (_0x4c7f98, _0x21393a, _0x43e60d) {
        'number' == typeof _0x21393a && (_0x43e60d = _0x21393a, _0x21393a = void 0x0);
        var _0x47ff69 = void 0x0 === _0x43e60d;
        if (_0x47ff69 && (_0x43e60d = this['offset']), void 0x0 === _0x21393a && (_0x21393a = _0x1cd814['METRICS_CH' + 'ARS']), !this['noAssert']) {
            if ('number' != typeof _0x4c7f98 || _0x4c7f98 % 0x1 != 0x0)
                throw TypeError('Illegal\x20le' + 'ngth:\x20' + _0x4c7f98 + ('\x20(not\x20an\x20i' + 'nteger)'));
            if (_0x4c7f98 |= 0x0, 'number' != typeof _0x43e60d || _0x43e60d % 0x1 != 0x0)
                throw TypeError('Illegal\x20of' + 'fset:\x20' + _0x43e60d + ('\x20(not\x20an\x20i' + 'nteger)'));
            if ((_0x43e60d >>>= 0x0) < 0x0 || _0x43e60d + 0x0 > this['buffer']['byteLength'])
                throw RangeError('Illegal\x20of' + 'fset:\x200\x20<=' + '\x20' + _0x43e60d + '\x20(+0)\x20<=\x20' + this['buffer']['byteLength']);
        }
        var _0x4a94a9, _0x4f728f = 0x0, _0x384957 = _0x43e60d;
        if (_0x21393a === _0x1cd814['METRICS_CH' + 'ARS']) {
            if (_0x4a94a9 = _0x582764(), _0x466612['decodeUTF8'](function () {
                    return _0x4f728f < _0x4c7f98 && _0x43e60d < this['limit'] ? this['view'][_0x43e60d++] : null;
                }['bind'](this), function (_0x4f304) {
                    ++_0x4f728f, _0x466612['UTF8toUTF1' + '6'](_0x4f304, _0x4a94a9);
                }), _0x4f728f !== _0x4c7f98)
                throw RangeError('Illegal\x20ra' + 'nge:\x20Trunc' + 'ated\x20data,' + '\x20' + _0x4f728f + '\x20==\x20' + _0x4c7f98);
            return _0x47ff69 ? (this['offset'] = _0x43e60d, _0x4a94a9()) : {
                'string': _0x4a94a9(),
                'length': _0x43e60d - _0x384957
            };
        }
        if (_0x21393a === _0x1cd814['METRICS_BY' + 'TES']) {
            if (!this['noAssert']) {
                if ('number' != typeof _0x43e60d || _0x43e60d % 0x1 != 0x0)
                    throw TypeError('Illegal\x20of' + 'fset:\x20' + _0x43e60d + ('\x20(not\x20an\x20i' + 'nteger)'));
                if ((_0x43e60d >>>= 0x0) < 0x0 || _0x43e60d + _0x4c7f98 > this['buffer']['byteLength'])
                    throw RangeError('Illegal\x20of' + 'fset:\x200\x20<=' + '\x20' + _0x43e60d + '\x20(+' + _0x4c7f98 + ')\x20<=\x20' + this['buffer']['byteLength']);
            }
            var _0x572da8 = _0x43e60d + _0x4c7f98;
            if (_0x466612['decodeUTF8' + 'toUTF16'](function () {
                    return _0x43e60d < _0x572da8 ? this['view'][_0x43e60d++] : null;
                }['bind'](this), _0x4a94a9 = _0x582764(), this['noAssert']), _0x43e60d !== _0x572da8)
                throw RangeError('Illegal\x20ra' + 'nge:\x20Trunc' + 'ated\x20data,' + '\x20' + _0x43e60d + '\x20==\x20' + _0x572da8);
            return _0x47ff69 ? (this['offset'] = _0x43e60d, _0x4a94a9()) : {
                'string': _0x4a94a9(),
                'length': _0x43e60d - _0x384957
            };
        }
        throw TypeError('Unsupporte' + 'd\x20metrics:' + '\x20' + _0x21393a);
    }, _0x170abd['readString'] = _0x170abd['readUTF8St' + 'ring'], _0x170abd['writeVStri' + 'ng'] = function (_0x14338e, _0x47aedf) {
        var _0x44ac5f = void 0x0 === _0x47aedf;
        if (_0x44ac5f && (_0x47aedf = this['offset']), !this['noAssert']) {
            if ('string' != typeof _0x14338e)
                throw TypeError('Illegal\x20st' + 'r:\x20Not\x20a\x20s' + 'tring');
            if ('number' != typeof _0x47aedf || _0x47aedf % 0x1 != 0x0)
                throw TypeError('Illegal\x20of' + 'fset:\x20' + _0x47aedf + ('\x20(not\x20an\x20i' + 'nteger)'));
            if ((_0x47aedf >>>= 0x0) < 0x0 || _0x47aedf + 0x0 > this['buffer']['byteLength'])
                throw RangeError('Illegal\x20of' + 'fset:\x200\x20<=' + '\x20' + _0x47aedf + '\x20(+0)\x20<=\x20' + this['buffer']['byteLength']);
        }
        var _0x19aae2, _0x7eda7d, _0x2ec06b = _0x47aedf;
        _0x19aae2 = _0x466612['calculateU' + 'TF16asUTF8'](_0x538793(_0x14338e), this['noAssert'])[0x1], _0x7eda7d = _0x1cd814['calculateV' + 'arint32'](_0x19aae2), _0x47aedf += _0x7eda7d + _0x19aae2;
        var _0x4290b3 = this['buffer']['byteLength'];
        if (_0x47aedf > _0x4290b3 && this['resize']((_0x4290b3 *= 0x2) > _0x47aedf ? _0x4290b3 : _0x47aedf), _0x47aedf -= _0x7eda7d + _0x19aae2, _0x47aedf += this['writeVarin' + 't32'](_0x19aae2, _0x47aedf), _0x466612['encodeUTF1' + '6toUTF8'](_0x538793(_0x14338e), function (_0x1829c1) {
                this['view'][_0x47aedf++] = _0x1829c1;
            }['bind'](this)), _0x47aedf !== _0x2ec06b + _0x19aae2 + _0x7eda7d)
            throw RangeError('Illegal\x20ra' + 'nge:\x20Trunc' + 'ated\x20data,' + '\x20' + _0x47aedf + '\x20==\x20' + (_0x47aedf + _0x19aae2 + _0x7eda7d));
        return _0x44ac5f ? (this['offset'] = _0x47aedf, this) : _0x47aedf - _0x2ec06b;
    }, _0x170abd['readVStrin' + 'g'] = function (_0x67f1a2) {
        var _0x3d2bd9 = void 0x0 === _0x67f1a2;
        if (_0x3d2bd9 && (_0x67f1a2 = this['offset']), !this['noAssert']) {
            if ('number' != typeof _0x67f1a2 || _0x67f1a2 % 0x1 != 0x0)
                throw TypeError('Illegal\x20of' + 'fset:\x20' + _0x67f1a2 + ('\x20(not\x20an\x20i' + 'nteger)'));
            if ((_0x67f1a2 >>>= 0x0) < 0x0 || _0x67f1a2 + 0x1 > this['buffer']['byteLength'])
                throw RangeError('Illegal\x20of' + 'fset:\x200\x20<=' + '\x20' + _0x67f1a2 + '\x20(+1)\x20<=\x20' + this['buffer']['byteLength']);
        }
        var _0x6a09ad = _0x67f1a2, _0x3a7f32 = this['readVarint' + '32'](_0x67f1a2), _0x436c7a = this['readUTF8St' + 'ring'](_0x3a7f32['value'], _0x1cd814['METRICS_BY' + 'TES'], _0x67f1a2 += _0x3a7f32['length']);
        return _0x67f1a2 += _0x436c7a['length'], _0x3d2bd9 ? (this['offset'] = _0x67f1a2, _0x436c7a['string']) : {
            'string': _0x436c7a['string'],
            'length': _0x67f1a2 - _0x6a09ad
        };
    }, _0x170abd['append'] = function (_0x1bef8a, _0x39a31b, _0x3ed5d) {
        'number' != typeof _0x39a31b && 'string' == typeof _0x39a31b || (_0x3ed5d = _0x39a31b, _0x39a31b = void 0x0);
        var _0x65c3c2 = void 0x0 === _0x3ed5d;
        if (_0x65c3c2 && (_0x3ed5d = this['offset']), !this['noAssert']) {
            if ('number' != typeof _0x3ed5d || _0x3ed5d % 0x1 != 0x0)
                throw TypeError('Illegal\x20of' + 'fset:\x20' + _0x3ed5d + ('\x20(not\x20an\x20i' + 'nteger)'));
            if ((_0x3ed5d >>>= 0x0) < 0x0 || _0x3ed5d + 0x0 > this['buffer']['byteLength'])
                throw RangeError('Illegal\x20of' + 'fset:\x200\x20<=' + '\x20' + _0x3ed5d + '\x20(+0)\x20<=\x20' + this['buffer']['byteLength']);
        }
        _0x1bef8a instanceof _0x1cd814 || (_0x1bef8a = _0x1cd814['wrap'](_0x1bef8a, _0x39a31b));
        var _0x46368a = _0x1bef8a['limit'] - _0x1bef8a['offset'];
        if (_0x46368a <= 0x0)
            return this;
        _0x3ed5d += _0x46368a;
        var _0x5afeef = this['buffer']['byteLength'];
        return _0x3ed5d > _0x5afeef && this['resize']((_0x5afeef *= 0x2) > _0x3ed5d ? _0x5afeef : _0x3ed5d), _0x3ed5d -= _0x46368a, this['view']['set'](_0x1bef8a['view']['subarray'](_0x1bef8a['offset'], _0x1bef8a['limit']), _0x3ed5d), _0x1bef8a['offset'] += _0x46368a, _0x65c3c2 && (this['offset'] += _0x46368a), this;
    }, _0x170abd['appendTo'] = function (_0x10fe0d, _0x2352b8) {
        return _0x10fe0d['append'](this, _0x2352b8), this;
    }, _0x170abd['assert'] = function (_0x3d9455) {
        return this['noAssert'] = !_0x3d9455, this;
    }, _0x170abd['capacity'] = function () {
        return this['buffer']['byteLength'];
    }, _0x170abd['clear'] = function () {
        return this['offset'] = 0x0, this['limit'] = this['buffer']['byteLength'], this['markedOffs' + 'et'] = -0x1, this;
    }, _0x170abd['clone'] = function (_0x424c33) {
        var _0x3983f7 = new _0x1cd814(0x0, this['littleEndi' + 'an'], this['noAssert']);
        return _0x424c33 ? (_0x3983f7['buffer'] = new ArrayBuffer(this['buffer']['byteLength']), _0x3983f7['view'] = new Uint8Array(_0x3983f7['buffer'])) : (_0x3983f7['buffer'] = this['buffer'], _0x3983f7['view'] = this['view']), _0x3983f7['offset'] = this['offset'], _0x3983f7['markedOffs' + 'et'] = this['markedOffs' + 'et'], _0x3983f7['limit'] = this['limit'], _0x3983f7;
    }, _0x170abd['compact'] = function (_0x58f1bd, _0x14d622) {
        if (void 0x0 === _0x58f1bd && (_0x58f1bd = this['offset']), void 0x0 === _0x14d622 && (_0x14d622 = this['limit']), !this['noAssert']) {
            if ('number' != typeof _0x58f1bd || _0x58f1bd % 0x1 != 0x0)
                throw TypeError('Illegal\x20be' + 'gin:\x20Not\x20a' + 'n\x20integer');
            if (_0x58f1bd >>>= 0x0, 'number' != typeof _0x14d622 || _0x14d622 % 0x1 != 0x0)
                throw TypeError('Illegal\x20en' + 'd:\x20Not\x20an\x20' + 'integer');
            if (_0x14d622 >>>= 0x0, _0x58f1bd < 0x0 || _0x58f1bd > _0x14d622 || _0x14d622 > this['buffer']['byteLength'])
                throw RangeError('Illegal\x20ra' + 'nge:\x200\x20<=\x20' + _0x58f1bd + '\x20<=\x20' + _0x14d622 + '\x20<=\x20' + this['buffer']['byteLength']);
        }
        if (0x0 === _0x58f1bd && _0x14d622 === this['buffer']['byteLength'])
            return this;
        var _0x46c611 = _0x14d622 - _0x58f1bd;
        if (0x0 === _0x46c611)
            return this['buffer'] = _0x47aef8, this['view'] = null, this['markedOffs' + 'et'] >= 0x0 && (this['markedOffs' + 'et'] -= _0x58f1bd), this['offset'] = 0x0, this['limit'] = 0x0, this;
        var _0x523fe9 = new ArrayBuffer(_0x46c611), _0x3e1ae7 = new Uint8Array(_0x523fe9);
        return _0x3e1ae7['set'](this['view']['subarray'](_0x58f1bd, _0x14d622)), this['buffer'] = _0x523fe9, this['view'] = _0x3e1ae7, this['markedOffs' + 'et'] >= 0x0 && (this['markedOffs' + 'et'] -= _0x58f1bd), this['offset'] = 0x0, this['limit'] = _0x46c611, this;
    }, _0x170abd['copy'] = function (_0x372cd5, _0x9c0ae) {
        if (void 0x0 === _0x372cd5 && (_0x372cd5 = this['offset']), void 0x0 === _0x9c0ae && (_0x9c0ae = this['limit']), !this['noAssert']) {
            if ('number' != typeof _0x372cd5 || _0x372cd5 % 0x1 != 0x0)
                throw TypeError('Illegal\x20be' + 'gin:\x20Not\x20a' + 'n\x20integer');
            if (_0x372cd5 >>>= 0x0, 'number' != typeof _0x9c0ae || _0x9c0ae % 0x1 != 0x0)
                throw TypeError('Illegal\x20en' + 'd:\x20Not\x20an\x20' + 'integer');
            if (_0x9c0ae >>>= 0x0, _0x372cd5 < 0x0 || _0x372cd5 > _0x9c0ae || _0x9c0ae > this['buffer']['byteLength'])
                throw RangeError('Illegal\x20ra' + 'nge:\x200\x20<=\x20' + _0x372cd5 + '\x20<=\x20' + _0x9c0ae + '\x20<=\x20' + this['buffer']['byteLength']);
        }
        if (_0x372cd5 === _0x9c0ae)
            return new _0x1cd814(0x0, this['littleEndi' + 'an'], this['noAssert']);
        var _0x11aee0 = _0x9c0ae - _0x372cd5, _0x1bcbc8 = new _0x1cd814(_0x11aee0, this['littleEndi' + 'an'], this['noAssert']);
        return _0x1bcbc8['offset'] = 0x0, _0x1bcbc8['limit'] = _0x11aee0, _0x1bcbc8['markedOffs' + 'et'] >= 0x0 && (_0x1bcbc8['markedOffs' + 'et'] -= _0x372cd5), this['copyTo'](_0x1bcbc8, 0x0, _0x372cd5, _0x9c0ae), _0x1bcbc8;
    }, _0x170abd['copyTo'] = function (_0x5abf1d, _0x5ff121, _0x2ea6aa, _0x37c799) {
        var _0x55026f, _0x5c5a76;
        if (!this['noAssert'] && !_0x1cd814['isByteBuff' + 'er'](_0x5abf1d))
            throw TypeError('Illegal\x20ta' + 'rget:\x20Not\x20' + 'a\x20ByteBuff' + 'er');
        if (_0x5ff121 = (_0x5c5a76 = void 0x0 === _0x5ff121) ? _0x5abf1d['offset'] : 0x0 | _0x5ff121, _0x2ea6aa = (_0x55026f = void 0x0 === _0x2ea6aa) ? this['offset'] : 0x0 | _0x2ea6aa, _0x37c799 = void 0x0 === _0x37c799 ? this['limit'] : 0x0 | _0x37c799, _0x5ff121 < 0x0 || _0x5ff121 > _0x5abf1d['buffer']['byteLength'])
            throw RangeError('Illegal\x20ta' + 'rget\x20range' + ':\x200\x20<=\x20' + _0x5ff121 + '\x20<=\x20' + _0x5abf1d['buffer']['byteLength']);
        if (_0x2ea6aa < 0x0 || _0x37c799 > this['buffer']['byteLength'])
            throw RangeError('Illegal\x20so' + 'urce\x20range' + ':\x200\x20<=\x20' + _0x2ea6aa + '\x20<=\x20' + this['buffer']['byteLength']);
        var _0x109600 = _0x37c799 - _0x2ea6aa;
        return 0x0 === _0x109600 ? _0x5abf1d : (_0x5abf1d['ensureCapa' + 'city'](_0x5ff121 + _0x109600), _0x5abf1d['view']['set'](this['view']['subarray'](_0x2ea6aa, _0x37c799), _0x5ff121), _0x55026f && (this['offset'] += _0x109600), _0x5c5a76 && (_0x5abf1d['offset'] += _0x109600), this);
    }, _0x170abd['ensureCapa' + 'city'] = function (_0x468cb9) {
        var _0x2a9d4f = this['buffer']['byteLength'];
        return _0x2a9d4f < _0x468cb9 ? this['resize']((_0x2a9d4f *= 0x2) > _0x468cb9 ? _0x2a9d4f : _0x468cb9) : this;
    }, _0x170abd['fill'] = function (_0x2ab180, _0x553f5e, _0x128040) {
        var _0x126607 = void 0x0 === _0x553f5e;
        if (_0x126607 && (_0x553f5e = this['offset']), 'string' == typeof _0x2ab180 && _0x2ab180['length'] > 0x0 && (_0x2ab180 = _0x2ab180['charCodeAt'](0x0)), void 0x0 === _0x553f5e && (_0x553f5e = this['offset']), void 0x0 === _0x128040 && (_0x128040 = this['limit']), !this['noAssert']) {
            if ('number' != typeof _0x2ab180 || _0x2ab180 % 0x1 != 0x0)
                throw TypeError('Illegal\x20va' + 'lue:\x20' + _0x2ab180 + ('\x20(not\x20an\x20i' + 'nteger)'));
            if (_0x2ab180 |= 0x0, 'number' != typeof _0x553f5e || _0x553f5e % 0x1 != 0x0)
                throw TypeError('Illegal\x20be' + 'gin:\x20Not\x20a' + 'n\x20integer');
            if (_0x553f5e >>>= 0x0, 'number' != typeof _0x128040 || _0x128040 % 0x1 != 0x0)
                throw TypeError('Illegal\x20en' + 'd:\x20Not\x20an\x20' + 'integer');
            if (_0x128040 >>>= 0x0, _0x553f5e < 0x0 || _0x553f5e > _0x128040 || _0x128040 > this['buffer']['byteLength'])
                throw RangeError('Illegal\x20ra' + 'nge:\x200\x20<=\x20' + _0x553f5e + '\x20<=\x20' + _0x128040 + '\x20<=\x20' + this['buffer']['byteLength']);
        }
        if (_0x553f5e >= _0x128040)
            return this;
        for (; _0x553f5e < _0x128040;)
            this['view'][_0x553f5e++] = _0x2ab180;
        return _0x126607 && (this['offset'] = _0x553f5e), this;
    }, _0x170abd['flip'] = function () {
        return this['limit'] = this['offset'], this['offset'] = 0x0, this;
    }, _0x170abd['mark'] = function (_0x2021a5) {
        if (_0x2021a5 = void 0x0 === _0x2021a5 ? this['offset'] : _0x2021a5, !this['noAssert']) {
            if ('number' != typeof _0x2021a5 || _0x2021a5 % 0x1 != 0x0)
                throw TypeError('Illegal\x20of' + 'fset:\x20' + _0x2021a5 + ('\x20(not\x20an\x20i' + 'nteger)'));
            if ((_0x2021a5 >>>= 0x0) < 0x0 || _0x2021a5 + 0x0 > this['buffer']['byteLength'])
                throw RangeError('Illegal\x20of' + 'fset:\x200\x20<=' + '\x20' + _0x2021a5 + '\x20(+0)\x20<=\x20' + this['buffer']['byteLength']);
        }
        return this['markedOffs' + 'et'] = _0x2021a5, this;
    }, _0x170abd['order'] = function (_0x478414) {
        if (!this['noAssert'] && 'boolean' != typeof _0x478414)
            throw TypeError('Illegal\x20li' + 'ttleEndian' + ':\x20Not\x20a\x20bo' + 'olean');
        return this['littleEndi' + 'an'] = !!_0x478414, this;
    }, _0x170abd['LE'] = function (_0x176819) {
        return this['littleEndi' + 'an'] = void 0x0 === _0x176819 || !!_0x176819, this;
    }, _0x170abd['BE'] = function (_0xb93424) {
        return this['littleEndi' + 'an'] = void 0x0 !== _0xb93424 && !_0xb93424, this;
    }, _0x170abd['prepend'] = function (_0xf06414, _0x370fa8, _0x198ce6) {
        'number' != typeof _0x370fa8 && 'string' == typeof _0x370fa8 || (_0x198ce6 = _0x370fa8, _0x370fa8 = void 0x0);
        var _0x172b33 = void 0x0 === _0x198ce6;
        if (_0x172b33 && (_0x198ce6 = this['offset']), !this['noAssert']) {
            if ('number' != typeof _0x198ce6 || _0x198ce6 % 0x1 != 0x0)
                throw TypeError('Illegal\x20of' + 'fset:\x20' + _0x198ce6 + ('\x20(not\x20an\x20i' + 'nteger)'));
            if ((_0x198ce6 >>>= 0x0) < 0x0 || _0x198ce6 + 0x0 > this['buffer']['byteLength'])
                throw RangeError('Illegal\x20of' + 'fset:\x200\x20<=' + '\x20' + _0x198ce6 + '\x20(+0)\x20<=\x20' + this['buffer']['byteLength']);
        }
        _0xf06414 instanceof _0x1cd814 || (_0xf06414 = _0x1cd814['wrap'](_0xf06414, _0x370fa8));
        var _0x11f545 = _0xf06414['limit'] - _0xf06414['offset'];
        if (_0x11f545 <= 0x0)
            return this;
        var _0x20641e = _0x11f545 - _0x198ce6;
        if (_0x20641e > 0x0) {
            var _0x188462 = new ArrayBuffer(this['buffer']['byteLength'] + _0x20641e), _0xb0762a = new Uint8Array(_0x188462);
            _0xb0762a['set'](this['view']['subarray'](_0x198ce6, this['buffer']['byteLength']), _0x11f545), this['buffer'] = _0x188462, this['view'] = _0xb0762a, this['offset'] += _0x20641e, this['markedOffs' + 'et'] >= 0x0 && (this['markedOffs' + 'et'] += _0x20641e), this['limit'] += _0x20641e, _0x198ce6 += _0x20641e;
        } else
            new Uint8Array(this['buffer']);
        return this['view']['set'](_0xf06414['view']['subarray'](_0xf06414['offset'], _0xf06414['limit']), _0x198ce6 - _0x11f545), _0xf06414['offset'] = _0xf06414['limit'], _0x172b33 && (this['offset'] -= _0x11f545), this;
    }, _0x170abd['prependTo'] = function (_0x531713, _0x335e33) {
        return _0x531713['prepend'](this, _0x335e33), this;
    }, _0x170abd['printDebug'] = function (_0x33f9ed) {
        'function' != typeof _0x33f9ed && (_0x33f9ed = void 0x0), _0x33f9ed(this['toString']() + ('\x0a---------' + '----------' + '----------' + '----------' + '----------' + '----------' + '--------\x0a') + this['toDebug'](!0x0));
    }, _0x170abd['remaining'] = function () {
        return this['limit'] - this['offset'];
    }, _0x170abd['reset'] = function () {
        return this['markedOffs' + 'et'] >= 0x0 ? (this['offset'] = this['markedOffs' + 'et'], this['markedOffs' + 'et'] = -0x1) : this['offset'] = 0x0, this;
    }, _0x170abd['resize'] = function (_0xf61671) {
        if (!this['noAssert']) {
            if ('number' != typeof _0xf61671 || _0xf61671 % 0x1 != 0x0)
                throw TypeError('Illegal\x20ca' + 'pacity:\x20' + _0xf61671 + ('\x20(not\x20an\x20i' + 'nteger)'));
            if ((_0xf61671 |= 0x0) < 0x0)
                throw RangeError('Illegal\x20ca' + 'pacity:\x200\x20' + '<=\x20' + _0xf61671);
        }
        if (this['buffer']['byteLength'] < _0xf61671) {
            var _0x41fe4f = new ArrayBuffer(_0xf61671), _0x422afd = new Uint8Array(_0x41fe4f);
            _0x422afd['set'](this['view']), this['buffer'] = _0x41fe4f, this['view'] = _0x422afd;
        }
        return this;
    }, _0x170abd['reverse'] = function (_0x2060f5, _0xac6afd) {
        if (void 0x0 === _0x2060f5 && (_0x2060f5 = this['offset']), void 0x0 === _0xac6afd && (_0xac6afd = this['limit']), !this['noAssert']) {
            if ('number' != typeof _0x2060f5 || _0x2060f5 % 0x1 != 0x0)
                throw TypeError('Illegal\x20be' + 'gin:\x20Not\x20a' + 'n\x20integer');
            if (_0x2060f5 >>>= 0x0, 'number' != typeof _0xac6afd || _0xac6afd % 0x1 != 0x0)
                throw TypeError('Illegal\x20en' + 'd:\x20Not\x20an\x20' + 'integer');
            if (_0xac6afd >>>= 0x0, _0x2060f5 < 0x0 || _0x2060f5 > _0xac6afd || _0xac6afd > this['buffer']['byteLength'])
                throw RangeError('Illegal\x20ra' + 'nge:\x200\x20<=\x20' + _0x2060f5 + '\x20<=\x20' + _0xac6afd + '\x20<=\x20' + this['buffer']['byteLength']);
        }
        return _0x2060f5 === _0xac6afd ? this : (Array['prototype']['reverse']['call'](this['view']['subarray'](_0x2060f5, _0xac6afd)), this);
    }, _0x170abd['skip'] = function (_0x277dd1) {
        if (!this['noAssert']) {
            if ('number' != typeof _0x277dd1 || _0x277dd1 % 0x1 != 0x0)
                throw TypeError('Illegal\x20le' + 'ngth:\x20' + _0x277dd1 + ('\x20(not\x20an\x20i' + 'nteger)'));
            _0x277dd1 |= 0x0;
        }
        var _0x7de115 = this['offset'] + _0x277dd1;
        if (!this['noAssert'] && (_0x7de115 < 0x0 || _0x7de115 > this['buffer']['byteLength']))
            throw RangeError('Illegal\x20le' + 'ngth:\x200\x20<=' + '\x20' + this['offset'] + '\x20+\x20' + _0x277dd1 + '\x20<=\x20' + this['buffer']['byteLength']);
        return this['offset'] = _0x7de115, this;
    }, _0x170abd['slice'] = function (_0x152a5a, _0x1c609f) {
        if (void 0x0 === _0x152a5a && (_0x152a5a = this['offset']), void 0x0 === _0x1c609f && (_0x1c609f = this['limit']), !this['noAssert']) {
            if ('number' != typeof _0x152a5a || _0x152a5a % 0x1 != 0x0)
                throw TypeError('Illegal\x20be' + 'gin:\x20Not\x20a' + 'n\x20integer');
            if (_0x152a5a >>>= 0x0, 'number' != typeof _0x1c609f || _0x1c609f % 0x1 != 0x0)
                throw TypeError('Illegal\x20en' + 'd:\x20Not\x20an\x20' + 'integer');
            if (_0x1c609f >>>= 0x0, _0x152a5a < 0x0 || _0x152a5a > _0x1c609f || _0x1c609f > this['buffer']['byteLength'])
                throw RangeError('Illegal\x20ra' + 'nge:\x200\x20<=\x20' + _0x152a5a + '\x20<=\x20' + _0x1c609f + '\x20<=\x20' + this['buffer']['byteLength']);
        }
        var _0xc0dc5a = this['clone']();
        return _0xc0dc5a['offset'] = _0x152a5a, _0xc0dc5a['limit'] = _0x1c609f, _0xc0dc5a;
    }, _0x170abd['toBuffer'] = function (_0x388380) {
        var _0x160aa5 = this['offset'], _0x3b16d5 = this['limit'];
        if (!this['noAssert']) {
            if ('number' != typeof _0x160aa5 || _0x160aa5 % 0x1 != 0x0)
                throw TypeError('Illegal\x20of' + 'fset:\x20Not\x20' + 'an\x20integer');
            if (_0x160aa5 >>>= 0x0, 'number' != typeof _0x3b16d5 || _0x3b16d5 % 0x1 != 0x0)
                throw TypeError('Illegal\x20li' + 'mit:\x20Not\x20a' + 'n\x20integer');
            if (_0x3b16d5 >>>= 0x0, _0x160aa5 < 0x0 || _0x160aa5 > _0x3b16d5 || _0x3b16d5 > this['buffer']['byteLength'])
                throw RangeError('Illegal\x20ra' + 'nge:\x200\x20<=\x20' + _0x160aa5 + '\x20<=\x20' + _0x3b16d5 + '\x20<=\x20' + this['buffer']['byteLength']);
        }
        if (!_0x388380 && 0x0 === _0x160aa5 && _0x3b16d5 === this['buffer']['byteLength'])
            return this['buffer'];
        if (_0x160aa5 === _0x3b16d5)
            return _0x47aef8;
        var _0x3d44f5 = new ArrayBuffer(_0x3b16d5 - _0x160aa5);
        return new Uint8Array(_0x3d44f5)['set'](new Uint8Array(this['buffer'])['subarray'](_0x160aa5, _0x3b16d5), 0x0), _0x3d44f5;
    }, _0x170abd['toArrayBuf' + 'fer'] = _0x170abd['toBuffer'], _0x170abd['toString'] = function (_0xf6656d, _0x5d5800, _0xd60603) {
        if (void 0x0 === _0xf6656d)
            return 'ByteBuffer' + 'AB(offset=' + this['offset'] + (',markedOff' + 'set=') + this['markedOffs' + 'et'] + ',limit=' + this['limit'] + ',capacity=' + this['capacity']() + ')';
        switch ('number' == typeof _0xf6656d && (_0xd60603 = _0x5d5800 = _0xf6656d = 'utf8'), _0xf6656d) {
        case 'utf8':
            return this['toUTF8'](_0x5d5800, _0xd60603);
        case 'base64':
            return this['toBase64'](_0x5d5800, _0xd60603);
        case 'hex':
            return this['toHex'](_0x5d5800, _0xd60603);
        case 'binary':
            return this['toBinary'](_0x5d5800, _0xd60603);
        case 'debug':
            return this['toDebug']();
        case 'columns':
            return this['toColumns']();
        default:
            throw Error('Unsupporte' + 'd\x20encoding' + ':\x20' + _0xf6656d);
        }
    };
    var _0x4b687d = function () {
        for (var _0x1bfc56 = {}, _0x42859d = [
                    0x41,
                    0x42,
                    0x43,
                    0x44,
                    0x45,
                    0x46,
                    0x47,
                    0x48,
                    0x49,
                    0x4a,
                    0x4b,
                    0x4c,
                    0x4d,
                    0x4e,
                    0x4f,
                    0x50,
                    0x51,
                    0x52,
                    0x53,
                    0x54,
                    0x55,
                    0x56,
                    0x57,
                    0x58,
                    0x59,
                    0x5a,
                    0x61,
                    0x62,
                    0x63,
                    0x64,
                    0x65,
                    0x66,
                    0x67,
                    0x68,
                    0x69,
                    0x6a,
                    0x6b,
                    0x6c,
                    0x6d,
                    0x6e,
                    0x6f,
                    0x70,
                    0x71,
                    0x72,
                    0x73,
                    0x74,
                    0x75,
                    0x76,
                    0x77,
                    0x78,
                    0x79,
                    0x7a,
                    0x30,
                    0x31,
                    0x32,
                    0x33,
                    0x34,
                    0x35,
                    0x36,
                    0x37,
                    0x38,
                    0x39,
                    0x2b,
                    0x2f
                ], _0x5507e1 = [], _0xb0cb41 = 0x0, _0x58f47b = _0x42859d['length']; _0xb0cb41 < _0x58f47b; ++_0xb0cb41)
            _0x5507e1[_0x42859d[_0xb0cb41]] = _0xb0cb41;
        return _0x1bfc56['encode'] = function (_0x4298d3, _0x27cbd8) {
            for (var _0x1f567b, _0x2420fd; null !== (_0x1f567b = _0x4298d3());)
                _0x27cbd8(_0x42859d[_0x1f567b >> 0x2 & 0x3f]), _0x2420fd = (0x3 & _0x1f567b) << 0x4, null !== (_0x1f567b = _0x4298d3()) ? (_0x27cbd8(_0x42859d[0x3f & ((_0x2420fd |= _0x1f567b >> 0x4 & 0xf) | _0x1f567b >> 0x4 & 0xf)]), _0x2420fd = (0xf & _0x1f567b) << 0x2, null !== (_0x1f567b = _0x4298d3()) ? (_0x27cbd8(_0x42859d[0x3f & (_0x2420fd | _0x1f567b >> 0x6 & 0x3)]), _0x27cbd8(_0x42859d[0x3f & _0x1f567b])) : (_0x27cbd8(_0x42859d[0x3f & _0x2420fd]), _0x27cbd8(0x3d))) : (_0x27cbd8(_0x42859d[0x3f & _0x2420fd]), _0x27cbd8(0x3d), _0x27cbd8(0x3d));
        }, _0x1bfc56['decode'] = function (_0x3a54c9, _0x2d56f0) {
            var _0x7265c9, _0x17c4b7, _0x344de4;
            function _0x4248b0(_0x10f326) {
                throw Error('Illegal\x20ch' + 'aracter\x20co' + 'de:\x20' + _0x10f326);
            }
            for (; null !== (_0x7265c9 = _0x3a54c9());)
                if (void 0x0 === (_0x17c4b7 = _0x5507e1[_0x7265c9]) && _0x4248b0(_0x7265c9), null !== (_0x7265c9 = _0x3a54c9()) && (void 0x0 === (_0x344de4 = _0x5507e1[_0x7265c9]) && _0x4248b0(_0x7265c9), _0x2d56f0(_0x17c4b7 << 0x2 >>> 0x0 | (0x30 & _0x344de4) >> 0x4), null !== (_0x7265c9 = _0x3a54c9()))) {
                    if (void 0x0 === (_0x17c4b7 = _0x5507e1[_0x7265c9])) {
                        if (0x3d === _0x7265c9)
                            break;
                        _0x4248b0(_0x7265c9);
                    }
                    if (_0x2d56f0((0xf & _0x344de4) << 0x4 >>> 0x0 | (0x3c & _0x17c4b7) >> 0x2), null !== (_0x7265c9 = _0x3a54c9())) {
                        if (void 0x0 === (_0x344de4 = _0x5507e1[_0x7265c9])) {
                            if (0x3d === _0x7265c9)
                                break;
                            _0x4248b0(_0x7265c9);
                        }
                        _0x2d56f0((0x3 & _0x17c4b7) << 0x6 >>> 0x0 | _0x344de4);
                    }
                }
        }, _0x1bfc56['test'] = function (_0x3bff69) {
            return /^(?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$/['test'](_0x3bff69);
        }, _0x1bfc56;
    }();
    _0x170abd['toBase64'] = function (_0x55192f, _0x431dcb) {
        if (void 0x0 === _0x55192f && (_0x55192f = this['offset']), void 0x0 === _0x431dcb && (_0x431dcb = this['limit']), _0x431dcb |= 0x0, (_0x55192f |= 0x0) < 0x0 || _0x431dcb > this['capacity'] || _0x55192f > _0x431dcb)
            throw RangeError('begin,\x20end');
        var _0x2d7e54;
        return _0x4b687d['encode'](function () {
            return _0x55192f < _0x431dcb ? this['view'][_0x55192f++] : null;
        }['bind'](this), _0x2d7e54 = _0x582764()), _0x2d7e54();
    }, _0x1cd814['fromBase64'] = function (_0xde8ad9, _0xa9dea1) {
        if ('string' != typeof _0xde8ad9)
            throw TypeError('str');
        var _0x1ef4c0 = new _0x1cd814(_0xde8ad9['length'] / 0x4 * 0x3, _0xa9dea1), _0xe14e70 = 0x0;
        return _0x4b687d['decode'](_0x538793(_0xde8ad9), function (_0x18948d) {
            _0x1ef4c0['view'][_0xe14e70++] = _0x18948d;
        }), _0x1ef4c0['limit'] = _0xe14e70, _0x1ef4c0;
    }, _0x1cd814['btoa'] = function (_0x2a8d62) {
        return _0x1cd814['fromBinary'](_0x2a8d62)['toBase64']();
    }, _0x1cd814['atob'] = function (_0x302184) {
        return _0x1cd814['fromBase64'](_0x302184)['toBinary']();
    }, _0x170abd['toBinary'] = function (_0x3537e3, _0x3f5197) {
        if (void 0x0 === _0x3537e3 && (_0x3537e3 = this['offset']), void 0x0 === _0x3f5197 && (_0x3f5197 = this['limit']), _0x3f5197 |= 0x0, (_0x3537e3 |= 0x0) < 0x0 || _0x3f5197 > this['capacity']() || _0x3537e3 > _0x3f5197)
            throw RangeError('begin,\x20end');
        if (_0x3537e3 === _0x3f5197)
            return '';
        for (var _0x30be17 = [], _0x1dd97b = []; _0x3537e3 < _0x3f5197;)
            _0x30be17['push'](this['view'][_0x3537e3++]), _0x30be17['length'] >= 0x400 && (_0x1dd97b['push'](String['fromCharCo' + 'de']['apply'](String, _0x30be17)), _0x30be17 = []);
        return _0x1dd97b['join']('') + String['fromCharCo' + 'de']['apply'](String, _0x30be17);
    }, _0x1cd814['fromBinary'] = function (_0x51b80a, _0x450357) {
        if ('string' != typeof _0x51b80a)
            throw TypeError('str');
        for (var _0x3fc8a2, _0x50f4b4 = 0x0, _0x4f6e6b = _0x51b80a['length'], _0x1c6f84 = new _0x1cd814(_0x4f6e6b, _0x450357); _0x50f4b4 < _0x4f6e6b;) {
            if ((_0x3fc8a2 = _0x51b80a['charCodeAt'](_0x50f4b4)) > 0xff)
                throw RangeError('illegal\x20ch' + 'ar\x20code:\x20' + _0x3fc8a2);
            _0x1c6f84['view'][_0x50f4b4++] = _0x3fc8a2;
        }
        return _0x1c6f84['limit'] = _0x4f6e6b, _0x1c6f84;
    }, _0x170abd['toDebug'] = function (_0x9609b4) {
        for (var _0xf81b07, _0x29b406 = -0x1, _0x5cbcbf = this['buffer']['byteLength'], _0x15b8c6 = '', _0x4a1763 = '', _0x49cca2 = ''; _0x29b406 < _0x5cbcbf;) {
            if (-0x1 !== _0x29b406 && (_0x15b8c6 += (_0xf81b07 = this['view'][_0x29b406]) < 0x10 ? '0' + _0xf81b07['toString'](0x10)['toUpperCas' + 'e']() : _0xf81b07['toString'](0x10)['toUpperCas' + 'e'](), _0x9609b4 && (_0x4a1763 += _0xf81b07 > 0x20 && _0xf81b07 < 0x7f ? String['fromCharCo' + 'de'](_0xf81b07) : '.')), ++_0x29b406, _0x9609b4 && _0x29b406 > 0x0 && _0x29b406 % 0x10 == 0x0 && _0x29b406 !== _0x5cbcbf) {
                for (; _0x15b8c6['length'] < 0x33;)
                    _0x15b8c6 += '\x20';
                _0x49cca2 += _0x15b8c6 + _0x4a1763 + '\x0a', _0x15b8c6 = _0x4a1763 = '';
            }
            _0x29b406 === this['offset'] && _0x29b406 === this['limit'] ? _0x15b8c6 += _0x29b406 === this['markedOffs' + 'et'] ? '!' : '|' : _0x29b406 === this['offset'] ? _0x15b8c6 += _0x29b406 === this['markedOffs' + 'et'] ? '[' : '<' : _0x29b406 === this['limit'] ? _0x15b8c6 += _0x29b406 === this['markedOffs' + 'et'] ? ']' : '>' : _0x15b8c6 += _0x29b406 === this['markedOffs' + 'et'] ? '\x27' : _0x9609b4 || 0x0 !== _0x29b406 && _0x29b406 !== _0x5cbcbf ? '\x20' : '';
        }
        if (_0x9609b4 && '\x20' !== _0x15b8c6) {
            for (; _0x15b8c6['length'] < 0x33;)
                _0x15b8c6 += '\x20';
            _0x49cca2 += _0x15b8c6 + _0x4a1763 + '\x0a';
        }
        return _0x9609b4 ? _0x49cca2 : _0x15b8c6;
    }, _0x1cd814['fromDebug'] = function (_0x20a790, _0xe0d2f2, _0x12067c) {
        for (var _0x867f56, _0x5a051e, _0x1c247f = _0x20a790['length'], _0x164146 = new _0x1cd814((_0x1c247f + 0x1) / 0x3 | 0x0, _0xe0d2f2, _0x12067c), _0x4ff7ff = 0x0, _0x5ceae2 = 0x0, _0x506f48 = !0x1, _0xd95153 = !0x1, _0xc6f027 = !0x1, _0x58554e = !0x1, _0x1413cc = !0x1; _0x4ff7ff < _0x1c247f;) {
            switch (_0x867f56 = _0x20a790['charAt'](_0x4ff7ff++)) {
            case '!':
                if (!_0x12067c) {
                    if (_0xd95153 || _0xc6f027 || _0x58554e) {
                        _0x1413cc = !0x0;
                        break;
                    }
                    _0xd95153 = _0xc6f027 = _0x58554e = !0x0;
                }
                _0x164146['offset'] = _0x164146['markedOffs' + 'et'] = _0x164146['limit'] = _0x5ceae2, _0x506f48 = !0x1;
                break;
            case '|':
                if (!_0x12067c) {
                    if (_0xd95153 || _0x58554e) {
                        _0x1413cc = !0x0;
                        break;
                    }
                    _0xd95153 = _0x58554e = !0x0;
                }
                _0x164146['offset'] = _0x164146['limit'] = _0x5ceae2, _0x506f48 = !0x1;
                break;
            case '[':
                if (!_0x12067c) {
                    if (_0xd95153 || _0xc6f027) {
                        _0x1413cc = !0x0;
                        break;
                    }
                    _0xd95153 = _0xc6f027 = !0x0;
                }
                _0x164146['offset'] = _0x164146['markedOffs' + 'et'] = _0x5ceae2, _0x506f48 = !0x1;
                break;
            case '<':
                if (!_0x12067c) {
                    if (_0xd95153) {
                        _0x1413cc = !0x0;
                        break;
                    }
                    _0xd95153 = !0x0;
                }
                _0x164146['offset'] = _0x5ceae2, _0x506f48 = !0x1;
                break;
            case ']':
                if (!_0x12067c) {
                    if (_0x58554e || _0xc6f027) {
                        _0x1413cc = !0x0;
                        break;
                    }
                    _0x58554e = _0xc6f027 = !0x0;
                }
                _0x164146['limit'] = _0x164146['markedOffs' + 'et'] = _0x5ceae2, _0x506f48 = !0x1;
                break;
            case '>':
                if (!_0x12067c) {
                    if (_0x58554e) {
                        _0x1413cc = !0x0;
                        break;
                    }
                    _0x58554e = !0x0;
                }
                _0x164146['limit'] = _0x5ceae2, _0x506f48 = !0x1;
                break;
            case '\x27':
                if (!_0x12067c) {
                    if (_0xc6f027) {
                        _0x1413cc = !0x0;
                        break;
                    }
                    _0xc6f027 = !0x0;
                }
                _0x164146['markedOffs' + 'et'] = _0x5ceae2, _0x506f48 = !0x1;
                break;
            case '\x20':
                _0x506f48 = !0x1;
                break;
            default:
                if (!_0x12067c && _0x506f48) {
                    _0x1413cc = !0x0;
                    break;
                }
                if (_0x5a051e = parseInt(_0x867f56 + _0x20a790['charAt'](_0x4ff7ff++), 0x10), !_0x12067c && (isNaN(_0x5a051e) || _0x5a051e < 0x0 || _0x5a051e > 0xff))
                    throw TypeError('Illegal\x20st' + 'r:\x20Not\x20a\x20d' + 'ebug\x20encod' + 'ed\x20string');
                _0x164146['view'][_0x5ceae2++] = _0x5a051e, _0x506f48 = !0x0;
            }
            if (_0x1413cc)
                throw TypeError('Illegal\x20st' + 'r:\x20Invalid' + '\x20symbol\x20at' + '\x20' + _0x4ff7ff);
        }
        if (!_0x12067c) {
            if (!_0xd95153 || !_0x58554e)
                throw TypeError('Illegal\x20st' + 'r:\x20Missing' + '\x20offset\x20or' + '\x20limit');
            if (_0x5ceae2 < _0x164146['buffer']['byteLength'])
                throw TypeError('Illegal\x20st' + 'r:\x20Not\x20a\x20d' + 'ebug\x20encod' + 'ed\x20string\x20' + '(is\x20it\x20hex' + '?)\x20' + _0x5ceae2 + '\x20<\x20' + _0x1c247f);
        }
        return _0x164146;
    }, _0x170abd['toHex'] = function (_0x1711b7, _0x1efc56) {
        if (_0x1711b7 = void 0x0 === _0x1711b7 ? this['offset'] : _0x1711b7, _0x1efc56 = void 0x0 === _0x1efc56 ? this['limit'] : _0x1efc56, !this['noAssert']) {
            if ('number' != typeof _0x1711b7 || _0x1711b7 % 0x1 != 0x0)
                throw TypeError('Illegal\x20be' + 'gin:\x20Not\x20a' + 'n\x20integer');
            if (_0x1711b7 >>>= 0x0, 'number' != typeof _0x1efc56 || _0x1efc56 % 0x1 != 0x0)
                throw TypeError('Illegal\x20en' + 'd:\x20Not\x20an\x20' + 'integer');
            if (_0x1efc56 >>>= 0x0, _0x1711b7 < 0x0 || _0x1711b7 > _0x1efc56 || _0x1efc56 > this['buffer']['byteLength'])
                throw RangeError('Illegal\x20ra' + 'nge:\x200\x20<=\x20' + _0x1711b7 + '\x20<=\x20' + _0x1efc56 + '\x20<=\x20' + this['buffer']['byteLength']);
        }
        for (var _0xe0be11, _0x2def21 = new Array(_0x1efc56 - _0x1711b7); _0x1711b7 < _0x1efc56;)
            (_0xe0be11 = this['view'][_0x1711b7++]) < 0x10 ? _0x2def21['push']('0', _0xe0be11['toString'](0x10)) : _0x2def21['push'](_0xe0be11['toString'](0x10));
        return _0x2def21['join']('');
    }, _0x1cd814['fromHex'] = function (_0x2bc6be, _0x26088b, _0x471c70) {
        if (!_0x471c70) {
            if ('string' != typeof _0x2bc6be)
                throw TypeError('Illegal\x20st' + 'r:\x20Not\x20a\x20s' + 'tring');
            if (_0x2bc6be['length'] % 0x2 != 0x0)
                throw TypeError('Illegal\x20st' + 'r:\x20Length\x20' + 'not\x20a\x20mult' + 'iple\x20of\x202');
        }
        for (var _0x4869e7, _0x378215 = _0x2bc6be['length'], _0x4a63d3 = new _0x1cd814(_0x378215 / 0x2 | 0x0, _0x26088b), _0x5c1f0c = 0x0, _0x146b7f = 0x0; _0x5c1f0c < _0x378215; _0x5c1f0c += 0x2) {
            if (_0x4869e7 = parseInt(_0x2bc6be['substring'](_0x5c1f0c, _0x5c1f0c + 0x2), 0x10), !_0x471c70 && (!isFinite(_0x4869e7) || _0x4869e7 < 0x0 || _0x4869e7 > 0xff))
                throw TypeError('Illegal\x20st' + 'r:\x20Contain' + 's\x20non-hex\x20' + 'characters');
            _0x4a63d3['view'][_0x146b7f++] = _0x4869e7;
        }
        return _0x4a63d3['limit'] = _0x146b7f, _0x4a63d3;
    };
    var _0x466612 = function () {
        var _0x4c842d = {
            'MAX_CODEPOINT': 0x10ffff,
            'encodeUTF8': function (_0x42279b, _0x168d9a) {
                var _0x4b7e10 = null;
                for ('number' == typeof _0x42279b && (_0x4b7e10 = _0x42279b, _0x42279b = function () {
                        return null;
                    }); null !== _0x4b7e10 || null !== (_0x4b7e10 = _0x42279b());)
                    _0x4b7e10 < 0x80 ? _0x168d9a(0x7f & _0x4b7e10) : _0x4b7e10 < 0x800 ? (_0x168d9a(_0x4b7e10 >> 0x6 & 0x1f | 0xc0), _0x168d9a(0x3f & _0x4b7e10 | 0x80)) : _0x4b7e10 < 0x10000 ? (_0x168d9a(_0x4b7e10 >> 0xc & 0xf | 0xe0), _0x168d9a(_0x4b7e10 >> 0x6 & 0x3f | 0x80), _0x168d9a(0x3f & _0x4b7e10 | 0x80)) : (_0x168d9a(_0x4b7e10 >> 0x12 & 0x7 | 0xf0), _0x168d9a(_0x4b7e10 >> 0xc & 0x3f | 0x80), _0x168d9a(_0x4b7e10 >> 0x6 & 0x3f | 0x80), _0x168d9a(0x3f & _0x4b7e10 | 0x80)), _0x4b7e10 = null;
            },
            'decodeUTF8': function (_0x21a65f, _0x2f5ff7) {
                for (var _0x1aa52f, _0xe592fe, _0x2ba561, _0x841a38, _0x551dd4 = function (_0xf01ca2) {
                            _0xf01ca2 = _0xf01ca2['slice'](0x0, _0xf01ca2['indexOf'](null));
                            var _0x552a78 = Error(_0xf01ca2['toString']());
                            throw _0x552a78['name'] = 'TruncatedE' + 'rror', _0x552a78['bytes'] = _0xf01ca2, _0x552a78;
                        }; null !== (_0x1aa52f = _0x21a65f());)
                    if (0x0 == (0x80 & _0x1aa52f))
                        _0x2f5ff7(_0x1aa52f);
                    else {
                        if (0xc0 == (0xe0 & _0x1aa52f))
                            null === (_0xe592fe = _0x21a65f()) && _0x551dd4([
                                _0x1aa52f,
                                _0xe592fe
                            ]), _0x2f5ff7((0x1f & _0x1aa52f) << 0x6 | 0x3f & _0xe592fe);
                        else {
                            if (0xe0 == (0xf0 & _0x1aa52f))
                                (null === (_0xe592fe = _0x21a65f()) || null === (_0x2ba561 = _0x21a65f())) && _0x551dd4([
                                    _0x1aa52f,
                                    _0xe592fe,
                                    _0x2ba561
                                ]), _0x2f5ff7((0xf & _0x1aa52f) << 0xc | (0x3f & _0xe592fe) << 0x6 | 0x3f & _0x2ba561);
                            else {
                                if (0xf0 != (0xf8 & _0x1aa52f))
                                    throw RangeError('Illegal\x20st' + 'arting\x20byt' + 'e:\x20' + _0x1aa52f);
                                (null === (_0xe592fe = _0x21a65f()) || null === (_0x2ba561 = _0x21a65f()) || null === (_0x841a38 = _0x21a65f())) && _0x551dd4([
                                    _0x1aa52f,
                                    _0xe592fe,
                                    _0x2ba561,
                                    _0x841a38
                                ]), _0x2f5ff7((0x7 & _0x1aa52f) << 0x12 | (0x3f & _0xe592fe) << 0xc | (0x3f & _0x2ba561) << 0x6 | 0x3f & _0x841a38);
                            }
                        }
                    }
            },
            'UTF16toUTF8': function (_0x32f9fa, _0x32e074) {
                for (var _0x5f1d0f, _0x203966 = null; null !== (_0x5f1d0f = null !== _0x203966 ? _0x203966 : _0x32f9fa());)
                    _0x5f1d0f >= 0xd800 && _0x5f1d0f <= 0xdfff && null !== (_0x203966 = _0x32f9fa()) && _0x203966 >= 0xdc00 && _0x203966 <= 0xdfff ? (_0x32e074(0x400 * (_0x5f1d0f - 0xd800) + _0x203966 - 0xdc00 + 0x10000), _0x203966 = null) : _0x32e074(_0x5f1d0f);
                null !== _0x203966 && _0x32e074(_0x203966);
            },
            'UTF8toUTF16': function (_0x4ce25f, _0x10dfb5) {
                var _0x4a9563 = null;
                for ('number' == typeof _0x4ce25f && (_0x4a9563 = _0x4ce25f, _0x4ce25f = function () {
                        return null;
                    }); null !== _0x4a9563 || null !== (_0x4a9563 = _0x4ce25f());)
                    _0x4a9563 <= 0xffff ? _0x10dfb5(_0x4a9563) : (_0x10dfb5(0xd800 + ((_0x4a9563 -= 0x10000) >> 0xa)), _0x10dfb5(_0x4a9563 % 0x400 + 0xdc00)), _0x4a9563 = null;
            },
            'encodeUTF16toUTF8': function (_0x4caedd, _0x5cdd89) {
                _0x4c842d['UTF16toUTF' + '8'](_0x4caedd, function (_0x57d381) {
                    _0x4c842d['encodeUTF8'](_0x57d381, _0x5cdd89);
                });
            },
            'decodeUTF8toUTF16': function (_0x5e53c5, _0x279bd0) {
                _0x4c842d['decodeUTF8'](_0x5e53c5, function (_0x27b979) {
                    _0x4c842d['UTF8toUTF1' + '6'](_0x27b979, _0x279bd0);
                });
            },
            'calculateCodePoint': function (_0x373a22) {
                return _0x373a22 < 0x80 ? 0x1 : _0x373a22 < 0x800 ? 0x2 : _0x373a22 < 0x10000 ? 0x3 : 0x4;
            },
            'calculateUTF8': function (_0x4e301e) {
                for (var _0x3e6d6d, _0x55a776 = 0x0; null !== (_0x3e6d6d = _0x4e301e());)
                    _0x55a776 += _0x3e6d6d < 0x80 ? 0x1 : _0x3e6d6d < 0x800 ? 0x2 : _0x3e6d6d < 0x10000 ? 0x3 : 0x4;
                return _0x55a776;
            },
            'calculateUTF16asUTF8': function (_0x1b7bbf) {
                var _0x58c77f = 0x0, _0x118bf3 = 0x0;
                return _0x4c842d['UTF16toUTF' + '8'](_0x1b7bbf, function (_0x4ed282) {
                    ++_0x58c77f, _0x118bf3 += _0x4ed282 < 0x80 ? 0x1 : _0x4ed282 < 0x800 ? 0x2 : _0x4ed282 < 0x10000 ? 0x3 : 0x4;
                }), [
                    _0x58c77f,
                    _0x118bf3
                ];
            }
        };
        return _0x4c842d;
    }();
    return _0x170abd['toUTF8'] = function (_0x5ed097, _0x54536d) {
        if (void 0x0 === _0x5ed097 && (_0x5ed097 = this['offset']), void 0x0 === _0x54536d && (_0x54536d = this['limit']), !this['noAssert']) {
            if ('number' != typeof _0x5ed097 || _0x5ed097 % 0x1 != 0x0)
                throw TypeError('Illegal\x20be' + 'gin:\x20Not\x20a' + 'n\x20integer');
            if (_0x5ed097 >>>= 0x0, 'number' != typeof _0x54536d || _0x54536d % 0x1 != 0x0)
                throw TypeError('Illegal\x20en' + 'd:\x20Not\x20an\x20' + 'integer');
            if (_0x54536d >>>= 0x0, _0x5ed097 < 0x0 || _0x5ed097 > _0x54536d || _0x54536d > this['buffer']['byteLength'])
                throw RangeError('Illegal\x20ra' + 'nge:\x200\x20<=\x20' + _0x5ed097 + '\x20<=\x20' + _0x54536d + '\x20<=\x20' + this['buffer']['byteLength']);
        }
        var _0x1f429d;
        try {
            _0x466612['decodeUTF8' + 'toUTF16'](function () {
                return _0x5ed097 < _0x54536d ? this['view'][_0x5ed097++] : null;
            }['bind'](this), _0x1f429d = _0x582764());
        } catch (_0x42e00f) {
            if (_0x5ed097 !== _0x54536d)
                throw RangeError('Illegal\x20ra' + 'nge:\x20Trunc' + 'ated\x20data,' + '\x20' + _0x5ed097 + '\x20!=\x20' + _0x54536d);
        }
        return _0x1f429d();
    }, _0x1cd814['fromUTF8'] = function (_0x22f7c9, _0x25b428, _0x13c6e9) {
        if (!_0x13c6e9 && 'string' != typeof _0x22f7c9)
            throw TypeError('Illegal\x20st' + 'r:\x20Not\x20a\x20s' + 'tring');
        var _0x34409a = new _0x1cd814(_0x466612['calculateU' + 'TF16asUTF8'](_0x538793(_0x22f7c9), !0x0)[0x1], _0x25b428, _0x13c6e9), _0x2b24a3 = 0x0;
        return _0x466612['encodeUTF1' + '6toUTF8'](_0x538793(_0x22f7c9), function (_0x4008a0) {
            _0x34409a['view'][_0x2b24a3++] = _0x4008a0;
        }), _0x34409a['limit'] = _0x2b24a3, _0x34409a;
    }, _0x1cd814;
});