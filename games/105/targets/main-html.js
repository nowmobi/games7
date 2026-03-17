/**
 * Cooked with Flambe
 * https://github.com/aduros/flambe
 */
'use strict';
(function() {
    var g, o, f, gc, hc, Pa, qb, rb, Da, sb, ic, m, Qa, T, la, Ra, Sa, Ta, sa, Ua, ma, Ea, Z, Fa, Va, Wa, tb, ia, oc, ub, Xa, R, d, vb, wb, xb, ja, yb, zb, Ya, Ab, Za, Bb, P, U, Cb, Db, N, K, $a, ab, Eb, Ga, bb, cb, db, eb, fb, gb, Fb, Gb, Q, Hb, hb, ca, x, ib, $, S, qa, W, ya, Ib, da, Jb, Kb, Lb, ta, X, aa, C, Ha, Ia, ea, Mb, Nb, jb, Ob, pc, jc, v, za, I, kb, Ja, Pb, fa, Qb, k, kc, Ka, Rb, ua, La, E, va, i, t, lc, wa, lb, mb, Sb, y, O, Tb, Ma, ga, Ub, Vb, nb, s, Wb, Na, ob, Xb, pb, Yb, Zb, $b, Y, ac, bc, z, Oa, F, B, qc, ra, ba, Aa, mc, cc, V, na, Ba;

    function w(a, b) {
        function c() {}
        c.prototype = a;
        var e = new c,
            j;
        for (j in b) e[j] =
            b[j];
        return e
    }

    function nc(a) {
        return a instanceof Array ? function() {
            return G.iter(a)
        } : "function" == typeof a.iterator ? q(a, a.iterator) : a.iterator
    }

    function q(a, b) {
        var c = function() {
            return c.method.apply(c.scope, arguments)
        };
        c.scope = a;
        c.method = b;
        return c
    }
    var h = {},
        n = function() {
            return F.__string_rec(this, "")
        },
        ka = function(a, b) {
            b = b.split("u").join("");
            this.r = RegExp(a, b)
        };
    h.EReg = ka;
    ka.__name__ = ["EReg"];
    ka.prototype = {
        split: function(a) {
            return a.replace(this.r, "#__delim__#").split("#__delim__#")
        },
        matchedPos: function() {
            if (null ==
                this.r.m) throw "No string matched";
            return {
                pos: this.r.m.index,
                len: this.r.m[0].length
            }
        },
        matched: function(a) {
            if (null != this.r.m && 0 <= a && a < this.r.m.length) a = this.r.m[a];
            else throw "EReg::matched";
            return a
        },
        match: function(a) {
            this.r.global && (this.r.lastIndex = 0);
            this.r.m = this.r.exec(a);
            this.r.s = a;
            return null != this.r.m
        },
        __class__: ka
    };
    var H = function() {
        this.h = {}
    };
    h.Hash = H;
    H.__name__ = ["Hash"];
    H.prototype = {
        iterator: function() {
            return {
                ref: this.h,
                it: this.keys(),
                hasNext: function() {
                    return this.it.hasNext()
                },
                next: function() {
                    return this.ref["$" +
                        this.it.next()]
                }
            }
        },
        keys: function() {
            var a = [],
                b;
            for (b in this.h) this.h.hasOwnProperty(b) && a.push(b.substr(1));
            return G.iter(a)
        },
        remove: function(a) {
            a = "$" + a;
            if (!this.h.hasOwnProperty(a)) return !1;
            delete this.h[a];
            return !0
        },
        exists: function(a) {
            return this.h.hasOwnProperty("$" + a)
        },
        get: function(a) {
            return this.h["$" + a]
        },
        set: function(a, b) {
            this.h["$" + a] = b
        },
        __class__: H
    };
    var G = function() {};
    h.HxOverrides = G;
    G.__name__ = ["HxOverrides"];
    G.dateStr = function(a) {
        var b = a.getMonth() + 1,
            c = a.getDate(),
            e = a.getHours(),
            j = a.getMinutes(),
            l = a.getSeconds();
        return a.getFullYear() + "-" + (10 > b ? "0" + b : "" + b) + "-" + (10 > c ? "0" + c : "" + c) + " " + (10 > e ? "0" + e : "" + e) + ":" + (10 > j ? "0" + j : "" + j) + ":" + (10 > l ? "0" + l : "" + l)
    };
    G.strDate = function(a) {
        switch (a.length) {
            case 8:
                var a = a.split(":"),
                    b = new Date;
                b.setTime(0);
                b.setUTCHours(a[0]);
                b.setUTCMinutes(a[1]);
                b.setUTCSeconds(a[2]);
                return b;
            case 10:
                return a = a.split("-"), new Date(a[0], a[1] - 1, a[2], 0, 0, 0);
            case 19:
                return a = a.split(" "), b = a[0].split("-"), a = a[1].split(":"), new Date(b[0], b[1] - 1, b[2], a[0], a[1], a[2]);
            default:
                throw "Invalid date format : " +
                    a;
        }
    };
    G.cca = function(a, b) {
        var c = a.charCodeAt(b);
        return c != c ? void 0 : c
    };
    G.substr = function(a, b, c) {
        if (null != b && 0 != b && null != c && 0 > c) return "";
        null == c && (c = a.length);
        0 > b ? (b = a.length + b, 0 > b && (b = 0)) : 0 > c && (c = a.length + c - b);
        return a.substr(b, c)
    };
    G.remove = function(a, b) {
        for (var c = 0, e = a.length; c < e;) {
            if (a[c] == b) return a.splice(c, 1), !0;
            c++
        }
        return !1
    };
    G.iter = function(a) {
        return {
            cur: 0,
            arr: a,
            hasNext: function() {
                return this.cur < this.arr.length
            },
            next: function() {
                return this.arr[this.cur++]
            }
        }
    };
    var oa = function() {
        this.h = {}
    };
    h.IntHash =
        oa;
    oa.__name__ = ["IntHash"];
    oa.prototype = {
        keys: function() {
            var a = [],
                b;
            for (b in this.h) this.h.hasOwnProperty(b) && a.push(b | 0);
            return G.iter(a)
        },
        remove: function(a) {
            if (!this.h.hasOwnProperty(a)) return !1;
            delete this.h[a];
            return !0
        },
        exists: function(a) {
            return this.h.hasOwnProperty(a)
        },
        get: function(a) {
            return this.h[a]
        },
        set: function(a, b) {
            this.h[a] = b
        },
        __class__: oa
    };
    var ha = function() {};
    h.Lambda = ha;
    ha.__name__ = ["Lambda"];
    ha.array = function(a) {
        for (var b = [], a = nc(a)(); a.hasNext();) {
            var c = a.next();
            b.push(c)
        }
        return b
    };
    ha.has = function(a, b, c) {
        if (null == c)
            for (c = nc(a)(); c.hasNext();) {
                if (a = c.next(), a == b) return !0
            } else
                for (var e = nc(a)(); e.hasNext();)
                    if (a = e.next(), c(a, b)) return !0;
        return !1
    };
    ha.count = function(a, b) {
        var c = 0;
        if (null == b)
            for (var e = nc(a)(); e.hasNext();) e.next(), c++;
        else
            for (e = nc(a)(); e.hasNext();) {
                var j = e.next();
                b(j) && c++
            }
        return c
    };
    ha.indexOf = function(a, b) {
        for (var c = 0, e = nc(a)(); e.hasNext();) {
            var j = e.next();
            if (b == j) return c;
            c++
        }
        return -1
    };
    var dc = function() {
        this.length = 0
    };
    h.List = dc;
    dc.__name__ = ["List"];
    dc.prototype = {
        iterator: function() {
            return {
                h: this.h,
                hasNext: function() {
                    return null != this.h
                },
                next: function() {
                    if (null == this.h) return null;
                    var a = this.h[0];
                    this.h = this.h[1];
                    return a
                }
            }
        },
        push: function(a) {
            this.h = a = [a, this.h];
            null == this.q && (this.q = a);
            this.length++
        },
        add: function(a) {
            a = [a];
            null == this.h ? this.h = a : this.q[1] = a;
            this.q = a;
            this.length++
        },
        __class__: dc
    };
    var pa = function() {};
    h.Reflect = pa;
    pa.__name__ = ["Reflect"];
    pa.field = function(a, b) {
        var c = null;
        try {
            c = a[b]
        } catch (e) {}
        return c
    };
    pa.fields = function(a) {
        var b = [];
        if (null != a) {
            var c =
                Object.prototype.hasOwnProperty,
                e;
            for (e in a) c.call(a, e) && b.push(e)
        }
        return b
    };
    pa.isFunction = function(a) {
        return "function" == typeof a && !(a.__name__ || a.__ename__)
    };
    var u = function() {};
    h.Std = u;
    u.__name__ = ["Std"];
    u.string = function(a) {
        return F.__string_rec(a, "")
    };
    u.parseInt = function(a) {
        var b = parseInt(a, 10);
        if (0 == b && (120 == G.cca(a, 1) || 88 == G.cca(a, 1))) b = parseInt(a);
        return isNaN(b) ? null : b
    };
    u.parseFloat = function(a) {
        return parseFloat(a)
    };
    var ec = function() {
        this.b = ""
    };
    h.StringBuf = ec;
    ec.__name__ = ["StringBuf"];
    ec.prototype = {
        __class__: ec
    };
    var Ca = function() {};
    h.StringTools = Ca;
    Ca.__name__ = ["StringTools"];
    Ca.urlEncode = function(a) {
        return encodeURIComponent(a)
    };
    Ca.urlDecode = function(a) {
        return decodeURIComponent(a.split("+").join(" "))
    };
    Ca.replace = function(a, b, c) {
        return a.split(b).join(c)
    };
    var D = h.ValueType = {
        __ename__: ["ValueType"],
        __constructs__: "TNull,TInt,TFloat,TBool,TObject,TFunction,TClass,TEnum,TUnknown".split(",")
    };
    D.TNull = ["TNull", 0];
    D.TNull.toString = n;
    D.TNull.__enum__ = D;
    D.TInt = ["TInt", 1];
    D.TInt.toString = n;
    D.TInt.__enum__ =
        D;
    D.TFloat = ["TFloat", 2];
    D.TFloat.toString = n;
    D.TFloat.__enum__ = D;
    D.TBool = ["TBool", 3];
    D.TBool.toString = n;
    D.TBool.__enum__ = D;
    D.TObject = ["TObject", 4];
    D.TObject.toString = n;
    D.TObject.__enum__ = D;
    D.TFunction = ["TFunction", 5];
    D.TFunction.toString = n;
    D.TFunction.__enum__ = D;
    D.TClass = function(a) {
        a = ["TClass", 6, a];
        a.__enum__ = D;
        a.toString = n;
        return a
    };
    D.TEnum = function(a) {
        a = ["TEnum", 7, a];
        a.__enum__ = D;
        a.toString = n;
        return a
    };
    D.TUnknown = ["TUnknown", 8];
    D.TUnknown.toString = n;
    D.TUnknown.__enum__ = D;
    var J = function() {};
    h.Type =
        J;
    J.__name__ = ["Type"];
    J.getClassName = function(a) {
        return a.__name__.join(".")
    };
    J.getEnumName = function(a) {
        return a.__ename__.join(".")
    };
    J.resolveClass = function(a) {
        a = h[a];
        return null == a || !a.__name__ ? null : a
    };
    J.resolveEnum = function(a) {
        a = h[a];
        return null == a || !a.__ename__ ? null : a
    };
    J.createInstance = function(a, b) {
        switch (b.length) {
            case 0:
                return new a;
            case 1:
                return new a(b[0]);
            case 2:
                return new a(b[0], b[1]);
            case 3:
                return new a(b[0], b[1], b[2]);
            case 4:
                return new a(b[0], b[1], b[2], b[3]);
            case 5:
                return new a(b[0],
                    b[1], b[2], b[3], b[4]);
            case 6:
                return new a(b[0], b[1], b[2], b[3], b[4], b[5]);
            case 7:
                return new a(b[0], b[1], b[2], b[3], b[4], b[5], b[6]);
            case 8:
                return new a(b[0], b[1], b[2], b[3], b[4], b[5], b[6], b[7]);
            default:
                throw "Too many arguments";
        }
    };
    J.createEmptyInstance = function(a) {
        function b() {}
        b.prototype = a.prototype;
        return new b
    };
    J.createEnum = function(a, b, c) {
        var e = pa.field(a, b);
        if (null == e) throw "No such constructor " + b;
        if (pa.isFunction(e)) {
            if (null == c) throw "Constructor " + b + " need parameters";
            return e.apply(a, c)
        }
        if (null !=
            c && 0 != c.length) throw "Constructor " + b + " does not need parameters";
        return e
    };
    J.getEnumConstructs = function(a) {
        return a.__constructs__.slice()
    };
    J["typeof"] = function(a) {
        switch (typeof a) {
            case "boolean":
                return D.TBool;
            case "string":
                return D.TClass(String);
            case "number":
                return Math.ceil(a) == a % 2147483648 ? D.TInt : D.TFloat;
            case "object":
                if (null == a) return D.TNull;
                var b = a.__enum__;
                if (null != b) return D.TEnum(b);
                a = a.__class__;
                return null != a ? D.TClass(a) : D.TObject;
            case "function":
                return a.__name__ || a.__ename__ ? D.TObject :
                    D.TFunction;
            case "undefined":
                return D.TNull;
            default:
                return D.TUnknown
        }
    };
    wa = function() {
        this.lowerBound = new i.B2Vec2;
        this.upperBound = new i.B2Vec2
    };
    lb = void 0;
    mb = void 0;
    Sb = void 0;
    y = void 0;
    O = void 0;
    Tb = void 0;
    Ma = void 0;
    ga = void 0;
    Ub = void 0;
    Vb = void 0;
    nb = void 0;
    s = void 0;
    Wb = void 0;
    Na = void 0;
    ob = void 0;
    Xb = void 0;
    pb = void 0;
    Yb = void 0;
    Zb = void 0;
    $b = void 0;
    Y = void 0;
    ac = void 0;
    bc = void 0;
    z = void 0;
    Oa = void 0;
    h["box2D.collision.B2AABB"] = wa;
    wa.__name__ = ["box2D", "collision", "B2AABB"];
    wa.prototype = {
        combine: function(a, b) {
            this.lowerBound.x =
                Math.min(a.lowerBound.x, b.lowerBound.x);
            this.lowerBound.y = Math.min(a.lowerBound.y, b.lowerBound.y);
            this.upperBound.x = Math.max(a.upperBound.x, b.upperBound.x);
            this.upperBound.y = Math.max(a.upperBound.y, b.upperBound.y)
        },
        testOverlap: function(a) {
            var b = a.lowerBound.y - this.upperBound.y,
                c = this.lowerBound.x - a.upperBound.x,
                e = this.lowerBound.y - a.upperBound.y;
            return 0 < a.lowerBound.x - this.upperBound.x || 0 < b || 0 < c || 0 < e ? !1 : !0
        },
        contains: function(a) {
            var b;
            return b = (b = (b = (b = this.lowerBound.x <= a.lowerBound.x) && this.lowerBound.y <=
                a.lowerBound.y) && a.upperBound.x <= this.upperBound.x) && a.upperBound.y <= this.upperBound.y
        },
        getExtents: function() {
            return new i.B2Vec2((this.upperBound.x - this.lowerBound.x) / 2, (this.upperBound.y - this.lowerBound.y) / 2)
        },
        getCenter: function() {
            return new i.B2Vec2((this.lowerBound.x + this.upperBound.x) / 2, (this.lowerBound.y + this.upperBound.y) / 2)
        },
        __class__: wa
    };
    lb = function() {
        this.v = new i.B2Vec2;
        this.id = new mb
    };
    h["box2D.collision.ClipVertex"] = lb;
    lb.__name__ = ["box2D", "collision", "ClipVertex"];
    lb.prototype = {
        set: function(a) {
            this.v.setV(a.v);
            this.id.set(a.id)
        },
        __class__: lb
    };
    i = {};
    t = void 0;
    lc = void 0;
    i.B2Vec2 = function(a, b) {
        null == b && (b = 0);
        null == a && (a = 0);
        this.x = a;
        this.y = b
    };
    h["box2D.common.math.B2Vec2"] = i.B2Vec2;
    i.B2Vec2.__name__ = ["box2D", "common", "math", "B2Vec2"];
    i.B2Vec2.make = function(a, b) {
        return new i.B2Vec2(a, b)
    };
    i.B2Vec2.prototype = {
        normalize: function() {
            var a = Math.sqrt(this.x * this.x + this.y * this.y);
            if (a < Number.MIN_VALUE) return 0;
            var b = 1 / a;
            this.x *= b;
            this.y *= b;
            return a
        },
        lengthSquared: function() {
            return this.x * this.x + this.y * this.y
        },
        length: function() {
            return Math.sqrt(this.x *
                this.x + this.y * this.y)
        },
        multiply: function(a) {
            this.x *= a;
            this.y *= a
        },
        add: function(a) {
            this.x += a.x;
            this.y += a.y
        },
        copy: function() {
            return new i.B2Vec2(this.x, this.y)
        },
        negativeSelf: function() {
            this.x = -this.x;
            this.y = -this.y
        },
        getNegative: function() {
            return new i.B2Vec2(-this.x, -this.y)
        },
        setV: function(a) {
            this.x = a.x;
            this.y = a.y
        },
        set: function(a, b) {
            null == b && (b = 0);
            null == a && (a = 0);
            this.x = a;
            this.y = b
        },
        setZero: function() {
            this.y = this.x = 0
        },
        __class__: i.B2Vec2
    };
    mb = function() {
        this.features = new Sb;
        this.features._m_id = this
    };
    h["box2D.collision.B2ContactID"] =
        mb;
    mb.__name__ = ["box2D", "collision", "B2ContactID"];
    mb.prototype = {
        setKey: function(a) {
            this._key = a;
            this.features._referenceEdge = this._key & 255;
            this.features._incidentEdge = (this._key & 65280) >> 8 & 255;
            this.features._incidentVertex = (this._key & 16711680) >> 16 & 255;
            this.features._flip = (this._key & -16777216) >> 24 & 255;
            return this._key
        },
        getKey: function() {
            return this._key
        },
        set: function(a) {
            this.setKey(a._key)
        },
        __class__: mb
    };
    Sb = function() {};
    h["box2D.collision.Features"] = Sb;
    Sb.__name__ = ["box2D", "collision", "Features"];
    Sb.prototype = {
        setFlip: function(a) {
            this._flip = a;
            this._m_id._key = this._m_id._key & 16777215 | this._flip << 24 & -16777216;
            return a
        },
        getFlip: function() {
            return this._flip
        },
        setIncidentVertex: function(a) {
            this._incidentVertex = a;
            this._m_id._key = this._m_id._key & -16711681 | this._incidentVertex << 16 & 16711680;
            return a
        },
        getIncidentVertex: function() {
            return this._incidentVertex
        },
        setIncidentEdge: function(a) {
            this._incidentEdge = a;
            this._m_id._key = this._m_id._key & -65281 | this._incidentEdge << 8 & 65280;
            return a
        },
        getIncidentEdge: function() {
            return this._incidentEdge
        },
        setReferenceEdge: function(a) {
            this._referenceEdge = a;
            this._m_id._key = this._m_id._key & -256 | this._referenceEdge & 255;
            return a
        },
        getReferenceEdge: function() {
            return this._referenceEdge
        },
        __class__: Sb
    };
    y = function() {};
    h["box2D.collision.B2Collision"] = y;
    y.__name__ = ["box2D", "collision", "B2Collision"];
    y.clipSegmentToLine = function(a, b, c, e) {
        var j, l = 0;
        j = b[0];
        var M = j.v;
        j = b[1];
        var d = j.v,
            p = c.x * M.x + c.y * M.y - e;
        j = c.x * d.x + c.y * d.y - e;
        0 >= p && a[l++].set(b[0]);
        0 >= j && a[l++].set(b[1]);
        0 > p * j && (c = p / (p - j), j = a[l], j = j.v, j.x = M.x + c * (d.x -
            M.x), j.y = M.y + c * (d.y - M.y), j = a[l], j.id = (0 < p ? b[0] : b[1]).id, ++l);
        return l
    };
    y.edgeSeparation = function(a, b, c, e, j) {
        var l = a.m_vertices,
            a = a.m_normals,
            M = e.m_vertexCount,
            d = e.m_vertices,
            p, f;
        p = b.R;
        f = a[c];
        a = p.col1.x * f.x + p.col2.x * f.y;
        e = p.col1.y * f.x + p.col2.y * f.y;
        p = j.R;
        var g = p.col1.x * a + p.col1.y * e;
        p = p.col2.x * a + p.col2.y * e;
        for (var h = 0, i = Number.MAX_VALUE, k = 0; k < M;) {
            var m = k++;
            f = d[m];
            f = f.x * g + f.y * p;
            f < i && (i = f, h = m)
        }
        f = l[c];
        p = b.R;
        c = b.position.x + (p.col1.x * f.x + p.col2.x * f.y);
        b = b.position.y + (p.col1.y * f.x + p.col2.y * f.y);
        f = d[h];
        p = j.R;
        l = j.position.x + (p.col1.x * f.x + p.col2.x * f.y);
        j = j.position.y + (p.col1.y * f.x + p.col2.y * f.y);
        return (l - c) * a + (j - b) * e
    };
    y.findMaxSeparation = function(a, b, c, e, j) {
        var l = b.m_vertexCount,
            M = b.m_normals,
            d, p;
        p = j.R;
        d = e.m_centroid;
        var f = j.position.x + (p.col1.x * d.x + p.col2.x * d.y),
            g = j.position.y + (p.col1.y * d.x + p.col2.y * d.y);
        p = c.R;
        d = b.m_centroid;
        f -= c.position.x + (p.col1.x * d.x + p.col2.x * d.y);
        g -= c.position.y + (p.col1.y * d.x + p.col2.y * d.y);
        p = f * c.R.col1.x + g * c.R.col1.y;
        for (var g = f * c.R.col2.x + g * c.R.col2.y, f = 0, h = -Number.MAX_VALUE, i = 0; i <
            l;) {
            var k = i++;
            d = M[k];
            d = d.x * p + d.y * g;
            d > h && (h = d, f = k)
        }
        M = y.edgeSeparation(b, c, f, e, j);
        h = 0 <= f - 1 ? f - 1 : l - 1;
        p = y.edgeSeparation(b, c, h, e, j);
        i = f + 1 < l ? f + 1 : 0;
        g = y.edgeSeparation(b, c, i, e, j);
        if (p > M && p > g) d = -1;
        else if (g > M) d = 1, h = i, p = g;
        else return a[0] = f, M;
        for (;;)
            if (f = -1 == d ? 0 <= h - 1 ? h - 1 : l - 1 : h + 1 < l ? h + 1 : 0, M = y.edgeSeparation(b, c, f, e, j), M > p) h = f, p = M;
            else break;
        a[0] = h;
        return p
    };
    y.findIncidentEdge = function(a, b, c, e, j, l) {
        var M = b.m_normals,
            d = j.m_vertexCount,
            b = j.m_vertices,
            j = j.m_normals,
            p;
        p = c.R;
        var c = M[e],
            M = p.col1.x * c.x + p.col2.x * c.y,
            f = p.col1.y * c.x + p.col2.y * c.y;
        p = l.R;
        c = p.col1.x * M + p.col1.y * f;
        f = p.col2.x * M + p.col2.y * f;
        M = c;
        p = 0;
        for (var g = Number.MAX_VALUE, h = 0; h < d;) {
            var i = h++,
                c = j[i],
                c = M * c.x + f * c.y;
            c < g && (g = c, p = i)
        }
        j = p;
        M = j + 1 < d ? j + 1 : 0;
        d = a[0];
        c = b[j];
        p = l.R;
        d.v.x = l.position.x + (p.col1.x * c.x + p.col2.x * c.y);
        d.v.y = l.position.y + (p.col1.y * c.x + p.col2.y * c.y);
        d.id.features.setReferenceEdge(e);
        d.id.features.setIncidentEdge(j);
        d.id.features.setIncidentVertex(0);
        d = a[1];
        c = b[M];
        p = l.R;
        d.v.x = l.position.x + (p.col1.x * c.x + p.col2.x * c.y);
        d.v.y = l.position.y + (p.col1.y *
            c.x + p.col2.y * c.y);
        d.id.features.setReferenceEdge(e);
        d.id.features.setIncidentEdge(M);
        d.id.features.setIncidentVertex(1)
    };
    y.makeClipPointVector = function() {
        var a = [];
        a[0] = new lb;
        a[1] = new lb;
        return a
    };
    y.collidePolygons = function(a, b, c, e, j) {
        var l;
        a.m_pointCount = 0;
        var d = b.m_radius + e.m_radius,
            f;
        y.s_edgeAO[0] = 0;
        var p = y.findMaxSeparation(y.s_edgeAO, b, c, e, j);
        f = y.s_edgeAO[0];
        if (!(p > d)) {
            var g;
            y.s_edgeBO[0] = 0;
            var h = y.findMaxSeparation(y.s_edgeBO, e, j, b, c);
            g = y.s_edgeBO[0];
            if (!(h > d)) {
                h > 0.98 * p + 0.0010 ? (p = e, e = b, b = j,
                    a.m_type = O.e_faceB, f = 1) : (p = b, b = c, c = j, g = f, a.m_type = O.e_faceA, f = 0);
                j = y.s_incidentEdge;
                y.findIncidentEdge(j, p, b, g, e, c);
                var h = p.m_vertices,
                    e = h[g],
                    i;
                i = g + 1 < p.m_vertexCount ? h[g + 1 | 0] : h[0];
                p = y.s_localTangent;
                p.set(i.x - e.x, i.y - e.y);
                p.normalize();
                h = y.s_localNormal;
                h.x = p.y;
                h.y = -p.x;
                var k = y.s_planePoint;
                k.set(0.5 * (e.x + i.x), 0.5 * (e.y + i.y));
                l = y.s_tangent;
                g = b.R;
                l.x = g.col1.x * p.x + g.col2.x * p.y;
                l.y = g.col1.y * p.x + g.col2.y * p.y;
                var m = y.s_tangent2;
                m.x = -l.x;
                m.y = -l.y;
                p = y.s_normal;
                p.x = l.y;
                p.y = -l.x;
                var n = y.s_v11,
                    o = y.s_v12;
                n.x =
                    b.position.x + (g.col1.x * e.x + g.col2.x * e.y);
                n.y = b.position.y + (g.col1.y * e.x + g.col2.y * e.y);
                o.x = b.position.x + (g.col1.x * i.x + g.col2.x * i.y);
                o.y = b.position.y + (g.col1.y * i.x + g.col2.y * i.y);
                b = p.x * n.x + p.y * n.y;
                g = l.x * o.x + l.y * o.y + d;
                i = y.s_clipPoints1;
                e = y.s_clipPoints2;
                j = y.clipSegmentToLine(i, j, m, -l.x * n.x - l.y * n.y + d);
                if (!(2 > j) && (j = y.clipSegmentToLine(e, i, l, g), !(2 > j))) {
                    a.m_localPlaneNormal.setV(h);
                    a.m_localPoint.setV(k);
                    h = j = 0;
                    for (k = t.b2_maxManifoldPoints; h < k;) g = h++, l = e[g], p.x * l.v.x + p.y * l.v.y - b <= d && (m = a.m_points[j], g = c.R,
                        n = l.v.x - c.position.x, i = l.v.y - c.position.y, m.m_localPoint.x = n * g.col1.x + i * g.col1.y, m.m_localPoint.y = n * g.col2.x + i * g.col2.y, m.m_id.set(l.id), m.m_id.features.setFlip(f), ++j);
                    a.m_pointCount = j
                }
            }
        }
    };
    y.collideCircles = function(a, b, c, e, j) {
        a.m_pointCount = 0;
        var l, d;
        l = c.R;
        d = b.m_p;
        var f = c.position.x + (l.col1.x * d.x + l.col2.x * d.y),
            c = c.position.y + (l.col1.y * d.x + l.col2.y * d.y);
        l = j.R;
        d = e.m_p;
        f = j.position.x + (l.col1.x * d.x + l.col2.x * d.y) - f;
        j = j.position.y + (l.col1.y * d.x + l.col2.y * d.y) - c;
        l = b.m_radius + e.m_radius;
        f * f + j * j > l * l || (a.m_type =
            O.e_circles, a.m_localPoint.setV(b.m_p), a.m_localPlaneNormal.setZero(), a.m_pointCount = 1, a.m_points[0].m_localPoint.setV(e.m_p), a.m_points[0].m_id.setKey(0))
    };
    y.collidePolygonAndCircle = function(a, b, c, e, j) {
        a.m_pointCount = 0;
        var l, d, f, p;
        p = j.R;
        f = e.m_p;
        var g = j.position.y + (p.col1.y * f.x + p.col2.y * f.y);
        l = j.position.x + (p.col1.x * f.x + p.col2.x * f.y) - c.position.x;
        d = g - c.position.y;
        p = c.R;
        c = l * p.col1.x + d * p.col1.y;
        p = l * p.col2.x + d * p.col2.y;
        for (var h = 0, j = -Number.MAX_VALUE, g = b.m_radius + e.m_radius, i = b.m_vertexCount, k = b.m_vertices,
                b = b.m_normals, m = 0; m < i;) {
            var n = m++;
            f = k[n];
            l = c - f.x;
            d = p - f.y;
            f = b[n];
            f = f.x * l + f.y * d;
            if (f > g) return;
            f > j && (j = f, h = n)
        }
        f = h;
        l = k[f];
        i = k[f + 1 < i ? f + 1 : 0];
        if (j < Number.MIN_VALUE) a.m_pointCount = 1, a.m_type = O.e_faceA, a.m_localPlaneNormal.setV(b[h]), a.m_localPoint.x = 0.5 * (l.x + i.x), a.m_localPoint.y = 0.5 * (l.y + i.y);
        else if (j = (c - i.x) * (l.x - i.x) + (p - i.y) * (l.y - i.y), 0 >= (c - l.x) * (i.x - l.x) + (p - l.y) * (i.y - l.y)) {
            if ((c - l.x) * (c - l.x) + (p - l.y) * (p - l.y) > g * g) return;
            a.m_pointCount = 1;
            a.m_type = O.e_faceA;
            a.m_localPlaneNormal.x = c - l.x;
            a.m_localPlaneNormal.y =
                p - l.y;
            a.m_localPlaneNormal.normalize();
            a.m_localPoint.setV(l)
        } else if (0 >= j) {
            if ((c - i.x) * (c - i.x) + (p - i.y) * (p - i.y) > g * g) return;
            a.m_pointCount = 1;
            a.m_type = O.e_faceA;
            a.m_localPlaneNormal.x = c - i.x;
            a.m_localPlaneNormal.y = p - i.y;
            a.m_localPlaneNormal.normalize();
            a.m_localPoint.setV(i)
        } else {
            h = 0.5 * (l.x + i.x);
            l = 0.5 * (l.y + i.y);
            j = (c - h) * b[f].x + (p - l) * b[f].y;
            if (j > g) return;
            a.m_pointCount = 1;
            a.m_type = O.e_faceA;
            a.m_localPlaneNormal.x = b[f].x;
            a.m_localPlaneNormal.y = b[f].y;
            a.m_localPlaneNormal.normalize();
            a.m_localPoint.set(h,
                l)
        }
        a.m_points[0].m_localPoint.setV(e.m_p);
        a.m_points[0].m_id.setKey(0)
    };
    Tb = function() {
        this.m_v1 = new Ma;
        this.m_v2 = new Ma;
        this.m_v3 = new Ma;
        this.m_vertices = [];
        this.m_vertices[0] = this.m_v1;
        this.m_vertices[1] = this.m_v2;
        this.m_vertices[2] = this.m_v3
    };
    h["box2D.collision.B2Simplex"] = Tb;
    Tb.__name__ = ["box2D", "collision", "B2Simplex"];
    Tb.prototype = {
        solve3: function() {
            var a = this.m_v1.w,
                b = this.m_v2.w,
                c = this.m_v3.w,
                e = i.B2Math.subtractVV(b, a),
                j = i.B2Math.dot(a, e),
                l = i.B2Math.dot(b, e),
                j = -j,
                d = i.B2Math.subtractVV(c, a),
                f = i.B2Math.dot(a, d),
                p = i.B2Math.dot(c, d),
                f = -f,
                g = i.B2Math.subtractVV(c, b),
                h = i.B2Math.dot(b, g),
                g = i.B2Math.dot(c, g),
                h = -h,
                d = i.B2Math.crossVV(e, d),
                e = d * i.B2Math.crossVV(b, c),
                c = d * i.B2Math.crossVV(c, a),
                a = d * i.B2Math.crossVV(a, b);
            0 >= j && 0 >= f ? this.m_count = this.m_v1.a = 1 : 0 < l && 0 < j && 0 >= a ? (p = 1 / (l + j), this.m_v1.a = l * p, this.m_v2.a = j * p, this.m_count = 2) : 0 < p && 0 < f && 0 >= c ? (l = 1 / (p + f), this.m_v1.a = p * l, this.m_v3.a = f * l, this.m_count = 2, this.m_v2.set(this.m_v3)) : 0 >= l && 0 >= h ? (this.m_count = this.m_v2.a = 1, this.m_v1.set(this.m_v2)) : 0 >= p &&
                0 >= g ? (this.m_count = this.m_v3.a = 1, this.m_v1.set(this.m_v3)) : 0 < g && 0 < h && 0 >= e ? (l = 1 / (g + h), this.m_v2.a = g * l, this.m_v3.a = h * l, this.m_count = 2, this.m_v1.set(this.m_v3)) : (l = 1 / (e + c + a), this.m_v1.a = e * l, this.m_v2.a = c * l, this.m_v3.a = a * l, this.m_count = 3)
        },
        solve2: function() {
            var a = this.m_v1.w,
                b = this.m_v2.w,
                c = i.B2Math.subtractVV(b, a),
                a = -(a.x * c.x + a.y * c.y);
            0 >= a ? this.m_count = this.m_v1.a = 1 : (b = b.x * c.x + b.y * c.y, 0 >= b ? (this.m_count = this.m_v2.a = 1, this.m_v1.set(this.m_v2)) : (c = 1 / (b + a), this.m_v1.a = b * c, this.m_v2.a = a * c, this.m_count = 2))
        },
        getMetric: function() {
            switch (this.m_count) {
                case 0:
                    return t.b2Assert(!1), 0;
                case 1:
                    return 0;
                case 2:
                    return i.B2Math.subtractVV(this.m_v1.w, this.m_v2.w).length();
                case 3:
                    return i.B2Math.crossVV(i.B2Math.subtractVV(this.m_v2.w, this.m_v1.w), i.B2Math.subtractVV(this.m_v3.w, this.m_v1.w));
                default:
                    return t.b2Assert(!1), 0
            }
        },
        getWitnessPoints: function(a, b) {
            switch (this.m_count) {
                case 0:
                    t.b2Assert(!1);
                    break;
                case 1:
                    a.setV(this.m_v1.wA);
                    b.setV(this.m_v1.wB);
                    break;
                case 2:
                    a.x = this.m_v1.a * this.m_v1.wA.x + this.m_v2.a * this.m_v2.wA.x;
                    a.y = this.m_v1.a * this.m_v1.wA.y + this.m_v2.a * this.m_v2.wA.y;
                    b.x = this.m_v1.a * this.m_v1.wB.x + this.m_v2.a * this.m_v2.wB.x;
                    b.y = this.m_v1.a * this.m_v1.wB.y + this.m_v2.a * this.m_v2.wB.y;
                    break;
                case 3:
                    b.x = a.x = this.m_v1.a * this.m_v1.wA.x + this.m_v2.a * this.m_v2.wA.x + this.m_v3.a * this.m_v3.wA.x;
                    b.y = a.y = this.m_v1.a * this.m_v1.wA.y + this.m_v2.a * this.m_v2.wA.y + this.m_v3.a * this.m_v3.wA.y;
                    break;
                default:
                    t.b2Assert(!1)
            }
        },
        getClosestPoint: function() {
            switch (this.m_count) {
                case 0:
                    return t.b2Assert(!1), new i.B2Vec2;
                case 1:
                    return this.m_v1.w;
                case 2:
                    return new i.B2Vec2(this.m_v1.a * this.m_v1.w.x + this.m_v2.a * this.m_v2.w.x, this.m_v1.a * this.m_v1.w.y + this.m_v2.a * this.m_v2.w.y);
                default:
                    return t.b2Assert(!1), new i.B2Vec2
            }
        },
        getSearchDirection: function() {
            switch (this.m_count) {
                case 1:
                    return this.m_v1.w.getNegative();
                case 2:
                    var a = i.B2Math.subtractVV(this.m_v2.w, this.m_v1.w);
                    return 0 < i.B2Math.crossVV(a, this.m_v1.w.getNegative()) ? i.B2Math.crossFV(1, a) : i.B2Math.crossVF(a, 1);
                default:
                    return t.b2Assert(!1), new i.B2Vec2
            }
        },
        writeCache: function(a) {
            a.metric =
                this.getMetric();
            a.count = this.m_count | 0;
            for (var b = this.m_vertices, c = 0, e = this.m_count; c < e;) {
                var j = c++;
                a.indexA[j] = b[j].indexA | 0;
                a.indexB[j] = b[j].indexB | 0
            }
        },
        readCache: function(a, b, c, e, j) {
            t.b2Assert(0 <= a.count && 3 >= a.count);
            var l, d;
            this.m_count = a.count;
            for (var f = this.m_vertices, p, g = 0, h = this.m_count; g < h;) l = g++, p = f[l], p.indexA = a.indexA[l], p.indexB = a.indexB[l], l = b.getVertex(p.indexA), d = e.getVertex(p.indexB), p.wA = i.B2Math.mulX(c, l), p.wB = i.B2Math.mulX(j, d), p.w = i.B2Math.subtractVV(p.wB, p.wA), p.a = 0;
            if (1 < this.m_count &&
                (a = a.metric, p = this.getMetric(), p < 0.5 * a || 2 * a < p || p < Number.MIN_VALUE)) this.m_count = 0;
            0 == this.m_count && (p = f[0], p.indexA = 0, p.indexB = 0, l = b.getVertex(0), d = e.getVertex(0), p.wA = i.B2Math.mulX(c, l), p.wB = i.B2Math.mulX(j, d), p.w = i.B2Math.subtractVV(p.wB, p.wA), this.m_count = 1)
        },
        __class__: Tb
    };
    Ma = function() {};
    h["box2D.collision.B2SimplexVertex"] = Ma;
    Ma.__name__ = ["box2D", "collision", "B2SimplexVertex"];
    Ma.prototype = {
        set: function(a) {
            this.wA.setV(a.wA);
            this.wB.setV(a.wB);
            this.w.setV(a.w);
            this.a = a.a;
            this.indexA = a.indexA;
            this.indexB = a.indexB
        },
        __class__: Ma
    };
    ga = function() {};
    h["box2D.collision.B2Distance"] = ga;
    ga.__name__ = ["box2D", "collision", "B2Distance"];
    ga.distance = function(a, b, c) {
        ++ga.b2_gjkCalls;
        var e = c.proxyA,
            j = c.proxyB,
            l = c.transformA,
            d = c.transformB,
            f = ga.s_simplex;
        f.readCache(b, e, l, j, d);
        var g = f.m_vertices,
            h = ga.s_saveA,
            k = ga.s_saveB,
            m = 0;
        f.getClosestPoint().lengthSquared();
        for (var n, o = 0; 20 > o;) {
            for (var m = f.m_count, u = 0; u < m;) {
                var q = u++;
                h[q] = g[q].indexA;
                k[q] = g[q].indexB
            }
            switch (f.m_count) {
                case 1:
                    break;
                case 2:
                    f.solve2();
                    break;
                case 3:
                    f.solve3();
                    break;
                default:
                    t.b2Assert(!1)
            }
            if (3 == f.m_count) break;
            n = f.getClosestPoint();
            n.lengthSquared();
            u = f.getSearchDirection();
            if (u.lengthSquared() < Number.MIN_VALUE * Number.MIN_VALUE) break;
            n = g[f.m_count];
            n.indexA = e.getSupport(i.B2Math.mulTMV(l.R, u.getNegative())) | 0;
            n.wA = i.B2Math.mulX(l, e.getVertex(n.indexA));
            n.indexB = j.getSupport(i.B2Math.mulTMV(d.R, u)) | 0;
            n.wB = i.B2Math.mulX(d, j.getVertex(n.indexB));
            n.w = i.B2Math.subtractVV(n.wB, n.wA);
            ++o;
            ++ga.b2_gjkIters;
            for (var r = !1, u = 0; u < m;)
                if (q = u++,
                    n.indexA == h[q] && n.indexB == k[q]) {
                    r = !0;
                    break
                }
            if (r) break;
            ++f.m_count
        }
        ga.b2_gjkMaxIters = i.B2Math.max(ga.b2_gjkMaxIters, o) | 0;
        f.getWitnessPoints(a.pointA, a.pointB);
        a.distance = i.B2Math.subtractVV(a.pointA, a.pointB).length();
        a.iterations = o;
        f.writeCache(b);
        c.useRadii && (b = e.m_radius, j = j.m_radius, a.distance > b + j && a.distance > Number.MIN_VALUE ? (a.distance -= b + j, c = i.B2Math.subtractVV(a.pointB, a.pointA), c.normalize(), a.pointA.x += b * c.x, a.pointA.y += b * c.y, a.pointB.x -= j * c.x, a.pointB.y -= j * c.y) : (n = new i.B2Vec2, n.x = 0.5 * (a.pointA.x +
            a.pointB.x), n.y = 0.5 * (a.pointA.y + a.pointB.y), a.pointA.x = a.pointB.x = n.x, a.pointA.y = a.pointB.y = n.y, a.distance = 0))
    };
    Ub = function() {};
    h["box2D.collision.B2DistanceInput"] = Ub;
    Ub.__name__ = ["box2D", "collision", "B2DistanceInput"];
    Ub.prototype = {
        __class__: Ub
    };
    Vb = function() {
        this.pointA = new i.B2Vec2;
        this.pointB = new i.B2Vec2
    };
    h["box2D.collision.B2DistanceOutput"] = Vb;
    Vb.__name__ = ["box2D", "collision", "B2DistanceOutput"];
    Vb.prototype = {
        __class__: Vb
    };
    nb = function() {
        this.m_vertices = []
    };
    h["box2D.collision.B2DistanceProxy"] =
        nb;
    nb.__name__ = ["box2D", "collision", "B2DistanceProxy"];
    nb.prototype = {
        getVertex: function(a) {
            t.b2Assert(0 <= a && a < this.m_count);
            return this.m_vertices[a]
        },
        getSupportVertex: function(a) {
            for (var b = 0, c = this.m_vertices[0].x * a.x + this.m_vertices[0].y * a.y, e = 1, j = this.m_count; e < j;) {
                var l = e++,
                    d = this.m_vertices[l].x * a.x + this.m_vertices[l].y * a.y;
                d > c && (b = l, c = d)
            }
            return this.m_vertices[b]
        },
        getSupport: function(a) {
            for (var b = 0, c = this.m_vertices[0].x * a.x + this.m_vertices[0].y * a.y, e = 1, j = this.m_count; e < j;) {
                var l = e++,
                    d = this.m_vertices[l].x *
                    a.x + this.m_vertices[l].y * a.y;
                d > c && (b = l, c = d)
            }
            return b
        },
        set: function(a) {
            switch (a.getType()) {
                case s.B2Shape.e_circleShape:
                    a = F.__cast(a, s.B2CircleShape);
                    this.m_vertices = [];
                    this.m_vertices[0] = a.m_p;
                    this.m_count = 1;
                    this.m_radius = a.m_radius;
                    break;
                case s.B2Shape.e_polygonShape:
                    a = F.__cast(a, s.B2PolygonShape);
                    this.m_vertices = a.m_vertices;
                    this.m_count = a.m_vertexCount;
                    this.m_radius = a.m_radius;
                    break;
                default:
                    t.b2Assert(!1)
            }
        },
        __class__: nb
    };
    Wb = function() {
        this.m_freeList = this.m_root = null;
        this.m_insertionCount = this.m_path =
            0
    };
    h["box2D.collision.B2DynamicTree"] = Wb;
    Wb.__name__ = ["box2D", "collision", "B2DynamicTree"];
    Wb.prototype = {
        removeLeaf: function(a) {
            if (a == this.m_root) this.m_root = null;
            else {
                var b = a.parent,
                    c = b.parent,
                    a = b.child1 == a ? b.child2 : b.child1;
                if (null != c) {
                    c.child1 == b ? c.child1 = a : c.child2 = a;
                    a.parent = c;
                    for (this.freeNode(b); null != c;) {
                        b = c.aabb;
                        c.aabb = new wa;
                        c.aabb.combine(c.child1.aabb, c.child2.aabb);
                        if (b.contains(c.aabb)) break;
                        c = c.parent
                    }
                } else this.m_root = a, a.parent = null, this.freeNode(b)
            }
        },
        insertLeaf: function(a) {
            ++this.m_insertionCount;
            if (null == this.m_root) this.m_root = a, this.m_root.parent = null;
            else {
                var b = a.aabb.getCenter(),
                    c = this.m_root;
                if (!1 == c.isLeaf()) {
                    do var e = c.child1,
                        c = c.child2,
                        j = Math.abs((e.aabb.lowerBound.x + e.aabb.upperBound.x) / 2 - b.x) + Math.abs((e.aabb.lowerBound.y + e.aabb.upperBound.y) / 2 - b.y),
                        l = Math.abs((c.aabb.lowerBound.x + c.aabb.upperBound.x) / 2 - b.x) + Math.abs((c.aabb.lowerBound.y + c.aabb.upperBound.y) / 2 - b.y),
                        c = j < l ? e : c; while (!1 == c.isLeaf())
                }
                b = c.parent;
                e = this.allocateNode();
                e.parent = b;
                e.userData = null;
                e.aabb.combine(a.aabb,
                    c.aabb);
                if (null != b) {
                    c.parent.child1 == c ? b.child1 = e : b.child2 = e;
                    e.child1 = c;
                    e.child2 = a;
                    c.parent = e;
                    a.parent = e;
                    do {
                        if (b.aabb.contains(e.aabb)) break;
                        b.aabb.combine(b.child1.aabb, b.child2.aabb);
                        e = b;
                        b = b.parent
                    } while (null != b)
                } else e.child1 = c, e.child2 = a, c.parent = e, this.m_root = a.parent = e
            }
        },
        freeNode: function(a) {
            a.parent = this.m_freeList;
            this.m_freeList = a
        },
        allocateNode: function() {
            if (null != this.m_freeList) {
                var a = this.m_freeList;
                this.m_freeList = a.parent;
                a.parent = null;
                a.child1 = null;
                a.child2 = null;
                return a
            }
            return new Na
        },
        rayCast: function(a, b) {
            if (null != this.m_root) {
                var c = b.p1,
                    e = b.p2,
                    j = i.B2Math.subtractVV(c, e);
                j.normalize();
                var j = i.B2Math.crossFV(1, j),
                    l = i.B2Math.absV(j),
                    d = b.maxFraction,
                    f = new wa,
                    g;
                g = c.x + d * (e.x - c.x);
                d = c.y + d * (e.y - c.y);
                f.lowerBound.x = Math.min(c.x, g);
                f.lowerBound.y = Math.min(c.y, d);
                f.upperBound.x = Math.max(c.x, g);
                f.upperBound.y = Math.max(c.y, d);
                var h = [],
                    k = 0;
                for (h[k++] = this.m_root; 0 < k;)
                    if (g = h[--k], !1 != g.aabb.testOverlap(f)) {
                        var d = g.aabb.getCenter(),
                            m = g.aabb.getExtents();
                        if (!(0 < Math.abs(j.x * (c.x - d.x) + j.y * (c.y -
                                d.y)) - l.x * m.x - l.y * m.y))
                            if (g.isLeaf()) {
                                d = new ob;
                                d.p1 = b.p1;
                                d.p2 = b.p2;
                                d.maxFraction = b.maxFraction;
                                d = a(d, g);
                                if (0 == d) break;
                                g = c.x + d * (e.x - c.x);
                                d = c.y + d * (e.y - c.y);
                                f.lowerBound.x = Math.min(c.x, g);
                                f.lowerBound.y = Math.min(c.y, d);
                                f.upperBound.x = Math.max(c.x, g);
                                f.upperBound.y = Math.max(c.y, d)
                            } else h[k++] = g.child1, h[k++] = g.child2
                    }
            }
        },
        query: function(a, b) {
            if (null != this.m_root) {
                var c = [],
                    e = 0;
                for (c[e++] = this.m_root; 0 < e;) {
                    var j = c[--e];
                    if (j.aabb.testOverlap(b))
                        if (j.isLeaf()) {
                            if (!a(j)) break
                        } else c[e++] = j.child1, c[e++] = j.child2
                }
            }
        },
        getUserData: function(a) {
            return a.userData
        },
        getFatAABB: function(a) {
            return a.aabb
        },
        rebalance: function(a) {
            if (null != this.m_root)
                for (var b = 0; b < a;) {
                    b++;
                    for (var c = this.m_root, e = 0; !1 == c.isLeaf();) c = 0 != (this.m_path >> e & 1) ? c.child2 : c.child1, e = e + 1 & 31;
                    ++this.m_path;
                    this.removeLeaf(c);
                    this.insertLeaf(c)
                }
        },
        moveProxy: function(a, b, c) {
            t.b2Assert(a.isLeaf());
            if (a.aabb.contains(b)) return !1;
            this.removeLeaf(a);
            var e = t.b2_aabbExtension + t.b2_aabbMultiplier * (0 < c.x ? c.x : -c.x),
                c = t.b2_aabbExtension + t.b2_aabbMultiplier * (0 < c.y ?
                    c.y : -c.y);
            a.aabb.lowerBound.x = b.lowerBound.x - e;
            a.aabb.lowerBound.y = b.lowerBound.y - c;
            a.aabb.upperBound.x = b.upperBound.x + e;
            a.aabb.upperBound.y = b.upperBound.y + c;
            this.insertLeaf(a);
            return !0
        },
        destroyProxy: function(a) {
            this.removeLeaf(a);
            this.freeNode(a)
        },
        createProxy: function(a, b) {
            var c = this.allocateNode(),
                e = t.b2_aabbExtension,
                j = t.b2_aabbExtension;
            c.aabb.lowerBound.x = a.lowerBound.x - e;
            c.aabb.lowerBound.y = a.lowerBound.y - j;
            c.aabb.upperBound.x = a.upperBound.x + e;
            c.aabb.upperBound.y = a.upperBound.y + j;
            c.userData =
                b;
            this.insertLeaf(c);
            return c
        },
        __class__: Wb
    };
    Xb = function() {};
    h["box2D.collision.IBroadPhase"] = Xb;
    Xb.__name__ = ["box2D", "collision", "IBroadPhase"];
    Xb.prototype = {
        __class__: Xb
    };
    pb = function() {
        this.m_tree = new Wb;
        this.m_moveBuffer = [];
        this.m_pairBuffer = [];
        this.m_pairCount = 0
    };
    h["box2D.collision.B2DynamicTreeBroadPhase"] = pb;
    pb.__name__ = ["box2D", "collision", "B2DynamicTreeBroadPhase"];
    pb.__interfaces__ = [Xb];
    pb.prototype = {
        unBufferMove: function(a) {
            G.remove(this.m_moveBuffer, a)
        },
        bufferMove: function(a) {
            this.m_moveBuffer[this.m_moveBuffer.length] =
                a
        },
        rebalance: function(a) {
            this.m_tree.rebalance(a)
        },
        validate: function() {},
        rayCast: function(a, b) {
            this.m_tree.rayCast(a, b)
        },
        query: function(a, b) {
            this.m_tree.query(a, b)
        },
        updatePairs: function(a) {
            for (var b = this, c = this.m_pairCount = 0, e = this.m_moveBuffer; c < e.length;) {
                var j = [e[c]];
                ++c;
                var l = function(a) {
                        return function(c) {
                            if (c == a[0]) return !0;
                            b.m_pairCount == b.m_pairBuffer.length && (b.m_pairBuffer[b.m_pairCount] = new Yb);
                            var e = b.m_pairBuffer[b.m_pairCount];
                            c.id < a[0].id ? (e.proxyA = c, e.proxyB = a[0]) : (e.proxyA = a[0], e.proxyB =
                                c);
                            ++b.m_pairCount;
                            return !0
                        }
                    }(j),
                    j = this.m_tree.getFatAABB(j[0]);
                this.m_tree.query(l, j)
            }
            this.m_moveBuffer = [];
            c = !0;
            for (e = 0; c;)
                if (e >= this.m_pairCount) c = !1;
                else {
                    var l = this.m_pairBuffer[e],
                        j = this.m_tree.getUserData(l.proxyA),
                        d = this.m_tree.getUserData(l.proxyB);
                    a(j, d);
                    for (++e; e < this.m_pairCount;) {
                        j = this.m_pairBuffer[e];
                        if (j.proxyA != l.proxyA || j.proxyB != l.proxyB) break;
                        ++e
                    }
                }
        },
        getProxyCount: function() {
            return this.m_proxyCount
        },
        getFatAABB: function(a) {
            return this.m_tree.getFatAABB(a)
        },
        getUserData: function(a) {
            return this.m_tree.getUserData(a)
        },
        testOverlap: function(a, b) {
            var c = this.m_tree.getFatAABB(a),
                e = this.m_tree.getFatAABB(b);
            return c.testOverlap(e)
        },
        moveProxy: function(a, b, c) {
            this.m_tree.moveProxy(a, b, c) && this.bufferMove(a)
        },
        destroyProxy: function(a) {
            this.unBufferMove(a);
            --this.m_proxyCount;
            this.m_tree.destroyProxy(a)
        },
        createProxy: function(a, b) {
            var c = this.m_tree.createProxy(a, b);
            ++this.m_proxyCount;
            this.bufferMove(c);
            return c
        },
        __class__: pb
    };
    Na = function() {
        this.aabb = new wa;
        this.id = Na.currentID++
    };
    h["box2D.collision.B2DynamicTreeNode"] = Na;
    Na.__name__ = ["box2D", "collision", "B2DynamicTreeNode"];
    Na.prototype = {
        isLeaf: function() {
            return null == this.child1
        },
        __class__: Na
    };
    Yb = function() {};
    h["box2D.collision.B2DynamicTreePair"] = Yb;
    Yb.__name__ = ["box2D", "collision", "B2DynamicTreePair"];
    Yb.prototype = {
        __class__: Yb
    };
    O = function() {
        this.m_pointCount = 0;
        this.m_points = [];
        for (var a = 0, b = t.b2_maxManifoldPoints; a < b;) this.m_points[a++] = new Zb;
        this.m_localPlaneNormal = new i.B2Vec2;
        this.m_localPoint = new i.B2Vec2
    };
    h["box2D.collision.B2Manifold"] = O;
    O.__name__ = ["box2D",
        "collision", "B2Manifold"
    ];
    O.prototype = {
        __class__: O
    };
    Zb = function() {
        this.m_localPoint = new i.B2Vec2;
        this.m_id = new mb;
        this.reset()
    };
    h["box2D.collision.B2ManifoldPoint"] = Zb;
    Zb.__name__ = ["box2D", "collision", "B2ManifoldPoint"];
    Zb.prototype = {
        reset: function() {
            this.m_localPoint.setZero();
            this.m_tangentImpulse = this.m_normalImpulse = 0;
            this.m_id.setKey(0)
        },
        __class__: Zb
    };
    ob = function(a, b, c) {
        null == c && (c = 1);
        this.p1 = new i.B2Vec2;
        this.p2 = new i.B2Vec2;
        null != a && this.p1.setV(a);
        null != b && this.p2.setV(b);
        this.maxFraction =
            c
    };
    h["box2D.collision.B2RayCastInput"] = ob;
    ob.__name__ = ["box2D", "collision", "B2RayCastInput"];
    ob.prototype = {
        __class__: ob
    };
    $b = function() {
        this.normal = new i.B2Vec2
    };
    h["box2D.collision.B2RayCastOutput"] = $b;
    $b.__name__ = ["box2D", "collision", "B2RayCastOutput"];
    $b.prototype = {
        __class__: $b
    };
    Y = function() {
        this.m_localPoint = new i.B2Vec2;
        this.m_axis = new i.B2Vec2
    };
    h["box2D.collision.B2SeparationFunction"] = Y;
    Y.__name__ = ["box2D", "collision", "B2SeparationFunction"];
    Y.prototype = {
        evaluate: function(a, b) {
            var c, e, j;
            switch (this.m_type) {
                case Y.e_points:
                    return c =
                        i.B2Math.mulTMV(a.R, this.m_axis), e = i.B2Math.mulTMV(b.R, this.m_axis.getNegative()), c = this.m_proxyA.getSupportVertex(c), e = this.m_proxyB.getSupportVertex(e), c = i.B2Math.mulX(a, c), e = i.B2Math.mulX(b, e), j = (e.x - c.x) * this.m_axis.x + (e.y - c.y) * this.m_axis.y;
                case Y.e_faceA:
                    return j = i.B2Math.mulMV(a.R, this.m_axis), c = i.B2Math.mulX(a, this.m_localPoint), e = i.B2Math.mulTMV(b.R, j.getNegative()), e = this.m_proxyB.getSupportVertex(e), e = i.B2Math.mulX(b, e), j = (e.x - c.x) * j.x + (e.y - c.y) * j.y;
                case Y.e_faceB:
                    return j = i.B2Math.mulMV(b.R,
                        this.m_axis), e = i.B2Math.mulX(b, this.m_localPoint), c = i.B2Math.mulTMV(a.R, j.getNegative()), c = this.m_proxyA.getSupportVertex(c), c = i.B2Math.mulX(a, c), j = (c.x - e.x) * j.x + (c.y - e.y) * j.y;
                default:
                    return t.b2Assert(!1), 0
            }
        },
        initialize: function(a, b, c, e, j) {
            this.m_proxyA = b;
            this.m_proxyB = e;
            b = a.count;
            t.b2Assert(0 < b && 3 > b);
            var l = new i.B2Vec2,
                d = new i.B2Vec2,
                f, g;
            if (1 == b) this.m_type = Y.e_points, l = this.m_proxyA.getVertex(a.indexA[0]), d = this.m_proxyB.getVertex(a.indexB[0]), g = l, f = c.R, l = c.position.x + (f.col1.x * g.x + f.col2.x * g.y),
                c = c.position.y + (f.col1.y * g.x + f.col2.y * g.y), g = d, f = j.R, d = j.position.x + (f.col1.x * g.x + f.col2.x * g.y), j = j.position.y + (f.col1.y * g.x + f.col2.y * g.y), this.m_axis.x = d - l, this.m_axis.y = j - c, this.m_axis.normalize();
            else {
                if (a.indexB[0] == a.indexB[1]) this.m_type = Y.e_faceA, b = this.m_proxyA.getVertex(a.indexA[0]), e = this.m_proxyA.getVertex(a.indexA[1]), d = this.m_proxyB.getVertex(a.indexB[0]), this.m_localPoint.x = 0.5 * (b.x + e.x), this.m_localPoint.y = 0.5 * (b.y + e.y), this.m_axis = i.B2Math.crossVF(i.B2Math.subtractVV(e, b), 1), this.m_axis.normalize(),
                    g = this.m_axis, f = c.R, b = f.col1.x * g.x + f.col2.x * g.y, e = f.col1.y * g.x + f.col2.y * g.y, g = this.m_localPoint, f = c.R, l = c.position.x + (f.col1.x * g.x + f.col2.x * g.y), c = c.position.y + (f.col1.y * g.x + f.col2.y * g.y), g = d, f = j.R, d = j.position.x + (f.col1.x * g.x + f.col2.x * g.y), j = j.position.y + (f.col1.y * g.x + f.col2.y * g.y), a = (d - l) * b + (j - c) * e;
                else if (a.indexA[0] == a.indexA[0]) this.m_type = Y.e_faceB, f = this.m_proxyB.getVertex(a.indexB[0]), g = this.m_proxyB.getVertex(a.indexB[1]), l = this.m_proxyA.getVertex(a.indexA[0]), this.m_localPoint.x = 0.5 * (f.x +
                    g.x), this.m_localPoint.y = 0.5 * (f.y + g.y), this.m_axis = i.B2Math.crossVF(i.B2Math.subtractVV(g, f), 1), this.m_axis.normalize(), g = this.m_axis, f = j.R, b = f.col1.x * g.x + f.col2.x * g.y, e = f.col1.y * g.x + f.col2.y * g.y, g = this.m_localPoint, f = j.R, d = j.position.x + (f.col1.x * g.x + f.col2.x * g.y), j = j.position.y + (f.col1.y * g.x + f.col2.y * g.y), g = l, f = c.R, l = c.position.x + (f.col1.x * g.x + f.col2.x * g.y), c = c.position.y + (f.col1.y * g.x + f.col2.y * g.y), a = (l - d) * b + (c - j) * e;
                else {
                    b = this.m_proxyA.getVertex(a.indexA[0]);
                    e = this.m_proxyA.getVertex(a.indexA[1]);
                    f = this.m_proxyB.getVertex(a.indexB[0]);
                    g = this.m_proxyB.getVertex(a.indexB[1]);
                    i.B2Math.mulX(c, l);
                    l = i.B2Math.mulMV(c.R, i.B2Math.subtractVV(e, b));
                    i.B2Math.mulX(j, d);
                    var a = i.B2Math.mulMV(j.R, i.B2Math.subtractVV(g, f)),
                        j = l.x * l.x + l.y * l.y,
                        c = a.x * a.x + a.y * a.y,
                        h = i.B2Math.subtractVV(a, l),
                        d = l.x * h.x + l.y * h.y,
                        h = a.x * h.x + a.y * h.y,
                        l = l.x * a.x + l.y * a.y,
                        k = j * c - l * l,
                        a = 0;
                    0 != k && (a = i.B2Math.clamp((l * h - d * c) / k, 0, 1));
                    0 > (l * a + h) / c && (a = i.B2Math.clamp((l - d) / j, 0, 1));
                    l = new i.B2Vec2;
                    l.x = b.x + a * (e.x - b.x);
                    l.y = b.y + a * (e.y - b.y);
                    d = new i.B2Vec2;
                    d.x = f.x + a * (g.x - f.x);
                    d.y = f.y + a * (g.y - f.y);
                    0 == a || 1 == a ? (this.m_type = Y.e_faceB, this.m_axis = i.B2Math.crossVF(i.B2Math.subtractVV(g, f), 1), this.m_axis.normalize(), this.m_localPoint = d) : (this.m_type = Y.e_faceA, this.m_axis = i.B2Math.crossVF(i.B2Math.subtractVV(e, b), 1), this.m_localPoint = l)
                }
                0 > a && this.m_axis.negativeSelf()
            }
        },
        __class__: Y
    };
    ac = function() {
        this.indexA = [];
        this.indexB = []
    };
    h["box2D.collision.B2SimplexCache"] = ac;
    ac.__name__ = ["box2D", "collision", "B2SimplexCache"];
    ac.prototype = {
        __class__: ac
    };
    bc = function() {
        this.proxyA =
            new nb;
        this.proxyB = new nb;
        this.sweepA = new i.B2Sweep;
        this.sweepB = new i.B2Sweep
    };
    h["box2D.collision.B2TOIInput"] = bc;
    bc.__name__ = ["box2D", "collision", "B2TOIInput"];
    bc.prototype = {
        __class__: bc
    };
    i.B2Transform = function(a, b) {
        this.position = new i.B2Vec2;
        this.R = new i.B2Mat22;
        null != a && (this.position.setV(a), this.R.setM(b))
    };
    h["box2D.common.math.B2Transform"] = i.B2Transform;
    i.B2Transform.__name__ = ["box2D", "common", "math", "B2Transform"];
    i.B2Transform.prototype = {
        __class__: i.B2Transform
    };
    i.B2Mat22 = function() {
        this.col1 =
            new i.B2Vec2(0, 1);
        this.col2 = new i.B2Vec2(0, 1)
    };
    h["box2D.common.math.B2Mat22"] = i.B2Mat22;
    i.B2Mat22.__name__ = ["box2D", "common", "math", "B2Mat22"];
    i.B2Mat22.prototype = {
        getInverse: function(a) {
            var b = this.col1.x,
                c = this.col2.x,
                e = this.col1.y,
                j = this.col2.y,
                l = b * j - c * e;
            0 != l && (l = 1 / l);
            a.col1.x = l * j;
            a.col2.x = -l * c;
            a.col1.y = -l * e;
            a.col2.y = l * b;
            return a
        },
        setM: function(a) {
            this.col1.setV(a.col1);
            this.col2.setV(a.col2)
        },
        set: function(a) {
            var b = Math.cos(a),
                a = Math.sin(a);
            this.col1.x = b;
            this.col2.x = -a;
            this.col1.y = a;
            this.col2.y =
                b
        },
        __class__: i.B2Mat22
    };
    z = function() {};
    h["box2D.collision.B2TimeOfImpact"] = z;
    z.__name__ = ["box2D", "collision", "B2TimeOfImpact"];
    z.timeOfImpact = function(a) {
        ++z.b2_toiCalls;
        var b = a.proxyA,
            c = a.proxyB,
            e = a.sweepA,
            j = a.sweepB;
        t.b2Assert(e.t0 == j.t0);
        t.b2Assert(1 - e.t0 > Number.MIN_VALUE);
        var l = b.m_radius + c.m_radius,
            a = a.tolerance,
            d = 0,
            f = 0,
            g = 0;
        z.s_cache.count = 0;
        for (z.s_distanceInput.useRadii = !1;;) {
            e.getTransform(z.s_xfA, d);
            j.getTransform(z.s_xfB, d);
            z.s_distanceInput.proxyA = b;
            z.s_distanceInput.proxyB = c;
            z.s_distanceInput.transformA =
                z.s_xfA;
            z.s_distanceInput.transformB = z.s_xfB;
            ga.distance(z.s_distanceOutput, z.s_cache, z.s_distanceInput);
            if (0 >= z.s_distanceOutput.distance) {
                d = 1;
                break
            }
            z.s_fcn.initialize(z.s_cache, b, z.s_xfA, c, z.s_xfB);
            var h = z.s_fcn.evaluate(z.s_xfA, z.s_xfB);
            if (0 >= h) {
                d = 1;
                break
            }
            0 == f && (g = h > l ? i.B2Math.max(l - a, 0.75 * l) : i.B2Math.max(h - a, 0.02 * l));
            if (h - g < 0.5 * a) {
                if (0 == f) {
                    d = 1;
                    break
                }
                break
            }
            var k = d,
                m = d,
                n = 1;
            e.getTransform(z.s_xfA, n);
            j.getTransform(z.s_xfB, n);
            var o = z.s_fcn.evaluate(z.s_xfA, z.s_xfB);
            if (o >= g) {
                d = 1;
                break
            }
            for (var u = 0;;) {
                var q;
                q = 0 != (u & 1) ? m + (g - h) * (n - m) / (o - h) : 0.5 * (m + n);
                e.getTransform(z.s_xfA, q);
                j.getTransform(z.s_xfB, q);
                var r = z.s_fcn.evaluate(z.s_xfA, z.s_xfB);
                if (i.B2Math.abs(r - g) < 0.025 * a) {
                    k = q;
                    break
                }
                r > g ? (m = q, h = r) : (n = q, o = r);
                ++u;
                ++z.b2_toiRootIters;
                if (50 == u) break
            }
            z.b2_toiMaxRootIters = i.B2Math.max(z.b2_toiMaxRootIters, u) | 0;
            if (k < (1 + 100 * Number.MIN_VALUE) * d) break;
            d = k;
            f++;
            ++z.b2_toiIters;
            if (1E3 == f) break
        }
        z.b2_toiMaxIters = i.B2Math.max(z.b2_toiMaxIters, f) | 0;
        return d
    };
    Oa = function() {
        this.m_normal = new i.B2Vec2;
        this.m_points = [];
        for (var a =
                0, b = t.b2_maxManifoldPoints; a < b;) this.m_points[a++] = new i.B2Vec2
    };
    h["box2D.collision.B2WorldManifold"] = Oa;
    Oa.__name__ = ["box2D", "collision", "B2WorldManifold"];
    Oa.prototype = {
        initialize: function(a, b, c, e, j) {
            if (0 != a.m_pointCount) {
                var l, d, f, g, h, i, k;
                switch (a.m_type) {
                    case O.e_circles:
                        d = b.R;
                        l = a.m_localPoint;
                        f = b.position.x + d.col1.x * l.x + d.col2.x * l.y;
                        b = b.position.y + d.col1.y * l.x + d.col2.y * l.y;
                        d = e.R;
                        l = a.m_points[0].m_localPoint;
                        a = e.position.x + d.col1.x * l.x + d.col2.x * l.y;
                        e = e.position.y + d.col1.y * l.x + d.col2.y * l.y;
                        l = a -
                            f;
                        d = e - b;
                        g = l * l + d * d;
                        g > Number.MIN_VALUE * Number.MIN_VALUE ? (g = Math.sqrt(g), this.m_normal.x = l / g, this.m_normal.y = d / g) : (this.m_normal.x = 1, this.m_normal.y = 0);
                        l = b + c * this.m_normal.y;
                        e -= j * this.m_normal.y;
                        this.m_points[0].x = 0.5 * (f + c * this.m_normal.x + (a - j * this.m_normal.x));
                        this.m_points[0].y = 0.5 * (l + e);
                        break;
                    case O.e_faceA:
                        d = b.R;
                        l = a.m_localPlaneNormal;
                        f = d.col1.x * l.x + d.col2.x * l.y;
                        g = d.col1.y * l.x + d.col2.y * l.y;
                        d = b.R;
                        l = a.m_localPoint;
                        h = b.position.x + d.col1.x * l.x + d.col2.x * l.y;
                        i = b.position.y + d.col1.y * l.x + d.col2.y * l.y;
                        this.m_normal.x =
                            f;
                        this.m_normal.y = g;
                        for (var m = 0, n = a.m_pointCount; m < n;) {
                            var o = m++;
                            d = e.R;
                            l = a.m_points[o].m_localPoint;
                            k = e.position.x + d.col1.x * l.x + d.col2.x * l.y;
                            l = e.position.y + d.col1.y * l.x + d.col2.y * l.y;
                            this.m_points[o].x = k + 0.5 * (c - (k - h) * f - (l - i) * g - j) * f;
                            this.m_points[o].y = l + 0.5 * (c - (k - h) * f - (l - i) * g - j) * g
                        }
                        break;
                    case O.e_faceB:
                        d = e.R;
                        l = a.m_localPlaneNormal;
                        f = d.col1.x * l.x + d.col2.x * l.y;
                        g = d.col1.y * l.x + d.col2.y * l.y;
                        d = e.R;
                        l = a.m_localPoint;
                        h = e.position.x + d.col1.x * l.x + d.col2.x * l.y;
                        i = e.position.y + d.col1.y * l.x + d.col2.y * l.y;
                        this.m_normal.x = -f;
                        this.m_normal.y = -g;
                        m = 0;
                        for (n = a.m_pointCount; m < n;) o = m++, d = b.R, l = a.m_points[o].m_localPoint, k = b.position.x + d.col1.x * l.x + d.col2.x * l.y, l = b.position.y + d.col1.y * l.x + d.col2.y * l.y, this.m_points[o].x = k + 0.5 * (j - (k - h) * f - (l - i) * g - c) * f, this.m_points[o].y = l + 0.5 * (j - (k - h) * f - (l - i) * g - c) * g
                }
            }
        },
        __class__: Oa
    };
    s = {};
    s.B2Shape = function() {
        this.m_type = s.B2Shape.e_unknownShape;
        this.m_radius = t.b2_linearSlop
    };
    h["box2D.collision.shapes.B2Shape"] = s.B2Shape;
    s.B2Shape.__name__ = ["box2D", "collision", "shapes", "B2Shape"];
    s.B2Shape.testOverlap =
        function() {
            return !0
        };
    s.B2Shape.prototype = {
        computeSubmergedArea: function() {
            return 0
        },
        computeMass: function() {},
        computeAABB: function() {},
        rayCast: function() {
            return !1
        },
        testPoint: function() {
            return !1
        },
        getType: function() {
            return this.m_type
        },
        set: function(a) {
            this.m_radius = a.m_radius
        },
        copy: function() {
            return null
        },
        __class__: s.B2Shape
    };
    s.B2CircleShape = function(a) {
        null == a && (a = 0);
        s.B2Shape.call(this);
        this.m_p = new i.B2Vec2;
        this.m_type = s.B2Shape.e_circleShape;
        this.m_radius = a
    };
    h["box2D.collision.shapes.B2CircleShape"] =
        s.B2CircleShape;
    s.B2CircleShape.__name__ = ["box2D", "collision", "shapes", "B2CircleShape"];
    s.B2CircleShape.__super__ = s.B2Shape;
    s.B2CircleShape.prototype = w(s.B2Shape.prototype, {
        computeSubmergedArea: function(a, b, c, e) {
            var c = i.B2Math.mulX(c, this.m_p),
                j = -(i.B2Math.dot(a, c) - b);
            if (j < -this.m_radius + Number.MIN_VALUE) return 0;
            if (j > this.m_radius) return e.setV(c), Math.PI * this.m_radius * this.m_radius;
            var b = this.m_radius * this.m_radius,
                l = j * j,
                j = b * (Math.asin(j / this.m_radius) + Math.PI / 2) + j * Math.sqrt(b - l),
                b = -2 / 3 * Math.pow(b -
                    l, 1.5) / j;
            e.x = c.x + a.x * b;
            e.y = c.y + a.y * b;
            return j
        },
        computeMass: function(a, b) {
            a.mass = b * t.b2_pi * this.m_radius * this.m_radius;
            a.center.setV(this.m_p);
            a.I = a.mass * (0.5 * this.m_radius * this.m_radius + (this.m_p.x * this.m_p.x + this.m_p.y * this.m_p.y))
        },
        computeAABB: function(a, b) {
            var c = b.R,
                e = b.position.x + (c.col1.x * this.m_p.x + c.col2.x * this.m_p.y),
                c = b.position.y + (c.col1.y * this.m_p.x + c.col2.y * this.m_p.y);
            a.lowerBound.set(e - this.m_radius, c - this.m_radius);
            a.upperBound.set(e + this.m_radius, c + this.m_radius)
        },
        rayCast: function(a,
            b, c) {
            var e = c.R,
                j = b.p1.x - (c.position.x + (e.col1.x * this.m_p.x + e.col2.x * this.m_p.y)),
                c = b.p1.y - (c.position.y + (e.col1.y * this.m_p.x + e.col2.y * this.m_p.y)),
                e = b.p2.x - b.p1.x,
                l = b.p2.y - b.p1.y,
                d = j * e + c * l,
                f = e * e + l * l,
                g = d * d - f * (j * j + c * c - this.m_radius * this.m_radius);
            if (0 > g || f < Number.MIN_VALUE) return !1;
            d = -(d + Math.sqrt(g));
            return 0 <= d && d <= b.maxFraction * f ? (d /= f, a.fraction = d, a.normal.x = j + d * e, a.normal.y = c + d * l, a.normal.normalize(), !0) : !1
        },
        testPoint: function(a, b) {
            var c = a.R,
                e = a.position.x + (c.col1.x * this.m_p.x + c.col2.x * this.m_p.y),
                c = a.position.y + (c.col1.y * this.m_p.x + c.col2.y * this.m_p.y),
                e = b.x - e,
                c = b.y - c;
            return e * e + c * c <= this.m_radius * this.m_radius
        },
        set: function(a) {
            s.B2Shape.prototype.set.call(this, a);
            F.__instanceof(a, s.B2CircleShape) && this.m_p.setV(F.__cast(a, s.B2CircleShape).m_p)
        },
        copy: function() {
            var a = new s.B2CircleShape;
            a.set(this);
            return a
        },
        __class__: s.B2CircleShape
    });
    s.B2EdgeShape = function() {};
    h["box2D.collision.shapes.B2EdgeShape"] = s.B2EdgeShape;
    s.B2EdgeShape.__name__ = ["box2D", "collision", "shapes", "B2EdgeShape"];
    s.B2EdgeShape.__super__ =
        s.B2Shape;
    s.B2EdgeShape.prototype = w(s.B2Shape.prototype, {
        computeSubmergedArea: function(a, b, c, e) {
            var j = new i.B2Vec2(a.x * b, a.y * b),
                l = i.B2Math.mulX(c, this.m_v1),
                c = i.B2Math.mulX(c, this.m_v2),
                d = i.B2Math.dot(a, l) - b,
                a = i.B2Math.dot(a, c) - b;
            if (0 < d) {
                if (0 < a) return 0;
                l.x = -a / (d - a) * l.x + d / (d - a) * c.x;
                l.y = -a / (d - a) * l.y + d / (d - a) * c.y
            } else 0 < a && (c.x = -a / (d - a) * l.x + d / (d - a) * c.x, c.y = -a / (d - a) * l.y + d / (d - a) * c.y);
            e.x = (j.x + l.x + c.x) / 3;
            e.y = (j.y + l.y + c.y) / 3;
            return 0.5 * ((l.x - j.x) * (c.y - j.y) - (l.y - j.y) * (c.x - j.x))
        },
        computeMass: function(a) {
            a.mass =
                0;
            a.center.setV(this.m_v1);
            a.I = 0
        },
        computeAABB: function(a, b) {
            var c = b.R,
                e = b.position.x + (c.col1.x * this.m_v1.x + c.col2.x * this.m_v1.y),
                j = b.position.y + (c.col1.y * this.m_v1.x + c.col2.y * this.m_v1.y),
                l = b.position.x + (c.col1.x * this.m_v2.x + c.col2.x * this.m_v2.y),
                c = b.position.y + (c.col1.y * this.m_v2.x + c.col2.y * this.m_v2.y);
            e < l ? (a.lowerBound.x = e, a.upperBound.x = l) : (a.lowerBound.x = l, a.upperBound.x = e);
            j < c ? (a.lowerBound.y = j, a.upperBound.y = c) : (a.lowerBound.y = c, a.upperBound.y = j)
        },
        rayCast: function(a, b, c) {
            var e, j = b.p2.x - b.p1.x,
                l = b.p2.y - b.p1.y;
            e = c.R;
            var d = c.position.x + (e.col1.x * this.m_v1.x + e.col2.x * this.m_v1.y),
                f = c.position.y + (e.col1.y * this.m_v1.x + e.col2.y * this.m_v1.y),
                g = c.position.y + (e.col1.y * this.m_v2.x + e.col2.y * this.m_v2.y) - f,
                c = -(c.position.x + (e.col1.x * this.m_v2.x + e.col2.x * this.m_v2.y) - d);
            e = 100 * Number.MIN_VALUE;
            var h = -(j * g + l * c);
            if (h > e) {
                var d = b.p1.x - d,
                    i = b.p1.y - f,
                    f = d * g + i * c;
                if (0 <= f && f <= b.maxFraction * h && (b = -j * i + l * d, -e * h <= b && b <= h * (1 + e))) return a.fraction = f / h, b = Math.sqrt(g * g + c * c), a.normal.x = g / b, a.normal.y = c / b, !0
            }
            return !1
        },
        testPoint: function() {
            return !1
        },
        __class__: s.B2EdgeShape
    });
    s.B2MassData = function() {
        this.mass = 0;
        this.center = new i.B2Vec2(0, 0);
        this.I = 0
    };
    h["box2D.collision.shapes.B2MassData"] = s.B2MassData;
    s.B2MassData.__name__ = ["box2D", "collision", "shapes", "B2MassData"];
    s.B2MassData.prototype = {
        __class__: s.B2MassData
    };
    s.B2PolygonShape = function() {
        s.B2Shape.call(this);
        this.m_type = s.B2Shape.e_polygonShape;
        this.m_centroid = new i.B2Vec2;
        this.m_vertices = [];
        this.m_normals = []
    };
    h["box2D.collision.shapes.B2PolygonShape"] = s.B2PolygonShape;
    s.B2PolygonShape.__name__ = ["box2D", "collision", "shapes", "B2PolygonShape"];
    s.B2PolygonShape.__super__ = s.B2Shape;
    s.B2PolygonShape.prototype = w(s.B2Shape.prototype, {
        reserve: function(a) {
            for (var b = this.m_vertices.length; b < a;) {
                var c = b++;
                this.m_vertices[c] = new i.B2Vec2;
                this.m_normals[c] = new i.B2Vec2
            }
        },
        computeSubmergedArea: function(a, b, c, e) {
            for (var j = i.B2Math.mulTMV(c.R, a), l = b - i.B2Math.dot(a, c.position), d = [], f = 0, a = b = -1, g = !1, h = 0, k = this.m_vertexCount; h < k;) {
                var m = h++;
                d[m] = i.B2Math.dot(j, this.m_vertices[m]) - l;
                var n = d[m] < -Number.MIN_VALUE;
                0 < m && (n ? g || (b = m - 1, f++) : g && (a = m - 1, f++));
                g = n
            }
            switch (f) {
                case 0:
                    return g ? (a = new s.B2MassData, this.computeMass(a, 1), e.setV(i.B2Math.mulX(c, a.center)), a.mass) : 0;
                case 1:
                    -1 == b ? b = this.m_vertexCount - 1 : a = this.m_vertexCount - 1
            }
            l = (b + 1) % this.m_vertexCount;
            j = (a + 1) % this.m_vertexCount;
            f = (0 - d[b]) / (d[l] - d[b]);
            d = (0 - d[a]) / (d[j] - d[a]);
            b = new i.B2Vec2(this.m_vertices[b].x * (1 - f) + this.m_vertices[l].x * f, this.m_vertices[b].y * (1 - f) + this.m_vertices[l].y * f);
            a = new i.B2Vec2(this.m_vertices[a].x * (1 - d) +
                this.m_vertices[j].x * d, this.m_vertices[a].y * (1 - d) + this.m_vertices[j].y * d);
            d = 0;
            f = new i.B2Vec2;
            for (g = this.m_vertices[l]; l != j;) l = (l + 1) % this.m_vertexCount, h = l == j ? a : this.m_vertices[l], k = 0.5 * ((g.x - b.x) * (h.y - b.y) - (g.y - b.y) * (h.x - b.x)), d += k, f.x += k * (b.x + g.x + h.x) / 3, f.y += k * (b.y + g.y + h.y) / 3, g = h;
            f.multiply(1 / d);
            e.setV(i.B2Math.mulX(c, f));
            return d
        },
        computeMass: function(a, b) {
            if (2 == this.m_vertexCount) a.center.x = 0.5 * (this.m_vertices[0].x + this.m_vertices[1].x), a.center.y = 0.5 * (this.m_vertices[0].y + this.m_vertices[1].y),
                a.mass = 0, a.I = 0;
            else {
                for (var c = 0, e = 0, j = 0, l = 0, d = 1 / 3, f = 0, g = this.m_vertexCount; f < g;) var h = f++,
                    i = this.m_vertices[h],
                    k = h + 1 < this.m_vertexCount ? this.m_vertices[h + 1 | 0] : this.m_vertices[0],
                    m = i.x - 0,
                    n = i.y - 0,
                    o = k.x - 0,
                    u = k.y - 0,
                    h = m * u - n * o,
                    q = 0.5 * h,
                    j = j + q,
                    c = c + q * d * (0 + i.x + k.x),
                    e = e + q * d * (0 + i.y + k.y),
                    i = m,
                    l = l + h * (d * (0.25 * (i * i + o * i + o * o) + (0 * i + 0 * o)) + 0 + (d * (0.25 * (n * n + u * n + u * u) + (0 * n + 0 * u)) + 0));
                a.mass = b * j;
                a.center.set(c * (1 / j), e * (1 / j));
                a.I = b * l
            }
        },
        computeAABB: function(a, b) {
            for (var c = b.R, e = this.m_vertices[0], j = b.position.x + (c.col1.x * e.x + c.col2.x *
                    e.y), l = b.position.y + (c.col1.y * e.x + c.col2.y * e.y), d = j, f = l, g = 1, h = this.m_vertexCount; g < h;) var e = this.m_vertices[g++],
                i = b.position.x + (c.col1.x * e.x + c.col2.x * e.y),
                e = b.position.y + (c.col1.y * e.x + c.col2.y * e.y),
                j = j < i ? j : i,
                l = l < e ? l : e,
                d = d > i ? d : i,
                f = f > e ? f : e;
            a.lowerBound.x = j - this.m_radius;
            a.lowerBound.y = l - this.m_radius;
            a.upperBound.x = d + this.m_radius;
            a.upperBound.y = f + this.m_radius
        },
        rayCast: function(a, b, c) {
            var e = 0,
                j = b.maxFraction,
                l, d, f, g;
            l = b.p1.x - c.position.x;
            d = b.p1.y - c.position.y;
            f = c.R;
            var h = l * f.col1.x + d * f.col1.y,
                i = l *
                f.col2.x + d * f.col2.y;
            l = b.p2.x - c.position.x;
            d = b.p2.y - c.position.y;
            f = c.R;
            b = l * f.col1.x + d * f.col1.y - h;
            f = l * f.col2.x + d * f.col2.y - i;
            for (var k = -1, m = 0, n = this.m_vertexCount; m < n;) {
                var o = m++;
                g = this.m_vertices[o];
                l = g.x - h;
                d = g.y - i;
                g = this.m_normals[o];
                l = g.x * l + g.y * d;
                d = g.x * b + g.y * f;
                if (0 == d) {
                    if (0 > l) return !1
                } else 0 > d && l < e * d ? (e = l / d, k = o) : 0 < d && l < j * d && (j = l / d);
                if (j < e - Number.MIN_VALUE) return !1
            }
            return 0 <= k ? (a.fraction = e, f = c.R, g = this.m_normals[k], a.normal.x = f.col1.x * g.x + f.col2.x * g.y, a.normal.y = f.col1.y * g.x + f.col2.y * g.y, !0) : !1
        },
        testPoint: function(a, b) {
            var c;
            c = a.R;
            for (var e = b.x - a.position.x, j = b.y - a.position.y, d = e * c.col1.x + j * c.col1.y, f = e * c.col2.x + j * c.col2.y, g = 0, h = this.m_vertexCount; g < h;) {
                var i = g++;
                c = this.m_vertices[i];
                e = d - c.x;
                j = f - c.y;
                c = this.m_normals[i];
                if (0 < c.x * e + c.y * j) return !1
            }
            return !0
        },
        set: function(a) {
            s.B2Shape.prototype.set.call(this, a);
            if (F.__instanceof(a, s.B2PolygonShape)) {
                a = F.__cast(a, s.B2PolygonShape);
                this.m_centroid.setV(a.m_centroid);
                this.m_vertexCount = a.m_vertexCount;
                this.reserve(this.m_vertexCount);
                for (var b = 0,
                        c = this.m_vertexCount; b < c;) {
                    var e = b++;
                    this.m_vertices[e].setV(a.m_vertices[e]);
                    this.m_normals[e].setV(a.m_normals[e])
                }
            }
        },
        copy: function() {
            var a = new s.B2PolygonShape;
            a.set(this);
            return a
        },
        __class__: s.B2PolygonShape
    });
    lc = function() {};
    h["box2D.common.B2Color"] = lc;
    lc.__name__ = ["box2D", "common", "B2Color"];
    lc.prototype = {
        getColor: function() {
            return this._r << 16 | this._g << 8 | this._b
        },
        setB: function(a) {
            return this._b = 255 * i.B2Math.clamp(a, 0, 1) | 0
        },
        setG: function(a) {
            return this._g = 255 * i.B2Math.clamp(a, 0, 1) | 0
        },
        setR: function(a) {
            return this._r =
                255 * i.B2Math.clamp(a, 0, 1) | 0
        },
        __class__: lc
    };
    t = function() {};
    h["box2D.common.B2Settings"] = t;
    t.__name__ = ["box2D", "common", "B2Settings"];
    t.b2MixFriction = function(a, b) {
        return Math.sqrt(a * b)
    };
    t.b2MixRestitution = function(a, b) {
        return a > b ? a : b
    };
    t.b2Assert = function(a) {
        if (!a) throw "Assertion Failed";
    };
    i.B2Math = function() {};
    h["box2D.common.math.B2Math"] = i.B2Math;
    i.B2Math.__name__ = ["box2D", "common", "math", "B2Math"];
    i.B2Math.dot = function(a, b) {
        return a.x * b.x + a.y * b.y
    };
    i.B2Math.crossVV = function(a, b) {
        return a.x * b.y - a.y *
            b.x
    };
    i.B2Math.crossVF = function(a, b) {
        return new i.B2Vec2(b * a.y, -b * a.x)
    };
    i.B2Math.crossFV = function(a, b) {
        return new i.B2Vec2(-a * b.y, a * b.x)
    };
    i.B2Math.mulMV = function(a, b) {
        return new i.B2Vec2(a.col1.x * b.x + a.col2.x * b.y, a.col1.y * b.x + a.col2.y * b.y)
    };
    i.B2Math.mulTMV = function(a, b) {
        return new i.B2Vec2(i.B2Math.dot(b, a.col1), i.B2Math.dot(b, a.col2))
    };
    i.B2Math.mulX = function(a, b) {
        var c = i.B2Math.mulMV(a.R, b);
        c.x += a.position.x;
        c.y += a.position.y;
        return c
    };
    i.B2Math.subtractVV = function(a, b) {
        return new i.B2Vec2(a.x - b.x,
            a.y - b.y)
    };
    i.B2Math.abs = function(a) {
        return 0 < a ? a : -a
    };
    i.B2Math.absV = function(a) {
        return new i.B2Vec2(i.B2Math.abs(a.x), i.B2Math.abs(a.y))
    };
    i.B2Math.min = function(a, b) {
        return a < b ? a : b
    };
    i.B2Math.max = function(a, b) {
        return a > b ? a : b
    };
    i.B2Math.clamp = function(a, b, c) {
        return a < b ? b : a > c ? c : a
    };
    i.B2Sweep = function() {
        this.localCenter = new i.B2Vec2;
        this.c0 = new i.B2Vec2;
        this.c = new i.B2Vec2
    };
    h["box2D.common.math.B2Sweep"] = i.B2Sweep;
    i.B2Sweep.__name__ = ["box2D", "common", "math", "B2Sweep"];
    i.B2Sweep.prototype = {
        advance: function(a) {
            if (this.t0 <
                a && 1 - this.t0 > Number.MIN_VALUE) {
                var b = (a - this.t0) / (1 - this.t0);
                this.c0.x = (1 - b) * this.c0.x + b * this.c.x;
                this.c0.y = (1 - b) * this.c0.y + b * this.c.y;
                this.a0 = (1 - b) * this.a0 + b * this.a;
                this.t0 = a
            }
        },
        getTransform: function(a, b) {
            a.position.x = (1 - b) * this.c0.x + b * this.c.x;
            a.position.y = (1 - b) * this.c0.y + b * this.c.y;
            a.R.set((1 - b) * this.a0 + b * this.a);
            var c = a.R;
            a.position.x -= c.col1.x * this.localCenter.x + c.col2.x * this.localCenter.y;
            a.position.y -= c.col1.y * this.localCenter.x + c.col2.y * this.localCenter.y
        },
        set: function(a) {
            this.localCenter.setV(a.localCenter);
            this.c0.setV(a.c0);
            this.c.setV(a.c);
            this.a0 = a.a0;
            this.a = a.a;
            this.t0 = a.t0
        },
        __class__: i.B2Sweep
    };
    v = void 0;
    za = void 0;
    I = void 0;
    kb = void 0;
    Ja = void 0;
    Pb = void 0;
    fa = void 0;
    Qb = void 0;
    k = void 0;
    kc = void 0;
    Ka = void 0;
    Rb = void 0;
    ua = void 0;
    La = void 0;
    E = void 0;
    va = void 0;
    v = function(a, b) {
        this.m_xf = new i.B2Transform;
        this.m_sweep = new i.B2Sweep;
        this.m_linearVelocity = new i.B2Vec2;
        this.m_force = new i.B2Vec2;
        this.m_flags = 0;
        a.bullet && (this.m_flags |= v.e_bulletFlag);
        a.fixedRotation && (this.m_flags |= v.e_fixedRotationFlag);
        a.allowSleep &&
            (this.m_flags |= v.e_allowSleepFlag);
        a.awake && (this.m_flags |= v.e_awakeFlag);
        a.active && (this.m_flags |= v.e_activeFlag);
        this.m_world = b;
        this.m_xf.position.setV(a.position);
        this.m_xf.R.set(a.angle);
        this.m_sweep.localCenter.setZero();
        this.m_sweep.t0 = 1;
        this.m_sweep.a0 = this.m_sweep.a = a.angle;
        var c = this.m_xf.R,
            e = this.m_sweep.localCenter;
        this.m_sweep.c.x = c.col1.x * e.x + c.col2.x * e.y;
        this.m_sweep.c.y = c.col1.y * e.x + c.col2.y * e.y;
        this.m_sweep.c.x += this.m_xf.position.x;
        this.m_sweep.c.y += this.m_xf.position.y;
        this.m_sweep.c0.setV(this.m_sweep.c);
        this.m_contactList = this.m_controllerList = this.m_jointList = null;
        this.m_controllerCount = 0;
        this.m_next = this.m_prev = null;
        this.m_linearVelocity.setV(a.linearVelocity);
        this.m_angularVelocity = a.angularVelocity;
        this.m_linearDamping = a.linearDamping;
        this.m_angularDamping = a.angularDamping;
        this.m_force.set(0, 0);
        this.m_sleepTime = this.m_torque = 0;
        this.m_type = a.type;
        this.m_invMass = this.m_type == v.b2_dynamicBody ? this.m_mass = 1 : this.m_mass = 0;
        this.m_invI = this.m_I = 0;
        this.m_inertiaScale = a.inertiaScale;
        this.m_userData = a.userData;
        this.m_fixtureList = null;
        this.m_fixtureCount = 0
    };
    h["box2D.dynamics.B2Body"] = v;
    v.__name__ = ["box2D", "dynamics", "B2Body"];
    v.prototype = {
        advance: function(a) {
            this.m_sweep.advance(a);
            this.m_sweep.c.setV(this.m_sweep.c0);
            this.m_sweep.a = this.m_sweep.a0;
            this.synchronizeTransform()
        },
        shouldCollide: function(a) {
            if (this.m_type != v.b2_dynamicBody && a.m_type != v.b2_dynamicBody) return !1;
            for (var b = this.m_jointList; null != b;) {
                if (b.other == a && !1 == b.joint.m_collideConnected) return !1;
                b = b.next
            }
            return !0
        },
        synchronizeTransform: function() {
            this.m_xf.R.set(this.m_sweep.a);
            var a = this.m_xf.R,
                b = this.m_sweep.localCenter;
            this.m_xf.position.x = this.m_sweep.c.x - (a.col1.x * b.x + a.col2.x * b.y);
            this.m_xf.position.y = this.m_sweep.c.y - (a.col1.y * b.x + a.col2.y * b.y)
        },
        synchronizeFixtures: function() {
            var a = v.s_xf1;
            a.R.set(this.m_sweep.a0);
            var b = a.R,
                c = this.m_sweep.localCenter;
            a.position.x = this.m_sweep.c0.x - (b.col1.x * c.x + b.col2.x * c.y);
            a.position.y = this.m_sweep.c0.y - (b.col1.y * c.x + b.col2.y * c.y);
            c = this.m_world.m_contactManager.m_broadPhase;
            for (b = this.m_fixtureList; null != b;) b.synchronize(c, a, this.m_xf),
                b = b.m_next
        },
        setUserData: function(a) {
            this.m_userData = a
        },
        getUserData: function() {
            return this.m_userData
        },
        getNext: function() {
            return this.m_next
        },
        getContactList: function() {
            return this.m_contactList
        },
        isActive: function() {
            return (this.m_flags & v.e_activeFlag) == v.e_activeFlag
        },
        setFixedRotation: function(a) {
            this.m_flags = a ? this.m_flags | v.e_fixedRotationFlag : this.m_flags & ~v.e_fixedRotationFlag;
            this.resetMassData()
        },
        isAwake: function() {
            return (this.m_flags & v.e_awakeFlag) == v.e_awakeFlag
        },
        setAwake: function(a) {
            a ? (this.m_flags |=
                v.e_awakeFlag, this.m_sleepTime = 0) : (this.m_flags &= ~v.e_awakeFlag, this.m_sleepTime = 0, this.m_linearVelocity.setZero(), this.m_angularVelocity = 0, this.m_force.setZero(), this.m_torque = 0)
        },
        isBullet: function() {
            return (this.m_flags & v.e_bulletFlag) == v.e_bulletFlag
        },
        getType: function() {
            return this.m_type
        },
        getWorldPoint: function(a) {
            var b = this.m_xf.R,
                a = new i.B2Vec2(b.col1.x * a.x + b.col2.x * a.y, b.col1.y * a.x + b.col2.y * a.y);
            a.x += this.m_xf.position.x;
            a.y += this.m_xf.position.y;
            return a
        },
        resetMassData: function() {
            this.m_invI =
                this.m_I = this.m_invMass = this.m_mass = 0;
            this.m_sweep.localCenter.setZero();
            if (!(this.m_type == v.b2_staticBody || this.m_type == v.b2_kinematicBody)) {
                for (var a = i.B2Vec2.make(0, 0), b = this.m_fixtureList; null != b;)
                    if (0 != b.m_density) {
                        var c = b.getMassData();
                        this.m_mass += c.mass;
                        a.x += c.center.x * c.mass;
                        a.y += c.center.y * c.mass;
                        this.m_I += c.I;
                        b = b.m_next
                    }
                0 < this.m_mass ? (this.m_invMass = 1 / this.m_mass, a.x *= this.m_invMass, a.y *= this.m_invMass) : this.m_invMass = this.m_mass = 1;
                0 < this.m_I && 0 == (this.m_flags & v.e_fixedRotationFlag) ? (this.m_I -=
                    this.m_mass * (a.x * a.x + a.y * a.y), this.m_I *= this.m_inertiaScale, t.b2Assert(0 < this.m_I), this.m_invI = 1 / this.m_I) : this.m_invI = this.m_I = 0;
                b = this.m_sweep.c.copy();
                this.m_sweep.localCenter.setV(a);
                this.m_sweep.c0.setV(i.B2Math.mulX(this.m_xf, this.m_sweep.localCenter));
                this.m_sweep.c.setV(this.m_sweep.c0);
                this.m_linearVelocity.x += this.m_angularVelocity * -(this.m_sweep.c.y - b.y);
                this.m_linearVelocity.y += this.m_angularVelocity * (this.m_sweep.c.x - b.x)
            }
        },
        applyImpulse: function(a, b) {
            this.m_type == v.b2_dynamicBody && (!1 ==
                this.isAwake() && this.setAwake(!0), this.m_linearVelocity.x += this.m_invMass * a.x, this.m_linearVelocity.y += this.m_invMass * a.y, this.m_angularVelocity += this.m_invI * ((b.x - this.m_sweep.c.x) * a.y - (b.y - this.m_sweep.c.y) * a.x))
        },
        setAngularVelocity: function(a) {
            this.m_type != v.b2_staticBody && (this.m_angularVelocity = a)
        },
        getLinearVelocity: function() {
            return this.m_linearVelocity
        },
        getWorldCenter: function() {
            return this.m_sweep.c
        },
        getAngle: function() {
            return this.m_sweep.a
        },
        getPosition: function() {
            return this.m_xf.position
        },
        getTransform: function() {
            return this.m_xf
        },
        createFixture: function(a) {
            if (!0 == this.m_world.isLocked()) return null;
            var b = new za;
            b.create(this, this.m_xf, a);
            0 != (this.m_flags & v.e_activeFlag) && b.createProxy(this.m_world.m_contactManager.m_broadPhase, this.m_xf);
            b.m_next = this.m_fixtureList;
            this.m_fixtureList = b;
            ++this.m_fixtureCount;
            b.m_body = this;
            0 < b.m_density && this.resetMassData();
            this.m_world.m_flags |= I.e_newFixture;
            return b
        },
        __class__: v
    };
    kb = function() {
        this.position = new i.B2Vec2;
        this.linearVelocity = new i.B2Vec2;
        this.userData = null;
        this.angularDamping = this.linearDamping = this.angularVelocity = this.angle = 0;
        this.awake = this.allowSleep = !0;
        this.bullet = this.fixedRotation = !1;
        this.type = v.b2_staticBody;
        this.active = !0;
        this.inertiaScale = 1
    };
    h["box2D.dynamics.B2BodyDef"] = kb;
    kb.__name__ = ["box2D", "dynamics", "B2BodyDef"];
    kb.prototype = {
        __class__: kb
    };
    Ja = function() {};
    h["box2D.dynamics.B2ContactFilter"] = Ja;
    Ja.__name__ = ["box2D", "dynamics", "B2ContactFilter"];
    Ja.prototype = {
        shouldCollide: function(a, b) {
            var c = a.getFilterData(),
                e = b.getFilterData();
            return c.groupIndex == e.groupIndex && 0 != c.groupIndex ? 0 < c.groupIndex : 0 != (c.maskBits & e.categoryBits) && 0 != (c.categoryBits & e.maskBits)
        },
        __class__: Ja
    };
    Pb = function() {
        this.normalImpulses = [];
        this.tangentImpulses = []
    };
    h["box2D.dynamics.B2ContactImpulse"] = Pb;
    Pb.__name__ = ["box2D", "dynamics", "B2ContactImpulse"];
    Pb.prototype = {
        __class__: Pb
    };
    fa = function() {};
    h["box2D.dynamics.B2ContactListener"] = fa;
    fa.__name__ = ["box2D", "dynamics", "B2ContactListener"];
    fa.prototype = {
        postSolve: function() {},
        preSolve: function() {},
        endContact: function() {},
        beginContact: function() {},
        __class__: fa
    };
    Qb = function() {
        this.m_world = null;
        this.m_contactCount = 0;
        this.m_contactFilter = Ja.b2_defaultFilter;
        this.m_contactListener = fa.b2_defaultListener;
        this.m_contactFactory = new k.B2ContactFactory(this.m_allocator);
        this.m_broadPhase = new pb
    };
    h["box2D.dynamics.B2ContactManager"] = Qb;
    Qb.__name__ = ["box2D", "dynamics", "B2ContactManager"];
    Qb.prototype = {
        collide: function() {
            for (var a = this.m_world.m_contactList; null != a;) {
                var b = a.getFixtureA(),
                    c = a.getFixtureB(),
                    e = b.getBody(),
                    j = c.getBody();
                if (!1 == e.isAwake() && !1 == j.isAwake()) a = a.getNext();
                else {
                    if (0 != (a.m_flags & k.B2Contact.e_filterFlag)) {
                        if (!1 == j.shouldCollide(e)) {
                            b = a;
                            a = b.getNext();
                            this.destroy(b);
                            continue
                        }
                        if (!1 == this.m_contactFilter.shouldCollide(b, c)) {
                            b = a;
                            a = b.getNext();
                            this.destroy(b);
                            continue
                        }
                        a.m_flags &= ~k.B2Contact.e_filterFlag
                    }!1 == this.m_broadPhase.testOverlap(b.m_proxy, c.m_proxy) ? (b = a, a = b.getNext(), this.destroy(b)) : (a.update(this.m_contactListener), a = a.getNext())
                }
            }
        },
        destroy: function(a) {
            var b = a.getFixtureA(),
                c = a.getFixtureB(),
                b =
                b.getBody(),
                c = c.getBody();
            a.isTouching() && this.m_contactListener.endContact(a);
            null != a.m_prev && (a.m_prev.m_next = a.m_next);
            null != a.m_next && (a.m_next.m_prev = a.m_prev);
            a == this.m_world.m_contactList && (this.m_world.m_contactList = a.m_next);
            null != a.m_nodeA.prev && (a.m_nodeA.prev.next = a.m_nodeA.next);
            null != a.m_nodeA.next && (a.m_nodeA.next.prev = a.m_nodeA.prev);
            a.m_nodeA == b.m_contactList && (b.m_contactList = a.m_nodeA.next);
            null != a.m_nodeB.prev && (a.m_nodeB.prev.next = a.m_nodeB.next);
            null != a.m_nodeB.next && (a.m_nodeB.next.prev =
                a.m_nodeB.prev);
            a.m_nodeB == c.m_contactList && (c.m_contactList = a.m_nodeB.next);
            this.m_contactFactory.destroy(a);
            --this.m_contactCount
        },
        findNewContacts: function() {
            this.m_broadPhase.updatePairs(q(this, this.addPair))
        },
        addPair: function(a, b) {
            var c = F.__cast(a, za),
                e = F.__cast(b, za),
                j = c.getBody(),
                d = e.getBody();
            if (j != d) {
                for (var f = d.getContactList(); null != f;) {
                    if (f.other == j) {
                        var g = f.contact.getFixtureA(),
                            h = f.contact.getFixtureB();
                        if (g == c && h == e || g == e && h == c) return
                    }
                    f = f.next
                }!1 == d.shouldCollide(j) || !1 == this.m_contactFilter.shouldCollide(c,
                    e) || (f = this.m_contactFactory.create(c, e), c = f.getFixtureA(), e = f.getFixtureB(), j = c.m_body, d = e.m_body, f.m_prev = null, f.m_next = this.m_world.m_contactList, null != this.m_world.m_contactList && (this.m_world.m_contactList.m_prev = f), this.m_world.m_contactList = f, f.m_nodeA.contact = f, f.m_nodeA.other = d, f.m_nodeA.prev = null, f.m_nodeA.next = j.m_contactList, null != j.m_contactList && (j.m_contactList.prev = f.m_nodeA), j.m_contactList = f.m_nodeA, f.m_nodeB.contact = f, f.m_nodeB.other = j, f.m_nodeB.prev = null, f.m_nodeB.next = d.m_contactList,
                    null != d.m_contactList && (d.m_contactList.prev = f.m_nodeB), d.m_contactList = f.m_nodeB, ++this.m_world.m_contactCount)
            }
        },
        __class__: Qb
    };
    kc = function() {};
    h["box2D.dynamics.B2DestructionListener"] = kc;
    kc.__name__ = ["box2D", "dynamics", "B2DestructionListener"];
    kc.prototype = {
        sayGoodbyeFixture: function() {},
        sayGoodbyeJoint: function() {},
        __class__: kc
    };
    Ka = function() {
        this.categoryBits = 1;
        this.maskBits = 65535;
        this.groupIndex = 0
    };
    h["box2D.dynamics.B2FilterData"] = Ka;
    Ka.__name__ = ["box2D", "dynamics", "B2FilterData"];
    Ka.prototype = {
        copy: function() {
            var a = new Ka;
            a.categoryBits = this.categoryBits;
            a.maskBits = this.maskBits;
            a.groupIndex = this.groupIndex;
            return a
        },
        __class__: Ka
    };
    za = function() {
        this.m_filter = new Ka;
        this.m_aabb = new wa;
        this.m_shape = this.m_next = this.m_body = this.m_userData = null;
        this.m_restitution = this.m_friction = this.m_density = 0
    };
    h["box2D.dynamics.B2Fixture"] = za;
    za.__name__ = ["box2D", "dynamics", "B2Fixture"];
    za.prototype = {
        synchronize: function(a, b, c) {
            if (null != this.m_proxy) {
                var e = new wa,
                    j = new wa;
                this.m_shape.computeAABB(e, b);
                this.m_shape.computeAABB(j, c);
                this.m_aabb.combine(e, j);
                b = i.B2Math.subtractVV(c.position, b.position);
                a.moveProxy(this.m_proxy, this.m_aabb, b)
            }
        },
        destroyProxy: function(a) {
            null != this.m_proxy && (a.destroyProxy(this.m_proxy), this.m_proxy = null)
        },
        createProxy: function(a, b) {
            this.m_shape.computeAABB(this.m_aabb, b);
            this.m_proxy = a.createProxy(this.m_aabb, this)
        },
        destroy: function() {
            this.m_shape = null
        },
        create: function(a, b, c) {
            this.m_userData = c.userData;
            this.m_friction = c.friction;
            this.m_restitution = c.restitution;
            this.m_body =
                a;
            this.m_next = null;
            this.m_filter = c.filter.copy();
            this.m_isSensor = c.isSensor;
            this.m_shape = c.shape.copy();
            this.m_density = c.density
        },
        getRestitution: function() {
            return this.m_restitution
        },
        getFriction: function() {
            return this.m_friction
        },
        getMassData: function(a) {
            null == a && (a = new s.B2MassData);
            this.m_shape.computeMass(a, this.m_density);
            return a
        },
        rayCast: function(a, b) {
            return this.m_shape.rayCast(a, b, this.m_body.getTransform())
        },
        getBody: function() {
            return this.m_body
        },
        getFilterData: function() {
            return this.m_filter.copy()
        },
        isSensor: function() {
            return this.m_isSensor
        },
        getShape: function() {
            return this.m_shape
        },
        getType: function() {
            return this.m_shape.getType()
        },
        __class__: za
    };
    Rb = function() {
        this.filter = new Ka;
        this.userData = this.shape = null;
        this.friction = 0.2;
        this.density = this.restitution = 0;
        this.filter.categoryBits = 1;
        this.filter.maskBits = 65535;
        this.filter.groupIndex = 0;
        this.isSensor = !1
    };
    h["box2D.dynamics.B2FixtureDef"] = Rb;
    Rb.__name__ = ["box2D", "dynamics", "B2FixtureDef"];
    Rb.prototype = {
        __class__: Rb
    };
    ua = function() {
        this.m_bodies = [];
        this.m_contacts = [];
        this.m_joints = []
    };
    h["box2D.dynamics.B2Island"] = ua;
    ua.__name__ = ["box2D", "dynamics", "B2Island"];
    ua.prototype = {
        addJoint: function(a) {
            this.m_joints[this.m_jointCount++] = a
        },
        addContact: function(a) {
            this.m_contacts[this.m_contactCount++] = a
        },
        addBody: function(a) {
            a.m_islandIndex = this.m_bodyCount;
            this.m_bodies[this.m_bodyCount++] = a
        },
        report: function(a) {
            if (null != this.m_listener)
                for (var b = 0, c = this.m_contactCount; b < c;) {
                    for (var e = b++, j = this.m_contacts[e], e = a[e], d = 0, f = e.pointCount; d < f;) {
                        var g = d++;
                        ua.s_impulse.normalImpulses[g] = e.points[g].normalImpulse;
                        ua.s_impulse.tangentImpulses[g] = e.points[g].tangentImpulse
                    }
                    this.m_listener.postSolve(j, ua.s_impulse)
                }
        },
        solveTOI: function(a) {
            this.m_contactSolver.initialize(a, this.m_contacts, this.m_contactCount, this.m_allocator);
            for (var b = this.m_contactSolver, c = 0, e = this.m_jointCount; c < e;) {
                var j = c++;
                this.m_joints[j].initVelocityConstraints(a)
            }
            c = 0;
            for (e = a.velocityIterations; c < e;) {
                c++;
                b.solveVelocityConstraints();
                for (var j = 0, d = this.m_jointCount; j < d;) {
                    var f = j++;
                    this.m_joints[f].solveVelocityConstraints(a)
                }
            }
            c = 0;
            for (e = this.m_bodyCount; c < e;) j = c++, j = this.m_bodies[j], j.getType() != v.b2_staticBody && (d = a.dt * j.m_linearVelocity.x, f = a.dt * j.m_linearVelocity.y, d * d + f * f > t.b2_maxTranslationSquared && (j.m_linearVelocity.normalize(), j.m_linearVelocity.x *= t.b2_maxTranslation * a.inv_dt, j.m_linearVelocity.y *= t.b2_maxTranslation * a.inv_dt), d = a.dt * j.m_angularVelocity, d * d > t.b2_maxRotationSquared && (j.m_angularVelocity = 0 > j.m_angularVelocity ? -t.b2_maxRotation * a.inv_dt : t.b2_maxRotation *
                a.inv_dt), j.m_sweep.c0.setV(j.m_sweep.c), j.m_sweep.a0 = j.m_sweep.a, j.m_sweep.c.x += a.dt * j.m_linearVelocity.x, j.m_sweep.c.y += a.dt * j.m_linearVelocity.y, j.m_sweep.a += a.dt * j.m_angularVelocity, j.synchronizeTransform());
            c = 0;
            for (e = a.positionIterations; c < e;) {
                c++;
                for (var a = b.solvePositionConstraints(0.75), g = !0, j = 0, d = this.m_jointCount; j < d;) f = j++, f = this.m_joints[f].solvePositionConstraints(t.b2_contactBaumgarte), g = g && f;
                if (a && g) break
            }
            this.report(b.m_constraints)
        },
        solve: function(a, b, c) {
            for (var e, j, d = 0, f = this.m_bodyCount; d <
                f;) e = d++, e = this.m_bodies[e], e.getType() == v.b2_dynamicBody && (e.m_linearVelocity.x += a.dt * (b.x + e.m_invMass * e.m_force.x), e.m_linearVelocity.y += a.dt * (b.y + e.m_invMass * e.m_force.y), e.m_angularVelocity += a.dt * e.m_invI * e.m_torque, e.m_linearVelocity.multiply(i.B2Math.clamp(1 - a.dt * e.m_linearDamping, 0, 1)), e.m_angularVelocity *= i.B2Math.clamp(1 - a.dt * e.m_angularDamping, 0, 1));
            this.m_contactSolver.initialize(a, this.m_contacts, this.m_contactCount, this.m_allocator);
            b = this.m_contactSolver;
            b.initVelocityConstraints(a);
            d = 0;
            for (f = this.m_jointCount; d < f;) e = d++, j = this.m_joints[e], j.initVelocityConstraints(a);
            d = 0;
            for (f = a.velocityIterations; d < f;) {
                d++;
                e = 0;
                for (var g = this.m_jointCount; e < g;) j = e++, j = this.m_joints[j], j.solveVelocityConstraints(a);
                b.solveVelocityConstraints()
            }
            d = 0;
            for (f = this.m_jointCount; d < f;) e = d++, j = this.m_joints[e], j.finalizeVelocityConstraints();
            b.finalizeVelocityConstraints();
            d = 0;
            for (f = this.m_bodyCount; d < f;)
                if (e = d++, e = this.m_bodies[e], e.getType() != v.b2_staticBody) {
                    var g = a.dt * e.m_linearVelocity.x,
                        h = a.dt * e.m_linearVelocity.y;
                    g * g + h * h > t.b2_maxTranslationSquared && (e.m_linearVelocity.normalize(), e.m_linearVelocity.x *= t.b2_maxTranslation * a.inv_dt, e.m_linearVelocity.y *= t.b2_maxTranslation * a.inv_dt);
                    g = a.dt * e.m_angularVelocity;
                    g * g > t.b2_maxRotationSquared && (e.m_angularVelocity = 0 > e.m_angularVelocity ? -t.b2_maxRotation * a.inv_dt : t.b2_maxRotation * a.inv_dt);
                    e.m_sweep.c0.setV(e.m_sweep.c);
                    e.m_sweep.a0 = e.m_sweep.a;
                    e.m_sweep.c.x += a.dt * e.m_linearVelocity.x;
                    e.m_sweep.c.y += a.dt * e.m_linearVelocity.y;
                    e.m_sweep.a += a.dt * e.m_angularVelocity;
                    e.synchronizeTransform()
                }
            d =
                0;
            for (f = a.positionIterations; d < f;) {
                d++;
                var h = b.solvePositionConstraints(t.b2_contactBaumgarte),
                    k = !0;
                e = 0;
                for (g = this.m_jointCount; e < g;) j = e++, j = this.m_joints[j], j = j.solvePositionConstraints(t.b2_contactBaumgarte), k = k && j;
                if (h && k) break
            }
            this.report(b.m_constraints);
            if (c) {
                c = Number.MAX_VALUE;
                b = t.b2_linearSleepTolerance * t.b2_linearSleepTolerance;
                g = t.b2_angularSleepTolerance * t.b2_angularSleepTolerance;
                d = 0;
                for (f = this.m_bodyCount; d < f;) e = d++, e = this.m_bodies[e], e.getType() != v.b2_staticBody && (0 == (e.m_flags & v.e_allowSleepFlag) &&
                    (c = e.m_sleepTime = 0), 0 == (e.m_flags & v.e_allowSleepFlag) || e.m_angularVelocity * e.m_angularVelocity > g || i.B2Math.dot(e.m_linearVelocity, e.m_linearVelocity) > b ? c = e.m_sleepTime = 0 : (e.m_sleepTime += a.dt, c = i.B2Math.min(c, e.m_sleepTime)));
                if (c >= t.b2_timeToSleep) {
                    d = 0;
                    for (f = this.m_bodyCount; d < f;) e = d++, e = this.m_bodies[e], e.setAwake(!1)
                }
            }
        },
        clear: function() {
            this.m_jointCount = this.m_contactCount = this.m_bodyCount = 0
        },
        initialize: function(a, b, c, e, j, d) {
            this.m_bodyCapacity = a;
            this.m_contactCapacity = b;
            this.m_jointCapacity = c;
            this.m_jointCount = this.m_contactCount = this.m_bodyCount = 0;
            this.m_allocator = e;
            this.m_listener = j;
            this.m_contactSolver = d;
            for (e = this.m_bodies.length; e < a;) j = e++, this.m_bodies[j] = null;
            for (e = this.m_contacts.length; e < b;) j = e++, this.m_contacts[j] = null;
            for (e = this.m_joints.length; e < c;) j = e++, this.m_joints[j] = null
        },
        __class__: ua
    };
    La = function() {};
    h["box2D.dynamics.B2TimeStep"] = La;
    La.__name__ = ["box2D", "dynamics", "B2TimeStep"];
    La.prototype = {
        set: function(a) {
            this.dt = a.dt;
            this.inv_dt = a.inv_dt;
            this.positionIterations = a.positionIterations;
            this.velocityIterations = a.velocityIterations;
            this.warmStarting = a.warmStarting
        },
        __class__: La
    };
    I = function(a, b) {
        this.s_stack = [];
        this.m_contactManager = new Qb;
        this.m_contactSolver = new k.B2ContactSolver;
        this.m_island = new ua;
        this.m_controllerList = this.m_jointList = this.m_contactList = this.m_bodyList = this.m_destructionListener = null;
        this.m_controllerCount = this.m_jointCount = this.m_contactCount = this.m_bodyCount = 0;
        I.m_warmStarting = !0;
        I.m_continuousPhysics = !0;
        this.m_allowSleep = b;
        this.m_gravity = a;
        this.m_inv_dt0 =
            0;
        this.m_contactManager.m_world = this;
        this.m_groundBody = this.createBody(new kb)
    };
    h["box2D.dynamics.B2World"] = I;
    I.__name__ = ["box2D", "dynamics", "B2World"];
    I.prototype = {
        solveTOI: function(a) {
            var b, c, e, j, d = this.m_island;
            d.initialize(this.m_bodyCount, t.b2_maxTOIContactsPerIsland, t.b2_maxTOIJointsPerIsland, null, this.m_contactManager.m_contactListener, this.m_contactSolver);
            var f = I.s_queue;
            for (b = this.m_bodyList; null != b;) b.m_flags &= ~v.e_islandFlag, b.m_sweep.t0 = 0, b = b.m_next;
            for (b = this.m_contactList; null != b;) b.m_flags &=
                ~(k.B2Contact.e_toiFlag | k.B2Contact.e_islandFlag), b = b.m_next;
            for (b = this.m_jointList; null != b;) b.m_islandFlag = !1, b = b.m_next;
            for (;;) {
                j = null;
                var g = 1;
                for (b = this.m_contactList; null != b;) {
                    if (!(!0 == b.isSensor() || !1 == b.isEnabled() || !1 == b.isContinuous())) {
                        c = 1;
                        if (0 != (b.m_flags & k.B2Contact.e_toiFlag)) c = b.m_toi;
                        else {
                            c = b.m_fixtureA;
                            e = b.m_fixtureB;
                            c = c.m_body;
                            e = e.m_body;
                            if ((c.getType() != v.b2_dynamicBody || !1 == c.isAwake()) && (e.getType() != v.b2_dynamicBody || !1 == e.isAwake())) {
                                b = b.m_next;
                                continue
                            }
                            var h = c.m_sweep.t0;
                            c.m_sweep.t0 <
                                e.m_sweep.t0 ? (h = e.m_sweep.t0, c.m_sweep.advance(h)) : e.m_sweep.t0 < c.m_sweep.t0 && (h = c.m_sweep.t0, e.m_sweep.advance(h));
                            c = b.computeTOI(c.m_sweep, e.m_sweep);
                            t.b2Assert(0 <= c && 1 >= c);
                            0 < c && 1 > c && (c = (1 - c) * h + c, 1 < c && (c = 1));
                            b.m_toi = c;
                            b.m_flags |= k.B2Contact.e_toiFlag
                        }
                        Number.MIN_VALUE < c && c < g && (j = b, g = c)
                    }
                    b = b.m_next
                }
                if (null == j || 1 - 100 * Number.MIN_VALUE < g) break;
                c = j.m_fixtureA;
                e = j.m_fixtureB;
                c = c.m_body;
                e = e.m_body;
                I.s_backupA.set(c.m_sweep);
                I.s_backupB.set(e.m_sweep);
                c.advance(g);
                e.advance(g);
                j.update(this.m_contactManager.m_contactListener);
                j.m_flags &= ~k.B2Contact.e_toiFlag;
                if (!0 == j.isSensor() || !1 == j.isEnabled()) c.m_sweep.set(I.s_backupA), e.m_sweep.set(I.s_backupB), c.synchronizeTransform(), e.synchronizeTransform();
                else if (!1 != j.isTouching()) {
                    b = c;
                    b.getType() != v.b2_dynamicBody && (b = e);
                    d.clear();
                    e = c = 0;
                    f[c + e++] = b;
                    for (b.m_flags |= v.e_islandFlag; 0 < e;)
                        if (b = f[c++], --e, d.addBody(b), !1 == b.isAwake() && b.setAwake(!0), b.getType() == v.b2_dynamicBody) {
                            for (j = b.m_contactList; null != j && !(d.m_contactCount == d.m_contactCapacity);) {
                                if (0 == (j.contact.m_flags & k.B2Contact.e_islandFlag) &&
                                    !(!0 == j.contact.isSensor() || !1 == j.contact.isEnabled() || !1 == j.contact.isTouching())) d.addContact(j.contact), j.contact.m_flags |= k.B2Contact.e_islandFlag, h = j.other, 0 == (h.m_flags & v.e_islandFlag) && (h.getType() != v.b2_staticBody && (h.advance(g), h.setAwake(!0)), f[c + e] = h, ++e, h.m_flags |= v.e_islandFlag);
                                j = j.next
                            }
                            for (b = b.m_jointList; null != b;) d.m_jointCount != d.m_jointCapacity && !0 != b.joint.m_islandFlag && (h = b.other, !1 != h.isActive() && (d.addJoint(b.joint), b.joint.m_islandFlag = !0, 0 == (h.m_flags & v.e_islandFlag) && (h.getType() !=
                                v.b2_staticBody && (h.advance(g), h.setAwake(!0)), f[c + e] = h, ++e, h.m_flags |= v.e_islandFlag))), b = b.next
                        }
                    b = I.s_timestep;
                    b.warmStarting = !1;
                    b.dt = (1 - g) * a.dt;
                    b.inv_dt = 1 / b.dt;
                    b.dtRatio = 0;
                    b.velocityIterations = a.velocityIterations;
                    b.positionIterations = a.positionIterations;
                    d.solveTOI(b);
                    g = 0;
                    for (c = d.m_bodyCount; g < c;)
                        if (b = g++, b = d.m_bodies[b], b.m_flags &= ~v.e_islandFlag, !1 != b.isAwake() && b.getType() == v.b2_dynamicBody) {
                            b.synchronizeFixtures();
                            for (j = b.m_contactList; null != j;) j.contact.m_flags &= ~k.B2Contact.e_toiFlag, j =
                                j.next
                        }
                    g = 0;
                    for (c = d.m_contactCount; g < c;) b = g++, b = d.m_contacts[b], b.m_flags &= ~(k.B2Contact.e_toiFlag | k.B2Contact.e_islandFlag);
                    g = 0;
                    for (c = d.m_jointCount; g < c;) b = g++, b = d.m_joints[b], b.m_islandFlag = !1;
                    this.m_contactManager.findNewContacts()
                }
            }
        },
        solve: function(a) {
            for (var b, c = this.m_controllerList; null != c;) c.step(a), c = c.m_next;
            c = this.m_island;
            c.initialize(this.m_bodyCount, this.m_contactCount, this.m_jointCount, null, this.m_contactManager.m_contactListener, this.m_contactSolver);
            for (b = this.m_bodyList; null != b;) b.m_flags &=
                ~v.e_islandFlag, b = b.m_next;
            for (var e = this.m_contactList; null != e;) e.m_flags &= ~k.B2Contact.e_islandFlag, e = e.m_next;
            for (e = this.m_jointList; null != e;) e.m_islandFlag = !1, e = e.m_next;
            for (var e = this.s_stack, j = this.m_bodyList; null != j;) {
                if (0 == (j.m_flags & v.e_islandFlag) && !(!1 == j.isAwake() || !1 == j.isActive()) && j.getType() != v.b2_staticBody) {
                    c.clear();
                    var d = 0;
                    e[d++] = j;
                    for (j.m_flags |= v.e_islandFlag; 0 < d;)
                        if (b = e[--d], c.addBody(b), !1 == b.isAwake() && b.setAwake(!0), b.getType() != v.b2_staticBody) {
                            for (var f, g = b.m_contactList; null !=
                                g;) {
                                if (0 == (g.contact.m_flags & k.B2Contact.e_islandFlag) && !(!0 == g.contact.isSensor() || !1 == g.contact.isEnabled() || !1 == g.contact.isTouching())) c.addContact(g.contact), g.contact.m_flags |= k.B2Contact.e_islandFlag, f = g.other, 0 == (f.m_flags & v.e_islandFlag) && (e[d++] = f, f.m_flags |= v.e_islandFlag);
                                g = g.next
                            }
                            for (b = b.m_jointList; null != b;) !0 != b.joint.m_islandFlag && (f = b.other, !1 != f.isActive() && (c.addJoint(b.joint), b.joint.m_islandFlag = !0, 0 == (f.m_flags & v.e_islandFlag) && (e[d++] = f, f.m_flags |= v.e_islandFlag))), b = b.next
                        }
                    c.solve(a,
                        this.m_gravity, this.m_allowSleep);
                    d = 0;
                    for (f = c.m_bodyCount; d < f;) b = d++, b = c.m_bodies[b], b.getType() == v.b2_staticBody && (b.m_flags &= ~v.e_islandFlag)
                }
                j = j.m_next
            }
            d = 0;
            for (f = e.length; d < f;) {
                b = d++;
                if (null == e[b]) break;
                e[b] = null
            }
            for (b = this.m_bodyList; null != b;) !1 == b.isAwake() || !1 == b.isActive() || b.getType() != v.b2_staticBody && b.synchronizeFixtures(), b = b.m_next;
            this.m_contactManager.findNewContacts()
        },
        isLocked: function() {
            return 0 < (this.m_flags & I.e_locked)
        },
        getBodyList: function() {
            return this.m_bodyList
        },
        rayCastAll: function(a,
            b) {
            var c = [];
            this.rayCast(function(a) {
                c[c.length] = a;
                return 1
            }, a, b);
            return c
        },
        rayCast: function(a, b, c) {
            var e = this.m_contactManager.m_broadPhase,
                d = new $b,
                f = new ob(b, c);
            e.rayCast(function(f, l) {
                var g = e.getUserData(l),
                    g = F.__cast(g, za);
                if (g.rayCast(d, f)) {
                    var h = d.fraction,
                        k = new i.B2Vec2((1 - h) * b.x + h * c.x, (1 - h) * b.y + h * c.y);
                    return a(g, k, d.normal, h)
                }
                return f.maxFraction
            }, f)
        },
        step: function(a, b, c) {
            0 != (this.m_flags & I.e_newFixture) && (this.m_contactManager.findNewContacts(), this.m_flags &= ~I.e_newFixture);
            this.m_flags |=
                I.e_locked;
            var e = I.s_timestep2;
            e.dt = a;
            e.velocityIterations = b;
            e.positionIterations = c;
            e.inv_dt = 0 < a ? 1 / a : 0;
            e.dtRatio = this.m_inv_dt0 * a;
            e.warmStarting = I.m_warmStarting;
            this.m_contactManager.collide();
            0 < e.dt && this.solve(e);
            I.m_continuousPhysics && 0 < e.dt && this.solveTOI(e);
            0 < e.dt && (this.m_inv_dt0 = e.inv_dt);
            this.m_flags &= ~I.e_locked
        },
        destroyJoint: function(a) {
            var b = a.m_collideConnected;
            null != a.m_prev && (a.m_prev.m_next = a.m_next);
            null != a.m_next && (a.m_next.m_prev = a.m_prev);
            a == this.m_jointList && (this.m_jointList =
                a.m_next);
            var c = a.m_bodyA,
                e = a.m_bodyB;
            c.setAwake(!0);
            e.setAwake(!0);
            null != a.m_edgeA.prev && (a.m_edgeA.prev.next = a.m_edgeA.next);
            null != a.m_edgeA.next && (a.m_edgeA.next.prev = a.m_edgeA.prev);
            a.m_edgeA == c.m_jointList && (c.m_jointList = a.m_edgeA.next);
            a.m_edgeA.prev = null;
            a.m_edgeA.next = null;
            null != a.m_edgeB.prev && (a.m_edgeB.prev.next = a.m_edgeB.next);
            null != a.m_edgeB.next && (a.m_edgeB.next.prev = a.m_edgeB.prev);
            a.m_edgeB == e.m_jointList && (e.m_jointList = a.m_edgeB.next);
            a.m_edgeB.prev = null;
            a.m_edgeB.next = null;
            E.B2Joint.destroy(a,
                null);
            --this.m_jointCount;
            if (!1 == b)
                for (a = e.getContactList(); null != a;) a.other == c && a.contact.flagForFiltering(), a = a.next
        },
        destroyBody: function(a) {
            if (!0 != this.isLocked()) {
                for (var b = a.m_jointList; null != b;) {
                    var c = b,
                        b = b.next;
                    null != this.m_destructionListener && this.m_destructionListener.sayGoodbyeJoint(c.joint);
                    this.destroyJoint(c.joint)
                }
                for (b = a.m_controllerList; null != b;) c = b, b = b.nextController, c.controller.removeBody(a);
                for (b = a.m_contactList; null != b;) c = b, b = b.next, this.m_contactManager.destroy(c.contact);
                a.m_contactList = null;
                for (b = a.m_fixtureList; null != b;) c = b, b = b.m_next, null != this.m_destructionListener && this.m_destructionListener.sayGoodbyeFixture(c), c.destroyProxy(this.m_contactManager.m_broadPhase), c.destroy();
                a.m_fixtureList = null;
                a.m_fixtureCount = 0;
                null != a.m_prev && (a.m_prev.m_next = a.m_next);
                null != a.m_next && (a.m_next.m_prev = a.m_prev);
                a == this.m_bodyList && (this.m_bodyList = a.m_next);
                --this.m_bodyCount
            }
        },
        createBody: function(a) {
            if (!0 == this.isLocked()) return null;
            a = new v(a, this);
            a.m_prev = null;
            a.m_next =
                this.m_bodyList;
            null != this.m_bodyList && (this.m_bodyList.m_prev = a);
            this.m_bodyList = a;
            ++this.m_bodyCount;
            return a
        },
        setContactListener: function(a) {
            this.m_contactManager.m_contactListener = a
        },
        __class__: I
    };
    k = {};
    k.B2Contact = function() {
        this.m_nodeA = new k.B2ContactEdge;
        this.m_nodeB = new k.B2ContactEdge;
        this.m_manifold = new O;
        this.m_oldManifold = new O
    };
    h["box2D.dynamics.contacts.B2Contact"] = k.B2Contact;
    k.B2Contact.__name__ = ["box2D", "dynamics", "contacts", "B2Contact"];
    k.B2Contact.prototype = {
        computeTOI: function(a,
            b) {
            k.B2Contact.s_input.proxyA.set(this.m_fixtureA.getShape());
            k.B2Contact.s_input.proxyB.set(this.m_fixtureB.getShape());
            k.B2Contact.s_input.sweepA = a;
            k.B2Contact.s_input.sweepB = b;
            k.B2Contact.s_input.tolerance = t.b2_linearSlop;
            return z.timeOfImpact(k.B2Contact.s_input)
        },
        evaluate: function() {},
        update: function(a) {
            var b = this.m_oldManifold;
            this.m_oldManifold = this.m_manifold;
            this.m_manifold = b;
            this.m_flags |= k.B2Contact.e_enabledFlag;
            var c = !1,
                b = (this.m_flags & k.B2Contact.e_touchingFlag) == k.B2Contact.e_touchingFlag,
                e = this.m_fixtureA.m_body,
                d = this.m_fixtureB.m_body,
                f = this.m_fixtureA.m_aabb.testOverlap(this.m_fixtureB.m_aabb);
            if (0 != (this.m_flags & k.B2Contact.e_sensorFlag)) f && (c = this.m_fixtureA.getShape(), f = this.m_fixtureB.getShape(), e = e.getTransform(), d = d.getTransform(), c = s.B2Shape.testOverlap(c, e, f, d)), this.m_manifold.m_pointCount = 0;
            else {
                this.m_flags = e.getType() != v.b2_dynamicBody || e.isBullet() || d.getType() != v.b2_dynamicBody || d.isBullet() ? this.m_flags | k.B2Contact.e_continuousFlag : this.m_flags & ~k.B2Contact.e_continuousFlag;
                if (f) {
                    this.evaluate();
                    for (var c = 0 < this.m_manifold.m_pointCount, f = 0, g = this.m_manifold.m_pointCount; f < g;) {
                        var h = this.m_manifold.m_points[f++];
                        h.m_normalImpulse = 0;
                        h.m_tangentImpulse = 0;
                        for (var i = h.m_id, m = 0, n = this.m_oldManifold.m_pointCount; m < n;) {
                            var o = this.m_oldManifold.m_points[m++];
                            if (o.m_id.getKey() == i.getKey()) {
                                h.m_normalImpulse = o.m_normalImpulse;
                                h.m_tangentImpulse = o.m_tangentImpulse;
                                break
                            }
                        }
                    }
                } else this.m_manifold.m_pointCount = 0;
                c != b && (e.setAwake(!0), d.setAwake(!0))
            }
            this.m_flags = c ? this.m_flags | k.B2Contact.e_touchingFlag :
                this.m_flags & ~k.B2Contact.e_touchingFlag;
            !1 == b && !0 == c && a.beginContact(this);
            !0 == b && !1 == c && a.endContact(this);
            0 == (this.m_flags & k.B2Contact.e_sensorFlag) && a.preSolve(this, this.m_oldManifold)
        },
        reset: function(a, b) {
            this.m_flags = k.B2Contact.e_enabledFlag;
            if (null == a || null == b) this.m_fixtureB = this.m_fixtureA = null;
            else {
                if (a.isSensor() || b.isSensor()) this.m_flags |= k.B2Contact.e_sensorFlag;
                var c = a.getBody(),
                    e = b.getBody();
                if (c.getType() != v.b2_dynamicBody || c.isBullet() || e.getType() != v.b2_dynamicBody || e.isBullet()) this.m_flags |=
                    k.B2Contact.e_continuousFlag;
                this.m_fixtureA = a;
                this.m_fixtureB = b;
                this.m_manifold.m_pointCount = 0;
                this.m_next = this.m_prev = null;
                this.m_nodeA.contact = null;
                this.m_nodeA.prev = null;
                this.m_nodeA.next = null;
                this.m_nodeA.other = null;
                this.m_nodeB.contact = null;
                this.m_nodeB.prev = null;
                this.m_nodeB.next = null;
                this.m_nodeB.other = null
            }
        },
        flagForFiltering: function() {
            this.m_flags |= k.B2Contact.e_filterFlag
        },
        getFixtureB: function() {
            return this.m_fixtureB
        },
        getFixtureA: function() {
            return this.m_fixtureA
        },
        getNext: function() {
            return this.m_next
        },
        isEnabled: function() {
            return (this.m_flags & k.B2Contact.e_enabledFlag) == k.B2Contact.e_enabledFlag
        },
        setEnabled: function(a) {
            this.m_flags = a ? this.m_flags | k.B2Contact.e_enabledFlag : this.m_flags & ~k.B2Contact.e_enabledFlag
        },
        isSensor: function() {
            return (this.m_flags & k.B2Contact.e_sensorFlag) == k.B2Contact.e_sensorFlag
        },
        isContinuous: function() {
            return (this.m_flags & k.B2Contact.e_continuousFlag) == k.B2Contact.e_continuousFlag
        },
        isTouching: function() {
            return (this.m_flags & k.B2Contact.e_touchingFlag) == k.B2Contact.e_touchingFlag
        },
        getManifold: function() {
            return this.m_manifold
        },
        __class__: k.B2Contact
    };
    k.B2CircleContact = function() {
        k.B2Contact.call(this)
    };
    h["box2D.dynamics.contacts.B2CircleContact"] = k.B2CircleContact;
    k.B2CircleContact.__name__ = ["box2D", "dynamics", "contacts", "B2CircleContact"];
    k.B2CircleContact.create = function() {
        return new k.B2CircleContact
    };
    k.B2CircleContact.destroy = function() {};
    k.B2CircleContact.__super__ = k.B2Contact;
    k.B2CircleContact.prototype = w(k.B2Contact.prototype, {
        evaluate: function() {
            var a = this.m_fixtureA.getBody(),
                b = this.m_fixtureB.getBody();
            y.collideCircles(this.m_manifold, F.__cast(this.m_fixtureA.getShape(), s.B2CircleShape), a.m_xf, F.__cast(this.m_fixtureB.getShape(), s.B2CircleShape), b.m_xf)
        },
        reset: function(a, b) {
            k.B2Contact.prototype.reset.call(this, a, b)
        },
        __class__: k.B2CircleContact
    });
    k.B2ContactConstraint = function() {
        this.localPlaneNormal = new i.B2Vec2;
        this.localPoint = new i.B2Vec2;
        this.normal = new i.B2Vec2;
        this.normalMass = new i.B2Mat22;
        this.K = new i.B2Mat22;
        this.points = [];
        for (var a = 0, b = t.b2_maxManifoldPoints; a <
            b;) this.points[a++] = new k.B2ContactConstraintPoint
    };
    h["box2D.dynamics.contacts.B2ContactConstraint"] = k.B2ContactConstraint;
    k.B2ContactConstraint.__name__ = ["box2D", "dynamics", "contacts", "B2ContactConstraint"];
    k.B2ContactConstraint.prototype = {
        __class__: k.B2ContactConstraint
    };
    k.B2ContactConstraintPoint = function() {
        this.localPoint = new i.B2Vec2;
        this.rA = new i.B2Vec2;
        this.rB = new i.B2Vec2
    };
    h["box2D.dynamics.contacts.B2ContactConstraintPoint"] = k.B2ContactConstraintPoint;
    k.B2ContactConstraintPoint.__name__ = ["box2D", "dynamics", "contacts", "B2ContactConstraintPoint"];
    k.B2ContactConstraintPoint.prototype = {
        __class__: k.B2ContactConstraintPoint
    };
    k.B2ContactEdge = function() {};
    h["box2D.dynamics.contacts.B2ContactEdge"] = k.B2ContactEdge;
    k.B2ContactEdge.__name__ = ["box2D", "dynamics", "contacts", "B2ContactEdge"];
    k.B2ContactEdge.prototype = {
        __class__: k.B2ContactEdge
    };
    k.B2ContactFactory = function(a) {
        this.m_allocator = a;
        this.initializeRegisters()
    };
    h["box2D.dynamics.contacts.B2ContactFactory"] = k.B2ContactFactory;
    k.B2ContactFactory.__name__ = ["box2D", "dynamics", "contacts", "B2ContactFactory"];
    k.B2ContactFactory.prototype = {
        destroy: function(a) {
            0 < a.m_manifold.m_pointCount && (a.m_fixtureA.m_body.setAwake(!0), a.m_fixtureB.m_body.setAwake(!0));
            var b = a.m_fixtureA.getType(),
                c = a.m_fixtureB.getType(),
                b = this.m_registers[b][c];
            b.poolCount++;
            a.m_next = b.pool;
            b.pool = a;
            b = b.destroyFcn;
            b(a, this.m_allocator)
        },
        create: function(a, b) {
            var c = a.getType(),
                e = b.getType(),
                c = this.m_registers[c][e];
            if (null != c.pool) return e = c.pool, c.pool = e.m_next, c.poolCount--, e.reset(a,
                b), e;
            e = c.createFcn;
            return null != e ? (c.primary ? (e = e(this.m_allocator), e.reset(a, b)) : (e = e(this.m_allocator), e.reset(b, a)), e) : null
        },
        initializeRegisters: function() {
            this.m_registers = [];
            for (var a = 0, b = s.B2Shape.e_shapeTypeCount; a < b;) {
                var c = a++;
                this.m_registers[c] = [];
                for (var e = 0, d = s.B2Shape.e_shapeTypeCount; e < d;) {
                    var f = e++;
                    this.m_registers[c][f] = new k.B2ContactRegister
                }
            }
            this.addType(k.B2CircleContact.create, k.B2CircleContact.destroy, s.B2Shape.e_circleShape, s.B2Shape.e_circleShape);
            this.addType(k.B2PolyAndCircleContact.create,
                k.B2PolyAndCircleContact.destroy, s.B2Shape.e_polygonShape, s.B2Shape.e_circleShape);
            this.addType(k.B2PolygonContact.create, k.B2PolygonContact.destroy, s.B2Shape.e_polygonShape, s.B2Shape.e_polygonShape);
            this.addType(k.B2EdgeAndCircleContact.create, k.B2EdgeAndCircleContact.destroy, s.B2Shape.e_edgeShape, s.B2Shape.e_circleShape);
            this.addType(k.B2PolyAndEdgeContact.create, k.B2PolyAndEdgeContact.destroy, s.B2Shape.e_polygonShape, s.B2Shape.e_edgeShape)
        },
        addType: function(a, b, c, e) {
            this.m_registers[c][e].createFcn =
                a;
            this.m_registers[c][e].destroyFcn = b;
            this.m_registers[c][e].primary = !0;
            c != e && (this.m_registers[e][c].createFcn = a, this.m_registers[e][c].destroyFcn = b, this.m_registers[e][c].primary = !1)
        },
        __class__: k.B2ContactFactory
    };
    k.B2ContactRegister = function() {};
    h["box2D.dynamics.contacts.B2ContactRegister"] = k.B2ContactRegister;
    k.B2ContactRegister.__name__ = ["box2D", "dynamics", "contacts", "B2ContactRegister"];
    k.B2ContactRegister.prototype = {
        __class__: k.B2ContactRegister
    };
    k.B2PositionSolverManifold = function() {
        this.m_normal =
            new i.B2Vec2;
        this.m_separations = [];
        this.m_points = [];
        for (var a = 0, b = t.b2_maxManifoldPoints; a < b;) this.m_points[a++] = new i.B2Vec2
    };
    h["box2D.dynamics.contacts.B2PositionSolverManifold"] = k.B2PositionSolverManifold;
    k.B2PositionSolverManifold.__name__ = ["box2D", "dynamics", "contacts", "B2PositionSolverManifold"];
    k.B2PositionSolverManifold.prototype = {
        initialize: function(a) {
            t.b2Assert(0 < a.pointCount);
            var b, c, e, d, f;
            switch (a.type) {
                case O.e_circles:
                    e = a.bodyA.m_xf.R;
                    c = a.localPoint;
                    b = a.bodyA.m_xf.position.x + (e.col1.x *
                        c.x + e.col2.x * c.y);
                    d = a.bodyA.m_xf.position.y + (e.col1.y * c.x + e.col2.y * c.y);
                    e = a.bodyB.m_xf.R;
                    c = a.points[0].localPoint;
                    f = a.bodyB.m_xf.position.x + (e.col1.x * c.x + e.col2.x * c.y);
                    e = a.bodyB.m_xf.position.y + (e.col1.y * c.x + e.col2.y * c.y);
                    c = f - b;
                    var g = e - d,
                        h = c * c + g * g;
                    h > Number.MIN_VALUE * Number.MIN_VALUE ? (h = Math.sqrt(h), this.m_normal.x = c / h, this.m_normal.y = g / h) : (this.m_normal.x = 1, this.m_normal.y = 0);
                    this.m_points[0].x = 0.5 * (b + f);
                    this.m_points[0].y = 0.5 * (d + e);
                    this.m_separations[0] = c * this.m_normal.x + g * this.m_normal.y - a.radius;
                    break;
                case O.e_faceA:
                    e = a.bodyA.m_xf.R;
                    c = a.localPlaneNormal;
                    this.m_normal.x = e.col1.x * c.x + e.col2.x * c.y;
                    this.m_normal.y = e.col1.y * c.x + e.col2.y * c.y;
                    e = a.bodyA.m_xf.R;
                    c = a.localPoint;
                    d = a.bodyA.m_xf.position.x + (e.col1.x * c.x + e.col2.x * c.y);
                    f = a.bodyA.m_xf.position.y + (e.col1.y * c.x + e.col2.y * c.y);
                    e = a.bodyB.m_xf.R;
                    g = 0;
                    for (h = a.pointCount; g < h;) {
                        var i = g++;
                        c = a.points[i].localPoint;
                        b = a.bodyB.m_xf.position.x + (e.col1.x * c.x + e.col2.x * c.y);
                        c = a.bodyB.m_xf.position.y + (e.col1.y * c.x + e.col2.y * c.y);
                        this.m_separations[i] = (b - d) * this.m_normal.x +
                            (c - f) * this.m_normal.y - a.radius;
                        this.m_points[i].x = b;
                        this.m_points[i].y = c
                    }
                    break;
                case O.e_faceB:
                    e = a.bodyB.m_xf.R;
                    c = a.localPlaneNormal;
                    this.m_normal.x = e.col1.x * c.x + e.col2.x * c.y;
                    this.m_normal.y = e.col1.y * c.x + e.col2.y * c.y;
                    e = a.bodyB.m_xf.R;
                    c = a.localPoint;
                    d = a.bodyB.m_xf.position.x + (e.col1.x * c.x + e.col2.x * c.y);
                    f = a.bodyB.m_xf.position.y + (e.col1.y * c.x + e.col2.y * c.y);
                    e = a.bodyA.m_xf.R;
                    g = 0;
                    for (h = a.pointCount; g < h;) i = g++, c = a.points[i].localPoint, b = a.bodyA.m_xf.position.x + (e.col1.x * c.x + e.col2.x * c.y), c = a.bodyA.m_xf.position.y +
                        (e.col1.y * c.x + e.col2.y * c.y), this.m_separations[i] = (b - d) * this.m_normal.x + (c - f) * this.m_normal.y - a.radius, this.m_points[i].set(b, c);
                    this.m_normal.x *= -1;
                    this.m_normal.y *= -1
            }
        },
        __class__: k.B2PositionSolverManifold
    };
    k.B2ContactSolver = function() {
        this.m_step = new La;
        this.m_constraints = []
    };
    h["box2D.dynamics.contacts.B2ContactSolver"] = k.B2ContactSolver;
    k.B2ContactSolver.__name__ = ["box2D", "dynamics", "contacts", "B2ContactSolver"];
    k.B2ContactSolver.prototype = {
        solvePositionConstraints: function(a) {
            for (var b = 0, c = 0,
                    e = this.m_constraintCount; c < e;) {
                var d = this.m_constraints[c++],
                    f = d.bodyA,
                    g = d.bodyB,
                    h = f.m_mass * f.m_invMass,
                    p = f.m_mass * f.m_invI,
                    m = g.m_mass * g.m_invMass,
                    n = g.m_mass * g.m_invI;
                k.B2ContactSolver.s_psm.initialize(d);
                for (var o = k.B2ContactSolver.s_psm.m_normal, u = 0, q = d.pointCount; u < q;) {
                    var r = u++,
                        s = d.points[r],
                        v = k.B2ContactSolver.s_psm.m_points[r],
                        w = k.B2ContactSolver.s_psm.m_separations[r],
                        r = v.x - f.m_sweep.c.x,
                        x = v.y - f.m_sweep.c.y,
                        A = v.x - g.m_sweep.c.x,
                        v = v.y - g.m_sweep.c.y,
                        b = b < w ? b : w,
                        w = i.B2Math.clamp(a * (w + t.b2_linearSlop), -t.b2_maxLinearCorrection, 0),
                        w = -s.equalizedMass * w,
                        s = w * o.x,
                        w = w * o.y;
                    f.m_sweep.c.x -= h * s;
                    f.m_sweep.c.y -= h * w;
                    f.m_sweep.a -= p * (r * w - x * s);
                    f.synchronizeTransform();
                    g.m_sweep.c.x += m * s;
                    g.m_sweep.c.y += m * w;
                    g.m_sweep.a += n * (A * w - v * s);
                    g.synchronizeTransform()
                }
            }
            return b > -1.5 * t.b2_linearSlop
        },
        finalizeVelocityConstraints: function() {
            for (var a = 0, b = this.m_constraintCount; a < b;)
                for (var c = this.m_constraints[a++], e = c.manifold, d = 0, f = c.pointCount; d < f;) {
                    var g = d++,
                        h = e.m_points[g],
                        g = c.points[g];
                    h.m_normalImpulse = g.normalImpulse;
                    h.m_tangentImpulse = g.tangentImpulse
                }
        },
        solveVelocityConstraints: function() {
            for (var a, b, c, e, d, f, g, h, p, k, m = 0, n = this.m_constraintCount; m < n;) {
                e = this.m_constraints[m++];
                var o = e.bodyA,
                    u = e.bodyB,
                    q = o.m_angularVelocity,
                    t = u.m_angularVelocity,
                    r = o.m_linearVelocity,
                    s = u.m_linearVelocity,
                    v = o.m_invMass,
                    w = o.m_invI,
                    x = u.m_invMass,
                    A = u.m_invI;
                h = e.normal.x;
                var y = p = e.normal.y;
                k = -h;
                g = e.friction;
                f = 0;
                for (var z = e.pointCount; f < z;) a = f++, a = e.points[a], b = s.x - t * a.rB.y - r.x + q * a.rA.y, c = s.y + t * a.rB.x - r.y - q * a.rA.x, b = b * y + c * k, b = a.tangentMass *
                    -b, c = g * a.normalImpulse, c = i.B2Math.clamp(a.tangentImpulse + b, -c, c), b = c - a.tangentImpulse, d = b * y, b *= k, r.x -= v * d, r.y -= v * b, q -= w * (a.rA.x * b - a.rA.y * d), s.x += x * d, s.y += x * b, t += A * (a.rB.x * b - a.rB.y * d), a.tangentImpulse = c;
                if (1 == e.pointCount) a = e.points[0], b = s.x + -t * a.rB.y - r.x - -q * a.rA.y, c = s.y + t * a.rB.x - r.y - q * a.rA.x, e = b * h + c * p, b = -a.normalMass * (e - a.velocityBias), c = a.normalImpulse + b, c = 0 < c ? c : 0, b = c - a.normalImpulse, d = b * h, b *= p, r.x -= v * d, r.y -= v * b, q -= w * (a.rA.x * b - a.rA.y * d), s.x += x * d, s.y += x * b, t += A * (a.rB.x * b - a.rB.y * d), a.normalImpulse =
                    c;
                else {
                    a = e.points[0];
                    y = e.points[1];
                    f = a.normalImpulse;
                    g = y.normalImpulse;
                    d = (s.x - t * a.rB.y - r.x + q * a.rA.y) * h + (s.y + t * a.rB.x - r.y - q * a.rA.x) * p;
                    var B = (s.x - t * y.rB.y - r.x + q * y.rA.y) * h + (s.y + t * y.rB.x - r.y - q * y.rA.x) * p;
                    b = d - a.velocityBias;
                    c = B - y.velocityBias;
                    k = e.K;
                    b -= k.col1.x * f + k.col2.x * g;
                    c -= k.col1.y * f + k.col2.y * g;
                    for (z = 0; 1 > z;) {
                        k = e.normalMass;
                        z = -(k.col1.x * b + k.col2.x * c);
                        k = -(k.col1.y * b + k.col2.y * c);
                        if (0 <= z && 0 <= k) {
                            f = z - f;
                            g = k - g;
                            e = f * h;
                            f *= p;
                            h *= g;
                            p *= g;
                            r.x -= v * (e + h);
                            r.y -= v * (f + p);
                            q -= w * (a.rA.x * f - a.rA.y * e + y.rA.x * p - y.rA.y * h);
                            s.x += x * (e +
                                h);
                            s.y += x * (f + p);
                            t += A * (a.rB.x * f - a.rB.y * e + y.rB.x * p - y.rB.y * h);
                            a.normalImpulse = z;
                            y.normalImpulse = k;
                            break
                        }
                        z = -a.normalMass * b;
                        k = 0;
                        B = e.K.col1.y * z + c;
                        if (0 <= z && 0 <= B) {
                            f = z - f;
                            g = k - g;
                            e = f * h;
                            f *= p;
                            h *= g;
                            p *= g;
                            r.x -= v * (e + h);
                            r.y -= v * (f + p);
                            q -= w * (a.rA.x * f - a.rA.y * e + y.rA.x * p - y.rA.y * h);
                            s.x += x * (e + h);
                            s.y += x * (f + p);
                            t += A * (a.rB.x * f - a.rB.y * e + y.rB.x * p - y.rB.y * h);
                            a.normalImpulse = z;
                            y.normalImpulse = k;
                            break
                        }
                        z = 0;
                        k = -y.normalMass * c;
                        d = e.K.col2.x * k + b;
                        if (0 <= k && 0 <= d) {
                            f = z - f;
                            g = k - g;
                            e = f * h;
                            f *= p;
                            h *= g;
                            p *= g;
                            r.x -= v * (e + h);
                            r.y -= v * (f + p);
                            q -= w * (a.rA.x * f - a.rA.y *
                                e + y.rA.x * p - y.rA.y * h);
                            s.x += x * (e + h);
                            s.y += x * (f + p);
                            t += A * (a.rB.x * f - a.rB.y * e + y.rB.x * p - y.rB.y * h);
                            a.normalImpulse = z;
                            y.normalImpulse = k;
                            break
                        }
                        k = z = 0;
                        d = b;
                        B = c;
                        if (0 <= d && 0 <= B) {
                            f = z - f;
                            g = k - g;
                            e = f * h;
                            f *= p;
                            h *= g;
                            p *= g;
                            r.x -= v * (e + h);
                            r.y -= v * (f + p);
                            q -= w * (a.rA.x * f - a.rA.y * e + y.rA.x * p - y.rA.y * h);
                            s.x += x * (e + h);
                            s.y += x * (f + p);
                            t += A * (a.rB.x * f - a.rB.y * e + y.rB.x * p - y.rB.y * h);
                            a.normalImpulse = z;
                            y.normalImpulse = k;
                            break
                        }
                        break
                    }
                }
                o.m_angularVelocity = q;
                u.m_angularVelocity = t
            }
        },
        initVelocityConstraints: function(a) {
            for (var b = 0, c = this.m_constraintCount; b <
                c;) {
                var e = this.m_constraints[b++],
                    d = e.bodyA,
                    f = e.bodyB,
                    g = d.m_invMass,
                    h = d.m_invI,
                    i = f.m_invMass,
                    k = f.m_invI,
                    m = e.normal.x,
                    n = e.normal.y,
                    o = n,
                    q = -m,
                    r;
                if (a.warmStarting) {
                    r = e.pointCount;
                    for (var u = 0; u < r;) {
                        var t = u++,
                            t = e.points[t];
                        t.normalImpulse *= a.dtRatio;
                        t.tangentImpulse *= a.dtRatio;
                        var s = t.normalImpulse * m + t.tangentImpulse * o,
                            v = t.normalImpulse * n + t.tangentImpulse * q;
                        d.m_angularVelocity -= h * (t.rA.x * v - t.rA.y * s);
                        d.m_linearVelocity.x -= g * s;
                        d.m_linearVelocity.y -= g * v;
                        f.m_angularVelocity += k * (t.rB.x * v - t.rB.y * s);
                        f.m_linearVelocity.x +=
                            i * s;
                        f.m_linearVelocity.y += i * v
                    }
                } else {
                    r = e.pointCount;
                    for (u = 0; u < r;) t = u++, d = e.points[t], d.normalImpulse = 0, d.tangentImpulse = 0
                }
            }
        },
        initialize: function(a, b, c, e) {
            var d;
            this.m_step.set(a);
            this.m_allocator = e;
            for (this.m_constraintCount = c; this.m_constraints.length < this.m_constraintCount;) this.m_constraints[this.m_constraints.length] = new k.B2ContactConstraint;
            for (a = 0; a < c;) {
                e = a++;
                d = b[e];
                var f = d.m_fixtureA,
                    g = d.m_fixtureB,
                    h = f.m_shape.m_radius,
                    i = g.m_shape.m_radius,
                    m = f.m_body,
                    n = g.m_body;
                d = d.getManifold();
                var o = t.b2MixFriction(f.getFriction(),
                        g.getFriction()),
                    r = t.b2MixRestitution(f.getRestitution(), g.getRestitution()),
                    q = m.m_linearVelocity.x,
                    u = m.m_linearVelocity.y,
                    s = n.m_linearVelocity.x,
                    v = n.m_linearVelocity.y,
                    w = m.m_angularVelocity,
                    y = n.m_angularVelocity;
                t.b2Assert(0 < d.m_pointCount);
                k.B2ContactSolver.s_worldManifold.initialize(d, m.m_xf, h, n.m_xf, i);
                f = k.B2ContactSolver.s_worldManifold.m_normal.x;
                g = k.B2ContactSolver.s_worldManifold.m_normal.y;
                e = this.m_constraints[e];
                e.bodyA = m;
                e.bodyB = n;
                e.manifold = d;
                e.normal.x = f;
                e.normal.y = g;
                e.pointCount = d.m_pointCount;
                e.friction = o;
                e.restitution = r;
                e.localPlaneNormal.x = d.m_localPlaneNormal.x;
                e.localPlaneNormal.y = d.m_localPlaneNormal.y;
                e.localPoint.x = d.m_localPoint.x;
                e.localPoint.y = d.m_localPoint.y;
                e.radius = h + i;
                e.type = d.m_type;
                h = 0;
                for (i = e.pointCount; h < i;) {
                    var x = h++,
                        r = d.m_points[x],
                        o = e.points[x];
                    o.normalImpulse = r.m_normalImpulse;
                    o.tangentImpulse = r.m_tangentImpulse;
                    o.localPoint.setV(r.m_localPoint);
                    var r = o.rA.x = k.B2ContactSolver.s_worldManifold.m_points[x].x - m.m_sweep.c.x,
                        z = o.rA.y = k.B2ContactSolver.s_worldManifold.m_points[x].y -
                        m.m_sweep.c.y,
                        A = o.rB.x = k.B2ContactSolver.s_worldManifold.m_points[x].x - n.m_sweep.c.x,
                        x = o.rB.y = k.B2ContactSolver.s_worldManifold.m_points[x].y - n.m_sweep.c.y,
                        B = r * g - z * f,
                        C = A * g - x * f,
                        B = B * B,
                        C = C * C;
                    o.normalMass = 1 / (m.m_invMass + n.m_invMass + m.m_invI * B + n.m_invI * C);
                    var D = m.m_mass * m.m_invMass + n.m_mass * n.m_invMass,
                        D = D + (m.m_mass * m.m_invI * B + n.m_mass * n.m_invI * C);
                    o.equalizedMass = 1 / D;
                    C = g;
                    D = -f;
                    B = r * D - z * C;
                    C = A * D - x * C;
                    B *= B;
                    C *= C;
                    o.tangentMass = 1 / (m.m_invMass + n.m_invMass + m.m_invI * B + n.m_invI * C);
                    o.velocityBias = 0;
                    r = e.normal.x * (s +
                        -y * x - q - -w * z) + e.normal.y * (v + y * A - u - w * r);
                    r < -t.b2_velocityThreshold && (o.velocityBias += -e.restitution * r)
                }
                2 == e.pointCount && (v = e.points[0], s = e.points[1], d = m.m_invMass, m = m.m_invI, q = n.m_invMass, n = n.m_invI, u = v.rA.x * g - v.rA.y * f, v = v.rB.x * g - v.rB.y * f, w = s.rA.x * g - s.rA.y * f, s = s.rB.x * g - s.rB.y * f, f = d + q + m * u * u + n * v * v, g = d + q + m * w * w + n * s * s, n = d + q + m * u * w + n * v * s, f * f < 100 * (f * g - n * n) ? (e.K.col1.set(f, n), e.K.col2.set(n, g), e.K.getInverse(e.normalMass)) : e.pointCount = 1)
            }
        },
        __class__: k.B2ContactSolver
    };
    k.B2EdgeAndCircleContact = function() {
        k.B2Contact.call(this)
    };
    h["box2D.dynamics.contacts.B2EdgeAndCircleContact"] = k.B2EdgeAndCircleContact;
    k.B2EdgeAndCircleContact.__name__ = ["box2D", "dynamics", "contacts", "B2EdgeAndCircleContact"];
    k.B2EdgeAndCircleContact.create = function() {
        return new k.B2EdgeAndCircleContact
    };
    k.B2EdgeAndCircleContact.destroy = function() {};
    k.B2EdgeAndCircleContact.__super__ = k.B2Contact;
    k.B2EdgeAndCircleContact.prototype = w(k.B2Contact.prototype, {
        b2CollideEdgeAndCircle: function() {},
        evaluate: function() {
            var a = this.m_fixtureA.getBody(),
                b = this.m_fixtureB.getBody();
            this.b2CollideEdgeAndCircle(this.m_manifold, F.__cast(this.m_fixtureA.getShape(), s.B2EdgeShape), a.m_xf, F.__cast(this.m_fixtureB.getShape(), s.B2CircleShape), b.m_xf)
        },
        reset: function(a, b) {
            k.B2Contact.prototype.reset.call(this, a, b)
        },
        __class__: k.B2EdgeAndCircleContact
    });
    k.B2PolyAndCircleContact = function() {
        k.B2Contact.call(this)
    };
    h["box2D.dynamics.contacts.B2PolyAndCircleContact"] = k.B2PolyAndCircleContact;
    k.B2PolyAndCircleContact.__name__ = ["box2D", "dynamics", "contacts", "B2PolyAndCircleContact"];
    k.B2PolyAndCircleContact.create =
        function() {
            return new k.B2PolyAndCircleContact
        };
    k.B2PolyAndCircleContact.destroy = function() {};
    k.B2PolyAndCircleContact.__super__ = k.B2Contact;
    k.B2PolyAndCircleContact.prototype = w(k.B2Contact.prototype, {
        evaluate: function() {
            var a = this.m_fixtureA.m_body,
                b = this.m_fixtureB.m_body;
            y.collidePolygonAndCircle(this.m_manifold, F.__cast(this.m_fixtureA.getShape(), s.B2PolygonShape), a.m_xf, F.__cast(this.m_fixtureB.getShape(), s.B2CircleShape), b.m_xf)
        },
        reset: function(a, b) {
            k.B2Contact.prototype.reset.call(this, a, b);
            t.b2Assert(a.getType() == s.B2Shape.e_polygonShape);
            t.b2Assert(b.getType() == s.B2Shape.e_circleShape)
        },
        __class__: k.B2PolyAndCircleContact
    });
    k.B2PolyAndEdgeContact = function() {
        k.B2Contact.call(this)
    };
    h["box2D.dynamics.contacts.B2PolyAndEdgeContact"] = k.B2PolyAndEdgeContact;
    k.B2PolyAndEdgeContact.__name__ = ["box2D", "dynamics", "contacts", "B2PolyAndEdgeContact"];
    k.B2PolyAndEdgeContact.create = function() {
        return new k.B2PolyAndEdgeContact
    };
    k.B2PolyAndEdgeContact.destroy = function() {};
    k.B2PolyAndEdgeContact.__super__ =
        k.B2Contact;
    k.B2PolyAndEdgeContact.prototype = w(k.B2Contact.prototype, {
        b2CollidePolyAndEdge: function() {},
        evaluate: function() {
            var a = this.m_fixtureA.getBody(),
                b = this.m_fixtureB.getBody();
            this.b2CollidePolyAndEdge(this.m_manifold, F.__cast(this.m_fixtureA.getShape(), s.B2PolygonShape), a.m_xf, F.__cast(this.m_fixtureB.getShape(), s.B2EdgeShape), b.m_xf)
        },
        reset: function(a, b) {
            k.B2Contact.prototype.reset.call(this, a, b);
            t.b2Assert(a.getType() == s.B2Shape.e_polygonShape);
            t.b2Assert(b.getType() == s.B2Shape.e_edgeShape)
        },
        __class__: k.B2PolyAndEdgeContact
    });
    k.B2PolygonContact = function() {
        k.B2Contact.call(this)
    };
    h["box2D.dynamics.contacts.B2PolygonContact"] = k.B2PolygonContact;
    k.B2PolygonContact.__name__ = ["box2D", "dynamics", "contacts", "B2PolygonContact"];
    k.B2PolygonContact.create = function() {
        return new k.B2PolygonContact
    };
    k.B2PolygonContact.destroy = function() {};
    k.B2PolygonContact.__super__ = k.B2Contact;
    k.B2PolygonContact.prototype = w(k.B2Contact.prototype, {
        evaluate: function() {
            var a = this.m_fixtureA.getBody(),
                b = this.m_fixtureB.getBody();
            y.collidePolygons(this.m_manifold, F.__cast(this.m_fixtureA.getShape(), s.B2PolygonShape), a.m_xf, F.__cast(this.m_fixtureB.getShape(), s.B2PolygonShape), b.m_xf)
        },
        reset: function(a, b) {
            k.B2Contact.prototype.reset.call(this, a, b)
        },
        __class__: k.B2PolygonContact
    });
    va = {
        B2Controller: function() {}
    };
    h["box2D.dynamics.controllers.B2Controller"] = va.B2Controller;
    va.B2Controller.__name__ = ["box2D", "dynamics", "controllers", "B2Controller"];
    va.B2Controller.prototype = {
        removeBody: function(a) {
            for (var b = a.m_controllerList; null !=
                b && b.controller != this;) b = b.nextController;
            null != b.prevBody && (b.prevBody.nextBody = b.nextBody);
            null != b.nextBody && (b.nextBody.prevBody = b.prevBody);
            null != b.nextController && (b.nextController.prevController = b.prevController);
            null != b.prevController && (b.prevController.nextController = b.nextController);
            this.m_bodyList == b && (this.m_bodyList = b.nextBody);
            a.m_controllerList == b && (a.m_controllerList = b.nextController);
            a.m_controllerCount--;
            this.m_bodyCount--
        },
        step: function() {},
        __class__: va.B2Controller
    };
    va.B2ControllerEdge =
        function() {};
    h["box2D.dynamics.controllers.B2ControllerEdge"] = va.B2ControllerEdge;
    va.B2ControllerEdge.__name__ = ["box2D", "dynamics", "controllers", "B2ControllerEdge"];
    va.B2ControllerEdge.prototype = {
        __class__: va.B2ControllerEdge
    };
    E = {};
    E.B2Joint = function(a) {
        this.m_edgeA = new E.B2JointEdge;
        this.m_edgeB = new E.B2JointEdge;
        this.m_localCenterA = new i.B2Vec2;
        this.m_localCenterB = new i.B2Vec2;
        t.b2Assert(a.bodyA != a.bodyB);
        this.m_type = a.type;
        this.m_next = this.m_prev = null;
        this.m_bodyA = a.bodyA;
        this.m_bodyB = a.bodyB;
        this.m_collideConnected = a.collideConnected;
        this.m_islandFlag = !1;
        this.m_userData = a.userData
    };
    h["box2D.dynamics.joints.B2Joint"] = E.B2Joint;
    E.B2Joint.__name__ = ["box2D", "dynamics", "joints", "B2Joint"];
    E.B2Joint.destroy = function() {};
    E.B2Joint.prototype = {
        solvePositionConstraints: function() {
            return !1
        },
        finalizeVelocityConstraints: function() {},
        solveVelocityConstraints: function() {},
        initVelocityConstraints: function() {},
        getReactionTorque: function() {
            return 0
        },
        getReactionForce: function() {
            return null
        },
        getAnchorB: function() {
            return null
        },
        getAnchorA: function() {
            return null
        },
        __class__: E.B2Joint
    };
    E.B2JointDef = function() {};
    h["box2D.dynamics.joints.B2JointDef"] = E.B2JointDef;
    E.B2JointDef.__name__ = ["box2D", "dynamics", "joints", "B2JointDef"];
    E.B2JointDef.prototype = {
        __class__: E.B2JointDef
    };
    E.B2JointEdge = function() {};
    h["box2D.dynamics.joints.B2JointEdge"] = E.B2JointEdge;
    E.B2JointEdge.__name__ = ["box2D", "dynamics", "joints", "B2JointEdge"];
    E.B2JointEdge.prototype = {
        __class__: E.B2JointEdge
    };
    E.B2PulleyJoint = function() {};
    h["box2D.dynamics.joints.B2PulleyJoint"] =
        E.B2PulleyJoint;
    E.B2PulleyJoint.__name__ = ["box2D", "dynamics", "joints", "B2PulleyJoint"];
    E.B2PulleyJoint.__super__ = E.B2Joint;
    E.B2PulleyJoint.prototype = w(E.B2Joint.prototype, {
        solvePositionConstraints: function() {
            var a = this.m_bodyA,
                b = this.m_bodyB,
                c, e = this.m_ground.m_xf.position.x + this.m_groundAnchor1.x,
                d = this.m_ground.m_xf.position.y + this.m_groundAnchor1.y,
                f = this.m_ground.m_xf.position.x + this.m_groundAnchor2.x,
                g = this.m_ground.m_xf.position.y + this.m_groundAnchor2.y,
                h, k, m, n, o, r, q, s = 0;
            this.m_state == E.B2Joint.e_atUpperLimit &&
                (c = a.m_xf.R, h = this.m_localAnchor1.x - a.m_sweep.localCenter.x, k = this.m_localAnchor1.y - a.m_sweep.localCenter.y, o = c.col1.x * h + c.col2.x * k, k = c.col1.y * h + c.col2.y * k, h = o, c = b.m_xf.R, m = this.m_localAnchor2.x - b.m_sweep.localCenter.x, n = this.m_localAnchor2.y - b.m_sweep.localCenter.y, o = c.col1.x * m + c.col2.x * n, n = c.col1.y * m + c.col2.y * n, m = o, c = a.m_sweep.c.x + h, o = a.m_sweep.c.y + k, r = b.m_sweep.c.x + m, q = b.m_sweep.c.y + n, this.m_u1.set(c - e, o - d), this.m_u2.set(r - f, q - g), c = this.m_u1.length(), o = this.m_u2.length(), c > t.b2_linearSlop ? this.m_u1.multiply(1 /
                        c) : this.m_u1.setZero(), o > t.b2_linearSlop ? this.m_u2.multiply(1 / o) : this.m_u2.setZero(), c = this.m_constant - c - this.m_ratio * o, s = i.B2Math.max(s, -c), c = i.B2Math.clamp(c + t.b2_linearSlop, -t.b2_maxLinearCorrection, 0), q = -this.m_pulleyMass * c, c = -q * this.m_u1.x, o = -q * this.m_u1.y, r = -this.m_ratio * q * this.m_u2.x, q = -this.m_ratio * q * this.m_u2.y, a.m_sweep.c.x += a.m_invMass * c, a.m_sweep.c.y += a.m_invMass * o, a.m_sweep.a += a.m_invI * (h * o - k * c), b.m_sweep.c.x += b.m_invMass * r, b.m_sweep.c.y += b.m_invMass * q, b.m_sweep.a += b.m_invI * (m * q - n * r),
                    a.synchronizeTransform(), b.synchronizeTransform());
            this.m_limitState1 == E.B2Joint.e_atUpperLimit && (c = a.m_xf.R, h = this.m_localAnchor1.x - a.m_sweep.localCenter.x, k = this.m_localAnchor1.y - a.m_sweep.localCenter.y, o = c.col1.x * h + c.col2.x * k, k = c.col1.y * h + c.col2.y * k, h = o, c = a.m_sweep.c.x + h, o = a.m_sweep.c.y + k, this.m_u1.set(c - e, o - d), c = this.m_u1.length(), c > t.b2_linearSlop ? (this.m_u1.x *= 1 / c, this.m_u1.y *= 1 / c) : this.m_u1.setZero(), c = this.m_maxLength1 - c, s = i.B2Math.max(s, -c), c = i.B2Math.clamp(c + t.b2_linearSlop, -t.b2_maxLinearCorrection,
                0), q = -this.m_limitMass1 * c, c = -q * this.m_u1.x, o = -q * this.m_u1.y, a.m_sweep.c.x += a.m_invMass * c, a.m_sweep.c.y += a.m_invMass * o, a.m_sweep.a += a.m_invI * (h * o - k * c), a.synchronizeTransform());
            this.m_limitState2 == E.B2Joint.e_atUpperLimit && (c = b.m_xf.R, m = this.m_localAnchor2.x - b.m_sweep.localCenter.x, n = this.m_localAnchor2.y - b.m_sweep.localCenter.y, o = c.col1.x * m + c.col2.x * n, n = c.col1.y * m + c.col2.y * n, m = o, r = b.m_sweep.c.x + m, q = b.m_sweep.c.y + n, this.m_u2.set(r - f, q - g), o = this.m_u2.length(), o > t.b2_linearSlop ? (this.m_u2.x *= 1 / o, this.m_u2.y *=
                1 / o) : this.m_u2.setZero(), c = this.m_maxLength2 - o, s = i.B2Math.max(s, -c), c = i.B2Math.clamp(c + t.b2_linearSlop, -t.b2_maxLinearCorrection, 0), q = -this.m_limitMass2 * c, r = -q * this.m_u2.x, q = -q * this.m_u2.y, b.m_sweep.c.x += b.m_invMass * r, b.m_sweep.c.y += b.m_invMass * q, b.m_sweep.a += b.m_invI * (m * q - n * r), b.synchronizeTransform());
            return s < t.b2_linearSlop
        },
        solveVelocityConstraints: function() {
            var a = this.m_bodyA,
                b = this.m_bodyB,
                c;
            c = a.m_xf.R;
            var e = this.m_localAnchor1.x - a.m_sweep.localCenter.x,
                d = this.m_localAnchor1.y - a.m_sweep.localCenter.y,
                f = c.col1.x * e + c.col2.x * d,
                d = c.col1.y * e + c.col2.y * d,
                e = f;
            c = b.m_xf.R;
            var g = this.m_localAnchor2.x - b.m_sweep.localCenter.x,
                h = this.m_localAnchor2.y - b.m_sweep.localCenter.y,
                f = c.col1.x * g + c.col2.x * h,
                h = c.col1.y * g + c.col2.y * h,
                g = f,
                k, m;
            this.m_state == E.B2Joint.e_atUpperLimit && (c = a.m_linearVelocity.x + -a.m_angularVelocity * d, f = a.m_linearVelocity.y + a.m_angularVelocity * e, k = b.m_linearVelocity.x + -b.m_angularVelocity * h, m = b.m_linearVelocity.y + b.m_angularVelocity * g, c = -(this.m_u1.x * c + this.m_u1.y * f) - this.m_ratio * (this.m_u2.x *
                k + this.m_u2.y * m), m = this.m_pulleyMass * -c, c = this.m_impulse, this.m_impulse = i.B2Math.max(0, this.m_impulse + m), m = this.m_impulse - c, c = -m * this.m_u1.x, f = -m * this.m_u1.y, k = -this.m_ratio * m * this.m_u2.x, m = -this.m_ratio * m * this.m_u2.y, a.m_linearVelocity.x += a.m_invMass * c, a.m_linearVelocity.y += a.m_invMass * f, a.m_angularVelocity += a.m_invI * (e * f - d * c), b.m_linearVelocity.x += b.m_invMass * k, b.m_linearVelocity.y += b.m_invMass * m, b.m_angularVelocity += b.m_invI * (g * m - h * k));
            this.m_limitState1 == E.B2Joint.e_atUpperLimit && (c = a.m_linearVelocity.x +
                -a.m_angularVelocity * d, f = a.m_linearVelocity.y + a.m_angularVelocity * e, c = -(this.m_u1.x * c + this.m_u1.y * f), m = -this.m_limitMass1 * c, c = this.m_limitImpulse1, this.m_limitImpulse1 = i.B2Math.max(0, this.m_limitImpulse1 + m), m = this.m_limitImpulse1 - c, c = -m * this.m_u1.x, f = -m * this.m_u1.y, a.m_linearVelocity.x += a.m_invMass * c, a.m_linearVelocity.y += a.m_invMass * f, a.m_angularVelocity += a.m_invI * (e * f - d * c));
            this.m_limitState2 == E.B2Joint.e_atUpperLimit && (k = b.m_linearVelocity.x + -b.m_angularVelocity * h, m = b.m_linearVelocity.y + b.m_angularVelocity *
                g, c = -(this.m_u2.x * k + this.m_u2.y * m), m = -this.m_limitMass2 * c, c = this.m_limitImpulse2, this.m_limitImpulse2 = i.B2Math.max(0, this.m_limitImpulse2 + m), m = this.m_limitImpulse2 - c, k = -m * this.m_u2.x, m = -m * this.m_u2.y, b.m_linearVelocity.x += b.m_invMass * k, b.m_linearVelocity.y += b.m_invMass * m, b.m_angularVelocity += b.m_invI * (g * m - h * k))
        },
        initVelocityConstraints: function(a) {
            var b = this.m_bodyA,
                c = this.m_bodyB,
                e;
            e = b.m_xf.R;
            var d = this.m_localAnchor1.x - b.m_sweep.localCenter.x,
                f = this.m_localAnchor1.y - b.m_sweep.localCenter.y,
                g = e.col1.x *
                d + e.col2.x * f,
                f = e.col1.y * d + e.col2.y * f,
                d = g;
            e = c.m_xf.R;
            var h = this.m_localAnchor2.x - c.m_sweep.localCenter.x,
                i = this.m_localAnchor2.y - c.m_sweep.localCenter.y,
                g = e.col1.x * h + e.col2.x * i,
                i = e.col1.y * h + e.col2.y * i,
                h = g;
            e = c.m_sweep.c.x + h;
            var g = c.m_sweep.c.y + i,
                k = this.m_ground.m_xf.position.x + this.m_groundAnchor2.x,
                m = this.m_ground.m_xf.position.y + this.m_groundAnchor2.y;
            this.m_u1.set(b.m_sweep.c.x + d - (this.m_ground.m_xf.position.x + this.m_groundAnchor1.x), b.m_sweep.c.y + f - (this.m_ground.m_xf.position.y + this.m_groundAnchor1.y));
            this.m_u2.set(e - k, g - m);
            e = this.m_u1.length();
            g = this.m_u2.length();
            e > t.b2_linearSlop ? this.m_u1.multiply(1 / e) : this.m_u1.setZero();
            g > t.b2_linearSlop ? this.m_u2.multiply(1 / g) : this.m_u2.setZero();
            0 < this.m_constant - e - this.m_ratio * g ? (this.m_state = E.B2Joint.e_inactiveLimit, this.m_impulse = 0) : this.m_state = E.B2Joint.e_atUpperLimit;
            e < this.m_maxLength1 ? (this.m_limitState1 = E.B2Joint.e_inactiveLimit, this.m_limitImpulse1 = 0) : this.m_limitState1 = E.B2Joint.e_atUpperLimit;
            g < this.m_maxLength2 ? (this.m_limitState2 = E.B2Joint.e_inactiveLimit,
                this.m_limitImpulse2 = 0) : this.m_limitState2 = E.B2Joint.e_atUpperLimit;
            e = d * this.m_u1.y - f * this.m_u1.x;
            g = h * this.m_u2.y - i * this.m_u2.x;
            this.m_limitMass1 = b.m_invMass + b.m_invI * e * e;
            this.m_limitMass2 = c.m_invMass + c.m_invI * g * g;
            this.m_pulleyMass = this.m_limitMass1 + this.m_ratio * this.m_ratio * this.m_limitMass2;
            this.m_limitMass1 = 1 / this.m_limitMass1;
            this.m_limitMass2 = 1 / this.m_limitMass2;
            this.m_pulleyMass = 1 / this.m_pulleyMass;
            a.warmStarting ? (this.m_impulse *= a.dtRatio, this.m_limitImpulse1 *= a.dtRatio, this.m_limitImpulse2 *=
                    a.dtRatio, a = (-this.m_impulse - this.m_limitImpulse1) * this.m_u1.x, e = (-this.m_impulse - this.m_limitImpulse1) * this.m_u1.y, g = (-this.m_ratio * this.m_impulse - this.m_limitImpulse2) * this.m_u2.x, k = (-this.m_ratio * this.m_impulse - this.m_limitImpulse2) * this.m_u2.y, b.m_linearVelocity.x += b.m_invMass * a, b.m_linearVelocity.y += b.m_invMass * e, b.m_angularVelocity += b.m_invI * (d * e - f * a), c.m_linearVelocity.x += c.m_invMass * g, c.m_linearVelocity.y += c.m_invMass * k, c.m_angularVelocity += c.m_invI * (h * k - i * g)) : this.m_limitImpulse2 = this.m_limitImpulse1 =
                this.m_impulse = 0
        },
        getReactionTorque: function() {
            return 0
        },
        getReactionForce: function(a) {
            return new i.B2Vec2(a * this.m_impulse * this.m_u2.x, a * this.m_impulse * this.m_u2.y)
        },
        getAnchorB: function() {
            return this.m_bodyB.getWorldPoint(this.m_localAnchor2)
        },
        getAnchorA: function() {
            return this.m_bodyA.getWorldPoint(this.m_localAnchor1)
        },
        __class__: E.B2PulleyJoint
    });
    var r, A, L, xa, fc;
    ta = function() {};
    X = void 0;
    aa = void 0;
    C = void 0;
    Ha = void 0;
    Ia = void 0;
    ea = void 0;
    Mb = void 0;
    Nb = void 0;
    jb = void 0;
    Ob = void 0;
    pc = void 0;
    jc = void 0;
    h["flambe.util.Disposable"] =
        ta;
    ta.__name__ = ["flambe", "util", "Disposable"];
    ta.prototype = {
        __class__: ta
    };
    r = function() {
        this._comps = [];
        this._compMap = {};
        this._children = []
    };
    h["flambe.Entity"] = r;
    r.__name__ = ["flambe", "Entity"];
    r.__interfaces__ = [ta];
    r.prototype = {
        dispose: function() {
            null != this.parent && this.parent.removeChild(this);
            for (var a = 0; a < this._comps.length;) {
                var b = this._comps[a];
                if (null != b) {
                    var c = b.getName();
                    this._comps[a] = null;
                    delete this._compMap[c];
                    b.onRemoved();
                    b.owner = null;
                    b.onDispose()
                }++a
            }
            this.disposeChildren()
        },
        disposeChildren: function() {
            for (var a =
                    0; a < this._children.length;) {
                var b = this._children[a];
                null != b && (this._children[a] = null, b.parent = null, b.dispose());
                ++a
            }
        },
        onRemoved: function() {},
        onAdded: function() {},
        removeChild: function(a) {
            var b = ha.indexOf(this._children, a);
            0 <= b && (this._children[b] = null, a.parent = null, a.onRemoved())
        },
        addChild: function(a) {
            null != a.parent && a.parent.removeChild(a);
            a.parent = this;
            this._children.push(a);
            a.onAdded()
        },
        visit: function(a, b, c) {
            if (a.enterEntity(this)) {
                if (b)
                    for (var e = 0; e < this._comps.length;) {
                        var d = this._comps[e];
                        null ==
                            d ? this._comps.splice(e, 1) : (d.visit(a), ++e)
                    }
                if (c)
                    for (e = 0; e < this._children.length;) d = this._children[e], null == d ? this._children.splice(e, 1) : (d.visit(a, b, c), ++e);
                a.leaveEntity(this)
            }
        },
        remove: function(a) {
            if (a.owner == this) {
                delete this._compMap[a.getName()];
                var b = ha.indexOf(this._comps, a);
                0 <= b && (this._comps[b] = null);
                a.onRemoved();
                a.owner = null
            }
        },
        add: function(a) {
            var b = a.getName(),
                c = this._compMap[b];
            null != c && this.remove(c);
            this._compMap[b] = a;
            this._comps.push(a);
            a.owner = this;
            a.onAdded();
            return this
        },
        __class__: r
    };
    g = {};
    o = void 0;
    f = void 0;
    g.Core = function() {
        this.mManagersInitialized = this.mManagerCount = 0;
        r.call(this);
        if (null != g.Core.instance) throw "There is already one instance of the core running.";
        g.Core.instance = this;
        this.init()
    };
    h["com.bkom.core.Core"] = g.Core;
    g.Core.__name__ = ["com", "bkom", "core", "Core"];
    g.Core.__super__ = r;
    g.Core.prototype = w(r.prototype, {
        onInitFinished: function() {
            A._platform.getStage().lockOrientation(ca.Landscape)
        },
        onManagerInitialized: function() {
            this.mManagersInitialized++;
            if (this.mManagersInitialized >=
                this.mManagerCount) {
                for (var a = 0, b = this.mManagersToInit; a < b.length;) {
                    var c = b[a];
                    ++a;
                    this.add(c)
                }
                a = 0;
                for (b = this.mManagersToInit; a < b.length;) c = b[a], ++a, c.allManagersInitialized();
                this.mManagersToInit = null;
                this.onInitFinished()
            }
        },
        createManagers: function() {
            for (var a = g.manager.EManagersDef.getManagerDefs(), b = a.iterator(); b.hasNext();) {
                var c = b.next();
                this.mManagerCount++
            }
            this.mManagersToInit = [];
            for (a = a.iterator(); a.hasNext();) c = a.next(), c = J.createInstance(J.resolveClass(c), []), c.onInitFinished.connect(q(this,
                this.onManagerInitialized)).once(), this.mManagersToInit.push(c), F.__instanceof(c, g.loader.ManifestLoader) && this.add(c);
            c = 0;
            for (a = this.mManagersToInit; c < a.length;) b = a[c], ++c, b.init()
        },
        init: function() {
            o.Temp.init();
            this.createManagers()
        },
        __class__: g.Core
    });
    L = function() {};
    h["flambe.Component"] = L;
    L.__name__ = ["flambe", "Component"];
    L.__interfaces__ = [ta];
    L.prototype = {
        visit: function(a) {
            a.acceptComponent(this)
        },
        dispose: function() {
            null != this.owner && this.owner.remove(this);
            this.onDispose()
        },
        onUpdate: function() {},
        onDispose: function() {},
        onRemoved: function() {},
        onAdded: function() {},
        getName: function() {
            return null
        },
        __class__: L
    };
    g.manager = {};
    g.manager.AbstractManager = function() {
        this.onInitFinished = new X
    };
    h["com.bkom.core.manager.AbstractManager"] = g.manager.AbstractManager;
    g.manager.AbstractManager.__name__ = ["com", "bkom", "core", "manager", "AbstractManager"];
    g.manager.AbstractManager.__super__ = L;
    g.manager.AbstractManager.prototype = w(L.prototype, {
        getName: function() {
            return "AbstractManager"
        },
        allManagersInitialized: function() {},
        initFinished: function() {
            this.onInitFinished.emit()
        },
        init: function() {},
        __class__: g.manager.AbstractManager
    });
    g.LayerManager = function() {
        g.manager.AbstractManager.call(this);
        this.pause = (new r).add(new x);
        this.menu = (new r).add(new x);
        this.hud = (new r).add(new x);
        this.world = (new r).add(new x)
    };
    h["com.bkom.core.LayerManager"] = g.LayerManager;
    g.LayerManager.__name__ = ["com", "bkom", "core", "LayerManager"];
    g.LayerManager.__super__ = g.manager.AbstractManager;
    g.LayerManager.prototype = w(g.manager.AbstractManager.prototype, {
        getName: function() {
            return "LayerManager"
        },
        onAppResize: function() {
            A._platform.getStage().orientation._value == ca.Landscape ? (A.root.visit = this.oldVisit, o.BrowserUtil.callJSFunction("hidePortrait()")) : (A.root.visit = function() {}, o.BrowserUtil.callJSFunction("showPortrait()"))
        },
        init: function() {
            g.manager.AbstractManager.prototype.init.call(this);
            var a = g.Core.instance,
                b = Math.max(A._platform.getStage().getWidth(), A._platform.getStage().getHeight());
            a.addChild((new r).add(new ib(0, b, b)));
            a.addChild(this.world);
            a.addChild(this.hud);
            a.addChild(this.menu);
            a.addChild(this.pause);
            this.oldVisit = (rc = A.root, q(rc, rc.visit));
            o.BrowserUtil.isMobile() && (A._platform.getStage().resize.connect(q(this, this.onAppResize)), this.onAppResize());
            this.initFinished()
        },
        __class__: g.LayerManager
    });
    g.animations = {};
    g.animations.TexturePackerLibrary = function(a, b, c) {
        null == c && (c = 15);
        b = b.split(" ");
        this._symbols = new H;
        for (var e = 0; e < b.length;) {
            var d = b[e];
            ++e;
            var f = a.loadFile(d + "library.json"); - 1 != f.indexOf(".swf/") && (f = Ca.replace(f, ".swf/",
                "_"));
            var f = ra.parse(f),
                d = a.loadTexture(d + f.meta.image),
                h = c;
            this._anchor = new Q;
            this._anchor.x = f.anchor.x;
            this._anchor.y = f.anchor.y;
            for (var i, k, m = 0, n = f.frames; m < n.length;) {
                var o = n[m];
                ++m;
                h = c;
                k = G.substr(o.filename, 0, o.filename.lastIndexOf("_"));
                i = this._symbols.get(k);
                null == i && (f.fps && null != f.fps[k] && (h = f.fps[k]), i = new g.animations.TexturePackerSymbol(h, k, new Q(o.sourceSize.w, o.sourceSize.h)), this._symbols.set(k, i));
                h = this.createBitmap(o, d);
                this._symbols.set(o.filename, h);
                i.addFrame(h)
            }
        }
    };
    h["com.bkom.core.animations.TexturePackerLibrary"] =
        g.animations.TexturePackerLibrary;
    g.animations.TexturePackerLibrary.__name__ = ["com", "bkom", "core", "animations", "TexturePackerLibrary"];
    g.animations.TexturePackerLibrary.prototype = {
        createBitmap: function(a, b) {
            return new Ga({
                symbol: a.filename,
                rect: [a.frame.x, a.frame.y, a.frame.w, a.frame.h],
                offset: [a.spriteSourceSize.x, a.spriteSourceSize.y],
                md5: "fasdfasdf12412"
            }, b)
        },
        getMovie: function() {
            for (var a = new g.animations.TexturePackerMovie, b = this._symbols.iterator(), c; b.hasNext();)
                if (c = b.next(), F.__instanceof(c,
                        g.animations.TexturePackerSymbol)) {
                    var e = c.createSprite();
                    a.addAnimation(c.getName(), e)
                }
            a.setupAnchors(this._anchor.x, this._anchor.y);
            return a
        },
        __class__: g.animations.TexturePackerLibrary
    };
    Hb = function() {
        this.identity()
    };
    Q = void 0;
    hb = void 0;
    h["flambe.math.Matrix"] = Hb;
    Hb.__name__ = ["flambe", "math", "Matrix"];
    Hb.prototype = {
        inverseTransform: function(a, b, c) {
            var e = this.determinant();
            if (0 == e) return !1;
            a -= this.m02;
            b -= this.m12;
            c.x = (a * this.m11 - b * this.m01) / e;
            c.y = (b * this.m00 - a * this.m10) / e;
            return !0
        },
        determinant: function() {
            return this.m00 *
                this.m11 - this.m01 * this.m10
        },
        rotate: function(a) {
            var b = Math.sin(a),
                a = Math.cos(a),
                c = -this.m00 * b + this.m01 * a;
            this.m00 = this.m00 * a + this.m01 * b;
            this.m01 = c;
            c = this.m11 * a - this.m10 * b;
            this.m10 = this.m11 * b + this.m10 * a;
            this.m11 = c
        },
        scale: function(a, b) {
            this.m00 *= a;
            this.m11 *= b;
            this.m01 *= b;
            this.m10 *= a
        },
        translate: function(a, b) {
            this.m02 += this.m00 * a + this.m01 * b;
            this.m12 += this.m11 * b + this.m10 * a
        },
        copyFrom: function(a) {
            this.m00 = a.m00;
            this.m01 = a.m01;
            this.m02 = a.m02;
            this.m10 = a.m10;
            this.m11 = a.m11;
            this.m12 = a.m12
        },
        identity: function() {
            this.m00 =
                1;
            this.m10 = this.m02 = this.m01 = 0;
            this.m11 = 1;
            this.m12 = 0
        },
        __class__: Hb
    };
    Q = function(a, b) {
        null == b && (b = 0);
        null == a && (a = 0);
        this.x = a;
        this.y = b
    };
    h["flambe.math.Point"] = Q;
    Q.__name__ = ["flambe", "math", "Point"];
    Q.prototype = {
        distanceToSquared: function(a, b) {
            var c = this.x - a,
                e = this.y - b;
            return c * c + e * e
        },
        distanceTo: function(a, b) {
            return Math.sqrt(this.distanceToSquared(a, b))
        },
        setXY: function(a, b) {
            this.x = a;
            this.y = b
        },
        __class__: Q
    };
    x = function() {
        var a = this,
            b = function() {
                a._localMatrixDirty = !0
            };
        this.x = new N(0, b);
        this.y = new N(0, b);
        this.rotation = new N(0, b);
        this.scaleX = new N(1, b);
        this.scaleY = new N(1, b);
        this.alpha = new N(1);
        this.anchorX = new N(0, b);
        this.anchorY = new N(0, b);
        this.visible = new aa(!0);
        this.blendMode = null;
        this._localMatrixDirty = !1;
        this._listenerCount = 0
    };
    ca = void 0;
    ib = void 0;
    $ = void 0;
    S = void 0;
    qa = void 0;
    W = void 0;
    ya = void 0;
    Ib = void 0;
    da = void 0;
    Jb = void 0;
    Kb = void 0;
    Lb = void 0;
    h["flambe.display.Sprite"] = x;
    x.__name__ = ["flambe", "display", "Sprite"];
    x.__super__ = L;
    x.prototype = w(L.prototype, {
        getName: function() {
            return "Sprite"
        },
        _internal_onListenersRemoved: function(a) {
            this._listenerCount -=
                a;
            0 == this._listenerCount && G.remove(x._internal_interactiveSprites, this)
        },
        _internal_onListenersAdded: function(a) {
            0 == this._listenerCount && x._internal_interactiveSprites.unshift(this);
            this._listenerCount += a
        },
        getPointerUp: function() {
            null == this._internal_pointerUp && (this._internal_pointerUp = new $.NotifyingSignal1(this));
            return this._internal_pointerUp
        },
        getPointerMove: function() {
            null == this._internal_pointerMove && (this._internal_pointerMove = new $.NotifyingSignal1(this));
            return this._internal_pointerMove
        },
        getPointerDown: function() {
            null == this._internal_pointerDown && (this._internal_pointerDown = new $.NotifyingSignal1(this));
            return this._internal_pointerDown
        },
        updateViewMatrix: function() {
            null == this._viewMatrix && (this._viewMatrix = new Hb);
            if (this.isMatrixDirty()) {
                var a = this.getParentSprite();
                this._viewMatrix.copyFrom(null != a ? a.getViewMatrix() : x.IDENTITY);
                this._viewMatrix.translate(this.x._value, this.y._value);
                this._viewMatrix.rotate(3.141592653589793 * this.rotation._value / 180);
                this._viewMatrix.scale(this.scaleX._value,
                    this.scaleY._value);
                this._viewMatrix.translate(-this.anchorX._value, -this.anchorY._value);
                this._localMatrixDirty = !1;
                null != a && (this._parentMatrixUpdateCount = a._matrixUpdateCount);
                ++this._matrixUpdateCount
            }
        },
        getParentSprite: function() {
            for (var a = this.owner.parent; null != a;) {
                var b = a._compMap.Sprite;
                if (null != b) return b;
                a = a.parent
            }
            return null
        },
        isMatrixDirty: function() {
            if (this._localMatrixDirty) return !0;
            var a = this.getParentSprite();
            return null == a ? !1 : this._parentMatrixUpdateCount != a._matrixUpdateCount || a.isMatrixDirty()
        },
        onRemoved: function() {
            0 < this._listenerCount && G.remove(x._internal_interactiveSprites, this)
        },
        onAdded: function() {
            0 < this._listenerCount && x._internal_interactiveSprites.unshift(this)
        },
        draw: function() {},
        onUpdate: function(a) {
            this.x.update(a);
            this.y.update(a);
            this.rotation.update(a);
            this.scaleX.update(a);
            this.scaleY.update(a);
            this.alpha.update(a);
            this.anchorX.update(a);
            this.anchorY.update(a)
        },
        centerAnchor: function() {
            this.anchorX.set(this.getNaturalWidth() / 2);
            this.anchorY.set(this.getNaturalHeight() / 2);
            return this
        },
        getViewMatrix: function() {
            this.updateViewMatrix();
            return this._viewMatrix
        },
        containsLocal: function(a, b) {
            return 0 <= a && a < this.getNaturalWidth() && 0 <= b && b < this.getNaturalHeight()
        },
        contains: function(a, b) {
            return this.getViewMatrix().inverseTransform(a, b, x._scratchPoint) && this.containsLocal(x._scratchPoint.x, x._scratchPoint.y)
        },
        getNaturalHeight: function() {
            return 0
        },
        getNaturalWidth: function() {
            return 0
        },
        __class__: x
    });
    g.animations.TexturePackerMovie = function() {
        this._locked = !1;
        x.call(this);
        this._animations = new H;
        this.onChangeAnim = new C
    };
    h["com.bkom.core.animations.TexturePackerMovie"] = g.animations.TexturePackerMovie;
    g.animations.TexturePackerMovie.__name__ = ["com", "bkom", "core", "animations", "TexturePackerMovie"];
    g.animations.TexturePackerMovie.__super__ = x;
    g.animations.TexturePackerMovie.prototype = w(x.prototype, {
        getName: function() {
            return "Sprite"
        },
        get_animations: function() {
            return this._animations
        },
        center: function() {
            for (var a = this._animations.iterator(); a.hasNext();) {
                var b = a.next();
                b.anchorX.set(b.getNaturalWidth() /
                    2);
                b.anchorY.set(b.getNaturalHeight() / 2);
                b
            }
        },
        setupAnchors: function(a, b) {
            for (var c = this._animations.iterator(); c.hasNext();) {
                var e = c.next();
                e.anchorX.set(a);
                e.anchorY.set(b)
            }
        },
        get_currentAnimation: function() {
            return this._currentAnimation
        },
        playAnimation: function(a, b, c) {
            null == c && (c = !1);
            null == b && (b = !1);
            if (this._locked && !b) return null;
            if (null != this._currentAnimation && this._currentAnimation.symbol.getName() == a && !c) return this._currentAnimation;
            if (!this._animations.exists(a)) return null;
            this._currentAnimation =
                this._animations.get(a);
            this.onChangeAnim.emit(this._currentAnimation);
            this._currentAnimation.play();
            this._visual.add(this._currentAnimation);
            return this._currentAnimation
        },
        unlock: function() {
            this._locked = !1
        },
        lock: function() {
            this._locked = !0
        },
        onRemoved: function() {
            x.prototype.onRemoved.call(this);
            this.owner.removeChild(this._visual)
        },
        onDispose: function() {
            x.prototype.onDispose.call(this);
            if (null != this._animations)
                for (var a = this._animations.iterator(); a.hasNext();) a.next().dispose();
            this._currentAnimation =
                this._animations = null;
            this._visual.dispose()
        },
        onAdded: function() {
            x.prototype.onAdded.call(this);
            this._visual = new r;
            this.owner.addChild(this._visual)
        },
        addAnimation: function(a, b) {
            this._animations.set(a, b)
        },
        __class__: g.animations.TexturePackerMovie
    });
    g.animations.TexturePackerSprite = function(a) {
        this._isPlaying = !1;
        x.call(this);
        this.symbol = a;
        this.animFinishedPlaying = new C;
        this.speed = new N(1);
        this._sprites = [];
        for (var b = 0, a = a.get_frames(); b < a.length;) {
            var c = a[b];
            ++b;
            this._sprites.push(c.createSprite())
        }
        this._position =
            this._frame = 0
    };
    h["com.bkom.core.animations.TexturePackerSprite"] = g.animations.TexturePackerSprite;
    g.animations.TexturePackerSprite.__name__ = ["com", "bkom", "core", "animations", "TexturePackerSprite"];
    g.animations.TexturePackerSprite.__super__ = x;
    g.animations.TexturePackerSprite.prototype = w(x.prototype, {
        getName: function() {
            return "Sprite"
        },
        set_loop: function(a) {
            return this._loop = a
        },
        get_loop: function() {
            return this._loop
        },
        get_isPlaying: function() {
            return this._isPlaying
        },
        getNaturalHeight: function() {
            return this.symbol.get_originalSize().x
        },
        getNaturalWidth: function() {
            return this.symbol.get_originalSize().y
        },
        "goto": function(a) {
            this._frame = a;
            (this._frame | 0) >= this._sprites.length && (this._position = this._frame = 0);
            this._currentFrame = this._sprites[this._frame | 0];
            this._visual.add(this._currentFrame)
        },
        stop: function() {
            this._isPlaying = !1
        },
        play: function() {
            this._isPlaying = !0
        },
        onUpdate: function(a) {
            x.prototype.onUpdate.call(this, a);
            if (this._isPlaying && (this.speed.update(a), this._position += this.speed._value * a, (this._position * this.symbol.get_frameRate() |
                    0) >= this._sprites.length && (this._position %= this.symbol.get_duration(), this.animFinishedPlaying.emit(this)), this._isPlaying)) this["goto"](this._position * this.symbol.get_frameRate())
        },
        onDispose: function() {
            x.prototype.onDispose.call(this);
            this.animFinishedPlaying = null;
            null != this._visual && this._visual.dispose();
            this._currentFrame = this._sprites = this._visual = null
        },
        onRemoved: function() {
            x.prototype.onRemoved.call(this);
            this.owner.removeChild(this._visual);
            this._visual.remove(this._currentFrame)
        },
        onAdded: function() {
            x.prototype.onAdded.call(this);
            this._visual = new r;
            this.owner.addChild(this._visual);
            this._frame = this._position = 0;
            this["goto"](this._frame);
            this.play()
        },
        __class__: g.animations.TexturePackerSprite
    });
    bb = function() {};
    Ga = void 0;
    cb = void 0;
    db = void 0;
    eb = void 0;
    fb = void 0;
    gb = void 0;
    Fb = void 0;
    Gb = void 0;
    h["flambe.swf.Symbol"] = bb;
    bb.__name__ = ["flambe", "swf", "Symbol"];
    bb.prototype = {
        __class__: bb
    };
    g.animations.TexturePackerSymbol = function(a, b, c) {
        this._frameRate = a;
        this._frames = [];
        this._name = b;
        this._originalSize = c
    };
    h["com.bkom.core.animations.TexturePackerSymbol"] =
        g.animations.TexturePackerSymbol;
    g.animations.TexturePackerSymbol.__name__ = ["com", "bkom", "core", "animations", "TexturePackerSymbol"];
    g.animations.TexturePackerSymbol.__interfaces__ = [bb];
    g.animations.TexturePackerSymbol.prototype = {
        get_duration: function() {
            return this._frames.length / this.get_frameRate()
        },
        get_originalSize: function() {
            return this._originalSize
        },
        createSprite: function() {
            return new g.animations.TexturePackerSprite(this)
        },
        get_frameRate: function() {
            return this._frameRate
        },
        get_frames: function() {
            return this._frames
        },
        getName: function() {
            return this._name
        },
        addFrame: function(a) {
            this._frames.push(a)
        },
        __class__: g.animations.TexturePackerSymbol
    };
    g.config = {};
    g.config.CoreConfig = function() {};
    h["com.bkom.core.config.CoreConfig"] = g.config.CoreConfig;
    g.config.CoreConfig.__name__ = ["com", "bkom", "core", "config", "CoreConfig"];
    g.loader = {};
    g.loader.ManifestLoader = function() {
        g.manager.AbstractManager.call(this);
        this.mLoadedPacks = new H
    };
    h["com.bkom.core.loader.ManifestLoader"] = g.loader.ManifestLoader;
    g.loader.ManifestLoader.__name__ = ["com", "bkom", "core", "loader", "ManifestLoader"];
    g.loader.ManifestLoader.__super__ = g.manager.AbstractManager;
    g.loader.ManifestLoader.prototype = w(g.manager.AbstractManager.prototype, {
        getName: function() {
            return "ManifestLoader"
        },
        load: function(a, b) {
            var c = this;
            if (this.mLoadedPacks.exists(a)) b(this.mLoadedPacks.get(a));
            else {
                var e = P.build(a);
                A._platform.loadAssetPack(e).get(function(e) {
                    c.mLoadedPacks.set(a, e);
                    null != b && b(e)
                })
            }
        },
        init: function() {
            g.manager.AbstractManager.prototype.init.call(this);
            this.initFinished()
        },
        __class__: g.loader.ManifestLoader
    });
    g.loading = {};
    g.loading.Loading = function() {
        this.onReady = new X
    };
    h["com.bkom.core.loading.Loading"] = g.loading.Loading;
    g.loading.Loading.__name__ = ["com", "bkom", "core", "loading", "Loading"];
    g.loading.Loading.getInstance = function() {
        null == g.loading.Loading.mInstance && (g.loading.Loading.mInstance = new g.loading.Loading);
        return g.loading.Loading.mInstance
    };
    g.loading.Loading.prototype = {
        hide: function() {
            null != this.mVisual.parent && this.mMenu.hide()
        },
        show: function() {
            A.root.addChild(this.mVisual);
            this.mMenu.show()
        },
        onLoadingMenuReady: function() {
            var a = new x;
            A._platform.getStage().resize.connect(q(this, this.onAppResize));
            o.FullScreenUtil.resizeSprite(a, 855, 500);
            this.mVisual.add(a);
            this.onReady.emit()
        },
        onAppResize: function() {
            (A._platform.getStage().orientation._value == ca.Landscape || !o.BrowserUtil.isMobile()) && o.FullScreenUtil.resizeSprite(this.mVisual._compMap.Sprite, 855, 500)
        },
        init: function() {
            this.mMenu = new g.loading.LoadingMenu;
            this.mVisual = new r;
            this.mVisual.add(this.mMenu);
            this.mMenu.onInitialized.connect(q(this,
                this.onLoadingMenuReady)).once();
            this.mMenu.init("Loading")
        },
        __class__: g.loading.Loading
    };
    g.menu = {};
    g.menu.AbstractMenu = function() {
        this.mMenuItems = new H;
        this.onShown = new X;
        this.onHidden = new X;
        this.onInitialized = new X
    };
    h["com.bkom.core.menu.AbstractMenu"] = g.menu.AbstractMenu;
    g.menu.AbstractMenu.__name__ = ["com", "bkom", "core", "menu", "AbstractMenu"];
    g.menu.AbstractMenu.__super__ = L;
    g.menu.AbstractMenu.prototype = w(L.prototype, {
        getName: function() {
            return "AbstractMenu"
        },
        getShown: function() {
            return null != this.owner.parent
        },
        onMenuHidden: function() {
            this.onHidden.emit();
            this.owner.parent.removeChild(this.owner)
        },
        hide: function() {
            this.onMenuHidden()
        },
        onMenuShown: function() {
            this.onShown.emit()
        },
        show: function() {
            this.onMenuShown()
        },
        onPackLoaded: function(a) {
            this.mAssetPack = a;
            for (var b = ra.parse(a.loadFile(this.getDefinitionFileName())).items, c, e = 0; e < b.length;) {
                var d = b[e];
                ++e;
                if ("Anchor" == d.assetId) c = new x;
                else if ("Txt" != d.assetId && !1 == d.isAnimated) c = a.loadTexture("images/" + u.string(d.assetId) + ".png", !1), null == c && (c = a.loadTexture("images/" +
                    u.string(d.assetId) + ".jpg")), c = new S(c);
                else if ("Txt" != d.assetId && d.isAnimated) null == this.mLibrary && (this.mLibrary = new cb(a, "anims")), c = this.mLibrary.createSprite(d.assetId, !0);
                else return;
                c.scaleX.set(d.scaleX);
                c.scaleY.set(d.scaleY);
                c.x.set(d.x);
                c.y.set(d.y);
                this.mMenuItems.set(d.name, c);
                d.visible && this.owner.addChild((new r).add(c))
            }
            this.onInitialized.emit()
        },
        getDefinitionFileName: function() {
            return "definition.json"
        },
        init: function(a) {
            g.Core.instance._compMap.ManifestLoader.load(a, q(this, this.onPackLoaded))
        },
        __class__: g.menu.AbstractMenu
    });
    g.loading.LoadingMenu = function() {
        g.menu.AbstractMenu.call(this)
    };
    h["com.bkom.core.loading.LoadingMenu"] = g.loading.LoadingMenu;
    g.loading.LoadingMenu.__name__ = ["com", "bkom", "core", "loading", "LoadingMenu"];
    g.loading.LoadingMenu.__super__ = g.menu.AbstractMenu;
    g.loading.LoadingMenu.prototype = w(g.menu.AbstractMenu.prototype, {
        getName: function() {
            return "AbstractMenu"
        },
        onMenuHidden: function() {
            g.menu.AbstractMenu.prototype.onMenuHidden.call(this);
            this._tweenConnection.dispose();
            this._tweenConnection = null
        },
        onAlphaTweenFinished: function() {
            var a = this.mMenuItems.get("glow");
            a.alpha.animateTo(0 == a.alpha._value ? 1 : 0, 0.3)
        },
        onMenuShown: function() {
            g.menu.AbstractMenu.prototype.onMenuShown.call(this);
            var a = this.mMenuItems.get("glow");
            a.alpha.set(1);
            a.alpha.animateTo(0, 0.3);
            this._tweenConnection = a.alpha.behaviorComplete.connect(q(this, this.onAlphaTweenFinished))
        },
        init: function(a) {
            a = P.build(a);
            A._platform.loadAssetPack(a).get(q(this, this.onPackLoaded))
        },
        __class__: g.loading.LoadingMenu
    });
    g.manager.EManagersDef = function() {};
    h["com.bkom.core.manager.EManagersDef"] = g.manager.EManagersDef;
    g.manager.EManagersDef.__name__ = ["com", "bkom", "core", "manager", "EManagersDef"];
    g.manager.EManagersDef.init = function() {
        g.manager.EManagersDef.mManagerDefs.set("LayerManager", "com.bkom.core.LayerManager");
        g.manager.EManagersDef.mManagerDefs.set("Loader", "com.bkom.core.loader.ManifestLoader");
        g.manager.EManagersDef.mManagerDefs.set("MenuManager", "com.bkom.core.menu.MenuManager");
        g.manager.EManagersDef.mManagerDefs.set("SoundManager",
            "com.bkom.core.sound.SoundManager");
        g.manager.EManagersDef.link()
    };
    g.manager.EManagersDef.link = function() {};
    g.manager.EManagersDef.getManagerDefs = function() {
        return g.manager.EManagersDef.mManagerDefs
    };
    g.menu.EMenus = function() {};
    h["com.bkom.core.menu.EMenus"] = g.menu.EMenus;
    g.menu.EMenus.__name__ = ["com", "bkom", "core", "menu", "EMenus"];
    g.menu.EMenus.init = function() {
        g.menu.EMenus.link()
    };
    g.menu.EMenus.link = function() {};
    g.menu.EMenus.getMenusDefs = function() {
        return g.menu.EMenus.mMenusDef
    };
    g.menu.MenuManager =
        function() {
            this.mMenuInited = this.mMenuCount = 0;
            g.manager.AbstractManager.call(this)
        };
    h["com.bkom.core.menu.MenuManager"] = g.menu.MenuManager;
    g.menu.MenuManager.__name__ = ["com", "bkom", "core", "menu", "MenuManager"];
    g.menu.MenuManager.__super__ = g.manager.AbstractManager;
    g.menu.MenuManager.prototype = w(g.manager.AbstractManager.prototype, {
        getName: function() {
            return "MenuManager"
        },
        hideMenu: function(a) {
            if (!this.mMenus.exists(a)) return null;
            a = this.mMenus.get(a)._compMap.AbstractMenu;
            if (!a.getShown()) return a;
            a.hide();
            return a
        },
        showMenu: function(a) {
            if (!this.mMenus.exists(a)) return null;
            var a = this.mMenus.get(a),
                b = a._compMap.AbstractMenu;
            if (b.getShown()) return b;
            this.mMenuContainer.addChild(a);
            b.show();
            return b
        },
        onMenuInitFinished: function() {
            this.mMenuInited++;
            this.mMenuInited >= this.mMenuCount && this.initFinished()
        },
        createMenus: function() {
            for (var a = g.menu.EMenus.getMenusDefs(), b = a.iterator(); b.hasNext();) b.next(), this.mMenuCount++;
            for (var c, b = a.keys(); b.hasNext();) {
                var e = b.next();
                c = a.get(e);
                c = J.createInstance(J.resolveClass(c), []);
                this.mMenus.set(e, (new r).add(c).add(new x));
                c.onInitialized.connect(q(this, this.onMenuInitFinished)).once();
                c.init(e)
            }
            0 == this.mMenuCount && this.initFinished()
        },
        onAppResize: function() {
            (A._platform.getStage().orientation._value == ca.Landscape || !o.BrowserUtil.isMobile()) && o.FullScreenUtil.resizeSprite(this.mMenuContainer._compMap.Sprite, 855, 500)
        },
        allManagersInitialized: function() {
            g.manager.AbstractManager.prototype.allManagersInitialized.call(this);
            this.mMenuContainer = g.Core.instance._compMap.LayerManager.menu;
            o.FullScreenUtil.resizeSprite(this.mMenuContainer._compMap.Sprite, 855, 500);
            A._platform.getStage().resize.connect(q(this, this.onAppResize))
        },
        init: function() {
            g.manager.AbstractManager.prototype.init.call(this);
            this.mMenus = new H;
            this.createMenus()
        },
        __class__: g.menu.MenuManager
    });
    g.sound = {};
    g.sound.SoundManager = function() {
        g.manager.AbstractManager.call(this)
    };
    h["com.bkom.core.sound.SoundManager"] = g.sound.SoundManager;
    g.sound.SoundManager.__name__ = ["com", "bkom", "core", "sound", "SoundManager"];
    g.sound.SoundManager.__super__ =
        g.manager.AbstractManager;
    g.sound.SoundManager.prototype = w(g.manager.AbstractManager.prototype, {
        getName: function() {
            return "SoundManager"
        },
        get_isMute: function() {
            return this._isMute
        },
        onAppHidden: function() {
            this._isMute ? this._needsUnmuting = !1 : (this._needsUnmuting = !0, this.mute())
        },
        onAppShown: function() {
            this._needsUnmuting && this.unmute()
        },
        loadSounds: function(a) {
            var b = this,
                c = this.owner._compMap.ManifestLoader,
                e = function(c) {
                    b._musicPackage = c;
                    o.BrowserUtil.isMobile() && (c = B.window, c.addEventListener("pagehide",
                        q(b, b.onAppHidden), !1), c.addEventListener("pageshow", q(b, b.onAppShown), !1));
                    null != a && a()
                };
            o.BrowserUtil.isMobile() ? c.load("SoundsMobile", e) : o.BrowserUtil.isFirefox() || o.BrowserUtil.isOpera() ? c.load("SoundsAll_ogg", e) : c.load("SoundsAll_mp3", e);
            this._isMute = !1
        },
        unmute: function() {
            if (null != this._musicPackage) {
                if (o.BrowserUtil.isMobile()) this.resume();
                else {
                    null != this._playingMusic && this._playingMusic.volume.set(1);
                    for (var a = 0, b = this._playingSfx; a < b.length;) {
                        var c = b[a];
                        ++a;
                        c.volume.set(1)
                    }
                }
                this._isMute = !1
            }
        },
        mute: function() {
            if (null != this._musicPackage) {
                if (o.BrowserUtil.isMobile()) this.pause();
                else {
                    null != this._playingMusic && this._playingMusic.volume.set(0);
                    for (var a = 0, b = this._playingSfx; a < b.length;) {
                        var c = b[a];
                        ++a;
                        c.volume.set(0)
                    }
                }
                this._isMute = !0
            }
        },
        resume: function() {
            if (o.BrowserUtil.isMobile()) {
                var a = this._musicPackage.loadSound(this._playingMusicName, !1);
                null != a && (this._playingMusic = a.loop(this._musicVolume))
            } else {
                this._playingMusic.setPaused(!1);
                for (var a = 0, b = this._playingSfx; a < b.length;) {
                    var c =
                        b[a];
                    ++a;
                    c.setPaused(!1)
                }
            }
        },
        pause: function() {
            if (o.BrowserUtil.isMobile()) null != this._playingMusic && (this._playingMusic.setPaused(!0), this._playingMusic.dispose());
            else {
                this._playingMusic.setPaused(!0);
                for (var a = 0, b = this._playingSfx; a < b.length;) {
                    var c = b[a];
                    ++a;
                    c.setPaused(!0)
                }
            }
        },
        playSfx: function(a, b) {
            null == b && (b = 1);
            if (!(null == this._musicPackage || o.BrowserUtil.isMobile())) {
                var c = this._musicPackage.loadSound(a, !1);
                null != c && this._playingSfx.push(c.play(this._isMute ? 0 : b))
            }
        },
        playMusic: function(a, b) {
            null ==
                b && (b = 1);
            if (null != this._musicPackage) {
                var c = this._musicPackage.loadSound(a, !1);
                null != c && (null != this._playingMusic && this._playingMusic.dispose(), this._playingMusic = c.loop(this._isMute ? 0 : b), this._playingMusicName = a, this._musicVolume = b)
            }
        },
        init: function() {
            g.manager.AbstractManager.prototype.init.call(this);
            this._isMute = !0;
            this._playingSfx = [];
            this.initFinished()
        },
        __class__: g.sound.SoundManager
    });
    g.world = {};
    g.world.Camera = function() {
        this.mY = this.mX = 0;
        this.mStep = this.mTempStep = this.mTrackStep = 10;
        this.mStageRef =
            A._platform.getStage();
        var a = g.Core.instance._compMap.LayerManager.world._compMap.Sprite;
        this.mCoreScale = new Q(a.scaleX._value, a.scaleY._value)
    };
    h["com.bkom.core.world.Camera"] = g.world.Camera;
    g.world.Camera.__name__ = ["com", "bkom", "core", "world", "Camera"];
    g.world.Camera.prototype = {
        getLimits: function() {
            return this.mLimits
        },
        setLimits: function(a) {
            return this.mLimits = a
        },
        getY: function() {
            return this.mY
        },
        getX: function() {
            return this.mX
        },
        handleLimits: function() {
            this.mX < this.mLimits.x && (this.mX = this.mLimits.x);
            this.mY < this.mLimits.y && (this.mY = this.mLimits.y);
            this.mX + this.mStageRef.getWidth() > this.mLimits.x + this.mLimits.width && (this.mX = this.mLimits.x + this.mLimits.width - this.mStageRef.getWidth());
            this.mY + this.mStageRef.getHeight() > this.mLimits.y + this.mLimits.height && (this.mY = this.mLimits.y + this.mLimits.height - this.mStageRef.getHeight())
        },
        temperTargetPosition: function() {
            var a = this.mStageRef.getWidth() / this.mCoreScale.x,
                b = this.mStageRef.getHeight() / this.mCoreScale.y,
                c = o.Temp.point1;
            c.setXY(this.mTargetTransform.x -
                a / 2, this.mTargetTransform.y - b / 2);
            return c
        },
        update: function() {
            if (null != this.mTargetTransform) {
                var a = this.temperTargetPosition();
                this.mX += (a.x - this.mX) / this.mStep;
                this.mY += (a.y - this.mY) / this.mStep;
                this.handleLimits()
            }
        },
        __class__: g.world.Camera
    };
    g.world.GameObject = function() {};
    h["com.bkom.core.world.GameObject"] = g.world.GameObject;
    g.world.GameObject.__name__ = ["com", "bkom", "core", "world", "GameObject"];
    g.world.GameObject.__super__ = r;
    g.world.GameObject.prototype = w(r.prototype, {
        set_mDestroyed: function(a) {
            return this.mDestroyed =
                a
        },
        get_mDestroyed: function() {
            return this.mDestroyed
        },
        getEnabled: function() {
            return this.mEnabled
        },
        get_mDef: function() {
            return this.mDef
        },
        __class__: g.world.GameObject
    });
    g.world.Layer = function() {};
    h["com.bkom.core.world.Layer"] = g.world.Layer;
    g.world.Layer.__name__ = ["com", "bkom", "core", "world", "Layer"];
    g.world.Layer.__super__ = r;
    g.world.Layer.prototype = w(r.prototype, {
        getSpeed: function() {
            return this.mSpeed
        },
        update: function() {
            this.mContainer.x.set(-this.mWorld.getCamera().getX() * this.mSpeed.x);
            this.mContainer.y.set(-this.mWorld.getCamera().getY() *
                this.mSpeed.y)
        },
        getObjects: function() {
            return this.mObjects
        },
        __class__: g.world.Layer
    });
    g.world.World = function() {
        this.mWorldLoaded = !1;
        g.manager.AbstractManager.call(this)
    };
    h["com.bkom.core.world.World"] = g.world.World;
    g.world.World.__name__ = ["com", "bkom", "core", "world", "World"];
    g.world.World.__super__ = g.manager.AbstractManager;
    g.world.World.prototype = w(g.manager.AbstractManager.prototype, {
        getName: function() {
            return "World"
        },
        getCamera: function() {
            return this.mCamera
        },
        getCurrentAssetPack: function() {
            return this.mCurrentAssetPack
        },
        setupWindowSize: function() {
            for (var a = this.mContainer.parent._compMap.Sprite, b = o.BrowserUtil.getWindowSize(), c = 171 * (b.x / 171 | 0), e = 100 * (b.y / 100 | 0), d = c / e; 1.71 != d;) 1.71 > d ? e -= 100 : c -= 171, d = c / e;
            for (; c + 1.71 < b.y && e + 1 < b.x;) c += 1.71, e += 1;
            c = Math.max(c, 427.5);
            e = Math.max(e, 250);
            b = e / 500;
            a.scaleX.set(Math.min(c / 855, 1));
            a.scaleY.set(Math.min(b, 1))
        },
        onUpdate: function(a) {
            if (this.mWorldLoaded) {
                this.mCamera.update(a);
                for (var b = this.mLayers.length; 0 < b--;) this.mLayers[b].update(a)
            }
        },
        allManagersInitialized: function() {
            g.manager.AbstractManager.prototype.allManagersInitialized.call(this);
            g.Core.instance._compMap.LayerManager.world.addChild(this.mContainer);
            this.setupWindowSize();
            this.mLoader = this.owner._compMap.ManifestLoader
        },
        init: function() {
            g.manager.AbstractManager.prototype.init.call(this);
            var a = g.Core.instance._compMap.LayerManager;
            this.mContainer = new r;
            a.world.addChild(this.mContainer);
            this.mLoader = this.owner._compMap.ManifestLoader;
            this.setupWindowSize();
            this.mLayers = [];
            this.mCamera = new g.world.Camera;
            this.initFinished()
        },
        __class__: g.world.World
    });
    g.world.WorldComponent = function(a) {
        this.mDefinition =
            a;
        this.mIsRendering = !1
    };
    h["com.bkom.core.world.WorldComponent"] = g.world.WorldComponent;
    g.world.WorldComponent.__name__ = ["com", "bkom", "core", "world", "WorldComponent"];
    g.world.WorldComponent.__super__ = L;
    g.world.WorldComponent.prototype = w(L.prototype, {
        getName: function() {
            return "WorldComponent"
        },
        get_mDefinition: function() {
            return this.mDefinition
        },
        onUpdate: function(a) {
            L.prototype.onUpdate.call(this, a)
        },
        visit: function(a) {
            (this.mParentGO.getEnabled() || this.mIsRendering) && L.prototype.visit.call(this, a)
        },
        onDispose: function() {
            L.prototype.onDispose.call(this);
            this.mDefinition = this.mParentGO = null
        },
        onRemoved: function() {
            L.prototype.onRemoved.call(this);
            this.mParentGO = null
        },
        onAdded: function() {
            L.prototype.onAdded.call(this);
            this.mParentGO = this.owner
        },
        onAllAdded: function() {},
        __class__: g.world.WorldComponent
    });
    g.world.components = {};
    g.world.components.Transform = function(a) {
        g.world.WorldComponent.call(this, a);
        this.x = a.position.x;
        this.y = a.position.y;
        this.rotation = a.rotation;
        this.scaleX = a.scale.x;
        this.scaleY = a.scale.y;
        this.originalWidth = Math.floor(a.size.width / this.scaleX);
        this.originalHeight = Math.floor(a.size.height / this.scaleY)
    };
    h["com.bkom.core.world.components.Transform"] = g.world.components.Transform;
    g.world.components.Transform.__name__ = "com,bkom,core,world,components,Transform".split(",");
    g.world.components.Transform.__super__ = g.world.WorldComponent;
    g.world.components.Transform.prototype = w(g.world.WorldComponent.prototype, {
        getName: function() {
            return "Transform"
        },
        onAdded: function() {
            g.world.WorldComponent.prototype.onAdded.call(this);
            this.mParentContainer = F.__cast(this.owner.parent,
                g.world.Layer)._compMap.Sprite
        },
        onDispose: function() {
            g.world.WorldComponent.prototype.onDispose.call(this);
            this.mParentContainer = null
        },
        getHeight: function() {
            return Math.floor(this.originalHeight * this.scaleY)
        },
        getWidth: function() {
            return Math.floor(this.originalWidth * this.scaleX)
        },
        getYToParent: function() {
            return Math.floor(this.y + this.mParentContainer.y._value)
        },
        getXToParent: function() {
            return Math.floor(this.x + this.mParentContainer.x._value)
        },
        __class__: g.world.components.Transform
    });
    g.world.components.interfaces = {};
    g.world.components.interfaces.ICollidable = function() {};
    h["com.bkom.core.world.components.interfaces.ICollidable"] = g.world.components.interfaces.ICollidable;
    g.world.components.interfaces.ICollidable.__name__ = "com,bkom,core,world,components,interfaces,ICollidable".split(",");
    g.world.components.interfaces.ICollidable.prototype = {
        __class__: g.world.components.interfaces.ICollidable
    };
    g.world.components.interfaces.ITransformResetable = function() {};
    h["com.bkom.core.world.components.interfaces.ITransformResetable"] =
        g.world.components.interfaces.ITransformResetable;
    g.world.components.interfaces.ITransformResetable.__name__ = "com,bkom,core,world,components,interfaces,ITransformResetable".split(",");
    g.world.components.interfaces.ITransformResetable.prototype = {
        __class__: g.world.components.interfaces.ITransformResetable
    };
    g.world.components.physics = {};
    g.world.components.physics.BodyComponent = function(a, b) {
        this.mBody = a;
        this.mDestroyed = !1;
        this.mColliderSize = b;
        g.world.WorldComponent.call(this, null)
    };
    h["com.bkom.core.world.components.physics.BodyComponent"] =
        g.world.components.physics.BodyComponent;
    g.world.components.physics.BodyComponent.__name__ = "com,bkom,core,world,components,physics,BodyComponent".split(",");
    g.world.components.physics.BodyComponent.__super__ = g.world.WorldComponent;
    g.world.components.physics.BodyComponent.prototype = w(g.world.WorldComponent.prototype, {
        getName: function() {
            return "BodyComponent"
        },
        set_mDestroyed: function(a) {
            return this.mDestroyed = a
        },
        get_mDestroyed: function() {
            return this.mDestroyed
        },
        getColliderSize: function() {
            return this.mColliderSize
        },
        getBody: function() {
            return this.mBody
        },
        onAllAdded: function() {
            this.mTransform = this.owner._compMap.Transform;
            this.mBody.setUserData(this.owner)
        },
        onDispose: function() {
            g.world.WorldComponent.prototype.onDispose.call(this);
            !1 == this.mDestroyed && (this.mDestroyed = !0, g.world.components.physics.SpaceComponent.getInstance().destroyBody(this.mBody));
            this.mBody = this.mTransform = null
        },
        onUpdate: function(a) {
            g.world.WorldComponent.prototype.onUpdate.call(this, a);
            null != this.mTransform && !this.mDestroyed && (this.mTransform.x =
                40 * this.mBody.getPosition().x | 0, this.mTransform.y = 40 * this.mBody.getPosition().y | 0, this.mTransform.rotation = this.mBody.getAngle() * (180 / Math.PI))
        },
        __class__: g.world.components.physics.BodyComponent
    });
    g.world.components.physics.SpaceComponent = function(a) {
        if (null != g.world.components.physics.SpaceComponent.mInstance) throw "A SpaceComponent already exists and is initialized.";
        this.mSlowdownRatio = 1;
        this.mWorld = new I(new i.B2Vec2(0, 30), !1);
        this.mWorld.setContactListener(a);
        this.mToDestroyList = [];
        g.world.components.physics.SpaceComponent.mInstance =
            this
    };
    h["com.bkom.core.world.components.physics.SpaceComponent"] = g.world.components.physics.SpaceComponent;
    g.world.components.physics.SpaceComponent.__name__ = "com,bkom,core,world,components,physics,SpaceComponent".split(",");
    g.world.components.physics.SpaceComponent.getInstance = function() {
        return g.world.components.physics.SpaceComponent.mInstance
    };
    g.world.components.physics.SpaceComponent.__super__ = L;
    g.world.components.physics.SpaceComponent.prototype = w(L.prototype, {
        getName: function() {
            return "SpaceComponent"
        },
        set_mPaused: function(a) {
            return this.mPaused = a
        },
        set_mSlowdownRatio: function(a) {
            return this.mSlowdownRatio = a
        },
        get_mSlowdownRatio: function() {
            return this.mSlowdownRatio
        },
        get_mWorld: function() {
            return this.mWorld
        },
        destroyBody: function(a) {
            this.mToDestroyList.push(a)
        },
        clearSpace: function() {
            this.mToDestroyList = [];
            for (var a = this.mWorld.getBodyList(); null != a;) this.mToDestroyList.push(a), a = a.getNext()
        },
        onUpdate: function(a) {
            L.prototype.onUpdate.call(this, a);
            0 < this.mToDestroyList.length && this.destroyBodiesMarked();
            this.mPaused || this.mWorld.step(a / (1.5 * this.mSlowdownRatio), 10, 10)
        },
        destroyBodiesMarked: function() {
            for (var a, b = 0, c = this.mToDestroyList; b < c.length;) {
                var e = c[b];
                ++b;
                a = e.getUserData();
                null != a && (a = a._compMap.BodyComponent, null != a && a.set_mDestroyed(!0));
                this.mWorld.destroyBody(e)
            }
            this.mToDestroyList = []
        },
        enableDebug: function() {},
        raycastMultiple: function(a, b, c) {
            b.normalize();
            b.multiply(c);
            b.add(a);
            b.multiply(0.025);
            a.multiply(0.025);
            a = this.mWorld.rayCastAll(a, b);
            this.mRaycastResults = [];
            for (c = a.length; 0 < c--;) b =
                a[c], this.mRaycastResults.push(b.getBody());
            return this.mRaycastResults
        },
        createSphere: function(a, b, c, e) {
            var d = new kb;
            d.position.set(a / 40, b / 40);
            d.type = e ? v.b2_dynamicBody : v.b2_staticBody;
            b = new s.B2CircleShape(c / 40);
            a = new Rb;
            a.shape = b;
            a.restitution = 0;
            a.friction = 0;
            a.density = 3;
            d = this.mWorld.createBody(d);
            d.createFixture(a);
            return d
        },
        __class__: g.world.components.physics.SpaceComponent
    });
    f = {};
    f.Game = function() {
        f.menu.EGameMenus.init();
        f.manager.EGameManagersDef.init();
        f.util.PlaynomicsUtil.callMilestone("CUSTOM1");
        g.Core.call(this)
    };
    h["com.bkom.game.Game"] = f.Game;
    f.Game.__name__ = ["com", "bkom", "game", "Game"];
    f.Game.__super__ = g.Core;
    f.Game.prototype = w(g.Core.prototype, {
        onInitFinished: function() {
            g.Core.prototype.onInitFinished.call(this);
            this._compMap.MenuManager.showMenu("WelcomeScreen");
            g.loading.Loading.getInstance().hide()
        },
        __class__: f.Game
    });
    f.GameManager = function() {
        g.manager.AbstractManager.call(this)
    };
    h["com.bkom.game.GameManager"] = f.GameManager;
    f.GameManager.__name__ = ["com", "bkom", "game", "GameManager"];
    f.GameManager.__super__ = g.manager.AbstractManager;
    f.GameManager.prototype = w(g.manager.AbstractManager.prototype, {
        getName: function() {
            return "GameManager"
        },
        get_score: function() {
            return this._score
        },
        get_totalTime: function() {
            return this._totalTime - this._timer.get_currentCount()
        },
        get_isPaused: function() {
            return this._isPaused
        },
        unpause: function() {
            this._isPaused = !1;
            this._timer.resume();
            this.onUnpause.emit()
        },
        pause: function(a) {
            null == a && (a = !0);
            this._isPaused = !0;
            this._timer.pause();
            a && g.Core.instance._compMap.MenuManager.showMenu("PauseMenu");
            this.onPause.emit()
        },
        changeTime: function(a) {
            this._totalTime += a;
            this.onTimeChanged.emit(this._totalTime - this._timer.get_currentCount())
        },
        addPoints: function(a) {
            this._score += a;
            this.onPointsChanged.emit(this._score)
        },
        reset: function() {
            this._score = 0;
            this._timer.reset();
            this._totalTime = u.parseInt(g.Core.instance._compMap.ConfigManager.getValue("game", "baseGameTime"))
        },
        gameOver: function() {
            g.Core.instance._compMap.MenuManager.showMenu("GameOverScreen");
            this.pause(!1)
        },
        onTimerTick: function(a) {
            var b = g.Core.instance._compMap.PizzaWorld;
            null != b && (this.onTimeChanged.emit(this._totalTime - a), 0 >= this._totalTime - a && b.get_active() && this.gameOver())
        },
        onIngredientSliced: function(a) {
            this.addPoints(u.parseInt(this._configManager.getValue("ingredients", a.get_mDef().get_mType())))
        },
        allManagersInitialized: function() {
            g.manager.AbstractManager.prototype.allManagersInitialized.call(this);
            this._configManager = this.owner._compMap.ConfigManager;
            this._slicedConnection = this.owner._compMap.PizzaWorld.onIngredientSliced.connect(q(this, this.onIngredientSliced))
        },
        init: function() {
            g.manager.AbstractManager.prototype.init.call(this);
            this.onPause = new X;
            this.onUnpause = new X;
            this.onPointsChanged = new C;
            this.onTimeChanged = new C;
            this._timer = new f.util.PizzaTimer(1E3);
            this._timerConnection = this._timer.onTick.connect(q(this, this.onTimerTick));
            this.initFinished()
        },
        __class__: f.GameManager
    });
    f.Main = function() {};
    h["com.bkom.game.Main"] = f.Main;
    f.Main.__name__ = ["com", "bkom", "game", "Main"];
    f.Main.main = function() {
        A.init();
        f.util.PlaynomicsUtil.initPlaynomics();
        var a = g.loading.Loading.getInstance();
        a.onReady.connect(f.Main.onLoadingLoaded).once();
        a.init()
    };
    f.Main.onLoadingLoaded = function() {
        g.loading.Loading.getInstance().show();
        var a = new f.Game;
        A.root.addChild(a)
    };
    f.config = {};
    f.config.ConfigManager = function() {
        g.manager.AbstractManager.call(this)
    };
    h["com.bkom.game.config.ConfigManager"] = f.config.ConfigManager;
    f.config.ConfigManager.__name__ = ["com", "bkom", "game", "config", "ConfigManager"];
    f.config.ConfigManager.__super__ = g.manager.AbstractManager;
    f.config.ConfigManager.prototype = w(g.manager.AbstractManager.prototype, {
        getName: function() {
            return "ConfigManager"
        },
        getValue: function(a, b) {
            return this._configs.get(a + "." + b)
        },
        getSection: function(a) {
            return this._configs.sections.get(a)
        },
        onConfigsLoaded: function(a) {
            a = a.loadFile("game.cfg");
            this._configs = Ha.parse(a);
            this.initFinished()
        },
        init: function() {
            g.manager.AbstractManager.prototype.init.call(this);
            var a = P.build("Configs");
            A._platform.loadAssetPack(a).get(q(this, this.onConfigsLoaded))
        },
        __class__: f.config.ConfigManager
    });
    f.effects = {};
    f.effects.AbstractEffect = function() {
        this._active = !1;
        this._currentCount = 0
    };
    h["com.bkom.game.effects.AbstractEffect"] = f.effects.AbstractEffect;
    f.effects.AbstractEffect.__name__ = ["com", "bkom", "game", "effects", "AbstractEffect"];
    f.effects.AbstractEffect.prototype = {
        update: function(a) {
            this._active && (this._currentCount += a, this._currentCount >= this._maxCount && this.stopEffect())
        },
        stopEffect: function() {
            this._active = !1
        },
        startEffect: function() {
            this._currentCount = 0;
            this._active = !0
        },
        init: function() {
            this._configManager = g.Core.instance._compMap.ConfigManager
        },
        __class__: f.effects.AbstractEffect
    };
    f.effects.EffectsManager = function() {
        g.manager.AbstractManager.call(this)
    };
    h["com.bkom.game.effects.EffectsManager"] = f.effects.EffectsManager;
    f.effects.EffectsManager.__name__ = ["com", "bkom", "game", "effects", "EffectsManager"];
    f.effects.EffectsManager.__super__ = g.manager.AbstractManager;
    f.effects.EffectsManager.prototype = w(g.manager.AbstractManager.prototype, {
        getName: function() {
            return "EffectsManager"
        },
        onUpdate: function(a) {
            g.manager.AbstractManager.prototype.onUpdate.call(this, a);
            for (var b = this._effects.iterator(); b.hasNext();) b.next().update(a)
        },
        startEffect: function(a) {
            a = this._effects.get(a);
            null != a && a.startEffect()
        },
        initializeEffects: function() {
            this._effects = new H;
            this._effects.set("Slowdown", new f.effects.types.SlowdownEffect);
            this._effects.set("Multiply", new f.effects.types.MultiplySpawnEffect)
        },
        allManagersInitialized: function() {
            g.manager.AbstractManager.prototype.allManagersInitialized.call(this);
            for (var a = this._effects.iterator(); a.hasNext();) a.next().init()
        },
        init: function() {
            g.manager.AbstractManager.prototype.init.call(this);
            this.initializeEffects();
            this.initFinished()
        },
        __class__: f.effects.EffectsManager
    });
    f.effects.types = {};
    f.effects.types.MultiplySpawnEffect = function() {
        f.effects.AbstractEffect.call(this)
    };
    h["com.bkom.game.effects.types.MultiplySpawnEffect"] = f.effects.types.MultiplySpawnEffect;
    f.effects.types.MultiplySpawnEffect.__name__ = "com,bkom,game,effects,types,MultiplySpawnEffect".split(",");
    f.effects.types.MultiplySpawnEffect.__super__ = f.effects.AbstractEffect;
    f.effects.types.MultiplySpawnEffect.prototype = w(f.effects.AbstractEffect.prototype, {
        stopEffect: function() {
            f.effects.AbstractEffect.prototype.stopEffect.call(this);
            g.Core.instance._compMap.PizzaWorld.set_mWaveMultiplier(1)
        },
        startEffect: function() {
            f.effects.AbstractEffect.prototype.startEffect.call(this);
            g.Core.instance._compMap.PizzaWorld.set_mWaveMultiplier(this._configManager.getValue("specials", "spawnMultValue"))
        },
        init: function() {
            f.effects.AbstractEffect.prototype.init.call(this);
            this._maxCount = this._configManager.getValue("specials", "spawnMultDuration")
        },
        __class__: f.effects.types.MultiplySpawnEffect
    });
    f.effects.types.SlowdownEffect = function() {
        f.effects.AbstractEffect.call(this)
    };
    h["com.bkom.game.effects.types.SlowdownEffect"] = f.effects.types.SlowdownEffect;
    f.effects.types.SlowdownEffect.__name__ = "com,bkom,game,effects,types,SlowdownEffect".split(",");
    f.effects.types.SlowdownEffect.__super__ = f.effects.AbstractEffect;
    f.effects.types.SlowdownEffect.prototype = w(f.effects.AbstractEffect.prototype, {
        stopEffect: function() {
            f.effects.AbstractEffect.prototype.stopEffect.call(this);
            g.world.components.physics.SpaceComponent.getInstance().set_mSlowdownRatio(1)
        },
        startEffect: function() {
            f.effects.AbstractEffect.prototype.startEffect.call(this);
            g.world.components.physics.SpaceComponent.getInstance().set_mSlowdownRatio(this._configManager.getValue("specials", "slowdownRatio"))
        },
        init: function() {
            f.effects.AbstractEffect.prototype.init.call(this);
            this._maxCount = this._configManager.getValue("specials", "slowdownDuration")
        },
        __class__: f.effects.types.SlowdownEffect
    });
    f.gameover = {};
    f.gameover.GameOverScreen = function() {
        g.menu.AbstractMenu.call(this)
    };
    h["com.bkom.game.gameover.GameOverScreen"] =
        f.gameover.GameOverScreen;
    f.gameover.GameOverScreen.__name__ = ["com", "bkom", "game", "gameover", "GameOverScreen"];
    f.gameover.GameOverScreen.__super__ = g.menu.AbstractMenu;
    f.gameover.GameOverScreen.prototype = w(g.menu.AbstractMenu.prototype, {
        getName: function() {
            return "AbstractMenu"
        },
        onMenuHidden: function() {
            this.disposeListeners();
            g.menu.AbstractMenu.prototype.onMenuHidden.call(this)
        },
        onFontLoaded: function(a) {
            this._font = new qa(a, "fonts/creative40");
            var a = new W(this._font, ""),
                b = new W(this._font, ""),
                c = new W(this._font,
                    ""),
                e = new W(this._font, "");
            e.scaleX.set(1.5);
            e.scaleY.set(1.5);
            e;
            this._numberOrders = (new r).add(a);
            this._totalSuccess = (new r).add(b);
            this._totalFailed = (new r).add(c);
            this._totalScore = (new r).add(e);
            this.mMenuItems.get("totalOrder").owner.addChild(this._numberOrders);
            this.mMenuItems.get("totalSuccess").owner.addChild(this._totalSuccess);
            this.mMenuItems.get("totalFailed").owner.addChild(this._totalFailed);
            this.mMenuItems.get("totalPoints").owner.addChild(this._totalScore)
        },
        createFont: function() {
            g.Core.instance._compMap.ManifestLoader.load("Hud",
                q(this, this.onFontLoaded))
        },
        animateTxt: function(a, b) {
            a.visible.set(!0);
            a.scaleX.set(0);
            a.scaleX.animateTo(b, 0.5, K.backOut)
        },
        onPaperShown: function() {
            this.animateTxt(this._numberOrders._compMap.Sprite, 1);
            this.animateTxt(this._totalFailed._compMap.Sprite, 1);
            this.animateTxt(this._totalSuccess._compMap.Sprite, 1);
            this.animateTxt(this._totalScore._compMap.Sprite, 1.5)
        },
        disposeListeners: function() {
            null != this._replayConnection && this._replayConnection.dispose();
            this._replayConnection = null;
            null != this._quitConnection &&
                this._quitConnection.dispose();
            this._quitConnection = null
        },
        onReplay: function() {
            this.killWorld();
            g.loading.Loading.getInstance().show();
            g.Core.instance._compMap.GameManager.reset();
            g.Core.instance._compMap.PizzaWorld.startWorld()
        },
        killWorld: function() {
            g.Core.instance._compMap.MenuManager.hideMenu("GameOverScreen");
            g.Core.instance._compMap.GameManager.unpause();
            g.Core.instance._compMap.PizzaWorld.unloadWorld()
        },
        onQuit: function() {
            this.killWorld();
            g.Core.instance._compMap.MenuManager.showMenu("WelcomeScreen")
        },
        showText: function(a, b) {
            var c = a._compMap.Sprite;
            c.setText(b);
            c.anchorX.set(c.getNaturalWidth() / 2);
            c.anchorY.set(c.getNaturalHeight() / 2);
            c;
            var e = c.anchorX;
            e.set(e._value + c.getNaturalWidth() / 2);
            c.visible.set(!1)
        },
        computeDataToShow: function() {
            var a = g.Core.instance._compMap.OrdersManager,
                b = a.get_currentOrderId(),
                c = a.get_finishedOrders();
            c.push(a.get_currentOrder());
            for (var e = a = 0, c = c.iterator(); c.hasNext();)
                for (var d = 0, f = c.next().get_pizzas(); d < f.length;) {
                    var h = f[d];
                    ++d;
                    e += "cooked" == h.get_status() ? 1 : 0;
                    a += "burnt" == h.get_status() || "trashed" == h.get_status() ? 1 : 0
                }
            c = g.Core.instance._compMap.GameManager.get_score();
            this.showText(this._numberOrders, u.string(b));
            this.showText(this._totalFailed, u.string(a));
            this.showText(this._totalSuccess, u.string(e));
            this.showText(this._totalScore, u.string(c))
        },
        registerListeners: function() {
            this._replayConnection = this.mMenuItems.get("btnReplay").getPointerDown().connect(q(this, this.onReplay));
            this._quitConnection = this.mMenuItems.get("btnQuit").getPointerDown().connect(q(this,
                this.onQuit))
        },
        onMenuShown: function() {
            null == this._font && this.createFont();
            var a = this.mMenuItems.get("paper");
            a.y.set(-340);
            a.y.animateTo(-31, 0.3, K.backOut);
            a.y.behaviorComplete.connect(q(this, this.onPaperShown)).once();
            g.Core.instance._compMap.SoundManager.playSfx("resultPaper");
            this.registerListeners();
            this.computeDataToShow();
            f.util.PlaynomicsUtil.callMilestone("CUSTOM7");
            g.menu.AbstractMenu.prototype.onMenuShown.call(this)
        },
        __class__: f.gameover.GameOverScreen
    });
    f.howtoplay = {};
    f.howtoplay.HowToPlay =
        function() {
            g.menu.AbstractMenu.call(this)
        };
    h["com.bkom.game.howtoplay.HowToPlay"] = f.howtoplay.HowToPlay;
    f.howtoplay.HowToPlay.__name__ = ["com", "bkom", "game", "howtoplay", "HowToPlay"];
    f.howtoplay.HowToPlay.__super__ = g.menu.AbstractMenu;
    f.howtoplay.HowToPlay.prototype = w(g.menu.AbstractMenu.prototype, {
        getName: function() {
            return "AbstractMenu"
        },
        onMenuTweenedOut: function() {
            g.menu.AbstractMenu.prototype.hide.call(this)
        },
        hide: function() {
            this.removeListeners();
            var a = this.owner._compMap.Sprite;
            a.y.animateTo(-540,
                0.3, K.backIn);
            a.y.behaviorComplete.connect(q(this, this.onMenuTweenedOut)).once()
        },
        onClose: function() {
            g.Core.instance._compMap.MenuManager.hideMenu("HowToPlay")
        },
        onPrevious: function() {
            this._currentPage--;
            this.showHideElements()
        },
        onNext: function() {
            this._currentPage++;
            this.showHideElements()
        },
        removeListeners: function() {
            this._closeConnection.dispose();
            this._nextConnection.dispose();
            this._previousConnection.dispose();
            this._previousConnection = this._nextConnection = this._closeConnection = null
        },
        addListeners: function() {
            this._closeConnection =
                this.mMenuItems.get("btnResume").getPointerDown().connect(q(this, this.onClose));
            this._nextConnection = this.mMenuItems.get("btnNext").getPointerDown().connect(q(this, this.onNext));
            this._previousConnection = this.mMenuItems.get("btnPrevious").getPointerDown().connect(q(this, this.onPrevious))
        },
        placeNextBtn: function() {
            var a = this.mMenuItems.get("btnNext"),
                b = this.mMenuItems.get("btnResume");
            2 == this._currentPage ? (a.x.set(b.x._value), a.y.set(b.y._value), a, b.visible.set(!1)) : (a.x.set(this._originalBtnNextPos.x),
                a.y.set(this._originalBtnNextPos.y), a, b.visible.set(!0))
        },
        showHideElements: function() {
            this.mMenuItems.get("btnNext").visible.set(3 > this._currentPage);
            this.mMenuItems.get("btnPrevious").visible.set(1 < this._currentPage);
            this.mMenuItems.get("page1").visible.set(1 == this._currentPage);
            this.mMenuItems.get("page3").visible.set(3 == this._currentPage);
            o.BrowserUtil.isMobile() ? (this.mMenuItems.get("page2_pc").visible.set(!1), this.mMenuItems.get("page2_mobile").visible.set(2 == this._currentPage)) : (this.mMenuItems.get("page2_pc").visible.set(2 ==
                this._currentPage), this.mMenuItems.get("page2_mobile").visible.set(!1));
            this.placeNextBtn()
        },
        onMenuTweenedIn: function() {
            g.menu.AbstractMenu.prototype.show.call(this);
            this.addListeners()
        },
        show: function() {
            var a = this.mMenuItems.get("btnNext");
            this._originalBtnNextPos = new Q(a.x._value, a.y._value);
            a = this.owner._compMap.Sprite;
            a.y.set(-540);
            this._currentPage = 1;
            this.showHideElements();
            a.y.animateTo(-50, 0.5, K.backOut);
            a.y.behaviorComplete.connect(q(this, this.onMenuTweenedIn)).once();
            f.util.PlaynomicsUtil.callMilestone("CUSTOM3")
        },
        __class__: f.howtoplay.HowToPlay
    });
    f.hud = {};
    f.hud.Hud = function(a) {
        r.call(this);
        this._paused = !1;
        this._sprite = new x;
        o.FullScreenUtil.resizeSprite(this._sprite, 855, 500);
        this.add(this._sprite);
        this._resizeConnection = A._platform.getStage().resize.connect(q(this, this.onResize));
        this._ordersManagerRef = g.Core.instance._compMap.OrdersManager;
        this._hudBG = new S(a.loadTexture("images/Hud.png"));
        this._hudBG.x.set(10);
        this._hudBG.y.set(10);
        this.addChild((new r).add(this._hudBG));
        this._pauseBtn = new S(a.loadTexture("images/BtnPause.png"));
        this._pauseBtn.x.set(780);
        this._pauseBtn.y.set(17);
        this.addChild((new r).add(this._pauseBtn));
        this._ingredientShower = new f.hud.IngredientShower(a);
        this._orderShower = new f.hud.OrderShower(a);
        this._bell = new f.hud.OvenBell(a);
        this._timeDisplay = new f.hud.TimeDisplay(a);
        this._pizzaFinishedConnection = this._ordersManagerRef.pizzaFinished.connect(q(this, this.onPizzaFinished));
        this._pizzaCookedConnection = this._ordersManagerRef.pizzaCooked.connect(q(this, this.onPizzaCooked));
        this._pizzaCookedOutConnection =
            this._ordersManagerRef.pizzaCookedOut.connect(q(this, this.onPizzaCookedOut));
        this._pauseBtnConnection = this._pauseBtn.getPointerDown().connect(q(this, this.onPause));
        this.addChild(this._bell);
        this.addChild(this._ingredientShower);
        this.addChild(this._orderShower);
        this.addChild(this._timeDisplay)
    };
    h["com.bkom.game.hud.Hud"] = f.hud.Hud;
    f.hud.Hud.__name__ = ["com", "bkom", "game", "hud", "Hud"];
    f.hud.Hud.__super__ = r;
    f.hud.Hud.prototype = w(r.prototype, {
        showCurrentPizza: function() {
            this._ingredientShower.showPizza(this._ordersManagerRef.get_currentOrder().get_currentPizza())
        },
        showOrder: function() {
            this._ingredientShower.showPizza(this._ordersManagerRef.get_currentOrder().get_currentPizza());
            this._orderShower.showOrder(this._ordersManagerRef.get_currentOrder())
        },
        start: function() {
            this.showOrder(this._ordersManagerRef.get_currentOrder())
        },
        onPizzaCookedOut: function() {
            this._orderShower.nextPizza()
        },
        onPizzaFinished: function() {
            this._ingredientShower.showPizza(this._ordersManagerRef.get_currentOrder().get_currentPizza())
        },
        onPizzaCooked: function() {
            this._bell.show()
        },
        dispose: function() {
            r.prototype.dispose.call(this);
            this._sprite = this._timeDisplay = this._bell = this._ordersManagerRef = this._orderShower = this._ingredientShower = null;
            this._resizeConnection.dispose();
            this._pizzaFinishedConnection.dispose();
            this._pizzaCookedConnection.dispose();
            this._pizzaCookedOutConnection.dispose();
            null != this._unpauseConnection && this._unpauseConnection.dispose();
            this._pizzaCookedOutConnection = this._pizzaCookedConnection = this._pizzaFinishedConnection = this._unpauseConnection = this._resizeConnection = null
        },
        onUnpause: function() {
            this._paused = !1
        },
        onPause: function() {
            if (!this._paused && !f.orders.OrderNumberPopup.get_instance().get_shown()) {
                this._paused = !0;
                var a = g.Core.instance._compMap.GameManager;
                this._unpauseConnection = a.onUnpause.connect(q(this, this.onUnpause)).once();
                a.pause()
            }
        },
        onResize: function() {
            o.FullScreenUtil.resizeSprite(this._sprite, 855, 500)
        },
        __class__: f.hud.Hud
    });
    f.hud.IngredientShower = function(a) {
        this._showFirst = !0;
        r.call(this);
        this._worldAssetPack = a;
        this._ingredientsHolder = new r;
        this._visual = new x;
        this._visual.x.set(350);
        this._visual.y.set(475);
        this._soundManager = g.Core.instance._compMap.SoundManager;
        this._rollerVisual = (new g.animations.TexturePackerLibrary(a, "anims/roller/", 45)).getMovie();
        this._rollerVisual.y.set(432);
        this._rollerVisual.x.set(260);
        this.addChild((new r).add(this._rollerVisual));
        this._rollerVisual.playAnimation("forward").stop();
        this._pizzaTypeVisual = new x;
        this._pizzaTypeVisual.x.set(10);
        this._pizzaTypeVisual.y.set(355);
        this._pizzaTypeContainer = (new r).add(this._pizzaTypeVisual);
        this._ingredientsHolder.add(this._visual);
        this.addChild(this._ingredientsHolder)
    };
    h["com.bkom.game.hud.IngredientShower"] = f.hud.IngredientShower;
    f.hud.IngredientShower.__name__ = ["com", "bkom", "game", "hud", "IngredientShower"];
    f.hud.IngredientShower.__super__ = r;
    f.hud.IngredientShower.prototype = w(r.prototype, {
        onToppingCompleted: function(a) {
            this._ingredientVisual.get(a)._compMap.Sprite.alpha.animateTo(0.5, 0.5, K.backIn)
        },
        showToppings: function(a) {
            for (var b, c = 0, e, d = a.get_ingredients().keys(); d.hasNext();) {
                var g = d.next();
                e = f.world.objects.ECuttableType.getCuttableTypeByName(g);
                a = new r;
                b = this._worldAssetPack.loadTexture("images/" + g + ".png");
                b = new S(b);
                b.x.set(c);
                b.alpha.set(1);
                b.anchorX.set(b.getNaturalWidth() / 2);
                b.anchorY.set(b.getNaturalHeight() + e.get_mOffset().y);
                c += b.getNaturalWidth() + 15 + e.get_mOffset().x;
                a.add(b);
                this._ingredientVisual.set(g, a);
                this._ingredientsHolder.addChild(a)
            }
        },
        ingredientsShown: function() {
            this._rollerAnim.stop()
        },
        showNewPizza: function() {
            if (null != this._pizza) {
                this._ingredientVisual = new H;
                this._pizzaConnection = this._pizza.toppingCompleted.connect(q(this,
                    this.onToppingCompleted));
                this._pizzaTypeContainer.disposeChildren();
                var a = new S(this._worldAssetPack.loadTexture("images/" + this._pizza.get_definition().get_type() + ".png"));
                this._pizzaTypeContainer.addChild((new r).add(a));
                this.showToppings(this._pizza.get_definition());
                this._showFirst || this._soundManager.playSfx("roll");
                this._showFirst = !1;
                this._rollerAnim = this._rollerVisual.playAnimation("forward");
                this._visual.x.animateTo(350, 0.3, K.linear);
                this._pizzaTypeVisual.y.animateTo(355, 0.3, K.backOut);
                this._visual.x.behaviorComplete.connect(q(this,
                    this.ingredientsShown)).once()
            }
        },
        onToppingsHidden: function() {
            for (var a = this._ingredientVisual.iterator(); a.hasNext();) this._ingredientsHolder.removeChild(a.next());
            this._ingredientVisual = null;
            this._rollerAnim.stop();
            this.showNewPizza()
        },
        clearCurrentPizza: function() {
            this._pizzaConnection.dispose();
            this._pizzaConnection = null;
            this._rollerAnim = this._rollerVisual.playAnimation("backward");
            this._soundManager.playSfx("roll");
            this._visual.x.animateTo(1E3, 0.3, K.linear);
            this._pizzaTypeVisual.y.animateTo(550,
                0.3, K.backIn);
            this._visual.x.behaviorComplete.connect(q(this, this.onToppingsHidden)).once()
        },
        showPizza: function(a) {
            this._pizza = a;
            null != this._ingredientVisual ? this.clearCurrentPizza() : this.showNewPizza()
        },
        onRemoved: function() {
            r.prototype.onRemoved.call(this);
            null != this._pizzaTypeContainer.parent && this._pizzaTypeContainer.parent.removeChild(this._pizzaTypeContainer)
        },
        onAdded: function() {
            r.prototype.onAdded.call(this);
            this.parent.addChild(this._pizzaTypeContainer)
        },
        __class__: f.hud.IngredientShower
    });
    f.hud.OrderShower = function(a) {
        r.call(this);
        this._font = new qa(a, "fonts/creative40");
        this._orderText = new W(this._font, "0/0");
        this._scoreText = new W(this._font, "0");
        this._score = 0;
        this._orderText.centerAnchor();
        this._orderText.x.set(160);
        this._orderText.y.set(36);
        this._scoreText.x.set(275);
        this._scoreText.y.set(36);
        this._scoreText.centerAnchor();
        this._slicedConnection = g.Core.instance._compMap.GameManager.onPointsChanged.connect(q(this, this.onIngredientSliced));
        this._configManager = g.Core.instance._compMap.ConfigManager;
        this.addChild((new r).add(this._orderText));
        this.addChild((new r).add(this._scoreText))
    };
    h["com.bkom.game.hud.OrderShower"] = f.hud.OrderShower;
    f.hud.OrderShower.__name__ = ["com", "bkom", "game", "hud", "OrderShower"];
    f.hud.OrderShower.__super__ = r;
    f.hud.OrderShower.prototype = w(r.prototype, {
        nextPizza: function() {
            this._currentPizzaIdx++;
            this._orderText.setText(this._currentPizzaIdx + "/" + this._maxIndex)
        },
        showOrder: function(a) {
            this._currentPizzaIdx = 0;
            this._maxIndex = a.get_pizzas().length;
            this._orderText.setText(this._currentPizzaIdx +
                "/" + this._maxIndex)
        },
        onIngredientSliced: function(a) {
            this._scoreText.setText(u.string(a));
            this._scoreText.centerAnchor()
        },
        __class__: f.hud.OrderShower
    });
    f.hud.OvenBell = function(a) {
        r.call(this);
        a = a.loadTexture("images/bell.png");
        this._visual = new S(a);
        this._visual.x.set(665);
        this._visual.y.set(80);
        this._visual.visible.set(!1);
        this._ordersManagerRef = g.Core.instance._compMap.OrdersManager;
        this._bellDownConnection = this._visual.getPointerDown().connect(q(this, this.onBellDown));
        this._pizzaBurntConnection =
            this._ordersManagerRef.pizzaBurnt.connect(q(this, this.onPizzaBurnt));
        this.add(this._visual)
    };
    h["com.bkom.game.hud.OvenBell"] = f.hud.OvenBell;
    f.hud.OvenBell.__name__ = ["com", "bkom", "game", "hud", "OvenBell"];
    f.hud.OvenBell.__super__ = r;
    f.hud.OvenBell.prototype = w(r.prototype, {
        hide: function() {
            this._visual.visible.set(!1)
        },
        show: function() {
            this._visual.visible.set(!0)
        },
        dispose: function() {
            r.prototype.dispose.call(this);
            this._bellDownConnection.dispose();
            this._bellDownConnection = null;
            this._pizzaBurntConnection.dispose();
            this._ordersManagerRef = this._visual = this._pizzaBurntConnection = null
        },
        onPizzaBurnt: function() {
            this._ordersManagerRef.isOvenEmpty() && this.hide()
        },
        onBellDown: function() {
            this._ordersManagerRef.takeOutPizza();
            this._ordersManagerRef.isOvenEmpty() && this.hide()
        },
        __class__: f.hud.OvenBell
    });
    f.hud.TimeDisplay = function(a) {
        r.call(this);
        this._font = new qa(a, "fonts/creative40");
        this._text = new W(this._font, "0:00");
        this._text.x.set(705);
        this._text.y.set(25);
        this.add(this._text);
        this._timeChangedConnection = g.Core.instance._compMap.GameManager.onTimeChanged.connect(q(this,
            this.onTimeChange))
    };
    h["com.bkom.game.hud.TimeDisplay"] = f.hud.TimeDisplay;
    f.hud.TimeDisplay.__name__ = ["com", "bkom", "game", "hud", "TimeDisplay"];
    f.hud.TimeDisplay.__super__ = r;
    f.hud.TimeDisplay.prototype = w(r.prototype, {
        onTimeChange: function(a) {
            this._text.setText(f.util.TimeUtil.formatTime(a))
        },
        dispose: function() {
            r.prototype.dispose.call(this);
            this._timeChangedConnection.dispose();
            this._font = this._timeChangedConnection = null
        },
        __class__: f.hud.TimeDisplay
    });
    f.manager = {};
    f.manager.EGameManagersDef = function() {};
    h["com.bkom.game.manager.EGameManagersDef"] = f.manager.EGameManagersDef;
    f.manager.EGameManagersDef.__name__ = ["com", "bkom", "game", "manager", "EGameManagersDef"];
    f.manager.EGameManagersDef.init = function() {
        g.manager.EManagersDef.init();
        var a = g.manager.EManagersDef.getManagerDefs();
        a.set("PizzaWorld", "com.bkom.game.world.PizzaWorld");
        a.set("EffectsManager", "com.bkom.game.effects.EffectsManager");
        a.set("OrdersManager", "com.bkom.game.orders.OrdersManager");
        a.set("ConfigManager", "com.bkom.game.config.ConfigManager");
        a.set("GameManager", "com.bkom.game.GameManager");
        f.manager.EGameManagersDef.link()
    };
    f.manager.EGameManagersDef.link = function() {
        new f.world.PizzaWorld;
        new f.effects.EffectsManager;
        new f.orders.OrdersManager;
        new f.config.ConfigManager;
        new f.GameManager
    };
    f.menu = {};
    f.menu.EGameMenus = function() {};
    h["com.bkom.game.menu.EGameMenus"] = f.menu.EGameMenus;
    f.menu.EGameMenus.__name__ = ["com", "bkom", "game", "menu", "EGameMenus"];
    f.menu.EGameMenus.init = function() {
        g.menu.EMenus.init();
        var a = g.menu.EMenus.getMenusDefs();
        a.set("WelcomeScreen", "com.bkom.game.welcome.WelcomeScreen");
        a.set("PauseMenu", "com.bkom.game.pause.PauseMenu");
        a.set("ResultScreen", "com.bkom.game.result.ResultScreen");
        a.set("GameOverScreen", "com.bkom.game.gameover.GameOverScreen");
        a.set("HowToPlay", "com.bkom.game.howtoplay.HowToPlay");
        a.set("WrongIngredient", "com.bkom.game.wrongingredient.WrongIngredientMenu");
        f.menu.EGameMenus.link()
    };
    f.menu.EGameMenus.link = function() {};
    f.orders = {};
    f.orders.OrderNumberPopup = function() {
        g.Core.instance._compMap.ManifestLoader.load("Hud",
            q(this, this.onHudLoaded));
        this._shown = !1
    };
    h["com.bkom.game.orders.OrderNumberPopup"] = f.orders.OrderNumberPopup;
    f.orders.OrderNumberPopup.__name__ = ["com", "bkom", "game", "orders", "OrderNumberPopup"];
    f.orders.OrderNumberPopup.get_instance = function() {
        null == f.orders.OrderNumberPopup._instance && (f.orders.OrderNumberPopup._instance = new f.orders.OrderNumberPopup);
        return f.orders.OrderNumberPopup._instance
    };
    f.orders.OrderNumberPopup.prototype = {
        onOrderHidden: function() {
            var a = this._container._compMap.Sprite;
            this._container.parent.removeChild(this._container);
            a.alpha.set(1);
            g.Core.instance._compMap.GameManager.unpause();
            this._shown = !1;
            this._fromResult && g.Core.instance._compMap.PizzaWorld.gotoNextWave()
        },
        hideOrderNbr: function() {
            var a = this._container._compMap.Sprite;
            a.alpha.animateTo(0, 1);
            a.alpha.behaviorComplete.connect(q(this, this.onOrderHidden)).once()
        },
        onOrderShown: function() {
            ba.delay(q(this, this.hideOrderNbr), 1E3)
        },
        showOrder: function(a) {
            null == a && (a = !0);
            this._shown = !0;
            (this._fromResult = a) || g.Core.instance._compMap.GameManager.pause(!1);
            a = g.Core.instance._compMap.OrdersManager;
            a = this._fromResult ? a.get_currentOrderId() + 1 : a.get_currentOrderId();
            this._orderText.setText(u.string(a));
            g.Core.instance._compMap.LayerManager.menu.addChild(this._container);
            a = this._container._compMap.Sprite;
            a.x.set(252.5);
            a.y.set(600);
            a.y.animateTo(250, 0.5, K.backOut);
            a.y.behaviorComplete.connect(q(this, this.onOrderShown)).once()
        },
        onHudLoaded: function(a) {
            this._orderFont = new qa(a, "fonts/creative72");
            this._container = (new r).add(new x);
            this._orderVisual = new S(a.loadTexture("images/OrderNbr.png"));
            this._orderVisual.centerAnchor();
            this._orderVisual.anchorX.set(0);
            this._orderText = new W(this._orderFont, "");
            this._orderText.x.set(this._orderVisual.getNaturalWidth());
            this._orderText.y.set(-40);
            this._container.addChild((new r).add(this._orderVisual));
            this._container.addChild((new r).add(this._orderText))
        },
        get_shown: function() {
            return this._shown
        },
        __class__: f.orders.OrderNumberPopup
    };
    f.orders.OrdersManager = function() {
        g.manager.AbstractManager.call(this)
    };
    h["com.bkom.game.orders.OrdersManager"] = f.orders.OrdersManager;
    f.orders.OrdersManager.__name__ = ["com", "bkom", "game", "orders", "OrdersManager"];
    f.orders.OrdersManager.__super__ = g.manager.AbstractManager;
    f.orders.OrdersManager.prototype = w(g.manager.AbstractManager.prototype, {
        getName: function() {
            return "OrdersManager"
        },
        get_finishedOrders: function() {
            return this._finishedOrders
        },
        get_oven: function() {
            return this._oven
        },
        get_currentOrderId: function() {
            return this._currentOrderId
        },
        get_currentOrder: function() {
            return this._currentOrder
        },
        takeOutPizza: function() {
            return this._oven.removeFromOven()
        },
        onIngredientSliced: function(a) {
            this._currentOrder.onSlicedIngredient(a)
        },
        isOvenEmpty: function() {
            return this._oven.getIsEmpty()
        },
        createOrder: function() {
            this._currentOrderId++;
            null != this._currentOrder && this._currentOrder.stopListeners();
            this._currentOrder = new f.orders.PizzaOrder(this._currentOrderId)
        },
        onUpdate: function(a) {
            g.manager.AbstractManager.prototype.onUpdate.call(this, a);
            this._oven.update(a)
        },
        onPizzaFinished: function(a) {
            "trashed" != a.get_status() && this._oven.bake(a)
        },
        onOrderFinished: function(a) {
            -1 ==
                ha.indexOf(this._finishedOrders, a) && this._finishedOrders.push(a)
        },
        startGame: function() {
            this._currentOrderId = 0;
            this._sliceConnection = this.owner._compMap.PizzaWorld.onIngredientSliced.connect(q(this, this.onIngredientSliced));
            this._pizzaFinishedConnection = this.pizzaFinished.connect(q(this, this.onPizzaFinished));
            this._orderFinishedConnection = this.orderFinished.connect(q(this, this.onOrderFinished));
            this._oven.createVisual();
            this.createOrder();
            g.Core.instance._compMap.PizzaWorld.get_pizzaShower().showPizza(this._currentOrder.get_currentPizza())
        },
        clear: function() {
            this._oven.clear();
            this._currentOrderId = 0;
            this._currentOrder.dispose();
            this._currentOrder = null;
            this._sliceConnection.dispose();
            this._pizzaFinishedConnection.dispose();
            this._orderFinishedConnection.dispose()
        },
        allManagersInitialized: function() {
            g.manager.AbstractManager.prototype.allManagersInitialized.call(this);
            this._oven = new f.orders.oven.Oven
        },
        init: function() {
            g.manager.AbstractManager.prototype.init.call(this);
            this._currentOrderId = 0;
            this.pizzaFinished = new C;
            this.orderFinished = new C;
            this.pizzaCooked = new C;
            this.pizzaBurnt = new C;
            this.pizzaCookedOut = new C;
            this.onIngredientRatio = new Ia;
            this._finishedOrders = new dc;
            this.initFinished()
        },
        __class__: f.orders.OrdersManager
    });
    f.orders.PizzaOrder = function(a) {
        this._pizzas = [];
        var b = g.Core.instance._compMap.ConfigManager,
            c = b.getValue("cuttables", "startingDressing") | 0;
        this.randomizeOrder((a * (b.getValue("cuttables", "dressingPerLevel") | 0) | 0) + c);
        this._pizzaBurntConnection = g.Core.instance._compMap.OrdersManager.pizzaBurnt.connect(q(this, this.onPizzaBurnt));
        this._badIngredientConnection = g.Core.instance._compMap.PizzaWorld.onBadIngredientSliced.connect(q(this, this.onWrongIngredient));
        this._pizzaIndex = 0;
        this._currentPizza = this._pizzas[this._pizzaIndex]
    };
    h["com.bkom.game.orders.PizzaOrder"] = f.orders.PizzaOrder;
    f.orders.PizzaOrder.__name__ = ["com", "bkom", "game", "orders", "PizzaOrder"];
    f.orders.PizzaOrder.prototype = {
        get_pizzas: function() {
            return this._pizzas
        },
        get_currentPizza: function() {
            return this._currentPizza
        },
        trimUseablePizzas: function(a) {
            f.orders.PizzaOrder._useablePizzas = [];
            for (var b = 0, c = f.orders.pizza.EPizzaDefinition.get_definitions(); b < c.length;) {
                var e = c[b];
                ++b;
                e.get_totalIngredients() <= a && f.orders.PizzaOrder._useablePizzas.push(e)
            }
        },
        onSlicedIngredient: function(a) {
            if (null != this._currentPizza && (this._currentPizza.addSliced(a), this._currentPizza.getIsComplete())) {
                var a = g.Core.instance._compMap.OrdersManager,
                    b = this._currentPizza;
                this._pizzaIndex++;
                this._pizzaIndex >= this._pizzas.length ? (a.orderFinished.emit(this), this._currentPizza = null) : this._currentPizza = this._pizzas[this._pizzaIndex];
                a.pizzaFinished.emit(b)
            }
        },
        dispose: function() {
            for (var a = 0, b = this._pizzas; a < b.length;) {
                var c = b[a];
                ++a;
                c.dispose()
            }
            null != this._pizzaBurntConnection && this._pizzaBurntConnection.dispose();
            this._pizzas = this._currentPizza = this._pizzaBurntConnection = null
        },
        randomizeOrder: function(a) {
            for (this._pizzas = []; 2 > this._pizzas.length;) {
                var b = a;
                this._pizzas = [];
                for (var c; 0 < b;) {
                    this.trimUseablePizzas(b);
                    if (0 == f.orders.PizzaOrder._useablePizzas.length) break;
                    c = Math.random() * f.orders.PizzaOrder._useablePizzas.length | 0;
                    this._pizzas.push(new f.orders.pizza.Pizza(f.orders.PizzaOrder._useablePizzas[c]));
                    b -= f.orders.PizzaOrder._useablePizzas[c].get_totalIngredients()
                }
            }
        },
        trashPizza: function(a) {
            var b = new f.orders.pizza.Pizza(a.get_definition());
            "burnt" == a.get_status() ? this._pizzas.push(b) : "trashed" == a.get_status() && this._pizzas.splice(this._pizzaIndex + 1, 0, b);
            null == this._currentPizza && (this._currentPizza = b, g.Core.instance._compMap.PizzaWorld.showCurrentPizza())
        },
        onWrongIngredient: function() {
            this._currentPizza.set_status("trashed");
            this.trashPizza(this._currentPizza);
            this._pizzaIndex++;
            var a = this._currentPizza;
            this._currentPizza = this._pizzas[this._pizzaIndex];
            g.Core.instance._compMap.OrdersManager.pizzaFinished.emit(a);
            g.Core.instance._compMap.MenuManager.showMenu("WrongIngredient")
        },
        onPizzaBurnt: function(a) {
            this.trashPizza(a)
        },
        stopListeners: function() {
            this._pizzaBurntConnection.dispose();
            this._pizzaBurntConnection = null;
            this._badIngredientConnection.dispose();
            this._badIngredientConnection = null
        },
        __class__: f.orders.PizzaOrder
    };
    f.orders.oven = {};
    f.orders.oven.EPizzaStatus = function() {};
    h["com.bkom.game.orders.oven.EPizzaStatus"] =
        f.orders.oven.EPizzaStatus;
    f.orders.oven.EPizzaStatus.__name__ = "com,bkom,game,orders,oven,EPizzaStatus".split(",");
    f.orders.oven.Oven = function() {
        this._bakingPizzas = [];
        this._ordersManagerRef = g.Core.instance._compMap.OrdersManager;
        this._gameManagerRef = g.Core.instance._compMap.GameManager;
        this._soundManager = g.Core.instance._compMap.SoundManager;
        var a = g.Core.instance._compMap.ConfigManager;
        this._burnTime = u.parseFloat(a.getValue("game", "baseBurnTime"));
        this._bakingTime = u.parseFloat(a.getValue("game", "baseCookTime"));
        this.onOvenEmpty = new X;
        this.onPizzaTakenOut = new X
    };
    h["com.bkom.game.orders.oven.Oven"] = f.orders.oven.Oven;
    f.orders.oven.Oven.__name__ = "com,bkom,game,orders,oven,Oven".split(",");
    f.orders.oven.Oven.prototype = {
        getIsEmpty: function() {
            return 0 == this._bakingPizzas.length
        },
        update: function(a) {
            if (!this._gameManagerRef.get_isPaused())
                for (var b = 0, c = this._bakingPizzas; b < c.length;) {
                    var e = c[b];
                    ++b;
                    var d = e;
                    d.set_valueB(d.get_valueB() + a);
                    e.get_valueB() > this._burnTime && "cooked" == e.get_valueA().get_status() ? (e.get_valueA().set_status("burnt"),
                        this.removeFromOven(), this._ordersManagerRef.pizzaBurnt.emit(e.get_valueA()), null) : e.get_valueB() > this._bakingTime && "raw" == e.get_valueA().get_status() && (e.get_valueA().set_status("cooked"), this._soundManager.playSfx("pizzaReady"), this._ordersManagerRef.pizzaCooked.emit(e.get_valueA()), null)
                }
        },
        onVisualLoaded: function(a) {
            this._animation = (new g.animations.TexturePackerLibrary(a, "door/", 30)).getMovie();
            this._ovenVisual = (new r).add(this._animation);
            this._animation.x.set(694);
            this._animation.y.set(185);
            this._animation.playAnimation("idle");
            g.Core.instance._compMap.PizzaWorld.get_mVisual().get_pizzaContainer().addChild(this._ovenVisual)
        },
        createVisual: function() {
            g.Core.instance._compMap.ManifestLoader.load("Level", q(this, this.onVisualLoaded))
        },
        pizzaAnimPlayed: function(a) {
            a.stop();
            this._animation.playAnimation("idle");
            this._canRemove = !0;
            this.onPizzaTakenOut.emit();
            0 == this._bakingPizzas.length && this.onOvenEmpty.emit()
        },
        removeFromOven: function() {
            if (0 < this._bakingPizzas.length) {
                var a = this._bakingPizzas.shift(),
                    b;
                "burnt" == a.get_valueA().get_status() ? (b = this._animation.playAnimation("burnt"), this._soundManager.playSfx("burnt")) : (b = this._animation.playAnimation("cooked"), this._soundManager.playSfx("cooked"), this._ordersManagerRef.pizzaCookedOut.emit(a.get_valueA()));
                this._canRemove = !1;
                b.animFinishedPlaying.connect(q(this, this.pizzaAnimPlayed)).once();
                return a.get_valueA()
            }
            return null
        },
        bake: function(a) {
            this._bakingPizzas.push(new o.Tuple2(a, 0));
            a.set_status("raw")
        },
        clear: function() {
            this._bakingPizzas = [];
            this._animation.dispose();
            this._animation = null
        },
        __class__: f.orders.oven.Oven
    };
    f.orders.pizza = {};
    f.orders.pizza.EPizzaDefinition = function(a, b) {
        this._baseName = b;
        var c = g.Core.instance._compMap.ConfigManager.getSection(a),
            e;
        this._totalIngredients = 0;
        this._ingredients = new H;
        for (var d = c.keys(); d.hasNext();) {
            var l = d.next();
            null != f.world.objects.ECuttableType.getCuttableTypeByName(l) && (e = u.parseInt(c.get(l)), this._ingredients.set(l, e), this._totalIngredients += e)
        }
        this._timeBonus = u.parseInt(c.get("timeBonus"));
        this._type = a;
        f.orders.pizza.EPizzaDefinition._definitions.push(this)
    };
    h["com.bkom.game.orders.pizza.EPizzaDefinition"] = f.orders.pizza.EPizzaDefinition;
    f.orders.pizza.EPizzaDefinition.__name__ = "com,bkom,game,orders,pizza,EPizzaDefinition".split(",");
    f.orders.pizza.EPizzaDefinition.init = function() {
        f.orders.pizza.EPizzaDefinition.PEPPERONI_CHEESE = new f.orders.pizza.EPizzaDefinition("pepperoniCheese", "pizzaBaseTomato.png");
        f.orders.pizza.EPizzaDefinition.VEGETARIAN = new f.orders.pizza.EPizzaDefinition("vegetarian", "pizzaBaseTomato.png");
        f.orders.pizza.EPizzaDefinition.MIKE_SPECIAL =
            new f.orders.pizza.EPizzaDefinition("mikeySpecial", "pizzaBaseMayo.png")
    };
    f.orders.pizza.EPizzaDefinition.get_definitions = function() {
        return f.orders.pizza.EPizzaDefinition._definitions
    };
    f.orders.pizza.EPizzaDefinition.prototype = {
        get_timeBonus: function() {
            return this._timeBonus
        },
        get_baseName: function() {
            return this._baseName
        },
        get_totalIngredients: function() {
            return this._totalIngredients
        },
        get_type: function() {
            return this._type
        },
        get_ingredients: function() {
            return this._ingredients
        },
        requiresIngredient: function(a) {
            for (var b =
                    this._ingredients.keys(); b.hasNext();)
                if (b.next() == a.get_mType()) return !0;
            return !1
        },
        __class__: f.orders.pizza.EPizzaDefinition
    };
    f.orders.pizza.Pizza = function(a) {
        this._definition = a;
        this._toppings = new H;
        this._orderManager = g.Core.instance._compMap.OrdersManager;
        this.toppingCompleted = new C;
        for (a = this._definition.get_ingredients().keys(); a.hasNext();) this._toppings.set(a.next(), 0)
    };
    h["com.bkom.game.orders.pizza.Pizza"] = f.orders.pizza.Pizza;
    f.orders.pizza.Pizza.__name__ = "com,bkom,game,orders,pizza,Pizza".split(",");
    f.orders.pizza.Pizza.prototype = {
        get_definition: function() {
            return this._definition
        },
        set_status: function(a) {
            return this._status = a
        },
        get_status: function() {
            return this._status
        },
        getIsComplete: function() {
            return 0 == this.getNeededToppings().length
        },
        getNeededToppings: function() {
            for (var a = [], b, c, e = this._definition.get_ingredients().keys(); e.hasNext();) {
                var d = e.next();
                b = this._definition.get_ingredients().get(d);
                c = this._toppings.get(d);
                c < b && a.push(d)
            }
            return a
        },
        addSliced: function(a) {
            if (this._toppings.exists(a.get_mType())) {
                var b =
                    this._toppings.get(a.get_mType()) + 1;
                this._toppings.set(a.get_mType(), b);
                this._orderManager.onIngredientRatio.emit(a.get_mDef(), Math.min(1, b / this._definition.get_ingredients().get(a.get_mType())));
                b >= this._definition.get_ingredients().get(a.get_mType()) && this.toppingCompleted.emit(a.get_mType())
            }
        },
        dispose: function() {
            this.toppingCompleted = this._status = this._toppings = this._definition = null
        },
        __class__: f.orders.pizza.Pizza
    };
    f.pause = {};
    f.pause.PauseMenu = function() {
        g.menu.AbstractMenu.call(this)
    };
    h["com.bkom.game.pause.PauseMenu"] =
        f.pause.PauseMenu;
    f.pause.PauseMenu.__name__ = ["com", "bkom", "game", "pause", "PauseMenu"];
    f.pause.PauseMenu.__super__ = g.menu.AbstractMenu;
    f.pause.PauseMenu.prototype = w(g.menu.AbstractMenu.prototype, {
        getName: function() {
            return "AbstractMenu"
        },
        onMenuTweenedOut: function() {
            g.Core.instance._compMap.GameManager.unpause();
            g.menu.AbstractMenu.prototype.hide.call(this)
        },
        hide: function() {
            this.removeListeners();
            var a = this.owner._compMap.Sprite;
            a.y.animateTo(500, 0.3, K.backIn);
            a.y.behaviorComplete.connect(q(this, this.onMenuTweenedOut)).once()
        },
        onMenuTweenedIn: function() {
            g.menu.AbstractMenu.prototype.show.call(this);
            this.addListeners()
        },
        doQuit: function() {
            g.Core.instance._compMap.MenuManager.showMenu("WelcomeScreen");
            g.Core.instance._compMap.PizzaWorld.unloadWorld()
        },
        onQuit: function() {
            this._howToPlayShown || (g.Core.instance._compMap.MenuManager.hideMenu("PauseMenu"), this.onHidden.connect(q(this, this.doQuit)).once())
        },
        onHowToPlay: function() {
            var a = this,
                b = g.Core.instance._compMap.MenuManager;
            this._howToPlayShown = !0;
            b.showMenu("HowToPlay").onHidden.connect(function() {
                a._howToPlayShown = !1
            }).once()
        },
        onResume: function() {
            this._howToPlayShown || g.Core.instance._compMap.MenuManager.hideMenu("PauseMenu")
        },
        removeListeners: function() {
            this._resumeConnection.dispose();
            this._howToPlayConnection.dispose();
            this._quitConnection.dispose();
            this._setSoundOnConnection.dispose();
            this._setSoundOffConnection.dispose();
            this._setSoundOffConnection = this._setSoundOnConnection = this._quitConnection = this._howToPlayConnection = this._resumeConnection = null
        },
        onSoundOn: function() {
            this._howToPlayShown || (this._soundManRef.mute(),
                this.mMenuItems.get("soundOnBtn").visible.set(!this._soundManRef.get_isMute()), this.mMenuItems.get("soundOffBtn").visible.set(this._soundManRef.get_isMute()))
        },
        onSoundOff: function() {
            this._howToPlayShown || (this._soundManRef.unmute(), this.mMenuItems.get("soundOnBtn").visible.set(!this._soundManRef.get_isMute()), this.mMenuItems.get("soundOffBtn").visible.set(this._soundManRef.get_isMute()))
        },
        addListeners: function() {
            this._resumeConnection = this.mMenuItems.get("resumeBtn").getPointerDown().connect(q(this,
                this.onResume));
            this._howToPlayConnection = this.mMenuItems.get("howToPlayBtn").getPointerDown().connect(q(this, this.onHowToPlay));
            this._quitConnection = this.mMenuItems.get("quitBtn").getPointerDown().connect(q(this, this.onQuit));
            this._setSoundOnConnection = this.mMenuItems.get("soundOnBtn").getPointerDown().connect(q(this, this.onSoundOn));
            this._setSoundOffConnection = this.mMenuItems.get("soundOffBtn").getPointerDown().connect(q(this, this.onSoundOff))
        },
        show: function() {
            this._soundManRef = g.Core.instance._compMap.SoundManager;
            var a = this.owner._compMap.Sprite;
            a.y.set(500);
            this.mMenuItems.get("soundOnBtn").visible.set(!this._soundManRef.get_isMute());
            this.mMenuItems.get("soundOffBtn").visible.set(this._soundManRef.get_isMute());
            this._howToPlayShown = !1;
            a.y.animateTo(0, 0.8, K.backOut);
            a.y.behaviorComplete.connect(q(this, this.onMenuTweenedIn)).once()
        },
        __class__: f.pause.PauseMenu
    });
    f.result = {};
    f.result.ResultScreen = function() {
        g.menu.AbstractMenu.call(this)
    };
    h["com.bkom.game.result.ResultScreen"] = f.result.ResultScreen;
    f.result.ResultScreen.__name__ = ["com", "bkom", "game", "result", "ResultScreen"];
    f.result.ResultScreen.__super__ = g.menu.AbstractMenu;
    f.result.ResultScreen.prototype = w(g.menu.AbstractMenu.prototype, {
        getName: function() {
            return "AbstractMenu"
        },
        removeListeners: function() {
            this._continueConnection.dispose();
            this._continueConnection = null;
            this._quitConnection.dispose();
            this._quitConnection = null
        },
        onContinue: function() {
            g.Core.instance._compMap.MenuManager.hideMenu("ResultScreen");
            f.orders.OrderNumberPopup.get_instance().showOrder()
        },
        onQuit: function() {
            g.Core.instance._compMap.GameManager.unpause();
            var a = g.Core.instance._compMap.MenuManager;
            a.showMenu("WelcomeScreen");
            a.hideMenu("ResultScreen");
            g.Core.instance._compMap.PizzaWorld.unloadWorld()
        },
        registerListeners: function() {
            this._continueConnection = this.mMenuItems.get("btnContinue").getPointerDown().connect(q(this, this.onContinue));
            this._quitConnection = this.mMenuItems.get("btnQuit").getPointerDown().connect(q(this, this.onQuit))
        },
        hide: function() {
            this.removeListeners();
            g.menu.AbstractMenu.prototype.hide.call(this)
        },
        showWin: function(a) {
            var b = this,
                c = this.mAssetPack.loadTexture("images/win.png"),
                e = new S(c),
                d = (new r).add(e),
                f = this.mMenuItems.get("pizzaSuccess").owner;
            e.anchorX.set(100);
            e.anchorY.set(70);
            ba.delay(function() {
                e.y.set(-400);
                f.addChild(d);
                e.y.animateTo(-25 * a, 1, K.bounceOut);
                ba.delay(q(b, b.playPizzaFellGood), 500)
            }, 750 * a)
        },
        playPizzaFellWrong: function() {
            this._soundManager.playSfx("pizzaFell")
        },
        playPizzaFellGood: function() {
            this._soundManager.playSfx("pizzaFell")
        },
        showFail: function(a) {
            var b = this,
                c;
            c = 0 == a ? this.mAssetPack.loadTexture("images/failBase.png") :
                this.mAssetPack.loadTexture("images/failPizza.png");
            var e = new S(c),
                d = (new r).add(e),
                f = this.mMenuItems.get("pizzaFail").owner;
            e.anchorX.set(0 == a ? 130 : 101);
            e.anchorY.set(0 == a ? 155 : 36);
            ba.delay(function() {
                f.addChild(d);
                0 == a ? (e.y.set(-400), e.y.animateTo(0, 1, K.bounceOut), ba.delay(q(b, b.playPizzaFellGood), 500)) : (e.y.set(-500), e.x.set(0.5 < Math.random() ? 7 : -3), e.y.animateTo(-15 * a, 0.5, K.linear), e.y.behaviorComplete.connect(q(b, b.playPizzaFellWrong)).once())
            }, 750 * a)
        },
        showPizzas: function() {
            var a = g.Core.instance._compMap.OrdersManager.get_currentOrder().get_pizzas();
            this.mMenuItems.get("pizzaFail").owner.disposeChildren();
            this.mMenuItems.get("pizzaSuccess").owner.disposeChildren();
            for (var b = 0, c = 0, e = 0; e < a.length;) {
                var d = a[e];
                ++e;
                if ("cooked" == d.get_status()) this.showWin(b), b++;
                else if ("burnt" == d.get_status() || "trashed" == d.get_status()) this.showFail(c), c++
            }
        },
        showTime: function(a, b) {
            a.setText(f.util.TimeUtil.formatTime(b));
            a.anchorX.set(a.getNaturalWidth() / 2);
            a.anchorY.set(a.getNaturalHeight() / 2);
            a;
            var c = a.anchorX;
            c.set(c._value + a.getNaturalWidth() / 2);
            a.visible.set(!1)
        },
        computeTimeBonus: function() {
            for (var a = g.Core.instance._compMap.OrdersManager.get_currentOrder().get_pizzas(), b = 0, c = 0; c < a.length;) {
                var e = a[c];
                ++c;
                "cooked" == e.get_status() && (b += e.get_definition().get_timeBonus())
            }
            a = g.Core.instance._compMap.GameManager;
            this.showTime(this._currentTime._compMap.Sprite, a.get_totalTime());
            this.showTime(this._timeBonus._compMap.Sprite, b);
            a.changeTime(b);
            this.showTime(this._newTime._compMap.Sprite, a.get_totalTime())
        },
        onFontLoaded: function(a) {
            this._font = new qa(a, "fonts/creative40");
            var a = new W(this._font, ""),
                b = new W(this._font, ""),
                c = new W(this._font, "");
            this._currentTime = (new r).add(a);
            this._timeBonus = (new r).add(b);
            this._newTime = (new r).add(c);
            this.mMenuItems.get("timeLeft").owner.addChild(this._currentTime);
            this.mMenuItems.get("timeBonus").owner.addChild(this._timeBonus);
            this.mMenuItems.get("newTimeLeft").owner.addChild(this._newTime)
        },
        createFont: function() {
            g.Core.instance._compMap.ManifestLoader.load("Hud", q(this, this.onFontLoaded))
        },
        animateTxt: function(a) {
            a.visible.set(!0);
            a.scaleX.set(0);
            a.scaleY.set(1);
            a;
            a.scaleX.animateTo(1, 0.5, K.backOut)
        },
        onPaperShown: function() {
            this.animateTxt(this._currentTime._compMap.Sprite);
            this.animateTxt(this._timeBonus._compMap.Sprite);
            this.animateTxt(this._newTime._compMap.Sprite)
        },
        onMenuShown: function() {
            null == this._font && this.createFont();
            this._soundManager = g.Core.instance._compMap.SoundManager;
            var a = this.mMenuItems.get("resultPaper");
            a.y.set(-340);
            a.y.animateTo(-31, 0.3, K.backOut);
            a.y.behaviorComplete.connect(q(this, this.onPaperShown)).once();
            this._soundManager.playSfx("resultPaper");
            this.registerListeners();
            this.showPizzas();
            this.computeTimeBonus();
            g.menu.AbstractMenu.prototype.onMenuShown.call(this)
        },
        __class__: f.result.ResultScreen
    });
    ra = void 0;
    ba = void 0;
    Aa = void 0;
    mc = void 0;
    cc = void 0;
    V = void 0;
    na = void 0;
    Ba = void 0;
    ba = function(a) {
        var b = this;
        this.id = window.setInterval(function() {
            b.run()
        }, a)
    };
    h["haxe.Timer"] = ba;
    ba.__name__ = ["haxe", "Timer"];
    ba.delay = function(a, b) {
        var c = new ba(b);
        c.run = function() {
            c.stop();
            a()
        };
        return c
    };
    ba.prototype = {
        run: function() {},
        stop: function() {
            null != this.id && (window.clearInterval(this.id), this.id = null)
        },
        __class__: ba
    };
    f.util = {};
    f.util.PizzaTimer = function(a) {
        ba.call(this, a);
        this._currentCount = 0;
        this._isPaused = !1;
        this.onTick = new C
    };
    h["com.bkom.game.util.PizzaTimer"] = f.util.PizzaTimer;
    f.util.PizzaTimer.__name__ = ["com", "bkom", "game", "util", "PizzaTimer"];
    f.util.PizzaTimer.__super__ = ba;
    f.util.PizzaTimer.prototype = w(ba.prototype, {
        get_currentCount: function() {
            return this._currentCount
        },
        reset: function() {
            this._currentCount = 0;
            this.onTick.emit(this._currentCount)
        },
        resume: function() {
            this._isPaused = !1
        },
        pause: function() {
            this._isPaused = !0
        },
        run: function() {
            this._isPaused || (this._currentCount++, this.onTick.emit(this._currentCount))
        },
        __class__: f.util.PizzaTimer
    });
    f.util.PlaynomicsUtil = function() {};
    h["com.bkom.game.util.PlaynomicsUtil"] = f.util.PlaynomicsUtil;
    f.util.PlaynomicsUtil.__name__ = ["com", "bkom", "game", "util", "PlaynomicsUtil"];
    f.util.PlaynomicsUtil.callMilestone = function(a) {
        a = "var doMileStone = function(){if (window.pnMilestone) { window.pnMilestone(" + (1E9 * Math.random() |
            0) + ',"' + a + '");}}; setTimeout(doMileStone(), 2500);';
        o.BrowserUtil.callJSFunction(a)
    };
    f.util.PlaynomicsUtil.initPlaynomics = function() {
        var a = o.BrowserUtil.callJSFunction("function doGetUser(){ if (window.NICK && window.NICK.login) { return window.NICK.login.getNickName(); } else { return null; } } doGetUser();");
        null == a || "" == a ? (a = A._platform.getStorage().get("userid"), null == a && (a = 1E9 * Math.random() | 0, a = Aa.encode(u.string(a)), A._platform.getStorage().set("userid", a))) : a = Aa.encode(u.string(a));
        B.window._pnConfig = {};
        B.window._pnConfig.userId = a;
        o.BrowserUtil.callJSFunction('function doPlaynomics(){var _pnAPIURL=document.location.protocol+"//js.a.playnomics.net/v1/api?a=5631851708961517575",_pnAPI=document.createElement("script");_pnAPI.type="text/javascript";_pnAPI.async=true;_pnAPI.src=_pnAPIURL;document.body.appendChild(_pnAPI);}; doPlaynomics();')
    };
    f.util.TimeUtil = function() {};
    h["com.bkom.game.util.TimeUtil"] = f.util.TimeUtil;
    f.util.TimeUtil.__name__ = ["com", "bkom", "game", "util", "TimeUtil"];
    f.util.TimeUtil.formatTime =
        function(a) {
            var b = u.string(a / 60 | 0),
                a = u.string(a % 60);
            2 > a.length && (a = "0" + a);
            return b + ":" + a
        };
    f.welcome = {};
    f.welcome.WelcomeScreen = function() {
        g.menu.AbstractMenu.call(this)
    };
    h["com.bkom.game.welcome.WelcomeScreen"] = f.welcome.WelcomeScreen;
    f.welcome.WelcomeScreen.__name__ = ["com", "bkom", "game", "welcome", "WelcomeScreen"];
    f.welcome.WelcomeScreen.__super__ = g.menu.AbstractMenu;
    f.welcome.WelcomeScreen.prototype = w(g.menu.AbstractMenu.prototype, {
        getName: function() {
            return "AbstractMenu"
        },
        doStartWorld: function() {
            g.Core.instance._compMap.GameManager.reset();
            g.Core.instance._compMap.PizzaWorld.startWorld()
        },
        hide: function() {
            g.menu.AbstractMenu.prototype.hide.call(this);
            g.loading.Loading.getInstance().show();
            this.doStartWorld()
        },
        onMenuClick: function() {
            this._callbackAnim.dispose();
            this._callbackAnim = null;
            g.Core.instance._compMap.MenuManager.hideMenu("WelcomeScreen");
            var a = o.BrowserUtil.isiPad() && 1 < o.BrowserUtil.getiPadVersion(),
                b = o.BrowserUtil.isiPhone4();
            (!o.BrowserUtil.isMobile() || a || b) && g.Core.instance._compMap.SoundManager.loadSounds(null)
        },
        animateText: function() {
            this._animatedText.alpha.animateTo(1 ==
                this._animatedText.alpha._value ? 0 : 1, 1);
            this._callbackAnim = this._animatedText.alpha.behaviorComplete.connect(q(this, this.animateText)).once()
        },
        onMenuShown: function() {
            g.menu.AbstractMenu.prototype.onMenuShown.call(this);
            o.BrowserUtil.isMobile() ? (this.mMenuItems.get("click").visible.set(!1), this._animatedText = this.mMenuItems.get("tap")) : (this.mMenuItems.get("tap").visible.set(!1), this._animatedText = this.mMenuItems.get("click"));
            this._animatedText.alpha.set(1);
            this.animateText();
            A._platform.getPointer().down.connect(q(this,
                this.onMenuClick)).once();
            f.util.PlaynomicsUtil.callMilestone("CUSTOM2")
        },
        __class__: f.welcome.WelcomeScreen
    });
    f.world = {};
    f.world.BasePizzaComponent = function() {};
    h["com.bkom.game.world.BasePizzaComponent"] = f.world.BasePizzaComponent;
    f.world.BasePizzaComponent.__name__ = ["com", "bkom", "game", "world", "BasePizzaComponent"];
    f.world.BasePizzaComponent.__super__ = L;
    f.world.BasePizzaComponent.prototype = w(L.prototype, {
        getName: function() {
            return "BasePizzaComponent"
        },
        onEntityFinishedCreating: function() {},
        __class__: f.world.BasePizzaComponent
    });
    f.world.PizzaShower = function(a) {
        r.call(this);
        this._layers = new H;
        this._bases = new H;
        this._assetPack = a;
        a = new S(a.loadTexture("Palette.png"));
        a.anchorX.set(170);
        a.anchorY.set(50);
        this._palette = (new r).add(a);
        this.addChild(this._palette);
        this._shown = !1;
        this._visual = new x;
        this._visual.x.set(1200);
        this._visual.y.set(375);
        this.add(this._visual);
        this.createBases();
        this.createIngredientLayers();
        a = g.Core.instance._compMap.OrdersManager;
        this._showPizzaConnect = a.pizzaFinished.connect(q(this, this.showPizza));
        this._ratioConnect =
            a.onIngredientRatio.connect(q(this, this.showRatio))
    };
    h["com.bkom.game.world.PizzaShower"] = f.world.PizzaShower;
    f.world.PizzaShower.__name__ = ["com", "bkom", "game", "world", "PizzaShower"];
    f.world.PizzaShower.__super__ = r;
    f.world.PizzaShower.prototype = w(r.prototype, {
        onHidden: function() {
            for (var a, b = this._bases.iterator(); b.hasNext();) a = b.next()._compMap.Sprite, a.visible.set(!1);
            for (b = this._layers.iterator(); b.hasNext();) a = b.next()._compMap.Sprite, a.visible.set(!1), null != a.get_currentAnimation() && a.get_currentAnimation().stop();
            this._shown = !1;
            null != g.Core.instance._compMap.OrdersManager.get_currentOrder().get_currentPizza() && this.doShowPizza()
        },
        hideAll: function() {
            this._visual.x.animateTo(1200, 0.3, K.backIn);
            this._visual.x.behaviorComplete.connect(q(this, this.onHidden)).once()
        },
        doShowPizza: function() {
            var a = g.Core.instance._compMap.OrdersManager.get_currentOrder().get_currentPizza().get_definition();
            this._bases.get(a.get_type())._compMap.Sprite.visible.set(!0);
            for (var b, a = a.get_ingredients().keys(); a.hasNext();) b = this._layers.get(a.next()),
                b = b._compMap.Sprite, b.visible.set(!0), b.playAnimation("idle");
            this._shown = !0;
            this._visual.x.animateTo(422, 0.3, K.backOut)
        },
        showPizza: function() {
            this._shown ? this.hideAll() : this.doShowPizza()
        },
        createIngredientLayers: function() {
            for (var a, b = 0, c = f.world.objects.ECuttableType.get_mTypes(); b < c.length;) {
                var e = c[b];
                ++b;
                null == e.get_mSpecialEffect() && (a = new g.animations.TexturePackerLibrary(this._assetPack, "pizza/" + e.get_mType() + "/", 30), a = a.getMovie(), a.y.set(-12), a.visible.set(!1), a = (new r).add(a), this._layers.set(e.get_mType(),
                    a), this.addChild(a))
            }
        },
        createBases: function() {
            for (var a, b = 0, c = f.orders.pizza.EPizzaDefinition.get_definitions(); b < c.length;) {
                var e = c[b];
                ++b;
                a = this._assetPack.loadTexture("pizza/" + e.get_baseName());
                a = new S(a);
                a.visible.set(!1);
                a.anchorX.set(a.getNaturalWidth() / 2);
                a.anchorY.set(a.getNaturalHeight() / 2);
                a;
                a = (new r).add(a);
                this._bases.set(e.get_type(), a);
                this.addChild(a)
            }
        },
        onAnimPlayed: function(a) {
            a.stop()
        },
        showRatio: function(a, b) {
            var c = this._layers.get(a.get_mType())._compMap.Sprite,
                e = u.parseInt(c.get_currentAnimation().symbol.getName().charAt(5)),
                d = null;
            0.33 <= b && 1 > e ? d = c.playAnimation("state1") : 0.66 <= b && 2 > e ? d = c.playAnimation("state2") : 1 == b && 3 > e && (d = c.playAnimation("state3"));
            if (null != d) d.animFinishedPlaying.connect(q(this, this.onAnimPlayed)).once()
        },
        dispose: function() {
            r.prototype.dispose.call(this);
            this._showPizzaConnect.dispose();
            this._showPizzaConnect = null;
            this._ratioConnect.dispose();
            this._ratioConnect = null
        },
        __class__: f.world.PizzaShower
    });
    f.world.PizzaWorld = function() {
        g.manager.AbstractManager.call(this);
        this._libraries = new H;
        this.onIngredientSliced =
            new C;
        this.onBadIngredientSliced = new C;
        this._active = !1
    };
    h["com.bkom.game.world.PizzaWorld"] = f.world.PizzaWorld;
    f.world.PizzaWorld.__name__ = ["com", "bkom", "game", "world", "PizzaWorld"];
    f.world.PizzaWorld.__super__ = g.manager.AbstractManager;
    f.world.PizzaWorld.prototype = w(g.manager.AbstractManager.prototype, {
        getName: function() {
            return "PizzaWorld"
        },
        get_active: function() {
            return this._active
        },
        get_pizzaShower: function() {
            return this._pizzaShower
        },
        get_container: function() {
            return this._container
        },
        get_mVisual: function() {
            return this._visual
        },
        set_mWaveMultiplier: function(a) {
            return this._waveMultiplier = a
        },
        get_mWaveMultiplier: function() {
            return this._waveMultiplier
        },
        onSlice: function(a) {
            this._soundManager.playSfx(a.get_mDef().get_mType());
            null == this._ordersManager.get_currentOrder() || null == this._ordersManager.get_currentOrder().get_currentPizza() || (this._ordersManager.get_currentOrder().get_currentPizza().get_definition().requiresIngredient(a.get_mDef()) || a.get_mPizzaRef() != this._ordersManager.get_currentOrder().get_currentPizza() ? this.onIngredientSliced.emit(a) :
                this.onBadIngredientSliced.emit(a))
        },
        setupWindowSize: function() {
            o.FullScreenUtil.resizeSprite(this._layerManager.world._compMap.Sprite, 855, 500)
        },
        onResume: function() {
            this._slicer.resume();
            this._space.set_mPaused(!1)
        },
        onPause: function() {
            this._slicer.pause();
            this._space.set_mPaused(!0)
        },
        getBadType: function(a) {
            for (var b = [], c = 0, e = f.world.objects.ECuttableType.get_mTypes(); c < e.length;) {
                var d = e[c];
                ++c;
                a.get_definition().requiresIngredient(d) || b.push(d)
            }
            a = Math.random() * b.length | 0;
            return b[a]
        },
        getTypeToSpawn: function(a) {
            for (var a =
                    a.getNeededToppings(), b = Math.random() * a.length | 0, a = a[b], b = null, c = 0, e = f.world.objects.ECuttableType.get_mTypes(); c < e.length;) {
                var d = e[c];
                ++c;
                if (d.get_mType() == a) {
                    b = d;
                    break
                }
            }
            return b
        },
        createCuttable: function(a) {
            var b = new r,
                c = this._libraries.get(a.get_mType());
            null == c && (c = new g.animations.TexturePackerLibrary(this._cuttableAssetPack, "anims/" + a.get_mType() + "/", 30), this._libraries.set(a.get_mType(), c));
            var e = u.parseFloat(this._configManager.getValue("game", "velocityInc")) * this._ordersManager.get_currentOrderId(),
                d = 0.5 > Math.random(),
                l = 500 * Math.random() + 150,
                e = new i.B2Vec2((Math.random() * 5 * a.get_mColliderRadius() + 60 + e) * (d ? 1 : -1), -(5 * a.get_mColliderRadius()) * (l / 450)),
                h = J.resolveClass(a.get_mCustomClass()),
                c = c.getMovie();
            c.x.set(-100);
            a = [c, J.createInstance(h, [a]), new f.world.physics.PizzaBodyComponent(this._space.createSphere(d ? -50 : o.FullScreenUtil.toScaleX(905, 855), l, a.get_mColliderRadius(), !0, !1), e)];
            for (d = 0; d < a.length;) l = a[d], ++d, b.add(l);
            c.playAnimation("idle");
            for (d = 0; d < a.length;) l = a[d], ++d, F.__instanceof(l,
                f.world.BasePizzaComponent) && (c = l, c.onEntityFinishedCreating());
            return b
        },
        getCurrentBadSpawnRate: function() {
            var a = u.parseFloat(this._configManager.getValue("cuttables", "baseBadShowUp")),
                b = u.parseFloat(this._configManager.getValue("cuttables", "badShowUpIncrease")),
                c = u.parseInt(this._configManager.getValue("cuttables", "badIngredientOrderStart")),
                b = (this._ordersManager.get_currentOrderId() - c) * b;
            return a + b
        },
        spawnCuttable: function() {
            var a = this._ordersManager.get_currentOrder().get_currentPizza();
            if (null !=
                a) {
                var b = this.getTypeToSpawn(a);
                if (null != b) {
                    var c = 0;
                    this._ordersManager.get_currentOrderId() >= u.parseInt(this._configManager.getValue("cuttables", "badIngredientOrderStart")) && (c = this.getCurrentBadSpawnRate());
                    this._container.addChild((100 * Math.random() | 0) < c ? this.createCuttable(this.getBadType(a)) : this.createCuttable(b))
                }
            }
        },
        spawnWave: function() {
            if (null != this._ordersManager.get_currentOrder().get_currentPizza())
                for (var a = u.parseInt(this._configManager.getValue("cuttables", "timeBetweenSpawn")), b = this._waveSize *
                        this._waveMultiplier * Math.random(), c = u.parseFloat(this._configManager.getValue("cuttables", "baseSpawnNbr")), b = b + c | 0, c = 0; c < b;) ba.delay(q(this, this.spawnCuttable), a * c), c++
        },
        onHudAssetsLoaded: function(a) {
            this._ordersManager.startGame();
            this._pizzaOutConnection = this._ordersManager.get_oven().onPizzaTakenOut.connect(q(this, this.onPizzaTakenOut));
            this._container.addChild(this._visual);
            this._hud = new f.hud.Hud(a);
            this._hud.start();
            this._layerManager.hud.addChild(this._hud);
            this._space.enableDebug();
            this._slicer.start();
            this.spawnWave();
            this._active = !0;
            this._gameManager.reset();
            this._soundManager.playMusic("Loop", 0.5);
            f.util.PlaynomicsUtil.callMilestone("CUSTOM6");
            g.loading.Loading.getInstance().hide();
            f.orders.OrderNumberPopup.get_instance().showOrder(!1)
        },
        onLevelVisualInitialized: function(a) {
            this._pizzaShower = new f.world.PizzaShower(a);
            this._visual.get_pizzaContainer().addChild(this._pizzaShower);
            this.owner._compMap.ManifestLoader.load("Hud", q(this, this.onHudAssetsLoaded))
        },
        onOvenEmpty: function() {
            this._gameManager.pause(!1);
            g.Core.instance._compMap.MenuManager.showMenu("ResultScreen")
        },
        showCurrentPizza: function() {
            this._pizzaShower.showPizza(null);
            this._hud.showCurrentPizza()
        },
        gotoNextWave: function() {
            this._ordersManager.createOrder();
            this._hud.showOrder(this._ordersManager.get_currentOrder());
            this._pizzaShower.showPizza(null)
        },
        onPizzaTakenOut: function() {
            if (null == this._ordersManager.get_currentOrder().get_currentPizza() && this._ordersManager.get_oven().getIsEmpty()) this.onOvenEmpty()
        },
        onAssetsLoaded: function(a) {
            this._cuttableAssetPack =
                a;
            this._slicer = o.BrowserUtil.isMobile() ? new f.world.slicer.MobileSlicer : new f.world.slicer.PCSlicer;
            this._slicer.set_mSwipeLibrary(new cb(a, "anims"));
            this._visual = new f.world.VisualWorld;
            this._visual.init("Level", q(this, this.onLevelVisualInitialized))
        },
        startWorld: function() {
            this.owner._compMap.ManifestLoader.load("Cuttables", q(this, this.onAssetsLoaded))
        },
        onUpdate: function(a) {
            g.manager.AbstractManager.prototype.onUpdate.call(this, a);
            !this._gameManager.get_isPaused() && this._active && (this._slicer.update(a),
                this._time += a, this._time >= this._timeToNextWave && (this.spawnWave(), this._time = 0))
        },
        allManagersInitialized: function() {
            g.manager.AbstractManager.prototype.allManagersInitialized.call(this);
            f.orders.pizza.EPizzaDefinition.init();
            this._ordersManager = this.owner._compMap.OrdersManager;
            this._layerManager = this.owner._compMap.LayerManager;
            this._soundManager = this.owner._compMap.SoundManager;
            this.owner.add(this._space);
            this._configManager = this.owner._compMap.ConfigManager;
            this._waveSize = u.parseInt(this._configManager.getValue("cuttables",
                "spawnModifier"));
            this._timeToNextWave = u.parseFloat(this._configManager.getValue("game", "spawnRate"));
            this._specialAppearanceRate = u.parseFloat(this._configManager.getValue("specials", "specialShowRate"));
            this._gameManager = this.owner._compMap.GameManager;
            this._pauseConnection = this._gameManager.onPause.connect(q(this, this.onPause));
            this._resumeConnection = this._gameManager.onUnpause.connect(q(this, this.onResume));
            this._container = new r;
            this._layerManager.world.addChild(this._container);
            A._platform.getStage().resize.connect(q(this,
                this.setupWindowSize));
            this.setupWindowSize()
        },
        unloadWorld: function() {
            this._slicer.dispose();
            this._slicer = null;
            this._hud.dispose();
            this._space.clearSpace();
            this._hud = null;
            this._container.disposeChildren();
            this._ordersManager.clear();
            this._visual.dispose();
            this._cuttableAssetPack = this._visual = null;
            null != this._resumeConnection && this._resumeConnection.dispose();
            this._resumeConnection = null;
            null != this._pizzaOutConnection && this._pizzaOutConnection.dispose();
            this._pizzaOutConnection = null;
            null != this._pauseConnection &&
                this._pauseConnection.dispose();
            this._pauseConnection = null;
            this._active = !1
        },
        init: function() {
            g.manager.AbstractManager.prototype.init.call(this);
            f.world.objects.ECuttableType.init();
            this._waveMultiplier = 1;
            this._space = new g.world.components.physics.SpaceComponent(new f.world.physics.PizzaPhysicsListener);
            this._time = 0;
            this.initFinished()
        },
        __class__: f.world.PizzaWorld
    });
    f.world.VisualWorld = function() {
        r.call(this)
    };
    h["com.bkom.game.world.VisualWorld"] = f.world.VisualWorld;
    f.world.VisualWorld.__name__ = ["com",
        "bkom", "game", "world", "VisualWorld"
    ];
    f.world.VisualWorld.__super__ = r;
    f.world.VisualWorld.prototype = w(r.prototype, {
        get_pizzaContainer: function() {
            return this._pizzaContainer
        },
        get_mick: function() {
            return this._mick
        },
        onLoaded: function(a) {
            this._mick = (new g.animations.TexturePackerLibrary(a, "Mick1/ Mick2/", 30)).getMovie();
            this._mick.center();
            var b = (new r).add(this._mick);
            this._mick.playAnimation("Idle");
            this._mick.x.set(340);
            this._mick.y.set(175);
            this._bg = new S(a.loadTexture("Background.jpg"));
            var c = (new r).add(this._bg);
            this._table = new S(a.loadTexture("Comptoir.png"));
            var e = (new r).add(this._table);
            this._table.y.set(325);
            this.addChild(c);
            this.addChild(b);
            this.addChild(e);
            this.addChild(this._pizzaContainer);
            this.onInitCallback(a)
        },
        dispose: function() {
            r.prototype.dispose.call(this);
            this._bg = this._mick = null
        },
        init: function(a, b) {
            this.onInitCallback = b;
            this._pizzaContainer = new r;
            g.Core.instance._compMap.ManifestLoader.load(a, q(this, this.onLoaded))
        },
        __class__: f.world.VisualWorld
    });
    f.world.objects = {};
    f.world.objects.BaseCuttable =
        function(a) {
            f.world.BasePizzaComponent.call(this);
            this.mDef = a;
            this.mType = a.get_mType();
            this.mSpecialEffect = a.get_mSpecialEffect();
            this.mPizzaRef = g.Core.instance._compMap.OrdersManager.get_currentOrder().get_currentPizza()
        };
    h["com.bkom.game.world.objects.BaseCuttable"] = f.world.objects.BaseCuttable;
    f.world.objects.BaseCuttable.__name__ = "com,bkom,game,world,objects,BaseCuttable".split(",");
    f.world.objects.BaseCuttable.__super__ = f.world.BasePizzaComponent;
    f.world.objects.BaseCuttable.prototype = w(f.world.BasePizzaComponent.prototype, {
        getName: function() {
            return "BaseCuttable"
        },
        get_mPizzaRef: function() {
            return this.mPizzaRef
        },
        get_mDef: function() {
            return this.mDef
        },
        get_mType: function() {
            return this.mType
        },
        onSlicedPlayed: function(a) {
            a.stop();
            this.owner._compMap.Sprite.dispose();
            this.owner.dispose()
        },
        onDispose: function() {
            f.world.BasePizzaComponent.prototype.onDispose.call(this);
            this.mSpecialEffect = this.mType = this.mDef = this.mWorldRef = this.mPizzaRef = null
        },
        onSlice: function() {
            null != this.mSpecialEffect && g.Core.instance._compMap.EffectsManager.startEffect(this.mSpecialEffect);
            var a = this.owner._compMap.PizzaBodyComponent;
            null != a && (a.dispose(), a = this.owner._compMap.Sprite, a.rotation.set(0), a.playAnimation("sliced").animFinishedPlaying.connect(q(this, this.onSlicedPlayed)).once(), this.mWorldRef.onSlice(this))
        },
        onAdded: function() {
            f.world.BasePizzaComponent.prototype.onAdded.call(this);
            this.mWorldRef = g.Core.instance._compMap.PizzaWorld
        },
        __class__: f.world.objects.BaseCuttable
    });
    f.world.objects.ECuttableType = function(a, b, c, e, d, g) {
        null == d && (d = 0);
        null == e && (e = 0);
        this.mType = a;
        this.mColliderRadius =
            b;
        this.mCustomClass = c;
        this.mSpecialEffect = g;
        this.mOffset = new Q(e, d);
        f.world.objects.ECuttableType.mTypes.push(this)
    };
    h["com.bkom.game.world.objects.ECuttableType"] = f.world.objects.ECuttableType;
    f.world.objects.ECuttableType.__name__ = "com,bkom,game,world,objects,ECuttableType".split(",");
    f.world.objects.ECuttableType.getCuttableTypeByName = function(a) {
        for (var b = 0, c = f.world.objects.ECuttableType.mTypes; b < c.length;) {
            var e = c[b];
            ++b;
            if (e.get_mType() == a) return e
        }
        return null
    };
    f.world.objects.ECuttableType.init =
        function() {
            f.world.objects.ECuttableType.CHEESE;
            f.world.objects.ECuttableType.SEAWEED;
            f.world.objects.ECuttableType.MUSHROOM;
            f.world.objects.ECuttableType.PEPPERONI;
            f.world.objects.ECuttableType.ANCHOVIES;
            f.world.objects.ECuttableType.JALAPENOS;
            f.world.objects.ECuttableType.JELLYBEANS
        };
    f.world.objects.ECuttableType.get_mTypes = function() {
        return f.world.objects.ECuttableType.mTypes
    };
    f.world.objects.ECuttableType.prototype = {
        get_mOffset: function() {
            return this.mOffset
        },
        get_mSpecialEffect: function() {
            return this.mSpecialEffect
        },
        get_mCustomClass: function() {
            return this.mCustomClass
        },
        get_mColliderRadius: function() {
            return this.mColliderRadius
        },
        get_mType: function() {
            return this.mType
        },
        __class__: f.world.objects.ECuttableType
    };
    f.world.physics = {};
    f.world.physics.PizzaBodyComponent = function(a, b) {
        f.world.BasePizzaComponent.call(this);
        this.mBody = a;
        var c = 0.5 < Math.random() ? -1 : 1;
        this.mBody.setFixedRotation(!1);
        this.mBody.applyImpulse(b, this.mBody.getWorldCenter());
        this.mBody.setAngularVelocity(5 * Math.random() * c)
    };
    h["com.bkom.game.world.physics.PizzaBodyComponent"] =
        f.world.physics.PizzaBodyComponent;
    f.world.physics.PizzaBodyComponent.__name__ = "com,bkom,game,world,physics,PizzaBodyComponent".split(",");
    f.world.physics.PizzaBodyComponent.__super__ = f.world.BasePizzaComponent;
    f.world.physics.PizzaBodyComponent.prototype = w(f.world.BasePizzaComponent.prototype, {
        getName: function() {
            return "PizzaBodyComponent"
        },
        onUpdate: function(a) {
            f.world.BasePizzaComponent.prototype.onUpdate.call(this, a);
            a = this.mBody.getPosition();
            this.mVisual.x.set(40 * a.x);
            this.mVisual.y.set(40 * a.y);
            this.mVisual.rotation.set(this.mBody.getAngle() * (180 / Math.PI));
            var b = 0 < this.mBody.getLinearVelocity().x ? o.FullScreenUtil.toScaleX(905, 855) : o.FullScreenUtil.toScaleX(-50, 855),
                b = b / this.mWorldSprite.scaleX._value;
            (0 > b && 40 * a.x < b || 0 < b && 40 * a.x > b || 40 * a.y > o.FullScreenUtil.toScaleY(550, 500)) && this.owner.dispose()
        },
        onEntityFinishedCreating: function() {
            f.world.BasePizzaComponent.prototype.onEntityFinishedCreating.call(this);
            this.mVisual = this.owner._compMap.Sprite;
            this.mVisual.centerAnchor();
            this.mWorldSprite =
                g.Core.instance._compMap.LayerManager.world._compMap.Sprite
        },
        onDispose: function() {
            f.world.BasePizzaComponent.prototype.onDispose.call(this);
            g.world.components.physics.SpaceComponent.getInstance().destroyBody(this.mBody);
            this.mVisual = this.mBody = null
        },
        onAdded: function() {
            f.world.BasePizzaComponent.prototype.onAdded.call(this);
            this.mBody.setUserData(this.owner)
        },
        __class__: f.world.physics.PizzaBodyComponent
    });
    f.world.physics.PizzaPhysicsListener = function() {
        fa.call(this)
    };
    h["com.bkom.game.world.physics.PizzaPhysicsListener"] =
        f.world.physics.PizzaPhysicsListener;
    f.world.physics.PizzaPhysicsListener.__name__ = "com,bkom,game,world,physics,PizzaPhysicsListener".split(",");
    f.world.physics.PizzaPhysicsListener.__super__ = fa;
    f.world.physics.PizzaPhysicsListener.prototype = w(fa.prototype, {
        preSolve: function(a, b) {
            fa.prototype.preSolve.call(this, a, b);
            a.setEnabled(!1)
        },
        postSolve: function(a, b) {
            fa.prototype.postSolve.call(this, a, b)
        },
        endContact: function(a) {
            fa.prototype.endContact.call(this, a)
        },
        beginContact: function(a) {
            fa.prototype.beginContact.call(this,
                a)
        },
        __class__: f.world.physics.PizzaPhysicsListener
    });
    f.world.slicer = {};
    f.world.slicer.AbstractSlicer = function() {};
    h["com.bkom.game.world.slicer.AbstractSlicer"] = f.world.slicer.AbstractSlicer;
    f.world.slicer.AbstractSlicer.__name__ = "com,bkom,game,world,slicer,AbstractSlicer".split(",");
    f.world.slicer.AbstractSlicer.prototype = {
        set_mSwipeLibrary: function(a) {
            this.mSwipeLibrary = a;
            null != this.mEffectsPool && (this.mEffectsPool.shutdown(), this.mEffectsPool = null);
            this.mEffectsPool = new o.ObjectPool(f.world.slicer.visual.SlicerFX);
            for (var b = 0; 500 > b;) b++, a = new f.world.slicer.visual.SlicerFX, a.init(this.mEffectsPool, this.mSwipeLibrary), this.mEffectsPool.addObject(a);
            return this.mSwipeLibrary
        },
        doHit: function(a) {
            a = a.getUserData()._compMap.BaseCuttable;
            if (null != a) a.onSlice()
        },
        onSwipeFinished: function(a) {
            this.mEffectsPool.addObject(a);
            G.remove(this.mCurrentActiveSlices, a)
        },
        doVisualSwipe: function(a, b, c) {
            var e = this.mEffectsPool.getObject();
            e.show(a, b, c);
            e.onSwipeFinishedPlaying.connect(q(this, this.onSwipeFinished)).once();
            this.mCurrentActiveSlices.push(e)
        },
        onAnimFinished: function() {
            null != this.mCharacter && (this.mCharacter.unlock(), this.mCharacter.playAnimation("Idle"))
        },
        doCharacterAnim: function(a, b) {
            var c = b.x - a.x,
                e = b.y - a.y;
            Math.abs(c) > Math.abs(e) ? (c = this.mCharacter.playAnimation(0 < c ? "HorizSlice1" : "HorizSlice2", !1, !0), e = ["horiz_1", "horiz_2", "horiz_3", "horiz_4"]) : (c = this.mCharacter.playAnimation(0 < e ? "VertSlice1" : "VertSlice2", !1, !0), e = ["vertical_1", "vertical_2", "vertical_3"]);
            null != c && (this.mCharacter.lock(), c.animFinishedPlaying.connect(q(this, this.onAnimFinished)).once(),
                this.playRandomSound(e))
        },
        playRandomSound: function(a) {
            var b = Math.random() * a.length | 0;
            g.Core.instance._compMap.SoundManager.playSfx(a[b])
        },
        update: function(a) {
            for (var b = this.mSlices.length, c; 0 < b--;) c = this.mSlices[b], c.advance(a) && G.remove(this.mSlices, c)
        },
        doSliceRaycast: function(a, b) {
            var c = u.parseInt(g.Core.instance._compMap.ConfigManager.getValue("game", "minimumCutDistance")),
                e = a.distanceTo(b.x, b.y),
                c = e > c;
            if (0 != e) {
                c && this.mSlices.push(new f.world.slicer.Slice(a, b));
                for (var d = [], l = 0, h = this.mSlices; l <
                    h.length;) {
                    var i = h[l];
                    ++l;
                    i.getHitsBySlice(d)
                }
                for (l = 0; l < d.length;) h = d[l], ++l, this.doHit(h);
                null != this.mSwipeLibrary && c && this.doVisualSwipe(a, b, e);
                null != this.mCharacter && c && this.doCharacterAnim(a, b)
            }
        },
        removeListeners: function() {
            null != this.mStartTouchListener && this.mStartTouchListener.dispose();
            null != this.mDragTouchListener && this.mDragTouchListener.dispose();
            null != this.mEndTouchListener && this.mEndTouchListener.dispose();
            this.mEndTouchListener = this.mDragTouchListener = this.mStartTouchListener = null
        },
        dispose: function() {
            this.removeListeners();
            for (var a = 0, b = this.mSlices; a < b.length;) {
                var c = b[a];
                ++a;
                c.dispose()
            }
            this.mSlices = null;
            a = 0;
            for (b = this.mEffectsPool.get_objects(); a < b.length;) c = b[a], ++a, c.dispose();
            this.mEffectsPool.shutdown();
            this.mCharacter = this.mSwipeLibrary = this.mEffectsPool = null;
            a = 0;
            for (b = this.mCurrentActiveSlices; a < b.length;) c = b[a], ++a, c.dispose()
        },
        resume: function() {
            this.mCharacter.get_currentAnimation().play();
            for (var a = 0, b = this.mCurrentActiveSlices; a < b.length;) {
                var c = b[a];
                ++a;
                c.resume()
            }
        },
        pause: function() {
            this.removeListeners();
            for (var a = 0, b = this.mCurrentActiveSlices; a < b.length;) {
                var c = b[a];
                ++a;
                c.pause()
            }
            this.mCharacter.get_currentAnimation().stop()
        },
        start: function() {
            this.mSlices = [];
            this.mCurrentActiveSlices = [];
            this.mCharacter = g.Core.instance._compMap.PizzaWorld.get_mVisual().get_mick()
        },
        __class__: f.world.slicer.AbstractSlicer
    };
    f.world.slicer.MobileSlicer = function() {
        f.world.slicer.AbstractSlicer.call(this)
    };
    h["com.bkom.game.world.slicer.MobileSlicer"] = f.world.slicer.MobileSlicer;
    f.world.slicer.MobileSlicer.__name__ = "com,bkom,game,world,slicer,MobileSlicer".split(",");
    f.world.slicer.MobileSlicer.__super__ = f.world.slicer.AbstractSlicer;
    f.world.slicer.MobileSlicer.prototype = w(f.world.slicer.AbstractSlicer.prototype, {
        onTouchEnded: function() {
            this.mOldPos = null
        },
        onTouchDragged: function(a) {
            f.world.slicer.MobileSlicer.tempPoint.setXY(a.viewX, a.viewY);
            this.doSliceRaycast(this.mOldPos, f.world.slicer.MobileSlicer.tempPoint);
            this.mOldPos.setXY(a.viewX, a.viewY)
        },
        onTouchDown: function(a) {
            this.mOldPos = new Q(a.viewX, a.viewY)
        },
        dispose: function() {
            f.world.slicer.AbstractSlicer.prototype.dispose.call(this);
            this.mOldPos = null
        },
        resume: function() {
            f.world.slicer.AbstractSlicer.prototype.resume.call(this);
            this.mStartTouchListener = A._platform.getPointer().down.connect(q(this, this.onTouchDown));
            this.mDragTouchListener = A._platform.getPointer().move.connect(q(this, this.onTouchDragged));
            this.mEndTouchListener = A._platform.getPointer().up.connect(q(this, this.onTouchEnded))
        },
        start: function() {
            f.world.slicer.AbstractSlicer.prototype.start.call(this);
            this.mStartTouchListener = A._platform.getPointer().down.connect(q(this,
                this.onTouchDown));
            this.mDragTouchListener = A._platform.getPointer().move.connect(q(this, this.onTouchDragged));
            this.mEndTouchListener = A._platform.getPointer().up.connect(q(this, this.onTouchEnded))
        },
        __class__: f.world.slicer.MobileSlicer
    });
    f.world.slicer.PCSlicer = function() {
        f.world.slicer.AbstractSlicer.call(this);
        this.mOldPoint = new Q
    };
    h["com.bkom.game.world.slicer.PCSlicer"] = f.world.slicer.PCSlicer;
    f.world.slicer.PCSlicer.__name__ = "com,bkom,game,world,slicer,PCSlicer".split(",");
    f.world.slicer.PCSlicer.__super__ =
        f.world.slicer.AbstractSlicer;
    f.world.slicer.PCSlicer.prototype = w(f.world.slicer.AbstractSlicer.prototype, {
        update: function(a) {
            A._platform.getMouse().isDown(R.Left) && (f.world.slicer.PCSlicer.tempPoint.setXY(A._platform.getMouse().getX(), A._platform.getMouse().getY()), this.doSliceRaycast(this.mOldPoint, f.world.slicer.PCSlicer.tempPoint), this.mOldPoint.setXY(A._platform.getMouse().getX(), A._platform.getMouse().getY()));
            f.world.slicer.AbstractSlicer.prototype.update.call(this, a)
        },
        onTouchDown: function(a) {
            this.mOldPoint.setXY(a.viewX,
                a.viewY)
        },
        resume: function() {
            f.world.slicer.AbstractSlicer.prototype.resume.call(this)
        },
        start: function() {
            f.world.slicer.AbstractSlicer.prototype.start.call(this);
            this.mStartTouchListener = A._platform.getPointer().down.connect(q(this, this.onTouchDown))
        },
        __class__: f.world.slicer.PCSlicer
    });
    f.world.slicer.Slice = function(a, b) {
        this._nbrTimesUpdated = 0;
        var c = g.Core.instance._compMap.LayerManager.world._compMap.Sprite;
        this._oldPos = new i.B2Vec2(a.x / c.scaleX._value, a.y / c.scaleY._value);
        this._direction = new i.B2Vec2((b.x -
            a.x) / c.scaleX._value, (b.y - a.y) / c.scaleY._value);
        this._length = this._direction.normalize();
        this._spaceRef = g.world.components.physics.SpaceComponent.getInstance()
    };
    h["com.bkom.game.world.slicer.Slice"] = f.world.slicer.Slice;
    f.world.slicer.Slice.__name__ = "com,bkom,game,world,slicer,Slice".split(",");
    f.world.slicer.Slice.prototype = {
        advance: function(a) {
            this._nbrTimesUpdated += a;
            return 0.5 < this._nbrTimesUpdated
        },
        getHitsBySlice: function(a) {
            for (var b = this._spaceRef.raycastMultiple(this._oldPos, this._direction,
                    this._length), c = 0; c < b.length;) {
                var e = b[c];
                ++c;
                ha.has(a, e) || a.push(e)
            }
        },
        dispose: function() {
            this._oldPos = this._direction = this._spaceRef = null
        },
        __class__: f.world.slicer.Slice
    };
    f.world.slicer.visual = {};
    f.world.slicer.visual.SlicerFX = function() {
        r.call(this);
        this._gameManagerRef = g.Core.instance._compMap.GameManager;
        this._layerManagerRef = g.Core.instance._compMap.LayerManager;
        this._worldSpriteRef = this._layerManagerRef.world._compMap.Sprite;
        this.onSwipeFinishedPlaying = new C
    };
    h["com.bkom.game.world.slicer.visual.SlicerFX"] =
        f.world.slicer.visual.SlicerFX;
    f.world.slicer.visual.SlicerFX.__name__ = "com,bkom,game,world,slicer,visual,SlicerFX".split(",");
    f.world.slicer.visual.SlicerFX.__super__ = r;
    f.world.slicer.visual.SlicerFX.prototype = w(r.prototype, {
        onSwipeFinished: function(a) {
            a.stop();
            null != this.parent && this.parent.removeChild(this);
            this.onSwipeFinishedPlaying.emit(this)
        },
        pause: function() {
            this._visual.stop()
        },
        resume: function() {
            this._visual.play()
        },
        show: function(a, b, c) {
            var a = 0 < b.x - a.x ? o.MathUtil.angleBetweenVectors(0, b.x -
                    a.x, -1, b.y - a.y) * (180 / Math.PI) : o.MathUtil.angleBetweenVectors(0, b.x - a.x, 1, b.y - a.y) * (180 / Math.PI),
                e = this._worldSpriteRef.scaleX._value,
                d = this._worldSpriteRef.scaleY._value;
            this._visual.play();
            this._visual.x.set(b.x / e);
            this._visual.y.set(b.y / d);
            this._visual.rotation.set(a);
            this._visual.scaleY.set(Math.max(Math.min(c / 5, 12), 1) / d);
            this._visual.scaleX.set(Math.min(c / 5, 1) / e);
            this._swipeConnection = this._visual.animFinishedPlaying.connect(q(this, this.onSwipeFinished)).once();
            this._layerManagerRef.world.addChild(this)
        },
        init: function(a, b) {
            this._visual = b.createSprite("slashAnim", !0);
            this._poolRef = a;
            this.add(this._visual)
        },
        dispose: function() {
            r.prototype.dispose.call(this);
            this._gameManagerRef = this._layerManagerRef = this._worldSpriteRef = this._poolRef = this._visual = null;
            null != this._swipeConnection && this._swipeConnection.dispose();
            this._swipeConnection = null
        },
        __class__: f.world.slicer.visual.SlicerFX
    });
    f.wrongingredient = {};
    f.wrongingredient.WrongIngredientMenu = function() {
        g.menu.AbstractMenu.call(this)
    };
    h["com.bkom.game.wrongingredient.WrongIngredientMenu"] =
        f.wrongingredient.WrongIngredientMenu;
    f.wrongingredient.WrongIngredientMenu.__name__ = ["com", "bkom", "game", "wrongingredient", "WrongIngredientMenu"];
    f.wrongingredient.WrongIngredientMenu.__super__ = g.menu.AbstractMenu;
    f.wrongingredient.WrongIngredientMenu.prototype = w(g.menu.AbstractMenu.prototype, {
        getName: function() {
            return "AbstractMenu"
        },
        onAlphaOut: function() {
            g.Core.instance._compMap.MenuManager.hideMenu("WrongIngredient")
        },
        onAlphaIn: function() {
            var a = this.owner._compMap.Sprite;
            a.alpha.animateTo(0, 0.5);
            a.alpha.behaviorComplete.connect(q(this, this.onAlphaOut)).once()
        },
        show: function() {
            var a = this.owner._compMap.Sprite;
            a.alpha.set(0.25);
            g.Core.instance._compMap.SoundManager.playSfx("wrongcut");
            a.alpha.animateTo(1, 0.2);
            a.alpha.behaviorComplete.connect(q(this, this.onAlphaIn)).once();
            g.menu.AbstractMenu.prototype.show.call(this)
        },
        __class__: f.wrongingredient.WrongIngredientMenu
    });
    o = {
        BrowserUtil: function() {}
    };
    h["com.bkom.util.BrowserUtil"] = o.BrowserUtil;
    o.BrowserUtil.__name__ = ["com", "bkom", "util", "BrowserUtil"];
    o.BrowserUtil.isiPhone = function() {
        return o.BrowserUtil.isOfType("iphone")
    };
    o.BrowserUtil.isiPhone4 = function() {
        var a = 1,
            a = eval("window.devicePixelRatio");
        return o.BrowserUtil.isiPhone() && 1 < a
    };
    o.BrowserUtil.getiPadVersion = function() {
        var a = 0;
        return a = eval("ipadVersion")
    };
    o.BrowserUtil.isiPad = function() {
        return o.BrowserUtil.isOfType("ipad")
    };
    o.BrowserUtil.isiPod = function() {
        return o.BrowserUtil.isOfType("ipod")
    };
    o.BrowserUtil.isAndroid = function() {
        return o.BrowserUtil.isOfType("android")
    };
    o.BrowserUtil.isOfType =
        function(a) {
            var b = !1;
            return b = eval("navigator.userAgent.toLowerCase().indexOf('" + a.toLowerCase() + "') != -1;")
        };
    o.BrowserUtil.isOpera = function() {
        return o.BrowserUtil.isOfType("opera")
    };
    o.BrowserUtil.isFirefox = function() {
        return o.BrowserUtil.isOfType("firefox")
    };
    o.BrowserUtil.isMobile = function() {
        return o.BrowserUtil.isiPhone() || o.BrowserUtil.isiPad() || o.BrowserUtil.isAndroid() || o.BrowserUtil.isiPod()
    };
    o.BrowserUtil.getWindowSize = function() {
        var a = null,
            a = new Q(B.window.innerWidth, B.window.innerHeight),
            b = B.window.screen.height;
        o.BrowserUtil.isiPhone4() && 568 > b && (a.x *= 2, a.y *= 2);
        return a
    };
    o.BrowserUtil.callJSFunction = function(a) {
        var b = null;
        return b = eval(a)
    };
    o.BrowserUtil.prototype = {
        __class__: o.BrowserUtil
    };
    o.FullScreenUtil = function() {};
    h["com.bkom.util.FullScreenUtil"] = o.FullScreenUtil;
    o.FullScreenUtil.__name__ = ["com", "bkom", "util", "FullScreenUtil"];
    o.FullScreenUtil.resizeSprite = function(a, b, c) {
        var e;
        e = o.BrowserUtil.isMobile() ? o.BrowserUtil.getWindowSize() : new Q(A._platform.getStage().getWidth(), A._platform.getStage().getHeight());
        c = e.y / c;
        a.scaleX.set(e.x / b);
        a.scaleY.set(c)
    };
    o.FullScreenUtil.toScaleX = function(a, b) {
        var c = A._platform.getStage().getWidth() / b;
        return a * c
    };
    o.FullScreenUtil.toScaleY = function(a, b) {
        var c = A._platform.getStage().getHeight() / b;
        return a * c
    };
    o.MathUtil = function() {};
    h["com.bkom.util.MathUtil"] = o.MathUtil;
    o.MathUtil.__name__ = ["com", "bkom", "util", "MathUtil"];
    o.MathUtil.angleBetweenVectors = function(a, b, c, e) {
        return Math.acos((a * b + c * e) / (Math.sqrt(a * a + c * c) * Math.sqrt(b * b + e * e)))
    };
    o.ObjectPool = function(a) {
        if (null ==
            a) throw "You must supply a class argument";
        this._clazz = a;
        this._objects = []
    };
    h["com.bkom.util.ObjectPool"] = o.ObjectPool;
    o.ObjectPool.__name__ = ["com", "bkom", "util", "ObjectPool"];
    o.ObjectPool.prototype = {
        get_objects: function() {
            return this._objects
        },
        shutdown: function() {
            this._objects = null
        },
        getObject: function() {
            var a = this._objects.pop();
            null == a && (a = J.createInstance(this._clazz, []));
            return a
        },
        addObject: function(a) {
            null != a && this._objects.push(a)
        },
        getSize: function() {
            return ha.count(this._objects)
        },
        __class__: o.ObjectPool
    };
    o.Temp = function() {};
    h["com.bkom.util.Temp"] = o.Temp;
    o.Temp.__name__ = ["com", "bkom", "util", "Temp"];
    o.Temp.init = function() {
        o.Temp.point1 = new Q;
        o.Temp.point2 = new Q;
        o.Temp.point3 = new Q;
        o.Temp.point4 = new Q;
        o.Temp.b2Vec1 = i.B2Vec2.make(0, 0);
        o.Temp.b2Vec2 = i.B2Vec2.make(0, 0);
        o.Temp.b2Vec3 = i.B2Vec2.make(0, 0);
        o.Temp.b2Vec4 = i.B2Vec2.make(0, 0);
        o.Temp.array1 = [];
        o.Temp.array2 = [];
        o.Temp.array3 = [];
        o.Temp.array4 = [];
        o.Temp.worldManifold1 = new Oa;
        o.Temp.worldManifold2 = new Oa
    };
    o.Tuple2 = function(a, b) {
        this.set_valueA(a);
        this.set_valueB(b)
    };
    h["com.bkom.util.Tuple2"] = o.Tuple2;
    o.Tuple2.__name__ = ["com", "bkom", "util", "Tuple2"];
    o.Tuple2.prototype = {
        set_valueB: function(a) {
            return this._valueB = a
        },
        get_valueB: function() {
            return this._valueB
        },
        set_valueA: function(a) {
            return this._valueA = a
        },
        get_valueA: function() {
            return this._valueA
        },
        __class__: o.Tuple2
    };
    ic = function() {};
    m = void 0;
    Qa = void 0;
    T = void 0;
    la = void 0;
    Ra = void 0;
    Sa = void 0;
    Ta = void 0;
    sa = void 0;
    Ua = void 0;
    ma = void 0;
    Ea = void 0;
    Z = void 0;
    Fa = void 0;
    Va = void 0;
    Wa = void 0;
    tb = void 0;
    ia = void 0;
    oc = void 0;
    ub = void 0;
    Xa = void 0;
    h["flambe.platform.Platform"] = ic;
    ic.__name__ = ["flambe", "platform", "Platform"];
    ic.prototype = {
        __class__: ic
    };
    m = {
        HtmlPlatform: function() {}
    };
    h["flambe.platform.html.HtmlPlatform"] = m.HtmlPlatform;
    m.HtmlPlatform.__name__ = ["flambe", "platform", "html", "HtmlPlatform"];
    m.HtmlPlatform.__interfaces__ = [ic];
    m.HtmlPlatform.prototype = {
        getY: function(a, b) {
            return this._stage.scaleFactor * (a.clientY - b.top)
        },
        getX: function(a, b) {
            return this._stage.scaleFactor * (a.clientX - b.left)
        },
        getWeb: function() {
            null == this._web &&
                (this._web = new m.HtmlWeb(this._container));
            return this._web
        },
        getKeyboard: function() {
            return this._keyboard
        },
        getTouch: function() {
            return this._touch
        },
        getMouse: function() {
            return this._mouse
        },
        getPointer: function() {
            return this._pointer
        },
        update: function(a, b) {
            null == b && (b = !1);
            var c = (a - this._lastUpdate) / 1E3;
            b && 0.03 > c || (this._lastUpdate = a, this._skipFrame ? this._skipFrame = !1 : (this.mainLoop.update(c), this.mainLoop.render(this.renderer)))
        },
        createLogHandler: function() {
            return null
        },
        callNative: function(a, b) {
            null ==
                b && (b = []);
            var c = pa.field(B.window, a);
            try {
                return c.apply(null, b)
            } catch (e) {
                return null
            }
        },
        getLocale: function() {
            return B.window.navigator.language
        },
        getStorage: function() {
            if (null == this._storage) {
                var a = null;
                try {
                    a = B.window.localStorage
                } catch (b) {}
                this._storage = null != a ? new m.HtmlStorage(a) : new Qa
            }
            return this._storage
        },
        getStage: function() {
            return this._stage
        },
        loadAssetPack: function(a) {
            return (new m.HtmlAssetPackLoader(a)).promise
        },
        init: function() {
            var a = this;
            m.HtmlPlatform.log = xa.log;
            var b = null;
            try {
                b = B.window.flambe.canvas
            } catch (c) {}
            b.setAttribute("tabindex",
                "0");
            b.style.outlineStyle = "none";
            b.setAttribute("moz-opaque", "true");
            this._stage = new m.HtmlStage(b);
            this._pointer = new T;
            this._mouse = new m.HtmlMouse(this._pointer, b);
            this._keyboard = new la;
            this.renderer = new m.CanvasRenderer(b);
            this.mainLoop = new Ra;
            this._container = b.parentNode;
            this._container.style.overflow = "hidden";
            this._container.style.position = "relative";
            var e = 0,
                d = function(c) {
                    if (!(1E3 > c.timeStamp - e)) {
                        var d = b.getBoundingClientRect(),
                            f = a.getX(c, d),
                            d = a.getY(c, d);
                        switch (c.type) {
                            case "mousedown":
                                c.target ==
                                    b && (c.preventDefault(), a._mouse.submitDown(f, d, c.button), c.target.focus());
                                break;
                            case "mousemove":
                                a._mouse.submitMove(f, d);
                                break;
                            case "mouseup":
                                a._mouse.submitUp(f, d, c.button);
                                break;
                            case "mousewheel":
                            case "DOMMouseScroll":
                                a._mouse.submitScroll(f, d, "mousewheel" == c.type ? c.wheelDelta / 40 : -c.detail) && c.preventDefault()
                        }
                    }
                };
            window.addEventListener("mousedown", d, !1);
            window.addEventListener("mousemove", d, !1);
            window.addEventListener("mouseup", d, !1);
            b.addEventListener("mousewheel", d, !1);
            b.addEventListener("DOMMouseScroll",
                d, !1);
            if ("ontouchstart" in window) {
                var f = new Sa(this._pointer);
                this._touch = f;
                d = function(b) {
                    var c = b.changedTouches,
                        d = b.target.getBoundingClientRect();
                    e = b.timeStamp;
                    switch (b.type) {
                        case "touchstart":
                            b.preventDefault();
                            m.HtmlUtil.SHOULD_HIDE_MOBILE_BROWSER && m.HtmlUtil.hideMobileBrowser();
                            for (b = 0; b < c.length;) {
                                var g = c[b];
                                ++b;
                                var j = a.getX(g, d),
                                    h = a.getY(g, d);
                                f.submitDown(g.identifier | 0, j, h)
                            }
                            break;
                        case "touchmove":
                            b.preventDefault();
                            for (b = 0; b < c.length;) g = c[b], ++b, j = a.getX(g, d), h = a.getY(g, d), f.submitMove(g.identifier |
                                0, j, h);
                            break;
                        case "touchend":
                        case "touchcancel":
                            for (b = 0; b < c.length;) g = c[b], ++b, j = a.getX(g, d), h = a.getY(g, d), f.submitUp(g.identifier | 0, j, h)
                    }
                };
                b.addEventListener("touchstart", d, !1);
                b.addEventListener("touchmove", d, !1);
                b.addEventListener("touchend", d, !1);
                b.addEventListener("touchcancel", d, !1)
            } else this._touch = new Ta;
            d = function(b) {
                switch (b.type) {
                    case "keydown":
                        b.preventDefault();
                        a._keyboard.submitDown(b.keyCode);
                        break;
                    case "keyup":
                        a._keyboard.submitUp(b.keyCode)
                }
            };
            b.addEventListener("keydown", d, !1);
            b.addEventListener("keyup",
                d, !1);
            var g = B.window.onerror;
            B.window.onerror = function(a, b, c) {
                A.uncaughtError.emit(a);
                return null != g ? g(a, b, c) : !1
            };
            var h = m.HtmlUtil.loadExtension("hidden", B.document);
            null != h.value && (d = function() {
                A.hidden.set(pa.field(B.document, h.field))
            }, d(), B.document.addEventListener(h.prefix + "visibilitychange", d, !1), A.hidden.getChanged().connect(function(b) {
                b || (a._skipFrame = !0)
            }));
            this._lastUpdate = (new Date).getTime();
            this._skipFrame = !1;
            var i = m.HtmlUtil.loadExtension("requestAnimationFrame").value;
            if (null != i) {
                var k =
                    B.window.performance,
                    n = null != k && m.HtmlUtil.polyfill("now", k);
                n ? this._lastUpdate = k.now() : null;
                var o = null,
                    o = function(c) {
                        a.update(n ? k.now() : c, !0);
                        i(o, b)
                    };
                i(o, b)
            } else B.window.setInterval(function() {
                a.update((new Date).getTime())
            }, 1E3 / 30)
        },
        __class__: m.HtmlPlatform
    };
    aa = function(a, b) {
        this._value = a;
        null != b && (this._changed = new Ia(b))
    };
    h["flambe.util.Value"] = aa;
    aa.__name__ = ["flambe", "util", "Value"];
    aa.prototype = {
        getChanged: function() {
            null == this._changed && (this._changed = new Ia);
            return this._changed
        },
        set: function(a) {
            var b =
                this._value;
            a != b && (this._value = a, null != this._changed && this._changed.emit(a, b));
            return a
        },
        __class__: aa
    };
    Ia = function(a) {
        null != a && this.connect(a)
    };
    h["flambe.util.Signal2"] = Ia;
    Ia.__name__ = ["flambe", "util", "Signal2"];
    Ia.prototype = {
        createImpl: function() {
            return new ea
        },
        emit: function(a, b) {
            null != this._impl && this._impl.emit([a, b])
        },
        connect: function(a, b) {
            null == b && (b = !1);
            null == this._impl && (this._impl = this.createImpl());
            return this._impl.connect(a, b)
        },
        __class__: Ia
    };
    C = function(a) {
        null != a && this.connect(a)
    };
    h["flambe.util.Signal1"] =
        C;
    C.__name__ = ["flambe", "util", "Signal1"];
    C.prototype = {
        createImpl: function() {
            return new ea
        },
        hasListeners: function() {
            return null != this._impl && 0 < this._impl._connections.length
        },
        clone: function() {
            var a = new C;
            null != this._impl && (a._impl = this._impl.clone());
            return a
        },
        emit: function(a) {
            null != this._impl && this._impl.emit([a])
        },
        connect: function(a, b) {
            null == b && (b = !1);
            null == this._impl && (this._impl = this.createImpl());
            return this._impl.connect(a, b)
        },
        __class__: C
    };
    A = function() {};
    h["flambe.System"] = A;
    A.__name__ = ["flambe",
        "System"
    ];
    A.init = function() {
        A._calledInit || (A._platform.init(), A._calledInit = !0)
    };
    Mb = function(a) {
        this._handler = a
    };
    h["flambe.util.Logger"] = Mb;
    Mb.__name__ = ["flambe", "util", "Logger"];
    Mb.prototype = {
        __class__: Mb
    };
    xa = function() {};
    h["flambe.Log"] = xa;
    xa.__name__ = ["flambe", "Log"];
    fc = function() {};
    h["flambe.Visitor"] = fc;
    fc.__name__ = ["flambe", "Visitor"];
    fc.prototype = {
        __class__: fc
    };
    N = function(a, b) {
        aa.call(this, a, b);
        this.behaviorComplete = new X
    };
    K = void 0;
    $a = void 0;
    ab = void 0;
    Eb = void 0;
    h["flambe.animation.AnimatedFloat"] =
        N;
    N.__name__ = ["flambe", "animation", "AnimatedFloat"];
    N.__super__ = aa;
    N.prototype = w(aa.prototype, {
        setBehavior: function(a) {
            this._behavior = a;
            this.update(0);
            return a
        },
        animateTo: function(a, b, c) {
            this.setBehavior(new $a(this._value, a, b, c))
        },
        update: function(a) {
            null != this._behavior && (aa.prototype.set.call(this, this._behavior.update(a)), this._behavior.isComplete() && (this._behavior = null, this.behaviorComplete.emit()))
        },
        set: function(a) {
            this._behavior = null;
            return aa.prototype.set.call(this, a)
        },
        __class__: N
    });
    ab = function() {};
    h["flambe.animation.Behavior"] = ab;
    ab.__name__ = ["flambe", "animation", "Behavior"];
    ab.prototype = {
        __class__: ab
    };
    Eb = function() {};
    h["flambe.animation.Binding"] = Eb;
    Eb.__name__ = ["flambe", "animation", "Binding"];
    Eb.__interfaces__ = [ab];
    Eb.prototype = {
        isComplete: function() {
            return !1
        },
        update: function() {
            var a = this._target._value;
            return null != this._fn ? this._fn(a) : a
        },
        __class__: Eb
    };
    K = function() {};
    h["flambe.animation.Ease"] = K;
    K.__name__ = ["flambe", "animation", "Ease"];
    K.linear = function(a) {
        return a
    };
    K.bounceOut = function(a) {
        return a <
            1 / 2.75 ? 7.5625 * a * a : a < 2 / 2.75 ? 7.5625 * (a - 1.5 / 2.75) * (a - 1.5 / 2.75) + 0.75 : a < 2.5 / 2.75 ? 7.5625 * (a - 2.25 / 2.75) * (a - 2.25 / 2.75) + 0.9375 : 7.5625 * (a - 2.625 / 2.75) * (a - 2.625 / 2.75) + 0.984375
    };
    K.backIn = function(a) {
        return a * a * (2.70158 * a - 1.70158)
    };
    K.backOut = function(a) {
        return 1 - --a * a * (-2.70158 * a - 1.70158)
    };
    $a = function(a, b, c, e) {
        this._from = a;
        this._to = b;
        this._duration = c;
        this._elapsed = 0;
        this._easing = null != e ? e : K.linear
    };
    h["flambe.animation.Tween"] = $a;
    $a.__name__ = ["flambe", "animation", "Tween"];
    $a.__interfaces__ = [ab];
    $a.prototype = {
        isComplete: function() {
            return this._elapsed >=
                this._duration
        },
        update: function(a) {
            this._elapsed += a;
            return this._elapsed >= this._duration ? this._to : this._from + (this._to - this._from) * this._easing(this._elapsed / this._duration)
        },
        __class__: $a
    };
    P = void 0;
    U = void 0;
    Cb = void 0;
    Db = void 0;
    U = h["flambe.asset.AssetType"] = {
        __ename__: ["flambe", "asset", "AssetType"],
        __constructs__: ["Image", "Audio", "Data"]
    };
    U.Image = ["Image", 0];
    U.Image.toString = n;
    U.Image.__enum__ = U;
    U.Audio = ["Audio", 1];
    U.Audio.toString = n;
    U.Audio.__enum__ = U;
    U.Data = ["Data", 2];
    U.Data.toString = n;
    U.Data.__enum__ =
        U;
    Cb = function(a, b, c, e) {
        this.name = a;
        this.url = b;
        this.type = c;
        this.bytes = e
    };
    h["flambe.asset.AssetEntry"] = Cb;
    Cb.__name__ = ["flambe", "asset", "AssetEntry"];
    Cb.prototype = {
        getUrlExtension: function() {
            return Nb.getFileExtension(this.url.split("?")[0]).toLowerCase()
        },
        __class__: Cb
    };
    Db = function() {};
    h["flambe.asset.AssetPack"] = Db;
    Db.__name__ = ["flambe", "asset", "AssetPack"];
    Db.prototype = {
        __class__: Db
    };
    mc = {
        Meta: function() {}
    };
    h["haxe.rtti.Meta"] = mc.Meta;
    mc.Meta.__name__ = ["haxe", "rtti", "Meta"];
    mc.Meta.getType = function(a) {
        a =
            a.__meta__;
        return null == a || null == a.obj ? {} : a.obj
    };
    F = void 0;
    B = void 0;
    qc = void 0;
    B = function() {};
    h["js.Lib"] = B;
    B.__name__ = ["js", "Lib"];
    F = function() {};
    h["js.Boot"] = F;
    F.__name__ = ["js", "Boot"];
    F.__string_rec = function(a, b) {
        if (null == a) return "null";
        if (5 <= b.length) return "<...>";
        var c = typeof a;
        if ("function" == c && (a.__name__ || a.__ename__)) c = "object";
        switch (c) {
            case "object":
                if (a instanceof Array) {
                    if (a.__enum__) {
                        if (2 == a.length) return a[0];
                        for (var c = a[0] + "(", b = b + "\t", e = 2, d = a.length; e < d;) var f = e++,
                            c = 2 != f ? c + ("," + F.__string_rec(a[f],
                                b)) : c + F.__string_rec(a[f], b);
                        return c + ")"
                    }
                    e = a.length;
                    c = "[";
                    b += "\t";
                    for (d = 0; d < e;) f = d++, c += (0 < f ? "," : "") + F.__string_rec(a[f], b);
                    return c + "]"
                }
                try {
                    d = a.toString
                } catch (g) {
                    return "???"
                }
                if (null != d && d != Object.toString && (c = a.toString(), "[object Object]" != c)) return c;
                d = null;
                c = "{\n";
                b += "\t";
                e = null != a.hasOwnProperty;
                for (d in a)
                    if (!e || a.hasOwnProperty(d)) "prototype" == d || "__class__" == d || "__super__" == d || "__interfaces__" == d || "__properties__" == d || (2 != c.length && (c += ", \n"), c += b + d + " : " + F.__string_rec(a[d], b));
                b = b.substring(1);
                return c + ("\n" + b + "}");
            case "function":
                return "<function>";
            case "string":
                return a;
            default:
                return "" + a
        }
    };
    F.__interfLoop = function(a, b) {
        if (null == a) return !1;
        if (a == b) return !0;
        var c = a.__interfaces__;
        if (null != c)
            for (var e = 0, d = c.length; e < d;) {
                var f = e++,
                    f = c[f];
                if (f == b || F.__interfLoop(f, b)) return !0
            }
        return F.__interfLoop(a.__super__, b)
    };
    F.__instanceof = function(a, b) {
        try {
            if (a instanceof b) return b == Array ? null == a.__enum__ : !0;
            if (F.__interfLoop(a.__class__, b)) return !0
        } catch (c) {
            if (null == b) return !1
        }
        switch (b) {
            case wc:
                return Math.ceil(a %
                    2147483648) === a;
            case tc:
                return "number" == typeof a;
            case uc:
                return !0 === a || !1 === a;
            case String:
                return "string" == typeof a;
            case xc:
                return !0;
            default:
                if (null == a) return !1;
                if (b == yc && null != a.__name__) return !0;
                null;
                if (b == zc && null != a.__ename__) return !0;
                null;
                return a.__enum__ == b
        }
    };
    F.__cast = function(a, b) {
        if (F.__instanceof(a, b)) return a;
        throw "Cannot cast " + u.string(a) + " to " + u.string(b);
    };
    Nb = function() {};
    h["flambe.util.Strings"] = Nb;
    Nb.__name__ = ["flambe", "util", "Strings"];
    Nb.getFileExtension = function(a) {
        var b = a.lastIndexOf(".") +
            1;
        return 1 < b && b < a.length ? G.substr(a, b, null) : null
    };
    P = function() {
        this._entries = []
    };
    h["flambe.asset.Manifest"] = P;
    P.__name__ = ["flambe", "asset", "Manifest"];
    P.build = function(a, b) {
        null == b && (b = !0);
        var c = P._buildManifest.get(a);
        if (null == c) {
            if (b) throw "Missing asset pack: " + a;
            return null
        }
        return c.clone()
    };
    P.inferType = function(a) {
        switch (Nb.getFileExtension(a.split("?")[0]).toLowerCase()) {
            case "png":
            case "jpg":
            case "gif":
                a = U.Image;
                break;
            case "ogg":
            case "m4a":
            case "mp3":
            case "wav":
                a = U.Audio;
                break;
            default:
                a = U.Data
        }
        return a
    };
    P.createBuildManifests = function() {
        var a = new H;
        a.set("WrongIngredient", [{
            name: "images/wrong_sign.png",
            md5: "ab45fbda12f74bc686b3404b81556388",
            bytes: 9262
        }, {
            name: "images/wrong_flash.png",
            md5: "06924f52e3dd2fcf1a1d2e282e21ec5e",
            bytes: 42185
        }, {
            name: "definition.json",
            md5: "f229f99e197b1a2f8700c172c05c190d",
            bytes: 300
        }]);
        a.set("WelcomeScreen", [{
            name: "images/Welcome.jpg",
            md5: "0366cf6cc798d633fdd7695ddf21936d",
            bytes: 133716
        }, {
            name: "images/TapToPlay.png",
            md5: "a7d3ce767f05c8126af70e4e95a5549e",
            bytes: 25244
        }, {
            name: "images/ClickToPlay.png",
            md5: "a05c7d6a9210389536e448e3302848ed",
            bytes: 26999
        }, {
            name: "definition.json",
            md5: "a43602a079d7f991f30db67bb04d47a0",
            bytes: 417
        }]);
        a.set("SoundsMobile", [{
            name: "Loop.mp3",
            md5: "13bd48aa82b62433aa26eb8d98a23f0a",
            bytes: 615234
        }]);
        a.set("SoundsAll_ogg", [{
            name: "wrongcut.ogg",
            md5: "de59b982fe3c8d2b40d33cddb2fac999",
            bytes: 14219
        }, {
            name: "vertical_3.ogg",
            md5: "77e4cdfa20f4ec47ae6d14069b03742b",
            bytes: 5322
        }, {
            name: "vertical_2.ogg",
            md5: "abb586cd02d36873c04b73f480b2eaf1",
            bytes: 6758
        }, {
            name: "vertical_1.ogg",
            md5: "271d2d05bca7a6b689e62dccfc10ea9f",
            bytes: 6928
        }, {
            name: "startBtn.ogg",
            md5: "ce39deb2ef96378acc0a17f994d612f8",
            bytes: 14208
        }, {
            name: "seaweed.ogg",
            md5: "8d663dbd3900fdb1e6e9094709a18e15",
            bytes: 13638
        }, {
            name: "roll.ogg",
            md5: "af9100942f033f0852de49d7282c9a13",
            bytes: 13099
        }, {
            name: "resultPaper.ogg",
            md5: "7e1cefda938dfd9c27c328a15db21135",
            bytes: 7627
        }, {
            name: "pizzaReady.ogg",
            md5: "5df01ab8e67e8f3c9a0c7babe84d13ab",
            bytes: 30221
        }, {
            name: "pizzaFell.ogg",
            md5: "1df61ea0013e6c66de81c24be407507a",
            bytes: 9405
        }, {
            name: "pepperoni.ogg",
            md5: "a4403eb051b2a3fcb8595ad21ca8a0be",
            bytes: 12007
        }, {
            name: "mushrooms.ogg",
            md5: "13547bf264eaae2e8f0d53bddf3a6695",
            bytes: 8805
        }, {
            name: "Loop.ogg",
            md5: "87ab88bd67bc2f146313e3b6658862c4",
            bytes: 690844
        }, {
            name: "jellybeans.ogg",
            md5: "b6e1478ba2829830d8e9582ea63ba19e",
            bytes: 22023
        }, {
            name: "jalapenos.ogg",
            md5: "04771fb378721290a766edd4c2de297c",
            bytes: 8891
        }, {
            name: "horiz_4.ogg",
            md5: "f6c5d10415be6eca40951e61f4451e84",
            bytes: 9299
        }, {
            name: "horiz_3.ogg",
            md5: "64f1f4cf11b2f6a87f13ea5ae63501da",
            bytes: 7943
        }, {
            name: "horiz_2.ogg",
            md5: "c38532c79a231242586fa3d82a683a01",
            bytes: 8231
        }, {
            name: "horiz_1.ogg",
            md5: "392210553a5c0637bfc07824878a379c",
            bytes: 8250
        }, {
            name: "cooked.ogg",
            md5: "c044ef67393f2660db4b552602152249",
            bytes: 45289
        }, {
            name: "cheese.ogg",
            md5: "8e799383bf067b2ed8786ca4b4cc9484",
            bytes: 12378
        }, {
            name: "burnt.ogg",
            md5: "1f8f80cddabe1a90ec6c4f4632c8e307",
            bytes: 47746
        }, {
            name: "anchovies.ogg",
            md5: "29862a7860be9220298b997a1b34d9f6",
            bytes: 14123
        }]);
        a.set("SoundsAll_mp3", [{
            name: "wrongcut.mp3",
            md5: "54a3fb7c5b66596de62e8650a53381c9",
            bytes: 8776
        }, {
            name: "vertical_3.mp3",
            md5: "df5d7174321064682e4e45829cc837e3",
            bytes: 3072
        }, {
            name: "vertical_2.mp3",
            md5: "eedf056b75d85bf58e6f19567f80823d",
            bytes: 5376
        }, {
            name: "vertical_1.mp3",
            md5: "01606f813d1792a0eab01e67624f8f7a",
            bytes: 5376
        }, {
            name: "startBtn.mp3",
            md5: "d4ed2f56f966977b06c56f23889fa8b4",
            bytes: 10368
        }, {
            name: "seaweed.mp3",
            md5: "ab41e14f6484e1acef5be3bdfbdc79b7",
            bytes: 6912
        }, {
            name: "roll.mp3",
            md5: "80be267298894d4f52d2876956ed7eb8",
            bytes: 12119
        }, {
            name: "resultPaper.mp3",
            md5: "ca41221ecc26f336940a91e3467e0f3d",
            bytes: 5850
        }, {
            name: "pizzaReady.mp3",
            md5: "e4b2b5a4aa1e08415823abe6b6b93f0b",
            bytes: 28002
        }, {
            name: "pizzaFell.mp3",
            md5: "c4bfe47f754b48266722ae0d21db8e55",
            bytes: 9216
        }, {
            name: "pepperoni.mp3",
            md5: "dd08d944c181d45f873c37e5a5a61461",
            bytes: 7680
        }, {
            name: "mushrooms.mp3",
            md5: "beced3b2765a1ee4010517dcf814406f",
            bytes: 4608
        }, {
            name: "Loop.mp3",
            md5: "13bd48aa82b62433aa26eb8d98a23f0a",
            bytes: 615234
        }, {
            name: "jellybeans.mp3",
            md5: "6e11b92257df422a90609009e24fba26",
            bytes: 11904
        }, {
            name: "jalapenos.mp3",
            md5: "9d4d2be5f6d28bd57a646c066845a842",
            bytes: 3840
        }, {
            name: "horiz_4.mp3",
            md5: "5467c358a15cf05819ec8b0fc15145e5",
            bytes: 5376
        }, {
            name: "horiz_3.mp3",
            md5: "c5e0ff3ced736ad04d30a6ed2b62f3ba",
            bytes: 3840
        }, {
            name: "horiz_2.mp3",
            md5: "51373b4ea84e465e6cd2ac1935ba1894",
            bytes: 3840
        }, {
            name: "horiz_1.mp3",
            md5: "2e5d68ea99872b0bb1e63d296fddae6e",
            bytes: 4224
        }, {
            name: "cooked.mp3",
            md5: "545142178c92d921349f7b81be9784c4",
            bytes: 38033
        }, {
            name: "cheese.mp3",
            md5: "2d240dbd91c7e5d6296de463512befe2",
            bytes: 6912
        }, {
            name: "burnt.mp3",
            md5: "185f4e27547ecc754e091bb2c440b6a1",
            bytes: 38033
        }, {
            name: "anchovies.mp3",
            md5: "5977839eaca524217f39fa37cfb8f867",
            bytes: 8448
        }]);
        a.set("ResultScreen", [{
                name: "images/win.png",
                md5: "5972e34987408151bc14392ddff73d74",
                bytes: 37531
            }, {
                name: "images/resultPaper.png",
                md5: "84178126389f6007abe824a748761c69",
                bytes: 25695
            }, {
                name: "images/resultBG.jpg",
                md5: "35965cdc00a71868828bae264c74b672",
                bytes: 12094
            }, {
                name: "images/failPizza.png",
                md5: "7a1f2fb89efba3b6fd49b71b36e7728c",
                bytes: 20539
            }, {
                name: "images/failBase.png",
                md5: "1ac8b67b7c12b95b68f9a1772a0db5f2",
                bytes: 64269
            }, {
                name: "images/Comptoir.png",
                md5: "753e1b634680be3c6797f08ba6bd2592",
                bytes: 13428
            },
            {
                name: "images/BtnQuit.png",
                md5: "e5d25ccde80c477881695c438c89d3d2",
                bytes: 1099
            }, {
                name: "images/BtnContinue.png",
                md5: "e626904e89e46e8df31b472b1253a716",
                bytes: 1585
            }, {
                name: "definition.json",
                md5: "c5db6890408e984f961f52b7d9f1c980",
                bytes: 1333
            }
        ]);
        a.set("PauseMenu", [{
                name: "images/VolumeOnBtn.png",
                md5: "86f71670199c7c6a45520039e0917b64",
                bytes: 3907
            }, {
                name: "images/VolumeOffBtn.png",
                md5: "801c808b998d6709907f55ddaf070842",
                bytes: 2860
            }, {
                name: "images/ResumeBtn.png",
                md5: "7ea4fff3e8243ceb33702f6128952d7f",
                bytes: 2945
            },
            {
                name: "images/QuitBtn.png",
                md5: "729ffdee67fa9cc4df19663949fdfbf5",
                bytes: 2590
            }, {
                name: "images/palette.png",
                md5: "10474b5ffdbb6bc17d599bbf1734b3a3",
                bytes: 2287
            }, {
                name: "images/HowToPlayBtn.png",
                md5: "00a02a1f8a5f681154fd00b8a7aa87f1",
                bytes: 3189
            }, {
                name: "definition.json",
                md5: "b2cc80703c246311c7e2eda966f04294",
                bytes: 848
            }
        ]);
        a.set("Loading", [{
            name: "images/text.png",
            md5: "dcd29306268d7252c3a2e31f982498f4",
            bytes: 14857
        }, {
            name: "images/glow.png",
            md5: "ebd284e2c294926b74973563b13ee480",
            bytes: 29490
        }, {
            name: "images/background.jpg",
            md5: "b4b40c2186708a73bc3f958f54f55602",
            bytes: 30692
        }, {
            name: "definition.json",
            md5: "1cd9ba68a989fe7318192cc8ec4c48a6",
            bytes: 400
        }, {
            name: "anims/library.json",
            md5: "71d2b7e6fa7ea81cbbfc5dfaa2e46f86",
            bytes: 511
        }]);
        a.set("Level", [{
            name: "pizza/seaweed/pizzaSeaweed.png",
            md5: "4a84841840cf6367e40cce5dc4dbaa3c",
            bytes: 168159
        }, {
            name: "pizza/seaweed/library.json",
            md5: "a18315def88a4620ce3dff2cadc3d09b",
            bytes: 9984
        }, {
            name: "pizza/pizzaBaseTomato.png",
            md5: "8514869befda9934a14cfda1789e72ee",
            bytes: 31189
        }, {
            name: "pizza/pizzaBaseMayo.png",
            md5: "3d6ac6b503eacf0761f61cd487f7cad4",
            bytes: 39043
        }, {
            name: "pizza/pepperoni/pizzaPepperoni.png",
            md5: "0c79d77857e9c2522cb3fe1feb5e0aca",
            bytes: 47285
        }, {
            name: "pizza/pepperoni/library.json",
            md5: "99d74741467abccd98409d6f93d913dd",
            bytes: 8329
        }, {
            name: "pizza/mushrooms/pizzaMushroom.png",
            md5: "99df9f98ec2c5c7de609451cacb228f2",
            bytes: 139264
        }, {
            name: "pizza/mushrooms/library.json",
            md5: "a9d311fe666776ad8aae5999fe322213",
            bytes: 7920
        }, {
            name: "pizza/jellybeans/pizzaJellybeans.png",
            md5: "95c07e7cb623d5ef90cb1f3fdcdabc69",
            bytes: 13530
        }, {
            name: "pizza/jellybeans/library.json",
            md5: "f8145580a34c0268d133d71fdef03505",
            bytes: 5518
        }, {
            name: "pizza/jalapenos/pizzaJalapenos.png",
            md5: "6c1fd6aa6bfd452b6e22a795fbdbf955",
            bytes: 54081
        }, {
            name: "pizza/jalapenos/library.json",
            md5: "b52bb592b0eb0f63db9c1bd2a2859b9d",
            bytes: 7557
        }, {
            name: "pizza/cheese/pizzaCheese.png",
            md5: "12c9513f7433584d559bba13ee21e073",
            bytes: 39263
        }, {
            name: "pizza/cheese/library.json",
            md5: "db026aaad51fe659da942924c0208764",
            bytes: 4411
        }, {
            name: "pizza/anchovies/pizzaAnchovies.png",
            md5: "e6219b0d98ef1c14b7bee211d5709e40",
            bytes: 25566
        }, {
            name: "pizza/anchovies/library.json",
            md5: "47c0769878ea9aa1366434d7711962c8",
            bytes: 4795
        }, {
            name: "Palette.png",
            md5: "5c265fcebd931f213a0f4f9c7e2dd6e2",
            bytes: 4328
        }, {
            name: "Mick2/Mick2.png",
            md5: "2d90f9048ee10d1c4a482ed2cb81b92c",
            bytes: 2825804
        }, {
            name: "Mick2/library.json",
            md5: "fd9e2d5609e5fb3bfecab462d1441214",
            bytes: 7290
        }, {
            name: "Mick1/Mick1.png",
            md5: "328dd80aa170f6db92c2821c182c8366",
            bytes: 2494256
        }, {
            name: "Mick1/library.json",
            md5: "49db3aef8b942dba6951a46a01a42854",
            bytes: 6188
        }, {
            name: "door/library.json",
            md5: "96bfe4ca6350afe19f5adc241cd0f358",
            bytes: 32195
        }, {
            name: "door/door.png",
            md5: "e70cb20aec20b919e002d867e33d3f53",
            bytes: 981253
        }, {
            name: "Comptoir.png",
            md5: "33a5ab24ecf3e7a04f513b3d0dcea28c",
            bytes: 10481
        }, {
            name: "Background.jpg",
            md5: "b43287b3fede50f9b7cd09d85a3152ee",
            bytes: 20789
        }]);
        a.set("Hud", [{
            name: "images/vegetarian.png",
            md5: "7a6ab324b4d58cf352f88a7e177426e4",
            bytes: 11376
        }, {
            name: "images/seaweed.png",
            md5: "5485ce75a2433a2adadf4a7f32363d3b",
            bytes: 20891
        }, {
            name: "images/pizzaburnt.png",
            md5: "c5e989b547cddf4147f4b80322272a5b",
            bytes: 5418
        }, {
            name: "images/pizza.png",
            md5: "000791ef09d9e3c069ee8dc6a390bef7",
            bytes: 6781
        }, {
            name: "images/pepperoniCheese.png",
            md5: "f3e250bfa189d867db76f19300e51a27",
            bytes: 10929
        }, {
            name: "images/pepperoni.png",
            md5: "0ac6f6ba2a6aa3a94e45dd017974b9a0",
            bytes: 5205
        }, {
            name: "images/OrderNbr.png",
            md5: "1210ae112193b9dd856ce9169c971c8a",
            bytes: 13627
        }, {
            name: "images/mushrooms.png",
            md5: "df98f13042aa5028bbd92f6b5eeee41e",
            bytes: 4271
        }, {
            name: "images/mikeySpecial.png",
            md5: "3d1091372d99adab01eb08bf47b43e81",
            bytes: 11414
        }, {
            name: "images/jellybeans.png",
            md5: "5190aaef6bdafd90f82a4d731d3673f4",
            bytes: 5417
        }, {
            name: "images/jalapenos.png",
            md5: "77123aa2872a377d1b5f881827880151",
            bytes: 3144
        }, {
            name: "images/Hud.png",
            md5: "0c78ad32939cfaed9132f9b09285825c",
            bytes: 10855
        }, {
            name: "images/cheese.png",
            md5: "bcb386a6697ff058078f0dc31d7ac5b9",
            bytes: 8539
        }, {
            name: "images/BtnPause.png",
            md5: "aa315e4c36549d9171d5b5ab337b0cec",
            bytes: 648
        }, {
            name: "images/bell.png",
            md5: "abe5d44b14a92d352dc98cbe244c43f8",
            bytes: 16862
        }, {
            name: "images/anchovies.png",
            md5: "e52cb11ab58da249efe88894c1486ffc",
            bytes: 5964
        }, {
            name: "fonts/creative72_0.png",
            md5: "a6a0e2e6783b13728293bcd076eef774",
            bytes: 32997
        }, {
            name: "fonts/creative72.fnt",
            md5: "90a2d1b3ffa068fcb0a7667e75b9278c",
            bytes: 2587
        }, {
            name: "fonts/creative40_0.png",
            md5: "d0e3b7590b976a53d89a5daa0f550070",
            bytes: 2893
        }, {
            name: "fonts/creative40.fnt",
            md5: "d2f4c0a4f65d8317780477dd6c9bc709",
            bytes: 1673
        }, {
            name: "anims/roller/roller.png",
            md5: "95f150e5d9b4f7804fdb58e91ed928ed",
            bytes: 153548
        }, {
            name: "anims/roller/library.json",
            md5: "40984474ebb0cc292af6e8f7369256e5",
            bytes: 5797
        }]);
        a.set("HowToPlay", [{
                name: "images/page3.png",
                md5: "de2d3e4d334ececee17e5380cf1fa9a8",
                bytes: 86292
            }, {
                name: "images/Page2_PC.png",
                md5: "a70b9df004544c3441893448c5b12e71",
                bytes: 92993
            }, {
                name: "images/Page2_Mobile.png",
                md5: "bc3ca61cf25344d7c5c6ee030010cdef",
                bytes: 90828
            }, {
                name: "images/Page1.png",
                md5: "8ae90da7542b2370f2a93e0bc6bdf5b3",
                bytes: 94234
            }, {
                name: "images/BtnSkip.png",
                md5: "98073a68d79a05981a18fe77bff46e0f",
                bytes: 4830
            }, {
                name: "images/BtnPrevious.png",
                md5: "023349a6fcd94b961631247e7e8edacf",
                bytes: 5808
            },
            {
                name: "images/BtnNext.png",
                md5: "0ed95081716e8676a57b82eb92f21f80",
                bytes: 4603
            }, {
                name: "definition.json",
                md5: "aba5d0a3d30d12eae2319c3ac433e687",
                bytes: 919
            }
        ]);
        a.set("GameOverScreen", [{
            name: "images/resultBG.jpg",
            md5: "35965cdc00a71868828bae264c74b672",
            bytes: 12094
        }, {
            name: "images/over.png",
            md5: "5bec7839390e3a1bbd86ac594340bd8f",
            bytes: 7975
        }, {
            name: "images/gameOverPaper.png",
            md5: "e82a985ae96d830adfabbad88d051504",
            bytes: 24074
        }, {
            name: "images/game.png",
            md5: "5d677aa48551a2a68e0aa2759177c798",
            bytes: 8178
        }, {
            name: "images/Comptoir.png",
            md5: "753e1b634680be3c6797f08ba6bd2592",
            bytes: 13428
        }, {
            name: "images/BtnTryAgain.png",
            md5: "347ee9eb52a542ec69e294500c821de7",
            bytes: 6949
        }, {
            name: "images/BtnQuit.png",
            md5: "e5d25ccde80c477881695c438c89d3d2",
            bytes: 1099
        }, {
            name: "definition.json",
            md5: "77a034599a0dc7e28b969cfea6f41236",
            bytes: 1476
        }]);
        a.set("Cuttables", [{
            name: "anims/seaweed/seaweed.png",
            md5: "6ed2adb9edf32200fdee62ccb67a06d1",
            bytes: 379040
        }, {
            name: "anims/seaweed/library.json",
            md5: "05504d1ac94a73b393ee298b44934efb",
            bytes: 18838
        }, {
            name: "anims/pepperoni/pepperoni.png",
            md5: "ba2d8912f236a64cbdc1a9abc757a267",
            bytes: 194499
        }, {
            name: "anims/pepperoni/library.json",
            md5: "7f80b5872d212ed446e73537d817d552",
            bytes: 8955
        }, {
            name: "anims/mushrooms/mushrooms.png",
            md5: "68c5a2ac9e6bfd7e0e31e80eadf70762",
            bytes: 144935
        }, {
            name: "anims/mushrooms/library.json",
            md5: "d8ac10d8a58aaf9667f00cc572962ae4",
            bytes: 7401
        }, {
            name: "anims/library.json",
            md5: "9c9bbad71b9de89e902bdb439243a880",
            bytes: 349
        }, {
            name: "anims/jellybeans/library.json",
            md5: "c96d4a7690d0c6a16f3b010b619fc6b4",
            bytes: 19857
        }, {
            name: "anims/jellybeans/jellybeans.png",
            md5: "66c525688e83615c7b83fa1d6d2b0eb4",
            bytes: 213754
        }, {
            name: "anims/jalapenos/library.json",
            md5: "297518c5ef188a0da9511e84fc7e9549",
            bytes: 9294
        }, {
            name: "anims/jalapenos/jalapenos.png",
            md5: "2c1046c9026dd6485b2a29582ef12a2e",
            bytes: 141240
        }, {
            name: "anims/cheese/library.json",
            md5: "9f7353186117717ff699be5fca11ab29",
            bytes: 12656
        }, {
            name: "anims/cheese/cheese.png",
            md5: "1ac1a39752f0d7417bf1b781b69d2a28",
            bytes: 218092
        }, {
            name: "anims/atlas0.png",
            md5: "b72cd0c74aae6b929762efdabeac64e3",
            bytes: 223
        }, {
            name: "anims/anchovies/library.json",
            md5: "dd51b75b66cc528e1ba50e79a2d1c223",
            bytes: 22488
        }, {
            name: "anims/anchovies/fish.png",
            md5: "c41216e1f1614f86f970ea0c9c415495",
            bytes: 388097
        }]);
        a.set("Configs", [{
            name: "game.cfg",
            md5: "b438346818a712cf7203988f8f28cd84",
            bytes: 1987
        }]);
        var b = "assets/",
            c = b,
            e = mc.Meta.getType(P);
        null != e.assetBase && (c = e.assetBase[0], 47 != c.charCodeAt(c.length - 1) && (c += "/"), P.supportsCrossOrigin() && (b = c));
        for (var e = new H, d = a.keys(); d.hasNext();) {
            for (var f = d.next(), g = new P, h = 0, i = a.get(f); h < i.length;) {
                var k = i[h];
                ++h;
                var m = k.name,
                    n =
                    f + "/" + m + "?v=" + u.string(k.md5),
                    o = P.inferType(m);
                o == U.Audio && (m = G.substr(m, 0, m.lastIndexOf(".")));
                var q = c;
                o == U.Data && (q = b);
                g.add(m, q + n, k.bytes, o)
            }
            e.set(f, g)
        }
        return e
    };
    P.supportsCrossOrigin = function() {
        return (new ka("\\b(Android)\\b", "")).match(B.window.navigator.userAgent) ? !1 : null != (new qc).withCredentials
    };
    P.prototype = {
        clone: function() {
            var a = new P;
            a._entries = this._entries.slice();
            return a
        },
        iterator: function() {
            return G.iter(this._entries)
        },
        add: function(a, b, c, e) {
            null == c && (c = 0);
            null == e && (e = P.inferType(b));
            a = new Cb(a, b, e, c);
            this._entries.push(a);
            return a
        },
        __class__: P
    };
    sb = function() {
        this.reset()
    };
    h["flambe.debug.FpsDisplay"] = sb;
    sb.__name__ = ["flambe", "debug", "FpsDisplay"];
    sb.__super__ = L;
    sb.prototype = w(L.prototype, {
        getName: function() {
            return "FpsDisplay"
        },
        reset: function() {
            this._fpsTime = this._fpsFrames = 0
        },
        onUpdate: function(a) {
            ++this._fpsFrames;
            this._fpsTime += a;
            if (1 < this._fpsTime) {
                var a = "FPS: " + (100 * (this._fpsFrames / this._fpsTime) | 0) / 100,
                    b = this.owner._compMap.Sprite;
                null != b ? b.setText(a) : null;
                this.reset()
            }
        },
        __class__: sb
    });
    ya = h["flambe.display.BlendMode"] = {
        __ename__: ["flambe", "display", "BlendMode"],
        __constructs__: ["Normal", "Add"]
    };
    ya.Normal = ["Normal", 0];
    ya.Normal.toString = n;
    ya.Normal.__enum__ = ya;
    ya.Add = ["Add", 1];
    ya.Add.toString = n;
    ya.Add.__enum__ = ya;
    Ib = function() {};
    h["flambe.display.DrawingContext"] = Ib;
    Ib.__name__ = ["flambe", "display", "DrawingContext"];
    Ib.prototype = {
        __class__: Ib
    };
    ib = function(a, b, c) {
        x.call(this);
        this.color = new aa(a);
        this.width = new N(b);
        this.height = new N(c)
    };
    h["flambe.display.FillSprite"] =
        ib;
    ib.__name__ = ["flambe", "display", "FillSprite"];
    ib.__super__ = x;
    ib.prototype = w(x.prototype, {
        getName: function() {
            return "Sprite"
        },
        onUpdate: function(a) {
            x.prototype.onUpdate.call(this, a);
            this.width.update(a);
            this.height.update(a)
        },
        getNaturalHeight: function() {
            return this.height._value
        },
        getNaturalWidth: function() {
            return this.width._value
        },
        draw: function(a) {
            a.fillRect(this.color._value, 0, 0, this.width._value, this.height._value)
        },
        __class__: ib
    });
    qa = function(a, b) {
        this.name = b;
        this._glyphs = new oa;
        for (var c = new da.ConfigParser(a.loadFile(b +
                ".fnt")), e = new oa, d = b.lastIndexOf("/"), d = 0 <= d ? G.substr(b, 0, d + 1) : "", f = c.keywords(); f.hasNext();) switch (f.next()) {
            case "info":
                for (var g = c.pairs(); g.hasNext();) {
                    var h = g.next();
                    switch (h.key) {
                        case "size":
                            this.size = h.getInt()
                    }
                }
                break;
            case "page":
                for (var g = 0, i = null, k = c.pairs(); k.hasNext();) switch (h = k.next(), h.key) {
                    case "id":
                        g = h.getInt();
                        break;
                    case "file":
                        i = h.getString()
                }
                e.set(g, a.loadTexture(d + i));
                break;
            case "char":
                g = null;
                for (i = c.pairs(); i.hasNext();) switch (h = i.next(), h.key) {
                    case "id":
                        g = new Jb(h.getInt());
                        break;
                    case "x":
                        g.x = h.getInt();
                        break;
                    case "y":
                        g.y = h.getInt();
                        break;
                    case "width":
                        g.width = h.getInt();
                        break;
                    case "height":
                        g.height = h.getInt();
                        break;
                    case "page":
                        g.page = e.get(h.getInt());
                        break;
                    case "xoffset":
                        g.xOffset = h.getInt();
                        break;
                    case "yoffset":
                        g.yOffset = h.getInt();
                        break;
                    case "xadvance":
                        g.xAdvance = h.getInt()
                }
                this._glyphs.set(g.charCode, g);
                break;
            case "kerning":
                g = null;
                i = -1;
                for (k = c.pairs(); k.hasNext();) switch (h = k.next(), h.key) {
                    case "first":
                        g = this._glyphs.get(h.getInt());
                        break;
                    case "second":
                        i = h.getInt();
                        break;
                    case "amount":
                        g._internal_setKerning(i, h.getInt())
                }
        }
    };
    h["flambe.display.Font"] = qa;
    qa.__name__ = ["flambe", "display", "Font"];
    qa.prototype = {
        getGlyphs: function(a) {
            for (var b = [], c = 0, e = a.length; c < e;) {
                var d = c++,
                    d = this._glyphs.get(a.charCodeAt(d));
                null != d ? b.push(d) : null
            }
            return b
        },
        __class__: qa
    };
    Jb = function(a) {
        this.charCode = a
    };
    h["flambe.display.Glyph"] = Jb;
    Jb.__name__ = ["flambe", "display", "Glyph"];
    Jb.prototype = {
        _internal_setKerning: function(a, b) {
            null == this._kernings && (this._kernings = new oa);
            this._kernings.set(a,
                b)
        },
        getKerning: function(a) {
            return null != this._kernings ? this._kernings.get(a) | 0 : 0
        },
        draw: function(a, b, c) {
            0 < this.width && a.drawSubImage(this.page, b + this.xOffset, c + this.yOffset, this.x, this.y, this.width, this.height)
        },
        __class__: Jb
    };
    da = {
        ConfigParser: function(a) {
            this._configText = a;
            this._keywordPattern = new ka("([a-z]+)(.*)", "");
            this._pairPattern = new ka('([a-z]+)=("[^"]*"|[^\\s]+)', "")
        }
    };
    h["flambe.display._Font.ConfigParser"] = da.ConfigParser;
    da.ConfigParser.__name__ = ["flambe", "display", "_Font", "ConfigParser"];
    da.ConfigParser.advance = function(a, b) {
        var c = b.matchedPos();
        return G.substr(a, c.pos + c.len, a.length)
    };
    da.ConfigParser.prototype = {
        pairs: function() {
            var a = this,
                b = this._pairText;
            return {
                next: function() {
                    b = da.ConfigParser.advance(b, a._pairPattern);
                    return new da.ConfigPair(a._pairPattern.matched(1), a._pairPattern.matched(2))
                },
                hasNext: function() {
                    return a._pairPattern.match(b)
                }
            }
        },
        keywords: function() {
            var a = this,
                b = this._configText;
            return {
                next: function() {
                    b = da.ConfigParser.advance(b, a._keywordPattern);
                    a._pairText =
                        a._keywordPattern.matched(2);
                    return a._keywordPattern.matched(1)
                },
                hasNext: function() {
                    return a._keywordPattern.match(b)
                }
            }
        },
        __class__: da.ConfigParser
    };
    da.ConfigPair = function(a, b) {
        this.key = a;
        this._value = b
    };
    h["flambe.display._Font.ConfigPair"] = da.ConfigPair;
    da.ConfigPair.__name__ = ["flambe", "display", "_Font", "ConfigPair"];
    da.ConfigPair.prototype = {
        getString: function() {
            return 34 != this._value.charCodeAt(0) ? null : G.substr(this._value, 1, this._value.length - 2)
        },
        getInt: function() {
            return u.parseInt(this._value)
        },
        __class__: da.ConfigPair
    };
    S = function(a) {
        x.call(this);
        this.texture = a
    };
    h["flambe.display.ImageSprite"] = S;
    S.__name__ = ["flambe", "display", "ImageSprite"];
    S.__super__ = x;
    S.prototype = w(x.prototype, {
        getName: function() {
            return "Sprite"
        },
        getNaturalHeight: function() {
            return this.texture.getHeight()
        },
        getNaturalWidth: function() {
            return this.texture.getWidth()
        },
        draw: function(a) {
            a.drawImage(this.texture, 0, 0)
        },
        __class__: S
    });
    ca = h["flambe.display.Orientation"] = {
        __ename__: ["flambe", "display", "Orientation"],
        __constructs__: ["Portrait",
            "Landscape"
        ]
    };
    ca.Portrait = ["Portrait", 0];
    ca.Portrait.toString = n;
    ca.Portrait.__enum__ = ca;
    ca.Landscape = ["Landscape", 1];
    ca.Landscape.toString = n;
    ca.Landscape.__enum__ = ca;
    $ = {
        NotifyingSignal1: function(a) {
            C.call(this);
            this._sprite = a
        }
    };
    h["flambe.display._Sprite.NotifyingSignal1"] = $.NotifyingSignal1;
    $.NotifyingSignal1.__name__ = ["flambe", "display", "_Sprite", "NotifyingSignal1"];
    $.NotifyingSignal1.__super__ = C;
    $.NotifyingSignal1.prototype = w(C.prototype, {
        createImpl: function() {
            return new $.NotifyingSignalImpl(this._sprite)
        },
        __class__: $.NotifyingSignal1
    });
    ea = function() {
        this._connections = []
    };
    h["flambe.util.SignalImpl"] = ea;
    ea.__name__ = ["flambe", "util", "SignalImpl"];
    ea.prototype = {
        clone: function() {
            var a = new ea;
            a._connections = this._connections.slice();
            return a
        },
        emit: function(a) {
            for (var b = this._connections, c = 0; c < b.length;) {
                var e = b[c];
                ++c;
                var d = e._internal_listener;
                null != d && (d.apply(null, a), e.stayInList || e.dispose())
            }
        },
        disconnectAll: function() {
            for (var a = 0, b = this._connections; a < b.length;) {
                var c = b[a];
                ++a;
                c._internal_signal = null;
                c._internal_listener = null
            }
            this._connections = []
        },
        disconnect: function(a) {
            var b = ha.indexOf(this._connections, a);
            return 0 <= b ? (a._internal_signal = null, a._internal_listener = null, this._connections = this._connections.slice(), this._connections.splice(b, 1), !0) : !1
        },
        connect: function(a, b) {
            var c = new jb(this, a);
            this._connections = this._connections.slice();
            b ? this._connections.unshift(c) : this._connections.push(c);
            return c
        },
        __class__: ea
    };
    $.NotifyingSignalImpl = function(a) {
        ea.call(this);
        this._sprite = a
    };
    h["flambe.display._Sprite.NotifyingSignalImpl"] =
        $.NotifyingSignalImpl;
    $.NotifyingSignalImpl.__name__ = ["flambe", "display", "_Sprite", "NotifyingSignalImpl"];
    $.NotifyingSignalImpl.__super__ = ea;
    $.NotifyingSignalImpl.prototype = w(ea.prototype, {
        disconnectAll: function() {
            this._sprite._internal_onListenersRemoved(this._connections.length);
            ea.prototype.disconnectAll.call(this)
        },
        disconnect: function(a) {
            return ea.prototype.disconnect.call(this, a) ? (this._sprite._internal_onListenersRemoved(1), !0) : !1
        },
        connect: function(a, b) {
            this._sprite._internal_onListenersAdded(1);
            return ea.prototype.connect.call(this, a, b)
        },
        __class__: $.NotifyingSignalImpl
    });
    Kb = function() {};
    h["flambe.display.Stage"] = Kb;
    Kb.__name__ = ["flambe", "display", "Stage"];
    Kb.prototype = {
        __class__: Kb
    };
    W = function(a, b) {
        null == b && (b = "");
        x.call(this);
        this._font = a;
        this.setText(b)
    };
    h["flambe.display.TextSprite"] = W;
    W.__name__ = ["flambe", "display", "TextSprite"];
    W.__super__ = x;
    W.prototype = w(x.prototype, {
        getName: function() {
            return "Sprite"
        },
        invalidate: function() {
            this._glyphs = this._font.getGlyphs(this.text);
            this._offsets = [0];
            for (var a = this._height = this._width = 0, b = this._glyphs.length; a < b;) {
                var c = this._glyphs[a];
                ++a;
                a == b ? this._width += c.width : (this._width += c.xAdvance + c.getKerning(this._glyphs[a].charCode), this._offsets.push(this._width));
                this._height = hb.max(this._height, c.height + c.yOffset)
            }
        },
        setFont: function(a) {
            this._font = a;
            this.invalidate();
            return a
        },
        setText: function(a) {
            this.text = a;
            this.invalidate();
            return a
        },
        getNaturalHeight: function() {
            return this._height
        },
        getNaturalWidth: function() {
            return this._width
        },
        draw: function(a) {
            for (var b =
                    0, c = this._glyphs.length; b < c;) this._glyphs[b].draw(a, this._offsets[b], 0), ++b
        },
        __class__: W
    });
    Lb = function() {};
    h["flambe.display.Texture"] = Lb;
    Lb.__name__ = ["flambe", "display", "Texture"];
    Lb.prototype = {
        __class__: Lb
    };
    R = void 0;
    d = void 0;
    vb = void 0;
    wb = void 0;
    xb = void 0;
    ja = void 0;
    yb = void 0;
    zb = void 0;
    Ya = void 0;
    Ab = void 0;
    Za = void 0;
    Bb = void 0;
    d = h["flambe.input.Key"] = {
        __ename__: ["flambe", "input", "Key"],
        __constructs__: "A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,Number0,Number1,Number2,Number3,Number4,Number5,Number6,Number7,Number8,Number9,Numpad0,Numpad1,Numpad2,Numpad3,Numpad4,Numpad5,Numpad6,Numpad7,Numpad8,Numpad9,NumpadAdd,NumpadDecimal,NumpadDivide,NumpadEnter,NumpadMultiply,NumpadSubtract,F1,F2,F3,F4,F5,F6,F7,F8,F9,F10,F11,F12,F13,F14,F15,Left,Up,Right,Down,Alt,Backquote,Backslash,Backspace,CapsLock,Comma,Command,Control,Delete,End,Enter,Equals,Escape,Home,Insert,LeftBracket,Minus,PageDown,PageUp,Period,Quote,RightBracket,Semicolon,Shift,Slash,Space,Tab,Back,Menu,Search,Unknown".split(",")
    };
    d.A = ["A", 0];
    d.A.toString = n;
    d.A.__enum__ = d;
    d.B = ["B", 1];
    d.B.toString = n;
    d.B.__enum__ = d;
    d.C = ["C", 2];
    d.C.toString = n;
    d.C.__enum__ = d;
    d.D = ["D", 3];
    d.D.toString = n;
    d.D.__enum__ = d;
    d.E = ["E", 4];
    d.E.toString = n;
    d.E.__enum__ = d;
    d.F = ["F", 5];
    d.F.toString = n;
    d.F.__enum__ = d;
    d.G = ["G", 6];
    d.G.toString = n;
    d.G.__enum__ = d;
    d.H = ["H", 7];
    d.H.toString = n;
    d.H.__enum__ = d;
    d.I = ["I", 8];
    d.I.toString = n;
    d.I.__enum__ = d;
    d.J = ["J", 9];
    d.J.toString = n;
    d.J.__enum__ = d;
    d.K = ["K", 10];
    d.K.toString = n;
    d.K.__enum__ = d;
    d.L = ["L", 11];
    d.L.toString = n;
    d.L.__enum__ =
        d;
    d.M = ["M", 12];
    d.M.toString = n;
    d.M.__enum__ = d;
    d.N = ["N", 13];
    d.N.toString = n;
    d.N.__enum__ = d;
    d.O = ["O", 14];
    d.O.toString = n;
    d.O.__enum__ = d;
    d.P = ["P", 15];
    d.P.toString = n;
    d.P.__enum__ = d;
    d.Q = ["Q", 16];
    d.Q.toString = n;
    d.Q.__enum__ = d;
    d.R = ["R", 17];
    d.R.toString = n;
    d.R.__enum__ = d;
    d.S = ["S", 18];
    d.S.toString = n;
    d.S.__enum__ = d;
    d.T = ["T", 19];
    d.T.toString = n;
    d.T.__enum__ = d;
    d.U = ["U", 20];
    d.U.toString = n;
    d.U.__enum__ = d;
    d.V = ["V", 21];
    d.V.toString = n;
    d.V.__enum__ = d;
    d.W = ["W", 22];
    d.W.toString = n;
    d.W.__enum__ = d;
    d.X = ["X", 23];
    d.X.toString =
        n;
    d.X.__enum__ = d;
    d.Y = ["Y", 24];
    d.Y.toString = n;
    d.Y.__enum__ = d;
    d.Z = ["Z", 25];
    d.Z.toString = n;
    d.Z.__enum__ = d;
    d.Number0 = ["Number0", 26];
    d.Number0.toString = n;
    d.Number0.__enum__ = d;
    d.Number1 = ["Number1", 27];
    d.Number1.toString = n;
    d.Number1.__enum__ = d;
    d.Number2 = ["Number2", 28];
    d.Number2.toString = n;
    d.Number2.__enum__ = d;
    d.Number3 = ["Number3", 29];
    d.Number3.toString = n;
    d.Number3.__enum__ = d;
    d.Number4 = ["Number4", 30];
    d.Number4.toString = n;
    d.Number4.__enum__ = d;
    d.Number5 = ["Number5", 31];
    d.Number5.toString = n;
    d.Number5.__enum__ =
        d;
    d.Number6 = ["Number6", 32];
    d.Number6.toString = n;
    d.Number6.__enum__ = d;
    d.Number7 = ["Number7", 33];
    d.Number7.toString = n;
    d.Number7.__enum__ = d;
    d.Number8 = ["Number8", 34];
    d.Number8.toString = n;
    d.Number8.__enum__ = d;
    d.Number9 = ["Number9", 35];
    d.Number9.toString = n;
    d.Number9.__enum__ = d;
    d.Numpad0 = ["Numpad0", 36];
    d.Numpad0.toString = n;
    d.Numpad0.__enum__ = d;
    d.Numpad1 = ["Numpad1", 37];
    d.Numpad1.toString = n;
    d.Numpad1.__enum__ = d;
    d.Numpad2 = ["Numpad2", 38];
    d.Numpad2.toString = n;
    d.Numpad2.__enum__ = d;
    d.Numpad3 = ["Numpad3", 39];
    d.Numpad3.toString =
        n;
    d.Numpad3.__enum__ = d;
    d.Numpad4 = ["Numpad4", 40];
    d.Numpad4.toString = n;
    d.Numpad4.__enum__ = d;
    d.Numpad5 = ["Numpad5", 41];
    d.Numpad5.toString = n;
    d.Numpad5.__enum__ = d;
    d.Numpad6 = ["Numpad6", 42];
    d.Numpad6.toString = n;
    d.Numpad6.__enum__ = d;
    d.Numpad7 = ["Numpad7", 43];
    d.Numpad7.toString = n;
    d.Numpad7.__enum__ = d;
    d.Numpad8 = ["Numpad8", 44];
    d.Numpad8.toString = n;
    d.Numpad8.__enum__ = d;
    d.Numpad9 = ["Numpad9", 45];
    d.Numpad9.toString = n;
    d.Numpad9.__enum__ = d;
    d.NumpadAdd = ["NumpadAdd", 46];
    d.NumpadAdd.toString = n;
    d.NumpadAdd.__enum__ = d;
    d.NumpadDecimal = ["NumpadDecimal", 47];
    d.NumpadDecimal.toString = n;
    d.NumpadDecimal.__enum__ = d;
    d.NumpadDivide = ["NumpadDivide", 48];
    d.NumpadDivide.toString = n;
    d.NumpadDivide.__enum__ = d;
    d.NumpadEnter = ["NumpadEnter", 49];
    d.NumpadEnter.toString = n;
    d.NumpadEnter.__enum__ = d;
    d.NumpadMultiply = ["NumpadMultiply", 50];
    d.NumpadMultiply.toString = n;
    d.NumpadMultiply.__enum__ = d;
    d.NumpadSubtract = ["NumpadSubtract", 51];
    d.NumpadSubtract.toString = n;
    d.NumpadSubtract.__enum__ = d;
    d.F1 = ["F1", 52];
    d.F1.toString = n;
    d.F1.__enum__ = d;
    d.F2 = ["F2", 53];
    d.F2.toString =
        n;
    d.F2.__enum__ = d;
    d.F3 = ["F3", 54];
    d.F3.toString = n;
    d.F3.__enum__ = d;
    d.F4 = ["F4", 55];
    d.F4.toString = n;
    d.F4.__enum__ = d;
    d.F5 = ["F5", 56];
    d.F5.toString = n;
    d.F5.__enum__ = d;
    d.F6 = ["F6", 57];
    d.F6.toString = n;
    d.F6.__enum__ = d;
    d.F7 = ["F7", 58];
    d.F7.toString = n;
    d.F7.__enum__ = d;
    d.F8 = ["F8", 59];
    d.F8.toString = n;
    d.F8.__enum__ = d;
    d.F9 = ["F9", 60];
    d.F9.toString = n;
    d.F9.__enum__ = d;
    d.F10 = ["F10", 61];
    d.F10.toString = n;
    d.F10.__enum__ = d;
    d.F11 = ["F11", 62];
    d.F11.toString = n;
    d.F11.__enum__ = d;
    d.F12 = ["F12", 63];
    d.F12.toString = n;
    d.F12.__enum__ = d;
    d.F13 = ["F13", 64];
    d.F13.toString = n;
    d.F13.__enum__ = d;
    d.F14 = ["F14", 65];
    d.F14.toString = n;
    d.F14.__enum__ = d;
    d.F15 = ["F15", 66];
    d.F15.toString = n;
    d.F15.__enum__ = d;
    d.Left = ["Left", 67];
    d.Left.toString = n;
    d.Left.__enum__ = d;
    d.Up = ["Up", 68];
    d.Up.toString = n;
    d.Up.__enum__ = d;
    d.Right = ["Right", 69];
    d.Right.toString = n;
    d.Right.__enum__ = d;
    d.Down = ["Down", 70];
    d.Down.toString = n;
    d.Down.__enum__ = d;
    d.Alt = ["Alt", 71];
    d.Alt.toString = n;
    d.Alt.__enum__ = d;
    d.Backquote = ["Backquote", 72];
    d.Backquote.toString = n;
    d.Backquote.__enum__ = d;
    d.Backslash = ["Backslash", 73];
    d.Backslash.toString = n;
    d.Backslash.__enum__ = d;
    d.Backspace = ["Backspace", 74];
    d.Backspace.toString = n;
    d.Backspace.__enum__ = d;
    d.CapsLock = ["CapsLock", 75];
    d.CapsLock.toString = n;
    d.CapsLock.__enum__ = d;
    d.Comma = ["Comma", 76];
    d.Comma.toString = n;
    d.Comma.__enum__ = d;
    d.Command = ["Command", 77];
    d.Command.toString = n;
    d.Command.__enum__ = d;
    d.Control = ["Control", 78];
    d.Control.toString = n;
    d.Control.__enum__ = d;
    d.Delete = ["Delete", 79];
    d.Delete.toString = n;
    d.Delete.__enum__ = d;
    d.End = ["End", 80];
    d.End.toString = n;
    d.End.__enum__ =
        d;
    d.Enter = ["Enter", 81];
    d.Enter.toString = n;
    d.Enter.__enum__ = d;
    d.Equals = ["Equals", 82];
    d.Equals.toString = n;
    d.Equals.__enum__ = d;
    d.Escape = ["Escape", 83];
    d.Escape.toString = n;
    d.Escape.__enum__ = d;
    d.Home = ["Home", 84];
    d.Home.toString = n;
    d.Home.__enum__ = d;
    d.Insert = ["Insert", 85];
    d.Insert.toString = n;
    d.Insert.__enum__ = d;
    d.LeftBracket = ["LeftBracket", 86];
    d.LeftBracket.toString = n;
    d.LeftBracket.__enum__ = d;
    d.Minus = ["Minus", 87];
    d.Minus.toString = n;
    d.Minus.__enum__ = d;
    d.PageDown = ["PageDown", 88];
    d.PageDown.toString = n;
    d.PageDown.__enum__ =
        d;
    d.PageUp = ["PageUp", 89];
    d.PageUp.toString = n;
    d.PageUp.__enum__ = d;
    d.Period = ["Period", 90];
    d.Period.toString = n;
    d.Period.__enum__ = d;
    d.Quote = ["Quote", 91];
    d.Quote.toString = n;
    d.Quote.__enum__ = d;
    d.RightBracket = ["RightBracket", 92];
    d.RightBracket.toString = n;
    d.RightBracket.__enum__ = d;
    d.Semicolon = ["Semicolon", 93];
    d.Semicolon.toString = n;
    d.Semicolon.__enum__ = d;
    d.Shift = ["Shift", 94];
    d.Shift.toString = n;
    d.Shift.__enum__ = d;
    d.Slash = ["Slash", 95];
    d.Slash.toString = n;
    d.Slash.__enum__ = d;
    d.Space = ["Space", 96];
    d.Space.toString =
        n;
    d.Space.__enum__ = d;
    d.Tab = ["Tab", 97];
    d.Tab.toString = n;
    d.Tab.__enum__ = d;
    d.Back = ["Back", 98];
    d.Back.toString = n;
    d.Back.__enum__ = d;
    d.Menu = ["Menu", 99];
    d.Menu.toString = n;
    d.Menu.__enum__ = d;
    d.Search = ["Search", 100];
    d.Search.toString = n;
    d.Search.__enum__ = d;
    d.Unknown = function(a) {
        a = ["Unknown", 101, a];
        a.__enum__ = d;
        a.toString = n;
        return a
    };
    vb = function() {};
    h["flambe.input.Keyboard"] = vb;
    vb.__name__ = ["flambe", "input", "Keyboard"];
    vb.prototype = {
        __class__: vb
    };
    wb = function() {};
    h["flambe.input.KeyboardEvent"] = wb;
    wb.__name__ = ["flambe", "input", "KeyboardEvent"];
    wb.prototype = {
        _internal_init: function(a, b) {
            this.id = a;
            this.key = b
        },
        __class__: wb
    };
    xb = function() {};
    h["flambe.input.Mouse"] = xb;
    xb.__name__ = ["flambe", "input", "Mouse"];
    xb.prototype = {
        __class__: xb
    };
    R = h["flambe.input.MouseButton"] = {
        __ename__: ["flambe", "input", "MouseButton"],
        __constructs__: ["Left", "Middle", "Right", "Unknown"]
    };
    R.Left = ["Left", 0];
    R.Left.toString = n;
    R.Left.__enum__ = R;
    R.Middle = ["Middle", 1];
    R.Middle.toString = n;
    R.Middle.__enum__ = R;
    R.Right = ["Right", 2];
    R.Right.toString =
        n;
    R.Right.__enum__ = R;
    R.Unknown = function(a) {
        a = ["Unknown", 3, a];
        a.__enum__ = R;
        a.toString = n;
        return a
    };
    ja = h["flambe.input.MouseCursor"] = {
        __ename__: ["flambe", "input", "MouseCursor"],
        __constructs__: ["Default", "Button", "None"]
    };
    ja.Default = ["Default", 0];
    ja.Default.toString = n;
    ja.Default.__enum__ = ja;
    ja.Button = ["Button", 1];
    ja.Button.toString = n;
    ja.Button.__enum__ = ja;
    ja.None = ["None", 2];
    ja.None.toString = n;
    ja.None.__enum__ = ja;
    yb = function() {};
    h["flambe.input.MouseEvent"] = yb;
    yb.__name__ = ["flambe", "input", "MouseEvent"];
    yb.prototype = {
        _internal_init: function(a, b, c, e) {
            this.id = a;
            this.viewX = b;
            this.viewY = c;
            this.button = e
        },
        __class__: yb
    };
    zb = function() {};
    h["flambe.input.Pointer"] = zb;
    zb.__name__ = ["flambe", "input", "Pointer"];
    zb.prototype = {
        __class__: zb
    };
    Ya = h["flambe.input.EventSource"] = {
        __ename__: ["flambe", "input", "EventSource"],
        __constructs__: ["Mouse", "Touch"]
    };
    Ya.Mouse = function(a) {
        a = ["Mouse", 0, a];
        a.__enum__ = Ya;
        a.toString = n;
        return a
    };
    Ya.Touch = function(a) {
        a = ["Touch", 1, a];
        a.__enum__ = Ya;
        a.toString = n;
        return a
    };
    Ab = function() {};
    h["flambe.input.PointerEvent"] = Ab;
    Ab.__name__ = ["flambe", "input", "PointerEvent"];
    Ab.prototype = {
        _internal_init: function(a, b, c, e) {
            this.id = a;
            this.viewX = b;
            this.viewY = c;
            this.source = e
        },
        __class__: Ab
    };
    Za = function() {};
    h["flambe.input.Touch"] = Za;
    Za.__name__ = ["flambe", "input", "Touch"];
    Za.prototype = {
        __class__: Za
    };
    Bb = function(a) {
        this.id = a;
        this._internal_source = Ya.Touch(this)
    };
    h["flambe.input.TouchPoint"] = Bb;
    Bb.__name__ = ["flambe", "input", "TouchPoint"];
    Bb.prototype = {
        _internal_init: function(a, b) {
            this.viewX = a;
            this.viewY =
                b
        },
        __class__: Bb
    };
    hb = function() {};
    h["flambe.math.FMath"] = hb;
    hb.__name__ = ["flambe", "math", "FMath"];
    hb.max = function(a, b) {
        return a > b ? a : b
    };
    hb.clamp = function(a, b, c) {
        return a < b ? b : a > c ? c : a
    };
    sa = function(a) {
        this.promise = new Ob;
        this._bytesLoaded = new H;
        this._pack = new Ua.BasicAssetPack(a);
        var b = ha.array(a);
        if (0 == b.length) this.handleSuccess();
        else {
            for (var a = 0, c = new H, e = 0; e < b.length;) {
                var d = b[e];
                ++e;
                var f = c.get(d.name);
                null == f && (f = [], c.set(d.name, f));
                f.push(d)
            }
            this._assetsRemaining = ha.count(c);
            for (b = c.iterator(); b.hasNext();)
                if (f =
                    b.next(), f = 1 < f.length ? this.pickBestEntry(f) : f[0], c = this.createPlaceholder(f), null != c) this.handleLoad(f, c);
                else {
                    a += f.bytes;
                    try {
                        this.loadEntry(f)
                    } catch (g) {
                        this.handleError("Failed to load asset: " + u.string(g))
                    }
                }
            this.promise.setTotal(a)
        }
    };
    h["flambe.platform.BasicAssetPackLoader"] = sa;
    sa.__name__ = ["flambe", "platform", "BasicAssetPackLoader"];
    sa.prototype = {
        handleError: function(a) {
            this.promise.error.emit(a)
        },
        handleSuccess: function() {
            this.promise.setResult(this._pack)
        },
        handleProgress: function(a, b) {
            this._bytesLoaded.set(a.name,
                b);
            for (var c = 0, e = this._bytesLoaded.iterator(); e.hasNext();) var d = e.next(),
                c = c + d;
            this.promise.setProgress(c)
        },
        handleLoad: function(a, b) {
            var c = a.name;
            switch (a.type[1]) {
                case 0:
                    this._pack.textures.set(c, b);
                    break;
                case 1:
                    this._pack.sounds.set(c, b);
                    break;
                case 2:
                    this._pack.files.set(c, b)
            }
            this._assetsRemaining -= 1;
            0 >= this._assetsRemaining && this.handleSuccess()
        },
        getAudioFormats: function() {
            return []
        },
        loadEntry: function() {},
        createPlaceholder: function(a) {
            switch (a.type[1]) {
                case 1:
                    if (!ha.has(this.getAudioFormats(),
                            a.getUrlExtension())) return ma.getInstance()
            }
            return null
        },
        pickBestEntry: function(a) {
            switch (a[0].type[1]) {
                case 1:
                    for (var b = this.getAudioFormats(), c = 0; c < b.length;) {
                        var e = b[c];
                        ++c;
                        for (var d = 0; d < a.length;) {
                            var f = a[d];
                            ++d;
                            if (f.getUrlExtension() == e) return f
                        }
                    }
            }
            return a[0]
        },
        __class__: sa
    };
    Ua = {
        BasicAssetPack: function(a) {
            this._manifest = a;
            this.textures = new H;
            this.sounds = new H;
            this.files = new H
        }
    };
    h["flambe.platform._BasicAssetPackLoader.BasicAssetPack"] = Ua.BasicAssetPack;
    Ua.BasicAssetPack.__name__ = ["flambe", "platform",
        "_BasicAssetPackLoader", "BasicAssetPack"
    ];
    Ua.BasicAssetPack.__interfaces__ = [Db];
    Ua.BasicAssetPack.prototype = {
        getManifest: function() {
            return this._manifest
        },
        loadFile: function(a, b) {
            null == b && (b = !0);
            var c = this.files.get(a);
            if (null == c && b) throw "Missing file: " + a;
            return c
        },
        loadSound: function(a, b) {
            null == b && (b = !0);
            var c = this.sounds.get(a);
            if (null == c && b) throw "Missing sound: " + a;
            return c
        },
        loadTexture: function(a, b) {
            null == b && (b = !0);
            var c = this.textures.get(a);
            if (null == c && b) throw "Missing texture: " + a;
            return c
        },
        __class__: Ua.BasicAssetPack
    };
    la = function() {
        this.down = new C;
        this.up = new C;
        this._keyStates = new oa;
        this._id = 0
    };
    h["flambe.platform.BasicKeyboard"] = la;
    la.__name__ = ["flambe", "platform", "BasicKeyboard"];
    la.__interfaces__ = [vb];
    la.prototype = {
        submitUp: function(a) {
            this._keyStates.exists(a) && (this._keyStates.remove(a), la._sharedEvent._internal_init(++this._id, Ea.toKey(a)), this.up.emit(la._sharedEvent))
        },
        submitDown: function(a) {
            this._keyStates.exists(a) || (this._keyStates.set(a, !0), la._sharedEvent._internal_init(++this._id, Ea.toKey(a)), this.down.emit(la._sharedEvent))
        },
        isDown: function(a) {
            return this._keyStates.exists(Ea.toKeyCode(a))
        },
        isSupported: function() {
            return !0
        },
        __class__: la
    };
    Z = function(a) {
        this._pointer = a;
        this._source = Ya.Mouse(Z._sharedEvent);
        this.down = new C;
        this.move = new C;
        this.up = new C;
        this.scroll = new C;
        this._y = this._x = this._id = 0;
        this._cursor = ja.Default;
        this._buttonStates = new oa
    };
    h["flambe.platform.BasicMouse"] = Z;
    Z.__name__ = ["flambe", "platform", "BasicMouse"];
    Z.__interfaces__ = [xb];
    Z.prototype = {
        prepare: function(a, b, c) {
            this._x = a;
            this._y = b;
            Z._sharedEvent._internal_init(++this._id,
                a, b, c)
        },
        submitScroll: function(a, b, c) {
            this._x = a;
            this._y = b;
            if (!this.scroll.hasListeners()) return !1;
            this.scroll.emit(c);
            return !0
        },
        submitUp: function(a, b, c) {
            this._buttonStates.exists(c) && (this._buttonStates.remove(c), this.prepare(a, b, Fa.toButton(c)), this._pointer.submitUp(a, b, this._source), this.up.emit(Z._sharedEvent))
        },
        submitMove: function(a, b) {
            this.prepare(a, b, null);
            this._pointer.submitMove(a, b, this._source);
            this.move.emit(Z._sharedEvent)
        },
        submitDown: function(a, b, c) {
            this._buttonStates.exists(c) || (this._buttonStates.set(c, !0), this.prepare(a, b, Fa.toButton(c)), this._pointer.submitDown(a, b, this._source), this.down.emit(Z._sharedEvent))
        },
        isDown: function(a) {
            return this._buttonStates.exists(Fa.toButtonCode(a))
        },
        setCursor: function(a) {
            return this._cursor = a
        },
        getCursor: function() {
            return this._cursor
        },
        getY: function() {
            return this._y
        },
        getX: function() {
            return this._x
        },
        isSupported: function() {
            return !0
        },
        __class__: Z
    };
    T = function(a, b, c) {
        null == c && (c = !1);
        null == b && (b = 0);
        null == a && (a = 0);
        this.down = new C;
        this.move = new C;
        this.up = new C;
        this._id =
            0;
        this._x = a;
        this._y = b;
        this._isDown = c
    };
    h["flambe.platform.BasicPointer"] = T;
    T.__name__ = ["flambe", "platform", "BasicPointer"];
    T.__interfaces__ = [zb];
    T.getEntityUnderPoint = function(a, b) {
        for (var c = 0, e = x._internal_interactiveSprites; c < e.length;) {
            var d = e[c];
            ++c;
            if (d.contains(a, b) && T.isClickable(d.owner)) return d.owner
        }
        return null
    };
    T.isClickable = function(a) {
        for (;;) {
            var b = a._compMap.Sprite;
            if (null != b && !b.visible._value) return !1;
            b = a.parent;
            if (null != b) {
                var c = b._compMap.Director;
                if (null != c && (a = ha.indexOf(c.scenes,
                        a), 0 <= a && a != c.scenes.length - 1)) return !1;
                a = b
            } else break
        }
        return !0
    };
    T.prototype = {
        prepare: function(a, b, c) {
            this._x = a;
            this._y = b;
            T._sharedEvent._internal_init(++this._id, a, b, c)
        },
        submitUp: function(a, b, c) {
            if (this._isDown) {
                this._isDown = !1;
                this._x = a;
                this._y = b;
                for (var e = [], d = T.getEntityUnderPoint(a, b); null != d;) {
                    var f = d._compMap.Sprite;
                    null != f && (f = f._internal_pointerUp, null != f && f.hasListeners() && e.push(f.clone()));
                    d = d.parent
                }
                this.up.hasListeners() && e.push(this.up.clone());
                this.prepare(a, b, c);
                for (a = 0; a < e.length;) f =
                    e[a], ++a, f.emit(T._sharedEvent)
            }
        },
        submitMove: function(a, b, c) {
            for (var e = [], d = T.getEntityUnderPoint(a, b); null != d;) {
                var f = d._compMap.Sprite;
                null != f && (f = f._internal_pointerMove, null != f && f.hasListeners() && e.push(f.clone()));
                d = d.parent
            }
            this.move.hasListeners() && e.push(this.move.clone());
            this.prepare(a, b, c);
            for (a = 0; a < e.length;) f = e[a], ++a, f.emit(T._sharedEvent)
        },
        submitDown: function(a, b, c) {
            if (!this._isDown) {
                this._isDown = !0;
                for (var e = [], d = T.getEntityUnderPoint(a, b); null != d;) {
                    var f = d._compMap.Sprite;
                    null != f &&
                        (f = f._internal_pointerDown, null != f && f.hasListeners() && e.push(f.clone()));
                    d = d.parent
                }
                this.down.hasListeners() && e.push(this.down.clone());
                this.prepare(a, b, c);
                for (a = 0; a < e.length;) f = e[a], ++a, f.emit(T._sharedEvent)
            }
        },
        isDown: function() {
            return this._isDown
        },
        getY: function() {
            return this._y
        },
        getX: function() {
            return this._x
        },
        isSupported: function() {
            return !0
        },
        __class__: T
    };
    Sa = function(a, b) {
        null == b && (b = 4);
        this._pointer = a;
        this._maxPoints = b;
        this._pointMap = new oa;
        this._points = [];
        this.down = new C;
        this.move = new C;
        this.up =
            new C
    };
    h["flambe.platform.BasicTouch"] = Sa;
    Sa.__name__ = ["flambe", "platform", "BasicTouch"];
    Sa.__interfaces__ = [Za];
    Sa.prototype = {
        submitUp: function(a, b, c) {
            var e = this._pointMap.get(a);
            null != e && (e._internal_init(b, c), this._pointMap.remove(a), G.remove(this._points, e), this._pointerTouch == e && (this._pointerTouch = null, this._pointer.submitUp(b, c, e._internal_source)), this.up.emit(e))
        },
        submitMove: function(a, b, c) {
            a = this._pointMap.get(a);
            null != a && (a._internal_init(b, c), this._pointerTouch == a && this._pointer.submitMove(b,
                c, a._internal_source), this.move.emit(a))
        },
        submitDown: function(a, b, c) {
            if (!this._pointMap.exists(a)) {
                var e = new Bb(a);
                e._internal_init(b, c);
                this._pointMap.set(a, e);
                this._points.push(e);
                null == this._pointerTouch && (this._pointerTouch = e, this._pointer.submitDown(b, c, e._internal_source));
                this.down.emit(e)
            }
        },
        getPoints: function() {
            return this._points.slice()
        },
        getMaxPoints: function() {
            return this._maxPoints
        },
        isSupported: function() {
            return !0
        },
        __class__: Sa
    };
    rb = function() {};
    Da = void 0;
    h["flambe.sound.Sound"] = rb;
    rb.__name__ = ["flambe", "sound", "Sound"];
    rb.prototype = {
        __class__: rb
    };
    ma = function() {
        this._playback = new Va(this)
    };
    h["flambe.platform.DummySound"] = ma;
    ma.__name__ = ["flambe", "platform", "DummySound"];
    ma.__interfaces__ = [rb];
    ma.getInstance = function() {
        null == ma._instance && (ma._instance = new ma);
        return ma._instance
    };
    ma.prototype = {
        getDuration: function() {
            return 0
        },
        loop: function() {
            return this._playback
        },
        play: function() {
            return this._playback
        },
        __class__: ma
    };
    Da = function() {};
    h["flambe.sound.Playback"] = Da;
    Da.__name__ = ["flambe", "sound",
        "Playback"
    ];
    Da.__interfaces__ = [ta];
    Da.prototype = {
        __class__: Da
    };
    Va = function(a) {
        this._sound = a;
        this.volume = new N(0)
    };
    h["flambe.platform.DummyPlayback"] = Va;
    Va.__name__ = ["flambe", "platform", "DummyPlayback"];
    Va.__interfaces__ = [Da];
    Va.prototype = {
        dispose: function() {},
        getPosition: function() {
            return 0
        },
        isEnded: function() {
            return !0
        },
        setPaused: function() {
            return !0
        },
        isPaused: function() {
            return !0
        },
        getSound: function() {
            return this._sound
        },
        __class__: Va
    };
    qb = function() {};
    h["flambe.storage.Storage"] = qb;
    qb.__name__ = ["flambe",
        "storage", "Storage"
    ];
    qb.prototype = {
        __class__: qb
    };
    Qa = function() {
        this.clear()
    };
    h["flambe.platform.DummyStorage"] = Qa;
    Qa.__name__ = ["flambe", "platform", "DummyStorage"];
    Qa.__interfaces__ = [qb];
    Qa.prototype = {
        clear: function() {
            this._hash = new H
        },
        remove: function(a) {
            this._hash.remove(a)
        },
        get: function(a) {
            return this._hash.get(a)
        },
        set: function(a, b) {
            this._hash.set(a, b);
            return !0
        },
        isSupported: function() {
            return !1
        },
        __class__: Qa
    };
    Ta = function() {
        this.down = new C;
        this.move = new C;
        this.up = new C
    };
    h["flambe.platform.DummyTouch"] =
        Ta;
    Ta.__name__ = ["flambe", "platform", "DummyTouch"];
    Ta.__interfaces__ = [Za];
    Ta.prototype = {
        getPoints: function() {
            return []
        },
        getMaxPoints: function() {
            return 0
        },
        isSupported: function() {
            return !1
        },
        __class__: Ta
    };
    Wa = function() {
        this._entries = []
    };
    h["flambe.platform.EventGroup"] = Wa;
    Wa.__name__ = ["flambe", "platform", "EventGroup"];
    Wa.__interfaces__ = [ta];
    Wa.prototype = {
        dispose: function() {
            for (var a = 0, b = this._entries; a < b.length;) {
                var c = b[a];
                ++a;
                c.dispatcher.removeEventListener(c.type, c.listener, !1)
            }
            this._entries = []
        },
        addDisposingListener: function(a,
            b, c) {
            var e = this;
            this.addListener(a, b, function(a) {
                e.dispose();
                c(a)
            })
        },
        addListener: function(a, b, c) {
            a.addEventListener(b, c, !1);
            this._entries.push(new tb.Entry(a, b, c))
        },
        __class__: Wa
    };
    tb = {
        Entry: function(a, b, c) {
            this.dispatcher = a;
            this.type = b;
            this.listener = c
        }
    };
    h["flambe.platform._EventGroup.Entry"] = tb.Entry;
    tb.Entry.__name__ = ["flambe", "platform", "_EventGroup", "Entry"];
    tb.Entry.prototype = {
        __class__: tb.Entry
    };
    Ea = function() {};
    h["flambe.platform.KeyCodes"] = Ea;
    Ea.__name__ = ["flambe", "platform", "KeyCodes"];
    Ea.toKey =
        function(a) {
            switch (a) {
                case 65:
                    return d.A;
                case 66:
                    return d.B;
                case 67:
                    return d.C;
                case 68:
                    return d.D;
                case 69:
                    return d.E;
                case 70:
                    return d.F;
                case 71:
                    return d.G;
                case 72:
                    return d.H;
                case 73:
                    return d.I;
                case 74:
                    return d.J;
                case 75:
                    return d.K;
                case 76:
                    return d.L;
                case 77:
                    return d.M;
                case 78:
                    return d.N;
                case 79:
                    return d.O;
                case 80:
                    return d.P;
                case 81:
                    return d.Q;
                case 82:
                    return d.R;
                case 83:
                    return d.S;
                case 84:
                    return d.T;
                case 85:
                    return d.U;
                case 86:
                    return d.V;
                case 87:
                    return d.W;
                case 88:
                    return d.X;
                case 89:
                    return d.Y;
                case 90:
                    return d.Z;
                case 48:
                    return d.Number0;
                case 49:
                    return d.Number1;
                case 50:
                    return d.Number2;
                case 51:
                    return d.Number3;
                case 52:
                    return d.Number4;
                case 53:
                    return d.Number5;
                case 54:
                    return d.Number6;
                case 55:
                    return d.Number7;
                case 56:
                    return d.Number8;
                case 57:
                    return d.Number9;
                case 96:
                    return d.Numpad0;
                case 97:
                    return d.Numpad1;
                case 98:
                    return d.Numpad2;
                case 99:
                    return d.Numpad3;
                case 100:
                    return d.Numpad4;
                case 101:
                    return d.Numpad5;
                case 102:
                    return d.Numpad6;
                case 103:
                    return d.Numpad7;
                case 104:
                    return d.Numpad8;
                case 105:
                    return d.Numpad9;
                case 107:
                    return d.NumpadAdd;
                case 110:
                    return d.NumpadDecimal;
                case 111:
                    return d.NumpadDivide;
                case 108:
                    return d.NumpadEnter;
                case 106:
                    return d.NumpadMultiply;
                case 109:
                    return d.NumpadSubtract;
                case 112:
                    return d.F1;
                case 113:
                    return d.F2;
                case 114:
                    return d.F3;
                case 115:
                    return d.F4;
                case 116:
                    return d.F5;
                case 117:
                    return d.F6;
                case 118:
                    return d.F7;
                case 119:
                    return d.F8;
                case 120:
                    return d.F9;
                case 121:
                    return d.F10;
                case 122:
                    return d.F11;
                case 123:
                    return d.F12;
                case 37:
                    return d.Left;
                case 38:
                    return d.Up;
                case 39:
                    return d.Right;
                case 40:
                    return d.Down;
                case 18:
                    return d.Alt;
                case 192:
                    return d.Backquote;
                case 220:
                    return d.Backslash;
                case 8:
                    return d.Backspace;
                case 20:
                    return d.CapsLock;
                case 188:
                    return d.Comma;
                case 15:
                    return d.Command;
                case 17:
                    return d.Control;
                case 46:
                    return d.Delete;
                case 35:
                    return d.End;
                case 13:
                    return d.Enter;
                case 187:
                    return d.Equals;
                case 27:
                    return d.Escape;
                case 36:
                    return d.Home;
                case 45:
                    return d.Insert;
                case 219:
                    return d.LeftBracket;
                case 189:
                    return d.Minus;
                case 34:
                    return d.PageDown;
                case 33:
                    return d.PageUp;
                case 190:
                    return d.Period;
                case 222:
                    return d.Quote;
                case 221:
                    return d.RightBracket;
                case 186:
                    return d.Semicolon;
                case 16:
                    return d.Shift;
                case 191:
                    return d.Slash;
                case 32:
                    return d.Space;
                case 9:
                    return d.Tab;
                case 16777238:
                    return d.Back;
                case 16777234:
                    return d.Menu;
                case 16777247:
                    return d.Search
            }
            return d.Unknown(a)
        };
    Ea.toKeyCode = function(a) {
        switch (a[1]) {
            case 0:
                return 65;
            case 1:
                return 66;
            case 2:
                return 67;
            case 3:
                return 68;
            case 4:
                return 69;
            case 5:
                return 70;
            case 6:
                return 71;
            case 7:
                return 72;
            case 8:
                return 73;
            case 9:
                return 74;
            case 10:
                return 75;
            case 11:
                return 76;
            case 12:
                return 77;
            case 13:
                return 78;
            case 14:
                return 79;
            case 15:
                return 80;
            case 16:
                return 81;
            case 17:
                return 82;
            case 18:
                return 83;
            case 19:
                return 84;
            case 20:
                return 85;
            case 21:
                return 86;
            case 22:
                return 87;
            case 23:
                return 88;
            case 24:
                return 89;
            case 25:
                return 90;
            case 26:
                return 48;
            case 27:
                return 49;
            case 28:
                return 50;
            case 29:
                return 51;
            case 30:
                return 52;
            case 31:
                return 53;
            case 32:
                return 54;
            case 33:
                return 55;
            case 34:
                return 56;
            case 35:
                return 57;
            case 36:
                return 96;
            case 37:
                return 97;
            case 38:
                return 98;
            case 39:
                return 99;
            case 40:
                return 100;
            case 41:
                return 101;
            case 42:
                return 102;
            case 43:
                return 103;
            case 44:
                return 104;
            case 45:
                return 105;
            case 46:
                return 107;
            case 47:
                return 110;
            case 48:
                return 111;
            case 49:
                return 108;
            case 50:
                return 106;
            case 51:
                return 109;
            case 52:
                return 112;
            case 53:
                return 113;
            case 54:
                return 114;
            case 55:
                return 115;
            case 56:
                return 116;
            case 57:
                return 117;
            case 58:
                return 118;
            case 59:
                return 119;
            case 60:
                return 120;
            case 61:
                return 121;
            case 62:
                return 122;
            case 63:
                return 123;
            case 64:
                return 124;
            case 65:
                return 125;
            case 66:
                return 126;
            case 67:
                return 37;
            case 68:
                return 38;
            case 69:
                return 39;
            case 70:
                return 40;
            case 71:
                return 18;
            case 72:
                return 192;
            case 73:
                return 220;
            case 74:
                return 8;
            case 75:
                return 20;
            case 76:
                return 188;
            case 77:
                return 15;
            case 78:
                return 17;
            case 79:
                return 46;
            case 80:
                return 35;
            case 81:
                return 13;
            case 82:
                return 187;
            case 83:
                return 27;
            case 84:
                return 36;
            case 85:
                return 45;
            case 86:
                return 219;
            case 87:
                return 189;
            case 88:
                return 34;
            case 89:
                return 33;
            case 90:
                return 190;
            case 91:
                return 222;
            case 92:
                return 221;
            case 93:
                return 186;
            case 94:
                return 16;
            case 95:
                return 191;
            case 96:
                return 32;
            case 97:
                return 9;
            case 98:
                return 16777238;
            case 99:
                return 16777234;
            case 100:
                return 16777247;
            case 101:
                return a[2]
        }
    };
    Ra = function() {
        this._updateVisitor = new ia.UpdateVisitor;
        this._drawVisitor = new ia.DrawVisitor;
        this._tickables = []
    };
    h["flambe.platform.MainLoop"] = Ra;
    Ra.__name__ = ["flambe", "platform", "MainLoop"];
    Ra.prototype = {
        addTickable: function(a) {
            this._tickables.push(a)
        },
        render: function(a) {
            var b = a.willRender();
            null != b && (this._drawVisitor.drawCtx = b, A.root.visit(this._drawVisitor, !1, !0), a.didRender())
        },
        update: function(a) {
            if (!(0 >= a)) {
                1 < a && (a = 1);
                for (var b = 0; b < this._tickables.length;) {
                    var c = this._tickables[b];
                    null == c || c.update(a) ? this._tickables.splice(b, 1) : ++b
                }
                this._updateVisitor.dt = a;
                A.root.visit(this._updateVisitor, !0, !0)
            }
        },
        __class__: Ra
    };
    ia = {
        UpdateVisitor: function() {}
    };
    h["flambe.platform._MainLoop.UpdateVisitor"] = ia.UpdateVisitor;
    ia.UpdateVisitor.__name__ = ["flambe", "platform", "_MainLoop", "UpdateVisitor"];
    ia.UpdateVisitor.__interfaces__ = [fc];
    ia.UpdateVisitor.prototype = {
        acceptComponent: function(a) {
            a.onUpdate(this.dt)
        },
        leaveEntity: function() {},
        enterEntity: function() {
            return !0
        },
        __class__: ia.UpdateVisitor
    };
    ia.DrawVisitor = function() {};
    h["flambe.platform._MainLoop.DrawVisitor"] = ia.DrawVisitor;
    ia.DrawVisitor.__name__ = ["flambe", "platform", "_MainLoop", "DrawVisitor"];
    ia.DrawVisitor.__interfaces__ = [fc];
    ia.DrawVisitor.prototype = {
        drawSprite: function(a) {
            a = a._compMap.Sprite;
            if (null == a) return !0;
            var b = a.alpha._value;
            if (!a.visible._value || 0 >= b) return !1;
            this.drawCtx.save();
            1 > b && this.drawCtx.multiplyAlpha(b);
            null != a.blendMode && this.drawCtx.setBlendMode(a.blendMode);
            var b = a.x._value,
                c = a.y._value;
            (0 != b || 0 != c) && this.drawCtx.translate(b, c);
            b = a.rotation._value;
            0 != b && this.drawCtx.rotate(b);
            b = a.scaleX._value;
            c = a.scaleY._value;
            (1 != b || 1 != c) && this.drawCtx.scale(b, c);
            b = a.anchorX._value;
            c = a.anchorY._value;
            (0 != b || 0 != c) && this.drawCtx.translate(-b, -c);
            a.draw(this.drawCtx);
            return !0
        },
        acceptComponent: function() {},
        leaveEntity: function(a) {
            null != a._compMap.Sprite && this.drawCtx.restore()
        },
        enterEntity: function(a) {
            var b = this.drawSprite(a),
                c = a._compMap.Director;
            if (null != c && b) {
                a = 0;
                for (c =
                    c.visibleScenes; a < c.length;) {
                    var e = c[a];
                    ++a;
                    e.visit(this, !1, !0)
                }
            }
            return b
        },
        __class__: ia.DrawVisitor
    };
    oc = function() {};
    h["flambe.platform.ManifestBuilder"] = oc;
    oc.__name__ = ["flambe", "platform", "ManifestBuilder"];
    Fa = function() {};
    h["flambe.platform.MouseCodes"] = Fa;
    Fa.__name__ = ["flambe", "platform", "MouseCodes"];
    Fa.toButton = function(a) {
        switch (a) {
            case 0:
                return R.Left;
            case 1:
                return R.Middle;
            case 2:
                return R.Right
        }
        return R.Unknown(a)
    };
    Fa.toButtonCode = function(a) {
        switch (a[1]) {
            case 0:
                return 0;
            case 1:
                return 1;
            case 2:
                return 2;
            case 3:
                return a[2]
        }
    };
    ub = function() {};
    h["flambe.platform.Renderer"] = ub;
    ub.__name__ = ["flambe", "platform", "Renderer"];
    ub.prototype = {
        __class__: ub
    };
    Xa = function() {};
    h["flambe.platform.Tickable"] = Xa;
    Xa.__name__ = ["flambe", "platform", "Tickable"];
    Xa.prototype = {
        __class__: Xa
    };
    m.CanvasDrawingContext = function(a) {
        this._canvasCtx = a.getContext("2d");
        this._canvasCtx.fillStyle = "#ffffff";
        this._canvasCtx.fillRect(0, 0, a.width, a.height)
    };
    h["flambe.platform.html.CanvasDrawingContext"] = m.CanvasDrawingContext;
    m.CanvasDrawingContext.__name__ = ["flambe", "platform", "html", "CanvasDrawingContext"];
    m.CanvasDrawingContext.__interfaces__ = [Ib];
    m.CanvasDrawingContext.prototype = {
        setBlendMode: function(a) {
            var b;
            switch (a[1]) {
                case 0:
                    b = "source-over";
                    break;
                case 1:
                    b = "lighter"
            }
            this._canvasCtx.globalCompositeOperation = b
        },
        multiplyAlpha: function(a) {
            this._canvasCtx.globalAlpha *= a
        },
        fillRect: function(a, b, c, e, d) {
            this._canvasCtx.fillStyle = "#" + ("00000" + a.toString(16)).slice(-6);
            this._canvasCtx.fillRect(b | 0, c | 0, e | 0, d | 0)
        },
        drawPattern: function(a,
            b, c, e, d) {
            null == a.pattern && (a.pattern = this._canvasCtx.createPattern(a.image, "repeat"));
            this._canvasCtx.fillStyle = a.pattern;
            this._canvasCtx.fillRect(b | 0, c | 0, e | 0, d | 0)
        },
        drawSubImage: function(a, b, c, e, d, f, g) {
            this._canvasCtx.drawImage(a.image, e | 0, d | 0, f | 0, g | 0, b | 0, c | 0, f | 0, g | 0)
        },
        drawImage: function(a, b, c) {
            this._canvasCtx.drawImage(a.image, b, c)
        },
        restore: function() {
            this._canvasCtx.restore()
        },
        rotate: function(a) {
            this._canvasCtx.rotate(3.141592653589793 * a / 180)
        },
        scale: function(a, b) {
            this._canvasCtx.scale(a, b)
        },
        translate: function(a,
            b) {
            this._canvasCtx.translate(a | 0, b | 0)
        },
        save: function() {
            this._canvasCtx.save()
        },
        __class__: m.CanvasDrawingContext
    };
    m.CanvasRenderer = function(a) {
        this._drawCtx = new m.CanvasDrawingContext(a)
    };
    h["flambe.platform.html.CanvasRenderer"] = m.CanvasRenderer;
    m.CanvasRenderer.__name__ = ["flambe", "platform", "html", "CanvasRenderer"];
    m.CanvasRenderer.__interfaces__ = [ub];
    m.CanvasRenderer.prototype = {
        didRender: function() {},
        willRender: function() {
            return this._drawCtx
        },
        uploadTexture: function() {},
        __class__: m.CanvasRenderer
    };
    m.HtmlAssetPackLoader = function(a) {
        sa.call(this, a)
    };
    h["flambe.platform.html.HtmlAssetPackLoader"] = m.HtmlAssetPackLoader;
    m.HtmlAssetPackLoader.__name__ = ["flambe", "platform", "html", "HtmlAssetPackLoader"];
    m.HtmlAssetPackLoader.detectAudioFormats = function() {
        var a = B.document.createElement("audio");
        if (null == a || null == a.canPlayType) return [];
        for (var b = [{
                    extension: "m4a",
                    type: "audio/mp4; codecs=mp4a"
                }, {
                    extension: "mp3",
                    type: "audio/mpeg"
                }, {
                    extension: "ogg",
                    type: "audio/ogg; codecs=vorbis"
                }, {
                    extension: "wav",
                    type: "audio/wav"
                }],
                c = [], e = 0; e < b.length;) {
            var d = b[e];
            ++e;
            "" != a.canPlayType(d.type) && c.push(d.extension)
        }
        return c
    };
    m.HtmlAssetPackLoader.__super__ = sa;
    m.HtmlAssetPackLoader.prototype = w(sa.prototype, {
        handleLoad: function(a, b) {
            this.handleProgress(a, a.bytes);
            sa.prototype.handleLoad.call(this, a, b)
        },
        getAudioFormats: function() {
            null == m.HtmlAssetPackLoader._audioFormats && (m.HtmlAssetPackLoader._audioFormats = m.HtmlAssetPackLoader.detectAudioFormats());
            return m.HtmlAssetPackLoader._audioFormats
        },
        loadEntry: function(a) {
            var b = this;
            switch (a.type[1]) {
                case 0:
                    var c = new Image;
                    c.onload = function() {
                        c.onload = null;
                        c.onerror = null;
                        var e = new m.HtmlTexture;
                        if (m.HtmlAssetPackLoader.CANVAS_TEXTURES) {
                            var d = B.document.createElement("canvas");
                            d.width = c.width;
                            d.height = c.height;
                            d.getContext("2d").drawImage(c, 0, 0);
                            c = null;
                            e.image = d
                        } else e.image = c;
                        m.HtmlPlatform.instance.renderer.uploadTexture(e);
                        b.handleLoad(a, e)
                    };
                    c.onerror = function() {
                        b.handleError("Failed to load image: " + a.url)
                    };
                    c.src = a.url;
                    break;
                case 1:
                    var e = B.document.createElement("audio");
                    e.preload = "auto";
                    var d = ++m.HtmlAssetPackLoader._mediaRefCount;
                    null == m.HtmlAssetPackLoader._mediaElements && (m.HtmlAssetPackLoader._mediaElements = new oa);
                    m.HtmlAssetPackLoader._mediaElements.set(d, e);
                    var f = new Wa;
                    f.addDisposingListener(e, "canplaythrough", function() {
                        m.HtmlAssetPackLoader._mediaElements.remove(d);
                        b.handleLoad(a, new m.HtmlSound(e))
                    });
                    f.addDisposingListener(e, "error", function() {
                        m.HtmlAssetPackLoader._mediaElements.remove(d);
                        b.handleError("Failed to load audio " + a.url + ", code=" + u.string(e.error.code))
                    });
                    e.src = a.url;
                    e.load();
                    break;
                case 2:
                    f = new cc(a.url), f.onData = function(c) {
                        b.handleLoad(a, c)
                    }, f.onError = function(c) {
                        b.handleError("Failed to load data " + a.url + ", error=" + c)
                    }, f.request(!1)
            }
        },
        __class__: m.HtmlAssetPackLoader
    });
    m.HtmlMouse = function(a, b) {
        Z.call(this, a);
        this._canvas = b
    };
    h["flambe.platform.html.HtmlMouse"] = m.HtmlMouse;
    m.HtmlMouse.__name__ = ["flambe", "platform", "html", "HtmlMouse"];
    m.HtmlMouse.__super__ = Z;
    m.HtmlMouse.prototype = w(Z.prototype, {
        setCursor: function(a) {
            var b;
            switch (a[1]) {
                case 0:
                    b = "";
                    break;
                case 1:
                    b = "pointer";
                    break;
                case 2:
                    b = "none"
            }
            this._canvas.style.cursor = b;
            return Z.prototype.setCursor.call(this, a)
        },
        __class__: m.HtmlMouse
    });
    m.HtmlSound = function(a) {
        this.audioElement = a
    };
    h["flambe.platform.html.HtmlSound"] = m.HtmlSound;
    m.HtmlSound.__name__ = ["flambe", "platform", "html", "HtmlSound"];
    m.HtmlSound.__interfaces__ = [rb];
    m.HtmlSound.prototype = {
        getDuration: function() {
            return this.audioElement.duration
        },
        loop: function(a) {
            null == a && (a = 1);
            return new m._HtmlSound.HtmlPlayback(this, a, !0)
        },
        play: function(a) {
            null ==
                a && (a = 1);
            return new m._HtmlSound.HtmlPlayback(this, a, !1)
        },
        __class__: m.HtmlSound
    };
    m._HtmlSound = {};
    m._HtmlSound.HtmlPlayback = function(a, b, c) {
        var e = this;
        this._sound = a;
        this._tickableAdded = !1;
        this.volume = new N(b, function(a) {
            e._clonedElement.volume = a
        });
        (new ka("\\b(iPhone|iPod|iPad|Android)\\b", "")).match(B.window.navigator.userAgent) ? this._clonedElement = a.audioElement : (this._clonedElement = B.document.createElement("audio"), this._clonedElement.src = a.audioElement.src);
        this._clonedElement.volume = b;
        this._clonedElement.loop =
            c;
        this.playAudio()
    };
    h["flambe.platform.html._HtmlSound.HtmlPlayback"] = m._HtmlSound.HtmlPlayback;
    m._HtmlSound.HtmlPlayback.__name__ = ["flambe", "platform", "html", "_HtmlSound", "HtmlPlayback"];
    m._HtmlSound.HtmlPlayback.__interfaces__ = [Xa, Da];
    m._HtmlSound.HtmlPlayback.prototype = {
        playAudio: function() {
            this._clonedElement.play();
            this._tickableAdded || (m.HtmlPlatform.instance.mainLoop.addTickable(this), this._tickableAdded = !0)
        },
        dispose: function() {
            this.setPaused(!0)
        },
        update: function(a) {
            this.volume.update(a);
            return this._clonedElement.ended ||
                this._clonedElement.paused ? (this._tickableAdded = !1, !0) : !1
        },
        getPosition: function() {
            return this._clonedElement.currentTime
        },
        isEnded: function() {
            return this._clonedElement.ended
        },
        setPaused: function(a) {
            this._clonedElement.paused != a && (a ? this._clonedElement.pause() : this.playAudio());
            return a
        },
        isPaused: function() {
            return this._clonedElement.paused
        },
        getSound: function() {
            return this._sound
        },
        __class__: m._HtmlSound.HtmlPlayback
    };
    m.HtmlStage = function(a) {
        var b = this;
        this._canvas = a;
        this.resize = new X;
        this.scaleFactor =
            m.HtmlStage.computeScaleFactor(a);
        1 != this.scaleFactor && (m.HtmlUtil.setVendorStyle(this._canvas, "transform-origin", "top left"), m.HtmlUtil.setVendorStyle(this._canvas, "transform", "scale(" + 1 / this.scaleFactor + ")"));
        m.HtmlUtil.SHOULD_HIDE_MOBILE_BROWSER && (window.addEventListener("orientationchange", function() {
            m.HtmlUtil.callLater(q(b, b.hideMobileBrowser), 200)
        }, !1), this.hideMobileBrowser());
        window.addEventListener("resize", q(this, this.onWindowResize), !1);
        this.onWindowResize();
        this.orientation = new aa(null);
        null != window.orientation && (window.addEventListener("orientationchange", q(this, this.onOrientationChange), !1), this.onOrientationChange());
        this.fullscreen = new aa(!1);
        m.HtmlUtil.addVendorListener(B.document, "fullscreenchange", function() {
            b.updateFullscreen()
        }, !1);
        this.updateFullscreen()
    };
    h["flambe.platform.html.HtmlStage"] = m.HtmlStage;
    m.HtmlStage.__name__ = ["flambe", "platform", "html", "HtmlStage"];
    m.HtmlStage.__interfaces__ = [Kb];
    m.HtmlStage.computeScaleFactor = function(a) {
        var b = window.devicePixelRatio;
        null ==
            b && (b = 1);
        a = a.getContext("2d");
        a = m.HtmlUtil.loadExtension("backingStorePixelRatio", a).value;
        null == a && (a = 1);
        b /= a;
        a = screen.height;
        return 1024 < b * screen.width || 1024 < b * a ? 1 : b
    };
    m.HtmlStage.prototype = {
        updateFullscreen: function() {
            this.fullscreen.set(!0 == m.HtmlUtil.loadFirstExtension(["fullscreen", "fullScreen", "isFullScreen"], B.document).value)
        },
        onOrientationChange: function() {
            this.orientation.set(m.HtmlUtil.orientation(window.orientation))
        },
        hideMobileBrowser: function() {
            var a = this,
                b = B.document.documentElement.style;
            b.height = B.window.innerHeight + 100 + "px";
            b.width = B.window.innerWidth + "px";
            b.overflow = "visible";
            m.HtmlUtil.callLater(function() {
                m.HtmlUtil.hideMobileBrowser();
                m.HtmlUtil.callLater(function() {
                    b.height = B.window.innerHeight + "px";
                    a.onWindowResize()
                }, 100)
            })
        },
        resizeCanvas: function(a, b) {
            var c = this.scaleFactor * a,
                e = this.scaleFactor * b;
            if (this._canvas.width == c && this._canvas.height == e) return !1;
            this._canvas.width = c;
            this._canvas.height = e;
            this.resize.emit();
            return !0
        },
        onWindowResize: function() {
            var a = this._canvas.parentNode.getBoundingClientRect();
            this.resizeCanvas(a.width, a.height)
        },
        requestFullscreen: function(a) {
            null == a && (a = !0);
            if (a) {
                var a = B.document.documentElement,
                    b = m.HtmlUtil.loadFirstExtension(["requestFullscreen", "requestFullScreen"], a).value;
                null != b && b.apply(a, [])
            } else a = m.HtmlUtil.loadFirstExtension(["cancelFullscreen", "cancelFullScreen"], B.document).value, null != a && a.apply(B.document, [])
        },
        requestResize: function(a, b) {
            if (this.resizeCanvas(a, b)) {
                var c = this._canvas.parentNode;
                c.style.width = a + "px";
                c.style.height = b + "px"
            }
        },
        unlockOrientation: function() {},
        lockOrientation: function() {},
        isFullscreenSupported: function() {
            return !0 == m.HtmlUtil.loadFirstExtension(["fullscreenEnabled", "fullScreenEnabled"], B.document).value
        },
        getHeight: function() {
            return this._canvas.height
        },
        getWidth: function() {
            return this._canvas.width
        },
        __class__: m.HtmlStage
    };
    m.HtmlStorage = function(a) {
        this._storage = a
    };
    h["flambe.platform.html.HtmlStorage"] = m.HtmlStorage;
    m.HtmlStorage.__name__ = ["flambe", "platform", "html", "HtmlStorage"];
    m.HtmlStorage.__interfaces__ = [qb];
    m.HtmlStorage.prototype = {
        clear: function() {
            try {
                this._storage.clear()
            } catch (a) {
                null
            }
        },
        remove: function(a) {
            try {
                this._storage.removeItem("flambe:" + a)
            } catch (b) {
                null
            }
        },
        get: function(a) {
            var b;
            try {
                b = this._storage.getItem("flambe:" + a)
            } catch (c) {
                return null
            }
            if (null != b) try {
                return V.run(b)
            } catch (e) {
                null
            }
            return null
        },
        set: function(a, b) {
            var c;
            try {
                var e = new na;
                e.useCache = !0;
                e.useEnumIndex = !1;
                e.serialize(b);
                c = e.toString()
            } catch (d) {
                return !1
            }
            try {
                this._storage.setItem("flambe:" + a, c)
            } catch (f) {
                return !1
            }
            return !0
        },
        isSupported: function() {
            return !0
        },
        __class__: m.HtmlStorage
    };
    m.HtmlTexture = function() {};
    h["flambe.platform.html.HtmlTexture"] = m.HtmlTexture;
    m.HtmlTexture.__name__ = ["flambe", "platform", "html", "HtmlTexture"];
    m.HtmlTexture.__interfaces__ = [Lb];
    m.HtmlTexture.prototype = {
        getHeight: function() {
            return this.image.height
        },
        getWidth: function() {
            return this.image.width
        },
        __class__: m.HtmlTexture
    };
    m.HtmlUtil = function() {};
    h["flambe.platform.html.HtmlUtil"] = m.HtmlUtil;
    m.HtmlUtil.__name__ = ["flambe", "platform", "html", "HtmlUtil"];
    m.HtmlUtil.callLater = function(a,
        b) {
        null == b && (b = 0);
        B.window.setTimeout(a, b)
    };
    m.HtmlUtil.hideMobileBrowser = function() {
        B.window.scrollTo(1, 0)
    };
    m.HtmlUtil.loadExtension = function(a, b) {
        null == b && (b = B.window);
        var c = pa.field(b, a);
        if (null != c) return {
            prefix: null,
            field: a,
            value: c
        };
        for (var c = a.charAt(0).toUpperCase() + G.substr(a, 1, null), e = 0, d = m.HtmlUtil.VENDOR_PREFIXES; e < d.length;) {
            var f = d[e];
            ++e;
            var g = f + c,
                h = pa.field(b, g);
            if (null != h) return {
                prefix: f,
                field: g,
                value: h
            }
        }
        return {
            prefix: null,
            field: null,
            value: null
        }
    };
    m.HtmlUtil.loadFirstExtension = function(a,
        b) {
        for (var c = 0; c < a.length;) {
            var e = a[c];
            ++c;
            e = m.HtmlUtil.loadExtension(e, b);
            if (null != e.field) return e
        }
        return {
            prefix: null,
            field: null,
            value: null
        }
    };
    m.HtmlUtil.polyfill = function(a, b) {
        null == b && (b = B.window);
        var c = m.HtmlUtil.loadExtension(a, b).value;
        if (null == c) return !1;
        b[a] = c;
        return !0
    };
    m.HtmlUtil.setVendorStyle = function(a, b, c) {
        for (var a = a.style, e = 0, d = m.HtmlUtil.VENDOR_PREFIXES; e < d.length;) {
            var f = d[e];
            ++e;
            a.setProperty("-" + f + "-" + b, c)
        }
        a.setProperty(b, c)
    };
    m.HtmlUtil.addVendorListener = function(a, b, c, e) {
        for (var d =
                0, f = m.HtmlUtil.VENDOR_PREFIXES; d < f.length;) {
            var g = f[d];
            ++d;
            a.addEventListener(g + b, c, e)
        }
        a.addEventListener(b, c, e)
    };
    m.HtmlUtil.orientation = function(a) {
        switch (a) {
            case -90:
            case 90:
                return ca.Landscape;
            default:
                return ca.Portrait
        }
    };
    hc = function() {};
    Pa = void 0;
    h["flambe.web.Web"] = hc;
    hc.__name__ = ["flambe", "web", "Web"];
    hc.prototype = {
        __class__: hc
    };
    m.HtmlWeb = function(a) {
        this._container = a
    };
    h["flambe.platform.html.HtmlWeb"] = m.HtmlWeb;
    m.HtmlWeb.__name__ = ["flambe", "platform", "html", "HtmlWeb"];
    m.HtmlWeb.__interfaces__ = [hc];
    m.HtmlWeb.prototype = {
        openBrowser: function(a) {
            B.window.open(a, "_blank")
        },
        createView: function(a, b, c, e) {
            var d = B.document.createElement("iframe");
            d.style.position = "absolute";
            d.style.border = "0";
            d.scrolling = "no";
            this._container.appendChild(d);
            a = new m.HtmlWebView(d, a, b, c, e);
            m.HtmlPlatform.instance.mainLoop.addTickable(a);
            return a
        },
        isSupported: function() {
            return !0
        },
        __class__: m.HtmlWeb
    };
    Pa = function() {};
    h["flambe.web.WebView"] = Pa;
    Pa.__name__ = ["flambe", "web", "WebView"];
    Pa.__interfaces__ = [ta];
    Pa.prototype = {
        __class__: Pa
    };
    m.HtmlWebView = function(a, b, c, e, d) {
        var f = this;
        this.iframe = a;
        a = function() {
            f.updateBounds()
        };
        this.x = new N(b, a);
        this.y = new N(c, a);
        this.width = new N(e, a);
        this.height = new N(d, a);
        this.updateBounds();
        this.url = new aa(null, function(a) {
            f.loadUrl(a)
        });
        this.error = new C
    };
    h["flambe.platform.html.HtmlWebView"] = m.HtmlWebView;
    m.HtmlWebView.__name__ = ["flambe", "platform", "html", "HtmlWebView"];
    m.HtmlWebView.__interfaces__ = [Xa, Pa];
    m.HtmlWebView.prototype = {
        loadUrl: function(a) {
            null != this.iframe && (this.iframe.src =
                a)
        },
        updateBounds: function() {
            null != this.iframe && (this.iframe.style.left = this.x._value + "px", this.iframe.style.top = this.y._value + "px", this.iframe.width = this.width._value, this.iframe.height = this.height._value)
        },
        update: function(a) {
            this.x.update(a);
            this.y.update(a);
            this.width.update(a);
            this.height.update(a);
            return null == this.iframe
        },
        dispose: function() {
            null != this.iframe && (this.iframe.parentNode.removeChild(this.iframe), this.iframe = null)
        },
        __class__: m.HtmlWebView
    };
    gc = function() {
        this.scenes = [];
        this.visibleScenes = []
    };
    h["flambe.scene.Director"] = gc;
    gc.__name__ = ["flambe", "scene", "Director"];
    gc.__super__ = L;
    gc.prototype = w(L.prototype, {
        getName: function() {
            return "Director"
        },
        visit: function(a) {
            a.acceptComponent(this);
            0 < this.scenes.length && this.scenes[this.scenes.length - 1].visit(a, !0, !0)
        },
        onDispose: function() {
            for (var a = 0, b = this.scenes; a < b.length;) {
                var c = b[a];
                ++a;
                c.dispose()
            }
            this.scenes = []
        },
        __class__: gc
    });
    db = function(a) {
        x.call(this);
        this.symbol = a;
        this.anchorX.set(a.anchorX);
        this.anchorY.set(a.anchorY)
    };
    h["flambe.swf.BitmapSprite"] =
        db;
    db.__name__ = ["flambe", "swf", "BitmapSprite"];
    db.__super__ = x;
    db.prototype = w(x.prototype, {
        getName: function() {
            return "Sprite"
        },
        getNaturalHeight: function() {
            return this.symbol.height
        },
        getNaturalWidth: function() {
            return this.symbol.width
        },
        draw: function(a) {
            a.drawSubImage(this.symbol.atlas, 0, 0, this.symbol.x, this.symbol.y, this.symbol.width, this.symbol.height)
        },
        __class__: db
    });
    Ga = function(a, b) {
        this._name = a.symbol;
        this.atlas = b;
        var c = a.rect;
        this.x = c[0];
        this.y = c[1];
        this.width = c[2];
        this.height = c[3];
        c = a.offset;
        null !=
            c ? (this.anchorX = -c[0], this.anchorY = -c[1]) : this.anchorY = this.anchorX = 0
    };
    h["flambe.swf.BitmapSymbol"] = Ga;
    Ga.__name__ = ["flambe", "swf", "BitmapSymbol"];
    Ga.__interfaces__ = [bb];
    Ga.prototype = {
        getName: function() {
            return this._name
        },
        createSprite: function() {
            return new db(this)
        },
        __class__: Ga
    };
    cb = function(a, b) {
        this._symbols = new H;
        var c = ra.parse(a.loadFile(b + "/library.json"));
        this.frameRate = c.frameRate;
        for (var e = [], d = 0, f = c.movies; d < f.length;) {
            var g = f[d];
            ++d;
            g = new eb(this, g);
            e.push(g);
            this._symbols.set(g.getName(),
                g)
        }
        d = 0;
        for (f = c.atlases; d < f.length;) {
            g = f[d];
            ++d;
            for (var h = a.loadTexture(b + "/" + g.file), c = 0, g = g.textures; c < g.length;) {
                var i = g[c];
                ++c;
                i = new Ga(i, h);
                this._symbols.set(i.getName(), i)
            }
        }
        for (d = 0; d < e.length;) {
            g = e[d];
            ++d;
            f = 0;
            for (c = g.layers; f < c.length;) {
                h = c[f];
                ++f;
                g = 0;
                for (i = h.keyframes; g < i.length;) {
                    var k = i[g];
                    ++g;
                    var m = this._symbols.get(k.symbolName);
                    null != m && (null == h.lastSymbol ? h.lastSymbol = m : h.lastSymbol != m && (h.multipleSymbols = !0), k.symbol = m)
                }
            }
        }
    };
    h["flambe.swf.Library"] = cb;
    cb.__name__ = ["flambe", "swf", "Library"];
    cb.prototype = {
        createSprite: function(a, b) {
            null == b && (b = !0);
            var c = this._symbols.get(a);
            if (null == c) {
                if (b) throw "Missing symbol: " + a;
                return null
            }
            return c.createSprite()
        },
        __class__: cb
    };
    fb = function(a) {
        x.call(this);
        this.symbol = a;
        this.animFinishedPlaying = new C;
        this.speed = new N(1);
        this.isPlaying = !0;
        this._layers = [];
        for (var b = 0, a = a.layers; b < a.length;) {
            var c = a[b];
            ++b;
            this._layers.push(new gb.LayerSprite(c))
        }
        this._position = this._frame = 0;
        this["goto"](1)
    };
    h["flambe.swf.MovieSprite"] = fb;
    fb.__name__ = ["flambe", "swf",
        "MovieSprite"
    ];
    fb.__super__ = x;
    fb.prototype = w(x.prototype, {
        getName: function() {
            return "Sprite"
        },
        setPosition: function(a) {
            return this._position = hb.clamp(a, 0, this.symbol.duration)
        },
        "goto": function(a) {
            if (a < this._frame)
                for (var b = 0, c = this._layers; b < c.length;) {
                    var e = c[b];
                    ++b;
                    e.changedKeyframe = !0;
                    e.keyframeIdx = 0
                }
            b = 0;
            for (c = this._layers; b < c.length;) e = c[b], ++b, e.composeFrame(a);
            this._frame = a
        },
        stop: function() {
            this.isPlaying = !1
        },
        play: function(a) {
            null == a && (a = !1);
            this.isPlaying = !0;
            a && (this._position = 0, this["goto"](0))
        },
        onUpdate: function(a) {
            x.prototype.onUpdate.call(this, a);
            if (this.isPlaying && (this.speed.update(a), this._position += this.speed._value * a, this._position > this.symbol.duration && (this._position %= this.symbol.duration, this.animFinishedPlaying.emit(this)), this.isPlaying)) this["goto"](this._position * this.symbol.frameRate)
        },
        onRemoved: function() {
            x.prototype.onRemoved.call(this);
            for (var a = 0, b = this._layers; a < b.length;) {
                var c = b[a];
                ++a;
                this.owner.removeChild(c.owner)
            }
        },
        onAdded: function() {
            x.prototype.onAdded.call(this);
            for (var a = 0, b = this._layers; a < b.length;) {
                var c = b[a];
                ++a;
                this.owner.addChild((new r).add(c))
            }
        },
        __class__: fb
    });
    gb = {
        LayerSprite: function(a) {
            x.call(this);
            this.changedKeyframe = !1;
            this.keyframeIdx = 0;
            this._keyframes = a.keyframes;
            this._content = new r;
            if (a.multipleSymbols) {
                this._sprites = [];
                for (var a = 0, b = this._keyframes; a < b.length;) {
                    var c = b[a];
                    ++a;
                    this._sprites.push(c.symbol.createSprite())
                }
                this._content.add(this._sprites[0])
            } else null != a.lastSymbol && this._content.add(a.lastSymbol.createSprite())
        }
    };
    h["flambe.swf._MovieSprite.LayerSprite"] =
        gb.LayerSprite;
    gb.LayerSprite.__name__ = ["flambe", "swf", "_MovieSprite", "LayerSprite"];
    gb.LayerSprite.__super__ = x;
    gb.LayerSprite.prototype = w(x.prototype, {
        getName: function() {
            return "Sprite"
        },
        composeFrame: function(a) {
            for (var b = a | 0; this.keyframeIdx < this._keyframes.length - 1 && this._keyframes[this.keyframeIdx + 1].index <= b;) ++this.keyframeIdx, this.changedKeyframe = !0;
            this.changedKeyframe && null != this._sprites && this._content.add(this._sprites[this.keyframeIdx]);
            var c = this._keyframes[this.keyframeIdx];
            if (this.keyframeIdx ==
                this._keyframes.length - 1 || c.index == b) this.x.set(c.x), this.y.set(c.y), this.scaleX.set(c.scaleX), this.scaleY.set(c.scaleY), this.rotation.set(c.rotation), this.alpha.set(c.alpha);
            else {
                a = (a - c.index) / c.duration;
                b = c.ease;
                if (0 != b) {
                    var e;
                    0 > b ? (e = 1 - a, e = 1 - e * e, b = -b) : e = a * a;
                    a = b * e + (1 - b) * a
                }
                b = this._keyframes[this.keyframeIdx + 1];
                this.x.set(c.x + (b.x - c.x) * a);
                this.y.set(c.y + (b.y - c.y) * a);
                this.scaleX.set(c.scaleX + (b.scaleX - c.scaleX) * a);
                this.scaleY.set(c.scaleY + (b.scaleY - c.scaleY) * a);
                this.rotation.set(c.rotation + (b.rotation -
                    c.rotation) * a);
                this.alpha.set(c.alpha + (b.alpha - c.alpha) * a)
            }
            this.anchorX.set(c.pivotX);
            this.anchorY.set(c.pivotY);
            this.visible.set(c.visible)
        },
        onAdded: function() {
            x.prototype.onAdded.call(this);
            this.owner.addChild(this._content)
        },
        __class__: gb.LayerSprite
    });
    eb = function(a, b) {
        this._name = b.id;
        this.frameRate = a.frameRate;
        this.frames = 0;
        this.layers = [];
        for (var c = 0, e = b.layers; c < e.length;) {
            var d = e[c];
            ++c;
            d = new Fb(d);
            this.frames = Math.max(d.getFrames(), this.frames);
            this.layers.push(d)
        }
        this.duration = this.frames /
            this.frameRate
    };
    h["flambe.swf.MovieSymbol"] = eb;
    eb.__name__ = ["flambe", "swf", "MovieSymbol"];
    eb.__interfaces__ = [bb];
    eb.prototype = {
        createSprite: function() {
            return new fb(this)
        },
        getName: function() {
            return this._name
        },
        __class__: eb
    };
    Fb = function(a) {
        this.name = a.name;
        this.multipleSymbols = !1;
        this.keyframes = [];
        for (var b = null, c = 0, a = a.keyframes; c < a.length;) {
            var e = a[c];
            ++c;
            b = new Gb(e, b);
            this.keyframes.push(b)
        }
    };
    h["flambe.swf.MovieLayer"] = Fb;
    Fb.__name__ = ["flambe", "swf", "MovieLayer"];
    Fb.prototype = {
        getFrames: function() {
            var a =
                this.keyframes[this.keyframes.length - 1];
            return a.index + (a.duration | 0)
        },
        __class__: Fb
    };
    Gb = function(a, b) {
        this.index = null != b ? b.index + b.duration : 0;
        this.duration = a.duration;
        this.label = a.label;
        this.symbolName = a.ref;
        this.y = this.x = 0;
        this.scaleY = this.scaleX = 1;
        this.pivotY = this.pivotX = this.rotation = 0;
        this.alpha = 1;
        this.visible = !0;
        this.ease = 0;
        if (null != this.symbolName) {
            var c = a.loc;
            null != c && (this.x = c[0], this.y = c[1]);
            c = a.scale;
            null != c && (this.scaleX = c[0], this.scaleY = c[1]);
            c = a.skew;
            if (null != c) {
                var e = c[0];
                e != c[1] && null;
                this.rotation = 180 * e / 3.141592653589793
            }
            c = a.pivot;
            null != c && (this.pivotX = c[0], this.pivotY = c[1]);
            null != a.alpha && (this.alpha = a.alpha);
            null != a.visible && (this.visible = a.visible);
            null != a.ease && (this.ease = a.ease)
        }
    };
    h["flambe.swf.MovieKeyframe"] = Gb;
    Gb.__name__ = ["flambe", "swf", "MovieKeyframe"];
    Gb.prototype = {
        __class__: Gb
    };
    pc = function() {};
    h["flambe.util.Assert"] = pc;
    pc.__name__ = ["flambe", "util", "Assert"];
    Ha = function() {
        this.mainSection = new H;
        this.sections = new H
    };
    h["flambe.util.Config"] = Ha;
    Ha.__name__ = ["flambe",
        "util", "Config"
    ];
    Ha.parse = function(a) {
        for (var b = new Ha, c = new ka("^\\s*;", ""), e = new ka("^\\s*\\[\\s*([^\\]]*)\\s*\\]", ""), d = new ka("^\\s*([\\w\\.\\-_]+)\\s*=\\s*(.*)", ""), f = b.mainSection, g = 0, a = (new ka("\r\n|\r|\n", "g")).split(a); g < a.length;) {
            var h = a[g];
            ++g;
            if (!c.match(h))
                if (e.match(h)) h = e.matched(1), b.sections.exists(h) ? f = b.sections.get(h) : (f = new H, b.sections.set(h, f));
                else if (d.match(h)) {
                var h = d.matched(1),
                    i = d.matched(2),
                    k = i.charCodeAt(0);
                if ((34 == k || 39 == k) && i.charCodeAt(i.length - 1) == k) i = G.substr(i,
                    1, i.length - 2);
                f.set(h, i)
            }
        }
        return b
    };
    Ha.prototype = {
        get: function(a) {
            var b = a.indexOf(".");
            if (0 > b) return this.mainSection.get(a);
            var c = this.sections.get(G.substr(a, 0, b));
            return null != c ? c.get(G.substr(a, b + 1, null)) : null
        },
        __class__: Ha
    };
    jc = function() {};
    h["flambe.util.LogHandler"] = jc;
    jc.__name__ = ["flambe", "util", "LogHandler"];
    jc.prototype = {
        __class__: jc
    };
    Ob = function() {
        this.success = new C;
        this.error = new C;
        this.progressChanged = new X;
        this.hasResult = !1;
        this._total = this._progress = 0
    };
    h["flambe.util.Promise"] = Ob;
    Ob.__name__ = ["flambe", "util", "Promise"];
    Ob.prototype = {
        setTotal: function(a) {
            this._total = a;
            this.progressChanged.emit();
            return a
        },
        setProgress: function(a) {
            this._progress = a;
            this.progressChanged.emit();
            return a
        },
        get: function(a) {
            return this.hasResult ? (a(this._result), null) : this.success.connect(a).once()
        },
        setResult: function(a) {
            if (this.hasResult) throw "Promise result already assigned";
            this._result = a;
            this.hasResult = !0;
            this.success.emit(a);
            return a
        },
        getResult: function() {
            if (!this.hasResult) throw "Promise result not yet available";
            return this._result
        },
        __class__: Ob
    };
    X = function(a) {
        null != a && this.connect(a)
    };
    h["flambe.util.Signal0"] = X;
    X.__name__ = ["flambe", "util", "Signal0"];
    X.prototype = {
        createImpl: function() {
            return new ea
        },
        emit: function() {
            null != this._impl && this._impl.emit([])
        },
        connect: function(a, b) {
            null == b && (b = !1);
            null == this._impl && (this._impl = this.createImpl());
            return this._impl.connect(a, b)
        },
        __class__: X
    };
    jb = function(a, b) {
        this._internal_signal = a;
        this._internal_listener = b;
        this.stayInList = !0
    };
    h["flambe.util.SignalConnection"] = jb;
    jb.__name__ = ["flambe", "util", "SignalConnection"];
    jb.__interfaces__ = [ta];
    jb.prototype = {
        dispose: function() {
            null != this._internal_signal && this._internal_signal.disconnect(this)
        },
        once: function() {
            this.stayInList = !1;
            return this
        },
        __class__: jb
    };
    cc = function(a) {
        this.url = a;
        this.headers = new H;
        this.params = new H;
        this.async = !0
    };
    h["haxe.Http"] = cc;
    cc.__name__ = ["haxe", "Http"];
    cc.prototype = {
        onStatus: function() {},
        onError: function() {},
        onData: function() {},
        request: function(a) {
            var b = this,
                c = new qc,
                e = function() {
                    if (4 == c.readyState) {
                        var a;
                        try {
                            a = c.status
                        } catch (e) {
                            a = null
                        }
                        void 0 == a && (a = null);
                        if (null != a) b.onStatus(a);
                        if (null != a && 200 <= a && 400 > a) b.onData(c.responseText);
                        else switch (a) {
                            case null:
                            case void 0:
                                b.onError("Failed to connect or resolve host");
                                break;
                            case 12029:
                                b.onError("Failed to connect to host");
                                break;
                            case 12007:
                                b.onError("Unknown host");
                                break;
                            default:
                                b.onError("Http Error #" + c.status)
                        }
                    }
                };
            this.async && (c.onreadystatechange = e);
            var d = this.postData;
            if (null != d) a = !0;
            else
                for (var f = this.params.keys(); f.hasNext();) var g = f.next(),
                    d = null ==
                    d ? "" : d + "&",
                    d = d + (Ca.urlEncode(g) + "=" + Ca.urlEncode(this.params.get(g)));
            try {
                if (a) c.open("POST", this.url, this.async);
                else if (null != d) {
                    var h = 1 >= this.url.split("?").length;
                    c.open("GET", this.url + (h ? "?" : "&") + d, this.async);
                    d = null
                } else c.open("GET", this.url, this.async)
            } catch (i) {
                this.onError(i.toString());
                return
            }
            null == this.headers.get("Content-Type") && a && null == this.postData && c.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            for (a = this.headers.keys(); a.hasNext();) f = a.next(), c.setRequestHeader(f,
                this.headers.get(f));
            c.send(d);
            this.async || e()
        },
        __class__: cc
    };
    ra = function() {};
    h["haxe.Json"] = ra;
    ra.__name__ = ["haxe", "Json"];
    ra.parse = function(a) {
        return (new ra).doParse(a)
    };
    ra.prototype = {
        parseString: function() {
            for (var a = this.pos, b = new ec;;) {
                var c = this.str.charCodeAt(this.pos++);
                if (34 == c) break;
                if (92 == c) {
                    b.b += G.substr(this.str, a, this.pos - a - 1);
                    c = this.str.charCodeAt(this.pos++);
                    switch (c) {
                        case 114:
                            b.b += String.fromCharCode(13);
                            break;
                        case 110:
                            b.b += String.fromCharCode(10);
                            break;
                        case 116:
                            b.b += String.fromCharCode(9);
                            break;
                        case 98:
                            b.b += String.fromCharCode(8);
                            break;
                        case 102:
                            b.b += String.fromCharCode(12);
                            break;
                        case 47:
                        case 92:
                        case 34:
                            b.b += String.fromCharCode(c);
                            break;
                        case 117:
                            a = u.parseInt("0x" + G.substr(this.str, this.pos, 4));
                            this.pos += 4;
                            b.b += String.fromCharCode(a);
                            break;
                        default:
                            throw "Invalid escape sequence \\" + String.fromCharCode(c) + " at position " + (this.pos - 1);
                    }
                    a = this.pos
                } else if (c != c) throw "Unclosed string";
            }
            b.b += G.substr(this.str, a, this.pos - a - 1);
            return b.b
        },
        parseRec: function() {
            for (;;) switch (this.str.charCodeAt(this.pos++)) {
                case 32:
                case 13:
                case 10:
                case 9:
                    break;
                case 123:
                    for (var a = {}, b = null, c = null;;) {
                        var e = this.str.charCodeAt(this.pos++);
                        switch (e) {
                            case 32:
                            case 13:
                            case 10:
                            case 9:
                                break;
                            case 125:
                                return (null != b || !1 == c) && this.invalidChar(), a;
                            case 58:
                                null == b && this.invalidChar();
                                a[b] = this.parseRec();
                                b = null;
                                c = !0;
                                break;
                            case 44:
                                c ? c = !1 : this.invalidChar();
                                break;
                            case 34:
                                c && this.invalidChar();
                                b = this.parseString();
                                break;
                            default:
                                this.invalidChar()
                        }
                    }
                    break;
                case 91:
                    a = [];
                    for (c = null;;) switch (e = this.str.charCodeAt(this.pos++), e) {
                        case 32:
                        case 13:
                        case 10:
                        case 9:
                            break;
                        case 93:
                            return !1 ==
                                c && this.invalidChar(), a;
                        case 44:
                            c ? c = !1 : this.invalidChar();
                            break;
                        default:
                            c && this.invalidChar(), this.pos--, a.push(this.parseRec()), c = !0
                    }
                    break;
                case 116:
                    c = this.pos;
                    if (114 != this.str.charCodeAt(this.pos++) || 117 != this.str.charCodeAt(this.pos++) || 101 != this.str.charCodeAt(this.pos++)) this.pos = c, this.invalidChar();
                    return !0;
                case 102:
                    c = this.pos;
                    if (97 != this.str.charCodeAt(this.pos++) || 108 != this.str.charCodeAt(this.pos++) || 115 != this.str.charCodeAt(this.pos++) || 101 != this.str.charCodeAt(this.pos++)) this.pos = c, this.invalidChar();
                    return !1;
                case 110:
                    c = this.pos;
                    if (117 != this.str.charCodeAt(this.pos++) || 108 != this.str.charCodeAt(this.pos++) || 108 != this.str.charCodeAt(this.pos++)) this.pos = c, this.invalidChar();
                    return null;
                case 34:
                    return this.parseString();
                case 48:
                case 49:
                case 50:
                case 51:
                case 52:
                case 53:
                case 54:
                case 55:
                case 56:
                case 57:
                case 45:
                    this.pos--;
                    if (!this.reg_float.match(G.substr(this.str, this.pos, null))) throw "Invalid float at position " + this.pos;
                    c = this.reg_float.matched(0);
                    this.pos += c.length;
                    c = u.parseFloat(c);
                    e = c | 0;
                    return e ==
                        c ? e : c;
                default:
                    this.invalidChar()
            }
        },
        invalidChar: function() {
            this.pos--;
            throw "Invalid char " + this.str.charCodeAt(this.pos) + " at position " + this.pos;
        },
        doParse: function(a) {
            this.reg_float = new ka("^-?(0|[1-9][0-9]*)(\\.[0-9]+)?([eE][+-]?[0-9]+)?", "");
            this.str = a;
            this.pos = 0;
            return this.parseRec()
        },
        __class__: ra
    };
    Aa = function() {};
    h["haxe.Md5"] = Aa;
    Aa.__name__ = ["haxe", "Md5"];
    Aa.encode = function(a) {
        return (new Aa).doEncode(a)
    };
    Aa.prototype = {
        doEncode: function(a) {
            for (var a = this.str2blks(a), b = 1732584193, c = -271733879,
                    e = -1732584194, d = 271733878, f = 0; f < a.length;) var g = b,
                h = c,
                i = e,
                k = d,
                b = this.ff(b, c, e, d, a[f], 7, -680876936),
                d = this.ff(d, b, c, e, a[f + 1], 12, -389564586),
                e = this.ff(e, d, b, c, a[f + 2], 17, 606105819),
                c = this.ff(c, e, d, b, a[f + 3], 22, -1044525330),
                b = this.ff(b, c, e, d, a[f + 4], 7, -176418897),
                d = this.ff(d, b, c, e, a[f + 5], 12, 1200080426),
                e = this.ff(e, d, b, c, a[f + 6], 17, -1473231341),
                c = this.ff(c, e, d, b, a[f + 7], 22, -45705983),
                b = this.ff(b, c, e, d, a[f + 8], 7, 1770035416),
                d = this.ff(d, b, c, e, a[f + 9], 12, -1958414417),
                e = this.ff(e, d, b, c, a[f + 10], 17, -42063),
                c = this.ff(c,
                    e, d, b, a[f + 11], 22, -1990404162),
                b = this.ff(b, c, e, d, a[f + 12], 7, 1804603682),
                d = this.ff(d, b, c, e, a[f + 13], 12, -40341101),
                e = this.ff(e, d, b, c, a[f + 14], 17, -1502002290),
                c = this.ff(c, e, d, b, a[f + 15], 22, 1236535329),
                b = this.gg(b, c, e, d, a[f + 1], 5, -165796510),
                d = this.gg(d, b, c, e, a[f + 6], 9, -1069501632),
                e = this.gg(e, d, b, c, a[f + 11], 14, 643717713),
                c = this.gg(c, e, d, b, a[f], 20, -373897302),
                b = this.gg(b, c, e, d, a[f + 5], 5, -701558691),
                d = this.gg(d, b, c, e, a[f + 10], 9, 38016083),
                e = this.gg(e, d, b, c, a[f + 15], 14, -660478335),
                c = this.gg(c, e, d, b, a[f + 4], 20, -405537848),
                b = this.gg(b, c, e, d, a[f + 9], 5, 568446438),
                d = this.gg(d, b, c, e, a[f + 14], 9, -1019803690),
                e = this.gg(e, d, b, c, a[f + 3], 14, -187363961),
                c = this.gg(c, e, d, b, a[f + 8], 20, 1163531501),
                b = this.gg(b, c, e, d, a[f + 13], 5, -1444681467),
                d = this.gg(d, b, c, e, a[f + 2], 9, -51403784),
                e = this.gg(e, d, b, c, a[f + 7], 14, 1735328473),
                c = this.gg(c, e, d, b, a[f + 12], 20, -1926607734),
                b = this.hh(b, c, e, d, a[f + 5], 4, -378558),
                d = this.hh(d, b, c, e, a[f + 8], 11, -2022574463),
                e = this.hh(e, d, b, c, a[f + 11], 16, 1839030562),
                c = this.hh(c, e, d, b, a[f + 14], 23, -35309556),
                b = this.hh(b, c, e, d, a[f + 1],
                    4, -1530992060),
                d = this.hh(d, b, c, e, a[f + 4], 11, 1272893353),
                e = this.hh(e, d, b, c, a[f + 7], 16, -155497632),
                c = this.hh(c, e, d, b, a[f + 10], 23, -1094730640),
                b = this.hh(b, c, e, d, a[f + 13], 4, 681279174),
                d = this.hh(d, b, c, e, a[f], 11, -358537222),
                e = this.hh(e, d, b, c, a[f + 3], 16, -722521979),
                c = this.hh(c, e, d, b, a[f + 6], 23, 76029189),
                b = this.hh(b, c, e, d, a[f + 9], 4, -640364487),
                d = this.hh(d, b, c, e, a[f + 12], 11, -421815835),
                e = this.hh(e, d, b, c, a[f + 15], 16, 530742520),
                c = this.hh(c, e, d, b, a[f + 2], 23, -995338651),
                b = this.ii(b, c, e, d, a[f], 6, -198630844),
                d = this.ii(d,
                    b, c, e, a[f + 7], 10, 1126891415),
                e = this.ii(e, d, b, c, a[f + 14], 15, -1416354905),
                c = this.ii(c, e, d, b, a[f + 5], 21, -57434055),
                b = this.ii(b, c, e, d, a[f + 12], 6, 1700485571),
                d = this.ii(d, b, c, e, a[f + 3], 10, -1894986606),
                e = this.ii(e, d, b, c, a[f + 10], 15, -1051523),
                c = this.ii(c, e, d, b, a[f + 1], 21, -2054922799),
                b = this.ii(b, c, e, d, a[f + 8], 6, 1873313359),
                d = this.ii(d, b, c, e, a[f + 15], 10, -30611744),
                e = this.ii(e, d, b, c, a[f + 6], 15, -1560198380),
                c = this.ii(c, e, d, b, a[f + 13], 21, 1309151649),
                b = this.ii(b, c, e, d, a[f + 4], 6, -145523070),
                d = this.ii(d, b, c, e, a[f + 11], 10, -1120210379),
                e = this.ii(e, d, b, c, a[f + 2], 15, 718787259),
                c = this.ii(c, e, d, b, a[f + 9], 21, -343485551),
                b = this.addme(b, g),
                c = this.addme(c, h),
                e = this.addme(e, i),
                d = this.addme(d, k),
                f = f + 16;
            return this.rhex(b) + this.rhex(c) + this.rhex(e) + this.rhex(d)
        },
        ii: function(a, b, c, d, f, g, h) {
            return this.cmn(this.bitXOR(c, this.bitOR(b, ~d)), a, b, f, g, h)
        },
        hh: function(a, b, c, d, f, g, h) {
            return this.cmn(this.bitXOR(this.bitXOR(b, c), d), a, b, f, g, h)
        },
        gg: function(a, b, c, d, f, g, h) {
            return this.cmn(this.bitOR(this.bitAND(b, d), this.bitAND(c, ~d)), a, b, f, g, h)
        },
        ff: function(a,
            b, c, d, f, g, h) {
            return this.cmn(this.bitOR(this.bitAND(b, c), this.bitAND(~b, d)), a, b, f, g, h)
        },
        cmn: function(a, b, c, d, f, g) {
            return this.addme(this.rol(this.addme(this.addme(b, a), this.addme(d, g)), f), c)
        },
        rol: function(a, b) {
            return a << b | a >>> 32 - b
        },
        str2blks: function(a) {
            for (var b = (a.length + 8 >> 6) + 1, c = [], d = 0, f = 16 * b; d < f;) {
                var g = d++;
                c[g] = 0
            }
            for (g = 0; g < a.length;) c[g >> 2] |= G.cca(a, g) << 8 * ((8 * a.length + g) % 4), g++;
            c[g >> 2] |= 128 << 8 * ((8 * a.length + g) % 4);
            a = 8 * a.length;
            b = 16 * b - 2;
            c[b] = a & 255;
            c[b] |= (a >>> 8 & 255) << 8;
            c[b] |= (a >>> 16 & 255) << 16;
            c[b] |=
                (a >>> 24 & 255) << 24;
            return c
        },
        rhex: function(a) {
            for (var b = "", c = 0; 4 > c;) var d = c++,
                b = b + ("0123456789abcdef".charAt(a >> 8 * d + 4 & 15) + "0123456789abcdef".charAt(a >> 8 * d & 15));
            return b
        },
        addme: function(a, b) {
            var c = (a & 65535) + (b & 65535);
            return (a >> 16) + (b >> 16) + (c >> 16) << 16 | c & 65535
        },
        bitAND: function(a, b) {
            return (a >>> 1 & b >>> 1) << 1 | a & 1 & b & 1
        },
        bitXOR: function(a, b) {
            return (a >>> 1 ^ b >>> 1) << 1 | a & 1 ^ b & 1
        },
        bitOR: function(a, b) {
            return (a >>> 1 | b >>> 1) << 1 | a & 1 | b & 1
        },
        __class__: Aa
    };
    na = function() {
        this.buf = new ec;
        this.cache = [];
        this.useCache = na.USE_CACHE;
        this.useEnumIndex =
            na.USE_ENUM_INDEX;
        this.shash = new H;
        this.scount = 0
    };
    h["haxe.Serializer"] = na;
    na.__name__ = ["haxe", "Serializer"];
    na.prototype = {
        serialize: function(a) {
            var b = J["typeof"](a);
            switch (b[1]) {
                case 0:
                    this.buf.b += u.string("n");
                    break;
                case 1:
                    if (0 == a) {
                        this.buf.b += u.string("z");
                        break
                    }
                    this.buf.b += u.string("i");
                    this.buf.b += u.string(a);
                    break;
                case 2:
                    Math.isNaN(a) ? this.buf.b += u.string("k") : Math.isFinite(a) ? (this.buf.b += u.string("d"), this.buf.b += u.string(a)) : this.buf.b += u.string(0 > a ? "m" : "p");
                    break;
                case 3:
                    this.buf.b += u.string(a ?
                        "t" : "f");
                    break;
                case 6:
                    b = b[2];
                    if (b == String) {
                        this.serializeString(a);
                        break
                    }
                    if (this.useCache && this.serializeRef(a)) break;
                    switch (b) {
                        case Array:
                            var c = 0;
                            this.buf.b += u.string("a");
                            for (var d = a.length, f = 0; f < d;) b = f++, null == a[b] ? c++ : (0 < c && (1 == c ? this.buf.b += u.string("n") : (this.buf.b += u.string("u"), this.buf.b += u.string(c)), c = 0), this.serialize(a[b]));
                            0 < c && (1 == c ? this.buf.b += u.string("n") : (this.buf.b += u.string("u"), this.buf.b += u.string(c)));
                            this.buf.b += u.string("h");
                            break;
                        case dc:
                            this.buf.b += u.string("l");
                            for (a =
                                a.iterator(); a.hasNext();) b = a.next(), this.serialize(b);
                            this.buf.b += u.string("h");
                            break;
                        case Date:
                            this.buf.b += u.string("v");
                            this.buf.b += u.string(G.dateStr(a));
                            break;
                        case H:
                            this.buf.b += u.string("b");
                            for (c = a.keys(); c.hasNext();) b = c.next(), this.serializeString(b), this.serialize(a.get(b));
                            this.buf.b += u.string("h");
                            break;
                        case oa:
                            this.buf.b += u.string("q");
                            for (c = a.keys(); c.hasNext();) b = c.next(), this.buf.b += u.string(":"), this.buf.b += u.string(b), this.serialize(a.get(b));
                            this.buf.b += u.string("h");
                            break;
                        case Ba.Bytes:
                            b =
                                0;
                            c = a.length - 2;
                            d = new ec;
                            for (f = na.BASE64; b < c;) {
                                var g = a.b[b++],
                                    h = a.b[b++],
                                    i = a.b[b++];
                                d.b += u.string(f.charAt(g >> 2));
                                d.b += u.string(f.charAt((g << 4 | h >> 4) & 63));
                                d.b += u.string(f.charAt((h << 2 | i >> 6) & 63));
                                d.b += u.string(f.charAt(i & 63))
                            }
                            b == c ? (g = a.b[b++], h = a.b[b++], d.b += u.string(f.charAt(g >> 2)), d.b += u.string(f.charAt((g << 4 | h >> 4) & 63)), d.b += u.string(f.charAt(h << 2 & 63))) : b == c + 1 && (g = a.b[b++], d.b += u.string(f.charAt(g >> 2)), d.b += u.string(f.charAt(g << 4 & 63)));
                            b = d.b;
                            this.buf.b += u.string("s");
                            this.buf.b += u.string(b.length);
                            this.buf.b += u.string(":");
                            this.buf.b += u.string(b);
                            break;
                        default:
                            this.cache.pop(), null != a.hxSerialize ? (this.buf.b += u.string("C"), this.serializeString(J.getClassName(b)), this.cache.push(a), a.hxSerialize(this), this.buf.b += u.string("g")) : (this.buf.b += u.string("c"), this.serializeString(J.getClassName(b)), this.cache.push(a), this.serializeFields(a))
                    }
                    break;
                case 4:
                    if (this.useCache && this.serializeRef(a)) break;
                    this.buf.b += u.string("o");
                    this.serializeFields(a);
                    break;
                case 7:
                    b = b[2];
                    if (this.useCache && this.serializeRef(a)) break;
                    this.cache.pop();
                    this.buf.b += u.string(this.useEnumIndex ? "j" : "w");
                    this.serializeString(J.getEnumName(b));
                    this.useEnumIndex ? (this.buf.b += u.string(":"), this.buf.b += u.string(a[1])) : this.serializeString(a[0]);
                    this.buf.b += u.string(":");
                    d = a.length;
                    this.buf.b += u.string(d - 2);
                    for (f = 2; f < d;) b = f++, this.serialize(a[b]);
                    this.cache.push(a);
                    break;
                case 5:
                    throw "Cannot serialize function";
                default:
                    throw "Cannot serialize " + u.string(a);
            }
        },
        serializeFields: function(a) {
            for (var b = 0, c = pa.fields(a); b < c.length;) {
                var d = c[b];
                ++b;
                this.serializeString(d);
                this.serialize(pa.field(a, d))
            }
            this.buf.b += u.string("g")
        },
        serializeRef: function(a) {
            for (var b = typeof a, c = 0, d = this.cache.length; c < d;) {
                var f = c++,
                    g = this.cache[f];
                if (typeof g == b && g == a) return this.buf.b += u.string("r"), this.buf.b += u.string(f), !0
            }
            this.cache.push(a);
            return !1
        },
        serializeString: function(a) {
            var b = this.shash.get(a);
            null != b ? (this.buf.b += u.string("R"), this.buf.b += u.string(b)) : (this.shash.set(a, this.scount++), this.buf.b += u.string("y"), a = Ca.urlEncode(a), this.buf.b += u.string(a.length),
                this.buf.b += u.string(":"), this.buf.b += u.string(a))
        },
        toString: function() {
            return this.buf.b
        },
        __class__: na
    };
    V = function(a) {
        this.buf = a;
        this.length = a.length;
        this.pos = 0;
        this.scache = [];
        this.cache = [];
        a = V.DEFAULT_RESOLVER;
        null == a && (a = J, V.DEFAULT_RESOLVER = a);
        this.setResolver(a)
    };
    h["haxe.Unserializer"] = V;
    V.__name__ = ["haxe", "Unserializer"];
    V.initCodes = function() {
        for (var a = [], b = 0, c = V.BASE64.length; b < c;) {
            var d = b++;
            a[V.BASE64.charCodeAt(d)] = d
        }
        return a
    };
    V.run = function(a) {
        return (new V(a)).unserialize()
    };
    V.prototype = {
        unserialize: function() {
            switch (this.buf.charCodeAt(this.pos++)) {
                case 110:
                    return null;
                case 116:
                    return !0;
                case 102:
                    return !1;
                case 122:
                    return 0;
                case 105:
                    return this.readDigits();
                case 100:
                    for (var a = this.pos;;) {
                        var b = this.buf.charCodeAt(this.pos);
                        if (43 <= b && 58 > b || 101 == b || 69 == b) this.pos++;
                        else break
                    }
                    return u.parseFloat(G.substr(this.buf, a, this.pos - a));
                case 121:
                    b = this.readDigits();
                    if (58 != this.buf.charCodeAt(this.pos++) || this.length - this.pos < b) throw "Invalid string length";
                    a = G.substr(this.buf, this.pos, b);
                    this.pos +=
                        b;
                    a = Ca.urlDecode(a);
                    this.scache.push(a);
                    return a;
                case 107:
                    return Math.NaN;
                case 109:
                    return Math.NEGATIVE_INFINITY;
                case 112:
                    return Math.POSITIVE_INFINITY;
                case 97:
                    var c = this.buf,
                        a = [];
                    for (this.cache.push(a);;) {
                        b = this.buf.charCodeAt(this.pos);
                        if (104 == b) {
                            this.pos++;
                            break
                        }
                        117 == b ? (this.pos++, b = this.readDigits(), a[a.length + b - 1] = null) : a.push(this.unserialize())
                    }
                    return a;
                case 111:
                    return b = {}, this.cache.push(b), this.unserializeObject(b), b;
                case 114:
                    b = this.readDigits();
                    if (0 > b || b >= this.cache.length) throw "Invalid reference";
                    return this.cache[b];
                case 82:
                    b = this.readDigits();
                    if (0 > b || b >= this.scache.length) throw "Invalid string reference";
                    return this.scache[b];
                case 120:
                    throw this.unserialize();
                case 99:
                    b = this.unserialize();
                    a = this.resolver.resolveClass(b);
                    if (null == a) throw "Class not found " + b;
                    b = J.createEmptyInstance(a);
                    this.cache.push(b);
                    this.unserializeObject(b);
                    return b;
                case 119:
                    b = this.unserialize();
                    a = this.resolver.resolveEnum(b);
                    if (null == a) throw "Enum not found " + b;
                    b = this.unserializeEnum(a, this.unserialize());
                    this.cache.push(b);
                    return b;
                case 106:
                    b = this.unserialize();
                    a = this.resolver.resolveEnum(b);
                    if (null == a) throw "Enum not found " + b;
                    this.pos++;
                    var c = this.readDigits(),
                        d = J.getEnumConstructs(a)[c];
                    if (null == d) throw "Unknown enum index " + b + "@" + c;
                    b = this.unserializeEnum(a, d);
                    this.cache.push(b);
                    return b;
                case 108:
                    b = new dc;
                    for (this.cache.push(b); 104 != this.buf.charCodeAt(this.pos);) b.add(this.unserialize());
                    this.pos++;
                    return b;
                case 98:
                    c = new H;
                    for (this.cache.push(c); 104 != this.buf.charCodeAt(this.pos);) a = this.unserialize(), c.set(a, this.unserialize());
                    this.pos++;
                    return c;
                case 113:
                    c = new oa;
                    this.cache.push(c);
                    for (b = this.buf.charCodeAt(this.pos++); 58 == b;) a = this.readDigits(), c.set(a, this.unserialize()), b = this.buf.charCodeAt(this.pos++);
                    if (104 != b) throw "Invalid IntHash format";
                    return c;
                case 118:
                    return b = G.strDate(G.substr(this.buf, this.pos, 19)), this.cache.push(b), this.pos += 19, b;
                case 115:
                    b = this.readDigits();
                    c = this.buf;
                    if (58 != this.buf.charCodeAt(this.pos++) || this.length - this.pos < b) throw "Invalid bytes length";
                    d = V.CODES;
                    null == d && (d = V.initCodes(), V.CODES =
                        d);
                    for (var a = this.pos, f = b & 3, g = a + (b - f), h = Ba.Bytes.alloc(3 * (b >> 2) + (2 <= f ? f - 1 : 0)), i = 0; a < g;) {
                        var k = d[c.charCodeAt(a++)],
                            m = d[c.charCodeAt(a++)];
                        h.b[i++] = (k << 2 | m >> 4) & 255;
                        k = d[c.charCodeAt(a++)];
                        h.b[i++] = (m << 4 | k >> 2) & 255;
                        m = d[c.charCodeAt(a++)];
                        h.b[i++] = (k << 6 | m) & 255
                    }
                    2 <= f && (k = d[c.charCodeAt(a++)], m = d[c.charCodeAt(a++)], h.b[i++] = (k << 2 | m >> 4) & 255, 3 == f && (k = d[c.charCodeAt(a++)], h.b[i++] = (m << 4 | k >> 2) & 255));
                    this.pos += b;
                    this.cache.push(h);
                    return h;
                case 67:
                    b = this.unserialize();
                    a = this.resolver.resolveClass(b);
                    if (null ==
                        a) throw "Class not found " + b;
                    b = J.createEmptyInstance(a);
                    this.cache.push(b);
                    b.hxUnserialize(this);
                    if (103 != this.buf.charCodeAt(this.pos++)) throw "Invalid custom data";
                    return b
            }
            this.pos--;
            throw "Invalid char " + this.buf.charAt(this.pos) + " at position " + this.pos;
        },
        unserializeEnum: function(a, b) {
            if (58 != this.buf.charCodeAt(this.pos++)) throw "Invalid enum format";
            var c = this.readDigits();
            if (0 == c) return J.createEnum(a, b);
            for (var d = []; 0 < c--;) d.push(this.unserialize());
            return J.createEnum(a, b, d)
        },
        unserializeObject: function(a) {
            for (;;) {
                if (this.pos >=
                    this.length) throw "Invalid object";
                if (103 == this.buf.charCodeAt(this.pos)) break;
                var b = this.unserialize();
                if (!F.__instanceof(b, String)) throw "Invalid object key";
                var c = this.unserialize();
                a[b] = c
            }
            this.pos++
        },
        readDigits: function() {
            for (var a = 0, b = !1, c = this.pos;;) {
                var d = this.buf.charCodeAt(this.pos);
                if (d != d) break;
                if (45 == d) {
                    if (this.pos != c) break;
                    b = !0
                } else {
                    if (48 > d || 57 < d) break;
                    a = 10 * a + (d - 48)
                }
                this.pos++
            }
            b && (a *= -1);
            return a
        },
        setResolver: function(a) {
            this.resolver = null == a ? {
                    resolveClass: function() {
                        return null
                    },
                    resolveEnum: function() {
                        return null
                    }
                } :
                a
        },
        __class__: V
    };
    Ba = {
        Bytes: function(a, b) {
            this.length = a;
            this.b = b
        }
    };
    h["haxe.io.Bytes"] = Ba.Bytes;
    Ba.Bytes.__name__ = ["haxe", "io", "Bytes"];
    Ba.Bytes.alloc = function(a) {
        for (var b = [], c = 0; c < a;) c++, b.push(0);
        return new Ba.Bytes(a, b)
    };
    Ba.Bytes.prototype = {
        __class__: Ba.Bytes
    };
    var rc;
    Array.prototype.indexOf ? G.remove = function(a, b) {
        var c = a.indexOf(b);
        if (-1 == c) return !1;
        a.splice(c, 1);
        return !0
    } : null;
    Math.__name__ = ["Math"];
    Math.NaN = Number.NaN;
    Math.NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY;
    Math.POSITIVE_INFINITY = Number.POSITIVE_INFINITY;
    h.Math = Math;
    Math.isFinite = function(a) {
        return isFinite(a)
    };
    Math.isNaN = function(a) {
        return isNaN(a)
    };
    String.prototype.__class__ = h.String = String;
    String.__name__ = ["String"];
    Array.prototype.__class__ = h.Array = Array;
    Array.__name__ = ["Array"];
    Date.prototype.__class__ = h.Date = Date;
    Date.__name__ = ["Date"];
    var wc = h.Int = {
            __name__: ["Int"]
        },
        xc = h.Dynamic = {
            __name__: ["Dynamic"]
        },
        tc = h.Float = Number;
    tc.__name__ = ["Float"];
    var uc = h.Bool = Boolean;
    uc.__ename__ = ["Bool"];
    var yc = h.Class = {
            __name__: ["Class"]
        },
        zc = {};
    "undefined" != typeof document &&
        (B.document = document);
    "undefined" != typeof window && (B.window = window, B.window.onerror = function(a, b, c) {
        var d = B.onerror;
        return null == d ? !1 : d(a, [b + ":" + c])
    });
    var sc;
    if (window.XMLHttpRequest) sc = XMLHttpRequest;
    else {
        var vc;
        if (window.ActiveXObject) vc = function() {
            try {
                return new ActiveXObject("Msxml2.XMLHTTP")
            } catch (a) {
                try {
                    return new ActiveXObject("Microsoft.XMLHTTP")
                } catch (b) {
                    throw "Unable to create XMLHttpRequest object.";
                }
            }
        };
        else throw "Unable to create XMLHttpRequest object.";
        sc = vc
    }
    qc = sc;
    "undefined" != typeof JSON &&
        (ra = JSON);
    y.s_incidentEdge = y.makeClipPointVector();
    y.s_clipPoints1 = y.makeClipPointVector();
    y.s_clipPoints2 = y.makeClipPointVector();
    y.s_edgeAO = [];
    y.s_edgeBO = [];
    y.s_localTangent = new i.B2Vec2;
    y.s_localNormal = new i.B2Vec2;
    y.s_planePoint = new i.B2Vec2;
    y.s_normal = new i.B2Vec2;
    y.s_tangent = new i.B2Vec2;
    y.s_tangent2 = new i.B2Vec2;
    y.s_v11 = new i.B2Vec2;
    y.s_v12 = new i.B2Vec2;
    ga.s_simplex = new Tb;
    ga.s_saveA = [];
    ga.s_saveB = [];
    Na.currentID = 0;
    O.e_circles = 1;
    O.e_faceA = 2;
    O.e_faceB = 4;
    Y.e_points = 1;
    Y.e_faceA = 2;
    Y.e_faceB = 4;
    z.b2_toiCalls = 0;
    z.b2_toiIters = 0;
    z.b2_toiMaxIters = 0;
    z.b2_toiRootIters = 0;
    z.b2_toiMaxRootIters = 0;
    z.s_cache = new ac;
    z.s_distanceInput = new Ub;
    z.s_xfA = new i.B2Transform;
    z.s_xfB = new i.B2Transform;
    z.s_fcn = new Y;
    z.s_distanceOutput = new Vb;
    s.B2Shape.e_unknownShape = -1;
    s.B2Shape.e_circleShape = 0;
    s.B2Shape.e_polygonShape = 1;
    s.B2Shape.e_edgeShape = 2;
    s.B2Shape.e_shapeTypeCount = 3;
    t.b2_pi = Math.PI;
    t.b2_maxManifoldPoints = 2;
    t.b2_aabbExtension = 0.1;
    t.b2_aabbMultiplier = 2;
    t.b2_linearSlop = 0.0050;
    t.b2_maxTOIContactsPerIsland = 32;
    t.b2_maxTOIJointsPerIsland = 32;
    t.b2_velocityThreshold = 1;
    t.b2_maxLinearCorrection = 0.2;
    t.b2_maxTranslation = 2;
    t.b2_maxTranslationSquared = t.b2_maxTranslation * t.b2_maxTranslation;
    t.b2_maxRotation = 0.5 * t.b2_pi;
    t.b2_maxRotationSquared = t.b2_maxRotation * t.b2_maxRotation;
    t.b2_contactBaumgarte = 0.2;
    t.b2_timeToSleep = 0.5;
    t.b2_linearSleepTolerance = 0.01;
    t.b2_angularSleepTolerance = 2 / 180 * t.b2_pi;
    v.s_xf1 = new i.B2Transform;
    v.e_islandFlag = 1;
    v.e_awakeFlag = 2;
    v.e_allowSleepFlag = 4;
    v.e_bulletFlag = 8;
    v.e_fixedRotationFlag = 16;
    v.e_activeFlag = 32;
    v.b2_staticBody = 0;
    v.b2_kinematicBody = 1;
    v.b2_dynamicBody = 2;
    Ja.b2_defaultFilter = new Ja;
    fa.b2_defaultListener = new fa;
    ua.s_impulse = new Pb;
    I.s_timestep2 = new La;
    I.s_backupA = new i.B2Sweep;
    I.s_backupB = new i.B2Sweep;
    I.s_timestep = new La;
    I.s_queue = [];
    I.e_newFixture = 1;
    I.e_locked = 2;
    k.B2Contact.e_sensorFlag = 1;
    k.B2Contact.e_continuousFlag = 2;
    k.B2Contact.e_islandFlag = 4;
    k.B2Contact.e_toiFlag = 8;
    k.B2Contact.e_touchingFlag = 16;
    k.B2Contact.e_enabledFlag = 32;
    k.B2Contact.e_filterFlag = 64;
    k.B2Contact.s_input =
        new bc;
    k.B2ContactSolver.s_worldManifold = new Oa;
    k.B2ContactSolver.s_psm = new k.B2PositionSolverManifold;
    E.B2Joint.e_inactiveLimit = 0;
    E.B2Joint.e_atUpperLimit = 2;
    x.IDENTITY = new Hb;
    x._scratchPoint = new Q;
    x._internal_interactiveSprites = [];
    g.manager.EManagersDef.mManagerDefs = new H;
    g.menu.EMenus.mMenusDef = new H;
    f.orders.PizzaOrder._useablePizzas = [];
    f.orders.pizza.EPizzaDefinition._definitions = [];
    f.world.objects.ECuttableType.mTypes = [];
    f.world.objects.ECuttableType.MUSHROOM = new f.world.objects.ECuttableType("mushrooms",
        35, "com.bkom.game.world.objects.BaseCuttable");
    f.world.objects.ECuttableType.CHEESE = new f.world.objects.ECuttableType("cheese", 35, "com.bkom.game.world.objects.BaseCuttable", -30);
    f.world.objects.ECuttableType.PEPPERONI = new f.world.objects.ECuttableType("pepperoni", 35, "com.bkom.game.world.objects.BaseCuttable");
    f.world.objects.ECuttableType.SEAWEED = new f.world.objects.ECuttableType("seaweed", 35, "com.bkom.game.world.objects.BaseCuttable", -25, -30);
    f.world.objects.ECuttableType.ANCHOVIES = new f.world.objects.ECuttableType("anchovies",
        35, "com.bkom.game.world.objects.BaseCuttable");
    f.world.objects.ECuttableType.JALAPENOS = new f.world.objects.ECuttableType("jalapenos", 35, "com.bkom.game.world.objects.BaseCuttable");
    f.world.objects.ECuttableType.JELLYBEANS = new f.world.objects.ECuttableType("jellybeans", 35, "com.bkom.game.world.objects.BaseCuttable", 20);
    f.world.slicer.MobileSlicer.tempPoint = new Q;
    f.world.slicer.PCSlicer.tempPoint = new Q;
    m.HtmlPlatform.instance = new m.HtmlPlatform;
    A.root = new r;
    A.uncaughtError = new C;
    A.hidden = new aa(!1);
    A._platform =
        m.HtmlPlatform.instance;
    A._calledInit = !1;
    xa.log = new Mb(A._platform.createLogHandler("flambe"));
    P._buildManifest = P.createBuildManifests();
    sb.log = xa.log;
    qa.log = xa.log;
    sa.log = xa.log;
    la._sharedEvent = new wb;
    Z._sharedEvent = new yb;
    T._sharedEvent = new Ab;
    Ra.log = xa.log;
    m.HtmlAssetPackLoader.CANVAS_TEXTURES = (new ka("(iPhone|iPod|iPad)", "")).match(B.window.navigator.userAgent);
    m.HtmlAssetPackLoader._mediaRefCount = 0;
    m.HtmlStage.log = xa.log;
    m.HtmlStorage.log = xa.log;
    m.HtmlUtil.VENDOR_PREFIXES = ["webkit", "moz", "ms",
        "o", "khtml"
    ];
    m.HtmlUtil.SHOULD_HIDE_MOBILE_BROWSER = B.window.top == B.window && (new ka("Mobile(/.*)? Safari", "")).match(B.window.navigator.userAgent);
    na.USE_CACHE = !1;
    na.USE_ENUM_INDEX = !1;
    na.BASE64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789%:";
    V.DEFAULT_RESOLVER = J;
    V.BASE64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789%:";
    f.Main.main()
})();