window.__require = function t(e, n, o) {
    function r(a, c) {
        if (!n[a]) {
            if (!e[a]) {
                var s = a.split("/");
                if (s = s[s.length - 1], !e[s]) {
                    var u = "function" == typeof __require && __require;
                    if (!c && u) return u(s, !0);
                    if (i) return i(s, !0);
                    throw new Error("Cannot find module '" + a + "'")
                }
                a = s
            }
            var l = n[a] = {
                exports: {}
            };
            e[a][0].call(l.exports, function (t) {
                return r(e[a][1][t] || t)
            }, l, l.exports, t, e, n, o)
        }
        return n[a].exports
    }
    for (var i = "function" == typeof __require && __require, a = 0; a < o.length; a++) r(o[a]);
    return r
}({
    AdManager: [function (t, e, n) {
        "use strict";
        cc._RF.push(e, "ac37fS7uu9NlLwL6Lj5VLtW", "AdManager");
        var o, r = this && this.__extends || (o = function (t, e) {
            return (o = Object.setPrototypeOf || {
                __proto__: []
            }
                instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                })(t, e)
        }, function (t, e) {
            function n() {
                this.constructor = t
            }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        }),
            i = this && this.__decorate || function (t, e, n, o) {
                var r, i = arguments.length,
                    a = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o);
                else
                    for (var c = t.length - 1; c >= 0; c--)(r = t[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(e, n, a) : r(e, n)) || a);
                return i > 3 && a && Object.defineProperty(e, n, a), a
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = t("../SessionStorageHelper"),
            c = t("./CocosHelper"),
            s = cc._decorator,
            u = s.ccclass,
            l = (s.property, function (t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                var n;
                return r(e, t), n = e, e.getInstance = function () {
                    return n.instance || (n.instance = new n), n.instance
                }, e.prototype.requestAds = function () {
                    var t = this;
                    window.GAMESDK.showAd({
                        beforeShowAd: function () {
                            n.isAdRunnning = !0, t.MuteSound(), cc.game.pause()
                        },
                        afterShowAd: function () {
                            t.onAdComplete()
                        }
                    })
                }, e.prototype.isAdRunning = function () {
                    return n.isAdRunnning
                }, e.prototype.requestRewardAds = function (t) {
                    var e = this;
                    window.GAMESDK.showAdOfEvent({
                        onRewardBeforeBreak: function () {
                            n.isAdRunnning = !0, e.MuteSound(), cc.game.pause()
                        },
                        onRewardAfterBreak: function () {
                            e.onAdComplete()
                        },
                        onRewardComplete: function () {
                            t && (a.default.getInstace().setItem(t.name, "true"), t.removeFromParent())
                        },
                        onRewardDismissed: function () { }
                    })
                }, e.prototype.onAdComplete = function () {
                    n.isAdRunnning = !1, 0 == n.isSwitchTab && c.default.getInstance().gameResume()
                }, e.prototype.MuteSound = function () {
                    cc.audioEngine.pauseMusic(), cc.audioEngine.pauseAllEffects()
                }, e.prototype.StartSound = function () {
                    n.isSwitchTab || (cc.audioEngine.resumeMusic(), cc.audioEngine.resumeAllEffects())
                }, e.isAdRunnning = !1, e.isSwitchTab = !1, n = i([u], e)
            }(cc.Component));
        n.default = l, cc._RF.pop()
    }, {
        "../SessionStorageHelper": "SessionStorageHelper",
        "./CocosHelper": "CocosHelper"
    }],
    AudioManager: [function (t, e, n) {
        "use strict";
        cc._RF.push(e, "8c84eXQJgJHZqv14W4gnfgy", "AudioManager");
        var o, r = this && this.__extends || (o = function (t, e) {
            return (o = Object.setPrototypeOf || {
                __proto__: []
            }
                instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                })(t, e)
        }, function (t, e) {
            function n() {
                this.constructor = t
            }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        }),
            i = this && this.__decorate || function (t, e, n, o) {
                var r, i = arguments.length,
                    a = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o);
                else
                    for (var c = t.length - 1; c >= 0; c--)(r = t[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(e, n, a) : r(e, n)) || a);
                return i > 3 && a && Object.defineProperty(e, n, a), a
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = t("./AdManager"),
            c = t("./CocosHelper"),
            s = cc._decorator.ccclass,
            u = function (t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.audioClipList = new Map, e.audioPlayingList = [], e.isMute = !1, e.volume = 1, e
                }
                var n;
                return r(e, t), n = e, e.getInstance = function () {
                    return n.instance || (n.instance = new n, n.instance.init()), n.instance
                }, e.prototype.init = function () {
                    this.schedule(this.garbageCollector, 30, 1 / 0, 0);
                    var t = this;
                    cc.loader.loadResDir("Sound", function (e, n) {
                        for (var o = 0; o < n.length; o++) n[o] instanceof cc.AudioClip && t.add(n[o].name, n[o]);
                        cc.game.emit("SoundLoaded")
                    })
                }, e.prototype.add = function (t, e) {
                    this.audioClipList.has(t) ? console.error("add: " + t + " - audio clip existed") : this.audioClipList.set(t, e)
                }, e.prototype.addAll = function (t) {
                    for (var e = "", n = 0, o = t; n < o.length; n++) {
                        var r = o[n];
                        e = r.name, this.audioClipList.has(e) ? console.error("addAll: " + e + " - audio clip existed") : this.audioClipList.set(e, r)
                    }
                }, e.prototype.get = function (t) {
                    var e = this.audioClipList.get(t);
                    if (e) return e
                }, e.prototype.remove = function (t) {
                    this.audioClipList.get(t) && this.audioClipList.delete(t)
                }, e.prototype.removeAll = function () {
                    this.stopAll(), this.audioClipList.clear()
                }, e.prototype.play = function (t, e, n) {
                    if (void 0 === e && (e = !1), void 0 === n && (n = this.volume), !this.isMute && !a.default.getInstance().isAdRunning() && 0 != cc.audioEngine.getEffectsVolume()) {
                        var o = this.audioClipList.get(t);
                        if (e && this.stop(t), o) {
                            var r = {
                                audioId: cc.audioEngine.play(o, e, cc.audioEngine.getMusicVolume()),
                                audioName: t,
                                audioVolume: 1
                            };
                            this.audioPlayingList.push(r)
                        }
                    }
                }, e.prototype.playMusic = function (t, e) {
                    void 0 === e && (e = !1);
                    var n = this.audioClipList.get(t);
                    n && (cc.audioEngine.playMusic(n, e), (c.default.getInstance().isSwitchTab || a.default.getInstance().isAdRunning()) && cc.audioEngine.pauseMusic())
                }, e.prototype.stop = function (t) {
                    for (var e = -1, n = "", o = 0, r = this.audioPlayingList; o < r.length; o++) {
                        var i = r[o];
                        e = i.audioId, n = i.audioName, t.includes(n) && cc.audioEngine.stop(e)
                    }
                }, e.prototype.stopAll = function () {
                    cc.audioEngine.stopAllEffects(), this.audioPlayingList = []
                }, e.prototype.pause = function (t) {
                    for (var e = -1, n = 0, o = this.audioPlayingList; n < o.length; n++) {
                        var r = o[n];
                        if (e = r.audioId, r.audioName === t && cc.audioEngine.getState(e) === cc.audioEngine.AudioState.PLAYING) {
                            cc.audioEngine.pause(e);
                            break
                        }
                    }
                }, e.prototype.pauseAll = function () {
                    cc.audioEngine.pauseAll()
                }, e.prototype.resume = function (t) {
                    for (var e = -1, n = 0, o = this.audioPlayingList; n < o.length; n++) {
                        var r = o[n];
                        if (e = r.audioId, r.audioName === t && cc.audioEngine.getState(e) === cc.audioEngine.AudioState.PAUSED) {
                            cc.audioEngine.resume(e);
                            break
                        }
                    }
                }, e.prototype.isPause = function (t) {
                    for (var e = -1, n = 0, o = this.audioPlayingList; n < o.length; n++) {
                        var r = o[n];
                        if (e = r.audioId, r.audioName === t && cc.audioEngine.getState(e) === cc.audioEngine.AudioState.PAUSED) return !0
                    }
                    return !1
                }, e.prototype.resumeAll = function () {
                    cc.audioEngine.resumeAll()
                }, e.prototype.setVolume = function (t, e) {
                    for (var n = -1, o = 0, r = this.audioPlayingList; o < r.length; o++) {
                        var i = r[o];
                        if (n = i.audioId, i.audioName === t) {
                            cc.audioEngine.setVolume(n, e), i.audioVolume = e;
                            break
                        }
                    }
                }, e.prototype.setAllVolume = function (t) {
                    for (var e = -1, n = 0, o = this.audioPlayingList; n < o.length; n++) {
                        var r = o[n];
                        e = r.audioId, cc.audioEngine.setVolume(e, t), r.audioVolume = t
                    }
                }, e.prototype.mute = function () {
                    this.setAllMute(0), this.isMute = !0
                }, e.prototype.unMute = function () {
                    this.setAllMute(1), this.isMute = !1
                }, e.prototype.setAllMute = function (t) {
                    for (var e = -1, n = 0, o = this.audioPlayingList; n < o.length; n++) e = o[n].audioId, cc.audioEngine.setVolume(e, t)
                }, e.prototype.garbageCollector = function () {
                    for (var t = null, e = this.audioPlayingList.length - 1; e >= 0; e--) switch (t = this.audioPlayingList[e], cc.audioEngine.getState(t.audioId)) {
                        case cc.audioEngine.AudioState.STOPPED:
                        case cc.audioEngine.AudioState.ERROR:
                            this.audioPlayingList.splice(e, 1)
                    }
                }, n = i([s], e)
            }(cc.Component);
        n.default = u, cc._RF.pop()
    }, {
        "./AdManager": "AdManager",
        "./CocosHelper": "CocosHelper"
    }],
    CharacterCtrl: [function (t, e, n) {
        "use strict";
        cc._RF.push(e, "c10a7T9GE9Do442Op72se8o", "CharacterCtrl");
        var o, r = this && this.__extends || (o = function (t, e) {
            return (o = Object.setPrototypeOf || {
                __proto__: []
            }
                instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                })(t, e)
        }, function (t, e) {
            function n() {
                this.constructor = t
            }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        }),
            i = this && this.__decorate || function (t, e, n, o) {
                var r, i = arguments.length,
                    a = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o);
                else
                    for (var c = t.length - 1; c >= 0; c--)(r = t[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(e, n, a) : r(e, n)) || a);
                return i > 3 && a && Object.defineProperty(e, n, a), a
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.CharacterCtrlEventMacro = void 0;
        var a, c, s = t("./Customer"),
            u = t("./HelperTools"),
            l = t("./LevelData"),
            p = t("./Playarea"),
            f = t("./ThinkingPopup"),
            d = cc._decorator,
            h = d.ccclass;
        d.property,
            function (t) {
                t.Entry = "CharacterCtrl.EntryCustomer", t.Exit = "CharacterCtrl.ExitCustomer", t.Start = "CharacterCtrl.StartCustomer", t.Served = "CharacterCtrl.ServedCustomer"
            }(a = n.CharacterCtrlEventMacro || (n.CharacterCtrlEventMacro = {})),
            function (t) {
                t.Character1 = "Shally", t.Character2 = "Twisha", t.Character3 = "Wizard_Ani", t.Character4 = "john", t.Character5 = "Witch"
            }(c || (c = {}));
        var g = function (t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.CharacterPlace = [!1, !1, !1, !1], e.AllocatedCharacter = ["", "", "", ""], e.CharacterName = [c.Character1, c.Character2, c.Character3, c.Character4, c.Character5], e.ThinkingPopupObj = [], e.OrderIndex = 0, e
            }
            return r(e, t), e.prototype.onLoad = function () {
                this.cacheProperty()
            }, e.prototype.start = function () {
                this.registerEvents()
            }, e.prototype.registerEvents = function () {
                cc.game.on(a.Entry, this.CharacterEntry, this), cc.game.on(a.Exit, this.CharacterExit, this), cc.game.on(a.Start, this.StartCustomer, this), cc.game.on(a.Served, this.servedItem, this)
            }, e.prototype.StartCustomer = function () {
                var t = this,
                    e = l.default.getInstance().getNextCustomerTime(),
                    n = l.default.getInstance().getFirstCustomerSpawnTime();
                this.schedule(function () {
                    t.CharacterEntry()
                }, e, 1 / 0, n)
            }, e.prototype.CharacterEntry = function () {
                if (0 != this.isAnyPlaceFree() && l.default.getInstance().getCustomerReadyForRun() && !(l.default.getInstance().isShowHint && l.default.getInstance().getEntryCustomerCount() > 0))
                    if (l.default.getInstance().getConstraint() == l.Constraint.CUSTOMER && l.default.getInstance().getEntryCustomerCount() >= l.default.getInstance().getConstraintValue()) this.isAllPlaceFree() && (this.unscheduleAllCallbacks(), cc.game.emit("LevelFinished"));
                    else {
                        this.OrderIndex >= l.default.getInstance().getTotalOrders() && (this.OrderIndex = 0);
                        var t = this.getCharacterName(),
                            e = this.getEmptyIndex().shift();
                        this.AllocatedCharacter[e] = t, this.CharacterPlace[e] = !0, cc.game.emit(s.CustomerEventMacro.Entry, t, e, this.OrderIndex), l.default.getInstance().addCustomerEntry(), this.OrderIndex++
                    }
            }, e.prototype.CharacterExit = function (t) {
                this.CharacterPlace[t - 1] && (cc.game.emit(s.CustomerEventMacro.Exit, this.AllocatedCharacter[t - 1]), this.setEmptyIndex(t - 1), l.default.getInstance().addCustomerExit(), cc.game.emit("UpdateCustomerCount"))
            }, e.prototype.getEmptyIndex = function () {
                for (var t = [], e = 0; e < this.CharacterPlace.length; e++) 0 == this.CharacterPlace[e] && t.push(e);
                return u.Shuffle(t)
            }, e.prototype.getCharacterName = function () {
                var t = 0;
                u.Shuffle(this.CharacterName);
                for (var e = 0; e < this.CharacterName.length; e++)
                    for (var n = 0; n < this.AllocatedCharacter.length && this.CharacterName[e] != this.AllocatedCharacter[n]; n++) n == this.AllocatedCharacter.length - 1 && (t = e);
                return this.CharacterName[t]
            }, e.prototype.setEmptyIndex = function (t) {
                this.CharacterPlace[t] = !1
            }, e.prototype.isAnyPlaceFree = function () {
                for (var t = 0; t < this.CharacterPlace.length; t++)
                    if (0 == this.CharacterPlace[t]) return !0;
                return !1
            }, e.prototype.isAllPlaceFree = function () {
                for (var t = !0, e = 0; e < this.CharacterPlace.length; e++)
                    if (this.CharacterPlace[e]) {
                        t = !1;
                        break
                    }
                return t
            }, e.prototype.cacheProperty = function () {
                this.ThinkingPopupObj[0] = cc.find("ThinkingPopup/1", this.node).getComponent(f.default), this.ThinkingPopupObj[1] = cc.find("ThinkingPopup/2", this.node).getComponent(f.default), this.ThinkingPopupObj[2] = cc.find("ThinkingPopup/3", this.node).getComponent(f.default), this.ThinkingPopupObj[3] = cc.find("ThinkingPopup/4", this.node).getComponent(f.default)
            }, e.prototype.servedItem = function (t, e) {
                for (var n = this.getList(), o = 0; o < this.ThinkingPopupObj.length; o++)
                    for (var r = n[o], i = this.ThinkingPopupObj[r].getRecipeList(), a = 0; a < i.length; a++)
                        if (i[a] == t) return this.ThinkingPopupObj[r].deleteItem(t, e), void cc.game.emit(p.TruckEventMacro.ServedSuccess, e)
            }, e.prototype.getList = function () {
                for (var t = [], e = [], n = 0; n < this.ThinkingPopupObj.length; n++) t[n] = this.ThinkingPopupObj[n].getProgress(), e[n] = n;
                return this.Sorting(t, e), e
            }, e.prototype.Sorting = function (t, e) {
                for (var n = 1; n < t.length; n++)
                    if (t[n] < t[n - 1]) {
                        var o = e[n];
                        e[n] = e[n - 1], e[n - 1] = o;
                        var r = t[n];
                        t[n] = t[n - 1], t[n - 1] = r
                    }
                for (n = 1; n < t.length; n++) t[n] < t[n - 1] && this.Sorting(t, e)
            }, i([h], e)
        }(cc.Component);
        n.default = g, cc._RF.pop()
    }, {
        "./Customer": "Customer",
        "./HelperTools": "HelperTools",
        "./LevelData": "LevelData",
        "./Playarea": "Playarea",
        "./ThinkingPopup": "ThinkingPopup"
    }],
    CocosHelper: [function (t, e, n) {
        "use strict";
        cc._RF.push(e, "7f9c3QfZo5Cbp1EblnOZWF3", "CocosHelper");
        var o, r = this && this.__extends || (o = function (t, e) {
            return (o = Object.setPrototypeOf || {
                __proto__: []
            }
                instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                })(t, e)
        }, function (t, e) {
            function n() {
                this.constructor = t
            }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        }),
            i = this && this.__decorate || function (t, e, n, o) {
                var r, i = arguments.length,
                    a = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o);
                else
                    for (var c = t.length - 1; c >= 0; c--)(r = t[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(e, n, a) : r(e, n)) || a);
                return i > 3 && a && Object.defineProperty(e, n, a), a
            },
            a = this && this.__awaiter || function (t, e, n, o) {
                return new (n || (n = Promise))(function (r, i) {
                    function a(t) {
                        try {
                            s(o.next(t))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function c(t) {
                        try {
                            s(o.throw(t))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function s(t) {
                        var e;
                        t.done ? r(t.value) : (e = t.value, e instanceof n ? e : new n(function (t) {
                            t(e)
                        })).then(a, c)
                    }
                    s((o = o.apply(t, e || [])).next())
                })
            },
            c = this && this.__generator || function (t, e) {
                var n, o, r, i, a = {
                    label: 0,
                    sent: function () {
                        if (1 & r[0]) throw r[1];
                        return r[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: c(0),
                    throw: c(1),
                    return: c(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function () {
                    return this
                }), i;

                function c(t) {
                    return function (e) {
                        return s([t, e])
                    }
                }

                function s(i) {
                    if (n) throw new TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (n = 1, o && (r = 2 & i[0] ? o.return : i[0] ? o.throw || ((r = o.return) && r.call(o), 0) : o.next) && !(r = r.call(o, i[1])).done) return r;
                        switch (o = 0, r && (i = [2 & i[0], r.value]), i[0]) {
                            case 0:
                            case 1:
                                r = i;
                                break;
                            case 4:
                                return a.label++, {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, o = i[1], i = [0];
                                continue;
                            case 7:
                                i = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(r = (r = a.trys).length > 0 && r[r.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === i[0] && (!r || i[1] > r[0] && i[1] < r[3])) {
                                    a.label = i[1];
                                    break
                                }
                                if (6 === i[0] && a.label < r[1]) {
                                    a.label = r[1], r = i;
                                    break
                                }
                                if (r && a.label < r[2]) {
                                    a.label = r[2], a.ops.push(i);
                                    break
                                }
                                r[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        i = e.call(t, a)
                    } catch (c) {
                        i = [6, c], o = 0
                    } finally {
                            n = r = 0
                        }
                    if (5 & i[0]) throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.shuffleArray = n.getRandomFloat = n.getRandomNumber = n.Padding = n.Delay = void 0;
        var s = t("./AdManager"),
            u = t("./AudioManager"),
            l = cc._decorator,
            p = l.ccclass,
            f = (l.property, function (t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.prefab = [], e.isSwitchTab = !1, e.ItemIndex = [], e.isLevelDone = [!1, !1, !1, !1, !1, !1, !1, !1], e
                }
                var n;
                return r(e, t), n = e, e.getInstance = function () {
                    return n.instance || (n.instance = new n, n.instance.registerEvent()), n.instance
                }, e.prototype.registerEvent = function () {
                    cc.game.on(cc.game.EVENT_SHOW, n.instance.gameResume, !1), cc.game.on(cc.game.EVENT_HIDE, n.instance.gamePause, !1)
                }, e.prototype.reShuffleArray = function () {
                    d(this.ItemIndex)
                }, e.prototype.gameResume = function () {
                    s.default.isSwitchTab = !1, s.default.isAdRunnning ? (cc.game.pause(), s.default.getInstance().MuteSound()) : (cc.game.resume(), s.default.getInstance().StartSound())
                }, e.prototype.gamePause = function () {
                    cc.game.pause(), s.default.isSwitchTab = !0, s.default.getInstance().MuteSound()
                }, e.prototype.initSDK = function () { }, e.prototype.loadPromotion = function () {
                    var t = this,
                        e = this;
                    return new Promise(function (n, o) {
                        0 == t.prefab.length ? cc.loader.loadResDir("/Prefab", function (t, r) {
                            if (t) o(!1);
                            else {
                                if (0 == e.prefab.length)
                                    for (var i = 0, a = r; i < a.length; i++) {
                                        var c = a[i];
                                        e.prefab.push(c)
                                    }
                                n(!0)
                            }
                        }) : n(!0)
                    })
                }, e.prototype.addLogo = function (t, e) {
                    return a(this, void 0, void 0, function () {
                        var n, o, r, i, a;
                        return c(this, function (c) {
                            switch (c.label) {
                                case 0:
                                    return 0 != (n = this).prefab.length ? [3, 2] : [4, this.loadPromotion()];
                                case 1:
                                    c.sent(), c.label = 2;
                                case 2:
                                    for (o = 0, r = n.prefab; o < r.length; o++)
                                        if ("logo" == (i = r[o]).name) {
                                            a = cc.instantiate(i), t.addChild(a), a.position = e;
                                            break
                                        }
                                    return [2]
                            }
                        })
                    })
                }, e.prototype.addMore = function (t, e) {
                    return a(this, void 0, void 0, function () {
                        var n, o, r, i, a;
                        return c(this, function (c) {
                            switch (c.label) {
                                case 0:
                                    return 0 != (n = this).prefab.length ? [3, 2] : [4, this.loadPromotion()];
                                case 1:
                                    c.sent(), c.label = 2;
                                case 2:
                                    for (o = 0, r = n.prefab; o < r.length; o++)
                                        if ("more" == (i = r[o]).name) {
                                            a = cc.instantiate(i), t.addChild(a), a.position = e;
                                            break
                                        }
                                    return [2]
                            }
                        })
                    })
                }, e.prototype.addPromotion = function (t) {
                    return a(this, void 0, void 0, function () {
                        var e, n, o, r, i;
                        return c(this, function (a) {
                            switch (a.label) {
                                case 0:
                                    return 0 != (e = this).prefab.length ? [3, 2] : [4, this.loadPromotion()];
                                case 1:
                                    a.sent(), a.label = 2;
                                case 2:
                                    for (n = 0, o = e.prefab; n < o.length; n++)
                                        if ("promotion" == (r = o[n]).name) {
                                            i = cc.instantiate(r), t.addChild(i), i.position = cc.v3(56565, 56565, 5656565);
                                            break
                                        }
                                    return [2]
                            }
                        })
                    })
                }, e.prototype.ShowPromotion = function (t) {
                    t.getChildByName("promotion") && (t.getChildByName("promotion").position = cc.Vec3.ZERO, t.getChildByName("more") && (t.getChildByName("more").active = !1, console.log("more hide")), t.getChildByName("logo") && (t.getChildByName("logo").active = !1))
                }, e.prototype.ShowRewardFailedPopup = function () {
                    if (console.log("ShowRewardFailedPopup"), cc.find("Canvas/RewardFailPopup")) cc.find("Canvas/RewardFailPopup").active = !0;
                    else
                        for (var t = 0, e = this.prefab; t < e.length; t++) {
                            var n = e[t];
                            if ("RewardFailPopup" == n.name) {
                                var o = cc.instantiate(n);
                                cc.find("Canvas").addChild(o), o.position = cc.Vec3.ZERO, o.active = !0;
                                break
                            }
                        }
                }, e.prototype.BounceEffect = function (t, e, n) {
                    void 0 === n && (n = .5), cc.Tween.stopAllByTarget(t), t.scale = 2 * e, u.default.getInstance().play("swipe1"), cc.tween(t).to(n, {
                        scale: e
                    }, {
                        easing: cc.easing.bounceOut
                    }).start()
                }, n = i([p], e)
            }(cc.Component));

        function d(t) {
            for (var e = t.length - 1; e > 0; e--) {
                var n = Math.floor(Math.random() * (e + 1)),
                    o = t[e];
                t[e] = t[n], t[n] = o
            }
        }
        n.default = f, n.Delay = function (t) {
            return void 0 === t && (t = 1), a(this, void 0, void 0, function () {
                return c(this, function () {
                    return [2, new Promise(function (e) {
                        setTimeout(function () {
                            e()
                        }, 1e3 * t)
                    })]
                })
            })
        }, n.Padding = function (t, e) {
            for (; t.length != e;) t = "0" + t;
            return t
        }, n.getRandomNumber = function (t, e) {
            return Math.floor(Math.random() * (e - t + 1)) + t
        }, n.getRandomFloat = function (t, e) {
            return Math.random() * (e - t) + t
        }, n.shuffleArray = d, cc._RF.pop()
    }, {
        "./AdManager": "AdManager",
        "./AudioManager": "AudioManager"
    }],
    Customer: [function (t, e, n) {
        "use strict";
        cc._RF.push(e, "6afa01H63dNp5V4SAg/AqVz", "Customer");
        var o, r = this && this.__extends || (o = function (t, e) {
            return (o = Object.setPrototypeOf || {
                __proto__: []
            }
                instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                })(t, e)
        }, function (t, e) {
            function n() {
                this.constructor = t
            }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        }),
            i = this && this.__decorate || function (t, e, n, o) {
                var r, i = arguments.length,
                    a = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o);
                else
                    for (var c = t.length - 1; c >= 0; c--)(r = t[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(e, n, a) : r(e, n)) || a);
                return i > 3 && a && Object.defineProperty(e, n, a), a
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.CustomerEventMacro = void 0;
        var a, c = t("./ThinkingPopup"),
            s = cc._decorator,
            u = s.ccclass;
        s.property,
            function (t) {
                t.Entry = "Customer.Entry", t.Exit = "Customer.Exit"
            }(a = n.CustomerEventMacro || (n.CustomerEventMacro = {}));
        var l = function (t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.Skeleton = null, e
            }
            return r(e, t), e.prototype.onLoad = function () {
                this.cacheItems()
            }, e.prototype.start = function () {
                this.registerEvents()
            }, e.prototype.cacheItems = function () {
                this.Skeleton = this.node.getComponent(sp.Skeleton)
            }, e.prototype.registerEvents = function () {
                cc.game.on(a.Exit, this.CharacterExit, this), cc.game.on(a.Entry, this.CharacterEntry, this)
            }, e.prototype.CharacterEntry = function (t, e, n) {
                var o = this;
                this.node.name == t.toString() && (this.node.zIndex = 0, this.node.x = -600, this.Skeleton.setAnimation(0, "Walk", !0), 0 == e ? cc.tween(this.node).to(1, {
                    position: cc.v3(-240.768, this.node.y)
                }).call(function () {
                    o.node.zIndex = 1, o.Skeleton.setAnimation(0, "Idle", !0), cc.game.emit(c.ThinkingPopupEventMacro.Show, e + 1, n)
                }).start() : 1 == e ? cc.tween(this.node).to(1.5, {
                    position: cc.v3(-80, this.node.y)
                }).call(function () {
                    o.node.zIndex = 1, o.Skeleton.setAnimation(0, "Idle", !0), cc.game.emit(c.ThinkingPopupEventMacro.Show, e + 1, n)
                }).start() : 2 == e ? cc.tween(this.node).to(2, {
                    position: cc.v3(71, this.node.y)
                }).call(function () {
                    o.node.zIndex = 1, o.Skeleton.setAnimation(0, "Idle", !0), cc.game.emit(c.ThinkingPopupEventMacro.Show, e + 1, n)
                }).start() : 3 == e && cc.tween(this.node).to(2.5, {
                    position: cc.v3(233, this.node.y)
                }).call(function () {
                    o.node.zIndex = 1, o.Skeleton.setAnimation(0, "Idle", !0), cc.game.emit(c.ThinkingPopupEventMacro.Show, e + 1, n)
                }).start())
            }, e.prototype.CharacterExit = function (t) {
                this.node.name == t && (this.node.zIndex = 0, this.Skeleton.setAnimation(0, "Walk", !0), cc.tween(this.node).to(3, {
                    position: cc.v3(600, this.node.y)
                }).call(function () { }).start())
            }, e.prototype.IdleAnimation = function () { }, i([u], e)
        }(cc.Component);
        n.default = l, cc._RF.pop()
    }, {
        "./ThinkingPopup": "ThinkingPopup"
    }],
    FoodProgress: [function (t, e, n) {
        "use strict";
        cc._RF.push(e, "0da3dwX0FZAAazNd4PjkGjp", "FoodProgress");
        var o, r = this && this.__extends || (o = function (t, e) {
            return (o = Object.setPrototypeOf || {
                __proto__: []
            }
                instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                })(t, e)
        }, function (t, e) {
            function n() {
                this.constructor = t
            }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        }),
            i = this && this.__decorate || function (t, e, n, o) {
                var r, i = arguments.length,
                    a = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o);
                else
                    for (var c = t.length - 1; c >= 0; c--)(r = t[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(e, n, a) : r(e, n)) || a);
                return i > 3 && a && Object.defineProperty(e, n, a), a
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.FoodProgressStatus = n.FoodProgressStatusEvent = void 0;
        var a, c, s = t("./LevelData"),
            u = t("./Promotion/AudioManager"),
            l = cc._decorator,
            p = l.ccclass,
            f = l.property;
        (function (t) {
            t.Show = "FoodProgress.Show", t.Started = "FoodProgress.Started", t.FoodReady = "FoodProgress.FoodReady", t.FoodBurned = "FoodProgress.FoodBurned", t.Update = "FoodProgress.FoodStateUpdate"
        })(a = n.FoodProgressStatusEvent || (n.FoodProgressStatusEvent = {})),
            function (t) {
                t[t.IDLE = 0] = "IDLE", t[t.COOKING = 1] = "COOKING", t[t.READY = 2] = "READY", t[t.BURNED = 3] = "BURNED"
            }(c = n.FoodProgressStatus || (n.FoodProgressStatus = {}));
        var d = function (t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.isBurnFood = !1, e.foodId = "", e.foodIndex = -1, e.cooktime = 2, e.burntime = 4, e.isInstaCook = !1, e.ProgressNodeGreen = null, e.ProgressNodeRed = null, e.ProgressBarGreen = null, e.ProgressBarRed = null, e.FoodStatus = null, e.Machine = null, e
            }
            return r(e, t), e.prototype.onLoad = function () {
                this.CacheItems()
            }, e.prototype.start = function () {
                this.registerEvent(), this.hideProgress(), this.setFoodStatus(c.IDLE)
            }, e.prototype.setFoodID = function (t, e, n) {
                this.Machine = e, this.foodId = t, this.foodIndex = n, this.cooktime = s.default.getInstance().getCookingTime(this.foodId), this.burntime = s.default.getInstance().getBurningTime(this.foodId)
            }, e.prototype.CacheItems = function () {
                this.ProgressNodeGreen = cc.find("ProgressGreen", this.node), this.ProgressNodeRed = cc.find("ProgressRed", this.node), this.ProgressBarGreen = cc.find("Progress", this.ProgressNodeGreen).getComponent(cc.Sprite), this.ProgressBarRed = cc.find("Progress", this.ProgressNodeRed).getComponent(cc.Sprite)
            }, e.prototype.registerEvent = function () { }, e.prototype.onStartFoodProgress = function () {
                this.isInstaCook ? (this.setFoodStatus(c.READY), this.onFoodReady(), cc.game.emit(a.Update, this.foodId, c.COOKING, this.Machine, this.foodIndex)) : (this.setFoodStatus(c.COOKING), this.playProgressEntryAnim("green"))
            }, e.prototype.playProgressEntryAnim = function (t) {
                var e = this;
                this.hideProgress(), this.showProgress(t), this.node.scale = 0, cc.tween(this.node).to(.5, {
                    scale: 1
                }, {
                    easing: "backOut"
                }).call(function () {
                    "green" == t ? e.animateProgressBarGreen() : "red" == t && e.animateProgressBarRed()
                }).start()
            }, e.prototype.animateProgressBarGreen = function () {
                var t = this;
                cc.game.emit(a.Update, this.foodId, c.COOKING, this.Machine, this.foodIndex);
                var e = 0;
                cc.tween(this.ProgressBarGreen).to(this.cooktime, {
                    fillRange: -1
                }, {
                    progress: function (n, o, r, i) {
                        return e = cc.misc.lerp(n, o, i), t.ProgressBarGreen.fillRange = e, e
                    }
                }).delay(.1).call(function () {
                    t.setFoodStatus(c.READY), t.onFoodReady(), cc.game.emit(a.Update, t.foodId, c.READY, t.Machine, t.foodIndex), u.default.getInstance().play("food progress finish bell")
                }).start()
            }, e.prototype.animateProgressBarRed = function () {
                var t = this;
                this.ProgressNodeRed.getComponent(cc.Animation).play("FoodProgressRed");
                var e = 0;
                cc.tween(this.ProgressBarRed).to(this.burntime, {
                    fillRange: -1
                }, {
                    progress: function (n, o, r, i) {
                        return e = cc.misc.lerp(n, o, i), t.ProgressBarGreen.fillRange = e, e
                    }
                }).delay(.1).call(function () {
                    t.setFoodStatus(c.BURNED), cc.game.emit(a.Update, t.foodId, c.BURNED, t.Machine, t.foodIndex), u.default.getInstance().play("food burn"), t.onFoodBurned()
                }).start()
            }, e.prototype.showProgress = function (t) {
                "green" == t ? this.ProgressNodeGreen.active = !0 : "red" == t && (this.ProgressNodeRed.active = !0)
            }, e.prototype.hideProgress = function () {
                cc.tween(this.ProgressBarGreen).stop(), cc.tween(this.ProgressBarRed).stop(), cc.tween(this.node).stop(), cc.Tween.stopAllByTarget(this.ProgressBarGreen), cc.Tween.stopAllByTarget(this.ProgressBarRed), cc.Tween.stopAllByTarget(this.node), this.ProgressNodeRed.getComponent(cc.Animation).stop(), cc.find("Fire", this.ProgressNodeRed).getComponent(cc.Sprite).spriteFrame = null, this.node.scale = 0, this.ProgressNodeGreen.active = !1, this.ProgressNodeRed.active = !1, this.ProgressBarGreen.fillRange = 0, this.ProgressBarRed.fillRange = 0
            }, e.prototype.onFoodReady = function () {
                this.isBurnFood && 0 == s.default.getInstance().isShowHint ? this.playProgressEntryAnim("red") : this.hideProgress()
            }, e.prototype.onFoodBurned = function () {
                this.hideProgress()
            }, e.prototype.setFoodStatus = function (t) {
                this.FoodStatus = t
            }, e.prototype.getFoodStatus = function () {
                return this.FoodStatus
            }, i([f], e.prototype, "isBurnFood", void 0), i([p], e)
        }(cc.Component);
        n.default = d, cc._RF.pop()
    }, {
        "./LevelData": "LevelData",
        "./Promotion/AudioManager": "AudioManager"
    }],
    HelperTools: [function (t, e, n) {
        "use strict";
        cc._RF.push(e, "13812UirHdE9JGkYgNum3bN", "HelperTools");
        var o = this && this.__awaiter || function (t, e, n, o) {
            return new (n || (n = Promise))(function (r, i) {
                function a(t) {
                    try {
                        s(o.next(t))
                    } catch (e) {
                        i(e)
                    }
                }

                function c(t) {
                    try {
                        s(o.throw(t))
                    } catch (e) {
                        i(e)
                    }
                }

                function s(t) {
                    var e;
                    t.done ? r(t.value) : (e = t.value, e instanceof n ? e : new n(function (t) {
                        t(e)
                    })).then(a, c)
                }
                s((o = o.apply(t, e || [])).next())
            })
        },
            r = this && this.__generator || function (t, e) {
                var n, o, r, i, a = {
                    label: 0,
                    sent: function () {
                        if (1 & r[0]) throw r[1];
                        return r[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: c(0),
                    throw: c(1),
                    return: c(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function () {
                    return this
                }), i;

                function c(t) {
                    return function (e) {
                        return s([t, e])
                    }
                }

                function s(i) {
                    if (n) throw new TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (n = 1, o && (r = 2 & i[0] ? o.return : i[0] ? o.throw || ((r = o.return) && r.call(o), 0) : o.next) && !(r = r.call(o, i[1])).done) return r;
                        switch (o = 0, r && (i = [2 & i[0], r.value]), i[0]) {
                            case 0:
                            case 1:
                                r = i;
                                break;
                            case 4:
                                return a.label++, {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, o = i[1], i = [0];
                                continue;
                            case 7:
                                i = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(r = (r = a.trys).length > 0 && r[r.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === i[0] && (!r || i[1] > r[0] && i[1] < r[3])) {
                                    a.label = i[1];
                                    break
                                }
                                if (6 === i[0] && a.label < r[1]) {
                                    a.label = r[1], r = i;
                                    break
                                }
                                if (r && a.label < r[2]) {
                                    a.label = r[2], a.ops.push(i);
                                    break
                                }
                                r[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        i = e.call(t, a)
                    } catch (c) {
                        i = [6, c], o = 0
                    } finally {
                            n = r = 0
                        }
                    if (5 & i[0]) throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }
            };

        function i() {
            cc.view.enableAutoFullScreen(!0)
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.distanceBetween2Points = n.animateProgressTo = n.NumberArray = n.RegisterDeviceFullScreen = n.RequestDeviceFullScreen = n.GetURLParameter = n.StringFormat = n.UItools = n.RoundDown = n.RoundUp = n.BeautifyNumber = n.Pad = n.Shuffle = n.SkippableDelay = n.Delay = n.AsyncTask = n.GetRandomFloat = n.GetRandomInterger = void 0, n.GetRandomInterger = function (t, e) {
            return Math.floor(Math.random() * (e - t + 1)) + t
        }, n.GetRandomFloat = function (t, e) {
            return Math.random() * (e - t) + t
        }, n.AsyncTask = function (t) {
            return o(this, void 0, void 0, function () {
                return r(this, function () {
                    return [2, new Promise(function (e) {
                        t(e)
                    })]
                })
            })
        }, n.Delay = function (t) {
            return void 0 === t && (t = 1), o(this, void 0, void 0, function () {
                return r(this, function () {
                    return [2, new Promise(function (e) {
                        setTimeout(function () {
                            e()
                        }, 1e3 * t)
                    })]
                })
            })
        }, n.SkippableDelay = function (t, e) {
            return void 0 === t && (t = 1), o(this, void 0, void 0, function () {
                return r(this, function () {
                    return t <= 0 ? [2] : [2, new Promise(function (n) {
                        setTimeout(function () {
                            n()
                        }, 1e3 * t), e && cc.game.on(e, function () {
                            n()
                        })
                    })]
                })
            })
        }, n.Shuffle = function (t) {
            if (null == t) return t;
            for (var e, n, o = t.length; 0 !== o;) n = Math.floor(Math.random() * o), e = t[o -= 1], t[o] = t[n], t[n] = e;
            return t
        }, n.Pad = function (t, e) {
            var n = "000000000" + t;
            return n.substr(n.length - e)
        }, n.BeautifyNumber = function (t, e) {
            return 0 === t ? t.toFixed(e) : Number.isInteger(t) ? t.toFixed(0) : e ? t.toFixed(e) : t.toString()
        }, n.RoundUp = function (t, e) {
            void 0 === e && (e = 2);
            var n = Math.pow(10, e);
            return Math.ceil(t * n) / n
        }, n.RoundDown = function (t, e) {
            void 0 === e && (e = 2);
            var n = Math.pow(10, e);
            return Math.floor(t * n) / n
        }, n.UItools = {
            ChangeButtonSpriteFrame: function (t, e, n) {
                t.normalSprite = e.getSpriteFrame(n.normalSprite), t.pressedSprite = e.getSpriteFrame(n.pressedSprite), t.hoverSprite = e.getSpriteFrame(n.hoverSprite), t.disabledSprite = e.getSpriteFrame(n.disabledSprite)
            }
        }, n.StringFormat = function (t) {
            for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
            return t.replace(/{(\d+)}/g, function (t, n) {
                return e[n] || ""
            })
        }, n.GetURLParameter = function (t) {
            var e, n, o = new RegExp("[?|&]" + t + "=([^&;]+?)(&|#|;|$)").exec(location.search);
            return o && (e = (o || [, ""])[1].replace(/\+/g, "%20"), n = decodeURIComponent(e)), n || null
        }, n.RequestDeviceFullScreen = i, n.RegisterDeviceFullScreen = function () {
            cc.sys.isMobile && document.getElementById("GameCanvas").addEventListener("touchend", function () {
                i()
            }, !1)
        }, n.NumberArray = function (t, e, n, o) {
            var r, i = [],
                a = !1;
            if ((n || o) && (a = !0, n || (n = ""), o || (o = "")), e < t)
                for (r = t; r >= e; r--) a ? i.push(n + r.toString() + o) : i.push(r);
            else
                for (r = t; r <= e; r++) a ? i.push(n + r.toString() + o) : i.push(r);
            return i
        }, n.animateProgressTo = function (t, e, n) {
            void 0 === n && (n = 1);
            var o = 0;
            cc.tween(t).to(n, {
                fillRange: e
            }, {
                progress: function (e, n, r, i) {
                    return o = cc.misc.lerp(e, n, i), t.fillRange = o, o
                }
            }).start()
        }, n.distanceBetween2Points = function (t, e) {
            var n = e.x - t.x,
                o = e.y - t.y;
            return Math.sqrt(Math.pow(n, 2) + Math.pow(o, 2))
        }, cc._RF.pop()
    }, {}],
    Hint: [function (t, e, n) {
        "use strict";
        cc._RF.push(e, "01b91GL2TlLE7U168GE/DPH", "Hint");
        var o, r = this && this.__extends || (o = function (t, e) {
            return (o = Object.setPrototypeOf || {
                __proto__: []
            }
                instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                })(t, e)
        }, function (t, e) {
            function n() {
                this.constructor = t
            }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        }),
            i = this && this.__decorate || function (t, e, n, o) {
                var r, i = arguments.length,
                    a = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o);
                else
                    for (var c = t.length - 1; c >= 0; c--)(r = t[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(e, n, a) : r(e, n)) || a);
                return i > 3 && a && Object.defineProperty(e, n, a), a
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.HintEventMacro = void 0;
        var a, c = t("./LevelData"),
            s = cc._decorator,
            u = s.ccclass;
        s.property,
            function (t) {
                t.Show = "HintEventMacro.Show", t.Hide = "HintEventMacro.Hide", t.StartHintHide = "HintEventMacro.StartHintHide"
            }(a = n.HintEventMacro || (n.HintEventMacro = {}));
        var l = function (t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.Hint = null, e.HintText = null, e.LevelStartHint = null, e.HintFlow = [], e
            }
            return r(e, t), e.prototype.onLoad = function () {
                this.Hint = cc.find("Parent", this.node), this.HintText = cc.find("Right", this.Hint), this.LevelStartHint = cc.find("LevelStartHint", this.node), this.LevelStartHint.active = !1, this.Hint.active = !1
            }, e.prototype.start = function () { }, e.prototype.setHintFlow = function (t) {
                this.HintFlow = t
            }, e.prototype.ShowHint = function () {
                if (0 == this.HintFlow.length) return this.HideHint(), void (c.default.getInstance().isShowHint = !1);
                c.default.getInstance().isShowHint = !0, c.default.getInstance().HintID = this.HintFlow[0].HintID, this.Hint.position = this.HintFlow[0].HintPosition, this.Hint.active = !0, null == this.HintFlow[0].Text ? this.HintText.active = !1 : (this.HintText.active = !0, this.HintText.getChildByName("Text").getComponent(cc.Label).string = this.HintFlow[0].Text), this.HintFlow.shift()
            }, e.prototype.HideHint = function () {
                this.Hint.active = !1
            }, e.prototype.ShowLevelStart = function () {
                var t = this;
                c.default.getInstance().isShowHint = !0, this.LevelStartHint.active = !0, this.LevelStartHint.once(cc.Node.EventType.TOUCH_START, function () {
                    t.LevelStartHint.active = !1, cc.game.emit(a.StartHintHide)
                }, this)
            }, i([u], e)
        }(cc.Component);
        n.default = l, cc._RF.pop()
    }, {
        "./LevelData": "LevelData"
    }],
    Ingridient1: [function (t, e, n) {
        "use strict";
        cc._RF.push(e, "f3220+eILhNi4wsb1s85CaS", "Ingridient1");
        var o, r, i = this && this.__extends || (o = function (t, e) {
            return (o = Object.setPrototypeOf || {
                __proto__: []
            }
                instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                })(t, e)
        }, function (t, e) {
            function n() {
                this.constructor = t
            }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        }),
            a = this && this.__decorate || function (t, e, n, o) {
                var r, i = arguments.length,
                    a = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o);
                else
                    for (var c = t.length - 1; c >= 0; c--)(r = t[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(e, n, a) : r(e, n)) || a);
                return i > 3 && a && Object.defineProperty(e, n, a), a
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.INGRIDIENT = void 0,
            function (t) {
                t.Items = cc.Enum({
                    "JuiceGlass-01": 1,
                    "JuiceMachine-02": 2,
                    "Bread-03": 3,
                    "Pan-04": 4,
                    "Plate-05": 5,
                    "Panner-06": 6,
                    "Tomato-07": 7,
                    "Spinach-08": 8,
                    "Olive-09": 9
                })
            }(r = n.INGRIDIENT || (n.INGRIDIENT = {}));
        var c = cc._decorator,
            s = c.ccclass,
            u = c.property,
            l = function (t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.FoodId = 1, e
                }
                return i(e, t), e.prototype.onLoad = function () { }, e.prototype.getFoodId = function () {
                    return this.FoodId
                }, e.prototype.start = function () { }, e.prototype.cacheProperty = function () { }, e.prototype.registerEvents = function () { }, a([u({
                    type: cc.Enum(r.Items)
                })], e.prototype, "FoodId", void 0), a([s], e)
            }(cc.Component);
        n.default = l, cc._RF.pop()
    }, {}],
    LevelDataHelper: [function (t, e, n) {
        "use strict";
        cc._RF.push(e, "c1e69ZDHrdKSp4UmpJam3WY", "LevelDataHelper");
        var o, r = this && this.__extends || (o = function (t, e) {
            return (o = Object.setPrototypeOf || {
                __proto__: []
            }
                instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                })(t, e)
        }, function (t, e) {
            function n() {
                this.constructor = t
            }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        }),
            i = this && this.__decorate || function (t, e, n, o) {
                var r, i = arguments.length,
                    a = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o);
                else
                    for (var c = t.length - 1; c >= 0; c--)(r = t[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(e, n, a) : r(e, n)) || a);
                return i > 3 && a && Object.defineProperty(e, n, a), a
            },
            a = this && this.__awaiter || function (t, e, n, o) {
                return new (n || (n = Promise))(function (r, i) {
                    function a(t) {
                        try {
                            s(o.next(t))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function c(t) {
                        try {
                            s(o.throw(t))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function s(t) {
                        var e;
                        t.done ? r(t.value) : (e = t.value, e instanceof n ? e : new n(function (t) {
                            t(e)
                        })).then(a, c)
                    }
                    s((o = o.apply(t, e || [])).next())
                })
            },
            c = this && this.__generator || function (t, e) {
                var n, o, r, i, a = {
                    label: 0,
                    sent: function () {
                        if (1 & r[0]) throw r[1];
                        return r[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: c(0),
                    throw: c(1),
                    return: c(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function () {
                    return this
                }), i;

                function c(t) {
                    return function (e) {
                        return s([t, e])
                    }
                }

                function s(i) {
                    if (n) throw new TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (n = 1, o && (r = 2 & i[0] ? o.return : i[0] ? o.throw || ((r = o.return) && r.call(o), 0) : o.next) && !(r = r.call(o, i[1])).done) return r;
                        switch (o = 0, r && (i = [2 & i[0], r.value]), i[0]) {
                            case 0:
                            case 1:
                                r = i;
                                break;
                            case 4:
                                return a.label++, {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, o = i[1], i = [0];
                                continue;
                            case 7:
                                i = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(r = (r = a.trys).length > 0 && r[r.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === i[0] && (!r || i[1] > r[0] && i[1] < r[3])) {
                                    a.label = i[1];
                                    break
                                }
                                if (6 === i[0] && a.label < r[1]) {
                                    a.label = r[1], r = i;
                                    break
                                }
                                if (r && a.label < r[2]) {
                                    a.label = r[2], a.ops.push(i);
                                    break
                                }
                                r[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        i = e.call(t, a)
                    } catch (c) {
                        i = [6, c], o = 0
                    } finally {
                            n = r = 0
                        }
                    if (5 & i[0]) throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var s = t("./HelperTools"),
            u = cc._decorator,
            l = u.ccclass,
            p = (u.property, function (t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.JsonFileData = [], e.resourceData = [], e
                }
                var n;
                return r(e, t), n = e, e.getInstance = function () {
                    return n.instance || (n.instance = new n), n.instance
                }, e.prototype.LoadJson = function (t) {
                    return a(this, void 0, void 0, function () {
                        return c(this, function (e) {
                            switch (e.label) {
                                case 0:
                                    return [4, this.loadHUDAssets(t)];
                                case 1:
                                    return e.sent(), [2]
                            }
                        })
                    })
                }, e.prototype.isDataAlreadyExists = function (t) {
                    for (var e = 0, n = this.JsonFileData; e < n.length; e++)
                        if (n[e].ID == t) return !0;
                    return !1
                }, e.prototype.isResourceAlreadyExists = function (t) {
                    for (var e = 0, n = this.resourceData; e < n.length; e++)
                        if (n[e].ID == t) return !0;
                    return !1
                }, e.prototype.getJsonData = function (t) {
                    for (var e = 0, n = this.JsonFileData; e < n.length; e++) {
                        var o = n[e];
                        if (o.ID == t) return o.Data
                    }
                    return null
                }, e.prototype.getResourceData = function (t) {
                    for (var e = 0, n = this.resourceData; e < n.length; e++) {
                        var o = n[e];
                        if (o.ID == t) return o.Data
                    }
                    return null
                }, e.prototype.addResourceData = function (t) {
                    for (var e = [], n = 0, o = t.children; n < o.length; n++) {
                        var r = o[n];
                        e.push(r.getComponent(cc.Sprite).spriteFrame)
                    }
                    this.resourceData.push({
                        ID: "Recipe/Truck1",
                        Data: e
                    })
                }, e.prototype.loadResource = function (t) {
                    return a(this, void 0, void 0, function () {
                        var e = this;
                        return c(this, function () {
                            return this.isResourceAlreadyExists(t) ? [2] : [2, new Promise(function (n) {
                                var o = t,
                                    r = s.AsyncTask(function (n) {
                                        return a(e, void 0, void 0, function () {
                                            var e = this;
                                            return c(this, function () {
                                                return cc.resources.loadDir(o, function (o, r) {
                                                    if (null == o) {
                                                        var i = [];
                                                        r.forEach(function (t) {
                                                            t instanceof cc.SpriteFrame && i.push(t)
                                                        }), e.resourceData.push({
                                                            ID: t,
                                                            Data: i
                                                        })
                                                    }
                                                    n()
                                                }), [2]
                                            })
                                        })
                                    });
                                Promise.all([r]).then(function () {
                                    n()
                                })
                            })]
                        })
                    })
                }, e.prototype.loadHUDAssets = function (t) {
                    return a(this, void 0, void 0, function () {
                        var e = this;
                        return c(this, function () {
                            return this.isDataAlreadyExists(t) ? [2] : [2, new Promise(function (n) {
                                var o = s.AsyncTask(function (n) {
                                    return a(e, void 0, void 0, function () {
                                        var e = this;
                                        return c(this, function () {
                                            return cc.resources.load(t, cc.JsonAsset, function (o, r) {
                                                r && 0 == e.isDataAlreadyExists(t) && e.JsonFileData.push({
                                                    ID: t,
                                                    Data: r.json
                                                }), n()
                                            }), [2]
                                        })
                                    })
                                });
                                Promise.all([o]).then(function () {
                                    n()
                                })
                            })]
                        })
                    })
                }, e.prototype.getFrame = function (t, e) {
                    for (var o = 0; o < n.getInstance().getResourceData(t).length; o++)
                        if (n.getInstance().getResourceData(t)[o].name == this.getKey(e)) return n.getInstance().getResourceData(t)[o];
                    return null
                }, e.prototype.getKey = function (t) {
                    return "00" == t ? "T1_R_Juice" : "10" == t ? "T1_R_PC" : "11" == t ? "T1_R_PCWhiteCream" : "12" == t ? "T1_R_PCWhiteCreamSpider" : "13" == t ? "T1_R_PCGreenCream" : "14" == t ? "T1_R_PCGreenCreamSkull" : void 0
                }, e.instance = null, n = i([l], e)
            }(cc.Component));
        n.default = p, cc._RF.pop()
    }, {
        "./HelperTools": "HelperTools"
    }],
    LevelData: [function (t, e, n) {
        "use strict";
        cc._RF.push(e, "249180OJ+ZIIp6eRHo8vnVC", "LevelData");
        var o, r = this && this.__extends || (o = function (t, e) {
            return (o = Object.setPrototypeOf || {
                __proto__: []
            }
                instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                })(t, e)
        }, function (t, e) {
            function n() {
                this.constructor = t
            }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        }),
            i = this && this.__decorate || function (t, e, n, o) {
                var r, i = arguments.length,
                    a = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o);
                else
                    for (var c = t.length - 1; c >= 0; c--)(r = t[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(e, n, a) : r(e, n)) || a);
                return i > 3 && a && Object.defineProperty(e, n, a), a
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.SpecialConstraint = n.Constraint = n.levelTarget = n.FOOD_ID = void 0;
        var a, c, s, u = cc._decorator,
            l = u.ccclass;
        u.property, (n.FOOD_ID || (n.FOOD_ID = {})).Items = cc.Enum({
            "JuiceGlass-01": 0,
            "JuiceMachine-02": 1,
            "Bread-03": 2,
            "Pan-04": 3,
            "Plate-05": 4,
            "WhiteCream-06": 5,
            "GreenCream-07": 6,
            "Boo-08": 8,
            "Spider-09": 7
        }),
            function (t) {
                t.COIN = "levelTarget.COIN", t.DISH = "levelTarget.DISH", t.LIKE = "levelTarget.LIKE"
            }(a = n.levelTarget || (n.levelTarget = {})),
            function (t) {
                t.CUSTOMER = "Constraint.CUSTOMER", t.TIMER = "Constraint.TIMER"
            }(c = n.Constraint || (n.Constraint = {})),
            function (t) {
                t.NOBURNFOOD = "SpecialConstraint.NOBURNFOOD", t.DONTUSEDUSTBIN = "SpecialConstraint.DONTUSEDUSTBIN", t.DONTLOOSECUSTOMER = "SpecialConstraint.DONTLOOSECUSTOMER"
            }(s = n.SpecialConstraint || (n.SpecialConstraint = {}));
        var p = function (t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.CustomerData = null, e.UpgradeData = null, e.SelectedLevel = 1, e.SelectedSubLevel = 1, e.SelectedTruck = 1, e.CustomerIndex = 0, e.TotalEarnCoin = 0, e.isReadyForRun = !0, e.SecondChanceCustomer = 0, e.CustomerEntryCount = 0, e.CustomerExitCount = 0, e.isShowHint = !1, e.HintID = -1, e
            }
            var n;
            return r(e, t), n = e, e.getInstance = function () {
                return null == n.instance && (this.instance = new n), this.instance
            }, e.prototype.updateCustomerData = function (t) {
                this.isReadyForRun = !0, this.CustomerData = t, this.CustomerIndex = 0, this.SecondChanceCustomer = 0, this.CustomerEntryCount = 0, this.CustomerExitCount = 0, this.TotalEarnCoin = 0
            }, e.prototype.getTarget = function () {
                return 0 == this.CustomerData.levelTarget ? a.COIN : 1 == this.CustomerData.levelTarget ? a.DISH : 2 == this.CustomerData.levelTarget ? a.LIKE : a.COIN
            }, e.prototype.getTargetValue = function () {
                return this.CustomerData.targetValue
            }, e.prototype.getConstraint = function () {
                return 0 == this.CustomerData.mainConstraint ? c.CUSTOMER : c.TIMER
            }, e.prototype.getConstraintValue = function () {
                return this.CustomerData.constraintValue + this.SecondChanceCustomer
            }, e.prototype.addConstrainValue = function (t) {
                this.SecondChanceCustomer += t
            }, e.prototype.getSpecialConstraint = function () {
                var t = this.CustomerData.specialConstraint;
                return 1 == t ? s.NOBURNFOOD : 2 == t ? s.DONTUSEDUSTBIN : 3 == t ? s.DONTLOOSECUSTOMER : null
            }, e.prototype.getCustomerWaitingTime = function () {
                return this.CustomerData.customerWaitTime
            }, e.prototype.getFirstCustomerSpawnTime = function () {
                return n.getInstance().isShowHint ? 1 : this.CustomerData.firstCustomerSpawnTime
            }, e.prototype.getNextCustomerTime = function () {
                return this.CustomerData.nextCustomerTime
            }, e.prototype.getMultiplier = function () {
                return this.CustomerData.multiplier
            }, e.prototype.getTimeVariation = function () {
                return this.CustomerData.timeVariation
            }, e.prototype.getTotalOrders = function () {
                return this.CustomerData.orders.length
            }, e.prototype.getCustomerRecipeData = function (t) {
                var e = [],
                    n = this.CustomerData.orders;
                if (n[t])
                    for (var o = 0; o < n[t].orderItems.length; o++) {
                        var r = n[t].orderItems[o],
                            i = r.foodID + "" + r.reciepeIndex;
                        e.push(i)
                    }
                return e
            }, e.prototype.getIngridientList = function (t) {
                for (var e = [], n = this.UpgradeData.config[1].Recipe, o = 0; o < n.length; o++)
                    if (n[o][t])
                        for (var r = 1; r <= 5; r++) n[o][t][0]["Item" + r] && e.push(n[o][t][0]["Item" + r]);
                return e
            }, e.prototype.getIngridientCoin = function (t, e) {
                if (!this.UpgradeData.config[0][t][0].coin) return 0;
                var n = this.UpgradeData.config[0][t][0].coin[0];
                return n["Level" + e] ? n["Level" + e] : 0
            }, e.prototype.getAllRecipeList = function () {
                for (var t = this.UpgradeData.config[1].Recipe, e = [], n = 0; n < Object.keys(t).length; n++) e.push(Object.keys(t[n])[0]);
                return e
            }, e.prototype.getTotalNumberOfUpgrade = function (t) {
                for (var e = 0, n = 1; n <= 3; n++) this.UpgradeData.config[0][t][0].upgrade[0]["Level" + n] && e++;
                return e
            }, e.prototype.isUpgradeAvailable = function (t, e) {
                return !!this.UpgradeData.config[0][t][0].upgrade[0]["Level" + (e + 1)]
            }, e.prototype.getUpgradePrice = function (t, e) {
                return this.UpgradeData.config[0][t][0].upgrade[0]["Level" + e] || 0
            }, e.prototype.getIngridientName = function (t) {
                return this.UpgradeData.config[0].ItemName[0][t] || 0
            }, e.prototype.getIngridientOpneAt = function (t) {
                return this.UpgradeData.config[0][t][0].open || 0
            }, e.prototype.getCookTime = function (t, e) {
                return this.UpgradeData.config[0][t][0].cooktime && this.UpgradeData.config[0][t][0].cooktime[0]["Level" + e] || 0
            }, e.prototype.getNumberOfServing = function (t, e) {
                return this.UpgradeData.config[0][t][0].noofserving && this.UpgradeData.config[0][t][0].noofserving[0]["Level" + e] || 0
            }, e.prototype.getBurnTime = function (t, e) {
                return this.UpgradeData.config[0][t][0].burntime ? this.UpgradeData.config[0][t][0].burntime[0]["Level" + e] || 0 : 10
            }, e.prototype.getCookingTime = function () {
                return this.SelectedLevel > 5 ? 3 : this.SelectedLevel >= 3 ? 4 : 5
            }, e.prototype.getBurningTime = function () {
                return 10
            }, e.prototype.getBoosterUnlockLevel = function (t) {
                return this.UpgradeData.config[3].BoosterUnlock[0][t]
            }, e.prototype.setTotalEarnCoinValue = function (t) {
                this.TotalEarnCoin += t
            }, e.prototype.getTotalEarnCoinValue = function () {
                return this.TotalEarnCoin
            }, e.prototype.setCustomerIsReadyforRun = function (t) {
                this.isReadyForRun = t
            }, e.prototype.getCustomerReadyForRun = function () {
                return this.isReadyForRun
            }, e.prototype.addCustomerEntry = function () {
                this.CustomerEntryCount++
            }, e.prototype.addCustomerExit = function () {
                this.CustomerExitCount++
            }, e.prototype.getExitCustomerCount = function () {
                return this.CustomerExitCount
            }, e.prototype.getEntryCustomerCount = function () {
                return this.CustomerEntryCount
            }, e.instance = null, n = i([l], e)
        }(cc.Component);
        n.default = p, cc._RF.pop()
    }, {}],
    LevelScene: [function (t, e, n) {
        "use strict";
        cc._RF.push(e, "2ecc81b91VFWYaXblAZRAxS", "LevelScene");
        var o, r = this && this.__extends || (o = function (t, e) {
            return (o = Object.setPrototypeOf || {
                __proto__: []
            }
                instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                })(t, e)
        }, function (t, e) {
            function n() {
                this.constructor = t
            }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        }),
            i = this && this.__decorate || function (t, e, n, o) {
                var r, i = arguments.length,
                    a = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o);
                else
                    for (var c = t.length - 1; c >= 0; c--)(r = t[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(e, n, a) : r(e, n)) || a);
                return i > 3 && a && Object.defineProperty(e, n, a), a
            },
            a = this && this.__awaiter || function (t, e, n, o) {
                return new (n || (n = Promise))(function (r, i) {
                    function a(t) {
                        try {
                            s(o.next(t))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function c(t) {
                        try {
                            s(o.throw(t))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function s(t) {
                        var e;
                        t.done ? r(t.value) : (e = t.value, e instanceof n ? e : new n(function (t) {
                            t(e)
                        })).then(a, c)
                    }
                    s((o = o.apply(t, e || [])).next())
                })
            },
            c = this && this.__generator || function (t, e) {
                var n, o, r, i, a = {
                    label: 0,
                    sent: function () {
                        if (1 & r[0]) throw r[1];
                        return r[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: c(0),
                    throw: c(1),
                    return: c(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function () {
                    return this
                }), i;

                function c(t) {
                    return function (e) {
                        return s([t, e])
                    }
                }

                function s(i) {
                    if (n) throw new TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (n = 1, o && (r = 2 & i[0] ? o.return : i[0] ? o.throw || ((r = o.return) && r.call(o), 0) : o.next) && !(r = r.call(o, i[1])).done) return r;
                        switch (o = 0, r && (i = [2 & i[0], r.value]), i[0]) {
                            case 0:
                            case 1:
                                r = i;
                                break;
                            case 4:
                                return a.label++, {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, o = i[1], i = [0];
                                continue;
                            case 7:
                                i = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(r = (r = a.trys).length > 0 && r[r.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === i[0] && (!r || i[1] > r[0] && i[1] < r[3])) {
                                    a.label = i[1];
                                    break
                                }
                                if (6 === i[0] && a.label < r[1]) {
                                    a.label = r[1], r = i;
                                    break
                                }
                                if (r && a.label < r[2]) {
                                    a.label = r[2], a.ops.push(i);
                                    break
                                }
                                r[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        i = e.call(t, a)
                    } catch (c) {
                        i = [6, c], o = 0
                    } finally {
                            n = r = 0
                        }
                    if (5 & i[0]) throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var s = t("./HelperTools"),
            u = t("./LevelData"),
            l = t("./LevelDataHelper"),
            p = t("./Promotion/AdManager"),
            f = t("./Promotion/AudioManager"),
            d = t("./SessionStorageHelper"),
            h = cc._decorator,
            g = h.ccclass,
            v = h.property,
            m = function (t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.mainThumb = null, e
                }
                var n;
                return r(e, t), n = e, e.prototype.onLoad = function () {
                    n.self = this
                }, e.prototype.start = function () {
                    cc.director.preloadScene("Playarea"), f.default.getInstance().stopAll(), this.hideAllThumb(), this.updateUI(), this.updateCurrLevel(), u.default.getInstance().isShowHint = !1
                }, e.prototype.hideAllThumb = function () {
                    this.mainThumb.children.forEach(function (t) {
                        t.children.forEach(function (t) {
                            t.active = !1
                        })
                    })
                }, e.prototype.updateCurrLevel = function () {
                    var t = d.default.getInstace().getItem("hc_currLevel"),
                        e = this.mainThumb.getChildByName(t);
                    e && (e.getChildByName("LvlThumb1").active = !0, e.getChildByName("LvlThumbRays1").active = !0, e.getChildByName("LvlThumb_Effect1").active = !0, e.getChildByName("lvlno").active = !0, e.getComponent(cc.Animation).play())
                }, e.prototype.updateUI = function () {
                    var t = 1;
                    this.mainThumb.children.forEach(function (e) {
                        e.getComponentInChildren(cc.Label).string = t.toString();
                        var n = d.default.getInstace().getItem("hc_level" + t + "locked"),
                            o = d.default.getInstace().getItem("hc_level" + t + "completed");
                        "true" == n ? e.getChildByName("LvlThumb2").active = !0 : "false" == n && "true" == o && (e.getChildByName("LvlThumb1_1").active = !0, e.getChildByName("lvlno").active = !0), t++
                    })
                }, e.prototype.selectLevel = function (t) {
                    return a(this, void 0, void 0, function () {
                        var e, n;
                        return c(this, function (o) {
                            switch (o.label) {
                                case 0:
                                    return e = parseInt(d.default.getInstace().getItem("hc_currLevel")), u.default.getInstance().SelectedLevel = e, f.default.getInstance().play("UI TAP_COMMON"), u.default.getInstance().SelectedSubLevel = 1, parseInt(t.target.name) <= e ? (cc.director.preloadScene("Playarea"), p.default.getInstance().requestAds(), n = "JsonData/M-" + u.default.getInstance().SelectedLevel + "-" + u.default.getInstance().SelectedSubLevel, l.default.getInstance().LoadJson(n), [4, s.Delay(.3)]) : [3, 2];
                                case 1:
                                    o.sent(), cc.director.loadScene("Playarea"), o.label = 2;
                                case 2:
                                    return [2]
                            }
                        })
                    })
                }, e.prototype.TouchBegan = function (t) {
                    var e = t.getLocation();
                    n.self.node.convertToNodeSpaceAR(e)
                }, e.prototype.TouchMove = function (t) {
                    var e = t.getLocation();
                    n.self.node.convertToNodeSpaceAR(e)
                }, e.prototype.TouchEnded = function (t) {
                    var e = t.getLocation();
                    n.self.node.convertToNodeSpaceAR(e)
                }, e.self = null, i([v(cc.Node)], e.prototype, "mainThumb", void 0), n = i([g], e)
            }(cc.Component);
        n.default = m, cc._RF.pop()
    }, {
        "./HelperTools": "HelperTools",
        "./LevelData": "LevelData",
        "./LevelDataHelper": "LevelDataHelper",
        "./Promotion/AdManager": "AdManager",
        "./Promotion/AudioManager": "AudioManager",
        "./SessionStorageHelper": "SessionStorageHelper"
    }],
    MainScene: [function (t, e, n) {
        "use strict";
        cc._RF.push(e, "42a69AS31NCS6r28m977FcD", "MainScene");
        var o, r = this && this.__extends || (o = function (t, e) {
            return (o = Object.setPrototypeOf || {
                __proto__: []
            }
                instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                })(t, e)
        }, function (t, e) {
            function n() {
                this.constructor = t
            }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        }),
            i = this && this.__decorate || function (t, e, n, o) {
                var r, i = arguments.length,
                    a = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o);
                else
                    for (var c = t.length - 1; c >= 0; c--)(r = t[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(e, n, a) : r(e, n)) || a);
                return i > 3 && a && Object.defineProperty(e, n, a), a
            },
            a = this && this.__awaiter || function (t, e, n, o) {
                return new (n || (n = Promise))(function (r, i) {
                    function a(t) {
                        try {
                            s(o.next(t))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function c(t) {
                        try {
                            s(o.throw(t))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function s(t) {
                        var e;
                        t.done ? r(t.value) : (e = t.value, e instanceof n ? e : new n(function (t) {
                            t(e)
                        })).then(a, c)
                    }
                    s((o = o.apply(t, e || [])).next())
                })
            },
            c = this && this.__generator || function (t, e) {
                var n, o, r, i, a = {
                    label: 0,
                    sent: function () {
                        if (1 & r[0]) throw r[1];
                        return r[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: c(0),
                    throw: c(1),
                    return: c(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function () {
                    return this
                }), i;

                function c(t) {
                    return function (e) {
                        return s([t, e])
                    }
                }

                function s(i) {
                    if (n) throw new TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (n = 1, o && (r = 2 & i[0] ? o.return : i[0] ? o.throw || ((r = o.return) && r.call(o), 0) : o.next) && !(r = r.call(o, i[1])).done) return r;
                        switch (o = 0, r && (i = [2 & i[0], r.value]), i[0]) {
                            case 0:
                            case 1:
                                r = i;
                                break;
                            case 4:
                                return a.label++, {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, o = i[1], i = [0];
                                continue;
                            case 7:
                                i = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(r = (r = a.trys).length > 0 && r[r.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === i[0] && (!r || i[1] > r[0] && i[1] < r[3])) {
                                    a.label = i[1];
                                    break
                                }
                                if (6 === i[0] && a.label < r[1]) {
                                    a.label = r[1], r = i;
                                    break
                                }
                                if (r && a.label < r[2]) {
                                    a.label = r[2], a.ops.push(i);
                                    break
                                }
                                r[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        i = e.call(t, a)
                    } catch (c) {
                        i = [6, c], o = 0
                    } finally {
                            n = r = 0
                        }
                    if (5 & i[0]) throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var s = t("./HelperTools"),
            u = t("./Promotion/AdManager"),
            l = t("./Promotion/AudioManager"),
            p = t("./SessionStorageHelper"),
            f = cc._decorator,
            d = f.ccclass,
            h = (f.property, function (t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                var n;
                return r(e, t), n = e, e.prototype.onLoad = function () {
                    n.self = this, cc.director.preloadScene("LevelScene"), l.default.getInstance().playMusic("PLAY AREA MUSIC", !0), cc.game.on("SoundLoaded", function () {
                        l.default.getInstance().playMusic("PLAY AREA MUSIC", !0), console.log("Play")
                    })
                }, e.prototype.start = function () {
                    this.InitData(), 0 == cc.audioEngine.getMusicVolume() ? (cc.find("Canvas/SoundOn").active = !1, cc.find("Canvas/SoundOff").active = !0) : (cc.find("Canvas/SoundOn").active = !0, cc.find("Canvas/SoundOff").active = !1);
                    var t = cc.find("Canvas/Background/Main Screen New");
                    cc.tween(t).delay(3).call(function () {
                        t.getComponent(sp.Skeleton).setAnimation(0, "Idle", !0)
                    }).start()
                }, e.prototype.InitData = function () {
                    p.default.getInstace().setItem("hc_currLevel", "1");
                    for (var t = 1; t < 11; t++) p.default.getInstace().setItem("hc_level" + t + "locked", "true"), p.default.getInstace().setItem("hc_level" + t + "completed", "false");
                    p.default.getInstace().setItem("hc_level1locked", "false")
                }, e.prototype.getRandomInt = function (t, e) {
                    return t = Math.ceil(t), e = Math.floor(e) + 1, Math.floor(Math.random() * (e - t)) + t
                }, e.prototype.playBTNClicked = function (t) {
                    return a(this, void 0, void 0, function () {
                        return c(this, function (e) {
                            switch (e.label) {
                                case 0:
                                    return t.target.getComponent(cc.Button).interactable = !1, l.default.getInstance().play("UI TAP_COMMON"), u.default.getInstance().requestAds(), [4, s.Delay(.3)];
                                case 1:
                                    return e.sent(), cc.director.loadScene("LevelScene"), [2]
                            }
                        })
                    })
                }, e.prototype.onSoundOffBtnClick = function () {
                    l.default.getInstance().play("UI TAP_COMMON"), cc.find("Canvas/SoundOn").active = !0, cc.find("Canvas/SoundOff").active = !1, cc.audioEngine.setMusicVolume(1), cc.audioEngine.setEffectsVolume(1)
                }, e.prototype.onSoundOnBtnClick = function () {
                    l.default.getInstance().play("UI TAP_COMMON"), cc.find("Canvas/SoundOn").active = !1, cc.find("Canvas/SoundOff").active = !0, cc.audioEngine.setMusicVolume(0), cc.audioEngine.setEffectsVolume(0)
                }, e.self = null, n = i([d], e)
            }(cc.Component));
        n.default = h, cc._RF.pop()
    }, {
        "./HelperTools": "HelperTools",
        "./Promotion/AdManager": "AdManager",
        "./Promotion/AudioManager": "AudioManager",
        "./SessionStorageHelper": "SessionStorageHelper"
    }],
    Playarea: [function (t, e, n) {
        "use strict";
        cc._RF.push(e, "2ecd2TMYk9NlqNc2ZJ8AcEc", "Playarea");
        var o, r = this && this.__extends || (o = function (t, e) {
            return (o = Object.setPrototypeOf || {
                __proto__: []
            }
                instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                })(t, e)
        }, function (t, e) {
            function n() {
                this.constructor = t
            }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        }),
            i = this && this.__decorate || function (t, e, n, o) {
                var r, i = arguments.length,
                    a = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o);
                else
                    for (var c = t.length - 1; c >= 0; c--)(r = t[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(e, n, a) : r(e, n)) || a);
                return i > 3 && a && Object.defineProperty(e, n, a), a
            },
            a = this && this.__awaiter || function (t, e, n, o) {
                return new (n || (n = Promise))(function (r, i) {
                    function a(t) {
                        try {
                            s(o.next(t))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function c(t) {
                        try {
                            s(o.throw(t))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function s(t) {
                        var e;
                        t.done ? r(t.value) : (e = t.value, e instanceof n ? e : new n(function (t) {
                            t(e)
                        })).then(a, c)
                    }
                    s((o = o.apply(t, e || [])).next())
                })
            },
            c = this && this.__generator || function (t, e) {
                var n, o, r, i, a = {
                    label: 0,
                    sent: function () {
                        if (1 & r[0]) throw r[1];
                        return r[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: c(0),
                    throw: c(1),
                    return: c(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function () {
                    return this
                }), i;

                function c(t) {
                    return function (e) {
                        return s([t, e])
                    }
                }

                function s(i) {
                    if (n) throw new TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (n = 1, o && (r = 2 & i[0] ? o.return : i[0] ? o.throw || ((r = o.return) && r.call(o), 0) : o.next) && !(r = r.call(o, i[1])).done) return r;
                        switch (o = 0, r && (i = [2 & i[0], r.value]), i[0]) {
                            case 0:
                            case 1:
                                r = i;
                                break;
                            case 4:
                                return a.label++, {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, o = i[1], i = [0];
                                continue;
                            case 7:
                                i = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(r = (r = a.trys).length > 0 && r[r.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === i[0] && (!r || i[1] > r[0] && i[1] < r[3])) {
                                    a.label = i[1];
                                    break
                                }
                                if (6 === i[0] && a.label < r[1]) {
                                    a.label = r[1], r = i;
                                    break
                                }
                                if (r && a.label < r[2]) {
                                    a.label = r[2], a.ops.push(i);
                                    break
                                }
                                r[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        i = e.call(t, a)
                    } catch (c) {
                        i = [6, c], o = 0
                    } finally {
                            n = r = 0
                        }
                    if (5 & i[0]) throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.TruckEventMacro = void 0;
        var s, u = t("./CharacterCtrl"),
            l = t("./FoodProgress"),
            p = t("./HelperTools"),
            f = t("./Hint"),
            d = t("./Ingridient1"),
            h = t("./LevelData"),
            g = t("./LevelDataHelper"),
            v = t("./Promotion/AdManager"),
            m = t("./Promotion/AudioManager"),
            y = t("./SessionStorageHelper"),
            C = t("./ToolTap"),
            P = cc._decorator,
            I = P.ccclass,
            S = (P.property, cc.Enum({
                Bread: "10",
                BreadPanner: "11",
                BreadPannerSpinach: "12",
                BreadTomato: "13",
                BreadTomatoOlive: "14",
                Juice: "00"
            }));
        (function (t) {
            t.Entry = "Truck1.EntryCustomer", t.Exit = "Truck1.ExitCustomer", t.Start = "Truck1.StartCustomer", t.ServedSuccess = "Truck1.ServedSuccess"
        })(s = n.TruckEventMacro || (n.TruckEventMacro = {}));
        var _ = function (t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.Pan = [], e.Plate = [], e.CoffeeCup = [], e.CoffeeMachine = null, e.WhiteCream = null, e.GreenCream = null, e.Boo = null, e.Spider = null, e.Hint = null, e.HintFlow = [], e
            }
            return r(e, t), e.prototype.onLoad = function () {
                return a(this, void 0, void 0, function () {
                    var t, e = this;
                    return c(this, function (n) {
                        switch (n.label) {
                            case 0:
                                return this.cacheProperty(), this.registerEvents(), g.default.getInstance().addResourceData(cc.find("Canvas/Food")), t = "JsonData/M-" + h.default.getInstance().SelectedLevel + "-" + h.default.getInstance().SelectedSubLevel, [4, g.default.getInstance().LoadJson(t)];
                            case 1:
                                return n.sent(), h.default.getInstance().updateCustomerData(g.default.getInstance().getJsonData(t)), this.UpdateCustomerCount(), this.Hint = cc.find("Canvas/Hint").getComponent(f.default), 1 != h.default.getInstance().SelectedLevel || "true" == y.default.getInstace().getItem("isShowStartPopup") ? [3, 2] : (y.default.getInstace().setItem("isShowStartPopup", "true"), this.Hint.ShowLevelStart(), this.HintFlow.push({
                                    HintPosition: cc.v3(-223, -142, 0),
                                    HintID: h.FOOD_ID.Items["Bread-03"],
                                    Text: "Customer wants a pan cake. Let's get cooking!"
                                }), this.HintFlow.push({
                                    HintPosition: cc.v3(-273, -44, 0),
                                    HintID: h.FOOD_ID.Items["Pan-04"],
                                    Text: null
                                }), this.HintFlow.push({
                                    HintPosition: cc.v3(-17, -61, 0),
                                    HintID: h.FOOD_ID.Items["Plate-05"],
                                    Text: null
                                }), this.HintFlow.push({
                                    HintPosition: cc.v3(238, -43, 0),
                                    HintID: h.FOOD_ID.Items["JuiceGlass-01"],
                                    Text: null
                                }), this.Hint.setHintFlow(this.HintFlow), cc.game.once(f.HintEventMacro.StartHintHide, function () {
                                    e.AutoStartRecipe(), cc.game.emit(u.CharacterCtrlEventMacro.Start), e.Hint.ShowHint()
                                }, this), [3, 4]);
                            case 2:
                                return [4, p.Delay(1)];
                            case 3:
                                n.sent(), cc.game.emit(u.CharacterCtrlEventMacro.Start), this.AutoStartRecipe(), n.label = 4;
                            case 4:
                                return [2]
                        }
                    })
                })
            }, e.prototype.start = function () {
                return a(this, void 0, void 0, function () {
                    return c(this, function () {
                        return console.log(y.default.getInstace().getItem("adbtn1")), console.log(y.default.getInstace().getItem("adbtn2")), "true" === y.default.getInstace().getItem("adbtn1") && cc.find("Canvas/Front/Spider2_1/Intersect/adbtn1").removeFromParent(), "true" === y.default.getInstace().getItem("adbtn2") && cc.find("Canvas/Front/Boo_1/Boo1/adbtn2").removeFromParent(), [2]
                    })
                })
            }, e.prototype.ItemAction = function (t) {
                var e = this,
                    n = t.getComponent(C.default).FoodIndex;
                if (n == h.FOOD_ID.Items["Bread-03"]) {
                    for (var o = 0; o < this.Pan.length; o++)
                        if (this.Pan[o].active && this.Pan[o].getComponent(C.default).FoodPrgressObj.getFoodStatus() == l.FoodProgressStatus.IDLE) {
                            this.Pan[o].getComponent(C.default).StartProgress(), m.default.getInstance().play("TOPPING ADD_COMMON"), m.default.getInstance().play("IMPACK FRY_TRUCK 2");
                            var r = this.Pan[o].getComponent(C.default).FoodPrgressObj.cooktime;
                            this.Pan[o].getComponent(cc.Animation).play("PanItem_Ready").speed = 5 / r, h.default.getInstance().isShowHint && (h.default.getInstance().HintID = -1, this.Hint.HideHint());
                            break
                        }
                } else if (n == h.FOOD_ID.Items["Pan-04"]) {
                    if (t.getComponent(C.default).FoodPrgressObj.getFoodStatus() == l.FoodProgressStatus.READY) {
                        var i = !0,
                            a = function (n) {
                                c.Plate[n].children.forEach(function (o) {
                                    e.Plate[n].active && o.getComponent(d.default).FoodId == d.INGRIDIENT.Items["Bread-03"] && 0 == o.active && (o.active = !0, o.getComponent(cc.Animation).play(), i = !1, m.default.getInstance().stop("IMPACK FRY_TRUCK 2"), m.default.getInstance().play("TOPPING ADD_COMMON"), t.getComponent(C.default).setStatusIdle(), e.Plate[n].getComponent(C.default).setRecipeID(S.Bread), t.getComponent(cc.Animation).stop(), cc.find("T1_PCPan0/Raw", t).active = !1, cc.find("T1_PCPan0/fryingSmoke", t).active = !1, h.default.getInstance().isShowHint && e.Hint.ShowHint())
                                })
                            },
                            c = this;
                        for (o = 0; o < this.Plate.length && i; o++) a(o)
                    }
                } else if (n == h.FOOD_ID.Items["WhiteCream-06"] || n == h.FOOD_ID.Items["Boo-08"] || n == h.FOOD_ID.Items["GreenCream-07"] || n == h.FOOD_ID.Items["Spider-09"]) {
                    var s = "",
                        p = "",
                        f = -1;
                    if (n == h.FOOD_ID.Items["WhiteCream-06"]) s = S.Bread, f = d.INGRIDIENT.Items["Panner-06"], p = S.BreadPanner;
                    else if (n == h.FOOD_ID.Items["Spider-09"]) {
                        if (s = S.BreadPanner, f = d.INGRIDIENT.Items["Spinach-08"], p = S.BreadPannerSpinach, cc.find("Canvas/Front/Spider2_1/Intersect/adbtn1")) return void v.default.getInstance().requestRewardAds(cc.find("Canvas/Front/Spider2_1/Intersect/adbtn1"))
                    } else if (n == h.FOOD_ID.Items["GreenCream-07"]) s = S.Bread, f = d.INGRIDIENT.Items["Tomato-07"], p = S.BreadTomato;
                    else if (n == h.FOOD_ID.Items["Boo-08"] && (s = S.BreadTomato, f = d.INGRIDIENT.Items["Olive-09"], p = S.BreadTomatoOlive, cc.find("Canvas/Front/Boo_1/Boo1/adbtn2"))) return void v.default.getInstance().requestRewardAds(cc.find("Canvas/Front/Boo_1/Boo1/adbtn2"));
                    for (o = 0; o < this.Plate.length; o++) {
                        var g = this.getItem(this.Plate[o], f);
                        if (g && this.Plate[o].getComponent(C.default).getRecipeID() == s) {
                            g.active = !0, this.Plate[o].getComponent(C.default).setRecipeID(p), m.default.getInstance().play("TOPPING ADD_COMMON"), h.default.getInstance().isShowHint && (h.default.getInstance().HintID = -1, this.Hint.HideHint());
                            break
                        }
                    }
                } else n != h.FOOD_ID.Items["JuiceGlass-01"] && n != h.FOOD_ID.Items["Plate-05"] || (cc.game.emit(u.CharacterCtrlEventMacro.Served, t.getComponent(C.default).getRecipeID(), t), m.default.getInstance().play("TOPPING ADD_COMMON"), h.default.getInstance().isShowHint && (h.default.getInstance().HintID = -1, this.Hint.ShowHint()))
            }, e.prototype.getItem = function (t, e) {
                for (var n = 0; n < t.childrenCount; n++) {
                    var o = t.children[n],
                        r = o.getComponent(d.default);
                    if (r && r.getFoodId() == e) return o
                }
                return null
            }, e.prototype.FoodInDustbin = function (t) {
                if (t && t.getComponent(C.default)) switch (t.getComponent(C.default).FoodIndex) {
                    case h.FOOD_ID.Items["Pan-04"]:
                        t.getComponent(C.default).FoodPrgressObj.getFoodStatus() == l.FoodProgressStatus.BURNED && (t.getComponent(C.default).setStatusIdle(), t.getComponent(C.default).setRecipeID(""), t.getComponent(cc.Animation).stop(), m.default.getInstance().play("DUSTBIN THROW_COMMON"), cc.find("T1_PCPan0/Raw", t).active = !1, h.default.getInstance().isShowHint && (h.default.getInstance().HintID = -1, this.Hint.HideHint(), h.default.getInstance().isShowHint = !1));
                        break;
                    case h.FOOD_ID.Items["Plate-05"]:
                        "" != t.getComponent(C.default).getRecipeID() && t.getComponent(C.default).getRecipeID() != S.Bread && (m.default.getInstance().play("DUSTBIN THROW_COMMON"), t.children.forEach(function (t) {
                            t.getComponent(d.default).FoodId != d.INGRIDIENT.Items["Plate-05"] && (t.active = !1)
                        }), t.getComponent(C.default).setStatusIdle())
                }
            }, e.prototype.ItemUpdate = function (t, e, n, o) {
                switch (o) {
                    case h.FOOD_ID.Items["JuiceMachine-02"]:
                        if (e == l.FoodProgressStatus.READY) {
                            this.CoffeeMachine.getComponent(cc.Animation).stop();
                            for (var r = 0; r < this.CoffeeCup.length; r++) this.CoffeeCup[r].active && 0 == this.CoffeeCup[r].getChildByName("T1_JuicePlate3").active && (this.CoffeeCup[r].getChildByName("T1_JuicePlate3").active = !0, this.CoffeeCup[r].getComponent(C.default).setRecipeID(S.Juice), m.default.getInstance().stop("MIXER RUN_TRUCK 7"), this.CoffeeMachine.getComponent(C.default).setStatusIdle())
                        }
                        break;
                    case h.FOOD_ID.Items["Pan-04"]:
                        if (e == l.FoodProgressStatus.READY)
                            if (h.default.getInstance().isShowHint) this.Hint.ShowHint();
                            else {
                                var i = n.getComponent(C.default).FoodPrgressObj.burntime;
                                n.getComponent(cc.Animation).play("PanItem_Burn").speed = 5 / i
                            }
                        else if (e == l.FoodProgressStatus.BURNED && null == y.default.getInstace().getItem("BurnHintShow")) {
                            y.default.getInstace().setItem("BurnHintShow", "true"), this.HintFlow.splice(0, this.HintFlow.length);
                            var a = cc.v3(n.position.x, n.position.y + 20, 0);
                            this.HintFlow.push({
                                HintPosition: a,
                                HintID: h.FOOD_ID.Items["Pan-04"],
                                Text: "Food Burn! \n Double Tap On Food for Move in Dustbin!"
                            }), this.Hint.setHintFlow(this.HintFlow), this.Hint.ShowHint()
                        }
                }
            }, e.prototype.ServedSuccessCallback = function (t) {
                if (t && t.getComponent(C.default)) switch (t.getComponent(C.default).setStatusIdle(), t.getComponent(C.default).FoodIndex) {
                    case h.FOOD_ID.Items["JuiceGlass-01"]:
                        t.children[0].active = !1, this.AutoStartRecipe();
                        break;
                    case h.FOOD_ID.Items["Plate-05"]:
                        t.children.forEach(function (t) {
                            t.getComponent(d.default).FoodId != d.INGRIDIENT.Items["Plate-05"] && (t.active = !1)
                        })
                }
            }, e.prototype.AutoStartRecipe = function () {
                this.CoffeeMachine.getComponent(C.default).FoodPrgressObj.getFoodStatus() == l.FoodProgressStatus.IDLE && (this.CoffeeMachine.getComponent(C.default).StartProgress(), this.CoffeeMachine.getComponent(cc.Animation).play(), m.default.getInstance().play("MIXER RUN_TRUCK 7", !0))
            }, e.prototype.registerEvents = function () {
                cc.game.on(C.ToolTapEventMacro.Dustbin, this.FoodInDustbin, this), cc.game.on(C.ToolTapEventMacro.Tap, this.ItemAction, this), cc.game.on(l.FoodProgressStatusEvent.Update, this.ItemUpdate, this), cc.game.on(s.ServedSuccess, this.ServedSuccessCallback, this), cc.game.on("ShowPromotion", this.ShowPromotion, this), cc.game.on("UpdateCustomerCount", this.UpdateCustomerCount, this)
            }, e.prototype.ShowPromotion = function () {
                cc.find("logo", this.node).active = !1, cc.find("more", this.node).active = !1, cc.find("promotion", this.node).position = cc.Vec3.ZERO, 255 != cc.find("Canvas/promotion").opacity && (cc.find("promotion", this.node).active = !1);
                for (var t = 0, e = this.Pan; t < e.length; t++) {
                    var n = e[t];
                    n.active && n.getComponent(C.default) && n.getComponent(C.default).FoodPrgressObj && (n.getComponent(C.default).FoodPrgressObj.hideProgress(), n.getComponent(C.default).setStatusIdle())
                }
            }, e.prototype.UpdateCustomerCount = function () {
                cc.find("Canvas/UITopPanelBG2/Text").getComponent(cc.Label).string = (h.default.getInstance().getConstraintValue() - h.default.getInstance().getExitCustomerCount()).toString()
            }, e.prototype.cacheProperty = function () {
                this.Pan[0] = cc.find("Canvas/Front/Pan/1"), this.Pan[1] = cc.find("Canvas/Front/Pan/2"), this.Pan[2] = cc.find("Canvas/Front/Pan/3"), this.Pan[3] = cc.find("Canvas/Front/Pan/4"), this.Plate[0] = cc.find("Canvas/Front/ServingPlate/2"), this.Plate[1] = cc.find("Canvas/Front/ServingPlate/1"), this.Plate[2] = cc.find("Canvas/Front/ServingPlate/3"), this.Plate[3] = cc.find("Canvas/Front/ServingPlate/4"), this.CoffeeCup[0] = cc.find("Canvas/Front/JuiceGlass/1"), this.CoffeeCup[1] = cc.find("Canvas/Front/JuiceGlass/2"), this.CoffeeCup[2] = cc.find("Canvas/Front/JuiceGlass/3"), this.WhiteCream = cc.find("Front/T1_S_PCWhiteCream", this.node), this.GreenCream = cc.find("Front/T1_S_PCGreenCream", this.node), this.Boo = cc.find("Front/Boo_1", this.node), this.Spider = cc.find("Front/Spider2_1", this.node), this.WhiteCream.active = !1, this.GreenCream.active = !1, this.Boo.active = !1, this.Spider.active = !1, this.CoffeeMachine = cc.find("Canvas/Front/T1_JuiceMachine0");
                for (var t = 0, e = this.Pan; t < e.length; t++) e[t].active = !1;
                for (var n = 0, o = this.Plate; n < o.length; n++) o[n].active = !1;
                for (var r = 0, i = this.CoffeeCup; r < i.length; r++) i[r].active = !1;
                switch (h.default.getInstance().SelectedLevel) {
                    case 1:
                        this.Pan[0].active = !0, this.Plate[0].active = !0, this.CoffeeCup[0].active = !0;
                        break;
                    case 2:
                        this.Pan[0].active = !0, this.Pan[1].active = !0, this.Plate[0].active = !0, this.Plate[1].active = !0, this.CoffeeCup[0].active = !0;
                        break;
                    case 3:
                        this.Pan[0].active = !0, this.Pan[1].active = !0, this.Plate[0].active = !0, this.Plate[1].active = !0, this.CoffeeCup[0].active = !0, this.WhiteCream.active = !0;
                        break;
                    case 4:
                        this.Pan[0].active = !0, this.Pan[1].active = !0, this.Plate[0].active = !0, this.Plate[1].active = !0, this.Plate[2].active = !0, this.Plate[3].active = !0, this.CoffeeCup[0].active = !0, this.CoffeeCup[1].active = !0, this.WhiteCream.active = !0;
                        break;
                    case 5:
                    case 6:
                        this.Pan[0].active = !0, this.Pan[1].active = !0, this.Plate[0].active = !0, this.Plate[1].active = !0, this.Plate[2].active = !0, this.Plate[3].active = !0, this.CoffeeCup[0].active = !0, this.CoffeeCup[1].active = !0, this.WhiteCream.active = !0, this.Spider.active = !0;
                        break;
                    case 7:
                        this.Pan[0].active = !0, this.Pan[1].active = !0, this.Plate[0].active = !0, this.Plate[1].active = !0, this.Plate[2].active = !0, this.Plate[3].active = !0, this.CoffeeCup[0].active = !0, this.CoffeeCup[1].active = !0, this.CoffeeCup[2].active = !0, this.WhiteCream.active = !0, this.GreenCream.active = !0, this.Spider.active = !0;
                        break;
                    case 8:
                        this.Pan[0].active = !0, this.Pan[1].active = !0, this.Plate[0].active = !0, this.Plate[1].active = !0, this.Plate[2].active = !0, this.Plate[3].active = !0, this.CoffeeCup[0].active = !0, this.CoffeeCup[1].active = !0, this.CoffeeCup[2].active = !0, this.WhiteCream.active = !0, this.GreenCream.active = !0, this.Spider.active = !0, this.Boo.active = !0;
                        break;
                    case 9:
                    case 10:
                        this.Pan[0].active = !0, this.Pan[1].active = !0, this.Pan[2].active = !0, this.Pan[3].active = !0, this.Plate[0].active = !0, this.Plate[1].active = !0, this.Plate[2].active = !0, this.Plate[3].active = !0, this.CoffeeCup[0].active = !0, this.CoffeeCup[1].active = !0, this.CoffeeCup[2].active = !0, this.WhiteCream.active = !0, this.GreenCream.active = !0, this.Spider.active = !0, this.Boo.active = !0
                }
            }, i([I], e)
        }(cc.Component);
        n.default = _, cc._RF.pop()
    }, {
        "./CharacterCtrl": "CharacterCtrl",
        "./FoodProgress": "FoodProgress",
        "./HelperTools": "HelperTools",
        "./Hint": "Hint",
        "./Ingridient1": "Ingridient1",
        "./LevelData": "LevelData",
        "./LevelDataHelper": "LevelDataHelper",
        "./Promotion/AdManager": "AdManager",
        "./Promotion/AudioManager": "AudioManager",
        "./SessionStorageHelper": "SessionStorageHelper",
        "./ToolTap": "ToolTap"
    }],
    Popup: [function (t, e, n) {
        "use strict";
        cc._RF.push(e, "b6d9eOXdMVPAJOZfJ3dAyWc", "Popup");
        var o, r = this && this.__extends || (o = function (t, e) {
            return (o = Object.setPrototypeOf || {
                __proto__: []
            }
                instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                })(t, e)
        }, function (t, e) {
            function n() {
                this.constructor = t
            }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        }),
            i = this && this.__decorate || function (t, e, n, o) {
                var r, i = arguments.length,
                    a = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o);
                else
                    for (var c = t.length - 1; c >= 0; c--)(r = t[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(e, n, a) : r(e, n)) || a);
                return i > 3 && a && Object.defineProperty(e, n, a), a
            },
            a = this && this.__awaiter || function (t, e, n, o) {
                return new (n || (n = Promise))(function (r, i) {
                    function a(t) {
                        try {
                            s(o.next(t))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function c(t) {
                        try {
                            s(o.throw(t))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function s(t) {
                        var e;
                        t.done ? r(t.value) : (e = t.value, e instanceof n ? e : new n(function (t) {
                            t(e)
                        })).then(a, c)
                    }
                    s((o = o.apply(t, e || [])).next())
                })
            },
            c = this && this.__generator || function (t, e) {
                var n, o, r, i, a = {
                    label: 0,
                    sent: function () {
                        if (1 & r[0]) throw r[1];
                        return r[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: c(0),
                    throw: c(1),
                    return: c(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function () {
                    return this
                }), i;

                function c(t) {
                    return function (e) {
                        return s([t, e])
                    }
                }

                function s(i) {
                    if (n) throw new TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (n = 1, o && (r = 2 & i[0] ? o.return : i[0] ? o.throw || ((r = o.return) && r.call(o), 0) : o.next) && !(r = r.call(o, i[1])).done) return r;
                        switch (o = 0, r && (i = [2 & i[0], r.value]), i[0]) {
                            case 0:
                            case 1:
                                r = i;
                                break;
                            case 4:
                                return a.label++, {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, o = i[1], i = [0];
                                continue;
                            case 7:
                                i = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(r = (r = a.trys).length > 0 && r[r.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === i[0] && (!r || i[1] > r[0] && i[1] < r[3])) {
                                    a.label = i[1];
                                    break
                                }
                                if (6 === i[0] && a.label < r[1]) {
                                    a.label = r[1], r = i;
                                    break
                                }
                                if (r && a.label < r[2]) {
                                    a.label = r[2], a.ops.push(i);
                                    break
                                }
                                r[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        i = e.call(t, a)
                    } catch (c) {
                        i = [6, c], o = 0
                    } finally {
                            n = r = 0
                        }
                    if (5 & i[0]) throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var s = t("./HelperTools"),
            u = t("./Promotion/AdManager"),
            l = t("./Promotion/AudioManager"),
            p = t("./SessionStorageHelper"),
            f = cc._decorator,
            d = f.ccclass,
            h = f.property,
            g = function (t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.nextBtn = null, e.replayBtn = null, e.safeArea = null, e
                }
                return r(e, t), e.prototype.start = function () {
                    this.safeArea.scale = 0, cc.game.on("LevelFinished", this.showPopup, this)
                }, e.prototype.showPopup = function () {
                    this.safeArea.active = !0, cc.audioEngine.stopAllEffects(), this.node.getComponent(cc.Animation).play(), 10 == parseInt(p.default.getInstace().getItem("hc_currLevel")) && (this.replayBtn.active = !0, this.nextBtn.active = !1), cc.game.emit("ShowPromotion"), l.default.getInstance().play("LEVEL COMPLETE SPARKLE_COMMON")
                }, e.prototype.onNextClick = function () {
                    return a(this, void 0, void 0, function () {
                        var t;
                        return c(this, function (e) {
                            switch (e.label) {
                                case 0:
                                    return l.default.getInstance().play("UI TAP_COMMON"), t = parseInt(p.default.getInstace().getItem("hc_currLevel")), p.default.getInstace().setItem("hc_level" + t + "completed", "true"), p.default.getInstace().setItem("hc_level" + (t + 1) + "locked", "false"), p.default.getInstace().setItem("hc_currLevel", (t + 1).toString()), u.default.getInstance().requestAds(), cc.director.preloadScene("LevelScene"), [4, s.Delay(.5)];
                                case 1:
                                    return e.sent(), cc.director.loadScene("LevelScene"), [2]
                            }
                        })
                    })
                }, e.prototype.onRetryClick = function () {
                    return a(this, void 0, void 0, function () {
                        return c(this, function (t) {
                            switch (t.label) {
                                case 0:
                                    return l.default.getInstance().play("UI TAP_COMMON"), this.resetData(), u.default.getInstance().requestAds(), cc.director.preloadScene("LevelScene"), [4, s.Delay(.5)];
                                case 1:
                                    return t.sent(), cc.director.loadScene("LevelScene"), [2]
                            }
                        })
                    })
                }, e.prototype.resetData = function () {
                    p.default.getInstace().setItem("hc_currLevel", "1");
                    for (var t = 1; t < 11; t++) p.default.getInstace().setItem("hc_level" + t + "locked", "true"), p.default.getInstace().setItem("hc_level" + t + "completed", "false");
                    p.default.getInstace().setItem("hc_level1locked", "false"), p.default.getInstace().removeItem("adbtn1"), p.default.getInstace().removeItem("adbtn2"), p.default.getInstace().setItem("ViewCount", "0")
                }, i([h(cc.Node)], e.prototype, "nextBtn", void 0), i([h(cc.Node)], e.prototype, "replayBtn", void 0), i([h(cc.Node)], e.prototype, "safeArea", void 0), i([d], e)
            }(cc.Component);
        n.default = g, cc._RF.pop()
    }, {
        "./HelperTools": "HelperTools",
        "./Promotion/AdManager": "AdManager",
        "./Promotion/AudioManager": "AudioManager",
        "./SessionStorageHelper": "SessionStorageHelper"
    }],
    Promotion: [function (t, e, n) {
        "use strict";
        cc._RF.push(e, "c363esmtuVBDJcSkzRVx80v", "Promotion");
        var o, r = this && this.__extends || (o = function (t, e) {
            return (o = Object.setPrototypeOf || {
                __proto__: []
            }
                instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                })(t, e)
        }, function (t, e) {
            function n() {
                this.constructor = t
            }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        }),
            i = this && this.__decorate || function (t, e, n, o) {
                var r, i = arguments.length,
                    a = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o);
                else
                    for (var c = t.length - 1; c >= 0; c--)(r = t[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(e, n, a) : r(e, n)) || a);
                return i > 3 && a && Object.defineProperty(e, n, a), a
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = t("../SessionStorageHelper"),
            c = t("./AdManager"),
            s = t("./CocosHelper"),
            u = cc._decorator,
            l = u.ccclass,
            p = (u.property, function (t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                var n;
                return r(e, t), n = e, e.prototype.start = function () {
                    n.self = this;
                    var t = this;
                    "promoBack" == t.node.name && this.setPromoThumb();
                    var e = "game";
                    "MainScene" == cc.director.getScene().name && (e = "mainscreen"), this.node.on(cc.Node.EventType.TOUCH_END, function () {
                        window.GAMESDK.moreGame();
                    })
                }, e.prototype.setPromoThumb = function () {

                 
                }, e.prototype.onReplayClick = function (t) {
                    t.target.getComponent(cc.Button).interactable = !1, c.default.getInstance().requestAds(), a.default.getInstace().setItem("hc_currLevel", "1");
                    for (var e = 1; e < 11; e++) a.default.getInstace().setItem("hc_level" + e + "locked", "true"), a.default.getInstace().setItem("hc_level" + e + "completed", "false");
                    a.default.getInstace().setItem("hc_level1locked", "false"), a.default.getInstace().removeItem("adbtn1"), a.default.getInstace().removeItem("adbtn2"), a.default.getInstace().setItem("ViewCount", "0"), this.scheduleOnce(function () {
                        cc.director.loadScene("LevelScene")
                    }, .3)
                }, e.self = null, n = i([l], e)
            }(cc.Component));
        n.default = p, cc._RF.pop()
    }, {
        "../SessionStorageHelper": "SessionStorageHelper",
        "./AdManager": "AdManager",
        "./CocosHelper": "CocosHelper"
    }],
    RewardFailed: [function (t, e, n) {
        "use strict";
        cc._RF.push(e, "de049FllctHALvm/i+bzPTu", "RewardFailed");
        var o, r = this && this.__extends || (o = function (t, e) {
            return (o = Object.setPrototypeOf || {
                __proto__: []
            }
                instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                })(t, e)
        }, function (t, e) {
            function n() {
                this.constructor = t
            }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        }),
            i = this && this.__decorate || function (t, e, n, o) {
                var r, i = arguments.length,
                    a = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o);
                else
                    for (var c = t.length - 1; c >= 0; c--)(r = t[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(e, n, a) : r(e, n)) || a);
                return i > 3 && a && Object.defineProperty(e, n, a), a
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = cc._decorator,
            c = a.ccclass,
            s = (a.property, function (t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                var n;
                return r(e, t), n = e, e.prototype.onLoad = function () {
                    n.self = this
                }, e.prototype.rewardCloseAction = function () {
                    this.node.parent.active = !1
                }, e.self = null, n = i([c], e)
            }(cc.Component));
        n.default = s, cc._RF.pop()
    }, {}],
    SessionStorageHelper: [function (t, e, n) {
        "use strict";
        cc._RF.push(e, "e96bbZPNJ5O0qlU3waXYYc4", "SessionStorageHelper");
        var o, r = this && this.__extends || (o = function (t, e) {
            return (o = Object.setPrototypeOf || {
                __proto__: []
            }
                instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                })(t, e)
        }, function (t, e) {
            function n() {
                this.constructor = t
            }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        }),
            i = this && this.__decorate || function (t, e, n, o) {
                var r, i = arguments.length,
                    a = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o);
                else
                    for (var c = t.length - 1; c >= 0; c--)(r = t[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(e, n, a) : r(e, n)) || a);
                return i > 3 && a && Object.defineProperty(e, n, a), a
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = cc._decorator,
            c = a.ccclass,
            s = (a.property, function (t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.Items = [], e
                }
                var n;
                return r(e, t), n = e, e.getInstace = function () {
                    return null == n.instance && (n.instance = new n), n.instance
                }, e.prototype.setItem = function (t, e) {
                    for (var n = !1, o = 0; o < this.Items.length; o++)
                        if (this.Items[o].Key == t) {
                            n = !0, this.Items[o].Value = e;
                            break
                        }
                    0 == n && this.Items.push({
                        Key: t,
                        Value: e
                    })
                }, e.prototype.getItem = function (t) {
                    for (var e = 0; e < this.Items.length; e++)
                        if (this.Items[e].Key == t) return this.Items[e].Value
                }, e.prototype.removeItem = function (t) {
                    for (var e = 0; e < this.Items.length; e++)
                        if (this.Items[e].Key == t) {
                            this.Items.splice(e, 1);
                            break
                        }
                }, e.instance = null, n = i([c], e)
            }(cc.Component));
        n.default = s, cc._RF.pop()
    }, {}],
    Splash: [function (t, e, n) {
        "use strict";
        cc._RF.push(e, "c6bf7WCiyhLBp1EjaRYWXtR", "Splash");
        var o, r = this && this.__extends || (o = function (t, e) {
            return (o = Object.setPrototypeOf || {
                __proto__: []
            }
                instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                })(t, e)
        }, function (t, e) {
            function n() {
                this.constructor = t
            }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        }),
            i = this && this.__decorate || function (t, e, n, o) {
                var r, i = arguments.length,
                    a = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o);
                else
                    for (var c = t.length - 1; c >= 0; c--)(r = t[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(e, n, a) : r(e, n)) || a);
                return i > 3 && a && Object.defineProperty(e, n, a), a
            },
            a = this && this.__awaiter || function (t, e, n, o) {
                return new (n || (n = Promise))(function (r, i) {
                    function a(t) {
                        try {
                            s(o.next(t))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function c(t) {
                        try {
                            s(o.throw(t))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function s(t) {
                        var e;
                        t.done ? r(t.value) : (e = t.value, e instanceof n ? e : new n(function (t) {
                            t(e)
                        })).then(a, c)
                    }
                    s((o = o.apply(t, e || [])).next())
                })
            },
            c = this && this.__generator || function (t, e) {
                var n, o, r, i, a = {
                    label: 0,
                    sent: function () {
                        if (1 & r[0]) throw r[1];
                        return r[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: c(0),
                    throw: c(1),
                    return: c(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function () {
                    return this
                }), i;

                function c(t) {
                    return function (e) {
                        return s([t, e])
                    }
                }

                function s(i) {
                    if (n) throw new TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (n = 1, o && (r = 2 & i[0] ? o.return : i[0] ? o.throw || ((r = o.return) && r.call(o), 0) : o.next) && !(r = r.call(o, i[1])).done) return r;
                        switch (o = 0, r && (i = [2 & i[0], r.value]), i[0]) {
                            case 0:
                            case 1:
                                r = i;
                                break;
                            case 4:
                                return a.label++, {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, o = i[1], i = [0];
                                continue;
                            case 7:
                                i = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(r = (r = a.trys).length > 0 && r[r.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === i[0] && (!r || i[1] > r[0] && i[1] < r[3])) {
                                    a.label = i[1];
                                    break
                                }
                                if (6 === i[0] && a.label < r[1]) {
                                    a.label = r[1], r = i;
                                    break
                                }
                                if (r && a.label < r[2]) {
                                    a.label = r[2], a.ops.push(i);
                                    break
                                }
                                r[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        i = e.call(t, a)
                    } catch (c) {
                        i = [6, c], o = 0
                    } finally {
                            n = r = 0
                        }
                    if (5 & i[0]) throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var s = t("./Promotion/AudioManager"),
            u = cc._decorator,
            l = u.ccclass,
            p = u.property,
            f = function (t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.isPortrait = !0, e.logo = null, e
                }
                var n;
                return r(e, t), n = e, e.prototype.onLoad = function () {
                    return a(this, void 0, void 0, function () {
                        return c(this, function () {
                            return cc.debug.setDisplayStats(!1), s.default.getInstance(), n.self = this, [2]
                        })
                    })
                }, e.prototype.start = function () {
                    cc.director.preloadScene("MainScene");
                    var t = this;
                    cc.view.setResizeCallback(function () {
                        t.updateLogo(cc.view.getFrameSize())
                    }), this.updateLogo(cc.view.getFrameSize())
                }, e.prototype.updateLogo = function (t) {
                    cc.sys.isMobile ? this.isPortrait ? t.width < t.height ? (console.log("landscape"), this.logo.scale = 1, this.logo.position = cc.v3(0, 0, 0)) : (console.log("portrait"), this.logo.scale = 1.7, this.logo.position = cc.v3(0, 70, 0)) : t.width > t.height ? (console.log("landscape"), this.logo.scale = 1, this.logo.position = cc.v3(0, 0, 0)) : (console.log("portrait"), this.logo.scale = 1.7, this.logo.position = cc.v3(0, 70, 0)) : (this.logo.scale = 0.65, this.logo.position = cc.v3(0, 0, 0))
                }, e.prototype.PlayAction = function (t) {
                    cc.view.off("canvas-resize");
                    var e = t.target;
                    e && (e.getComponent(cc.Button).interactable = !1), cc.director.loadScene("MainScene"), s.default.getInstance().play("UI TAP_COMMON")
                }, e.prototype.OpenUrl = function () {
                    window.GAMESDK.moreGame();
                }, e.self = null, i([p], e.prototype, "isPortrait", void 0), i([p(cc.Node)], e.prototype, "logo", void 0), n = i([l], e)
            }(cc.Component);
        n.default = f, cc._RF.pop()
    }, {
        "./Promotion/AudioManager": "AudioManager"
    }],
    StorageHelper: [function (t, e, n) {
        "use strict";
        cc._RF.push(e, "0807dphxfdMfZYg09f/qRMf", "StorageHelper");
        var o, r = this && this.__extends || (o = function (t, e) {
            return (o = Object.setPrototypeOf || {
                __proto__: []
            }
                instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                })(t, e)
        }, function (t, e) {
            function n() {
                this.constructor = t
            }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        }),
            i = this && this.__decorate || function (t, e, n, o) {
                var r, i = arguments.length,
                    a = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o);
                else
                    for (var c = t.length - 1; c >= 0; c--)(r = t[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(e, n, a) : r(e, n)) || a);
                return i > 3 && a && Object.defineProperty(e, n, a), a
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.StringDateFormat = n.TIMER_KEY = void 0;
        var a, c, s = t("./LevelData"),
            u = t("./HelperTools"),
            l = t("./SessionStorageHelper"),
            p = cc._decorator,
            f = p.ccclass;
        p.property,
            function (t) {
                t.HeartTimer = "HeartTimer"
            }(a = n.TIMER_KEY || (n.TIMER_KEY = {})),
            function (t) {
                t.HMS = "HMS", t.MS = "MS"
            }(c = n.StringDateFormat || (n.StringDateFormat = {}));
        var d = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            var n;
            return r(e, t), n = e, e.getInstance = function () {
                return null == n.instance && (this.instance = new n, this.instance.initConfig()), this.instance
            }, e.prototype.setLocalStorage = function (t, e) {
                localStorage.setItem(t, e)
            }, e.prototype.getLocalStorage = function (t) {
                return localStorage.getItem(t)
            }, e.prototype.setSessionStorage = function (t, e) {
                l.default.getInstace().setItem(t, e)
            }, e.prototype.getSessionStorage = function (t) {
                return l.default.getInstace().getItem(t)
            }, e.prototype.getCoin = function () {
                var t = this.getLocalStorage("gameCoin");
                return null == t || null == t ? Number(0) : Number(t)
            }, e.prototype.addCoin = function (t) {
                this.setLocalStorage("gameCoin", this.getCoin() + t)
            }, e.prototype.decCoin = function (t) {
                var e = this.getCoin();
                (e -= t) < 0 && (e = 0), this.setLocalStorage("gameCoin", e)
            }, e.prototype.setSubLevel = function (t, e) {
                this.setLocalStorage("SubLevel" + t, e)
            }, e.prototype.getSubLevel = function (t) {
                var e = this.getLocalStorage("SubLevel" + t);
                if (null == e) return this.setSubLevel(t, 1), 1;
                var n = Number(e);
                return n <= 0 ? (this.setSubLevel(t, 1), n) : 1
            }, e.prototype.getGem = function () {
                var t = this.getLocalStorage("gameGem");
                return null == t ? 0 : Number(Number(t).toFixed(0))
            }, e.prototype.addGem = function (t) {
                this.setLocalStorage("gameGem", this.getGem() + t)
            }, e.prototype.decGem = function (t) {
                var e = this.getGem();
                (e -= t) < 0 && (e = 0), this.setLocalStorage("gameGem", e)
            }, e.prototype.setHeart = function (t) {
                this.setLocalStorage("gameHeart", t)
            }, e.prototype.addHeart = function (t) {
                this.getHeart() < 5 && this.setHeart(this.getHeart() + t), this.getHeart() >= 5 && (this.setHeart(5), localStorage.removeItem(a.HeartTimer))
            }, e.prototype.deductHeart = function () {
                this.getHeart() > 0 && this.setHeart(this.getHeart() - 1), 4 == this.getHeart() && (localStorage.removeItem(a.HeartTimer), this.StartTimer(a.HeartTimer))
            }, e.prototype.getHeart = function () {
                var t = this.getLocalStorage("gameHeart");
                return null == t || null == t ? Number(0) : parseInt(t)
            }, e.prototype.resetTimer = function (t) {
                localStorage.removeItem(t)
            }, e.prototype.StartTimer = function (t) {
                var e = this.getLocalStorage(t);
                if (null == e || null == e) {
                    var n = (new Date).getTime();
                    this.setLocalStorage(t, n)
                }
            }, e.prototype.updateHeart = function (t) {
                if (t > 720) {
                    var e = t / 720;
                    if (this.addHeart(e), 5 != this.getHeart()) {
                        var n = t % 720,
                            o = (new Date).getTime();
                        this.setLocalStorage(a.HeartTimer, o - n)
                    } else localStorage.removeItem(a.HeartTimer)
                }
            }, e.prototype.getRemainSec = function (t) {
                var e = this.getLocalStorage(t);
                if (null == e || null == e) return 0;
                var n = (new Date).getTime() - Number(e);
                return Number((n / 1e3).toFixed(0))
            }, e.prototype.getDataFormat = function (t, e, o) {
                var r, i, a = n.getInstance().getRemainSec(t);
                if ((a = 60 * o - a) < 0) return "0";
                if (e == c.HMS) {
                    a -= r = parseInt((a % 60).toFixed(0));
                    var s = parseInt((a / 60).toFixed(0));
                    return 0 == (s -= 60 * (i = parseInt((s / 60).toFixed(0)))) && 0 == r && 0 == i ? "0" : u.Pad(i, 2) + ":" + u.Pad(s, 2) + ":" + u.Pad(r, 2)
                }
                return e == c.MS ? (a -= r = parseInt((a % 60).toFixed(0)), s = parseInt((a / 60).toFixed(0)), 0 == (s -= 60 * (i = parseInt((s / 60).toFixed(0)))) && 0 == r && 0 == i ? "0" : u.Pad(s, 2) + ":" + u.Pad(r, 2)) : null
            }, e.prototype.getReachLevel = function (t) {
                var e = "Truck" + t + "ReachAt",
                    n = this.getLocalStorage(e);
                return null == n ? 1 : n
            }, e.prototype.setReachLevel = function (t, e) {
                var n = "Truck" + t + "ReachAt";
                this.setLocalStorage(n, e)
            }, e.prototype.getItemLevel = function (t, e) {
                var n = "Item_" + t + "_" + e,
                    o = this.getLocalStorage(n);
                return null == o ? 0 : parseInt(o)
            }, e.prototype.setItemLevel = function (t, e, n) {
                var o = "Item_" + t + "_" + e;
                this.setLocalStorage(o, n)
            }, e.prototype.unlockItem = function (t, e) {
                for (var n = this.getReachLevel(t), o = 0; o < e.length; o++) 0 == this.getItemLevel(t, e[o]) && s.default.getInstance().getIngridientOpneAt(e[o]) <= n && this.setItemLevel(t, e[o], 1)
            }, e.prototype.initConfig = function () {
                null === this.getLocalStorage("IsInitData") && (this.setHeart(5), this.setLocalStorage("gameGem", 200), this.setLocalStorage("gameCoin", 1e3))
            }, e.prototype.getBoosterCount = function (t) {
                return Number(this.getLocalStorage(t))
            }, e.prototype.deductBooster = function (t, e) {
                var n = Number(this.getLocalStorage(t));
                this.setLocalStorage(t, n - e)
            }, e.prototype.addBooster = function (t, e) {
                var n = Number(this.getLocalStorage(t));
                this.setLocalStorage(t, n + e)
            }, e.instance = null, n = i([f], e)
        }(cc.Component);
        n.default = d, cc._RF.pop()
    }, {
        "./HelperTools": "HelperTools",
        "./LevelData": "LevelData",
        "./SessionStorageHelper": "SessionStorageHelper"
    }],
    ThinkingPopup: [function (t, e, n) {
        "use strict";
        cc._RF.push(e, "21748xBWP1AD5lL1gs6NneF", "ThinkingPopup");
        var o, r = this && this.__extends || (o = function (t, e) {
            return (o = Object.setPrototypeOf || {
                __proto__: []
            }
                instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                })(t, e)
        }, function (t, e) {
            function n() {
                this.constructor = t
            }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        }),
            i = this && this.__decorate || function (t, e, n, o) {
                var r, i = arguments.length,
                    a = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o);
                else
                    for (var c = t.length - 1; c >= 0; c--)(r = t[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(e, n, a) : r(e, n)) || a);
                return i > 3 && a && Object.defineProperty(e, n, a), a
            },
            a = this && this.__awaiter || function (t, e, n, o) {
                return new (n || (n = Promise))(function (r, i) {
                    function a(t) {
                        try {
                            s(o.next(t))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function c(t) {
                        try {
                            s(o.throw(t))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function s(t) {
                        var e;
                        t.done ? r(t.value) : (e = t.value, e instanceof n ? e : new n(function (t) {
                            t(e)
                        })).then(a, c)
                    }
                    s((o = o.apply(t, e || [])).next())
                })
            },
            c = this && this.__generator || function (t, e) {
                var n, o, r, i, a = {
                    label: 0,
                    sent: function () {
                        if (1 & r[0]) throw r[1];
                        return r[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: c(0),
                    throw: c(1),
                    return: c(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function () {
                    return this
                }), i;

                function c(t) {
                    return function (e) {
                        return s([t, e])
                    }
                }

                function s(i) {
                    if (n) throw new TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (n = 1, o && (r = 2 & i[0] ? o.return : i[0] ? o.throw || ((r = o.return) && r.call(o), 0) : o.next) && !(r = r.call(o, i[1])).done) return r;
                        switch (o = 0, r && (i = [2 & i[0], r.value]), i[0]) {
                            case 0:
                            case 1:
                                r = i;
                                break;
                            case 4:
                                return a.label++, {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, o = i[1], i = [0];
                                continue;
                            case 7:
                                i = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(r = (r = a.trys).length > 0 && r[r.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === i[0] && (!r || i[1] > r[0] && i[1] < r[3])) {
                                    a.label = i[1];
                                    break
                                }
                                if (6 === i[0] && a.label < r[1]) {
                                    a.label = r[1], r = i;
                                    break
                                }
                                if (r && a.label < r[2]) {
                                    a.label = r[2], a.ops.push(i);
                                    break
                                }
                                r[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        i = e.call(t, a)
                    } catch (c) {
                        i = [6, c], o = 0
                    } finally {
                            n = r = 0
                        }
                    if (5 & i[0]) throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.ThinkingPopupEventMacro = void 0;
        var s, u = t("./CharacterCtrl"),
            l = t("./HelperTools"),
            p = t("./LevelData"),
            f = t("./LevelDataHelper"),
            d = t("./Promotion/AudioManager"),
            h = t("./ToolTap"),
            g = cc._decorator,
            v = g.ccclass;
        g.property,
            function (t) {
                t.Show = "ThinkingPopup.Show", t.Hide = "ThinkingPopup.Hide", t.Exit = "ThinkingPopup.Exit", t.ComboCountUpdate = "ThinkingPopup.ComboCountUpdate"
            }(s = n.ThinkingPopupEventMacro || (n.ThinkingPopupEventMacro = {}));
        var m = function (t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.ThinkingPopupParent = null, e.ItemList = [], e.PopupIndex = 0, e.CharacterIndex = 0, e.RecipeCount = 0, e.Progress = null, e
            }
            return r(e, t), e.prototype.onLoad = function () {
                this.cacheItems()
            }, e.prototype.start = function () {
                this.registerEvents()
            }, e.prototype.registerEvents = function () {
                cc.game.on(s.Show, this.ShowThinkingPopup, this), cc.game.on(s.Hide, this.HideThinkingPopup, this), cc.game.on(s.Exit, this.ExitAll, this)
            }, e.prototype.cacheItems = function () {
                this.ThinkingPopupParent = cc.find("SafeArea", this.node), this.ThinkingPopupParent.active = !1, this.Progress = cc.find("ProgressBack/Progress", this.ThinkingPopupParent).getComponent(cc.Sprite)
            }, e.prototype.startProgress = function (t) {
                var e = this;
                this.ThinkingPopupParent.getComponent(cc.Animation).stop("ThinkingTimerProgress"), this.ThinkingPopupParent.getComponent(cc.Animation).getAnimationState("ThinkingTimerProgress").speed = 12 / t, this.ThinkingPopupParent.getComponent(cc.Animation).play("ThinkingTimerProgress"), this.ThinkingPopupParent.getComponent(cc.Animation).once(cc.Animation.EventType.FINISHED, function () {
                    cc.game.emit(u.CharacterCtrlEventMacro.Exit, e.PopupIndex), e.HideThinkingPopup(e.node.name)
                }, this)
            }, e.prototype.setThinkingItem = function () {
                this.ItemList = p.default.getInstance().getCustomerRecipeData(this.CharacterIndex), this.RecipeCount = this.ItemList.length, this.ThinkingPopupParent.getChildByName("Food").removeAllChildren(!0);
                for (var t = 0; t < this.ItemList.length; t++) {
                    var e = new cc.Node;
                    this.ThinkingPopupParent.getChildByName("Food").addChild(e), e.addComponent(cc.Sprite), e.getComponent(cc.Sprite).spriteFrame = f.default.getInstance().getFrame("Recipe/Truck" + p.default.getInstance().SelectedTruck, this.ItemList[t]), e.getComponent(cc.Sprite).sizeMode = cc.Sprite.SizeMode.RAW, e.getComponent(cc.Sprite).trim = !1, e.name = this.ItemList[t].toString(), e.scale = .6
                }
                0 == this.ItemList.length && alert("Recipe NULL" + this.CharacterIndex), this.refreshItem()
            }, e.prototype.refreshItem = function () {
                var t = [];
                t.push(cc.v2(-5, -44)), t.push(cc.v2(-5, 0)), t.push(cc.v2(-5, 44)), 2 == this.RecipeCount ? (t[0] = cc.v2(-5, -30), t[1] = cc.v2(-5, 30)) : 1 == this.RecipeCount && (t[0] = cc.v2(-5, 0));
                for (var e = 0; e < this.ItemList.length; e++) this.ThinkingPopupParent.getChildByName("Food").children[e].setPosition(t[e])
            }, e.prototype.checkCustomer = function () {
                0 == this.ItemList.length && (this.ThinkingPopupParent.getComponent(cc.Animation).stop(), cc.game.emit(u.CharacterCtrlEventMacro.Exit, this.PopupIndex), this.HideThinkingPopup(this.node.name))
            }, e.prototype.deleteItem = function (t, e) {
                return a(this, void 0, void 0, function () {
                    var n, o, r, i = this;
                    return c(this, function () {
                        for (n = function (n) {
                            if (o.ItemList[n] == t) {
                                var r = o.ThinkingPopupParent.getChildByName("Food").getChildByName(o.ItemList[n]);
                                e.getComponent(h.default).setStatusIdle();
                                var a = cc.instantiate(r);
                                o.node.parent.parent.addChild(a);
                                var c = o.node.parent.parent.convertToNodeSpaceAR(e.parent.convertToWorldSpaceAR(e.position)),
                                    s = o.ThinkingPopupParent.getChildByName("Food").getChildByName(o.ItemList[n]),
                                    u = o.node.parent.parent.convertToNodeSpaceAR(s.parent.convertToWorldSpaceAR(s.position));
                                a.setPosition(c), a.scale = .5, a.zIndex = 100;
                                var f = .5 * l.distanceBetween2Points(c, u) / 400;
                                return o.unschedule(o.checkCustomer), o.scheduleOnce(o.checkCustomer, f), cc.tween(a).to(f / 2, {
                                    scale: 1.5
                                }).to(f / 2, {
                                    scale: .5
                                }).start(), cc.tween(a).to(f, {
                                    position: u
                                }, {
                                    easing: "sineOut"
                                }).call(function () {
                                    r.removeFromParent(!0), i.RecipeCount--, i.refreshItem(), i.startProgress(p.default.getInstance().getCustomerWaitingTime())
                                }).removeSelf().start(), o.ItemList.splice(n, 1), "break"
                            }
                        }, o = this, r = 0; r < this.ItemList.length && "break" !== n(r); r++);
                        return [2]
                    })
                })
            }, e.prototype.isItemAvailable = function (t) {
                for (var e = 0; e < this.ItemList.length; e++)
                    if (this.ItemList[e] == t) return !0;
                return !1
            }, e.prototype.ShowThinkingPopup = function (t, e) {
                t.toString() == this.node.name && (this.CharacterIndex = e, this.PopupIndex = t, this.setThinkingItem(), this.ThinkingPopupParent.active = !0, this.ThinkingPopupParent.scale = 0, cc.Tween.stopAllByTarget(this.ThinkingPopupParent), cc.tween(this.ThinkingPopupParent).to(.25, {
                    scale: 1
                }, {
                    easing: "backOut"
                }).call(function () {
                    d.default.getInstance().play("thinking bubble")
                }).start(), 0 == p.default.getInstance().isShowHint && this.startProgress(p.default.getInstance().getCustomerWaitingTime()))
            }, e.prototype.HideThinkingPopup = function (t) {
                var e = this;
                t.toString() == this.node.name && (cc.Tween.stopAllByTarget(this.ThinkingPopupParent), cc.tween(this.ThinkingPopupParent).to(.25, {
                    scale: 0
                }, {
                    easing: "backIn"
                }).call(function () {
                    e.ThinkingPopupParent.active = !1
                }).start(), this.ItemList.splice(0, this.ItemList.length))
            }, e.prototype.ExitAll = function () {
                console.log("ExitAll"), cc.game.emit(u.CharacterCtrlEventMacro.Exit, this.PopupIndex), this.HideThinkingPopup(this.node.name)
            }, e.prototype.getRecipeList = function () {
                return this.ItemList
            }, e.prototype.getProgress = function () {
                return 0 == this.ThinkingPopupParent.active ? 1 : this.Progress.fillRange
            }, i([v], e)
        }(cc.Component);
        n.default = m, cc._RF.pop()
    }, {
        "./CharacterCtrl": "CharacterCtrl",
        "./HelperTools": "HelperTools",
        "./LevelData": "LevelData",
        "./LevelDataHelper": "LevelDataHelper",
        "./Promotion/AudioManager": "AudioManager",
        "./ToolTap": "ToolTap"
    }],
    ToolTap: [function (t, e, n) {
        "use strict";
        cc._RF.push(e, "31d90sCCWlEBronNUnFS2e+", "ToolTap");
        var o, r = this && this.__extends || (o = function (t, e) {
            return (o = Object.setPrototypeOf || {
                __proto__: []
            }
                instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                })(t, e)
        }, function (t, e) {
            function n() {
                this.constructor = t
            }
            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        }),
            i = this && this.__decorate || function (t, e, n, o) {
                var r, i = arguments.length,
                    a = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o);
                else
                    for (var c = t.length - 1; c >= 0; c--)(r = t[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(e, n, a) : r(e, n)) || a);
                return i > 3 && a && Object.defineProperty(e, n, a), a
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.ToolTapEventMacro = void 0;
        var a, c = t("./FoodProgress"),
            s = t("./LevelData"),
            u = cc._decorator,
            l = u.ccclass,
            p = u.property;
        (function (t) {
            t.Tap = "ToolTap.TapObject", t.Update = "ToolTap.UpdateItem", t.Dustbin = "ToolTap.Dustbin"
        })(a = n.ToolTapEventMacro || (n.ToolTapEventMacro = {}));
        var f = function (t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.FoodIndex = 1, e.FoodPrgressObj = null, e.isServingPlate = !1, e.RecipeID = "", e.FoodID = "", e.TapCount = 0, e.TapNode = null, e
            }
            return r(e, t), e.prototype.onLoad = function () {
                var t = Object.keys(s.FOOD_ID.Items)[this.FoodIndex];
                this.FoodID = t.substr(t.indexOf("-") + 1, t.length), this.TapNode = new cc.Node, this.registerEvents()
            }, e.prototype.start = function () {
                var t = this;
                this.FoodPrgressObj && this.FoodPrgressObj.setFoodID(this.FoodID, this.node, this.FoodIndex), this.node.on(cc.Node.EventType.TOUCH_START, function () {
                    s.default.getInstance().isShowHint && s.default.getInstance().HintID != t.FoodIndex ? console.log("return- Tap On Only" + s.default.getInstance().HintID) : (cc.game.emit(a.Tap, t.node), t.TapCount++, t.TapCount > 1 && (cc.game.emit(a.Dustbin, t.node), t.TapCount = 0), cc.Tween.stopAllByTarget(t.TapNode), cc.tween(t.TapNode).delay(.5).call(function () {
                        t.TapCount = 0
                    }).start())
                }, this)
            }, e.prototype.setRecipeID = function (t) {
                this.RecipeID = t
            }, e.prototype.getRecipeID = function () {
                return this.RecipeID
            }, e.prototype.StartProgress = function () {
                this.FoodPrgressObj && this.FoodPrgressObj.onStartFoodProgress()
            }, e.prototype.cacheProperty = function () { }, e.prototype.registerEvents = function () { }, e.prototype.setStatusIdle = function () {
                this.RecipeID = "", this.FoodPrgressObj && (this.FoodPrgressObj.setFoodStatus(c.FoodProgressStatus.IDLE), this.FoodPrgressObj.hideProgress())
            }, i([p({
                type: cc.Enum(s.FOOD_ID.Items)
            })], e.prototype, "FoodIndex", void 0), i([p(c.default)], e.prototype, "FoodPrgressObj", void 0), i([p(cc.Boolean)], e.prototype, "isServingPlate", void 0), i([l], e)
        }(cc.Component);
        n.default = f, cc._RF.pop()
    }, {
        "./FoodProgress": "FoodProgress",
        "./LevelData": "LevelData"
    }]
}, {}, ["CharacterCtrl", "Customer", "FoodProgress", "HelperTools", "Hint", "Ingridient1", "LevelData", "LevelDataHelper", "LevelScene", "MainScene", "Playarea", "Popup", "AdManager", "AudioManager", "CocosHelper", "Promotion", "RewardFailed", "SessionStorageHelper", "Splash", "StorageHelper", "ThinkingPopup", "ToolTap"]);

window.GAMESDK.startup();