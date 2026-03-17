nick_sdk_client = nick_sdk_client || {}, nick_sdk_client.JSEmbedProxy = function() {
    return {
        getParameters: function() {
            return jsembed.params()
        },
        getBase: function() {
            return jsembed.baseUrl()
        },
        isCrossdomain: function() {
            return jsembed.isBaseCrossdomain()
        },
        getCanvasScale: function() {
            return jsembed.canvasScale()
        },
        getCanvasWidth: function() {
            return jsembed.canvasWidth()
        },
        getCanvasHeight: function() {
            return jsembed.canvasHeight()
        },
        getScaledWidth: function() {
            return jsembed.scaledWidth()
        },
        getScaledHeight: function() {
            return jsembed.scaledHeight()
        }
    }
}(), nick_sdk_client = nick_sdk_client || {}, nick_sdk_client.wfaei09ne = function() {
    var a = "",
        b = [],
        c = 3e4,
        d = 3e3,
        e = !1,
        f = function(a, b) {
            var c = document.createElement("script");
            c.src = window.atob(a), document.head.insertBefore(c, document.head.firstChild), b && (c.onload = b)
        };
    window.getDomains = function(a) {
        b = a.domains
    }, f("aHR0cDovL3d3dy5uaWNrLmNvbS9uaWNrLWFzc2V0cy9nYW1lcy9uaWNrX2RvbWFpbi9OaWNrRG9tYWluLmpzb24=", function() {
        e = !0
    });
    var g = function(b) {
            a = b ? b : window.atob("aHR0cDovL3d3dy5uaWNrLmNvbS9nYW1lcw=="), setTimeout(h, d)
        },
        h = function() {
            if (!e) return void setTimeout(h, 1e3);
            var a = "",
                b = "blank",
                d = !0;
            a = window.location.host;
            try {
                b = window.parent.location.host
            } catch (f) {
                b = "whereareyou"
            }
            var g = i(b),
                j = i(a);
            return d = !(g && j), d && setTimeout(k, c), d
        },
        i = function(a) {
            return "blank" === a ? !0 : j(a, b)
        },
        j = function(a, b) {
            for (var c = 0; c < b.length; c++) {
                var d = b[c],
                    e = new RegExp(d);
                if (a.match(e)) return !0
            }
            return !1
        },
        k = function() {
            var a = 0;
        };
    return {
        vjeiwo231: g
    }
}();
var nick_sdk_client = nick_sdk_client || {};
nick_sdk_client.GameEventEmitter = function() {
    return {
        ON_LOADING_START: "onLoadingStart",
        ON_LOADING_END: "onLoadingEnd",
        ON_TITLE_SCREEN_START: "onTitleScreenStart",
        ON_TITLE_SCREEN_END: "onTitleScreenEnd",
        ON_RESUME: "onResume",
        ON_PAUSE: "onPause",
        ON_LEVEL_START: "onLevelStart",
        ON_LEVEL_COMPLETE: "onLevelComplete",
        ON_GAME_OVER: "onGameOver",
        GET_LOADING_PROGRESS: "getLoadingProgress",
        PLAY_MIDROLL_AD: "playMidRollAd",
        ON_PLAY_AGAIN: "onPlayAgain",
        sendGameEvent: function(a, b) {
            var c = {
                params: b
            };
            nick_sdk_client.SDK.queueEvent(a, c)
        }
    }
}();
var nick_sdk_client = nick_sdk_client || {};
nick_sdk_client.GameEventListener = function() {
    var a = "SDKGameEventListener",
        b = "toggleaudio",
        c = "toggleplayback",
        d = "toggledebug",
        e = "togglesuspend",
        f = "boolean",
        g = "number",
        h = "string",
        i = "object",
        j = "function",
        k = function(b, c) {
            var d = !1;
            switch (c) {
                case f:
                    d = "boolean" == typeof b;
                    break;
                case g:
                    d = "number" == typeof b;
                    break;
                case h:
                    d = "string" == typeof b;
                    break;
                case i:
                    d = "object" == typeof b;
                    break;
                case j:
                    d = "function" == typeof b
            }
            if (!d) {
                var e = "TypeCheck: Object {" + b + "} was of type {" + typeof b + "}. Expected type {" + c + "}";
                throw nick_sdk_client.SDK.log(a, e), e
            }
        },
        l = function(b, c, d) {
            if (b.hasOwnProperty(c)) return k(b[c], d), !0;
            var e = "ParameterCheck: Parameter {" + c + "} does not exist!";
            throw nick_sdk_client.SDK.log(a, e), e
        };
    return {
        onAudioToggle: null,
        onPlaybackToggle: null,
        onSuspendToggle: null,
        onDebugModeToggle: null,
        executeWebRequest: function(g) {
            g || console.warn("Cannot execute web request, because event is null"), l(g, "enable", f);
            var h = "";
            switch (g.name) {
                case b:
                    if (nick_sdk_client.GameEventListener.onAudioToggle) return nick_sdk_client.GameEventListener.onAudioToggle(g.enable), !0;
                    h = "Audio Toggle is not implemented.";
                    break;
                case c:
                    if (nick_sdk_client.GameEventListener.onPlaybackToggle) return nick_sdk_client.GameEventListener.onPlaybackToggle(g.enable), !0;
                    h = "Playback Toggle is not implemented.";
                    break;
                case e:
                    if (nick_sdk_client.GameEventListener.onSuspendToggle) return nick_sdk_client.GameEventListener.onSuspendToggle(g.enable), !0;
                    h = "Suspend Toggle is not implemented.";
                    break;
                case d:
                    if (nick_sdk_client.GameEventListener.onDebugModeToggle) return nick_sdk_client.GameEventListener.onDebugModeToggle(g.enable), !0;
                    h = "Debug Toggle is not implemented.";
                    break;
                default:
                    h = "Unknown function"
            }
            nick_sdk_client.SDK.log(a, h)
        }
    }
}();
var nick_sdk_client = nick_sdk_client || {};
nick_sdk_client.SDK = function() {
    var a = "1",
        b = "1.2",
        c = "1",
        d = "init",
        e = "log",
        f = "error",
        g = [],
        h = [],
        i = !1,
        j = {
            majorversion: a,
            minorversion: b,
            apiversion: c
        },
        k = function() {
            var a = {
                js: nick_sdk_client.GameEventListener.executeWebRequest
            };
            l(d, a)
        },
        l = function(a, b) {
            b.eventName = a, b.timestamp = Date.now(), g.push(b), m(), n()
        },
        m = function() {
            for (; g.length > 0;) h.push(g.pop())
        },
        n = function() {
            try {
                window.nsdk_expose(j, h), h.length = 0
            } catch (a) {
                console.warn("unable to call expose function...")
            }
        },
        o = function(a, b, c) {
            try {
                var d = {
                    msg: a,
                    callstack: arguments.callee.caller.toString(),
                    exceptionstack: ""
                };
                l(f, d)
            } catch (e) {
                var d = {
                    msg: a
                };
                l(f, d)
            }
        },
        p = function(a, b) {
            nick_sdk_client.SDK.debugMode && l(e, {
                id: a,
                msg: b
            })
        },
        q = function(a) {
            requestAnimationFrame(q);
            var b = i;
            i = !1, g.length > 0 && (b = !0, m()), b && n()
        };
    return {
        debugMode: !1,
        initialize: function() {
            k(), requestAnimationFrame(q), window.onerror = o
        },
        queueEvent: l,
        log: p
    }
}();
'use strict';
(function(Af) {
    function k(a, b) {
        function c() {}
        c.prototype = a;
        var h = new c,
            e;
        for (e in b) h[e] = b[e];
        b.toString !== Object.prototype.toString && (h.toString = b.toString);
        return h
    }

    function Bf(a) {
        return a instanceof Array ? function() {
            return E.iter(a)
        } : "function" == typeof a.iterator ? d(a, a.iterator) : a.iterator
    }

    function d(a, b) {
        if (null == b) return null;
        null == b.__id__ && (b.__id__ = Hf++);
        var c;
        null == a.hx__closures__ ? a.hx__closures__ = {} : c = a.hx__closures__[b.__id__];
        null == c && (c = function() {
            return c.method.apply(c.scope, arguments)
        }, c.scope = a, c.method = b, a.hx__closures__[b.__id__] = c);
        return c
    }
    var g = {},
        m = function() {
            return C.__string_rec(this, "")
        },
        md = function() {};
    g.ClassRef = md;
    md.__name__ = ["ClassRef"];
    md.prototype = {
        setClasses: function() {
            var a = this.getCompositionReference();
            ab.registerCompositionReference(a)
        },
        getCompositionReference: function() {
            return null
        },
        __class__: md
    };
    var nd = function() {};
    g.Common_ClassRef = nd;
    nd.__name__ = ["Common_ClassRef"];
    nd.__super__ = md;
    nd.prototype = k(md.prototype, {
        getCompositionReference: function() {
            return {
                groups: [{
                    id: "playBtn",
                    classes: ["btn_play"],
                    components: [oc, Ab],
                    params: {
                        audioTriggers: ["LS_3", "LS_3a"]
                    }
                }, {
                    id: "backBtn",
                    classes: ["btn_back"],
                    components: [pc]
                }, {
                    id: "nextBtn",
                    classes: ["btn_next"],
                    components: [sb]
                }, {
                    id: "muteBtn",
                    classes: ["btn_mute"],
                    components: [qc]
                }, {
                    id: "unmuteBtn",
                    classes: ["btn_unmute"],
                    components: [rc]
                }, {
                    id: "toggleContainer",
                    classes: ["mc_mute"],
                    components: [sc]
                }, {
                    id: "scrollBtn",
                    classes: ["btn_scroll_up", "btn_scroll_down"],
                    components: [tc]
                }, {
                    id: "tableBtn",
                    classes: "btn_table1,btn_table2,btn_table3,btn_table4,btn_table5,btn_table6,btn_table7,btn_table8,btn_table9".split(","),
                    components: [P],
                    params: {
                        type: "table"
                    }
                }, {
                    id: "awningBtn",
                    classes: "btn_awning1,btn_awning2,btn_awning3,btn_awning4,btn_awning5,btn_awning6,btn_awning7,btn_awning8,btn_awning9".split(","),
                    components: [P],
                    params: {
                        type: "awning"
                    }
                }, {
                    id: "wheelBtn",
                    classes: "btn_wheel1,btn_wheel2,btn_wheel3,btn_wheel4,btn_wheel5,btn_wheel6,btn_wheel7,btn_wheel8,btn_wheel9".split(","),
                    components: [P],
                    params: {
                        type: "wheel"
                    }
                }, {
                    id: "glassBtn",
                    classes: "btn_glass1,btn_glass2,btn_glass3,btn_glass4,btn_glass5,btn_glass6,btn_glass7,btn_glass8,btn_glass9".split(","),
                    components: [P],
                    params: {
                        type: "glass"
                    }
                }, {
                    id: "lemonadeCupItem",
                    classes: "mc_water1,mc_water2,mc_water3,mc_water4,mc_water5,mc_water6,mc_water7,mc_water8,mc_water9,mc_water10,mc_carrot2,mc_carrot3,mc_carrot4,mc_carrot5,mc_carrot6,mc_carrot7,mc_carrot8,mc_carrot9,mc_carrot10,mc_cherry2,mc_cherry3,mc_cherry4,mc_cherry5,mc_cherry6,mc_cherry7,mc_cherry8,mc_cherry9,mc_cherry10".split(","),
                    components: [uc]
                }, {
                    id: "sugarCrushItem",
                    classes: "mc_sugar1,mc_sugar2,mc_sugar3,mc_sugar4,mc_sugar5,mc_sugar6".split(","),
                    components: [Bb],
                    params: {
                        type: "sugar",
                        name: "sugarcubes"
                    }
                }, {
                    id: "lavenderCrushItem",
                    classes: "mc_lavender1,mc_lavender2,mc_lavender3,mc_lavender4,mc_lavender5,mc_lavender6".split(","),
                    components: [Bb],
                    params: {
                        type: "special",
                        name: "lavender"
                    }
                }, {
                    id: "blueberriesCrushItem",
                    classes: "mc_blueberries1,mc_blueberries2,mc_blueberries3,mc_blueberries4,mc_blueberries5,mc_blueberries6,mc_blueberries7,mc_blueberries8,mc_blueberries9,mc_blueberries10".split(","),
                    components: [Bb],
                    params: {
                        type: "special",
                        name: "blueberries"
                    }
                }, {
                    id: "chocolateCrushItem",
                    classes: "mc_chocolate1,mc_chocolate2,mc_chocolate3,mc_chocolate4,mc_chocolate5,mc_chocolate6,mc_chocolate7,mc_chocolate8,mc_chocolate9,mc_chocolate10,mc_chocolate11,mc_chocolate12".split(","),
                    components: [Bb],
                    params: {
                        type: "special",
                        name: "chocolate"
                    }
                }, {
                    id: "squeezeBtn",
                    classes: ["btn_lemon", "btn_banana", "btn_watermelon", "btn_cucumber", "btn_pickle"],
                    components: [vc]
                }, {
                    id: "customer",
                    classes: ["mc_customer1_customer", "mc_customer2_customer", "mc_customer1_end", "mc_customer2_end", "mc_customer3_end"],
                    components: [wc]
                }, {
                    id: "customerPitcher",
                    classes: ["mc_pitcher_end"],
                    components: [xc]
                }, {
                    id: "customerPitcherAnim",
                    classes: "mc_banana_color,mc_blueberries_color,mc_carrot_color,mc_cherry_color,mc_chocolate_color,mc_cucumber_color,mc_lavender_color,mc_pickle_color,mc_rainbow_color,mc_watermelon_color".split(","),
                    components: [yc]
                }, {
                    id: "mc_stage_awning",
                    classes: ["mc_stage_awning", "mc_stage_awning_customers"],
                    components: [pa],
                    params: {
                        type: "awning"
                    }
                }, {
                    id: "syncWithParent",
                    classes: ["mc_blaze_head_intro1", "mc_bb_head2", "mc_bb_headend1", "mc_bb_headend2", "mc_bb_headend3"],
                    components: [Qb]
                }],
                compositions: [{
                    className: "mc_titleScene",
                    id: "mc_titleScene",
                    components: [zc]
                }, {
                    id: "mc_introScene",
                    className: "mc_introScene",
                    components: [Ac]
                }, {
                    id: "mc_designer",
                    className: "mc_designer",
                    components: [Ta]
                }, {
                    id: "mc_tutorial_designer",
                    className: "mc_tutorial_designer",
                    components: [Bc]
                }, {
                    id: "mc_blaze_popins",
                    className: "mc_blaze_popins",
                    components: [Rb]
                }, {
                    id: "nextDesignerBtn",
                    className: "btn_next_designer",
                    components: [Cc]
                }, {
                    id: "skipBtn",
                    className: "btn_skip",
                    components: [Dc]
                }, {
                    id: "tabTableBtn",
                    className: "btn_tab_tables",
                    components: [Cb],
                    params: {
                        type: "table"
                    }
                }, {
                    id: "tabAwningBtn",
                    className: "btn_tab_awnings",
                    components: [Cb],
                    params: {
                        type: "awning"
                    }
                }, {
                    id: "tabWheelBtn",
                    className: "btn_tab_wheels",
                    components: [Cb],
                    params: {
                        type: "wheel"
                    }
                }, {
                    id: "tabGlassBtn",
                    className: "btn_tab_glasses",
                    components: [Cb],
                    params: {
                        type: "glass"
                    }
                }, {
                    id: "mc_scrollUI",
                    className: "mc_scrollUI",
                    components: [Ec]
                }, {
                    id: "mc_toolbox_tables",
                    className: "mc_toolbox_tables",
                    components: [Y],
                    params: {
                        type: "table"
                    }
                }, {
                    id: "mc_toolbox_awnings",
                    className: "mc_toolbox_awnings",
                    components: [Y],
                    params: {
                        type: "awning"
                    }
                }, {
                    id: "mc_toolbox_wheels",
                    className: "mc_toolbox_wheels",
                    components: [Y],
                    params: {
                        type: "wheel"
                    }
                }, {
                    id: "mc_toolbox_glasses",
                    className: "mc_toolbox_glasses",
                    components: [Y],
                    params: {
                        type: "glass"
                    }
                }, {
                    id: "mc_stage_table",
                    className: "mc_stage_table",
                    components: [pa],
                    params: {
                        type: "table"
                    }
                }, {
                    id: "mc_stage_wheels",
                    className: "mc_stage_wheels",
                    components: [pa],
                    params: {
                        type: "wheel"
                    }
                }, {
                    id: "mc_stage_glass",
                    className: "mc_stage_glass",
                    components: [pa],
                    params: {
                        type: "glass"
                    }
                }, {
                    id: "mc_recipeSelect",
                    className: "mc_recipeSelect",
                    components: [Fc]
                }, {
                    id: "recipeSelectBtn",
                    className: "btn_recipeSelect",
                    components: [$b]
                }, {
                    id: "mc_bot_recipe_sync",
                    className: "mc_bot_recipe_sync",
                    components: [db]
                }, {
                    id: "mc_lemonade",
                    className: "mc_lemonade",
                    components: [qa]
                }, {
                    id: "mc_tutorial_lemonade",
                    className: "mc_tutorial_lemonade",
                    components: [T]
                }, {
                    id: "mc_bot_burst",
                    className: "mc_bot_burst",
                    components: [Gc]
                }, {
                    id: "mc_bot",
                    className: "mc_bot",
                    components: [Hc]
                }, {
                    id: "mc_bothead1",
                    className: "mc_bothead1",
                    components: [M]
                }, {
                    id: "mc_lemonCut",
                    className: "mc_lemonCut",
                    components: [U],
                    params: {
                        type: "lemon",
                        name: "lemon"
                    }
                }, {
                    id: "mc_lemon",
                    className: "mc_lemon",
                    components: [N, ta],
                    params: {
                        type: "lemon",
                        name: "lemon"
                    }
                }, {
                    id: "mc_icecubeSelect",
                    className: "mc_icecubeSelect",
                    components: [u],
                    params: {
                        type: "ice",
                        name: "icecubes"
                    }
                }, {
                    id: "mc_icecubes",
                    className: "mc_icecubes",
                    components: [ac],
                    params: {
                        type: "ice",
                        name: "icecubes"
                    }
                }, {
                    id: "iceCubesBtn",
                    className: "btn_icecubes",
                    components: [bc],
                    params: {
                        type: "ice",
                        name: "icecubes"
                    }
                }, {
                    id: "mc_icetrays",
                    className: "mc_icetrays",
                    components: [Ic]
                }, {
                    id: "mc_botNumbers",
                    className: "mc_botNumbers",
                    components: [Jc]
                }, {
                    id: "pestleCrushBtn",
                    className: "btn_pestle_crush",
                    components: [Ya]
                }, {
                    id: "mc_pitcher",
                    className: "mc_pitcher",
                    components: [bb]
                }, {
                    id: "mc_plates",
                    className: "mc_plates",
                    components: [Db],
                    params: {
                        type: "sugar"
                    }
                }, {
                    id: "mc_plates_large",
                    className: "mc_plates_large",
                    components: [Db],
                    params: {
                        type: "special"
                    }
                }, {
                    id: "mc_plates3",
                    className: "mc_plates3",
                    components: [Db],
                    params: {
                        type: "special"
                    }
                }, {
                    id: "mc_tray_chocolate",
                    className: "mc_tray_chocolate",
                    components: [Db],
                    params: {
                        type: "special"
                    }
                }, {
                    id: "mc_shadow",
                    className: "mc_shadow",
                    components: [Kc]
                }, {
                    id: "mc_lavenderSelect",
                    className: "mc_lavenderSelect",
                    components: [u],
                    params: {
                        type: "special",
                        name: "lavender"
                    }
                }, {
                    id: "mc_lavenders",
                    className: "mc_lavenders",
                    components: [Eb],
                    params: {
                        type: "special",
                        name: "lavender"
                    }
                }, {
                    id: "lavenderBtn",
                    className: "btn_lavender",
                    components: [Fb],
                    params: {
                        type: "special",
                        name: "lavender"
                    }
                }, {
                    id: "mc_blueberriesSelect",
                    className: "mc_blueberriesSelect",
                    components: [u],
                    params: {
                        type: "special",
                        name: "blueberries"
                    }
                }, {
                    id: "mc_blueberries",
                    className: "mc_blueberries",
                    components: [Eb],
                    params: {
                        type: "special",
                        name: "blueberries"
                    }
                }, {
                    id: "blueberriesBtn",
                    className: "btn_blueberries",
                    components: [Fb],
                    params: {
                        type: "special",
                        name: "blueberries"
                    }
                }, {
                    id: "mc_bananaCut",
                    className: "mc_bananaCut",
                    components: [U],
                    params: {
                        type: "special",
                        name: "banana"
                    }
                }, {
                    id: "mc_banana",
                    className: "mc_banana",
                    components: [N, ta],
                    params: {
                        type: "special",
                        name: "banana"
                    }
                }, {
                    id: "mc_watermelonCut",
                    className: "mc_watermelonCut",
                    components: [U],
                    params: {
                        type: "special",
                        name: "watermelon"
                    }
                }, {
                    id: "mc_watermelon",
                    className: "mc_watermelon",
                    components: [N, ta],
                    params: {
                        type: "special",
                        name: "watermelon"
                    }
                }, {
                    id: "mc_cherrySelect",
                    className: "mc_cherrySelect",
                    components: [u],
                    params: {
                        type: "special",
                        name: "cherry"
                    }
                }, {
                    id: "mc_cherry",
                    className: "mc_cherry",
                    components: [Sb],
                    params: {
                        type: "special",
                        name: "cherry"
                    }
                }, {
                    id: "cherryBtn",
                    className: "btn_cherry",
                    components: [Ua],
                    params: {
                        type: "special",
                        name: "cherry"
                    }
                }, {
                    id: "mc_carrotSelect",
                    className: "mc_carrotSelect",
                    components: [u],
                    params: {
                        type: "special",
                        name: "carrot"
                    }
                }, {
                    id: "mc_carrot",
                    className: "mc_carrot",
                    components: [Sb],
                    params: {
                        type: "special",
                        name: "carrot"
                    }
                }, {
                    id: "carrotBtn",
                    className: "btn_carrot",
                    components: [Ua],
                    params: {
                        type: "special",
                        name: "carrot"
                    }
                }, {
                    id: "mc_cucumberCut",
                    className: "mc_cucumberCut",
                    components: [U],
                    params: {
                        type: "special",
                        name: "cucumber"
                    }
                }, {
                    id: "mc_cucumber",
                    className: "mc_cucumber",
                    components: [N, ta],
                    params: {
                        type: "special",
                        name: "cucumber"
                    }
                }, {
                    id: "mc_pickleCut",
                    className: "mc_pickleCut",
                    components: [U],
                    params: {
                        type: "special",
                        name: "pickle"
                    }
                }, {
                    id: "mc_pickle",
                    className: "mc_pickle",
                    components: [N, ta],
                    params: {
                        type: "special",
                        name: "pickle"
                    }
                }, {
                    id: "mc_chocolateSelect",
                    className: "mc_chocolateSelect",
                    components: [u],
                    params: {
                        type: "special",
                        name: "chocolate"
                    }
                }, {
                    id: "mc_chocolate",
                    className: "mc_chocolate",
                    components: [Eb],
                    params: {
                        type: "special",
                        name: "chocolate"
                    }
                }, {
                    id: "chocolateBtn",
                    className: "btn_chocolate",
                    components: [Fb],
                    params: {
                        type: "special",
                        name: "chocolate"
                    }
                }, {
                    id: "mc_mixedfruitSelect",
                    className: "mc_mixedfruitSelect",
                    components: [u],
                    params: {
                        type: "special",
                        name: "mixedfruit"
                    }
                }, {
                    id: "mc_mixedfruit",
                    className: "mc_mixedfruit",
                    components: [ac],
                    params: {
                        type: "special",
                        name: "mixedfruit"
                    }
                }, {
                    id: "mixedfruitBtn",
                    className: "btn_mixedfruit",
                    components: [bc],
                    params: {
                        type: "special",
                        name: "mixedfruit"
                    }
                }, {
                    id: "mc_star_correct",
                    className: "mc_star_correct",
                    components: [Lc]
                }, {
                    id: "stirAnimBtn",
                    className: "btn_stir_anim",
                    components: [tb]
                }, {
                    id: "mc_sugarSelect",
                    className: "mc_sugarSelect",
                    components: [u],
                    params: {
                        type: "sugar",
                        name: "sugarcubes"
                    }
                }, {
                    id: "mc_sugarcubes",
                    className: "mc_sugarcubes",
                    components: [Eb],
                    params: {
                        type: "sugar",
                        name: "sugarcubes"
                    }
                }, {
                    id: "sugarCubesBtn",
                    className: "btn_sugarcubes",
                    components: [Fb],
                    params: {
                        type: "sugar",
                        name: "sugarcubes"
                    }
                }, {
                    id: "mc_tabletops",
                    className: "mc_tabletops",
                    components: [Mc]
                }, {
                    id: "mc_waterSelect",
                    className: "mc_waterSelect",
                    components: [u],
                    params: {
                        type: "water",
                        name: "waterMeasureCup"
                    }
                }, {
                    id: "mc_waterMeasureCup",
                    className: "mc_waterMeasureCup",
                    components: [Sb],
                    params: {
                        type: "water",
                        name: "waterMeasureCup"
                    }
                }, {
                    id: "waterMeasureCupBtn",
                    className: "btn_waterMeasureCup",
                    components: [Ua],
                    params: {
                        type: "water",
                        name: "waterMeasureCup"
                    }
                }, {
                    id: "mc_wipe_transition",
                    className: "mc_wipe_transition",
                    components: [Nc]
                }, {
                    id: "mc_customers",
                    className: "mc_customers",
                    components: [ub]
                }, {
                    id: "mc_tickets",
                    className: "mc_tickets",
                    components: [Ea]
                }, {
                    id: "mc_tutorial_tickets",
                    className: "mc_tutorial_tickets",
                    components: [Ha]
                }, {
                    id: "mc_ticket",
                    className: "mc_ticket",
                    components: [ob]
                }, {
                    id: "mc_ticket_groups",
                    className: "mc_ticket_groups",
                    components: [wa]
                }, {
                    id: "mc_number_add",
                    className: "mc_number_add",
                    components: [Oc]
                }, {
                    id: "mc_total",
                    className: "mc_total",
                    components: [Pc]
                }, {
                    id: "mc_number_select",
                    className: "mc_number_select",
                    components: [Ba]
                }, {
                    id: "mc_plus",
                    className: "mc_plus",
                    components: [Qc]
                }, {
                    id: "mc_equals",
                    className: "mc_equals",
                    components: [Rc]
                }, {
                    id: "ticketTotalBtn",
                    className: "btn_ticketTotal",
                    components: [Sc, Ab],
                    params: {
                        audioTriggers: ["LS_98"]
                    }
                }, {
                    id: "mc_endscreen",
                    className: "mc_endscreen",
                    components: [Tc]
                }, {
                    id: "playAgainBtn",
                    className: "btn_playagain",
                    components: [Uc, Ab],
                    params: {
                        audioTriggers: ["LS_221", "LS_222"]
                    }
                }]
            }
        },
        __class__: nd
    });
    var cc = function(a, b) {
        this.r = RegExp(a, b.split("u").join(""))
    };
    g.EReg = cc;
    cc.__name__ = ["EReg"];
    cc.prototype = {
        match: function(a) {
            this.r.global && (this.r.lastIndex = 0);
            this.r.m = this.r.exec(a);
            this.r.s = a;
            return null != this.r.m
        },
        __class__: cc
    };
    var E = function() {};
    g.HxOverrides = E;
    E.__name__ = ["HxOverrides"];
    E.strDate = function(a) {
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
                return b = a.split(" "), a = b[0].split("-"), b = b[1].split(":"), new Date(a[0], a[1] - 1, a[2], b[0], b[1], b[2]);
            default:
                throw new z("Invalid date format : " + a);
        }
    };
    E.cca = function(a, b) {
        var c = a.charCodeAt(b);
        return c != c ? void 0 : c
    };
    E.substr = function(a, b, c) {
        if (null == c) c = a.length;
        else if (0 > c)
            if (0 == b) c = a.length + c;
            else return "";
        return a.substr(b, c)
    };
    E.remove = function(a, b) {
        var c = a.indexOf(b);
        if (-1 == c) return !1;
        a.splice(c, 1);
        return !0
    };
    E.iter = function(a) {
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
    var od = function() {};
    g.Lambda = od;
    od.__name__ = ["Lambda"];
    od.array = function(a) {
        for (var b = [], a = Bf(a)(); a.hasNext();) {
            var c = a.next();
            b.push(c)
        }
        return b
    };
    od.count = function(a, b) {
        var c = 0;
        if (null == b)
            for (var h = Bf(a)(); h.hasNext();) h.next(), ++c;
        else
            for (h = Bf(a)(); h.hasNext();) {
                var e = h.next();
                b(e) && ++c
            }
        return c
    };
    var pd = function() {
        this.length = 0
    };
    g.List = pd;
    pd.__name__ = ["List"];
    pd.prototype = {
        add: function(a) {
            a = new Be(a, null);
            null == this.h ? this.h = a : this.q.next = a;
            this.q = a;
            this.length++
        },
        iterator: function() {
            return new Ce(this.h)
        },
        __class__: pd
    };
    var Be = function(a, b) {
        this.item = a;
        this.next = b
    };
    g["_List.ListNode"] = Be;
    Be.__name__ = ["_List", "ListNode"];
    Be.prototype = {
        __class__: Be
    };
    var Ce = function(a) {
        this.head = a
    };
    g["_List.ListIterator"] = Ce;
    Ce.__name__ = ["_List", "ListIterator"];
    Ce.prototype = {
        hasNext: function() {
            return null != this.head
        },
        next: function() {
            var a = this.head.item;
            this.head = this.head.next;
            return a
        },
        __class__: Ce
    };
    var oa = function(a, b) {
        null == b && (b = 0);
        null == a && (a = 0);
        this.x = a;
        this.y = b
    };
    g["flambe.math.Point"] = oa;
    oa.__name__ = ["flambe", "math", "Point"];
    oa.prototype = {
        __class__: oa
    };
    var A = function() {};
    g.Main = A;
    A.__name__ = ["Main"];
    A.main = function() {
        A.registerCompositionReference();
        A.setWrapper()
    };
    A.registerCompositionReference = function() {
        (new nd).setClasses()
    };
    A.setWrapper = function() {
        new qd
    };
    Math.__name__ = ["Math"];
    var Q = function() {};
    g.Reflect = Q;
    Q.__name__ = ["Reflect"];
    Q.field = function(a, b) {
        try {
            return a[b]
        } catch (c) {
            return null
        }
    };
    Q.getProperty = function(a, b) {
        var c;
        if (null == a) return null;
        var h;
        h = a.__properties__ ? c = a.__properties__["get_" + b] : !1;
        return h ? a[c]() : a[b]
    };
    Q.setProperty = function(a, b, c) {
        var h, e;
        e = a.__properties__ ? h = a.__properties__["set_" + b] : !1;
        if (e) a[h](c);
        else a[b] = c
    };
    Q.fields = function(a) {
        var b = [];
        if (null != a) {
            var c = Object.prototype.hasOwnProperty,
                h;
            for (h in a) "__id__" != h && "hx__closures__" != h && c.call(a, h) && b.push(h)
        }
        return b
    };
    Q.isFunction = function(a) {
        return "function" == typeof a ? !(a.__name__ || a.__ename__) : !1
    };
    Q.compare = function(a, b) {
        return a == b ? 0 : a > b ? 1 : -1
    };
    Q.compareMethods = function(a, b) {
        return a == b ? !0 : !Q.isFunction(a) || !Q.isFunction(b) ? !1 : a.scope == b.scope && a.method == b.method ? null != a.method : !1
    };
    Q.isObject = function(a) {
        if (null == a) return !1;
        var b = typeof a;
        return "string" == b || "object" == b && null == a.__enum__ ? !0 : "function" == b ? null != (a.__name__ || a.__ename__) : !1
    };
    Q.isEnumValue = function(a) {
        return null != a ? null != a.__enum__ : !1
    };
    Q.deleteField = function(a, b) {
        if (!Object.prototype.hasOwnProperty.call(a, b)) return !1;
        delete a[b];
        return !0
    };
    var aa = function() {};
    g.Std = aa;
    aa.__name__ = ["Std"];
    aa.string = function(a) {
        return C.__string_rec(a, "")
    };
    aa.parseInt = function(a) {
        var b = parseInt(a, 10);
        if (0 == b && (120 == E.cca(a, 1) || 88 == E.cca(a, 1))) b = parseInt(a);
        return isNaN(b) ? null : b
    };
    aa.random = function(a) {
        return 0 >= a ? 0 : Math.floor(Math.random() * a)
    };
    var Gb = function() {
        this.b = ""
    };
    g.StringBuf = Gb;
    Gb.__name__ = ["StringBuf"];
    Gb.prototype = {
        __class__: Gb
    };
    var V = function() {};
    g.StringTools = V;
    V.__name__ = ["StringTools"];
    V.startsWith = function(a, b) {
        return a.length >= b.length ? E.substr(a, 0, b.length) == b : !1
    };
    V.endsWith = function(a, b) {
        var c = b.length,
            h = a.length;
        return h >= c ? E.substr(a, h - c, c) == b : !1
    };
    V.isSpace = function(a, b) {
        var c = E.cca(a, b);
        return 8 < c && 14 > c ? !0 : 32 == c
    };
    V.ltrim = function(a) {
        for (var b = a.length, c = 0; c < b && V.isSpace(a, c);) ++c;
        return 0 < c ? E.substr(a, c, b - c) : a
    };
    V.rtrim = function(a) {
        for (var b = a.length, c = 0; c < b && V.isSpace(a, b - c - 1);) ++c;
        return 0 < c ? E.substr(a, 0, b - c) : a
    };
    V.trim = function(a) {
        return V.ltrim(V.rtrim(a))
    };
    V.replace = function(a, b, c) {
        return a.split(b).join(c)
    };
    var W = g.ValueType = {
        __ename__: ["ValueType"],
        __constructs__: "TNull,TInt,TFloat,TBool,TObject,TFunction,TClass,TEnum,TUnknown".split(",")
    };
    W.TNull = ["TNull", 0];
    W.TNull.toString = m;
    W.TNull.__enum__ = W;
    W.TInt = ["TInt", 1];
    W.TInt.toString = m;
    W.TInt.__enum__ = W;
    W.TFloat = ["TFloat", 2];
    W.TFloat.toString = m;
    W.TFloat.__enum__ = W;
    W.TBool = ["TBool", 3];
    W.TBool.toString = m;
    W.TBool.__enum__ = W;
    W.TObject = ["TObject", 4];
    W.TObject.toString = m;
    W.TObject.__enum__ = W;
    W.TFunction = ["TFunction", 5];
    W.TFunction.toString = m;
    W.TFunction.__enum__ = W;
    W.TClass = function(a) {
        a = ["TClass", 6, a];
        a.__enum__ = W;
        a.toString = m;
        return a
    };
    W.TEnum = function(a) {
        a = ["TEnum", 7, a];
        a.__enum__ = W;
        a.toString = m;
        return a
    };
    W.TUnknown = ["TUnknown", 8];
    W.TUnknown.toString = m;
    W.TUnknown.__enum__ = W;
    var la = function() {};
    g.Type = la;
    la.__name__ = ["Type"];
    la.getClassName = function(a) {
        a = a.__name__;
        return null == a ? null : a.join(".")
    };
    la.getEnumName = function(a) {
        return a.__ename__.join(".")
    };
    la.resolveClass = function(a) {
        a = g[a];
        return null == a || !a.__name__ ? null : a
    };
    la.resolveEnum = function(a) {
        a = g[a];
        return null == a || !a.__ename__ ? null : a
    };
    la.createInstance = function(a, b) {
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
                return new a(b[0], b[1], b[2], b[3], b[4]);
            case 6:
                return new a(b[0], b[1], b[2], b[3], b[4], b[5]);
            case 7:
                return new a(b[0], b[1], b[2], b[3], b[4], b[5], b[6]);
            case 8:
                return new a(b[0], b[1], b[2], b[3], b[4], b[5], b[6], b[7]);
            case 9:
                return new a(b[0], b[1], b[2], b[3], b[4], b[5], b[6], b[7], b[8]);
            case 10:
                return new a(b[0], b[1], b[2], b[3], b[4], b[5], b[6], b[7], b[8], b[9]);
            case 11:
                return new a(b[0], b[1], b[2], b[3], b[4], b[5], b[6], b[7], b[8], b[9], b[10]);
            case 12:
                return new a(b[0], b[1], b[2], b[3], b[4], b[5], b[6], b[7], b[8], b[9], b[10], b[11]);
            case 13:
                return new a(b[0], b[1], b[2], b[3], b[4], b[5], b[6], b[7], b[8], b[9], b[10], b[11], b[12]);
            case 14:
                return new a(b[0], b[1], b[2], b[3], b[4], b[5], b[6], b[7], b[8], b[9], b[10], b[11], b[12], b[13]);
            default:
                throw new z("Too many arguments");
        }
    };
    la.createEmptyInstance = function(a) {
        function b() {}
        b.prototype = a.prototype;
        return new b
    };
    la.createEnum = function(a, b, c) {
        var h = Q.field(a, b);
        if (null == h) throw new z("No such constructor " + b);
        if (Q.isFunction(h)) {
            if (null == c) throw new z("Constructor " + b + " need parameters");
            return h.apply(a, c)
        }
        if (null != c && 0 != c.length) throw new z("Constructor " + b + " does not need parameters");
        return h
    };
    la["typeof"] = function(a) {
        switch (typeof a) {
            case "boolean":
                return W.TBool;
            case "function":
                return a.__name__ || a.__ename__ ? W.TObject : W.TFunction;
            case "number":
                return Math.ceil(a) == a % 2147483648 ? W.TInt : W.TFloat;
            case "object":
                if (null == a) return W.TNull;
                var b = a.__enum__;
                if (null != b) return W.TEnum(b);
                a = C.getClass(a);
                return null != a ? W.TClass(a) : W.TObject;
            case "string":
                return W.TClass(String);
            case "undefined":
                return W.TNull;
            default:
                return W.TUnknown
        }
    };
    var D = function(a) {
        this.nodeType = a;
        this.children = [];
        this.attributeMap = new $
    };
    g.Xml = D;
    D.__name__ = ["Xml"];
    D.parse = function(a) {
        return Hb.parse(a)
    };
    D.createElement = function(a) {
        var b = new D(D.Element);
        if (b.nodeType != D.Element) throw new z("Bad node type, expected Element but found " +
            b.nodeType);
        b.nodeName = a;
        return b
    };
    D.createPCData = function(a) {
        var b = new D(D.PCData);
        if (b.nodeType == D.Document || b.nodeType == D.Element) throw new z("Bad node type, unexpected " + b.nodeType);
        b.nodeValue = a;
        return b
    };
    D.createCData = function(a) {
        var b = new D(D.CData);
        if (b.nodeType == D.Document || b.nodeType == D.Element) throw new z("Bad node type, unexpected " + b.nodeType);
        b.nodeValue = a;
        return b
    };
    D.createComment = function(a) {
        var b = new D(D.Comment);
        if (b.nodeType == D.Document || b.nodeType == D.Element) throw new z("Bad node type, unexpected " +
            b.nodeType);
        b.nodeValue = a;
        return b
    };
    D.createDocType = function(a) {
        var b = new D(D.DocType);
        if (b.nodeType == D.Document || b.nodeType == D.Element) throw new z("Bad node type, unexpected " + b.nodeType);
        b.nodeValue = a;
        return b
    };
    D.createProcessingInstruction = function(a) {
        var b = new D(D.ProcessingInstruction);
        if (b.nodeType == D.Document || b.nodeType == D.Element) throw new z("Bad node type, unexpected " + b.nodeType);
        b.nodeValue = a;
        return b
    };
    D.createDocument = function() {
        return new D(D.Document)
    };
    D.prototype = {
        get: function(a) {
            if (this.nodeType != D.Element) throw new z("Bad node type, expected Element but found " + this.nodeType);
            var b = this.attributeMap;
            return null != o[a] ? b.getReserved(a) : b.h[a]
        },
        set: function(a, b) {
            if (this.nodeType != D.Element) throw new z("Bad node type, expected Element but found " + this.nodeType);
            var c = this.attributeMap;
            null != o[a] ? c.setReserved(a, b) : c.h[a] = b
        },
        exists: function(a) {
            if (this.nodeType != D.Element) throw new z("Bad node type, expected Element but found " + this.nodeType);
            var b = this.attributeMap;
            return null != o[a] ? b.existsReserved(a) : b.h.hasOwnProperty(a)
        },
        elements: function() {
            if (this.nodeType != D.Document && this.nodeType != D.Element) throw new z("Bad node type, expected Element or Document but found " + this.nodeType);
            for (var a = [], b = 0, c = this.children; b < c.length;) {
                var h = c[b];
                ++b;
                h.nodeType == D.Element && a.push(h)
            }
            return E.iter(a)
        },
        elementsNamed: function(a) {
            if (this.nodeType != D.Document && this.nodeType != D.Element) throw new z("Bad node type, expected Element or Document but found " + this.nodeType);
            for (var b = [], c = 0, h = this.children; c < h.length;) {
                var e = h[c];
                ++c;
                var d;
                if (e.nodeType == D.Element) {
                    if (e.nodeType != D.Element) throw new z("Bad node type, expected Element but found " + e.nodeType);
                    d = e.nodeName == a
                } else d = !1;
                d && b.push(e)
            }
            return E.iter(b)
        },
        firstElement: function() {
            if (this.nodeType != D.Document && this.nodeType != D.Element) throw new z("Bad node type, expected Element or Document but found " + this.nodeType);
            for (var a = 0, b = this.children; a < b.length;) {
                var c = b[a];
                ++a;
                if (c.nodeType == D.Element) return c
            }
            return null
        },
        addChild: function(a) {
            if (this.nodeType != D.Document && this.nodeType != D.Element) throw new z("Bad node type, expected Element or Document but found " + this.nodeType);
            null != a.parent && a.parent.removeChild(a);
            this.children.push(a);
            a.parent = this
        },
        removeChild: function(a) {
            if (this.nodeType != D.Document && this.nodeType != D.Element) throw new z("Bad node type, expected Element or Document but found " + this.nodeType);
            return E.remove(this.children, a) ? (a.parent = null, !0) : !1
        },
        __class__: D
    };
    var da = function() {};
    g["com.cmm.client.nickjr.NickJrTracking"] = da;
    da.__name__ = ["com", "cmm", "client", "nickjr", "NickJrTracking"];
    da.submitPlayEvent = function() {
        da.submitEvent("play")
    };
    da.submitPlayAgainEvent = function() {
        da.submitEvent("replay");
        Ib.sendGameEvent("onPlayAgain")
    };
    da.init = function() {
        da._settings = new $;
        var a = l.getXML("config", "config.xml");
        if (null != a)
            for (a = a.firstElement().elements(); a.hasNext();) {
                var b = a.next();
                da.setTracking(b);
                da.setCanadaTracking(b)
            }
    };
    da.setTracking = function(a) {
        if (null != a.get("tracking_id")) {
            var b = da._settings,
                c = a.get("tracking_id");
            null != o.tracking_id ? b.setReserved("tracking_id", c) : b.h.tracking_id = c
        }
        null != a.get("tracking_enabled") && (b = da._settings, c = vb.stringToBool(a.get("tracking_enabled")), null != o.tracking_enabled ? b.setReserved("tracking_enabled", c) : b.h.tracking_enabled = c);
        null != a.get("property_name") && (b = da._settings, a = vb.stringToBool(a.get("property_name")), null != o.property_name ? b.setReserved("property_name", a) : b.h.property_name = a)
    };
    da.setCanadaTracking = function(a) {
        if (null != a.get("canadaTracking_showTitle")) {
            var b = da._settings,
                c = a.get("canadaTracking_showTitle");
            null != o.canadaTracking_showTitle ? b.setReserved("canadaTracking_showTitle", c) : b.h.canadaTracking_showTitle = c
        }
        null != a.get("canadaTracking_enabled") && (b = da._settings, a = vb.stringToBool(a.get("canadaTracking_enabled")), null != o.canadaTracking_enabled ? b.setReserved("canadaTracking_enabled", a) : b.h.canadaTracking_enabled = a)
    };
    da.submitEvent = function(a) {
        if (da.shouldTrack()) try {
            var b = p._platform.getExternal(),
                c = da._settings;
            b.call("trackKidsGamePlay", [null != o.tracking_id ? c.getReserved("tracking_id") : c.h.tracking_id])
        } catch (h) {}
        if (da.shouldCanadaTrack()) try {
            var e = p._platform.getExternal(),
                d = da._settings;
            e.call("trackFlashEvent", ["Show Title: " + aa.string(null != o.canadaTracking_showTitle ? d.getReserved("canadaTracking_showTitle") : d.h.canadaTracking_showTitle), a, "true"])
        } catch (f) {}
    };
    da.onLoadStart = function() {
        Ib.sendGameEvent("onLoadingStart")
    };
    da.onLoadEnd = function() {
        Ib.sendGameEvent("onLoadingEnd")
    };
    da.onTitleStart = function() {
        Ib.sendGameEvent("onTitleScreenStart")
    };
    da.onTitleEnd = function() {
        da.submitPlayEvent();
        Ib.sendGameEvent("onTitleScreenEnd")
    };
    da.shouldTrack = function() {
        if (n.get_isMobile()) return !1;
        var a = da._settings;
        return !0 == (null != o.tracking_enabled ? a.getReserved("tracking_enabled") : a.h.tracking_enabled)
    };
    da.shouldCanadaTrack = function() {
        if (p._platform.getExternal().get_supported()) {
            var a = da._settings;
            return !0 == (null != o.canadaTracking_enabled ? a.getReserved("canadaTracking_enabled") : a.h.canadaTracking_enabled)
        }
        return !1
    };
    var O = function() {
        this._numLayers = 0;
        this.PRIMARY_ID = "primary";
        this.LOADER_ID = "mc_loader_main";
        this.PRELOADER_ID = "mc_preloader";
        O.instance = this;
        this.initPlatform();
        this.setResize();
        this.onResize();
        this.setAssetPath();
        this.initGameLayers();
        this.setTouchMode();
        this.loadPreloader()
    };
    g["com.cmm.common.app.Wrapper"] = O;
    O.__name__ = ["com", "cmm", "common", "app", "Wrapper"];
    O.prototype = {
        get_stage: function() {
            return this._stage
        },
        setTouchMode: function() {
            n.get_isMobile() ? q.set_touchEnabled(!0) : q.set_touchEnabled(!1)
        },
        initPlatform: function() {
            p.init();
            this._stage = new H;
            p.root.add(this._stage)
        },
        setResize: function() {
            this._resize = new De
        },
        setAssetPath: function() {},
        initGameLayers: function() {
            this._layersMap = new $;
            this.addLayer(new Vc(A.DEFAULT_BG_COLOR, A.DEFAULT_WIDTH, A.DEFAULT_HEIGHT), "bgColorFill");
            this.addLayer(new H, "bgLayer");
            this.addLayer(new H, "gameLayer");
            this.addLayer(new H, "animLayer");
            this.addLayer(new H, "foreLayer");
            n.get_isMobile() && this.get_bgLayer().alpha.set__(0)
        },
        addLayer: function(a, b) {
            return this.addLayerAt(a, b, this._numLayers)
        },
        addLayerAt: function(a, b, c) {
            var h, c = Math.max(0, Math.min(this._numLayers, c)) | 0;
            h = this._layersMap;
            (null != o[b] ? h.existsReserved(b) : h.h.hasOwnProperty(b)) ? (a = this._layersMap, a = null != o[b] ? a.getReserved(b) : a.h[b]) : (h = new Oa, h.add(a), h = this._layersMap, null != o[b] ? h.setReserved(b, a) : h.h[b] = a, this._numLayers++);
            this.scaleLayer(a, A.ASSET_SCALE);
            this._stage.addChildAt(a, c);
            return a
        },
        scaleLayer: function(a, b) {
            a.scissor = new Jb(0, 0, A.DEFAULT_WIDTH * b, A.DEFAULT_HEIGHT * b);
            a.setScale(1 / b)
        },
        getLayer: function(a) {
            var b = this._layersMap;
            return null != o[a] ? b.getReserved(a) : b.h[a]
        },
        loadPreloader: function() {
            l.loadBatch("preload", d(this, this.onPreLoadSuccess))
        },
        onPreLoadSuccess: function() {
            O.instance.scaleLayer(O.instance.get_animLayer(), A.ASSET_SCALE);
            O.instance.scaleLayer(O.instance.get_gameLayer(), A.ASSET_SCALE);
            p._platform.getStage().resize.connect(d(this, this.onResize));
            this._preloader = L.createMovieClip(this.PRELOADER_ID);
            null != this._preloader && this.get_gameLayer().addChild(this._preloader);
            O.instance.get_foreLayer().removeChildren();
            var a = L.createMovieClip("mc_frame");
            O.instance.get_foreLayer().addChild(a);
            a.set_pointerEnabled(!1);
            this.onResize();
            this.loadConfig()
        },
        loadConfig: function() {
            l.loadBatch("config", d(this, this.onConfigLoadSuccess))
        },
        onConfigLoadSuccess: function() {
            !1 == n.isBrowserSupported() ? null != l.getTexture("config", "unsupported") && this.get_gameLayer().addChild(new Tb(l.getTexture("config", "unsupported"))) : (i.initialize(l.getXML("config", "soundFiles.xml")), this.createDynamicTextLibrary(), q.addConfigFile(l.getXML("config", "config.xml")), Q.field(window, "disableVO") && q.set("voiceOverAudio", !1), Q.field(window, "disableCutScenesWithVO") && q.set("cutScenesWithVoiceOverAudio", !1), !1 == q.get("voiceOverAudio", !0) && i.muteChannel("vo"), this.initOrientationWatch(), this.loadLoader())
        },
        createDynamicTextLibrary: function() {},
        loadLoader: function() {
            l.loadBatch("loader", d(this, this.onLoaderSuccess))
        },
        onLoaderSuccess: function() {
            null != this._preloader && this._preloader.dispose();
            var a = L.createMovieClip(this.LOADER_ID);
            l.set_loadMC(a);
            this.loadPrimary()
        },
        loadPrimary: function() {
            l.loadBatch(this.PRIMARY_ID, d(this, this.onPrimaryLoadSuccess))
        },
        onPrimaryLoadSuccess: function() {
            this.init()
        },
        init: function() {
            l.removeLoader();
            p._platform.getPointer().up.connect(d(this, this.setTouch)).once()
        },
        setTouch: function(a) {
            switch (a.source[1]) {
                case 0:
                    q.set_touchEnabled(!1);
                    break;
                case 1:
                    q.set_touchEnabled(!0), i.play("silence"), i.stopChannel("sfx"), Va.getInstance().play()
            }
        },
        initOrientationWatch: function() {
            p._platform.getStage().orientation.watch(d(this, this.onOrientationChange))
        },
        onOrientationChange: function() {
            this.onResize()
        },
        onResize: function() {
            this._resize.resize()
        },
        get_bgLayer: function() {
            return this.getLayer("bgLayer")
        },
        get_gameLayer: function() {
            return this.getLayer("gameLayer")
        },
        get_animLayer: function() {
            return this.getLayer("animLayer")
        },
        get_foreLayer: function() {
            return this.getLayer("foreLayer")
        },
        __class__: O,
        __properties__: {
            get_foreLayer: "get_foreLayer",
            get_animLayer: "get_animLayer",
            get_gameLayer: "get_gameLayer",
            get_bgLayer: "get_bgLayer",
            get_stage: "get_stage"
        }
    };
    var Kb = function() {
        O.call(this)
    };
    g["com.cmm.client.nickjr.NickJrWrapper"] = Kb;
    Kb.__name__ = ["com", "cmm", "client", "nickjr", "NickJrWrapper"];
    Kb.__super__ = O;
    Kb.prototype = k(O.prototype, {
        initPlatform: function() {
            O.prototype.initPlatform.call(this);
            p.root.add(new rd);
            Za.set_onAudioToggle(function(a) {
                p.volume.set__(a ? 1 : 0)
            });
            Za.set_onPlaybackToggle(function(a) {
                a ? e.dispatchEvent(new r("com.cmm.common.events.resume")) : e.dispatchEvent(new r("com.cmm.common.events.pause"))
            });
            Za.set_onDebugModeToggle(function() {});
            pb.setupBaseURL();
            q.set_assetPath(pb.BASE_URL.split("assets/")[0]);
            p.root.add(new dc)
        },
        setResize: function() {
            O.prototype.setResize.call(this);
            this._resize.set_doResize(!1)
        },
        onConfigLoadSuccess: function(a) {
            O.prototype.onConfigLoadSuccess.call(this, a);
            da.init()
        },
        onPreLoadSuccess: function(a) {
            da.onLoadStart();
            O.prototype.onPreLoadSuccess.call(this, a)
        },
        onPrimaryLoadSuccess: function(a) {
            da.onLoadEnd();
            O.prototype.onPrimaryLoadSuccess.call(this, a)
        },
        init: function() {
            O.prototype.init.call(this);
            i.allowBtnVOInterrupt = !0
        },
        __class__: Kb
    });
    var Ee = function() {
        this.initHash()
    };
    g["com.cmm.common.app.ClipSequencer"] = Ee;
    Ee.__name__ = ["com", "cmm", "common", "app", "ClipSequencer"];
    Ee.prototype = {
        initHash: function() {
            this._clipHash = new $
        },
        setTarget: function(a) {
            this._target = a
        },
        addClipToList: function(a) {
            var b = this._clipHash,
                c = L.createMovieClip(a);
            null != o[a] ? b.setReserved(a, c) : b.h[a] = c;
            b = this._clipHash;
            (null != o[a] ? b.getReserved(a) : b.h[a]).stop()
        },
        addClipToStage: function(a) {
            this._currentClip = this.getClip(a);
            this._target.addChild(this._currentClip);
            this._currentClip.gotoAndStop(1)
        },
        playClip: function(a, b, c) {
            this.playClipAt(a, this.getClip(a).get_currentFrame(), b, c)
        },
        playClipAt: function(a, b, c, h) {
            var e = this;
            this.addClipToStage(a);
            this._currentSignalConnection = this._currentClip.get_onComplete().connect(function() {
                e.sectionPlaybackComplete()
            });
            null != c && (this._completeCallback = c);
            this._sectionCallback = h;
            this._currentClip.gotoAndStop(b);
            this._currentClip.gotoAndPlay(b, this._currentClip.get_nextLabelFrame(), 0)
        },
        playClipQueue: function(a, b, c, h) {
            this.cancelClipQueue();
            this._clipQueue = a;
            null != c && (this._interimCallback = c);
            this._sectionCallback = h;
            this.playClip(a.shift(), b, h)
        },
        sectionPlaybackComplete: function() {
            null != this._sectionCallback && this._sectionCallback(this._currentClip.get_currentLabel());
            this._currentClip.get_currentFrame() == this._currentClip.get_totalFrames() && this.playbackCompleteHandler()
        },
        playbackCompleteHandler: function() {
            var a = this._currentClip;
            this._currentSignalConnection.dispose();
            this._target.removeChild(this._currentClip);
            a.gotoAndStop(1);
            null != this._clipQueue && 0 < this._clipQueue.length ? (null != this._interimCallback && this._interimCallback(this._currentClip.symbol.get_name()), this.playClip(this._clipQueue.shift())) : (this._interimCallback = null, null != this._completeCallback && (a = this._completeCallback, this._completeCallback = null, a()))
        },
        cancelClipQueue: function() {
            if (null != this._clipQueue)
                for (; 0 < this._clipQueue.length;) this._clipQueue.pop();
            null != this._currentSignalConnection && this._currentSignalConnection.dispose();
            null != this._currentClip && (this._currentClip.gotoAndStop(1), this._target.containsSprite(this._currentClip) && (this._target.removeChild(this._currentClip), this._currentClip.dispose()));
            this._sectionCallback = this._completeCallback = this._interimCallback = null
        },
        getClip: function(a) {
            var b = this._clipHash;
            null == (null != o[a] ? b.getReserved(a) : b.h[a]) && this.addClipToList(a);
            b = this._clipHash;
            return null != o[a] ? b.getReserved(a) : b.h[a]
        },
        dispose: function(a) {
            var b = this._clipHash;
            if (null != o[a] ? b.existsReserved(a) : b.h.hasOwnProperty(a)) b = this._clipHash, (null != o[a] ? b.getReserved(a) : b.h[a]).dispose(), this._clipHash.remove(a)
        },
        pause: function() {
            this._currentClip.stop()
        },
        disposeAll: function() {
            this.cancelClipQueue();
            for (var a = this._clipHash.keys(); a.hasNext();) this.dispose(a.next());
            this.initHash()
        },
        __class__: Ee
    };
    var ab = function() {};
    g["com.cmm.common.app.CompositionFactory"] = ab;
    ab.__name__ = ["com", "cmm", "common", "app", "CompositionFactory"];
    ab.registerCompositionReference = function(a) {
        null == ab._compositionObjectHash && (ab._compositionObjectHash = new $);
        for (var b = 0, c = a.groups.length; b < c;)
            for (var h = b++, e = a.groups[h].id, d = a.groups[h].classes, f = a.groups[h].components, h = a.groups[h].params, g = 0, j = d.length; g < j;) {
                var i = g++;
                a.compositions.push({
                    className: d[i],
                    id: e,
                    components: f,
                    params: h
                })
            }
        b = 0;
        for (c = a.compositions.length; b < c;) d = b++, e = a.compositions[d].className, d = a.compositions[d], f = ab._compositionObjectHash, null != o[e] ? f.setReserved(e, d) : f.h[e] = d
    };
    ab.getCompositionObjectByClassName = function(a) {
        var b = ab._compositionObjectHash;
        return null != o[a] ? b.getReserved(a) : b.h[a]
    };
    ab.prototype = {
        __class__: ab
    };
    var q = function() {};
    g["com.cmm.common.app.Globals"] = q;
    q.__name__ = ["com", "cmm", "common", "app", "Globals"];
    q.__properties__ = {
        set_touchEnabled: "set_touchEnabled",
        get_touchEnabled: "get_touchEnabled",
        set_assetPath: "set_assetPath",
        get_assetPath: "get_assetPath"
    };
    q.get = function(a, b) {
        var c = q._map;
        if (!(null != o[a] ? c.existsReserved(a) : c.h.hasOwnProperty(a))) c = q._map, null != o[a] ? c.setReserved(a, b) : c.h[a] = b;
        c = q._map;
        return null != o[a] ? c.getReserved(a) : c.h[a]
    };
    q.set = function(a, b) {
        var c = q._map;
        null != o[a] ? c.setReserved(a, b) : c.h[a] = b
    };
    q.addConfigFile = function(a) {
        if (a.nodeType != D.Document && a.nodeType != D.Element) throw new z("Bad node type, expected Element or Document but found " + a.nodeType);
        for (a = a.children[0].elements(); a.hasNext();)
            for (var b = a.next().elements(); b.hasNext();) {
                var c = b.next(),
                    h = c.get("type"),
                    e = "true" == c.get("enabled"),
                    d = q._map;
                null != o[h] ? d.setReserved(h, e) : d.h[h] = e;
                "eventReporting" == h && (c = c.get("showGameTitle"), h = q._map, null != o.showGameTitle ? h.setReserved("showGameTitle", c) : h.h.showGameTitle = c)
            }
    };
    q.get_assetPath = function() {
        var a = q._map;
        return (null != o["com.cmm.common.app.assetPath"] ? a.existsReserved("com.cmm.common.app.assetPath") : a.h.hasOwnProperty("com.cmm.common.app.assetPath")) ? (a = q._map, null != o["com.cmm.common.app.assetPath"] ? a.getReserved("com.cmm.common.app.assetPath") : a.h["com.cmm.common.app.assetPath"]) : "./"
    };
    q.set_assetPath = function(a) {
        if ("" == V.trim(a)) return a = q._map, null != o["com.cmm.common.app.assetPath"] ? a.setReserved("com.cmm.common.app.assetPath", "./") : a.h["com.cmm.common.app.assetPath"] = "./", a = q._map, null != o["com.cmm.common.app.assetPath"] ? a.getReserved("com.cmm.common.app.assetPath") : a.h["com.cmm.common.app.assetPath"];
        0 <= a.indexOf("/assets/") && (a = a.split("/assets/")[0]);
        "/" != a.charAt(a.length - 1) && (a += "/");
        var b = q._map;
        null != o["com.cmm.common.app.assetPath"] ? b.setReserved("com.cmm.common.app.assetPath", a) : b.h["com.cmm.common.app.assetPath"] = a;
        a = q._map;
        return null != o["com.cmm.common.app.assetPath"] ? a.getReserved("com.cmm.common.app.assetPath") : a.h["com.cmm.common.app.assetPath"]
    };
    q.get_touchEnabled = function() {
        var a = q._map;
        return (null != o["com.cmm.common.app.touchEnabled"] ? a.existsReserved("com.cmm.common.app.touchEnabled") : a.h.hasOwnProperty("com.cmm.common.app.touchEnabled")) ? (a = q._map, null != o["com.cmm.common.app.touchEnabled"] ? a.getReserved("com.cmm.common.app.touchEnabled") : a.h["com.cmm.common.app.touchEnabled"]) : !1
    };
    q.set_touchEnabled = function(a) {
        var b = q._map;
        null != o["com.cmm.common.app.touchEnabled"] ? b.setReserved("com.cmm.common.app.touchEnabled", a) : b.h["com.cmm.common.app.touchEnabled"] = a;
        a = q._map;
        return null != o["com.cmm.common.app.touchEnabled"] ? a.getReserved("com.cmm.common.app.touchEnabled") : a.h["com.cmm.common.app.touchEnabled"]
    };
    q.prototype = {
        __class__: q
    };
    var De = function() {
        this._doResize = !0
    };
    g["com.cmm.common.app.Resize"] = De;
    De.__name__ = ["com", "cmm", "common", "app", "Resize"];
    De.prototype = {
        resize: function() {
            this.shouldResize() && (this.setScale(), this.setInverseScale(), this.setOffset(), this.scaleStage(), this.positionStage(), this.sendEvent())
        },
        shouldResize: function() {
            return this._doResize
        },
        sendEvent: function() {
            e.dispatchEvent(new r("com.cmm.common.events.resize"))
        },
        setScale: function() {
            A.GLOBAL_SCALE = Math.min(this.xScale(), this.yScale())
        },
        setInverseScale: function() {},
        setOffset: function() {
            var a = p._platform.getStage().get_width() / 2;
            A.GLOBAL_OFFSET.x = a - A.DEFAULT_WIDTH * A.GLOBAL_SCALE / 2;
            a = p._platform.getStage().get_height() / 2;
            A.GLOBAL_OFFSET.y = a - A.DEFAULT_HEIGHT * A.GLOBAL_SCALE / 2
        },
        scaleStage: function() {
            O.instance.get_stage().setScale(A.GLOBAL_SCALE)
        },
        positionStage: function() {
            O.instance.get_stage().x.set__(A.GLOBAL_OFFSET.x);
            O.instance.get_stage().y.set__(A.GLOBAL_OFFSET.y)
        },
        xScale: function() {
            return this.actualWidth() / this.defaultWidth()
        },
        yScale: function() {
            return this.actualHeight() / this.defaultHeight()
        },
        actualWidth: function() {
            return p._platform.getStage().get_width()
        },
        actualHeight: function() {
            return p._platform.getStage().get_height()
        },
        defaultWidth: function() {
            return A.DEFAULT_WIDTH
        },
        defaultHeight: function() {
            return A.DEFAULT_HEIGHT
        },
        set_doResize: function(a) {
            return this._doResize = a
        },
        __class__: De,
        __properties__: {
            set_doResize: "set_doResize"
        }
    };
    var xa = function() {};
    g["com.cmm.common.app.SceneManager"] = xa;
    xa.__name__ = ["com", "cmm", "common", "app", "SceneManager"];
    xa.createClipSeqInstance = function() {
        null == xa._clipSequencer && (xa._clipSequencer = new Ee, xa._clipSequencer.setTarget(O.instance.get_animLayer()))
    };
    xa.playSceneQueue = function(a, b, c, h) {
        xa.createClipSeqInstance();
        xa._clipSequencer.playClipQueue(a, b, c, h)
    };
    xa.pause = function() {
        xa._clipSequencer.pause()
    };
    xa.disposeAll = function() {
        null != xa._clipSequencer && (xa._clipSequencer.disposeAll(), xa._clipSequencer = null, xa.createClipSeqInstance())
    };
    xa.prototype = {
        __class__: xa
    };
    var Ia = function() {
        this._aborted = !1;
        this.nextState = ""
    };
    g["com.cmm.common.app.State"] = Ia;
    Ia.__name__ = ["com", "cmm", "common", "app", "State"];
    Ia.prototype = {
        enterState: function() {
            this._aborted = !1
        },
        exitState: function() {},
        stateComplete: function() {
            !1 == this._aborted && this.completeHandler()
        },
        __class__: Ia
    };
    var sd = function() {
        this.statePackagePath = ""
    };
    g["com.cmm.common.app.StateList"] = sd;
    sd.__name__ = ["com", "cmm", "common", "app", "StateList"];
    sd.prototype = {
        __class__: sd
    };
    var Fe = function(a, b) {
        this._states = [];
        this._stateIDs = [];
        null == b ? this.createStateMachineFromClassEnum(a) : this.createStateMachineFromXML(a, b)
    };
    g["com.cmm.common.app.StateMachine"] = Fe;
    Fe.__name__ = ["com", "cmm", "common", "app", "StateMachine"];
    Fe.prototype = {
        createStateMachineFromClassEnum: function(a) {
            for (var a = a.stateClassList, b = 0, c = a.length; b < c;) {
                var h = b++;
                this.addState(la.getClassName(a[h]), a[h], "")
            }
        },
        createStateMachineFromXML: function(a, b) {
            for (var c = b.elementsNamed("stateMachine").next().elementsNamed("state"); c.hasNext();) {
                var h = c.next(),
                    e = h.get("classID");
                0 < a.statePackagePath.length && (e = a.statePackagePath + "." + e);
                this.addState(e, la.resolveClass(e), h.get("nextState"))
            }
        },
        addState: function(a, b, c) {
            this._stateIDs.push(a.substring(a.lastIndexOf(".") + 1));
            a = {};
            a.state = la.createInstance(b, []);
            a.nextState = c;
            this._states.push(a)
        },
        startMachine: function() {
            this.startState(this._stateIDs[0])
        },
        startState: function(a) {
            this._currentStateID = a;
            a = this._states[Wc.indexOf(this._currentStateID, this._stateIDs)];
            this._currentState = a.state;
            this._currentState.nextState = a.nextState;
            this._currentState.completeHandler = d(this, this.transitionToNextState);
            this._currentState.enterState()
        },
        transitionToNextState: function() {
            this._currentState.exitState();
            if (0 < this._currentState.nextState.length) this.startState(this._currentState.nextState);
            else {
                var a = Wc.indexOf(this._currentStateID, this._stateIDs) + 1;
                a < this._stateIDs.length ? this.startState(this._stateIDs[a]) : (null != this.completeHandler && this.completeHandler(), this.stopMachine())
            }
        },
        stopMachine: function() {
            this.completeHandler = this._currentState = null
        },
        __class__: Fe
    };
    var Lb = function(a, b) {
        var c = this;
        this.manifest = b;
        this._platform = a;
        this.promise = new Ub;
        this._bytesLoaded = new $;
        this._pack = new td(b, this);
        var h = od.array(b);
        if (0 == h.length) this.handleSuccess();
        else {
            for (var e = new $, d = 0; d < h.length;) {
                var f = h[d];
                ++d;
                var g = f.name,
                    g = null != o[g] ? e.getReserved(g) : e.h[g];
                if (null == g) {
                    var g = [],
                        j = f.name;
                    null != o[j] ? e.setReserved(j, g) : e.h[j] = g
                }
                g.push(f)
            }
            this._assetsRemaining = od.count(e);
            for (h = new Pa(e, e.arrayKeys()); h.hasNext();) e = [h.next()], this.pickBestEntry(e[0], function(a) {
                return function(h) {
                    if (null != h) {
                        var e = b.getFullURL(h);
                        try {
                            c.loadEntry(e, h)
                        } catch (d) {
                            d instanceof z && (d = d.val), c.handleError(h, "Unexpected error: " + aa.string(d))
                        }
                        e = c.promise;
                        e.set_total(e._total + h.bytes)
                    } else h = a[0][0], Lb.isAudio(h.format) ? (e = Va.getInstance(), c.handleLoad(h, e)) : c.handleError(h, "Could not find a supported format to load")
                }
            }(e))
        }
    };
    g["flambe.platform.BasicAssetPackLoader"] = Lb;
    Lb.__name__ = ["flambe", "platform", "BasicAssetPackLoader"];
    Lb.isAudio = function(a) {
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
    Lb.prototype = {
        onDisposed: function() {},
        pickBestEntry: function(a, b) {
            this.getAssetFormats(function(c) {
                for (var h = 0; h < c.length;) {
                    var e = c[h];
                    ++h;
                    for (var d = 0; d < a.length;) {
                        var f = a[d];
                        ++d;
                        if (f.format == e) {
                            b(f);
                            return
                        }
                    }
                }
                b(null)
            })
        },
        loadEntry: function() {},
        getAssetFormats: function() {},
        handleLoad: function(a, b) {
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
                var h = a.name;
                null != o[h] ? c.setReserved(h, b) : c.h[h] = b;
                this._assetsRemaining -= 1;
                0 == this._assetsRemaining && this.handleSuccess()
            }
        },
        handleProgress: function(a, b) {
            var c = a.name,
                h = this._bytesLoaded;
            null != o[c] ? h.setReserved(c, b) : h.h[c] = b;
            c = 0;
            h = this._bytesLoaded;
            for (h = new Pa(h, h.arrayKeys()); h.hasNext();) var e = h.next(),
                c = c + e;
            this.promise.set_progress(c)
        },
        handleSuccess: function() {
            this.promise.set_result(this._pack)
        },
        handleError: function(a, b) {
            this.promise.error.emit(Ca.withFields(b, ["url", a.url]))
        },
        handleTextureError: function(a) {
            this.handleError(a, "Failed to create texture. Is the GPU context unavailable?")
        },
        __class__: Lb
    };
    var ia = function(a, b) {
        Lb.call(this, a, b)
    };
    g["flambe.platform.html.HtmlAssetPackLoader"] = ia;
    ia.__name__ = ["flambe", "platform", "html", "HtmlAssetPackLoader"];
    ia.detectImageFormats = function(a) {
        var b = [B.PNG, B.JPG, B.GIF],
            c = 2,
            h = window.document.createElement("img");
        h.onload = h.onerror = function() {
            1 == h.width && b.unshift(B.WEBP);
            c -= 1;
            0 == c && a(b)
        };
        h.src = "data:image/webp;base64,UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==";
        var e = window.document.createElement("img");
        e.onload = e.onerror = function() {
            1 == e.width && b.unshift(B.JXR);
            c -= 1;
            0 == c && a(b)
        };
        e.src = "data:image/vnd.ms-photo;base64,SUm8AQgAAAAFAAG8AQAQAAAASgAAAIC8BAABAAAAAQAAAIG8BAABAAAAAQAAAMC8BAABAAAAWgAAAMG8BAABAAAAHwAAAAAAAAAkw91vA07+S7GFPXd2jckNV01QSE9UTwAZAYBxAAAAABP/gAAEb/8AAQAAAQAAAA=="
    };
    ia.detectAudioFormats = function() {
        var a = window.document.createElement("audio");
        if (null == a || null == d(a, a.canPlayType)) return [];
        var b = new cc("\\b(iPhone|iPod|iPad|Android|Windows Phone)\\b", ""),
            c = window.navigator.userAgent;
        if (!ga.get_supported() && b.match(c)) return [];
        for (var b = [{
                format: B.M4A,
                mimeType: "audio/mp4; codecs=mp4a"
            }, {
                format: B.MP3,
                mimeType: "audio/mpeg"
            }, {
                format: B.OPUS,
                mimeType: "audio/ogg; codecs=opus"
            }, {
                format: B.OGG,
                mimeType: "audio/ogg; codecs=vorbis"
            }, {
                format: B.WAV,
                mimeType: "audio/wav"
            }], c = [], h = 0; h < b.length;) {
            var e = b[h];
            ++h;
            var f = "";
            try {
                f = a.canPlayType(e.mimeType)
            } catch (g) {}
            "" != f && c.push(e.format)
        }
        return c
    };
    ia.supportsBlob = function() {
        if (ia._detectBlobSupport) {
            ia._detectBlobSupport = !1;
            if ((new cc("\\bSilk\\b", "")).match(window.navigator.userAgent) || null == window.Blob) return !1;
            var a = new XMLHttpRequest;
            a.open("GET", ".", !0);
            if ("" != a.responseType) return !1;
            a.responseType = "blob";
            if ("blob" != a.responseType) return !1;
            ia._URL = ea.loadExtension("URL").value
        }
        return null != ia._URL ? null != ia._URL.createObjectURL : !1
    };
    ia.__super__ = Lb;
    ia.prototype = k(Lb.prototype, {
        loadEntry: function(a, b) {
            var c = this;
            switch (b.format[1]) {
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                    var h = window.document.createElement("img"),
                        e = new Xc;
                    e.addDisposingListener(h, "load", function() {
                        ia.supportsBlob() && ia._URL.revokeObjectURL(h.src);
                        var a = c._platform.getRenderer().createTextureFromImage(h);
                        null != a ? c.handleLoad(b, a) : c.handleTextureError(b)
                    });
                    e.addDisposingListener(h, "error", function() {
                        c.handleError(b, "Failed to load image")
                    });
                    ia.supportsBlob() ? this.download(a, b, "blob", function(a) {
                        h.src = ia._URL.createObjectURL(a)
                    }) : h.src = a;
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
                    if (ga.get_supported()) this.download(a, b, "arraybuffer", function(a) {
                        ga.ctx.decodeAudioData(a, function(a) {
                            c.handleLoad(b, new ga(a))
                        }, function() {
                            var a = Va.getInstance();
                            c.handleLoad(b, a)
                        })
                    });
                    else {
                        var d = window.document.createElement("audio");
                        d.preload = "auto";
                        var f = ++ia._mediaRefCount;
                        null == ia._mediaElements && (ia._mediaElements = new wb);
                        ia._mediaElements.set(f, d);
                        e = new Xc;
                        e.addDisposingListener(d, "canplaythrough", function() {
                            ia._mediaElements.remove(f);
                            c.handleLoad(b, new Yc(d))
                        });
                        e.addDisposingListener(d, "error", function() {
                            ia._mediaElements.remove(f);
                            var a = d.error.code;
                            3 == a || 4 == a ? (a = Va.getInstance(), c.handleLoad(b, a)) : c.handleError(b, "Failed to load audio: " + d.error.code)
                        });
                        e.addListener(d, "progress", function() {
                            if (0 < d.buffered.length && 0 < d.duration) {
                                var a = d.buffered.end(0) / d.duration;
                                c.handleProgress(b, a * b.bytes | 0)
                            }
                        });
                        d.src = a;
                        d.load()
                    }
                    break;
                case 13:
                    this.download(a, b, "text", function(a) {
                        c.handleLoad(b, new Zc(a))
                    })
            }
        },
        getAssetFormats: function(a) {
            var b = this;
            null == ia._supportedFormats && (ia._supportedFormats = new Ub, ia.detectImageFormats(function(a) {
                ia._supportedFormats.set_result(b._platform.getRenderer().getCompressedTextureFormats().concat(a).concat(ia.detectAudioFormats()).concat([B.Data]))
            }));
            ia._supportedFormats.get(a)
        },
        download: function(a, b, c, h) {
            var e = this,
                d = null,
                f = null,
                g = 0,
                j = !1,
                i = function() {
                    j && (j = !1, window.clearInterval(g))
                },
                l = 3,
                m = function() {
                    l -= 1;
                    return 0 <= l ? (f(), !0) : !1
                },
                f = function() {
                    i();
                    null != d && d.abort();
                    d = new XMLHttpRequest;
                    d.open("GET", a, !0);
                    d.responseType = c;
                    var f = 0;
                    d.onprogress = function(a) {
                        j || (j = !0, g = window.setInterval(function() {
                            4 != d.readyState && 5E3 < Date.now() - f && !m() && (i(), e.handleError(b, "Download stalled"))
                        }, 1E3));
                        f = Date.now();
                        e.handleProgress(b, a.loaded)
                    };
                    d.onerror = function() {
                        if (0 != d.status || !m()) i(), e.handleError(b, "HTTP error " +
                            d.status)
                    };
                    d.onload = function() {
                        var a = d.response;
                        null == a && (a = d.responseText);
                        i();
                        h(a)
                    };
                    d.send()
                };
            f()
        },
        __class__: ia
    });
    var ud = function(a, b) {
        Lb.call(this, a, b)
    };
    g["com.cmm.common.app.platform.CMMAssetPackLoader"] = ud;
    ud.__name__ = "com,cmm,common,app,platform,CMMAssetPackLoader".split(",");
    ud.__super__ = ia;
    ud.prototype = k(ia.prototype, {
        download: function(a, b, c, h) {
            var e = this,
                d = null,
                f = null,
                g = 0,
                j = !1,
                i = function() {
                    j && (j = !1, window.clearInterval(g))
                },
                l = function() {
                    f();
                    return !0
                },
                f = function() {
                    i();
                    null != d && d.abort();
                    d = new XMLHttpRequest;
                    d.open("GET", a, !0);
                    d.responseType = c;
                    var f = 0;
                    d.onprogress = function(a) {
                        j || (j = !0, g = window.setInterval(function() {
                            4 != d.readyState && 5E3 < Date.now() - f && !l() && (i(), e.handleError(b, "Download stalled"))
                        }, 1E3));
                        f = Date.now();
                        e.handleProgress(b, a.loaded)
                    };
                    d.onerror = function() {
                        if (0 != d.status || !l()) i(), e.handleError(b, "HTTP error " + d.status)
                    };
                    d.onload = function() {
                        var a = d.response;
                        null == a && (a = d.responseText);
                        i();
                        h(a)
                    };
                    d.send()
                };
            f()
        },
        __class__: ud
    });
    var ya = function() {};
    g["flambe.util.Disposable"] = ya;
    ya.__name__ = ["flambe", "util", "Disposable"];
    ya.prototype = {
        __class__: ya
    };
    var J = function() {
        this._flags = 0;
        this.owner = this.next = null
    };
    g["flambe.Component"] = J;
    J.__name__ = ["flambe", "Component"];
    J.__interfaces__ = [ya];
    J.prototype = {
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
        __class__: J,
        __properties__: {
            get_name: "get_name"
        }
    };
    var $c = function(a, b) {
        this._onCompleteCallback = null;
        this._curSoundIdx = 0;
        this.channelIdx = -1;
        this.muted = !1;
        J.call(this);
        this.setSoundFiles(a);
        this.setCompleteCallback(b)
    };
    g["com.cmm.common.audio.SoundClip"] = $c;
    $c.__name__ = ["com", "cmm", "common", "audio", "SoundClip"];
    $c.__super__ = J;
    $c.prototype = k(J.prototype, {
        get_name: function() {
            return "SoundClip_5"
        },
        setSoundFiles: function(a) {
            this._soundFiles = a;
            for (var a = 0, b = this._soundFiles; a < b.length;) {
                var c = b[a];
                ++a;
                c.sc = this
            }
        },
        setCompleteCallback: function(a) {
            this._onCompleteCallback = a
        },
        onUpdate: function(a) {
            J.prototype.onUpdate.call(this, a);
            null == this._playback ? (this.soundFileFinish(), this.playbackComplete()) : this._playback.get_paused() || (0 == this.get_playingSoundFile().loops && (this._timePlaying += a), this._playback.volume.update(a), this.playbackIsComplete() && this.soundFileComplete())
        },
        playbackIsComplete: function() {
            return !1 == ga.get_supported() && n.get_isWebview() ? !0 != this._playback.get_complete()._value ? this._timePlaying >= this.get_playingSoundFile().get_duration() : !0 : !0 == this._playback.get_complete()._value
        },
        soundFileComplete: function() {
            this._timePlaying = 0;
            this.curSoundIdxIsValid() && this.soundFileFinish();
            this.play()
        },
        curSoundIdxIsValid: function() {
            return 0 < this._curSoundIdx ? this._curSoundIdx <= this._soundFiles.length : !1
        },
        dispose: function() {
            J.prototype.dispose.call(this);
            this.disposePlayback();
            for (var a = 0, b = this._soundFiles; a < b.length;) {
                var c = b[a];
                ++a;
                c.dispose()
            }
            for (a = E.iter(Q.fields(this)); a.hasNext();) b = a.next(), this[b] = null, Q.deleteField(this, b)
        },
        disposePlayback: function() {
            try {
                null != this._playback && this._playback.dispose()
            } catch (a) {}
        },
        play: function() {
            this._timePlaying = 0;
            this._curSoundIdx < this._soundFiles.length ? this.startNextSoundFile() : this.playbackComplete()
        },
        startNextSoundFile: function() {
            var a = this._soundFiles[this._curSoundIdx];
            null != a && (this.soundFileStarted(), 0 < a.loops ? this.loop(a) : this.playNextSoundFile(a));
            this._curSoundIdx++
        },
        loop: function(a) {
            var b;
            b = "" == this.get_channel() ? l.getSound(a.packName, i.path + a.filename) : l.getSound(a.packName, i.path + a.channel + "/" + a.filename);
            this._volume = a.volume;
            this._playback = b.loop(this._volume)
        },
        playNextSoundFile: function(a) {
            var b;
            b = "" == this.get_channel() ? l.getSound(a.packName, i.path + a.filename) : l.getSound(a.packName, i.path + a.channel + "/" + a.filename);
            this._volume = a.volume;
            null != b && (this._playback = b.play(this._volume))
        },
        playbackComplete: function() {
            this.completeCallback();
            this.soundClipFinish()
        },
        completeCallback: function() {
            null != this._onCompleteCallback && (this._onCompleteCallback(), this._onCompleteCallback = null)
        },
        stop: function() {
            this._timePlaying = 0;
            this.disposeCompleteCallback();
            try {
                null != this._playback && this._playback.dispose()
            } catch (a) {}
            this.soundFileStopped()
        },
        disposeCompleteCallback: function() {
            this._onCompleteCallback = null
        },
        soundFileStarted: function() {
            ka.get_onSoundFileStart().emit(this._soundFiles[this._curSoundIdx])
        },
        soundFileFinish: function() {
            ka.get_onSoundFileFinish().emit(this._soundFiles[this._curSoundIdx - 1])
        },
        soundClipFinish: function() {
            this._curSoundIdx = 2147483647;
            ka.get_onSoundClipFinish().emit(this);
            this.get_onSoundClipFinish().emit(this)
        },
        soundFileStopped: function() {
            null != this._soundFiles && ka.get_onSoundFileStopped().emit(this._soundFiles[this._curSoundIdx -
                1])
        },
        pause: function() {
            this._playback.set_paused(!0)
        },
        resume: function() {
            this._playback.set_paused(!1)
        },
        mute: function() {
            this.muted = !0;
            this._playback.volume.set__(0)
        },
        unmute: function() {
            this.muted = !1;
            this._curSoundIdx < this._soundFiles.length + 1 && this._playback.volume.set__(this._volume)
        },
        get_onSoundClipFinish: function() {
            null == this._onSoundClipFinish && (this._onSoundClipFinish = new ba);
            return this._onSoundClipFinish
        },
        get_playing: function() {
            return !this._playback.get_paused()
        },
        get_channel: function() {
            return this._soundFiles[0].channel
        },
        set_channelIdx: function(a) {
            return this.channelIdx = a
        },
        get_playingSoundFile: function() {
            return this.curSoundIdxIsValid() ? this._soundFiles[this._curSoundIdx - 1] : new ec
        },
        get_duration: function() {
            for (var a = 0, b = 0, c = this._soundFiles.length; b < c;) var h = b++,
                a = a + this._soundFiles[h].get_duration();
            return a
        },
        __class__: $c,
        __properties__: k(J.prototype.__properties__, {
            get_duration: "get_duration",
            get_playingSoundFile: "get_playingSoundFile",
            get_channel: "get_channel",
            get_playing: "get_playing",
            get_onSoundClipFinish: "get_onSoundClipFinish",
            set_channelIdx: "set_channelIdx"
        })
    });
    var vd = function(a, b, c) {
        null == c && (c = !1);
        null == b && (b = !1);
        this.overrideSound = this.muted = this.muteable = !1;
        this.channelID = "";
        J.call(this);
        this.name = this.get_name();
        this.set_overrideSound(b);
        this.muteable = c;
        this.set_channelID(a);
        this.soundClips = []
    };
    g["com.cmm.common.audio.SoundClipChannel"] = vd;
    vd.__name__ = ["com", "cmm", "common", "audio", "SoundClipChannel"];
    vd.__super__ = J;
    vd.prototype = k(J.prototype, {
        get_name: function() {
            return "SoundClipChannel_6"
        },
        play: function(a) {
            !0 == this.overrideSound && this.stop();
            a.set_channelIdx(this.soundClips.length);
            a.play();
            this.muted && a.mute();
            this.soundClips.push(a);
            this.owner.addChild((new Oa).add(a));
            a.get_onSoundClipFinish().connect(d(this, this.onSoundClipFinish)).once()
        },
        onSoundClipFinish: function(a) {
            if (-1 < a.channelIdx) {
                this.soundClips.splice(a.channelIdx, 1);
                null != a.owner && a.owner.dispose();
                for (var a = 0, b = this.soundClips.length; a < b;) {
                    var c = a++;
                    this.soundClips[c].set_channelIdx(c)
                }
            } else pf.trace("ORPHAN FILE" + a.get_name(), {
                fileName: "SoundClipChannel.hx",
                lineNumber: 95,
                className: "com.cmm.common.audio.SoundClipChannel",
                methodName: "onSoundClipFinish"
            })
        },
        stop: function() {
            if (0 < this.soundClips.length) {
                for (var a = 0, b = this.soundClips.length; a < b;) {
                    var c = a++;
                    if (c >= this.soundClips.length) break;
                    else this.soundClips[c].stop()
                }
                for (; 0 < this.soundClips.length;) a = this.soundClips.pop(), null != a.owner && a.owner.dispose()
            }
            this.soundClips = []
        },
        pause: function() {
            for (var a = 0, b = this.soundClips.length; a < b;) this.soundClips[a++].pause()
        },
        resume: function() {
            for (var a = 0, b = this.soundClips.length; a < b;) this.soundClips[a++].resume()
        },
        mute: function() {
            this.muted = !0;
            for (var a = 0, b = this.soundClips.length; a < b;) this.soundClips[a++].mute()
        },
        unmute: function() {
            this.muted = !1;
            for (var a = 0, b = this.soundClips.length; a < b;) this.soundClips[a++].unmute()
        },
        set_channelID: function(a) {
            return this.channelID = a
        },
        set_overrideSound: function(a) {
            return this.overrideSound = a
        },
        get_playing: function() {
            for (var a = 0, b = this.soundClips.length; a < b;)
                if (this.soundClips[a++].get_playing()) return !0;
            return !1
        },
        __class__: vd,
        __properties__: k(J.prototype.__properties__, {
            get_playing: "get_playing",
            set_overrideSound: "set_overrideSound",
            set_channelID: "set_channelID"
        })
    });
    var ec = function(a, b, c, h, e, d) {
        null == d && (d = "");
        null == e && (e = 0);
        null == h && (h = 0);
        null == c && (c = "");
        null == b && (b = "");
        null == a && (a = "");
        this.sc = null;
        this.packName = "";
        this.loops = this.volume = 0;
        this.channel = this.id = this.filename = "";
        this.set_channel(a);
        this.set_id(b);
        this.set_filename(c);
        this.set_loops(h);
        this.set_volume(e);
        this.set_packName(d)
    };
    g["com.cmm.common.audio.SoundFile"] = ec;
    ec.__name__ = ["com", "cmm", "common", "audio", "SoundFile"];
    ec.__interfaces__ = [ya];
    ec.prototype = {
        dispose: function() {
            for (var a = E.iter(Q.fields(this)); a.hasNext();) {
                var b = a.next();
                this[b] = null;
                Q.deleteField(this, b)
            }
        },
        set_channel: function(a) {
            return this.channel = a
        },
        set_id: function(a) {
            return this.id = a
        },
        set_filename: function(a) {
            return this.filename = a
        },
        set_loops: function(a) {
            return this.loops = a
        },
        set_volume: function(a) {
            100 < a ? a = 100 : 0 > a && (a = 0);
            this.volume = 1 < a ? a / 100 : a;
            "vo" == this.channel && "" != this.filename && null != this.filename && !1 == q.get("vo") && (this.volume = 0);
            return this.volume
        },
        set_packName: function(a) {
            return this.packName = a
        },
        clone: function() {
            return new ec(this.channel, this.id, this.filename, this.loops, this.volume, this.packName)
        },
        get_duration: function() {
            var a;
            a = "" == this.channel ? l.getSound(this.packName, i.path + this.filename) : l.getSound(this.packName, i.path + this.channel + "/" + this.filename);
            return null == a ? 0 : a.get_duration()
        },
        __class__: ec,
        __properties__: {
            get_duration: "get_duration",
            set_packName: "set_packName",
            set_volume: "set_volume",
            set_loops: "set_loops",
            set_filename: "set_filename",
            set_id: "set_id",
            set_channel: "set_channel"
        }
    };
    var Ja = function(a, b) {
        this._value = a;
        this._changed = null != b ? new ad(b) : null
    };
    g["flambe.util.Value"] = Ja;
    Ja.__name__ = ["flambe", "util", "Value"];
    Ja.prototype = {
        watch: function(a) {
            a(this._value, this._value);
            return this.get_changed().connect(a)
        },
        set__: function(a) {
            var b = this._value;
            a != b && (this._value = a, null != this._changed && this._changed.emit(a, b));
            return a
        },
        get_changed: function() {
            null == this._changed && (this._changed = new ad);
            return this._changed
        },
        __class__: Ja,
        __properties__: {
            get_changed: "get_changed",
            set__: "set__"
        }
    };
    var fc = function(a, b) {
        this._next = null;
        this._signal = a;
        this._listener = b;
        this.stayInList = !0
    };
    g["flambe.util.SignalConnection"] = fc;
    fc.__name__ = ["flambe", "util", "SignalConnection"];
    fc.__interfaces__ = [ya];
    fc.prototype = {
        once: function() {
            this.stayInList = !1;
            return this
        },
        dispose: function() {
            null != this._signal && (this._signal.disconnect(this), this._signal = null)
        },
        __class__: fc
    };
    var Da = function(a) {
        this._head = null != a ? new fc(this, a) : null;
        this._deferredTasks = null
    };
    g["flambe.util.SignalBase"] = Da;
    Da.__name__ = ["flambe", "util", "SignalBase"];
    Da.prototype = {
        connectImpl: function(a, b) {
            var c = this,
                h = new fc(this, a);
            this._head == Da.DISPATCHING_SENTINEL ? this.defer(function() {
                c.listAdd(h, b)
            }) : this.listAdd(h, b);
            return h
        },
        disconnect: function(a) {
            var b = this;
            this._head == Da.DISPATCHING_SENTINEL ? this.defer(function() {
                b.listRemove(a)
            }) : this.listRemove(a)
        },
        defer: function(a) {
            for (var b = null, c = this._deferredTasks; null != c;) b = c, c = c.next;
            a = new Ge(a);
            null != b ? b.next = a : this._deferredTasks = a
        },
        willEmit: function() {
            var a = this._head;
            this._head = Da.DISPATCHING_SENTINEL;
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
                for (var c = null, h = this._head; null != h;) c = h, h = h._next;
                null != c ? c._next = a : this._head = a
            }
        },
        listRemove: function(a) {
            for (var b = null, c = this._head; null != c;) {
                if (c == a) {
                    a = c._next;
                    null == b ? this._head = a : b._next = a;
                    break
                }
                b = c;
                c = c._next
            }
        },
        __class__: Da
    };
    var ad = function(a) {
        Da.call(this, a)
    };
    g["flambe.util.Signal2"] = ad;
    ad.__name__ = ["flambe", "util", "Signal2"];
    ad.__super__ = Da;
    ad.prototype = k(Da.prototype, {
        connect: function(a, b) {
            null == b && (b = !1);
            return this.connectImpl(a, b)
        },
        emit: function(a, b) {
            var c = this;
            this._head == Da.DISPATCHING_SENTINEL ? this.defer(function() {
                c.emitImpl(a, b)
            }) : this.emitImpl(a, b)
        },
        emitImpl: function(a, b) {
            for (var c = this.willEmit(), h = c; null != h;) h._listener(a, b), h.stayInList || h.dispose(), h = h._next;
            this.didEmit(c)
        },
        __class__: ad
    });
    var Oa = function() {
        this.parent = this.firstChild = this.next = this.firstComponent = null;
        this._compMap = {}
    };
    g["flambe.Entity"] = Oa;
    Oa.__name__ = ["flambe", "Entity"];
    Oa.__interfaces__ = [ya];
    Oa.prototype = {
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
            for (var b = null, c = this.firstComponent; null != c;) {
                var h = c.next;
                if (c == a) return null == b ? this.firstComponent = h : (b.owner = this, b.next = h), delete this._compMap[c.get_name()], 0 != (c._flags & 1) && (c.onStop(), c._flags &= -2), c.onRemoved(), c.owner = null, c.next = null, !0;
                b = c;
                c = h
            }
            return !1
        },
        addChild: function(a, b) {
            null == b && (b = !0);
            null != a.parent && a.parent.removeChild(a);
            a.parent = this;
            if (b) {
                for (var c = null, h = this.firstChild; null != h;) c = h, h = h.next;
                null != c ? c.next = a : this.firstChild = a
            } else a.next = this.firstChild, this.firstChild = a;
            return this
        },
        removeChild: function(a) {
            for (var b = null, c = this.firstChild; null != c;) {
                var h = c.next;
                if (c == a) {
                    null == b ? this.firstChild = h : b.next = h;
                    c.parent = null;
                    c.next = null;
                    break
                }
                b = c;
                c = h
            }
        },
        disposeChildren: function() {
            for (; null != this.firstChild;) this.firstChild.dispose()
        },
        dispose: function() {
            for (null != this.parent && this.parent.removeChild(this); null != this.firstComponent;) this.firstComponent.dispose();
            this.disposeChildren()
        },
        __class__: Oa
    };
    var i = function() {
        J.call(this)
    };
    g["com.cmm.common.audio.SoundPlayerRemote"] = i;
    i.__name__ = ["com", "cmm", "common", "audio", "SoundPlayerRemote"];
    i.__properties__ = {
        get_muteState: "get_muteState",
        set_isMuted: "set_isMuted",
        get_isMuted: "get_isMuted"
    };
    i.get_isMuted = function() {
        return i._muteState._value
    };
    i.set_isMuted = function(a) {
        return i._muteState.set__(a)
    };
    i.get_muteState = function() {
        return i._muteState
    };
    i.initialize = function(a, b) {
        p.root.addChild(i.entity);
        i._sequenceGroups = [];
        i._onInitComplete = b;
        i._soundFilesXml = a;
        var c = i._soundFilesXml;
        if (c.nodeType != D.Document && c.nodeType != D.Element) throw new z("Bad node type, expected Element or Document but found " + c.nodeType);
        for (c = c.children[0].elements(); c.hasNext();) {
            var h = c.next(),
                d = !1;
            null != h.get("muteable") && (d = !0);
            var f = h.get("channel");
            null != f && null == i.getSoundClipChannel(f) && i.setSoundClipChannel(f, !1, d);
            for (h = h.elements(); h.hasNext();) {
                var g = h.next();
                if (null != g && n.allowAudio() && ("mobile" != g.get("platform") || n.get_isMobile()) && !("desktop" == g.get("platform") && n.get_isMobile())) {
                    d = new ec;
                    null != f && d.set_channel(f);
                    var j = g.get("loops"),
                        l = g.get("volume");
                    null != j && d.set_loops(aa.parseInt(j));
                    null != l && d.set_volume(parseFloat(l));
                    l = g.get("id");
                    j = g.get("file"); - 1 < j.indexOf(".") && (j = j.split(".")[0]);
                    if (null != l) {
                        d.set_id(l);
                        var m = i._soundFilesHashByID;
                        if (null == (null != o[l] ? m.getReserved(l) : m.h[l])) {
                            var m = i._soundFilesHashByID,
                                k = [d];
                            null != o[l] ? m.setReserved(l, k) : m.h[l] = k
                        } else m = i._soundFilesHashByID, (null != o[l] ? m.getReserved(l) : m.h[l]).push(d)
                    }
                    null != j && (d.set_filename(j), l = i._soundFilesHashByFilename, null != o[j] ? l.setReserved(j, d) : l.h[j] = d);
                    g = g.get("packName");
                    null != g ? (d.set_packName(g), "" == g && d.set_packName("soundCommonPack")) : d.set_packName("soundCommonPack")
                }
            }
        }
        null == i.getSoundClipChannel("music") && i.setSoundClipChannel("music");
        null == i.getSoundClipChannel("vo") && i.setSoundClipChannel("vo");
        i.getSoundClipChannel("music").set_overrideSound(!0);
        i.getSoundClipChannel("vo").set_overrideSound(!0);
        i._unpausedBeforeFocusOut = [];
        e.addEventListener("com.cmm.common.events.onFocusOut", i.onFocusOut);
        e.addEventListener("com.cmm.common.events.onFocusIn", i.onFocusIn);
        null != i._onInitComplete && i._onInitComplete()
    };
    i.onFocusOut = function() {
        for (; 0 < i._unpausedBeforeFocusOut.length;) i._unpausedBeforeFocusOut.pop();
        for (var a = i._soundClipChannels.keys(); a.hasNext();) {
            var b = a.next(),
                c = i._soundClipChannels;
            !1 == (null != o[b] ? c.getReserved(b) : c.h[b]).muted && i._unpausedBeforeFocusOut.push(b)
        }
        i.pauseAllChannels()
    };
    i.onFocusIn = function() {
        for (var a = 0, b = i._unpausedBeforeFocusOut.length; a < b;) {
            var c = a++;
            i.getSoundClipChannel(i._unpausedBeforeFocusOut[c]).resume()
        }
    };
    i.getSoundClipChannel = function(a) {
        var b = i._soundClipChannels;
        return !0 == (null != o[a] ? b.existsReserved(a) : b.h.hasOwnProperty(a)) ? (b = i._soundClipChannels, null != o[a] ? b.getReserved(a) : b.h[a]) : null
    };
    i.setSoundClipChannel = function(a, b, c) {
        null == c && (c = !1);
        null == b && (b = !1);
        b = new vd(a, b, c);
        i.entity.addChild((new Oa).add(b));
        c = i._soundClipChannels;
        null != o[a] ? c.setReserved(a, b) : c.h[a] = b
    };
    i.getSoundFilesFromID = function(a) {
        for (var b = [], a = a.split(","), c = 0, h = a.length; c < h;) {
            var d = c++,
                e = i._soundFilesHashByID,
                f = a[d];
            if (null != o[f] ? e.existsReserved(f) : e.h.hasOwnProperty(f)) {
                e = 0;
                f = i._soundFilesHashByID;
                d = a[d];
                for (d = null != o[d] ? f.getReserved(d) : f.h[d]; e < d.length;) f = d[e], ++e, b.push(f.clone())
            } else if (e = i._soundFilesHashByFilename, f = a[d], null != o[f] ? e.existsReserved(f) : e.h.hasOwnProperty(f)) e = i._soundFilesHashByFilename, d = a[d], b.push((null != o[d] ? e.getReserved(d) : e.h[d]).clone())
        }
        return b
    };
    i.isChannelPlaying = function(a) {
        return i.getSoundClipChannel(a).get_playing()
    };
    i.isSoundFilePlaying = function(a) {
        for (var b = i.getPlayingSoundFiles(), c = 0; c < b.length;) {
            var h = b[c];
            ++c;
            if (a == h.id) return !0
        }
        return !1
    };
    i.isValidFile = function(a) {
        if (null == a || 0 <= i._disallowedSounds.indexOf(a)) return !1;
        for (var a = a.split(","), b = 0, c = a.length; b < c;) {
            var h = b++,
                d = !1,
                e = i._soundFilesHashByID,
                f = a[h];
            if (null != o[f] ? e.existsReserved(f) : e.h.hasOwnProperty(f)) d = !0;
            else if (e = i._soundFilesHashByFilename, h = a[h], null != o[h] ? e.existsReserved(h) : e.h.hasOwnProperty(h)) d = !0;
            if (!1 == d) return !1
        }
        return !0
    };
    i.getPlayingSoundFiles = function() {
        for (var a = [], b = i._soundClipChannels, b = new Pa(b, b.arrayKeys()); b.hasNext();)
            for (var c = 0, h = b.next().soundClips; c < h.length;) {
                var d = h[c];
                ++c;
                d = d.get_playingSoundFile();
                null != d && a.push(d)
            }
        return a
    };
    i.play = function(a, b) {
        if (!1 == i.isValidFile(a)) return null != b && b(), null;
        var c = i.getSoundFilesFromID(a);
        if (null != b && n.get_isWebview()) {
            c = new $c(c);
            if (0 <= i._disallowedSounds.indexOf(c.get_playingSoundFile().filename)) return null != b && b(), null;
            ca.delay(b, 1E3 * c.get_duration() + 100)
        } else if (c = new $c(c, b), 0 <= i._disallowedSounds.indexOf(c.get_playingSoundFile().filename)) return null != b && b(), null;
        i.getSoundClipChannel(c.get_channel()).play(c);
        return c
    };
    i.playRandom = function(a, b) {
        return !1 == i.isValidFile(a) ? (null != b && b(), null) : i.play(i.getRandomSoundMap(a).getNextItem(), b)
    };
    i.playSequential = function(a, b) {
        for (var c = null, h = 0, d = i._sequenceGroups.length; h < d;) {
            var e = h++;
            if (i._sequenceGroups[e].get_sequenceString() == a) {
                c = i._sequenceGroups[e];
                break
            }
        }
        if (null == c) {
            c = i.getSoundFilesFromID(a);
            h = [];
            for (d = 0; d < c.length;) e = c[d], ++d, h.push(e.filename);
            c = new He(a, h);
            i._sequenceGroups.push(c)
        }
        return c.playNextSound(b)
    };
    i.stop = function(a) {
        for (var b = i.getPlayingSoundFiles(), c = 0; c < b.length;) {
            var h = b[c];
            ++c;
            h.id == a && h.sc.stop()
        }
    };
    i.stopChannel = function(a) {
        null == a && (a = "");
        "" == a ? i.stopAllChannels() : i.getSoundClipChannel(a).stop()
    };
    i.stopAllChannels = function() {
        for (var a = i._soundClipChannels, a = new Pa(a, a.arrayKeys()); a.hasNext();) a.next().stop()
    };
    i.pauseAllChannels = function() {
        for (var a = i._soundClipChannels, a = new Pa(a, a.arrayKeys()); a.hasNext();) a.next().pause()
    };
    i.muteChannel = function(a) {
        null == a && (a = "");
        "" == a ? i.muteAllChannels() : i.getSoundClipChannel(a).mute()
    };
    i.muteAllChannels = function() {
        for (var a = i._soundClipChannels, a = new Pa(a, a.arrayKeys()); a.hasNext();) a.next().mute()
    };
    i.muteMuteableChannels = function() {
        i.set_isMuted(!0);
        for (var a = i._soundClipChannels, a = new Pa(a, a.arrayKeys()); a.hasNext();) {
            var b = a.next();
            !0 == b.muteable && b.mute()
        }
    };
    i.unmuteMuteableChannels = function() {
        i.set_isMuted(!1);
        for (var a = i._soundClipChannels, a = new Pa(a, a.arrayKeys()); a.hasNext();) {
            var b = a.next();
            !0 == b.muteable && b.unmute()
        }
    };
    i.getRandomSoundMap = function(a) {
        null == i._randomSoundMap && (i._randomSoundMap = new $);
        var b = i._randomSoundMap;
        if (!(null != o[a] ? b.existsReserved(a) : b.h.hasOwnProperty(a))) {
            for (var c = i.getSoundFilesFromID(a), b = [], h = 0; h < c.length;) {
                var d = c[h];
                ++h;
                b.push(d.filename)
            }
            c = i._randomSoundMap;
            b = new ja(b);
            null != o[a] ? c.setReserved(a, b) : c.h[a] = b
        }
        b = i._randomSoundMap;
        return null != o[a] ? b.getReserved(a) : b.h[a]
    };
    i.__super__ = J;
    i.prototype = k(J.prototype, {
        get_name: function() {
            return "SoundPlayerRemote_4"
        },
        __class__: i
    });
    var Ie = function(a, b, c, h, d, e) {
        null == e && (e = "primary");
        null == d && (d = 0.5);
        null == h && (h = 0);
        null == c && (c = "vo");
        this.packName = "primary";
        this.volume = 0.5;
        this.loops = 0;
        this.channel = "vo";
        this.url = this.id = null;
        this.url = a;
        this.id = null == b || "null" == b ? null : b;
        this.channel = c;
        this.loops = h;
        this.volume = d;
        this.packName = e
    };
    g["com.cmm.common.audio.SoundLoaderInfo"] = Ie;
    Ie.__name__ = ["com", "cmm", "common", "audio", "SoundLoaderInfo"];
    Ie.prototype = {
        __class__: Ie
    };
    var He = function(a, b) {
        this._index = -1;
        this._sequenceString = a;
        this._soundArray = b
    };
    g["com.cmm.common.audio.SoundSequenceGroup"] = He;
    He.__name__ = ["com", "cmm", "common", "audio", "SoundSequenceGroup"];
    He.prototype = {
        playNextSound: function(a) {
            this._index++;
            this._index == this._soundArray.length && (this._index = 0);
            return i.play(this._soundArray[this._index], a)
        },
        get_sequenceString: function() {
            return this._sequenceString
        },
        __class__: He,
        __properties__: {
            get_sequenceString: "get_sequenceString"
        }
    };
    var ka = function() {};
    g["com.cmm.common.audio.SoundSignals"] = ka;
    ka.__name__ = ["com", "cmm", "common", "audio", "SoundSignals"];
    ka.__properties__ = {
        get_onSoundFileStopped: "get_onSoundFileStopped",
        get_onSoundFileFinish: "get_onSoundFileFinish",
        get_onSoundFileStart: "get_onSoundFileStart",
        get_onSoundClipFinish: "get_onSoundClipFinish"
    };
    ka.get_onSoundClipFinish = function() {
        null == ka._onSoundClipFinish && (ka._onSoundClipFinish = new ba);
        return ka._onSoundClipFinish
    };
    ka.listen = function(a, b, c, h) {
        a = null == a ? null : ka.get_onSoundFileStart().connect(a);
        b = null == b ? null : ka.get_onSoundFileFinish().connect(b);
        c = null == c ? null : ka.get_onSoundClipFinish().connect(c);
        h = null == h ? null : ka.get_onSoundFileStopped().connect(h);
        return new wd(a, b, c, h)
    };
    ka.get_onSoundFileStart = function() {
        null == ka._onSoundFileStart && (ka._onSoundFileStart = new ba);
        return ka._onSoundFileStart
    };
    ka.get_onSoundFileFinish = function() {
        null == ka._onSoundFileFinish && (ka._onSoundFileFinish = new ba);
        return ka._onSoundFileFinish
    };
    ka.get_onSoundFileStopped = function() {
        null == ka._onSoundFileStopped && (ka._onSoundFileStopped = new ba);
        return ka._onSoundFileStopped
    };
    ka.prototype = {
        __class__: ka
    };
    var wd = function(a, b, c, h) {
        this._signals = [a, b, c, h]
    };
    g["com.cmm.common.audio.SoundListeners"] = wd;
    wd.__name__ = ["com", "cmm", "common", "audio", "SoundListeners"];
    wd.__interfaces__ = [ya];
    wd.prototype = {
        dispose: function() {
            if (null != this._signals) {
                for (var a = E.iter(this._signals); a.hasNext();) {
                    var b = a.next();
                    null != b && b.dispose()
                }
                this._signals = null
            }
        },
        __class__: wd
    };
    var j = function(a, b) {
        J.call(this);
        this.id = a;
        this.params = null == b ? {} : eb.clone(b);
        this.name = "CMM_Component" + j._componentID;
        j._componentID++
    };
    g["com.cmm.common.components.CMMComponent"] = j;
    j.__name__ = ["com", "cmm", "common", "components", "CMMComponent"];
    j.__super__ = J;
    j.prototype = k(J.prototype, {
        get_name: function() {
            return "CMMComponent_10"
        },
        onAdded: function() {
            J.prototype.onAdded.call(this);
            var a = this.owner._compMap.Sprite_8;
            this._ownerSprite = a instanceof H ? a : null;
            a = this.owner._compMap.Sprite_8;
            if (null != (a instanceof Z ? a : null)) a = this.owner._compMap.Sprite_8, this._ownerMC = a instanceof Z ? a : null;
            a = this.owner._compMap.Disposer_12;
            null == a ? (this._signalConnection = new Mb, this.owner.add(this._signalConnection)) : this._signalConnection = a;
            null != this._ownerSprite && (this._signalConnection.connect0(this._ownerSprite.get_addedToStage(), d(this, this.onAddedToStage)), this._signalConnection.connect0(this._ownerSprite.get_removedFromStage(), d(this, this.onRemovedFromStage)))
        },
        onAddedToStage: function() {},
        onRemovedFromStage: function() {},
        dispose: function() {
            J.prototype.dispose.call(this);
            null != this._signalConnection && this._signalConnection.dispose();
            this._ownerMC = this._ownerSprite = null;
            cb["delete"](this)
        },
        __class__: j
    });
    var x = function(a, b) {
        this._voDelayTime = 300;
        this._over = !1;
        j.call(this, a, b)
    };
    g["com.cmm.common.components.btn.GenericBtn"] = x;
    x.__name__ = "com,cmm,common,components,btn,GenericBtn".split(",");
    x.__super__ = j;
    x.prototype = k(j.prototype, {
        get_name: function() {
            return "GenericBtn_11"
        },
        onAdded: function() {
            j.prototype.onAdded.call(this);
            this._ownerBtn = this._ownerSprite;
            this._signalConnection.connect1(this._ownerBtn.get_onEnableToggle(), d(this, this.onToggleEnabled));
            this._signalConnection.connect1(this._ownerSprite.get_pointerDown(), d(this, this.onPointerDown));
            this._signalConnection.connect1(this._ownerSprite.get_pointerUp(), d(this, this.onPointerUp));
            n.get_isMobile() || (this._signalConnection.connect1(this._ownerSprite.get_pointerIn(), d(this, this.onPointerOver)), this._signalConnection.connect1(this._ownerSprite.get_pointerOut(), d(this, this.onPointerOut)));
            this._highlight = !1
        },
        onToggleEnabled: function(a) {
            if ("enable" != a && "disable" == a) this.onPointerOut(null)
        },
        onPointerDown: function() {
            i.play(this.clickSound())
        },
        clickSound: function() {
            if (i.isValidFile(this._ownerBtn.get_className() + "Click")) return this._ownerBtn.get_className() +
                "Click";
            if (i.isValidFile(this._ownerSprite.get_instanceName() + "Click")) return this._ownerSprite.get_instanceName() + "Click";
            if (i.isValidFile(this.id + "Click")) return this.id + "Click";
            if (n.get_isMobile()) {
                if (i.isValidFile(this._ownerBtn.get_className() + "VO")) return this._ownerBtn.get_className() + "VO";
                if (i.isValidFile(this._ownerSprite.get_instanceName() + "VO")) return this._ownerSprite.get_instanceName() + "VO";
                if (i.isValidFile(this.id + "VO")) return this.id + "VO"
            }
            return ""
        },
        onPointerUp: function(a) {
            this.onPointerClick(a)
        },
        onPointerClick: function() {
            this._over = !1;
            null != this._voTimer && (this._voTimer.stop(), this._voTimer = null);
            null != this.params && null != this.params.clickEvent && e.dispatchEvent(new r(this.params.clickEvent))
        },
        onPointerOver: function() {
            this._over || (i.play(this.roSound()), this._voTimer = ca.delay(d(this, this.playVO), this._voDelayTime), this._over = !0)
        },
        roSound: function() {
            return i.isValidFile(this._ownerBtn.get_className() + "RO") ? this._ownerBtn.get_className() + "RO" : i.isValidFile(this._ownerSprite.get_instanceName() +
                "RO") ? this._ownerSprite.get_instanceName() + "RO" : i.isValidFile(this.id + "RO") ? this.id + "RO" : ""
        },
        playVO: function() {
            this._voTimer = null;
            (!0 == i.allowBtnVOInterrupt || !1 == i.isChannelPlaying("vo")) && !0 == this._over && i.play(this.voSound())
        },
        voSound: function() {
            return i.isValidFile(this._ownerSprite.get_instanceName() + "VO") ? this._ownerSprite.get_instanceName() + "VO" : i.isValidFile(this.id + "VO") ? this.id + "VO" : ""
        },
        onPointerOut: function() {
            this._over = !1;
            null != this._voTimer && (this._voTimer.stop(), this._voTimer = null)
        },
        __class__: x
    });
    var pc = function(a, b) {
        x.call(this, a, b)
    };
    g["com.cmm.common.components.btn.BackBtn"] = pc;
    pc.__name__ = "com,cmm,common,components,btn,BackBtn".split(",");
    pc.__super__ = x;
    pc.prototype = k(x.prototype, {
        get_name: function() {
            return "BackBtn_75"
        },
        onPointerClick: function(a) {
            x.prototype.onPointerClick.call(this, a);
            this._ownerSprite.get_parent().prevFrame()
        },
        __class__: pc
    });
    var qc = function(a, b) {
        x.call(this, a, b)
    };
    g["com.cmm.common.components.btn.MuteBtn"] = qc;
    qc.__name__ = "com,cmm,common,components,btn,MuteBtn".split(",");
    qc.__super__ = x;
    qc.prototype = k(x.prototype, {
        get_name: function() {
            return "MuteBtn_74"
        },
        onAdded: function() {
            var a = this;
            x.prototype.onAdded.call(this);
            this._disposable = i.get_muteState().watch(function() {
                a.setVis()
            })
        },
        onRemoved: function() {
            x.prototype.onRemoved.call(this);
            this._disposable.dispose()
        },
        setVis: function() {
            this._ownerMC.set_visible(this._ownerMC.set_pointerEnabled(!i.get_isMuted()))
        },
        onPointerClick: function(a) {
            x.prototype.onPointerClick.call(this, a);
            i.muteMuteableChannels()
        },
        __class__: qc
    });
    var sb = function(a, b) {
        x.call(this, a, b)
    };
    g["com.cmm.common.components.btn.PlayBtn"] = sb;
    sb.__name__ = "com,cmm,common,components,btn,PlayBtn".split(",");
    sb.__super__ = x;
    sb.prototype = k(x.prototype, {
        get_name: function() {
            return "PlayBtn_67"
        },
        onPointerClick: function(a) {
            x.prototype.onPointerClick.call(this, a);
            this.performPlayAction()
        },
        performPlayAction: function() {
            var a = this._ownerSprite.get_parent();
            a.gotoAndPlay(a.get_currentFrame(), a.get_nextLabelFrame(), 0)
        },
        __class__: sb
    });
    var rc = function(a, b) {
        x.call(this, a, b)
    };
    g["com.cmm.common.components.btn.UnmuteBtn"] = rc;
    rc.__name__ = "com,cmm,common,components,btn,UnmuteBtn".split(",");
    rc.__super__ = x;
    rc.prototype = k(x.prototype, {
        get_name: function() {
            return "UnmuteBtn_73"
        },
        onAdded: function() {
            var a = this;
            x.prototype.onAdded.call(this);
            this._disposable = i.get_muteState().watch(function() {
                a.setVis()
            })
        },
        onRemoved: function() {
            x.prototype.onRemoved.call(this);
            this._disposable.dispose()
        },
        setVis: function() {
            this._ownerMC.set_visible(this._ownerMC.set_pointerEnabled(i.get_isMuted()))
        },
        onPointerClick: function(a) {
            x.prototype.onPointerClick.call(this, a);
            i.unmuteMuteableChannels()
        },
        __class__: rc
    });
    var xd = function(a, b) {
        this._follow = !0;
        J.call(this);
        this.id = a;
        this.params = b
    };
    g["com.cmm.common.components.mc.FollowPointer"] = xd;
    xd.__name__ = "com,cmm,common,components,mc,FollowPointer".split(",");
    xd.__super__ = J;
    xd.prototype = k(J.prototype, {
        get_name: function() {
            return "FollowPointer_9"
        },
        onAdded: function() {
            J.prototype.onAdded.call(this);
            var a = this.owner._compMap.Sprite_8;
            this._ownerSprite = a instanceof H ? a : null;
            a = this.owner._compMap.Disposer_12;
            null == a ? (this._signalConnection = new Mb, this.owner.add(this._signalConnection)) : this._signalConnection = a
        },
        onRemoved: function() {
            J.prototype.onRemoved.call(this);
            this._signalConnection.dispose();
            this._ownerSprite = null
        },
        onUpdate: function(a) {
            J.prototype.onUpdate.call(this, a);
            this.follow() && (this._ownerSprite.x.set__(Math.min(A.DEFAULT_WIDTH * A.ASSET_SCALE, Math.max(20, na.get_globalPointerPointBoundedToStage().x))), this._ownerSprite.y.set__(Math.min(A.DEFAULT_HEIGHT * A.ASSET_SCALE, Math.max(20, na.get_globalPointerPointBoundedToStage().y))))
        },
        follow: function() {
            return null != this._ownerSprite ? this._follow : !1
        },
        __class__: xd
    });
    var Qb = function(a, b) {
        this._wasInvisible = !0;
        this._startFrame = 1;
        J.call(this);
        this.id = a;
        this.params = b
    };
    g["com.cmm.common.components.mc.SyncWithParent"] = Qb;
    Qb.__name__ = "com,cmm,common,components,mc,SyncWithParent".split(",");
    Qb.syncChildren = function(a, b) {
        null == b && (b = []);
        for (var c = 0, h = a.getChildren(); c < h.length;) {
            var d = h[c];
            ++c;
            C.__instanceof(d, Z) && !C.__instanceof(d, Vb) && -1 == b.indexOf(C.__cast(d, Z).get_instanceName()) && -1 == b.indexOf(C.__cast(d, Z).get_className()) && d.owner.add(new Qb(a.get_className()))
        }
    };
    Qb.__super__ = J;
    Qb.prototype = k(J.prototype, {
        get_name: function() {
            return "SyncWithParent_0"
        },
        onAdded: function() {
            J.prototype.onAdded.call(this);
            var a = this.owner._compMap.Sprite_8;
            this._ownerSprite = a instanceof H ? a : null;
            a = this.owner._compMap.Disposer_12;
            null == a ? (this._signalConnection = new Mb, this.owner.add(this._signalConnection)) : this._signalConnection = a;
            this._wasInvisible = !0;
            a = this.owner._compMap.Sprite_8;
            this._mc = a instanceof
            Z ? a : null
        },
        onRemoved: function() {
            J.prototype.onRemoved.call(this);
            this._signalConnection.dispose();
            this._mc = this._ownerSprite = null;
            this._wasInvisible = !1
        },
        dispose: function() {
            J.prototype.dispose.call(this);
            cb["delete"](this)
        },
        onUpdate: function(a) {
            J.prototype.onUpdate.call(this, a);
            0 != (this._mc._flags & 2) && (a = this._mc.get_parent(), null != a && (!0 == this._wasInvisible && (this._wasInvisible = !1, this._startFrame = a.get_currentFrame() - 1), a = a.get_currentFrame() - this._startFrame, a > this._mc.get_totalFrames() || (0 < a ? this._mc.gotoAndPlay(a) : this._mc.gotoAndPlay(1), this.gotoAndPlay_AllChildren(this._mc, this._mc.get_currentFrame()))))
        },
        gotoAndPlay_AllChildren: function(a, b) {
            null == b && (b = 1);
            for (var c = 0, h = a.get_numChildren(); c < h;) {
                var d = c++;
                null != a.getChildAt(d) && C.__instanceof(a.getChildAt(d), Z) && !C.__instanceof(a.getChildAt(d), Vb) && (C.__cast(a.getChildAt(d), Z).get_totalFrames() >= b && C.__cast(a.getChildAt(d), Z).gotoAndPlay(b), this.gotoAndPlay_AllChildren(a.getChildAt(d), b))
            }
        },
        __class__: Qb
    });
    var zc = function(a, b) {
        this._titleDelay = "titleDelay";
        this._titleVO = "titleVO";
        this._titleLoop = "titleLoop";
        this._titleSting = "titleSting";
        j.call(this, a, b)
    };
    g["com.cmm.common.components.mc.TitleScreen"] = zc;
    zc.__name__ = "com,cmm,common,components,mc,TitleScreen".split(",");
    zc.__super__ = j;
    zc.prototype = k(j.prototype, {
        get_name: function() {
            return "TitleScreen_71"
        },
        onAdded: function() {
            j.prototype.onAdded.call(this);
            if (n.get_isWebview() || "iOS" != n.get_platform().get_platformType()) ca.delay(d(this, this.playSting), 100), ca.delay(d(this, this.playVO), 100), this.setDelay();
            e.addEventListener("com.cmm.nls.events.titlePlay", d(this, this.titlePlay))
        },
        disposeActionQueue: function() {
            null != this._actionQueue && (this._actionQueue.stop(), this._actionQueue = null)
        },
        dispose: function() {
            this.disposeActionQueue();
            e.removeEventListener("com.cmm.nls.events.titlePlay", d(this, this.titlePlay));
            j.prototype.dispose.call(this)
        },
        onRemovedFromStage: function() {
            j.prototype.onRemovedFromStage.call(this);
            i.stopChannel("vo");
            i.stopChannel("sfx");
            w.destroy()
        },
        playSting: function() {
            i.isValidFile(this._titleSting) ? this._actionQueue = new G([new R(this._titleSting), new fa(d(this, this.stingComplete))]) : this.stingComplete()
        },
        stingComplete: function() {
            ca.delay(d(this, this.playLoop), 30)
        },
        playLoop: function() {
            i.isValidFile(this._titleLoop) && !1 == i.isSoundFilePlaying(this._titleLoop) && (i.stopChannel("music"), i.play(this._titleLoop))
        },
        playVO: function() {
            !0 == q.get("voiceOverAudio", !0) && i.isValidFile(this.getPlatformSpecificID(this._titleVO)) && i.play(this.getPlatformSpecificID(this._titleVO), d(this, this.voComplete))
        },
        setDelay: function() {
            w.addPrompt(15, d(this, this.playDelay))
        },
        voComplete: function() {
            this.startDelay()
        },
        startDelay: function() {
            w.start()
        },
        playDelay: function() {
            i.isValidFile(this.getPlatformSpecificID(this._titleDelay)) && i.play(this.getPlatformSpecificID(this._titleDelay), d(this, this.startDelay))
        },
        titlePlay: function() {
            this.disposeActionQueue()
        },
        getPlatformSpecificID: function(a) {
            return !n.get_isMobile() && i.isValidFile(a + "Desktop") ? a + "Desktop" : n.get_isMobile() && i.isValidFile(a + "Mobile") ? a + "Mobile" : a
        },
        __class__: zc
    });
    var sc = function(a, b) {
        this._initialized = !1;
        j.call(this, a, b)
    };
    g["com.cmm.common.components.mc.ToggleContainer"] = sc;
    sc.__name__ = "com,cmm,common,components,mc,ToggleContainer".split(",");
    sc.__super__ = j;
    sc.prototype = k(j.prototype, {
        get_name: function() {
            return "ToggleContainer_70"
        },
        onAdded: function() {
            j.prototype.onAdded.call(this);
            this._primary = this._ownerSprite.getChildByName("primary");
            this._secondary = this._ownerSprite.getChildByName("secondary");
            this._signalConnection.connect1(this._primary.get_pointerUp(), d(this, this.onPrimaryClick));
            this._signalConnection.connect1(this._secondary.get_pointerUp(), d(this, this.onSecondaryClick));
            !1 == this._initialized && (this._initialized = !0, this._primary.set_visible(!0), this._secondary.set_visible(!1))
        },
        onPrimaryClick: function() {
            this.setSecondaryState()
        },
        setPrimaryState: function() {
            this._primary.set_visible(!0);
            this._secondary.set_visible(!1)
        },
        onSecondaryClick: function() {
            this.setPrimaryState()
        },
        setSecondaryState: function() {
            this._primary.set_visible(!1);
            this._secondary.set_visible(!0)
        },
        __class__: sc
    });
    var gc = function(a) {
        this._currentIndex = -1;
        this._collection = [];
        if (null != a)
            for (var b = 0, c = a.length; b < c;) {
                var h = b++;
                this._collection.push(a[h])
            }
    };
    g["com.cmm.common.data.Collection"] = gc;
    gc.__name__ = ["com", "cmm", "common", "data", "Collection"];
    gc.prototype = {
        getCurrentItem: function() {
            return this.getItemAtIndex(this._currentIndex)
        },
        getCurrentIndex: function() {
            return this._currentIndex
        },
        getItemAtIndex: function(a) {
            return 0 > a || a >= this._collection.length ? null : this._collection[a]
        },
        getNextItem: function() {
            this.incrementIndex();
            return this.getCurrentItem()
        },
        incrementIndex: function() {
            this._currentIndex++;
            this._currentIndex == this._collection.length && (this._currentIndex = 0)
        },
        __class__: gc
    };
    var ja = function(a) {
        gc.call(this, a);
        this.shuffle()
    };
    g["com.cmm.common.data.RandomNoRepeatArray"] = ja;
    ja.__name__ = ["com", "cmm", "common", "data", "RandomNoRepeatArray"];
    ja.__super__ = gc;
    ja.prototype = k(gc.prototype, {
        incrementIndex: function() {
            gc.prototype.incrementIndex.call(this);
            0 == this._currentIndex && this.shuffle()
        },
        forceShuffle: function() {
            this.shuffle()
        },
        shuffle: function() {
            if (!(1 >= this._collection.length)) {
                for (var a = !0, b = [], c = 0, h = this._collection.length; c < h;) {
                    var d = c++;
                    b.push(d)
                }
                for (var b = [], e; 0 < this._collection.length;) {
                    for (; !(e = aa.random(this._collection.length), !(!0 == a && e == this._collection.length - 1)););
                    a = !1;
                    b.push(this._collection[e]);
                    this._collection.splice(e, 1)
                }
                a = 0;
                for (e = b.length; a < e;) c = a++, this._collection.push(b[c])
            }
        },
        __class__: ja
    });
    var yd = function(a, b) {
        this._audioTriggers = a.audioTriggers;
        this._target = b;
        this._onDelayInMsec = null == a.onDelayInMsec ? 0 : a.onDelayInMsec;
        this._displayTimeInMsec = null == a.displayTimeInMsec ? 0 : a.displayTimeInMsec;
        this._signals = ka.listen(d(this, this.onStart), d(this, this.onFinish), null, d(this, this.onStopped))
    };
    g["com.cmm.common.display.AudioTriggeredHighlight"] = yd;
    yd.__name__ = ["com", "cmm", "common", "display", "AudioTriggeredHighlight"];
    yd.__interfaces__ = [ya];
    yd.prototype = {
        onStart: function(a) {
            if (this.isTrigger(a)) this.on()
        },
        onFinish: function(a) {
            this.isTrigger(a) && this.off()
        },
        onStopped: function(a) {
            this.isTrigger(a) && this.off()
        },
        on: function() {
            this._aq = new G([new Fa(this._onDelayInMsec / 1E3), new fa((zd = this._target, d(zd, zd.highlightOn))), new y(0 < this._displayTimeInMsec, new bd([new Fa(this._displayTimeInMsec / 1E3), new fa((zd = this._target, d(zd, zd.highlightOff)))]))])
        },
        off: function() {
            this._target.highlightOff()
        },
        isTrigger: function(a) {
            return 0 > this._audioTriggers.indexOf(a.filename) ? 0 <= this._audioTriggers.indexOf(a.id) : !0
        },
        dispose: function() {
            null != this._signals && (null != this._aq && (this._aq.stop(), this._aq = null), this._signals.dispose(), this._audioTriggers = this._target = this._signals = null)
        },
        __class__: yd
    };
    var Ad = function(a) {
        this._root = a;
        this._children = []
    };
    g["com.cmm.common.display.DisplayList"] = Ad;
    Ad.__name__ = ["com", "cmm", "common", "display", "DisplayList"];
    Ad.__interfaces__ = [ya];
    Ad.prototype = {
        addChild: function(a) {
            return this.addChildAt(a, this.get_numChildren())
        },
        addChildAt: function(a, b) {
            if (0 <= b && b <= this._children.length) {
                var c = null;
                if (null == a.owner) c = new Oa, c.add(a);
                else {
                    if (null != a.owner.parent && a.owner.parent != this._root.owner && (c = a.owner.parent._compMap.Sprite_8, null != (c instanceof H ? c : null))) c = a.owner.parent._compMap.Sprite_8, (c instanceof H ? c : null).removeChild(a);
                    c = a.owner
                }
                this._children.splice(b, 0, a);
                this.insertChild(c, b, !1);
                if (C.__instanceof(a, H)) {
                    for (c = this._root.owner; !(c = c.parent, !(c != p.root && null != c)););
                    if (c == p.root) C.__cast(a, H).onAddedToStage()
                }
                return a
            }
            throw new z("SpriteContainer.hx: addChildAt: index: " + b + " is out of range");
        },
        insertChild: function(a, b, c) {
            null == c && (c = !0);
            var h = this._root.owner;
            if (null == h.firstChild) h.addChild(a, !1);
            else if (!c && 0 == b) h.addChild(a, !1);
            else {
                for (var d = null, e = h.firstChild, f = h.firstChild.next, g = 0; null != e && g != b;) d = e, e = e.next, null != e && (f = e.next), ++g;
                null != e ? (null != a.parent && a.parent.removeChild(a), a.parent = h, c ? (e.next = a, a.next = f) : (d.next = a, a.next = e)) : h.addChild(a)
            }
        },
        removeChild: function(a) {
            for (var b = 0, c = null, h = 0, d = this._children; h < d.length;) {
                var e = d[h];
                ++h;
                if (e == a) {
                    c = e;
                    this._root.owner.removeChild(e.owner);
                    if (C.__instanceof(e, H)) {
                        for (a = this._root.owner; !(a = a.parent, !(a != p.root && null != a)););
                        if (a == p.root) C.__cast(e, H).onRemovedFromStage()
                    }
                    this._children.splice(b, 1);
                    break
                }++b
            }
            return c
        },
        removeChildAt: function(a) {
            if (0 <= a && a < this._children.length) return a = this._children.splice(a, 1)[0], this._root.owner.removeChild(a.owner), a;
            throw new z("SpriteContainer.hx: removeChildAt index is out of range");
        },
        removeChildren: function(a, b) {
            null == b && (b = 2147483647);
            null == a && (a = 0);
            if (0 != this._children.length) {
                var c = 2147483647 == b ? this._children.length : b;
                if (0 <= a && a < this._children.length && 0 < c && c <= this._children.length && a < c)
                    for (var c = this._children.splice(a, c - a), h = 0; h < c.length;) {
                        var d = c[h];
                        ++h;
                        this._root.owner.removeChild(d.owner)
                    } else throw new z("SpriteContainer.hx: removeChildren indeces are out of range");
            }
        },
        containsSprite: function(a) {
            for (var b = 0, c = this._children; b < c.length;) {
                var h = c[b];
                ++b;
                if (h == a) return !0
            }
            return !1
        },
        getChildAt: function(a) {
            if (0 <= a && a < this._children.length) return this._children[a];
            throw new z("SpriteContainer.hx: getChildAt: index: " + a + " is out of range");
        },
        getChildByName: function(a) {
            for (var b = 0, c = this._children; b < c.length;) {
                var h = c[b];
                ++b;
                if (C.__instanceof(h, H) && C.__cast(h, H).get_instanceName() == a) return h
            }
            return null
        },
        dispose: function() {
            this._children = null
        },
        addedToStage: function() {
            for (var a = 0, b = this._children.length; a < b;) {
                var c = a++;
                if (C.__instanceof(this._children[c], H)) C.__cast(this._children[c], H).onAddedToStage()
            }
        },
        removedFromStage: function() {
            for (var a = 0, b = this._children.length; a < b;) {
                var c = a++;
                if (C.__instanceof(this._children[c], H)) C.__cast(this._children[c], H).onRemovedFromStage()
            }
        },
        getChildren: function(a, b) {
            return this._children.slice(a, Math.min(this._children.length, b) | 0)
        },
        hasChildWithName: function(a) {
            return null != this.getChildByName(a)
        },
        getChildrenOfType: function(a, b, c) {
            return this.getChildren(b, c).filter(function(b) {
                return C.__instanceof(b, a)
            })
        },
        get_numChildren: function() {
            return this._children.length
        },
        __class__: Ad,
        __properties__: {
            get_numChildren: "get_numChildren"
        }
    };
    var K = function() {
        this._viewMatrixUpdateCount = this._parentViewMatrixUpdateCount = 0;
        this.blendMode = this.scissor = this._viewMatrix = null;
        var a = this;
        J.call(this);
        this._flags |= 54;
        this._localMatrix = new xb;
        var b = function() {
            a._flags |= 24
        };
        this.x = new ua(0, b);
        this.y = new ua(0, b);
        this.rotation = new ua(0, b);
        this.scaleX = new ua(1, b);
        this.scaleY = new ua(1, b);
        this.anchorX = new ua(0, b);
        this.anchorY = new ua(0, b);
        this.alpha = new ua(1)
    };
    g["flambe.display.Sprite"] = K;
    K.__name__ = ["flambe", "display", "Sprite"];
    K.hitTest = function(a, b, c) {
        var h = a._compMap.Sprite_8;
        if (null != h) {
            if (6 != (h._flags & 6)) return null;
            h.getLocalMatrix().inverseTransform(b, c, K._scratchPoint) && (b = K._scratchPoint.x, c = K._scratchPoint.y);
            var d = h.scissor;
            if (null != d && !d.contains(b, c)) return null
        }
        a = K.hitTestBackwards(a.firstChild, b, c);
        return null != a ? a : null != h && h.containsLocal(b, c) ? h : null
    };
    K.getBounds = function(a, b) {
        null == b && (b = new Jb);
        b.set(1.79769313486231E308, 1.79769313486231E308, -1.79769313486231E308, -1.79769313486231E308);
        K.getBoundsImpl(a, null, b);
        b.width -= b.x;
        b.height -= b.y;
        return b
    };
    K.render = function(a, b) {
        var c = a._compMap.Sprite_8;
        if (null != c) {
            var h = c.alpha._value;
            if (0 == (c._flags & 2) || 0 >= h) return;
            b.save();
            1 > h && b.multiplyAlpha(h);
            null != c.blendMode && b.setBlendMode(c.blendMode);
            var h = c.getLocalMatrix(),
                d = h.m02,
                e = h.m12;
            0 != (c._flags & 32) && (d = Math.round(d), e = Math.round(e));
            b.transform(h.m00, h.m10, h.m01, h.m11, d, e);
            h = c.scissor;
            null != h && b.applyScissor(h.x, h.y, h.width, h.height);
            c.draw(b)
        }
        h = a._compMap.Director_13;
        if (null != h) {
            h = h.occludedScenes;
            for (d = 0; d < h.length;) e = h[d], ++d, K.render(e, b)
        }
        for (h = a.firstChild; null != h;) d = h.next, K.render(h, b), h = d;
        null != c && b.restore()
    };
    K.hitTestBackwards = function(a, b, c) {
        if (null != a) {
            var h = K.hitTestBackwards(a.next, b, c);
            return null != h ? h : K.hitTest(a, b, c)
        }
        return null
    };
    K.getBoundsImpl = function(a, b, c) {
        var h = a._compMap.Sprite_8;
        if (null != h) {
            var b = null != b ? xb.multiply(b, h.getLocalMatrix()) : h.getLocalMatrix(),
                d = h.getNaturalWidth(),
                h = h.getNaturalHeight();
            0 < d && 0 < h && (K.extendRect(b, 0, 0, c), K.extendRect(b, d, 0, c), K.extendRect(b, d, h, c), K.extendRect(b, 0, h, c))
        }
        d = a._compMap.Director_13;
        if (null != d)
            for (var d = d.occludedScenes, h = 0, e = d.length; h < e;) K.getBoundsImpl(d[h], b, c), ++h;
        for (a = a.firstChild; null != a;) d = a.next, K.getBoundsImpl(a, b, c), a = d
    };
    K.extendRect = function(a, b, c, h) {
        a = a.transform(b, c, K._scratchPoint);
        b = a.x;
        c = a.y;
        b < h.x && (h.x = b);
        c < h.y && (h.y = c);
        b > h.width && (h.width = b);
        c > h.height && (h.height = c)
    };
    K.__super__ = J;
    K.prototype = k(J.prototype, {
        get_name: function() {
            return "Sprite_8"
        },
        getNaturalWidth: function() {
            return 0
        },
        getNaturalHeight: function() {
            return 0
        },
        containsLocal: function(a, b) {
            return 0 <= a && a < this.getNaturalWidth() && 0 <= b ? b < this.getNaturalHeight() : !1
        },
        getLocalMatrix: function() {
            0 != (this._flags & 8) && (this._flags &= -9, this._localMatrix.compose(this.x._value, this.y._value, this.scaleX._value, this.scaleY._value, 3.141592653589793 * this.rotation._value / 180), this._localMatrix.translate(-this.anchorX._value, -this.anchorY._value));
            return this._localMatrix
        },
        getViewMatrix: function() {
            if (this.isViewMatrixDirty()) {
                var a = this.getParentSprite();
                this._viewMatrix = null != a ? xb.multiply(a.getViewMatrix(), this.getLocalMatrix(), this._viewMatrix) : this.getLocalMatrix().clone(this._viewMatrix);
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
        setXY: function(a, b) {
            this.x.set__(a);
            this.y.set__(b);
            return this
        },
        setScale: function(a) {
            this.scaleX.set__(a);
            this.scaleY.set__(a);
            return this
        },
        disablePointer: function() {
            this.set_pointerEnabled(!1);
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
            if (0 != (this._flags & 16)) return !0;
            var a = this.getParentSprite();
            return null == a ? !1 : this._parentViewMatrixUpdateCount == a._viewMatrixUpdateCount ? a.isViewMatrixDirty() : !0
        },
        getParentSprite: function() {
            if (null == this.owner) return null;
            for (var a = this.owner.parent; null != a;) {
                var b = a._compMap.Sprite_8;
                if (null != b) return b;
                a = a.parent
            }
            return null
        },
        get_pointerDown: function() {
            null == this._pointerDown && (this._pointerDown = new ba);
            return this._pointerDown
        },
        get_pointerMove: function() {
            null == this._pointerMove && (this._pointerMove = new ba);
            return this._pointerMove
        },
        get_pointerUp: function() {
            null == this._pointerUp && (this._pointerUp = new ba);
            return this._pointerUp
        },
        get_pointerIn: function() {
            null == this._pointerIn && (this._pointerIn = new ba);
            return this._pointerIn
        },
        get_pointerOut: function() {
            null == this._pointerOut && (this._pointerOut = new ba);
            return this._pointerOut
        },
        connectHover: function() {
            var a = this;
            null == this._hoverConnection && (this._hoverConnection = p._platform.getPointer().move.connect(function(b) {
                for (var c = b.hit; null != c;) {
                    if (c == a) return;
                    c = c.getParentSprite()
                }
                null != a._pointerOut && 0 != (a._flags & 64) && a._pointerOut.emit(b);
                a._flags &= -65;
                null != a._hoverConnection && (a._hoverConnection.dispose(), a._hoverConnection = null)
            }))
        },
        set_visible: function(a) {
            this._flags = Bd.set(this._flags, 2, a);
            return a
        },
        set_pointerEnabled: function(a) {
            this._flags = Bd.set(this._flags, 4, a);
            return a
        },
        set_pixelSnapping: function(a) {
            this._flags = Bd.set(this._flags, 32, a);
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
            1 == a.source[1] && (null != this._pointerOut && 0 != (this._flags & 64) && this._pointerOut.emit(a), this._flags &= -65, null != this._hoverConnection && (this._hoverConnection.dispose(), this._hoverConnection = null));
            null != this._pointerUp && this._pointerUp.emit(a)
        },
        __class__: K,
        __properties__: k(J.prototype.__properties__, {
            get_pointerOut: "get_pointerOut",
            get_pointerIn: "get_pointerIn",
            get_pointerUp: "get_pointerUp",
            get_pointerMove: "get_pointerMove",
            get_pointerDown: "get_pointerDown",
            set_pointerEnabled: "set_pointerEnabled",
            set_pixelSnapping: "set_pixelSnapping",
            set_visible: "set_visible"
        })
    });
    var H = function() {
        K.call(this);
        this._neverEnabled = !0;
        this._displayList = new Ad(this);
        null == this.get_instanceName() ? this.set_instanceName("instance_" +
            aa.string(H._instanceNum)) : this.set_instanceName(this.get_instanceName());
        H._instanceNum++;
        this.set_pixelSnapping(!1);
        (new Oa).add(this)
    };
    g["com.cmm.common.display.SpriteContainer"] = H;
    H.__name__ = ["com", "cmm", "common", "display", "SpriteContainer"];
    H.getVisibleBounds = function(a, b) {
        null == b && (b = new Jb);
        b.set(1.79769313486231E308, 1.79769313486231E308, -1.79769313486231E308, -1.79769313486231E308);
        H.getVisibleBoundsImpl(a, null, b);
        b.width -= b.x;
        b.height -= b.y;
        return b
    };
    H.getVisibleBoundsImpl = function(a, b, c) {
        var h = a._compMap.Sprite_8;
        if (null != h) {
            if (0 == (h._flags & 2) || 0 == h.alpha._value) return;
            var b = null != b ? xb.multiply(b, h.getLocalMatrix()) : h.getLocalMatrix(),
                d = h.getNaturalWidth(),
                h = h.getNaturalHeight();
            0 < d && 0 < h && (K.extendRect(b, 0, 0, c), K.extendRect(b, d, 0, c), K.extendRect(b, d, h, c), K.extendRect(b, 0, h, c))
        }
        d = a._compMap.Director_13;
        if (null != d)
            for (var d = d.occludedScenes, h = 0, e = d.length; h < e;) H.getVisibleBoundsImpl(d[h], b, c), ++h;
        for (a = a.firstChild; null != a;) d = a.next, H.getVisibleBoundsImpl(a, b, c), a = d
    };
    H.localToLocal = function(a, b, c) {
        c = null == c ? new oa : c;
        a.getLocalMatrix().transform(c.x, c.y, c);
        b.getViewMatrix().inverseTransform(c.x, c.y, c);
        return c
    };
    H.__super__ = K;
    H.prototype = k(K.prototype, {
        onAdded: function() {
            K.prototype.onAdded.call(this);
            var a = this.owner._compMap.Disposer_12;
            null == a ? (this._signalConnection = new Mb, this.owner.add(this._signalConnection)) : this._signalConnection = a;
            this._textures = this.getChildrenOfType(Wb)
        },
        dispose: function() {
            null != this.get_parent() && this.get_parent().removeChild(this);
            null != this._displayList && this._displayList.dispose();
            null != this._signalConnection && this._signalConnection.dispose();
            null != this._globalUpConnex && (this._globalUpConnex.dispose(), this._globalUpConnex = null);
            var a = this.owner;
            K.prototype.dispose.call(this);
            null != a && a.dispose();
            this._displayList = null;
            cb["delete"](this)
        },
        onAddedToStage: function() {
            this._displayList.addedToStage();
            this.get_addedToStage().emit()
        },
        onRemovedFromStage: function() {
            null != this._displayList && this._displayList.removedFromStage();
            this.get_removedFromStage().emit()
        },
        get_addedToStage: function() {
            null == this._addedToStage && (this._addedToStage = new fb);
            return this._addedToStage
        },
        get_removedFromStage: function() {
            null == this._removedFromStage && (this._removedFromStage = new fb);
            return this._removedFromStage
        },
        addChild: function(a) {
            return this._displayList.addChild(a)
        },
        addChildAt: function(a, b) {
            return this._displayList.addChildAt(a, b)
        },
        removeChild: function(a) {
            return this._displayList.removeChild(a)
        },
        removeChildAt: function(a) {
            return this._displayList.removeChildAt(a)
        },
        removeChildren: function(a, b) {
            null == b && (b = 2147483647);
            null == a && (a = 0);
            this._displayList.removeChildren(a, b)
        },
        getChildren: function(a, b) {
            null == b && (b = 2147483647);
            null == a && (a = 0);
            return this._displayList.getChildren(a, b)
        },
        getChildrenOfType: function(a, b, c) {
            null == c && (c = 2147483647);
            null == b && (b = 0);
            return this._displayList.getChildrenOfType(a, b, c)
        },
        containsSprite: function(a) {
            return this._displayList.containsSprite(a)
        },
        getChildAt: function(a) {
            return this._displayList.getChildAt(a)
        },
        getChildByName: function(a) {
            return this._displayList.getChildByName(a)
        },
        hasChildWithName: function(a) {
            return this._displayList.hasChildWithName(a)
        },
        get_instanceName: function() {
            return this.instanceName
        },
        set_instanceName: function(a) {
            return this.instanceName = a
        },
        get_numChildren: function() {
            return this._displayList.get_numChildren()
        },
        get_parent: function() {
            if (null == this.owner || null == this.owner.parent) return null;
            var a = this.owner.parent._compMap.Sprite_8;
            return a instanceof H ? a : null
        },
        set_visible: function(a) {
            null != this.get_parent() && C.__instanceof(this.get_parent(), Z) && C.__cast(this.get_parent(), Z)._internal_setLayerVisible(this.get_instanceName(), a);
            return K.prototype.set_visible.call(this, a)
        },
        _internal_set_visible: function(a) {
            return K.prototype.set_visible.call(this, a)
        },
        localToGlobal: function(a, b) {
            null == b && (b = 0);
            null == a && (a = 0);
            var c = new oa;
            this.getViewMatrix().transform(a, b, c);
            return c
        },
        enablePointer: function() {
            this.set_pointerEnabled(!0);
            return this
        },
        set_pointerEnabled: function(a) {
            K.prototype.set_pointerEnabled.call(this, a);
            a && this._neverEnabled && (this._neverEnabled = !1, this._signalConnection.connect1(this.get_pointerDown(), d(this, this.onPointerDownHandler)), this._signalConnection.connect1(this.get_pointerUp(), d(this, this.onPointerUpHandler)), this._signalConnection.connect1(this.get_pointerMove(), d(this, this.onPointerMoveHandler)), this._signalConnection.connect1(this.get_pointerIn(), d(this, this.onPointerOverHandler)), this._signalConnection.connect1(this.get_pointerOut(), d(this, this.onPointerOutHandler)), this._globalUpConnex = p._platform.getPointer().up.connect(d(this, this.onSystemPointerUpHandler)));
            return a
        },
        onPointerDownHandler: function() {},
        onPointerUpHandler: function() {},
        onPointerMoveHandler: function() {},
        onPointerOverHandler: function() {},
        onPointerOutHandler: function() {},
        onSystemPointerUpHandler: function() {},
        __class__: H,
        __properties__: k(K.prototype.__properties__, {
            get_parent: "get_parent",
            get_numChildren: "get_numChildren",
            get_removedFromStage: "get_removedFromStage",
            get_addedToStage: "get_addedToStage",
            set_instanceName: "set_instanceName",
            get_instanceName: "get_instanceName"
        })
    });
    var Z = function(a) {
        this._paused = !1;
        this._curAudioLabelIdx = this._curCallbackLabelIdx = -1;
        this._frameMS = 0;
        this._onLoop = this._onComplete = this._onAudioLabel = this._onCallbackLabel = null;
        this.resetToStartFrame = !1;
        this.curLoops = this.totalLoops = this.startFrame = this.endFrame = 0;
        H.call(this);
        this.symbol = a;
        this.speed = new ua(1);
        this._frameMS = 0.001 * (1E3 / a.frameRate);
        this._animators = Array(a.layers.length);
        for (var b = 0, c = this._animators.length; b < c;) {
            var h = b++,
                e = a.layers[h];
            this._animators[h] = new Je(e);
            var f = this._animators[h].content._compMap.Sprite_8;
            if (null != (f instanceof H ? f : null)) f = this._animators[h].content._compMap.Sprite_8, (f instanceof H ? f : null).set_instanceName(e.name);
            this._displayList.addChild(this._animators[h].content._compMap.Sprite_8)
        }
        0 < this.get_audioLabels().length ? (this._curAudioLabelIdx = 0, this._signalConnection.connect1(this.get_onAudioLabel(), d(this, this.onAudioLabelTriggered))) : this._curAudioLabelIdx = -1;
        0 < this.get_callbackLabels().length ? (this._curCallbackLabelIdx = 0, this._signalConnection.connect1(this.get_onCallbackLabel(), d(this, this.onCallbackLabelTriggered))) : this._curCallbackLabelIdx = -1;
        this.startFrame = 1;
        this.endFrame = this.get_totalFrames();
        this.curLoops = 0;
        this.totalLoops = -1;
        this._position = this._frame = 1;
        this["goto"](1);
        1 == this.symbol.frames ? this.gotoAndStop(1) : this.gotoAndPlay(1);
        this.compose()
    };
    g["com.cmm.common.display.MovieClip"] = Z;
    Z.__name__ = ["com", "cmm", "common", "display", "MovieClip"];
    Z.__super__ = H;
    Z.prototype = k(H.prototype, {
        get_audioLabels: function() {
            return this.symbol.getLabels("audio")
        },
        get_callbackLabels: function() {
            return this.symbol.getLabels("callback")
        },
        get_currentLabels: function() {
            return this.symbol.getLabels("sequence")
        },
        dispose: function() {
            if (null != this._animators)
                for (var a = 0, b = this._animators; a < b.length;) {
                    var c = b[a];
                    ++a;
                    c.dispose()
                }
            H.prototype.dispose.call(this)
        },
        compose: function() {
            null == this._components && (this._components = []);
            var a = ab.getCompositionObjectByClassName(this.symbol.get_name());
            if (null != a)
                for (var b = 0, c = a.components; b < c.length;) {
                    var h = c[b];
                    ++b;
                    this._components.push(la.createInstance(h, [a.id, a.params]))
                }
        },
        gotoAndPlay: function(a, b, c, h) {
            null == h && (h = !1);
            null == c && (c = -1);
            var d = 1;
            "number" == typeof a && (a | 0) === a ? d = a : "string" == typeof a && (d = this.getFrameFromLabel(a));
            1 > d && (d = 1);
            d > this.get_totalFrames() && this.get_totalFrames();
            a = this.get_totalFrames();
            null != b && ("number" == typeof b && (b | 0) === b ? a = b : "string" == typeof b && (a = this.getFrameFromLabel(b)));
            1 > a && (a = 1);
            a > this.get_totalFrames() && this.get_totalFrames();
            if (a < this.get_totalFrames() && d > a) throw new z("MovieClip.hx gotoAndPlay: startFrame is greater than or equal to endFrame");
            this.totalLoops = c;
            this.curLoops = 0;
            this.startFrame = d;
            this.endFrame = a;
            this.resetToStartFrame = h;
            this._frame = this.symbol.frames + 1;
            this._position = d * this._frameMS;
            this._curAudioLabelIdx = this.findClosestLabelIdx(this.get_audioLabels(), this.startFrame);
            this._curCallbackLabelIdx = this.findClosestLabelIdx(this.get_callbackLabels(), this.startFrame);
            this["goto"](d);
            d == a ? (this.speed.set__(0), this.gotoAndStop(d)) : this.speed.set__(1);
            null == b && (this.startFrame = 1)
        },
        gotoAndStop: function(a) {
            if (null != this.symbol) {
                var b = 1;
                "number" == typeof a && (a | 0) === a ? b = a : "string" == typeof a && (b = this.getFrameFromLabel(a));
                1 > b || b > this.get_totalFrames() || (this._frame = this.symbol.frames + 1, this._position = b * this._frameMS, this._curAudioLabelIdx = this.findClosestLabelIdx(this.get_audioLabels(), a), this._curCallbackLabelIdx = this.findClosestLabelIdx(this.get_callbackLabels(), a), this.speed.set__(0), this["goto"](b))
            }
        },
        playAnimationSequence: function(a, b) {
            var c = this.getFrameFromLabel(a) + 1,
                c = this.findClosestLabelIdx(this.get_currentLabels(), c),
                h = -1; - 1 != c && (h = this.get_currentLabels()[c].frame - 1);
            this.gotoAndPlay(a, -1 != c ? h : null, 0, !1);
            if (null != b) this.get_onComplete().connect(b).once()
        },
        loopAnimationSequence: function(a) {
            var b = this.getFrameFromLabel(a) + 1,
                b = this.findClosestLabelIdx(this.get_currentLabels(), b),
                b = -1 == b ? this.get_totalFrames() : this.get_currentLabels()[b].frame - 1;
            this.gotoAndPlay(a, b, -1, !1)
        },
        prevFrame: function() {
            var a = this.get_totalFrames();
            1 < this.get_currentFrame() ? this.gotoAndStop(this.get_currentFrame() - 1) : this.gotoAndStop(a)
        },
        stop: function() {
            this.speed.set__(0)
        },
        play: function() {
            this.speed.set__(1)
        },
        onAdded: function() {
            H.prototype.onAdded.call(this);
            if (null != this._animators)
                for (var a = 0, b = this._animators; a < b.length;) {
                    var c = b[a];
                    ++a;
                    this.owner.addChild(c.content)
                }
        },
        onAddedToStage: function() {
            H.prototype.onAddedToStage.call(this);
            for (var a = 0, b = this._components; a < b.length;) {
                var c = b[a];
                ++a;
                this.owner.add(c)
            }
        },
        onUpdate: function(a) {
            H.prototype.onUpdate.call(this, a);
            this.speed.update(a);
            if (0 != this.speed._value) {
                var b = this.get_currentFrame();
                if (!this._paused && (this._position += this.speed._value * a, a = this.startFrame * this._frameMS, this._position > this.endFrame * this._frameMS + this._frameMS)) {
                    this._position = a;
                    if (-1 < this.totalLoops && this.curLoops >= this.totalLoops) {
                        this.resetToStartFrame ? this.gotoAndStop(this.startFrame) : this.gotoAndStop(this.endFrame);
                        null != this._onComplete && this._onComplete.emit();
                        return
                    }
                    this.curLoops++;
                    null != this._onLoop && this._onLoop.emit()
                }
                a = this._position * this.symbol.frameRate;
                a < b && (this._curAudioLabelIdx = this.findClosestLabelIdx(this.get_audioLabels(), a), this._curCallbackLabelIdx = this.findClosestLabelIdx(this.get_callbackLabels(), a));
                this.checkAudioLabel(a);
                this.checkCallbackLabel(a, b);
                this["goto"](a)
            }
        },
        removeChild: function(a) {
            a = H.prototype.removeChild.call(this, a);
            this.removeAnimatorForSprite(a);
            return a
        },
        removeChildAt: function(a) {
            a = H.prototype.removeChildAt.call(this, a);
            this.removeAnimatorForSprite(a);
            return a
        },
        getFrameFromLabel: function(a) {
            for (var b = 0, c = this.get_currentLabels().length; b < c;) {
                var h = b++;
                if (this.get_currentLabels()[h].name == a) return this.get_currentLabels()[h].frame
            }
            return -1
        },
        labelExists: function(a) {
            return -1 != this.getFrameFromLabel(a)
        },
        onAudioLabelTriggered: function(a) {
            i.play(a)
        },
        onCallbackLabelTriggered: function() {},
        findClosestLabelIdx: function(a, b) {
            for (var c = 0, h = a.length; c < h;) {
                var d = c++;
                if (a[d].frame >= b) return d
            }
            return -1
        },
        checkAudioLabel: function(a) {
            if (0 < this.get_audioLabels().length && -1 < this._curAudioLabelIdx) {
                var b = this.get_audioLabels()[this._curAudioLabelIdx];
                b.frame <= a && (null != this._onAudioLabel && this._onAudioLabel.emit(b.name), this._curAudioLabelIdx++, this._curAudioLabelIdx >= this.get_audioLabels().length && (this._curAudioLabelIdx = -1))
            }
        },
        checkCallbackLabel: function(a, b) {
            null == b && (b = -1);
            if (0 < this.get_callbackLabels().length && -1 < this._curCallbackLabelIdx) {
                var c = this.get_callbackLabels()[this._curCallbackLabelIdx];
                if (c.frame <= a && (-1 == b || c.frame > b)) null != this._onCallbackLabel && this._onCallbackLabel.emit(c.name), this._curCallbackLabelIdx++, this._curCallbackLabelIdx >= this.get_callbackLabels().length && (this._curCallbackLabelIdx = -1)
            }
        },
        removeAnimatorForSprite: function(a) {
            if (C.__instanceof(a, H))
                for (var b = 0, c = 0, h = this._animators; c < h.length;) {
                    var d = h[c];
                    ++c;
                    if (d.layer.name == C.__cast(a, H).get_instanceName()) {
                        this._animators.splice(b, 1);
                        break
                    }++b
                }
        },
        "goto": function(a) {
            if (this._frame != a) {
                if (a < this._frame)
                    for (var b = 0, c = this._animators; b < c.length;) {
                        var h = c[b];
                        ++b;
                        h.changedKeyframe = !0;
                        h.keyframeIdx = 0
                    }
                b = 0;
                for (c = this._animators; b < c.length;) h = c[b], ++b, h.composeFrame(a - 1);
                this._frame = a
            }
        },
        get_totalFrames: function() {
            return null == this.symbol ? 1 : this.symbol.frames
        },
        get_currentFrame: function() {
            return Math.floor(this._frame)
        },
        get_onComplete: function() {
            null == this._onComplete && (this._onComplete = new fb);
            return this._onComplete
        },
        get_onAudioLabel: function() {
            null == this._onAudioLabel && (this._onAudioLabel = new ba);
            return this._onAudioLabel
        },
        get_onCallbackLabel: function() {
            null == this._onCallbackLabel && (this._onCallbackLabel = new ba);
            return this._onCallbackLabel
        },
        _internal_setLayerVisible: function(a, b) {
            for (var c = 0, h = this._animators; c < h.length;) {
                var d = h[c];
                ++c;
                if (d.layer.name == a) {
                    d.visible = b;
                    break
                }
            }
        },
        _internal_resetTimeline: function(a) {
            0 == (this._flags & 2) && a ? this.play() : 0 != (this._flags & 2) && !a && this.gotoAndStop(1)
        },
        get_className: function() {
            return this.symbol.get_name()
        },
        get_nextLabel: function() {
            for (var a = 0, b = this.get_currentLabels().length; a < b;) {
                var c = a++,
                    c = this.get_currentLabels()[c];
                if (c.frame > this.get_currentFrame()) return c
            }
            return null
        },
        get_nextLabelFrame: function() {
            return null != this.get_nextLabel() ? this.get_nextLabel().frame : this.get_totalFrames()
        },
        get_currentFrameLabel: function() {
            for (var a = 0, b = this.get_currentLabels().length; a < b;) {
                var c = a++,
                    c = this.get_currentLabels()[c];
                if (c.frame == this.get_currentFrame()) return c.name
            }
            return null
        },
        get_currentLabel: function() {
            for (var a = 0, b = this.get_currentLabels().length; a < b;) {
                var c = a++,
                    h = this.get_currentLabels()[c];
                if (h.frame == this.get_currentFrame()) return h.name;
                if (h.frame > this.get_currentFrame()) return 0 == c ? null : this.get_currentLabels()[c - 1].name
            }
            return 0 < this.get_currentLabels().length ? this.get_currentLabels()[this.get_currentLabels().length - 1].name : null
        },
        __class__: Z,
        __properties__: k(H.prototype.__properties__, {
            get_currentLabel: "get_currentLabel",
            get_currentFrameLabel: "get_currentFrameLabel",
            get_nextLabelFrame: "get_nextLabelFrame",
            get_nextLabel: "get_nextLabel",
            get_className: "get_className",
            get_onCallbackLabel: "get_onCallbackLabel",
            get_onAudioLabel: "get_onAudioLabel",
            get_onComplete: "get_onComplete",
            get_currentFrame: "get_currentFrame",
            get_totalFrames: "get_totalFrames",
            get_currentLabels: "get_currentLabels",
            get_callbackLabels: "get_callbackLabels",
            get_audioLabels: "get_audioLabels"
        })
    });
    var cd = function(a) {
        Z.call(this, a)
    };
    g["com.cmm.common.display.ExternalImageSprite"] = cd;
    cd.__name__ = ["com", "cmm", "common", "display", "ExternalImageSprite"];
    cd.__super__ = Z;
    cd.prototype = k(Z.prototype, {
        compose: function() {
            Z.prototype.compose.call(this);
            var a = V.replace(this.get_className(), "eximg_", "");
            this._url = q.get_assetPath() + "img/" + a + ".png";
            l.loadExternalImage(this._url, d(this, this.imgLoaded))
        },
        imgLoaded: function() {
            var a = new Tb(l.getExternalImage(this._url));
            if (null != a) {
                var b = this.getChildAt(0);
                a.setScale(A.ASSET_SCALE);
                a.x.set__(b.getLocalMatrix().m02);
                for (a.y.set__(b.getLocalMatrix().m12); 0 < this.get_numChildren();) this.removeChildAt(0);
                this.addChild(a)
            }
        },
        __class__: cd
    });
    var Ke = function(a, b) {
        this.name = b;
        var c, h;
        if (null != a.getFile(b + "/library.json", !1)) h = a.getFile(b + "/library.json"), c = JSON.parse(h.toString()), h.dispose();
        else {
            c = 0;
            for (var d = ""; null != a.getFile(b + "/library" + c + ".json", !1);) h = a.getFile(b + "/library" + c + ".json"), d += h.toString(), h.dispose(), ++c;
            d = V.replace(d, "\r", "");
            d = V.replace(d, "\n", "");
            d = V.replace(d, "\t", "");
            c = JSON.parse(d)
        }
        this._symbols = new $;
        this.frameRate = c.frameRate;
        h = [];
        for (var d = 0, e = c.movies; d < e.length;) {
            var f = e[d];
            ++d;
            f = new Cd(this, f);
            h.push(f);
            var g = this._symbols,
                j = f.get_name();
            null != o[j] ? g.setReserved(j, f) : g.h[j] = f
        }
        c = c.textureGroups[0].atlases;
        for (d = 0; d < c.length;) {
            j = c[d];
            ++d;
            e = a.getTexture(b + "/" + Ca.removeFileExtension(j.file));
            f = 0;
            for (j = j.textures; f < j.length;) {
                g = j[f];
                ++f;
                var g = new Dd(g, e),
                    i = this._symbols,
                    l = g.get_name();
                null != o[l] ? i.setReserved(l, g) : i.h[l] = g
            }
        }
        for (c = 0; c < h.length;) {
            e = h[c];
            ++c;
            d = 0;
            for (e = e.layers; d < e.length;) {
                f = e[d];
                ++d;
                j = 0;
                g = f.keyframes;
                l = 0;
                for (i = g.length; l < i;) {
                    var m = l++,
                        m = g[m];
                    if (null != m.symbolName) {
                        var k = m.symbolName,
                            n = this._symbols,
                            k = null != o[k] ? n.getReserved(k) : n.h[k];
                        null == f.lastSymbol ? (f.lastSymbol = k, f.lastSymbolKeyFrameIndex = j) : f.lastSymbol != k && (f.multipleSymbols = !0);
                        m.symbol = k
                    }++j
                }
            }
        }
    };
    g["com.cmm.common.display.FlumpLibrary"] = Ke;
    Ke.__name__ = ["com", "cmm", "common", "display", "FlumpLibrary"];
    Ke.prototype = {
        dispose: function() {
            for (var a = this._symbols, a = new Pa(a, a.arrayKeys()); a.hasNext();) {
                var b = a.next();
                C.__instanceof(b, ya) && C.__cast(b, ya).dispose()
            }
            this.name = this._symbols = null
        },
        __class__: Ke
    };
    var Ed = function() {};
    g["com.cmm.common.display.Highlightable"] = Ed;
    Ed.__name__ = ["com", "cmm", "common", "display", "Highlightable"];
    Ed.prototype = {
        __class__: Ed
    };
    var Le = function(a, b) {
        this.name = a;
        this.frame = b
    };
    g["com.cmm.common.display.FrameLabel"] = Le;
    Le.__name__ = ["com", "cmm", "common", "display", "FrameLabel"];
    Le.prototype = {
        __class__: Le
    };
    var Je = function(a) {
        this._sprites = null;
        this.visible = !0;
        this.changedKeyframe = !1;
        this.keyframeIdx = 0;
        this.layer = a;
        if (a.multipleSymbols) {
            this._sprites = Array(a.keyframes.length);
            for (var b = 0, c = this._sprites.length; b < c;) {
                var h = b++,
                    d = a.keyframes[h];
                this._sprites[h] = null != d.symbol ? d.symbol.createSprite() : new H
            }
            a = this._sprites[0]
        } else a = null != a.lastSymbol ? a.lastSymbol.createSprite() : new H;
        this.content = (new Oa).add(a)
    };
    g["com.cmm.common.display._MovieClip.MovieClipLayerAnimator"] = Je;
    Je.__name__ = "com,cmm,common,display,_MovieClip,MovieClipLayerAnimator".split(",");
    Je.prototype = {
        dispose: function() {
            this.content.dispose();
            cb["delete"](this)
        },
        composeFrame: function(a) {
            var b = this.layer.keyframes;
            if (null != b) {
                for (var c = b.length - 1; this.keyframeIdx < c && b[this.keyframeIdx + 1].index <= a;) ++this.keyframeIdx, this.changedKeyframe = !0;
                var h;
                this.changedKeyframe && null != this._sprites ? (h = this._sprites[this.keyframeIdx], this.content.add(h)) : h = this.content._compMap.Sprite_8;
                this.changedKeyframe = !1;
                var d = b[this.keyframeIdx],
                    e = d.visible && null != d.symbol && this.visible;
                C.__instanceof(h, Z) && C.__cast(h, Z)._internal_resetTimeline(null != d.symbol);
                C.__cast(h, H)._internal_set_visible(e);
                if (e) {
                    var e = d.x,
                        f = d.y,
                        g = d.scaleX,
                        j = d.scaleY,
                        i = d.skewX,
                        l = d.skewY,
                        m = d.alpha;
                    if (d.tweened && 1 < d.duration && this.keyframeIdx < c) {
                        a = (a - d.index) / d.duration;
                        c = d.ease;
                        if (0 != c) {
                            var k;
                            0 > c ? (k = 1 - a, k = 1 - k * k, c = -c) : k = a * a;
                            a = c * k + (1 - c) * a
                        }
                        b = b[this.keyframeIdx + 1];
                        e += (b.x - e) * a;
                        f += (b.y - f) * a;
                        g += (b.scaleX - g) * a;
                        j += (b.scaleY - j) * a;
                        i += (b.skewX - i) * a;
                        l += (b.skewY - l) * a;
                        m += (b.alpha - m) * a
                    }
                    b = h.getLocalMatrix();
                    a = Math.sin(i);
                    i = Math.cos(i);
                    c = Math.sin(l);
                    l = Math.cos(l);
                    b.set(l * g, c * g, -a * j, i * j, e, f);
                    b.translate(-d.pivotX, -d.pivotY);
                    h.alpha.set__(m)
                }
            }
        },
        __class__: Je
    };
    var Vb = function(a) {
        Z.call(this, a);
        this.resetLabels();
        this.set_pointerEnabled(!0);
        this._buttonState = ma.UP;
        this._onEnableToggle = new ba
    };
    g["com.cmm.common.display.MovieClipButton"] = Vb;
    Vb.__name__ = ["com", "cmm", "common", "display", "MovieClipButton"];
    Vb.__super__ = Z;
    Vb.prototype = k(Z.prototype, {
        get_downLabel: function() {
            return this._downLabel
        },
        set_downLabel: function(a) {
            return this._downLabel = a
        },
        get_overLabel: function() {
            return this._overLabel
        },
        set_overLabel: function(a) {
            return this._overLabel = a
        },
        _internal_resetTimeline: function() {},
        resetLabels: function() {
            this.set_upLabel("up");
            this.set_downLabel("down");
            this.set_overLabel("over");
            this.highlightLabel = "hl"
        },
        setDownState: function() {
            this.gotoAndStop(this.get_downLabel())
        },
        onPointerDownHandler: function(a) {
            Z.prototype.onPointerDownHandler.call(this, a);
            this.setDownState()
        },
        onPointerUpHandler: function(a) {
            this._buttonState == ma.DOWN && (Z.prototype.onPointerUpHandler.call(this, a), this.setUpState())
        },
        dispose: function() {
            this._buttonState = this._onEnableToggle = null;
            Z.prototype.dispose.call(this)
        },
        setUpState: function() {
            this._buttonState == ma.UP ? this.gotoAndStop(this._upLabel) : this._buttonState == ma.OVER && (-1 != this.getFrameFromLabel(this.get_overLabel()) ? this.gotoAndStop(this.get_overLabel()) : this.gotoAndStop(this._upLabel))
        },
        onSystemPointerUpHandler: function(a) {
            this._buttonState == ma.DOWN && (Z.prototype.onSystemPointerUpHandler.call(this, a), this.gotoAndStop(this._upLabel), S.gotoToDefaultState())
        },
        onPointerOverHandler: function(a) {
            Z.prototype.onPointerOverHandler.call(this, a);
            S.gotoToButtonState();
            this._buttonState = ma.OVER;
            "hl" != this.get_currentFrameLabel() && -1 != this.getFrameFromLabel(this.get_overLabel()) && this.gotoAndStop(this.get_overLabel())
        },
        onPointerOutHandler: function(a) {
            if (this._buttonState == ma.OVER || this._buttonState == ma.HIGHLIGHT) Z.prototype.onPointerOutHandler.call(this, a), !0 == p._platform.getPointer().isDown() ? (this._buttonState = ma.DOWN, "hl" != this.get_currentFrameLabel() && this.gotoAndStop(this.get_overLabel())) : (S.gotoToDefaultState(), "hl" != this.get_currentFrameLabel() && (this._buttonState = ma.UP, this.gotoAndStop(this._upLabel)))
        },
        get_onEnableToggle: function() {
            null == this._onEnableToggle && (this._onEnableToggle = new ba);
            return this._onEnableToggle
        },
        set_upLabel: function(a) {
            this.gotoAndStop(a);
            return this._upLabel = a
        },
        __class__: Vb,
        __properties__: k(Z.prototype.__properties__, {
            get_onEnableToggle: "get_onEnableToggle",
            set_overLabel: "set_overLabel",
            get_overLabel: "get_overLabel",
            set_downLabel: "set_downLabel",
            get_downLabel: "get_downLabel",
            set_upLabel: "set_upLabel"
        })
    });
    var Xb = function() {};
    g["flambe.swf.Symbol"] = Xb;
    Xb.__name__ = ["flambe", "swf", "Symbol"];
    Xb.prototype = {
        __class__: Xb
    };
    var Cd = function(a, b) {
        this.classType = "com.cmm.common.display.MovieClip";
        this._name = b.id;
        this.classType = this.getClassType(this.getSymbolType(this._name));
        this._labels = new $;
        this.frames = 0;
        this.frameRate = a.frameRate;
        this.layers = Array(b.layers.length);
        for (var c = 0, h = this.layers.length; c < h;) {
            var d = c++,
                e = new Fd(b.layers[d]);
            this.frames = Math.max(e.get_frames(), this.frames);
            this.layers[d] = e;
            for (var d = [], f = 0, g = e.keyframes; f < g.length;) {
                var j = g[f];
                ++f;
                null != j.label && d.push(new Le(j.label, j.index + 1 | 0))
            }
            e = e.name;
            f = this._labels;
            null != o[e] ? f.setReserved(e, d) : f.h[e] = d
        }
    };
    g["com.cmm.common.display.MovieClipSymbol"] = Cd;
    Cd.__name__ = ["com", "cmm", "common", "display", "MovieClipSymbol"];
    Cd.__interfaces__ = [ya, Xb];
    Cd.prototype = {
        dispose: function() {
            for (var a = 0, b = this.layers; a < b.length;) {
                var c = b[a];
                ++a;
                c.dispose()
            }
            cb["delete"](this)
        },
        getClassType: function(a) {
            return "mc" == a ? "com.cmm.common.display.MovieClip" : "btn" == a ? "com.cmm.common.display.MovieClipButton" : "txt" == a ? "com.cmm.common.text.DynamicTextSprite" : "intxt" == a ? "com.cmm.common.text.InputTextSprite" : "eximg" == a ? "com.cmm.common.display.ExternalImageSprite" : ""
        },
        getSymbolType: function(a) {
            var b = a.indexOf("_");
            return 0 < b ? a.substring(0, b) : null
        },
        get_name: function() {
            return this._name
        },
        createSprite: function() {
            var a = this.getSpriteFromClassType();
            if (null == a) throw new z("MovieClipSymbol.hx type: " + this.classType + " not found.");
            (new Oa).add(a);
            return a
        },
        getLabels: function(a) {
            if (null == this._labels) return [];
            var b = this._labels;
            if (null != (null != o[a] ? b.getReserved(a) : b.h[a])) return b = this._labels, null != o[a] ? b.getReserved(a) : b.h[a];
            var b = this._labels,
                c = a.toLowerCase();
            return null != (null != o[c] ? b.getReserved(c) : b.h[c]) ? (b = this._labels, a = a.toLowerCase(), null != o[a] ? b.getReserved(a) : b.h[a]) : []
        },
        getSpriteFromClassType: function() {
            return "com.cmm.common.display.MovieClip" == this.classType ? new Z(this) : "com.cmm.common.display.MovieClipButton" == this.classType ? new Vb(this) : "com.cmm.common.text.DynamicTextSprite" == this.classType ? new dd(this.get_name()) : "com.cmm.common.text.InputTextSprite" == this.classType ? new ed(this.get_name()) : "com.cmm.common.display.ExternalImageSprite" == this.classType ? new cd(this) : null
        },
        __class__: Cd,
        __properties__: {
            get_name: "get_name"
        }
    };
    var Fd = function(a) {
        this.multipleSymbols = !1;
        this.lastSymbolKeyFrameIndex = 0;
        this.lastSymbol = null;
        this.name = a.name;
        var b = null;
        this.keyframes = Array(a.keyframes.length);
        for (var c = 0, h = this.keyframes.length; c < h;) {
            var d = c++,
                b = new Gd(a.keyframes[d], b);
            this.keyframes[d] = b
        }
    };
    g["com.cmm.common.display.MovieClipLayer"] = Fd;
    Fd.__name__ = ["com", "cmm", "common", "display", "MovieClipLayer"];
    Fd.__interfaces__ = [ya];
    Fd.prototype = {
        dispose: function() {
            cb["delete"](this)
        },
        get_frames: function() {
            var a = this.keyframes[this.keyframes.length - 1];
            return a.index + (a.duration | 0) | 0
        },
        __class__: Fd,
        __properties__: {
            get_frames: "get_frames"
        }
    };
    var ma = g["com.cmm.common.display.BUTTON_STATE"] = {
        __ename__: ["com", "cmm", "common", "display", "BUTTON_STATE"],
        __constructs__: ["UP", "OVER", "DOWN", "DISABLED", "HIGHLIGHT"]
    };
    ma.UP = ["UP", 0];
    ma.UP.toString = m;
    ma.UP.__enum__ = ma;
    ma.OVER = ["OVER", 1];
    ma.OVER.toString = m;
    ma.OVER.__enum__ = ma;
    ma.DOWN = ["DOWN", 2];
    ma.DOWN.toString = m;
    ma.DOWN.__enum__ = ma;
    ma.DISABLED = ["DISABLED", 3];
    ma.DISABLED.toString = m;
    ma.DISABLED.__enum__ = ma;
    ma.HIGHLIGHT = ["HIGHLIGHT", 4];
    ma.HIGHLIGHT.toString = m;
    ma.HIGHLIGHT.__enum__ = ma;
    var Wb = function(a) {
        H.call(this);
        this.symbol = a;
        this.anchorX.set__(a.anchorX);
        this.anchorY.set__(a.anchorY);
        this._texture = a.atlas
    };
    g["com.cmm.common.display.TextureSprite"] = Wb;
    Wb.__name__ = ["com", "cmm", "common", "display", "TextureSprite"];
    Wb.__super__ = H;
    Wb.prototype = k(H.prototype, {
        draw: function(a) {
            a.drawSubTexture(this._texture, 0, 0, 0, 0, this._texture.get_width(), this._texture.get_height())
        },
        getNaturalWidth: function() {
            return this.symbol.width
        },
        getNaturalHeight: function() {
            return this.symbol.height
        },
        dispose: function() {
            null != this._texture && this._texture.dispose();
            H.prototype.dispose.call(this)
        },
        __class__: Wb
    });
    var Dd = function(a, b) {
        this._name = a.symbol;
        var c = a.rect;
        this.atlas = b.subTexture(c[0], c[1], c[2], c[3]);
        c = a.rect;
        this.x = c[0];
        this.y = c[1];
        this.width = c[2];
        this.height = c[3];
        c = a.origin;
        null != c ? (this.anchorX = c[0], this.anchorY = c[1]) : this.anchorY = this.anchorX = 0
    };
    g["com.cmm.common.display.TextureSpriteSymbol"] = Dd;
    Dd.__name__ = ["com", "cmm", "common", "display", "TextureSpriteSymbol"];
    Dd.__interfaces__ = [ya, Xb];
    Dd.prototype = {
        dispose: function() {
            this.atlas.dispose();
            cb["delete"](this)
        },
        createSprite: function() {
            return new Wb(this)
        },
        get_name: function() {
            return this._name
        },
        __class__: Dd,
        __properties__: {
            get_name: "get_name"
        }
    };
    var r = function(a, b, c) {
        null == c && (c = !0);
        this.type = "Event";
        this.newEvent = !0;
        this._stopped = !1;
        this.data = b;
        this.newEvent = c;
        this.type = a
    };
    g["com.cmm.common.event.Event"] = r;
    r.__name__ = ["com", "cmm", "common", "event", "Event"];
    r.prototype = {
        __class__: r
    };
    var Nb = function(a, b, c) {
        null == c && (c = !0);
        r.call(this, a, b, c)
    };
    g["com.cmm.common.event.CMMEvent"] = Nb;
    Nb.__name__ = ["com", "cmm", "common", "event", "CMMEvent"];
    Nb.__super__ = r;
    Nb.prototype = k(r.prototype, {
        __class__: Nb
    });
    var e = function() {};
    g["com.cmm.common.event.EDispatcher"] = e;
    e.__name__ = ["com", "cmm", "common", "event", "EDispatcher"];
    e.addEventListener = function(a, b) {
        var c = e._signals;
        if (!1 == (null != o[a] ? c.existsReserved(a) : c.h.hasOwnProperty(a))) {
            var c = e._signals,
                d = new ba;
            null != o[a] ? c.setReserved(a, d) : c.h[a] = d
        }
        c = e._signals;
        c = (null != o[a] ? c.getReserved(a) : c.h[a]).connect(b);
        d = e._signalConnections;
        if (!1 == (null != o[a] ? d.existsReserved(a) : d.h.hasOwnProperty(a))) {
            var d = [],
                f = e._signalConnections;
            null != o[a] ? f.setReserved(a, d) : f.h[a] = d
        }
        d = e._signalConnections;
        (null != o[a] ? d.getReserved(a) : d.h[a]).push(c)
    };
    e.dispatchEvent = function(a) {
        var b = a.type,
            c = e._signals;
        if (null != o[b] ? c.existsReserved(b) : c.h.hasOwnProperty(b)) b = a.type, c = e._signals, (null != o[b] ? c.getReserved(b) : c.h[b]).emit(a)
    };
    e.removeEventListener = function(a, b) {
        var c = e._signalConnections;
        if (null != o[a] ? c.existsReserved(a) : c.h.hasOwnProperty(a))
            for (var d = 0, c = e._signalConnections, f = (null != o[a] ? c.getReserved(a) : c.h[a]).length; d < f;) {
                var c = d++,
                    g = e._signalConnections;
                if (Q.compareMethods(b, (null != o[a] ? g.getReserved(a) : g.h[a])[c]._listener)) {
                    d = e._signalConnections;
                    (null != o[a] ? d.getReserved(a) : d.h[a])[c].dispose();
                    d = e._signalConnections;
                    (null != o[a] ? d.getReserved(a) : d.h[a]).splice(c, 1);
                    break
                }
            }
    };
    var ba = function(a) {
        Da.call(this, a)
    };
    g["flambe.util.Signal1"] = ba;
    ba.__name__ = ["flambe", "util", "Signal1"];
    ba.__super__ = Da;
    ba.prototype = k(Da.prototype, {
        connect: function(a, b) {
            null == b && (b = !1);
            return this.connectImpl(a, b)
        },
        emit: function(a) {
            var b = this;
            this._head == Da.DISPATCHING_SENTINEL ? this.defer(function() {
                b.emitImpl(a)
            }) : this.emitImpl(a)
        },
        emitImpl: function(a) {
            for (var b = this.willEmit(), c = b; null != c;) c._listener(a), c.stayInList || c.dispose(), c = c._next;
            this.didEmit(b)
        },
        __class__: ba
    });
    var l = function() {};
    g["com.cmm.common.io.LoadMaster"] = l;
    l.__name__ = ["com", "cmm", "common", "io", "LoadMaster"];
    l.__properties__ = {
        set_loadMC: "set_loadMC"
    };
    l.isLoaded = function(a) {
        var b = l._assetPackHash;
        return null != o[a] ? b.existsReserved(a) : b.h.hasOwnProperty(a)
    };
    l.set_loadMC = function(a) {
        l._loadMC = a;
        null != l._loadMC && (l._loadMCProgress = l._loadMC.getChildByName("mc_loader"), l._loadMCProgress.gotoAndStop(1));
        return l._loadMC
    };
    l.addLoader = function() {
        if (null != l._loadMC) {
            l._loadMCProgress.gotoAndStop(1);
            O.instance.get_foreLayer().removeChildren();
            O.instance.get_foreLayer().addChild(l._loadMC);
            var a = L.createMovieClip("mc_frame");
            O.instance.get_foreLayer().addChild(a);
            a.set_pointerEnabled(!1)
        }
    };
    l.removeLoader = function() {
        null != l._loadMC && null != l._loadMC.get_parent() && l._loadMC.get_parent().removeChild(l._loadMC)
    };
    l.loadBatch = function(a, b) {
        l._onSuccess = b;
        l._batchQueue = a.split(",").filter(function(a) {
            return !l.isLoaded(a)
        });
        if (0 == l._batchQueue.length) b(a);
        else {
            l.addLoader();
            for (var c = 0, d = l._batchQueue; c < d.length;) {
                var e = d[c];
                ++c;
                l.addManifest(za.fromAssets(e, !1), e, q.get_assetPath() + "assets")
            }
            for (; 0 < l._batchQueue.length;) l.loadPack(l._batchQueue.shift());
            var f = new Hd(l._batches);
            f.get(function() {
                l._batches = [];
                null != l._loadMC && ca.delay(l.removeLoader, 500);
                if (null != l._onSuccess) {
                    var b = l._onSuccess;
                    l._onSuccess = null;
                    b(a)
                }
            });
            null != l._loadMC && f.progressChanged.connect(function() {
                var a = Math.ceil(100 * (f._progress / f._total));
                l._loadMCProgress.gotoAndStop(Math.max(1, Math.min(a, l._loadMCProgress.get_totalFrames())));
                l._onProgress.emit(Math.min(a, 100))
            })
        }
    };
    l.addManifest = function(a, b, c) {
        var d;
        null != a ? (d = l._manifestHash, d = !(null != o[b] ? d.existsReserved(b) : d.h.hasOwnProperty(b))) : d = !1;
        d && (d = l._manifestHash, a = l.cleanManifest(a, b, c), null != o[b] ? d.setReserved(b, a) : d.h[b] = a)
    };
    l.cleanManifest = function(a, b, c) {
        var b = 0,
            d = new za;
        d.set_localBase(c);
        if (l.loadMobileAssets) {
            if (n.isLowEnd())
                for (c = E.iter(a._entries); c.hasNext();)
                    if (-1 != c.next().url.indexOf("/libraryLowEnd/")) {
                        b = 2;
                        break
                    }
            if (n.get_isMobile() && 0 == b)
                for (c = E.iter(a._entries); c.hasNext();)
                    if (-1 != c.next().url.indexOf("/libraryMobile/")) {
                        b = 1;
                        break
                    }
        }
        for (a = E.iter(a._entries); a.hasNext();) c = a.next(), 0 == b && -1 == c.url.indexOf("/libraryLowEnd/") && -1 == c.url.indexOf("/libraryMobile/") ? l.addToManifest(d, c) : 1 == b && -1 == c.url.indexOf("/libraryLowEnd/") && -1 == c.url.indexOf("/library/") ? l.addToManifest(d, c) : 2 == b && -1 == c.url.indexOf("/libraryMobile/") && -1 == c.url.indexOf("/library/") && l.addToManifest(d, c);
        return d
    };
    l.addToManifest = function(a, b) {
        b.format != B.Data ? a.add(Ca.removeFileExtension(b.name), b.url, b.bytes, b.format) : a.add(b.name, b.url, b.bytes, b.format)
    };
    l.loadPack = function(a) {
        var b = l._manifestHash,
            b = null != o[a] ? b.getReserved(a) : b.h[a];
        if (null == b) throw new z("Could not find pack: " + a);
        b = l.getPromise(b);
        l._batches.push(b);
        b.get(function(b) {
            l.addPack(a, b);
            b = l._assetPackHash;
            L.addLibrariesFromAssetPack(null != o[a] ? b.getReserved(a) : b.h[a])
        })
    };
    l.loadExternalImage = function(a, b) {
        var c = new za;
        c.set_localBase(q.get_assetPath());
        c.add("image", a);
        l.getPromise(c).get(function(c) {
            l.addPack(a, c);
            l.getAssetPack(a).textures.set(vb.getFileNameFromPath(a), c.getTexture("image"));
            null != b && b(a)
        })
    };
    l.getPromise = function(a) {
        return (new ud(yb.instance, a)).promise
    };
    l.getExternalImage = function(a) {
        return l.getTexture(a, vb.getFileNameFromPath(a))
    };
    l.addPack = function(a, b) {
        var c = l._assetPackHash;
        null != o[a] ? c.setReserved(a, b) : c.h[a] = b
    };
    l.getAssetPack = function(a) {
        var b = l._assetPackHash;
        if (null != o[a] ? b.existsReserved(a) : b.h.hasOwnProperty(a)) return b = l._assetPackHash, null != o[a] ? b.getReserved(a) : b.h[a];
        throw new z("LoadMaster.hx getAssetPack: assetPack with " + a + " does not exist.");
    };
    l.disposeAssetPack = function(a) {
        var b = l._assetPackHash;
        if (null != o[a] ? b.existsReserved(a) : b.h.hasOwnProperty(a)) b = l._assetPackHash, b = null != o[a] ? b.getReserved(a) : b.h[a], l._assetPackHash.remove(a), l._manifestHash.remove(a), b.dispose(), L.disposeFlumpLibrary(a)
    };
    l.getSound = function(a, b) {
        var c = l._assetPackHash;
        if (!1 == (null != o[a] ? c.existsReserved(a) : c.h.hasOwnProperty(a))) return new Va;
        c = l._assetPackHash;
        return (null != o[a] ? c.getReserved(a) : c.h[a]).getSound(b, !1)
    };
    l.getTexture = function(a, b) {
        var c = l._assetPackHash;
        return (null != o[a] ? c.existsReserved(a) : c.h.hasOwnProperty(a)) ? (c = l._assetPackHash, (null != o[a] ? c.getReserved(a) : c.h[a]).getTexture(b, !1)) : null
    };
    l.getXML = function(a, b) {
        var c = l.getAssetAsString(a, b);
        return null == c ? null : D.parse(c)
    };
    l.getJSON = function(a, b) {
        return null == l.getFile(a, b) ? null : JSON.parse(l.getAssetAsString(a, b))
    };
    l.getAssetAsString = function(a, b) {
        var c = l.getFile(a, b);
        return null == c ? null : c.toString()
    };
    l.getFile = function(a, b) {
        var c = l._assetPackHash;
        return (null != o[a] ? c.getReserved(a) : c.h[a]).getFile(b, !1)
    };
    l.disposeLoader = function() {};
    l.prototype = {
        __class__: l
    };
    var G = function(a) {
        this._completeHandler = new fa(d(this, this.completeHandler));
        this._sequence = new bd(a);
        this._sequence.add(this._completeHandler);
        this._script = new Id;
        this._ent = new Oa;
        this._ent.add(this._script);
        p.root.addChild(this._ent);
        this._handle = this._script.run(this._sequence);
        this._script.onUpdate(0)
    };
    g["com.cmm.common.script.ActionQueue"] = G;
    G.__name__ = ["com", "cmm", "common", "script", "ActionQueue"];
    G.prototype = {
        stop: function() {
            p.root.removeChild(this._ent);
            null != this._script && this.completeHandler()
        },
        pause: function() {
            p.root.removeChild(this._ent)
        },
        resume: function() {
            p.root.addChild(this._ent)
        },
        completeHandler: function() {
            this._script.stopAll();
            this._sequence.removeAll();
            this._sequence = null;
            this._script.dispose();
            this._handle.dispose();
            this._ent.dispose();
            this._handle = this._script = null
        },
        __class__: G
    };
    var Me = function() {
        this._state = -2
    };
    g["com.cmm.common.script.ActionState"] = Me;
    Me.__name__ = ["com", "cmm", "common", "script", "ActionState"];
    Me.prototype = {
        notStarted: function() {
            return -2 == this._state
        },
        start: function() {
            this._state = -1
        },
        inProgress: function() {
            return -1 == this._state
        },
        complete: function() {
            this._state = 1
        },
        isComplete: function() {
            return 1 == this._state
        },
        __class__: Me
    };
    var gb = function() {};
    g["flambe.script.Action"] = gb;
    gb.__name__ = ["flambe", "script", "Action"];
    gb.prototype = {
        __class__: gb
    };
    var y = function(a, b, c) {
        this._assert = a;
        this._trueAction = b;
        this._falseAction = c
    };
    g["com.cmm.common.script.If"] = y;
    y.__name__ = ["com", "cmm", "common", "script", "If"];
    y.__interfaces__ = [gb];
    y.prototype = {
        update: function(a, b) {
            var c = 1;
            this._assert ? c = this._trueAction.update(a, b) : null != this._falseAction && (c = this._falseAction.update(a, b));
            1 == c && (this._falseAction = this._trueAction = null);
            return c
        },
        __class__: y
    };
    var v = function(a, b, c) {
        null == c && (c = !0);
        this._mc = a;
        this._sequenceID = b;
        this._state = null == this._sequenceID || this._mc.labelExists(b) ? -2 : 1;
        this._wait = c
    };
    g["com.cmm.common.script.PlayAnimationSequence"] = v;
    v.__name__ = ["com", "cmm", "common", "script", "PlayAnimationSequence"];
    v.__interfaces__ = [gb];
    v.prototype = {
        update: function() {
            -2 == this._state && (this._state = -1, null == this._sequenceID ? this._mc.gotoAndPlay(1, this._mc.get_totalFrames(), 0, !1) : (this._mc.labelExists(this._sequenceID) || (this._sequenceID = null), this._mc.playAnimationSequence(this._sequenceID)), this._mc.get_onComplete().connect(d(this, this.completeHandler)).once(), this._wait || this.completeHandler());
            return 1 == this._state ? (this._state = -2, 1) : this._state
        },
        completeHandler: function() {
            this._state = 1
        },
        __class__: v
    };
    var R = function(a, b, c) {
        null == b && (b = !0);
        this._soundID = a;
        this._state = -2;
        this._wait = b;
        this._cb = c
    };
    g["com.cmm.common.script.PlaySound"] = R;
    R.__name__ = ["com", "cmm", "common", "script", "PlaySound"];
    R.__interfaces__ = [gb];
    R.prototype = {
        update: function(a) {
            -2 == this._state && (this._state = -1, this.startSound());
            return 1 == this._state ? (this._state = -2, a) : this._state
        },
        startSound: function() {
            this._wait ? i.play(this._soundID, d(this, this.soundComplete)) : (i.play(this._soundID), this.soundComplete())
        },
        soundComplete: function() {
            this._wait && null != this._cb && (this._cb(), this._cb = null);
            this._state = 1
        },
        __class__: R
    };
    var hc = function(a, b) {
        null == b && (b = !0);
        R.call(this, a, b)
    };
    g["com.cmm.common.script.PlaySoundRandom"] = hc;
    hc.__name__ = ["com", "cmm", "common", "script", "PlaySoundRandom"];
    hc.__interfaces__ = [gb];
    hc.__super__ = R;
    hc.prototype = k(R.prototype, {
        startSound: function() {
            this._wait ? i.playRandom(this._soundID, d(this, this.soundComplete)) : (i.playRandom(this._soundID), this.soundComplete())
        },
        __class__: hc
    });
    var s = function(a, b) {
        this._type = a;
        this._data = b
    };
    g["com.cmm.common.script.SendEvent"] = s;
    s.__name__ = ["com", "cmm", "common", "script", "SendEvent"];
    s.__interfaces__ = [gb];
    s.prototype = {
        update: function(a) {
            e.dispatchEvent(new r(this._type, this._data));
            this._data = this._type = null;
            return a
        },
        __class__: s
    };
    var hb = function(a, b) {
        this._eventType = a;
        this._functionToCall = b;
        this._state = new Me;
        hb._instance = this
    };
    g["com.cmm.common.script.WaitForEvent"] = hb;
    hb.__name__ = ["com", "cmm", "common", "script", "WaitForEvent"];
    hb.__interfaces__ = [gb];
    hb.prototype = {
        update: function(a) {
            if (null == this._state) return -2;
            if (this._state.notStarted()) return this._state.start(), e.addEventListener(this._eventType, d(this, this.setStateToComplete)), -1;
            if (this._state.inProgress()) return -1;
            this._state.isComplete() && (this._state = null);
            return a
        },
        setStateToComplete: function() {
            e.removeEventListener(this._eventType, d(this, this.setStateToComplete));
            this._eventType = null;
            null != this._functionToCall && (this._functionToCall(), this._functionToCall = null);
            hb._instance = null;
            this._state.complete()
        },
        __class__: hb
    };
    var Ga = function() {};
    g["com.cmm.common.text.DynamicTextLibrary"] = Ga;
    Ga.__name__ = ["com", "cmm", "common", "text", "DynamicTextLibrary"];
    Ga.getFormat = function(a) {
        var b;
        null != a ? (b = Ga._txtDict, b = !(null != o[a] ? b.existsReserved(a) : b.h.hasOwnProperty(a))) : b = !0;
        if (b) return Ga.getDefaultFormat();
        b = Ga._txtDict;
        return null != o[a] ? b.getReserved(a) : b.h[a]
    };
    Ga.getFormat_input = function(a) {
        var b = Ga._intxtDict;
        return null != o[a] ? b.getReserved(a) : b.h[a]
    };
    Ga.getDefaultFormat = function() {
        return {
            id: null,
            style: {
                fontFamily: "_sans",
                fontSize: "24px",
                textAlign: "center",
                verticalAlign: "center",
                lineSpacing: "0px",
                fontStyle: "normal",
                fontVariant: "normal",
                fontWeight: "normal",
                color: "#ffffff",
                rotation: 0,
                stroke: "#000000",
                lineWidth: 1,
                underline: !1,
                background: !0,
                backgroundColor: "#000000"
            },
            textMetrics: {
                top: 0,
                left: 0,
                width: 100,
                height: 100
            },
            text: ""
        }
    };
    Ga.prototype = {
        __class__: Ga
    };
    var dd = function(a) {
        this._backgroundColor = 16777215;
        this._background = !1;
        this._fontSize = this._lineSpacing = this._textRotation = 0;
        H.call(this);
        this._format = Ga.getFormat(a);
        this.updateFontProps();
        this._textArray = this._format.text.split("<br/>");
        null != a && this.compose()
    };
    g["com.cmm.common.text.DynamicTextSprite"] = dd;
    dd.__name__ = ["com", "cmm", "common", "text", "DynamicTextSprite"];
    dd.__super__ = H;
    dd.prototype = k(H.prototype, {
        compose: function() {
            null == this._components && (this._components = []);
            var a = ab.getCompositionObjectByClassName(this._format.id);
            if (null != a)
                for (var b = 0, c = a.components; b < c.length;) {
                    var d = c[b];
                    ++b;
                    this._components.push(la.createInstance(d, [this._format.id, a.params]))
                }
        },
        onAddedToStage: function() {
            H.prototype.onAddedToStage.call(this);
            if (null != this._components)
                for (var a = 0, b = this._components; a < b.length;) {
                    var c = b[a];
                    ++a;
                    this.owner.add(c)
                }
        },
        draw: function(a) {
            !0 == this._background && a.fillRect(this._backgroundColor, this._format.textMetrics.left, this._format.textMetrics.top, this._format.textMetrics.width, this._format.textMetrics.height);
            this._canvas = C.__cast(p._platform.getStage(), fd)._canvas;
            this._ctx = this._canvas.getContext("2d");
            this._ctx.font = this._font;
            null != this._format.style.stroke && (this._ctx.strokeStyle = this._format.style.stroke, this._ctx.lineWidth = this._format.style.lineWidth);
            this._ctx.fillStyle = this._format.style.color;
            this._ctx.textBaseline = "top";
            var a = 0,
                a = this._textArray.length * this.lineHeight + (this._textArray.length - 1) * this.get_lineSpacing(),
                b = 0.5 * a,
                c = 0.5 * this.get_textMetrics().height,
                a = "center" == this._format.style.verticalAlign ? c - b : "bottom" == this._format.style.verticalAlign ? this.get_textMetrics().height - a : 0,
                c = b = c = 0;
            if ("center" == this._format.style.textAlign)
                for (var d = 0, e = this._textArray.length; d < e;) {
                    var f = d++,
                        g = 0.5 * this._ctx.measureText(this._textArray[f]).width,
                        c = 0 < f ? this._lineSpacing * f : 0,
                        b = this._format.textMetrics.left + (this._format.textMetrics.width - this._ctx.measureText(this._textArray[f]).width) / 2,
                        c = this._format.textMetrics.top + a + f * this.lineHeight + c;
                    null != this._format.style.stroke && this._ctx.strokeText(this._textArray[f], b, c);
                    this._ctx.fillText(this._textArray[f], b, c);
                    this.get_underline() && this.drawUnderline(this._ctx, b, c, 2 * g)
                } else if ("right" == this._format.style.textAlign) {
                    d = 0;
                    for (e = this._textArray.length; d < e;) f = d++, g = this._ctx.measureText(this._textArray[f]).width, c = 0 < f ? this._lineSpacing * f : 0, b = this._format.textMetrics.left + this._format.textMetrics.width - g, c = this._format.textMetrics.top + a + f * this.lineHeight + c, null != this._format.style.stroke && this._ctx.strokeText(this._textArray[f], b, c), this._ctx.fillText(this._textArray[f], b, c), this.get_underline() && this.drawUnderline(this._ctx, b, c, g)
                } else {
                    d = 0;
                    for (e = this._textArray.length; d < e;) f = d++, c = 0 < f ? this._lineSpacing * f : 0, b = this._format.textMetrics.left, c = this._format.textMetrics.top +
                        a + f * this.lineHeight + c, null != this._format.style.stroke && this._ctx.strokeText(this._textArray[f], b, c), this._ctx.fillText(this._textArray[f], b, c), this.get_underline() && this.drawUnderline(this._ctx, b, c, this._ctx.measureText(this._textArray[f]).width)
                }
        },
        drawUnderline: function(a, b, c, d) {
            var e = 0.5 * (this.lineHeight + this.get_fontSize());
            a.beginPath();
            a.strokeStyle = this._format.style.color;
            a.lineWidth = 1;
            a.moveTo(b, c + e);
            a.lineTo(b + d, c + e);
            a.stroke()
        },
        getNaturalWidth: function() {
            return null != this._format ? this._format.textMetrics.width : 0
        },
        getNaturalHeight: function() {
            return null != this._format ? this._format.textMetrics.height : 0
        },
        get_fontSize: function() {
            return aa.parseInt(this._format.style.fontSize)
        },
        get_lineSpacing: function() {
            return parseFloat(this._format.style.lineSpacing)
        },
        get_textMetrics: function() {
            return this._format.textMetrics
        },
        get_underline: function() {
            return this._format.style.underline
        },
        updateFontProps: function() {
            this._font = "";
            null != this._format.style.fontStyle && (this._font += this._format.style.fontStyle + " ");
            null != this._format.style.fontVariant && (this._font += this._format.style.fontVariant + " ");
            null != this._format.style.fontWeight && (this._font += this._format.style.fontWeight + " ");
            null != this._format.style.lineSpacing && (this._lineSpacing = parseFloat(this._format.style.lineSpacing));
            null != this._format.style.rotation && (this._textRotation = this._format.style.rotation);
            var a = this._format.style.fontFamily;
            if (null != Ga.settings.fallbackFonts)
                for (var b = 0, c = Ga.settings.fallbackFonts.length; b < c;) var d = b++,
                    a = a + (", " + Ga.settings.fallbackFonts[d]);
            b = aa.parseInt(this._format.style.fontSize.split("px")[0]);
            b = b * A.ASSET_SCALE | 0;
            this._font += b + "px " + a;
            this._fontSize = aa.parseInt(this._format.style.fontSize);
            a = window.document.createElement("span");
            a.innerHTML = "Hg";
            a.style.font = this._font;
            b = window.document.createElement("div");
            b.style.display = "inline-block";
            b.style.width = "1px";
            b.style.height = "0px";
            c = window.document.createElement("div");
            c.appendChild(a);
            c.appendChild(b);
            window.document.body.appendChild(c);
            b.style.verticalAlign = "bottom";
            this.lineHeight = b.offsetTop - a.offsetTop;
            window.document.body.removeChild(c)
        },
        __class__: dd,
        __properties__: k(H.prototype.__properties__, {
            get_underline: "get_underline",
            get_textMetrics: "get_textMetrics",
            get_lineSpacing: "get_lineSpacing",
            get_fontSize: "get_fontSize"
        })
    });
    var ed = function(a) {
        this._initialized = !1;
        this._placeholder = "";
        var b = this;
        H.call(this);
        p._platform.getPointer().up.connect(function(a) {
            b.onClick(a)
        });
        p._platform.getStage().resize.connect(function() {
            b.onResize()
        });
        this._format = null != a ? Ga.getFormat_input(a) : {
            id: null,
            style: {
                fontFamily: "Times New Roman",
                fontSize: "12px",
                textAlign: "left",
                fontStyle: "normal",
                fontVariant: "normal",
                fontWeight: "normal",
                color: "#000000",
                maxlength: -1,
                type: "text",
                outline: !1,
                border: !1,
                background: !1
            },
            textMetrics: {
                top: 0,
                left: 0,
                width: 100,
                height: 100
            },
            text: "ENTER TEXT"
        };
        Ga.settings.useDeviceFonts && this.set_fontFamily("sans-serif");
        this.set_visible(!1);
        var c = window.document.getElementById("content");
        this._input = window.document.createElement("textarea");
        c.appendChild(this._input);
        this._input.style.position = "absolute";
        this._input.style.resize = "none";
        this._input.style.width = aa.string(this._format.textMetrics.width) + "px";
        this._input.style.height = aa.string(this._format.textMetrics.height) + "px";
        this._input.onkeyup = d(this, this.onKeyUp);
        this._input.onfocus = d(this, this.onFocus);
        this._input.onblur = d(this, this.onBlur);
        this._input.placeholder = this._format.text;
        this._placeholder = this._input.placeholder;
        this._format.text = "";
        this.updateProps();
        null != a && this.compose()
    };
    g["com.cmm.common.text.InputTextSprite"] = ed;
    ed.__name__ = ["com", "cmm", "common", "text", "InputTextSprite"];
    ed.__super__ = H;
    ed.prototype = k(H.prototype, {
        compose: function() {
            null == this._components && (this._components = []);
            var a = ab.getCompositionObjectByClassName(this._format.id);
            if (null != a)
                for (var b = 0, c = a.components; b < c.length;) {
                    var d = c[b];
                    ++b;
                    this._components.push(la.createInstance(d, [this._format.id, a.params]))
                }
        },
        onKeyUp: function() {
            null != this._input && (this._format.text = this._input.value)
        },
        onFocus: function() {
            null != this._input && (this._input.placeholder = "")
        },
        onBlur: function() {
            null != this._input && (this._input.placeholder = this._placeholder)
        },
        onAddedToStage: function() {
            H.prototype.onAddedToStage.call(this);
            if (null != this._components)
                for (var a = 0, b = this._components; a < b.length;) {
                    var c = b[a];
                    ++a;
                    this.owner.add(c)
                }
            this.set_visible(!0);
            0 == this.get_numChildren() && (a = new Vc(16711680, 10, 10), this.addChild(a), a.set_visible(!1));
            this.x.watch(d(this, this.onXChange));
            this.y.watch(d(this, this.onYChange));
            for (a = this.get_parent(); null != a;) a.x.watch(d(this, this.onXChange)), a.y.watch(d(this, this.onYChange)), a = a.get_parent()
        },
        onRemovedFromStage: function() {
            H.prototype.onRemovedFromStage.call(this);
            this.set_visible(!1)
        },
        onClick: function() {
            null != this._input && window.document.activeElement.blur()
        },
        onResize: function() {
            window.document.activeElement.blur();
            var a = A.GLOBAL_SCALE * this.x._value + this._format.textMetrics.left + O.instance.get_gameLayer().x._value | 0;
            this._input.style.left = (null == a ? "null" : "" + a) + "px";
            a = A.GLOBAL_SCALE * this.y._value + this._format.textMetrics.top + O.instance.get_gameLayer().y._value | 0;
            this._input.style.top = (null == a ? "null" : "" + a) + "px";
            this.updateProps()
        },
        set_fontFamily: function(a) {
            this._format.style.fontFamily = a;
            this.updateProps();
            return this._format.style.fontFamily
        },
        get_fontSize: function() {
            return aa.parseInt(this._format.style.fontSize)
        },
        set_visible: function(a) {
            H.prototype.set_visible.call(this, a);
            this.updateProps();
            return a
        },
        onXChange: function() {
            if (null != this._input) {
                var a = K.getBounds(this.owner),
                    b = this.getViewMatrix(),
                    c = this.localToGlobal(),
                    a = new Jb(c.x - (b.m02 - a.x), c.y - (b.m12 - a.y), a.width, a.height),
                    a = A.GLOBAL_SCALE * a.x + this._format.textMetrics.left + O.instance.get_gameLayer().x._value | 0;
                this._input.style.left = (null == a ? "null" : "" + a) + "px"
            }
        },
        onYChange: function() {
            if (null != this._input) {
                var a = K.getBounds(this.owner),
                    b = this.getViewMatrix(),
                    c = this.localToGlobal(),
                    a = new Jb(c.x - (b.m02 - a.x), c.y - (b.m12 - a.y), a.width, a.height),
                    a = A.GLOBAL_SCALE * a.y + this._format.textMetrics.top + O.instance.get_gameLayer().y._value | 0;
                this._input.style.top = (null == a ? "null" : "" + a) + "px"
            }
        },
        onUpdate: function(a) {
            H.prototype.onUpdate.call(this, a);
            !1 == this._initialized && null != this.get_parent() && C.__instanceof(this.get_parent(), Z) && (a = K.getBounds(this.owner), 0 != a.x && 0 != a.y && (this.onXChange(0, 0), this.onYChange(0, 0), this._initialized = !0))
        },
        updateProps: function() {
            if (null != this._input) {
                this._input.style.fontFamily = this._format.style.fontFamily;
                var a = A.GLOBAL_SCALE * this.get_fontSize() | 0;
                this._input.style.fontSize = (null == a ? "null" : "" + a) + "px";
                this._input.style.textAlign = this._format.style.textAlign;
                this._input.style.color = this._format.style.color;
                if (null != this.get_parent() && C.__instanceof(this.get_parent(), Z)) {
                    this.get_parent();
                    this.localToGlobal();
                    var a = K.getBounds(this.owner),
                        b = this.getViewMatrix(),
                        c = this.localToGlobal();
                    new Jb(c.x - (b.m02 - a.x), c.y - (b.m12 - a.y), a.width, a.height);
                    this.onXChange(0, 0);
                    this.onYChange(0, 0)
                }
                a = A.GLOBAL_SCALE * this._format.textMetrics.width | 0;
                this._input.style.width = (null == a ? "null" : "" + a) + "px";
                this._input.style.display = 0 != (this._flags & 2) ? "inline-block" : "none";
                this._input.setAttribute("maxlength", aa.string(this._format.style.maxlength));
                this._input.style.outline = this._format.style.outline ? "solid" : "none";
                this._input.style.border = this._format.style.border ? "2px inset" : "none";
                this._input.style.background = this._format.style.background ? "white" : "none";
                this._input.value = this._format.text
            }
        },
        __class__: ed,
        __properties__: k(H.prototype.__properties__, {
            set_fontFamily: "set_fontFamily",
            get_fontSize: "get_fontSize"
        })
    });
    var Wc = function() {};
    g["com.cmm.common.utils.ArrayUtil"] = Wc;
    Wc.__name__ = ["com", "cmm", "common", "utils", "ArrayUtil"];
    Wc.indexOf = function(a, b) {
        for (var c = 0, d = b.length; c < d;) {
            var e = c++;
            if (b[e] == a) return e
        }
        return -1
    };
    Wc.prototype = {
        __class__: Wc
    };
    var w = function() {};
    g["com.cmm.common.utils.DelayPrompt"] = w;
    w.__name__ = ["com", "cmm", "common", "utils", "DelayPrompt"];
    w.addPrompt = function(a, b, c) {
        w.stop();
        w.setTimeout(a);
        w._onFireFunc = b;
        null != c && w._triggers.push(new Ne(c, !0, !0, !0))
    };
    w.setTimeout = function(a) {
        w._timeout = 1E3 * a
    };
    w.start = function() {
        w.destroyTimer();
        if (null != w._onFireFunc && (w._timer = ca.delay(w._onFireFunc, w._timeout), 0 < w._triggers.length))
            for (var a = 0, b = w._triggers.length; a < b;) {
                var c = a++;
                null != w._triggers[c] && (w._triggers[c].moveEnabled && w._triggers[c].addMoveEventListener(w.reset), w._triggers[c].downEnabled && w._triggers[c].addDownEventListener(w.reset), w._triggers[c].upEnabled && w._triggers[c].addUpEventListener(w.reset))
            }
    };
    w.destroyTimer = function() {
        null != w._timer && (w._timer.run = null, w._timer.stop(), w._timer = null)
    };
    w.stop = function() {
        w.destroyTimer();
        if (0 < w._triggers.length)
            for (var a = 0, b = w._triggers.length; a < b;) {
                var c = a++;
                null != w._triggers[c] && w._triggers[c].removeAllMoveEventListeners()
            }
    };
    w.reset = function() {
        null != w._timer && (w.stop(), w.start())
    };
    w.destroy = function() {
        w._onFireFunc = null;
        w._timeout = 0;
        for (w.stop(); 0 < w._triggers.length;) w._triggers.pop()
    };
    w.prototype = {
        __class__: w
    };
    var Ne = function(a, b, c, d) {
        null == d && (d = !1);
        null == c && (c = !1);
        null == b && (b = !1);
        this.moveEnabled = this.upEnabled = this.downEnabled = !1;
        this._listener = a;
        this._signalConnections = [];
        this.moveEnabled = b;
        this.upEnabled = c;
        this.downEnabled = d
    };
    g["com.cmm.common.utils._DelayPrompt.DelayPromptListener"] = Ne;
    Ne.__name__ = "com,cmm,common,utils,_DelayPrompt,DelayPromptListener".split(",");
    Ne.prototype = {
        addMoveEventListener: function(a) {
            this._signalConnections.push(this._listener.get_pointerMove().connect(function() {
                a()
            }))
        },
        addDownEventListener: function(a) {
            this._signalConnections.push(this._listener.get_pointerDown().connect(function() {
                a()
            }))
        },
        addUpEventListener: function(a) {
            this._signalConnections.push(this._listener.get_pointerUp().connect(function() {
                a()
            }))
        },
        removeAllMoveEventListeners: function() {
            for (var a = 0, b = this._signalConnections.length; a < b;) this._signalConnections[a++].dispose()
        },
        __class__: Ne
    };
    var cb = function() {};
    g["com.cmm.common.utils.DeleteUtil"] = cb;
    cb.__name__ = ["com", "cmm", "common", "utils", "DeleteUtil"];
    cb["delete"] = function(a) {
        for (var b = E.iter(Q.fields(a)); b.hasNext();) {
            var c = b.next();
            a[c] = null;
            Q.deleteField(a, c)
        }
    };
    cb.prototype = {
        __class__: cb
    };
    var qf = function() {};
    g["com.cmm.common.utils.HTMLBuilder"] = qf;
    qf.__name__ = ["com", "cmm", "common", "utils", "HTMLBuilder"];
    qf.prototype = {
        __class__: qf
    };
    var eb = function() {};
    g["com.cmm.common.utils.JSONUtil"] = eb;
    eb.__name__ = ["com", "cmm", "common", "utils", "JSONUtil"];
    eb.clone = function(a) {
        return eb.merge({}, a)
    };
    eb.merge = function(a, b) {
        null == a && (a = {});
        null == b && (b = {});
        for (var c = 0, d = Q.fields(b); c < d.length;) {
            var e = d[c];
            ++c;
            var f = Q.getProperty(a, e),
                g = Q.getProperty(b, e);
            null == f ? Q.setProperty(a, e, g) : eb.isRecursable(f) && eb.merge(f, g)
        }
        return JSON.parse(JSON.stringify(a))
    };
    eb.isRecursable = function(a) {
        return "string" != typeof a ? Q.isObject(a) : !1
    };
    eb.getProperty = function(a, b) {
        return Q.getProperty(a, b)
    };
    eb.prototype = {
        __class__: eb
    };
    var L = function() {};
    g["com.cmm.common.utils.LibraryTools"] = L;
    L.__name__ = ["com", "cmm", "common", "utils", "LibraryTools"];
    L.addLibrary = function(a, b) {
        null == L._libraries && (L._libraries = new $, L._libraryKeys = new $);
        var c = L._libraries;
        null != o[a] ? c.setReserved(a, b) : c.h[a] = b
    };
    L.addLibrariesFromAssetPack = function(a) {
        for (var b = E.iter(a.get_manifest()._entries); b.hasNext();) {
            var c = b.next(),
                d = c.name.indexOf("library.json"); - 1 == d && (d = c.name.indexOf("library0.json"));
            if (-1 < d) {
                var d = c.name.substring(0, d - 1),
                    e = c.url.substring(0, c.url.indexOf("/"));
                L.addLibrary(d, new Ke(a, d));
                var f = L._libraryKeys;
                null != o[e] ? f.setReserved(e, d) : f.h[e] = d;
                a.getFile(c.name).dispose()
            }
        }
    };
    L.createLibraryItem = function(a, b) {
        var c = L.getSymbol(a, b);
        return null == c ? null : c.createSprite()
    };
    L.getSymbol = function(a, b) {
        if (null == L._libraries) return null;
        if (null == b)
            for (var c = null, d = L._libraries.keys(); d.hasNext();) {
                var c = d.next(),
                    e = L._libraries,
                    c = (null != o[c] ? e.getReserved(c) : e.h[c])._symbols.get(a);
                if (null != c) return c
            } else if (d = L._libraries, null != o[b] ? d.existsReserved(b) : d.h.hasOwnProperty(b)) return d = L._libraries, (null != o[b] ? d.getReserved(b) : d.h[b])._symbols.get(a);
        return null
    };
    L.createMovieClip = function(a, b) {
        return L.createLibraryItem(a, b)
    };
    L.createMovieClipButton = function(a, b) {
        return L.createLibraryItem(a, b)
    };
    L.disposeFlumpLibrary = function(a) {
        var b = L._libraryKeys;
        if (null != o[a] ? b.existsReserved(a) : b.h.hasOwnProperty(a)) {
            for (var b = L._libraryKeys, b = (null != o[a] ? b.getReserved(a) : b.h[a]).split(","), c = 0; c < b.length;) {
                var d = b[c];
                ++c;
                var e = L._libraries;
                if (null != o[d] ? e.existsReserved(d) : e.h.hasOwnProperty(d)) e = L._libraries, (null != o[d] ? e.getReserved(d) : e.h[d]).dispose(), L._libraries.remove(d)
            }
            L._libraryKeys.remove(a)
        }
    };
    L.exists = function(a) {
        if (null == L._libraries) return !1;
        for (var b = null, c = L._libraries.keys(); c.hasNext();) {
            var b = c.next(),
                d = L._libraries,
                b = (null != o[b] ? d.getReserved(b) : d.h[b])._symbols.get(a);
            if (null != b) return !0
        }
        return !1
    };
    var Oe = function() {};
    g["com.cmm.common.utils.MathHelper"] = Oe;
    Oe.__name__ = ["com", "cmm", "common", "utils", "MathHelper"];
    Oe.bounded = function(a, b, c) {
        return Math.min(Math.max(a, b), c)
    };
    var S = function() {};
    g["com.cmm.common.utils.MouseUtil"] = S;
    S.__name__ = ["com", "cmm", "common", "utils", "MouseUtil"];
    S.setCustomCursor = function(a, b) {
        null == b && (b = !0);
        S.removeExistingCursors();
        S.hideCursor();
        if (!n.get_isMobile() || b) S._customCursor = a, S.mouseLayer().addChild(S._customCursor), S.cursorGoToFrame("up"), null == S._customCursor.owner._compMap.FollowPointer_9 && S._customCursor.owner.add(new xd("CustomCursor")), S._customCursor.set_pointerEnabled(!1);
        e.addEventListener("com.cmm.common.events.resize", S.resize)
    };
    S.removeExistingCursors = function() {
        null != S._customCursor && (S._customCursor.get_parent().removeChild(S._customCursor), S._customCursor.owner.dispose());
        S._customCursor = null
    };
    S.mouseLayer = function() {
        null == O.instance.getLayer("mouseLayer") && O.instance.addLayer(new H, "mouseLayer");
        return O.instance.getLayer("mouseLayer")
    };
    S.resize = function() {};
    S.setNormalCursor = function() {
        S.removeExistingCursors();
        p._platform.getMouse().set_cursor(Ka.Default)
    };
    S.gotoToButtonState = function() {
        S.usingCustomCursor() ? S.cursorGoToFrame("over") : p._platform.getMouse().set_cursor(Ka.Button)
    };
    S.gotoToDefaultState = function() {
        S.usingCustomCursor() ? S.cursorGoToFrame("up") : p._platform.getMouse().set_cursor(Ka.Default)
    };
    S.cursorGoToFrame = function(a) {
        if (C.__instanceof(S._customCursor, Z)) {
            var b = C.__cast(S._customCursor, Z); - 1 < b.getFrameFromLabel(a) && b.gotoAndStop(a)
        }
    };
    S.usingCustomCursor = function() {
        return null != S._customCursor
    };
    S.hideCursor = function() {
        S.usingCustomCursor() ? S._customCursor.set_visible(!1) : p._platform.getMouse().set_cursor(Ka.None)
    };
    S.showCursor = function() {
        S.usingCustomCursor() ? S._customCursor.set_visible(!0) : p._platform.getMouse().set_cursor(Ka.Default)
    };
    var na = function() {};
    g["com.cmm.common.utils.PointerUtil"] = na;
    na.__name__ = ["com", "cmm", "common", "utils", "PointerUtil"];
    na.__properties__ = {
        get_globalPointerPointBoundedToStage: "get_globalPointerPointBoundedToStage",
        get_globalPointerPoint: "get_globalPointerPoint",
        get_globalPointerY: "get_globalPointerY",
        get_globalPointerX: "get_globalPointerX"
    };
    na.get_globalPointerX = function() {
        return na.scaledFloat(p._platform.getPointer().get_x())
    };
    na.scaledFloat = function(a) {
        return a * A.ASSET_SCALE / O.instance.get_stage().scaleX._value
    };
    na.get_globalPointerY = function() {
        return na.scaledFloat(p._platform.getPointer().get_y() -
            A.GLOBAL_OFFSET.y)
    };
    na.get_globalPointerPoint = function() {
        return new oa(na.get_globalPointerX(), na.get_globalPointerY())
    };
    na.get_globalPointerPointBoundedToStage = function() {
        var a = na.get_globalPointerPoint();
        a.x = Oe.bounded(a.x, A.GLOBAL_OFFSET.x, A.DEFAULT_WIDTH * A.ASSET_SCALE);
        a.y = Oe.bounded(a.y, A.GLOBAL_OFFSET.y, (A.DEFAULT_HEIGHT - A.GLOBAL_OFFSET.y) * A.ASSET_SCALE);
        return a
    };
    na.prototype = {
        __class__: na
    };
    var vb = function() {};
    g["com.cmm.common.utils.StringUtil"] = vb;
    vb.__name__ = ["com", "cmm", "common", "utils", "StringUtil"];
    vb.getFileNameFromPath = function(a) {
        return Ca.removeFileExtension(E.substr(a, a.lastIndexOf("/") + 1, null))
    };
    vb.stringToBool = function(a) {
        return "true" == a.toLowerCase() || "t" == a.toLowerCase() ? !0 : !1
    };
    vb.prototype = {
        __class__: vb
    };
    var Pe = function(a) {
        this._onUpdate = null;
        J.call(this);
        this._onUpdate = a
    };
    g["com.cmm.common.utils.UpdateComponent"] = Pe;
    Pe.__name__ = ["com", "cmm", "common", "utils", "UpdateComponent"];
    Pe.__super__ = J;
    Pe.prototype = k(J.prototype, {
        get_name: function() {
            return "UpdateComponent_7"
        },
        onUpdate: function(a) {
            J.prototype.onUpdate.call(this, a);
            null != this._onUpdate && this._onUpdate(a)
        },
        __class__: Pe
    });
    var La = function() {};
    g["com.cmm.common.utils.browserDetect.PlatformInfo"] = La;
    La.__name__ = "com,cmm,common,utils,browserDetect,PlatformInfo".split(",");
    La.getPlatform = function() {
        return n.userAgentContains("Windows") ? new Jd : n.userAgentContains("iPad") || n.userAgentContains("iPhone") || n.userAgentContains("iPod") ? new Kd : n.userAgentContains("Mac") ? new Ld : n.userAgentContains("Android") ? new Md : n.userAgentContains("Linux") ? new Nd : new Od
    };
    La.prototype = {
        isLowEndDevice: function() {
            return !1
        },
        get_platformType: function() {
            return this._platformType
        },
        get_platformVersion: function() {
            return this._platformVersion
        },
        __class__: La,
        __properties__: {
            get_platformVersion: "get_platformVersion",
            get_platformType: "get_platformType"
        }
    };
    var Md = function() {
        this._platformType = "Android";
        this._platformVersion = parseFloat(E.substr(n.get_ua(), n.get_ua().indexOf("Android") + 8, 3))
    };
    g["com.cmm.common.utils.browserDetect.AndroidPlatform"] = Md;
    Md.__name__ = "com,cmm,common,utils,browserDetect,AndroidPlatform".split(",");
    Md.__super__ = La;
    Md.prototype = k(La.prototype, {
        isLowEndDevice: function() {
            return 5 > this._platformVersion
        },
        __class__: Md
    });
    var n = function() {};
    g["com.cmm.common.utils.browserDetect.BrowserDetect"] = n;
    n.__name__ = "com,cmm,common,utils,browserDetect,BrowserDetect".split(",");
    n.__properties__ = {
        get_isWebview: "get_isWebview",
        get_isStandalone: "get_isStandalone",
        get_isMobile: "get_isMobile",
        get_platformVersion: "get_platformVersion",
        get_platformType: "get_platformType",
        get_platform: "get_platform",
        get_browserVersion: "get_browserVersion",
        get_browserType: "get_browserType",
        get_browser: "get_browser",
        get_ua: "get_ua",
        get_browserJson: "get_browserJson"
    };
    n.isBrowserSupported = function() {
        return n.allAllowed() ? !0 : n.validBrowserAndPlatform()
    };
    n.allAllowed = function() {
        return !0
    };
    n.validBrowserAndPlatform = function() {
        var a = !1,
            b = !1;
        if (n.get_isStandalone())
            for (var a = !0, c = 0, d = n.get_browserJson().standalones; c < d.length;) {
                var e = d[c];
                ++c;
                if (n.get_platformType() == e.type && n.get_platformVersion() >= e.minVersion) {
                    b = !0;
                    break
                }
            } else {
                d = 0;
                for (e = n.get_browserJson().browsers; d < e.length;)
                    if (c = e[d], ++d, n.get_browserType() == c.type) {
                        if (n.get_browserVersion() >= c.minVersion) {
                            a = !0;
                            d = 0;
                            for (c = c.platforms; d < c.length;)
                                if (e = c[d], ++d, n.get_platformType() == e.type)
                                    if (null == e.minVersion) {
                                        b = !0;
                                        break
                                    } else if (n.get_platformVersion() >= e.minVersion) {
                                b = !0;
                                break
                            }
                            break
                        }
                        break
                    }
            }
        return a ? b : !1
    };
    n.userAgentContains = function(a) {
        return -1 < n.get_ua().indexOf(a)
    };
    n.allowAudio = function() {
        return n.get_isMobile() && ("MSIE" == n.get_browserType() || "rv" == n.get_browserType()) ? !1 : !0
    };
    n.isLowEnd = function() {
        return n.get_platform().isLowEndDevice()
    };
    n.get_browserJson = function() {
        null == n._browserJson && (n._browserJson = l.getJSON("config", "supported_browsers.json"));
        return n._browserJson
    };
    n.get_ua = function() {
        null == n._ua && (n._ua = window.navigator.userAgent);
        return n._ua
    };
    n.get_browser = function() {
        null == n._browser && (n._browser = ra.getBrowser());
        return n._browser
    };
    n.get_browserType = function() {
        return n.get_browser().get_browserType()
    };
    n.get_browserVersion = function() {
        return n.get_browser().get_browserVersion()
    };
    n.get_platform = function() {
        null == n._platform && (n._platform = La.getPlatform());
        return n._platform
    };
    n.get_platformType = function() {
        return n.get_platform().get_platformType()
    };
    n.get_platformVersion = function() {
        return n.get_platform().get_platformVersion()
    };
    n.get_isMobile = function() {
        return !q.get_touchEnabled() && !("Unknown" == n.get_platformType() || n.userAgentContains("Mobi") || "Silk" == n.get_browserType() || "Android" == n.get_platformType() || "iOS" == n.get_platformType()) ? "Mac" == n.get_platformType() : !0
    };
    n.get_isStandalone = function() {
        return !0 == window.navigator.standalone
    };
    n.get_isWebview = function() {
        return "Unknown" != n.get_platformType() ? "iOS" == n.get_platformType() && !n.get_isStandalone() ? !n.userAgentContains("Safari") : !1 : !0
    };
    var ra = function() {};
    g["com.cmm.common.utils.browserDetect.BrowserInfo"] = ra;
    ra.__name__ = "com,cmm,common,utils,browserDetect,BrowserInfo".split(",");
    ra.getBrowser = function() {
        return n.userAgentContains("Seamonkey") ? new Pd : n.userAgentContains("Firefox") ? new Qd : n.userAgentContains("Chrome") || n.userAgentContains("CriOS") ? new Rd : n.userAgentContains("Safari") ? new Sd : n.userAgentContains("MSIE") || n.userAgentContains("rv") ? new Td : n.userAgentContains("Opera") ? new Ud : n.userAgentContains("Silk") ? new Vd : n.userAgentContains("Kindle") ? new Wd : new Xd
    };
    ra.prototype = {
        getBrowserVersion: function(a, b) {
            null == b && (b = "/");
            var c = n.get_ua().indexOf(a),
                c = n.get_ua().indexOf(b, c),
                d = n.get_ua().indexOf(" ", c + 1);
            0 > d && (d = n.get_ua().length - 1);
            c = n.get_ua().substring(c + 1, d);
            d = c.indexOf("."); - 1 < d && (d = c.indexOf(".", d + 1), -1 < d && (c = c.substring(0, d)));
            return parseFloat(c)
        },
        get_browserType: function() {
            return this._browserType
        },
        get_browserVersion: function() {
            return this._browserVersion
        },
        __class__: ra,
        __properties__: {
            get_browserVersion: "get_browserVersion",
            get_browserType: "get_browserType"
        }
    };
    var Rd = function() {
        !n.userAgentContains("OPR") && !n.userAgentContains("CriOS") && (this._browserType = "Chrome", this._browserVersion = this.getBrowserVersion("Chrome"))
    };
    g["com.cmm.common.utils.browserDetect.Chrome"] = Rd;
    Rd.__name__ = "com,cmm,common,utils,browserDetect,Chrome".split(",");
    Rd.__super__ = ra;
    Rd.prototype = k(ra.prototype, {
        __class__: Rd
    });
    var Qd = function() {
        this._browserType = "Firefox";
        this._browserVersion = this.getBrowserVersion("Firefox")
    };
    g["com.cmm.common.utils.browserDetect.Firefox"] = Qd;
    Qd.__name__ = "com,cmm,common,utils,browserDetect,Firefox".split(",");
    Qd.__super__ = ra;
    Qd.prototype = k(ra.prototype, {
        __class__: Qd
    });
    var Kd = function() {
        this._platformType = "iOS";
        this._platformVersion = parseFloat(V.replace(E.substr(n.get_ua(), n.get_ua().indexOf("OS ") + 3, 3), "_", "."));
        this._deviceVersion = -1;
        n.userAgentContains("iPad") ? (this._device = "iPad", this._deviceVersion = 2 > window.devicePixelRatio ? 2 : 3) : n.userAgentContains("iPod") ? this._device = "iPod" : n.userAgentContains("iPhone") && (this._device = "iPhone");
        if ("iPhone" == this._device || "iPod" == this._device) 1 == window.devicePixelRatio ? this._deviceVersion = 3 : 2 == window.devicePixelRatio ? this._deviceVersion = window.screen.availWidth > window.screen.availHeight ? this.detectFromLandscape() : this.detectFromPortrait() : 3 == window.devicePixelRatio && (this._deviceVersion = 6)
    };
    g["com.cmm.common.utils.browserDetect.IOSPlatform"] = Kd;
    Kd.__name__ = "com,cmm,common,utils,browserDetect,IOSPlatform".split(",");
    Kd.__super__ = La;
    Kd.prototype = k(La.prototype, {
        detectFromLandscape: function() {
            var a = window.screen.availWidth;
            if (320 == window.screen.availHeight) {
                if (480 > a) return 3;
                if (480 == a) return 4;
                if (568 == a) return 5
            }
            return 6
        },
        detectFromPortrait: function() {
            var a = window.screen.availHeight;
            return 480 > a ? 3 : 480 == a ? 4 : 568 == a ? 5 : 6
        },
        isLowEndDevice: function() {
            return "iPod" == this._device || "iPhone" == this._device && 5 > this._deviceVersion ? !0 : "iPad" == this._device ? 3 > this._deviceVersion : !1
        },
        __class__: Kd
    });
    var Td = function() {
        n.userAgentContains("MSIE") ? (this._browserType = "MSIE", this._browserVersion = this.getBrowserVersion("MSIE", " ")) : n.userAgentContains("rv") && (this._browserType = "rv", this._browserVersion = this.getBrowserVersion("rv", ":"))
    };
    g["com.cmm.common.utils.browserDetect.InternetExplorer"] = Td;
    Td.__name__ = "com,cmm,common,utils,browserDetect,InternetExplorer".split(",");
    Td.__super__ = ra;
    Td.prototype = k(ra.prototype, {
        __class__: Td
    });
    var Wd = function() {
        this._browserType = "Kindle";
        this._browserVersion = this.getBrowserVersion("Kindle")
    };
    g["com.cmm.common.utils.browserDetect.KindleBrowser"] = Wd;
    Wd.__name__ = "com,cmm,common,utils,browserDetect,KindleBrowser".split(",");
    Wd.__super__ = ra;
    Wd.prototype = k(ra.prototype, {
        __class__: Wd
    });
    var Nd = function() {
        this._platformType = "Linux";
        this._platformVersion = -1
    };
    g["com.cmm.common.utils.browserDetect.LinuxPlatform"] = Nd;
    Nd.__name__ = "com,cmm,common,utils,browserDetect,LinuxPlatform".split(",");
    Nd.__super__ = La;
    Nd.prototype = k(La.prototype, {
        __class__: Nd
    });
    var Ld = function() {
        this._platformType = "Mac";
        this._platformVersion = -1
    };
    g["com.cmm.common.utils.browserDetect.MacPlatform"] = Ld;
    Ld.__name__ = "com,cmm,common,utils,browserDetect,MacPlatform".split(",");
    Ld.__super__ = La;
    Ld.prototype = k(La.prototype, {
        __class__: Ld
    });
    var Ud = function() {
        this._browserType = "Opera";
        this._browserVersion = this.getBrowserVersion("Version")
    };
    g["com.cmm.common.utils.browserDetect.Opera"] = Ud;
    Ud.__name__ = "com,cmm,common,utils,browserDetect,Opera".split(",");
    Ud.__super__ = ra;
    Ud.prototype = k(ra.prototype, {
        __class__: Ud
    });
    var Sd = function() {
        !n.userAgentContains("CriOS") && !n.userAgentContains("OPR") && (this._browserType = "Safari", this._browserVersion = this.getBrowserVersion("Version"))
    };
    g["com.cmm.common.utils.browserDetect.Safari"] = Sd;
    Sd.__name__ = "com,cmm,common,utils,browserDetect,Safari".split(",");
    Sd.__super__ = ra;
    Sd.prototype = k(ra.prototype, {
        __class__: Sd
    });
    var Pd = function() {
        this._browserType = "Seamonkey";
        this._browserVersion = this.getBrowserVersion("Seamonkey")
    };
    g["com.cmm.common.utils.browserDetect.Seamonkey"] = Pd;
    Pd.__name__ = "com,cmm,common,utils,browserDetect,Seamonkey".split(",");
    Pd.__super__ = ra;
    Pd.prototype = k(ra.prototype, {
        __class__: Pd
    });
    var Vd = function() {
        this._browserType = "Silk";
        this._browserVersion = this.getBrowserVersion("Silk")
    };
    g["com.cmm.common.utils.browserDetect.Silk"] = Vd;
    Vd.__name__ = "com,cmm,common,utils,browserDetect,Silk".split(",");
    Vd.__super__ = ra;
    Vd.prototype = k(ra.prototype, {
        __class__: Vd
    });
    var Xd = function() {
        this._browserType = "Unknown";
        this._browserVersion = -1
    };
    g["com.cmm.common.utils.browserDetect.UnknownBrowser"] = Xd;
    Xd.__name__ = "com,cmm,common,utils,browserDetect,UnknownBrowser".split(",");
    Xd.__super__ = ra;
    Xd.prototype = k(ra.prototype, {
        __class__: Xd
    });
    var Od = function() {
        this._platformType = "Unknown";
        this._platformVersion = -1;
        this._device = "Unknown";
        this._deviceVersion = -1
    };
    g["com.cmm.common.utils.browserDetect.UnknownPlatform"] = Od;
    Od.__name__ = "com,cmm,common,utils,browserDetect,UnknownPlatform".split(",");
    Od.__super__ = La;
    Od.prototype = k(La.prototype, {
        __class__: Od
    });
    var Jd = function() {
        this._platformType = "Windows";
        this._platformVersion = -1
    };
    g["com.cmm.common.utils.browserDetect.WindowsPlatform"] = Jd;
    Jd.__name__ = "com,cmm,common,utils,browserDetect,WindowsPlatform".split(",");
    Jd.__super__ = La;
    Jd.prototype = k(La.prototype, {
        __class__: Jd
    });
    var qd = function() {
        O.call(this)
    };
    g["com.cmm.nls.NLS"] = qd;
    qd.__name__ = ["com", "cmm", "nls", "NLS"];
    qd.__super__ = Kb;
    qd.prototype = k(Kb.prototype, {
        initGameLayers: function() {
            n.get_isMobile() && (l.loadMobileAssets = !0, A.ASSET_SCALE = n.isLowEnd() ? 0.5 : 0.7);
            Kb.prototype.initGameLayers.call(this)
        },
        loadPrimary: function() {
            this.PRIMARY_ID += ",titleandintro";
            Kb.prototype.loadPrimary.call(this)
        },
        init: function() {
            Kb.prototype.init.call(this);
            null == p._platform.getStorage().get("NLS.AWNING") && p._platform.getStorage().set("NLS.AWNING", "awning1");
            null == p._platform.getStorage().get("NLS.TABLE") && p._platform.getStorage().set("NLS.TABLE", "table1");
            null == p._platform.getStorage().get("NLS.WHEEL") && p._platform.getStorage().set("NLS.WHEEL", "wheel1");
            null == p._platform.getStorage().get("NLS.GLASS") && p._platform.getStorage().set("NLS.GLASS", "glass1");
            Q.field(window, "unlockAll") ? q.set("unlockedAll", !0) : q.set("unlockedAll", !1);
            for (var a = 4; 10 > a;) {
                var b = a++;
                null == p._platform.getStorage().get("NLS.UNLOCKED_AWNING" + b) && p._platform.getStorage().set("NLS.UNLOCKED_AWNING" + b, !1);
                null == p._platform.getStorage().get("NLS.UNLOCKED_TABLE" + b) && p._platform.getStorage().set("NLS.UNLOCKED_TABLE" + b, !1);
                null == p._platform.getStorage().get("NLS.UNLOCKED_WHEEL" + b) && p._platform.getStorage().set("NLS.UNLOCKED_WHEEL" + b, !1);
                null == p._platform.getStorage().get("NLS.UNLOCKED_GLASS" +
                    b) && p._platform.getStorage().set("NLS.UNLOCKED_GLASS" + b, !1)
            }
            null == p._platform.getStorage().get("NLS.DESIGNER_TUTORIAL_COMPLETE") && p._platform.getStorage().set("NLS.DESIGNER_TUTORIAL_COMPLETE", !1);
            null == p._platform.getStorage().get("NLS.LEMONADE_TUTORIAL_COMPLETE") && p._platform.getStorage().set("NLS.LEMONADE_TUTORIAL_COMPLETE", !1);
            null == p._platform.getStorage().get("NLS.TICKETS_TUTORIAL_COMPLETE") && p._platform.getStorage().set("NLS.TICKETS_TUTORIAL_COMPLETE", !1);
            (new Fe(new Yd)).startMachine()
        },
        __class__: qd
    });
    var Zd = function() {
        Ia.call(this)
    };
    g["com.cmm.nls.app.EndGameState"] = Zd;
    Zd.__name__ = ["com", "cmm", "nls", "app", "EndGameState"];
    Zd.__super__ = Ia;
    Zd.prototype = k(Ia.prototype, {
        enterState: function() {
            Ia.prototype.enterState.call(this);
            this.nextState = "GameState";
            this.stateComplete()
        },
        __class__: Zd
    });
    var $d = function() {
        Ia.call(this)
    };
    g["com.cmm.nls.app.GameState"] = $d;
    $d.__name__ = ["com", "cmm", "nls", "app", "GameState"];
    $d.__super__ = Ia;
    $d.prototype = k(Ia.prototype, {
        addKeyListeners: function() {
            this._upConnex = p._platform.getKeyboard().up.connect(d(this, this.onKeyUp))
        },
        enterState: function() {
            Ia.prototype.enterState.call(this);
            this.addKeyListeners();
            e.addEventListener("com.cmm.nls.events.dressUpActivityComplete", d(this, this.dressUpActivityComplete));
            e.addEventListener("com.cmm.nls.events.recipeSelectComplete", d(this, this.recipeSelectComplete));
            e.addEventListener("com.cmm.nls.events.lemonadeActivityComplete", d(this, this.lemonadeActivityComplete));
            e.addEventListener("com.cmm.nls.events.customersComplete", d(this, this.customersComplete));
            e.addEventListener("com.cmm.nls.events.ticketsActivityComplete", d(this, this.ticketsComplete));
            e.addEventListener("com.cmm.nls.events.endScreenPlayAgainTapped", d(this, this.playAgainTapped));
            e.addEventListener("com.cmm.nls.events.endScreenComplete", d(this, this.endScreenComplete));
            this.loadDesigner()
        },
        reset: function() {
            this.removeDesigner();
            this.removeRecipeSelect();
            this.removeLemonade();
            this.removeCustomers();
            this.removeTickets();
            this.removeEndScreen();
            i.stop("ambientLoop")
        },
        removeDesigner: function() {
            null != this._designer && (O.instance.get_gameLayer().removeChild(this._designer), this._designer.dispose(), this._designer = null)
        },
        removeRecipeSelect: function() {
            null != this._recipeSelect && (O.instance.get_gameLayer().removeChild(this._recipeSelect), this._recipeSelect.dispose(), this._recipeSelect = null)
        },
        removeLemonade: function() {
            null != this._lemonade && (O.instance.get_gameLayer().removeChild(this._lemonade), this._lemonade.dispose(), this._lemonade = null)
        },
        removeCustomers: function() {
            null != this._customers && (O.instance.get_gameLayer().removeChild(this._customers), this._customers.dispose(), this._customers = null)
        },
        removeTickets: function() {
            null != this._tickets && (O.instance.get_gameLayer().removeChild(this._tickets), this._tickets.dispose(), this._tickets = null)
        },
        removeEndScreen: function() {
            null != this._endScreen && (O.instance.get_gameLayer().removeChild(this._endScreen), this._endScreen.dispose(), this._endScreen = null)
        },
        loadDesigner: function() {
            this.reset();
            if (l.isLoaded("designer")) this.designerLoaded("");
            else {
                if (null == l.loadMC) {
                    var a = L.createMovieClip("mc_loader_main");
                    l.set_loadMC(a)
                }
                l.loadBatch("designer", d(this, this.designerLoaded))
            }
        },
        designerLoaded: function() {
            l.disposeLoader();
            l.disposeAssetPack("serveandsell");
            this._designer = L.createMovieClip("mc_designer");
            O.instance.get_gameLayer().addChild(this._designer);
            i.isSoundFilePlaying("designerLoop") || i.play("designerLoop")
        },
        loadRecipeSelect: function() {
            this.reset();
            if (l.isLoaded("game")) this.recipeSelectLoaded("");
            else {
                if (null == l.loadMC) {
                    var a = L.createMovieClip("mc_loader_main");
                    l.set_loadMC(a)
                }
                l.loadBatch("game", d(this, this.recipeSelectLoaded))
            }
        },
        recipeSelectLoaded: function() {
            l.disposeLoader();
            l.disposeAssetPack("designer");
            this._recipeSelect = L.createMovieClip("mc_recipeSelect");
            O.instance.get_gameLayer().addChild(this._recipeSelect);
            i.isSoundFilePlaying("gameLoop") || i.play("gameLoop")
        },
        loadLemonade: function() {
            this.reset();
            if (l.isLoaded("game")) this.lemonadeLoaded("");
            else {
                if (null == l.loadMC) {
                    var a = L.createMovieClip("mc_loader_main");
                    l.set_loadMC(a)
                }
                l.loadBatch("game", d(this, this.lemonadeLoaded))
            }
        },
        lemonadeLoaded: function() {
            l.disposeLoader();
            this._lemonade = L.createMovieClip("mc_lemonade");
            O.instance.get_gameLayer().addChild(this._lemonade);
            i.isSoundFilePlaying("gameLoop") || i.play("gameLoop")
        },
        loadCustomers: function() {
            this.reset();
            i.stopChannel("music");
            if (l.isLoaded("serveandsell")) this.customersLoaded("");
            else {
                if (null == l.loadMC) {
                    var a = L.createMovieClip("mc_loader_main");
                    l.set_loadMC(a)
                }
                l.loadBatch("serveandsell", d(this, this.customersLoaded))
            }
        },
        customersLoaded: function() {
            l.disposeLoader();
            l.disposeAssetPack("game");
            this._customers = L.createMovieClip("mc_customers");
            O.instance.get_gameLayer().addChild(this._customers);
            i.isSoundFilePlaying("ambientLoop") || i.play("ambientLoop")
        },
        loadTickets: function() {
            this.reset();
            if (l.isLoaded("serveandsell")) this.ticketsLoaded("");
            else {
                if (null == l.loadMC) {
                    var a = L.createMovieClip("mc_loader_main");
                    l.set_loadMC(a)
                }
                l.loadBatch("serveandsell", d(this, this.ticketsLoaded))
            }
        },
        ticketsLoaded: function() {
            l.disposeLoader();
            this._tickets = L.createMovieClip("mc_tickets");
            O.instance.get_gameLayer().addChild(this._tickets);
            i.isSoundFilePlaying("ticketsLoop") || i.play("ticketsLoop")
        },
        loadEndScreen: function() {
            this.reset();
            if (l.isLoaded("serveandsell")) this.endScreenLoaded("");
            else {
                if (null == l.loadMC) {
                    var a = L.createMovieClip("mc_loader_main");
                    l.set_loadMC(a)
                }
                l.loadBatch("serveandsell", d(this, this.endScreenLoaded))
            }
        },
        endScreenLoaded: function() {
            l.disposeLoader();
            this._endScreen = L.createMovieClip("mc_endscreen");
            O.instance.get_gameLayer().addChild(this._endScreen);
            i.isSoundFilePlaying("gameLoop") || i.play("gameLoop")
        },
        stateComplete: function() {
            i.stopChannel("vo");
            null != this._upConnex && (this._upConnex.dispose(), this._upConnex = null);
            this.reset();
            F.currentRecipe = null;
            e.removeEventListener("com.cmm.nls.events.recipeSelectComplete", d(this, this.recipeSelectComplete));
            e.removeEventListener("com.cmm.nls.events.dressUpActivityComplete", d(this, this.dressUpActivityComplete));
            e.removeEventListener("com.cmm.nls.events.lemonadeActivityComplete", d(this, this.lemonadeActivityComplete));
            e.removeEventListener("com.cmm.nls.events.customersComplete", d(this, this.customersComplete));
            e.removeEventListener("com.cmm.nls.events.ticketsActivityComplete", d(this, this.ticketsComplete));
            e.removeEventListener("com.cmm.nls.events.endScreenPlayAgainTapped", d(this, this.playAgainTapped));
            e.removeEventListener("com.cmm.nls.events.endScreenComplete", d(this, this.endScreenComplete));
            i.stopChannel("music");
            l.disposeAssetPack("designer");
            l.disposeAssetPack("game");
            l.disposeAssetPack("serveandsell");
            Ia.prototype.stateComplete.call(this)
        },
        dressUpActivityComplete: function() {
            n.isLowEnd() && l.disposeAssetPack("designer");
            this.loadRecipeSelect()
        },
        recipeSelectComplete: function() {
            this.loadLemonade()
        },
        lemonadeActivityComplete: function() {
            n.isLowEnd() && l.disposeAssetPack("game");
            q.get("cutScenesWithVoiceOverAudio", !0) ? this.loadCustomers() : this.loadTickets()
        },
        customersComplete: function() {
            this.loadTickets()
        },
        ticketsComplete: function() {
            this.loadEndScreen()
        },
        playAgainTapped: function() {
            da.submitPlayAgainEvent()
        },
        endScreenComplete: function() {
            n.isLowEnd() && l.disposeAssetPack("serveandsell");
            this.loadDesigner()
        },
        onKeyUp: function() {},
        __class__: $d
    });
    var Ab = function(a, b) {
        j.call(this, a, b)
    };
    g["com.cmm.nls.app.HighlightUIElement"] = Ab;
    Ab.__name__ = ["com", "cmm", "nls", "app", "HighlightUIElement"];
    Ab.__interfaces__ = [Ed];
    Ab.__super__ = j;
    Ab.prototype = k(j.prototype, {
        get_name: function() {
            return "HighlightUIElement_69"
        },
        onAdded: function() {
            j.prototype.onAdded.call(this);
            this._hl = this._ownerSprite.getChildByName("hl");
            null != this._hl && (this.highlightOff(), this._audioHL = new yd(this.params, this))
        },
        highlightOn: function() {
            this._hl.set_visible(!0)
        },
        highlightOff: function() {
            this._hl.set_visible(!1)
        },
        dispose: function() {
            null != this._audioHL && this._audioHL.dispose();
            j.prototype.dispose.call(this)
        },
        __class__: Ab
    });
    var Ac = function(a, b) {
        j.call(this, a, b)
    };
    g["com.cmm.nls.app.IntroScene"] = Ac;
    Ac.__name__ = ["com", "cmm", "nls", "app", "IntroScene"];
    Ac.__super__ = j;
    Ac.prototype = k(j.prototype, {
        get_name: function() {
            return "IntroScene_68"
        },
        onAdded: function() {
            j.prototype.onAdded.call(this);
            this._signalConnection.connect1(this._ownerMC.get_pointerDown(), d(this, this.onPointerClick));
            this._actionQueue = new G([new Fa(18.5), new R("titleSting")]);
            e.addEventListener("com.cmm.nls.events.skip", d(this, this.skip))
        },
        onPointerClick: function() {},
        disposeActionQueue: function() {
            null != this._actionQueue && (this._actionQueue.stop(), this._actionQueue = null)
        },
        dispose: function() {
            this.disposeActionQueue();
            e.removeEventListener("com.cmm.nls.events.skip", d(this, this.skip));
            j.prototype.dispose.call(this)
        },
        skip: function() {
            null != this._ownerMC && this._ownerMC.stop();
            this.disposeActionQueue()
        },
        __class__: Ac
    });
    var Yd = function() {
        this.statePackagePath = "";
        this.statePackagePath = "com.cmm.nls.app";
        this.stateClassList = [ae, $d, Zd]
    };
    g["com.cmm.nls.app.MainStateList"] = Yd;
    Yd.__name__ = ["com", "cmm", "nls", "app", "MainStateList"];
    Yd.__super__ = sd;
    Yd.prototype = k(sd.prototype, {
        __class__: Yd
    });
    var ae = function() {
        Ia.call(this)
    };
    g["com.cmm.nls.app.PregameState"] = ae;
    ae.__name__ = ["com", "cmm", "nls", "app", "PregameState"];
    ae.__super__ = Ia;
    ae.prototype = k(Ia.prototype, {
        addKeyListeners: function() {
            this._upConnex = p._platform.getKeyboard().up.connect(d(this, this.onKeyUp))
        },
        enterState: function() {
            Ia.prototype.enterState.call(this);
            da.onTitleStart();
            this.addKeyListeners();
            var a = ["mc_titleScene", "mc_introScene"];
            !1 == q.get("cutScenesWithVoiceOverAudio", !0) && (a = ["mc_titleScene"]);
            xa.playSceneQueue(a, d(this, this.pregameComplete), d(this, this.titleComplete));
            n.isLowEnd() || (l.set_loadMC(null), l.loadBatch("designer", d(this, this.designerPreloaded)));
            e.addEventListener("com.cmm.nls.events.skip", d(this, this.skip))
        },
        designerPreloaded: function() {},
        pregameComplete: function() {
            null != this._upConnex && (this._upConnex.dispose(), this._upConnex = null);
            xa.disposeAll();
            e.removeEventListener("com.cmm.nls.events.skip", d(this, this.skip));
            this.stateComplete()
        },
        titleComplete: function(a) {
            "mc_titleScene" == a && (da.onTitleEnd(), i.play("ambientLoop"))
        },
        stateComplete: function() {
            n.isLowEnd() || l.isLoaded("designer") ? (l.disposeAssetPack("titleandintro"), Ia.prototype.stateComplete.call(this)) : ca.delay(d(this, this.stateComplete), 100)
        },
        skip: function() {
            xa.pause();
            this.checkSkipVO()
        },
        checkSkipVO: function() {
            i.isSoundFilePlaying("skipVO") ? ca.delay(d(this, this.checkSkipVO), 100) : this.pregameComplete()
        },
        onKeyUp: function() {},
        __class__: ae
    });
    var oc = function(a, b) {
        x.call(this, a, b)
    };
    g["com.cmm.nls.app.TitlePlayBtn"] = oc;
    oc.__name__ = ["com", "cmm", "nls", "app", "TitlePlayBtn"];
    oc.__super__ = sb;
    oc.prototype = k(sb.prototype, {
        onPointerClick: function(a) {
            sb.prototype.onPointerClick.call(this, a);
            this._ownerBtn.set_pointerEnabled(!1);
            this._ownerBtn.set_visible(!1);
            w.destroy();
            i.play("titleOutroVO", d(this, this.afterVOAction));
            e.dispatchEvent(new r("com.cmm.nls.events.titlePlay"))
        },
        afterVOAction: function() {
            i.isSoundFilePlaying("titleSting") ? ca.delay(d(this, this.afterVOAction), 100) : sb.prototype.performPlayAction.call(this)
        },
        performPlayAction: function() {},
        __class__: oc
    });
    var wc = function(a, b) {
        j.call(this, a, b)
    };
    g["com.cmm.nls.customers.Customer"] = wc;
    wc.__name__ = ["com", "cmm", "nls", "customers", "Customer"];
    wc.__super__ = j;
    wc.prototype = k(j.prototype, {
        get_name: function() {
            return "Customer_66"
        },
        onAdded: function() {
            j.prototype.onAdded.call(this);
            e.addEventListener("com.cmm.nls.events.customersSetCustomers", d(this, this.setCustomers));
            e.addEventListener("com.cmm.nls.events.customersComplete", d(this, this.customersComplete));
            e.addEventListener("com.cmm.nls.events.endScreenComplete", d(this, this.endScreenComplete))
        },
        dispose: function() {
            e.removeEventListener("com.cmm.nls.events.customersSetCustomers", d(this, this.setCustomers));
            e.removeEventListener("com.cmm.nls.events.customersComplete", d(this, this.customersComplete));
            e.removeEventListener("com.cmm.nls.events.endScreenComplete", d(this, this.endScreenComplete));
            j.prototype.dispose.call(this)
        },
        setCustomers: function() {
            for (var a = q.get("customers", "milliPickle"), b = 0, c = this._ownerMC.getChildren(); b < c.length;) {
                var d = c[b];
                ++b;
                var e = d.get_instanceName();
                d.set_visible(e == a)
            }
        },
        customersComplete: function() {
            this.dispose()
        },
        endScreenComplete: function() {
            this.dispose()
        },
        __class__: wc
    });
    var xc = function(a, b) {
        j.call(this, a, b)
    };
    g["com.cmm.nls.customers.CustomerPitcher"] = xc;
    xc.__name__ = ["com", "cmm", "nls", "customers", "CustomerPitcher"];
    xc.__super__ = j;
    xc.prototype = k(j.prototype, {
        get_name: function() {
            return "CustomerPitcher_65"
        },
        onAdded: function() {
            j.prototype.onAdded.call(this);
            this._ownerMC.gotoAndStop(1);
            this._name = q.get("lemonadeName", "lavender");
            for (var a = 0, b = this._ownerMC.getChildren(); a < b.length;) {
                var c = b[a];
                ++a;
                var h = c.get_instanceName();
                "pitcher" != h && c.set_visible(h == this._name)
            }
            this._signalConnection.connect1(this._ownerMC.get_pointerDown(), d(this, this.onPointerClick));
            e.addEventListener("com.cmm.nls.events.customersComplete", d(this, this.complete));
            e.addEventListener("com.cmm.nls.events.endScreenComplete", d(this, this.complete))
        },
        dispose: function() {
            e.removeEventListener("com.cmm.nls.events.customersComplete", d(this, this.complete));
            e.removeEventListener("com.cmm.nls.events.endScreenComplete", d(this, this.complete));
            j.prototype.dispose.call(this)
        },
        onPointerClick: function() {
            e.dispatchEvent(new r("com.cmm.nls.events.customersPitcherTapped"))
        },
        complete: function() {
            this.dispose()
        },
        __class__: xc
    });
    var yc = function(a, b) {
        j.call(this, a, b)
    };
    g["com.cmm.nls.customers.CustomerPitcherAnim"] = yc;
    yc.__name__ = ["com", "cmm", "nls", "customers", "CustomerPitcherAnim"];
    yc.__super__ = j;
    yc.prototype = k(j.prototype, {
        get_name: function() {
            return "CustomerPitcherAnim_64"
        },
        onAdded: function() {
            j.prototype.onAdded.call(this);
            this._ownerMC.gotoAndStop(1);
            this._ownerMC.get_instanceName() == q.get("lemonadeName", "lavender") && e.addEventListener("com.cmm.nls.events.customersPitcherTapped", d(this, this.pitcherTapped));
            e.addEventListener("com.cmm.nls.events.customersComplete", d(this, this.complete));
            e.addEventListener("com.cmm.nls.events.endScreenComplete", d(this, this.complete))
        },
        dispose: function() {
            e.removeEventListener("com.cmm.nls.events.customersPitcherTapped", d(this, this.pitcherTapped));
            e.removeEventListener("com.cmm.nls.events.customersComplete", d(this, this.complete));
            e.removeEventListener("com.cmm.nls.events.endScreenComplete", d(this, this.complete));
            j.prototype.dispose.call(this)
        },
        pitcherTapped: function() {
            "anim" != this._ownerMC.get_currentLabel() && (i.playSequential("pitcherFun"), this._ownerMC.playAnimationSequence("anim", d(this, this.reset)))
        },
        reset: function() {
            this._ownerMC.gotoAndStop(1)
        },
        complete: function() {
            this.dispose()
        },
        __class__: yc
    });
    var ub = function(a, b) {
        j.call(this, a, b)
    };
    g["com.cmm.nls.customers.Customers"] = ub;
    ub.__name__ = ["com", "cmm", "nls", "customers", "Customers"];
    ub.__super__ = j;
    ub.prototype = k(j.prototype, {
        get_name: function() {
            return "Customers_63"
        },
        onAdded: function() {
            j.prototype.onAdded.call(this);
            this._ownerMC.gotoAndStop(1);
            this._signalConnection.connect1(this._ownerMC.get_pointerDown(), d(this, this.onPointerClick));
            null != p._platform.getStorage().get("NLS.CUSTOMERS_ARRAY") && (ub._randomCustomersArray = p._platform.getStorage().get("NLS.CUSTOMERS_ARRAY"));
            var a = ub._randomCustomersArray.getNextItem();
            q.set("customers", a);
            p._platform.getStorage().set("NLS.CUSTOMERS_ARRAY", ub._randomCustomersArray);
            var b = q.get("voiceOverAudio", !0),
                c = b ? 0.5 : 5;
            this._actionQueue = new G([new s("com.cmm.nls.events.customersSetCustomers", a), new Fa(c), new y(b, new v(this._ownerMC, "start")), new y(b, new v(this._ownerMC, a)), new y(b, new v(this._ownerMC, "finish")), new s("com.cmm.nls.events.customersComplete"), new fa(d(this, this.dispose))])
        },
        dispose: function() {
            i.stopChannel("vo");
            null != this._actionQueue && (this._actionQueue.stop(), this._actionQueue = null);
            j.prototype.dispose.call(this)
        },
        onPointerClick: function() {},
        __class__: ub
    });
    var Ta = function(a, b) {
        j.call(this, a, b)
    };
    g["com.cmm.nls.dressUp.DressUpActivity"] = Ta;
    Ta.__name__ = ["com", "cmm", "nls", "dressUp", "DressUpActivity"];
    Ta.__super__ = j;
    Ta.prototype = k(j.prototype, {
        get_name: function() {
            return "DressUpActivity_62"
        },
        onAdded: function() {
            j.prototype.onAdded.call(this);
            q.set("tabChangedByPlayer", !1);
            this._ownerMC.gotoAndStop(1);
            this.addEventListeners();
            e.addEventListener("com.cmm.nls.events.dressUpTabSelected", d(this, this.tabSelected));
            e.addEventListener("com.cmm.nls.events.dressUpItemSelected", d(this, this.itemSelected));
            e.addEventListener("com.cmm.nls.events.dressUpItemDragging", d(this, this.itemDragging));
            e.addEventListener("com.cmm.nls.events.dressUpItemDropped", d(this, this.itemDropped));
            Ta.introComplete = !1;
            this.isTutorialActive = !0;
            this._actionQueue = !0 == q.get("firstPlayDesigner", !0) ? new G([new s("com.cmm.nls.events.dressUpIntro", "intro"), new hb("com.cmm.nls.events.dressUpIntroComplete"), new fa(d(this, this.showTutorial)), new s("com.cmm.nls.events.dressUpTutorialStart", !1)]) : new G([new s("com.cmm.nls.events.dressUpIntro", "welcomeback"), new hb("com.cmm.nls.events.dressUpIntroComplete"), new fa(d(this, this.setTutorialInactive)), new fa(d(this, this.setTimeout))]);
            this._signalConnection.connect1(this._ownerMC.get_pointerDown(), d(this, this.onPointerClick))
        },
        onRemoved: function() {
            this.removeEventListeners();
            e.removeEventListener("com.cmm.nls.events.dressUpTabSelected", d(this, this.tabSelected));
            e.removeEventListener("com.cmm.nls.events.dressUpItemSelected", d(this, this.itemSelected));
            e.removeEventListener("com.cmm.nls.events.dressUpItemDragging", d(this, this.itemDragging));
            e.removeEventListener("com.cmm.nls.events.dressUpItemDropped", d(this, this.itemDropped));
            j.prototype.onRemoved.call(this)
        },
        addEventListeners: function() {
            e.addEventListener("com.cmm.nls.events.skip", d(this, this.skipVO));
            e.addEventListener("com.cmm.nls.events.dressUpIntroComplete", d(this, this.onIntroComplete));
            e.addEventListener("com.cmm.nls.events.dressUpTutorialStart", d(this, this.onTutorialStart));
            e.addEventListener("com.cmm.nls.events.dressUpTutorialComplete", d(this, this.onTutorialComplete));
            e.addEventListener("com.cmm.nls.events.dressUpActivityComplete", d(this, this.activityComplete))
        },
        onPointerClick: function() {},
        skipVO: function() {
            Ta.introComplete = !0;
            this.isTutorialActive || this.checkSkipVO()
        },
        checkSkipVO: function() {
            i.isSoundFilePlaying("skipVO") ? ca.delay(d(this, this.checkSkipVO), 100) : (this.disposeActionQueue(), this.resetVO())
        },
        onIntroComplete: function() {
            Ta.introComplete = !0
        },
        showTutorial: function() {
            this._tutorial = L.createMovieClip("mc_tutorial_designer");
            O.instance.get_animLayer().addChild(this._tutorial)
        },
        onTutorialStart: function() {
            this.isTutorialActive = !0
        },
        onTutorialComplete: function() {
            this.isTutorialActive = !1;
            this.disposeTutorial();
            this.setTimeout()
        },
        setTutorialInactive: function() {
            this.isTutorialActive = !1
        },
        setTimeout: function() {
            this.isTutorialActive || (Ta.introComplete = !0, w.destroy(), w.addPrompt(10, d(this, this.playTimeout)), w.start())
        },
        playTimeout: function() {
            w.destroy();
            this.disposeActionQueue();
            this._actionQueue = new G([new fa(d(this, this.showTutorial)), new s("com.cmm.nls.events.dressUpTutorialStart", !0)])
        },
        tabSelected: function(a) {
            this.isTutorialActive || (q.get("firstPlayDesigner", !0), i.play("tab" + aa.string(a.data) + "Btn"), q.set("tabChangedByPlayer", !0), this.setTimeout())
        },
        resetVO: function() {
            i.stopChannel("vo");
            this.disposeActionQueue();
            this.setTimeout()
        },
        disposeActionQueue: function() {
            null != this._actionQueue && (this._actionQueue.stop(), this._actionQueue = null)
        },
        disposeTutorial: function() {
            null != this._tutorial && (this._tutorial.dispose(), this._tutorial = null)
        },
        itemSelected: function(a) {
            null != a.data && (this._currentType = a.data);
            !1 == q.get("firstPlayDesigner", !0) && this.resetVO()
        },
        itemDragging: function() {},
        itemDropped: function(a) {
            null != this._currentType && !1 == q.get("firstPlayDesigner", !0) && this.resetVO();
            e.dispatchEvent(new r("com.cmm.nls.events.dressUpItemDroppedValid", a.data))
        },
        removeEventListeners: function() {
            e.removeEventListener("com.cmm.nls.events.skip", d(this, this.skipVO));
            e.removeEventListener("com.cmm.nls.events.dressUpIntroComplete", d(this, this.onIntroComplete));
            e.removeEventListener("com.cmm.nls.events.dressUpTutorialStart", d(this, this.onTutorialStart));
            e.removeEventListener("com.cmm.nls.events.dressUpTutorialComplete", d(this, this.onTutorialComplete));
            e.removeEventListener("com.cmm.nls.events.dressUpActivityComplete", d(this, this.activityComplete))
        },
        activityComplete: function() {
            this.dispose()
        },
        dispose: function() {
            w.destroy();
            i.stopChannel("vo");
            q.set("firstPlayDesigner", !1);
            p._platform.getStorage().set("NLS.DESIGNER_TUTORIAL_COMPLETE", !0);
            this.disposeActionQueue();
            this.disposeTutorial();
            this.removeEventListeners();
            e.removeEventListener("com.cmm.nls.events.dressUpTabSelected", d(this, this.tabSelected));
            e.removeEventListener("com.cmm.nls.events.dressUpItemSelected", d(this, this.itemSelected));
            e.removeEventListener("com.cmm.nls.events.dressUpItemDragging", d(this, this.itemDragging));
            e.removeEventListener("com.cmm.nls.events.dressUpItemDropped", d(this, this.itemDropped));
            j.prototype.dispose.call(this)
        },
        __class__: Ta
    });
    var Rb = function(a, b) {
        j.call(this, a, b)
    };
    g["com.cmm.nls.dressUp.DressUpCharacter"] = Rb;
    Rb.__name__ = ["com", "cmm", "nls", "dressUp", "DressUpCharacter"];
    Rb.__super__ = j;
    Rb.prototype = k(j.prototype, {
        get_name: function() {
            return "DressUpCharacter_61"
        },
        onAdded: function() {
            j.prototype.onAdded.call(this);
            this._ownerMC.gotoAndStop(1);
            e.addEventListener("com.cmm.nls.events.skip", d(this, this.skip));
            e.addEventListener("com.cmm.nls.events.dressUpIntro", d(this, this.playIntro));
            e.addEventListener("com.cmm.nls.events.dressUpOutro", d(this, this.playOutro));
            e.addEventListener("com.cmm.nls.events.dressUpActivityComplete", d(this, this.activityComplete))
        },
        dispose: function() {
            this.disposeActionQueue();
            e.removeEventListener("com.cmm.nls.events.skip", d(this, this.skip));
            e.removeEventListener("com.cmm.nls.events.dressUpIntro", d(this, this.playIntro));
            e.removeEventListener("com.cmm.nls.events.dressUpOutro", d(this, this.playOutro));
            e.removeEventListener("com.cmm.nls.events.dressUpActivityComplete", d(this, this.activityComplete));
            j.prototype.dispose.call(this)
        },
        skip: function() {
            this.disposeActionQueue();
            "out" != this._ownerMC.get_currentLabel() && q.get("cutScenesWithVoiceOverAudio", !0) && q.get("voiceOverAudio", !0) && (this._actionQueue = new G([new v(this._ownerMC, "out")]))
        },
        playIntro: function(a) {
            var a = a.data,
                b = null,
                c = null,
                d = null;
            if ("welcomeback" == a && !1 == q.get("unlockedAll")) {
                for (var e = 0; !(b = Rb._randomUnlockItem.getNextItem(), ++e, !(12 > e && !0 == p._platform.getStorage().get("NLS.UNLOCKED_" + b.toUpperCase()))););
                12 == e ? b = null : (d = b.substring(0, b.length - 1), c = ib.convertToDressUpItemType(d))
            }
            e = q.get("cutScenesWithVoiceOverAudio", !0) && q.get("voiceOverAudio", !0);
            this.disposeActionQueue();
            this._actionQueue = new G([new y(e, new v(this._ownerMC, "in")), new y(e, new v(this._ownerMC, a)), new y(null != b, new s("com.cmm.nls.events.dressUpTabSelected", c)), new y(null != b, new s("com.cmm.nls.events.dressUpUnlockItem", b)), new y(null != b, new s("com.cmm.nls.events.dressUpScrollTo", b)), new y(null != b, new v(this._ownerMC, "new" + d)), new y(e, new v(this._ownerMC, "out")), new s("com.cmm.nls.events.dressUpIntroComplete", a)])
        },
        playOutro: function() {
            var a = q.get("cutScenesWithVoiceOverAudio", !0) && q.get("voiceOverAudio", !0);
            this.disposeActionQueue();
            this._actionQueue = new G([new y(a && "intro" != this._ownerMC.get_currentLabel(), new v(this._ownerMC, "in")), new R("designerSting", !a), new y(a, new v(this._ownerMC, "finish")), new s("com.cmm.nls.events.dressUpActivityComplete")])
        },
        disposeActionQueue: function() {
            null != this._actionQueue && (this._actionQueue.stop(), this._actionQueue = null)
        },
        activityComplete: function() {
            this.dispose()
        },
        __class__: Rb
    });
    var pa = function(a, b) {
        this._disabled = !1;
        j.call(this, a, b);
        this._type = ib.convertToDressUpItemType(b.type)
    };
    g["com.cmm.nls.dressUp.DressUpContainer"] = pa;
    pa.__name__ = ["com", "cmm", "nls", "dressUp", "DressUpContainer"];
    pa.disposeDressUpItemPointer = function() {
        null != pa.dressUpItemPointer && (pa.dressUpItemPointer.dispose(), pa.dressUpItemPointer = null)
    };
    pa.unlock = function() {
        pa._locked = !1
    };
    pa.__super__ = j;
    pa.prototype = k(j.prototype, {
        get_name: function() {
            return "DressUpContainer_60"
        },
        onAdded: function() {
            j.prototype.onAdded.call(this);
            e.addEventListener("com.cmm.nls.events.dressUpItemDroppedValid", d(this, this.onDressUpItemDroppedValid));
            e.addEventListener("com.cmm.nls.events.dressUpReset", d(this, this.reset));
            e.addEventListener("com.cmm.nls.events.dressUpHideTab", d(this, this.onHideTab));
            e.addEventListener("com.cmm.nls.events.dressUpActivityComplete", d(this, this.activityComplete));
            this.resetContainer()
        },
        onRemoved: function() {
            j.prototype.onRemoved.call(this)
        },
        dispose: function() {
            e.removeEventListener("com.cmm.nls.events.dressUpItemDroppedValid", d(this, this.onDressUpItemDroppedValid));
            e.removeEventListener("com.cmm.nls.events.dressUpReset", d(this, this.reset));
            e.removeEventListener("com.cmm.nls.events.dressUpHideTab", d(this, this.onHideTab));
            e.removeEventListener("com.cmm.nls.events.dressUpActivityComplete", d(this, this.activityComplete));
            j.prototype.dispose.call(this)
        },
        resetContainer: function() {
            this._ownerMC.gotoAndStop(1);
            var a = "default";
            switch (this._type[1]) {
                case 0:
                    a = p._platform.getStorage().get("NLS.TABLE");
                    break;
                case 1:
                    a = p._platform.getStorage().get("NLS.AWNING");
                    break;
                case 2:
                    a = p._platform.getStorage().get("NLS.WHEEL");
                    break;
                case 3:
                    a = p._platform.getStorage().get("NLS.GLASS")
            }
            for (var b = 0, c = this._ownerMC.getChildren(); b < c.length;) {
                var d = c[b];
                ++b;
                var e = d.get_instanceName();
                d.set_visible(e == a)
            }
        },
        reset: function() {
            this.resetContainer();
            pa._selectedItemCount = 0;
            this._ownerMC.set_pointerEnabled(!0)
        },
        onDressUpItemDroppedValid: function(a) {
            if (null != a.data && (w.reset(), a = C.__cast(a.data, ic), null != a && a.type == this._type && null != a.mc && null != a.mc.x && a.symbolNameButton != "btn_" + this._selectedItem && 0 < a.mc.x._value && (this.addItemToStage(a.symbolNameButton, new oa(a.mc.x._value, a.mc.y._value)), this._selectedItem = V.replace(a.symbolNameButton, "btn_", ""), !pa._locked))) {
                pa._locked = !0;
                i.playSequential("drop");
                pa._selectedItemCount++;
                0 == pa._selectedItemCount % 5 && (i.isChannelPlaying("vo") ? pa._selectedItemCount-- : i.playRandom("designerEncVO"));
                a = "";
                switch (this._type[1]) {
                    case 0:
                        a = "NLS.TABLE";
                        break;
                    case 1:
                        a = "NLS.AWNING";
                        break;
                    case 2:
                        a = "NLS.WHEEL";
                        break;
                    case 3:
                        a = "NLS.GLASS"
                }
                p._platform.getStorage().set(a, this._selectedItem);
                ca.delay(pa.unlock, 100)
            }
        },
        addItemToStage: function(a) {
            for (var b = 0, c = this._ownerMC.getChildren(); b < c.length;) {
                var d = c[b];
                ++b;
                d.get_instanceName() == a.substring(4, a.length) ? d.set_visible(!0) : d.set_visible(!1)
            }
            e.dispatchEvent(new r("com.cmm.nls.events.dressUpItemAdded", this._type))
        },
        onHideTab: function(a) {
            this._type == a.data && (this._disabled = !0)
        },
        activityComplete: function() {
            this.dispose()
        },
        __class__: pa
    });
    var P = function(a, b) {
        this._showBurst = !1;
        x.call(this, a, b);
        this.type = ib.convertToDressUpItemType(b.type);
        P._downTimeDeltaMaxInSec = P._downDelayInMSec / 1E3
    };
    g["com.cmm.nls.dressUp.DressUpItemBtn"] = P;
    P.__name__ = ["com", "cmm", "nls", "dressUp", "DressUpItemBtn"];
    P.disposeDressUpItemPointer = function() {
        null != P.dressUpItemPointer && (P.dressUpItemPointer.dispose(), P.dressUpItemPointer = null)
    };
    P.__super__ = x;
    P.prototype = k(x.prototype, {
        get_name: function() {
            return "DressUpItemBtn_59"
        },
        onAdded: function() {
            x.prototype.onAdded.call(this);
            this._burst = this._ownerSprite.getChildByName("burst");
            null != this._burst && (this._burst.gotoAndStop(1), this._burst.set_visible(!1));
            e.addEventListener("com.cmm.nls.events.skip", d(this, this.onSkip));
            e.addEventListener("com.cmm.nls.events.dressUpIntroComplete", d(this, this.onIntroComplete));
            e.addEventListener("com.cmm.nls.events.dressUpScrollTo", d(this, this.scrollTo));
            e.addEventListener("com.cmm.nls.events.dressUpItemSelected", d(this, this.onDressUpItemSelected));
            e.addEventListener("com.cmm.nls.events.dressUpItemDropped", d(this, this.onDressUpItemDropped));
            e.addEventListener("com.cmm.nls.events.dressUpScrolling", d(this, this.scrolling));
            e.addEventListener("com.cmm.nls.events.dressUpScrollingComplete", d(this, this.scrollingComplete));
            e.addEventListener("com.cmm.nls.events.dressUpOutro", d(this, this.onOutro));
            e.addEventListener("com.cmm.nls.events.dressUpActivityComplete", d(this, this.activityComplete))
        },
        onRemoved: function() {
            x.prototype.onRemoved.call(this)
        },
        dispose: function() {
            e.removeEventListener("com.cmm.nls.events.skip", d(this, this.onSkip));
            e.removeEventListener("com.cmm.nls.events.dressUpIntroComplete", d(this, this.onIntroComplete));
            e.removeEventListener("com.cmm.nls.events.dressUpScrollTo", d(this, this.scrollTo));
            e.removeEventListener("com.cmm.nls.events.dressUpItemSelected", d(this, this.onDressUpItemSelected));
            e.removeEventListener("com.cmm.nls.events.dressUpItemDropped", d(this, this.onDressUpItemDropped));
            e.removeEventListener("com.cmm.nls.events.dressUpScrolling", d(this, this.scrolling));
            e.removeEventListener("com.cmm.nls.events.dressUpScrollingComplete", d(this, this.scrollingComplete));
            e.removeEventListener("com.cmm.nls.events.dressUpOutro", d(this, this.onOutro));
            e.removeEventListener("com.cmm.nls.events.dressUpActivityComplete", d(this, this.activityComplete));
            this.stopDownTimers();
            this.disposeMoveSignalConnection();
            x.prototype.dispose.call(this)
        },
        onPointerOver: function(a) {
            (n.get_isMobile() || 440 > a.viewY) && "disabled" != this._ownerMC.get_currentFrameLabel() && x.prototype.onPointerOver.call(this, a)
        },
        onPointerDown: function(a) {
            if (n.get_isMobile() || 440 > a.viewY) n.get_isMobile() ? (P._moveStarted = !1, P._downPoint = na.get_globalPointerPoint(), P._downStartTimer = ca.delay(d(this, this.downStartCheck), P._downDelayInMSec / 2 | 0), P._downCompleteTimer = ca.delay(d(this, this.downTimerComplete), P._downDelayInMSec), this.disposeMoveSignalConnection(), P._moveSignalConnection = p._platform.getPointer().move.connect(d(this, this.onPointerMove))) : this.processDown(), x.prototype.onPointerDown.call(this, a)
        },
        onPointerUp: function(a) {
            n.get_isMobile() && this.downFailHandler();
            x.prototype.onPointerUp.call(this, a)
        },
        onPointerMove: function() {
            null == P._downPoint || 10 > Math.abs(na.get_globalPointerX() - P._downPoint.x) || (P._moveStarted = !0, null != P._downPoint && Math.abs(na.get_globalPointerX()) < P._xDownMin && Math.abs(na.get_globalPointerY()) > P._yDownMax ? this.downFailHandler() : this.processDown())
        },
        downStartCheck: function() {
            P._downStartTimer = null;
            !1 == P._moveStarted && this.processDown()
        },
        downTimerComplete: function() {
            if (null != P._downCompleteTimer && 0 != (this._ownerMC._flags & 4) && null != P._downPoint) {
                var a = new oa(na.get_globalPointerX(), na.get_globalPointerY()),
                    b = a.x - P._downPoint.x,
                    c = a.y - P._downPoint.y;
                (a.x < 790 * A.ASSET_SCALE || Math.abs(b) > P._xDownMin || Math.abs(c) < P._yDownMax) && this.processDown()
            }
            this.stopDownTimers();
            this.disposeMoveSignalConnection()
        },
        stopDownTimers: function() {
            null != P._downStartTimer && (P._downStartTimer.stop(), P._downStartTimer = null);
            null != P._downCompleteTimer && (P._downCompleteTimer.stop(), P._downCompleteTimer = null)
        },
        disposeMoveSignalConnection: function() {
            null != P._moveSignalConnection && (P._moveSignalConnection.dispose(), P._moveSignalConnection = null)
        },
        downFailHandler: function() {
            this.stopDownTimers();
            P._downPoint = null;
            this.disposeMoveSignalConnection()
        },
        processDown: function() {
            this.stopDownTimers();
            null != P.dressUpItemPointer && e.dispatchEvent(new r("com.cmm.nls.events.dressUpItemDropped"));
            P.disposeDressUpItemPointer();
            P.dressUpItemPointer = new ic(this.type, this._ownerBtn.symbol.get_name());
            this.disposeMoveSignalConnection()
        },
        onSkip: function() {
            this._ownerMC.set_pointerEnabled(!0)
        },
        onIntroComplete: function(a) {
            "welcomeback" == a.data && this._ownerMC.set_pointerEnabled(!0)
        },
        scrollTo: function(a) {
            null != this._ownerBtn && null != this._ownerBtn.symbol.get_name() && V.replace(this._ownerBtn.symbol.get_name(), "btn_", "") == a.data && (this._showBurst = !0)
        },
        onDressUpItemSelected: function() {
            this._ownerMC.disablePointer()
        },
        onDressUpItemDropped: function() {
            this._ownerMC.set_pointerEnabled(!0)
        },
        scrolling: function() {
            this.stopDownTimers();
            P.disposeDressUpItemPointer();
            this.disposeMoveSignalConnection();
            null != this._ownerMC && this._ownerMC.disablePointer()
        },
        scrollingComplete: function() {
            this.stopDownTimers();
            P.disposeDressUpItemPointer();
            this.disposeMoveSignalConnection();
            null != this._ownerMC && this._ownerMC.set_pointerEnabled(Ta.introComplete);
            this._showBurst && (i.play("endScreenReveal"), this._burst.set_visible(!0), this._burst.playAnimationSequence(null, d(this, this.burstComplete)), this._showBurst = !1)
        },
        burstComplete: function() {
            this._burst.gotoAndStop(1);
            this._burst.set_visible(!1)
        },
        onOutro: function() {
            this._ownerMC.disablePointer()
        },
        activityComplete: function() {
            this.dispose()
        },
        __class__: P
    });
    var ic = function(a, b) {
        var c = !1;
        "mc_" == b.substring(0, 3) && (c = !0, b = V.replace(b, "mc_", "btn_"));
        this.type = a;
        this.mc = L.createMovieClip(b);
        this.symbolNameButton = b;
        c ? this.startDrag() : S.setNormalCursor();
        this._upSignalConnection = p._platform.getPointer().up.connect(d(this, this.onPointerUp));
        this._moveSignalConnection = p._platform.getPointer().move.connect(d(this, this.checkOutPostion));
        ic.instance = this
    };
    g["com.cmm.nls.dressUp.DressUpItemPointer"] = ic;
    ic.__name__ = ["com", "cmm", "nls", "dressUp", "DressUpItemPointer"];
    ic.prototype = {
        dispose: function() {
            ic.instance = null;
            S.setNormalCursor();
            null != this.mc && this.mc.dispose();
            null != this._upSignalConnection && this._upSignalConnection.dispose();
            this.disposeMoveSignalConnection();
            cb["delete"](this)
        },
        disposeMoveSignalConnection: function() {
            null != this._moveSignalConnection && (this._moveSignalConnection.dispose(), this._moveSignalConnection = null)
        },
        onPointerUp: function() {
            this.drop()
        },
        drop: function() {
            e.dispatchEvent(new r("com.cmm.nls.events.dressUpItemDropped", this));
            this.dispose()
        },
        startDrag: function() {
            S.setCustomCursor(this.mc);
            S.showCursor();
            S.gotoToDefaultState();
            e.dispatchEvent(new r("com.cmm.nls.events.dressUpItemSelected", this.type))
        },
        checkOutPostion: function(a) {
            S.usingCustomCursor() || this.startDrag();
            a.viewX < q.get("toolboxX") && (e.dispatchEvent(new r("com.cmm.nls.events.dressUpItemDragging", a)), this.disposeMoveSignalConnection(), this._moveSignalConnection = p._platform.getPointer().move.connect(d(this, this.checkInPostion)))
        },
        checkInPostion: function(a) {
            a.viewX > q.get("toolboxX") ? (P.disposeDressUpItemPointer(), this.drop()) : e.dispatchEvent(new r("com.cmm.nls.events.dressUpItemDragging", a))
        },
        __class__: ic
    };
    var va = g["com.cmm.nls.dressUp.DressUpItemType"] = {
        __ename__: ["com", "cmm", "nls", "dressUp", "DressUpItemType"],
        __constructs__: ["Table", "Awning", "Wheel", "Glass"]
    };
    va.Table = ["Table", 0];
    va.Table.toString = m;
    va.Table.__enum__ = va;
    va.Awning = ["Awning", 1];
    va.Awning.toString = m;
    va.Awning.__enum__ = va;
    va.Wheel = ["Wheel", 2];
    va.Wheel.toString = m;
    va.Wheel.__enum__ = va;
    va.Glass = ["Glass", 3];
    va.Glass.toString = m;
    va.Glass.__enum__ = va;
    var Cc = function(a, b) {
        x.call(this, a, b)
    };
    g["com.cmm.nls.dressUp.DressUpNextBtn"] = Cc;
    Cc.__name__ = ["com", "cmm", "nls", "dressUp", "DressUpNextBtn"];
    Cc.__super__ = x;
    Cc.prototype = k(x.prototype, {
        get_name: function() {
            return "DressUpNextBtn_58"
        },
        onAdded: function() {
            x.prototype.onAdded.call(this);
            this.disable();
            e.addEventListener("com.cmm.nls.events.dressUpIntro", d(this, this.intro));
            e.addEventListener("com.cmm.nls.events.skip", d(this, this.skip));
            e.addEventListener("com.cmm.nls.events.dressUpIntroComplete", d(this, this.introComplete));
            e.addEventListener("com.cmm.nls.events.dressUpTutorialStart", d(this, this.onTutorialStart));
            e.addEventListener("com.cmm.nls.events.dressUpTutorialComplete", d(this, this.onTutorialComplete));
            e.addEventListener("com.cmm.nls.events.dressUpItemSelected", d(this, this.onDressUpItemSelected));
            e.addEventListener("com.cmm.nls.events.dressUpItemDropped", d(this, this.onDressUpItemDropped));
            e.addEventListener("com.cmm.nls.events.dressUpItemAdded", d(this, this.onDressUpItemAdded));
            e.addEventListener("com.cmm.nls.events.dressUpItemRemoved", d(this, this.onDressUpItemRemoved));
            e.addEventListener("com.cmm.nls.events.dressUpActivityComplete", d(this, this.activityComplete))
        },
        dispose: function() {
            null != this._actionQueue && (this._actionQueue.stop(), this._actionQueue = null);
            e.removeEventListener("com.cmm.nls.events.dressUpIntro", d(this, this.intro));
            e.removeEventListener("com.cmm.nls.events.skip", d(this, this.skip));
            e.removeEventListener("com.cmm.nls.events.dressUpIntroComplete", d(this, this.introComplete));
            e.removeEventListener("com.cmm.nls.events.dressUpTutorialStart", d(this, this.onTutorialStart));
            e.removeEventListener("com.cmm.nls.events.dressUpTutorialComplete", d(this, this.onTutorialComplete));
            e.removeEventListener("com.cmm.nls.events.dressUpItemSelected", d(this, this.onDressUpItemSelected));
            e.removeEventListener("com.cmm.nls.events.dressUpItemDropped", d(this, this.onDressUpItemDropped));
            e.removeEventListener("com.cmm.nls.events.dressUpItemAdded", d(this, this.onDressUpItemAdded));
            e.removeEventListener("com.cmm.nls.events.dressUpItemRemoved", d(this, this.onDressUpItemRemoved));
            e.removeEventListener("com.cmm.nls.events.dressUpActivityComplete", d(this, this.activityComplete));
            x.prototype.dispose.call(this)
        },
        onPointerClick: function(a) {
            w.destroy();
            this._actionQueue = new G([new s("com.cmm.nls.events.dressUpTutorialSkip"), new fa(d(this, this.disable)), new Fa(0.2), new s("com.cmm.nls.events.dressUpOutro")]);
            x.prototype.onPointerClick.call(this, a)
        },
        skip: function() {
            this.enable()
        },
        intro: function() {
            this.disable()
        },
        introComplete: function(a) {
            "welcomeback" == a.data && this.enable()
        },
        disable: function() {
            null != this._ownerBtn && (this._ownerBtn.disablePointer(), this._ownerBtn.set_upLabel("disabled"), this._ownerBtn.set_downLabel("disabled"), this._ownerBtn.set_overLabel("disabled"), this._ownerBtn.gotoAndStop("disabled"))
        },
        enable: function() {
            this._ownerBtn.enablePointer();
            this._ownerBtn.set_upLabel("up");
            this._ownerBtn.set_downLabel("down");
            this._ownerBtn.set_overLabel("over");
            this._ownerBtn.gotoAndStop("up");
            this._ownerBtn.hasChildWithName("hl") && this._ownerBtn.getChildByName("hl").set_pointerEnabled(!1)
        },
        onTutorialStart: function() {},
        onTutorialComplete: function() {
            this.enable()
        },
        onDressUpItemSelected: function() {
            this.disable()
        },
        onDressUpItemDropped: function() {
            this.enable()
        },
        onDressUpItemAdded: function() {
            this.enable()
        },
        onDressUpItemRemoved: function() {
            this.enable()
        },
        activityComplete: function() {
            this.dispose()
        },
        __class__: Cc
    });
    var tc = function(a, b) {
        x.call(this, a, b)
    };
    g["com.cmm.nls.dressUp.DressUpScrollBtn"] = tc;
    tc.__name__ = ["com", "cmm", "nls", "dressUp", "DressUpScrollBtn"];
    tc.__super__ = x;
    tc.prototype = k(x.prototype, {
        get_name: function() {
            return "DressUpScrollBtn_57"
        },
        onAdded: function() {
            x.prototype.onAdded.call(this);
            this._direction = V.replace(this._ownerMC.symbol.get_name(), "btn_scroll_", "");
            n.get_isMobile() && this._ownerBtn.set_visible(!1);
            this._ownerBtn.disablePointer();
            e.addEventListener("com.cmm.nls.events.dressUpUnlockItem", d(this, this.disable));
            e.addEventListener("com.cmm.nls.events.skip", d(this, this.enable));
            e.addEventListener("com.cmm.nls.events.dressUpIntroComplete", d(this, this.introComplete));
            e.addEventListener("com.cmm.nls.events.dressUpTutorialComplete", d(this, this.enable));
            e.addEventListener("com.cmm.nls.events.dressUpOutro", d(this, this.disable));
            e.addEventListener("com.cmm.nls.events.dressUpHideScrollButtons", d(this, this.hide));
            e.addEventListener("com.cmm.nls.events.dressUpShowScrollButtons", d(this, this.show))
        },
        onPointerDown: function() {
            e.dispatchEvent(new r("com.cmm.nls.events.dressUpScroll", this._direction))
        },
        disable: function() {
            this._ownerBtn.disablePointer()
        },
        enable: function() {
            this._ownerBtn.enablePointer()
        },
        introComplete: function(a) {
            "welcomeback" == a.data && this._ownerBtn.enablePointer()
        },
        show: function() {
            n.get_isMobile() || this._ownerBtn.set_visible(!0)
        },
        hide: function() {
            this._ownerBtn.set_visible(!1)
        },
        dispose: function() {
            e.removeEventListener("com.cmm.nls.events.dressUpUnlockItem", d(this, this.disable));
            e.removeEventListener("com.cmm.nls.events.skip", d(this, this.enable));
            e.removeEventListener("com.cmm.nls.events.dressUpIntroComplete", d(this, this.introComplete));
            e.removeEventListener("com.cmm.nls.events.dressUpTutorialComplete", d(this, this.enable));
            e.removeEventListener("com.cmm.nls.events.dressUpOutro", d(this, this.disable));
            e.removeEventListener("com.cmm.nls.events.dressUpHideScrollButtons", d(this, this.hide));
            e.removeEventListener("com.cmm.nls.events.dressUpShowScrollButtons", d(this, this.show));
            x.prototype.dispose.call(this)
        },
        __class__: tc
    });
    var Dc = function(a, b) {
        x.call(this, a, b)
    };
    g["com.cmm.nls.dressUp.DressUpSkipBtn"] = Dc;
    Dc.__name__ = ["com", "cmm", "nls", "dressUp", "DressUpSkipBtn"];
    Dc.__super__ = x;
    Dc.prototype = k(x.prototype, {
        get_name: function() {
            return "DressUpSkipBtn_56"
        },
        onAdded: function() {
            var a = this;
            x.prototype.onAdded.call(this);
            p._platform.getStorage().get("NLS.DESIGNER_TUTORIAL_COMPLETE", !1) || this._ownerMC.set_visible(!1);
            this._ownerBtn.set_pointerEnabled(!1);
            ca.delay(function() {
                null != a._ownerBtn && (a._ownerBtn.set_pointerEnabled(!0), a._over = !0, p._platform.getPointer().move.connect(function() {
                    a._over = !1
                }).once())
            }, 200);
            e.addEventListener("com.cmm.nls.events.dressUpIntro", d(this, this.intro));
            e.addEventListener("com.cmm.nls.events.skip", d(this, this.skip));
            e.addEventListener("com.cmm.nls.events.dressUpTutorialComplete", d(this, this.tutorialComplete));
            e.addEventListener("com.cmm.nls.events.dressUpActivityComplete", d(this, this.activityComplete))
        },
        dispose: function() {
            e.removeEventListener("com.cmm.nls.events.dressUpIntro", d(this, this.intro));
            e.removeEventListener("com.cmm.nls.events.skip", d(this, this.skip));
            e.removeEventListener("com.cmm.nls.events.dressUpTutorialComplete", d(this, this.tutorialComplete));
            e.removeEventListener("com.cmm.nls.events.dressUpActivityComplete", d(this, this.activityComplete));
            x.prototype.dispose.call(this)
        },
        onPointerClick: function(a) {
            x.prototype.onPointerClick.call(this, a);
            i.play("skipVO");
            this.performSkipAction()
        },
        performSkipAction: function() {
            this._ownerBtn.set_visible(!1);
            e.dispatchEvent(new r("com.cmm.nls.events.skip", !0))
        },
        intro: function(a) {
            "welcomeback" == a.data && (this._ownerBtn.get_parent().removeChild(this._ownerBtn), this.dispose())
        },
        skip: function() {
            null != this._ownerBtn && null != this._ownerBtn.get_parent() && this._ownerBtn.get_parent().removeChild(this._ownerBtn);
            this.dispose()
        },
        tutorialComplete: function() {
            this._ownerBtn.get_parent().removeChild(this._ownerBtn);
            this.dispose()
        },
        activityComplete: function() {
            this.dispose()
        },
        __class__: Dc
    });
    var Cb = function(a, b) {
        x.call(this, a, b);
        this._type = ib.convertToDressUpItemType(b.type);
        e.addEventListener("com.cmm.nls.events.dressUpTabSelected", d(this, this.tabSelected));
        e.addEventListener("com.cmm.nls.events.dressUpUnlockItem", d(this, this.disable));
        e.addEventListener("com.cmm.nls.events.skip", d(this, this.enable));
        e.addEventListener("com.cmm.nls.events.dressUpIntroComplete", d(this, this.introComplete));
        e.addEventListener("com.cmm.nls.events.dressUpTutorialComplete", d(this, this.enable));
        e.addEventListener("com.cmm.nls.events.dressUpItemSelected", d(this, this.disable));
        e.addEventListener("com.cmm.nls.events.dressUpItemDropped", d(this, this.enable));
        e.addEventListener("com.cmm.nls.events.dressUpOutro", d(this, this.disable));
        e.addEventListener("com.cmm.nls.events.dressUpActivityComplete", d(this, this.activityComplete))
    };
    g["com.cmm.nls.dressUp.DressUpTabBtn"] = Cb;
    Cb.__name__ = ["com", "cmm", "nls", "dressUp", "DressUpTabBtn"];
    Cb.__super__ = x;
    Cb.prototype = k(x.prototype, {
        get_name: function() {
            return "DressUpTabBtn_55"
        },
        onAdded: function() {
            x.prototype.onAdded.call(this);
            this._ownerBtn.disablePointer()
        },
        dispose: function() {
            e.removeEventListener("com.cmm.nls.events.dressUpTabSelected", d(this, this.tabSelected));
            e.removeEventListener("com.cmm.nls.events.dressUpUnlockItem", d(this, this.disable));
            e.removeEventListener("com.cmm.nls.events.skip", d(this, this.enable));
            e.removeEventListener("com.cmm.nls.events.dressUpIntroComplete", d(this, this.introComplete));
            e.removeEventListener("com.cmm.nls.events.dressUpTutorialComplete", d(this, this.enable));
            e.removeEventListener("com.cmm.nls.events.dressUpItemSelected", d(this, this.disable));
            e.removeEventListener("com.cmm.nls.events.dressUpItemDropped", d(this, this.enable));
            e.removeEventListener("com.cmm.nls.events.dressUpOutro", d(this, this.disable));
            e.removeEventListener("com.cmm.nls.events.dressUpActivityComplete", d(this, this.activityComplete));
            x.prototype.dispose.call(this)
        },
        onPointerClick: function(a) {
            e.dispatchEvent(new r("com.cmm.nls.events.dressUpTabSelected", this._type));
            x.prototype.onPointerClick.call(this, a)
        },
        tabSelected: function(a) {
            this._type == a.data ? (this._ownerBtn.set_upLabel("selected"), this._ownerBtn.set_downLabel("selected"), this._ownerBtn.set_overLabel("selected"), this._ownerBtn.gotoAndStop("selected")) : (this._ownerBtn.set_upLabel("up"), this._ownerBtn.set_downLabel("down"), this._ownerBtn.set_overLabel("over"), this._ownerBtn.gotoAndStop("up"))
        },
        disable: function() {
            this._ownerBtn.disablePointer()
        },
        enable: function() {
            this._ownerBtn.enablePointer()
        },
        introComplete: function(a) {
            "welcomeback" == a.data && this._ownerBtn.enablePointer()
        },
        activityComplete: function() {
            this.dispose()
        },
        __class__: Cb
    });
    var Bc = function(a, b) {
        j.call(this, a, b);
        this._isSkipped = !1
    };
    g["com.cmm.nls.dressUp.DressUpTutorial"] = Bc;
    Bc.__name__ = ["com", "cmm", "nls", "dressUp", "DressUpTutorial"];
    Bc.__super__ = j;
    Bc.prototype = k(j.prototype, {
        get_name: function() {
            return "DressUpTutorial_54"
        },
        onAdded: function() {
            j.prototype.onAdded.call(this);
            this._ownerMC.gotoAndStop(1);
            this._ownerMC.hasChildWithName("btn_skip") && (this._skip = this._ownerMC.getChildByName("btn_skip"));
            e.addEventListener("com.cmm.common.events.onFocusOut", d(this, this.onFocusOut));
            e.addEventListener("com.cmm.common.events.onFocusIn", d(this, this.onFocusIn));
            e.addEventListener("com.cmm.nls.events.dressUpTutorialStart", d(this, this.startTutorial));
            e.addEventListener("com.cmm.nls.events.skip", d(this, this.skip));
            e.addEventListener("com.cmm.nls.events.dressUpNextToolboxTray", d(this, this.skip));
            e.addEventListener("swipeDetected", d(this, this.checkSkip));
            e.addEventListener("com.cmm.nls.events.dressUpItemSelected", d(this, this.checkSkip));
            e.addEventListener("com.cmm.nls.events.dressUpTutorialSkip", d(this, this.skip));
            e.addEventListener("com.cmm.nls.events.dressUpTutorialComplete", d(this, this.completeTutorial))
        },
        startTutorial: function(a) {
            this._isSkipped = !1;
            var b = (a = !0 == a.data) || !0 == q.get("firstPlayDesigner", !0);
            this._signalConnection.connect1(this._ownerMC.get_onCallbackLabel(), d(this, this.onCallback));
            this.playTutorial(b, a)
        },
        playTutorial: function(a, b) {
            var c = p._platform.getStorage().get("NLS.DESIGNER_TUTORIAL_COMPLETE", !1),
                e = q.get("firstPlayDesigner", !0);
            b && q.get("tabChangedByPlayer");
            this._tutorialActions = new G([new y(c && e, new fa(d(this, this.showSkip))), new y(!b, new v(this._ownerMC, "start")), new y(b, new v(this._ownerMC, "tabs")), new y(!b, new v(this._ownerMC, this.getPlatformSpecificID("scroll"))), new y(!b, new v(this._ownerMC, "drag")), new y(b, new v(this._ownerMC, "arrow")), new fa(d(this, this.cleanUp))])
        },
        onCallback: function(a) {
            "awning2" == a && (a = "awning");
            a == this.getPlatformSpecificID("scrollUp") ? e.dispatchEvent(new r("com.cmm.nls.events.dressUpScroll", "up")) : a == this.getPlatformSpecificID("scrollDown") ? e.dispatchEvent(new r("com.cmm.nls.events.dressUpScroll", "down")) : e.dispatchEvent(new r("com.cmm.nls.events.dressUpTabSelected", ib.convertToDressUpItemType(a)))
        },
        showSkip: function() {
            null != this._skip && (this._skip.set_visible(!0), this._isSkipped = !1)
        },
        disposeSkip: function() {
            null != this._skip && (this._skip.dispose(), this._skip = null)
        },
        checkSkip: function(a) {
            !1 == q.get("firstPlayDesigner", !0) && this.skip(a)
        },
        skip: function() {
            this._isSkipped || (this._isSkipped = !0, w.destroy(), null != this._tutorialActions && this._tutorialActions.stop(), this.checkSkipVO())
        },
        checkSkipVO: function() {
            i.isSoundFilePlaying("skipVO") ? ca.delay(d(this, this.checkSkipVO), 100) : this.cleanUp()
        },
        cleanUp: function() {
            w.destroy();
            i.stopChannel("vo");
            e.dispatchEvent(new r("com.cmm.nls.events.dressUpTutorialComplete"))
        },
        onFocusOut: function() {
            null != this._tutorialActions && this._tutorialActions.pause()
        },
        onFocusIn: function() {
            null != this._tutorialActions && this._tutorialActions.resume()
        },
        completeTutorial: function() {
            this.dispose()
        },
        dispose: function() {
            e.removeEventListener("com.cmm.nls.events.skip", d(this, this.skip));
            e.removeEventListener("com.cmm.common.events.onFocusIn", d(this, this.onFocusIn));
            e.removeEventListener("com.cmm.common.events.onFocusOut", d(this, this.onFocusOut));
            e.removeEventListener("com.cmm.nls.events.dressUpTutorialStart", d(this, this.startTutorial));
            e.removeEventListener("com.cmm.nls.events.dressUpNextToolboxTray", d(this, this.skip));
            e.removeEventListener("swipeDetected", d(this, this.checkSkip));
            e.removeEventListener("com.cmm.nls.events.dressUpItemSelected", d(this, this.checkSkip));
            e.removeEventListener("com.cmm.nls.events.dressUpTutorialSkip", d(this, this.skip));
            e.removeEventListener("com.cmm.nls.events.dressUpTutorialComplete", d(this, this.completeTutorial));
            null != this._tutorialActions && (this._tutorialActions.stop(), this._tutorialActions = null);
            null != this._ownerMC && O.instance.get_animLayer().removeChild(this._ownerMC);
            this.disposeSkip();
            j.prototype.dispose.call(this)
        },
        getPlatformSpecificID: function(a) {
            if (n.get_isMobile()) {
                if (n.get_isMobile()) return a + "Mobile"
            } else return a + "Desktop";
            return a
        },
        __class__: Bc
    });
    var ib = function() {};
    g["com.cmm.nls.dressUp.DressUpUtils"] = ib;
    ib.__name__ = ["com", "cmm", "nls", "dressUp", "DressUpUtils"];
    ib.convertToDressUpItemType = function(a) {
        var b = null;
        switch (a.toLowerCase()) {
            case "awning":
                b = va.Awning;
                break;
            case "glass":
                b = va.Glass;
                break;
            case "table":
                b = va.Table;
                break;
            case "wheel":
                b = va.Wheel
        }
        return b
    };
    ib.convertToDressUpTypeString = function(a) {
        var b = null;
        switch (a[1]) {
            case 0:
                b = "table";
                break;
            case 1:
                b = "awning";
                break;
            case 2:
                b = "wheel";
                break;
            case 3:
                b = "glass"
        }
        return b
    };
    var Ec = function(a, b) {
        j.call(this, a, b)
    };
    g["com.cmm.nls.dressUp.Toolbox"] = Ec;
    Ec.__name__ = ["com", "cmm", "nls", "dressUp", "Toolbox"];
    Ec.__super__ = j;
    Ec.prototype = k(j.prototype, {
        get_name: function() {
            return "Toolbox_53"
        },
        onAdded: function() {
            j.prototype.onAdded.call(this);
            q.set("toolboxX", this._ownerMC.localToGlobal().x + 130 * A.ASSET_SCALE);
            this.reset();
            e.addEventListener("com.cmm.nls.events.dressUpActivityComplete", d(this, this.activityComplete))
        },
        removeEventListeners: function() {
            e.removeEventListener("com.cmm.nls.events.dressUpActivityComplete", d(this, this.activityComplete))
        },
        onRemoved: function() {
            this.removeEventListeners();
            j.prototype.onRemoved.call(this)
        },
        reset: function() {
            this._ownerMC.gotoAndStop(1);
            e.dispatchEvent(new r("com.cmm.nls.events.dressUpReset"));
            e.dispatchEvent(new r("com.cmm.nls.events.dressUpTabSelected", va.Table))
        },
        dispose: function() {
            this.removeEventListeners();
            j.prototype.dispose.call(this)
        },
        activityComplete: function() {
            this.dispose()
        },
        __class__: Ec
    });
    var Y = function(a, b) {
        this._scrollIncrement = 3;
        this._space = 85;
        this._scrollsRemaining = 0;
        this._type = ib.convertToDressUpItemType(b.type);
        switch (this._type[1]) {
            case 0:
                this._space = 75;
                break;
            case 1:
                this._space = 64;
                break;
            case 2:
                this._space = 70;
                break;
            case 3:
                this._space = 75
        }
        this.itemArray = [];
        Y._swipeScrollTimeDeltaMaxInSec = Y._swipeScrollDelayInMSec / 1E3;
        j.call(this, a, b)
    };
    g["com.cmm.nls.dressUp.ToolboxTray"] = Y;
    Y.__name__ = ["com", "cmm", "nls", "dressUp", "ToolboxTray"];
    Y.__super__ = j;
    Y.prototype = k(j.prototype, {
        get_name: function() {
            return "ToolboxTray_52"
        },
        onAdded: function() {
            j.prototype.onAdded.call(this);
            this._mask = C.__cast(this._ownerMC.getChildByName("mask"), Wb);
            this._mask.set_pointerEnabled(!1);
            this._ownerMC.gotoAndStop(1);
            this.mcItems = C.__cast(this._ownerMC.getChildByName("items"), Z);
            this.mcItems.removeChildren();
            this.disable();
            e.addEventListener("com.cmm.nls.events.dressUpReset", d(this, this.reset));
            e.addEventListener("com.cmm.nls.events.dressUpUnlockItem", d(this, this.unlockItem));
            e.addEventListener("com.cmm.nls.events.skip", d(this, this.enableButtons));
            e.addEventListener("com.cmm.nls.events.dressUpIntro", d(this, this.disableButtons));
            e.addEventListener("com.cmm.nls.events.dressUpIntroComplete", d(this, this.introComplete));
            e.addEventListener("com.cmm.nls.events.dressUpTutorialComplete", d(this, this.enableButtons));
            e.addEventListener("com.cmm.nls.events.dressUpTabSelected", d(this, this.tabSelected));
            e.addEventListener("com.cmm.nls.events.dressUpHideTab", d(this, this.hideTab));
            e.addEventListener("com.cmm.nls.events.dressUpScroll", d(this, this.scroll));
            e.addEventListener("com.cmm.nls.events.dressUpScrollTo", d(this, this.scrollTo));
            e.addEventListener("com.cmm.nls.events.dressUpOutro", d(this, this.disableButtons));
            e.addEventListener("com.cmm.nls.events.dressUpActivityComplete", d(this, this.activityComplete))
        },
        dispose: function() {
            this.removeSwipeFunctionality();
            e.removeEventListener("com.cmm.nls.events.dressUpReset", d(this, this.reset));
            e.removeEventListener("com.cmm.nls.events.dressUpUnlockItem", d(this, this.unlockItem));
            e.removeEventListener("com.cmm.nls.events.skip", d(this, this.enableButtons));
            e.removeEventListener("com.cmm.nls.events.dressUpIntro", d(this, this.disableButtons));
            e.removeEventListener("com.cmm.nls.events.dressUpIntroComplete", d(this, this.introComplete));
            e.removeEventListener("com.cmm.nls.events.dressUpTutorialComplete", d(this, this.enableButtons));
            e.removeEventListener("com.cmm.nls.events.dressUpTabSelected", d(this, this.tabSelected));
            e.removeEventListener("com.cmm.nls.events.dressUpHideTab", d(this, this.hideTab));
            e.removeEventListener("com.cmm.nls.events.dressUpScroll", d(this, this.scroll));
            e.removeEventListener("com.cmm.nls.events.dressUpScrollTo", d(this, this.scrollTo));
            e.removeEventListener("com.cmm.nls.events.dressUpOutro", d(this, this.disableButtons));
            e.removeEventListener("com.cmm.nls.events.dressUpActivityComplete", d(this, this.activityComplete));
            null != this.mcItems && (this.mcItems.dispose(), this.mcItems = null);
            j.prototype.dispose.call(this)
        },
        reset: function(a) {
            this._ownerMC.gotoAndStop(1);
            this._ownerMC.set_visible(!0);
            this.mcItems.removeChildren();
            if (null != a.data)
                for (var a = 0, b = this.itemArray; a < b.length;) {
                    var c = b[a];
                    ++a;
                    this.addItem(c)
                }
        },
        unlockItem: function(a) {
            var b = a.data,
                a = b.substring(0, b.length - 1);
            if (this._type == ib.convertToDressUpItemType(a)) {
                for (this.mcItems.removeChildren(); 0 < this.itemArray.length;) this.itemArray.pop();
                b = b.substring(b.length - 1, b.length);
                p._platform.getStorage().set("NLS.UNLOCKED_" + a.toUpperCase() + b, !0);
                this.addItems();
                this.select();
                q.set("tabChangedByPlayer", !1)
            }
        },
        tabSelected: function(a) {
            this._type == a.data ? (this.loadTray(), this.select()) : this.unselect()
        },
        loadTray: function() {
            0 == this.numItems() && this.addItems()
        },
        addItems: function() {
            for (var a = ib.convertToDressUpTypeString(this._type), b = 1; 10 > b;) {
                var c = b++,
                    d = q.get("unlockedAll") || p._platform.getStorage().get("NLS.UNLOCKED_" + a.toUpperCase() + c);
                if (c <= (this._type != va.Glass ? 6 : 4) || d)
                    if (L.exists("btn_" + a + c)) this.addItem(L.createMovieClipButton("btn_" + a + c));
                    else break
            }
        },
        hideTab: function(a) {
            this._type == a.data && (this._ownerMC.set_visible(!1), this.unselect())
        },
        addItem: function(a, b) {
            null == b && (b = -1); - 1 == b ? (this.itemArray.push(a), this.mcItems.addChild(this.itemArray[this.itemArray.length - 1]), this.setVisibleItem(this.itemArray.length - 1)) : (this.itemArray.splice(b, 0, a), this.mcItems.addChildAt(this.itemArray[b], b), this.insertVisibleItem(b))
        },
        insertVisibleItem: function(a) {
            var b = this._space;
            this.itemArray[a].set_pointerEnabled(Ta.introComplete);
            if (0 == a && 1 < this.itemArray.length) {
                var c = K.getBounds(this.itemArray[a].owner);
                c.height > 111 * A.ASSET_SCALE && (c.height = 111 * A.ASSET_SCALE);
                this.itemArray[a].setXY(Y.itemOffset.x * A.ASSET_SCALE, Y.itemOffset.y * A.ASSET_SCALE - (c.y + c.height + b * A.ASSET_SCALE));
                this.itemArray[a].set_pointerEnabled(!1)
            }
        },
        setVisibleItem: function(a) {
            var b = this._space;
            this.itemArray[a].set_pointerEnabled(Ta.introComplete);
            if (0 == a) this.itemArray[a].setXY(Y.itemOffset.x * A.ASSET_SCALE, Y.itemOffset.y * A.ASSET_SCALE);
            else if (0 < a) {
                var c = C.__cast(this.mcItems.getChildAt(a - 1), Z),
                    c = K.getBounds(c.owner);
                c.height > 111 * A.ASSET_SCALE && (c.height = 111 * A.ASSET_SCALE);
                this.itemArray[a].setXY(Y.itemOffset.x * A.ASSET_SCALE, c.y + c.height + b * A.ASSET_SCALE)
            }
        },
        setVisibleItems: function() {
            for (var a = 0, b = this.itemArray.length; a < b;) this.setVisibleItem(a++)
        },
        scroll: function(a) {
            0 == this._scrollsRemaining && ("up" == a.data ? (this._scrollsRemaining = -this._scrollIncrement, this.scrollUp()) : "down" == a.data && (this._scrollsRemaining = this._scrollIncrement, this.scrollDown()))
        },
        scrollTo: function(a) {
            var b = a.data,
                a = b.substring(0, b.length - 1),
                b = b.substring(b.length - 1, b.length);
            if (this._type == ib.convertToDressUpItemType(a)) {
                for (var c = 1, d = 0, e = this.mcItems.getChildren(); d < e.length;) {
                    var f = e[d];
                    ++d;
                    if (f.symbol.get_name() == "btn_" + a + b) break;
                    else ++c
                }
                c > 2 * this._scrollIncrement ? (this._scrollsRemaining = 2 * this._scrollIncrement, this.scrollDown()) : c > this._scrollIncrement && (this._scrollsRemaining = this._scrollIncrement, this.scrollDown())
            }
        },
        scrollUp: function() {
            if (null != this.itemArray && 0 < this.itemArray.length && null != this.itemArray[this.itemArray.length - 1]) {
                e.dispatchEvent(new r("com.cmm.nls.events.dressUpScrolling"));
                this.addItem(L.createMovieClipButton(this.itemArray[this.itemArray.length - 1].get_className()), 0);
                this.mcItems.setXY(Y._originalMcItemsLocation.x * A.ASSET_SCALE, Y._originalMcItemsLocation.y * A.ASSET_SCALE);
                var a = this.mcItems.getChildAt(0);
                this.mcItems.y.animateBy(this.mcItems.getChildAt(1).y._value - a.y._value, Y.SCROLL_SPEED / 1E3);
                ca.delay(d(this, this.onScrollUpChanged), Y.SCROLL_SPEED)
            }
            w.reset()
        },
        scrollDown: function() {
            if (null != this.itemArray && 0 < this.itemArray.length && null != this.itemArray[0]) {
                e.dispatchEvent(new r("com.cmm.nls.events.dressUpScrolling"));
                this.addItem(L.createMovieClipButton(this.itemArray[0].get_className()));
                this.mcItems.setXY(Y._originalMcItemsLocation.x * A.ASSET_SCALE, Y._originalMcItemsLocation.y * A.ASSET_SCALE);
                var a = this.mcItems.getChildAt(0),
                    b = this.mcItems.getChildAt(1);
                this.mcItems.y.animateBy(a.y._value -
                    b.y._value, Y.SCROLL_SPEED / 1E3);
                ca.delay(d(this, this.onScrollDownChanged), Y.SCROLL_SPEED)
            }
            w.reset()
        },
        onScrollUpChanged: function() {
            this._scrollsRemaining += 1;
            null != this.mcItems && (this.mcItems.setXY(Y._originalMcItemsLocation.x * A.ASSET_SCALE, Y._originalMcItemsLocation.y * A.ASSET_SCALE), this.mcItems.removeChild(this.itemArray.pop()), this.setVisibleItems(), 0 <= this._scrollsRemaining ? e.dispatchEvent(new r("com.cmm.nls.events.dressUpScrollingComplete")) : this.scrollUp())
        },
        onScrollDownChanged: function() {
            this._scrollsRemaining -= 1;
            null != this.mcItems && (this.mcItems.setXY(Y._originalMcItemsLocation.x * A.ASSET_SCALE, Y._originalMcItemsLocation.y * A.ASSET_SCALE), this.mcItems.removeChild(this.itemArray.shift()), this.setVisibleItems(), 0 >= this._scrollsRemaining ? e.dispatchEvent(new r("com.cmm.nls.events.dressUpScrollingComplete")) : this.scrollDown())
        },
        select: function() {
            this.selected = !0;
            this.mcItems.setXY(Y._originalMcItemsLocation.x * A.ASSET_SCALE, Y._originalMcItemsLocation.y * A.ASSET_SCALE);
            !n.get_isMobile() && this.itemArray.length > this._scrollIncrement ? e.dispatchEvent(new r("com.cmm.nls.events.dressUpShowScrollButtons")) : e.dispatchEvent(new r("com.cmm.nls.events.dressUpHideScrollButtons"));
            for (var a = 0, b = this._ownerSprite.getChildren(); a < b.length;) {
                var c = b[a];
                ++a;
                c.set_visible(!0)
            }
            this._scrollsRemaining = 0;
            n.get_isMobile() && Ta.introComplete && this.itemArray.length > this._scrollIncrement && this.addSwipeFunctionality()
        },
        unselect: function() {
            this.selected = !1;
            for (var a = 0, b = this._ownerSprite.getChildren(); a < b.length;) {
                var c = b[a];
                ++a;
                "tab" != c.get_instanceName() && c.set_visible(!1)
            }
            this._scrollsRemaining = 0;
            n.get_isMobile() && this.removeSwipeFunctionality()
        },
        numItems: function() {
            return this.itemArray.length
        },
        introComplete: function(a) {
            "welcomeback" == a.data && this.enable()
        },
        disableButtons: function() {
            this.disable()
        },
        enableButtons: function() {
            this.enable()
        },
        disable: function() {
            for (var a = 0, b = this.itemArray.length; a < b;) this.itemArray[a++].disablePointer();
            n.get_isMobile() && this.removeSwipeFunctionality()
        },
        enable: function() {
            for (var a = 0, b = this.itemArray.length; a < b;) this.itemArray[a++].set_pointerEnabled(!0);
            this._scrollsRemaining = 0;
            n.get_isMobile() && this.itemArray.length > this._scrollIncrement && this.addSwipeFunctionality()
        },
        onForwardClick: function() {
            0 == this._scrollsRemaining && (this._scrollsRemaining = this._scrollIncrement, this.scrollDown())
        },
        onBackwardClick: function() {
            0 == this._scrollsRemaining && (this._scrollsRemaining = -this._scrollIncrement, this.scrollUp())
        },
        addSwipeFunctionality: function() {
            var a = this;
            this.removeSwipeFunctionality();
            this._downSignalConnection = p._platform.getPointer().down.connect(function() {
                a._swipeStarted = !1;
                var b = na.get_globalPointerX(),
                    c = na.get_globalPointerY();
                a._swipeStartPoint = new oa(b, c);
                b = (new Date).getTime();
                a._swipeStamp = b / 1E3;
                a._swipeStartTimer = ca.delay(d(a, a.swipeStartCheck), Y._swipeScrollDelayInMSec / 2 | 0)
            });
            this._upSignalConnection = p._platform.getPointer().up.connect(function() {
                0 != (O.instance.get_gameLayer()._flags & 4) && a.swipeCheck()
            });
            this._moveSignalConnection = p._platform.getPointer().move.connect(function() {
                null == a._swipeStartPoint || 10 > Math.abs(na.get_globalPointerY() - a._swipeStartPoint.y) || (a._swipeStarted = !0, null != a._swipeStartPoint && Math.abs(na.get_globalPointerX() - a._swipeStartPoint.x) > Y._xSwipeMax && a.swipeFailHandler())
            })
        },
        removeSwipeFunctionality: function() {
            null != this._downSignalConnection && (this._downSignalConnection.dispose(), this._downSignalConnection = null);
            null != this._upSignalConnection && (this._upSignalConnection.dispose(), this._upSignalConnection = null);
            null != this._moveSignalConnection && (this._moveSignalConnection.dispose(), this._moveSignalConnection = null)
        },
        swipeCheck: function() {
            if (0 != (O.instance.get_gameLayer()._flags & 4) && (this.stopSwipeTimers(), null != this._swipeStartPoint)) {
                var a = new oa(na.get_globalPointerX(), na.get_globalPointerY()),
                    b = a.x - this._swipeStartPoint.x,
                    c = a.y - this._swipeStartPoint.y;
                if (a.x >= 790 * A.ASSET_SCALE && Math.abs(b) <= Y._xSwipeMax && Math.abs(c) >= Y._ySwipeMin) {
                    if (0 < c) this.onBackwardClick(null);
                    else this.onForwardClick(null);
                    e.dispatchEvent(new Nb("swipeDetected"))
                } else e.dispatchEvent(new Nb("swipeAborted"));
                this._swipeStartPoint = null
            }
        },
        swipeStartCheck: function() {
            this._swipeStartTimer = null;
            !1 == this._swipeStarted && this.swipeFailHandler()
        },
        swipeFailHandler: function() {
            this.stopSwipeTimers();
            null != this._swipeStartPoint && (this._swipeStartPoint = null, e.dispatchEvent(new Nb("swipeAborted")))
        },
        stopSwipeTimers: function() {
            null != this._swipeStartTimer && (this._swipeStartTimer.stop(), this._swipeStartTimer = null);
            null != this._swipeCompleteTimer && (this._swipeCompleteTimer.stop(), this._swipeCompleteTimer = null)
        },
        activityComplete: function() {
            this.dispose()
        },
        __class__: Y
    });
    var Tc = function(a, b) {
        j.call(this, a, b)
    };
    g["com.cmm.nls.endScreen.EndScreen"] = Tc;
    Tc.__name__ = ["com", "cmm", "nls", "endScreen", "EndScreen"];
    Tc.__super__ = j;
    Tc.prototype = k(j.prototype, {
        get_name: function() {
            return "EndScreen_51"
        },
        onAdded: function() {
            j.prototype.onAdded.call(this);
            this._ownerMC.gotoAndStop(1);
            q.get("eventReporting", !1) && p._platform.getExternal().call("trackFlashEvent", [q.get("showGameTitle"), "gameComplete", "true"]);
            this._signalConnection.connect1(this._ownerMC.get_pointerDown(), d(this, this.onPointerClick));
            var a = q.get("voiceOverAudio", !0);
            this._actionQueue = new G([new s("com.cmm.nls.events.customersSetCustomers"), new Fa(0.5), new y(a, new v(this._ownerMC, this.getPlatformSpecificID("playAgain")), new R(this.getPlatformSpecificID("playAgainVO"))), new fa(d(this, this.setTimeout))]);
            e.addEventListener("com.cmm.nls.events.endScreenPlayAgainTapped", d(this, this.endScreenPlayAgainTapped));
            e.addEventListener("com.cmm.nls.events.endScreenComplete", d(this, this.endScreenComplete))
        },
        dispose: function() {
            w.destroy();
            i.stopChannel("vo");
            this.disposeActionQueue();
            e.removeEventListener("com.cmm.nls.events.endScreenPlayAgainTapped", d(this, this.endScreenPlayAgainTapped));
            e.removeEventListener("com.cmm.nls.events.endScreenComplete", d(this, this.endScreenComplete));
            j.prototype.dispose.call(this)
        },
        disposeActionQueue: function() {
            null != this._actionQueue && (this._actionQueue.stop(), this._actionQueue = null)
        },
        setTimeout: function() {
            w.destroy();
            w.addPrompt(15, d(this, this.playTimeout));
            w.start()
        },
        playTimeout: function() {
            w.destroy();
            var a = q.get("voiceOverAudio", !0);
            this._actionQueue = new G([new y(a, new v(this._ownerMC, this.getPlatformSpecificID("playAgain")), new R(this.getPlatformSpecificID("playAgainVO"))), new fa(d(this, this.setTimeout))])
        },
        onPointerClick: function() {},
        endScreenPlayAgainTapped: function() {
            this.disposeActionQueue();
            this._ownerMC.gotoAndStop(1)
        },
        endScreenComplete: function() {
            this.dispose()
        },
        getPlatformSpecificID: function(a) {
            if (n.get_isMobile()) {
                if (n.get_isMobile()) return a + "Mobile"
            } else return a + "Desktop";
            return a
        },
        __class__: Tc
    });
    var Uc = function(a, b) {
        x.call(this, a, b)
    };
    g["com.cmm.nls.endscreen.PlayAgainBtn"] = Uc;
    Uc.__name__ = ["com", "cmm", "nls", "endscreen", "PlayAgainBtn"];
    Uc.__super__ = x;
    Uc.prototype = k(x.prototype, {
        get_name: function() {
            return "PlayAgainBtn_50"
        },
        onAdded: function() {
            x.prototype.onAdded.call(this)
        },
        dispose: function() {
            x.prototype.dispose.call(this)
        },
        onPointerDown: function(a) {
            this._ownerBtn.disablePointer();
            this._ownerBtn.set_visible(!1);
            x.prototype.onPointerDown.call(this, a);
            new G([new s("com.cmm.nls.events.endScreenPlayAgainTapped"), new R("playAgainVO", !1), new R("gameSting"), new s("com.cmm.nls.events.endScreenComplete"), new fa(d(this, this.dispose))])
        },
        __class__: Uc
    });
    var qa = function(a, b) {
        j.call(this, a, b);
        var c = qa._randomSoundMap;
        (null != o.recipe ? c.existsReserved("recipe") : c.h.hasOwnProperty("recipe")) || qa.initRandomSoundMap()
    };
    g["com.cmm.nls.lemonade.LemonadeActivity"] = qa;
    qa.__name__ = ["com", "cmm", "nls", "lemonade", "LemonadeActivity"];
    qa.initRandomSoundMap = function() {
        var a = qa._randomSoundMap,
            b = new ja(["recipe", "recipe3", "recipe4"]);
        null != o.recipe ? a.setReserved("recipe", b) : a.h.recipe = b;
        a = qa._randomSoundMap;
        b = new ja(["correct2", "correct3"]);
        null != o.correct2 ? a.setReserved("correct2", b) : a.h.correct2 = b;
        a = qa._randomSoundMap;
        b = new ja(["incorrect", "incorrect2"]);
        null != o.incorrect ? a.setReserved("incorrect", b) : a.h.incorrect = b
    };
    qa.getNextSound = function(a) {
        var b = qa._randomSoundMap;
        return (null != o[a] ? b.getReserved(a) : b.h[a]).getNextItem()
    };
    qa.__super__ = j;
    qa.prototype = k(j.prototype, {
        get_name: function() {
            return "LemonadeActivity_49"
        },
        onAdded: function() {
            j.prototype.onAdded.call(this);
            null == F.currentRecipe && (F.currentRecipe = F.getNextRecipe(), q.set("lemonadeName", F.currentRecipe.name));
            e.dispatchEvent(new r("com.cmm.nls.events.lemonadeSetRecipe", F.currentRecipe));
            this._ownerMC.gotoAndStop(1);
            e.addEventListener("com.cmm.nls.events.skip", d(this, this.skip));
            e.addEventListener("com.cmm.nls.events.lemonadeTutorialSkip", d(this, this.tutorialSkip));
            e.addEventListener("com.cmm.nls.events.lemonadeTutorialComplete", d(this, this.tutorialComplete));
            e.addEventListener("com.cmm.nls.events.lemonadeAmountIncorrect", d(this, this.amountIncorrect));
            e.addEventListener("com.cmm.nls.events.lemonadeIngredientComplete", d(this, this.ingredientComplete));
            e.addEventListener("com.cmm.nls.events.lemonadeActivityComplete", d(this, this.activityComplete));
            this.isTutorialActive = !1;
            this.showTutorial();
            var a = !0 == q.get("firstPlayLemonade", !0),
                b = q.get("voiceOverAudio", !0);
            this._actionQueue = new G([new Fa(0.5), new y(b, new v(M.getOwnerMC(), "lemonSlice")), new y(b, new v(M.getOwnerMC(), "lemonHalf")), new y(a, new s("com.cmm.nls.events.lemonadeTutorialStart", "half"), new fa(d(this, this.setTimeout)))]);
            this._signalConnection.connect1(this._ownerMC.get_pointerDown(), d(this, this.onPointerClick))
        },
        onPointerClick: function() {},
        showTutorial: function() {
            null == this._tutorial && (this._tutorial = L.createMovieClip("mc_tutorial_lemonade"), null != this._tutorial && O.instance.get_animLayer().addChild(this._tutorial))
        },
        tutorialSkip: function() {
            i.stopChannel("vo");
            this.disposeActionQueue();
            this.setTimeout()
        },
        tutorialComplete: function() {
            this.isTutorialActive = !1;
            this.disposeActionQueue();
            this.setTimeout()
        },
        ingredientComplete: function(a) {
            if (null != a.data) switch (a.data[1]) {
                case 0:
                    u.currentType = t.Water;
                    break;
                case 1:
                    u.currentType = t.Sugar;
                    break;
                case 2:
                    u.currentType = t.Ice;
                    break;
                case 3:
                    u.currentType = t.Special;
                    break;
                case 4:
                    u.currentType = null
            } else u.currentType = null;
            null == u.currentType && (this.disposeActionQueue(), this.isTutorialActive = !0, a = q.get("voiceOverAudio", !0), this._actionQueue = new G([new R("gameSting", !1), new y(a, new v(M.getOwnerMC(), "lemonadeComplete")), new s("com.cmm.nls.events.lemonadeActivityComplete")]))
        },
        activityComplete: function() {
            this.dispose()
        },
        setTimeout: function() {
            if (!this.isTutorialActive) {
                w.destroy();
                var a = 20,
                    b = ha.convertToLemonadeItemString(u.currentType);
                if ("tapCorrectAmount" == T.currentSequence && ("water" == b || "cherry" == b || "carrot" == b)) a = 10;
                else if (("sugarcubes1" == T.currentSequence || "sugarcubes2" == T.currentSequence || "sugarcubes3" == T.currentSequence) && 1 <= Ya.getTimesCrushed()) a = 3;
                w.addPrompt(a, d(this, this.playTimeout));
                w.start()
            }
        },
        playTimeout: function() {
            w.destroy();
            var a = ha.convertToLemonadeItemString(u.currentType),
                b = q.get("voiceOverAudio", !0);
            if ("tapCorrectAmount" == T.currentSequence) {
                var c = I.getCorrectAmountForType(u.currentType);
                this._actionQueue = new G([new y(b, new v(M.getOwnerMC(), qa.getNextSound("recipe"))), new y(b, new v(M.getOwnerMC(), a + c)), new s("com.cmm.nls.events.lemonadeTutorialStart")])
            } else "pourwater1" == T.currentSequence || "pourwater2" == T.currentSequence || "pourwater3" == T.currentSequence ? this._actionQueue = new G([new y(b, new v(M.getOwnerMC(), a + "Pour")), new s("com.cmm.nls.events.lemonadeTutorialStart")]) : "spoonstir" == T.currentSequence ? (a = u.currentType != t.Special ? "stir" : "finalStir", this._actionQueue = new G([new y(b, new v(M.getOwnerMC(), a)), new s("com.cmm.nls.events.lemonadeTutorialStart")])) : this._actionQueue = "sugarcubes1" == T.currentSequence || "sugarcubes2" == T.currentSequence || "sugarcubes3" == T.currentSequence ? 0 == Ya.getTimesCrushed() ? new G([new y(b, new v(M.getOwnerMC(), a + "Crush")), new s("com.cmm.nls.events.lemonadeTutorialStart")]) : new G([new y(b, new v(M.getOwnerMC(), "muddleTimeout")), new fa(d(this, this.setTimeout))]) : new G([new fa(d(this, this.showTutorial)), new s("com.cmm.nls.events.lemonadeTutorialStart")])
        },
        disposeActionQueue: function() {
            null != this._actionQueue && (this._actionQueue.stop(), this._actionQueue = null)
        },
        disposeTutorial: function() {
            null != this._tutorial && (this._tutorial.dispose(), this._tutorial = null)
        },
        dispose: function() {
            w.destroy();
            i.stopChannel("vo");
            q.set("firstPlayLemonade", !1);
            p._platform.getStorage().set("NLS.LEMONADE_TUTORIAL_COMPLETE", !0);
            this.disposeActionQueue();
            this.disposeTutorial();
            e.removeEventListener("com.cmm.nls.events.skip", d(this, this.skip));
            e.removeEventListener("com.cmm.nls.events.lemonadeTutorialSkip", d(this, this.tutorialSkip));
            e.removeEventListener("com.cmm.nls.events.lemonadeTutorialComplete", d(this, this.tutorialComplete));
            e.removeEventListener("com.cmm.nls.events.lemonadeAmountIncorrect", d(this, this.amountIncorrect));
            e.removeEventListener("com.cmm.nls.events.lemonadeIngredientComplete", d(this, this.ingredientComplete));
            e.removeEventListener("com.cmm.nls.events.lemonadeActivityComplete", d(this, this.activityComplete));
            j.prototype.dispose.call(this)
        },
        skip: function() {
            w.destroy();
            i.stopChannel("vo");
            this.disposeActionQueue();
            u.currentType != t.Special ? (e.dispatchEvent(new r("com.cmm.nls.events.lemonadeIngredientComplete", u.currentType)), null == this._tutorial && this.showTutorial()) : e.dispatchEvent(new r("com.cmm.nls.events.lemonadeActivityComplete"))
        },
        amountIncorrect: function() {
            this.setTimeout()
        },
        __class__: qa
    });
    var Wa = function(a, b) {
        this._selected = !1;
        this._index = 0;
        x.call(this, a, b);
        this._type = ha.convertToLemonadeItemType(this.params.type);
        this._name = this.params.name
    };
    g["com.cmm.nls.lemonade.LemonadeBaseBtn"] = Wa;
    Wa.__name__ = ["com", "cmm", "nls", "lemonade", "LemonadeBaseBtn"];
    Wa.__super__ = x;
    Wa.prototype = k(x.prototype, {
        get_name: function() {
            return "LemonadeBaseBtn_31"
        },
        onAdded: function() {
            x.prototype.onAdded.call(this);
            this._index = "water" != this._ownerMC.get_instanceName() && "ice" != this._ownerMC.get_instanceName() && "cherry" != this._ownerMC.get_instanceName() && "carrot" != this._ownerMC.get_instanceName() && "mixedfruit" != this._ownerMC.get_instanceName() ? V.replace(this._ownerMC.get_instanceName(), "btn_" + this._name, "") : 0;
            this._ownerBtn.disablePointer();
            e.addEventListener("com.cmm.nls.events.lemonadeTutorialComplete", d(this, this.enableButton));
            e.addEventListener("com.cmm.nls.events.lemonadeDisposeItem", d(this, this.disposeItem));
            e.addEventListener("com.cmm.nls.events.lemonadeItemSelected", d(this, this.itemSelected));
            e.addEventListener("com.cmm.nls.events.lemonadeAmountCorrect", d(this, this.amountCorrect));
            e.addEventListener("com.cmm.nls.events.lemonadeAmountIncorrect", d(this, this.amountIncorrect));
            e.addEventListener("com.cmm.nls.events.lemonadeWipeComplete", d(this, this.wipeComplete));
            e.addEventListener("com.cmm.nls.events.lemonadeActivityComplete", d(this, this.activityComplete))
        },
        dispose: function() {
            e.removeEventListener("com.cmm.nls.events.lemonadeTutorialComplete", d(this, this.enableButton));
            e.removeEventListener("com.cmm.nls.events.lemonadeDisposeItem", d(this, this.disposeItem));
            e.removeEventListener("com.cmm.nls.events.lemonadeItemSelected", d(this, this.itemSelected));
            e.removeEventListener("com.cmm.nls.events.lemonadeAmountCorrect", d(this, this.amountCorrect));
            e.removeEventListener("com.cmm.nls.events.lemonadeAmountIncorrect", d(this, this.amountIncorrect));
            e.removeEventListener("com.cmm.nls.events.lemonadeWipeComplete", d(this, this.wipeComplete));
            e.removeEventListener("com.cmm.nls.events.lemonadeActivityComplete", d(this, this.activityComplete));
            x.prototype.dispose.call(this)
        },
        onPointerDown: function() {
            this._ownerBtn.disablePointer();
            e.dispatchEvent(new r("com.cmm.nls.events.lemonadeTutorialSkip"));
            e.dispatchEvent(new r("com.cmm.nls.events.lemonadeItemSelected", this._index))
        },
        enableButton: function() {
            this._type == u.currentType && "tapCorrectAmount" == T.currentSequence && 0 != (this._ownerBtn._flags & 2) && this._ownerBtn.enablePointer()
        },
        disposeItem: function(a) {
            this._name == a.data && this.dispose()
        },
        itemSelected: function(a) {
            this._type == u.currentType && this._index != a.data && this._ownerBtn.disablePointer()
        },
        amountCorrect: function() {
            this._type == u.currentType && this._ownerBtn.disablePointer()
        },
        amountIncorrect: function(a) {
            this._type == a.data && (this._selected = !1, this._ownerBtn.enablePointer())
        },
        wipeComplete: function() {
            this._type == u.currentType && !1 == q.get("firstPlayLemonade", !0) && this._ownerBtn.enablePointer()
        },
        activityComplete: function() {
            this.dispose()
        },
        __class__: Wa
    });
    var I = function(a, b) {
        j.call(this, a, b);
        this._type = ha.convertToLemonadeItemType(b.type);
        this._name = b.name;
        I._randomAmountMap.exists(this._type) || I.initRandomAmountMap()
    };
    g["com.cmm.nls.lemonade.LemonadeBaseItem"] = I;
    I.__name__ = ["com", "cmm", "nls", "lemonade", "LemonadeBaseItem"];
    I.getCorrectAmountForType = function(a) {
        return I._correctAmountMap.get(a)
    };
    I.initRandomAmountMap = function() {
        I._randomAmountMap.set(t.Water, new ja([2, 3, 4, 5, 6, 7, 8, 9, 10]));
        I._randomAmountMap.set(t.Sugar, new ja([2, 3, 4, 5, 6]));
        I._randomAmountMap.set(t.Ice, new ja([4, 5, 6, 7, 8, 9, 10, 11, 12]));
        I._randomAmountMap.set(t.Special, new ja([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]));
        I._amountArrayMap.set(t.Water, []);
        I._amountArrayMap.set(t.Sugar, []);
        I._amountArrayMap.set(t.Ice, []);
        I._amountArrayMap.set(t.Special, []);
        for (var a = 0; 3 > a;) a++, I._amountArrayMap.get(t.Water).push(0), I._amountArrayMap.get(t.Sugar).push(0), I._amountArrayMap.get(t.Ice).push(0), I._amountArrayMap.get(t.Special).push(0)
    };
    I.checkIfAmountExists = function(a, b) {
        for (var c = !1, d = 0, e = I._amountArrayMap.get(a).length; d < e;) {
            var f = d++;
            b == I._amountArrayMap.get(a)[f] && (c = !0)
        }
        return c
    };
    I.hasCorrectAmount = function(a) {
        for (var b = !1, c = 0, d = I._amountArrayMap.get(a).length; c < d;) {
            var e = c++;
            I._amountArrayMap.get(a)[e] == I._correctAmountMap.get(a) && (b = !0)
        }
        return b
    };
    I.__super__ = j;
    I.prototype = k(j.prototype, {
        get_name: function() {
            return "LemonadeBaseItem_32"
        },
        setNumber: function() {
            var a = 0,
                b = ha.convertToLemonadeItemString(this._type);
            if (0 < this._index) {
                for (; !(a = I._randomAmountMap.get(this._type).getNextItem(), !I.checkIfAmountExists(this._type, a) && F.checkValidAmount(b, a)););
                I._amountArrayMap.get(this._type)[this._index - 1] = a
            } else a = I._correctAmountMap.get(this._type);
            for (var c = 0, d = this._ownerMC.getChildren(); c < d.length;) {
                var e = d[c];
                ++c;
                var f = e.get_instanceName(),
                    g = "mc_" + b + a;
                f.substring(0, 3 + b.length) == "mc_" + b && e.set_visible(f == g)
            }
        },
        onAdded: function() {
            j.prototype.onAdded.call(this);
            this._index = "water" != this._ownerMC.get_parent().get_instanceName() && "ice" != this._ownerMC.get_parent().get_instanceName() && "cherry" != this._ownerMC.get_parent().get_instanceName() && "carrot" != this._ownerMC.get_parent().get_instanceName() && "mixedfruit" != this._ownerMC.get_parent().get_instanceName() && -1 == this._ownerMC.get_parent().get_instanceName().lastIndexOf("instance_") ? V.replace(this._ownerMC.get_parent().get_instanceName(), "btn_" + this._name, "") : 0; - 1 < this._ownerMC.get_parent().get_instanceName().lastIndexOf("instance_") && this.setNumber();
            e.addEventListener("com.cmm.nls.events.lemonadeSetRecipe", d(this, this.setRecipe));
            e.addEventListener("com.cmm.nls.events.lemonadeDisposeItem", d(this, this.disposeItem));
            e.addEventListener("com.cmm.nls.events.lemonadeSetRandomAmount", d(this, this.setRandomAmount));
            e.addEventListener("com.cmm.nls.events.lemonadeItemSelected", d(this, this.itemSelected));
            e.addEventListener("com.cmm.nls.events.lemonadeHideItem", d(this, this.hideItem));
            e.addEventListener("com.cmm.nls.events.lemonadeActivityComplete", d(this, this.activityComplete))
        },
        disposeActionQueue: function() {
            null != this._actionQueue && (this._actionQueue.stop(), this._actionQueue = null)
        },
        dispose: function() {
            this.disposeActionQueue();
            e.removeEventListener("com.cmm.nls.events.lemonadeSetRecipe", d(this, this.setRecipe));
            e.removeEventListener("com.cmm.nls.events.lemonadeDisposeItem", d(this, this.disposeItem));
            e.removeEventListener("com.cmm.nls.events.lemonadeSetRandomAmount", d(this, this.setRandomAmount));
            e.removeEventListener("com.cmm.nls.events.lemonadeItemSelected", d(this, this.itemSelected));
            e.removeEventListener("com.cmm.nls.events.lemonadeHideItem", d(this, this.hideItem));
            e.removeEventListener("com.cmm.nls.events.lemonadeActivityComplete", d(this, this.activityComplete));
            j.prototype.dispose.call(this)
        },
        setRecipe: function() {
            if (null != this._type) {
                if (0 < this._index && (this._type != t.Special || this._name == F.currentRecipe.specialName)) I._amountArrayMap.get(this._type)[this._index -
                    1] = 0;
                switch (this._type[1]) {
                    case 0:
                        I._correctAmountMap.set(t.Lemon, 3);
                        break;
                    case 1:
                        I._correctAmountMap.set(t.Water, F.currentRecipe.water);
                        break;
                    case 2:
                        I._correctAmountMap.set(t.Sugar, F.currentRecipe.sugar);
                        break;
                    case 3:
                        I._correctAmountMap.set(t.Ice, F.currentRecipe.ice);
                        break;
                    case 4:
                        I._correctAmountMap.set(t.Special, F.currentRecipe.specialAmount)
                }
            }
        },
        disposeItem: function(a) {
            this._name == a.data && this.dispose()
        },
        setRandomAmount: function(a) {
            var a = a.data,
                b = null,
                c = 0;
            V.endsWith(a, "1") || V.endsWith(a, "2") || V.endsWith(a, "3") ? (b = a.substring(0, a.length - 1), c = a.substring(a.length - 1, a.length)) : b = a;
            if (this._type == ha.convertToLemonadeItemType(b) || this._name == b)(0 == c || this._index == c) && this.setNumber()
        },
        itemSelected: function() {},
        hideItem: function(a) {
            if (this._type == u.currentType && (null == a.data || this._index == a.data)) this.hide(), this.disposeActionQueue()
        },
        hide: function() {
            0 < this._index && this._ownerMC.set_visible(!1)
        },
        activityComplete: function() {
            this.dispose()
        },
        __class__: I
    });
    var Gc = function(a, b) {
        j.call(this, a, b)
    };
    g["com.cmm.nls.lemonade.LemonadeBotBurst"] = Gc;
    Gc.__name__ = ["com", "cmm", "nls", "lemonade", "LemonadeBotBurst"];
    Gc.__super__ = j;
    Gc.prototype = k(j.prototype, {
        get_name: function() {
            return "LemonadeBotBurst_48"
        },
        onAdded: function() {
            j.prototype.onAdded.call(this);
            this._ownerMC.gotoAndStop(1);
            this._ownerMC.set_visible(!1);
            e.addEventListener("com.cmm.nls.events.lemonadeAmountCorrect", d(this, this.amountCorrect));
            e.addEventListener("com.cmm.nls.events.lemonadeIngredientComplete", d(this, this.ingredientComplete));
            e.addEventListener("com.cmm.nls.events.lemonadeActivityComplete", d(this, this.activityComplete))
        },
        dispose: function() {
            e.removeEventListener("com.cmm.nls.events.lemonadeAmountCorrect", d(this, this.amountCorrect));
            e.removeEventListener("com.cmm.nls.events.lemonadeIngredientComplete", d(this, this.ingredientComplete));
            e.removeEventListener("com.cmm.nls.events.lemonadeActivityComplete", d(this, this.activityComplete));
            j.prototype.dispose.call(this)
        },
        amountCorrect: function() {
            this._ownerMC.set_visible(!0);
            i.play("bellyHighLight");
            this._ownerMC.playAnimationSequence(null, d(this, this.burstComplete))
        },
        burstComplete: function() {
            null != this._ownerMC && (this._ownerMC.gotoAndStop(1), this._ownerMC.set_visible(!1))
        },
        ingredientComplete: function() {
            ca.delay(d(this, this.burstComplete), 500)
        },
        activityComplete: function() {
            this.dispose()
        },
        __class__: Gc
    });
    var Hc = function(a, b) {
        this._itemPartsSqueezed = this._itemIndex = 0;
        j.call(this, a, b)
    };
    g["com.cmm.nls.lemonade.LemonadeCharacter"] = Hc;
    Hc.__name__ = ["com", "cmm", "nls", "lemonade", "LemonadeCharacter"];
    Hc.__super__ = j;
    Hc.prototype = k(j.prototype, {
        get_name: function() {
            return "LemonadeCharacter_47"
        },
        onAdded: function() {
            j.prototype.onAdded.call(this);
            this._ownerMC.loopAnimationSequence("idle");
            e.addEventListener("com.cmm.nls.events.skip", d(this, this.skip));
            e.addEventListener("com.cmm.nls.events.lemonadeGrabItemPart", d(this, this.grabItemPart));
            e.addEventListener("com.cmm.nls.events.lemonadeItemTapped", d(this, this.squeezeItem));
            e.addEventListener("com.cmm.nls.events.lemonadeRevealPestle", d(this, this.crush));
            e.addEventListener("com.cmm.nls.events.lemonadePour", d(this, this.pour));
            e.addEventListener("com.cmm.nls.events.lemonadePourComplete", d(this, this.pourComplete));
            e.addEventListener("com.cmm.nls.events.lemonadeIngredientComplete", d(this, this.ingredientComplete));
            e.addEventListener("com.cmm.nls.events.lemonadeActivityComplete", d(this, this.activityComplete));
            this._signalConnection.connect1(this._ownerMC.get_onCallbackLabel(), d(this, this.onCallback))
        },
        dispose: function() {
            null != this._actionQueue && (this._actionQueue.stop(), this._actionQueue = null);
            e.removeEventListener("com.cmm.nls.events.skip", d(this, this.skip));
            e.removeEventListener("com.cmm.nls.events.lemonadeGrabItemPart", d(this, this.grabItemPart));
            e.removeEventListener("com.cmm.nls.events.lemonadeItemTapped", d(this, this.squeezeItem));
            e.removeEventListener("com.cmm.nls.events.lemonadeRevealPestle", d(this, this.crush));
            e.removeEventListener("com.cmm.nls.events.lemonadePour", d(this, this.pour));
            e.removeEventListener("com.cmm.nls.events.lemonadePourComplete", d(this, this.pourComplete));
            e.removeEventListener("com.cmm.nls.events.lemonadeIngredientComplete", d(this, this.ingredientComplete));
            e.removeEventListener("com.cmm.nls.events.lemonadeActivityComplete", d(this, this.activityComplete));
            j.prototype.dispose.call(this)
        },
        onCallback: function(a) {
            switch (a) {
                case "banana1":
                    e.dispatchEvent(new r("com.cmm.nls.events.lemonadeHideItem", 1));
                    break;
                case "banana2":
                    e.dispatchEvent(new r("com.cmm.nls.events.lemonadeHideItem", 2));
                    break;
                case "banana3":
                    e.dispatchEvent(new r("com.cmm.nls.events.lemonadeHideItem", 2));
                    break;
                case "bananasqueeze":
                    e.dispatchEvent(new r("com.cmm.nls.events.lemonadeSqueezeItem"));
                    break;
                case "blueberries1":
                    e.dispatchEvent(new r("com.cmm.nls.events.lemonadeHideItem"));
                    break;
                case "blueberries2":
                    e.dispatchEvent(new r("com.cmm.nls.events.lemonadeHideItem"));
                    break;
                case "blueberries3":
                    e.dispatchEvent(new r("com.cmm.nls.events.lemonadeHideItem"));
                    break;
                case "blueberriespour1":
                    e.dispatchEvent(new r("com.cmm.nls.events.lemonadePourItemIntoPitcher", 1));
                    break;
                case "blueberriespour2":
                    e.dispatchEvent(new r("com.cmm.nls.events.lemonadePourItemIntoPitcher", 2));
                    break;
                case "blueberriespour3":
                    e.dispatchEvent(new r("com.cmm.nls.events.lemonadePourItemIntoPitcher", 3));
                    break;
                case "chocolate1":
                    e.dispatchEvent(new r("com.cmm.nls.events.lemonadeHideItem"));
                    break;
                case "chocolate2":
                    e.dispatchEvent(new r("com.cmm.nls.events.lemonadeHideItem"));
                    break;
                case "chocolate3":
                    e.dispatchEvent(new r("com.cmm.nls.events.lemonadeHideItem"));
                    break;
                case "chocolatepour1":
                    e.dispatchEvent(new r("com.cmm.nls.events.lemonadePourItemIntoPitcher", 1));
                    break;
                case "chocolatepour2":
                    e.dispatchEvent(new r("com.cmm.nls.events.lemonadePourItemIntoPitcher", 2));
                    break;
                case "chocolatepour3":
                    e.dispatchEvent(new r("com.cmm.nls.events.lemonadePourItemIntoPitcher", 3));
                    break;
                case "cucumber1":
                    e.dispatchEvent(new r("com.cmm.nls.events.lemonadeHideItem", 1));
                    break;
                case "cucumber2":
                    e.dispatchEvent(new r("com.cmm.nls.events.lemonadeHideItem", 2));
                    break;
                case "cucumber3":
                    e.dispatchEvent(new r("com.cmm.nls.events.lemonadeHideItem", 2));
                    break;
                case "cucumbersqueeze":
                    e.dispatchEvent(new r("com.cmm.nls.events.lemonadeSqueezeItem"));
                    break;
                case "ice1":
                    e.dispatchEvent(new r("com.cmm.nls.events.lemonadeHideItem", 1));
                    break;
                case "ice2":
                    e.dispatchEvent(new r("com.cmm.nls.events.lemonadeHideItem", 2));
                    break;
                case "ice3":
                    e.dispatchEvent(new r("com.cmm.nls.events.lemonadeHideItem", 3));
                    break;
                case "lavender1":
                    e.dispatchEvent(new r("com.cmm.nls.events.lemonadeHideItem"));
                    break;
                case "lavender2":
                    e.dispatchEvent(new r("com.cmm.nls.events.lemonadeHideItem"));
                    break;
                case "lavender3":
                    e.dispatchEvent(new r("com.cmm.nls.events.lemonadeHideItem"));
                    break;
                case "lavenderpour1":
                    e.dispatchEvent(new r("com.cmm.nls.events.lemonadePourItemIntoPitcher", 1));
                    break;
                case "lavenderpour2":
                    e.dispatchEvent(new r("com.cmm.nls.events.lemonadePourItemIntoPitcher", 2));
                    break;
                case "lavenderpour3":
                    e.dispatchEvent(new r("com.cmm.nls.events.lemonadePourItemIntoPitcher", 3));
                    break;
                case "lemon1":
                    e.dispatchEvent(new r("com.cmm.nls.events.lemonadeHideItem", 1));
                    break;
                case "lemon2":
                    e.dispatchEvent(new r("com.cmm.nls.events.lemonadeHideItem", 2));
                    break;
                case "lemon3":
                    e.dispatchEvent(new r("com.cmm.nls.events.lemonadeHideItem", 2));
                    break;
                case "lemonsqueeze":
                    e.dispatchEvent(new r("com.cmm.nls.events.lemonadeSqueezeItem"));
                    break;
                case "mixedfruit1":
                    e.dispatchEvent(new r("com.cmm.nls.events.lemonadeHideItem", 1));
                    break;
                case "mixedfruit2":
                    e.dispatchEvent(new r("com.cmm.nls.events.lemonadeHideItem", 2));
                    break;
                case "mixedfruit3":
                    e.dispatchEvent(new r("com.cmm.nls.events.lemonadeHideItem", 3));
                    break;
                case "pestle1":
                    e.dispatchEvent(new r("com.cmm.nls.events.lemonadeShowPestle", 1));
                    break;
                case "pestle2":
                    e.dispatchEvent(new r("com.cmm.nls.events.lemonadeShowPestle", 2));
                    break;
                case "pestle3":
                    e.dispatchEvent(new r("com.cmm.nls.events.lemonadeShowPestle", 3));
                    break;
                case "pickle1":
                    e.dispatchEvent(new r("com.cmm.nls.events.lemonadeHideItem", 1));
                    break;
                case "pickle2":
                    e.dispatchEvent(new r("com.cmm.nls.events.lemonadeHideItem", 2));
                    break;
                case "pickle3":
                    e.dispatchEvent(new r("com.cmm.nls.events.lemonadeHideItem", 2));
                    break;
                case "picklesqueeze":
                    e.dispatchEvent(new r("com.cmm.nls.events.lemonadeSqueezeItem"));
                    break;
                case "stirrer":
                    e.dispatchEvent(new r("com.cmm.nls.events.lemonadeShowStirrer"));
                    break;
                case "sugar1":
                    e.dispatchEvent(new r("com.cmm.nls.events.lemonadeHideItem"));
                    break;
                case "sugar2":
                    e.dispatchEvent(new r("com.cmm.nls.events.lemonadeHideItem"));
                    break;
                case "sugar3":
                    e.dispatchEvent(new r("com.cmm.nls.events.lemonadeHideItem"));
                    break;
                case "sugarpour1":
                    e.dispatchEvent(new r("com.cmm.nls.events.lemonadePourItemIntoPitcher", 1));
                    break;
                case "sugarpour2":
                    e.dispatchEvent(new r("com.cmm.nls.events.lemonadePourItemIntoPitcher", 2));
                    break;
                case "sugarpour3":
                    e.dispatchEvent(new r("com.cmm.nls.events.lemonadePourItemIntoPitcher", 3));
                    break;
                case "watermelon1":
                    e.dispatchEvent(new r("com.cmm.nls.events.lemonadeHideItem", 1));
                    break;
                case "watermelon2":
                    e.dispatchEvent(new r("com.cmm.nls.events.lemonadeHideItem", 2));
                    break;
                case "watermelon3":
                    e.dispatchEvent(new r("com.cmm.nls.events.lemonadeHideItem", 2));
                    break;
                case "watermelonsqueeze":
                    e.dispatchEvent(new r("com.cmm.nls.events.lemonadeSqueezeItem"))
            }
        },
        skip: function() {
            null != this._ownerMC && this._ownerMC.loopAnimationSequence("idle")
        },
        grabItemPart: function(a) {
            this._itemIndex = a.data;
            var a = ha.convertToLemonadeItemString(u.currentType),
                b = 0 == this._itemPartsSqueezed && !0 == q.get("firstPlayLemonade", !0),
                c = q.get("voiceOverAudio", !0),
                b = b ? "com.cmm.nls.events.lemonadeTutorialStart" : "com.cmm.nls.events.lemonadeTutorialSkip";
            T.currentSequence = a + "Tap";
            var d = a + "grab" +
                this._itemIndex;
            2 == this._itemIndex && 1 == this._itemPartsSqueezed % 2 && (d = a + "grab3");
            this._actionQueue = new G([new R("squeezeLemon1", !1), new s("com.cmm.nls.events.lemonadeStopBurst"), new y("watermelon" == a && 0 == this._itemPartsSqueezed, new v(this._ownerMC, d, !1)), new y("watermelon" == a && 0 == this._itemPartsSqueezed && c, new v(M.getOwnerMC(), "watermelonEnc")), new y("watermelon" != a || 0 < this._itemPartsSqueezed, new v(this._ownerMC, d)), new s(b, a + "Tap")])
        },
        squeezeItem: function() {
            this._itemPartsSqueezed++;
            var a = ha.convertToLemonadeItemString(u.currentType);
            this._actionQueue = new G([new y("watermelon" == a, new R("scoopWatermelon" + this._itemPartsSqueezed, !1)), new v(this._ownerMC, a + "squeeze1"), new fa(d(this, this.itemSqueezeComplete))])
        },
        itemSqueezeComplete: function() {
            var a = ha.convertToLemonadeItemString(u.currentType),
                b = "half" == N.getCorrectPartForType(u.currentType) ? 2 : 4,
                c = q.get("voiceOverAudio", !0);
            this._itemPartsSqueezed == 3 * b ? this._actionQueue = new G([new s("com.cmm.nls.events.lemonadeIngredientComplete", u.currentType)]) : 1 == this._itemPartsSqueezed ? this._actionQueue = new G([new y("watermelon" != a && c, new v(M.getOwnerMC(), a + "Enc")), new s("com.cmm.nls.events.lemonadeGrabItemPart", this._itemIndex)]) : this._itemPartsSqueezed < b ? this._actionQueue = new G([new s("com.cmm.nls.events.lemonadeGrabItemPart", this._itemIndex)]) : this._itemPartsSqueezed == b ? this._actionQueue = new G([new fa(d(this, this.loopIdle)), new s("com.cmm.nls.events.lemonadeSqueezeItemComplete")]) : this._itemPartsSqueezed == b + 1 ? this._actionQueue = new G([new y(c, new v(M.getOwnerMC(), a + "Enc")), new s("com.cmm.nls.events.lemonadeGrabItemPart", 1)]) : this._itemPartsSqueezed < 2 * b ? this._actionQueue = new G([new s("com.cmm.nls.events.lemonadeGrabItemPart", 1)]) : this._itemPartsSqueezed < 3 * b && (this._actionQueue = new G([new s("com.cmm.nls.events.lemonadeGrabItemPart", 2)]))
        },
        crush: function(a) {
            a = a.data;
            this._actionQueue = new G([new s("com.cmm.nls.events.lemonadeStopBurst"), new v(this._ownerMC, "pestleappear" + a), new fa(d(this, this.loopIdle))])
        },
        pour: function(a) {
            var a = a.data,
                b = ha.convertToLemonadeItemString(u.currentType);
            this._ownerMC.labelExists(b + "pour" +
                a) && (this._actionQueue = new G([new s("com.cmm.nls.events.lemonadeStopBurst"), new v(this._ownerMC, b + "pour" + a), new fa(d(this, this.loopIdle)), new s("com.cmm.nls.events.lemonadePourComplete")]))
        },
        pourComplete: function() {
            var a = u.currentType != t.Special ? "stir" : "finalStir",
                b = !0 == q.get("firstPlayLemonade", !0),
                c = q.get("voiceOverAudio", !0),
                b = b ? "com.cmm.nls.events.lemonadeTutorialStart" : "com.cmm.nls.events.lemonadeTutorialSkip";
            T.currentSequence = "spoonstir";
            this._actionQueue = new G([new s("com.cmm.nls.events.lemonadeStopBurst"), new v(this._ownerMC, "tapstirrer"), new s("com.cmm.nls.events.lemonadeShowStirrer"), new y(c, new v(M.getOwnerMC(), a)), new fa(d(this, this.loopIdle)), new s(b, "spoonstir")])
        },
        loopIdle: function() {
            null != this._ownerMC && this._ownerMC.loopAnimationSequence("idle")
        },
        ingredientComplete: function() {
            this._itemPartsSqueezed = 0;
            ca.delay(d(this, this.loopIdle), 500)
        },
        activityComplete: function() {
            this.dispose()
        },
        __class__: Hc
    });
    var M = function(a, b) {
        j.call(this, a, b);
        M._instance = this
    };
    g["com.cmm.nls.lemonade.LemonadeCharacterHead"] = M;
    M.__name__ = ["com", "cmm", "nls", "lemonade", "LemonadeCharacterHead"];
    M.getOwnerMC = function() {
        return M._instance._ownerMC
    };
    M.__super__ = j;
    M.prototype = k(j.prototype, {
        get_name: function() {
            return "LemonadeCharacterHead_46"
        },
        onAdded: function() {
            j.prototype.onAdded.call(this);
            this._ownerMC.gotoAndStop(1);
            e.addEventListener("com.cmm.nls.events.skip", d(this, this.skip));
            e.addEventListener("com.cmm.nls.events.lemonadeTutorialSkip", d(this, this.skip));
            e.addEventListener("com.cmm.nls.events.lemonadeTutorialComplete", d(this, this.skip))
        },
        dispose: function() {
            M._instance = null;
            e.removeEventListener("com.cmm.nls.events.skip", d(this, this.skip));
            e.removeEventListener("com.cmm.nls.events.lemonadeTutorialSkip", d(this, this.skip));
            e.removeEventListener("com.cmm.nls.events.lemonadeTutorialComplete", d(this, this.skip));
            j.prototype.dispose.call(this)
        },
        skip: function() {
            null != this._ownerMC && this._ownerMC.gotoAndStop(1)
        },
        __class__: M
    });
    var Eb = function(a, b) {
        I.call(this, a, b)
    };
    g["com.cmm.nls.lemonade.LemonadeCrush"] = Eb;
    Eb.__name__ = ["com", "cmm", "nls", "lemonade", "LemonadeCrush"];
    Eb.__super__ = I;
    Eb.prototype = k(I.prototype, {
        itemSelected: function(a) {
            this.disposeActionQueue();
            if (this._type == u.currentType) {
                var b = a.data,
                    c = I._amountArrayMap.get(this._type)[b - 1],
                    a = I._correctAmountMap.get(this._type);
                if (this._index == b) {
                    var b = ha.convertToLemonadeItemString(u.currentType),
                        d = I._amountArrayMap.get(this._type)[this._index - 1],
                        c = q.get("voiceOverAudio", !0);
                    w.destroy();
                    if (d == a) {
                        var d = !0 == q.get("firstPlayLemonade", !0) ? "com.cmm.nls.events.lemonadeTutorialStart" : "com.cmm.nls.events.lemonadeTutorialSkip",
                            e = "sugarcubes" + this._index;
                        T.currentSequence = e;
                        this._actionQueue = new G([new R("CA", !1), new s("com.cmm.nls.events.lemonadeAmountCorrect", this._index), new y(c, new v(M.getOwnerMC(), "correct")), new y(c, new v(M.getOwnerMC(), b + a)), new y(c, new v(M.getOwnerMC(), qa.getNextSound("correct2"))), new y(c, new v(M.getOwnerMC(), b + "Crush")), new s("com.cmm.nls.events.lemonadeRevealPestle", this._index), new s(d, e)])
                    } else this._actionQueue = new G([new R("WA", !1), new y(c, new v(M.getOwnerMC(), qa.getNextSound("incorrect"))), new y(c, new v(M.getOwnerMC(), "recipe2")), new y(c, new v(M.getOwnerMC(), b + a)), new s("com.cmm.nls.events.lemonadeAmountIncorrect", this._type)])
                } else c == a && this.hide()
            }
        },
        __class__: Eb
    });
    var Fb = function(a, b) {
        Wa.call(this, a, b)
    };
    g["com.cmm.nls.lemonade.LemonadeCrushBtn"] = Fb;
    Fb.__name__ = ["com", "cmm", "nls", "lemonade", "LemonadeCrushBtn"];
    Fb.__super__ = Wa;
    Fb.prototype = k(Wa.prototype, {
        __class__: Fb
    });
    var Bb = function(a, b) {
        this._crushCount = 0;
        j.call(this, a, b);
        this._type = "sugar" == b.type ? t.Sugar : t.Special;
        this._name = b.name
    };
    g["com.cmm.nls.lemonade.LemonadeCrushItem"] = Bb;
    Bb.__name__ = ["com", "cmm", "nls", "lemonade", "LemonadeCrushItem"];
    Bb.__super__ = j;
    Bb.prototype = k(j.prototype, {
        get_name: function() {
            return "LemonadeCrushItem_36"
        },
        onAdded: function() {
            j.prototype.onAdded.call(this);
            this._index = V.replace(this._ownerMC.get_parent().get_parent().get_instanceName(), "btn_" + this._name, "");
            this._ownerMC.gotoAndStop(1);
            e.addEventListener("com.cmm.nls.events.lemonadeCrushItem", d(this, this.crush));
            e.addEventListener("com.cmm.nls.events.lemonadeDisposeItem", d(this, this.disposeItem));
            e.addEventListener("com.cmm.nls.events.lemonadeActivityComplete", d(this, this.activityComplete))
        },
        dispose: function() {
            null != this._actionQueue && (this._actionQueue.stop(), this._actionQueue = null);
            e.removeEventListener("com.cmm.nls.events.lemonadeCrushItem", d(this, this.crush));
            e.removeEventListener("com.cmm.nls.events.lemonadeDisposeItem", d(this, this.disposeItem));
            e.removeEventListener("com.cmm.nls.events.lemonadeActivityComplete", d(this, this.activityComplete));
            j.prototype.dispose.call(this)
        },
        isActive: function() {
            var a = !1;
            this._type == u.currentType && (this._type == t.Sugar ? a = !0 : this._type == t.Special && this._name == F.currentRecipe.specialName && (a = !0));
            return a
        },
        crush: function(a) {
            a = a.data;
            if (this.isActive() && this._index == a && 0 != (this._ownerMC._flags & 2))
                if (this._crushCount++, 2 >= this._crushCount) this._actionQueue = new G([new v(this._ownerMC, "crush" + this._crushCount), new s("com.cmm.nls.events.lemonadeEnablePestle")]);
                else {
                    var a = ha.convertToLemonadeItemString(this._type),
                        b = q.get("voiceOverAudio", !0);
                    this._actionQueue = new G([new v(this._ownerMC, "crush" + this._crushCount), new s("com.cmm.nls.events.lemonadeHidePestle"), new y(b, new v(M.getOwnerMC(), a + "Enc")), new s("com.cmm.nls.events.lemonadePour", this._index)])
                }
        },
        disposeItem: function(a) {
            this._name == a.data && this.dispose()
        },
        activityComplete: function() {
            this.dispose()
        },
        __class__: Bb
    });
    var Sb = function(a, b) {
        I.call(this, a, b)
    };
    g["com.cmm.nls.lemonade.LemonadeCup"] = Sb;
    Sb.__name__ = ["com", "cmm", "nls", "lemonade", "LemonadeCup"];
    Sb.__super__ = I;
    Sb.prototype = k(I.prototype, {
        onAdded: function() {
            I.prototype.onAdded.call(this);
            e.addEventListener("com.cmm.nls.events.lemonadePour", d(this, this.pour))
        },
        dispose: function() {
            e.removeEventListener("com.cmm.nls.events.lemonadePour", d(this, this.pour));
            I.prototype.dispose.call(this)
        },
        itemSelected: function(a) {
            this.disposeActionQueue();
            if (this._type == u.currentType) {
                var b = a.data,
                    c = I._amountArrayMap.get(this._type)[b - 1],
                    a = I._correctAmountMap.get(this._type);
                if (this._index == b) {
                    var b = ha.convertToLemonadeItemString(u.currentType),
                        d = I._amountArrayMap.get(this._type)[this._index -
                            1],
                        c = q.get("voiceOverAudio", !0);
                    w.destroy();
                    if (d == a) {
                        var d = !0 == q.get("firstPlayLemonade", !0) ? "com.cmm.nls.events.lemonadeTutorialStart" : "com.cmm.nls.events.lemonadeTutorialSkip",
                            f = "pourwater" + this._index;
                        T.currentSequence = f;
                        this._actionQueue = new G([new R("CA", !1), new s("com.cmm.nls.events.lemonadeAmountCorrect", this._index), new y(c, new v(M.getOwnerMC(), "correct")), new y(c, new v(M.getOwnerMC(), b + a)), new y(c, new v(M.getOwnerMC(), qa.getNextSound("correct2"))), new y(c, new v(M.getOwnerMC(), b + "Pour")), new y(c, new v(M.getOwnerMC(), b + "Pour2")), new y(this._type == u.currentType, new s(d, f))])
                    } else this._actionQueue = new G([new R("WA", !1), new y(c, new v(M.getOwnerMC(), qa.getNextSound("incorrect"))), new y(c, new v(M.getOwnerMC(), "recipe2")), new y(c, new v(M.getOwnerMC(), b + a)), new s("com.cmm.nls.events.lemonadeAmountIncorrect", this._type)])
                } else c == a && (e.dispatchEvent(new r("com.cmm.nls.events.lemonadeHideItem", this._index)), this.hide())
            }
        },
        pour: function(a) {
            this._type == u.currentType && this._index == a.data && (this.hide(), this.disposeActionQueue())
        },
        __class__: Sb
    });
    var Ua = function(a, b) {
        Wa.call(this, a, b)
    };
    g["com.cmm.nls.lemonade.LemonadeCupBtn"] = Ua;
    Ua.__name__ = ["com", "cmm", "nls", "lemonade", "LemonadeCupBtn"];
    Ua.disposeLemonadeItemPointer = function() {
        null != Ua.lemonadeItemPointer && (Ua.lemonadeItemPointer.dispose(), Ua.lemonadeItemPointer = null)
    };
    Ua.__super__ = Wa;
    Ua.prototype = k(Wa.prototype, {
        onPointerDown: function() {
            e.dispatchEvent(new r("com.cmm.nls.events.lemonadeTutorialSkip"));
            this._ownerBtn.disablePointer();
            this._selected ? this.processDown() : e.dispatchEvent(new r("com.cmm.nls.events.lemonadeItemSelected", this._index))
        },
        enableButton: function() {
            this._type == u.currentType && ("tapCorrectAmount" == T.currentSequence || "pourwater1" == T.currentSequence || "pourwater2" == T.currentSequence || "pourwater3" == T.currentSequence) && 0 != (this._ownerBtn._flags & 2) && this._ownerBtn.enablePointer()
        },
        amountCorrect: function(a) {
            this._type == u.currentType && this._index == a.data && (this._selected = !0, !1 == q.get("firstPlayLemonade", !0) ? this._ownerBtn.enablePointer() : this._ownerBtn.disablePointer())
        },
        processDown: function() {
            Ua.disposeLemonadeItemPointer();
            Ua.lemonadeItemPointer = new gd(this._type, this._ownerBtn.symbol.get_name());
            this._ownerBtn.set_visible(!1);
            e.dispatchEvent(new r("com.cmm.nls.events.lemonadeHideItem", this._index))
        },
        __class__: Ua
    });
    var uc = function(a, b) {
        j.call(this, a, b)
    };
    g["com.cmm.nls.lemonade.LemonadeCupItem"] = uc;
    uc.__name__ = ["com", "cmm", "nls", "lemonade", "LemonadeCupItem"];
    uc.__super__ = j;
    uc.prototype = k(j.prototype, {
        get_name: function() {
            return "LemonadeCupItem_45"
        },
        onAdded: function() {
            j.prototype.onAdded.call(this);
            !1 == q.get("voiceOverAudio", !0) && this._ownerMC.hasChildWithName("number") && this._ownerMC.getChildByName("number").set_visible(!1)
        },
        __class__: uc
    });
    var Ic = function(a, b) {
        this._type = t.Ice;
        j.call(this, a, b)
    };
    g["com.cmm.nls.lemonade.LemonadeIceTrays"] = Ic;
    Ic.__name__ = ["com", "cmm", "nls", "lemonade", "LemonadeIceTrays"];
    Ic.__super__ = j;
    Ic.prototype = k(j.prototype, {
        get_name: function() {
            return "LemonadeIceTrays_44"
        },
        onAdded: function() {
            j.prototype.onAdded.call(this);
            e.addEventListener("com.cmm.nls.events.lemonadePour", d(this, this.pour));
            e.addEventListener("com.cmm.nls.events.lemonadeActivityComplete", d(this, this.activityComplete))
        },
        dispose: function() {
            e.removeEventListener("com.cmm.nls.events.lemonadePour", d(this, this.pour));
            e.removeEventListener("com.cmm.nls.events.lemonadeActivityComplete", d(this, this.activityComplete));
            j.prototype.dispose.call(this)
        },
        pour: function() {
            this._type == u.currentType && this._ownerMC.set_visible(!1)
        },
        activityComplete: function() {
            this.dispose()
        },
        __class__: Ic
    });
    var u = function(a, b) {
        j.call(this, a, b);
        this._type = ha.convertToLemonadeItemType(b.type);
        this._name = b.name;
        u._randomItemMap.exists(this._type) || u.initRandomItemMap()
    };
    g["com.cmm.nls.lemonade.LemonadeSelect"] = u;
    u.__name__ = ["com", "cmm", "nls", "lemonade", "LemonadeSelect"];
    u.initRandomItemMap = function() {
        u._randomItemMap.set(t.Lemon, new ja([1, 2, 3]));
        u._randomItemMap.set(t.Water, new ja([1, 2, 3]));
        u._randomItemMap.set(t.Sugar, new ja([1, 2, 3]));
        u._randomItemMap.set(t.Ice, new ja([1, 2, 3]));
        u._randomItemMap.set(t.Special, new ja([1, 2, 3]))
    };
    u.unlock = function() {
        u._locked = !1
    };
    u.__super__ = j;
    u.prototype = k(j.prototype, {
        get_name: function() {
            return "LemonadeSelect_35"
        },
        onAdded: function() {
            j.prototype.onAdded.call(this);
            this._ownerMC.gotoAndStop(1);
            this._ownerMC.set_visible(!1);
            u.currentType = t.Lemon;
            e.addEventListener("com.cmm.nls.events.lemonadeSetRecipe", d(this, this.setRecipe));
            e.addEventListener("com.cmm.nls.events.skip", d(this, this.skip));
            e.addEventListener("com.cmm.nls.events.lemonadeTutorialSkip", d(this, this.tutorialSkip));
            e.addEventListener("com.cmm.nls.events.lemonadeItemSelected", d(this, this.itemSelected));
            e.addEventListener("com.cmm.nls.events.lemonadeIngredientComplete", d(this, this.ingredientComplete));
            e.addEventListener("com.cmm.nls.events.lemonadeWipeComplete", d(this, this.wipeComplete));
            e.addEventListener("com.cmm.nls.events.lemonadeActivityComplete", d(this, this.activityComplete))
        },
        dispose: function() {
            this.disposeActionQueue();
            e.removeEventListener("com.cmm.nls.events.lemonadeSetRecipe", d(this, this.setRecipe));
            e.removeEventListener("com.cmm.nls.events.skip", d(this, this.skip));
            e.removeEventListener("com.cmm.nls.events.lemonadeTutorialSkip", d(this, this.tutorialSkip));
            e.removeEventListener("com.cmm.nls.events.lemonadeItemSelected", d(this, this.itemSelected));
            e.removeEventListener("com.cmm.nls.events.lemonadeIngredientComplete", d(this, this.ingredientComplete));
            e.removeEventListener("com.cmm.nls.events.lemonadeWipeComplete", d(this, this.wipeComplete));
            e.removeEventListener("com.cmm.nls.events.lemonadeActivityComplete", d(this, this.activityComplete));
            j.prototype.dispose.call(this)
        },
        disposeActionQueue: function() {
            null != this._actionQueue && (this._actionQueue.stop(), this._actionQueue = null)
        },
        setRecipe: function() {
            if (this._type != t.Lemon)
                if (this._type == t.Special && F.currentRecipe.specialName != this._name) e.dispatchEvent(new r("com.cmm.nls.events.lemonadeDisposeItem", this._name)), this.dispose();
                else {
                    var a = ha.convertToLemonadeItemString(this._type);
                    for (e.dispatchEvent(new r("com.cmm.nls.events.lemonadeSetRandomAmount", a)); !I.hasCorrectAmount(this._type);) {
                        var b = u._randomItemMap.get(this._type).getNextItem();
                        e.dispatchEvent(new r("com.cmm.nls.events.lemonadeSetRandomAmount", a + b))
                    }
                }
        },
        skip: function() {
            this.disposeActionQueue()
        },
        tutorialSkip: function() {
            this.disposeActionQueue()
        },
        itemSelected: function() {
            this.disposeActionQueue()
        },
        ingredientComplete: function(a) {
            a.data != t.Special && ca.delay(d(this, this.setVisible), 500)
        },
        setVisible: function() {
            null != this._ownerMC && (this._type == u.currentType ? (u._locked = !1, this._type != t.Special ? this._ownerMC.set_visible(!0) : (this._ownerMC.set_visible(this._name == F.currentRecipe.specialName), this._ownerMC.gotoAndStop(1))) : this._ownerMC.set_visible(!1))
        },
        wipeComplete: function() {
            if (0 != (this._ownerMC._flags & 2) && !u._locked) {
                u._locked = !0;
                var a = ha.convertToLemonadeItemString(this._type),
                    b = !0 == q.get("firstPlayLemonade", !0),
                    c = q.get("voiceOverAudio", !0),
                    b = b ? "com.cmm.nls.events.lemonadeTutorialStart" : "com.cmm.nls.events.lemonadeTutorialSkip";
                T.currentSequence = "tapCorrectAmount";
                var d = I.getCorrectAmountForType(this._type);
                w.destroy();
                this.disposeActionQueue();
                this._actionQueue = new G([new Fa(0.1), new y(c, new v(M.getOwnerMC(), a)), new y(c, new v(M.getOwnerMC(), qa.getNextSound("recipe"))), new y(c, new v(M.getOwnerMC(), a + d)), new s(b, "tapCorrectAmount")]);
                ca.delay(u.unlock, 100)
            }
        },
        activityComplete: function() {
            this.dispose()
        },
        __class__: u
    });
    var U = function(a, b) {
        u.call(this, a, b)
    };
    g["com.cmm.nls.lemonade.LemonadeItemCut"] = U;
    U.__name__ = ["com", "cmm", "nls", "lemonade", "LemonadeItemCut"];
    U.__super__ = u;
    U.prototype = k(u.prototype, {
        onAdded: function() {
            u.prototype.onAdded.call(this);
            this._type == t.Lemon && this._ownerMC.set_visible(!0);
            e.addEventListener("com.cmm.nls.events.lemonadeTutorialComplete", d(this, this.tutorialComplete));
            e.addEventListener("com.cmm.nls.events.lemonadeEnableItemSwiping", d(this, this.enableItemSwiping));
            e.addEventListener("com.cmm.nls.events.lemonadeSliceItem", d(this, this.sliceItem));
            e.addEventListener("com.cmm.nls.events.lemonadeSqueezeItemComplete", d(this, this.squeezeItemComplete))
        },
        setRecipe: function() {
            if (this._type == t.Lemon || this._name == F.currentRecipe.specialName) {
                for (e.dispatchEvent(new r("com.cmm.nls.events.lemonadeSetRandomPart", this._name)); !N.hasCorrectPart(this._type);) {
                    var a = u._randomItemMap.get(this._type).getNextItem();
                    2 < a && (a = u._randomItemMap.get(this._type).getNextItem());
                    e.dispatchEvent(new r("com.cmm.nls.events.lemonadeSetRandomPart", this._name + a))
                }
                this._actionQueue = new G([new Fa(0.1), new y(!1 == q.get("firstPlayLemonade", !0), new s("com.cmm.nls.events.lemonadeEnableItemSwiping")), new s("com.cmm.nls.events.lemonadeResetItem")])
            } else e.dispatchEvent(new r("com.cmm.nls.events.lemonadeDisposeItem", this._name)), this.dispose()
        },
        dispose: function() {
            this.removeSwipeFunctionality();
            e.removeEventListener("com.cmm.nls.events.lemonadeTutorialComplete", d(this, this.tutorialComplete));
            e.removeEventListener("com.cmm.nls.events.lemonadeEnableItemSwiping", d(this, this.enableItemSwiping));
            e.removeEventListener("com.cmm.nls.events.lemonadeSliceItem", d(this, this.sliceItem));
            e.removeEventListener("com.cmm.nls.events.lemonadeSqueezeItemComplete", d(this, this.squeezeItemComplete));
            u.prototype.dispose.call(this)
        },
        skip: function(a) {
            this.removeSwipeFunctionality();
            u.prototype.skip.call(this, a)
        },
        wipeComplete: function() {
            this._ownerMC.gotoAndStop(1);
            if (0 != (this._ownerMC._flags & 2)) {
                var a = ha.convertToLemonadeItemString(this._type),
                    b = !0 == q.get("firstPlayLemonade", !0),
                    c = q.get("voiceOverAudio", !0),
                    d = b ? "com.cmm.nls.events.lemonadeTutorialStart" : "com.cmm.nls.events.lemonadeTutorialSkip",
                    e = this.getPlatformSpecificID("half");
                T.currentSequence = e;
                this._actionQueue = new G([new s("com.cmm.nls.events.lemonadeTutorialSkip"), new Fa(0.1), new y(!b, new s("com.cmm.nls.events.lemonadeEnableItemSwiping")), new s("com.cmm.nls.events.lemonadeResetItem"), new y(c, new v(M.getOwnerMC(), a + "Slice")), new y(c, new v(M.getOwnerMC(), a + "Half")), new s(d, e)])
            }
        },
        isActive: function() {
            var a = !1;
            this._type == u.currentType && (this._type == t.Lemon ? a = !0 : this._type == t.Special && this._name == F.currentRecipe.specialName && (a = !0));
            return a
        },
        tutorialComplete: function() {
            this.isActive() && ("half" == T.currentSequence || T.currentSequence == this.getPlatformSpecificID("half")) && e.dispatchEvent(new r("com.cmm.nls.events.lemonadeEnableItemSwiping"))
        },
        enableItemSwiping: function() {
            this.isActive() && this.addSwipeFunctionality()
        },
        sliceItem: function() {
            this.isActive() && this.removeSwipeFunctionality()
        },
        squeezeItemComplete: function() {
            this.isActive() && (this._type == t.Lemon ? "set2" != this._ownerMC.get_currentFrameLabel() && (this._ownerMC.gotoAndStop("set2"), this._actionQueue = new G([new s("com.cmm.nls.events.lemonadeTutorialStart", "lemonAnother"), new v(this._ownerMC, "set2"), new Fa(0.1), new s("com.cmm.nls.events.lemonadeEnableItemSwiping"), new s("com.cmm.nls.events.lemonadeResetItem")])) : this._actionQueue = new G([new s("com.cmm.nls.events.lemonadePourComplete")]))
        },
        addSwipeFunctionality: function() {
            var a = this;
            this.removeSwipeFunctionality();
            U._downSignalConnection = p._platform.getPointer().down.connect(function() {
                U._swipeStarted = !1;
                U._swipeStartPoint = new oa(p._platform.getPointer().get_x(), p._platform.getPointer().get_y());
                U._swipeStamp = (new Date).getTime() / 1E3;
                U._swipeStartTimer = ca.delay(d(a, a.swipeStartCheck), U._swipeScrollDelayInMSec / 2 | 0)
            });
            U._upSignalConnection = p._platform.getPointer().up.connect(function() {
                0 != (O.instance.get_gameLayer()._flags & 4) && a.swipeCheck()
            });
            U._moveSignalConnection = p._platform.getPointer().move.connect(function() {
                null == U._swipeStartPoint || 10 > Math.abs(p._platform.getPointer().get_y() - U._swipeStartPoint.y) || (U._swipeStarted = !0, null != U._swipeStartPoint && Math.abs(p._platform.getPointer().get_x() - U._swipeStartPoint.x) > U._xSwipeMax && a.swipeFailHandler())
            })
        },
        removeSwipeFunctionality: function() {
            null != U._downSignalConnection && (U._downSignalConnection.dispose(), U._downSignalConnection = null);
            null != U._upSignalConnection && (U._upSignalConnection.dispose(), U._upSignalConnection = null);
            null != U._moveSignalConnection && (U._moveSignalConnection.dispose(), U._moveSignalConnection = null)
        },
        swipeCheck: function() {
            0 != (O.instance.get_gameLayer()._flags & 4) && (this.stopSwipeTimers(), null != U._swipeStartPoint && (e.dispatchEvent(new r("com.cmm.nls.events.lemonadeItemSwipeCheck", U._swipeStartPoint)), U._swipeStartPoint = null))
        },
        swipeStartCheck: function() {
            U._swipeStartTimer = null;
            !1 == U._swipeStarted && this.swipeFailHandler()
        },
        swipeFailHandler: function() {
            this.stopSwipeTimers();
            null != U._swipeStartPoint && (U._swipeStartPoint = null, e.dispatchEvent(new Nb("swipeAborted")))
        },
        stopSwipeTimers: function() {
            null != U._swipeStartTimer && (U._swipeStartTimer.stop(), U._swipeStartTimer = null);
            null != U._swipeCompleteTimer && (U._swipeCompleteTimer.stop(), U._swipeCompleteTimer = null)
        },
        getPlatformSpecificID: function(a) {
            if (n.get_isMobile()) {
                if (n.get_isMobile()) return a + "Mobile"
            } else return a + "Desktop";
            return a
        },
        __class__: U
    });
    var gd = function(a, b) {
        this.type = a;
        this.mc = L.createMovieClip(b);
        this.symbolNameButton = b;
        this.startDrag();
        this.disposeSignalConnections();
        this._moveSignalConnection = p._platform.getPointer().move.connect(d(this, this.onPointerMove));
        this._upSignalConnection = p._platform.getPointer().up.connect(d(this, this.onPointerUp));
        gd.instance = this
    };
    g["com.cmm.nls.lemonade.LemonadeItemPointer"] = gd;
    gd.__name__ = ["com", "cmm", "nls", "lemonade", "LemonadeItemPointer"];
    gd.prototype = {
        dispose: function() {
            gd.instance = null;
            S.setNormalCursor();
            null != this._actionQueue && (this._actionQueue.stop(), this._actionQueue = null);
            null != this.mc && this.mc.dispose();
            this.disposeSignalConnections();
            cb["delete"](this)
        },
        disposeSignalConnections: function() {
            null != this._moveSignalConnection && (this._moveSignalConnection.dispose(), this._moveSignalConnection = null);
            null != this._upSignalConnection && (this._upSignalConnection.dispose(), this._upSignalConnection = null)
        },
        startDrag: function() {
            S.setCustomCursor(this.mc);
            S.gotoToDefaultState()
        },
        onPointerMove: function(a) {
            a.viewX > 605 * X.get_canvasScale() && (Ua.disposeLemonadeItemPointer(), this._actionQueue = new G([new s("com.cmm.nls.events.lemonadeTutorialSkip"), new s("com.cmm.nls.events.lemonadePour")]), this.dispose())
        },
        onPointerUp: function() {},
        __class__: gd
    };
    var t = g["com.cmm.nls.lemonade.LemonadeItemType"] = {
        __ename__: ["com", "cmm", "nls", "lemonade", "LemonadeItemType"],
        __constructs__: ["Lemon", "Water", "Sugar", "Ice", "Special"]
    };
    t.Lemon = ["Lemon", 0];
    t.Lemon.toString = m;
    t.Lemon.__enum__ = t;
    t.Water = ["Water", 1];
    t.Water.toString = m;
    t.Water.__enum__ = t;
    t.Sugar = ["Sugar", 2];
    t.Sugar.toString = m;
    t.Sugar.__enum__ = t;
    t.Ice = ["Ice", 3];
    t.Ice.toString = m;
    t.Ice.__enum__ = t;
    t.Special = ["Special", 4];
    t.Special.toString = m;
    t.Special.__enum__ = t;
    var Jc = function(a, b) {
        this._currentPart = "";
        this._currentAmount = 0;
        j.call(this, a, b)
    };
    g["com.cmm.nls.lemonade.LemonadeNumber"] = Jc;
    Jc.__name__ = ["com", "cmm", "nls", "lemonade", "LemonadeNumber"];
    Jc.__super__ = j;
    Jc.prototype = k(j.prototype, {
        get_name: function() {
            return "LemonadeNumber_42"
        },
        onAdded: function() {
            j.prototype.onAdded.call(this);
            this._currentType = t.Lemon;
            e.addEventListener("com.cmm.nls.events.lemonadeSetRecipe", d(this, this.setRecipe));
            e.addEventListener("com.cmm.nls.events.lemonadeAmountCorrect", d(this, this.amountCorrect));
            e.addEventListener("com.cmm.nls.events.lemonadeStopBurst", d(this, this.stopBurst));
            e.addEventListener("com.cmm.nls.events.lemonadeIngredientComplete", d(this, this.ingredientComplete));
            e.addEventListener("com.cmm.nls.events.lemonadeActivityComplete", d(this, this.activityComplete))
        },
        setRecipe: function() {
            this._currentAmount = 3;
            this._currentPart = "half";
            q.get("voiceOverAudio", !0) ? this.clearNumber() : this.setNumber()
        },
        clearNumber: function() {
            if (null != this._ownerMC)
                for (var a = 0, b = this._ownerMC.getChildren(); a < b.length;) {
                    var c = b[a];
                    ++a;
                    c.set_visible(!1)
                }
        },
        setNumber: function() {
            if (null != this._ownerMC)
                for (var a = 0, b = this._ownerMC.getChildren(); a < b.length;) {
                    var c = b[a];
                    ++a;
                    var d = c.get_instanceName(),
                        e = "";
                    if ("" != this._currentPart) switch (this._currentPart) {
                        case "half":
                            e = "texture_numberhalf";
                            break;
                        case "quarter":
                            e = "texture_numberquarter";
                            break;
                        case "third":
                            e = "texture_numberthird"
                    } else e = "texture_number" + this._currentAmount;
                    c.set_visible(d == e)
                }
        },
        dispose: function() {
            e.removeEventListener("com.cmm.nls.events.lemonadeSetRecipe", d(this, this.setRecipe));
            e.removeEventListener("com.cmm.nls.events.lemonadeAmountCorrect", d(this, this.amountCorrect));
            e.removeEventListener("com.cmm.nls.events.lemonadeStopBurst", d(this, this.stopBurst));
            e.removeEventListener("com.cmm.nls.events.lemonadeIngredientComplete", d(this, this.ingredientComplete));
            e.removeEventListener("com.cmm.nls.events.lemonadeActivityComplete", d(this, this.activityComplete));
            j.prototype.dispose.call(this)
        },
        amountCorrect: function() {
            ca.delay(d(this, this.setNumber), 500)
        },
        stopBurst: function() {
            this.clearNumber()
        },
        ingredientComplete: function(a) {
            if (null != a.data) switch (this._currentPart = "", a.data[1]) {
                case 0:
                    this._currentType = t.Water;
                    this._currentAmount = F.currentRecipe.water;
                    break;
                case 1:
                    this._currentType = t.Sugar;
                    this._currentAmount = F.currentRecipe.sugar;
                    break;
                case 2:
                    this._currentType = t.Ice;
                    this._currentAmount = F.currentRecipe.ice;
                    break;
                case 3:
                    this._currentType = t.Special;
                    this._currentAmount = F.currentRecipe.specialAmount;
                    this._currentPart = F.currentRecipe.specialPart;
                    break;
                case 4:
                    this._currentType = t.Special, this._currentAmount = -1
            }
            a = ha.convertToLemonadeItemString(this._currentType);
            this._currentType == t.Sugar || this._currentType == t.Ice || "lavender" == a || "blueberries" == a || "chocolate" == a || "mixedfruit" == a || !1 == q.get("voiceOverAudio") ? ca.delay(d(this, this.setNumber), 500) : ca.delay(d(this, this.clearNumber), 500)
        },
        activityComplete: function() {
            this.dispose()
        },
        __class__: Jc
    });
    var Ya = function(a, b) {
        x.call(this, a, b)
    };
    g["com.cmm.nls.lemonade.LemonadePestleCrushBtn"] = Ya;
    Ya.__name__ = ["com", "cmm", "nls", "lemonade", "LemonadePestleCrushBtn"];
    Ya.getTimesCrushed = function() {
        return Ya.timesCrushed
    };
    Ya.__super__ = x;
    Ya.prototype = k(x.prototype, {
        get_name: function() {
            return "LemonadePestleCrushBtn_41"
        },
        onAdded: function() {
            x.prototype.onAdded.call(this);
            this._ownerBtn.set_visible(!1);
            this._ownerBtn.disablePointer();
            this._index = V.replace(this._ownerMC.get_instanceName(), "btn_pestle_crush", "");
            var a = this._ownerMC.get_parent();
            this._name = V.replace(a.get_className(), "mc_", "");
            this._name = V.replace(this._name, "Select", "");
            e.addEventListener("com.cmm.nls.events.lemonadeTutorialComplete", d(this, this.tutorialComplete));
            e.addEventListener("com.cmm.nls.events.lemonadeShowPestle", d(this, this.showPestle));
            e.addEventListener("com.cmm.nls.events.lemonadeEnablePestle", d(this, this.enablePestle));
            e.addEventListener("com.cmm.nls.events.lemonadeHidePestle", d(this, this.hidePestle));
            e.addEventListener("com.cmm.nls.events.lemonadeIngredientComplete", d(this, this.ingredientComplete));
            e.addEventListener("com.cmm.nls.events.lemonadeActivityComplete", d(this, this.activityComplete))
        },
        dispose: function() {
            e.removeEventListener("com.cmm.nls.events.lemonadeTutorialComplete", d(this, this.tutorialComplete));
            e.removeEventListener("com.cmm.nls.events.lemonadeShowPestle", d(this, this.showPestle));
            e.removeEventListener("com.cmm.nls.events.lemonadeEnablePestle", d(this, this.enablePestle));
            e.removeEventListener("com.cmm.nls.events.lemonadeHidePestle", d(this, this.hidePestle));
            e.removeEventListener("com.cmm.nls.events.lemonadeIngredientComplete", d(this, this.ingredientComplete));
            e.removeEventListener("com.cmm.nls.events.lemonadeActivityComplete", d(this, this.activityComplete));
            x.prototype.dispose.call(this)
        },
        tutorialComplete: function() {
            0 != (this._ownerBtn._flags & 2) && ("sugarcubes1" == T.currentSequence || "sugarcubes2" == T.currentSequence || "sugarcubes3" == T.currentSequence) && this._ownerBtn.enablePointer()
        },
        showPestle: function(a) {
            var b = ha.convertToLemonadeItemString(u.currentType);
            this._index == a.data && this._name == b && (i.play("crusher"), this._ownerBtn.set_visible(!0), !1 == q.get("firstPlayLemonade", !0) ? this._ownerBtn.enablePointer() : this._ownerBtn.disablePointer(), this._ownerBtn.set_upLabel("hl"), this._ownerBtn.set_downLabel("hl"), this._ownerBtn.set_overLabel("hl"), this._ownerBtn.gotoAndStop("hl"))
        },
        enablePestle: function() {
            0 != (this._ownerBtn._flags & 2) && ("sugarcubes1" == T.currentSequence || "sugarcubes2" == T.currentSequence || "sugarcubes3" == T.currentSequence) && this._ownerBtn.enablePointer()
        },
        hidePestle: function() {
            this._ownerBtn.set_visible(!1)
        },
        onPointerDown: function() {
            Ya.timesCrushed++;
            i.play("crusher" + Ya.timesCrushed);
            this._ownerBtn.disablePointer();
            this._ownerBtn.set_upLabel("up");
            this._ownerBtn.set_downLabel("down");
            this._ownerBtn.set_overLabel("over");
            this._ownerBtn.gotoAndStop("up");
            3 <= Ya.timesCrushed && (w.destroy(), T.currentSequence = "");
            e.dispatchEvent(new r("com.cmm.nls.events.lemonadeTutorialSkip"));
            e.dispatchEvent(new r("com.cmm.nls.events.lemonadeCrushItem", this._index))
        },
        ingredientComplete: function() {
            this._ownerBtn.set_visible(!1);
            Ya.timesCrushed = 0
        },
        activityComplete: function() {
            this.dispose()
        },
        __class__: Ya
    });
    var bb = function(a, b) {
        this._itemPartsSqueezed = 0;
        j.call(this, a, b);
        bb._instance = this
    };
    g["com.cmm.nls.lemonade.LemonadePitcher"] = bb;
    bb.__name__ = ["com", "cmm", "nls", "lemonade", "LemonadePitcher"];
    bb.getStirStartFrame = function() {
        var a;
        a = ha.convertToLemonadeItemString(u.currentType) + "stir";
        a = bb._instance._ownerMC.getFrameFromLabel(a);
        bb._instance._ownerMC.gotoAndStop(a);
        return a
    };
    bb.getStirEndFrame = function() {
        var a = bb._instance._ownerMC.get_totalFrames(),
            a = ha.convertToLemonadeItemString(u.currentType) + "stirfinish";
        return a = bb._instance._ownerMC.getFrameFromLabel(a) - 1
    };
    bb.__super__ = j;
    bb.prototype = k(j.prototype, {
        get_name: function() {
            return "LemonadePitcher_40"
        },
        onAdded: function() {
            j.prototype.onAdded.call(this);
            this._ownerMC.gotoAndStop(1);
            e.addEventListener("com.cmm.nls.events.skip", d(this, this.skip));
            e.addEventListener("com.cmm.nls.events.lemonadeSqueezeItem", d(this, this.squeezeItem));
            e.addEventListener("com.cmm.nls.events.lemonadePour", d(this, this.pour));
            e.addEventListener("com.cmm.nls.events.lemonadePourItemIntoPitcher", d(this, this.pourItemIntoPitcher));
            e.addEventListener("com.cmm.nls.events.lemonadePourComplete", d(this, this.pourComplete));
            e.addEventListener("com.cmm.nls.events.lemonadeStir", d(this, this.stir));
            e.addEventListener("com.cmm.nls.events.lemonadeIngredientComplete", d(this, this.ingredientComplete));
            e.addEventListener("com.cmm.nls.events.lemonadeActivityComplete", d(this, this.activityComplete))
        },
        dispose: function() {
            null != this._actionQueue && (this._actionQueue.stop(), this._actionQueue = null);
            e.removeEventListener("com.cmm.nls.events.skip", d(this, this.skip));
            e.removeEventListener("com.cmm.nls.events.lemonadeSqueezeItem", d(this, this.squeezeItem));
            e.removeEventListener("com.cmm.nls.events.lemonadePour", d(this, this.pour));
            e.removeEventListener("com.cmm.nls.events.lemonadePourItemIntoPitcher", d(this, this.pourItemIntoPitcher));
            e.removeEventListener("com.cmm.nls.events.lemonadePourComplete", d(this, this.pourComplete));
            e.removeEventListener("com.cmm.nls.events.lemonadeStir", d(this, this.stir));
            e.removeEventListener("com.cmm.nls.events.lemonadeIngredientComplete", d(this, this.ingredientComplete));
            e.removeEventListener("com.cmm.nls.events.lemonadeActivityComplete", d(this, this.activityComplete));
            j.prototype.dispose.call(this)
        },
        skip: function() {
            ca.delay(d(this, this.fillPitcher), 500)
        },
        fillPitcher: function() {
            null != this._ownerMC && (u.currentType == t.Water ? this._ownerMC.playAnimationSequence("lemon6") : u.currentType == t.Sugar ? this._ownerMC.gotoAndStop("waterfinish") : u.currentType == t.Ice ? this._ownerMC.gotoAndStop("sugarstirfinish") : u.currentType == t.Special && this._ownerMC.gotoAndStop("icestirfinish"))
        },
        squeezeItem: function() {
            var a = ha.convertToLemonadeItemString(u.currentType);
            this._itemPartsSqueezed++;
            this._ownerMC.labelExists(a + this._itemPartsSqueezed) && this._ownerMC.playAnimationSequence(a + this._itemPartsSqueezed)
        },
        pour: function() {
            var a = ha.convertToLemonadeItemString(u.currentType);
            if ((u.currentType == t.Water || "cherry" == a || "carrot" == a) && this._ownerMC.labelExists(a)) this._actionQueue = new G([new v(this._ownerMC, a), new s("com.cmm.nls.events.lemonadePourComplete"), new v(this._ownerMC, a + "finish")])
        },
        pourItemIntoPitcher: function() {
            var a = ha.convertToLemonadeItemString(u.currentType);
            if (u.currentType == t.Sugar || "lavender" == a || "blueberries" == a || "chocolate" == a) this._actionQueue = new G([new y("chocolate" != a, new R("addSugar", !1)), new v(this._ownerMC, a)])
        },
        pourComplete: function() {
            var a = ha.convertToLemonadeItemString(u.currentType);
            if (u.currentType == t.Ice || "mixedfruit" == a) this._actionQueue = new G([new v(this._ownerMC, a)])
        },
        stir: function(a) {
            this._ownerMC.gotoAndStop(a.data);
            a = ha.convertToLemonadeItemString(u.currentType);
            this.disposeActionQueue();
            this._actionQueue = new G([new v(this._ownerMC, a + "stir"), new s("com.cmm.nls.events.lemonadeStirComplete")])
        },
        disposeActionQueue: function() {
            null != this._actionQueue && (this._actionQueue.stop(), this._actionQueue = null)
        },
        ingredientComplete: function() {
            this._itemPartsSqueezed = 0;
            ca.delay(d(this, this.fillPitcher), 500)
        },
        activityComplete: function() {
            this.dispose()
        },
        __class__: bb
    });
    var Db = function(a, b) {
        j.call(this, a, b);
        this._type = ha.convertToLemonadeItemType(b.type)
    };
    g["com.cmm.nls.lemonade.LemonadePlates"] = Db;
    Db.__name__ = ["com", "cmm", "nls", "lemonade", "LemonadePlates"];
    Db.__super__ = j;
    Db.prototype = k(j.prototype, {
        get_name: function() {
            return "LemonadePlates_39"
        },
        onAdded: function() {
            j.prototype.onAdded.call(this);
            this._index = "" != V.replace(this._ownerMC.get_instanceName(), "plate", "") ? this._index : 0;
            e.addEventListener("com.cmm.nls.events.lemonadeHideItem", d(this, this.hideItem));
            e.addEventListener("com.cmm.nls.events.lemonadeIngredientComplete", d(this, this.ingredientComplete));
            e.addEventListener("com.cmm.nls.events.lemonadeActivityComplete", d(this, this.activityComplete))
        },
        dispose: function() {
            e.removeEventListener("com.cmm.nls.events.lemonadeHideItem", d(this, this.hideItem));
            e.removeEventListener("com.cmm.nls.events.lemonadeIngredientComplete", d(this, this.ingredientComplete));
            e.removeEventListener("com.cmm.nls.events.lemonadeActivityComplete", d(this, this.activityComplete));
            j.prototype.dispose.call(this)
        },
        hideItem: function(a) {
            this._type == u.currentType && (null == a.data || this._index == a.data) && this._ownerMC.set_visible(!1)
        },
        show: function() {
            null != this._ownerMC && this._ownerMC.set_visible(!0)
        },
        ingredientComplete: function(a) {
            a.data != t.Special && ca.delay(d(this, this.show), 500)
        },
        activityComplete: function() {
            this.dispose()
        },
        __class__: Db
    });
    var Kc = function(a, b) {
        j.call(this, a, b)
    };
    g["com.cmm.nls.lemonade.LemonadeShadow"] = Kc;
    Kc.__name__ = ["com", "cmm", "nls", "lemonade", "LemonadeShadow"];
    Kc.__super__ = j;
    Kc.prototype = k(j.prototype, {
        get_name: function() {
            return "LemonadeShadow_29"
        },
        onAdded: function() {
            j.prototype.onAdded.call(this);
            this._index = V.replace(this._ownerMC.get_instanceName(), "shadow", "");
            e.addEventListener("com.cmm.nls.events.lemonadeHideItem", d(this, this.hide));
            e.addEventListener("com.cmm.nls.events.lemonadePour", d(this, this.hide));
            e.addEventListener("com.cmm.nls.events.lemonadeIngredientComplete", d(this, this.ingredientComplete));
            e.addEventListener("com.cmm.nls.events.lemonadeActivityComplete", d(this, this.activityComplete))
        },
        dispose: function() {
            e.removeEventListener("com.cmm.nls.events.lemonadeHideItem", d(this, this.hide));
            e.removeEventListener("com.cmm.nls.events.lemonadePour", d(this, this.hide));
            e.removeEventListener("com.cmm.nls.events.lemonadeIngredientComplete", d(this, this.ingredientComplete));
            e.removeEventListener("com.cmm.nls.events.lemonadeActivityComplete", d(this, this.activityComplete));
            j.prototype.dispose.call(this)
        },
        hide: function(a) {
            this._index == a.data && this._ownerMC.set_visible(!1)
        },
        show: function() {
            null != this._ownerMC && this._ownerMC.set_visible(!0)
        },
        ingredientComplete: function(a) {
            a.data != t.Special && ca.delay(d(this, this.show), 500)
        },
        activityComplete: function() {
            this.dispose()
        },
        __class__: Kc
    });
    var N = function(a, b) {
        I.call(this, a, b);
        N._randomPartMap.exists(this._type) || N.initRandomPartMap();
        N._partArrayMap.exists(this._type) || N.initPartArrayMap()
    };
    g["com.cmm.nls.lemonade.LemonadeSlice"] = N;
    N.__name__ = ["com", "cmm", "nls", "lemonade", "LemonadeSlice"];
    N.initRandomPartMap = function() {
        N._randomPartMap.set(t.Lemon, new ja(["half", "incorrect1", "incorrect2"]));
        N._randomPartMap.set(t.Special, new ja(["half", "incorrect1", "incorrect2"]))
    };
    N.initPartArrayMap = function() {
        N._partArrayMap.set(t.Lemon, []);
        N._partArrayMap.set(t.Special, []);
        for (var a = 0; 2 > a;) a++, N._partArrayMap.get(t.Lemon).push(""), N._partArrayMap.get(t.Special).push("")
    };
    N.getCorrectPartForType = function(a) {
        return N._correctPartMap.get(a)
    };
    N.checkIfPartExists = function(a, b) {
        for (var c = !1, d = 0, e = N._partArrayMap.get(a).length; d < e;) {
            var f = d++;
            b == N._partArrayMap.get(a)[f] && (c = !0)
        }
        return c
    };
    N.hasCorrectPart = function(a) {
        for (var b = !1, c = 0, d = N._partArrayMap.get(a).length; c < d;) {
            var e = c++;
            N._partArrayMap.get(a)[e] == N._correctPartMap.get(a) && (b = !0)
        }
        return b
    };
    N.__super__ = I;
    N.prototype = k(I.prototype, {
        onAdded: function() {
            I.prototype.onAdded.call(this);
            this._ownerMC.gotoAndStop(1);
            this._index = V.replace(this._ownerMC.get_instanceName(), this._name, "");
            N._partArrayMap.get(this._type)[this._index - 1] = "";
            N._slicedItems = 0;
            e.addEventListener("com.cmm.nls.events.lemonadeSetRandomPart", d(this, this.setRandomPart));
            e.addEventListener("com.cmm.nls.events.lemonadeSliceItem", d(this, this.sliceItem));
            e.addEventListener("com.cmm.nls.events.lemonadeHideIncorrectItem", d(this, this.hideIncorrectItem));
            e.addEventListener("com.cmm.nls.events.lemonadeSqueezeItemComplete", d(this, this.squeezeItemComplete));
            e.addEventListener("com.cmm.nls.events.lemonadeResetItem", d(this, this.reset));
            e.addEventListener("com.cmm.nls.events.lemonadeIngredientComplete", d(this, this.ingredientComplete))
        },
        dispose: function() {
            e.removeEventListener("com.cmm.nls.events.lemonadeSetRandomPart", d(this, this.setRandomPart));
            e.removeEventListener("com.cmm.nls.events.lemonadeSliceItem", d(this, this.sliceItem));
            e.removeEventListener("com.cmm.nls.events.lemonadeHideIncorrectItem", d(this, this.hideIncorrectItem));
            e.removeEventListener("com.cmm.nls.events.lemonadeSqueezeItemComplete", d(this, this.squeezeItemComplete));
            e.removeEventListener("com.cmm.nls.events.lemonadeResetItem", d(this, this.reset));
            e.removeEventListener("com.cmm.nls.events.lemonadeIngredientComplete", d(this, this.ingredientComplete));
            I.prototype.dispose.call(this)
        },
        setRecipe: function() {
            N._correctPartMap.set(t.Lemon, "half");
            N._correctPartMap.set(t.Special, F.currentRecipe.specialPart)
        },
        setPart: function() {
            for (var a = ""; !(a = N._randomPartMap.get(this._type).getNextItem(), !N.checkIfPartExists(this._type, a) && this._ownerMC.labelExists(a)););
            N._partArrayMap.get(this._type)[this._index - 1] = a;
            this._ownerMC.gotoAndStop(a);
            this._ownerMC.set_visible(!0)
        },
        setRandomPart: function(a) {
            var a = a.data,
                b = null,
                c = 0;
            V.endsWith(a, "1") || V.endsWith(a, "2") ? (b = a.substring(0, a.length - 1), c = a.substring(a.length - 1, a.length)) : b = a;
            if (this._type == ha.convertToLemonadeItemType(b) || this._name == b)(0 == c || this._index == c) && this.setPart()
        },
        isActive: function() {
            var a = !1;
            this._type == u.currentType && (this._type == t.Lemon ? a = !0 : this._type == t.Special && this._name == F.currentRecipe.specialName && (a = !0));
            return a
        },
        sliceItem: function(a) {
            if (this.isActive() && this._index == a.data) {
                var a = N._partArrayMap.get(this._type)[this._index - 1],
                    b = N._correctPartMap.get(this._type),
                    c = q.get("voiceOverAudio", !0);
                a == b && N._slicedItems++;
                this.disposeActionQueue();
                if (2 > N._slicedItems)
                    if (a == b) w.destroy(), T.currentSequence = "", b = q.get("firstPlayLemonade", !0) ? this._name + "Correct" : this._name + "Correct2", this._actionQueue = new G([new R("slice", !1), new v(this._ownerMC, a + "anim", !1), new R("CA", !1), new s("com.cmm.nls.events.lemonadeAmountCorrect"), new s("com.cmm.nls.events.lemonadeHideIncorrectItem"), new y(c, new v(M.getOwnerMC(), b)), new s("com.cmm.nls.events.lemonadeGrabItemPart", this._index)]);
                    else {
                        var d = 1 == this._index ? 2 : 1,
                            e = q.get("firstPlayLemonade", !0);
                        this._actionQueue = new G([new R("slice", !1), new v(this._ownerMC, a + "anim", !1), new R("WA", !1), new s("com.cmm.nls.events.lemonadeAmountIncorrect", t.Lemon), new y(!e, new s("com.cmm.nls.events.lemonadeEnableItemSwiping", d)), new y(c, new v(M.getOwnerMC(), b + "Incorrect")), new v(this._ownerMC, a + "disappear"), new s("com.cmm.nls.events.lemonadeTutorialSkip"), new y(e, new s("com.cmm.nls.events.lemonadeEnableItemSwiping", d))])
                    }
                else 2 == N._slicedItems ? (c = 1 == this._index ? 2 : 1, this._actionQueue = new G([new R("slice", !1), new v(this._ownerMC, a + "anim"), new s("com.cmm.nls.events.lemonadeEnableItemSwiping", c)])) : 3 == N._slicedItems && (this._actionQueue = new G([new R("slice", !1), new v(this._ownerMC, a + "anim"), new s("com.cmm.nls.events.lemonadeGrabItemPart", 1)]), N._slicedItems = 0)
            }
        },
        hideIncorrectItem: function() {
            if (this.isActive()) {
                var a = N._partArrayMap.get(this._type)[this._index - 1];
                V.startsWith(a, "incorrect") && this._ownerMC.get_currentLabel() != a + "disappear" && this._ownerMC.playAnimationSequence(a + "disappear")
            }
        },
        hideItem: function(a) {
            this.isActive() && this._index == a.data && (a = N._correctPartMap.get(this._type), this._ownerMC.get_currentLabel() == a + "anim" ? this._ownerMC.gotoAndStop(a + "taken") : "quartertaken" == this._ownerMC.get_currentLabel() ? this._ownerMC.gotoAndStop("quarter2taken") : "quarter2taken" == this._ownerMC.get_currentLabel() ? this._ownerMC.gotoAndStop("quarter3taken") : this.hide())
        },
        squeezeItemComplete: function() {
            if (this.isActive() && this._type == t.Lemon && 2 >= this._index) {
                var a = N._correctPartMap.get(this._type);
                N._partArrayMap.get(this._type)[this._index - 1] = a;
                this._ownerMC.gotoAndStop(a);
                this._ownerMC.set_visible(!0)
            }
        },
        reset: function() {
            this.isActive() && this._ownerMC.gotoAndStop(N._partArrayMap.get(this._type)[this._index - 1])
        },
        ingredientComplete: function() {
            N._slicedItems = 0
        },
        __class__: N
    });
    var vc = function(a, b) {
        x.call(this, a, b)
    };
    g["com.cmm.nls.lemonade.LemonadeSqueezeBtn"] = vc;
    vc.__name__ = ["com", "cmm", "nls", "lemonade", "LemonadeSqueezeBtn"];
    vc.__super__ = x;
    vc.prototype = k(x.prototype, {
        get_name: function() {
            return "LemonadeSqueezeBtn_43"
        },
        onAdded: function() {
            x.prototype.onAdded.call(this);
            !1 == q.get("firstPlayLemonade", !0) ? this._ownerBtn.enablePointer() : this._ownerBtn.disablePointer();
            e.addEventListener("com.cmm.nls.events.lemonadeTutorialComplete", d(this, this.enable));
            e.addEventListener("com.cmm.nls.events.lemonadeActivityComplete", d(this, this.activityComplete))
        },
        dispose: function() {
            e.removeEventListener("com.cmm.nls.events.lemonadeTutorialComplete", d(this, this.enable));
            e.removeEventListener("com.cmm.nls.events.lemonadeActivityComplete", d(this, this.activityComplete));
            x.prototype.dispose.call(this)
        },
        onPointerDown: function() {
            e.dispatchEvent(new r("com.cmm.nls.events.lemonadeTutorialSkip"));
            e.dispatchEvent(new r("com.cmm.nls.events.lemonadeItemTapped"))
        },
        enable: function() {
            this._ownerBtn.enablePointer()
        },
        activityComplete: function() {
            this.dispose()
        },
        __class__: vc
    });
    var Lc = function(a, b) {
        j.call(this, a, b)
    };
    g["com.cmm.nls.lemonade.LemonadeStarCorrect"] = Lc;
    Lc.__name__ = ["com", "cmm", "nls", "lemonade", "LemonadeStarCorrect"];
    Lc.__super__ = j;
    Lc.prototype = k(j.prototype, {
        get_name: function() {
            return "LemonadeStarCorrect_38"
        },
        onAdded: function() {
            j.prototype.onAdded.call(this);
            this._index = V.replace(this._ownerMC.get_instanceName(), "correct", "");
            this._ownerMC.gotoAndStop(1);
            this._ownerMC.set_visible(!1);
            e.addEventListener("com.cmm.nls.events.lemonadeAmountCorrect", d(this, this.amountCorrect));
            e.addEventListener("com.cmm.nls.events.lemonadeActivityComplete", d(this, this.activityComplete))
        },
        dispose: function() {
            e.removeEventListener("com.cmm.nls.events.lemonadeAmountCorrect", d(this, this.amountCorrect));
            e.removeEventListener("com.cmm.nls.events.lemonadeActivityComplete", d(this, this.activityComplete));
            j.prototype.dispose.call(this)
        },
        amountCorrect: function(a) {
            this._index == a.data && (this._ownerMC.set_visible(!0), this._ownerMC.playAnimationSequence(null, d(this, this.animComplete)))
        },
        animComplete: function() {
            this._ownerMC.gotoAndStop(1);
            this._ownerMC.set_visible(!1)
        },
        activityComplete: function() {
            this.dispose()
        },
        __class__: Lc
    });
    var tb = function(a, b) {
        this.MAX_MOVE_COUNT = this._scaledMaxMoveCount = 100;
        this._moveCount = 0;
        x.call(this, a, b)
    };
    g["com.cmm.nls.lemonade.LemonadeStirrerBtn"] = tb;
    tb.__name__ = ["com", "cmm", "nls", "lemonade", "LemonadeStirrerBtn"];
    tb.__super__ = x;
    tb.prototype = k(x.prototype, {
        get_name: function() {
            return "LemonadeStirrerBtn_37"
        },
        onAdded: function() {
            x.prototype.onAdded.call(this);
            this._ownerBtn.set_visible(!1);
            this._ownerBtn.disablePointer();
            this._offset = new oa(-625 * A.ASSET_SCALE, -60 * A.ASSET_SCALE);
            e.addEventListener("com.cmm.nls.events.lemonadeTutorialComplete", d(this, this.enable));
            e.addEventListener("com.cmm.nls.events.lemonadeShowStirrer", d(this, this.showStirrer));
            e.addEventListener("com.cmm.nls.events.lemonadeStirComplete", d(this, this.stirComplete));
            e.addEventListener("com.cmm.nls.events.lemonadeIngredientComplete", d(this, this.ingredientComplete));
            e.addEventListener("com.cmm.nls.events.lemonadeActivityComplete", d(this, this.activityComplete));
            this.disposeMoveSignalConnection()
        },
        dispose: function() {
            this.disposeMoveSignalConnection();
            e.removeEventListener("com.cmm.nls.events.lemonadeTutorialComplete", d(this, this.enable));
            e.removeEventListener("com.cmm.nls.events.lemonadeShowStirrer", d(this, this.showStirrer));
            e.removeEventListener("com.cmm.nls.events.lemonadeStirComplete", d(this, this.stirComplete));
            e.removeEventListener("com.cmm.nls.events.lemonadeIngredientComplete", d(this, this.ingredientComplete));
            e.removeEventListener("com.cmm.nls.events.lemonadeActivityComplete", d(this, this.activityComplete));
            x.prototype.dispose.call(this)
        },
        enable: function() {
            "spoonstir" == T.currentSequence && this._ownerBtn.enablePointer()
        },
        showStirrer: function() {
            this._ownerBtn.set_visible(!0);
            !1 == q.get("firstPlayLemonade", !0) ? this._ownerBtn.enablePointer() : this._ownerBtn.disablePointer();
            this._ownerBtn.set_upLabel("hl");
            this._ownerBtn.set_downLabel("hl");
            this._ownerBtn.set_overLabel("hl");
            this._ownerBtn.gotoAndStop("hl");
            this._moveCount = 0
        },
        stirComplete: function() {
            this.stopStir()
        },
        hide: function() {
            null != this._ownerBtn && this._ownerBtn.set_visible(!1)
        },
        ingredientComplete: function() {
            ca.delay(d(this, this.hide), 500)
        },
        onPointerDown: function() {
            this._ownerBtn.disablePointer();
            this._ownerBtn.set_upLabel("up");
            this._ownerBtn.set_downLabel("down");
            this._ownerBtn.set_overLabel("over");
            this._ownerBtn.gotoAndStop("up");
            !i.isSoundFilePlaying("stirVO") && !i.isSoundFilePlaying("finalStirVO") && e.dispatchEvent(new r("com.cmm.nls.events.lemonadeTutorialSkip"));
            this.disposeMoveSignalConnection();
            tb._moveSignalConnection = p._platform.getPointer().move.connect(d(this, this.onPointerMove))
        },
        onPointerMove: function(a) {
            a.viewX > 720 * X.get_canvasScale() && a.viewX < 830 * X.get_canvasScale() && (0 == this._moveCount && (e.dispatchEvent(new r("com.cmm.nls.events.lemonadeStir")), i.play("stir")), this._moveCount++, this._scaledMaxMoveCount = this.MAX_MOVE_COUNT * X.get_canvasScale(), null != this._ownerBtn ? (this._ownerBtn.x.set__(a.viewX / X.get_canvasScale() * A.ASSET_SCALE + this._offset.x), this._ownerBtn.y.set__(this._offset.y)) : this.disposeMoveSignalConnection())
        },
        stopStir: function() {
            this.disposeMoveSignalConnection();
            this.hide();
            this.checkIngredientComplete()
        },
        checkIngredientComplete: function() {
            T.currentSequence = "";
            !i.isSoundFilePlaying("stirVO") && !i.isSoundFilePlaying("finalStirVO") ? (e.dispatchEvent(new r("com.cmm.nls.events.lemonadeTutorialSkip")), e.dispatchEvent(new r("com.cmm.nls.events.lemonadeIngredientComplete", u.currentType))) : ca.delay(d(this, this.checkIngredientComplete), 100)
        },
        onPointerUp: function() {
            this._scaledMaxMoveCount = this.MAX_MOVE_COUNT * X.get_canvasScale();
            this._moveCount < this._scaledMaxMoveCount && (this._ownerBtn.enablePointer(), this.disposeMoveSignalConnection())
        },
        disposeMoveSignalConnection: function() {
            null != tb._moveSignalConnection && (tb._moveSignalConnection.dispose(), tb._moveSignalConnection = null)
        },
        activityComplete: function() {
            this.dispose()
        },
        __class__: tb
    });
    var ta = function(a, b) {
        this._swiped = !1;
        j.call(this, a, b);
        this._type = ha.convertToLemonadeItemType(b.type);
        this._name = b.name
    };
    g["com.cmm.nls.lemonade.LemonadeSwipeTarget"] = ta;
    ta.__name__ = ["com", "cmm", "nls", "lemonade", "LemonadeSwipeTarget"];
    ta.__super__ = j;
    ta.prototype = k(j.prototype, {
        get_name: function() {
            return "LemonadeSwipeTarget_34"
        },
        onAdded: function() {
            j.prototype.onAdded.call(this);
            this._index = V.replace(this._ownerMC.get_instanceName(), this._name, "");
            e.addEventListener("com.cmm.nls.events.lemonadeDisposeItem", d(this, this.disposeItem));
            e.addEventListener("com.cmm.nls.events.lemonadeResetItem", d(this, this.resetItem));
            e.addEventListener("com.cmm.nls.events.lemonadeItemSwipeCheck", d(this, this.swipeCheck));
            e.addEventListener("com.cmm.nls.events.lemonadeActivityComplete", d(this, this.activityComplete))
        },
        dispose: function() {
            this.removeEventListeners();
            j.prototype.dispose.call(this)
        },
        removeEventListeners: function() {
            e.removeEventListener("com.cmm.nls.events.lemonadeDisposeItem", d(this, this.disposeItem));
            e.removeEventListener("com.cmm.nls.events.lemonadeResetItem", d(this, this.resetItem));
            e.removeEventListener("com.cmm.nls.events.lemonadeItemSwipeCheck", d(this, this.swipeCheck));
            e.removeEventListener("com.cmm.nls.events.lemonadeActivityComplete", d(this, this.activityComplete))
        },
        disposeItem: function(a) {
            this._type == t.Special && this._name == a.data && this.dispose()
        },
        isActive: function() {
            var a = !1;
            this._type == u.currentType && (this._type == t.Lemon ? a = !0 : this._type == t.Special && this._name == F.currentRecipe.specialName && (a = !0));
            return a
        },
        resetItem: function(a) {
            if (this.isActive() && (null == a.data || this._index == a.data)) this._swiped = !1
        },
        swipeCheck: function(a) {
            if (this.isActive() && 0 != (this._ownerMC._flags & 2) && !this._swiped && (ta._swipeStartPoint = a.data, a = !1, a = this.checkSwipeOnObject(this._ownerMC.localToGlobal()))) this._swiped = !0, this.onSwipeSuccess(), e.dispatchEvent(new Nb("swipeDetected"))
        },
        checkSwipeOnObject: function(a) {
            var b = !0,
                c = new oa(0 * X.get_canvasScale(), 40 * X.get_canvasScale()),
                d = new oa(p._platform.getPointer().get_x(), p._platform.getPointer().get_y());
            a.x -= c.x;
            a.y -= c.y;
            var e = new oa;
            switch (this._name) {
                case "banana":
                    a.y += 109 * X.get_canvasScale();
                    e = new oa(247 * X.get_canvasScale(), 55 * X.get_canvasScale());
                    break;
                case "cucumber":
                    a.x -= 6 * X.get_canvasScale();
                    a.y += 102 * X.get_canvasScale();
                    e = new oa(259 * X.get_canvasScale(), 62 * X.get_canvasScale());
                    break;
                case "lemon":
                    e = new oa(141 * X.get_canvasScale(), 102 * X.get_canvasScale());
                    break;
                case "pickle":
                    a.x -= 17 * X.get_canvasScale();
                    a.y += 102 * X.get_canvasScale();
                    e = new oa(207 * X.get_canvasScale(), 62 * X.get_canvasScale());
                    break;
                case "watermelon":
                    e = new oa(244 * X.get_canvasScale(), 167 * X.get_canvasScale())
            }
            var c = new oa(a.x + e.x + 2 * c.x, a.y + e.y + 2 * c.y),
                e = d.x - ta._swipeStartPoint.x,
                f = d.y - ta._swipeStartPoint.y,
                g = ta._xSwipeMax * X.get_canvasScale(),
                j = ta._ySwipeMin * X.get_canvasScale();
            ta._swipeStartPoint.x < a.x && d.x < a.x ? b = !1 : ta._swipeStartPoint.x > c.x && d.x > c.x && (b = !1);
            ta._swipeStartPoint.y < a.y && d.y < a.y ? b = !1 : ta._swipeStartPoint.y > c.y && d.y > c.y && (b = !1);
            Math.abs(e) > g && (b = !1);
            Math.abs(f) < j && (b = !1);
            return b
        },
        onSwipeSuccess: function() {
            i.isSoundFilePlaying("lemonAnotherVO") || e.dispatchEvent(new r("com.cmm.nls.events.lemonadeTutorialSkip"));
            e.dispatchEvent(new r("com.cmm.nls.events.lemonadeSliceItem", this._index))
        },
        activityComplete: function() {
            this.dispose()
        },
        __class__: ta
    });
    var Mc = function(a, b) {
        j.call(this, a, b)
    };
    g["com.cmm.nls.lemonade.LemonadeTabletop"] = Mc;
    Mc.__name__ = ["com", "cmm", "nls", "lemonade", "LemonadeTabletop"];
    Mc.__super__ = j;
    Mc.prototype = k(j.prototype, {
        get_name: function() {
            return "LemonadeTabletop_33"
        },
        onAdded: function() {
            j.prototype.onAdded.call(this);
            this.setTable();
            e.addEventListener("com.cmm.nls.events.lemonadeActivityComplete", d(this, this.activityComplete))
        },
        setTable: function() {
            var a = p._platform.getStorage().get("NLS.TABLE");
            "table1" != a && "table2" != a && "table3" != a && "table4" != a && "table5" != a && "table6" != a && "table7" != a && "table8" != a && "table9" != a && (a = "table1");
            for (var b = 0, c = this._ownerMC.getChildren(); b < c.length;) {
                var d = c[b];
                ++b;
                var e = d.get_instanceName();
                d.set_visible(e == a)
            }
        },
        dispose: function() {
            e.removeEventListener("com.cmm.nls.events.lemonadeActivityComplete", d(this, this.activityComplete));
            j.prototype.dispose.call(this)
        },
        activityComplete: function() {
            this.dispose()
        },
        __class__: Mc
    });
    var ac = function(a, b) {
        I.call(this, a, b)
    };
    g["com.cmm.nls.lemonade.LemonadeTray"] = ac;
    ac.__name__ = ["com", "cmm", "nls", "lemonade", "LemonadeTray"];
    ac.__super__ = I;
    ac.prototype = k(I.prototype, {
        itemSelected: function(a) {
            this.disposeActionQueue();
            if (this._type == u.currentType && this._index == a.data) {
                var a = ha.convertToLemonadeItemString(u.currentType),
                    b = I._amountArrayMap.get(this._type)[this._index - 1],
                    c = I._correctAmountMap.get(this._type),
                    d = q.get("voiceOverAudio", !0);
                w.destroy();
                this._actionQueue = b == c ? new G([new R("CA", !1), new s("com.cmm.nls.events.lemonadeAmountCorrect", this._index), new y(d, new v(M.getOwnerMC(), "correct")), new y(d, new v(M.getOwnerMC(), a + c)), new y(d, new v(M.getOwnerMC(), qa.getNextSound("correct2"))), new s("com.cmm.nls.events.lemonadePour", this._index)]) : new G([new R("WA", !1), new y(d, new v(M.getOwnerMC(), qa.getNextSound("incorrect"))), new y(d, new v(M.getOwnerMC(), "recipe2")), new y(d, new v(M.getOwnerMC(), a + c)), new s("com.cmm.nls.events.lemonadeAmountIncorrect", this._type)])
            }
        },
        __class__: ac
    });
    var bc = function(a, b) {
        Wa.call(this, a, b)
    };
    g["com.cmm.nls.lemonade.LemonadeTrayBtn"] = bc;
    bc.__name__ = ["com", "cmm", "nls", "lemonade", "LemonadeTrayBtn"];
    bc.__super__ = Wa;
    bc.prototype = k(Wa.prototype, {
        onAdded: function() {
            Wa.prototype.onAdded.call(this);
            e.addEventListener("com.cmm.nls.events.lemonadePour", d(this, this.pour))
        },
        dispose: function() {
            e.removeEventListener("com.cmm.nls.events.lemonadePour", d(this, this.pour));
            Wa.prototype.dispose.call(this)
        },
        pour: function() {
            this._type == u.currentType && this._ownerBtn.set_visible(!1)
        },
        __class__: bc
    });
    var T = function(a, b) {
        j.call(this, a, b);
        this._isSkipped = !1
    };
    g["com.cmm.nls.lemonade.LemonadeTutorial"] = T;
    T.__name__ = ["com", "cmm", "nls", "lemonade", "LemonadeTutorial"];
    T.__super__ = j;
    T.prototype = k(j.prototype, {
        get_name: function() {
            return "LemonadeTutorial_30"
        },
        onAdded: function() {
            j.prototype.onAdded.call(this);
            this._ownerMC.gotoAndStop(1);
            T.currentSequence = "half";
            this._ownerMC.hasChildWithName("btn_skip") && (this._skip = this._ownerMC.getChildByName("btn_skip"));
            e.addEventListener("com.cmm.common.events.onFocusOut", d(this, this.onFocusOut));
            e.addEventListener("com.cmm.common.events.onFocusIn", d(this, this.onFocusIn));
            e.addEventListener("com.cmm.nls.events.lemonadeTutorialStart", d(this, this.startTutorial));
            e.addEventListener("com.cmm.nls.events.lemonadeTutorialSkip", d(this, this.skip));
            e.addEventListener("com.cmm.nls.events.skip", d(this, this.skip));
            e.addEventListener("com.cmm.nls.events.lemonadeStir", d(this, this.stir));
            e.addEventListener("com.cmm.nls.events.lemonadeActivityComplete", d(this, this.activityComplete))
        },
        startTutorial: function(a) {
            this._isSkipped = !1;
            null != a.data && (T.currentSequence = a.data);
            null != T.currentSequence && 0 < T.currentSequence.length ? (a = q.get("voiceOverAudio", !0), this._ownerMC.labelExists(T.currentSequence) ? this.playTutorial(T.currentSequence) : a && M.getOwnerMC().labelExists(T.currentSequence) ? M.getOwnerMC().playAnimationSequence(T.currentSequence, d(this, this.cleanUp)) : this.cleanUp()) : this.cleanUp()
        },
        playTutorial: function(a) {
            var b = p._platform.getStorage().get("NLS.LEMONADE_TUTORIAL_COMPLETE", !1),
                c = q.get("firstPlayLemonade", !0),
                e = q.get("voiceOverAudio", !0),
                f = a;
            if ("pourwater1" == a || "pourwater2" == a || "pourwater3" == a || "spoonstir" == a || "sugarcubes1" == a || "sugarcubes2" == a || "sugarcubes3" == a) f = "likeThis";
            this._tutorialActions = new G([new y(b && c, new fa(d(this, this.showSkip))), new y(e, new v(M.getOwnerMC(), f, !1)), new y(e && "half" != a || !e && "half" == a, new v(this._ownerMC, a)), new y(e && M.getOwnerMC().labelExists(this.getPlatformSpecificID(f)), new v(M.getOwnerMC(), this.getPlatformSpecificID(f), !1)), new y(this._ownerMC.labelExists(this.getPlatformSpecificID(a)), new v(this._ownerMC, this.getPlatformSpecificID(a))), new fa(d(this, this.cleanUp))])
        },
        showSkip: function() {
            null != this._skip && (this._skip.set_visible(!0), this._isSkipped = !1)
        },
        disposeSkip: function() {
            null != this._skip && (this._skip.dispose(), this._skip = null)
        },
        skip: function() {
            this._isSkipped || (this._isSkipped = !0, null != this._tutorialActions && (this._tutorialActions.stop(), this._tutorialActions = null), null != this._ownerMC && this._ownerMC.gotoAndStop(1), this.cleanUp())
        },
        cleanUp: function() {
            w.destroy();
            i.stopChannel("vo");
            e.dispatchEvent(new r("com.cmm.nls.events.lemonadeTutorialComplete"))
        },
        onFocusOut: function() {
            null != this._tutorialActions && this._tutorialActions.pause()
        },
        onFocusIn: function() {
            null != this._tutorialActions && this._tutorialActions.resume()
        },
        dispose: function() {
            e.removeEventListener("com.cmm.nls.events.lemonadeTutorialSkip", d(this, this.skip));
            e.removeEventListener("com.cmm.nls.events.skip", d(this, this.skip));
            e.removeEventListener("com.cmm.common.events.onFocusIn", d(this, this.onFocusIn));
            e.removeEventListener("com.cmm.common.events.onFocusOut", d(this, this.onFocusOut));
            e.removeEventListener("com.cmm.nls.events.lemonadeTutorialStart", d(this, this.startTutorial));
            e.removeEventListener("com.cmm.nls.events.lemonadeStir", d(this, this.stir));
            e.removeEventListener("com.cmm.nls.events.lemonadeActivityComplete", d(this, this.activityComplete));
            null != this._tutorialActions && (this._tutorialActions.stop(), this._tutorialActions = null);
            null != this._ownerMC && O.instance.get_animLayer().removeChild(this._ownerMC);
            this.disposeSkip();
            j.prototype.dispose.call(this)
        },
        stir: function(a) {
            i.isSoundFilePlaying("LS_62") && this.skip(a)
        },
        activityComplete: function() {
            this.dispose()
        },
        getPlatformSpecificID: function(a) {
            if (n.get_isMobile()) {
                if (n.get_isMobile()) return a + "Mobile"
            } else return a + "Desktop";
            return a
        },
        __class__: T
    });
    var ha = function() {};
    g["com.cmm.nls.lemonade.LemonadeUtils"] = ha;
    ha.__name__ = ["com", "cmm", "nls", "lemonade", "LemonadeUtils"];
    ha.convertToLemonadeItemType = function(a) {
        var b = null;
        switch (a.toLowerCase()) {
            case "ice":
                b = t.Ice;
                break;
            case "lemon":
                b = t.Lemon;
                break;
            case "special":
                b = t.Special;
                break;
            case "sugar":
                b = t.Sugar;
                break;
            case "water":
                b = t.Water
        }
        return b
    };
    ha.convertToLemonadeItemString = function(a) {
        var b = null;
        if (null != a) switch (a[1]) {
            case 0:
                b = "lemon";
                break;
            case 1:
                b = "water";
                break;
            case 2:
                b = "sugar";
                break;
            case 3:
                b = "ice";
                break;
            case 4:
                b = F.currentRecipe.specialName
        }
        return b
    };
    var Nc = function(a, b) {
        j.call(this, a, b)
    };
    g["com.cmm.nls.lemonade.LemonadeWipeTransition"] = Nc;
    Nc.__name__ = ["com", "cmm", "nls", "lemonade", "LemonadeWipeTransition"];
    Nc.__super__ = j;
    Nc.prototype = k(j.prototype, {
        get_name: function() {
            return "LemonadeWipeTransition_28"
        },
        onAdded: function() {
            j.prototype.onAdded.call(this);
            this._ownerMC.gotoAndStop(1);
            this._ownerMC.set_visible(!1);
            e.addEventListener("com.cmm.nls.events.lemonadeIngredientComplete", d(this, this.ingredientComplete));
            e.addEventListener("com.cmm.nls.events.lemonadeActivityComplete", d(this, this.activityComplete))
        },
        dispose: function() {
            null != this._actionQueue && (this._actionQueue.stop(), this._actionQueue = null);
            e.removeEventListener("com.cmm.nls.events.lemonadeIngredientComplete", d(this, this.ingredientComplete));
            e.removeEventListener("com.cmm.nls.events.lemonadeActivityComplete", d(this, this.activityComplete));
            j.prototype.dispose.call(this)
        },
        ingredientComplete: function(a) {
            a.data != t.Special && (this._ownerMC.set_visible(!0), this._actionQueue = new G([new R("wipe", !1), new v(this._ownerMC, null), new s("com.cmm.nls.events.lemonadeWipeComplete")]))
        },
        activityComplete: function() {
            this.dispose()
        },
        __class__: Nc
    });
    var F = function() {};
    g["com.cmm.nls.lemonade.Recipe"] = F;
    F.__name__ = ["com", "cmm", "nls", "lemonade", "Recipe"];
    F.getNextRecipe = function() {
        var a = F._randomAmountMap;
        (null != o.water ? a.existsReserved("water") : a.h.hasOwnProperty("water")) || F.initRandomAmountMap();
        F.initRecipeArray();
        9 == F.recipeArray.getCurrentIndex() && (q.set("lastRecipe", F.recipeArray.getItemAtIndex(9).name), q.set("nextToLastRecipe", F.recipeArray.getItemAtIndex(8).name));
        a = F.recipeArray.getNextItem();
        if (0 == F.recipeArray.getCurrentIndex())
            for (var b = !1;;) {
                b = !1;
                F.recipeArray.getItemAtIndex(0).name == q.get("lastRecipe") ? b = !0 : F.recipeArray.getItemAtIndex(0).name == q.get("nextToLastRecipe") ? b = !0 : F.recipeArray.getItemAtIndex(1).name == q.get("lastRecipe") ? b = !0 : F.recipeArray.getItemAtIndex(1).name == q.get("nextToLastRecipe") && (b = !0);
                if (b) {
                    F.recipeArray.forceShuffle();
                    for (a = 0; 10 > a;) a++
                }
                a = F.recipeArray.getCurrentItem();
                if (!b) break
            }
        b = F._randomAmountMap;
        a.water = (null != o.water ? b.getReserved("water") : b.h.water).getNextItem();
        b = F._randomAmountMap;
        a.sugar = (null != o.sugar ? b.getReserved("sugar") : b.h.sugar).getNextItem();
        b = F._randomAmountMap;
        a.ice = (null != o.ice ? b.getReserved("ice") : b.h.ice).getNextItem();
        for (b = !0; !("banana" == a.specialName || "cucumber" == a.specialName || "pickle" == a.specialName || "watermelon" == a.specialName ? (a.specialAmount = 1, b = !0) : (b = F._randomAmountMap, a.specialAmount = (null != o.specialAmount ? b.getReserved("specialAmount") : b.h.specialAmount).getNextItem(), b = F.checkValidAmount(a.specialName, a.specialAmount)), b););
        p._platform.getStorage().set("NLS.RECIPE_ARRAY", F.recipeArray);
        return a
    };
    F.checkValidAmount = function(a, b) {
        var c = !0;
        switch (a) {
            case "blueberries":
                c = 1 <= b ? 10 >= b : !1;
                break;
            case "carrot":
                c = 2 <= b ? 10 >= b : !1;
                break;
            case "cherry":
                c = 2 <= b ? 10 >= b : !1;
                break;
            case "chocolate":
                c = 4 <= b ? 12 >= b : !1;
                break;
            case "ice":
                c = 4 <= b ? 12 >= b : !1;
                break;
            case "lavender":
                c = 1 <= b ? 6 >= b : !1;
                break;
            case "mixedfruit":
                c = 4 <= b ? 12 >= b : !1;
                break;
            case "sugar":
                c = 2 <= b ? 6 >= b : !1;
                break;
            case "water":
                c = 2 <= b ? 10 >= b : !1
        }
        return c
    };
    F.initRecipeArray = function() {
        if (null == F.recipeArray)
            if (null == p._platform.getStorage().get("NLS.RECIPE_ARRAY")) {
                var a = l.getJSON("config", "recipes.json");
                if (null != a) {
                    for (var a = eb.getProperty(a, "recipes"), b = [], c = 0, d = Q.fields(a); c < d.length;) {
                        var e = d[c];
                        ++c;
                        for (var e = Q.getProperty(a, e), f = new F, g = 0, j = Q.fields(e); g < j.length;) {
                            var i = j[g];
                            ++g;
                            var m = Q.getProperty(e, i);
                            switch (i) {
                                case "ice":
                                    f.ice = m;
                                    break;
                                case "name":
                                    f.name = m;
                                    break;
                                case "specialAmount":
                                    f.specialAmount = m;
                                    break;
                                case "specialName":
                                    f.specialName = m;
                                    break;
                                case "specialPart":
                                    f.specialPart = m;
                                    break;
                                case "sugar":
                                    f.sugar = m;
                                    break;
                                case "water":
                                    f.water = m
                            }
                        }
                        b.push(f)
                    }
                    F.recipeArray = new ja(b);
                    p._platform.getStorage().set("NLS.RECIPE_ARRAY", F.recipeArray)
                }
            } else F.recipeArray = p._platform.getStorage().get("NLS.RECIPE_ARRAY")
    };
    F.initRandomAmountMap = function() {
        var a = F._randomAmountMap,
            b = new ja([2, 3, 4, 5, 6, 7, 8, 9, 10]);
        null != o.water ? a.setReserved("water", b) : a.h.water = b;
        a = F._randomAmountMap;
        b = new ja([2, 3, 4, 5, 6]);
        null != o.sugar ? a.setReserved("sugar", b) : a.h.sugar = b;
        a = F._randomAmountMap;
        b = new ja([7, 8, 9, 10, 11, 12]);
        null != o.ice ? a.setReserved("ice", b) : a.h.ice = b;
        a = F._randomAmountMap;
        b = new ja([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
        null != o.specialAmount ? a.setReserved("specialAmount", b) : a.h.specialAmount = b
    };
    F.prototype = {
        __class__: F
    };
    var $b = function(a, b) {
        x.call(this, a, b)
    };
    g["com.cmm.nls.recipeSelect.RecipeSelectBtn"] = $b;
    $b.__name__ = ["com", "cmm", "nls", "recipeSelect", "RecipeSelectBtn"];
    $b.__interfaces__ = [Ed];
    $b.__super__ = x;
    $b.prototype = k(x.prototype, {
        get_name: function() {
            return "RecipeSelectBtn_26"
        },
        onAdded: function() {
            x.prototype.onAdded.call(this);
            this._index = V.replace(this._ownerMC.get_instanceName(), "btn_recipeSelect", "");
            this.setRandomRecipe();
            this._recipeLayer = this._ownerSprite.getChildByName(this._recipe.name);
            this._hl = this._ownerSprite.getChildByName(this._recipe.name + "hl");
            null != this._hl && (this.highlightOff(), !0 == q.get("firstPlayRecipe", !0) && this._ownerBtn.disablePointer(), e.addEventListener("com.cmm.nls.events.recipeEnableButtons", d(this, this.enable)), e.addEventListener("com.cmm.nls.events.recipePlayVo", d(this, this.playLemonadeVO)), e.addEventListener("com.cmm.nls.events.recipeSelected", d(this, this.disable)))
        },
        dispose: function() {
            null != this._audioHL && this._audioHL.dispose();
            null != this._actionQueue && (this._actionQueue.stop(), this._actionQueue = null);
            e.removeEventListener("com.cmm.nls.events.recipeEnableButtons", d(this, this.enable));
            e.removeEventListener("com.cmm.nls.events.recipePlayVo", d(this, this.playLemonadeVO));
            e.removeEventListener("com.cmm.nls.events.recipeSelected", d(this, this.disable));
            x.prototype.dispose.call(this)
        },
        onPointerClick: function(a) {
            this._ownerBtn.set_pointerEnabled(!1);
            e.dispatchEvent(new r("com.cmm.nls.events.recipeSelected", this._recipe));
            this.highlightOn();
            x.prototype.onPointerClick.call(this, a)
        },
        onPointerOver: function(a) {
            0 == (this._hl._flags & 2) && x.prototype.onPointerOver.call(this, a)
        },
        onPointerOut: function(a) {
            0 == (this._hl._flags & 2) && x.prototype.onPointerOut.call(this, a)
        },
        setRandomRecipe: function() {
            this._recipe = F.getNextRecipe();
            for (var a = 0, b = this._ownerMC.getChildren(); a < b.length;) {
                var c = b[a];
                ++a;
                var d = c.get_instanceName();
                c.set_visible(d == this._recipe.name)
            }
        },
        highlightOn: function() {
            this._hl.set_visible(!0);
            this._recipeLayer.set_visible(!1);
            this._ownerBtn.set_upLabel("hl");
            this._ownerBtn.set_downLabel("hl");
            this._ownerBtn.set_overLabel("hl");
            this._ownerBtn.gotoAndStop("hl")
        },
        highlightOff: function() {
            this._hl.set_visible(!1);
            this._recipeLayer.set_visible(!0);
            this._ownerBtn.set_upLabel("up");
            this._ownerBtn.set_downLabel("down");
            this._ownerBtn.set_overLabel("over");
            this._ownerBtn.gotoAndStop("up")
        },
        playLemonadeVO: function(a) {
            this._index == a.data && (a = q.get("voiceOverAudio"), this._actionQueue = new G([new fa(d(this, this.highlightOn)), new y(a, new v(db.getOwnerMC(), this._recipe.name + "Lemonade"), new Fa(2)), new fa(d(this, this.highlightOff)), new s("com.cmm.nls.events.recipePlayVoComplete")]))
        },
        enable: function() {
            this._ownerBtn.enablePointer()
        },
        disable: function() {
            this.highlightOff();
            this._ownerBtn.set_pointerEnabled(!1)
        },
        __class__: $b
    });
    var db = function(a, b) {
        j.call(this, a, b);
        db._instance = this
    };
    g["com.cmm.nls.recipeSelect.RecipeSelectCharacter"] = db;
    db.__name__ = ["com", "cmm", "nls", "recipeSelect", "RecipeSelectCharacter"];
    db.getOwnerMC = function() {
        return db._instance._ownerMC
    };
    db.__super__ = j;
    db.prototype = k(j.prototype, {
        get_name: function() {
            return "RecipeSelectCharacter_25"
        },
        onAdded: function() {
            j.prototype.onAdded.call(this);
            this._ownerMC.gotoAndStop(1);
            w.destroy();
            e.addEventListener("com.cmm.nls.events.recipeSelected", d(this, this.recipeSelected));
            e.addEventListener("com.cmm.nls.events.skip", d(this, this.skip));
            e.addEventListener("com.cmm.nls.events.recipeSelectComplete", d(this, this.recipeSelectComplete));
            var a = q.get("voiceOverAudio", !0);
            this._actionQueue = new G([new Fa(0.5), new y(a, new v(this._ownerMC, "recipeSelect")), new s("com.cmm.nls.events.recipeEnableButtons"), new y(a, new v(this._ownerMC, "recipeSelect2")), new s("com.cmm.nls.events.recipePlayVo", 1), new hb("com.cmm.nls.events.recipePlayVoComplete"), new y(a, new v(this._ownerMC, "recipeSelect3")), new s("com.cmm.nls.events.recipePlayVo", 2), new hb("com.cmm.nls.events.recipePlayVoComplete"), new fa(d(this, this.setTimeout))])
        },
        dispose: function() {
            this.disposeActionQueue();
            e.removeEventListener("com.cmm.nls.events.recipeSelected", d(this, this.recipeSelected));
            e.removeEventListener("com.cmm.nls.events.skip", d(this, this.skip));
            e.removeEventListener("com.cmm.nls.events.recipeSelectComplete", d(this, this.recipeSelectComplete));
            j.prototype.dispose.call(this)
        },
        disposeActionQueue: function() {
            null != this._actionQueue && (this._actionQueue.stop(), this._actionQueue = null)
        },
        setTimeout: function() {
            this._ownerMC.gotoAndStop(1);
            w.destroy();
            w.addPrompt(20, d(this, this.playTimeout));
            w.start()
        },
        playTimeout: function() {
            w.destroy();
            this.disposeActionQueue();
            if (null != this._ownerMC) {
                var a = q.get("voiceOverAudio", !0);
                this._actionQueue = new G([new y(a, new v(this._ownerMC, "recipeSelect2")), new s("com.cmm.nls.events.recipePlayVo", 1), new hb("com.cmm.nls.events.recipePlayVoComplete"), new y(a, new v(this._ownerMC, "recipeSelect3")), new s("com.cmm.nls.events.recipePlayVo", 2), new hb("com.cmm.nls.events.recipePlayVoComplete"), new fa(d(this, this.setTimeout))])
            }
        },
        recipeSelected: function(a) {
            w.destroy();
            this.disposeActionQueue();
            null != a.data && (F.currentRecipe = a.data, q.set("lemonadeName", F.currentRecipe.name));
            a = q.get("voiceOverAudio", !0);
            this._actionQueue = new G([new y(a, new v(this._ownerMC, F.currentRecipe.name + "Lemonade")), new y(a, new v(this._ownerMC, db._randomSoundArray.getNextItem())), new s("com.cmm.nls.events.recipeSelectComplete", F.currentRecipe)])
        },
        skip: function() {
            w.destroy();
            this.disposeActionQueue();
            F.currentRecipe = F.getNextRecipe();
            q.set("lemonadeName", F.currentRecipe.name);
            e.dispatchEvent(new r("com.cmm.nls.events.recipeSelectComplete", F.currentRecipe));
            this.dispose()
        },
        recipeSelectComplete: function() {
            this.dispose()
        },
        __class__: db
    });
    var Fc = function(a, b) {
        j.call(this, a, b)
    };
    g["com.cmm.nls.recipeSelect.RecipeSelectController"] = Fc;
    Fc.__name__ = ["com", "cmm", "nls", "recipeSelect", "RecipeSelectController"];
    Fc.__super__ = j;
    Fc.prototype = k(j.prototype, {
        get_name: function() {
            return "RecipeSelectController_27"
        },
        onAdded: function() {
            j.prototype.onAdded.call(this);
            F.initRecipeArray();
            this._signalConnection.connect1(this._ownerMC.get_pointerDown(), d(this, this.onPointerClick))
        },
        dispose: function() {
            q.set("firstPlayRecipe", !1);
            j.prototype.dispose.call(this)
        },
        onPointerClick: function() {},
        __class__: Fc
    });
    var ob = function(a, b) {
        this._counted = !1;
        j.call(this, a, b)
    };
    g["com.cmm.nls.tickets.Ticket"] = ob;
    ob.__name__ = ["com", "cmm", "nls", "tickets", "Ticket"];
    ob.__super__ = j;
    ob.prototype = k(j.prototype, {
        get_name: function() {
            return "Ticket_24"
        },
        onAdded: function() {
            j.prototype.onAdded.call(this);
            this._counted = !1;
            ob._ticketsCounted = 0;
            var a = V.replace(this._ownerMC.get_parent().get_instanceName(), "mc_ticket_groups", "");
            1 < a.length && (a = V.replace(this._ownerMC.get_parent().get_parent().get_instanceName(), "mc_ticket_groups", ""));
            this._index = a;
            this._hl = this._ownerSprite.getChildByName("hl");
            this._ticket = this._ownerSprite.getChildByName("ticket");
            null != this._hl && this._hl.set_visible(!1);
            !1 == q.get("firstPlayTickets", !0) ? this._ownerMC.enablePointer() : this._ownerMC.disablePointer();
            this._signalConnection.connect1(this._ownerMC.get_pointerDown(), d(this, this.onPointerClick));
            e.addEventListener("com.cmm.nls.events.ticketsHighlightNumber", d(this, this.highlight));
            e.addEventListener("com.cmm.nls.events.ticketsHighlightPlus", d(this, this.unhighlight));
            e.addEventListener("com.cmm.nls.events.ticketsHighlightEquals", d(this, this.unhighlight));
            e.addEventListener("com.cmm.nls.events.ticketsUnhighlight", d(this, this.unhighlight));
            e.addEventListener("com.cmm.nls.events.ticketsTutorialComplete", d(this, this.enable));
            e.addEventListener("com.cmm.nls.events.ticketsAmountSelected", d(this, this.disable));
            e.addEventListener("com.cmm.nls.events.ticketsAmountIncorrect", d(this, this.enable));
            e.addEventListener("com.cmm.nls.events.ticketsActivityComplete", d(this, this.activityComplete))
        },
        dispose: function() {
            e.removeEventListener("com.cmm.nls.events.ticketsHighlightNumber", d(this, this.highlight));
            e.removeEventListener("com.cmm.nls.events.ticketsHighlightPlus", d(this, this.unhighlight));
            e.removeEventListener("com.cmm.nls.events.ticketsHighlightEquals", d(this, this.unhighlight));
            e.removeEventListener("com.cmm.nls.events.ticketsUnhighlight", d(this, this.unhighlight));
            e.removeEventListener("com.cmm.nls.events.ticketsTutorialComplete", d(this, this.enable));
            e.removeEventListener("com.cmm.nls.events.ticketsAmountSelected", d(this, this.disable));
            e.removeEventListener("com.cmm.nls.events.ticketsAmountIncorrect", d(this, this.enable));
            e.removeEventListener("com.cmm.nls.events.ticketsActivityComplete", d(this, this.activityComplete));
            j.prototype.dispose.call(this)
        },
        onPointerClick: function() {
            this._counted || (this._counted = !0, ob._ticketsCounted++, null != this._hl && (this._hl.set_visible(!0), this._ticket.set_visible(!1)), new G([new s("com.cmm.nls.events.ticketsTutorialSkip"), new R("count" + ob._ticketsCounted + "VO")]), ob._ticketsCounted == Ea.total && (Ha.allTicketsCounted = !0))
        },
        highlight: function(a) {
            a = a.data;
            null != this._hl && this._index == a && 0 != (this._ownerMC._flags & 2) && (this._hl.set_visible(!0), this._ticket.set_visible(!1))
        },
        unhighlight: function(a) {
            if (null != this._hl && 0 != (this._ownerMC._flags & 2) && (!this._counted || !0 == a.data)) this._hl.set_visible(!1), this._ticket.set_visible(!0)
        },
        disable: function() {
            this._ownerMC.set_pointerEnabled(!1)
        },
        enable: function() {
            this._ownerMC.set_pointerEnabled(!0)
        },
        activityComplete: function() {
            this.dispose()
        },
        __class__: ob
    });
    var wa = function(a, b) {
        this._index = 0;
        j.call(this, a, b)
    };
    g["com.cmm.nls.tickets.TicketGroup"] = wa;
    wa.__name__ = ["com", "cmm", "nls", "tickets", "TicketGroup"];
    wa.getAmountForIndex = function(a) {
        return wa._amountArray[a - 1]
    };
    wa.__super__ = j;
    wa.prototype = k(j.prototype, {
        get_name: function() {
            return "TicketGroup_23"
        },
        onAdded: function() {
            j.prototype.onAdded.call(this);
            this._index = V.replace(this._ownerMC.get_instanceName(), "mc_ticket_groups", "");
            e.addEventListener("com.cmm.nls.events.ticketsSetAmount", d(this, this.setAmount));
            e.addEventListener("com.cmm.nls.events.ticketsActivityComplete", d(this, this.activityComplete))
        },
        dispose: function() {
            e.removeEventListener("com.cmm.nls.events.ticketsSetAmount", d(this, this.setAmount));
            e.removeEventListener("com.cmm.nls.events.ticketsActivityComplete", d(this, this.activityComplete));
            j.prototype.dispose.call(this)
        },
        setAmount: function(a) {
            if (this._index == a.data) {
                a = 0;
                if (1 == this._index)
                    for (; !(a = wa._randomAmount.getNextItem(), !(a >= Ea.total)););
                else 2 == this._index && (a = Ea.total - wa._amountArray[0]);
                wa._amountArray[this._index - 1] = a;
                for (var b = 0, c = this._ownerMC.getChildren(); b < c.length;) {
                    var d = c[b];
                    ++b;
                    var f = d.get_instanceName();
                    d.set_visible(f == "tickets" + a)
                }
                e.dispatchEvent(new r("com.cmm.nls.events.ticketsAmountSet", this._index))
            }
        },
        activityComplete: function() {
            this.dispose()
        },
        __class__: wa
    });
    var Sc = function(a, b) {
        this._index = 0;
        x.call(this, a, b)
    };
    g["com.cmm.nls.tickets.TicketTotalBtn"] = Sc;
    Sc.__name__ = ["com", "cmm", "nls", "tickets", "TicketTotalBtn"];
    Sc.__super__ = x;
    Sc.prototype = k(x.prototype, {
        get_name: function() {
            return "TicketTotalBtn_21"
        },
        onAdded: function() {
            x.prototype.onAdded.call(this);
            this._index = V.replace(this._ownerMC.get_instanceName(), "mc_number_select", "");
            this._hl = this._ownerSprite.getChildByName("hl");
            this._ownerBtn.set_upLabel("up");
            this._ownerBtn.set_downLabel("down");
            this._ownerBtn.set_overLabel("over");
            this._ownerBtn.gotoAndStop("up");
            !1 == q.get("firstPlayTickets", !0) ? this._ownerBtn.enablePointer() : this._ownerBtn.disablePointer();
            e.addEventListener("com.cmm.nls.events.ticketsTutorialComplete", d(this, this.enable));
            e.addEventListener("com.cmm.nls.events.ticketsHighlightCorrect", d(this, this.highlightCorrect));
            e.addEventListener("com.cmm.nls.events.ticketsAmountCorrect", d(this, this.amountCorrect));
            e.addEventListener("com.cmm.nls.events.ticketsAmountIncorrect", d(this, this.amountIncorrect));
            e.addEventListener("com.cmm.nls.events.ticketsHighlightIncorrect", d(this, this.highlightIncorrect));
            e.addEventListener("com.cmm.nls.events.ticketsActivityComplete", d(this, this.activityComplete))
        },
        dispose: function() {
            e.removeEventListener("com.cmm.nls.events.ticketsTutorialComplete", d(this, this.enable));
            e.removeEventListener("com.cmm.nls.events.ticketsHighlightCorrect", d(this, this.highlightCorrect));
            e.removeEventListener("com.cmm.nls.events.ticketsAmountCorrect", d(this, this.amountCorrect));
            e.removeEventListener("com.cmm.nls.events.ticketsAmountIncorrect", d(this, this.amountIncorrect));
            e.removeEventListener("com.cmm.nls.events.ticketsHighlightIncorrect", d(this, this.highlightIncorrect));
            e.removeEventListener("com.cmm.nls.events.ticketsActivityComplete", d(this, this.activityComplete));
            x.prototype.dispose.call(this)
        },
        onPointerClick: function(a) {
            null != this._ownerBtn && this._ownerBtn.disablePointer();
            e.dispatchEvent(new r("com.cmm.nls.events.ticketsTutorialSkip"));
            e.dispatchEvent(new r("com.cmm.nls.events.ticketsAmountSelected", this._index));
            x.prototype.onPointerClick.call(this, a)
        },
        enable: function() {
            this._ownerBtn.enablePointer()
        },
        highlightCorrect: function(a) {
            this._ownerBtn.disablePointer();
            this._index == a.data ? (this._ownerBtn.set_upLabel("hl"), this._ownerBtn.set_downLabel("hl"), this._ownerBtn.set_overLabel("hl"), this._ownerBtn.gotoAndStop("hl"), this._hl.set_visible(!0)) : (this._ownerBtn.set_upLabel("up"), this._ownerBtn.set_downLabel("down"), this._ownerBtn.set_overLabel("over"), this._ownerBtn.gotoAndStop("up"), this._hl.set_visible(!1))
        },
        amountCorrect: function() {
            this._ownerBtn.disablePointer()
        },
        amountIncorrect: function() {
            this._ownerBtn.enablePointer();
            this._ownerBtn.set_upLabel("up");
            this._ownerBtn.set_downLabel("down");
            this._ownerBtn.set_overLabel("over");
            this._ownerBtn.gotoAndStop("up");
            this._hl.set_visible(!1)
        },
        highlightIncorrect: function(a) {
            this._index == a.data && (this._ownerBtn.set_upLabel("incorrect"), this._ownerBtn.set_downLabel("incorrect"), this._ownerBtn.set_overLabel("incorrect"), this._ownerBtn.gotoAndStop("incorrect"), this._hl.set_visible(!1))
        },
        activityComplete: function() {
            this.dispose()
        },
        __class__: Sc
    });
    var Ea = function(a, b) {
        j.call(this, a, b)
    };
    g["com.cmm.nls.tickets.TicketsActivity"] = Ea;
    Ea.__name__ = ["com", "cmm", "nls", "tickets", "TicketsActivity"];
    Ea.__super__ = j;
    Ea.prototype = k(j.prototype, {
        get_name: function() {
            return "TicketsActivity_20"
        },
        onAdded: function() {
            j.prototype.onAdded.call(this);
            this._ownerMC.gotoAndStop(1);
            Ea.total = Ea._randomTotal.getNextItem();
            e.dispatchEvent(new r("com.cmm.nls.events.ticketsSetAmount", 1));
            e.dispatchEvent(new r("com.cmm.nls.events.ticketsSetAmount", 2));
            for (e.dispatchEvent(new r("com.cmm.nls.events.ticketsSetAmount", 3)); !Ba.hasCorrectAmount();) {
                var a = Ea._randomIndex.getNextItem();
                e.dispatchEvent(new r("com.cmm.nls.events.ticketsSetRandomAmount", a))
            }
            e.addEventListener("com.cmm.nls.events.ticketsAmountSelected", d(this, this.amountSelected));
            e.addEventListener("com.cmm.nls.events.ticketsTutorialComplete", d(this, this.tutorialComplete));
            e.addEventListener("com.cmm.nls.events.ticketsActivityComplete", d(this, this.activityComplete));
            this._signalConnection.connect1(this._ownerMC.get_pointerDown(), d(this, this.onPointerClick));
            this.showTutorial();
            a = q.get("voiceOverAudio", !0);
            this._actionQueue = new G([new Fa(0.5), new y(a, new R("ticketsIntro1VO")), new s("com.cmm.nls.events.ticketsHighlightNumber", 1), new R("tickets" +
                wa.getAmountForIndex(1) + "VO"), new s("com.cmm.nls.events.ticketsHighlightPlus", !1), new R("plusVO"), new s("com.cmm.nls.events.ticketsHighlightNumber", 2), new R("tickets" + wa.getAmountForIndex(2) + "VO"), new s("com.cmm.nls.events.ticketsUnhighlight", !1), new s("com.cmm.nls.events.ticketsTutorialStart")])
        },
        onPointerClick: function() {},
        showTutorial: function() {
            null == this._tutorial && (this._tutorial = L.createMovieClip("mc_tutorial_tickets"), O.instance.get_animLayer().addChild(this._tutorial))
        },
        amountSelected: function() {
            this.disposeActionQueue()
        },
        tutorialComplete: function() {
            this.disposeActionQueue();
            this.setTimeout()
        },
        activityComplete: function() {
            this.dispose()
        },
        setTimeout: function() {
            this.isTutorialActive || (w.destroy(), w.addPrompt(10, d(this, this.playTimeout)), w.start())
        },
        playTimeout: function() {
            w.destroy();
            var a = q.get("voiceOverAudio", !0);
            this._actionQueue = new G([new y(a, new R("ticketsIntro1VO")), new s("com.cmm.nls.events.ticketsHighlightNumber", 1), new R("tickets" + wa.getAmountForIndex(1) + "VO"), new s("com.cmm.nls.events.ticketsHighlightPlus"), new R("plusVO"), new s("com.cmm.nls.events.ticketsHighlightNumber", 2), new R("tickets" + wa.getAmountForIndex(2) + "VO"), new s("com.cmm.nls.events.ticketsUnhighlight"), new s("com.cmm.nls.events.ticketsTutorialStart")])
        },
        disposeActionQueue: function() {
            null != this._actionQueue && (this._actionQueue.stop(), this._actionQueue = null)
        },
        disposeTutorial: function() {
            null != this._tutorial && (this._tutorial.dispose(), this._tutorial = null)
        },
        dispose: function() {
            w.destroy();
            i.stopChannel("vo");
            i.stopChannel("sfx");
            q.set("firstPlayTickets", !1);
            p._platform.getStorage().set("NLS.TICKETS_TUTORIAL_COMPLETE", !0);
            this.disposeActionQueue();
            this.disposeTutorial();
            e.removeEventListener("com.cmm.nls.events.ticketsAmountSelected", d(this, this.amountSelected));
            e.removeEventListener("com.cmm.nls.events.ticketsTutorialComplete", d(this, this.tutorialComplete));
            e.removeEventListener("com.cmm.nls.events.ticketsActivityComplete", d(this, this.activityComplete));
            j.prototype.dispose.call(this)
        },
        __class__: Ea
    });
    var Rc = function(a, b) {
        j.call(this, a, b)
    };
    g["com.cmm.nls.tickets.TicketsEquals"] = Rc;
    Rc.__name__ = ["com", "cmm", "nls", "tickets", "TicketsEquals"];
    Rc.__super__ = j;
    Rc.prototype = k(j.prototype, {
        get_name: function() {
            return "TicketsEquals_19"
        },
        onAdded: function() {
            j.prototype.onAdded.call(this);
            this._hl = this._ownerSprite.getChildByName("hl");
            this._hl.set_visible(!1);
            e.addEventListener("com.cmm.nls.events.ticketsAmountCorrect", d(this, this.amountCorrect));
            e.addEventListener("com.cmm.nls.events.ticketsHighlightNumber", d(this, this.unhighlight));
            e.addEventListener("com.cmm.nls.events.ticketsHighlightPlus", d(this, this.unhighlight));
            e.addEventListener("com.cmm.nls.events.ticketsHighlightEquals", d(this, this.highlight));
            e.addEventListener("com.cmm.nls.events.ticketsActivityComplete", d(this, this.activityComplete))
        },
        dispose: function() {
            e.removeEventListener("com.cmm.nls.events.ticketsAmountCorrect", d(this, this.amountCorrect));
            e.removeEventListener("com.cmm.nls.events.ticketsHighlightNumber", d(this, this.unhighlight));
            e.removeEventListener("com.cmm.nls.events.ticketsHighlightPlus", d(this, this.unhighlight));
            e.removeEventListener("com.cmm.nls.events.ticketsHighlightEquals", d(this, this.highlight));
            e.removeEventListener("com.cmm.nls.events.ticketsActivityComplete", d(this, this.activityComplete));
            j.prototype.dispose.call(this)
        },
        amountCorrect: function() {
            this._hl.set_visible(!0)
        },
        highlight: function() {
            this._hl.set_visible(!0)
        },
        unhighlight: function() {
            this._hl.set_visible(!1)
        },
        activityComplete: function() {
            this.dispose()
        },
        __class__: Rc
    });
    var Oc = function(a, b) {
        this._index = 0;
        j.call(this, a, b)
    };
    g["com.cmm.nls.tickets.TicketsNumberAdd"] = Oc;
    Oc.__name__ = ["com", "cmm", "nls", "tickets", "TicketsNumberAdd"];
    Oc.__super__ = j;
    Oc.prototype = k(j.prototype, {
        get_name: function() {
            return "TicketsNumberAdd_18"
        },
        onAdded: function() {
            j.prototype.onAdded.call(this);
            this._ownerMC.set_visible(!1);
            this._index = V.replace(this._ownerMC.get_instanceName(), "mc_number_add", "");
            this._hl = this._ownerSprite.getChildByName("hl");
            this._hl.set_visible(!1);
            e.addEventListener("com.cmm.nls.events.ticketsAmountSet", d(this, this.amountSet));
            e.addEventListener("com.cmm.nls.events.ticketsAmountCorrect", d(this, this.amountCorrect));
            e.addEventListener("com.cmm.nls.events.ticketsHighlightNumber", d(this, this.highlight));
            e.addEventListener("com.cmm.nls.events.ticketsHighlightPlus", d(this, this.unhighlight));
            e.addEventListener("com.cmm.nls.events.ticketsHighlightEquals", d(this, this.unhighlight));
            e.addEventListener("com.cmm.nls.events.ticketsUnhighlight", d(this, this.unhighlight));
            e.addEventListener("com.cmm.nls.events.ticketsActivityComplete", d(this, this.activityComplete))
        },
        dispose: function() {
            e.removeEventListener("com.cmm.nls.events.ticketsAmountSet", d(this, this.amountSet));
            e.removeEventListener("com.cmm.nls.events.ticketsAmountCorrect", d(this, this.amountCorrect));
            e.removeEventListener("com.cmm.nls.events.ticketsHighlightNumber", d(this, this.highlight));
            e.removeEventListener("com.cmm.nls.events.ticketsHighlightPlus", d(this, this.unhighlight));
            e.removeEventListener("com.cmm.nls.events.ticketsHighlightEquals", d(this, this.unhighlight));
            e.removeEventListener("com.cmm.nls.events.ticketsUnhighlight", d(this, this.unhighlight));
            e.removeEventListener("com.cmm.nls.events.ticketsActivityComplete", d(this, this.activityComplete));
            j.prototype.dispose.call(this)
        },
        amountSet: function(a) {
            this._index == a.data && (this.setNumber(), this._ownerMC.set_visible(!0))
        },
        setNumber: function() {
            for (var a = wa.getAmountForIndex(this._index), b = 0, c = this._ownerMC.getChildren(); b < c.length;) {
                var d = c[b];
                ++b;
                var e = d.get_instanceName();
                d.set_visible(e == a)
            }
        },
        amountCorrect: function() {
            this._hl.set_visible(!0)
        },
        highlight: function(a) {
            this._index == a.data ? this._hl.set_visible(!0) : this._hl.set_visible(!1)
        },
        unhighlight: function() {
            this._hl.set_visible(!1)
        },
        activityComplete: function() {
            this.dispose()
        },
        __class__: Oc
    });
    var Ba = function(a, b) {
        this._index = 0;
        j.call(this, a, b)
    };
    g["com.cmm.nls.tickets.TicketsNumberSelect"] = Ba;
    Ba.__name__ = ["com", "cmm", "nls", "tickets", "TicketsNumberSelect"];
    Ba.checkIfAmountExists = function(a) {
        for (var b = !1, c = 0, d = Ba._amountArray.length; c < d;) {
            var e = c++;
            a == Ba._amountArray[e] && (b = !0)
        }
        return b
    };
    Ba.hasCorrectAmount = function() {
        for (var a = !1, b = 0, c = Ba._amountArray.length; b < c;) {
            var d = b++;
            Ba._amountArray[d] == Ea.total && (a = !0)
        }
        return a
    };
    Ba.__super__ = j;
    Ba.prototype = k(j.prototype, {
        get_name: function() {
            return "TicketsNumberSelect_22"
        },
        onAdded: function() {
            j.prototype.onAdded.call(this);
            this._index = "mc_total" != this._ownerMC.get_parent().get_instanceName() ? V.replace(this._ownerMC.get_parent().get_instanceName(), "mc_number_select", "") : 0;
            this._ownerMC.set_visible(!1);
            e.addEventListener("com.cmm.nls.events.ticketsSetAmount", d(this, this.setAmount));
            e.addEventListener("com.cmm.nls.events.ticketsSetRandomAmount", d(this, this.setAmount));
            e.addEventListener("com.cmm.nls.events.ticketsAmountSelected", d(this, this.amountSelected));
            e.addEventListener("com.cmm.nls.events.ticketsActivityComplete", d(this, this.activityComplete))
        },
        dispose: function() {
            null != this._actionQueue && (this._actionQueue.stop(), this._actionQueue = null);
            e.removeEventListener("com.cmm.nls.events.ticketsSetAmount", d(this, this.setAmount));
            e.removeEventListener("com.cmm.nls.events.ticketsSetRandomAmount", d(this, this.setAmount));
            e.removeEventListener("com.cmm.nls.events.ticketsAmountSelected", d(this, this.amountSelected));
            e.removeEventListener("com.cmm.nls.events.ticketsActivityComplete", d(this, this.activityComplete));
            j.prototype.dispose.call(this)
        },
        setAmount: function(a) {
            if (this._index == a.data) {
                a = 0;
                if (0 < this._index) {
                    for (; !(a = Ba._randomAmount.getNextItem(), !Ba.checkIfAmountExists(a)););
                    Ba._amountArray[this._index - 1] = a
                } else a = Ea.total;
                for (var b = 0, c = this._ownerMC.getChildren(); b < c.length;) {
                    var d = c[b];
                    ++b;
                    var e = d.get_instanceName();
                    "BG" != e && d.set_visible(e == a)
                }
                this._ownerMC.set_visible(!0)
            }
        },
        amountSelected: function(a) {
            this._index == a.data && (w.destroy(), a = Ba._amountArray[this._index - 1], this._actionQueue = a == Ea.total ? new G([new s("com.cmm.nls.events.ticketsHighlightCorrect", this._index), new R("tickets" + a + "VO"), new R("CA", !1), new s("com.cmm.nls.events.ticketsAmountCorrect", this._index), new hc("ticketsCorrectVO"), new s("com.cmm.nls.events.ticketsHighlightNumber", 1), new R("tickets" + wa.getAmountForIndex(1) + "VO"), new s("com.cmm.nls.events.ticketsHighlightPlus", !0), new R("plusVO"), new s("com.cmm.nls.events.ticketsHighlightNumber", 2), new R("tickets" + wa.getAmountForIndex(2) + "VO"), new s("com.cmm.nls.events.ticketsHighlightEquals", !0), new R("equalsVO"), new s("com.cmm.nls.events.ticketsHighlightNumber", 0), new R("tickets" + a + "VO"), new R("allTogetherVO", !1), new R("ticketsSting"), new s("com.cmm.nls.events.ticketsActivityComplete")]) : new G([new s("com.cmm.nls.events.ticketsHighlightIncorrect", this._index), new R("WA", !1), new R("tickets" + a + "VO"), new hc("ticketsIncorrectVO"), new y(!Ha.allTicketsCounted, new v(Ha.getOwnerMC(), "tapTickets")), new s("com.cmm.nls.events.ticketsAmountIncorrect")]))
        },
        activityComplete: function() {
            this.dispose()
        },
        __class__: Ba
    });
    var Qc = function(a, b) {
        j.call(this, a, b)
    };
    g["com.cmm.nls.tickets.TicketsPlus"] = Qc;
    Qc.__name__ = ["com", "cmm", "nls", "tickets", "TicketsPlus"];
    Qc.__super__ = j;
    Qc.prototype = k(j.prototype, {
        get_name: function() {
            return "TicketsPlus_17"
        },
        onAdded: function() {
            j.prototype.onAdded.call(this);
            this._hl = this._ownerSprite.getChildByName("hl");
            this._hl.set_visible(!1);
            e.addEventListener("com.cmm.nls.events.ticketsAmountCorrect", d(this, this.amountCorrect));
            e.addEventListener("com.cmm.nls.events.ticketsHighlightNumber", d(this, this.unhighlight));
            e.addEventListener("com.cmm.nls.events.ticketsHighlightPlus", d(this, this.highlight));
            e.addEventListener("com.cmm.nls.events.ticketsHighlightEquals", d(this, this.unhighlight));
            e.addEventListener("com.cmm.nls.events.ticketsActivityComplete", d(this, this.activityComplete))
        },
        dispose: function() {
            e.removeEventListener("com.cmm.nls.events.ticketsAmountCorrect", d(this, this.amountCorrect));
            e.removeEventListener("com.cmm.nls.events.ticketsHighlightNumber", d(this, this.unhighlight));
            e.removeEventListener("com.cmm.nls.events.ticketsHighlightPlus", d(this, this.highlight));
            e.removeEventListener("com.cmm.nls.events.ticketsHighlightEquals", d(this, this.unhighlight));
            e.removeEventListener("com.cmm.nls.events.ticketsActivityComplete", d(this, this.activityComplete));
            j.prototype.dispose.call(this)
        },
        amountCorrect: function() {
            this._hl.set_visible(!0)
        },
        highlight: function() {
            this._hl.set_visible(!0)
        },
        unhighlight: function() {
            this._hl.set_visible(!1)
        },
        activityComplete: function() {
            this.dispose()
        },
        __class__: Qc
    });
    var Pc = function(a, b) {
        j.call(this, a, b)
    };
    g["com.cmm.nls.tickets.TicketsTotal"] = Pc;
    Pc.__name__ = ["com", "cmm", "nls", "tickets", "TicketsTotal"];
    Pc.__super__ = j;
    Pc.prototype = k(j.prototype, {
        get_name: function() {
            return "TicketsTotal_16"
        },
        onAdded: function() {
            j.prototype.onAdded.call(this);
            this._ownerMC.gotoAndStop(1);
            e.addEventListener("com.cmm.nls.events.ticketsAmountCorrect", d(this, this.amountCorrect));
            e.addEventListener("com.cmm.nls.events.ticketsHighlightNumber", d(this, this.highlight));
            e.addEventListener("com.cmm.nls.events.ticketsHighlightPlus", d(this, this.unhighlight));
            e.addEventListener("com.cmm.nls.events.ticketsHighlightEquals", d(this, this.unhighlight));
            e.addEventListener("com.cmm.nls.events.ticketsActivityComplete", d(this, this.activityComplete))
        },
        dispose: function() {
            e.removeEventListener("com.cmm.nls.events.ticketsAmountCorrect", d(this, this.amountCorrect));
            e.removeEventListener("com.cmm.nls.events.ticketsHighlightNumber", d(this, this.highlight));
            e.removeEventListener("com.cmm.nls.events.ticketsHighlightPlus", d(this, this.unhighlight));
            e.removeEventListener("com.cmm.nls.events.ticketsHighlightEquals", d(this, this.unhighlight));
            e.removeEventListener("com.cmm.nls.events.ticketsActivityComplete", d(this, this.activityComplete));
            j.prototype.dispose.call(this)
        },
        amountCorrect: function() {
            this._ownerMC.gotoAndStop("total");
            e.dispatchEvent(new r("com.cmm.nls.events.ticketsSetAmount", 0))
        },
        highlight: function(a) {
            0 == a.data && this._ownerMC.gotoAndStop("total")
        },
        unhighlight: function() {
            this._ownerMC.gotoAndStop(1)
        },
        activityComplete: function() {
            this.dispose()
        },
        __class__: Pc
    });
    var Ha = function(a, b) {
        j.call(this, a, b);
        this._isSkipped = !1;
        Ha._instance = this
    };
    g["com.cmm.nls.tickets.TicketsTutorial"] = Ha;
    Ha.__name__ = ["com", "cmm", "nls", "tickets", "TicketsTutorial"];
    Ha.getOwnerMC = function() {
        return null != Ha._instance ? Ha._instance._ownerMC : null
    };
    Ha.__super__ = j;
    Ha.prototype = k(j.prototype, {
        get_name: function() {
            return "TicketsTutorial_15"
        },
        onAdded: function() {
            j.prototype.onAdded.call(this);
            this._ownerMC.hasChildWithName("btn_skip") && (this._skip = this._ownerMC.getChildByName("btn_skip"));
            this._ownerMC.gotoAndStop(1);
            Ha.allTicketsCounted = !1;
            e.addEventListener("com.cmm.common.events.onFocusOut", d(this, this.onFocusOut));
            e.addEventListener("com.cmm.common.events.onFocusIn", d(this, this.onFocusIn));
            e.addEventListener("com.cmm.nls.events.ticketsTutorialStart", d(this, this.startTutorial));
            e.addEventListener("com.cmm.nls.events.ticketsTutorialSkip", d(this, this.skip));
            e.addEventListener("com.cmm.nls.events.skip", d(this, this.skip));
            e.addEventListener("com.cmm.nls.events.ticketsAmountIncorrect", d(this, this.amountIncorrect));
            e.addEventListener("com.cmm.nls.events.ticketsActivityComplete", d(this, this.activityComplete))
        },
        startTutorial: function() {
            this._isSkipped = !1;
            this.playTutorial("start")
        },
        playTutorial: function() {
            var a = p._platform.getStorage().get("NLS.TICKETS_TUTORIAL_COMPLETE", !1),
                b = q.get("firstPlayTickets", !0),
                c = q.get("voiceOverAudio", !0);
            this.disposeTutorialActions();
            this._tutorialActions = new G([new y(a && b, new fa(d(this, this.showSkip))), new y(c, new v(this._ownerMC, "start")), new y(!Ha.allTicketsCounted, new v(this._ownerMC, "tapTickets")), new v(this._ownerMC, "tapTotal"), new fa(d(this, this.cleanUp))])
        },
        amountIncorrect: function() {
            this.cleanUp()
        },
        showSkip: function() {
            null != this._skip && (this._skip.set_visible(!0), this._isSkipped = !1)
        },
        disposeSkip: function() {
            null != this._skip && (this._skip.dispose(), this._skip = null)
        },
        disposeTutorialActions: function() {
            null != this._tutorialActions && (this._tutorialActions.stop(), this._tutorialActions = null)
        },
        skip: function() {
            this._isSkipped || (this._isSkipped = !0, this.cleanUp())
        },
        cleanUp: function() {
            w.destroy();
            this.disposeTutorialActions();
            this._ownerMC.gotoAndStop(1);
            i.stopChannel("vo");
            e.dispatchEvent(new r("com.cmm.nls.events.ticketsTutorialComplete"))
        },
        onFocusOut: function() {
            null != this._tutorialActions && this._tutorialActions.pause()
        },
        onFocusIn: function() {
            null != this._tutorialActions && this._tutorialActions.resume()
        },
        dispose: function() {
            Ha._instance = null;
            e.removeEventListener("com.cmm.nls.events.ticketsTutorialSkip", d(this, this.skip));
            e.removeEventListener("com.cmm.nls.events.skip", d(this, this.skip));
            e.removeEventListener("com.cmm.common.events.onFocusIn", d(this, this.onFocusIn));
            e.removeEventListener("com.cmm.common.events.onFocusOut", d(this, this.onFocusOut));
            e.removeEventListener("com.cmm.nls.events.ticketsTutorialStart", d(this, this.startTutorial));
            e.removeEventListener("com.cmm.nls.events.ticketsAmountIncorrect", d(this, this.amountIncorrect));
            e.removeEventListener("com.cmm.nls.events.ticketsActivityComplete", d(this, this.activityComplete));
            this.disposeTutorialActions();
            null != this._ownerMC && O.instance.get_animLayer().removeChild(this._ownerMC);
            this.disposeSkip();
            j.prototype.dispose.call(this)
        },
        activityComplete: function() {
            this.dispose()
        },
        __class__: Ha
    });
    var Mb = function() {
        J.call(this);
        this._disposables = []
    };
    g["flambe.Disposer"] = Mb;
    Mb.__name__ = ["flambe", "Disposer"];
    Mb.__super__ = J;
    Mb.prototype = k(J.prototype, {
        get_name: function() {
            return "Disposer_12"
        },
        add: function(a) {
            this._disposables.push(a);
            return this
        },
        connect0: function(a, b) {
            this.add(a.connect(b));
            return this
        },
        connect1: function(a, b) {
            this.add(a.connect(b));
            return this
        },
        onRemoved: function() {
            this.freeDisposables()
        },
        dispose: function() {
            J.prototype.dispose.call(this);
            this.freeDisposables()
        },
        freeDisposables: function() {
            var a = this._disposables;
            this._disposables = [];
            for (var b = 0; b < a.length;) {
                var c = a[b];
                ++b;
                c.dispose()
            }
        },
        __class__: Mb
    });
    var rf = function() {};
    g["flambe.util.PackageLog"] = rf;
    rf.__name__ = ["flambe", "util", "PackageLog"];
    var Qe = function() {};
    g["flambe.platform.Platform"] = Qe;
    Qe.__name__ = ["flambe", "platform", "Platform"];
    Qe.prototype = {
        __class__: Qe
    };
    var yb = function() {};
    g["flambe.platform.html.HtmlPlatform"] = yb;
    yb.__name__ = ["flambe", "platform", "html", "HtmlPlatform"];
    yb.__interfaces__ = [Qe];
    yb.prototype = {
        init: function() {
            var a = this;
            ea.fixAndroidMath();
            var b = null;
            try {
                b = window.flambe.canvas
            } catch (c) {}
            b.setAttribute("tabindex", "0");
            b.style.outlineStyle = "none";
            b.style.webkitTapHighlightColor = "transparent";
            b.setAttribute("moz-opaque", "true");
            this._stage = new fd(b);
            this._pointer = new Ma;
            this._mouse = new be(this._pointer, b);
            this._renderer = this.createRenderer(b);
            this.mainLoop = new jc;
            this.musicPlaying = !1;
            this._canvas = b;
            this._container = b.parentElement;
            this._container.style.overflow = "hidden";
            this._container.style.position = "relative";
            this._container.style.msTouchAction = "none";
            var d = 0,
                e = function(c) {
                    if (!(1E3 > c.timeStamp - d)) {
                        var e = b.getBoundingClientRect(),
                            f = a.getX(c, e),
                            e = a.getY(c, e);
                        switch (c.type) {
                            case "mousedown":
                                c.target == b && (c.preventDefault(), a._mouse.submitDown(f, e, c.button), b.focus());
                                break;
                            case "mousemove":
                                a._mouse.submitMove(f, e);
                                break;
                            case "mouseup":
                                a._mouse.submitUp(f, e, c.button);
                                break;
                            case "DOMMouseScroll":
                            case "mousewheel":
                                a._mouse.submitScroll(f, e, "mousewheel" == c.type ? c.wheelDelta / 40 : -c.detail) && c.preventDefault()
                        }
                    }
                };
            window.addEventListener("mousedown", e, !1);
            window.addEventListener("mousemove", e, !1);
            window.addEventListener("mouseup", e, !1);
            b.addEventListener("mousewheel", e, !1);
            b.addEventListener("DOMMouseScroll", e, !1);
            b.addEventListener("contextmenu", function(a) {
                a.preventDefault()
            }, !1);
            var f = "undefined" != typeof window.ontouchstart,
                e = "msMaxTouchPoints" in window.navigator && 1 < window.navigator.msMaxTouchPoints;
            if (f || e) {
                var g = new ce(this._pointer, f ? 4 : window.navigator.msMaxTouchPoints);
                this._touch = g;
                e = function(b) {
                    var c = f ? b.changedTouches : [b],
                        e = b.target.getBoundingClientRect();
                    d = b.timeStamp;
                    switch (b.type) {
                        case "MSPointerMove":
                        case "pointermove":
                        case "touchmove":
                            b.preventDefault();
                            for (b = 0; b < c.length;) {
                                var j = c[b];
                                ++b;
                                var i = a.getX(j, e),
                                    l = a.getY(j, e);
                                g.submitMove((f ? j.identifier : j.pointerId) | 0, i, l)
                            }
                            break;
                        case "MSPointerUp":
                        case "pointerup":
                        case "touchcancel":
                        case "touchend":
                            for (b = 0; b < c.length;) j = c[b], ++b, i = a.getX(j, e), l = a.getY(j, e), g.submitUp((f ? j.identifier : j.pointerId) | 0, i, l);
                            break;
                        case "MSPointerDown":
                        case "pointerdown":
                        case "touchstart":
                            b.preventDefault();
                            ea.SHOULD_HIDE_MOBILE_BROWSER && ea.hideMobileBrowser();
                            for (b = 0; b < c.length;) j = c[b], ++b, i = a.getX(j, e), l = a.getY(j, e), g.submitDown((f ? j.identifier : j.pointerId) | 0, i, l)
                    }
                };
                f ? (b.addEventListener("touchstart", e, !1), b.addEventListener("touchmove", e, !1), b.addEventListener("touchend", e, !1), b.addEventListener("touchcancel", e, !1)) : (b.addEventListener("MSPointerDown", e, !1), b.addEventListener("MSPointerMove", e, !1), b.addEventListener("MSPointerUp", e, !1))
            } else this._touch = new de;
            var j = window.onerror;
            window.onerror = function(a, b, c) {
                p.uncaughtError.emit(a);
                return null != j ? j(a, b, c) : !1
            };
            var i = ea.loadExtension("hidden", window.document);
            null != i.value ? (e = function() {
                p.hidden.set__(Q.field(window.document, i.field))
            }, e(null), window.document.addEventListener(i.prefix + "visibilitychange", e, !1)) : (e = function(a) {
                p.hidden.set__("pagehide" == a.type)
            }, window.addEventListener("pageshow", e, !1), window.addEventListener("pagehide", e, !1));
            p.hidden.get_changed().connect(function(b) {
                b || (a._skipFrame = !0)
            });
            this._skipFrame = !1;
            this._lastUpdate = Date.now();
            var l = ea.loadExtension("requestAnimationFrame").value;
            if (null != l) {
                var m = window.performance,
                    k = null != m && ea.polyfill("now", m);
                k && (this._lastUpdate = m.now());
                var o = null,
                    o = function(c) {
                        c = k ? m.now() : c;
                        a.update(c);
                        l(o, b)
                    };
                l(o, b)
            } else window.setInterval(function() {
                var b = Date.now();
                a.update(b)
            }, 16);
            this._renderer.get_type()
        },
        getStage: function() {
            return this._stage
        },
        getStorage: function() {
            if (null == this._storage) {
                var a = sf.getLocalStorage();
                this._storage = null != a ? new ee(a) : new fe
            }
            return this._storage
        },
        getLocale: function() {
            var a = window.navigator.language;
            null == a && (a = window.navigator.userLanguage);
            return a
        },
        createLogHandler: function() {
            return null
        },
        update: function(a) {
            var b = (a - this._lastUpdate) / 1E3;
            this._lastUpdate = a;
            p.hidden._value || (this._skipFrame ? this._skipFrame = !1 : (this.mainLoop.update(b), this.mainLoop.render(this._renderer)))
        },
        getPointer: function() {
            return this._pointer
        },
        getMouse: function() {
            return this._mouse
        },
        getKeyboard: function() {
            var a = this;
            if (null == this._keyboard) {
                this._keyboard = new jb;
                var b = function(b) {
                    switch (b.type) {
                        case "keydown":
                            a._keyboard.submitDown(b.keyCode) && b.preventDefault();
                            break;
                        case "keyup":
                            a._keyboard.submitUp(b.keyCode)
                    }
                };
                this._canvas.addEventListener("keydown", b, !1);
                this._canvas.addEventListener("keyup", b, !1)
            }
            return this._keyboard
        },
        getExternal: function() {
            null == this._external && (this._external = new ge);
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
            return new kc(a)
        },
        __class__: yb
    };
    var ua = function(a, b) {
        this._behavior = null;
        Ja.call(this, a, b)
    };
    g["flambe.animation.AnimatedFloat"] = ua;
    ua.__name__ = ["flambe", "animation", "AnimatedFloat"];
    ua.__super__ = Ja;
    ua.prototype = k(Ja.prototype, {
        set__: function(a) {
            this._behavior = null;
            return Ja.prototype.set__.call(this, a)
        },
        update: function(a) {
            null != this._behavior && (Ja.prototype.set__.call(this, this._behavior.update(a)), this._behavior.isComplete() && (this._behavior = null))
        },
        animateBy: function(a, b, c) {
            this.set_behavior(new he(this._value, this._value +
                a, b, c))
        },
        set_behavior: function(a) {
            this._behavior = a;
            this.update(0);
            return a
        },
        __class__: ua,
        __properties__: k(Ja.prototype.__properties__, {
            set_behavior: "set_behavior"
        })
    });
    var p = function() {};
    g["flambe.System"] = p;
    p.__name__ = ["flambe", "System"];
    p.init = function() {
        p._calledInit || (p._platform.init(), p._calledInit = !0)
    };
    var Re = function(a) {
        this._handler = a
    };
    g["flambe.util.Logger"] = Re;
    Re.__name__ = ["flambe", "util", "Logger"];
    Re.prototype = {
        __class__: Re
    };
    var ie = function() {};
    g["flambe.Log"] = ie;
    ie.__name__ = ["flambe", "Log"];
    ie.__super__ = rf;
    ie.prototype = k(rf.prototype, {
        __class__: ie
    });
    var je = function(a) {
        null == a && (a = 1);
        this._realDt = 0;
        J.call(this);
        this.scale = new ua(a)
    };
    g["flambe.SpeedAdjuster"] = je;
    je.__name__ = ["flambe", "SpeedAdjuster"];
    je.__super__ = J;
    je.prototype = k(J.prototype, {
        get_name: function() {
            return "SpeedAdjuster_3"
        },
        onUpdate: function(a) {
            0 < this._realDt && (a = this._realDt, this._realDt = 0);
            this.scale.update(a)
        },
        __class__: je
    });
    var Se = function() {};
    g["flambe.animation.Behavior"] = Se;
    Se.__name__ = ["flambe", "animation", "Behavior"];
    Se.prototype = {
        __class__: Se
    };
    var tf = function() {};
    g["flambe.animation.Ease"] = tf;
    tf.__name__ = ["flambe", "animation", "Ease"];
    tf.linear = function(a) {
        return a
    };
    var he = function(a, b, c, d) {
        this._from = a;
        this._to = b;
        this._duration = c;
        this.elapsed = 0;
        this._easing = null != d ? d : tf.linear
    };
    g["flambe.animation.Tween"] = he;
    he.__name__ = ["flambe", "animation", "Tween"];
    he.__interfaces__ = [Se];
    he.prototype = {
        update: function(a) {
            this.elapsed += a;
            return this.elapsed >= this._duration ? this._to : this._from + (this._to - this._from) * this._easing(this.elapsed / this._duration)
        },
        isComplete: function() {
            return this.elapsed >= this._duration
        },
        __class__: he
    };
    var Yb = function() {};
    g["flambe.asset.Asset"] = Yb;
    Yb.__name__ = ["flambe", "asset", "Asset"];
    Yb.__interfaces__ = [ya];
    Yb.prototype = {
        __class__: Yb
    };
    var B = g["flambe.asset.AssetFormat"] = {
        __ename__: ["flambe", "asset", "AssetFormat"],
        __constructs__: "WEBP,JXR,PNG,JPG,GIF,DDS,PVR,PKM,MP3,M4A,OPUS,OGG,WAV,Data".split(",")
    };
    B.WEBP = ["WEBP", 0];
    B.WEBP.toString = m;
    B.WEBP.__enum__ = B;
    B.JXR = ["JXR", 1];
    B.JXR.toString = m;
    B.JXR.__enum__ = B;
    B.PNG = ["PNG", 2];
    B.PNG.toString = m;
    B.PNG.__enum__ = B;
    B.JPG = ["JPG", 3];
    B.JPG.toString = m;
    B.JPG.__enum__ = B;
    B.GIF = ["GIF", 4];
    B.GIF.toString = m;
    B.GIF.__enum__ = B;
    B.DDS = ["DDS", 5];
    B.DDS.toString = m;
    B.DDS.__enum__ = B;
    B.PVR = ["PVR", 6];
    B.PVR.toString = m;
    B.PVR.__enum__ = B;
    B.PKM = ["PKM", 7];
    B.PKM.toString = m;
    B.PKM.__enum__ = B;
    B.MP3 = ["MP3", 8];
    B.MP3.toString = m;
    B.MP3.__enum__ = B;
    B.M4A = ["M4A", 9];
    B.M4A.toString = m;
    B.M4A.__enum__ = B;
    B.OPUS = ["OPUS", 10];
    B.OPUS.toString = m;
    B.OPUS.__enum__ = B;
    B.OGG = ["OGG", 11];
    B.OGG.toString = m;
    B.OGG.__enum__ = B;
    B.WAV = ["WAV", 12];
    B.WAV.toString = m;
    B.WAV.__enum__ = B;
    B.Data = ["Data", 13];
    B.Data.toString = m;
    B.Data.__enum__ = B;
    var Te = function(a, b, c, d) {
        this.name = a;
        this.url = b;
        this.format = c;
        this.bytes = d
    };
    g["flambe.asset.AssetEntry"] = Te;
    Te.__name__ = ["flambe", "asset", "AssetEntry"];
    Te.prototype = {
        __class__: Te
    };
    var ke = function() {};
    g["flambe.asset.AssetPack"] = ke;
    ke.__name__ = ["flambe", "asset", "AssetPack"];
    ke.__interfaces__ = [ya];
    ke.prototype = {
        __class__: ke,
        __properties__: {
            get_manifest: "get_manifest"
        }
    };
    var le = function() {};
    g["flambe.asset.File"] = le;
    le.__name__ = ["flambe", "asset", "File"];
    le.__interfaces__ = [Yb];
    le.prototype = {
        __class__: le
    };
    var za = function() {
        this._localBase = this._remoteBase = null;
        this._entries = []
    };
    g["flambe.asset.Manifest"] = za;
    za.__name__ = ["flambe", "asset", "Manifest"];
    za.fromAssets = function(a, b) {
        null == b && (b = !0);
        var c = Q.field(hd.getType(za).assets[0], a);
        if (null == c) {
            if (b) throw new z(Ca.withFields("Missing asset pack", ["name", a]));
            return null
        }
        var d = new za;
        d.set_localBase("assets");
        for (var e = 0; e < c.length;) {
            var f = c[e];
            ++e;
            var g = f.name,
                j = a + "/" + g + "?v=" + aa.string(f.md5),
                i = za.inferFormat(g);
            i != B.Data && (g = Ca.removeFileExtension(g));
            d.add(g, j, f.bytes, i)
        }
        return d
    };
    za.fromAssetsLocalized = function(a, b, c) {
        null == c && (c = !0);
        null == b && (b = p._platform.getLocale());
        if (null != b)
            for (b = b.split("-"); 0 < b.length;) {
                var d = za.fromAssets(a + "_" + b.join("-"), !1);
                if (null != d) return d;
                b.pop()
            }
        return za.fromAssets(a, c)
    };
    za.exists = function(a) {
        var b = hd.getType(za).assets[0];
        return Object.prototype.hasOwnProperty.call(b, a)
    };
    za.inferFormat = function(a) {
        a = Ca.getUrlExtension(a);
        if (null != a) switch (a.toLowerCase()) {
            case "dds":
                return B.DDS;
            case "gif":
                return B.GIF;
            case "jpeg":
            case "jpg":
                return B.JPG;
            case "jxr":
            case "wdp":
                return B.JXR;
            case "m4a":
                return B.M4A;
            case "mp3":
                return B.MP3;
            case "ogg":
                return B.OGG;
            case "opus":
                return B.OPUS;
            case "pkm":
                return B.PKM;
            case "png":
                return B.PNG;
            case "pvr":
                return B.PVR;
            case "wav":
                return B.WAV;
            case "webp":
                return B.WEBP
        }
        return B.Data
    };
    za.prototype = {
        add: function(a, b, c, d) {
            null == c && (c = 0);
            null == d && (d = za.inferFormat(b));
            a = new Te(a, b, d, c);
            this._entries.push(a);
            return a
        },
        iterator: function() {
            return E.iter(this._entries)
        },
        getFullURL: function(a) {
            var b = null != this.get_remoteBase() && za._supportsCrossOrigin ? this.get_remoteBase() : this.get_localBase();
            return null != b ? Ca.joinPath(b, a.url) : a.url
        },
        get_localBase: function() {
            return this._localBase
        },
        set_localBase: function(a) {
            null != a && !V.startsWith(a, "http://") && V.startsWith(a, "https://");
            return this._localBase = a
        },
        get_remoteBase: function() {
            return this._remoteBase
        },
        __class__: za,
        __properties__: {
            get_remoteBase: "get_remoteBase",
            set_localBase: "set_localBase",
            get_localBase: "get_localBase"
        }
    };
    var sa = g["flambe.display.BlendMode"] = {
        __ename__: ["flambe", "display", "BlendMode"],
        __constructs__: "Normal,Add,Multiply,Screen,Mask,Copy".split(",")
    };
    sa.Normal = ["Normal", 0];
    sa.Normal.toString = m;
    sa.Normal.__enum__ = sa;
    sa.Add = ["Add", 1];
    sa.Add.toString = m;
    sa.Add.__enum__ = sa;
    sa.Multiply = ["Multiply", 2];
    sa.Multiply.toString = m;
    sa.Multiply.__enum__ = sa;
    sa.Screen = ["Screen", 3];
    sa.Screen.toString = m;
    sa.Screen.__enum__ = sa;
    sa.Mask = ["Mask", 4];
    sa.Mask.toString = m;
    sa.Mask.__enum__ = sa;
    sa.Copy = ["Copy", 5];
    sa.Copy.toString = m;
    sa.Copy.__enum__ = sa;
    var Vc = function(a, b, c) {
        K.call(this);
        this.color = a;
        this.width = new ua(b);
        this.height = new ua(c)
    };
    g["flambe.display.FillSprite"] = Vc;
    Vc.__name__ = ["flambe", "display", "FillSprite"];
    Vc.__super__ = K;
    Vc.prototype = k(K.prototype, {
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
            K.prototype.onUpdate.call(this, a);
            this.width.update(a);
            this.height.update(a)
        },
        __class__: Vc
    });
    var Ue = function() {};
    g["flambe.display.Graphics"] = Ue;
    Ue.__name__ = ["flambe", "display", "Graphics"];
    Ue.prototype = {
        __class__: Ue
    };
    var Tb = function(a) {
        K.call(this);
        this.texture = a
    };
    g["flambe.display.ImageSprite"] = Tb;
    Tb.__name__ = ["flambe", "display", "ImageSprite"];
    Tb.__super__ = K;
    Tb.prototype = k(K.prototype, {
        draw: function(a) {
            null != this.texture && a.drawTexture(this.texture, 0, 0)
        },
        getNaturalWidth: function() {
            return null != this.texture ? this.texture.get_width() : 0
        },
        getNaturalHeight: function() {
            return null != this.texture ? this.texture.get_height() : 0
        },
        __class__: Tb
    });
    var Ob = g["flambe.display.Orientation"] = {
        __ename__: ["flambe", "display", "Orientation"],
        __constructs__: ["Portrait", "Landscape"]
    };
    Ob.Portrait = ["Portrait", 0];
    Ob.Portrait.toString = m;
    Ob.Portrait.__enum__ = Ob;
    Ob.Landscape = ["Landscape", 1];
    Ob.Landscape.toString = m;
    Ob.Landscape.__enum__ = Ob;
    var me = function() {};
    g["flambe.display.Texture"] = me;
    me.__name__ = ["flambe", "display", "Texture"];
    me.__interfaces__ = [Yb];
    me.prototype = {
        __class__: me,
        __properties__: {
            get_width: "get_width",
            get_height: "get_height"
        }
    };
    var uf = function() {};
    g["flambe.display.SubTexture"] = uf;
    uf.__name__ = ["flambe", "display", "SubTexture"];
    uf.__interfaces__ = [me];
    var f = g["flambe.input.Key"] = {
        __ename__: ["flambe", "input", "Key"],
        __constructs__: "A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,Number0,Number1,Number2,Number3,Number4,Number5,Number6,Number7,Number8,Number9,Numpad0,Numpad1,Numpad2,Numpad3,Numpad4,Numpad5,Numpad6,Numpad7,Numpad8,Numpad9,NumpadAdd,NumpadDecimal,NumpadDivide,NumpadEnter,NumpadMultiply,NumpadSubtract,F1,F2,F3,F4,F5,F6,F7,F8,F9,F10,F11,F12,F13,F14,F15,Left,Up,Right,Down,Alt,Backquote,Backslash,Backspace,CapsLock,Comma,Command,Control,Delete,End,Enter,Equals,Escape,Home,Insert,LeftBracket,Minus,PageDown,PageUp,Period,Quote,RightBracket,Semicolon,Shift,Slash,Space,Tab,Menu,Search,Unknown".split(",")
    };
    f.A = ["A", 0];
    f.A.toString = m;
    f.A.__enum__ = f;
    f.B = ["B", 1];
    f.B.toString = m;
    f.B.__enum__ = f;
    f.C = ["C", 2];
    f.C.toString = m;
    f.C.__enum__ = f;
    f.D = ["D", 3];
    f.D.toString = m;
    f.D.__enum__ = f;
    f.E = ["E", 4];
    f.E.toString = m;
    f.E.__enum__ = f;
    f.F = ["F", 5];
    f.F.toString = m;
    f.F.__enum__ = f;
    f.G = ["G", 6];
    f.G.toString = m;
    f.G.__enum__ = f;
    f.H = ["H", 7];
    f.H.toString = m;
    f.H.__enum__ = f;
    f.I = ["I", 8];
    f.I.toString = m;
    f.I.__enum__ = f;
    f.J = ["J", 9];
    f.J.toString = m;
    f.J.__enum__ = f;
    f.K = ["K", 10];
    f.K.toString = m;
    f.K.__enum__ = f;
    f.L = ["L", 11];
    f.L.toString = m;
    f.L.__enum__ = f;
    f.M = ["M", 12];
    f.M.toString = m;
    f.M.__enum__ = f;
    f.N = ["N", 13];
    f.N.toString = m;
    f.N.__enum__ = f;
    f.O = ["O", 14];
    f.O.toString = m;
    f.O.__enum__ = f;
    f.P = ["P", 15];
    f.P.toString = m;
    f.P.__enum__ = f;
    f.Q = ["Q", 16];
    f.Q.toString = m;
    f.Q.__enum__ = f;
    f.R = ["R", 17];
    f.R.toString = m;
    f.R.__enum__ = f;
    f.S = ["S", 18];
    f.S.toString = m;
    f.S.__enum__ = f;
    f.T = ["T", 19];
    f.T.toString = m;
    f.T.__enum__ = f;
    f.U = ["U", 20];
    f.U.toString = m;
    f.U.__enum__ = f;
    f.V = ["V", 21];
    f.V.toString = m;
    f.V.__enum__ = f;
    f.W = ["W", 22];
    f.W.toString = m;
    f.W.__enum__ = f;
    f.X = ["X", 23];
    f.X.toString = m;
    f.X.__enum__ = f;
    f.Y = ["Y", 24];
    f.Y.toString = m;
    f.Y.__enum__ = f;
    f.Z = ["Z", 25];
    f.Z.toString = m;
    f.Z.__enum__ = f;
    f.Number0 = ["Number0", 26];
    f.Number0.toString = m;
    f.Number0.__enum__ = f;
    f.Number1 = ["Number1", 27];
    f.Number1.toString = m;
    f.Number1.__enum__ = f;
    f.Number2 = ["Number2", 28];
    f.Number2.toString = m;
    f.Number2.__enum__ = f;
    f.Number3 = ["Number3", 29];
    f.Number3.toString = m;
    f.Number3.__enum__ = f;
    f.Number4 = ["Number4", 30];
    f.Number4.toString = m;
    f.Number4.__enum__ = f;
    f.Number5 = ["Number5", 31];
    f.Number5.toString = m;
    f.Number5.__enum__ = f;
    f.Number6 = ["Number6", 32];
    f.Number6.toString = m;
    f.Number6.__enum__ = f;
    f.Number7 = ["Number7", 33];
    f.Number7.toString = m;
    f.Number7.__enum__ = f;
    f.Number8 = ["Number8", 34];
    f.Number8.toString = m;
    f.Number8.__enum__ = f;
    f.Number9 = ["Number9", 35];
    f.Number9.toString = m;
    f.Number9.__enum__ = f;
    f.Numpad0 = ["Numpad0", 36];
    f.Numpad0.toString = m;
    f.Numpad0.__enum__ = f;
    f.Numpad1 = ["Numpad1", 37];
    f.Numpad1.toString = m;
    f.Numpad1.__enum__ = f;
    f.Numpad2 = ["Numpad2", 38];
    f.Numpad2.toString = m;
    f.Numpad2.__enum__ = f;
    f.Numpad3 = ["Numpad3", 39];
    f.Numpad3.toString = m;
    f.Numpad3.__enum__ = f;
    f.Numpad4 = ["Numpad4", 40];
    f.Numpad4.toString = m;
    f.Numpad4.__enum__ = f;
    f.Numpad5 = ["Numpad5", 41];
    f.Numpad5.toString = m;
    f.Numpad5.__enum__ = f;
    f.Numpad6 = ["Numpad6", 42];
    f.Numpad6.toString = m;
    f.Numpad6.__enum__ = f;
    f.Numpad7 = ["Numpad7", 43];
    f.Numpad7.toString = m;
    f.Numpad7.__enum__ = f;
    f.Numpad8 = ["Numpad8", 44];
    f.Numpad8.toString = m;
    f.Numpad8.__enum__ = f;
    f.Numpad9 = ["Numpad9", 45];
    f.Numpad9.toString = m;
    f.Numpad9.__enum__ = f;
    f.NumpadAdd = ["NumpadAdd", 46];
    f.NumpadAdd.toString = m;
    f.NumpadAdd.__enum__ = f;
    f.NumpadDecimal = ["NumpadDecimal", 47];
    f.NumpadDecimal.toString = m;
    f.NumpadDecimal.__enum__ = f;
    f.NumpadDivide = ["NumpadDivide", 48];
    f.NumpadDivide.toString = m;
    f.NumpadDivide.__enum__ = f;
    f.NumpadEnter = ["NumpadEnter", 49];
    f.NumpadEnter.toString = m;
    f.NumpadEnter.__enum__ = f;
    f.NumpadMultiply = ["NumpadMultiply", 50];
    f.NumpadMultiply.toString = m;
    f.NumpadMultiply.__enum__ = f;
    f.NumpadSubtract = ["NumpadSubtract", 51];
    f.NumpadSubtract.toString = m;
    f.NumpadSubtract.__enum__ = f;
    f.F1 = ["F1", 52];
    f.F1.toString = m;
    f.F1.__enum__ = f;
    f.F2 = ["F2", 53];
    f.F2.toString = m;
    f.F2.__enum__ = f;
    f.F3 = ["F3", 54];
    f.F3.toString = m;
    f.F3.__enum__ = f;
    f.F4 = ["F4", 55];
    f.F4.toString = m;
    f.F4.__enum__ = f;
    f.F5 = ["F5", 56];
    f.F5.toString = m;
    f.F5.__enum__ = f;
    f.F6 = ["F6", 57];
    f.F6.toString = m;
    f.F6.__enum__ = f;
    f.F7 = ["F7", 58];
    f.F7.toString = m;
    f.F7.__enum__ = f;
    f.F8 = ["F8", 59];
    f.F8.toString = m;
    f.F8.__enum__ = f;
    f.F9 = ["F9", 60];
    f.F9.toString = m;
    f.F9.__enum__ = f;
    f.F10 = ["F10", 61];
    f.F10.toString = m;
    f.F10.__enum__ = f;
    f.F11 = ["F11", 62];
    f.F11.toString = m;
    f.F11.__enum__ = f;
    f.F12 = ["F12", 63];
    f.F12.toString = m;
    f.F12.__enum__ = f;
    f.F13 = ["F13", 64];
    f.F13.toString = m;
    f.F13.__enum__ = f;
    f.F14 = ["F14", 65];
    f.F14.toString = m;
    f.F14.__enum__ = f;
    f.F15 = ["F15", 66];
    f.F15.toString = m;
    f.F15.__enum__ = f;
    f.Left = ["Left", 67];
    f.Left.toString = m;
    f.Left.__enum__ = f;
    f.Up = ["Up", 68];
    f.Up.toString = m;
    f.Up.__enum__ = f;
    f.Right = ["Right", 69];
    f.Right.toString = m;
    f.Right.__enum__ = f;
    f.Down = ["Down", 70];
    f.Down.toString = m;
    f.Down.__enum__ = f;
    f.Alt = ["Alt", 71];
    f.Alt.toString = m;
    f.Alt.__enum__ = f;
    f.Backquote = ["Backquote", 72];
    f.Backquote.toString = m;
    f.Backquote.__enum__ = f;
    f.Backslash = ["Backslash", 73];
    f.Backslash.toString = m;
    f.Backslash.__enum__ = f;
    f.Backspace = ["Backspace", 74];
    f.Backspace.toString = m;
    f.Backspace.__enum__ = f;
    f.CapsLock = ["CapsLock", 75];
    f.CapsLock.toString = m;
    f.CapsLock.__enum__ = f;
    f.Comma = ["Comma", 76];
    f.Comma.toString = m;
    f.Comma.__enum__ = f;
    f.Command = ["Command", 77];
    f.Command.toString = m;
    f.Command.__enum__ = f;
    f.Control = ["Control", 78];
    f.Control.toString = m;
    f.Control.__enum__ = f;
    f.Delete = ["Delete", 79];
    f.Delete.toString = m;
    f.Delete.__enum__ = f;
    f.End = ["End", 80];
    f.End.toString = m;
    f.End.__enum__ = f;
    f.Enter = ["Enter", 81];
    f.Enter.toString = m;
    f.Enter.__enum__ = f;
    f.Equals = ["Equals", 82];
    f.Equals.toString = m;
    f.Equals.__enum__ = f;
    f.Escape = ["Escape", 83];
    f.Escape.toString = m;
    f.Escape.__enum__ = f;
    f.Home = ["Home", 84];
    f.Home.toString = m;
    f.Home.__enum__ = f;
    f.Insert = ["Insert", 85];
    f.Insert.toString = m;
    f.Insert.__enum__ = f;
    f.LeftBracket = ["LeftBracket", 86];
    f.LeftBracket.toString = m;
    f.LeftBracket.__enum__ = f;
    f.Minus = ["Minus", 87];
    f.Minus.toString = m;
    f.Minus.__enum__ = f;
    f.PageDown = ["PageDown", 88];
    f.PageDown.toString = m;
    f.PageDown.__enum__ = f;
    f.PageUp = ["PageUp", 89];
    f.PageUp.toString = m;
    f.PageUp.__enum__ = f;
    f.Period = ["Period", 90];
    f.Period.toString = m;
    f.Period.__enum__ = f;
    f.Quote = ["Quote", 91];
    f.Quote.toString = m;
    f.Quote.__enum__ = f;
    f.RightBracket = ["RightBracket", 92];
    f.RightBracket.toString = m;
    f.RightBracket.__enum__ = f;
    f.Semicolon = ["Semicolon", 93];
    f.Semicolon.toString = m;
    f.Semicolon.__enum__ = f;
    f.Shift = ["Shift", 94];
    f.Shift.toString = m;
    f.Shift.__enum__ = f;
    f.Slash = ["Slash", 95];
    f.Slash.toString = m;
    f.Slash.__enum__ = f;
    f.Space = ["Space", 96];
    f.Space.toString = m;
    f.Space.__enum__ = f;
    f.Tab = ["Tab", 97];
    f.Tab.toString = m;
    f.Tab.__enum__ = f;
    f.Menu = ["Menu", 98];
    f.Menu.toString = m;
    f.Menu.__enum__ = f;
    f.Search = ["Search", 99];
    f.Search.toString = m;
    f.Search.__enum__ = f;
    f.Unknown = function(a) {
        a = ["Unknown", 100, a];
        a.__enum__ = f;
        a.toString = m;
        return a
    };
    var Ve = function() {
        this.init(0, null)
    };
    g["flambe.input.KeyboardEvent"] = Ve;
    Ve.__name__ = ["flambe", "input", "KeyboardEvent"];
    Ve.prototype = {
        init: function(a, b) {
            this.id = a;
            this.key = b
        },
        __class__: Ve
    };
    var Na = g["flambe.input.MouseButton"] = {
        __ename__: ["flambe", "input", "MouseButton"],
        __constructs__: ["Left", "Middle", "Right", "Unknown"]
    };
    Na.Left = ["Left", 0];
    Na.Left.toString = m;
    Na.Left.__enum__ = Na;
    Na.Middle = ["Middle", 1];
    Na.Middle.toString = m;
    Na.Middle.__enum__ = Na;
    Na.Right = ["Right", 2];
    Na.Right.toString = m;
    Na.Right.__enum__ = Na;
    Na.Unknown = function(a) {
        a = ["Unknown", 3, a];
        a.__enum__ = Na;
        a.toString = m;
        return a
    };
    var Ka = g["flambe.input.MouseCursor"] = {
        __ename__: ["flambe", "input", "MouseCursor"],
        __constructs__: ["Default", "Button", "None"]
    };
    Ka.Default = ["Default", 0];
    Ka.Default.toString = m;
    Ka.Default.__enum__ = Ka;
    Ka.Button = ["Button", 1];
    Ka.Button.toString = m;
    Ka.Button.__enum__ = Ka;
    Ka.None = ["None", 2];
    Ka.None.toString = m;
    Ka.None.__enum__ = Ka;
    var We = function() {
        this.init(0, 0, 0, null)
    };
    g["flambe.input.MouseEvent"] = We;
    We.__name__ = ["flambe", "input", "MouseEvent"];
    We.prototype = {
        init: function(a, b, c, d) {
            this.id = a;
            this.viewX = b;
            this.viewY = c;
            this.button = d
        },
        __class__: We
    };
    var ne = g["flambe.input.EventSource"] = {
        __ename__: ["flambe", "input", "EventSource"],
        __constructs__: ["Mouse", "Touch"]
    };
    ne.Mouse = function(a) {
        a = ["Mouse", 0, a];
        a.__enum__ = ne;
        a.toString = m;
        return a
    };
    ne.Touch = function(a) {
        a = ["Touch", 1, a];
        a.__enum__ = ne;
        a.toString = m;
        return a
    };
    var Xe = function() {
        this.init(0, 0, 0, null, null)
    };
    g["flambe.input.PointerEvent"] = Xe;
    Xe.__name__ = ["flambe", "input", "PointerEvent"];
    Xe.prototype = {
        init: function(a, b, c, d, e) {
            this.id = a;
            this.viewX = b;
            this.viewY = c;
            this.hit = d;
            this.source = e;
            this._stopped = !1
        },
        __class__: Xe
    };
    var Ye = function(a) {
        this.id = a;
        this._source = ne.Touch(this)
    };
    g["flambe.input.TouchPoint"] = Ye;
    Ye.__name__ = ["flambe", "input", "TouchPoint"];
    Ye.prototype = {
        init: function(a, b) {
            this.viewX = a;
            this.viewY = b
        },
        __class__: Ye
    };
    var xb = function() {
        this.identity()
    };
    g["flambe.math.Matrix"] = xb;
    xb.__name__ = ["flambe", "math", "Matrix"];
    xb.multiply = function(a, b, c) {
        null == c && (c = new xb);
        var d = a.m00 * b.m00 + a.m01 * b.m10,
            e = a.m00 * b.m01 + a.m01 * b.m11,
            f = a.m00 * b.m02 + a.m01 * b.m12 + a.m02;
        c.m00 = d;
        c.m01 = e;
        c.m02 = f;
        d = a.m10 * b.m00 + a.m11 * b.m10;
        e = a.m10 * b.m01 + a.m11 * b.m11;
        f = a.m10 * b.m02 + a.m11 * b.m12 + a.m12;
        c.m10 = d;
        c.m11 = e;
        c.m12 = f;
        return c
    };
    xb.prototype = {
        set: function(a, b, c, d, e, f) {
            this.m00 = a;
            this.m01 = c;
            this.m02 = e;
            this.m10 = b;
            this.m11 = d;
            this.m12 = f
        },
        identity: function() {
            this.set(1, 0, 0, 1, 0, 0)
        },
        compose: function(a, b, c, d, e) {
            var f = Math.sin(e),
                e = Math.cos(e);
            this.set(e * c, f * c, -f * d, e * d, a, b)
        },
        translate: function(a, b) {
            this.m02 += this.m00 * a + this.m01 * b;
            this.m12 += this.m11 * b + this.m10 * a
        },
        transform: function(a, b, c) {
            null == c && (c = new oa);
            c.x = a * this.m00 + b * this.m01 + this.m02;
            c.y = a * this.m10 + b * this.m11 + this.m12;
            return c
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
            null == a && (a = new xb);
            a.set(this.m00, this.m10, this.m01, this.m11, this.m02, this.m12);
            return a
        },
        __class__: xb
    };
    var Jb = function(a, b, c, d) {
        null == d && (d = 0);
        null == c && (c = 0);
        null == b && (b = 0);
        null == a && (a = 0);
        this.set(a, b, c, d)
    };
    g["flambe.math.Rectangle"] = Jb;
    Jb.__name__ = ["flambe", "math", "Rectangle"];
    Jb.prototype = {
        set: function(a, b, c, d) {
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
        __class__: Jb
    };
    var Qa = function() {
        this._disposed = !1
    };
    g["flambe.platform.BasicAsset"] = Qa;
    Qa.__name__ = ["flambe", "platform", "BasicAsset"];
    Qa.__interfaces__ = [Yb];
    Qa.prototype = {
        dispose: function() {
            this._disposed || (this._disposed = !0, this.onDisposed())
        },
        onDisposed: function() {},
        __class__: Qa
    };
    var td = function(a, b) {
        this.disposed = !1;
        this._manifest = a;
        this.loader = b;
        this.textures = new $;
        this.sounds = new $;
        this.files = new $
    };
    g["flambe.platform._BasicAssetPackLoader.BasicAssetPack"] = td;
    td.__name__ = ["flambe", "platform", "_BasicAssetPackLoader", "BasicAssetPack"];
    td.__interfaces__ = [ke];
    td.prototype = {
        getTexture: function(a, b) {
            null == b && (b = !0);
            var c = this.textures,
                c = null != o[a] ? c.getReserved(a) : c.h[a];
            if (null == c && b) throw new z(Ca.withFields("Missing texture", ["name", a]));
            return c
        },
        getSound: function(a, b) {
            null == b && (b = !0);
            var c = this.sounds,
                c = null != o[a] ? c.getReserved(a) : c.h[a];
            if (null == c && b) throw new z(Ca.withFields("Missing sound", ["name", a]));
            return c
        },
        getFile: function(a, b) {
            null == b && (b = !0);
            var c = this.files,
                c = null != o[a] ? c.getReserved(a) : c.h[a];
            if (null == c && b) throw new z(Ca.withFields("Missing file", ["name", a]));
            return c
        },
        dispose: function() {
            if (!this.disposed) {
                this.disposed = !0;
                for (var a = this.textures, a = new Pa(a, a.arrayKeys()); a.hasNext();) a.next().dispose();
                this.textures = null;
                a = this.sounds;
                for (a = new Pa(a, a.arrayKeys()); a.hasNext();) a.next().dispose();
                this.sounds = null;
                a = this.files;
                for (a = new Pa(a, a.arrayKeys()); a.hasNext();) a.next().dispose();
                this.files = null;
                this.loader.onDisposed()
            }
        },
        get_manifest: function() {
            return this._manifest
        },
        __class__: td,
        __properties__: {
            get_manifest: "get_manifest"
        }
    };
    var Zc = function(a) {
        this._disposed = !1;
        this._content = a
    };
    g["flambe.platform.BasicFile"] = Zc;
    Zc.__name__ = ["flambe", "platform", "BasicFile"];
    Zc.__interfaces__ = [le];
    Zc.__super__ = Qa;
    Zc.prototype = k(Qa.prototype, {
        toString: function() {
            return this._content
        },
        onDisposed: function() {
            this._content = null
        },
        __class__: Zc
    });
    var Ze = function() {};
    g["flambe.subsystem.KeyboardSystem"] = Ze;
    Ze.__name__ = ["flambe", "subsystem", "KeyboardSystem"];
    Ze.prototype = {
        __class__: Ze
    };
    var jb = function() {
        this.down = new ba;
        this.up = new ba;
        this.backButton = new fb;
        this._keyStates = new wb
    };
    g["flambe.platform.BasicKeyboard"] = jb;
    jb.__name__ = ["flambe", "platform", "BasicKeyboard"];
    jb.__interfaces__ = [Ze];
    jb.prototype = {
        submitDown: function(a) {
            if (16777238 == a) return null != this.backButton._head ? (this.backButton.emit(), !0) : !1;
            this._keyStates.exists(a) || (this._keyStates.h[a] = !0, jb._sharedEvent.init(jb._sharedEvent.id + 1, $e.toKey(a)), this.down.emit(jb._sharedEvent));
            return !0
        },
        submitUp: function(a) {
            this._keyStates.exists(a) && (this._keyStates.remove(a), jb._sharedEvent.init(jb._sharedEvent.id + 1, $e.toKey(a)), this.up.emit(jb._sharedEvent))
        },
        __class__: jb
    };
    var af = function() {};
    g["flambe.subsystem.MouseSystem"] = af;
    af.__name__ = ["flambe", "subsystem", "MouseSystem"];
    af.prototype = {
        __class__: af,
        __properties__: {
            set_cursor: "set_cursor"
        }
    };
    var Xa = function(a) {
        this._pointer = a;
        this._source = ne.Mouse(Xa._sharedEvent);
        this.down = new ba;
        this.move = new ba;
        this.up = new ba;
        this.scroll = new ba;
        this._y = this._x = 0;
        this._cursor = Ka.Default;
        this._buttonStates = new wb
    };
    g["flambe.platform.BasicMouse"] = Xa;
    Xa.__name__ = ["flambe", "platform", "BasicMouse"];
    Xa.__interfaces__ = [af];
    Xa.prototype = {
        set_cursor: function(a) {
            return this._cursor = a
        },
        submitDown: function(a, b, c) {
            this._buttonStates.exists(c) || (this._buttonStates.h[c] = !0, this.prepare(a, b, bf.toButton(c)), this._pointer.submitDown(a, b, this._source), this.down.emit(Xa._sharedEvent))
        },
        submitMove: function(a, b) {
            this.prepare(a, b, null);
            this._pointer.submitMove(a, b, this._source);
            this.move.emit(Xa._sharedEvent)
        },
        submitUp: function(a, b, c) {
            this._buttonStates.exists(c) && (this._buttonStates.remove(c), this.prepare(a, b, bf.toButton(c)), this._pointer.submitUp(a, b, this._source), this.up.emit(Xa._sharedEvent))
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
            Xa._sharedEvent.init(Xa._sharedEvent.id + 1, a, b, c)
        },
        __class__: Xa,
        __properties__: {
            set_cursor: "set_cursor"
        }
    };
    var cf = function() {};
    g["flambe.subsystem.PointerSystem"] = cf;
    cf.__name__ = ["flambe", "subsystem", "PointerSystem"];
    cf.prototype = {
        __class__: cf,
        __properties__: {
            get_x: "get_x",
            get_y: "get_y"
        }
    };
    var Ma = function(a, b, c) {
        null == c && (c = !1);
        null == b && (b = 0);
        null == a && (a = 0);
        this.down = new ba;
        this.move = new ba;
        this.up = new ba;
        this._x = a;
        this._y = b;
        this._isDown = c
    };
    g["flambe.platform.BasicPointer"] = Ma;
    Ma.__name__ = ["flambe", "platform", "BasicPointer"];
    Ma.__interfaces__ = [cf];
    Ma.prototype = {
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
                    e = K.hitTest(p.root, a, b);
                if (null != e)
                    for (var f = e.owner;;) {
                        var g = f._compMap.Sprite_8;
                        null != g && d.push(g);
                        f = f.parent;
                        if (null == f) break
                    }
                this.prepare(a, b, e, c);
                for (a = 0; a < d.length;)
                    if (b = d[a], ++a, b.onPointerDown(Ma._sharedEvent), Ma._sharedEvent._stopped) return;
                this.down.emit(Ma._sharedEvent)
            }
        },
        submitMove: function(a, b, c) {
            if (!(a == this._x && b == this._y)) {
                var d = [],
                    e = K.hitTest(p.root, a, b);
                if (null != e)
                    for (var f = e.owner;;) {
                        var g = f._compMap.Sprite_8;
                        null != g && d.push(g);
                        f = f.parent;
                        if (null == f) break
                    }
                this.prepare(a, b, e, c);
                for (a = 0; a < d.length;)
                    if (b = d[a], ++a, b.onPointerMove(Ma._sharedEvent), Ma._sharedEvent._stopped) return;
                this.move.emit(Ma._sharedEvent)
            }
        },
        submitUp: function(a, b, c) {
            if (this._isDown) {
                this.submitMove(a, b, c);
                this._isDown = !1;
                var d = [],
                    e = K.hitTest(p.root, a, b);
                if (null != e)
                    for (var f = e.owner;;) {
                        var g = f._compMap.Sprite_8;
                        null != g && d.push(g);
                        f = f.parent;
                        if (null == f) break
                    }
                this.prepare(a, b, e, c);
                for (a = 0; a < d.length;)
                    if (b = d[a], ++a, b.onPointerUp(Ma._sharedEvent), Ma._sharedEvent._stopped) return;
                this.up.emit(Ma._sharedEvent)
            }
        },
        prepare: function(a, b, c, d) {
            this._x = a;
            this._y = b;
            Ma._sharedEvent.init(Ma._sharedEvent.id + 1, a, b, c, d)
        },
        __class__: Ma,
        __properties__: {
            get_y: "get_y",
            get_x: "get_x"
        }
    };
    var Zb = function(a, b, c) {
        this._x = this._y = 0;
        this._parent = null;
        this.rootX = this.rootY = 0;
        this._disposed = !1;
        this.root = a;
        this._width = b;
        this._height = c
    };
    g["flambe.platform.BasicTexture"] = Zb;
    Zb.__name__ = ["flambe", "platform", "BasicTexture"];
    Zb.__interfaces__ = [uf];
    Zb.__super__ = Qa;
    Zb.prototype = k(Qa.prototype, {
        subTexture: function(a, b, c, d) {
            c = this.root.createTexture(c, d);
            c._parent = this;
            c._x = a;
            c._y = b;
            c.rootX = this.rootX + a;
            c.rootY = this.rootY + b;
            return c
        },
        onDisposed: function() {
            null == this._parent && this.root.dispose()
        },
        get_width: function() {
            return this._width
        },
        get_height: function() {
            return this._height
        },
        __class__: Zb,
        __properties__: {
            get_height: "get_height",
            get_width: "get_width"
        }
    });
    var vf = function() {};
    g["flambe.subsystem.TouchSystem"] = vf;
    vf.__name__ = ["flambe", "subsystem", "TouchSystem"];
    var ce = function(a, b) {
        null == b && (b = 4);
        this._pointer = a;
        this._maxPoints = b;
        this._pointMap = new wb;
        this._points = [];
        this.down = new ba;
        this.move = new ba;
        this.up = new ba
    };
    g["flambe.platform.BasicTouch"] = ce;
    ce.__name__ = ["flambe", "platform", "BasicTouch"];
    ce.__interfaces__ = [vf];
    ce.prototype = {
        submitDown: function(a, b, c) {
            if (!this._pointMap.h.hasOwnProperty(a)) {
                var d = new Ye(a);
                d.init(b, c);
                this._pointMap.h[a] = d;
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
            null != d && (d.init(b, c), this._pointMap.remove(a), E.remove(this._points, d), this._pointerTouch == d && (this._pointerTouch = null, this._pointer.submitUp(b, c, d._source)), this.up.emit(d))
        },
        __class__: ce
    };
    var lc = function() {};
    g["flambe.sound.Sound"] = lc;
    lc.__name__ = ["flambe", "sound", "Sound"];
    lc.__interfaces__ = [Yb];
    lc.prototype = {
        __class__: lc,
        __properties__: {
            get_duration: "get_duration"
        }
    };
    var Va = function() {
        this._disposed = !1;
        this._playback = new oe(this)
    };
    g["flambe.platform.DummySound"] = Va;
    Va.__name__ = ["flambe", "platform", "DummySound"];
    Va.__interfaces__ = [lc];
    Va.getInstance = function() {
        null == Va._instance && (Va._instance = new Va);
        return Va._instance
    };
    Va.__super__ = Qa;
    Va.prototype = k(Qa.prototype, {
        play: function() {
            return this._playback
        },
        loop: function() {
            return this._playback
        },
        get_duration: function() {
            return 0
        },
        onDisposed: function() {},
        __class__: Va,
        __properties__: {
            get_duration: "get_duration"
        }
    });
    var mc = function() {};
    g["flambe.sound.Playback"] = mc;
    mc.__name__ = ["flambe", "sound", "Playback"];
    mc.__interfaces__ = [ya];
    mc.prototype = {
        __class__: mc,
        __properties__: {
            set_paused: "set_paused",
            get_paused: "get_paused",
            get_complete: "get_complete"
        }
    };
    var oe = function(a) {
        this._sound = a;
        this.volume = new ua(0);
        this._complete = new Ja(!0)
    };
    g["flambe.platform.DummyPlayback"] = oe;
    oe.__name__ = ["flambe", "platform", "DummyPlayback"];
    oe.__interfaces__ = [mc];
    oe.prototype = {
        get_paused: function() {
            return !0
        },
        set_paused: function() {
            return !0
        },
        get_complete: function() {
            return this._complete
        },
        dispose: function() {},
        __class__: oe,
        __properties__: {
            get_complete: "get_complete",
            set_paused: "set_paused",
            get_paused: "get_paused"
        }
    };
    var pe = function() {};
    g["flambe.subsystem.StorageSystem"] = pe;
    pe.__name__ = ["flambe", "subsystem", "StorageSystem"];
    pe.prototype = {
        __class__: pe
    };
    var fe = function() {
        this.clear()
    };
    g["flambe.platform.DummyStorage"] = fe;
    fe.__name__ = ["flambe", "platform", "DummyStorage"];
    fe.__interfaces__ = [pe];
    fe.prototype = {
        set: function(a, b) {
            var c = this._hash;
            null != o[a] ? c.setReserved(a, b) : c.h[a] = b;
            return !0
        },
        get: function(a, b) {
            var c = this._hash;
            return (null != o[a] ? c.existsReserved(a) : c.h.hasOwnProperty(a)) ? (c = this._hash, null != o[a] ? c.getReserved(a) : c.h[a]) : b
        },
        clear: function() {
            this._hash = new $
        },
        __class__: fe
    };
    var de = function() {
        this.down = new ba;
        this.move = new ba;
        this.up = new ba
    };
    g["flambe.platform.DummyTouch"] = de;
    de.__name__ = ["flambe", "platform", "DummyTouch"];
    de.__interfaces__ = [vf];
    de.prototype = {
        __class__: de
    };
    var Xc = function() {
        this._entries = []
    };
    g["flambe.platform.EventGroup"] = Xc;
    Xc.__name__ = ["flambe", "platform", "EventGroup"];
    Xc.__interfaces__ = [ya];
    Xc.prototype = {
        addListener: function(a, b, c) {
            a.addEventListener(b, c, !1);
            this._entries.push(new df(a, b, c))
        },
        addDisposingListener: function(a, b, c) {
            var d = this;
            this.addListener(a, b, function(a) {
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
        __class__: Xc
    };
    var df = function(a, b, c) {
        this.dispatcher = a;
        this.type = b;
        this.listener = c
    };
    g["flambe.platform._EventGroup.Entry"] = df;
    df.__name__ = ["flambe", "platform", "_EventGroup", "Entry"];
    df.prototype = {
        __class__: df
    };
    var qe = function() {};
    g["flambe.platform.InternalGraphics"] = qe;
    qe.__name__ = ["flambe", "platform", "InternalGraphics"];
    qe.__interfaces__ = [Ue];
    qe.prototype = {
        __class__: qe
    };
    var ef = function() {};
    g["flambe.subsystem.RendererSystem"] = ef;
    ef.__name__ = ["flambe", "subsystem", "RendererSystem"];
    ef.prototype = {
        __class__: ef,
        __properties__: {
            get_type: "get_type"
        }
    };
    var re = function() {};
    g["flambe.platform.InternalRenderer"] = re;
    re.__name__ = ["flambe", "platform", "InternalRenderer"];
    re.__interfaces__ = [ef];
    re.prototype = {
        __class__: re
    };
    var $e = function() {};
    g["flambe.platform.KeyCodes"] = $e;
    $e.__name__ = ["flambe", "platform", "KeyCodes"];
    $e.toKey = function(a) {
        switch (a) {
            case 8:
                return f.Backspace;
            case 9:
                return f.Tab;
            case 13:
                return f.Enter;
            case 15:
                return f.Command;
            case 16:
                return f.Shift;
            case 17:
                return f.Control;
            case 18:
                return f.Alt;
            case 20:
                return f.CapsLock;
            case 27:
                return f.Escape;
            case 32:
                return f.Space;
            case 33:
                return f.PageUp;
            case 34:
                return f.PageDown;
            case 35:
                return f.End;
            case 36:
                return f.Home;
            case 37:
                return f.Left;
            case 38:
                return f.Up;
            case 39:
                return f.Right;
            case 40:
                return f.Down;
            case 45:
                return f.Insert;
            case 46:
                return f.Delete;
            case 48:
                return f.Number0;
            case 49:
                return f.Number1;
            case 50:
                return f.Number2;
            case 51:
                return f.Number3;
            case 52:
                return f.Number4;
            case 53:
                return f.Number5;
            case 54:
                return f.Number6;
            case 55:
                return f.Number7;
            case 56:
                return f.Number8;
            case 57:
                return f.Number9;
            case 65:
                return f.A;
            case 66:
                return f.B;
            case 67:
                return f.C;
            case 68:
                return f.D;
            case 69:
                return f.E;
            case 70:
                return f.F;
            case 71:
                return f.G;
            case 72:
                return f.H;
            case 73:
                return f.I;
            case 74:
                return f.J;
            case 75:
                return f.K;
            case 76:
                return f.L;
            case 77:
                return f.M;
            case 78:
                return f.N;
            case 79:
                return f.O;
            case 80:
                return f.P;
            case 81:
                return f.Q;
            case 82:
                return f.R;
            case 83:
                return f.S;
            case 84:
                return f.T;
            case 85:
                return f.U;
            case 86:
                return f.V;
            case 87:
                return f.W;
            case 88:
                return f.X;
            case 89:
                return f.Y;
            case 90:
                return f.Z;
            case 96:
                return f.Numpad0;
            case 97:
                return f.Numpad1;
            case 98:
                return f.Numpad2;
            case 99:
                return f.Numpad3;
            case 100:
                return f.Numpad4;
            case 101:
                return f.Numpad5;
            case 102:
                return f.Numpad6;
            case 103:
                return f.Numpad7;
            case 104:
                return f.Numpad8;
            case 105:
                return f.Numpad9;
            case 106:
                return f.NumpadMultiply;
            case 107:
                return f.NumpadAdd;
            case 108:
                return f.NumpadEnter;
            case 109:
                return f.NumpadSubtract;
            case 110:
                return f.NumpadDecimal;
            case 111:
                return f.NumpadDivide;
            case 112:
                return f.F1;
            case 113:
                return f.F2;
            case 114:
                return f.F3;
            case 115:
                return f.F4;
            case 116:
                return f.F5;
            case 117:
                return f.F6;
            case 118:
                return f.F7;
            case 119:
                return f.F8;
            case 120:
                return f.F9;
            case 121:
                return f.F10;
            case 122:
                return f.F11;
            case 123:
                return f.F12;
            case 186:
                return f.Semicolon;
            case 187:
                return f.Equals;
            case 188:
                return f.Comma;
            case 189:
                return f.Minus;
            case 190:
                return f.Period;
            case 191:
                return f.Slash;
            case 192:
                return f.Backquote;
            case 219:
                return f.LeftBracket;
            case 220:
                return f.Backslash;
            case 221:
                return f.RightBracket;
            case 222:
                return f.Quote;
            case 16777234:
                return f.Menu;
            case 16777247:
                return f.Search
        }
        return f.Unknown(a)
    };
    var jc = function() {
        this._tickables = []
    };
    g["flambe.platform.MainLoop"] = jc;
    jc.__name__ = ["flambe", "platform", "MainLoop"];
    jc.updateEntity = function(a, b) {
        var c = a._compMap.SpeedAdjuster_3;
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
        for (c = a.firstChild; null != c;) d = c.next, jc.updateEntity(c, b), c = d
    };
    jc.prototype = {
        update: function(a) {
            if (!(0 >= a)) {
                1 < a && (a = 1);
                for (var b = 0; b < this._tickables.length;) {
                    var c = this._tickables[b];
                    null == c || c.update(a) ? this._tickables.splice(b, 1) : ++b
                }
                p.volume.update(a);
                jc.updateEntity(p.root, a)
            }
        },
        render: function(a) {
            var b = a.graphics;
            null != b && (a.willRender(), K.render(p.root, b), a.didRender())
        },
        addTickable: function(a) {
            this._tickables.push(a)
        },
        __class__: jc
    };
    var bf = function() {};
    g["flambe.platform.MouseCodes"] = bf;
    bf.__name__ = ["flambe", "platform", "MouseCodes"];
    bf.toButton = function(a) {
        switch (a) {
            case 0:
                return Na.Left;
            case 1:
                return Na.Middle;
            case 2:
                return Na.Right
        }
        return Na.Unknown(a)
    };
    var ff = function() {};
    g["flambe.platform.TextureRoot"] = ff;
    ff.__name__ = ["flambe", "platform", "TextureRoot"];
    ff.prototype = {
        __class__: ff
    };
    var se = function() {};
    g["flambe.platform.Tickable"] = se;
    se.__name__ = ["flambe", "platform", "Tickable"];
    se.prototype = {
        __class__: se
    };
    var te = function(a, b) {
        this._firstDraw = !1;
        this._canvasCtx = a.getContext("2d", {
            alpha: b
        })
    };
    g["flambe.platform.html.CanvasGraphics"] = te;
    te.__name__ = ["flambe", "platform", "html", "CanvasGraphics"];
    te.__interfaces__ = [qe];
    te.prototype = {
        save: function() {
            this._canvasCtx.save()
        },
        transform: function(a, b, c, d, e, f) {
            this._canvasCtx.transform(a, b, c, d, e, f)
        },
        restore: function() {
            this._canvasCtx.restore()
        },
        drawTexture: function(a, b, c) {
            this.drawSubTexture(a, b, c, 0, 0, a.get_width(), a.get_height())
        },
        drawSubTexture: function(a, b, c, d, e, f, g) {
            this._firstDraw ? (this._firstDraw = !1, this._canvasCtx.globalCompositeOperation = "copy", this.drawSubTexture(a, b, c, d, e, f, g), this._canvasCtx.globalCompositeOperation = "source-over") : this._canvasCtx.drawImage(a.root.image, a.rootX + d | 0, a.rootY + e | 0, f | 0, g | 0, b | 0, c | 0, f | 0, g | 0)
        },
        fillRect: function(a, b, c, d, e) {
            if (this._firstDraw) this._firstDraw = !1, this._canvasCtx.globalCompositeOperation = "copy", this.fillRect(a, b, c, d, e), this._canvasCtx.globalCompositeOperation = "source-over";
            else {
                for (a = (16777215 & a).toString(16); 6 > a.length;) a = "0" + aa.string(a);
                this._canvasCtx.fillStyle = "#" + aa.string(a);
                this._canvasCtx.fillRect(b | 0, c | 0, d | 0, e | 0)
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
        __class__: te
    };
    var kc = function(a) {
        this.graphics = new te(a, !1);
        this._hasGPU = new Ja(!0)
    };
    g["flambe.platform.html.CanvasRenderer"] = kc;
    kc.__name__ = ["flambe", "platform", "html", "CanvasRenderer"];
    kc.__interfaces__ = [re];
    kc.prototype = {
        get_type: function() {
            return kb.Canvas
        },
        createTextureFromImage: function(a) {
            a = new id(kc.CANVAS_TEXTURES ? ea.createCanvas(a) : a);
            return a.createTexture(a.width, a.height)
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
        __class__: kc,
        __properties__: {
            get_type: "get_type"
        }
    };
    var ue = function(a, b, c) {
        Zb.call(this, a, b, c)
    };
    g["flambe.platform.html.CanvasTexture"] = ue;
    ue.__name__ = ["flambe", "platform", "html", "CanvasTexture"];
    ue.__super__ = Zb;
    ue.prototype = k(Zb.prototype, {
        __class__: ue
    });
    var id = function(a) {
        this._graphics = null;
        this._disposed = !1;
        this.image = a;
        this.width = a.width;
        this.height = a.height
    };
    g["flambe.platform.html.CanvasTextureRoot"] = id;
    id.__name__ = ["flambe", "platform", "html", "CanvasTextureRoot"];
    id.__interfaces__ = [ff];
    id.__super__ = Qa;
    id.prototype = k(Qa.prototype, {
        createTexture: function(a, b) {
            return new ue(this, a, b)
        },
        onDisposed: function() {
            this._graphics = this.image = null
        },
        __class__: id
    });
    var gf = function() {};
    g["flambe.subsystem.ExternalSystem"] = gf;
    gf.__name__ = ["flambe", "subsystem", "ExternalSystem"];
    gf.prototype = {
        __class__: gf,
        __properties__: {
            get_supported: "get_supported"
        }
    };
    var ge = function() {};
    g["flambe.platform.html.HtmlExternal"] = ge;
    ge.__name__ = ["flambe", "platform", "html", "HtmlExternal"];
    ge.__interfaces__ = [gf];
    ge.prototype = {
        get_supported: function() {
            return !0
        },
        call: function(a, b) {
            null == b && (b = []);
            for (var c = window, d = c, e = 0, f = a.split("."); e < f.length;) {
                var g = f[e];
                ++e;
                c = d;
                d = Q.field(c, g)
            }
            return d.apply(c, b)
        },
        __class__: ge,
        __properties__: {
            get_supported: "get_supported"
        }
    };
    var be = function(a, b) {
        Xa.call(this, a);
        this._canvas = b
    };
    g["flambe.platform.html.HtmlMouse"] = be;
    be.__name__ = ["flambe", "platform", "html", "HtmlMouse"];
    be.__super__ = Xa;
    be.prototype = k(Xa.prototype, {
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
            return Xa.prototype.set_cursor.call(this, a)
        },
        __class__: be
    });
    var Yc = function(a) {
        this._disposed = !1;
        this.audioElement = a
    };
    g["flambe.platform.html.HtmlSound"] = Yc;
    Yc.__name__ = ["flambe", "platform", "html", "HtmlSound"];
    Yc.__interfaces__ = [lc];
    Yc.__super__ = Qa;
    Yc.prototype = k(Qa.prototype, {
        play: function(a) {
            null == a && (a = 1);
            return new jd(this, a, !1)
        },
        loop: function(a) {
            null == a && (a = 1);
            return new jd(this, a, !0)
        },
        get_duration: function() {
            return this.audioElement.duration
        },
        onDisposed: function() {
            this.audioElement = null
        },
        __class__: Yc,
        __properties__: {
            get_duration: "get_duration"
        }
    });
    var jd = function(a, b, c) {
        var d = this;
        this._sound = a;
        this._tickableAdded = !1;
        this._clonedElement = window.document.createElement("audio");
        this._clonedElement.loop = c;
        this._clonedElement.src = a.audioElement.src;
        this.volume = new ua(b, function() {
            d.updateVolume()
        });
        this.updateVolume();
        this._complete = new Ja(!1);
        this.playAudio();
        p.hidden._value && this.set_paused(!0)
    };
    g["flambe.platform.html._HtmlSound.HtmlPlayback"] = jd;
    jd.__name__ = ["flambe", "platform", "html", "_HtmlSound", "HtmlPlayback"];
    jd.__interfaces__ = [se, mc];
    jd.prototype = {
        get_paused: function() {
            return this._clonedElement.paused
        },
        set_paused: function(a) {
            this._clonedElement.paused != a && (a ? this._clonedElement.pause() : this.playAudio());
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
            this._tickableAdded || (yb.instance.mainLoop.addTickable(this), this._tickableAdded = !0, this._volumeBinding = p.volume.get_changed().connect(function() {
                a.updateVolume()
            }), this._hideBinding = p.hidden.get_changed().connect(function(b) {
                b ? (a._wasPaused = a._clonedElement.paused, a.set_paused(!0)) : a.set_paused(a._wasPaused)
            }))
        },
        updateVolume: function() {
            this._clonedElement.volume = p.volume._value * this.volume._value
        },
        __class__: jd,
        __properties__: {
            get_complete: "get_complete",
            set_paused: "set_paused",
            get_paused: "get_paused"
        }
    };
    var hf = function() {};
    g["flambe.subsystem.StageSystem"] = hf;
    hf.__name__ = ["flambe", "subsystem", "StageSystem"];
    hf.prototype = {
        __class__: hf,
        __properties__: {
            get_width: "get_width",
            get_height: "get_height"
        }
    };
    var fd = function(a) {
        var b = this;
        this._canvas = a;
        this.resize = new fb;
        this.scaleFactor = 1;
        ea.SHOULD_HIDE_MOBILE_BROWSER && (window.addEventListener("orientationchange", function() {
            ea.callLater(d(b, b.hideMobileBrowser), 200)
        }, !1), this.hideMobileBrowser());
        window.addEventListener("resize", d(this, this.onWindowResize), !1);
        this.onWindowResize(null);
        this.orientation = new Ja(null);
        null != window.orientation && (window.addEventListener("orientationchange", d(this, this.onOrientationChange), !1), this.onOrientationChange(null));
        this.fullscreen = new Ja(!1);
        ea.addVendorListener(window.document, "fullscreenchange", function() {
            b.updateFullscreen()
        }, !1);
        this.updateFullscreen()
    };
    g["flambe.platform.html.HtmlStage"] = fd;
    fd.__name__ = ["flambe", "platform", "html", "HtmlStage"];
    fd.__interfaces__ = [hf];
    fd.prototype = {
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
            if (this._canvas.width == c && this._canvas.height == d) return !1;
            this._canvas.width = c | 0;
            this._canvas.height = d | 0;
            this.resize.emit();
            return !0
        },
        hideMobileBrowser: function() {
            var a = this,
                b = window.document.documentElement.style;
            b.height = aa.string(window.innerHeight + 100) + "px";
            b.width = aa.string(window.innerWidth) + "px";
            b.overflow = "visible";
            ea.callLater(function() {
                ea.hideMobileBrowser();
                ea.callLater(function() {
                    b.height = aa.string(window.innerHeight) + "px";
                    a.onWindowResize(null)
                }, 100)
            })
        },
        onOrientationChange: function() {
            this.orientation.set__(ea.orientation(window.orientation))
        },
        updateFullscreen: function() {
            this.fullscreen.set__(!0 == ea.loadFirstExtension(["fullscreen", "fullScreen", "isFullScreen"], window.document).value)
        },
        __class__: fd,
        __properties__: {
            get_height: "get_height",
            get_width: "get_width"
        }
    };
    var ee = function(a) {
        this._storage = a
    };
    g["flambe.platform.html.HtmlStorage"] = ee;
    ee.__name__ = ["flambe", "platform", "html", "HtmlStorage"];
    ee.__interfaces__ = [pe];
    ee.prototype = {
        set: function(a, b) {
            var c;
            try {
                var d = new $a;
                d.useCache = !0;
                d.useEnumIndex = !1;
                d.serialize(b);
                c = d.toString()
            } catch (e) {
                return !1
            }
            try {
                this._storage.setItem("flambe:" + a, c)
            } catch (f) {
                return f instanceof z && (f = f.val), !1
            }
            return !0
        },
        get: function(a, b) {
            var c = null;
            try {
                c = this._storage.getItem("flambe:" + a)
            } catch (d) {
                d instanceof z && (d = d.val)
            }
            if (null != c) try {
                return Ra.run(c)
            } catch (e) {}
            return b
        },
        __class__: ee
    };
    var ea = function() {};
    g["flambe.platform.html.HtmlUtil"] = ea;
    ea.__name__ = ["flambe", "platform", "html", "HtmlUtil"];
    ea.callLater = function(a, b) {
        null == b && (b = 0);
        window.setTimeout(a, b)
    };
    ea.hideMobileBrowser = function() {
        window.scrollTo(1, 0)
    };
    ea.loadExtension = function(a, b) {
        null == b && (b = window);
        var c = Q.field(b, a);
        if (null != c) return {
            prefix: "",
            field: a,
            value: c
        };
        for (var c = a.charAt(0).toUpperCase() + E.substr(a, 1, null), d = 0, e = ea.VENDOR_PREFIXES; d < e.length;) {
            var f = e[d];
            ++d;
            var g = f + c,
                j = Q.field(b, g);
            if (null != j) return {
                prefix: f,
                field: g,
                value: j
            }
        }
        return {
            prefix: null,
            field: null,
            value: null
        }
    };
    ea.loadFirstExtension = function(a, b) {
        for (var c = 0; c < a.length;) {
            var d = a[c];
            ++c;
            d = ea.loadExtension(d, b);
            if (null != d.field) return d
        }
        return {
            prefix: null,
            field: null,
            value: null
        }
    };
    ea.polyfill = function(a, b) {
        null == b && (b = window);
        var c = ea.loadExtension(a, b).value;
        if (null == c) return !1;
        b[a] = c;
        return !0
    };
    ea.addVendorListener = function(a, b, c, d) {
        for (var e = 0, f = ea.VENDOR_PREFIXES; e < f.length;) {
            var g = f[e];
            ++e;
            a.addEventListener(g + b, c, d)
        }
        a.addEventListener(b, c, d)
    };
    ea.orientation = function(a) {
        switch (a) {
            case -90:
            case 90:
                return Ob.Landscape;
            default:
                return Ob.Portrait
        }
    };
    ea.createEmptyCanvas = function(a, b) {
        var c = window.document.createElement("canvas");
        c.width = a;
        c.height = b;
        return c
    };
    ea.createCanvas = function(a) {
        var b = ea.createEmptyCanvas(a.width, a.height),
            c = b.getContext("2d", null);
        c.save();
        c.globalCompositeOperation = "copy";
        c.drawImage(a, 0, 0);
        c.restore();
        return b
    };
    ea.fixAndroidMath = function() {
        if (0 <= window.navigator.userAgent.indexOf("Linux; U; Android 4")) {
            var a = Math.sin,
                b = Math.cos;
            Math.sin = function(b) {
                return 0 == b ? 0 : a(b)
            };
            Math.cos = function(a) {
                return 0 == a ? 1 : b(a)
            }
        }
    };
    var ga = function(a) {
        this._disposed = !1;
        this.buffer = a
    };
    g["flambe.platform.html.WebAudioSound"] = ga;
    ga.__name__ = ["flambe", "platform", "html", "WebAudioSound"];
    ga.__interfaces__ = [lc];
    ga.__properties__ = {
        get_supported: "get_supported"
    };
    ga.get_supported = function() {
        if (ga._detectSupport) {
            ga._detectSupport = !1;
            var a = ea.loadExtension("AudioContext").value;
            null != a && (ga.ctx = new a, ga.gain = ga.createGain(), ga.gain.connect(ga.ctx.destination), p.volume.watch(function(a) {
                ga.gain.gain.value = a
            }))
        }
        return null != ga.ctx
    };
    ga.createGain = function() {
        return null != ga.ctx.createGain ? ga.ctx.createGain() : ga.ctx.createGainNode()
    };
    ga.start = function(a, b) {
        null != a.start ? a.start(b) : a.noteOn(b)
    };
    ga.__super__ = Qa;
    ga.prototype = k(Qa.prototype, {
        play: function(a) {
            null == a && (a = 1);
            return new kd(this, a, !1)
        },
        loop: function(a) {
            null == a && (a = 1);
            return new kd(this, a, !0)
        },
        get_duration: function() {
            return this.buffer.duration
        },
        onDisposed: function() {
            this.buffer = null
        },
        __class__: ga,
        __properties__: {
            get_duration: "get_duration"
        }
    });
    var kd = function(a, b, c) {
        var d = this;
        this._sound = a;
        this._head = ga.gain;
        this._complete = new Ja(!1);
        this._sourceNode = ga.ctx.createBufferSource();
        this._sourceNode.buffer = a.buffer;
        this._sourceNode.loop = c;
        this._sourceNode.onended = function() {
            d._complete.set__(!0)
        };
        ga.start(this._sourceNode, 0);
        this.playAudio();
        this.volume = new ua(b, function(a) {
            d.setVolume(a)
        });
        1 != b && this.setVolume(b);
        p.hidden._value && this.set_paused(!0)
    };
    g["flambe.platform.html._WebAudioSound.WebAudioPlayback"] = kd;
    kd.__name__ = ["flambe", "platform", "html", "_WebAudioSound", "WebAudioPlayback"];
    kd.__interfaces__ = [se, mc];
    kd.prototype = {
        get_paused: function() {
            return 0 <= this._pausedAt
        },
        set_paused: function(a) {
            a != 0 <= this._pausedAt && (a ? (this._sourceNode.disconnect(), this._pausedAt = this.get_position()) : this.playAudio());
            return a
        },
        get_complete: function() {
            return this._complete
        },
        get_position: function() {
            return this._complete._value ? this._sound.get_duration() : 0 <= this._pausedAt ? this._pausedAt : (ga.ctx.currentTime - this._startedAt) % this._sound.get_duration()
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
            null == this._gainNode && (this._gainNode = ga.createGain(), this.insertNode(this._gainNode));
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
            this._startedAt = ga.ctx.currentTime;
            this._pausedAt = -1;
            this._tickableAdded || (yb.instance.mainLoop.addTickable(this), this._tickableAdded = !0, this._hideBinding = p.hidden.get_changed().connect(function(b) {
                b ? (a._wasPaused = 0 <= a._pausedAt, a.set_paused(!0)) : a.set_paused(a._wasPaused)
            }))
        },
        __class__: kd,
        __properties__: {
            get_position: "get_position",
            get_complete: "get_complete",
            set_paused: "set_paused",
            get_paused: "get_paused"
        }
    };
    var jf = function() {
        this._transitor = null;
        J.call(this);
        this.scenes = [];
        this.occludedScenes = [];
        this._root = new Oa
    };
    g["flambe.scene.Director"] = jf;
    jf.__name__ = ["flambe", "scene", "Director"];
    jf.__super__ = J;
    jf.prototype = k(J.prototype, {
        get_name: function() {
            return "Director_13"
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
            var a = this.scenes.length;
            return 0 < a ? this.scenes[a - 1] : null
        },
        show: function(a) {
            a = a._compMap.Scene_14;
            null != a && a.shown.emit()
        },
        invalidateVisibility: function() {
            for (var a = this.scenes.length; 0 < a;) {
                var b = this.scenes[--a]._compMap.Scene_14;
                if (null == b || b.opaque) break
            }
            this.occludedScenes = 0 < this.scenes.length ? this.scenes.slice(a, this.scenes.length - 1) : [];
            a = this.get_topScene();
            null != a && this.show(a)
        },
        completeTransition: function() {
            null != this._transitor && (this._transitor.complete(), this._transitor = null, this.invalidateVisibility())
        },
        __class__: jf,
        __properties__: k(J.prototype.__properties__, {
            get_topScene: "get_topScene"
        })
    });
    var wf = function(a, b, c, d) {
        this._from = a;
        this._to = b;
        this._transition = c;
        this._onComplete = d
    };
    g["flambe.scene._Director.Transitor"] = wf;
    wf.__name__ = ["flambe", "scene", "_Director", "Transitor"];
    wf.prototype = {
        update: function(a) {
            return this._transition.update(a)
        },
        complete: function() {
            this._transition.complete();
            this._onComplete()
        },
        __class__: wf
    };
    var kf = function(a) {
        null == a && (a = !0);
        J.call(this);
        this.opaque = a;
        this.shown = new fb;
        this.hidden = new fb
    };
    g["flambe.scene.Scene"] = kf;
    kf.__name__ = ["flambe", "scene", "Scene"];
    kf.__super__ = J;
    kf.prototype = k(J.prototype, {
        get_name: function() {
            return "Scene_14"
        },
        __class__: kf
    });
    var xf = function() {};
    g["flambe.scene.Transition"] = xf;
    xf.__name__ = ["flambe", "scene", "Transition"];
    xf.prototype = {
        update: function() {
            return !0
        },
        complete: function() {},
        __class__: xf
    };
    var fa = function(a) {
        this._fn = a
    };
    g["flambe.script.CallFunction"] = fa;
    fa.__name__ = ["flambe", "script", "CallFunction"];
    fa.__interfaces__ = [gb];
    fa.prototype = {
        update: function() {
            this._fn();
            return 0
        },
        __class__: fa
    };
    var Fa = function(a) {
        this._duration = a;
        this._elapsed = 0
    };
    g["flambe.script.Delay"] = Fa;
    Fa.__name__ = ["flambe", "script", "Delay"];
    Fa.__interfaces__ = [gb];
    Fa.prototype = {
        update: function(a) {
            this._elapsed += a;
            if (this._elapsed >= this._duration) {
                var b = this._elapsed - this._duration;
                this._elapsed = 0;
                return a - b
            }
            return -1
        },
        __class__: Fa
    };
    var Id = function() {
        J.call(this);
        this.stopAll()
    };
    g["flambe.script.Script"] = Id;
    Id.__name__ = ["flambe", "script", "Script"];
    Id.__super__ = J;
    Id.prototype = k(J.prototype, {
        get_name: function() {
            return "Script_72"
        },
        run: function(a) {
            a = new ve(a);
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
        __class__: Id
    });
    var ve = function(a) {
        this.removed = !1;
        this.action = a
    };
    g["flambe.script._Script.Handle"] = ve;
    ve.__name__ = ["flambe", "script", "_Script", "Handle"];
    ve.__interfaces__ = [ya];
    ve.prototype = {
        dispose: function() {
            this.removed = !0;
            this.action = null
        },
        __class__: ve
    };
    var bd = function(a) {
        this._idx = 0;
        this._runningActions = null != a ? a.slice() : []
    };
    g["flambe.script.Sequence"] = bd;
    bd.__name__ = ["flambe", "script", "Sequence"];
    bd.__interfaces__ = [gb];
    bd.prototype = {
        add: function(a) {
            this._runningActions.push(a)
        },
        removeAll: function() {
            this._idx = 0;
            this._runningActions = []
        },
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
        __class__: bd
    };
    var kb = g["flambe.subsystem.RendererType"] = {
        __ename__: ["flambe", "subsystem", "RendererType"],
        __constructs__: ["Stage3D", "WebGL", "Canvas"]
    };
    kb.Stage3D = ["Stage3D", 0];
    kb.Stage3D.toString = m;
    kb.Stage3D.__enum__ = kb;
    kb.WebGL = ["WebGL", 1];
    kb.WebGL.toString = m;
    kb.WebGL.__enum__ = kb;
    kb.Canvas = ["Canvas", 2];
    kb.Canvas.toString = m;
    kb.Canvas.__enum__ = kb;
    var we = function(a, b) {
        this._name = a.symbol;
        var c = a.rect;
        this.texture = b.subTexture(c[0], c[1], c[2], c[3]);
        c = a.origin;
        null != c ? (this.anchorX = c[0], this.anchorY = c[1]) : this.anchorY = this.anchorX = 0
    };
    g["flambe.swf.BitmapSymbol"] = we;
    we.__name__ = ["flambe", "swf", "BitmapSymbol"];
    we.__interfaces__ = [Xb];
    we.prototype = {
        createSprite: function() {
            var a = new Tb(this.texture);
            a.setAnchor(this.anchorX, this.anchorY);
            return a
        },
        __class__: we
    };
    var yf = function(a, b) {
        this.name = a;
        var c = 1 / b.length;
        this.frames = [];
        for (var d = 0; d < b.length;) {
            var e = b[d];
            ++d;
            this.frames.push(new lf(e, c))
        }
    };
    g["flambe.swf.Flipbook"] = yf;
    yf.__name__ = ["flambe", "swf", "Flipbook"];
    yf.prototype = {
        __class__: yf
    };
    var lf = function(a, b) {
        this.label = null;
        this.anchorX = this.anchorY = 0;
        this.texture = a;
        this.duration = b
    };
    g["flambe.swf.FlipbookFrame"] = lf;
    lf.__name__ = ["flambe", "swf", "FlipbookFrame"];
    lf.prototype = {
        toSymbol: function() {
            return new xe(this)
        },
        __class__: lf
    };
    var xe = function(a) {
        this._texture = a.texture;
        this._anchorX = a.anchorX;
        this._anchorY = a.anchorY
    };
    g["flambe.swf._Flipbook.FrameSymbol"] = xe;
    xe.__name__ = ["flambe", "swf", "_Flipbook", "FrameSymbol"];
    xe.__interfaces__ = [Xb];
    xe.prototype = {
        createSprite: function() {
            var a = new Tb(this._texture);
            a.setAnchor(this._anchorX, this._anchorY);
            return a
        },
        __class__: xe
    };
    var ye = function(a, b) {
        this._file = a.getFile(b + "/library.json");
        var c = JSON.parse(this._file.toString());
        this._symbols = new $;
        this.frameRate = c.frameRate;
        for (var d = [], e = 0, f = c.movies; e < f.length;) {
            var g = f[e];
            ++e;
            g = new ld(this, g);
            d.push(g);
            var j = g._name,
                i = this._symbols;
            null != o[j] ? i.setReserved(j, g) : i.h[j] = g
        }
        c = c.textureGroups[0].atlases;
        for (e = 0; e < c.length;) {
            j = c[e];
            ++e;
            f = a.getTexture(b + "/" + Ca.removeFileExtension(j.file));
            g = 0;
            for (j = j.textures; g < j.length;) {
                i = j[g];
                ++g;
                var i = new we(i, f),
                    l = i._name,
                    m = this._symbols;
                null != o[l] ? m.setReserved(l, i) : m.h[l] = i
            }
        }
        for (c = 0; c < d.length;) {
            f = d[c];
            ++c;
            e = 0;
            for (f = f.layers; e < f.length;) {
                g = f[e];
                ++e;
                g = g.keyframes;
                j = g.length;
                i = 0;
                for (l = j; i < l;) {
                    var k = i++,
                        m = g[k];
                    if (null != m.symbolName) {
                        var n = m.symbolName,
                            p = this._symbols,
                            n = null != o[n] ? p.getReserved(n) : p.h[n];
                        m.symbol = n
                    }
                    if (m.tweened && 1 == m.duration && k + 1 < j && (k = g[k + 1], !k.visible || null == k.symbolName)) m.visible = !1
                }
            }
        }
    };
    g["flambe.swf.Library"] = ye;
    ye.__name__ = ["flambe", "swf", "Library"];
    ye.fromFlipbooks = function(a) {
        var b = la.createEmptyInstance(ye);
        b._symbols = new $;
        b.frameRate = 60;
        b._file = null;
        for (var c = 0; c < a.length;) {
            var d = a[c];
            ++c;
            for (var e = [], f = 0, g = d.frames; f < g.length;) {
                var j = g[f];
                ++f;
                e.push({
                    duration: j.duration * b.frameRate,
                    label: j.label,
                    pivot: [j.anchorX, j.anchorY],
                    ref: ""
                })
            }
            e = new ld(b, {
                id: d.name,
                layers: [{
                    name: "flipbook",
                    flipbook: !0,
                    keyframes: e
                }]
            });
            f = d.name;
            g = b._symbols;
            null != o[f] ? g.setReserved(f, e) : g.h[f] = e;
            e = e.layers[0].keyframes;
            f = 0;
            for (g = d.frames.length; f < g;) {
                var j = f++,
                    i = d.frames[j].toSymbol();
                e[j].symbol = i
            }
        }
        return b
    };
    ye.prototype = {
        __class__: ye
    };
    var zb = function(a) {
        this._looped = null;
        K.call(this);
        this.symbol = a;
        this.speed = new ua(1);
        this._animators = Array(a.layers.length);
        for (var b = 0, c = this._animators.length; b < c;) {
            var d = b++;
            this._animators[d] = new mf(a.layers[d])
        }
        this._position = this._frame = 0;
        this["goto"](1)
    };
    g["flambe.swf.MovieSprite"] = zb;
    zb.__name__ = ["flambe", "swf", "MovieSprite"];
    zb.__super__ = K;
    zb.prototype = k(K.prototype, {
        onAdded: function() {
            K.prototype.onAdded.call(this);
            for (var a = 0, b = this._animators; a < b.length;) {
                var c = b[a];
                ++a;
                this.owner.addChild(c.content)
            }
        },
        onRemoved: function() {
            K.prototype.onRemoved.call(this);
            for (var a = 0, b = this._animators; a < b.length;) {
                var c = b[a];
                ++a;
                this.owner.removeChild(c.content)
            }
        },
        onUpdate: function(a) {
            K.prototype.onUpdate.call(this, a);
            this.speed.update(a);
            switch (this._flags & 384) {
                case 0:
                    this._position += this.speed._value * a;
                    this._position > this.symbol.duration && (this._position %= this.symbol.duration, null != this._looped && this._looped.emit());
                    break;
                case 256:
                    this._flags &= -257
            }
            this["goto"](this._position * this.symbol.frameRate)
        },
        "goto": function(a) {
            if (this._frame != a) {
                if (a < this._frame)
                    for (var b = 0, c = this._animators; b < c.length;) {
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
        set_pixelSnapping: function(a) {
            for (var b = 0, c = this._animators; b < c.length;) {
                var d = c[b];
                ++b;
                d.setPixelSnapping(a)
            }
            return K.prototype.set_pixelSnapping.call(this, a)
        },
        rewind: function() {
            this._position = 0;
            this._flags |= 256
        },
        __class__: zb
    });
    var mf = function(a) {
        this.keyframeIdx = 0;
        this.needsKeyframeUpdate = !1;
        this.layer = a;
        this.content = new Oa;
        if (a.empty) this._sprites = null;
        else {
            this._sprites = Array(a.keyframes.length);
            for (var b = 0, c = this._sprites.length; b < c;) {
                var d = b++,
                    e = a.keyframes[d];
                this._sprites[d] = 0 < d && a.keyframes[d - 1].symbol == e.symbol ? this._sprites[d - 1] : null == e.symbol ? new K : e.symbol.createSprite()
            }
            this.content.add(this._sprites[0])
        }
    };
    g["flambe.swf._MovieSprite.LayerAnimator"] = mf;
    mf.__name__ = ["flambe", "swf", "_MovieSprite", "LayerAnimator"];
    mf.prototype = {
        composeFrame: function(a) {
            if (null != this._sprites) {
                var b = this.layer.keyframes,
                    c = b.length - 1;
                if (a > this.layer.frames) this.content._compMap.Sprite_8.set_visible(!1), this.keyframeIdx = c, this.needsKeyframeUpdate = !0;
                else {
                    for (; this.keyframeIdx < c && b[this.keyframeIdx + 1].index <= a;) ++this.keyframeIdx, this.needsKeyframeUpdate = !0;
                    var d;
                    this.needsKeyframeUpdate ? (this.needsKeyframeUpdate = !1, d = this._sprites[this.keyframeIdx], d != this.content._compMap.Sprite_8 && ((null == d ? null : C.getClass(d)) == zb && d.rewind(), this.content.add(d))) : d = this.content._compMap.Sprite_8;
                    var e = b[this.keyframeIdx],
                        f = e.visible && null != e.symbol;
                    d.set_visible(f);
                    if (f) {
                        var f = e.x,
                            g = e.y,
                            j = e.scaleX,
                            i = e.scaleY,
                            l = e.skewX,
                            m = e.skewY,
                            k = e.alpha;
                        if (e.tweened && this.keyframeIdx < c) {
                            a = (a - e.index) / e.duration;
                            c = e.ease;
                            if (0 != c) {
                                var o;
                                0 > c ? (o = 1 - a, o = 1 - o * o, c = -c) : o = a * a;
                                a = c * o + (1 - c) * a
                            }
                            b = b[this.keyframeIdx + 1];
                            f += (b.x - f) * a;
                            g += (b.y - g) * a;
                            j += (b.scaleX - j) * a;
                            i += (b.scaleY - i) * a;
                            l += (b.skewX - l) * a;
                            m += (b.skewY - m) * a;
                            k += (b.alpha - k) * a
                        }
                        b = d.getLocalMatrix();
                        a = Math.sin(l);
                        l = Math.cos(l);
                        c = Math.sin(m);
                        m = Math.cos(m);
                        b.set(m * j, c * j, -a * i, l * i, f, g);
                        b.translate(-e.pivotX, -e.pivotY);
                        d.alpha.set__(k)
                    }
                }
            }
        },
        setPixelSnapping: function(a) {
            for (var b = 0, c = this._sprites; b < c.length;) {
                var d = c[b];
                ++b;
                d.set_pixelSnapping(a)
            }
        },
        __class__: mf
    };
    var ld = function(a, b) {
        this._name = b.id;
        this.frameRate = a.frameRate;
        this.frames = 0;
        this.layers = Array(b.layers.length);
        for (var c = 0, d = this.layers.length; c < d;) {
            var e = c++,
                f = new nf(b.layers[e]);
            this.frames = Math.max(f.frames, this.frames);
            this.layers[e] = f
        }
        this.duration = this.frames / this.frameRate
    };
    g["flambe.swf.MovieSymbol"] = ld;
    ld.__name__ = ["flambe", "swf", "MovieSymbol"];
    ld.__interfaces__ = [Xb];
    ld.prototype = {
        createSprite: function() {
            return new zb(this)
        },
        __class__: ld
    };
    var nf = function(a) {
        this.empty = !0;
        this.name = a.name;
        var b = null;
        this.keyframes = Array(a.keyframes.length);
        for (var c = 0, d = this.keyframes.length; c < d;) {
            var e = c++,
                b = new Gd(a.keyframes[e], b);
            this.keyframes[e] = b;
            this.empty = this.empty && null == b.symbolName
        }
        this.frames = null != b ? b.index + b.duration : 0
    };
    g["flambe.swf.MovieLayer"] = nf;
    nf.__name__ = ["flambe", "swf", "MovieLayer"];
    nf.prototype = {
        __class__: nf
    };
    var Gd = function(a, b) {
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
        null != c && (this.x = c[0], this.y = c[1]);
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
    g["flambe.swf.MovieKeyframe"] = Gd;
    Gd.__name__ = ["flambe", "swf", "MovieKeyframe"];
    Gd.prototype = {
        __class__: Gd
    };
    var Bd = function() {};
    g["flambe.util.BitSets"] = Bd;
    Bd.__name__ = ["flambe", "util", "BitSets"];
    Bd.set = function(a, b, c) {
        return c ? a | b : a & ~b
    };
    var Cf = function() {};
    g["flambe.util.LogHandler"] = Cf;
    Cf.__name__ = ["flambe", "util", "LogHandler"];
    var Ub = function() {
        this.success = new ba;
        this.error = new ba;
        this.progressChanged = new fb;
        this.hasResult = !1;
        this._total = this._progress = 0
    };
    g["flambe.util.Promise"] = Ub;
    Ub.__name__ = ["flambe", "util", "Promise"];
    Ub.prototype = {
        get_result: function() {
            if (!this.hasResult) throw new z("Promise result not yet available");
            return this._result
        },
        set_result: function(a) {
            if (this.hasResult) throw new z("Promise result already assigned");
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
        __class__: Ub,
        __properties__: {
            set_total: "set_total",
            set_progress: "set_progress",
            set_result: "set_result",
            get_result: "get_result"
        }
    };
    var Hd = function(a) {
        Ub.call(this);
        this._promises = a.slice();
        this._successCount = 0;
        this._disposer = new Mb;
        this.onProgressChanged();
        for (var a = this._promises, b = 0; b < a.length;) {
            var c = a[b];
            ++b;
            this._disposer.connect1(c.error, d(this, this.onError));
            this._disposer.connect0(c.progressChanged, d(this, this.onProgressChanged));
            c = c.get(d(this, this.onSuccess));
            null != c && this._disposer.add(c)
        }
    };
    g["flambe.util.MultiPromise"] = Hd;
    Hd.__name__ = ["flambe", "util", "MultiPromise"];
    Hd.__super__ = Ub;
    Hd.prototype = k(Ub.prototype, {
        onSuccess: function() {
            if (null != this._promises && (++this._successCount, this._successCount >= this._promises.length)) {
                for (var a = [], b = 0, c = this._promises; b < c.length;) {
                    var d = c[b];
                    ++b;
                    a.push(d.get_result())
                }
                this.finalize();
                this.set_result(a)
            }
        },
        onError: function(a) {
            null != this._promises && (this.finalize(), this.error.emit(a))
        },
        onProgressChanged: function() {
            if (null != this._promises) {
                for (var a = this._total = this._progress = 0, b = this._promises; a < b.length;) {
                    var c = b[a];
                    ++a;
                    this._progress += c._progress;
                    this._total += c._total
                }
                this.progressChanged.emit()
            }
        },
        finalize: function() {
            this._disposer.dispose();
            this._promises = null
        },
        __class__: Hd
    });
    var fb = function(a) {
        Da.call(this, a)
    };
    g["flambe.util.Signal0"] = fb;
    fb.__name__ = ["flambe", "util", "Signal0"];
    fb.__super__ = Da;
    fb.prototype = k(Da.prototype, {
        connect: function(a, b) {
            null == b && (b = !1);
            return this.connectImpl(a, b)
        },
        emit: function() {
            var a = this;
            this._head == Da.DISPATCHING_SENTINEL ? this.defer(function() {
                a.emitImpl()
            }) : this.emitImpl()
        },
        emitImpl: function() {
            for (var a = this.willEmit(), b = a; null != b;) b._listener(), b.stayInList || b.dispose(), b = b._next;
            this.didEmit(a)
        },
        __class__: fb
    });
    var Ge = function(a) {
        this.next = null;
        this.fn = a
    };
    g["flambe.util._SignalBase.Task"] = Ge;
    Ge.__name__ = ["flambe", "util", "_SignalBase", "Task"];
    Ge.prototype = {
        __class__: Ge
    };
    var Ca = function() {};
    g["flambe.util.Strings"] = Ca;
    Ca.__name__ = ["flambe", "util", "Strings"];
    Ca.getFileExtension = function(a) {
        var b = a.lastIndexOf(".");
        return 0 < b ? E.substr(a, b + 1, null) : null
    };
    Ca.removeFileExtension = function(a) {
        var b = a.lastIndexOf(".");
        return 0 < b ? E.substr(a, 0, b) : a
    };
    Ca.getUrlExtension = function(a) {
        var b = a.lastIndexOf("?");
        0 <= b && (a = E.substr(a, 0, b));
        b = a.lastIndexOf("/");
        0 <= b && (a = E.substr(a, b + 1, null));
        return Ca.getFileExtension(a)
    };
    Ca.joinPath = function(a, b) {
        0 < a.length && 47 != a.charCodeAt(a.length - 1) && (a += "/");
        return a + b
    };
    Ca.withFields = function(a, b) {
        var c = b.length;
        if (0 < c) {
            for (var a = a + (0 < a.length ? " [" : "["), d = 0; d < c;) {
                0 < d && (a += ", ");
                var e = b[d],
                    f = b[d + 1];
                if (C.__instanceof(f, Error)) {
                    var g = f.stack;
                    null != g && (f = g)
                }
                a += e + "=" + aa.string(f);
                d += 2
            }
            a += "]"
        }
        return a
    };
    var dc = function() {
        J.call(this)
    };
    g["flambesdk.AutoScale"] = dc;
    dc.__name__ = ["flambesdk", "AutoScale"];
    dc.__super__ = J;
    dc.prototype = k(J.prototype, {
        get_name: function() {
            return "AutoScale_2"
        },
        onAdded: function() {
            null != this.owner._compMap.Sprite_8 ? this._scaleSprite = this.owner._compMap.Sprite_8 : (this._scaleSprite = new K, this.owner.add(this._scaleSprite))
        },
        onUpdate: function() {
            var a = X.get_canvasScale();
            dc.SCALE = a;
            null != a && a != this._scaleSprite.scaleX._value && (this._scaleSprite.scaleX.set__(a), this._scaleSprite.scaleY.set__(a))
        },
        __class__: dc
    });
    var pb = function() {};
    g["flambesdk.BaseUtils"] = pb;
    pb.__name__ = ["flambesdk", "BaseUtils"];
    pb.setupBaseURL = function() {
        pb.BASE_URL = X.get_exists() ? X.get_isCrossdomain() ? pb.appendAssetsToUrl(X.get_base()) : pb.trimUrl(X.get_base()) : ""
    };
    pb.trimUrl = function(a) {
        if ("" == a) return "";
        if (0 > a.indexOf("http")) return "/" == a.charAt(0) && (a = E.substr(a, 1, a.length -
            1)), a;
        var b = a.indexOf("http://");
        0 > b ? (b = a.indexOf("https://"), b = 0 > b ? 0 : b + 8) : b += 7;
        b = a.indexOf("/", b);
        a = E.substr(a, b, a.length - b);
        return a = pb.appendAssetsToUrl(a)
    };
    pb.appendAssetsToUrl = function(a) {
        "/" != a.charAt(a.length - 1) && (a += "/");
        return a + "assets/"
    };
    var rd = function() {
        J.call(this);
        this.sdk = new lb;
        Za.set_onSuspendToggle(function(a) {
            p.root.add(new je(a ? 0 : 1))
        })
    };
    g["flambesdk.SDKComponent"] = rd;
    rd.__name__ = ["flambesdk", "SDKComponent"];
    rd.__super__ = J;
    rd.prototype = k(J.prototype, {
        get_name: function() {
            return "SDKComponent_1"
        },
        __class__: rd
    });
    var nc = function() {};
    g["haxe.IMap"] = nc;
    nc.__name__ = ["haxe", "IMap"];
    nc.prototype = {
        __class__: nc
    };
    var pf = function() {};
    g["haxe.Log"] = pf;
    pf.__name__ = ["haxe", "Log"];
    pf.trace = function(a, b) {
        C.__trace(a, b)
    };
    var $a = function() {
        this.buf = new Gb;
        this.cache = [];
        this.useCache = $a.USE_CACHE;
        this.useEnumIndex = $a.USE_ENUM_INDEX;
        this.shash = new $;
        this.scount = 0
    };
    g["haxe.Serializer"] = $a;
    $a.__name__ = ["haxe", "Serializer"];
    $a.prototype = {
        toString: function() {
            return this.buf.b
        },
        serializeString: function(a) {
            var b = this.shash,
                b = null != o[a] ? b.getReserved(a) : b.h[a];
            if (null != b) this.buf.b += "R", this.buf.b += null == b ? "null" : "" + b;
            else {
                var b = this.shash,
                    c = this.scount++;
                null != o[a] ? b.setReserved(a, c) : b.h[a] = c;
                this.buf.b += "y";
                a = encodeURIComponent(a);
                this.buf.b += aa.string(a.length);
                this.buf.b += ":";
                this.buf.b += null == a ? "null" : "" + a
            }
        },
        serializeRef: function(a) {
            for (var b = typeof a, c = 0, d = this.cache.length; c < d;) {
                var e = c++,
                    f = this.cache[e];
                if (typeof f == b && f == a) return this.buf.b += "r", this.buf.b += null == e ? "null" : "" + e, !0
            }
            this.cache.push(a);
            return !1
        },
        serializeFields: function(a) {
            for (var b = 0, c = Q.fields(a); b < c.length;) {
                var d = c[b];
                ++b;
                this.serializeString(d);
                this.serialize(Q.field(a, d))
            }
            this.buf.b += "g"
        },
        serialize: function(a) {
            var b = la["typeof"](a);
            switch (b[1]) {
                case 0:
                    this.buf.b += "n";
                    break;
                case 1:
                    if (0 == a) {
                        this.buf.b += "z";
                        break
                    }
                    this.buf.b += "i";
                    this.buf.b += null == a ? "null" : "" + a;
                    break;
                case 2:
                    isNaN(a) ? this.buf.b += "k" : isFinite(a) ? (this.buf.b += "d", this.buf.b += null == a ? "null" : "" + a) : this.buf.b += 0 > a ? "m" : "p";
                    break;
                case 3:
                    this.buf.b += a ? "t" : "f";
                    break;
                case 4:
                    if (C.__instanceof(a, Df)) a = la.getClassName(a), this.buf.b += "A", this.serializeString(a);
                    else if (C.__instanceof(a, Ef)) this.buf.b += "B", this.serializeString(la.getEnumName(a));
                    else {
                        if (this.useCache && this.serializeRef(a)) break;
                        this.buf.b += "o";
                        this.serializeFields(a)
                    }
                    break;
                case 5:
                    throw new z("Cannot serialize function");
                case 6:
                    b = b[2];
                    if (b == String) {
                        this.serializeString(a);
                        break
                    }
                    if (this.useCache && this.serializeRef(a)) break;
                    switch (b) {
                        case Array:
                            b = 0;
                            this.buf.b += "a";
                            for (var c = 0, d = a.length; c < d;) {
                                var e = c++;
                                null == a[e] ? ++b : (0 < b && (1 == b ? this.buf.b += "n" : (this.buf.b += "u", this.buf.b += null == b ? "null" : "" + b), b = 0), this.serialize(a[e]))
                            }
                            0 < b && (1 == b ? this.buf.b += "n" : (this.buf.b += "u", this.buf.b += null == b ? "null" : "" + b));
                            this.buf.b += "h";
                            break;
                        case Date:
                            this.buf.b += "v";
                            this.buf.b += aa.string(a.getTime());
                            break;
                        case pd:
                            this.buf.b += "l";
                            for (a = a.h; null != a;) b = a.item, a = a.next, this.serialize(b);
                            this.buf.b += "h";
                            break;
                        case wb:
                            this.buf.b += "q";
                            for (b = a.keys(); b.hasNext();) c = b.next(), this.buf.b += ":", this.buf.b += null == c ? "null" : "" + c, this.serialize(a.h[c]);
                            this.buf.b += "h";
                            break;
                        case qb:
                            this.buf.b += "M";
                            for (b = a.keys(); b.hasNext();) c = b.next(), d = Q.field(c, "__id__"), Q.deleteField(c, "__id__"), this.serialize(c), c.__id__ = d, this.serialize(a.h[c.__id__]);
                            this.buf.b += "h";
                            break;
                        case $:
                            this.buf.b += "b";
                            for (b = a.keys(); b.hasNext();) c = b.next(), this.serializeString(c), this.serialize(null != o[c] ? a.getReserved(c) : a.h[c]);
                            this.buf.b += "h";
                            break;
                        case mb:
                            this.buf.b += "s";
                            this.buf.b += aa.string(Math.ceil(8 * a.length / 6));
                            this.buf.b += ":";
                            c = 0;
                            d = a.length - 2;
                            b = $a.BASE64_CODES;
                            if (null == b) {
                                for (var b = Array($a.BASE64.length), e = 0, f = $a.BASE64.length; e < f;) {
                                    var g = e++;
                                    b[g] = E.cca($a.BASE64, g)
                                }
                                $a.BASE64_CODES = b
                            }
                            for (; c < d;) e = a.b[c++], f = a.b[c++], g = a.b[c++], this.buf.b += String.fromCharCode(b[e >> 2]), this.buf.b += String.fromCharCode(b[(e << 4 | f >> 4) & 63]), this.buf.b += String.fromCharCode(b[(f << 2 | g >> 6) & 63]), this.buf.b += String.fromCharCode(b[g & 63]);
                            c == d ? (d = a.b[c++], a = a.b[c++], this.buf.b += String.fromCharCode(b[d >> 2]), this.buf.b += String.fromCharCode(b[(d << 4 | a >> 4) & 63]), this.buf.b += String.fromCharCode(b[a << 2 & 63])) : c == d +
                                1 && (a = a.b[c++], this.buf.b += String.fromCharCode(b[a >> 2]), this.buf.b += String.fromCharCode(b[a << 4 & 63]));
                            break;
                        default:
                            this.useCache && this.cache.pop(), null != a.hxSerialize ? (this.buf.b += "C", this.serializeString(la.getClassName(b)), this.useCache && this.cache.push(a), a.hxSerialize(this), this.buf.b += "g") : (this.buf.b += "c", this.serializeString(la.getClassName(b)), this.useCache && this.cache.push(a), this.serializeFields(a))
                    }
                    break;
                case 7:
                    b = b[2];
                    if (this.useCache) {
                        if (this.serializeRef(a)) break;
                        this.cache.pop()
                    }
                    this.buf.b += aa.string(this.useEnumIndex ? "j" : "w");
                    this.serializeString(la.getEnumName(b));
                    this.useEnumIndex ? (this.buf.b += ":", this.buf.b += aa.string(a[1])) : this.serializeString(a[0]);
                    this.buf.b += ":";
                    b = a.length;
                    this.buf.b += aa.string(b - 2);
                    for (c = 2; c < b;) d = c++, this.serialize(a[d]);
                    this.useCache && this.cache.push(a);
                    break;
                default:
                    throw new z("Cannot serialize " + aa.string(a));
            }
        },
        __class__: $a
    };
    var ca = function(a) {
        var b = this;
        this.id = setInterval(function() {
            b.run()
        }, a)
    };
    g["haxe.Timer"] = ca;
    ca.__name__ = ["haxe", "Timer"];
    ca.delay = function(a, b) {
        var c = new ca(b);
        c.run = function() {
            c.stop();
            a()
        };
        return c
    };
    ca.prototype = {
        stop: function() {
            null != this.id && (clearInterval(this.id), this.id = null)
        },
        run: function() {},
        __class__: ca
    };
    var ze = function() {};
    g["haxe._Unserializer.DefaultResolver"] = ze;
    ze.__name__ = ["haxe", "_Unserializer", "DefaultResolver"];
    ze.prototype = {
        resolveClass: function(a) {
            return la.resolveClass(a)
        },
        resolveEnum: function(a) {
            return la.resolveEnum(a)
        },
        __class__: ze
    };
    var Ra = function(a) {
        this.buf = a;
        this.length = a.length;
        this.pos = 0;
        this.scache = [];
        this.cache = [];
        a = Ra.DEFAULT_RESOLVER;
        null == a && (a = new ze, Ra.DEFAULT_RESOLVER = a);
        this.resolver = a
    };
    g["haxe.Unserializer"] = Ra;
    Ra.__name__ = ["haxe", "Unserializer"];
    Ra.initCodes = function() {
        for (var a = [], b = 0, c = Ra.BASE64.length; b < c;) {
            var d = b++;
            a[Ra.BASE64.charCodeAt(d)] = d
        }
        return a
    };
    Ra.run = function(a) {
        return (new Ra(a)).unserialize()
    };
    Ra.prototype = {
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
        readFloat: function() {
            for (var a = this.pos;;) {
                var b = this.buf.charCodeAt(this.pos);
                if (b != b) break;
                if (43 <= b && 58 > b || 101 == b || 69 == b) this.pos++;
                else break
            }
            return parseFloat(E.substr(this.buf, a, this.pos - a))
        },
        unserializeObject: function(a) {
            for (;;) {
                if (this.pos >= this.length) throw new z("Invalid object");
                if (103 == this.buf.charCodeAt(this.pos)) break;
                var b = this.unserialize();
                if ("string" != typeof b) throw new z("Invalid object key");
                var c = this.unserialize();
                a[b] = c
            }
            this.pos++
        },
        unserializeEnum: function(a, b) {
            if (58 != this.buf.charCodeAt(this.pos++)) throw new z("Invalid enum format");
            var c = this.readDigits();
            if (0 == c) return la.createEnum(a, b);
            for (var d = []; 0 < c--;) d.push(this.unserialize());
            return la.createEnum(a, b, d)
        },
        unserialize: function() {
            switch (this.buf.charCodeAt(this.pos++)) {
                case 65:
                    var a = this.unserialize(),
                        b = this.resolver.resolveClass(a);
                    if (null == b) throw new z("Class not found " + a);
                    return b;
                case 66:
                    a = this.unserialize();
                    b = this.resolver.resolveEnum(a);
                    if (null == b) throw new z("Enum not found " +
                        a);
                    return b;
                case 67:
                    a = this.unserialize();
                    b = this.resolver.resolveClass(a);
                    if (null == b) throw new z("Class not found " + a);
                    a = la.createEmptyInstance(b);
                    this.cache.push(a);
                    a.hxUnserialize(this);
                    if (103 != this.buf.charCodeAt(this.pos++)) throw new z("Invalid custom data");
                    return a;
                case 77:
                    a = new qb;
                    for (this.cache.push(a); 104 != this.buf.charCodeAt(this.pos);) b = this.unserialize(), a.set(b, this.unserialize());
                    this.pos++;
                    return a;
                case 82:
                    a = this.readDigits();
                    if (0 > a || a >= this.scache.length) throw new z("Invalid string reference");
                    return this.scache[a];
                case 97:
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
                case 98:
                    a = new $;
                    for (this.cache.push(a); 104 != this.buf.charCodeAt(this.pos);) {
                        var b = this.unserialize(),
                            c = this.unserialize();
                        null != o[b] ? a.setReserved(b, c) : a.h[b] = c
                    }
                    this.pos++;
                    return a;
                case 99:
                    a = this.unserialize();
                    b = this.resolver.resolveClass(a);
                    if (null == b) throw new z("Class not found " +
                        a);
                    a = la.createEmptyInstance(b);
                    this.cache.push(a);
                    this.unserializeObject(a);
                    return a;
                case 100:
                    return this.readFloat();
                case 102:
                    return !1;
                case 105:
                    return this.readDigits();
                case 106:
                    a = this.unserialize();
                    b = this.resolver.resolveEnum(a);
                    if (null == b) throw new z("Enum not found " + a);
                    this.pos++;
                    var c = this.readDigits(),
                        d = b.__constructs__.slice()[c];
                    if (null == d) throw new z("Unknown enum index " + a + "@" + c);
                    a = this.unserializeEnum(b, d);
                    this.cache.push(a);
                    return a;
                case 107:
                    return NaN;
                case 108:
                    a = new pd;
                    for (this.cache.push(a); 104 != this.buf.charCodeAt(this.pos);) a.add(this.unserialize());
                    this.pos++;
                    return a;
                case 109:
                    return -Infinity;
                case 110:
                    return null;
                case 111:
                    return a = {}, this.cache.push(a), this.unserializeObject(a), a;
                case 112:
                    return Infinity;
                case 113:
                    a = new wb;
                    this.cache.push(a);
                    for (b = this.buf.charCodeAt(this.pos++); 58 == b;) b = this.readDigits(), c = this.unserialize(), a.h[b] = c, b = this.buf.charCodeAt(this.pos++);
                    if (104 != b) throw new z("Invalid IntMap format");
                    return a;
                case 114:
                    a = this.readDigits();
                    if (0 > a || a >= this.cache.length) throw new z("Invalid reference");
                    return this.cache[a];
                case 115:
                    a = this.readDigits();
                    d = this.buf;
                    if (58 != this.buf.charCodeAt(this.pos++) || this.length - this.pos < a) throw new z("Invalid bytes length");
                    var e = Ra.CODES;
                    null == e && (e = Ra.initCodes(), Ra.CODES = e);
                    for (var f = this.pos, g = a & 3, j = f + (a - g), b = new mb(new of (3 * (a >> 2) + (2 <= g ? g - 1 : 0))), c = 0; f < j;) {
                        var i = e[d.charCodeAt(f++)],
                            l = e[d.charCodeAt(f++)];
                        b.b[c++] = (i << 2 | l >> 4) & 255;
                        i = e[d.charCodeAt(f++)];
                        b.b[c++] = (l << 4 | i >> 2) & 255;
                        l = e[d.charCodeAt(f++)];
                        b.b[c++] = (i << 6 | l) & 255
                    }
                    2 <= g && (l = e[d.charCodeAt(f++)], j = e[d.charCodeAt(f++)], b.b[c++] = (l << 2 | j >> 4) & 255, 3 == g && (d = e[d.charCodeAt(f++)], b.b[c++] = (j << 4 | d >> 2) & 255));
                    this.pos += a;
                    this.cache.push(b);
                    return b;
                case 116:
                    return !0;
                case 118:
                    return 48 <= this.buf.charCodeAt(this.pos) && 57 >= this.buf.charCodeAt(this.pos) && 48 <= this.buf.charCodeAt(this.pos + 1) && 57 >= this.buf.charCodeAt(this.pos + 1) && 48 <= this.buf.charCodeAt(this.pos + 2) && 57 >= this.buf.charCodeAt(this.pos + 2) && 48 <= this.buf.charCodeAt(this.pos + 3) && 57 >= this.buf.charCodeAt(this.pos + 3) && 45 == this.buf.charCodeAt(this.pos + 4) ? (a = E.strDate(E.substr(this.buf, this.pos, 19)), this.pos += 19) : (a = this.readFloat(), a = new Date(a)), this.cache.push(a), a;
                case 119:
                    a = this.unserialize();
                    b = this.resolver.resolveEnum(a);
                    if (null == b) throw new z("Enum not found " + a);
                    a = this.unserializeEnum(b, this.unserialize());
                    this.cache.push(a);
                    return a;
                case 120:
                    throw z.wrap(this.unserialize());
                case 121:
                    a = this.readDigits();
                    if (58 != this.buf.charCodeAt(this.pos++) || this.length - this.pos < a) throw new z("Invalid string length");
                    b = E.substr(this.buf, this.pos, a);
                    this.pos += a;
                    b = decodeURIComponent(b.split("+").join(" "));
                    this.scache.push(b);
                    return b;
                case 122:
                    return 0
            }
            this.pos--;
            throw new z("Invalid char " + this.buf.charAt(this.pos) + " at position " + this.pos);
        },
        __class__: Ra
    };
    var mb = function(a) {
        this.length = a.byteLength;
        this.b = new zf(a);
        this.b.bufferValue = a;
        a.hxBytes = this;
        a.bytes = this.b
    };
    g["haxe.io.Bytes"] = mb;
    mb.__name__ = ["haxe", "io", "Bytes"];
    mb.alloc = function(a) {
        return new mb(new of (a))
    };
    mb.ofString = function(a) {
        for (var b = [], c = 0; c < a.length;) {
            var d = a.charCodeAt(c++);
            55296 <= d && 56319 >= d && (d = d - 55232 << 10 | a.charCodeAt(c++) & 1023);
            127 >= d ? b.push(d) : (2047 >= d ? b.push(192 | d >> 6) : (65535 >= d ? b.push(224 | d >> 12) : (b.push(240 | d >> 18), b.push(128 | d >> 12 & 63)), b.push(128 | d >> 6 & 63)), b.push(128 | d & 63))
        }
        return new mb((new zf(b)).buffer)
    };
    mb.ofData = function(a) {
        var b = a.hxBytes;
        return null != b ? b : new mb(a)
    };
    mb.fastGet = function(a, b) {
        return a.bytes[b]
    };
    mb.prototype = {
        __class__: mb
    };
    var Ae = function() {};
    g["haxe.ds.BalancedTree"] = Ae;
    Ae.__name__ = ["haxe", "ds", "BalancedTree"];
    Ae.prototype = {
        set: function(a, b) {
            this.root = this.setLoop(a, b, this.root)
        },
        get: function(a) {
            for (var b = this.root; null != b;) {
                var c = this.compare(a, b.key);
                if (0 == c) return b.value;
                b = 0 > c ? b.left : b.right
            }
            return null
        },
        remove: function(a) {
            try {
                return this.root = this.removeLoop(a, this.root), !0
            } catch (b) {
                b instanceof z && (b = b.val);
                if (C.__instanceof(b, String)) return !1;
                throw b;
            }
        },
        exists: function(a) {
            for (var b = this.root; null != b;) {
                var c = this.compare(a, b.key);
                if (0 == c) return !0;
                b = 0 > c ? b.left : b.right
            }
            return !1
        },
        setLoop: function(a, b, c) {
            if (null == c) return new Sa(null, a, b, null);
            var d = this.compare(a, c.key);
            if (0 == d) return new Sa(c.left, a, b, c.right, null == c ? 0 : c._height);
            if (0 > d) return this.balance(this.setLoop(a, b, c.left), c.key, c.value, c.right);
            a = this.setLoop(a, b, c.right);
            return this.balance(c.left, c.key, c.value, a)
        },
        removeLoop: function(a, b) {
            if (null == b) throw new z("Not_found");
            var c = this.compare(a, b.key);
            return 0 == c ? this.merge(b.left, b.right) : 0 > c ? this.balance(this.removeLoop(a, b.left), b.key, b.value, b.right) : this.balance(b.left, b.key, b.value, this.removeLoop(a, b.right))
        },
        merge: function(a, b) {
            if (null == a) return b;
            if (null == b) return a;
            var c = this.minBinding(b);
            return this.balance(a, c.key, c.value, this.removeMinBinding(b))
        },
        minBinding: function(a) {
            if (null == a) throw new z("Not_found");
            return null == a.left ? a : this.minBinding(a.left)
        },
        removeMinBinding: function(a) {
            return null == a.left ? a.right : this.balance(this.removeMinBinding(a.left), a.key, a.value, a.right)
        },
        balance: function(a, b, c, d) {
            var e = null == a ? 0 : a._height,
                f = null == d ? 0 : d._height;
            if (e > f + 2) return e = a.left, f = a.right, (null == e ? 0 : e._height) >= (null == f ? 0 : f._height) ? new Sa(a.left, a.key, a.value, new Sa(a.right, b, c, d)) : new Sa(new Sa(a.left, a.key, a.value, a.right.left), a.right.key, a.right.value, new Sa(a.right.right, b, c, d));
            return f > e + 2 ? (e = d.right, f = d.left, (null == e ? 0 : e._height) > (null == f ? 0 : f._height) ? new Sa(new Sa(a, b, c, d.left), d.key, d.value, d.right) : new Sa(new Sa(a, b, c, d.left.left), d.left.key, d.left.value, new Sa(d.left.right, d.key, d.value, d.right))) : new Sa(a, b, c, d, (e > f ? e : f) + 1)
        },
        compare: function(a, b) {
            return Q.compare(a, b)
        },
        __class__: Ae
    };
    var Sa = function(a, b, c, d, e) {
        null == e && (e = -1);
        this.left = a;
        this.key = b;
        this.value = c;
        this.right = d; - 1 == e ? (a = this.left, b = this.right, a = (null == a ? 0 : a._height) > (null == b ? 0 : b._height) ? this.left : this.right, a = null == a ? 0 : a._height, this._height = a + 1) : this._height = e
    };
    g["haxe.ds.TreeNode"] = Sa;
    Sa.__name__ = ["haxe", "ds", "TreeNode"];
    Sa.prototype = {
        __class__: Sa
    };
    var nb = function() {};
    g["haxe.ds.EnumValueMap"] = nb;
    nb.__name__ = ["haxe", "ds", "EnumValueMap"];
    nb.__interfaces__ = [nc];
    nb.__super__ = Ae;
    nb.prototype = k(Ae.prototype, {
        compare: function(a, b) {
            var c = a[1] - b[1];
            if (0 != c) return c;
            var c = a.slice(2),
                d = b.slice(2);
            return 0 == c.length && 0 == d.length ? 0 : this.compareArgs(c, d)
        },
        compareArgs: function(a, b) {
            var c = a.length - b.length;
            if (0 != c) return c;
            for (var c = 0, d = a.length; c < d;) {
                var e = c++,
                    e = this.compareArg(a[e], b[e]);
                if (0 != e) return e
            }
            return 0
        },
        compareArg: function(a, b) {
            return Q.isEnumValue(a) && Q.isEnumValue(b) ? this.compare(a, b) : a instanceof Array && null == a.__enum__ && b instanceof Array && null == b.__enum__ ? this.compareArgs(a, b) : Q.compare(a, b)
        },
        __class__: nb
    });
    var wb = function() {
        this.h = {}
    };
    g["haxe.ds.IntMap"] = wb;
    wb.__name__ = ["haxe", "ds", "IntMap"];
    wb.__interfaces__ = [nc];
    wb.prototype = {
        set: function(a, b) {
            this.h[a] = b
        },
        get: function(a) {
            return this.h[a]
        },
        exists: function(a) {
            return this.h.hasOwnProperty(a)
        },
        remove: function(a) {
            if (!this.h.hasOwnProperty(a)) return !1;
            delete this.h[a];
            return !0
        },
        keys: function() {
            var a = [],
                b;
            for (b in this.h) this.h.hasOwnProperty(b) && a.push(b | 0);
            return E.iter(a)
        },
        __class__: wb
    };
    var qb = function() {
        this.h = {
            __keys__: {}
        }
    };
    g["haxe.ds.ObjectMap"] = qb;
    qb.__name__ = ["haxe", "ds", "ObjectMap"];
    qb.__interfaces__ = [nc];
    qb.assignId = function(a) {
        return a.__id__ = ++qb.count
    };
    qb.getId = function(a) {
        return a.__id__
    };
    qb.prototype = {
        set: function(a, b) {
            var c = a.__id__ || (a.__id__ = ++qb.count);
            this.h[c] = b;
            this.h.__keys__[c] = a
        },
        get: function(a) {
            return this.h[a.__id__]
        },
        exists: function(a) {
            return null != this.h.__keys__[a.__id__]
        },
        remove: function(a) {
            a = a.__id__;
            if (null == this.h.__keys__[a]) return !1;
            delete this.h[a];
            delete this.h.__keys__[a];
            return !0
        },
        keys: function() {
            var a = [],
                b;
            for (b in this.h.__keys__) this.h.hasOwnProperty(b) && a.push(this.h.__keys__[b]);
            return E.iter(a)
        },
        __class__: qb
    };
    var Pa = function(a, b) {
        this.map = a;
        this.keys = b;
        this.index = 0;
        this.count = b.length
    };
    g["haxe.ds._StringMap.StringMapIterator"] = Pa;
    Pa.__name__ = ["haxe", "ds", "_StringMap", "StringMapIterator"];
    Pa.prototype = {
        hasNext: function() {
            return this.index < this.count
        },
        next: function() {
            var a = this.map,
                b = this.keys[this.index++];
            return null != o[b] ? a.getReserved(b) : a.h[b]
        },
        __class__: Pa
    };
    var $ = function() {
        this.h = {}
    };
    g["haxe.ds.StringMap"] = $;
    $.__name__ = ["haxe", "ds", "StringMap"];
    $.__interfaces__ = [nc];
    $.prototype = {
        set: function(a, b) {
            null != o[a] ? this.setReserved(a, b) : this.h[a] = b
        },
        get: function(a) {
            return null != o[a] ? this.getReserved(a) : this.h[a]
        },
        exists: function(a) {
            return null != o[a] ? this.existsReserved(a) : this.h.hasOwnProperty(a)
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
            if (null != o[a]) {
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
            return E.iter(this.arrayKeys())
        },
        arrayKeys: function() {
            var a = [],
                b;
            for (b in this.h) this.h.hasOwnProperty(b) && a.push(b);
            if (null != this.rh)
                for (b in this.rh) 36 == b.charCodeAt(0) && a.push(b.substr(1));
            return a
        },
        iterator: function() {
            return new Pa(this, this.arrayKeys())
        },
        __class__: $
    };
    var hd = function() {};
    g["haxe.rtti.Meta"] = hd;
    hd.__name__ = ["haxe", "rtti", "Meta"];
    hd.getType = function(a) {
        a = hd.getMeta(a);
        return null == a || null == a.obj ? {} : a.obj
    };
    hd.getMeta = function(a) {
        return a.__meta__
    };
    var Aa = function(a, b, c) {
        this.xml = b;
        this.message = a;
        this.position = c;
        this.lineNumber = 1;
        for (a = this.positionAtLine = 0; a < c;) {
            var d = a++,
                d = b.charCodeAt(d);
            10 == d ? (this.lineNumber++, this.positionAtLine = 0) : 13 != d && this.positionAtLine++
        }
    };
    g["haxe.xml.XmlParserException"] = Aa;
    Aa.__name__ = ["haxe", "xml", "XmlParserException"];
    Aa.prototype = {
        toString: function() {
            return la.getClassName(C.getClass(this)) + ": " + this.message +
                " at line " + this.lineNumber + " char " + this.positionAtLine
        },
        __class__: Aa
    };
    var Hb = function() {};
    g["haxe.xml.Parser"] = Hb;
    Hb.__name__ = ["haxe", "xml", "Parser"];
    Hb.parse = function(a, b) {
        null == b && (b = !1);
        var c = D.createDocument();
        Hb.doParse(a, b, 0, c);
        return c
    };
    Hb.doParse = function(a, b, c, d) {
        null == c && (c = 0);
        for (var e = null, f = 1, g = 1, j = null, i = 0, l = 0, m = 0, k = a.charCodeAt(c), n = new Gb, p = 1, q = -1; k == k;) {
            switch (f) {
                case 0:
                    switch (k) {
                        case 9:
                        case 10:
                        case 13:
                        case 32:
                            break;
                        default:
                            f = g;
                            continue
                    }
                    break;
                case 1:
                    if (60 == k) f = 0, g = 2;
                    else {
                        i = c;
                        f = 13;
                        continue
                    }
                    break;
                case 2:
                    switch (k) {
                        case 33:
                            if (91 == a.charCodeAt(c + 1)) {
                                c += 2;
                                if ("CDATA[" != E.substr(a, c, 6).toUpperCase()) throw new z(new Aa("Expected <![CDATA[", a, c));
                                c += 5;
                                f = 17
                            } else if (68 == a.charCodeAt(c + 1) || 100 == a.charCodeAt(c + 1)) {
                                if ("OCTYPE" != E.substr(a, c + 2, 6).toUpperCase()) throw new z(new Aa("Expected <!DOCTYPE", a, c));
                                c += 8;
                                f = 16
                            } else {
                                if (45 != a.charCodeAt(c + 1) || 45 != a.charCodeAt(c + 2)) throw new z(new Aa("Expected <\!--", a, c));
                                c += 2;
                                f = 15
                            }
                            i = c + 1;
                            break;
                        case 47:
                            if (null == d) throw new z(new Aa("Expected node name", a, c));
                            i = c + 1;
                            f = 0;
                            g = 10;
                            break;
                        case 63:
                            f = 14;
                            i = c;
                            break;
                        default:
                            f = 3;
                            i = c;
                            continue
                    }
                    break;
                case 3:
                    if (!(97 <= k && 122 >= k || 65 <= k && 90 >= k || 48 <= k && 57 >= k || 58 == k || 46 == k || 95 == k || 45 == k)) {
                        if (c == i) throw new z(new Aa("Expected node name", a, c));
                        e = D.createElement(E.substr(a, i, c - i));
                        d.addChild(e);
                        ++l;
                        f = 0;
                        g = 4;
                        continue
                    }
                    break;
                case 4:
                    switch (k) {
                        case 47:
                            f = 11;
                            break;
                        case 62:
                            f = 9;
                            break;
                        default:
                            f = 5;
                            i = c;
                            continue
                    }
                    break;
                case 5:
                    if (!(97 <= k && 122 >= k || 65 <= k && 90 >= k || 48 <= k && 57 >= k || 58 == k || 46 == k || 95 == k || 45 == k)) {
                        if (i == c) throw new z(new Aa("Expected attribute name", a, c));
                        j = E.substr(a, i, c - i);
                        if (e.exists(j)) throw new z(new Aa("Duplicate attribute [" + j + "]", a, c));
                        f = 0;
                        g = 6;
                        continue
                    }
                    break;
                case 6:
                    if (61 == k) f = 0, g = 7;
                    else throw new z(new Aa("Expected =", a, c));
                    break;
                case 7:
                    switch (k) {
                        case 34:
                        case 39:
                            n = new Gb;
                            f = 8;
                            i = c + 1;
                            q = k;
                            break;
                        default:
                            throw new z(new Aa('Expected "', a, c));
                    }
                    break;
                case 8:
                    switch (k) {
                        case 38:
                            p = c - i;
                            n.b += null == p ? E.substr(a, i, null) : E.substr(a, i, p);
                            f = 18;
                            p = 8;
                            i = c + 1;
                            break;
                        case 60:
                        case 62:
                            if (b) throw new z(new Aa("Invalid unescaped " + String.fromCharCode(k) + " in attribute value", a, c));
                            k == q && (g = c - i, n.b += null == g ? E.substr(a, i, null) : E.substr(a, i, g), g = n.b, n = new Gb, e.set(j, g), f = 0, g = 4);
                            break;
                        default:
                            k == q && (g = c - i, n.b += null == g ? E.substr(a, i, null) : E.substr(a, i, g), g = n.b, n = new Gb, e.set(j, g), f = 0, g = 4)
                    }
                    break;
                case 9:
                    i = c = Hb.doParse(a, b, c, e);
                    f = 1;
                    break;
                case 10:
                    if (!(97 <= k && 122 >= k || 65 <= k && 90 >= k || 48 <= k && 57 >= k || 58 == k || 46 == k || 95 == k || 45 == k)) {
                        if (i == c) throw new z(new Aa("Expected node name", a, c));
                        g = E.substr(a, i, c - i);
                        if (d.nodeType != D.Element) throw new z("Bad node type, expected Element but found " + d.nodeType);
                        if (g != d.nodeName) {
                            if (d.nodeType != D.Element) throw new z("Bad node type, expected Element but found " + d.nodeType);
                            throw new z(new Aa("Expected </" + d.nodeName + ">", a, c));
                        }
                        f = 0;
                        g = 12;
                        continue
                    }
                    break;
                case 11:
                    if (62 == k) f = 1;
                    else throw new z(new Aa("Expected >", a, c));
                    break;
                case 12:
                    if (62 == k) return 0 == l && d.addChild(D.createPCData("")), c;
                    throw new z(new Aa("Expected >", a, c));
                case 13:
                    60 == k ? (g = c - i, n.b += null == g ? E.substr(a, i, null) : E.substr(a, i, g), g = D.createPCData(n.b), n = new Gb, d.addChild(g), ++l, f = 0, g = 2) : 38 == k && (p = c -
                        i, n.b += null == p ? E.substr(a, i, null) : E.substr(a, i, p), f = 18, p = 13, i = c + 1);
                    break;
                case 14:
                    63 == k && 62 == a.charCodeAt(c + 1) && (++c, k = E.substr(a, i + 1, c - i - 2), d.addChild(D.createProcessingInstruction(k)), ++l, f = 1);
                    break;
                case 15:
                    45 == k && 45 == a.charCodeAt(c + 1) && 62 == a.charCodeAt(c + 2) && (d.addChild(D.createComment(E.substr(a, i, c - i))), ++l, c += 2, f = 1);
                    break;
                case 16:
                    91 == k ? ++m : 93 == k ? --m : 62 == k && 0 == m && (d.addChild(D.createDocType(E.substr(a, i, c - i))), ++l, f = 1);
                    break;
                case 17:
                    93 == k && 93 == a.charCodeAt(c + 1) && 62 == a.charCodeAt(c + 2) && (k = D.createCData(E.substr(a, i, c - i)), d.addChild(k), ++l, c += 2, f = 1);
                    break;
                case 18:
                    if (59 == k) {
                        i = E.substr(a, i, c - i);
                        if (35 == i.charCodeAt(0)) i = 120 == i.charCodeAt(1) ? aa.parseInt("0" + E.substr(i, 1, i.length - 1)) : aa.parseInt(E.substr(i, 1, i.length - 1)), n.b += String.fromCharCode(i);
                        else if (k = Hb.escapes, null != o[i] ? k.existsReserved(i) : k.h.hasOwnProperty(i)) k = Hb.escapes, i = null != o[i] ? k.getReserved(i) : k.h[i], n.b += aa.string(i);
                        else {
                            if (b) throw new z(new Aa("Undefined entity: " + i, a, c));
                            n.b += aa.string("&" + i + ";")
                        }
                        i = c + 1;
                        f = p
                    } else if (!(97 <= k && 122 >= k || 65 <= k && 90 >= k || 48 <= k && 57 >= k || 58 == k || 46 == k || 95 == k || 45 == k) && 35 != k) {
                        if (b) throw new z(new Aa("Invalid character in entity: " + String.fromCharCode(k), a, c));
                        n.b += "&";
                        k = c - i;
                        n.b += null == k ? E.substr(a, i, null) : E.substr(a, i, k);
                        i = c--;
                        f = p
                    }
            }
            k = a.charCodeAt(++c)
        }
        1 == f && (i = c, f = 13);
        if (13 == f) {
            if (c != i || 0 == l) b = c - i, n.b += null == b ? E.substr(a, i, null) : E.substr(a, i, b), d.addChild(D.createPCData(n.b));
            return c
        }
        if (!b && 18 == f && 13 == p) return n.b += "&", b = c - i, n.b += null == b ? E.substr(a, i, null) : E.substr(a, i, b), d.addChild(D.createPCData(n.b)), c;
        throw new z(new Aa("Unexpected end", a, c));
    };
    var z = function(a) {
        Error.call(this);
        this.val = a;
        this.message = "" + a;
        Error.captureStackTrace && Error.captureStackTrace(this, z)
    };
    g["js._Boot.HaxeError"] = z;
    z.__name__ = ["js", "_Boot", "HaxeError"];
    z.wrap = function(a) {
        return a instanceof Error ? a : new z(a)
    };
    z.__super__ = Error;
    z.prototype = k(Error.prototype, {
        __class__: z
    });
    var C = function() {};
    g["js.Boot"] = C;
    C.__name__ = ["js", "Boot"];
    C.__unhtml = function(a) {
        return a.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;")
    };
    C.__trace = function(a, b) {
        var c = null != b ? b.fileName + ":" + b.lineNumber + ": " : "",
            c = c + C.__string_rec(a, "");
        if (null != b && null != b.customParams)
            for (var d = 0, e = b.customParams; d < e.length;) {
                var f = e[d];
                ++d;
                c += "," + C.__string_rec(f, "")
            }
        var g;
        "undefined" != typeof document ? (g = document.getElementById("haxe:trace"), d = null != g) : d = !1;
        d ? g.innerHTML += C.__unhtml(c) + "<br/>" : "undefined" != typeof console && null != console.log && console.log(c)
    };
    C.getClass = function(a) {
        if (a instanceof Array && null == a.__enum__) return Array;
        var b = a.__class__;
        if (null != b) return b;
        a = C.__nativeClassName(a);
        return null != a ? C.__resolveNativeClass(a) : null
    };
    C.__string_rec = function(a, b) {
        if (null == a) return "null";
        if (5 <= b.length) return "<...>";
        var c = typeof a;
        if ("function" == c && (a.__name__ || a.__ename__)) c = "object";
        switch (c) {
            case "function":
                return "<function>";
            case "object":
                if (a instanceof Array) {
                    if (a.__enum__) {
                        if (2 == a.length) return a[0];
                        for (var c = a[0] + "(", b = b + "\t", d = 2, e = a.length; d < e;) var f = d++,
                            c = 2 != f ? c + ("," + C.__string_rec(a[f], b)) : c + C.__string_rec(a[f], b);
                        return c + ")"
                    }
                    c = a.length;
                    d = "[";
                    b += "\t";
                    for (e = 0; e < c;) f = e++, d += (0 < f ? "," : "") + C.__string_rec(a[f], b);
                    return d + "]"
                }
                try {
                    d = a.toString
                } catch (g) {
                    return "???"
                }
                if (null != d && d != Object.toString && "function" == typeof d && (c = a.toString(), "[object Object]" != c)) return c;
                c = null;
                d = "{\n";
                b += "\t";
                e = null != a.hasOwnProperty;
                for (c in a)
                    if (!e || a.hasOwnProperty(c)) "prototype" == c || "__class__" == c || "__super__" == c || "__interfaces__" == c || "__properties__" == c || (2 != d.length && (d += ", \n"), d += b + c + " : " + C.__string_rec(a[c], b));
                b = b.substring(1);
                return d + ("\n" + b + "}");
            case "string":
                return a;
            default:
                return "" +
                    a
        }
    };
    C.__interfLoop = function(a, b) {
        if (null == a) return !1;
        if (a == b) return !0;
        var c = a.__interfaces__;
        if (null != c)
            for (var d = 0, e = c.length; d < e;) {
                var f = d++,
                    f = c[f];
                if (f == b || C.__interfLoop(f, b)) return !0
            }
        return C.__interfLoop(a.__super__, b)
    };
    C.__instanceof = function(a, b) {
        if (null == b) return !1;
        switch (b) {
            case Array:
                return a instanceof Array ? null == a.__enum__ : !1;
            case Ff:
                return "boolean" == typeof a;
            case If:
                return !0;
            case Gf:
                return "number" == typeof a;
            case Jf:
                return "number" == typeof a ? (a | 0) === a : !1;
            case String:
                return "string" == typeof a;
            default:
                if (null != a)
                    if ("function" == typeof b) {
                        if (a instanceof b || C.__interfLoop(C.getClass(a), b)) return !0
                    } else {
                        if ("object" == typeof b && C.__isNativeObj(b) && a instanceof b) return !0
                    }
                else return !1;
                return b == Df && null != a.__name__ || b == Ef && null != a.__ename__ ? !0 : a.__enum__ == b
        }
    };
    C.__cast = function(a, b) {
        if (C.__instanceof(a, b)) return a;
        throw new z("Cannot cast " + aa.string(a) + " to " + aa.string(b));
    };
    C.__nativeClassName = function(a) {
        a = C.__toStr.call(a).slice(8, -1);
        return "Object" == a || "Function" == a || "Math" == a || "JSON" == a ? null : a
    };
    C.__isNativeObj = function(a) {
        return null != C.__nativeClassName(a)
    };
    C.__resolveNativeClass = function(a) {
        return Af[a]
    };
    var sf = function() {};
    g["js.Browser"] = sf;
    sf.__name__ = ["js", "Browser"];
    sf.getLocalStorage = function() {
        try {
            var a = window.localStorage;
            a.getItem("");
            return a
        } catch (b) {
            return null
        }
    };
    var rb = function(a) {
        if (a instanceof Array && null == a.__enum__) this.a = a, this.byteLength = a.length;
        else {
            this.a = [];
            for (var b = 0; b < a;) this.a[b++] = 0;
            this.byteLength = a
        }
    };
    g["js.html.compat.ArrayBuffer"] = rb;
    rb.__name__ = ["js", "html", "compat", "ArrayBuffer"];
    rb.sliceImpl = function(a, b) {
        var c = new zf(this, a, null == b ? null : b - a),
            d = new of (c.byteLength);
        (new zf(d)).set(c);
        return d
    };
    rb.prototype = {
        slice: function(a, b) {
            return new rb(this.a.slice(a, b))
        },
        __class__: rb
    };
    var Pb = function() {};
    g["js.html.compat.Uint8Array"] = Pb;
    Pb.__name__ = ["js", "html", "compat", "Uint8Array"];
    Pb._new = function(a, b, c) {
        if ("number" == typeof a) {
            c = [];
            for (b = 0; b < a;) {
                var d = b++;
                c[d] = 0
            }
            c.byteLength = c.length;
            c.byteOffset = 0;
            c.buffer = new rb(c)
        } else if (C.__instanceof(a, rb)) null == b && (b = 0), null == c && (c = a.byteLength - b), c = 0 == b ? a.a : a.a.slice(b, b + c), c.byteLength = c.length, c.byteOffset = b, c.buffer = a;
        else if (a instanceof Array && null == a.__enum__) c = a.slice(), c.byteLength = c.length, c.byteOffset = 0, c.buffer = new rb(c);
        else throw new z("TODO " + aa.string(a));
        c.subarray = Pb._subarray;
        c.set = Pb._set;
        return c
    };
    Pb._set = function(a, b) {
        if (C.__instanceof(a.buffer, rb)) {
            if (a.byteLength + b > this.byteLength) throw new z("set() outside of range");
            for (var c = 0, d = a.byteLength; c < d;) {
                var e = c++;
                this[e + b] = a[e]
            }
        } else if (a instanceof Array && null == a.__enum__) {
            if (a.length + b > this.byteLength) throw new z("set() outside of range");
            c = 0;
            for (d = a.length; c < d;) e = c++, this[e + b] = a[e]
        } else throw new z("TODO");
    };
    Pb._subarray = function(a, b) {
        var c = Pb._new(this.slice(a, b));
        c.byteOffset = a;
        return c
    };
    var lb = function() {
        lb.eval("nick_sdk_client.SDK.initialize")
    };
    g["nicksdk.SDK"] = lb;
    lb.__name__ = ["nicksdk", "SDK"];
    lb.eval = function(a, b) {
        null == b && (b = []);
        for (var c = null, d = null, e = 0, f = a.split("."); e < f.length;) {
            var g = f[e];
            ++e;
            c = d;
            d = null == c ? Q.field(window, g) : Q.field(c, g)
        }
        e = null;
        null != d && (e = d.apply(c, b));
        return e
    };
    lb.bind = function(a, b) {
        for (var c = null, d = null, e = "", f = 0, g = a.split("."); f < g.length;) {
            var i = g[f];
            ++f;
            c = d;
            e = i;
            d = null == c ? Q.field(window, i) : Q.field(c, i)
        }
        null != c && (c[e] = b)
    };
    lb.prototype = {
        __class__: lb
    };
    var Ib = function() {};
    g["nicksdk.event.GameEventEmitter"] = Ib;
    Ib.__name__ = ["nicksdk", "event", "GameEventEmitter"];
    Ib.sendGameEvent = function(a, b) {
        Ib.callExternal(a, b)
    };
    Ib.callExternal = function(a, b) {
        lb.eval("nick_sdk_client.GameEventEmitter.sendGameEvent", [a, b])
    };
    var Za = function() {};
    g["nicksdk.event.GameEventListener"] = Za;
    Za.__name__ = ["nicksdk", "event", "GameEventListener"];
    Za.__properties__ = {
        set_onDebugModeToggle: "set_onDebugModeToggle",
        set_onSuspendToggle: "set_onSuspendToggle",
        set_onPlaybackToggle: "set_onPlaybackToggle",
        set_onAudioToggle: "set_onAudioToggle"
    };
    Za.set_onAudioToggle = function(a) {
        Za.onAudioToggle = a;
        lb.bind("nick_sdk_client.GameEventListener.onAudioToggle", a);
        return a
    };
    Za.set_onPlaybackToggle = function(a) {
        Za.onPlaybackToggle = a;
        lb.bind("nick_sdk_client.GameEventListener.onPlaybackToggle", a);
        return a
    };
    Za.set_onSuspendToggle = function(a) {
        Za.onSuspendToggle = a;
        lb.bind("nick_sdk_client.GameEventListener.onSuspendToggle", a);
        return a
    };
    Za.set_onDebugModeToggle = function(a) {
        Za.onDebugModeToggle = a;
        lb.bind("nick_sdk_client.GameEventListener.onDebugModeToggle", a);
        return a
    };
    var X = function() {};
    g["nicksdk.jsembed.JSEmbedProxy"] = X;
    X.__name__ = ["nicksdk", "jsembed", "JSEmbedProxy"];
    X.__properties__ = {
        get_canvasScale: "get_canvasScale",
        get_isCrossdomain: "get_isCrossdomain",
        get_base: "get_base",
        get_exists: "get_exists"
    };
    X.get_exists = function() {
        return X.callJSEmbedMethod("exists()")
    };
    X.get_base = function() {
        return X.callJSEmbedMethod("baseUrl()")
    };
    X.get_isCrossdomain = function() {
        return X.callJSEmbedMethod("isBaseCrossdomain()")
    };
    X.get_canvasScale = function() {
        return parseFloat(X.callJSEmbedMethod("canvasScale()"))
    };
    X.callJSEmbedMethod = function(a) {
        try {
            var b = X.eval("eval", ["jsembed." + a]);
            return null == b ? "" : b
        } catch (c) {
            return ""
        }
    };
    X.eval = function(a, b) {
        null == b && (b = []);
        for (var c = null, d = 0, e = a.split("."); d < e.length;) c = e[d], ++d, c = Q.field(window, c);
        return c.apply(null, b)
    };
    var zd, Hf = 0;
    g.Math = Math;
    String.prototype.__class__ = g.String = String;
    String.__name__ = ["String"];
    g.Array = Array;
    Array.__name__ = ["Array"];
    Date.prototype.__class__ = g.Date = Date;
    Date.__name__ = ["Date"];
    var Jf = g.Int = {
            __name__: ["Int"]
        },
        If = g.Dynamic = {
            __name__: ["Dynamic"]
        },
        Gf = g.Float = Number;
    Gf.__name__ = ["Float"];
    var Ff = g.Bool = Boolean;
    Ff.__ename__ = ["Bool"];
    var Df = g.Class = {
            __name__: ["Class"]
        },
        Ef = {},
        o = {},
        of = Af.ArrayBuffer || rb;
    null == of .prototype.slice && ( of .prototype.slice = rb.sliceImpl);
    var zf = Af.Uint8Array || Pb._new;
    A.DEFAULT_BG_COLOR = 0;
    A.DEFAULT_WIDTH = 960;
    A.DEFAULT_HEIGHT = 560;
    A.GLOBAL_SCALE = 1;
    A.GLOBAL_OFFSET = new oa;
    A.ASSET_SCALE = 1;
    D.Element = 0;
    D.PCData = 1;
    D.CData = 2;
    D.Comment = 3;
    D.DocType = 4;
    D.ProcessingInstruction = 5;
    D.Document = 6;
    da._settings = new $;
    q._map = new $;
    ia._mediaRefCount = 0;
    ia._detectBlobSupport = !0;
    Da.DISPATCHING_SENTINEL = new fc(null, null);
    i.__meta__ = {
        obj: {
            "final": null
        }
    };
    i._soundFilesHashByID = new $;
    i._soundFilesHashByFilename = new $;
    i._soundClipChannels = new $;
    i.path = "";
    i.entity = new Oa;
    i.allowBtnVOInterrupt = !1;
    i._muteState = new Ja(!1);
    i._disallowedSounds = [];
    Ie.__meta__ = {
        obj: {
            "final": null
        }
    };
    j._componentID = 1;
    pc.NAME = "BackBtn_75";
    qc.NAME = "MuteBtn_74";
    sb.NAME = "PlayBtn_67";
    rc.NAME = "UnmuteBtn_73";
    Qb.NAME = "SyncWithParent_0";
    zc.NAME = "TitleScreen_71";
    sc.NAME = "ToggleContainer_70";
    K._scratchPoint = new oa;
    H.NAME = "Sprite_8";
    H._instanceNum = 0;
    Z.NAME = "Sprite_8";
    Z.START_FRAME = 1;
    cd.NAME = "Sprite_8";
    Vb.NAME = "Sprite_8";
    Wb.NAME = "Sprite_8";
    e._signals = new $;
    e._signalConnections = new $;
    l._manifestHash = new $;
    l._assetPackHash = new $;
    l._batches = [];
    l._onProgress = new ba;
    l.loadMobileAssets = !1;
    Ga._txtDict = new $;
    Ga._intxtDict = new $;
    dd.NAME = "Sprite_8";
    ed.NAME = "Sprite_8";
    w._timeout = 2147483647;
    w._triggers = [];
    n.__meta__ = {
        obj: {
            "final": null
        }
    };
    Ab.NAME = "HighlightUIElement_69";
    Ac.NAME = "IntroScene_68";
    oc.NAME = "PlayBtn_67";
    wc.NAME = "Customer_66";
    xc.NAME = "CustomerPitcher_65";
    yc.NAME = "CustomerPitcherAnim_64";
    ub.NAME = "Customers_63";
    ub._randomCustomersArray = new ja("cornPeg,chaseCricket,milliPickle,geoShine,shimmerMarshall,skyeJasper".split(","));
    Ta.NAME = "DressUpActivity_62";
    Ta.introComplete = !1;
    Rb.NAME = "DressUpCharacter_61";
    Rb._randomUnlockItem = new ja("awning7,awning8,awning9,table7,table8,table9,wheel7,wheel8,wheel9,glass7,glass8,glass9".split(","));
    pa.NAME = "DressUpContainer_60";
    pa._selectedItemCount = 0;
    pa._locked = !1;
    P.NAME = "DressUpItemBtn_59";
    P._downDelayInMSec = 300;
    P._xDownMin = 40;
    P._yDownMax = 20;
    Cc.NAME = "DressUpNextBtn_58";
    tc.NAME = "DressUpScrollBtn_57";
    Dc.NAME = "DressUpSkipBtn_56";
    Cb.NAME = "DressUpTabBtn_55";
    Bc.NAME = "DressUpTutorial_54";
    Ec.NAME = "Toolbox_53";
    Y.NAME = "ToolboxTray_52";
    Y._swipeScrollDelayInMSec = 300;
    Y._xSwipeMax = 40;
    Y._ySwipeMin = 20;
    Y._originalMcItemsLocation = new oa(101, 85);
    Y.SCROLL_SPEED = 75;
    Y.itemOffset = new oa(50, 20);
    Tc.NAME = "EndScreen_51";
    Uc.NAME = "PlayAgainBtn_50";
    qa.NAME = "LemonadeActivity_49";
    qa._randomSoundMap = new $;
    I._randomAmountMap = new nb;
    I._amountArrayMap = new nb;
    I._correctAmountMap = new nb;
    Gc.NAME = "LemonadeBotBurst_48";
    Hc.NAME = "LemonadeCharacter_47";
    M.NAME = "LemonadeCharacterHead_46";
    Eb.NAME = "LemonadeBaseItem_32";
    Fb.NAME = "LemonadeBaseBtn_31";
    Bb.NAME = "LemonadeCrushItem_36";
    Sb.NAME = "LemonadeBaseItem_32";
    Ua.NAME = "LemonadeBaseBtn_31";
    uc.NAME = "LemonadeCupItem_45";
    Ic.NAME = "LemonadeIceTrays_44";
    u.NAME = "LemonadeSelect_35";
    u._randomItemMap = new nb;
    u._locked = !1;
    U.NAME = "LemonadeSelect_35";
    U._swipeScrollDelayInMSec = 300;
    U._xSwipeMax = 40;
    U._ySwipeMin = 20;
    Jc.NAME = "LemonadeNumber_42";
    Ya.NAME = "LemonadePestleCrushBtn_41";
    bb.NAME = "LemonadePitcher_40";
    Db.NAME = "LemonadePlates_39";
    Kc.NAME = "LemonadeShadow_29";
    N.NAME = "LemonadeBaseItem_32";
    N._randomPartMap = new nb;
    N._partArrayMap = new nb;
    N._correctPartMap = new nb;
    N._slicedItems = 0;
    vc.NAME = "LemonadeSqueezeBtn_43";
    Lc.NAME = "LemonadeStarCorrect_38";
    tb.NAME = "LemonadeStirrerBtn_37";
    ta.NAME = "LemonadeSwipeTarget_34";
    ta._xSwipeMax = 40;
    ta._ySwipeMin = 10;
    Mc.NAME = "LemonadeTabletop_33";
    ac.NAME = "LemonadeBaseItem_32";
    bc.NAME = "LemonadeBaseBtn_31";
    T.NAME = "LemonadeTutorial_30";
    Nc.NAME = "LemonadeWipeTransition_28";
    F._randomAmountMap = new $;
    $b.NAME = "RecipeSelectBtn_26";
    db.NAME = "RecipeSelectCharacter_25";
    db._randomSoundArray = new ja(["lemonadeSelect1", "lemonadeSelect2", "lemonadeSelect3", "lemonadeSelect4"]);
    Fc.NAME = "RecipeSelectController_27";
    ob.NAME = "Ticket_24";
    ob._ticketsCounted = 0;
    wa.NAME = "TicketGroup_23";
    wa._randomAmount = new ja([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    wa._amountArray = [];
    Sc.NAME = "TicketTotalBtn_21";
    Ea.NAME = "TicketsActivity_20";
    Ea.total = 0;
    Ea._randomTotal = new ja([2, 3, 4, 5, 6, 7, 8, 9, 10]);
    Ea._randomIndex = new ja([1, 2, 3]);
    Rc.NAME = "TicketsEquals_19";
    Oc.NAME = "TicketsNumberAdd_18";
    Ba.NAME = "TicketsNumberSelect_22";
    Ba._randomAmount = new ja([2, 3, 4, 5, 6, 7, 8, 9, 10]);
    Ba._amountArray = [];
    Qc.NAME = "TicketsPlus_17";
    Pc.NAME = "TicketsTotal_16";
    Ha.NAME = "TicketsTutorial_15";
    Ha.allTicketsCounted = !1;
    yb.instance = new yb;
    p.root = new Oa;
    p.uncaughtError = new ba;
    p.hidden = new Ja(!1);
    p.volume = new ua(1);
    p._platform = yb.instance;
    p._calledInit = !1;
    ie.logger = new Re(p._platform.createLogHandler("flambe"));
    za.__meta__ = {
        obj: {
            assets: [{
                preload: [{
                    bytes: 1121,
                    md5: "2c0a401a8984c51ad2cd323a514bcbe0",
                    name: "libraryLowEnd/NLS_Preloader/library.json"
                }, {
                    bytes: 41003,
                    md5: "3c6cc7da85990347949a33d39fa8e594",
                    name: "libraryLowEnd/NLS_Preloader/atlas0.png"
                }, {
                    bytes: 1154,
                    md5: "d2a15857fa999594f5fa0fd2a6cad4f8",
                    name: "library/NLS_Preloader/library.json"
                }, {
                    bytes: 50035,
                    md5: "2cd624e31e32902e325f7eb185a2973a",
                    name: "library/NLS_Preloader/atlas0.png"
                }, {
                    bytes: 23290,
                    md5: "817b567b0f183bf170bfb259fc5e114f",
                    name: "library/NLS_Preloader/atlas1.png"
                }, {
                    bytes: 1158,
                    md5: "6473d4dc577ef1d9c07b104cef1e02da",
                    name: "libraryMobile/NLS_Preloader/library.json"
                }, {
                    bytes: 49038,
                    md5: "8c65b7ad94bd59e123dde813b27786ec",
                    name: "libraryMobile/NLS_Preloader/atlas0.png"
                }, {
                    bytes: 16220,
                    md5: "197b57b2975a77f60d91855b866eb7a4",
                    name: "libraryMobile/NLS_Preloader/atlas1.png"
                }],
                titleandintro: [{
                    bytes: 226844,
                    md5: "96b9e497562dd1940940acf0bc288444",
                    name: "music/nls_splashscreen_loop2.ogg"
                }, {
                    bytes: 65936,
                    md5: "5e52bccbaa697d5b1bfc230cbb5387bd",
                    name: "music/TitleScreenSting.mp3"
                }, {
                    bytes: 25185,
                    md5: "0eb4963d6c12eeea4c2e20266db05c50",
                    name: "music/nls_splashscreen_endstinger2.mp3"
                }, {
                    bytes: 96929,
                    md5: "fbf39f1950a2ecf2821bb9d5778a923f",
                    name: "music/TitleScreenSting.ogg"
                }, {
                    bytes: 156215,
                    md5: "e6aa1c64881039f1847b94c03ab44725",
                    name: "music/nls_splashscreen_loop2.mp3"
                }, {
                    bytes: 30740,
                    md5: "5cf1b3c57ccd5c57df01140a2b111be4",
                    name: "music/nls_splashscreen_endstinger2.ogg"
                }, {
                    bytes: 5760,
                    md5: "e7ce8567395a3516ca63187f47738bfb",
                    name: "vo/LS_4.mp3"
                }, {
                    bytes: 24576,
                    md5: "7c43245aa6e5a99a66b51e8cc70fd0d0",
                    name: "vo/LS_7.mp3"
                }, {
                    bytes: 13824,
                    md5: "a509cb19027a601fdb77774427a8f722",
                    name: "vo/LS_3a.mp3"
                }, {
                    bytes: 14208,
                    md5: "da10a2e907ef6040101c611a319c1d77",
                    name: "vo/LS_3.mp3"
                }, {
                    bytes: 12480,
                    md5: "97661d8d7aff2ba7988b6af7794d15c1",
                    name: "vo/LS_2.mp3"
                }, {
                    bytes: 40674,
                    md5: "e1aff7870cb74a6a8516859c06e2c1ab",
                    name: "vo/LS_9.ogg"
                }, {
                    bytes: 33792,
                    md5: "1a0838148d4a3ba920008191f0b459a7",
                    name: "vo/LS_8b.mp3"
                }, {
                    bytes: 55689,
                    md5: "928c94aed2481705b3cf113e17699d52",
                    name: "vo/LS_8.ogg"
                }, {
                    bytes: 47040,
                    md5: "778c6c2b77d2f58190d69d7317b8af31",
                    name: "vo/LS_8a.mp3"
                }, {
                    bytes: 23709,
                    md5: "98b9a0dc0fb724f5bd4a2a7f96f0f8b0",
                    name: "vo/LS_3.ogg"
                }, {
                    bytes: 22029,
                    md5: "70c91c88b0f754288f6d68d50b4769ad",
                    name: "vo/LS_3a.ogg"
                }, {
                    bytes: 20507,
                    md5: "46725d1a85340b208c7d98cf43aefd99",
                    name: "vo/LS_2.ogg"
                }, {
                    bytes: 39768,
                    md5: "4bad0a699630fd04dbc156f2aa6ceb86",
                    name: "vo/LS_7.ogg"
                }, {
                    bytes: 9946,
                    md5: "648daa6801d1412f7e3c1561c666ce48",
                    name: "vo/LS_4.ogg"
                }, {
                    bytes: 71553,
                    md5: "778d78a06fd6be1a12d84c54c259a6ff",
                    name: "vo/LS_8a.ogg"
                }, {
                    bytes: 26496,
                    md5: "e2989e8ac886f405803b7fd20f2cd4a6",
                    name: "vo/LS_9.mp3"
                }, {
                    bytes: 36096,
                    md5: "61112d42198b7edccf39f6c80cf02d1e",
                    name: "vo/LS_8.mp3"
                }, {
                    bytes: 51576,
                    md5: "a6f079bc7c1e4b87aa81d388c703c3c3",
                    name: "vo/LS_8b.ogg"
                }, {
                    bytes: 125490,
                    md5: "ddcfc8f19a14fa709277e17d77d0a53c",
                    name: "libraryLowEnd/NLS_TitleAndIntro/library.json"
                }, {
                    bytes: 824808,
                    md5: "56631bf07618c143da281f540dc1bb36",
                    name: "libraryLowEnd/NLS_TitleAndIntro/atlas0.png"
                }, {
                    bytes: 236937,
                    md5: "2815cafc25c45f247d7d3060b3f45a0a",
                    name: "libraryLowEnd/NLS_TitleAndIntro/atlas1.png"
                }, {
                    bytes: 125135,
                    md5: "00e84584978a63599e354520151976e6",
                    name: "library/NLS_TitleAndIntro/library.json"
                }, {
                    bytes: 117861,
                    md5: "2327adce8dac732ed367904ca30331c9",
                    name: "library/NLS_TitleAndIntro/atlas5.png"
                }, {
                    bytes: 700908,
                    md5: "33682c8b3cef9ec22ca90b84935b59d4",
                    name: "library/NLS_TitleAndIntro/atlas4.png"
                }, {
                    bytes: 1022842,
                    md5: "d7eb6920b578bbf8424dc8d3fd6d1786",
                    name: "library/NLS_TitleAndIntro/atlas0.png"
                }, {
                    bytes: 599735,
                    md5: "8a43441cafcf287e29bb4abc78490255",
                    name: "library/NLS_TitleAndIntro/atlas1.png"
                }, {
                    bytes: 398152,
                    md5: "753c404986d01ce4ea1f3e64f7cf57b6",
                    name: "library/NLS_TitleAndIntro/atlas3.png"
                }, {
                    bytes: 466244,
                    md5: "e257f17bb9dc4306e2ec339becb644a6",
                    name: "library/NLS_TitleAndIntro/atlas2.png"
                }, {
                    bytes: 126352,
                    md5: "ff9da79276e9bec270ad1ec95e6d7f21",
                    name: "libraryMobile/NLS_TitleAndIntro/library.json"
                }, {
                    bytes: 957323,
                    md5: "72008be79c9fa2beb3ad193bf79ebbfb",
                    name: "libraryMobile/NLS_TitleAndIntro/atlas0.png"
                }, {
                    bytes: 609998,
                    md5: "d4e1ce3a3fb588e4ce768659e3cb3cbd",
                    name: "libraryMobile/NLS_TitleAndIntro/atlas1.png"
                }, {
                    bytes: 294631,
                    md5: "4dda0e21a02d4862cba57a245b1846f9",
                    name: "libraryMobile/NLS_TitleAndIntro/atlas2.png"
                }],
                primary: [{
                    bytes: 629972,
                    md5: "ce8850404109178bae1347c316a6e43b",
                    name: "music/nls_gamemusic_loop3.mp3"
                }, {
                    bytes: 22677,
                    md5: "272b3d937538694bf537aaa8b289391c",
                    name: "music/nls_gamemusic_endstinger3.mp3"
                }, {
                    bytes: 174187,
                    md5: "3135f09fe89d349f0eb4d6792da95775",
                    name: "music/nls_parkambient_loop1.mp3"
                }, {
                    bytes: 32441,
                    md5: "94108ac0927ff12dbe10d21581faeae3",
                    name: "music/nls_gamemusic_endstinger3.ogg"
                }, {
                    bytes: 939623,
                    md5: "2587719012c1f9533623984b703fe080",
                    name: "music/nls_gamemusic_loop3.ogg"
                }, {
                    bytes: 263681,
                    md5: "293a4a03b2e77bd32ac063f34540ed9c",
                    name: "music/nls_parkambient_loop1.ogg"
                }, {
                    bytes: 6336,
                    md5: "5cc23b245e33b847cc4dc5e3f648b109",
                    name: "vo/LS_5.mp3"
                }, {
                    bytes: 6336,
                    md5: "982293931a8c011f3960c2bfd503d924",
                    name: "vo/LS_6.mp3"
                }, {
                    bytes: 10753,
                    md5: "5b0a2f9aea074a39ac4f0fffef963683",
                    name: "vo/LS_6.ogg"
                }, {
                    bytes: 11059,
                    md5: "2b43e80977d927e2fc38c231880cacd6",
                    name: "vo/LS_5.ogg"
                }, {
                    bytes: 8466,
                    md5: "6b2576e809ecda533ccb417042b36b51",
                    name: "sfx/WA.mp3"
                }, {
                    bytes: 9194,
                    md5: "de27463cedac99551e07bcde736294c3",
                    name: "sfx/silence.mp3"
                }, {
                    bytes: 5724,
                    md5: "e87647d49413f44a1c4b764bbc36c995",
                    name: "sfx/click1.ogg"
                }, {
                    bytes: 5029,
                    md5: "da6d373784a9d77e1fda5e31062e76a4",
                    name: "sfx/click3.ogg"
                }, {
                    bytes: 19333,
                    md5: "51718d7fc0723710f7e1bcb2e30b9be4",
                    name: "sfx/CA.mp3"
                }, {
                    bytes: 5449,
                    md5: "5930067e98f8e81ed959c14524ed6f36",
                    name: "sfx/click2.ogg"
                }, {
                    bytes: 3033,
                    md5: "0d15e150f3bb69a66be5048ebc1bdcc5",
                    name: "sfx/ro3.mp3"
                }, {
                    bytes: 2406,
                    md5: "de36b41944541699f0f16f524737edcb",
                    name: "sfx/ro2.mp3"
                }, {
                    bytes: 3033,
                    md5: "617c40b6ffd85f21135762de694cad32",
                    name: "sfx/ro1.mp3"
                }, {
                    bytes: 3033,
                    md5: "17f92d063efb0304211b6a2d46233bc9",
                    name: "sfx/click3.mp3"
                }, {
                    bytes: 22056,
                    md5: "2a190e91c846cf64ccf58958574b83ca",
                    name: "sfx/CA.ogg"
                }, {
                    bytes: 3033,
                    md5: "08d47e2f674858dfa4a1c3a63ea48f7d",
                    name: "sfx/click2.mp3"
                }, {
                    bytes: 3990,
                    md5: "82528b6bfe80d167bb7dcaabc8615901",
                    name: "sfx/silence.ogg"
                }, {
                    bytes: 3033,
                    md5: "598b78d293a49b967a69907d869cbfdb",
                    name: "sfx/click1.mp3"
                }, {
                    bytes: 7985,
                    md5: "796d5465e6b0275ef73114a656d3f605",
                    name: "sfx/WA.ogg"
                }, {
                    bytes: 4961,
                    md5: "647d0b849541601cc086c0f9ec25f1e5",
                    name: "sfx/ro1.ogg"
                }, {
                    bytes: 5014,
                    md5: "b82893ac04137edef98ea78529c1936f",
                    name: "sfx/ro3.ogg"
                }, {
                    bytes: 4961,
                    md5: "9a8e9a6351ab7099b6ef09b2e2e9f278",
                    name: "sfx/ro2.ogg"
                }],
                designer: [{
                    bytes: 314621,
                    md5: "3f93c894a85fa2bcee03b145b92faaf3",
                    name: "music/nls_lemonstand_loop1.mp3"
                }, {
                    bytes: 30200,
                    md5: "53c164007985fef22b9c2d5e92109f62",
                    name: "music/nls_lemonstand_endstinger2a.mp3"
                }, {
                    bytes: 471475,
                    md5: "14675b6c893e20226694d056cca469e1",
                    name: "music/nls_lemonstand_loop1.ogg"
                }, {
                    bytes: 42672,
                    md5: "1cf8b1e11ea6cab4179b7385d1feeae2",
                    name: "music/nls_lemonstand_endstinger2a.ogg"
                }, {
                    bytes: 20928,
                    md5: "b511bee390128bc0f4fd62c712954dca",
                    name: "vo/LS_25.mp3"
                }, {
                    bytes: 9408,
                    md5: "f361e0ebabc45b4cb0eb35aca475f8bf",
                    name: "vo/LS_19.mp3"
                }, {
                    bytes: 10368,
                    md5: "3efc1e358493536c247d59048fa4e336",
                    name: "vo/LS_18.mp3"
                }, {
                    bytes: 17856,
                    md5: "9ef5885e54a71bbc138fbc39222e8fec",
                    name: "vo/LS_24.mp3"
                }, {
                    bytes: 36288,
                    md5: "b2af530f0981f46ddd0ebc5b07b30e79",
                    name: "vo/LS_12b.mp3"
                }, {
                    bytes: 27840,
                    md5: "65b5fb6263bdf62e9342c4d94d272861",
                    name: "vo/LS_26.mp3"
                }, {
                    bytes: 44544,
                    md5: "4614939bba89075faa6861d05a85a910",
                    name: "vo/LS_27.mp3"
                }, {
                    bytes: 30912,
                    md5: "41fbe3b155b658c9cb728aa0c28073f4",
                    name: "vo/LS_12a.mp3"
                }, {
                    bytes: 35328,
                    md5: "fbf477fe2823f96459ba1ca0fff4316e",
                    name: "vo/LS_23.mp3"
                }, {
                    bytes: 22272,
                    md5: "a201b7299f87cf9a48af8ed5c079136a",
                    name: "vo/LS_22.mp3"
                }, {
                    bytes: 7488,
                    md5: "1850ab57def4243e851502fb03f5b069",
                    name: "vo/LS_20.mp3"
                }, {
                    bytes: 10176,
                    md5: "68f67f536f9cbd7f9adc70fe0ce0d5df",
                    name: "vo/LS_21.mp3"
                }, {
                    bytes: 207132,
                    md5: "3ca2a6aea3103fb539e734a83333aa32",
                    name: "vo/LS_14.ogg"
                }, {
                    bytes: 18393,
                    md5: "79f6941ea7c9e88d3afa8739c54b70de",
                    name: "vo/LS_14a.mp3"
                }, {
                    bytes: 47452,
                    md5: "136e69b39a30a34117587f383cadee57",
                    name: "vo/LS_16.ogg"
                }, {
                    bytes: 36286,
                    md5: "be50b95c93aea34dc3c6f7495b4e7b6e",
                    name: "vo/LS_17.ogg"
                }, {
                    bytes: 37433,
                    md5: "f5a702a61cb1f75411aa77f5834e4d42",
                    name: "vo/LS_13.ogg"
                }, {
                    bytes: 59414,
                    md5: "81cf17ea2c26fc8209a20d6ce7f187d2",
                    name: "vo/LS_12.ogg"
                }, {
                    bytes: 29376,
                    md5: "737877a4cf912df2b114e2fe503439da",
                    name: "vo/LS_15a.mp3"
                }, {
                    bytes: 56577,
                    md5: "73bbb2754d56fb7ca175035516af4c5a",
                    name: "vo/LS_10.ogg"
                }, {
                    bytes: 45399,
                    md5: "9f60c1dc018cbd5be94227bfb7d3110c",
                    name: "vo/LS_11.ogg"
                }, {
                    bytes: 12431,
                    md5: "4c2db109867e6f78611f2aa10a71ba0c",
                    name: "vo/LS_20.ogg"
                }, {
                    bytes: 16533,
                    md5: "ed49f3a7af7185f3829ac9f96978d438",
                    name: "vo/LS_21.ogg"
                }, {
                    bytes: 54170,
                    md5: "d937a1df35c183f1c5ec4f97476f99c8",
                    name: "vo/LS_23.ogg"
                }, {
                    bytes: 34648,
                    md5: "3664feca5159338d3bc4f96d227f4fcd",
                    name: "vo/LS_22.ogg"
                }, {
                    bytes: 39640,
                    md5: "32a8decfe8a1dc5cfd481a3ae72118cf",
                    name: "vo/LS_26.ogg"
                }, {
                    bytes: 69992,
                    md5: "d8ff8ff9e088366dc4028ccb748ea1b2",
                    name: "vo/LS_27.ogg"
                }, {
                    bytes: 47983,
                    md5: "d2a6675f8142c50cda4efe05277cc8be",
                    name: "vo/LS_12a.ogg"
                }, {
                    bytes: 16410,
                    md5: "3bb48fd9fbb9f7e5db084c5cf715b40d",
                    name: "vo/LS_19.ogg"
                }, {
                    bytes: 31808,
                    md5: "20592d03637f897ca8edf33d1f7a265b",
                    name: "vo/LS_25.ogg"
                }, {
                    bytes: 28837,
                    md5: "b38791a5c3142d901639c6ca00d80b57",
                    name: "vo/LS_24.ogg"
                }, {
                    bytes: 16891,
                    md5: "66de3e5c0eb39467bc74130c4e3c2251",
                    name: "vo/LS_18.ogg"
                }, {
                    bytes: 56470,
                    md5: "cb9c37c980c667989a5af46ae3f5cb5f",
                    name: "vo/LS_12b.ogg"
                }, {
                    bytes: 42084,
                    md5: "2849012fb9e1b31350a0c1ceeb2d59d3",
                    name: "vo/LS_15a.ogg"
                }, {
                    bytes: 36480,
                    md5: "509e94b50cfe2e10559be6fe3e9ea6b8",
                    name: "vo/LS_10.mp3"
                }, {
                    bytes: 28416,
                    md5: "e2559ac6260e7bde487bd62c9a5c74a0",
                    name: "vo/LS_11.mp3"
                }, {
                    bytes: 23616,
                    md5: "7bf9ab68042f665c93b89f26122ec5ad",
                    name: "vo/LS_13.mp3"
                }, {
                    bytes: 40512,
                    md5: "f612c172abda5092961def90ac313012",
                    name: "vo/LS_12.mp3"
                }, {
                    bytes: 32448,
                    md5: "1ebaa0dc926ed50ce7fae6609a632116",
                    name: "vo/LS_16.mp3"
                }, {
                    bytes: 25728,
                    md5: "ffb4b5a00b6f5d352aa9d5b64d1b6ea5",
                    name: "vo/LS_17.mp3"
                }, {
                    bytes: 70742,
                    md5: "99e419cd990557602fe59951180d74d6",
                    name: "vo/LS_14.mp3"
                }, {
                    bytes: 30641,
                    md5: "803423b1f7c33aa3cec63eeb0c6f9dfd",
                    name: "vo/LS_14a.ogg"
                }, {
                    bytes: 124427,
                    md5: "574a8daffe98ba5c2f3943d40acbe51c",
                    name: "libraryLowEnd/NLS_Designer/library.json"
                }, {
                    bytes: 8813,
                    md5: "e4e26fc9106eac314bd3915f47a40960",
                    name: "libraryLowEnd/NLS_Designer/atlas4.png"
                }, {
                    bytes: 651544,
                    md5: "39ef037063a961580131b76cdccd1fb6",
                    name: "libraryLowEnd/NLS_Designer/atlas0.png"
                }, {
                    bytes: 48460,
                    md5: "8a6c81e65e466ea02287ee45838a2acd",
                    name: "libraryLowEnd/NLS_Designer/atlas1.png"
                }, {
                    bytes: 8750,
                    md5: "7111d1e2a245ef010a94b3043b7c5b87",
                    name: "libraryLowEnd/NLS_Designer/atlas3.png"
                }, {
                    bytes: 9154,
                    md5: "c1725e8484889d5aa45339b487ba6f8a",
                    name: "libraryLowEnd/NLS_Designer/atlas2.png"
                }, {
                    bytes: 13900,
                    md5: "690973fbe2d82f93d1d8229baebdb7e5",
                    name: "sfx/drop_08.mp3"
                }, {
                    bytes: 13900,
                    md5: "42f6898fd810e85e1ac0cfaee157ea1a",
                    name: "sfx/drop_09.mp3"
                }, {
                    bytes: 3451,
                    md5: "7846c32094f9a1cf37d122095cae377e",
                    name: "sfx/roArrow.mp3"
                }, {
                    bytes: 19185,
                    md5: "383087f9be9d315df25210efcbcb6dba",
                    name: "sfx/drop_07.ogg"
                }, {
                    bytes: 17345,
                    md5: "18fd3f35bbe16ba7f8d0487d69f65e95",
                    name: "sfx/drop_06.ogg"
                }, {
                    bytes: 21423,
                    md5: "d8eaef8eddf052b216dd043039c7265a",
                    name: "sfx/endScreenReveal.mp3"
                }, {
                    bytes: 17079,
                    md5: "d0ee711d0564af02700f2f1690c06601",
                    name: "sfx/drop_04.ogg"
                }, {
                    bytes: 17843,
                    md5: "a64288f64e78fe61ce808e048721164a",
                    name: "sfx/drop_10.ogg"
                }, {
                    bytes: 17455,
                    md5: "834490e9b64dbe21318c95c5859df61f",
                    name: "sfx/drop_11.ogg"
                }, {
                    bytes: 17392,
                    md5: "ca6b58014ff93098493cc95ecc147d2a",
                    name: "sfx/drop_05.ogg"
                }, {
                    bytes: 16957,
                    md5: "e62d4ca7e0783130d9d2e8f622237e78",
                    name: "sfx/drop_01.ogg"
                }, {
                    bytes: 9246,
                    md5: "2c9afea26cad4805474996e7e76f0882",
                    name: "sfx/clickArrow.ogg"
                }, {
                    bytes: 16647,
                    md5: "d5ca56cd42207129eae2a9000f4f26a1",
                    name: "sfx/drop_02.ogg"
                }, {
                    bytes: 16947,
                    md5: "3dc07bd34f0aa2d7e8e72ef3e4dbaeee",
                    name: "sfx/drop_03.ogg"
                }, {
                    bytes: 5332,
                    md5: "5c517aed21be5fb3375e02a72922b0b0",
                    name: "sfx/roArrow.ogg"
                }, {
                    bytes: 15901,
                    md5: "b8704eb9db4e4a27299bd4aa82b1189d",
                    name: "sfx/drop_08.ogg"
                }, {
                    bytes: 17572,
                    md5: "9cc45329b8dbd71c91ee28ced9bc50d7",
                    name: "sfx/drop_09.ogg"
                }, {
                    bytes: 10556,
                    md5: "91ee50fadfbfb455b3c5a313ebc553bd",
                    name: "sfx/drop_02.mp3"
                }, {
                    bytes: 10556,
                    md5: "21f09288364b3a6a680819223c95dd26",
                    name: "sfx/drop_03.mp3"
                }, {
                    bytes: 10556,
                    md5: "0cd4d3a04bdd3d0268f080aa03fa7281",
                    name: "sfx/drop_01.mp3"
                }, {
                    bytes: 5959,
                    md5: "10946bc4aebf52d1b164407e6e6cda5f",
                    name: "sfx/clickArrow.mp3"
                }, {
                    bytes: 13900,
                    md5: "04d74bb1c2a7e59114e378a51645fdea",
                    name: "sfx/drop_10.mp3"
                }, {
                    bytes: 10556,
                    md5: "70fc07fc2f254e7d06a5d741c0c6de32",
                    name: "sfx/drop_04.mp3"
                }, {
                    bytes: 10556,
                    md5: "0743c5bd4ab838b7443cd30b85b2f5b0",
                    name: "sfx/drop_05.mp3"
                }, {
                    bytes: 13900,
                    md5: "a24e0264e3224b3d0a19a5d81bc7e4dc",
                    name: "sfx/drop_11.mp3"
                }, {
                    bytes: 13900,
                    md5: "282821c855350428c449a28b781ecac7",
                    name: "sfx/drop_07.mp3"
                }, {
                    bytes: 10556,
                    md5: "d8e31237555877bf7a3a83b8e1b0ca27",
                    name: "sfx/drop_06.mp3"
                }, {
                    bytes: 23714,
                    md5: "66541ca957c3481afe0213e12366253f",
                    name: "sfx/endScreenReveal.ogg"
                }, {
                    bytes: 123486,
                    md5: "b95260ec1bf3b278587936c621975956",
                    name: "library/NLS_Designer/library.json"
                }, {
                    bytes: 55532,
                    md5: "2e5af74a8a72ae3b23ed63179fff3128",
                    name: "library/NLS_Designer/atlas5.png"
                }, {
                    bytes: 46759,
                    md5: "f1d680ec3c824aee38bb903e2ffc40b1",
                    name: "library/NLS_Designer/atlas4.png"
                }, {
                    bytes: 359874,
                    md5: "3fd6b17f71ee4a9c1c4af24e5b120a59",
                    name: "library/NLS_Designer/atlas0.png"
                }, {
                    bytes: 417571,
                    md5: "c336d7895bad7912548c6bad46691f63",
                    name: "library/NLS_Designer/atlas1.png"
                }, {
                    bytes: 673045,
                    md5: "2753511caedd0d9c41d0c96060bc1a05",
                    name: "library/NLS_Designer/atlas3.png"
                }, {
                    bytes: 510393,
                    md5: "93853b333ec7d3f66681ff0873004754",
                    name: "library/NLS_Designer/atlas2.png"
                }, {
                    bytes: 124799,
                    md5: "6638263a07307a8b6de132fd5f787de1",
                    name: "libraryMobile/NLS_Designer/library.json"
                }, {
                    bytes: 12907,
                    md5: "295f2b2ebe3c9a8b56d310fa6455c476",
                    name: "libraryMobile/NLS_Designer/atlas5.png"
                }, {
                    bytes: 16658,
                    md5: "f2a49f446ca148ff668013374d90b2a1",
                    name: "libraryMobile/NLS_Designer/atlas4.png"
                }, {
                    bytes: 521454,
                    md5: "2fb151c7625da8261d0d3688e4463449",
                    name: "libraryMobile/NLS_Designer/atlas0.png"
                }, {
                    bytes: 638276,
                    md5: "648101a4c62177f7ad479f6188f64389",
                    name: "libraryMobile/NLS_Designer/atlas1.png"
                }, {
                    bytes: 23132,
                    md5: "757615d586ed5304b118922829248378",
                    name: "libraryMobile/NLS_Designer/atlas3.png"
                }, {
                    bytes: 45690,
                    md5: "a5dadcab78ce6bf2d4e602786c88e4db",
                    name: "libraryMobile/NLS_Designer/atlas2.png"
                }],
                serveandsell: [{
                    bytes: 28319,
                    md5: "62031ea689042a1616dbb7722604a9fc",
                    name: "music/nls_mathmusic_endstinger1.mp3"
                }, {
                    bytes: 513779,
                    md5: "dfc7d2d0545a2728226de90e64c587ba",
                    name: "music/nls_mathmusic_loop1.mp3"
                }, {
                    bytes: 37833,
                    md5: "77afd42b4bf9ecb9d7e3dedf05cd505c",
                    name: "music/nls_mathmusic_endstinger1.ogg"
                }, {
                    bytes: 774862,
                    md5: "045a16e71d44e50bb79c8c8c20b40ba6",
                    name: "music/nls_mathmusic_loop1.ogg"
                }, {
                    bytes: 7104,
                    md5: "7c2070866caa4667ee3dae1d0e7bbf47",
                    name: "vo/LS_119.mp3"
                }, {
                    bytes: 19638,
                    md5: "410e293036ccc270da2f031c48d15dcb",
                    name: "vo/LS_89.ogg"
                }, {
                    bytes: 34329,
                    md5: "1b4f7b82a0f658fe8a146cbc9414b1af",
                    name: "vo/LS_88.ogg"
                }, {
                    bytes: 6912,
                    md5: "3d7b96a88e1b91c8d9950935e1c5e617",
                    name: "vo/LS_118.mp3"
                }, {
                    bytes: 13824,
                    md5: "9158b3c8e801368bb245b2adbcf23310",
                    name: "vo/LS_126.mp3"
                }, {
                    bytes: 10560,
                    md5: "337f8112449f404ccb98f4c43502f5b6",
                    name: "vo/LS_133.mp3"
                }, {
                    bytes: 10368,
                    md5: "0c735737c900c2310f83e20467f1fe3e",
                    name: "vo/LS_127.mp3"
                }, {
                    bytes: 6144,
                    md5: "d8d9f38fb96ac7d4b01331fc69048cc0",
                    name: "vo/LS_123.mp3"
                }, {
                    bytes: 7296,
                    md5: "419f99a013b14687b58128023baee963",
                    name: "vo/LS_111a.mp3"
                }, {
                    bytes: 7104,
                    md5: "7a42c904e8a8baa9605125972ce7003b",
                    name: "vo/LS_122.mp3"
                }, {
                    bytes: 15168,
                    md5: "014f2a3e296dbf9f15f51d4f33283a8b",
                    name: "vo/LS_134.mp3"
                }, {
                    bytes: 7296,
                    md5: "f7195c684a7fe9072fe0f05c8decc701",
                    name: "vo/LS_120.mp3"
                }, {
                    bytes: 10560,
                    md5: "5da42c9a2fbef4d6fdea7e71a00b14c8",
                    name: "vo/LS_108.mp3"
                }, {
                    bytes: 28648,
                    md5: "a3c1bb2a255b376d61250994ac382b23",
                    name: "vo/LS_98.ogg"
                }, {
                    bytes: 13269,
                    md5: "e1820e6dbd2458af4ddcf2956f31b414",
                    name: "vo/LS_99.ogg"
                }, {
                    bytes: 6144,
                    md5: "a4f27aa55ab72977ab43fdd242e3729e",
                    name: "vo/LS_121.mp3"
                }, {
                    bytes: 13440,
                    md5: "9991006f99a8aa7cedb7435fe3a52e97",
                    name: "vo/LS_111b.mp3"
                }, {
                    bytes: 61640,
                    md5: "61a8a2f8127357c7b61e573e1054e266",
                    name: "vo/LS_129.ogg"
                }, {
                    bytes: 16929,
                    md5: "68de2e4ebdb3ba283cf29eb296803568",
                    name: "vo/LS_101.ogg"
                }, {
                    bytes: 9313,
                    md5: "1c745fadffdf1344486994612ab52d83",
                    name: "vo/LS_115.ogg"
                }, {
                    bytes: 12864,
                    md5: "71ffaf6680fbc396131a1e65cfa86983",
                    name: "vo/LS_91.mp3"
                }, {
                    bytes: 28032,
                    md5: "1549c76c40a5ed2df6cc10459e641858",
                    name: "vo/LS_218.mp3"
                }, {
                    bytes: 20928,
                    md5: "f9c6cd0307846f329d3a376d6e7184ba",
                    name: "vo/LS_219.mp3"
                }, {
                    bytes: 11904,
                    md5: "57eb2de36abf13f5ec2a612ba47cf7ec",
                    name: "vo/LS_90.mp3"
                }, {
                    bytes: 9492,
                    md5: "03e94781f4a94205896bc5ce527228c0",
                    name: "vo/LS_114.ogg"
                }, {
                    bytes: 15838,
                    md5: "96f11e4889fe661f09f3677e0fde538f",
                    name: "vo/LS_100.ogg"
                }, {
                    bytes: 41245,
                    md5: "4e27ec25aae37baa469c12e0ec44e2ac",
                    name: "vo/LS_128.ogg"
                }, {
                    bytes: 8749,
                    md5: "a89f31c84621fda3151826ac61f1f16b",
                    name: "vo/LS_116.ogg"
                }, {
                    bytes: 18894,
                    md5: "90fbaed9887028ecd102fbf4472f2a87",
                    name: "vo/LS_102.ogg"
                }, {
                    bytes: 16301,
                    md5: "3142d13658d7eec04d1d8bd25746ad4b",
                    name: "vo/LS_113a.ogg"
                }, {
                    bytes: 14016,
                    md5: "15ea7a87d9a2887a9d706eb25aafcebd",
                    name: "vo/LS_92.mp3"
                }, {
                    bytes: 9216,
                    md5: "9925ecb9e3de0ae4dfc23f2ae5e52454",
                    name: "vo/LS_136a.mp3"
                }, {
                    bytes: 13440,
                    md5: "2fa885c654382d0a9079641ed0ed5da2",
                    name: "vo/LS_93.mp3"
                }, {
                    bytes: 19172,
                    md5: "62e3930592fc14d958029a052ec1979c",
                    name: "vo/LS_103.ogg"
                }, {
                    bytes: 10284,
                    md5: "313ca50fd3f4f102a147da4421aeb5e0",
                    name: "vo/LS_117.ogg"
                }, {
                    bytes: 14436,
                    md5: "02da04286fdb7556c5f10e8cefa3149c",
                    name: "vo/LS_113.ogg"
                }, {
                    bytes: 17510,
                    md5: "b1c9dc51268134c63de072073ad0fe1c",
                    name: "vo/LS_107.ogg"
                }, {
                    bytes: 31104,
                    md5: "d110a83f6a7a18772e4ffaaaee93dada",
                    name: "vo/LS_97.mp3"
                }, {
                    bytes: 38592,
                    md5: "1b44ecebed9a7ac3a817e4821741f211",
                    name: "vo/LS_222.mp3"
                }, {
                    bytes: 31245,
                    md5: "32339622af049826a8704d56430fd432",
                    name: "vo/LS_97c.mp3"
                }, {
                    bytes: 42816,
                    md5: "a952ab8c5c593e9fa48dceab47683eec",
                    name: "vo/LS_97b.mp3"
                }, {
                    bytes: 24384,
                    md5: "6d0828ec4ec81e5176a9dbbb96289944",
                    name: "vo/LS_96.mp3"
                }, {
                    bytes: 16681,
                    md5: "df1edc5a03f9094a20dfcc0198845df9",
                    name: "vo/LS_106.ogg"
                }, {
                    bytes: 14310,
                    md5: "4a32ff03cb14c8342d699a16f0145336",
                    name: "vo/LS_112.ogg"
                }, {
                    bytes: 17798,
                    md5: "876f5a51208fe9258661c0ded1b5fb0f",
                    name: "vo/LS_104.ogg"
                }, {
                    bytes: 13824,
                    md5: "c9078149aa103c15f62e441bbeaf9433",
                    name: "vo/LS_94.mp3"
                }, {
                    bytes: 38400,
                    md5: "a878ef0d1ddc4e307eea83790e21d8d4",
                    name: "vo/LS_221.mp3"
                }, {
                    bytes: 35328,
                    md5: "4829adb93451bb92e0b2d56956e0ef16",
                    name: "vo/LS_97a.mp3"
                }, {
                    bytes: 7296,
                    md5: "3346f2b6168f38e0119f3e0edc09125b",
                    name: "vo/LS_220.mp3"
                }, {
                    bytes: 69697,
                    md5: "153db5816735f33b16f32f1c9bd87c91",
                    name: "vo/LS_95.mp3"
                }, {
                    bytes: 21932,
                    md5: "bc92cca15384a0667c766d708535bd24",
                    name: "vo/LS_111.ogg"
                }, {
                    bytes: 19373,
                    md5: "281e754ee8beb76b9625627a0d1b1d17",
                    name: "vo/LS_105.ogg"
                }, {
                    bytes: 18076,
                    md5: "4e50f133859fc922e06c76db41b536c4",
                    name: "vo/LS_108.ogg"
                }, {
                    bytes: 12497,
                    md5: "b2f70acb4e8031f23ab9f6762bc339b7",
                    name: "vo/LS_120.ogg"
                }, {
                    bytes: 24352,
                    md5: "d9473e02e699ab907b8ed45e920dc9be",
                    name: "vo/LS_134.ogg"
                }, {
                    bytes: 18432,
                    md5: "86b6bbb1ef9d3320b8f80343f8571e90",
                    name: "vo/LS_98.mp3"
                }, {
                    bytes: 7680,
                    md5: "832b382c56691ce398facc3a009fd719",
                    name: "vo/LS_99.mp3"
                }, {
                    bytes: 21690,
                    md5: "468c368f327a342be14616a70de4cc2a",
                    name: "vo/LS_111b.ogg"
                }, {
                    bytes: 11091,
                    md5: "4a7518eb8c25e9702600c5941efa2fe9",
                    name: "vo/LS_121.ogg"
                }, {
                    bytes: 10312,
                    md5: "1012e1cd7e97d3633f7543ca93bcf41d",
                    name: "vo/LS_123.ogg"
                }, {
                    bytes: 11488,
                    md5: "a6305b4b38ecfb1b7e161d32ac7149de",
                    name: "vo/LS_122.ogg"
                }, {
                    bytes: 12313,
                    md5: "31f60f31860cb038322632b7ceb3702b",
                    name: "vo/LS_111a.ogg"
                }, {
                    bytes: 22032,
                    md5: "55c3d03f590f27160c18d0c832b25cc5",
                    name: "vo/LS_126.ogg"
                }, {
                    bytes: 17263,
                    md5: "4b0db28bbeb9f19a1104b838fbcb45dd",
                    name: "vo/LS_127.ogg"
                }, {
                    bytes: 16760,
                    md5: "2f78af9599864146f6fd4dbcf298c77c",
                    name: "vo/LS_133.ogg"
                }, {
                    bytes: 12172,
                    md5: "d98bc2d0a37ea5c317b22ce0cac13c24",
                    name: "vo/LS_119.ogg"
                }, {
                    bytes: 11520,
                    md5: "2cc4b1698a297bcb2292bd7c8a8d5d64",
                    name: "vo/LS_89.mp3"
                }, {
                    bytes: 22080,
                    md5: "b6d9a0a5fef220429b0a0b389426189e",
                    name: "vo/LS_88.mp3"
                }, {
                    bytes: 11657,
                    md5: "b11c7f5e524eab482b0284a79ceaea7f",
                    name: "vo/LS_118.ogg"
                }, {
                    bytes: 10944,
                    md5: "06a123ec0bba3e40874caeb73d1c6979",
                    name: "vo/LS_104.mp3"
                }, {
                    bytes: 21960,
                    md5: "7f68bc4e1fa3cf1263e7a7083bd9462a",
                    name: "vo/LS_94.ogg"
                }, {
                    bytes: 59592,
                    md5: "9fea2a2fdfdd01501661103fa0f5be14",
                    name: "vo/LS_221.ogg"
                }, {
                    bytes: 53948,
                    md5: "b387d0a99cf1ae42f749416b89c7e92e",
                    name: "vo/LS_97a.ogg"
                }, {
                    bytes: 12668,
                    md5: "6ff20f6a0f78e096dd85e33b0478a305",
                    name: "vo/LS_220.ogg"
                }, {
                    bytes: 57324,
                    md5: "875373a2802a84d302a2f778adc5d94d",
                    name: "vo/LS_95.ogg"
                }, {
                    bytes: 11712,
                    md5: "430bcf1a1bb425b66f61165c7485c1b9",
                    name: "vo/LS_105.mp3"
                }, {
                    bytes: 13248,
                    md5: "67106efb83c498e2c77e29fba6b03947",
                    name: "vo/LS_111.mp3"
                }, {
                    bytes: 10368,
                    md5: "412ec20a9d35bc84e48ce362fda44b8b",
                    name: "vo/LS_107.mp3"
                }, {
                    bytes: 8640,
                    md5: "1f914594c896feca3b9829b1f2fb5220",
                    name: "vo/LS_113.mp3"
                }, {
                    bytes: 47150,
                    md5: "4f2ea08fd25768d6dd0d977fe536b504",
                    name: "vo/LS_97.ogg"
                }, {
                    bytes: 57929,
                    md5: "a95a7f8ceff5f3c3c066d10f0b495b41",
                    name: "vo/LS_222.ogg"
                }, {
                    bytes: 74529,
                    md5: "f0a9f9a8f0edb0c8b9e0e64becfbcf50",
                    name: "vo/LS_97c.ogg"
                }, {
                    bytes: 64434,
                    md5: "f89f4a8ab5f3e2ea83bd476213026665",
                    name: "vo/LS_97b.ogg"
                }, {
                    bytes: 38393,
                    md5: "26bd88c45175723c566a20f7dd6a68b6",
                    name: "vo/LS_96.ogg"
                }, {
                    bytes: 8640,
                    md5: "e94790a1d5ab7bc869bea3b6fc66c064",
                    name: "vo/LS_112.mp3"
                }, {
                    bytes: 9984,
                    md5: "ee27a347197fcb17cee6fd5e48666847",
                    name: "vo/LS_106.mp3"
                }, {
                    bytes: 9408,
                    md5: "89fe55001f5164305e51c92424d8712e",
                    name: "vo/LS_113a.mp3"
                }, {
                    bytes: 11328,
                    md5: "957995b481f89f56e6cd967463c355de",
                    name: "vo/LS_102.mp3"
                }, {
                    bytes: 4800,
                    md5: "ef977b667f0c32a0bcb3f3322241c195",
                    name: "vo/LS_116.mp3"
                }, {
                    bytes: 22702,
                    md5: "cbeeafcedf4ce0ac0acd78ce6cce655b",
                    name: "vo/LS_92.ogg"
                }, {
                    bytes: 22430,
                    md5: "97cf187abbd2aba19e286547a0414062",
                    name: "vo/LS_93.ogg"
                }, {
                    bytes: 15240,
                    md5: "26e526dcb426acca6dc2150ab0a32276",
                    name: "vo/LS_136a.ogg"
                }, {
                    bytes: 6144,
                    md5: "1ad304c318cd74a1e9c56fb59ed9a6b0",
                    name: "vo/LS_117.mp3"
                }, {
                    bytes: 11712,
                    md5: "84acece62f2737d2fbb690c22bd593f3",
                    name: "vo/LS_103.mp3"
                }, {
                    bytes: 5184,
                    md5: "7ea58810b6625b5c79c95c579804a856",
                    name: "vo/LS_115.mp3"
                }, {
                    bytes: 10368,
                    md5: "eaa0bfbd2299d9a000f06936a9d9e49c",
                    name: "vo/LS_101.mp3"
                }, {
                    bytes: 40704,
                    md5: "6c7da4a93e4e4e97e4e908b86282cc08",
                    name: "vo/LS_129.mp3"
                }, {
                    bytes: 21144,
                    md5: "5e4ac2b4be2a579dca4725b9b8dbf236",
                    name: "vo/LS_91.ogg"
                }, {
                    bytes: 42569,
                    md5: "d9c1937a02326c859fe655504543d6d0",
                    name: "vo/LS_218.ogg"
                }, {
                    bytes: 32237,
                    md5: "ae7e3ed406eefec91c9e6033a9acf9d7",
                    name: "vo/LS_219.ogg"
                }, {
                    bytes: 19089,
                    md5: "855c7024d3d307f2e91d31cba20a7f60",
                    name: "vo/LS_90.ogg"
                }, {
                    bytes: 28032,
                    md5: "17517bbc148435c6082d048ac08e16ff",
                    name: "vo/LS_128.mp3"
                }, {
                    bytes: 9216,
                    md5: "3161e7722790286f6130d7e1d207a442",
                    name: "vo/LS_100.mp3"
                }, {
                    bytes: 5376,
                    md5: "16a3d9516128e3a87ba6ee73375337c4",
                    name: "vo/LS_114.mp3"
                }, {
                    bytes: 303296,
                    md5: "daf43d9399c0928b017cacfd7b2dba4d",
                    name: "libraryLowEnd/NLS_ServeAndSell/library.json"
                }, {
                    bytes: 403917,
                    md5: "9170b0d810574d4cf7deb3d7a96114ef",
                    name: "libraryLowEnd/NLS_ServeAndSell/atlas0.png"
                }, {
                    bytes: 955229,
                    md5: "612cdb18c23fe8e808f7ca185c19cc8e",
                    name: "libraryLowEnd/NLS_ServeAndSell/atlas1.png"
                }, {
                    bytes: 785474,
                    md5: "5e20c267b35064fcd18b83f1859f85e6",
                    name: "libraryLowEnd/NLS_ServeAndSell/atlas2.png"
                }, {
                    bytes: 11179,
                    md5: "1749273ea315ff4b23f622fa5529f119",
                    name: "sfx/pitcherFun_03.ogg"
                }, {
                    bytes: 13042,
                    md5: "e5340aaa84f1457a33b406eeeb79d090",
                    name: "sfx/pitcherFun_02.ogg"
                }, {
                    bytes: 12861,
                    md5: "c3589f8170e005b94d77f7f351922350",
                    name: "sfx/pitcherFun_01.ogg"
                }, {
                    bytes: 11087,
                    md5: "c80d52c54a347ac554c9861181a3d6d9",
                    name: "sfx/pitcherFun_04.ogg"
                }, {
                    bytes: 7003,
                    md5: "0d5898173914581008b5215151433c0c",
                    name: "sfx/pitcherFun_04.mp3"
                }, {
                    bytes: 7212,
                    md5: "9452bb20f2925c77acf849a1ec76b60c",
                    name: "sfx/pitcherFun_01.mp3"
                }, {
                    bytes: 7003,
                    md5: "9015adf55671202a2f64af9aecc17371",
                    name: "sfx/pitcherFun_03.mp3"
                }, {
                    bytes: 8048,
                    md5: "6cc0cf4a30db22e67482ca19060dd667",
                    name: "sfx/pitcherFun_02.mp3"
                }, {
                    bytes: 741241,
                    md5: "95c4f71fe5aa9d3e2857a120fd69be89",
                    name: "library/NLS_ServeAndSell/atlas9.png"
                }, {
                    bytes: 722870,
                    md5: "0b3411ea0233f5ffe9805eca3bcb6924",
                    name: "library/NLS_ServeAndSell/atlas8.png"
                }, {
                    bytes: 302128,
                    md5: "02fc5c1e95140941eaab5ead1a9368bb",
                    name: "library/NLS_ServeAndSell/library.json"
                }, {
                    bytes: 1197,
                    md5: "1350ce87ff263f75d406e7c79b6f70d6",
                    name: "library/NLS_ServeAndSell/atlas14.png"
                }, {
                    bytes: 555847,
                    md5: "f04f1bbf3cd5cf3caa5a5b6acd4c1b56",
                    name: "library/NLS_ServeAndSell/atlas6.png"
                }, {
                    bytes: 666092,
                    md5: "b457dfed2ec24194c240a8a48fb951d6",
                    name: "library/NLS_ServeAndSell/atlas7.png"
                }, {
                    bytes: 1089370,
                    md5: "65bcd84715170254957526ce3f9e6b7b",
                    name: "library/NLS_ServeAndSell/atlas5.png"
                }, {
                    bytes: 814371,
                    md5: "943bf64e8ce42762da131ba080f12f69",
                    name: "library/NLS_ServeAndSell/atlas4.png"
                }, {
                    bytes: 2628,
                    md5: "d437b4152da341582f810122cfab09a0",
                    name: "library/NLS_ServeAndSell/atlas12.png"
                }, {
                    bytes: 406307,
                    md5: "20dee36dc060b4c48b1c43e205aca5ee",
                    name: "library/NLS_ServeAndSell/atlas0.png"
                }, {
                    bytes: 142536,
                    md5: "e49fdab7156d9ccfe1d39a295ade54ba",
                    name: "library/NLS_ServeAndSell/atlas1.png"
                }, {
                    bytes: 868,
                    md5: "e6fbc73754586d224b4c93c507d7647b",
                    name: "library/NLS_ServeAndSell/atlas13.png"
                }, {
                    bytes: 146719,
                    md5: "6108f2667e3d5182720caac0e7a741e0",
                    name: "library/NLS_ServeAndSell/atlas11.png"
                }, {
                    bytes: 73322,
                    md5: "b2afce3a89aa86cf4e922d1a3718619d",
                    name: "library/NLS_ServeAndSell/atlas3.png"
                }, {
                    bytes: 617909,
                    md5: "6f830957e01db17673fc0d687819bb74",
                    name: "library/NLS_ServeAndSell/atlas2.png"
                }, {
                    bytes: 603861,
                    md5: "b8e25b4418478f62dac7149558947138",
                    name: "library/NLS_ServeAndSell/atlas10.png"
                }, {
                    bytes: 305579,
                    md5: "769a97c059137ebc944dc01585fcf2d1",
                    name: "libraryMobile/NLS_ServeAndSell/library.json"
                }, {
                    bytes: 359210,
                    md5: "45acee4fdbcf0f9924c7ca6f4ba12d01",
                    name: "libraryMobile/NLS_ServeAndSell/atlas5.png"
                }, {
                    bytes: 822247,
                    md5: "d60bf245abc29ac2744a6db82d09f141",
                    name: "libraryMobile/NLS_ServeAndSell/atlas4.png"
                }, {
                    bytes: 550534,
                    md5: "b6704f5fec7899c99065b6f6a4beeb37",
                    name: "libraryMobile/NLS_ServeAndSell/atlas0.png"
                }, {
                    bytes: 718971,
                    md5: "d723a8a85c4b596ddfe16fc1796c3249",
                    name: "libraryMobile/NLS_ServeAndSell/atlas1.png"
                }, {
                    bytes: 886037,
                    md5: "04a136991ba599d929ca819ee9948b4b",
                    name: "libraryMobile/NLS_ServeAndSell/atlas3.png"
                }, {
                    bytes: 414531,
                    md5: "813af9aa522ecac1a4091693326f05b1",
                    name: "libraryMobile/NLS_ServeAndSell/atlas2.png"
                }],
                loader: [{
                    bytes: 14765,
                    md5: "93f32a50f00162dd16a180aac92aa29d",
                    name: "libraryLowEnd/NLS_Loader/library.json"
                }, {
                    bytes: 68536,
                    md5: "1fdbe2bdada5de83f48e75e55c58c28e",
                    name: "libraryLowEnd/NLS_Loader/atlas0.png"
                }, {
                    bytes: 2933,
                    md5: "54ff596630556a77d818ea0dc12fa0a0",
                    name: "libraryLowEnd/NLS_Loader/atlas1.png"
                }, {
                    bytes: 14726,
                    md5: "dcea6cce38dde97257c14dc95d4280a7",
                    name: "library/NLS_Loader/library.json"
                }, {
                    bytes: 2087,
                    md5: "8df53c2b69f7a773981e25b58ace96c7",
                    name: "library/NLS_Loader/atlas5.png"
                }, {
                    bytes: 6494,
                    md5: "68cec7a6b7867a273189001c1dfd9e49",
                    name: "library/NLS_Loader/atlas4.png"
                }, {
                    bytes: 83649,
                    md5: "74e20ef9a781ac9c42a3addc5e1e9f5b",
                    name: "library/NLS_Loader/atlas0.png"
                }, {
                    bytes: 3720,
                    md5: "59a6ae9bcd36672c75767d831bbc2a5b",
                    name: "library/NLS_Loader/atlas1.png"
                }, {
                    bytes: 7766,
                    md5: "ba0ae9350976aa346d873ce0a16c2005",
                    name: "library/NLS_Loader/atlas3.png"
                }, {
                    bytes: 5643,
                    md5: "1c975ab9de95067a198ac3056d7eab48",
                    name: "library/NLS_Loader/atlas2.png"
                }, {
                    bytes: 15038,
                    md5: "6bafb7888fe4393ccea93841632ff92f",
                    name: "libraryMobile/NLS_Loader/library.json"
                }, {
                    bytes: 2101,
                    md5: "a1264017901b2edb3d42f218d4271b9b",
                    name: "libraryMobile/NLS_Loader/atlas6.png"
                }, {
                    bytes: 3305,
                    md5: "47df531bb76ea7421a05492373fefe89",
                    name: "libraryMobile/NLS_Loader/atlas5.png"
                }, {
                    bytes: 3265,
                    md5: "bf8295c7542232b23c5b534e86730c2d",
                    name: "libraryMobile/NLS_Loader/atlas4.png"
                }, {
                    bytes: 85531,
                    md5: "459f649cf71fcf81670acd88aeffbaea",
                    name: "libraryMobile/NLS_Loader/atlas0.png"
                }, {
                    bytes: 22221,
                    md5: "eac0e2d4a425c02f64572c90016bd222",
                    name: "libraryMobile/NLS_Loader/atlas1.png"
                }, {
                    bytes: 6256,
                    md5: "036c9a2d88e4853a00ab192972c5a3f6",
                    name: "libraryMobile/NLS_Loader/atlas3.png"
                }, {
                    bytes: 14185,
                    md5: "aee9983fe18d10c7c39797e86e48dafe",
                    name: "libraryMobile/NLS_Loader/atlas2.png"
                }],
                config: [{
                    bytes: 1534,
                    md5: "50e79eb132f153510b5c038bf1ae195c",
                    name: "recipes.json"
                }, {
                    bytes: 27736,
                    md5: "6b5f72402d34395aa951858deaa87524",
                    name: "soundFiles.xml"
                }, {
                    bytes: 253,
                    md5: "0bbd452291858dc10a86252f7b9d89ad",
                    name: "config.xml"
                }, {
                    bytes: 60,
                    md5: "98308dfc8cf5fca777f3e0104aa9653e",
                    name: "localization.xml"
                }, {
                    bytes: 737,
                    md5: "1a437127e5f5a252f46119464c2d9ee2",
                    name: "strings.xml"
                }, {
                    bytes: 139,
                    md5: "15e10e07aa96eb8c7efbade375a152e0",
                    name: "strings.json"
                }, {
                    bytes: 23,
                    md5: "96e4b23e6a66b2fd041958cc97e863b6",
                    name: "supported_browsers.json"
                }, {
                    bytes: 208,
                    md5: "f53b39442e7065a2d5e00bdc43fd98a2",
                    name: "nickjrtrackingconfig.xml"
                }],
                game: [{
                    bytes: 20552,
                    md5: "34218a1eded1eac4772de628d788196e",
                    name: "vo/LS_162.ogg"
                }, {
                    bytes: 24488,
                    md5: "06d818b14153b626f681ec6f71ff4d7e",
                    name: "vo/LS_176.ogg"
                }, {
                    bytes: 21137,
                    md5: "27f2788aa5569f2f88b4f443d1183827",
                    name: "vo/LS_189.ogg"
                }, {
                    bytes: 19333,
                    md5: "dde04bbd327bc6b7f0eb4ddc7fab8f24",
                    name: "vo/LS_31.mp3"
                }, {
                    bytes: 50304,
                    md5: "39617d2804728d6c7feaac43513c4348",
                    name: "vo/LS_45c.mp3"
                }, {
                    bytes: 21847,
                    md5: "4b5cc020f37273206c0903b02dd3b3f8",
                    name: "vo/LS_76.ogg"
                }, {
                    bytes: 15337,
                    md5: "b0ab7fb00e22d9fd1d7e660eaedd5485",
                    name: "vo/LS_62.ogg"
                }, {
                    bytes: 7296,
                    md5: "f33669e6f79bb688ddf0dcf969d5d02b",
                    name: "vo/LS_28b.mp3"
                }, {
                    bytes: 69893,
                    md5: "c7d05897347972c6289a154214402042",
                    name: "vo/LS_214.ogg"
                }, {
                    bytes: 25382,
                    md5: "2625dfbb2fa8f01ffa755fb8369afa1a",
                    name: "vo/LS_200.ogg"
                }, {
                    bytes: 30377,
                    md5: "7b4794f1be97eceaae642113115b28af",
                    name: "vo/LS_201.ogg"
                }, {
                    bytes: 80690,
                    md5: "28aba2b1310593539e6b5b6c7809f76e",
                    name: "vo/LS_215.ogg"
                }, {
                    bytes: 55604,
                    md5: "fef5c9b9d5ec1d684e74d8cc9d068faa",
                    name: "vo/LS_63.ogg"
                }, {
                    bytes: 22519,
                    md5: "2c5c6dcf48e7488a902506af12d9ab96",
                    name: "vo/LS_77.ogg"
                }, {
                    bytes: 46080,
                    md5: "92c2ca024f01601291168cec52bb0b57",
                    name: "vo/LS_45b.mp3"
                }, {
                    bytes: 19960,
                    md5: "7138267441221444574cc729642e1ca1",
                    name: "vo/LS_30.mp3"
                }, {
                    bytes: 27072,
                    md5: "7058f1261037f41e03851f2caf8cf735",
                    name: "vo/LS_49a.mp3"
                }, {
                    bytes: 45625,
                    md5: "3f64a135d124c2299f2f61e5e6ddd41b",
                    name: "vo/LS_40a.ogg"
                }, {
                    bytes: 22710,
                    md5: "6af6eec1e86e2b2e56dbbfd119d5388a",
                    name: "vo/LS_188.ogg"
                }, {
                    bytes: 25120,
                    md5: "835d5b8a6e418cdea2e07613cb653296",
                    name: "vo/LS_177.ogg"
                }, {
                    bytes: 20598,
                    md5: "a19489a77ebdb15eb5f758a6af304ade",
                    name: "vo/LS_163.ogg"
                }, {
                    bytes: 86165,
                    md5: "b303d6b522accfff5d1b5167a8fe54f0",
                    name: "vo/LS_149.ogg"
                }, {
                    bytes: 22346,
                    md5: "c40cbfce3241f8e1586342edd917a4e3",
                    name: "vo/LS_175.ogg"
                }, {
                    bytes: 27174,
                    md5: "d7e9489e001cbe934bb81cea2c5f3c7b",
                    name: "vo/LS_161.ogg"
                }, {
                    bytes: 24976,
                    md5: "784d769333d96e704f3f5071c6161612",
                    name: "vo/LS_32.mp3"
                }, {
                    bytes: 26496,
                    md5: "faa7117a05ce13eed968c1308a9db376",
                    name: "vo/LS_49c.mp3"
                }, {
                    bytes: 30105,
                    md5: "b09c2b36e0c6d8a4dc0ebc08a2ec85fd",
                    name: "vo/LS_61.ogg"
                }, {
                    bytes: 22443,
                    md5: "f1cadf720d5b1f06dd0686fac9bb9756",
                    name: "vo/LS_75.ogg"
                }, {
                    bytes: 42062,
                    md5: "11fc678bee3be22169533262dab59609",
                    name: "vo/LS_49.ogg"
                }, {
                    bytes: 8640,
                    md5: "517e761883c292fea6351f78f12a259c",
                    name: "vo/LS_28a.mp3"
                }, {
                    bytes: 39682,
                    md5: "35f21533ca913c7d36a5892ce4de6e72",
                    name: "vo/LS_203.ogg"
                }, {
                    bytes: 35558,
                    md5: "bbeaea1298f010ba010c347025cfbc31",
                    name: "vo/LS_217.ogg"
                }, {
                    bytes: 30882,
                    md5: "db007d12042c2ecfe22477bf1f24de8b",
                    name: "vo/LS_216.ogg"
                }, {
                    bytes: 25091,
                    md5: "d8816f3c9d39fd310a7eeda2322dc0e0",
                    name: "vo/LS_202.ogg"
                }, {
                    bytes: 20907,
                    md5: "91be17c2fcbf5cd035c4bcb4a14ca397",
                    name: "vo/LS_74.ogg"
                }, {
                    bytes: 44736,
                    md5: "6ab9b1f8aee9f30cc8d2ba9e14fe41be",
                    name: "vo/LS_45a.mp3"
                }, {
                    bytes: 17058,
                    md5: "3197c11373648dee6d300994dfc4b07b",
                    name: "vo/LS_60.ogg"
                }, {
                    bytes: 25728,
                    md5: "0896583814015ff750ad20cf7b93a506",
                    name: "vo/LS_49b.mp3"
                }, {
                    bytes: 24751,
                    md5: "d038b0476098b7a31f3412cf0c931174",
                    name: "vo/LS_40b.ogg"
                }, {
                    bytes: 14976,
                    md5: "9012fd0a27ec423d0012cafa8d02a67e",
                    name: "vo/LS_33.mp3"
                }, {
                    bytes: 31004,
                    md5: "fe485e8230446c882a0ab8116d0d068f",
                    name: "vo/LS_160.ogg"
                }, {
                    bytes: 23417,
                    md5: "c568bf3d0964be10b3ffc5fb2c555ee0",
                    name: "vo/LS_174.ogg"
                }, {
                    bytes: 77912,
                    md5: "4df677cce3aac992f30720c5ef224162",
                    name: "vo/LS_148.ogg"
                }, {
                    bytes: 21343,
                    md5: "3cebc1349bdb2c1fac5d3bfb45a78704",
                    name: "vo/LS_170.ogg"
                }, {
                    bytes: 19185,
                    md5: "d75b3126a78aa3937f05c3db26858823",
                    name: "vo/LS_164.ogg"
                }, {
                    bytes: 68271,
                    md5: "4c5feda15582b1b4492a85617af09c11",
                    name: "vo/LS_158.ogg"
                }, {
                    bytes: 51307,
                    md5: "5f813d32c221ab41e360ddbd8d58b275",
                    name: "vo/LS_137.mp3"
                }, {
                    bytes: 14016,
                    md5: "2b73aba8feb2e32832edc4a1edd8c13f",
                    name: "vo/LS_37.mp3"
                }, {
                    bytes: 26496,
                    md5: "098a2c6f40dbb17fafcd1a60f85ecfd9",
                    name: "vo/LS_49f.mp3"
                }, {
                    bytes: 32191,
                    md5: "797bafe4a5eeb62227e25c8e21fb8600",
                    name: "vo/LS_58.ogg"
                }, {
                    bytes: 19579,
                    md5: "f39faef72a9896d5d346abb472e01fb9",
                    name: "vo/LS_64.ogg"
                }, {
                    bytes: 38400,
                    md5: "542104d17209e01dfcd4048cf13a160d",
                    name: "vo/LS_45e.mp3"
                }, {
                    bytes: 47077,
                    md5: "931845f69a7395dcb5d9edc6f7a8740a",
                    name: "vo/LS_70.ogg"
                }, {
                    bytes: 45077,
                    md5: "186e9a36f6fab57b416245530817e8cf",
                    name: "vo/LS_206.ogg"
                }, {
                    bytes: 71403,
                    md5: "b42592c93a65089a0b7443b45ccd1ec9",
                    name: "vo/LS_212.ogg"
                }, {
                    bytes: 69043,
                    md5: "d3e6db5899b74e53ca0cf727517afa6f",
                    name: "vo/LS_213.ogg"
                }, {
                    bytes: 66069,
                    md5: "650c4efd531b7612f998aa195b698a53",
                    name: "vo/LS_207.ogg"
                }, {
                    bytes: 37216,
                    md5: "134657704decbbeaa68fa98b4a4e1498",
                    name: "vo/LS_71.ogg"
                }, {
                    bytes: 33600,
                    md5: "543e1c35129df29803fd6b4b82746ebb",
                    name: "vo/LS_45d.mp3"
                }, {
                    bytes: 19910,
                    md5: "b2e0c8c05d5f3dff7c425b3b50f58187",
                    name: "vo/LS_65.ogg"
                }, {
                    bytes: 29363,
                    md5: "6d03d6768454d51ac984c66c0b225c5c",
                    name: "vo/LS_59.ogg"
                }, {
                    bytes: 27648,
                    md5: "7e5e9c99b4cc5969108f104e85a9f98d",
                    name: "vo/LS_49g.mp3"
                }, {
                    bytes: 14208,
                    md5: "c50d385c9826ae41ca533c9721aa4ce1",
                    name: "vo/LS_36.mp3"
                }, {
                    bytes: 59666,
                    md5: "2b7e48ae8353c566e80f1e12b509fc1d",
                    name: "vo/LS_136.mp3"
                }, {
                    bytes: 65156,
                    md5: "f95053ddcbde1d3c15dbf77ac6abedaa",
                    name: "vo/LS_159.ogg"
                }, {
                    bytes: 28726,
                    md5: "6e6be862f61c4e1b6f4016e17d77d376",
                    name: "vo/LS_61a.ogg"
                }, {
                    bytes: 19576,
                    md5: "3db19ac9e155bb5775fc7160adfb6129",
                    name: "vo/LS_165.ogg"
                }, {
                    bytes: 30614,
                    md5: "eb8c84a677f11b3a647e4f0b98bb8afa",
                    name: "vo/LS_171.ogg"
                }, {
                    bytes: 20503,
                    md5: "86b8eea8ed44460fad55cf15116bc3df",
                    name: "vo/LS_167.ogg"
                }, {
                    bytes: 22403,
                    md5: "b7b4287c5b340a1d6591487e0f956aec",
                    name: "vo/LS_173.ogg"
                }, {
                    bytes: 23569,
                    md5: "cc3138b646012366a12f90d11f0494ae",
                    name: "vo/LS_198.ogg"
                }, {
                    bytes: 26496,
                    md5: "9bc41d26d15cbf75d673855571464d14",
                    name: "vo/LS_49e.mp3"
                }, {
                    bytes: 14592,
                    md5: "a8c336450acbfdc59b96752bbb6e3ca9",
                    name: "vo/LS_34.mp3"
                }, {
                    bytes: 35712,
                    md5: "878e64f465658dc686fa59d8f2ab3e76",
                    name: "vo/LS_45f.mp3"
                }, {
                    bytes: 24060,
                    md5: "bbc9c4836a20a57c57f2f18d12f1e9b7",
                    name: "vo/LS_73.ogg"
                }, {
                    bytes: 21015,
                    md5: "a3b12607e6ed3333b4aeab9f6dea748c",
                    name: "vo/LS_67.ogg"
                }, {
                    bytes: 70240,
                    md5: "33529b3d8d48b0613d34ca04f0cb280a",
                    name: "vo/LS_211.ogg"
                }, {
                    bytes: 59351,
                    md5: "f76b003c8eb9ea8d807b3c89d38495d5",
                    name: "vo/LS_205.ogg"
                }, {
                    bytes: 24844,
                    md5: "0f1a4649ad7f2e15d00f4bb15fd7445d",
                    name: "vo/LS_179a.ogg"
                }, {
                    bytes: 39072,
                    md5: "62ff45ceeb86ffeb5b1a9079634dd201",
                    name: "vo/LS_204.ogg"
                }, {
                    bytes: 74072,
                    md5: "8ff1bc2d55d90b2bbf50eaa8359918c2",
                    name: "vo/LS_210.ogg"
                }, {
                    bytes: 20442,
                    md5: "7bedabce84d08e80655bc662b870fc57",
                    name: "vo/LS_66.ogg"
                }, {
                    bytes: 72302,
                    md5: "a7fe66848024b9302246718009c04497",
                    name: "vo/LS_72.ogg"
                }, {
                    bytes: 38784,
                    md5: "e9fdf609babadbf50485cd3e6f8f4567",
                    name: "vo/LS_45g.mp3"
                }, {
                    bytes: 15744,
                    md5: "6ff00ec6d80def35af4dc0ade5dcfb49",
                    name: "vo/LS_35.mp3"
                }, {
                    bytes: 51456,
                    md5: "a6a321320fdf592356aea566a642b3e9",
                    name: "vo/LS_49d.mp3"
                }, {
                    bytes: 25899,
                    md5: "cc986a202b50bf14fcbefbb5c051374e",
                    name: "vo/LS_199.ogg"
                }, {
                    bytes: 52143,
                    md5: "e79afb58fa0fa3078b73e87dd9b8b2ba",
                    name: "vo/LS_135.mp3"
                }, {
                    bytes: 22839,
                    md5: "8dac44c6a33bb631141adbbc63f1ede1",
                    name: "vo/LS_172.ogg"
                }, {
                    bytes: 22308,
                    md5: "82dd0a53f8241168152ec29a134930e3",
                    name: "vo/LS_166.ogg"
                }, {
                    bytes: 13248,
                    md5: "bcecd7e1c907968f4795b979308164a5",
                    name: "vo/LS_191.mp3"
                }, {
                    bytes: 12864,
                    md5: "5b04a27daea7004af4499b52966da19f",
                    name: "vo/LS_185.mp3"
                }, {
                    bytes: 67190,
                    md5: "def6b49cf61c97d88889f707bdbcb4d8",
                    name: "vo/LS_152.mp3"
                }, {
                    bytes: 63010,
                    md5: "e54a6b91c69410697dd33f7bb06ab60e",
                    name: "vo/LS_146.mp3"
                }, {
                    bytes: 32812,
                    md5: "d431aa2f516e9128d0db5383bff39f47",
                    name: "vo/LS_46.mp3"
                }, {
                    bytes: 52979,
                    md5: "acf5b9774d50b5c0cc748310e3d36eec",
                    name: "vo/LS_52.mp3"
                }, {
                    bytes: 21996,
                    md5: "e801f8472cdc619d46d7ffd2c3bca343",
                    name: "vo/LS_15.ogg"
                }, {
                    bytes: 38717,
                    md5: "060fc2c3e2fab174ae956c592bd20d34",
                    name: "vo/LS_29.ogg"
                }, {
                    bytes: 72895,
                    md5: "dcb06cea6901ca405eabbfc7a8a2a326",
                    name: "vo/LS_28.ogg"
                }, {
                    bytes: 38208,
                    md5: "a8e289537c67e2521a913c486d192304",
                    name: "vo/LS_43a.mp3"
                }, {
                    bytes: 52979,
                    md5: "c0bfa73db9fa659d3c7283f81c9e2ec0",
                    name: "vo/LS_53.mp3"
                }, {
                    bytes: 24960,
                    md5: "f447731d5ca49b34a9d18e534d8beddf",
                    name: "vo/LS_47.mp3"
                }, {
                    bytes: 69697,
                    md5: "09c4c14fb0d77520e22792d97a0f9c08",
                    name: "vo/LS_147.mp3"
                }, {
                    bytes: 61338,
                    md5: "211a86f88f00a644684437d2594721b1",
                    name: "vo/LS_153.mp3"
                }, {
                    bytes: 14208,
                    md5: "84d3ab48e8dcb1e967587bcb80000b5b",
                    name: "vo/LS_184.mp3"
                }, {
                    bytes: 14208,
                    md5: "8ec048091349c86af0e43f5dc8f10631",
                    name: "vo/LS_190.mp3"
                }, {
                    bytes: 13824,
                    md5: "47d81f380a03cbd15b248bfc4716e2dd",
                    name: "vo/LS_186.mp3"
                }, {
                    bytes: 17088,
                    md5: "798664fa16433bafc89bfd0e6e7dd232",
                    name: "vo/LS_192.mp3"
                }, {
                    bytes: 27264,
                    md5: "d826d11a1d7dd3a2c252fa7a28205c96",
                    name: "vo/LS_179.mp3"
                }, {
                    bytes: 67190,
                    md5: "e47c11307eb04d7578b801caba0717a0",
                    name: "vo/LS_145.mp3"
                }, {
                    bytes: 62174,
                    md5: "ee257fcea98cc8584d1b54f6d467f04b",
                    name: "vo/LS_151.mp3"
                }, {
                    bytes: 18048,
                    md5: "ac12d3013bd290d8df8ce722b9821ca4",
                    name: "vo/LS_51.mp3"
                }, {
                    bytes: 48576,
                    md5: "4c7e40576d65f86653a8080a1a8067d7",
                    name: "vo/LS_45.mp3"
                }, {
                    bytes: 15168,
                    md5: "7deba735b11b81e6271595c9b0f64b92",
                    name: "vo/LS_79.mp3"
                }, {
                    bytes: 42893,
                    md5: "e6ed32b48c47893465554e9c66cd2204",
                    name: "vo/LS_45l.ogg"
                }, {
                    bytes: 33600,
                    md5: "c64100d41fef5f89f2f4f278485a6a3a",
                    name: "vo/LS_43c.mp3"
                }, {
                    bytes: 42077,
                    md5: "ddc4d37f1cd90146acdd15bc95a0920a",
                    name: "vo/LS_45m.ogg"
                }, {
                    bytes: 14400,
                    md5: "e72cb6c96aba97d5d15c0c0eb6aa19b5",
                    name: "vo/LS_78.mp3"
                }, {
                    bytes: 64128,
                    md5: "5f11a1b6350da22ea60b1854fb21eca9",
                    name: "vo/LS_44.mp3"
                }, {
                    bytes: 17088,
                    md5: "20c6080555c3ef5076f4efe3575a3762",
                    name: "vo/LS_50.mp3"
                }, {
                    bytes: 64682,
                    md5: "604d408769837917ebd4ccce275ea55c",
                    name: "vo/LS_150.mp3"
                }, {
                    bytes: 64682,
                    md5: "2b396d115062ca868adcd07f07dad216",
                    name: "vo/LS_144.mp3"
                }, {
                    bytes: 24768,
                    md5: "302a4ffe81af9f7971bea2462b5c7a95",
                    name: "vo/LS_178.mp3"
                }, {
                    bytes: 14592,
                    md5: "e15fb8d13baba137ebdf7a000075343e",
                    name: "vo/LS_193.mp3"
                }, {
                    bytes: 13632,
                    md5: "5ffcdb63a94fd838435e37ce55ca7b04",
                    name: "vo/LS_187.mp3"
                }, {
                    bytes: 14592,
                    md5: "da28263749bb45dc64ef17ecdd8bc0f3",
                    name: "vo/LS_183.mp3"
                }, {
                    bytes: 16896,
                    md5: "62e34e1480be25ad14c401443864eb1b",
                    name: "vo/LS_197.mp3"
                }, {
                    bytes: 66354,
                    md5: "2c64dafd88a66b3b9ea19308f2235b50",
                    name: "vo/LS_140.mp3"
                }, {
                    bytes: 65518,
                    md5: "cd8796e49c1a7c0270889caf368c915f",
                    name: "vo/LS_154.mp3"
                }, {
                    bytes: 12096,
                    md5: "53feacd49eee31d2220e5e3048e2e62b",
                    name: "vo/LS_168.mp3"
                }, {
                    bytes: 13440,
                    md5: "2149c3763dc808bcfc7f44aaf5f13473",
                    name: "vo/LS_68.mp3"
                }, {
                    bytes: 37765,
                    md5: "618a6059b6262a6ab9f418d8ba07877d",
                    name: "vo/LS_45i.ogg"
                }, {
                    bytes: 57159,
                    md5: "7e2e0fb52ab073602ce8b68d8c4f420f",
                    name: "vo/LS_54.mp3"
                }, {
                    bytes: 25344,
                    md5: "8fd8cf924b6e28151419daa30ab75ac3",
                    name: "vo/LS_40.mp3"
                }, {
                    bytes: 23336,
                    md5: "c5a09ff81bdacc8c51866cbbec5dffdb",
                    name: "vo/LS_51a.ogg"
                }, {
                    bytes: 17856,
                    md5: "f34e8629e6e273e1bf89a56821522fd2",
                    name: "vo/LS_41.mp3"
                }, {
                    bytes: 54651,
                    md5: "6e4f17c0b2815a92c53410677786f338",
                    name: "vo/LS_55.mp3"
                }, {
                    bytes: 75343,
                    md5: "08d8e65923f48bcc7eaeb34850c0953e",
                    name: "vo/LS_45h.ogg"
                }, {
                    bytes: 13056,
                    md5: "2a56d9c5d341d77419d14b9dc74c4eae",
                    name: "vo/LS_69.mp3"
                }, {
                    bytes: 11904,
                    md5: "da3ae09f6bb35ec34d579d81731f066f",
                    name: "vo/LS_169.mp3"
                }, {
                    bytes: 72205,
                    md5: "e8b948f14640e739e9aba41c1cb40a09",
                    name: "vo/LS_155.mp3"
                }, {
                    bytes: 69697,
                    md5: "434fc0f683bfa220d0ca4b272b47f807",
                    name: "vo/LS_141.mp3"
                }, {
                    bytes: 17856,
                    md5: "4f86fe205a340ec4dd5ebbedc6329355",
                    name: "vo/LS_196.mp3"
                }, {
                    bytes: 12288,
                    md5: "13ee9bb1ad623beca9d1ecb44e02408b",
                    name: "vo/LS_182.mp3"
                }, {
                    bytes: 16512,
                    md5: "5a9deb41555bdbdb45b4adb793949b2a",
                    name: "vo/LS_194.mp3"
                }, {
                    bytes: 33984,
                    md5: "fd8e7c38456c6b139013b853ce985dc0",
                    name: "vo/LS_180.mp3"
                }, {
                    bytes: 80685,
                    md5: "5c26dbb709b82c7a44355b7f67d5b494",
                    name: "vo/LS_138.ogg"
                }, {
                    bytes: 6528,
                    md5: "97b4174e4a9754e7045a334b258e980f",
                    name: "vo/LS_157.mp3"
                }, {
                    bytes: 69697,
                    md5: "c47148e6b41bc5fa6b8c746e6abb0012",
                    name: "vo/LS_143.mp3"
                }, {
                    bytes: 37606,
                    md5: "e2bd9fd3a655aacb8c34d0a90c4a1317",
                    name: "vo/LS_45j.ogg"
                }, {
                    bytes: 24576,
                    md5: "377554601d3d6656b961d879b9aa5ebf",
                    name: "vo/LS_43.mp3"
                }, {
                    bytes: 56323,
                    md5: "8d3bf4fa1892f3e1403a6ad73187b564",
                    name: "vo/LS_57.mp3"
                }, {
                    bytes: 42900,
                    md5: "39d27485f0596ea4c624ec64fc1d69e0",
                    name: "vo/LS_49i.ogg"
                }, {
                    bytes: 29176,
                    md5: "49ef7657f9b293077312951f1ed71b2e",
                    name: "vo/LS_38.ogg"
                }, {
                    bytes: 20160,
                    md5: "e52c3ad1c9a3c8dae10ffd5b00463654",
                    name: "vo/LS_80.mp3"
                }, {
                    bytes: 17550,
                    md5: "cc43ad751d7efc3cba329e09a65f22bc",
                    name: "vo/LS_51b.ogg"
                }, {
                    bytes: 28424,
                    md5: "800d4398844d031a872131738cb99e42",
                    name: "vo/LS_58b.mp3"
                }, {
                    bytes: 48960,
                    md5: "257c7e315f84cc78cca26bd731e7ab33",
                    name: "vo/LS_209.mp3"
                }, {
                    bytes: 46272,
                    md5: "1f7f372532bc83b4e485c683be5829f1",
                    name: "vo/LS_208.mp3"
                }, {
                    bytes: 44736,
                    md5: "165b001bac55d05deeae8364c7c7290a",
                    name: "vo/LS_81.mp3"
                }, {
                    bytes: 29234,
                    md5: "f1b6170752e3577a3c0ff9397a95220a",
                    name: "vo/LS_39.ogg"
                }, {
                    bytes: 49573,
                    md5: "3560beeaf2a8dc10f139931a5274bbe8",
                    name: "vo/LS_49h.ogg"
                }, {
                    bytes: 58830,
                    md5: "6c25b388187567047fb8c51833495ddc",
                    name: "vo/LS_56.mp3"
                }, {
                    bytes: 24576,
                    md5: "b5f09c8eee2c6a52628262bf35efaa55",
                    name: "vo/LS_42.mp3"
                }, {
                    bytes: 36916,
                    md5: "3231013cdf56148aca6dc267a9a8c242",
                    name: "vo/LS_45k.ogg"
                }, {
                    bytes: 74713,
                    md5: "12da8e2376421634e584c7b8c4ef080e",
                    name: "vo/LS_142.mp3"
                }, {
                    bytes: 15168,
                    md5: "d68c7d603285726488e315c2a138d438",
                    name: "vo/LS_156.mp3"
                }, {
                    bytes: 78096,
                    md5: "9a59e435349d95f68ff466cdc027e5fe",
                    name: "vo/LS_139.ogg"
                }, {
                    bytes: 38976,
                    md5: "001976ef62fe281a2d2b61925d886300",
                    name: "vo/LS_181.mp3"
                }, {
                    bytes: 17088,
                    md5: "b195dd244f681af3bdcd5bd66dc10792",
                    name: "vo/LS_195.mp3"
                }, {
                    bytes: 14592,
                    md5: "8a6699ea643832b8543611fec47f4fdf",
                    name: "vo/LS_198.mp3"
                }, {
                    bytes: 13632,
                    md5: "28a38ab5cce0b14bdf5945a90c969320",
                    name: "vo/LS_173.mp3"
                }, {
                    bytes: 12864,
                    md5: "8213a349b3e11c589e310e6ed59623f7",
                    name: "vo/LS_167.mp3"
                }, {
                    bytes: 13248,
                    md5: "932f7886df1bc016ef5ee754b8e346b7",
                    name: "vo/LS_67.mp3"
                }, {
                    bytes: 14592,
                    md5: "24ca1ed83905036f6e7f2e343c89d065",
                    name: "vo/LS_73.mp3"
                }, {
                    bytes: 56514,
                    md5: "1ce038d6afa7998d8b180ddeceaf5a1c",
                    name: "vo/LS_45f.ogg"
                }, {
                    bytes: 23808,
                    md5: "8726276240273db8a9d9e4bebaff3483",
                    name: "vo/LS_34.ogg"
                }, {
                    bytes: 41993,
                    md5: "f1c0f524e8c4617665ed138952d774a7",
                    name: "vo/LS_49e.ogg"
                }, {
                    bytes: 37440,
                    md5: "d7953d0639449e2b0ad6ffd7cfef7116",
                    name: "vo/LS_205.mp3"
                }, {
                    bytes: 45312,
                    md5: "269ce15f26f9a98ad3ca5fa71360e2ad",
                    name: "vo/LS_211.mp3"
                }, {
                    bytes: 15168,
                    md5: "1c91c6e239bafe7d6c90a919ff476e63",
                    name: "vo/LS_179a.mp3"
                }, {
                    bytes: 49344,
                    md5: "471021be2f3be61c5db88ce196fc7267",
                    name: "vo/LS_210.mp3"
                }, {
                    bytes: 24768,
                    md5: "4fc56089ba9ed242c46310ab38bf1bec",
                    name: "vo/LS_204.mp3"
                }, {
                    bytes: 77867,
                    md5: "207c33216a607d06f69de7b49b2f0015",
                    name: "vo/LS_49d.ogg"
                }, {
                    bytes: 25271,
                    md5: "a9e4074803044c2c24b7d07c5232eff5",
                    name: "vo/LS_35.ogg"
                }, {
                    bytes: 60006,
                    md5: "0f3376a9ebd50c90196e59da0d4ccdf5",
                    name: "vo/LS_45g.ogg"
                }, {
                    bytes: 45696,
                    md5: "e79347328f4a8f8e4d1b243acf75c5bf",
                    name: "vo/LS_72.mp3"
                }, {
                    bytes: 12672,
                    md5: "d4c9872f5108a8555508a39e1dc8553f",
                    name: "vo/LS_66.mp3"
                }, {
                    bytes: 14208,
                    md5: "04b58d0c02bb48a90918e539c449a599",
                    name: "vo/LS_166.mp3"
                }, {
                    bytes: 14208,
                    md5: "b0a2ff8e56755206b7d050e41841f465",
                    name: "vo/LS_172.mp3"
                }, {
                    bytes: 66277,
                    md5: "e34e764e2f532983b70d92af1a1734e9",
                    name: "vo/LS_135.ogg"
                }, {
                    bytes: 16512,
                    md5: "8654e9cee76fc6ee248c6f97971e3ff1",
                    name: "vo/LS_199.mp3"
                }, {
                    bytes: 64349,
                    md5: "82d9498ad01fa761dcf99a02486f1e5a",
                    name: "vo/LS_137.ogg"
                }, {
                    bytes: 44928,
                    md5: "74136e98b4e174f620d5de3ccc7c27eb",
                    name: "vo/LS_158.mp3"
                }, {
                    bytes: 12288,
                    md5: "c856c52bb2b581dc21b378df1d653164",
                    name: "vo/LS_164.mp3"
                }, {
                    bytes: 13248,
                    md5: "f9fa04577de74222f3d5c8de1cdce078",
                    name: "vo/LS_170.mp3"
                }, {
                    bytes: 29376,
                    md5: "88aef20d0975d914f1796734dbf96f6f",
                    name: "vo/LS_70.mp3"
                }, {
                    bytes: 58436,
                    md5: "74a0ccccb6016192531c8336084a833f",
                    name: "vo/LS_45e.ogg"
                }, {
                    bytes: 12096,
                    md5: "4feaba06d698d5d1db3dd651379150cb",
                    name: "vo/LS_64.mp3"
                }, {
                    bytes: 20928,
                    md5: "27248f0f19ce48d5dbb322cbb873f959",
                    name: "vo/LS_58.mp3"
                }, {
                    bytes: 41828,
                    md5: "9441b7aefb52241f92889bb2a7423e4e",
                    name: "vo/LS_49f.ogg"
                }, {
                    bytes: 22424,
                    md5: "2448c73e02771c024f50b5bb379d91a9",
                    name: "vo/LS_37.ogg"
                }, {
                    bytes: 46656,
                    md5: "f812145e366e83a8a270b7b603c07847",
                    name: "vo/LS_212.mp3"
                }, {
                    bytes: 28800,
                    md5: "c5d5461d0cde2d250b7110b2181b03f4",
                    name: "vo/LS_206.mp3"
                }, {
                    bytes: 42432,
                    md5: "ed744aa72d696ae17f36f04754b1701a",
                    name: "vo/LS_207.mp3"
                }, {
                    bytes: 44352,
                    md5: "295eaf644366b3c2c1397809227662b9",
                    name: "vo/LS_213.mp3"
                }, {
                    bytes: 22708,
                    md5: "1db4403828d97d6969d341221afb9b8f",
                    name: "vo/LS_36.ogg"
                }, {
                    bytes: 44702,
                    md5: "f13e05d72b979a36eb8a0ab273206d17",
                    name: "vo/LS_49g.ogg"
                }, {
                    bytes: 18432,
                    md5: "c69d656327cb7b3b35abb6639365f40e",
                    name: "vo/LS_59.mp3"
                }, {
                    bytes: 12672,
                    md5: "1d5d51e7c8dacb2baddac4cad6958ea4",
                    name: "vo/LS_65.mp3"
                }, {
                    bytes: 52989,
                    md5: "3bb40e879f49db93e4427bfca05884b3",
                    name: "vo/LS_45d.ogg"
                }, {
                    bytes: 24192,
                    md5: "97b11e18c960983a0479646897a35c98",
                    name: "vo/LS_71.mp3"
                }, {
                    bytes: 19200,
                    md5: "b3a02010ea72c1ffe7a100457dc164a0",
                    name: "vo/LS_171.mp3"
                }, {
                    bytes: 12480,
                    md5: "ac090760dd3fb60d9e262400f76c3632",
                    name: "vo/LS_165.mp3"
                }, {
                    bytes: 18240,
                    md5: "f7d9ee0dfe8243fbe36ba1a8a66039f4",
                    name: "vo/LS_61a.mp3"
                }, {
                    bytes: 41856,
                    md5: "d92f6b00427661411d3f651fb6914d0c",
                    name: "vo/LS_159.mp3"
                }, {
                    bytes: 73465,
                    md5: "ef14b84ece03a2d50092a48a8cf8c495",
                    name: "vo/LS_136.ogg"
                }, {
                    bytes: 17088,
                    md5: "4521d9d46ca1e24356f88566381ce058",
                    name: "vo/LS_161.mp3"
                }, {
                    bytes: 14016,
                    md5: "20797fccb988b6eb6390129d1453c799",
                    name: "vo/LS_175.mp3"
                }, {
                    bytes: 68025,
                    md5: "905306501d0f0d1e9be97e5e0fd85fff",
                    name: "vo/LS_149.mp3"
                }, {
                    bytes: 26688,
                    md5: "9b778d1a4ae4c7d2a1fc9785511662a7",
                    name: "vo/LS_49.mp3"
                }, {
                    bytes: 14016,
                    md5: "f7ee4588599027d6a6d9ac5f3f8214d1",
                    name: "vo/LS_75.mp3"
                }, {
                    bytes: 19200,
                    md5: "49a5df13865c181f5655293e5b2465ac",
                    name: "vo/LS_61.mp3"
                }, {
                    bytes: 41569,
                    md5: "8dc94bc72dd8be574779940ea5caa164",
                    name: "vo/LS_49c.ogg"
                }, {
                    bytes: 50492,
                    md5: "8d723bd987404b5997282f7161f93088",
                    name: "vo/LS_32.ogg"
                }, {
                    bytes: 21888,
                    md5: "af0a1d22e2d92c2b429bf0bcf34f14df",
                    name: "vo/LS_217.mp3"
                }, {
                    bytes: 25920,
                    md5: "828236432137dd66ea41c52394db8a96",
                    name: "vo/LS_203.mp3"
                }, {
                    bytes: 14614,
                    md5: "ff170fa564ae83c5a0f0ad3ab0b18b77",
                    name: "vo/LS_28a.ogg"
                }, {
                    bytes: 15936,
                    md5: "deb57822019bd09d2b56966fb8116cb4",
                    name: "vo/LS_202.mp3"
                }, {
                    bytes: 19200,
                    md5: "e7952a175631887062efd4bd5cae4d59",
                    name: "vo/LS_216.mp3"
                }, {
                    bytes: 24275,
                    md5: "0406711cd168b111e95c1e98c21b41ff",
                    name: "vo/LS_33.ogg"
                }, {
                    bytes: 14976,
                    md5: "d8806411a4523ad05bebf348f211be2c",
                    name: "vo/LS_40b.mp3"
                }, {
                    bytes: 39884,
                    md5: "c8ca0d9d0540dfc8f3544669c861b455",
                    name: "vo/LS_49b.ogg"
                }, {
                    bytes: 10560,
                    md5: "af3c5561600a597735e51764768d9afa",
                    name: "vo/LS_60.mp3"
                }, {
                    bytes: 69159,
                    md5: "7fbecc21a9159d05e84d243465851399",
                    name: "vo/LS_45a.ogg"
                }, {
                    bytes: 12864,
                    md5: "a8ae6ad495f38c475a984bd6d36a7ffc",
                    name: "vo/LS_74.mp3"
                }, {
                    bytes: 63010,
                    md5: "00c32126aff84472a010a9ce4149368e",
                    name: "vo/LS_148.mp3"
                }, {
                    bytes: 14400,
                    md5: "5bacc8edcae5b91e25ece45724e4e8d3",
                    name: "vo/LS_174.mp3"
                }, {
                    bytes: 19392,
                    md5: "ee2c985805726c06f611d10131aa4eef",
                    name: "vo/LS_160.mp3"
                }, {
                    bytes: 13056,
                    md5: "31168e48ac1f1812500898a411f8fba6",
                    name: "vo/LS_189.mp3"
                }, {
                    bytes: 14976,
                    md5: "4160b01a9769639752d8b8c407e569da",
                    name: "vo/LS_176.mp3"
                }, {
                    bytes: 12288,
                    md5: "26ccef3a2c6f28ad18807b06694c55ea",
                    name: "vo/LS_162.mp3"
                }, {
                    bytes: 9024,
                    md5: "ee63985f14e3cc3936266b222570be33",
                    name: "vo/LS_62.mp3"
                }, {
                    bytes: 13248,
                    md5: "d712b1e56325afb90a729b5fc09a153c",
                    name: "vo/LS_76.mp3"
                }, {
                    bytes: 75829,
                    md5: "d23d95bcef017466dd98d8ba7c64c969",
                    name: "vo/LS_45c.ogg"
                }, {
                    bytes: 48036,
                    md5: "13f393e243b91fd83ddfd64cb395bff4",
                    name: "vo/LS_31.ogg"
                }, {
                    bytes: 16704,
                    md5: "5fb298e99c071226fc81c65fba5a58c7",
                    name: "vo/LS_200.mp3"
                }, {
                    bytes: 44736,
                    md5: "c85bbc09976c997c7c7d95c337a5dd1c",
                    name: "vo/LS_214.mp3"
                }, {
                    bytes: 11981,
                    md5: "7efcb13f1a86529e640ecb0a878319cf",
                    name: "vo/LS_28b.ogg"
                }, {
                    bytes: 52800,
                    md5: "ec045a74af26bbf54bd33c4052ad7993",
                    name: "vo/LS_215.mp3"
                }, {
                    bytes: 18624,
                    md5: "8249eea33592b6f403e4e80505f150e9",
                    name: "vo/LS_201.mp3"
                }, {
                    bytes: 29952,
                    md5: "5e855942cf91e0ff3ab6144a419ff00a",
                    name: "vo/LS_40a.mp3"
                }, {
                    bytes: 41522,
                    md5: "25ceaacd25f9586ef2f2a277e19f855b",
                    name: "vo/LS_49a.ogg"
                }, {
                    bytes: 40723,
                    md5: "d543ab0a58f73735061cc6383394ceec",
                    name: "vo/LS_30.ogg"
                }, {
                    bytes: 71670,
                    md5: "2d08e37c4b382ccd8f8fd7ea9d329542",
                    name: "vo/LS_45b.ogg"
                }, {
                    bytes: 14208,
                    md5: "6bdf8c0ad9715791a5a60885fa50124e",
                    name: "vo/LS_77.mp3"
                }, {
                    bytes: 35712,
                    md5: "c9bb9ba07faeb960d06eabd23be1bf9b",
                    name: "vo/LS_63.mp3"
                }, {
                    bytes: 12288,
                    md5: "a56a73b19889c7217e04e82b0a3d73e2",
                    name: "vo/LS_163.mp3"
                }, {
                    bytes: 15360,
                    md5: "6c969986929ebbdf714b42cbe5b37b6d",
                    name: "vo/LS_177.mp3"
                }, {
                    bytes: 14400,
                    md5: "ec291aad0a73da628bf02079bf384dc9",
                    name: "vo/LS_188.mp3"
                }, {
                    bytes: 87787,
                    md5: "b649b7d1730f34a04f225d8206757740",
                    name: "vo/LS_143.ogg"
                }, {
                    bytes: 10818,
                    md5: "aaec7412355698ea55856ffe8940038e",
                    name: "vo/LS_157.ogg"
                }, {
                    bytes: 66354,
                    md5: "a588f497e6ae2f13b65ea4ffe3ff6ae2",
                    name: "vo/LS_138.mp3"
                }, {
                    bytes: 52209,
                    md5: "369d1366be7e2c4cf2dbc5b370a58045",
                    name: "vo/LS_180.ogg"
                }, {
                    bytes: 26136,
                    md5: "3696178de79523175e6ef8cadb63ae96",
                    name: "vo/LS_194.ogg"
                }, {
                    bytes: 32324,
                    md5: "37a53ea2c0da27993be220b77087e8fd",
                    name: "vo/LS_80.ogg"
                }, {
                    bytes: 18816,
                    md5: "bad86ee7dee9a944607fa1aa66c87e59",
                    name: "vo/LS_38.mp3"
                }, {
                    bytes: 26880,
                    md5: "388a689f0fe3682e9639cbfc737daad2",
                    name: "vo/LS_49i.mp3"
                }, {
                    bytes: 71898,
                    md5: "5e57def50b60c6ce565c642f0e67db4b",
                    name: "vo/LS_57.ogg"
                }, {
                    bytes: 38994,
                    md5: "1d5ce78b4927282672911d0879204c0c",
                    name: "vo/LS_43.ogg"
                }, {
                    bytes: 23424,
                    md5: "a78bb4c29a641a0bdb880f68e649dcef",
                    name: "vo/LS_45j.mp3"
                }, {
                    bytes: 74547,
                    md5: "567692ce1019cde4497099d35193b9d4",
                    name: "vo/LS_209.ogg"
                }, {
                    bytes: 60679,
                    md5: "2934f613859f91b69fcca97b9bb888ff",
                    name: "vo/LS_58b.ogg"
                }, {
                    bytes: 10560,
                    md5: "acd7544eb632f6de40e33651d402a0d1",
                    name: "vo/LS_51b.mp3"
                }, {
                    bytes: 70583,
                    md5: "74a7db0a6cf7908cb4fef65586d4bfaf",
                    name: "vo/LS_208.ogg"
                }, {
                    bytes: 24E3,
                    md5: "7d15efb3a064d73f86e3f9fc1ab0961d",
                    name: "vo/LS_45k.mp3"
                }, {
                    bytes: 39305,
                    md5: "7954f427537540309d7507a2246f5a65",
                    name: "vo/LS_42.ogg"
                }, {
                    bytes: 74666,
                    md5: "e004c9887fd4df2ff7aa9385cf175d61",
                    name: "vo/LS_56.ogg"
                }, {
                    bytes: 31296,
                    md5: "a5dc9b47eb1e62751611516eded0e70e",
                    name: "vo/LS_49h.mp3"
                }, {
                    bytes: 18432,
                    md5: "749400affc459acc3a6a76b83589b2d7",
                    name: "vo/LS_39.mp3"
                }, {
                    bytes: 68419,
                    md5: "d02a870a289de4c0de4b4cafb0726b95",
                    name: "vo/LS_81.ogg"
                }, {
                    bytes: 26963,
                    md5: "923fafb41ae25be0ba8dede71fe472ae",
                    name: "vo/LS_195.ogg"
                }, {
                    bytes: 60393,
                    md5: "673dc97c3cc56c047be1ab2ea339a340",
                    name: "vo/LS_181.ogg"
                }, {
                    bytes: 63010,
                    md5: "4bc977a446d18a86a460b0bde427a071",
                    name: "vo/LS_139.mp3"
                }, {
                    bytes: 24375,
                    md5: "b8c27a47778b3126f095e72d512aa913",
                    name: "vo/LS_156.ogg"
                }, {
                    bytes: 94342,
                    md5: "795bf67ec1053f2c5ec2380ebd0eaa99",
                    name: "vo/LS_142.ogg"
                }, {
                    bytes: 19138,
                    md5: "5506323425e8df45aa5bfdc2ebb6f724",
                    name: "vo/LS_168.ogg"
                }, {
                    bytes: 80669,
                    md5: "7e5dfed1ddc0a7b7dbf06450a5f0504c",
                    name: "vo/LS_154.ogg"
                }, {
                    bytes: 82179,
                    md5: "3bb33f176135a5f2b1523bec00fe45e7",
                    name: "vo/LS_140.ogg"
                }, {
                    bytes: 26824,
                    md5: "2dec0b3eae7bfbe186aa424d1f11916e",
                    name: "vo/LS_197.ogg"
                }, {
                    bytes: 23586,
                    md5: "4d19d6cdbcf0611ce05254d4b3e46633",
                    name: "vo/LS_183.ogg"
                }, {
                    bytes: 39711,
                    md5: "78a07e4bc4d24f46076261707c3a18ed",
                    name: "vo/LS_40.ogg"
                }, {
                    bytes: 71467,
                    md5: "99a4af085e226b36a86825938c4650c9",
                    name: "vo/LS_54.ogg"
                }, {
                    bytes: 24192,
                    md5: "33cf47c1b9989757d65c564209b18ea5",
                    name: "vo/LS_45i.mp3"
                }, {
                    bytes: 21577,
                    md5: "ac6e828297d4dc40bdf97b3f103f8bb4",
                    name: "vo/LS_68.ogg"
                }, {
                    bytes: 14208,
                    md5: "0220b90b0f4ee2c6f5c88ea4d15bc376",
                    name: "vo/LS_51a.mp3"
                }, {
                    bytes: 21067,
                    md5: "15642cc4e53a68aabd928220f38093ec",
                    name: "vo/LS_69.ogg"
                }, {
                    bytes: 49536,
                    md5: "917ac28174fd0831741d5fda619f16bb",
                    name: "vo/LS_45h.mp3"
                }, {
                    bytes: 68140,
                    md5: "2ef31cfa3c518413810202d5aa732eea",
                    name: "vo/LS_55.ogg"
                }, {
                    bytes: 29069,
                    md5: "5e10365f7e88e66842508ecd10c3297f",
                    name: "vo/LS_41.ogg"
                }, {
                    bytes: 20624,
                    md5: "b49afd57a3cd4429e9bd279b096acda3",
                    name: "vo/LS_182.ogg"
                }, {
                    bytes: 28682,
                    md5: "95cd4400b557df9db277175227a09dc8",
                    name: "vo/LS_196.ogg"
                }, {
                    bytes: 87375,
                    md5: "1bd2d0d40a54694dbea5435d4586f3a9",
                    name: "vo/LS_141.ogg"
                }, {
                    bytes: 83822,
                    md5: "3d0135488ea5dbcfc585737c71edaf30",
                    name: "vo/LS_155.ogg"
                }, {
                    bytes: 19034,
                    md5: "55d597021d746a9dfc4898d37fa98dc1",
                    name: "vo/LS_169.ogg"
                }, {
                    bytes: 77271,
                    md5: "dabcd43031e369586431cb180af47fd7",
                    name: "vo/LS_151.ogg"
                }, {
                    bytes: 78856,
                    md5: "afc91ad3430ee0c39f14c4e21137491a",
                    name: "vo/LS_145.ogg"
                }, {
                    bytes: 43548,
                    md5: "8e4467bdba420618707959cbdd54a0dc",
                    name: "vo/LS_179.ogg"
                }, {
                    bytes: 27239,
                    md5: "692937fa9459fe595c1648b006d28bb4",
                    name: "vo/LS_192.ogg"
                }, {
                    bytes: 21947,
                    md5: "1af0d7c4515cd3a331c8cf95d56b2787",
                    name: "vo/LS_186.ogg"
                }, {
                    bytes: 50723,
                    md5: "ba706456dda41e75cb0607363c70bb01",
                    name: "vo/LS_43c.ogg"
                }, {
                    bytes: 27264,
                    md5: "081e3dfb2af6e15036c3c3f3a240ae68",
                    name: "vo/LS_45l.mp3"
                }, {
                    bytes: 24250,
                    md5: "dba99f5c9ebddf808ede8e9e4586583e",
                    name: "vo/LS_79.ogg"
                }, {
                    bytes: 72395,
                    md5: "6a8215e629c95105125a6f2c967a1c74",
                    name: "vo/LS_45.ogg"
                }, {
                    bytes: 28145,
                    md5: "17a4d154d28b2a0dffab2f47ec6def8e",
                    name: "vo/LS_51.ogg"
                }, {
                    bytes: 27511,
                    md5: "3b987a2a9745d56543de6d23918335e2",
                    name: "vo/LS_50.ogg"
                }, {
                    bytes: 97566,
                    md5: "cdce5b60b3d1d75c623a6c5870ffdc06",
                    name: "vo/LS_44.ogg"
                }, {
                    bytes: 22436,
                    md5: "e7f918b4eac4fdbde1ad8caaa0cedaad",
                    name: "vo/LS_78.ogg"
                }, {
                    bytes: 26880,
                    md5: "b5fead75f6d151e7ada15c76de337bc0",
                    name: "vo/LS_45m.mp3"
                }, {
                    bytes: 22627,
                    md5: "a3152ad86e35dbc81d21244ac070cc5b",
                    name: "vo/LS_187.ogg"
                }, {
                    bytes: 23911,
                    md5: "fa65b935e3c22f308d301d1bebec2d05",
                    name: "vo/LS_193.ogg"
                }, {
                    bytes: 38899,
                    md5: "b95275511a9278e8d37a29556b554149",
                    name: "vo/LS_178.ogg"
                }, {
                    bytes: 79452,
                    md5: "6dc8101e7a1c2be301cf56c5be7f71b8",
                    name: "vo/LS_144.ogg"
                }, {
                    bytes: 82224,
                    md5: "c4ce20efe951562ed525b49340b94f94",
                    name: "vo/LS_150.ogg"
                }, {
                    bytes: 80554,
                    md5: "6d55987da98f85c79dac0b636d67e5ea",
                    name: "vo/LS_146.ogg"
                }, {
                    bytes: 87294,
                    md5: "f2bf612a4f856ee9fbeed5e9ee1c97aa",
                    name: "vo/LS_152.ogg"
                }, {
                    bytes: 20485,
                    md5: "08a1da6657ecf5904d2e3c20cd26b4aa",
                    name: "vo/LS_185.ogg"
                }, {
                    bytes: 21837,
                    md5: "86e2c1e65c79ad02205bb3f23dbc7ecd",
                    name: "vo/LS_191.ogg"
                }, {
                    bytes: 18393,
                    md5: "c20fb5c90ecae102444abef750d63cf7",
                    name: "vo/LS_29.mp3"
                }, {
                    bytes: 13248,
                    md5: "f602894a81750e3d05460378540b4bbe",
                    name: "vo/LS_15.mp3"
                }, {
                    bytes: 61089,
                    md5: "6737adac770f4b40950696e4eb2a1afa",
                    name: "vo/LS_52.ogg"
                }, {
                    bytes: 63972,
                    md5: "3652bd474c2a385a05b12d1ccc775541",
                    name: "vo/LS_46.ogg"
                }, {
                    bytes: 39951,
                    md5: "8f0e893ab5930314b9ebd5c05502c040",
                    name: "vo/LS_47.ogg"
                }, {
                    bytes: 67697,
                    md5: "2cbc7e047b82b08d892ffdc126f2c58c",
                    name: "vo/LS_53.ogg"
                }, {
                    bytes: 59944,
                    md5: "998d020fc619c6823038ff280ec53b4e",
                    name: "vo/LS_43a.ogg"
                }, {
                    bytes: 47232,
                    md5: "e5e0dc6c69b057497dea10bb201481a6",
                    name: "vo/LS_28.mp3"
                }, {
                    bytes: 22361,
                    md5: "c6ed1523d86e73264a384bb8854986e6",
                    name: "vo/LS_190.ogg"
                }, {
                    bytes: 22854,
                    md5: "2925b1505752b9592f48f944d8e130aa",
                    name: "vo/LS_184.ogg"
                }, {
                    bytes: 72748,
                    md5: "9a33ec651901d329c12735591cb67815",
                    name: "vo/LS_153.ogg"
                }, {
                    bytes: 87499,
                    md5: "98ee63a5e6889e4e273071bc92bc041c",
                    name: "vo/LS_147.ogg"
                }, {
                    bytes: 1623651,
                    md5: "593a1d1a9b526cb77eb15993ea84a880",
                    name: "libraryLowEnd/NLS_Game/library.json"
                }, {
                    bytes: 271871,
                    md5: "14c138f7fa014735b8384dec0eb2c3d0",
                    name: "libraryLowEnd/NLS_Game/atlas0.png"
                }, {
                    bytes: 532941,
                    md5: "69339c7fcb3baaa0107a032099f21088",
                    name: "libraryLowEnd/NLS_Game/atlas1.png"
                }, {
                    bytes: 693076,
                    md5: "3332353ccb4cb5bc294d0a21ed4cb12a",
                    name: "libraryLowEnd/NLS_Game/atlas2.png"
                }, {
                    bytes: 11601,
                    md5: "a01ebbcd9205bd5cf20588b6019ee896",
                    name: "sfx/crusher3.mp3"
                }, {
                    bytes: 11601,
                    md5: "a2942b2e5ea868e25f65c5a85eceba4f",
                    name: "sfx/crusher2.mp3"
                }, {
                    bytes: 11601,
                    md5: "c144086735475a048c712f135db4bc92",
                    name: "sfx/crusher1.mp3"
                }, {
                    bytes: 9524,
                    md5: "2fe1174fae48aa510fdc061d0a3d68ff",
                    name: "sfx/bellyHighLight.ogg"
                }, {
                    bytes: 5959,
                    md5: "a6412de85661571ba5c1ae6ad8643623",
                    name: "sfx/squeezePickle2.mp3"
                }, {
                    bytes: 22899,
                    md5: "a2b325a72df2d5a504afcb84a62a81cb",
                    name: "sfx/pour.ogg"
                }, {
                    bytes: 39618,
                    md5: "73b3292f0cef085294dfb0cd2ae6818e",
                    name: "sfx/stir.ogg"
                }, {
                    bytes: 14285,
                    md5: "e200bbcd95e992115d9e5bca2bfe98c2",
                    name: "sfx/crusher.ogg"
                }, {
                    bytes: 9104,
                    md5: "a45c5822da6d97bacddc3c90d9113a0f",
                    name: "sfx/squeezeLemon2.ogg"
                }, {
                    bytes: 10525,
                    md5: "b11a44a9d05b2fcf8e784325b7595885",
                    name: "sfx/squeezeLemon1.ogg"
                }, {
                    bytes: 11183,
                    md5: "860c8b621e96f32b8875796ba51ace41",
                    name: "sfx/slice.mp3"
                }, {
                    bytes: 27448,
                    md5: "f6c0fe766830bf0444d98cbae1b66220",
                    name: "sfx/scoopWatermellon_01.ogg"
                }, {
                    bytes: 27945,
                    md5: "82e4662a33deff60d901f89301b4c8b2",
                    name: "sfx/wipe.ogg"
                }, {
                    bytes: 29181,
                    md5: "9b88da99439d45913a2b2e5cfba7b174",
                    name: "sfx/scoopWatermellon_02.ogg"
                }, {
                    bytes: 6168,
                    md5: "6a8bbfa24994b9bf6681efcd14467cf6",
                    name: "sfx/squeezeCucumber2.mp3"
                }, {
                    bytes: 18704,
                    md5: "b2da8d4c715537d4ceb05eaabfcae55d",
                    name: "sfx/dropIceCubes.ogg"
                }, {
                    bytes: 21674,
                    md5: "5f26d81835e3d84deafa27bfe2ffb11e",
                    name: "sfx/addSugar.ogg"
                }, {
                    bytes: 26021,
                    md5: "8c5528428e1d1b6669dd74d1bf1305b5",
                    name: "sfx/stir.mp3"
                }, {
                    bytes: 11601,
                    md5: "a9ddeb26c6872dae348e676ff630e615",
                    name: "sfx/crusher.mp3"
                }, {
                    bytes: 7212,
                    md5: "b5dab1247ec585a72e9a033c42b9b31f",
                    name: "sfx/bellyHighLight.mp3"
                }, {
                    bytes: 10149,
                    md5: "4d4d19728a950e13fd67e6c870e41ce8",
                    name: "sfx/squeezePickle2.ogg"
                }, {
                    bytes: 14945,
                    md5: "73703d169e5df29aba4d836d9ef0e77f",
                    name: "sfx/pour.mp3"
                }, {
                    bytes: 14532,
                    md5: "17fffc66efc8e2fc11dfe3bdd8c73e6f",
                    name: "sfx/crusher1.ogg"
                }, {
                    bytes: 13881,
                    md5: "c36f276643deb199341385a06985d764",
                    name: "sfx/crusher3.ogg"
                }, {
                    bytes: 14557,
                    md5: "b58404842253ef18ad9ce2be378ae06c",
                    name: "sfx/crusher2.ogg"
                }, {
                    bytes: 20352,
                    md5: "76a2f0754ab43024486e1723f660084e",
                    name: "sfx/scoopWatermellon_02.mp3"
                }, {
                    bytes: 11225,
                    md5: "3a7035d48d458d3e555c2033f6449fb2",
                    name: "sfx/squeezeCucumber2.ogg"
                }, {
                    bytes: 12855,
                    md5: "919d1bd001a975e413fcf8cfa9748cce",
                    name: "sfx/dropIceCubes.mp3"
                }, {
                    bytes: 21423,
                    md5: "cd51efe4a3a843c395f989ecbdd466e4",
                    name: "sfx/addSugar.mp3"
                }, {
                    bytes: 20352,
                    md5: "a3d631e535fc7b531bc54c84dd52ba67",
                    name: "sfx/scoopWatermellon_01.mp3"
                }, {
                    bytes: 23722,
                    md5: "5eae5bd2af35c384fa7b757d6ed8f1f8",
                    name: "sfx/wipe.mp3"
                }, {
                    bytes: 5959,
                    md5: "5b09d3f4ef422e7398869fdc3c78f993",
                    name: "sfx/squeezeLemon1.mp3"
                }, {
                    bytes: 13381,
                    md5: "ddef39db3a47c64552f7a2505b178b79",
                    name: "sfx/slice.ogg"
                }, {
                    bytes: 5541,
                    md5: "990a16f0436c906e5153c9f3c892e4bf",
                    name: "sfx/squeezeLemon2.mp3"
                }, {
                    bytes: 397892,
                    md5: "9f07f51d3a3d452c94558c85a6fe9f22",
                    name: "library/NLS_Game/atlas9.png"
                }, {
                    bytes: 289606,
                    md5: "9de44f3060d6bad68405c047674ba9d6",
                    name: "library/NLS_Game/atlas8.png"
                }, {
                    bytes: 1613046,
                    md5: "991d6dbfd80869a86ccc6b52cd5a96c9",
                    name: "library/NLS_Game/library.json"
                }, {
                    bytes: 275076,
                    md5: "da9477bf81b5fc8321beb56d97b1d98c",
                    name: "library/NLS_Game/atlas6.png"
                }, {
                    bytes: 251987,
                    md5: "f94acacefe9d33b88b4796dd162e78f2",
                    name: "library/NLS_Game/atlas7.png"
                }, {
                    bytes: 239007,
                    md5: "f1a32022d52a14d489258de127d5a6d6",
                    name: "library/NLS_Game/atlas5.png"
                }, {
                    bytes: 822966,
                    md5: "70ebb827a124df9a2d6a583681b22d3c",
                    name: "library/NLS_Game/atlas4.png"
                }, {
                    bytes: 773,
                    md5: "ec63841db29c7645212ef4edc50a5690",
                    name: "library/NLS_Game/atlas12.png"
                }, {
                    bytes: 417640,
                    md5: "135f590dc04e7825ba20de96d61c409f",
                    name: "library/NLS_Game/atlas0.png"
                }, {
                    bytes: 119336,
                    md5: "e7350ecb769af71aaf9cc18007755deb",
                    name: "library/NLS_Game/atlas1.png"
                }, {
                    bytes: 75111,
                    md5: "f4d2b4a3a7694d89c4183925d6776b9e",
                    name: "library/NLS_Game/atlas11.png"
                }, {
                    bytes: 203786,
                    md5: "c90394cc3aefc257417362c25029bdfc",
                    name: "library/NLS_Game/atlas3.png"
                }, {
                    bytes: 192935,
                    md5: "87f34c917b7adb37d0e28dc0f9a527cb",
                    name: "library/NLS_Game/atlas2.png"
                }, {
                    bytes: 452540,
                    md5: "2189ec877b421aaa7423fe3a5619b8a9",
                    name: "library/NLS_Game/atlas10.png"
                }, {
                    bytes: 1634885,
                    md5: "cb8772c4ba2326365ebd69b54242ce93",
                    name: "libraryMobile/NLS_Game/library.json"
                }, {
                    bytes: 345693,
                    md5: "0fc9ed836fd5a20a59085ad6edbf69ef",
                    name: "libraryMobile/NLS_Game/atlas5.png"
                }, {
                    bytes: 573119,
                    md5: "8227b89a7c448cdb601f359751c6d72d",
                    name: "libraryMobile/NLS_Game/atlas4.png"
                }, {
                    bytes: 477454,
                    md5: "6b2ba3e80295b94301ddb56e59b76e99",
                    name: "libraryMobile/NLS_Game/atlas0.png"
                }, {
                    bytes: 198817,
                    md5: "a0b7f286050403ee35617a4ea936b500",
                    name: "libraryMobile/NLS_Game/atlas1.png"
                }, {
                    bytes: 322378,
                    md5: "47cb1e227f1e587cdfdc7c9a9d4f1b76",
                    name: "libraryMobile/NLS_Game/atlas3.png"
                }, {
                    bytes: 558412,
                    md5: "79636ebb301789864cee417d65d844f9",
                    name: "libraryMobile/NLS_Game/atlas2.png"
                }]
            }]
        }
    };
    za._supportsCrossOrigin = 0 <= window.navigator.userAgent.indexOf("Linux; U; Android") ? !1 : null != (new XMLHttpRequest).withCredentials;
    jb._sharedEvent = new Ve;
    Xa._sharedEvent = new We;
    Ma._sharedEvent = new Xe;
    kc.CANVAS_TEXTURES = (new cc("(iPhone|iPod|iPad)", "")).match(window.navigator.userAgent);
    ea.VENDOR_PREFIXES = ["webkit", "moz", "ms", "o", "khtml"];
    ea.SHOULD_HIDE_MOBILE_BROWSER = window.top == window ? (new cc("Mobile(/.*)? Safari", "")).match(window.navigator.userAgent) : !1;
    ga._detectSupport = !0;
    zb.NAME = "Sprite_8";
    zb.PAUSED = 128;
    zb.SKIP_NEXT = 256;
    zb.NEXT_FLAG = 512;
    dc.SCALE = 1;
    pb.BASE_URL = "";
    $a.USE_CACHE = !1;
    $a.USE_ENUM_INDEX = !1;
    $a.BASE64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789%:";
    Ra.DEFAULT_RESOLVER = new ze;
    Ra.BASE64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789%:";
    qb.count = 0;
    Hb.escapes = function() {
        var a = new $;
        null != o.lt ? a.setReserved("lt", "<") : a.h.lt = "<";
        null != o.gt ? a.setReserved("gt", ">") : a.h.gt = ">";
        null != o.amp ? a.setReserved("amp", "&") : a.h.amp = "&";
        null != o.quot ? a.setReserved("quot", '"') : a.h.quot = '"';
        null != o.apos ? a.setReserved("apos", "'") : a.h.apos = "'";
        return a
    }(this);
    C.__toStr = {}.toString;
    Pb.BYTES_PER_ELEMENT = 1;
    A.main()
})("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this);