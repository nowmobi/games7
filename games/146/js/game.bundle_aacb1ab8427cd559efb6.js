(() => {
    "use strict";
    var t, e = {
            544: (t, e, n) => {
                var i = n(3957),
                    r = n(5716),
                    o = n(7715),
                    a = n(4607),
                    s = n(1741),
                    c = n(5671),
                    u = n(3144),
                    l = n(7326),
                    h = n(9340),
                    f = n(2963),
                    d = n(1120),
                    p = n(8477),
                    v = n(1559),
                    y = n(3882),
                    g = n(2292);
                const m = JSON.parse('{"basePath":"assets/audio/music/","list":[{"src":"bg-music-ingredient-reveal.mp3"},{"src":"bg-music-decoration.mp3"},{"src":"bg-music-bowl.mp3"}]}'),
                    k = JSON.parse('{"basePath":"assets/audio/sfx/","list":[{"src":"vo-3-more.mp3"},{"src":"add-flour-1.mp3"},{"src":"add-butter-1.mp3"},{"src":"add-butter-2.mp3"},{"src":"add-egg-1.mp3"},{"src":"add-egg-2.mp3"},{"src":"add-liquid-1.mp3"},{"src":"add-liquid-2.mp3"},{"src":"add-sugar-1.mp3"},{"src":"add-sugar-2.mp3"},{"src":"character-slide.mp3"},{"src":"cut-1.mp3"},{"src":"cut-2.mp3"},{"src":"cut-3.mp3"},{"src":"cut-bubble.mp3"},{"src":"magic-item-bounce-loop.mp3"},{"src":"magic-item-branch-grow.mp3"},{"src":"magic-item-bubbles-loop.mp3"},{"src":"magic-item-popcorn.mp3"},{"src":"magic-item-rain-loop.mp3"},{"src":"magic-item-select-poof.mp3"},{"src":"magic-item-shrink.mp3"},{"src":"object-grab.mp3"},{"src":"object-place.mp3"},{"src":"pantry-slide-in.mp3"},{"src":"pantry-slide-out.mp3"},{"src":"sparkle-generic-.mp3"},{"src":"tabs-slide-out.mp3"},{"src":"transition-frosting-in.mp3"},{"src":"transition-frosting-out.mp3"},{"src":"whisk-mix.mp3"},{"src":"sparkle-loop.mp3"},{"src":"blender-mix.mp3"},{"src":"cake-reveal.mp3"},{"src":"click-play.mp3"},{"src":"click-generic.mp3"},{"src":"cheshire-laugh.mp3"},{"src":"cake-ingredient-reveal.mp3"}]}'),
                    w = JSON.parse('{"basePath":"assets/audio/vo/","list":[{"src":"vo-1-more.mp3"},{"src":"vo-2-more.mp3"},{"src":"vo-3-more.mp3"},{"src":"vo-4-more.mp3"},{"src":"vo-a-93.mp3"},{"src":"vo-a-94.mp3"},{"src":"vo-a-95.mp3"},{"src":"vo-a-96.mp3"},{"src":"vo-a-97.mp3"},{"src":"vo-a-98.mp3"},{"src":"vo-alice-1.mp3"},{"src":"vo-apple.mp3"},{"src":"vo-banana.mp3"},{"src":"vo-blender.mp3"},{"src":"vo-bouncing-1.mp3"},{"src":"vo-bouncing.mp3"},{"src":"vo-bubble-1.mp3"},{"src":"vo-bubble.mp3"},{"src":"vo-butter.mp3"},{"src":"vo-cat.mp3"},{"src":"vo-cheshire-1.mp3"},{"src":"vo-cheshire-2.mp3"},{"src":"vo-cheshire-3.mp3"},{"src":"vo-cheshire-4.mp3"},{"src":"vo-chocolate.mp3"},{"src":"vo-cookie-1-alt.mp3"},{"src":"vo-cookie-1.mp3"},{"src":"vo-cookie-2.mp3"},{"src":"vo-cookie-3.mp3"},{"src":"vo-cookie-4.mp3"},{"src":"vo-cookie-5.mp3"},{"src":"vo-cookie-6.mp3"},{"src":"vo-cookie-7.mp3"},{"src":"vo-cookie-8.mp3"},{"src":"vo-cookie-9.mp3"},{"src":"vo-cookie-10.mp3"},{"src":"vo-cutting-board.mp3"},{"src":"vo-decor-1.mp3"},{"src":"vo-decor-2.mp3"},{"src":"vo-decor-3.mp3"},{"src":"vo-decor-4.mp3"},{"src":"vo-decor-5.mp3"},{"src":"vo-decor-6.mp3"},{"src":"vo-eggs.mp3"},{"src":"vo-encourage-1.mp3"},{"src":"vo-encourage-2.mp3"},{"src":"vo-encourage-3.mp3"},{"src":"vo-encourage-4.mp3"},{"src":"vo-encourage-5.mp3"},{"src":"vo-encourage-6.mp3"},{"src":"vo-encourage-7.mp3"},{"src":"vo-encourage-8.mp3"},{"src":"vo-encourage-9.mp3"},{"src":"vo-fergie-1.mp3"},{"src":"vo-fergie-2.mp3"},{"src":"vo-fergie-3.mp3"},{"src":"vo-flour.mp3"},{"src":"vo-flower-1.mp3"},{"src":"vo-flower.mp3"},{"src":"vo-hattie-1.mp3"},{"src":"vo-hattie-2.mp3"},{"src":"vo-honeycomb.mp3"},{"src":"vo-inact-blend-1.mp3"},{"src":"vo-inact-blend-2.mp3"},{"src":"vo-inact-bowl-1.mp3"},{"src":"vo-inact-bowl-2.mp3"},{"src":"vo-inact-bowl-3.mp3"},{"src":"vo-inact-bowl-4.mp3"},{"src":"vo-inact-bowl-5.mp3"},{"src":"vo-inact-bowl-6.mp3"},{"src":"vo-inact-bowl-7.mp3"},{"src":"vo-inact-bowl-8.mp3"},{"src":"vo-inact-bowl-9.mp3"},{"src":"vo-inact-bowl-10.mp3"},{"src":"vo-inact-bowl-11.mp3"},{"src":"vo-instruct-1.mp3"},{"src":"vo-instruct-2.mp3"},{"src":"vo-instruct-3.mp3"},{"src":"vo-instruct-4.mp3"},{"src":"vo-instruct-5.mp3"},{"src":"vo-instruct-6.mp3"},{"src":"vo-instruct-7-alt.mp3"},{"src":"vo-instruct-7.mp3"},{"src":"vo-instruct-8.mp3"},{"src":"vo-instruct-9.mp3"},{"src":"vo-instruct-10.mp3"},{"src":"vo-instruct-10a.mp3"},{"src":"vo-instruct-11.mp3"},{"src":"vo-instruct-12.mp3"},{"src":"vo-instruct-13-alt.mp3"},{"src":"vo-instruct-13.mp3"},{"src":"vo-instruct-14-alt.mp3"},{"src":"vo-instruct-14.mp3"},{"src":"vo-instruct-15.mp3"},{"src":"vo-instruct-16.mp3"},{"src":"vo-instruct-17.mp3"},{"src":"vo-instruct-18-alt.mp3"},{"src":"vo-instruct-18.mp3"},{"src":"vo-instruct-19.mp3"},{"src":"vo-instruct-20.mp3"},{"src":"vo-instruct-21.mp3"},{"src":"vo-instruct-22.mp3"},{"src":"vo-intro-1.mp3"},{"src":"vo-intro-2.mp3"},{"src":"vo-intro-3.mp3"},{"src":"vo-laughs.mp3"},{"src":"vo-lemon.mp3"},{"src":"vo-lets-roll.mp3"},{"src":"vo-locked-ingredient.mp3"},{"src":"vo-magic-1.mp3"},{"src":"vo-magic-2.mp3"},{"src":"vo-marshmellow.mp3"},{"src":"vo-milk.mp3"},{"src":"vo-rain-1.mp3"},{"src":"vo-rain.mp3"},{"src":"vo-rosa-1.mp3"},{"src":"vo-rosa-2.mp3"},{"src":"vo-rosa-3.mp3"},{"src":"vo-rosa-4.mp3"},{"src":"vo-rosa-5.mp3"},{"src":"vo-shrinking-1.mp3"},{"src":"vo-shrinking.mp3"},{"src":"vo-slice-1.mp3"},{"src":"vo-sparkleberry.mp3"},{"src":"vo-strawberry.mp3"},{"src":"vo-sugar.mp3"},{"src":"vo-title-alt.mp3"},{"src":"vo-title.mp3"},{"src":"vo-upside-down-1.mp3"},{"src":"vo-upside-down.mp3"},{"src":"vo-wishing-1.mp3"},{"src":"vo-wishing.mp3"}]}');

                function b(t, e) {
                    var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (!n) {
                        if (Array.isArray(t) || (n = function(t, e) {
                                if (t) {
                                    if ("string" == typeof t) return x(t, e);
                                    var n = Object.prototype.toString.call(t).slice(8, -1);
                                    return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? x(t, e) : void 0
                                }
                            }(t)) || e && t && "number" == typeof t.length) {
                            n && (t = n);
                            var i = 0,
                                r = function() {};
                            return {
                                s: r,
                                n: function() {
                                    return i >= t.length ? {
                                        done: !0
                                    } : {
                                        done: !1,
                                        value: t[i++]
                                    }
                                },
                                e: function(t) {
                                    throw t
                                },
                                f: r
                            }
                        }
                        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }
                    var o, a = !0,
                        s = !1;
                    return {
                        s: function() {
                            n = n.call(t)
                        },
                        n: function() {
                            var t = n.next();
                            return a = t.done, t
                        },
                        e: function(t) {
                            s = !0, o = t
                        },
                        f: function() {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (s) throw o
                            }
                        }
                    }
                }

                function x(t, e) {
                    (null == e || e > t.length) && (e = t.length);
                    for (var n = 0, i = new Array(e); n < e; n++) i[n] = t[n];
                    return i
                }
                var Z = function() {
                        function t(e) {
                            (0, c.Z)(this, t), console.log("new AudioPlayerChannel", e), this._name = e, this._volume = 1, this._muted = !1
                        }
                        return (0, u.Z)(t, [{
                            key: "volume",
                            get: function() {
                                return this._volume
                            },
                            set: function(t) {
                                this._volume = t;
                                var e, n = b(audioPlayer._getChannelInstances(this._name));
                                try {
                                    for (n.s(); !(e = n.n()).done;) e.value._updateVolume()
                                } catch (t) {
                                    n.e(t)
                                } finally {
                                    n.f()
                                }
                            }
                        }, {
                            key: "mute",
                            get: function() {
                                return this._mute
                            },
                            set: function(t) {
                                this._mute = t;
                                var e, n = b(audioPlayer._getChannelInstances(this._name));
                                try {
                                    for (n.s(); !(e = n.n()).done;) e.value._updateVolume()
                                } catch (t) {
                                    n.e(t)
                                } finally {
                                    n.f()
                                }
                            }
                        }]), t
                    }(),
                    _ = function() {
                        function t() {
                            (0, c.Z)(this, t), this._channels = {}, this._channelData = {}
                        }
                        return (0, u.Z)(t, [{
                            key: "isContextActive",
                            get: function() {
                                try {
                                    return "running" === g.eq.context.audioContext.state
                                } catch (t) {
                                    console.warn(t)
                                }
                                return !1
                            }
                        }, {
                            key: "instances",
                            get: function() {
                                return g.eq._sounds
                            }
                        }, {
                            key: "volume",
                            get: function() {
                                return g.eq.volume
                            },
                            set: function(t) {
                                g.eq.volume = t
                            }
                        }, {
                            key: "setChannelData",
                            value: function(t, e) {
                                e.list.forEach((function(t) {
                                    t.id || (t.id = t.src.substr(0, t.src.lastIndexOf(".")) || t.src)
                                })), this._channelData[t] = e
                            }
                        }, {
                            key: "getChannelData",
                            value: function(t) {
                                return this._channelData[t]
                            }
                        }, {
                            key: "play",
                            value: function(t) {
                                var e, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                    i = this._getSoundLoadObject(t);
                                if (!i) return console.warn("No Audio Channel Data for: ".concat(t)), null;
                                var r = g.eq.exists(i.id);
                                if (!r) {
                                    var o = Object.assign({
                                        url: i.fullPath
                                    }, i.options);
                                    g.eq.add(i.id, o)
                                }
                                if (e = g.eq.play(i.id, Object.assign({}, n)), n && n.channel) {
                                    var a = this._getChannel(n.channel);
                                    e.channel = a
                                }
                                return e
                            }
                        }, {
                            key: "removeSound",
                            value: function(t) {
                                var e = this._getSoundLoadObject(t);
                                g.eq.remove(e.id)
                            }
                        }, {
                            key: "pause",
                            value: function(t) {
                                this._channelAction("pause", t)
                            }
                        }, {
                            key: "resume",
                            value: function(t) {
                                this._channelAction("resume", t)
                            }
                        }, {
                            key: "stop",
                            value: function(t) {
                                this._channelAction("stop", t)
                            }
                        }, {
                            key: "setChannelVolumes",
                            value: function(t, e) {
                                arguments.length > 3 && void 0 !== arguments[3] || Ease.quadInOut;
                                var n = this._getChannel(t);
                                n.volume = e
                            }
                        }, {
                            key: "setChannelMute",
                            value: function(t, e) {
                                this._getChannel(t).mute = !!e
                            }
                        }, {
                            key: "_getChannel",
                            value: function(t) {
                                return this._channels[t] = this._channels[t] || new Z(t)
                            }
                        }, {
                            key: "_getChannelInstances",
                            value: function(t) {
                                var e, n = this._getChannel(t),
                                    i = [],
                                    r = b(this.instances);
                                try {
                                    for (r.s(); !(e = r.n()).done;) {
                                        var o = e.value;
                                        o.channel && o.channel === n && i.push(o)
                                    }
                                } catch (t) {
                                    r.e(t)
                                } finally {
                                    r.f()
                                }
                                return i
                            }
                        }, {
                            key: "_channelAction",
                            value: function(t) {
                                var e, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "all",
                                    i = this.instances,
                                    r = b(i);
                                try {
                                    for (r.s(); !(e = r.n()).done;) {
                                        var o = e.value;
                                        if ("all" === n || o.channel === n) switch (t) {
                                            case "stop":
                                                o.stop();
                                                break;
                                            case "pause":
                                            case "resume":
                                                o.paused = "pause" === t
                                        }
                                    }
                                } catch (t) {
                                    r.e(t)
                                } finally {
                                    r.f()
                                }
                            }
                        }, {
                            key: "_getSoundLoadObject",
                            value: function(t) {
                                for (var e in this._channelData)
                                    if (Object.hasOwnProperty.call(this._channelData, e)) {
                                        var n = this._channelData[e],
                                            i = n.list.find((function(e) {
                                                return e.id === t
                                            }));
                                        if (i) return {
                                            src: i.src,
                                            id: i.id,
                                            options: i.options || {},
                                            basePath: n.basePath,
                                            fullPath: "".concat(n.basePath).concat(i.src)
                                        }
                                    }
                                return null
                            }
                        }]), t
                    }();
                const C = new _;
                var R = n(1002);
                var P = "start",
                    S = "end",
                    O = function(t) {
                        (0, h.Z)(o, t);
                        var e, n, i = (e = o, n = function() {
                            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                            if (Reflect.construct.sham) return !1;
                            if ("function" == typeof Proxy) return !0;
                            try {
                                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                            } catch (t) {
                                return !1
                            }
                        }(), function() {
                            var t, i = (0, d.Z)(e);
                            if (n) {
                                var r = (0, d.Z)(this).constructor;
                                t = Reflect.construct(i, arguments, r)
                            } else t = i.apply(this, arguments);
                            return (0, f.Z)(this, t)
                        });

                        function o() {
                            var t;
                            return (0, c.Z)(this, o), (t = i.call(this))._onSoundFinished = t._onSoundFinished.bind((0, l.Z)(t)), t._updateSilence = t._updateSilence.bind((0, l.Z)(t)), t._listHelper = [], t.trackSound = !1, t.paused = !1, t.voList = null, t._listCounter = 0, t._currentVO = null, t._soundInstance = null, t._callback = null, t._cancelledCallback = null, t._trackedSounds = [], t._timer = 0, t._onces = [], t
                        }
                        return (0, u.Z)(o, [{
                            key: "playing",
                            get: function() {
                                return null !== this._currentVO || this._timer > 0
                            }
                        }, {
                            key: "currentId",
                            get: function() {
                                return this._currentVO && this._currentVO.id
                            }
                        }, {
                            key: "currentItem",
                            get: function() {
                                return this._currentVO
                            }
                        }, {
                            key: "enableSkipping",
                            value: function() {
                                var t = this;
                                window.addEventListener("keydown", (function(e) {
                                    32 === e.keyCode && t.playing && t._onSoundFinished()
                                }))
                            }
                        }, {
                            key: "pause",
                            value: function() {
                                !this.paused && this.playing && (this.paused = !0, this._soundInstance && this._soundInstance.pause())
                            }
                        }, {
                            key: "resume",
                            value: function() {
                                this.paused && (this.paused = !1, this._soundInstance && this._soundInstance.resume())
                            }
                        }, {
                            key: "playOnce",
                            value: function(t, e, n) {
                                return -1 === this._onces.indexOf(t) && (this._onces.push(t), this.play(t, e, n), !0)
                            }
                        }, {
                            key: "play",
                            value: function(t, e, n) {
                                this.playing && this.stop(), t ? (this._listCounter = -1, Array.isArray(t) ? this.voList = t : "string" == typeof t || "object" === (0, R.Z)(t) ? (this._listHelper.length = 0, this._listHelper[0] = t, this.voList = this._listHelper) : console.log("VOPlayer: Passed invalid type: " + (0, R.Z)(t)), this.voList = this.voList.map((function(t) {
                                    return "string" === (0, R.Z)(t) ? {
                                        id: t
                                    } : t
                                })), this._callback = e, this._cancelledCallback = !0 === n ? e : n, this._onSoundFinished()) : console.log("VOPlayer: No idOrList was given")
                            }
                        }, {
                            key: "_onSoundFinished",
                            value: function() {
                                var t = this;
                                if (this._listCounter >= 0 && this._dispatchEnd(), this._soundInstance && this._soundInstance.stop(), this._soundInstance = null, this._listCounter++, this._listCounter >= this.voList.length) {
                                    this._currentVO = null, this._cancelledCallback = null;
                                    var e = this._callback;
                                    this._callback = null, e && e()
                                } else switch (this._currentVO = this.voList[this._listCounter], (0, R.Z)(this._currentVO)) {
                                    case "object":
                                        this._playSound(this._currentVO.id);
                                        break;
                                    case "function":
                                        this._currentVO(), this._onSoundFinished();
                                        break;
                                    case "number":
                                        this._timer = this._currentVO, this._currentVO = null, r.ZP.delayedCall(this._timer, (function() {
                                            return t._onSoundFinished()
                                        }));
                                        break;
                                    default:
                                        this._onSoundFinished()
                                }
                                return null
                            }
                        }, {
                            key: "_updateSilence",
                            value: function(t) {
                                this._timer -= t, this._timer <= 0 && this._onSoundFinished()
                            }
                        }, {
                            key: "_playSound",
                            value: function(t) {
                                var e = this;
                                this.trackSound && -1 === this._trackedSounds.indexOf(t) && this._trackedSounds.push(t);
                                var n = C.play(t, {
                                    complete: function() {
                                        return e._onSoundFinished()
                                    }
                                });
                                n instanceof Promise ? n.then((function(n) {
                                    e.currentId === t ? (e._soundInstance = n, e._dispatchStart()) : n.stop()
                                })) : (this._soundInstance = n, this._dispatchStart(n))
                            }
                        }, {
                            key: "_dispatchStart",
                            value: function() {
                                var t = {};
                                t.list = this.voList, t.listIndex = this._listCounter, t.vo = this._currentVO && this._currentVO.id, t.options = this._currentVO && this._currentVO.options, this.emit(P, t)
                            }
                        }, {
                            key: "_dispatchEnd",
                            value: function() {
                                var t = {};
                                t.list = this.voList, t.listIndex = this._listCounter, t.vo = this._currentVO && this._currentVO.id, t.options = this._currentVO && this._currentVO.options, this.emit(S, t)
                            }
                        }, {
                            key: "stop",
                            value: function() {
                                this._dispatchEnd(), this.paused = !1, this._soundInstance && (this._soundInstance.stop(), this._soundInstance = null), this._currentVO = null, r.ZP.killTweensOf(this), this.voList = null, this._timer = 0, this._callback = null;
                                var t = this._cancelledCallback;
                                return this._cancelledCallback = null, t ? t() : null
                            }
                        }, {
                            key: "unloadTrackedSounds",
                            value: function() {
                                this._trackedSounds.forEach((function(t) {
                                    return C.removeSound(t)
                                })), this._trackedSounds.length = 0
                            }
                        }, {
                            key: "destroy",
                            value: function() {
                                this.stop(), this.voList = null, this._listHelper = null, this._currentVO = null, this._soundInstance = null, this._callback = null, this._cancelledCallback = null, this._trackedSounds = null
                            }
                        }]), o
                    }(s.P6Y.EventEmitter);
                const T = new O;
                var B = 1024,
                    I = 768;
                const A = JSON.parse('{"H6":{"O":7},"ah":[{"name":"rosette","default":true,"allowTransform":true},{"name":"swirl","default":true,"allowTransform":true},{"name":"crown","default":true,"allowTransform":false},{"name":"butterfly","default":false,"allowTransform":true},{"name":"carrot","default":false,"allowTransform":true},{"name":"flower","default":false,"allowTransform":true},{"name":"heart-topper","default":false,"allowTransform":true},{"name":"heart","default":false,"allowTransform":true}],"MP":[{"type":"basic","name":"butter","vo":"butter","solid":true,"rgb":[255,231,156]},{"type":"basic","name":"egg","vo":"eggs","solid":false,"rgb":[255,231,156]},{"type":"basic","name":"flour","vo":"flour","solid":false,"rgb":[252,244,226]},{"type":"basic","name":"milk","vo":"milk","solid":false,"rgb":[255,255,255]},{"type":"basic","name":"sugar","vo":"sugar","solid":false,"rgb":[255,255,255]},{"type":"extra","name":"banana","vo":"banana","solid":true,"rgb":[242,210,66],"panelOrder":1},{"type":"extra","name":"chocolate","vo":"chocolate","solid":true,"rgb":[110,82,64],"panelOrder":4},{"type":"extra","name":"heart-apple","vo":"apple","solid":true,"rgb":[191,36,46],"panelOrder":7},{"type":"extra","name":"honeycomb","vo":"honeycomb","solid":true,"rgb":[140,94,228],"panelOrder":2},{"type":"extra","name":"lemon","vo":"lemon","solid":true,"rgb":[254,224,91],"panelOrder":6},{"type":"extra","name":"marshmallow","vo":"marshmellow","solid":true,"rgb":[223,222,215],"panelOrder":8},{"type":"extra","name":"sparkleberry","vo":"sparkleberry","solid":true,"rgb":[105,180,244],"panelOrder":5},{"type":"extra","name":"strawberry","vo":"strawberry","solid":true,"rgb":[249,126,114],"panelOrder":3}],"MO":[{"name":"rainwater-melon","vo":"rain-1","voExtended":"rain","sprinkles":["raindrop"],"analyticsName":"RainwaterMelon"},{"name":"bubblesprout","vo":"bubble-1","voExtended":"bubble","sprinkles":["powder-bubble-sprout"],"analyticsName":"Bubblesprout"},{"name":"wish-sprinkles","vo":"wishing-1","voExtended":"wishing","sprinkles":["sprinkle-6","sprinkle-5","sprinkle-4","sprinkle-3","sprinkle-2","sprinkle-1"],"analyticsName":"WishingSprinkles"},{"name":"dodo-egg","vo":"bouncing-1","voExtended":"bouncing","sprinkles":["powder-orange-shrinking","powder-pinneapple"],"analyticsName":"DodoEggs"},{"name":"upside-down","vo":"upside-down-1","voExtended":"upside-down","sprinkles":["powder-pinneapple"],"analyticsName":"PineappleUpsideDown"},{"name":"flourishing-powder","vo":"flower-1","voExtended":"flower","sprinkles":["powder-flourishing"],"analyticsName":"FlourishingPowder"},{"name":"shrinking-powder","vo":"shrinking-1","voExtended":"shrinking","sprinkles":["powder-orange-shrinking"],"analyticsName":"ShrinkingOrangeBerries"}],"Rr":[{"name":"alice","analyticsName":"Alice"},{"name":"rabit","analyticsName":"Fergie"},{"name":"cat","analyticsName":"Chesire"},{"name":"rosa","analyticsName":"Rosa"},{"name":"hatter","analyticsName":"Hattie"}]}');
                var L = n(2619);

                function E(t, e) {
                    var n, i = e;
                    return window.location.href.indexOf(t) > -1 && (i = (n = {}, window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, (function(t, e, i) {
                        n[e] = i
                    })), n)[t]), i
                }
                var D = "dis-alice-bakery-user-1.0",
                    M = {
                        userDecorations: [],
                        playthroughs: 0,
                        timers: {}
                    },
                    j = 432e5,
                    Y = 12096e5,
                    N = {
                        INTRO: {
                            id: "intro",
                            expire: Y
                        },
                        SETUP: {
                            id: "setup",
                            expire: Y
                        },
                        BASICS: {
                            id: "basics",
                            expire: j
                        },
                        EXTRAS_INTRO: {
                            id: "extras",
                            expire: Y
                        },
                        TOOLS: {
                            id: "tools",
                            expire: j
                        },
                        PANTRY: {
                            id: "pantry",
                            expire: j
                        },
                        BLENDER: {
                            id: "blender",
                            expire: j
                        },
                        CUTTING: {
                            id: "cutting",
                            expire: j
                        }
                    },
                    W = new(function() {
                        function t() {
                            (0, c.Z)(this, t), this.data = Object.assign({}, M)
                        }
                        return (0, u.Z)(t, [{
                            key: "init",
                            value: function() {
                                E("fresh", !1) && window.localStorage.clear(), this.restore()
                            }
                        }, {
                            key: "restore",
                            value: function() {
                                var t;
                                try {
                                    t = JSON.parse(window.localStorage.getItem(D))
                                } catch (t) {
                                    console.warn("Local Storage Restore Failed")
                                }
                                t && (this.data = Object.assign(this.data, t)), this._validate()
                            }
                        }, {
                            key: "save",
                            value: function() {
                                try {
                                    window.localStorage.setItem(D, JSON.stringify(this.data))
                                } catch (t) {
                                    console.warn("Local Storage Save Failed")
                                }
                            }
                        }, {
                            key: "unlockDecoration",
                            value: function() {
                                var t = this,
                                    e = A.ah.find((function(e) {
                                        return !t.data.userDecorations.find((function(t) {
                                            return e.name === t
                                        }))
                                    }));
                                return e && (this.data.userDecorations.push(e.name), this.save()), e
                            }
                        }, {
                            key: "hasTimerExpired",
                            value: function(t) {
                                var e = t.id,
                                    n = this.data.timers[e];
                                return !(n && Date.now() - n < t.expire)
                            }
                        }, {
                            key: "recordTimer",
                            value: function(t) {
                                this.data.timers[t.id] = Date.now(), this.save()
                            }
                        }, {
                            key: "completeCake",
                            value: function() {
                                this.data.playthroughs++, this.save()
                            }
                        }, {
                            key: "_validate",
                            value: function() {
                                var t = this;
                                this.data.userDecorations || (this.data.userDecorations = []);
                                var e = A.ah;
                                this.data.userDecorations = this.data.userDecorations.filter((function(t) {
                                    return e.find((function(e) {
                                        return e.name === t
                                    }))
                                }));
                                for (var n = function(n) {
                                        var i = e[n];
                                        !0 !== i.default || t.data.userDecorations.find((function(t) {
                                            return t.name === i.name
                                        })) || t.data.userDecorations.push(i.name)
                                    }, i = 0; i < e.length; i++) n(i);
                                this.data.userDecorations = (0, L.Z)(this.data.userDecorations)
                            }
                        }]), t
                    }()),
                    F = {
                        base: ["color: #fff", "background-color: #444", "padding: 2px 4px", "border-radius: 2px"],
                        warning: ["color: #eee", "background-color: red"],
                        success: ["background-color: green"]
                    };
                const H = function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                        n = F.base.join(";") + ";";
                    n += e.join(";"), console.log("%c".concat(t), n)
                };
                var q = n(1752);
                const V = new(function() {
                        function t() {
                            (0, c.Z)(this, t), this.loops = {}, this.currentTrack = null, this._volume = 1
                        }
                        return (0, u.Z)(t, [{
                            key: "play",
                            value: function(t) {
                                t ? this.currentId !== t && (this.stop(), this.currentId = t, this.currentTrack = C.play(t, {
                                    loop: -1,
                                    volume: .6
                                })) : this.currentTrack && this.currentTrack.play({
                                    loop: -1,
                                    volume: .6
                                })
                            }
                        }, {
                            key: "pause",
                            value: function() {
                                this.currentTrack && this.currentTrack.stop()
                            }
                        }, {
                            key: "stop",
                            value: function() {
                                this.currentTrack && (this.currentTrack.stop(), this.currentId = null, this.currentTrack = null)
                            }
                        }]), t
                    }()),
                    J = JSON.parse('[{"tags":["transition"],"id":"transition-frosting","src":"assets/images/loader-frosting.png"},{"tags":["transition"],"id":"ss-loader","src":"assets/spritesheets/ss-loader.json"},{"tags":["*"],"id":"ss-particles","src":"assets/spritesheets/ss-particles.json"},{"tags":["title"],"id":"background-title","src":"assets/images/bg-title.jpg"},{"tags":["title"],"id":"btn-play","src":"assets/images/btn-play.png"},{"tags":["title"],"id":"btn-sound-off","src":"assets/images/btn-sound-off.png"},{"tags":["title"],"id":"btn-sound-on","src":"assets/images/btn-sound-on.png"},{"tags":["intro"],"id":"background-kitchen","src":"assets/images/bg-kitchen.jpg"},{"tags":["intro"],"id":"alice-pose-1","src":"assets/images/alice-pose-1.png"},{"tags":["intro","ingredients","blender","cutting","decorating","cake"],"id":"ss-ui","src":"assets/spritesheets/ss-ui.json"},{"tags":["ingredients","blender","cutting","decorating","cake"],"id":"ss-game","src":"assets/spritesheets/ss-game.json"},{"tags":["ingredients","blender","decorating","cake"],"id":"kitchen-table","src":"assets/images/kitchen-table.png"},{"tags":["ingredients","decorating","cake"],"id":"background-kitchen-blur","src":"assets/images/bg-kitchen-blur.jpg"},{"tags":["ingredients","blender","cutting"],"id":"ss-ui-extra-ingredients","src":"assets/spritesheets/ss-ui-extra-ingredients.json"},{"tags":["ingredients","blender","cutting"],"id":"ss-extra-ingredients","src":"assets/spritesheets/ss-extra-ingredients.json"},{"tags":["ingredients"],"id":"ss-measuringcup","src":"assets/spritesheets/ss-measuringcup.json"},{"tags":["ingredients"],"id":"ss-basic-ingredients","src":"assets/spritesheets/ss-basic-ingredients.json"},{"tags":["ingredients"],"id":"character-cheshire","src":"assets/images/cheshire.png"},{"tags":["intro","ingredients","decorating"],"id":"ss-cookie","src":"assets/spritesheets/ss-cookie.json"},{"tags":["blender"],"id":"background-blender","src":"assets/images/bg-blender.jpg"},{"tags":["blender"],"id":"ss-blender","src":"assets/spritesheets/ss-blender.json"},{"tags":["cutting"],"id":"background-cutting","src":"assets/images/bg-cutting.jpg"},{"tags":["cake"],"id":"decoration-glow","src":"assets/images/decoration-glow.png"},{"tags":["decorating","cake"],"id":"ss-ui-decorations","src":"assets/spritesheets/ss-ui-decorations.json"},{"tags":["decorating","cake"],"id":"ss-cake","src":"assets/spritesheets/ss-cake.json"},{"tags":["decorating","cake"],"id":"ss-magiceffects","src":"assets/spritesheets/ss-magiceffects.json"},{"tags":["decorating"],"id":"ss-ui-magic-ingredients","src":"assets/spritesheets/ss-ui-magic-ingredients.json"},{"tags":["decorating"],"id":"ss-decorations","src":"assets/spritesheets/ss-decorations.json"},{"tags":["cake"],"src":"assets/audio/music/bg-music-ingredient-reveal.mp3"},{"tags":["decorating","intro","title"],"src":"assets/audio/music/bg-music-decoration.mp3"},{"tags":["ingredients","blender","cutting"],"src":"assets/audio/music/bg-music-bowl.mp3"}]');
                var X = function() {
                        function t(e) {
                            (0, c.Z)(this, t), this.loader = e
                        }
                        return (0, u.Z)(t, null, [{
                            key: "loadTags",
                            value: function(t) {
                                var e = function(t) {
                                        (t = "string" == typeof t ? [t] : t).push("*");
                                        var e = [];
                                        return t.forEach((function(t) {
                                            e = e.concat(J.filter((function(e) {
                                                var n;
                                                return e.id || (e.id = (n = e.src).slice(n.lastIndexOf("/") + 1, n.lastIndexOf(".")) || e.src), !!(e.tags.indexOf(t) > -1) && !g.eq.exists(e.id)
                                            })))
                                        })), e
                                    }(t),
                                    n = s.aNw.shared,
                                    i = e.filter((function(t) {
                                        return !n.resources[t.id]
                                    }));
                                return 0 === i.length ? Promise.resolve() : (i.forEach((function(t) {
                                    return n.add(t.id, t.src)
                                })), n.onProgress.detachAll(), n.onComplete.detachAll(), n.load(), new Promise((function(t, e) {
                                    n.load(t)
                                })))
                            }
                        }]), t
                    }(),
                    G = "title",
                    U = "intro",
                    Q = "ingredients",
                    $ = "blender",
                    z = "cutting",
                    K = "baking",
                    tt = "decorating",
                    et = "cake",
                    nt = n(5861),
                    it = n(7757),
                    rt = n.n(it),
                    ot = n(5317),
                    at = n(1845);
                const st = JSON.parse('{"alpha":{"start":1,"end":0.3},"scale":{"start":0.8,"end":1,"minimumScaleMultiplier":1},"color":{"start":"#ffffff","end":"#ffffff"},"speed":{"start":10,"end":10,"minimumSpeedMultiplier":1},"acceleration":{"x":0,"y":0},"maxSpeed":0,"startRotation":{"min":260,"max":280},"noRotation":true,"rotationSpeed":{"min":-5,"max":5},"lifetime":{"min":0.7,"max":0.8},"blendMode":"normal","frequency":0.1,"emitterLifetime":-1,"maxParticles":50,"pos":{"x":0,"y":0},"addAtBack":false,"spawnType":"rect","spawnRect":{"x":0,"y":0,"w":200,"h":200}}');
                var ct = ["sparkle-5", "sparkle-4", "sparkle-3", "sparkle-2", "sparkle-1"],
                    ut = function(t) {
                        (0, h.Z)(r, t);
                        var e, n, i = (e = r, n = function() {
                            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                            if (Reflect.construct.sham) return !1;
                            if ("function" == typeof Proxy) return !0;
                            try {
                                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                            } catch (t) {
                                return !1
                            }
                        }(), function() {
                            var t, i = (0, d.Z)(e);
                            if (n) {
                                var r = (0, d.Z)(this).constructor;
                                t = Reflect.construct(i, arguments, r)
                            } else t = i.apply(this, arguments);
                            return (0, f.Z)(this, t)
                        });

                        function r(t, e) {
                            var n, o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ct;
                            (0, c.Z)(this, r);
                            var a = Object.assign({}, st);
                            return e && Object.assign(a, e), (n = i.call(this, t, (0, at.oC)(a, o))).autoUpdate = !0, n.emit = !1, n
                        }
                        return (0, u.Z)(r, [{
                            key: "setRect",
                            value: function(t) {
                                var e = this.getBehavior("spawnShape");
                                e.shape.x = t.x, e.shape.y = t.y, e.shape.w = t.width, e.shape.h = t.height
                            }
                        }, {
                            key: "setRectFrom",
                            value: function(t) {
                                this.setRect(t.getLocalBounds())
                            }
                        }, {
                            key: "emitForSeconds",
                            value: function(t) {
                                this.emitterLifetime = t, this.playOnce()
                            }
                        }, {
                            key: "emitUtilCancelled",
                            value: function() {
                                this.emitterLifetime = -1, this.emit = !0
                            }
                        }, {
                            key: "stop",
                            value: function() {
                                this.emit = !1
                            }
                        }]), r
                    }(at.Q5);
                var lt = function(t) {
                    (0, h.Z)(p, t);
                    var e, n, i, o, a = (i = p, o = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                        } catch (t) {
                            return !1
                        }
                    }(), function() {
                        var t, e = (0, d.Z)(i);
                        if (o) {
                            var n = (0, d.Z)(this).constructor;
                            t = Reflect.construct(e, arguments, n)
                        } else t = e.apply(this, arguments);
                        return (0, f.Z)(this, t)
                    });

                    function p(t) {
                        var e, n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                        return (0, c.Z)(this, p), (e = a.call(this)).baseSprite = new s.jyi(t), e.baseSprite.anchor.set(.5), e.addChild(e.baseSprite), e.once = n, e.useScreenAnchor = !1, e.screenAnchor = new s.E9j, e.screenAnchorOffset = new s.E9j, e.clickSound = "click-generic", e.voLines = [], e._highlightTimer = 0, e._highlighting = !1, e._forcedHighlight = !1, e._setListeners(), e.emitter = new ut((0, l.Z)(e)), e.emitter.setRect(e.getLocalBounds()), T.on(P, e._onVOStart, (0, l.Z)(e)), T.on(S, e._onVOEnd, (0, l.Z)(e)), e
                    }
                    return (0, u.Z)(p, [{
                        key: "enabled",
                        get: function() {
                            return this.buttonMode && this.interactive
                        },
                        set: function(t) {
                            this.buttonMode = this.interactive = !!t
                        }
                    }, {
                        key: "show",
                        value: (n = (0, nt.Z)(rt().mark((function t() {
                            var e, n = arguments;
                            return rt().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (e = !(n.length > 0 && void 0 !== n[0]) || n[0], !this.destroyed) {
                                            t.next = 3;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 3:
                                        return t.next = 5, r.ZP.to(this, {
                                            overwrite: !0,
                                            pixi: {
                                                scale: 1
                                            },
                                            visible: !0,
                                            duration: .5,
                                            ease: ot.eJ.easeOut
                                        });
                                    case 5:
                                        this.enabled = e;
                                    case 6:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this)
                        }))), function() {
                            return n.apply(this, arguments)
                        })
                    }, {
                        key: "hide",
                        value: (e = (0, nt.Z)(rt().mark((function t() {
                            return rt().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (!this.destroyed) {
                                            t.next = 2;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 2:
                                        return this.stopHighlight(), this.enabled = !1, t.next = 6, r.ZP.to(this, {
                                            overwrite: !0,
                                            pixi: {
                                                scale: 0
                                            },
                                            visible: !1,
                                            duration: .4,
                                            ease: ot.eJ.easeIn
                                        });
                                    case 6:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this)
                        }))), function() {
                            return e.apply(this, arguments)
                        })
                    }, {
                        key: "setHidden",
                        value: function() {
                            this.visible = !1, this.scale.set(0)
                        }
                    }, {
                        key: "startHighlight",
                        value: function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                            this.destroyed || (this._highlightTimer = t, this._highlighting = !0, this.emitter.emit = !0, this._startHighlightTween())
                        }
                    }, {
                        key: "stopHighlight",
                        value: function() {
                            this.destroyed || (this._highlightTimer = 0, this._highlighting = !1, this.emitter.emit = !1, this._stopHighlightTween())
                        }
                    }, {
                        key: "tick",
                        value: function(t, e) {
                            this.destroyed || (this.useScreenAnchor && (this.x = e.width / 2 * this.screenAnchor.x + this.screenAnchorOffset.x, this.y = e.height / 2 * this.screenAnchor.y + this.screenAnchorOffset.y), this._highlightTimer && (this._highlightTimer -= t, this._highlightTimer <= 0 && this.stopHighlight()))
                        }
                    }, {
                        key: "destroy",
                        value: function(t) {
                            r.ZP.killTweensOf(this), r.ZP.killTweensOf(this.baseSprite), (0, q.Z)((0, d.Z)(p.prototype), "destroy", this).call(this, t), T.off(P, this._onVOStart, this), T.off(S, this._onVOEnd, this)
                        }
                    }, {
                        key: "_setListeners",
                        value: function() {
                            this.on("pointerdown", this._onInteraction, this).on("pointerup", this._onInteraction, this).on("pointerupoutside", this._onInteraction, this).on("pointerover", this._onInteraction, this).on("pointerout", this._onInteraction, this).on("pointertap", this._onInteraction, this)
                        }
                    }, {
                        key: "_onInteraction",
                        value: function(t) {
                            switch (t.type) {
                                case "pointerdown":
                                    r.ZP.killTweensOf(this), this.scale.set(.9);
                                    break;
                                case "pointerup":
                                case "pointerupoutside":
                                    r.ZP.to(this, {
                                        overwrite: !0,
                                        pixi: {
                                            scale: 1
                                        },
                                        duration: .2,
                                        ease: ot.eJ.easeOut
                                    });
                                    break;
                                case "pointerover":
                                case "pointerout":
                                    break;
                                case "pointertap":
                                    C.play(this.clickSound), this.once && (this.enabled = !1)
                            }
                        }
                    }, {
                        key: "_startHighlightTween",
                        value: function() {
                            this.destroyed || r.ZP.to(this.baseSprite, {
                                pixi: {
                                    scale: .9
                                },
                                yoyo: !0,
                                overwrite: !0,
                                repeat: -1,
                                ease: ot.lD.easeInOut
                            })
                        }
                    }, {
                        key: "_stopHighlightTween",
                        value: function() {
                            this.destroyed || r.ZP.to(this.baseSprite, {
                                overwrite: !0,
                                pixi: {
                                    scale: 1
                                },
                                duration: .2,
                                ease: ot.lD.easeInOut
                            })
                        }
                    }, {
                        key: "_onVOStart",
                        value: function(t) {
                            !1 === this._highlighting && this.voLines.indexOf(t.vo) >= 0 && this.startHighlight(4)
                        }
                    }, {
                        key: "_onVOEnd",
                        value: function(t) {}
                    }]), p
                }(s.W20);
                var ht = function(t) {
                    (0, h.Z)(r, t);
                    var e, n, i = (e = r, n = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                        } catch (t) {
                            return !1
                        }
                    }(), function() {
                        var t, i = (0, d.Z)(e);
                        if (n) {
                            var r = (0, d.Z)(this).constructor;
                            t = Reflect.construct(i, arguments, r)
                        } else t = i.apply(this, arguments);
                        return (0, f.Z)(this, t)
                    });

                    function r() {
                        var t;
                        return (0, c.Z)(this, r), (t = i.call(this, s.P6Y.TextureCache["button-home"], !0)).useScreenAnchor = !0, t.screenAnchor.set(-1, -1), t.screenAnchorOffset.set(70, 70), t
                    }
                    return (0, u.Z)(r, [{
                        key: "_onInteraction",
                        value: function(t) {
                            (0, q.Z)((0, d.Z)(r.prototype), "_onInteraction", this).call(this, t), "pointertap" === t.type && v.i$.go(G)
                        }
                    }]), r
                }(lt);
                var ft = function(t) {
                    (0, h.Z)(r, t);
                    var e, n, i = (e = r, n = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                        } catch (t) {
                            return !1
                        }
                    }(), function() {
                        var t, i = (0, d.Z)(e);
                        if (n) {
                            var r = (0, d.Z)(this).constructor;
                            t = Reflect.construct(i, arguments, r)
                        } else t = i.apply(this, arguments);
                        return (0, f.Z)(this, t)
                    });

                    function r() {
                        var t, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 12;
                        return (0, c.Z)(this, r), (t = i.call(this)).running = !1, t.elapsed = 0, t.triggerTime = e, t
                    }
                    return (0, u.Z)(r, [{
                        key: "reset",
                        value: function() {
                            this.elapsed = 0
                        }
                    }, {
                        key: "start",
                        value: function() {
                            this.reset(), this.running = !0
                        }
                    }, {
                        key: "stop",
                        value: function() {
                            this.reset(), this.running = !1
                        }
                    }, {
                        key: "tick",
                        value: function(t) {
                            this.running && (this.elapsed += t, this.elapsed > this.triggerTime && (this.reset(), this.emit("idle")))
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            this.removeAllListeners(), this.running = !1, this.reset()
                        }
                    }]), r
                }(s.P6Y.EventEmitter);
                var dt, pt = function(t) {
                    (0, h.Z)(r, t);
                    var e, n, i = (e = r, n = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                        } catch (t) {
                            return !1
                        }
                    }(), function() {
                        var t, i = (0, d.Z)(e);
                        if (n) {
                            var r = (0, d.Z)(this).constructor;
                            t = Reflect.construct(i, arguments, r)
                        } else t = i.apply(this, arguments);
                        return (0, f.Z)(this, t)
                    });

                    function r() {
                        var t;
                        return (0, c.Z)(this, r), (t = i.call(this)).app = null, t.idler = new ft, t
                    }
                    return (0, u.Z)(r, [{
                        key: "load",
                        value: function() {
                            return X.loadTags(this.name)
                        }
                    }, {
                        key: "init",
                        value: function() {
                            this.view = new s.W20, this.view.tickChildren = !0, this.buildScene(), this.homeButton = new ht, this.name !== G && this.name !== U && this.view.addChild(this.homeButton)
                        }
                    }, {
                        key: "buildScene",
                        value: function() {}
                    }, {
                        key: "start",
                        value: function() {
                            this.homeButton.enabled = !0, this.idler.on("idle", this._onIdle, this), this.idler.start()
                        }
                    }, {
                        key: "end",
                        value: function() {
                            this.homeButton.enabled = !1, this.idler.destroy()
                        }
                    }, {
                        key: "update",
                        value: function(t) {
                            !1 === T.playing && this.idler.tick(t)
                        }
                    }, {
                        key: "block",
                        value: function() {
                            this.view.interactiveChildren = !1
                        }
                    }, {
                        key: "unblock",
                        value: function() {
                            this.view.interactiveChildren = !0
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            this.view && (this.view.destroy({
                                children: !0
                            }), this.view = null)
                        }
                    }, {
                        key: "_onIdle",
                        value: function() {}
                    }]), r
                }(v.xs);
                var vt = function(t) {
                    (0, h.Z)(o, t);
                    var e, n, i = (e = o, n = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                        } catch (t) {
                            return !1
                        }
                    }(), function() {
                        var t, i = (0, d.Z)(e);
                        if (n) {
                            var r = (0, d.Z)(this).constructor;
                            t = Reflect.construct(i, arguments, r)
                        } else t = i.apply(this, arguments);
                        return (0, f.Z)(this, t)
                    });

                    function o() {
                        return (0, c.Z)(this, o), i.call(this)
                    }
                    return (0, u.Z)(o, [{
                        key: "load",
                        value: function() {
                            return dt || o.preloadVideo(), Promise.all([(0, q.Z)((0, d.Z)(o.prototype), "load", this).call(this), dt.load()])
                        }
                    }, {
                        key: "buildScene",
                        value: function() {
                            this.videoSprite = new s.jyi(s.xEZ.from(dt)), this.videoSprite.anchor.set(.5), this.videoSprite.scale.set(768 / dt.height), this.view.addChild(this.videoSprite)
                        }
                    }, {
                        key: "onTransitionOut",
                        value: function() {
                            V.stop(), dt.source.play()
                        }
                    }, {
                        key: "start",
                        value: function() {
                            var t = this;
                            dt.source.play(), r.ZP.delayedCall(4.5, (function() {
                                return t.onVideoComplete()
                            }))
                        }
                    }, {
                        key: "onVideoComplete",
                        value: function() {
                            v.i$.go(tt, {
                                data: {
                                    recipeData: this.sceneManager.changeData.data.recipeData
                                }
                            })
                        }
                    }], [{
                        key: "preloadVideo",
                        value: function() {
                            dt || (dt = new s.eHE("assets/video/baking.mp4", {
                                autoPlay: !1
                            }))
                        }
                    }]), o
                }(pt);
                var yt = {},
                    gt = new s.E9j,
                    mt = new s.E9j,
                    kt = function(t) {
                        (0, h.Z)(o, t);
                        var e, n, i = (e = o, n = function() {
                            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                            if (Reflect.construct.sham) return !1;
                            if ("function" == typeof Proxy) return !0;
                            try {
                                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                            } catch (t) {
                                return !1
                            }
                        }(), function() {
                            var t, i = (0, d.Z)(e);
                            if (n) {
                                var r = (0, d.Z)(this).constructor;
                                t = Reflect.construct(i, arguments, r)
                            } else t = i.apply(this, arguments);
                            return (0, f.Z)(this, t)
                        });

                        function o(t) {
                            var e, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function() {},
                                r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function() {},
                                a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
                            return (0, c.Z)(this, o), (e = i.call(this)).name = t, e.onDragStart = n, e.onDragEnd = r, e.maxConcurrentDrags = a, e.dropZones = [], e.overDropZones = [], e.dropZonesCurrentlyOver = [], e.blockDrag = !1, e._dragger = null, yt[t] = (0, l.Z)(e), e
                        }
                        return (0, u.Z)(o, [{
                            key: "canStartNewDrag",
                            get: function() {
                                return !this.blockDrag && this.children.length < this.maxConcurrentDrags
                            }
                        }, {
                            key: "startDrag",
                            value: function(t, e) {
                                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new s.E9j;
                                this._dragger = t, this._dragger.dragging = !0, this._dragOffset = n, this._startParent = t.parent, this._startPosition = t.position.clone(), this._setPositionFromGlobal(e), this.addChild(this._dragger), this._dragger.onDragStart(), this._dragger.on("pointermove", this._onDragMove, this).on("pointerup", this._onDragEnd, this).on("pointerupoutside", this._onDragEnd, this), this.onDragStart(this._dragger)
                            }
                        }, {
                            key: "_onDragMove",
                            value: function(t) {
                                this._setPositionFromGlobal(t.data.global)
                            }
                        }, {
                            key: "_onDragEnd",
                            value: function() {
                                this._dragger.dragging = !1, this._dragger.off("pointermove").off("pointerup").off("pointerupoutside"), this._dragger.onDragEnd(), this.testDrop(this._dragger), this._dragger.parent === this && (this._dragger.returnOnInvalidDrop ? this._returnDragObject() : this._dragger.destroy()), this._startParent = this._startPosition = null, this.onDragEnd(this._dragger)
                            }
                        }, {
                            key: "_setPositionFromGlobal",
                            value: function(t) {
                                var e = this.toLocal(t, null, mt);
                                e.subtract(this._dragOffset, mt), this._dragger.position.copyFrom(e)
                            }
                        }, {
                            key: "_returnDragObject",
                            value: function() {
                                var t = this,
                                    e = this._startParent,
                                    n = this._startPosition;
                                if (e) {
                                    var i = this.toLocal(n, e),
                                        o = r.ZP.to(this._dragger, {
                                            pixi: {
                                                x: i.x,
                                                y: i.y
                                            },
                                            duration: 1,
                                            onComplete: function() {
                                                return t.addToStartParent(e, n)
                                            }
                                        });
                                    this._dragger.onReturnStart(o)
                                } else this._dragger.destroy()
                            }
                        }, {
                            key: "addToStartParent",
                            value: function(t, e) {
                                this._dragger.position.copyFrom(e), t.addChild(this._dragger), this._dragger.onReturnEnd()
                            }
                        }, {
                            key: "destroy",
                            value: function(t) {
                                (0, q.Z)((0, d.Z)(o.prototype), "destroy", this).call(this, t)
                            }
                        }, {
                            key: "addDropZone",
                            value: function(t) {
                                this.dropZones.push(t), t.onOver && this.overDropZones.push(t)
                            }
                        }, {
                            key: "testDrop",
                            value: function(t) {
                                for (var e = 0; e < this.dropZones.length; e++) {
                                    var n = this.dropZones[e];
                                    if (this.testDropZone(n, t)) return n.onDrop(t), n.id
                                }
                                return !1
                            }
                        }, {
                            key: "testDropZone",
                            value: function(t, e) {
                                return ("*" === e.dropZone || e.dropZone === t.id) && (t.target ? this.testDropTarget(t, e) : this.testDropRect(t, e))
                            }
                        }, {
                            key: "testDropRect",
                            value: function(t, e) {
                                return (t.local || this).toLocal(e.pivot, e, gt), t.rect.contains(gt.x, gt.y)
                            }
                        }, {
                            key: "testDropTarget",
                            value: function(t, e) {
                                return t.target.toLocal(e.pivot, e, gt), t.target.getLocalBounds().contains(gt.x, gt.y)
                            }
                        }, {
                            key: "tick",
                            value: function(t) {
                                var e = this.children[0];
                                if (e && e.dragging && this.overDropZones.length)
                                    for (var n = 0; n < this.overDropZones.length; n++) {
                                        var i = this.overDropZones[n],
                                            r = this.dropZonesCurrentlyOver.indexOf(i),
                                            o = r >= 0;
                                        this.testDropZone(i, e) ? !1 === o && (this.dropZonesCurrentlyOver.push(i), i.onOver(e)) : o && (this.dropZonesCurrentlyOver.splice(r, 1), i.onOut(e))
                                    }
                            }
                        }], [{
                            key: "get",
                            value: function(t) {
                                return yt[t]
                            }
                        }]), o
                    }(s.W20);
                var wt = function(t) {
                        (0, h.Z)(o, t);
                        var e, n, i = (e = o, n = function() {
                            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                            if (Reflect.construct.sham) return !1;
                            if ("function" == typeof Proxy) return !0;
                            try {
                                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                            } catch (t) {
                                return !1
                            }
                        }(), function() {
                            var t, i = (0, d.Z)(e);
                            if (n) {
                                var r = (0, d.Z)(this).constructor;
                                t = Reflect.construct(i, arguments, r)
                            } else t = i.apply(this, arguments);
                            return (0, f.Z)(this, t)
                        });

                        function o(t) {
                            var e;
                            return (0, c.Z)(this, o), (e = i.call(this, t)).centerDrag = !0, e.dragging = !1, e.dragContainerName = "default", e.dropZone = "*", e.dragOffset = new s.E9j, e.dragStartSfx = "object-grab", e.dragEndSfx = "object-place", e.returnOnInvalidDrop = !1, e
                        }
                        return (0, u.Z)(o, [{
                            key: "dragContainer",
                            get: function() {
                                return kt.get(this.dragContainerName)
                            }
                        }, {
                            key: "enabled",
                            get: function() {
                                return this.interactive && this.buttonMode
                            },
                            set: function(t) {
                                this.interactive = this.buttonMode = !!t, this.interactive ? this.addDragStartListener() : this.removeDragListeners()
                            }
                        }, {
                            key: "getDragObject",
                            value: function() {
                                return this
                            }
                        }, {
                            key: "getDragOffset",
                            value: function(t) {
                                return this.centerDrag ? new s.E9j : this.toLocal(t)
                            }
                        }, {
                            key: "addDragStartListener",
                            value: function() {
                                this.removeDragListeners(), this.on("pointerdown", this.onPointerDown, this)
                            }
                        }, {
                            key: "removeDragListeners",
                            value: function() {
                                this.off("pointerdown")
                            }
                        }, {
                            key: "onPointerDown",
                            value: function(t) {
                                var e = this.dragContainer;
                                e && e.canStartNewDrag && (this.dragging = !0, e.startDrag(this.getDragObject(), t.data.global, this.getDragOffset(t.data.global)))
                            }
                        }, {
                            key: "onDragStart",
                            value: function() {
                                C.play(this.dragStartSfx), r.ZP.to(this, {
                                    pixi: {
                                        scale: 1.1
                                    },
                                    duration: .2,
                                    ease: ot.Ll.easeInOut
                                })
                            }
                        }, {
                            key: "onDragEnd",
                            value: function() {
                                C.play(this.dragEndSfx), r.ZP.to(this, {
                                    pixi: {
                                        scale: 1
                                    },
                                    duration: .2,
                                    ease: ot.Ll.easeInOut
                                })
                            }
                        }, {
                            key: "onReturnStart",
                            value: function(t) {}
                        }, {
                            key: "onReturnEnd",
                            value: function() {}
                        }, {
                            key: "destroy",
                            value: function(t) {
                                r.ZP.killTweensOf(this), (0, q.Z)((0, d.Z)(o.prototype), "destroy", this).call(this, t)
                            }
                        }]), o
                    }(s.jyi),
                    bt = "flour",
                    xt = "sugar",
                    Zt = "butter",
                    _t = "milk",
                    Ct = "egg",
                    Rt = function() {
                        function t(e) {
                            if ((0, c.Z)(this, t), this.config = A.MP.find((function(t) {
                                    return t.name === e
                                })), !this.config) throw new Error("No Ingredient with name: ".concat(e));
                            this.name = e, this._mixed = !1, this._blended = !1, this._cut = !1
                        }
                        return (0, u.Z)(t, [{
                            key: "type",
                            get: function() {
                                return this.config.type
                            }
                        }, {
                            key: "solid",
                            get: function() {
                                return this.config.solid && !this._mixed
                            }
                        }, {
                            key: "rgbColor",
                            get: function() {
                                return this.config.rgb
                            }
                        }, {
                            key: "voId",
                            get: function() {
                                return "vo-".concat(this.config.vo)
                            }
                        }, {
                            key: "wasBlended",
                            get: function() {
                                return this._blended
                            }
                        }, {
                            key: "wasCut",
                            get: function() {
                                return this._cut
                            }
                        }, {
                            key: "mix",
                            value: function() {
                                this._mixed = !0
                            }
                        }, {
                            key: "blend",
                            value: function() {
                                this._blended = !0, this._mixed = !0
                            }
                        }, {
                            key: "cut",
                            value: function() {
                                this._cut = !0
                            }
                        }]), t
                    }();
                var Pt = function(t) {
                    (0, h.Z)(a, t);
                    var e, n, i, o = (n = a, i = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                        } catch (t) {
                            return !1
                        }
                    }(), function() {
                        var t, e = (0, d.Z)(n);
                        if (i) {
                            var r = (0, d.Z)(this).constructor;
                            t = Reflect.construct(e, arguments, r)
                        } else t = e.apply(this, arguments);
                        return (0, f.Z)(this, t)
                    });

                    function a(t, e) {
                        var n, i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        return (0, c.Z)(this, a), (n = o.call(this, t)).anchor.set(.5), n.bowlAddOffset = new s.E9j, n.centerDrag = !1, n._data = i || new Rt(e), n
                    }
                    return (0, u.Z)(a, [{
                        key: "data",
                        get: function() {
                            return this._data
                        },
                        set: function(t) {
                            this._data = t
                        }
                    }, {
                        key: "playAddAnimation",
                        value: (e = (0, nt.Z)(rt().mark((function t(e, n) {
                            return rt().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return e(1), n(), t.next = 4, r.ZP.to(this, {
                                            duration: 1
                                        });
                                    case 4:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this)
                        }))), function(t, n) {
                            return e.apply(this, arguments)
                        })
                    }, {
                        key: "onDragStart",
                        value: function() {
                            (0, q.Z)((0, d.Z)(a.prototype), "onDragStart", this).call(this), !1 === T.playing && T.playOnce(this.data.voId)
                        }
                    }]), a
                }(wt);
                var St = function(t) {
                    (0, h.Z)(r, t);
                    var e, n, i = (e = r, n = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                        } catch (t) {
                            return !1
                        }
                    }(), function() {
                        var t, i = (0, d.Z)(e);
                        if (n) {
                            var r = (0, d.Z)(this).constructor;
                            t = Reflect.construct(i, arguments, r)
                        } else t = i.apply(this, arguments);
                        return (0, f.Z)(this, t)
                    });

                    function r(t) {
                        return (0, c.Z)(this, r), i.call(this, s.P6Y.TextureCache["extra-ingredient-".concat(t)], t)
                    }
                    return (0, u.Z)(r)
                }(Pt);
                var Ot = function(t) {
                        (0, h.Z)(r, t);
                        var e, n, i = (e = r, n = function() {
                            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                            if (Reflect.construct.sham) return !1;
                            if ("function" == typeof Proxy) return !0;
                            try {
                                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                            } catch (t) {
                                return !1
                            }
                        }(), function() {
                            var t, i = (0, d.Z)(e);
                            if (n) {
                                var r = (0, d.Z)(this).constructor;
                                t = Reflect.construct(i, arguments, r)
                            } else t = i.apply(this, arguments);
                            return (0, f.Z)(this, t)
                        });

                        function r(t) {
                            var e;
                            return (0, c.Z)(this, r), (e = i.call(this, s.P6Y.TextureCache["ui-extra-".concat(t.name)])).config = t, e.anchor.set(.5), e
                        }
                        return (0, u.Z)(r, [{
                            key: "getDragObject",
                            value: function() {
                                var t = new St(this.config.name);
                                return t.enabled = !0, t
                            }
                        }]), r
                    }(wt),
                    Tt = n(4594);
                var Bt = 120,
                    It = function(t) {
                        (0, h.Z)(l, t);
                        var e, n, i, o, a = (i = l, o = function() {
                            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                            if (Reflect.construct.sham) return !1;
                            if ("function" == typeof Proxy) return !0;
                            try {
                                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                            } catch (t) {
                                return !1
                            }
                        }(), function() {
                            var t, e = (0, d.Z)(i);
                            if (o) {
                                var n = (0, d.Z)(this).constructor;
                                t = Reflect.construct(e, arguments, n)
                            } else t = e.apply(this, arguments);
                            return (0, f.Z)(this, t)
                        });

                        function l(t) {
                            var e, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                            return (0, c.Z)(this, l), (e = a.call(this, t, !1)).visible = !1, e.baseSprite.anchor.set(0), e.visibleOffset = 1 === n ? Bt : e.baseSprite.width - Bt, e.baseSprite.pivot.set(e.visibleOffset), e.screenAnchor.x = n, e.highlightSprite = new s.jyi(t), e.highlightSprite.alpha = 0, e.highlightSprite.visible = !1, e.highlightSprite.filters = [new Tt.V({
                                distance: 15,
                                outerStrength: 2,
                                knockout: !0
                            })], e.addChild(e.highlightSprite), e.highlightSprite.pivot.set(e.visibleOffset), e.emitter.setRect(e.getLocalBounds()), e.hidePivot = e.pivot.x = -120 * e.screenAnchor.x, e
                        }
                        return (0, u.Z)(l, [{
                            key: "isOver",
                            set: function(t) {
                                r.ZP.to(this, {
                                    pixi: {
                                        pivotX: t ? 20 : 0
                                    },
                                    duration: .5,
                                    ease: ot.Ll.easeInOut
                                })
                            }
                        }, {
                            key: "show",
                            value: (n = (0, nt.Z)(rt().mark((function t() {
                                var e, n = arguments;
                                return rt().wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return e = !(n.length > 0 && void 0 !== n[0]) || n[0], C.play("tabs-slide-out"), t.next = 4, r.ZP.to(this, {
                                                overwrite: !0,
                                                visible: !0,
                                                pixi: {
                                                    pivotX: 0
                                                },
                                                duration: .6,
                                                ease: ot.Ll.easeOut
                                            });
                                        case 4:
                                            this.enabled = e;
                                        case 5:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this)
                            }))), function() {
                                return n.apply(this, arguments)
                            })
                        }, {
                            key: "hide",
                            value: (e = (0, nt.Z)(rt().mark((function t() {
                                return rt().wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return this.enabled = !1, this.stopHighlight(), t.next = 4, r.ZP.to(this, {
                                                overwrite: !0,
                                                visible: !1,
                                                pixi: {
                                                    pivotX: this.hidePivot
                                                },
                                                duration: .4,
                                                ease: ot.Ll.easeIn
                                            });
                                        case 4:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this)
                            }))), function() {
                                return e.apply(this, arguments)
                            })
                        }, {
                            key: "destroy",
                            value: function(t) {
                                r.ZP.killTweensOf(this), r.ZP.killTweensOf(this.highlightSprite), this.emitter.destroy(), (0, q.Z)((0, d.Z)(l.prototype), "destroy", this).call(this, t)
                            }
                        }, {
                            key: "_startHighlightTween",
                            value: function() {
                                var t = "+=".concat(10 * this.screenAnchor.x);
                                r.ZP.to(this.highlightSprite, {
                                    pixi: {
                                        autoAlpha: 1
                                    },
                                    duration: 1,
                                    ease: ot.lD.easeInOut,
                                    yoyo: !0,
                                    repeat: -1
                                }), r.ZP.to(this.highlightSprite, {
                                    pixi: {
                                        pivotX: t
                                    },
                                    duration: .5,
                                    ease: ot.Ll.easeIn,
                                    yoyo: !0,
                                    repeat: -1
                                }), r.ZP.to(this.baseSprite, {
                                    pixi: {
                                        pivotX: t
                                    },
                                    duration: .5,
                                    ease: ot.Ll.easeIn,
                                    yoyo: !0,
                                    repeat: -1
                                })
                            }
                        }, {
                            key: "_stopHighlightTween",
                            value: function() {
                                r.ZP.to(this.baseSprite, {
                                    overwrite: !0,
                                    pixi: {
                                        pivotX: this.visibleOffset
                                    },
                                    duration: .25,
                                    ease: ot.Ll.easeIn
                                }), r.ZP.to(this.highlightSprite, {
                                    overwrite: !0,
                                    pixi: {
                                        pivotX: this.visibleOffset,
                                        autoAlpha: 0
                                    },
                                    duration: .25,
                                    ease: ot.lD.easeInOut
                                })
                            }
                        }, {
                            key: "_onInteraction",
                            value: function(t) {
                                "pointertap" === t.type && (0, q.Z)((0, d.Z)(l.prototype), "_onInteraction", this).call(this, t)
                            }
                        }]), l
                    }(lt);
                var At = {
                        pivotX: 454
                    },
                    Lt = {
                        pivotX: 0
                    },
                    Et = [261, 425, 591],
                    Dt = function(t) {
                        (0, h.Z)(p, t);
                        var e, n, i, o, a = (i = p, o = function() {
                            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                            if (Reflect.construct.sham) return !1;
                            if ("function" == typeof Proxy) return !0;
                            try {
                                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                            } catch (t) {
                                return !1
                            }
                        }(), function() {
                            var t, e = (0, d.Z)(i);
                            if (o) {
                                var n = (0, d.Z)(this).constructor;
                                t = Reflect.construct(e, arguments, n)
                            } else t = e.apply(this, arguments);
                            return (0, f.Z)(this, t)
                        });

                        function p() {
                            var t;
                            (0, c.Z)(this, p), (t = a.call(this)).visualOffset = 0, t.tickChildren = !0, t.opened = !1, t._highlighted = !1;
                            var e = s.P6Y.TextureCache,
                                n = new s.jyi(e["pantry-shelves"]);
                            return t.closeButton = new It(e["pantry-tab-back"], -1), t.closeButton.position.set(424, 350), t.openButton = new It(e["pantry-tab"], -1), t.openButton.y = 354, t.openButton.voLines = ["vo-inact-bowl-7", "vo-inact-bowl-1", "vo-inact-bowl-4", "vo-inact-bowl-5", "vo-inact-bowl-6", "vo-inact-bowl-8", "vo-inact-bowl-9", "vo-instruct-7"], t.items = t._addItems(), t.panel = new s.W20, t.panel.interactiveChildren = !1, t.panel.visible = !1, t.panel.addChild(t.closeButton, n, t.items), t.addChild(t.openButton, t.panel), t.openButton.on("pointertap", t._onOpenButtonClick, (0, l.Z)(t)), t.closeButton.on("pointertap", t._onCloseButtonClick, (0, l.Z)(t)), t
                        }
                        return (0, u.Z)(p, [{
                            key: "isOpen",
                            get: function() {
                                return this.opened
                            }
                        }, {
                            key: "open",
                            value: (n = (0, nt.Z)(rt().mark((function t() {
                                return rt().wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            if (!this.opened) {
                                                t.next = 2;
                                                break
                                            }
                                            return t.abrupt("return");
                                        case 2:
                                            return this._highlighted || this._startIngredientHighlight(), this.openButton.enabled = !1, this.openButton.stopHighlight(), this.closeButton.show(), this.opened = !0, r.ZP.fromTo(this, {
                                                visualOffset: 0
                                            }, {
                                                visualOffset: 454,
                                                duration: .6,
                                                ease: ot.Ll.easeOut
                                            }), C.play("pantry-slide-in"), t.next = 11, r.ZP.fromTo(this.panel, {
                                                pixi: At
                                            }, {
                                                pixi: Lt,
                                                visible: !0,
                                                duration: .6,
                                                ease: ot.Ll.easeOut
                                            });
                                        case 11:
                                            this.panel.interactiveChildren = !0, W.hasTimerExpired(N.PANTRY) && (W.recordTimer(N.PANTRY), T.play("vo-instruct-6")), this.emit("opened");
                                        case 14:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this)
                            }))), function() {
                                return n.apply(this, arguments)
                            })
                        }, {
                            key: "close",
                            value: (e = (0, nt.Z)(rt().mark((function t() {
                                return rt().wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            if (!1 !== this.opened) {
                                                t.next = 2;
                                                break
                                            }
                                            return t.abrupt("return");
                                        case 2:
                                            return this.opened = !1, this.openButton.enabled = !0, this.panel.interactiveChildren = !1, this._stopIngredientHighlight(), this.closeButton.hide(), C.play("pantry-slide-out"), r.ZP.to(this, {
                                                visualOffset: 0,
                                                duration: .52,
                                                ease: ot.Ll.easeInOut
                                            }), t.next = 11, r.ZP.to(this.panel, {
                                                pixi: At,
                                                visible: !1,
                                                duration: .6,
                                                ease: ot.Ll.easeInOut
                                            });
                                        case 11:
                                            this.emit("closed");
                                        case 12:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this)
                            }))), function() {
                                return e.apply(this, arguments)
                            })
                        }, {
                            key: "tick",
                            value: function(t, e) {
                                this.x = e.width / -2, this.y = e.height / -2
                            }
                        }, {
                            key: "destroy",
                            value: function(t) {
                                this._destroyEmitters(), r.ZP.killTweensOf(this), r.ZP.killTweensOf(this.panel), (0, q.Z)((0, d.Z)(p.prototype), "destroy", this).call(this, t)
                            }
                        }, {
                            key: "_startIngredientHighlight",
                            value: function() {
                                this._highlighted = !0, this._destroyEmitters(), this.emitter = new ut(this.panel), this.emitter.setRect(new s.AeJ(10, 120, 360, 468)), this.emitter.emitUtilCancelled(), this._wiggleItems()
                            }
                        }, {
                            key: "_stopIngredientHighlight",
                            value: function() {
                                this.emitter && (this.emitter._destroyWhenComplete = !0, this.emitter.stop()), this.emitter = null, this._stopWiggle()
                            }
                        }, {
                            key: "_destroyEmitters",
                            value: function() {
                                this.emitter && this.emitter.destroy(), this.emitter = null
                            }
                        }, {
                            key: "_onOpenButtonClick",
                            value: function() {
                                this.open()
                            }
                        }, {
                            key: "_onCloseButtonClick",
                            value: function() {
                                this.close()
                            }
                        }, {
                            key: "_addItems",
                            value: function() {
                                var t = new s.W20,
                                    e = A.MP.filter((function(t) {
                                        return "extra" === t.type
                                    }));
                                e.sort((function(t, e) {
                                    return t.panelOrder - e.panelOrder
                                }));
                                for (var n = 0; n < e.length; n++) {
                                    var i = e[n],
                                        r = new Ot(i),
                                        o = n + 1,
                                        a = o % 3,
                                        c = Math.floor(o / 3);
                                    r.x = 56 + 126 * a, r.y = Et[c] - r.height / 2 + 18, r.enabled = !0, t.addChild(r)
                                }
                                return t
                            }
                        }, {
                            key: "_wiggleItems",
                            value: function() {
                                this.items.children.forEach((function(t) {
                                    var e = r.ZP.timeline();
                                    e.to(t, {
                                        pixi: {
                                            angle: -5
                                        },
                                        duration: .2,
                                        ease: ot.lD.easeOut
                                    }), e.to(t, {
                                        pixi: {
                                            angle: 5
                                        },
                                        duration: .4,
                                        yoyo: !0,
                                        ease: ot.lD.easeInOut,
                                        repeat: -1
                                    }), e.play()
                                }))
                            }
                        }, {
                            key: "_stopWiggle",
                            value: function() {
                                this.items.children.forEach((function(t) {
                                    r.ZP.killTweensOf(t), r.ZP.to(t, {
                                        pixi: {
                                            angle: 0
                                        },
                                        duration: .2,
                                        ease: ot.eJ.easeOut
                                    })
                                }))
                            }
                        }]), p
                    }(s.W20);
                var Mt = function(t) {
                    (0, h.Z)(o, t);
                    var e, n, i = (e = o, n = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                        } catch (t) {
                            return !1
                        }
                    }(), function() {
                        var t, i = (0, d.Z)(e);
                        if (n) {
                            var r = (0, d.Z)(this).constructor;
                            t = Reflect.construct(i, arguments, r)
                        } else t = i.apply(this, arguments);
                        return (0, f.Z)(this, t)
                    });

                    function o(t) {
                        var e;
                        return (0, c.Z)(this, o), t = t || {}, (e = i.call(this, null)).shapeWidth = t.width || 200, e.shapeHeight = t.height || 200, e.numOfPoints = t.numOfPoints || 20, e.pointMass = t.pointMass || 1, e.neighborSpringForce = t.neighborSpringForce || .005, e.baselineSpringForce = t.baselineSpringForce || .005, e.damping = t.damping || .98, e.iterations = t.iterations || 5, e.wavePoint = new s.E9j, e.color = 16777215, e.points = e._createSurfacePoints(e.numOfPoints), e
                    }
                    return (0, u.Z)(o, [{
                        key: "addColor",
                        value: function(t) {
                            var e = this,
                                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
                                i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                                o = s.P6Y.hex2rgb(this.fill.color),
                                a = t.map((function(t) {
                                    return t / 255
                                })),
                                c = o.map((function(t, e) {
                                    return t + (a[e] - t) * n
                                }));
                            r.ZP.to(o, {
                                endArray: c,
                                duration: i,
                                onUpdate: function() {
                                    e.color = s.P6Y.rgb2hex(o)
                                }
                            })
                        }
                    }, {
                        key: "tick",
                        value: function(t, e) {
                            this.wavePoint.y && this._applyWave(this.wavePoint), this._updatePoints(this.points)
                        }
                    }, {
                        key: "render",
                        value: function(t) {
                            this._drawShape(), (0, q.Z)((0, d.Z)(o.prototype), "render", this).call(this, t)
                        }
                    }, {
                        key: "_createSurfacePoints",
                        value: function(t) {
                            for (var e = [], n = 0; n < t; n++) {
                                var i = {
                                    x: n / (t - 1) * this.shapeWidth,
                                    y: 0,
                                    vel: {
                                        x: 0,
                                        y: 0
                                    }
                                };
                                e.push(i)
                            }
                            return e
                        }
                    }, {
                        key: "_applyWave",
                        value: function(t) {
                            for (var e = 0; e < this.points.length; e++) {
                                var n = this.points[e],
                                    i = Math.abs(t.x - n.x);
                                i < 150 && (n.y = t.y * ot.lD.easeOut(1 - i / 150))
                            }
                        }
                    }, {
                        key: "_updatePoints",
                        value: function(t) {
                            for (var e = this.iterations, n = this.pointMass, i = this.neighborSpringForce, r = this.baselineSpringForce, o = this.damping, a = t.length, s = 0; s < e; s++)
                                for (var c = 0; c < a; c++) {
                                    var u = t[c],
                                        l = t[((c - 1) % a + a) % a],
                                        h = t[(c + 1) % a],
                                        f = ((l.y - u.y) * i + (h.y - u.y) * i + r * -u.y) / n;
                                    u.vel.y = o * u.vel.y + f, u.y = u.y + u.vel.y
                                }
                        }
                    }, {
                        key: "_drawShape",
                        value: function() {
                            this.clear(), this.beginFill(this.color), this.moveTo(0, 0);
                            for (var t = 0; t < this.points.length; t++) {
                                var e = this.points[t],
                                    n = this.points[t + 1];
                                n ? this.quadraticCurveTo(e.x, e.y, (e.x + n.x) / 2, (e.y + n.y) / 2) : this.lineTo(e.x, e.y)
                            }
                            this.lineTo(this.shapeWidth, this.shapeHeight), this.lineTo(0, this.shapeHeight), this.lineTo(0, 0)
                        }
                    }]), o
                }(s.TCu);
                var jt = function(t) {
                        (0, h.Z)(l, t);
                        var e, n, i, o, a = (i = l, o = function() {
                            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                            if (Reflect.construct.sham) return !1;
                            if ("function" == typeof Proxy) return !0;
                            try {
                                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                            } catch (t) {
                                return !1
                            }
                        }(), function() {
                            var t, e = (0, d.Z)(i);
                            if (o) {
                                var n = (0, d.Z)(this).constructor;
                                t = Reflect.construct(e, arguments, n)
                            } else t = e.apply(this, arguments);
                            return (0, f.Z)(this, t)
                        });

                        function l() {
                            var t;
                            (0, c.Z)(this, l), (t = a.call(this)).tickChildren = !0, t.blending = !1, t.ready = !1;
                            var e = s.P6Y.TextureCache,
                                n = t.base = new s.jyi(e["blender-no-lid"]);
                            n.anchor.set(.5, 1), n.position.set(0, 25);
                            var i = t.lid = new s.jyi(e["blender-lid"]);
                            i.anchor.set(.5), i.position.set(0, -900);
                            var r = t.crank = new s.jyi(e["blender-hand-crank"]);
                            r.pivot.set(0, 120), r.position.set(-383, -130), r.interactive = r.buttonMode = !0;
                            var o = new s.TCu;
                            o.beginFill(16711935, 1), o.drawCircle(0, 0, 372.5), o.scale.set(.599, 1), o.position.set(0, -546);
                            var u = t.contents = new s.W20;
                            u.mask = o, u.tickChildren = !0, u.y = -220;
                            var h = t.liquid = new Mt({
                                width: 440,
                                height: 440,
                                numOfPoints: 40,
                                pointMass: 10,
                                neighborSpringForce: .05,
                                baselineSpringForce: .004,
                                damping: .98,
                                iterations: 6
                            });
                            return h.position.set(-220, 0), u.addChild(h), t.addChild(u, o, i, n, r), t.emitter = new ut(t.crank), t
                        }
                        return (0, u.Z)(l, [{
                            key: "addItem",
                            value: (n = (0, nt.Z)(rt().mark((function t(e) {
                                var n, i;
                                return rt().wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return this.ready = !1, this.item && (n = e.texture !== this.item.texture, this.item.destroy({
                                                texture: n,
                                                baseTexture: n
                                            })), this.item = e, e.position.set(0, -700), this.contents.addChildAt(e, 0), (i = r.ZP.timeline({
                                                paused: !0
                                            })).to(e, {
                                                pixi: {
                                                    y: -e.height / 2
                                                },
                                                duration: 1,
                                                ease: ot.Ll.easeOut
                                            }), i.fromTo(this.lid, {
                                                pixi: {
                                                    y: -900
                                                }
                                            }, {
                                                pixi: {
                                                    y: -628
                                                },
                                                duration: .8,
                                                ease: ot.Ll.easeOut
                                            }, "<+0.5"), t.next = 10, i.play();
                                        case 10:
                                            this.liquid.addColor(e.data.rgbColor), this.ready = !0;
                                        case 12:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this)
                            }))), function(t) {
                                return n.apply(this, arguments)
                            })
                        }, {
                            key: "blend",
                            value: (e = (0, nt.Z)(rt().mark((function t(e) {
                                var n, i = this;
                                return rt().wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return this.blending = !0, this.emitter.destroy(), C.play("blender-mix"), (n = r.ZP.timeline({
                                                defaults: {
                                                    ease: ot.bJ.easeNone
                                                }
                                            })).to(this.crank, {
                                                pixi: {
                                                    scaleY: -1
                                                },
                                                duration: 0,
                                                yoyo: !0,
                                                repeat: 30,
                                                repeatDelay: .1
                                            }, "<"), n.to(this, {
                                                pixi: {
                                                    x: "+=2"
                                                },
                                                duration: .01,
                                                yoyo: !0,
                                                repeat: 300
                                            }, "<"), n.to(this.liquid, {
                                                pixi: {
                                                    y: "-=".concat(.6 * this.item.height)
                                                },
                                                duration: 3
                                            }, "<"), this.liquid.wavePoint.y = -30, n.to(this.liquid.wavePoint, {
                                                x: 400,
                                                repeat: 10,
                                                duration: .3,
                                                onComplete: function() {
                                                    i.liquid.wavePoint.y = 0
                                                }
                                            }, "<"), n.to(this.item, {
                                                pixi: {
                                                    y: "+=".concat(this.item.height)
                                                },
                                                duration: 3,
                                                onComplete: function() {
                                                    i.blending = !1
                                                }
                                            }, "<"), t.next = 15, n.play();
                                        case 15:
                                            e();
                                        case 16:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this)
                            }))), function(t) {
                                return e.apply(this, arguments)
                            })
                        }, {
                            key: "tick",
                            value: function() {
                                this.angle = 0, this.blending && (this.angle = .5 * Math.random() - .25)
                            }
                        }, {
                            key: "highlightHandle",
                            value: function() {
                                this.emitter.setRectFrom(this.crank), this.emitter.emitUtilCancelled()
                            }
                        }, {
                            key: "destroy",
                            value: function(t) {
                                this.emitter.destroy(), (0, q.Z)((0, d.Z)(l.prototype), "destroy", this).call(this, t)
                            }
                        }]), l
                    }(s.W20),
                    Yt = (0, u.Z)((function t(e) {
                        (0, c.Z)(this, t), this.id = e.id, this.rect = e.rect, this.local = e.local, this.target = e.target, this.onDrop = e.onDrop, this.onOver = e.onOver, this.onOut = e.onOut
                    }));
                var Nt = function(t) {
                        (0, h.Z)(o, t);
                        var e, n, i, r = (n = o, i = function() {
                            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                            if (Reflect.construct.sham) return !1;
                            if ("function" == typeof Proxy) return !0;
                            try {
                                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                            } catch (t) {
                                return !1
                            }
                        }(), function() {
                            var t, e = (0, d.Z)(n);
                            if (i) {
                                var r = (0, d.Z)(this).constructor;
                                t = Reflect.construct(e, arguments, r)
                            } else t = e.apply(this, arguments);
                            return (0, f.Z)(this, t)
                        });

                        function o() {
                            var t;
                            return (0, c.Z)(this, o), (t = r.call(this, $)).texture = null, t
                        }
                        return (0, u.Z)(o, [{
                            key: "buildScene",
                            value: function() {
                                var t = this,
                                    e = s.P6Y.TextureCache;
                                this.background = new s.jyi(e["background-blender"]), this.background.anchor.set(.5), this.table = new s.jyi(e["kitchen-table"]), this.table.anchor.set(.5, 1), this.table.position.y = 518, this.blender = new jt, this.blender.y = 350, this.pantry = new Dt, this.dragLayer = new kt("default", (function() {
                                    return t._onDragStart()
                                })), this.dragLayer.addDropZone(new Yt({
                                    id: "blender",
                                    target: this.blender,
                                    triggerOnOver: !1,
                                    onDrop: function(e) {
                                        return t._onBlenderDrop(e)
                                    }
                                })), this.view.addChild(this.background, this.table, this.blender, this.pantry, this.dragLayer)
                            }
                        }, {
                            key: "start",
                            value: function() {
                                (0, q.Z)((0, d.Z)(o.prototype), "start", this).call(this), this.pantry.openButton.show();
                                var t = this.sceneManager.changeData.data.ingredientData;
                                t ? this._loadAndAddIngredient(t) : T.play("vo-inact-bowl-7"), this.blender.crank.on("pointertap", this._onCrankClick, this)
                            }
                        }, {
                            key: "end",
                            value: function() {
                                this.blender.crank.removeAllListeners()
                            }
                        }, {
                            key: "destroy",
                            value: function() {
                                this.item && this.item.destroy({
                                    texture: !0,
                                    baseTexture: !0
                                }), (0, q.Z)((0, d.Z)(o.prototype), "destroy", this).call(this)
                            }
                        }, {
                            key: "_onDragStart",
                            value: function() {
                                this.pantry.close()
                            }
                        }, {
                            key: "_onCrankClick",
                            value: function() {
                                var t = this;
                                this.blender.ready && (this.pantry.close(), this.pantry.openButton.hide(), this.blender.crank.removeAllListeners(), this.blender.blend((function() {
                                    return t._onBlendComplete()
                                })))
                            }
                        }, {
                            key: "_onBlenderDrop",
                            value: function(t) {
                                this._loadAndAddIngredient(t.data)
                            }
                        }, {
                            key: "_onBlendComplete",
                            value: function() {
                                this.item.data.blend(), v.i$.go(Q, {
                                    data: {
                                        ingredientData: this.item.data,
                                        blendColor: this.blender.liquid.color,
                                        sceneData: this.sceneManager.changeData.data.sceneData
                                    }
                                })
                            }
                        }, {
                            key: "_loadAndAddIngredient",
                            value: (e = (0, nt.Z)(rt().mark((function t(e) {
                                var n;
                                return rt().wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return this.item = new s.jyi, this.item.data = e, this.item.anchor.set(.5), t.next = 5, s.xEZ.fromURL("assets/images/ingredients/".concat(e.name, "-m.png"));
                                        case 5:
                                            n = t.sent, this.item.texture = n, this.blender.addItem(this.item), T.play("vo-inact-blend-2"), this.blender.highlightHandle();
                                        case 10:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this)
                            }))), function(t) {
                                return e.apply(this, arguments)
                            })
                        }]), o
                    }(pt),
                    Wt = n(7882),
                    Ft = function() {
                        function t(e) {
                            var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                            (0, c.Z)(this, t), this._index = 0, this._array = n ? (0, Wt.Z)(e) : e.slice()
                        }
                        return (0, u.Z)(t, [{
                            key: "next",
                            get: function() {
                                return this._array[this._index++ % this._array.length]
                            }
                        }, {
                            key: "index",
                            get: function() {
                                return this._index
                            }
                        }, {
                            key: "array",
                            get: function() {
                                return this._array
                            }
                        }]), t
                    }(),
                    Ht = {
                        BLENDER: new Ft(["vo-instruct-11", "vo-inact-blend-1"]),
                        CUTTING: new Ft(["vo-instruct-13-alt"]),
                        MIX: new Ft(["vo-instruct-14", "vo-instruct-14-alt"])
                    },
                    qt = {
                        BASICS: new Ft(["vo-inact-bowl-2", "vo-1-more", "vo-instruct-3"]),
                        MIXING: new Ft(["vo-inact-bowl-3", "vo-instruct-14"]),
                        EXTRAS: new Ft(["vo-inact-bowl-1", "vo-inact-bowl-4", "vo-inact-bowl-5", "vo-inact-bowl-6", "vo-inact-bowl-8", "vo-inact-bowl-9"]),
                        CUTTING: new Ft(["vo-inact-bowl-11"])
                    },
                    Vt = {
                        BOWL: new Ft(["vo-encourage-1", "vo-encourage-2", "vo-encourage-4", "vo-encourage-5", "vo-encourage-6", "vo-encourage-7", "vo-encourage-9", "vo-cookie-2", "vo-cookie-3", "vo-cookie-4", "vo-cookie-7", "vo-cookie-5", "vo-cookie-6", "vo-cookie-8", "cookie-9"]),
                        ANYWHERE: new Ft(["vo-encourage-7", "vo-encourage-9", "vo-cookie-2", "vo-cookie-3", "vo-cookie-4", "vo-cookie-7", "vo-cookie-5", "vo-cookie-6", "vo-cookie-8", "vo-cookie-9"])
                    },
                    Jt = {
                        alice: new Ft(["vo-alice-1", "vo-a-94", "vo-a-95", "vo-a-96", "vo-a-97"], !0),
                        rabit: new Ft(["vo-fergie-1", "vo-fergie-2", "vo-fergie-3"], !0),
                        cat: new Ft(["vo-cheshire-4", "vo-cheshire-1", "vo-cheshire-2", "vo-cheshire-3"], !0),
                        rosa: new Ft(["vo-rosa-1", "vo-rosa-2", "vo-rosa-3", "vo-rosa-4", "vo-rosa-5"], !0),
                        hatter: new Ft(["vo-hattie-2", "vo-hattie-1"])
                    },
                    Xt = new Ft(["vo-decor-2", "vo-decor-3", "vo-decor-4", "vo-decor-5"], !0),
                    Gt = function() {
                        function t() {
                            (0, c.Z)(this, t), this._ingredients = [], this._historyIndex = 0
                        }
                        return (0, u.Z)(t, [{
                            key: "totalIngredients",
                            get: function() {
                                return this._ingredients.length
                            }
                        }, {
                            key: "extraIngredients",
                            get: function() {
                                return this._ingredients.filter((function(t) {
                                    return "extra" === t.type
                                }))
                            }
                        }, {
                            key: "solidIngredients",
                            get: function() {
                                return this._ingredients.filter((function(t) {
                                    return t.solid
                                }))
                            }
                        }, {
                            key: "nonSolidIngredients",
                            get: function() {
                                return this._ingredients.filter((function(t) {
                                    return !t.solid
                                }))
                            }
                        }, {
                            key: "cakeLayers",
                            get: function() {
                                var t = this.extraIngredients,
                                    e = ["vanilla", "vanilla", "vanilla"];
                                if (1 === t.length) e[0] = e[2] = t[0].name;
                                else if (2 === t.length) e[0] = t[0].name, e[2] = t[1].name;
                                else if (t.length >= 3) {
                                    var n = t.length;
                                    e[2] = t[n - 1].name, e[1] = t[n - 2].name, e[0] = t[n - 3].name
                                }
                                return e
                            }
                        }, {
                            key: "lastIngredient",
                            get: function() {
                                return this._ingredients[this._ingredients.length - 1]
                            }
                        }, {
                            key: "add",
                            value: function(t) {
                                this._ingredients.indexOf(t) >= 0 || this._ingredients.push(t)
                            }
                        }, {
                            key: "remove",
                            value: function(t) {
                                var e = this._ingredients.indexOf(t); - 1 !== e && this._ingredients.splice(e, 1)
                            }
                        }, {
                            key: "setAllMixed",
                            value: function() {
                                this._ingredients.forEach((function(t) {
                                    return t.mix()
                                }))
                            }
                        }, {
                            key: "hasBlendedItem",
                            value: function() {
                                return this._ingredients.find((function(t) {
                                    return t.wasBlended
                                }))
                            }
                        }, {
                            key: "hasCutItem",
                            value: function() {
                                return this._ingredients.find((function(t) {
                                    return t.wasCut
                                }))
                            }
                        }, {
                            key: "getDominantColor",
                            value: function() {
                                var t = this.nonSolidIngredients;
                                return t.length ? t[t.length - 1].rgbColor : [255, 255, 255]
                            }
                        }]), t
                    }(),
                    Ut = new Rt("honeycomb"),
                    Qt = new Gt;
                Qt.add(Ut);
                var $t = function(t) {
                    (0, h.Z)(p, t);
                    var e, n, i, o, a = (i = p, o = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                        } catch (t) {
                            return !1
                        }
                    }(), function() {
                        var t, e = (0, d.Z)(i);
                        if (o) {
                            var n = (0, d.Z)(this).constructor;
                            t = Reflect.construct(e, arguments, n)
                        } else t = e.apply(this, arguments);
                        return (0, f.Z)(this, t)
                    });

                    function p() {
                        var t;
                        (0, c.Z)(this, p), (t = a.call(this)).visible = !1, t.shape = new s.TCu, t.shape.beginFill(16777215), t.shape.drawRect(-832, -384, 1664, 768), t.shape.alpha = .7, t.itemHolder = new s.W20;
                        var e = new s.jyi(s.P6Y.TextureCache["decoration-glow"]);
                        return e.anchor.set(.5), t.itemHolder.addChild(e), t.particles = new s.W20, t.addChild(t.shape, t.particles, t.itemHolder), t.ready = !1, t.on("pointertap", t.hide, (0, l.Z)(t)), t
                    }
                    return (0, u.Z)(p, [{
                        key: "show",
                        value: (n = (0, nt.Z)(rt().mark((function t() {
                            return rt().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return this.visible = !0, this.itemSprite.angle = -10, r.ZP.to(this.itemSprite, {
                                            pixi: {
                                                angle: 10
                                            },
                                            duration: .5,
                                            yoyo: !0,
                                            repeat: -1,
                                            ease: ot.Yv.easeInOut
                                        }), r.ZP.fromTo(this.shape, {
                                            pixi: {
                                                alpha: 0
                                            }
                                        }, {
                                            pixi: {
                                                alpha: .5
                                            },
                                            duration: .4,
                                            ease: ot.lD.easeInOut
                                        }), t.next = 6, r.ZP.fromTo(this.itemHolder, {
                                            pixi: {
                                                scale: 0
                                            }
                                        }, {
                                            pixi: {
                                                scale: 1
                                            },
                                            duration: .8,
                                            ease: ot.eJ.easeOut
                                        });
                                    case 6:
                                        T.play(Xt.next), r.ZP.to(this, {
                                            interactive: !0,
                                            delay: 2
                                        }), this.emitter.emitForSeconds(8);
                                    case 9:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this)
                        }))), function() {
                            return n.apply(this, arguments)
                        })
                    }, {
                        key: "hide",
                        value: (e = (0, nt.Z)(rt().mark((function t() {
                            return rt().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return this.interactive = !1, r.ZP.to(this.shape, {
                                            pixi: {
                                                alpha: 0
                                            },
                                            duration: .4,
                                            ease: ot.lD.easeInOut
                                        }), t.next = 4, r.ZP.to(this.itemHolder, {
                                            pixi: {
                                                scale: 0
                                            },
                                            duration: .6,
                                            ease: ot.eJ.easeIn
                                        });
                                    case 4:
                                        r.ZP.killTweensOf(this.itemSprite);
                                    case 5:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this)
                        }))), function() {
                            return e.apply(this, arguments)
                        })
                    }, {
                        key: "setItem",
                        value: function(t) {
                            var e = new s.jyi(s.P6Y.TextureCache["ui-cake-decor-".concat(t.name)]);
                            e.filters = [new Tt.V({
                                distance: 20,
                                color: 16777215
                            })], e.anchor.set(.5), this.itemHolder.addChild(e), this.itemSprite = e;
                            var n = e.getLocalBounds().clone();
                            n.pad(50, 50), this.emitter = new ut(this.particles), this.emitter.setRect(n), this.emitter.addAtBack = !0, this.ready = !0
                        }
                    }]), p
                }(s.W20);
                const zt = JSON.parse('{"alpha":{"start":0.8,"end":0},"scale":{"start":1,"end":3,"minimumScaleMultiplier":0.8},"color":{"start":"#ffffff","end":"#ffffff"},"speed":{"start":200,"end":50,"minimumSpeedMultiplier":0.5},"acceleration":{"x":0,"y":0},"maxSpeed":0,"startRotation":{"min":200,"max":340},"noRotation":false,"rotationSpeed":{"min":-50,"max":50},"lifetime":{"min":1,"max":2},"blendMode":"normal","frequency":0.008,"emitterLifetime":-1,"maxParticles":1000,"pos":{"x":0,"y":0},"addAtBack":true,"spawnType":"rect","spawnRect":{"x":-230,"y":-520,"w":460,"h":570}}');
                var Kt = (0, at.oC)(zt, ["pink-poof"]),
                    te = function(t) {
                        (0, h.Z)(r, t);
                        var e, n, i = (e = r, n = function() {
                            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                            if (Reflect.construct.sham) return !1;
                            if ("function" == typeof Proxy) return !0;
                            try {
                                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                            } catch (t) {
                                return !1
                            }
                        }(), function() {
                            var t, i = (0, d.Z)(e);
                            if (n) {
                                var r = (0, d.Z)(this).constructor;
                                t = Reflect.construct(i, arguments, r)
                            } else t = i.apply(this, arguments);
                            return (0, f.Z)(this, t)
                        });

                        function r(t) {
                            var e;
                            return (0, c.Z)(this, r), (e = i.call(this, t, Kt)).autoUpdate = !0, e.emit = !1, e
                        }
                        return (0, u.Z)(r)
                    }(at.Q5);
                var ee = {
                        alpha: {
                            start: 0,
                            end: 1
                        },
                        scale: {
                            start: 1,
                            end: 1,
                            minimumScaleMultiplier: 1
                        },
                        color: {
                            start: "#ffffff",
                            end: "#ffffff"
                        },
                        speed: {
                            start: 100,
                            end: 200,
                            minimumSpeedMultiplier: 1
                        },
                        acceleration: {
                            x: 0,
                            y: 0
                        },
                        maxSpeed: 0,
                        startRotation: {
                            min: 90,
                            max: 90
                        },
                        noRotation: !1,
                        rotationSpeed: {
                            min: 250,
                            max: 200
                        },
                        lifetime: {
                            min: .5,
                            max: 1
                        },
                        blendMode: "normal",
                        frequency: .05,
                        emitterLifetime: 2,
                        maxParticles: 100,
                        pos: {
                            x: 0,
                            y: 0
                        },
                        addAtBack: !0,
                        spawnType: "rect",
                        spawnRect: {
                            x: -250,
                            y: 50,
                            w: 500,
                            h: 500
                        }
                    },
                    ne = function(t) {
                        (0, h.Z)(r, t);
                        var e, n, i = (e = r, n = function() {
                            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                            if (Reflect.construct.sham) return !1;
                            if ("function" == typeof Proxy) return !0;
                            try {
                                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                            } catch (t) {
                                return !1
                            }
                        }(), function() {
                            var t, i = (0, d.Z)(e);
                            if (n) {
                                var r = (0, d.Z)(this).constructor;
                                t = Reflect.construct(i, arguments, r)
                            } else t = i.apply(this, arguments);
                            return (0, f.Z)(this, t)
                        });

                        function r(t, e) {
                            (0, c.Z)(this, r);
                            var n = Object.assign({}, ee);
                            return "raindrop" === e[0] && Object.assign(n, {
                                noRotation: !0,
                                rotationSpeed: {
                                    min: 0,
                                    max: 0
                                },
                                scale: {
                                    start: .6,
                                    end: .6,
                                    minimumScaleMultiplier: .5
                                }
                            }), i.call(this, t, (0, at.oC)(n, e))
                        }
                        return (0, u.Z)(r)
                    }(at.Q5);
                const ie = JSON.parse('{"alpha":{"start":0.74,"end":0},"scale":{"start":1,"end":0.7,"minimumScaleMultiplier":1},"color":{"start":"#ffffff","end":"#ffffff"},"speed":{"start":100,"end":0,"minimumSpeedMultiplier":1},"acceleration":{"x":0,"y":0},"maxSpeed":0,"startRotation":{"min":180,"max":360},"noRotation":true,"rotationSpeed":{"min":0,"max":0},"lifetime":{"min":0.5,"max":1},"blendMode":"normal","frequency":0.001,"emitterLifetime":0.1,"maxParticles":10,"pos":{"x":0,"y":0},"addAtBack":true,"spawnType":"point"}');
                var re = function(t) {
                    (0, h.Z)(a, t);
                    var e, n, i, o = (n = a, i = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                        } catch (t) {
                            return !1
                        }
                    }(), function() {
                        var t, e = (0, d.Z)(n);
                        if (i) {
                            var r = (0, d.Z)(this).constructor;
                            t = Reflect.construct(e, arguments, r)
                        } else t = e.apply(this, arguments);
                        return (0, f.Z)(this, t)
                    });

                    function a() {
                        var t;
                        return (0, c.Z)(this, a), (t = o.call(this)).emitter = new at.Q5((0, l.Z)(t), (0, at.oC)(ie, ["poof"])), t
                    }
                    return (0, u.Z)(a, [{
                        key: "addEffect",
                        value: (e = (0, nt.Z)(rt().mark((function t(e) {
                            return rt().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return C.play("magic-item-select-poof"), this.emitter.playOnceAndDestroy(), e.sprinkles.length && (this.sprinkleEmitter = new ne(this, e.sprinkles), this.sprinkleEmitter.playOnceAndDestroy()), t.next = 5, r.ZP.delayedCall(1, (function() {}));
                                    case 5:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this)
                        }))), function(t) {
                            return e.apply(this, arguments)
                        })
                    }, {
                        key: "destroy",
                        value: function(t) {
                            this.emitter.destroy(), (0, q.Z)((0, d.Z)(a.prototype), "destroy", this).call(this, t)
                        }
                    }]), a
                }(s.W20);
                var oe = [{
                        width: 260,
                        height: 168,
                        angle: -2,
                        y: -400
                    }, {
                        width: 314,
                        height: 194,
                        angle: 0,
                        y: -250
                    }, {
                        width: 418,
                        height: 308,
                        angle: 0,
                        y: 0
                    }],
                    ae = function(t) {
                        (0, h.Z)(a, t);
                        var e, n, i, o = (n = a, i = function() {
                            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                            if (Reflect.construct.sham) return !1;
                            if ("function" == typeof Proxy) return !0;
                            try {
                                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                            } catch (t) {
                                return !1
                            }
                        }(), function() {
                            var t, e = (0, d.Z)(n);
                            if (i) {
                                var r = (0, d.Z)(this).constructor;
                                t = Reflect.construct(e, arguments, r)
                            } else t = e.apply(this, arguments);
                            return (0, f.Z)(this, t)
                        });

                        function a(t) {
                            var e;
                            (0, c.Z)(this, a), e = o.call(this), t || (t = Qt), e.interactive = !0, e.preserve = !1;
                            var n = s.P6Y.TextureCache;
                            e.shadow = new s.jyi(n["cake-plate-shadow"]), e.shadow.anchor.set(.5), e.shadow.pivot.set(0, -40), e.shadow.scale.set(1.3), e.plate = new s.jyi(n["cake-plate"]), e.plate.anchor.set(.5), e.cakeLayers = new s.W20, e.sparklesContainer = new s.TYe(1e3, {
                                rotation: !0,
                                uvs: !0,
                                vertices: !0
                            }), e.addChild(e.shadow, e.plate, e.cakeLayers, e.sparklesContainer), e.layers = [];
                            for (var i = t.cakeLayers, r = 0; r < 3; r++) {
                                var u = oe[r],
                                    l = new s.W20;
                                l.interactive = !0, l.name = "layer".concat(r), l.position.y = u.y + 30, l.base = new s.jyi(n["cake-layer-".concat(i[r])]), l.base.width = u.width, l.base.height = u.height, l.base.angle = u.angle, l.base.anchor.set(.5, 1), l.addChild(l.base), e.cakeLayers.addChild(l), e.layers.push(l)
                            }
                            return e.items = [], e
                        }
                        return (0, u.Z)(a, [{
                            key: "numDecorations",
                            get: function() {
                                return this.items.length
                            }
                        }, {
                            key: "addItem",
                            value: function(t, e) {
                                var n = this.getTargetLayer(t);
                                this.items.push(t), n ? n.addChildToLocal(t) : t.destroy(), e()
                            }
                        }, {
                            key: "addMagicItem",
                            value: (e = (0, nt.Z)(rt().mark((function t(e) {
                                var n;
                                return rt().wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return e.enabled = !1, this.addChildToLocal(e), t.next = 4, r.ZP.to(e, {
                                                pixi: {
                                                    x: 0,
                                                    y: -655
                                                },
                                                duration: 1,
                                                ease: ot.Ll.easeOut
                                            });
                                        case 4:
                                            return (n = new re).position.set(0, -655), this.addChild(n), e.destroy(), t.next = 10, n.addEffect(e.config);
                                        case 10:
                                            return t.abrupt("return", e);
                                        case 11:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this)
                            }))), function(t) {
                                return e.apply(this, arguments)
                            })
                        }, {
                            key: "addSparkles",
                            value: function() {
                                this.sparkleEmitter = new ut(this.sparklesContainer), this.sparkleEmitter.setRect(new s.AeJ(-175, -550, 350, 545)), this.sparkleEmitter.emitUtilCancelled()
                            }
                        }, {
                            key: "addRevealEmitter",
                            value: function() {
                                var t = new s.TYe(1e3, {
                                    rotation: !0,
                                    uvs: !0,
                                    vertices: !0
                                });
                                this.addChild(t), this.poofEmitter = new te(t), this.poofEmitter.emit = !0, this.poofEmitter.update(30)
                            }
                        }, {
                            key: "stopRevealEmitter",
                            value: function() {
                                this.poofEmitter.emit = !1
                            }
                        }, {
                            key: "animateIn",
                            value: function() {
                                var t = r.ZP.timeline({
                                    defaults: {
                                        duration: 1,
                                        ease: ot.Ll.easeOut
                                    }
                                });
                                t.fromTo(this.plate, {
                                    y: 200
                                }, {
                                    y: 0
                                }), t.fromTo(this.shadow, {
                                    y: 200
                                }, {
                                    y: 0
                                }, "<");
                                for (var e = this.cakeLayers.children.length - 1; e >= 0; e--) {
                                    var n = this.cakeLayers.children[e];
                                    t.fromTo(n, {
                                        pixi: {
                                            y: "-=700"
                                        }
                                    }, {
                                        pixi: {
                                            y: "+=700"
                                        },
                                        duration: .8,
                                        ease: ot.Yv.easeOut
                                    }, "<10%")
                                }
                                C.play("cake-reveal"), this.visible = !0
                            }
                        }, {
                            key: "getTargetLayer",
                            value: function(t) {
                                var e = t.getBounds();
                                this.toLocal(e, null, e);
                                for (var n = e.clone(), i = !1, r = 0; r < this.layers.length; r++) {
                                    var o = this.layers[r],
                                        a = o.getLocalBounds();
                                    if (a.y += o.y, a.intersects(n)) {
                                        var s = a.intersection(n),
                                            c = s.height;
                                        Math.min(s.width, s.height) > 10 && (0 === r || c > t.height / 2) && (i = o)
                                    }
                                }
                                return i
                            }
                        }, {
                            key: "destroy",
                            value: function(t) {
                                this.sparkleEmitter && this.sparkleEmitter.destroy(), this.poofEmitter && this.poofEmitter.destroy(), !1 === this.preserve && (0, q.Z)((0, d.Z)(a.prototype), "destroy", this).call(this, t)
                            }
                        }]), a
                    }(s.W20),
                    se = function() {
                        function t() {
                            (0, c.Z)(this, t)
                        }
                        return (0, u.Z)(t, [{
                            key: "load",
                            value: function() {
                                return Promise.resolve()
                            }
                        }, {
                            key: "create",
                            value: function(t, e) {}
                        }, {
                            key: "destroy",
                            value: function() {}
                        }]), t
                    }();
                var ce = {
                        alpha: {
                            start: 1,
                            end: 1
                        },
                        scale: {
                            start: .75,
                            end: 1,
                            minimumScaleMultiplier: .5
                        },
                        color: {
                            start: "#ffffff",
                            end: "#ffffff"
                        },
                        speed: {
                            start: 200,
                            end: 170,
                            minimumSpeedMultiplier: 1
                        },
                        acceleration: {
                            x: 0,
                            y: 0
                        },
                        maxSpeed: 0,
                        startRotation: {
                            min: 270,
                            max: 270
                        },
                        noRotation: !0,
                        rotationSpeed: {
                            min: 0,
                            max: 0
                        },
                        lifetime: {
                            min: 5,
                            max: 5
                        },
                        blendMode: "normal",
                        frequency: .2,
                        emitterLifetime: -1,
                        maxParticles: 200,
                        pos: {
                            x: 0,
                            y: 0
                        },
                        addAtBack: !1,
                        spawnType: "rect",
                        spawnRect: {
                            x: -843,
                            y: 450,
                            w: 1664,
                            h: 0
                        }
                    },
                    ue = function(t) {
                        (0, h.Z)(o, t);
                        var e, n, i, r = (n = o, i = function() {
                            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                            if (Reflect.construct.sham) return !1;
                            if ("function" == typeof Proxy) return !0;
                            try {
                                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                            } catch (t) {
                                return !1
                            }
                        }(), function() {
                            var t, e = (0, d.Z)(n);
                            if (i) {
                                var r = (0, d.Z)(this).constructor;
                                t = Reflect.construct(e, arguments, r)
                            } else t = e.apply(this, arguments);
                            return (0, f.Z)(this, t)
                        });

                        function o() {
                            return (0, c.Z)(this, o), r.call(this)
                        }
                        return (0, u.Z)(o, [{
                            key: "create",
                            value: function(t, e) {
                                this.particleRain = new s.TYe, t.addChild(this.particleRain), this.emitter = new at.Q5(this.particleRain, (0, at.oC)(ce, ["bubble-white", "bubble-blue", "bubble-pink", "bubble-purple"]))
                            }
                        }, {
                            key: "play",
                            value: (e = (0, nt.Z)(rt().mark((function t() {
                                return rt().wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return t.next = 2, C.play("magic-item-bubbles-loop", {
                                                loop: !0
                                            });
                                        case 2:
                                            this.loop = t.sent, this.emitter.autoUpdate = !0, this.emitter.emit = !0;
                                        case 5:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this)
                            }))), function() {
                                return e.apply(this, arguments)
                            })
                        }, {
                            key: "destroy",
                            value: function() {
                                this.loop.stop(), this.emitter.destroy()
                            }
                        }]), o
                    }(se);
                var le = function(t) {
                        (0, h.Z)(a, t);
                        var e, n, i, o = (n = a, i = function() {
                            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                            if (Reflect.construct.sham) return !1;
                            if ("function" == typeof Proxy) return !0;
                            try {
                                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                            } catch (t) {
                                return !1
                            }
                        }(), function() {
                            var t, e = (0, d.Z)(n);
                            if (i) {
                                var r = (0, d.Z)(this).constructor;
                                t = Reflect.construct(e, arguments, r)
                            } else t = e.apply(this, arguments);
                            return (0, f.Z)(this, t)
                        });

                        function a() {
                            return (0, c.Z)(this, a), o.call(this)
                        }
                        return (0, u.Z)(a, [{
                            key: "create",
                            value: function(t) {
                                this.cake = t
                            }
                        }, {
                            key: "destroy",
                            value: function() {
                                this.loop.stop(), this.timeline.kill()
                            }
                        }, {
                            key: "play",
                            value: (e = (0, nt.Z)(rt().mark((function t() {
                                var e;
                                return rt().wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return (e = r.ZP.timeline({
                                                repeat: -1,
                                                repeatDelay: 1
                                            })).to(this.cake.cakeLayers, {
                                                pixi: {
                                                    scaleX: 1.1,
                                                    scaleY: .8
                                                },
                                                duration: .3,
                                                ease: ot.Ll.easeOut
                                            }), e.to(this.cake.cakeLayers, {
                                                pixi: {
                                                    scaleX: .8,
                                                    scaleY: 1.1
                                                },
                                                duration: .2,
                                                ease: ot.Yv.easeOut
                                            }), e.to(this.cake.cakeLayers, {
                                                pixi: {
                                                    y: -30
                                                },
                                                duration: .2,
                                                ease: ot.Yv.easeOut
                                            }, "<0.1"), e.to(this.cake.cakeLayers, {
                                                pixi: {
                                                    y: 0
                                                },
                                                duration: .25,
                                                ease: ot.Yv.easeIn
                                            }), e.to(this.cake.cakeLayers, {
                                                pixi: {
                                                    scaleX: 1,
                                                    scaleY: 1
                                                },
                                                duration: 1,
                                                ease: ot.tQ.easeOut
                                            }, "<0.2"), this.timeline = e, t.next = 9, C.play("magic-item-bounce-loop", {
                                                loop: !0
                                            });
                                        case 9:
                                            this.loop = t.sent;
                                        case 10:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this)
                            }))), function() {
                                return e.apply(this, arguments)
                            })
                        }]), a
                    }(se),
                    he = n(3401);
                var fe = {
                        lifetime: {
                            min: .5,
                            max: 1
                        },
                        emit: !1,
                        particlesPerWave: 200,
                        frequency: .1,
                        emitterLifetime: .3,
                        maxParticles: 1e3,
                        addAtBack: !1,
                        pos: {
                            x: 0,
                            y: 0
                        },
                        behaviors: [{
                            type: "alpha",
                            config: {
                                alpha: {
                                    list: [{
                                        time: 0,
                                        value: 1
                                    }, {
                                        time: 1,
                                        value: .9
                                    }]
                                }
                            }
                        }, {
                            type: "moveAcceleration",
                            config: {
                                accel: {
                                    x: 0,
                                    y: 400
                                },
                                minStart: 10,
                                maxStart: 400,
                                rotate: !0
                            }
                        }, {
                            type: "scale",
                            config: {
                                scale: {
                                    list: [{
                                        time: 0,
                                        value: .7
                                    }, {
                                        time: .5,
                                        value: .8
                                    }, {
                                        time: 1,
                                        value: .2
                                    }]
                                },
                                minMult: 1
                            }
                        }, {
                            type: "textureRandom",
                            config: {
                                textures: ["firework-spark"]
                            }
                        }, {
                            type: "spawnBurst",
                            config: {
                                start: 0,
                                spacing: 0,
                                distance: 0
                            }
                        }]
                    },
                    de = ["F5EF00", "FFFFFF", "FF003F", "00DE00", "FF73D7", "0076EF", "00F9DA"],
                    pe = function(t) {
                        (0, h.Z)(r, t);
                        var e, n, i = (e = r, n = function() {
                            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                            if (Reflect.construct.sham) return !1;
                            if ("function" == typeof Proxy) return !0;
                            try {
                                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                            } catch (t) {
                                return !1
                            }
                        }(), function() {
                            var t, i = (0, d.Z)(e);
                            if (n) {
                                var r = (0, d.Z)(this).constructor;
                                t = Reflect.construct(i, arguments, r)
                            } else t = i.apply(this, arguments);
                            return (0, f.Z)(this, t)
                        });

                        function r() {
                            var t;
                            return (0, c.Z)(this, r), (t = i.call(this, 1e3, {
                                position: !0,
                                tint: !0,
                                rotation: !0,
                                uvs: !0,
                                alpha: !0
                            })).timer = 0, t.usePoint = new s.E9j, t.emitters = [], t.emitterIndex = 0, t.buildEmitters(), t
                        }
                        return (0, u.Z)(r, [{
                            key: "buildEmitters",
                            value: function() {
                                var t = this;
                                de.forEach((function(e) {
                                    var n = Object.assign({}, fe);
                                    n.behaviors.push({
                                        type: "color",
                                        config: {
                                            color: {
                                                list: [{
                                                    time: 0,
                                                    value: "ffffff"
                                                }, {
                                                    time: .5,
                                                    value: e
                                                }, {
                                                    time: 1,
                                                    value: e
                                                }]
                                            }
                                        }
                                    });
                                    var i = new at.Q5(t, n);
                                    i.autoUpdate = !0, t.emitters.push(i)
                                }))
                            }
                        }, {
                            key: "play",
                            value: function() {
                                this.usePoint.x = (0, he.Z)(100, 1564), this.usePoint.y = (0, he.Z)(100, 400);
                                var t = this.toLocal(this.usePoint),
                                    e = this.emitters[this.emitterIndex++ % this.emitters.length];
                                e.destroyed || (e.updateSpawnPos(t.x, t.y), e.emitNow())
                            }
                        }, {
                            key: "tick",
                            value: function(t) {
                                this.timer += t, this.timer > 1 && (this.timer = 0, this.play())
                            }
                        }, {
                            key: "destroy",
                            value: function(t) {
                                this.emitter.destroy(), (0, q.Z)((0, d.Z)(r.prototype), "destroy", this).call(this, t)
                            }
                        }]), r
                    }(s.TYe);
                var ve = function(t) {
                    (0, h.Z)(o, t);
                    var e, n, i = (e = o, n = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                        } catch (t) {
                            return !1
                        }
                    }(), function() {
                        var t, i = (0, d.Z)(e);
                        if (n) {
                            var r = (0, d.Z)(this).constructor;
                            t = Reflect.construct(i, arguments, r)
                        } else t = i.apply(this, arguments);
                        return (0, f.Z)(this, t)
                    });

                    function o() {
                        return (0, c.Z)(this, o), i.call(this)
                    }
                    return (0, u.Z)(o, [{
                        key: "create",
                        value: function(t, e) {
                            var n = [{
                                    x: 86,
                                    y: -162,
                                    name: "vine-1",
                                    pivot: new s.E9j(20, 122),
                                    angle: 10
                                }, {
                                    x: 152,
                                    y: 28,
                                    name: "vine-1",
                                    pivot: new s.E9j(20, 122),
                                    angle: 40
                                }, {
                                    x: -102,
                                    y: 200,
                                    name: "vine-2",
                                    pivot: new s.E9j(190, 218),
                                    angle: -30
                                }, {
                                    x: -82,
                                    y: -20,
                                    name: "vine-3",
                                    pivot: new s.E9j(90, 163),
                                    angle: -60
                                }],
                                i = s.aNw.shared.resources["ss-magiceffects"];
                            this.vines = new s.W20;
                            for (var r = 0; r < n.length; r++) {
                                var o = n[r],
                                    a = new s.KgH(i.spritesheet.animations[o.name]);
                                a.animationSpeed = .08, a.loop = !1, a.scale.set(0), a.position.copyFrom(o), a.pivot.copyFrom(o.pivot), a.angle = o.angle, this.vines.addChild(a)
                            }
                            t.addChild(this.vines)
                        }
                    }, {
                        key: "play",
                        value: function() {
                            C.play("magic-item-branch-grow"), (0, Wt.Z)(this.vines.children).forEach((function(t, e) {
                                r.ZP.delayedCall(.2 * e, (function() {
                                    r.ZP.to(t, {
                                        pixi: {
                                            scale: 1
                                        },
                                        duration: 1
                                    }), t.play()
                                }))
                            }))
                        }
                    }, {
                        key: "destroy",
                        value: function() {}
                    }]), o
                }(se);
                const ye = JSON.parse('{"alpha":{"start":1,"end":1},"scale":{"start":0.8,"end":0.8,"minimumScaleMultiplier":0.5},"color":{"start":"#ffffff","end":"#ffffff"},"speed":{"start":100,"end":1000,"minimumSpeedMultiplier":1},"acceleration":{"x":0,"y":0},"maxSpeed":0,"startRotation":{"min":90,"max":90},"noRotation":true,"rotationSpeed":{"min":0,"max":0},"lifetime":{"min":2,"max":2},"blendMode":"normal","frequency":0.04,"emitterLifetime":-1,"maxParticles":60,"pos":{"x":0,"y":0},"addAtBack":false,"spawnType":"rect","spawnRect":{"x":-832,"y":-500,"w":1664,"h":20}}');
                var ge = {
                        scale: {
                            start: .1,
                            end: .2,
                            minimumScaleMultiplier: .5
                        },
                        frequency: .03,
                        maxParticles: 100
                    },
                    me = function(t) {
                        (0, h.Z)(a, t);
                        var e, n, i, o = (n = a, i = function() {
                            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                            if (Reflect.construct.sham) return !1;
                            if ("function" == typeof Proxy) return !0;
                            try {
                                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                            } catch (t) {
                                return !1
                            }
                        }(), function() {
                            var t, e = (0, d.Z)(n);
                            if (i) {
                                var r = (0, d.Z)(this).constructor;
                                t = Reflect.construct(e, arguments, r)
                            } else t = e.apply(this, arguments);
                            return (0, f.Z)(this, t)
                        });

                        function a() {
                            return (0, c.Z)(this, a), o.call(this)
                        }
                        return (0, u.Z)(a, [{
                            key: "load",
                            value: function() {
                                return new Promise((function(t) {
                                    var e = new s.aNw;
                                    e.add("assets/spritesheets/ss-magiceffect-rainwatermelon.json"), e.load(t)
                                }))
                            }
                        }, {
                            key: "create",
                            value: function(t, e) {
                                this.backgroundEffect = new s.jyi(s.P6Y.TextureCache.rainbow), this.backgroundEffect.anchor.set(.5), this.backgroundEffect.position.set(0, -200), r.ZP.to(this.backgroundEffect, {
                                    pixi: {
                                        scaleY: .9
                                    },
                                    duration: 4,
                                    ease: ot.Yv.easeInOut,
                                    yoyo: !0,
                                    repeat: -1
                                }), e.addChild(this.backgroundEffect), this.particleRain = new s.TYe, t.addChild(this.particleRain), this.emitter = new at.Q5(this.particleRain, (0, at.oC)(ye, ["raindrop"])), this.sparkleEmitter = new ut(this.backgroundEffect, ge), this.sparkleEmitter.setRect(this.backgroundEffect.getLocalBounds().pad(0, -130))
                            }
                        }, {
                            key: "play",
                            value: (e = (0, nt.Z)(rt().mark((function t() {
                                return rt().wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return t.next = 2, C.play("magic-item-rain-loop", {
                                                loop: !0
                                            });
                                        case 2:
                                            this.loop = t.sent, this.emitter.autoUpdate = !0, this.emitter.emit = !0, this.sparkleEmitter.autoUpdate = !0, this.sparkleEmitter.emit = !0;
                                        case 7:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this)
                            }))), function() {
                                return e.apply(this, arguments)
                            })
                        }, {
                            key: "destroy",
                            value: function() {
                                this.emitter.destroy(), this.sparkleEmitter.destroy(), this.loop.stop()
                            }
                        }]), a
                    }(se);
                var ke = function(t) {
                    (0, h.Z)(o, t);
                    var e, n, i = (e = o, n = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                        } catch (t) {
                            return !1
                        }
                    }(), function() {
                        var t, i = (0, d.Z)(e);
                        if (n) {
                            var r = (0, d.Z)(this).constructor;
                            t = Reflect.construct(i, arguments, r)
                        } else t = i.apply(this, arguments);
                        return (0, f.Z)(this, t)
                    });

                    function o() {
                        return (0, c.Z)(this, o), i.call(this)
                    }
                    return (0, u.Z)(o, [{
                        key: "create",
                        value: function(t) {
                            this.cake = t
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            this.timeline.kill()
                        }
                    }, {
                        key: "play",
                        value: function() {
                            var t = r.ZP.timeline({
                                repeat: -1,
                                repeatDelay: 5
                            });
                            t.to(this.cake.cakeLayers, {
                                pixi: {
                                    angle: .8
                                },
                                duration: .05,
                                ease: ot.bJ.easeInOut,
                                repeat: 21,
                                yoyo: !0
                            }), t.call((function() {
                                return C.play("magic-item-shrink")
                            })), t.to(this.cake.cakeLayers, {
                                pixi: {
                                    scaleX: 1,
                                    scaleY: 1.1
                                },
                                duration: .3,
                                ease: ot.Ll.easeOut
                            }), t.to(this.cake.cakeLayers, {
                                pixi: {
                                    scaleX: .4,
                                    scaleY: .4
                                },
                                duration: .2,
                                ease: ot.tQ.easeOut
                            }), t.to(this, {
                                duration: 4
                            }), t.to(this.cake.cakeLayers, {
                                pixi: {
                                    angle: .8
                                },
                                duration: .05,
                                ease: ot.bJ.easeInOut,
                                repeat: 21,
                                yoyo: !0
                            }), t.call((function() {
                                return C.play("cut-bubble")
                            })), t.to(this.cake.cakeLayers, {
                                pixi: {
                                    scaleX: 1,
                                    scaleY: 1
                                },
                                duration: .6,
                                ease: ot.tQ.easeOut
                            }), this.timeline = t
                        }
                    }]), o
                }(se);
                var we = function(t) {
                    (0, h.Z)(o, t);
                    var e, n, i = (e = o, n = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                        } catch (t) {
                            return !1
                        }
                    }(), function() {
                        var t, i = (0, d.Z)(e);
                        if (n) {
                            var r = (0, d.Z)(this).constructor;
                            t = Reflect.construct(i, arguments, r)
                        } else t = i.apply(this, arguments);
                        return (0, f.Z)(this, t)
                    });

                    function o() {
                        return (0, c.Z)(this, o), i.call(this)
                    }
                    return (0, u.Z)(o, [{
                        key: "create",
                        value: function(t) {
                            this.cake = t
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            this.timeline.kill()
                        }
                    }, {
                        key: "play",
                        value: function() {
                            C.play("magic-item-shrink");
                            var t = r.ZP.timeline(),
                                e = this.cake.cakeLayers;
                            e.pivot.set(0, -285), e.y += -285;
                            var n = 60 - e.getLocalBounds().height + 285;
                            t.to(e, {
                                pixi: {
                                    scaleY: .84,
                                    y: "+=60"
                                },
                                duration: .6,
                                ease: ot.lD.easeOut
                            }), t.to(e, {
                                pixi: {
                                    y: "-=200",
                                    scaleY: 1.126
                                },
                                duration: .2,
                                ease: ot.lD.easeIn
                            }), t.to(e, {
                                pixi: {
                                    scaleX: .82,
                                    y: "-=200"
                                },
                                duration: .4,
                                ease: ot.Yv.easeInOut
                            }), t.to(e, {
                                pixi: {
                                    angle: 180
                                },
                                duration: .8,
                                ease: ot.bJ.easeNone
                            }, "<"), t.to(e, {
                                pixi: {
                                    scaleX: 1,
                                    scaleY: 1,
                                    y: n
                                },
                                duration: .8,
                                ease: ot.lD.easeOut
                            }, "<0.6"), t.to(e, {
                                pixi: {
                                    y: "-=20"
                                },
                                duration: 1,
                                yoyo: !0,
                                repeat: -1,
                                ease: ot.lD.easeInOut
                            }), this.timeline = t
                        }
                    }]), o
                }(se);
                const be = JSON.parse('{"alpha":{"start":1,"end":1},"scale":{"start":1,"end":1,"minimumScaleMultiplier":1},"color":{"start":"#ffffff","end":"#ffffff"},"speed":{"start":1200,"end":100,"minimumSpeedMultiplier":1},"acceleration":{"x":0,"y":500},"maxSpeed":0,"startRotation":{"min":230,"max":310},"noRotation":false,"rotationSpeed":{"min":-500,"max":500},"lifetime":{"min":0.1,"max":4},"blendMode":"normal","frequency":0.005,"emitterLifetime":0.2,"maxParticles":1000,"pos":{"x":0,"y":0},"emit":false,"addAtBack":false,"spawnType":"rect","spawnRect":{"x":0,"y":0,"w":200,"h":0}}');
                var xe = function(t) {
                    (0, h.Z)(o, t);
                    var e, n, i = (e = o, n = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                        } catch (t) {
                            return !1
                        }
                    }(), function() {
                        var t, i = (0, d.Z)(e);
                        if (n) {
                            var r = (0, d.Z)(this).constructor;
                            t = Reflect.construct(i, arguments, r)
                        } else t = i.apply(this, arguments);
                        return (0, f.Z)(this, t)
                    });

                    function o() {
                        var t;
                        return (0, c.Z)(this, o), (t = i.call(this)).emitters = [], t
                    }
                    return (0, u.Z)(o, [{
                        key: "create",
                        value: function(t, e, n) {
                            var i = this,
                                r = ["frosting-chunk-3", "frosting-chunk-1", "frosting-chunk-2", "sprinkle-6", "sprinkle-1", "sprinkle-2", "sprinkle-3", "sprinkle-4", "sprinkle-5", "sprinkle-6", "sprinkle-1", "sprinkle-2", "sprinkle-3", "sprinkle-4", "sprinkle-5"];
                            n.cakeLayers.children.forEach((function(t) {
                                var e = new s.TYe(1e3, {
                                    rotation: !0,
                                    uvs: !0,
                                    vertices: !0
                                });
                                t.addChildAt(e, 0);
                                var n = new at.Q5(e, (0, at.oC)(be, r));
                                n.updateSpawnPos(-100, -200), n.autoUpdate = !0, n.addAtBack = !0, i.emitters.push(n)
                            })), this.particleRain = new s.TYe, t.addChild(this.particleRain);
                            var o = Object.assign({}, ye);
                            o = Object.assign(o, {
                                noRotation: !1,
                                rotationSpeed: {
                                    min: -500,
                                    max: 500
                                },
                                scale: {
                                    start: 1.3,
                                    end: 1.3,
                                    minimumScaleMultiplier: .2
                                }
                            }), this.rainEmitter = new at.Q5(this.particleRain, (0, at.oC)(o, r))
                        }
                    }, {
                        key: "play",
                        value: function(t) {
                            var e = this,
                                n = r.ZP.timeline({
                                    repeat: -1,
                                    repeatDelay: 5
                                });
                            n.to(t.cakeLayers, {
                                pixi: {
                                    scaleX: 1,
                                    scaleY: 1.05
                                },
                                duration: .3,
                                ease: ot.Ll.easeOut
                            }), n.to(t.cakeLayers, {
                                pixi: {
                                    scaleX: 1,
                                    scaleY: .98
                                },
                                duration: .6,
                                ease: ot.Ll.easeOut
                            }), n.to(t.cakeLayers, {
                                pixi: {
                                    scaleX: 1,
                                    scaleY: 1
                                },
                                duration: 1,
                                ease: ot.tQ.easeOut
                            }), n.call((function() {
                                e.rainEmitter.emit = !0, e.emitters.forEach((function(t) {
                                    return t.playOnce()
                                }))
                            }), null, "<"), this.timeline = n, this.rainEmitter.autoUpdate = !0, this.rainEmitter.emit = !1
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            this.rainEmitter.destroy(), this.emitters.forEach((function(t) {
                                return t.destroy()
                            }))
                        }
                    }]), o
                }(se);
                var Ze, _e = {
                        alice: new s.E9j(-553, -317),
                        rabit: new s.E9j(-529, -266),
                        cat: new s.E9j(-479, -156),
                        rosa: new s.E9j(-529, -288),
                        hatter: new s.E9j(-559, -288)
                    },
                    Ce = function(t) {
                        (0, h.Z)(l, t);
                        var e, n, i, o, a = (i = l, o = function() {
                            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                            if (Reflect.construct.sham) return !1;
                            if ("function" == typeof Proxy) return !0;
                            try {
                                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                            } catch (t) {
                                return !1
                            }
                        }(), function() {
                            var t, e = (0, d.Z)(i);
                            if (o) {
                                var n = (0, d.Z)(this).constructor;
                                t = Reflect.construct(e, arguments, n)
                            } else t = e.apply(this, arguments);
                            return (0, f.Z)(this, t)
                        });

                        function l() {
                            var t;
                            return (0, c.Z)(this, l), (t = a.call(this)).magicEffect = null, t.cake = null, t
                        }
                        return (0, u.Z)(l, [{
                            key: "load",
                            value: function() {
                                return this.characterName = this.sceneManager.changeData.data.character || "alice", Promise.all([(0, q.Z)((0, d.Z)(l.prototype), "load", this).call(this), this.loadCharacter(this.characterName)])
                            }
                        }, {
                            key: "loadCharacter",
                            value: (n = (0, nt.Z)(rt().mark((function t(e) {
                                return rt().wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return t.next = 2, s.xEZ.fromURL("assets/images/results/friend-".concat(e, ".png"));
                                        case 2:
                                            this.characterTexture = t.sent;
                                        case 3:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this)
                            }))), function(t) {
                                return n.apply(this, arguments)
                            })
                        }, {
                            key: "buildScene",
                            value: function() {
                                var t = s.P6Y.TextureCache;
                                this.background = new s.jyi(t["background-kitchen-blur"]), this.background.anchor.set(.5), this.character = new s.jyi(this.characterTexture), this.character.position.copyFrom(_e[this.characterName].add(new s.E9j(-900, 0))), this.table = new s.jyi(t["kitchen-table"]), this.table.anchor.set(.5, 1), this.table.position.y = 505, this.backEffectLayer = new s.W20, this.frontEffectLayer = new s.W20, this.cake = this.sceneManager.changeData.data.cake || new ae(Qt), this.cake.preserve = !1, this.cake.position.set(0, 260), this.cake.addRevealEmitter(), this.rewardOverlay = new $t, this.replayButton = new lt(t["button-replay"]), this.replayButton.useScreenAnchor = !0, this.replayButton.screenAnchor.set(1, 1), this.replayButton.screenAnchorOffset.set(-106, -130), this.replayButton.on("pointertap", this._onReplayClick, this), this.fireworks = new pe, this.view.addChild(this.background, this.backEffectLayer, this.fireworks, this.character, this.table, this.cake, this.frontEffectLayer, this.rewardOverlay, this.replayButton);
                                var e = this.sceneManager.changeData.data.magic || "upside-down";
                                this.applyMagic(e)
                            }
                        }, {
                            key: "unlockNextItem",
                            value: function() {
                                var t = W.unlockDecoration();
                                t && this.rewardOverlay.setItem(t)
                            }
                        }, {
                            key: "onTransitionOut",
                            value: function() {
                                V.play("bg-music-ingredient-reveal")
                            }
                        }, {
                            key: "animateIn",
                            value: (e = (0, nt.Z)(rt().mark((function t() {
                                var e = this;
                                return rt().wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return V.play("bg-music-ingredient-reveal"), C.play("cake-ingredient-reveal"), r.ZP.delayedCall(.3, (function() {
                                                return e.cake.stopRevealEmitter()
                                            })), this.cake.addSparkles(), t.next = 6, r.ZP.to(this.character, {
                                                pixi: {
                                                    x: "+=900"
                                                },
                                                duration: 2,
                                                ease: ot.Ll.easeOut
                                            });
                                        case 6:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this)
                            }))), function() {
                                return e.apply(this, arguments)
                            })
                        }, {
                            key: "start",
                            value: function() {
                                var t = this;
                                (0, q.Z)((0, d.Z)(l.prototype), "start", this).call(this), this.playEffect(), this.unlockNextItem(), this.replayButton.enabled = !0;
                                var e = Jt[this.characterName];
                                T.play(e.next, (function() {
                                    r.ZP.delayedCall(2, (function() {
                                        return t.showReward()
                                    }))
                                }))
                            }
                        }, {
                            key: "showReward",
                            value: function() {
                                var t = this;
                                this.rewardOverlay.ready && (this.rewardOverlay.show(), r.ZP.delayedCall(8, (function() {
                                    return t.rewardOverlay.hide()
                                })))
                            }
                        }, {
                            key: "end",
                            value: function() {
                                (0, q.Z)((0, d.Z)(l.prototype), "end", this).call(this), this.replayButton.enabled = !1
                            }
                        }, {
                            key: "applyMagic",
                            value: function(t) {
                                switch (t) {
                                    case "rainwater-melon":
                                        this.magicEffect = new me, this.magicEffect.create(this.frontEffectLayer, this.backEffectLayer);
                                        break;
                                    case "bubblesprout":
                                        this.magicEffect = new ue, this.magicEffect.create(this.frontEffectLayer, this.backEffectLayer);
                                        break;
                                    case "wish-sprinkles":
                                        this.magicEffect = new xe, this.magicEffect.create(this.frontEffectLayer, this.backEffectLayer, this.cake);
                                        break;
                                    case "upside-down":
                                        this.magicEffect = new we, this.magicEffect.create(this.cake);
                                        break;
                                    case "flourishing-powder":
                                        this.magicEffect = new ve, this.magicEffect.create(this.frontEffectLayer, this.backEffectLayer);
                                        break;
                                    case "dodo-egg":
                                        this.magicEffect = new le, this.magicEffect.create(this.cake);
                                        break;
                                    case "shrinking-powder":
                                        this.magicEffect = new ke, this.magicEffect.create(this.cake)
                                }
                            }
                        }, {
                            key: "playEffect",
                            value: function(t) {
                                this.magicEffect && this.magicEffect.play && this.magicEffect.play(this.cake)
                            }
                        }, {
                            key: "destroy",
                            value: function() {
                                this.magicEffect && this.magicEffect.destroy()
                            }
                        }, {
                            key: "_onReplayClick",
                            value: function() {
                                v.i$.go(Q)
                            }
                        }]), l
                    }(pt),
                    Re = n(4942),
                    Pe = (Ze = {}, (0, Re.Z)(Ze, Zt, new Ft(["add-butter-1", "add-butter-2"])), (0, Re.Z)(Ze, Ct, new Ft(["add-egg-1", "add-egg-2"])), (0, Re.Z)(Ze, xt, new Ft(["add-sugar-1", "add-sugar-2"])), (0, Re.Z)(Ze, bt, new Ft(["add-flour-1"])), (0, Re.Z)(Ze, "genericLiquid", new Ft(["add-liquid-1", "add-liquid-2"])), (0, Re.Z)(Ze, "genericSolid", new Ft(["add-butter-1", "add-butter-2"])), Ze),
                    Se = new Ft(["cut-1", "cut-2", "cut-3"]);

                function Oe(t, e) {
                    var n = e.x - t.x,
                        i = e.y - t.y,
                        r = 0;
                    return void 0 !== t.z && void 0 !== e.z && (r = e.z - t.z), Math.sqrt(Math.pow(n, 2) + Math.pow(i, 2) + Math.pow(r, 2))
                }

                function Te(t, e) {
                    return Math.atan2(t.y - e.y, t.x - e.x)
                }
                var Be = function(t) {
                    (0, h.Z)(r, t);
                    var e, n, i = (e = r, n = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                        } catch (t) {
                            return !1
                        }
                    }(), function() {
                        var t, i = (0, d.Z)(e);
                        if (n) {
                            var r = (0, d.Z)(this).constructor;
                            t = Reflect.construct(i, arguments, r)
                        } else t = i.apply(this, arguments);
                        return (0, f.Z)(this, t)
                    });

                    function r() {
                        var t;
                        (0, c.Z)(this, r), (t = i.call(this))._startPoint = new s.E9j, t._endPoint = new s.E9j, t._midPoint = new s.E9j;
                        for (var e = s.P6Y.TextureCache["cutting-dot"], n = 0; n < 30; n++) {
                            var o = new s.jyi(e);
                            o.pivot.set(15, 11), o.visible = !1, t.addChild(o)
                        }
                        return t
                    }
                    return (0, u.Z)(r, [{
                        key: "startPoint",
                        get: function() {
                            return this._startPoint
                        },
                        set: function(t) {
                            this._startPoint = t, this._updateMidPoint()
                        }
                    }, {
                        key: "endPoint",
                        get: function() {
                            return this._endPoint
                        },
                        set: function(t) {
                            this._endPoint = t, this._updateMidPoint()
                        }
                    }, {
                        key: "midPoint",
                        get: function() {
                            return this._midPoint
                        }
                    }, {
                        key: "lineAngle",
                        get: function() {
                            var t = this._startPoint,
                                e = this._endPoint;
                            if (!t || !e) return 0;
                            var n = e.x - t.x,
                                i = e.y - t.y;
                            return Math.atan2(i, n)
                        }
                    }, {
                        key: "getLocalPoints",
                        value: function(t) {
                            var e = this.getExtendedLine();
                            return {
                                startPoint: t.toLocal(e.startPoint, this),
                                endPoint: t.toLocal(e.endPoint, this)
                            }
                        }
                    }, {
                        key: "getExtendedLine",
                        value: function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 4,
                                e = this._startPoint,
                                n = this._endPoint,
                                i = this._midPoint,
                                r = Oe(e, n) / 2,
                                o = Te(i, n),
                                a = Te(i, e);
                            return {
                                startPoint: new s.E9j(i.x + Math.cos(a) * r * t, i.y + Math.sin(a) * r * t),
                                endPoint: new s.E9j(i.x + Math.cos(o) * r * t, i.y + Math.sin(o) * r * t)
                            }
                        }
                    }, {
                        key: "_updateMidPoint",
                        value: function() {
                            var t = this._startPoint,
                                e = this._endPoint,
                                n = this._midPoint;
                            n.x = (t.x + e.x) / 2, n.y = (t.y + e.y) / 2
                        }
                    }, {
                        key: "tick",
                        value: function(t, e) {
                            if (this.visible) {
                                var n = this._startPoint,
                                    i = this._endPoint,
                                    r = 0,
                                    o = 0;
                                n && (r = this.lineAngle, o = Oe(n, i));
                                for (var a = this.children, s = 0, c = a.length; s < c; s++) {
                                    var u = a[s];
                                    if (u.visible = !1, n) {
                                        u.x = n.x + 30 * Math.cos(r) * s, u.y = n.y + 30 * Math.sin(r) * s;
                                        var l = Oe(n, u.position);
                                        u.visible = l < o
                                    }
                                }
                            }
                        }
                    }]), r
                }(s.W20);
                var Ie = function(t) {
                    (0, h.Z)(a, t);
                    var e, n, i, o = (n = a, i = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                        } catch (t) {
                            return !1
                        }
                    }(), function() {
                        var t, e = (0, d.Z)(n);
                        if (i) {
                            var r = (0, d.Z)(this).constructor;
                            t = Reflect.construct(e, arguments, r)
                        } else t = e.apply(this, arguments);
                        return (0, f.Z)(this, t)
                    });

                    function a() {
                        var t;
                        return (0, c.Z)(this, a), (t = o.call(this)).tickChildren = !0, t.visible = !1, t.alpha = 0, t.handSprite = new s.jyi(s.P6Y.TextureCache["demo-hand"]), t.handSprite.pivot.set(15, 13), t.addChild(t.handSprite), t
                    }
                    return (0, u.Z)(a, [{
                        key: "showCuttingDemo",
                        value: (e = (0, nt.Z)(rt().mark((function t() {
                            var e;
                            return rt().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return this.reset(), this.cuttingLine = new Be, this.addChildAt(this.cuttingLine, 0), this.visible = !0, this.alpha = 0, this.handSprite.position.set(-80, -200), this.cuttingLine.startPoint.set(-95, -250), this.cuttingLine.endPoint.set(-95, -250), (e = this.timeline = r.ZP.timeline({
                                            repeat: -1,
                                            repeatDelay: 1,
                                            defaults: {
                                                ease: ot.Ll.easeInOut,
                                                duration: .8
                                            }
                                        })).to(this, {
                                            alpha: 1,
                                            duration: .6,
                                            ease: ot.lD.easeInOut
                                        }), e.to(this.handSprite, {
                                            x: -95,
                                            y: -250
                                        }), e.to(this.handSprite, {
                                            pixi: {
                                                scale: .9
                                            },
                                            duration: .4
                                        }), e.to(this.handSprite, {
                                            x: 95,
                                            y: 250,
                                            duration: 1
                                        }), e.to(this.cuttingLine.endPoint, {
                                            x: 95,
                                            y: 250,
                                            duration: 1
                                        }, "<"), e.to(this.handSprite, {
                                            pixi: {
                                                scale: 1
                                            },
                                            duration: .2
                                        }), e.to(this.cuttingLine, {
                                            alpha: 0,
                                            duration: .3
                                        }, "<"), e.to(this, {
                                            alpha: 0,
                                            duration: .6,
                                            ease: ot.lD.easeInOut
                                        }), t.next = 19, e.play();
                                    case 19:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this)
                        }))), function() {
                            return e.apply(this, arguments)
                        })
                    }, {
                        key: "reset",
                        value: function() {
                            this.timeline && this.timeline.kill(), this.timeline = null, this.removeChildren(), this.addChild(this.handSprite)
                        }
                    }, {
                        key: "destroy",
                        value: function(t) {
                            this.reset(), (0, q.Z)((0, d.Z)(a.prototype), "destroy", this).call(this, t)
                        }
                    }]), a
                }(s.W20);
                const Ae = JSON.parse('{"banana-l":{"spriteRegX":0,"spriteRegY":0,"polygons":[[318,-4,324,-4,329,1,326,94,338,112,352,146,358,178,358,216,355,238,343,280,315,339,292,372,260,403,220,428,177,449,150,457,106,467,59,464,25,450,6,430,-2,417,-5,407,2,389,16,381,78,356,137,320,175,293,222,241,241,206,271,136,295,94,296,76,289,3,317,-4]]},"chocolate-l":{"spriteRegX":0,"spriteRegY":0,"polygons":[[345,-5,357,14,457,301,451,335,91,444,-2,136,-5,110,44,77,120,65,168,38,232,29,291,3]]},"heart-apple-l":{"spriteRegX":0,"spriteRegY":0,"polygons":[[181,-2,222,54,248,124,267,81,306,56,361,44,423,44,428,59,340,96,314,117,387,120,445,159,472,217,473,269,454,323,342,415,295,483,265,497,224,494,197,479,156,399,49,290,5,211,3,169,13,129,43,93,83,65,143,57,184,73,213,91,207.5,71,162,18,163,1]]},"honeycomb-l":{"spriteRegX":0,"spriteRegY":0,"polygons":[[305,-2,359,44,402,115,385,148,394,175,381,206,352,240,366,296,329,379,307,403,264,411,247,443,219,446,164,395,125,359,115,322,75,328,26,274,-4,189,54,98,148,91,205,4,260,-2]]},"lemon-l":{"spriteRegX":0,"spriteRegY":0,"polygons":[[199,-5,273,-2,349,17,388,45,423,87,473,114,493,161,477,200,400,303,350,339,290,363,185,370,110,346,54,295,-5,200,-1,170,67,56,132,9]]},"marshmallow-l":{"spriteRegX":0,"spriteRegY":0,"polygons":[[270,-6,338,8,387,36,403,87,368,148,417,136,462,149,488,178,498,227,496,277,465,318,423,335,359,328,385,373,388,427,355,471,299,493,238,482,204,456,190,419,194,361,152,403,117,416,76,425,20,395,-7,335,-8,297,11,260,45,234,80,227,38,206,14,166,15,124,30,89,71,47,130,35,178,63,203,107,207,37,228,8]]},"sparkleberry-l":{"spriteRegX":0,"spriteRegY":0,"polygons":[[309,45,309,87,365,75,419,74,380,133,443,161,413,183,441,206,453,238,451,275,434,305,446,340,441,376,407,411,348,476,293,483,260,516,154,516,123,498,108,478,67,462,53,426,5,363,-7,319,11,282,-4,259,-1,225,16,199,46,174,63,126,114,98,148,99,140,5,185,30,228,76,262,1,276,-6]]},"strawberry-l":{"spriteRegX":0,"spriteRegY":0,"polygons":[[110,-6,148,3,167,55,186,20,230,17,235,43,227,62,251,54,280,69,278,85,309,93,340,120,373,168,377,262,367,358,334,434,314,473,283,483,212,462,109,414,37,356,0,296,-9,230,17,174,-4,164,-5,141,20,120,46,114,16,91,15,60,37,48,61,47,106,83,80,29,85,7]]}}');
                var Le = function(t) {
                    (0, h.Z)(o, t);
                    var e, n, r = (e = o, n = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                        } catch (t) {
                            return !1
                        }
                    }(), function() {
                        var t, i = (0, d.Z)(e);
                        if (n) {
                            var r = (0, d.Z)(this).constructor;
                            t = Reflect.construct(i, arguments, r)
                        } else t = i.apply(this, arguments);
                        return (0, f.Z)(this, t)
                    });

                    function o() {
                        return (0, c.Z)(this, o), r.apply(this, arguments)
                    }
                    return (0, u.Z)(o, [{
                        key: "slice",
                        value: function(t) {
                            var e = t.startPoint,
                                n = t.endPoint;
                            if (this.contains(e) || this.contains(n)) return !1;
                            for (var r = [], o = this.getUnflattenPoints(), a = 0; a < o.length; a++) {
                                var s = o[a],
                                    c = o[(a + 1) % o.length],
                                    u = (0, i.$T)(e, n, s, c);
                                u && !isNaN(u.x) && (0 === r.length || Oe(u, r[0]) > 1e-10 || Oe(u, r[r.length - 1]) > 1e-10) && (u.intersection = !0, r.push(u), o.splice(a + 1, 0, u), a++)
                            }
                            if (r.length < 2) return [this.points.slice(0)];
                            r.sort((function(t, n) {
                                return Oe(e, t) - Oe(e, n)
                            }));
                            for (var l = o.slice(0), h = function(t) {
                                    t++;
                                    for (var e = 0, n = l.length; e < n; e++) {
                                        var i = (e + t) % n;
                                        if (!0 === l[i].intersection) return i
                                    }
                                    return !1
                                }, f = [], d = 0; r.length > 0;) {
                                var p = !1,
                                    v = r[0],
                                    y = r[1],
                                    g = l.indexOf(v),
                                    m = l.indexOf(y);
                                if (h(g) === m ? p = !0 : (v = r[1], y = r[0], g = l.indexOf(v), m = l.indexOf(y), h(g) === m && (p = !0)), p) {
                                    d--;
                                    var k = this._splitPoints(l, g, m);
                                    f.push(k), l = this._splitPoints(l, m, g), v.intersection = y.intersection = !1, r.splice(0, 2), 0 === r.length && f.push(l)
                                } else d++, r.reverse();
                                if (d > 1) {
                                    console.warn("SLICE POLYGON");
                                    break
                                }
                            }
                            for (var w = [], b = 0; b < f.length; b++) w.push(f[b]);
                            return w
                        }
                    }, {
                        key: "getUnflattenPoints",
                        value: function() {
                            for (var t = [], e = 0; e < this.points.length; e += 2) t.push(new s.E9j(this.points[e], this.points[e + 1]));
                            return t
                        }
                    }, {
                        key: "_splitPoints",
                        value: function(t, e, n) {
                            var i = t.length,
                                r = [];
                            n < e && (n += i);
                            for (var o = e; o <= n; o++) r.push(t[o % i]);
                            return r
                        }
                    }, {
                        key: "getBounds",
                        value: function() {
                            var t, e, n, i, r = this.points;
                            if (r.length / 2 < 3) return {
                                x: 0,
                                y: 0,
                                width: 0,
                                height: 0
                            };
                            t = e = r[0], n = i = r[1];
                            for (var o = 2; o < r.length; o += 2) r[o] < t && (t = r[o]), r[o] > e && (e = r[o]), r[o + 1] < n && (n = r[o + 1]), r[o + 1] > i && (i = r[o + 1]);
                            return {
                                x: t,
                                y: n,
                                width: e - t,
                                height: i - n
                            }
                        }
                    }]), o
                }(s.mgq);
                var Ee = function(t) {
                    (0, h.Z)(r, t);
                    var e, n, i = (e = r, n = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                        } catch (t) {
                            return !1
                        }
                    }(), function() {
                        var t, i = (0, d.Z)(e);
                        if (n) {
                            var r = (0, d.Z)(this).constructor;
                            t = Reflect.construct(i, arguments, r)
                        } else t = i.apply(this, arguments);
                        return (0, f.Z)(this, t)
                    });

                    function r(t, e, n) {
                        var o;
                        return (0, c.Z)(this, r), (o = i.call(this, t)).pivot.set(o.width / 2, o.height / 2), o._polygon = null, o.mask = new s.TCu, o.addChild(o.mask), o.maskPreview = new s.TCu, o.center = new s.TCu, o.center.beginFill(16711680), o.center.drawCircle(0, 0, 10), n && (o.position.copyFrom(n.position), o.pivot.copyFrom(n.pivot)), o.setPolygonPoints(e), o
                    }
                    return (0, u.Z)(r, [{
                        key: "polygon",
                        get: function() {
                            return this._polygon
                        },
                        set: function(t) {
                            this._polygon = t, this._updateMask(), this._updatePivot()
                        }
                    }, {
                        key: "setPolygonPoints",
                        value: function(t) {
                            this.polygon = new Le(t)
                        }
                    }, {
                        key: "_updateMask",
                        value: function() {
                            this.mask.clear(), this.mask.beginFill(0), this.mask.drawPolygon(this._polygon), this.maskPreview.clear(), this.maskPreview.beginFill(16711680, .4), this.maskPreview.drawPolygon(this._polygon)
                        }
                    }, {
                        key: "_updatePivot",
                        value: function() {
                            var t = this.polygon.getBounds(),
                                e = this.pivot.clone();
                            this.pivot.set(t.x + t.width / 2, t.y + t.height / 2), this.position.copyFrom(this.position.add(this.pivot.subtract(e))), this.center.position.copyFrom(this.pivot)
                        }
                    }]), r
                }(s.jyi);
                var De = function(t) {
                    (0, h.Z)(r, t);
                    var e, n, i = (e = r, n = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                        } catch (t) {
                            return !1
                        }
                    }(), function() {
                        var t, i = (0, d.Z)(e);
                        if (n) {
                            var r = (0, d.Z)(this).constructor;
                            t = Reflect.construct(i, arguments, r)
                        } else t = i.apply(this, arguments);
                        return (0, f.Z)(this, t)
                    });

                    function r(t, e, n) {
                        var o;
                        (0, c.Z)(this, r), o = i.call(this, null, e, n);
                        var a = new s.jyi(o.getFlattenTexture(t));
                        return a.anchor.set(.5), o.addChild(a), o.scale.set(.3), o
                    }
                    return (0, u.Z)(r, [{
                        key: "getFlattenTexture",
                        value: function(t) {
                            var e = t.polygon.getBounds(),
                                n = s.TIb.create({
                                    width: e.width,
                                    height: e.height,
                                    scaleMode: s.aH$.LINEAR,
                                    resolution: .5
                                }),
                                i = t.position.clone();
                            return t.position.set(e.width / 2, e.height / 2), ii.instance.renderer.render(t, {
                                renderTexture: n
                            }), t.position.copyFrom(i), n
                        }
                    }]), r
                }(Pt);
                var Me = function(t) {
                    (0, h.Z)(a, t);
                    var e, n, i, o = (n = a, i = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                        } catch (t) {
                            return !1
                        }
                    }(), function() {
                        var t, e = (0, d.Z)(n);
                        if (i) {
                            var r = (0, d.Z)(this).constructor;
                            t = Reflect.construct(e, arguments, r)
                        } else t = e.apply(this, arguments);
                        return (0, f.Z)(this, t)
                    });

                    function a() {
                        var t;
                        return (0, c.Z)(this, a), (t = o.call(this)).ingredientData = null, t.ready = !1, t
                    }
                    return (0, u.Z)(a, [{
                        key: "addItem",
                        value: (e = (0, nt.Z)(rt().mark((function t(e, n, i) {
                            var o;
                            return rt().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return this.ready = !1, this.sprite && (o = i !== this.sprite.texture, this.sprite.destroy({
                                            texture: o,
                                            baseTexture: o
                                        })), this.ingredientData = e, this.sprite = new Ee(i, Ae[n].polygons[0]), this.sprite.y = 600, this.sprite.angle = 20, this.addChild(this.sprite), t.next = 9, r.ZP.to(this.sprite, {
                                            pixi: {
                                                y: 0,
                                                angle: 0
                                            },
                                            duration: 1,
                                            ease: ot.gU.easeOut
                                        });
                                    case 9:
                                        this.ready = !0;
                                    case 10:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this)
                        }))), function(t, n, i) {
                            return e.apply(this, arguments)
                        })
                    }, {
                        key: "sliceAt",
                        value: function(t) {
                            for (var e = this.children.slice(0), n = [], i = 0; i < e.length; i++) {
                                var o = e[i],
                                    a = o.polygon.slice(t.getLocalPoints(o));
                                if (a && a.length > 1) {
                                    for (var c = 1; c < a.length; c++) {
                                        var u = new Ee(o.texture, a[c], o);
                                        this.addChild(u), n.push(u)
                                    }
                                    o.setPolygonPoints(a[0]), n.push(o)
                                }
                            }
                            var l = this.toLocal(t.midPoint, t),
                                h = t.lineAngle + Math.PI / 2,
                                f = t.lineAngle - Math.PI / 2,
                                d = new s.E9j(l.x + 200 * Math.cos(h), l.y + 200 * Math.sin(h)),
                                p = new s.E9j(l.x + 200 * Math.cos(f), l.y + 200 * Math.sin(f));
                            n.forEach((function(t) {
                                var e = h;
                                Oe(t.position, d) > Oe(t.position, p) && (e = f), r.ZP.to(t, {
                                    pixi: {
                                        x: t.x + 15 * Math.cos(e),
                                        y: t.y + 15 * Math.sin(e)
                                    },
                                    duration: .1,
                                    ease: ot.Ll.easeOut
                                })
                            }))
                        }
                    }, {
                        key: "getAngle",
                        value: function(t, e) {
                            return Math.atan2(t.y - e.y, t.x - e.x)
                        }
                    }, {
                        key: "getSlices",
                        value: function() {
                            var t = this.ingredientData;
                            return this.children.map((function(e) {
                                return new De(e, t.name, t)
                            }))
                        }
                    }]), a
                }(s.W20);
                var je = function(t) {
                    (0, h.Z)(o, t);
                    var e, n, i, r = (n = o, i = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                        } catch (t) {
                            return !1
                        }
                    }(), function() {
                        var t, e = (0, d.Z)(n);
                        if (i) {
                            var r = (0, d.Z)(this).constructor;
                            t = Reflect.construct(e, arguments, r)
                        } else t = e.apply(this, arguments);
                        return (0, f.Z)(this, t)
                    });

                    function o() {
                        return (0, c.Z)(this, o), r.call(this)
                    }
                    return (0, u.Z)(o, [{
                        key: "buildScene",
                        value: function() {
                            var t = this,
                                e = s.P6Y.TextureCache;
                            this.background = new s.jyi(e["background-cutting"]), this.background.anchor.set(.5), this.background.interactive = !0, this.cuttingLine = new Be, this.cuttingContainer = new Me, this.pantry = new Dt, this.dragLayer = new kt("default", (function() {
                                return t._onDragStart()
                            })), this.dragLayer.addDropZone(new Yt({
                                id: "cutting",
                                rect: new s.AeJ(-407, -384, 815, 768),
                                local: this.background,
                                triggerOnOver: !1,
                                onDrop: function(e) {
                                    return t._onDragDrop(e)
                                }
                            })), this.view.addChild(this.background, this.cuttingContainer, this.cuttingLine, this.pantry, this.dragLayer)
                        }
                    }, {
                        key: "start",
                        value: function() {
                            (0, q.Z)((0, d.Z)(o.prototype), "start", this).call(this), this.pantry.openButton.show();
                            var t = this.sceneManager.changeData.data.ingredientData;
                            t ? this._loadAndAddIngredient(t) : T.play("vo-inact-bowl-7"), this.background.on("pointerdown", this._onPointerEvent, this), this.background.hitArea = new s.AeJ(-408, -384, 816, 768)
                        }
                    }, {
                        key: "end",
                        value: function() {
                            (0, q.Z)((0, d.Z)(o.prototype), "end", this).call(this), this.background.removeAllListeners()
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            this.cuttingContainer.sprite && this.cuttingContainer.sprite.destroy({
                                texture: !0,
                                baseTexture: !0
                            }), (0, q.Z)((0, d.Z)(o.prototype), "destroy", this).call(this)
                        }
                    }, {
                        key: "_onIngredientReady",
                        value: function() {
                            T.play("vo-instruct-13"), W.hasTimerExpired(N.CUTTING) && this._startDemoHand()
                        }
                    }, {
                        key: "_startDemoHand",
                        value: function() {
                            this.demoHand || (this.demoHand = new Ie, this.view.addChild(this.demoHand), this.demoHand.showCuttingDemo())
                        }
                    }, {
                        key: "_stopDemoHand",
                        value: function() {
                            this.demoHand && (W.recordTimer(N.CUTTING), this.demoHand.destroy()), this.demoHand = null
                        }
                    }, {
                        key: "_onPointerEvent",
                        value: function(t) {
                            if (this.idler.reset(), this.cuttingContainer.ready) switch (this._stopDemoHand(), t.type) {
                                case "pointerdown":
                                    C.play("cut-bubble"), this.cuttingLine.startPoint = this.background.toLocal(t.data.global), this.cuttingLine.endPoint = this.background.toLocal(t.data.global), this.cuttingLine.visible = !0, this.background.on("pointermove", this._onPointerEvent, this), this.background.on("pointerup", this._onPointerEvent, this), this.background.on("pointerupoutside", this._onPointerEvent, this);
                                    break;
                                case "pointermove":
                                    this.cuttingLine.endPoint = this.background.toLocal(t.data.global);
                                    break;
                                case "pointerup":
                                case "pointerupoutside":
                                    this.background.off("pointermove").off("pointerup").off("pointerupoutside"), C.play(Se.next), this.pantry.openButton.hide(), this.pantry.close(), this.cuttingContainer.sliceAt(this.cuttingLine), this.cuttingLine.visible = !1, this.cuttingContainer.children.length >= 5 && this._onCuttingComplete()
                            }
                        }
                    }, {
                        key: "_onCuttingComplete",
                        value: function() {
                            this.idler.stop(), this.cuttingContainer.ingredientData.cut(), v.i$.go(Q, {
                                data: {
                                    ingredientData: this.cuttingContainer.ingredientData,
                                    items: this.cuttingContainer.getSlices(),
                                    sceneData: this.sceneManager.changeData.data.sceneData
                                }
                            })
                        }
                    }, {
                        key: "_onIdle",
                        value: function() {
                            this.cuttingContainer.ready ? (T.play(qt.CUTTING.next), this._startDemoHand()) : this.pantry._opened || T.play("vo-inact-bowl-7")
                        }
                    }, {
                        key: "_onDragStart",
                        value: function() {
                            this.pantry.close()
                        }
                    }, {
                        key: "_onDragDrop",
                        value: function(t) {
                            this._loadAndAddIngredient(t.data)
                        }
                    }, {
                        key: "_loadAndAddIngredient",
                        value: (e = (0, nt.Z)(rt().mark((function t(e) {
                            var n, i;
                            return rt().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return n = "".concat(e.name, "-l"), t.next = 3, s.xEZ.fromURL("assets/images/ingredients/".concat(n, ".png"));
                                    case 3:
                                        return i = t.sent, t.next = 6, this.cuttingContainer.addItem(e, n, i);
                                    case 6:
                                        this._onIngredientReady();
                                    case 7:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this)
                        }))), function(t) {
                            return e.apply(this, arguments)
                        })
                    }]), o
                }(pt);
                var Ye = function(t) {
                    (0, h.Z)(v, t);
                    var e, n, i, o, a, p = (o = v, a = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                        } catch (t) {
                            return !1
                        }
                    }(), function() {
                        var t, e = (0, d.Z)(o);
                        if (a) {
                            var n = (0, d.Z)(this).constructor;
                            t = Reflect.construct(e, arguments, n)
                        } else t = e.apply(this, arguments);
                        return (0, f.Z)(this, t)
                    });

                    function v() {
                        var t;
                        return (0, c.Z)(this, v), (t = p.call(this)).lines = [], t.createDisplay(), T.on(P, t.onVOStart, (0, l.Z)(t)), T.on(S, t.onVOEnd, (0, l.Z)(t)), t
                    }
                    return (0, u.Z)(v, [{
                        key: "props",
                        get: function() {
                            return {
                                show: {},
                                hide: {}
                            }
                        }
                    }, {
                        key: "createDisplay",
                        value: function() {
                            this.display = new s.W20, this.addChild(this.display), this.display.x = this.props.hide.x, this.display.visible = !1
                        }
                    }, {
                        key: "show",
                        value: (i = (0, nt.Z)(rt().mark((function t() {
                            return rt().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, r.ZP.to(this.display, {
                                            visible: !0,
                                            pixi: this.props.show,
                                            overwrite: !0,
                                            duration: .5,
                                            ease: ot.Ll.easeOut
                                        });
                                    case 2:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this)
                        }))), function() {
                            return i.apply(this, arguments)
                        })
                    }, {
                        key: "hide",
                        value: (n = (0, nt.Z)(rt().mark((function t() {
                            return rt().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, r.ZP.to(this.display, {
                                            overwrite: !0,
                                            visible: !0,
                                            pixi: this.props.hide,
                                            duration: .5,
                                            ease: ot.Ll.easeIn
                                        });
                                    case 2:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this)
                        }))), function() {
                            return n.apply(this, arguments)
                        })
                    }, {
                        key: "playLines",
                        value: (e = (0, nt.Z)(rt().mark((function t(e) {
                            var n, i, r = arguments;
                            return rt().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return n = !(r.length > 1 && void 0 !== r[1]) || r[1], i = r.length > 2 && void 0 !== r[2] && r[2], t.next = 4, this.show();
                                    case 4:
                                        return t.next = 6, new Promise((function(t) {
                                            T.play(e, t)
                                        }));
                                    case 6:
                                        if (!n) {
                                            t.next = 13;
                                            break
                                        }
                                        if (!i) {
                                            t.next = 12;
                                            break
                                        }
                                        return t.next = 10, this.hide();
                                    case 10:
                                        t.next = 13;
                                        break;
                                    case 12:
                                        this.hide();
                                    case 13:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this)
                        }))), function(t) {
                            return e.apply(this, arguments)
                        })
                    }, {
                        key: "onVOStart",
                        value: function(t) {
                            this.lines.indexOf(t.vo) >= 0 && this.show()
                        }
                    }, {
                        key: "onVOEnd",
                        value: function(t) {
                            this.hide()
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            T.off(P, this.onVOStart, this), T.off(S, this.onVOEnd, this)
                        }
                    }]), v
                }(s.W20);
                var Ne = {
                        show: {
                            x: 135,
                            visible: !0
                        },
                        hide: {
                            x: -135,
                            visible: !1
                        }
                    },
                    We = ["vo-title", "vo-title-alt", "vo-a-63", "vo-a-64", "vo-a-65", "vo-instruct-22", "vo-encourage-1", "vo-encourage-2", "vo-encourage-3", "vo-encourage-4", "vo-encourage-5", "vo-encourage-6", "vo-cat", "vo-encourage-7", "vo-encourage-8", "vo-encourage-9", "vo-magic-1", "vo-magic-2", "vo-rain", "vo-upside-down", "vo-bouncing", "vo-shrinking", "vo-flower", "vo-bubble", "vo-wishing", "vo-rain-1", "vo-upside-down-1", "vo-bouncing-1", "vo-shrinking-1", "vo-flower-1", "vo-bubble-1", "vo-wishing-1"],
                    Fe = function(t) {
                        (0, h.Z)(r, t);
                        var e, n, i = (e = r, n = function() {
                            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                            if (Reflect.construct.sham) return !1;
                            if ("function" == typeof Proxy) return !0;
                            try {
                                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                            } catch (t) {
                                return !1
                            }
                        }(), function() {
                            var t, i = (0, d.Z)(e);
                            if (n) {
                                var r = (0, d.Z)(this).constructor;
                                t = Reflect.construct(i, arguments, r)
                            } else t = i.apply(this, arguments);
                            return (0, f.Z)(this, t)
                        });

                        function r() {
                            var t;
                            return (0, c.Z)(this, r), (t = i.call(this)).name = "HelperAlice", t.lines = We, t
                        }
                        return (0, u.Z)(r, [{
                            key: "props",
                            get: function() {
                                return Ne
                            }
                        }, {
                            key: "createDisplay",
                            value: function() {
                                (0, q.Z)((0, d.Z)(r.prototype), "createDisplay", this).call(this);
                                var t = s.P6Y.TextureCache,
                                    e = new s.jyi(t["head-backing"]);
                                e.anchor.set(.5);
                                var n = new s.jyi(t["head-alice"]);
                                n.anchor.set(.5), this.display.addChild(e, n), this.display.y = -115
                            }
                        }, {
                            key: "tick",
                            value: function(t, e) {
                                this.x = e.width / -2
                            }
                        }]), r
                    }(Ye);
                const He = JSON.parse('{"Y":{"1-more":[3,3,3,7,7,7,3,9,9,9,9,9,9,9,9,2,7,7,7,8,8,8,6,6,7,7,7,7,7,7,6,6,6,6,6,6,3,3,3,6,3,5,5,6,6,6,5,5,7,7,7,5,5,5,5,3,3,3,8,8,8,6,6,5,5,5,5,5,5,2,2,2,2,3,3,3,3,3,3,5,5,5,5,5,2,2,9,9,9,9,9,2,2,2,2,2,3,3,3],"apple":[3,3,3,3,6,6,6,3,3,3,3,3,3,5,5,5,6,6,3,3,3,3,6,6,6,6,6,7,7,7,7,3,3,3,3,3,3,3,3,4,4,4,3,3,3,3,2,2,2,2,6,6,6,6,6,6,6],"banana":[3,0,0,5,5,9,9,5,5,9,9,9,9,9,9,3,3,3,3,3],"blender":[2,2,6,6,6,9,9,9,6,6,7,7,7,6,6,6,6,3,3,3,3,3],"butter":[3,3,3,3,3,3,3,9,9,9,6,6,6,6,6,6,6,6,3,3,3,3],"chocolate":[3,3,3,3,6,6,6,6,6,6,9,9,9,9,9,9,9,3,3,3,3,2,2,9,9,9,6,6,6,6,3,3,3,3,3,3,3,3,3,3,4,4,4,4,4,4,9,9,9,9,9,6,6,6,3,3,3,3],"cookie-1-alt":[3,6,6,6,6,9,9,9,6,6,6,3,3,3,3,5,5,5,6,6,6,6,6,6,6,4,4,4,6,6,6,6,9,9,9,9,9,9,9,9,9,9],"cookie-1":[3,3,3,5,5,5,6,6,6,9,9,9,9,9,9,9,9,6,6,3,3,3,3,3,3,3,3,3,1,1,1,5,5,5,3,3,3,3,9,9,9,9,9,9,6,6,7,7,7,9,9,2,2,9,9,9,9,9,6,6,5,5,5,6,6,6,2,2,2,2,6,6,7,7,7,6,6,6,7,7,7,7,7,7,7,6,6,6,6,6,6,6,5,5,6,6,6,9,9,9,9,6,6,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,9,9,3,3,3,3,9,9,9,3,3,8,8,8,9,9,9,9,9,9,9,9,9,3,3,3,3,6,6,6,8,8,8,8,8,6,6,6,5,5,5,5,5,5,5,5,5,5,6,6,3,3,3,3,3,3,6,6,6,6,6,3,3,3,3,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,6,6,6,3,3,3,2,2,8,8,8,8,8,8,8,8,6,6,6,6,7,7,7,7,7,7,7,7,7,7,7,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,5,5,5,4,4,4,4,4,4,6,6,6,7,7,7,7,7,7,7,7,7,6,6,5,5,5,6,6,6,6,6,6,9,9,9,6,6,6,6,6,6,7,7,7,6,6,7,7,7,6,6,7,7,7,7,7,6,6,6,4,4,4,5,5,6,6,6,6,5,5,5,6,6,6,4,4,6,6,6,9,9,6,6,6,9,9,9,9,9,9,9,9,9,6,6,3,3,3,3,3,3,3,3,3,3,3,3,7,7,7,2,2,3],"cookie-2":[3,3,3,3,3,3,2,2,5,5,5,5,6,6,6,6,1,1,1,2,2,2,2,2,5,5,5,5,3,3,3,3,3,8,8,8,9,9,9,9,9,9,9,9,9,3,3,3,3,3,3,3,3,3,3,3,3,3,9,9,9,9,9,9,6,6,5,5,5,6,6,6,6,9,9,9,9,9,6,6,6,6,6,6,9,9,9,9,6,6,6,6,3,3,3,3,3,3,3,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,2,2,2,2,2,2,2,2,2,2,2,5,5,9,9,9,9,6,6,6,6,7,7,7,7,6,6,6,6,6,3,3],"cookie-3":[3,3,3,3,3,3,9,9,9,6,6,6,6,6,6,6,3,3,3,3,3,3,3,3,3,3,3,3,3,9,9,9,9,6,6,6,5,5,5,5,3,6,6,6,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],"cookie-4":[3,3,3,4,4,4,4,4,4,4,4,4,6,6,6,4,4,4,4,3,3,3,6,6,6,5,5,5,5,5,5,5,5,2,2,7,7,6,6,6,6,6,6,6,6,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,5,5,6,6,9,9,9,9,3,3,6,6,3,3,3,3,9,9,9,9,6,6,6,7,7,7,7,7,4,4,4,9,9,9,9,9,9,9,9,6,6,6,6,6,6,6,5,5,5,2,2,2,6,6,6,6,5,5,5,5,6,6,2,2,2,2,2,2,3,3],"cookie-5":[3,3,3,3,9,9,9,9,9,9,9,9,9,9,9,9,3,3,3,3,3,3,3,3,3,3,3,3,3,3,2,2,4,4,4,4,6,6,9,9,9,9,9,6,6,5,5,5,6,6,9,9,9,9,6,6,6,9,9,9,3,4,4,4,6,6,6,9,9,9,2,2,9,9,9,9,6,6,6,5,5,5,5,5,6,6,3,3,3,3,3,3,3,3,3,3,3,6,6,6,3,3,3,3,3,3,3,2,2,2,2,2,4,4,6,6,6,5,5,6,6,6,7,7,7,7,3,3,3,3,3,3,3,3,3,3,9,9,9,9,9,9,9,9,2,2,2,2,2,8,8,8],"cookie-6":[3,3,3,3,9,9,9,9,9,1,1,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,7,7,7,6,6,7,7,7,7,4,4,4,4,4,4,3,3,3,3,3,3,3,7,7,6,6,5,5,5,8,8,8,7,7,7,3,3,3,3,3,3,3,3,3,6,6,6,6,5,5,5,3,3,3,3,3,9,9,9,6,6,6,6,5,5,5,6,6,6,5,5,3,3,3,3,3,3,9,9,9,2,2,4,4,6,6,6,6,6,3,3,3,3,3,3,3,3,3,6,6,6,6,6,7,7,7,6,6,7,7,7,7,7,6,6,6,9,9,9,6,6,6,6,3,3,3,3,3,3,9,9,6,6,6,7,7,7,5,5,3,3,3,3,3,6,6,8,8,8,8,6,6,7,7,7,7,8,8,8,3,3,8,8,8,5,5,5,5,6,6,6,6,5,5,5,5,3,5,5,2,2,3,3,3,3,9,9,9,6,6,6,7,7,8,8,8,6,6,6,6,3,3,3,3,3,3,3,5,5,5,4,4,1,1,1,1,1,5,5,7,7,7,9,9,9,9,9,9,9,9,9,9,9,9,9,9,2,2,2,6,6,6,6,6,6,6,6,3,3,3,3,3,3,3,3,3,3,3,3,3,3,2,2,2,2,2,5,5,5,5,6,6,6,6,5,5,5,5,5,6,6,6,6,6,5,5,5,5,6,6,6,6,6,6,5,5,5,5,6,6,5,5,5,6,6,5,5,5,5,5,5,5,5,5,5,5,5,5,5],"cookie-7":[3,3,3,3,3,4,4,4,3,3,3,3,3,3,9,9,9,6,6,6,6,3,3,3,3,3,7,7,7,7,7,8,8,8,3,3,3,3,3,3,3,3,3,3,3,3,3,3,6,6,6,9,9,5,5,2,2,2,5,5,4,4,6,6,6,9,9,9,9,2,2,2,3,3,3,4,4,6,6,9,9,9,2,2,5,5,5,5,5,5,1,1,1,6,6,6,4,4,4,4,3,3,3,3,6,6,6,5,5,5,5,5,5,5,5,5,5,2,2,2,2,8,8,8,1,1,1],"cookie-8":[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,9,9,9,6,6,6,5,5,3,3,3,3,7,7,7,5,5,5,6,6,6,2,2,2,4,4,3,3,3,3,5,5,5,5,5,5,5,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3],"cookie-9":[3,3,3,3,3,3,3,3,3,3,3,8,8,8,8,2,2,2,2,9,9,9,9,9,9,9,9,6,6,6,6,4,4,4,6,6,6,3,3,3,3,3,6,6,6,6,6,6,6,7,7,7,7,7,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,9,9,9,6,6,5,5,5,4,4,4,8,8,8,5,5,2,2,6,6,6,6,4,4,3,3,3,3,3,3,3,3,3],"cookie-10":[3,3,3,4,4,4,6,6,6,6,6,6,8,8,8,2,2,2,6,6,6,5,5,5,5,2,2,2,2,8,8,8,6,6,6,3,3,7,7,7,7,6,6,7,7,7,2,2,2,2,2,2,2,2,9,9,9,9,2,2,2,9,9,6,6,6,6,6,6,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,5,5,3,3,3,3,3,4,4,4,4,4,4,2,2,2,9,9,9,2,2,7,7,7,4,4,4,3,3,3,3,3,3,5,5,5,5,5,2,2,2,2,6,6,6,6,6,6,6,5,5,5,2,2,2,3,3,3,3,3,3,3,6,6,9,9,9,9,9,9,6,6,6,6,5,5,3,3,7,7,7,7,2,2,2,6,6,6,6,6,6,3,3],"cutting_board":[3,3,3,3,5,5,5,2,2,2,8,8,8,3,4,4,4,9,9,9,9,3,7,7,3,3],"decor-1":[3,3,3,3,3,3,3,3,3,3,3,3,9,9,9,9,7,7,7,7,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,6,6,9,9,1,1,1,1,4,4,6,6,6,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,6,6,6,6,5,5,5,6,6,5,5,3,3,5,5,5,4,4,4,3,3,3,3,3,3,3,3,3,3,5,5,2,2,2,9,9,6,6,6,6,6,6,6,3,3,3,3,3,9,9,2,2,5,5,5,6,6,4,4,5,5,5,5,5,5,5,5,5,2,2,5,5,5,5,5,5,5,6,6,6,6,9,9,6,6,6,5,5,6,6,6,6,6,6,5,5,5,5,3,3,3,3,9,9,9,9,9,9,6,6,6,6,3,3,3,3,3,3,3,3,3,3,3,3,3,3,2,2,9,9,9,9,9,9,6,6,5,5,5,3,3,3,5,5,5,5,5,5,5,5,5,2,2,2,8,8,8,3,3,3,3,3],"decor-2":[3,3,3,3,3,3,3,5,5,5,5,5,5,3,3,3,3,5,5,5,5,5,2,2,3,3,3,3,5,5,5,5,5,5,5,5,5,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3,6,6,6,6,6,6,6,6,6,6,6,8,8,8,8,8,8,8,6,6,5,5,5,3,3,3,3,3,6,6,5,5,5,3,3,3,3,3,9,9,9,6,6,6,5,5,5,5,2,2,2,2,9,9,9,9,6,6,9,9,6,6,1,1,1,2,2,2,2,2,2,6,6,6,2,2,2,9,9,9,9,9,6,6,2,2,2,2,2,2,2,2,6,6,9,9,9,9,6,6,6,6,6,5,5,6,6,6,5,5,5,6,6,6,6,6,6,6,7,7,7,7,3,4,4,4,4,6,6,6,9,9,9,9,6,6,6,7,7,7,6,6,5,5,6,6,6,6,6,9,9,9,9,9,9,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,9,9,9,9,3,3,6,6,6,9,9,9,9,9,9,9,9,9,9,9,6,6,6,9,9,9,9,9,9,9,2,2,7,7,3,3,3],"decor-3":[3,3,3,3,3,3,3,3,3,8,8,8,3,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,3,3,3,3,3,3,3,3,3,8,8,8,3,3,8,8,8,8,8,8,8,8,8,8,8,8,8,8,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,5,5,5,8,8,8,8,8,8,8,8,3,3,3,3,3,3,3,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,8,8,7,7,6,6,6,5,5,2,2,2,2,2,2,2,2,4,4,6,6,6,5,5,1,1,9,9,9,9,6,6,6,6,5,5,5,5,5,6,6,6,5,5,5,5,6,6,6,6,6,6,7,7,7,6,6,6,7,7,6,6,6,6,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,6,6,6,3,3,3,3,4,4,4,4,6,6,6,6,7,7,6,6,6,6,8,8,8,3,3,3,3,3,3,3,6,6,4,4,4,4,6,6,6,6,6,5,5,5,6,6,6,6,6,6,6,9,9,6,6,6,3,3,3,3,9,9,2,2,8,8,8,9,9,9,9,9,9,9,9,9,5,5,5,3,3,3,3,3,3],"decor-4":[3,3,3,3,3,3,3,4,4,4,4,4,4,6,6,6,6,6,6,3,3,3,3,3,3,5,5,5,6,6,5,5,6,6,5,5,5,5,5,5,5,6,6,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,9,9,9,2,2,7,7,7,7,7,7,8,8,8,4,4,4,4,4,3,3,3,3,3,3,3,7,7,7,7,8,8,8,8,4,4,1,1,1,1,7,7,2,2,5,5,5,5,6,6,5,5,5,6,6,6,7,7,7,6,6,6,7,7,8,8,8,6,6,5,5,5,6,6,6,1,1,1,1,6,6,7,7,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8,3,3,3,3,3],"decor-5":[8,8,8,4,4,4,4,4,4,4,2,2,1,1,1,1,1,1,9,9,9,9,3,3,3,3,3,3,9,9,9,9,9,9,3,3,7,7,7,7,7,6,6,7,7,7,6,6,6,6,6,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,5,5,5,6,6,9,9,9,9,9,2,2,2,4,4,4,6,6,6,6,6,9,9,9,6,6,6,5,5,5,6,6,5,5,6,6,6,6,1,1,9,9,9,6,6,5,5,5,5,5,5,4,4,6,6,6,6,6],"decor-6":[3,3,3,3,3,7,7,7,3,3,9,9,6,6,6,6,5,5,5,6,6,6,6,6,6,7,7,7,7,7,7,2,2,2,2,5,5,2,2,7,7,7,6,6,7,7,6,6,6,6,6,6,6,6,4,4,4,4,6,6,6,7,7,6,6,6,6,3,9,9,9,9,9,3,3,3,3,7,7,7,4,4,4,4,3,3,3,3,3,3,4,4,4,4,3,3,8,8,8,1,1,1,3,3,3,3,3],"eggs":[3,3,3,9,9,9,9,6,6,6,6,6,6,6,6,6,6,3,3,3],"flour":[3,3,3,1,1,1,9,9,9,9,9,4,4,6,6,6,6,3,3,3,3,3],"honeycomb":[3,3,3,3,3,3,2,2,2,2,9,9,9,9,9,9,9,6,6,2,2,9,9,9,9,9,9,6,6,9,9,9,9,1,1,6,6,6,6,9,9,9,5,5,5,5,5,6,6,4,4,4,4,4,4,4,4,3,3,3,3,3,3,3,3,3,3,3,3],"inact-blend-1":[3,3,3,3,3,3,3,9,9,9,9,9,6,6,6,3,3,3,2,2,5,5,5,5,5,5,2,2,9,9,9,3,3,3,7,7,6,6,6,5,5,6,6,1,1,1,6,6,6,4,4,4,4,4,2,2,2,2,6,6,5,5,6,6,6,7,7,6,6,6,7,7,7,7,7,7,7,7,4,4,4,6,6,3,3,3,3,3,3,3],"inact-blend-2":[3,3,3,3,7,7,7,7,7,7,8,8,8,6,6,5,5,5,5,5,5,6,6,5,5,5,5,6,6,4,4,4,4,4,4,4,6,6,6,7,7,6,6,5,5,3,3,3,3,3,9,9,3,3,3,3,3,3,2,2,5,5,7,7,6,6,3,3,4,4,4,5,5,5,6,6,3,3,3,3,3,3,3,3],"inact-bowl-1":[1,9,9,9,9,9,9,9,9,6,6,6,6,6,6,6,7,7,7,7,7,7,3,3,3,6,6,6,3,3,3,3,3,3,3,3,4,4,4,2,2,2,2,2,2,3,3,3,3,3,3,3,3,9,9,9,9,9,3,3,3,3,6,6,6,6,3,3,3,3,6,6,6,3,3,3,6,6,6,6,6,9,9,9,9,6,6,4,4,4,4,4,6,6,3,3,3,3,3,3],"inact-bowl-2":[3,3,3,6,6,6,7,7,7,7,7,6,6,6,6,9,9,9,3,3,3,7,7,6,6,6,6,5,5,3,3,8,8,8,3,4,4,4,4,4,4,4,4,4,4,4,6,6,6,7,7,7,2,2,2,6,6,7,7,7,6,6,9,9,2,2,2,5,5,5,3,3,3,6,6,6,6,6,6,3,3,3,3],"inact-bowl-3":[3,8,8,8,3,3,5,5,5,5,6,6,6,6,6,6,6,8,8,8,3,3,8,5,5,3,3,3,2,2,2,9,9,9,9,2,2,6,6,6,9,9,9,9,9,9,9,1,1,6,6,6,4,4,6,6,4,4,4,2,2,2,9,9,9,9,9,9,9,9,9,2,2,9,9,9,9,9,2,2,2,2,2,2,3,3,3],"inact-bowl-4":[3,3,3,2,2,5,5,5,5,5,5,5,3,3,3,3,5,5,5,5,3,3,3,3,6,6,2,2,5,5,6,6,6,6,9,9,9,9,9,9,9,9,9,9,9,9,2,2,2,6,6,6,9,9,9,3,3,3,3,3,6,6,5,5,5,5,5,5,5,5,6,6,9,9,9,8,8,8,6,6,7,7,7,7,7,3,3,3,3,3,6,6,6,6,3,3,3],"inact-bowl-5":[6,6,6,9,9,9,9,2,2,9,9,9,9,9,9,9,6,6,6,6,6,3,3,3,3,3,3,3,4,4,4,4,4,6,6,6,6,7,7,7,6,6,6,9,9,9,9,9,6,6,8,8,8,6,6,7,7,7,7,2,2,5,5,5,6,6,6,5,5,2,2,2,9,9,3,3,9,9,9,9,9,9,6,6,6,6,6,7,7,7,7,6,6,6,6,6],"inact-bowl-6":[3,3,3,6,6,6,7,7,5,5,6,6,6,6,6,7,7,7,7,9,9,9,6,6,2,2,2,2,2,2,2,2,2,9,9,9,2,2,6,6,6,6,7,7,7,7,8,8,8,6,6,7,7,7,7,7,7,5,5,5,6,6,7,7,7,3,3,7,7,7,6,6,6,9,9,9,9,9,9,6,6,6,9,9,9,9,6,6,6,6,6,6,9,9,9,9,3,3,3,3,6,6,6,6,6,6,6,6,6],"inact-bowl-7":[3,3,3,9,9,3,3,3,3,3,7,7,7,2,2,2,7,7,6,6,6,6,6,9,9,9,6,6,6,3,3,3,3,3,5,5,5,4,4,6,6,8,8,8,7,7,7,6,6,6,6,6,8,8,8,5,5,6,6,6,7,7,7,5,5,5,5,6,6,6,2,2,7,7,7,6,6,6,6,6,7,7,7,7,7,7,7,7,8,8,8,6,6,6,5,5,6,6,9,9,9,2,2,4,4,4,3,5,5,6,6,3,3,3,3,4,4,4,4,2,2,2,2,2,3,3,3,3],"inact-bowl-8":[3,3,3,9,9,6,6,6,6,6,9,9,9,9,9,6,6,6,6,3,3,3,3,3,3,2,2,2,6,6,4,4,4,4,6,6,9,9,4,4,6,6,6,9,9,9,9,9,9,9,9,3,3,3,6,6,6,6,3,3,3,3],"inact-bowl-9":[2,2,2,2,9,9,6,6,6,3,3,3,3,3,3,7,7,7,7,7,7,3,3,3,3,3,3,9,9,9,9,6,6,7,7,7,6,6,6,6,3,3,3],"inact-bowl-10":[3,3,3,5,5,5,3,3,3,5,5,5,6,6,6,6,6,6,6,5,5,6,6,6,6,6,6,2,2,9,9,9,9,6,6,6,6,4,4,4,4,4,4,4,4,4,4,4,4,4,2,2,2,9,9,6,6,6,6,9,9,9,6,6,6,6,6,3,3,3,3,3,3,6,6,6,3,3,3,3,3,9,9,9,9,9,9,9,7,7,7,7,7,4,4,6,6,7,7,2,2,2,2,2,7,7,7,7,7,7,7,7,7,7,7,6,6,6,6,6,6,3,3,3,3],"inact-bowl-11":[3,3,3,7,7,7,7,6,6,6,6,6,6,6,9,9,9,9,9,3,3,3,3,9,9,9,3,3,4,4,4,4,4,6,6,6,6,6,6,6,2,2,2,9,9,9,9,2,2,6,6,6,7,7,7,7,7,7,6,6,6,6,6,6,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,7,7,5,5,5,5,5,6,6,6,6,6,6,6,7,7,7,8,8,8,4,4,4,4,4,4,4,2,2,7,7,2,2,2,4,4,6,6,8,8,8,8,8,8,2,2,2,8,8,8,7,7,7,7,2,2,5,5,6,6,5,5,5,6,6,5,5,5,5,5,5,5,5,5,2,2,2,3,3,3,3],"instruct-1":[2,2,2,6,6,6,6,5,5,5,5,2,2,2,2,7,7,7,6,6,6,9,9,9,9,3,3,3,5,5,5,5,6,6,6,6,6,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,5,5,6,6,3,3,3,3,9,9,9,4,4,4,6,6,6,6,6,7,7,7,7,7,7,6,6,6,5,5,6,6,6,6,6,7,7,7,7,7,7,7,3,3,3,4,4,4,3,3,9,9,9,9,6,6,5,5,5,5,5,4,4,6,6,5,5,5,5,6,6,6,9,9,9,3,3,3,6,6,6,6,3,3],"instruct-2":[3,3,3,3,3,3,3,3,3,3,3,3,2,2,5,5,2,2,2,2,9,9,9,9,6,6,6,6,6,6,9,9,9,6,6,4,4,4,4,6,6,6,6,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,9,9,9,9,6,6,6,6,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4,6,6,6,6,6,6,6,6,3,3,3,3,3,3,3,3,3,3,3,3,6,6,6,6,5,5,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,9,9,9,6,6,6,9,9,9,9,9,6,6,6,3,3,3,3,3],"instruct-3":[3,3,3,3,4,4,4,6,6,6,3,3,3,3,3,3,3,3,9,9,9,9,6,6,6,8,8,8,9,9,9,3,3,3,3,3,7,7,7,7,7,1,1,5,5,5,5,3,7,7,7,7,1,1,6,6,6,3,3,3,3,3,3,5,5,6,6,6,2,2,9,9,9,9,9,2,2,2,2,2,2,3,3,3,3],"instruct-4":[3,3,3,2,2,2,9,9,2,2,3,3,3,3,2,2,9,9,9,9,9,9,9,9,8,8,8,2,2,2,9,9,9,9,9,9,6,6,6,6,3,3,3,3,3,3,3,3,0,0,0,0,0,0,0,0,6,6,6,6,6,3,3,3],"instruct-5":[3,3,9,9,9,6,6,7,7,6,6,6,6,5,5,6,6,6,9,9,7,7,7,7,7,7,8,8,8,6,6,3,3,3,9,9,9,2,2,6,6,6,6,6,3,3,3,9,9,9,9,9,6,6,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4,4,2,2,9,9,9,9,6,6,6,3,3,3,3,3],"instruct-6":[3,3,3,3,4,4,4,4,4,4,6,6,8,8,8,3,3,3,3,6,6,7,7,6,6,6,6,6,6,6,1,1,7,7,7,7,6,6,6,6,6,6,7,7,3,3,3,3,3,3,3,3,5,5,5,6,6,7,7,7,7,3,3,5,5,2,2,2,2,9,9,9,9,6,6,6,9,9,6,6,6,5,5,2,2,2,7,7,7,7,6,6,6,7,7,7,6,6,7,7,6,6,6,6,6,7,7,7,7,7,7,7,6,6,6,6,5,5,3,3,3,9,9,9,9,3,3,3,3,7,7,6,6,3,3,3,3,3,9,9,9,9,3,3,3,7,7,7,6,6,6,9,9,9,9,9,4,4,4,2,2,8,8,8,3,3],"instruct-7":[3,3,6,6,6,6,9,9,3,3,3,3,3,3,3,3,6,6,6,6,6,3,3,3,3,6,6,9,9,9,9,2,2,2,2,2,9,9,9,8,8,8,6,6,6,6,6,6,6,5,5,5,5,6,6,6,6,6,7,7,7,7,2,2,5,5,5,6,6,3,3,3,3,7,7,7,7,6,6,6,3,5,5,5,2,2,6,6,5,5,2,2,2,5,5,5,5,3,3,3,3,6,6,6,4,4,4,6,6,1,1,1,1,1,1,9,9,9,9,2,2,9,9,6,6,6,7,7,3,3,7,7,9,9,9,9,9,9,6,6,6,7,7,7,7,6,6,3,3,3,3,3,9,9,9,3,3,3,3,9,9,9,9,9,6,6,6,6,3,3,3],"instruct-8":[3,3,3,3,6,6,6,6,6,6,7,7,7,8,8,8,8,7,7,7,7,7,7,7,6,6,3,3,3,3,6,6,6,6,6,1,1,1,1,5,5,5,6,6,7,7,7,7,4,4,4,4,8,8,8,8,8,8,8,9,9,9,9,9,9,6,6,1,1,1,9,9,9,9,1,1,1,1,1,5,5,5,5,6,6,6,1,1,4,4,4,4,4,1,1,1,5,5,3,3,3,3,4,4,4,2,2,5,5,3,3,3,9,9,9,9,9,9,3,3,3,3,3,3,3,3],"instruct-10":[3,3,3,3,3,3,6,6,6,3,3,3,3,3,3,7,7,7,7,7,6,6,6,5,5,5,6,6,6,6,4,4,4,4,9,9,9,9,9,6,6,6,6,4,4,6,6,7,7,6,6,6,7,7,6,6,8,8,8,2,2,4,4,4,6,6,6,5,5,5,5,5,5,3,3,3,3,3,3,9,9,9,9,9,9,6,6,2,2,2,7,7,7,7,7,7,7,4,4,6,6,6,6,6,6,6,3,3,3,3],"instruct-11":[3,3,3,3,3,3,3,3,3,9,9,9,9,7,7,7,7,6,6,5,5,5,5,5,5,2,2,4,4,6,6,6,9,9,9,9,6,6,6,4,4,4,4,4,6,6,6,6,8,8,8,2,2,7,7,7,2,2,2,2,5,5,6,6,6,6,3,3,3,3],"instruct-12":[3,3,3,3,3,3,5,5,5,5,9,9,9,9,9,9,9,6,6,6,6,6,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,5,5,5,9,9,9,9,9,9,9,9,9,8,8,8,8,8,6,6,2,2,4,4,4,6,6,6,3,3,3,3,3,3,3,3,3,9,9,9,9,9,9,2,2,2,2,2,2,3,3,3,3,9,9,9,9,6,6,6,7,7,7,7,7,7,7,6,6,9,9,3,3,4,4,6,6,6,4,4,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,5,5,5,2,2,9,9,9,9,9,9,9,9,6,6,6,3,3,3,3,3,3,5,5,6,6,6,3,3,3,3,3,3,3,2,2,9,9,9,9,2,2,2,9,9,9,9,9,6,6,6,6,9,9,6,6,6,6,6,4,4,4,4,6,6,6,3,3,9,9,9,9,9,9,9,6,6,6,3,3,3,3,3,3],"instruct-13-alt":[3,3,3,3,3,3,6,6,6,9,9,9,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,2,2,2,7,7,7,7,7,5,5,5,9,9,3,3,3,3,9,9,9,9,9,2,2,2,2,7,7,7,7,7,5,5,5,6,6,6,3,3,3,3,3,3,9,9,9,9,8,8,8,8,2,2,2,9,9,9,6,6,3,3,3,3,3,3,6,6,6,6,6,6,6,6,6,6,5,5,5,5,3,3,9,9,9,9,9,3,3,3,3,7,7,2,2,5,5,3,3,3,3,3,3,9,9,9,9,9,9,9,9,6,6,6,5,5,5,5,2,2,9,9,9,9,9,9,6,6,6,6,3,3,3,3,3,3,3,3,3,3,3],"instruct-13":[3,3,3,6,6,6,9,9,9,9,6,6,6,6,6,6,6,6,2,2,9,9,9,9,6,6,5,5,5,5,5,5,5,5,5,5,3,3,3,3,3,3,3,3,3,3,3,3,3],"instruct-14-alt":[3,3,3,3,2,2,2,4,4,4,2,2,6,6,6,6,6,7,7,6,6,6,6,6,6,7,7,7,7,2,2,2,6,6,9,9,9,9,9,9,9,9,6,6,6,6,5,5,5,5,5,5,5,5,6,6,6,6,6,3,3,3,3,3,3],"instruct-14":[3,3,3,8,8,8,6,6,6,3,3,3,3,3,3,3,6,6,6,9,9,9,9,9,9,9,2,2,2,2,7,7,7,7,7,6,6,6,6,6,8,8,8,8,8,7,7,7,8,8,8,3,5,5,5,2,2,2,8,8,8,8,6,6,3,3,3,3,3,7,7,7,2,2,5,5,5,5,3,3,3,3,3,3,3,3],"instruct-15":[3,3,3,3,3,3,3,3,6,6,6,6,7,7,7,7,7,6,6,6,6,6,6,7,7,9,9,9,9,9,3,3,3,9,9,9,9,9,9,9,2,2,7,7,7,1,1,6,6,7,7,7,7,7,7,7,6,6,6,6,6,5,5,5,3,3,3,3,3,3,3,9,9,9,9,9,9,9,6,6,6,6,6,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,7,7,7,3,7,7,7,6,6,6,6,6,5,5,5,2,2,9,9,9,9,9,3,3,8,2,2,2,8,8,8,6,6,7,7,7,7,7,5,5,5,5,6,6,6,6,6,6,4,4,4,4,4,4,4,4,4,4,6,6,6,6,6,6,6,6,6,3,3,3,7,7,8,8,8,3,7,7,7,8,8,8,4,4,4,4,4,6,6,6,5,5,5,5,5,6,6,6,6,3,3,3,3,3,3,9,9,9,6,6,6,5,5,6,6,6,5,5,5,5,5,5,3,3,3,3,3,3,3,3,3,3],"instruct-16":[3,3,3,3,3,3,8,8,8,8,5,5,4,4,4,4,8,8,8,4,4,4,6,6,6,3,3,3,3,3,3,5,5,5,6,6,9,9,9,6,6,6,6,6,6,6,9,9,9,9,9,9,9,2,2,7,7,7,6,6,3,3,3,3,9,9,9,3,3,3,3,6,6,6,7,7,7,7,7,7,7,6,6,6,6,9,9,9,9,9,9,6,6,6,6,3,3,3,3],"instruct-17":[3,3,3,3,9,9,9,9,3,3,3,3,5,5,5,6,6,6,6,6,6,7,7,6,6,8,8,8,6,6,6,6,8,8,8,6,6,6,6,9,9,9,9,9,9,9,9,9,3,3,3,3,3,3,3,3,3,5,5,5,6,6,5,5,3,3,9,9,9,2,2,5,5,6,6,6,4,4,4,4,4,3,3,3,3,3,3,3,3,3,3],"instruct-18-alt":[3,3,3,3,3,3,3,9,9,9,6,6,6,6,6,7,7,7,6,6,9,9,9,9,9,9,2,2,2,2,5,5,5,2,2,5,5,6,6,6,9,9,9,9,9,4,4,4,4,3,3,3,3,3,3,3,3,1,1,3,3,3,3,7,7,7,6,6,6,3,5,5,5,3,7,7,9,9,9,9,9,9,9,9,9,9,9,9,9,1,1,1,1,1,9,9,9,9,9,6,6,6,5,5,2,2,2,8,8,8,8,8,8,9,9,9,9,9,6,6,7,7,6,6,4,4,4,4,7,7,2,2,2,2,7,7,7,7,7,7,7,7,7,7,6,6,6,3,3,3,3],"instruct-18":[3,3,6,6,6,6,9,9,9,6,6,6,7,7,9,9,9,9,9,9,9,9,9,9,9,6,6,6,6,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,5,5,4,4,4,4,6,6,6,6,9,9,9,9,6,6,6,6,3,3,3,3,3,3,6,6,6,9,9,9,9,9,9,9,6,6,6,1,1,1,1,1,9,9,9,9,9,9,6,6,4,4,4,4,2,2,2,2,2,3,3,3,3,3,9,9,9,9,9,3,3,7,7,6,6,4,4,4,4,7,7,7,7,6,6,6,7,7,7,7,7,7,7,7,3,3,3,3,3,3,3,3,3],"instruct-19":[3,3,3,3,3,3,2,2,2,2,2,9,9,9,9,9,9,9,6,6,6,3,3,5,5,6,6,6,7,7,9,9,9,9,9,9,2,2,2,7,7,7,7,7,7,7,6,6,6,6,3,3,3,3,3,3,3],"instruct-20":[3,3,3,3,3,3,6,6,6,7,7,8,8,8,6,6,6,6,6,6,6,6,9,9,9,9,9,9,2,2,8,3,3,3,3,9,9,9,9,9,9,6,6,5,5,2,2,4,4,7,7,7,5,5,7,7,7,7,7,7,7,7,7,7,6,6,9,9,9,9,9,9,9,9,9,9,9,9,3,3,3,3,3,3,3,3,3,3,3,3,8,8,8,8,7,7,7,6,6,6,6,7,7,7,6,6,6,6,6,6,6,6,9,9,9,9,9,6,6,6,4,4,4,4,6,6,6,2,2,9,9,9,9,9,9,1,1,1,7,7,7,7,7,3,3,3,8,8,8,8,9,9,9,9,2,2,2,2,9,9,9,9,3,3,3,8,8,9,9,2,2,2,5,5,2,2,2,9,9,9,4,4,4,8,8,8,9,9,9,4,4,4,4,5,5,5,3,3,3,3],"instruct-21":[3,3,3,3,8,8,8,8,8,8,8,8,8,6,6,6,6,6,6,3,3,3,3,3,3,6,6,6,6,6,3,3,3,3,3,8,8,8,9,9,9,9,6,6,6,1,1,6,6,5,5,5,5,5,6,6,6,6,5,5,5,3,3,3,7,7,7,6,6,7,7,7,2,2,2,9,9,9,9,6,6,6,7,7,6,6,6,7,7,2,2,7,7,7,6,6,6,6,6,6,6,6,9,9,9,6,6,6,6,6,7,7,7,7,2,2,3,3,3,3,3],"lemon":[2,2,2,2,9,9,9,9,6,6,6,6,8,8,8,6,6,3,3],"locked-ingredient":[3,3,3,5,5,5,6,6,6,6,6,6,5,5,5,6,6,2,2,2,2,8,8,8,6,6,6,3,3,3,3,3,3,3,3,3,3,2,2,2,9,9,6,6,6,6,6,3,3,3,3,9,9,9,9,6,6,6,5,5,1,1,1,9,9,9,9,2,2,2,2,2,2,2,2,6,6,5,5,6,6,6,6,6,6,9,9,9,9,9,3,3,3,3,6,6,3,3,3,3,3,3,3,3,1,1,3,3,3,3,3,3,9,9,9,9,9,9,6,6,7,7,7,7,8,8,8,5,5,5,6,6,6,6,9,9,9,9,6,6,6,3,3,3,3,3,3,6,6,6,6,6,6,5,5,5,5,5,6,6,6,6,6,6,6,3,3,3,3,9,9,9,6,6,6,6,6,9,9,9,6,6,9,9,9,9,9,6,6,7,7,7,7,7,7,6,6,6,6,6,6,6,4,4,4,4,4,4,6,6,6,6,6,6,6,6,6,6,6,6,3,3,3,3],"marshmellow":[3,3,3,3,3,3,9,9,9,9,6,6,7,7,7,4,4,4,4,4,2,2,2,2,2,9,9,9,9,9,9,4,4,6,6,6,6,3,3,3,3,3],"milk":[3,3,3,8,8,8,9,9,9,9,6,6,6,6,6,3,3,3,3,3,3,3,3,3],"slice-1":[3,3,3,8,8,8,5,5,5,5,6,6,2,2,2,2,2,1,1,1,1,1,1,1,1,9,9,9,9,9,9,9,9,3,3,3,3,3,3,3,3,3,3,9,9,9,9,9,9,9,9,9,9,9,3,3,3,3,3,3,3,9,9,7,7,7,6,6,7,7,7,7,6,6,6,6,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,5,5,5,5,3,3,3,3,3,3,9,9,9,9,9,9,4,4,4,4,6,6,6,6,7,7,6,6,6,9,9,9,9,9,9,9,4,4,4,7,7,6,6,9,9,9,9,9,9,9,9,2,2,4,4,4,9,9,9,9,9,2,2,3,3,9,9,9,9,6,6,6,9,9,9,9,9,9,6,6,3,3,3,3,3],"sparkleberry":[3,3,3,3,5,5,5,3,3,9,9,9,9,3,3,3,3,3,3,6,6,6,6,6,3,3,3,3,5,5,5,5,5,2,2,2,2,3,3,3,9,9,9,9,6,6,6,6,7,7,7,7,7,7,7,3,3,3],"strawberry":[3,3,3,6,6,6,6,6,6,6,6,9,9,9,2,2,6,6,6,5,5,5,3,3,3,3,7,7,7,7,6,6,6,7,7,7,7,7,7,3,3,3,3,3],"sugar":[2,6,6,6,6,6,6,5,5,5,5,5,5,6,6,6,3,3,3,3,3,3,3,3,3]},"f":{"1-more":[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,2,3,4,5,6,7,8,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,2,3,4,5,6,7,8,9],"apple":[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,2,3,4,4,4,4,4,4,4,4,4,5,6,7,8,9,-1,-1,-1],"banana":[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],"blender":[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],"butter":[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],"chocolate":[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,2,3,4,4,4,4,4,4,4,4,4,4,5,6,7,8,9,-1,-1],"cookie-1-alt":[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],"cookie-1":[-1,-1,-1,-1,-1,-1,-1,0,1,2,3,4,4,4,4,4,4,4,4,4,4,5,6,7,8,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,2,3,4,5,6,7,8,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,2,3,4,5,6,7,8,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],"cookie-2":[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,2,3,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,5,6,7,8,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,2,3,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,5,6,7,8,9,-1,-1,-1,-1],"cookie-3":[-1,-1,0,1,2,3,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,5,6,7,8,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],"cookie-4":[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,2,3,4,5,6,7,8,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],"cookie-5":[-1,0,1,2,3,4,4,4,4,4,4,4,4,4,4,4,4,4,4,5,6,7,8,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],"cookie-6":[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,2,3,4,5,6,7,8,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,2,3,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,5,6,7,8,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,2,3,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,5,6,7,8,9,-1,-1,-1,-1,-1,-1],"cookie-7":[-1,-1,-1,-1,-1,-1,-1,-1,0,1,2,3,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,5,6,7,8,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],"cookie-8":[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],"cookie-9":[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,2,3,4,5,6,7,8,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],"cookie-10":[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,2,3,4,5,6,7,8,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,2,3,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,5,6,7,8,9,-1,-1],"cutting_board":[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],"decor-1":[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,2,3,4,5,6,7,8,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,2,3,4,5,6,7,8,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],"decor-2":[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,2,3,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,5,6,7,8,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],"decor-3":[-1,-1,0,1,2,3,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,5,6,7,8,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,2,3,4,5,6,7,8,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,2,3,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,5,6,7,8,9,-1,-1,-1],"decor-4":[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,2,3,4,5,6,7,8,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],"decor-5":[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,2,3,4,5,6,7,8,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],"decor-6":[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,2,3,4,5,6,7,8,9,-1,-1],"eggs":[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],"flour":[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],"honeycomb":[-1,-1,-1,0,1,2,3,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,5,6,7,8,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],"inact-blend-1":[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,2,3,4,5,6,7,8,9],"inact-blend-2":[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,2,3,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,5,6,7,8,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],"inact-bowl-1":[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,2,3,4,5,6,7,8,9],"inact-bowl-2":[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,2,3,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,5,6,7,8,9,-1],"inact-bowl-3":[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],"inact-bowl-4":[0,1,2,3,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,5,6,7,8,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,2,3,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,5,6,7,8,9,-1,-1,-1,-1,-1,-1],"inact-bowl-5":[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,2,3,4,5,6,7,8,9,-1,-1,-1,-1],"inact-bowl-6":[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],"inact-bowl-7":[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,2,3,4,5,6,7,8,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],"inact-bowl-8":[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,2,3,4,5,6,7,8,9],"inact-bowl-9":[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],"inact-bowl-10":[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,2,3,4,5,6,7,8,9,-1,-1,-1],"inact-bowl-11":[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,2,3,4,5,6,7,8,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],"instruct-1":[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,2,3,4,5,6,7,8,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,2,3,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,5,6,7,8,9,-1,-1,-1],"instruct-2":[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,2,3,4,5,6,7,8,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,2,3,4,5,6,7,8,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],"instruct-3":[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],"instruct-4":[0,1,2,3,4,4,4,4,4,4,4,4,4,4,4,5,6,7,8,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],"instruct-5":[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,2,3,4,5,6,7,8,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],"instruct-6":[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,2,3,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,5,6,7,8,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],"instruct-7":[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,2,3,4,5,6,7,8,9,-1,-1,-1,-1,-1,-1],"instruct-8":[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,2,3,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,5,6,7,8,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],"instruct-10":[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],"instruct-11":[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,2,3,4,5,6,7,8,9],"instruct-12":[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,2,3,4,5,6,7,8,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,2,3,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,5,6,7,8,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],"instruct-13-alt":[0,1,2,3,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,5,6,7,8,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,2,3,4,5,6,7,8,9],"instruct-13":[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,2,3,4,5,6,7,8],"instruct-14-alt":[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],"instruct-14":[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,2,3,4,5,6,7,8],"instruct-15":[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,2,3,4,5,6,7,8,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,2,3,4,5,6,7,8,9],"instruct-16":[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,2,3,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,5,6,7,8,9,-1,-1,-1,-1,-1],"instruct-17":[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,2,3,4,4,4,4,4,4,4,4,5,6,7,8,9,-1],"instruct-18-alt":[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,2,3,4,5,6,7,8,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],"instruct-18":[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,2,3,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,5,6,7,8,9,-1,-1,-1,-1,-1,-1],"instruct-19":[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,2,3,4,5,6,7,8,9,-1],"instruct-20":[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,2,3,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,5,6,7,8,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],"instruct-21":[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],"lemon":[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],"locked-ingredient":[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,2,3,4,5,6,7,8,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,2,3,4,5,6,7,8,9,-1,-1,-1,-1,-1],"marshmellow":[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],"milk":[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],"slice-1":[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,2,3,4,5,6,7,8,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],"sparkleberry":[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,2,3,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,5,6,7,8,9,-1,-1,-1,-1],"strawberry":[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],"sugar":[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]}}');
                var qe = {
                        show: {
                            x: -190,
                            visible: !0
                        },
                        hide: {
                            x: 190,
                            visible: !1
                        }
                    },
                    Ve = ["vo-cookie-1", "vo-cookie-1-alt", "vo-instruct-1", "vo-instruct-2", "vo-instruct-3", "vo-inact-bowl-1", "vo-inact-bowl-2", "vo-flour", "vo-butter", "vo-eggs", "vo-milk", "vo-sugar", "vo-1-more", "vo-instruct-4", "vo-instruct-5", "vo-inact-bowl-3", "vo-inact-bowl-4", "vo-inact-bowl-5", "vo-inact-bowl-6", "vo-inact-bowl-8", "vo-inact-bowl-9", "vo-instruct-6", "vo-instruct-7", "vo-inact-bowl-7", "vo-instruct-8", "vo-cookie-10", "vo-apple", "vo-banana", "vo-lemon", "vo-strawberry", "vo-marshmallow", "vo-chocolate", "vo-honeycomb", "vo-sparkleberry", "vo-instruct-10", "vo-blender", "vo-cutting_board", "vo-instruct-10a", "vo-instruct-11", "vo-inact-blend-1", "vo-inact-blend-2", "vo-instruct-12", "vo-a-42", "vo-inact-bowl-10", "vo-inact-bowl-11", "vo-slice-1", "vo-instruct-13-alt", "vo-instruct-14", "vo-instruct-14-alt", "vo-instruct-15", "vo-instruct-16", "vo-decor-6", "vo-instruct-17", "vo-instruct-18", "vo-instruct-18-alt", "vo-instruct-19", "vo-instruct-20", "vo-instruct-21", "vo-decor-1", "vo-decor-2", "vo-decor-3", "vo-decor-4", "vo-decor-5", "vo-cookie-2", "vo-cookie-3", "vo-cookie-4", "vo-cookie-7", "vo-cookie-5", "vo-cookie-6", "vo-cookie-8", "vo-cookie-9", "vo-locked-ingredient"],
                    Je = function(t) {
                        (0, h.Z)(r, t);
                        var e, n, i = (e = r, n = function() {
                            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                            if (Reflect.construct.sham) return !1;
                            if ("function" == typeof Proxy) return !0;
                            try {
                                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                            } catch (t) {
                                return !1
                            }
                        }(), function() {
                            var t, i = (0, d.Z)(e);
                            if (n) {
                                var r = (0, d.Z)(this).constructor;
                                t = Reflect.construct(i, arguments, r)
                            } else t = i.apply(this, arguments);
                            return (0, f.Z)(this, t)
                        });

                        function r() {
                            var t;
                            return (0, c.Z)(this, r), (t = i.call(this)).name = "Cookie", t.lines = Ve, t.floatTime = 0, t
                        }
                        return (0, u.Z)(r, [{
                            key: "props",
                            get: function() {
                                return qe
                            }
                        }, {
                            key: "createDisplay",
                            value: function() {
                                (0, q.Z)((0, d.Z)(r.prototype), "createDisplay", this).call(this);
                                var t = s.aNw.shared.resources["ss-cookie"].spritesheet,
                                    e = new s.KgH(t.animations["cookie-head"]);
                                e.pivot.set(270, 207), e.loop = !1, e.animationSpeed = .5;
                                var n = new s.KgH(t.animations["cookie-blink"]);
                                n.position.set(-53, -45), n.pivot.set(107, 62), n.loop = !1, n.animationSpeed = .5;
                                var i = new s.jyi(s.P6Y.TextureCache["cookie-glasses"]);
                                i.position.set(-170, -70);
                                var o = new s.jyi(s.P6Y.TextureCache["cookie-ribbon"]);
                                o.position.set(49, -201), this.display.addChild(e, n, i, o), this.display.scale.set(.5), this.display.y = -264, this.head = e, this.eyes = n, this.baseHeadFrames = t.animations["cookie-head"], this.baseEyesFrames = t.animations["cookie-blink"]
                            }
                        }, {
                            key: "playAnimFor",
                            value: function(t) {
                                var e = this;
                                t = t.substring(3);
                                var n = He.Y[t];
                                n && (this.head.textures = n.map((function(t) {
                                    return e.baseHeadFrames[t]
                                })), this.head.gotoAndPlay(0));
                                var i = He.f[t];
                                i && (this.eyes.textures = i.map((function(t) {
                                    return -1 === t ? s.xEZ.EMPTY : e.baseEyesFrames[t]
                                })), this.eyes.gotoAndPlay(0))
                            }
                        }, {
                            key: "onVOStart",
                            value: function(t) {
                                (0, q.Z)((0, d.Z)(r.prototype), "onVOStart", this).call(this, t), this.playAnimFor(t.vo)
                            }
                        }, {
                            key: "tick",
                            value: function(t, e) {
                                this.x = e.width / 2, this.floatTime += t;
                                var n = this.floatTime;
                                this.pivot.x = 8 * Math.sin(n), this.pivot.y = 8 * Math.sin(n) * Math.sin(n / 8 * 1.2)
                            }
                        }]), r
                    }(Ye);
                var Xe = 0,
                    Ge = function(t) {
                        (0, h.Z)(r, t);
                        var e, n, i = (e = r, n = function() {
                            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                            if (Reflect.construct.sham) return !1;
                            if ("function" == typeof Proxy) return !0;
                            try {
                                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                            } catch (t) {
                                return !1
                            }
                        }(), function() {
                            var t, i = (0, d.Z)(e);
                            if (n) {
                                var r = (0, d.Z)(this).constructor;
                                t = Reflect.construct(i, arguments, r)
                            } else t = i.apply(this, arguments);
                            return (0, f.Z)(this, t)
                        });

                        function r(t) {
                            var e;
                            return (0, c.Z)(this, r), (e = i.call(this, s.P6Y.TextureCache["ui-magic-".concat(t.name)])).anchor.set(.5), e.config = t, e.name = e.config.name, e.vo = "vo-".concat(e.config.vo), e.dropZone = "magic", e.returnOnInvalidDrop = !0, e.enabled = !0, e.time = Xe += .8, e.emitter = new ut((0, l.Z)(e)), e.emitter.setRect(e.getLocalBounds()), e.emitter.addAtBack = !0, e.emitter.emit = !0, e
                        }
                        return (0, u.Z)(r, [{
                            key: "setPosition",
                            value: function(t) {
                                this.activePosition = new s.E9j, this.activePosition.copyFrom(t)
                            }
                        }, {
                            key: "tick",
                            value: function(t) {
                                this.time += t, this.pivot.x = 5 * Math.sin(this.time), this.pivot.y = 5 * Math.sin(this.time) * Math.sin(this.time / 3), this.angle = -10 * Math.sin(2 * this.time)
                            }
                        }, {
                            key: "destroy",
                            value: function(t) {
                                this.emitter.destroy(), (0, q.Z)((0, d.Z)(r.prototype), "destroy", this).call(this, t)
                            }
                        }, {
                            key: "onDragStart",
                            value: function() {
                                (0, q.Z)((0, d.Z)(r.prototype), "onDragStart", this).call(this), T.playOnce("vo-".concat(this.config.vo))
                            }
                        }]), r
                    }(wt);
                var Ue = [{
                        x: -254,
                        y: -248
                    }, {
                        x: 265,
                        y: -205
                    }, {
                        x: -404,
                        y: -85
                    }, {
                        x: 378,
                        y: -67
                    }, {
                        x: -295,
                        y: 64
                    }, {
                        x: 377,
                        y: 182
                    }, {
                        x: -382,
                        y: 225
                    }],
                    Qe = new s.E9j(0, 768),
                    $e = new s.E9j(0, -768),
                    ze = function(t) {
                        (0, h.Z)(l, t);
                        var e, n, i, o, a = (i = l, o = function() {
                            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                            if (Reflect.construct.sham) return !1;
                            if ("function" == typeof Proxy) return !0;
                            try {
                                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                            } catch (t) {
                                return !1
                            }
                        }(), function() {
                            var t, e = (0, d.Z)(i);
                            if (o) {
                                var n = (0, d.Z)(this).constructor;
                                t = Reflect.construct(e, arguments, n)
                            } else t = e.apply(this, arguments);
                            return (0, f.Z)(this, t)
                        });

                        function l() {
                            var t;
                            return (0, c.Z)(this, l), (t = a.call(this)).visible = !1, t.tickChildren = !0, t.items = t._createItems(), t.addChild(t.items), t.header = new s.jyi(s.P6Y.TextureCache["ui-choose-one"]), t.header.anchor.set(.5, 0), t.header.position.y = -384, t.addChild(t.header), t
                        }
                        return (0, u.Z)(l, [{
                            key: "show",
                            value: (n = (0, nt.Z)(rt().mark((function t() {
                                var e;
                                return rt().wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return this._setStartPositions(), this.visible = !0, this.header.pivot.y = this.header.height, r.ZP.to(this.header, {
                                                pixi: {
                                                    pivotY: 0
                                                },
                                                duration: .4,
                                                ease: ot.Ll.easeOut
                                            }), e = r.ZP.timeline({
                                                defaults: {
                                                    ease: ot.Ll.easeOut,
                                                    duration: .8
                                                }
                                            }), this.items.children.forEach((function(t) {
                                                e.to(t, {
                                                    pixi: t.activePosition.toPlain()
                                                }, "<0.1")
                                            })), t.next = 8, e.play();
                                        case 8:
                                            this.interactiveChildren = !0;
                                        case 9:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this)
                            }))), function() {
                                return n.apply(this, arguments)
                            })
                        }, {
                            key: "hide",
                            value: (e = (0, nt.Z)(rt().mark((function t() {
                                var e;
                                return rt().wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return this.interactiveChildren = !1, r.ZP.to(this.header, {
                                                pixi: {
                                                    pivotY: this.header.height
                                                },
                                                duration: .4,
                                                ease: ot.Ll.easeIn
                                            }), this.visible = !0, e = r.ZP.timeline({
                                                defaults: {
                                                    ease: ot.Ll.easeIn,
                                                    duration: .8
                                                }
                                            }), this.items.children.forEach((function(t) {
                                                e.to(t, {
                                                    pixi: t.activePosition.add($e).toPlain()
                                                }, "<0.1")
                                            })), t.next = 7, e.play();
                                        case 7:
                                            this.visible = !1;
                                        case 8:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this)
                            }))), function() {
                                return e.apply(this, arguments)
                            })
                        }, {
                            key: "_setStartPositions",
                            value: function() {
                                this.items.children.forEach((function(t) {
                                    t.position.copyFrom(t.activePosition.add(Qe))
                                }))
                            }
                        }, {
                            key: "_createItems",
                            value: function() {
                                var t = new s.W20;
                                t.interactive = !0, t.tickChildren = !0;
                                for (var e = A.MO, n = 0; n < e.length; n++) {
                                    var i = e[n],
                                        r = new Ge(i);
                                    r.setPosition(Ue[n]), t.addChild(r)
                                }
                                return t
                            }
                        }]), l
                    }(s.W20);
                var Ke = function(t) {
                        (0, h.Z)(o, t);
                        var e, n, i, r = (n = o, i = function() {
                            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                            if (Reflect.construct.sham) return !1;
                            if ("function" == typeof Proxy) return !0;
                            try {
                                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                            } catch (t) {
                                return !1
                            }
                        }(), function() {
                            var t, e = (0, d.Z)(n);
                            if (i) {
                                var r = (0, d.Z)(this).constructor;
                                t = Reflect.construct(e, arguments, r)
                            } else t = e.apply(this, arguments);
                            return (0, f.Z)(this, t)
                        });

                        function o() {
                            var t;
                            return (0, c.Z)(this, o), (t = r.call(this, s.P6Y.TextureCache["button-check"], !1))._type = "check", t.useScreenAnchor = !0, t.screenAnchor.set(1, 1), t.screenAnchorOffset.set(-106, -130), t.emitter = new ut((0, l.Z)(t)), t.emitter.setRect(t.getLocalBounds()), t
                        }
                        return (0, u.Z)(o, [{
                            key: "type",
                            get: function() {
                                return this._type
                            }
                        }, {
                            key: "setWhisk",
                            value: function() {
                                this._type = "whisk", this.voLines = ["vo-inact-bowl-3", "vo-instruct-14", "vo-instruct-4"], this._switchTexture()
                            }
                        }, {
                            key: "setCheck",
                            value: function() {
                                this._type = "check", this.voLines = ["vo-instruct-15"], this._switchTexture()
                            }
                        }, {
                            key: "setSkip",
                            value: function() {
                                this._type = "skip", this.voLines = [], this._switchTexture()
                            }
                        }, {
                            key: "_switchTexture",
                            value: (e = (0, nt.Z)(rt().mark((function t() {
                                var e;
                                return rt().wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            if ((e = s.P6Y.TextureCache["button-".concat(this._type)]) !== this.baseSprite.texture) {
                                                t.next = 6;
                                                break
                                            }
                                            if (this.visible) {
                                                t.next = 5;
                                                break
                                            }
                                            return t.next = 5, this.show();
                                        case 5:
                                            return t.abrupt("return");
                                        case 6:
                                            return t.next = 8, this.hide();
                                        case 8:
                                            return this.baseSprite.texture = e, t.next = 11, this.show();
                                        case 11:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this)
                            }))), function() {
                                return e.apply(this, arguments)
                            })
                        }, {
                            key: "destroy",
                            value: function(t) {
                                this.emitter.destroy(), (0, q.Z)((0, d.Z)(o.prototype), "destroy", this).call(this, t)
                            }
                        }]), o
                    }(lt),
                    tn = n(5173);
                var en = new s.E9j(.15, .15),
                    nn = function(t) {
                        (0, h.Z)(r, t);
                        var e, n, i = (e = r, n = function() {
                            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                            if (Reflect.construct.sham) return !1;
                            if ("function" == typeof Proxy) return !0;
                            try {
                                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                            } catch (t) {
                                return !1
                            }
                        }(), function() {
                            var t, i = (0, d.Z)(e);
                            if (n) {
                                var r = (0, d.Z)(this).constructor;
                                t = Reflect.construct(i, arguments, r)
                            } else t = i.apply(this, arguments);
                            return (0, f.Z)(this, t)
                        });

                        function r(t) {
                            var e;
                            return (0, c.Z)(this, r), (e = i.call(this)).config = t, e.sprite = new s.jyi(s.P6Y.TextureCache["decoration-".concat(t.name)]), e.sprite.anchor.set(.5), e.addChild(e.sprite), e.dragContainerName = "default", e.centerDrag = !1, e.enabled = !0, e.config.allowTransform && e.sprite.setTransform(0, 0, Math.random() > .5 ? 1 : -1, 1, (0, he.Z)(-4, 4, !0) * s.ZXK, (0, he.Z)(-en.x, en.x), (0, he.Z)(-en.y, en.y)), e
                        }
                        return (0, u.Z)(r)
                    }(wt);
                var rn = function(t) {
                    (0, h.Z)(r, t);
                    var e, n, i = (e = r, n = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                        } catch (t) {
                            return !1
                        }
                    }(), function() {
                        var t, i = (0, d.Z)(e);
                        if (n) {
                            var r = (0, d.Z)(this).constructor;
                            t = Reflect.construct(i, arguments, r)
                        } else t = i.apply(this, arguments);
                        return (0, f.Z)(this, t)
                    });

                    function r(t) {
                        var e;
                        (0, c.Z)(this, r), (e = i.call(this)).config = t;
                        var n = new s.jyi(s.P6Y.TextureCache["ui-decor-tray-ellipse"]);
                        n.anchor.set(.5);
                        var o = new s.jyi(s.P6Y.TextureCache["ui-cake-decor-".concat(e.config.name)]);
                        return o.anchor.set(.5), e.addChild(n, o), e.enabled = !0, e
                    }
                    return (0, u.Z)(r, [{
                        key: "getDragObject",
                        value: function() {
                            return new nn(this.config)
                        }
                    }]), r
                }(wt);
                var on = function(t) {
                        (0, h.Z)(p, t);
                        var e, n, i, o, a = (i = p, o = function() {
                            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                            if (Reflect.construct.sham) return !1;
                            if ("function" == typeof Proxy) return !0;
                            try {
                                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                            } catch (t) {
                                return !1
                            }
                        }(), function() {
                            var t, e = (0, d.Z)(i);
                            if (o) {
                                var n = (0, d.Z)(this).constructor;
                                t = Reflect.construct(e, arguments, n)
                            } else t = e.apply(this, arguments);
                            return (0, f.Z)(this, t)
                        });

                        function p(t) {
                            var e;
                            (0, c.Z)(this, p), (e = a.call(this)).interactive = !0, e.app = t, e.isMouseOver = !1, e.scrollY = 0, e.scrollHeight = 0, e.scrollingEnabled = !1, e.visualOffset = 0;
                            var n = s.P6Y.TextureCache,
                                i = new s.jyi(n["ui-decor-tray-back"]);
                            i.interactive = !0, i.pivot.set(62, 0);
                            var r = new s.jyi(n["ui-decor-tray-overlay"]);
                            return r.pivot.set(74, 0), e.itemContainer = new s.W20, e.itemContainer.interactive = !0, e.itemContainer.y = -4, e.addChild(i, e.itemContainer, r), e.pivot.set(400, 0), e._addItems(), e.upArrow = new lt(n["ui-decor-tab-up"], !1), e.upArrow.position.set(288, 80), e.downArrow = new lt(n["ui-decor-tab-down"], !1), e.downArrow.position.set(288, 668), e._bindedMouseWheel = e._handleMouseWheel.bind((0, l.Z)(e)), e.scrollingEnabled && (e.addChild(e.upArrow, e.downArrow), e.on("pointerover", e._onMouseOver, (0, l.Z)(e)), e.on("pointerout", e._onMouseOver, (0, l.Z)(e)), e.upArrow.on("pointertap", e._onArrowClick, (0, l.Z)(e)), e.downArrow.on("pointertap", e._onArrowClick, (0, l.Z)(e)), t.renderer.view.addEventListener("mousewheel", e._bindedMouseWheel)), e
                        }
                        return (0, u.Z)(p, [{
                            key: "open",
                            value: (n = (0, nt.Z)(rt().mark((function t() {
                                return rt().wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return r.ZP.to(this, {
                                                visualOffset: 300,
                                                duration: .6,
                                                ease: ot.Ll.easeOut
                                            }), t.next = 3, r.ZP.to(this, {
                                                pixi: {
                                                    pivotX: 0
                                                },
                                                duration: .6,
                                                ease: ot.Ll.easeOut
                                            });
                                        case 3:
                                            this.upArrow.enabled = !0, this.downArrow.enabled = !0;
                                        case 5:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this)
                            }))), function() {
                                return n.apply(this, arguments)
                            })
                        }, {
                            key: "close",
                            value: (e = (0, nt.Z)(rt().mark((function t() {
                                return rt().wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return this.upArrow.enabled = !1, this.downArrow.enabled = !1, r.ZP.to(this, {
                                                visualOffset: 0,
                                                duration: .4,
                                                ease: ot.Ll.easeIn
                                            }), t.next = 5, r.ZP.to(this, {
                                                pixi: {
                                                    pivotX: 400
                                                },
                                                duration: .4,
                                                ease: ot.Ll.easeIn
                                            });
                                        case 5:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this)
                            }))), function() {
                                return e.apply(this, arguments)
                            })
                        }, {
                            key: "tick",
                            value: function(t, e) {
                                if (this.x = e.width / -2, this.y = e.height / -2, this.scrollingEnabled)
                                    for (var n = this.scrollHeight, i = this.itemContainer.children, r = 0; r < i.length; r++) {
                                        var o = i[r],
                                            a = o.oy + this.scrollY;
                                        o.y = (a % n + n) % n
                                    }
                            }
                        }, {
                            key: "destroy",
                            value: function(t) {
                                (0, q.Z)((0, d.Z)(p.prototype), "destroy", this).call(this, t), this.app.renderer.view.removeEventListener("mousewheel", this._bindedMouseWheel)
                            }
                        }, {
                            key: "_addItems",
                            value: function() {
                                for (var t = W.data.userDecorations, e = t.length, n = 4 === e ? 2 * e : e, i = 0; i < n; i++) {
                                    var r = t[i % e],
                                        o = new rn(this._getDecorConfigByName(r));
                                    o.x = i % 2 == 0 ? 148 : 84, o.oy = o.y = 77 + 158 * i, this.itemContainer.addChild(o)
                                }
                                this.scrollHeight = 158 * n, this.scrollingEnabled = e > 3, this.scrollingEnabled ? this.scrollY = this.scrollHeight / 2 - 154 : this.itemContainer.y = 384 - this.scrollHeight / 2
                            }
                        }, {
                            key: "_getDecorConfigByName",
                            value: function(t) {
                                return A.ah.find((function(e) {
                                    return e.name === t
                                }))
                            }
                        }, {
                            key: "_onArrowClick",
                            value: function(t) {
                                r.ZP.isTweening(this) || (t.target === this.upArrow ? r.ZP.to(this, {
                                    scrollY: "+=".concat(474)
                                }) : r.ZP.to(this, {
                                    scrollY: "+=".concat(-474)
                                }))
                            }
                        }, {
                            key: "_onMouseOver",
                            value: function(t) {
                                this.isMouseOver = "pointerover" === t.type
                            }
                        }, {
                            key: "_handleMouseWheel",
                            value: function(t) {
                                this.isMouseOver && (this.scrollY -= (0, tn.Z)(t.deltaY, -40, 40))
                            }
                        }]), p
                    }(s.W20),
                    an = "Tool",
                    sn = function() {
                        function t() {
                            (0, c.Z)(this, t)
                        }
                        return (0, u.Z)(t, null, [{
                            key: "sendEvent",
                            value: function(t, e) {
                                var n;
                                ! function(t) {
                                    var e = {
                                        eventType: "event34",
                                        subgameName: t,
                                        networkAttribution: "dnw",
                                        showName: "Alice"
                                    };
                                    try {
                                        window.DisneyJS && window.DisneyJS.nativeCall && window.DisneyJS.nativeCall({
                                            msg: "sendGameEvent",
                                            payload: e
                                        })
                                    } catch (t) {
                                        console.log(t)
                                    }
                                    H("sendGameEvent: ".concat(JSON.stringify(e)))
                                }((n = ["AliceBakery", t, e], n.join("_")))
                            }
                        }]), t
                    }();
                var cn = function(t) {
                    (0, h.Z)(o, t);
                    var e, n, i = (e = o, n = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                        } catch (t) {
                            return !1
                        }
                    }(), function() {
                        var t, i = (0, d.Z)(e);
                        if (n) {
                            var r = (0, d.Z)(this).constructor;
                            t = Reflect.construct(i, arguments, r)
                        } else t = i.apply(this, arguments);
                        return (0, f.Z)(this, t)
                    });

                    function o() {
                        return (0, c.Z)(this, o), i.call(this, tt)
                    }
                    return (0, u.Z)(o, [{
                        key: "buildScene",
                        value: function() {
                            var t = this,
                                e = s.P6Y.TextureCache;
                            this.background = new s.jyi(e["background-kitchen-blur"]), this.background.anchor.set(.5), this.table = new s.jyi(e["kitchen-table"]), this.table.anchor.set(.5, 1), this.table.position.y = 505, this.offsetContainer = new s.W20, this.offsetContainer.tickChildren = !0, this.cakeContainer = new s.W20, this.cakeContainer.position.set(0, 260), this.sidePanel = new on(this.app), this.magicIngredients = new ze, this.helperAlice = new Fe, this.helperCookie = new Je, this.dragLayer = new kt("default", (function(e) {
                                return t.onDragStart(e)
                            }), (function() {
                                return t.onDragEnd()
                            })), this.dragLayer.addDropZone(new Yt({
                                id: "cake",
                                rect: new s.AeJ(-230, -760, 460, 840),
                                local: this.cakeContainer,
                                triggerOnOver: !1,
                                onDrop: function(e) {
                                    return t.onDecorationAdd(e)
                                }
                            })), this.dragLayer.addDropZone(new Yt({
                                id: "magic",
                                rect: new s.AeJ(-138, -800, 276, 800),
                                local: this.cakeContainer,
                                triggerOnOver: !0,
                                onDrop: function(e) {
                                    return t.onMagicAdd(e)
                                }
                            })), this.confirmButton = new Ke, this.confirmButton.voLines = ["vo-instruct-18"], this.confirmButton.on("pointertap", this.onConfirmClick, this), this.cake = new ae(this.sceneManager.changeData.data.recipeData), this.cake.visible = !1, this.cakeContainer.addChild(this.cake), this.offsetContainer.addChild(this.table, this.cakeContainer, this.magicIngredients), this.view.addChild(this.background, this.offsetContainer, this.sidePanel, this.confirmButton, this.helperCookie, this.helperAlice, this.dragLayer)
                        }
                    }, {
                        key: "onTransitionOut",
                        value: function() {
                            V.play("bg-music-decoration")
                        }
                    }, {
                        key: "animateIn",
                        value: function() {
                            V.play("bg-music-decoration"), this.sidePanel.open(), this.cake.animateIn()
                        }
                    }, {
                        key: "start",
                        value: function() {
                            (0, q.Z)((0, d.Z)(o.prototype), "start", this).call(this), this.helperCookie.playLines(["vo-instruct-16", "vo-instruct-17"]), this.confirmButton.enabled = !0
                        }
                    }, {
                        key: "end",
                        value: function() {
                            (0, q.Z)((0, d.Z)(o.prototype), "end", this).call(this), this.confirmButton.enabled = !1
                        }
                    }, {
                        key: "update",
                        value: function(t) {
                            if (this.view) {
                                var e = this.app.screen,
                                    n = 1 - (e.width - B) / 640,
                                    i = this.sidePanel.visualOffset + (e.width - this.sidePanel.visualOffset) / 2 - e.width / 2;
                                this.offsetContainer.x = i * n
                            }
                        }
                    }, {
                        key: "onConfirmClick",
                        value: function() {
                            var t = this;
                            r.ZP.delayedCall(.1, (function() {
                                return t.gotoMagicIngredients()
                            }))
                        }
                    }, {
                        key: "gotoMagicIngredients",
                        value: function() {
                            this.cake.interactive = !1, this.cake.interactiveChildren = !1, this.sidePanel.close(), this.confirmButton.hide(), this.magicIngredients.show(), this.helperCookie.playLines(["vo-instruct-19", "vo-instruct-20"]), r.ZP.to(this.table, {
                                pixi: {
                                    y: "+=140"
                                },
                                duration: 1,
                                ease: ot.Ll.easeInOut
                            }), r.ZP.to(this.cake, {
                                pixi: {
                                    y: "+=140"
                                },
                                duration: 1,
                                ease: ot.Ll.easeInOut
                            })
                        }
                    }, {
                        key: "onDragStart",
                        value: function() {}
                    }, {
                        key: "onDragEnd",
                        value: function() {}
                    }, {
                        key: "onDecorationAdd",
                        value: function(t) {
                            var e = this;
                            this.cake.addItem(t, (function(t) {
                                return e._onItemAddComplete(t)
                            }))
                        }
                    }, {
                        key: "onMagicAdd",
                        value: function(t) {
                            var e = this;
                            sn.sendEvent("Ingredient", t.config.analyticsName), this.magicIngredients.hide(), this.cake.addMagicItem(t).then((function() {
                                return e._onMagicItemAddComplete(t)
                            }))
                        }
                    }, {
                        key: "_onItemAddComplete",
                        value: function(t) {
                            3 === this.cake.numDecorations && this.helperCookie.playLines("vo-instruct-18")
                        }
                    }, {
                        key: "_onMagicItemAddComplete",
                        value: function(t) {
                            var e = this;
                            r.ZP.to(this.table, {
                                pixi: {
                                    y: "-=140"
                                },
                                duration: 1,
                                ease: ot.Ll.easeInOut
                            }), r.ZP.to(this.cake, {
                                pixi: {
                                    y: "-=140"
                                },
                                duration: 1,
                                ease: ot.Ll.easeInOut
                            }), this.cake.preserve = !0, r.ZP.delayedCall(1, (function() {
                                T.play("vo-".concat(t.config.voExtended), (function() {
                                    v.i$.go(et, {
                                        data: {
                                            cake: e.cake,
                                            characterSelect: !0,
                                            magic: t.name
                                        }
                                    })
                                }))
                            }))
                        }
                    }]), o
                }(pt);
                var un = function(t) {
                    (0, h.Z)(r, t);
                    var e, n, i = (e = r, n = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                        } catch (t) {
                            return !1
                        }
                    }(), function() {
                        var t, i = (0, d.Z)(e);
                        if (n) {
                            var r = (0, d.Z)(this).constructor;
                            t = Reflect.construct(i, arguments, r)
                        } else t = i.apply(this, arguments);
                        return (0, f.Z)(this, t)
                    });

                    function r(t) {
                        var e;
                        return (0, c.Z)(this, r), (e = i.call(this, s.P6Y.TextureCache["head-".concat(t.name)])).name = t.name, e.config = t, e
                    }
                    return (0, u.Z)(r)
                }(lt);
                var ln = [{
                        x: -298,
                        y: -108
                    }, {
                        x: 0,
                        y: -108
                    }, {
                        x: 298,
                        y: -108
                    }, {
                        x: -160,
                        y: 152
                    }, {
                        x: 160,
                        y: 152
                    }],
                    hn = function(t) {
                        (0, h.Z)(r, t);
                        var e, n, i = (e = r, n = function() {
                            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                            if (Reflect.construct.sham) return !1;
                            if ("function" == typeof Proxy) return !0;
                            try {
                                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                            } catch (t) {
                                return !1
                            }
                        }(), function() {
                            var t, i = (0, d.Z)(e);
                            if (n) {
                                var r = (0, d.Z)(this).constructor;
                                t = Reflect.construct(i, arguments, r)
                            } else t = i.apply(this, arguments);
                            return (0, f.Z)(this, t)
                        });

                        function r() {
                            var t;
                            return (0, c.Z)(this, r), (t = i.call(this)).interactiveChildren = !1, t.header = new s.jyi(s.P6Y.TextureCache["text-choose-a-friend"]), t.header.anchor.set(.5), t.header.position.y = -285, t.addChild(t.header), t._populateItems(), t
                        }
                        return (0, u.Z)(r, [{
                            key: "_populateItems",
                            value: function() {
                                for (var t = A.Rr, e = 0; e < t.length; e++) {
                                    var n = t[e],
                                        i = new un(n);
                                    i.position.copyFrom(ln[e]), i.on("pointertap", this._onCharacterSelect, this), i.enabled = !0, this.addChild(i)
                                }
                            }
                        }, {
                            key: "_onCharacterSelect",
                            value: function(t) {
                                T.stop(), this.interactiveChildren = !1;
                                var e = t.target;
                                sn.sendEvent("Character", e.config.analyticsName), this.emit("selected", e.name)
                            }
                        }]), r
                    }(s.W20);
                var fn = (0, at.oC)({
                        alpha: {
                            start: 1,
                            end: 0
                        },
                        scale: {
                            start: .001,
                            end: 1,
                            minimumScaleMultiplier: .5
                        },
                        color: {
                            start: "#ffffff",
                            end: "#ffffff"
                        },
                        speed: {
                            start: 10,
                            end: 60,
                            minimumSpeedMultiplier: .4
                        },
                        acceleration: {
                            x: 0,
                            y: 0
                        },
                        maxSpeed: 0,
                        startRotation: {
                            min: 0,
                            max: 360
                        },
                        noRotation: !0,
                        rotationSpeed: {
                            min: 0,
                            max: 20
                        },
                        lifetime: {
                            min: 1,
                            max: 1
                        },
                        blendMode: "normal",
                        frequency: .1,
                        emitterLifetime: -1,
                        maxParticles: 30,
                        pos: {
                            x: 0,
                            y: 0
                        },
                        addAtBack: !1,
                        spawnType: "point"
                    }, ["heart-particle"]),
                    dn = function(t) {
                        (0, h.Z)(r, t);
                        var e, n, i = (e = r, n = function() {
                            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                            if (Reflect.construct.sham) return !1;
                            if ("function" == typeof Proxy) return !0;
                            try {
                                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                            } catch (t) {
                                return !1
                            }
                        }(), function() {
                            var t, i = (0, d.Z)(e);
                            if (n) {
                                var r = (0, d.Z)(this).constructor;
                                t = Reflect.construct(i, arguments, r)
                            } else t = i.apply(this, arguments);
                            return (0, f.Z)(this, t)
                        });

                        function r(t) {
                            var e;
                            return (0, c.Z)(this, r), (e = i.call(this, t, fn)).autoUpdate = !0, e.emit = !1, e
                        }
                        return (0, u.Z)(r, [{
                            key: "emitAt",
                            value: function(t) {
                                this.updateSpawnPos(t.x, t.y)
                            }
                        }]), r
                    }(at.Q5);
                var pn = function(t) {
                    (0, h.Z)(r, t);
                    var e, n, i = (e = r, n = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                        } catch (t) {
                            return !1
                        }
                    }(), function() {
                        var t, i = (0, d.Z)(e);
                        if (n) {
                            var r = (0, d.Z)(this).constructor;
                            t = Reflect.construct(i, arguments, r)
                        } else t = i.apply(this, arguments);
                        return (0, f.Z)(this, t)
                    });

                    function r(t) {
                        var e;
                        (0, c.Z)(this, r), e = i.call(this);
                        var n = s.P6Y.TextureCache["butterfly-wing"];
                        return e.leftWing = new s.jyi(n), e.leftWing.pivot.set(72, 73), e.leftWing.position.set(-6, 3), e.rightWing = new s.jyi(n), e.rightWing.pivot.set(72, 73), e.rightWing.position.set(6, 3), e.rightWing.scale.set(-1, 1), e.body = new s.jyi(s.P6Y.TextureCache["butterfly-body"]), e.body.anchor.set(.5), e.addChild(e.leftWing, e.rightWing, e.body), e.time = 0, e.heartEmitter = new dn(t), e
                    }
                    return (0, u.Z)(r, [{
                        key: "tick",
                        value: function(t, e) {
                            this.time += t, this.leftWing.scale.x = .8 + .2 * Math.sin(8 * this.time), this.rightWing.scale.x = -1 * (.8 + .2 * Math.sin(8 * this.time)), this.heartEmitter.updateSpawnPos(this.x, this.y)
                        }
                    }]), r
                }(s.W20);
                var vn = function(t) {
                    (0, h.Z)(p, t);
                    var e, n, i, o, a, l = (o = p, a = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                        } catch (t) {
                            return !1
                        }
                    }(), function() {
                        var t, e = (0, d.Z)(o);
                        if (a) {
                            var n = (0, d.Z)(this).constructor;
                            t = Reflect.construct(e, arguments, n)
                        } else t = e.apply(this, arguments);
                        return (0, f.Z)(this, t)
                    });

                    function p() {
                        return (0, c.Z)(this, p), l.call(this)
                    }
                    return (0, u.Z)(p, [{
                        key: "load",
                        value: function() {
                            return X.loadTags("transition")
                        }
                    }, {
                        key: "init",
                        value: function() {
                            this.view = new s.W20, this.view.tickChildren = !0, this.background = new s.jyi(s.P6Y.TextureCache["transition-frosting"]), this.background.interactive = !0, this.background.anchor.set(.5), this.heartsParticles = new s.W20, this.butterfly = new pn(this.heartsParticles), this.butterfly.y = 500, this.butterfly.visible = !1, this.view.addChild(this.background, this.heartsParticles, this.butterfly), !0 === this.sceneManager.changeData.data.characterSelect && (this.characterSelect = new hn, this.view.addChild(this.characterSelect))
                        }
                    }, {
                        key: "onAdded",
                        value: function() {
                            this.view.y = -this.background.height / 2 - 384
                        }
                    }, {
                        key: "animateIn",
                        value: (i = (0, nt.Z)(rt().mark((function t() {
                            return rt().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return C.play("transition-frosting-in"), t.next = 3, r.ZP.to(this.view, {
                                            pixi: {
                                                y: 0
                                            },
                                            duration: 1,
                                            ease: ot.Ll.easeOut
                                        });
                                    case 3:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this)
                        }))), function() {
                            return i.apply(this, arguments)
                        })
                    }, {
                        key: "animateOut",
                        value: (n = (0, nt.Z)(rt().mark((function t() {
                            return rt().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return C.play("transition-frosting-in"), t.next = 3, r.ZP.to(this.view, {
                                            pixi: {
                                                y: this.background.height / 2 + 384
                                            },
                                            duration: 1,
                                            ease: ot.Ll.easeIn
                                        });
                                    case 3:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this)
                        }))), function() {
                            return n.apply(this, arguments)
                        })
                    }, {
                        key: "start",
                        value: (e = (0, nt.Z)(rt().mark((function t() {
                            var e = this;
                            return rt().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (!this.characterSelect) {
                                            t.next = 6;
                                            break
                                        }
                                        return T.play("vo-instruct-21"), t.next = 4, new Promise((function(t) {
                                            e.characterSelect.once("selected", (function(n) {
                                                return e.onCharacterSelect(n, t)
                                            })), e.characterSelect.interactiveChildren = !0
                                        }));
                                    case 4:
                                        t.next = 9;
                                        break;
                                    case 6:
                                        this.butterfly.visible = !0, this.butterfly.heartEmitter.emit = !0, r.ZP.to(this.butterfly, {
                                            motionPath: {
                                                path: "M.5,495.5s116-263-19-335-307-99-272-269,190-134,356-101,304-167,296-287",
                                                autoRotate: Math.PI / 2,
                                                useRadians: !0
                                            },
                                            ease: ot.bJ.easeInOut,
                                            duration: 10,
                                            repeat: -1,
                                            onRepeat: function() {
                                                e.butterfly.heartEmitter.cleanup()
                                            }
                                        });
                                    case 9:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this)
                        }))), function() {
                            return e.apply(this, arguments)
                        })
                    }, {
                        key: "destroy",
                        value: function() {
                            this.view && (this.butterfly.heartEmitter.destroy(), this.view.destroy({
                                children: !0
                            }), this.view = null), r.ZP.killTweensOf(this.butterfly), (0, q.Z)((0, d.Z)(p.prototype), "destroy", this).call(this)
                        }
                    }, {
                        key: "onCharacterSelect",
                        value: function(t, e) {
                            this.sceneManager.changeData.data.character = t, e()
                        }
                    }]), p
                }(v.qK);
                var yn = function(t) {
                    (0, h.Z)(o, t);
                    var e, n, i = (e = o, n = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                        } catch (t) {
                            return !1
                        }
                    }(), function() {
                        var t, i = (0, d.Z)(e);
                        if (n) {
                            var r = (0, d.Z)(this).constructor;
                            t = Reflect.construct(i, arguments, r)
                        } else t = i.apply(this, arguments);
                        return (0, f.Z)(this, t)
                    });

                    function o(t, e) {
                        var n;
                        return (0, c.Z)(this, o), (n = i.call(this, t, e)).enabled = !0, n.halfHeight = n.height / 2, n.returnOnInvalidDrop = !0, n.shadow = new s.jyi(s.P6Y.TextureCache["basic-ingredient-shadow"]), n.shadow.offset = new s.E9j, n.shadow.anchor.set(.5), n.shadow.owner = (0, l.Z)(n), n
                    }
                    return (0, u.Z)(o, [{
                        key: "onDragStart",
                        value: function() {
                            (0, q.Z)((0, d.Z)(o.prototype), "onDragStart", this).call(this), r.ZP.to(this.shadow, {
                                pixi: {
                                    alpha: 0
                                },
                                duration: .25,
                                ease: ot.lD.easeInOut
                            })
                        }
                    }, {
                        key: "onReturnStart",
                        value: function(t) {
                            r.ZP.to(this.shadow, {
                                pixi: {
                                    alpha: 1
                                },
                                delay: t.totalDuration() - .25,
                                duration: .25,
                                ease: ot.lD.easeInOut
                            })
                        }
                    }, {
                        key: "destroy",
                        value: function(t) {
                            (0, q.Z)((0, d.Z)(o.prototype), "destroy", this).call(this, t), this.shadow.destroyed || this.shadow.destroy()
                        }
                    }]), o
                }(Pt);
                var gn = function(t) {
                    (0, h.Z)(r, t);
                    var e, n, i = (e = r, n = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                        } catch (t) {
                            return !1
                        }
                    }(), function() {
                        var t, i = (0, d.Z)(e);
                        if (n) {
                            var r = (0, d.Z)(this).constructor;
                            t = Reflect.construct(i, arguments, r)
                        } else t = i.apply(this, arguments);
                        return (0, f.Z)(this, t)
                    });

                    function r() {
                        var t;
                        return (0, c.Z)(this, r), (t = i.call(this, s.P6Y.TextureCache["basic-ingredient-butter"], "butter")).shadow.scale.set(.7, .65), t.shadow.offset.set(0, 30), t
                    }
                    return (0, u.Z)(r)
                }(yn);
                var mn = function(t) {
                    (0, h.Z)(a, t);
                    var e, n, i, o = (n = a, i = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                        } catch (t) {
                            return !1
                        }
                    }(), function() {
                        var t, e = (0, d.Z)(n);
                        if (i) {
                            var r = (0, d.Z)(this).constructor;
                            t = Reflect.construct(e, arguments, r)
                        } else t = e.apply(this, arguments);
                        return (0, f.Z)(this, t)
                    });

                    function a() {
                        var t;
                        return (0, c.Z)(this, a), (t = o.call(this, null, "egg")).shadow.scale.set(.4, .6), t.shadow.offset.set(-10, 50), t.hitArea = new s.AeJ(-50, -50, 100, 100), t._build(), t
                    }
                    return (0, u.Z)(a, [{
                        key: "playAddAnimation",
                        value: (e = (0, nt.Z)(rt().mark((function t(e, n) {
                            var i, o = this;
                            return rt().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return this.removeChild(this.baseSprite), this.addChild(this.yolkAnim, this.eggAnim), (i = r.ZP.timeline()).to(this.eggAnim, {
                                            pixi: {
                                                angle: 0
                                            },
                                            duration: .5
                                        }), i.call((function() {
                                            o._addAndPlayPour(), n()
                                        }), null), i.call(e, [1], "+=1"), i.to({}, {
                                            duration: 1.4
                                        }), t.next = 9, i.play();
                                    case 9:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this)
                        }))), function(t, n) {
                            return e.apply(this, arguments)
                        })
                    }, {
                        key: "_build",
                        value: function() {
                            var t = s.aNw.shared.resources["ss-basic-ingredients"].spritesheet;
                            this.eggAnim = new s.KgH(t.animations.egg), this.eggAnim.pivot.set(96, 102), this.eggAnim.onComplete = function() {
                                this.visible = !1
                            }, this.eggAnim.animationSpeed = .5, this.eggAnim.loop = !1, this.eggAnim.angle = 90, this.yolkAnim = new s.KgH(t.animations.eggyolk), this.yolkAnim.pivot.set(96, 102), this.yolkAnim.animationSpeed = .5, this.yolkAnim.loop = !1, this.yolkAnim.visible = !1, this.baseSprite = new s.jyi(s.P6Y.TextureCache["basic-ingredient-egg"]), this.baseSprite.anchor.set(.5), this.baseSprite.angle = 30, this.addChild(this.baseSprite)
                        }
                    }, {
                        key: "_addAndPlayPour",
                        value: function() {
                            this.yolkAnim.visible = !0, this.yolkAnim.play(), this.eggAnim.play()
                        }
                    }]), a
                }(yn);
                var kn = function(t) {
                    (0, h.Z)(a, t);
                    var e, n, i, o = (n = a, i = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                        } catch (t) {
                            return !1
                        }
                    }(), function() {
                        var t, e = (0, d.Z)(n);
                        if (i) {
                            var r = (0, d.Z)(this).constructor;
                            t = Reflect.construct(e, arguments, r)
                        } else t = e.apply(this, arguments);
                        return (0, f.Z)(this, t)
                    });

                    function a() {
                        var t;
                        return (0, c.Z)(this, a), (t = o.call(this, null, "flour")).bowlAddOffset.set(0, 24), t.shadow.offset.set(-4, 102), t._build(), t
                    }
                    return (0, u.Z)(a, [{
                        key: "playAddAnimation",
                        value: (e = (0, nt.Z)(rt().mark((function t(e, n) {
                            var i, o = this;
                            return rt().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return (i = r.ZP.timeline()).to(this.baseSprite, {
                                            pixi: {
                                                x: -46,
                                                y: -26,
                                                angle: 99
                                            },
                                            duration: .6,
                                            ease: ot.lD.easeInOut
                                        }), i.call((function() {
                                            o._addAndPlayPour(), e(1), n()
                                        })), i.to(this.baseSprite, {
                                            pixi: {
                                                x: -52,
                                                y: -30,
                                                angle: 112
                                            },
                                            duration: .06,
                                            ease: ot.lD.easeInOut
                                        }), i.to(this.baseSprite, {
                                            pixi: {
                                                x: -52,
                                                y: -80
                                            },
                                            duration: .4,
                                            ease: ot.lD.easeOut
                                        }), i.to(this.baseSprite, {
                                            pixi: {
                                                x: -92,
                                                y: -35,
                                                angle: 67
                                            },
                                            duration: .2,
                                            ease: ot.lD.easeInOut
                                        }), i.to(this.baseSprite, {
                                            pixi: {
                                                alpha: 0
                                            },
                                            duration: .2,
                                            ease: ot.lD.easeInOut
                                        }, "<"), t.next = 9, i.play();
                                    case 9:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this)
                        }))), function(t, n) {
                            return e.apply(this, arguments)
                        })
                    }, {
                        key: "_build",
                        value: function() {
                            this.baseSprite = new s.jyi(s.P6Y.TextureCache["basic-ingredient-flour"]), this.baseSprite.pivot.set(106, 99), this.baseSprite.heap = new s.jyi(s.P6Y.TextureCache["basic-ingredient-flour-heap"]), this.baseSprite.heap.pivot.set(-30, 28), this.baseSprite.addChild(this.baseSprite.heap);
                            var t = s.aNw.shared.resources["ss-basic-ingredients"].spritesheet;
                            this.pourAnim = new s.KgH(t.animations.flourpour), this.pourAnim.pivot.set(10, 65), this.pourAnim.animationSpeed = .5, this.pourAnim.loop = !1, this.pourAnim.visible = !1, this.addChild(this.baseSprite, this.pourAnim)
                        }
                    }, {
                        key: "_addAndPlayPour",
                        value: function() {
                            this.baseSprite.heap.visible = !1, this.pourAnim.visible = !0, this.pourAnim.play()
                        }
                    }]), a
                }(yn);
                var wn = function(t) {
                    (0, h.Z)(a, t);
                    var e, n, i, o = (n = a, i = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                        } catch (t) {
                            return !1
                        }
                    }(), function() {
                        var t, e = (0, d.Z)(n);
                        if (i) {
                            var r = (0, d.Z)(this).constructor;
                            t = Reflect.construct(e, arguments, r)
                        } else t = e.apply(this, arguments);
                        return (0, f.Z)(this, t)
                    });

                    function a() {
                        var t;
                        return (0, c.Z)(this, a), (t = o.call(this, null, "milk")).shadow.scale.set(.8, .9), t.shadow.offset.set(20, 86), t._build(), t
                    }
                    return (0, u.Z)(a, [{
                        key: "playAddAnimation",
                        value: (e = (0, nt.Z)(rt().mark((function t(e, n) {
                            var i, o = this;
                            return rt().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return (i = r.ZP.timeline()).to(this.baseSprite, {
                                            pixi: {
                                                x: -109,
                                                y: 27,
                                                angle: 83.2
                                            },
                                            duration: .5
                                        }), i.to(this.baseSprite, {
                                            pixi: {
                                                x: -91,
                                                y: -63,
                                                angle: 98.2
                                            },
                                            duration: .5,
                                            ease: ot.lD.easeInOut
                                        }), i.call((function() {
                                            o._addAndPlayPour(), n()
                                        }), null, "<+0.1"), i.call(e, [1.3], "<+0.1"), i.to(this.baseSprite, {
                                            pixi: {
                                                x: -141,
                                                y: -29,
                                                angle: 64.5
                                            },
                                            duration: .2,
                                            ease: ot.lD.easeInOut
                                        }, ">+0.5"), i.to(this.baseSprite, {
                                            pixi: {
                                                alpha: 0
                                            },
                                            duration: .2,
                                            ease: ot.lD.easeInOut
                                        }, "<"), t.next = 9, i.play();
                                    case 9:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this)
                        }))), function(t, n) {
                            return e.apply(this, arguments)
                        })
                    }, {
                        key: "_build",
                        value: function() {
                            this.animationContainer = new s.W20, this.animationContainer.scale.set(-1, 1), this.addChild(this.animationContainer), this.baseSprite = new s.jyi(s.P6Y.TextureCache["basic-ingredient-milk"]), this.baseSprite.anchor.set(.5);
                            var t = s.aNw.shared.resources["ss-basic-ingredients"].spritesheet;
                            this.pourAnim = new s.KgH(t.animations.milkpour), this.pourAnim.pivot.set(65, 0), this.pourAnim.animationSpeed = .5, this.pourAnim.loop = !1, this.pourAnim.visible = !1, this.animationContainer.addChild(this.baseSprite, this.pourAnim)
                        }
                    }, {
                        key: "_addAndPlayPour",
                        value: function() {
                            this.pourAnim.visible = !0, this.pourAnim.play()
                        }
                    }]), a
                }(yn);
                var bn = function(t) {
                    (0, h.Z)(a, t);
                    var e, n, i, o = (n = a, i = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                        } catch (t) {
                            return !1
                        }
                    }(), function() {
                        var t, e = (0, d.Z)(n);
                        if (i) {
                            var r = (0, d.Z)(this).constructor;
                            t = Reflect.construct(e, arguments, r)
                        } else t = e.apply(this, arguments);
                        return (0, f.Z)(this, t)
                    });

                    function a() {
                        var t;
                        return (0, c.Z)(this, a), (t = o.call(this, null, "sugar")).bowlAddOffset.set(0, 24), t.shadow.offset.set(-4, 80), t._build(), t
                    }
                    return (0, u.Z)(a, [{
                        key: "playAddAnimation",
                        value: (e = (0, nt.Z)(rt().mark((function t(e, n) {
                            var i, o = this;
                            return rt().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return (i = r.ZP.timeline()).to(this.baseSprite, {
                                            pixi: {
                                                x: -36,
                                                y: -21,
                                                angle: 77.8
                                            },
                                            duration: .6,
                                            ease: ot.lD.easeInOut
                                        }), i.call((function() {
                                            o._addAndPlayPour(), e(1), n()
                                        })), i.to(this.baseSprite, {
                                            pixi: {
                                                x: -52,
                                                y: -30,
                                                angle: 116
                                            },
                                            duration: 0,
                                            ease: ot.lD.easeInOut
                                        }), i.to(this.baseSprite, {
                                            pixi: {
                                                x: -52,
                                                y: -80
                                            },
                                            duration: .4,
                                            ease: ot.lD.easeOut
                                        }), i.to(this.baseSprite, {
                                            pixi: {
                                                x: -92,
                                                y: -35,
                                                angle: 67
                                            },
                                            duration: .2,
                                            ease: ot.lD.easeInOut
                                        }), i.to(this.baseSprite, {
                                            pixi: {
                                                alpha: 0
                                            },
                                            duration: .2,
                                            ease: ot.lD.easeInOut
                                        }, "<"), t.next = 9, i.play();
                                    case 9:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this)
                        }))), function(t, n) {
                            return e.apply(this, arguments)
                        })
                    }, {
                        key: "_build",
                        value: function() {
                            this.baseSprite = new s.jyi(s.P6Y.TextureCache["basic-ingredient-sugar"]), this.baseSprite.pivot.set(106, 99), this.baseSprite.cover = new s.jyi(s.P6Y.TextureCache["basic-ingredient-sugar-cover"]), this.baseSprite.cover.visible = !1, this.baseSprite.addChild(this.baseSprite.cover), this.baseSprite.scale.set(.9);
                            var t = s.aNw.shared.resources["ss-basic-ingredients"].spritesheet;
                            this.pourAnim = new s.KgH(t.animations.sugarpour), this.pourAnim.pivot.set(30, 46), this.pourAnim.animationSpeed = .5, this.pourAnim.loop = !1, this.pourAnim.visible = !1, this.pourAnim.scale.set(.9), this.addChild(this.baseSprite, this.pourAnim)
                        }
                    }, {
                        key: "_addAndPlayPour",
                        value: function() {
                            this.baseSprite.cover.visible = !0, this.pourAnim.visible = !0, this.pourAnim.play()
                        }
                    }]), a
                }(yn);
                var xn = [{
                        name: bt,
                        x: -301,
                        y: 85,
                        priority: 1
                    }, {
                        name: bt,
                        x: -378,
                        y: 115,
                        priority: 2
                    }, {
                        name: xt,
                        x: 323,
                        y: 90,
                        priority: 1
                    }, {
                        name: xt,
                        x: 412,
                        y: 121,
                        priority: 2
                    }, {
                        name: Zt,
                        x: -251,
                        y: 233,
                        priority: 1
                    }, {
                        name: Zt,
                        x: -176,
                        y: 234,
                        priority: 2
                    }, {
                        name: Zt,
                        x: -213,
                        y: 176,
                        priority: 3
                    }, {
                        name: _t,
                        x: 312,
                        y: 181,
                        priority: 1
                    }, {
                        name: _t,
                        x: 214,
                        y: 210,
                        priority: 2
                    }, {
                        name: Ct,
                        x: -46,
                        y: 232,
                        priority: 1
                    }, {
                        name: Ct,
                        x: 65,
                        y: 231,
                        priority: 2
                    }, {
                        name: Ct,
                        x: 9,
                        y: 250,
                        priority: 3
                    }],
                    Zn = {};
                Zn.flour = kn, Zn.sugar = bn, Zn.butter = gn, Zn.milk = wn, Zn.egg = mn;
                var _n = [bt, xt, Zt, _t, Ct],
                    Cn = ["flour", "butter", "egg", "milk", "sugar"],
                    Rn = new s.E9j,
                    Pn = !0,
                    Sn = function(t) {
                        (0, h.Z)(l, t);
                        var e, n, i, o, a = (i = l, o = function() {
                            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                            if (Reflect.construct.sham) return !1;
                            if ("function" == typeof Proxy) return !0;
                            try {
                                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                            } catch (t) {
                                return !1
                            }
                        }(), function() {
                            var t, e = (0, d.Z)(i);
                            if (o) {
                                var n = (0, d.Z)(this).constructor;
                                t = Reflect.construct(e, arguments, n)
                            } else t = e.apply(this, arguments);
                            return (0, f.Z)(this, t)
                        });

                        function l() {
                            var t;
                            return (0, c.Z)(this, l), (t = a.call(this)).visible = !1, t.interactive = !0, t.list = t._createIngredientList(), t.shadows = new s.W20, t.particles = new s.TYe(300, {
                                uvs: !0,
                                rotation: !0,
                                alpha: !0
                            }), t.groups = t._createGroups(), t.addChild(t.shadows, t.groups, t.particles), t
                        }
                        return (0, u.Z)(l, [{
                            key: "hasIngredients",
                            get: function() {
                                for (var t = this.groups.children, e = 0; e < t.length; e++)
                                    if (t[e].children.length) return !0;
                                return !1
                            }
                        }, {
                            key: "show",
                            value: (n = (0, nt.Z)(rt().mark((function t() {
                                var e, n, i;
                                return rt().wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            for (this.groups.children.forEach((function(t) {
                                                    t.y += 600
                                                })), this._updateShadows(!1), this.visible = !0, e = r.ZP.timeline({
                                                    paused: !0,
                                                    defaults: {
                                                        ease: ot.Ll.easeOut,
                                                        duration: 1
                                                    }
                                                }), n = 0; n < Cn.length; n++) i = this.groups.getChildByName(Cn[n]), e.to(i, {
                                                pixi: {
                                                    y: "-=".concat(600)
                                                }
                                            }, n > 0 ? "-=90%" : "<");
                                            return t.next = 8, e.play();
                                        case 8:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this)
                            }))), function() {
                                return n.apply(this, arguments)
                            })
                        }, {
                            key: "hide",
                            value: (e = (0, nt.Z)(rt().mark((function t() {
                                return rt().wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            this.visible = !1;
                                        case 1:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this)
                            }))), function() {
                                return e.apply(this, arguments)
                            })
                        }, {
                            key: "highlighItemsInOrder",
                            value: function() {
                                var t = this,
                                    e = r.ZP.timeline();
                                e.call((function() {
                                    return t._highlightGroup("flour")
                                }), null, .8), e.call((function() {
                                    return t._highlightGroup("butter")
                                }), null, 1.8), e.call((function() {
                                    return t._highlightGroup("egg")
                                }), null, 2.7), e.call((function() {
                                    return t._highlightGroup("milk")
                                }), null, 3.6), e.call((function() {
                                    return t._highlightGroup("sugar")
                                }), null, 4.4)
                            }
                        }, {
                            key: "highlighAllItems",
                            value: function() {
                                this._highlightGroup("flour", 5), this._highlightGroup("butter", 5), this._highlightGroup("egg", 5), this._highlightGroup("milk", 5), this._highlightGroup("sugar", 5)
                            }
                        }, {
                            key: "tick",
                            value: function() {
                                this._updateShadows()
                            }
                        }, {
                            key: "_updateShadows",
                            value: function() {
                                for (var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0], e = this.shadows.children, n = 0; n < e.length; n++) {
                                    var i = e[n];
                                    i.position.copyFrom(this.toLocal(i.offset, i.owner, Rn, t))
                                }
                            }
                        }, {
                            key: "_createIngredientList",
                            value: function() {
                                var t = (0, Wt.Z)(xn);
                                t.sort((function(t, e) {
                                    return t.priority - e.priority
                                }));
                                var e = Pn ? 5 : A.H6.O;
                                return t.splice(e), Pn = !1, t
                            }
                        }, {
                            key: "_createGroups",
                            value: function() {
                                var t = this,
                                    e = new s.W20;
                                return _n.forEach((function(n) {
                                    var i = t._createGroup(n);
                                    e.addChild(i)
                                })), e
                            }
                        }, {
                            key: "_createGroup",
                            value: function(t) {
                                var e = this,
                                    n = new s.W20;
                                return n.name = t, n.emitter = new ut(this.particles), this.list.filter((function(e) {
                                    return e.name === t
                                })).forEach((function(t) {
                                    var i = new Zn[t.name];
                                    i.position.copyFrom(t), n.addChild(i), e.shadows.addChild(i.shadow)
                                })), n
                            }
                        }, {
                            key: "_highlightGroup",
                            value: function(t) {
                                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1.5,
                                    n = this.groups.getChildByName(t);
                                if (0 !== n.children.length) {
                                    var i = n.emitter;
                                    i.cleanup(), i.setRect(n.getLocalBounds()), i.emitForSeconds(e)
                                }
                            }
                        }]), l
                    }(s.W20);
                const On = JSON.parse('{"alpha":{"start":1,"end":0.64},"scale":{"start":0.5,"end":2,"minimumScaleMultiplier":1},"color":{"start":"#ffffff","end":"#ffffff"},"speed":{"start":800,"end":500,"minimumSpeedMultiplier":0.5},"acceleration":{"x":0,"y":2500},"maxSpeed":0,"startRotation":{"min":225,"max":320},"noRotation":true,"rotationSpeed":{"min":0,"max":20},"lifetime":{"min":0.3,"max":0.6},"blendMode":"normal","frequency":0.001,"emitterLifetime":0.2,"maxParticles":8,"pos":{"x":0,"y":0},"addAtBack":false,"spawnType":"point"}');
                var Tn = (0, at.oC)(On, ["splash-white-circle"]),
                    Bn = function(t) {
                        (0, h.Z)(r, t);
                        var e, n, i = (e = r, n = function() {
                            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                            if (Reflect.construct.sham) return !1;
                            if ("function" == typeof Proxy) return !0;
                            try {
                                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                            } catch (t) {
                                return !1
                            }
                        }(), function() {
                            var t, i = (0, d.Z)(e);
                            if (n) {
                                var r = (0, d.Z)(this).constructor;
                                t = Reflect.construct(i, arguments, r)
                            } else t = i.apply(this, arguments);
                            return (0, f.Z)(this, t)
                        });

                        function r(t) {
                            var e;
                            return (0, c.Z)(this, r), (e = i.call(this, t, Tn)).autoUpdate = !0, e.emit = !1, e
                        }
                        return (0, u.Z)(r, [{
                            key: "emitAt",
                            value: function(t) {
                                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : .2;
                                this.destroyed || (this.updateSpawnPos(t.x, t.y), this.emitterLifetime = e, this.playOnce())
                            }
                        }]), r
                    }(at.Q5);
                var In = function(t) {
                    (0, h.Z)(a, t);
                    var e, n, i, o = (n = a, i = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                        } catch (t) {
                            return !1
                        }
                    }(), function() {
                        var t, e = (0, d.Z)(n);
                        if (i) {
                            var r = (0, d.Z)(this).constructor;
                            t = Reflect.construct(e, arguments, r)
                        } else t = e.apply(this, arguments);
                        return (0, f.Z)(this, t)
                    });

                    function a(t) {
                        var e;
                        (0, c.Z)(this, a), (e = o.call(this, null, t.name, t)).bowlAddOffset.set(0, 20);
                        var n = s.P6Y.rgb2hex(t.rgbColor.map((function(t) {
                                return t / 255
                            }))),
                            i = s.aNw.shared.resources["ss-measuringcup"].spritesheet;
                        e.cupAnim = new s.KgH(i.animations.cuppour), e.cupAnim.pivot.set(95, 162), e.cupAnim.animationSpeed = .5, e.cupAnim.loop = !1, e.liquidAnim = new s.KgH(i.animations.juicepour), e.liquidAnim.pivot.set(75, 22), e.liquidAnim.animationSpeed = .5, e.liquidAnim.loop = !1;
                        var r = new s.u8d.ColorMatrixFilter;
                        return r.tint(n, 1), e.liquidAnim.filters = [r], e.addChild(e.liquidAnim, e.cupAnim), e
                    }
                    return (0, u.Z)(a, [{
                        key: "playAddAnimation",
                        value: (e = (0, nt.Z)(rt().mark((function t(e) {
                            var n;
                            return rt().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return this.cupAnim.play(), this.liquidAnim.play(), (n = r.ZP.timeline({
                                            paused: !0
                                        })).call(e, [1], "<+0.5"), n.to(this, {
                                            duration: 1
                                        }, "<"), n.to(this.liquidAnim, {
                                            pixi: {
                                                alpha: 0
                                            },
                                            duration: .2
                                        }), n.to(this.cupAnim, {
                                            pixi: {
                                                angle: 30,
                                                alpha: 0
                                            },
                                            duration: .4
                                        }, "<"), t.next = 9, n.play();
                                    case 9:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this)
                        }))), function(t) {
                            return e.apply(this, arguments)
                        })
                    }]), a
                }(Pt);
                const An = JSON.parse('{"alpha":{"start":1,"end":0},"scale":{"start":0.5,"end":1,"minimumScaleMultiplier":1},"color":{"start":"#ffffff","end":"#ffffff"},"speed":{"start":100,"end":0,"minimumSpeedMultiplier":1},"acceleration":{"x":0,"y":0},"maxSpeed":0,"startRotation":{"min":180,"max":360},"noRotation":true,"rotationSpeed":{"min":0,"max":0},"lifetime":{"min":0.8,"max":1.4},"blendMode":"normal","frequency":0.2,"emitterLifetime":-1,"maxParticles":10,"pos":{"x":0,"y":0},"addAtBack":false,"spawnType":"point"}');
                var Ln = (0, at.oC)(An, ["poof"]),
                    En = function(t) {
                        (0, h.Z)(r, t);
                        var e, n, i = (e = r, n = function() {
                            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                            if (Reflect.construct.sham) return !1;
                            if ("function" == typeof Proxy) return !0;
                            try {
                                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                            } catch (t) {
                                return !1
                            }
                        }(), function() {
                            var t, i = (0, d.Z)(e);
                            if (n) {
                                var r = (0, d.Z)(this).constructor;
                                t = Reflect.construct(i, arguments, r)
                            } else t = i.apply(this, arguments);
                            return (0, f.Z)(this, t)
                        });

                        function r(t) {
                            var e;
                            return (0, c.Z)(this, r), (e = i.call(this, t, Ln)).autoUpdate = !0, e.emit = !1, e
                        }
                        return (0, u.Z)(r)
                    }(at.Q5);
                const Dn = JSON.parse('{"alpha":{"start":1,"end":0.3},"scale":{"start":0.2,"end":0.3,"minimumScaleMultiplier":1},"color":{"start":"#ffffff","end":"#ffffff"},"speed":{"start":600,"end":10,"minimumSpeedMultiplier":0.5},"acceleration":{"x":0,"y":0},"maxSpeed":0,"startRotation":{"min":240,"max":300},"noRotation":true,"rotationSpeed":{"min":-5,"max":5},"lifetime":{"min":0.7,"max":0.8},"blendMode":"normal","frequency":0.1,"emitterLifetime":-1,"maxParticles":50,"pos":{"x":0,"y":0},"addAtBack":true,"spawnType":"point"}');
                var Mn = (0, at.oC)(Dn, ["sparkle-5", "sparkle-4", "sparkle-3", "sparkle-2", "sparkle-1"]),
                    jn = function(t) {
                        (0, h.Z)(r, t);
                        var e, n, i = (e = r, n = function() {
                            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                            if (Reflect.construct.sham) return !1;
                            if ("function" == typeof Proxy) return !0;
                            try {
                                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                            } catch (t) {
                                return !1
                            }
                        }(), function() {
                            var t, i = (0, d.Z)(e);
                            if (n) {
                                var r = (0, d.Z)(this).constructor;
                                t = Reflect.construct(i, arguments, r)
                            } else t = i.apply(this, arguments);
                            return (0, f.Z)(this, t)
                        });

                        function r(t) {
                            var e;
                            return (0, c.Z)(this, r), (e = i.call(this, t, Mn)).autoUpdate = !0, e
                        }
                        return (0, u.Z)(r)
                    }(at.Q5);
                var Yn = function(t) {
                    (0, h.Z)(v, t);
                    var e, n, i, o, a, p = (o = v, a = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                        } catch (t) {
                            return !1
                        }
                    }(), function() {
                        var t, e = (0, d.Z)(o);
                        if (a) {
                            var n = (0, d.Z)(this).constructor;
                            t = Reflect.construct(e, arguments, n)
                        } else t = e.apply(this, arguments);
                        return (0, f.Z)(this, t)
                    });

                    function v() {
                        var t;
                        return (0, c.Z)(this, v), (t = p.call(this)).sprite = new s.jyi(s.P6Y.TextureCache.whisk), t.sprite.anchor.set(.5, .8), t.addChild(t.sprite), t.trackingEmitter = new jn((0, l.Z)(t)), t.trackingEmitter.emit = !1, t.poofEmitters = new En((0, l.Z)(t)), t.poofEmitters.emit = !1, t.visible = !1, t.time = 0, t
                    }
                    return (0, u.Z)(v, [{
                        key: "animateIn",
                        value: (i = (0, nt.Z)(rt().mark((function t() {
                            return rt().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return this.sprite.position.set(340, -900), this.sprite.angle = 360, this.visible = !0, t.next = 6, r.ZP.to(this.sprite, {
                                            pixi: {
                                                x: 0,
                                                y: -200,
                                                angle: 190
                                            },
                                            duration: 2,
                                            ease: ot.Ll.easeInOut
                                        });
                                    case 6:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this)
                        }))), function() {
                            return i.apply(this, arguments)
                        })
                    }, {
                        key: "animateOut",
                        value: (n = (0, nt.Z)(rt().mark((function t() {
                            var e;
                            return rt().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return (e = r.ZP.timeline()).to(this.sprite, {
                                            pixi: {
                                                y: -400
                                            },
                                            duration: 1,
                                            ease: ot.lD.easeInOut
                                        }), e.to(this.sprite, {
                                            pixi: {
                                                x: 340,
                                                y: -900,
                                                angle: 320
                                            },
                                            delay: .4,
                                            duration: 1,
                                            ease: ot.Ll.easeIn
                                        }), t.next = 5, e.play();
                                    case 5:
                                        this.visible = !1;
                                    case 6:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this)
                        }))), function() {
                            return n.apply(this, arguments)
                        })
                    }, {
                        key: "playStirAnimation",
                        value: (e = (0, nt.Z)(rt().mark((function t(e, n) {
                            return rt().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return this.poofEmitters.emit = !0, this.trackingEmitter.emit = !0, t.next = 4, r.ZP.to(this.sprite, {
                                            pixi: {
                                                angle: 170
                                            },
                                            duration: n,
                                            ease: ot.Yv.easeInOut,
                                            yoyoEase: ot.Yv.easeInOut,
                                            yoyo: !0,
                                            repeat: e
                                        });
                                    case 4:
                                        this.poofEmitters.emit = !1, this.trackingEmitter.emit = !1;
                                    case 6:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this)
                        }))), function(t, n) {
                            return e.apply(this, arguments)
                        })
                    }, {
                        key: "tick",
                        value: function(t) {
                            if (this.time += t, this.pivot.x = 10 * Math.sin(this.time), this.pivot.y = 4 * Math.sin(2 * this.time), this.trackingEmitter.emit || this.poofEmitters.emit) {
                                var e = this.sprite.rotation - Math.PI / 2,
                                    n = this.sprite.x + 200 * Math.cos(e),
                                    i = this.sprite.y + 200 * Math.sin(e);
                                this.trackingEmitter.updateSpawnPos(n, i), this.poofEmitters.updateSpawnPos(n, i)
                            }
                        }
                    }, {
                        key: "destroy",
                        value: function(t) {
                            this.trackingEmitter.destroy(), this.poofEmitters.destroy(), r.ZP.killTweensOf(this), r.ZP.killTweensOf(this.sprite), (0, q.Z)((0, d.Z)(v.prototype), "destroy", this).call(this, t)
                        }
                    }]), v
                }(s.W20);
                var Nn = new s.AeJ(-206, -600, 412, 350),
                    Wn = new s.E9j,
                    Fn = new s.E9j(220, 0),
                    Hn = new s.E9j,
                    qn = new s.E9j(0, -395),
                    Vn = function(t) {
                        (0, h.Z)(y, t);
                        var e, n, i, o, a, l, p, v = (l = y, p = function() {
                            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                            if (Reflect.construct.sham) return !1;
                            if ("function" == typeof Proxy) return !0;
                            try {
                                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                            } catch (t) {
                                return !1
                            }
                        }(), function() {
                            var t, e = (0, d.Z)(l);
                            if (p) {
                                var n = (0, d.Z)(this).constructor;
                                t = Reflect.construct(e, arguments, n)
                            } else t = e.apply(this, arguments);
                            return (0, f.Z)(this, t)
                        });

                        function y() {
                            var t;
                            (0, c.Z)(this, y), (t = v.call(this)).tickChildren = !0, t.interactive = t.buttonMode = !0, t.preserve = !1;
                            var e = s.P6Y.TextureCache;
                            t.bowlSprite = new s.jyi(e.bowl), t.bowlSprite.pivot.set(220, 236), t.hitArea = t.bowlSprite.getLocalBounds().clone(), t.hitArea.x = -t.bowlSprite.pivot.x, t.hitArea.y = -t.bowlSprite.pivot.y, t.shadow = new s.jyi(e["bowl-shadow"]), t.shadow.anchor.set(.5), t.shadow.position.set(0, -10), t.solidSide = 1;
                            var n = new s.TCu;
                            return n.beginFill(16711935, 1), n.drawCircle(0, 0, 207), n.drawRect(-350, -355, 700, 350), n.position.set(0, -229), t.liquid = new Mt({
                                width: 440,
                                height: 200,
                                numOfPoints: 40,
                                pointMass: 10,
                                neighborSpringForce: .05,
                                baselineSpringForce: .004,
                                damping: .98,
                                iterations: 6
                            }), t.liquid.x = -220, t.liquid.y = -22, t.splashContainer = new s.W20, t.splashEmitter = new Bn(t.splashContainer), t.solidsContainer = new s.W20, t.solidsContainer.mask = n, t.liquid.mask = n, t.addLayer = new s.W20, t.addLayer.mask = n, t.splashContainer.mask = n, t.whisk = new Yn, t.recipeData = new Gt, t.addChild(t.shadow, t.solidsContainer, t.addLayer, t.whisk, t.splashContainer, t.liquid, n, t.bowlSprite), t.bowlEmitter = new ut(t.bowlSprite), t.bowlEmitter.setRect(t.bowlSprite.getLocalBounds()), t
                        }
                        return (0, u.Z)(y, [{
                            key: "testDrop",
                            value: function(t) {
                                return this.toLocal(Wn, t, Hn), Nn.contains(Hn.x, Hn.y)
                            }
                        }, {
                            key: "addIngredient",
                            value: (a = (0, nt.Z)(rt().mark((function t(e) {
                                return rt().wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return e.enabled = !1, t.next = 3, this._tweenToDropPoint(e);
                                        case 3:
                                            return t.next = 5, this._addIngredient(e);
                                        case 5:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this)
                            }))), function(t) {
                                return a.apply(this, arguments)
                            })
                        }, {
                            key: "addIngredientSliceGroup",
                            value: (o = (0, nt.Z)(rt().mark((function t(e) {
                                var n = this;
                                return rt().wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return t.next = 2, Promise.all(e.map((function(t) {
                                                return t.enabled = !1, n._tweenToDropPoint(t)
                                            })));
                                        case 2:
                                            return t.next = 4, this._addIngredientSliceGroup(e);
                                        case 4:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this)
                            }))), function(t) {
                                return o.apply(this, arguments)
                            })
                        }, {
                            key: "getStealableIngredient",
                            value: function() {
                                var t = this.solidsContainer.children;
                                if (0 === t.length) return !1;
                                var e = this.recipeData.lastIngredient,
                                    n = t[t.length - 1];
                                return !n.data.wasCut && n.data === e && (this.addLayer.addChildToLocal(n), this.updateLiquid(.5), this.recipeData.remove(e), n)
                            }
                        }, {
                            key: "updateLiquid",
                            value: function() {
                                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                                    e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : .5,
                                    n = this.recipeData.getDominantColor();
                                this.liquid.addColor(n, e, t), r.ZP.to(this.liquid, {
                                    pixi: {
                                        y: this._getBatterLevel()
                                    },
                                    duration: t
                                })
                            }
                        }, {
                            key: "_tweenToDropPoint",
                            value: function(t) {
                                return this.addChildToLocal(t), new Promise((function(e) {
                                    var n = t.bowlAddOffset;
                                    r.ZP.to(t, {
                                        pixi: {
                                            x: qn.x + n.x,
                                            y: qn.y + n.y
                                        },
                                        duration: .6,
                                        ease: ot.Ll.easeOut,
                                        onComplete: e
                                    })
                                }))
                            }
                        }, {
                            key: "_addIngredient",
                            value: function(t) {
                                return this.recipeData.add(t.data), !t.data.solid || t instanceof In ? this._pourLiquidIngredient(t) : this._dropSolidIngredient(t)
                            }
                        }, {
                            key: "_addIngredientSliceGroup",
                            value: function(t) {
                                var e = this;
                                return this.recipeData.add(t[0].data), Promise.all(t.map((function(t, n) {
                                    return e._dropSolidIngredient(t, n)
                                })))
                            }
                        }, {
                            key: "_pourLiquidIngredient",
                            value: (i = (0, nt.Z)(rt().mark((function t(e) {
                                var n = this;
                                return rt().wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return this.addLayer.addChildToLocal(e), t.next = 3, e.playAddAnimation((function(t) {
                                                n._playSplashParticles(), n.updateLiquid(t, .8)
                                            }), (function() {
                                                var t = (Pe[e.data.name] || Pe.genericLiquid).next;
                                                C.play(t)
                                            }));
                                        case 3:
                                            e.destroy();
                                        case 4:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this)
                            }))), function(t) {
                                return i.apply(this, arguments)
                            })
                        }, {
                            key: "_dropSolidIngredient",
                            value: (n = (0, nt.Z)(rt().mark((function t(e) {
                                var n, i, o, a, c = this,
                                    u = arguments;
                                return rt().wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return n = u.length > 1 && void 0 !== u[1] ? u[1] : 0, this.addLayer.addChildToLocal(e), this.liquid.wavePoint.x = this.liquid.toLocal(new s.E9j, e).x, i = Pe[e.data.name] || Pe.genericSolid, o = i.next, e.side = this.solidSide *= -1, (a = r.ZP.timeline({
                                                delay: .1 * n
                                            })).to(e, {
                                                pixi: {
                                                    y: 0
                                                },
                                                duration: Math.abs(e.y) / 373,
                                                ease: ot.lD.easeIn
                                            }), a.to(e, {
                                                pixi: {
                                                    y: "+=15"
                                                },
                                                duration: .2
                                            }), a.to(this.liquid.wavePoint, {
                                                y: "+=15",
                                                duration: .2
                                            }, "<"), a.call((function() {
                                                C.play(o), c._playSplashParticles(), c.updateLiquid(.3), c.solidsContainer.addChildToLocal(e)
                                            }), null, "<"), a.set(this.liquid.wavePoint, {
                                                y: 0
                                            }), t.next = 14, a.play();
                                        case 14:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this)
                            }))), function(t) {
                                return n.apply(this, arguments)
                            })
                        }, {
                            key: "_commitIngredient",
                            value: function(t) {
                                t.data.solid ? this._commitSolidIngredientToBowl(t) : this._commitLiquidIngredientToBowl(t)
                            }
                        }, {
                            key: "_getCombinedColor",
                            value: function() {
                                for (var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], e = this.ingredients.filter((function(e) {
                                        return !!t || !e.solid
                                    })), n = [0, 0, 0], i = function(t) {
                                        var i = e.reduce((function(e, n) {
                                            return e + n.rgbColor[t]
                                        }), 0) / e.length;
                                        n[t] = i
                                    }, r = 0; r < 3; r++) i(r);
                                return "rgb(".concat(n[0], ",").concat(n[1], ",").concat(n[2], ")")
                            }
                        }, {
                            key: "_getBatterLevel",
                            value: function() {
                                var t = Math.min(1, this.recipeData.totalIngredients / 12);
                                return -138 * ot.Yv.easeOut(t) - 22
                            }
                        }, {
                            key: "_playSplashParticles",
                            value: function(t) {
                                var e = new s.u8d.ColorMatrixFilter;
                                e.tint(this.liquid.color, 1), this.splashContainer.filters = [e], this.splashEmitter.emitAt(this.toLocal(Fn, this.liquid), t)
                            }
                        }, {
                            key: "tick",
                            value: function(t) {
                                this.addLayer.y = this.whisk.y = this.solidsContainer.y = this.liquid.y;
                                var e = this.solidsContainer.children,
                                    n = e.length;
                                if (n > 0)
                                    for (var i = 0; i < n; i++) {
                                        var r = e[i];
                                        if (r.y -= r.y * t * 8, i < n - 1) {
                                            var o = 50 * r.side;
                                            r.x += (o - r.x) * t * 4
                                        }
                                    }
                            }
                        }, {
                            key: "mixIngredients",
                            value: (e = (0, nt.Z)(rt().mark((function t() {
                                var e, n, i = this;
                                return rt().wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return this.isMixing = !0, this.bowlEmitter.stop(), t.next = 4, this.whisk.animateIn();
                                        case 4:
                                            for (.3, 2.1, e = 0; e < this.solidsContainer.children.length; e++) n = this.solidsContainer.children[e], r.ZP.to(n, {
                                                pixi: {
                                                    x: "-=20"
                                                },
                                                duration: .3,
                                                yoyo: !0,
                                                repeat: 7,
                                                ease: ot.lD.easeInOut
                                            }), r.ZP.to(n, {
                                                pixi: {
                                                    y: "+=100"
                                                },
                                                duration: 2.1,
                                                ease: ot.Yv.easeIn
                                            }), r.ZP.to(n, {
                                                pixi: {
                                                    autoAlpha: 0
                                                },
                                                duration: 1.05,
                                                delay: 1.05
                                            });
                                            return this._playSplashParticles(2.1), this.recipeData.setAllMixed(), this.updateLiquid(2.1, .9), this.liquid.wavePoint.x = 0, this.liquid.wavePoint.y = -16, r.ZP.to(this.liquid.wavePoint, {
                                                x: 400,
                                                repeat: 7,
                                                yoyo: !0,
                                                duration: .3,
                                                onComplete: function() {
                                                    i.liquid.wavePoint.y = 0
                                                }
                                            }), C.play("whisk-mix"), t.next = 17, this.whisk.playStirAnimation(7, .3);
                                        case 17:
                                            return this.onIngredientsMixed(), t.next = 20, this.whisk.animateOut();
                                        case 20:
                                            this.isMixing = !1;
                                        case 21:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this)
                            }))), function() {
                                return e.apply(this, arguments)
                            })
                        }, {
                            key: "onIngredientsMixed",
                            value: function() {
                                this.solidsContainer.removeChildren()
                            }
                        }, {
                            key: "destroy",
                            value: function(t) {
                                this.splashEmitter.destroy(), r.ZP.killTweensOf(this.liquid), r.ZP.killTweensOf(this.liquid.wavePoint), !1 === this.preserve && (0, q.Z)((0, d.Z)(y.prototype), "destroy", this).call(this, t)
                            }
                        }]), y
                    }(s.W20);
                var Jn = new s.E9j(150, -130),
                    Xn = function(t) {
                        (0, h.Z)(a, t);
                        var e, n, i, o = (n = a, i = function() {
                            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                            if (Reflect.construct.sham) return !1;
                            if ("function" == typeof Proxy) return !0;
                            try {
                                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                            } catch (t) {
                                return !1
                            }
                        }(), function() {
                            var t, e = (0, d.Z)(n);
                            if (i) {
                                var r = (0, d.Z)(this).constructor;
                                t = Reflect.construct(e, arguments, r)
                            } else t = e.apply(this, arguments);
                            return (0, f.Z)(this, t)
                        });

                        function a() {
                            var t;
                            return (0, c.Z)(this, a), (t = o.call(this)).visible = !1, t.time = 0, t.sprite = new s.jyi(s.P6Y.TextureCache["character-cheshire"]), t.sprite.anchor.set(.5), t.addChild(t.sprite), t
                        }
                        return (0, u.Z)(a, [{
                            key: "stealItem",
                            value: (e = (0, nt.Z)(rt().mark((function t(e, n) {
                                var i, o, a = this;
                                return rt().wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return this.visible = !0, this.alpha = 1, this.sprite.alpha = 0, i = e.parent.toLocal(Jn, this), (o = r.ZP.timeline({
                                                paused: !0
                                            })).to(e, {
                                                pixi: {
                                                    x: (e.x + i.x) / 2,
                                                    y: (e.y + i.y) / 2
                                                },
                                                ease: ot.lD.easeIn,
                                                duration: 1.5
                                            }), o.call((function() {
                                                return a.addChildToLocal(e)
                                            })), o.to(e, {
                                                pixi: {
                                                    x: Jn.x,
                                                    y: Jn.y
                                                },
                                                ease: ot.lD.easeOut,
                                                duration: 1.5
                                            }), o.call((function() {
                                                return C.play("cheshire-laugh")
                                            })), o.to(this.sprite, {
                                                pixi: {
                                                    alpha: 1
                                                },
                                                ease: ot.lD.easeInOut,
                                                duration: 2
                                            }), o.call(n), o.to(this, {
                                                pixi: {
                                                    autoAlpha: 0
                                                },
                                                ease: ot.lD.easeInOut,
                                                duration: 2
                                            }), o.call((function() {
                                                return e.destroy()
                                            })), t.next = 15, o.play();
                                        case 15:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this)
                            }))), function(t, n) {
                                return e.apply(this, arguments)
                            })
                        }, {
                            key: "tick",
                            value: function(t) {
                                this.visible && (this.time += t, this.pivot.x = 5 * Math.sin(this.time), this.pivot.y = 5 * Math.sin(this.time) * Math.sin(this.time / 3))
                            }
                        }]), a
                    }(s.W20);
                var Gn = "basic",
                    Un = "mixing",
                    Qn = "extra",
                    $n = !1,
                    zn = function(t) {
                        (0, h.Z)(g, t);
                        var e, n, i, r, o, a, l, p, y = (l = g, p = function() {
                            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                            if (Reflect.construct.sham) return !1;
                            if ("function" == typeof Proxy) return !0;
                            try {
                                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                            } catch (t) {
                                return !1
                            }
                        }(), function() {
                            var t, e = (0, d.Z)(l);
                            if (p) {
                                var n = (0, d.Z)(this).constructor;
                                t = Reflect.construct(e, arguments, n)
                            } else t = e.apply(this, arguments);
                            return (0, f.Z)(this, t)
                        });

                        function g() {
                            var t;
                            return (0, c.Z)(this, g), (t = y.call(this)).bowl = null, t.bowlAddCount = 0, t.usedBlender = !1, t.firstExtraIngredientAdded = !1, t.catStealTimer = 0, t
                        }
                        return (0, u.Z)(g, [{
                            key: "buildScene",
                            value: function() {
                                var t = this,
                                    e = s.P6Y.TextureCache;
                                this.background = new s.jyi(e["background-kitchen-blur"]), this.background.anchor.set(.5), this.offsetContainer = new s.W20, this.offsetContainer.tickChildren = !0, this.table = new s.jyi(e["kitchen-table"]), this.table.anchor.set(.5, 1), this.table.position.y = 384;
                                var n = this.sceneManager.changeData.data.sceneData,
                                    i = n && n.bowl;
                                this.bowl = i || new Vn, this.bowl.position.set(14, 216), this.bowl.preserve = !1, this.basicIngredients = new Sn, this.pantry = new Dt, this.pantry.openButton.y = 462, $n || this.pantry.once("opened", (function() {
                                    $n = !0, t.helperCookie.playLines("vo-instruct-8")
                                })), this.helperAlice = new Fe, this.helperCookie = new Je, this.cheshireCat = new Xn, this.cheshireCat.position.set(-160, -70), this.blenderTab = new It(e["blender-tab"], 1), this.blenderTab.useScreenAnchor = !0, this.blenderTab.voLines = ["vo-instruct-10", "vo-instruct-11"], this.blenderTab.vo = "vo-blender", this.blenderTab.targetScene = $, this.blenderTab.screenAnchorOffset.y = -65, this.cutTab = new It(e["cut-tab"], 1), this.cutTab.useScreenAnchor = !0, this.cutTab.voLines = ["vo-instruct-10", "vo-instruct-13-alt"], this.cutTab.vo = "vo-cutting-board", this.cutTab.targetScene = z, this.cutTab.screenAnchorOffset.y = 78, this.dragLayer = new kt("default", (function() {
                                    return t.onDragStart()
                                }), (function() {
                                    return t.onDragEnd()
                                })), this.dragLayer.addDropZone(new Yt({
                                    id: "bowl",
                                    rect: new s.AeJ(-235, -602, 470, 540),
                                    local: this.bowl,
                                    triggerOnOver: !1,
                                    onDrop: function(e) {
                                        return t.onBowlDragDrop(e)
                                    }
                                })), this.dragLayer.addDropZone(new Yt({
                                    id: "blender",
                                    target: this.blenderTab,
                                    onDrop: function(e) {
                                        return t.onToolDrop(e, t.blenderTab)
                                    },
                                    onOver: function(e) {
                                        return t.onToolOver(e, t.blenderTab)
                                    },
                                    onOut: function(e) {
                                        return t.onToolOut(e, t.blenderTab)
                                    }
                                })), this.dragLayer.addDropZone(new Yt({
                                    id: "cuttingBoard",
                                    target: this.cutTab,
                                    onDrop: function(e) {
                                        return t.onToolDrop(e, t.cutTab)
                                    },
                                    onOver: function(e) {
                                        return t.onToolOver(e, t.cutTab)
                                    },
                                    onOut: function(e) {
                                        return t.onToolOut(e, t.cutTab)
                                    }
                                })), this.actionButton = new Ke, this.actionButton.setHidden(), this.actionButton.on("pointertap", this.onActionButtonClick, this), this.offsetContainer.addChild(this.table, this.cheshireCat, this.bowl, this.basicIngredients), this.view.addChild(this.background, this.offsetContainer, this.helperCookie, this.helperAlice, this.blenderTab, this.cutTab, this.pantry, this.actionButton, this.dragLayer), this.ingredientsHeard = []
                            }
                        }, {
                            key: "onTransitionOut",
                            value: function() {
                                V.play("bg-music-bowl")
                            }
                        }, {
                            key: "animateIn",
                            value: function() {
                                V.play("bg-music-bowl")
                            }
                        }, {
                            key: "start",
                            value: function() {
                                (0, q.Z)((0, d.Z)(g.prototype), "start", this).call(this), vt.preloadVideo(), this.bowl.on("pointertap", this._onBowlClick, this), this.blenderTab.on("pointertap", this._onToolTabClick, this), this.cutTab.on("pointertap", this._onToolTabClick, this);
                                var t = this.sceneManager.changeData;
                                if (t.fromScene) {
                                    if (t.fromScene.name === z) return this.addCuttingBoardProduct(t.data), void this._gotoExtraIngredientsStep();
                                    if (t.fromScene.name === $) return this.addBlenderProduct(t.data.ingredientData), void this._gotoExtraIngredientsStep()
                                }
                                this._playIntroduction()
                            }
                        }, {
                            key: "end",
                            value: function() {
                                (0, q.Z)((0, d.Z)(g.prototype), "end", this).call(this), this.bowl.removeAllListeners(), this.idler.destroy()
                            }
                        }, {
                            key: "update",
                            value: function(t) {
                                if (this.view) {
                                    var e = this.app.screen,
                                        n = 1 - (e.width - B) / 640,
                                        i = this.pantry.visualOffset + (e.width - this.pantry.visualOffset) / 2 - e.width / 2;
                                    this.offsetContainer.x = i * n, !1 === T.playing && this.idler.tick(t)
                                }
                            }
                        }, {
                            key: "showTools",
                            value: (a = (0, nt.Z)(rt().mark((function t() {
                                return rt().wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return t.next = 2, Promise.all([this.blenderTab.show(), this.cutTab.show()]);
                                        case 2:
                                            W.hasTimerExpired(N.TOOLS) && (W.recordTimer(N.TOOLS), this.helperCookie.playLines("vo-instruct-10"));
                                        case 3:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this)
                            }))), function() {
                                return a.apply(this, arguments)
                            })
                        }, {
                            key: "_onIdle",
                            value: function() {
                                if (this.currentStep === Gn) this.basicIngredients.highlighAllItems(), this.helperCookie.playLines(qt.BASICS.next);
                                else if (this.currentStep === Qn) {
                                    var t = this.bowl.recipeData.solidIngredients.length;
                                    $n ? t && Math.random() > .5 ? this.helperCookie.playLines(qt.MIXING.next) : this.helperCookie.playLines(qt.EXTRAS.next) : this.helperCookie.playLines("vo-instruct-7")
                                } else this.currentStep === Un && this.helperCookie.playLines(qt.MIXING.next)
                            }
                        }, {
                            key: "_onBowlClick",
                            value: function() {
                                this.currentStep !== Gn && this.startWhiskMix()
                            }
                        }, {
                            key: "startWhiskMix",
                            value: function() {
                                var t = this,
                                    e = this.bowl.recipeData.solidIngredients.length;
                                this.bowl.isMixing || 0 === e || (this.actionButton.hide(), this.idler.reset(), this.dragLayer.blockDrag = !0, this.bowl.mixIngredients().then((function() {
                                    return t.onMixComplete()
                                })))
                            }
                        }, {
                            key: "onMixComplete",
                            value: function() {
                                switch (this.dragLayer.blockDrag = !1, this._updateActionButton(), this.currentStep) {
                                    case Un:
                                        this._playBasicIngredientsComplete();
                                        break;
                                    case Qn:
                                        this.checkmarkVO || (this.checkmarkVO = !0, this._playCompleteSuggestion())
                                }
                            }
                        }, {
                            key: "onActionButtonClick",
                            value: function() {
                                switch (this.actionButton.stopHighlight(), this.actionButton.type) {
                                    case "whisk":
                                        this.currentStep === Un && this.actionButton.hide(), this.startWhiskMix();
                                        break;
                                    case "check":
                                        this.actionButton.hide(), this.currentStep = !1, v.i$.go(K, {
                                            data: {
                                                recipeData: this.bowl.recipeData
                                            }
                                        });
                                        break;
                                    case "skip":
                                        this.actionButton.hide(), T.stop(), this._gotoBasicIngredientsStep()
                                }
                            }
                        }, {
                            key: "onDragStart",
                            value: function() {
                                this.idler.reset(), this.pantry.close(), this._checkForToolSuggestion()
                            }
                        }, {
                            key: "onDragEnd",
                            value: function() {
                                this.idler.reset()
                            }
                        }, {
                            key: "onBowlDragDrop",
                            value: function(t) {
                                this._addIngredientToBowl(t)
                            }
                        }, {
                            key: "_checkForToolSuggestion",
                            value: function() {
                                if (0 !== this.bowl.recipeData.extraIngredients.length) {
                                    var t = !1;
                                    this.bowl.recipeData.hasCutItem() || (t = T.playOnce(Ht.CUTTING.next)), t || this.bowl.recipeData.hasBlendedItem() || T.playOnce(Ht.BLENDER.next)
                                }
                            }
                        }, {
                            key: "_playCompleteSuggestion",
                            value: function() {
                                this.helperCookie.playLines("vo-instruct-15")
                            }
                        }, {
                            key: "_addIngredientToBowl",
                            value: function(t) {
                                var e = this;
                                this.bowl.addIngredient(t).then((function() {
                                    return e._onIngredientAddComplete()
                                }))
                            }
                        }, {
                            key: "_onIngredientAddComplete",
                            value: function() {
                                if (this.currentStep === Qn) {
                                    this._updateActionButton();
                                    var t = this.bowl.recipeData.extraIngredients.length,
                                        e = this.bowl.recipeData.solidIngredients.length;
                                    this.blenderTab.visible ? 0 === e && t > 2 ? this._playCompleteSuggestion() : (this.bowlAddCount++, this.catStealTimer++, this.catStealTimer > 3 && Math.random() < .1 * (this.catStealTimer - 3) + .3 ? (this._triggerCatSteal(), this.catStealTimer = 0) : e > 2 ? this.helperCookie.playLines(Ht.MIX.next) : !1 === T.playing && (this.bowlAddCount > 2 ? (this.bowlAddCount = 0, T.play("vo-cookie-3")) : T.play(Vt.BOWL.next))) : this.showTools()
                                } else this.currentStep === Gn && (!1 === this.basicIngredients.hasIngredients ? this._gotoMixingStep() : !1 === T.playing && this.encourageBowl ? (this.encourageBowl = !1, T.play(Vt.BOWL.next)) : this.encourageBowl = !0)
                            }
                        }, {
                            key: "onToolDrop",
                            value: function(t, e) {
                                this._selectTool(e.targetScene, t), e.isOver = !1
                            }
                        }, {
                            key: "onToolOver",
                            value: function(t, e) {
                                T.playing || T.play(e.vo), e.isOver = !0
                            }
                        }, {
                            key: "onToolOut",
                            value: function(t, e) {
                                e.isOver = !1
                            }
                        }, {
                            key: "_selectTool",
                            value: function(t, e) {
                                this.bowl.preserve = !0;
                                var n = {
                                    sceneData: {
                                        currentStep: this.currentStep,
                                        bowl: this.bowl
                                    },
                                    ingredientData: e && e.data
                                };
                                t === $ ? sn.sendEvent(an, "Blender") : t === z && sn.sendEvent(an, "Slicing"), v.i$.go(t, {
                                    data: n
                                })
                            }
                        }, {
                            key: "addCuttingBoardProduct",
                            value: function(t) {
                                var e = this,
                                    n = t.items;
                                n.forEach((function(t, n) {
                                    t.y = -500, e.dragLayer.addChild(t)
                                })), this.bowl.addIngredientSliceGroup(n).then((function() {
                                    e._updateActionButton(), e.showTools()
                                }))
                            }
                        }, {
                            key: "addBlenderProduct",
                            value: function(t) {
                                this.usedBlender && this.helperCookie.playLines("vo-instruct-12"), this.usedBlender = !0;
                                var e = new In(t);
                                this.dragLayer.addChild(e), this._addIngredientToBowl(e)
                            }
                        }, {
                            key: "_onToolTabClick",
                            value: function(t) {
                                var e = t.target;
                                T.play(e.vo), this._selectTool(e.targetScene)
                            }
                        }, {
                            key: "_triggerCatSteal",
                            value: function() {
                                var t = this;
                                this.block();
                                var e = this.bowl.getStealableIngredient();
                                this.cheshireCat.stealItem(e, (function() {
                                    t.helperAlice.playLines("vo-cat")
                                })).then((function() {
                                    return t.unblock()
                                })), this._updateActionButton()
                            }
                        }, {
                            key: "_updateActionButton",
                            value: function() {
                                this.bowl.recipeData.solidIngredients.length ? this.actionButton.setWhisk() : this.currentStep !== Qn ? this.actionButton.hide() : this.actionButton.setCheck()
                            }
                        }, {
                            key: "_debugBasicIngredientsComplete",
                            value: function() {
                                for (var t = 0; t < this.basicIngredients.groups.length; t++)
                                    for (var e = this.basicIngredients.groups[t], n = e.children.length - 1; n >= 0; n--) {
                                        var i = e.children[n];
                                        i.onDragStart(), this.bowl.addIngredient(i, (function() {}))
                                    }
                                this._onIngredientAddComplete()
                            }
                        }, {
                            key: "_playIntroduction",
                            value: (o = (0, nt.Z)(rt().mark((function t() {
                                return rt().wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return W.hasTimerExpired(N.SETUP) || this.actionButton.setSkip(), t.next = 3, this.helperAlice.playLines("vo-instruct-22");
                                        case 3:
                                            return t.next = 5, this.helperCookie.playLines("vo-cookie-1");
                                        case 5:
                                            this.helperAlice.hide(), W.recordTimer(N.SETUP), this._gotoBasicIngredientsStep();
                                        case 8:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this)
                            }))), function() {
                                return o.apply(this, arguments)
                            })
                        }, {
                            key: "_gotoBasicIngredientsStep",
                            value: (r = (0, nt.Z)(rt().mark((function t() {
                                return rt().wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            if (this.idler.reset(), this.currentStep = Gn, this.basicIngredients.show(), this._updateActionButton(), !W.hasTimerExpired(N.BASICS)) {
                                                t.next = 12;
                                                break
                                            }
                                            return t.next = 7, this.helperCookie.playLines("vo-instruct-1");
                                        case 7:
                                            return W.recordTimer(N.BASICS), this.basicIngredients.highlighItemsInOrder(), t.next = 11, this.helperCookie.playLines("vo-instruct-2");
                                        case 11:
                                            this.bowl.bowlEmitter.emitForSeconds(4);
                                        case 12:
                                            return t.next = 14, this.helperCookie.playLines("vo-1-more");
                                        case 14:
                                            this.idler.start();
                                        case 15:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this)
                            }))), function() {
                                return r.apply(this, arguments)
                            })
                        }, {
                            key: "_gotoMixingStep",
                            value: (i = (0, nt.Z)(rt().mark((function t() {
                                return rt().wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return this.idler.reset(), this.currentStep = Un, this.actionButton.setWhisk(), this.actionButton.startHighlight(), t.next = 6, this.helperCookie.playLines("vo-instruct-4");
                                        case 6:
                                            this.idler.start();
                                        case 7:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this)
                            }))), function() {
                                return i.apply(this, arguments)
                            })
                        }, {
                            key: "_gotoExtraIngredientsStep",
                            value: (n = (0, nt.Z)(rt().mark((function t() {
                                return rt().wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return this.idler.reset(), this.currentStep = Qn, this.actionButton.hide(), t.next = 5, this.pantry.openButton.show();
                                        case 5:
                                            if (this.pantry.openButton.startHighlight(), !W.hasTimerExpired(N.EXTRAS_INTRO)) {
                                                t.next = 10;
                                                break
                                            }
                                            return W.recordTimer(N.EXTRAS_INTRO), t.next = 10, this.helperCookie.playLines("vo-instruct-7");
                                        case 10:
                                            this.idler.start();
                                        case 11:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this)
                            }))), function() {
                                return n.apply(this, arguments)
                            })
                        }, {
                            key: "_playBasicIngredientsComplete",
                            value: (e = (0, nt.Z)(rt().mark((function t() {
                                return rt().wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return t.next = 2, this.helperAlice.playLines("vo-encourage-3", !0, !0);
                                        case 2:
                                            this._gotoExtraIngredientsStep();
                                        case 3:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this)
                            }))), function() {
                                return e.apply(this, arguments)
                            })
                        }]), g
                    }(pt);
                var Kn = function(t) {
                    (0, h.Z)(l, t);
                    var e, n, i, o, a = (i = l, o = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                        } catch (t) {
                            return !1
                        }
                    }(), function() {
                        var t, e = (0, d.Z)(i);
                        if (o) {
                            var n = (0, d.Z)(this).constructor;
                            t = Reflect.construct(e, arguments, n)
                        } else t = e.apply(this, arguments);
                        return (0, f.Z)(this, t)
                    });

                    function l() {
                        return (0, c.Z)(this, l), a.call(this)
                    }
                    return (0, u.Z)(l, [{
                        key: "init",
                        value: function() {
                            (0, q.Z)((0, d.Z)(l.prototype), "init", this).call(this), this.alice.x = this.aliceStartX = -832 - this.alice.width / 2
                        }
                    }, {
                        key: "buildScene",
                        value: function() {
                            var t = s.P6Y.TextureCache,
                                e = new s.jyi(t["background-kitchen"]);
                            e.anchor.set(.5);
                            var n = new s.jyi(t["alice-pose-1"]);
                            n.anchor.set(.5, 1), n.y = 384;
                            var i = new lt(t["button-skip"]);
                            i.setHidden();
                            var r = new Je;
                            this.view.addChild(e, n, r, i), this.alice = n, this.cookie = r, this.skipButton = i, this.background = e
                        }
                    }, {
                        key: "animateIn",
                        value: (n = (0, nt.Z)(rt().mark((function t() {
                            return rt().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return V.play("bg-music-decoration"), r.ZP.to(this.background, {
                                            pixi: {
                                                scale: 1.2
                                            },
                                            duration: 14,
                                            ease: ot.bJ.easeNone
                                        }), C.play("character-slide"), t.next = 5, r.ZP.to(this.alice, {
                                            x: -180,
                                            duration: 1,
                                            ease: ot.Ll.easeOut
                                        });
                                    case 5:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this)
                        }))), function() {
                            return n.apply(this, arguments)
                        })
                    }, {
                        key: "animateOut",
                        value: (e = (0, nt.Z)(rt().mark((function t() {
                            return rt().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return C.play("character-slide"), r.ZP.to(this.alice, {
                                            x: "+=400",
                                            duration: .8,
                                            ease: ot.eJ.easeIn
                                        }), t.next = 4, r.ZP.to({}, {
                                            duration: .3
                                        });
                                    case 4:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this)
                        }))), function() {
                            return e.apply(this, arguments)
                        })
                    }, {
                        key: "onTransitionOut",
                        value: function() {
                            V.play("bg-music-decoration")
                        }
                    }, {
                        key: "start",
                        value: function() {
                            var t = this;
                            (0, q.Z)((0, d.Z)(l.prototype), "start", this).call(this), W.hasTimerExpired(N.INTRO) || (this.skipButton.on("pointertap", this._onSkipClick, this), this.skipButton.show()), T.play("vo-intro-1", (function() {
                                return t.autoAdvanceToNextScene()
                            }))
                        }
                    }, {
                        key: "update",
                        value: function(t) {
                            if (this.view) {
                                var e = this.app.screen;
                                this.skipButton.x = e.width / 2 - 106, this.skipButton.y = e.height / 2 - 130
                            }
                        }
                    }, {
                        key: "_onSkipClick",
                        value: function() {
                            var t = this;
                            this.skipButton.hide(), T.stop(), this.cookie.playLines("vo-cookie-1-alt").then((function() {
                                return t.autoAdvanceToNextScene()
                            }))
                        }
                    }, {
                        key: "autoAdvanceToNextScene",
                        value: function() {
                            W.recordTimer(N.INTRO), this.skipButton.hide(), v.i$.go(Q)
                        }
                    }, {
                        key: "destroy",
                        value: function(t) {
                            r.ZP.killTweensOf(this.alice), r.ZP.killTweensOf(this.background), (0, q.Z)((0, d.Z)(l.prototype), "destroy", this).call(this, t)
                        }
                    }]), l
                }(pt);
                var ti = function(t) {
                    (0, h.Z)(r, t);
                    var e, n, i = (e = r, n = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                        } catch (t) {
                            return !1
                        }
                    }(), function() {
                        var t, i = (0, d.Z)(e);
                        if (n) {
                            var r = (0, d.Z)(this).constructor;
                            t = Reflect.construct(i, arguments, r)
                        } else t = i.apply(this, arguments);
                        return (0, f.Z)(this, t)
                    });

                    function r() {
                        var t;
                        return (0, c.Z)(this, r), (t = i.call(this, null, !1)).useScreenAnchor = !0, t.screenAnchor.set(-1, -1), t.screenAnchorOffset.set(70, 70), t.offTexture = s.P6Y.TextureCache["btn-sound-off"], t.onTexture = s.P6Y.TextureCache["btn-sound-on"], t.updateState(), t
                    }
                    return (0, u.Z)(r, [{
                        key: "getContextMuted",
                        value: function() {
                            return g.eq.context.muted
                        }
                    }, {
                        key: "updateState",
                        value: function() {
                            var t = this.getContextMuted();
                            this.baseSprite.texture = t ? this.offTexture : this.onTexture
                        }
                    }, {
                        key: "_onInteraction",
                        value: function(t) {
                            (0, q.Z)((0, d.Z)(r.prototype), "_onInteraction", this).call(this, t), "pointertap" === t.type && (g.eq.context.toggleMute(), this.updateState())
                        }
                    }]), r
                }(lt);
                var ei, ni = function(t) {
                    (0, h.Z)(r, t);
                    var e, n, i = (e = r, n = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                        } catch (t) {
                            return !1
                        }
                    }(), function() {
                        var t, i = (0, d.Z)(e);
                        if (n) {
                            var r = (0, d.Z)(this).constructor;
                            t = Reflect.construct(i, arguments, r)
                        } else t = i.apply(this, arguments);
                        return (0, f.Z)(this, t)
                    });

                    function r() {
                        return (0, c.Z)(this, r), i.call(this)
                    }
                    return (0, u.Z)(r, [{
                        key: "buildScene",
                        value: function() {
                            var t = s.P6Y.TextureCache,
                                e = new s.jyi(t["background-title"]);
                            e.anchor.set(.5);
                            var n = new lt(t["btn-play"]);
                            n.setHidden(), n.position.set(406, 246), n.on("pointertap", this._onPlayClick, this);
                            var i = new ti;
                            i.setHidden(), this.view.addChild(e, i, n), this.playButton = n, this.soundButton = i
                        }
                    }, {
                        key: "start",
                        value: function() {
                            (0, q.Z)((0, d.Z)(r.prototype), "start", this).call(this), X.loadTags("transition"), this.playButton.show(!0, !0), this.soundButton.show()
                        }
                    }, {
                        key: "_onPlayClick",
                        value: function() {
                            this.playButton.hide(), V.play("bg-music-decoration"), C.play("click-play"), T.play("vo-title", (function() {
                                v.i$.go(U)
                            }))
                        }
                    }]), r
                }(pt);
                var ii = function(t) {
                    (0, h.Z)(o, t);
                    var e, n, i = (e = o, n = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                        } catch (t) {
                            return !1
                        }
                    }(), function() {
                        var t, i = (0, d.Z)(e);
                        if (n) {
                            var r = (0, d.Z)(this).constructor;
                            t = Reflect.construct(i, arguments, r)
                        } else t = i.apply(this, arguments);
                        return (0, f.Z)(this, t)
                    });

                    function o() {
                        var t;
                        return (0, c.Z)(this, o), (t = i.call(this, {
                            antialias: !0,
                            resolution: 1,
                            view: document.getElementById("gameCanvas"),
                            backgroundAlpha: 3355443,
                            sharedLoader: !0,
                            sharedTicker: !0,
                            width: 1664,
                            height: I
                        }))._paused = !1, t._runTime = 0, t.initTicker(), t.initScenes(), t.initScaleManager(), t.initVisiblityManager(), C.setChannelData("vo", w), C.setChannelData("sfx", k), C.setChannelData("music", m), W.init(), t.initOnLoad(), ei = (0, l.Z)(t), t
                    }
                    return (0, u.Z)(o, [{
                        key: "paused",
                        get: function() {
                            return this._paused
                        },
                        set: function(t) {
                            t !== this._paused && (this._paused = t, this._paused ? (g.eq.muteAll(), this.ticker.stop()) : (g.eq.unmuteAll(), this.ticker.start()))
                        }
                    }, {
                        key: "initTicker",
                        value: function() {
                            this.ticker.autoStart = !1, r.ZP.ticker.remove(r.ZP.updateRoot), this.ticker.add(this.update, this), this.stage.tickChildren = !0, this.ticker.start()
                        }
                    }, {
                        key: "initScaleManager",
                        value: function() {
                            var t = this;
                            this.scaleManager = new p.e1({
                                canvasElement: document.getElementById("gameCanvas"),
                                contentElement: document.getElementById("content"),
                                containerElement: document.body,
                                alignMode: p.bL,
                                scaleMode: p.wD,
                                width: B,
                                maxWidth: 1664,
                                height: I,
                                maxHeight: I
                            }), this.scaleManager.onResize = function() {
                                t.resizeView()
                            }, this.resizeView()
                        }
                    }, {
                        key: "initVisiblityManager",
                        value: function() {
                            var t = this;
                            this.visibilityManager = new y.Z((function(e) {
                                return t.onVisibilityChange(e)
                            }))
                        }
                    }, {
                        key: "initScenes",
                        value: function() {
                            var t = this;
                            this.sceneContainer = new s.W20, this.sceneContainer.tickChildren = !0, this.transitionContainer = new s.W20, this.transitionContainer.tickChildren = !0, this.stage.addChild(this.sceneContainer, this.transitionContainer);
                            var e = this.sceneManager = new v.i$({
                                app: this,
                                onSceneAdd: function(e) {
                                    return t.sceneContainer.addChild(e)
                                },
                                onSceneRemove: function(e) {
                                    return t.sceneContainer.removeChild(e)
                                },
                                onTransitionAdd: function(e) {
                                    return t.transitionContainer.addChild(e)
                                },
                                onTransitionRemove: function(e) {
                                    return t.transitionContainer.removeChild(e)
                                },
                                onChangeStart: function(t) {
                                    T.stop()
                                }
                            });
                            e.registerScene(G, ni), e.registerScene(U, Kn), e.registerScene(Q, zn), e.registerScene($, Nt), e.registerScene(z, je), e.registerScene(K, vt), e.registerScene(tt, cn), e.registerScene(et, Ce), e.registerTransition("default", vn)
                        }
                    }, {
                        key: "onSceneChange",
                        value: function(t, e) {
                            var n = "transition" === e.sceneType ? this.transitionContainer : this.sceneContainer;
                            "add" === t ? n.addChild(e.view) : "remove" === t && n.removeChild(e.view)
                        }
                    }, {
                        key: "initOnLoad",
                        value: function() {
                            var t = this,
                                e = window.abcdm,
                                n = e && e.abc && e.abc.com && e.abc.com.GameApis;
                            n ? (H("DisneyGameApi Connected"), n.apiLoadComplete = function() {
                                return t.boot()
                            }, n.onActivated = function() {
                                return t.onVisibilityChange(!0)
                            }, n.onSuspended = function() {
                                return t.onVisibilityChange(!1)
                            }, n.onClose = function() {
                                return n.gameCloseComplete()
                            }) : window.addEventListener("load", (function() {
                                return t.boot()
                            }), !1)
                        }
                    }, {
                        key: "boot",
                        value: function() {
                            var t = E("scene", !1);
                            v.i$.go(t || G)
                        }
                    }, {
                        key: "update",
                        value: function() {
                            if (!this.paused) {
                                var t = this.ticker.deltaMS / 1e3;
                                this._runTime += t, r.ZP.updateRoot(this._runTime), this.sceneManager.update(t), this.childrenTick(this.stage, t)
                            }
                        }
                    }, {
                        key: "childrenTick",
                        value: function(t, e) {
                            if (t.tickChildren)
                                for (var n = 0; n < t.children.length; n++) this.childrenTick(t.children[n], e);
                            t.tick && t.tick(e, this.screen)
                        }
                    }, {
                        key: "childrenResize",
                        value: function(t, e) {
                            if (t.children)
                                for (var n = 0; n < t.children.length; n++) this.childrenResize(t.children[n], e);
                            t.onAppResize && t.onAppResize(e)
                        }
                    }, {
                        key: "onVisibilityChange",
                        value: function(t) {
                            this.paused = !t
                        }
                    }, {
                        key: "resizeView",
                        value: function() {
                            var t = this.view.parentElement;
                            if (t) {
                                var e = this.renderer,
                                    n = t.offsetWidth,
                                    i = t.offsetHeight / e.height;
                                e.resize(n / i, I), this.sceneContainer.x = this.transitionContainer.x = e.screen.width / 2, this.sceneContainer.y = this.transitionContainer.y = e.screen.height / 2, this.childrenResize(this.stage, this.screen)
                            }
                        }
                    }], [{
                        key: "instance",
                        get: function() {
                            return ei
                        }
                    }]), o
                }(s.MxU);
                Object.assign(s.E9j.prototype, {
                    toPlain: function() {
                        return {
                            x: this.x,
                            y: this.y
                        }
                    }
                }), s.W20.mixin({
                    addChildToLocal: function(t) {
                        t.position.copyFrom(this.toLocal(t.position, t.parent)), this.addChild(t)
                    }
                }), r.ZP.registerPlugin(o.Z), r.ZP.registerPlugin(a.w), a.w.registerPIXI({
                    DisplayObject: s.s$$,
                    Graphics: s.TCu,
                    VERSION: s.q4F
                }), new ii
            }
        },
        n = {};

    function i(t) {
        var r = n[t];
        if (void 0 !== r) return r.exports;
        var o = n[t] = {
            id: t,
            loaded: !1,
            exports: {}
        };
        return e[t].call(o.exports, o, o.exports, i), o.loaded = !0, o.exports
    }
    i.m = e, t = [], i.O = (e, n, r, o) => {
        if (!n) {
            var a = 1 / 0;
            for (l = 0; l < t.length; l++) {
                for (var [n, r, o] = t[l], s = !0, c = 0; c < n.length; c++)(!1 & o || a >= o) && Object.keys(i.O).every((t => i.O[t](n[c]))) ? n.splice(c--, 1) : (s = !1, o < a && (a = o));
                if (s) {
                    t.splice(l--, 1);
                    var u = r();
                    void 0 !== u && (e = u)
                }
            }
            return e
        }
        o = o || 0;
        for (var l = t.length; l > 0 && t[l - 1][2] > o; l--) t[l] = t[l - 1];
        t[l] = [n, r, o]
    }, i.n = t => {
        var e = t && t.__esModule ? () => t.default : () => t;
        return i.d(e, {
            a: e
        }), e
    }, i.d = (t, e) => {
        for (var n in e) i.o(e, n) && !i.o(t, n) && Object.defineProperty(t, n, {
            enumerable: !0,
            get: e[n]
        })
    }, i.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (t) {
            if ("object" == typeof window) return window
        }
    }(), i.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e), i.r = t => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, i.nmd = t => (t.paths = [], t.children || (t.children = []), t), (() => {
        var t = {
            757: 0
        };
        i.O.j = e => 0 === t[e];
        var e = (e, n) => {
                var r, o, [a, s, c] = n,
                    u = 0;
                if (a.some((e => 0 !== t[e]))) {
                    for (r in s) i.o(s, r) && (i.m[r] = s[r]);
                    if (c) var l = c(i)
                }
                for (e && e(n); u < a.length; u++) o = a[u], i.o(t, o) && t[o] && t[o][0](), t[a[u]] = 0;
                return i.O(l)
            },
            n = self.webpackChunkdis_198_1_alice_bakery = self.webpackChunkdis_198_1_alice_bakery || [];
        n.forEach(e.bind(null, 0)), n.push = e.bind(null, n.push.bind(n))
    })();
    var r = i.O(void 0, [592], (() => i(544)));
    r = i.O(r)
})();