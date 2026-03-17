/**
 * Cooked with Flambe
 * https://github.com/aduros/flambe
 */
var flambe = {
    FLASH_VERSION: "10.1"
};
flambe.embed = function(d, x, q) {
    "string" == typeof d && (q ? "flash" == q ? d = [d + "-flash.swf"] : "js" == q && (d = [d + "-html.js"]) : d = [d + "-flash.swf", d + "-html.js"]);
    var B = document.getElementById(x);
    if (null == B) throw Error("Could not find element: " + x);
    showFlash = function() {
        if ((null == r || "flash" == r) && swfobject.hasFlashPlayerVersion(flambe.FLASH_VERSION)) {
            var d = document.createElement("div");
            d.id = x + "-swf";
            B.appendChild(d);
            swfobject.embedSWF(u, d.id, "100%", "100%", flambe.FLASH_VERSION, null, {}, {
                allowScriptAccess: "always",
                allowFullScreen: "true",
                fullscreenOnSelection: "true",
                wmode: "direct"
            });
            return !0
        }
        return !1
    };
    showJS = function() {
        if (null == r || "html" == r) {
            var d = document.createElement("canvas");
            if ("getContext" in d) return d.id = x + "-canvas", B.appendChild(d), flambe.canvas = d, d = document.createElement("script"), d.onload = function() {
                flambe.canvas = null
            }, d.src = u, B.appendChild(d), !0
        }
        return !1
    };
    for (var n = {}, C = window.location.search.substr(1).split("&"), s = 0; s < C.length; ++s) {
        var y = C[s].split("=");
        n[unescape(y[0])] = 1 < y.length ? unescape(y[1]) : null
    }
    for (var r = n.flambe,
            s = 0; s < d.length; ++s) {
        var u = d[s];
        (n = u.match(/\.(\w+)(\?|$)/)) && (n = n[1].toLowerCase());
        if (q) switch (q) {
            case "flash":
                return r = "flash", showFlash();
            case "js":
                return r = "html", showJS()
        } else switch (n) {
            case "swf":
                if (showFlash()) return !0;
                break;
            case "js":
                if (showJS()) return !0;
                break;
            default:
                throw Error("Don't know how to embed: " + u);
        }
    }
    return !1
};
var swfobject = function() {
    function d() {
        if (!z) {
            try {
                var a = f.getElementsByTagName("body")[0].appendChild(f.createElement("span"));
                a.parentNode.removeChild(a)
            } catch (b) {
                return
            }
            z = !0;
            for (var a = F.length, c = 0; c < a; c++) F[c]()
        }
    }

    function x(a) {
        z ? a() : F[F.length] = a
    }

    function q(a) {
        if (typeof p.addEventListener != j) p.addEventListener("load", a, !1);
        else if (typeof f.addEventListener != j) f.addEventListener("load", a, !1);
        else if (typeof p.attachEvent != j) V(p, "onload", a);
        else if ("function" == typeof p.onload) {
            var b = p.onload;
            p.onload =
                function() {
                    b();
                    a()
                }
        } else p.onload = a
    }

    function B() {
        var a = f.getElementsByTagName("body")[0],
            b = f.createElement(t);
        b.setAttribute("type", G);
        var c = a.appendChild(b);
        if (c) {
            var h = 0;
            (function() {
                if (typeof c.GetVariable != j) {
                    var g = c.GetVariable("$version");
                    g && (g = g.split(" ")[1].split(","), e.pv = [parseInt(g[0], 10), parseInt(g[1], 10), parseInt(g[2], 10)])
                } else if (10 > h) {
                    h++;
                    setTimeout(arguments.callee, 10);
                    return
                }
                a.removeChild(b);
                c = null;
                n()
            })()
        } else n()
    }

    function n() {
        var a = v.length;
        if (0 < a)
            for (var b = 0; b < a; b++) {
                var c = v[b].id,
                    h = v[b].callbackFn,
                    g = {
                        success: !1,
                        id: c
                    };
                if (0 < e.pv[0]) {
                    var f = o(c);
                    if (f)
                        if (H(v[b].swfVersion) && !(e.wk && 312 > e.wk)) A(c, !0), h && (g.success = !0, g.ref = C(c), h(g));
                        else if (v[b].expressInstall && s()) {
                        g = {};
                        g.data = v[b].expressInstall;
                        g.width = f.getAttribute("width") || "0";
                        g.height = f.getAttribute("height") || "0";
                        f.getAttribute("class") && (g.styleclass = f.getAttribute("class"));
                        f.getAttribute("align") && (g.align = f.getAttribute("align"));
                        for (var i = {}, f = f.getElementsByTagName("param"), d = f.length, k = 0; k < d; k++) "movie" != f[k].getAttribute("name").toLowerCase() &&
                            (i[f[k].getAttribute("name")] = f[k].getAttribute("value"));
                        y(g, i, c, h)
                    } else r(f), h && h(g)
                } else if (A(c, !0), h) {
                    if ((c = C(c)) && typeof c.SetVariable != j) g.success = !0, g.ref = c;
                    h(g)
                }
            }
    }

    function C(a) {
        var b = null;
        if ((a = o(a)) && "OBJECT" == a.nodeName) typeof a.SetVariable != j ? b = a : (a = a.getElementsByTagName(t)[0]) && (b = a);
        return b
    }

    function s() {
        return !I && H("6.0.65") && (e.win || e.mac) && !(e.wk && 312 > e.wk)
    }

    function y(a, b, c, h) {
        I = !0;
        M = h || null;
        O = {
            success: !1,
            id: c
        };
        var g = o(c);
        if (g) {
            "OBJECT" == g.nodeName ? (E = u(g), J = null) : (E = g, J = c);
            a.id =
                P;
            if (typeof a.width == j || !/%$/.test(a.width) && 310 > parseInt(a.width, 10)) a.width = "310";
            if (typeof a.height == j || !/%$/.test(a.height) && 137 > parseInt(a.height, 10)) a.height = "137";
            f.title = f.title.slice(0, 47) + " - Flash Player Installation";
            h = e.ie && e.win ? "ActiveX" : "PlugIn";
            h = "MMredirectURL=" + p.location.toString().replace(/&/g, "%26") + "&MMplayerType=" + h + "&MMdoctitle=" + f.title;
            b.flashvars = typeof b.flashvars != j ? b.flashvars + ("&" + h) : h;
            e.ie && e.win && 4 != g.readyState && (h = f.createElement("div"), c += "SWFObjectNew", h.setAttribute("id",
                c), g.parentNode.insertBefore(h, g), g.style.display = "none", function() {
                4 == g.readyState ? g.parentNode.removeChild(g) : setTimeout(arguments.callee, 10)
            }());
            L(a, b, c)
        }
    }

    function r(a) {
        if (e.ie && e.win && 4 != a.readyState) {
            var b = f.createElement("div");
            a.parentNode.insertBefore(b, a);
            b.parentNode.replaceChild(u(a), b);
            a.style.display = "none";
            (function() {
                4 == a.readyState ? a.parentNode.removeChild(a) : setTimeout(arguments.callee, 10)
            })()
        } else a.parentNode.replaceChild(u(a), a)
    }

    function u(a) {
        var b = f.createElement("div");
        if (e.win &&
            e.ie) b.innerHTML = a.innerHTML;
        else if (a = a.getElementsByTagName(t)[0])
            if (a = a.childNodes)
                for (var c = a.length, h = 0; h < c; h++) !(1 == a[h].nodeType && "PARAM" == a[h].nodeName) && 8 != a[h].nodeType && b.appendChild(a[h].cloneNode(!0));
        return b
    }

    function L(a, b, c) {
        var h, g = o(c);
        if (e.wk && 312 > e.wk) return h;
        if (g)
            if (typeof a.id == j && (a.id = c), e.ie && e.win) {
                var d = "",
                    i;
                for (i in a) a[i] != Object.prototype[i] && ("data" == i.toLowerCase() ? b.movie = a[i] : "styleclass" == i.toLowerCase() ? d += ' class="' + a[i] + '"' : "classid" != i.toLowerCase() && (d += " " +
                    i + '="' + a[i] + '"'));
                i = "";
                for (var l in b) b[l] != Object.prototype[l] && (i += '<param name="' + l + '" value="' + b[l] + '" />');
                g.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + d + ">" + i + "</object>";
                K[K.length] = a.id;
                h = o(a.id)
            } else {
                l = f.createElement(t);
                l.setAttribute("type", G);
                for (var k in a) a[k] != Object.prototype[k] && ("styleclass" == k.toLowerCase() ? l.setAttribute("class", a[k]) : "classid" != k.toLowerCase() && l.setAttribute(k, a[k]));
                for (d in b) b[d] != Object.prototype[d] && "movie" != d.toLowerCase() &&
                    (a = l, i = d, k = b[d], c = f.createElement("param"), c.setAttribute("name", i), c.setAttribute("value", k), a.appendChild(c));
                g.parentNode.replaceChild(l, g);
                h = l
            }
        return h
    }

    function Q(a) {
        var b = o(a);
        b && "OBJECT" == b.nodeName && (e.ie && e.win ? (b.style.display = "none", function() {
            if (4 == b.readyState) {
                var c = o(a);
                if (c) {
                    for (var h in c) "function" == typeof c[h] && (c[h] = null);
                    c.parentNode.removeChild(c)
                }
            } else setTimeout(arguments.callee, 10)
        }()) : b.parentNode.removeChild(b))
    }

    function o(a) {
        var b = null;
        try {
            b = f.getElementById(a)
        } catch (c) {}
        return b
    }

    function V(a, b, c) {
        a.attachEvent(b, c);
        D[D.length] = [a, b, c]
    }

    function H(a) {
        var b = e.pv,
            a = a.split(".");
        a[0] = parseInt(a[0], 10);
        a[1] = parseInt(a[1], 10) || 0;
        a[2] = parseInt(a[2], 10) || 0;
        return b[0] > a[0] || b[0] == a[0] && b[1] > a[1] || b[0] == a[0] && b[1] == a[1] && b[2] >= a[2] ? !0 : !1
    }

    function R(a, b, c, h) {
        if (!e.ie || !e.mac) {
            var g = f.getElementsByTagName("head")[0];
            if (g) {
                c = c && "string" == typeof c ? c : "screen";
                h && (N = m = null);
                if (!m || N != c) h = f.createElement("style"), h.setAttribute("type", "text/css"), h.setAttribute("media", c), m = g.appendChild(h),
                    e.ie && e.win && typeof f.styleSheets != j && 0 < f.styleSheets.length && (m = f.styleSheets[f.styleSheets.length - 1]), N = c;
                e.ie && e.win ? m && typeof m.addRule == t && m.addRule(a, b) : m && typeof f.createTextNode != j && m.appendChild(f.createTextNode(a + " {" + b + "}"))
            }
        }
    }

    function A(a, b) {
        if (S) {
            var c = b ? "visible" : "hidden";
            z && o(a) ? o(a).style.visibility = c : R("#" + a, "visibility:" + c)
        }
    }

    function T(a) {
        return null != /[\\\"<>\.;]/.exec(a) && typeof encodeURIComponent != j ? encodeURIComponent(a) : a
    }
    var j = "undefined",
        t = "object",
        G = "application/x-shockwave-flash",
        P = "SWFObjectExprInst",
        p = window,
        f = document,
        w = navigator,
        U = !1,
        F = [function() {
            U ? B() : n()
        }],
        v = [],
        K = [],
        D = [],
        E, J, M, O, z = !1,
        I = !1,
        m, N, S = !0,
        e = function() {
            var a = typeof f.getElementById != j && typeof f.getElementsByTagName != j && typeof f.createElement != j,
                b = w.userAgent.toLowerCase(),
                c = w.platform.toLowerCase(),
                h = c ? /win/.test(c) : /win/.test(b),
                c = c ? /mac/.test(c) : /mac/.test(b),
                b = /webkit/.test(b) ? parseFloat(b.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : !1,
                g = !+"\v1",
                e = [0, 0, 0],
                d = null;
            if (typeof w.plugins != j && typeof w.plugins["Shockwave Flash"] ==
                t) {
                if ((d = w.plugins["Shockwave Flash"].description) && !(typeof w.mimeTypes != j && w.mimeTypes[G] && !w.mimeTypes[G].enabledPlugin)) U = !0, g = !1, d = d.replace(/^.*\s+(\S+\s+\S+$)/, "$1"), e[0] = parseInt(d.replace(/^(.*)\..*$/, "$1"), 10), e[1] = parseInt(d.replace(/^.*\.(.*)\s.*$/, "$1"), 10), e[2] = /[a-zA-Z]/.test(d) ? parseInt(d.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0
            } else if (typeof p.ActiveXObject != j) try {
                var l = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
                if (l && (d = l.GetVariable("$version"))) g = !0, d = d.split(" ")[1].split(","),
                    e = [parseInt(d[0], 10), parseInt(d[1], 10), parseInt(d[2], 10)]
            } catch (k) {}
            return {
                w3: a,
                pv: e,
                wk: b,
                ie: g,
                win: h,
                mac: c
            }
        }();
    (function() {
        e.w3 && ((typeof f.readyState != j && "complete" == f.readyState || typeof f.readyState == j && (f.getElementsByTagName("body")[0] || f.body)) && d(), z || (typeof f.addEventListener != j && f.addEventListener("DOMContentLoaded", d, !1), e.ie && e.win && (f.attachEvent("onreadystatechange", function() {
            "complete" == f.readyState && (f.detachEvent("onreadystatechange", arguments.callee), d())
        }), p == top && function() {
            if (!z) {
                try {
                    f.documentElement.doScroll("left")
                } catch (a) {
                    setTimeout(arguments.callee,
                        0);
                    return
                }
                d()
            }
        }()), e.wk && function() {
            z || (/loaded|complete/.test(f.readyState) ? d() : setTimeout(arguments.callee, 0))
        }(), q(d)))
    })();
    (function() {
        e.ie && e.win && window.attachEvent("onunload", function() {
            for (var a = D.length, b = 0; b < a; b++) D[b][0].detachEvent(D[b][1], D[b][2]);
            a = K.length;
            for (b = 0; b < a; b++) Q(K[b]);
            for (var c in e) e[c] = null;
            e = null;
            for (var d in swfobject) swfobject[d] = null;
            swfobject = null
        })
    })();
    return {
        registerObject: function(a, b, c, d) {
            if (e.w3 && a && b) {
                var f = {};
                f.id = a;
                f.swfVersion = b;
                f.expressInstall = c;
                f.callbackFn =
                    d;
                v[v.length] = f;
                A(a, !1)
            } else d && d({
                success: !1,
                id: a
            })
        },
        getObjectById: function(a) {
            if (e.w3) return C(a)
        },
        embedSWF: function(a, b, c, d, f, p, i, l, k, n) {
            var o = {
                success: !1,
                id: b
            };
            e.w3 && !(e.wk && 312 > e.wk) && a && b && c && d && f ? (A(b, !1), x(function() {
                c += "";
                d += "";
                var e = {};
                if (k && typeof k === t)
                    for (var m in k) e[m] = k[m];
                e.data = a;
                e.width = c;
                e.height = d;
                m = {};
                if (l && typeof l === t)
                    for (var q in l) m[q] = l[q];
                if (i && typeof i === t)
                    for (var r in i) m.flashvars = typeof m.flashvars != j ? m.flashvars + ("&" + r + "=" + i[r]) : r + "=" + i[r];
                if (H(f)) q = L(e, m, b), e.id ==
                    b && A(b, !0), o.success = !0, o.ref = q;
                else {
                    if (p && s()) {
                        e.data = p;
                        y(e, m, b, n);
                        return
                    }
                    A(b, !0)
                }
                n && n(o)
            })) : n && n(o)
        },
        switchOffAutoHideShow: function() {
            S = !1
        },
        ua: e,
        getFlashPlayerVersion: function() {
            return {
                major: e.pv[0],
                minor: e.pv[1],
                release: e.pv[2]
            }
        },
        hasFlashPlayerVersion: H,
        createSWF: function(a, b, c) {
            if (e.w3) return L(a, b, c)
        },
        showExpressInstall: function(a, b, c, d) {
            e.w3 && s() && y(a, b, c, d)
        },
        removeSWF: function(a) {
            e.w3 && Q(a)
        },
        createCSS: function(a, b, c, d) {
            e.w3 && R(a, b, c, d)
        },
        addDomLoadEvent: x,
        addLoadEvent: q,
        getQueryParamValue: function(a) {
            var b =
                f.location.search || f.location.hash;
            if (b) {
                /\?/.test(b) && (b = b.split("?")[1]);
                if (null == a) return T(b);
                for (var b = b.split("&"), c = 0; c < b.length; c++)
                    if (b[c].substring(0, b[c].indexOf("=")) == a) return T(b[c].substring(b[c].indexOf("=") + 1))
            }
            return ""
        },
        expressInstallCallback: function() {
            if (I) {
                var a = o(P);
                a && E && (a.parentNode.replaceChild(E, a), J && (A(J, !0), e.ie && e.win && (E.style.display = "block")), M && M(O));
                I = !1
            }
        }
    }
}();