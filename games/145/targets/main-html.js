/** Cooked with Flambe, https://getflambe.com */
'use strict';
(function() {
    function t(a, b) {
        function c() {}
        c.prototype = a;
        var d = new c,
            f;
        for (f in b) d[f] = b[f];
        b.toString !== Object.prototype.toString && (d.toString = b.toString);
        return d
    }

    function ud(a) {
        return a instanceof Array ? function() {
            return w.iter(a)
        } : "function" == typeof a.iterator ? z(a, a.iterator) : a.iterator
    }

    function z(a, b) {
        if (null == b) return null;
        null == b.__id__ && (b.__id__ = Hd++);
        var c;
        null == a.hx__closures__ ? a.hx__closures__ = {} : c = a.hx__closures__[b.__id__];
        null == c && (c = function() {
            return c.method.apply(c.scope,
                arguments)
        }, c.scope = a, c.method = b, a.hx__closures__[b.__id__] = c);
        return c
    }
    var e = {},
        D = function() {
            return E.__string_rec(this, "")
        },
        X = function(a, b) {
            b = b.split("u").join("");
            this.r = RegExp(a, b)
        };
    e.EReg = X;
    X.__name__ = ["EReg"];
    X.prototype = {
        match: function(a) {
            this.r.global && (this.r.lastIndex = 0);
            this.r.m = this.r.exec(a);
            this.r.s = a;
            return null != this.r.m
        },
        matched: function(a) {
            if (null != this.r.m && 0 <= a && a < this.r.m.length) return this.r.m[a];
            throw new m("EReg::matched");
        },
        matchedPos: function() {
            if (null == this.r.m) throw new m("No string matched");
            return {
                pos: this.r.m.index,
                len: this.r.m[0].length
            }
        },
        replace: function(a, b) {
            return a.replace(this.r, b)
        },
        __class__: X
    };
    var w = function() {};
    e.HxOverrides = w;
    w.__name__ = ["HxOverrides"];
    w.cca = function(a, b) {
        var c = a.charCodeAt(b);
        return c != c ? void 0 : c
    };
    w.substr = function(a, b, c) {
        if (null != b && 0 != b && null != c && 0 > c) return "";
        null == c && (c = a.length);
        0 > b ? (b = a.length + b, 0 > b && (b = 0)) : 0 > c && (c = a.length + c - b);
        return a.substr(b, c)
    };
    w.remove = function(a, b) {
        var c = a.indexOf(b);
        if (-1 == c) return !1;
        a.splice(c, 1);
        return !0
    };
    w.iter = function(a) {
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
    var eb = function() {};
    e.Lambda = eb;
    eb.__name__ = ["Lambda"];
    eb.array = function(a) {
        for (var b = [], a = ud(a)(); a.hasNext();) {
            var c = a.next();
            b.push(c)
        }
        return b
    };
    eb.has = function(a, b) {
        for (var c = ud(a)(); c.hasNext();)
            if (c.next() == b) return !0;
        return !1
    };
    eb.count = function(a, b) {
        var c = 0;
        if (null == b)
            for (var d = ud(a)(); d.hasNext();) d.next(), c++;
        else
            for (d = ud(a)(); d.hasNext();) {
                var f = d.next();
                b(f) && c++
            }
        return c
    };
    var Kc = function() {
        this.length =
            0
    };
    e.List = Kc;
    Kc.__name__ = ["List"];
    Kc.prototype = {
        add: function(a) {
            a = [a];
            null == this.h ? this.h = a : this.q[1] = a;
            this.q = a;
            this.length++
        },
        iterator: function() {
            return new Lc(this.h)
        },
        __class__: Kc
    };
    var Lc = function(a) {
        this.head = a;
        this.val = null
    };
    e["_List.ListIterator"] = Lc;
    Lc.__name__ = ["_List", "ListIterator"];
    Lc.prototype = {
        hasNext: function() {
            return null != this.head
        },
        next: function() {
            this.val = this.head[0];
            this.head = this.head[1];
            return this.val
        },
        __class__: Lc
    };
    var A = function() {};
    e.Main = A;
    A.__name__ = ["Main"];
    A.onSuccess =
        function(a) {
            A.bootstrapPack = a;
            if (k._platform.getTouch().get_supported()) k._platform.getTouch().down.connect(function() {
                A.bootstrapPack.getSound("empty").play().dispose();
                A.bootstrapPack.getSound("empty").dispose()
            }).once();
            else A.bootstrapPack.getSound("empty").dispose();
            k._platform.getStage().resize.connect(A.onResize);
            k.root.add(new ja);
            u.defaultTransition(new Xb(1, 15, 10));
            u.init(new Yb(a));
            u["goto"](Ua);
            A.muteBt = (new g).add(new l).addChild((new g).add(new q(A.bootstrapPack.getTexture(1 == k.volume._value ?
                "unmute" : "mute")))).add(new Y);
            k.root.addChild(A.muteBt);
            A._disposer.connect2(k.volume.get_changed(), function() {
                A.muteBt.disposeChildren();
                A.muteBt.addChild((new g).add(new q(A.bootstrapPack.getTexture(1 == k.volume._value ? "unmute" : "mute"))))
            });
            A._disposer.connect1(A.muteBt._compMap.Sprite_3.get_pointerUp(), function() {
                k.volume.set__(0 == k.volume._value ? 1 : 0)
            });
            A.onResize()
        };
    A.setBgLoop = function(a, b) {
        null == b && (b = 1);
        null != A.bgLoop && (A.bgLoop.dispose(), A.bgLoop = null);
        null != a && (A.bgLoop = a.loop(), A.bgLoop.volume.set__(0),
            A.bgLoop.volume.animateTo(b, 0.3))
    };
    A.localizationLoaded = function() {
        k.loadAssetPack(B.getManifest("bootstrap")).get(A.onSuccess)
    };
    A.main = function() {
        k.init();
        ua.init(new Zb, A.localizationLoaded);
        A._disposer = new na;
        k.root.add(A._disposer)
    };
    A.onResize = function() {
        if (!(null == u.director || null == u.director.owner))
            if (null != A.resizeScreen && (A.resizeScreen.dispose(), A.resizeScreen = null), k._platform.getStage().get_height() > k._platform.getStage().get_width()) {
                var a;
                a = 640 < k._platform.getStage().get_width() ? "orientation_ipad" :
                    "orientation_iphone";
                k.root.add(new Va(0));
                A.resizeScreen = (new g).add(new fa(0, k._platform.getStage().get_width(), k._platform.getStage().get_height())).addChild(G.center((new g).add(new q(A.bootstrapPack.getTexture(a)))));
                k.root.addChild(A.resizeScreen)
            } else a = k.root._compMap.SpeedAdjuster_4, null != a && a.dispose(), G.top(G.right(A.muteBt, 11), 11)
    };
    Math.__name__ = ["Math"];
    var ga = function() {};
    e.Reflect = ga;
    ga.__name__ = ["Reflect"];
    ga.hasField = function(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    };
    ga.field = function(a, b) {
        try {
            return a[b]
        } catch (c) {
            return c instanceof m && (c = c.val), null
        }
    };
    ga.setField = function(a, b, c) {
        a[b] = c
    };
    ga.callMethod = function(a, b, c) {
        return b.apply(a, c)
    };
    var s = function() {};
    e.Std = s;
    s.__name__ = ["Std"];
    s.is = function(a, b) {
        return E.__instanceof(a, b)
    };
    s.instance = function(a, b) {
        return a instanceof b ? a : null
    };
    s.string = function(a) {
        return E.__string_rec(a, "")
    };
    s["int"] = function(a) {
        return a | 0
    };
    s.parseInt = function(a) {
        var b = parseInt(a, 10);
        if (0 == b && (120 == w.cca(a, 1) || 88 == w.cca(a, 1))) b = parseInt(a);
        return isNaN(b) ? null : b
    };
    s.parseFloat = function(a) {
        return parseFloat(a)
    };
    var xa = function() {
        this.b = ""
    };
    e.StringBuf = xa;
    xa.__name__ = ["StringBuf"];
    xa.prototype = {
        add: function(a) {
            this.b += s.string(a)
        },
        addSub: function(a, b, c) {
            this.b = null == c ? this.b + w.substr(a, b, null) : this.b + w.substr(a, b, c)
        },
        __class__: xa
    };
    var y = function() {};
    e.StringTools = y;
    y.__name__ = ["StringTools"];
    y.htmlEscape = function(a, b) {
        a = a.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
        return b ? a.split('"').join("&quot;").split("'").join("&#039;") :
            a
    };
    y.startsWith = function(a, b) {
        return a.length >= b.length && w.substr(a, 0, b.length) == b
    };
    y.isSpace = function(a, b) {
        var c = w.cca(a, b);
        return 8 < c && 14 > c || 32 == c
    };
    y.ltrim = function(a) {
        for (var b = a.length, c = 0; c < b && y.isSpace(a, c);) c++;
        return 0 < c ? w.substr(a, c, b - c) : a
    };
    y.rtrim = function(a) {
        for (var b = a.length, c = 0; c < b && y.isSpace(a, b - c - 1);) c++;
        return 0 < c ? w.substr(a, 0, b - c) : a
    };
    y.trim = function(a) {
        return y.ltrim(y.rtrim(a))
    };
    y.replace = function(a, b, c) {
        return a.split(b).join(c)
    };
    y.fastCodeAt = function(a, b) {
        return a.charCodeAt(b)
    };
    var Ja = function() {};
    e.Type = Ja;
    Ja.__name__ = ["Type"];
    Ja.getClassName = function(a) {
        a = a.__name__;
        return null == a ? null : a.join(".")
    };
    Ja.resolveClass = function(a) {
        a = e[a];
        return null == a || !a.__name__ ? null : a
    };
    Ja.resolveEnum = function(a) {
        a = e[a];
        return null == a || !a.__ename__ ? null : a
    };
    Ja.createInstance = function(a, b) {
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
                return new a(b[0], b[1], b[2],
                    b[3], b[4]);
            case 6:
                return new a(b[0], b[1], b[2], b[3], b[4], b[5]);
            case 7:
                return new a(b[0], b[1], b[2], b[3], b[4], b[5], b[6]);
            case 8:
                return new a(b[0], b[1], b[2], b[3], b[4], b[5], b[6], b[7]);
            default:
                throw new m("Too many arguments");
        }
    };
    var j = function(a) {
        this.nodeType = a;
        this.children = [];
        this.attributeMap = new R
    };
    e.Xml = j;
    j.__name__ = ["Xml"];
    j.parse = function(a) {
        return Ka.parse(a)
    };
    j.createElement = function(a) {
        var b = new j(j.Element);
        if (b.nodeType != j.Element) throw new m("Bad node type, expected Element but found " + b.nodeType);
        b.nodeName = a;
        return b
    };
    j.createPCData = function(a) {
        var b = new j(j.PCData);
        if (b.nodeType == j.Document || b.nodeType == j.Element) throw new m("Bad node type, unexpected " + b.nodeType);
        b.nodeValue = a;
        return b
    };
    j.createCData = function(a) {
        var b = new j(j.CData);
        if (b.nodeType == j.Document || b.nodeType == j.Element) throw new m("Bad node type, unexpected " + b.nodeType);
        b.nodeValue = a;
        return b
    };
    j.createComment = function(a) {
        var b = new j(j.Comment);
        if (b.nodeType == j.Document || b.nodeType == j.Element) throw new m("Bad node type, unexpected " +
            b.nodeType);
        b.nodeValue = a;
        return b
    };
    j.createDocType = function(a) {
        var b = new j(j.DocType);
        if (b.nodeType == j.Document || b.nodeType == j.Element) throw new m("Bad node type, unexpected " + b.nodeType);
        b.nodeValue = a;
        return b
    };
    j.createProcessingInstruction = function(a) {
        var b = new j(j.ProcessingInstruction);
        if (b.nodeType == j.Document || b.nodeType == j.Element) throw new m("Bad node type, unexpected " + b.nodeType);
        b.nodeValue = a;
        return b
    };
    j.createDocument = function() {
        return new j(j.Document)
    };
    j.prototype = {
        get_nodeName: function() {
            if (this.nodeType !=
                j.Element) throw new m("Bad node type, expected Element but found " + this.nodeType);
            return this.nodeName
        },
        get_nodeValue: function() {
            if (this.nodeType == j.Document || this.nodeType == j.Element) throw new m("Bad node type, unexpected " + this.nodeType);
            return this.nodeValue
        },
        get: function(a) {
            if (this.nodeType != j.Element) throw new m("Bad node type, expected Element but found " + this.nodeType);
            return this.attributeMap.get(a)
        },
        set: function(a, b) {
            if (this.nodeType != j.Element) throw new m("Bad node type, expected Element but found " +
                this.nodeType);
            this.attributeMap.set(a, b)
        },
        exists: function(a) {
            if (this.nodeType != j.Element) throw new m("Bad node type, expected Element but found " + this.nodeType);
            return this.attributeMap.exists(a)
        },
        attributes: function() {
            if (this.nodeType != j.Element) throw new m("Bad node type, expected Element but found " + this.nodeType);
            return this.attributeMap.keys()
        },
        iterator: function() {
            if (this.nodeType != j.Document && this.nodeType != j.Element) throw new m("Bad node type, expected Element or Document but found " + this.nodeType);
            return w.iter(this.children)
        },
        elements: function() {
            if (this.nodeType != j.Document && this.nodeType != j.Element) throw new m("Bad node type, expected Element or Document but found " + this.nodeType);
            for (var a = [], b = 0, c = this.children; b < c.length;) {
                var d = c[b];
                ++b;
                d.nodeType == j.Element && a.push(d)
            }
            return w.iter(a)
        },
        elementsNamed: function(a) {
            if (this.nodeType != j.Document && this.nodeType != j.Element) throw new m("Bad node type, expected Element or Document but found " + this.nodeType);
            for (var b = [], c = 0, d = this.children; c <
                d.length;) {
                var f = d[c];
                ++c;
                var h;
                if (h = f.nodeType == j.Element) {
                    if (f.nodeType != j.Element) throw new m("Bad node type, expected Element but found " + f.nodeType);
                    h = f.nodeName == a
                }
                h && b.push(f)
            }
            return w.iter(b)
        },
        firstChild: function() {
            if (this.nodeType != j.Document && this.nodeType != j.Element) throw new m("Bad node type, expected Element or Document but found " + this.nodeType);
            return this.children[0]
        },
        firstElement: function() {
            if (this.nodeType != j.Document && this.nodeType != j.Element) throw new m("Bad node type, expected Element or Document but found " +
                this.nodeType);
            for (var a = 0, b = this.children; a < b.length;) {
                var c = b[a];
                ++a;
                if (c.nodeType == j.Element) return c
            }
            return null
        },
        addChild: function(a) {
            if (this.nodeType != j.Document && this.nodeType != j.Element) throw new m("Bad node type, expected Element or Document but found " + this.nodeType);
            null != a.parent && a.parent.removeChild(a);
            this.children.push(a);
            a.parent = this
        },
        removeChild: function(a) {
            if (this.nodeType != j.Document && this.nodeType != j.Element) throw new m("Bad node type, expected Element or Document but found " +
                this.nodeType);
            return w.remove(this.children, a) ? (a.parent = null, !0) : !1
        },
        toString: function() {
            return vb.print(this)
        },
        __class__: j
    };
    var ya = function() {};
    e["flambe.util.Disposable"] = ya;
    ya.__name__ = ["flambe", "util", "Disposable"];
    ya.prototype = {
        __class__: ya
    };
    var x = function() {
        this._flags = 0;
        this.owner = this.next = null
    };
    e["flambe.Component"] = x;
    x.__name__ = ["flambe", "Component"];
    x.__interfaces__ = [ya];
    x.prototype = {
        onAdded: function() {},
        onRemoved: function() {},
        onStart: function() {},
        onStop: function() {},
        onUpdate: function() {},
        dispose: function() {
            null != this.owner && this.owner.remove(this)
        },
        get_name: function() {
            return null
        },
        __class__: x
    };
    var $b = function(a) {
        this._bFiveSecAllowed = !0;
        this.active = !1;
        x.call(this);
        this._txtMin = o.getField("game.time");
        this._txtSec = o.getField("game.time");
        this._txtSec.x.set__(10);
        this.nTime = a;
        this.updateText();
        this.timeOutSig = new S;
        this.fiveSecLeftSig = new S
    };
    e["com.nick.tmnt.ironStomach.components.CountDownTimer"] = $b;
    $b.__name__ = "com,nick,tmnt,ironStomach,components,CountDownTimer".split(",");
    $b.__super__ =
        x;
    $b.prototype = t(x.prototype, {
        get_name: function() {
            return "CountDownTimer_10"
        },
        onAdded: function() {
            this.owner.addChild((new g).add(this._txtMin));
            this.owner.addChild((new g).add(this._txtSec))
        },
        onUpdate: function(a) {
            this.active && (this._bFiveSecAllowed = 5 < this.nTime, this.nTime -= a, this.updateText(), 0 >= this.nTime ? (this.active = !1, this.timeOutSig.emit()) : 5 > this.nTime && this._bFiveSecAllowed && (this._bFiveSecAllowed = !1, this.fiveSecLeftSig.emit()))
        },
        updateText: function() {
            var a = Math.ceil(this.nTime),
                b = a / 60 | 0;
            0 >
                b && (b = 0);
            a = a % 60 | 0;
            0 > a && (a = 0);
            this._txtMin.set_text(b + "");
            this._txtSec.set_text(":");
            10 > a && (b = this._txtSec, b.set_text(b._text + "0"));
            b = this._txtSec;
            b.set_text(b._text + a)
        },
        __class__: $b
    });
    var fb = function(a, b) {
        this._next = null;
        this._signal = a;
        this._listener = b;
        this.stayInList = !0
    };
    e["flambe.util.SignalConnection"] = fb;
    fb.__name__ = ["flambe", "util", "SignalConnection"];
    fb.__interfaces__ = [ya];
    fb.prototype = {
        once: function() {
            this.stayInList = !1;
            return this
        },
        dispose: function() {
            null != this._signal && (this._signal.disconnect(this),
                this._signal = null)
        },
        __class__: fb
    };
    var V = function(a) {
        this._head = null != a ? new fb(this, a) : null;
        this._deferredTasks = null
    };
    e["flambe.util.SignalBase"] = V;
    V.__name__ = ["flambe", "util", "SignalBase"];
    V.prototype = {
        connectImpl: function(a, b) {
            var c = this,
                d = new fb(this, a);
            this._head == V.DISPATCHING_SENTINEL ? this.defer(function() {
                c.listAdd(d, b)
            }) : this.listAdd(d, b);
            return d
        },
        disconnect: function(a) {
            var b = this;
            this._head == V.DISPATCHING_SENTINEL ? this.defer(function() {
                b.listRemove(a)
            }) : this.listRemove(a)
        },
        defer: function(a) {
            for (var b =
                    null, c = this._deferredTasks; null != c;) b = c, c = c.next;
            a = new Mc(a);
            null != b ? b.next = a : this._deferredTasks = a
        },
        willEmit: function() {
            var a = this._head;
            this._head = V.DISPATCHING_SENTINEL;
            return a
        },
        didEmit: function(a) {
            this._head = a;
            a = this._deferredTasks;
            for (this._deferredTasks = null; null != a;) a.fn(), a = a.next
        },
        listAdd: function(a, b) {
            if (b) a._next = this._head, this._head = a;
            else {
                for (var c = null, d = this._head; null != d;) c = d, d = d._next;
                null != c ? c._next = a : this._head = a
            }
        },
        listRemove: function(a) {
            for (var b = null, c = this._head; null != c;) {
                if (c ==
                    a) {
                    a = c._next;
                    null == b ? this._head = a : b._next = a;
                    break
                }
                b = c;
                c = c._next
            }
        },
        __class__: V
    };
    var K = function(a) {
        V.call(this, a)
    };
    e["flambe.util.Signal1"] = K;
    K.__name__ = ["flambe", "util", "Signal1"];
    K.__super__ = V;
    K.prototype = t(V.prototype, {
        connect: function(a, b) {
            null == b && (b = !1);
            return this.connectImpl(a, b)
        },
        emit: function(a) {
            var b = this;
            this._head == V.DISPATCHING_SENTINEL ? this.defer(function() {
                b.emitImpl(a)
            }) : this.emitImpl(a)
        },
        emitImpl: function(a) {
            for (var b = this.willEmit(), c = b; null != c;) c._listener(a), c.stayInList || c.dispose(),
                c = c._next;
            this.didEmit(b)
        },
        __class__: K
    });
    var O = function() {
        this.enabled = !0;
        x.call(this);
        this._disposer = new na
    };
    e["com.nick.tmnt.ironStomach.components.Draggable"] = O;
    O.__name__ = "com,nick,tmnt,ironStomach,components,Draggable".split(",");
    O.__super__ = x;
    O.prototype = t(x.prototype, {
        get_name: function() {
            return "Draggable_9"
        },
        onPointerDown: function(a) {
            if (this.enabled) {
                O.currentlyDragged = this;
                var b = this.owner._compMap.Sprite_3,
                    c = this.localToGlobal();
                this._offset = new za(a.viewX - c.x, a.viewY - c.y);
                this._dragging = !0;
                k._platform.getMouse().set_cursor(aa.Button);
                this._origParent = this.owner.parent;
                this._origPos = new za(b.x._value, b.y._value);
                b.setXY(a.viewX - this._offset.x, a.viewY - this._offset.y);
                k.root.addChild(this.owner);
                b.set_pointerEnabled(!1);
                O.objectBeingDragged.emit(!0)
            }
        },
        onUpdate: function() {
            if (this._dragging) {
                var a = this.owner._compMap.Sprite_3;
                k._platform.getPointer().isDown() ? a.setXY(k._platform.getPointer().get_x() - this._offset.x, k._platform.getPointer().get_y() - this._offset.y) : (O.objectBeingDragged.emit(!1),
                    O.currentlyDragged = null, this._dragging = !1, a.set_pointerEnabled(!0), k._platform.getMouse().set_cursor(aa.Default), this.enabled && (this._origParent.addChild(this.owner), a.x.set__(this._origPos.x), a.y.set__(this._origPos.y)))
            }
        },
        onAdded: function() {
            this._disposer.connect1(this.owner._compMap.Sprite_3.get_pointerDown(), z(this, this.onPointerDown));
            this.owner.add(new Y)
        },
        dispose: function() {
            x.prototype.dispose.call(this);
            this._disposer.dispose()
        },
        localToGlobal: function() {
            var a = this.owner._compMap.Sprite_3;
            return a.getViewMatrix().transform(a.anchorX._value, a.anchorY._value, null)
        },
        __class__: O
    });
    var La = function() {
        this.enabled = !0;
        x.call(this);
        this._disposer = new na;
        this.pointerUpSignal = new S;
        this.pointerInSignal = new S;
        this.pointerOutSignal = new S
    };
    e["com.nick.tmnt.ironStomach.components.DropArea"] = La;
    La.__name__ = "com,nick,tmnt,ironStomach,components,DropArea".split(",");
    La.__super__ = x;
    La.prototype = t(x.prototype, {
        get_name: function() {
            return "DropArea_8"
        },
        onAdded: function() {
            this._disposer.connect1(this.owner._compMap.Sprite_3.get_pointerUp(),
                z(this, this.onPointerUp));
            this._disposer.connect1(this.owner._compMap.Sprite_3.get_pointerIn(), z(this, this.onPointerIn));
            this._disposer.connect1(this.owner._compMap.Sprite_3.get_pointerOut(), z(this, this.onPointerOut))
        },
        onPointerUp: function() {
            this.enabled && this.pointerUpSignal.emit()
        },
        onPointerIn: function() {
            this.enabled && this.pointerInSignal.emit()
        },
        onPointerOut: function() {
            this.enabled && this.pointerOutSignal.emit()
        },
        __class__: La
    });
    var wb = function(a, b, c) {
        x.call(this);
        this._entity = (new g).add(o.getField(a,
            0, H.Center).setAlpha(0).disablePointer());
        this._pDistance = b.clone();
        this._nTime = c
    };
    e["com.nick.tmnt.ironStomach.components.FloatText"] = wb;
    wb.__name__ = "com,nick,tmnt,ironStomach,components,FloatText".split(",");
    wb.__super__ = x;
    wb.prototype = t(x.prototype, {
        get_name: function() {
            return "FloatText_7"
        },
        onAdded: function() {
            x.prototype.onAdded.call(this);
            this.owner.addChild(this._entity)
        },
        reset: function(a) {
            var b = s.instance(this._entity._compMap.Sprite_3, xb);
            b.set_text(a);
            b.setXY(0, 0);
            b.alpha.set__(1);
            b.x.animateTo(this._pDistance.x,
                this._nTime);
            b.y.animateTo(this._pDistance.y, this._nTime);
            b.alpha.animateTo(0, this._nTime, ka.quadIn)
        },
        __class__: wb
    });
    var ja = function() {
        this.bConfigLoaded = !1;
        x.call(this);
        this.configLoaded = new S;
        this.setupConfig()
    };
    e["com.nick.tmnt.ironStomach.components.GameTracker"] = ja;
    ja.__name__ = "com,nick,tmnt,ironStomach,components,GameTracker".split(",");
    ja.__super__ = x;
    ja.prototype = t(x.prototype, {
        get_name: function() {
            return "GameTracker_15"
        },
        setupConfig: function() {
            ja._configXmlPath = "xml/config.xml";
            var a = new M,
                b = ja._configXmlPath;
            null != o.externalBase ? b = o.externalBase + ja._configXmlPath : null != o.relativeBase && (b = o.relativeBase + ja._configXmlPath);
            a.add(ja._configXmlPath, b);
            k._platform.loadAssetPack(a).get(z(this, this.onXmlSuccess))
        },
        onXmlSuccess: function(a) {
            a = j.parse(a.getFile(ja._configXmlPath).toString());
            ja.config = new gb(a.firstElement());
            this.bConfigLoaded = !0;
            this.configLoaded.emit()
        },
        __class__: ja
    });
    var ac = function(a, b, c) {
        this._bActive = !1;
        x.call(this);
        this._pack = a;
        this._ingredientPack = b;
        this._ingredientsLayer =
            new g;
        this._aIngredients = [];
        a = null;
        for (c = c.nodes.resolve("order").iterator(); null != c.head;) c.val = c.head[0], c.head = c.head[1], a = c.val, a = (new g).add(new q(b.getTexture(a.get_innerData()))), this._aIngredients.push(a);
        this.timeoutSig = new S
    };
    e["com.nick.tmnt.ironStomach.components.OrderBox"] = ac;
    ac.__name__ = "com,nick,tmnt,ironStomach,components,OrderBox".split(",");
    ac.__super__ = x;
    ac.prototype = t(x.prototype, {
        get_name: function() {
            return "OrderBox_6"
        },
        onAdded: function() {
            x.prototype.onAdded.call(this);
            this.owner.addChild((new g).add(new q(this._pack.getTexture("order/box")))).addChild((new g).add((new q(this._pack.getTexture("order/meterBg"))).setXY(86,
                6))).addChild(this._ingredientsLayer);
            this._midColor = new q(this._pack.getTexture("order/meterMid"));
            this._highColor = new q(this._pack.getTexture("order/meterHigh"));
            this._meterRect = new Wa(0, 0, this._highColor.getNaturalWidth(), this._highColor.getNaturalHeight());
            this._meter = (new g).add((new l).setXY(86, 6)).addChild((new g).add(new q(this._pack.getTexture("order/meterLow")))).addChild((new g).add(this._midColor)).addChild((new g).add(this._highColor));
            this.owner.addChild(this._meter)
        },
        reset: function(a) {
            this._nCurTime =
                i.bTurtleMeter ? 2 * a : a;
            this._nFullTime = a;
            this._bActive = !0;
            this.updateMeter()
        },
        stop: function() {
            this._bActive = !1
        },
        onUpdate: function(a) {
            this._bActive && (this._nCurTime -= a, 0 >= this._nCurTime && (this._bActive = !1, this._nCurTime = 0, this.timeoutSig.emit()), this.updateMeter())
        },
        updateMeter: function() {
            var a = this._meter._compMap.Sprite_3.scissor;
            null == a && (a = this._meterRect.clone());
            var b = this._nCurTime / this._nFullTime;
            a.y = this._meterRect.height - this._meterRect.height * b;
            0.5 < b ? (this._midColor.alpha.set__(1), this._highColor.alpha.set__(2 *
                (b - 0.5))) : (this._highColor.alpha.set__(0), this._midColor.alpha.set__(2 * b));
            this._meter._compMap.Sprite_3.scissor = a
        },
        setIngredients: function(a) {
            for (var b = 0, c = this._aIngredients.length; b < c;) this._ingredientsLayer.removeChild(this._aIngredients[b++]);
            for (var b = null, c = 0, d = a.length; c < d;) {
                var f = c++,
                    b = this._aIngredients[a[f]];
                b._compMap.Sprite_3.setXY(20, 10 + 40 * f);
                this._ingredientsLayer.addChild(b)
            }
            this.aOrder = a.slice()
        },
        getPercentage: function() {
            return this._nCurTime / this._nFullTime
        },
        __class__: ac
    });
    var yb =
        function(a) {
            this._bCookingComplete = !1;
            this._nCurTime = this._nFullTime = 0;
            this.bActive = !1;
            this.entity = (new g).add(new l);
            this.entity.addChild((new g).add(new q(a.getTexture("cook_meter/frame"))));
            this._aMeterBars = [];
            this._aMeterBars.push((new q(a.getTexture("cook_meter/red"))).setXY(4, 44));
            this._aMeterBars.push((new q(a.getTexture("cook_meter/orange2"))).setXY(3, 34));
            this._aMeterBars.push((new q(a.getTexture("cook_meter/orange1"))).setXY(3, 24));
            this._aMeterBars.push((new q(a.getTexture("cook_meter/yellow"))).setXY(3,
                13));
            this._aMeterBars.push((new q(a.getTexture("cook_meter/green"))).setXY(3, 2));
            for (var a = 0, b = this._aMeterBars.length; a < b;) {
                var c = a++;
                this.entity.addChild((new g).add(this._aMeterBars[c]))
            }
            this.pizzaCookedSig = new S;
            this.pizzaBurnedSig = new S
        };
    e["com.nick.tmnt.ironStomach.objects.CookingMeter"] = yb;
    yb.__name__ = "com,nick,tmnt,ironStomach,objects,CookingMeter".split(",");
    yb.prototype = {
        reset: function(a) {
            this._nCurTime = 0;
            this._nFullTime = a;
            this._bCookingComplete = !1;
            this.set_bActive(!0);
            this.entity._compMap.Sprite_3.alpha.set__(1);
            this.updateMeter()
        },
        stop: function() {
            this.set_bActive(!1);
            this.entity._compMap.Sprite_3.alpha.set__(1)
        },
        update: function(a) {
            this.bActive && (this._nCurTime += a, this.updateMeter(), this._nCurTime >= this._nFullTime && (this._bCookingComplete ? (this.set_bActive(!1), this.pizzaBurnedSig.emit()) : (this._bCookingComplete = !0, this._nCurTime -= this._nFullTime, this.pizzaCookedSig.emit())))
        },
        updateMeter: function() {
            if (this._bCookingComplete) 5 > this._nFullTime - this._nCurTime && this.entity._compMap.Sprite_3.alpha.set__(Math.abs(Math.sin(5 *
                (this._nFullTime - this._nCurTime))));
            else
                for (var a = (this._nCurTime / this._nFullTime * this._aMeterBars.length | 0) - 1, b = 0, c = this._aMeterBars.length; b < c;) {
                    var d = b++;
                    this._aMeterBars[d].set_visible(a >= d)
                }
        },
        set_bActive: function(a) {
            this._bCookingComplete && !a && this.entity._compMap.Sprite_3.alpha.set__(1);
            return this.bActive = a
        },
        __class__: yb
    };
    var zb = function(a) {
        this._nCurTime = this._nFullTime = 0;
        this.bActive = !1;
        this.entity = (new g).add(new l);
        this.entity.addChild((new g).add(new q(a.getTexture("cook_meter/frame"))));
        this._aMeterBars = [];
        this._aMeterBars.push((new q(a.getTexture("cook_meter/red"))).setXY(4, 44));
        this._aMeterBars.push((new q(a.getTexture("cook_meter/orange2"))).setXY(3, 34));
        this._aMeterBars.push((new q(a.getTexture("cook_meter/orange1"))).setXY(3, 24));
        this._aMeterBars.push((new q(a.getTexture("cook_meter/yellow"))).setXY(3, 13));
        this._aMeterBars.push((new q(a.getTexture("cook_meter/green"))).setXY(3, 2));
        for (var a = 0, b = this._aMeterBars.length; a < b;) {
            var c = a++;
            this.entity.addChild((new g).add(this._aMeterBars[c]))
        }
        this.doughReadySig =
            new S
    };
    e["com.nick.tmnt.ironStomach.objects.DoughMeter"] = zb;
    zb.__name__ = "com,nick,tmnt,ironStomach,objects,DoughMeter".split(",");
    zb.prototype = {
        reset: function(a) {
            this._nCurTime = 0;
            this._nFullTime = a;
            this.bActive = !0;
            this.updateMeter()
        },
        update: function(a) {
            this.bActive && (this._nCurTime += a, this.updateMeter(), this._nCurTime >= this._nFullTime && (this.bActive = !1, this._nCurTime -= this._nFullTime, this.doughReadySig.emit()))
        },
        updateMeter: function() {
            for (var a = (this._nCurTime / this._nFullTime * this._aMeterBars.length |
                    0) - 1, b = 0, c = this._aMeterBars.length; b < c;) {
                var d = b++;
                this._aMeterBars[d].set_visible(a >= d)
            }
        },
        __class__: zb
    };
    var Nc = function(a, b, c, d) {
        this.state = -1;
        this.entity = (new g).add(new l);
        this.id = d;
        this.aToppings = [];
        this._doughLayer = (new g).add(new l).addChild((new g).add((new q(a.getTexture("doughBall"))).setXY(60, 10)));
        this._doughLayer._compMap.Sprite_3.set_visible(!1);
        this.entity.addChild(this._doughLayer);
        this._uncookedCrustLayer = (new g).add(new l).addChild((new g).add(new q(a.getTexture("uncooked_pizza"))));
        this._uncookedCrustLayer._compMap.Sprite_3.set_visible(!1);
        this.entity.addChild(this._uncookedCrustLayer);
        this._cookedCrustLayer = (new g).add(new l).addChild((new g).add(new q(a.getTexture("cooked_pizza"))));
        this._cookedCrustLayer._compMap.Sprite_3.set_visible(!1);
        this.entity.addChild(this._cookedCrustLayer);
        this._burnedBottomLayer = (new g).add(new l).addChild((new g).add(new q(a.getTexture("burnedBottom"))));
        this._burnedBottomLayer._compMap.Sprite_3.set_visible(!1);
        this.entity.addChild(this._burnedBottomLayer);
        this._toppingLayer = new g;
        this.entity.addChild(this._toppingLayer);
        this._burnedTopLayer = (new g).add(new l).addChild((new g).add(new q(a.getTexture("burnedTop"))));
        this._burnedTopLayer._compMap.Sprite_3.set_visible(!1);
        this.entity.addChild(this._burnedTopLayer);
        this._pizzaPack = a;
        this._toppingPack = b;
        this._aToppingPaths = [];
        for (var f = c.nodes.resolve("topping").iterator(); null != f.head;) this._aToppingPaths.push(function() {
            f.val = f.head[0];
            f.head = f.head[1];
            return f.val
        }(this).get_innerData());
        this.set_state(0);
        this.entity.add(new O)
    };
    e["com.nick.tmnt.ironStomach.objects.Pizza"] = Nc;
    Nc.__name__ = "com,nick,tmnt,ironStomach,objects,Pizza".split(",");
    Nc.prototype = {
        set_state: function(a) {
            switch (this.state) {
                case 0:
                    this._doughLayer._compMap.Sprite_3.set_visible(!1);
                    break;
                case 1:
                    this._uncookedCrustLayer._compMap.Sprite_3.set_visible(!1);
                    break;
                case 2:
                    this._cookedCrustLayer._compMap.Sprite_3.set_visible(!1);
                    break;
                case 3:
                    this._burnedBottomLayer._compMap.Sprite_3.set_visible(!1), this._burnedTopLayer._compMap.Sprite_3.set_visible(!1)
            }
            this.state =
                a;
            switch (this.state) {
                case 0:
                    this._doughLayer._compMap.Sprite_3.set_visible(!0);
                    break;
                case 1:
                    this._uncookedCrustLayer._compMap.Sprite_3.set_visible(!0);
                    break;
                case 2:
                    this._cookedCrustLayer._compMap.Sprite_3.set_visible(!0);
                    break;
                case 3:
                    this._burnedBottomLayer._compMap.Sprite_3.set_visible(!0), this._burnedTopLayer._compMap.Sprite_3.set_visible(!0)
            }
            return this.state
        },
        enableTopping: function(a) {
            if ("" != this._aToppingPaths[a]) {
                this.aToppings.push(a);
                var b = this._aToppingPaths[a];
                "" == this._aToppingPaths[a];
                this._toppingLayer.addChild((new g).add(new q(this._toppingPack.getTexture(b))))
            }
        },
        __class__: Nc
    };
    var Ab = function(a, b, c, d, f, h) {
        this.bLastImpression = !0;
        this._disposer = new na;
        this._sName = f;
        this.doneWaitingSig = new K;
        this.impressionCompleteSig = new K;
        this.dropArea = new La;
        this.dropArea.enabled = !1;
        this.id = h;
        this._pack = a;
        this.orderBox = new ac(a, b, d);
        a = (new g).add((new l).setXY(150, -40)).add(this.orderBox);
        a._compMap.Sprite_3.alpha.set__(0);
        this._disposer.connect0(this.orderBox.timeoutSig, z(this, this.handleOrderTimeout));
        this.player = new bc(c);
        this.loop("Stealth");
        this.entity = (new g).add(new l).addChild((new g).add((new l).setXY(80, 150)).add(this.player)).add(this.dropArea).add(this._disposer).addChild(a)
    };
    e["com.nick.tmnt.ironStomach.objects.Turtle"] = Ab;
    Ab.__name__ = "com,nick,tmnt,ironStomach,objects,Turtle".split(",");
    Ab.prototype = {
        handleOrderTimeout: function() {
            this.doneWaitingSig.emit(this.id)
        },
        setImpression: function(a) {
            this.bLastImpression = a;
            var b = "";
            a ? 0.4 < this.orderBox.getPercentage() ? (this._pack.getSound("sound/TurtHappy").play(),
                b = "Happy") : (this._pack.getSound("sound/TurtConfused").play(), b = "Annoyed") : (this._pack.getSound("sound/TurtMad").play(), b = "Mad");
            this.player.play(this._sName + b);
            this._impressionConnection = this.player.oneTimeCompleteSig.connect(z(this, this.handleImpressionComplete));
            this._disposer.add(this._impressionConnection)
        },
        loop: function(a) {
            this.player.loop(this._sName + a)
        },
        toggleStealth: function() {
            this.loop("Idle");
            this.player.play(this._sName + "StealthToggle")
        },
        handleImpressionComplete: function() {
            this._disposer.remove(this._impressionConnection);
            this._impressionConnection.dispose();
            this.impressionCompleteSig.emit(this.id)
        },
        __class__: Ab
    };
    var Oc = function(a, b, c) {
        this.entity = (new g).add(new l);
        this.nId = c;
        c = a.node.resolve("name").get_innerData();
        b = (new q(b.getTexture(c))).disablePointer();
        this.entity.addChild((new g).add(b));
        var d = c = 0,
            f = 0,
            h = 0;
        a.hasNode.resolve("hit") ? (c = a.node.resolve("hit").has.resolve("x") ? s.parseInt(a.node.resolve("hit").att.resolve("x")) : 0, d = a.node.resolve("hit").has.resolve("y") ? s.parseInt(a.node.resolve("hit").att.resolve("y")) :
            0, f = s.parseInt(a.node.resolve("hit").att.resolve("w")), h = s.parseInt(a.node.resolve("hit").att.resolve("h"))) : (d = c = 0, f = s["int"](b.getNaturalWidth()), h = s["int"](b.getNaturalHeight()));
        if (a.hasNode.resolve("type")) switch (a.node.resolve("type").get_innerData()) {
            case "sauce":
                this.type = 1;
                break;
            case "easycheese":
                this.type = 2;
                break;
            default:
                this.type = 0
        } else this.type = 0;
        this.hit = (new fa(16711935, f, h)).setXY(c, d);
        this.hit.alpha.set__(0);
        this.entity.addChild((new g).add(this.hit));
        this.entity.add(new O);
        c = s.parseInt(a.node.resolve("pos").att.resolve("x"));
        d = s.parseInt(a.node.resolve("pos").att.resolve("y"));
        this.entity._compMap.Sprite_3.setXY(c, d)
    };
    e["com.nick.tmnt.ironStomach.objects.ingredients.Ingredient"] = Oc;
    Oc.__name__ = "com,nick,tmnt,ironStomach,objects,ingredients,Ingredient".split(",");
    Oc.prototype = {
        __class__: Oc
    };
    var Ha = function(a) {
        null == a && (a = !0);
        x.call(this);
        this.opaque = a;
        this.shown = new S;
        this.hidden = new S
    };
    e["flambe.scene.Scene"] = Ha;
    Ha.__name__ = ["flambe", "scene", "Scene"];
    Ha.__super__ = x;
    Ha.prototype = t(x.prototype, {
        get_name: function() {
            return "Scene_0"
        },
        __class__: Ha
    });
    var va = function() {
        this._intialized = !1;
        Ha.call(this);
        this.requiredPacks = []
    };
    e["s2.scene.BaseScene"] = va;
    va.__name__ = ["s2", "scene", "BaseScene"];
    va.__super__ = Ha;
    va.prototype = t(Ha.prototype, {
        onAdded: function() {
            var a = this.owner._compMap.Disposer_14;
            null == a && this.owner.add(a = new na);
            var b = u.director.get_topScene(),
                b = null != b ? b._compMap.Scene_0 : null,
                c = null,
                c = null != b ? b.hidden.connect(z(this, this.onShown)).once() : this.shown.connect(z(this, this.onShown)).once();
            a.add(c);
            this._hiddenBind = this.hidden.connect(z(this,
                this.onHidden)).once();
            a.add(this._hiddenBind);
            a.connect0(k._platform.getStage().resize, z(this, this.onResize));
            this._intialized || (this.assetsReady(), this._intialized = !0, this.onResize())
        },
        assetsReady: function() {},
        injectAssets: function(a) {
            this._assets = a
        },
        onShown: function() {},
        onHidden: function() {},
        onResize: function() {},
        __class__: va
    });
    var F = function() {
        this.standardHeight = 768;
        this.standardWidth = 1366;
        va.call(this);
        this._disposer = new na
    };
    e["s2.scene.AutoBackingScene"] = F;
    F.__name__ = ["s2", "scene", "AutoBackingScene"];
    F.__super__ = va;
    F.prototype = t(va.prototype, {
        setBackground: function(a) {
            this.__ = new Pc(this.standardWidth, this.standardHeight, a.getNaturalWidth(), a.getNaturalHeight());
            (null == this._backing ? this._backing = new g : this._backing).add(a);
            if (null != this.owner && null != this.owner.parent) this.onResize()
        },
        onAdded: function() {
            this.setBackground(new fa(16711680, this.standardWidth, this.standardHeight));
            this._container = (new g).add(new l).addChild(this._backing);
            this.owner.addChild(this._container);
            this._disposer = this.owner._compMap.Disposer_14;
            null == this._disposer && (this._disposer = new na, this.owner.add(this._disposer));
            va.prototype.onAdded.call(this)
        },
        onResize: function() {
            var a = Math.min(k._platform.getStage().get_width() / (1024 * this.__.scaleX), k._platform.getStage().get_height() / (600 * this.__.scaleY)),
                b = this.__.newWidth * a,
                c = this.__.newHeight * a;
            this._container._compMap.Sprite_3.setScale(a).setXY(0.5 * (k._platform.getStage().get_width() - b), 0.5 * (k._platform.getStage().get_height() - c))
        },
        __class__: F
    });
    var Bb = function() {
        this._bReset = !0;
        F.call(this);
        this.requiredPacks.push("codeUnlock_scene");
        this.requiredPacks.push("global")
    };
    e["com.nick.tmnt.ironStomach.scenes.CodeUnlockScene"] = Bb;
    Bb.__name__ = "com,nick,tmnt,ironStomach,scenes,CodeUnlockScene".split(",");
    Bb.__super__ = F;
    Bb.prototype = t(F.prototype, {
        onRemoved: function() {
            this._assets.unload("codeUnlock_scene")
        },
        assetsReady: function() {
            var a = this;
            F.prototype.assetsReady.call(this);
            this._aValidCodes = [];
            for (var b = ja.config.node.resolve("game").node.resolve("unlock").nodes.resolve("code").iterator(); null !=
                b.head;) {
                var c;
                b.val = b.head[0];
                b.head = b.head[1];
                c = b.val;
                "true" == c.att.resolve("enabled") && this._aValidCodes.push(new Qc(s.parseInt(c.get_innerData()), c.att.resolve("unlocks")))
            }
            this._pack = this._assets.get("codeUnlock_scene");
            this._globalPack = this._assets.get("global");
            this.setBackground(new oa(this._pack.getTexture("bg1"), this._pack.getTexture("bg2")));
            for (var b = [], d = c = 0, f = 0; 10 > f;) {
                var h = [f++];
                b.push(new q(this._pack.getTexture("bt" + h[0])));
                this._disposer.connect1(b[h[0]].get_pointerUp(), function(b) {
                    return function() {
                        a.numberPressed(b[0])
                    }
                }(h));
                0 == h[0] ? b[0].setXY(636, 559) : (c = (h[0] - 1) % 3, d = (h[0] - 1) / 3 | 0, b[h[0]].setXY(570 + 66 * c, 355 + 68 * d));
                this._container.addChild((new g).add(b[h[0]]).add(new Y))
            }
            b = (new q(this._pack.getTexture("x"))).setXY(570, 559);
            this._container.addChild((new g).add(b).add(new Y));
            this._disposer.connect1(b.get_pointerUp(), function() {
                a.backSpaceClicked()
            });
            this._code = o.getField("codeUnlock.enter", 0, H.Center);
            this._codeParent = (new g).add((new l).setXY(663, 263)).addChild((new g).add(this._code));
            this._container.addChild(this._codeParent);
            b = (new q(this._pack.getTexture("check"))).setXY(702, 559);
            this._container.addChild((new g).add(b).add(new Y));
            this._disposer.connect1(b.get_pointerUp(), function() {
                a.confirmClicked()
            });
            this._backBt = Aa.makeButton("codeUnlock.back", this._globalPack.getTexture("ui/backIcon"), this._globalPack.getTexture("ui/button"), !0);
            this._backBt._compMap.Sprite_3.setXY(339, 605);
            this._container.addChild(this._backBt);
            this._disposer.connect1(this._backBt._compMap.Sprite_3.get_pointerUp(), function() {
                a.backClicked()
            });
            this._description = (new g).add((new l).setXY(663, 249));
            this._description._compMap.Sprite_3.set_visible(!1);
            this._container.addChild(this._description)
        },
        numberPressed: function(a) {
            this._bReset && (this._description._compMap.Sprite_3.set_visible(!1), this._codeParent._compMap.Sprite_3.set_visible(!0), this._code.set_text(""), this._bReset = !1);
            if (4 > this._code._text.length) {
                var b = this._code;
                b.set_text(b._text + a)
            }
        },
        backSpaceClicked: function() {
            this._bReset ? (this._description._compMap.Sprite_3.set_visible(!1),
                this._codeParent._compMap.Sprite_3.set_visible(!0)) : 1 == this._code._text.length ? (this._code = o.getField("codeUnlock.enter", 0, H.Center), this._codeParent.disposeChildren(), this._codeParent.addChild((new g).add(this._code)), this._bReset = !0) : this._code.set_text(w.substr(this._code._text, 0, this._code._text.length - 1))
        },
        confirmClicked: function() {
            for (var a = this, b = s.parseInt(this._code._text), c = "", d = 0, f = this._aValidCodes.length; d < f;) {
                var h = d++;
                if (this._aValidCodes[h].number == b) {
                    c = this._aValidCodes[h].unlocks;
                    break
                }
            }
            "" != c ? (this._description._compMap.Sprite_3.set_visible(!0), this._codeParent._compMap.Sprite_3.set_visible(!1), this.unlockValue(c), this._bReset = !0) : (b = this._container._compMap.Script_11, null == b && (b = new Ma, this._container.add(b)), b.run(new ba([new T(function() {
                a._code = o.getField("codeUnlock.error", 0, H.Center);
                a._codeParent.disposeChildren();
                a._codeParent.addChild((new g).add(a._code));
                a._bReset = !0
            }), new hb([new cc(5, 5, 1), new Cb(new ba([new T(function() {
                    a._code.alpha.set__(0)
                }), new la(0.2), new T(function() {
                    a._code.alpha.set__(1)
                }),
                new la(0.2)
            ]), 3)]), new la(0.2), new T(function() {
                a._code = o.getField("codeUnlock.enter", 0, H.Center);
                a._codeParent.disposeChildren();
                a._codeParent.addChild((new g).add(a._code))
            })])))
        },
        unlockValue: function(a) {
            this._description.disposeChildren();
            var b = o.getField("codeUnlock." + a, 0, H.Center);
            this._description.addChild((new g).add(b));
            switch (a) {
                case "incMeter":
                    i.bTurtleMeter = !0;
                    break;
                case "decDough":
                    i.bDoughSpeed = !0;
                    break;
                case "decCook":
                    i.bCookTimes = !0;
                    break;
                case "doubleScore":
                    i.bDoubleScores = !0
            }
        },
        backClicked: function() {
            this._globalPack.getSound("sound/ButtonClick").play();
            u["goto"](Ua)
        },
        __class__: Bb
    });
    var Qc = function(a, b) {
        this.number = a;
        this.unlocks = b
    };
    e["com.nick.tmnt.ironStomach.scenes.Code"] = Qc;
    Qc.__name__ = "com,nick,tmnt,ironStomach,scenes,Code".split(",");
    Qc.prototype = {
        __class__: Qc
    };
    var Db = function() {
        F.call(this);
        this.requiredPacks.push("gameOver_scene");
        this.requiredPacks.push("global")
    };
    e["com.nick.tmnt.ironStomach.scenes.GameOverScene"] = Db;
    Db.__name__ = "com,nick,tmnt,ironStomach,scenes,GameOverScene".split(",");
    Db.__super__ = F;
    Db.prototype = t(F.prototype, {
        onRemoved: function() {
            this._assets.unload("gameOver_scene")
        },
        assetsReady: function() {
            var a = this;
            F.prototype.assetsReady.call(this);
            this._pack = this._assets.get("gameOver_scene");
            this._globalPack = this._assets.get("global");
            this.setBackground(new oa(this._pack.getTexture("bg1"), this._pack.getTexture("bg2")));
            this._tryAgainBt = Aa.makeButton("gameOver.tryAgain", this._globalPack.getTexture("ui/replayIcon"), this._globalPack.getTexture("ui/button"));
            this._tryAgainBt._compMap.Sprite_3.setXY(1011, 604);
            this._container.addChild(this._tryAgainBt);
            this._disposer.connect1(this._tryAgainBt._compMap.Sprite_3.get_pointerUp(),
                function() {
                    a.playAgainClicked()
                });
            this._container.addChild((new g).add(o.getField("gameOver.notCool", 0, H.Center).setXY(996, 115)));
            var b = o.getField("gameOver.slices", 0, H.Center),
                c = new X("%2", "");
            b.set_text(c.replace(b._text, i.nPizzaGoal + ""));
            c = new X("%1", "");
            b.set_text(c.replace(b._text, v.goodPizza + ""));
            this._container.addChild((new g).add(b.setXY(918, 410)));
            var d = v.goodPizza * i.nPizzaScore,
                b = v;
            b.set_curScore(b.curScore + d);
            b = o.getField("gameOver.slicesScore", 0, H.Right);
            b.set_text(c.replace(b._text,
                d + ""));
            this._container.addChild((new g).add(b.setXY(1152, 410)));
            b = o.getField("gameOver.score", 0, H.Right);
            b.set_text(c.replace(b._text, v.get_score() + ""));
            this._container.addChild((new g).add(b.setXY(1152, 450)));
            this._container.addChild((new g).add(o.getField("gameOver.youBetter").setXY(854, 513)));
            v.rollIntoTotal()
        },
        playAgainClicked: function() {
            ua.track(["replay"]);
            this._globalPack.getSound("sound/ButtonClick").play();
            v.reset();
            u["goto"](Xa)
        },
        __class__: Db
    });
    var Ya = function() {
        this._ickPlayer = null;
        F.call(this);
        this._sIngredientPackName = i.sLevelPizzaType;
        this.requiredPacks.push("game_scene");
        this.requiredPacks.push("pause_scene");
        this.requiredPacks.push("results_scene");
        this.requiredPacks.push("global");
        this.requiredPacks.push(this._sIngredientPackName)
    };
    e["com.nick.tmnt.ironStomach.scenes.GameScene"] = Ya;
    Ya.__name__ = "com,nick,tmnt,ironStomach,scenes,GameScene".split(",");
    Ya.__super__ = F;
    Ya.prototype = t(F.prototype, {
        assetsReady: function() {
            var a = this;
            F.prototype.assetsReady.call(this);
            this._pack = this._assets.get("game_scene");
            this._globalPack = this._assets.get("global");
            this._ingredientPack = this._assets.get(this._sIngredientPackName);
            null == this.owner._compMap.Script_11 && this.owner.add(new Ma);
            var b = j.parse(this._ingredientPack.getFile("setup.xml").toString());
            this._xSetup = new gb(b.firstElement());
            this._aOrderingTurtles = [null, null, null];
            this._turtleLib = new Eb(this._pack, "library/turtles");
            this._poofLib = new Eb(this._pack, "library/dustPoof");
            b = this._xSetup.node.resolve("orders");
            this._aAvailableTurtles = [];
            this._aAvailableTurtles.push(new Ab(this._pack,
                this._ingredientPack, this._turtleLib, b, "Donny", 0));
            this._aAvailableTurtles.push(new Ab(this._pack, this._ingredientPack, this._turtleLib, b, "Leo", 1));
            this._aAvailableTurtles.push(new Ab(this._pack, this._ingredientPack, this._turtleLib, b, "Raph", 2));
            for (var b = 0, c = this._aAvailableTurtles.length; b < c;) {
                var d = b++;
                this._disposer.connect1(this._aAvailableTurtles[d].doneWaitingSig, z(this, this.turtleDoneWaiting));
                this._disposer.connect1(this._aAvailableTurtles[d].impressionCompleteSig, z(this, this.removeTurtle))
            }
            this._container.addChild((new g).add(new oa(this._pack.getTexture("bg1"),
                this._pack.getTexture("bg2"))));
            this._turtleContainer = new g;
            this._container.addChild(this._turtleContainer);
            b = new oa(this._pack.getTexture("fg1"), this._pack.getTexture("fg2"));
            b.y.set__(768 - b.getNaturalHeight());
            c = b.y;
            c.set__(c._value - 55);
            b.set_pointerEnabled(!1);
            this._container.addChild((new g).add(b));
            b = this._turtleLib.createSprite("FireStove", !0);
            this._container.addChild((new g).add(b.setXY(708, 389).disablePointer()));
            b = b.y;
            b.set__(b._value - 55);
            this._draggableLayer = new g;
            this._draggableLayer.add((new l).setXY(0, -55));
            this._container.addChild(this._draggableLayer);
            this._dropAreaLayer = (new g).add(new l);
            b = this._dropAreaLayer._compMap.Sprite_3.y;
            b.set__(b._value - 55);
            this._container.addChild(this._dropAreaLayer);
            this._dropAreaLayer._compMap.Sprite_3.set_visible(!1);
            this._bonusLayer = (new g).add(new l);
            this._container.addChild(this._bonusLayer);
            A.muteBt._compMap.Sprite_3.set_visible(!1);
            this._pauseBt = (new g).add(new q(this._pack.getTexture("pauseBt"))).add(new Y);
            this._container.addChild(this._pauseBt);
            this._txtGoal =
                o.getField("game.hudGoal", 0, H.Right);
            this._txtGoal.set_text("0/" + i.nPizzaGoal);
            this._container.addChild((new g).add(this._txtGoal));
            this._score = (new g).add((new l).disablePointer());
            this._container.addChild(this._score);
            this.updateScore();
            this._aIngredients = [];
            b = null;
            for (c = this._xSetup.node.resolve("ingredients").nodes.resolve("ingredient").iterator(); null != c.head;) c.val = c.head[0], c.head = c.head[1], b = new Oc(c.val, this._ingredientPack, this._aIngredients.length), this._aIngredients.push(b), this._draggableLayer.addChild(b.entity),
                this._disposer.connect1(b.hit.get_pointerDown(), function() {
                    a._pack.getSound("sound/PickupTopping").play()
                });
            this._aUncookedPizzas = [null, null, null];
            this._aCookingPizzas = [null, null, null];
            this.updateUncookedPizzas();
            this._aToppingDropAreas = [];
            b = null;
            for (c = 0; 3 > c;) d = [c++], b = (new g).add((new fa(16711935, 170, 160)).setAlpha(0).setXY(440 + 175 * d[0], 520)).add(new La), this._aToppingDropAreas.push(b), this._dropAreaLayer.addChild(b), this._disposer.connect0(b._compMap.DropArea_8.pointerUpSignal, function(b) {
                return function() {
                    a.toppingDropAreaClicked(b[0])
                }
            }(d));
            this._aCookingDropAreas = [];
            for (c = 0; 3 > c;) d = [c++], b = (new g).add((new fa(16711935, 154, 170)).setAlpha(0).setXY(492 + 157 * d[0], 346)).add(new La), this._aCookingDropAreas.push(b), this._dropAreaLayer.addChild(b), this._disposer.connect0(b._compMap.DropArea_8.pointerUpSignal, function(b) {
                return function() {
                    a.uncookedPizzaDropped(b[0])
                }
            }(d));
            this._leftTrash = (new g).add((new q(this._pack.getTexture("trash"))).disablePointer().setAlpha(0.6));
            this._container.addChild(this._leftTrash);
            this._rightTrash = (new g).add(new l).addChild((new g).add((new q(this._pack.getTexture("trash"))).centerAnchor().disablePointer().setAlpha(0.6).setScaleXY(-1,
                1)));
            this._container.addChild(this._rightTrash);
            b = (new g).add((new fa(16711935, 270, 768)).setAlpha(0)).add(new La);
            this._disposer.connect0(b._compMap.DropArea_8.pointerUpSignal, function() {
                a.trashDraggable()
            });
            this._dropAreaLayer.addChild(b);
            b = (new g).add((new fa(16711935, 270, 768)).setAlpha(0).setXY(1096, 0)).add(new La);
            this._disposer.connect0(b._compMap.DropArea_8.pointerUpSignal, function() {
                a.trashDraggable()
            });
            this._dropAreaLayer.addChild(b);
            this._aCookingMeters = [];
            b = new yb(this._pack);
            this._draggableLayer.addChild(b.entity);
            b.entity._compMap.Sprite_3.setXY(560, 362);
            b.entity._compMap.Sprite_3.set_visible(!1);
            this._aCookingMeters.push(b);
            b = new yb(this._pack);
            this._draggableLayer.addChild(b.entity);
            b.entity._compMap.Sprite_3.setXY(705, 351);
            b.entity._compMap.Sprite_3.set_visible(!1);
            this._aCookingMeters.push(b);
            b = new yb(this._pack);
            this._draggableLayer.addChild(b.entity);
            b.entity._compMap.Sprite_3.setXY(854, 362);
            b.entity._compMap.Sprite_3.set_visible(!1);
            this._aCookingMeters.push(b);
            b = 0;
            for (c = this._aCookingMeters.length; b <
                c;) d = [b++], this._disposer.connect0(this._aCookingMeters[d[0]].pizzaCookedSig, function(b) {
                return function() {
                    a.pizzaDoneCooking(b[0])
                }
            }(d)), this._disposer.connect0(this._aCookingMeters[d[0]].pizzaBurnedSig, function(b) {
                return function() {
                    a.pizzaIsBurned(b[0])
                }
            }(d));
            this._aDoneText = [o.getField("game.done"), o.getField("game.done"), o.getField("game.done")];
            this._aDoneText[0].setXY(546, 452).disablePointer().setAlpha(0);
            this._aDoneText[1].setXY(689, 452).disablePointer().setAlpha(0);
            this._aDoneText[2].setXY(828,
                452).disablePointer().setAlpha(0);
            b = 0;
            for (c = this._aDoneText.length; b < c;) d = b++, this._container.addChild((new g).add(this._aDoneText[d]));
            this._aBurnedText = [o.getField("game.burnt"), o.getField("game.burnt"), o.getField("game.burnt")];
            this._aBurnedText[0].setXY(546, 452).disablePointer().setAlpha(0);
            this._aBurnedText[1].setXY(689, 452).disablePointer().setAlpha(0);
            this._aBurnedText[2].setXY(828, 452).disablePointer().setAlpha(0);
            b = 0;
            for (c = this._aBurnedText.length; b < c;) d = b++, this._container.addChild((new g).add(this._aBurnedText[d]));
            this._aDoughMeters = [];
            b = new zb(this._pack);
            this._draggableLayer.addChild(b.entity);
            b.entity._compMap.Sprite_3.setXY(590, 553);
            b.entity._compMap.Sprite_3.set_visible(!1);
            this._aDoughMeters.push(b);
            b = new zb(this._pack);
            this._draggableLayer.addChild(b.entity);
            b.entity._compMap.Sprite_3.setXY(765, 553);
            b.entity._compMap.Sprite_3.set_visible(!1);
            this._aDoughMeters.push(b);
            b = new zb(this._pack);
            this._draggableLayer.addChild(b.entity);
            b.entity._compMap.Sprite_3.setXY(940, 553);
            b.entity._compMap.Sprite_3.set_visible(!1);
            this._aDoughMeters.push(b);
            b = 0;
            for (c = this._aDoughMeters.length; b < c;) d = [b++], this._disposer.connect0(this._aDoughMeters[d[0]].doughReadySig, function(b) {
                return function() {
                    a.doughDoneRising(b[0])
                }
            }(d));
            this._timer = (new g).add(new l).add(new $b(i.nTotalGameTime));
            this._timer._compMap.Sprite_3.setXY(1048, 310);
            b = this._timer._compMap.Sprite_3.y;
            b.set__(b._value - 55);
            this._container.addChild(this._timer);
            this._goodTimeTxt = (new g).add((new l).setXY(1125, 293)).add(new wb("game.goodFloatText", new za(0, -20), 1));
            this._container.addChild(this._goodTimeTxt);
            b = this._goodTimeTxt._compMap.Sprite_3.y;
            b.set__(b._value - 55);
            this._badTimeTxt = (new g).add((new l).setXY(1125, 293)).add(new wb("game.badFloatText", new za(0, -20), 1));
            this._container.addChild(this._badTimeTxt);
            b = this._badTimeTxt._compMap.Sprite_3.y;
            b.set__(b._value - 55);
            this._aDoughPoofs = [];
            for (b = 0; 3 > b;) c = b++, d = [this._poofLib.createSprite("dustpoof", !0)], d[0].set_paused(!0), d[0].set_visible(!1), d[0].setXY(555 + 175 * c, 610).setScale(2).disablePointer(), this._disposer.connect0(d[0].get_looped(),
                function(a) {
                    return function() {
                        a[0].set_visible(!1);
                        a[0].set_paused(!0);
                        a[0].set_position(0)
                    }
                }(d)), this._aDoughPoofs.push(d[0]), this._container.addChild((new g).add(d[0]).add(new Va(3)));
            this._aTurtlePoofs = [];
            for (b = 0; 3 > b;) c = b++, d = [this._poofLib.createSprite("dustpoof", !0)], d[0].set_paused(!0), d[0].set_visible(!1), d[0].setXY(389 + 240 * c, 264).setScale(4).disablePointer(), this._disposer.connect0(d[0].get_looped(), function(a) {
                    return function() {
                        a[0].set_visible(!1);
                        a[0].set_paused(!0);
                        a[0].set_position(0)
                    }
                }(d)),
                this._aTurtlePoofs.push(d[0]), this._turtleContainer.addChild((new g).add(d[0].disablePointer()).add(new Va(2)));
            this._disposer.connect1(this._pauseBt._compMap.Sprite_3.get_pointerUp(), z(this, this.onPauseButtonClick));
            this._disposer.connect1(O.objectBeingDragged, z(this, this.objectDragChanged));
            this._disposer.connect0(this._timer._compMap.CountDownTimer_10.timeOutSig, z(this, this.onCountDownTimerDone));
            this._disposer.connect0(this._timer._compMap.CountDownTimer_10.fiveSecLeftSig, z(this, this.onCountDownTimerFiveLeft));
            b = 0;
            for (c = this._aAvailableTurtles.length; b < c;) d = [b++], this._disposer.connect0(this._aAvailableTurtles[d[0]].dropArea.pointerUpSignal, function(b) {
                return function() {
                    a.turtleReceivedPizza(b[0])
                }
            }(d));
            this.owner._compMap.Script_11.run(new ba([new la(1), new T(z(this, this.startGame))]))
        },
        startGame: function() {
            this._timer._compMap.CountDownTimer_10.active = !0;
            this.addTurtle();
            this.owner._compMap.Script_11.run(new ba([new la(5 + 5 * Math.random()), new T(z(this, this.addTurtle)), new la(5 + 5 * Math.random()), new T(z(this,
                this.addTurtle))]));
            this.owner._compMap.Script_11.run(new ba([new la((i.nTotalGameTime - 10) * Math.random()), new T(z(this, this.showIceCreamKitty))]))
        },
        onUpdate: function(a) {
            F.prototype.onUpdate.call(this, a);
            for (var b = 0, c = this._aCookingMeters.length; b < c;) this._aCookingMeters[b++].update(a);
            b = 0;
            for (c = this._aDoughMeters.length; b < c;) this._aDoughMeters[b++].update(a)
        },
        onResize: function() {
            F.prototype.onResize.call(this);
            G.top(G.right(this._pauseBt, 11), 11);
            G.top(G.right(this._txtGoal.owner, 25), 16);
            G.top(G.left(this._score,
                25), 16);
            G.top(G.left(this._leftTrash, -100), 0.15, N.percent);
            G.top(G.right(this._rightTrash, -100), 0.15, N.percent)
        },
        onPauseButtonClick: function() {
            this._globalPack.getSound("sound/ButtonClick").play();
            u.push(Fb, new dc(0.2))
        },
        updateUncookedPizzas: function() {
            for (var a = this, b = 0, c = this._aUncookedPizzas.length; b < c;) {
                var d = b++;
                null == this._aUncookedPizzas[d] && (this._aUncookedPizzas[d] = new Nc(this._pack, this._ingredientPack, this._xSetup.node.resolve("toppings"), d), this._aUncookedPizzas[d].entity._compMap.Sprite_3.alpha.set__(0),
                    this._aUncookedPizzas[d].entity._compMap.Sprite_3.setXY(445 + 175 * d, 555), this._draggableLayer.addChild(this._aUncookedPizzas[d].entity), this._disposer.connect1(this._aUncookedPizzas[d].entity._compMap.Sprite_3.get_pointerDown(), function() {
                        a.showTrash()
                    }))
            }
        },
        toppingDropAreaClicked: function(a) {
            var b = this._aUncookedPizzas[a];
            if (0 == b.state) this._pack.getSound("sound/MakeDough").play(), this._aDoughMeters[a].bActive || (this._aUncookedPizzas[a].entity._compMap.Sprite_3.alpha.set__(1), b = i.nDoughRiseTime, i.bDoughSpeed &&
                (b /= 2), this._aDoughMeters[a].reset(b), this._aDoughMeters[a].entity._compMap.Sprite_3.set_visible(!0));
            else if (null != O.currentlyDragged) {
                var a = O.currentlyDragged.owner,
                    c = 0,
                    d = this._aIngredients.length;
                try {
                    for (; c < d;) {
                        var f = c++;
                        if (a == this._aIngredients[f].entity) {
                            b.enableTopping(f);
                            switch (this._aIngredients[f].type) {
                                case 0:
                                    this._pack.getSound("sound/PlaceToppingStandard").play();
                                    break;
                                case 1:
                                    this._pack.getSound("sound/PlaceToppingSauces").play();
                                    break;
                                case 2:
                                    this._pack.getSound("sound/PlaceToppingEasyCheese").play()
                            }
                            throw "__break__";
                        }
                    }
                } catch (h) {
                    if ("__break__" != h) throw h;
                }
            }
        },
        uncookedPizzaDropped: function(a) {
            if (null != O.currentlyDragged)
                for (var b = O.currentlyDragged.owner, c = 0, d = this._aUncookedPizzas.length; c < d;) {
                    var f = c++;
                    if (b == this._aUncookedPizzas[f].entity) {
                        b = this._aUncookedPizzas[f];
                        if (0 == b.state) break;
                        this._aCookingDropAreas[a]._compMap.Sprite_3.set_visible(!1);
                        this._aUncookedPizzas[f] = null;
                        this._aCookingPizzas[a] = b;
                        b.entity._compMap.Draggable_9.enabled = !1;
                        this._draggableLayer.addChild(b.entity);
                        b.entity._compMap.Sprite_3.setScale(0.65).setXY(520 +
                            140 * a, 430);
                        this.updateUncookedPizzas();
                        this.objectDragChanged(!1);
                        f = i.nPizzaCookTime;
                        i.bCookTimes && (f /= 2);
                        this._aCookingMeters[a].reset(f);
                        this._aCookingMeters[a].entity._compMap.Sprite_3.set_visible(!0);
                        this._pack.getSound("sound/pizzaInOven").play();
                        break
                    }
                }
        },
        objectDragChanged: function(a) {
            this._dropAreaLayer._compMap.Sprite_3.set_visible(a);
            if (null != O.currentlyDragged) {
                for (var b = -1, c = 0, d = this._aCookingPizzas.length; c < d;) {
                    var f = c++;
                    if (null != this._aCookingPizzas[f] && this._aCookingPizzas[f].entity ==
                        O.currentlyDragged.owner) {
                        b = f;
                        break
                    }
                }
                0 <= b && 2 == this._aCookingPizzas[b].state && this._aCookingMeters[b].set_bActive(!a)
            }
        },
        doughDoneRising: function(a) {
            var b = this._aDoughPoofs[a];
            b.set_position(0);
            b.set_visible(!0);
            b.set_paused(!1);
            this._aDoughMeters[a].entity._compMap.Sprite_3.set_visible(!1);
            this._aUncookedPizzas[a].set_state(1);
            this._pack.getSound("sound/goodSmoke").play()
        },
        pizzaDoneCooking: function(a) {
            this._pack.getSound("sound/PizzaDone").play();
            this._aDoneText[a].alpha.animate(1, 0, 5, ka.expoIn);
            this._aCookingPizzas[a].entity._compMap.Draggable_9.enabled = !0;
            this._aCookingPizzas[a].set_state(2)
        },
        pizzaIsBurned: function(a) {
            this._pack.getSound("sound/Burn").play();
            this._aBurnedText[a].alpha.animate(1, 0, 5, ka.expoIn);
            this._aCookingMeters[a].entity._compMap.Sprite_3.set_visible(!1);
            this._aCookingPizzas[a].set_state(3)
        },
        onCountDownTimerDone: function() {
            this._disposer.dispose();
            this._container.add(new Va(0));
            var a = v.goodPizza >= i.nPizzaGoal,
                b;
            b = a ? "sound/stingGood" : "sound/stingBad";
            a = o.getField("game." + (a ? "success" : "fail")).setXY(k._platform.getStage().get_width() /
                2, k._platform.getStage().get_height() / 2).centerAnchor();
            a.scaleX.set_behavior(new Gb(a.scaleX._value, a.scaleX._value + 0.4, 0.3));
            a.scaleY.set_behavior(new Gb(a.scaleX._value, a.scaleX._value + 0.4, 0.3));
            this.owner.addChild((new g).add(a));
            this.owner._compMap.Script_11.run(new ba([new T(function() {
                A.setBgLoop()
            }), new Hb(this._pack.getSound("sound/EndLevel")), new Hb(this._pack.getSound(b)), new T(z(this, this.endGame))]))
        },
        onCountDownTimerFiveLeft: function() {
            this._pack.getSound("sound/5secLeft").play()
        },
        endGame: function() {
            A.muteBt._compMap.Sprite_3.set_visible(!0);
            if (i.nPizzaGoal <= v.goodPizza) u["goto"](Ib);
            else u["goto"](Db)
        },
        trashDraggable: function(a) {
            null == a && (a = !0);
            a && this._pack.getSound("sound/Trash" + s["int"](2 * Math.random() + 1)).play();
            for (var a = 0, b = this._aUncookedPizzas.length; a < b;) {
                var c = a++;
                if (this._aUncookedPizzas[c].entity == O.currentlyDragged.owner) {
                    O.currentlyDragged.owner.dispose();
                    this._aUncookedPizzas[c] = null;
                    this.updateUncookedPizzas();
                    this.objectDragChanged(!1);
                    return
                }
            }
            a = 0;
            for (b = this._aCookingPizzas.length; a < b;)
                if (c = a++, null != this._aCookingPizzas[c] &&
                    this._aCookingPizzas[c].entity == O.currentlyDragged.owner) {
                    O.currentlyDragged.owner.dispose();
                    this._aCookingPizzas[c] = null;
                    this._aDoneText[c].alpha.set__(0);
                    this._aBurnedText[c].alpha.set__(0);
                    this._aCookingMeters[c].stop();
                    this._aCookingMeters[c].entity._compMap.Sprite_3.set_visible(!1);
                    this._aCookingDropAreas[c]._compMap.Sprite_3.set_visible(!0);
                    this.objectDragChanged(!1);
                    break
                }
        },
        addTurtle: function() {
            if (0 != this._aAvailableTurtles.length) {
                var a = s["int"](Math.random() * this._aAvailableTurtles.length),
                    b = this._aAvailableTurtles.splice(a, 1).pop();
                b.dropArea.enabled = !0;
                b.loop("Stealth");
                a = [];
                a.push(s["int"](Math.random() * this._aIngredients.length));
                var c = 0;
                if (1 != v.levelNum)
                    if (2 == v.levelNum) {
                        do c = s["int"](Math.random() * this._aIngredients.length), c != a[0] && a.push(c); while (2 > a.length)
                    } else
                        for (var d = !0; 3 > a.length;) {
                            for (var d = !0, c = s["int"](Math.random() * this._aIngredients.length), f = 0, h = a.length; f < h;) {
                                var e = f++;
                                if (c == a[e]) {
                                    d = !1;
                                    break
                                }
                            }
                            d && a.push(c)
                        }
                b.orderBox.setIngredients(a);
                for (a = s["int"](Math.random() *
                        this._aOrderingTurtles.length); null != this._aOrderingTurtles[a];) a = (a + 1) % this._aOrderingTurtles.length;
                this._aOrderingTurtles[a] = b;
                this._turtleContainer.addChild(b.entity);
                b.entity._compMap.Sprite_3.x.set__(296 + 240 * a);
                G.bottom(b.entity);
                c = 0;
                switch (a) {
                    case 1:
                        c = 230;
                        break;
                    case 2:
                        c = 240;
                        break;
                    default:
                        c = 286
                }
                this.owner._compMap.Script_11.run(new ba([new U(b.entity._compMap.Sprite_3.y, c, 0.25, ka.quadOut), new la(0.5), new T(z(b, b.toggleStealth)), new U(b.entity._compMap.Sprite_3.y, 126, 0.25, ka.bounceIn), new T(function() {
                        b.orderBox.reset(i.nPlayerWaitTime)
                    }),
                    new U(b.orderBox.owner._compMap.Sprite_3.alpha, 1, 0.25)
                ]))
            }
        },
        removeTurtle: function(a) {
            for (var b = this, c = -1, d = 0, f = this._aOrderingTurtles.length; d < f;) {
                var h = d++;
                if (null != this._aOrderingTurtles[h] && this._aOrderingTurtles[h].id == a) {
                    c = h;
                    break
                }
            }
            if (-1 != c) {
                var e = this._aOrderingTurtles[c];
                this._aOrderingTurtles[c] = null;
                this._aAvailableTurtles.push(e);
                e.dropArea.enabled = !1;
                a = this.owner._compMap.Script_11;
                a.run(new ba([new T(function() {
                        e.loop("Stealth")
                    }), new U(e.orderBox.owner._compMap.Sprite_3.alpha, 0, 0.1),
                    new la(0.1), new T(function() {
                        b._aTurtlePoofs[c].set_visible(!0);
                        b._turtleContainer.addChild(b._aTurtlePoofs[c].owner);
                        b._aTurtlePoofs[c].set_paused(!1);
                        e.bLastImpression ? b._pack.getSound("sound/goodSmoke").play() : b._pack.getSound("sound/badSmoke").play()
                    }), new U(e.entity._compMap.Sprite_3.y, 768, 0.2)
                ]));
                a.run(new ba([new la(2 + 5 * Math.random()), new T(z(this, this.addTurtle))]))
            }
        },
        turtleReceivedPizza: function(a) {
            if (null != O.currentlyDragged) {
                for (var b = -1, c = 0, d = this._aCookingPizzas.length; c < d;) {
                    var f = c++;
                    if (null != this._aCookingPizzas[f] && this._aCookingPizzas[f].entity == O.currentlyDragged.owner) {
                        b = f;
                        break
                    }
                }
                if (-1 != b) {
                    c = -1;
                    d = 0;
                    for (f = this._aOrderingTurtles.length; d < f;) {
                        var h = d++;
                        if (null != this._aOrderingTurtles[h] && this._aOrderingTurtles[h].id == a) {
                            c = h;
                            break
                        }
                    }
                    a = this._aOrderingTurtles[c];
                    a.orderBox.stop();
                    d = a.orderBox.getPercentage();
                    f = this._aCookingPizzas[b].aToppings.slice();
                    b = f.length == a.orderBox.aOrder.length && 2 == this._aCookingPizzas[b].state;
                    for (h = 0; b && 0 < f.length;) {
                        for (var h = f.pop(), e = 0, g = a.orderBox.aOrder.length; e <
                            g;) {
                            var p = e++;
                            if (a.orderBox.aOrder[p] == h) {
                                h = -1;
                                break
                            }
                        }
                        if (-1 != h) {
                            b = !1;
                            break
                        }
                    }
                    this.trashDraggable(!1);
                    this.rewardOrPenalize(b, c, d)
                }
            }
        },
        turtleDoneWaiting: function(a) {
            for (var b = -1, c = 0, d = this._aOrderingTurtles.length; c < d;) {
                var f = c++;
                if (null != this._aOrderingTurtles[f] && this._aOrderingTurtles[f].id == a) {
                    b = f;
                    break
                }
            } - 1 != b && this.rewardOrPenalize(!1, b)
        },
        rewardOrPenalize: function(a, b, c) {
            null == c && (c = 0);
            this._aOrderingTurtles[b].setImpression(a);
            b = 0;
            a ? (b = i.nPizzaScore * c | 0, i.bDoubleScores && (b *= 2), a = v, a.set_curScore(a.curScore +
                b), v.goodPizza++, this._txtGoal.set_text(v.goodPizza + "/" + i.nPizzaGoal), v.goodPizza <= i.nPizzaGoal && (this._timer._compMap.CountDownTimer_10.nTime += i.nTimeAdded, this._goodTimeTxt._compMap.FloatText_7.reset("+" + i.nTimeAdded)), v.goodPizza == i.nPizzaGoal && (this._pack.getSound("sound/goalMet").play(), this.owner._compMap.Script_11.run(new Cb(new ba([new U(this._txtGoal.alpha, 0, 0.25), new U(this._txtGoal.alpha, 1, 0.25)]), 4)))) : (b = i.nPizzaScore, v.curScore < b ? v.set_curScore(0) : (a = v, a.set_curScore(a.curScore - b)),
                this._timer._compMap.CountDownTimer_10.nTime -= i.nTimeRemoved, this._badTimeTxt._compMap.FloatText_7.reset("-" + i.nTimeRemoved));
            this.updateScore()
        },
        showIceCreamKitty: function() {
            var a = this;
            this._pack.getSound("sound/KittyEnter").play();
            this._ickPlayer = new Na(this._turtleLib);
            this._ickPlayer.setDecorator(function(a) {
                a.disablePixelSnapping()
            });
            this._ickPlayer.loop("KittyMove");
            var b = (new g).add((new l).setScaleXY(-1, 1)).addChild((new g).add(this._ickPlayer)).add(new Y);
            b._compMap.Sprite_3.setXY(-l.getBounds(b).width,
                281);
            var c = b._compMap.Sprite_3.y;
            c.set__(c._value - 55);
            this._bonusLayer.addChild(b);
            this.owner._compMap.Script_11.run(new ba([new U(b._compMap.Sprite_3.x, 233, 2), new T(function() {
                a._ickPlayer.loop("KittyIdle");
                a._disposer.connect1(b._compMap.Sprite_3.get_pointerUp(), function() {
                    a.kittyClicked()
                })
            })]))
        },
        kittyClicked: function() {
            var a = this;
            this._bonusLayer._compMap.Sprite_3.set_pointerEnabled(!1);
            this._pack.getSound("sound/KittyPowerup").play();
            var b = this._bonusLayer.firstChild._compMap.Sprite_3,
                c = (new g).add((new q(this._pack.getTexture("splatter"))).disablePointer().setXY(204,
                    304).setAlpha(0));
            this._bonusLayer.addChild(c);
            var d = (new g).add((new fa(16777215, 1366, 768)).setAlpha(0));
            this._bonusLayer.addChild(d);
            this.owner._compMap.Script_11.run(new ba([new U(d._compMap.Sprite_3.alpha, 1, 0.05), new T(function() {
                b.scaleX.set__(1);
                a._ickPlayer.loop("KittyMove");
                c._compMap.Sprite_3.alpha.set__(1)
            }), new U(d._compMap.Sprite_3.alpha, 0, 0.1, ka.quadIn), new U(b.x, -b.getNaturalWidth(), 1), new U(c._compMap.Sprite_3.alpha, 0, 2), new T((Bd = this._bonusLayer, z(Bd, Bd.disposeChildren)))]))
        },
        showTrash: function() {
            var a =
                this;
            if (null != O.currentlyDragged) {
                for (var b = null, c = 0, d = this._aUncookedPizzas.length; c < d;) {
                    var f = c++;
                    if (O.currentlyDragged.owner == this._aUncookedPizzas[f].entity) {
                        b = this._aUncookedPizzas[f];
                        break
                    }
                }
                null != b && 0 == b.state || (this._trashUp = k._platform.getPointer().up.connect(function() {
                    a.hideTrash()
                }), this._leftTrash._compMap.Sprite_3.x.animateBy(100, 0.25), this._rightTrash._compMap.Sprite_3.x.animateBy(-100, 0.25))
            }
        },
        hideTrash: function() {
            this._trashUp.dispose();
            G.left(this._leftTrash, -100);
            G.right(this._rightTrash, -100)
        },
        updateScore: function() {
            this._score.disposeChildren();
            var a = o.getField("game.hudScore"),
                b = new X("%1", "");
            a.set_text(b.replace(a._text, v.get_score() + ""));
            this._score.addChild((new g).add(a))
        },
        __class__: Ya
    });
    var Za = function() {
        F.call(this);
        this.requiredPacks.push("instruction_scene");
        this.requiredPacks.push("levelIntro_scene");
        this.requiredPacks.push("global")
    };
    e["com.nick.tmnt.ironStomach.scenes.InstructionScene"] = Za;
    Za.__name__ = "com,nick,tmnt,ironStomach,scenes,InstructionScene".split(",");
    Za.__super__ =
        F;
    Za.prototype = t(F.prototype, {
        onRemoved: function() {
            this._assets.unload("instruction_scene")
        },
        assetsReady: function() {
            var a = this;
            F.prototype.assetsReady.call(this);
            var b = this._assets.get("instruction_scene");
            this._globalPack = this._assets.get("global");
            this.setBackground(new oa(b.getTexture("bg1"), b.getTexture("bg2")));
            this._lib = new Eb(b, "lib");
            this._skipBt = Aa.makeButton("instructions.skip", null, this._globalPack.getTexture("ui/button"));
            this._skipBt._compMap.Sprite_3.setXY(605, 605);
            this._playBt = Aa.makeButton("instructions.play",
                null, this._globalPack.getTexture("ui/button"));
            this._playBt._compMap.Sprite_3.setXY(605, 605);
            this._playBt._compMap.Sprite_3.set_visible(!1);
            this._nextBt = Aa.makeButton("instructions.next", null, this._globalPack.getTexture("ui/button"));
            this._nextBt._compMap.Sprite_3.setXY(762, 605);
            this._slide = new g;
            this._container.addChild(this._slide).addChild(this._skipBt).addChild(this._playBt).addChild(this._nextBt);
            this.set_slide(1);
            this._disposer.connect1(this._nextBt._compMap.Sprite_3.get_pointerUp(), z(this,
                this.onNextButtonClick));
            this._disposer.connect1(this._skipBt._compMap.Sprite_3.get_pointerUp(), function() {
                a.leavePage()
            });
            this._disposer.connect1(this._playBt._compMap.Sprite_3.get_pointerUp(), function() {
                a.leavePage()
            })
        },
        onNextButtonClick: function() {
            this._globalPack.getSound("sound/ButtonClick").play();
            var a = this.slide;
            this.set_slide(a + 1);
            a;
            9 == this.slide && (this._skipBt._compMap.Sprite_3.set_visible(!1), this._nextBt._compMap.Sprite_3.set_visible(!1), this._playBt._compMap.Sprite_3.set_visible(!0))
        },
        set_slide: function(a) {
            this.slide = a;
            this._slide.disposeChildren();
            var b = this._lib.createSprite("Instruct" + a, !0);
            this._slide.addChild((new g).add(b));
            var c = o.getField("instructions.done", 0, H.Left),
                d = new g;
            c.setXY(350, 308);
            d.add(c);
            b.getLayer("bg").addChild(d);
            c = o.getField("instructions.burnt", 0, H.Left);
            d = new g;
            c.setXY(554, 308);
            d.add(c);
            b.getLayer("bg").addChild(d);
            c = (new g).add(o.getField("instructions.slide" + this.slide));
            b.getLayer("textArea").addChild(c);
            return a
        },
        leavePage: function() {
            this._globalPack.getSound("sound/ButtonClick").play();
            if (1 == u.director.scenes.length) u["goto"](Xa);
            else u.director.popScene()
        },
        __class__: Za
    });
    var Xa = function() {
        F.call(this);
        this.requiredPacks.push("levelIntro_scene");
        this.requiredPacks.push("global")
    };
    e["com.nick.tmnt.ironStomach.scenes.LevelIntroScene"] = Xa;
    Xa.__name__ = "com,nick,tmnt,ironStomach,scenes,LevelIntroScene".split(",");
    Xa.__super__ = F;
    Xa.prototype = t(F.prototype, {
        assetsReady: function() {
            var a = this;
            F.prototype.assetsReady.call(this);
            this._pack = this._assets.get("levelIntro_scene");
            this._globalPack =
                this._assets.get("global");
            i.setNextPizzaType();
            i.updateGameVars();
            this.setBackground(new oa(this._pack.getTexture("bg1"), this._pack.getTexture("bg2")));
            var b = null,
                c = "";
            switch (i.sLevelPizzaType) {
                case "icecream_pizza":
                    b = new q(this._pack.getTexture("icecream"));
                    c = "intro.icecream";
                    break;
                case "popcorn_pizza":
                    b = new q(this._pack.getTexture("popcorn"));
                    c = "intro.popcorn";
                    break;
                case "ramen_pizza":
                    b = new q(this._pack.getTexture("ramen"));
                    c = "intro.ramen";
                    break;
                case "regular_pizza":
                    b = new q(this._pack.getTexture("regular")),
                        c = "intro.supreme"
            }
            b.setXY(414, 312);
            this._container.addChild((new g).add(b));
            this._container.addChild((new g).add(o.getField("intro.mikey").setXY(520, 152)));
            this._container.addChild((new g).add(o.getField(c, 0, H.Center).setXY(607, 210)));
            this._playBt = Aa.makeButton("intro.play", this._globalPack.getTexture("ui/nextIcon"), this._globalPack.getTexture("ui/button"));
            this._playBt._compMap.Sprite_3.setXY(1027, 605);
            this._container.addChild(this._playBt);
            this._disposer.connect1(this._playBt._compMap.Sprite_3.get_pointerUp(),
                function() {
                    a.playClicked()
                });
            this._container.addChild((new g).add(o.getField("intro.levelGoal").setXY(427, 630)));
            b = o.getField("intro.slices");
            c = new X("%1", "");
            b.set_text(c.replace(b._text, i.nPizzaGoal + ""));
            this._container.addChild((new g).add(b.setXY(583, 618)));
            A.setBgLoop(this._globalPack.getSound("sound/gameTrack"))
        },
        playClicked: function() {
            this._globalPack.getSound("sound/ButtonClick").play();
            u["goto"](Ya)
        },
        __class__: Xa
    });
    var Fb = function() {
        F.call(this);
        this.opaque = !1;
        this.requiredPacks.push("pause_scene");
        this.requiredPacks.push("global")
    };
    e["com.nick.tmnt.ironStomach.scenes.PauseScene"] = Fb;
    Fb.__name__ = "com,nick,tmnt,ironStomach,scenes,PauseScene".split(",");
    Fb.__super__ = F;
    Fb.prototype = t(F.prototype, {
        assetsReady: function() {
            var a = this;
            F.prototype.assetsReady.call(this);
            var b = this._assets.get("pause_scene");
            this._globalPack = this._assets.get("global");
            this.setBackground((new fa(0, 1366, 768)).setAlpha(0.8));
            this._backing.addChild((new g).add((new q(b.getTexture("bg"))).setXY(271, 136)));
            this._menu = (new g).add(new l);
            this._quitVerify = (new g).add(new l);
            this._container.addChild(this._menu);
            this._container.addChild(this._quitVerify);
            this._playBt = (new g).add((new q(b.getTexture("playBt"))).setXY(354, 339)).add(new Y);
            this._menu.addChild(this._playBt);
            this._muteBt = (new g).add((new l).setXY(527, 334)).addChild((new g).add(new q(b.getTexture(1 == k.volume._value ? "unmuteBt" : "muteBt")))).add(new Y);
            this._menu.addChild(this._muteBt);
            this._helpBt = (new g).add((new q(b.getTexture("helpBt"))).setXY(698, 335)).add(new Y);
            this._menu.addChild(this._helpBt);
            this._homeBt = (new g).add((new q(b.getTexture("homeBt"))).setXY(869, 333)).add(new Y);
            this._menu.addChild(this._homeBt);
            this._quitVerify.addChild((new g).add(o.getField("pause.areYouSure").setXY(452, 272)));
            this._quitYesBt = (new g).add((new q(b.getTexture("yesBt"))).setXY(494, 388)).add(new Y);
            this._quitVerify.addChild(this._quitYesBt);
            this._quitNoBt = (new g).add((new q(b.getTexture("noBt"))).setXY(706, 388)).add(new Y);
            this._quitVerify.addChild(this._quitNoBt);
            this._quitVerify._compMap.Sprite_3.set_visible(!1);
            this._disposer.connect2(k.volume.get_changed(), function() {
                a._muteBt.disposeChildren();
                a._muteBt.addChild((new g).add(new q(b.getTexture(1 == k.volume._value ? "unmuteBt" : "muteBt"))))
            });
            this._disposer.connect1(this._muteBt._compMap.Sprite_3.get_pointerUp(), z(this, this.onMuteButtonClick));
            this._disposer.connect1(this._helpBt._compMap.Sprite_3.get_pointerUp(), z(this, this.onHelpButtonClick));
            this._disposer.connect1(this._homeBt._compMap.Sprite_3.get_pointerUp(), z(this, this.onHomeButtonClick));
            this._disposer.connect1(this._playBt._compMap.Sprite_3.get_pointerUp(),
                z(this, this.onBackToGameClick));
            this._disposer.connect1(this._quitYesBt._compMap.Sprite_3.get_pointerUp(), function() {
                a.backToTitle()
            });
            this._disposer.connect1(this._quitNoBt._compMap.Sprite_3.get_pointerUp(), function() {
                a.showMenu()
            })
        },
        onMuteButtonClick: function() {
            this._globalPack.getSound("sound/ButtonClick").play();
            k.volume.set__(0 == k.volume._value ? 1 : 0)
        },
        onHelpButtonClick: function() {
            this._globalPack.getSound("sound/ButtonClick").play();
            u.push(Za)
        },
        onHomeButtonClick: function() {
            this._globalPack.getSound("sound/ButtonClick").play();
            this._menu._compMap.Sprite_3.set_visible(!1);
            this._quitVerify._compMap.Sprite_3.set_visible(!0)
        },
        onBackToGameClick: function() {
            this._globalPack.getSound("sound/ButtonClick").play();
            u["goto"](Ya)
        },
        showMenu: function() {
            this._menu._compMap.Sprite_3.set_visible(!0);
            this._quitVerify._compMap.Sprite_3.set_visible(!1)
        },
        backToTitle: function() {
            A.setBgLoop();
            A.muteBt._compMap.Sprite_3.set_visible(!0);
            u["goto"](Ua)
        },
        __class__: Fb
    });
    var Ib = function() {
        F.call(this);
        this.requiredPacks.push("results_scene");
        this.requiredPacks.push("global")
    };
    e["com.nick.tmnt.ironStomach.scenes.ResultsScene"] = Ib;
    Ib.__name__ = "com,nick,tmnt,ironStomach,scenes,ResultsScene".split(",");
    Ib.__super__ = F;
    Ib.prototype = t(F.prototype, {
        assetsReady: function() {
            F.prototype.assetsReady.call(this);
            this._pack = this._assets.get("results_scene");
            this._globalPack = this._assets.get("global");
            var a = i.nPizzaGoal * i.nPizzaScore,
                b = (v.goodPizza - i.nPizzaGoal) * i.nBonusScore | 0,
                c = v;
            c.set_curScore(c.curScore + (a + b));
            this.setBackground(new oa(this._pack.getTexture("bg1"), this._pack.getTexture("bg2")));
            this._container.addChild((new g).add(o.getField("results.levelComplete").setXY(229, 146)));
            var c = o.getField("results.slices", 0, H.Right),
                d = new X("%2", "");
            c.set_text(d.replace(c._text, i.nPizzaGoal + ""));
            d = new X("%1", "");
            c.set_text(d.replace(c._text, i.nPizzaGoal + ""));
            this._container.addChild((new g).add(c.setXY(472, 239)));
            c = o.getField("results.scoreVal", 0, H.Right);
            c.set_text(d.replace(c._text, a + ""));
            this._container.addChild((new g).add(c.setXY(676, 239)));
            c = o.getField("results.bonus", 0, H.Right);
            c.set_text(d.replace(c._text,
                v.goodPizza - i.nPizzaGoal + ""));
            this._container.addChild((new g).add(c.setXY(472, 300)));
            c = o.getField("results.scoreVal", 0, H.Right);
            c.set_text(d.replace(c._text, b + ""));
            this._container.addChild((new g).add(c.setXY(676, 300)));
            this._container.addChild((new g).add(o.getField("results.total", 0, H.Right).setXY(472, 372)));
            c = o.getField("results.scoreVal", 0, H.Right);
            c.set_text(d.replace(c._text, v.curScore + ""));
            this._container.addChild((new g).add(c.setXY(676, 372)));
            c = o.getField("results.score", 0, H.Right);
            c.set_text(d.replace(c._text,
                v.get_score() + ""));
            this._container.addChild((new g).add(c.setXY(676, 452)));
            this._container.addChild((new g).add((new q(this._pack.getTexture("bar"))).setXY(211, 355)));
            this._nextBt = Aa.makeButton("results.next", this._globalPack.getTexture("ui/nextIcon"), this._globalPack.getTexture("ui/button"));
            this._nextBt._compMap.Sprite_3.setXY(472, 590);
            this._container.addChild(this._nextBt);
            v.rollIntoTotal();
            v.levelNum++;
            this._disposer.connect1(this._nextBt._compMap.Sprite_3.get_pointerUp(), z(this, this.handleNextClick))
        },
        handleNextClick: function() {
            this._globalPack.getSound("sound/ButtonClick").play();
            u["goto"](Xa)
        },
        __class__: Ib
    });
    var Ua = function() {
        F.call(this);
        this.requiredPacks.push("title_scene");
        this.requiredPacks.push("global")
    };
    e["com.nick.tmnt.ironStomach.scenes.TitleScene"] = Ua;
    Ua.__name__ = "com,nick,tmnt,ironStomach,scenes,TitleScene".split(",");
    Ua.__super__ = F;
    Ua.prototype = t(F.prototype, {
        onRemoved: function() {
            this._assets.unload("title_scene")
        },
        assetsReady: function() {
            var a = this._assets.get("title_scene");
            this._globalPack =
                this._assets.get("global");
            null == A.bgLoop && A.setBgLoop(this._globalPack.getSound("sound/titleTrack"));
            this.setBackground(new oa(a.getTexture("bg1"), a.getTexture("bg2")));
            this._logo = (new g).add((new q(a.getTexture("logo"))).setXY(207, 107).disablePointer());
            this._title = (new g).add((new q(a.getTexture("title"))).setXY(207, 187).disablePointer());
            this._playBt = Aa.makeButton("title.play", this._globalPack.getTexture("ui/nextIcon"), this._globalPack.getTexture("ui/button"));
            this._playBt._compMap.Sprite_3.centerAnchor().setXY(365,
                517);
            this._codeBt = Aa.makeButton("title.unlock", this._globalPack.getTexture("ui/lockIcon"), this._globalPack.getTexture("ui/button"));
            this._codeBt._compMap.Sprite_3.setXY(365, 605);
            this._container.addChild(this._logo).addChild(this._title).addChild(this._playBt).addChild(this._codeBt);
            k.root._compMap.GameTracker_15.bConfigLoaded ? this.configLoaded() : this._disposer.connect0(k.root._compMap.GameTracker_15.configLoaded, z(this, this.configLoaded));
            v.reset()
        },
        onPlayClicked: function() {
            ua.track(["play"]);
            this._globalPack.getSound("sound/ButtonClick").play();
            u["goto"](Za)
        },
        onCodeUnlockClicked: function() {
            this._globalPack.getSound("sound/ButtonClick").play();
            u["goto"](Bb)
        },
        configLoaded: function() {
            var a = this;
            i.set_xGameVals(ja.config.node.resolve("game"));
            this._disposer.connect1(this._playBt._compMap.Sprite_3.get_pointerUp(), function() {
                a.onPlayClicked()
            });
            this._disposer.connect1(this._codeBt._compMap.Sprite_3.get_pointerUp(), function() {
                a.onCodeUnlockClicked()
            })
        },
        __class__: Ua
    });
    var i = function() {};
    e["com.nick.tmnt.ironStomach.utils.LevelInfo"] = i;
    i.__name__ =
        "com,nick,tmnt,ironStomach,utils,LevelInfo".split(",");
    i.set_xGameVals = function(a) {
        null == i.xGameVals && (i.xGameVals = a);
        return a
    };
    i.updateGameVars = function() {
        i.nDoughRiseTime = s.parseFloat(i.xGameVals.node.resolve("doughTime").get_innerData());
        i.nPizzaCookTime = s.parseFloat(i.xGameVals.node.resolve("cookTime").get_innerData());
        i.nTimeAdded = s.parseFloat(i.xGameVals.node.resolve("timeAdded").get_innerData());
        i.nTimeRemoved = s.parseFloat(i.xGameVals.node.resolve("timeRemoved").get_innerData());
        i.nTotalGameTime =
            s.parseInt(i.xGameVals.node.resolve("levelTime").get_innerData());
        var a = s.parseFloat(i.xGameVals.node.resolve("playerWaitDecrease").get_innerData()),
            a = a * (v.levelNum - 1);
        i.nPlayerWaitTime = s.parseFloat(i.xGameVals.node.resolve("playerWait").get_innerData()) - a;
        i.nPizzaScore = s.parseInt(i.xGameVals.node.resolve("goodSliceScore").get_innerData()) * v.levelNum;
        i.nBonusScore = i.nPizzaScore * s.parseFloat(i.xGameVals.node.resolve("bonusMult").get_innerData());
        i.nPizzaGoal = 2 * v.levelNum + 2
    };
    i.setNextPizzaType = function() {
        null ==
            i.aLevels && (i.aLevels = []);
        0 == i.aLevels.length && (i.aLevels.push("popcorn_pizza"), i.aLevels.push("icecream_pizza"), i.aLevels.push("ramen_pizza"), i.aLevels.push("regular_pizza"));
        if (4 == i.aLevels.length) i.sLevelPizzaType = i.aLevels.pop();
        else {
            var a = s["int"](Math.random() * i.aLevels.length);
            i.sLevelPizzaType = i.aLevels.splice(a, 1).pop()
        }
    };
    var na = function() {
        x.call(this);
        this._disposables = []
    };
    e["flambe.Disposer"] = na;
    na.__name__ = ["flambe", "Disposer"];
    na.__super__ = x;
    na.prototype = t(x.prototype, {
        get_name: function() {
            return "Disposer_14"
        },
        add: function(a) {
            this._disposables.push(a);
            return this
        },
        remove: function(a) {
            return w.remove(this._disposables, a)
        },
        connect0: function(a, b) {
            this.add(a.connect(b));
            return this
        },
        connect1: function(a, b) {
            this.add(a.connect(b));
            return this
        },
        connect2: function(a, b) {
            this.add(a.connect(b));
            return this
        },
        onRemoved: function() {
            this.freeDisposables()
        },
        dispose: function() {
            x.prototype.dispose.call(this);
            this.freeDisposables()
        },
        freeDisposables: function() {
            var a = this._disposables;
            this._disposables = [];
            for (var b = 0; b < a.length;) {
                var c =
                    a[b];
                ++b;
                c.dispose()
            }
        },
        __class__: na
    });
    var g = function() {
        this.parent = this.firstChild = this.next = this.firstComponent = null;
        this._compMap = {}
    };
    e["flambe.Entity"] = g;
    g.__name__ = ["flambe", "Entity"];
    g.__interfaces__ = [ya];
    g.prototype = {
        add: function(a) {
            null != a.owner && a.owner.remove(a);
            var b = a.get_name(),
                c = this._compMap[b];
            null != c && this.remove(c);
            this._compMap[b] = a;
            b = null;
            for (c = this.firstComponent; null != c;) b = c, c = c.next;
            null != b ? b.next = a : this.firstComponent = a;
            a.owner = this;
            a.next = null;
            a.onAdded();
            return this
        },
        remove: function(a) {
            for (var b =
                    null, c = this.firstComponent; null != c;) {
                var d = c.next;
                if (c == a) return null == b ? this.firstComponent = d : (b.owner = this, b.next = d), delete this._compMap[c.get_name()], 0 != (c._flags & 1) && (c.onStop(), c._flags &= -2), c.onRemoved(), c.owner = null, c.next = null, !0;
                b = c;
                c = d
            }
            return !1
        },
        getComponent: function(a) {
            return this._compMap[a]
        },
        addChild: function(a, b) {
            null == b && (b = !0);
            null != a.parent && a.parent.removeChild(a);
            a.parent = this;
            if (b) {
                for (var c = null, d = this.firstChild; null != d;) c = d, d = d.next;
                null != c ? c.next = a : this.firstChild = a
            } else a.next =
                this.firstChild, this.firstChild = a;
            return this
        },
        removeChild: function(a) {
            for (var b = null, c = this.firstChild; null != c;) {
                var d = c.next;
                if (c == a) {
                    null == b ? this.firstChild = d : b.next = d;
                    c.parent = null;
                    c.next = null;
                    break
                }
                b = c;
                c = d
            }
        },
        disposeChildren: function() {
            for (; null != this.firstChild;) this.firstChild.dispose()
        },
        dispose: function() {
            for (null != this.parent && this.parent.removeChild(this); null != this.firstComponent;) this.firstComponent.dispose();
            this.disposeChildren()
        },
        __class__: g
    };
    var vd = function() {};
    e["flambe.util.PackageLog"] =
        vd;
    vd.__name__ = ["flambe", "util", "PackageLog"];
    var Rc = function() {};
    e["flambe.platform.Platform"] = Rc;
    Rc.__name__ = ["flambe", "platform", "Platform"];
    Rc.prototype = {
        __class__: Rc
    };
    var Oa = function() {};
    e["flambe.platform.html.HtmlPlatform"] = Oa;
    Oa.__name__ = ["flambe", "platform", "html", "HtmlPlatform"];
    Oa.__interfaces__ = [Rc];
    Oa.prototype = {
        init: function() {
            var a = this;
            C.fixAndroidMath();
            var b = null;
            try {
                b = window.flambe.canvas
            } catch (c) {
                c instanceof m && (c = c.val)
            }
            b.setAttribute("tabindex", "0");
            b.style.outlineStyle = "none";
            b.style.webkitTapHighlightColor = "transparent";
            b.setAttribute("moz-opaque", "true");
            this._stage = new ib(b);
            this._pointer = new ca;
            this._mouse = new ec(this._pointer, b);
            this._renderer = this.createRenderer(b);
            this.mainLoop = new jb;
            this.musicPlaying = !1;
            this._canvas = b;
            this._container = b.parentElement;
            this._container.style.overflow = "hidden";
            this._container.style.position = "relative";
            this._container.style.msTouchAction = "none";
            var d = 0,
                f = function(c) {
                    if (!(1E3 > c.timeStamp - d)) {
                        var f = b.getBoundingClientRect(),
                            h = a.getX(c,
                                f),
                            f = a.getY(c, f);
                        switch (c.type) {
                            case "mousedown":
                                c.target == b && (c.preventDefault(), a._mouse.submitDown(h, f, c.button), b.focus());
                                break;
                            case "mousemove":
                                a._mouse.submitMove(h, f);
                                break;
                            case "mouseup":
                                a._mouse.submitUp(h, f, c.button);
                                break;
                            case "mousewheel":
                            case "DOMMouseScroll":
                                a._mouse.submitScroll(h, f, "mousewheel" == c.type ? c.wheelDelta / 40 : -c.detail) && c.preventDefault()
                        }
                    }
                };
            window.addEventListener("mousedown", f, !1);
            window.addEventListener("mousemove", f, !1);
            window.addEventListener("mouseup", f, !1);
            b.addEventListener("mousewheel",
                f, !1);
            b.addEventListener("DOMMouseScroll", f, !1);
            b.addEventListener("contextmenu", function(a) {
                a.preventDefault()
            }, !1);
            var h = "undefined" != typeof window.ontouchstart,
                f = "msMaxTouchPoints" in window.navigator && 1 < window.navigator.msMaxTouchPoints;
            if (h || f) {
                var e = new fc(this._pointer, h ? 4 : window.navigator.msMaxTouchPoints);
                this._touch = e;
                f = function(b) {
                    var c;
                    c = h ? b.changedTouches : [b];
                    var f = b.target.getBoundingClientRect();
                    d = b.timeStamp;
                    switch (b.type) {
                        case "touchstart":
                        case "MSPointerDown":
                        case "pointerdown":
                            b.preventDefault();
                            C.SHOULD_HIDE_MOBILE_BROWSER && C.hideMobileBrowser();
                            for (b = 0; b < c.length;) {
                                var g = c[b];
                                ++b;
                                var p = a.getX(g, f),
                                    j = a.getY(g, f);
                                e.submitDown((h ? g.identifier : g.pointerId) | 0, p, j)
                            }
                            break;
                        case "touchmove":
                        case "MSPointerMove":
                        case "pointermove":
                            b.preventDefault();
                            for (b = 0; b < c.length;) g = c[b], ++b, p = a.getX(g, f), j = a.getY(g, f), e.submitMove((h ? g.identifier : g.pointerId) | 0, p, j);
                            break;
                        case "touchend":
                        case "touchcancel":
                        case "MSPointerUp":
                        case "pointerup":
                            for (b = 0; b < c.length;) g = c[b], ++b, p = a.getX(g, f), j = a.getY(g, f), e.submitUp((h ?
                                g.identifier : g.pointerId) | 0, p, j)
                    }
                };
                h ? (b.addEventListener("touchstart", f, !1), b.addEventListener("touchmove", f, !1), b.addEventListener("touchend", f, !1), b.addEventListener("touchcancel", f, !1)) : (b.addEventListener("MSPointerDown", f, !1), b.addEventListener("MSPointerMove", f, !1), b.addEventListener("MSPointerUp", f, !1))
            } else this._touch = new gc;
            var g = window.onerror;
            window.onerror = function(a, b, c) {
                k.uncaughtError.emit(a);
                return null != g ? g(a, b, c) : !1
            };
            var p = C.loadExtension("hidden", window.document);
            null != p.value ?
                (f = function() {
                    k.hidden.set__(ga.field(window.document, p.field))
                }, f(null), window.document.addEventListener(p.prefix + "visibilitychange", f, !1)) : (f = function(a) {
                    k.hidden.set__("pagehide" == a.type)
                }, window.addEventListener("pageshow", f, !1), window.addEventListener("pagehide", f, !1));
            k.hidden.get_changed().connect(function(b) {
                b || (a._skipFrame = !0)
            });
            this._skipFrame = !1;
            this._lastUpdate = Date.now();
            var j = C.loadExtension("requestAnimationFrame").value;
            if (null != j) {
                var l = window.performance,
                    kb = null != l && C.polyfill("now",
                        l);
                kb ? this._lastUpdate = l.now() : null;
                var o = null,
                    o = function(c) {
                        a.update(kb ? l.now() : c);
                        j(o, b)
                    };
                j(o, b)
            } else window.setInterval(function() {
                a.update(Date.now())
            }, 16);
            Jb.info("Initialized HTML platform", ["renderer", this._renderer.get_type()])
        },
        loadAssetPack: function(a) {
            return (new I(this, a)).promise
        },
        getStage: function() {
            return this._stage
        },
        update: function(a) {
            var b = (a - this._lastUpdate) / 1E3;
            this._lastUpdate = a;
            k.hidden._value || (this._skipFrame ? this._skipFrame = !1 : (this.mainLoop.update(b), this.mainLoop.render(this._renderer)))
        },
        getPointer: function() {
            return this._pointer
        },
        getMouse: function() {
            return this._mouse
        },
        getTouch: function() {
            return this._touch
        },
        getExternal: function() {
            null == this._external && (this._external = new hc);
            return this._external
        },
        getRenderer: function() {
            return this._renderer
        },
        getX: function(a, b) {
            return (a.clientX - b.left) * this._stage.get_width() / b.width
        },
        getY: function(a, b) {
            return (a.clientY - b.top) * this._stage.get_height() / b.height
        },
        createRenderer: function(a) {
            try {
                var b = wd.getContextWebGL(a, {
                    alpha: !1,
                    depth: !1,
                    failIfMajorPerformanceCaveat: !0
                });
                if (null != b)
                    if (C.detectSlowDriver(b)) null;
                    else return new ic(this._stage, b)
            } catch (c) {
                c instanceof m && (c = c.val)
            }
            return new lb(a)
        },
        __class__: Oa
    };
    var Z = function(a, b) {
        this._value = a;
        this._changed = null != b ? new mb(b) : null
    };
    e["flambe.util.Value"] = Z;
    Z.__name__ = ["flambe", "util", "Value"];
    Z.prototype = {
        watch: function(a) {
            a(this._value, this._value);
            return this.get_changed().connect(a)
        },
        get__: function() {
            return this._value
        },
        set__: function(a) {
            var b = this._value;
            a != b && (this._value = a, null != this._changed && this._changed.emit(a,
                b));
            return a
        },
        get_changed: function() {
            null == this._changed && (this._changed = new mb);
            return this._changed
        },
        __class__: Z
    };
    var mb = function(a) {
        V.call(this, a)
    };
    e["flambe.util.Signal2"] = mb;
    mb.__name__ = ["flambe", "util", "Signal2"];
    mb.__super__ = V;
    mb.prototype = t(V.prototype, {
        connect: function(a, b) {
            null == b && (b = !1);
            return this.connectImpl(a, b)
        },
        emit: function(a, b) {
            var c = this;
            this._head == V.DISPATCHING_SENTINEL ? this.defer(function() {
                c.emitImpl(a, b)
            }) : this.emitImpl(a, b)
        },
        emitImpl: function(a, b) {
            for (var c = this.willEmit(),
                    d = c; null != d;) d._listener(a, b), d.stayInList || d.dispose(), d = d._next;
            this.didEmit(c)
        },
        __class__: mb
    });
    var P = function(a, b) {
        this._behavior = null;
        Z.call(this, a, b)
    };
    e["flambe.animation.AnimatedFloat"] = P;
    P.__name__ = ["flambe", "animation", "AnimatedFloat"];
    P.__super__ = Z;
    P.prototype = t(Z.prototype, {
        set__: function(a) {
            this._behavior = null;
            return Z.prototype.set__.call(this, a)
        },
        update: function(a) {
            null != this._behavior && (Z.prototype.set__.call(this, this._behavior.update(a)), this._behavior.isComplete() && (this._behavior =
                null))
        },
        animate: function(a, b, c, d) {
            this.set__(a);
            this.animateTo(b, c, d)
        },
        animateTo: function(a, b, c) {
            this.set_behavior(new nb(this._value, a, b, c))
        },
        animateBy: function(a, b, c) {
            this.set_behavior(new nb(this._value, this._value + a, b, c))
        },
        set_behavior: function(a) {
            this._behavior = a;
            this.update(0);
            return a
        },
        __class__: P
    });
    var k = function() {};
    e["flambe.System"] = k;
    k.__name__ = ["flambe", "System"];
    k.init = function() {
        k._calledInit || (k._platform.init(), k._calledInit = !0)
    };
    k.loadAssetPack = function(a) {
        return k._platform.loadAssetPack(a)
    };
    var Jb = function() {};
    e["flambe.Log"] = Jb;
    Jb.__name__ = ["flambe", "Log"];
    Jb.info = function() {
        null
    };
    Jb.__super__ = vd;
    Jb.prototype = t(vd.prototype, {
        __class__: Jb
    });
    var Va = function(a) {
        null == a && (a = 1);
        this._realDt = 0;
        x.call(this);
        this.scale = new P(a)
    };
    e["flambe.SpeedAdjuster"] = Va;
    Va.__name__ = ["flambe", "SpeedAdjuster"];
    Va.__super__ = x;
    Va.prototype = t(x.prototype, {
        get_name: function() {
            return "SpeedAdjuster_4"
        },
        onUpdate: function(a) {
            0 < this._realDt && (a = this._realDt, this._realDt = 0);
            this.scale.update(a)
        },
        __class__: Va
    });
    var Kb =
        function() {};
    e["flambe.animation.Behavior"] = Kb;
    Kb.__name__ = ["flambe", "animation", "Behavior"];
    Kb.prototype = {
        __class__: Kb
    };
    var ka = function() {};
    e["flambe.animation.Ease"] = ka;
    ka.__name__ = ["flambe", "animation", "Ease"];
    ka.linear = function(a) {
        return a
    };
    ka.quadIn = function(a) {
        return a * a
    };
    ka.quadOut = function(a) {
        return a * (2 - a)
    };
    ka.bounceIn = function(a) {
        a = 1 - a;
        return 0.36363636363636365 > a ? 1 - 7.5625 * a * a : 0.7272727272727273 > a ? 1 - (7.5625 * (a - 0.5454545454545454) * (a - 0.5454545454545454) + 0.75) : 0.9090909090909091 > a ? 1 - (7.5625 *
            (a - 0.8181818181818182) * (a - 0.8181818181818182) + 0.9375) : 1 - (7.5625 * (a - 0.9545454545454546) * (a - 0.9545454545454546) + 0.984375)
    };
    ka.expoIn = function(a) {
        return Math.pow(2, 10 * (a - 1))
    };
    var Lb = function(a, b) {
        this.base = a;
        this.strength = b
    };
    e["flambe.animation.Jitter"] = Lb;
    Lb.__name__ = ["flambe", "animation", "Jitter"];
    Lb.__interfaces__ = [Kb];
    Lb.prototype = {
        update: function() {
            return this.base + 2 * Math.random() * this.strength - this.strength
        },
        isComplete: function() {
            return !1
        },
        __class__: Lb
    };
    var Gb = function(a, b, c, d, f) {
        null == f && (f = 0);
        null == d && (d = 0);
        null == c && (c = 1);
        this.start = a;
        this.end = b;
        this.cycles = d;
        this.speed = new P(c);
        this._count = 1.5707963267948966 + f * (3.141592653589793 / c);
        this._distance = 0.5 * (a - b);
        this._center = b + this._distance
    };
    e["flambe.animation.Sine"] = Gb;
    Gb.__name__ = ["flambe", "animation", "Sine"];
    Gb.__interfaces__ = [Kb];
    Gb.prototype = {
        update: function(a) {
            this.speed.update(a);
            this._count += a * (3.141592653589793 / this.speed._value);
            return this.isComplete() ? this._center + 3.141592653589793 * this._distance : this._center + Math.sin(this._count) *
                this._distance
        },
        isComplete: function() {
            return 0 < this.cycles && 0.5 * ((this._count - 1.5707963267948966) / 3.141592653589793) >= this.cycles
        },
        __class__: Gb
    };
    var nb = function(a, b, c, d) {
        this._from = a;
        this._to = b;
        this._duration = c;
        this.elapsed = 0;
        this._easing = null != d ? d : ka.linear
    };
    e["flambe.animation.Tween"] = nb;
    nb.__name__ = ["flambe", "animation", "Tween"];
    nb.__interfaces__ = [Kb];
    nb.prototype = {
        update: function(a) {
            this.elapsed += a;
            return this.elapsed >= this._duration ? this._to : this._from + (this._to - this._from) * this._easing(this.elapsed /
                this._duration)
        },
        isComplete: function() {
            return this.elapsed >= this._duration
        },
        __class__: nb
    };
    var $a = function() {};
    e["flambe.asset.Asset"] = $a;
    $a.__name__ = ["flambe", "asset", "Asset"];
    $a.__interfaces__ = [ya];
    $a.prototype = {
        __class__: $a
    };
    var n = e["flambe.asset.AssetFormat"] = {
        __ename__: !0,
        __constructs__: "WEBP,JXR,PNG,JPG,GIF,DDS,PVR,PKM,MP3,M4A,OPUS,OGG,WAV,Data".split(",")
    };
    n.WEBP = ["WEBP", 0];
    n.WEBP.toString = D;
    n.WEBP.__enum__ = n;
    n.JXR = ["JXR", 1];
    n.JXR.toString = D;
    n.JXR.__enum__ = n;
    n.PNG = ["PNG", 2];
    n.PNG.toString = D;
    n.PNG.__enum__ = n;
    n.JPG = ["JPG", 3];
    n.JPG.toString = D;
    n.JPG.__enum__ = n;
    n.GIF = ["GIF", 4];
    n.GIF.toString = D;
    n.GIF.__enum__ = n;
    n.DDS = ["DDS", 5];
    n.DDS.toString = D;
    n.DDS.__enum__ = n;
    n.PVR = ["PVR", 6];
    n.PVR.toString = D;
    n.PVR.__enum__ = n;
    n.PKM = ["PKM", 7];
    n.PKM.toString = D;
    n.PKM.__enum__ = n;
    n.MP3 = ["MP3", 8];
    n.MP3.toString = D;
    n.MP3.__enum__ = n;
    n.M4A = ["M4A", 9];
    n.M4A.toString = D;
    n.M4A.__enum__ = n;
    n.OPUS = ["OPUS", 10];
    n.OPUS.toString = D;
    n.OPUS.__enum__ = n;
    n.OGG = ["OGG", 11];
    n.OGG.toString = D;
    n.OGG.__enum__ = n;
    n.WAV = ["WAV", 12];
    n.WAV.toString =
        D;
    n.WAV.__enum__ = n;
    n.Data = ["Data", 13];
    n.Data.toString = D;
    n.Data.__enum__ = n;
    var Sc = function(a, b, c, d) {
        this.name = a;
        this.url = b;
        this.format = c;
        this.bytes = d
    };
    e["flambe.asset.AssetEntry"] = Sc;
    Sc.__name__ = ["flambe", "asset", "AssetEntry"];
    Sc.prototype = {
        __class__: Sc
    };
    var Mb = function() {};
    e["flambe.asset.AssetPack"] = Mb;
    Mb.__name__ = ["flambe", "asset", "AssetPack"];
    Mb.__interfaces__ = [ya];
    Mb.prototype = {
        __class__: Mb
    };
    var jc = function() {};
    e["flambe.asset.File"] = jc;
    jc.__name__ = ["flambe", "asset", "File"];
    jc.__interfaces__ = [$a];
    jc.prototype = {
        __class__: jc
    };
    var M = function() {
        this._localBase = this._remoteBase = null;
        this._entries = []
    };
    e["flambe.asset.Manifest"] = M;
    M.__name__ = ["flambe", "asset", "Manifest"];
    M.fromAssets = function(a, b) {
        null == b && (b = !0);
        var c = ga.field(Nb.getType(M).assets[0], a);
        if (null == c) {
            if (b) throw new m(W.withFields("Missing asset pack", ["name", a]));
            return null
        }
        var d = new M;
        d.set_localBase("assets");
        for (var f = 0; f < c.length;) {
            var h = c[f];
            ++f;
            var e = h.name,
                g = a + "/" + e + "?v=" + s.string(h.md5),
                p = M.inferFormat(e);
            p != n.Data &&
                (e = W.removeFileExtension(e));
            d.add(e, g, h.bytes, p)
        }
        return d
    };
    M.exists = function(a) {
        return ga.hasField(Nb.getType(M).assets[0], a)
    };
    M.inferFormat = function(a) {
        a = W.getUrlExtension(a);
        if (null != a) switch (a.toLowerCase()) {
            case "gif":
                return n.GIF;
            case "jpg":
            case "jpeg":
                return n.JPG;
            case "jxr":
            case "wdp":
                return n.JXR;
            case "png":
                return n.PNG;
            case "webp":
                return n.WEBP;
            case "dds":
                return n.DDS;
            case "pvr":
                return n.PVR;
            case "pkm":
                return n.PKM;
            case "m4a":
                return n.M4A;
            case "mp3":
                return n.MP3;
            case "ogg":
                return n.OGG;
            case "opus":
                return n.OPUS;
            case "wav":
                return n.WAV
        } else null;
        return n.Data
    };
    M.prototype = {
        add: function(a, b, c, d) {
            null == c && (c = 0);
            null == d && (d = M.inferFormat(b));
            a = new Sc(a, b, d, c);
            this._entries.push(a);
            return a
        },
        iterator: function() {
            return w.iter(this._entries)
        },
        getFullURL: function(a) {
            var b;
            b = null != this.get_remoteBase() && M._supportsCrossOrigin ? this.get_remoteBase() : this.get_localBase();
            return null != b ? W.joinPath(b, a.url) : a.url
        },
        get_localBase: function() {
            return this._localBase
        },
        set_localBase: function(a) {
            null !=
                a && Tc.that(!y.startsWith(a, "http://") && !y.startsWith(a, "https://"), "localBase must be a path on the same domain, NOT starting with http(s)://", null);
            return this._localBase = a
        },
        get_remoteBase: function() {
            return this._remoteBase
        },
        set_remoteBase: function(a) {
            null != a && Tc.that(y.startsWith(a, "http://") || y.startsWith(a, "https://"), "remoteBase must be on a remote domain, starting with http(s)://", null);
            return this._remoteBase = a
        },
        __class__: M
    };
    var Q = e["flambe.display.BlendMode"] = {
        __ename__: !0,
        __constructs__: "Normal,Add,Multiply,Screen,Mask,Copy".split(",")
    };
    Q.Normal = ["Normal", 0];
    Q.Normal.toString = D;
    Q.Normal.__enum__ = Q;
    Q.Add = ["Add", 1];
    Q.Add.toString = D;
    Q.Add.__enum__ = Q;
    Q.Multiply = ["Multiply", 2];
    Q.Multiply.toString = D;
    Q.Multiply.__enum__ = Q;
    Q.Screen = ["Screen", 3];
    Q.Screen.toString = D;
    Q.Screen.__enum__ = Q;
    Q.Mask = ["Mask", 4];
    Q.Mask.toString = D;
    Q.Mask.__enum__ = Q;
    Q.Copy = ["Copy", 5];
    Q.Copy.toString = D;
    Q.Copy.__enum__ = Q;
    var za = function(a, b) {
        null == b && (b = 0);
        null == a && (a = 0);
        this.x = a;
        this.y = b
    };
    e["flambe.math.Point"] = za;
    za.__name__ = ["flambe", "math", "Point"];
    za.prototype = {
        set: function(a,
            b) {
            this.x = a;
            this.y = b
        },
        clone: function(a) {
            if (null == a) return new za(this.x, this.y);
            a.set(this.x, this.y);
            return a
        },
        __class__: za
    };
    var l = function() {
        this._viewMatrixUpdateCount = this._parentViewMatrixUpdateCount = this._sinCache = this._cosCache = 0;
        this.blendMode = this.scissor = this._viewMatrix = null;
        var a = this;
        x.call(this);
        this._flags |= 182;
        this._localMatrix = new pa;
        var b = function() {
            a._flags |= 24
        };
        this.x = new P(0, b);
        this.y = new P(0, b);
        this.rotation = new P(0, function() {
            a._flags |= 152
        });
        this.scaleX = new P(1, b);
        this.scaleY =
            new P(1, b);
        this.anchorX = new P(0, b);
        this.anchorY = new P(0, b);
        this.alpha = new P(1)
    };
    e["flambe.display.Sprite"] = l;
    l.__name__ = ["flambe", "display", "Sprite"];
    l.hitTest = function(a, b, c) {
        var d = a._compMap.Sprite_3;
        if (null != d) {
            if (6 != (d._flags & 6)) return null;
            d.getLocalMatrix().inverseTransform(b, c, l._scratchPoint) && (b = l._scratchPoint.x, c = l._scratchPoint.y);
            var f = d.scissor;
            if (null != f && !f.contains(b, c)) return null
        }
        a = l.hitTestBackwards(a.firstChild, b, c);
        return null != a ? a : null != d && d.containsLocal(b, c) ? d : null
    };
    l.getBounds =
        function(a, b) {
            null == b && (b = new Wa);
            b.set(1.79769313486231E308, 1.79769313486231E308, -1.79769313486231E308, -1.79769313486231E308);
            l.getBoundsImpl(a, null, b);
            b.width -= b.x;
            b.height -= b.y;
            return b
        };
    l.render = function(a, b) {
        var c = a._compMap.Sprite_3;
        if (null != c) {
            var d = c.alpha._value;
            if (0 == (c._flags & 2) || 0 >= d) return;
            b.save();
            1 > d && b.multiplyAlpha(d);
            null != c.blendMode && b.setBlendMode(c.blendMode);
            var d = c.getLocalMatrix(),
                f = d.m02,
                h = d.m12;
            0 != (c._flags & 32) && (f = Math.round(f), h = Math.round(h));
            b.transform(d.m00, d.m10,
                d.m01, d.m11, f, h);
            d = c.scissor;
            null != d && b.applyScissor(d.x, d.y, d.width, d.height);
            c.draw(b)
        }
        d = a._compMap.Director_16;
        if (null != d) {
            d = d.occludedScenes;
            for (f = 0; f < d.length;) h = d[f], ++f, l.render(h, b)
        }
        for (d = a.firstChild; null != d;) f = d.next, l.render(d, b), d = f;
        null != c && b.restore()
    };
    l.hitTestBackwards = function(a, b, c) {
        if (null != a) {
            var d = l.hitTestBackwards(a.next, b, c);
            return null != d ? d : l.hitTest(a, b, c)
        }
        return null
    };
    l.getBoundsImpl = function(a, b, c) {
        var d = a._compMap.Sprite_3;
        if (null != d) {
            var b = null != b ? pa.multiply(b, d.getLocalMatrix()) :
                d.getLocalMatrix(),
                f = d.getNaturalWidth(),
                d = d.getNaturalHeight();
            0 < f && 0 < d && (l.extendRect(b, 0, 0, c), l.extendRect(b, f, 0, c), l.extendRect(b, f, d, c), l.extendRect(b, 0, d, c))
        }
        f = a._compMap.Director_16;
        if (null != f)
            for (var f = f.occludedScenes, d = 0, h = f.length; d < h;) l.getBoundsImpl(f[d], b, c), ++d;
        for (a = a.firstChild; null != a;) f = a.next, l.getBoundsImpl(a, b, c), a = f
    };
    l.extendRect = function(a, b, c, d) {
        a = a.transform(b, c, l._scratchPoint);
        b = a.x;
        c = a.y;
        b < d.x && (d.x = b);
        c < d.y && (d.y = c);
        b > d.width && (d.width = b);
        c > d.height && (d.height = c)
    };
    l.__super__ =
        x;
    l.prototype = t(x.prototype, {
        get_name: function() {
            return "Sprite_3"
        },
        getNaturalWidth: function() {
            return 0
        },
        getNaturalHeight: function() {
            return 0
        },
        containsLocal: function(a, b) {
            return 0 <= a && a < this.getNaturalWidth() && 0 <= b && b < this.getNaturalHeight()
        },
        getLocalMatrix: function() {
            if (0 != (this._flags & 8)) {
                this._flags &= -9;
                if (0 != (this._flags & 128)) {
                    this._flags &= -129;
                    var a = 3.141592653589793 * this.rotation._value / 180;
                    this._sinCache = Math.sin(a);
                    this._cosCache = Math.cos(a)
                }
                var a = this.scaleX._value,
                    b = this.scaleY._value;
                this._localMatrix.set(this._cosCache *
                    a, this._sinCache * a, -this._sinCache * b, this._cosCache * b, this.x._value, this.y._value);
                this._localMatrix.translate(-this.anchorX._value, -this.anchorY._value)
            }
            return this._localMatrix
        },
        getViewMatrix: function() {
            if (this.isViewMatrixDirty()) {
                var a = this.getParentSprite();
                this._viewMatrix = null != a ? pa.multiply(a.getViewMatrix(), this.getLocalMatrix(), this._viewMatrix) : this.getLocalMatrix().clone(this._viewMatrix);
                this._flags &= -17;
                null != a && (this._parentViewMatrixUpdateCount = a._viewMatrixUpdateCount);
                ++this._viewMatrixUpdateCount
            }
            return this._viewMatrix
        },
        setAnchor: function(a, b) {
            this.anchorX.set__(a);
            this.anchorY.set__(b);
            return this
        },
        centerAnchor: function() {
            this.anchorX.set__(this.getNaturalWidth() / 2);
            this.anchorY.set__(this.getNaturalHeight() / 2);
            return this
        },
        setXY: function(a, b) {
            this.x.set__(a);
            this.y.set__(b);
            return this
        },
        setAlpha: function(a) {
            this.alpha.set__(a);
            return this
        },
        setScale: function(a) {
            this.scaleX.set__(a);
            this.scaleY.set__(a);
            return this
        },
        setScaleXY: function(a, b) {
            this.scaleX.set__(a);
            this.scaleY.set__(b);
            return this
        },
        disablePointer: function() {
            this.set_pointerEnabled(!1);
            return this
        },
        disablePixelSnapping: function() {
            this.set_pixelSnapping(!1);
            return this
        },
        onAdded: function() {
            0 != (this._flags & 64) && this.connectHover()
        },
        onRemoved: function() {
            null != this._hoverConnection && (this._hoverConnection.dispose(), this._hoverConnection = null)
        },
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
        draw: function() {},
        isViewMatrixDirty: function() {
            if (0 !=
                (this._flags & 16)) return !0;
            var a = this.getParentSprite();
            return null == a ? !1 : this._parentViewMatrixUpdateCount != a._viewMatrixUpdateCount || a.isViewMatrixDirty()
        },
        getParentSprite: function() {
            if (null == this.owner) return null;
            for (var a = this.owner.parent; null != a;) {
                var b = a._compMap.Sprite_3;
                if (null != b) return b;
                a = a.parent
            }
            return null
        },
        get_pointerDown: function() {
            null == this._pointerDown && (this._pointerDown = new K);
            return this._pointerDown
        },
        get_pointerMove: function() {
            null == this._pointerMove && (this._pointerMove = new K);
            return this._pointerMove
        },
        get_pointerUp: function() {
            null == this._pointerUp && (this._pointerUp = new K);
            return this._pointerUp
        },
        get_pointerIn: function() {
            null == this._pointerIn && (this._pointerIn = new K);
            return this._pointerIn
        },
        get_pointerOut: function() {
            null == this._pointerOut && (this._pointerOut = new K);
            return this._pointerOut
        },
        connectHover: function() {
            var a = this;
            null == this._hoverConnection && (this._hoverConnection = k._platform.getPointer().move.connect(function(b) {
                for (var c = b.hit; null != c;) {
                    if (c == a) return;
                    c = c.getParentSprite()
                }
                null !=
                    a._pointerOut && 0 != (a._flags & 64) && a._pointerOut.emit(b);
                a._flags &= -65;
                null != a._hoverConnection && (a._hoverConnection.dispose(), a._hoverConnection = null)
            }))
        },
        set_visible: function(a) {
            this._flags = Ob.set(this._flags, 2, a);
            return a
        },
        set_pointerEnabled: function(a) {
            this._flags = Ob.set(this._flags, 4, a);
            return a
        },
        set_pixelSnapping: function(a) {
            this._flags = Ob.set(this._flags, 32, a);
            return a
        },
        onPointerDown: function(a) {
            this.onHover(a);
            null != this._pointerDown && this._pointerDown.emit(a)
        },
        onPointerMove: function(a) {
            this.onHover(a);
            null != this._pointerMove && this._pointerMove.emit(a)
        },
        onHover: function(a) {
            if (0 == (this._flags & 64) && (this._flags |= 64, null != this._pointerIn || null != this._pointerOut)) null != this._pointerIn && this._pointerIn.emit(a), this.connectHover()
        },
        onPointerUp: function(a) {
            switch (a.source[1]) {
                case 1:
                    null != this._pointerOut && 0 != (this._flags & 64) && this._pointerOut.emit(a), this._flags &= -65, null != this._hoverConnection && (this._hoverConnection.dispose(), this._hoverConnection = null)
            }
            null != this._pointerUp && this._pointerUp.emit(a)
        },
        __class__: l
    });
    var fa = function(a, b, c) {
        l.call(this);
        this.color = a;
        this.width = new P(b);
        this.height = new P(c)
    };
    e["flambe.display.FillSprite"] = fa;
    fa.__name__ = ["flambe", "display", "FillSprite"];
    fa.__super__ = l;
    fa.prototype = t(l.prototype, {
        draw: function(a) {
            a.fillRect(this.color, 0, 0, this.width._value, this.height._value)
        },
        getNaturalWidth: function() {
            return this.width._value
        },
        getNaturalHeight: function() {
            return this.height._value
        },
        onUpdate: function(a) {
            l.prototype.onUpdate.call(this, a);
            this.width.update(a);
            this.height.update(a)
        },
        __class__: fa
    });
    var kc = function(a) {
        this._kernings = null;
        this.xOffset = this.yOffset = this.xAdvance = 0;
        this.page = null;
        this.x = this.y = this.width = this.height = 0;
        this.charCode = a
    };
    e["flambe.display.Glyph"] = kc;
    kc.__name__ = ["flambe", "display", "Glyph"];
    kc.prototype = {
        draw: function(a, b, c) {
            0 < this.width && a.drawSubTexture(this.page, b + this.xOffset, c + this.yOffset, this.x, this.y, this.width, this.height)
        },
        getKerning: function(a) {
            return null != this._kernings ? s["int"](this._kernings.h[a]) : 0
        },
        setKerning: function(a, b) {
            null == this._kernings &&
                (this._kernings = new Ia);
            this._kernings.h[a] = b
        },
        __class__: kc
    };
    var ob = function(a, b) {
        this.name = b;
        this._pack = a;
        this._file = a.getFile(b + ".fnt");
        this.reload()
    };
    e["flambe.display.Font"] = ob;
    ob.__name__ = ["flambe", "display", "Font"];
    ob.prototype = {
        disposeFiles: function() {
            this._file.dispose();
            return this
        },
        layoutText: function(a, b, c, d, f) {
            null == f && (f = 0);
            null == d && (d = 0);
            null == c && (c = 0);
            null == b && (b = H.Left);
            return new ab(this, a, b, c, d, f)
        },
        reload: function() {
            this._glyphs = new Ia;
            this._glyphs.h[ob.NEWLINE.charCode] = ob.NEWLINE;
            for (var a = new pb(this._file.toString()), b = new Ia, c = this.name.lastIndexOf("/"), c = 0 <= c ? w.substr(this.name, 0, c + 1) : "", d = a.keywords(); d.hasNext();) switch (d.next()) {
                case "info":
                    for (var f = a.pairs(); f.hasNext();) {
                        var h = f.next();
                        switch (h.key) {
                            case "size":
                                this.size = h.getInt()
                        }
                    }
                    break;
                case "common":
                    for (f = a.pairs(); f.hasNext();) switch (h = f.next(), h.key) {
                        case "lineHeight":
                            this.lineHeight = h.getInt()
                    }
                    break;
                case "page":
                    for (var f = 0, h = null, e = a.pairs(); e.hasNext();) {
                        var g = e.next();
                        switch (g.key) {
                            case "id":
                                f = g.getInt();
                                break;
                            case "file":
                                h = g.getString()
                        }
                    }
                    h = this._pack.getTexture(c + W.removeFileExtension(h));
                    b.h[f] = h;
                    break;
                case "char":
                    f = null;
                    for (h = a.pairs(); h.hasNext();) switch (e = h.next(), e.key) {
                        case "id":
                            f = new kc(e.getInt());
                            break;
                        case "x":
                            f.x = e.getInt();
                            break;
                        case "y":
                            f.y = e.getInt();
                            break;
                        case "width":
                            f.width = e.getInt();
                            break;
                        case "height":
                            f.height = e.getInt();
                            break;
                        case "page":
                            e = e.getInt();
                            f.page = b.h[e];
                            break;
                        case "xoffset":
                            f.xOffset = e.getInt();
                            break;
                        case "yoffset":
                            f.yOffset = e.getInt();
                            break;
                        case "xadvance":
                            f.xAdvance =
                                e.getInt()
                    }
                    this._glyphs.h[f.charCode] = f;
                    break;
                case "kerning":
                    f = null;
                    e = h = 0;
                    for (g = a.pairs(); g.hasNext();) {
                        var p = g.next();
                        switch (p.key) {
                            case "first":
                                f = this._glyphs.h[p.getInt()];
                                break;
                            case "second":
                                h = p.getInt();
                                break;
                            case "amount":
                                e = p.getInt()
                        }
                    }
                    null != f && 0 != e && f.setKerning(h, e)
            }
        },
        __class__: ob
    };
    var H = e["flambe.display.TextAlign"] = {
        __ename__: !0,
        __constructs__: ["Left", "Center", "Right"]
    };
    H.Left = ["Left", 0];
    H.Left.toString = D;
    H.Left.__enum__ = H;
    H.Center = ["Center", 1];
    H.Center.toString = D;
    H.Center.__enum__ = H;
    H.Right = ["Right", 2];
    H.Right.toString = D;
    H.Right.__enum__ = H;
    var ab = function(a, b, c, d, f, h) {
        this.lines = 0;
        var e = this;
        this._font = a;
        this._glyphs = [];
        this._offsets = [];
        this._lineOffset = Math.round(a.lineHeight + h);
        this.bounds = new Wa;
        for (var g = [], h = b.length, p = 0; p < h;) {
            var j = p++,
                j = b.charCodeAt(j),
                j = a._glyphs.h[j];
            null != j ? this._glyphs.push(j) : null
        }
        for (var b = -1, k = 0, kb = 0, a = a._glyphs.h[10], h = function() {
                e.bounds.width = ea.max(e.bounds.width, k);
                e.bounds.height += kb;
                g[e.lines] = k;
                kb = k = 0;
                ++e.lines
            }, p = 0; p < this._glyphs.length;) {
            j = this._glyphs[p];
            this._offsets[p] = Math.round(k);
            var m = 0 < d && k + j.width > d;
            m || j == a ? (m && (0 <= b ? (this._glyphs[b] = a, k = this._offsets[b], p = b) : this._glyphs.splice(p, 0, a)), b = -1, kb = this._lineOffset, h()) : (32 == j.charCode && (b = p), k += j.xAdvance + f, kb = ea.max(kb, j.height + j.yOffset), p + 1 < this._glyphs.length && (k += j.getKerning(this._glyphs[p + 1].charCode)));
            ++p
        }
        h();
        f = 0;
        a = ab.getAlignOffset(c, g[0], d);
        b = 1.79769313486231E308;
        h = -1.79769313486231E308;
        j = p = 0;
        for (m = this._glyphs.length; j < m;) {
            var l = this._glyphs[j];
            10 == l.charCode && (f += this._lineOffset,
                ++p, a = ab.getAlignOffset(c, g[p], d));
            this._offsets[j] += a;
            var o = f + l.yOffset,
                b = b < o ? b : o,
                h = ea.max(h, o + l.height);
            ++j
        }
        this.bounds.x = ab.getAlignOffset(c, this.bounds.width, d);
        this.bounds.y = b;
        this.bounds.height = h - b
    };
    e["flambe.display.TextLayout"] = ab;
    ab.__name__ = ["flambe", "display", "TextLayout"];
    ab.getAlignOffset = function(a, b, c) {
        switch (a[1]) {
            case 0:
                return 0;
            case 2:
                return c - b;
            case 1:
                return Math.round((c - b) / 2)
        }
    };
    ab.prototype = {
        draw: function(a) {
            for (var b = 0, c = 0, d = this._glyphs.length; c < d;) {
                var f = this._glyphs[c];
                10 ==
                    f.charCode ? b += this._lineOffset : f.draw(a, this._offsets[c], b);
                ++c
            }
        },
        __class__: ab
    };
    var pb = function(a) {
        this._configText = a;
        this._keywordPattern = new X("([A-Za-z]+)(.*)", "");
        this._pairPattern = new X('([A-Za-z]+)=("[^"]*"|[^\\s]+)', "")
    };
    e["flambe.display._Font.ConfigParser"] = pb;
    pb.__name__ = ["flambe", "display", "_Font", "ConfigParser"];
    pb.advance = function(a, b) {
        var c = b.matchedPos();
        return w.substr(a, c.pos + c.len, a.length)
    };
    pb.prototype = {
        keywords: function() {
            var a = this,
                b = this._configText;
            return {
                next: function() {
                    b =
                        pb.advance(b, a._keywordPattern);
                    a._pairText = a._keywordPattern.matched(2);
                    return a._keywordPattern.matched(1)
                },
                hasNext: function() {
                    return a._keywordPattern.match(b)
                }
            }
        },
        pairs: function() {
            var a = this,
                b = this._pairText;
            return {
                next: function() {
                    b = pb.advance(b, a._pairPattern);
                    return new Uc(a._pairPattern.matched(1), a._pairPattern.matched(2))
                },
                hasNext: function() {
                    return a._pairPattern.match(b)
                }
            }
        },
        __class__: pb
    };
    var Uc = function(a, b) {
        this.key = a;
        this._value = b
    };
    e["flambe.display._Font.ConfigPair"] = Uc;
    Uc.__name__ = ["flambe",
        "display", "_Font", "ConfigPair"
    ];
    Uc.prototype = {
        getInt: function() {
            return s.parseInt(this._value)
        },
        getString: function() {
            return 34 != this._value.charCodeAt(0) ? null : w.substr(this._value, 1, this._value.length - 2)
        },
        __class__: Uc
    };
    var Vc = function() {};
    e["flambe.display.Graphics"] = Vc;
    Vc.__name__ = ["flambe", "display", "Graphics"];
    Vc.prototype = {
        __class__: Vc
    };
    var q = function(a) {
        l.call(this);
        this.texture = a
    };
    e["flambe.display.ImageSprite"] = q;
    q.__name__ = ["flambe", "display", "ImageSprite"];
    q.__super__ = l;
    q.prototype = t(l.prototype, {
        draw: function(a) {
            null != this.texture && a.drawTexture(this.texture, 0, 0)
        },
        getNaturalWidth: function() {
            return null != this.texture ? this.texture.get_width() : 0
        },
        getNaturalHeight: function() {
            return null != this.texture ? this.texture.get_height() : 0
        },
        __class__: q
    });
    var Pa = e["flambe.display.Orientation"] = {
        __ename__: !0,
        __constructs__: ["Portrait", "Landscape"]
    };
    Pa.Portrait = ["Portrait", 0];
    Pa.Portrait.toString = D;
    Pa.Portrait.__enum__ = Pa;
    Pa.Landscape = ["Landscape", 1];
    Pa.Landscape.toString = D;
    Pa.Landscape.__enum__ = Pa;
    var lc =
        function() {};
    e["flambe.display.Texture"] = lc;
    lc.__name__ = ["flambe", "display", "Texture"];
    lc.__interfaces__ = [$a];
    lc.prototype = {
        __class__: lc
    };
    var mc = function() {};
    e["flambe.display.SubTexture"] = mc;
    mc.__name__ = ["flambe", "display", "SubTexture"];
    mc.__interfaces__ = [lc];
    mc.prototype = {
        __class__: mc
    };
    var xb = function(a, b) {
        null == b && (b = "");
        this._layout = null;
        var c = this;
        l.call(this);
        this._font = a;
        this._text = b;
        this._align = H.Left;
        this._flags |= 256;
        var d = function() {
            c._flags |= 256
        };
        this.wrapWidth = new P(0, d);
        this.letterSpacing =
            new P(0, d);
        this.lineSpacing = new P(0, d)
    };
    e["flambe.display.TextSprite"] = xb;
    xb.__name__ = ["flambe", "display", "TextSprite"];
    xb.__super__ = l;
    xb.prototype = t(l.prototype, {
        draw: function(a) {
            this.updateLayout();
            this._layout.draw(a)
        },
        getNaturalWidth: function() {
            this.updateLayout();
            return 0 < this.wrapWidth._value ? this.wrapWidth._value : this._layout.bounds.width
        },
        getNaturalHeight: function() {
            this.updateLayout();
            var a = this._layout.lines * (this._font.lineHeight + this.lineSpacing._value),
                b = this._layout.bounds.height;
            return a >
                b ? a : b
        },
        containsLocal: function(a, b) {
            this.updateLayout();
            return this._layout.bounds.contains(a, b)
        },
        set_text: function(a) {
            a != this._text && (this._text = a, this._flags |= 256);
            return a
        },
        set_align: function(a) {
            a != this._align && (this._align = a, this._flags |= 256);
            return a
        },
        updateLayout: function() {
            0 != (this._flags & 256) && (this._flags &= -257, this._layout = this._font.layoutText(this._text, this._align, this.wrapWidth._value, this.letterSpacing._value, this.lineSpacing._value))
        },
        onUpdate: function(a) {
            l.prototype.onUpdate.call(this,
                a);
            this.wrapWidth.update(a);
            this.letterSpacing.update(a);
            this.lineSpacing.update(a)
        },
        __class__: xb
    });
    var da = e["flambe.input.MouseButton"] = {
        __ename__: !0,
        __constructs__: ["Left", "Middle", "Right", "Unknown"]
    };
    da.Left = ["Left", 0];
    da.Left.toString = D;
    da.Left.__enum__ = da;
    da.Middle = ["Middle", 1];
    da.Middle.toString = D;
    da.Middle.__enum__ = da;
    da.Right = ["Right", 2];
    da.Right.toString = D;
    da.Right.__enum__ = da;
    da.Unknown = function(a) {
        a = ["Unknown", 3, a];
        a.__enum__ = da;
        a.toString = D;
        return a
    };
    var aa = e["flambe.input.MouseCursor"] = {
        __ename__: !0,
        __constructs__: ["Default", "Button", "None"]
    };
    aa.Default = ["Default", 0];
    aa.Default.toString = D;
    aa.Default.__enum__ = aa;
    aa.Button = ["Button", 1];
    aa.Button.toString = D;
    aa.Button.__enum__ = aa;
    aa.None = ["None", 2];
    aa.None.toString = D;
    aa.None.__enum__ = aa;
    var Wc = function() {
        this.init(0, 0, 0, null)
    };
    e["flambe.input.MouseEvent"] = Wc;
    Wc.__name__ = ["flambe", "input", "MouseEvent"];
    Wc.prototype = {
        init: function(a, b, c, d) {
            this.id = a;
            this.viewX = b;
            this.viewY = c;
            this.button = d
        },
        __class__: Wc
    };
    var nc = e["flambe.input.EventSource"] = {
        __ename__: !0,
        __constructs__: ["Mouse", "Touch"]
    };
    nc.Mouse = function(a) {
        a = ["Mouse", 0, a];
        a.__enum__ = nc;
        a.toString = D;
        return a
    };
    nc.Touch = function(a) {
        a = ["Touch", 1, a];
        a.__enum__ = nc;
        a.toString = D;
        return a
    };
    var Xc = function() {
        this.init(0, 0, 0, null, null)
    };
    e["flambe.input.PointerEvent"] = Xc;
    Xc.__name__ = ["flambe", "input", "PointerEvent"];
    Xc.prototype = {
        init: function(a, b, c, d, f) {
            this.id = a;
            this.viewX = b;
            this.viewY = c;
            this.hit = d;
            this.source = f;
            this._stopped = !1
        },
        __class__: Xc
    };
    var Yc = function(a) {
        this.id = a;
        this._source = nc.Touch(this)
    };
    e["flambe.input.TouchPoint"] = Yc;
    Yc.__name__ = ["flambe", "input", "TouchPoint"];
    Yc.prototype = {
        init: function(a, b) {
            this.viewX = a;
            this.viewY = b
        },
        __class__: Yc
    };
    var ea = function() {};
    e["flambe.math.FMath"] = ea;
    ea.__name__ = ["flambe", "math", "FMath"];
    ea.max = function(a, b) {
        return a > b ? a : b
    };
    ea.min = function(a, b) {
        return a < b ? a : b
    };
    ea.clamp = function(a, b, c) {
        return a < b ? b : a > c ? c : a
    };
    var pa = function() {
        this.identity()
    };
    e["flambe.math.Matrix"] = pa;
    pa.__name__ = ["flambe", "math", "Matrix"];
    pa.multiply = function(a, b, c) {
        null == c && (c = new pa);
        var d = a.m00 * b.m00 + a.m01 * b.m10,
            f = a.m00 * b.m01 + a.m01 * b.m11,
            h = a.m00 * b.m02 + a.m01 * b.m12 + a.m02;
        c.m00 = d;
        c.m01 = f;
        c.m02 = h;
        d = a.m10 * b.m00 + a.m11 * b.m10;
        f = a.m10 * b.m01 + a.m11 * b.m11;
        h = a.m10 * b.m02 + a.m11 * b.m12 + a.m12;
        c.m10 = d;
        c.m11 = f;
        c.m12 = h;
        return c
    };
    pa.prototype = {
        set: function(a, b, c, d, f, h) {
            this.m00 = a;
            this.m01 = c;
            this.m02 = f;
            this.m10 = b;
            this.m11 = d;
            this.m12 = h
        },
        identity: function() {
            this.set(1, 0, 0, 1, 0, 0)
        },
        translate: function(a, b) {
            this.m02 += this.m00 * a + this.m01 * b;
            this.m12 += this.m11 * b + this.m10 * a
        },
        invert: function() {
            var a = this.determinant();
            if (0 == a) return !1;
            this.set(this.m11 / a, -this.m01 / a, -this.m10 / a, this.m00 / a, (this.m01 * this.m12 - this.m11 * this.m02) / a, (this.m10 * this.m02 - this.m00 * this.m12) / a);
            return !0
        },
        transform: function(a, b, c) {
            null == c && (c = new za);
            c.x = a * this.m00 + b * this.m01 + this.m02;
            c.y = a * this.m10 + b * this.m11 + this.m12;
            return c
        },
        transformArray: function(a, b, c) {
            for (var d = 0; d < b;) {
                var f = a[d],
                    h = a[d + 1];
                c[d++] = f * this.m00 + h * this.m01 + this.m02;
                c[d++] = f * this.m10 + h * this.m11 + this.m12
            }
        },
        determinant: function() {
            return this.m00 * this.m11 - this.m01 * this.m10
        },
        inverseTransform: function(a, b, c) {
            var d = this.determinant();
            if (0 == d) return !1;
            a -= this.m02;
            b -= this.m12;
            c.x = (a * this.m11 - b * this.m01) / d;
            c.y = (b * this.m00 - a * this.m10) / d;
            return !0
        },
        clone: function(a) {
            null == a && (a = new pa);
            a.set(this.m00, this.m10, this.m01, this.m11, this.m02, this.m12);
            return a
        },
        __class__: pa
    };
    var Wa = function(a, b, c, d) {
        null == d && (d = 0);
        null == c && (c = 0);
        null == b && (b = 0);
        null == a && (a = 0);
        this.set(a, b, c, d)
    };
    e["flambe.math.Rectangle"] = Wa;
    Wa.__name__ = ["flambe", "math", "Rectangle"];
    Wa.prototype = {
        set: function(a, b, c,
            d) {
            this.x = a;
            this.y = b;
            this.width = c;
            this.height = d
        },
        contains: function(a, b) {
            a -= this.x;
            if (0 <= this.width) {
                if (0 > a || a > this.width) return !1
            } else if (0 < a || a < this.width) return !1;
            b -= this.y;
            if (0 <= this.height) {
                if (0 > b || b > this.height) return !1
            } else if (0 < b || b < this.height) return !1;
            return !0
        },
        clone: function(a) {
            null == a && (a = new Wa);
            a.set(this.x, this.y, this.width, this.height);
            return a
        },
        equals: function(a) {
            return this.x == a.x && this.y == a.y && this.width == a.width && this.height == a.height
        },
        __class__: Wa
    };
    var $ = function() {
        this._disposed = !1
    };
    e["flambe.platform.BasicAsset"] = $;
    $.__name__ = ["flambe", "platform", "BasicAsset"];
    $.__interfaces__ = [$a];
    $.prototype = {
        dispose: function() {
            this._disposed || (this._disposed = !0, this.onDisposed())
        },
        onDisposed: function() {
            null
        },
        __class__: $
    };
    var bb = function(a, b) {
        var c = this;
        this.manifest = b;
        this._platform = a;
        this.promise = new oc;
        this._bytesLoaded = new R;
        this._pack = new pc(b, this);
        var d = eb.array(b);
        if (0 == d.length) this.handleSuccess();
        else {
            for (var f = new R, h = 0; h < d.length;) {
                var e = d[h];
                ++h;
                var g = f.get(e.name);
                null ==
                    g && (g = [], f.set(e.name, g));
                g.push(e)
            }
            this._assetsRemaining = eb.count(f);
            for (d = new qc(f, f.arrayKeys()); d.hasNext();) f = [d.next()], this.pickBestEntry(f[0], function(a) {
                return function(d) {
                    if (null != d) {
                        var f = b.getFullURL(d);
                        try {
                            c.loadEntry(f, d)
                        } catch (h) {
                            h instanceof m && (h = h.val), c.handleError(d, "Unexpected error: " + s.string(h))
                        }
                        f = c.promise;
                        f.set_total(f._total + d.bytes)
                    } else d = a[0][0], bb.isAudio(d.format) ? c.handleLoad(d, qa.getInstance()) : c.handleError(d, "Could not find a supported format to load")
                }
            }(f))
        }
    };
    e["flambe.platform.BasicAssetPackLoader"] = bb;
    bb.__name__ = ["flambe", "platform", "BasicAssetPackLoader"];
    bb.isAudio = function(a) {
        switch (a[1]) {
            case 8:
            case 9:
            case 10:
            case 11:
            case 12:
                return !0;
            default:
                return !1
        }
    };
    bb.prototype = {
        onDisposed: function() {},
        pickBestEntry: function(a, b) {
            this.getAssetFormats(function(c) {
                for (var d = 0; d < c.length;) {
                    var f = c[d];
                    ++d;
                    for (var h = 0; h < a.length;) {
                        var e = a[h];
                        ++h;
                        if (e.format == f) {
                            b(e);
                            return
                        }
                    }
                }
                b(null)
            })
        },
        loadEntry: function() {
            null
        },
        getAssetFormats: function() {
            null
        },
        handleLoad: function(a,
            b) {
            if (!this._pack.disposed) {
                this.handleProgress(a, a.bytes);
                var c;
                switch (a.format[1]) {
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                        c = this._pack.textures;
                        break;
                    case 8:
                    case 9:
                    case 10:
                    case 11:
                    case 12:
                        c = this._pack.sounds;
                        break;
                    case 13:
                        c = this._pack.files
                }
                c.set(a.name, b);
                this._assetsRemaining -= 1;
                0 == this._assetsRemaining && this.handleSuccess()
            }
        },
        handleProgress: function(a, b) {
            this._bytesLoaded.set(a.name, b);
            for (var c = 0, d = this._bytesLoaded.iterator(); d.hasNext();) var f = d.next(),
                c = c + f;
            this.promise.set_progress(c)
        },
        handleSuccess: function() {
            this.promise.set_result(this._pack)
        },
        handleError: function(a, b) {
            this.promise.error.emit(W.withFields(b, ["url", a.url]))
        },
        handleTextureError: function(a) {
            this.handleError(a, "Failed to create texture. Is the GPU context unavailable?")
        },
        __class__: bb
    };
    var pc = function(a, b) {
        this.disposed = !1;
        this._manifest = a;
        this.loader = b;
        this.textures = new R;
        this.sounds = new R;
        this.files = new R
    };
    e["flambe.platform._BasicAssetPackLoader.BasicAssetPack"] = pc;
    pc.__name__ = ["flambe", "platform", "_BasicAssetPackLoader",
        "BasicAssetPack"
    ];
    pc.__interfaces__ = [Mb];
    pc.prototype = {
        getTexture: function(a, b) {
            null == b && (b = !0);
            var c = this.textures.get(a);
            if (null == c && b) throw new m(W.withFields("Missing texture", ["name", a]));
            return c
        },
        getSound: function(a, b) {
            null == b && (b = !0);
            var c = this.sounds.get(a);
            if (null == c && b) throw new m(W.withFields("Missing sound", ["name", a]));
            return c
        },
        getFile: function(a, b) {
            null == b && (b = !0);
            var c = this.files.get(a);
            if (null == c && b) throw new m(W.withFields("Missing file", ["name", a]));
            return c
        },
        dispose: function() {
            if (!this.disposed) {
                this.disposed = !0;
                for (var a = this.textures.iterator(); a.hasNext();) a.next().dispose();
                this.textures = null;
                for (a = this.sounds.iterator(); a.hasNext();) a.next().dispose();
                this.sounds = null;
                for (a = this.files.iterator(); a.hasNext();) a.next().dispose();
                this.files = null;
                this.loader.onDisposed()
            }
        },
        get_manifest: function() {
            return this._manifest
        },
        __class__: pc
    };
    var Pb = function(a) {
        this._disposed = !1;
        this._content = a
    };
    e["flambe.platform.BasicFile"] = Pb;
    Pb.__name__ = ["flambe", "platform", "BasicFile"];
    Pb.__interfaces__ = [jc];
    Pb.__super__ =
        $;
    Pb.prototype = t($.prototype, {
        toString: function() {
            return this._content
        },
        onDisposed: function() {
            this._content = null
        },
        __class__: Pb
    });
    var Zc = function() {};
    e["flambe.subsystem.MouseSystem"] = Zc;
    Zc.__name__ = ["flambe", "subsystem", "MouseSystem"];
    Zc.prototype = {
        __class__: Zc
    };
    var ha = function(a) {
        this._pointer = a;
        this._source = nc.Mouse(ha._sharedEvent);
        this.down = new K;
        this.move = new K;
        this.up = new K;
        this.scroll = new K;
        this._y = this._x = 0;
        this._cursor = aa.Default;
        this._buttonStates = new Ia
    };
    e["flambe.platform.BasicMouse"] =
        ha;
    ha.__name__ = ["flambe", "platform", "BasicMouse"];
    ha.__interfaces__ = [Zc];
    ha.prototype = {
        get_supported: function() {
            return !0
        },
        set_cursor: function(a) {
            return this._cursor = a
        },
        submitDown: function(a, b, c) {
            this._buttonStates.h.hasOwnProperty(c) || (this._buttonStates.h[c] = !0, this.prepare(a, b, $c.toButton(c)), this._pointer.submitDown(a, b, this._source), this.down.emit(ha._sharedEvent))
        },
        submitMove: function(a, b) {
            this.prepare(a, b, null);
            this._pointer.submitMove(a, b, this._source);
            this.move.emit(ha._sharedEvent)
        },
        submitUp: function(a,
            b, c) {
            this._buttonStates.h.hasOwnProperty(c) && (this._buttonStates.remove(c), this.prepare(a, b, $c.toButton(c)), this._pointer.submitUp(a, b, this._source), this.up.emit(ha._sharedEvent))
        },
        submitScroll: function(a, b, c) {
            this._x = a;
            this._y = b;
            if (null == this.scroll._head) return !1;
            this.scroll.emit(c);
            return !0
        },
        prepare: function(a, b, c) {
            this._x = a;
            this._y = b;
            ha._sharedEvent.init(ha._sharedEvent.id + 1, a, b, c)
        },
        __class__: ha
    };
    var ad = function() {};
    e["flambe.subsystem.PointerSystem"] = ad;
    ad.__name__ = ["flambe", "subsystem", "PointerSystem"];
    ad.prototype = {
        __class__: ad
    };
    var ca = function(a, b, c) {
        null == c && (c = !1);
        null == b && (b = 0);
        null == a && (a = 0);
        this.down = new K;
        this.move = new K;
        this.up = new K;
        this._x = a;
        this._y = b;
        this._isDown = c
    };
    e["flambe.platform.BasicPointer"] = ca;
    ca.__name__ = ["flambe", "platform", "BasicPointer"];
    ca.__interfaces__ = [ad];
    ca.prototype = {
        get_x: function() {
            return this._x
        },
        get_y: function() {
            return this._y
        },
        isDown: function() {
            return this._isDown
        },
        submitDown: function(a, b, c) {
            if (!this._isDown) {
                this.submitMove(a, b, c);
                this._isDown = !0;
                var d = [],
                    f =
                    l.hitTest(k.root, a, b);
                if (null != f) {
                    var h = f.owner;
                    do {
                        var e = h._compMap.Sprite_3;
                        null != e && d.push(e);
                        h = h.parent
                    } while (null != h)
                }
                this.prepare(a, b, f, c);
                for (a = 0; a < d.length;)
                    if (b = d[a], ++a, b.onPointerDown(ca._sharedEvent), ca._sharedEvent._stopped) return;
                this.down.emit(ca._sharedEvent)
            }
        },
        submitMove: function(a, b, c) {
            if (!(a == this._x && b == this._y)) {
                var d = [],
                    f = l.hitTest(k.root, a, b);
                if (null != f) {
                    var h = f.owner;
                    do {
                        var e = h._compMap.Sprite_3;
                        null != e && d.push(e);
                        h = h.parent
                    } while (null != h)
                }
                this.prepare(a, b, f, c);
                for (a = 0; a < d.length;)
                    if (b =
                        d[a], ++a, b.onPointerMove(ca._sharedEvent), ca._sharedEvent._stopped) return;
                this.move.emit(ca._sharedEvent)
            }
        },
        submitUp: function(a, b, c) {
            if (this._isDown) {
                this.submitMove(a, b, c);
                this._isDown = !1;
                var d = [],
                    f = l.hitTest(k.root, a, b);
                if (null != f) {
                    var h = f.owner;
                    do {
                        var e = h._compMap.Sprite_3;
                        null != e && d.push(e);
                        h = h.parent
                    } while (null != h)
                }
                this.prepare(a, b, f, c);
                for (a = 0; a < d.length;)
                    if (b = d[a], ++a, b.onPointerUp(ca._sharedEvent), ca._sharedEvent._stopped) return;
                this.up.emit(ca._sharedEvent)
            }
        },
        prepare: function(a, b, c, d) {
            this._x =
                a;
            this._y = b;
            ca._sharedEvent.init(ca._sharedEvent.id + 1, a, b, c, d)
        },
        __class__: ca
    };
    var Ba = function(a, b, c) {
        this._x = this._y = 0;
        this._parent = null;
        this.rootX = this.rootY = 0;
        this._disposed = !1;
        this.root = a;
        this._width = b;
        this._height = c
    };
    e["flambe.platform.BasicTexture"] = Ba;
    Ba.__name__ = ["flambe", "platform", "BasicTexture"];
    Ba.__interfaces__ = [mc];
    Ba.__super__ = $;
    Ba.prototype = t($.prototype, {
        subTexture: function(a, b, c, d) {
            c = this.root.createTexture(c, d);
            c._parent = this;
            c._x = a;
            c._y = b;
            c.rootX = this.rootX + a;
            c.rootY = this.rootY +
                b;
            return c
        },
        split: function(a, b) {
            null == b && (b = 1);
            for (var c = [], d = this._width / a | 0, f = this._height / b | 0, h = 0; h < b;)
                for (var e = h++, g = 0; g < a;) {
                    var j = g++;
                    c.push(this.subTexture(j * d, e * f, d, f))
                }
            return c
        },
        get_graphics: function() {
            return this.root.getGraphics()
        },
        onDisposed: function() {
            null == this._parent && this.root.dispose()
        },
        get_x: function() {
            return this._x
        },
        get_y: function() {
            return this._y
        },
        get_width: function() {
            return this._width
        },
        get_height: function() {
            return this._height
        },
        __class__: Ba
    });
    var rc = function() {};
    e["flambe.subsystem.TouchSystem"] =
        rc;
    rc.__name__ = ["flambe", "subsystem", "TouchSystem"];
    rc.prototype = {
        __class__: rc
    };
    var fc = function(a, b) {
        null == b && (b = 4);
        this._pointer = a;
        this._maxPoints = b;
        this._pointMap = new Ia;
        this._points = [];
        this.down = new K;
        this.move = new K;
        this.up = new K
    };
    e["flambe.platform.BasicTouch"] = fc;
    fc.__name__ = ["flambe", "platform", "BasicTouch"];
    fc.__interfaces__ = [rc];
    fc.prototype = {
        get_supported: function() {
            return !0
        },
        submitDown: function(a, b, c) {
            if (!this._pointMap.h.hasOwnProperty(a)) {
                var d = new Yc(a);
                d.init(b, c);
                this._pointMap.h[a] =
                    d;
                this._points.push(d);
                null == this._pointerTouch && (this._pointerTouch = d, this._pointer.submitDown(b, c, d._source));
                this.down.emit(d)
            }
        },
        submitMove: function(a, b, c) {
            a = this._pointMap.h[a];
            null != a && (a.init(b, c), this._pointerTouch == a && this._pointer.submitMove(b, c, a._source), this.move.emit(a))
        },
        submitUp: function(a, b, c) {
            var d = this._pointMap.h[a];
            null != d && (d.init(b, c), this._pointMap.remove(a), w.remove(this._points, d), this._pointerTouch == d && (this._pointerTouch = null, this._pointer.submitUp(b, c, d._source)), this.up.emit(d))
        },
        __class__: fc
    };
    var qb = function() {};
    e["flambe.sound.Sound"] = qb;
    qb.__name__ = ["flambe", "sound", "Sound"];
    qb.__interfaces__ = [$a];
    qb.prototype = {
        __class__: qb
    };
    var qa = function() {
        this._disposed = !1;
        this._playback = new sc(this)
    };
    e["flambe.platform.DummySound"] = qa;
    qa.__name__ = ["flambe", "platform", "DummySound"];
    qa.__interfaces__ = [qb];
    qa.getInstance = function() {
        null == qa._instance && (qa._instance = new qa);
        return qa._instance
    };
    qa.__super__ = $;
    qa.prototype = t($.prototype, {
        play: function() {
            return this._playback
        },
        loop: function() {
            return this._playback
        },
        onDisposed: function() {},
        __class__: qa
    });
    var rb = function() {};
    e["flambe.sound.Playback"] = rb;
    rb.__name__ = ["flambe", "sound", "Playback"];
    rb.__interfaces__ = [ya];
    rb.prototype = {
        __class__: rb
    };
    var sc = function(a) {
        this._sound = a;
        this.volume = new P(0);
        this._complete = new Z(!0)
    };
    e["flambe.platform.DummyPlayback"] = sc;
    sc.__name__ = ["flambe", "platform", "DummyPlayback"];
    sc.__interfaces__ = [rb];
    sc.prototype = {
        get_complete: function() {
            return this._complete
        },
        dispose: function() {},
        __class__: sc
    };
    var gc = function() {
        this.down = new K;
        this.move = new K;
        this.up = new K
    };
    e["flambe.platform.DummyTouch"] = gc;
    gc.__name__ = ["flambe", "platform", "DummyTouch"];
    gc.__interfaces__ = [rc];
    gc.prototype = {
        get_supported: function() {
            return !1
        },
        __class__: gc
    };
    var Qb = function() {
        this._entries = []
    };
    e["flambe.platform.EventGroup"] = Qb;
    Qb.__name__ = ["flambe", "platform", "EventGroup"];
    Qb.__interfaces__ = [ya];
    Qb.prototype = {
        addListener: function(a, b, c) {
            a.addEventListener(b, c, !1);
            this._entries.push(new bd(a, b, c))
        },
        addDisposingListener: function(a, b, c) {
            var d = this;
            this.addListener(a,
                b,
                function(a) {
                    d.dispose();
                    c(a)
                })
        },
        dispose: function() {
            for (var a = 0, b = this._entries; a < b.length;) {
                var c = b[a];
                ++a;
                c.dispatcher.removeEventListener(c.type, c.listener, !1)
            }
            this._entries = []
        },
        __class__: Qb
    };
    var bd = function(a, b, c) {
        this.dispatcher = a;
        this.type = b;
        this.listener = c
    };
    e["flambe.platform._EventGroup.Entry"] = bd;
    bd.__name__ = ["flambe", "platform", "_EventGroup", "Entry"];
    bd.prototype = {
        __class__: bd
    };
    var Rb = function() {};
    e["flambe.platform.InternalGraphics"] = Rb;
    Rb.__name__ = ["flambe", "platform", "InternalGraphics"];
    Rb.__interfaces__ = [Vc];
    Rb.prototype = {
        __class__: Rb
    };
    var cd = function() {};
    e["flambe.subsystem.RendererSystem"] = cd;
    cd.__name__ = ["flambe", "subsystem", "RendererSystem"];
    cd.prototype = {
        __class__: cd
    };
    var Sb = function() {};
    e["flambe.platform.InternalRenderer"] = Sb;
    Sb.__name__ = ["flambe", "platform", "InternalRenderer"];
    Sb.__interfaces__ = [cd];
    Sb.prototype = {
        __class__: Sb
    };
    var jb = function() {
        this._tickables = []
    };
    e["flambe.platform.MainLoop"] = jb;
    jb.__name__ = ["flambe", "platform", "MainLoop"];
    jb.updateEntity = function(a, b) {
        var c =
            a._compMap.SpeedAdjuster_4;
        if (null != c && (c._realDt = b, b *= c.scale._value, 0 >= b)) {
            c.onUpdate(b);
            return
        }
        for (c = a.firstComponent; null != c;) {
            var d = c.next;
            0 == (c._flags & 1) && (c._flags |= 1, c.onStart());
            c.onUpdate(b);
            c = d
        }
        for (c = a.firstChild; null != c;) d = c.next, jb.updateEntity(c, b), c = d
    };
    jb.prototype = {
        update: function(a) {
            if (!(0 >= a)) {
                1 < a && (a = 1);
                for (var b = 0; b < this._tickables.length;) {
                    var c = this._tickables[b];
                    null == c || c.update(a) ? this._tickables.splice(b, 1) : ++b
                }
                k.volume.update(a);
                jb.updateEntity(k.root, a)
            }
        },
        render: function(a) {
            var b =
                a.graphics;
            null != b && (a.willRender(), l.render(k.root, b), a.didRender())
        },
        addTickable: function(a) {
            this._tickables.push(a)
        },
        __class__: jb
    };
    var dd = function() {};
    e["flambe.platform.MathUtil"] = dd;
    dd.__name__ = ["flambe", "platform", "MathUtil"];
    dd.nextPowerOfTwo = function(a) {
        for (var b = 1; b < a;) b <<= 1;
        return b
    };
    var $c = function() {};
    e["flambe.platform.MouseCodes"] = $c;
    $c.__name__ = ["flambe", "platform", "MouseCodes"];
    $c.toButton = function(a) {
        switch (a) {
            case 0:
                return da.Left;
            case 1:
                return da.Middle;
            case 2:
                return da.Right
        }
        return da.Unknown(a)
    };
    var tc = function() {};
    e["flambe.platform.TextureRoot"] = tc;
    tc.__name__ = ["flambe", "platform", "TextureRoot"];
    tc.prototype = {
        __class__: tc
    };
    var uc = function() {};
    e["flambe.platform.Tickable"] = uc;
    uc.__name__ = ["flambe", "platform", "Tickable"];
    uc.prototype = {
        __class__: uc
    };
    var Ca = function(a, b) {
        this._firstDraw = !1;
        this._canvasCtx = a.getContext("2d", {
            alpha: b
        })
    };
    e["flambe.platform.html.CanvasGraphics"] = Ca;
    Ca.__name__ = ["flambe", "platform", "html", "CanvasGraphics"];
    Ca.__interfaces__ = [Rb];
    Ca.prototype = {
        save: function() {
            this._canvasCtx.save()
        },
        transform: function(a, b, c, d, f, h) {
            this._canvasCtx.transform(a, b, c, d, f, h)
        },
        restore: function() {
            this._canvasCtx.restore()
        },
        drawTexture: function(a, b, c) {
            this.drawSubTexture(a, b, c, 0, 0, a.get_width(), a.get_height())
        },
        drawSubTexture: function(a, b, c, d, f, h, e) {
            this._firstDraw ? (this._firstDraw = !1, this._canvasCtx.globalCompositeOperation = "copy", this.drawSubTexture(a, b, c, d, f, h, e), this._canvasCtx.globalCompositeOperation = "source-over") : this._canvasCtx.drawImage(a.root.image, a.rootX + d | 0, a.rootY + f | 0, h | 0, e | 0, b | 0, c | 0, h |
                0, e | 0)
        },
        fillRect: function(a, b, c, d, f) {
            if (this._firstDraw) this._firstDraw = !1, this._canvasCtx.globalCompositeOperation = "copy", this.fillRect(a, b, c, d, f), this._canvasCtx.globalCompositeOperation = "source-over";
            else {
                for (a = (16777215 & a).toString(16); 6 > a.length;) a = "0" + s.string(a);
                this._canvasCtx.fillStyle = "#" + s.string(a);
                this._canvasCtx.fillRect(b | 0, c | 0, d | 0, f | 0)
            }
        },
        multiplyAlpha: function(a) {
            this._canvasCtx.globalAlpha *= a
        },
        setBlendMode: function(a) {
            var b;
            switch (a[1]) {
                case 0:
                    b = "source-over";
                    break;
                case 1:
                    b = "lighter";
                    break;
                case 2:
                    b = "multiply";
                    break;
                case 3:
                    b = "screen";
                    break;
                case 4:
                    b = "destination-in";
                    break;
                case 5:
                    b = "copy"
            }
            this._canvasCtx.globalCompositeOperation = b
        },
        applyScissor: function(a, b, c, d) {
            this._canvasCtx.beginPath();
            this._canvasCtx.rect(a | 0, b | 0, c | 0, d | 0);
            this._canvasCtx.clip()
        },
        willRender: function() {
            this._firstDraw = !0
        },
        didRender: function() {},
        onResize: function() {},
        __class__: Ca
    };
    var lb = function(a) {
        this.graphics = new Ca(a, !1);
        this._hasGPU = new Z(!0)
    };
    e["flambe.platform.html.CanvasRenderer"] = lb;
    lb.__name__ = ["flambe",
        "platform", "html", "CanvasRenderer"
    ];
    lb.__interfaces__ = [Sb];
    lb.prototype = {
        get_type: function() {
            return ra.Canvas
        },
        createTextureFromImage: function(a) {
            a = new sb(lb.CANVAS_TEXTURES ? C.createCanvas(a) : a);
            return a.createTexture(a.width, a.height)
        },
        createTexture: function(a, b) {
            return (new sb(C.createEmptyCanvas(a, b))).createTexture(a, b)
        },
        getCompressedTextureFormats: function() {
            return []
        },
        createCompressedTexture: function() {
            return null
        },
        willRender: function() {
            this.graphics.willRender()
        },
        didRender: function() {
            this.graphics.didRender()
        },
        __class__: lb
    };
    var vc = function(a, b, c) {
        Ba.call(this, a, b, c)
    };
    e["flambe.platform.html.CanvasTexture"] = vc;
    vc.__name__ = ["flambe", "platform", "html", "CanvasTexture"];
    vc.__super__ = Ba;
    vc.prototype = t(Ba.prototype, {
        __class__: vc
    });
    var sb = function(a) {
        this._graphics = null;
        this.updateCount = 0;
        this._disposed = !1;
        this.image = a;
        this.width = a.width;
        this.height = a.height
    };
    e["flambe.platform.html.CanvasTextureRoot"] = sb;
    sb.__name__ = ["flambe", "platform", "html", "CanvasTextureRoot"];
    sb.__interfaces__ = [tc];
    sb.__super__ = $;
    sb.prototype =
        t($.prototype, {
            createTexture: function(a, b) {
                return new vc(this, a, b)
            },
            getGraphics: function() {
                null == this._graphics && (this.getContext2d(), this._graphics = new wc(this));
                return this._graphics
            },
            getContext2d: function() {
                E.__instanceof(this.image, HTMLCanvasElement) || (this.image = C.createCanvas(this.image));
                return this.image.getContext("2d", null)
            },
            onDisposed: function() {
                this._graphics = this.image = null
            },
            __class__: sb
        });
    var wc = function(a) {
        Ca.call(this, a.image, !0);
        this._renderTarget = a
    };
    e["flambe.platform.html._CanvasTextureRoot.InternalGraphics"] =
        wc;
    wc.__name__ = ["flambe", "platform", "html", "_CanvasTextureRoot", "InternalGraphics"];
    wc.__super__ = Ca;
    wc.prototype = t(Ca.prototype, {
        drawTexture: function(a, b, c) {
            Ca.prototype.drawTexture.call(this, a, b, c);
            ++this._renderTarget.updateCount
        },
        drawSubTexture: function(a, b, c, d, f, h, e) {
            Ca.prototype.drawSubTexture.call(this, a, b, c, d, f, h, e);
            ++this._renderTarget.updateCount
        },
        fillRect: function(a, b, c, d, f) {
            Ca.prototype.fillRect.call(this, a, b, c, d, f);
            ++this._renderTarget.updateCount
        },
        __class__: wc
    });
    var I = function(a, b) {
        bb.call(this,
            a, b)
    };
    e["flambe.platform.html.HtmlAssetPackLoader"] = I;
    I.__name__ = ["flambe", "platform", "html", "HtmlAssetPackLoader"];
    I.detectImageFormats = function(a) {
        var b = [n.PNG, n.JPG, n.GIF],
            c = 2,
            d;
        d = window.document.createElement("img");
        d.onload = d.onerror = function() {
            1 == d.width && b.unshift(n.WEBP);
            --c;
            0 == c && a(b)
        };
        d.src = "data:image/webp;base64,UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==";
        var f;
        f = window.document.createElement("img");
        f.onload = f.onerror = function() {
            1 == f.width && b.unshift(n.JXR);
            --c;
            0 == c && a(b)
        };
        f.src =
            "data:image/vnd.ms-photo;base64,SUm8AQgAAAAFAAG8AQAQAAAASgAAAIC8BAABAAAAAQAAAIG8BAABAAAAAQAAAMC8BAABAAAAWgAAAMG8BAABAAAAHwAAAAAAAAAkw91vA07+S7GFPXd2jckNV01QSE9UTwAZAYBxAAAAABP/gAAEb/8AAQAAAQAAAA=="
    };
    I.detectAudioFormats = function() {
        var a;
        a = window.document.createElement("audio");
        if (null == a || null == z(a, a.canPlayType)) return [];
        var b = new X("\\b(iPhone|iPod|iPad|Android|Windows Phone)\\b", ""),
            c = window.navigator.userAgent;
        if (!J.get_supported() && b.match(c)) return [];
        for (var b = [{
                    format: n.M4A,
                    mimeType: "audio/mp4; codecs=mp4a"
                },
                {
                    format: n.MP3,
                    mimeType: "audio/mpeg"
                }, {
                    format: n.OPUS,
                    mimeType: "audio/ogg; codecs=opus"
                }, {
                    format: n.OGG,
                    mimeType: "audio/ogg; codecs=vorbis"
                }, {
                    format: n.WAV,
                    mimeType: "audio/wav"
                }
            ], c = [], d = 0; d < b.length;) {
            var f = b[d];
            ++d;
            var h = "";
            try {
                h = a.canPlayType(f.mimeType)
            } catch (e) {
                e instanceof m && (e = e.val)
            }
            "" != h && c.push(f.format)
        }
        return c
    };
    I.supportsBlob = function() {
        if (I._detectBlobSupport) {
            I._detectBlobSupport = !1;
            if ((new X("\\bSilk\\b", "")).match(window.navigator.userAgent) || null == window.Blob) return !1;
            var a = new XMLHttpRequest;
            a.open("GET", ".", !0);
            if ("" != a.responseType) return !1;
            a.responseType = "blob";
            if ("blob" != a.responseType) return !1;
            I._URL = C.loadExtension("URL").value
        }
        return null != I._URL && null != I._URL.createObjectURL
    };
    I.__super__ = bb;
    I.prototype = t(bb.prototype, {
        loadEntry: function(a, b) {
            var c = this;
            switch (b.format[1]) {
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                    var d;
                    d = window.document.createElement("img");
                    var f = new Qb;
                    f.addDisposingListener(d, "load", function() {
                        I.supportsBlob() && I._URL.revokeObjectURL(d.src);
                        var a = c._platform.getRenderer().createTextureFromImage(d);
                        null != a ? c.handleLoad(b, a) : c.handleTextureError(b)
                    });
                    f.addDisposingListener(d, "error", function() {
                        c.handleError(b, "Failed to load image")
                    });
                    I.supportsBlob() ? this.download(a, b, "blob", function(a) {
                        d.src = I._URL.createObjectURL(a)
                    }) : d.src = a;
                    break;
                case 5:
                case 6:
                case 7:
                    this.download(a, b, "arraybuffer", function() {
                        var a = c._platform.getRenderer().createCompressedTexture(b.format, null);
                        null != a ? c.handleLoad(b, a) : c.handleTextureError(b)
                    });
                    break;
                case 8:
                case 9:
                case 10:
                case 11:
                case 12:
                    if (J.get_supported()) this.download(a,
                        b, "arraybuffer",
                        function(a) {
                            J.ctx.decodeAudioData(a, function(a) {
                                c.handleLoad(b, new J(a))
                            }, function() {
                                c.handleLoad(b, qa.getInstance())
                            })
                        });
                    else {
                        var h;
                        h = window.document.createElement("audio");
                        h.preload = "auto";
                        var e = ++I._mediaRefCount;
                        null == I._mediaElements && (I._mediaElements = new Ia);
                        I._mediaElements.h[e] = h;
                        f = new Qb;
                        f.addDisposingListener(h, "canplaythrough", function() {
                            I._mediaElements.remove(e);
                            c.handleLoad(b, new Tb(h))
                        });
                        f.addDisposingListener(h, "error", function() {
                            I._mediaElements.remove(e);
                            var a = h.error.code;
                            3 == a || 4 == a ? c.handleLoad(b, qa.getInstance()) : c.handleError(b, "Failed to load audio: " + h.error.code)
                        });
                        f.addListener(h, "progress", function() {
                            if (0 < h.buffered.length && 0 < h.duration) {
                                var a = h.buffered.end(0) / h.duration;
                                c.handleProgress(b, a * b.bytes | 0)
                            }
                        });
                        h.src = a;
                        h.load()
                    }
                    break;
                case 13:
                    this.download(a, b, "text", function(a) {
                        c.handleLoad(b, new Pb(a))
                    })
            }
        },
        getAssetFormats: function(a) {
            var b = this;
            null == I._supportedFormats && (I._supportedFormats = new oc, I.detectImageFormats(function(a) {
                I._supportedFormats.set_result(b._platform.getRenderer().getCompressedTextureFormats().concat(a).concat(I.detectAudioFormats()).concat([n.Data]))
            }));
            I._supportedFormats.get(a)
        },
        download: function(a, b, c, d) {
            var f = this,
                h = null,
                e = null,
                g = 0,
                j = !1,
                k = function() {
                    j && (j = !1, window.clearInterval(g))
                },
                m = 3,
                l = function() {
                    --m;
                    return 0 <= m ? (e(), !0) : !1
                },
                e = function() {
                    k();
                    null != h && h.abort();
                    h = new XMLHttpRequest;
                    h.open("GET", a, !0);
                    h.responseType = c;
                    var e = 0;
                    h.onprogress = function(a) {
                        j || (j = !0, g = window.setInterval(function() {
                            4 != h.readyState && 5E3 < Date.now() - e && !l() && (k(), f.handleError(b, "Download stalled"))
                        }, 1E3));
                        e = Date.now();
                        f.handleProgress(b, a.loaded)
                    };
                    h.onerror = function() {
                        if (0 !=
                            h.status || !l()) k(), f.handleError(b, "HTTP error " + h.status)
                    };
                    h.onload = function() {
                        var a = h.response;
                        null == a && (a = h.responseText);
                        k();
                        d(a)
                    };
                    h.send()
                };
            e()
        },
        __class__: I
    });
    var ed = function() {};
    e["flambe.subsystem.ExternalSystem"] = ed;
    ed.__name__ = ["flambe", "subsystem", "ExternalSystem"];
    ed.prototype = {
        __class__: ed
    };
    var hc = function() {};
    e["flambe.platform.html.HtmlExternal"] = hc;
    hc.__name__ = ["flambe", "platform", "html", "HtmlExternal"];
    hc.__interfaces__ = [ed];
    hc.prototype = {
        get_supported: function() {
            return !0
        },
        call: function(a,
            b) {
            null == b && (b = []);
            for (var c = window, d = c, f = 0, h = a.split("."); f < h.length;) {
                var e = h[f];
                ++f;
                c = d;
                d = ga.field(c, e)
            }
            return ga.callMethod(c, d, b)
        },
        __class__: hc
    };
    var ec = function(a, b) {
        ha.call(this, a);
        this._canvas = b
    };
    e["flambe.platform.html.HtmlMouse"] = ec;
    ec.__name__ = ["flambe", "platform", "html", "HtmlMouse"];
    ec.__super__ = ha;
    ec.prototype = t(ha.prototype, {
        set_cursor: function(a) {
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
            return ha.prototype.set_cursor.call(this,
                a)
        },
        __class__: ec
    });
    var Tb = function(a) {
        this._disposed = !1;
        this.audioElement = a
    };
    e["flambe.platform.html.HtmlSound"] = Tb;
    Tb.__name__ = ["flambe", "platform", "html", "HtmlSound"];
    Tb.__interfaces__ = [qb];
    Tb.__super__ = $;
    Tb.prototype = t($.prototype, {
        play: function(a) {
            null == a && (a = 1);
            return new Ub(this, a, !1)
        },
        loop: function(a) {
            null == a && (a = 1);
            return new Ub(this, a, !0)
        },
        onDisposed: function() {
            this.audioElement = null
        },
        __class__: Tb
    });
    var Ub = function(a, b, c) {
        var d = this;
        this._sound = a;
        this._tickableAdded = !1;
        this._clonedElement =
            window.document.createElement("audio");
        this._clonedElement.loop = c;
        this._clonedElement.src = a.audioElement.src;
        this.volume = new P(b, function() {
            d.updateVolume()
        });
        this.updateVolume();
        this._complete = new Z(!1);
        this.playAudio();
        k.hidden._value && this.set_paused(!0)
    };
    e["flambe.platform.html._HtmlSound.HtmlPlayback"] = Ub;
    Ub.__name__ = ["flambe", "platform", "html", "_HtmlSound", "HtmlPlayback"];
    Ub.__interfaces__ = [uc, rb];
    Ub.prototype = {
        set_paused: function(a) {
            this._clonedElement.paused != a && (a ? this._clonedElement.pause() :
                this.playAudio());
            return a
        },
        get_complete: function() {
            return this._complete
        },
        update: function(a) {
            this.volume.update(a);
            this._complete.set__(this._clonedElement.ended);
            return this._complete._value || this._clonedElement.paused ? (this._tickableAdded = !1, this._volumeBinding.dispose(), this._hideBinding.dispose(), !0) : !1
        },
        dispose: function() {
            this.set_paused(!0);
            this._complete.set__(!0)
        },
        playAudio: function() {
            var a = this;
            this._clonedElement.play();
            this._tickableAdded || (Oa.instance.mainLoop.addTickable(this), this._tickableAdded = !0, this._volumeBinding = k.volume.get_changed().connect(function() {
                a.updateVolume()
            }), this._hideBinding = k.hidden.get_changed().connect(function(b) {
                b ? (a._wasPaused = a._clonedElement.paused, a.set_paused(!0)) : a.set_paused(a._wasPaused)
            }))
        },
        updateVolume: function() {
            this._clonedElement.volume = k.volume._value * this.volume._value
        },
        __class__: Ub
    };
    var fd = function() {};
    e["flambe.subsystem.StageSystem"] = fd;
    fd.__name__ = ["flambe", "subsystem", "StageSystem"];
    fd.prototype = {
        __class__: fd
    };
    var ib = function(a) {
        var b = this;
        this._canvas =
            a;
        this.resize = new S;
        this.scaleFactor = ib.computeScaleFactor();
        1 != this.scaleFactor && (C.setVendorStyle(this._canvas, "transform-origin", "top left"), C.setVendorStyle(this._canvas, "transform", "scale(" + 1 / this.scaleFactor + ")"));
        C.SHOULD_HIDE_MOBILE_BROWSER && (window.addEventListener("orientationchange", function() {
            C.callLater(z(b, b.hideMobileBrowser), 200)
        }, !1), this.hideMobileBrowser());
        window.addEventListener("resize", z(this, this.onWindowResize), !1);
        this.onWindowResize(null);
        this.orientation = new Z(null);
        null !=
            window.orientation && (window.addEventListener("orientationchange", z(this, this.onOrientationChange), !1), this.onOrientationChange(null));
        this.fullscreen = new Z(!1);
        C.addVendorListener(window.document, "fullscreenchange", function() {
            b.updateFullscreen()
        }, !1);
        this.updateFullscreen()
    };
    e["flambe.platform.html.HtmlStage"] = ib;
    ib.__name__ = ["flambe", "platform", "html", "HtmlStage"];
    ib.__interfaces__ = [fd];
    ib.computeScaleFactor = function() {
        var a = window.devicePixelRatio;
        null == a && (a = 1);
        var b = window.document.createElement("canvas").getContext("2d",
                null),
            b = C.loadExtension("backingStorePixelRatio", b).value;
        null == b && (b = 1);
        a /= b;
        b = window.screen.height;
        return 1136 < a * window.screen.width || 1136 < a * b ? 1 : a
    };
    ib.prototype = {
        get_width: function() {
            return this._canvas.width
        },
        get_height: function() {
            return this._canvas.height
        },
        onWindowResize: function() {
            var a = this._canvas.parentElement.getBoundingClientRect();
            this.resizeCanvas(a.width, a.height)
        },
        resizeCanvas: function(a, b) {
            var c = this.scaleFactor * a,
                d = this.scaleFactor * b;
            if (this._canvas.width == c && this._canvas.height ==
                d) return !1;
            this._canvas.width = c | 0;
            this._canvas.height = d | 0;
            this.resize.emit();
            return !0
        },
        hideMobileBrowser: function() {
            var a = this,
                b = window.document.documentElement.style;
            b.height = window.innerHeight + 100 + "px";
            b.width = window.innerWidth + "px";
            b.overflow = "visible";
            C.callLater(function() {
                C.hideMobileBrowser();
                C.callLater(function() {
                    b.height = window.innerHeight + "px";
                    a.onWindowResize(null)
                }, 100)
            })
        },
        onOrientationChange: function() {
            this.orientation.set__(C.orientation(window.orientation))
        },
        updateFullscreen: function() {
            this.fullscreen.set__(!0 ==
                C.loadFirstExtension(["fullscreen", "fullScreen", "isFullScreen"], window.document).value)
        },
        __class__: ib
    };
    var C = function() {};
    e["flambe.platform.html.HtmlUtil"] = C;
    C.__name__ = ["flambe", "platform", "html", "HtmlUtil"];
    C.callLater = function(a, b) {
        null == b && (b = 0);
        window.setTimeout(a, b)
    };
    C.hideMobileBrowser = function() {
        window.scrollTo(1, 0)
    };
    C.loadExtension = function(a, b) {
        null == b && (b = window);
        var c = ga.field(b, a);
        if (null != c) return {
            prefix: "",
            field: a,
            value: c
        };
        for (var c = a.charAt(0).toUpperCase() + w.substr(a, 1, null), d = 0,
                f = C.VENDOR_PREFIXES; d < f.length;) {
            var h = f[d];
            ++d;
            var e = h + c,
                g = ga.field(b, e);
            if (null != g) return {
                prefix: h,
                field: e,
                value: g
            }
        }
        return {
            prefix: null,
            field: null,
            value: null
        }
    };
    C.loadFirstExtension = function(a, b) {
        for (var c = 0; c < a.length;) {
            var d = a[c];
            ++c;
            d = C.loadExtension(d, b);
            if (null != d.field) return d
        }
        return {
            prefix: null,
            field: null,
            value: null
        }
    };
    C.polyfill = function(a, b) {
        null == b && (b = window);
        var c = C.loadExtension(a, b).value;
        if (null == c) return !1;
        b[a] = c;
        return !0
    };
    C.setVendorStyle = function(a, b, c) {
        for (var a = a.style, d = 0, f = C.VENDOR_PREFIXES; d <
            f.length;) {
            var h = f[d];
            ++d;
            a.setProperty("-" + h + "-" + b, c)
        }
        a.setProperty(b, c)
    };
    C.addVendorListener = function(a, b, c, d) {
        for (var f = 0, h = C.VENDOR_PREFIXES; f < h.length;) {
            var e = h[f];
            ++f;
            a.addEventListener(e + b, c, d)
        }
        a.addEventListener(b, c, d)
    };
    C.orientation = function(a) {
        switch (a) {
            case -90:
            case 90:
                return Pa.Landscape;
            default:
                return Pa.Portrait
        }
    };
    C.createEmptyCanvas = function(a, b) {
        var c;
        c = window.document.createElement("canvas");
        c.width = a;
        c.height = b;
        return c
    };
    C.createCanvas = function(a) {
        var b = C.createEmptyCanvas(a.width,
                a.height),
            c = b.getContext("2d", null);
        c.save();
        c.globalCompositeOperation = "copy";
        c.drawImage(a, 0, 0);
        c.restore();
        return b
    };
    C.detectSlowDriver = function(a) {
        if (0 <= window.navigator.platform.indexOf("Win") && null != window.chrome) {
            for (var b = 0, a = a.getSupportedExtensions(); b < a.length;) {
                var c = a[b];
                ++b;
                if (0 <= c.indexOf("WEBGL_compressed_texture")) return !1
            }
            return !0
        }
        return !1
    };
    C.fixAndroidMath = function() {
        if (0 <= window.navigator.userAgent.indexOf("Linux; U; Android 4")) {
            var a = Math.sin,
                b = Math.cos;
            Math.sin = function(b) {
                return 0 ==
                    b ? 0 : a(b)
            };
            Math.cos = function(a) {
                return 0 == a ? 1 : b(a)
            }
        }
    };
    var J = function(a) {
        this._disposed = !1;
        this.buffer = a
    };
    e["flambe.platform.html.WebAudioSound"] = J;
    J.__name__ = ["flambe", "platform", "html", "WebAudioSound"];
    J.__interfaces__ = [qb];
    J.get_supported = function() {
        if (J._detectSupport) {
            J._detectSupport = !1;
            var a = C.loadExtension("AudioContext").value;
            null != a && (J.ctx = new a, J.gain = J.createGain(), J.gain.connect(J.ctx.destination), k.volume.watch(function(a) {
                J.gain.gain.value = a
            }))
        }
        return null != J.ctx
    };
    J.createGain = function() {
        return null !=
            J.ctx.createGain ? J.ctx.createGain() : J.ctx.createGainNode()
    };
    J.start = function(a, b) {
        null != a.start ? a.start(b) : a.noteOn(b)
    };
    J.__super__ = $;
    J.prototype = t($.prototype, {
        play: function(a) {
            null == a && (a = 1);
            return new Vb(this, a, !1)
        },
        loop: function(a) {
            null == a && (a = 1);
            return new Vb(this, a, !0)
        },
        get_duration: function() {
            return this.buffer.duration
        },
        onDisposed: function() {
            this.buffer = null
        },
        __class__: J
    });
    var Vb = function(a, b, c) {
        var d = this;
        this._sound = a;
        this._head = J.gain;
        this._complete = new Z(!1);
        this._sourceNode = J.ctx.createBufferSource();
        this._sourceNode.buffer = a.buffer;
        this._sourceNode.loop = c;
        this._sourceNode.onended = function() {
            d._complete.set__(!0)
        };
        J.start(this._sourceNode, 0);
        this.playAudio();
        this.volume = new P(b, function(a) {
            d.setVolume(a)
        });
        1 != b && this.setVolume(b);
        k.hidden._value && this.set_paused(!0)
    };
    e["flambe.platform.html._WebAudioSound.WebAudioPlayback"] = Vb;
    Vb.__name__ = ["flambe", "platform", "html", "_WebAudioSound", "WebAudioPlayback"];
    Vb.__interfaces__ = [uc, rb];
    Vb.prototype = {
        set_paused: function(a) {
            a != 0 <= this._pausedAt && (a ? (this._sourceNode.disconnect(),
                this._pausedAt = this.get_position()) : this.playAudio());
            return a
        },
        get_complete: function() {
            return this._complete
        },
        get_position: function() {
            return this._complete._value ? this._sound.get_duration() : 0 <= this._pausedAt ? this._pausedAt : (J.ctx.currentTime - this._startedAt) % this._sound.get_duration()
        },
        update: function(a) {
            this.volume.update(a);
            3 == this._sourceNode.playbackState && this._complete.set__(!0);
            return this._complete._value || 0 <= this._pausedAt ? (this._tickableAdded = !1, this._hideBinding.dispose(), !0) : !1
        },
        dispose: function() {
            this.set_paused(!0);
            this._complete.set__(!0)
        },
        setVolume: function(a) {
            null == this._gainNode && (this._gainNode = J.createGain(), this.insertNode(this._gainNode));
            this._gainNode.gain.value = a
        },
        insertNode: function(a) {
            0 <= this._pausedAt || (this._sourceNode.disconnect(), this._sourceNode.connect(a));
            a.connect(this._head);
            this._head = a
        },
        playAudio: function() {
            var a = this;
            this._sourceNode.connect(this._head);
            this._startedAt = J.ctx.currentTime;
            this._pausedAt = -1;
            this._tickableAdded || (Oa.instance.mainLoop.addTickable(this), this._tickableAdded = !0, this._hideBinding = k.hidden.get_changed().connect(function(b) {
                b ? (a._wasPaused = 0 <= a._pausedAt, a.set_paused(!0)) : a.set_paused(a._wasPaused)
            }))
        },
        __class__: Vb
    };
    var gd = function(a) {
        this._quads = this._maxQuads = this._dataOffset = this._backbufferWidth = this._backbufferHeight = 0;
        this._pendingSetScissor = !1;
        this._lastBlendMode = this._lastRenderTarget = this._lastShader = this._lastTexture = this._lastScissor = this._currentBlendMode = this._currentShader = this._currentTexture = this._currentRenderTarget = null;
        this._gl = a;
        a.clearColor(0,
            0, 0, 0);
        a.enable(3042);
        a.pixelStorei(37441, 1);
        this._vertexBuffer = a.createBuffer();
        a.bindBuffer(34962, this._vertexBuffer);
        this._quadIndexBuffer = a.createBuffer();
        a.bindBuffer(34963, this._quadIndexBuffer);
        this._drawTextureShader = new xc(a);
        this._drawPatternShader = new yc(a);
        this._fillRectShader = new zc(a);
        this.resize(16)
    };
    e["flambe.platform.html.WebGLBatcher"] = gd;
    gd.__name__ = ["flambe", "platform", "html", "WebGLBatcher"];
    gd.prototype = {
        resizeBackbuffer: function(a, b) {
            this._gl.viewport(0, 0, a, b);
            this._backbufferWidth =
                a;
            this._backbufferHeight = b
        },
        willRender: function() {},
        didRender: function() {
            this.flush()
        },
        bindTexture: function(a) {
            this.flush();
            this._currentTexture = this._lastTexture = null;
            this._gl.bindTexture(3553, a)
        },
        deleteTexture: function(a) {
            null != this._lastTexture && this._lastTexture.root == a && (this.flush(), this._currentTexture = this._lastTexture = null);
            this._gl.deleteTexture(a.nativeTexture)
        },
        bindFramebuffer: function(a) {
            a != this._lastRenderTarget && (this.flush(), this.bindRenderTarget(a))
        },
        deleteFramebuffer: function(a) {
            a ==
                this._lastRenderTarget && (this.flush(), this._currentRenderTarget = this._lastRenderTarget = null);
            this._gl.deleteFramebuffer(a.framebuffer)
        },
        prepareDrawTexture: function(a, b, c, d) {
            d != this._lastTexture && (this.flush(), this._lastTexture = d);
            return this.prepareQuad(5, a, b, c, this._drawTextureShader)
        },
        prepareFillRect: function(a, b, c) {
            return this.prepareQuad(6, a, b, c, this._fillRectShader)
        },
        prepareQuad: function(a, b, c, d, f) {
            b != this._lastRenderTarget && (this.flush(), this._lastRenderTarget = b);
            c != this._lastBlendMode && (this.flush(),
                this._lastBlendMode = c);
            f != this._lastShader && (this.flush(), this._lastShader = f);
            if (null != d || null != this._lastScissor)
                if (null == d || null == this._lastScissor || !this._lastScissor.equals(d)) this.flush(), this._lastScissor = null != d ? d.clone(this._lastScissor) : null, this._pendingSetScissor = !0;
            this._quads >= this._maxQuads && this.resize(2 * this._maxQuads);
            ++this._quads;
            b = this._dataOffset;
            this._dataOffset += 4 * a;
            return b
        },
        flush: function() {
            if (!(1 > this._quads)) {
                this._lastRenderTarget != this._currentRenderTarget && this.bindRenderTarget(this._lastRenderTarget);
                if (this._lastBlendMode != this._currentBlendMode) {
                    switch (this._lastBlendMode[1]) {
                        case 0:
                            this._gl.blendFunc(1, 771);
                            break;
                        case 1:
                            this._gl.blendFunc(1, 1);
                            break;
                        case 2:
                            this._gl.blendFunc(774, 771);
                            break;
                        case 3:
                            this._gl.blendFunc(1, 769);
                            break;
                        case 4:
                            this._gl.blendFunc(0, 770);
                            break;
                        case 5:
                            this._gl.blendFunc(1, 0)
                    }
                    this._currentBlendMode = this._lastBlendMode
                }
                this._pendingSetScissor && (null != this._lastScissor ? (this._gl.enable(3089), this._gl.scissor(this._lastScissor.x | 0, this._lastScissor.y | 0, this._lastScissor.width |
                    0, this._lastScissor.height | 0)) : this._gl.disable(3089), this._pendingSetScissor = !1);
                this._lastTexture != this._currentTexture && (this._gl.bindTexture(3553, this._lastTexture.root.nativeTexture), this._currentTexture = this._lastTexture);
                this._lastShader != this._currentShader && (this._lastShader.useProgram(), this._lastShader.prepare(), this._currentShader = this._lastShader);
                if (this._lastShader == this._drawPatternShader) {
                    var a = this._lastTexture,
                        b = a.root;
                    this._drawPatternShader.setRegion(a.rootX / b.width, a.rootY / b.height,
                        a._width / b.width, a._height / b.height)
                }
                this._gl.bufferData(34962, this.data.subarray(0, this._dataOffset), 35040);
                this._gl.drawElements(4, 6 * this._quads, 5123, 0);
                this._dataOffset = this._quads = 0
            }
        },
        resize: function(a) {
            this.flush();
            if (!(1024 < a)) {
                this._maxQuads = a;
                this.data = new Float32Array(24 * a);
                this._gl.bufferData(34962, 4 * this.data.length, 35040);
                for (var b = new Uint16Array(6 * a), c = 0; c < a;) {
                    var d = c++;
                    b[6 * d] = 4 * d;
                    b[6 * d + 1] = 4 * d + 1;
                    b[6 * d + 2] = 4 * d + 2;
                    b[6 * d + 3] = 4 * d + 2;
                    b[6 * d + 4] = 4 * d + 3;
                    b[6 * d + 5] = 4 * d
                }
                this._gl.bufferData(34963, b, 35044)
            }
        },
        bindRenderTarget: function(a) {
            null != a ? (this._gl.bindFramebuffer(36160, a.framebuffer), this._gl.viewport(0, 0, a.width, a.height)) : (this._gl.bindFramebuffer(36160, null), this._gl.viewport(0, 0, this._backbufferWidth, this._backbufferHeight));
            this._lastRenderTarget = this._currentRenderTarget = a
        },
        __class__: gd
    };
    var sa = function(a, b) {
        this._inverseProjection = this._stateList = null;
        null == sa._scratchQuadArray && (sa._scratchQuadArray = new Float32Array(8));
        this._batcher = a;
        this._renderTarget = b
    };
    e["flambe.platform.html.WebGLGraphics"] =
        sa;
    sa.__name__ = ["flambe", "platform", "html", "WebGLGraphics"];
    sa.__interfaces__ = [Rb];
    sa.prototype = {
        save: function() {
            var a = this._stateList,
                b = this._stateList.next;
            null == b && (b = new Ac, b.prev = a, a.next = b);
            a.matrix.clone(b.matrix);
            b.alpha = a.alpha;
            b.blendMode = a.blendMode;
            b.scissor = null != a.scissor ? a.scissor.clone(b.scissor) : null;
            this._stateList = b
        },
        transform: function(a, b, c, d, f, h) {
            var e = this._stateList;
            sa._scratchMatrix.set(a, b, c, d, f, h);
            pa.multiply(e.matrix, sa._scratchMatrix, e.matrix)
        },
        restore: function() {
            this._stateList =
                this._stateList.prev
        },
        drawTexture: function(a, b, c) {
            this.drawSubTexture(a, b, c, 0, 0, a.get_width(), a.get_height())
        },
        drawSubTexture: function(a, b, c, d, f, h, e) {
            var g = this._stateList,
                j = a.root,
                b = this.transformQuad(b, c, h, e),
                c = j.width,
                j = j.height,
                d = (a.rootX + d) / c,
                f = (a.rootY + f) / j,
                h = d + h / c,
                e = f + e / j,
                c = g.alpha,
                a = this._batcher.prepareDrawTexture(this._renderTarget, g.blendMode, g.scissor, a),
                g = this._batcher.data;
            g[a] = b[0];
            g[++a] = b[1];
            g[++a] = d;
            g[++a] = f;
            g[++a] = c;
            g[++a] = b[2];
            g[++a] = b[3];
            g[++a] = h;
            g[++a] = f;
            g[++a] = c;
            g[++a] = b[4];
            g[++a] = b[5];
            g[++a] = h;
            g[++a] = e;
            g[++a] = c;
            g[++a] = b[6];
            g[++a] = b[7];
            g[++a] = d;
            g[++a] = e;
            g[++a] = c
        },
        fillRect: function(a, b, c, d, f) {
            var h = this._stateList,
                b = this.transformQuad(b, c, d, f),
                c = (a & 16711680) / 16711680,
                d = (a & 65280) / 65280,
                a = (a & 255) / 255,
                f = h.alpha,
                h = this._batcher.prepareFillRect(this._renderTarget, h.blendMode, h.scissor),
                e = this._batcher.data;
            e[h] = b[0];
            e[++h] = b[1];
            e[++h] = c;
            e[++h] = d;
            e[++h] = a;
            e[++h] = f;
            e[++h] = b[2];
            e[++h] = b[3];
            e[++h] = c;
            e[++h] = d;
            e[++h] = a;
            e[++h] = f;
            e[++h] = b[4];
            e[++h] = b[5];
            e[++h] = c;
            e[++h] = d;
            e[++h] = a;
            e[++h] = f;
            e[++h] = b[6];
            e[++h] = b[7];
            e[++h] = c;
            e[++h] = d;
            e[++h] = a;
            e[++h] = f
        },
        multiplyAlpha: function(a) {
            this._stateList.alpha *= a
        },
        setBlendMode: function(a) {
            this._stateList.blendMode = a
        },
        applyScissor: function(a, b, c, d) {
            var f = this._stateList,
                h = sa._scratchQuadArray;
            h[0] = a;
            h[1] = b;
            h[2] = a + c;
            h[3] = b + d;
            f.matrix.transformArray(h, 4, h);
            this._inverseProjection.transformArray(h, 4, h);
            a = h[0];
            b = h[1];
            c = h[2] - a;
            d = h[3] - b;
            0 > c && (a += c, c = -c);
            0 > d && (b += d, d = -d);
            f.applyScissor(a, b, c, d)
        },
        willRender: function() {
            this._batcher.willRender()
        },
        didRender: function() {
            this._batcher.didRender()
        },
        onResize: function(a, b) {
            this._stateList = new Ac;
            var c;
            c = null != this._renderTarget ? -1 : 1;
            this._stateList.matrix.set(2 / a, 0, 0, -2 * c / b, -1, c);
            this._inverseProjection = new pa;
            this._inverseProjection.set(2 / a, 0, 0, 2 / b, -1, -1);
            this._inverseProjection.invert()
        },
        transformQuad: function(a, b, c, d) {
            var c = a + c,
                d = b + d,
                f = sa._scratchQuadArray;
            f[0] = a;
            f[1] = b;
            f[2] = c;
            f[3] = b;
            f[4] = c;
            f[5] = d;
            f[6] = a;
            f[7] = d;
            this._stateList.matrix.transformArray(f, 8, f);
            return f
        },
        __class__: sa
    };
    var Ac = function() {
        this.scissor =
            this.prev = this.next = null;
        this.matrix = new pa;
        this.alpha = 1;
        this.blendMode = Q.Normal
    };
    e["flambe.platform.html._WebGLGraphics.DrawingState"] = Ac;
    Ac.__name__ = ["flambe", "platform", "html", "_WebGLGraphics", "DrawingState"];
    Ac.prototype = {
        applyScissor: function(a, b, c, d) {
            if (null != this.scissor) var f = ea.max(this.scissor.x, a),
                h = ea.max(this.scissor.y, b),
                c = ea.min(this.scissor.x + this.scissor.width, a + c),
                d = ea.min(this.scissor.y + this.scissor.height, b + d),
                a = f,
                b = h,
                c = c - f,
                d = d - h;
            else this.scissor = new Wa;
            this.scissor.set(Math.round(a),
                Math.round(b), Math.round(c), Math.round(d))
        },
        __class__: Ac
    };
    var ic = function(a, b) {
        var c = this;
        this._hasGPU = new Z(!0);
        this.gl = b;
        b.canvas.addEventListener("webglcontextlost", function(a) {
            a.preventDefault();
            c._hasGPU.set__(!1)
        }, !1);
        b.canvas.addEventListener("webglcontextrestore", function() {
            c.init();
            c._hasGPU.set__(!0)
        }, !1);
        a.resize.connect(z(this, this.onResize));
        this.init()
    };
    e["flambe.platform.html.WebGLRenderer"] = ic;
    ic.__name__ = ["flambe", "platform", "html", "WebGLRenderer"];
    ic.__interfaces__ = [Sb];
    ic.prototype = {
        get_type: function() {
            return ra.WebGL
        },
        createTextureFromImage: function(a) {
            if (this.gl.isContextLost()) return null;
            var b = new Qa(this, a.width, a.height);
            b.uploadImageData(a);
            return b.createTexture(a.width, a.height)
        },
        createTexture: function(a, b) {
            if (this.gl.isContextLost()) return null;
            var c = new Qa(this, a, b);
            c.clear();
            return c.createTexture(a, b)
        },
        getCompressedTextureFormats: function() {
            return []
        },
        createCompressedTexture: function() {
            this.gl.isContextLost();
            return null
        },
        willRender: function() {
            this.graphics.willRender()
        },
        didRender: function() {
            this.graphics.didRender()
        },
        onResize: function() {
            var a = this.gl.canvas.width,
                b = this.gl.canvas.height;
            this.batcher.resizeBackbuffer(a, b);
            this.graphics.onResize(a, b)
        },
        init: function() {
            this.batcher = new gd(this.gl);
            this.graphics = new sa(this.batcher, null);
            this.onResize()
        },
        __class__: ic
    };
    var Bc = function(a, b, c) {
        Ba.call(this, a, b, c)
    };
    e["flambe.platform.html.WebGLTexture"] = Bc;
    Bc.__name__ = ["flambe", "platform", "html", "WebGLTexture"];
    Bc.__super__ = Ba;
    Bc.prototype = t(Ba.prototype, {
        __class__: Bc
    });
    var Qa = function(a, b, c) {
        this.framebuffer = this._graphics = null;
        this._disposed = !1;
        this._renderer = a;
        this.width = ea.max(2, dd.nextPowerOfTwo(b));
        this.height = ea.max(2, dd.nextPowerOfTwo(c));
        b = a.gl;
        this.nativeTexture = b.createTexture();
        a.batcher.bindTexture(this.nativeTexture);
        b.texParameteri(3553, 10242, 33071);
        b.texParameteri(3553, 10243, 33071);
        b.texParameteri(3553, 10240, 9729);
        b.texParameteri(3553, 10241, 9729)
    };
    e["flambe.platform.html.WebGLTextureRoot"] = Qa;
    Qa.__name__ = ["flambe", "platform", "html", "WebGLTextureRoot"];
    Qa.__interfaces__ = [tc];
    Qa.drawBorder = function(a, b, c) {
        var d = a.getContext("2d", null);
        d.drawImage(a, b - 1, 0, 1, c, b, 0, 1, c);
        d.drawImage(a, 0, c - 1, b, 1, 0, c, b, 1)
    };
    Qa.__super__ = $;
    Qa.prototype = t($.prototype, {
        createTexture: function(a, b) {
            return new Bc(this, a, b)
        },
        uploadImageData: function(a) {
            if (this.width != a.width || this.height != a.height) {
                var b = C.createEmptyCanvas(this.width, this.height);
                b.getContext("2d", null).drawImage(a, 0, 0);
                Qa.drawBorder(b, a.width, a.height);
                a = b
            }
            this._renderer.batcher.bindTexture(this.nativeTexture);
            this._renderer.gl.texImage2D(3553, 0, 6408, 6408, 5121, a)
        },
        clear: function() {
            this._renderer.batcher.bindTexture(this.nativeTexture);
            this._renderer.gl.texImage2D(3553, 0, 6408, this.width, this.height, 0, 6408, 5121, null)
        },
        getGraphics: function() {
            if (null == this._graphics) {
                this._graphics = new sa(this._renderer.batcher, this);
                this._graphics.onResize(this.width, this.height);
                var a = this._renderer.gl;
                this.framebuffer = a.createFramebuffer();
                this._renderer.batcher.bindFramebuffer(this);
                a.framebufferTexture2D(36160, 36064, 3553,
                    this.nativeTexture, 0)
            }
            return this._graphics
        },
        onDisposed: function() {
            var a = this._renderer.batcher;
            a.deleteTexture(this);
            null != this.framebuffer && a.deleteFramebuffer(this);
            this._graphics = this.framebuffer = this.nativeTexture = null
        },
        __class__: Qa
    });
    var ia = function(a, b, c) {
        c = "#ifdef GL_ES\nprecision mediump float;\n#endif\n" + c;
        this._gl = a;
        this._program = a.createProgram();
        a.attachShader(this._program, ia.createShader(a, 35633, b));
        a.attachShader(this._program, ia.createShader(a, 35632, c));
        a.linkProgram(this._program);
        a.useProgram(this._program)
    };
    e["flambe.platform.shader.ShaderGL"] = ia;
    ia.__name__ = ["flambe", "platform", "shader", "ShaderGL"];
    ia.createShader = function(a, b, c) {
        b = a.createShader(b);
        a.shaderSource(b, c);
        a.compileShader(b);
        return b
    };
    ia.prototype = {
        useProgram: function() {
            this._gl.useProgram(this._program)
        },
        prepare: function() {
            null
        },
        getAttribLocation: function(a) {
            return this._gl.getAttribLocation(this._program, a)
        },
        getUniformLocation: function(a) {
            return this._gl.getUniformLocation(this._program, a)
        },
        __class__: ia
    };
    var yc = function(a) {
        ia.call(this, a, "attribute highp vec2 a_pos;\nattribute mediump vec2 a_uv;\nattribute lowp float a_alpha;\nvarying mediump vec2 v_uv;\nvarying lowp float v_alpha;\nvoid main (void) {\nv_uv = a_uv;\nv_alpha = a_alpha;\ngl_Position = vec4(a_pos, 0, 1);\n}", "varying mediump vec2 v_uv;\nvarying lowp float v_alpha;\nuniform lowp sampler2D u_texture;\nuniform mediump vec4 u_region;\nvoid main (void) {\ngl_FragColor = texture2D(u_texture, u_region.xy + mod(v_uv, u_region.zw)) * v_alpha;\n}");
        this.a_pos = this.getAttribLocation("a_pos");
        this.a_uv = this.getAttribLocation("a_uv");
        this.a_alpha = this.getAttribLocation("a_alpha");
        this.u_texture = this.getUniformLocation("u_texture");
        this.u_region = this.getUniformLocation("u_region");
        this.setTexture(0)
    };
    e["flambe.platform.shader.DrawPatternGL"] = yc;
    yc.__name__ = ["flambe", "platform", "shader", "DrawPatternGL"];
    yc.__super__ = ia;
    yc.prototype = t(ia.prototype, {
        setTexture: function(a) {
            this._gl.uniform1i(this.u_texture, a)
        },
        setRegion: function(a, b, c, d) {
            this._gl.uniform4f(this.u_region,
                a, b, c, d)
        },
        prepare: function() {
            this._gl.enableVertexAttribArray(this.a_pos);
            this._gl.enableVertexAttribArray(this.a_uv);
            this._gl.enableVertexAttribArray(this.a_alpha);
            this._gl.vertexAttribPointer(this.a_pos, 2, 5126, !1, 20, 0);
            this._gl.vertexAttribPointer(this.a_uv, 2, 5126, !1, 20, 8);
            this._gl.vertexAttribPointer(this.a_alpha, 1, 5126, !1, 20, 16)
        },
        __class__: yc
    });
    var xc = function(a) {
        ia.call(this, a, "attribute highp vec2 a_pos;\nattribute mediump vec2 a_uv;\nattribute lowp float a_alpha;\nvarying mediump vec2 v_uv;\nvarying lowp float v_alpha;\nvoid main (void) {\nv_uv = a_uv;\nv_alpha = a_alpha;\ngl_Position = vec4(a_pos, 0, 1);\n}",
            "varying mediump vec2 v_uv;\nvarying lowp float v_alpha;\nuniform lowp sampler2D u_texture;\nvoid main (void) {\ngl_FragColor = texture2D(u_texture, v_uv) * v_alpha;\n}");
        this.a_pos = this.getAttribLocation("a_pos");
        this.a_uv = this.getAttribLocation("a_uv");
        this.a_alpha = this.getAttribLocation("a_alpha");
        this.u_texture = this.getUniformLocation("u_texture");
        this.setTexture(0)
    };
    e["flambe.platform.shader.DrawTextureGL"] = xc;
    xc.__name__ = ["flambe", "platform", "shader", "DrawTextureGL"];
    xc.__super__ = ia;
    xc.prototype =
        t(ia.prototype, {
            setTexture: function(a) {
                this._gl.uniform1i(this.u_texture, a)
            },
            prepare: function() {
                this._gl.enableVertexAttribArray(this.a_pos);
                this._gl.enableVertexAttribArray(this.a_uv);
                this._gl.enableVertexAttribArray(this.a_alpha);
                this._gl.vertexAttribPointer(this.a_pos, 2, 5126, !1, 20, 0);
                this._gl.vertexAttribPointer(this.a_uv, 2, 5126, !1, 20, 8);
                this._gl.vertexAttribPointer(this.a_alpha, 1, 5126, !1, 20, 16)
            },
            __class__: xc
        });
    var zc = function(a) {
        ia.call(this, a, "attribute highp vec2 a_pos;\nattribute lowp vec3 a_rgb;\nattribute lowp float a_alpha;\nvarying lowp vec4 v_color;\nvoid main (void) {\nv_color = vec4(a_rgb*a_alpha, a_alpha);\ngl_Position = vec4(a_pos, 0, 1);\n}",
            "varying lowp vec4 v_color;\nvoid main (void) {\ngl_FragColor = v_color;\n}");
        this.a_pos = this.getAttribLocation("a_pos");
        this.a_rgb = this.getAttribLocation("a_rgb");
        this.a_alpha = this.getAttribLocation("a_alpha")
    };
    e["flambe.platform.shader.FillRectGL"] = zc;
    zc.__name__ = ["flambe", "platform", "shader", "FillRectGL"];
    zc.__super__ = ia;
    zc.prototype = t(ia.prototype, {
        prepare: function() {
            this._gl.enableVertexAttribArray(this.a_pos);
            this._gl.enableVertexAttribArray(this.a_rgb);
            this._gl.enableVertexAttribArray(this.a_alpha);
            this._gl.vertexAttribPointer(this.a_pos, 2, 5126, !1, 24, 0);
            this._gl.vertexAttribPointer(this.a_rgb, 3, 5126, !1, 24, 8);
            this._gl.vertexAttribPointer(this.a_alpha, 1, 5126, !1, 24, 20)
        },
        __class__: zc
    });
    var Cc = function() {
        this._transitor = null;
        x.call(this);
        this.scenes = [];
        this.occludedScenes = [];
        this._root = new g
    };
    e["flambe.scene.Director"] = Cc;
    Cc.__name__ = ["flambe", "scene", "Director"];
    Cc.__super__ = x;
    Cc.prototype = t(x.prototype, {
        get_name: function() {
            return "Director_16"
        },
        pushScene: function(a, b) {
            var c = this;
            this.completeTransition();
            var d = this.get_topScene();
            null != d ? this.playTransition(d, a, b, function() {
                c.hide(d)
            }) : (this.add(a), this.invalidateVisibility())
        },
        popScene: function(a) {
            var b = this;
            this.completeTransition();
            var c = this.get_topScene();
            if (null != c) {
                this.scenes.pop();
                var d = this.get_topScene();
                null != d ? this.playTransition(c, d, a, function() {
                    b.hideAndDispose(c)
                }) : (this.hideAndDispose(c), this.invalidateVisibility())
            }
        },
        unwindToScene: function(a, b) {
            var c = this;
            this.completeTransition();
            var d = this.get_topScene();
            if (null != d) {
                if (d != a) {
                    for (this.scenes.pop(); 0 <
                        this.scenes.length && this.scenes[this.scenes.length - 1] != a;) this.scenes.pop().dispose();
                    this.playTransition(d, a, b, function() {
                        c.hideAndDispose(d)
                    })
                }
            } else this.pushScene(a, b)
        },
        onAdded: function() {
            this.owner.addChild(this._root)
        },
        onRemoved: function() {
            this.completeTransition();
            for (var a = 0, b = this.scenes; a < b.length;) {
                var c = b[a];
                ++a;
                c.dispose()
            }
            this.scenes = [];
            this.occludedScenes = [];
            this._root.dispose()
        },
        onUpdate: function(a) {
            null != this._transitor && this._transitor.update(a) && this.completeTransition()
        },
        get_topScene: function() {
            var a =
                this.scenes.length;
            return 0 < a ? this.scenes[a - 1] : null
        },
        add: function(a) {
            var b = this.get_topScene();
            null != b && this._root.removeChild(b);
            w.remove(this.scenes, a);
            this.scenes.push(a);
            this._root.addChild(a)
        },
        hide: function(a) {
            a = a._compMap.Scene_0;
            null != a && a.hidden.emit()
        },
        hideAndDispose: function(a) {
            this.hide(a);
            a.dispose()
        },
        show: function(a) {
            a = a._compMap.Scene_0;
            null != a && a.shown.emit()
        },
        invalidateVisibility: function() {
            for (var a = this.scenes.length; 0 < a;) {
                var b = this.scenes[--a]._compMap.Scene_0;
                if (null == b || b.opaque) break
            }
            this.occludedScenes =
                0 < this.scenes.length ? this.scenes.slice(a, this.scenes.length - 1) : [];
            a = this.get_topScene();
            null != a && this.show(a)
        },
        completeTransition: function() {
            null != this._transitor && (this._transitor.complete(), this._transitor = null, this.invalidateVisibility())
        },
        playTransition: function(a, b, c, d) {
            this.completeTransition();
            this.add(b);
            null != c ? (this.occludedScenes.push(a), this._transitor = new hd(a, b, c, d), this._transitor.init(this)) : (d(), this.invalidateVisibility())
        },
        __class__: Cc
    });
    var hd = function(a, b, c, d) {
        this._from = a;
        this._to =
            b;
        this._transition = c;
        this._onComplete = d
    };
    e["flambe.scene._Director.Transitor"] = hd;
    hd.__name__ = ["flambe", "scene", "_Director", "Transitor"];
    hd.prototype = {
        init: function(a) {
            this._transition.init(a, this._from, this._to)
        },
        update: function(a) {
            return this._transition.update(a)
        },
        complete: function() {
            this._transition.complete();
            this._onComplete()
        },
        __class__: hd
    };
    var Ra = function() {};
    e["flambe.scene.Transition"] = Ra;
    Ra.__name__ = ["flambe", "scene", "Transition"];
    Ra.prototype = {
        init: function(a, b, c) {
            this._director = a;
            this._from =
                b;
            this._to = c
        },
        update: function() {
            return !0
        },
        complete: function() {},
        __class__: Ra
    };
    var Sa = function(a, b) {
        this._duration = a;
        this._ease = null != b ? b : ka.linear
    };
    e["flambe.scene.TweenTransition"] = Sa;
    Sa.__name__ = ["flambe", "scene", "TweenTransition"];
    Sa.__super__ = Ra;
    Sa.prototype = t(Ra.prototype, {
        init: function(a, b, c) {
            Ra.prototype.init.call(this, a, b, c);
            this._elapsed = 0
        },
        update: function(a) {
            this._elapsed += a;
            return this._elapsed >= this._duration
        },
        interp: function(a, b) {
            return a + (b - a) * this._ease(this._elapsed / this._duration)
        },
        __class__: Sa
    });
    var dc = function(a, b) {
        Sa.call(this, a, b)
    };
    e["flambe.scene.FadeTransition"] = dc;
    dc.__name__ = ["flambe", "scene", "FadeTransition"];
    dc.__super__ = Sa;
    dc.prototype = t(Sa.prototype, {
        init: function(a, b, c) {
            Sa.prototype.init.call(this, a, b, c);
            a = this._to._compMap.Sprite_3;
            null == a && this._to.add(a = new l);
            a.alpha.set__(0)
        },
        update: function(a) {
            a = Sa.prototype.update.call(this, a);
            this._to._compMap.Sprite_3.alpha.set__(this.interp(0, 1));
            return a
        },
        complete: function() {
            this._to._compMap.Sprite_3.alpha.set__(1)
        },
        __class__: dc
    });
    var Da = function() {};
    e["flambe.script.Action"] = Da;
    Da.__name__ = ["flambe", "script", "Action"];
    Da.prototype = {
        __class__: Da
    };
    var U = function(a, b, c, d) {
        this._value = a;
        this._to = b;
        this._seconds = c;
        this._easing = d
    };
    e["flambe.script.AnimateTo"] = U;
    U.__name__ = ["flambe", "script", "AnimateTo"];
    U.__interfaces__ = [Da];
    U.prototype = {
        update: function(a) {
            null == this._tween && (this._tween = new nb(this._value._value, this._to, this._seconds, this._easing), this._value.set_behavior(this._tween), this._value.update(a));
            if (this._value._behavior !=
                this._tween) {
                var b = this._tween.elapsed - this._seconds;
                this._tween = null;
                return 0 < b ? Math.max(0, a - b) : 0
            }
            return -1
        },
        __class__: U
    };
    var T = function(a) {
        this._fn = a
    };
    e["flambe.script.CallFunction"] = T;
    T.__name__ = ["flambe", "script", "CallFunction"];
    T.__interfaces__ = [Da];
    T.prototype = {
        update: function() {
            this._fn();
            return 0
        },
        __class__: T
    };
    var la = function(a) {
        this._duration = a;
        this._elapsed = 0
    };
    e["flambe.script.Delay"] = la;
    la.__name__ = ["flambe", "script", "Delay"];
    la.__interfaces__ = [Da];
    la.prototype = {
        update: function(a) {
            this._elapsed +=
                a;
            if (this._elapsed >= this._duration) {
                var b = this._elapsed - this._duration;
                this._elapsed = 0;
                return a - b
            }
            return -1
        },
        __class__: la
    };
    var hb = function(a) {
        this._completedActions = [];
        this._runningActions = null != a ? a.slice() : []
    };
    e["flambe.script.Parallel"] = hb;
    hb.__name__ = ["flambe", "script", "Parallel"];
    hb.__interfaces__ = [Da];
    hb.prototype = {
        add: function(a) {
            this._runningActions.push(a)
        },
        update: function(a, b) {
            for (var c = !0, d = 0, f = 0, h = this._runningActions.length; f < h;) {
                var e = f++,
                    g = this._runningActions[e];
                if (null != g) {
                    var j = g.update(a,
                        b);
                    0 <= j ? (this._runningActions[e] = null, this._completedActions.push(g), j > d && (d = j)) : c = !1
                }
            }
            return c ? (this._runningActions = this._completedActions, this._completedActions = [], d) : -1
        },
        __class__: hb
    };
    var Cb = function(a, b) {
        null == b && (b = -1);
        this._action = a;
        this._remaining = this._count = b
    };
    e["flambe.script.Repeat"] = Cb;
    Cb.__name__ = ["flambe", "script", "Repeat"];
    Cb.__interfaces__ = [Da];
    Cb.prototype = {
        update: function(a, b) {
            if (0 == this._count) return 0;
            var c = this._action.update(a, b);
            return 0 < this._count && 0 <= c && 0 == --this._remaining ?
                (this._remaining = this._count, c) : -1
        },
        __class__: Cb
    };
    var Ma = function() {
        x.call(this);
        this.stopAll()
    };
    e["flambe.script.Script"] = Ma;
    Ma.__name__ = ["flambe", "script", "Script"];
    Ma.__super__ = x;
    Ma.prototype = t(x.prototype, {
        get_name: function() {
            return "Script_11"
        },
        run: function(a) {
            a = new Dc(a);
            this._handles.push(a);
            return a
        },
        stopAll: function() {
            this._handles = []
        },
        onUpdate: function(a) {
            for (var b = 0; b < this._handles.length;) {
                var c = this._handles[b];
                c.removed || 0 <= c.action.update(a, this.owner) ? this._handles.splice(b, 1) : ++b
            }
        },
        __class__: Ma
    });
    var Dc = function(a) {
        this.removed = !1;
        this.action = a
    };
    e["flambe.script._Script.Handle"] = Dc;
    Dc.__name__ = ["flambe", "script", "_Script", "Handle"];
    Dc.__interfaces__ = [ya];
    Dc.prototype = {
        dispose: function() {
            this.removed = !0;
            this.action = null
        },
        __class__: Dc
    };
    var ba = function(a) {
        this._idx = 0;
        this._runningActions = null != a ? a.slice() : []
    };
    e["flambe.script.Sequence"] = ba;
    ba.__name__ = ["flambe", "script", "Sequence"];
    ba.__interfaces__ = [Da];
    ba.prototype = {
        update: function(a, b) {
            for (var c = 0;;) {
                var d = this._runningActions[this._idx];
                if (null != d)
                    if (d = d.update(a - c, b), 0 <= d) c += d;
                    else return -1;
                ++this._idx;
                if (this._idx >= this._runningActions.length) {
                    this._idx = 0;
                    break
                } else if (c > a) return -1
            }
            return c
        },
        __class__: ba
    };
    var cc = function(a, b, c) {
        this._strengthX = a;
        this._strengthY = b;
        this._duration = c;
        this._elapsed = 0
    };
    e["flambe.script.Shake"] = cc;
    cc.__name__ = ["flambe", "script", "Shake"];
    cc.__interfaces__ = [Da];
    cc.prototype = {
        update: function(a, b) {
            var c = b._compMap.Sprite_3;
            null == this._jitterX && (this._jitterX = new Lb(c.x._value, this._strengthX), this._jitterY =
                new Lb(c.y._value, this._strengthY), c.x.set_behavior(this._jitterX), c.y.set_behavior(this._jitterY));
            this._elapsed += a;
            if (this._elapsed >= this._duration) {
                var d = this._elapsed - this._duration;
                c.x._behavior == this._jitterX && c.x.set__(this._jitterX.base);
                c.y._behavior == this._jitterY && c.y.set__(this._jitterY.base);
                this._jitterY = this._jitterX = null;
                this._elapsed = 0;
                return a - d
            }
            return -1
        },
        __class__: cc
    };
    var ra = e["flambe.subsystem.RendererType"] = {
        __ename__: !0,
        __constructs__: ["Stage3D", "WebGL", "Canvas"]
    };
    ra.Stage3D = ["Stage3D", 0];
    ra.Stage3D.toString = D;
    ra.Stage3D.__enum__ = ra;
    ra.WebGL = ["WebGL", 1];
    ra.WebGL.toString = D;
    ra.WebGL.__enum__ = ra;
    ra.Canvas = ["Canvas", 2];
    ra.Canvas.toString = D;
    ra.Canvas.__enum__ = ra;
    var Ec = function() {};
    e["flambe.swf.Symbol"] = Ec;
    Ec.__name__ = ["flambe", "swf", "Symbol"];
    Ec.prototype = {
        __class__: Ec
    };
    var Fc = function(a, b) {
        this._name = a.symbol;
        var c = a.rect;
        this.texture = b.subTexture(c[0], c[1], c[2], c[3]);
        c = a.origin;
        null != c ? (this.anchorX = c[0], this.anchorY = c[1]) : this.anchorY = this.anchorX = 0
    };
    e["flambe.swf.BitmapSymbol"] =
        Fc;
    Fc.__name__ = ["flambe", "swf", "BitmapSymbol"];
    Fc.__interfaces__ = [Ec];
    Fc.prototype = {
        createSprite: function() {
            var a = new q(this.texture);
            a.setAnchor(this.anchorX, this.anchorY);
            return a
        },
        __class__: Fc
    };
    var Eb = function(a, b) {
        this._file = a.getFile(b + "/library.json");
        var c = xd.parse(this._file.toString());
        this._symbols = new R;
        this.frameRate = c.frameRate;
        for (var d = [], f = 0, h = c.movies; f < h.length;) {
            var e = h[f];
            ++f;
            e = new Gc(this, e);
            d.push(e);
            this._symbols.set(e._name, e)
        }
        c = c.textureGroups;
        (1 != c[0].scaleFactor || 1 < c.length) &&
        null;
        c = c[0].atlases;
        for (f = 0; f < c.length;) {
            var g = c[f];
            ++f;
            h = a.getTexture(b + "/" + W.removeFileExtension(g.file));
            e = 0;
            for (g = g.textures; e < g.length;) {
                var j = g[e];
                ++e;
                j = new Fc(j, h);
                this._symbols.set(j._name, j)
            }
        }
        for (c = 0; c < d.length;) {
            h = d[c];
            ++c;
            f = 0;
            for (h = h.layers; f < h.length;) {
                e = h[f];
                ++f;
                e = e.keyframes;
                g = e.length;
                for (j = 0; j < g;) {
                    var k = j++,
                        m = e[k];
                    if (null != m.symbolName) {
                        var l = this._symbols.get(m.symbolName);
                        m.symbol = l
                    }
                    if (m.tweened && 1 == m.duration && k + 1 < g && (k = e[k + 1], !k.visible || null == k.symbolName)) m.visible = !1
                }
            }
        }
    };
    e["flambe.swf.Library"] =
        Eb;
    Eb.__name__ = ["flambe", "swf", "Library"];
    Eb.prototype = {
        createSprite: function(a, b) {
            null == b && (b = !0);
            var c = this._symbols.get(a);
            if (null == c) {
                if (b) throw new m(W.withFields("Missing symbol", ["name", a]));
                return null
            }
            return c.createSprite()
        },
        __class__: Eb
    };
    var Na = function(a) {
        this._oneshotSprite = this._loopingSprite = null;
        x.call(this);
        this._lib = a;
        this._root = new g;
        this.movie = new Z(null);
        this.setCache(!0)
    };
    e["flambe.swf.MoviePlayer"] = Na;
    Na.__name__ = ["flambe", "swf", "MoviePlayer"];
    Na.__super__ = x;
    Na.prototype = t(x.prototype, {
        get_name: function() {
            return "MoviePlayer_5"
        },
        setCache: function(a) {
            this._cache = a ? new R : null;
            return this
        },
        setDecorator: function(a) {
            this._decorator = a;
            return this
        },
        play: function(a, b) {
            null == b && (b = !0);
            if (b || null == this._oneshotSprite || this._oneshotSprite.symbol._name != a) this._oneshotSprite = this.playFromCache(a);
            return this
        },
        loop: function(a, b) {
            null == b && (b = !0);
            if (b || null == this._loopingSprite || this._loopingSprite.symbol._name != a) this._oneshotSprite = null, this._loopingSprite = this.playFromCache(a);
            return this
        },
        onAdded: function() {
            this.owner.addChild(this._root)
        },
        onRemoved: function() {
            this._root.dispose();
            this._oneshotSprite = this._loopingSprite = null;
            this.movie.set__(null)
        },
        onUpdate: function(a) {
            null != this._oneshotSprite && this._oneshotSprite._position + a > this._oneshotSprite.symbol.duration && (this._oneshotSprite = null, this.setCurrent(this._loopingSprite))
        },
        playFromCache: function(a) {
            var b;
            null != this._cache ? (b = this._cache.get(a), null != b ? b.set_position(0) : (b = this.createMovie(a), this._cache.set(a, b))) : b = this.createMovie(a);
            return this.setCurrent(b)
        },
        createMovie: function(a) {
            a = this._lib.createSprite(a, !0);
            null != this._decorator && this._decorator(a);
            return a
        },
        setCurrent: function(a) {
            this._root.add(a);
            return this.movie.set__(a)
        },
        __class__: Na
    });
    var Wb = function(a) {
        this._looped = null;
        l.call(this);
        this.symbol = a;
        this.speed = new P(1);
        this._animators = Array(a.layers.length);
        for (var b = 0, c = this._animators.length; b < c;) {
            var d = b++;
            this._animators[d] = new id(a.layers[d])
        }
        this._position = this._frame = 0;
        this["goto"](1)
    };
    e["flambe.swf.MovieSprite"] =
        Wb;
    Wb.__name__ = ["flambe", "swf", "MovieSprite"];
    Wb.__super__ = l;
    Wb.prototype = t(l.prototype, {
        getLayer: function(a, b) {
            null == b && (b = !0);
            for (var c = 0, d = this._animators; c < d.length;) {
                var f = d[c];
                ++c;
                if (f.layer.name == a) return f.content
            }
            if (b) throw new m(W.withFields("Missing layer", ["name", a]));
            return null
        },
        onAdded: function() {
            l.prototype.onAdded.call(this);
            for (var a = 0, b = this._animators; a < b.length;) {
                var c = b[a];
                ++a;
                this.owner.addChild(c.content)
            }
        },
        onRemoved: function() {
            l.prototype.onRemoved.call(this);
            for (var a = 0,
                    b = this._animators; a < b.length;) {
                var c = b[a];
                ++a;
                this.owner.removeChild(c.content)
            }
        },
        onUpdate: function(a) {
            l.prototype.onUpdate.call(this, a);
            this.speed.update(a);
            switch (this._flags & 768) {
                case 0:
                    this._position += this.speed._value * a;
                    this._position > this.symbol.duration && (this._position %= this.symbol.duration, null != this._looped && this._looped.emit());
                    break;
                case 512:
                    this._flags &= -513
            }
            this["goto"](this._position * this.symbol.frameRate)
        },
        "goto": function(a) {
            if (this._frame != a) {
                if (a < this._frame)
                    for (var b = 0, c = this._animators; b <
                        c.length;) {
                        var d = c[b];
                        ++b;
                        d.needsKeyframeUpdate = !0;
                        d.keyframeIdx = 0
                    }
                b = 0;
                for (c = this._animators; b < c.length;) d = c[b], ++b, d.composeFrame(a);
                this._frame = a
            }
        },
        set_position: function(a) {
            return this._position = ea.clamp(a, 0, this.symbol.duration)
        },
        set_paused: function(a) {
            this._flags = Ob.set(this._flags, 256, a);
            return a
        },
        get_looped: function() {
            null == this._looped && (this._looped = new S);
            return this._looped
        },
        set_pixelSnapping: function(a) {
            for (var b = 0, c = this._animators; b < c.length;) {
                var d = c[b];
                ++b;
                d.setPixelSnapping(a)
            }
            return l.prototype.set_pixelSnapping.call(this,
                a)
        },
        rewind: function() {
            this._position = 0;
            this._flags |= 512
        },
        __class__: Wb
    });
    var id = function(a) {
        this.keyframeIdx = 0;
        this.needsKeyframeUpdate = !1;
        this.layer = a;
        this.content = new g;
        if (a.empty) this._sprites = null;
        else {
            this._sprites = Array(a.keyframes.length);
            for (var b = 0, c = this._sprites.length; b < c;) {
                var d = b++,
                    f = a.keyframes[d];
                this._sprites[d] = 0 < d && a.keyframes[d - 1].symbol == f.symbol ? this._sprites[d - 1] : null == f.symbol ? new l : f.symbol.createSprite()
            }
            this.content.add(this._sprites[0])
        }
    };
    e["flambe.swf._MovieSprite.LayerAnimator"] =
        id;
    id.__name__ = ["flambe", "swf", "_MovieSprite", "LayerAnimator"];
    id.prototype = {
        composeFrame: function(a) {
            if (null != this._sprites) {
                var b = this.layer.keyframes,
                    c = b.length - 1;
                if (a > this.layer.frames) this.content._compMap.Sprite_3.set_visible(!1), this.keyframeIdx = c, this.needsKeyframeUpdate = !0;
                else {
                    for (; this.keyframeIdx < c && b[this.keyframeIdx + 1].index <= a;) ++this.keyframeIdx, this.needsKeyframeUpdate = !0;
                    var d;
                    this.needsKeyframeUpdate ? (this.needsKeyframeUpdate = !1, d = this._sprites[this.keyframeIdx], d != this.content._compMap.Sprite_3 &&
                        ((null == d ? null : E.getClass(d)) == Wb && d.rewind(), this.content.add(d))) : d = this.content._compMap.Sprite_3;
                    var f = b[this.keyframeIdx],
                        e = f.visible && null != f.symbol;
                    d.set_visible(e);
                    if (e) {
                        var e = f.x,
                            g = f.y,
                            j = f.scaleX,
                            k = f.scaleY,
                            m = f.skewX,
                            l = f.skewY,
                            o = f.alpha;
                        if (f.tweened && this.keyframeIdx < c) {
                            a = (a - f.index) / f.duration;
                            c = f.ease;
                            if (0 != c) {
                                var i;
                                0 > c ? (i = 1 - a, i = 1 - i * i, c = -c) : i = a * a;
                                a = c * i + (1 - c) * a
                            }
                            b = b[this.keyframeIdx + 1];
                            e += (b.x - e) * a;
                            g += (b.y - g) * a;
                            j += (b.scaleX - j) * a;
                            k += (b.scaleY - k) * a;
                            m += (b.skewX - m) * a;
                            l += (b.skewY - l) * a;
                            o += (b.alpha -
                                o) * a
                        }
                        b = d.getLocalMatrix();
                        a = 0;
                        c = 1;
                        i = 0;
                        var n = 1;
                        0 != m && (a = Math.sin(m), c = Math.cos(m));
                        0 != l && (i = Math.sin(l), n = Math.cos(l));
                        b.set(n * j, i * j, -a * k, c * k, e, g);
                        b.translate(-f.pivotX, -f.pivotY);
                        d.alpha.set__(o)
                    }
                }
            }
        },
        setPixelSnapping: function(a) {
            if (null != this._sprites)
                for (var b = 0, c = this._sprites; b < c.length;) {
                    var d = c[b];
                    ++b;
                    d.set_pixelSnapping(a)
                }
        },
        __class__: id
    };
    var Gc = function(a, b) {
        this._name = b.id;
        this.frameRate = a.frameRate;
        this.frames = 0;
        this.layers = Array(b.layers.length);
        for (var c = 0, d = this.layers.length; c < d;) {
            var f =
                c++,
                e = new jd(b.layers[f]);
            this.frames = Math.max(e.frames, this.frames);
            this.layers[f] = e
        }
        this.duration = this.frames / this.frameRate
    };
    e["flambe.swf.MovieSymbol"] = Gc;
    Gc.__name__ = ["flambe", "swf", "MovieSymbol"];
    Gc.__interfaces__ = [Ec];
    Gc.prototype = {
        createSprite: function() {
            return new Wb(this)
        },
        __class__: Gc
    };
    var jd = function(a) {
        this.empty = !0;
        this.name = a.name;
        var b = null;
        this.keyframes = Array(a.keyframes.length);
        for (var c = 0, d = this.keyframes.length; c < d;) {
            var f = c++,
                b = new kd(a.keyframes[f], b);
            this.keyframes[f] = b;
            this.empty =
                this.empty && null == b.symbolName
        }
        this.frames = null != b ? b.index + b.duration : 0
    };
    e["flambe.swf.MovieLayer"] = jd;
    jd.__name__ = ["flambe", "swf", "MovieLayer"];
    jd.prototype = {
        __class__: jd
    };
    var kd = function(a, b) {
        this.ease = 0;
        this.visible = this.tweened = !0;
        this.alpha = 1;
        this.skewX = this.skewY = this.pivotX = this.pivotY = 0;
        this.scaleX = this.scaleY = 1;
        this.x = this.y = 0;
        this.symbol = null;
        this.index = null != b ? b.index + b.duration : 0;
        this.duration = a.duration;
        this.label = a.label;
        this.symbolName = a.ref;
        var c = a.loc;
        null != c && (this.x = c[0], this.y =
            c[1]);
        c = a.scale;
        null != c && (this.scaleX = c[0], this.scaleY = c[1]);
        c = a.skew;
        null != c && (this.skewX = c[0], this.skewY = c[1]);
        c = a.pivot;
        null != c && (this.pivotX = c[0], this.pivotY = c[1]);
        null != a.alpha && (this.alpha = a.alpha);
        null != a.visible && (this.visible = a.visible);
        null != a.tweened && (this.tweened = a.tweened);
        null != a.ease && (this.ease = a.ease)
    };
    e["flambe.swf.MovieKeyframe"] = kd;
    kd.__name__ = ["flambe", "swf", "MovieKeyframe"];
    kd.prototype = {
        __class__: kd
    };
    var Tc = function() {};
    e["flambe.util.Assert"] = Tc;
    Tc.__name__ = ["flambe", "util",
        "Assert"
    ];
    Tc.that = function() {};
    var Ob = function() {};
    e["flambe.util.BitSets"] = Ob;
    Ob.__name__ = ["flambe", "util", "BitSets"];
    Ob.set = function(a, b, c) {
        return c ? a | b : a & ~b
    };
    var oc = function() {
        this.success = new K;
        this.error = new K;
        this.progressChanged = new S;
        this.hasResult = !1;
        this._total = this._progress = 0
    };
    e["flambe.util.Promise"] = oc;
    oc.__name__ = ["flambe", "util", "Promise"];
    oc.prototype = {
        get_result: function() {
            if (!this.hasResult) throw new m("Promise result not yet available");
            return this._result
        },
        set_result: function(a) {
            if (this.hasResult) throw new m("Promise result already assigned");
            this._result = a;
            this.hasResult = !0;
            this.success.emit(a);
            return a
        },
        get: function(a) {
            return this.hasResult ? (a(this._result), null) : this.success.connect(a).once()
        },
        set_progress: function(a) {
            this._progress != a && (this._progress = a, this.progressChanged.emit());
            return a
        },
        set_total: function(a) {
            this._total != a && (this._total = a, this.progressChanged.emit());
            return a
        },
        __class__: oc
    };
    var S = function(a) {
        V.call(this, a)
    };
    e["flambe.util.Signal0"] = S;
    S.__name__ = ["flambe", "util", "Signal0"];
    S.__super__ = V;
    S.prototype = t(V.prototype, {
        connect: function(a, b) {
            null == b && (b = !1);
            return this.connectImpl(a, b)
        },
        emit: function() {
            var a = this;
            this._head == V.DISPATCHING_SENTINEL ? this.defer(function() {
                a.emitImpl()
            }) : this.emitImpl()
        },
        emitImpl: function() {
            for (var a = this.willEmit(), b = a; null != b;) b._listener(), b.stayInList || b.dispose(), b = b._next;
            this.didEmit(a)
        },
        __class__: S
    });
    var Mc = function(a) {
        this.next = null;
        this.fn = a
    };
    e["flambe.util._SignalBase.Task"] = Mc;
    Mc.__name__ = ["flambe", "util", "_SignalBase", "Task"];
    Mc.prototype = {
        __class__: Mc
    };
    var W = function() {};
    e["flambe.util.Strings"] = W;
    W.__name__ = ["flambe", "util", "Strings"];
    W.getFileExtension = function(a) {
        var b = a.lastIndexOf(".");
        return 0 < b ? w.substr(a, b + 1, null) : null
    };
    W.removeFileExtension = function(a) {
        var b = a.lastIndexOf(".");
        return 0 < b ? w.substr(a, 0, b) : a
    };
    W.getUrlExtension = function(a) {
        var b = a.lastIndexOf("?");
        0 <= b && (a = w.substr(a, 0, b));
        b = a.lastIndexOf("/");
        0 <= b && (a = w.substr(a, b + 1, null));
        return W.getFileExtension(a)
    };
    W.joinPath = function(a, b) {
        0 < a.length && 47 != a.charCodeAt(a.length - 1) && (a += "/");
        return a + b
    };
    W.withFields =
        function(a, b) {
            var c = b.length;
            if (0 < c) {
                for (var a = 0 < a.length ? a + " [" : a + "[", d = 0; d < c;) {
                    0 < d && (a += ", ");
                    var f = b[d],
                        e = b[d + 1];
                    if (s.is(e, Error)) {
                        var g = e.stack;
                        null != g && (e = g)
                    }
                    a += f + "=" + s.string(e);
                    d += 2
                }
                a += "]"
            }
            return a
        };
    var yd = function() {};
    e["haxe.IMap"] = yd;
    yd.__name__ = ["haxe", "IMap"];
    var ld = function(a, b) {
        this.high = a;
        this.low = b
    };
    e["haxe._Int64.___Int64"] = ld;
    ld.__name__ = ["haxe", "_Int64", "___Int64"];
    ld.prototype = {
        __class__: ld
    };
    var xd = function() {};
    e["haxe.Json"] = xd;
    xd.__name__ = ["haxe", "Json"];
    xd.parse = function(a) {
        return (new md(a)).parseRec()
    };
    var Dd = function() {};
    e["haxe.io.Bytes"] = Dd;
    Dd.__name__ = ["haxe", "io", "Bytes"];
    var Ia = function() {
        this.h = {}
    };
    e["haxe.ds.IntMap"] = Ia;
    Ia.__name__ = ["haxe", "ds", "IntMap"];
    Ia.__interfaces__ = [yd];
    Ia.prototype = {
        remove: function(a) {
            if (!this.h.hasOwnProperty(a)) return !1;
            delete this.h[a];
            return !0
        },
        __class__: Ia
    };
    var qc = function(a, b) {
        this.map = a;
        this.keys = b;
        this.index = 0;
        this.count = b.length
    };
    e["haxe.ds._StringMap.StringMapIterator"] = qc;
    qc.__name__ = ["haxe", "ds", "_StringMap", "StringMapIterator"];
    qc.prototype = {
        hasNext: function() {
            return this.index <
                this.count
        },
        next: function() {
            return this.map.get(this.keys[this.index++])
        },
        __class__: qc
    };
    var R = function() {
        this.h = {}
    };
    e["haxe.ds.StringMap"] = R;
    R.__name__ = ["haxe", "ds", "StringMap"];
    R.__interfaces__ = [yd];
    R.prototype = {
        set: function(a, b) {
            null != ta[a] ? this.setReserved(a, b) : this.h[a] = b
        },
        get: function(a) {
            return null != ta[a] ? this.getReserved(a) : this.h[a]
        },
        exists: function(a) {
            return null != ta[a] ? this.existsReserved(a) : this.h.hasOwnProperty(a)
        },
        setReserved: function(a, b) {
            null == this.rh && (this.rh = {});
            this.rh["$" + a] = b
        },
        getReserved: function(a) {
            return null == this.rh ? null : this.rh["$" + a]
        },
        existsReserved: function(a) {
            return null == this.rh ? !1 : this.rh.hasOwnProperty("$" + a)
        },
        remove: function(a) {
            if (null != ta[a]) {
                a = "$" + a;
                if (null == this.rh || !this.rh.hasOwnProperty(a)) return !1;
                delete this.rh[a]
            } else {
                if (!this.h.hasOwnProperty(a)) return !1;
                delete this.h[a]
            }
            return !0
        },
        keys: function() {
            var a = this.arrayKeys();
            return w.iter(a)
        },
        arrayKeys: function() {
            var a = [],
                b;
            for (b in this.h) this.h.hasOwnProperty(b) && a.push(b);
            if (null != this.rh)
                for (b in this.rh) 36 ==
                    b.charCodeAt(0) && a.push(b.substr(1));
            return a
        },
        iterator: function() {
            return new qc(this, this.arrayKeys())
        },
        __class__: R
    };
    var md = function(a) {
        this.str = a;
        this.pos = 0
    };
    e["haxe.format.JsonParser"] = md;
    md.__name__ = ["haxe", "format", "JsonParser"];
    md.prototype = {
        parseRec: function() {
            for (;;) {
                var a = y.fastCodeAt(this.str, this.pos++);
                switch (a) {
                    case 32:
                    case 13:
                    case 10:
                    case 9:
                        break;
                    case 123:
                        for (var a = {}, b = null, c = null;;) switch (y.fastCodeAt(this.str, this.pos++)) {
                            case 32:
                            case 13:
                            case 10:
                            case 9:
                                break;
                            case 125:
                                return (null !=
                                    b || !1 == c) && this.invalidChar(), a;
                            case 58:
                                null == b && this.invalidChar();
                                ga.setField(a, b, this.parseRec());
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
                        break;
                    case 91:
                        a = [];
                        for (b = null;;) switch (y.fastCodeAt(this.str, this.pos++)) {
                            case 32:
                            case 13:
                            case 10:
                            case 9:
                                break;
                            case 93:
                                return !1 == b && this.invalidChar(), a;
                            case 44:
                                b ? b = !1 : this.invalidChar();
                                break;
                            default:
                                b && this.invalidChar(), this.pos--, a.push(this.parseRec()),
                                    b = !0
                        }
                        break;
                    case 116:
                        a = this.pos;
                        if (114 != y.fastCodeAt(this.str, this.pos++) || 117 != y.fastCodeAt(this.str, this.pos++) || 101 != y.fastCodeAt(this.str, this.pos++)) this.pos = a, this.invalidChar();
                        return !0;
                    case 102:
                        a = this.pos;
                        if (97 != y.fastCodeAt(this.str, this.pos++) || 108 != y.fastCodeAt(this.str, this.pos++) || 115 != y.fastCodeAt(this.str, this.pos++) || 101 != y.fastCodeAt(this.str, this.pos++)) this.pos = a, this.invalidChar();
                        return !1;
                    case 110:
                        a = this.pos;
                        if (117 != y.fastCodeAt(this.str, this.pos++) || 108 != y.fastCodeAt(this.str,
                                this.pos++) || 108 != y.fastCodeAt(this.str, this.pos++)) this.pos = a, this.invalidChar();
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
                        return this.parseNumber(a);
                    default:
                        this.invalidChar()
                }
            }
        },
        parseString: function() {
            for (var a = this.pos, b = null;;) {
                var c = y.fastCodeAt(this.str, this.pos++);
                if (34 == c) break;
                if (92 == c) {
                    null == b && (b = new xa);
                    b.addSub(this.str, a, this.pos - a - 1);
                    c = y.fastCodeAt(this.str, this.pos++);
                    switch (c) {
                        case 114:
                            b.b +=
                                "\r";
                            break;
                        case 110:
                            b.b += "\n";
                            break;
                        case 116:
                            b.b += "\t";
                            break;
                        case 98:
                            b.b += "\u0008";
                            break;
                        case 102:
                            b.b += "\u000c";
                            break;
                        case 47:
                        case 92:
                        case 34:
                            b.b += String.fromCharCode(c);
                            break;
                        case 117:
                            a = s.parseInt("0x" + w.substr(this.str, this.pos, 4));
                            this.pos += 4;
                            b.b += String.fromCharCode(a);
                            break;
                        default:
                            throw new m("Invalid escape sequence \\" + String.fromCharCode(c) + " at position " + (this.pos - 1));
                    }
                    a = this.pos
                } else if (c != c) throw new m("Unclosed string");
            }
            if (null == b) return w.substr(this.str, a, this.pos - a - 1);
            b.addSub(this.str,
                a, this.pos - a - 1);
            return b.b
        },
        parseNumber: function(a) {
            for (var b = this.pos - 1, c = 45 == a, d = !c, f = 48 == a, e = !1, g = !1, j = !1, k = !1;;) {
                a = y.fastCodeAt(this.str, this.pos++);
                switch (a) {
                    case 48:
                        f && !e && this.invalidNumber(b);
                        c && (c = !1, f = !0);
                        d = !0;
                        break;
                    case 49:
                    case 50:
                    case 51:
                    case 52:
                    case 53:
                    case 54:
                    case 55:
                    case 56:
                    case 57:
                        f && !e && this.invalidNumber(b);
                        c && (c = !1);
                        d = !0;
                        f = !1;
                        break;
                    case 46:
                        (c || e) && this.invalidNumber(b);
                        d = !1;
                        e = !0;
                        break;
                    case 101:
                    case 69:
                        (c || f || g) && this.invalidNumber(b);
                        d = !1;
                        g = !0;
                        break;
                    case 43:
                    case 45:
                        (!g || j) && this.invalidNumber(b);
                        d = !1;
                        j = !0;
                        break;
                    default:
                        d || this.invalidNumber(b), this.pos--, k = !0
                }
                if (k) break
            }
            a = s.parseFloat(w.substr(this.str, b, this.pos - b));
            b = a | 0;
            return b == a ? b : a
        },
        invalidChar: function() {
            this.pos--;
            throw new m("Invalid char " + this.str.charCodeAt(this.pos) + " at position " + this.pos);
        },
        invalidNumber: function(a) {
            throw new m("Invalid number at position " + a + ": " + w.substr(this.str, a, this.pos - a));
        },
        __class__: md
    };
    var ma = e["haxe.io.Error"] = {
        __ename__: !0,
        __constructs__: ["Blocked", "Overflow", "OutsideBounds", "Custom"]
    };
    ma.Blocked = ["Blocked", 0];
    ma.Blocked.toString = D;
    ma.Blocked.__enum__ = ma;
    ma.Overflow = ["Overflow", 1];
    ma.Overflow.toString = D;
    ma.Overflow.__enum__ = ma;
    ma.OutsideBounds = ["OutsideBounds", 2];
    ma.OutsideBounds.toString = D;
    ma.OutsideBounds.__enum__ = ma;
    ma.Custom = function(a) {
        a = ["Custom", 3, a];
        a.__enum__ = ma;
        a.toString = D;
        return a
    };
    var Ea = function() {};
    e["haxe.io.FPHelper"] = Ea;
    Ea.__name__ = ["haxe", "io", "FPHelper"];
    Ea.i32ToFloat = function(a) {
        var b = a >>> 23 & 255,
            c = a & 8388607;
        return 0 == c && 0 == b ? 0 : (1 - (a >>> 31 << 1)) * (1 + Math.pow(2, -23) * c) * Math.pow(2,
            b - 127)
    };
    Ea.floatToI32 = function(a) {
        if (0 == a) return 0;
        var b;
        b = 0 > a ? -a : a;
        var c = Math.floor(Math.log(b) / 0.6931471805599453); - 127 > c ? c = -127 : 128 < c && (c = 128);
        b = Math.round(8388608 * (b / Math.pow(2, c) - 1)) & 8388607;
        return (0 > a ? -2147483648 : 0) | c + 127 << 23 | b
    };
    Ea.i64ToDouble = function(a, b) {
        var c = (b >> 20 & 2047) - 1023,
            d = 4294967296 * (b & 1048575) + 2147483648 * (a >>> 31) + (a & 2147483647);
        return 0 == d && -1023 == c ? 0 : (1 - (b >>> 31 << 1)) * (1 + Math.pow(2, -52) * d) * Math.pow(2, c)
    };
    Ea.doubleToI64 = function(a) {
        var b = Ea.i64tmp;
        if (0 == a) b.low = 0, b.high = 0;
        else {
            var c;
            c = 0 > a ? -a : a;
            var d = Math.floor(Math.log(c) / 0.6931471805599453);
            c = 4503599627370496 * (c / Math.pow(2, d) - 1);
            c = Math.round(c);
            b.low = c | 0;
            b.high = (0 > a ? -2147483648 : 0) | d + 1023 << 20 | c / 4294967296 | 0
        }
        return b
    };
    var Nb = function() {};
    e["haxe.rtti.Meta"] = Nb;
    Nb.__name__ = ["haxe", "rtti", "Meta"];
    Nb.getType = function(a) {
        a = Nb.getMeta(a);
        return null == a || null == a.obj ? {} : a.obj
    };
    Nb.getMeta = function(a) {
        return a.__meta__
    };
    var nd = function(a) {
        this.__x = a
    };
    e["haxe.xml._Fast.NodeAccess"] = nd;
    nd.__name__ = ["haxe", "xml", "_Fast", "NodeAccess"];
    nd.prototype = {
        resolve: function(a) {
            var b = this.__x.elementsNamed(a).next();
            if (null == b) throw b = this.__x.nodeType == j.Document ? "Document" : this.__x.get_nodeName(), new m(b + " is missing element " + a);
            return new gb(b)
        },
        __class__: nd
    };
    var od = function(a) {
        this.__x = a
    };
    e["haxe.xml._Fast.AttribAccess"] = od;
    od.__name__ = ["haxe", "xml", "_Fast", "AttribAccess"];
    od.prototype = {
        resolve: function(a) {
            if (this.__x.nodeType == j.Document) throw new m("Cannot access document attribute " + a);
            var b = this.__x.get(a);
            if (null == b) throw new m(this.__x.get_nodeName() +
                " is missing attribute " + a);
            return b
        },
        __class__: od
    };
    var pd = function(a) {
        this.__x = a
    };
    e["haxe.xml._Fast.HasAttribAccess"] = pd;
    pd.__name__ = ["haxe", "xml", "_Fast", "HasAttribAccess"];
    pd.prototype = {
        resolve: function(a) {
            if (this.__x.nodeType == j.Document) throw new m("Cannot access document attribute " + a);
            return this.__x.exists(a)
        },
        __class__: pd
    };
    var qd = function(a) {
        this.__x = a
    };
    e["haxe.xml._Fast.HasNodeAccess"] = qd;
    qd.__name__ = ["haxe", "xml", "_Fast", "HasNodeAccess"];
    qd.prototype = {
        resolve: function(a) {
            return this.__x.elementsNamed(a).hasNext()
        },
        __class__: qd
    };
    var rd = function(a) {
        this.__x = a
    };
    e["haxe.xml._Fast.NodeListAccess"] = rd;
    rd.__name__ = ["haxe", "xml", "_Fast", "NodeListAccess"];
    rd.prototype = {
        resolve: function(a) {
            for (var b = new Kc, a = this.__x.elementsNamed(a); a.hasNext();) {
                var c = a.next();
                b.add(new gb(c))
            }
            return b
        },
        __class__: rd
    };
    var gb = function(a) {
        if (a.nodeType != j.Document && a.nodeType != j.Element) throw new m("Invalid nodeType " + a.nodeType);
        this.x = a;
        this.node = new nd(a);
        this.nodes = new rd(a);
        this.att = new od(a);
        this.has = new pd(a);
        this.hasNode = new qd(a)
    };
    e["haxe.xml.Fast"] = gb;
    gb.__name__ = ["haxe", "xml", "Fast"];
    gb.prototype = {
        get_name: function() {
            return this.x.nodeType == j.Document ? "Document" : this.x.get_nodeName()
        },
        get_innerData: function() {
            var a = this.x.iterator();
            if (!a.hasNext()) throw new m(this.get_name() + " does not have data");
            var b = a.next(),
                c = a.next();
            if (null != c) {
                if (b.nodeType == j.PCData && c.nodeType == j.CData && "" == y.trim(function() {
                        if (b.nodeType == j.Document || b.nodeType == j.Element) throw new m("Bad node type, unexpected " + b.nodeType);
                        return b.nodeValue
                    }(this))) {
                    var d =
                        a.next();
                    if (null == d || d.nodeType == j.PCData && "" == y.trim(function() {
                            if (d.nodeType == j.Document || d.nodeType == j.Element) throw new m("Bad node type, unexpected " + d.nodeType);
                            return d.nodeValue
                        }(this)) && null == a.next()) {
                        if (c.nodeType == j.Document || c.nodeType == j.Element) throw new m("Bad node type, unexpected " + c.nodeType);
                        return c.nodeValue
                    }
                }
                throw new m(this.get_name() + " does not only have data");
            }
            if (b.nodeType != j.PCData && b.nodeType != j.CData) throw new m(this.get_name() + " does not have data");
            if (b.nodeType ==
                j.Document || b.nodeType == j.Element) throw new m("Bad node type, unexpected " + b.nodeType);
            return b.nodeValue
        },
        __class__: gb
    };
    var Ka = function() {};
    e["haxe.xml.Parser"] = Ka;
    Ka.__name__ = ["haxe", "xml", "Parser"];
    Ka.parse = function(a, b) {
        null == b && (b = !1);
        var c = j.createDocument();
        Ka.doParse(a, b, 0, c);
        return c
    };
    Ka.doParse = function(a, b, c, d) {
        null == c && (c = 0);
        for (var f = null, e = 1, g = 1, k = null, p = 0, l = 0, o = 0, i = a.charCodeAt(c), n = new xa, q = 1, r = -1; i == i;) {
            switch (e) {
                case 0:
                    switch (i) {
                        case 10:
                        case 13:
                        case 9:
                        case 32:
                            break;
                        default:
                            e = g;
                            continue
                    }
                    break;
                case 1:
                    switch (i) {
                        case 60:
                            e = 0;
                            g = 2;
                            break;
                        default:
                            p = c;
                            e = 13;
                            continue
                    }
                    break;
                case 13:
                    60 == i ? (n.addSub(a, p, c - p), g = j.createPCData(n.b), n = new xa, d.addChild(g), l++, e = 0, g = 2) : 38 == i && (n.addSub(a, p, c - p), e = 18, q = 13, p = c + 1);
                    break;
                case 17:
                    93 == i && 93 == a.charCodeAt(c + 1) && 62 == a.charCodeAt(c + 2) && (i = j.createCData(w.substr(a, p, c - p)), d.addChild(i), l++, c += 2, e = 1);
                    break;
                case 2:
                    switch (i) {
                        case 33:
                            if (91 == a.charCodeAt(c + 1)) {
                                c += 2;
                                if ("CDATA[" != w.substr(a, c, 6).toUpperCase()) throw new m("Expected <![CDATA[");
                                c += 5;
                                e = 17
                            } else if (68 == a.charCodeAt(c +
                                    1) || 100 == a.charCodeAt(c + 1)) {
                                if ("OCTYPE" != w.substr(a, c + 2, 6).toUpperCase()) throw new m("Expected <!DOCTYPE");
                                c += 8;
                                e = 16
                            } else {
                                if (45 != a.charCodeAt(c + 1) || 45 != a.charCodeAt(c + 2)) throw new m("Expected <\!--");
                                c += 2;
                                e = 15
                            }
                            p = c + 1;
                            break;
                        case 63:
                            e = 14;
                            p = c;
                            break;
                        case 47:
                            if (null == d) throw new m("Expected node name");
                            p = c + 1;
                            e = 0;
                            g = 10;
                            break;
                        default:
                            e = 3;
                            p = c;
                            continue
                    }
                    break;
                case 3:
                    if (!(97 <= i && 122 >= i || 65 <= i && 90 >= i || 48 <= i && 57 >= i || 58 == i || 46 == i || 95 == i || 45 == i)) {
                        if (c == p) throw new m("Expected node name");
                        f = j.createElement(w.substr(a,
                            p, c - p));
                        d.addChild(f);
                        l++;
                        e = 0;
                        g = 4;
                        continue
                    }
                    break;
                case 4:
                    switch (i) {
                        case 47:
                            e = 11;
                            break;
                        case 62:
                            e = 9;
                            break;
                        default:
                            e = 5;
                            p = c;
                            continue
                    }
                    break;
                case 5:
                    if (!(97 <= i && 122 >= i || 65 <= i && 90 >= i || 48 <= i && 57 >= i || 58 == i || 46 == i || 95 == i || 45 == i)) {
                        if (p == c) throw new m("Expected attribute name");
                        k = w.substr(a, p, c - p);
                        if (f.exists(k)) throw new m("Duplicate attribute");
                        e = 0;
                        g = 6;
                        continue
                    }
                    break;
                case 6:
                    switch (i) {
                        case 61:
                            e = 0;
                            g = 7;
                            break;
                        default:
                            throw new m("Expected =");
                    }
                    break;
                case 7:
                    switch (i) {
                        case 34:
                        case 39:
                            n = new xa;
                            e = 8;
                            p = c + 1;
                            r = i;
                            break;
                        default:
                            throw new m('Expected "');
                    }
                    break;
                case 8:
                    switch (i) {
                        case 38:
                            n.addSub(a, p, c - p);
                            e = 18;
                            q = 8;
                            p = c + 1;
                            break;
                        case 62:
                            if (b) throw new m("Invalid unescaped " + String.fromCharCode(i) + " in attribute value");
                            i == r && (n.addSub(a, p, c - p), g = n.b, n = new xa, f.set(k, g), e = 0, g = 4);
                            break;
                        case 60:
                            if (b) throw new m("Invalid unescaped " + String.fromCharCode(i) + " in attribute value");
                            i == r && (n.addSub(a, p, c - p), g = n.b, n = new xa, f.set(k, g), e = 0, g = 4);
                            break;
                        default:
                            i == r && (n.addSub(a, p, c - p), g = n.b, n = new xa, f.set(k, g), e = 0, g = 4)
                    }
                    break;
                case 9:
                    p = c = Ka.doParse(a, b, c, f);
                    e = 1;
                    break;
                case 11:
                    switch (i) {
                        case 62:
                            e = 1;
                            break;
                        default:
                            throw new m("Expected >");
                    }
                    break;
                case 12:
                    switch (i) {
                        case 62:
                            return 0 == l && d.addChild(j.createPCData("")), c;
                        default:
                            throw new m("Expected >");
                    }
                case 10:
                    if (!(97 <= i && 122 >= i || 65 <= i && 90 >= i || 48 <= i && 57 >= i || 58 == i || 46 == i || 95 == i || 45 == i)) {
                        if (p == c) throw new m("Expected node name");
                        g = w.substr(a, p, c - p);
                        if (d.nodeType != j.Element) throw new m("Bad node type, expected Element but found " + d.nodeType);
                        if (g != d.nodeName) throw new m("Expected </" + function() {
                            if (d.nodeType != j.Element) throw "Bad node type, expected Element but found " +
                                d.nodeType;
                            return d.nodeName
                        }(this) + ">");
                        e = 0;
                        g = 12;
                        continue
                    }
                    break;
                case 15:
                    45 == i && 45 == a.charCodeAt(c + 1) && 62 == a.charCodeAt(c + 2) && (i = j.createComment(w.substr(a, p, c - p)), d.addChild(i), l++, c += 2, e = 1);
                    break;
                case 16:
                    91 == i ? o++ : 93 == i ? o-- : 62 == i && 0 == o && (i = j.createDocType(w.substr(a, p, c - p)), d.addChild(i), l++, e = 1);
                    break;
                case 14:
                    63 == i && 62 == a.charCodeAt(c + 1) && (c++, i = w.substr(a, p + 1, c - p - 2), i = j.createProcessingInstruction(i), d.addChild(i), l++, e = 1);
                    break;
                case 18:
                    if (59 == i) {
                        p = w.substr(a, p, c - p);
                        if (35 == p.charCodeAt(0)) p = 120 ==
                            p.charCodeAt(1) ? s.parseInt("0" + w.substr(p, 1, p.length - 1)) : s.parseInt(w.substr(p, 1, p.length - 1)), n.b += String.fromCharCode(p);
                        else if (Ka.escapes.exists(p)) n.add(Ka.escapes.get(p));
                        else {
                            if (b) throw new m("Undefined entity: " + p);
                            n.b += s.string("&" + p + ";")
                        }
                        p = c + 1;
                        e = q
                    } else if (!(97 <= i && 122 >= i || 65 <= i && 90 >= i || 48 <= i && 57 >= i || 58 == i || 46 == i || 95 == i || 45 == i) && 35 != i) {
                        if (b) throw new m("Invalid character in entity: " + String.fromCharCode(i));
                        n.b += "&";
                        n.addSub(a, p, c - p);
                        c--;
                        p = c + 1;
                        e = q
                    }
            }
            i = y.fastCodeAt(a, ++c)
        }
        1 == e && (p = c, e = 13);
        if (13 ==
            e) {
            if (c != p || 0 == l) n.addSub(a, p, c - p), a = j.createPCData(n.b), d.addChild(a), l++;
            return c
        }
        if (!b && 18 == e && 13 == q) return n.b += "&", n.addSub(a, p, c - p), a = j.createPCData(n.b), d.addChild(a), l++, c;
        throw new m("Unexpected end");
    };
    var vb = function(a) {
        this.output = new xa;
        this.pretty = a
    };
    e["haxe.xml.Printer"] = vb;
    vb.__name__ = ["haxe", "xml", "Printer"];
    vb.print = function(a, b) {
        null == b && (b = !1);
        var c = new vb(b);
        c.writeNode(a, "");
        return c.output.b
    };
    vb.prototype = {
        writeNode: function(a, b) {
            switch (a.nodeType) {
                case 2:
                    this.output.b += s.string(b +
                        "<![CDATA[");
                    this.write(y.trim(function() {
                        if (a.nodeType == j.Document || a.nodeType == j.Element) throw new m("Bad node type, unexpected " + a.nodeType);
                        return a.nodeValue
                    }(this)));
                    this.output.b += "]]\>";
                    this.pretty && (this.output.b += "");
                    break;
                case 3:
                    var c;
                    if (a.nodeType == j.Document || a.nodeType == j.Element) throw new m("Bad node type, unexpected " + a.nodeType);
                    c = a.nodeValue;
                    c = (new X("[\n\r\t]+", "g")).replace(c, "");
                    this.output.b = null == b ? this.output.b + "null" : this.output.b + ("" + b);
                    this.write(y.trim("<\!--" + c + "--\>"));
                    this.pretty && (this.output.b += "");
                    break;
                case 6:
                    if (a.nodeType != j.Document && a.nodeType != j.Element) throw new m("Bad node type, expected Element or Document but found " + a.nodeType);
                    for (c = w.iter(a.children); c.hasNext();) this.writeNode(c.next(), b);
                    break;
                case 0:
                    this.output.b += s.string(b + "<");
                    this.write(function() {
                        if (a.nodeType != j.Element) throw new m("Bad node type, expected Element but found " + a.nodeType);
                        return a.nodeName
                    }(this));
                    for (c = a.attributes(); c.hasNext();) {
                        var d = c.next();
                        this.output.b += s.string(" " +
                            d + '="');
                        this.write(y.htmlEscape(a.get(d), !0));
                        this.output.b += '"'
                    }
                    if (this.hasChildren(a)) {
                        this.output.b += ">";
                        this.pretty && (this.output.b += "");
                        if (a.nodeType != j.Document && a.nodeType != j.Element) throw new m("Bad node type, expected Element or Document but found " + a.nodeType);
                        for (c = w.iter(a.children); c.hasNext();) this.writeNode(c.next(), this.pretty ? b + "\t" : b);
                        this.output.b += s.string(b + "</");
                        this.write(function() {
                            if (a.nodeType != j.Element) throw new m("Bad node type, expected Element but found " + a.nodeType);
                            return a.nodeName
                        }(this));
                        this.output.b += ">"
                    } else this.output.b += "/>";
                    this.pretty && (this.output.b += "");
                    break;
                case 1:
                    if (a.nodeType == j.Document || a.nodeType == j.Element) throw new m("Bad node type, unexpected " + a.nodeType);
                    c = a.nodeValue;
                    0 != c.length && (this.write(b + y.htmlEscape(c)), this.pretty && (this.output.b += ""));
                    break;
                case 5:
                    this.write("<?" + function() {
                        if (a.nodeType == j.Document || a.nodeType == j.Element) throw new m("Bad node type, unexpected " + a.nodeType);
                        return a.nodeValue
                    }(this) + "?>");
                    break;
                case 4:
                    this.write("<!DOCTYPE " +
                        function() {
                            if (a.nodeType == j.Document || a.nodeType == j.Element) throw new m("Bad node type, unexpected " + a.nodeType);
                            return a.nodeValue
                        }(this) + ">")
            }
        },
        write: function(a) {
            this.output.b = null == a ? this.output.b + "null" : this.output.b + ("" + a)
        },
        hasChildren: function(a) {
            if (a.nodeType != j.Document && a.nodeType != j.Element) throw new m("Bad node type, expected Element or Document but found " + a.nodeType);
            for (a = w.iter(a.children); a.hasNext();) {
                var b = a.next();
                switch (b.nodeType) {
                    case 0:
                    case 1:
                        return !0;
                    case 2:
                    case 3:
                        if (0 != y.ltrim(function() {
                                if (b.nodeType ==
                                    j.Document || b.nodeType == j.Element) throw new m("Bad node type, unexpected " + b.nodeType);
                                return b.nodeValue
                            }(this)).length) return !0
                }
            }
            return !1
        },
        __class__: vb
    };
    var m = function(a) {
        Error.call(this);
        this.val = a;
        this.message = "" + a;
        Error.captureStackTrace && Error.captureStackTrace(this, m)
    };
    e["js._Boot.HaxeError"] = m;
    m.__name__ = ["js", "_Boot", "HaxeError"];
    m.__super__ = Error;
    m.prototype = t(Error.prototype, {
        __class__: m
    });
    var E = function() {};
    e["js.Boot"] = E;
    E.__name__ = ["js", "Boot"];
    E.getClass = function(a) {
        if (a instanceof Array && null == a.__enum__) return Array;
        var b = a.__class__;
        if (null != b) return b;
        a = E.__nativeClassName(a);
        return null != a ? E.__resolveNativeClass(a) : null
    };
    E.__string_rec = function(a, b) {
        if (null == a) return "null";
        if (5 <= b.length) return "<...>";
        var c = typeof a;
        if ("function" == c && (a.__name__ || a.__ename__)) c = "object";
        switch (c) {
            case "object":
                if (a instanceof Array) {
                    if (a.__enum__) {
                        if (2 == a.length) return a[0];
                        for (var c = a[0] + "(", b = b + "\t", d = 2, f = a.length; d < f;) var e = d++,
                            c = 2 != e ? c + ("," + E.__string_rec(a[e], b)) : c + E.__string_rec(a[e],
                                b);
                        return c + ")"
                    }
                    c = a.length;
                    d = "[";
                    b += "\t";
                    for (f = 0; f < c;) e = f++, d += (0 < e ? "," : "") + E.__string_rec(a[e], b);
                    return d + "]"
                }
                try {
                    d = a.toString
                } catch (g) {
                    return g instanceof m && (g = g.val), "???"
                }
                if (null != d && d != Object.toString && "function" == typeof d && (c = a.toString(), "[object Object]" != c)) return c;
                c = null;
                d = "{\n";
                b += "\t";
                f = null != a.hasOwnProperty;
                for (c in a)
                    if (!f || a.hasOwnProperty(c)) "prototype" == c || "__class__" == c || "__super__" == c || "__interfaces__" == c || "__properties__" == c || (2 != d.length && (d += ", \n"), d += b + c + " : " + E.__string_rec(a[c],
                        b));
                b = b.substring(1);
                return d + ("\n" + b + "}");
            case "function":
                return "<function>";
            case "string":
                return a;
            default:
                return "" + a
        }
    };
    E.__interfLoop = function(a, b) {
        if (null == a) return !1;
        if (a == b) return !0;
        var c = a.__interfaces__;
        if (null != c)
            for (var d = 0, f = c.length; d < f;) {
                var e = d++,
                    e = c[e];
                if (e == b || E.__interfLoop(e, b)) return !0
            }
        return E.__interfLoop(a.__super__, b)
    };
    E.__instanceof = function(a, b) {
        if (null == b) return !1;
        switch (b) {
            case Id:
                return (a | 0) === a;
            case Ed:
                return "number" == typeof a;
            case Fd:
                return "boolean" == typeof a;
            case String:
                return "string" ==
                    typeof a;
            case Array:
                return a instanceof Array && null == a.__enum__;
            case Jd:
                return !0;
            default:
                if (null != a)
                    if ("function" == typeof b) {
                        if (a instanceof b || E.__interfLoop(E.getClass(a), b)) return !0
                    } else {
                        if ("object" == typeof b && E.__isNativeObj(b) && a instanceof b) return !0
                    }
                else return !1;
                return b == Kd && null != a.__name__ || b == Ld && null != a.__ename__ ? !0 : a.__enum__ == b
        }
    };
    E.__cast = function(a, b) {
        if (E.__instanceof(a, b)) return a;
        throw new m("Cannot cast " + s.string(a) + " to " + s.string(b));
    };
    E.__nativeClassName = function(a) {
        a = E.__toStr.call(a).slice(8, -1);
        return "Object" == a || "Function" == a || "Math" == a || "JSON" == a ? null : a
    };
    E.__isNativeObj = function(a) {
        return null != E.__nativeClassName(a)
    };
    E.__resolveNativeClass = function(a) {
        return Function("return typeof " + a + ' != "undefined" ? ' + a + " : null")()
    };
    var wd = function() {};
    e["js.html._CanvasElement.CanvasUtil"] = wd;
    wd.__name__ = ["js", "html", "_CanvasElement", "CanvasUtil"];
    wd.getContextWebGL = function(a, b) {
        for (var c = 0, d = ["webgl", "experimental-webgl"]; c < d.length;) {
            var f = d[c];
            ++c;
            f = a.getContext(f, b);
            if (null != f) return f
        }
        return null
    };
    var Fa = function(a) {
        if (a instanceof Array && null == a.__enum__) this.a = a, this.byteLength = a.length;
        else {
            this.a = [];
            for (var b = 0; b < a;) this.a[b++] = 0;
            this.byteLength = a
        }
    };
    e["js.html.compat.ArrayBuffer"] = Fa;
    Fa.__name__ = ["js", "html", "compat", "ArrayBuffer"];
    Fa.sliceImpl = function(a, b) {
        var c = new Gd(this, a, null == b ? null : b - a),
            d = new Cd(c.byteLength);
        (new Gd(d)).set(c);
        return d
    };
    Fa.prototype = {
        slice: function(a, b) {
            return new Fa(this.a.slice(a, b))
        },
        __class__: Fa
    };
    var zd = function(a, b, c) {
        this.buf = a;
        this.offset = null == b ? 0 : b;
        this.length =
            null == c ? a.byteLength - this.offset : c;
        if (0 > this.offset || 0 > this.length || this.offset + this.length > a.byteLength) throw new m(ma.OutsideBounds);
    };
    e["js.html.compat.DataView"] = zd;
    zd.__name__ = ["js", "html", "compat", "DataView"];
    zd.prototype = {
        getInt8: function(a) {
            a = this.buf.a[this.offset + a];
            return 128 <= a ? a - 256 : a
        },
        getUint8: function(a) {
            return this.buf.a[this.offset + a]
        },
        getInt16: function(a, b) {
            var c = this.getUint16(a, b);
            return 32768 <= c ? c - 65536 : c
        },
        getUint16: function(a, b) {
            return b ? this.buf.a[this.offset + a] | this.buf.a[this.offset +
                a + 1] << 8 : this.buf.a[this.offset + a] << 8 | this.buf.a[this.offset + a + 1]
        },
        getInt32: function(a, b) {
            var c = this.offset + a,
                d = this.buf.a[c++],
                f = this.buf.a[c++],
                e = this.buf.a[c++],
                c = this.buf.a[c++];
            return b ? d | f << 8 | e << 16 | c << 24 : c | e << 8 | f << 16 | d << 24
        },
        getUint32: function(a, b) {
            var c = this.getInt32(a, b);
            return 0 > c ? c + 4294967296 : c
        },
        getFloat32: function(a, b) {
            return Ea.i32ToFloat(this.getInt32(a, b))
        },
        getFloat64: function(a, b) {
            var c = this.getInt32(a, b),
                d = this.getInt32(a + 4, b);
            return Ea.i64ToDouble(b ? c : d, b ? d : c)
        },
        setInt8: function(a, b) {
            this.buf.a[a +
                this.offset] = 0 > b ? b + 128 & 255 : b & 255
        },
        setUint8: function(a, b) {
            this.buf.a[a + this.offset] = b & 255
        },
        setInt16: function(a, b, c) {
            this.setUint16(a, 0 > b ? b + 65536 : b, c)
        },
        setUint16: function(a, b, c) {
            a += this.offset;
            c ? (this.buf.a[a] = b & 255, this.buf.a[a++] = b >> 8 & 255) : (this.buf.a[a++] = b >> 8 & 255, this.buf.a[a] = b & 255)
        },
        setInt32: function(a, b, c) {
            this.setUint32(a, b, c)
        },
        setUint32: function(a, b, c) {
            a += this.offset;
            c ? (this.buf.a[a++] = b & 255, this.buf.a[a++] = b >> 8 & 255, this.buf.a[a++] = b >> 16 & 255, this.buf.a[a++] = b >>> 24) : (this.buf.a[a++] = b >>> 24,
                this.buf.a[a++] = b >> 16 & 255, this.buf.a[a++] = b >> 8 & 255, this.buf.a[a++] = b & 255)
        },
        setFloat32: function(a, b, c) {
            this.setUint32(a, Ea.floatToI32(b), c)
        },
        setFloat64: function(a, b, c) {
            b = Ea.doubleToI64(b);
            c ? (this.setUint32(a, b.low), this.setUint32(a, b.high)) : (this.setUint32(a, b.high), this.setUint32(a, b.low))
        },
        __class__: zd
    };
    var Ta = function() {};
    e["js.html.compat.Uint8Array"] = Ta;
    Ta.__name__ = ["js", "html", "compat", "Uint8Array"];
    Ta._new = function(a, b, c) {
        if ("number" == typeof a) {
            c = [];
            for (b = 0; b < a;) {
                var d = b++;
                c[d] = 0
            }
            c.byteLength =
                c.length;
            c.byteOffset = 0;
            c.buffer = new Fa(c)
        } else if (E.__instanceof(a, Fa)) null == b && (b = 0), null == c && (c = a.byteLength - b), c = 0 == b ? a.a : a.a.slice(b, b + c), c.byteLength = c.length, c.byteOffset = b, c.buffer = a;
        else if (a instanceof Array && null == a.__enum__) c = a.slice(), c.byteLength = c.length, c.byteOffset = 0, c.buffer = new Fa(c);
        else throw new m("TODO " + s.string(a));
        c.subarray = Ta._subarray;
        c.set = Ta._set;
        return c
    };
    Ta._set = function(a, b) {
        if (E.__instanceof(a.buffer, Fa)) {
            if (a.byteLength + b > this.byteLength) throw new m("set() outside of range");
            for (var c = 0, d = a.byteLength; c < d;) {
                var f = c++;
                this[f + b] = a[f]
            }
        } else if (a instanceof Array && null == a.__enum__) {
            if (a.length + b > this.byteLength) throw new m("set() outside of range");
            c = 0;
            for (d = a.length; c < d;) f = c++, this[f + b] = a[f]
        } else throw new m("TODO");
    };
    Ta._subarray = function(a, b) {
        var c = Ta._new(this.slice(a, b));
        c.byteOffset = a;
        return c
    };
    var tb = function() {};
    e["nicksdk.jsembed.JSEmbedProxy"] = tb;
    tb.__name__ = ["nicksdk", "jsembed", "JSEmbedProxy"];
    tb.get_base = function() {
        return tb.callJSEmbedMethod("baseUrl()")
    };
    tb.callJSEmbedMethod =
        function(a) {
            try {
                var b = tb.eval("eval", ["jsembed." + a]);
                if (null != b) return b
            } catch (c) {
                c instanceof m && (c = c.val)
            }
            return ""
        };
    tb.eval = function(a, b) {
        null == b && (b = []);
        for (var c = window, d = c, f = 0, e = a.split("."); f < e.length;) {
            var g = e[f];
            ++f;
            c = d;
            d = ga.field(c, g)
        }
        return d.apply(c, b)
    };
    var sd = function() {};
    e["s2.client.ClientBootstrap"] = sd;
    sd.__name__ = ["s2", "client", "ClientBootstrap"];
    sd.prototype = {
        __class__: sd
    };
    var ub = function() {
        this.complete = new S;
        this._options = new R;
        r.get_lowMemory() && (B.suffix = "mob")
    };
    e["s2.client.CommonBootstrap"] =
        ub;
    ub.__name__ = ["s2", "client", "CommonBootstrap"];
    ub.__interfaces__ = [sd];
    ub.prototype = {
        start: function() {
            null
        },
        track: function() {},
        __class__: ub
    };
    var ua = function() {};
    e["s2.client.Config"] = ua;
    ua.__name__ = ["s2", "client", "Config"];
    ua.init = function(a, b) {
        null == ua.initialized && (ua.initialized = new Z(!1));
        ua.initialized._value || (a.complete.connect(function() {
            ua.initialized.set__(!0);
            null != b && b()
        }).once(), ua._bootstrap = a, a.start())
    };
    ua.track = function(a) {
        ua._bootstrap.track(a)
    };
    var Zb = function() {
        this._embedTargetBase =
            null;
        this._gameName = this._gameProperty = "";
        ub.call(this)
    };
    e["s2.client.NickBootstrap"] = Zb;
    Zb.__name__ = ["s2", "client", "NickBootstrap"];
    Zb.__super__ = ub;
    Zb.prototype = t(ub.prototype, {
        start: function() {
            var a = new M;
            k._platform.getExternal().get_supported() && (this._embedTargetBase = tb.get_base());
            a.add("xml/config.xml", (null != this._embedTargetBase ? this._embedTargetBase : "") + "xml/config.xml");
            k._platform.loadAssetPack(a).get(z(this, this.onConfigLoaded));
            this.setupBasePaths()
        },
        onConfigLoaded: function(a) {
            a = a.getFile("xml/config.xml");
            this._config = j.parse(a.toString());
            null != this._parser && (this._parser(this._config), this._parser = null);
            a.dispose();
            var a = this._config.elementsNamed("config").next().elementsNamed("tracking").next(),
                b = null != a && "true" == a.get("enabled").toString().toLowerCase();
            this._gameName = a.elementsNamed("gameName").next().firstChild().toString();
            this._gameProperty = null != a.elementsNamed("gameProperty").next() ? a.elementsNamed("gameProperty").next().firstChild().toString() : "";
            this.setupTracking(b);
            a = a.elementsNamed("locale").next();
            if (null != a) {
                if (a.nodeType != j.Document && a.nodeType != j.Element) throw new m("Bad node type, expected Element or Document but found " + a.nodeType);
                a = a.children[0].toString()
            } else a = null;
            this._localizationRegion = a;
            a = null == this._localizationRegion || "" == this._localizationRegion ? "" : "_" + this._localizationRegion;
            o.init(z(this, this.onLocalizationLoaded), new Hc, "strings/strings" + a + ".xml")
        },
        setupTracking: function(a) {
            var b = !1;
            a && k._platform.getExternal().get_supported() && (b = null != window.trackFlashEvent);
            this._externalSupported =
                b
        },
        onLocalizationLoaded: function() {
            this.complete.emit()
        },
        track: function(a) {
            this._externalSupported && k._platform.getExternal().call("trackFlashEvent", [this._gameName, a[0], "true"])
        },
        setupBasePaths: function() {
            var a = new X("^http(s)?://", "i");
            null != this._embedTargetBase && 0 < this._embedTargetBase.length && (a.match(this._embedTargetBase) ? (a = Ad.runJSStatement("window.location.href"), a = a.split("/"), (null == a[a.length - 1] || -1 < a[a.length - 1].indexOf(".")) && a.pop(), a = a.join("/"), a = cb.absoluteToRelative(a, this._embedTargetBase),
                null != a ? (B.relativeBase = a + "assets/", o.relativeBase = a) : (B.externalBase = this._embedTargetBase + "assets/", o.externalBase = this._embedTargetBase)) : (B.relativeBase = this._embedTargetBase + "assets/", o.relativeBase = this._embedTargetBase))
        },
        __class__: Zb
    });
    var Y = function(a) {
        null == a && (a = !1);
        x.call(this);
        this._bScale = a
    };
    e["s2.display.ButtonMode"] = Y;
    Y.__name__ = ["s2", "display", "ButtonMode"];
    Y.__super__ = x;
    Y.prototype = t(x.prototype, {
        get_name: function() {
            return "ButtonMode_13"
        },
        connectToSprite: function() {
            null != this._disposer &&
                this._disposer.dispose();
            this._disposer = new na;
            this._disposer.connect1(this._sprite.get_pointerMove(), z(this, this.onPointerMove));
            this._disposer.connect1(this._sprite.get_pointerOut(), z(this, this.onPointerOut));
            this._bScale && (this._disposer.connect1(this._sprite.get_pointerUp(), z(this, this.onPointerUp)), this._disposer.connect1(this._sprite.get_pointerDown(), z(this, this.onPointerDown)))
        },
        onRemoved: function() {
            null != this._disposer && this._disposer.dispose();
            this._disposer = null;
            k._platform.getMouse().set_cursor(aa.Default)
        },
        onUpdate: function() {
            k._platform.getMouse().get_supported() && this._sprite != this.owner._compMap.Sprite_3 && (this._sprite = this.owner._compMap.Sprite_3, null != this._sprite && this.connectToSprite())
        },
        onPointerMove: function() {
            k._platform.getMouse().set_cursor(aa.Button)
        },
        onPointerOut: function() {
            k._platform.getMouse().set_cursor(aa.Default);
            this._bScale && this.owner._compMap.Sprite_3.setScale(1)
        },
        onPointerDown: function() {
            this._bScale && this.owner._compMap.Sprite_3.setScale(0.9)
        },
        onPointerUp: function() {
            this._bScale &&
                this.owner._compMap.Sprite_3.setScale(1)
        },
        __class__: Y
    });
    var G = function() {};
    e["s2.display.LayoutUtil"] = G;
    G.__name__ = ["s2", "display", "LayoutUtil"];
    G.left = function(a, b, c) {
        null == b && (b = 0);
        var c = null == c ? N.px : N.percent,
            d = G.getSprite(a);
        d.x.set__(0);
        var f = l.getBounds(a),
            e = Math.sqrt(d.getLocalMatrix().m00 * d.getLocalMatrix().m00 + d.getLocalMatrix().m01 * d.getLocalMatrix().m01),
            b = c == N.px ? b : k._platform.getStage().get_width() * b,
            b = db.globalToLocal(a, b, 0, null);
        d.x.set__(b.x * e - f.x);
        return a
    };
    G.right = function(a, b, c) {
        null ==
            b && (b = 0);
        var c = null == c ? N.px : N.percent,
            d = G.getSprite(a);
        d.x.set__(0);
        var f = l.getBounds(a),
            e = Math.sqrt(d.getLocalMatrix().m00 * d.getLocalMatrix().m00 + d.getLocalMatrix().m01 * d.getLocalMatrix().m01),
            b = c == N.px ? k._platform.getStage().get_width() - b : k._platform.getStage().get_width() - k._platform.getStage().get_width() * b,
            b = db.globalToLocal(a, b, 0, null);
        d.x.set__(b.x * e - f.x - f.width);
        return a
    };
    G.top = function(a, b, c) {
        null == b && (b = 0);
        var c = null == c ? N.px : N.percent,
            d = G.getSprite(a);
        d.y.set__(0);
        var f = l.getBounds(a),
            e =
            Math.sqrt(d.getLocalMatrix().m10 * d.getLocalMatrix().m10 + d.getLocalMatrix().m11 * d.getLocalMatrix().m11),
            b = c == N.px ? b : k._platform.getStage().get_height() * b,
            b = db.globalToLocal(a, 0, b, null);
        d.y.set__(b.y * e - f.y);
        return a
    };
    G.bottom = function(a, b, c) {
        null == b && (b = 0);
        var c = null == c ? N.px : N.percent,
            d = G.getSprite(a);
        d.y.set__(0);
        var f = Math.sqrt(d.getLocalMatrix().m10 * d.getLocalMatrix().m10 + d.getLocalMatrix().m11 * d.getLocalMatrix().m11),
            e = l.getBounds(a),
            b = c == N.px ? k._platform.getStage().get_height() - b : k._platform.getStage().get_height() -
            k._platform.getStage().get_height() * b,
            b = db.globalToLocal(a, 0, b, null);
        d.y.set__(b.y * f - e.y - e.height);
        return a
    };
    G.centerX = function(a, b, c) {
        null == b && (b = 0);
        var c = null == c ? N.px : N.percent,
            d = G.getSprite(a);
        d.x.set__(0);
        var f = Math.sqrt(d.getLocalMatrix().m00 * d.getLocalMatrix().m00 + d.getLocalMatrix().m01 * d.getLocalMatrix().m01),
            e = l.getBounds(a),
            b = c == N.px ? 0.5 * k._platform.getStage().get_width() - b : 0.5 * k._platform.getStage().get_width() * b,
            b = db.globalToLocal(a, b, 0, null);
        d.x.set__(Math.round(b.x * f - 0.5 * e.width - e.x));
        return a
    };
    G.centerY = function(a, b, c) {
        null == b && (b = 0);
        var c = null == c ? N.px : N.percent,
            d = G.getSprite(a);
        d.y.set__(0);
        var e = l.getBounds(a),
            h = Math.sqrt(d.getLocalMatrix().m10 * d.getLocalMatrix().m10 + d.getLocalMatrix().m11 * d.getLocalMatrix().m11),
            b = c == N.px ? 0.5 * k._platform.getStage().get_height() - b : 0.5 * k._platform.getStage().get_height() * b,
            b = db.globalToLocal(a, 0, b, null);
        d.y.set__(Math.round(b.y * h - 0.5 * e.height - e.y));
        return a
    };
    G.center = function(a, b, c) {
        null == c && (c = 0);
        null == b && (b = 0);
        G.centerX(a, b);
        return G.centerY(a,
            c)
    };
    G.getSprite = function(a) {
        var b = a._compMap.Sprite_3;
        null == b && a.add(b = new l);
        return b
    };
    var N = e["s2.display.Units"] = {
        __ename__: !0,
        __constructs__: ["px", "percent"]
    };
    N.px = ["px", 0];
    N.px.toString = D;
    N.px.__enum__ = N;
    N.percent = ["percent", 1];
    N.percent.toString = D;
    N.percent.__enum__ = N;
    var bc = function(a) {
        Na.call(this, a);
        this.oneTimeCompleteSig = new S
    };
    e["s2.display.MoviePlayerExt"] = bc;
    bc.__name__ = ["s2", "display", "MoviePlayerExt"];
    bc.__super__ = Na;
    bc.prototype = t(Na.prototype, {
        onUpdate: function(a) {
            var b = null != this._oneshotSprite;
            Na.prototype.onUpdate.call(this, a);
            b && null == this._oneshotSprite && this.oneTimeCompleteSig.emit()
        },
        __class__: bc
    });
    var oa = function(a, b) {
        l.call(this);
        this.left = a;
        this.right = b
    };
    e["s2.display.MultiTextureSprite"] = oa;
    oa.__name__ = ["s2", "display", "MultiTextureSprite"];
    oa.__super__ = l;
    oa.prototype = t(l.prototype, {
        draw: function(a) {
            a.drawTexture(this.left, 0, 0);
            a.drawTexture(this.right, this.left.get_width(), 0)
        },
        getNaturalWidth: function() {
            return this.left.get_width() + this.right.get_width()
        },
        getNaturalHeight: function() {
            return ea.max(this.left.get_height(),
                this.right.get_height())
        },
        __class__: oa
    });
    var Ic = function(a, b, c, d) {
        l.call(this);
        this.disablePixelSnapping();
        this._texture = a;
        this._nSrcLeftWidth = b;
        this._nSrcRightWidth = c;
        this._nTotalWidth = d;
        this._nHeight = this._texture.get_height()
    };
    e["s2.display.Slice3"] = Ic;
    Ic.__name__ = ["s2", "display", "Slice3"];
    Ic.__super__ = l;
    Ic.prototype = t(l.prototype, {
        draw: function(a) {
            a.drawSubTexture(this._texture, 0, 0, 0, 0, this._nSrcLeftWidth, this._texture.get_height());
            for (var b = this._texture.get_width() - this._nSrcLeftWidth - this._nSrcRightWidth,
                    c = 0, d = Math.ceil((this._nTotalWidth - this._nSrcLeftWidth - this._nSrcRightWidth) / b); c < d;) {
                var e = c++;
                a.drawSubTexture(this._texture, e * b + this._nSrcLeftWidth, 0, this._nSrcLeftWidth, 0, b, this._texture.get_height())
            }
            a.drawSubTexture(this._texture, this._nTotalWidth - this._nSrcRightWidth, 0, this._texture.get_width() - this._nSrcRightWidth, 0, this._nSrcRightWidth, this._texture.get_height())
        },
        getNaturalWidth: function() {
            return this._nTotalWidth
        },
        getNaturalHeight: function() {
            return this._nHeight
        },
        __class__: Ic
    });
    var B = function(a,
        b) {
        this.loadedBytes = this.totalBytes = 0;
        this.ready = !1;
        this._retryCount = 0;
        this.releaseCacheOnRemove = this._isLoading = !1;
        this._nLoaded = this._nNeeded = 0;
        x.call(this);
        this.progressed = new mb;
        this.success = new S;
        this._disposer = new na;
        this._suffix = null != b ? b : B.suffix;
        this._manifests = new R;
        this._packsReady = new R;
        this._packsLoading = [];
        this._queue = [];
        this.autoCacheResults = !0;
        this.releaseCacheOnRemove = !1;
        this._nLoaded = this._nNeeded = 0;
        if (null != a)
            for (var c = 0, d = a.length; c < d;) {
                var e = c++;
                this.require(a[e])
            }
    };
    e["s2.loading.Assets"] =
        B;
    B.__name__ = ["s2", "loading", "Assets"];
    B.getManifest = function(a) {
        var b = null;
        null != B.suffix && M.exists(a + "_" + B.suffix) && M.fromAssets(a + "_" + B.suffix);
        b = M.fromAssets(a);
        return B.setupManifest(b)
    };
    B.setupManifest = function(a) {
        null == a && (a = new M);
        null != B.externalBase ? a.set_remoteBase(B.externalBase) : null != B.relativeBase && a.set_localBase(B.relativeBase);
        return a
    };
    B.getCached = function(a) {
        null == B._cache && (B._cache = new R);
        return B._cache.exists(a) ? B._cache.get(a) : null
    };
    B.cache = function(a, b) {
        null == B._cache && (B._cache =
            new R);
        B._cache.set(a, b)
    };
    B.release = function(a) {
        if (null != B._cache && B._cache.exists(a)) {
            var b = B._cache.get(a);
            B._cache.remove(a);
            return b
        }
        return new Jc
    };
    B.__super__ = x;
    B.prototype = t(x.prototype, {
        get_name: function() {
            return "Assets_12"
        },
        require: function(a) {
            var b;
            b = null == this._suffix ? "" : "_" + this._suffix;
            if (M.exists(a + b)) this.addManifest(M.fromAssets(a + b), a);
            else if (M.exists(a)) this.addManifest(M.fromAssets(a), a);
            else throw new m("The directory " + a + " does not exist in the manifest." + (null == this._suffix ?
                "" : " Also attempted path " + a + b));
            return this
        },
        addManifest: function(a, b) {
            if (this._manifests.exists(b)) throw new m("Asset key for manifest " + b + " already exists.");
            this._nNeeded++;
            null != B.externalBase ? a.set_remoteBase(B.externalBase) : null != B.relativeBase && a.set_localBase(B.relativeBase);
            this._manifests.set(b, a);
            this._queue.push(b);
            return this
        },
        load: function() {
            this.loadedBytes = this.totalBytes = 0;
            this.ready = !1;
            for (var a = this._manifests.iterator(); a.hasNext();)
                for (var b = a.next(), b = w.iter(b._entries); b.hasNext();) this.totalBytes +=
                    b.next().bytes;
            this.loadManifest(this._queue.shift())
        },
        unload: function(a) {
            eb.has(this._queue, a) && w.remove(this._queue, a);
            var b = this.get(a);
            B.release(a);
            this._manifests.remove(a);
            b.dispose()
        },
        loadManifest: function(a) {
            var b = B.getCached(a);
            if (null != b) {
                var c = b.get_manifest();
                this._manifests.set(a, c);
                this.onSuccess(b)
            } else {
                var d = k.loadAssetPack(this._manifests.get(a));
                if (d.hasResult) this.onSuccess(d.get_result());
                else this._isLoading = !0, this._packsLoading.push(d), b = d.success.connect(z(this, this.onSuccess)).once(),
                    c = d.error.connect(z(this, this.onError)), d = d.progressChanged.connect(z(this, this.onProgress)), this._currentManifest = a, this._disposer.add(b), this._disposer.add(c), this._disposer.add(d)
            }
        },
        onProgress: function() {
            for (var a = 0, b = 0, c = this._packsLoading.length; b < c;) var d = b++,
                a = a + this._packsLoading[d]._progress;
            for (b = this._packsReady.iterator(); b.hasNext();)
                for (c = b.next().get_manifest().iterator(); c.hasNext();) d = c.next(), a += d.bytes;
            this.progressed.emit(a, this.totalBytes);
            this.loadedBytes = a
        },
        onRemoved: function() {
            if (this.releaseCacheOnRemove)
                for (var a =
                        this._manifests.keys(); a.hasNext();) {
                    var b = a.next();
                    B.release(b)
                }
            this._disposer.dispose();
            this.ready = this._isLoading = !1;
            this._packsLoading = [];
            this._packsReady = new R
        },
        get: function(a) {
            if (this.ready) {
                var b = this._packsReady.get(a + (null == this._suffix ? "" : "_" + this._suffix));
                if (null != b) return b;
                b = this._packsReady.get(a);
                if (null != b) return b;
                throw new m("Asset pack " + a + " not part of this asset requirement.");
            }
            throw new m("Can't get an asset pack before all packs are loaded and ready.");
        },
        onSuccess: function(a) {
            this._retryCount =
                0;
            this._disposer.dispose();
            this._nLoaded++;
            this._manifests.keys();
            for (var b = this._manifests.keys(); b.hasNext();) {
                var c = b.next();
                this._manifests.get(c) == a.get_manifest() && (this.autoCacheResults && B.cache(c, a), this._packsReady.set(c, a))
            }
            this._nLoaded == this._nNeeded ? (this.progressed.emit(this.totalBytes, this.totalBytes), this._isLoading = !1, this.ready = !0, this.success.emit()) : (this._packsLoading.shift(), this.loadManifest(this._queue.shift()))
        },
        onError: function(a) {
            console.log(a);
            3 < this._retryCount ? alert(a +
                "\nAttempted retries: " + this._retryCount) : (this._disposer.dispose(), this._retryCount++, this.loadManifest(this._currentManifest))
        },
        __class__: B
    });
    var Jc = function() {};
    e["s2.loading.NullAssetPack"] = Jc;
    Jc.__name__ = ["s2", "loading", "NullAssetPack"];
    Jc.__interfaces__ = [Mb];
    Jc.prototype = {
        getTexture: function() {
            return null
        },
        getSound: function() {
            return null
        },
        getFile: function() {
            return null
        },
        dispose: function() {},
        get_manifest: function() {
            return null
        },
        __class__: Jc
    };
    var td = function() {};
    e["s2.localization.LocaleParser"] =
        td;
    td.__name__ = ["s2", "localization", "LocaleParser"];
    td.prototype = {
        __class__: td
    };
    var Hc = function() {};
    e["s2.localization.DParser"] = Hc;
    Hc.__name__ = ["s2", "localization", "DParser"];
    Hc.__interfaces__ = [td];
    Hc.prototype = {
        parseFonts: function(a) {
            var b = new M,
                c = [];
            if (E.__instanceof(a, j))
                for (a = a.firstElement().elements(); a.hasNext();)
                    for (var d = a.next().elements(); d.hasNext();) {
                        var e = d.next().get("font"); - 1 == c.indexOf(e) && (b.add(e + ".fnt", e + ".fnt"), c.push(e))
                    }
            return b
        },
        parseDefinitions: function(a) {
            for (var b = new M,
                    c = a.get_manifest().iterator(); c.hasNext();) {
                var d = c.next();
                b.add(d.url, d.name);
                var e = a.getFile(d.name).toString(),
                    h = 0;
                do {
                    var g = e.indexOf('file="', h),
                        h = -1; - 1 < g && (g += 6, h = e.indexOf('"', g), g = e.substring(g, h), b.add(g.split(".")[0], g))
                } while (-1 < h);
                a.getFile(d.name).dispose()
            }
            return b
        },
        parseStrings: function(a, b) {
            var c = new R,
                d = new R;
            if (E.__instanceof(a, j))
                for (var e = a.firstElement().elements(); e.hasNext();) {
                    var h = e.next(),
                        g = h.elements();
                    if (h.nodeType != j.Element) throw new m("Bad node type, expected Element but found " +
                        h.nodeType);
                    for (h = h.nodeName; g.hasNext();) {
                        var i = g.next(),
                            k = i.get("font"),
                            l;
                        l = (null != ta[k] ? d.existsReserved(k) : d.h.hasOwnProperty(k)) ? null != ta[k] ? d.getReserved(k) : d.h[k] : (new ob(b, k)).disposeFiles();
                        var n;
                        n = null == i.get("fontScale") ? 1 : s.parseFloat(i.get("fontScale"));
                        var o = h + ".";
                        if (i.nodeType != j.Element) throw new m("Bad node type, expected Element but found " + i.nodeType);
                        var o = o + i.nodeName,
                            q = l,
                            r = s.parseFloat(i.get("lineHeight"));
                        if (i.nodeType != j.Document && i.nodeType != j.Element) throw new m("Bad node type, expected Element or Document but found " +
                            i.nodeType);
                        i = {
                            id: o,
                            font: q,
                            lineHeight: r,
                            scale: n,
                            text: i.children[0].get_nodeValue(),
                            offsetX: null == i.get("offsetX") ? 0 : s.parseFloat(i.get("offsetX")),
                            offsetY: null == i.get("offsetY") ? 0 : s.parseFloat(i.get("offsetY"))
                        };
                        null != ta[k] ? d.setReserved(k, l) : d.h[k] = l;
                        c.set(i.id, i)
                    }
                }
            return c
        },
        __class__: Hc
    };
    var o = function() {};
    e["s2.localization.Locale"] = o;
    o.__name__ = ["s2", "localization", "Locale"];
    o.init = function(a, b, c, d) {
        null == d && (d = "assets/fonts");
        null == c && (c = "xml/translation.xml");
        o._formats = new R;
        o._xmlPath = c;
        o._fontDirectory =
            d;
        o._onReady = a;
        o._parser = b;
        a = new M;
        b = c;
        null != o.externalBase ? b = o.externalBase + o._xmlPath : null != o.relativeBase && (b = o.relativeBase + o._xmlPath);
        a.add(c, b);
        k._platform.loadAssetPack(a).get(o.onXmlSuccess)
    };
    o.getField = function(a, b, c) {
        null == b && (b = 0);
        r.get_mobile() && o._formats.exists(a + "_mob") && (a += "_mob");
        if (o._formats.exists(a)) {
            var a = o._formats.get(a),
                d = new xb(a.font, a.text);
            d.wrapWidth.set__(b / a.scale);
            d.set_align(c);
            d.setScale(a.scale);
            d.anchorX.set__(-a.offsetX);
            d.anchorY.set__(-a.offsetY);
            d.set_pixelSnapping(!1);
            return d
        }
        throw new m("No string id : '" + a + "' exists.");
    };
    o.onXmlSuccess = function(a) {
        a = a.getFile(o._xmlPath);
        o._x = j.parse(a.toString());
        a.dispose();
        a = o.prepManifest(o._parser.parseFonts(o._x));
        k._platform.loadAssetPack(a).get(o.onDefinitionLoadSuccess)
    };
    o.onDefinitionLoadSuccess = function(a) {
        a = o.prepManifest(o._parser.parseDefinitions(a));
        k._platform.loadAssetPack(a).get(o.onAtlasLoadSuccess)
    };
    o.prepManifest = function(a) {
        null != o.externalBase ? a.set_remoteBase(o.externalBase + o._fontDirectory) : null != o.relativeBase ?
            a.set_localBase(o.relativeBase + o._fontDirectory) : a.set_localBase(o._fontDirectory);
        return a
    };
    o.onAtlasLoadSuccess = function(a) {
        o._formats = o._parser.parseStrings(o._x, a);
        for (a = o._formats.iterator(); a.hasNext();) {
            var b = a.next(),
                c = y.replace(b.text, "<br>", "\n");
            c != b.text && (b.text = c)
        }
        o.loading = !1;
        null != o._onReady && o._onReady.apply(null, []);
        o._onReady = null
    };
    var Xb = function(a, b, c) {
        this._time = a;
        this._tilesWide = b;
        this._tilesHigh = c;
        this._holder = new g
    };
    e["s2.scene.BoxTransition"] = Xb;
    Xb.__name__ = ["s2", "scene",
        "BoxTransition"
    ];
    Xb.__super__ = Ra;
    Xb.prototype = t(Ra.prototype, {
        init: function(a, b, c) {
            Ra.prototype.init.call(this, a, b, c);
            this._elapsed = 0;
            this._texture = k._platform.getRenderer().createTexture(k._platform.getStage().get_width(), k._platform.getStage().get_height());
            l.render(b, this._texture.get_graphics());
            this._parallel = new hb;
            for (var b = this._texture.split(this._tilesWide, this._tilesHigh), c = 0, d = b.length; c < d;) {
                var e = c++,
                    h = b[e],
                    e = new q(h),
                    h = (new g).add(e.centerAnchor().setXY(h.get_x() + 0.5 * h.get_width(), h.get_y() +
                        0.5 * h.get_height()));
                this._parallel.add(new U(e.alpha, 0, 0.5 * Math.random()));
                this._parallel.add(new U(e.scaleX, 2, 0.5 * Math.random()));
                this._parallel.add(new U(e.scaleY, 2, 0.5 * Math.random()));
                this._holder.addChild(h)
            }
            this._holder.add(new Ma);
            this._holder.add(new Ma).getComponent("Script_11").run(this._parallel);
            a.owner.addChild(this._holder)
        },
        update: function() {
            return 0 <= this._parallel.update(0, this._holder)
        },
        complete: function() {
            this._holder.dispose();
            this._texture.dispose()
        },
        __class__: Xb
    });
    var wa = function(a) {
        null ==
            a && (a = !0);
        this._wait = !1;
        Ha.call(this);
        this.waitForTransitions = a
    };
    e["s2.scene.SceneLoader"] = wa;
    wa.__name__ = ["s2", "scene", "SceneLoader"];
    wa.__super__ = Ha;
    wa.prototype = t(Ha.prototype, {
        load: function() {
            this._wait = !1;
            this._assets.load()
        },
        setNextScene: function(a, b, c) {
            null == b && (b = !0);
            null != this._progressBind && (this._progressBind.dispose(), this._loadCompleteBind.dispose());
            this.nextScene = a;
            this._unwind = b;
            this._assets = new B(a.requiredPacks);
            this._transition = null == c ? u.getTransition() : c;
            this._progressBind = this._assets.progressed.connect(z(this,
                this.onProgress));
            this._loadCompleteBind = this._assets.success.connect(z(this, this.onLoadSuccess));
            return this
        },
        onProgress: function(a, b) {
            var c = a / b;
            this.owner.add(new fa(13369344, k._platform.getStage().get_width(), k._platform.getStage().get_height()));
            null != this.owner.firstChild && this.owner.firstChild.dispose();
            this.owner.addChild((new g).add(new fa(16777215, c * k._platform.getStage().get_width(), k._platform.getStage().get_height())))
        },
        onLoadSuccess: function() {
            this._progressBind.dispose();
            this._loadCompleteBind.dispose();
            this.nextScene.injectAssets(this._assets);
            this._assets = null;
            null != u.director._transitor && this.waitForTransitions ? this._wait = !0 : this.progressToNextScene()
        },
        onUpdate: function() {
            this._wait && null == u.director._transitor && this.progressToNextScene()
        },
        progressToNextScene: function() {
            this._unwind ? u.director.unwindToScene((new g).add(this.nextScene), this._transition) : (u.director.popScene(), u.director.pushScene((new g).add(this.nextScene), this._transition));
            this._transition = null;
            this._wait = !1
        },
        __class__: wa
    });
    var Yb = function(a) {
        wa.call(this);
        this._pack = a
    };
    e["s2.scene.PreloadScene"] = Yb;
    Yb.__name__ = ["s2", "scene", "PreloadScene"];
    Yb.__super__ = wa;
    Yb.prototype = t(wa.prototype, {
        onAdded: function() {
            wa.prototype.onAdded.call(this);
            this._aSequences = [];
            this._aSlices = [];
            this._aArmAniValues = [];
            this._aOrder = [];
            this._nPercentageLeft = 1;
            this._bSliceAnimating = !1;
            this._container = (new g).add(new l);
            this._backing = (new g).add(new oa(this._pack.getTexture("preload/bg1"), this._pack.getTexture("preload/bg2")));
            this._container.addChild(this._backing);
            this.createPizzaSlices();
            for (var a = 0, b = this._aSlices.length; a < b;) this._container.addChild(this._aSlices[a++]);
            a = this._pack.getTexture("preload/arm");
            this._arm = (new g).add(new l).addChild((new g).add((new q(a)).centerAnchor()));
            this._arm._compMap.Sprite_3.set_visible(!1);
            this._container.addChild(this._arm);
            this.setArmAnimationVars();
            this._armHeight = s["int"](a.get_height() / 2);
            a = 0;
            for (b = this._aSlices.length; a < b;) this._aOrder.push(a++);
            this.shuffleArrays();
            this._loading = (new g).add((new q(this._pack.getTexture("preload/loading"))).setXY(950,
                615));
            this._container.addChild(this._loading);
            a = this.owner._compMap.Script_11;
            null == a && (a = new Ma, this.owner.add(a));
            this.owner.addChild(this._container);
            this._resizeHandle = k._platform.getStage().resize.connect(z(this, this.onResize));
            this.onResize()
        },
        createPizzaSlices: function() {
            this._aSlices.push((new g).add((new q(this._pack.getTexture("preload/slice1"))).setXY(552, 128)));
            this._aSlices.push((new g).add((new q(this._pack.getTexture("preload/slice2"))).setXY(684, 136)));
            this._aSlices.push((new g).add((new q(this._pack.getTexture("preload/slice3"))).setXY(687,
                259)));
            this._aSlices.push((new g).add((new q(this._pack.getTexture("preload/slice4"))).setXY(686, 393)));
            this._aSlices.push((new g).add((new q(this._pack.getTexture("preload/slice5"))).setXY(613, 394)));
            this._aSlices.push((new g).add((new q(this._pack.getTexture("preload/slice6"))).setXY(454, 392)));
            this._aSlices.push((new g).add((new q(this._pack.getTexture("preload/slice7"))).setXY(422, 322)));
            this._aSlices.push((new g).add((new q(this._pack.getTexture("preload/slice8"))).setXY(429, 163)))
        },
        setArmAnimationVars: function() {
            this._aArmAniValues.push(new Ga(1, -156, 726, -78));
            this._aArmAniValues.push(new Ga(-1, -174, 873, -38));
            this._aArmAniValues.push(new Ga(1, 176, 810, 79));
            this._aArmAniValues.push(new Ga(1, -17, 963, 758));
            this._aArmAniValues.push(new Ga(1, 9, 763, 853));
            this._aArmAniValues.push(new Ga(-1, 10, 473, 814));
            this._aArmAniValues.push(new Ga(1, -4, 553, 703));
            this._aArmAniValues.push(new Ga(-1, 116, 344, 62))
        },
        shuffleArrays: function() {
            for (var a = 0, b = a = 0, c = 2 * this._aOrder.length; b < c;) b++, a = s["int"](Math.random() * this._aOrder.length), a = this._aOrder.splice(a, 1).pop(),
                this._aOrder.push(a)
        },
        onResize: function() {
            var a = Math.max(k._platform.getStage().get_width() / 1366, k._platform.getStage().get_height() / 768),
                b = 1366 * a,
                c = 768 * a;
            this._container._compMap.Sprite_3.setScale(a).setXY(0.5 * (k._platform.getStage().get_width() - b), 0.5 * (k._platform.getStage().get_height() - c));
            G.bottom(G.right(this._loading, 20), 20)
        },
        onProgress: function(a, b) {
            this._nPercentageLeft = 1 - ea.clamp(a / b, 0, 1)
        },
        onUpdate: function(a) {
            wa.prototype.onUpdate.call(this, a);
            this._bSliceAnimating || this._aOrder.length >
                Math.ceil(7 * this._nPercentageLeft) && this.grabSlice()
        },
        onRemoved: function() {
            wa.prototype.onRemoved.call(this);
            this._resizeHandle.dispose()
        },
        grabSlice: function() {
            var a = this;
            this._bSliceAnimating = !0;
            var b = this._aOrder.pop(),
                c = this._aSlices[b]._compMap.Sprite_3,
                b = this._aArmAniValues[b],
                d;
            d = 683 < b.y ? 1366 + this._armHeight : -this._armHeight;
            var e = this._arm._compMap.Sprite_3;
            e.scaleX.set__(b.scaleX);
            e.x.set__(b.x);
            e.y.set__(d);
            e.rotation.set__(b.rotation);
            e.set_visible(!0);
            var h = Math.abs((b.y - d) / 3415),
                g;
            g = 0 <
                d ? 1366 : -c.getNaturalHeight();
            var i = Math.abs((g - c.y._value) / 3415);
            this.owner._compMap.Script_11.run(new ba([new U(e.y, b.y, h), new hb([new U(e.y, d, h), new U(c.y, g, i)]), new T(function() {
                0 == a._aOrder.length ? a.noSlicesLeft() : a._bSliceAnimating = !1
            })]))
        },
        onLoadSuccess: function() {},
        noSlicesLeft: function() {
            wa.prototype.onLoadSuccess.call(this)
        },
        __class__: Yb
    });
    var Ga = function(a, b, c, d) {
        this.rotation = this.x = this.y = 0;
        this.scaleX = 1;
        this.scaleX = a;
        this.rotation = b;
        this.x = c;
        this.y = d
    };
    e["s2.scene.ArmValues"] = Ga;
    Ga.__name__ = ["s2", "scene", "ArmValues"];
    Ga.prototype = {
        __class__: Ga
    };
    var u = function() {};
    e["s2.scene.Scenes"] = u;
    u.__name__ = ["s2", "scene", "Scenes"];
    u.init = function(a) {
        u.director = new Cc;
        u.shown = new S;
        k.root.addChild((new g).add(u.director), !1);
        u.setPreloadScene(null != a ? a : new wa)
    };
    u.setPreloadScene = function(a) {
        u.preloadScene = a
    };
    u["goto"] = function(a, b, c) {
        null == b && (b = u.getTransition());
        var d = Ja.getClassName(a);
        if (!c)
            for (var c = 0, e = u.director.scenes; c < e.length;) {
                var h = e[c];
                ++c;
                for (var g = h.firstComponent; null != g;) {
                    if (E.__instanceof(g,
                            a) && Ja.getClassName(null == g ? null : E.getClass(g)) == d) {
                        u.director.unwindToScene(h, b);
                        return
                    }
                    g = g.next
                }
            }
        a = u.checkForPreload(Ja.createInstance(a, []), !0, b);
        u.director.unwindToScene(a, b)
    };
    u.checkForPreload = function(a, b, c) {
        null == b && (b = !0);
        null != u._shownBind && u._shownBind.dispose();
        u._shownBind = a.shown.connect(function() {
            u.shown.emit()
        });
        u._shownBind.once();
        if (E.__instanceof(a, va)) {
            var d;
            d = E.__cast(a, va).requiredPacks;
            for (var e = 0; e < d.length;) {
                var h = d[e];
                ++e;
                if (null == B.getCached(h)) return u.preloadScene.setNextScene(E.__cast(a,
                    va), b, c), u.preloadScene.load(), (new g).add(u.preloadScene)
            }
            b = new B(d);
            b.load();
            E.__cast(a, va).injectAssets(b)
        }
        return (new g).add(a)
    };
    u.push = function(a, b) {
        null == b && (b = u.getTransition());
        var c = u.checkForPreload(Ja.createInstance(a, []), !1, b);
        u.director.pushScene(c, b)
    };
    u.defaultTransition = function(a) {
        u._defaultTransition = a
    };
    u.getTransition = function() {
        return u._defaultTransition
    };
    var Hb = function(a, b) {
        null == b && (b = 1);
        this._sound = a;
        this._volume = b;
        this._elapsed = 0
    };
    e["s2.script.PlaySound"] = Hb;
    Hb.__name__ = ["s2",
        "script", "PlaySound"
    ];
    Hb.__interfaces__ = [Da];
    Hb.prototype = {
        update: function(a) {
            null == this._playback ? (this._playback = this._sound.play(this._volume), this._elapsed = 0) : this._elapsed += a;
            return this._playback.get_complete().get__() ? (this._playback = null, 0) : -1
        },
        __class__: Hb
    };
    var Pc = function(a, b, c, d) {
        this.standardWidth = a;
        this.standardHeight = b;
        this.newWidth = c;
        this.newHeight = d;
        this.scaleX = c / a;
        this.scaleY = d / b;
        this.minScale = Math.min(this.scaleX, this.scaleY);
        this.maxScale = Math.max(this.scaleX, this.scaleY)
    };
    e["s2.util.Coords"] =
        Pc;
    Pc.__name__ = ["s2", "util", "Coords"];
    Pc.prototype = {
        __class__: Pc
    };
    var Aa = function() {};
    e["s2.util.FSUtils"] = Aa;
    Aa.__name__ = ["s2", "util", "FSUtils"];
    Aa.makeButton = function(a, b, c, d) {
        null == d && (d = !1);
        var e = o.getField(a),
            h = e.getNaturalWidth() * e.scaleX._value,
            i = e.getNaturalHeight() * e.scaleY._value,
            j;
        j = null == b ? null : new q(b);
        var k = h + 55,
            a = c.get_height();
        null != b && (k += b.get_width() + 9);
        c = new Ic(c, 10, 17, k);
        null == b ? (e.x.set__((k - h) / 2), e.y.set__((c.getNaturalHeight() - i) / 2)) : d ? (j.x.set__(26), j.y.set__((c.getNaturalHeight() -
            b.get_height()) / 2), e.x.set__(k - h - 29), e.y.set__((c.getNaturalHeight() - i) / 2)) : (e.x.set__(26), e.y.set__((c.getNaturalHeight() - i) / 2), j.x.set__(k - b.get_width() - 29), j.y.set__((c.getNaturalHeight() - b.get_height()) / 2));
        d = (new g).add(new l).add(new Y(!0)).addChild((new g).add(c)).addChild((new g).add(e));
        h = c.x;
        h.set__(h._value - k / 2);
        c = c.y;
        c.set__(c._value - a / 2);
        c = e.x;
        c.set__(c._value - k / 2);
        e = e.y;
        e.set__(e._value - a / 2);
        null != b && (d.addChild((new g).add(j)), b = j.x, b.set__(b._value - k / 2), b = j.y, b.set__(b._value - a / 2));
        return d
    };
    var cb = function() {};
    e["s2.util.PathUtil"] = cb;
    cb.__name__ = ["s2", "util", "PathUtil"];
    cb.absoluteToRelative = function(a, b) {
        console.log("Start Path: " + a + " - end path: " + b);
        if (cb.sameDomain(a, b)) {
            var c = y.replace(y.replace(a, "http://", ""), "https://", "").split("/"),
                d = y.replace(y.replace(b, "http://", ""), "https://", "").split("/");
            c.shift();
            d.shift();
            "" == c[c.length - 1] && c.pop();
            for (var e = 0, g = Math.floor(Math.min(c.length, d.length)); e++ < g;) c[0] == d[0] ? (c.splice(0, 1), d.splice(0, 1)) : e = g + 1;
            g = "";
            for (e = c.length; 0 <
                e--;) g += "../";
            console.log("Relative path: " + g + d.join("/"));
            return g + d.join("/")
        }
        return null
    };
    cb.sameDomain = function(a, b) {
        var c = cb.getHost(a),
            d = cb.getHost(b);
        return null != c && null != d && c == d ? !0 : !1
    };
    cb.getHost = function(a) {
        return y.startsWith(a, "http://") || y.startsWith(a, "https://") ? y.replace(y.replace(a, "http://", ""), "https://", "").split("/")[0] : null
    };
    var db = function() {};
    e["s2.util.Positioning"] = db;
    db.__name__ = ["s2", "util", "Positioning"];
    db.globalToLocal = function(a, b, c, d) {
        a = a._compMap.Sprite_3;
        null == d &&
            (d = new za(b, c));
        null != a && (a.getViewMatrix().inverseTransform(b, c, d), d.x -= a.anchorX._value, d.y -= a.anchorY._value);
        return d
    };
    var v = function() {};
    e["s2.util.ScoreManager"] = v;
    v.__name__ = ["s2", "util", "ScoreManager"];
    v.reset = function() {
        v.set_score(0);
        v.levelNum = 1;
        v.set_curScore(0);
        v.goodPizza = 0
    };
    v.set_curScore = function(a) {
        v.curScore = 42E7 < a ? 42E7 : a;
        return v.curScore
    };
    v.get_score = function() {
        var a = 42E7 - v.score;
        return a = a < v.curScore ? 42E7 : v.score + v.curScore
    };
    v.set_score = function(a) {
        v.score = 42E7 < a ? 42E7 : a;
        v.set_curScore(0);
        return v.get_score()
    };
    v.rollIntoTotal = function() {
        var a = v;
        a.set_score(a.get_score() + v.curScore);
        v.set_curScore(0);
        v.goodPizza = 0
    };
    var r = function() {};
    e["s2.util.Sniffer"] = r;
    r.__name__ = ["s2", "util", "Sniffer"];
    r.init = function() {
        r._userAgent = window.navigator.userAgent;
        r._devicePixelRatio = window.devicePixelRatio;
        r._uaLower = r._userAgent.toLowerCase();
        var a = L.fromBrowser().query;
        r._nickApp = null != ta.apiKey ? a.existsReserved("apiKey") : a.h.hasOwnProperty("apiKey");
        r._iOSTablet = r.test("iPad");
        r._iOSPocket = r.test("iPod") ||
            r.test("iPhone");
        r._iOSChrome = r.test("CriOS");
        r._iOS = r._iOSPocket || r._iOSTablet;
        r._silk = r.test("Silk");
        r._kindle = r.test("Silk") || "amazon" == (null != ta.partner ? a.getReserved("partner") : a.h.partner);
        a = ["Mini", "Mobile", "Phone", "Tablet"];
        a.concat(["Android", "iOS"]);
        for (var b = 0; b < a.length;) {
            var c = a[b];
            ++b;
            if (r.test(c.toLowerCase(), !1)) {
                r._mobile = !0;
                break
            }
        }
        a = ["ARM", "BlackBerry", "Palm", "webOS"];
        for (b = 0; b < a.length;)
            if (c = a[b], ++b, r.test(c)) {
                r._mobile = !0;
                break
            }
        r._android = r.test("Android", !1);
        r._androidTablet =
            r._android && !r.test("Mobile", !1);
        r._androidPocket = r._android && r.test("Mobile", !1);
        r._tablet = r._androidTablet || r._iOSTablet || r._kindle || r.test("ARM");
        a = k._platform.getStage().get_width() * k._platform.getStage().get_height();
        r._lowMemory = (706560 >= a || (r._iOSTablet || r._iOSPocket) && 2 > r._devicePixelRatio) && r._mobile;
        r._desktop = r.test("Macintosh") || r.test("Linux") || r.test("Windows") && !r._mobile;
        r._inited = !0
    };
    r.get_mobile = function() {
        r.assureInited();
        return r._mobile
    };
    r.get_lowMemory = function() {
        r.assureInited();
        return r._lowMemory
    };
    r.assureInited = function() {
        r._inited || r.init()
    };
    r.test = function(a, b) {
        null == b && (b = !0);
        return b ? 0 <= r._userAgent.indexOf(a) : 0 <= r._uaLower.indexOf(a.toLowerCase())
    };
    var L = function(a) {
        null == L._parts && (L._parts = "source,protocol,authority,userInfo,user,password,host,port,relative,path,directory,file,query,anchor".split(","));
        L._parts;
        this.url = a;
        this.query = new R;
        var b = new X("^(?:(?![^:@]+:[^:@/]*@)([^:/?#.]+):)?(?://)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:/?#]*)(?::(\\d*))?)(((/(?:[^?#](?![^?#/]*\\.[^?#/.]+(?:[?#]|$)))*/?)?([^?#/]*))(?:\\?([^#]*))?(?:#(.*))?)",
            "");
        b.match(a);
        for (var a = 0, c = L._parts.length; a < c;) {
            var d = a++,
                e = b.matched(d);
            if (null != e)
                if ("query" != L._parts[d]) this[L._parts[d]] = e;
                else
                    for (var d = e.split("&"), e = 0, g = d.length; e < g;) {
                        var i = e++,
                            i = d[i].split("=");
                        this.query.set(i[0], i[1])
                    }
        }
    };
    e["s2.util.URLParser"] = L;
    L.__name__ = ["s2", "util", "URLParser"];
    L.init = function() {
        null == L._parts && (L._parts = "source,protocol,authority,userInfo,user,password,host,port,relative,path,directory,file,query,anchor".split(","));
        return L._parts
    };
    L.parse = function(a) {
        null ==
            L._parts && (L._parts = "source,protocol,authority,userInfo,user,password,host,port,relative,path,directory,file,query,anchor".split(","));
        L._parts;
        return new L(a)
    };
    L.fromBrowser = function() {
        return L.parse(s.string(window.location))
    };
    L.prototype = {
        toString: function() {
            null == L._parts && (L._parts = "source,protocol,authority,userInfo,user,password,host,port,relative,path,directory,file,query,anchor".split(","));
            L._parts;
            for (var a = "For Url -> " + this.url + "\n", b = 0, c = L._parts.length; b < c;) var d = b++,
                a = a + (L._parts[d] +
                    ": " + s.string(ga.field(this, L._parts[d])) + (d == L._parts.length - 1 ? "" : "\n"));
            return a
        },
        __class__: L
    };
    var Ad = function() {};
    e["s2.util.Utils"] = Ad;
    Ad.__name__ = ["s2", "util", "Utils"];
    Ad.runJSStatement = function(a) {
        return k._platform.getExternal().call("eval", ["(function () {return " + a + ";})()"])
    };
    var Bd, Hd = 0;
    e.Math = Math;
    String.prototype.__class__ = e.String = String;
    String.__name__ = ["String"];
    e.Array = Array;
    Array.__name__ = ["Array"];
    Date.prototype.__class__ = e.Date = Date;
    Date.__name__ = ["Date"];
    var Id = e.Int = {
            __name__: ["Int"]
        },
        Jd = e.Dynamic = {
            __name__: ["Dynamic"]
        },
        Ed = e.Float = Number;
    Ed.__name__ = ["Float"];
    var Fd = e.Bool = Boolean;
    Fd.__ename__ = ["Bool"];
    var Kd = e.Class = {
            __name__: ["Class"]
        },
        Ld = {},
        ta = {},
        Cd = Function("return typeof ArrayBuffer != 'undefined' ? ArrayBuffer : null")() || Fa;
    null == Cd.prototype.slice && (Cd.prototype.slice = Fa.sliceImpl);
    Function("return typeof DataView != 'undefined' ? DataView : null")();
    var Gd = Function("return typeof Uint8Array != 'undefined' ? Uint8Array : null")() || Ta._new;
    j.Element = 0;
    j.PCData = 1;
    j.CData =
        2;
    j.Comment = 3;
    j.DocType = 4;
    j.ProcessingInstruction = 5;
    j.Document = 6;
    V.DISPATCHING_SENTINEL = new fb(null, null);
    O.objectBeingDragged = new K;
    F.NAME = "Scene_0";
    Bb.NAME = "Scene_0";
    Db.NAME = "Scene_0";
    Ya.NAME = "Scene_0";
    Ya.UNCOOKED_PIZZA_SPACING = 175;
    Za.NAME = "Scene_0";
    Za.TOTAL_SLIDES = 9;
    Xa.NAME = "Scene_0";
    Fb.NAME = "Scene_0";
    Ib.NAME = "Scene_0";
    Ua.NAME = "Scene_0";
    i.sLevelPizzaType = "regular_pizza";
    i.nDoughRiseTime = 0;
    i.nPizzaCookTime = 0;
    i.nTimeAdded = 0;
    i.nTimeRemoved = 0;
    i.nPlayerWaitTime = 0;
    i.nPizzaScore = 0;
    i.nBonusScore = 0;
    i.nPizzaGoal =
        0;
    i.nTotalGameTime = 0;
    i.bTurtleMeter = !1;
    i.bDoughSpeed = !1;
    i.bCookTimes = !1;
    i.bDoubleScores = !1;
    Oa.instance = new Oa;
    k.root = new g;
    k.uncaughtError = new K;
    k.hidden = new Z(!1);
    k.volume = new P(1);
    k._platform = Oa.instance;
    k._calledInit = !1;
    M.__meta__ = {
        obj: {
            assets: [{
                ramen_pizza: [{
                    bytes: 2386,
                    md5: "4f44058e4bb33fc74e6690957c8181de",
                    name: "order/ord0.png"
                }, {
                    bytes: 2219,
                    md5: "0a73ae15ca43dcc7e850b483b04d17a6",
                    name: "order/ord1.png"
                }, {
                    bytes: 2218,
                    md5: "a06cd6f1c2bf9a8f9cfe6a8aa6992060",
                    name: "order/ord2.png"
                }, {
                    bytes: 2276,
                    md5: "94490d88379bfc08afb94691350972ed",
                    name: "order/ord3.png"
                }, {
                    bytes: 2242,
                    md5: "4f0f791972a39ef82e85ce22c478ce9d",
                    name: "order/ord4.png"
                }, {
                    bytes: 1783,
                    md5: "4bc4bdc4d5560c503f0ee01a4ab66c73",
                    name: "order/ord5.png"
                }, {
                    bytes: 2447,
                    md5: "c810547ddd7231616951b2946e0ca770",
                    name: "order/ord6.png"
                }, {
                    bytes: 2118,
                    md5: "2d4f64966707dc3d5774dacca5e1eb9b",
                    name: "order/ord7.png"
                }, {
                    bytes: 5222,
                    md5: "c64ba654c25297ea02168051105a6468",
                    name: "plate/ing0.png"
                }, {
                    bytes: 3651,
                    md5: "2e6a4692c021279cceefccf66defbf51",
                    name: "plate/ing1.png"
                }, {
                    bytes: 3581,
                    md5: "3070a19ffd9671c209959ec3a636b38e",
                    name: "plate/ing2.png"
                }, {
                    bytes: 3812,
                    md5: "37c9aeedb061f37f0b554e2344a1a574",
                    name: "plate/ing3.png"
                }, {
                    bytes: 4466,
                    md5: "7a02249b4eac2d6c1a54c1ddba1ff974",
                    name: "plate/ing4.png"
                }, {
                    bytes: 3104,
                    md5: "a9aa2f16e55c97d8d4e78bf3919347ae",
                    name: "plate/ing5.png"
                }, {
                    bytes: 3274,
                    md5: "a90cd13b4a1945070a4cd27ae7566311",
                    name: "plate/ing6.png"
                }, {
                    bytes: 3347,
                    md5: "7bdf5956c5845233c971737efba9048f",
                    name: "plate/ing7.png"
                }, {
                    bytes: 1317,
                    md5: "d4822f50de349ef9416ab93d5282ffc5",
                    name: "setup.xml"
                }, {
                    bytes: 2175,
                    md5: "33c0dac31dda0a97ef80eb500c397043",
                    name: "top/top0.png"
                }, {
                    bytes: 2911,
                    md5: "188062f8073d580caac21a2d12ec2586",
                    name: "top/top1.png"
                }, {
                    bytes: 2321,
                    md5: "a428508f87da6c53ab9cb5b8dd9a3f03",
                    name: "top/top2.png"
                }, {
                    bytes: 2975,
                    md5: "2aa89c7b8728338d46ccbb840fd80110",
                    name: "top/top3.png"
                }, {
                    bytes: 5841,
                    md5: "1a69f9e9ad4ad4bdfce893df1c1c6236",
                    name: "top/top4.png"
                }, {
                    bytes: 1611,
                    md5: "db9713e506a56cf716b1c712b62108d3",
                    name: "top/top5.png"
                }, {
                    bytes: 2658,
                    md5: "29da271c93125fae8f201ea11ac9fa6b",
                    name: "top/top6.png"
                }, {
                    bytes: 3180,
                    md5: "9394f070b8fdfcaac11497fefffb2b1d",
                    name: "top/top7.png"
                }],
                levelIntro_scene: [{
                    bytes: 22329,
                    md5: "c5e780e9de0f9f8d3bacdee8c0b3fa43",
                    name: "bg1.jpg"
                }, {
                    bytes: 31626,
                    md5: "809454ec3f43c8f42fb44a378114a5ff",
                    name: "bg2.jpg"
                }, {
                    bytes: 15307,
                    md5: "4ea55f948ae6c029cf0ae7265752ee2e",
                    name: "icecream.png"
                }, {
                    bytes: 14758,
                    md5: "6518f30bc1e446e2cdd3e0fbcb9c10a7",
                    name: "popcorn.png"
                }, {
                    bytes: 20248,
                    md5: "b9978e27e405ef56dd7993c89f905b57",
                    name: "ramen.png"
                }, {
                    bytes: 22250,
                    md5: "f692a7b4d8ee7a003fdbe5aff38caa10",
                    name: "regular.png"
                }],
                gameOver_scene: [{
                    bytes: 76433,
                    md5: "95b3d3de5b4599b8e75f91d946394bcc",
                    name: "bg1.jpg"
                }, {
                    bytes: 20255,
                    md5: "cc5c1770509575dc49413e6a69bb71a2",
                    name: "bg2.jpg"
                }],
                pause_scene: [{
                        bytes: 7570,
                        md5: "8ab9dbd0a7a58270fb46d4cda8d74f25",
                        name: "bg.png"
                    }, {
                        bytes: 2590,
                        md5: "d3d32b754bb93e7629494f0913819d22",
                        name: "helpBt.png"
                    }, {
                        bytes: 2900,
                        md5: "b62fc43f2621ef3a0bc319eeebdda6da",
                        name: "homeBt.png"
                    }, {
                        bytes: 2645,
                        md5: "6fb08084d4e1a25715a8533f8242734e",
                        name: "muteBt.png"
                    }, {
                        bytes: 2924,
                        md5: "713e0dbc3ccde33f128132ff07f76c1f",
                        name: "noBt.png"
                    }, {
                        bytes: 2416,
                        md5: "c5f94fe5b6829d13ba28136395efef6d",
                        name: "playBt.png"
                    },
                    {
                        bytes: 3453,
                        md5: "c727e95830f616fa8a2b2bd28aa65bfb",
                        name: "unmuteBt.png"
                    }, {
                        bytes: 2698,
                        md5: "300093d7a22533c2748d59e209216d76",
                        name: "yesBt.png"
                    }
                ],
                instruction_scene: [{
                    bytes: 12722,
                    md5: "08cdbafc4f6f9c6c806752ae89efeba8",
                    name: "bg1.jpg"
                }, {
                    bytes: 14814,
                    md5: "86afdcf2080e2eb65d54e754bc8e1a25",
                    name: "bg2.jpg"
                }, {
                    bytes: 179824,
                    md5: "7d5d1198b3bab30cf4170ba673faeade",
                    name: "lib/atlas0.png"
                }, {
                    bytes: 5839,
                    md5: "c01f35aa1182e3392fafdd590b91e608",
                    name: "lib/library.json"
                }],
                regular_pizza: [{
                    bytes: 1962,
                    md5: "3f21e8ac7627dfb34cf80e553ffb02d6",
                    name: "order/ord0.png"
                }, {
                    bytes: 2133,
                    md5: "97ba5461c635db255e81e4a5e6232738",
                    name: "order/ord1.png"
                }, {
                    bytes: 2154,
                    md5: "5ab02205b33cb5212536922431dd1b2e",
                    name: "order/ord2.png"
                }, {
                    bytes: 1819,
                    md5: "bafbe5af6303b94929b105990b152645",
                    name: "order/ord3.png"
                }, {
                    bytes: 2040,
                    md5: "3378ef3705231036bda6f42f6273605b",
                    name: "order/ord4.png"
                }, {
                    bytes: 1917,
                    md5: "622e44b957a084b065fcdc681107f758",
                    name: "order/ord5.png"
                }, {
                    bytes: 2239,
                    md5: "73ddbe828e2d8e0e87db99fe5a177d05",
                    name: "order/ord6.png"
                }, {
                    bytes: 1944,
                    md5: "308bf117e02e2df332811db97c4b049f",
                    name: "order/ord7.png"
                }, {
                    bytes: 3778,
                    md5: "fb6ed6529b0c806a9c1a23adc9840bf3",
                    name: "plate/ing0.png"
                }, {
                    bytes: 4512,
                    md5: "887fa579366372fa798ca325d24deb34",
                    name: "plate/ing1.png"
                }, {
                    bytes: 4090,
                    md5: "6fb7010459db657a0d306951763c8e42",
                    name: "plate/ing2.png"
                }, {
                    bytes: 3433,
                    md5: "2a148a246008235114420534ef8e9356",
                    name: "plate/ing3.png"
                }, {
                    bytes: 4973,
                    md5: "270ff9bbbeb0858acf39e1479244d9f7",
                    name: "plate/ing4.png"
                }, {
                    bytes: 3315,
                    md5: "46240d20c77330dd8eba1a7e8d14c4e7",
                    name: "plate/ing5.png"
                }, {
                    bytes: 4088,
                    md5: "68df3359d037e648610bfa8d63f2b42a",
                    name: "plate/ing6.png"
                }, {
                    bytes: 3580,
                    md5: "f070eeed4bea146763f58274d6836f30",
                    name: "plate/ing7.png"
                }, {
                    bytes: 1295,
                    md5: "60e7fc2137ebe9563e98b66604e7d8a0",
                    name: "setup.xml"
                }, {
                    bytes: 1812,
                    md5: "dfd377af3ed5fb9ebe27019e32cdc3cf",
                    name: "top/top0.png"
                }, {
                    bytes: 2688,
                    md5: "1e6f3e2eb6fa7c263e186247e0c82ce9",
                    name: "top/top1.png"
                }, {
                    bytes: 2310,
                    md5: "a3a48cb9097b8003dd9807d678748306",
                    name: "top/top2.png"
                }, {
                    bytes: 1861,
                    md5: "b73e2c9a988435b7262ce4a144197b0c",
                    name: "top/top3.png"
                }, {
                    bytes: 2245,
                    md5: "04f7d381290cddb83481011f540b9b2c",
                    name: "top/top4.png"
                }, {
                    bytes: 2465,
                    md5: "2f95f55cc17addb3dab16bbf5d86f9aa",
                    name: "top/top5.png"
                }, {
                    bytes: 1354,
                    md5: "049e664e3b7e8e4b3ae0ded0dd288d10",
                    name: "top/top6.png"
                }, {
                    bytes: 1772,
                    md5: "a78e1c2e56fd18c468ab203475b4dcca",
                    name: "top/top7.png"
                }],
                global: [{
                    bytes: 38910,
                    md5: "3924edf64afb1f7f92b769d95200f07c",
                    name: "sound/ButtonClick.mp3"
                }, {
                    bytes: 53486,
                    md5: "a8d3154a29a719a48e22361f838f7269",
                    name: "sound/ButtonClick.ogg"
                }, {
                    bytes: 1707302,
                    md5: "bb2afaca74b0da737bbeb4cfb8636374",
                    name: "sound/gameTrack.mp3"
                }, {
                    bytes: 2323485,
                    md5: "20a21861761da41651a4bcd91134b2e4",
                    name: "sound/gameTrack.ogg"
                }, {
                    bytes: 1004765,
                    md5: "e961608ef9f97c4af655c5fe9811ee67",
                    name: "sound/titleTrack.mp3"
                }, {
                    bytes: 1328714,
                    md5: "ce162078926eaab285483dfa76802edd",
                    name: "sound/titleTrack.ogg"
                }, {
                    bytes: 1452,
                    md5: "100183a59753016e97280b4b490555dc",
                    name: "ui/backIcon.png"
                }, {
                    bytes: 1354,
                    md5: "17d609b2c8a7959bfa9cc3c40d572be4",
                    name: "ui/button.png"
                }, {
                    bytes: 1300,
                    md5: "05e2174b06ef31a88990634f15c5a999",
                    name: "ui/lockIcon.png"
                }, {
                    bytes: 1323,
                    md5: "413fee1aa10af7f3f90e4c376092b7e5",
                    name: "ui/nextIcon.png"
                }, {
                    bytes: 1736,
                    md5: "ff6b9f89b7c37dd0b33c0b38d8301a11",
                    name: "ui/replayIcon.png"
                }],
                icecream_pizza: [{
                    bytes: 1831,
                    md5: "f6849f5ce487215719a1192e85459107",
                    name: "order/ord0.png"
                }, {
                    bytes: 2024,
                    md5: "435cce0e7bc58e97719ad86616a77ff8",
                    name: "order/ord1.png"
                }, {
                    bytes: 2072,
                    md5: "ec367c9c28b75f954d08c5d9761a7ab9",
                    name: "order/ord2.png"
                }, {
                    bytes: 1923,
                    md5: "21b98f0482b5ea70f19cc359fce61359",
                    name: "order/ord3.png"
                }, {
                    bytes: 2107,
                    md5: "6fd8ca81e807d211f15e9fd51e24529f",
                    name: "order/ord4.png"
                }, {
                    bytes: 2325,
                    md5: "60e1a08258685c7f784de207b6ca4f12",
                    name: "order/ord5.png"
                }, {
                    bytes: 2036,
                    md5: "e121f920a7f4a7a9161a67996605b3b7",
                    name: "order/ord6.png"
                }, {
                    bytes: 2109,
                    md5: "c99e54bf1136466cb4e6c8be2c3e6078",
                    name: "order/ord7.png"
                }, {
                    bytes: 3304,
                    md5: "bee0ee6bac930b93a6dd300b8060d059",
                    name: "plate/ing0.png"
                }, {
                    bytes: 3195,
                    md5: "1b16ecd76d5b145912d11e0444e14047",
                    name: "plate/ing1.png"
                }, {
                    bytes: 3477,
                    md5: "91d9103496d092965fff21833802cf75",
                    name: "plate/ing2.png"
                }, {
                    bytes: 3109,
                    md5: "5384dbc762e320de50a64db53791d4c3",
                    name: "plate/ing3.png"
                }, {
                    bytes: 3002,
                    md5: "76d47387a4b93260de28d73fd572d3d4",
                    name: "plate/ing4.png"
                }, {
                    bytes: 3825,
                    md5: "d84c1a700651e8d00ce9d726ea9eda22",
                    name: "plate/ing5.png"
                }, {
                    bytes: 2883,
                    md5: "4d70358a20bde928769441ed6f1026c6",
                    name: "plate/ing6.png"
                }, {
                    bytes: 3053,
                    md5: "8f601d96ff222a0ba5a71beecd767c3e",
                    name: "plate/ing7.png"
                }, {
                    bytes: 1317,
                    md5: "d90e3692db5b117c221701f299be366a",
                    name: "setup.xml"
                }, {
                    bytes: 2650,
                    md5: "b0a7ea0589c858fbeb33325412d4ec26",
                    name: "top/top0.png"
                }, {
                    bytes: 2705,
                    md5: "4a90c3c27bb35381bc81a3c0506e55fe",
                    name: "top/top1.png"
                }, {
                    bytes: 2065,
                    md5: "f54c1523d612c170f898514043d0618d",
                    name: "top/top2.png"
                }, {
                    bytes: 2179,
                    md5: "2b6ade2f5c0bb4cafe9648f576c98589",
                    name: "top/top3.png"
                }, {
                    bytes: 2556,
                    md5: "5ac5b52d28a18d7a4503f3b5ac06c607",
                    name: "top/top4.png"
                }, {
                    bytes: 2738,
                    md5: "6a86fed8cbeebb2e61bae866cc6dd2c6",
                    name: "top/top5.png"
                }, {
                    bytes: 2401,
                    md5: "46eeded0e7636a579b65a014ce748421",
                    name: "top/top6.png"
                }, {
                    bytes: 1850,
                    md5: "2ea7f9c0e9a9f8edcea44477f83f1bee",
                    name: "top/top7.png"
                }],
                fonts: [{
                        bytes: 51704,
                        md5: "25859e209e0e3ba9687dcf0078c91560",
                        name: "chinese_black_26.fnt"
                    }, {
                        bytes: 9935,
                        md5: "d604b54c8db92f05d6b28e85702fdae9",
                        name: "chinese_black_26.png"
                    }, {
                        bytes: 51704,
                        md5: "d35fb8a27f3a30064fcd05e6a385a5b3",
                        name: "chinese_black_48.fnt"
                    }, {
                        bytes: 19652,
                        md5: "b48f4ac965e57bb977d7e845044824c7",
                        name: "chinese_black_48.png"
                    }, {
                        bytes: 51714,
                        md5: "e721ce54f7f65c110345f79c1a00634e",
                        name: "chinese_black_74.fnt"
                    }, {
                        bytes: 35932,
                        md5: "76ed94234f385c90deb7cf3120ba5137",
                        name: "chinese_black_74.png"
                    }, {
                        bytes: 51704,
                        md5: "0ff8a73a33f5e6899a50cac23802cb16",
                        name: "chinese_green_30.fnt"
                    }, {
                        bytes: 21919,
                        md5: "bf41f66e7567694a195f7b1121d21705",
                        name: "chinese_green_30.png"
                    },
                    {
                        bytes: 51706,
                        md5: "644dfe28581442ff22b5c8758b822f56",
                        name: "chinese_orange_47.fnt"
                    }, {
                        bytes: 27058,
                        md5: "7987d38e66b6631671441a43adf160c9",
                        name: "chinese_orange_47.png"
                    }, {
                        bytes: 51715,
                        md5: "066d53074742399e57f734fb28d3ebba",
                        name: "chinese_orange_72.fnt"
                    }, {
                        bytes: 54392,
                        md5: "57436a2bab54090afe0a6e8fd8d382b2",
                        name: "chinese_orange_72.png"
                    }, {
                        bytes: 51702,
                        md5: "ebaf0d9b26966d60d20e4794ceb2ca4d",
                        name: "chinese_red_30.fnt"
                    }, {
                        bytes: 23190,
                        md5: "a6f15045119e391e14f843bd30adb58b",
                        name: "chinese_red_30.png"
                    }, {
                        bytes: 51704,
                        md5: "36e3e3d24b3a08c6479aeea8445b7f31",
                        name: "chinese_white_46.fnt"
                    }, {
                        bytes: 36984,
                        md5: "a9a38538e0cffe6ecd590d71d89d9289",
                        name: "chinese_white_46.png"
                    }, {
                        bytes: 2478,
                        md5: "87c856497d463b729862b967f04d0d0b",
                        name: "digital7_red_45.fnt"
                    }, {
                        bytes: 1041,
                        md5: "5f381da4e2c6c2aba79e4fee2abae6ab",
                        name: "digital7_red_45.png"
                    }
                ],
                game_scene: [{
                        bytes: 21225,
                        md5: "7bddd0069a86981ea65e8720bc43db36",
                        name: "bg1.jpg"
                    }, {
                        bytes: 14466,
                        md5: "c0390caa9a768de1b45b9a88507de93b",
                        name: "bg2.jpg"
                    }, {
                        bytes: 6670,
                        md5: "f2d94a333cb9b9d2a9d7005f7ea8f781",
                        name: "burnedBottom.png"
                    }, {
                        bytes: 4617,
                        md5: "2d081a3737aa880055aba6b84d0684fb",
                        name: "burnedTop.png"
                    }, {
                        bytes: 1026,
                        md5: "85890263384943d64ef834bd3c5b1086",
                        name: "cook_meter/frame.png"
                    }, {
                        bytes: 171,
                        md5: "da14eb18c2f1ea58ec68e5961c1bbf18",
                        name: "cook_meter/green.png"
                    }, {
                        bytes: 191,
                        md5: "624d2fbd92f7664f3fc9a4b0244f8a21",
                        name: "cook_meter/orange1.png"
                    }, {
                        bytes: 191,
                        md5: "9b44e2888e94c50de729333dab9796d3",
                        name: "cook_meter/orange2.png"
                    }, {
                        bytes: 160,
                        md5: "9899edc2c93554a6d060c66ffb1f9839",
                        name: "cook_meter/red.png"
                    }, {
                        bytes: 157,
                        md5: "b7ee8a712e6fcd75538cde776d98c702",
                        name: "cook_meter/yellow.png"
                    }, {
                        bytes: 6243,
                        md5: "468dd13d406fc7b7ecf30d1d92794cd0",
                        name: "cooked_pizza.png"
                    }, {
                        bytes: 2502,
                        md5: "05a0c807b95df45ee7056362f4cb5699",
                        name: "doughBall.png"
                    }, {
                        bytes: 58993,
                        md5: "4477c2d63f445c9f5015be4ff8f4488c",
                        name: "fg1.png"
                    }, {
                        bytes: 58431,
                        md5: "2b80caacb833472cab6653f74258d1a2",
                        name: "fg2.png"
                    }, {
                        bytes: 656,
                        md5: "774229fa0c5d1e5ec1596417e3a89677",
                        name: "library/dustPoof/atlas0.png"
                    }, {
                        bytes: 6310,
                        md5: "7384e84becc43219f7b93801a983684e",
                        name: "library/dustPoof/library.json"
                    }, {
                        bytes: 124515,
                        md5: "3d364f1b0455e2006c50ea73c3771cc2",
                        name: "library/turtles/atlas0.png"
                    }, {
                        bytes: 81954,
                        md5: "d290f1571c125823d26055fd8d9ff7f2",
                        name: "library/turtles/library.json"
                    }, {
                        bytes: 2758,
                        md5: "d9b363b11ad57c110ff607077aef3f28",
                        name: "order/box.png"
                    }, {
                        bytes: 1278,
                        md5: "43436c6875218ba43382f9ec20f0cb8c",
                        name: "order/meterBg.png"
                    }, {
                        bytes: 1278,
                        md5: "5f249e4e740aaf7d6228b874ace823b7",
                        name: "order/meterHigh.png"
                    }, {
                        bytes: 1279,
                        md5: "6b37860643c9b3f571e2c9045288be22",
                        name: "order/meterLow.png"
                    }, {
                        bytes: 1281,
                        md5: "13632247fca5923ef90eded4b711cab3",
                        name: "order/meterMid.png"
                    }, {
                        bytes: 1696,
                        md5: "5c5518cfff80d34ceeb4deefc096eb69",
                        name: "pauseBt.png"
                    }, {
                        bytes: 214514,
                        md5: "65c27d3373f5644d3caf7a295442a394",
                        name: "sound/5secLeft.mp3"
                    }, {
                        bytes: 123693,
                        md5: "3ac688663d852a2cfbe69cedc4875f6a",
                        name: "sound/5secLeft.ogg"
                    }, {
                        bytes: 38126,
                        md5: "44233859e45018af3e5c83b5ee1fcc52",
                        name: "sound/badSmoke.mp3"
                    }, {
                        bytes: 36853,
                        md5: "6e586d641f4cdc23d1e266707252575e",
                        name: "sound/badSmoke.ogg"
                    }, {
                        bytes: 62834,
                        md5: "7b4d2ad7de5d5e8d8384a24b584829c2",
                        name: "sound/Burn.mp3"
                    }, {
                        bytes: 66166,
                        md5: "2f30d81116df6c17891bba25ae67f372",
                        name: "sound/Burn.ogg"
                    }, {
                        bytes: 194804,
                        md5: "4851596eb1332e236291f1242e4c57c4",
                        name: "sound/EndLevel.mp3"
                    }, {
                        bytes: 282430,
                        md5: "ea3eb2658c435701df9cf985084f1f30",
                        name: "sound/EndLevel.ogg"
                    }, {
                        bytes: 95912,
                        md5: "bbdafb5e7415c9c874ece62c784f542b",
                        name: "sound/goalMet.mp3"
                    }, {
                        bytes: 111827,
                        md5: "4d665d8028b020999775715be0a9df7f",
                        name: "sound/goalMet.ogg"
                    }, {
                        bytes: 28910,
                        md5: "60458a8be38d30b2b3cb9f4348e381f9",
                        name: "sound/goodSmoke.mp3"
                    }, {
                        bytes: 28806,
                        md5: "73bb0439c40821949cd3326797f43463",
                        name: "sound/goodSmoke.ogg"
                    }, {
                        bytes: 133874,
                        md5: "b42258ad562649565e0a8ac0395e90ac",
                        name: "sound/KittyEnter.mp3"
                    }, {
                        bytes: 175259,
                        md5: "208f8d448c5d656f700edf72cd6ea6b4",
                        name: "sound/KittyEnter.ogg"
                    }, {
                        bytes: 121412,
                        md5: "de4880311adec4057fde15ad67a9b446",
                        name: "sound/KittyPowerup.mp3"
                    }, {
                        bytes: 161332,
                        md5: "b079519844f75a5d58748aac625bc8b2",
                        name: "sound/KittyPowerup.ogg"
                    }, {
                        bytes: 68120,
                        md5: "ef89b0885492aaffeb526f481cd46a86",
                        name: "sound/MakeDough.mp3"
                    }, {
                        bytes: 50728,
                        md5: "909ae366828739c88011a57063a22e79",
                        name: "sound/MakeDough.ogg"
                    },
                    {
                        bytes: 34520,
                        md5: "4ff4adff1db815e04fb2bd469549c9ae",
                        name: "sound/PickupTopping.mp3"
                    }, {
                        bytes: 30297,
                        md5: "0cdd01164baffe76e5f68ab0da74bef4",
                        name: "sound/PickupTopping.ogg"
                    }, {
                        bytes: 134360,
                        md5: "23d433d769a22c3ec611a58609f3cde3",
                        name: "sound/PizzaDone.mp3"
                    }, {
                        bytes: 107590,
                        md5: "3f35336151e6e2d5df9f90bc55b0e2c4",
                        name: "sound/PizzaDone.ogg"
                    }, {
                        bytes: 25454,
                        md5: "56c7d2b295b8acdc16a0cca6138f568a",
                        name: "sound/pizzaInOven.mp3"
                    }, {
                        bytes: 22150,
                        md5: "c6d33d80729970594fbba955ebaf71aa",
                        name: "sound/pizzaInOven.ogg"
                    }, {
                        bytes: 84914,
                        md5: "cf217882635249e387ef193f01a56402",
                        name: "sound/PlaceToppingEasyCheese.mp3"
                    }, {
                        bytes: 101310,
                        md5: "8a7a6bf184691e9ebcf285c2f19b7b80",
                        name: "sound/PlaceToppingEasyCheese.ogg"
                    }, {
                        bytes: 72452,
                        md5: "f34aa6e345c6c473417810740edb69a8",
                        name: "sound/PlaceToppingSauces.mp3"
                    }, {
                        bytes: 86624,
                        md5: "67a88275220c3d37694fa393a8aee547",
                        name: "sound/PlaceToppingSauces.ogg"
                    }, {
                        bytes: 28760,
                        md5: "232beebedbb916f54d353fc65ef0f466",
                        name: "sound/PlaceToppingStandard.mp3"
                    }, {
                        bytes: 24946,
                        md5: "96f6454f18866ec3a8b82320c1e922bb",
                        name: "sound/PlaceToppingStandard.ogg"
                    },
                    {
                        bytes: 101542,
                        md5: "a468271cfef4b9ab763601a3e6303ddd",
                        name: "sound/stingBad.mp3"
                    }, {
                        bytes: 215561,
                        md5: "73440ec77cbe3716fe4ea47e634f2781",
                        name: "sound/stingBad.ogg"
                    }, {
                        bytes: 89390,
                        md5: "ace4d22a221aeb6180a98d60c8c82e15",
                        name: "sound/stingGood.mp3"
                    }, {
                        bytes: 167286,
                        md5: "951038a4a9260f6f7d48808e64fb18a3",
                        name: "sound/stingGood.ogg"
                    }, {
                        bytes: 130472,
                        md5: "5ed9bc07b62378a7766c8fb6099c5493",
                        name: "sound/Trash1.mp3"
                    }, {
                        bytes: 169497,
                        md5: "05813440b1bc441c2f7127ba40345382",
                        name: "sound/Trash1.ogg"
                    }, {
                        bytes: 79592,
                        md5: "18e8e41886719651280d8502bf7670f2",
                        name: "sound/Trash2.mp3"
                    }, {
                        bytes: 95172,
                        md5: "5c82af98dd72c75692451a3f8d89e189",
                        name: "sound/Trash2.ogg"
                    }, {
                        bytes: 28910,
                        md5: "c586c233547ddfac8960ff9bed8ff6ea",
                        name: "sound/TurtConfused.mp3"
                    }, {
                        bytes: 33916,
                        md5: "fd4d704c6a5fc9578a77d99b42930306",
                        name: "sound/TurtConfused.ogg"
                    }, {
                        bytes: 89270,
                        md5: "4a308a41583607c3b2565316affcef2c",
                        name: "sound/TurtHappy.mp3"
                    }, {
                        bytes: 80319,
                        md5: "1fafd59ea09cef3baa0a4eefdb29f377",
                        name: "sound/TurtHappy.ogg"
                    }, {
                        bytes: 107972,
                        md5: "061388e9e9d90cff46cc4094b3676381",
                        name: "sound/TurtMad.mp3"
                    },
                    {
                        bytes: 149397,
                        md5: "f5ef9a7bd11f27eff9ce99f90f61956f",
                        name: "sound/TurtMad.ogg"
                    }, {
                        bytes: 9931,
                        md5: "4fb36cbaded254f6bd44e6dc1fbe3db7",
                        name: "splatter.png"
                    }, {
                        bytes: 2708,
                        md5: "df854ab3ad1a65cf3be829e4c3aa5fab",
                        name: "trash.png"
                    }, {
                        bytes: 6830,
                        md5: "65f2b47b37cb265f9dcdfa72026089ee",
                        name: "uncooked_pizza.png"
                    }
                ],
                bootstrap: [{
                        bytes: 492,
                        md5: "e34eb4e85d252daaea3c9036961154c0",
                        name: "bg.jpg"
                    }, {
                        bytes: 288,
                        md5: "5b2de37068d39d45771e6ce7cf247958",
                        name: "empty.mp3"
                    }, {
                        bytes: 4435,
                        md5: "db402228bb9a528056a8ab34e4433e25",
                        name: "empty.ogg"
                    },
                    {
                        bytes: 1734,
                        md5: "ed6e43d7455389f6456f46165eec9219",
                        name: "mute.png"
                    }, {
                        bytes: 6685,
                        md5: "1e26c9417904f7f0d800ee54e965a760",
                        name: "orientation_ipad.png"
                    }, {
                        bytes: 8205,
                        md5: "d6d14c67e7288384881634cfcbcb8970",
                        name: "orientation_iphone.png"
                    }, {
                        bytes: 8217,
                        md5: "90102c6db5b888918a2c48da119a672f",
                        name: "preload/arm.png"
                    }, {
                        bytes: 31689,
                        md5: "1287f8eb55fa499b67a7ca34be769aa7",
                        name: "preload/bg1.jpg"
                    }, {
                        bytes: 22685,
                        md5: "01bb547248df21982e44470806be6dba",
                        name: "preload/bg2.jpg"
                    }, {
                        bytes: 2349,
                        md5: "ced1c801eb9751a4e672c9ff7c27f592",
                        name: "preload/loading.png"
                    }, {
                        bytes: 9331,
                        md5: "ff9c449c86b85c9bc0b4c227b48316b9",
                        name: "preload/slice1.png"
                    }, {
                        bytes: 9504,
                        md5: "d93d0de40f2091520ee5beb78491a638",
                        name: "preload/slice2.png"
                    }, {
                        bytes: 9416,
                        md5: "d9ff9a1f398008a934c4aa8eb46bbffe",
                        name: "preload/slice3.png"
                    }, {
                        bytes: 9041,
                        md5: "da744e7a3ec395b5a537d717925b6216",
                        name: "preload/slice4.png"
                    }, {
                        bytes: 8999,
                        md5: "5afe1daf25181f7d4522ca74ad950aed",
                        name: "preload/slice5.png"
                    }, {
                        bytes: 9518,
                        md5: "3835ea6935f1c4c33b94f673964797c9",
                        name: "preload/slice6.png"
                    }, {
                        bytes: 9843,
                        md5: "fd7c2b524df4a7e912e6e20672896760",
                        name: "preload/slice7.png"
                    }, {
                        bytes: 9916,
                        md5: "c87fd3104f431b4c72ae150db51cf423",
                        name: "preload/slice8.png"
                    }, {
                        bytes: 1958,
                        md5: "e8a13ebb9ca1bfe8b899bd91f034e2a4",
                        name: "unmute.png"
                    }
                ],
                codeUnlock_scene: [{
                        bytes: 33130,
                        md5: "2f25ea12a0cb155f2b45563b63f2bf9d",
                        name: "bg1.jpg"
                    }, {
                        bytes: 36401,
                        md5: "72a26a3564c0516a8c0feaf26da0c24d",
                        name: "bg2.jpg"
                    }, {
                        bytes: 1057,
                        md5: "9ebf42d1e14d6292d82dbd0ef8a1534a",
                        name: "bt0.png"
                    }, {
                        bytes: 993,
                        md5: "34bb716ddd52954547d549a749bb6a69",
                        name: "bt1.png"
                    },
                    {
                        bytes: 1097,
                        md5: "5981c597e0877845088f6aa3d260575f",
                        name: "bt2.png"
                    }, {
                        bytes: 1093,
                        md5: "fc7acbf9a2d8be02682dbf2329ad390d",
                        name: "bt3.png"
                    }, {
                        bytes: 1044,
                        md5: "10c4d38e119121319cf87e548242e9cb",
                        name: "bt4.png"
                    }, {
                        bytes: 1088,
                        md5: "74b00c9bc8a5ddcc1423fc02d5958522",
                        name: "bt5.png"
                    }, {
                        bytes: 1067,
                        md5: "610e3683436bb21736d340e020c5e395",
                        name: "bt6.png"
                    }, {
                        bytes: 1068,
                        md5: "933dab6b3666437fe63b535104561a24",
                        name: "bt7.png"
                    }, {
                        bytes: 1060,
                        md5: "5a074b752e5e565fea1df27420dc028f",
                        name: "bt8.png"
                    }, {
                        bytes: 1098,
                        md5: "cad931de5159c23492f50718749e79ce",
                        name: "bt9.png"
                    }, {
                        bytes: 1393,
                        md5: "a83b544499754417d03937cda5a6608f",
                        name: "check.png"
                    }, {
                        bytes: 1520,
                        md5: "00a53c56f7e3012ff30db2d6db7d7a2e",
                        name: "x.png"
                    }
                ],
                title_scene: [{
                    bytes: 24232,
                    md5: "2581ffef84197dc87852fe1d061f1b10",
                    name: "bg1.jpg"
                }, {
                    bytes: 93648,
                    md5: "9aeb074e437d742c89abd73dda35606a",
                    name: "bg2.jpg"
                }, {
                    bytes: 3564,
                    md5: "0fbd64e0626b470b37cf59b25464c63e",
                    name: "logo.png"
                }, {
                    bytes: 14165,
                    md5: "df0e24f3fbba528e05ed8a286d7e3587",
                    name: "title.png"
                }],
                results_scene: [{
                    bytes: 411,
                    md5: "905a740450fa062aaa1f29b50085d855",
                    name: "bar.png"
                }, {
                    bytes: 12474,
                    md5: "297c9877ca349fa5b2b1f3895ca7b4b4",
                    name: "bg1.jpg"
                }, {
                    bytes: 46463,
                    md5: "b5a3c93c93b4a1de70b3fe7d9e4b0f5d",
                    name: "bg2.jpg"
                }],
                popcorn_pizza: [{
                    bytes: 1912,
                    md5: "6ad8b55bcad57d47641105c883d5d2fe",
                    name: "order/ord0.png"
                }, {
                    bytes: 2158,
                    md5: "a8815652135401561bae7df87ccb82db",
                    name: "order/ord1.png"
                }, {
                    bytes: 1703,
                    md5: "557ee190ef8b6960768a9034c47553c5",
                    name: "order/ord2.png"
                }, {
                    bytes: 1746,
                    md5: "af4f0d831f296f0050774716bad2da6c",
                    name: "order/ord3.png"
                }, {
                    bytes: 1881,
                    md5: "7c1d4d6b04c5ff466e5065dd595c658e",
                    name: "order/ord4.png"
                }, {
                    bytes: 1879,
                    md5: "832c84143b997c8036fe8d084b765633",
                    name: "order/ord5.png"
                }, {
                    bytes: 2005,
                    md5: "f0cfdc62899da9527f5d12f66610a9c8",
                    name: "order/ord6.png"
                }, {
                    bytes: 2109,
                    md5: "c99e54bf1136466cb4e6c8be2c3e6078",
                    name: "order/ord7.png"
                }, {
                    bytes: 3482,
                    md5: "a472cb5753d43964b8b5e1ddd1f13bbc",
                    name: "plate/ing0.png"
                }, {
                    bytes: 3565,
                    md5: "125857bdbd40d9e2c65af99f4f432007",
                    name: "plate/ing1.png"
                }, {
                    bytes: 2363,
                    md5: "1fbf6bc06344bddcb1fde9ff7798ec15",
                    name: "plate/ing2.png"
                }, {
                    bytes: 2461,
                    md5: "937c9e8a8ea185edde3e0bfbd0c6e648",
                    name: "plate/ing3.png"
                }, {
                    bytes: 2991,
                    md5: "90f86ec1a00b87768ff7e575bd3101e4",
                    name: "plate/ing4.png"
                }, {
                    bytes: 2886,
                    md5: "978ac3d337bd37c07f5175441576fda6",
                    name: "plate/ing5.png"
                }, {
                    bytes: 2751,
                    md5: "9182fb25860b36fa75d0b706e77a9634",
                    name: "plate/ing6.png"
                }, {
                    bytes: 3028,
                    md5: "aa6a438af23611504508656582899c65",
                    name: "plate/ing7.png"
                }, {
                    bytes: 1411,
                    md5: "5aff92a7b40696fa60c3643a8dab7f58",
                    name: "setup.xml"
                }, {
                    bytes: 1599,
                    md5: "e1d3ec09fb3dde81c2f753216274a0f7",
                    name: "top/top0.png"
                }, {
                    bytes: 2340,
                    md5: "ca18b8b7e1c6ac603a0b56aa280b0bac",
                    name: "top/top1.png"
                }, {
                    bytes: 1977,
                    md5: "7af1aa7832a46a31c7b35cde81533d4c",
                    name: "top/top2.png"
                }, {
                    bytes: 1871,
                    md5: "e8a0e691162fb249fd8a7102e942168a",
                    name: "top/top3.png"
                }, {
                    bytes: 2495,
                    md5: "4afdb149b3cf48d0ca7f1bfdb0e37f1f",
                    name: "top/top4.png"
                }, {
                    bytes: 2843,
                    md5: "2ae812c5b45d1906050a672c9b34a3f7",
                    name: "top/top5.png"
                }, {
                    bytes: 2919,
                    md5: "7976a5d8241defc996f516a4128c363f",
                    name: "top/top6.png"
                }, {
                    bytes: 1851,
                    md5: "c215e33e0ed65e903a6a6a6810fb2aa4",
                    name: "top/top7.png"
                }]
            }]
        }
    };
    M._supportsCrossOrigin = function() {
        var a;
        a = 0 <=
            window.navigator.userAgent.indexOf("Linux; U; Android") ? !1 : null != (new XMLHttpRequest).withCredentials;
        a || null;
        return a
    }();
    l._scratchPoint = new za;
    ob.NEWLINE = new kc(10);
    ha._sharedEvent = new Wc;
    ca._sharedEvent = new Xc;
    lb.CANVAS_TEXTURES = (new X("(iPhone|iPod|iPad)", "")).match(window.navigator.userAgent);
    I._mediaRefCount = 0;
    I._detectBlobSupport = !0;
    C.VENDOR_PREFIXES = ["webkit", "moz", "ms", "o", "khtml"];
    C.SHOULD_HIDE_MOBILE_BROWSER = window.top == window && (new X("Mobile(/.*)? Safari", "")).match(window.navigator.userAgent);
    J._detectSupport = !0;
    sa._scratchMatrix = new pa;
    Ea.i64tmp = new ld(0, 0);
    Ka.escapes = function() {
        var a = new R;
        null != ta.lt ? a.setReserved("lt", "<") : a.h.lt = "<";
        null != ta.gt ? a.setReserved("gt", ">") : a.h.gt = ">";
        null != ta.amp ? a.setReserved("amp", "&") : a.h.amp = "&";
        null != ta.quot ? a.setReserved("quot", '"') : a.h.quot = '"';
        null != ta.apos ? a.setReserved("apos", "'") : a.h.apos = "'";
        return a
    }(this);
    E.__toStr = {}.toString;
    Ta.BYTES_PER_ELEMENT = 1;
    o.loading = !0;
    v.curScore = 0;
    v.score = 0;
    v.levelNum = 1;
    v.goodPizza = 0;
    r._mobile = !1;
    r._inited = !1;
    A.main()
})();